"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import { site } from "@/content/site";

type FieldName = "name" | "phone" | "email" | "message" | "agree";

export type ContactFormState = {
  error?: string;
  /** Pole, którego dotyczy błąd – formularz oznacza je i ustawia na nim fokus. */
  field?: FieldName;
  /** Wpisane dane – po błędzie wracają do formularza, nic nie ginie. */
  values?: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    agree?: boolean;
  };
  submittedAt?: number;
};

/* ==========================================================================
   STAŁE – tworzone raz przy załadowaniu pliku, a nie przy każdym zgłoszeniu
   ========================================================================== */

const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  phoneDisplayMax: 30,
  emailMax: 254,
  messageMax: 3000,
  linksInMessageMax: 3,
} as const;

const DEFAULT_MESSAGE = "Brak dodatkowego opisu";

const DEFAULT_SENDER =
  "Upadłość Konsumencka <kontakt@upadlosckonsumenckachorzow.pl>";

// Ogólne komunikaty – użytkownik nie widzi szczegółów technicznych błędu.
const ERRORS = {
  sendFailed:
    "Nie udało się przesłać formularza. Prosimy o bezpośredni kontakt telefoniczny.",
  serverError:
    "Wystąpił błąd serwera. Skontaktuj się z nami bezpośrednio telefonicznie.",
  tooMany:
    "Wysłano zbyt wiele zgłoszeń w krótkim czasie. Spróbuj ponownie za minutę lub zadzwoń do nas.",
} as const;

// Imię i nazwisko: litery z dowolnego alfabetu (w tym ą, ę, ł, ż), spacje,
// myślnik, kropka i apostrof. Pierwszy znak musi być literą.
// Blokuje cyfry, linki i znaczniki HTML, które wpisują boty spamujące.
const NAME_REGEX = /^\p{L}[\p{L}\p{M}\s'’.-]*$/u;

// Telefon: po usunięciu separatorów zostają same cyfry (7–15),
// opcjonalnie z plusem na początku, np. +48516516246.
const PHONE_SEPARATORS = /[\s().\/-]/g;
const PHONE_REGEX = /^\+?\d{7,15}$/;

// E-mail w formacie nazwa@domena.pl – bez spacji i pustych członów domeny.
const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

const LINK_REGEX = /https?:\/\/|www\./gi;

// Niewidoczne znaki sterujące oraz znaki zero-width i zmiany kierunku
// tekstu, którymi da się ukryć albo podmienić treść wyświetlaną w mailu.
const INVISIBLE_CHARS =
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2060-\u2069\uFEFF]/g;

/* ==========================================================================
   KLIENT RESEND – tworzony przy pierwszym zgłoszeniu i zapamiętywany
   ========================================================================== */

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  if (resendClient) return resendClient;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  resendClient = new Resend(apiKey);
  return resendClient;
}

/* ==========================================================================
   CZYSZCZENIE DANYCH
   ========================================================================== */

// formData.get może zwrócić plik (File) zamiast tekstu – taki wpis ignorujemy.
function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

// Pola jednoliniowe: usuwa niewidoczne znaki i łamanie linii (ochrona
// nagłówków maila), a wielokrotne spacje zamienia na jedną.
function cleanSingleLine(value: string): string {
  return value
    .normalize("NFC")
    .replace(INVISIBLE_CHARS, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Wiadomość: zachowuje akapity, ale ujednolica końce linii
// i ogranicza puste linie do maksymalnie jednej z rzędu.
function cleanMultiline(value: string): string {
  return value
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(INVISIBLE_CHARS, "")
    .replace(/[^\S\n]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Zabezpieczenie przed wstrzyknięciem kodu HTML do maila (XSS).
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatWarsawDate(date: Date): string {
  try {
    return date.toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" });
  } catch {
    return date.toISOString();
  }
}

/* ==========================================================================
   WALIDACJA
   ========================================================================== */

type ContactData = {
  name: string;
  phone: string; // same cyfry – do linku tel: i tematu maila
  phoneDisplay: string; // numer w formie wpisanej przez użytkownika
  email: string;
  message: string;
};

type ValidationResult =
  | { ok: true; data: ContactData }
  | { ok: false; error: string; field: FieldName };

function validateForm(formData: FormData): ValidationResult {
  const name = cleanSingleLine(readField(formData, "name"));
  const phoneDisplay = cleanSingleLine(readField(formData, "phone"));
  const email = cleanSingleLine(readField(formData, "email"));
  const message =
    cleanMultiline(readField(formData, "message")) || DEFAULT_MESSAGE;
  const agree = readField(formData, "agree") === "on";

  if (name.length < LIMITS.nameMin) {
    return {
      ok: false,
      error: "Proszę podać imię i nazwisko (minimum 2 znaki).",
      field: "name",
    };
  }
  if (name.length > LIMITS.nameMax) {
    return {
      ok: false,
      error: "Wprowadzone imię i nazwisko jest zbyt długie (maks. 100 znaków).",
      field: "name",
    };
  }
  if (!NAME_REGEX.test(name)) {
    return {
      ok: false,
      error:
        "Imię i nazwisko może zawierać tylko litery, spacje, myślniki i apostrofy.",
      field: "name",
    };
  }

  const phone = phoneDisplay.replace(PHONE_SEPARATORS, "");
  if (
    phoneDisplay.length > LIMITS.phoneDisplayMax ||
    !PHONE_REGEX.test(phone)
  ) {
    return { ok: false, error: "Proszę podać prawidłowy numer telefonu.", field: "phone" };
  }

  // Długość sprawdzamy przed wyrażeniem regularnym, żeby nie analizować
  // bardzo długich ciągów znaków.
  if (email.length > LIMITS.emailMax || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Proszę podać prawidłowy adres e-mail.", field: "email" };
  }

  if (message.length > LIMITS.messageMax) {
    return {
      ok: false,
      error: "Wiadomość jest zbyt długa (maksymalnie 3000 znaków).",
      field: "message",
    };
  }

  const linkCount = message.match(LINK_REGEX)?.length ?? 0;
  if (linkCount > LIMITS.linksInMessageMax) {
    return {
      ok: false,
      error:
        "Wiadomość zawiera zbyt wiele linków. Opisz swoją sytuację własnymi słowami lub zadzwoń do nas.",
      field: "message",
    };
  }

  if (!agree) {
    return {
      ok: false,
      error: "Wymagana jest akceptacja polityki prywatności.",
      field: "agree",
    };
  }

  return { ok: true, data: { name, phone, phoneDisplay, email, message } };
}

/* ==========================================================================
   TREŚĆ MAILA
   ========================================================================== */

function buildTextEmail(data: ContactData, sentAt: string): string {
  return [
    `Nowe zgłoszenie z formularza kontaktowego (${site.name})`,
    "",
    `Imię i nazwisko: ${data.name}`,
    `Telefon: ${data.phoneDisplay}`,
    `E-mail: ${data.email}`,
    "",
    "Opis sytuacji:",
    data.message,
    "",
    "Zgoda RODO: Tak",
    `Data zgłoszenia: ${sentAt}`,
    `Strona: ${site.url}`,
  ].join("\n");
}

function buildHtmlEmail(data: ContactData, sentAt: string): string {
  // Każda wartość trafia do HTML dopiero po escapeHtml. Wyjątkiem jest
  // data.phone w linku tel: – po walidacji zawiera wyłącznie cyfry i "+".
  const name = escapeHtml(data.name);
  const phoneDisplay = escapeHtml(data.phoneDisplay);
  const email = escapeHtml(data.email);
  const message = escapeHtml(data.message);
  const siteName = escapeHtml(site.name);
  const siteUrl = escapeHtml(site.url);
  const date = escapeHtml(sentAt);

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; padding: 24px 12px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
    <div style="background-color: #0f172a; padding: 28px 24px; text-align: center; border-bottom: 3px solid #16a34a;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">Nowe zapytanie o upadłość konsumencką</h1>
      <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">${siteName}</p>
    </div>
    <div style="padding: 28px 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Imię i nazwisko:</td>
          <td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 700;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600;">Numer telefonu:</td>
          <td style="padding: 12px 0; font-size: 15px;">
            <a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none; font-weight: 700; background-color: #f8fafc; padding: 4px 8px; border-radius: 6px; border: 1px solid #e2e8f0;">📞 ${phoneDisplay}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600;">Adres e-mail:</td>
          <td style="padding: 12px 0; font-size: 15px;">
            <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">✉️ ${email}</a>
          </td>
        </tr>
      </table>
      <div style="background-color: #f8fafc; border-left: 4px solid #16a34a; padding: 18px; border-radius: 0 8px 8px 0;">
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Przedstawiona sytuacja:</p>
        <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
      <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
        Zgoda na przetwarzanie danych: tak · Zgłoszenie z dnia ${date}<br>
        Wiadomość wysłana ze strony <a href="${siteUrl}" style="color: #64748b; text-decoration: underline;">${siteUrl}</a>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ==========================================================================
   LIMIT ZGŁOSZEŃ – Cloudflare Rate Limiting (binding w wrangler.jsonc)
   ========================================================================== */

type RateLimiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

// Zwraca true, gdy z danego adresu IP wysłano zbyt wiele zgłoszeń.
// Brak bindingu (np. lokalnie bez wranglera) = brak limitu, a nie błąd.
async function isRateLimited(): Promise<boolean> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const limiter = (env as unknown as { CONTACT_RATE_LIMITER?: RateLimiter })
      .CONTACT_RATE_LIMITER;
    if (!limiter) return false;
    const ip = (await headers()).get("cf-connecting-ip") ?? "unknown";
    const { success } = await limiter.limit({ key: ip });
    return !success;
  } catch {
    return false;
  }
}

/* ==========================================================================
   SERVER ACTION
   ========================================================================== */

export async function sendContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. Honeypot – pole niewidoczne dla ludzi. Bot, który je wypełni,
  //    trafia na stronę podziękowania, żeby nie wiedział, że został wykryty.
  if (readField(formData, "website_url").trim() !== "") {
    redirect("/dziekujemy");
  }

  // Wpisane dane wracają do formularza przy każdym błędzie.
  const values: ContactFormState["values"] = {
    name: readField(formData, "name").slice(0, LIMITS.nameMax * 2),
    phone: readField(formData, "phone").slice(0, LIMITS.phoneDisplayMax * 2),
    email: readField(formData, "email").slice(0, LIMITS.emailMax),
    message: readField(formData, "message").slice(0, LIMITS.messageMax * 2),
    agree: readField(formData, "agree") === "on",
  };
  const fail = (error: string, field?: FieldName): ContactFormState => ({
    error,
    field,
    values,
    submittedAt: Date.now(),
  });

  // 2. Czyszczenie i walidacja danych
  const result = validateForm(formData);
  if (!result.ok) return fail(result.error, result.field);
  const data = result.data;

  // 3. Limit zgłoszeń z jednego adresu IP
  if (await isRateLimited()) return fail(ERRORS.tooMany);

  // 4. Klient Resend – brak klucza nie wysypuje strony, tylko zwraca komunikat
  const resend = getResendClient();
  if (!resend) {
    console.error("[contact] Brak zmiennej środowiskowej RESEND_API_KEY");
    return fail(ERRORS.sendFailed);
  }

  const sentAt = formatWarsawDate(new Date());

  // 5. Wysyłka. W logach zapisujemy tylko opis błędu, bez danych osobowych.
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_SENDER,
      to: [site.email.display],
      replyTo: data.email,
      subject: `🔔 Nowe zgłoszenie: ${data.name} (${data.phone})`,
      text: buildTextEmail(data, sentAt),
      html: buildHtmlEmail(data, sentAt),
    });

    if (error) {
      console.error("[contact] Resend odrzucił wiadomość:", error.message);
      return fail(ERRORS.sendFailed);
    }
  } catch (err) {
    console.error(
      "[contact] Wyjątek podczas wysyłki:",
      err instanceof Error ? err.message : "nieznany błąd",
    );
    return fail(ERRORS.serverError);
  }

  // redirect() poza try/catch – działa przez rzucenie wyjątku.
  redirect("/dziekujemy");
}

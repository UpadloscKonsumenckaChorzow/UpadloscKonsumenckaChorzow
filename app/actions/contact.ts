"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

// Funkcja zabezpieczająca przed XSS i wstrzykiwaniem kodu HTML do skrzynki pocztowej
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. Zabezpieczenie Honeypot (boty)
  const honeypot = formData.get("website_url")?.toString();
  if (honeypot) {
    return { success: true };
  }

  const rawName = formData.get("name")?.toString().trim() || "";
  const rawPhone = formData.get("phone")?.toString().trim() || "";
  const rawEmail = formData.get("email")?.toString().trim() || "";
  const rawMessage =
    formData.get("message")?.toString().trim() || "Brak dodatkowego opisu";
  const agree = formData.get("agree") === "on";

  // 2. Rygorystyczna walidacja danych wejściowych i limitów długości
  if (!rawName || rawName.length < 2) {
    return { error: "Proszę podać imię i nazwisko (minimum 2 znaki)." };
  }
  if (rawName.length > 100) {
    return {
      error: "Wprowadzone imię i nazwisko jest zbyt długie (maks. 100 znaków).",
    };
  }

  const cleanPhone = rawPhone.replace(/[\s\-\(\)]/g, "");
  if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 15) {
    return { error: "Proszę podać prawidłowy numer telefonu." };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!rawEmail || !emailRegex.test(rawEmail) || rawEmail.length > 150) {
    return { error: "Proszę podać prawidłowy format adresu e-mail." };
  }

  if (rawMessage.length > 3000) {
    return { error: "Wiadomość jest zbyt długa (maksymalnie 3000 znaków)." };
  }

  if (!agree) {
    return { error: "Wymagana jest akceptacja polityki prywatności." };
  }

  // 3. Sanityzacja pól przed wstrzyknięciem do szablonu HTML
  const safeName = escapeHtml(rawName);
  const safePhone = escapeHtml(rawPhone);
  const safeEmail = escapeHtml(rawEmail);
  const safeMessage = escapeHtml(rawMessage);

  // 4. Wysłanie wiadomości przez Resend API
  try {
    const recipientEmail = site.email.display;
    const senderEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Upadłość Konsumencka <kontakt@upadlosckonsumenckachorzow.pl>";

    // Ochrona nagłówków przed SMTP header injection
    const cleanHeaderName = rawName.replace(/[\r\n]/g, "");
    const cleanHeaderEmail = rawEmail.replace(/[\r\n]/g, "");

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: `"${cleanHeaderName}" <${cleanHeaderEmail}>`,
      subject: `🔔 Nowe zgłoszenie: ${cleanHeaderName} (${cleanPhone})`,
      text: `Nowe zgłoszenie z formularza kontaktowego (${site.name}):\n\nImię i nazwisko: ${rawName}\nTelefon: ${rawPhone}\nE-mail: ${rawEmail}\n\nOpis sytuacji:\n${rawMessage}\n\nZgoda RODO: Tak\nStrona: ${site.url}`,
      html: `
        <!DOCTYPE html>
        <html lang="pl">
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; padding: 24px 12px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
            <div style="background-color: #0f172a; padding: 28px 24px; text-align: center; border-bottom: 3px solid #16a34a;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">Nowe zapytanie o upadłość konsumencką</h1>
              <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">${site.name}</p>
            </div>
            <div style="padding: 28px 24px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Imię i nazwisko:</td>
                  <td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 700;">${safeName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600;">Numer telefonu:</td>
                  <td style="padding: 12px 0; font-size: 15px;">
                    <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none; font-weight: 700; background-color: #f8fafc; padding: 4px 8px; border-radius: 6px; border: 1px solid #e2e8f0;">📞 ${safePhone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600;">Adres e-mail:</td>
                  <td style="padding: 12px 0; font-size: 15px;">
                    <a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none; font-weight: 600;">✉️ ${safeEmail}</a>
                  </td>
                </tr>
              </table>
              <div style="background-color: #f8fafc; border-left: 4px solid #16a34a; padding: 18px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Przedstawiona sytuacja:</p>
                <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
              </div>
              <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
                Wiadomość wysłana ze strony <a href="${site.url}" style="color: #64748b; text-decoration: underline;">${site.url}</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        error:
          "Nie udało się przesłać formularza. Prosimy o bezpośredni kontakt telefoniczny.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Exception:", err);
    return {
      error:
        "Wystąpił błąd serwera. Skontaktuj się z nami bezpośrednio telefonicznie.",
    };
  }
}

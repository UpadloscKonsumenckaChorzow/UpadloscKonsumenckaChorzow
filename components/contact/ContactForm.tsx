"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send, Loader2, AlertCircle } from "lucide-react";
import { sendContactForm, type ContactFormState } from "@/app/actions/contact";

// Pola formularza mają na telefonie 16 px. Poniżej tej wartości Safari na
// iPhonie automatycznie przybliża stronę po kliknięciu w pole.
const INPUT_CLASS =
  "w-full rounded-xl border border-black/10 px-3 py-2.5 text-base sm:px-4 sm:py-3 sm:text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15";

const initialState: ContactFormState = {};

/**
 * Formularz oparty na Server Action + useActionState:
 * - działa także zanim załaduje się JavaScript (progressive enhancement),
 * - po błędzie wpisane dane zostają w polach (wracają z serwera),
 * - pole z błędem dostaje aria-invalid i fokus (WCAG 3.3.1),
 * - po sukcesie serwer przekierowuje na /dziekujemy.
 */
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);
  const errorRef = useRef<HTMLDivElement>(null);

  const values = state.values ?? {};
  const invalid = (name: string) => state.field === name || undefined;
  const describedBy = (name: string) =>
    state.field === name ? "contact-error" : undefined;

  // Po błędzie: fokus na błędnym polu, a gdy błąd dotyczy wysyłki –
  // na komunikacie (jest nad formularzem, przycisk wysyłki na dole).
  useEffect(() => {
    if (!state.error) return;
    const field = state.field
      ? document.getElementById(`contact-${state.field}`)
      : null;
    if (field) {
      field.focus();
      field.scrollIntoView({ block: "center" });
    } else {
      errorRef.current?.focus();
      errorRef.current?.scrollIntoView({ block: "center" });
    }
  }, [state]);

  return (
    // Bez noValidate: przeglądarka od razu sygnalizuje puste pole albo zły
    // format e-maila. Pełną walidację i tak wykonuje Server Action.
    // key: po każdej odpowiedzi serwera pola dostają aktualne wartości.
    <form
      key={state.submittedAt ?? 0}
      action={formAction}
      className="mt-4 space-y-3 sm:mt-6 sm:space-y-4"
    >
      {/* Pułapka na boty – człowiek tego pola nie widzi */}
      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.error && (
        <div
          ref={errorRef}
          id="contact-error"
          role="alert"
          tabIndex={-1}
          className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700"
        >
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          <span>{state.error}</span>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5">
            Imię i nazwisko <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            name="name"
            autoComplete="name"
            placeholder="Jan Kowalski"
            defaultValue={values.name}
            aria-invalid={invalid("name")}
            aria-describedby={describedBy("name")}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5">
            Numer telefonu <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            maxLength={30}
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="515 515 314"
            defaultValue={values.phone}
            aria-invalid={invalid("phone")}
            aria-describedby={describedBy("phone")}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5">
          Adres e-mail <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={254}
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          placeholder="jan@przyklad.pl"
          defaultValue={values.email}
          aria-invalid={invalid("email")}
          aria-describedby={describedBy("email")}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5">
          Przedstaw swoją sytuację
        </label>
        <textarea
          id="contact-message"
          rows={3}
          name="message"
          maxLength={3000}
          placeholder="Np. orientacyjna kwota długu, liczba wierzycieli, czy jest komornik..."
          defaultValue={values.message}
          aria-invalid={invalid("message")}
          aria-describedby={describedBy("message")}
          className={`${INPUT_CLASS} sm:min-h-28`}
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink/75 cursor-pointer sm:text-sm">
        <input
          id="contact-agree"
          type="checkbox"
          required
          name="agree"
          defaultChecked={values.agree}
          aria-invalid={invalid("agree")}
          aria-describedby={describedBy("agree")}
          className="mt-0.5 size-4 shrink-0 rounded border-black/20 accent-navy"
        />
        <span>
          Wyrażam zgodę na kontakt w sprawie upadłości konsumenckiej zgodnie z{" "}
          <a
            href="/polityka-prywatnosci"
            target="_blank"
            rel="noopener"
            className="underline text-navy font-semibold hover:text-green-contrast"
          >
            Polityką Prywatności
            <span className="sr-only"> (otwiera się w nowej karcie)</span>
          </a>
          . <span className="text-red-500" aria-hidden="true">*</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 sm:px-6 sm:py-4 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-navy-700 hover:scale-[1.01] shadow-md disabled:opacity-50 disabled:hover:scale-100 cursor-pointer disabled:cursor-wait"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin text-green" aria-hidden="true" />
            Wysyłanie formularza...
          </>
        ) : (
          <>
            <Send className="size-4 text-green" aria-hidden="true" />
            Wyślij i umów bezpłatną analizę
          </>
        )}
      </button>

      <p className="text-center text-xs leading-relaxed text-ink/70">
        Rozmowa jest całkowicie bezpłatna i poufna.
      </p>
    </form>
  );
}

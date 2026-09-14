"use client";

import {
  useState,
  useTransition,
  useEffect,
  useRef,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  Loader2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { site } from "@/content/site";
import { sendContactForm } from "@/app/actions/contact";

// Pola formularza mają na telefonie 16 px. Poniżej tej wartości Safari na
// iPhonie automatycznie przybliża stronę po kliknięciu w pole i już z niej
// nie wraca – klasyczny problem formularzy na iOS.
const INPUT_CLASS =
  "w-full rounded-xl border border-black/10 px-3 py-2.5 text-base sm:px-4 sm:py-3 sm:text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10";

export function Contact() {
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);

  // Komunikat o błędzie pojawia się nad formularzem, a przycisk wysyłania
  // jest na dole – bez przewinięcia użytkownik mógłby go nie zauważyć.
  useEffect(() => {
    if (errorMessage) {
      errorRef.current?.scrollIntoView({ block: "center" });
    }
  }, [errorMessage]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const response = await sendContactForm({}, formData);

      if (response.error) {
        setErrorMessage(response.error);
        return;
      }

      if (response.success) {
        form.reset();
        // form.reset() nie zmienia stanu Reacta, więc zgodę czyścimy osobno.
        setAgree(false);
        router.push("/dziekujemy");
      }
    });
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(site.email.display);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Clipboard API fallback
    }
  }

  return (
    // scroll-mt-40: przyklejony nagłówek ma ok. 110–130 px, przy mniejszym
    // odstępie tytuł sekcji chowa się pod nim po kliknięciu w menu.
    <section
      id="kontakt"
      className="scroll-mt-40 bg-navy py-10 text-white sm:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-green">
            <PhoneCall className="size-4" aria-hidden="true" />
            Kontakt
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight sm:mt-3 sm:text-4xl lg:text-5xl">
            Zrób pierwszy krok
          </h2>
          <p className="mt-3 text-sm font-medium text-white/90 sm:mt-3 sm:text-base lg:text-xl">
            Nie musisz dzisiaj rozwiązywać całego problemu, wystarczy, że
            poznasz swoje możliwości.
          </p>
          <p className="mt-1.5 text-sm text-green font-medium sm:mt-2 sm:text-base">
            Umów konsultację i przedstaw swoją sytuację.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 min-w-0 sm:space-y-6">
            <div className="space-y-3.5 rounded-3xl bg-white/5 p-5 sm:space-y-5 sm:p-8 border border-white/10">
              <h3 className="font-display text-base sm:text-xl font-bold text-green">
                Dane kontaktowe
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* TELEFON */}
                <a
                  href={site.phone.href}
                  className="flex items-center gap-3 sm:gap-4 group min-w-0"
                >
                  <span className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                    <Phone className="size-4 sm:size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] sm:text-xs font-medium tracking-[0.14em] text-white/55">
                      TELEFON
                    </span>
                    <span className="font-semibold text-base sm:text-lg text-white group-hover:text-green transition-colors block">
                      {site.phone.display}
                    </span>
                  </span>
                </a>

                {/* E-MAIL */}
                <div className="flex items-center justify-between gap-2 sm:gap-4 group min-w-0">
                  <a
                    href={site.email.href}
                    className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
                  >
                    <span className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                      <Mail className="size-4 sm:size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] sm:text-xs font-medium tracking-[0.14em] text-white/55">
                        E-MAIL
                      </span>
                      <span
                        className="block text-xs min-[390px]:text-[13px] sm:text-sm md:text-base font-semibold tracking-tight text-white group-hover:text-green transition-colors"
                        title={site.email.display}
                      >
                        {site.email.display}
                      </span>
                    </span>
                  </a>

                  {/* Przycisk kopiowania */}
                  <div className="relative shrink-0 ml-2 translate-x-2.5 sm:translate-x-0">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label={
                        emailCopied
                          ? "Adres e-mail skopiowany"
                          : "Kopiuj adres e-mail"
                      }
                      title={emailCopied ? "Skopiowano!" : "Kopiuj e-mail"}
                      className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-green"
                    >
                      {emailCopied ? (
                        <Check
                          className="size-4 text-green"
                          aria-hidden="true"
                        />
                      ) : (
                        <Copy className="size-4" aria-hidden="true" />
                      )}
                    </button>

                    {/* Dymek z komunikatem */}
                    {emailCopied && (
                      <div
                        role="status"
                        aria-live="polite"
                        className="pointer-events-none absolute -top-10 right-0 z-30 flex items-center justify-center whitespace-nowrap rounded-lg bg-green px-2.5 py-1 text-xs font-bold text-white shadow-xl animate-in fade-in zoom-in-95 duration-150"
                      >
                        Skopiowano!
                        <div
                          aria-hidden="true"
                          className="absolute -bottom-1 right-2.5 size-2 rotate-45 bg-green"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* ADRES */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green">
                    <MapPin className="size-4 sm:size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] sm:text-xs font-medium tracking-[0.14em] text-white/55">
                      KANCELARIA / BIURO
                    </span>
                    <span className="block font-semibold text-sm sm:text-base text-white">
                      {site.address.full}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl bg-navy-900/40 p-4 sm:p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-green text-sm">
                  <Globe className="size-4 shrink-0" aria-hidden="true" />
                  Obsługa zdalna
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:mt-2">
                  Sprawę prowadzimy stacjonarnie lub w 100% online dla
                  mieszkańców z całej Polski.
                </p>
              </div>

              <div className="rounded-2xl bg-navy-900/40 p-4 sm:p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-green text-sm">
                  <Clock className="size-4 shrink-0" aria-hidden="true" />
                  Godziny otwarcia
                </p>
                <dl className="mt-2 space-y-1 text-xs text-white/85 sm:mt-3 sm:space-y-1.5">
                  <div className="flex justify-between gap-2">
                    <dt>Poniedziałek – Piątek:</dt>
                    <dd className="font-semibold text-green shrink-0">
                      {site.hours.weekday.display}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Sobota – Niedziela:</dt>
                    <dd className="font-semibold text-white/60 shrink-0">
                      {site.hours.weekend.display}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <p className="bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-wider text-green border-b border-white/10 flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                Lokalizacja biura (Google Maps)
              </p>

              {/* Mapa wczytuje się dopiero po kliknięciu – do tego momentu
                  Google nie dostaje żadnych danych o odwiedzającym.
                  Dokładnie tak opisuje to polityka prywatności. */}
              {mapLoaded ? (
                <iframe
                  title="Lokalizacja Kancelarii – ul. Hajducka 4, Chorzów"
                  src={site.maps.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 sm:h-72"
                  style={{ border: 0 }}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="flex min-h-36 sm:min-h-44 w-full cursor-pointer flex-col items-center justify-center gap-2.5 bg-navy-900/40 px-4 py-5 text-center transition-colors hover:bg-navy-900/60 sm:gap-3 sm:px-6 sm:py-8"
                >
                  <span className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-white/10 text-green">
                    <MapPin className="size-4 sm:size-5" aria-hidden="true" />
                  </span>
                  <span className="max-w-xs text-xs leading-relaxed text-white/75">
                    Kliknij, aby załadować interaktywną mapę Google.
                  </span>
                  <span className="rounded-lg bg-green px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-navy-900 shadow-md transition-all hover:bg-green-light">
                    Załaduj mapę Google Maps
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 text-ink shadow-2xl sm:p-8 lg:p-10">
            <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
              Umów bezpłatną konsultację
            </h3>
            <p className="mt-1.5 text-sm text-ink/70 sm:mt-2">
              Przedstaw swoją sytuację. Odpowiadamy tego samego dnia roboczego.
            </p>

            {/* Bez noValidate: przeglądarka od razu sygnalizuje puste pole
                albo zły format e-maila, bez wysyłki na serwer. Pełną
                walidację i tak wykonuje Server Action. */}
            <form
              className="mt-4 space-y-3 sm:mt-6 sm:space-y-4"
              onSubmit={handleSubmit}
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

              {errorMessage && (
                <div
                  ref={errorRef}
                  role="alert"
                  aria-live="assertive"
                  className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700"
                >
                  <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5"
                  >
                    Imię i nazwisko <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Jan Kowalski"
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5"
                  >
                    Numer telefonu <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="515 515 314"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5"
                >
                  Adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="jan@przyklad.pl"
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-semibold text-ink sm:mb-1.5"
                >
                  Przedstaw swoją sytuację
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  name="message"
                  maxLength={3000}
                  placeholder="Np. orientacyjna kwota długu, liczba wierzycieli, czy jest komornik..."
                  className={`${INPUT_CLASS} sm:min-h-28`}
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink/75 cursor-pointer sm:text-sm">
                <input
                  type="checkbox"
                  required
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 size-4 shrink-0 rounded border-black/20 accent-navy"
                />
                <span>
                  Wyrażam zgodę na kontakt w sprawie upadłości konsumenckiej
                  zgodnie z{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-navy font-semibold hover:text-green-contrast"
                  >
                    Polityką Prywatności
                  </a>
                  . <span className="text-red-500">*</span>
                </span>
              </label>

              <button
                type="submit"
                disabled={isPending}
                aria-busy={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 sm:px-6 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.01] shadow-md disabled:opacity-50 disabled:hover:scale-100 cursor-pointer disabled:cursor-wait"
              >
                {isPending ? (
                  <>
                    <Loader2
                      className="size-4 animate-spin text-green"
                      aria-hidden="true"
                    />
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
          </div>
        </div>
      </div>
    </section>
  );
}

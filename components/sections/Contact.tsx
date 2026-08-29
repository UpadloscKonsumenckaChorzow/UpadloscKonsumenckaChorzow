"use client";

import { useState, useTransition, type FormEvent } from "react";
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
} from "lucide-react";
import { site } from "@/content/site";
import { sendContactForm } from "@/app/actions/contact";

export function Contact() {
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
        router.push("/dziekujemy");
      }
    });
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-navy py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            <PhoneCall className="size-4" />
            Kontakt
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Zrób pierwszy krok
          </h2>
          <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
            Nie musisz dzisiaj rozwiązywać całego problemu, wystarczy, że
            poznasz swoje możliwości.
          </p>
          <p className="mt-2 text-base text-gold font-medium">
            Umów konsultację i przedstaw swoją sytuację.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kolumna lewa: Dane i mapa */}
          <div className="space-y-6">
            <div className="space-y-5 rounded-3xl bg-white/5 p-6 sm:p-8 backdrop-blur border border-white/10">
              <h3 className="font-display text-xl font-bold text-gold">
                Dane kontaktowe
              </h3>

              <div className="space-y-4">
                <a
                  href={site.phone.href}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      TELEFON
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      {site.phone.display}
                    </span>
                  </span>
                </a>

                <a
                  href={site.email.href}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      E-MAIL
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      {site.email.display}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      KANCELARIA / BIURO
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      {site.address.full}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-navy-900/40 p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-gold text-sm">
                  <Globe className="size-4" />
                  Obsługa zdalna
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Sprawę prowadzimy stacjonarnie lub w 100% online dla
                  mieszkańców całego Śląska.
                </p>
              </div>

              <div className="rounded-2xl bg-navy-900/40 p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-gold text-sm">
                  <Clock className="size-4" />
                  Godziny otwarcia
                </p>
                <dl className="mt-3 space-y-1.5 text-xs text-white/85">
                  <div className="flex justify-between">
                    <dt>Poniedziałek – Piątek:</dt>
                    <dd className="font-semibold text-gold">
                      {site.hours.weekday.display}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sobota – Niedziela:</dt>
                    <dd className="font-semibold text-white/50">
                      {site.hours.weekend.display}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <p className="bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold border-b border-white/10 flex items-center gap-2">
                <MapPin className="size-4" />
                Lokalizacja biura (Google Maps)
              </p>

              {mapLoaded ? (
                <iframe
                  title="Lokalizacja Kancelarii Chorzów Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40810.19830588523!2d18.9181146!3d50.3005852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce399995be0d%3A0x1c8b3297a7a58231!2sChorz%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="flex min-h-48 w-full cursor-pointer flex-col items-center justify-center gap-3 bg-navy-900/40 px-6 py-8 text-center transition-colors hover:bg-navy-900/60"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <MapPin className="size-6" />
                  </span>
                  <span className="max-w-xs text-xs leading-relaxed text-white/70">
                    Kliknij, aby załadować interaktywną mapę Google.
                  </span>
                  <span className="rounded-lg bg-gold px-4 py-2 text-xs font-semibold text-navy-900 shadow-md transition-all hover:bg-gold-light">
                    Załaduj mapę Google Maps
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Kolumna prawa: Formularz kontaktowy */}
          <div className="rounded-3xl bg-white p-8 text-ink shadow-2xl lg:p-10">
            <h3 className="font-display text-2xl font-bold text-ink">
              Umów bezpłatną konsultację
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Przedstaw swoją sytuację. Odpowiadamy tego samego dnia roboczego.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Komunikat o błędzie z rolą alert pod czytniki ekranu */}
              {errorMessage && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-medium text-red-700"
                >
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-semibold text-ink"
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
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-xs font-semibold text-ink"
                  >
                    Numer telefonu <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    name="phone"
                    autoComplete="tel"
                    placeholder="515 515 314"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-semibold text-ink"
                >
                  Adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  placeholder="jan@przyklad.pl"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold text-ink"
                >
                  Przedstaw swoją sytuację
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  name="message"
                  placeholder="Np. orientacyjna kwota długu, liczba wierzycieli, czy jest komornik..."
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-ink/70 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-black/20 accent-navy"
                />
                <span>
                  Wyrażam zgodę na kontakt w sprawie upadłości konsumenckiej
                  zgodnie z{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    className="underline text-navy font-semibold hover:text-gold-contrast"
                  >
                    Polityką Prywatności
                  </a>
                  . <span className="text-red-500">*</span>
                </span>
              </label>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.01] shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-gold" />
                    Wysyłanie formularza...
                  </>
                ) : (
                  <>
                    <Send className="size-4 text-gold" />
                    Wyślij i umów bezpłatną analizę
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-relaxed text-ink/70">
                Rozmowa jest całkowicie bezpłatna i poufna.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
} from "lucide-react";
import { site } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { MapEmbed } from "@/components/contact/MapEmbed";

/*
 * Sekcja kontaktu renderowana na serwerze. W przeglądarce działają tylko
 * trzy małe "wyspy": formularz, przycisk kopiowania e-maila i mapa.
 */
export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className="bg-navy py-10 text-white sm:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-green">
            <PhoneCall className="size-4" aria-hidden="true" />
            Kontakt
          </p>
          <h2 id="kontakt-title" className="mt-2 font-display text-2xl font-bold leading-tight sm:mt-3 sm:text-4xl lg:text-5xl">
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

                  <CopyEmailButton />
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

              <MapEmbed />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 text-ink shadow-2xl sm:p-8 lg:p-10">
            <h3 className="font-display text-lg sm:text-2xl font-bold text-ink">
              Umów bezpłatną konsultację
            </h3>
            <p className="mt-1.5 text-sm text-ink/70 sm:mt-2">
              Przedstaw swoją sytuację. Odpowiadamy tego samego dnia roboczego.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

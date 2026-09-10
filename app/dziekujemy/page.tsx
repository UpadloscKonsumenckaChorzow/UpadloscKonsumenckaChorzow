import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Clock,
  ShieldCheck,
  Home,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Dziękujemy za kontakt · Zgłoszenie przyjęte",
  description: "Twoje zgłoszenie zostało przyjęte.",
  alternates: {
    canonical: "/dziekujemy",
  },
  openGraph: {
    title: "Dziękujemy za kontakt",
    description: "Twoje zgłoszenie zostało przyjęte.",
    url: `${site.url}/dziekujemy`,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
  },
  // Strona po wysłaniu formularza nie powinna trafiać do wyników Google.
  robots: {
    index: false,
    follow: true,
  },
};

// Godziny pobierane z site.ts – po zmianie godzin pracy tekst zmieni się sam.
const WORKING_HOURS = `pon.–pt. ${site.hours.weekday.display}`;

const NEXT_STEPS = [
  {
    title: "Zapoznanie się z wiadomością",
    desc: "Przeczytamy opis Twojej sytuacji przesłany w formularzu.",
  },
  {
    title: "Kontakt z Tobą",
    desc: `Odezwiemy się telefonicznie lub mailowo w godzinach pracy kancelarii (${WORKING_HOURS}).`,
  },
  {
    title: "Omówienie możliwości",
    desc: "Porozmawiamy o Twojej sytuacji i możliwych rozwiązaniach.",
  },
] as const;

export default function ThankYouPage() {
  return (
    <main className="min-h-[85vh] bg-mint py-12 sm:py-16 text-ink flex items-center justify-center">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 w-full">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
          <div className="bg-navy p-8 sm:p-10 text-center text-white relative">
            <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-green/20 text-green border border-green/30 shadow-lg">
              <CheckCircle2 className="size-10" aria-hidden="true" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Zgłoszenie przyjęte
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Dziękujemy za kontakt!
            </h1>

            <p className="mt-3 text-sm text-white/80 sm:text-base max-w-lg mx-auto leading-relaxed">
              Twoja wiadomość do nas dotarła. Nie musisz niczego więcej wysyłać.
            </p>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="font-display text-lg font-bold text-navy flex items-center gap-2">
                <Clock className="size-5 text-green" aria-hidden="true" />
                Co wydarzy się dalej?
              </h2>

              <ol className="mt-4 grid gap-3 sm:grid-cols-3">
                {NEXT_STEPS.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-2xl bg-mint p-4 border border-black/5"
                  >
                    <span className="font-display text-xs font-bold text-green-contrast">
                      KROK {index + 1}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs text-ink/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-navy/5 p-6 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-display text-sm font-bold text-navy">
                  Sprawa jest pilna?
                </p>
                <p className="text-xs text-ink/70 mt-0.5">
                  Na przykład komornik zajął konto lub wynagrodzenie? Zadzwoń do
                  nas ({WORKING_HOURS}).
                </p>
              </div>

              <a
                href={site.phone.href}
                aria-label={`Zadzwoń: ${site.phone.display}`}
                className="inline-flex items-center gap-2 rounded-xl bg-green px-5 py-3 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-green-light hover:scale-105 shrink-0"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone.display}
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-ink/60 border-t border-black/10 pt-4">
              <Mail className="size-5 text-green shrink-0" aria-hidden="true" />
              <span>
                Nasza odpowiedź mailowa może trafić do folderu spam. W razie
                potrzeby napisz bezpośrednio na{" "}
                <a
                  href={site.email.href}
                  className="font-medium text-navy underline underline-offset-2 hover:text-green-contrast"
                >
                  {site.email.display}
                </a>
                .
              </span>
            </div>

            <div className="flex items-start gap-3 text-xs text-ink/60">
              <ShieldCheck
                className="size-5 text-green shrink-0"
                aria-hidden="true"
              />
              <span>
                Przekazane informacje traktujemy poufnie. Zasady przetwarzania
                danych opisujemy w{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="font-medium text-navy underline underline-offset-2 hover:text-green-contrast"
                >
                  Polityce prywatności
                </Link>
                .
              </span>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md"
              >
                <Home className="size-4 text-green" aria-hidden="true" />
                Wróć na stronę główną
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

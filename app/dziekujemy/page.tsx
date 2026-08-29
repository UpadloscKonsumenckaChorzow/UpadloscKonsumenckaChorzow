import Link from "next/link";
import { CheckCircle2, Phone, Clock, ShieldCheck, Home } from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Dziękujemy za kontakt · Zgłoszenie przyjęte",
  description:
    "Dziękujemy za przesłanie formularza. Skontaktujemy się z Tobą najszybciej jak to możliwe.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[85vh] bg-cream py-12 sm:py-16 text-ink flex items-center justify-center">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 w-full">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
          <div className="bg-navy p-8 sm:p-10 text-center text-white relative">
            <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/30 shadow-lg">
              <CheckCircle2 className="size-10" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Zgłoszenie przyjęte pomyślnie
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Dziękujemy za kontakt!
            </h1>

            <p className="mt-3 text-sm text-white/80 sm:text-base max-w-lg mx-auto leading-relaxed">
              Zrobiłeś pierwszy krok do odzyskania spokoju i życia bez długów.
              Twoja wiadomość trafiła bezpośrednio do naszego zespołu prawnego.
            </p>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="font-display text-lg font-bold text-navy flex items-center gap-2">
                <Clock className="size-5 text-gold" />
                Co wydarzy się w następnym kroku?
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-cream p-4 border border-black/5">
                  <span className="font-display text-xs font-bold text-gold-contrast">
                    KROK 1
                  </span>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Analiza dokumentów
                  </p>
                  <p className="mt-1 text-xs text-ink/65 leading-relaxed">
                    Prawnik bezpłatnie zapozna się ze strukturą Twojego
                    zadłużenia.
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-4 border border-black/5">
                  <span className="font-display text-xs font-bold text-gold-contrast">
                    KROK 2
                  </span>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Telefon od eksperta
                  </p>
                  <p className="mt-1 text-xs text-ink/65 leading-relaxed">
                    Oddzwonimy tego samego dnia roboczego (zwykle w 1–2 godz.).
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-4 border border-black/5">
                  <span className="font-display text-xs font-bold text-gold-contrast">
                    KROK 3
                  </span>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Plan działania
                  </p>
                  <p className="mt-1 text-xs text-ink/65 leading-relaxed">
                    Przedstawimy bezpłatny i bezpieczny plan oddłużenia.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-navy/5 p-6 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-display text-sm font-bold text-navy">
                  Sprawa nie cierpi zwłoki?
                </p>
                <p className="text-xs text-ink/70 mt-0.5">
                  Jeśli komornik zajął konto lub pensję – zadzwoń natychmiast.
                </p>
              </div>

              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-gold-light hover:scale-105 shrink-0"
              >
                <Phone className="size-4" />
                {site.phone.display}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-ink/60 border-t border-black/10 pt-4">
              <ShieldCheck className="size-5 text-gold shrink-0" />
              <span>
                Wszystkie przekazane informacje objęte są tajemnicą zawodową i
                pełną dyskrecją.
              </span>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md"
              >
                <Home className="size-4 text-gold" />
                Wróć na stronę główną
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Home, Phone, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Strona nie została znaleziona",
  description: "Przepraszamy, szukana strona nie istnieje.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-cream px-5 py-16">
      <div className="mx-auto max-w-xl text-center">
        {/* Oznaczenie 404 */}
        <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-navy px-6 py-2 shadow-md">
          <span className="font-display text-2xl font-bold tracking-widest text-gold">
            BŁĄD 404
          </span>
        </div>

        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          Nie znaleźliśmy takiej strony
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Adres, pod który próbujesz wejść, nie istnieje, został usunięty lub
          jego nazwa uległa zmianie.
        </p>

        {/* Przyciski powrotu */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-gold-light hover:scale-105"
          >
            <Home className="size-4" />
            Wróć na stronę główną
          </Link>

          <a
            href="/#kontakt"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-black/5"
          >
            <HelpCircle className="size-4 text-gold" />
            Skontaktuj się z nami
          </a>
        </div>

        {/* Bezpośredni telefon */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="text-xs text-ink/60">
            Potrzebujesz natychmiastowej bezpłatnej konsultacji prawnej?
          </p>
          <a
            href="tel:+48515515314"
            className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors"
          >
            <Phone className="size-4 text-gold" />
            Zadzwoń: 515 515 314
          </a>
        </div>
      </div>
    </main>
  );
}

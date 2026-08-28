import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka Prywatności i RODO",
  description:
    "Zasady przetwarzania danych osobowych oraz wykorzystania plików cookies w serwisie upadłości konsumenckiej.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cream min-h-screen py-12 sm:py-16 text-ink">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Wróć do strony głównej
        </Link>

        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-white shadow-xl mb-12 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <ShieldCheck className="size-4" />
            Ochrona danych osobowych
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Polityka Prywatności i RODO
          </h1>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Ostatnia aktualizacja: sierpień 2026 r. · Zgodność z RODO i
            dyrektywą ePrivacy.
          </p>
        </div>

        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-black/5 shadow-sm leading-relaxed text-ink/80 text-sm sm:text-base">
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              1. Administrator Danych Osobowych
            </h2>
            <p className="mt-4">
              Administratorem Twoich danych osobowych jest Kancelaria Prawa
              Upadłościowego działająca pod marką{" "}
              <strong>Upadłość Konsumencka Chorzów & Śląsk</strong> (część Grupy
              Expert Partner) z siedzibą przy{" "}
              <strong>{site.address.full}</strong>.
            </p>
            <ul className="mt-3 space-y-1.5 list-disc pl-5 text-ink/90">
              <li>
                E-mail: <strong>{site.email.display}</strong>
              </li>
              <li>
                Telefon: <strong>{site.phone.display}</strong>
              </li>
              <li>Adres korespondencyjny: {site.address.full}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              2. Cele i podstawy prawne przetwarzania
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  a) Kontakt i bezpłatna analiza sprawy (formularz / telefon)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO oraz art. 6 ust. 1
                  lit. a RODO.
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  b) Przygotowanie i realizacja umowy o pomoc prawną
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO oraz art. 9 ust. 2
                  lit. f RODO.
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  c) Wyświetlenie mapy dojazdu (Google Maps)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. a RODO – mapa ładuje się
                  wyłącznie po kliknięciu przycisku zgody.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              3. Prawa użytkownika
            </h2>
            <ul className="mt-4 space-y-1.5 list-disc pl-5">
              <li>Prawo dostępu do treści swoich danych oraz ich kopii,</li>
              <li>
                Prawo do sprostowania, usunięcia lub ograniczenia przetwarzania,
              </li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie,</li>
              <li>
                Prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                Osobowych (UODO).
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md"
          >
            <ArrowLeft className="size-4 text-gold" />
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </main>
  );
}

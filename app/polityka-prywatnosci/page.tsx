// app/polityka-prywatnosci/page.tsx
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

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
        {/* Nawigacja powrotu */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Wróć do strony głównej
        </Link>

        {/* Nagłówek */}
        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-white shadow-xl mb-12 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <ShieldCheck className="size-4" />
            Ochrona danych osobowych
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Polityka Prywatności i RODO
          </h1>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Ostatnia aktualizacja: luty 2026 r. · Zgodność z Ogólnym
            Rozporządzeniem o Ochronie Danych (RODO).
          </p>
        </div>

        {/* Treść właściwa */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-black/5 shadow-sm leading-relaxed text-ink/80 text-sm sm:text-base">
          {/* Sekcja 1 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              1. Administrator Danych Osobowych
            </h2>
            <p className="mt-4">
              Administratorem Twoich danych osobowych jest Kancelaria Prawa
              Upadłościowego działająca pod marką{" "}
              <strong>Upadłość Konsumencka Chorzów & Śląsk</strong> (część Grupy
              Expert Partner) z siedzibą przy{" "}
              <strong>ul. Wolności 12, 41-500 Chorzów</strong>.
            </p>
            <p className="mt-2">
              W sprawach związanych z przetwarzaniem danych osobowych oraz
              realizacją praw przysługujących na mocy RODO możesz skontaktować
              się z nami:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc pl-5 text-ink/90">
              <li>
                E-mail: <strong>kontakt@kancelaria.pl</strong>
              </li>
              <li>
                Telefon: <strong>+48 515 515 314</strong>
              </li>
              <li>Adres korespondencyjny: ul. Wolności 12, 41-500 Chorzów</li>
            </ul>
          </section>

          {/* Sekcja 2 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              2. Cele i podstawy prawne przetwarzania danych
            </h2>
            <p className="mt-4">
              Przetwarzamy Twoje dane w następujących celach:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  a) Kontakt i bezpłatna analiza sprawy (formularz / telefon)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO (działania na
                  żądanie osoby przed zawarciem umowy) oraz art. 6 ust. 1 lit. a
                  RODO (Twoja dobrowolna zgoda wyrażona przez wysłanie
                  formularza).
                </p>
              </div>

              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  b) Przygotowanie i realizacja umowy o pomoc prawną
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO (wykonanie umowy)
                  oraz art. 9 ust. 2 lit. f RODO (w zakresie danych niezbędnych
                  do ustalenia, dochodzenia lub obrony roszczeń prawnych przed
                  sądem).
                </p>
              </div>

              <div className="rounded-2xl bg-cream p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  c) Realizacja prawnie uzasadnionych interesów (analityka,
                  ochrona przed roszczeniami)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. f RODO.
                </p>
              </div>
            </div>
          </section>

          {/* Sekcja 3 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              3. Jakie dane przetwarzamy?
            </h2>
            <p className="mt-4">
              Podczas korzystania z serwisu i formularza kontaktowego możemy
              zbierać:
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Imię i nazwisko,</li>
              <li>Numer telefonu oraz adres e-mail,</li>
              <li>
                Informacje o sytuacji finansowej i prawnej dobrowolnie podane w
                treści wiadomości,
              </li>
              <li>
                Dane techniczne (adres IP, rodzaj przeglądarki, pliki cookies).
              </li>
            </ul>
          </section>

          {/* Sekcja 4 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              4. Poufność i odbiorcy danych
            </h2>
            <p className="mt-4">
              Sprawy upadłościowe traktujemy ze szczególną dyskrecją. Dane
              osobowe nie są odsprzedawane podmiotom trzecim. Odbiorcami danych
              mogą być wyłącznie:
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>
                Eksperci i prawnicy współpracujący w ramach Grupy Expert Partner
                bezpośrednio zaangażowani w analizę Twojej sprawy,
              </li>
              <li>
                Dostawcy usług IT i hostingu (np. dostawca poczty,
                infrastruktura chmurowa spełniająca normy bezpieczeństwa UE),
              </li>
              <li>
                Organy publiczne i sądy (wyłącznie na mocy przepisów prawa).
              </li>
            </ul>
          </section>

          {/* Sekcja 5 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              5. Okres przechowywania danych
            </h2>
            <p className="mt-4">
              Dane przekazane na etapie zapytania ofertowego i bezpłatnej
              analizy przechowujemy przez okres niezbędny do udzielenia
              odpowiedzi i kontaktu (maksymalnie 12 miesięcy) lub do momentu
              wycofania zgody. W przypadku zawarcia umowy – przez czas trwania
              postępowania oraz wymagany przepisami okres przedawnienia roszczeń
              i obowiązków księgowych.
            </p>
          </section>

          {/* Sekcja 6 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              6. Twoje Prawa
            </h2>
            <p className="mt-4">Każdej osobie przysługuje prawo do:</p>
            <ul className="mt-3 space-y-1.5 list-disc pl-5">
              <li>
                Dostępu do treści swoich danych oraz otrzymania ich kopii,
              </li>
              <li>Sprostowania (poprawienia) swoich danych,</li>
              <li>Usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>Ograniczenia przetwarzania danych,</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>
                Wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony
                Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
              </li>
            </ul>
          </section>

          {/* Sekcja 7 */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
              7. Pliki Cookies i Narzędzia Analityczne
            </h2>
            <p className="mt-4">
              Serwis korzysta z plików cookies (ciasteczek) w celu prawidłowego
              działania strony oraz celów statystycznych (m.in. Google Analytics
              4, uruchamiany wyłącznie po wyrażeniu przez Ciebie zgody w banerze
              cookies) oraz do wyświetlenia mapy lokalizacji biura (Google
              Maps). Możesz w każdej chwili zmienić ustawienia dotyczące cookies
              bezpośrednio w stopce strony („Ustawienia cookies”) lub w swojej
              przeglądarce internetowej.
            </p>
          </section>
        </div>

        {/* Powrót na dół */}
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

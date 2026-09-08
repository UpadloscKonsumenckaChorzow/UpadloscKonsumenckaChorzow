import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  MapPin,
  HelpCircle,
  TrendingDown,
  Layers,
  Scale,
  CreditCard,
  Building2,
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
  FileCheck2,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title:
    "Upadłość konsumencka Chorzów – co to jest, ile kosztuje i jak ogłosić? · Poradnik",
  description:
    "Kompleksowy poradnik: upadłość konsumencka Chorzów i Śląsk. Dowiedz się, jak złożyć wniosek w systemie KRZ, ile wynosi opłata sądowa (30 zł), jak działa Sąd Katowice-Wschód i jak umorzyć długi.",
  alternates: {
    canonical: "/publikacje",
  },
  openGraph: {
    title:
      "Upadłość konsumencka Chorzów – co to jest, ile kosztuje i jak ogłosić?",
    description:
      "Problemy ze spłatą kredytów, chwilówek, rachunków i komornikiem? Wyjaśniamy procedurę upadłości konsumenckiej w Chorzowie i na Śląsku krok po kroku.",
    url: `${site.url}/publikacje`,
    siteName: site.name,
    locale: "pl_PL",
    type: "article",
    publishedTime: "2026-08-01T08:00:00+02:00",
    modifiedTime: "2026-09-08T10:00:00+02:00",
    authors: [site.legalName],
    section: "Prawo i Finanse",
    tags: [
      "upadłość konsumencka chorzów",
      "upadłość konsumencka śląsk",
      "oddłużanie Chorzów",
      "kancelaria upadłościowa Chorzów",
      "Krajowy Rejestr Zadłużonych",
      "Sąd Rejonowy Katowice Wschód",
    ],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upadłość konsumencka Chorzów i Śląsk – poradnik prawny",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Upadłość konsumencka Chorzów – co to jest, ile kosztuje i jak ogłosić?",
    description:
      "Kompleksowy poradnik o upadłości konsumenckiej w Chorzowie. Dowiedz się, jak legalnie umorzyć długi w sądzie.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Pełne dane strukturalne JSON-LD (Article + BreadcrumbList + FAQPage)
const publicationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${site.url}/publikacje/#article`,
      isPartOf: {
        "@id": `${site.url}/publikacje`,
      },
      headline:
        "Upadłość konsumencka Chorzów – co to jest, ile kosztuje i jak ją ogłosić?",
      description:
        "Kompleksowy poradnik prawny o upadłości konsumenckiej w Chorzowie i województwie śląskim. Procedura KRZ, opłaty sądowe, brak majątku i oddłużenie.",
      inLanguage: "pl-PL",
      mainEntityOfPage: `${site.url}/publikacje`,
      datePublished: "2026-08-01T08:00:00+02:00",
      dateModified: "2026-09-08T10:00:00+02:00",
      author: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo.svg`,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/publikacje/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Publikacje",
          item: `${site.url}/publikacje`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/publikacje/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile wynosi opłata sądowa za wniosek o upadłość konsumencką w Chorzowie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ustawowa opłata sądowa od wniosku wynosi 30 zł. Wniosek składany jest elektronicznie przez Krajowy Rejestr Zadłużonych (KRZ) do Sądu Rejonowego Katowice-Wschód w Katowicach.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki sąd rozpatruje upadłość konsumencką dla mieszkańców Chorzowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Właściwym sądem upadłościowym dla Chorzowa, Świętochłowic, Rudy Śląskiej i Katowic jest Sąd Rejonowy Katowice-Wschód w Katowicach, X Wydział Gospodarczy ds. Upadłościowych i Restrukturyzacyjnych.",
          },
        },
        {
          "@type": "Question",
          name: "Czy można ogłosić upadłość konsumencką nie mając żadnego majątku?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, brak nieruchomości, samochodu czy oszczędności nie jest przeszkodą. W wielu przypadkach brak majątku przyspiesza postępowanie i pozwala na całkowite umorzenie długów bez planu spłaty.",
          },
        },
        {
          "@type": "Question",
          name: "Jakich długów nie można umorzyć w toku upadłości konsumenckiej?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zgodnie z art. 491(21) Prawa upadłościowego umorzeniu nie podlegają: alimenty, renty odszkodowawcze, kary grzywny i nawiązki sądowe oraz długi celowo zatajone przed sądem.",
          },
        },
      ],
    },
  ],
};

const preparationSteps = [
  { label: "Wierzyciel", desc: "Bank, chwilówka, firma windykacyjna" },
  { label: "Rodzaj zobowiązania", desc: "Kredyt gotówkowy, pożyczka, czynsz" },
  { label: "Wysokość długu", desc: "Kwota kapitału, odsetek i kosztów" },
  { label: "Termin spłaty", desc: "Data powstania i wymagalności" },
  { label: "Aktualny status", desc: "Egzekucja komornicza, windykacja, sąd" },
];

export default function PublicationPage() {
  return (
    <main className="min-h-screen bg-mint text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(publicationJsonLd),
        }}
      />

      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="relative overflow-hidden bg-navy text-white pt-6 pb-8 sm:pt-14 sm:pb-20">
        <div className="absolute -inset-2 bg-radial from-green/15 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <nav aria-label="Nawigacja okruszkowa" className="mb-3.5 sm:mb-6">
            <ol className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-green transition-colors">
                  Strona Główna
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3 text-white/30" />
              </li>
              <li>
                <span className="font-semibold text-green">
                  Publikacje
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Upadłość konsumencka Chorzów{" "}
            <span className="text-green block mt-0.5 sm:mt-1">
              – co to jest, ile kosztuje i jak ją ogłosić?
            </span>
          </h1>

          <p className="mt-3 text-xs leading-relaxed text-white/80 sm:mt-6 sm:text-lg max-w-2xl mx-auto">
            Problemy ze spłatą kredytów, pożyczek, chwilówek czy rosnące zajęcia
            komornicze mogą doprowadzić do spirali zadłużenia. Dowiedz się, czym
            jest{" "}
            <strong className="text-white font-semibold">
              upadłość konsumencka w Chorzowie i na Śląsku
            </strong>
            , jak złożyć wniosek w systemie KRZ i zacząć życie z czystą kartą
            finansową.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            <a
              href={site.phone.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green px-5 py-3 text-xs sm:text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-green-light hover:scale-105 whitespace-nowrap"
            >
              <Phone className="size-3.5 sm:size-4" />
              Zadzwoń: {site.phone.display}
            </a>
            <a
              href="/#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-green hover:bg-white/10 whitespace-nowrap"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-3.5 sm:size-4 text-green" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 1: CO TO JEST UPADŁOŚĆ KONSUMENCKA?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm mb-6 sm:mb-12 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-lg font-medium leading-relaxed text-navy">
              Wokół postępowania upadłościowego narosło wiele mitów. Czy każdy
              może ogłosić upadłość konsumencką? Czy brak majątku zamyka drogę
              do oddłużenia? Ile kosztuje sprawa w sądzie i jak wygląda
              procedura dla mieszkańców Chorzowa oraz aglomeracji śląskiej?
            </p>
            <p className="mt-2 text-xs sm:text-sm text-green-contrast font-bold">
              Poniżej wyjaśniamy najważniejsze kwestie prawne prostym,
              przystępnym językiem.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 text-center lg:text-left">
                <p className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  <Scale className="size-3.5 sm:size-4 text-green" />
                  Definicja & Podstawa prawna
                </p>
                <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink sm:mt-2 sm:text-3xl">
                  Upadłość konsumencka – co to jest?
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:mt-3 sm:text-sm">
                  To procedura sądowa przeznaczona dla osób fizycznych, które
                  utraciły zdolność do regulowania swoich wymagalnych długów.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm">
                <p className="text-xs sm:text-base leading-relaxed text-ink/90 font-medium">
                  <strong>Upadłość konsumencka</strong> to formalne postępowanie
                  sądowe przeznaczone dla osób fizycznych nieprowadzących
                  działalności gospodarczej (oraz byłych przedsiębiorców, którzy
                  zamknęli firmę), którzy stali się niewypłacalni. Głównym celem
                  postępowania jest <strong>całkowite oddłużenie</strong> osoby
                  zadłużonej oraz zaspokojenie wierzycieli w miarę możliwości
                  dłużnika.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-green/30 bg-mint-dark p-4 sm:p-6 shadow-sm">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-green-contrast mb-1 sm:mb-1.5">
                  Właściwość sądu dla Chorzowa i Śląska
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  Dla mieszkańców Chorzowa oraz miast ościennych
                  (Świętochłowice, Ruda Śląska, Bytom, Katowice, Siemianowice
                  Śląskie) organem właściwym do rozpoznania wniosku jest{" "}
                  <strong>
                    Sąd Rejonowy Katowice-Wschód w Katowicach (X Wydział
                    Gospodarczy ds. Upadłościowych i Restrukturyzacyjnych)
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 2: PROCEDURA KRZ I PRZEBIEG POSTĘPOWANIA
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-green">
              <Layers className="size-3.5 sm:size-4" />
              Przebieg postępowania krok po kroku
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:mt-2 sm:text-3xl lg:text-4xl">
              Ogłoszenie upadłości konsumenckiej – jak wygląda procedura w KRZ?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/80 sm:mt-3 sm:text-base">
              Od grudnia 2021 r. wszystkie wnioski o upadłość konsumencką w
              Polsce składa się drogą elektroniczną przez{" "}
              <strong>Krajowy Rejestr Zadłużonych (portal KRZ)</strong>.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:mt-2 sm:text-sm">
              Przed sporządzeniem wniosku kluczowe jest rzetelne zebranie
              dokumentów i informacji obejmujących:
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3.5 sm:p-8 backdrop-blur-md shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 items-stretch">
              {[
                "Pełną listę wierzycieli z aktualnymi adresami,",
                "Dokładną wysokość zadłużenia (kapitał, odsetki, koszty),",
                "Wszystkie umowy kredytowe, pożyczkowe i wezwania do zapłaty,",
                "Informacje o dochodach (umowa o pracę, zlecenie, emerytura/renta),",
                "Spis posiadanego majątku (ruchomości, nieruchomości) lub jego brak,",
                "Koszty utrzymania siebie i rodziny oraz wydatki medyczne,",
                "Prowadzone egzekucje komornicze (sygnatury akt KM),",
                "Opis przyczyn niewypłacalności (np. choroba, utrata pracy, inflacja).",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex h-full min-h-11.5 sm:min-h-12.5 items-center gap-2.5 sm:gap-3 rounded-xl border border-white/5 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-colors hover:bg-white/10"
                >
                  <span className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-md bg-green/20 text-[10px] sm:text-xs font-bold text-green">
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 border-t border-white/10 pt-3 sm:pt-4 text-center text-[11px] sm:text-xs text-white/70">
              Prawidłowe wypełnienie formularzy w portalu KRZ jest kluczem do
              szybkiego wydania postanowienia przez Sąd Katowice-Wschód.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 3: BRAK MAJĄTKU + KOSZTY POSTĘPOWANIA
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3.5 sm:gap-6 lg:grid-cols-2 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {/* Karta: Brak majątku */}
            <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4 min-h-9 sm:min-h-11">
                  <span className="inline-flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-green shadow-sm">
                    <TrendingDown className="size-4 sm:size-5" />
                  </span>
                  <h3 className="font-display text-sm sm:text-xl font-bold text-navy leading-snug">
                    Czy można ogłosić upadłość bez majątku?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-green-contrast mb-2">
                  Upadłość konsumencka bez majątku to powszechna i w 100%
                  legalna sytuacja.
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  Brak mieszkania, samochodu czy oszczędności{" "}
                  <strong>nie uniemożliwia ogłoszenia upadłości</strong>. W
                  praktyce brak majątku upraszcza i znacznie skraca
                  postępowanie, ponieważ wyznaczony przez sąd syndyk nie musi
                  prowadzić czasochłonnej licytacji składników masy
                  upadłościowej.
                </p>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/80">
                  W takiej sytuacji dłużnik może uzyskać{" "}
                  <strong>
                    całkowite umorzenie długów bez ustalania planu spłaty
                  </strong>
                  , jeżeli jego sytuacja osobista i zarobkowa trwale
                  uniemożliwia dokonywanie jakichkolwiek wpłat.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-mint p-3 text-[11px] sm:text-xs text-ink/75 border border-black/5 leading-relaxed">
                <strong>Ważne:</strong> Sąd analizuje historię majątkową z
                ostatnich lat (np. darowizny, sprzedaż majątku po zaniżonej
                cenie), dlatego sprawa wymaga rzetelnego przedstawienia stanu
                faktycznego.
              </div>
            </div>

            {/* Karta: Ile kosztuje upadłość */}
            <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4 min-h-9 sm:min-h-11">
                  <span className="inline-flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-green shadow-sm">
                    <CreditCard className="size-4 sm:size-5" />
                  </span>
                  <h3 className="font-display text-sm sm:text-xl font-bold text-navy leading-snug">
                    Ile kosztuje upadłość konsumencka w Chorzowie?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  Koszty postępowania dzielą się na opłaty sądowe oraz
                  wynagrodzenie profesjonalnego pełnomocnika:
                </p>

                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-ink/80 list-disc pl-5">
                  <li>
                    <strong>Opłata sądowa od wniosku:</strong> wynosi ustawowo
                    dokładnie <strong>30 zł</strong> (wnoszona na konto Sądu
                    Rejonowego Katowice-Wschód).
                  </li>
                  <li>
                    <strong>Koszty postępowania upadłościowego:</strong> w
                    przypadku braku majątku tymczasowo pokrywa je Skarb Państwa.
                  </li>
                  <li>
                    <strong>Wynagrodzenie kancelarii:</strong> za przygotowanie
                    dokumentacji, wniosek w KRZ i opiekę procesową (w naszej
                    kancelarii od 2900 zł z opcją elastycznych rat).
                  </li>
                </ul>

                <p className="mt-2 text-[11px] sm:text-xs text-ink/70 leading-relaxed">
                  Przejrzyste zasady bez ukrytych kosztów gwarantują pełne
                  bezpieczeństwo finansowe od pierwszego dnia współpracy.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-navy/5 p-3 text-[11px] sm:text-xs font-medium text-navy border border-black/5 leading-relaxed">
                Wstępna analiza prawno-finansowa Twojej sytuacji w biurze w
                Chorzowie lub telefonicznie jest w 100% bezpłatna.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 4: KIEDY WARTO ROZWAŻYĆ UPADŁOŚĆ?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint-dark/50 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-4 sm:mb-10">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              <AlertTriangle className="size-3.5 sm:size-4 text-green" />
              Sygnały ostrzegawcze
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight text-ink sm:mt-2 sm:text-3xl lg:text-4xl">
              Kiedy warto ogłosić upadłość konsumencką?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-ink/75">
              Upadłość konsumencka w Chorzowie i na Śląsku to skuteczne
              narzędzie prawne, gdy:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 max-w-5xl mx-auto items-stretch">
            {[
              "Zadłużenie stale rośnie mimo dokonywanych wpłat,",
              "Komornik zajął pensję, konto bankowe lub emeryturę,",
              "Spłacasz jedne pożyczki kolejnymi chwilówkami,",
              "Otrzymujesz natarczywe telefony z firm windykacyjnych,",
              "Raty kredytów przekraczają Twoje miesięczne dochody,",
              "Utrata zdrowia lub pracy uniemożliwia regulowanie rachunków.",
            ].map((reason) => (
              <div
                key={reason}
                className="flex h-full min-h-13 sm:min-h-15 items-center rounded-xl sm:rounded-2xl border-l-4 border-l-green border-y border-r border-black/5 bg-white p-3.5 sm:p-4 shadow-xs"
              >
                <p className="font-medium text-navy text-xs sm:text-sm leading-snug">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-8 text-center">
            <p className="font-display text-xs sm:text-sm font-semibold text-green-contrast">
              Pamiętaj: z dniem ogłoszenia upadłości wszelkie egzekucje
              komornicze zostają zawieszone z mocy prawa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 5: CZY UPADŁOŚĆ UMORZY WSZYSTKIE DŁUGI? (E-E-A-T & PRAWO)
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-navy text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-10 items-start max-w-6xl mx-auto">
            {/* Lewa kolumna: Pomoc kancelarii w Chorzowie */}
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-green">
                <Building2 className="size-3.5 sm:size-4" />
                Lokalna Kancelaria Upadłościowa
              </p>
              <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl">
                Upadłość konsumencka Chorzów – dlaczego warto z
                ekspertem?
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Przepisy prawa upadłościowego wymagają bezbłędnego sporządzenia
                wniosku w systemie KRZ. Błędy formalne mogą skutkować zwrotem
                wniosku lub niekorzystnym planem spłaty wierzycieli na okres
                nawet 7 lat.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Jako część ogólnopolskiej sieci{" "}
                <strong>Grupy Expert Partner</strong> zapewniamy pełne
                bezpieczeństwo, reprezentację przed sądem i syndykiem oraz
                przygotowanie pism procesowych.
              </p>

              <div className="rounded-xl sm:rounded-2xl border border-green/40 bg-white/5 p-3.5 sm:p-4 backdrop-blur-md">
                <p className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-green">
                  <MapPin className="size-3.5 sm:size-4" />
                  Kancelaria w Chorzowie – ul. Hajducka 4
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-white/90 leading-relaxed">
                  Obsługujemy mieszkańców miast:{" "}
                  <strong className="text-white">
                    Chorzów, Świętochłowice, Katowice, Ruda Śląska, Bytom,
                    Siemianowice Śląskie, Zabrze i Gliwice
                  </strong>{" "}
                  stacjonarnie oraz zdalnie w całej Polsce.
                </p>
              </div>
            </div>

            {/* Prawa kolumna: Jakich długów się NIE umarza */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-8 backdrop-blur-md space-y-3 sm:space-y-4">
              <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-green/20 text-green">
                <Gavel className="size-4 sm:size-5" />
              </div>

              <h3 className="font-display text-base sm:text-xl font-bold text-white">
                Czy upadłość umorzy wszystkie długi? (Wyjątki ustawowe)
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Upadłość konsumencka pozwala umorzyć kredyty bankowe, pożyczki,
                chwilówki, zaległości czynszowe czy rachunki. Jednak zgodnie z
                art. 491²¹ Prawa upadłościowego{" "}
                <strong>umorzeniu NIE podlegają</strong>:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-white/85">
                {[
                  "Zobowiązania o charakterze alimentacyjnym,",
                  "Renty z tytułu odszkodowania za wywołanie choroby lub śmierci,",
                  "Kary grzywny, mandaty oraz nawiązki orzeczone przez sąd karny,",
                  "Obowiązek naprawienia szkody wyrządzonej przestępstwem,",
                  "Długi umyślnie zatajone przez dłużnika we wniosku upadłościowym.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 6: JAK PRZYGOTOWAĆ SIĘ DO WNIOSKU?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-4 sm:mb-10">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              <FileCheck2 className="size-3.5 sm:size-4 text-green" />
              Praktyczny przewodnik
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight text-ink sm:mt-2 sm:text-3xl lg:text-4xl">
              Jak przygotować się do upadłości konsumenckiej?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-ink/75 leading-relaxed">
              Kluczem do sprawnego oddłużenia jest zebranie kompletnych danych.
              Każdy wierzyciel musi zostać wskazany we wniosku.
            </p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-navy">
              Przygotuj zestawienie zawierające poniższe punkty:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 max-w-6xl mx-auto items-stretch">
            {preparationSteps.map((step, idx) => {
              const isLast = idx === 4;
              return (
                <div
                  key={step.label}
                  className={`flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-black/5 bg-white p-2.5 sm:px-3.5 sm:py-4 shadow-xs transition-all hover:border-green hover:shadow-md text-center items-center ${
                    isLast
                      ? "col-span-2 mx-auto w-[calc(50%-0.25rem)] sm:col-span-1 sm:w-full"
                      : "w-full"
                  }`}
                >
                  <div className="w-full flex flex-col items-center">
                    <span className="block text-[10px] sm:text-[11px] font-bold text-green uppercase tracking-wider mb-0.5 text-center">
                      Krok 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-navy leading-snug min-h-7 sm:min-h-0 sm:whitespace-nowrap flex items-center justify-center text-center w-full">
                      {step.label}
                    </h3>
                  </div>

                  <div className="w-full border-t border-black/5 mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 flex flex-col items-center">
                    <p className="text-[10.5px] min-[380px]:text-[11px] sm:text-xs text-ink/70 leading-tight sm:leading-normal tracking-tight min-h-7.5 sm:min-h-0 whitespace-normal sm:whitespace-nowrap flex items-center justify-center text-center w-full">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 sm:mt-8 max-w-3xl mx-auto text-center space-y-1.5 text-xs sm:text-sm text-ink/80">
            <p>
              Nie wiesz, jak ustalić dokładne kwoty zadłużenia lub odnaleźć
              wszystkich komorników?
            </p>
            <p className="font-semibold text-green-contrast">
              Pomożemy Ci skompletować niezbędne dokumenty i sporządzimy
              kompletny wniosek do sądu.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 7: PODSUMOWANIE + BOKS CTA
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-10 backdrop-blur-md shadow-xl">
            <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl text-green">
              Podsumowanie: Odzyskaj spokój i wolność finansową
            </h2>

            <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-white/85">
              Znowelizowane przepisy prawa upadłościowego otworzyły drogę do
              oddłużenia dla tysięcy osób w Polsce. Kluczem do sukcesu jest
              rzetelne przedstawienie swojej sytuacji przed sądem. Pamiętaj, że
              nie musisz przechodzić przez ten proces w samotności.
            </p>

            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl bg-green/15 border border-green/30 p-3.5 sm:p-5 text-white">
              <p className="text-xs sm:text-sm leading-relaxed">
                Skorzystaj z pomocy doświadczonej kancelarii:{" "}
                <Link href="/" className="font-bold text-green hover:underline">
                  Upadłość konsumencka Chorzów
                </Link>{" "}
                przy ul. Hajduckiej 4. Zadzwoń pod numer{" "}
                <strong className="text-white font-bold">
                  {site.phone.display}
                </strong>{" "}
                i umów się na bezpłatną, poufną analizę swojej sprawy.
              </p>
            </div>

            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 border-t border-white/10 pt-4 sm:pt-6">
              <div className="flex items-center gap-2.5 text-center sm:text-left">
                <ShieldCheck className="size-5 text-green shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  Konsultacja telefoniczna oraz wstępna analiza są w 100%
                  bezpłatne.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
                <a
                  href={site.phone.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green px-5 py-3 text-xs sm:text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-green-light hover:scale-105 whitespace-nowrap"
                >
                  <Phone className="size-3.5 sm:size-4" />
                  {site.phone.display}
                </a>
                <Link
                  href="/#kontakt"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/20 whitespace-nowrap"
                >
                  Formularz kontaktowy
                  <ArrowUpRight className="size-3.5 sm:size-4 text-green" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-green transition-colors"
            >
              ← Wróć do strony głównej
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

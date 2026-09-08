import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  MapPin,
  HelpCircle,
  TrendingDown,
  Sparkles,
  Layers,
  Scale,
  CreditCard,
  Building2,
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
  FileCheck2,
} from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title:
    "Upadłość konsumencka – co to jest, ile kosztuje i jak ją ogłosić? · Poradnik",
  description:
    "Kompleksowy poradnik o upadłości konsumenckiej w Chorzowie i na Śląsku. Dowiedz się, co to jest, ile kosztuje, jak wygląda upadłość bez majątku i jak przygotować wniosek.",
  alternates: {
    canonical: "/publikacje",
  },
  openGraph: {
    title: "Upadłość konsumencka – co to jest, ile kosztuje i jak ją ogłosić?",
    description:
      "Problemy ze spłatą kredytów, pożyczek, rachunków? Wyjaśniamy procedurę upadłości konsumenckiej krok po kroku prostym językiem.",
    url: `${site.url}/publikacje`,
    siteName: site.name,
    locale: "pl_PL",
    type: "article",
    publishedTime: "2026-08-01T08:00:00+02:00",
    modifiedTime: "2026-09-08T10:00:00+02:00",
    authors: [site.legalName],
    section: "Prawo i Finanse",
    tags: [
      "upadłość konsumencka",
      "oddłużanie",
      "Chorzów",
      "Śląsk",
      "poradnik prawny",
      "kancelaria upadłościowa",
    ],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upadłość konsumencka – poradnik prawny Chorzów i Śląsk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upadłość konsumencka – co to jest, ile kosztuje i jak ją ogłosić?",
    description:
      "Kompleksowy poradnik o upadłości konsumenckiej. Dowiedz się, jak ogłosić upadłość i legalnie umorzyć długi.",
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

// Pełne dane strukturalne JSON-LD dla Google (Article + Okruszki)
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
        "Upadłość konsumencka – co to jest, ile kosztuje i jak ją ogłosić?",
      description:
        "Kompleksowy poradnik prawny o upadłości konsumenckiej w Polsce. Wyjaśniamy procedurę, koszty, upadłość bez majątku i oddłużenie.",
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
  ],
};

const preparationSteps = [
  { label: "Wierzyciel", desc: "Nazwa instytucji / banku" },
  { label: "Rodzaj zobowiązania", desc: "Kredyt, pożyczka, rachunek" },
  { label: "Wysokość długu", desc: "Dokładna kwota kapitału i odsetek" },
  { label: "Termin spłaty", desc: "Data wymagalności roszczenia" },
  { label: "Aktualny status", desc: "Np. windykacja, komornik" },
];

export default function PublicationPage() {
  return (
    <main className="min-h-screen bg-mint text-ink">
      {/* Skrypt JSON-LD generowany dla robotów Google */}
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
          {/* Breadcrumbs */}
          <nav aria-label="Nawigacja okruszkowa" className="mb-3.5 sm:mb-6">
            <ol className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-green transition-colors">
                  Główna
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3 text-white/30" />
              </li>
              <li>
                <span className="font-semibold text-green">Publikacje</span>
              </li>
            </ol>
          </nav>

          <h1 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white max-w-3xl">
            Upadłość konsumencka{" "}
            <span className="text-green block mt-0.5 sm:mt-1">
              – co to jest, ile kosztuje i jak ją ogłosić?
            </span>
          </h1>

          <p className="mt-3 text-xs leading-relaxed text-white/80 sm:mt-6 sm:text-lg max-w-2xl mx-auto">
            Problemy ze spłatą kredytów, pożyczek, rachunków czy innych
            zobowiązań mogą z czasem doprowadzić do sytuacji, w której
            zadłużenie staje się niemożliwe do uregulowania. W takim przypadku
            warto sprawdzić, czym jest upadłość konsumencka i czy może być
            rozwiązaniem pozwalającym uporządkować sytuację finansową.
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
          SEKCJA 1: WPROWADZENIE + CO TO JEST UPADŁOŚĆ?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm mb-6 sm:mb-12 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-lg font-medium leading-relaxed text-navy">
              Wokół tego postępowania pojawia się wiele pytań. Co to jest
              upadłość konsumencka? Jak wygląda ogłoszenie upadłości
              konsumenckiej? Czy można ogłosić upadłość bez majątku? Ile
              kosztuje upadłość konsumencka? A także: czy w takiej sytuacji
              warto skorzystać z czyjejś pomocy?
            </p>
            <p className="mt-2 text-xs sm:text-sm text-green-contrast font-bold">
              Poniżej wyjaśniamy najważniejsze kwestie prostym i zrozumiałym
              językiem.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 text-center lg:text-left">
                <p className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  <Scale className="size-3.5 sm:size-4 text-green" />
                  Definicja & Istota
                </p>
                <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink sm:mt-2 sm:text-3xl">
                  Upadłość konsumencka – co to jest?
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:mt-3 sm:text-sm">
                  Najprościej mówiąc, postępowanie może być rozwiązaniem dla
                  osoby, która przestała być w stanie regulować swoje wymagalne
                  zobowiązania.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm">
                <p className="text-xs sm:text-base leading-relaxed text-ink/90 font-medium">
                  Upadłość konsumencka to postępowanie przeznaczone dla osoby
                  fizycznej, która nie prowadzi działalności gospodarczej, która
                  nie jest w stanie płacić wszystkich swoich zobowiązań, czyli
                  jest niewypłacalna. Jego celem jest przede wszystkim
                  uporządkowanie sytuacji osoby zadłużonej oraz, w określonych
                  prawem warunkach, umożliwienie jej oddłużenia.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-green/30 bg-mint-dark p-4 sm:p-6 shadow-sm">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-green-contrast mb-1 sm:mb-1.5">
                  Ważna zasada indywidualna
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  W praktyce każda sytuacja jest jednak inna. Znaczenie mają
                  między innymi wysokość zadłużenia, dochody, majątek, przyczyny
                  powstania niewypłacalności oraz aktualna sytuacja życiowa
                  dłużnika.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 2: OGŁOSZENIE UPADŁOŚCI – JAK WYGLĄDA?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-green">
              <Layers className="size-3.5 sm:size-4" />
              Przebieg postępowania
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:mt-2 sm:text-3xl lg:text-4xl">
              Ogłoszenie upadłości konsumenckiej – jak wygląda?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/80 sm:mt-3 sm:text-base">
              Samo ogłoszenie upadłości konsumenckiej nie oznacza automatycznego
              anulowania wszystkich długów. Jest to początek postępowania, które
              przebiega według określonych zasad.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:mt-2 sm:text-sm">
              Osoba rozważająca upadłość powinna przede wszystkim dokładnie
              przeanalizować swoją sytuację finansową. Warto przygotować
              informacje dotyczące:
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3.5 sm:p-8 backdrop-blur-md shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 items-stretch">
              {[
                "wszystkich posiadanych zobowiązań,",
                "wierzycieli,",
                "wysokości zadłużenia,",
                "osiąganych dochodów,",
                "posiadanego majątku,",
                "kosztów utrzymania, kosztów leczenia,",
                "prowadzonych postępowań egzekucyjnych,",
                "przyczyn, które doprowadziły do niewypłacalności.",
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
              Dokładne przedstawienie sytuacji finansowej ma duże znaczenie dla
              prawidłowego przeprowadzenia postępowania.
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
                    Czy mogę ogłosić upadłość nie mając majątku?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-green-contrast mb-2">
                  Jednym z często pojawiających się pytań jest upadłość
                  konsumencka bez majątku.
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  Brak nieruchomości, samochodu czy innych wartościowych
                  składników majątku tak naprawdę upraszcza postępowanie i może
                  je skrócić. Sytuację osoby niewypłacalnej ocenia się
                  indywidualnie, jednak bardzo istotne jest czy był jakiś
                  majątek, który został sprzedany, podarowany w okresie kilku
                  ostatnich lat.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-mint p-3 text-[11px] sm:text-xs text-ink/75 border border-black/5 leading-relaxed">
                Warto pamiętać, że majątek jest tylko jednym z elementów całej
                sytuacji. Istotne są również zobowiązania, dochody, koszty
                utrzymania oraz inne okoliczności dotyczące osoby zadłużonej.
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
                    Ile kosztuje upadłość konsumencka?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-ink/80">
                  Koszty upadłości konsumenckiej zależą od konkretnej sytuacji
                  oraz zakresu pomocy, z której korzysta osoba zadłużona. Samo
                  złożenie wniosku o ogłoszenie upadłości to koszt
                  kilkudziesięciu złotych. Jednak później dochodzą inne koszty,
                  które są pokrywane w trakcie postępowania.
                </p>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/80">
                  Warto rozróżnić koszty związane z samym postępowaniem sądowym
                  od wynagrodzenia osoby, która wspiera proces przygotowania
                  dokumentów, pisze wniosek, pokazuje kolejne kroki postępowania
                  i wspiera w całym okresie upadłości.
                </p>

                <p className="mt-2 text-[11px] sm:text-xs text-ink/70 leading-relaxed">
                  Na całkowity koszt może wpływać m.in. stopień skomplikowania
                  sprawy, liczba wierzycieli, sytuacja majątkowa oraz
                  konieczność dodatkowych czynności w sądzie.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-navy/5 p-3 text-[11px] sm:text-xs font-medium text-navy border border-black/5 leading-relaxed">
                Przed rozpoczęciem współpracy z biurem / kancelarią warto
                zapytać, co dokładnie obejmuje ustalone wynagrodzenie i jakie
                dodatkowe wydatki mogą pojawić się w sprawie.
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
              Kiedy reagować
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight text-ink sm:mt-2 sm:text-3xl lg:text-4xl">
              Kiedy warto rozważyć upadłość konsumencką?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-ink/75">
              Nie ma jednej sytuacji, w której upadłość konsumencka będzie
              odpowiednia dla każdego. Warto jednak zainteresować się tym
              rozwiązaniem, jeżeli:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 max-w-5xl mx-auto items-stretch">
            {[
              "Zadłużenie stale rośnie,",
              "Nie jesteś w stanie regulować wymagalnych zobowiązań,",
              "Spłacasz jedne zobowiązania kolejnymi pożyczkami,",
              "Prowadzona jest przeciwko Tobie egzekucja komornicza,",
              "Wysokość miesięcznych rat przekracza Twoje możliwości finansowe,",
              "Twoja sytuacja finansowa od dłuższego czasu się pogarsza.",
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
              Im wcześniej przeanalizujesz swoją sytuację, tym łatwiej może być
              znaleźć właściwe rozwiązanie.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 5: UPADŁOŚĆ KONSUMENTA A POMOC KANCELARII & UMORZENIE
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-navy text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-10 items-center max-w-6xl mx-auto">
            {/* Lewa kolumna: Pomoc kancelarii */}
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-green">
                <Building2 className="size-3.5 sm:size-4" />
                Wsparcie profesjonalistów
              </p>
              <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl">
                Upadłość konsumenta a pomoc kancelarii
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Osoby wpisujące w wyszukiwarkę hasło „upadłość konsumenta”
                często szukają odpowiedzi na pytanie, czy powinny przeprowadzić
                całe postępowanie samodzielnie, czy skorzystać z pomocy
                specjalisty.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Przepisy dotyczące upadłości konsumenckiej są rozbudowane, a
                każda sprawa może wyglądać inaczej. Z tego powodu konsultacja z
                osobą mającą wiedzę i doświadczenie w sprawach upadłości
                konsumenckiej może pomóc uporządkować informacje i określić
                możliwe rozwiązania.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Biuro / Kancelaria może również pomóc w przygotowaniu
                dokumentów, analizie sytuacji dłużnika oraz wspomóc w
                odpowiednim przedstawieniu jego sytuacji w toku postępowania.
              </p>

              <div className="rounded-xl sm:rounded-2xl border border-green/40 bg-white/5 p-3.5 sm:p-4 backdrop-blur-md">
                <p className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-green">
                  <MapPin className="size-3.5 sm:size-4" />
                  Kancelaria w Chorzowie
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-white/90 leading-relaxed">
                  Kancelaria{" "}
                  <strong className="text-white font-semibold">
                    Upadłość Konsumencka Chorzów
                  </strong>{" "}
                  (ul. Hajducka 4) to miejsce, gdzie warto się udać i w
                  atmosferze zrozumienia i zaufania omówić swoją sytuację.
                </p>
              </div>
            </div>

            {/* Prawa kolumna: Czy upadłość oznacza umorzenie */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-8 backdrop-blur-md space-y-3 sm:space-y-4">
              <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-green/20 text-green">
                <HelpCircle className="size-4 sm:size-5" />
              </div>

              <h3 className="font-display text-base sm:text-xl font-bold text-white">
                Czy upadłość konsumencka oznacza umorzenie wszystkich długów?
              </h3>

              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-green">
                To jedno z najważniejszych pytań, które pojawiają się przed
                rozpoczęciem postępowania.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                Upadłość konsumencka jest procedurą oddłużeniową, ale nie należy
                utożsamiać jej automatycznie z natychmiastowym umorzeniem
                wszystkich zobowiązań. Ostateczne skutki postępowania zależą od
                konkretnej sprawy i decyzji podejmowanych w jego toku.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                Dlatego przed złożeniem wniosku warto dokładnie przeanalizować
                swoją sytuację i dowiedzieć się, jakie mogą być konsekwencje
                postępowania w konkretnym przypadku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 6: JAK PRZYGOTOWAĆ SIĘ DO UPADŁOŚCI?
      ========================================================================== */}
      <section className="py-6 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-4 sm:mb-10">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              <FileCheck2 className="size-3.5 sm:size-4 text-green" />
              Pierwsze kroki
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight text-ink sm:mt-2 sm:text-3xl lg:text-4xl">
              Jak przygotować się do upadłości konsumenckiej?
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-ink/75 leading-relaxed">
              Pierwszym krokiem powinno być zebranie wszystkich informacji
              dotyczących zadłużenia. Nie warto pomijać żadnego wierzyciela ani
              zobowiązania.
            </p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-navy">
              Dobrym rozwiązaniem jest przygotowanie listy zawierającej:
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
              Należy również zgromadzić dokumenty dotyczące dochodów, majątku i
              bieżących kosztów utrzymania.
            </p>
            <p className="font-semibold text-green-contrast">
              Im bardziej uporządkowane informacje, tym łatwiej przeanalizować
              sytuację i przygotować się do dalszych działań.
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
              Podsumowując
            </h2>

            <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-white/85">
              Upadłość konsumencka jest rozwiązaniem powszechnie stosowanym, a
              zmienione przepisy pozwoliły na dostęp do niej szerokiej grupie
              osób. Warto solidnie przygotować się do tego postępowania i oprzeć
              się na doświadczeniu osób, które uczestniczyły w takim
              postępowaniu, pomagały zebrać dokumenty, prawidłowo opisać
              sytuację dłużnika. Kluczem jest szczera rozmowa i zaufanie jakim
              trzeba się obdarzyć, żeby proces był jak najprostszy i jak
              najszybszy, jednak trzeba pamiętać, że całe postępowanie może
              trwać kilka lat.
            </p>

            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl bg-green/15 border border-green/30 p-3.5 sm:p-5 text-white">
              <p className="text-xs sm:text-sm leading-relaxed">
                Jeżeli interesuje Cię skuteczna{" "}
                <Link href="/" className="font-bold text-green hover:underline">
                  upadłość konsumencka w Chorzowie
                </Link>{" "}
                oraz profesjonalne oddłużenie, zapraszamy do naszej kancelarii
                przy ulicy Hajduckiej 4. Możesz też do nas zadzwonić pod numer{" "}
                <strong className="text-white font-bold">
                  {site.phone.display}
                </strong>{" "}
                lub wysłać wiadomość przez formularz kontaktowy.
              </p>
            </div>

            {/* Przyciski i gwarancja */}
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 border-t border-white/10 pt-4 sm:pt-6">
              <div className="flex items-center gap-2.5 text-center sm:text-left">
                <ShieldCheck className="size-5 text-green shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  Konsultacja telefoniczna oraz wstępna analiza są w 100%
                  bezpłatne.
                </span>
              </div>

              {/* Przyciski w 1 linii */}
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

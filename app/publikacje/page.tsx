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
      "Problemy ze spłatą kredytów, pożyczek, rachunków? Wyjaśniamy procedurę upadłości konsumenckiej prostym i zrozumiałym językiem.",
    type: "article",
    url: `${site.url}/publikacje`,
  },
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
      {/* =========================================================================
          HERO SECTION (Wyśrodkowana)
      ========================================================================== */}
      <section className="relative overflow-hidden bg-navy text-white pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="absolute -inset-2 bg-radial from-green/15 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumbs */}
          <nav aria-label="Nawigacja okruszkowa" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-xs text-white/60 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-green transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-white/30" />
              </li>
              <li>
                <span className="font-semibold text-green">
                  Publikacje
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white max-w-3xl">
            Upadłość konsumencka{" "}
            <span className="text-green block mt-1">
              – co to jest, ile kosztuje i jak ją ogłosić?
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-xl max-w-2xl mx-auto">
            Problemy ze spłatą kredytów, pożyczek, rachunków czy innych
            zobowiązań mogą z czasem doprowadzić do sytuacji, w której
            zadłużenie staje się niemożliwe do uregulowania. W takim przypadku
            warto sprawdzić, czym jest upadłość konsumencka i czy może być
            rozwiązaniem pozwalającym uporządkować sytuację finansową.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href={site.phone.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-green px-7 py-4 text-sm font-semibold text-navy-900 shadow-lg shadow-green/20 transition-all hover:bg-green-light hover:scale-105 whitespace-nowrap"
            >
              <Phone className="size-4" />
              Zadzwoń: {site.phone.display}
            </a>
            <a
              href="/#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-green hover:bg-white/10 whitespace-nowrap"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-4 text-green" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 1: WPROWADZENIE + CO TO JEST UPADŁOŚĆ?
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-10 shadow-sm mb-12 text-center max-w-4xl mx-auto">
            <p className="text-base sm:text-xl font-medium leading-relaxed text-navy">
              Wokół tego postępowania pojawia się wiele pytań. Co to jest
              upadłość konsumencka? Jak wygląda ogłoszenie upadłości
              konsumenckiej? Czy można ogłosić upadłość bez majątku? Ile
              kosztuje upadłość konsumencka? A także: czy w takiej sytuacji
              warto skorzystać z czyjejś pomocy?
            </p>
            <p className="mt-3 text-sm sm:text-base text-green-contrast font-bold">
              Poniżej wyjaśniamy najważniejsze kwestie prostym i zrozumiałym
              językiem.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                  <Scale className="size-4 text-green" />
                  Definicja & Istota
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-4xl">
                  Upadłość konsumencka – co to jest?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
                  Najprościej mówiąc, postępowanie może być rozwiązaniem dla
                  osoby, która przestała być w stanie regulować swoje wymagalne
                  zobowiązania.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
                <p className="text-base sm:text-lg leading-relaxed text-ink/90 font-medium">
                  Upadłość konsumencka to postępowanie przeznaczone dla osoby
                  fizycznej, która nie prowadzi działalności gospodarczej, która
                  nie jest w stanie płacić wszystkich swoich zobowiązań, czyli
                  jest niewypłacalna. Jego celem jest przede wszystkim
                  uporządkowanie sytuacji osoby zadłużonej oraz, w określonych
                  prawem warunkach, umożliwienie jej oddłużenia.
                </p>
              </div>

              <div className="rounded-3xl border border-green/30 bg-mint-dark p-6 sm:p-8 shadow-sm">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-green-contrast mb-2">
                  Ważna zasada indywidualna
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-ink/80">
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
          SEKCJA 2: OGŁOSZENIE UPADŁOŚCI – JAK WYGLĄDA? (Zmieniona, czysta lista)
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-green">
              <Layers className="size-4" />
              Przebieg postępowania
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ogłoszenie upadłości konsumenckiej – jak wygląda?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
              Samo ogłoszenie upadłości konsumenckiej nie oznacza automatycznego
              anulowania wszystkich długów. Jest to początek postępowania, które
              przebiega według określonych zasad.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Osoba rozważająca upadłość powinna przede wszystkim dokładnie
              przeanalizować swoją sytuację finansową. Warto przygotować
              informacje dotyczące:
            </p>
          </div>

          {/* Jednolity, estetyczny panel zamiast 8 kafelków */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-md shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/5 px-4 py-3.5 transition-colors hover:bg-white/10"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-green/20 text-xs font-bold text-green">
                    {index + 1}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-white/70">
              Dokładne przedstawienie sytuacji finansowej ma duże znaczenie dla
              prawidłowego przeprowadzenia postępowania.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 3: BRAK MAJĄTKU + KOSZTY POSTĘPOWANIA
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {/* Karta: Brak majątku */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 sm:p-10 shadow-sm transition-all hover:shadow-md hover:border-green/50">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy text-green mb-6 shadow-md">
                  <TrendingDown className="size-6" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  Czy mogę ogłosić upadłość nie mając żadnego majątku?
                </h3>

                <p className="mt-4 text-sm font-semibold text-green-contrast">
                  Jednym z często pojawiających się pytań jest upadłość
                  konsumencka bez majątku.
                </p>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/80">
                  Brak nieruchomości, samochodu czy innych wartościowych
                  składników majątku tak naprawdę upraszcza postępowanie i może
                  je skrócić. Sytuację osoby niewypłacalnej ocenia się
                  indywidualnie, jednak bardzo istotne jest czy był jakiś
                  majątek, który został sprzedany, podarowany w okresie kilku
                  ostatnich lat.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-mint p-4 text-xs sm:text-sm text-ink/75 border border-black/5">
                Warto pamiętać, że majątek jest tylko jednym z elementów całej
                sytuacji. Istotne są również zobowiązania, dochody, koszty
                utrzymania oraz inne okoliczności dotyczące osoby zadłużonej.
              </div>
            </div>

            {/* Karta: Ile kosztuje upadłość */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 sm:p-10 shadow-sm transition-all hover:shadow-md hover:border-green/50">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy text-green mb-6 shadow-md">
                  <CreditCard className="size-6" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  Ile kosztuje upadłość konsumencka?
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/80">
                  Koszty upadłości konsumenckiej zależą od konkretnej sytuacji
                  oraz zakresu pomocy, z której korzysta osoba zadłużona. Samo
                  złożenie wniosku o ogłoszenie upadłości to koszt
                  kilkudziesięciu złotych. Jednak później dochodzą inne koszty,
                  które są pokrywane w trakcie postępowania.
                </p>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/80">
                  Warto rozróżnić koszty związane z samym postępowaniem sądowym
                  od wynagrodzenia osoby, która wspiera proces przygotowania
                  dokumentów, pisze wniosek, pokazuje kolejne kroki postępowania
                  i wspiera w całym okresie upadłości.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-ink/70 leading-relaxed">
                  Na całkowity koszt upadłości konsumenckiej może wpływać między
                  innymi stopień skomplikowania sprawy, liczba wierzycieli,
                  sytuacja majątkowa oraz konieczność podejmowania dodatkowych
                  czynności w toku postępowania.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-navy/5 p-4 text-xs sm:text-sm font-medium text-navy border border-black/5">
                Przed rozpoczęciem współpracy z biurem / kancelarią warto
                zapytać, co dokładnie obejmuje ustalone wynagrodzenie i jakie
                dodatkowe wydatki mogą pojawić się w sprawie.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 4: KIEDY WARTO ROZWAŻYĆ UPADŁOŚĆ? (Bez ptaszków)
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-mint-dark/50 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              <AlertTriangle className="size-4 text-green" />
              Kiedy reagować
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Kiedy warto rozważyć upadłość konsumencką?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/75">
              Nie ma jednej sytuacji, w której upadłość konsumencka będzie
              odpowiednia dla każdego. Warto jednak zainteresować się tym
              rozwiązaniem, jeżeli:
            </p>
          </div>

          {/* Kafelki bez ptaszków */}
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              "zadłużenie stale rośnie,",
              "nie jesteś w stanie regulować wymagalnych zobowiązań,",
              "spłacasz jedne zobowiązania kolejnymi pożyczkami,",
              "prowadzona jest przeciwko Tobie egzekucja komornicza,",
              "wysokość miesięcznych rat przekracza Twoje możliwości finansowe,",
              "Twoja sytuacja finansowa od dłuższego czasu się pogarsza.",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border-l-4 border-l-green border-y border-r border-black/5 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-medium text-navy text-sm sm:text-base leading-snug">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-display text-sm sm:text-base font-semibold text-green-contrast">
              Im wcześniej przeanalizujesz swoją sytuację, tym łatwiej może być
              znaleźć właściwe rozwiązanie.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 5: UPADŁOŚĆ KONSUMENTA A POMOC KANCELARII & UMORZENIE
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-navy text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Lewa kolumna: Pomoc kancelarii */}
            <div className="space-y-5">
              <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-green">
                <Building2 className="size-4" />
                Wsparcie profesjonalistów
              </p>
              <h2 className="font-display text-2xl font-bold leading-tight sm:text-4xl">
                Upadłość konsumenta a pomoc kancelarii
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Osoby wpisujące w wyszukiwarkę hasło „upadłość konsumenta”
                często szukają odpowiedzi na pytanie, czy powinny przeprowadzić
                całe postępowanie samodzielnie, czy skorzystać z pomocy
                specjalisty.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Przepisy dotyczące upadłości konsumenckiej są rozbudowane, a
                każda sprawa może wyglądać inaczej. Z tego powodu konsultacja z
                osobą mającą wiedzę i doświadczenie w sprawach upadłości
                konsumenckiej może pomóc uporządkować informacje i określić
                możliwe rozwiązania.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Biuro / Kancelaria może również pomóc w przygotowaniu
                dokumentów, analizie sytuacji dłużnika oraz wspomóc w
                odpowiednim przedstawieniu jego sytuacji w toku postępowania.
              </p>

              {/* Box wizytówki */}
              <div className="rounded-2xl border border-green/40 bg-white/5 p-5 backdrop-blur-md">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-green sm:text-base">
                  <MapPin className="size-4" />
                  Kancelaria w Chorzowie
                </p>
                <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                  Kancelaria{" "}
                  <Link
                    href="/"
                    className="text-green font-semibold hover:underline"
                  >
                    www.upadlosckonsumenckachorzow.pl
                  </Link>{" "}
                  Chorzów, ul. Hajducka 4 to miejsce gdzie warto się udać i w
                  atmosferze zrozumienia i zaufania omówić swoją sytuację.
                </p>
              </div>
            </div>

            {/* Prawa kolumna: Czy upadłość oznacza umorzenie */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-md space-y-5">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green/20 text-green">
                <HelpCircle className="size-6" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Czy upadłość konsumencka oznacza umorzenie wszystkich długów?
              </h3>

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-green">
                To jedno z najważniejszych pytań, które pojawiają się przed
                rozpoczęciem postępowania.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Upadłość konsumencka jest procedurą oddłużeniową, ale nie należy
                utożsamiać jej automatycznie z natychmiastowym umorzeniem
                wszystkich zobowiązań. Ostateczne skutki postępowania zależą od
                konkretnej sprawy i decyzji podejmowanych w jego toku.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-white/70">
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
      <section className="py-12 sm:py-20 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              <FileCheck2 className="size-4 text-green" />
              Pierwsze kroki
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Jak przygotować się do upadłości konsumenckiej?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/75 leading-relaxed">
              Pierwszym krokiem powinno być zebranie wszystkich informacji
              dotyczących zadłużenia. Nie warto pomijać żadnego wierzyciela ani
              zobowiązania.
            </p>
            <p className="mt-1 text-sm sm:text-base font-semibold text-navy">
              Dobrym rozwiązaniem jest przygotowanie listy zawierającej:
            </p>
          </div>

          {/* Schemat wizualny */}
          <div className="grid gap-3 sm:grid-cols-5 max-w-5xl mx-auto">
            {preparationSteps.map((step, idx) => (
              <div
                key={step.label}
                className="relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-4 sm:p-5 shadow-xs transition-all hover:scale-105 hover:border-green hover:shadow-md text-center sm:text-left"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold text-green uppercase tracking-wider mb-1">
                    Krok 0{idx + 1}
                  </span>
                  <p className="font-display text-sm sm:text-base font-bold text-navy">
                    {step.label}
                  </p>
                </div>
                <p className="mt-2 text-xs text-ink/65 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center space-y-3 text-sm sm:text-base text-ink/80">
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
          SEKCJA 7: PODSUMOWANIE + POPRAWIONY BOKS CTA (Przyciski w 1 linii)
      ========================================================================== */}
      <section className="py-12 sm:py-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-12 backdrop-blur-md shadow-2xl">
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-4xl text-green">
              Podsumowując
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/85">
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

            <div className="mt-8 rounded-2xl bg-green/15 border border-green/30 p-5 sm:p-6 text-white">
              <p className="text-sm sm:text-base leading-relaxed">
                Jeżeli szukasz pomocy, wsparcia, informacji zapraszamy
                serdecznie do naszej kancelarii, która znajduje się w Chorzowie
                przy ulicy Hajduckiej 4, możesz też do Nas zadzwonić pod numer{" "}
                <a
                  href={site.phone.href}
                  className="font-bold text-green hover:underline"
                >
                  516 516 246
                </a>{" "}
                lub wysłać formularz kontaktowy poprzez Naszą stronę{" "}
                <span className="font-semibold text-white">
                  www.upadlosckonsumenckachorzow.pl
                </span>
              </p>
            </div>

            {/* Przyciski i gwarancja */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3 text-center md:text-left">
                <ShieldCheck className="size-6 text-green shrink-0" />
                <span className="text-xs sm:text-sm text-white/70">
                  Konsultacja telefoniczna oraz wstępna analiza są w 100%
                  bezpłatne.
                </span>
              </div>

              {/* Przyciski w jednej linii (whitespace-nowrap) */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={site.phone.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-green-light hover:scale-105 whitespace-nowrap"
                >
                  <Phone className="size-4" />
                  {site.phone.display}
                </a>
                <Link
                  href="/#kontakt"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 whitespace-nowrap"
                >
                  Formularz kontaktowy
                  <ArrowUpRight className="size-4 text-green" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/60 hover:text-green transition-colors"
            >
              ← Wróć do strony głównej
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

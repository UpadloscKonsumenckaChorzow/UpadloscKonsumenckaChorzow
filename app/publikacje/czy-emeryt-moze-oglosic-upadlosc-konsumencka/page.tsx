import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Home,
  Info,
  Phone,
  Scale,
  Sparkles,
  Wallet,
  Layers,
  UserCheck,
} from "lucide-react";
import { site } from "@/content/site";
import {
  getPublication,
  publicationJsonLd,
  publicationMetadata,
} from "@/content/publications";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleHero } from "@/components/publications/ArticleHero";
import { InlineCta } from "@/components/publications/InlineCta";
import { RelatedPublications } from "@/components/publications/RelatedPublications";
import { FreeConsultationNote } from "@/components/publications/FreeConsultationNote";

// Metadane, daty i dane strukturalne pochodzą z content/publications.ts.
const pub = getPublication("czy-emeryt-moze-oglosic-upadlosc-konsumencka");

export const metadata: Metadata = publicationMetadata(pub);

const courtChecks = [
  "masz zadłużenie, którego nie jesteś w stanie spłacać na bieżąco z emerytury i innych dochodów,",
  "nie korzystałeś z oddłużenia w ostatnich 10 latach (wcześniejsze umorzenie długów zwykle blokuje kolejny wniosek),",
  "nie doprowadziłeś do niewypłacalności umyślnie lub przez rażące niedbalstwo – takie okoliczności nie muszą przekreślać wniosku, ale mogą wydłużyć plan spłaty.",
];

const variants = [
  {
    icon: Layers,
    title: "Likwidacja majątku i plan spłaty",
    text: "gdy emeryt ma majątek i jednocześnie jest w stanie spłacać raty.",
  },
  {
    icon: CalendarClock,
    title: "Sam plan spłaty",
    text: "gdy majątku brak, ale są regularne dochody.",
  },
  {
    icon: Sparkles,
    title: "Umorzenie długów bez planu spłaty",
    text: "w wyjątkowych sytuacjach, gdy dłużnik nie ma ani majątku, ani realnych możliwości spłaty.",
  },
];

export default function RetireePublicationPage() {
  return (
    <div className="min-h-screen bg-mint text-ink">
      <JsonLd data={publicationJsonLd(pub)} />

      <ArticleHero
        pub={pub}
        crumb="Upadłość emeryta"
        title="Czy emeryt może ogłosić upadłość konsumencką?"
        subtitle="Warunki i przebieg postępowania"
      >
        Długi nie wybierają wieku. Rosnące koszty życia, kredyty, chwilówki
        czy poręczenia za bliskich sprawiają, że coraz więcej seniorów ma
        kłopoty ze spłatą zobowiązań – a komornik zajmuje część emerytury.
        Wielu z nich zadaje sobie pytanie: czy emeryt może ogłosić upadłość?
        Odpowiedź brzmi: tak. W tym artykule wyjaśniamy, na jakich zasadach, co
        dzieje się z emeryturą i mieszkaniem oraz jak wygląda cała procedura.
      </ArticleHero>

      {/* =========================================================================
          SEKCJA 1: CZY WIEK TO PRZESZKODA?
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                <UserCheck className="size-3.5 sm:size-4 text-green" aria-hidden="true" />
                Wiek a upadłość
              </p>
              <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink sm:mt-2 sm:text-3xl">
                Czy wiek lub status emeryta to przeszkoda?
              </h2>
            </div>

            <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
              {/* Odpowiedź od razu – największym krojem na stronie. */}
              <p className="text-sm sm:text-base leading-relaxed text-ink/85">
                <strong className="block font-display text-4xl sm:text-6xl font-bold leading-none text-green-contrast mb-3 sm:mb-4">
                  Nie.
                </strong>
                Prawo upadłościowe nie wprowadza żadnych ograniczeń wiekowych.
                Upadłość konsumencka przysługuje każdej osobie fizycznej, która
                nie prowadzi działalności gospodarczej i jest niewypłacalna.
                Emeryt lub rencista spełnia ten pierwszy warunek z definicji, o
                ile nie prowadzi firmy. Jeśli prowadzisz jednoosobową
                działalność, ścieżka wygląda inaczej – warto wtedy omówić sprawę
                z doradcą restrukturyzacyjnym lub prawnikiem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 2: JAKIE WARUNKI TRZEBA SPEŁNIĆ?
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-green">
              <Scale className="size-3.5 sm:size-4" aria-hidden="true" />
              Przesłanki
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:mt-2 sm:text-3xl lg:text-4xl">
              Jakie warunki trzeba spełnić?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base font-medium">
              Najważniejszym warunkiem jest niewypłacalność. Oznacza ona trwałą
              utratę zdolności do wykonywania wymagalnych zobowiązań
              pieniężnych. Ustawa przewiduje domniemanie niewypłacalności, gdy
              opóźnienie w spłacie zobowiązań przekracza 3 miesiące.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-8 shadow-lg">
            <p className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">
              W praktyce sąd bada między innymi, czy:
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {courtChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 sm:gap-3 rounded-xl border border-white/5 bg-white/5 px-3.5 py-3 sm:px-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-green mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 sm:mt-6 border-t border-white/10 pt-3 sm:pt-4 text-center text-[13px] sm:text-sm font-semibold text-green-light">
              Wniosek może złożyć wyłącznie dłużnik, nie może tego zrobić
              wierzyciel.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 3: EMERYTURA + MIESZKANIE
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3.5 sm:gap-6 lg:grid-cols-2 lg:gap-8 items-stretch max-w-6xl mx-auto">
            <article className="flex h-full flex-col rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4 min-h-9 sm:min-h-11">
                <span className="inline-flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-green shadow-sm">
                  <Wallet className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-base sm:text-xl font-bold text-navy leading-snug">
                  Co z emeryturą po ogłoszeniu upadłości?
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-ink/80">
                <strong className="font-semibold text-green-contrast">
                  To najczęstsza obawa seniorów. Upadłość nie oznacza utraty
                  całej emerytury.
                </strong>{" "}
                Część świadczenia jest chroniona, a środki niezbędne na
                utrzymanie zostają przy upadłym. Zakres tego, co może trafić do
                wierzycieli, zależy od przepisów i od decyzji sądu; w praktyce
                wskazuje się, że syndyk lub plan spłaty obejmują jedynie część
                świadczenia, a nie jego całość. Dokładne kwoty warto
                zweryfikować przed złożeniem wniosku, ponieważ zmieniają się
                razem z wysokością najniższej emerytury i przepisami o
                egzekucji.
              </p>

              <p className="mt-4 sm:mt-6 rounded-xl bg-mint-dark/70 p-3.5 sm:p-4 text-[13px] sm:text-sm text-ink/85 border border-green/30 leading-relaxed">
                Po ogłoszeniu upadłości egzekucje komornicze co do zasady
                ulegają zawieszeniu, a sprawy prowadzi syndyk. Dla wielu
                emerytów to ulga: koniec z wieloma równoległymi zajęciami i
                telefonami od wierzycieli.
              </p>
            </article>

            <article className="flex h-full flex-col rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4 min-h-9 sm:min-h-11">
                <span className="inline-flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-green shadow-sm">
                  <Home className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-base sm:text-xl font-bold text-navy leading-snug">
                  Czy emeryt straci mieszkanie?
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-ink/80">
                <strong className="font-semibold text-green-contrast">
                  To zależy od sytuacji.
                </strong>{" "}
                Jeśli upadły jest właścicielem mieszkania lub domu, wchodzą one
                co do zasady w skład masy upadłości i syndyk może je sprzedać.
                Ustawa przewiduje jednak ochronę osoby, która traci lokal:
                upadłemu przysługują środki na zaspokojenie potrzeb
                mieszkaniowych, obliczane na podstawie czynszu najmu podobnego
                lokalu, za określony okres. Z masy wyłączone są również
                przedmioty codziennego użytku i niezbędne rzeczy osobiste.
              </p>

              <div className="mt-4 sm:mt-6 flex gap-2.5 rounded-xl bg-navy/5 p-3.5 sm:p-4 text-[13px] sm:text-sm text-navy border border-black/5 leading-relaxed">
                <Info className="size-4 sm:size-5 shrink-0 text-green-contrast mt-0.5" aria-hidden="true" />
                <p>
                  <strong className="font-bold">Ważne:</strong> jeśli
                  mieszkanie jest wspólne z małżonkiem, w grę wchodzi także
                  majątek wspólny, dlatego decyzję warto przedyskutować z
                  rodziną.
                </p>
              </div>
            </article>
          </div>

          <InlineCta
            className="mt-6 sm:mt-12"
            question="Martwisz się o swoją emeryturę lub mieszkanie?"
          />
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 4: PLAN SPŁATY CZY CAŁKOWITE ODDŁUŻENIE?
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-mint-dark/50 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-4 sm:mb-10">
            <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              <Scale className="size-3.5 sm:size-4 text-green" aria-hidden="true" />
              Decyzja sądu
            </p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight text-ink sm:mt-2 sm:text-3xl lg:text-4xl">
              Plan spłaty czy całkowite oddłużenie?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink/75">
              Sąd może wybrać jeden z trzech wariantów:
            </p>
          </div>

          <ul className="grid gap-2.5 sm:gap-4 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
            {variants.map(({ icon: Icon, title, text }, idx) => {
              // Trzeci wariant jest tym, o którym mowa niżej – wyróżniony.
              const highlighted = idx === 2;
              return (
                <li
                  key={title}
                  className={`flex h-full items-start gap-3 rounded-2xl sm:flex-col sm:gap-0 sm:rounded-3xl p-4 sm:p-6 shadow-sm ${
                    highlighted
                      ? "bg-navy text-white border border-navy"
                      : "bg-white border border-black/5"
                  }`}
                >
                  <span
                    className={`inline-flex size-9 shrink-0 sm:size-10 items-center justify-center rounded-xl ${
                      highlighted ? "bg-green/20 text-green" : "bg-navy text-green"
                    }`}
                  >
                    <Icon className="size-4 sm:size-5" aria-hidden="true" />
                  </span>
                  <p className={`sm:mt-3 text-sm sm:text-base leading-relaxed ${highlighted ? "text-white/85" : "text-ink/80"}`}>
                    <strong
                      className={`block font-display text-base sm:text-lg font-bold leading-snug mb-1.5 ${
                        highlighted ? "text-white" : "text-navy"
                      }`}
                    >
                      {title}
                    </strong>
                    <span className="sr-only"> – </span>
                    {text}
                  </p>
                </li>
              );
            })}
          </ul>

          <p className="mt-5 sm:mt-8 max-w-3xl mx-auto text-center text-sm sm:text-base leading-relaxed text-ink/85">
            <strong className="font-semibold text-navy">
              Trzeci wariant bywa stosowany właśnie wobec seniorów w trudnej
              sytuacji życiowej, np. z niską emeryturą, chorobami i brakiem
              szans na dodatkowy zarobek.
            </strong>{" "}
            Plan spłaty zazwyczaj trwa do 36 miesięcy, a w sytuacjach, gdy
            dłużnik przyczynił się do własnej niewypłacalności, może zostać
            wydłużony nawet do 84 miesięcy. Wysokość rat ustala sąd,
            uwzględniając koszty utrzymania dłużnika.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SEKCJA 5: PODSUMOWANIE + BOKS CTA
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-10 shadow-xl">
            <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl text-green">
              Podsumowanie
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">
              Emeryt może ogłosić upadłość konsumencką na takich samych
              zasadach jak osoba pracująca. Liczy się niewypłacalność i brak
              prowadzonej działalności gospodarczej, a nie wiek. W wielu
              przypadkach upadłość pozwala seniorom nie tylko zatrzymać
              komornika, ale też całkowicie lub częściowo pozbyć się długów.
              Przed podjęciem decyzji warto skonsultować się z prawnikiem,
              doradcą restrukturyzacyjnym lub skorzystać z bezpłatnej pomocy
              prawnej – każda sytuacja jest inna, a przepisy o upadłości
              konsumenckiej bywają zmieniane.
            </p>

            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl bg-green/15 border border-green/30 p-4 sm:p-5 text-white">
              <p className="text-sm sm:text-base leading-relaxed">
                Potrzebujesz pomocy przy złożeniu wniosku?{" "}
                <Link
                  href="/#kontakt"
                  className="font-bold text-green-light underline-offset-2 hover:underline"
                >
                  Napisz do nas
                </Link>{" "}
                lub zadzwoń:{" "}
                <a
                  href={site.phone.href}
                  className="font-bold text-white underline-offset-2 hover:underline"
                >
                  {site.phone.display}
                </a>
                . Zapraszamy także do biura:{" "}
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white underline-offset-2 hover:underline"
                >
                  ul. Hajducka 4, Chorzów
                  <span className="sr-only"> – wyznacz trasę, otwiera się w nowej karcie</span>
                </a>
                .
              </p>
            </div>

            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 border-t border-white/10 pt-4 sm:pt-6">
              <FreeConsultationNote className="sm:justify-start" />

              <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:w-auto sm:items-center sm:gap-2.5 shrink-0">
                <a
                  href={site.phone.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green px-3 sm:px-5 py-3 text-sm font-semibold text-navy-900 shadow-md transition-[background-color,transform] hover:bg-green-light hover:scale-105 whitespace-nowrap"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
                <Link
                  href="/#kontakt"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 sm:px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 whitespace-nowrap"
                >
                  <span className="sm:hidden">Formularz</span>
                  <span className="hidden sm:inline">Formularz kontaktowy</span>
                  <ArrowUpRight className="size-4 shrink-0 text-green" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs sm:text-[13px] leading-relaxed text-white/60 max-w-2xl mx-auto">
            Artykuł ma charakter informacyjny i nie stanowi porady prawnej.
            Przed złożeniem wniosku sprawdź aktualny stan prawny.
          </p>
        </div>
      </section>

      <RelatedPublications currentSlug={pub.slug} />
    </div>
  );
}

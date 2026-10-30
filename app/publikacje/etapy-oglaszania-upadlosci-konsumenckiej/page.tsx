import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarClock,
  ClipboardList,
  Flag,
  Hourglass,
  MapPin,
  Phone,
  Route,
  Sparkles,
  XCircle,
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
const pub = getPublication("etapy-oglaszania-upadlosci-konsumenckiej");

export const metadata: Metadata = publicationMetadata(pub);

const quickSteps = [
  "Sprawdź, czy jesteś niewypłacalny i czy spełniasz warunki ustawowe.",
  "Zbierz dokumenty: listę wierzycieli, spis majątku i dowody dochodów.",
  "Przygotuj wniosek i złóż go elektronicznie w Krajowym Rejestrze Zadłużonych (KRZ), w sądzie rejonowym właściwym dla miejsca zamieszkania.",
  "Opłać wniosek (30 zł) i odpowiadaj na ewentualne wezwania sądu do uzupełnienia braków.",
  "Po ogłoszeniu upadłości współpracuj z syndykiem i wykonuj postanowienia sądu.",
];

/** Lista punktowana wewnątrz etapu – zielone kropki zamiast numerów. */
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2.5 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm sm:text-base leading-relaxed text-ink/80">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-green" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Etap na osi czasu. Numer w kółku jest dekoracyjny (aria-hidden) – w nagłówku
 * zostaje pełne brzmienie "Etap 1. …", więc treść czyta się tak jak w artykule.
 */
function Stage({
  number,
  title,
  last = false,
  children,
}: {
  number: number;
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="relative pl-11 sm:pl-20">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 flex size-9 items-center justify-center rounded-xl font-display text-sm font-bold shadow-md ring-4 ring-mint sm:size-14 sm:rounded-2xl sm:text-lg ${
          last ? "bg-green text-navy-900" : "bg-navy text-green"
        }`}
      >
        {last ? <Flag className="size-4 sm:size-6" /> : number}
      </span>

      <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-8 shadow-sm">
        <h2 className="font-display text-lg font-bold leading-snug text-navy sm:text-2xl">
          <span className="block text-sm font-semibold text-green-contrast sm:text-base">
            Etap {number}.
          </span>{" "}
          {title}
        </h2>
        <div className="mt-2.5 space-y-2.5 text-sm sm:text-base leading-relaxed text-ink/80">
          {children}
        </div>
      </div>
    </li>
  );
}

const outcomes = [
  {
    icon: CalendarClock,
    title: "Plan spłaty",
    text: "dłużnik, który ma regularne dochody, spłaca część zobowiązań w ratach ustalonych przez sąd.",
    tone: "border-green/30 bg-mint",
  },
  {
    icon: Sparkles,
    title: "Umorzenie długów bez planu spłaty",
    text: "w wyjątkowych sytuacjach, gdy dłużnik nie ma majątku ani realnych możliwości spłaty (np. z powodu wieku, choroby lub bardzo niskiego dochodu).",
    tone: "border-green/30 bg-mint",
  },
  {
    icon: XCircle,
    title: "Odmowa umorzenia długów",
    text: "gdy dłużnik rażąco naruszał obowiązki lub działał nieuczciwie.",
    tone: "border-black/10 bg-navy/5",
  },
];

export default function StagesPublicationPage() {
  return (
    <div className="min-h-screen bg-mint text-ink">
      <JsonLd data={publicationJsonLd(pub)} />

      <ArticleHero
        pub={pub}
        crumb="Etapy upadłości"
        title="Etapy ogłaszania upadłości konsumenckiej"
        subtitle="– krok po kroku"
      >
        Upadłość konsumencka to szansa na nowy początek, ale dla wielu osób
        postępowanie sądowe brzmi tajemniczo i trudno przewidzieć, co będzie
        się działo po złożeniu wniosku. Wyjaśniamy, jak wygląda cała droga: od
        zebrania dokumentów, przez decyzję sądu i pracę syndyka, aż po
        umorzenie długów.
      </ArticleHero>

      {/* =========================================================================
          W SKRÓCIE: CO TRZEBA ZROBIĆ, ŻEBY OGŁOSIĆ UPADŁOŚĆ?
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-green/30 bg-mint-dark p-4 sm:p-6 shadow-sm mb-6 sm:mb-12 max-w-4xl mx-auto flex gap-3 sm:gap-4">
            <Hourglass className="size-5 sm:size-6 shrink-0 text-green-contrast mt-0.5" aria-hidden="true" />
            <p className="text-sm sm:text-base leading-relaxed text-ink/85">
              Pamiętaj, że czas trwania poszczególnych etapów zależy od sądu,
              obciążenia syndyka i od tego, czy w sprawie jest majątek do
              spieniężenia. Poniżej opisujemy typowy przebieg sprawy.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 text-center lg:text-left">
                <p className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  <ClipboardList className="size-3.5 sm:size-4 text-green" aria-hidden="true" />
                  W skrócie
                </p>
                <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink sm:mt-2 sm:text-3xl">
                  Co trzeba zrobić żeby ogłosić upadłość?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:mt-3 sm:text-base">
                  Aby ogłosić upadłość konsumencką, musisz być osobą fizyczną
                  niewypłacalną i nieprowadzącą działalności gospodarczej, a
                  następnie samodzielnie złożyć wniosek do sądu. W skrócie
                  wygląda to tak:
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-2 sm:p-3 shadow-sm divide-y divide-black/5">
                {quickSteps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4">
                    <span
                      aria-hidden="true"
                      className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-lg bg-green/15 font-display text-sm font-bold text-green-contrast"
                    >
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed text-ink/90 font-medium pt-0.5 sm:pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-center lg:text-left text-sm font-semibold text-green-contrast">
                Każdy z tych kroków opisujemy poniżej.
              </p>
            </div>
          </div>

          <InlineCta
            className="mt-6 sm:mt-12"
            question="Nie wiesz, czy jesteś niewypłacalny i spełniasz warunki?"
          />
        </div>
      </section>

      {/* =========================================================================
          OŚ CZASU: 9 ETAPÓW POSTĘPOWANIA
      ========================================================================== */}
      <section
        aria-label="Etapy postępowania"
        className="py-7 sm:py-16 bg-mint-dark/50 border-y border-black/5"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-navy mb-4 sm:mb-10">
            <Route className="size-3.5 sm:size-4 text-green" aria-hidden="true" />
            Przebieg postępowania
          </p>

          <div className="relative">
            {/* Pionowa linia łącząca etapy – od pierwszego do ostatniego. */}
            <div
              aria-hidden="true"
              className="absolute left-[1.0625rem] top-4 bottom-4 w-0.5 bg-linear-to-b from-navy/20 via-navy/20 to-green sm:left-[1.6875rem]"
            />

            <ol className="relative space-y-3 sm:space-y-6">
              <Stage number={1} title="Analiza sytuacji i decyzja o upadłości">
                <p className="font-medium text-ink/90">
                  Zanim złożysz wniosek, trzeba ocenić, czy upadłość w ogóle
                  jest właściwym rozwiązaniem. Podstawą jest niewypłacalność,
                  czyli trwała utrata zdolności do spłacania wymagalnych
                  zobowiązań. Ustawa przewiduje domniemanie niewypłacalności,
                  gdy opóźnienie w płatnościach przekracza 3 miesiące.
                </p>
                <div>
                  <p>Na tym etapie warto sprawdzić między innymi:</p>
                  <Bullets
                    items={[
                      "jakie masz zobowiązania i wobec kogo (banki, firmy pożyczkowe, dostawcy mediów, osoby prywatne),",
                      "czy nie prowadzisz działalności gospodarczej,",
                      "czy w ostatnich 10 latach nie miałeś już umorzonych długów w upadłości,",
                      "jaki masz majątek i z czego się utrzymujesz.",
                    ]}
                  />
                </div>
              </Stage>

              <Stage number={2} title="Zebranie dokumentów i przygotowanie wniosku">
                <div>
                  <p>Wniosek musi być kompletny i rzetelny. Potrzebne są między innymi:</p>
                  <Bullets
                    items={[
                      "lista wierzycieli wraz z kwotami zadłużenia i danymi adresowymi,",
                      "spis majątku (nieruchomości, pojazdy, oszczędności, wartościowe rzeczy),",
                      "dokumenty potwierdzające dochody, takie jak decyzja o wysokości emerytury, umowa o pracę czy zaświadczenia,",
                      "informacje o wydatkach i osobach pozostających na utrzymaniu,",
                      "opis przyczyn powstania zadłużenia.",
                    ]}
                  />
                </div>
                <p className="rounded-xl bg-mint p-3.5 text-[13px] sm:text-sm text-ink/80 border border-black/5">
                  Błędy lub braki formalne to jeden z najczęstszych powodów
                  wezwań sądu do uzupełnienia wniosku, a to wydłuża całe
                  postępowanie. Brak szczerości w opisie majątku lub zadłużenia
                  może natomiast negatywnie wpłynąć na decyzję sądu.
                </p>
              </Stage>

              <Stage number={3} title="Jak złożyć wniosek o upadłość konsumencką">
                <p>
                  Wniosek składa się do sądu rejonowego (wydział gospodarczy)
                  właściwego dla miejsca zamieszkania dłużnika. Obecnie robi się
                  to drogą elektroniczną, w Krajowym Rejestrze Zadłużonych (KRZ).
                  Opłata sądowa jest symboliczna i wynosi 30 zł.
                </p>
                <p className="font-semibold text-navy">
                  Wniosek może złożyć wyłącznie dłużnik. Wierzyciel nie może
                  wszcząć upadłości konsumenckiej wobec drugiej osoby.
                </p>
              </Stage>

              <Stage number={4} title="Postanowienie o ogłoszeniu upadłości">
                <p>
                  Sąd bada, czy wniosek jest poprawny i czy spełnione są
                  przesłanki upadłości. Jeśli tak, wydaje postanowienie o
                  ogłoszeniu upadłości i wyznacza syndyka. Od tego momentu
                  majątek dłużnika wchodzi co do zasady w skład masy upadłości,
                  a egzekucje komornicze ulegają zawieszeniu.
                </p>
                <p>
                  Jeśli wniosek ma braki, sąd wzywa do ich uzupełnienia. Gdy
                  przesłanki nie są spełnione, wniosek może zostać oddalony lub
                  odrzucony.
                </p>
              </Stage>

              <Stage number={5} title="Obwieszczenie i zgłaszanie wierzytelności">
                <p>
                  Ogłoszenie upadłości jest publikowane w rejestrze, a
                  wierzyciele dowiadują się o postępowaniu i mogą zgłaszać swoje
                  wierzytelności syndykowi. Zwykle mają na to 30 dni od
                  obwieszczenia. Syndyk sprawdza zgłoszone roszczenia i
                  sporządza listę wierzytelności.
                </p>
              </Stage>

              <Stage number={6} title="Praca syndyka i likwidacja majątku">
                <p>
                  Syndyk przejmuje majątek upadłego, sporządza jego spis i
                  ocenia wartość poszczególnych składników. Jeżeli w masie
                  upadłości jest majątek, który można spieniężyć (nieruchomość,
                  samochód, wartościowe przedmioty), syndyk go sprzedaje, a
                  uzyskane środki rozdziela wierzycielom według planu podziału.
                </p>
                <p>
                  W tym czasie upadły ma obowiązek współpracować: wydać majątek,
                  udzielać wyjaśnień i informować o zmianach swojej sytuacji. Z
                  masy wyłączone są jednak między innymi przedmioty codziennego
                  użytku i część dochodów niezbędna do utrzymania. Osobie, która
                  traci mieszkanie, przysługują też środki na zaspokojenie
                  potrzeb mieszkaniowych.
                </p>
              </Stage>

              <Stage number={7} title="Plan spłaty wierzycieli lub umorzenie bez planu">
                <p>
                  Po zakończeniu likwidacji (a gdy majątku brak, od razu) sąd
                  decyduje o dalszych krokach. Możliwe są trzy rozwiązania:
                </p>
                <ul className="grid gap-2.5">
                  {outcomes.map(({ icon: Icon, title, text, tone }) => (
                    <li key={title} className={`flex items-start gap-3 rounded-xl border p-3.5 sm:p-4 ${tone}`}>
                      <Icon className="size-5 shrink-0 text-green-contrast mt-0.5" aria-hidden="true" />
                      <p className="text-[13px] sm:text-sm leading-relaxed text-ink/80">
                        <strong className="block font-display text-sm sm:text-base font-bold text-navy mb-0.5">
                          {title}
                        </strong>
                        <span className="sr-only"> – </span>
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
                <p>
                  Plan spłaty zazwyczaj trwa do 36 miesięcy, a gdy dłużnik
                  przyczynił się do własnej niewypłacalności, może zostać
                  wydłużony do 84 miesięcy. Wysokość rat sąd dostosowuje do
                  dochodów i kosztów utrzymania dłużnika.
                </p>
              </Stage>

              <Stage number={8} title="Wykonanie planu spłaty">
                <p>
                  W trakcie realizacji planu najważniejsza jest regularność
                  wpłat i uczciwość wobec sądu. Jeśli sytuacja finansowa się
                  zmieni, na przykład dochody wzrosną albo drastycznie spadną,
                  można zwrócić się o zmianę planu. Niewykonywanie planu bez
                  uzasadnienia może skutkować jego uchyleniem i utratą szansy na
                  umorzenie długów.
                </p>
              </Stage>

              <Stage number={9} title="Umorzenie zobowiązań i zakończenie postępowania" last>
                <p>
                  Po wykonaniu planu spłaty sąd wydaje postanowienie o
                  umorzeniu pozostałych zobowiązań. Dług, który został umorzony,
                  przestaje istnieć, a wierzyciele nie mogą go już dochodzić.
                  Wyjątkiem są zobowiązania, które z mocy ustawy nie podlegają
                  umorzeniu, takie jak alimenty, renty odszkodowawcze za
                  wyrządzoną szkodę na osobie czy grzywny i kary orzeczone w
                  postępowaniach karnych lub administracyjnych.
                </p>
              </Stage>
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ILE CZASU TRWA POSTĘPOWANIE?
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-mint">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-10 shadow-sm">
            <h2 className="font-display text-xl font-bold leading-tight text-ink sm:text-3xl text-center">
              Ile czasu trwa ogłoszenie upadłości konsumenckiej?
            </h2>

            {/* Skala: od najkrótszego do najdłuższego przebiegu. */}
            <div aria-hidden="true" className="mt-5 sm:mt-8">
              <div className="h-2 rounded-full bg-linear-to-r from-green via-green/50 to-navy" />
              <div className="mt-2 flex justify-between gap-4 text-xs sm:text-sm font-semibold">
                <span className="text-green-contrast">kilkanaście miesięcy</span>
                <span className="text-navy text-right">kilka lat</span>
              </div>
            </div>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-ink/80 text-center max-w-3xl mx-auto">
              Całe postępowanie trwa zwykle od kilkunastu miesięcy do kilku lat.
              Najkrócej, gdy dłużnik nie ma majątku i sąd umarza długi bez planu
              spłaty, najdłużej, gdy konieczna jest sprzedaż nieruchomości, a
              następnie wykonanie planu spłaty.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          POMOC PRZY WNIOSKU + BOKS CTA
      ========================================================================== */}
      <section className="py-7 sm:py-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-10 shadow-xl">
            <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl text-green">
              Potrzebujesz pomocy przy złożeniu i przygotowaniu wniosku?
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">
              Dobrze przygotowany wniosek to większa szansa na sprawny przebieg
              postępowania i mniej wezwań z sądu do uzupełnienia braków. Jeśli
              chcesz pomocy przy złożeniu i przygotowaniu wniosku o upadłość
              konsumencką, skontaktuj się z nami:
            </p>

            <ul className="mt-4 sm:mt-6 grid gap-2.5 sm:grid-cols-2">
              <li>
                <a
                  href={site.phone.href}
                  className="flex h-full items-center gap-3 rounded-xl sm:rounded-2xl border border-green/30 bg-green/15 p-4 transition-colors hover:bg-green/25"
                >
                  <Phone className="size-5 text-green shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base">
                    telefon: <strong className="font-bold">{site.phone.display}</strong>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full items-center gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <MapPin className="size-5 text-green shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base">
                    biuro: <strong className="font-bold">ul. Hajducka 4, Chorzów</strong>
                    <span className="sr-only"> – wyznacz trasę, otwiera się w nowej karcie</span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
              Chętnie przeanalizujemy Twoją sytuację i podpowiemy, jakie kroki
              podjąć.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 border-t border-white/10 pt-4 sm:pt-6">
              <FreeConsultationNote className="sm:justify-start" />
              <Link
                href="/#kontakt"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 whitespace-nowrap"
              >
                Formularz kontaktowy
                <ArrowUpRight className="size-4 text-green" aria-hidden="true" />
              </Link>
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

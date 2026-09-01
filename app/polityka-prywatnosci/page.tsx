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

const spisTresci = [
  "Postanowienia ogólne",
  "Cel i zakres zbierania danych",
  "Podstawa prawna przetwarzania danych",
  "Odbiorcy danych i podmioty przetwarzające",
  "Okres przechowywania danych",
  "Przekazywanie danych poza EOG",
  "Prawo kontroli, dostępu do treści swoich danych oraz ich poprawiania",
  "Pliki cookies",
  "Postanowienia końcowe",
];

/**
 * Wiersze bloku identyfikacyjnego. Pola nieuzupełnione w site.company
 * są pomijane, żeby w polityce nie zostawały puste myślniki.
 */
function daneIdentyfikacyjne() {
  return [
    { label: "Firma przedsiębiorcy", value: site.company.name },
    { label: "Adres wykonywania działalności", value: site.address.full },
    { label: "NIP", value: site.company.nip },
    { label: "REGON", value: site.company.regon },
    { label: "Rejestr", value: site.company.registry },
    { label: "Kapitał zakładowy", value: site.company.shareCapital },
    { label: "E-mail", value: site.email.display },
    { label: "Telefon", value: site.phone.display },
    { label: "Adres do doręczeń", value: site.address.full },
  ].filter((row) => row.value.length > 0);
}

function Section({
  numer,
  tytul,
  children,
}: {
  numer: number;
  tytul: string;
  children: React.ReactNode;
}) {
  return (
    <section id={`sekcja-${numer}`} className="scroll-mt-24">
      <h2 className="font-display text-xl font-bold text-navy border-b border-black/10 pb-3">
        {numer}. {tytul}
      </h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

function Punkt({ nr, children }: { nr: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="font-semibold text-navy">{nr}</span> {children}
    </p>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-mint min-h-screen py-12 sm:py-16 text-ink">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green-contrast transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Wróć do strony głównej
        </Link>

        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-white shadow-xl mb-12 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green">
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
          <nav
            aria-label="Spis treści"
            className="rounded-2xl bg-mint p-5 border border-black/5"
          >
            <p className="font-display font-bold text-navy">Spis treści</p>
            <ol className="mt-3 space-y-1.5 list-decimal pl-5 marker:text-navy marker:font-semibold">
              {spisTresci.map((pozycja, i) => (
                <li key={pozycja}>
                  <a
                    href={`#sekcja-${i + 1}`}
                    className="hover:text-green-contrast transition-colors"
                  >
                    {pozycja}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Section numer={1} tytul="Postanowienia ogólne">
            <Punkt nr="1.1.">
              Administratorem danych osobowych zbieranych za pośrednictwem tej
              strony internetowej jest przedsiębiorca prowadzący działalność pod
              marką <strong>Upadłość Konsumencka Chorzów &amp; Śląsk</strong>{" "}
              (część Grupy Expert Partner), zwany dalej Administratorem.
            </Punkt>
            <div className="rounded-2xl bg-mint p-5 border border-black/5">
              <p className="font-display font-bold text-navy">
                Dane identyfikacyjne przedsiębiorcy
              </p>
              <dl className="mt-3 space-y-2 text-ink/90">
                {daneIdentyfikacyjne().map(({ label, value }) => (
                  <div key={label} className="sm:flex sm:gap-2">
                    <dt className="font-semibold text-navy sm:w-52 sm:shrink-0">
                      {label}:
                    </dt>
                    <dd className="break-words">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Punkt nr="1.2.">
              Dane osobowe przetwarzamy zgodnie z rozporządzeniem Parlamentu
              Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. (RODO),
              ustawą o ochronie danych osobowych z 10 maja 2018 r., ustawą o
              świadczeniu usług drogą elektroniczną z 18 lipca 2002 r. oraz art.
              173 ustawy Prawo telekomunikacyjne w zakresie plików cookies.
            </Punkt>
            <Punkt nr="1.3.">
              Administrator dokłada szczególnej staranności, aby zbierane dane
              były przetwarzane zgodnie z prawem, gromadzone wyłącznie w
              konkretnych i uzasadnionych celach, adekwatne do tych celów oraz
              przechowywane w formie pozwalającej na identyfikację osoby nie
              dłużej, niż jest to niezbędne.
            </Punkt>
            <Punkt nr="1.4.">
              Podanie danych jest dobrowolne, ale niezbędne do udzielenia
              odpowiedzi na zapytanie i przeprowadzenia bezpłatnej analizy
              sprawy.
            </Punkt>
          </Section>

          <Section numer={2} tytul="Cel i zakres zbierania danych">
            <Punkt nr="2.1.">
              Dane zbierane przez Administratora służą do kontaktu z osobą
              zainteresowaną, przeprowadzenia bezpłatnej analizy sytuacji
              zadłużenia, a następnie do przygotowania i realizacji umowy o
              pomoc prawną.
            </Punkt>
            <Punkt nr="2.2.">
              Administrator przetwarza następujące dane podane w formularzu
              kontaktowym lub przekazane telefonicznie:
            </Punkt>
            <ul className="space-y-1.5 list-disc pl-5 text-ink/90">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu,</li>
              <li>
                treść wiadomości oraz informacje o sytuacji finansowej, które
                osoba zainteresowana zdecyduje się przekazać.
              </li>
            </ul>
            <Punkt nr="2.3.">
              Administrator może przetwarzać dane eksploatacyjne, czyli
              informacje o sposobie korzystania ze strony: adres IP w formie
              skróconej, typ i wersję przeglądarki, system operacyjny, typ
              urządzenia, źródło wejścia na stronę, odwiedzone podstrony oraz
              czas wizyty. Dane te zbieramy w formie zagregowanej i nie służą
              one identyfikacji konkretnej osoby.
            </Punkt>
            <Punkt nr="2.4.">
              W ramach prowadzenia sprawy upadłościowej możemy przetwarzać także
              dane szczególnych kategorii (np. informacje o stanie zdrowia
              wpływające na sytuację majątkową), jeżeli osoba zainteresowana
              sama je przekaże i jest to niezbędne do ustalenia lub dochodzenia
              jej roszczeń.
            </Punkt>
          </Section>

          <Section numer={3} tytul="Podstawa prawna przetwarzania danych">
            <p>
              Każda operacja na danych ma przypisaną podstawę prawną wynikającą
              z RODO:
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  a) Kontakt i bezpłatna analiza sprawy (formularz / telefon)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO (działania przed
                  zawarciem umowy na żądanie osoby, której dane dotyczą) oraz
                  art. 6 ust. 1 lit. a RODO (zgoda).
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  b) Przygotowanie i realizacja umowy o pomoc prawną
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. b RODO oraz art. 9 ust. 2
                  lit. f RODO w zakresie danych szczególnych kategorii.
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  c) Obowiązki księgowe i podatkowe
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. c RODO – wykonanie
                  obowiązku prawnego ciążącego na Administratorze.
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  d) Statystyka i analityka strony (Google Analytics)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. a RODO – skrypt uruchamia
                  się wyłącznie po wyrażeniu zgody w banerze cookies.
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  e) Wyświetlenie mapy dojazdu (Google Maps)
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. a RODO – mapa ładuje się
                  wyłącznie po kliknięciu przycisku zgody.
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 border border-black/5">
                <p className="font-semibold text-navy">
                  f) Ustalenie i dochodzenie roszczeń oraz bezpieczeństwo strony
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Podstawa prawna: art. 6 ust. 1 lit. f RODO – prawnie
                  uzasadniony interes Administratora.
                </p>
              </div>
            </div>
          </Section>

          <Section numer={4} tytul="Odbiorcy danych i podmioty przetwarzające">
            <Punkt nr="4.1.">
              Administrator nie sprzedaje danych osobowych i nie udostępnia ich
              w celach marketingowych podmiotom trzecim.
            </Punkt>
            <Punkt nr="4.2.">
              Dane mogą być powierzone wyłącznie zaufanym dostawcom usług,
              którzy przetwarzają je na podstawie umowy powierzenia i wyłącznie
              na polecenie Administratora:
            </Punkt>
            <div className="space-y-3">
              <div className="rounded-2xl border border-black/5 bg-mint p-4">
                <p className="font-semibold text-navy">
                  Resend – obsługa formularza kontaktowego
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Wiadomości wysłane przez formularz są dostarczane do naszej
                  skrzynki za pośrednictwem usługi Resend (Resend, Inc., Stany
                  Zjednoczone). Dostawca przetwarza treść wiadomości oraz dane
                  kontaktowe wyłącznie w celu jej dostarczenia oraz
                  zabezpieczenia przed spamem.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-mint p-4">
                <p className="font-semibold text-navy">
                  Google Analytics – statystyka odwiedzin
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Usługę świadczy Google Ireland Limited. Statystyki zbieramy z
                  włączoną anonimizacją adresu IP i wyłączonym udostępnianiem
                  danych do celów reklamowych. Skrypt nie uruchamia się bez
                  zgody użytkownika.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-mint p-4">
                <p className="font-semibold text-navy">
                  Google Maps – mapa dojazdu
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Mapa jest osadzana dopiero po kliknięciu przycisku zgody. Do
                  tego momentu Google nie otrzymuje żadnych informacji o
                  wizycie.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-mint p-4">
                <p className="font-semibold text-navy">
                  Cloudflare – hosting, CDN i ochrona strony
                </p>
                <p className="text-xs sm:text-sm mt-1 text-ink/70">
                  Strona jest utrzymywana i dostarczana za pośrednictwem
                  infrastruktury Cloudflare, Inc. Dostawca przetwarza dane
                  techniczne niezbędne do wyświetlenia strony oraz do jej
                  zabezpieczenia: adres IP, nagłówki zapytania, typ przeglądarki
                  i urządzenia. Służy to przyspieszeniu ładowania treści oraz
                  ochronie przed atakami DDoS i ruchem automatycznym.
                </p>
              </div>
            </div>
            <Punkt nr="4.3.">
              Dane mogą zostać udostępnione również podmiotom uprawnionym na
              podstawie przepisów prawa, w szczególności sądom, syndykom oraz
              organom administracji, jeżeli jest to niezbędne do prowadzenia
              sprawy.
            </Punkt>
          </Section>

          <Section numer={5} tytul="Okres przechowywania danych">
            <ul className="space-y-1.5 list-disc pl-5 text-ink/90">
              <li>
                dane z zapytań, które nie zakończyły się podpisaniem umowy –
                przez 12 miesięcy od ostatniego kontaktu,
              </li>
              <li>
                dane klientów – przez czas trwania umowy, a po jej zakończeniu
                przez okres przedawnienia roszczeń,
              </li>
              <li>
                dokumentacja księgowa – przez 5 lat licząc od końca roku
                podatkowego,
              </li>
              <li>
                dane analityczne – nie dłużej niż 14 miesięcy od ostatniej
                aktywności użytkownika,
              </li>
              <li>
                dane przetwarzane na podstawie zgody – do czasu jej cofnięcia.
              </li>
            </ul>
          </Section>

          <Section numer={6} tytul="Przekazywanie danych poza EOG">
            <Punkt nr="6.1.">
              Korzystanie z usług Cloudflare, Resend oraz Google może wiązać się
              z przekazaniem danych do państw spoza Europejskiego Obszaru
              Gospodarczego, w szczególności do Stanów Zjednoczonych.
            </Punkt>
            <Punkt nr="6.2.">
              Transfer odbywa się na podstawie standardowych klauzul umownych
              zatwierdzonych przez Komisję Europejską lub decyzji o odpowiednim
              stopniu ochrony (Data Privacy Framework), wraz z dodatkowymi
              zabezpieczeniami technicznymi stosowanymi przez dostawców.
            </Punkt>
          </Section>

          <Section
            numer={7}
            tytul="Prawo kontroli, dostępu do treści swoich danych oraz ich poprawiania"
          >
            <Punkt nr="7.1.">
              Każdej osobie, której dane dotyczą, przysługują następujące
              uprawnienia:
            </Punkt>
            <ul className="space-y-1.5 list-disc pl-5 text-ink/90">
              <li>prawo dostępu do treści swoich danych oraz ich kopii,</li>
              <li>
                prawo do sprostowania, usunięcia lub ograniczenia przetwarzania,
              </li>
              <li>prawo do przenoszenia danych,</li>
              <li>
                prawo do sprzeciwu wobec przetwarzania opartego na prawnie
                uzasadnionym interesie,
              </li>
              <li>
                prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na
                zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,
              </li>
              <li>
                prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                Osobowych (ul. Stawki 2, 00-193 Warszawa).
              </li>
            </ul>
            <Punkt nr="7.2.">
              Aby skorzystać z powyższych uprawnień, wystarczy wysłać wiadomość
              na adres{" "}
              <strong className="break-words">{site.email.display}</strong> lub
              napisać na adres korespondencyjny Administratora. Odpowiadamy bez
              zbędnej zwłoki, nie później niż w ciągu miesiąca.
            </Punkt>
            <Punkt nr="7.3.">
              Dane nie są wykorzystywane do zautomatyzowanego podejmowania
              decyzji ani do profilowania wywołującego skutki prawne.
            </Punkt>
          </Section>

          <Section numer={8} tytul="Pliki cookies">
            <Punkt nr="8.1.">
              Strona używa plików cookies, czyli niewielkich plików tekstowych
              zapisywanych na urządzeniu użytkownika. Cookies inne niż niezbędne
              instalowane są wyłącznie po wyrażeniu zgody w banerze; samo dalsze
              przeglądanie strony nie oznacza zgody.
            </Punkt>
            <Punkt nr="8.2.">
              Stosujemy następujące rodzaje plików cookies:
            </Punkt>
            <ul className="space-y-2 list-disc pl-5 text-ink/90">
              <li>
                <strong>Niezbędne</strong> – zapewniają podstawowe działanie
                strony i zapamiętują decyzję podjętą w banerze cookies. Nie
                wymagają zgody.
              </li>
              <li>
                <strong>Sesyjne</strong> – pliki tymczasowe, usuwane
                automatycznie po zamknięciu przeglądarki lub opuszczeniu strony.
              </li>
              <li>
                <strong>Stałe</strong> – przechowywane przez czas określony w
                parametrach pliku albo do momentu ich samodzielnego usunięcia
                przez użytkownika.
              </li>
              <li>
                <strong>Analityczne</strong> – pozwalają zrozumieć, w jaki
                sposób odwiedzający korzystają ze strony: z jakiego źródła
                trafili, które podstrony oglądają i jak długo. Służą wyłącznie
                do statystyk zbiorczych i nie identyfikują konkretnej osoby.
              </li>
            </ul>
            <Punkt nr="8.3.">
              Do plików niezbędnych należą również cookies bezpieczeństwa
              ustawiane przez Cloudflare, między innymi{" "}
              <code className="rounded bg-mint px-1.5 py-0.5 text-xs">
                __cf_bm
              </code>{" "}
              (odróżnia ruch ludzki od automatycznego, przechowywany około 30
              minut) oraz{" "}
              <code className="rounded bg-mint px-1.5 py-0.5 text-xs">
                cf_clearance
              </code>{" "}
              (zapamiętuje przejście weryfikacji zabezpieczeń). Nie służą one
              analityce ani reklamie i nie wymagają zgody.
            </Punkt>
            <Punkt nr="8.4.">
              W ramach Google Analytics 4 wykorzystywane są między innymi pliki{" "}
              <code className="rounded bg-mint px-1.5 py-0.5 text-xs">_ga</code>{" "}
              oraz{" "}
              <code className="rounded bg-mint px-1.5 py-0.5 text-xs">
                _ga_*
              </code>
              , które rozróżniają użytkowników i sesje. Standardowy czas ich
              przechowywania to 24 miesiące, a zebrane dane usuwamy po 14
              miesiącach.
            </Punkt>
            <Punkt nr="8.5.">
              Zgodę można w każdej chwili zmienić lub cofnąć w ustawieniach
              cookies dostępnych na stronie. Ustawieniami plików cookies można
              też zarządzać w przeglądarce – w tym blokować je w całości lub
              usuwać już zapisane. Wyłączenie plików niezbędnych może utrudnić
              korzystanie ze strony.
            </Punkt>
          </Section>

          <Section numer={9} tytul="Postanowienia końcowe">
            <Punkt nr="9.1.">
              Administrator stosuje środki techniczne i organizacyjne
              odpowiadające zagrożeniom oraz kategoriom chronionych danych, w
              szczególności zabezpiecza je przed dostępem osób nieupoważnionych,
              utratą, uszkodzeniem, zniszczeniem oraz przetwarzaniem niezgodnym
              z prawem.
            </Punkt>
            <Punkt nr="9.2.">
              Transmisja danych między przeglądarką a serwerem jest szyfrowana
              protokołem SSL/TLS, a dostęp do danych mają wyłącznie osoby
              upoważnione, zobowiązane do zachowania poufności.
            </Punkt>
            <Punkt nr="9.3.">
              Strona może zawierać odnośniki do serwisów zewnętrznych.
              Administrator nie odpowiada za zasady prywatności obowiązujące na
              tych stronach.
            </Punkt>
            <Punkt nr="9.4.">
              Polityka może być aktualizowana, w szczególności w związku ze
              zmianą przepisów lub zakresu wykorzystywanych narzędzi. Aktualna
              wersja jest zawsze publikowana pod tym adresem wraz z datą
              ostatniej aktualizacji.
            </Punkt>
            <Punkt nr="9.5.">
              W sprawach nieuregulowanych stosuje się przepisy RODO oraz
              powszechnie obowiązujące prawo polskie.
            </Punkt>
          </Section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md"
          >
            <ArrowLeft className="size-4 text-green" />
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </main>
  );
}

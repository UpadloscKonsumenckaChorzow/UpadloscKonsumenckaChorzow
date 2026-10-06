/**
 * Jedno źródło prawdy dla danych firmy. Zmiana tutaj aktualizuje treść
 * strony, stopkę, politykę prywatności, dane strukturalne (JSON-LD),
 * manifest aplikacji i maile z formularza.
 */

// Adres trzymamy w jednej zmiennej, żeby dało się z niego zbudować
// linki do Google Maps bez ręcznego przepisywania ulicy w kilku miejscach.
const ADDRESS_FULL = "ul. Hajducka 4, 41-500 Chorzów";

export const site = {
  name: "Upadłość Konsumencka Chorzów & Śląsk",
  shortName: "Upadłość Chorzów",
  description:
    "Kancelaria Prawa Upadłościowego - skuteczna pomoc w oddłużaniu osób fizycznych na terenie Śląska.",
  // Nazwa prawna zgodna z wpisem w CEIDG – używana w JSON-LD i dokumentach.
  // Nie mylić z "name", które jest marką handlową widoczną na stronie.
  legalName: "Katarzyna Szczepańska",

  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.upadlosckonsumenckachorzow.pl"
  ).replace(/\/+$/, ""),

  // Kolory marki – te same co w logo. Używane w manifeście i meta theme-color.
  // Kolory używane w manifeście aplikacji i meta theme-color.
  colors: {
    theme: "#0f172a",
    background: "#f0fdf4",
  },

  // Dane identyfikacyjne przedsiębiorcy – nazwa, NIP i REGON.
  company: {
    // "Firma przedsiębiorcy" w rozumieniu art. 43(2) Kodeksu cywilnego.
    // We wpisie CEIDG nie ma nazwy handlowej, więc firmą jest imię i nazwisko.
    // "Upadłość Konsumencka Chorzów & Śląsk" pozostaje wyłącznie marką.
    name: "Katarzyna Szczepańska",
    nip: "6292438840",
    regon: "545540421",
  },

  phone: {
    href: "tel:+48516516246",
    display: "516 516 246",
    schema: "+48516516246",
  },

  email: {
    href: "mailto:kontakt@upadlosckonsumenckachorzow.pl",
    display: "kontakt@upadlosckonsumenckachorzow.pl",
  },

  address: {
    street: "ul. Hajducka 4",
    postalCode: "41-500",
    city: "Chorzów",
    region: "Śląskie",
    regionCode: "PL-SL",
    country: "PL",
    full: ADDRESS_FULL,
  },

  // Współrzędne budynku przy Hajduckiej 4 (JSON-LD → geo).
  geo: {
    lat: 50.2908213,
    lng: 18.9460476,
  },

  maps: {
    // Osadzenie mapy bez klucza API. "hl=pl" wymusza polskie etykiety.
    embed: `https://maps.google.com/maps?q=${encodeURIComponent(
      ADDRESS_FULL,
    )}&z=17&hl=pl&output=embed`,
    // "Wyznacz trasę" – na telefonie otwiera aplikację Map.
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      ADDRESS_FULL,
    )}`,
  },

  hours: {
    // Wersja "do wyświetlenia" i "do Schema.org" (format 24h "09:00"),
    // żeby godziny na stronie i w danych dla Google nigdy się nie rozjechały.
    weekday: {
      display: "9:00 – 16:00",
      opens: "09:00",
      closes: "16:00",
    },
    weekend: {
      display: "Zamknięte",
    },
  },

  price: {
    // Cena "od" – ta sama liczba trafia do cennika i do danych strukturalnych.
    from: 2900,
    currency: "PLN",
  },

  updated: {
    home: "2026-10-05",
    publikacje: "2026-09-14",
    politykaPrywatnosci: "2026-09-14",
  },

  // Data pierwszej publikacji artykułu – nie zmienia się.
  published: {
    publikacje: "2026-09-08",
  },

  partner: {
    name: "Grupa Expert Partner",
    url: "https://upadlosci-ekspert.pl/",
  },

  socials: {
    instagram: "",
    tiktok: "",
    facebook: "https://www.facebook.com/profile.php?id=61594187752540",
  },

  developer: {
    name: "Filip Wrona",
    url: "https://www.instagram.com/filip_wrona/",
  },
} as const;

/**
 * Sekcje strony głównej. Wspólne dla menu, stopki i podświetlania
 * aktywnej sekcji – id sekcji i etykieta zmieniają się w jednym miejscu.
 */
export const sections = [
  { id: "dla-kogo", label: "Dla kogo" },
  { id: "jak-to-dziala", label: "Jak to działa" },
  { id: "cennik", label: "Cennik" },
  { id: "dlaczego-my", label: "Dlaczego my" },
  { id: "faq", label: "FAQ / Pytania" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/**
 * Sprawdza, czy data ma format "RRRR-MM-DD" i czy w ogóle istnieje.
 * Literówka zatrzymuje budowanie strony z czytelnym komunikatem.
 */
function parseDate(isoDate: string): Date {
  const date = new Date(`${isoDate}T12:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate) || Number.isNaN(date.getTime())) {
    throw new Error(
      `Nieprawidłowa data w content/site.ts: "${isoDate}". Oczekiwany format to RRRR-MM-DD, np. 2026-09-14.`,
    );
  }
  return date;
}

/** "2026-09-14" → "14 września 2026 r." – do pokazania na stronie. */
export function formatPlDate(isoDate: string): string {
  const formatted = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw",
  }).format(parseDate(isoDate));
  return `${formatted} r.`;
}

/** "2026-09-14" → "2026-09-14T10:00:00Z" – znacznik czasu dla JSON-LD. */
export function toIsoTimestamp(isoDate: string): string {
  parseDate(isoDate);
  return `${isoDate}T10:00:00Z`;
}

/** "2026-09-14" → obiekt Date – używane w mapie strony. */
export function toDate(isoDate: string): Date {
  return parseDate(isoDate);
}

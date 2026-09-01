// Adres trzymamy w jednej zmiennej, żeby dało się z niego zbudować
// linki do Google Maps bez ręcznego przepisywania ulicy w kilku miejscach.
const ADDRESS_FULL = "ul. Hajducka 4, 41-500 Chorzów";

export const site = {
  name: "Upadłość Konsumencka Chorzów & Śląsk",
  // Nazwa prawna zgodna z wpisem w CEIDG – używana w JSON-LD i dokumentach.
  // Nie mylić z "name", które jest marką handlową widoczną na stronie.
  legalName: "Katarzyna Szczepańska",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://upadlosckonsumenckachorzow.pl",

  // Dane rejestrowe przedsiębiorcy. Wymagane przez art. 5 ustawy o świadczeniu
  // usług drogą elektroniczną (nazwa, adres, e-mail, NIP, REGON) i używane
  // w polityce prywatności, stopce oraz w JSON-LD (taxID / vatID).
  // Puste pola nie renderują się w polityce – po uzupełnieniu pojawią się same.
  company: {
    // "Firma przedsiębiorcy" w rozumieniu art. 43(2) Kodeksu cywilnego.
    // We wpisie CEIDG nie ma nazwy handlowej, więc firmą jest imię i nazwisko.
    // "Upadłość Konsumencka Chorzów & Śląsk" pozostaje wyłącznie marką.
    name: "Katarzyna Szczepańska",
    nip: "6292438840",
    regon: "545540421",
    registry:
      "Centralna Ewidencja i Informacja o Działalności Gospodarczej (CEIDG)",
    // Dotyczy wyłącznie spółek – przy JDG wiersz się nie renderuje.
    shareCapital: "",
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

  // Współrzędne konkretnego budynku przy Hajduckiej 4, a nie centrum miasta.
  // Używane w JSON-LD (LocalBusiness → geo) oraz przy osadzaniu mapy.
  geo: {
    lat: 50.2908213,
    lng: 18.9460476,
  },

  maps: {
    // Osadzenie mapy bez klucza API. Marker ląduje na wyszukanym adresie,
    // "hl=pl" wymusza polskie etykiety, "z" to poziom przybliżenia.
    embed: `https://maps.google.com/maps?q=${encodeURIComponent(
      ADDRESS_FULL,
    )}&z=17&hl=pl&output=embed`,

    // Link "wyznacz trasę" – otwiera aplikację Map na telefonie.
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      ADDRESS_FULL,
    )}`,
  },

  hours: {
    // Rozbite na wersję "do wyświetlenia" i "do Schema.org" (JSON-LD wymaga
    // formatu 24h "09:00", bez myślnika), żeby godziny w treści strony i w
    // danych strukturalnych dla Google nigdy się nie rozjechały.
    weekday: {
      display: "9:00 – 16:00",
      opens: "09:00",
      closes: "16:00",
    },
    weekend: {
      display: "Zamknięte",
    },
  },

  partner: {
    name: "Grupa Expert Partner",
    url: "https://upadlosci-ekspert.pl/",
  },

  socials: {
    instagram: "",
    tiktok: "",
    facebook: "",
  },

  developer: {
    name: "Filip Wrona",
    url: "https://www.instagram.com/filip_wrona/",
  },
} as const;

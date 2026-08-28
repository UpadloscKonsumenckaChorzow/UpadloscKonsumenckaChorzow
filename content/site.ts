// content/site.ts
// ---------------------------------------------------------------------------
// JEDNO ŹRÓDŁO PRAWDY dla danych firmowych.
//
// PRZED AUDYTEM: numer telefonu był zakodowany na sztywno w ~8 plikach
// (32 wystąpienia), e-mail podobnie. Część rozjeżdżała się w formacie —
// np. `tel:515515314` w ForWho.tsx zamiast `tel:+48515515314` używanego
// wszędzie indziej. Brak "+48" w atrybucie href="tel:" psuje klikalność
// na części telefonów spoza Polski i łamie spójność NAP (Name/Address/
// Phone) między stroną a wizytówką Google Business Profile — a Google
// realnie porównuje te dane przy ustalaniu lokalnych wyników wyszukiwania.
//
// Od teraz zmiana numeru telefonu = zmiana JEDNEJ linijki w tym pliku.
// ---------------------------------------------------------------------------

export const site = {
  name: "Upadłość Konsumencka Chorzów & Śląsk",
  legalName: "Kancelaria Prawa Upadłościowego",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://upadlosckonsumenckachorzow.pl",

  phone: {
    // Format E.164 — jedyny w 100% niezawodny w atrybucie href="tel:".
    href: "tel:+48515515314",
    // Format do wyświetlania w treści.
    display: "515 515 314",
    // Format dla Schema.org / danych strukturalnych.
    schema: "+48515515314",
  },

  email: {
    // TODO PRZED PUBLIKACJĄ: to jest placeholder — "kancelaria.pl" nie jest
    // domeną tej firmy. Wysyłka trafi w próżnię / do obcego podmiotu.
    // Podmień na realny adres przed wdrożeniem na produkcję.
    href: "mailto:kontakt@upadlosckonsumenckachorzow.pl",
    display: "kontakt@upadlosckonsumenckachorzow.pl",
  },

  address: {
    street: "ul. Wolności 12",
    postalCode: "41-500",
    city: "Chorzów",
    region: "Śląskie",
    regionCode: "PL-SL",
    country: "PL",
    full: "ul. Wolności 12, 41-500 Chorzów",
  },

  geo: {
    lat: 50.300585,
    lng: 18.918115,
  },

  hours: {
    weekday: "9:00 – 18:00",
    saturday: "9:00 – 14:00",
  },

  partner: {
    name: "Grupa Expert Partner",
    url: "https://upadlosci-ekspert.pl/",
  },

  // Konta social media — obecnie w kodzie są to placeholdery "#".
  // Podmień na realne adresy albo usuń dany wpis, jeśli konto nie istnieje:
  // martwy link "#" w stopce to zły sygnał UX i dla botów wyszukiwarek.
  socials: {
    instagram: "", // np. "https://instagram.com/twoja-nazwa"
    tiktok: "",
    facebook: "",
  },

  // Adres autora realizacji — zostawiony bo widniał w stopce oryginału.
  developer: {
    name: "Filip Wrona",
    url: "https://www.instagram.com/filip_wrona/",
  },
} as const;

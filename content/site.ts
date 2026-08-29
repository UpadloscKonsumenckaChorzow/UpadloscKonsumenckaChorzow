export const site = {
  name: "Upadłość Konsumencka Chorzów & Śląsk",
  legalName: "Kancelaria Prawa Upadłościowego Expert Partner",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://upadlosckonsumenckachorzow.pl",

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

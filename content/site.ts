export const site = {
  name: "Upadłość Konsumencka Chorzów & Śląsk",
  legalName: "Kancelaria Prawa Upadłościowego Expert Partner",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://upadlosckonsumenckachorzow.pl",

  phone: {
    href: "tel:+48515515314",
    display: "515 515 314",
    schema: "+48515515314",
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
    weekday: "9:00 – 18:00",
    saturday: "9:00 – 14:00",
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

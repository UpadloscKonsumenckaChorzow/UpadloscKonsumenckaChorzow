// components/seo/json-ld.tsx
export function LegalServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Kancelaria Prawa Upadłościowego · Upadłość Konsumencka Chorzów",
    image: "https://twojadomena.pl/logo.png",
    "@id": "https://twojadomena.pl/#legalservice",
    url: "https://twojadomena.pl",
    telephone: "+48515515314",
    email: "kontakt@kancelaria.pl",
    priceRange: "od 2900 zł (możliwość rat)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Wolności 12",
      addressLocality: "Chorzów",
      postalCode: "41-500",
      addressRegion: "Śląskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.300585,
      longitude: 18.918115,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chorzów" },
      { "@type": "City", name: "Katowice" },
      { "@type": "City", name: "Gliwice" },
      { "@type": "City", name: "Zabrze" },
      { "@type": "City", name: "Bytom" },
      { "@type": "City", name: "Ruda Śląska" },
      { "@type": "City", name: "Sosnowiec" },
      { "@type": "AdministrativeArea", name: "Województwo Śląskie" },
    ],
    knowsAbout: [
      "Upadłość konsumencka",
      "Oddłużanie osób fizycznych",
      "Wstrzymanie egzekucji komorniczej",
      "Krajowy Rejestr Zadłużonych (KRZ)",
      "Plan spłaty wierzycieli",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Grupa Expert Partner",
      url: "https://upadlosci-ekspert.pl/",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

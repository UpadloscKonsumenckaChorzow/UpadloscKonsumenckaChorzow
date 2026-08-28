// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { AnalyticsLoader } from "@/components/cookies/AnalyticsLoader";
import { site } from "@/content/site";

// Konfiguracja fontów z polskimi znakami (latin-ext)
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

// WYDAJNOŚĆ: było `weight: ["500", "600", "700"]`.
// Przy dwóch subsetach (latin + latin-ext) to 6 plików WOFF2 dla samego
// Poppinsa. Sprawdziłem cały projekt pod kątem klas `font-display` w parze
// z `font-medium` (waga 500) — zero wystąpień. Poppins pojawia się
// wyłącznie jako semibold (600) i bold (700). Usunięcie wagi 500 to
// 2 mniejsze pliki fontów i realnie mniej danych do pobrania na starcie.
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  // Świadomie NIE ustawiamy maximumScale ani userScalable: blokowanie
  // powiększania strony to naruszenie WCAG 1.4.4 (Resize Text) — osoby
  // słabowidzące muszą mieć możliwość powiększenia widoku.
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Upadłość Konsumencka Chorzów & Śląsk · Skuteczne Oddłużanie",
    template: "%s · Kancelaria Upadłościowa Chorzów",
  },
  description:
    "Kompleksowa pomoc w upadłości konsumenckiej na Śląsku. Zatrzymanie komornika, zamrożenie odsetek i całkowite umorzenie długów. Bezpłatna, poufna analiza Twojej sytuacji.",

  // USUNIĘTO pole `keywords`.
  // Google jawnie ignoruje meta keywords od 2009 r., a Bing może traktować
  // nienaturalnie długą listę fraz jako sygnał spamu. Dziewięć fraz w
  // nagłówku każdej strony nie dawało żadnej korzyści SEO.

  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // POPRAWKA: było `canonical: siteUrl` (bezwzględny adres strony głównej).
  // Metadane z layoutu dziedziczą się w dół do wszystkich podstron, które
  // same nie deklarują `alternates` — w praktyce dotyczyło to strony 404
  // (app/not-found.tsx nie ustawia własnego canonical). Efekt: strona
  // błędu 404 deklarowała Google'owi, że JEST stroną główną — realny błąd
  // w Search Console. Ścieżka względna "/" w połączeniu z `metadataBase`
  // daje ten sam efekt na stronie głównej, a strony z własnym
  // `alternates.canonical` (jak /polityka-prywatnosci, /dziekujemy)
  // nadpisują to poprawnie.
  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Upadłość Konsumencka Chorzów & Śląsk · Życie bez długów",
    description:
      "Zatrzymaj komornika i zacznij od nowa. Sprawdź, jak legalnie umorzyć długi w sądzie. Bezpłatna konsultacja prawna.",
    url: site.url,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        // UWAGA DO SPRAWDZENIA PRZED PUBLIKACJĄ: użyto /rodzinka.jpg,
        // czyli tego samego zdjęcia co w Hero, gdzie renderowane jest w
        // proporcji pionowej (4:5 / 5:4). Tu deklarujemy 1200x630 (16:9
        // poziomo). Jeśli plik źródłowy faktycznie nie ma tych wymiarów,
        // Facebook/LinkedIn/X przytną go w nieprzewidywalnym miejscu przy
        // udostępnianiu linku. Zalecenie: przygotować dedykowany plik
        // /og-image.jpg dokładnie 1200×630 px (kadr poziomy, nie pionowy).
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upadłość konsumencka Chorzów — pomoc w wyjściu z długów",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Upadłość Konsumencka Chorzów & Śląsk · Życie bez długów",
    description:
      "Zatrzymaj komornika i zacznij od nowa. Bezpłatna i poufna analiza sytuacji prawnej.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "geo.region": site.address.regionCode,
    "geo.placename": site.address.city,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

// ---------------------------------------------------------------------------
// DANE STRUKTURALNE (Schema.org / JSON-LD)
//
// POPRAWKA: `image` wskazywało na `/logo.png`, którego w projekcie w ogóle
// nie ma — w Navbar i Footer używany jest wszędzie `/logo.svg`. Wskazanie
// na nieistniejący plik to typowy błąd zgłaszany w Google Search Console
// i realnie osłabia szansę na rich snippet z logo w wynikach wyszukiwania.
//
// DODANO: encję `WebSite` spiętą przez `@id` z `LegalService`, żeby
// wyszukiwarka jednoznacznie wiązała obie encje z tym samym podmiotem.
// ---------------------------------------------------------------------------

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pl-PL",
      publisher: { "@id": `${site.url}/#legalservice` },
    },
    {
      "@type": "LegalService",
      "@id": `${site.url}/#legalservice`,
      name: `${site.legalName} · Upadłość Konsumencka Chorzów`,
      url: site.url,
      logo: `${site.url}/logo.svg`,
      image: `${site.url}/og-image.jpg`,
      telephone: site.phone.schema,
      email: site.email.display,
      priceRange: "od 2900 zł (płatność w ratach)",
      currenciesAccepted: "PLN",
      paymentAccepted: "Gotówka, Przelew, Płatność w ratach",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "14:00",
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
        "Zawieszenie odsetek",
      ],
      memberOf: {
        "@type": "Organization",
        name: site.partner.name,
        url: site.partner.url,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // Dane w 100% statyczne, budowane z zaufanych stałych z
          // content/site.ts — brak wektora XSS. JSON.stringify dodatkowo
          // escapuje treść.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased selection:bg-gold selection:text-navy-900">
        {/* DODANO: link pomijający nawigację (WCAG 2.4.1 Bypass Blocks).
            Bez tego osoba korzystająca z klawiatury musi za każdym razem
            przeklikać cały header (2 paski + menu), zanim dotrze do
            treści strony. Link jest niewidoczny wizualnie, ale pojawia
            się po otrzymaniu fokusu (patrz klasa .skip-link w globals.css). */}
        <a href="#tresc" className="skip-link">
          Przejdź do treści
        </a>

        {/* CookieConsentProvider obejmuje całą aplikację, dzięki czemu
            baner, ustawienia w stopce i loader GA korzystają z tego
            samego stanu zgody. */}
        <CookieConsentProvider>
          <Navbar />

          {/* Kotwica dla skip linku. `tabIndex={-1}` sprawia, że fokus
              faktycznie tu ląduje po aktywacji linku — bez tego
              przeglądarki przewijają widok, ale fokus zostaje na
              początku dokumentu, co myli osoby na czytnikach ekranu. */}
          <div id="tresc" tabIndex={-1}>
            {children}
          </div>

          <Footer />

          {/* Baner + okno ustawień cookies */}
          <CookieBanner />

          {/* GOOGLE ANALYTICS 4 — ładowany WYŁĄCZNIE po zgodzie użytkownika */}
          <AnalyticsLoader gaId="G-CLXWVE955N" />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

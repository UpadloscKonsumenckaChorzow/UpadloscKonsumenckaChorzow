import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import { site } from "@/content/site";

const CookieBanner = dynamic(() =>
  import("@/components/cookies/CookieBanner").then((m) => m.CookieBanner),
);
const AnalyticsLoader = dynamic(() =>
  import("@/components/cookies/AnalyticsLoader").then((m) => m.AnalyticsLoader),
);

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

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
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Upadłość Konsumencka Chorzów & Śląsk · Skuteczne Oddłużanie",
    template: "%s · Kancelaria Upadłościowa Chorzów",
  },
  description:
    "Kompleksowa pomoc w upadłości konsumenckiej na Śląsku. Zatrzymanie komornika, zamrożenie odsetek i całkowite umorzenie długów. Bezpłatna, poufna analiza.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
      "Zatrzymaj komornika i zacznij od nowa. Sprawdź, jak legalnie umorzyć długi. Bezpłatna konsultacja.",
    url: site.url,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upadłość konsumencka Chorzów — pomoc prawna i oddłużanie",
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
      logo: `${site.url}/android-chrome-512x512.png`,
      image: `${site.url}/og-image.jpg`,
      telephone: site.phone.schema,
      email: site.email.display,
      priceRange: "od 2900 PLN",
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
          opens: site.hours.weekday.opens,
          closes: site.hours.weekday.closes,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased selection:bg-gold selection:text-white">
        <a href="#tresc" className="skip-link">
          Przejdź do treści głównej
        </a>

        <CookieConsentProvider>
          <Navbar />
          <div id="tresc" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <Footer />
          <CookieBanner />
          <AnalyticsLoader gaId="G-CLXWVE955N" />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

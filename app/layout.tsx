// app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Podmień na docelową domenę, gdy strona będzie publikowana
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://upadlosckonsumenckachorzow.pl";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Upadłość Konsumencka Chorzów & Śląsk · Skuteczne Oddłużanie",
    template: "%s · Kancelaria Upadłościowa Chorzów",
  },
  description:
    "Kompleksowa pomoc w upadłości konsumenckiej na Śląsku. Zatrzymanie komornika, zamrożenie odsetek i całkowite umorzenie długów. Bezpłatna, poufna analiza Twojej sytuacji.",
  keywords: [
    "upadłość konsumencka Chorzów",
    "upadłość konsumencka Śląsk",
    "kancelaria upadłościowa Katowice",
    "jak ogłosić upadłość konsumencką",
    "zatrzymanie komornika Śląsk",
    "oddłużanie osób fizycznych Chorzów",
    "pomoc w wyjściu z długów Śląsk",
    "umorzenie długów",
  ],
  authors: [{ name: "Kancelaria Prawa Upadłościowego" }],
  creator: "Kancelaria Prawa Upadłościowego",
  publisher: "Kancelaria Prawa Upadłościowego",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Upadłość Konsumencka Chorzów & Śląsk · Życie bez długów",
    description:
      "Zatrzymaj komornika i zacznij od nowa. Sprawdź, jak legalnie umorzyć długi w sądzie. Bezpłatna konsultacja prawna.",
    url: siteUrl,
    siteName: "Upadłość Konsumencka Chorzów",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: `${siteUrl}/rodzinka.png`,
        width: 1200,
        height: 630,
        alt: "Upadłość Konsumencka Chorzów - Życie bez długów",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upadłość Konsumencka Chorzów & Śląsk · Życie bez długów",
    description:
      "Zatrzymaj komornika i zacznij od nowa. Bezpłatna i poufna analiza sytuacji prawnej.",
    images: [`${siteUrl}/rodzinka.png`],
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
    "geo.region": "PL-SL",
    "geo.placename": "Chorzów",
    "geo.position": "50.3006;18.9181",
    ICBM: "50.3006, 18.9181",
  },
};

// DANE STRUKTURALNE SCHEMA.ORG (JSON-LD) DLA GOOGLE, BING I AI
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Kancelaria Prawa Upadłościowego · Upadłość Konsumencka Chorzów",
  image: `${siteUrl}/logo.png`,
  "@id": `${siteUrl}/#legalservice`,
  url: siteUrl,
  telephone: "+48515515314",
  email: "kontakt@kancelaria.pl",
  priceRange: "od 2900 zł (płatność w ratach)",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Skrypt Schema.org JSON-LD wstrzyknięty bezpośrednio w sekcję HEAD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

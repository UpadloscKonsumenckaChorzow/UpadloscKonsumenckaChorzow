import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { AnalyticsLoader } from "@/components/cookies/AnalyticsLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";

// next/font/google pobiera czcionki podczas budowania i serwuje je
// z własnej domeny – odwiedzający nie łączą się z Google (RODO).
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-CLXWVE955N";

export const viewport: Viewport = {
  themeColor: site.colors.theme,
  width: "device-width",
  initialScale: 1,
  // Treść nie wchodzi pod "notch" i zaokrąglone rogi telefonów.
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Upadłość Konsumencka Chorzów & Śląsk · Kancelaria Prawa Upadłościowego",
    template: "%s · Upadłość Konsumencka Chorzów",
  },
  description:
    "Upadłość konsumencka Chorzów – biuro przy ul. Hajduckiej 4. Bezpłatna analiza sytuacji, przygotowanie wniosku i wsparcie do końca postępowania. Śląsk, zdalnie cała Polska.",
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
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
  category: "legal",
  openGraph: {
    title: "Upadłość Konsumencka Chorzów & Śląsk",
    description:
      "Biuro przy ul. Hajduckiej 4 w Chorzowie. Pomagamy przejść przez upadłość konsumencką na całym Śląsku, a zdalnie w całej Polsce. Zadzwoń i umów bezpłatną analizę swojej sytuacji.",
    url: site.url,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kancelaria Upadłość Konsumencka Chorzów — pomoc w umorzeniu zobowiązań",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upadłość Konsumencka Chorzów & Śląsk",
    description:
      "Upadłość konsumencka w Chorzowie i na Śląsku, zdalnie w całej Polsce – bezpłatna analiza sytuacji, przygotowanie wniosku i wsparcie w trakcie postępowania.",
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
      // LegalService to podtyp LocalBusiness – precyzyjniej opisuje działalność.
      "@type": "LegalService",
      "@id": `${site.url}/#legalservice`,
      name: site.name,
      alternateName: [
        "Kancelaria Upadłości Konsumenckiej Chorzów",
        "Kancelaria Prawa Upadłościowego Chorzów",
      ],
      description:
        "Pomoc w przeprowadzeniu upadłości konsumenckiej – od bezpłatnej analizy sytuacji, przez przygotowanie wniosku, po zakończenie postępowania. Spotkania w biurze w Chorzowie, obsługa całego Śląska, a zdalnie – całej Polski.",
      legalName: site.company.name,
      taxID: site.company.nip,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${site.url}/og-image.jpg`,
      telephone: site.phone.schema,
      email: site.email.display,
      priceRange: `od ${site.price.from} ${site.price.currency}`,
      makesOffer: {
        "@type": "Offer",
        name: "Prowadzenie sprawy o upadłość konsumencką",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: site.price.from,
          priceCurrency: site.price.currency,
        },
      },
      currenciesAccepted: "PLN",
      paymentAccepted: "Gotówka, Przelew, Płatność w ratach",
      hasMap: site.maps.directions,
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
        }
      ],
      // Województwo śląskie obejmuje wszystkie miasta regionu; obsługa
      // zdalna oznacza, że zasięgiem jest cała Polska. Największe miasta
      // wymienione osobno, bo pomagają w lokalnych wynikach wyszukiwania.
      areaServed: [
        { "@type": "City", name: "Chorzów" },
        { "@type": "City", name: "Świętochłowice" },
        { "@type": "City", name: "Katowice" },
        { "@type": "City", name: "Bytom" },
        { "@type": "City", name: "Ruda Śląska" },
        { "@type": "City", name: "Gliwice" },
        { "@type": "City", name: "Zabrze" },
        { "@type": "City", name: "Sosnowiec" },
        { "@type": "AdministrativeArea", name: "Województwo Śląskie" },
        { "@type": "Country", name: "Polska" },
      ],
      knowsAbout: [
        "Upadłość konsumencka Chorzów",
        "Umorzenie zobowiązań osób fizycznych",
        "Krajowy Rejestr Zadłużonych (KRZ)",
        "Plan spłaty wierzycieli",
        "Upadłość konsumencka bez majątku",
      ],
      sameAs: [
        ...(site.socials.facebook ? [site.socials.facebook] : []),
        ...(site.socials.instagram ? [site.socials.instagram] : []),
        ...(site.socials.tiktok ? [site.socials.tiktok] : []),
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
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen font-sans text-ink antialiased">
        <a href="#tresc" className="skip-link">
          Przejdź do treści głównej
        </a>

        <JsonLd data={legalServiceSchema} />

        <Navbar />
        {/* Jeden punkt orientacyjny <main> dla wszystkich podstron – cel
            linku "Przejdź do treści głównej". */}
        <main id="tresc" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />

        {/* Jedyne "globalne" komponenty klienckie – małe i niezależne. */}
        <CookieBanner />
        <AnalyticsLoader gaId={GA_ID} />
      </body>
    </html>
  );
}

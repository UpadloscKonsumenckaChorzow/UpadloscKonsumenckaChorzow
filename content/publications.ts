import type { Metadata } from "next";
import { site, toIsoTimestamp } from "@/content/site";

/**
 * Jedno źródło prawdy dla publikacji. Z tej listy powstają: spis na
 * /publikacje, metadane i dane strukturalne każdego artykułu, sekcja
 * "Czytaj także" oraz mapa strony. Nowy artykuł = nowy wpis tutaj
 * + folder app/publikacje/<slug>/page.tsx.
 */
export type Publication = {
  slug: string;
  /** Pełny tytuł artykułu (nagłówek h1, JSON-LD). */
  title: string;
  /** Tytuł w karcie przeglądarki i w Google – do ~60 znaków. */
  metaTitle: string;
  /** Opis w wynikach Google – do ~160 znaków. */
  description: string;
  /** Opis przy udostępnianiu (Facebook, X, komunikatory). */
  socialDescription: string;
  /** Krótki opis w spisie publikacji. */
  excerpt: string;
  /** Temat, którego dotyczy artykuł (JSON-LD → about). */
  about: string;
  tags: string[];
  /** Daty w formacie RRRR-MM-DD. */
  published: string;
  updated: string;
  readingMinutes: number;
};

const list: Publication[] = [
  {
    slug: "czy-emeryt-moze-oglosic-upadlosc-konsumencka",
    title:
      "Czy emeryt może ogłosić upadłość konsumencką? Warunki i przebieg postępowania",
    metaTitle: "Czy emeryt może ogłosić upadłość konsumencką? · Chorzów",
    description:
      "Czy emeryt może ogłosić upadłość konsumencką? Tak. Sprawdź warunki, co dzieje się z emeryturą i mieszkaniem oraz kiedy sąd umarza długi bez planu spłaty.",
    socialDescription:
      "Długi nie wybierają wieku. Wyjaśniamy, na jakich zasadach emeryt może ogłosić upadłość, co dzieje się z emeryturą i mieszkaniem oraz jak wygląda procedura.",
    excerpt:
      "Wiek nie jest przeszkodą. Jakie warunki trzeba spełnić, co dzieje się z emeryturą i mieszkaniem oraz kiedy sąd umarza długi bez planu spłaty.",
    about: "Upadłość konsumencka emeryta",
    tags: [
      "upadłość konsumencka emeryta",
      "upadłość konsumencka seniora",
      "emerytura a upadłość",
      "plan spłaty",
      "umorzenie długów",
      "Chorzów",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
    readingMinutes: 4,
  },
  {
    slug: "etapy-oglaszania-upadlosci-konsumenckiej",
    title: "Etapy ogłaszania upadłości konsumenckiej – krok po kroku",
    metaTitle: "Etapy upadłości konsumenckiej krok po kroku · Chorzów",
    description:
      "Jak przebiega upadłość konsumencka? Od wniosku w KRZ (opłata 30 zł), przez postanowienie sądu i pracę syndyka, po plan spłaty i umorzenie długów.",
    socialDescription:
      "Od zebrania dokumentów, przez decyzję sądu i pracę syndyka, aż po umorzenie długów – 9 etapów upadłości konsumenckiej opisanych krok po kroku.",
    excerpt:
      "Cała droga w 9 etapach: od zebrania dokumentów i wniosku w KRZ, przez postanowienie sądu i pracę syndyka, aż po plan spłaty i umorzenie długów.",
    about: "Przebieg postępowania o ogłoszenie upadłości konsumenckiej",
    tags: [
      "etapy upadłości konsumenckiej",
      "wniosek o upadłość konsumencką",
      "Krajowy Rejestr Zadłużonych",
      "syndyk",
      "plan spłaty",
      "Chorzów",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
    readingMinutes: 6,
  },
  {
    slug: "upadlosc-konsumencka-co-to-jest-ile-kosztuje",
    title: "Upadłość konsumencka – co to jest, ile kosztuje i jak ją ogłosić?",
    metaTitle: "Upadłość konsumencka – co to jest i ile kosztuje? · Chorzów",
    description:
      "Co to jest upadłość konsumencka, ile kosztuje i jak ją ogłosić? Wyjaśniamy upadłość bez majątku, koszty i przygotowanie wniosku. Biuro w Chorzowie.",
    socialDescription:
      "Problemy ze spłatą kredytów, pożyczek, rachunków? Wyjaśniamy procedurę upadłości konsumenckiej krok po kroku prostym językiem.",
    excerpt:
      "Czym jest upadłość konsumencka, ile kosztuje, czy można ją ogłosić bez majątku i jak przygotować się do złożenia wniosku.",
    about: "Upadłość konsumencka",
    tags: [
      "upadłość konsumencka",
      "umorzenie zobowiązań",
      "Chorzów",
      "Śląsk",
      "publikacja prawna",
      "kancelaria upadłościowa",
    ],
    published: "2026-09-08",
    updated: "2026-09-14",
    readingMinutes: 5,
  },
];

/** Publikacje od najnowszej. */
export const publications: readonly Publication[] = [...list].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export const PUBLICATIONS_PATH = "/publikacje";
const OG_IMAGE = "/og-image.jpg";

export function publicationPath(slug: string) {
  return `${PUBLICATIONS_PATH}/${slug}`;
}

export function getPublication(slug: string): Publication {
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) {
    throw new Error(`Brak publikacji "${slug}" w content/publications.ts`);
  }
  return pub;
}

/** Data ostatniej zmiany w dziale – do mapy strony i spisu publikacji. */
export const publicationsUpdated = publications
  .map((p) => p.updated)
  .sort()
  .at(-1)!;

/** Metadane artykułu (tytuł, opis, OpenGraph, X) z jednego wpisu. */
export function publicationMetadata(pub: Publication): Metadata {
  const path = publicationPath(pub.slug);
  return {
    title: { absolute: pub.metaTitle },
    description: pub.description,
    keywords: pub.tags,
    alternates: { canonical: path },
    openGraph: {
      title: pub.title,
      description: pub.socialDescription,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "pl_PL",
      type: "article",
      publishedTime: toIsoTimestamp(pub.published),
      modifiedTime: toIsoTimestamp(pub.updated),
      authors: [site.legalName],
      section: "Prawo i Finanse",
      tags: pub.tags,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: `${pub.title} – ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pub.title,
      description: pub.socialDescription,
      images: [OG_IMAGE],
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
  };
}

/** Obraz do udostępniania – ten sam obiekt w OpenGraph i w JSON-LD. */
export function ogImageJsonLd() {
  return {
    "@type": "ImageObject",
    "@id": `${site.url}/#ogimage`,
    url: `${site.url}${OG_IMAGE}`,
    contentUrl: `${site.url}${OG_IMAGE}`,
    width: 1200,
    height: 630,
  };
}

/**
 * Dane strukturalne JSON-LD artykułu. Graf: WebPage (strona) ← Article
 * (treść) + BreadcrumbList (okruszki) + obraz – powiązane przez @id,
 * tak jak oczekuje tego Google.
 */
export function publicationJsonLd(pub: Publication) {
  const url = `${site.url}${publicationPath(pub.slug)}`;
  const published = toIsoTimestamp(pub.published);
  const modified = toIsoTimestamp(pub.updated);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: pub.metaTitle,
        description: pub.description,
        inLanguage: "pl-PL",
        isPartOf: { "@id": `${site.url}/#website` },
        primaryImageOfPage: { "@id": `${site.url}/#ogimage` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        datePublished: published,
        dateModified: modified,
      },
      ogImageJsonLd(),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        isPartOf: { "@id": url },
        mainEntityOfPage: { "@id": url },
        headline: pub.title,
        description: pub.description,
        image: { "@id": `${site.url}/#ogimage` },
        inLanguage: "pl-PL",
        datePublished: published,
        dateModified: modified,
        timeRequired: `PT${pub.readingMinutes}M`,
        articleSection: "Prawo i Finanse",
        keywords: pub.tags.join(", "),
        // Autor jako osoba – sygnał E-E-A-T, zgodny z metadanymi OpenGraph.
        author: {
          "@type": "Person",
          name: site.legalName,
          url: site.url,
          worksFor: { "@id": `${site.url}/#legalservice` },
        },
        // Wydawca = firma opisana w layout.tsx.
        publisher: { "@id": `${site.url}/#legalservice` },
        copyrightHolder: { "@id": `${site.url}/#legalservice` },
        copyrightYear: Number(pub.published.slice(0, 4)),
        about: { "@type": "Thing", name: pub.about },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Publikacje",
            item: `${site.url}${PUBLICATIONS_PATH}`,
          },
          { "@type": "ListItem", position: 3, name: pub.title, item: url },
        ],
      },
    ],
  };
}

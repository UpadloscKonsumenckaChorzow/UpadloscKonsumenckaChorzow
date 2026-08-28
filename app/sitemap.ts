// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://upadlosckonsumenckachorzow.pl";

// Aktualizuj tę datę ręcznie przy realnej zmianie treści danej strony
// (zamiast generować "dziś" przy każdym buildzie, co fałszuje sygnał
// świeżości dla wyszukiwarek).
const HOME_LAST_MODIFIED = new Date("2026-08-28");
const PRIVACY_LAST_MODIFIED = new Date("2026-08-28");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // /dziekujemy celowo pominięte - ma "robots: { index: false }",
    // więc nie powinno być zgłaszane do indeksowania w sitemapie.
  ];
}

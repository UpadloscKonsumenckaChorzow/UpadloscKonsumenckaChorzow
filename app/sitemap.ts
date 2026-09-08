import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const LAST_MODIFIED = {
  home: "2026-09-08",
  publikacje: "2026-09-08",
  politykaPrywatnosci: "2026-09-08",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(LAST_MODIFIED.home),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/publikacje`,
      lastModified: new Date(LAST_MODIFIED.publikacje),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/polityka-prywatnosci`,
      lastModified: new Date(LAST_MODIFIED.politykaPrywatnosci),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

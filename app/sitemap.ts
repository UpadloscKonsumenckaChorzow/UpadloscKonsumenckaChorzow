import type { MetadataRoute } from "next";
import { site, toDate } from "@/content/site";
import {
  publications,
  publicationPath,
  publicationsUpdated,
  PUBLICATIONS_PATH,
} from "@/content/publications";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: toDate(site.updated.home),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${site.url}/rodzinka.jpg`],
    },
    {
      url: `${site.url}${PUBLICATIONS_PATH}`,
      lastModified: toDate(publicationsUpdated),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Każdy artykuł z content/publications.ts trafia tu automatycznie.
    ...publications.map((pub) => ({
      url: `${site.url}${publicationPath(pub.slug)}`,
      lastModified: toDate(pub.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${site.url}/og-image.jpg`],
    })),
    {
      url: `${site.url}/polityka-prywatnosci`,
      lastModified: toDate(site.updated.politykaPrywatnosci),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

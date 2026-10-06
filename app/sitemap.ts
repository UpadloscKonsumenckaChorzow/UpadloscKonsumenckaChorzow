import type { MetadataRoute } from "next";
import { site, toDate } from "@/content/site";

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
      url: `${site.url}/publikacje`,
      lastModified: toDate(site.updated.publikacje),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${site.url}/og-image.jpg`],
    },
    {
      url: `${site.url}/polityka-prywatnosci`,
      lastModified: toDate(site.updated.politykaPrywatnosci),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

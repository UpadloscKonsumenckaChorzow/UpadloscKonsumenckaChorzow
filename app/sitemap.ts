import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const LAST_UPDATED = new Date("2026-08-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/polityka-prywatnosci`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

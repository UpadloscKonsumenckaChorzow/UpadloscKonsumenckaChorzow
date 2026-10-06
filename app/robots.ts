import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Strona po wysłaniu formularza ma noindex – musi być dostępna dla
    // robotów, żeby mogły ten noindex odczytać, więc jej nie blokujemy.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

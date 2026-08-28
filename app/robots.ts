// app/robots.ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// POPRAWKA: adres domeny był wpisany na sztywno osobno w tym pliku,
// osobno w sitemap.ts i osobno (jako zmienna env) w layout.tsx — trzy
// niezależne kopie tego samego adresu. Zmiana domeny w przyszłości
// wymagałaby edycji w trzech miejscach, z ryzykiem że któreś zostanie
// pominięte. Teraz wszystkie trzy czerpią z jednego `site.url`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}

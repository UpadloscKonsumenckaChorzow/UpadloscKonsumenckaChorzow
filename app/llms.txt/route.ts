import { sections, site } from "@/content/site";
import { publications, publicationPath, PUBLICATIONS_PATH } from "@/content/publications";

/*
 * /llms.txt – opis serwisu dla modeli językowych (propozycja llmstxt.org).
 * Generowany z content/site.ts i content/publications.ts, więc nowy artykuł
 * albo zmiana danych firmy trafia tu automatycznie. Plik budowany raz,
 * podczas budowania strony.
 */
export const dynamic = "force-static";

export function GET() {
  const pricePln = new Intl.NumberFormat("pl-PL").format(site.price.from);

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} Biuro w Chorzowie (${site.address.full}), obsługa całego Śląska stacjonarnie, a zdalnie całej Polski. Bezpłatna konsultacja telefoniczna i wstępna analiza sytuacji.`,
    "",
    "## Kontakt",
    "",
    `- Telefon: ${site.phone.display} (pon.–pt. ${site.hours.weekday.display}, weekendy: ${site.hours.weekend.display.toLowerCase()})`,
    `- E-mail: ${site.email.display}`,
    `- Adres: ${site.address.full}`,
    `- Cena prowadzenia sprawy: od ${pricePln} zł`,
    `- Formularz kontaktowy: ${site.url}/#kontakt`,
    "",
    "## Strona główna",
    "",
    `- [${site.name}](${site.url}): oferta pomocy w upadłości konsumenckiej`,
    ...sections.map((s) => `- [${s.label}](${site.url}/#${s.id})`),
    "",
    "## Publikacje",
    "",
    `- [Wszystkie publikacje](${site.url}${PUBLICATIONS_PATH}): spis poradników o upadłości konsumenckiej`,
    ...publications.map(
      (p) => `- [${p.title}](${site.url}${publicationPath(p.slug)}): ${p.excerpt}`,
    ),
    "",
    "## Optional",
    "",
    `- [Polityka prywatności i RODO](${site.url}/polityka-prywatnosci)`,
    `- [Mapa strony](${site.url}/sitemap.xml)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

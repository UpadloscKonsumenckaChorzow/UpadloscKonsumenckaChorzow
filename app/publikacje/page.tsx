import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays, Clock } from "lucide-react";
import { site, formatPlDate, toIsoTimestamp } from "@/content/site";
import {
  publications,
  publicationPath,
  publicationsUpdated,
  PUBLICATIONS_PATH,
} from "@/content/publications";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/publications/Breadcrumbs";
import { PublicationCard } from "@/components/publications/PublicationCard";
import { ContactButtons } from "@/components/publications/ContactButtons";
import { FreeConsultationNote } from "@/components/publications/FreeConsultationNote";

const PAGE_TITLE = "Publikacje o upadłości konsumenckiej";
const PAGE_URL = `${site.url}${PUBLICATIONS_PATH}`;
const DESCRIPTION =
  "Poradniki o upadłości konsumenckiej od biura z Chorzowa: co to jest i ile kosztuje, jak przebiega krok po kroku oraz czy emeryt może ogłosić upadłość.";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} · Chorzów` },
  description: DESCRIPTION,
  alternates: { canonical: PUBLICATIONS_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PAGE_TITLE} – ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// Strona zbiorcza + lista artykułów + okruszki – Google widzi, które
// artykuły należą do działu i w jakiej kolejności.
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: DESCRIPTION,
      inLanguage: "pl-PL",
      isPartOf: { "@id": `${site.url}/#website` },
      dateModified: toIsoTimestamp(publicationsUpdated),
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: publications.map((pub, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${site.url}${publicationPath(pub.slug)}`,
          name: pub.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
        { "@type": "ListItem", position: 2, name: "Publikacje", item: PAGE_URL },
      ],
    },
  ],
};

export default function PublicationsPage() {
  const [latest, ...rest] = publications;

  return (
    <div className="min-h-screen bg-mint text-ink">
      <JsonLd data={collectionJsonLd} />

      <section className="relative overflow-hidden bg-navy text-white pt-4 pb-9 sm:pt-14 sm:pb-24">
        <div
          aria-hidden="true"
          className="absolute -inset-2 bg-radial from-green/15 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none"
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <Breadcrumbs items={[{ label: "Główna", href: "/" }, { label: "Publikacje" }]} />

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
            Publikacje
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-lg max-w-2xl">
            Wyjaśniamy upadłość konsumencką prostym językiem: czym jest, ile
            kosztuje, jak przebiega postępowanie i na co uważać w konkretnych
            sytuacjach.
          </p>
        </div>
      </section>

      <section aria-label="Lista publikacji" className="pb-7 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Najnowszy artykuł nachodzi na granatowe hero – od razu widać,
              od czego zacząć. */}
          <article className="group relative -mt-6 sm:-mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-white shadow-lg transition-[border-color,box-shadow] hover:border-green/50 hover:shadow-xl focus-within:border-green/50">
            <div className="grid lg:grid-cols-12">
              <div className="p-4 sm:p-10 lg:col-span-8">
                <p className="inline-flex items-center rounded-full bg-mint-dark px-2.5 py-1 text-xs font-semibold text-green-contrast">
                  Najnowsza publikacja
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug text-navy sm:mt-4 sm:text-3xl">
                  <Link
                    href={publicationPath(latest.slug)}
                    className="outline-none after:absolute after:inset-0 after:rounded-[inherit] focus-visible:after:outline-3 focus-visible:after:outline-green-light focus-visible:after:outline-offset-2 group-hover:text-green-contrast transition-colors"
                  >
                    {latest.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-lg max-w-2xl">
                  {latest.excerpt}
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-between gap-3 border-t border-black/5 bg-mint/60 px-4 py-3 sm:px-10 lg:col-span-4 lg:flex-col lg:items-start lg:justify-end lg:border-t-0 lg:border-l lg:p-10">
                <dl className="space-y-1.5 text-sm text-ink/70">
                  <div className="flex items-center gap-2">
                    <dt className="sr-only">Data publikacji</dt>
                    <CalendarDays className="size-4 text-green" aria-hidden="true" />
                    <dd>
                      <time dateTime={latest.published}>
                        {formatPlDate(latest.published)}
                      </time>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="sr-only">Czas czytania</dt>
                    <Clock className="size-4 text-green" aria-hidden="true" />
                    <dd>{latest.readingMinutes} min czytania</dd>
                  </div>
                </dl>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-navy-700"
                >
                  Czytaj publikację
                </span>
              </div>
            </div>
          </article>

          <ul className="mt-3.5 grid gap-3.5 sm:mt-5 sm:gap-5 md:grid-cols-2">
            {rest.map((pub) => (
              <li key={pub.slug}>
                <PublicationCard pub={pub} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy text-white py-7 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-display text-xl font-bold leading-tight sm:text-3xl">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base max-w-2xl">
            Każda sprawa wygląda inaczej. Zadzwoń lub odwiedź nas w biurze przy{" "}
            {site.address.street} w Chorzowie – omówimy Twoją sytuację i
            podpowiemy, od czego zacząć.
          </p>
          <ContactButtons className="mt-5 sm:mt-7" />
          <FreeConsultationNote className="mt-4" />
        </div>
      </section>
    </div>
  );
}

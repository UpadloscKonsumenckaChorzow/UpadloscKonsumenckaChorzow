import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPlDate } from "@/content/site";
import { publicationPath, type Publication } from "@/content/publications";

/**
 * Wpis w spisie publikacji. Cała karta jest klikalna (rozciągnięty link
 * w tytule), a w czytniku ekranu nazwą linku pozostaje sam tytuł.
 */
export function PublicationCard({
  pub,
  headingLevel: Heading = "h2",
}: {
  pub: Publication;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-7 shadow-sm transition-[border-color,box-shadow] hover:border-green/50 hover:shadow-md focus-within:border-green/50">
      <p className="text-xs text-ink/60 sm:text-sm">
        <time dateTime={pub.published}>{formatPlDate(pub.published)}</time>
        <span aria-hidden="true" className="mx-2 text-ink/25">/</span>
        {pub.readingMinutes} min czytania
      </p>

      <Heading className="mt-2 font-display text-lg font-bold leading-snug text-navy sm:text-xl">
        <Link
          href={publicationPath(pub.slug)}
          className="outline-none after:absolute after:inset-0 after:rounded-[inherit] focus-visible:after:outline-3 focus-visible:after:outline-green-light focus-visible:after:outline-offset-2 group-hover:text-green-contrast transition-colors"
        >
          {pub.title}
        </Link>
      </Heading>

      {/* W "Czytaj także" na telefonie wystarczy tytuł – mniej przewijania. */}
      <p
        className={`mt-2 text-sm leading-relaxed text-ink/75 sm:text-base ${
          Heading === "h3" ? "hidden sm:block" : ""
        }`}
      >
        {pub.excerpt}
      </p>

      <p
        aria-hidden="true"
        className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-navy sm:pt-4"
      >
        Czytaj publikację
        <ArrowRight className="size-4 text-green transition-transform group-hover:translate-x-0.5" />
      </p>
    </article>
  );
}

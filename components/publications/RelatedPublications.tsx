import Link from "next/link";
import { publications, PUBLICATIONS_PATH } from "@/content/publications";
import { PublicationCard } from "@/components/publications/PublicationCard";

/** "Czytaj także" – pozostałe publikacje, od najnowszej. */
export function RelatedPublications({ currentSlug }: { currentSlug: string }) {
  const others = publications.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;

  return (
    <section aria-labelledby="czytaj-takze" className="bg-mint py-7 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 mb-4 sm:mb-8">
          <h2
            id="czytaj-takze"
            className="font-display text-xl font-bold leading-tight text-ink sm:text-3xl"
          >
            Czytaj także
          </h2>
          <Link
            href={PUBLICATIONS_PATH}
            className="text-sm font-semibold text-navy underline underline-offset-4 decoration-green/60 hover:text-green-contrast transition-colors"
          >
            Wszystkie publikacje
          </Link>
        </div>

        <ul className="grid gap-2.5 sm:gap-5 md:grid-cols-2">
          {others.map((pub) => (
            <li key={pub.slug}>
              <PublicationCard pub={pub} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

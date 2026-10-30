import type { ReactNode } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { formatPlDate } from "@/content/site";
import { PUBLICATIONS_PATH, type Publication } from "@/content/publications";
import { Breadcrumbs } from "@/components/publications/Breadcrumbs";
import { ContactButtons } from "@/components/publications/ContactButtons";
import { FreeConsultationNote } from "@/components/publications/FreeConsultationNote";

/**
 * Granatowe otwarcie artykułu – ten sam układ co w pierwszej publikacji:
 * okruszki, nagłówek z zieloną drugą linią, wstęp i przyciski kontaktu.
 * Dodatkowo data publikacji i czas czytania.
 */
export function ArticleHero({
  pub,
  crumb,
  title,
  subtitle,
  children,
}: {
  pub: Publication;
  /** Krótka nazwa artykułu w okruszkach. */
  crumb: string;
  title: ReactNode;
  subtitle: ReactNode;
  /** Akapit wstępu. */
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-4 pb-6 sm:pt-14 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute -inset-2 bg-radial from-green/15 via-transparent to-transparent opacity-70 blur-3xl pointer-events-none"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <Breadcrumbs
          items={[
            { label: "Główna", href: "/" },
            { label: "Publikacje", href: PUBLICATIONS_PATH },
            { label: crumb },
          ]}
        />

        <h1 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white max-w-3xl">
          {title}{" "}
          <span className="text-green block mt-0.5 sm:mt-1">{subtitle}</span>
        </h1>

        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/60 sm:mt-6 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-green" aria-hidden="true" />
            <time dateTime={pub.published}>{formatPlDate(pub.published)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-green" aria-hidden="true" />
            {pub.readingMinutes} min czytania
          </span>
        </p>

        <p className="mt-2.5 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg max-w-2xl mx-auto">
          {children}
        </p>

        <ContactButtons className="mt-4 sm:mt-7" />
        <FreeConsultationNote className="mt-3 sm:mt-4" />
      </div>
    </section>
  );
}

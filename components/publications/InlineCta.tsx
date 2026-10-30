import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/content/site";

/**
 * Wezwanie do kontaktu w połowie artykułu – tam, gdzie czytelnik zaczyna
 * się zastanawiać, czy upadłość dotyczy jego sytuacji. Pytanie przychodzi
 * z treści artykułu, odpowiedź jest zawsze ta sama: bezpłatna analiza.
 */
export function InlineCta({
  question,
  className = "",
}: {
  question: string;
  className?: string;
}) {
  return (
    <aside aria-label="Bezpłatna konsultacja" className={`mx-auto max-w-4xl ${className}`}>
      <div className="flex flex-col gap-3 rounded-2xl sm:rounded-3xl bg-navy p-4 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-7">
        <div className="min-w-0">
          <p className="font-display text-base font-bold leading-snug sm:text-xl">
            {question}
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/75 sm:text-sm">
            Sprawdzimy to bezpłatnie podczas rozmowy telefonicznej –
            pon.–pt. {site.hours.weekday.display}.
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:flex-col">
          <a
            href={site.phone.href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green px-3 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-green-light whitespace-nowrap sm:px-5"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            {site.phone.display}
          </a>
          <Link
            href="/#kontakt"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-white/20 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap sm:px-5"
          >
            Napisz do nas
            <ArrowRight className="size-4 shrink-0 text-green" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

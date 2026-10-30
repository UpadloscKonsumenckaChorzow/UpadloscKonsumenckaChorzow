import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/** Okruszki na granatowym tle hero. Ostatni element = bieżąca strona. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Nawigacja okruszkowa" className="mb-3.5 sm:mb-6 max-w-full">
      <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-xs text-white/70 sm:text-sm">
        {items.map((item, i) => (
          <li key={item.label} className="flex min-w-0 items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="size-3 shrink-0 text-white/30" aria-hidden="true" />
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-green transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="truncate font-semibold text-green">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

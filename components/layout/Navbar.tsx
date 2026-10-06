import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ScrollSpy } from "@/components/layout/ScrollSpy";
import { sections, site } from "@/content/site";

/*
 * Nagłówek renderowany w całości na serwerze (zero JS dla linków i logo).
 * W przeglądarce działają tylko dwie małe "wyspy":
 *  - MobileMenu – przycisk i panel menu na telefonie,
 *  - ScrollSpy – podświetlanie aktualnej sekcji (aria-current).
 * Linki "/#sekcja" działają na stronie głównej (przewinięcie) i na
 * podstronach (powrót na stronę główną i przewinięcie).
 */

function Logo() {
  // Nazwa linku = widoczny tekst (WCAG 2.5.3), logo jest dekoracyjne.
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
      <LogoMark className="h-8 w-auto sm:h-10 transition-transform duration-300 group-hover:scale-105" />
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold uppercase tracking-wide text-ink sm:text-lg">
          Upadłość <span className="text-green-contrast">Konsumencka</span>
        </span>
        <span className="block text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
          Chorzów · Śląsk
        </span>
      </span>
    </Link>
  );
}

const desktopLink =
  "relative py-2 text-sm font-medium text-ink/75 transition-colors duration-200 hover:text-navy aria-[current=location]:font-semibold aria-[current=location]:text-navy " +
  // zielona linia pod aktywnym / najechanym linkiem
  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-green after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=location]:after:scale-x-100";

const mobileLink =
  "group flex items-center justify-between border-b border-black/5 py-3 text-base font-medium text-ink/80 transition-[padding,color] duration-200 hover:pl-2 hover:text-navy sm:py-3.5 aria-[current=location]:pl-2 aria-[current=location]:font-semibold aria-[current=location]:text-navy";

export function Navbar() {
  return (
    <>
      {/* Górny pasek informacyjny – przewija się ze stroną, dzięki czemu
          przyklejony nagłówek zajmuje na telefonie mniej miejsca. */}
      <aside aria-label="Szybki kontakt" className="bg-navy text-xs text-white sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-1.5 sm:h-12 sm:flex-row sm:px-6 sm:py-0 lg:px-8">
          <p className="hidden font-medium tracking-wide text-white/90 sm:block">
            Upadłość konsumencka Chorzów / Śląsk
          </p>

          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-1 sm:w-auto sm:flex-row sm:justify-end sm:gap-6">
            <a
              href={site.email.href}
              className="flex min-w-0 max-w-full items-center gap-1.5 py-0.5 text-white/90 transition-colors duration-200 hover:text-green"
            >
              <Mail className="size-3.5 sm:size-4 text-green shrink-0" aria-hidden="true" />
              <span className="truncate">{site.email.display}</span>
            </a>
            <a
              href={site.phone.href}
              className="flex items-center gap-1.5 py-0.5 text-white/90 transition-colors duration-200 hover:text-green"
            >
              <Phone className="size-3.5 sm:size-4 text-green shrink-0" aria-hidden="true" />
              <span>
                {site.phone.display}{" "}
                <span className="font-medium text-green">– bezpłatna konsultacja</span>
              </span>
            </a>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-mint">
        <div className="relative mx-auto flex h-(--header-h) max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Nawigacja główna" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link href={`/#${s.id}`} data-spy={s.id} className={`block ${desktopLink}`}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 xl:hidden">
            {/* Telefon zawsze pod ręką – najczęstsza akcja na komórce. */}
            <a
              href={site.phone.href}
              className="flex size-10 items-center justify-center rounded-lg bg-green text-navy-900 transition-colors hover:bg-green-light"
            >
              <Phone className="size-5" aria-hidden="true" />
              <span className="sr-only">Zadzwoń: {site.phone.display}</span>
            </a>

            <MobileMenu>
              <nav aria-label="Nawigacja mobilna" className="mx-auto max-w-7xl">
                <ul>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <Link href={`/#${s.id}`} data-spy={s.id} className={mobileLink}>
                        <span>{s.label}</span>
                        <span
                          aria-hidden="true"
                          className="hidden size-1.5 rounded-full bg-green group-aria-[current=location]:block"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-2 sm:mt-4 sm:gap-3">
                <a
                  href={site.email.href}
                  className="flex min-w-0 items-center gap-2 py-1 text-sm font-medium text-ink/80 transition-colors hover:text-navy"
                >
                  <Mail className="size-4 text-green shrink-0" aria-hidden="true" />
                  <span className="truncate">{site.email.display}</span>
                </a>
                <a
                  href={site.phone.href}
                  className="flex items-center gap-2 py-1 text-sm font-semibold text-navy transition-colors hover:text-green-contrast"
                >
                  <Phone className="size-4 text-green shrink-0" aria-hidden="true" />
                  {site.phone.display} (bezpłatna konsultacja)
                </a>
              </div>
            </MobileMenu>
          </div>
        </div>
      </header>

      <ScrollSpy />
    </>
  );
}

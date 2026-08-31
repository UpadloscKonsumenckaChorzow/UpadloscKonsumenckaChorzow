import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";
import { site } from "@/content/site";

const pageLinks = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "FAQ / Pytania", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Kolumna 1: Logo i opis */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Logo Upadłość Konsumencka"
                width={40}
                height={40}
                className="size-9 sm:size-11 object-contain"
              />
              <span className="leading-tight">
                <span className="block font-display text-sm sm:text-base font-semibold tracking-wide">
                  UPADŁOŚĆ <span className="text-green">KONSUMENCKA</span>
                </span>
                <span className="block text-[9px] sm:text-[10px] font-medium tracking-[0.18em] text-white/50">
                  CHORZÓW · ŚLĄSK
                </span>
              </span>
            </Link>

            <p className="mt-3 text-xs sm:mt-5 sm:text-sm leading-relaxed text-white/60 max-w-xs">
              Kompleksowa pomoc w przeprowadzeniu upadłości konsumenckiej.
              Spokojnie, dyskretnie, od A do Z na terenie Śląska i całej Polski.
            </p>

            <div className="mt-4 sm:mt-6">
              <a
                href={site.partner.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block rounded-2xl bg-white p-2 sm:p-2.5 shadow-md border border-white/10 transition-all hover:scale-105"
              >
                <Image
                  src="/expert-partner.webp"
                  alt="Grupa Expert Partner - wiedza i doświadczenie"
                  width={130}
                  height={38}
                  className="h-8 sm:h-10 w-auto object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          </div>

          {/* Kolumna 2: Nawigacja (2 kolumny na mobile) */}
          <div>
            <h3 className="font-display text-sm sm:text-base font-semibold text-green">
              Nawigacja
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4 sm:mt-5 sm:block sm:space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-white/65 transition-colors hover:text-green"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div>
            <h3 className="font-display text-sm sm:text-base font-semibold text-green">
              Kontakt
            </h3>
            <div className="mt-3 space-y-2.5 text-xs sm:mt-5 sm:space-y-4 sm:text-sm text-white/70">
              <a
                href={site.phone.href}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-green"
              >
                <Phone className="size-3.5 sm:size-4 text-green shrink-0" />
                {site.phone.display}
              </a>
              <a
                href={site.email.href}
                className="flex items-center gap-2.5 transition-colors hover:text-green wrap-break-word"
              >
                <Mail className="size-3.5 sm:size-4 text-green shrink-0" />
                {site.email.display}
              </a>
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="size-3.5 sm:size-4 text-green shrink-0 mt-0.5" />
                <span>{site.address.full}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/70 border-t border-white/10 pt-2 sm:pt-3">
                Obsługa stacjonarna oraz zdalna na terenie całego Śląska i
                Polski.
              </p>
            </div>
          </div>
        </div>

        {/* Pasek praw autorskich i polityki */}
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] sm:text-xs text-white/50 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p>
            © 2026 Upadłość Konsumencka Chorzów / Śląsk. Wszelkie prawa
            zastrzeżone. · Część Grupy Expert Partner
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/polityka-prywatnosci"
              className="transition-colors hover:text-white"
            >
              Polityka prywatności
            </Link>

            <CookieSettingsLink />

            <span aria-hidden="true">·</span>
            <span>
              Realizacja:{" "}
              <a
                href={site.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/80 underline underline-offset-2 transition-colors hover:text-green"
              >
                {site.developer.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

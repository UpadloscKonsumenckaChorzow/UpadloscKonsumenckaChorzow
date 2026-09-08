import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";
import { site } from "@/content/site";

// Kotwice zapisane jako "/#sekcja", a nie "#sekcja" – dzięki temu działają
// także ze stopki na podstronach (publikacje, polityka, 404), gdzie tych
// sekcji nie ma. Na stronie głównej <Link> obsłuży to bez przeładowania.
const pageLinks = [
  { label: "Dla kogo", href: "/#dla-kogo" },
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Cennik", href: "/#cennik" },
  { label: "Dlaczego my", href: "/#dlaczego-my" },
  { label: "FAQ / Pytania", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
  // Osobna podstrona – celowo tylko w stopce, nie ma jej w Navbarze.
  { label: "Publikacje", href: "/publikacje" },
];

// Ikony social media – trzymane inline (lucide nie posiada ikon brandowych)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.4a2.59 2.59 0 0 1-2.6 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.78.12v-3.2a5.8 5.8 0 0 0-.78-.06 5.7 5.7 0 1 0 5.7 5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z" />
    </svg>
  );
}

// Puste wpisy w site.socials są odfiltrowane, więc sekcja pojawi się
// automatycznie, gdy w site.ts uzupełnisz linki URL.
const socialLinks = [
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "TikTok", href: site.socials.tiktok, icon: TikTokIcon },
].filter((s) => s.href.length > 0);

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

          {/* Kolumna 2: Nawigacja */}
          <div>
            <h3 className="font-display text-sm sm:text-base font-semibold text-green">
              Nawigacja
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4 sm:mt-5 sm:block sm:space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs sm:text-sm text-white/65 transition-colors hover:text-green"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 3: Kontakt i Social Media */}
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

            {socialLinks.length > 0 && (
              <div className="mt-4 sm:mt-6">
                <p className="text-[11px] sm:text-xs font-semibold text-white/50">
                  Znajdź nas w sieci
                </p>
                <ul className="mt-2.5 flex items-center gap-2.5 sm:mt-3 sm:gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${s.label} – otwiera się w nowej karcie`}
                          className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-green/50 hover:bg-white/10 hover:text-green sm:size-10"
                        >
                          <Icon className="size-4 sm:size-4.5" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
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

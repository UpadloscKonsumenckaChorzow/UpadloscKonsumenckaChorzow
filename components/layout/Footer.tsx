import Link from "next/link"; // <-- DODAJ TEN IMPORT NA GÓRZE PLIKU
import { Phone, Mail, MapPin } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 2.35v3.1a8.6 8.6 0 0 1-4.5-1.28v6.53a6.2 6.2 0 1 1-6.2-6.2c.33 0 .66.03.98.08v3.2a3.1 3.1 0 1 0 2.12 2.94V3h3.1Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 8.5V6.8c0-.7.2-1.1 1.2-1.1H16.5V3.1C16.1 3 15.2 3 14.3 3c-2 0-3.4 1.2-3.4 3.5v2H8.5V11h2.4v8h2.9v-8h2.2l.4-2.5H14Z" />
    </svg>
  );
}

const pageLinks = [
  { label: "Upadłość Konsumencka", href: "#upadlosc-konsumencka" },
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "FAQ / Pytania", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:py-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* KOLUMNA 1: LOGO + NAPIS, OPIS, SOCIAL MEDIA, LOGO EXPERT PARTNER */}
          <div>
            <a href="#" className="flex items-center gap-3">
              {/* TWOJE LOGO / SYGNET */}
              <img
                src="/logo.svg" /* Jeśli używasz PNG, zmień na: /logo.png */
                alt="Logo Upadłość Konsumencka"
                className="size-11 object-contain"
              />

              {/* NAPIS OBOK LOGO */}
              <span className="leading-tight">
                <span className="block font-display text-base font-semibold tracking-wide">
                  UPADŁOŚĆ <span className="text-gold">KONSUMENCKA</span>
                </span>
                <span className="block text-[10px] font-medium tracking-[0.18em] text-white/50">
                  CHORZÓW · ŚLĄSK
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Kompleksowa pomoc w przeprowadzeniu upadłości konsumenckiej.
              Spokojnie, dyskretnie, od A do Z na terenie Śląska i całej Polski.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-gold hover:text-navy-900"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>

            {/* LINK DO PARTNERA */}
            <div className="mt-6">
              <a
                href="https://upadlosci-ekspert.pl/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block rounded-2xl bg-white p-2.5 shadow-md border border-white/10 transition-all hover:scale-105"
              >
                <img
                  src="/expert-partner.webp"
                  alt="Grupa Expert Partner - wiedza i doświadczenie"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* KOLUMNA 2: MENU NAWIGACJI */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold">
              Nawigacja
            </h3>
            <ul className="mt-5 space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLUMNA 3: DANE KONTAKTOWE */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold">
              Kontakt
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a
                href="tel:515515314"
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-gold"
              >
                <Phone className="size-4 text-gold shrink-0" />
                515 515 314
              </a>
              <a
                href="mailto:kontakt@kancelaria.pl"
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Mail className="size-4 text-gold shrink-0" />
                kontakt@kancelaria.pl
              </a>
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
                <span>ul. Wolności 12, 41-500 Chorzów</span>
              </div>
              <p className="text-xs text-white/50 border-t border-white/10 pt-3">
                Obsługa stacjonarna oraz zdalna na terenie całego Śląska i
                Polski.
              </p>
            </div>
          </div>
        </div>

        {/* DOLNY PASEK COPYRIGHT */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Upadłość Konsumencka Chorzów / Śląsk. Wszelkie prawa
            zastrzeżone. · Część Grupy Expert Partner
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* PODPIĘTY LINK DO POLITYKI PRYWATNOŚCI: */}
            <Link
              href="/polityka-prywatnosci"
              className="transition-colors hover:text-white"
            >
              Polityka prywatności
            </Link>

            {/* NOTA PRAWNA ZAMIAST SKLEPOWEGO REGULAMINU: */}
            <a
              href="#dlaczego-my"
              className="transition-colors hover:text-white"
            >
              Nota prawna
            </a>

            <span>·</span>
            <span>
              Stworzone przez{" "}
              <a
                href="https://www.instagram.com/filip_wrona/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/80 underline underline-offset-2 transition-colors hover:text-gold"
              >
                Filip Wrona
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

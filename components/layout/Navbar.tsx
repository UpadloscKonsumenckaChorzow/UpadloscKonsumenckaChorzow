"use client";

import { useState } from "react";
import { Phone, Menu, X, Mail } from "lucide-react";

const navLinks = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "FAQ / Pytania", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 shrink-0">
      {/* TWOJE LOGO / SYGNET */}
      <img
        src="/logo.svg" /* Jeśli używasz PNG, zmień na: /logo.png */
        alt="Logo Upadłość Konsumencka"
        className="size-10 object-contain"
      />

      {/* NAPIS OBOK LOGO */}
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold tracking-wide text-ink sm:text-lg">
          UPADŁOŚĆ <span className="text-gold">KONSUMENCKA</span>
        </span>
        <span className="block text-[10px] font-medium tracking-[0.18em] text-ink/60">
          CHORZÓW · ŚLĄSK
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      {/* 1. PIERWSZY BANER NA GÓRZE (ustawiony na h-20 / 80px) */}
      <div className="bg-navy text-xs text-white sm:text-sm">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-col items-center justify-between gap-2 px-5 py-3 sm:h-20 sm:flex-row sm:py-0 lg:px-8">
          <div className="font-medium tracking-wide text-white/90">
            Upadłość konsumencka Chorzów / Śląsk
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:kontakt@kancelaria.pl"
              className="flex items-center gap-2 text-white/90 transition-colors hover:text-gold"
            >
              <Mail className="size-4 text-gold" />
              <span>kontakt@kancelaria.pl</span>
            </a>
            <a
              href="tel:+48515515314"
              className="flex items-center gap-2 text-white/90 transition-colors hover:text-gold"
            >
              <Phone className="size-4 text-gold" />
              <span>
                515 515 314{" "}
                <span className="font-medium text-gold">
                  – bezpłatna konsultacja
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. DRUGI BANER Z ZAKŁADKAMI (pozostawiony na h-20 / 80px) */}
      <div className="border-b border-black/5 bg-cream">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-4 xl:flex xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-ink/80 transition-colors hover:text-navy xl:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg text-navy xl:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILNE */}
      {open && (
        <div className="border-t border-black/5 bg-cream px-5 pb-6 pt-2 xl:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3 text-sm font-medium text-ink/80 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="mailto:kontakt@kancelaria.pl"
              className="flex items-center gap-2 text-sm font-medium text-ink/80"
            >
              <Mail className="size-4 text-gold" />
              kontakt@kancelaria.pl
            </a>
            <a
              href="tel:+48515515314"
              className="flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <Phone className="size-4 text-gold" />
              515 515 314 (bezpłatna konsultacja)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

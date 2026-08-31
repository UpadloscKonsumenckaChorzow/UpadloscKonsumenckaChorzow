"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, Mail } from "lucide-react";
import { site } from "@/content/site";

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
    <a
      href="/"
      className="flex items-center gap-3 shrink-0 group"
      aria-label="Strona główna"
    >
      <Image
        src="/logo.svg"
        alt="Logo Kancelarii Upadłość Konsumencka"
        width={40}
        height={40}
        priority
        className="size-10 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold tracking-wide text-ink sm:text-lg">
          UPADŁOŚĆ <span className="text-gold-contrast">KONSUMENCKA</span>
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
  const [activeSection, setActiveSection] = useState<string>("");

  // Podświetlanie sekcji w trakcie scrollowania (ScrollSpy)
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.substring(1));

    function handleScroll() {
      // Obsługa dojechania na sam dół strony (ostatnia sekcja - Kontakt)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection(navLinks[navLinks.length - 1].href);
        return;
      }

      const scrollOffset = 160; // Wysokość paska + margines aktywacji
      let currentSection = "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= scrollOffset) {
            currentSection = `#${id}`;
          }
        }
      }

      setActiveSection(currentSection);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Obsługa zamykania menu klawiszem ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-black/5 transition-all">
      {/* Górny pasek informacyjny */}
      <div className="bg-navy text-xs text-white sm:text-sm">
        <div className="mx-auto flex min-h-12 max-w-7xl flex-col items-center justify-between gap-2 px-5 py-2 sm:h-12 sm:flex-row sm:py-0 lg:px-8">
          <div className="font-medium tracking-wide text-white/90">
            Upadłość konsumencka Chorzów / Śląsk
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={site.email.href}
              className="flex items-center gap-2 text-white/90 transition-all duration-200 hover:text-gold hover:translate-x-0.5"
            >
              <Mail className="size-4 text-gold" />
              <span>{site.email.display}</span>
            </a>
            <a
              href={site.phone.href}
              className="flex items-center gap-2 text-white/90 transition-all duration-200 hover:text-gold hover:translate-x-0.5"
            >
              <Phone className="size-4 text-gold" />
              <span>
                {site.phone.display}{" "}
                <span className="font-medium text-gold">
                  – bezpłatna konsultacja
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Główny pasek nawigacyjny */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        {/* Nawigacja desktop z animacją i aktywnym stanem */}
        <nav
          aria-label="Nawigacja główna"
          className="hidden items-center gap-4 xl:flex xl:gap-7"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-xs xl:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-navy font-semibold"
                    : "text-ink/75 hover:text-navy"
                }`}
              >
                {link.label}

                {/* Subtelna złota linia aktywacji i hover */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Przycisk menu mobilnego */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg text-navy xl:hidden cursor-pointer transition-colors hover:bg-black/5"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Menu mobilne */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-black/5 bg-cream px-5 pb-6 pt-2 xl:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Nawigacja mobilna" className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-navy font-semibold pl-2 bg-black/2"
                      : "text-ink/80 hover:text-navy hover:pl-2"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="size-1.5 rounded-full bg-gold" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.email.href}
              className="flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              <Mail className="size-4 text-gold" />
              {site.email.display}
            </a>
            <a
              href={site.phone.href}
              className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-contrast"
            >
              <Phone className="size-4 text-gold" />
              {site.phone.display} (bezpłatna konsultacja)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

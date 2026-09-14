"use client";

import { useState, useEffect, useRef } from "react";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

/**
 * Licznik odliczający do kwoty, uruchamiany dopiero gdy element wjedzie
 * na ekran. Stan początkowy to pełna kwota, dzięki czemu poprawną wartość
 * widzi zarówno Google, jak i osoby z wyłączonym JavaScriptem.
 */
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(target);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    // Osoby, które w systemie wyłączyły animacje, widzą od razu pełną kwotę.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrameId = 0;
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        // Zerowanie dopiero tutaj, w chwili startu animacji. Gdyby działo
        // się przy wczytaniu strony, kwota mrugałaby z 2900 na 0.
        setCount(0);
        animationFrameId = window.requestAnimationFrame(step);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
}

const features = [
  "Bezpłatna wstępna analiza dokumentów",
  "Prowadzenie sprawy od A do Z",
  "Stała dostępność i opieka doradcy",
  "Kompleksowa obsługa pism przed sądem i syndykiem",
  "Możliwość elastycznej płatności w ratach",
];

const PRICE_FROM = 2900;

export function Pricing() {
  return (
    // scroll-mt-40: przyklejony nagłówek ma ok. 110–130 px, przy mniejszym
    // odstępie tytuł sekcji chowa się pod nim po kliknięciu w menu.
    <section id="cennik" className="scroll-mt-40 bg-mint py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          <CreditCard className="size-4 text-green" aria-hidden="true" />
          Cennik
        </p>

        <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
          Proste zasady, brak ukrytych kosztów
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:mt-4 sm:text-base lg:text-lg">
          Konsultacja i analiza dokumentów są bezpłatne. Koszt prowadzenia
          sprawy ustalamy indywidualnie i potwierdzamy na piśmie.
        </p>

        <div className="mx-auto mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white text-left shadow-xl sm:mt-12">
          {/* Nagłówek karty z ceną */}
          <div className="bg-navy px-5 py-6 text-center text-white sm:px-12 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Prowadzenie sprawy
            </p>

            {/* Czytnik ekranu odczytuje pełną kwotę raz, zamiast ogłaszać
                każdą liczbę pojawiającą się w trakcie animacji. */}
            <div className="mt-2 font-display font-bold text-white sm:mt-3">
              <span className="sr-only">od {PRICE_FROM} zł</span>
              <span aria-hidden="true">
                <span className="align-top text-lg font-normal text-green sm:text-2xl">
                  od{" "}
                </span>
                <span className="text-4xl text-green sm:text-6xl">
                  <AnimatedCounter target={PRICE_FROM} />
                </span>
                <span className="text-2xl text-green sm:text-4xl"> zł</span>
              </span>
            </div>

            <p className="mt-1.5 text-sm font-medium text-white/85 sm:mt-3">
              z możliwością rozłożenia na dogodne raty
            </p>
          </div>

          {/* Ciało karty z listą */}
          <div className="p-5 sm:px-10 sm:py-10">
            <ul className="space-y-3 sm:space-y-4">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-ink/85 sm:gap-3.5 sm:text-base"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-green sm:size-5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-navy/5 p-3.5 text-sm leading-relaxed text-ink/75 border border-black/5 sm:mt-8 sm:gap-3 sm:p-4">
              <ShieldCheck
                className="size-4 shrink-0 text-navy mt-0.5 sm:size-5"
                aria-hidden="true"
              />
              <p>
                Ostateczną cenę ustalamy indywidualnie i potwierdzamy pisemnie
                przed rozpoczęciem współpracy – bez ukrytych opłat.
              </p>
            </div>

            <a
              href="#kontakt"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.02] shadow-md sm:mt-8 sm:px-6 sm:py-4 sm:text-base"
            >
              Umów bezpłatną konsultację
              <ArrowRight
                className="size-4 sm:size-5 text-green"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

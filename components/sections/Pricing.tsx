"use client";

import { useState, useEffect, useRef } from "react";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// ANIMOWANY LICZNIK KWOTY (odlicza od 0 do podanej kwoty po przewinięciu)
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTimestamp: number | null = null;
          const duration = 1600; // czas trwania animacji: 1.6s

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );
            // Funkcja spowalniająca pod koniec animacji
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
}

// 5 punktów wyznaczonych przez klienta
const features = [
  "Bezpłatna konsultacja i analiza",
  "Prowadzimy sprawę od A do Z",
  "Jesteśmy cały czas dostępni dla Ciebie",
  "Administracyjna obsługa postępowań przed sądem i syndykiem",
  "Możliwość płatności w ratach",
];

export function Pricing() {
  return (
    <section id="cennik" className="scroll-mt-24 bg-cream py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          <CreditCard className="size-4 text-gold" />
          Cennik
        </p>

        {/* NAGŁÓWEK GŁÓWNY */}
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          Proste zasady, brak ukrytych kosztów
        </h2>

        {/* PODTYTUŁ */}
        <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
          Konsultacja i analiza dokumentów są bezpłatne. Koszt prowadzenia
          sprawy ustalam indywidualnie i potwierdzam na piśmie.
        </p>

        {/* KARTA CENNIKA */}
        <div className="mx-auto mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white text-left shadow-xl">
          {/* GÓRNY NAGŁÓWEK KARTY Z CENA I ANIMOWANYM LICZNIKIEM */}
          <div className="bg-navy px-8 py-10 text-center text-white sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Prowadzenie sprawy
            </p>
            <div className="mt-3 font-display font-bold text-white">
              <span className="align-top text-2xl font-normal text-gold">
                od{" "}
              </span>
              <span className="text-5xl sm:text-6xl text-gold">
                <AnimatedCounter target={2900} />
              </span>
              <span className="text-3xl sm:text-4xl text-gold"> zł</span>
            </div>
            <p className="mt-3 text-sm font-medium text-white/80">
              z możliwością rozłożenia na raty
            </p>
          </div>

          {/* LISTA ZALET */}
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <ul className="space-y-4">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-base font-medium text-ink/85"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* INFORMACJA NA DOLE KARTY */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-navy/5 p-4 text-xs sm:text-sm leading-relaxed text-ink/75 border border-black/5">
              <ShieldCheck className="size-5 shrink-0 text-navy mt-0.5" />
              <p>
                Ostateczną cenę ustalamy indywidualnie i potwierdzamy pisemnie
                przed rozpoczęciem współpracy, bez ukrytych opłat.
              </p>
            </div>

            {/* PRZYCISK CTA */}
            <a
              href="#kontakt"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-base font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.02] shadow-md"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-5 text-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
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
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animationFrameId = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
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

export function Pricing() {
  return (
    <section id="cennik" className="scroll-mt-24 bg-mint py-8 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          <CreditCard className="size-4 text-green" />
          Cennik
        </p>

        <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
          Proste zasady, brak ukrytych kosztów
        </h2>

        <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:mt-4 sm:text-base lg:text-lg">
          Konsultacja i analiza dokumentów są bezpłatne. Koszt prowadzenia
          sprawy ustalamy indywidualnie i potwierdzamy na piśmie.
        </p>

        <div className="mx-auto mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white text-left shadow-xl sm:mt-12">
          {/* Nagłówek karty z ceną */}
          <div className="bg-navy px-5 py-6 text-center text-white sm:px-12 sm:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green sm:text-xs">
              Prowadzenie sprawy
            </p>
            <div className="mt-2 font-display font-bold text-white sm:mt-3">
              <span className="align-top text-lg font-normal text-green sm:text-2xl">
                od{" "}
              </span>
              <span className="text-4xl text-green sm:text-6xl">
                <AnimatedCounter target={2900} />
              </span>
              <span className="text-2xl text-green sm:text-4xl"> zł</span>
            </div>
            <p className="mt-1.5 text-xs font-medium text-white/80 sm:mt-3 sm:text-sm">
              z możliwością rozłożenia na dogodne raty
            </p>
          </div>

          {/* Ciało karty z listą */}
          <div className="p-4 sm:px-10 sm:py-10">
            <ul className="space-y-2.5 sm:space-y-4">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs font-medium text-ink/85 sm:gap-3.5 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green sm:size-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-navy/5 p-3 text-xs leading-relaxed text-ink/75 border border-black/5 sm:mt-8 sm:gap-3 sm:p-4 sm:text-sm">
              <ShieldCheck className="size-4 shrink-0 text-navy mt-0.5 sm:size-5" />
              <p>
                Ostateczną cenę ustalamy indywidualnie i gwarantujemy pisemnie
                przed rozpoczęciem współpracy – bez ukrytych opłat.
              </p>
            </div>

            <a
              href="#kontakt"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.02] shadow-md sm:mt-8 sm:px-6 sm:py-4 sm:text-base"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-4 sm:size-5 text-green" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

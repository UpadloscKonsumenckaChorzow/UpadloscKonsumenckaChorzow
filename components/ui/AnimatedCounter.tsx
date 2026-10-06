"use client";

import { useEffect, useRef } from "react";

/**
 * Licznik odliczający do kwoty, uruchamiany, gdy element wjedzie na ekran.
 * HTML z serwera zawiera od razu pełną kwotę (widzi ją Google i osoby bez
 * JavaScriptu). Animacja zmienia tylko textContent – bez ponownego
 * renderowania Reacta 60 razy na sekundę.
 */
export function AnimatedCounter({ target, duration = 1600 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    let start: number | null = null;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
      else el.textContent = String(target);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return <span ref={ref}>{target}</span>;
}

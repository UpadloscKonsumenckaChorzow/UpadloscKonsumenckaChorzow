"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Podświetla w menu sekcję, którą użytkownik właśnie ogląda.
 * Nie renderuje niczego – ustawia aria-current="location" na linkach
 * z atrybutem data-spy (wygląd zapewniają klasy aria-[current=location]).
 * Dzięki temu całe menu pozostaje komponentem serwerowym.
 */
export function ScrollSpy() {
  const pathname = usePathname();

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-spy]"));
    const ids = [...new Set(links.map((link) => link.dataset.spy!))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const mark = (activeId: string) => {
      for (const link of links) {
        if (link.dataset.spy === activeId) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };

    // Podstrony nie mają sekcji – nic nie podświetlamy.
    if (sections.length === 0) {
      mark("");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 40;
      if (atBottom) return mark(sections[sections.length - 1].id);

      // Sekcja aktywna = ostatnia, której górna krawędź schowała się tuż
      // pod przyklejonym nagłówkiem.
      const header = document.querySelector("header");
      const line = (header?.getBoundingClientRect().bottom ?? 0) + 48;
      let active = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) active = section.id;
      }
      mark(active);
    };
    // Odczyt pozycji najwyżej raz na klatkę.
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}

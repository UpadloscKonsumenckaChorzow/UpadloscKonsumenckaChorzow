"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Gtag = (command: "event", name: string, params?: Record<string, string>) => void;

/** Wysyła zdarzenie do GA4 tylko wtedy, gdy GA działa (czyli po zgodzie na analitykę). */
function track(name: string, params: Record<string, string>): void {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/**
 * Zdarzenia kontaktu w GA4:
 * - phone_click: kliknięcie w numer telefonu (link tel:),
 * - email_click: kliknięcie w adres e-mail (link mailto:),
 * - generate_lead: wejście na /dziekujemy, czyli wysłany formularz.
 * Dzięki nim w raportach widać, ile kontaktów dają Google, reklamy i inne źródła.
 */
export function ContactTracking() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        track("phone_click", { link_url: href, page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_url: href, page_path: window.location.pathname });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (pathname !== "/dziekujemy") return;
    // GA ładuje się asynchronicznie, więc dajemy mu chwilę po wejściu na stronę.
    const timer = window.setTimeout(() => track("generate_lead", { form_name: "kontakt" }), 1500);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsent } from "@/context/CookieConsentContext";

// Ciasteczka zakładane przez Google Analytics 4.
function isGaCookie(name: string): boolean {
  return (
    name === "_ga" ||
    name.startsWith("_ga_") ||
    name === "_gid" ||
    name === "_gat"
  );
}

// Usuwa ciasteczka GA. Google zapisuje je na domenie głównej
// (.upadlosckonsumenckachorzow.pl), więc kasujemy je w kilku wariantach domeny.
function removeGaCookies(): void {
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = [undefined, host, `.${host}`, `.${rootDomain}`];

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !isGaCookie(name)) continue;

    for (const domain of domains) {
      document.cookie =
        `${name}=; Max-Age=0; path=/` + (domain ? `; domain=${domain}` : "");
    }
  }
}

// Oficjalny wyłącznik Google: gdy window["ga-disable-<ID>"] === true,
// gtag.js przestaje wysyłać dane, nawet jeśli skrypt jest już załadowany.
function setGaDisabled(gaId: string, disabled: boolean): void {
  (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] =
    disabled;
}

export function AnalyticsLoader({ gaId }: { gaId?: string }) {
  const { consent } = useCookieConsent();
  const hasConsent = consent?.analytics === true;

  // Zapamiętuje, czy w tej wizycie zgoda była już udzielona. Dzięki temu
  // ciasteczka kasujemy tylko przy faktycznym cofnięciu zgody, a nie przy
  // każdym wczytaniu strony, zanim kontekst odczyta zapisaną zgodę.
  const wasGranted = useRef(false);

  useEffect(() => {
    if (!gaId) return;

    if (hasConsent) {
      setGaDisabled(gaId, false);
      wasGranted.current = true;
    } else if (wasGranted.current) {
      // Użytkownik cofnął zgodę w trakcie wizyty: zatrzymujemy wysyłanie
      // danych i usuwamy ciasteczka, które GA zdążył założyć.
      setGaDisabled(gaId, true);
      removeGaCookies();
      wasGranted.current = false;
    }
  }, [gaId, hasConsent]);

  if (!gaId || !hasConsent) return null;

  return <GoogleAnalytics gaId={gaId} />;
}

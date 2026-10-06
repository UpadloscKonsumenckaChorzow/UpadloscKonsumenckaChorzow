"use client";

import { useEffect, useRef } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "@/lib/consent";

// Ciasteczka zakładane przez Google Analytics 4.
function isGaCookie(name: string): boolean {
  return name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat";
}

// GA zapisuje ciasteczka na domenie głównej, więc kasujemy kilka wariantów.
function removeGaCookies(): void {
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = [undefined, host, `.${host}`, `.${rootDomain}`];

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !isGaCookie(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

// Oficjalny wyłącznik: window["ga-disable-<ID>"] = true zatrzymuje wysyłkę.
function setGaDisabled(gaId: string, disabled: boolean): void {
  (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = disabled;
}

/** Skrypt GA ładuje się dopiero po zgodzie. Cofnięcie zgody go wyłącza. */
export function AnalyticsLoader({ gaId }: { gaId?: string }) {
  const { consent } = useConsent();
  const hasConsent = consent?.analytics === true;
  const wasGranted = useRef(false);

  useEffect(() => {
    if (!gaId) return;
    if (hasConsent) {
      setGaDisabled(gaId, false);
      wasGranted.current = true;
    } else if (wasGranted.current) {
      setGaDisabled(gaId, true);
      removeGaCookies();
      wasGranted.current = false;
    }
  }, [gaId, hasConsent]);

  if (!gaId || !hasConsent) return null;
  return <GoogleAnalytics gaId={gaId} />;
}

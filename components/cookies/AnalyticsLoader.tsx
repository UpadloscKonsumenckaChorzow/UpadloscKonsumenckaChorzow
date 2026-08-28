"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsent } from "@/context/CookieConsentContext";

// KLUCZOWE dla zgodności z RODO/ePrivacy: skrypt Google Analytics
// NIE może się załadować, dopóki użytkownik nie wyrazi na to zgody.
// Renderowanie warunkowe (zamiast np. blokowania przez CSS) gwarantuje,
// że tag <script> w ogóle nie trafia do DOM przed zgodą.
export function AnalyticsLoader({ gaId }: { gaId: string }) {
  const { consent } = useCookieConsent();

  if (!consent?.analytics) return null;

  return <GoogleAnalytics gaId={gaId} />;
}

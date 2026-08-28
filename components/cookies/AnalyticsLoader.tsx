"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsent } from "@/context/CookieConsentContext";

export function AnalyticsLoader({ gaId }: { gaId?: string }) {
  const { consent } = useCookieConsent();

  if (!gaId || !consent?.analytics) return null;

  return <GoogleAnalytics gaId={gaId} />;
}

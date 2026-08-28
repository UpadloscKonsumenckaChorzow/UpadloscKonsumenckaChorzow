"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";

export function CookieSettingsLink() {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className="cursor-pointer transition-colors hover:text-white"
    >
      Ustawienia cookies
    </button>
  );
}

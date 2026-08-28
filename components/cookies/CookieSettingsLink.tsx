"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";

// Wymóg RODO/ePrivacy: użytkownik musi móc w każdej chwili
// zmienić lub wycofać zgodę na cookies równie łatwo, jak ją wyraził.
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

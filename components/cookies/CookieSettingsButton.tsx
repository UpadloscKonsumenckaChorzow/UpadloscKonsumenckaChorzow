"use client";

import { consentActions } from "@/lib/consent";

/** Przycisk w stopce – ponowne otwarcie ustawień cookies (cofnięcie zgody). */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={consentActions.openSettings} className={className}>
      Ustawienia cookies
    </button>
  );
}

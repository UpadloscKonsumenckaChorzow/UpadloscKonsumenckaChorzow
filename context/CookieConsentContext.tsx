"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// ===========================================================================
// TYPY
// ===========================================================================

export type ConsentCategories = {
  necessary: true; // zawsze true - cookies niezbędne nie wymagają zgody
  analytics: boolean; // Google Analytics
};

type StoredConsent = ConsentCategories & {
  version: number;
  timestamp: string;
};

// Podbij tę wartość, jeśli kiedyś zmienisz kategorie cookies
// (np. dodasz marketing) - spowoduje to ponowne zapytanie wszystkich userów.
const CONSENT_VERSION = 1;
const CONSENT_STORAGE_KEY = "cookie_consent";

type CookieConsentContextValue = {
  consent: ConsentCategories | null;
  hasChosen: boolean;
  isBannerOpen: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: Omit<ConsentCategories, "necessary">) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

// ===========================================================================
// POMOCNICZE FUNKCJE STORAGE
// ===========================================================================

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    // Jeśli wersja się nie zgadza (np. dodaliśmy nową kategorię cookies),
    // traktujemy to jako brak zgody i pytamy ponownie.
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStoredConsent(consent: ConsentCategories) {
  const payload: StoredConsent = {
    ...consent,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
}

// ===========================================================================
// PROVIDER
// ===========================================================================

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories | null>(null);
  const [hasChosen, setHasChosen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Odczyt zgody z localStorage TYLKO po zamontowaniu na kliencie
  // (unikamy niezgodności SSR/CSR - hydration mismatch).
  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent({ necessary: true, analytics: stored.analytics });
      setHasChosen(true);
      setIsBannerOpen(false);
    } else {
      setIsBannerOpen(true);
    }
  }, []);

  const persist = useCallback((next: ConsentCategories) => {
    setConsent(next);
    setHasChosen(true);
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
    writeStoredConsent(next);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true });
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist({ necessary: true, analytics: false });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs: Omit<ConsentCategories, "necessary">) => {
      persist({ necessary: true, ...prefs });
    },
    [persist],
  );

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => {
    // Zamknięcie "X" bez zapisania wyboru NIE zapisuje zgody -
    // banner (lub okno ustawień) pojawi się ponownie przy odświeżeniu,
    // dopóki użytkownik nie dokona świadomego wyboru.
    setIsSettingsOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasChosen,
        isBannerOpen,
        isSettingsOpen,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openSettings,
        closeSettings,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent musi być używany wewnątrz <CookieConsentProvider>",
    );
  }
  return ctx;
}

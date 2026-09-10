"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
};

type StoredConsent = ConsentCategories & {
  version: number;
  timestamp: string;
};

// Zwiększ tę liczbę (np. na 2), jeśli dodasz nową kategorię cookies,
// np. marketingowe. Wszyscy użytkownicy zobaczą wtedy baner ponownie.
const CONSENT_VERSION = 1;
const CONSENT_STORAGE_KEY = "cookie_consent";

// Po tym czasie pytamy o zgodę ponownie. 12 miesięcy to przyjęta dobra praktyka.
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

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

// Odczytuje zapisaną zgodę. Zwraca null, gdy zgody nie ma, jest uszkodzona,
// pochodzi ze starszej wersji banera albo jest starsza niż 12 miesięcy.
function readStoredConsent(): ConsentCategories | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    const stored = parsed as Partial<StoredConsent>;
    if (stored.version !== CONSENT_VERSION) return null;

    const savedAt = Date.parse(stored.timestamp ?? "");
    if (Number.isNaN(savedAt) || Date.now() - savedAt > CONSENT_MAX_AGE_MS) {
      return null;
    }

    // Zgoda liczy się tylko przy wartości dokładnie true. Wszystko inne
    // (np. ręcznie zmieniony wpis) traktujemy jako brak zgody.
    return { necessary: true, analytics: stored.analytics === true };
  } catch {
    return null;
  }
}

function writeStoredConsent(consent: ConsentCategories): void {
  try {
    const payload: StoredConsent = {
      ...consent,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Przeglądarka blokuje zapis (np. wyłączone cookies lub tryb prywatny).
    // Wybór działa do końca wizyty, ale nie zostanie zapamiętany.
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories | null>(null);
  const [hasChosen, setHasChosen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const applyStoredConsent = useCallback(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      setHasChosen(true);
      setIsBannerOpen(false);
    } else {
      setConsent(null);
      setHasChosen(false);
      setIsBannerOpen(true);
    }
  }, []);

  useEffect(() => {
    // localStorage nie istnieje na serwerze, więc zgodę wczytujemy
    // dopiero w przeglądarce, po załadowaniu strony.
    applyStoredConsent();

    // Zmiana zgody w innej karcie przeglądarki od razu obowiązuje też tutaj.
    const onStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_STORAGE_KEY || event.key === null) {
        applyStoredConsent();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyStoredConsent]);

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
      persist({ necessary: true, analytics: prefs.analytics === true });
    },
    [persist],
  );

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  // Obiekt tworzony ponownie tylko wtedy, gdy coś się faktycznie zmieni.
  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasChosen,
      isBannerOpen,
      isSettingsOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [
      consent,
      hasChosen,
      isBannerOpen,
      isSettingsOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openSettings,
      closeSettings,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
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

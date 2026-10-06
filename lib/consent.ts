/**
 * Magazyn zgód cookies – bez Reactowego kontekstu i bez opakowywania
 * całej aplikacji w komponent kliencki. Każdy komponent, który potrzebuje
 * zgody (baner, analityka, przycisk w stopce), subskrybuje go osobno.
 *
 * Wybór jest zapisywany w localStorage pod kluczem "cookie_consent"
 * (opisane w polityce prywatności, pkt 8.2).
 */
import { useSyncExternalStore } from "react";

export type Consent = {
  necessary: true;
  analytics: boolean;
};

type StoredConsent = Consent & { version: number; timestamp: string };

type ConsentState = {
  /** false do momentu odczytu localStorage w przeglądarce. */
  ready: boolean;
  consent: Consent | null;
  settingsOpen: boolean;
};

// Zwiększ (np. na 2) po dodaniu nowej kategorii cookies – wszyscy
// zobaczą baner ponownie.
const CONSENT_VERSION = 1;
const STORAGE_KEY = "cookie_consent";
// Po 12 miesiącach pytamy o zgodę ponownie.
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

const SERVER_STATE: ConsentState = {
  ready: false,
  consent: null,
  settingsOpen: false,
};

let state: ConsentState = SERVER_STATE;
let initialized = false;
const listeners = new Set<() => void>();

function setState(patch: Partial<ConsentState>) {
  state = { ...state, ...patch };
  for (const listener of listeners) listener();
}

function readStored(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as Partial<StoredConsent> | null;
    if (!stored || stored.version !== CONSENT_VERSION) return null;
    const savedAt = Date.parse(stored.timestamp ?? "");
    if (Number.isNaN(savedAt) || Date.now() - savedAt > MAX_AGE_MS) return null;
    // Zgoda liczy się tylko przy wartości dokładnie true.
    return { necessary: true, analytics: stored.analytics === true };
  } catch {
    return null;
  }
}

function init() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  state = { ...state, ready: true, consent: readStored() };

  // Zmiana zgody w innej karcie od razu obowiązuje też tutaj.
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      setState({ consent: readStored() });
    }
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  init();
  return state;
}

function getServerSnapshot() {
  return SERVER_STATE;
}

/** Aktualny stan zgód. Na serwerze i przed hydracją: { ready: false }. */
export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function persist(consent: Consent) {
  try {
    const payload: StoredConsent = {
      ...consent,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Zapis zablokowany (tryb prywatny itp.) – wybór działa do końca wizyty.
  }
  setState({ consent, settingsOpen: false });
}

export const consentActions = {
  acceptAll: () => persist({ necessary: true, analytics: true }),
  rejectAll: () => persist({ necessary: true, analytics: false }),
  save: (analytics: boolean) =>
    persist({ necessary: true, analytics: analytics === true }),
  openSettings: () => setState({ settingsOpen: true }),
  closeSettings: () => setState({ settingsOpen: false }),
};

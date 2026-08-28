"use client";

import { useState } from "react";
import { Cookie, ShieldCheck, BarChart3, X, Settings2 } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";

export function CookieBanner() {
  const {
    consent,
    isBannerOpen,
    isSettingsOpen,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  // Lokalny "roboczy" stan przełącznika w oknie ustawień.
  // Domyślnie wyłączony (brak zgody), dopóki user go nie zaznaczy - zgodnie
  // z zasadą "opt-in", a nie "opt-out".
  const [analyticsDraft, setAnalyticsDraft] = useState(
    consent?.analytics ?? false,
  );

  if (!isBannerOpen && !isSettingsOpen) return null;

  return (
    <>
      {/* ============================== BANER ============================== */}
      {isBannerOpen && !isSettingsOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Zgoda na pliki cookie"
          className="fixed inset-x-0 bottom-0 z-100 animate-in slide-in-from-bottom-4 fade-in duration-300 px-3 pb-3 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-navy shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            {/* Cienki złoty akcent na górze karty */}
            <div className="h-1 w-full bg-linear-to-r from-gold via-gold-light to-gold" />

            <div className="flex flex-col gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              {/* TEKST */}
              <div className="flex items-start gap-4 lg:items-center">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/20">
                  <Cookie className="size-6" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-base font-bold text-white sm:text-lg">
                    Szanujemy Twoją prywatność
                  </h2>
                  <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-white/65 sm:text-sm">
                    Cookies niezbędne do działania strony stosujemy zawsze.
                    Analitykę (Google Analytics) włączamy wyłącznie za Twoją
                    zgodą.{" "}
                    <a
                      href="/polityka-prywatnosci"
                      className="whitespace-nowrap font-medium text-gold underline underline-offset-2 hover:text-gold-light"
                    >
                      Polityka Prywatności
                    </a>
                  </p>
                </div>
              </div>

              {/* PRZYCISKI */}
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center lg:justify-end">
                <button
                  type="button"
                  onClick={openSettings}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white sm:text-sm"
                >
                  <Settings2 className="size-4" />
                  Ustawienia
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10 sm:text-sm"
                >
                  Odrzuć niekonieczne
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gold px-6 py-3 text-xs font-semibold text-navy-900 shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:scale-[1.03] sm:text-sm"
                >
                  Akceptuj wszystkie
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================= OKNO USTAWIEŃ ========================= */}
      {isSettingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ustawienia plików cookie"
          className="fixed inset-0 z-100 flex items-end justify-center bg-navy-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 text-ink shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                  <Cookie className="size-4 text-gold" />
                  Ustawienia cookies
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                  Zarządzaj zgodami
                </h2>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                aria-label="Zamknij"
                className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-black/5 text-ink/60 transition-colors hover:bg-black/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Wybierz, na jakie kategorie plików cookie się zgadzasz. Swój wybór
              możesz zmienić w każdej chwili, klikając „Ustawienia cookies” w
              stopce strony. Szczegóły znajdziesz w{" "}
              <a
                href="/polityka-prywatnosci"
                className="font-semibold text-navy underline hover:text-gold"
              >
                Polityce Prywatności
              </a>
              .
            </p>

            <div className="mt-6 space-y-4">
              {/* NIEZBĘDNE - zawsze aktywne, brak możliwości wyłączenia */}
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 bg-cream p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <ShieldCheck className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">
                      Niezbędne
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/65">
                      Wymagane do podstawowego działania strony (np.
                      zapamiętanie Twojego wyboru dot. cookies). Nie można ich
                      wyłączyć.
                    </p>
                  </div>
                </div>
                <span className="mt-1 shrink-0 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Zawsze wł.
                </span>
              </div>

              {/* ANALITYCZNE - opcjonalne, domyślnie wyłączone */}
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <BarChart3 className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">
                      Analityczne
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/65">
                      Google Analytics – pomaga nam zrozumieć, jak korzystasz ze
                      strony, w formie zanonimizowanych statystyk. Bez Twojej
                      zgody skrypt się nie załaduje.
                    </p>
                  </div>
                </div>
                <label className="relative mt-1 inline-flex shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={analyticsDraft}
                    onChange={(e) => setAnalyticsDraft(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="h-6 w-11 rounded-full bg-black/15 transition-colors after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-navy peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => savePreferences({ analytics: analyticsDraft })}
                className="flex-1 cursor-pointer rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-700 hover:scale-[1.01]"
              >
                Zapisz wybór
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 cursor-pointer rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-gold-light"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Wspólne klasy przycisków-linków. Jedno miejsce zamiast kilkunastu kopii
 * tych samych ciągów klas w sekcjach – spójny wygląd i mniejszy HTML.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-colors";

export const btn = {
  /** Zielony – główne wezwanie do działania na granatowym tle. */
  primary: `${base} bg-green text-navy-900 hover:bg-green-bright`,
  /** Granatowy – główne wezwanie do działania na jasnym tle. */
  navy: `${base} bg-navy text-white hover:bg-navy-700`,
  /** Obrysowany – akcja drugorzędna na granatowym tle. */
  outlineDark: `${base} border border-white/30 text-white hover:bg-white/10`,
  /** Obrysowany – akcja drugorzędna na jasnym tle. */
  outlineLight: `${base} border border-ink/15 bg-white text-ink hover:bg-mint-dark/60`,
} as const;

/** Mała etykieta nad nagłówkiem sekcji (zwykła wielkość liter). */
export const eyebrow = "font-display text-sm font-semibold text-green-ink sm:text-base";
export const eyebrowDark = "font-display text-sm font-semibold text-green-bright sm:text-base";

/** Nagłówek sekcji (h2). */
export const sectionTitle =
  "mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl";

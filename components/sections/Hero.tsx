// components/landing/hero.tsx
import Image from "next/image";
import {
  Gavel,
  Layers,
  TrendingUp,
  CalendarX,
  Home,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  PauseCircle,
  Percent,
  PhoneOff,
  Gift,
  Lock,
  Award,
} from "lucide-react";
import { site } from "@/content/site";

// Ikonki przyciągające uwagę
const problemItems = [
  { label: "Komornik", icon: Gavel },
  { label: "Wiele zobowiązań", icon: Layers },
  { label: "Rosnące zadłużenie", icon: TrendingUp },
  { label: "Niespłacone raty", icon: CalendarX },
  { label: "Zadłużenie czynszowe", icon: Home },
];

// Co możesz zyskać - 4 kafelki
const benefitsItems = [
  {
    title: "Pewność oddłużenia",
    icon: CheckCircle2,
  },
  {
    title: "Wstrzymanie postępowań windykacyjnych i egzekucyjnych",
    icon: PauseCircle,
  },
  {
    title: "Zatrzymanie biegu naliczania odsetek",
    icon: Percent,
  },
  {
    title: "Koniec z telefonami od firm windykacyjnych",
    icon: PhoneOff,
  },
];

// Gwarantujemy - 3 kafelki
const guaranteeItems = [
  {
    title: "Darmowa konsultacja",
    icon: Gift,
  },
  {
    title: "Pełna poufność, dyskrecja i wsparcie na każdym etapie",
    icon: Lock,
  },
  {
    title: "Skuteczność",
    icon: Award,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* 1. GÓRNA CZĘŚĆ HERO */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-3 pb-8 sm:pt-5 sm:pb-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-6 lg:pb-10">
        {/* LEWA STRONA - CAŁKOWICIE WYŚRODKOWANA NA KAŻDYM EKRANIE */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            <ShieldCheck className="size-4" />
            Pomoc prawna · Chorzów i Śląsk
          </p>

          {/* Hasło główne */}
          <h1 className="mt-4 text-center font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
            Upadłość konsumencka{" "}
            <span className="text-gold">– życie bez długów</span>
          </h1>

          <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-white/75 lg:text-lg">
            Przeprowadzimy Cię przez całą procedurę upadłości konsumenckiej, od
            pierwszej rozmowy aż po całkowite umorzenie zobowiązań.
          </p>

          {/* Ikonki przyciągające uwagę */}
          <div className="mt-8 w-full max-w-xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-gold/90">
              Pomagamy w sytuacjach takich jak:
            </p>

            <div className="flex flex-wrap justify-center gap-2.5">
              {problemItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex min-w-37.5 sm:min-w-40 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition-all hover:border-gold/50 hover:bg-white/10"
                  >
                    <Icon className="size-4 shrink-0 text-gold" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Przyciski Akcji */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-light"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4 text-gold" />
              {site.phone.display}
            </a>
          </div>
        </div>

        {/* PRAWA STRONA - ZDJĘCIE RODZINY */}
        <div className="relative mb-6 flex items-center justify-center sm:mb-0 lg:justify-end">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-linear-to-tr from-gold/20 via-transparent to-gold/10 opacity-70 blur-xl" />

          <div className="relative w-full max-w-lg">
            <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 overflow-hidden rounded-3xl border border-white/15 bg-navy-900/50 shadow-2xl">
              {/* POPRAWKA WYDAJNOŚCI: było zwykłe <img>. To zdjęcie jest
                  praktycznie na pewno elementem LCP (Largest Contentful
                  Paint) strony głównej — pierwszym dużym elementem w
                  viewport. next/image + `priority` usuwa je z leniwego
                  ładowania i dodaje <link rel="preload">, a automatyczna
                  konwersja do AVIF/WebP (włączona teraz w next.config.mjs)
                  realnie zmniejsza wagę pliku. `fill` na obrazku wymaga,
                  by kontener miał `position: relative` i zdefiniowaną
                  proporcję (aspect-*) — dzięki temu przeglądarka rezerwuje
                  miejsce od razu i nie ma przesunięcia layoutu (CLS). */}
              <Image
                src="/rodzinka.jpg"
                alt="Szczęśliwa rodzina – życie bez długów po upadłości konsumenckiej"
                fill
                priority
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-x-4 bottom-0 flex min-h-18 translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-navy-900/95 p-4 text-center shadow-2xl backdrop-blur-md sm:bottom-4 sm:translate-y-0">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold sm:text-base">
                Odzyskaj spokój dla swojej rodziny
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEKCJA: CO MOŻESZ ZYSKAĆ */}
      <div className="border-t border-white/10 bg-navy-900/40 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Co możesz zyskać
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefitsItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col items-center justify-start rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur transition-all hover:border-gold/40 hover:bg-white/10"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold mb-4">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. SEKCJA: GWARANTUJEMY */}
      <div className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gwarantujemy
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            {guaranteeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col items-center justify-start rounded-2xl border border-gold/30 bg-navy-900/80 p-6 text-center shadow-lg backdrop-blur transition-all hover:border-gold"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold text-navy-900 mb-4 shadow-md">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. SEKCJA: BANER / CTA */}
      <div className="border-t border-white/10 bg-linear-to-b from-navy to-navy-900 py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sprawdź czy upadłość konsumencka jest rozwiązaniem dla Ciebie
          </h2>
          <p className="mt-4 text-base font-medium text-gold sm:text-lg">
            Bez zobowiązań. Bez oceniania. Konkretnie o Twojej sytuacji.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-5 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy-900 shadow-xl transition-all hover:bg-gold-light hover:scale-105"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-5" />
            </a>

            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-xl backdrop-blur transition-all hover:border-gold hover:bg-white/15 hover:scale-105"
            >
              <Phone className="size-5 text-gold" />
              <span>
                Telefon:{" "}
                <strong className="text-gold">{site.phone.display}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

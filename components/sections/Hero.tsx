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

const problemItems = [
  { label: "Komornik", icon: Gavel },
  { label: "Wiele zobowiązań", icon: Layers },
  { label: "Rosnące zadłużenie", icon: TrendingUp },
  { label: "Niespłacone raty", icon: CalendarX },
  { label: "Zadłużenie czynszowe", icon: Home },
];

const benefitsItems = [
  {
    title: "Pewność oddłużenia",
    icon: CheckCircle2,
  },
  {
    title: "Wstrzymanie windykacji i egzekucji",
    icon: PauseCircle,
  },
  {
    title: "Zatrzymanie naliczania odsetek",
    icon: Percent,
  },
  {
    title: "Koniec z telefonami od windykatorów",
    icon: PhoneOff,
  },
];

const guaranteeItems = [
  {
    title: "Darmowa konsultacja i analiza",
    icon: Gift,
  },
  {
    title: "Pełna dyskrecja i poufność",
    icon: Lock,
  },
  {
    title: "Gwarancja skuteczności",
    icon: Award,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            <ShieldCheck className="size-4" />
            Pomoc prawna · Chorzów i Śląsk
          </p>

          <h1 className="mt-4 text-center font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
            Upadłość konsumencka{" "}
            <span className="text-gold">– życie bez długów</span>
          </h1>

          <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-white/75 lg:text-lg">
            Przeprowadzimy Cię przez całą procedurę upadłości konsumenckiej, od
            pierwszej rozmowy aż po całkowite umorzenie zobowiązań.
          </p>

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
                    className="flex min-w-36 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition-all hover:border-gold/50 hover:bg-white/10"
                  >
                    <Icon className="size-4 shrink-0 text-gold" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gold-light hover:scale-105"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <Phone className="size-4 text-gold" />
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="relative mb-6 flex items-center justify-center sm:mb-0 lg:justify-end">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-linear-to-tr from-gold/20 via-transparent to-gold/10 opacity-70 blur-xl" />

          <div className="relative w-full max-w-lg">
            <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 overflow-hidden rounded-3xl border border-white/15 bg-navy-900/50 shadow-2xl">
              <Image
                src="/rodzinka.jpg"
                alt="Szczęśliwa rodzina – życie bez długów po upadłości konsumenckiej"
                fill
                priority
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-x-4 bottom-0 flex min-h-16 translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-navy-900/95 p-4 text-center shadow-2xl backdrop-blur-md sm:bottom-4 sm:translate-y-0">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold sm:text-base">
                Odzyskaj spokój dla swojej rodziny
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Podsekcja: Co możesz zyskać */}
      <div className="border-t border-white/10 bg-navy-900/40 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
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

      {/* Podsekcja: Gwarantujemy */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
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
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold text-white mb-4 shadow-md">
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
    </section>
  );
}

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
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-6 pb-8 sm:gap-10 sm:px-6 sm:pt-10 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center text-center">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-green">
            <ShieldCheck className="size-4" />
            Pomoc prawna · Chorzów i Śląsk
          </p>

          <h1 className="mt-3 text-center font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Upadłość konsumencka{" "}
            <span className="text-green">– życie bez długów</span>
          </h1>

          <p className="mt-3 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
            Przeprowadzimy Cię przez całą procedurę upadłości konsumenckiej, od
            pierwszej rozmowy aż po całkowite umorzenie zobowiązań.
          </p>

          <div className="mt-6 w-full max-w-xl">
            <p className="mb-2.5 text-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-green/90">
              Pomagamy w sytuacjach takich jak:
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {problemItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white shadow-sm backdrop-blur transition-all hover:border-green/50 hover:bg-white/10 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <Icon className="size-3.5 sm:size-4 shrink-0 text-green" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-green-light hover:scale-105"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <Phone className="size-4 text-green" />
              {site.phone.display}
            </a>
          </div>
        </div>

        {/* Zdjęcie rodziny – pełne kadrowanie od góry (bez ucinania głów) */}
        <div className="relative mb-2 flex items-center justify-center sm:mb-0 lg:justify-end">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-linear-to-tr from-green/20 via-transparent to-green/10 opacity-70 blur-xl" />

          <div className="relative w-full max-w-lg">
            <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 overflow-hidden rounded-3xl border border-white/15 bg-navy-900/50 shadow-2xl">
              <Image
                src="/rodzinka.jpg"
                alt="Szczęśliwa rodzina – życie bez długów po upadłości konsumenckiej"
                fill
                priority
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 60vw, 100vw"
                className="object-cover object-top sm:object-center"
              />
            </div>

            <div className="absolute inset-x-3 bottom-3 flex items-center justify-center rounded-2xl border border-white/15 bg-navy-900/95 p-2.5 text-center shadow-xl backdrop-blur-md sm:bottom-4 sm:p-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-green sm:text-base">
                Odzyskaj spokój dla swojej rodziny
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Podsekcja: Co możesz zyskać (Siatka 2x2 na mobile) */}
      <div className="border-t border-white/10 bg-navy-900/40 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
            Co możesz zyskać
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {benefitsItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-start rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center shadow-md backdrop-blur transition-all sm:p-6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green/20 text-green mb-2.5 sm:size-12 sm:mb-4">
                    <Icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="font-display text-xs font-semibold text-white leading-snug sm:text-base">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Podsekcja: Gwarantujemy (Kompaktowe kafelki poziome na mobile) */}
      <div className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
            Gwarantujemy
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6 max-w-5xl mx-auto">
            {guaranteeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3.5 rounded-2xl border border-green/30 bg-navy-900/80 p-3.5 text-left shadow-md backdrop-blur transition-all sm:flex-col sm:justify-start sm:gap-0 sm:p-6 sm:text-center hover:border-green"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green text-white shadow-md sm:size-14 sm:mb-4">
                    <Icon className="size-5 sm:size-7" />
                  </span>
                  <h3 className="font-display text-xs font-semibold text-white leading-snug sm:text-base">
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

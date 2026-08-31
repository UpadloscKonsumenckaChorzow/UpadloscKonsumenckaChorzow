import Image from "next/image";
import {
  GraduationCap,
  Heart,
  ShieldCheck,
  Zap,
  Award,
  Handshake,
  Network,
  BadgeCheck,
} from "lucide-react";
import { site } from "@/content/site";

const reasons = [
  {
    icon: GraduationCap,
    title: "Wiedza i doświadczenie",
    text: "Część ogólnopolskiej sieci Expert Partner. Sprawdzone procedury i wysokie standardy.",
  },
  {
    icon: Heart,
    title: "Indywidualne podejście",
    text: "Każdy klient otaczany jest troską i dyskrecją. Wspólna ścieżka do wolności finansowej.",
  },
  {
    icon: ShieldCheck,
    title: "Przejrzyste zasady",
    text: "Poczucie bezpieczeństwa od bezpłatnej konsultacji aż po prawomocne zakończenie.",
  },
  {
    icon: Zap,
    title: "Szybkość i skuteczność",
    text: "Działamy od 1. dnia. Pisemna gwarancja rzetelności poparta doświadczeniem.",
  },
];

const partnerFeatures = [
  {
    icon: Network,
    title: "Ogólnopolska sieć",
    text: "Rozpoznawalna grupa ekspertów z całej Polski.",
  },
  {
    icon: BadgeCheck,
    title: "Sprawdzone procedury",
    text: "Wypracowane standardy prowadzenia postępowań.",
  },
  {
    icon: GraduationCap,
    title: "Wiedza i szkolenia",
    text: "Stały dostęp do bieżącej praktyki orzeczniczej sądów.",
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="scroll-mt-24 bg-mint py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Award className="size-4 text-green" />
            Dlaczego My
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wider text-ink sm:mt-3 sm:text-4xl lg:text-5xl">
            Dlaczego My?
          </h2>
        </div>

        {/* Siatka 2x2 na mobile zamiast 4 olbrzymich klocków */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-3.5 text-center shadow-sm transition-all hover:border-green/50 hover:shadow-md sm:rounded-3xl sm:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-navy text-green shadow-md sm:size-14">
                  <Icon className="size-5 sm:size-6" />
                </span>
                <h3 className="mt-3 font-display text-xs font-bold uppercase tracking-wider text-navy sm:mt-5 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-ink/75 sm:mt-3 sm:text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Boks partnera Expert Partner */}
        <div className="mt-8 rounded-2xl border border-black/10 bg-mint-dark p-4 shadow-sm sm:mt-16 sm:rounded-3xl sm:p-8 lg:p-12">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="text-center sm:text-left lg:col-span-5">
              <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy sm:justify-start">
                <Handshake className="size-4 text-green" />
                Zaufana współpraca
              </p>

              <h3 className="mt-2 font-display text-xl font-bold leading-tight text-ink sm:mt-3 sm:text-3xl">
                Część Grupy Expert Partner
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:mt-3 sm:text-sm">
                Przynależność do ogólnopolskiej sieci Expert Partner oznacza dla
                Ciebie pewność, wiedzę i sprawdzone wzorce procesowe.
              </p>

              <div className="mt-4 sm:mt-6">
                <a
                  href={site.partner.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block rounded-2xl border border-black/5 bg-white p-2.5 shadow-sm transition-all hover:scale-105 hover:shadow-md sm:p-3"
                >
                  <Image
                    src="/expert-partner.webp"
                    alt="Grupa Expert Partner"
                    width={130}
                    height={38}
                    className="h-8 w-auto object-contain sm:h-10"
                    style={{ width: "auto", height: "auto" }}
                  />
                </a>
              </div>
            </div>

            {/* Cechy partnera w zwięzłej formie */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:col-span-7">
              {partnerFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition-all sm:flex-col sm:items-start sm:gap-0 sm:p-5"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy sm:size-9 sm:rounded-xl">
                      <Icon className="size-4 sm:size-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-xs font-bold text-ink sm:mt-3 sm:text-sm">
                        {f.title}
                      </h4>
                      <p className="text-[11px] leading-relaxed text-ink/65 sm:mt-1.5 sm:text-xs">
                        {f.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

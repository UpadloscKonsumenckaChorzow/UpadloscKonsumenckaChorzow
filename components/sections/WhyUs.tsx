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
    text: "Jesteśmy częścią ogólnopolskiej sieci ekspertów Expert Partner. Gwarantujemy sprawdzone procedury i wysokie standardy prowadzenia spraw.",
  },
  {
    icon: Heart,
    title: "Indywidualne podejście",
    text: "Każdy klient otaczany jest troską i dyskrecją. Wspólnie wypracowujemy najlepszą ścieżkę do odzyskania swobody finansowej.",
  },
  {
    icon: ShieldCheck,
    title: "Przejrzyste zasady",
    text: "Dbamy o komfort i poczucie bezpieczeństwa od bezpłatnej konsultacji aż do prawomocnego zakończenia postępowania.",
  },
  {
    icon: Zap,
    title: "Szybkość i skuteczność",
    text: "Działamy od pierwszego dnia zawarcia umowy. Dajemy pisemną gwarancję rzetelności popartą doświadczeniem.",
  },
];

const partnerFeatures = [
  {
    icon: Network,
    title: "Ogólnopolska sieć",
    text: "Działamy w ramach rozpoznawalnej grupy ekspertów z całej Polski.",
  },
  {
    icon: BadgeCheck,
    title: "Sprawdzone procedury",
    text: "Korzystamy z wypracowanych standardów prowadzenia postępowań.",
  },
  {
    icon: GraduationCap,
    title: "Wiedza i szkolenia",
    text: "Stały dostęp do bieżącej praktyki orzeczniczej sądów upadłościowych.",
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="scroll-mt-24 bg-mint py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Award className="size-4 text-green" />
            Dlaczego My
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl lg:text-5xl">
            Dlaczego My?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-3xl border border-black/5 bg-white p-6 text-center shadow-sm transition-all hover:border-green/50 hover:shadow-md"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-navy text-green shadow-md">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wider text-navy sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ink/75 sm:text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-black/10 bg-mint-dark p-8 shadow-sm lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                <Handshake className="size-4 text-green" />
                Zaufana współpraca
              </p>

              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                Część Grupy Expert Partner
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Przynależność do ogólnopolskiej sieci Expert Partner oznacza dla
                Ciebie pewność, wiedzę i sprawdzone wzorce procesowe.
              </p>

              <div className="mt-6">
                <a
                  href={site.partner.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block rounded-2xl bg-white p-3 shadow-sm border border-black/5 transition-all hover:scale-105 hover:shadow-md"
                >
                  <Image
                    src="/expert-partner.webp"
                    alt="Grupa Expert Partner"
                    width={140}
                    height={40}
                    className="h-10 w-auto object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {partnerFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-navy/5 text-navy">
                      <Icon className="size-5" />
                    </span>
                    <h4 className="mt-3 font-display text-sm font-bold text-ink">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
                      {f.text}
                    </p>
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

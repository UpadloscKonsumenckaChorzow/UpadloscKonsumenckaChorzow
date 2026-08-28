// components/landing/WhyUs.tsx
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

const reasons = [
  {
    icon: GraduationCap,
    title: "Wiedza i doświadczenie",
    text: "Jesteśmy częścią ogólnopolskiej sieci ekspertów działającej pod marką Expert Partner. Gwarantuje Tobie korzystanie ze sprawdzonych procedur, wypracowanych wysokich standardów prowadzenia spraw, realną wiedzę i doświadczenie wsparte naszym wieloletnim doświadczeniem w branży finansowej.",
  },
  {
    icon: Heart,
    title: "Indywidualne podejście",
    text: "Każda sprawa jest inna, dlatego każdy klient od pierwszego kontaktu otaczany jest troską i zrozumieniem. Nasza pomoc jest oparta na zaufaniu, dyskrecji i rzetelności. Wspólnie wypracowujemy najlepszą ścieżkę wyjścia Klienta z jego trudnej sytuacji i dążymy do odzyskania przez niego ponownie pełnej swobody finansowej.",
  },
  {
    icon: ShieldCheck,
    title: "Proste i przejrzyste zasady",
    text: "Pomagamy w najtrudniejszych sprawach dbając o komfort i zadowolenie naszych klientów. Wspieramy, dzielimy się doświadczeniem i prowadzimy sprawy z największą dbałością o każdy szczegół od bezpłatnej konsultacji poprzez zbieranie i analizowanie dokumentacji, aż do zakończenia postępowania upadłościowego.",
  },
  {
    icon: Zap,
    title: "Szybkość i skuteczność",
    text: "Nasze działania rozpoczynamy już od pierwszego dnia zawarcia umowy, jesteśmy w stałym kontakcie z naszymi klientami i wspieramy ich na każdym etapie postępowania. Dajemy pisemną gwarancję ogłoszenia upadłości, jeżeli to się nie stanie Klient odzyskuje wszystkie poniesione koszty związane z umową.",
  },
];

const partnerFeatures = [
  {
    icon: Network,
    title: "Ogólnopolska sieć",
    text: "Działam w ramach rozpoznawalnej grupy ekspertów z całej Polski.",
  },
  {
    icon: BadgeCheck,
    title: "Sprawdzone procedury",
    text: "Korzystam z wypracowanych standardów prowadzenia spraw.",
  },
  {
    icon: GraduationCap,
    title: "Wiedza i doświadczenie",
    text: "Stały dostęp do szkoleń i bieżącej praktyki upadłościowej.",
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="scroll-mt-24 bg-cream py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Award className="size-4 text-gold" />
            Dlaczego My
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl lg:text-5xl">
            Dlaczego My?
          </h2>
        </div>

        {/* 1. KAFELKI Z POWODAMI */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-3xl border border-black/5 bg-white p-6 text-center shadow-sm transition-all hover:border-gold/50 hover:shadow-md"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-navy text-gold shadow-md">
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

        {/* 2. DYNAMICZNY BLOK "CZĘŚĆ GRUPY EXPERT PARTNER" */}
        <div className="mt-16 rounded-3xl border border-black/10 bg-cream-dark p-8 shadow-sm lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                <Handshake className="size-4 text-gold" />
                Zaufana współpraca
              </p>

              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                Część Grupy Expert Partner
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Jestem częścią ogólnopolskiej sieci ekspertów działającej pod
                marką Expert Partner. Oznacza to dla Ciebie sprawdzone procedury
                oraz realną wiedzę i doświadczenie.
              </p>

              {/* LOGO PARTNERA */}
              <div className="mt-6">
                <a
                  href="https://upadlosci-ekspert.pl/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block rounded-2xl bg-white p-3 shadow-sm border border-black/5 transition-all hover:scale-105 hover:shadow-md"
                >
                  <img
                    src="/expert-partner.webp"
                    alt="Grupa Expert Partner - wiedza i doświadczenie"
                    className="h-10 w-auto object-contain"
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

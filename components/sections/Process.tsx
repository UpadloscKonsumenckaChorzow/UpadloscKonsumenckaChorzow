// components/landing/process.tsx
import {
  Workflow,
  PhoneCall,
  FileText,
  Gavel,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// 5 dokładnych kroków wyznaczonych przez klienta
const steps = [
  {
    number: "01",
    title: "Kontakt i bezpłatna analiza sytuacji",
    text: "Dzwonisz lub wypełniasz formularz. Bezpłatnie i bez zobowiązań sprawdzam wysokość Twoich zobowiązań oraz oceniam szanse na sukces.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Zebranie dokumentów i przygotowanie wniosku o ogłoszenie upadłości",
    text: "Pomagam w skompletowaniu wszystkich niezbędnych pism i sporządzam profesjonalny, kompletny wniosek do sądu.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Ogłoszenie upadłości",
    text: "Sąd ogłasza upadłość. Od tego momentu egzekucje komornicze zostają wstrzymane, a Ty zyskujesz pełną ochronę prawną.",
    icon: Gavel,
  },
  {
    number: "04",
    title: "Umorzenie zobowiązań po realizacji planu spłaty",
    text: "Realizujesz ustalony plan spłaty dopasowany do Twoich możliwości, po czym pozostała część długów zostaje całkowicie umorzona.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Nowy start finansowy",
    text: "Odzyskujesz wolność finansową, spokój ducha oraz czystą kartę do budowania bezpiecznej przyszłości.",
    icon: Sparkles,
  },
];

export function Process() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-24 bg-cream py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Workflow className="size-4 text-gold" />
            Jak to działa
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Prosty proces do wolności od długów
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            Przeprowadzimy Cię przez całą procedurę bezpiecznie, krok po kroku.
          </p>
        </div>

        {/* WIZUALIZACJA KROKÓW (LINIA CZASU Z KARTAMI) */}
        <div className="relative mt-10 max-w-4xl mx-auto">
          {/* Pionowa linia łącząca kroki (dla urządzeń od sm w górę) */}
          <div className="absolute left-8.75 top-8 bottom-8 w-0.5 bg-navy/15 hidden sm:block" />

          <div className="space-y-6 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col sm:flex-row items-start gap-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-gold/50 hover:shadow-md sm:p-8"
                >
                  {/* Duży numer kroku */}
                  <div className="flex shrink-0 items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-gold shadow-md font-display text-lg font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Zawartość kroku */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-gold/15 text-navy">
                        <Icon className="size-4 text-navy" />
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-ink/70">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PRZYCISK ZACHĘCAJĄCY DO KONTAKTU */}
        <div className="mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-navy-700 hover:scale-105"
          >
            Umów bezpłatną konsultację i zacznij pierwszy krok
            <ArrowRight className="size-5 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

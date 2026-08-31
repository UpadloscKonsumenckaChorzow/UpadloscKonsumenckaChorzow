import {
  Workflow,
  PhoneCall,
  FileText,
  Gavel,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Kontakt i bezpłatna analiza sytuacji",
    text: "Dzwonisz lub wypełniasz formularz. Bezpłatnie i bez zobowiązań oceniamy szanse na ogłoszenie upadłości.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Skompletowanie dokumentów i wniosek",
    text: "Pomagamy w zebraniu dokumentacji i sporządzamy profesjonalny wniosek do sądu.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Ogłoszenie upadłości przez sąd",
    text: "Sąd wydaje postanowienie. Wstrzymane zostają egzekucje komornicze, a odsetki przestają narastać.",
    icon: Gavel,
  },
  {
    number: "04",
    title: "Umorzenie zobowiązań",
    text: "Po realizacji ustalonego planu spłaty pozostała część długów zostaje prawomocnie umorzona.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Nowy start finansowy",
    text: "Odzyskujesz wolność finansową, spokój ducha i czystą kartę w bazach gospodarczych.",
    icon: Sparkles,
  },
];

export function Process() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-24 bg-mint py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Workflow className="size-4 text-green" />
            Jak to działa
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
            Prosty proces do wolności od długów
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:mt-4 sm:text-base lg:text-lg">
            Przeprowadzimy Cię przez całą procedurę bezpiecznie, krok po kroku.
          </p>
        </div>

        <div className="relative mx-auto mt-6 max-w-4xl sm:mt-12">
          {/* Linia pionowa na desktopie */}
          <div className="absolute left-7 top-8 bottom-8 hidden w-0.5 bg-navy/15 sm:block" />

          {/* Lista kroków */}
          <div className="relative space-y-3 sm:space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all hover:border-green/50 hover:shadow-md sm:flex-row sm:items-start sm:gap-5 sm:rounded-3xl sm:p-8"
                >
                  {/* Nagłówek kroku na mobile / lewy badge na desktopie */}
                  <div className="flex items-center gap-3 sm:block sm:shrink-0">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy font-display text-sm font-bold text-green shadow-md sm:size-14 sm:rounded-2xl sm:text-lg">
                      {step.number}
                    </span>
                    <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:hidden">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green/15 text-navy">
                        <Icon className="size-4 shrink-0 text-navy" />
                      </span>
                      <h3 className="min-w-0 flex-1 font-display text-sm font-bold leading-snug text-ink">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 sm:pt-1">
                    <div className="hidden items-center gap-3 sm:flex">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green/15 text-navy">
                        <Icon className="size-4 shrink-0 text-navy" />
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-ink/70 sm:mt-3 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 text-center sm:mt-12">
          <a
            href="#kontakt"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-navy-700 hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
          >
            Umów bezpłatną konsultację
            <ArrowRight className="size-4 sm:size-5 text-green" />
          </a>
        </div>
      </div>
    </section>
  );
}

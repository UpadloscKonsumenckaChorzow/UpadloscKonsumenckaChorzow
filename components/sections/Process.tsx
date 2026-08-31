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
    <section id="jak-to-dziala" className="scroll-mt-24 bg-mint py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Workflow className="size-4 text-green" />
            Jak to działa
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Prosty proces do wolności od długów
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            Przeprowadzimy Cię przez całą procedurę bezpiecznie, krok po kroku.
          </p>
        </div>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-navy/15 hidden sm:block" />

          <div className="space-y-6 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col sm:flex-row items-start gap-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-green/50 hover:shadow-md sm:p-8"
                >
                  <div className="flex shrink-0 items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-green shadow-md font-display text-lg font-bold">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-green/15 text-navy">
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

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-navy-700 hover:scale-105"
          >
            Umów bezpłatną konsultację
            <ArrowRight className="size-5 text-green" />
          </a>
        </div>
      </div>
    </section>
  );
}

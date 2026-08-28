"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Czy stracę cały majątek?",
    a: "Nie. Celem postępowania nie jest pozbawienie Cię wszystkiego. Przedmioty codziennego użytku oraz środki niezbędne do podstawowego utrzymania rodziny pozostają do Twojej dyspozycji.",
  },
  {
    q: "Czy muszę stawiać się osobiście w sądzie?",
    a: "W przeważającej większości spraw nie ma takiej konieczności. Postępowanie prowadzone jest pisemnie i elektronicznie za pośrednictwem systemu KRZ.",
  },
  {
    q: "Ile trwa całe postępowanie upadłościowe?",
    a: "Ogłoszenie upadłości następuje zazwyczaj w ciągu 2–4 miesięcy od złożenia kompletnego wniosku.",
  },
  {
    q: "Nie mam żadnego majątku, czy mogę ogłosić upadłość?",
    a: "Tak. Brak majątku nie stanowi żadnej przeszkody, a w wielu przypadkach wręcz przyspiesza całkowite umorzenie zobowiązań bez planu spłat.",
  },
  {
    q: "Czy upadłość obejmie wszystkie moje zobowiązania?",
    a: "Umorzeniu podlega większość długów: pożyczki, kredyty, chwilówki, zaległości czynszowe czy rachunki. Wyjątkiem są m.in. alimenty oraz kary orzeczone przez sąd.",
  },
  {
    q: "Co dzieje się z komornikiem po ogłoszeniu upadłości?",
    a: "Z dniem ogłoszenia upadłości wszystkie egzekucje komornicze zostają zawieszone z mocy prawa, a po uprawomocnieniu całkowicie umorzone.",
  },
  {
    q: "Ile kosztuje pomoc i czy można płacić w ratach?",
    a: "Wstępna analiza jest w 100% bezpłatna. Wynagrodzenie ustalamy indywidualnie z możliwością rozłożenia na dogodne raty.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <HelpCircle className="size-4 text-gold" />
            FAQ / Pytania
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Odpowiedzi na najczęstsze pytania
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            Najczęstsze wątpliwości osób rozważających upadłość konsumencką.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            Masz inne pytanie?{" "}
            <a
              href="#kontakt"
              className="font-semibold text-navy underline underline-offset-4 transition-colors hover:text-gold"
            >
              Napisz do nas
            </a>
            , chętnie wszystko wyjaśnimy.
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="py-3">
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 py-3 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-base font-semibold text-ink transition-colors group-hover:text-navy sm:text-lg">
                    {faq.q}
                  </span>

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-navy text-gold shadow-md"
                        : "bg-navy/5 text-navy group-hover:bg-navy/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="size-5" />
                    ) : (
                      <Plus className="size-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="pb-4 pt-2 text-sm leading-relaxed text-ink/75 sm:text-base"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

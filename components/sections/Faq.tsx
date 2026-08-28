"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

// Miejsce na pytania i odpowiedzi (tutaj wkleisz docelowe pytania od klienta)
const faqs = [
  {
    q: "Czy stracę cały majątek?",
    a: "Nie. Celem postępowania nie jest pozbawienie Cię wszystkiego. Przedmioty codziennego użytku oraz środki niezbędne do utrzymania zwykle pozostają. Zakres ustalamy indywidualnie na podstawie Twojej sytuacji.",
  },
  {
    q: "Czy muszę stawiać się w sądzie?",
    a: "W większości spraw nie ma takiej konieczności. Postępowanie prowadzone jest w dużej mierze pisemnie i elektronicznie, a formalności biorę na siebie.",
  },
  {
    q: "Ile trwa całe postępowanie?",
    a: "Ogłoszenie upadłości następuje zwykle w ciągu kilku miesięcy. Plan spłaty ustalany jest najczęściej na okres od 12 do 36 miesięcy.",
  },
  {
    q: "Nie mam żadnego majątku, czy to przeszkoda?",
    a: "Nie. Brak majątku nie wyklucza upadłości konsumenckiej, a często wręcz przyspiesza umorzenie zobowiązań.",
  },
  {
    q: "Czy upadłość obejmie wszystkie moje zobowiązania?",
    a: "Umorzeniu podlega większość zobowiązań, m.in. kredyty, pożyczki i zaległości. Wyjątkiem są m.in. alimenty, grzywny czy obowiązki naprawienia szkody.",
  },
  {
    q: "Co z wierzycielami i komornikiem?",
    a: "Z dniem ogłoszenia upadłości postępowania egzekucyjne zostają wstrzymane, a kontakt z wierzycielami przejmuje syndyk.",
  },
  {
    q: "Ile kosztuje pomoc i czy można płacić w ratach?",
    a: "Pierwsza rozmowa i analiza dokumentów są bezpłatne. Koszt prowadzenia sprawy ustalam indywidualnie, z możliwością rozłożenia płatności na raty.",
  },
  {
    q: "Czy moje dane są bezpieczne?",
    a: "Tak. Sprawę prowadzę w pełnej poufności, a Twoje dane przetwarzam wyłącznie w celu udzielenia pomocy.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-8 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* LEWA STRONA - NAGŁÓWEK SEKCJI */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <HelpCircle className="size-4 text-gold" />
            FAQ / Pytania
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Odpowiedzi na najczęstsze pytania
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            Najczęstsze wątpliwości, które pojawiają się u osób rozważających
            upadłość konsumencką.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            Nie znalazłeś odpowiedzi na swoje pytanie?{" "}
            <a
              href="#kontakt"
              className="font-semibold text-navy underline underline-offset-4 transition-colors hover:text-gold"
            >
              Napisz do nas
            </a>
            , z chęcią wszystko wyjaśnimy.
          </p>
        </div>

        {/* PRAWA STRONA - AKORDEON Z PLUSIKAMI */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="py-3">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Treść pytania */}
                  <span className="font-display text-base font-semibold text-ink transition-colors group-hover:text-navy sm:text-lg">
                    {faq.q}
                  </span>

                  {/* Ikona plusa/minusa z boku */}
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

                {/* Rozwijana odpowiedź */}
                {isOpen && (
                  <p className="pb-3 pt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

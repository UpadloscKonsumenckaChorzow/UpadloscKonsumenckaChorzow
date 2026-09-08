"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Czy stracę cały majątek podczas upadłości konsumenckiej?",
    a: "Nie. Celem postępowania nie jest pozbawienie dłużnika środków do życia. Przedmioty codziennego użytku domowego, ubrania oraz środki niezbędne do podstawowego utrzymania rodziny są wyłączone z masy upadłościowej.",
  },
  {
    q: "Jaki sąd rozpatruje wnioski o upadłość konsumencką w Chorzowie?",
    a: "Dla mieszkańców Chorzowa oraz miast ościennych (Świętochłowice, Katowice, Ruda Śląska, Bytom, Siemianowice Śląskie) właściwy jest Sąd Rejonowy Katowice-Wschód w Katowicach (X Wydział Gospodarczy ds. Upadłościowych i Restrukturyzacyjnych). Postępowanie prowadzone jest elektronicznie w systemie KRZ.",
  },
  {
    q: "Ile trwa procedura ogłoszenia upadłości konsumenckiej?",
    a: "Sądowe postanowienie o ogłoszeniu upadłości (i wstrzymanie działań komornika) wydawane jest zazwyczaj w ciągu 2–4 miesięcy od złożenia kompletnego wniosku w systemie KRZ. Dalszy czas trwania zależy od ewentualnego majątku oraz ustalonego planu spłaty wierzycieli.",
  },
  {
    q: "Nie mam żadnego majątku – czy mogę ogłosić upadłość w Chorzowie?",
    a: "Tak. Brak majątku (nieruchomości, auta, oszczędności) nie stanowi przeszkody, a wręcz przyspiesza postępowanie i umożliwia całkowite umorzenie długów bez konieczności ustalania planu spłaty.",
  },
  {
    q: "Czy upadłość konsumencka obejmie wszystkie moje długi?",
    a: "Umorzeniu podlega zdecydowana większość długów: pożyczki bankowe, chwilówki, zaległości czynszowe czy rachunki. Wyjątkiem są m.in. zaległe alimenty, renty odszkodowawcze oraz kary orzeczone w procesach karnych.",
  },
  {
    q: "Co dzieje się z komornikiem po ogłoszeniu upadłości?",
    a: "Z dniem ogłoszenia upadłości przez sąd wszelkie postępowania egzekucyjne ulegają zawieszeniu z mocy prawa, a po uprawomocnieniu zostają całkowicie umorzone. Komornik nie może dokonywać nowych zajęć pensji ani konta.",
  },
  {
    q: "Ile wynosi opłata sądowa i ile kosztuje pomoc kancelarii?",
    a: "Ustawowa opłata sądowa od wniosku w KRZ wynosi zaledwie 30 zł. Wstępna analiza Twojej sytuacji w naszej kancelarii jest w 100% bezpłatna. Koszt prowadzenia sprawy przez kancelarię ustalamy indywidualnie, z możliwością rozłożenia na dogodne raty.",
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
    <section id="faq" className="scroll-mt-24 bg-mint py-8 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <HelpCircle className="size-4 text-green" />
            FAQ · Upadłość konsumencka Chorzów
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
            Odpowiedzi na najczęstsze pytania
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:mt-4 sm:text-base">
            Poznaj fakty o procedurze upadłości konsumenckiej na Śląsku.
          </p>
          <p className="mt-3 text-xs text-ink/70 sm:mt-6 sm:text-sm">
            Masz inne pytanie?{" "}
            <a
              href="#kontakt"
              className="font-semibold text-navy underline underline-offset-4 transition-colors hover:text-green-contrast"
            >
              Skontaktuj się z nami
            </a>
            , chętnie przeanalizujemy Twoją sytuację.
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="py-1.5 sm:py-3">
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-3 py-2 text-left cursor-pointer sm:gap-4 sm:py-3"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-navy sm:text-lg">
                    {faq.q}
                  </span>

                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:size-9 ${
                      isOpen
                        ? "bg-navy text-green shadow-md"
                        : "bg-navy/5 text-navy group-hover:bg-navy/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="size-3.5 sm:size-5" />
                    ) : (
                      <Plus className="size-3.5 sm:size-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="pb-3 pt-1 text-xs leading-relaxed text-ink/75 sm:pb-4 sm:pt-2 sm:text-base"
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

import { HelpCircle, Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

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
  return (
    <section id="faq" className="bg-mint py-10 sm:py-16">
      <JsonLd data={faqSchema} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Przyklejony nagłówek ma 80 px – kolumna zatrzymuje się tuż pod nim. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <HelpCircle className="size-4 text-green" aria-hidden="true" />
            FAQ / Pytania
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
            Odpowiedzi na najczęstsze pytania
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base">
            Najczęstsze wątpliwości osób rozważających upadłość konsumencką.
          </p>
          <p className="mt-3 text-sm text-ink/70 sm:mt-6">
            Masz inne pytanie?{" "}
            <a
              href="#kontakt"
              className="font-semibold text-navy underline underline-offset-4 transition-colors hover:text-green-contrast"
            >
              Napisz do nas
            </a>
            , chętnie wszystko wyjaśnimy.
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {/* Natywne <details>: działa bez JavaScriptu, treść odpowiedzi jest
              w HTML (widzi ją Google), a atrybut name sprawia, że otwarta
              jest najwyżej jedna odpowiedź naraz. */}
          {faqs.map((faq) => (
            <details key={faq.q} name="faq" className="faq-item group py-1.5 sm:py-3">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-3 py-2.5 text-left sm:gap-4 sm:py-3">
                <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-navy sm:text-lg">
                  {faq.q}
                </span>

                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy/10 group-open:bg-navy group-open:text-green group-open:shadow-md sm:size-9"
                >
                  <Plus className="size-4 group-open:hidden sm:size-5" />
                  <Minus className="hidden size-4 group-open:block sm:size-5" />
                </span>
              </summary>

              <p className="pb-3 pt-1 text-sm leading-relaxed text-ink/75 sm:pb-4 sm:pt-2 sm:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Phone } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Możesz tutaj zalogować błąd do zewnętrznej usługi analitycznej
    console.error("Błąd aplikacji:", error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-cream px-5 py-16">
      <div className="mx-auto max-w-xl text-center">
        {/* Ikona błędu */}
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-navy/5 text-destructive border border-destructive/20 shadow-sm">
          <AlertTriangle className="size-10" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Wystąpił nieoczekiwany problem
        </p>

        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Coś poszło nie tak
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Przepraszamy za utrudnienia. Wystąpił błąd podczas ładowania strony.
          Możesz spróbować załadować ją ponownie lub przejść na stronę główną.
        </p>

        {/* Przyciski akcji */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md cursor-pointer"
          >
            <RotateCcw className="size-4 text-gold" />
            Spróbuj ponownie
          </button>

          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-black/5"
          >
            <Home className="size-4 text-gold" />
            Strona główna
          </Link>
        </div>

        {/* Alternatywny kontakt */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="text-xs text-ink/60">
            Pilna sprawa? Skontaktuj się z nami bezpośrednio telefonicznie:
          </p>
          <a
            href="tel:+48515515314"
            className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors"
          >
            <Phone className="size-4 text-gold" />
            515 515 314
          </a>
        </div>
      </div>
    </main>
  );
}

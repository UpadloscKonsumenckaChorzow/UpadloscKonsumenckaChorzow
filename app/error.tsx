"use client";

import { startTransition, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, RotateCcw, Home, Phone } from "lucide-react";
import { site } from "@/content/site";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Kod błędu (digest) pozwala znaleźć ten sam błąd w logach Cloudflare.
    console.error("Błąd aplikacji:", error.digest ?? "(brak kodu)", error);
  }, [error]);

  // Samo reset() tylko ponownie wyświetla stronę w przeglądarce. Jeśli błąd
  // powstał na serwerze, trzeba też pobrać świeże dane – robi to refresh().
  function handleRetry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-mint px-5 py-16">
      {/* Strona błędu nie powinna trafić do wyników Google. */}
      <meta name="robots" content="noindex" />

      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-navy/5 text-red-600 border border-red-200 shadow-sm">
          <AlertTriangle className="size-10" aria-hidden="true" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-contrast">
          Wystąpił nieoczekiwany problem
        </p>

        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Coś poszło nie tak
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Przepraszamy za utrudnienia. Wystąpił błąd podczas ładowania strony.
          Spróbuj załadować ją ponownie lub wróć na stronę główną.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleRetry}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-105 shadow-md cursor-pointer"
          >
            <RotateCcw className="size-4 text-green" aria-hidden="true" />
            Spróbuj ponownie
          </button>

          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-black/5"
          >
            <Home className="size-4 text-green" aria-hidden="true" />
            Strona główna
          </Link>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="text-sm text-ink/70">
            Pilna sprawa? Skontaktuj się z nami bezpośrednio telefonicznie
            (pon.–pt. {site.hours.weekday.display}):
          </p>
          <a
            href={site.phone.href}
            className="mt-2 inline-flex items-center gap-2 text-base font-bold text-navy hover:text-green-contrast transition-colors"
          >
            <Phone className="size-4 text-green" aria-hidden="true" />
            {site.phone.display}
          </a>

          {error.digest && (
            <p className="mt-6 text-xs text-ink/50">
              Jeśli problem się powtarza, podaj nam ten kod błędu:{" "}
              <span className="font-mono select-all">{error.digest}</span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

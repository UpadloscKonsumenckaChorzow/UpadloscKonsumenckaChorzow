"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { site } from "@/content/site";

/** Kopiowanie adresu e-mail do schowka z komunikatem dla czytników ekranu. */
export function CopyEmailButton() {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (!emailCopied) return;
    const t = setTimeout(() => setEmailCopied(false), 2000);
    return () => clearTimeout(t);
  }, [emailCopied]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(site.email.display);
      setEmailCopied(true);
    } catch {
      // Brak dostępu do schowka (np. stara przeglądarka) – link mailto działa dalej.
    }
  }

  return (
    <div className="relative shrink-0 ml-2 translate-x-2.5 sm:translate-x-0">
      <button
        type="button"
        onClick={handleCopyEmail}
        aria-label={emailCopied ? "Adres e-mail skopiowany" : "Kopiuj adres e-mail"}
        title={emailCopied ? "Skopiowano!" : "Kopiuj e-mail"}
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-green"
      >
        {emailCopied ? (
          <Check className="size-4 text-green" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
      </button>

      {/* Region statusu istnieje stale – czytnik ekranu ogłosi zmianę treści. */}
      <span role="status" className="sr-only">
        {emailCopied ? "Skopiowano!" : ""}
      </span>

      {emailCopied && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 z-30 flex items-center justify-center whitespace-nowrap rounded-lg bg-green px-2.5 py-1 text-xs font-bold text-white shadow-xl animate-pop-in"
        >
          Skopiowano!
          <div className="absolute -bottom-1 right-2.5 size-2 rotate-45 bg-green" />
        </div>
      )}
    </div>
  );
}

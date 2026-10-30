import { ShieldCheck } from "lucide-react";

/**
 * "Konsultacja … jest bezpłatna" pod przyciskami kontaktu. Na telefonie
 * krótsza wersja w jednej linii – pełne zdanie łamało się na dwie linie
 * i odsuwało ikonę od tekstu.
 */
export function FreeConsultationNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex items-center justify-center gap-1.5 whitespace-nowrap text-xs text-white/70 sm:gap-2 sm:whitespace-normal sm:text-sm ${className}`}
    >
      <ShieldCheck className="size-4 shrink-0 text-green" aria-hidden="true" />
      <span className="sm:hidden">Konsultacja i wstępna analiza są bezpłatne.</span>
      <span className="hidden sm:inline">
        Konsultacja telefoniczna oraz wstępna analiza są bezpłatne.
      </span>
    </p>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/**
 * Jedyny interaktywny fragment nagłówka: przycisk i panel menu na telefonie.
 * Zawartość panelu (linki) jest renderowana na serwerze i trafia tu jako children.
 */
export function MobileMenu({ children }: { children: ReactNode }) {
  // Menu jest "otwarte na danej podstronie" – po zmianie adresu zamyka się
  // samo, bez dodatkowego efektu.
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc zamyka menu i oddaje fokus przyciskowi; kliknięcie poza menu też je zamyka.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpenOn(null);
      buttonRef.current?.focus();
    }
    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpenOn(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="flex size-10 items-center justify-center rounded-lg text-navy cursor-pointer transition-colors hover:bg-black/5"
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      <div
        ref={panelRef}
        id="mobile-nav"
        hidden={!open}
        // Kliknięcie linku (także kotwicy na tej samej stronie) zamyka menu.
        onClick={(e) => {
          if ((e.target as Element).closest("a")) setOpenOn(null);
        }}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-black/5 bg-mint px-4 pb-5 pt-1.5 shadow-lg animate-drop-in sm:px-6 sm:pb-6 sm:pt-2"
      >
        {children}
      </div>
    </>
  );
}

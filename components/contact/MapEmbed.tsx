"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";

/**
 * Mapa wczytuje się dopiero po kliknięciu – do tego momentu Google nie
 * dostaje żadnych danych o odwiedzającym (opisane w polityce prywatności).
 */
export function MapEmbed() {
  const [mapLoaded, setMapLoaded] = useState(false);

  if (mapLoaded) {
    return (
      <iframe
        title="Lokalizacja Kancelarii – ul. Hajducka 4, Chorzów"
        src={site.maps.embed}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        // Ogranicza uprawnienia osadzonej strony do niezbędnego minimum.
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        className="h-56 w-full border-0 grayscale contrast-125 opacity-90 transition-[filter,opacity] hover:grayscale-0 hover:opacity-100 sm:h-72"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setMapLoaded(true)}
      className="flex min-h-36 sm:min-h-44 w-full cursor-pointer flex-col items-center justify-center gap-2.5 bg-navy-900/40 px-4 py-5 text-center transition-colors hover:bg-navy-900/60 sm:gap-3 sm:px-6 sm:py-8"
    >
      <span className="flex size-9 sm:size-11 items-center justify-center rounded-xl bg-white/10 text-green">
        <MapPin className="size-4 sm:size-5" aria-hidden="true" />
      </span>
      <span className="max-w-xs text-xs leading-relaxed text-white/75">
        Kliknij, aby załadować interaktywną mapę Google.
      </span>
      <span className="rounded-lg bg-green px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-navy-900 shadow-md transition-colors hover:bg-green-light">
        Załaduj mapę Google Maps
      </span>
    </button>
  );
}

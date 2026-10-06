# Zmiany techniczne (teksty i kolory bez zmian)

## Mniej `'use client'`
Komponenty klienckie zostały ograniczone do małych, niezależnych "wysp":
`MobileMenu`, `ScrollSpy`, `AnimatedCounter`, `ContactForm`, `CopyEmailButton`,
`MapEmbed`, `CookieBanner`, `CookieSettingsButton`, `AnalyticsLoader`
(+ wymagane przez Next.js `error.tsx` i `global-error.tsx`).

Na serwerze renderują się teraz: Navbar, Footer, Cennik, FAQ, Kontakt
(wcześniej w całości klienckie) oraz cały układ strony – usunięto
`CookieConsentProvider`, który opakowywał całą aplikację (zastąpił go
magazyn zgód `lib/consent.ts` na `useSyncExternalStore`).

- FAQ: natywne `<details name="faq">` – zero JS, treść w HTML.
- Podświetlanie sekcji w menu: `aria-current` ustawiane przez `ScrollSpy`.
- Formularz: `useActionState` + Server Action – działa także przed
  załadowaniem JS, dane nie giną po błędzie, fokus na błędnym polu.

## Wydajność
- logo.svg: 164 KB (osadzony PNG) → ~5 KB prawdziwego wektora.
- Usunięte nieużywane zależności: clsx, tailwind-merge,
  class-variance-authority, tw-animate-css, shadcn.
- Obraz hero: statyczny import (rozmyty podgląd, brak CLS), `preload`,
  usunięte metadane EXIF. Animacja licznika bez re-renderów Reacta.
- Mniej wariantów obrazów (deviceSizes/imageSizes) = mniej transformacji.

## SEO
- JSON-LD: `LegalService` (podtyp LocalBusiness), naprawione logo
  (wcześniej wskazywało nieistniejący plik), oferta z ceną od 2900 PLN.
- Artykuł: autor jako osoba, wydawca powiązany z firmą, poprawione `@id`,
  tytuł bez zbyt długiego doklejonego szablonu.
- Manifest generowany z `content/site.ts`, ikony 192/512/maskable,
  `icon.svg`, `favicon.ico`, `apple-icon` na białym tle.
- Sitemap z datą strony głównej i obrazami; robots bez zbędnego `/api/`.

## Bezpieczeństwo
- CSP uzupełnione o domeny GA4, `frame-ancestors 'none'`,
  `upgrade-insecure-requests`; nagłówki COOP, rozszerzony
  Permissions-Policy, wyłączony `X-Powered-By`.
- Limit wysyłek formularza: 5/min na IP (Cloudflare Rate Limiting,
  binding `CONTACT_RATE_LIMITER` w `wrangler.jsonc`).
- Limit rozmiaru danych Server Actions: 64 KB.
- Mapa Google w iframe z `sandbox` i ostrzejszą polityką referera.

## RODO
- Okno ustawień cookies na natywnym `<dialog>`; mechanizm zgód bez zmian
  (klucz `cookie_consent`, wersja, 12 miesięcy – zgodnie z polityką).

## Dostępność (WCAG 2.2 AA – audyt axe-core: 0 błędów)
- Jeden `<main id="tresc">` w layoucie, pasek kontaktowy jako `<aside>`.
- Nazwy linków zgodne z widocznym tekstem (logo, partner).
- Nagłówki stopki h2 (brak przeskoku poziomów), sekcje z `aria-labelledby`.
- Błędy formularza: `aria-invalid`, `aria-describedby`, fokus na polu.
- Komunikat "Skopiowano" ogłaszany przez stały region `role="status"`.
- Minimalny rozmiar tekstu 11 px (wcześniej 9–10,5 px), większe pola
  dotyku, dwie poprawki kontrastu w /publikacje
  (użyte istniejące kolory palety: green-contrast i green-light).

## Responsywność / UX
- Na telefonie przykleja się tylko pasek z logo (64 px zamiast ~115 px);
  dodany przycisk "Zadzwoń" obok menu.
- Menu mobilne zamyka się po Esc, kliknięciu poza nim i zmianie strony.

## Wdrożenie
1. `pnpm install`
2. Sekrety: `wrangler secret put RESEND_API_KEY` (opcjonalnie RESEND_FROM_EMAIL)
3. `pnpm deploy`

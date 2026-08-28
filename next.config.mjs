const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // USUNIĘTO: typescript: { ignoreBuildErrors: true }
  // To ustawienie wyłączało twardą barierę jakości - błędy typów mogłyby
  // trafiać na produkcję niezauważone. Jeśli w repo są aktualnie błędy
  // typów, napraw je zamiast przywracać tę flagę. Jeżeli to był świadomy,
  // tymczasowy workaround na czas developmentu, przywróć go z komentarzem
  // wyjaśniającym dlaczego i na jak długo.
  images: {
    unoptimized: true,
  },

  // Nagłówki bezpieczeństwa. Cloudflare/OpenNext obsługuje headers() z
  // Next.js w warstwie SSR (Workers), więc nie trzeba dublować tego w
  // konfiguracji Cloudflare - to jedno źródło prawdy.
  async headers() {
    return [
      {
        // Dotyczy wszystkich ścieżek serwisu.
        source: "/:path*",
        headers: [
          {
            // Ochrona przed clickjackingiem - strona nie może być
            // osadzona w <iframe> na obcej domenie.
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Ogranicza ilość danych o URL wysyłanych w nagłówku Referer
            // przy przechodzeniu na inne domeny.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Blokuje próby "zgadywania" typu MIME przez przeglądarkę.
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Wyłącza dostęp do wrażliwych API przeglądarki, których
            // strona nie potrzebuje.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Wymusza HTTPS w kolejnych wizytach (Cloudflare i tak
            // wymusza HTTPS na brzegu, to dodatkowe zabezpieczenie po
            // stronie przeglądarki).
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          {
            // Content-Security-Policy dopasowana do realnie używanych
            // zewnętrznych zasobów: Google Analytics 4 (@next/third-parties)
            // oraz Google Maps (embed w sekcji kontaktowej).
            //
            // 'unsafe-inline' w script-src/style-src jest tu świadomym
            // kompromisem: strona wstrzykuje statyczne dane JSON-LD przez
            // dangerouslySetInnerHTML (layout.tsx, Faq.tsx) oraz korzysta
            // z inline style={{ border: 0 }} na iframe z mapą. Te dane są
            // w 100% statyczne i kontrolowane przez kod, nie pochodzą od
            // użytkownika, więc realne ryzyko XSS jest znikome. Docelowo
            // można to wzmocnić przez CSP z nonce dla <script>, jeśli
            // pojawi się taka potrzeba.
            //
            // 'unsafe-eval' jest dodawane WYŁĄCZNIE w trybie dev - Next.js
            // (Fast Refresh, error overlay) używa eval() do rekonstrukcji
            // stack traców podczas developmentu. Na produkcji (`next build`
            // / `next start`, czyli też deploy na Cloudflare) ten wpis się
            // nie pojawia, więc nie osłabia CSP na żywej stronie.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${
                isDev ? " 'unsafe-eval'" : ""
              } https://www.googletagmanager.com https://www.google-analytics.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
              "font-src 'self' data:",
              `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com${
                isDev ? " ws:" : ""
              }`,
              "frame-src https://www.google.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());

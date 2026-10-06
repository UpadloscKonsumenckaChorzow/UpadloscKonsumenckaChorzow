import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isDev = process.env.NODE_ENV !== "production";

/*
 * Content-Security-Policy.
 * - 'unsafe-inline' w script-src jest wymagane przez statycznie generowane
 *   strony Next.js (skrypty hydracji). Nonce wymusiłby renderowanie każdej
 *   strony na żądanie, co spowolniłoby serwis – przy braku treści od
 *   użytkowników na stronach to rozsądny kompromis.
 * - Domeny Google Analytics zgodnie z oficjalnym przewodnikiem CSP dla GA4.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://*.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self'",
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com${isDev ? " ws: wss:" : ""}`,
  "frame-src https://www.google.com https://maps.google.com",
  "manifest-src 'self'",
  "worker-src 'self'",
  "media-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "bluetooth=()",
      "serial=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "browsing-topics=()",
    ].join(", "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    // Ten sam adres (url + szerokość + jakość) zawsze daje ten sam plik,
    // więc rok w pamięci podręcznej jest bezpieczny.
    minimumCacheTTL: 31536000,
    // Mniej wariantów = mniej transformacji w Cloudflare Images i lepsze
    // trafienia w cache. Pokrywa telefony (1x–3x) i duże ekrany.
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [96, 128, 256, 384],
  },

  experimental: {
    serverActions: {
      // Formularz kontaktowy to kilka pól tekstowych – 1 MB (domyślnie)
      // to niepotrzebnie duże pole do nadużyć.
      bodySizeLimit: "64kb",
    },
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

// Udostępnia bindingi Cloudflare (np. limiter formularza) podczas `next dev`.
if (isDev) initOpenNextCloudflareForDev();

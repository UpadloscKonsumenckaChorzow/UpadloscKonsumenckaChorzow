const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Obraz z tym samym zapytaniem (url+w+q) jest identyczny przy każdym
   // requeście — 1 rok cache jest bezpieczny. Wcześniej brak tego ustawienia
   // powodował ponowne pobieranie 66 KiB przy każdej wizycie.
   minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${
                isDev ? " 'unsafe-eval'" : ""
              } https://www.googletagmanager.com https://www.google-analytics.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com",
              "font-src 'self' data:",
              `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com${
                isDev ? " ws:" : ""
              }`,
              "frame-src https://www.google.com https://maps.google.com",
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

"use client";

import { useEffect } from "react";
import { site } from "@/content/site";

/*
 * Ta strona zastępuje CAŁY układ strony (app/layout.tsx), gdy błąd wystąpi
 * w nim samym – np. w nagłówku, stopce albo w dostawcy zgód cookies.
 *
 * Dlatego:
 * - ma własne <html> i <body>,
 * - nie korzysta z Tailwinda, czcionek ani komponentów z layoutu – style są
 *   wpisane poniżej, żeby strona wyglądała dobrze nawet wtedy, gdy reszta
 *   aplikacji się nie załadowała,
 * - kolory są takie same jak w mailu z formularza kontaktowego.
 */
const styles = `
*{box-sizing:border-box}
body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:#f1f5f9;color:#1e293b;line-height:1.6;-webkit-font-smoothing:antialiased}
.ge-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:48px 20px}
.ge-card{width:100%;max-width:560px;background:#fff;border:1px solid #e2e8f0;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px -10px rgba(15,23,42,.15);text-align:center}
.ge-top{background:#0f172a;border-bottom:3px solid #16a34a;padding:32px 24px;color:#fff}
.ge-icon{width:64px;height:64px;margin:0 auto 16px;border-radius:18px;background:rgba(220,38,38,.12);border:1px solid rgba(248,113,113,.4);display:flex;align-items:center;justify-content:center;color:#f87171}
.ge-eyebrow{margin:0;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#4ade80}
.ge-title{margin:8px 0 0;font-size:28px;line-height:1.2;font-weight:700}
.ge-body{padding:28px 24px}
.ge-text{margin:0;font-size:16px;color:#475569}
.ge-actions{margin-top:24px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.ge-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;flex:1 1 200px;padding:14px 20px;border-radius:12px;font:inherit;font-size:15px;font-weight:600;text-decoration:none;cursor:pointer;transition:background-color .15s}
.ge-btn-primary{background:#0f172a;color:#fff;border:1px solid #0f172a}
.ge-btn-primary:hover{background:#1e293b}
.ge-btn-secondary{background:#fff;color:#0f172a;border:1px solid #cbd5e1}
.ge-btn-secondary:hover{background:#f8fafc}
.ge-btn:focus-visible,.ge-phone:focus-visible{outline:3px solid #16a34a;outline-offset:2px}
.ge-contact{margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0}
.ge-contact p{margin:0;font-size:14px;color:#64748b}
.ge-phone{display:inline-block;margin-top:6px;font-size:18px;font-weight:700;color:#0f172a;text-decoration:none}
.ge-phone:hover{color:#15803d}
.ge-digest{margin:20px 0 0;font-size:12px;color:#94a3b8}
.ge-digest code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;user-select:all}
`;

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Kod błędu (digest) pozwala znaleźć ten sam błąd w logach Cloudflare.
    console.error(
      "Krytyczny błąd aplikacji:",
      error.digest ?? "(brak kodu)",
      error,
    );
  }, [error]);

  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Strona błędu nie powinna trafić do wyników Google. */}
        <meta name="robots" content="noindex" />
        <title>{`Wystąpił błąd · ${site.name}`}</title>
        <style>{styles}</style>
      </head>
      <body>
        <main className="ge-wrap">
          <div className="ge-card">
            <div className="ge-top">
              <div className="ge-icon" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <p className="ge-eyebrow">Wystąpił nieoczekiwany problem</p>
              <h1 className="ge-title">Coś poszło nie tak</h1>
            </div>

            <div className="ge-body">
              <p className="ge-text">
                Przepraszamy za utrudnienia. Strona nie mogła się poprawnie
                załadować. Odśwież ją lub wróć na stronę główną.
              </p>

              <div className="ge-actions">
                {/* Pełne przeładowanie – przy błędzie w układzie strony to
                    najpewniejszy sposób, bo pobiera całą aplikację od nowa. */}
                <button
                  type="button"
                  className="ge-btn ge-btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Odśwież stronę
                </button>
                {/* Zwykły link zamiast next/link – wymusza pełne załadowanie
                    strony głównej zamiast nawigacji w zepsutej aplikacji. */}
                <a href="/" className="ge-btn ge-btn-secondary">
                  Strona główna
                </a>
              </div>

              <div className="ge-contact">
                <p>
                  Pilna sprawa? Zadzwoń do nas (pon.–pt.{" "}
                  {site.hours.weekday.display}):
                </p>
                <a href={site.phone.href} className="ge-phone">
                  {site.phone.display}
                </a>
                <p>
                  lub napisz:{" "}
                  <a
                    href={site.email.href}
                    style={{ color: "#0f172a", fontWeight: 600 }}
                  >
                    {site.email.display}
                  </a>
                </p>

                {error.digest && (
                  <p className="ge-digest">
                    Jeśli problem się powtarza, podaj nam ten kod błędu:{" "}
                    <code>{error.digest}</code>
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

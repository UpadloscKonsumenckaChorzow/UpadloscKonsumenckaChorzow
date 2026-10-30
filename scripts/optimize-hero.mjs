/**
 * Gotowe, lekkie wersje zdjęcia z sekcji hero (AVIF + WebP w kilku
 * szerokościach). Serwowane jako zwykłe pliki statyczne z CDN Cloudflare –
 * bez przetwarzania obrazu przy każdym wejściu na stronę.
 *
 * Uruchom po podmianie public/rodzinka.jpg:
 *   node scripts/optimize-hero.mjs
 */
import { mkdir } from "node:fs/promises";
import { createRequire } from "node:module";

// sharp jest zależnością Next.js – szukamy go tam, gdzie zainstalował go pnpm.
const require = createRequire(import.meta.url);
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next")] }));

const SOURCE = "public/rodzinka.jpg";
const OUT_DIR = "public/hero";
export const WIDTHS = [400, 600, 800, 1024];

await mkdir(OUT_DIR, { recursive: true });

for (const width of WIDTHS) {
  const base = sharp(SOURCE).resize({ width, withoutEnlargement: true });
  const avif = await base.clone().avif({ quality: 58, effort: 6 }).toFile(`${OUT_DIR}/rodzinka-${width}.avif`);
  const webp = await base.clone().webp({ quality: 80, effort: 6 }).toFile(`${OUT_DIR}/rodzinka-${width}.webp`);
  console.log(`${width}px  avif ${(avif.size / 1024).toFixed(1)} KB  webp ${(webp.size / 1024).toFixed(1)} KB`);
}

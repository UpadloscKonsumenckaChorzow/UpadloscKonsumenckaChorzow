import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // Wszystkie strony są statyczne (bez revalidate), więc gotowy HTML z
  // budowania jest podawany prosto ze static assets. Bez tego każde wejście
  // generowało stronę od nowa w Workerze (x-nextjs-cache: MISS, ~0,9 s TTFB).
  incrementalCache: staticAssetsIncrementalCache,
  // Strona z cache wraca, zanim załaduje się serwer Next.js – krótszy
  // czas odpowiedzi, zwłaszcza przy "zimnym" starcie Workera.
  enableCacheInterception: true,
});

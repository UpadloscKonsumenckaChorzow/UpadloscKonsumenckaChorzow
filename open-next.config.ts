import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Wszystkie strony są generowane statycznie podczas budowania, więc
// domyślna konfiguracja wystarcza. Gdyby pojawiły się strony z ISR
// (revalidate), warto włączyć cache w R2:
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({});

/**
 * Dane strukturalne dla wyszukiwarek. Zamiana "<" na \u003c to zalecane
 * przez Next.js zabezpieczenie przed przedwczesnym zamknięciem <script>.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

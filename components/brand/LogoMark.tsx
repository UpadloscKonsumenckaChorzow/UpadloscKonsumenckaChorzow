/**
 * Znak graficzny (tarcza z liściem).
 * Wcześniej logo.svg ważyło 164 KB, bo zawierało osadzony obraz PNG.
 * Teraz /logo.svg to prawdziwy wektor (~5 KB): ostry w każdej skali,
 * pobierany raz i trzymany w cache dla wszystkich podstron.
 * Zwykły <img> zamiast next/image – SVG nie wymaga optymalizacji.
 * alt="" – obok logo zawsze stoi nazwa marki jako zwykły tekst.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.svg" alt="" width={34} height={40} decoding="async" className={className} />
  );
}

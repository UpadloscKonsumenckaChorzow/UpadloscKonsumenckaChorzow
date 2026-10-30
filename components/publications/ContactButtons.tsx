import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/content/site";

/**
 * Para przycisków "Zadzwoń" + "Konsultacja" na granatowym tle – te same
 * klasy co w pierwszym artykule, żeby wszystkie publikacje wyglądały tak samo.
 * Na telefonie stoją obok siebie (krótsze etykiety), żeby nie zajmowały
 * połowy ekranu.
 */
export function ContactButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-3.5 ${className}`}
    >
      <a
        href={site.phone.href}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green px-3 py-3 text-sm font-semibold text-navy-900 shadow-md transition-[background-color,transform] hover:bg-green-light hover:scale-105 whitespace-nowrap sm:px-5"
      >
        <Phone className="size-4 shrink-0" aria-hidden="true" />
        <span className="sm:hidden">Zadzwoń</span>
        <span className="hidden sm:inline">Zadzwoń: {site.phone.display}</span>
      </a>
      <Link
        href="/#kontakt"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm font-semibold text-white transition-[background-color,border-color] hover:border-green hover:bg-white/10 whitespace-nowrap sm:px-5"
      >
        <span className="sm:hidden">Konsultacja</span>
        <span className="hidden sm:inline">Umów bezpłatną konsultację</span>
        <ArrowRight className="size-4 shrink-0 text-green" aria-hidden="true" />
      </Link>
    </div>
  );
}

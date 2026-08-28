"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
} from "lucide-react";

export function Contact() {
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-navy py-8 text-white sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* NAGŁÓWEK SEKCJI WEDŁUG WYTYCZNYCH */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            <PhoneCall className="size-4" />
            Kontakt
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Zrób pierwszy krok
          </h2>
          <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
            Nie musisz dzisiaj rozwiązywać całego problemu, wystarczy, że
            poznasz swoje możliwości.
          </p>
          <p className="mt-2 text-base text-gold font-medium">
            Umów konsultację i przedstaw swoją sytuację.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEWA KOLUMNA: DANE, GODZINY I MAPA GOOGLE */}
          <div className="space-y-6">
            {/* Kartka z danymi kontaktowymi */}
            <div className="space-y-5 rounded-3xl bg-white/5 p-6 sm:p-8 backdrop-blur border border-white/10">
              <h3 className="font-display text-xl font-bold text-gold">
                Dane kontaktowe
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:515515314"
                  className="flex items-center gap-4 group"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      TELEFON
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      515 515 314
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:kontakt@kancelaria.pl"
                  className="flex items-center gap-4 group"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      E-MAIL
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      kontakt@kancelaria.pl
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.14em] text-white/50">
                      KANCELARIA / BIURO
                    </span>
                    <span className="font-semibold text-base sm:text-lg">
                      ul. Wolności 12, 41-500 Chorzów
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Obsługa online + Godziny otwarcia biura */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-gold text-sm">
                  <Globe className="size-4" />
                  Obsługa online
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Sprawę poprowadzimy w pełni zdalnie dla mieszkańców całego
                  Śląska i Polski.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <p className="flex items-center gap-2 font-semibold text-gold text-sm">
                  <Clock className="size-4" />
                  Godziny otwarcia biura
                </p>
                <dl className="mt-3 space-y-1.5 text-xs text-white/85">
                  <div className="flex justify-between">
                    <dt>Poniedziałek – Piątek:</dt>
                    <dd className="font-semibold text-gold">9:00 – 18:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sobota:</dt>
                    <dd className="font-semibold text-gold">9:00 – 14:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Niedziela:</dt>
                    <dd className="text-white/50">Zamknięte</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Mapa Google wbudowana w ramkę */}
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <p className="bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold border-b border-white/10 flex items-center gap-2">
                <MapPin className="size-4" />
                Lokalizacja biura (Google Maps)
              </p>
              <iframe
                title="Lokalizacja biura Chorzów Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40810.19830588523!2d18.9181146!3d50.3005852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce399995be0d%3A0x1c8b3297a7a58231!2sChorz%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </div>

          {/* PRAWA KOLUMNA: FORMULARZ KONTAKTOWY */}
          <div className="rounded-3xl bg-white p-8 text-ink shadow-2xl lg:p-10">
            <h3 className="font-display text-2xl font-bold text-ink">
              Umów konsultację
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              Przedstaw swoją sytuację. Odpowiadamy tego samego dnia roboczego.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-navy/5 p-6 text-center text-sm font-medium text-navy">
                Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z
                Tobą najszybciej jak to możliwe.
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink">
                      Imię i nazwisko
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Jan Kowalski"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink">
                      Numer telefonu
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="515 515 314"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-ink">
                    Adres e-mail
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="jan@przyklad.pl"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-ink">
                    Przedstaw swoją sytuację
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Np. wysokość i rodzaj zobowiązań, e-mail, czy jest komornik..."
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-navy"
                  />
                </label>

                <label className="flex items-start gap-3 text-xs leading-relaxed text-ink/60">
                  <input
                    type="checkbox"
                    required
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-black/20"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                    kontaktu ws. upadłości konsumenckiej.
                  </span>
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:scale-[1.01] shadow-md"
                >
                  <Send className="size-4 text-gold" />
                  Wyślij i umów bezpłatną konsultację
                </button>

                <p className="text-center text-[11px] leading-relaxed text-ink/50">
                  Rozmowa jest całkowicie bezpłatna i niezobowiązująca.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

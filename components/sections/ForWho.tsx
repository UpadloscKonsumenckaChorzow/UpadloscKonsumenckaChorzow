import {
  Users,
  ArrowRight,
  RefreshCw,
  FileText,
  PhoneOff,
  TrendingUp,
  CreditCard,
  Home,
  HelpCircle,
  Phone,
} from "lucide-react";
import { site } from "@/content/site";

const situations = [
  {
    text: "Spłacasz jedną pożyczkę kolejną",
    icon: RefreshCw,
  },
  {
    text: "Otrzymujesz pisma od wierzycieli lub komornika",
    icon: FileText,
  },
  {
    text: "Masz już dosyć telefonów z firm windykacyjnych",
    icon: PhoneOff,
  },
  {
    text: "Wysokość zadłużenia rośnie mimo regularnych wpłat",
    icon: TrendingUp,
  },
  {
    text: "Nie jesteś już w stanie spłacać wszystkich zobowiązań",
    icon: CreditCard,
  },
  {
    text: "Boisz się o swoje mieszkanie, wynagrodzenie i przyszłość bliskich",
    icon: Home,
  },
  {
    text: "Nie wiesz, od czego zacząć formalności",
    icon: HelpCircle,
  },
];

export function ForWho() {
  return (
    <section id="dla-kogo" className="scroll-mt-24 bg-mint py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            <Users className="size-4 text-green" />
            Dla kogo
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Długi przejęły kontrolę nad Twoim życiem?
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {situations.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === situations.length - 1;
            return (
              <div
                key={item.text}
                className={`flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-green/50 hover:shadow-md ${
                  isLast
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)]"
                    : "w-full"
                }`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-green">
                  <Icon className="size-5" />
                </span>
                <p className="text-base font-medium leading-snug text-ink/85">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-navy p-8 text-center text-white shadow-xl sm:p-12">
          <h3 className="font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            Porozmawiajmy o Twojej sytuacji – umów się na bezpłatną konsultację
          </h3>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            Przeanalizujemy Twoją sprawę poufnie, bez opłat i bez zobowiązań.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all hover:bg-green-light hover:scale-105"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="size-5" />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-green hover:bg-white/15"
            >
              <Phone className="size-5 text-green" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

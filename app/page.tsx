import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { ForWho } from "@/components/sections/ForWho";
import { WhyUs } from "@/components/sections/WhyUs";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="bg-mint min-h-screen text-ink">
      <Hero />
      <ForWho />
      <Process />
      <Pricing />
      <WhyUs />
      <Faq />
      <Contact />
    </main>
  );
}

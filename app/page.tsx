import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { About } from "@/components/sections/about";
import { ChaosTransition } from "@/components/sections/chaos-transition";
import { Contact } from "@/components/sections/contact";
import { Formats } from "@/components/sections/formats";
import { Hero } from "@/components/sections/hero";
import { LatestContent } from "@/components/sections/latest-content";
import { Schmenunity } from "@/components/sections/schmenunity";
import { Socials } from "@/components/sections/socials";
import { Statement } from "@/components/sections/statement";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-medium text-black focus:translate-y-0"
      >
        Zum Inhalt springen
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Statement />
        <LatestContent />
        <Formats />
        <ChaosTransition />
        <About />
        <Schmenunity />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

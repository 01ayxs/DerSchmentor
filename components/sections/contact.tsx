import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section id="kontakt" className="site-shell py-24 sm:py-28 md:py-44">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <h2 className="text-balance text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Lass uns was machen.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-white/48">
            Business, Kooperationen oder einfach eine gute Idee?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

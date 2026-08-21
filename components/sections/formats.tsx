import Image from "next/image";
import { formats } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Formats() {
  return (
    <section className="border-y border-white/8 bg-[#080808] py-24 sm:py-28 md:py-44">
      <div className="site-shell">
        <Reveal>
          <SectionHeading title="Unsere Formate" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[25rem] gap-4 sm:auto-rows-[27rem] md:mt-20 md:grid-cols-2 md:auto-rows-[22rem] lg:grid-cols-3">
          {formats.map((format, index) => (
            <Reveal
              key={format.title}
              delay={index * 0.08}
              className={format.variant === "wide" ? "md:col-span-2" : format.variant === "tall" ? "md:row-span-2" : ""}
            >
              <a
                href={format.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${format.title} auf YouTube ansehen`}
                className="block h-full"
              >
                <article className="group relative flex h-full min-h-[25rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111112] transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#141415] sm:min-h-[27rem] md:min-h-[22rem] md:rounded-[2rem]">
                  <div className="relative min-h-40 flex-[1.05] overflow-hidden bg-[#0b0b0c]">
                    <Image
                      src={format.image}
                      alt={format.imageAlt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 48vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-black/10 to-black/5" />
                  </div>
                  <div className="relative z-10 flex flex-[0.95] flex-col justify-end p-6 transition-transform duration-500 group-hover:-translate-y-1 md:p-8">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">{format.eyebrow}</p>
                    <h3 className="max-w-2xl text-[clamp(2.1rem,4.5vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
                      {format.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/44">{format.description}</p>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { formats } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Formats() {
  return (
    <section className="border-y border-white/8 bg-[#080808] py-28 md:py-44">
      <div className="site-shell">
        <Reveal>
          <SectionHeading title="Unsere Formate" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[18rem] gap-4 md:mt-20 md:grid-cols-2 md:auto-rows-[20rem] lg:grid-cols-3">
          {formats.map((format, index) => (
            <Reveal
              key={format.title}
              delay={index * 0.08}
              className={format.variant === "wide" ? "md:col-span-2" : format.variant === "tall" ? "md:row-span-2" : ""}
            >
              <article className="group relative flex h-full min-h-[18rem] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111112] p-6 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#141415] md:min-h-[20rem] md:rounded-[2rem] md:p-9">
                <div className="transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">{format.eyebrow}</p>
                  <h3 className="max-w-2xl text-[clamp(2.25rem,4.5vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
                    {format.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/44">{format.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

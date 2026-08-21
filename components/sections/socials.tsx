import { ArrowUpRight, Camera, Music2, Play, Radio } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { socials } from "@/lib/site-data";

const icons = {
  YouTube: Play,
  TikTok: Music2,
  Instagram: Camera,
  Twitch: Radio,
};

export function Socials() {
  return (
    <section id="socials" className="border-y border-white/8 bg-[#080808] py-28 md:py-44">
      <div className="site-shell">
        <Reveal>
          <SectionHeading align="center" title="Folge dem Chaos überall." />
        </Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {socials.map((social, index) => {
            const Icon = icons[social.name];
            return (
              <Reveal key={social.name} delay={index * 0.07}>
                <a
                  href={social.href}
                  data-platform={social.name}
                  aria-label={`${social.name} öffnen`}
                  className="social-card group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111112] p-6 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-white/24 md:min-h-72 md:rounded-[1.75rem] md:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-5 text-white/38 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-3xl font-semibold tracking-[-0.045em]">{social.name}</h3>
                    <p className="mt-2 text-sm text-white/40">{social.handle}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

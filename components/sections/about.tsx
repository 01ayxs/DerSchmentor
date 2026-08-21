import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "—", label: "Abonnenten" },
  { value: "—", label: "Videos" },
  { value: "2026", label: "Seit" },
];

export function About() {
  return (
    <section id="ueber-uns" className="site-shell py-32 md:py-56">
      <div className="max-w-6xl">
        <Reveal>
          <h2 className="text-balance text-[clamp(3.1rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Das ist DerSchmentor.
          </h2>
          <blockquote className="mt-10 max-w-4xl text-[clamp(1.35rem,2.6vw,2.15rem)] leading-snug tracking-[-0.03em] text-white/58 md:mt-14">
            Angefangen mit einer Kamera, zu vielen schlechten Ideen und dem Ziel, daraus verdammt gute Videos zu machen.
          </blockquote>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-3 gap-5 md:mt-36 md:gap-12">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <p className="text-[clamp(2.7rem,7vw,7rem)] font-semibold leading-none tracking-[-0.07em]">{stat.value}</p>
            <p className="mt-3 text-xs text-white/46 md:mt-5 md:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

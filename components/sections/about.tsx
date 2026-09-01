import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

type AboutProps = {
  subscriberCount: number;
  videoCount: number;
};

export function About({ subscriberCount, videoCount }: AboutProps) {
  const stats = [
    { value: subscriberCount, start: 0, label: "Abonnenten" },
    { value: videoCount, start: 0, label: "Videos" },
    { value: 2026, start: 2000, label: "Seit" },
  ];

  return (
    <section id="ueber-uns" className="site-shell py-24 sm:py-32 md:py-56">
      <div className="max-w-6xl">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.9rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Das ist DerSchmentor.
          </h2>
          <blockquote className="mt-10 max-w-4xl text-[clamp(1.35rem,2.6vw,2.15rem)] leading-snug tracking-[-0.03em] text-white/58 md:mt-14">
            Angefangen mit einer Kamera, zu vielen schlechten Ideen und dem Ziel, daraus verdammt gute Videos zu machen.
          </blockquote>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-3 sm:mt-24 sm:gap-5 md:mt-36 md:gap-12">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <AnimatedCounter
              value={stat.value}
              start={stat.start}
              className="block text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.07em]"
            />
            <p className="mt-3 text-xs text-white/46 md:mt-5 md:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

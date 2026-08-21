"use client";

import { ArrowUpRight, MessagesSquare } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Schmenunity() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 0 : 36, reducedMotion ? 0 : -36]);
  const initial = reducedMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" };

  return (
    <section
      ref={ref}
      id="schmenunity"
      className="relative flex min-h-[105svh] items-center overflow-hidden border-y border-white/8 bg-[#080808] py-32 md:py-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(160,165,180,0.09),transparent_34%)]" />
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 hidden select-none text-[clamp(5rem,11vw,10rem)] font-semibold tracking-[-0.07em] text-white/[0.025] sm:block"
      >
        <span className="absolute -left-8 top-[16%]">Community</span>
        <span className="absolute right-[5%] top-[48%]">Minecraft</span>
        <span className="absolute bottom-[5%] left-[22%]">Projekte</span>
      </motion.div>

      <div className="site-shell relative">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
          <div>
            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, ease }}
              className="mb-8 flex items-center gap-3"
            >
              <MessagesSquare aria-hidden="true" className="size-5 text-white/48" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/42">Community</p>
            </motion.div>
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-balance text-[clamp(3.15rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
            >
              Die Schmenunity.
            </motion.h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-lg leading-relaxed text-white/56 md:text-xl"
            >
              Der Discord für alle, die mehr wollen als nur zuschauen. Gemeinsam zocken, quatschen und bei kommenden Community-Projekten dabei sein.
            </motion.p>
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.85, delay: 0.28, ease }}
              className="mt-9 text-[clamp(1.55rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.04em] text-white/92"
            >
              Minecraft-Projekte. Community-Aktionen. Und wahrscheinlich wieder Chaos.
            </motion.p>
            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, delay: 0.38, ease }}
              className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#schmenunity"
                aria-disabled="true"
                onClick={(event) => event.preventDefault()}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Der Schmenunity beitreten
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-xs text-white/30">Discord-Link folgt</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

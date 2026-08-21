"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ChaosTransition() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0.15, 0.6], [reducedMotion ? 0 : -80, 0]);
  const rightX = useTransform(scrollYProgress, [0.35, 0.82], [reducedMotion ? 0 : 90, 0]);
  const opacity = useTransform(scrollYProgress, [0.18, 0.42], [0.15, 1]);

  return (
    <section ref={ref} className="relative flex min-h-[95svh] items-center overflow-hidden border-b border-white/8 py-24 sm:min-h-[120svh] sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="site-shell relative">
        <motion.p style={{ x: leftX, opacity }} className="text-[clamp(3.4rem,16vw,15rem)] font-semibold leading-[0.76] tracking-[-0.085em] sm:leading-[0.72]">
          Kein Plan.
        </motion.p>
        <motion.p style={{ x: rightX, opacity }} className="mt-7 text-right text-[clamp(2.9rem,14vw,13rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-white/40 sm:mt-10 sm:leading-[0.78]">
          Aber Content.
        </motion.p>
      </div>
    </section>
  );
}

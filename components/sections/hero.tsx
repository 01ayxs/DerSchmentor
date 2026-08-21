"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { siteLinks } from "@/lib/site-data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.88], [1, reducedMotion ? 1 : 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 84]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/8 pt-24"
    >
      <motion.div style={{ scale, opacity }} className="absolute inset-0 hero-vignette" />
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="absolute left-1/2 top-[31%] h-[24rem] w-[70rem] -translate-x-1/2 rounded-[100%] bg-white/[0.035] blur-[90px]"
      />

      <motion.div style={{ y, opacity }} className="site-shell relative z-10 py-20 text-center sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-[clamp(3rem,14vw,12rem)] font-semibold leading-[0.82] tracking-[-0.075em]"
        >
          DerSchmentor<span className="text-white/40">.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
        >
          <p className="mt-8 text-[clamp(1.2rem,3vw,2.2rem)] font-medium tracking-[-0.035em] text-white/90 sm:mt-9">
            Gaming. Challenges. Entertainment.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/48 md:text-lg">
            Content, der nicht ganz nach Plan läuft.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ArrowLink href={siteLinks.youtube}>YouTube ansehen</ArrowLink>
            <ArrowLink href="#statement" variant="dark">
              Mehr erfahren
            </ArrowLink>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

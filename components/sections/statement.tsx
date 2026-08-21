"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const words = ["Gaming.", "Challenges.", "Stories.", "Chaos."];

function StatementWord({ word, index, progress }: { word: string; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const start = index * 0.17 + 0.08;
  const opacity = useTransform(progress, [start, start + 0.09, start + 0.2], [0.18, 1, 0.38]);
  const x = useTransform(progress, [start, start + 0.1], [18, 0]);

  return (
    <motion.span style={{ opacity, x }} className="block">
      {word}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="statement" className="relative min-h-[210vh] border-b border-white/8 bg-[#080808]">
      <div className="site-shell sticky top-0 flex min-h-screen items-center py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-balance text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Mehr als nur Gaming.
            </h2>
          </div>
          <div className="text-[clamp(3rem,7.5vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
            {words.map((word, index) =>
              reducedMotion ? (
                <span key={word} className="block text-white/85">
                  {word}
                </span>
              ) : (
                <StatementWord key={word} word={word} index={index} progress={scrollYProgress} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

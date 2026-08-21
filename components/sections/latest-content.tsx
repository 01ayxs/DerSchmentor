"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { latestContent } from "@/lib/site-data";

export function LatestContent() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [reducedMotion ? 1 : 0.94, 1]);

  return (
    <section ref={ref} id="videos" className="site-shell py-28 md:py-44">
      <h2 className="mb-12 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.06em] md:mb-16">
        Neu auf DerSchmentor
      </h2>

      <motion.article style={{ scale }} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c0c0d] md:rounded-[2rem]">
        <a href={latestContent.href} aria-label={`${latestContent.title} – jetzt ansehen`} className="block">
          <div className="relative aspect-video overflow-hidden bg-[#111]">
            <Image
              src={latestContent.image}
              alt={latestContent.imageAlt}
              fill
              sizes="(max-width: 1536px) 100vw, 1440px"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition-[transform,background-color] duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black md:size-20">
              <Play aria-hidden="true" className="ml-1 size-5 fill-current md:size-6" />
            </span>
          </div>
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/40">{latestContent.category}</p>
              <h3 className="max-w-4xl text-[clamp(2rem,4vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
                {latestContent.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/46 md:text-base">{latestContent.description}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Jetzt ansehen
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>
      </motion.article>
    </section>
  );
}

"use client";

import { animate, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  start?: number;
  className?: string;
};

export function AnimatedCounter({ value, start = 0, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const counter = useMotionValue(reducedMotion ? value : start);
  const [displayValue, setDisplayValue] = useState(reducedMotion ? value : start);

  useMotionValueEvent(counter, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      counter.set(value);
      return;
    }

    const controls = animate(counter, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [counter, inView, reducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

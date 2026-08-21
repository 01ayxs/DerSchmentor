"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Videos", href: "#videos" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Schmenunity", href: "#schmenunity" },
  { label: "Socials", href: "#socials" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-500 ${
        scrolled || open
          ? "border-white/10 bg-black/70 py-3 backdrop-blur-xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="site-shell flex items-center justify-between" aria-label="Hauptnavigation">
        <a href="#home" className="relative z-50 text-base font-semibold tracking-[-0.03em]">
          DerSchmentor
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-white/62 transition-colors duration-300 hover:text-white xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#videos"
          className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 lg:block xl:px-5 xl:text-sm"
        >
          YouTube ansehen
        </a>

        <button
          type="button"
          className="relative z-50 grid size-10 place-items-center rounded-full border border-white/14 bg-white/6 lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex min-h-dvh flex-col justify-end bg-[#070707] px-5 pb-8 pt-24 lg:hidden"
          >
            <div className="absolute inset-0 hero-vignette opacity-70" />
            <div className="relative flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.45 }}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3.5 text-[clamp(1.8rem,9vw,3.5rem)] font-semibold leading-none tracking-[-0.05em]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#videos"
                onClick={() => setOpen(false)}
                className="mt-8 flex min-h-13 items-center justify-center rounded-full bg-white font-medium text-black"
              >
                YouTube ansehen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

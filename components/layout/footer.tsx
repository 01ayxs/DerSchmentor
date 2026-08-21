import Image from "next/image";
import { socials } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="site-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div>
            <a href="#home" aria-label="DerSchmentor – zur Startseite" className="inline-flex items-center gap-3 text-xl font-semibold tracking-[-0.04em]">
              <Image src="/derschmentor-logo.jpg" alt="" width={42} height={42} className="size-10 rounded-full object-cover" />
              <span>DerSchmentor</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/36">Gaming, Challenges & Entertainment.</p>
          </div>
          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/28">Social</p>
            <div className="grid gap-2.5 text-sm text-white/56">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/28">Rechtliches</p>
            <div className="grid gap-2.5 text-sm text-white/56">
              <a href="#" className="transition-colors hover:text-white">Impressum</a>
              <a href="#" className="transition-colors hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-[0.7rem] text-white/26 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DerSchmentor</span>
          <span>Made with questionable decisions.</span>
        </div>
      </div>
    </footer>
  );
}

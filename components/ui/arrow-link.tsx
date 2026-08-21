import { ArrowUpRight } from "lucide-react";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export function ArrowLink({ href, children, variant = "light" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 ${
        variant === "light"
          ? "bg-white text-black hover:bg-zinc-200"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && (
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-white/40">{eyebrow}</p>
      )}
      <h2 className="text-balance text-[clamp(3rem,7.5vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed text-white/48 md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {copy}
        </p>
      )}
    </div>
  );
}

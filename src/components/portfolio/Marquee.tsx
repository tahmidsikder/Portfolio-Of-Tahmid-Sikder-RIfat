"use client";

import { marqueeRows } from "@/data/portfolio";

export default function Marquee() {
  return (
    <section
      aria-label="Disciplines"
      className="relative border-y border-line py-12 sm:py-20"
    >
      {/* Top row — left to right */}
      <div className="group relative flex overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap pr-8 group-hover:[animation-play-state:paused]">
          {[...marqueeRows.top, ...marqueeRows.top].map((item, i) => (
            <MarqueeItem key={`t-${i}`} text={item} variant="primary" />
          ))}
        </div>
      </div>

      {/* Bottom row — right to left, smaller, muted */}
      <div className="group relative mt-6 flex overflow-hidden sm:mt-10">
        <div className="flex animate-[marquee-reverse_50s_linear_infinite] gap-6 whitespace-nowrap pr-6 group-hover:[animation-play-state:paused]">
          {[...marqueeRows.bottom, ...marqueeRows.bottom].map((item, i) => (
            <MarqueeItem key={`b-${i}`} text={item} variant="muted" />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeItem({
  text,
  variant,
}: {
  text: string;
  variant: "primary" | "muted";
}) {
  if (variant === "primary") {
    return (
      <div className="flex items-center gap-8">
        <span className="font-display text-3xl font-medium tracking-tight text-bone sm:text-5xl">
          {text}
        </span>
        <span className="font-mono text-xs text-ember">✦</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-6">
      <span className="font-mono text-sm uppercase tracking-widest text-mist sm:text-base">
        {text}
      </span>
      <span className="text-mist-dim">—</span>
    </div>
  );
}

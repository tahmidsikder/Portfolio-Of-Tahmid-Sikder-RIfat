"use client";

import { profile, nav } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element) => void } }).__lenis;
    if (el && lenis) lenis.scrollTo(el);
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto border-t border-line bg-ink-soft py-12">
      <div className="container-edge">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Left: brand */}
          <div className="flex flex-col gap-3">
            <button
              onClick={scrollTop}
              data-cursor
              data-cursor-label="Top"
              className="link-underline font-display text-2xl text-bone self-start"
            >
              {profile.initials}
            </button>
            <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Portfolio / {year}
            </span>
          </div>

          {/* Center: nav */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                data-cursor
                className="link-underline font-mono text-[11px] uppercase tracking-widest text-bone-soft transition-colors hover:text-ember"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: back to top */}
          <div className="flex justify-start gap-4 md:justify-end">
            <button
              onClick={scrollTop}
              data-cursor
              data-cursor-label="Top"
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-bone-soft transition-colors hover:text-ember"
            >
              Back to top
              <svg
                className="h-3 w-3 transition-transform group-hover:-translate-y-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-mist sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Designed & built with care · {profile.location}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Next.js · GSAP · Lenis · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}

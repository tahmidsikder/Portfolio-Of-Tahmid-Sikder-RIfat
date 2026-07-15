"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certification } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certification() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-cert]", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-20 sm:py-32">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-2 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              06
            </span>
            <span className="eyebrow">Certification / Credential</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            Verified
          </span>
        </div>

        {/* Single premium card */}
        <a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          data-cursor-label="Verify"
          className="group relative block overflow-hidden rounded-[2px] border border-line bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-ember/40 hover:bg-white/[0.025]"
        >
          {/* Top hairline grow */}
          <div
            aria-hidden
            className="absolute left-0 top-0 h-px w-0 bg-ember transition-all duration-1000 ease-out group-hover:w-full"
          />

          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12 lg:p-14">
            {/* Left: large badge mark */}
            <div
              data-cert
              className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-line-strong transition-all duration-700 group-hover:border-ember/50" />
              {/* Inner ring */}
              <div className="absolute inset-3 rounded-full border border-line transition-all duration-700 group-hover:rotate-180 group-hover:border-ember/30" />
              {/* Center mark */}
              <svg
                className="h-8 w-8 text-bone transition-colors duration-500 group-hover:text-ember"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            {/* Middle: title + meta */}
            <div data-cert className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl text-bone transition-colors duration-500 group-hover:text-ember sm:text-3xl">
                  {certification.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-mist">
                  · {certification.year}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                    Issued by
                  </span>
                  <span className="font-display text-base text-bone-soft">
                    {certification.issuer}
                  </span>
                </div>
                <div className="hidden h-3 w-px bg-line sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                    Reg. No.
                  </span>
                  <span className="font-mono text-sm text-bone-soft">
                    {certification.regNo}
                  </span>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-mist">
                {certification.description}
              </p>
            </div>

            {/* Right: verify CTA */}
            <div
              data-cert
              className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-3"
            >
              <div className="flex flex-col items-start gap-1 lg:items-end">
                <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                  Verification
                </span>
                <span className="font-display text-base text-bone transition-colors group-hover:text-ember">
                  Verify credential
                </span>
              </div>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                <svg
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

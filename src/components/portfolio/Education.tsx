"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const statusMap = {
  current: { label: "Current", color: "bg-ember" },
  completed: { label: "Completed", color: "bg-bone" },
  transferred: { label: "Transferred", color: "bg-mist" },
} as const;

export default function Education() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-edu-row]", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-edu-list]",
          start: "top 75%",
        },
      });

      // Vertical progress line
      gsap.fromTo(
        "[data-edu-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: "[data-edu-list]",
            start: "top 75%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="education" className="relative py-24 sm:py-40">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-2 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              03
            </span>
            <span className="eyebrow">Education / Journey</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            Academic Path
          </span>
        </div>

        {/* Section title */}
        <h2 className="display-xl mb-16 max-w-4xl text-bone sm:mb-24">
          A path built on
          <br />
          <span className="text-ember">discipline</span> & curiosity.
        </h2>

        {/* Timeline */}
        <div data-edu-list className="relative grid gap-0">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-line md:block">
            <div
              data-edu-line
              className="h-full w-full origin-top bg-ember"
            />
          </div>

          {education.map((item, i) => {
            const status = statusMap[item.status];
            return (
              <div
                key={i}
                data-edu-row
                className="group relative grid gap-4 border-b border-line py-10 md:grid-cols-[180px_1fr_auto] md:gap-12 md:pl-12"
              >
                {/* Period */}
                <div className="flex items-center gap-3">
                  <span
                    className={`hidden h-2 w-2 rounded-full md:block ${status.color}`}
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-mist">
                    {item.period}
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-2">
                  <h3 className="display-md text-bone transition-colors group-hover:text-ember">
                    {item.institution}
                  </h3>
                  <p className="body-md">{item.degree}</p>
                  {item.detail && (
                    <p className="max-w-2xl text-sm leading-relaxed text-mist">
                      {item.detail}
                    </p>
                  )}
                </div>

                {/* Right meta */}
                <div className="flex flex-row items-start gap-6 md:flex-col md:items-end md:gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${status.color}`}
                    />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-bone-soft">
                      {status.label}
                    </span>
                  </div>
                  {item.achievement && (
                    <div className="font-display text-2xl text-ember">
                      {item.achievement}
                    </div>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mist-dim">
                    0{i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

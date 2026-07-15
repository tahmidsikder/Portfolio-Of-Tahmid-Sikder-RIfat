"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups, focusAreas } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const levelMap = {
  learning: { label: "Learning", bar: 35, color: "bg-mist" },
  practiced: { label: "Practiced", bar: 65, color: "bg-bone" },
  natural: { label: "Natural", bar: 90, color: "bg-ember" },
} as const;

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-skill-row]", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-skills-list]", start: "top 75%" },
      });

      gsap.from("[data-focus]", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-focus-list]", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="skills" className="relative py-24 sm:py-40">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-2 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              04
            </span>
            <span className="eyebrow">Skills / Capabilities</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            What I bring
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Left: skill groups as interactive accordion */}
          <div data-skills-list>
            <h2 className="display-xl mb-10 text-bone">
              Tools, craft,
              <br />
              and <span className="text-ember">instincts</span>.
            </h2>

            <div className="border-t border-line">
              {skillGroups.map((group, i) => (
                <div
                  key={group.category}
                  data-skill-row
                  className="border-b border-line"
                >
                  <button
                    onClick={() => setActive(active === i ? -1 : i)}
                    data-cursor
                    className="flex w-full items-center justify-between py-6 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-xs text-mist">
                        {group.index}
                      </span>
                      <span className="display-md text-bone transition-colors hover:text-ember">
                        {group.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-mist">
                        {group.skills.length.toString().padStart(2, "0")}
                      </span>
                      <span
                        className={`block h-px w-6 bg-bone transition-all duration-500 ${
                          active === i ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: active === i ? "auto" : 0,
                      opacity: active === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-3 pb-8 sm:grid-cols-2">
                      {group.skills.map((skill) => {
                        const lv = levelMap[skill.level];
                        return (
                          <div
                            key={skill.name}
                            className="flex flex-col gap-2 border-l border-line pl-4"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-lg text-bone">
                                {skill.name}
                              </span>
                              <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                                {lv.label}
                              </span>
                            </div>
                            <div className="h-px w-full bg-line">
                              <div
                                className={`h-full ${lv.color}`}
                                style={{ width: `${lv.bar}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: focus areas */}
          <div data-focus-list className="space-y-8">
            <span className="eyebrow">Focus Areas</span>
            {focusAreas.map((f) => (
              <div
                key={f.n}
                data-focus
                className="group relative border-t border-line pt-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-ember">{f.n}</span>
                  <h3 className="display-md text-bone">{f.title}</h3>
                </div>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-mist">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

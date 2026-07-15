"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const root = useRef<HTMLElement>(null);

  const manifestoWords = profile.manifesto.split(" ");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      // On touch: just fade in everything
      gsap.set("[data-word]", { opacity: 0.5 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-word]",
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.5,
          scrollTrigger: {
            trigger: "[data-manifesto]",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // Section eyebrow + meta slide in
      gsap.from("[data-about-meta]", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative px-0 py-24 sm:py-40"
    >
      <div className="container-edge">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-2 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
          <div data-about-meta className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              02
            </span>
            <span className="eyebrow">About / Manifesto</span>
          </div>
          <span data-about-meta className="font-mono text-[11px] uppercase tracking-widest text-mist">
            Who I am
          </span>
        </div>

        {/* The manifesto */}
        <div data-manifesto className="max-w-6xl">
          <p className="display-lg text-bone-soft text-balance">
            {manifestoWords.map((word, i) => (
              <span key={i} className="inline-block">
                <span
                  data-word
                  className="inline-block transition-opacity"
                  style={{ opacity: 0.12 }}
                >
                  {word}
                </span>
                {i < manifestoWords.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </p>
        </div>

        {/* Bio detail block */}
        <div className="mt-20 grid gap-12 border-t border-line pt-12 sm:mt-28 md:grid-cols-[1fr_2fr]">
          <div data-about-meta>
            <span className="eyebrow">Bio</span>
          </div>
          <div data-about-meta className="space-y-6">
            <p className="body-lg max-w-2xl text-pretty">
              {profile.bio}
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { k: "Focus", v: "Web / Security" },
                { k: "Status", v: "Student" },
                { k: "Degree", v: "BSc CSE" },
                { k: "Spirit", v: "Builder" },
              ].map((item) => (
                <div key={item.k}>
                  <div className="eyebrow mb-2">{item.k}</div>
                  <div className="font-display text-base text-bone">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

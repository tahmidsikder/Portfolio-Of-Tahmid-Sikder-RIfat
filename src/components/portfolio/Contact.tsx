"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, socials } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-cta-word]", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-cta]", start: "top 75%" },
      });
      gsap.from("[data-cta-meta]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-cta]", start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="contact" className="relative py-24 sm:py-40">
      <div className="container-edge">
        <div className="mb-16 flex flex-col gap-2 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              05
            </span>
            <span className="eyebrow">Contact / Next Step</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            Let&apos;s talk
          </span>
        </div>

        {/* Big CTA */}
        <div data-cta className="relative">
          <motion.button
            onClick={() => (window.location.href = `mailto:${profile.email}`)}
            data-cursor
            data-cursor-label="Email"
            className="block w-full text-left"
          >
            <h2 className="display-hero text-bone">
              <span data-cta-word className="inline-block">Let&apos;s</span>{" "}
              <span data-cta-word className="inline-block text-ember">
                build
              </span>
              <br />
              <span data-cta-word className="inline-block">
                something.
              </span>
            </h2>
          </motion.button>

          <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
            {/* Left: email */}
            <div data-cta-meta className="space-y-4">
              <span className="eyebrow">Direct line</span>
              <a
                href={`mailto:${profile.email}`}
                data-cursor
                data-cursor-label="Copy"
                className="link-underline display-md block text-bone"
              >
                {profile.email}
              </a>
              <p className="max-w-md text-sm text-mist">
                Currently open to internships, freelance WordPress projects, and
                collaborations with people building meaningful software.
              </p>
            </div>

            {/* Right: meta */}
            <div
              data-cta-meta
              className="grid grid-cols-2 gap-6 sm:justify-items-end"
            >
              <div className="space-y-2">
                <div className="eyebrow">Location</div>
                <div className="font-display text-base text-bone">
                  {profile.location}
                </div>
              </div>
              <div className="space-y-2">
                <div className="eyebrow">Availability</div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                  </span>
                  <span className="font-display text-base text-bone">
                    Open
                  </span>
                </div>
              </div>
              <div className="col-span-2 mt-4 w-full space-y-2">
                <div className="eyebrow">Channels</div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      data-cursor
                      data-cursor-label="Open"
                      className="link-underline font-mono text-xs uppercase tracking-widest text-bone-soft transition-colors hover:text-ember"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

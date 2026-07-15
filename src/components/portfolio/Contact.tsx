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
              07
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
              <span data-cta-word className="inline-block">
                Get in
              </span>{" "}
              <span data-cta-word className="inline-block text-ember">
                Touch
              </span>
            </h2>
          </motion.button>

          <p
            data-cta-meta
            className="body-lg mt-6 max-w-2xl text-pretty text-bone-soft"
          >
            Feel free to reach out if you&apos;d like to connect or discuss an
            opportunity.
          </p>

          {/* Contact channels — premium 3-column glass row */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-3">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              data-cursor
              data-cursor-label="Email"
              className="group relative bg-ink-soft/80 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-ink-soft sm:p-10"
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                  Email
                </span>
                <svg
                  className="h-4 w-4 text-mist transition-all duration-500 group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </div>
              <p className="mt-6 break-all font-display text-base text-bone transition-colors group-hover:text-ember sm:text-lg">
                {profile.email}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mist">
                Best for project briefs
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${profile.phone}`}
              data-cursor
              data-cursor-label="Call"
              className="group relative bg-ink-soft/80 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-ink-soft sm:p-10"
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                  Phone
                </span>
                <svg
                  className="h-4 w-4 text-mist transition-all duration-500 group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </div>
              <p className="mt-6 font-display text-base text-bone transition-colors group-hover:text-ember sm:text-lg">
                {profile.phoneDisplay}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mist">
                {profile.location}
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              data-cursor-label="Open"
              className="group relative bg-ink-soft/80 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-ink-soft sm:p-10"
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                  LinkedIn
                </span>
                <svg
                  className="h-4 w-4 text-mist transition-all duration-500 group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </div>
              <p className="mt-6 font-display text-base text-bone transition-colors group-hover:text-ember sm:text-lg">
                /in/tahmidsikder
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mist">
                Professional profile
              </p>
            </a>
          </div>

          {/* Lower meta row */}
          <div
            data-cta-meta
            className="mt-12 grid gap-8 border-t border-line pt-12 sm:grid-cols-3"
          >
            <div className="space-y-2">
              <div className="eyebrow">Availability</div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                <span className="font-display text-base text-bone">
                  {profile.availability}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="eyebrow">Location</div>
              <div className="font-display text-base text-bone">
                {profile.location}
              </div>
            </div>
            <div className="space-y-2">
              <div className="eyebrow">Focus</div>
              <div className="font-display text-base text-bone">
                Web · Security · WordPress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

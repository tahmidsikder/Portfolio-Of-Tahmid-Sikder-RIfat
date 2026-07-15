"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const ctx = gsap.context(() => {
      // Parallax name on scroll
      gsap.to("[data-hero-name]", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-meta]", {
        yPercent: -10,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 pb-8"
    >
      {/* Top metadata strip */}
      <motion.div
        data-hero-meta
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container-edge flex items-start justify-between"
      >
        <div className="flex flex-col gap-1">
          <span className="eyebrow">Currently</span>
          <span className="font-mono text-sm text-bone-soft">
            {profile.availability}
          </span>
        </div>
        <div className="hidden flex-col items-end gap-1 sm:flex">
          <span className="eyebrow">Based in</span>
          <span className="font-mono text-sm text-bone-soft">
            {profile.location}
          </span>
        </div>
      </motion.div>

      {/* Hero name — the centerpiece */}
      <div className="container-edge relative flex flex-1 flex-col justify-center">
        {/* Small intro line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-ember" />
          <span className="eyebrow text-bone-soft">{profile.title}</span>
        </motion.div>

        {/* First name — oversized */}
        <div className="overflow-hidden">
          <motion.h1
            data-hero-name
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            className="display-hero text-bone"
          >
            {profile.firstName}
          </motion.h1>
        </div>

        {/* Subtitle row */}
        <motion.div
          data-hero-name
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="display-md max-w-xl text-bone-soft">
            {profile.subtitle}
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#about");
              const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element) => void } }).__lenis;
              if (el && lenis) lenis.scrollTo(el);
              else el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-cursor
            data-cursor-label="Scroll"
            className="group flex items-center gap-3 self-start text-bone-soft transition-colors hover:text-ember sm:self-auto"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              Scroll to explore
            </span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom strip — last name + index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="container-edge mt-8"
      >
        <div className="hairline mb-4" />
        <div className="flex items-end justify-between">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 1.3 }}
              className="font-display text-2xl text-bone sm:text-4xl"
            >
              Tahmid Sikder Rifat
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

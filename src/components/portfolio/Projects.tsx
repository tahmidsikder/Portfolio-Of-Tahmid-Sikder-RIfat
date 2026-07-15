"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger card reveal — use fromTo with immediateRender:false so cards
      // stay visible at their natural CSS state until the trigger fires.
      gsap.fromTo(
        "[data-project-card]",
        { y: 80, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-projects-list]",
            start: "top 85%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );

      // Section header slide
      gsap.fromTo(
        "[data-projects-header]",
        { y: 30, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );

      // Section title
      gsap.fromTo(
        "[data-projects-title] > span",
        { y: 80, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-projects-title]",
            start: "top 85%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );
    }, root);

    // Recalculate trigger positions after preloader + fonts settle.
    // The preloader locks scroll at 0 for ~1.8s; ScrollTrigger caches
    // stale start positions during that window. Refreshing after a delay
    // ensures the trigger fires correctly when the user scrolls.
    const refreshId = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2200);

    return () => {
      ctx.revert();
      window.clearTimeout(refreshId);
    };
  }, []);

  return (
    <section ref={root} id="work" className="relative py-24 sm:py-40">
      {/* Ambient gradient backdrop for glass depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(232,85,58,0.08), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,85,58,0.05), transparent 70%)",
        }}
      />

      <div className="container-edge relative">
        {/* Header */}
        <div
          data-projects-header
          className="mb-16 flex flex-col gap-2 sm:mb-24 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
              03
            </span>
            <span className="eyebrow">Selected Work / Live Projects</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            {projects.length.toString().padStart(2, "0")} Live Sites
          </span>
        </div>

        {/* Section title */}
        <h2
          data-projects-title
          className="display-xl mb-20 max-w-5xl text-bone sm:mb-32"
        >
          <span className="inline-block">Real</span>{" "}
          <span className="inline-block text-ember">projects.</span>{" "}
          <span className="inline-block">Real</span>{" "}
          <span className="inline-block">outcomes.</span>
        </h2>

        {/* Project cards */}
        <div data-projects-list className="flex flex-col gap-8 sm:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
            More work in progress — building while learning.
          </span>
          <a
            href="https://www.linkedin.com/in/tahmidsikder/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            data-cursor-label="Open"
            className="link-underline font-mono text-[11px] uppercase tracking-widest text-bone-soft transition-colors hover:text-ember"
          >
            Full history on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const isTeam = project.collaboration === "team";

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-project-card
      data-cursor
      data-cursor-label="Visit"
      className="group relative block overflow-hidden rounded-[2px] border border-line bg-white/[0.015] backdrop-blur-sm transition-all duration-700 ease-out hover:border-ember/40 hover:bg-white/[0.025]"
    >
      {/* Hover gradient sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(232,85,58,0.12), transparent 60%)",
        }}
      />

      {/* Top hairline that grows on hover */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 bg-ember transition-all duration-1000 ease-out group-hover:w-full"
      />

      {/* Ghost index — massive, faint, behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-2 select-none font-display text-[28vw] leading-none text-bone/[0.025] sm:right-12 sm:top-4 sm:text-[18vw]"
      >
        {project.index}
      </div>

      {/* Content */}
      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:p-16">
        {/* LEFT: hero typography + meta */}
        <div className="flex flex-col justify-between gap-10">
          {/* Top row: index + year + collaboration */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ember">
                {project.index}
              </span>
              <span className="h-px w-8 bg-line" />
              <span className="font-mono text-xs uppercase tracking-widest text-mist">
                {project.year}
              </span>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                isTeam
                  ? "border-line text-mist"
                  : "border-ember/30 text-ember"
              }`}
            >
              <span
                className={`h-1 w-1 rounded-full ${
                  isTeam ? "bg-mist" : "bg-ember"
                }`}
              />
              {isTeam ? "Collaboration" : "Solo Build"}
            </span>
          </div>

          {/* Huge project name */}
          <div className="overflow-hidden">
            <h3 className="font-display font-medium leading-[0.92] tracking-tight text-bone transition-colors duration-500 group-hover:text-ember">
              {project.nameDisplay.map((line, i) => (
                <span
                  key={i}
                  className="block text-[clamp(2.5rem,7vw,5.5rem)]"
                  style={{
                    transform: "translateY(8px)",
                    transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <span
                    className="inline-block transition-transform duration-700 ease-out group-hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h3>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Role
            </span>
            <span className="h-px w-6 bg-line" />
            <span className="font-display text-base text-bone-soft sm:text-lg">
              {project.role}
            </span>
          </div>
        </div>

        {/* RIGHT: description, highlights, tech, link */}
        <div className="flex flex-col gap-8 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {/* Description */}
          <p className="text-sm leading-relaxed text-bone-soft sm:text-base">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-3">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-mist"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
              Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] tracking-wide text-bone-soft backdrop-blur-md transition-colors duration-300 group-hover:border-line-strong"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visit link */}
          <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                Live site
              </span>
              <span className="font-display text-sm text-bone transition-colors group-hover:text-ember">
                {project.urlLabel}
              </span>
            </div>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ transform: "rotate(-45deg)" }}
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

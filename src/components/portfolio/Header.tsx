"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile, nav } from "@/data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: profile.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(fmt.format(now) + " DHK");
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element) => void } }).__lenis;
      if (el && lenis) {
        lenis.scrollTo(el);
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container-edge flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#top")}
            className="no-select group flex items-center gap-2.5"
            data-cursor
            data-cursor-label="Top"
          >
            <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-line-strong bg-ink transition-transform duration-300 group-hover:scale-105 group-hover:border-ember">
              <Image
                src="/icon.png"
                alt="Logo"
                width={28}
                height={28}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="font-display text-base font-medium tracking-tight text-bone transition-colors group-hover:text-ember">
              Tahmid Sikder
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-mist sm:inline">
              /Portfolio
            </span>
          </button>

          {/* Center nav (desktop) */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                data-cursor
                className="link-underline font-mono text-xs uppercase tracking-widest text-bone-soft transition-colors hover:text-bone"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-mist lg:inline">
              {time}
            </span>
            <button
              onClick={() => setMenuOpen(true)}
              data-cursor
              data-cursor-label="Menu"
              className="no-select group flex items-center gap-2 md:hidden"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span className="block h-[1.5px] w-6 bg-bone" />
                <span className="block h-[1.5px] w-4 bg-bone self-end" />
              </div>
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              data-cursor
              data-cursor-label="Hire"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-bone transition-colors hover:border-ember hover:text-ember"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
              </span>
              Available
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container-edge flex items-center justify-between py-5">
              <span className="font-display text-base font-medium text-bone">
                Tahmid Sikder
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-bone-soft"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>
            <div className="container-edge flex flex-1 flex-col justify-center gap-2">
              {nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="display-xl text-left text-bone"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                >
                  <span className="font-mono text-xs text-mist">0{i + 1} </span>
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="container-edge py-8">
              <div className="hairline mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">
                {profile.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

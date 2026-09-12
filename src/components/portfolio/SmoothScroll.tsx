"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only skip on purely touch-only mobile devices with no mouse/trackpad
    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchOnly) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // Use dedicated requestAnimationFrame for butter-smooth timing
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Sync dimensions on resize, load, and dynamic content changes
    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    const t1 = setTimeout(onResize, 600);
    const t2 = setTimeout(onResize, 1500);
    const t3 = setTimeout(onResize, 3000);

    // Expose for navigation anchor links and external callers
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      resizeObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}

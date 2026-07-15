"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Defer the enable flag to a microtask so we don't call setState
    // synchronously inside the effect body (avoids the cascading render lint).
    const id = window.setTimeout(() => setEnabled(true), 0);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;
    let lastHover: boolean | null = null;
    let lastLabel: string | null = null;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      // Detect hover targets
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [data-cursor], [role="button"], input, textarea'
      );
      const isHovering = !!interactive;
      const cursorLabel = interactive?.getAttribute("data-cursor-label") ?? null;

      if (isHovering !== lastHover) {
        lastHover = isHovering;
        setHovering(isHovering);
      }
      if (cursorLabel !== lastLabel) {
        lastLabel = cursorLabel;
        setLabel(cursorLabel);
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] flex items-center justify-center rounded-full border border-bone/40 transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering ? "rgba(232, 85, 58, 0.15)" : "transparent",
          borderColor: hovering
            ? "rgba(232, 85, 58, 0.6)"
            : "rgba(242, 237, 227, 0.4)",
        }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-bone/80">
            {label}
          </span>
        )}
      </div>

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10001] h-1.5 w-1.5 rounded-full bg-ember"
      />
    </>
  );
}

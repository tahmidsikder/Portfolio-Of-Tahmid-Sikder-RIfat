"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;
    let rafId = 0;
    let lastHover: boolean | null = null;
    let lastLabel: string | null = null;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        setVisible(true);
      }

      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      // Detect hover targets
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
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

    const onLeave = () => setVisible(false);
    const onEnter = () => {
      if (hasMoved) setVisible(true);
    };

    const tick = () => {
      if (hasMoved) {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;
        ring.style.transform = `translate3d(${ringX - (hovering ? 28 : 16)}px, ${ringY - (hovering ? 28 : 16)}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, [hovering]);

  return (
    <>
      {/* Outer magnetic follower ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10000] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-300 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering ? "rgba(232, 85, 58, 0.15)" : "transparent",
          borderColor: hovering
            ? "rgba(232, 85, 58, 0.6)"
            : "rgba(242, 237, 227, 0.35)",
        }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-bone/90">
            {label}
          </span>
        )}
      </div>

      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10001] h-1.5 w-1.5 rounded-full bg-ember transition-opacity duration-200"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}

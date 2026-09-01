"use client";

import { useEffect, useRef, useState } from "react";

const GRID = 24;
const RADIUS = 90;
const SHAPES = ["star", "heart", "flower", "moon", "sparkle"];

function shapeFor(i, j) {
  const hash = Math.abs((i * 73856093) ^ (j * 19349663));
  return SHAPES[hash % SHAPES.length];
}

function ShapePath({ shape }) {
  switch (shape) {
    case "star":
      return <path d="M6 0l1.4 3.8L11 5l-3.6 1.6L6 10l-1.4-3.4L1 5l3.6-1.2z" />;
    case "heart":
      return (
        <path d="M6 10C2 7 0 5 0 2.8 0 1.2 1.3 0 2.7 0 4 0 5 .8 6 2c1-1.2 2-2 3.3-2C10.7 0 12 1.2 12 2.8 12 5 10 7 6 10z" />
      );
    case "flower":
      return (
        <>
          <circle cx="6" cy="6" r="1.4" />
          <circle cx="6" cy="2" r="1.5" />
          <circle cx="6" cy="10" r="1.5" />
          <circle cx="2" cy="6" r="1.5" />
          <circle cx="10" cy="6" r="1.5" />
        </>
      );
    case "moon":
      return <path d="M8 0a6 6 0 100 12A5 5 0 018 0z" />;
    case "sparkle":
    default:
      return <path d="M6 0c0 3 1 4.5 4 5-3 .5-4 2-4 5 0-3-1-4.5-4-5 3-.5 4-2 4-5z" />;
  }
}

export default function CursorDots() {
  const [points, setPoints] = useState([]);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    function computePoints() {
      frameRef.current = null;
      if (!mouseRef.current.active) {
        setPoints([]);
        return;
      }
      const { x, y } = mouseRef.current;
      const docX = x + window.scrollX;
      const docY = y + window.scrollY;
      const iCenter = Math.round((docX - GRID / 2) / GRID);
      const jCenter = Math.round((docY - GRID / 2) / GRID);
      const span = Math.ceil(RADIUS / GRID);
      const next = [];
      for (let i = iCenter - span; i <= iCenter + span; i++) {
        for (let j = jCenter - span; j <= jCenter + span; j++) {
          const gx = i * GRID + GRID / 2;
          const gy = j * GRID + GRID / 2;
          const dist = Math.hypot(gx - docX, gy - docY);
          if (dist <= RADIUS) {
            next.push({
              key: `${i}_${j}`,
              x: gx - window.scrollX,
              y: gy - window.scrollY,
              opacity: Math.max(0, 1 - dist / RADIUS),
              shape: shapeFor(i, j),
            });
          }
        }
      }
      setPoints(next);
    }

    function scheduleCompute() {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(computePoints);
      }
    }

    function handleMouseMove(event) {
      mouseRef.current = { x: event.clientX, y: event.clientY, active: true };
      scheduleCompute();
    }
    function handleLeave() {
      mouseRef.current.active = false;
      setPoints([]);
    }
    function handleScroll() {
      if (mouseRef.current.active) scheduleCompute();
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {points.map((p) => (
        <svg
          key={p.key}
          viewBox="0 0 12 12"
          className="absolute h-3 w-3 text-foreground/60 transition-opacity duration-300 ease-out"
          style={{ left: p.x - 6, top: p.y - 6, opacity: p.opacity, fill: "currentColor" }}
        >
          <ShapePath shape={p.shape} />
        </svg>
      ))}
    </div>
  );
}

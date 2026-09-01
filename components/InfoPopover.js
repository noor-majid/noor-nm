"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function InfoPopover({ trigger, title, children, panelClassName = "" }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const containerRef = useRef(null);
  const popoverId = useId();

  const open = hovered || pinned;

  useEffect(() => {
    if (!pinned) return;

    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setPinned(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setPinned(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pinned]);

  return (
    <span
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {trigger({
        "aria-describedby": popoverId,
        onClick: () => setPinned((p) => !p),
      })}
      {open && (
        <div
          id={popoverId}
          role="dialog"
          className={`absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm shadow-lg ${panelClassName}`}
        >
          {title && <p className="mb-1 font-heading text-xs font-bold">{title}</p>}
          <div className="font-serif text-foreground/80">{children}</div>
        </div>
      )}
    </span>
  );
}

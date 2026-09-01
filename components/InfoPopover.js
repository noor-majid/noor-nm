"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function InfoPopover({ trigger, title, children, panelClassName = "", placement = "bottom" }) {
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
      {trigger(
        {
          "aria-describedby": popoverId,
          onClick: () => setPinned((p) => !p),
        },
        open
      )}
      {open && (
        <div
          id={popoverId}
          role="dialog"
          className={`absolute z-20 w-56 rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm shadow-lg ${
            placement === "right"
              ? "left-1/2 top-full mt-2 -translate-x-1/2 sm:left-full sm:top-1/2 sm:mt-0 sm:ml-2 sm:translate-x-0 sm:-translate-y-1/2"
              : "left-1/2 top-full mt-2 -translate-x-1/2"
          } ${panelClassName}`}
        >
          {title && <p className="mb-1 font-heading text-xs font-bold">{title}</p>}
          <div className="font-serif text-foreground/80">{children}</div>
        </div>
      )}
    </span>
  );
}

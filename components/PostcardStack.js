"use client";

import { useEffect, useState } from "react";
import Postcard from "./Postcard";

const POSTCARDS = [
  { variant: "violin", rot: -9, restX: -230, restY: -30 },
  { variant: "cat", rot: 7, restX: 220, restY: 20 },
  { variant: "book", rot: 5, restX: -190, restY: 110 },
  { variant: "yarn", rot: -6, restX: 200, restY: -110 },
];

const SCROLL_THRESHOLD = 48;

export default function PostcardStack({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {children}
      {POSTCARDS.map((card, i) => {
        const offsetX = scrolled ? card.restX : 0;
        const offsetY = scrolled ? card.restY : 0;
        return (
          <Postcard
            key={i}
            variant={card.variant}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px) rotate(${card.rot}deg)`,
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        );
      })}
    </div>
  );
}

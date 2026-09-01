"use client";

import { useEffect, useState } from "react";
import Postcard from "./Postcard";

const POSTCARDS = [
  {
    variant: "violin",
    color: "#9c8867", // warm sand
    rot: -8,
    posClassName: "top-[-4.5rem] left-[-1.5rem] sm:top-[-7rem] sm:left-[-3rem]",
  },
  {
    variant: "cat",
    color: "#8a95a6", // dusty slate blue
    rot: 6,
    posClassName: "top-[-4rem] right-[-2rem] sm:top-[-6.5rem] sm:right-[-3.5rem]",
  },
  {
    variant: "book",
    color: "#8a9a82", // sage
    rot: 5,
    posClassName: "bottom-[-4.5rem] left-[-2rem] sm:bottom-[-7rem] sm:left-[-3.5rem]",
  },
  {
    variant: "yarn",
    color: "#b08a8a", // dusty rose
    rot: -6,
    posClassName: "bottom-[-4rem] right-[-1.5rem] sm:bottom-[-6.5rem] sm:right-[-3rem]",
  },
];

const SCROLL_THRESHOLD = 48;

export default function PostcardStack({ children }) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setFilled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {children}
      {POSTCARDS.map((card, i) => (
        <Postcard
          key={card.variant}
          variant={card.variant}
          filled={filled}
          color={card.color}
          delay={i * 120}
          rotate={card.rot}
          posClassName={card.posClassName}
        />
      ))}
    </div>
  );
}

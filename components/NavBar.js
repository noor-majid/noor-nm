"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, socialLinks } from "@/lib/data";
import { LinkedInIcon, BookIcon, MenuIcon, CloseIcon } from "./icons";

export default function NavBar() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="#home" className="font-script text-xl" onClick={() => setMenuOpen(false)}>
            Noor Majid
          </Link>
          <ul className="hidden items-center gap-4 font-heading text-sm sm:flex">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      active
                        ? "underline underline-offset-4"
                        : "text-foreground/70 hover:text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.bookReviews}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book reviews"
            className="text-foreground/70 hover:text-foreground"
          >
            <BookIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-foreground/70 hover:text-foreground sm:hidden"
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-foreground/10 px-6 py-4 font-heading text-sm sm:hidden">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1.5 ${
                    active ? "underline underline-offset-4" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

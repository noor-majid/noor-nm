"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, socialLinks } from "@/lib/data";
import { LinkedInIcon, BookIcon } from "./icons";

export default function NavBar() {
  const [activeId, setActiveId] = useState("home");

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

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="#home" className="font-script text-xl">
            Noor Majid
          </Link>
          <ul className="flex items-center gap-4 font-heading text-sm">
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
        </div>
      </nav>
    </header>
  );
}

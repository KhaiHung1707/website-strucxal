"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { NavData } from "@/types/content";

export function Nav({ data }: { data: NavData }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Detect dark sections under the nav (e.g. arc-fan hero on homepage)
    // so we can flip the nav to its dark variant only over those.
    const darkSections = document.querySelectorAll<HTMLElement>("[data-nav-dark]");
    let observer: IntersectionObserver | null = null;
    if (darkSections.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          const intersecting = entries.some((e) => e.isIntersecting);
          nav.classList.toggle("on-dark", intersecting);
        },
        { rootMargin: "-76px 0px 0px 0px", threshold: 0 },
      );
      darkSections.forEach((el) => observer!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <nav className="top" ref={navRef}>
      <div className="container inner">
        <Link href="/" className="logo">
          Strucxal
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            {data.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link href={data.cta.href} className="nav-cta">
            {data.cta.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}

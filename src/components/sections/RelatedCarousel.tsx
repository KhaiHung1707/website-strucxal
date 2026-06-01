"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThumbCardArt } from "@/components/svg/CardArt";
import type { GradientKey } from "@/types/content";

export interface RelatedItem {
  id: string;
  gradient: GradientKey;
  thumbStat: string;
  year: string;
  category: string;
  duration: string;
  title: string;
  industry: string;
  href: string;
}

export interface RelatedCarouselProps {
  items: RelatedItem[];
}

export function RelatedCarousel({ items }: RelatedCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const cardWidth = 400 + 16;

  const updateNav = () => {
    const c = carouselRef.current;
    if (!c) return;
    setPrevDisabled(c.scrollLeft <= 4);
    setNextDisabled(c.scrollLeft >= c.scrollWidth - c.clientWidth - 4);
  };

  useEffect(() => {
    const c = carouselRef.current;
    if (!c) return;
    updateNav();
    c.addEventListener("scroll", updateNav, { passive: true });
    return () => c.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <>
      <div className="related-nav">
        <button
          className="related-nav-btn"
          aria-label="Previous"
          disabled={prevDisabled}
          onClick={() => carouselRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" })}
        >
          ←
        </button>
        <button
          className="related-nav-btn"
          aria-label="Next"
          disabled={nextDisabled}
          onClick={() => carouselRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" })}
        >
          →
        </button>
      </div>

      <div
        className="related-carousel"
        ref={carouselRef}
        onMouseDown={(e) => {
          const c = carouselRef.current;
          if (!c) return;
          isDownRef.current = true;
          c.classList.add("dragging");
          startXRef.current = e.pageX - c.offsetLeft;
          scrollLeftRef.current = c.scrollLeft;
        }}
        onMouseLeave={() => {
          isDownRef.current = false;
          carouselRef.current?.classList.remove("dragging");
        }}
        onMouseUp={() => {
          isDownRef.current = false;
          carouselRef.current?.classList.remove("dragging");
        }}
        onMouseMove={(e) => {
          if (!isDownRef.current) return;
          e.preventDefault();
          const c = carouselRef.current;
          if (!c) return;
          const x = e.pageX - c.offsetLeft;
          c.scrollLeft = scrollLeftRef.current - (x - startXRef.current) * 1.8;
        }}
      >
        {items.map((item) => (
          <Link key={item.id} href={item.href} className="related-card">
            <div className="related-thumb">
              <ThumbCardArt variant={item.gradient} />
              <span className="thumb-stat">{item.thumbStat}</span>
            </div>
            <div className="related-body">
              <div className="meta">
                <span>
                  {item.year} · {item.category.toUpperCase()}
                </span>
                <span>{item.duration}</span>
              </div>
              <h4>{item.title}</h4>
              <div className="related-foot">
                <span className="industry">{item.industry}</span>
                <span className="read">Read case →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

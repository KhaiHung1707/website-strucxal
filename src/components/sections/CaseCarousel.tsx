"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseCarouselBlock } from "@/types/content";
import { CaseCardArt } from "@/components/svg/CardArt";

export function CaseCarousel({ data }: { data: CaseCarouselBlock }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [navState, setNavState] = useState({ prev: true, next: false });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardStep = 480 + 16;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      carousel.classList.add("dragging");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };
    const onUp = () => {
      isDown = false;
      carousel.classList.remove("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      carousel.scrollLeft = scrollLeft - (x - startX) * 1.8;
    };

    const updateNav = () => {
      setNavState({
        prev: carousel.scrollLeft <= 4,
        next: carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 4,
      });
    };

    carousel.addEventListener("mousedown", onDown);
    carousel.addEventListener("mouseleave", onUp);
    carousel.addEventListener("mouseup", onUp);
    carousel.addEventListener("mousemove", onMove);
    carousel.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    // Save the step so prev/next handlers stay in sync.
    (carousel as HTMLDivElement & { __cardStep?: number }).__cardStep = cardStep;

    return () => {
      carousel.removeEventListener("mousedown", onDown);
      carousel.removeEventListener("mouseleave", onUp);
      carousel.removeEventListener("mouseup", onUp);
      carousel.removeEventListener("mousemove", onMove);
      carousel.removeEventListener("scroll", updateNav);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const step = (carousel as HTMLDivElement & { __cardStep?: number }).__cardStep ?? 496;
    carousel.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="case-carousel-section" id="work">
      <div className="container">
        <div className="stage-marker">
          <span className="stage-line" />
          <span className="stage-label">{data.stageLabel}</span>
        </div>

        <div className="section-head">
          <span className="eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft">{data.headingBottom}</span>
          </h2>
          <p className="lead">{data.lead}</p>
        </div>
      </div>

      <div className="case-bleed">
        <div className="case-carousel-wrap">
          <div className="case-nav">
            <button
              className="case-nav-btn"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              disabled={navState.prev}
            >
              ←
            </button>
            <button
              className="case-nav-btn"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              disabled={navState.next}
            >
              →
            </button>
          </div>

          <div className="case-carousel" ref={carouselRef}>
            {data.items.map((item, i) => (
              <div className="case-item" key={i}>
                <CaseCardArt variant={item.gradient} />
                <div className="case-overlay" />
                <div className="case-meta">{item.meta}</div>
                <div className="case-content">
                  <div className="case-stat">
                    {item.stat}
                    <span className="small">{item.statUnit}</span>
                  </div>
                  <div className="case-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

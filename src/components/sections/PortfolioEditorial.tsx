"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { PortfolioBlock, GradientKey } from "@/types/content";
import { ThumbCardArt } from "@/components/svg/CardArt";

export function PortfolioEditorial({ data }: { data: PortfolioBlock }) {
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ gradient: GradientKey; tag: string } | null>(null);

  // Cursor-following lerp animation
  useEffect(() => {
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf: number | null = null;
    let alive = true;

    const animate = () => {
      mouseX += (targetX - mouseX) * 0.18;
      mouseY += (targetY - mouseY) * 0.18;
      preview.style.left = `${mouseX}px`;
      preview.style.top = `${mouseY}px`;
      if (alive && (Math.abs(targetX - mouseX) > 0.5 || Math.abs(targetY - mouseY) > 0.5)) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!raf && alive) raf = requestAnimationFrame(animate);
    };

    const onEnter = (e: Event) => {
      const row = e.currentTarget as HTMLElement;
      const init = e as MouseEvent;
      mouseX = init.clientX;
      mouseY = init.clientY;
      targetX = init.clientX;
      targetY = init.clientY;
      preview.style.left = `${mouseX}px`;
      preview.style.top = `${mouseY}px`;
      preview.classList.add("active");
      const key = row.dataset.preview;
      const item = data.rows.find((r) => r.id === key);
      if (item) setActive({ gradient: item.gradient, tag: item.previewTag });
    };
    const onLeave = () => {
      preview.classList.remove("active");
    };

    list.addEventListener("mousemove", onMove);
    const rows = list.querySelectorAll<HTMLElement>(".work-row");
    rows.forEach((r) => {
      r.addEventListener("mouseenter", onEnter);
      r.addEventListener("mouseleave", onLeave);
    });
    return () => {
      alive = false;
      list.removeEventListener("mousemove", onMove);
      rows.forEach((r) => {
        r.removeEventListener("mouseenter", onEnter);
        r.removeEventListener("mouseleave", onLeave);
      });
      if (raf) cancelAnimationFrame(raf);
    };
  }, [data.rows]);

  return (
    <section className="work-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft">{data.headingBottom}</span>
          </h2>
        </div>

        <div className="work-list" ref={listRef}>
          {data.rows.map((row) => (
            <a key={row.id} href="#" className="work-row" data-preview={row.id}>
              <div className="work-num">{row.number}</div>
              <div className="work-info">
                <h3>{row.title}</h3>
                <div className="meta">
                  {row.metaItems.map((m, i) => (
                    <Fragment key={i}>
                      <span>{m}</span>
                      {i < row.metaItems.length - 1 && <span className="dot" />}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="work-stat">{row.stat}</div>
              <div className="work-thumb">
                <ThumbCardArt variant={row.gradient} />
              </div>
              <div className="work-arrow">↗</div>
            </a>
          ))}
        </div>

        <div className="work-preview" ref={previewRef}>
          {active && <ThumbCardArt variant={active.gradient} />}
          <div className="preview-tag">{active?.tag ?? "★ Featured"}</div>
        </div>

        <div className="work-view-all">
          <p>{data.viewAll.caption}</p>
          <a href={data.viewAll.cta.href} className="btn btn-dark">
            {data.viewAll.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

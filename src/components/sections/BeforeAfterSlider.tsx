"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface BeforeAfterSliderProps {
  beforeLabel: string;
  afterLabel: string;
  before: ReactNode;
  after: ReactNode;
  instructions?: string;
}

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  before,
  after,
  instructions,
}: BeforeAfterSliderProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const update = (clientX: number) => {
    const stage = stageRef.current;
    const afterEl = afterRef.current;
    const handle = handleRef.current;
    if (!stage || !afterEl || !handle) return;
    const rect = stage.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    afterEl.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + "%";
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (draggingRef.current) update(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (draggingRef.current) update(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <>
      <div
        className="ba-stage"
        ref={stageRef}
        onMouseDown={(e) => {
          draggingRef.current = true;
          update(e.clientX);
        }}
        onTouchStart={(e) => {
          draggingRef.current = true;
          update(e.touches[0].clientX);
        }}
      >
        <span className="ba-label left">{beforeLabel}</span>
        <span className="ba-label right">{afterLabel}</span>
        <div className="ba-layer before">{before}</div>
        <div className="ba-layer after" ref={afterRef} style={{ clipPath: "inset(0 0 0 50%)" }}>
          {after}
        </div>
        <div className="ba-handle" ref={handleRef}>
          <div className="ba-pin">↔</div>
        </div>
      </div>
      {instructions ? <div className="ba-instructions">{instructions}</div> : null}
    </>
  );
}

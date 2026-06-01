"use client";

import { useState } from "react";

export interface FilterChip {
  label: string;
  count: number;
}

export interface PortfolioFilterBarProps {
  chips: FilterChip[];
  onFilterChange?: (label: string) => void;
}

export function PortfolioFilterBar({ chips, onFilterChange }: PortfolioFilterBarProps) {
  const [active, setActive] = useState(chips[0]?.label ?? "All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleClick = (label: string) => {
    setActive(label);
    onFilterChange?.(label);
  };

  return (
    <div className="ph-filter-bar">
      <div className="ph-filter-chips">
        {chips.map((c) => (
          <button
            key={c.label}
            type="button"
            className={`ph-chip${c.label === active ? " active" : ""}`}
            onClick={() => handleClick(c.label)}
          >
            {c.label} <span className="count">{c.count}</span>
          </button>
        ))}
      </div>

      <div className="ph-view-toggle">
        <button
          type="button"
          className={`ph-view-btn${view === "grid" ? " active" : ""}`}
          aria-label="Grid view"
          onClick={() => setView("grid")}
        >
          ▦
        </button>
        <button
          type="button"
          className={`ph-view-btn${view === "list" ? " active" : ""}`}
          aria-label="List view"
          onClick={() => setView("list")}
        >
          ☰
        </button>
      </div>
    </div>
  );
}

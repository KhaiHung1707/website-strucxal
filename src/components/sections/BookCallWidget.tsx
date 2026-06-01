"use client";

import { useState } from "react";

export type DayState = "disabled" | "default" | "available" | "today";

export interface CalendarDay {
  day: number;
  state: DayState;
}

export interface BookCallWidgetProps {
  month: string;
  dayLabels: string[];
  days: CalendarDay[];
  slotsLabel: string;
  slots: { time: string; unavailable?: boolean }[];
  defaultSelectedDay?: number;
  defaultSelectedSlot?: string;
}

export function BookCallWidget(props: BookCallWidgetProps) {
  const [selectedDay, setSelectedDay] = useState<number | undefined>(props.defaultSelectedDay);
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(props.defaultSelectedSlot);

  return (
    <div className="bc-calendar">
      <div className="bc-cal-header">
        <div className="month">{props.month}</div>
        <div className="bc-cal-nav">
          <button type="button" aria-label="Previous month">
            ←
          </button>
          <button type="button" aria-label="Next month">
            →
          </button>
        </div>
      </div>

      <div className="bc-cal-grid">
        {props.dayLabels.map((d) => (
          <div className="bc-cal-day-label" key={d}>
            {d}
          </div>
        ))}
        {props.days.map((d, i) => {
          const isSelected = selectedDay === d.day && d.state !== "disabled";
          const classes = [
            "bc-cal-day",
            d.state === "disabled" ? "disabled" : "",
            d.state === "available" ? "available" : "",
            d.state === "today" ? "today" : "",
            isSelected ? "selected" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <button
              type="button"
              key={`${d.day}-${i}`}
              className={classes}
              disabled={d.state === "disabled"}
              onClick={() => d.state !== "disabled" && setSelectedDay(d.day)}
            >
              {d.day}
            </button>
          );
        })}
      </div>

      <div className="bc-slots">
        <div className="label">{props.slotsLabel}</div>
        <div className="bc-slots-list">
          {props.slots.map((s) => (
            <button
              type="button"
              key={s.time}
              className={`bc-slot${s.unavailable ? " unavailable" : ""}${
                s.time === selectedSlot && !s.unavailable ? " selected" : ""
              }`}
              disabled={s.unavailable}
              onClick={() => !s.unavailable && setSelectedSlot(s.time)}
            >
              {s.time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Bus,
  ChevronDown,
  CloudRain,
  Footprints,
  CarFront,
  TreePine,
  Landmark,
  PawPrint,
  Sparkles,
} from "lucide-react";
import { weeks, type Theme } from "@/lib/data";

const themeStyles: Record<Theme, { label: string; chip: string; ring: string }> = {
  animals: {
    label: "Animals",
    chip: "bg-sand-100 text-sand-700",
    ring: "ring-sand-300/60",
  },
  history: {
    label: "History",
    chip: "bg-cream-100 text-ink-900",
    ring: "ring-sand-300/60",
  },
  nature: {
    label: "Nature",
    chip: "bg-forest-100 text-forest-700",
    ring: "ring-forest-100",
  },
  mixed: {
    label: "Mixed",
    chip: "bg-white text-ink-700 border border-forest-100",
    ring: "ring-forest-100",
  },
};

const themeIcon: Record<Theme, typeof PawPrint> = {
  animals: PawPrint,
  history: Landmark,
  nature: TreePine,
  mixed: Sparkles,
};

const travelIcon = {
  walking: Footprints,
  transit: Bus,
  "short-drive": CarFront,
  "day-trip": CarFront,
};

const travelLabel = {
  walking: "Walk",
  transit: "Transit",
  "short-drive": "Short drive",
  "day-trip": "Day trip",
};

export function Agenda() {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  return (
    <section id="agenda" className="border-b border-forest-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sand-700">
              The full plan
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Nine themed weeks, June through July.
            </h2>
            <p className="mt-4 text-pretty text-ink-700">
              Click any week to expand. Each day has a destination, a one-sentence
              plan, the travel mode, and a rain-day backup where it matters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {(Object.keys(themeStyles) as Theme[]).map((t) => {
              const Icon = themeIcon[t];
              return (
                <span
                  key={t}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${themeStyles[t].chip}`}
                >
                  <Icon className="h-3 w-3" /> {themeStyles[t].label}
                </span>
              );
            })}
          </div>
        </div>

        <ol className="mt-10 space-y-3">
          {weeks.map((week) => {
            const isOpen = openWeek === week.number;
            const ThemeIcon = themeIcon[week.themeKey];
            return (
              <li
                key={week.number}
                className={`overflow-hidden rounded-2xl border border-forest-100 bg-cream-50 ring-1 ring-transparent transition ${themeStyles[week.themeKey].ring} ${isOpen ? "shadow-soft" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenWeek(isOpen ? null : week.number)}
                  aria-expanded={isOpen}
                  aria-controls={`week-${week.number}`}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-cream-50 sm:flex">
                    <ThemeIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-700">
                        Week {week.number}
                      </span>
                      <span className="text-xs text-ink-700">{week.range}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${themeStyles[week.themeKey].chip}`}
                      >
                        {themeStyles[week.themeKey].label}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink-900 md:text-2xl">
                      {week.theme}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-700">{week.pitch}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-forest-600 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div id={`week-${week.number}`} className="border-t border-forest-100 bg-white p-2 md:p-4">
                    <ul className="grid gap-2 md:grid-cols-5">
                      {week.days.map((day) => {
                        const TravelIcon = travelIcon[day.travel ?? "walking"];
                        return (
                          <li
                            key={`${week.number}-${day.day}`}
                            className="flex flex-col rounded-xl border border-forest-100/60 bg-cream-50/60 p-4"
                          >
                            <div className="flex items-baseline justify-between">
                              <span className="font-display text-base font-semibold text-forest-700">
                                {day.day}
                              </span>
                              <span className="text-[11px] font-medium uppercase tracking-wider text-ink-700/70">
                                {day.date}
                              </span>
                            </div>
                            <h4 className="mt-2 font-medium text-ink-900">{day.title}</h4>
                            <p className="mt-1 text-xs text-ink-700/80">{day.location}</p>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                              {day.summary}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-forest-100/70 pt-3 text-[11px] text-ink-700/80">
                              <span className="inline-flex items-center gap-1">
                                <TravelIcon className="h-3 w-3" />
                                {travelLabel[day.travel ?? "walking"]}
                              </span>
                              {day.rainPlan && (
                                <span className="inline-flex items-center gap-1" title={day.rainPlan}>
                                  <CloudRain className="h-3 w-3" /> Rain plan ready
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

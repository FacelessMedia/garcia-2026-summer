"use client";

import { useMemo, useState } from "react";
import {
  Bus,
  CarFront,
  Footprints,
  Landmark,
  PawPrint,
  TreePine,
} from "lucide-react";
import { destinations, type Theme } from "@/lib/data";

type Filter = "all" | Theme;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All places" },
  { key: "animals", label: "Animals" },
  { key: "history", label: "History" },
  { key: "nature", label: "Nature" },
];

const travelMeta = {
  walking: { label: "Walk", Icon: Footprints },
  transit: { label: "Transit", Icon: Bus },
  "short-drive": { label: "Short drive", Icon: CarFront },
  "day-trip": { label: "Day trip", Icon: CarFront },
};

const costMeta: Record<string, string> = {
  free: "Free",
  low: "$",
  medium: "$$",
  ticketed: "Ticketed",
};

const themeIconMap = {
  animals: PawPrint,
  history: Landmark,
  nature: TreePine,
};

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return destinations;
    return destinations.filter((d) => d.themes.includes(filter));
  }, [filter]);

  return (
    <section id="catalog" className="border-b border-forest-100 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sand-700">
              Where we&apos;ll go
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              21 hand-picked destinations.
            </h2>
            <p className="mt-4 text-pretty text-ink-700">
              All within a comfortable trip from Lincoln Park. Every spot was
              chosen because it pulls double-duty — fun for the kids, and tied
              to one of the three summer themes.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f.key === filter;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-forest-600 text-cream-50 shadow-soft"
                      : "border border-forest-100 bg-white text-ink-700 hover:border-forest-500"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => {
            const travel = travelMeta[d.travel];
            return (
              <li
                key={d.name}
                className="flex flex-col rounded-2xl border border-forest-100 bg-white p-5 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {d.name}
                    </h3>
                    <p className="text-xs text-ink-700/70">{d.area}</p>
                  </div>
                  <span className="rounded-full bg-cream-100 px-2 py-0.5 text-[11px] font-medium text-ink-700">
                    {costMeta[d.cost]}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{d.why}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-forest-100 pt-3 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 font-medium text-forest-700">
                    <travel.Icon className="h-3 w-3" />
                    {travel.label}
                  </span>
                  {d.themes.map((t) => {
                    const Icon = themeIconMap[t as keyof typeof themeIconMap];
                    if (!Icon) return null;
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full bg-sand-100 px-2 py-0.5 font-medium text-sand-700 capitalize"
                      >
                        <Icon className="h-3 w-3" />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

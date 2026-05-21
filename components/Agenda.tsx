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
  Eye,
} from "lucide-react";
import { weeks, type Theme, type EnrichedDestination } from "@/lib/data";
import { DestinationHoverCard } from "@/components/DestinationHoverCard";
import { ChicagoStar } from "@/components/ChicagoStar";

interface AgendaProps {
  destinationsBySlug: Record<string, EnrichedDestination>;
}

const themeStyles: Record<Theme, { label: string; chip: string; accent: string }> = {
  animals: {
    label: "Animals",
    chip: "bg-chicago-red/10 text-chicago-red",
    accent: "from-chicago-red/20 to-transparent",
  },
  history: {
    label: "History",
    chip: "bg-chicago-gold/15 text-chicago-gold",
    accent: "from-chicago-gold/20 to-transparent",
  },
  nature: {
    label: "Nature",
    chip: "bg-chicago-blue/10 text-chicago-blue",
    accent: "from-chicago-blue/20 to-transparent",
  },
  mixed: {
    label: "Mixed",
    chip: "bg-chicago-mist text-chicago-navy",
    accent: "from-chicago-sky/30 to-transparent",
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

export function Agenda({ destinationsBySlug }: AgendaProps) {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  return (
    <section id="agenda" className="border-b border-chicago-mist bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> The full plan
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-chicago-navy md:text-5xl">
              Nine themed weeks, June through July.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-chicago-stone">
              Click any week to expand. <strong className="text-chicago-deep">Hover any day</strong> to
              see the destination&apos;s photo, longer description, and a direct link to its
              official site.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {(Object.keys(themeStyles) as Theme[]).map((t) => {
              const Icon = themeIcon[t];
              return (
                <span
                  key={t}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ${themeStyles[t].chip}`}
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
                className={`relative overflow-hidden rounded-2xl border border-chicago-mist bg-white transition ${isOpen ? "shadow-lift" : "shadow-soft hover:border-chicago-blue/30"}`}
              >
                {/* Theme accent bar on the left */}
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${themeStyles[week.themeKey].accent}`}
                />

                <button
                  type="button"
                  onClick={() => setOpenWeek(isOpen ? null : week.number)}
                  aria-expanded={isOpen}
                  aria-controls={`week-${week.number}`}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-chicago-navy text-white sm:flex">
                    <ThemeIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-chicago-red">
                        Week {week.number}
                      </span>
                      <span className="text-xs font-medium text-chicago-slate">{week.range}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${themeStyles[week.themeKey].chip}`}
                      >
                        {themeStyles[week.themeKey].label}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-chicago-navy md:text-3xl">
                      {week.theme}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-chicago-stone md:text-base">
                      {week.pitch}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-chicago-blue transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`week-${week.number}`}
                    className="border-t border-chicago-mist bg-chicago-paper p-2 md:p-4"
                  >
                    <ul className="grid gap-2 md:grid-cols-5">
                      {week.days.map((day) => {
                        const TravelIcon = travelIcon[day.travel ?? "walking"];
                        const dest = day.destSlug ? destinationsBySlug[day.destSlug] : undefined;

                        const card = (
                          <article
                            className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-chicago-mist bg-white p-4 transition ${
                              dest
                                ? "cursor-pointer hover:-translate-y-0.5 hover:border-chicago-blue/60 hover:shadow-lift"
                                : ""
                            }`}
                          >
                            <div className="flex items-baseline justify-between">
                              <span className="font-display text-base font-bold text-chicago-red">
                                {day.day}
                              </span>
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-chicago-blue">
                                {day.date}
                              </span>
                            </div>
                            <h4 className="mt-2 font-display text-base font-semibold leading-tight text-chicago-navy">
                              {day.title}
                            </h4>
                            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-chicago-slate">
                              {day.location}
                            </p>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-chicago-stone">
                              {day.summary}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-chicago-mist pt-3 text-[10.5px]">
                              <span className="inline-flex items-center gap-1 rounded-full bg-chicago-mist px-2 py-0.5 font-medium text-chicago-blue">
                                <TravelIcon className="h-3 w-3" />
                                {travelLabel[day.travel ?? "walking"]}
                              </span>
                              {day.rainPlan && (
                                <span
                                  className="inline-flex items-center gap-1 rounded-full bg-chicago-cream px-2 py-0.5 font-medium text-chicago-stone"
                                  title={day.rainPlan}
                                >
                                  <CloudRain className="h-3 w-3" /> Rain plan
                                </span>
                              )}
                              {dest && (
                                <span className="ml-auto inline-flex items-center gap-1 text-chicago-blue opacity-0 transition group-hover:opacity-100">
                                  <Eye className="h-3 w-3" /> Preview
                                </span>
                              )}
                            </div>
                          </article>
                        );

                        return (
                          <li key={`${week.number}-${day.day}`}>
                            {dest ? (
                              <DestinationHoverCard
                                destination={dest}
                                travel={day.travel}
                                rainPlan={day.rainPlan}
                              >
                                {card}
                              </DestinationHoverCard>
                            ) : (
                              card
                            )}
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

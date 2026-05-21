"use client";

import { useMemo, useState } from "react";
import {
  Bus,
  CarFront,
  ExternalLink,
  Footprints,
  ImageOff,
  Landmark,
  PawPrint,
  TreePine,
} from "lucide-react";
import { type EnrichedDestination, type Theme } from "@/lib/data";
import { ChicagoStar } from "@/components/ChicagoStar";

interface CatalogProps {
  destinations: EnrichedDestination[];
}

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

export function Catalog({ destinations }: CatalogProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return destinations;
    return destinations.filter((d) => d.themes.includes(filter));
  }, [filter, destinations]);

  return (
    <section id="catalog" className="relative border-b border-chicago-mist lake-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> Where we&apos;ll go
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-chicago-navy md:text-5xl">
              {destinations.length} hand-picked Chicago destinations.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-chicago-stone">
              Every spot is within a comfortable trip from Lincoln Park and pulls
              double-duty — fun for the kids, and tied to one of the three summer
              themes. Click any card to open the official site.
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
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-chicago-navy text-white shadow-soft"
                      : "border border-chicago-mist bg-white text-chicago-stone hover:border-chicago-blue hover:text-chicago-deep"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => {
            const travel = travelMeta[d.travel];
            return (
              <li key={d.slug}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-chicago-mist bg-white shadow-soft transition hover:-translate-y-1 hover:border-chicago-blue/50 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-chicago-mist">
                    {d.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={d.image}
                        alt={d.name}
                        loading="lazy"
                        decoding="async"
                        className="zoom-img h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-chicago-blue/40">
                        <ImageOff className="h-8 w-8" />
                      </div>
                    )}

                    {/* Top-right pill: cost */}
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-chicago-navy shadow-soft backdrop-blur">
                      {costMeta[d.cost]}
                    </span>

                    {/* Bottom-left pill: area */}
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-chicago-navy/90 px-2.5 py-1 text-[11px] font-medium text-white shadow-soft backdrop-blur">
                      <ChicagoStar size={10} className="text-chicago-red" />
                      {d.area}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-semibold leading-tight text-chicago-navy">
                      {d.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-chicago-stone">{d.why}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-chicago-mist pt-4 text-[11px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-chicago-mist px-2 py-0.5 font-medium text-chicago-blue">
                        <travel.Icon className="h-3 w-3" />
                        {travel.label}
                      </span>
                      {d.themes.map((t) => {
                        const Icon = themeIconMap[t as keyof typeof themeIconMap];
                        if (!Icon) return null;
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 rounded-full bg-chicago-red/10 px-2 py-0.5 font-medium capitalize text-chicago-red"
                          >
                            <Icon className="h-3 w-3" />
                            {t}
                          </span>
                        );
                      })}
                      <span className="ml-auto inline-flex items-center gap-1 text-chicago-blue opacity-60 transition group-hover:opacity-100">
                        Visit
                        <ExternalLink className="h-3 w-3 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

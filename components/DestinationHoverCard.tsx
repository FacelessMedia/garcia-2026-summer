"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { ExternalLink, BookOpen, CloudRain, MapPin } from "lucide-react";
import type { EnrichedDestination, Travel } from "@/lib/data";

interface DestinationHoverCardProps {
  destination: EnrichedDestination;
  travel?: Travel;
  rainPlan?: string;
  children: React.ReactNode;
}

const travelLabels: Record<Travel, string> = {
  walking: "Walkable from home",
  transit: "CTA bus or train",
  "short-drive": "Short drive",
  "day-trip": "Day trip",
};

/**
 * Wraps a trigger element with a rich hover preview showing
 * the destination's photo, longer description, links, and rain plan.
 */
export function DestinationHoverCard({
  destination,
  travel,
  rainPlan,
  children,
}: DestinationHoverCardProps) {
  return (
    <HoverCard.Root openDelay={120} closeDelay={120}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          align="center"
          sideOffset={10}
          collisionPadding={16}
          className="hc-content z-50 w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-chicago-mist bg-white shadow-lift"
        >
          {destination.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={destination.image}
              alt={destination.name}
              loading="lazy"
              decoding="async"
              className="h-40 w-full object-cover"
            />
          )}
          <div className="space-y-3 p-4">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-chicago-red">
                <MapPin className="h-3 w-3" />
                {destination.area}
              </div>
              <h4 className="mt-1 font-display text-lg font-semibold leading-tight text-chicago-navy">
                {destination.name}
              </h4>
            </div>

            <p className="text-sm leading-relaxed text-chicago-stone">
              {destination.longDescription}
            </p>

            {travel && (
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-chicago-mist px-2 py-0.5 font-medium text-chicago-blue">
                  {travelLabels[travel]}
                </span>
                {rainPlan && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-chicago-cream px-2 py-0.5 font-medium text-chicago-stone">
                    <CloudRain className="h-3 w-3" />
                    Rain plan
                  </span>
                )}
              </div>
            )}

            {rainPlan && (
              <p className="rounded-lg border border-chicago-mist bg-chicago-mist/40 p-2 text-xs leading-relaxed text-chicago-stone">
                <strong className="text-chicago-deep">If it rains:</strong> {rainPlan}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={destination.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-chicago-navy px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-chicago-deep"
              >
                Visit official site
                <ExternalLink className="h-3 w-3" />
              </a>
              {destination.wikiPageUrl && (
                <a
                  href={destination.wikiPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-chicago-mist bg-white px-3 py-1.5 text-xs font-medium text-chicago-blue transition hover:border-chicago-blue"
                >
                  <BookOpen className="h-3 w-3" />
                  Background
                </a>
              )}
            </div>
          </div>
          <HoverCard.Arrow className="fill-white" width={14} height={7} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

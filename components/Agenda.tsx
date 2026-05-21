import {
  ArrowUpRight,
  BookOpen,
  ChefHat,
  Lightbulb,
  Library,
  Tent,
  Trees,
} from "lucide-react";
import {
  weeks,
  type DayShape,
  type EnrichedDestination,
  type Theme,
} from "@/lib/data";
import { ChicagoStar } from "@/components/ChicagoStar";
import { DestinationHoverCard } from "@/components/DestinationHoverCard";

interface AgendaProps {
  destinationsBySlug: Record<string, EnrichedDestination>;
}

const themeAccent: Record<Theme, string> = {
  animals: "from-chicago-red/15",
  history: "from-chicago-gold/20",
  nature: "from-chicago-blue/15",
  mixed: "from-chicago-sky/30",
};

const shapeIcon: Record<DayShape, typeof Library> = {
  library: Library,
  outing: Tent,
  recap: Trees,
  bake: ChefHat,
};

const costLabel = {
  free: "Free",
  low: "Low cost",
  medium: "Medium",
  ticketed: "Ticketed",
} as const;

export function Agenda({ destinationsBySlug }: AgendaProps) {
  return (
    <section id="weeks" className="border-b border-chicago-mist bg-chicago-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
            <ChicagoStar size={12} /> The four weeks
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-chicago-navy md:text-4xl">
            One theme per week. Two outings each.
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-chicago-stone md:text-lg">
            Hover any outing for a photo and a short description. Every week is
            self-contained — easy to swap, reorder, or extend.
          </p>
        </div>

        <ol className="mt-10 grid gap-5">
          {weeks.map((week) => (
            <li
              key={week.number}
              className="relative overflow-hidden rounded-3xl border border-chicago-mist bg-white shadow-soft"
            >
              {/* Theme accent bar across the top */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${themeAccent[week.themeKey]} via-transparent to-transparent`}
              />

              <div className="p-6 md:p-8">
                {/* Week header */}
                <header className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-chicago-mist pb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-chicago-red">
                    Week {week.number}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-chicago-navy md:text-3xl">
                    {week.theme}
                  </h3>
                </header>

                {/* Body */}
                <div className="mt-5 grid gap-7 md:grid-cols-[1.1fr,1fr]">
                  {/* Left column: question + pitch + outings */}
                  <div>
                    <p className="font-display text-lg italic leading-snug text-chicago-deep">
                      &ldquo;{week.question}&rdquo;
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-chicago-stone">
                      {week.pitch}
                    </p>

                    <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-chicago-blue">
                      The two outings
                    </h4>
                    <ul className="mt-2.5 grid gap-2">
                      {week.outings.map((o) => {
                        const dest = destinationsBySlug[o.destSlug];
                        if (!dest) return null;
                        const card = (
                          <article className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-chicago-mist bg-chicago-paper p-3 transition hover:-translate-y-0.5 hover:border-chicago-blue/60 hover:shadow-soft">
                            {dest.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={dest.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-14 w-14 shrink-0 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="h-14 w-14 shrink-0 rounded-lg bg-chicago-mist" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="text-[11px] font-semibold uppercase tracking-wider text-chicago-red">
                                {o.day}
                              </div>
                              <h5 className="mt-0.5 font-display text-sm font-semibold leading-tight text-chicago-navy group-hover:underline">
                                {dest.name}
                              </h5>
                              <p className="mt-0.5 truncate text-[11px] text-chicago-slate">
                                {dest.area} · {costLabel[dest.cost]}
                              </p>
                            </div>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-chicago-blue opacity-0 transition group-hover:opacity-100" />
                          </article>
                        );
                        return (
                          <li key={o.destSlug}>
                            <DestinationHoverCard destination={dest}>
                              {card}
                            </DestinationHoverCard>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right column: daily goals */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-chicago-blue">
                      Daily goals
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {week.daily.map((d) => {
                        const Icon = shapeIcon[d.shape];
                        return (
                          <li
                            key={d.day}
                            className="flex items-start gap-3 rounded-xl border border-chicago-mist bg-chicago-paper px-3 py-2"
                          >
                            <span className="mt-0.5 w-9 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-chicago-red">
                              {d.day}
                            </span>
                            <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-chicago-blue" />
                            <span className="text-sm leading-snug text-chicago-stone">
                              {d.goal}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Footer: library + concepts + bake */}
                <div className="mt-6 grid gap-5 border-t border-chicago-mist pt-5 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-chicago-red" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-chicago-blue">
                        Library focus
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-chicago-stone">
                        {week.libraryTheme}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-chicago-red" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-chicago-blue">
                        Concepts
                      </h4>
                      <ul className="mt-1.5 flex flex-wrap gap-1.5">
                        {week.concepts.map((c) => (
                          <li
                            key={c}
                            className="rounded-full border border-chicago-mist bg-chicago-paper px-2.5 py-0.5 text-[11px] font-medium text-chicago-deep"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-chicago-slate">
                  <ChefHat className="h-3.5 w-3.5" />
                  <span>
                    <strong className="text-chicago-deep">Friday bake:</strong>{" "}
                    {week.bakeIdea}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import {
  BookOpen,
  ChefHat,
  Library,
  Music2,
  Puzzle,
  Sun,
  Tent,
  Trees,
} from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";
import { dailyAnchors, weekShape, type DayShape } from "@/lib/data";

const shapeIcon: Record<DayShape, typeof Library> = {
  library: Library,
  outing: Tent,
  recap: Trees,
  bake: ChefHat,
};

const anchorIcon = [BookOpen, Music2, Sun, Puzzle];

export function DailyRhythm() {
  return (
    <section id="rhythm" className="border-b border-chicago-mist bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
            <ChicagoStar size={12} /> How a week works
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-chicago-navy md:text-4xl">
            Two outings, three home days, and a baking Friday.
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-chicago-stone md:text-lg">
            Same shape every week, different content. No hour-by-hour schedule —
            just one clear goal per day so the kids know what to expect and
            we&apos;ve still got room to follow what&apos;s actually working.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr,1fr]">
          {/* The week shape */}
          <div>
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-chicago-blue">
              The week shape
            </h3>
            <ol className="mt-4 space-y-2.5">
              {weekShape.map((d) => {
                const Icon = shapeIcon[d.shape];
                return (
                  <li
                    key={d.day}
                    className="flex items-start gap-4 rounded-2xl border border-chicago-mist bg-chicago-paper p-4 shadow-soft transition hover:border-chicago-blue/40 hover:shadow-lift"
                  >
                    <div className="flex w-12 shrink-0 flex-col items-center">
                      <span className="font-display text-base font-bold text-chicago-red">
                        {d.day}
                      </span>
                      <span className="mt-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-chicago-navy text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="font-display text-base font-semibold text-chicago-navy">
                        {d.label}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-chicago-stone">
                        {d.blurb}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Daily anchors */}
          <aside>
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-chicago-blue">
              Daily anchors
            </h3>
            <p className="mt-2 text-sm text-chicago-stone">
              Things that happen every single day, regardless of theme.
            </p>
            <ul className="mt-4 grid gap-3">
              {dailyAnchors.map((a, i) => {
                const Icon = anchorIcon[i % anchorIcon.length];
                return (
                  <li
                    key={a.label}
                    className="flex gap-3 rounded-2xl border border-chicago-mist bg-white p-4 shadow-soft"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-chicago-red/10 text-chicago-red">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-chicago-navy">
                        {a.label}
                      </h4>
                      <p className="mt-0.5 text-sm leading-relaxed text-chicago-stone">
                        {a.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { credentials } from "@/lib/data";
import {
  CalendarCheck,
  Compass,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

const icons = [
  CalendarCheck,
  Compass,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
];

export function Pitch() {
  return (
    <section id="why-christian" className="border-b border-chicago-mist bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
            <ChicagoStar size={12} /> Why Christian
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-chicago-navy md:text-5xl">
            A planner first, a sitter second.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-chicago-stone">
            Most sitters wing it. The week below — and the eight that follow — are
            what you get with someone who actually plans. Six things you can
            count on every single day.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-chicago-mist bg-chicago-paper p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="absolute -right-6 -top-6 text-chicago-mist opacity-50 transition group-hover:opacity-80">
                  <ChicagoStar size={80} />
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-chicago-navy text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="relative mt-4 font-display text-lg font-semibold text-chicago-navy">
                  {c.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-chicago-stone">{c.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { credentials } from "@/lib/data";
import {
  CalendarCheck,
  Compass,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
    <section id="why-christian" className="border-b border-forest-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sand-700">
            Why Christian
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            A planner first, a sitter second.
          </h2>
          <p className="mt-4 text-pretty text-ink-700">
            Most sitters wing it. The week below — and the eight that follow — are
            what you get with someone who actually plans. Six things you can
            count on every single day:
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={c.title}
                className="rounded-2xl border border-forest-100 bg-cream-50 p-6 shadow-soft"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-cream-50">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

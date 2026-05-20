import { Mail, Phone, Pencil, Calendar, MapPinned, Replace } from "lucide-react";

const swaps = [
  {
    title: "Reorder weeks",
    Icon: Replace,
    body: "Want history first because the kids are reading a Lincoln biography? Easy swap — every week is self-contained.",
  },
  {
    title: "Trade specific days",
    Icon: Pencil,
    body: "Don't love a destination? Swap it from the catalog of 21 vetted spots. Every theme has 4–6 alternates.",
  },
  {
    title: "Adjust the schedule",
    Icon: Calendar,
    body: "Need 4-day weeks, half-Fridays, or one late evening for a parent date night? Tell me your shape and I'll rebuild.",
  },
  {
    title: "Tighten the radius",
    Icon: MapPinned,
    body: "Prefer to stay walkable? I'll cut the day trips and double up on Lincoln Park, Old Town, and the Museum Campus.",
  },
];

export function Customize() {
  return (
    <section id="customize" className="border-b border-forest-100 bg-gradient-to-b from-cream-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sand-700">
              This is a starting point
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Built to be edited.
            </h2>
            <p className="mt-4 text-pretty text-ink-700">
              I don&apos;t expect you to take this exactly as written. The point of
              showing up with a real plan is to give us something concrete to
              react to. Strike anything you don&apos;t like — I&apos;ll have a revised
              version back to you within a day.
            </p>

            <ul className="mt-8 grid gap-4">
              {swaps.map((s) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-xl border border-forest-100 bg-white p-4 shadow-soft"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-600 text-cream-50">
                    <s.Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-ink-700">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside
            id="contact"
            className="rounded-2xl border border-forest-200 bg-forest-700 p-8 text-cream-50 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-sand-300">
              Next step
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-snug">
              A 20-minute call, then a tailored plan in your inbox.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-100/90">
              We&apos;ll talk about your kids, your weeks, and any non-negotiables.
              I&apos;ll send a revised version of this agenda within 24 hours, with
              a sample week locked in for trial.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sand-300" />
                <a
                  href="mailto:hello@example.com"
                  className="font-medium text-cream-50 underline-offset-4 hover:underline"
                >
                  christian@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sand-300" />
                <a
                  href="tel:+13125550123"
                  className="font-medium text-cream-50 underline-offset-4 hover:underline"
                >
                  (312) 555-0123
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-forest-900/40 p-4 text-xs leading-relaxed text-cream-100/80">
              <strong className="block text-cream-50">References on request.</strong>
              Past families, two summer-camp counselors I&apos;ve worked with, and
              a teacher reference are all available.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

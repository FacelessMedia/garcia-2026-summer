import { Mail, Phone, Pencil, Calendar, MapPinned, Replace } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

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
    <section id="customize" className="relative border-b border-chicago-mist bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> This is a starting point
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-chicago-navy md:text-5xl">
              Built to be edited.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-chicago-stone">
              I don&apos;t expect you to take this exactly as written. The point of
              showing up with a real plan is to give us something concrete to
              react to. Strike anything you don&apos;t like — I&apos;ll have a revised
              version back to you within a day.
            </p>

            <ul className="mt-8 grid gap-4">
              {swaps.map((s) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-xl border border-chicago-mist bg-chicago-paper p-4 shadow-soft transition hover:border-chicago-blue/40 hover:shadow-lift"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chicago-red text-white">
                    <s.Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-chicago-navy">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-chicago-stone">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside
            id="contact"
            className="relative overflow-hidden rounded-2xl bg-chicago-navy p-8 text-white shadow-lift"
          >
            {/* Chicago stars motif inside the card */}
            <div className="pointer-events-none absolute -right-10 -top-10 text-chicago-red/25">
              <ChicagoStar size={180} />
            </div>
            <div className="pointer-events-none absolute -bottom-12 -left-8 text-chicago-red/15">
              <ChicagoStar size={140} />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-chicago-sky">
                <ChicagoStar size={11} className="text-chicago-red" /> Next step
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
                A 20-minute call, then a tailored plan in your inbox.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                We&apos;ll talk about your kids, your weeks, and any non-negotiables.
                I&apos;ll send a revised version of this agenda within 24 hours, with
                a sample week locked in for trial.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-chicago-sky" />
                  <a
                    href="mailto:christian@example.com"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    christian@example.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-chicago-sky" />
                  <a
                    href="tel:+13125550123"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    (312) 555-0123
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/80 backdrop-blur">
                <strong className="block text-white">References on request.</strong>
                Past families, two summer-camp counselors I&apos;ve worked with, and
                a teacher reference are all available.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

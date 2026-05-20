import { CalendarDays, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-forest-100 paper-bg">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-forest-700">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-white/70 px-3 py-1">
            <MapPin className="h-3.5 w-3.5" /> Lincoln Park, Chicago
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-white/70 px-3 py-1">
            <CalendarDays className="h-3.5 w-3.5" /> June – July 2026
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-white/70 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" /> Sample agenda — fully customizable
          </span>
        </div>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 md:text-6xl">
          A summer your kids will remember,{" "}
          <span className="text-forest-600">planned by hand</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-700 md:text-xl">
          I&apos;m <strong>Christian Garcia</strong>. This is the sample agenda I&apos;ve put
          together for your two animal-loving, history-curious, nature-obsessed
          kids — built around your neighborhood and the time I&apos;ll have with them
          this summer.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#agenda"
            className="rounded-full bg-forest-600 px-5 py-3 text-sm font-semibold text-cream-50 shadow-soft transition hover:bg-forest-700"
          >
            See the full 9-week plan
          </a>
          <a
            href="#customize"
            className="rounded-full border border-forest-200 bg-white px-5 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-900"
          >
            What you can change
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-forest-100 pt-8 md:grid-cols-4">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-forest-700">
              Weeks planned
            </dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-ink-900">9</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-forest-700">
              Themed weeks
            </dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-ink-900">9</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-forest-700">
              Local destinations
            </dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-ink-900">21</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-forest-700">
              Day trips
            </dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-ink-900">7</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";
import { Skyline } from "@/components/Skyline";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-chicago-mist">
      {/* Sky gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-chicago-sky/60 via-chicago-mist/40 to-chicago-paper" />
      <div className="absolute inset-0 -z-10 star-bg opacity-70" />

      {/* Chicago flag stripe along the top edge */}
      <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-chicago-red" />

      {/* Skyline silhouette anchored to the bottom */}
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-[180px] w-full text-chicago-deep/85" />

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-14 md:pt-24">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-red/30 bg-white/80 px-3 py-1.5 text-chicago-red backdrop-blur">
            <ChicagoStar size={12} /> Chicago, IL
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-blue/20 bg-white/80 px-3 py-1.5 text-chicago-blue backdrop-blur">
            <MapPin className="h-3 w-3" /> Lincoln Park
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-blue/20 bg-white/80 px-3 py-1.5 text-chicago-blue backdrop-blur">
            <CalendarDays className="h-3 w-3" /> Summer 2026
          </span>
        </div>

        {/* Four Chicago stars (matching the city flag) — decorative row */}
        <div className="mt-10 flex items-center gap-3 text-chicago-red">
          <ChicagoStar size={20} />
          <ChicagoStar size={20} />
          <ChicagoStar size={20} />
          <ChicagoStar size={20} />
        </div>

        <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-chicago-navy md:text-7xl">
          A Chicago summer your kids will remember,{" "}
          <span className="relative inline-block text-chicago-red">
            planned by hand
            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-chicago-red/30" />
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-chicago-stone md:text-xl">
          I&apos;m <strong className="text-chicago-deep">Christian Garcia</strong>. This is
          the sample summer agenda I&apos;ve put together for your two animal-loving,
          history-curious, nature-obsessed kids — built around Lincoln Park and the
          best of Chicagoland over June and July.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#agenda"
            className="group inline-flex items-center gap-2 rounded-full bg-chicago-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson"
          >
            See the full 9-week plan
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 rounded-full border border-chicago-blue/30 bg-white px-6 py-3 text-sm font-semibold text-chicago-deep transition hover:border-chicago-blue hover:bg-chicago-mist"
          >
            Browse 21 destinations
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-chicago-mist pt-8 md:grid-cols-4">
          {[
            { label: "Themed weeks", value: "9" },
            { label: "Curated destinations", value: "21" },
            { label: "Lincoln Park spots", value: "6" },
            { label: "Day trips", value: "7" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <ChicagoStar size={14} className="shrink-0 text-chicago-red" />
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-chicago-blue">
                  {stat.label}
                </dt>
                <dd className="mt-0.5 font-display text-3xl font-bold text-chicago-navy">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

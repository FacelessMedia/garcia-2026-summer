import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";
import { Skyline } from "@/components/Skyline";
import { WeatherFX } from "@/components/WeatherFX";
import { family } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-chicago-mist">
      {/* Sky gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-chicago-sky/60 via-chicago-mist/40 to-chicago-paper" />
      <div className="absolute inset-0 -z-10 star-bg opacity-70" />

      {/* Animated clouds + sun + bird */}
      <div className="absolute inset-0 -z-[5]">
        <WeatherFX />
      </div>

      {/* Chicago flag stripe along the top edge */}
      <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-chicago-red" />

      {/* Skyline silhouette anchored to the bottom */}
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-[140px] w-full text-chicago-deep/85" />

      <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-12 md:pt-20">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-red/30 bg-white/80 px-3 py-1.5 text-chicago-red backdrop-blur">
            <ChicagoStar size={12} /> For the {family.lastName} family
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-blue/20 bg-white/80 px-3 py-1.5 text-chicago-blue backdrop-blur">
            <MapPin className="h-3 w-3" /> Lincoln Park, Chicago
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-blue/20 bg-white/80 px-3 py-1.5 text-chicago-blue backdrop-blur">
            <CalendarDays className="h-3 w-3" /> Summer 2026
          </span>
        </div>

        {/* Four Chicago stars (matching the city flag) — decorative row */}
        <div className="mt-8 flex items-center gap-3 text-chicago-red">
          <ChicagoStar size={18} className="twinkle-1" />
          <ChicagoStar size={18} className="twinkle-2" />
          <ChicagoStar size={18} className="twinkle-3" />
          <ChicagoStar size={18} className="twinkle-4" />
        </div>

        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-chicago-navy md:text-6xl">
          Summer 2026 with{" "}
          <span className="relative inline-block text-chicago-red">
            Rory &amp; Bellamy
            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-chicago-red/30" />
          </span>
          .
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-chicago-stone md:text-lg">
          Hi — I&apos;m <strong className="text-chicago-deep">Christian Garcia</strong>.
          This is a four-week starter plan for your kids ({family.ageRange}). One{" "}
          <strong className="text-chicago-deep">theme per week</strong>,{" "}
          <strong className="text-chicago-deep">two outings a week</strong>, and a daily
          rhythm built for curious kids who aren&apos;t into rigid hour-by-hour schedules.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#weeks"
            className="group inline-flex items-center gap-2 rounded-full bg-chicago-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson"
          >
            See the four weeks
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#rhythm"
            className="inline-flex items-center gap-2 rounded-full border border-chicago-blue/30 bg-white px-5 py-2.5 text-sm font-semibold text-chicago-deep transition hover:border-chicago-blue hover:bg-chicago-mist"
          >
            How a week works
          </a>
        </div>
      </div>
    </section>
  );
}

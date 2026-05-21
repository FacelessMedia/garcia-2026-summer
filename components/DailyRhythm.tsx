import { dailyRhythm } from "@/lib/data";
import { Clock } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

export function DailyRhythm() {
  return (
    <section id="daily-rhythm" className="border-b border-chicago-mist lake-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr,1.6fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> The daily rhythm
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-chicago-navy md:text-5xl">
              What a typical day looks like.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-chicago-stone">
              Same shape every day, different content. Predictability is what makes
              kids feel safe; the activities are what make the summer fun. The hours
              flex around your work schedule.
            </p>
            <p className="mt-4 rounded-xl border border-chicago-mist bg-white p-4 text-sm text-chicago-stone shadow-soft">
              <strong className="text-chicago-deep">Standard hours:</strong> 8:30 AM – 5:00 PM,
              Monday through Friday. Earlier starts or later evenings on request.
            </p>
          </div>

          <ol className="relative space-y-1 border-l-2 border-chicago-mist pl-6">
            {dailyRhythm.map((slot) => (
              <li key={slot.time} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-chicago-mist bg-white shadow-soft">
                  <Clock className="h-3 w-3 text-chicago-red" />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-base font-semibold text-chicago-red">
                    {slot.time}
                  </span>
                  <span className="font-medium text-chicago-navy">{slot.label}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-chicago-stone">{slot.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

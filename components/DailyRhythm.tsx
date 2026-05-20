import { dailyRhythm } from "@/lib/data";
import { Clock } from "lucide-react";

export function DailyRhythm() {
  return (
    <section id="daily-rhythm" className="border-b border-forest-100 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr,1.6fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sand-700">
              The daily rhythm
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              What a typical day looks like.
            </h2>
            <p className="mt-4 text-pretty text-ink-700">
              Same shape every day, different content. Predictability is what makes
              kids feel safe; the activities are what make the summer fun. The hours
              flex around your work schedule.
            </p>
            <p className="mt-3 text-sm text-ink-700">
              <strong>Standard hours:</strong> 8:30 AM – 5:00 PM, Monday through
              Friday. Earlier starts or later evenings on request.
            </p>
          </div>

          <ol className="relative space-y-1 border-l-2 border-forest-100 pl-6">
            {dailyRhythm.map((slot) => (
              <li key={slot.time} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-forest-100 bg-white">
                  <Clock className="h-2.5 w-2.5 text-forest-600" />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-base font-semibold text-forest-700">
                    {slot.time}
                  </span>
                  <span className="font-medium text-ink-900">{slot.label}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{slot.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import {
  ChefHat,
  GraduationCap,
  HeartPulse,
  Languages,
  LifeBuoy,
  Music2,
} from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

const creds: Array<{ Icon: typeof HeartPulse; label: string; note?: string }> = [
  {
    Icon: GraduationCap,
    label: "English major, UIC",
    note: "120 hours of public-school classroom observation.",
  },
  {
    Icon: HeartPulse,
    label: "CPR certified",
    note: "Current certification.",
  },
  {
    Icon: LifeBuoy,
    label: "Red Cross + Lifeguard",
    note: "Including kids' pool / kiddie-pool experience.",
  },
  {
    Icon: Languages,
    label: "Bilingual",
    note: "English / Spanish — happy to weave Spanish into the day.",
  },
  {
    Icon: Music2,
    label: "Piano + music theory",
    note: "Choir background; I bring a second keyboard for Bellamy.",
  },
  {
    Icon: ChefHat,
    label: "Amateur chef + baker",
    note: "Hence the Friday bake day.",
  },
];

const hobbies = [
  "Chess",
  "Reading",
  "Piano",
  "Choir",
  "Hiking",
  "Fitness",
  "Sports",
  "Studying Arabic",
  "Cooking & baking",
];

export function About() {
  return (
    <section id="about" className="border-b border-chicago-mist bg-chicago-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
          {/* Left: narrative */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> About me
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-chicago-navy md:text-4xl">
              Hi, I&apos;m Christian.
            </h2>

            <div className="mt-4 space-y-3 text-base leading-relaxed text-chicago-stone md:text-lg">
              <p>
                Born and raised in Chicago. I&apos;m an English major at UIC with
                120 hours of public-school classroom observation, plus a year of
                paid childcare experience with kids under ten. I&apos;m a
                musician — piano and choir since I was a kid — and I bring a
                second keyboard so Bellamy can play along with Rory.
              </p>
              <p>
                Outside the plan above I can fold in a half-hour piano lesson,
                Spanish vocabulary, light common-core tutoring, or a real baking
                session on Fridays — whatever Rory and Bellamy take an interest
                in. I&apos;m bilingual, CPR / Red Cross certified, an avid
                reader, and comfortable with the kind of small house needs that
                come up around childcare.
              </p>
            </div>

            {/* Hobbies — quiet chip row */}
            <div className="mt-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-chicago-blue">
                Outside of work
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hobbies.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-chicago-mist bg-white px-2.5 py-0.5 text-[11px] font-medium text-chicago-blue"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: credentials grid */}
          <aside>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-chicago-blue">
              Credentials &amp; skills
            </h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {creds.map((c) => (
                <li
                  key={c.label}
                  className="flex items-start gap-3 rounded-2xl border border-chicago-mist bg-white p-3.5 shadow-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-chicago-red/10 text-chicago-red">
                    <c.Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-display text-sm font-semibold leading-tight text-chicago-navy">
                      {c.label}
                    </h4>
                    {c.note && (
                      <p className="mt-1 text-[11.5px] leading-snug text-chicago-stone">
                        {c.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

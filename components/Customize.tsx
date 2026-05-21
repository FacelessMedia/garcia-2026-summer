import { Mail, Phone } from "lucide-react";
import { ChicagoStar } from "@/components/ChicagoStar";

export function Customize() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
              <ChicagoStar size={12} /> A starting point
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-chicago-navy md:text-4xl">
              Say what you&apos;d change.
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-chicago-stone md:text-lg">
              This is meant to be skim-able, not finished. Strike anything you
              don&apos;t love, swap a theme, slide a museum to a different week,
              or tell me the kids are tired of zoos this summer. I&apos;ll have
              a revised version back to you within a day.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-chicago-navy p-7 text-white shadow-lift">
            <div className="pointer-events-none absolute -right-8 -top-8 text-chicago-red/25">
              <ChicagoStar size={140} />
            </div>

            <div className="relative">
              <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">
                Easiest next step: a 15-minute call.
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
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
              <p className="mt-5 text-xs leading-relaxed text-white/75">
                CPR / First Aid certified. Allergy-aware. References available
                on request.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

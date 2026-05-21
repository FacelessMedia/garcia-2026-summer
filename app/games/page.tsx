import Link from "next/link";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GamesHub } from "@/components/games/GamesHub";
import { ChicagoStar } from "@/components/ChicagoStar";

export const metadata: Metadata = {
  title: "Kid-tested games · Christian Garcia · Summer 2026",
  description:
    "Trivia (300+ questions), Tic-Tac-Toe with a thinking bot, Memory Match, and Word Scramble — short, screen-light games to keep kids learning between adventures.",
};

export default function GamesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden border-b border-chicago-mist">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-chicago-sky/50 via-chicago-mist/30 to-chicago-paper" />
          <div className="absolute inset-0 -z-10 star-bg opacity-60" />
          <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-chicago-red" />

          <div className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:pt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-blue hover:text-chicago-red"
            >
              <ArrowLeft className="h-3 w-3" /> Back to the agenda
            </Link>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-red/30 bg-white/80 px-3 py-1.5 text-chicago-red backdrop-blur">
                <ChicagoStar size={11} /> Built for the kids
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-chicago-blue/20 bg-white/80 px-3 py-1.5 text-chicago-blue backdrop-blur">
                <Gamepad2 className="h-3 w-3" /> Four games
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-chicago-navy md:text-6xl">
              Quick games tied to the{" "}
              <span className="text-chicago-red">summer plan</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-chicago-stone md:text-lg">
              Short, screen-light, kid-friendly. Trivia for car rides, tic-tac-toe for
              waits at the museum, memory match for rainy mornings, and a word scramble
              that quietly teaches Chicago places.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <Stat value="300+" label="trivia questions" />
              <Stat value="3" label="categories" />
              <Stat value="4" label="games" />
              <Stat value="0" label="ads / data tracking" />
            </div>
          </div>
        </section>

        {/* The hub */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <GamesHub />
          </div>
        </section>

        {/* Tie it back to the rest of the site */}
        <section className="border-t border-chicago-mist bg-chicago-paper">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-red">
                  <ChicagoStar size={11} /> Why a games tab?
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-chicago-navy md:text-4xl">
                  Because the day doesn&apos;t stop when the museum closes.
                </h2>
                <p className="mt-3 text-pretty text-chicago-stone">
                  Long museum days, train rides, and waiting for tables come with a lot
                  of in-between. These are the kinds of games I run with kids in real
                  life — short rounds, no losers, and every right answer comes with a
                  fact that ties back to where we&apos;ve been or where we&apos;re going
                  next.
                </p>
                <Link
                  href="/#agenda"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-chicago-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson"
                >
                  See the 9-week agenda
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <BulletCard
                  title="No accounts"
                  body="Nothing to sign up for. Open the page, play, leave."
                />
                <BulletCard
                  title="Reading-light"
                  body="Trivia uses short sentences, big buttons, and audible-friendly answer feedback."
                />
                <BulletCard
                  title="Local focus"
                  body="Most questions and words are tied to Chicago — so the game also reinforces what they're seeing."
                />
                <BulletCard
                  title="Travel-ready"
                  body="Works fine on a phone in the car or on the L. No app needed."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-chicago-mist bg-white px-3 py-2 shadow-soft">
      <div className="font-display text-xl font-bold text-chicago-red">{value}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-chicago-blue">
        {label}
      </div>
    </div>
  );
}

function BulletCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-chicago-mist bg-white p-4 shadow-soft">
      <h3 className="font-display text-sm font-semibold text-chicago-navy">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-chicago-stone">{body}</p>
    </div>
  );
}

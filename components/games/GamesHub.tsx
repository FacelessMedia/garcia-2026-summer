"use client";

import { useState } from "react";
import { Brain, Grid3x3, ScanSearch, Spline } from "lucide-react";
import { Trivia } from "@/components/games/Trivia";
import { TicTacToe } from "@/components/games/TicTacToe";
import { MemoryMatch } from "@/components/games/MemoryMatch";
import { WordScramble } from "@/components/games/WordScramble";

type GameKey = "trivia" | "tictactoe" | "memory" | "scramble";

interface GameTab {
  key: GameKey;
  label: string;
  blurb: string;
  Icon: typeof Brain;
  ages: string;
}

const GAMES: GameTab[] = [
  {
    key: "trivia",
    label: "Trivia Showdown",
    blurb: "300 questions across animals, Chicago history, and nature.",
    Icon: Brain,
    ages: "Ages 6+",
  },
  {
    key: "tictactoe",
    label: "Tic-Tac-Toe",
    blurb: "Classic 3-in-a-row vs. a thinking bot. Three difficulties.",
    Icon: Grid3x3,
    ages: "Ages 4+",
  },
  {
    key: "memory",
    label: "Memory Match",
    blurb: "Flip and find pairs of Chicago zoo animals.",
    Icon: ScanSearch,
    ages: "Ages 4+",
  },
  {
    key: "scramble",
    label: "Word Scramble",
    blurb: "Unscramble Chicago places, animals, and famous foods.",
    Icon: Spline,
    ages: "Ages 7+",
  },
];

export function GamesHub() {
  const [active, setActive] = useState<GameKey>("trivia");
  const activeTab = GAMES.find((g) => g.key === active)!;

  return (
    <div className="space-y-6">
      {/* Tab picker */}
      <nav
        aria-label="Pick a game"
        className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
      >
        {GAMES.map((g) => {
          const isActive = g.key === active;
          return (
            <button
              key={g.key}
              type="button"
              onClick={() => setActive(g.key)}
              aria-pressed={isActive}
              className={`group flex h-full items-start gap-3 rounded-2xl border p-4 text-left transition ${
                isActive
                  ? "border-chicago-red bg-chicago-red/5 shadow-soft"
                  : "border-chicago-mist bg-white hover:-translate-y-0.5 hover:border-chicago-blue/40 hover:shadow-soft"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-soft transition ${
                  isActive ? "bg-chicago-red" : "bg-chicago-navy"
                }`}
              >
                <g.Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3
                    className={`font-display text-base font-semibold ${
                      isActive ? "text-chicago-red" : "text-chicago-navy"
                    }`}
                  >
                    {g.label}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-chicago-blue">
                    {g.ages}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-chicago-stone">
                  {g.blurb}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Active game */}
      <div
        key={active}
        className="trivia-enter rounded-3xl border border-chicago-mist bg-chicago-paper p-5 shadow-soft md:p-8"
      >
        <header className="mb-6 flex items-center gap-3 border-b border-chicago-mist pb-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-chicago-navy text-white">
            <activeTab.Icon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-chicago-navy md:text-2xl">
              {activeTab.label}
            </h2>
            <p className="text-sm text-chicago-stone">{activeTab.blurb}</p>
          </div>
        </header>

        {active === "trivia" && <Trivia />}
        {active === "tictactoe" && <TicTacToe />}
        {active === "memory" && <MemoryMatch />}
        {active === "scramble" && <WordScramble />}
      </div>
    </div>
  );
}

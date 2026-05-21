"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCw, Timer, Trophy } from "lucide-react";
import { Confetti } from "@/components/games/Confetti";

interface AnimalCard {
  emoji: string;
  name: string;
}

const PAIRS: AnimalCard[] = [
  { emoji: "🦁", name: "Lion" },
  { emoji: "🐧", name: "Penguin" },
  { emoji: "🐬", name: "Dolphin" },
  { emoji: "🦒", name: "Giraffe" },
  { emoji: "🐢", name: "Turtle" },
  { emoji: "🦋", name: "Butterfly" },
  { emoji: "🦅", name: "Eagle" },
  { emoji: "🐠", name: "Fish" },
];

interface CardState extends AnimalCard {
  id: number;
  pairId: number;
  flipped: boolean;
  matched: boolean;
}

function buildDeck(): CardState[] {
  const deck = PAIRS.flatMap((p, i): CardState[] => [
    { ...p, id: i * 2, pairId: i, flipped: false, matched: false },
    { ...p, id: i * 2 + 1, pairId: i, flipped: false, matched: false },
  ]);
  // Fisher–Yates
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryMatch() {
  const [deck, setDeck] = useState<CardState[]>(() => buildDeck());
  const [picked, setPicked] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [start, setStart] = useState<number | null>(null);
  const [now, setNow] = useState<number>(0);
  const [confettiBurst, setConfettiBurst] = useState(0);

  const totalPairs = PAIRS.length;
  const finished = matches === totalPairs;

  // Tick a clock once the player makes the first move.
  useEffect(() => {
    if (start === null || finished) return;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [start, finished]);

  const elapsed = useMemo(() => {
    if (start === null) return 0;
    return Math.floor(((finished ? now : Date.now()) - start) / 1000);
  }, [start, now, finished]);

  // Resolve a pair after the second flip.
  useEffect(() => {
    if (picked.length !== 2) return;
    const [a, b] = picked;
    setMoves((m) => m + 1);
    const ca = deck.find((c) => c.id === a)!;
    const cb = deck.find((c) => c.id === b)!;
    if (ca.pairId === cb.pairId) {
      // match
      setDeck((d) =>
        d.map((c) =>
          c.id === a || c.id === b ? { ...c, matched: true } : c,
        ),
      );
      setMatches((m) => m + 1);
      setConfettiBurst((x) => x + 1);
      setPicked([]);
    } else {
      // mismatch — flip back after a moment
      const id = setTimeout(() => {
        setDeck((d) =>
          d.map((c) =>
            c.id === a || c.id === b ? { ...c, flipped: false } : c,
          ),
        );
        setPicked([]);
      }, 800);
      return () => clearTimeout(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked]);

  // Big celebration on win.
  useEffect(() => {
    if (finished) setConfettiBurst((x) => x + 5);
  }, [finished]);

  function flip(id: number) {
    const card = deck.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;
    if (picked.length === 2) return;
    if (start === null) setStart(Date.now());
    setDeck((d) =>
      d.map((c) => (c.id === id ? { ...c, flipped: true } : c)),
    );
    setPicked((p) => [...p, id]);
  }

  function reset() {
    setDeck(buildDeck());
    setPicked([]);
    setMoves(0);
    setMatches(0);
    setStart(null);
    setNow(0);
  }

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeLabel = `${mins}:${secs.toString().padStart(2, "0")}`;

  return (
    <>
      <Confetti trigger={confettiBurst} count={finished ? 120 : 18} />
      <div className="space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <Stat label="Pairs" value={`${matches} / ${totalPairs}`} accent="text-chicago-red" />
          <Stat label="Moves" value={String(moves)} accent="text-chicago-navy" />
          <Stat label="Time" value={timeLabel} accent="text-chicago-blue" Icon={Timer} />
        </div>

        {finished && (
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900">
            <Trophy className="h-5 w-5 shrink-0" />
            <div className="flex-1 text-sm font-semibold">
              You matched all {totalPairs} pairs in {moves} moves and {timeLabel}!
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
            >
              <RefreshCw className="h-3 w-3" /> Play again
            </button>
          </div>
        )}

        {/* Board */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {deck.map((card) => {
            const open = card.flipped || card.matched;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => flip(card.id)}
                aria-label={open ? card.name : "Hidden card"}
                className={`flip-card aspect-square w-full ${open ? "is-flipped" : ""}`}
                disabled={card.matched}
              >
                <div className="flip-inner">
                  {/* Back: hidden state */}
                  <div className="flip-face">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl border-2 border-chicago-mist bg-gradient-to-br from-chicago-navy to-chicago-deep text-white shadow-soft">
                      <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 text-white/30" fill="currentColor">
                        <polygon points="50,5 60.825,38.175 95,38.175 67.5,58.65 78.325,91.825 50,71.35 21.675,91.825 32.5,58.65 5,38.175 39.175,38.175" />
                      </svg>
                    </div>
                  </div>
                  {/* Front: animal */}
                  <div className="flip-face flip-face-back">
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-2xl border-2 transition ${
                        card.matched
                          ? "border-emerald-300 bg-emerald-50"
                          : "border-chicago-red/40 bg-chicago-paper"
                      }`}
                    >
                      <span className="text-4xl sm:text-5xl">{card.emoji}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-chicago-mist bg-white px-4 py-2 text-xs font-semibold text-chicago-stone transition hover:border-chicago-blue"
          >
            <RefreshCw className="h-3 w-3" /> Shuffle and reset
          </button>
        </div>
      </div>
    </>
  );
}

function Stat({
  label,
  value,
  accent,
  Icon,
}: {
  label: string;
  value: string;
  accent: string;
  Icon?: typeof Timer;
}) {
  return (
    <div className="rounded-xl border border-chicago-mist bg-white px-3 py-2 shadow-soft">
      <div className="flex items-center justify-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-chicago-stone">
        {Icon && <Icon className="h-3 w-3" />} {label}
      </div>
      <div className={`font-display text-xl font-bold ${accent}`}>{value}</div>
    </div>
  );
}

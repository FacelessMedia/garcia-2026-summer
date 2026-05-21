"use client";

import { useEffect, useState } from "react";
import { Bot, RefreshCw, Sparkles, User } from "lucide-react";
import { Confetti } from "@/components/games/Confetti";

type Cell = "X" | "O" | null;
type Board = Cell[];
type Difficulty = "easy" | "medium" | "hard";

const LINES: [number, number, number][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],            // diagonals
];

function checkWinner(b: Board): { winner: Cell; line: [number, number, number] | null } {
  for (const line of LINES) {
    const [a, b1, c] = line;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return { winner: b[a], line };
    }
  }
  return { winner: null, line: null };
}

function isFull(b: Board) {
  return b.every((c) => c !== null);
}

/** Minimax with alpha-beta. Player X is 'human', O is 'ai'. */
function minimax(b: Board, ai: "X" | "O", isAi: boolean): { score: number; move: number } {
  const { winner } = checkWinner(b);
  if (winner === ai) return { score: 1, move: -1 };
  if (winner && winner !== ai) return { score: -1, move: -1 };
  if (isFull(b)) return { score: 0, move: -1 };

  const turn: "X" | "O" = isAi ? ai : ai === "X" ? "O" : "X";
  let best = { score: isAi ? -Infinity : Infinity, move: -1 };

  for (let i = 0; i < 9; i++) {
    if (b[i] !== null) continue;
    b[i] = turn;
    const { score } = minimax(b, ai, !isAi);
    b[i] = null;
    if (isAi ? score > best.score : score < best.score) {
      best = { score, move: i };
    }
  }
  return best;
}

function pickEasy(b: Board): number {
  const empty = b.map((c, i) => (c === null ? i : -1)).filter((i) => i >= 0);
  return empty[Math.floor(Math.random() * empty.length)];
}

/** Medium: take a winning move or block one; otherwise random. */
function pickMedium(b: Board, ai: "X" | "O"): number {
  const opp: "X" | "O" = ai === "X" ? "O" : "X";
  // win
  for (let i = 0; i < 9; i++) {
    if (b[i] === null) {
      const t = b.slice();
      t[i] = ai;
      if (checkWinner(t).winner === ai) return i;
    }
  }
  // block
  for (let i = 0; i < 9; i++) {
    if (b[i] === null) {
      const t = b.slice();
      t[i] = opp;
      if (checkWinner(t).winner === opp) return i;
    }
  }
  // center, then corners, then random
  if (b[4] === null) return 4;
  const corners = [0, 2, 6, 8].filter((i) => b[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  return pickEasy(b);
}

function aiMove(b: Board, difficulty: Difficulty): number {
  if (difficulty === "easy") return pickEasy(b);
  if (difficulty === "medium") return pickMedium(b, "O");
  // Hard: minimax. Slightly randomize the very first move so it's not always the same.
  if (b.every((c) => c === null)) {
    const opens = [0, 2, 4, 6, 8];
    return opens[Math.floor(Math.random() * opens.length)];
  }
  return minimax(b.slice(), "O", true).move;
}

export function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 });
  const [confettiBurst, setConfettiBurst] = useState(0);
  const [poppedCells, setPoppedCells] = useState<Set<number>>(new Set());

  const { winner, line } = checkWinner(board);
  const finished = winner !== null || isFull(board);

  // AI turn
  useEffect(() => {
    if (turn !== "O" || finished) return;
    const t = setTimeout(() => {
      const move = aiMove(board, difficulty);
      if (move < 0) return;
      const b = board.slice();
      b[move] = "O";
      setBoard(b);
      setPoppedCells((p) => new Set(p).add(move));
      setTurn("X");
    }, 380);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, finished]);

  // End-of-game scoring
  useEffect(() => {
    if (!finished) return;
    if (winner === "X") {
      setScore((s) => ({ ...s, player: s.player + 1 }));
      setConfettiBurst((b) => b + 1);
    } else if (winner === "O") {
      setScore((s) => ({ ...s, ai: s.ai + 1 }));
    } else {
      setScore((s) => ({ ...s, draws: s.draws + 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  function play(i: number) {
    if (board[i] !== null || finished || turn !== "X") return;
    const b = board.slice();
    b[i] = "X";
    setBoard(b);
    setPoppedCells((p) => new Set(p).add(i));
    setTurn("O");
  }

  function newGame() {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setPoppedCells(new Set());
  }

  function fullReset() {
    newGame();
    setScore({ player: 0, ai: 0, draws: 0 });
  }

  return (
    <>
      <Confetti trigger={confettiBurst} count={70} />
      <div className="space-y-6">
        {/* Difficulty + score */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-chicago-blue">
              Difficulty
            </p>
            <div className="mt-2 inline-flex rounded-full border border-chicago-mist bg-white p-1">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => {
                const active = d === difficulty;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      setDifficulty(d);
                      newGame();
                    }}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition ${
                      active
                        ? "bg-chicago-navy text-white"
                        : "text-chicago-stone hover:text-chicago-deep"
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <ScorePill label="You" value={score.player} accent="text-chicago-red" Icon={User} />
            <ScorePill label="Draws" value={score.draws} accent="text-chicago-blue" Icon={Sparkles} />
            <ScorePill label="Bot" value={score.ai} accent="text-chicago-stone" Icon={Bot} />
          </div>
        </div>

        {/* Status */}
        <div
          className={`rounded-xl border p-3 text-sm font-semibold ${
            !finished
              ? turn === "X"
                ? "border-chicago-red/30 bg-chicago-red/5 text-chicago-red pulse-red"
                : "border-chicago-blue/30 bg-chicago-blue/5 text-chicago-blue"
              : winner === "X"
                ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                : winner === "O"
                  ? "border-red-300 bg-red-50 text-red-800"
                  : "border-chicago-mist bg-chicago-mist/40 text-chicago-deep"
          }`}
        >
          {!finished
            ? turn === "X"
              ? "Your turn — click a square"
              : "Bot is thinking…"
            : winner === "X"
              ? "🎉 You win!"
              : winner === "O"
                ? "Bot wins this round — try again!"
                : "It's a draw."}
        </div>

        {/* Board */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="grid h-full grid-cols-3 gap-2">
            {board.map((cell, i) => {
              const popped = poppedCells.has(i);
              const isWinning = line?.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => play(i)}
                  disabled={cell !== null || finished || turn !== "X"}
                  className={`relative aspect-square overflow-hidden rounded-2xl border-2 text-5xl font-bold transition md:text-6xl ${
                    isWinning
                      ? "border-chicago-red bg-chicago-red/10"
                      : "border-chicago-mist bg-white hover:border-chicago-blue/50"
                  } ${cell === null && !finished && turn === "X" ? "cursor-pointer" : "cursor-default"}`}
                  aria-label={`Square ${i + 1}, ${cell ? `played ${cell}` : "empty"}`}
                >
                  {cell && (
                    <span
                      className={`block ${popped ? "tt-pop" : ""} ${
                        cell === "X" ? "text-chicago-red" : "text-chicago-navy"
                      }`}
                    >
                      {cell}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Winning line overlay */}
          {line && <WinLine line={line} />}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={newGame}
            className="inline-flex items-center gap-2 rounded-full bg-chicago-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-deep"
          >
            <RefreshCw className="h-4 w-4" /> New round
          </button>
          <button
            type="button"
            onClick={fullReset}
            className="text-xs font-medium text-chicago-blue underline-offset-4 hover:underline"
          >
            Reset score
          </button>
        </div>
      </div>
    </>
  );
}

function ScorePill({
  label,
  value,
  accent,
  Icon,
}: {
  label: string;
  value: number;
  accent: string;
  Icon: typeof User;
}) {
  return (
    <div className="rounded-xl border border-chicago-mist bg-white px-3 py-2 shadow-soft">
      <div className="flex items-center justify-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-chicago-stone">
        <Icon className={`h-3 w-3 ${accent}`} /> {label}
      </div>
      <div className={`font-display text-2xl font-bold ${accent}`}>{value}</div>
    </div>
  );
}

/** Draws an animated red line across the winning trio. */
function WinLine({ line }: { line: [number, number, number] }) {
  // Each cell sits in a 3x3 grid. We map an index 0..8 to its center
  // expressed as percentages.
  const center = (i: number) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    // gap-2 is 8px ≈ 2.5% of a 320–400px board. We use % so it scales.
    return { x: col * 33.333 + 16.666, y: row * 33.333 + 16.666 };
  };
  const start = center(line[0]);
  const end = center(line[2]);

  return (
    <svg
      className="pointer-events-none absolute inset-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="#D8232A"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="win-line"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

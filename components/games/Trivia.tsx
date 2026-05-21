"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import {
  categories,
  drawQuestions,
  type CategoryKey,
  type DrawnQuestion,
} from "@/lib/quiz";
import { Confetti } from "@/components/games/Confetti";

type Phase = "setup" | "playing" | "done";

const ROUND_LENGTHS = [10, 20, 50] as const;
type RoundLength = (typeof ROUND_LENGTHS)[number];

export function Trivia() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [category, setCategory] = useState<CategoryKey>("animals");
  const [length, setLength] = useState<RoundLength>(10);
  const [questions, setQuestions] = useState<DrawnQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [confettiBurst, setConfettiBurst] = useState(0);

  const activeCategory = useMemo(
    () => categories.find((c) => c.key === category)!,
    [category],
  );

  function start() {
    const drawn = drawQuestions(category, length);
    setQuestions(drawn);
    setCurrent(0);
    setPicked(null);
    setScore(0);
    setPhase("playing");
  }

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === questions[current].correctIndex) {
      setScore((s) => s + 1);
      setConfettiBurst((b) => b + 1);
    }
  }

  function next() {
    if (current + 1 >= questions.length) {
      setPhase("done");
      // Celebrate at the end if you got 70%+
      if (score / questions.length >= 0.7) {
        setConfettiBurst((b) => b + 1);
      }
      return;
    }
    setCurrent((c) => c + 1);
    setPicked(null);
  }

  function reset() {
    setPhase("setup");
    setQuestions([]);
    setCurrent(0);
    setPicked(null);
    setScore(0);
  }

  // ── SETUP ─────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-chicago-navy">
            Pick a category
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {categories.map((c) => {
              const active = c.key === category;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  className={`group rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-chicago-red bg-chicago-red/5 shadow-soft"
                      : "border-chicago-mist bg-white hover:border-chicago-blue/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl">{c.emoji}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-chicago-blue">
                      {c.questions.length} Q&apos;s
                    </span>
                  </div>
                  <h4
                    className={`mt-3 font-display text-lg font-semibold ${
                      active ? "text-chicago-red" : "text-chicago-navy"
                    }`}
                  >
                    {c.label}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-chicago-stone">
                    {c.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-chicago-navy">
            How many questions?
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {ROUND_LENGTHS.map((n) => {
              const active = n === length;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setLength(n)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-chicago-navy text-white shadow-soft"
                      : "border border-chicago-mist bg-white text-chicago-stone hover:border-chicago-blue"
                  }`}
                >
                  {n} questions
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={start}
          className="group inline-flex items-center gap-2 rounded-full bg-chicago-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson"
        >
          Start the quiz
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    );
  }

  // ── DONE ──────────────────────────────────────────────────────
  if (phase === "done") {
    const pct = Math.round((score / questions.length) * 100);
    const message =
      pct >= 90
        ? "Wow! You're a Chicago expert."
        : pct >= 70
          ? "Great work — almost there!"
          : pct >= 50
            ? "Solid try — you'll crush the next round."
            : "Every question is a fact you'll remember next time.";

    return (
      <>
        <Confetti trigger={confettiBurst} count={pct >= 70 ? 90 : 0} />
        <div className="rounded-3xl border border-chicago-mist bg-gradient-to-br from-chicago-cream to-white p-8 text-center shadow-lift">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-chicago-red/10 text-chicago-red">
            <Trophy className="h-9 w-9" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-chicago-navy">
            {score} / {questions.length}
          </h3>
          <p className="mt-1 text-lg text-chicago-stone">{pct}% correct</p>
          <p className="mt-4 text-base text-chicago-deep">{message}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={start}
              className="inline-flex items-center gap-2 rounded-full bg-chicago-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-deep"
            >
              <RotateCcw className="h-4 w-4" /> Play again — same category
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-chicago-mist bg-white px-5 py-2.5 text-sm font-semibold text-chicago-stone transition hover:border-chicago-blue"
            >
              Pick a new category
            </button>
          </div>
        </div>
      </>
    );
  }

  // ── PLAYING ───────────────────────────────────────────────────
  const q = questions[current];
  const correct = picked !== null && picked === q.correctIndex;

  return (
    <>
      <Confetti trigger={confettiBurst} count={28} />
      <div className="space-y-5">
        {/* Progress bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-blue">
            <span className="text-base" aria-hidden="true">
              {activeCategory.emoji}
            </span>
            {activeCategory.label} · Question {current + 1} of {questions.length}
          </div>
          <div className="text-sm font-semibold text-chicago-navy">
            Score: <span className="text-chicago-red">{score}</span>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-chicago-mist">
          <div
            className="h-full bg-chicago-red transition-all duration-300"
            style={{ width: `${((current + (picked !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>

        <div key={current} className="trivia-enter rounded-2xl border border-chicago-mist bg-white p-6 shadow-soft">
          <h3 className="font-display text-xl font-semibold leading-snug text-chicago-navy md:text-2xl">
            {q.q}
          </h3>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {q.o.map((text, i) => {
              const isPicked = picked === i;
              const isCorrect = picked !== null && i === q.correctIndex;
              const isWrongPick = picked !== null && isPicked && !isCorrect;

              const base =
                "group flex items-start gap-3 rounded-xl border p-4 text-left transition";
              const stateClasses =
                picked === null
                  ? "border-chicago-mist bg-chicago-paper hover:-translate-y-0.5 hover:border-chicago-blue/50 hover:shadow-soft"
                  : isCorrect
                    ? "border-emerald-400 bg-emerald-50"
                    : isWrongPick
                      ? "border-red-400 bg-red-50"
                      : "border-chicago-mist bg-white opacity-70";

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  className={`${base} ${stateClasses}`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      isCorrect
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isWrongPick
                          ? "border-red-500 bg-red-500 text-white"
                          : "border-chicago-blue/30 bg-white text-chicago-blue"
                    }`}
                  >
                    {isCorrect ? "✓" : isWrongPick ? "✕" : String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-sm font-medium leading-relaxed text-chicago-deep">
                    {text}
                  </span>
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div
              className={`mt-5 flex flex-wrap items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed ${
                correct
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-900"
              }`}
            >
              {correct ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              ) : (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              )}
              <div className="flex-1">
                <p className="font-semibold">
                  {correct ? "Nice!" : `The answer was: ${q.o[q.correctIndex]}`}
                </p>
                {q.f && <p className="mt-1 text-[13px] opacity-90">{q.f}</p>}
              </div>
            </div>
          )}

          {picked !== null && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={next}
                className="group inline-flex items-center gap-2 rounded-full bg-chicago-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-deep"
              >
                {current + 1 >= questions.length ? "See score" : "Next question"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          )}

        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-chicago-blue underline-offset-4 hover:underline"
          >
            Quit and pick a new category
          </button>
        </div>
      </div>
    </>
  );
}

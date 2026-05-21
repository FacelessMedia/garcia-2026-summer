"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Eye,
  Lightbulb,
  RefreshCw,
  Shuffle,
  SkipForward,
  Trophy,
} from "lucide-react";
import { Confetti } from "@/components/games/Confetti";

interface ScrambleWord {
  word: string;
  hint: string;
}

interface ScrambleCategory {
  key: string;
  label: string;
  emoji: string;
  description: string;
  words: ScrambleWord[];
}

const CATEGORIES: ScrambleCategory[] = [
  {
    key: "places",
    label: "Chicago Places",
    emoji: "🌆",
    description: "Famous Chicago landmarks, parks, and neighborhoods.",
    words: [
      { word: "WRIGLEY", hint: "Historic ballpark on the North Side." },
      { word: "MILLENNIUM", hint: "Park downtown with The Bean sculpture." },
      { word: "LINCOLN", hint: "Park (and zoo) named after a U.S. president." },
      { word: "SHEDD", hint: "World-famous aquarium on Museum Campus." },
      { word: "ADLER", hint: "Planetarium on the lakefront." },
      { word: "FIELD", hint: "Museum where Sue the T. rex lives." },
      { word: "NAVY", hint: "Pier with a Ferris wheel and fireworks." },
      { word: "SOLDIER", hint: "Field where the Bears play football." },
      { word: "RIVERWALK", hint: "Pedestrian path along the dyed-green river." },
      { word: "WILLIS", hint: "Tower with the glass-floor Ledge." },
      { word: "PULLMAN", hint: "National park with a planned company town." },
      { word: "DUNES", hint: "Indiana national park with sandy hills." },
      { word: "BROOKFIELD", hint: "Big regional zoo west of the city." },
      { word: "MORTON", hint: "Arboretum — a giant tree museum." },
      { word: "GARFIELD", hint: "Park with a famous indoor conservatory." },
      { word: "MONTROSE", hint: "Bird sanctuary with the 'Magic Hedge.'" },
      { word: "CANTIGNY", hint: "Park with gardens and a tank museum." },
      { word: "BUCKINGHAM", hint: "Famous Grant Park fountain." },
      { word: "MICHIGAN", hint: "The Great Lake on Chicago's east side." },
      { word: "PILSEN", hint: "Neighborhood famous for Mexican-American art." },
    ],
  },
  {
    key: "animals",
    label: "Animals",
    emoji: "🦒",
    description: "Critters at the zoos, aquariums, and Chicago parks.",
    words: [
      { word: "PENGUIN", hint: "Tuxedo bird at Shedd's Polar Play Zone." },
      { word: "DOLPHIN", hint: "Smart marine mammal in Brookfield's Seven Seas." },
      { word: "GIRAFFE", hint: "Tallest land animal — long neck, spotted." },
      { word: "BELUGA", hint: "White whale that 'sings' at Shedd." },
      { word: "FLAMINGO", hint: "Pink wading bird that stands on one leg." },
      { word: "GORILLA", hint: "Largest of the great apes." },
      { word: "BUTTERFLY", hint: "Insect that flies in Notebaert's Haven." },
      { word: "ELEPHANT", hint: "Largest land mammal — has a long trunk." },
      { word: "TURTLE", hint: "Reptile with a hard shell, found in ponds." },
      { word: "OCTOPUS", hint: "Sea creature with eight arms and three hearts." },
      { word: "ZEBRA", hint: "Black-and-white striped African animal." },
      { word: "TIGER", hint: "Largest big cat, with orange fur and stripes." },
      { word: "PANDA", hint: "Black-and-white bear that loves bamboo." },
      { word: "EAGLE", hint: "U.S. national bird with a white head." },
      { word: "DRAGONFLY", hint: "Insect that hovers around the Lily Pool." },
      { word: "SQUIRREL", hint: "Bushy-tailed park climber." },
      { word: "RACCOON", hint: "Masked-face critter that loves trash cans." },
      { word: "OSTRICH", hint: "Largest, fastest bird — but it cannot fly." },
      { word: "STINGRAY", hint: "Flat ocean fish you can pet at Shedd." },
      { word: "CATERPILLAR", hint: "What a butterfly was before it had wings." },
    ],
  },
  {
    key: "food",
    label: "Chicago Eats",
    emoji: "🍕",
    description: "Famous Chicago foods and snacks.",
    words: [
      { word: "PIZZA", hint: "Deep-dish was invented here in 1943." },
      { word: "HOTDOG", hint: "Chicago-style version never has ketchup." },
      { word: "POPCORN", hint: "Garrett's caramel-and-cheese mix made it famous." },
      { word: "PRETZEL", hint: "Twisted, salty, baked snack." },
      { word: "TAMALE", hint: "Cornmeal-wrapped Mexican classic." },
      { word: "GIARDINIERA", hint: "Spicy pickled-veggie topping on Italian beef." },
      { word: "SUNDAE", hint: "Ice-cream dessert with sauce on top." },
      { word: "BAGEL", hint: "Round bread with a hole, often with cream cheese." },
      { word: "CHEESECAKE", hint: "Dessert from Eli's, made famous by Chicago." },
      { word: "DOUGHNUT", hint: "Sweet ring with a hole — sometimes glazed." },
      { word: "PANCAKE", hint: "Breakfast flapjack stack with syrup." },
      { word: "CRACKERJACK", hint: "Caramel popcorn snack with a 'prize inside.'" },
      { word: "TWINKIE", hint: "Yellow snack cake invented near Chicago." },
      { word: "PUPPYCHOW", hint: "Sweet treat made of cereal, peanut butter, and sugar." },
      { word: "SANDWICH", hint: "Two slices of bread with stuff in the middle." },
      { word: "SMOOTHIE", hint: "Blended fruit drink — a summer favorite." },
    ],
  },
];

/** Fisher–Yates shuffle for letters or words. */
function shuffleArr<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Scramble a word so it doesn't equal the original (when possible). */
function scramble(word: string): string {
  if (word.length < 2) return word;
  let scrambled = word;
  let safety = 0;
  while (scrambled === word && safety < 20) {
    scrambled = shuffleArr(word.split("")).join("");
    safety++;
  }
  return scrambled;
}

const ROUND_LENGTH = 10;

export function WordScramble() {
  const [categoryKey, setCategoryKey] = useState<string>(CATEGORIES[0].key);
  const [phase, setPhase] = useState<"setup" | "playing" | "done">("setup");
  const [round, setRound] = useState<{ word: ScrambleWord; scrambled: string }[]>([]);
  const [current, setCurrent] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState<"none" | "correct" | "wrong">("none");
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [usedHint, setUsedHint] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const category = useMemo(
    () => CATEGORIES.find((c) => c.key === categoryKey)!,
    [categoryKey],
  );

  function start() {
    const drawn = shuffleArr(category.words)
      .slice(0, Math.min(ROUND_LENGTH, category.words.length))
      .map((w) => ({ word: w, scrambled: scramble(w.word) }));
    setRound(drawn);
    setCurrent(0);
    setGuess("");
    setFeedback("none");
    setRevealed(false);
    setUsedHint(false);
    setScore(0);
    setPhase("playing");
  }

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (revealed) return;
    const target = round[current].word.word;
    if (guess.trim().toUpperCase() === target) {
      setFeedback("correct");
      setRevealed(true);
      setScore((s) => s + (usedHint ? 1 : 2));
      setConfettiBurst((b) => b + 1);
    } else {
      setFeedback("wrong");
    }
  }

  function next() {
    if (current + 1 >= round.length) {
      setPhase("done");
      if (score >= round.length) {
        setConfettiBurst((b) => b + 5);
      }
      return;
    }
    setCurrent((c) => c + 1);
    setGuess("");
    setFeedback("none");
    setRevealed(false);
    setUsedHint(false);
    inputRef.current?.focus();
  }

  function reveal() {
    setRevealed(true);
    setFeedback("wrong");
    setGuess(round[current].word.word);
  }

  function reshuffle() {
    setRound((r) =>
      r.map((entry, i) =>
        i === current ? { ...entry, scrambled: scramble(entry.word.word) } : entry,
      ),
    );
  }

  function reset() {
    setPhase("setup");
    setRound([]);
    setCurrent(0);
    setGuess("");
    setFeedback("none");
    setRevealed(false);
    setUsedHint(false);
    setScore(0);
  }

  useEffect(() => {
    if (phase === "playing" && !revealed) {
      inputRef.current?.focus();
    }
  }, [phase, current, revealed]);

  // ── SETUP ─────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-chicago-navy">
            Pick a word category
          </h3>
          <p className="mt-1 text-sm text-chicago-stone">
            10 words per round. Solve without a hint to earn 2 points; with a hint, 1
            point.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {CATEGORIES.map((c) => {
              const active = c.key === categoryKey;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategoryKey(c.key)}
                  className={`group rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-chicago-red bg-chicago-red/5 shadow-soft"
                      : "border-chicago-mist bg-white hover:border-chicago-blue/40"
                  }`}
                >
                  <span className="text-3xl">{c.emoji}</span>
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

        <button
          type="button"
          onClick={start}
          className="group inline-flex items-center gap-2 rounded-full bg-chicago-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson"
        >
          Start scrambling
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    );
  }

  // ── DONE ──────────────────────────────────────────────────────
  if (phase === "done") {
    const max = round.length * 2;
    const pct = Math.round((score / max) * 100);
    return (
      <>
        <Confetti trigger={confettiBurst} count={pct >= 70 ? 100 : 0} />
        <div className="rounded-3xl border border-chicago-mist bg-gradient-to-br from-chicago-cream to-white p-8 text-center shadow-lift">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-chicago-red/10 text-chicago-red">
            <Trophy className="h-9 w-9" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-chicago-navy">
            {score} / {max} points
          </h3>
          <p className="mt-1 text-lg text-chicago-stone">{pct}%</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={start}
              className="inline-flex items-center gap-2 rounded-full bg-chicago-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-deep"
            >
              <RefreshCw className="h-4 w-4" /> New round — same category
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
  const entry = round[current];

  return (
    <>
      <Confetti trigger={confettiBurst} count={28} />
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-chicago-blue">
            <span className="text-base">{category.emoji}</span>
            {category.label} · Word {current + 1} of {round.length}
          </div>
          <div className="text-sm font-semibold text-chicago-navy">
            Score: <span className="text-chicago-red">{score}</span>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-chicago-mist">
          <div
            className="h-full bg-chicago-red transition-all duration-300"
            style={{ width: `${((current + (revealed ? 1 : 0)) / round.length) * 100}%` }}
          />
        </div>

        <div key={current} className="trivia-enter rounded-2xl border border-chicago-mist bg-white p-6 shadow-soft">
          {/* Scrambled letter tiles */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {entry.scrambled.split("").map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className={`flex h-12 w-10 items-center justify-center rounded-lg border-2 font-display text-2xl font-bold uppercase shadow-soft transition sm:h-14 sm:w-12 ${
                  revealed
                    ? feedback === "correct"
                      ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                      : "border-red-300 bg-red-50 text-red-700"
                    : "border-chicago-blue/30 bg-chicago-paper text-chicago-navy"
                }`}
              >
                {ch}
              </span>
            ))}
          </div>

          {/* Hint */}
          {(usedHint || revealed) && (
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-chicago-mist bg-chicago-mist/40 p-3 text-sm text-chicago-stone">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-chicago-gold" />
              <span>
                <strong className="text-chicago-deep">Hint:</strong> {entry.word.hint}
              </span>
            </p>
          )}

          {/* Input */}
          <form onSubmit={submit} className="mt-5 flex flex-wrap gap-2">
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(e) => {
                setGuess(e.target.value);
                if (feedback === "wrong") setFeedback("none");
              }}
              disabled={revealed}
              maxLength={entry.word.word.length + 4}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              className={`flex-1 rounded-xl border-2 bg-white px-4 py-3 font-display text-xl font-semibold uppercase tracking-wider text-chicago-navy outline-none transition ${
                feedback === "wrong"
                  ? "border-red-400"
                  : feedback === "correct"
                    ? "border-emerald-400"
                    : "border-chicago-mist focus:border-chicago-red"
              }`}
              placeholder="Type the word…"
              aria-label="Your guess"
            />
            <button
              type="submit"
              disabled={revealed || !guess.trim()}
              className="rounded-xl bg-chicago-red px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-crimson disabled:opacity-40"
            >
              Guess
            </button>
          </form>

          {/* Action row */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={reshuffle}
              disabled={revealed}
              className="inline-flex items-center gap-1.5 rounded-full border border-chicago-mist bg-white px-3 py-1.5 font-semibold text-chicago-stone transition hover:border-chicago-blue disabled:opacity-40"
            >
              <Shuffle className="h-3 w-3" /> Re-scramble
            </button>
            <button
              type="button"
              onClick={() => setUsedHint(true)}
              disabled={revealed || usedHint}
              className="inline-flex items-center gap-1.5 rounded-full border border-chicago-mist bg-white px-3 py-1.5 font-semibold text-chicago-blue transition hover:border-chicago-blue disabled:opacity-40"
            >
              <Lightbulb className="h-3 w-3" /> {usedHint ? "Hint used" : "Show hint (−1 pt)"}
            </button>
            <button
              type="button"
              onClick={reveal}
              disabled={revealed}
              className="inline-flex items-center gap-1.5 rounded-full border border-chicago-mist bg-white px-3 py-1.5 font-semibold text-chicago-stone transition hover:border-chicago-red hover:text-chicago-red disabled:opacity-40"
            >
              <Eye className="h-3 w-3" /> Show answer
            </button>
          </div>

          {/* Feedback */}
          {revealed && (
            <div
              className={`mt-5 rounded-xl border p-4 text-sm leading-relaxed ${
                feedback === "correct"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-900"
              }`}
            >
              <p className="font-semibold">
                {feedback === "correct" ? "Got it!" : `The word was: ${entry.word.word}`}
              </p>
              <p className="mt-1 text-[13px] opacity-90">{entry.word.hint}</p>
            </div>
          )}

          {revealed && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={next}
                className="group inline-flex items-center gap-2 rounded-full bg-chicago-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-chicago-deep"
              >
                {current + 1 >= round.length ? "See score" : "Next word"}
                {current + 1 < round.length ? (
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                ) : (
                  <SkipForward className="h-4 w-4" />
                )}
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

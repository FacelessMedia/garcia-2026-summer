import type { Category, CategoryKey, Question } from "./types";
import { animalQuestions } from "./animals";
import { historyQuestions } from "./history";
import { natureQuestions } from "./nature";

export type { Question, CategoryKey, Category };

export const categories: Category[] = [
  {
    key: "animals",
    label: "Animals",
    emoji: "🦁",
    description:
      "From Lincoln Park lions to Shedd belugas — what lives in our zoos, aquariums, and wild Chicago.",
    questions: animalQuestions,
  },
  {
    key: "history",
    label: "Chicago History",
    emoji: "🏛️",
    description:
      "The flag, the fire, the World's Fair, deep dish, and the Land of Lincoln.",
    questions: historyQuestions,
  },
  {
    key: "nature",
    label: "Nature & Science",
    emoji: "🌿",
    description:
      "Plants, weather, the body, and the night sky — the science kids will see this summer.",
    questions: natureQuestions,
  },
];

export function getCategory(key: CategoryKey): Category {
  const found = categories.find((c) => c.key === key);
  if (!found) throw new Error(`Unknown category: ${key}`);
  return found;
}

/**
 * Fisher–Yates in-place shuffle.
 */
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pick `n` random questions from a category and shuffle each question's
 * answer order so the correct answer isn't always at the same index.
 * Returns BOTH the shuffled question list and a parallel array recording
 * the new index of the correct answer per question.
 */
export interface DrawnQuestion extends Question {
  /** New index of the correct answer after option shuffle. */
  correctIndex: number;
}

export function drawQuestions(key: CategoryKey, n: number): DrawnQuestion[] {
  const cat = getCategory(key);
  const picked = shuffle(cat.questions).slice(0, Math.min(n, cat.questions.length));

  return picked.map((q) => {
    const indexed = q.o.map((text, i) => ({ text, originalIndex: i }));
    const shuffled = shuffle(indexed);
    return {
      ...q,
      o: shuffled.map((s) => s.text) as [string, string, string, string],
      correctIndex: shuffled.findIndex((s) => s.originalIndex === q.a),
    };
  });
}

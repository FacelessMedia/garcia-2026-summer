/** A single trivia question. */
export interface Question {
  /** The question text. */
  q: string;
  /** 4 multiple-choice options. */
  o: [string, string, string, string];
  /** Index of the correct answer (0-3). */
  a: 0 | 1 | 2 | 3;
  /** Optional fun-fact shown after the answer. */
  f?: string;
}

export type CategoryKey = "animals" | "history" | "nature";

export interface Category {
  key: CategoryKey;
  label: string;
  emoji: string;
  description: string;
  questions: Question[];
}

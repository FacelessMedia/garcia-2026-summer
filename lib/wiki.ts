export interface WikiImage {
  thumbnail?: string;
  original?: string;
  extract?: string;
  pageUrl?: string;
}

// Wikipedia asks API consumers to identify themselves.
// See https://meta.wikimedia.org/wiki/User-Agent_policy
const USER_AGENT =
  "garcia-2026-summer/1.0 (https://garcia-2026-summer.vercel.app; sample babysitting agenda) Next.js/14";

/**
 * Fetches a Wikipedia article summary at build time.
 * Returns the canonical thumbnail URL, a clean extract, and the article URL.
 * Cached for 24 hours on Vercel.
 */
export async function getWikiSummary(slug: string): Promise<WikiImage | null> {
  if (!slug) return null;
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 60 * 60 * 24 },
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "application/json",
          "Api-User-Agent": USER_AGENT,
        },
      },
    );
    if (!res.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[wiki] ${slug} → ${res.status} ${res.statusText}`);
      }
      return null;
    }
    const data = await res.json();
    return {
      thumbnail: data.thumbnail?.source,
      original: data.originalimage?.source,
      extract: data.extract,
      pageUrl: data.content_urls?.desktop?.page,
    };
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[wiki] ${slug} → fetch error`, err);
    }
    return null;
  }
}

/**
 * Fetch many summaries in parallel. Failures resolve to null entries.
 */
export async function getWikiSummaries(slugs: string[]): Promise<Record<string, WikiImage | null>> {
  const entries = await Promise.all(
    slugs.map(async (s) => [s, await getWikiSummary(s)] as const),
  );
  return Object.fromEntries(entries);
}

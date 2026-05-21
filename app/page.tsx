import { About } from "@/components/About";
import { Agenda } from "@/components/Agenda";
import { Customize } from "@/components/Customize";
import { DailyRhythm } from "@/components/DailyRhythm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import {
  destinations,
  type EnrichedDestination,
} from "@/lib/data";
import { getWikiSummaries } from "@/lib/wiki";

// Re-fetch Wikipedia data once a day on Vercel
export const revalidate = 60 * 60 * 24;

async function getEnrichedDestinations(): Promise<EnrichedDestination[]> {
  const slugs = destinations
    .map((d) => d.wikiSlug)
    .filter((s): s is string => !!s);
  const summaries = await getWikiSummaries(slugs);

  return destinations.map((d) => {
    const summary = d.wikiSlug ? summaries[d.wikiSlug] : null;
    return {
      ...d,
      image: summary?.thumbnail ?? null,
      imageOriginal: summary?.original ?? null,
      wikiExtract: summary?.extract ?? null,
      wikiPageUrl: summary?.pageUrl ?? null,
    };
  });
}

export default async function HomePage() {
  const enrichedDestinations = await getEnrichedDestinations();
  const destinationsBySlug: Record<string, EnrichedDestination> = Object.fromEntries(
    enrichedDestinations.map((d) => [d.slug, d]),
  );

  return (
    <>
      <a id="top" />
      <Nav />
      <main>
        <Hero />
        <RevealOnScroll>
          <DailyRhythm />
        </RevealOnScroll>
        <RevealOnScroll>
          <Agenda destinationsBySlug={destinationsBySlug} />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Customize />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}

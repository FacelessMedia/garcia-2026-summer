import { Agenda } from "@/components/Agenda";
import { Catalog } from "@/components/Catalog";
import { Customize } from "@/components/Customize";
import { DailyRhythm } from "@/components/DailyRhythm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pitch } from "@/components/Pitch";

export default function HomePage() {
  return (
    <>
      <a id="top" />
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <DailyRhythm />
        <Agenda />
        <Catalog />
        <Customize />
      </main>
      <Footer />
    </>
  );
}

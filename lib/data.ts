export type Theme = "animals" | "history" | "nature" | "mixed";
export type Travel = "walking" | "transit" | "short-drive" | "day-trip";

/* ────────────────────────────────────────────────────────────────────
   The family
   ──────────────────────────────────────────────────────────────────── */

export const family = {
  lastName: "Leahy",
  ageRange: "ages 4–8",
  kids: [
    {
      name: "Rory",
      note: "Reads independently — picks his own library books each week.",
    },
    {
      name: "Bellamy",
      note: "Read aloud to daily — co-pilots the second keyboard during piano.",
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────
   The shape of any given week
   ──────────────────────────────────────────────────────────────────── */

export type DayShape = "library" | "outing" | "recap" | "bake";

export const weekShape: Array<{
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  shape: DayShape;
  label: string;
  blurb: string;
}> = [
  {
    day: "Mon",
    shape: "library",
    label: "Library + loose start",
    blurb:
      "Walk to the Lincoln Park branch, pick books that match this week's theme, ease into the week.",
  },
  {
    day: "Tue",
    shape: "outing",
    label: "First outing",
    blurb: "Big trip — zoo, museum, or garden — built around the week's question.",
  },
  {
    day: "Wed",
    shape: "recap",
    label: "Recap + park",
    blurb:
      "Stay close. Talk through Tuesday, draw or build something we saw, end with park time.",
  },
  {
    day: "Thu",
    shape: "outing",
    label: "Second outing",
    blurb: "A different angle on the same theme — usually a contrasting place.",
  },
  {
    day: "Fri",
    shape: "bake",
    label: "Bake + wrap-up",
    blurb:
      "Fun-baking day. Each kid shares 'one thing I learned' over the snack we just made.",
  },
];

/** Things that happen every single day, regardless of the week's theme. */
export const dailyAnchors: Array<{ label: string; body: string }> = [
  {
    label: "Reading time",
    body: "Rory picks his own; Bellamy gets read to. Always.",
  },
  {
    label: "Piano practice",
    body:
      "Both kids play. I'm bringing a second keyboard so Bellamy can play along — plus tiny music-theory bits.",
  },
  {
    label: "Outside time",
    body: "Courtyard, park, or a Lincoln Park trail. Even on home days.",
  },
  {
    label: "One game at home",
    body: "Memory match, scramble, trivia, or board games. Light and kid-led.",
  },
];

/* ────────────────────────────────────────────────────────────────────
   The four themed weeks
   ──────────────────────────────────────────────────────────────────── */

export interface DayGoal {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  shape: DayShape;
  goal: string;
}

export interface Outing {
  day: "Tue" | "Thu";
  destSlug: string;
}

export interface WeekPlan {
  number: number;
  theme: string;
  themeKey: Theme;
  question: string;
  pitch: string;
  outings: Outing[];
  daily: DayGoal[];
  libraryTheme: string;
  concepts: string[];
  bakeIdea: string;
}

export const weeks: WeekPlan[] = [
  {
    number: 1,
    theme: "Zoology",
    themeKey: "animals",
    question: "How do animals live where they live?",
    pitch:
      "We anchor the week with a real zoo and a city nature museum. By Friday the kids can name the difference between a habitat and an ecosystem.",
    outings: [
      { day: "Tue", destSlug: "lincoln-park-zoo" },
      { day: "Thu", destSlug: "peggy-notebaert" },
    ],
    daily: [
      {
        day: "Mon",
        shape: "library",
        goal: "Library trip — pick three animal books each. Decorate summer journals.",
      },
      {
        day: "Tue",
        shape: "outing",
        goal: "Lincoln Park Zoo. Each kid picks a 'mascot animal' for the week.",
      },
      {
        day: "Wed",
        shape: "recap",
        goal: "Animal-tracks craft, read the new library books, walk to North Pond.",
      },
      {
        day: "Thu",
        shape: "outing",
        goal: "Peggy Notebaert Nature Museum — Butterfly Haven + sketch in the journal.",
      },
      {
        day: "Fri",
        shape: "bake",
        goal: "Animal-shaped cookies + each kid teaches one fact about their mascot.",
      },
    ],
    libraryTheme: "Animal habitats and how zoologists study them.",
    concepts: [
      "Habitat vs. ecosystem",
      "Mammals, birds, reptiles, amphibians",
      "What a zoologist actually does",
    ],
    bakeIdea: "Animal-shaped sugar cookies (mascot edition).",
  },
  {
    number: 2,
    theme: "Planets & Stars",
    themeKey: "nature",
    question: "What's out there beyond Earth?",
    pitch:
      "A sky-themed week. We do a planetarium show, then walk through the Field Museum's space and earth galleries to compare what's underfoot to what's overhead.",
    outings: [
      { day: "Tue", destSlug: "adler-planetarium" },
      { day: "Thu", destSlug: "field-museum" },
    ],
    daily: [
      {
        day: "Mon",
        shape: "library",
        goal: "Library trip — solar-system picture books. Make a paper-plate planet model.",
      },
      {
        day: "Tue",
        shape: "outing",
        goal: "Adler Planetarium — pick one show, then sky-deck for the skyline.",
      },
      {
        day: "Wed",
        shape: "recap",
        goal: "Constellation cards + glow-stars craft. Talk about day vs. night.",
      },
      {
        day: "Thu",
        shape: "outing",
        goal: "Field Museum — Earth & Space + Evolving Planet for the dinosaurs.",
      },
      {
        day: "Fri",
        shape: "bake",
        goal: "'Galaxy' frosted cupcakes. Mini-presentation: name three planets.",
      },
    ],
    libraryTheme: "Solar system, astronauts, and the night sky.",
    concepts: [
      "The eight planets — and why we name them in order",
      "Day vs. night (Earth's spin)",
      "Constellations you can find with the naked eye",
    ],
    bakeIdea: "'Galaxy' frosted cupcakes.",
  },
  {
    number: 3,
    theme: "Nature & Gardens",
    themeKey: "nature",
    question: "How do plants do what they do?",
    pitch:
      "Two big garden trips. The kids compare a formal botanic garden to a 1,700-acre arboretum, and end the week able to identify three plants on sight.",
    outings: [
      { day: "Tue", destSlug: "chicago-botanic-garden" },
      { day: "Thu", destSlug: "morton-arboretum" },
    ],
    daily: [
      {
        day: "Mon",
        shape: "library",
        goal: "Library trip — books on trees, seeds, and pollinators.",
      },
      {
        day: "Tue",
        shape: "outing",
        goal: "Chicago Botanic Garden — kids' garden, then the rose and Japanese gardens.",
      },
      {
        day: "Wed",
        shape: "recap",
        goal: "Pressed-leaf bookmarks. Walk the South Pond Nature Boardwalk.",
      },
      {
        day: "Thu",
        shape: "outing",
        goal: "Morton Arboretum — Children's Garden + a short woodland trail.",
      },
      {
        day: "Fri",
        shape: "bake",
        goal: "Leaf-shaped sugar cookies. Each kid names one plant they learned.",
      },
    ],
    libraryTheme: "Trees, seeds, pollinators, and what plants need.",
    concepts: [
      "Photosynthesis (kid-level)",
      "Seed → seedling → tree",
      "Pollinators and why bees matter",
    ],
    bakeIdea: "Leaf-shaped sugar cookies.",
  },
  {
    number: 4,
    theme: "Marine Biology",
    themeKey: "animals",
    question: "What lives under water — fresh or salt?",
    pitch:
      "An indoor anchor at Shedd, then a real Lake Michigan day to compare what we read about with what we can see from the shore.",
    outings: [
      { day: "Tue", destSlug: "shedd-aquarium" },
      { day: "Thu", destSlug: "montrose-point" },
    ],
    daily: [
      {
        day: "Mon",
        shape: "library",
        goal: "Library trip — ocean and Great-Lakes books. Build a paper jellyfish.",
      },
      {
        day: "Tue",
        shape: "outing",
        goal: "Shedd Aquarium — Caribbean Reef + Oceanarium for the belugas.",
      },
      {
        day: "Wed",
        shape: "recap",
        goal: "Saltwater vs. freshwater experiment at home. Read the new books.",
      },
      {
        day: "Thu",
        shape: "outing",
        goal: "Montrose Point + beach — birds, gulls, lake critters, water play.",
      },
      {
        day: "Fri",
        shape: "bake",
        goal: "Goldfish-cracker snack mix. Sort 'salt' vs. 'fresh' creatures.",
      },
    ],
    libraryTheme: "Oceans, the Great Lakes, and life under the surface.",
    concepts: [
      "Salt water vs. fresh water (and where Lake Michigan fits in)",
      "Fish anatomy",
      "Why we don't have ocean animals here",
    ],
    bakeIdea: "Goldfish-cracker snack mix (kid-led).",
  },
];

/* ────────────────────────────────────────────────────────────────────
   Destinations (only the ones used by the four weeks are rendered;
   the rest are kept here for /games references and easy future swaps).
   ──────────────────────────────────────────────────────────────────── */

export interface Destination {
  slug: string;
  name: string;
  area: string;
  themes: Theme[];
  travel: Travel;
  cost: "free" | "low" | "medium" | "ticketed";
  why: string;
  /** Wikipedia article slug used to fetch a thumbnail + extract at build time. */
  wikiSlug: string | null;
  /** Official website. */
  url: string;
  /** Two- or three-sentence pitch shown in hover previews. */
  longDescription: string;
}

export interface EnrichedDestination extends Destination {
  image: string | null;
  imageOriginal: string | null;
  wikiExtract: string | null;
  wikiPageUrl: string | null;
}

export const destinations: Destination[] = [
  {
    slug: "lincoln-park-zoo",
    name: "Lincoln Park Zoo",
    area: "Lincoln Park",
    themes: ["animals"],
    travel: "walking",
    cost: "free",
    why: "Free, walkable, world-class. The anchor of the zoology week.",
    wikiSlug: "Lincoln_Park_Zoo",
    url: "https://www.lpzoo.org/",
    longDescription:
      "Founded in 1868, Lincoln Park Zoo is one of the oldest zoos in North America and the rare big-city zoo that's still free. 35 acres of animals, the Pepper Family Wildlife Center for lions, and the Pritzker Family Children's Zoo make it the easy anchor of the zoology week.",
  },
  {
    slug: "peggy-notebaert",
    name: "Peggy Notebaert Nature Museum",
    area: "Lincoln Park",
    themes: ["animals", "nature"],
    travel: "walking",
    cost: "ticketed",
    why: "Butterfly Haven + nature exhibits, perfect for both kids' ages.",
    wikiSlug: "Peggy_Notebaert_Nature_Museum",
    url: "https://naturemuseum.org/",
    longDescription:
      "The Chicago Academy of Sciences' nature museum on the south end of Lincoln Park. Highlight: the Judy Istock Butterfly Haven — a 2,700-sq-ft greenhouse where 1,000+ butterflies fly free. Strong Midwest-ecology exhibits and great hands-on touch tables for kids 4–10.",
  },
  {
    slug: "adler-planetarium",
    name: "Adler Planetarium",
    area: "Museum Campus",
    themes: ["nature"],
    travel: "transit",
    cost: "ticketed",
    why: "America's first planetarium, on the lakefront.",
    wikiSlug: "Adler_Planetarium",
    url: "https://www.adlerplanetarium.org/",
    longDescription:
      "America's first planetarium, opened in 1930 on a peninsula jutting into Lake Michigan. Two domed theaters with daily shows, a strong space-exploration gallery (real Gemini capsule), and the best skyline view in Chicago from the front lawn.",
  },
  {
    slug: "field-museum",
    name: "Field Museum",
    area: "Museum Campus",
    themes: ["history", "nature"],
    travel: "transit",
    cost: "ticketed",
    why: "Sue the T. rex + the space and earth galleries.",
    wikiSlug: "Field_Museum_of_Natural_History",
    url: "https://www.fieldmuseum.org/",
    longDescription:
      "Founded after the 1893 World's Fair, the Field is one of the great natural-history museums on the planet. Sue the T. rex anchors the Evolving Planet exhibit; the Earth & Space gallery and meteorite hall pair perfectly with a planetarium week.",
  },
  {
    slug: "chicago-botanic-garden",
    name: "Chicago Botanic Garden",
    area: "Glencoe",
    themes: ["nature"],
    travel: "day-trip",
    cost: "low",
    why: "385 acres of gardens, a kid-friendly Children's Growing Garden, and a model railroad garden.",
    wikiSlug: "Chicago_Botanic_Garden",
    url: "https://www.chicagobotanic.org/",
    longDescription:
      "385 acres on nine islands and lakeshore, run by the Chicago Horticultural Society. Highlights for kids: the Regenstein Learning Campus, the Grunsfeld Children's Growing Garden, the Model Railroad Garden, and the Japanese, English-walled, and rose gardens. About 30 minutes north of Lincoln Park.",
  },
  {
    slug: "morton-arboretum",
    name: "Morton Arboretum",
    area: "Lisle",
    themes: ["nature"],
    travel: "day-trip",
    cost: "ticketed",
    why: "1,700 acres of trees + the Children's Garden. Worth the drive.",
    wikiSlug: "Morton_Arboretum",
    url: "https://mortonarb.org/",
    longDescription:
      "1,700 acres of trees and gardens in Lisle, founded by Joy Morton (of Morton Salt) in 1922. The 4-acre Children's Garden has tree-house climbers, a maze, and a stream to wade. Add the woodland Maze Garden trail for a real walk.",
  },
  {
    slug: "shedd-aquarium",
    name: "Shedd Aquarium",
    area: "Museum Campus",
    themes: ["animals"],
    travel: "transit",
    cost: "ticketed",
    why: "Bucket-list animal day. Indoor — perfect for any weather.",
    wikiSlug: "Shedd_Aquarium",
    url: "https://www.sheddaquarium.org/",
    longDescription:
      "Opened in 1930 on Museum Campus, Shedd holds 32,000 animals across the Caribbean Reef, Amazon Rising, Wild Reef, and the Abbott Oceanarium for belugas and dolphins. Plan a 3- to 4-hour visit, save the Oceanarium for last, and book the timed-entry tickets a week ahead.",
  },
  {
    slug: "montrose-point",
    name: "Montrose Point + Beach",
    area: "North Side",
    themes: ["animals", "nature"],
    travel: "short-drive",
    cost: "free",
    why: "Great lakeshore birding spot + sandy swimming beach right next door.",
    wikiSlug: "Montrose_Point_Bird_Sanctuary",
    url: "https://www.chicagoparkdistrict.com/parks-facilities/lincoln-park-magic-hedge",
    longDescription:
      "A 15-acre fenced sanctuary at the tip of Montrose Point — the famous 'Magic Hedge' is one of the top migration stopovers in the Midwest. Bring binoculars and Merlin Bird ID on the phone. Pairs perfectly with a Montrose Beach picnic and water-play afternoon.",
  },
  /* Kept for /games references and easy week swaps if you'd rather: */
  {
    slug: "lincoln-park-conservatory",
    name: "Lincoln Park Conservatory",
    area: "Lincoln Park",
    themes: ["nature"],
    travel: "walking",
    cost: "free",
    why: "Free indoor jungle — best rainy-day backup in the neighborhood.",
    wikiSlug: "Lincoln_Park_Conservatory",
    url: "https://www.chicagoparkdistrict.com/parks-facilities/lincoln-park-conservatory",
    longDescription:
      "A free Victorian glasshouse built in the 1890s, tucked between the zoo and the Lily Pool. Four show houses (Palm, Fern, Orchid, Show) you can walk through in 30 minutes — perfect for a quick reset on a hot or rainy day.",
  },
  {
    slug: "alfred-caldwell-lily-pool",
    name: "Alfred Caldwell Lily Pool",
    area: "Lincoln Park",
    themes: ["nature", "animals"],
    travel: "walking",
    cost: "free",
    why: "Quiet hidden gem next to the zoo — koi, turtles, dragonflies.",
    wikiSlug: "Alfred_Caldwell_Lily_Pool",
    url: "https://www.chicagoparkdistrict.com/parks-facilities/lily-pool-alfred-caldwell",
    longDescription:
      "A National Historic Landmark designed in the Prairie School style, tucked just north of the zoo. Hidden behind a stone wall, the pool's koi, turtles, and dragonflies feel like a secret garden. Free and never crowded.",
  },
  {
    slug: "chicago-history-museum",
    name: "Chicago History Museum",
    area: "Lincoln Park",
    themes: ["history"],
    travel: "walking",
    cost: "ticketed",
    why: "Sensing Chicago is hands-on; the Great Chicago Fire is unforgettable.",
    wikiSlug: "Chicago_History_Museum",
    url: "https://www.chicagohistory.org/",
    longDescription:
      "Founded in 1856, CHM is the city's oldest cultural institution. The hands-on 'Sensing Chicago' gallery is the kids' favorite. A natural swap-in if you'd rather a Chicago-history week than the marine-biology week.",
  },
];

/** Lookup map: slug → destination. Used to wire week outings to destination cards. */
export const destinationBySlug: Record<string, Destination> = Object.fromEntries(
  destinations.map((d) => [d.slug, d]),
);

/** All Wikipedia slugs used across destinations, for build-time prefetch. */
export const allWikiSlugs: string[] = Array.from(
  new Set(
    destinations
      .map((d) => d.wikiSlug)
      .filter((s): s is string => !!s),
  ),
);

export type Theme = "animals" | "history" | "nature" | "mixed";

export interface Day {
  day: string;
  date: string;
  title: string;
  location: string;
  summary: string;
  travel?: "walking" | "transit" | "short-drive" | "day-trip";
  rainPlan?: string;
}

export interface Week {
  number: number;
  range: string;
  theme: string;
  themeKey: Theme;
  pitch: string;
  days: Day[];
}

export interface Destination {
  name: string;
  area: string;
  themes: Theme[];
  travel: "walking" | "transit" | "short-drive" | "day-trip";
  cost: "free" | "low" | "medium" | "ticketed";
  why: string;
}

export const dailyRhythm = [
  { time: "8:30 AM", label: "Arrival & briefing", note: "Quick parent handoff, review the day's plan with the kids." },
  { time: "9:00 AM", label: "Morning adventure", note: "The big activity — outdoor or museum, when energy is highest." },
  { time: "12:00 PM", label: "Lunch", note: "Packed picnic on outings, healthy at-home options on home days." },
  { time: "1:00 PM", label: "Quiet hour", note: "Reading, journaling, or audio story. A real reset, not a screen break." },
  { time: "2:00 PM", label: "Afternoon activity", note: "Hands-on craft, themed game, or short walk tied to the week's topic." },
  { time: "4:00 PM", label: "Reflect & log", note: "Each kid adds a sentence and a sketch to their summer journal." },
  { time: "4:45 PM", label: "Tidy & wind down", note: "Put the day to bed: clean up, calm activity, ready for parent return." },
  { time: "5:00 PM", label: "Parent recap", note: "60-second handoff with photos, highs/lows, and tomorrow's plan." },
];

export const weeks: Week[] = [
  {
    number: 1,
    range: "June 1 – June 5",
    theme: "Welcome Week",
    themeKey: "mixed",
    pitch:
      "Easy, neighborhood-only week to build trust, learn each kid's pace, and set the rhythm for the summer.",
    days: [
      {
        day: "Mon",
        date: "Jun 1",
        title: "Home base & kid interview",
        location: "Home",
        summary:
          "Tour the house, agree on house rules, and run a fun 'kid interview' to map favorite animals, dream day trips, and snack must-haves.",
        travel: "walking",
        rainPlan: "Indoor — works as planned.",
      },
      {
        day: "Tue",
        date: "Jun 2",
        title: "Lincoln Park on foot",
        location: "Lincoln Park neighborhood",
        summary:
          "Walking tour of their own block — name three trees, find two historical plaques, and pick the kids' favorite ice cream stop.",
        travel: "walking",
        rainPlan: "Indoor scavenger hunt at home + library trip.",
      },
      {
        day: "Wed",
        date: "Jun 3",
        title: "Lincoln Park Zoo (free)",
        location: "Lincoln Park Zoo",
        summary:
          "Easy first visit. Each kid picks one animal to 'adopt' as their summer mascot and journals a fact each week.",
        travel: "walking",
        rainPlan: "Switch to indoor Regenstein habitats only.",
      },
      {
        day: "Thu",
        date: "Jun 4",
        title: "Library day & journal kickoff",
        location: "CPL — Lincoln Park Branch",
        summary:
          "Pick three books each (one animal, one history, one nature). Decorate summer journals. Borrow audiobooks for car days.",
        travel: "walking",
        rainPlan: "Indoor — works as planned.",
      },
      {
        day: "Fri",
        date: "Jun 5",
        title: "North Pond picnic",
        location: "North Pond, Lincoln Park",
        summary:
          "Picnic lunch by the pond, frog and turtle spotting, first nature-journal sketches. Parents invited to join after work if they'd like.",
        travel: "walking",
        rainPlan: "Indoor picnic + nature documentary screening.",
      },
    ],
  },
  {
    number: 2,
    range: "June 8 – June 12",
    theme: "Animals & Their Worlds",
    themeKey: "animals",
    pitch:
      "A full week of animals — from local pond critters to ocean depths — with hands-on observation activities each afternoon.",
    days: [
      {
        day: "Mon",
        date: "Jun 8",
        title: "Lincoln Park Zoo — deep dive",
        location: "Lincoln Park Zoo",
        summary:
          "Focused visit on the Regenstein African Journey + Pritzker Family Children's Zoo. Animal-fact bingo card for each kid.",
        travel: "walking",
      },
      {
        day: "Tue",
        date: "Jun 9",
        title: "Butterflies & nature museum",
        location: "Peggy Notebaert Nature Museum",
        summary:
          "Judy Istock Butterfly Haven, then the Mysteries of the Marsh exhibit. Pair with sketching butterflies in the journal.",
        travel: "walking",
      },
      {
        day: "Wed",
        date: "Jun 10",
        title: "Shedd Aquarium",
        location: "Shedd Aquarium, Museum Campus",
        summary:
          "Full-day trip via #151 bus. Aquatic Show + Amazon Rising. Goal: each kid can name three animals from a different ocean.",
        travel: "transit",
        rainPlan: "Already indoor — perfect rainy-day plan.",
      },
      {
        day: "Thu",
        date: "Jun 11",
        title: "Pond dipping at the Lily Pool",
        location: "Alfred Caldwell Lily Pool",
        summary:
          "Tucked-away gem next to the zoo. Pond dipping (with permitted gear), bug ID, and sketching the dragonflies.",
        travel: "walking",
      },
      {
        day: "Fri",
        date: "Jun 12",
        title: "Pet store visit + animal art",
        location: "Local pet store + Home",
        summary:
          "Visit a small local shop to meet reptiles and small mammals. Afternoon animal-portrait painting using zoo photos.",
        travel: "walking",
        rainPlan: "Skip pet store and run a home 'create an animal' workshop.",
      },
    ],
  },
  {
    number: 3,
    range: "June 15 – June 19",
    theme: "Stories of Chicago",
    themeKey: "history",
    pitch:
      "A week of local-first history. The kids will end Friday able to give a 5-minute walking tour of their own neighborhood.",
    days: [
      {
        day: "Mon",
        date: "Jun 15",
        title: "Chicago History Museum",
        location: "Chicago History Museum",
        summary:
          "Hands-on Sensing Chicago exhibit + Great Chicago Fire timeline. Each kid picks one artifact to research that week.",
        travel: "walking",
      },
      {
        day: "Tue",
        date: "Jun 16",
        title: "Lincoln Park history walk",
        location: "Lincoln Park",
        summary:
          "Find the Couch Mausoleum, hear the 'park used to be a cemetery' story, visit the Standing Lincoln statue and read a kid-friendly Lincoln biography clip aloud.",
        travel: "walking",
      },
      {
        day: "Wed",
        date: "Jun 17",
        title: "Riverwalk + architecture story-walk",
        location: "Chicago Riverwalk",
        summary:
          "Self-guided architecture spotting, with a printed kid-friendly handout. Pause for the bridge-lift schedule if timing works.",
        travel: "transit",
      },
      {
        day: "Thu",
        date: "Jun 18",
        title: "Old Town houses sketch day",
        location: "Old Town / east Lincoln Park",
        summary:
          "Walking tour of historic homes. Each kid sketches their favorite and we research who lived there.",
        travel: "walking",
      },
      {
        day: "Fri",
        date: "Jun 19",
        title: "Pullman National Historical Park",
        location: "Pullman, south side",
        summary:
          "Day trip via car — planned company town, ranger-led kid programs when available. Big and unique, worth the drive.",
        travel: "day-trip",
        rainPlan: "Swap for DuSable Museum + lunch on south side.",
      },
    ],
  },
  {
    number: 4,
    range: "June 22 – June 26",
    theme: "Nature Explorers",
    themeKey: "nature",
    pitch:
      "Outside as much as possible. Two conservatories, two parks, and the arboretum — every day the kids identify a new plant.",
    days: [
      {
        day: "Mon",
        date: "Jun 22",
        title: "Lincoln Park Conservatory",
        location: "Lincoln Park Conservatory",
        summary:
          "Free indoor jungle. Find the orchid room, sketch a fern, and talk about what plants need to thrive.",
        travel: "walking",
      },
      {
        day: "Tue",
        date: "Jun 23",
        title: "Garfield Park Conservatory",
        location: "Garfield Park",
        summary:
          "Day trip via Green Line. Children's Garden + Desert House. Perfect rainy-day backup too.",
        travel: "transit",
      },
      {
        day: "Wed",
        date: "Jun 24",
        title: "South Pond Nature Boardwalk",
        location: "Lincoln Park",
        summary:
          "Bird and turtle counting on the boardwalk. Bring binoculars. Afternoon: pressed-leaf bookmarks at home.",
        travel: "walking",
      },
      {
        day: "Thu",
        date: "Jun 25",
        title: "Morton Arboretum",
        location: "Lisle, IL",
        summary:
          "Full-day trip. The Children's Garden + a short woodland trail. A ~35-min drive that feels like real adventure.",
        travel: "day-trip",
        rainPlan: "Swap to Notebaert Nature Museum full-day.",
      },
      {
        day: "Fri",
        date: "Jun 26",
        title: "Lakefront stewardship",
        location: "North Avenue Beach",
        summary:
          "Beach cleanup with gloves and bags, then free play and a journal entry on what we found.",
        travel: "walking",
      },
    ],
  },
  {
    number: 5,
    range: "June 29 – July 3",
    theme: "American Time Travelers",
    themeKey: "history",
    pitch:
      "Short July-4 week. We use it to zoom out from Chicago to American history with hands-on living-history visits.",
    days: [
      {
        day: "Mon",
        date: "Jun 29",
        title: "CHM — Lincoln & Civil War galleries",
        location: "Chicago History Museum",
        summary:
          "Focused return visit on the Lincoln galleries. Each kid picks a primary source to teach back.",
        travel: "walking",
      },
      {
        day: "Tue",
        date: "Jun 30",
        title: "DuSable Black History Museum",
        location: "Washington Park",
        summary:
          "Trip to the oldest Black history museum in the country. Pair with a kid-level read-aloud about Jean Baptiste Point DuSable.",
        travel: "short-drive",
      },
      {
        day: "Wed",
        date: "Jul 1",
        title: "Naper Settlement",
        location: "Naperville, IL",
        summary:
          "Living-history museum. Costumed interpreters, blacksmith shop, 1830s schoolhouse. Real highlight of the week.",
        travel: "day-trip",
      },
      {
        day: "Thu",
        date: "Jul 2",
        title: "Independence prep day",
        location: "Home + Lincoln Park",
        summary:
          "Flag-history craft, Revolutionary War kid-bio readings, and outdoor games from the 1700s (graces, hoop & stick).",
        travel: "walking",
      },
      {
        day: "Fri",
        date: "Jul 3",
        title: "Half day — pre-July 4",
        location: "Home + Lincoln Park",
        summary:
          "Short day. Bake a flag cake, pack a picnic for the family, hand off early so parents can travel for the holiday.",
        travel: "walking",
      },
    ],
  },
  {
    number: 6,
    range: "July 6 – July 10",
    theme: "Wild Wonders",
    themeKey: "animals",
    pitch:
      "Animals beyond the city zoo — small farm zoo, big regional zoo, birds, and the lakefront — to compare habitats and care.",
    days: [
      {
        day: "Mon",
        date: "Jul 6",
        title: "Cosley Zoo",
        location: "Wheaton, IL",
        summary:
          "Compact farm-style zoo. Perfect for a 'small zoo vs. big zoo' compare-and-contrast journal entry.",
        travel: "day-trip",
      },
      {
        day: "Tue",
        date: "Jul 7",
        title: "Brookfield Zoo",
        location: "Brookfield, IL",
        summary:
          "Full-day big-zoo trip. Pre-pick three exhibits so the day stays focused.",
        travel: "day-trip",
        rainPlan: "Many exhibits are indoor; light rain is fine. Heavy rain → swap to Field Museum.",
      },
      {
        day: "Wed",
        date: "Jul 8",
        title: "Animal-tracks workshop",
        location: "Notebaert Nature Museum + home",
        summary:
          "Morning at Notebaert focused on animal-track casts. Afternoon plaster tracks at home from clay molds.",
        travel: "walking",
      },
      {
        day: "Thu",
        date: "Jul 9",
        title: "Birding at Montrose Point",
        location: "Montrose Point Bird Sanctuary",
        summary:
          "The 'Magic Hedge' is one of the best birding spots in the Midwest. Bring binoculars and a field guide.",
        travel: "short-drive",
      },
      {
        day: "Fri",
        date: "Jul 10",
        title: "Animals of Lake Michigan",
        location: "North Avenue Beach",
        summary:
          "Beach day with an angle: identify gulls, fish, and bugs we find. Water play after the work is done.",
        travel: "walking",
      },
    ],
  },
  {
    number: 7,
    range: "July 13 – July 17",
    theme: "Big Adventure Week",
    themeKey: "mixed",
    pitch:
      "Built around two longer trips, with active-recovery days in between so we don't burn the kids out.",
    days: [
      {
        day: "Mon",
        date: "Jul 13",
        title: "Indiana Dunes National Park",
        location: "Indiana Dunes, IN",
        summary:
          "Full-day trip — about 70 minutes by car. Beach + a kid-friendly trail (Dune Succession) + ranger-led junior ranger program.",
        travel: "day-trip",
        rainPlan: "Swap to Field Museum full-day.",
      },
      {
        day: "Tue",
        date: "Jul 14",
        title: "Backyard camp recovery day",
        location: "Home",
        summary:
          "Tent in the backyard, summer reading, animal-doc movie hour, and a slow afternoon. Recovery is part of a good plan.",
        travel: "walking",
      },
      {
        day: "Wed",
        date: "Jul 15",
        title: "Field Museum",
        location: "Museum Campus",
        summary:
          "Sue the T. rex, Inside Ancient Egypt, and Native Truths. A 'pick your dinosaur' game closes out the visit.",
        travel: "transit",
      },
      {
        day: "Thu",
        date: "Jul 16",
        title: "Adler Planetarium half day",
        location: "Museum Campus",
        summary:
          "Half day at the planetarium + lakefront picnic + bike-path walk back. Calmer pace after the museum days.",
        travel: "transit",
      },
      {
        day: "Fri",
        date: "Jul 17",
        title: "Pool & rest day",
        location: "Local pool",
        summary:
          "A genuine rest day. Free swim, books, and a kid-led cooking project for snack.",
        travel: "walking",
      },
    ],
  },
  {
    number: 8,
    range: "July 20 – July 24",
    theme: "Maker & Discovery",
    themeKey: "mixed",
    pitch:
      "From museum exhibits to building things at home — a hands-on week that ties animals, history, and nature into projects.",
    days: [
      {
        day: "Mon",
        date: "Jul 20",
        title: "Museum of Science & Industry",
        location: "Hyde Park",
        summary:
          "Full day. The Coal Mine + U-505 submarine + Idea Factory for the 6-year-old. Each kid leaves with one experiment to repeat at home.",
        travel: "short-drive",
      },
      {
        day: "Tue",
        date: "Jul 21",
        title: "Build day at home",
        location: "Home",
        summary:
          "Bird-feeder build (animals), small herb garden plant (nature), and a cardboard 'museum' (history). Three projects, one day.",
        travel: "walking",
      },
      {
        day: "Wed",
        date: "Jul 22",
        title: "Cantigny Park",
        location: "Wheaton, IL",
        summary:
          "Gardens + First Division tank museum. Hits nature and history in one trip — and the grounds are gorgeous.",
        travel: "day-trip",
      },
      {
        day: "Thu",
        date: "Jul 23",
        title: "Kid-led cooking class",
        location: "Home",
        summary:
          "Each kid plans and leads one course of lunch. Grocery list, prep, plating, cleanup — life skills in a fun wrapper.",
        travel: "walking",
      },
      {
        day: "Fri",
        date: "Jul 24",
        title: "Photography around the park",
        location: "Lincoln Park",
        summary:
          "Disposable cameras or phones on a kid-safe mode. Print favorite shots in the afternoon for the showcase next week.",
        travel: "walking",
      },
    ],
  },
  {
    number: 9,
    range: "July 27 – July 31",
    theme: "Greatest Hits & Showcase",
    themeKey: "mixed",
    pitch:
      "Kid-driven last week. They choose two re-visits, build a final showcase for parents, and close the summer on a high.",
    days: [
      {
        day: "Mon",
        date: "Jul 27",
        title: "Kid's choice #1",
        location: "TBD by kids",
        summary:
          "Each kid gets to revisit one favorite spot. They co-plan the day with Christian — a real planning lesson.",
        travel: "walking",
      },
      {
        day: "Tue",
        date: "Jul 28",
        title: "Kid's choice #2",
        location: "TBD by kids",
        summary:
          "Same idea, second pick. By now they have language for what they liked and why.",
        travel: "walking",
      },
      {
        day: "Wed",
        date: "Jul 29",
        title: "Lincoln Park scavenger hunt",
        location: "Lincoln Park",
        summary:
          "Final scavenger hunt across favorite local spots — animals, history plaques, and plants from the summer.",
        travel: "walking",
      },
      {
        day: "Thu",
        date: "Jul 30",
        title: "Showcase prep day",
        location: "Home",
        summary:
          "Each kid builds a 5-minute presentation of their summer: best photo, best fact, favorite day. Memory book is bound.",
        travel: "walking",
      },
      {
        day: "Fri",
        date: "Jul 31",
        title: "Family showcase + send-off",
        location: "Home",
        summary:
          "Parents invited home early. Kids present their summer. Memory book and journal handed off. Group photo.",
        travel: "walking",
      },
    ],
  },
];

export const destinations: Destination[] = [
  {
    name: "Lincoln Park Zoo",
    area: "Lincoln Park",
    themes: ["animals"],
    travel: "walking",
    cost: "free",
    why: "Free, walkable, world-class. The anchor of the whole summer.",
  },
  {
    name: "Peggy Notebaert Nature Museum",
    area: "Lincoln Park",
    themes: ["animals", "nature"],
    travel: "walking",
    cost: "ticketed",
    why: "Butterfly Haven + nature exhibits, perfect for both kids' age range.",
  },
  {
    name: "Chicago History Museum",
    area: "Lincoln Park",
    themes: ["history"],
    travel: "walking",
    cost: "ticketed",
    why: "Sensing Chicago is hands-on; Great Chicago Fire is unforgettable.",
  },
  {
    name: "Lincoln Park Conservatory",
    area: "Lincoln Park",
    themes: ["nature"],
    travel: "walking",
    cost: "free",
    why: "Free indoor jungle — best rainy-day backup in the neighborhood.",
  },
  {
    name: "Alfred Caldwell Lily Pool",
    area: "Lincoln Park",
    themes: ["nature", "animals"],
    travel: "walking",
    cost: "free",
    why: "Quiet hidden gem. Great for pond critters and a slow afternoon.",
  },
  {
    name: "South Pond Nature Boardwalk",
    area: "Lincoln Park",
    themes: ["nature"],
    travel: "walking",
    cost: "free",
    why: "Birds, turtles, and a real boardwalk to explore on foot.",
  },
  {
    name: "Shedd Aquarium",
    area: "Museum Campus",
    themes: ["animals"],
    travel: "transit",
    cost: "ticketed",
    why: "Bucket-list animal day. Fully indoor, perfect for any weather.",
  },
  {
    name: "Field Museum",
    area: "Museum Campus",
    themes: ["history", "nature"],
    travel: "transit",
    cost: "ticketed",
    why: "Sue the T. rex + Ancient Egypt covers history and natural history.",
  },
  {
    name: "Adler Planetarium",
    area: "Museum Campus",
    themes: ["nature"],
    travel: "transit",
    cost: "ticketed",
    why: "Half-day add-on with great lakefront walk.",
  },
  {
    name: "Museum of Science & Industry",
    area: "Hyde Park",
    themes: ["history", "nature"],
    travel: "short-drive",
    cost: "ticketed",
    why: "Coal mine + sub + Idea Factory. The 9-year-old will love it.",
  },
  {
    name: "Garfield Park Conservatory",
    area: "Garfield Park",
    themes: ["nature"],
    travel: "transit",
    cost: "free",
    why: "Free, world-class, great Children's Garden. Easy weather backup.",
  },
  {
    name: "Chicago Riverwalk",
    area: "Loop",
    themes: ["history"],
    travel: "transit",
    cost: "free",
    why: "Architecture stories, bridge lifts, and gelato.",
  },
  {
    name: "Pullman National Historical Park",
    area: "South Side",
    themes: ["history"],
    travel: "day-trip",
    cost: "free",
    why: "A complete planned company town — like a living history book.",
  },
  {
    name: "DuSable Black History Museum",
    area: "Washington Park",
    themes: ["history"],
    travel: "short-drive",
    cost: "ticketed",
    why: "Essential Chicago history. Built into Week 5.",
  },
  {
    name: "Naper Settlement",
    area: "Naperville",
    themes: ["history"],
    travel: "day-trip",
    cost: "ticketed",
    why: "Living-history village with costumed interpreters. A true highlight.",
  },
  {
    name: "Morton Arboretum",
    area: "Lisle",
    themes: ["nature"],
    travel: "day-trip",
    cost: "ticketed",
    why: "1,700 acres of trees + the Children's Garden. Worth the drive.",
  },
  {
    name: "Cantigny Park",
    area: "Wheaton",
    themes: ["history", "nature"],
    travel: "day-trip",
    cost: "low",
    why: "Tank museum + formal gardens — animals, history, nature in one stop.",
  },
  {
    name: "Cosley Zoo",
    area: "Wheaton",
    themes: ["animals"],
    travel: "day-trip",
    cost: "low",
    why: "Small farm zoo — perfect counterpoint to Lincoln Park Zoo.",
  },
  {
    name: "Brookfield Zoo",
    area: "Brookfield",
    themes: ["animals"],
    travel: "day-trip",
    cost: "ticketed",
    why: "Big-zoo experience with strong indoor habitats.",
  },
  {
    name: "Indiana Dunes National Park",
    area: "Indiana",
    themes: ["nature"],
    travel: "day-trip",
    cost: "low",
    why: "Beach + dunes + ranger programs. ~70 minutes — the longest trip we'd take.",
  },
  {
    name: "Montrose Point Bird Sanctuary",
    area: "North Side",
    themes: ["animals", "nature"],
    travel: "short-drive",
    cost: "free",
    why: "The 'Magic Hedge' — a top Midwest birding spot.",
  },
];

export const credentials = [
  {
    title: "Plans every week",
    body:
      "Each week has a theme, a written daily plan, a packing list, and a rain-day backup. No improv, no wasted days.",
  },
  {
    title: "Knows the neighborhood",
    body:
      "Lincoln Park local. Walks first, drives second. Knows the museum-free days, the quiet picnic spots, and the safest routes.",
  },
  {
    title: "Educational without being a lecture",
    body:
      "Every outing has one tiny learning goal — a fact, a sketch, a journal entry — that the kids barely notice they're doing.",
  },
  {
    title: "Communicates daily",
    body:
      "60-second written recap to parents at handoff: highlights, lows, and tomorrow's plan. Photos in a shared album.",
  },
  {
    title: "Safety-first by default",
    body:
      "CPR/First Aid certified (refresh planned May 2026). Allergy-aware. Always carries a small first-aid kit and emergency contacts.",
  },
  {
    title: "Flexible by design",
    body:
      "This whole agenda is a starting point. Weeks can be reordered, days swapped, and the kids' interests drive the final two weeks.",
  },
];

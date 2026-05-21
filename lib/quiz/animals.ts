import type { Question } from "./types";

/**
 * 100 animal trivia questions — leans on what kids will actually see this summer
 * (Lincoln Park Zoo, Shedd Aquarium, Field Museum, Brookfield), plus a layer of
 * general zoology / habitat / classification facts.
 */
export const animalQuestions: Question[] = [
  // ── Lincoln Park Zoo specifics (1–10)
  { q: "Lincoln Park Zoo opened in what year?", o: ["1868", "1901", "1925", "1950"], a: 0, f: "Lincoln Park Zoo opened in 1868 with two pairs of swans — a gift from New York's Central Park." },
  { q: "How much does it cost to visit Lincoln Park Zoo?", o: ["$25", "$10", "It's free", "$5 for kids"], a: 2, f: "It's one of only a handful of free zoos left in the United States." },
  { q: "Which big African cat lives in Lincoln Park Zoo's Pepper Family Wildlife Center?", o: ["Cheetah", "Lion", "Snow leopard", "Puma"], a: 1, f: "The Pepper Family Wildlife Center is home to a pride of African lions." },
  { q: "Which great ape is featured at Lincoln Park Zoo's Regenstein Center for African Apes?", o: ["Orangutans", "Gibbons", "Western lowland gorillas", "Bonobos"], a: 2, f: "The center is home to both gorillas and chimpanzees." },
  { q: "What body of water sits right next to Lincoln Park Zoo?", o: ["Chicago River", "Lake Michigan", "Des Plaines River", "Lake Calumet"], a: 1, f: "The zoo sits between Lake Michigan and Lincoln Park's lagoons." },
  { q: "Which bird has its own walk-through exhibit at Lincoln Park Zoo?", o: ["Penguin", "Flamingo", "Swan", "Eagle"], a: 1, f: "Chilean flamingos wade in the Regenstein Birds of Prey area's neighbors." },
  { q: "What kind of farm animals can kids meet at Lincoln Park Zoo's Farm-in-the-Zoo?", o: ["Only chickens", "Cows, pigs, goats and horses", "Sharks", "Snow leopards"], a: 1, f: "Farm-in-the-Zoo is a working barn-style exhibit on the south side of the zoo." },
  { q: "What does Lincoln Park Zoo's Regenstein African Journey recreate?", o: ["The Sahara desert", "African savanna and forest habitats", "An African city", "An ocean reef"], a: 1, f: "It moves you from sandy savanna to misty rain forest in one walk." },
  { q: "Which long-necked African animal lives at Lincoln Park Zoo?", o: ["Giraffe", "Camel", "Llama", "Ostrich"], a: 0, f: "Reticulated giraffes are part of the African Journey exhibit." },
  { q: "Which striped African animal can you see at Lincoln Park Zoo?", o: ["Tiger", "Skunk", "Zebra", "Badger"], a: 2, f: "Grant's zebras live in the African Journey habitat." },

  // ── Shedd Aquarium specifics (11–20)
  { q: "Shedd Aquarium opened in 1930 in which Chicago area?", o: ["Hyde Park", "Lincoln Park", "Museum Campus", "Wrigleyville"], a: 2, f: "The Shedd is one of three institutions on the lakefront Museum Campus." },
  { q: "Roughly how many animals does Shedd Aquarium care for?", o: ["About 3,000", "About 32,000", "About 320,000", "About 100"], a: 1, f: "Shedd is home to roughly 32,000 animals from around the world." },
  { q: "Which large white whale lives at the Shedd's Abbott Oceanarium?", o: ["Orca", "Sperm whale", "Beluga whale", "Humpback whale"], a: 2, f: "Beluga whales make up to 50 different sounds and are sometimes called 'sea canaries.'" },
  { q: "Which marine mammals do tricks in Shedd's Aquatic Show?", o: ["Sea turtles", "Dolphins", "Sharks", "Octopus"], a: 1, f: "Pacific white-sided dolphins are part of Shedd's animal-care team." },
  { q: "Which Shedd exhibit has tropical fish and a sea turtle in a giant 90,000-gallon tank?", o: ["Caribbean Reef", "Wild Reef", "Amazon Rising", "Polar Play Zone"], a: 0, f: "The Caribbean Reef is the round tank you see right when you walk in." },
  { q: "Which Shedd exhibit recreates a flooded rain forest?", o: ["Amazon Rising", "Wild Reef", "Caribbean Reef", "Stingray Touch"], a: 0, f: "Amazon Rising shows the river's wet and dry seasons." },
  { q: "Where can kids gently touch a stingray at Shedd?", o: ["Stingray Touch", "Penguin Encounter", "Caribbean Reef", "Polar Play Zone"], a: 0, f: "The stingrays' barbs are trimmed and they swim right up to small hands." },
  { q: "Which fish has more than 300 teeth and is found in Shedd's Wild Reef?", o: ["Goldfish", "Shark", "Clownfish", "Tuna"], a: 1, f: "Sharks lose and regrow teeth their whole lives — some up to 50,000 in a lifetime." },
  { q: "Which black-and-white birds live at Shedd's Polar Play Zone?", o: ["Pandas", "Penguins", "Skunks", "Puffins"], a: 1, f: "Rockhopper and Magellanic penguins live in Polar Play Zone." },
  { q: "What's the Shedd Aquarium's full name?", o: ["The Shedd Underwater Zoo", "John G. Shedd Aquarium", "Lake Michigan Aquarium", "The Great Shedd"], a: 1, f: "It was funded by businessman John G. Shedd, an early president of Marshall Field & Co." },

  // ── Field Museum (21–28)
  { q: "Sue, the Field Museum's most famous skeleton, is what kind of dinosaur?", o: ["Triceratops", "Stegosaurus", "Tyrannosaurus rex", "Velociraptor"], a: 2, f: "Sue is the most complete T. rex skeleton ever found — over 90% of its bones." },
  { q: "Which giant dinosaur greets you in the Field Museum's main hall?", o: ["Sue the T. rex", "Máximo the titanosaur", "Stan the velociraptor", "Rexy the raptor"], a: 1, f: "Máximo is a 122-foot-long titanosaur cast — the largest dinosaur ever found." },
  { q: "Roughly how old are the dinosaur fossils on display at the Field Museum?", o: ["About 100 years", "About 1,000 years", "About 100,000 years", "Tens of millions of years"], a: 3, f: "Sue lived about 67 million years ago." },
  { q: "Which Field Museum exhibit lets you walk through ancient Egypt?", o: ["Inside Ancient Egypt", "Evolving Planet", "Native Truths", "What is an Animal?"], a: 0, f: "It even has a real Egyptian tomb you walk inside." },
  { q: "How tall was Sue, the T. rex, in life?", o: ["6 feet at the hip", "13 feet at the hip", "30 feet at the hip", "60 feet at the hip"], a: 1, f: "Sue was about 13 feet at the hip and 40 feet long from head to tail." },
  { q: "What is a paleontologist?", o: ["A bug doctor", "A scientist who studies fossils", "A museum guard", "A mountain climber"], a: 1, f: "Paleontologists at the Field Museum study fossils to learn about ancient life." },
  { q: "Which Field Museum hall shows real meteorites and gemstones?", o: ["Grainger Hall of Gems", "Pawnee Earth Lodge", "Bird Hall", "Mammals of Asia"], a: 0, f: "It includes a piece of meteorite older than Earth itself." },
  { q: "Roughly how many specimens are stored at the Field Museum?", o: ["A few thousand", "Around 50,000", "About 40 million", "About 4 billion"], a: 2, f: "Around 40 million — most are kept off-display in research collections." },

  // ── Brookfield + smaller zoos (29–34)
  { q: "Brookfield Zoo is famous for which marine animals?", o: ["Whale sharks", "Dolphins", "Sea otters", "Killer whales"], a: 1, f: "Brookfield's Seven Seas habitat is home to bottlenose dolphins." },
  { q: "Which giant land animal lives at Brookfield Zoo's Habitat Africa!?", o: ["Kangaroo", "Polar bear", "African elephant", "Bison"], a: 2, f: "Brookfield's herd is part of a multi-zoo conservation program." },
  { q: "Which fluffy mountain animal lives at Brookfield's Great Bear Wilderness?", o: ["Polar bear", "Panda", "Sloth bear", "Spectacled bear"], a: 0, f: "The wilderness exhibit also has bald eagles, grizzlies and bison." },
  { q: "Which small town zoo near Wheaton, IL focuses on Illinois farm and forest animals?", o: ["Cosley Zoo", "Brookfield Zoo", "Lincoln Park Zoo", "San Diego Zoo"], a: 0, f: "Cosley Zoo specializes in animals native to Illinois, plus farm favorites." },
  { q: "Which zoo would you most likely see a bald eagle that's been rescued and rehabilitated?", o: ["Cosley Zoo", "A petting zoo", "An aquarium", "A petting farm"], a: 0, f: "Cosley Zoo cares for several rescued bald eagles." },
  { q: "Which big cat is the fastest land animal in the world?", o: ["Lion", "Tiger", "Cheetah", "Cougar"], a: 2, f: "Cheetahs can sprint up to 70 mph (110 km/h) — but only for short bursts." },

  // ── General mammals (35–48)
  { q: "How many hearts does an octopus have?", o: ["1", "2", "3", "4"], a: 2, f: "Three! Two pump blood to the gills and one to the rest of the body." },
  { q: "How many bones does a giraffe have in its long neck?", o: ["7", "12", "33", "100"], a: 0, f: "Same as humans — 7 — they're just much bigger." },
  { q: "What do pandas eat almost exclusively?", o: ["Meat", "Bamboo", "Bananas", "Bugs"], a: 1, f: "Pandas eat about 26 to 84 pounds of bamboo every day." },
  { q: "Which mammal sleeps about 20 hours a day?", o: ["Koala", "Cheetah", "Horse", "Elephant"], a: 0, f: "Koalas sleep so much because their eucalyptus diet has very little energy." },
  { q: "Which mammal is the largest animal that has ever lived?", o: ["African elephant", "Tyrannosaurus", "Blue whale", "Giraffe"], a: 2, f: "Blue whales can be longer than three school buses parked end to end." },
  { q: "How many legs does a spider have?", o: ["6", "8", "10", "12"], a: 1, f: "Spiders are arachnids, not insects — eight legs is the rule." },
  { q: "What's a baby kangaroo called?", o: ["Cub", "Joey", "Pup", "Kit"], a: 1, f: "A joey is born tiny and grows up in mom's pouch." },
  { q: "What's a group of lions called?", o: ["A pack", "A school", "A pride", "A flock"], a: 2, f: "A pride is usually one or two adult males, several females, and their cubs." },
  { q: "How long can an elephant's trunk be?", o: ["Up to 1 foot", "Up to 3 feet", "Up to 7 feet", "Up to 30 feet"], a: 2, f: "Trunks can have over 40,000 muscles — and pick up something as tiny as a blueberry." },
  { q: "What animal is known as the 'king of the jungle'?", o: ["Tiger", "Lion", "Elephant", "Bear"], a: 1, f: "Funny enough, lions live on the savanna, not the jungle." },
  { q: "Which animal has black-and-white stripes used to confuse predators?", o: ["Tiger", "Skunk", "Zebra", "Penguin"], a: 2, f: "When zebras run as a group, the stripes make it hard for lions to pick out one zebra." },
  { q: "What's the closest living relative to humans?", o: ["Dog", "Chimpanzee", "Dolphin", "Cat"], a: 1, f: "Chimps share about 98% of human DNA." },
  { q: "Which mammal lays eggs?", o: ["Bat", "Platypus", "Whale", "Squirrel"], a: 1, f: "Platypuses are one of only a few egg-laying mammals (called monotremes)." },
  { q: "Which is the only mammal that can truly fly?", o: ["Flying squirrel", "Bat", "Eagle", "Ostrich"], a: 1, f: "Flying squirrels glide — bats actually flap and fly." },

  // ── Birds (49–60)
  { q: "What is Illinois's state bird?", o: ["Bald eagle", "Northern cardinal", "Robin", "Goldfinch"], a: 1, f: "Cardinals stay all winter, so you can spot them in the snow." },
  { q: "Which bird is famous for its beautiful tail feathers?", o: ["Crow", "Peacock", "Sparrow", "Pigeon"], a: 1, f: "Only male peacocks have the showy tail; females are called peahens." },
  { q: "Which bird is the symbol of the United States?", o: ["Bald eagle", "Owl", "Robin", "Penguin"], a: 0, f: "The bald eagle has been the U.S. national bird since 1782." },
  { q: "Which bird can fly backwards?", o: ["Hummingbird", "Eagle", "Hawk", "Sparrow"], a: 0, f: "Hummingbirds beat their wings up to 80 times per second." },
  { q: "Which bird is famous for hooting at night?", o: ["Sparrow", "Owl", "Robin", "Eagle"], a: 1, f: "Owls have super-quiet feathers so they can sneak up on mice in the dark." },
  { q: "What do baby birds break out of when they hatch?", o: ["A cocoon", "A shell", "A bubble", "A nest"], a: 1, f: "Birds use a special 'egg tooth' to crack the shell from the inside." },
  { q: "Which bird walks on water lilies and runs on land but cannot fly?", o: ["Penguin", "Ostrich", "Robin", "Crow"], a: 1, f: "Ostriches are the largest living bird — and the fastest on two legs." },
  { q: "Which Chicago park is famous as one of the best birding spots in the Midwest?", o: ["Grant Park", "Montrose Point Bird Sanctuary", "Wrigley Field", "Soldier Field"], a: 1, f: "Birders call Montrose Point's bushes 'the Magic Hedge' for the rare migrants that show up there." },
  { q: "What do you call a baby owl?", o: ["Pup", "Kit", "Owlet", "Cub"], a: 2, f: "An owlet stays in the nest for several weeks before learning to fly." },
  { q: "Which bird is a symbol of peace?", o: ["Hawk", "Pigeon (or dove)", "Eagle", "Penguin"], a: 1, f: "White doves have been a peace symbol for thousands of years." },
  { q: "Which large pink bird stands on one leg?", o: ["Heron", "Flamingo", "Pelican", "Stork"], a: 1, f: "Flamingos are pink because of the shrimp and algae they eat." },
  { q: "Which bird is famous for its impressive long-distance migration?", o: ["Turkey", "Penguin", "Arctic tern", "Chicken"], a: 2, f: "Arctic terns fly more than 44,000 miles every year — pole to pole." },

  // ── Sea & water animals (61–72)
  { q: "Which ocean creature has 8 arms?", o: ["Squid", "Octopus", "Crab", "Lobster"], a: 1, f: "Squids have 10 (8 arms + 2 longer tentacles) — octopuses have just 8." },
  { q: "Which fish is famous for hiding in sea anemones?", o: ["Tuna", "Clownfish", "Goldfish", "Catfish"], a: 1, f: "Clownfish have a special slime that protects them from anemone stings." },
  { q: "Which sea animal has a hard shell, claws, and walks sideways?", o: ["Octopus", "Crab", "Eel", "Starfish"], a: 1, f: "Crabs walk sideways because their joints bend that way." },
  { q: "Which large fish is famous for its triangle-shaped fin?", o: ["Whale", "Dolphin", "Shark", "Tuna"], a: 2, f: "That dorsal fin keeps the shark steady as it swims." },
  { q: "What do sea turtles do on the beach?", o: ["Sleep", "Lay eggs", "Eat sand", "Surf"], a: 1, f: "Female sea turtles lay 80–120 eggs at a time, then return to the sea." },
  { q: "What's a baby seal called?", o: ["Pup", "Cub", "Calf", "Joey"], a: 0, f: "Seal pups are usually born on beaches or ice." },
  { q: "Which mammal lives in the ocean and breathes air?", o: ["Shark", "Goldfish", "Dolphin", "Tuna"], a: 2, f: "Dolphins are marine mammals — they have to come up to breathe." },
  { q: "Which sea star can grow back arms it loses?", o: ["Starfish (sea star)", "Octopus", "Coral", "Tuna"], a: 0, f: "Sea stars can regrow lost arms — and a single arm can sometimes grow into a whole new sea star." },
  { q: "Coral reefs are made of what?", o: ["Plants", "Tiny animals called polyps", "Plastic", "Rocks only"], a: 1, f: "Each coral is built by thousands of tiny animals called polyps." },
  { q: "Which animal is famous for blowing water out of a hole on its head?", o: ["Whale", "Tuna", "Salmon", "Octopus"], a: 0, f: "That hole is called a blowhole — and it's how whales breathe." },
  { q: "Which freshwater giant fish lives in the Amazon Rising exhibit at Shedd?", o: ["Piranha", "Arapaima", "Goldfish", "Salmon"], a: 1, f: "Arapaima can grow up to 10 feet long and breathe air." },
  { q: "What do you call a baby fish?", o: ["Tadpole", "Fry", "Calf", "Joey"], a: 1, f: "A young fish is called a fry." },

  // ── Reptiles, amphibians, insects (73–84)
  { q: "Which animal starts as a tadpole and grows into something with legs?", o: ["Fish", "Frog", "Lizard", "Snail"], a: 1, f: "Tadpoles slowly grow legs, lose their tails, and become frogs." },
  { q: "What's a reptile?", o: ["A warm-blooded animal", "A scaly, cold-blooded animal", "A flying mammal", "A fish"], a: 1, f: "Snakes, lizards, turtles, and crocodiles are all reptiles." },
  { q: "Which insect makes honey?", o: ["Ant", "Honeybee", "Beetle", "Butterfly"], a: 1, f: "A single bee makes only about 1/12 of a teaspoon of honey in its lifetime." },
  { q: "What does a butterfly come out of?", o: ["A nest", "A cocoon", "A chrysalis", "A shell"], a: 2, f: "Moths make cocoons, butterflies make chrysalises." },
  { q: "How many legs does an insect have?", o: ["4", "6", "8", "10"], a: 1, f: "All true insects have six legs." },
  { q: "Which insect can carry 50 times its own weight?", o: ["Butterfly", "Ant", "Mosquito", "Fly"], a: 1, f: "Ants are tiny but mighty — strong muscles for their size." },
  { q: "What kind of animal is a tortoise?", o: ["Mammal", "Bird", "Reptile", "Amphibian"], a: 2, f: "Tortoises are land-dwelling reptiles with hard shells." },
  { q: "Which animal sheds its entire skin in one piece?", o: ["Cat", "Snake", "Frog", "Mouse"], a: 1, f: "Snakes shed their skin a few times a year as they grow." },
  { q: "Which insect lives in a colony with a queen?", o: ["Spider", "Bee", "Mosquito", "Cricket"], a: 1, f: "Honeybees live in colonies of up to 60,000 with one queen." },
  { q: "What does a chameleon do that's special?", o: ["Glows in the dark", "Changes color", "Flies", "Swims fast"], a: 1, f: "Chameleons change color to communicate or match their mood, not just to hide." },
  { q: "Which animal is famous for jumping?", o: ["Frog", "Whale", "Snake", "Ostrich"], a: 0, f: "A frog can jump more than 20 times its body length." },
  { q: "What do you call a baby butterfly?", o: ["Chick", "Caterpillar", "Pup", "Larva"], a: 1, f: "Caterpillars (also called larvae) eat a lot of leaves before turning into butterflies." },

  // ── Habitats, classification, behavior (85–100)
  { q: "What is a habitat?", o: ["A type of food", "The place an animal lives", "A baby animal", "A dance move"], a: 1, f: "Forests, deserts, oceans, and Lincoln Park are all habitats." },
  { q: "Which animals are 'nocturnal'?", o: ["Active during the day", "Active at night", "Asleep all year", "Live only in water"], a: 1, f: "Owls, raccoons, and bats are nocturnal — they wake up when the sun sets." },
  { q: "What do we call animals that eat both plants and meat?", o: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"], a: 2, f: "Bears and humans are omnivores." },
  { q: "Carnivores eat mostly...", o: ["Plants", "Meat", "Sand", "Wood"], a: 1, f: "Lions and tigers are carnivores — they hunt for meat." },
  { q: "Herbivores eat mostly...", o: ["Meat", "Plants", "Stones", "Bugs"], a: 1, f: "Cows, deer, and giraffes are herbivores." },
  { q: "What do animals do during hibernation?", o: ["Migrate to warmer places", "Sleep through winter", "Lay eggs", "Eat constantly"], a: 1, f: "Bears, groundhogs, and chipmunks hibernate to save energy through cold winters." },
  { q: "What is migration?", o: ["Sleeping in winter", "Moving to a new place for food or warmth", "Changing colors", "Growing larger"], a: 1, f: "Many Chicago birds migrate south to warmer states or even other continents in fall." },
  { q: "Which group of animals is warm-blooded and has fur?", o: ["Birds", "Mammals", "Reptiles", "Fish"], a: 1, f: "Mammals also nurse their young with milk." },
  { q: "Which group of animals is warm-blooded and has feathers?", o: ["Mammals", "Birds", "Reptiles", "Amphibians"], a: 1, f: "Birds are the only animals with feathers." },
  { q: "Which group of animals is cold-blooded and lives both in water and on land?", o: ["Mammals", "Reptiles", "Amphibians", "Fish"], a: 2, f: "Frogs, toads, and salamanders are amphibians." },
  { q: "Why do many Chicago birds fly south for winter?", o: ["They get bored", "Food becomes hard to find in cold weather", "They like the beach", "They lose their feathers"], a: 1, f: "Bugs and seeds are hard to find in deep snow." },
  { q: "What do raccoons in Chicago neighborhoods like to do at night?", o: ["Hunt fish", "Get into trash cans", "Build dams", "Climb skyscrapers"], a: 1, f: "Raccoons are clever and have hands that can open lids." },
  { q: "Which Lake Michigan fish is great for fishing trips with kids?", o: ["Whale", "Yellow perch", "Octopus", "Shark"], a: 1, f: "Perch and bass are common catches off Chicago piers." },
  { q: "Why do some animals camouflage?", o: ["To stay cool", "To hide from predators or sneak up on prey", "To look pretty", "To swim faster"], a: 1, f: "Camouflage helps animals blend in with leaves, sand, or even snow." },
  { q: "What's an apex predator?", o: ["A baby animal", "A predator with no predators of its own", "A herbivore", "A migrating bird"], a: 1, f: "Lions and great white sharks are apex predators in their habitats." },
  { q: "What's a 'food chain'?", o: ["A line of animals at the zoo", "A grocery store", "How energy moves from plants to animals to predators", "A type of nest"], a: 2, f: "Sun → grass → rabbit → fox is a simple food chain." },
];

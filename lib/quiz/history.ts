import type { Question } from "./types";

/**
 * 100 Chicago history trivia questions — leans heavily local
 * (founders, Great Fire, World's Fair, neighborhoods, food, sports,
 * inventions, famous Chicagoans), with a few American history sprinkles
 * tied to the agenda's Lincoln/Civil War week.
 */
export const historyQuestions: Question[] = [
  // ── Founding & flag (1–10)
  { q: "Chicago's first non-Indigenous settler was a Black trader from Haiti named...", o: ["Daniel Burnham", "Jean Baptiste Point DuSable", "Benjamin Franklin", "John Kinzie"], a: 1, f: "DuSable built a trading post at the mouth of the Chicago River in the 1780s." },
  { q: "What year was Chicago officially incorporated as a city?", o: ["1818", "1837", "1871", "1900"], a: 1, f: "Chicago became a city in 1837 with about 4,000 people. By 1900 it had over 1.6 million." },
  { q: "What does the Chicago city motto 'Urbs in Horto' mean?", o: ["City of broad shoulders", "City in a garden", "City by the lake", "City that works"], a: 1, f: "It's Latin for 'City in a Garden' — a nod to Chicago's parks." },
  { q: "How many red stars are on the Chicago flag?", o: ["3", "4", "5", "6"], a: 1, f: "Each red star stands for a key event: Fort Dearborn, the Great Fire, the 1893 World's Fair, and the 1933 Century of Progress fair." },
  { q: "How many points does each star on the Chicago flag have?", o: ["5", "6", "7", "8"], a: 1, f: "Six points each. Each point itself stands for a value, like religion, education, or municipal pride." },
  { q: "What do the two blue stripes on the Chicago flag represent?", o: ["The Cubs and White Sox", "The North and South sides", "The Chicago River and Lake Michigan", "The Illinois rivers"], a: 2, f: "One stripe = the Chicago River, the other = Lake Michigan." },
  { q: "Fort Dearborn, an early frontier outpost, stood near what is today which Chicago landmark?", o: ["Soldier Field", "Wrigley Field", "Michigan Avenue Bridge", "Willis Tower"], a: 2, f: "Markers in the sidewalk at the Michigan Avenue bridge show where the fort stood." },
  { q: "Chicago's nickname 'The Windy City' originally referred to...", o: ["The lake breeze", "Politicians' long-winded speeches", "Fast trains", "Tornadoes"], a: 1, f: "It came from a New York newspaper poking fun at Chicago boosters' bragging — though the lake winds didn't hurt either." },
  { q: "What is Chicago's other famous nickname, given by poet Carl Sandburg?", o: ["The Big Apple", "The City of Big Shoulders", "The Mile-High City", "The City of Angels"], a: 1, f: "From Sandburg's 1914 poem 'Chicago.' He also called it 'Hog Butcher for the World.'" },
  { q: "What state is Chicago in?", o: ["Indiana", "Illinois", "Wisconsin", "Iowa"], a: 1, f: "Chicago is in northeastern Illinois, on Lake Michigan." },

  // ── The Great Chicago Fire (11–18)
  { q: "What year was the Great Chicago Fire?", o: ["1851", "1871", "1893", "1906"], a: 1, f: "The fire burned October 8–10, 1871." },
  { q: "Who is famously (and unfairly) blamed for starting the Great Chicago Fire?", o: ["A blacksmith", "Mrs. O'Leary's cow", "A train", "The mayor"], a: 1, f: "The cow story was invented by a reporter and later admitted to be made up." },
  { q: "Roughly how much of Chicago burned in the Great Fire?", o: ["A few houses", "A small neighborhood", "About a third of the city", "All of it"], a: 2, f: "Around 17,000 buildings burned and about 100,000 people lost their homes." },
  { q: "What helped Chicago rebuild so fast after the Great Fire?", o: ["Money from England", "Local timber and a flood of investment", "The Cubs", "The federal government"], a: 1, f: "Chicago rebuilt bigger and stronger, leading to the world's first skyscrapers." },
  { q: "What did the Great Fire push Chicago architects to invent?", o: ["The skyscraper", "The car", "The hot dog", "The bicycle"], a: 0, f: "The world's first skyscraper, the Home Insurance Building (1885), was built in Chicago." },
  { q: "Which Chicago institution preserves stories and artifacts from the fire?", o: ["The Adler Planetarium", "Chicago History Museum", "Shedd Aquarium", "Wrigley Field"], a: 1, f: "The Chicago History Museum sits at Clark and North in Lincoln Park." },
  { q: "Mrs. O'Leary's barn was on what street?", o: ["DeKoven Street", "State Street", "Michigan Avenue", "Wabash Avenue"], a: 0, f: "DeKoven Street is now home to the Chicago Fire Department's training academy." },
  { q: "Why was the 1871 fire so destructive?", o: ["The river was too small", "Almost everything was wood and a long drought made it dry", "There was no fire department", "It was very cold"], a: 1, f: "Wooden buildings, sidewalks — even some streets — and weeks without rain made it spread fast." },

  // ── World's Columbian Exposition / White City (19–26)
  { q: "What year did Chicago host the World's Columbian Exposition?", o: ["1871", "1893", "1933", "1955"], a: 1, f: "It celebrated the 400th anniversary of Columbus reaching the Americas." },
  { q: "What was the World's Columbian Exposition nicknamed?", o: ["The Glass City", "The White City", "The Red City", "The Tower City"], a: 1, f: "Most buildings were painted white and lit by electricity at night." },
  { q: "What giant ride debuted at the 1893 World's Fair?", o: ["The roller coaster", "The Ferris wheel", "The carousel", "The water slide"], a: 1, f: "George Ferris built the original Ferris wheel for the 1893 fair." },
  { q: "Where in Chicago was the 1893 World's Fair held?", o: ["Lincoln Park", "Hyde Park / Jackson Park", "Pilsen", "Logan Square"], a: 1, f: "Most of the fairgrounds were in today's Jackson Park, near the Museum of Science & Industry." },
  { q: "Which Chicago museum is housed in the only major building left from the 1893 Fair?", o: ["Field Museum", "Museum of Science & Industry", "Art Institute", "Adler Planetarium"], a: 1, f: "MSI lives inside the former Palace of Fine Arts — built for the 1893 fair." },
  { q: "Who designed the master plan for the 1893 fair?", o: ["Daniel Burnham", "Frank Lloyd Wright", "Louis Sullivan", "Mies van der Rohe"], a: 0, f: "Burnham later wrote the famous 1909 Plan of Chicago." },
  { q: "Famous quote: 'Make no little plans...' is associated with which Chicagoan?", o: ["Abraham Lincoln", "Daniel Burnham", "Carl Sandburg", "Al Capone"], a: 1, f: "Burnham reportedly said 'Make no little plans; they have no magic to stir men's blood.'" },
  { q: "What snack was made famous at the 1893 World's Fair?", o: ["Hot dog", "Cracker Jack", "Cotton candy", "Pizza"], a: 1, f: "Cracker Jack was launched at the fair — and got its 'prize inside' a few years later." },

  // ── Skyscrapers, architecture, river (27–36)
  { q: "What was the world's first skyscraper, built in Chicago in 1885?", o: ["Willis Tower", "Home Insurance Building", "Wrigley Building", "Marina City"], a: 1, f: "The Home Insurance Building used a steel-frame skeleton — the breakthrough for tall buildings." },
  { q: "What was Willis Tower called for most of its life?", o: ["John Hancock Center", "Sears Tower", "Aon Center", "Trump Tower"], a: 1, f: "It was the Sears Tower from 1973 to 2009, then renamed Willis Tower." },
  { q: "What do you call the glass boxes on Willis Tower's 103rd-floor skydeck?", o: ["The Bean", "The Ledge", "The Sky Boxes", "The Cliff"], a: 1, f: "The Ledge boxes are 1,353 feet (412 m) above the sidewalk." },
  { q: "Which Chicago skyscraper is sometimes called 'Big John'?", o: ["Trump Tower", "Aon Center", "875 N. Michigan (former Hancock)", "Willis Tower"], a: 2, f: "Locals still call it the Hancock — its full original name was John Hancock Center." },
  { q: "Which Chicago neighborhood is famous for its row of historic mansions and Frank Lloyd Wright homes?", o: ["Pilsen", "Oak Park", "Pullman", "Bridgeport"], a: 1, f: "Frank Lloyd Wright lived and worked in Oak Park; you can tour his home and studio." },
  { q: "Chicago does what to its river every St. Patrick's Day?", o: ["Drains it", "Dyes it green", "Freezes it", "Fills it with shamrocks"], a: 1, f: "The dyeing tradition started in 1962 with the Chicago Plumbers' Union." },
  { q: "Which Chicago engineering project reversed the flow of the river in 1900?", o: ["The Sanitary and Ship Canal", "The Lakefront Trail", "The Loop subway", "The Magnificent Mile"], a: 0, f: "Engineers reversed the river so sewage would flow away from Lake Michigan, the city's drinking water." },
  { q: "How many bridges cross the Chicago River through downtown?", o: ["About 5", "About 12", "About 38", "More than 100"], a: 2, f: "Chicago has 38 movable bridges — most of any city in the world." },
  { q: "What's special about the bridges over the Chicago River?", o: ["They're invisible", "They lift up to let tall boats pass", "They're underwater", "They're made of wood"], a: 1, f: "Twice a year, the Chicago River bridges lift in sequence to let sailboats in and out of Lake Michigan." },
  { q: "Cloud Gate, the silver sculpture in Millennium Park, is nicknamed...", o: ["The Cube", "The Bean", "The Ball", "The Star"], a: 1, f: "Designed by Anish Kapoor and unveiled in 2006." },

  // ── Pullman, labor, working Chicago (37–44)
  { q: "Pullman National Historical Park preserves a 19th-century company town built around what?", o: ["A pencil factory", "A train-car factory", "A meatpacking plant", "A steel mill"], a: 1, f: "George Pullman built railroad sleeping cars there starting in 1880." },
  { q: "What year was the famous Pullman Strike?", o: ["1871", "1894", "1929", "1968"], a: 1, f: "The 1894 Pullman Strike spread to a national rail strike and changed U.S. labor law." },
  { q: "What labor leader led the Pullman Strike?", o: ["Eugene V. Debs", "Cesar Chavez", "Samuel Gompers", "Mother Jones"], a: 0, f: "Debs went on to lead the American Railway Union." },
  { q: "Why was Chicago called 'Hog Butcher for the World'?", o: ["Lots of barbecue restaurants", "It had the country's largest meatpacking district", "It raised the most pigs", "Pigs ran free in the streets"], a: 1, f: "The Union Stock Yards on the South Side processed millions of animals a year." },
  { q: "When did the Union Stock Yards close?", o: ["1893", "1929", "1971", "1995"], a: 2, f: "They closed in 1971 — but the famous Stockyards Gate still stands." },
  { q: "Chicago is the rail hub of the U.S. — about how many freight trains pass through every day?", o: ["About 50", "About 200", "About 500", "About 1,300"], a: 3, f: "Roughly 1,300 — about 1/4 of all U.S. freight rail traffic touches Chicago." },
  { q: "Which Chicago union event in 1886 changed labor history worldwide?", o: ["The Haymarket affair", "The Pullman parade", "The Loop strike", "The Soldier Field rally"], a: 0, f: "The Haymarket affair led to International Workers' Day (May 1)." },
  { q: "Roughly how many people worked at Chicago's Union Stock Yards at their peak?", o: ["About 500", "About 5,000", "About 40,000", "About 300,000"], a: 2, f: "About 40,000 — making it one of the city's largest employers." },

  // ── Chicago food (45–52)
  { q: "What style of pizza was invented in Chicago in 1943?", o: ["Thin crust", "New York style", "Deep dish", "Detroit style"], a: 2, f: "Pizzeria Uno claims to have served the first deep-dish pie." },
  { q: "What's the name of the original Chicago deep-dish pizza restaurant?", o: ["Lou Malnati's", "Giordano's", "Pizzeria Uno", "Pequod's"], a: 2, f: "Pizzeria Uno opened in 1943 and is still serving pizza today." },
  { q: "What is famously NEVER put on a Chicago-style hot dog?", o: ["Mustard", "Onions", "Ketchup", "Pickle"], a: 2, f: "Adding ketchup to a Chicago dog is widely considered a no-no." },
  { q: "What sport-pepper-topped sandwich is Chicago famous for besides pizza and hot dogs?", o: ["Italian beef", "Lobster roll", "Cheesesteak", "Po' boy"], a: 0, f: "Italian beef is sliced thin, dipped in jus, and topped with giardiniera." },
  { q: "What carnival caramel-popcorn-and-peanuts snack was popularized in Chicago?", o: ["Cracker Jack", "Skittles", "Twinkies", "Snickers"], a: 0, f: "Cracker Jack was launched in Chicago and made famous at the 1893 World's Fair." },
  { q: "Which spicy pickled-vegetable mix is on most Chicago Italian beefs?", o: ["Salsa", "Giardiniera", "Coleslaw", "Sauerkraut"], a: 1, f: "Chicago-style giardiniera leans hot and oily, not vinegary." },
  { q: "What snack is the famous mix of caramel and cheese popcorn from a Chicago shop?", o: ["Crunch corn", "Garrett Mix", "Kettle corn", "Movie mix"], a: 1, f: "Garrett's iconic 'Chicago Mix' combines caramel and cheese popcorn." },
  { q: "Which Twinkie-like Chicago bakery treat was invented in the 1930s?", o: ["The Twinkie", "Eli's Cheesecake", "Tootsie Roll", "Frango Mints"], a: 0, f: "The Twinkie was invented in 1930 in River Forest, IL — just outside Chicago." },

  // ── Sports & teams (53–62)
  { q: "Where do the Chicago Cubs play their home games?", o: ["Soldier Field", "Wrigley Field", "Guaranteed Rate Field", "United Center"], a: 1, f: "Wrigley opened in 1914 and is the second-oldest park in MLB." },
  { q: "Wrigley Field opened in what year?", o: ["1900", "1914", "1932", "1948"], a: 1, f: "Originally built for the Federal League's Chicago Whales." },
  { q: "Where do the Chicago White Sox play?", o: ["Wrigley Field", "Comiskey Park (Guaranteed Rate Field)", "Soldier Field", "United Center"], a: 1, f: "On Chicago's South Side, originally Comiskey Park." },
  { q: "Where do the Chicago Bears play home football games?", o: ["Wrigley Field", "Soldier Field", "United Center", "Guaranteed Rate Field"], a: 1, f: "Soldier Field opened in 1924 and was rebuilt in 2003." },
  { q: "Where do the Chicago Bulls play basketball?", o: ["United Center", "Soldier Field", "Allstate Arena", "Wrigley Field"], a: 0, f: "The United Center is also home to the Chicago Blackhawks (NHL)." },
  { q: "Which Chicago Bulls superstar is widely considered the greatest basketball player ever?", o: ["Scottie Pippen", "Michael Jordan", "Derrick Rose", "Dennis Rodman"], a: 1, f: "Jordan won 6 NBA championships with the Bulls in the 1990s." },
  { q: "Which year did the Cubs end a 108-year title drought?", o: ["2005", "2010", "2016", "2020"], a: 2, f: "The Cubs won the 2016 World Series — their first since 1908." },
  { q: "Which Chicago hockey team plays at the United Center?", o: ["Blackhawks", "Bears", "Bulls", "White Sox"], a: 0, f: "The Blackhawks have won the Stanley Cup six times." },
  { q: "What's the historic name of the Chicago White Sox 1919 scandal?", o: ["The Black Sox Scandal", "The Loop Scandal", "The Pullman Scandal", "The Wrigley Scandal"], a: 0, f: "Several players were accused of intentionally losing the 1919 World Series." },
  { q: "Which long-running Chicago college football matchup is sometimes called 'America's Game'?", o: ["Notre Dame vs. Northwestern", "DePaul vs. Loyola", "Northwestern vs. Illinois", "UIC vs. UofC"], a: 2, f: "The Land of Lincoln Trophy is fought for between Northwestern and Illinois." },

  // ── Lincoln, Civil War, IL state history (63–72)
  { q: "Which U.S. president, who lived in Springfield, IL, is buried in Illinois?", o: ["George Washington", "Abraham Lincoln", "John F. Kennedy", "Theodore Roosevelt"], a: 1, f: "Lincoln is buried at Oak Ridge Cemetery in Springfield." },
  { q: "Which war happened during Lincoln's presidency?", o: ["World War I", "Revolutionary War", "Civil War", "War of 1812"], a: 2, f: "The American Civil War lasted 1861–1865." },
  { q: "What document, signed by Lincoln in 1863, freed enslaved people in Confederate states?", o: ["The Bill of Rights", "The Emancipation Proclamation", "The Declaration of Independence", "The Magna Carta"], a: 1, f: "Original copies live at the National Archives, with reproductions on display in Chicago." },
  { q: "Which Lincoln statue is a famous landmark in Chicago's Lincoln Park?", o: ["Standing Lincoln", "Sitting Lincoln", "Lincoln on Horse", "Lincoln Riding"], a: 0, f: "'Standing Lincoln' (1887) by Augustus Saint-Gaudens shows a thoughtful Lincoln rising to speak." },
  { q: "What was the Underground Railroad?", o: ["A subway under Chicago", "A network of safe houses helping enslaved people escape to freedom", "An old steam-train line", "A telegraph network"], a: 1, f: "Chicago and Illinois had several Underground Railroad stops." },
  { q: "What two political parties grew out of the lead-up to the Civil War?", o: ["Republicans and Democrats", "Whigs and Tories", "Federalists and Anti-Federalists", "Greens and Libertarians"], a: 0, f: "The modern Republican Party was founded in 1854, partly in opposition to expanding slavery." },
  { q: "Lincoln gave his famous 'House Divided' speech in which Illinois city?", o: ["Springfield", "Chicago", "Peoria", "Rockford"], a: 0, f: "He gave it in 1858 at the Illinois Republican Convention in Springfield." },
  { q: "What is the capital of Illinois?", o: ["Chicago", "Springfield", "Peoria", "Rockford"], a: 1, f: "Even though Chicago is much bigger, Springfield has been the capital since 1839." },
  { q: "What is Illinois's state nickname?", o: ["The Lake State", "The Land of Lincoln", "The Prairie State (also Land of Lincoln)", "The Apple State"], a: 2, f: "Illinois has two: 'Land of Lincoln' and 'The Prairie State.'" },
  { q: "Which famous abolitionist newspaper editor lived in Chicago in the late 1800s?", o: ["Ida B. Wells", "Frederick Douglass", "Susan B. Anthony", "Harriet Beecher Stowe"], a: 0, f: "Ida B. Wells fought lynching and worked for civil rights from her base in Chicago." },

  // ── Music, arts, culture (73–82)
  { q: "Chicago is the birthplace of which 20th-century music style?", o: ["Surf rock", "Chicago blues and house music", "Reggae", "Country pop"], a: 1, f: "Chicago electrified the blues — and later invented house music in the 1980s." },
  { q: "Which famous blues record label was based in Chicago?", o: ["Chess Records", "Motown", "Sun Records", "Stax"], a: 0, f: "Chess Records released hits by Muddy Waters, Howlin' Wolf, Etta James, and Chuck Berry." },
  { q: "Which jazz great moved to Chicago in 1922 and helped invent modern jazz?", o: ["Louis Armstrong", "Ella Fitzgerald", "Duke Ellington", "Miles Davis"], a: 0, f: "Armstrong joined King Oliver's band on the South Side." },
  { q: "Where can you hear free outdoor concerts in summer at Pritzker Pavilion?", o: ["Lincoln Park", "Millennium Park", "Soldier Field", "Wrigley Field"], a: 1, f: "Pritzker Pavilion, designed by Frank Gehry, hosts free symphony performances." },
  { q: "Which giant outdoor music festival happens in Grant Park each summer?", o: ["Coachella", "Lollapalooza", "Bonnaroo", "SXSW"], a: 1, f: "Lollapalooza moved to Grant Park in 2005 and brought 100,000+ fans daily." },
  { q: "Which giant 'fountain' in Grant Park has a colorful nightly water-and-light show?", o: ["The Bean", "Buckingham Fountain", "Crown Fountain", "Centennial Fountain"], a: 1, f: "Buckingham Fountain opened in 1927 and shoots water 150 feet in the air." },
  { q: "What is the iconic Chicago museum on Michigan Avenue with the lion statues?", o: ["Field Museum", "Art Institute of Chicago", "MSI", "DuSable"], a: 1, f: "The bronze lions guarding the Art Institute were sculpted in 1893." },
  { q: "Which famous painting of a farmer and his daughter hangs at the Art Institute?", o: ["Mona Lisa", "American Gothic", "The Starry Night", "The Scream"], a: 1, f: "Grant Wood's 'American Gothic' has lived at the Art Institute since 1930." },
  { q: "Which Chicago neighborhood is famous for its colorful murals and Mexican-American art?", o: ["Pilsen", "Wicker Park", "Logan Square", "Andersonville"], a: 0, f: "The National Museum of Mexican Art is in Pilsen." },
  { q: "Which long-running improv comedy theater started in Chicago?", o: ["Saturday Night Live", "The Second City", "Improv Olympic only", "Stand-up Live"], a: 1, f: "The Second City has trained a who's who of comedy: Belushi, Murray, Tina Fey, Stephen Colbert..." },

  // ── Transit, neighborhoods, geography (83–92)
  { q: "Chicago's elevated train system is nicknamed what?", o: ["The L", "The Tube", "The Metro", "The Loop"], a: 0, f: "Short for 'elevated.' Most of downtown's tracks loop above the streets — hence 'the Loop.'" },
  { q: "How many train lines does the Chicago L have?", o: ["3", "5", "8", "12"], a: 2, f: "The CTA L has 8 colored lines, with the Loop downtown as the hub." },
  { q: "Which CTA train line goes to O'Hare International Airport?", o: ["Red Line", "Blue Line", "Green Line", "Pink Line"], a: 1, f: "Blue Line trains run all the way from O'Hare downtown to Forest Park." },
  { q: "What's Chicago's largest airport?", o: ["Midway", "Gary/Chicago", "O'Hare", "DuPage"], a: 2, f: "O'Hare is one of the busiest airports in the world, with 6+ runways." },
  { q: "What's the name of Chicago's downtown business district?", o: ["The Bean", "The Loop", "The Pier", "The Mile"], a: 1, f: "The Loop is bounded by the elevated train tracks of the same name." },
  { q: "Which long shopping street in Chicago is nicknamed the 'Magnificent Mile'?", o: ["State Street", "North Michigan Avenue", "Clark Street", "Halsted"], a: 1, f: "It runs from the river up to Oak Street." },
  { q: "Lake Michigan is the only Great Lake entirely inside which country?", o: ["Canada", "United States", "Mexico", "Both U.S. and Canada"], a: 1, f: "The other four Great Lakes border Canada too." },
  { q: "What's the name of Chicago's family-friendly entertainment pier?", o: ["Soldier Pier", "Navy Pier", "Marina Pier", "Lakefront Pier"], a: 1, f: "Navy Pier opened in 1916 and now has a Ferris wheel, theaters, and restaurants." },
  { q: "Chicago's giant network of lakefront paths is called the...", o: ["Magnificent Mile", "Lakefront Trail", "Loop Trail", "River Walk"], a: 1, f: "The Lakefront Trail runs about 18 miles along Lake Michigan." },
  { q: "Which big indoor public market in West Loop is great for snacks and lunch?", o: ["Time Out Market / French Market / Eataly area", "The Bean", "The Loop", "The Mag Mile"], a: 0, f: "Chicago's West Loop has tons of food halls, including Time Out Market and Eataly nearby." },

  // ── Famous Chicagoans + odds & ends (93–100)
  { q: "Which 44th U.S. president built his political career in Chicago?", o: ["George W. Bush", "Bill Clinton", "Barack Obama", "Joe Biden"], a: 2, f: "Obama was a community organizer and law professor in Chicago before the White House." },
  { q: "Which talk-show queen built her empire in Chicago in the late 1900s?", o: ["Ellen DeGeneres", "Oprah Winfrey", "Wendy Williams", "Whoopi Goldberg"], a: 1, f: "The Oprah Winfrey Show was based in Chicago from 1986 to 2011." },
  { q: "Walt Disney was born in which city?", o: ["Los Angeles", "Chicago", "Marceline, MO", "Orlando"], a: 1, f: "Disney was born in Chicago in 1901, on Tripp Avenue, before moving to Missouri as a kid." },
  { q: "Which 1920s Chicago gangster ran an illegal alcohol empire during Prohibition?", o: ["Bugsy Siegel", "Al Capone", "John Dillinger", "Lucky Luciano"], a: 1, f: "Capone was finally caught — for tax evasion, not violence — in 1931." },
  { q: "Which children's author wrote 'The Wonderful Wizard of Oz' in Chicago?", o: ["Roald Dahl", "Dr. Seuss", "L. Frank Baum", "E.B. White"], a: 2, f: "Baum wrote 'Oz' while living in Chicago in 1900." },
  { q: "Which Chicago invention from the 1893 fair was a chewy yellow-and-orange snack?", o: ["Cracker Jack", "Twinkie", "Tootsie Roll", "Snickers"], a: 0, f: "Cracker Jack was popularized at the World's Columbian Exposition." },
  { q: "What year did Chicago host the 1933 'Century of Progress' fair?", o: ["1893", "1909", "1933", "1955"], a: 2, f: "The 4th red star on the city flag honors the 1933 fair." },
  { q: "What's the Chicago Riverwalk?", o: ["A bus route", "A pedestrian path along the Chicago River", "An elevated train", "A highway"], a: 1, f: "The Riverwalk is a stroll-friendly path with cafés and architecture views." },
];

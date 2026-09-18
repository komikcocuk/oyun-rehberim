// A Technology page's card: its disc art and the game's quote for it.
// Built by tools/build_tech_media.py from age-*/data/progression-trees-tech.xml
// (TypeQuotes) and age-*/text/en_us/TechnologiesText.xml.
(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  var TECH_MEDIA = {
 "NODE_TECH_AQ_AGRICULTURE": {
  "quote": "The radiance of the new world came into being bathed in nectar, bathed in love.",
  "quoteAuthor": "Preah Khan Inscription",
  "portrait": "images/symbols/agriculture.png",
  "portraitAlt": "Agriculture"
 },
 "NODE_TECH_AQ_POTTERY": {
  "quote": "All are made of clay.",
  "quoteAuthor": "Henry Wadsworth Longfellow",
  "portrait": "images/symbols/pottery.png",
  "portraitAlt": "Pottery"
 },
 "NODE_TECH_AQ_ANIMAL_HUSBANDRY": {
  "quote": "The caged bird watches butterflies with envy.",
  "quoteAuthor": "Kobayashi Issa",
  "portrait": "images/symbols/animal_husbandry.png",
  "portraitAlt": "Animal Husbandry"
 },
 "NODE_TECH_AQ_SAILING": {
  "quote": "The fair breeze blew, the white foam flew, the furrow followed free; we were the first that ever burst into that silent sea.",
  "quoteAuthor": "Samuel Taylor Coleridge",
  "portrait": "images/symbols/sailing.png",
  "portraitAlt": "Sailing"
 },
 "NODE_TECH_AQ_WRITING": {
  "quote": "The spoken word conquers all thought, but the written word commands it.",
  "quoteAuthor": "Walter Benjamin",
  "portrait": "images/symbols/writing.png",
  "portraitAlt": "Writing"
 },
 "NODE_TECH_AQ_IRRIGATION": {
  "quote": "The essence of all beings is the earth; the earth, water; the water, plants; plants, man; and man, speech.",
  "quoteAuthor": "The Upanishads",
  "portrait": "images/symbols/irrigation.png",
  "portraitAlt": "Irrigation"
 },
 "NODE_TECH_AQ_MASONRY": {
  "quote": "He was the first to construct a wall, eighty miles in length, which was to separate the barbarians from the Romans.",
  "quoteAuthor": "Cassius Dio",
  "portrait": "images/symbols/masonry.png",
  "portraitAlt": "Masonry"
 },
 "NODE_TECH_AQ_CURRENCY": {
  "quote": "When I was young I thought that money was the most important thing in life; now that I am old I know that it is.",
  "quoteAuthor": "Oscar Wilde",
  "portrait": "images/symbols/currency.png",
  "portraitAlt": "Currency"
 },
 "NODE_TECH_AQ_BRONZE_WORKING": {
  "quote": "He heard these horrors and his spirit stirred, and spurred to action, he sheathed his skin in burnished bronze.",
  "quoteAuthor": "The Iliad",
  "portrait": "images/symbols/bronze_working.png",
  "portraitAlt": "Bronze Working"
 },
 "NODE_TECH_AQ_WHEEL": {
  "quote": "INVENTOR, n. A person who makes an ingenious arrangement of wheels, levers, and springs, and believes it civilization.",
  "quoteAuthor": "Ambrose Bierce",
  "portrait": "images/symbols/the_wheel.png",
  "portraitAlt": "The Wheel"
 },
 "NODE_TECH_AQ_NAVIGATION": {
  "quote": "Ships at a distance have every man's wish on board.",
  "quoteAuthor": "Zora Neale Hurston",
  "portrait": "images/symbols/navigation.png",
  "portraitAlt": "Navigation"
 },
 "NODE_TECH_AQ_ENGINEERING": {
  "quote": "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
  "quoteAuthor": "Antoine de Saint-Exupéry",
  "portrait": "images/symbols/engineering.png",
  "portraitAlt": "Engineering"
 },
 "NODE_TECH_AQ_MILITARY_TRAINING": {
  "quote": "The truly brave never boast.",
  "quoteAuthor": "The Mahābhārata",
  "portrait": "images/symbols/military_training.png",
  "portraitAlt": "Military Training"
 },
 "NODE_TECH_AQ_MATHEMATICS": {
  "quote": "There is geometry in the humming of the strings. There is music in the spacing of the spheres.",
  "quoteAuthor": "Pythagoras",
  "portrait": "images/symbols/mathematics.png",
  "portraitAlt": "Mathematics"
 },
 "NODE_TECH_AQ_IRON_WORKING": {
  "quote": "Iron made this promise: 'By the tongs and the hammer, many trees I can injure, but I shall not kill the best of heroes.'",
  "quoteAuthor": "The Kalevala",
  "portrait": "images/symbols/iron_working.png",
  "portraitAlt": "Iron Working"
 },
 "NODE_TECH_EX_CARTOGRAPHY": {
  "quote": "The map was a model for, rather than a model of, what it purported to represent.",
  "quoteAuthor": "Thongchai Winichakul",
  "portrait": "images/symbols/cartography.png",
  "portraitAlt": "Cartography"
 },
 "NODE_TECH_EX_ASTRONOMY": {
  "quote": "There exists beyond the world a void without a terminal limit - a thousand thousand worlds beyond this world.",
  "quoteAuthor": "Fakhr al-Din al-Razi",
  "portrait": "images/symbols/astronomy.png",
  "portraitAlt": "Astronomy"
 },
 "NODE_TECH_EX_MACHINERY": {
  "quote": "I worked my wits and thoughts about shapes and figures, and I arranged these shapes one by one.",
  "quoteAuthor": "Ibn Khalaf al-Murādī",
  "portrait": "images/symbols/machinery.png",
  "portraitAlt": "Machinery"
 },
 "NODE_TECH_EX_GUILDS": {
  "quote": "The master and apprentice love the master in different ways.",
  "quoteAuthor": "Friedrich Nietzsche",
  "portrait": "images/symbols/guilds.png",
  "portraitAlt": "Guilds"
 },
 "NODE_TECH_EX_FEUDALISM": {
  "quote": "The king established all his knights, gave them lands, and charged them to give mercy.",
  "quoteAuthor": "Thomas Malory",
  "portrait": "images/symbols/feudalism.png",
  "portraitAlt": "Feudalism"
 },
 "NODE_TECH_EX_HERALDRY": {
  "quote": "Yes, but...do you have a flag?",
  "quoteAuthor": "Suzy Eddie Izzard",
  "portrait": "images/symbols/heraldry.png",
  "portraitAlt": "Heraldry"
 },
 "NODE_TECH_EX_CASTLES": {
  "quote": "Matsuyama castle; the keep is higher than the autumn sky.",
  "quoteAuthor": "Masaoka Shiki",
  "portrait": "images/symbols/castles.png",
  "portraitAlt": "Castles"
 },
 "NODE_TECH_EX_EDUCATION": {
  "quote": "The best investment for one year is to grow grains; the best investment for ten years is to grow trees; the best investment for a lifetime is to educate people.",
  "quoteAuthor": "Guan Zhong",
  "portrait": "images/symbols/education.png",
  "portraitAlt": "Education"
 },
 "NODE_TECH_EX_SHIPBUILDING": {
  "quote": "If ship-building art were in the wood, ships would exist by nature.",
  "quoteAuthor": "Aristotle",
  "portrait": "images/symbols/shipbuilding.png",
  "portraitAlt": "Shipbuilding"
 },
 "NODE_TECH_EX_METALLURGY": {
  "quote": "From the new land of gold, a sun of gold, a whole fathom wide, and a moon of silver.",
  "quoteAuthor": "Albrecht Dürer",
  "portrait": "images/symbols/metallurgy.png",
  "portraitAlt": "Metallurgy"
 },
 "NODE_TECH_EX_ARCHITECTURE": {
  "quote": "The purpose of construction is to make things hold together; of architecture to move us.",
  "quoteAuthor": "Le Corbusier",
  "portrait": "images/symbols/architecture.png",
  "portraitAlt": "Architecture"
 },
 "NODE_TECH_EX_METAL_CASTING": {
  "quote": "The bellows worked incessantly for three days and three nights, and the bronze melted down and became as water.",
  "quoteAuthor": "Michael Kritoboulos",
  "portrait": "images/symbols/metal_casting.png",
  "portraitAlt": "Metal Casting"
 },
 "NODE_TECH_EX_URBAN_PLANNING": {
  "quote": "The city is like a great house, and the house is like a small city.",
  "quoteAuthor": "Leon Battista Alberti",
  "portrait": "images/symbols/urban_planning.png",
  "portraitAlt": "Urban Planning"
 },
 "NODE_TECH_EX_GUNPOWDER": {
  "quote": "The real use of gunpowder is to make all men tall.",
  "quoteAuthor": "Thomas Carlyle",
  "portrait": "images/symbols/gunpowder.png",
  "portraitAlt": "Gunpowder"
 },
 "NODE_TECH_MO_ACADEMICS": {
  "quote": "Now is the time to understand more, so that we may fear less.",
  "quoteAuthor": "Marie Curie",
  "portrait": "images/symbols/academics.png",
  "portraitAlt": "Academics"
 },
 "NODE_TECH_MO_STEAM_ENGINE": {
  "quote": "Soon shall thy arm, unconquered steam, afar drag the slow barge or drive the rapid car.",
  "quoteAuthor": "Erasmus Darwin",
  "portrait": "images/symbols/steam_engine.png",
  "portraitAlt": "Steam Engine"
 },
 "NODE_TECH_MO_MILITARY_SCIENCE": {
  "quote": "Confuse your enemy. Keep him in the dark about your intentions.",
  "quoteAuthor": "Võ Nguyên Giáp",
  "portrait": "images/symbols/military_science.png",
  "portraitAlt": "Military Science"
 },
 "NODE_TECH_MO_ELECTRICITY": {
  "quote": "The beauty of electricity is not that the power is mysterious, but that it is under law, and that the taught intellect can even now govern it.",
  "quoteAuthor": "Michael Faraday",
  "portrait": "images/symbols/electricity.png",
  "portraitAlt": "Electricity"
 },
 "NODE_TECH_MO_URBANIZATION": {
  "quote": "The face of a city changes faster than a human heart.",
  "quoteAuthor": "Charles Baudelaire",
  "portrait": "images/symbols/urbanization.png",
  "portraitAlt": "Urbanization"
 },
 "NODE_TECH_MO_COMBUSTION": {
  "quote": "So readily do people adapt themselves to the marvelous contrivances which modern inventive ingenuity has devised.",
  "quoteAuthor": "The Marvelous Vogue of the Automobile",
  "portrait": "images/symbols/combustion.png",
  "portraitAlt": "Combustion"
 },
 "NODE_TECH_MO_INDUSTRIALIZATION": {
  "quote": "And was Jerusalem builded here among these dark Satanic Mills?",
  "quoteAuthor": "William Blake",
  "portrait": "images/symbols/industrialization.png",
  "portraitAlt": "Industrialization"
 },
 "NODE_TECH_MO_RADIO": {
  "quote": "We annihilated the world before your very ears… You will be relieved, I hope, to learn that we didn't mean it.",
  "quoteAuthor": "Orson Welles",
  "portrait": "images/symbols/radio.png",
  "portraitAlt": "Radio"
 },
 "NODE_TECH_MO_FLIGHT": {
  "quote": "The sound of wings.",
  "quoteAuthor": "Amelia Earhart",
  "portrait": "images/symbols/flight.png",
  "portraitAlt": "Flight"
 },
 "NODE_TECH_MO_MASS_PRODUCTION": {
  "quote": "Just as modern mass production requires the standardization of commodities, so the social process requires standardization of man.",
  "quoteAuthor": "Erich Fromm",
  "portrait": "images/symbols/mass_production.png",
  "portraitAlt": "Mass Production"
 },
 "NODE_TECH_MO_COMPUTATION": {
  "quote": "This is only a foretaste of what is to come, and only the shadow of what is going to be.",
  "quoteAuthor": "Alan Turing",
  "portrait": "images/symbols/computation.png",
  "portraitAlt": "Computation"
 },
 "NODE_TECH_MO_MOBILIZATION": {
  "quote": "The young men shall fight; the women shall make tents; the old shall arouse the courage of the warriors.",
  "quoteAuthor": "Levée en Masse",
  "portrait": "images/symbols/mobilization.png",
  "portraitAlt": "Mobilization"
 },
 "NODE_TECH_MO_ARMOR": {
  "quote": "Bombardment, barrage, curtain-fire, mines, gas, tanks, machine-guns, hand-grenades - words, words, but they hold the horror of the world.",
  "quoteAuthor": "Erich Maria Remarque",
  "portrait": "images/symbols/armor.png",
  "portraitAlt": "Armor"
 },
 "NODE_TECH_MO_AERODYNAMICS": {
  "quote": "All birds need to fly are the right-shaped wings, the right pressure, and the right angle.",
  "quoteAuthor": "Daniel Bernoulli",
  "portrait": "images/symbols/aerodynamics.png",
  "portraitAlt": "Aerodynamics"
 },
 "NODE_TECH_MO_ROCKETRY": {
  "quote": "A screaming comes across the sky.",
  "quoteAuthor": "Thomas Pynchon",
  "portrait": "images/symbols/rocketry.png",
  "portraitAlt": "Rocketry"
 },
 "NODE_TECH_MO_NUCLEAR_FISSION": {
  "quote": "Scientists are not dependent on the ideas of a single man, but on the combined wisdom of thousands.",
  "quoteAuthor": "Ernest Rutherford",
  "portrait": "images/symbols/nuclear_fission.png",
  "portraitAlt": "Nuclear Fission"
 },
 "NODE_TECH_AQ_FUTURE_TECH": {
  "portrait": "images/symbols/future_tech.png",
  "portraitAlt": ""
 },
 "NODE_TECH_EX_FUTURE_TECH": {
  "portrait": "images/symbols/future_tech.png",
  "portraitAlt": ""
 },
 "NODE_TECH_MO_FUTURE_TECH": {
  "portrait": "images/symbols/future_tech.png",
  "portraitAlt": ""
 }
};
  Object.keys(TECH_MEDIA).forEach(function (k) {
    window.CIVPEDIA_MEDIA[k] = TECH_MEDIA[k];
  });
})();

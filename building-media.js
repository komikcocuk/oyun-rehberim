// Building / Unique Quarter stats, read out of the game's own data the same
// way improvement-media.js does it:
//   */data/constructibles.xml  -> Age, Cost, Description/Tooltip LOC tags, and
//      the UniqueQuarters table (a Quarter is two named Buildings, no cost)
//   progression-trees-*.xml    -> the tech/civic node that unlocks a Building
//
// "effects" is LOC_<TYPE>_DESCRIPTION, NOT _TOOLTIP. The Tooltip only carries
// the 'Effect:' clause, so an Academy read "Has 3 Codex slots" and never
// mentioned its +4 Science; the Description is the game's own Civilopedia text
// and carries the base yields too. Placement sentences ("Must be placed on a
// River") are lifted out of it into "placement" so the rule is stated once.
// Neither string mentions adjacency reliably, so those come from the tables:
//   Constructible_Adjacencies      x Adjacency_YieldChanges   -> "adjacency"
//   Constructible_WarehouseYields  x Warehouse_YieldChanges   -> "warehouse"
//   Constructible_Maintenances                                -> "maintenance"
//   UniqueQuarters.BuildingType1/2                            -> "formedBy"
// Rows flagged RequiresActivation are skipped -- another civ's ability or a
// Pantheon switches those on, the building does not have them by itself.
window.CIVPEDIA_BUILDING_STATS = {
 "BUILDING_PALACE": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "500",
  "effects": "Central Building for a Capital City",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter"
 },
 "BUILDING_CITY_HALL": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "150",
  "effects": "Central Building for a City"
 },
 "BUILDING_ACADEMY": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Mathematics",
  "unlockIcon": "images/symbols/mathematics.png",
  "effects": "+4 [icon:YIELD_SCIENCE] Science. Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. Antiquity Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_ALTAR": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Mysticism",
  "unlockIcon": "images/civics/mysticism.png",
  "effects": "+3 [icon:YIELD_HAPPINESS] Happiness. Provides benefits and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses based on your chosen [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP]. Antiquity Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_AMPHITHEATER": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Engineering",
  "effects": "+4 [icon:YIELD_CULTURE] Culture. Antiquity Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +10% [icon:YIELD_PRODUCTION] Production towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_ARENA": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Military Training",
  "effects": "+4 [icon:YIELD_HAPPINESS] Happiness. Antiquity Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_BLACKSMITH": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Military Training",
  "effects": "+4[icon:YIELD_PRODUCTION] Production. Antiquity Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +1 [icon:YIELD_PRODUCTION] Production on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_GARDEN": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Irrigation",
  "unlockIcon": "images/symbols/irrigation.png",
  "effects": "+3[icon:YIELD_FOOD] Food and +3[icon:YIELD_HAPPINESS] Happiness. Antiquity Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_LIBRARY": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Writing",
  "effects": "+3 [icon:YIELD_SCIENCE] Science. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. Antiquity Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MARKET": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Currency",
  "unlockIcon": "images/symbols/currency.png",
  "effects": "+3 [icon:YIELD_GOLD] Gold. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Antiquity Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MONUMENT": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Masonry",
  "effects": "+3[icon:YIELD_CULTURE] Culture and +2[icon:YIELD_DIPLOMACY] Influence. Antiquity Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_VILLA": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "The Wheel",
  "unlockIcon": "images/symbols/the_wheel.png",
  "effects": "+3[icon:YIELD_HAPPINESS] Happiness and +3[icon:YIELD_DIPLOMACY] Influence. Antiquity Happiness and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_MASTABA": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Scales of Anubis",
  "unlockIcon": "images/civics/egyptian_civics.png",
  "effects": "Egyptian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3[icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Desert tile\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MORTUARY_TEMPLE": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Arrival of Hapi",
  "unlockIcon": "images/civics/egyptian_civics.png",
  "effects": "Egyptian Unique Gold Building. +3[icon:YIELD_GOLD] Gold. Ageless.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Navigable River\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder"
 },
 "BUILDING_ODEON": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Ekklesia",
  "unlockIcon": "images/civics/greek_civics.png",
  "effects": "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_PARTHENON": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Agoge",
  "unlockIcon": "images/civics/greek_civics.png",
  "effects": "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3 [icon:YIELD_CULTURE] Culture. +2 [icon:YIELD_DIPLOMACY] Influence if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_DHARAMSHALA": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Acharya",
  "unlockIcon": "images/civics/mauryan_civics.png",
  "effects": "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_VIHARA": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Acharya",
  "unlockIcon": "images/civics/mauryan_civics.png",
  "effects": "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_JALAW": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Lords of Xibalba",
  "unlockIcon": "images/civics/maya_civics.png",
  "effects": "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_KUH_NAH": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Rain of Chaac",
  "unlockIcon": "images/civics/maya_civics.png",
  "effects": "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +3[icon:YIELD_SCIENCE] Science. +2[icon:YIELD_SCIENCE] Science if placed on [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_BASILICA": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Civis Romanus",
  "unlockIcon": "images/civics/roman_civics.png",
  "effects": "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Diplomacy Building[/TIP]. +3 [icon:YIELD_DIPLOMACY] Influence.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_TEMPLE_OF_JUPITER": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Exercitus Romanus",
  "unlockIcon": "images/civics/roman_civics.png",
  "effects": "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_ANCIENT_BRIDGE": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "100",
  "unlockedBy": "Engineering",
  "effects": "+4 [icon:YIELD_GOLD] Gold. [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_ANCIENT_WALLS": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "60",
  "unlockedBy": "Masonry",
  "effects": "Antiquity Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked."
 },
 "BUILDING_BARRACKS": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "90",
  "unlockedBy": "Bronze Working",
  "unlockIcon": "images/symbols/bronze_working.png",
  "effects": "+3[icon:YIELD_PRODUCTION] Production. Antiquity Military Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards Land Units.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_BATH": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Currency",
  "unlockIcon": "images/symbols/currency.png",
  "effects": "+4[icon:YIELD_FOOD] Food. Antiquity Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed on a River.",
  "maintenance": "2 [icon:YIELD_GOLD] Gold, 2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_LIGHTHOUSE": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "180",
  "unlockedBy": "Navigation",
  "unlockIcon": "images/symbols/navigation.png",
  "effects": "+4 [icon:YIELD_GOLD] Gold. +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Antiquity Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed on a Coast tile. Must be placed on Coast.",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_BRICKYARD": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "55",
  "unlockedBy": "Pottery",
  "effects": "+1 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Mines in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Clay Pits in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Quarries in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Rough terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Wet features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_GRANARY": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "55",
  "unlockedBy": "Agriculture",
  "effects": "+1 [icon:YIELD_FOOD] Food. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_FOOD] Food on Pastures in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plantations in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Desert Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Grassland Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plains Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tropical Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tundra Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Flat terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_SAW_PIT": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "55",
  "unlockedBy": "Animal Husbandry",
  "unlockIcon": "images/symbols/animal_husbandry.png",
  "effects": "+1 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Woodcutters in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Camps in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Vegetated features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_FISHING_QUAY": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "55",
  "unlockedBy": "Agriculture",
  "effects": "+1 [icon:YIELD_FOOD] Food. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_FOOD] Food on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Atolls in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Lotuses in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Reefs in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Coast tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Ocean tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Navigable River tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP]."
 },
 "BUILDING_HARBOR": {
  "age": "Antiquity",
  "kind": "standard",
  "cost": "55",
  "unlockedBy": "Sailing",
  "unlockIcon": "images/symbols/sailing.png",
  "effects": "+1 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Naval Units trained in this Settlement will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location.",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Atolls in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Lotuses in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Reefs in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Coast tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Ocean tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Navigable River tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP]."
 },
 "BUILDING_ARMORER": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Metallurgy",
  "unlockIcon": "images/symbols/metallurgy.png",
  "effects": "+8 [icon:YIELD_PRODUCTION] Production. Exploration Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Horses\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Iron",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_BANK": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Urban Planning",
  "effects": "+8 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_BAZAAR": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "effects": "+6 [icon:YIELD_GOLD] Gold. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Exploration Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_DUNGEON": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Castles",
  "unlockIcon": "images/symbols/castles.png",
  "effects": "+4[icon:YIELD_DIPLOMACY] Influence and +6[icon:YIELD_PRODUCTION] Production. Exploration Diplomacy and Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_GUILDHALL": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Guilds",
  "effects": "+6[icon:YIELD_GOLD] Gold and +6[icon:YIELD_DIPLOMACY] Influence. Exploration Gold and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_HOSPITAL": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Urban Planning",
  "effects": "+8 [icon:YIELD_FOOD] Food. +15% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]. Exploration Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_KILN": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Guilds",
  "effects": "+6[icon:YIELD_CULTURE] Culture. +10% [icon:YIELD_PRODUCTION] Production towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Exploration Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MENAGERIE": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Architecture",
  "unlockIcon": "images/symbols/architecture.png",
  "effects": "+8[icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_HAPPINESS] Happiness on Camps and Pastures. Exploration Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_OBSERVATORY": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Astronomy",
  "unlockIcon": "images/symbols/astronomy.png",
  "effects": "+6 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science per Adjacent Mountain. Exploration Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_SCIENCE] Science for each adjacent Mountain",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_PAVILION": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Architecture",
  "unlockIcon": "images/symbols/architecture.png",
  "effects": "+8 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_TAVERN": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Feudalism",
  "effects": "+6[icon:YIELD_FOOD] Food and +4 [icon:YIELD_HAPPINESS] Happiness. Exploration Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_TEMPLE": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Piety",
  "unlockIcon": "images/civics/piety.png",
  "effects": "+6[icon:YIELD_HAPPINESS] Happiness. Has 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] slot. Allows the creation of [icon:UNIT_MISSIONARY] Missionary Units in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Exploration Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_UNIVERSITY": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Education",
  "unlockIcon": "images/symbols/education.png",
  "effects": "+8 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MADRASA": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Mawla",
  "unlockIcon": "images/civics/abbasid_civics.png",
  "effects": "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +6[icon:YIELD_SCIENCE] Science.",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_SCIENCE] Science for each adjacent Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MOSQUE": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Round City",
  "unlockIcon": "images/civics/abbasid_civics.png",
  "effects": "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness. Unlocks the ability to found a [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_CANDI_BENTAR": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Wayang",
  "unlockIcon": "images/civics/majapahit_civics.png",
  "effects": "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +6[icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Navigable River\n+1 [icon:YIELD_CULTURE] Culture for each adjacent Coast\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MERU": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Aliran Kepercayaan",
  "unlockIcon": "images/civics/majapahit_civics.png",
  "effects": "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "warehouse": "+2 [icon:YIELD_HAPPINESS] Happiness on [icon:TERRAIN_NATURAL_WONDER] Natural Wonder tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_GRISTMILL": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "175",
  "unlockedBy": "Machinery",
  "unlockIcon": "images/symbols/machinery.png",
  "effects": "+4 [icon:YIELD_FOOD] Food. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Food Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_FOOD] Food on Pastures in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plantations in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Desert Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Grassland Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plains Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tropical Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tundra Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Flat terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]",
  "placement": "Must be placed on a River."
 },
 "BUILDING_MEDIEVAL_BRIDGE": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Feudalism",
  "effects": "+4[icon:YIELD_GOLD] Gold. Exploration [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MEDIEVAL_WALLS": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "150",
  "unlockedBy": "Castles",
  "unlockIcon": "images/symbols/castles.png",
  "effects": "Exploration Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked."
 },
 "BUILDING_SAWMILL": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "175",
  "unlockedBy": "Machinery",
  "unlockIcon": "images/symbols/machinery.png",
  "effects": "+3 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Production Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Woodcutters in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Camps in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Vegetated features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_STONECUTTER": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "175",
  "effects": "+3 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Production Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Mines in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Clay Pits in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Quarries in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Rough terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Wet features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_SHIPYARD": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "380",
  "unlockedBy": "Shipbuilding",
  "unlockIcon": "images/symbols/shipbuilding.png",
  "effects": "+8 [icon:YIELD_PRODUCTION] Production. Exploration Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Hardwood\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Niter",
  "placement": "Must be placed on Coast adjacent to land.",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_WHARF": {
  "age": "Exploration",
  "kind": "standard",
  "cost": "200",
  "unlockedBy": "Cartography",
  "effects": "+6[icon:YIELD_FOOD] Food. Increases the number of [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] that may be assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] by 2. Exploration Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed on Coast or a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP].",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_ANJUVANNAM": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Nagaram",
  "unlockIcon": "images/civics/chola_civics.png",
  "effects": "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold and Military Building[/TIP]. +6[icon:YIELD_GOLD] Gold. +50%[icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed adjacent to Coast.",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MANIGRAMAM": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Nagaram",
  "unlockIcon": "images/civics/chola_civics.png",
  "effects": "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed adjacent to Coast."
 },
 "BUILDING_BAILEY": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Consuetudines et Justicie",
  "unlockIcon": "images/civics/norman_civics.png",
  "effects": "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP] and Fortification. +6 [icon:YIELD_CULTURE] Culture. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Fortification [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MOTTE": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Consuetudines et Justicie",
  "unlockIcon": "images/civics/norman_civics.png",
  "effects": "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP] and Fortification. +6[icon:YIELD_HAPPINESS] Happiness. +4[icon:YIELD_HAPPINESS] Happiness if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "3 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_CASA_CONSISTORIAL": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Council of the Indies",
  "unlockIcon": "images/civics/spanish_civics.png",
  "effects": "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +6[icon:YIELD_CULTURE] Culture. Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
  "maintenance": "3 [icon:YIELD_GOLD] Gold, 3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_CASA_DE_CONTRATACION": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "290",
  "unlockedBy": "Council of the Indies",
  "unlockIcon": "images/civics/spanish_civics.png",
  "effects": "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +6[icon:YIELD_GOLD] Gold. Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_AIRFIELD": {
  "age": "Modern",
  "kind": "standard",
  "cost": "840",
  "unlockedBy": "Flight",
  "unlockIcon": "images/symbols/flight.png",
  "effects": "+9[icon:YIELD_PRODUCTION] Production. Modern Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Required to train [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Packed [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] have +1 Intercept Range. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MILITARY_ACADEMY": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "unlockedBy": "Military Science",
  "effects": "+9[icon:YIELD_PRODUCTION] Production. [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Grants a free [icon:NAR_REW_PROMOTION] [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Level[/TIP] to new [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP] trained in this Settlement.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_CANNERY": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "unlockedBy": "Mass Production",
  "effects": "+9 [icon:YIELD_FOOD] Food. +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]. Modern Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:RADIAL_RESOURCES] Fish",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_CITY_PARK": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "effects": "+9 [icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Modern Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_DEPARTMENT_STORE": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Urbanization",
  "effects": "+12 [icon:YIELD_HAPPINESS] Happiness. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Modern Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_LABORATORY": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Electricity",
  "effects": "+12 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:RADIAL_RESOURCES] Quinine",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_LAUNCH_PAD": {
  "age": "Modern",
  "kind": "standard",
  "cost": "840",
  "unlockedBy": "Rocketry",
  "effects": "+24 [icon:YIELD_SCIENCE] Science. Unlocks the [icon:DEFAULT_PROJECT] Launch Satellite [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MUSEUM": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "unlockedBy": "Natural History",
  "unlockIcon": "images/symbols/natural_history.png",
  "effects": "+9 [icon:YIELD_CULTURE] Culture. Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] slots. Modern Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_OPERA_HOUSE": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Urbanization",
  "effects": "+12[icon:YIELD_CULTURE] Culture. +6[icon:YIELD_DIPLOMACY] Influence. Modern Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Mountain\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_RADIO_STATION": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Radio",
  "effects": "+9[icon:YIELD_HAPPINESS] Happiness and +9[icon:YIELD_DIPLOMACY] Influence. Modern Diplomacy and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:TERRAIN_NATURAL_WONDER] Natural Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_RAIL_STATION": {
  "age": "Modern",
  "kind": "standard",
  "cost": "840",
  "unlockedBy": "Industrialization",
  "unlockIcon": "images/symbols/industrialization.png",
  "effects": "+9 [icon:YIELD_GOLD] Gold, +9 [icon:YIELD_PRODUCTION] Production. +10% [icon:YIELD_PRODUCTION] Production towards training Units in [icon:YIELD_CITIES] Cities with a Railroad. When built, upgrades any Roads to [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that also have a Rail Station into Railroads. Railroads allow Units to move from one [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Rail Station to another. Modern Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_SCHOOLHOUSE": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "unlockedBy": "Academics",
  "unlockIcon": "images/symbols/academics.png",
  "effects": "+9[icon:YIELD_SCIENCE] Science. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_SCIENCE] Science for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_STOCK_EXCHANGE": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Computation",
  "effects": "+12 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Modern Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_TENEMENT": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Radio",
  "effects": "+12 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Modern Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Coast\n+1 [icon:YIELD_FOOD] Food for each adjacent Navigable River\n+1 [icon:YIELD_FOOD] Food for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_RAILYARD": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Captains of Industry",
  "unlockIcon": "images/civics/american_civics.png",
  "effects": "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:CITY_UNIQUE_QUARTER] Quarter\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_STEEL_MILL": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Yankee Ingenuity",
  "unlockIcon": "images/civics/american_civics.png",
  "effects": "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_GINKO": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Oath in Five Articles",
  "unlockIcon": "images/civics/meiji_civics.png",
  "effects": "Meiji Japan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9[icon:YIELD_GOLD] Gold.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_JUKOGYO": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Bunmei Kaika",
  "unlockIcon": "images/civics/meiji_civics.png",
  "effects": "Meiji Japan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent Coast\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_FORMAL_GARDEN": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Voie Triomphale",
  "unlockIcon": "images/civics/french_civics.png",
  "effects": "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9[icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_SALON": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Belle Époque",
  "unlockIcon": "images/civics/french_civics.png",
  "effects": "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_HAPPINESS] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_CATEDRAL": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Planes Políticos",
  "unlockIcon": "images/civics/mexico_civics.png",
  "effects": "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_Happiness] Happiness.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_PORTAL_DE_MERCADERES": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Planes Políticos",
  "unlockIcon": "images/civics/mexico_civics.png",
  "effects": "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9[icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_EXAMINATION_HALL": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Kang Xi Tax Reformation",
  "unlockIcon": "images/civics/qing_civics.png",
  "effects": "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +9[icon:YIELD_SCIENCE] Science.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_MONEY_SHOP": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Open Customs",
  "unlockIcon": "images/civics/qing_civics.png",
  "effects": "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9[icon:YIELD_GOLD] Gold.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_FACTORY": {
  "age": "Modern",
  "kind": "standard",
  "cost": "780",
  "unlockedBy": "Mass Production",
  "effects": "+12 [icon:YIELD_PRODUCTION] Production. Allows one type of [icon:RADIAL_RESOURCES] Factory Resource to be assigned to this Settlement. +1 [icon:RADIAL_RESOURCES] Resource Capacity in this Settlement. Modern Resource Building. Must be built in a Settlement connected to the [icon:NOTIFICATION_SELECT_CAPITAL] Capital by Railroad. Can be purchased in [icon:YIELD_TOWNS] Towns.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_PRODUCTION] Production for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be built in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] connected to the [icon:NOTIFICATION_SELECT_CAPITAL] Capital by Railroad. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_GROCER": {
  "age": "Modern",
  "kind": "standard",
  "cost": "535",
  "effects": "+4 [icon:YIELD_FOOD] Food. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Food Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_FOOD] Food on Camps in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Atolls in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Lotuses in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Reefs in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Pastures in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plantations in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Desert Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Grassland Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Plains Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tropical Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Tundra Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Navigable River tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Flat terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Coast tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_FOOD] Food on Ocean tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_IRONWORKS": {
  "age": "Modern",
  "kind": "standard",
  "cost": "535",
  "unlockedBy": "Steam Engine",
  "unlockIcon": "images/symbols/steam_engine.png",
  "effects": "+4 [icon:YIELD_PRODUCTION] Production. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Production Building[/TIP].",
  "warehouse": "+1 [icon:YIELD_PRODUCTION] Production on Mines in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Rough terrain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Quarries in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Woodcutters in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Vegetated features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Wet features in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Oil Rigs in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]\n+1 [icon:YIELD_PRODUCTION] Production on Mountain tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]"
 },
 "BUILDING_MODERN_BRIDGE": {
  "age": "Modern",
  "kind": "standard",
  "cost": "535",
  "unlockedBy": "Urbanization",
  "effects": "+6 [icon:YIELD_GOLD] Gold. Modern [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_PORT": {
  "age": "Modern",
  "kind": "standard",
  "cost": "420",
  "unlockedBy": "Steam Engine",
  "unlockIcon": "images/symbols/steam_engine.png",
  "effects": "+9[icon:YIELD_GOLD] Gold. +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Modern Gold Building. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Coast\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River\n+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed on Coast adjacent to land. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_DEFENSIVE_FORTIFICATIONS": {
  "age": "Modern",
  "kind": "standard",
  "cost": "535",
  "unlockedBy": "Military Science",
  "effects": "Modern Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked."
 },
 "QUARTER_ACROPOLIS": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Odeon + Parthenon",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Odeon",
   "Parthenon"
  ],
  "effects": "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Odeon and Parthenon in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_GOLD] Gold on the Parthenon for each [icon:CITYSTATE] City-State you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
 },
 "QUARTER_FORUM": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Basilica + Temple of Jupiter",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Basilica",
   "Temple of Jupiter"
  ],
  "effects": "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Basilica and Temple of Jupiter in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1[icon:YIELD_CULTURE] Culture for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] in the [icon:GOVERNMENT] Government."
 },
 "QUARTER_MATHA": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Dharamshala + Vihara",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Dharamshala",
   "Vihara"
  ],
  "effects": "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Dharamshala and Vihara in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +10%[icon:YIELD_HAPPINESS] Happiness in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "QUARTER_NECROPOLIS": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Mastaba + Mortuary Temple",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Mastaba",
   "Mortuary Temple"
  ],
  "effects": "Egyptian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Mastaba and Mortuary Temple in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. Grants 100[icon:YIELD_GOLD] Gold (on Standard Speed) when any [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonder[/TIP] is completed in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "QUARTER_UWAYBIL_KUH": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Jalaw + K'uh Nah",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Jalaw",
   "K'uh Nah"
  ],
  "effects": "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Jalaw and K'uh Nah in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. Every time you research a [icon:RADIAL_TECH] [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP], this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gains[icon:YIELD_PRODUCTION] Production equal to 5% of its cost."
 },
 "QUARTER_DONJON": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Bailey + Motte",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Bailey",
   "Motte"
  ],
  "effects": "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Bailey and Motte in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +10% [icon:YIELD_PRODUCTION] Production towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Cavalry Units[/TIP]. Receive a free [icon:UNIT_CHEVALER] Chevaler Unit when completed."
 },
 "QUARTER_ULEMA": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Madrasa + Mosque",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Madrasa",
   "Mosque"
  ],
  "effects": "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Madrasa and Mosque in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1 [icon:YIELD_SCIENCE] Science to all [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]."
 },
 "QUARTER_PLAZA": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Casa Consistorial + Casa de Contratación",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Casa Consistorial",
   "Casa de Contratación"
  ],
  "effects": "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Casa Consistorial and Casa de Contratación in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2[icon:YIELD_GOLD] Gold in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
 },
 "QUARTER_PURA": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Candi Bentar + Meru",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Candi Bentar",
   "Meru"
  ],
  "effects": "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Candi Bentar and Meru in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +10% [icon:YIELD_GOLD] Gold towards converting a [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP] to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. Receive 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] when completed."
 },
 "QUARTER_FIVE_HUNDRED_LORDS": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Manigramam + Anjuvannam",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Manigramam",
   "Anjuvannam"
  ],
  "effects": "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Anjuvannam and Manigramam in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +5 [icon:TRADE_ROUTE] Land [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP] and +15 [icon:TRADE_ROUTE] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]."
 },
 "QUARTER_INDUSTRIAL_PARK": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Railyard + Steel Mill",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Railyard",
   "Steel Mill"
  ],
  "effects": "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Railyard and Steel Mill in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] from [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resources[/TIP] assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "QUARTER_AVENUE": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Jardin à la Française + Salon",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Jardin à la Française",
   "Salon"
  ],
  "effects": "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Jardin à la Française and Salon in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]."
 },
 "QUARTER_ZAIBATSU": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Ginkō + Jukogyo",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Ginkō",
   "Jukogyo"
  ],
  "effects": "Meiji Japan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Ginkō and Jukogyo in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1 [icon:YIELD_GOLD] Gold and [icon:YIELD_PRODUCTION] Production on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in adjacent [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "QUARTER_ZOCALO": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Catedral + Portal de Mercaderes",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Catedral",
   "Portal de Mercaderes"
  ],
  "effects": "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Catedral and Portal de Mercaderes in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_CULTURE] Culture for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] Government."
 },
 "QUARTER_HUIGUAN": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Shiguan + Qianzhuang",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Shiguan",
   "Qianzhuang"
  ],
  "effects": "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Qianzhuang and Shiguan in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +25%[icon:YIELD_DIPLOMACY] Influence in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "QUARTER_EKALLU": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Citadel + Royal Library",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Citadel",
   "Royal Library"
  ],
  "effects": "Assyrian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Royal Library and Citadel in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_PRODUCTION] Production for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Codex[/TIP] on display in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "BUILDING_CITADEL": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Birtūtu",
  "unlockIcon": "images/civics/assyria_civics.png",
  "effects": "Assyrian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production and Fortification Building[/TIP]. +3 [icon:YIELD_PRODUCTION] Production. +2 [icon:YIELD_HAPPINESS] Happiness if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_ROYAL_LIBRARY": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Tupšarrūtu",
  "unlockIcon": "images/civics/assyria_civics.png",
  "effects": "Assyrian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +3 [icon:YIELD_SCIENCE] Science. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for Rivers and +1 [icon:YIELD_SCIENCE] Science Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_SCIENCE] Science for each adjacent Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent River",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "QUARTER_PUNIC_PORT": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Cothon + Dockyard",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Cothon",
   "Dockyard"
  ],
  "effects": "Carthaginian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Cothon and Dockyard in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Receive an additional +3 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] when placed in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital."
 },
 "BUILDING_COTHON": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Shipsheds",
  "unlockIcon": "images/civics/carthage_civics.png",
  "effects": "Carthaginian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +2 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production Adjacency for Coast, [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "placement": "Must be placed on Coast.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent: Coastal Marine Terrain, Navigable River Terrain, Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness, 2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_DOCKYARD": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Wisdom of Tanit",
  "unlockIcon": "images/civics/carthage_civics.png",
  "effects": "Carthaginian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +2 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_FOOD] Food Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "placement": "Must be placed on Coast.",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent: Urban District, Resource, Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness"
 },
 "QUARTER_DRAGON_TEMPLE": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Lecture Hall + Pagoda",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Lecture Hall",
   "Pagoda"
  ],
  "effects": "Silla [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Lecture Hall and Pagoda in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1 [icon:YIELD_GOLD] Gold for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]."
 },
 "BUILDING_LECTURE_HALL": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Kolp'um",
  "unlockIcon": "images/civics/silla_civics.png",
  "effects": "Silla [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3 [icon:YIELD_CULTURE] Culture. +1[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness, 2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_PAGODA": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "135",
  "unlockedBy": "Kolp'um",
  "unlockIcon": "images/civics/silla_civics.png",
  "effects": "Silla [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3 [icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_DIPLOMACY] Influence Adjacency for Natural Wonders, Mountains, and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_DIPLOMACY] Influence for each adjacent: Mountainous Terrain, Natural Wonder, Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "QUARTER_TOFI_A": {
  "age": "Antiquity",
  "kind": "quarter",
  "unlockedBy": "Langi + Vaikaukau",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Langi",
   "Vaikaukau"
  ],
  "effects": "Tongan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Langi and Vaikaukau in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_CULTURE] Culture for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you have to a [icon:CITYSTATE] City-State."
 },
 "BUILDING_LANGI": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "90",
  "unlockedBy": "ʻEsi Maka Faakinanga",
  "unlockIcon": "images/civics/tonga_civics.png",
  "effects": "Tongan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_FOOD] Food Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent: Resource, Wonder",
  "maintenance": "2 [icon:YIELD_HAPPINESS] Happiness, 2 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_VAI_KAUKAU": {
  "age": "Antiquity",
  "kind": "unique",
  "cost": "120",
  "unlockedBy": "Lapita Origins",
  "unlockIcon": "images/civics/tonga_civics.png",
  "effects": "Tongan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Coast and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent: Coastal Marine Terrain, Wonder",
  "maintenance": "2 [icon:YIELD_GOLD] Gold"
 },
 "QUARTER_HAVEN": {
  "age": "Exploration",
  "kind": "quarter",
  "unlockedBy": "Naval Arsenal + Naval Station",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Naval Arsenal",
   "Naval Station"
  ],
  "effects": "Republic of Pirates [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Naval Station and Naval Arsenal in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +1 [icon:YIELD_GOLD] Gold for every [icon:TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_RESOURCES_TOOLTIP]Treasure Resource[/TIP] in your Pool. Friendly [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] receive +50 [icon:Action_Heal] Healing in this tile."
 },
 "BUILDING_NAVAL_ARSENAL": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "240",
  "unlockedBy": "Ports of Call",
  "unlockIcon": "images/civics/republic_of_pirates_civics.png",
  "effects": "Republic of Pirates [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +4[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "placement": "Must be placed on Coast.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent: Resource, Wonder",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_NAVAL_STATION": {
  "age": "Exploration",
  "kind": "unique",
  "cost": "280",
  "unlockedBy": "Articles of Agreement",
  "unlockIcon": "images/civics/republic_of_pirates_civics.png",
  "effects": "Republic of Pirates [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +5[icon:YIELD_PRODUCTION] Production. +1[icon:YIELD_PRODUCTION] Production Adjacency for Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Has no [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP].",
  "placement": "Must be placed on Coast.",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent: Military Constructible, Gold Constructible, Wonder",
  "maintenance": "3 [icon:YIELD_HAPPINESS] Happiness"
 },
 "QUARTER_FINANCIAL_CENTRE": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Royal Exchange + Manufactory",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Royal Exchange",
   "Manufactory"
  ],
  "effects": "British [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Manufactory and Royal Exchange in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +2 [icon:YIELD_GOLD] Gold and [icon:YIELD_SCIENCE] Science for every connected [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "BUILDING_ROYAL_EXCHANGE": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Pax Britannica",
  "unlockIcon": "images/civics/great_britain_civics.png",
  "effects": "British [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent: Quarter, Wonder",
  "maintenance": "0 [icon:YIELD_GOLD] Gold, 4 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_MANUFACTORY": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Pax Britannica",
  "unlockIcon": "images/civics/great_britain_civics.png",
  "effects": "British [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1 [icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent: Resource, Wonder\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River Terrain",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness, 0 [icon:YIELD_GOLD] Gold"
 },
 "QUARTER_SEOWON": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Confucian Academy + Printing House",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Confucian Academy",
   "Printing House"
  ],
  "effects": "Joseon [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Confucian Academy and Printing House in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] receives +10% of its [icon:YIELD_PRODUCTION] Production as [icon:YIELD_CULTURE] Culture. If constructed in a [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP] the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] receives +1 [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP]."
 },
 "BUILDING_CONFUCIAN_ACADEMY": {
  "age": "Modern",
  "kind": "unique",
  "cost": "650",
  "unlockedBy": "Seongnihak",
  "unlockIcon": "images/civics/joseon_civics.png",
  "effects": "Joseon [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for [icon:CITY_UNIMPROVED] Mountains and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but cannot be built in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent: Mountainous Terrain, Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold, 0 [icon:YIELD_HAPPINESS] Happiness"
 },
 "BUILDING_PRINTING_HOUSE": {
  "age": "Modern",
  "kind": "unique",
  "cost": "650",
  "unlockedBy": "Seonbi",
  "unlockIcon": "images/civics/joseon_civics.png",
  "effects": "Joseon [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +9 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_QUARTERS_TOOLTIP]Quarters[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but cannot be built in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
  "adjacency": "+1 [icon:YIELD_PRODUCTION] Production for each adjacent: Quarter, Wonder",
  "maintenance": "4 [icon:YIELD_HAPPINESS] Happiness, 4 [icon:YIELD_GOLD] Gold"
 },
 "QUARTER_KULLIYE": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Cami + Hammam",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Cami",
   "Hammam"
  ],
  "effects": "Ottoman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Cami and Hammam in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +3 [icon:YIELD_CULTURE] Culture and +2 [icon:YIELD_GOLD] Gold on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]."
 },
 "BUILDING_CAMII": {
  "age": "Modern",
  "kind": "unique",
  "cost": "650",
  "unlockedBy": "Lâle Devri",
  "unlockIcon": "images/civics/ottomans_civics.png",
  "effects": "Ottoman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9 [icon:YIELD_CULTURE] Culture. +1[icon:YIELD_HAPPINESS] Happiness Adjacency with Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and +1[icon:YIELD_CULTURE] Culture Adjacency with [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] slots.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Wonder\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Science Constructible",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_HAMMAM": {
  "age": "Modern",
  "kind": "unique",
  "cost": "650",
  "unlockedBy": "Lâle Devri",
  "unlockIcon": "images/civics/ottomans_civics.png",
  "effects": "Ottoman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9 [icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_GOLD] Gold Adjacency with Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and +1[icon:YIELD_HAPPINESS] Happiness Adjacency with [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Culture Constructible\n+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Wonder"
 },
 "QUARTER_BAQ": {
  "age": "Modern",
  "kind": "quarter",
  "unlockedBy": "Ghahve Khane + Takyeh",
  "unlockIcon": "images/icons/city_unique_quarter.png",
  "formedBy": [
   "Ghahve Khane",
   "Takyeh"
  ],
  "effects": "Qajar [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Unique Quarter[/TIP]. Created by constructing the Ghahve Khane and Takyeh in the same [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. +10% [icon:YIELD_CULTURE] Culture and [icon:YIELD_DIPLOMACY] Influence in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] when in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
 },
 "BUILDING_GHAHVE_KHANE": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "Twelve Gates",
  "unlockIcon": "images/civics/qajar_civics.png",
  "effects": "Qajar [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Food Building[/TIP]. +9 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent: Gold Constructible, Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 },
 "BUILDING_TAKYEH": {
  "age": "Modern",
  "kind": "unique",
  "cost": "600",
  "unlockedBy": "The Sun Throne",
  "unlockIcon": "images/civics/qajar_civics.png",
  "effects": "Qajar [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_DIPLOMACY] Influence Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
  "adjacency": "+1 [icon:YIELD_DIPLOMACY] Influence for each adjacent: Culture Constructible, Wonder",
  "maintenance": "4 [icon:YIELD_GOLD] Gold"
 }
};

(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  // Building art from the wiki's copies of the game's own icons (the game
  // textures are the same undecodable format as everywhere else). Unique
  // Quarters are left out on purpose: the game gives all of them one shared
  // quarter glyph, so they keep the portrait they already had.
  var BLD_MEDIA = {
  "BUILDING_PALACE": {
    "portrait": "images/buildings/palace.png",
    "portraitAlt": "Palace"
  },
  "BUILDING_CITY_HALL": {
    "portrait": "images/buildings/city_hall.png",
    "portraitAlt": "City Hall"
  },
  "BUILDING_ACADEMY": {
    "portrait": "images/buildings/academy.png",
    "portraitAlt": "Academy"
  },
  "BUILDING_ALTAR": {
    "portrait": "images/buildings/altar.png",
    "portraitAlt": "Altar"
  },
  "BUILDING_AMPHITHEATER": {
    "portrait": "images/buildings/amphitheater.png",
    "portraitAlt": "Amphitheater"
  },
  "BUILDING_ARENA": {
    "portrait": "images/buildings/arena.png",
    "portraitAlt": "Arena"
  },
  "BUILDING_BLACKSMITH": {
    "portrait": "images/buildings/blacksmith.png",
    "portraitAlt": "Blacksmith"
  },
  "BUILDING_GARDEN": {
    "portrait": "images/buildings/garden.png",
    "portraitAlt": "Garden"
  },
  "BUILDING_LIBRARY": {
    "portrait": "images/buildings/library.png",
    "portraitAlt": "Library"
  },
  "BUILDING_MARKET": {
    "portrait": "images/buildings/market.png",
    "portraitAlt": "Market"
  },
  "BUILDING_MONUMENT": {
    "portrait": "images/buildings/monument.png",
    "portraitAlt": "Monument"
  },
  "BUILDING_VILLA": {
    "portrait": "images/buildings/villa.png",
    "portraitAlt": "Villa"
  },
  "BUILDING_MASTABA": {
    "portrait": "images/buildings/mastaba.png",
    "portraitAlt": "Mastaba"
  },
  "BUILDING_MORTUARY_TEMPLE": {
    "portrait": "images/buildings/mortuary_temple.png",
    "portraitAlt": "Mortuary Temple"
  },
  "BUILDING_ODEON": {
    "portrait": "images/buildings/odeon.png",
    "portraitAlt": "Odeon"
  },
  "BUILDING_PARTHENON": {
    "portrait": "images/buildings/parthenon.png",
    "portraitAlt": "Parthenon"
  },
  "BUILDING_DHARAMSHALA": {
    "portrait": "images/buildings/dharamshala.png",
    "portraitAlt": "Dharamshala"
  },
  "BUILDING_VIHARA": {
    "portrait": "images/buildings/vihara.png",
    "portraitAlt": "Vihara"
  },
  "BUILDING_JALAW": {
    "portrait": "images/buildings/jalaw.png",
    "portraitAlt": "Jalaw"
  },
  "BUILDING_KUH_NAH": {
    "portrait": "images/buildings/k_uh_nah.png",
    "portraitAlt": "K'uh Nah"
  },
  "BUILDING_BASILICA": {
    "portrait": "images/buildings/basilica.png",
    "portraitAlt": "Basilica"
  },
  "BUILDING_TEMPLE_OF_JUPITER": {
    "portrait": "images/buildings/temple_of_jupiter.png",
    "portraitAlt": "Temple of Jupiter"
  },
  "BUILDING_ANCIENT_BRIDGE": {
    "portrait": "images/buildings/ancient_bridge.png",
    "portraitAlt": "Ancient Bridge"
  },
  "BUILDING_ANCIENT_WALLS": {
    "portrait": "images/buildings/ancient_walls.png",
    "portraitAlt": "Ancient Walls"
  },
  "BUILDING_BARRACKS": {
    "portrait": "images/buildings/barracks.png",
    "portraitAlt": "Barracks"
  },
  "BUILDING_BATH": {
    "portrait": "images/buildings/bath.png",
    "portraitAlt": "Bath"
  },
  "BUILDING_LIGHTHOUSE": {
    "portrait": "images/buildings/lighthouse.png",
    "portraitAlt": "Lighthouse"
  },
  "BUILDING_BRICKYARD": {
    "portrait": "images/buildings/brickyard.png",
    "portraitAlt": "Brickyard"
  },
  "BUILDING_GRANARY": {
    "portrait": "images/buildings/granary.png",
    "portraitAlt": "Granary"
  },
  "BUILDING_SAW_PIT": {
    "portrait": "images/buildings/saw_pit.png",
    "portraitAlt": "Saw Pit"
  },
  "BUILDING_FISHING_QUAY": {
    "portrait": "images/buildings/fishing_quay.png",
    "portraitAlt": "Fishing Quay"
  },
  "BUILDING_HARBOR": {
    "portrait": "images/buildings/harbor.png",
    "portraitAlt": "Harbor"
  },
  "BUILDING_ARMORER": {
    "portrait": "images/buildings/armorer.png",
    "portraitAlt": "Armorer"
  },
  "BUILDING_BANK": {
    "portrait": "images/buildings/bank.png",
    "portraitAlt": "Bank"
  },
  "BUILDING_BAZAAR": {
    "portrait": "images/buildings/bazaar.png",
    "portraitAlt": "Bazaar"
  },
  "BUILDING_DUNGEON": {
    "portrait": "images/buildings/dungeon.png",
    "portraitAlt": "Dungeon"
  },
  "BUILDING_GUILDHALL": {
    "portrait": "images/buildings/guildhall.png",
    "portraitAlt": "Guildhall"
  },
  "BUILDING_HOSPITAL": {
    "portrait": "images/buildings/hospital.png",
    "portraitAlt": "Hospital"
  },
  "BUILDING_KILN": {
    "portrait": "images/buildings/kiln.png",
    "portraitAlt": "Kiln"
  },
  "BUILDING_MENAGERIE": {
    "portrait": "images/buildings/menagerie.png",
    "portraitAlt": "Menagerie"
  },
  "BUILDING_OBSERVATORY": {
    "portrait": "images/buildings/observatory.png",
    "portraitAlt": "Observatory"
  },
  "BUILDING_PAVILION": {
    "portrait": "images/buildings/pavilion.png",
    "portraitAlt": "Pavilion"
  },
  "BUILDING_TAVERN": {
    "portrait": "images/buildings/inn.png",
    "portraitAlt": "Inn"
  },
  "BUILDING_TEMPLE": {
    "portrait": "images/buildings/temple.png",
    "portraitAlt": "Temple"
  },
  "BUILDING_UNIVERSITY": {
    "portrait": "images/buildings/university.png",
    "portraitAlt": "University"
  },
  "BUILDING_MADRASA": {
    "portrait": "images/buildings/madrasa.png",
    "portraitAlt": "Madrasa"
  },
  "BUILDING_MOSQUE": {
    "portrait": "images/buildings/mosque.png",
    "portraitAlt": "Mosque"
  },
  "BUILDING_CANDI_BENTAR": {
    "portrait": "images/buildings/candi_bentar.png",
    "portraitAlt": "Candi Bentar"
  },
  "BUILDING_MERU": {
    "portrait": "images/buildings/meru.png",
    "portraitAlt": "Meru"
  },
  "BUILDING_GRISTMILL": {
    "portrait": "images/buildings/gristmill.png",
    "portraitAlt": "Gristmill"
  },
  "BUILDING_MEDIEVAL_BRIDGE": {
    "portrait": "images/buildings/medieval_bridge.png",
    "portraitAlt": "Medieval Bridge"
  },
  "BUILDING_MEDIEVAL_WALLS": {
    "portrait": "images/buildings/medieval_walls.png",
    "portraitAlt": "Medieval Walls"
  },
  "BUILDING_SAWMILL": {
    "portrait": "images/buildings/sawmill.png",
    "portraitAlt": "Sawmill"
  },
  "BUILDING_STONECUTTER": {
    "portrait": "images/buildings/stonecutter.png",
    "portraitAlt": "Stonecutter"
  },
  "BUILDING_SHIPYARD": {
    "portrait": "images/buildings/shipyard.png",
    "portraitAlt": "Shipyard"
  },
  "BUILDING_WHARF": {
    "portrait": "images/buildings/wharf.png",
    "portraitAlt": "Wharf"
  },
  "BUILDING_ANJUVANNAM": {
    "portrait": "images/buildings/anjuvannam.png",
    "portraitAlt": "Anjuvannam"
  },
  "BUILDING_MANIGRAMAM": {
    "portrait": "images/buildings/manigramam.png",
    "portraitAlt": "Manigramam"
  },
  "BUILDING_BAILEY": {
    "portrait": "images/buildings/bailey.png",
    "portraitAlt": "Bailey"
  },
  "BUILDING_MOTTE": {
    "portrait": "images/buildings/motte.png",
    "portraitAlt": "Motte"
  },
  "BUILDING_CASA_CONSISTORIAL": {
    "portrait": "images/buildings/casa_consistorial.png",
    "portraitAlt": "Casa Consistorial"
  },
  "BUILDING_CASA_DE_CONTRATACION": {
    "portrait": "images/buildings/casa_de_contratacion.png",
    "portraitAlt": "Casa de Contratación"
  },
  "BUILDING_AIRFIELD": {
    "portrait": "images/buildings/aerodrome.png",
    "portraitAlt": "Aerodrome"
  },
  "BUILDING_MILITARY_ACADEMY": {
    "portrait": "images/buildings/military_academy.png",
    "portraitAlt": "Military Academy"
  },
  "BUILDING_CANNERY": {
    "portrait": "images/buildings/cannery.png",
    "portraitAlt": "Cannery"
  },
  "BUILDING_CITY_PARK": {
    "portrait": "images/buildings/city_park.png",
    "portraitAlt": "City Park"
  },
  "BUILDING_DEPARTMENT_STORE": {
    "portrait": "images/buildings/department_store.png",
    "portraitAlt": "Department Store"
  },
  "BUILDING_LABORATORY": {
    "portrait": "images/buildings/laboratory.png",
    "portraitAlt": "Laboratory"
  },
  "BUILDING_LAUNCH_PAD": {
    "portrait": "images/buildings/launch_pad.png",
    "portraitAlt": "Launch Pad"
  },
  "BUILDING_MUSEUM": {
    "portrait": "images/buildings/museum.png",
    "portraitAlt": "Museum"
  },
  "BUILDING_OPERA_HOUSE": {
    "portrait": "images/buildings/opera_house.png",
    "portraitAlt": "Opera House"
  },
  "BUILDING_RADIO_STATION": {
    "portrait": "images/buildings/radio_station.png",
    "portraitAlt": "Radio Station"
  },
  "BUILDING_RAIL_STATION": {
    "portrait": "images/buildings/rail_station.png",
    "portraitAlt": "Rail Station"
  },
  "BUILDING_SCHOOLHOUSE": {
    "portrait": "images/buildings/schoolhouse.png",
    "portraitAlt": "Schoolhouse"
  },
  "BUILDING_STOCK_EXCHANGE": {
    "portrait": "images/buildings/stock_exchange.png",
    "portraitAlt": "Stock Exchange"
  },
  "BUILDING_TENEMENT": {
    "portrait": "images/buildings/tenement.png",
    "portraitAlt": "Tenement"
  },
  "BUILDING_RAILYARD": {
    "portrait": "images/buildings/railyard.png",
    "portraitAlt": "Railyard"
  },
  "BUILDING_STEEL_MILL": {
    "portrait": "images/buildings/steel_mill.png",
    "portraitAlt": "Steel Mill"
  },
  "BUILDING_GINKO": {
    "portrait": "images/buildings/ginko.png",
    "portraitAlt": "Ginkō"
  },
  "BUILDING_JUKOGYO": {
    "portrait": "images/buildings/jukogyo.png",
    "portraitAlt": "Jukogyo"
  },
  "BUILDING_FORMAL_GARDEN": {
    "portrait": "images/buildings/jardin_a_la_francaise.png",
    "portraitAlt": "Jardin à la Française"
  },
  "BUILDING_SALON": {
    "portrait": "images/buildings/salon.png",
    "portraitAlt": "Salon"
  },
  "BUILDING_CATEDRAL": {
    "portrait": "images/buildings/catedral.png",
    "portraitAlt": "Catedral"
  },
  "BUILDING_PORTAL_DE_MERCADERES": {
    "portrait": "images/buildings/portal_de_mercaderes.png",
    "portraitAlt": "Portal de Mercaderes"
  },
  "BUILDING_EXAMINATION_HALL": {
    "portrait": "images/buildings/shiguan.png",
    "portraitAlt": "Shiguan"
  },
  "BUILDING_MONEY_SHOP": {
    "portrait": "images/buildings/qianzhuang.png",
    "portraitAlt": "Qianzhuang"
  },
  "BUILDING_FACTORY": {
    "portrait": "images/buildings/factory.png",
    "portraitAlt": "Factory"
  },
  "BUILDING_GROCER": {
    "portrait": "images/buildings/grocer.png",
    "portraitAlt": "Grocer"
  },
  "BUILDING_IRONWORKS": {
    "portrait": "images/buildings/ironworks.png",
    "portraitAlt": "Ironworks"
  },
  "BUILDING_MODERN_BRIDGE": {
    "portrait": "images/buildings/modern_bridge.png",
    "portraitAlt": "Modern Bridge"
  },
  "BUILDING_PORT": {
    "portrait": "images/buildings/port.png",
    "portraitAlt": "Port"
  },
  "BUILDING_DEFENSIVE_FORTIFICATIONS": {
    "portrait": "images/buildings/defensive_fortifications.png",
    "portraitAlt": "Defensive Fortifications"
  },
  "BUILDING_CITADEL": {
   "portrait": "images/civ-uniques/citadel.png",
   "portraitAlt": "Citadel"
  },
  "BUILDING_ROYAL_LIBRARY": {
   "portrait": "images/civ-uniques/royal_library.png",
   "portraitAlt": "Royal Library"
  },
  "BUILDING_COTHON": {
   "portrait": "images/civ-uniques/cothon.png",
   "portraitAlt": "Cothon"
  },
  "BUILDING_DOCKYARD": {
   "portrait": "images/civ-uniques/dockyard.png",
   "portraitAlt": "Dockyard"
  },
  "BUILDING_LECTURE_HALL": {
   "portrait": "images/civ-uniques/lecture_hall.png",
   "portraitAlt": "Lecture Hall"
  },
  "BUILDING_PAGODA": {
   "portrait": "images/civ-uniques/pagoda.png",
   "portraitAlt": "Pagoda"
  },
  "BUILDING_LANGI": {
   "portrait": "images/civ-uniques/langi.png",
   "portraitAlt": "Langi"
  },
  "BUILDING_VAI_KAUKAU": {
   "portrait": "images/civ-uniques/vaikaukau.png",
   "portraitAlt": "Vaikaukau"
  },
  "BUILDING_NAVAL_ARSENAL": {
   "portrait": "images/civ-uniques/naval_arsenal.png",
   "portraitAlt": "Naval Arsenal"
  },
  "BUILDING_NAVAL_STATION": {
   "portrait": "images/civ-uniques/naval_station.png",
   "portraitAlt": "Naval Station"
  },
  "BUILDING_ROYAL_EXCHANGE": {
   "portrait": "images/civ-uniques/royal_exchange.png",
   "portraitAlt": "Royal Exchange"
  },
  "BUILDING_MANUFACTORY": {
   "portrait": "images/civ-uniques/manufactory.png",
   "portraitAlt": "Manufactory"
  },
  "BUILDING_CONFUCIAN_ACADEMY": {
   "portrait": "images/civ-uniques/confucian_academy.png",
   "portraitAlt": "Confucian Academy"
  },
  "BUILDING_PRINTING_HOUSE": {
   "portrait": "images/civ-uniques/printing_house.png",
   "portraitAlt": "Printing House"
  },
  "BUILDING_CAMII": {
   "portrait": "images/civ-uniques/cami.png",
   "portraitAlt": "Cami"
  },
  "BUILDING_HAMMAM": {
   "portrait": "images/civ-uniques/hammam.png",
   "portraitAlt": "Hammam"
  },
  "BUILDING_GHAHVE_KHANE": {
   "portrait": "images/civ-uniques/ghahve_khane.png",
   "portraitAlt": "Ghahve Khane"
  },
  "BUILDING_TAKYEH": {
   "portrait": "images/civ-uniques/takyeh.png",
   "portraitAlt": "Takyeh"
  }
};
  // Every Unique Quarter shares the game's one quarter glyph -- it ships no
  // per-quarter art, so they all point at it rather than showing no emblem.
  var Q_MEDIA = {
  "QUARTER_ACROPOLIS": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Acropolis"
  },
  "QUARTER_FORUM": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Forum"
  },
  "QUARTER_MATHA": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Matha"
  },
  "QUARTER_NECROPOLIS": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Necropolis"
  },
  "QUARTER_UWAYBIL_KUH": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Uwaybil K'uh"
  },
  "QUARTER_DONJON": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Donjon"
  },
  "QUARTER_ULEMA": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Ulema"
  },
  "QUARTER_PLAZA": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Plaza"
  },
  "QUARTER_PURA": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Pura"
  },
  "QUARTER_FIVE_HUNDRED_LORDS": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Five Hundred Lords"
  },
  "QUARTER_INDUSTRIAL_PARK": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Industrial Park"
  },
  "QUARTER_AVENUE": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Avenue"
  },
  "QUARTER_ZAIBATSU": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Zaibatsu"
  },
  "QUARTER_ZOCALO": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Zócalo"
  },
  "QUARTER_HUIGUAN": {
    "portrait": "images/icons/city_unique_quarter.png",
    "portraitAlt": "Huiguan"
  },
  "QUARTER_EKALLU": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Ekallu"
  },
  "QUARTER_PUNIC_PORT": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Punic Port"
  },
  "QUARTER_DRAGON_TEMPLE": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Sachal"
  },
  "QUARTER_TOFI_A": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Tofi'a"
  },
  "QUARTER_HAVEN": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Haven"
  },
  "QUARTER_FINANCIAL_CENTRE": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Financial Centre"
  },
  "QUARTER_SEOWON": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Seowon"
  },
  "QUARTER_KULLIYE": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Külliye"
  },
  "QUARTER_BAQ": {
   "portrait": "images/icons/city_unique_quarter.png",
   "portraitAlt": "Bāq"
  }
};
  for (var qk in Q_MEDIA) { BLD_MEDIA[qk] = Q_MEDIA[qk]; }
  for (var k in BLD_MEDIA) { window.CIVPEDIA_MEDIA[k] = BLD_MEDIA[k]; }
}());

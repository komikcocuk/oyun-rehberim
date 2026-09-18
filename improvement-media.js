// Improvement stats, read straight out of the game's own data:
//   age-<x>/data/constructibles.xml  -> Age, Cost, Description/Tooltip LOC tags
//   "effects" is LOC_<TYPE>_DESCRIPTION (the Tooltip drops the base yields);
//   placement sentences are lifted out of it into "placement", and
//   "adjacency" / "warehouse" come from Constructible_Adjacencies and
//   Constructible_WarehouseYields -- see building-media.js for the full note.
//   progression-trees-*.xml          -> the civic node that unlocks a unique
// City-State improvements have no unlock node -- they come with suzerainty.
window.CIVPEDIA_IMPROVEMENT_STATS = {
 "IMPROVEMENT_FARM": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_FOOD] Food from the tile."
 },
 "IMPROVEMENT_MINE": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_PRODUCTION] Production from the tile."
 },
 "IMPROVEMENT_CLAY_PIT": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_PRODUCTION] Production from the tile."
 },
 "IMPROVEMENT_WOODCUTTER": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_PRODUCTION] Production from the tile."
 },
 "IMPROVEMENT_FISHING_BOAT": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_FOOD] Food from the tile."
 },
 "IMPROVEMENT_CAMP": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_GOLD] Gold from the tile."
 },
 "IMPROVEMENT_PASTURE": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_FOOD] Food from the tile."
 },
 "IMPROVEMENT_PLANTATION": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_GOLD] Gold from the tile."
 },
 "IMPROVEMENT_QUARRY": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "[TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] that provides [icon:YIELD_PRODUCTION] Production from the tile."
 },
 "IMPROVEMENT_EXPEDITION_BASE": {
  "age": "All Ages",
  "kind": "standard",
  "cost": "25",
  "effects": "The Expedition Base sits upon Natural Wonders and Mountains, allowing these tiles to be worked."
 },
 "IMPROVEMENT_BARAY": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Mousong",
  "unlockIcon": "images/civics/khmer_civics.png",
  "effects": "Khmer [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3[icon:YIELD_FOOD] Food. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] do not get pillaged by floods.",
  "warehouse": "+1 [icon:YIELD_FOOD] Food on Floodplains in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "kindLabel": "Khmer [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_HAN_GREAT_WALL": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Yi",
  "unlockIcon": "images/civics/han_civics.png",
  "effects": "Han [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_CULTURE] Culture. +1 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP]. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. A Road is also placed with each Great Wall Improvement.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Great Wall",
  "placement": "Can only be built in a line. Cannot branch or fork. Has reduced cost scaling compared to other Unique Improvements.",
  "kindLabel": "Has reduced cost scaling compared to other Unique Improvements."
 },
 "IMPROVEMENT_HAWELT": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Monumentum Adulitanum",
  "unlockIcon": "images/civics/aksumite_civics.png",
  "effects": "Aksumite [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_GOLD] Gold.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Hawilt\n+1 [icon:YIELD_CULTURE] Culture for each adjacent [icon:WONDER] Wonder",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
  "kindLabel": "Aksumite [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_PAIRIDAEZA": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Satrapies",
  "unlockIcon": "images/civics/achaemenid_persian_civic.png",
  "effects": "Achaemenid Persian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_CULTURE] Culture and +1 [icon:YIELD_GOLD] Gold. +5 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] with a Pairidaeza.",
  "placement": "Cannot be placed adjacent to another Pairidaeza.",
  "kindLabel": "Achaemenid Persian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_POTKOP": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Earthworks",
  "unlockIcon": "images/civics/mississippian_civics.png",
  "effects": "Mississippian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_GOLD] Gold.",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent [icon:RADIAL_RESOURCES] Resource",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
  "kindLabel": "Mississippian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_CARAVANSERAI": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Ships of the Desert",
  "unlockIcon": "images/civics/songhai_civics.png",
  "effects": "Songhai [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_GOLD] Gold. +1 [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP].",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent [icon:RADIAL_RESOURCES] Resource\n+1 [icon:YIELD_GOLD] Gold for each adjacent Navigable River",
  "placement": "Must be placed on Desert or Plains. Cannot be adjacent to another Caravanserai.",
  "kindLabel": "+1 [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on Desert or Plains. Cannot be adjacent to another Caravanserai."
 },
 "IMPROVEMENT_LO_I_KALO": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Ohana",
  "unlockIcon": "images/civics/hawaii_civics.png",
  "effects": "Hawaiian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_FOOD] Food and +2 [icon:YIELD_PRODUCTION] Production.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Fishing Boat",
  "placement": "Must be placed on Grassland or Tropical.",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on Grassland or Tropical."
 },
 "IMPROVEMENT_MING_GREAT_WALL": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Nine Garrisons",
  "unlockIcon": "images/civics/ming_civics.png",
  "effects": "Ming [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_CULTURE] Culture. +1 [icon:CULTURE_VP] Tourism. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. A Road is also placed with each Great Wall Segment.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold for each adjacent Fortification [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]",
  "placement": "Can only be built in a line and cannot branch or fork. Has reduced cost scaling compared to other Unique Improvements.",
  "kindLabel": "Ming [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_ORTOO": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Ulus",
  "unlockIcon": "images/civics/mongolian_civics.png",
  "effects": "Mongolian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_GOLD] Gold. Restores [icon:Action_Move] Movement to your Units at its location.",
  "placement": "Cannot be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough[/TIP], River, or a tile with a Feature.",
  "kindLabel": "Mongolian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_TERRACE_FARM": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Mit'a",
  "unlockIcon": "images/civics/incan_civics.png",
  "effects": "Incan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food.",
  "adjacency": "+1 [icon:YIELD_GOLD] Gold to all adjacent [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] without a River or Feature.",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] without a River or Feature."
 },
 "IMPROVEMENT_BANG": {
  "age": "Modern",
  "kind": "unique",
  "unlockedBy": "Nine Gems",
  "unlockIcon": "images/civics/siam_civics.png",
  "effects": "Siamese [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_CULTURE] Culture and [icon:YIELD_HAPPINESS] Happiness. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP].",
  "kindLabel": "Siamese [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_KABAKAS_LAKE": {
  "age": "Modern",
  "kind": "unique",
  "unlockedBy": "'Nnalubaale",
  "unlockIcon": "images/civics/buganda_civics.png",
  "effects": "Bugandan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_HAPPINESS] Happiness. Counts as a Lake for bonuses and adjacencies. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "kindLabel": "Bugandan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_OBSHCHINA": {
  "age": "Modern",
  "kind": "unique",
  "unlockedBy": "Serfdom",
  "unlockIcon": "images/civics/russian_civics.png",
  "effects": "Russian Empire [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_FOOD] Food on all Farms in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. +2 [icon:YIELD_CULTURE] Culture in [icon:CITY_UNIMPROVED] Tundra Terrain. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Cannot be placed adjacent to another Obshchina.",
  "kindLabel": "Russian Empire [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_STEPWELL": {
  "age": "Modern",
  "kind": "unique",
  "unlockedBy": "Zabt",
  "unlockIcon": "images/civics/mughal_civics.png",
  "effects": "Mughal [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_FOOD] Food. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "adjacency": "+2 [icon:YIELD_FOOD] Food for each adjacent Farm",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Cannot be placed adjacent to another Stepwell.",
  "kindLabel": "Mughal [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_HILLFORT": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Militaristic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_militaristic.png",
  "effects": "Militaristic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_PRODUCTION] Production. +1 [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP], and +5 [icon:Action_Heal] Healing per turn to [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] on this tile. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile.",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_MEGALITH": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Cultural City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_cultural.png",
  "effects": "Cultural City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_FOOD] Food for each adjacent Rural tile",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_SOUQ": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Economic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_economic.png",
  "effects": "Economic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_GOLD] Gold. +2 [icon:YIELD_GOLD] Gold in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] if they have at least one [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
  "placement": "Cannot be placed adjacent to another Emporium.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_ZIGGURAT": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Scientific City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_scientific.png",
  "effects": "Scientific City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_SCIENCE] Science.",
  "adjacency": "+1 [icon:YIELD_HAPPINESS] Happiness for each adjacent River",
  "placement": "Must be placed on a tile with natural Appeal. Must be placed on an appealing tile.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_ICE_HOUSE": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Expansionist City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_expansionist.png",
  "effects": "Expansionist City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_FOOD] Food on Farms in Desert Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "placement": "Must be placed on a Desert tile. Cannot be placed adjacent to another Yakhchāl.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_FESTIVAL_GROUNDS": {
  "age": "Antiquity",
  "kind": "citystate",
  "cost": "40",
  "unlockedBy": "Diplomatic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_diplomatic.png",
  "effects": "Diplomatic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_DIPLOMACY] Influence and +1 [icon:YIELD_HAPPINESS] Happiness. Double base yields during [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP] adjacent to a [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]district[/TIP]. Limited to one per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]settlement[/TIP].",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_KASBAH": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Militaristic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_militaristic.png",
  "effects": "Militaristic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_CULTURE] Culture, [icon:YIELD_GOLD] Gold, and [icon:YIELD_SCIENCE] Science. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile.",
  "placement": "Must be placed on Desert.",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on Desert."
 },
 "IMPROVEMENT_STONE_HEAD": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Cultural City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_cultural.png",
  "effects": "Cultural City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4[icon:YIELD_CULTURE] Culture.",
  "adjacency": "+1 [icon:YIELD_CULTURE] Culture for each adjacent Stone Head",
  "placement": "Must be placed on tiles with a natural Appeal.",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on tiles with a natural Appeal."
 },
 "IMPROVEMENT_TRADING_FACTORY": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Economic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_economic.png",
  "effects": "Economic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4[icon:YIELD_GOLD] Gold. +1 [icon:YIELD_FOOD] Food and [icon:YIELD_PRODUCTION] Production in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. +2 [icon:YIELD_GOLD] Gold if there is at least one [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "placement": "Cannot be placed adjacent to another Company Post.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_MONASTERY": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Scientific City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_scientific.png",
  "effects": "Scientific City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_SCIENCE] Science. +3 [icon:YIELD_HAPPINESS] Happiness if this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] follows your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
  "placement": "Cannot be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_SAQIYA": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Expansionist City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_expansionist.png",
  "effects": "Expansionist City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_SCIENCE] Science if built in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP].",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]."
 },
 "IMPROVEMENT_MINOR_EMBASSY": {
  "age": "Exploration",
  "kind": "citystate",
  "cost": "90",
  "unlockedBy": "Diplomatic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_diplomatic.png",
  "effects": "Diplomatic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2[icon:YIELD_DIPLOMACY] Influence. +1 [icon:YIELD_DIPLOMACY] Influence for each [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you have. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "placement": "Must be placed in a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "kindLabel": "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed in a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "IMPROVEMENT_SHORE_BATTERY": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Militaristic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_militaristic.png",
  "effects": "Militaristic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_PRODUCTION] Production. +3 [icon:Action_Ranged] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Ranged Combat Strength[/TIP] and +1 Range for Ranged and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP] in this tile. +5 [icon:Action_Heal] Healing per turn for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in this tile. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Must be placed adjacent to Coast.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_OPEN_AIR_MUSEUM": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Cultural City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_cultural.png",
  "effects": "Cultural City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_CULTURE] Culture. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. One Per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "adjacency": "+2 [icon:YIELD_CULTURE] Culture for each adjacent Tundra tile\n+2 [icon:YIELD_GOLD] Gold for each adjacent Desert tile\n+2 [icon:YIELD_SCIENCE] Science for each adjacent Tropical tile",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_INSTITUTE": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Scientific City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_scientific.png",
  "effects": "Scientific City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_SCIENCE] Science. +2 [icon:YIELD_SCIENCE] Science on adjacent [icon:CITY_UNIMPROVED] Wet or [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Cannot be adjacent to another Institute.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_ABATTOIR": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Expansionist City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_expansionist.png",
  "effects": "Expansionist City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_FOOD] Food and -1 [icon:YIELD_HAPPINESS] Happiness on each Abattoir in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Must be placed with a [icon:YIELD_FOOD] Food yield, and cannot be adjacent to another Abattoir.",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_CIRCUS_FAIR": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Diplomatic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_diplomatic.png",
  "effects": "Diplomatic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +6 [icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_DIPLOMACY] Influence when built in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "placement": "Must be placed in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with at least 15 [icon:YIELD_POPULATION] Population. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_ENTREPOT": {
  "age": "Modern",
  "kind": "citystate",
  "cost": "200",
  "unlockedBy": "Economic City-State Suzerainty",
  "unlockIcon": "images/icons/attribute_economic.png",
  "effects": "Economic City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold on every [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] tile in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] not adjacent to another Entrepôt",
  "kindLabel": "City-State [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
 },
 "IMPROVEMENT_JINJA_LAND": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Ritsuryo",
  "unlockIcon": "images/civics/heian_civics.png",
  "effects": "Heian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2[icon:YIELD_HAPPINESS] Happiness. +2[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Charming and Breathtaking[/TIP] tiles. One Jinja (Land) per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "IMPROVEMENT_JINJA_SEA": {
  "age": "Antiquity",
  "kind": "unique",
  "unlockedBy": "Ritsuryo",
  "unlockIcon": "images/civics/heian_civics.png",
  "effects": "Heian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2[icon:YIELD_HAPPINESS] Happiness. +2[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Charming and Breathtaking[/TIP] tiles. One Jinja (Sea) per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
 },
 "IMPROVEMENT_HIDDEN_FORTRESS": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Seven Tribes",
  "unlockIcon": "images/civics/bulgaria_civics.png",
  "effects": "Bulgarian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_PRODUCTION] Production. +2 [icon:YIELD_CULTURE] Culture for each adjacent [TIP:LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP]Mountain[/TIP]. Units on this tile gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP]. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile.",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] not adjacent to another Hidden Fortress."
 },
 "IMPROVEMENT_GAMA": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Cheonsu",
  "unlockIcon": "images/civics/goryeo_civics.png",
  "effects": "Goryeo [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3[icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] buildings.",
  "placement": "Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated[/TIP] tile."
 },
 "IMPROVEMENT_THING": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Landnámabók",
  "unlockIcon": "images/civics/iceland_civics.png",
  "effects": "Icelandic [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Wet, [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP], Volcano, and [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated[/TIP] tiles.",
  "placement": "Must be placed on Tundra or Grassland not adjacent to another Þingstaðr."
 },
 "IMPROVEMENT_TEA_HOUSE": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Tenka Bito",
  "unlockIcon": "images/civics/sengoku_civics.png",
  "effects": "Sengoku [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_FOOD] [b]Food[/b] and +2 [icon:YIELD_HAPPINESS] [b]Happiness[/b]. +1 [icon:YIELD_CULTURE] [b]Culture[/b] for each adjacent [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Does not remove [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile.",
  "placement": "Must be placed on an existing [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] not adjacent to another Tea House and on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]."
 },
 "IMPROVEMENT_MAWASKAWE_SKOTE": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Wiyehi Simekofi",
  "unlockIcon": "images/civics/shawnee_civics.png",
  "effects": "Shawnee [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_GOLD] Gold for each adjacent [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
  "placement": "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP], and cannot be placed adjacent to another Mawaskawe Skote."
 },
 "IMPROVEMENT_WATER_PUPPET_THEATER": {
  "age": "Exploration",
  "kind": "unique",
  "unlockedBy": "Thành Hoàng",
  "unlockIcon": "images/civics/dai_viet_civics.png",
  "effects": "Đại Việt [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +2 [icon:YIELD_HAPPINESS] Happiness if placed on [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. +1 [icon:YIELD_CULTURE] Culture for every time a Storm, Flood, or Volcanic Eruption has provided Fertility to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] do not get pillaged by Floods. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
  "placement": "Must be placed adjacent to a River not adjacent to another Water Puppet Theater."
 }
};

(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  // The game's own improvement textures are the same undecodable format as
  // everything else, so the art comes from the wiki's copies -- flat icons
  // with no frame, the way the Wonders and Religion emblems are handled.
  var IMP_MEDIA = {
  "IMPROVEMENT_FARM": {
    "portrait": "images/improvements/farm.png",
    "portraitAlt": "Farm"
  },
  "IMPROVEMENT_MINE": {
    "portrait": "images/improvements/mine.png",
    "portraitAlt": "Mine"
  },
  "IMPROVEMENT_CLAY_PIT": {
    "portrait": "images/improvements/clay_pit.png",
    "portraitAlt": "Clay Pit"
  },
  "IMPROVEMENT_WOODCUTTER": {
    "portrait": "images/improvements/woodcutter.png",
    "portraitAlt": "Woodcutter"
  },
  "IMPROVEMENT_FISHING_BOAT": {
    "portrait": "images/improvements/fishing_boat.png",
    "portraitAlt": "Fishing Boat"
  },
  "IMPROVEMENT_CAMP": {
    "portrait": "images/improvements/camp.png",
    "portraitAlt": "Camp"
  },
  "IMPROVEMENT_PASTURE": {
    "portrait": "images/improvements/pasture.png",
    "portraitAlt": "Pasture"
  },
  "IMPROVEMENT_PLANTATION": {
    "portrait": "images/improvements/plantation.png",
    "portraitAlt": "Plantation"
  },
  "IMPROVEMENT_QUARRY": {
    "portrait": "images/improvements/quarry.png",
    "portraitAlt": "Quarry"
  },
  "IMPROVEMENT_EXPEDITION_BASE": {
    "portrait": "images/improvements/expedition_base.png",
    "portraitAlt": "Expedition Base"
  },
  "IMPROVEMENT_BARAY": {
    "portrait": "images/improvements/baray.png",
    "portraitAlt": "Baray"
  },
  "IMPROVEMENT_HAN_GREAT_WALL": {
    "portrait": "images/improvements/great_wall.png",
    "portraitAlt": "Great Wall"
  },
  "IMPROVEMENT_HAWELT": {
    "portrait": "images/improvements/hawilt.png",
    "portraitAlt": "Hawilt"
  },
  "IMPROVEMENT_PAIRIDAEZA": {
    "portrait": "images/improvements/pairidaeza.png",
    "portraitAlt": "Pairidaeza"
  },
  "IMPROVEMENT_POTKOP": {
    "portrait": "images/improvements/potkop.png",
    "portraitAlt": "Potkop"
  },
  "IMPROVEMENT_CARAVANSERAI": {
    "portrait": "images/improvements/caravanserai.png",
    "portraitAlt": "Caravanserai"
  },
  "IMPROVEMENT_LO_I_KALO": {
    "portrait": "images/improvements/lo_i_kalo.png",
    "portraitAlt": "Lo'i Kalo"
  },
  "IMPROVEMENT_MING_GREAT_WALL": {
    "portrait": "images/improvements/ming_great_wall.png",
    "portraitAlt": "Ming Great Wall"
  },
  "IMPROVEMENT_ORTOO": {
    "portrait": "images/improvements/ortoo.png",
    "portraitAlt": "Örtöö"
  },
  "IMPROVEMENT_TERRACE_FARM": {
    "portrait": "images/improvements/terrace_farm.png",
    "portraitAlt": "Terrace Farm"
  },
  "IMPROVEMENT_BANG": {
    "portrait": "images/improvements/bang.png",
    "portraitAlt": "Bang"
  },
  "IMPROVEMENT_KABAKAS_LAKE": {
    "portrait": "images/improvements/kabaka_s_lake.png",
    "portraitAlt": "Kabaka's Lake"
  },
  "IMPROVEMENT_OBSHCHINA": {
    "portrait": "images/improvements/obshchina.png",
    "portraitAlt": "Obshchina"
  },
  "IMPROVEMENT_STEPWELL": {
    "portrait": "images/improvements/stepwell.png",
    "portraitAlt": "Stepwell"
  },
  "IMPROVEMENT_HILLFORT": {
    "portrait": "images/improvements/hillfort.png",
    "portraitAlt": "Hillfort"
  },
  "IMPROVEMENT_MEGALITH": {
    "portrait": "images/improvements/megalith.png",
    "portraitAlt": "Megalith"
  },
  "IMPROVEMENT_SOUQ": {
    "portrait": "images/improvements/emporium.png",
    "portraitAlt": "Emporium"
  },
  "IMPROVEMENT_ZIGGURAT": {
    "portrait": "images/improvements/step_pyramid.png",
    "portraitAlt": "Step Pyramid"
  },
  "IMPROVEMENT_ICE_HOUSE": {
    "portrait": "images/improvements/yakhchal.png",
    "portraitAlt": "Yakhchāl"
  },
  "IMPROVEMENT_FESTIVAL_GROUNDS": {
    "portrait": "images/improvements/festival_grounds.png",
    "portraitAlt": "Festival Grounds"
  },
  "IMPROVEMENT_KASBAH": {
    "portrait": "images/improvements/kasbah.png",
    "portraitAlt": "Kasbah"
  },
  "IMPROVEMENT_STONE_HEAD": {
    "portrait": "images/improvements/stone_head.png",
    "portraitAlt": "Stone Head"
  },
  "IMPROVEMENT_TRADING_FACTORY": {
    "portrait": "images/improvements/company_post.png",
    "portraitAlt": "Company Post"
  },
  "IMPROVEMENT_MONASTERY": {
    "portrait": "images/improvements/monastery.png",
    "portraitAlt": "Monastery"
  },
  "IMPROVEMENT_SAQIYA": {
    "portrait": "images/improvements/saqiya.png",
    "portraitAlt": "Saqiya"
  },
  "IMPROVEMENT_MINOR_EMBASSY": {
    "portrait": "images/improvements/minor_embassy.png",
    "portraitAlt": "Minor Embassy"
  },
  "IMPROVEMENT_SHORE_BATTERY": {
    "portrait": "images/improvements/shore_battery.png",
    "portraitAlt": "Shore Battery"
  },
  "IMPROVEMENT_OPEN_AIR_MUSEUM": {
    "portrait": "images/improvements/open_air_museum.png",
    "portraitAlt": "Open-Air Museum"
  },
  "IMPROVEMENT_INSTITUTE": {
    "portrait": "images/improvements/institute.png",
    "portraitAlt": "Institute"
  },
  "IMPROVEMENT_ABATTOIR": {
    "portrait": "images/improvements/abattoir.png",
    "portraitAlt": "Abattoir"
  },
  "IMPROVEMENT_CIRCUS_FAIR": {
    "portrait": "images/improvements/circus_fair.png",
    "portraitAlt": "Circus Fair"
  },
  "IMPROVEMENT_ENTREPOT": {
    "portrait": "images/improvements/entrepot.png",
    "portraitAlt": "Entrepôt"
  },
  "IMPROVEMENT_JINJA_LAND": {
   "portrait": "images/civ-uniques/jinja.png",
   "portraitAlt": "Jinja (Land)"
  },
  "IMPROVEMENT_JINJA_SEA": {
   "portrait": "images/civ-uniques/jinja.png",
   "portraitAlt": "Jinja (Sea)"
  },
  "IMPROVEMENT_HIDDEN_FORTRESS": {
   "portrait": "images/civ-uniques/hidden_fortress.png",
   "portraitAlt": "Hidden Fortress"
  },
  "IMPROVEMENT_GAMA": {
   "portrait": "images/civ-uniques/gama.png",
   "portraitAlt": "Gama"
  },
  "IMPROVEMENT_THING": {
   "portrait": "images/civ-uniques/thingstadr.png",
   "portraitAlt": "Þingstaðr"
  },
  "IMPROVEMENT_TEA_HOUSE": {
   "portrait": "images/civ-uniques/tea_house.png",
   "portraitAlt": "Tea House"
  },
  "IMPROVEMENT_MAWASKAWE_SKOTE": {
   "portrait": "images/civ-uniques/mawaskawe_skote.png",
   "portraitAlt": "Mawaskawe Skote"
  },
  "IMPROVEMENT_WATER_PUPPET_THEATER": {
   "portrait": "images/civ-uniques/water_puppet_theater.png",
   "portraitAlt": "Water Puppet Theater"
  }
};
  for (var k in IMP_MEDIA) { window.CIVPEDIA_MEDIA[k] = IMP_MEDIA[k]; }
}());

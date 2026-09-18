// The three technology trees, read out of the game's own
// age-*/data/progression-trees-tech.xml:
//   ProgressionTreeNodes       -> the tech and its Science cost
//   ProgressionTreePrereqs     -> the lines drawn between them
//   ProgressionTreeNodeUnlocks -> depth 1 is the tech itself, depth 2
//                                 is its Mastery (the "II" row)
// Rows the designers commented out are skipped, as the game skips them.
// Civ-unique unlocks are left out of the rows, exactly as the game
// leaves them out unless you are playing that civilization.
window.CIVPEDIA_TECH_TREE = {
 "ANTIQUITY": {
  "age": "Antiquity",
  "nodes": [
   {
    "id": "NODE_TECH_AQ_AGRICULTURE",
    "name": "Agriculture",
    "cost": 1,
    "col": 0,
    "row": 2,
    "icon": "images/symbols/agriculture.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Granary",
      "icon": "images/buildings/granary.png",
      "page": "Granary",
      "tip": "+1 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_FOOD] Food on Farms, Pastures, and Plantations. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_FOOD] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Farms[LI] Pastures[LI] Plantations[/BLIST]"
      ]
     },
     {
      "kind": "building",
      "name": "Fishing Quay",
      "icon": "images/buildings/fishing_quay.png",
      "page": "Fishing Quay",
      "tip": "+1 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_FOOD] Food on Fishing Boats. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_FOOD] on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE][TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "Chariot",
      "type": "UNIT_CHARIOT",
      "kind": "unit",
      "icon": "images/units/chariot.png",
      "page": "Chariot",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_POTTERY",
    "name": "Pottery",
    "cost": 70,
    "col": 1,
    "row": 2,
    "icon": "images/symbols/pottery.png",
    "prereqs": [
     "NODE_TECH_AQ_AGRICULTURE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Brickyard",
      "icon": "images/buildings/brickyard.png",
      "page": "Brickyard",
      "tip": "+1 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production on Clay Pits, Mines, and Quarries. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_PRODUCTION] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Clay Pits[LI] Mines[LI] Quarries[/BLIST]"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_tileyield.png",
      "tip": "+1[icon:YIELD_PRODUCTION] Production on Clay Pits.",
      "lines": [
       "+1[icon:YIELD_PRODUCTION] Production on Clay Pits."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_ANIMAL_HUSBANDRY",
    "name": "Animal Husbandry",
    "cost": 70,
    "col": 1,
    "row": 3,
    "icon": "images/symbols/animal_husbandry.png",
    "prereqs": [
     "NODE_TECH_AQ_AGRICULTURE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Saw Pit",
      "icon": "images/buildings/saw_pit.png",
      "page": "Saw Pit",
      "tip": "+1 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production on Camps and Woodcutters. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_PRODUCTION] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Camps[LI] Woodcutters[/BLIST]"
      ]
     },
     {
      "kind": "unit",
      "name": "Slinger",
      "icon": "images/units/slinger.png",
      "page": "Slinger",
      "tip": "Tier 1 Antiquity [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 1 Antiquity [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Chu-Ko-Nu",
      "type": "UNIT_NU",
      "kind": "unit",
      "icon": "images/units/chu_ko_nu.png",
      "page": "Chu-Ko-Nu",
      "depth": 1,
      "replaces": "Slinger",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "Yumi",
      "type": "UNIT_YUMI",
      "kind": "unit",
      "icon": "images/civ-uniques/yumi.png",
      "page": "Yumi",
      "depth": 1,
      "replaces": "Slinger",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Maya",
      "civType": "CIVILIZATION_MAYA",
      "name": "Hul'che",
      "type": "UNIT_HULCHE",
      "kind": "unit",
      "icon": "images/units/hul_che.png",
      "page": "Hul'che",
      "depth": 1,
      "replaces": "Slinger",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mississippian",
      "civType": "CIVILIZATION_MISSISSIPPIAN",
      "name": "Burning Arrow",
      "type": "UNIT_BURNING_ARROW",
      "kind": "unit",
      "icon": "images/units/burning_arrow.png",
      "page": "Burning Arrow",
      "depth": 1,
      "replaces": "Slinger",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "Hwarang",
      "type": "UNIT_HWARANG",
      "kind": "unit",
      "icon": "images/civ-uniques/hwarang.png",
      "page": "Hwarang",
      "depth": 1,
      "replaces": "Slinger",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_SAILING",
    "name": "Sailing",
    "cost": 70,
    "col": 1,
    "row": 1,
    "icon": "images/symbols/sailing.png",
    "prereqs": [
     "NODE_TECH_AQ_AGRICULTURE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Harbor",
      "icon": "images/buildings/harbor.png",
      "page": "Harbor",
      "tip": "+1 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production on Fishing Boats. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Naval Units trained in this Settlement will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_PRODUCTION] on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE][TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP]Water Terrain[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Galley",
      "icon": "images/units/galley.png",
      "page": "Galley",
      "tip": "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP].",
      "lines": [
       "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "Embarkation",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "Allows all standard [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] to traverse Coast Terrain.",
      "lines": [
       "Allows all standard [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] to traverse Coast Terrain."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Dhow",
      "type": "UNIT_DHOW",
      "kind": "unit",
      "icon": "images/units/dhow.png",
      "page": "Dhow",
      "depth": 1,
      "replaces": "Galley",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "PIRATE_AQ_MOD_FREE_SETTLER",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_generic.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Gain [B]1 [icon:UNIT_SETTLER] Settler[/B] for free."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "Kalia",
      "type": "UNIT_KALIA",
      "kind": "unit",
      "icon": "images/civ-uniques/kalia.png",
      "page": "Kalia",
      "depth": 1,
      "replaces": "Galley",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_WRITING",
    "name": "Writing",
    "cost": 125,
    "col": 2,
    "row": 1,
    "icon": "images/symbols/writing.png",
    "prereqs": [
     "NODE_TECH_AQ_POTTERY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Library",
      "icon": "images/buildings/library.png",
      "page": "Library",
      "tip": "+3 [icon:YIELD_SCIENCE] Science. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. Antiquity Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots."
      ]
     },
     {
      "kind": "project",
      "name": "Research Initiative",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "While this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] is active, this City generates additional [icon:YIELD_SCIENCE]Science equal to 25% of its[icon:YIELD_PRODUCTION] Production each turn.[n]You can cancel this Project at any time.",
      "lines": [
       "While this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] is active, this City generates additional [icon:YIELD_SCIENCE]Science equal to 25% of its[icon:YIELD_PRODUCTION] Production each turn.",
       "You can cancel this Project at any time."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Steal Technological Advancement",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Gain a [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] from the target that you have not researched. If the Civilization has no eligible Technologies, gain [icon:YIELD_SCIENCE] Science instead.",
      "lines": [
       "Gain a [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] from the target that you have not researched. If the Civilization has no eligible Technologies, gain [icon:YIELD_SCIENCE] Science instead."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_IRRIGATION",
    "name": "Irrigation",
    "cost": 125,
    "col": 2,
    "row": 2,
    "icon": "images/symbols/irrigation.png",
    "prereqs": [
     "NODE_TECH_AQ_POTTERY",
     "NODE_TECH_AQ_ANIMAL_HUSBANDRY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Garden",
      "icon": "images/buildings/garden.png",
      "page": "Garden",
      "tip": "+3[icon:YIELD_FOOD] Food and +3[icon:YIELD_HAPPINESS] Happiness. Antiquity Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "3"
       },
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Antiquity Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Hanging Gardens",
      "icon": "images/wonders/hanging_gardens.png",
      "page": "Hanging Gardens",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on Farms in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus. [B]+10% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_EXPANSIONIST][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on Farms in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus. [B]+10% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_EXPANSIONIST][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP] Point.",
       "Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_MASONRY",
    "name": "Masonry",
    "cost": 125,
    "col": 2,
    "row": 3,
    "icon": "images/symbols/masonry.png",
    "prereqs": [
     "NODE_TECH_AQ_ANIMAL_HUSBANDRY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Ancient Walls",
      "icon": "images/buildings/ancient_walls.png",
      "page": "Ancient Walls",
      "tip": "Antiquity Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
      "yields": [],
      "adj": [],
      "lines": [
       "Effect: Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
       "Antiquity Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Monument",
      "icon": "images/buildings/monument.png",
      "page": "Monument",
      "tip": "+3[icon:YIELD_CULTURE] Culture and +2[icon:YIELD_DIPLOMACY] Influence. Antiquity Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       },
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Antiquity Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Pyramids",
      "icon": "images/wonders/pyramids.png",
      "page": "Pyramids",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Navigable River not in Tundra.",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a Navigable River not in Tundra."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_CURRENCY",
    "name": "Currency",
    "cost": 245,
    "col": 3,
    "row": 0,
    "icon": "images/symbols/currency.png",
    "prereqs": [
     "NODE_TECH_AQ_SAILING",
     "NODE_TECH_AQ_WRITING"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Bath",
      "icon": "images/buildings/bath.png",
      "page": "Bath",
      "tip": "+4[icon:YIELD_FOOD] Food. Antiquity Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]. Must be placed on a River.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP].",
       "Must be placed on a River."
      ]
     },
     {
      "kind": "building",
      "name": "Market",
      "icon": "images/buildings/market.png",
      "page": "Market",
      "tip": "+3 [icon:YIELD_GOLD] Gold. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Antiquity Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Colossus",
      "icon": "images/wonders/colossus.png",
      "page": "Colossus",
      "tip": "[B]+3 [icon:YIELD_GOLD][/B]. [B]+3 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+1 [icon:ATTRIBUTE_ECONOMIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Coast adjacent to land.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+3 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+1 [icon:ATTRIBUTE_ECONOMIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP] Point.",
       "Must be placed on Coast adjacent to land."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "tip": "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_economic.png",
      "tip": "+2 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
      "lines": [
       "+2 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+5 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]",
      "lines": [
       "+5 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]"
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_BRONZE_WORKING",
    "name": "Bronze Working",
    "cost": 255,
    "col": 3,
    "row": 1,
    "icon": "images/symbols/bronze_working.png",
    "prereqs": [
     "NODE_TECH_AQ_WRITING",
     "NODE_TECH_AQ_IRRIGATION"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Barracks",
      "icon": "images/buildings/barracks.png",
      "page": "Barracks",
      "tip": "+3[icon:YIELD_PRODUCTION] Production. Antiquity Military Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards Land Units.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION]towards Land Units."
      ]
     },
     {
      "kind": "unit",
      "name": "Spearman",
      "icon": "images/units/spearman.png",
      "page": "Spearman",
      "tip": "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Archer",
      "icon": "images/units/archer.png",
      "page": "Archer",
      "tip": "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Achaemenid Persia",
      "civType": "CIVILIZATION_PERSIA",
      "name": "Immortal",
      "type": "UNIT_IMMORTAL",
      "kind": "unit",
      "icon": "images/units/immortal.png",
      "page": "Immortal",
      "depth": 1,
      "replaces": "Spearman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Egypt",
      "civType": "CIVILIZATION_EGYPT",
      "name": "Medjay",
      "type": "UNIT_MEDJAY_2",
      "kind": "unit",
      "icon": "images/units/medjay.png",
      "page": "Medjay",
      "depth": 1,
      "replaces": "Spearman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Greece",
      "civType": "CIVILIZATION_GREECE",
      "name": "Hoplite",
      "type": "UNIT_HOPLITE_2",
      "kind": "unit",
      "icon": "images/units/hoplite.png",
      "page": "Hoplite",
      "depth": 1,
      "replaces": "Spearman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Chu-Ko-Nu",
      "type": "UNIT_NU_2",
      "kind": "unit",
      "icon": "images/units/chu_ko_nu.png",
      "page": "Chu-Ko-Nu",
      "depth": 1,
      "replaces": "Archer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "Yumi",
      "type": "UNIT_YUMI_2",
      "kind": "unit",
      "icon": "images/civ-uniques/yumi.png",
      "page": "Yumi",
      "depth": 1,
      "replaces": "Archer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Maya",
      "civType": "CIVILIZATION_MAYA",
      "name": "Hul'che",
      "type": "UNIT_HULCHE_2",
      "kind": "unit",
      "icon": "images/units/hul_che.png",
      "page": "Hul'che",
      "depth": 1,
      "replaces": "Archer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mississippian",
      "civType": "CIVILIZATION_MISSISSIPPIAN",
      "name": "Burning Arrow",
      "type": "UNIT_BURNING_ARROW_2",
      "kind": "unit",
      "icon": "images/units/burning_arrow.png",
      "page": "Burning Arrow",
      "depth": 1,
      "replaces": "Archer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Rome",
      "civType": "CIVILIZATION_ROME",
      "name": "Legion",
      "type": "UNIT_LEGION",
      "kind": "unit",
      "icon": "images/units/legion.png",
      "page": "Legion",
      "depth": 1,
      "replaces": "Spearman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "Hwarang",
      "type": "UNIT_HWARANG_2",
      "kind": "unit",
      "icon": "images/civ-uniques/hwarang.png",
      "page": "Hwarang",
      "depth": 1,
      "replaces": "Archer",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_WHEEL",
    "name": "The Wheel",
    "cost": 245,
    "col": 3,
    "row": 2,
    "icon": "images/symbols/the_wheel.png",
    "prereqs": [
     "NODE_TECH_AQ_IRRIGATION",
     "NODE_TECH_AQ_MASONRY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Villa",
      "icon": "images/buildings/villa.png",
      "page": "Villa",
      "tip": "+3[icon:YIELD_HAPPINESS] Happiness and +3[icon:YIELD_DIPLOMACY] Influence. Antiquity Happiness and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       },
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Antiquity Happiness and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Ballista",
      "icon": "images/units/ballista.png",
      "page": "Ballista",
      "tip": "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Chariot",
      "icon": "images/units/chariot.png",
      "page": "Chariot",
      "tip": "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 2 Antiquity [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Military Infiltration",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Gain vision of all of the target's [icon:UNIT_ARMY_COMMANDER] Commanders.",
      "lines": [
       "Gain vision of all of the target's [icon:UNIT_ARMY_COMMANDER] Commanders."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_economic.png",
      "tip": "+1 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] (not Towns).",
      "lines": [
       "+1 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] (not Towns)."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+1 [icon:Action_Move] Movement for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP].",
      "lines": [
       "+1 [icon:Action_Move] Movement for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "Magarru",
      "type": "UNIT_MAGARRU",
      "kind": "unit",
      "icon": "images/civ-uniques/magarru.png",
      "page": "Magarru",
      "depth": 1,
      "replaces": "Chariot",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "Numidian Cavalry",
      "type": "UNIT_NUMIDIAN_CAVALRY",
      "kind": "unit",
      "icon": "images/civ-uniques/numidian_cavalry.png",
      "page": "Numidian Cavalry",
      "depth": 1,
      "replaces": "Chariot",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "Yuthahathi",
      "type": "UNIT_DANTINAS_TATHA",
      "kind": "unit",
      "icon": "images/units/yuthahathi.png",
      "page": "Yuthahathi",
      "depth": 1,
      "replaces": "Chariot",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Maurya",
      "civType": "CIVILIZATION_MAURYA",
      "name": "Purabhettarah",
      "type": "UNIT_PURABHETTARAH",
      "kind": "unit",
      "icon": "images/units/purabhettarah.png",
      "page": "Purabhettarah",
      "depth": 1,
      "replaces": "Chariot",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_NAVIGATION",
    "name": "Navigation",
    "cost": 430,
    "col": 4,
    "row": 0,
    "icon": "images/symbols/navigation.png",
    "prereqs": [
     "NODE_TECH_AQ_CURRENCY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Lighthouse",
      "icon": "images/buildings/lighthouse.png",
      "page": "Lighthouse",
      "tip": "+4 [icon:YIELD_GOLD] Gold. +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Antiquity Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Must be placed on Coast.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on a Coast tile."
      ]
     },
     {
      "kind": "wonder",
      "name": "Ha'amonga 'a Maui",
      "icon": "images/wonders/haamonga_a_maui.png",
      "page": "Ha'amonga 'a Maui",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus. [B]+1 [icon:ATTRIBUTE_CULTURAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on Fishing Boats in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus. [B]+1 [icon:ATTRIBUTE_CULTURAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP] Point.",
       "Must be placed adjacent to Coast."
      ]
     },
     {
      "kind": "unit",
      "name": "Quadrireme",
      "icon": "images/units/quadrireme.png",
      "page": "Quadrireme",
      "tip": "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP].",
      "lines": [
       "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Chart The Stars",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 5 [icon:SCIENCE_VP] Innovation and 2 free purchases of the Altar upon completion.",
      "lines": [
       "Grants 5 [icon:SCIENCE_VP] Innovation and 2 free purchases of the Altar upon completion."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Dhow",
      "type": "UNIT_DHOW_2",
      "kind": "unit",
      "icon": "images/units/dhow.png",
      "page": "Dhow",
      "depth": 1,
      "replaces": "Quadrireme",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "PIRATE_AQ_MOD_FREE_SETTLER",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_generic.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Gain [B]1 [icon:UNIT_SETTLER] Settler[/B] for free."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "Kalia",
      "type": "UNIT_KALIA_2",
      "kind": "unit",
      "icon": "images/civ-uniques/kalia.png",
      "page": "Kalia",
      "depth": 1,
      "replaces": "Quadrireme",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Collection 3: Water Wonder Pack",
      "civType": "",
      "name": "Great Lighthouse",
      "type": "WONDER_GREAT_LIGHTHOUSE",
      "kind": "wonder",
      "icon": "images/wonders/great_lighthouse.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_ENGINEERING",
    "name": "Engineering",
    "cost": 430,
    "col": 4,
    "row": 1,
    "icon": "images/symbols/engineering.png",
    "prereqs": [
     "NODE_TECH_AQ_CURRENCY",
     "NODE_TECH_AQ_BRONZE_WORKING"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Amphitheater",
      "icon": "images/buildings/amphitheater.png",
      "page": "Amphitheater",
      "tip": "+4 [icon:YIELD_CULTURE] Culture. Antiquity Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +10% [icon:YIELD_PRODUCTION] Production towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +10% [icon:YIELD_PRODUCTION] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "building",
      "name": "Ancient Bridge",
      "icon": "images/buildings/ancient_bridge.png",
      "page": "Ancient Bridge",
      "tip": "+4 [icon:YIELD_GOLD] Gold. [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: Antiquity [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "Byrsa",
      "type": "WONDER_BYRSA",
      "kind": "wonder",
      "icon": "images/civ-uniques/byrsa.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     },
     {
      "civ": "Collection 4: Brush and Blade Wonder Pack",
      "civType": "",
      "name": "Mireuksa",
      "type": "WONDER_MIREUKSA",
      "kind": "wonder",
      "icon": "images/wonders/mireuksa.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_MILITARY_TRAINING",
    "name": "Military Training",
    "cost": 430,
    "col": 4,
    "row": 2,
    "icon": "images/symbols/military_training.png",
    "prereqs": [
     "NODE_TECH_AQ_BRONZE_WORKING",
     "NODE_TECH_AQ_WHEEL"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Arena",
      "icon": "images/buildings/arena.png",
      "page": "Arena",
      "tip": "+4 [icon:YIELD_HAPPINESS] Happiness. Antiquity Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:YIELD_HAPPINESS] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Blacksmith",
      "icon": "images/buildings/blacksmith.png",
      "page": "Blacksmith",
      "tip": "+4[icon:YIELD_PRODUCTION] Production. Antiquity Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. +1 [icon:YIELD_PRODUCTION] Production on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:YIELD_PRODUCTION] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "Unlocks Unit [TIP:LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP]Flanking[/TIP].",
      "lines": [
       "Unlocks Unit [TIP:LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP]Flanking[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:Action_Ranged] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP].",
      "lines": [
       "+3 [icon:Action_Ranged] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_MATHEMATICS",
    "name": "Mathematics",
    "cost": 738,
    "col": 5,
    "row": 1,
    "icon": "images/symbols/mathematics.png",
    "prereqs": [
     "NODE_TECH_AQ_ENGINEERING"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Academy",
      "icon": "images/buildings/academy.png",
      "page": "Academy",
      "tip": "+4 [icon:YIELD_SCIENCE] Science. Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. Antiquity Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots."
      ]
     },
     {
      "kind": "wonder",
      "name": "Pyramid Of The Sun",
      "icon": "images/wonders/pyramid_of_the_sun.png",
      "page": "Pyramid Of The Sun",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B]. [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP] adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP] adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Spherical Earth",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 5 [icon:SCIENCE_VP] Innovation and a Scientific Attribute Point upon completion.",
      "lines": [
       "Grants 5 [icon:SCIENCE_VP] Innovation and a Scientific Attribute Point upon completion."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_codex.png",
      "tip": "Gain 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codices[/TIP].",
      "lines": [
       "Gain 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codices[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Great Library",
      "icon": "images/wonders/great_library.png",
      "page": "Great Library",
      "tip": "[B]+4 [icon:YIELD_SCIENCE][/B]. [B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] across your Empire. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] across your Empire. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_AQ_IRON_WORKING",
    "name": "Iron Working",
    "cost": 738,
    "col": 5,
    "row": 2,
    "icon": "images/symbols/iron_working.png",
    "prereqs": [
     "NODE_TECH_AQ_MILITARY_TRAINING"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Horseman",
      "icon": "images/units/horseman.png",
      "page": "Horseman",
      "tip": "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Phalanx",
      "icon": "images/units/phalanx.png",
      "page": "Phalanx",
      "tip": "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 3 Antiquity [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Achaemenid Persia",
      "civType": "CIVILIZATION_PERSIA",
      "name": "Immortal",
      "type": "UNIT_IMMORTAL_2",
      "kind": "unit",
      "icon": "images/units/immortal.png",
      "page": "Immortal",
      "depth": 1,
      "replaces": "Phalanx",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "Magarru",
      "type": "UNIT_MAGARRU_2",
      "kind": "unit",
      "icon": "images/civ-uniques/magarru.png",
      "page": "Magarru",
      "depth": 1,
      "replaces": "Horseman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "Numidian Cavalry",
      "type": "UNIT_NUMIDIAN_CAVALRY_2",
      "kind": "unit",
      "icon": "images/civ-uniques/numidian_cavalry.png",
      "page": "Numidian Cavalry",
      "depth": 1,
      "replaces": "Horseman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Collection 2: Asia Wonder Pack",
      "civType": "",
      "name": "Mausoleum at Halicarnassus",
      "type": "WONDER_MAUSOLEUM_AT_HALICARNASSUS",
      "kind": "wonder",
      "icon": "images/wonders/mausoleum_at_halicarnassus.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     },
     {
      "civ": "Egypt",
      "civType": "CIVILIZATION_EGYPT",
      "name": "Medjay",
      "type": "UNIT_MEDJAY_3",
      "kind": "unit",
      "icon": "images/units/medjay.png",
      "page": "Medjay",
      "depth": 1,
      "replaces": "Phalanx",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Greece",
      "civType": "CIVILIZATION_GREECE",
      "name": "Hoplite",
      "type": "UNIT_HOPLITE_3",
      "kind": "unit",
      "icon": "images/units/hoplite.png",
      "page": "Hoplite",
      "depth": 1,
      "replaces": "Phalanx",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "Yuthahathi",
      "type": "UNIT_DANTINAS_TATHA_2",
      "kind": "unit",
      "icon": "images/units/yuthahathi.png",
      "page": "Yuthahathi",
      "depth": 1,
      "replaces": "Horseman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Maurya",
      "civType": "CIVILIZATION_MAURYA",
      "name": "Purabhettarah",
      "type": "UNIT_PURABHETTARAH_2",
      "kind": "unit",
      "icon": "images/units/purabhettarah.png",
      "page": "Purabhettarah",
      "depth": 1,
      "replaces": "Horseman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Rome",
      "civType": "CIVILIZATION_ROME",
      "name": "Legion",
      "type": "UNIT_LEGION_2",
      "kind": "unit",
      "icon": "images/units/legion.png",
      "page": "Legion",
      "depth": 1,
      "replaces": "Phalanx",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_AQ_FUTURE_TECH",
    "name": "Future Tech",
    "cost": 1255,
    "col": 6,
    "row": 1,
    "icon": "images/symbols/future_tech.png",
    "prereqs": [
     "NODE_TECH_AQ_NAVIGATION",
     "NODE_TECH_AQ_IRON_WORKING",
     "NODE_TECH_AQ_MATHEMATICS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 [icon:ATTRIBUTE] Random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point.",
      "lines": [
       "+1 [icon:ATTRIBUTE] Random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "A boost for a starting [icon:RADIAL_TECH] [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Tech[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "A boost for a starting [icon:RADIAL_TECH] [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Tech[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+10 [icon:NOTIFICATION_TEAM_VICTORIOUS] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "+10 [icon:NOTIFICATION_TEAM_VICTORIOUS] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants 2 [icon:SCIENCE_VP] Innovation",
      "lines": [
       "Grants 2 [icon:SCIENCE_VP] Innovation"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "EXPLORATION": {
  "age": "Exploration",
  "nodes": [
   {
    "id": "NODE_TECH_EX_CARTOGRAPHY",
    "name": "Cartography",
    "cost": 525,
    "col": 0,
    "row": 3,
    "icon": "images/symbols/cartography.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Wharf",
      "icon": "images/buildings/wharf.png",
      "page": "Wharf",
      "tip": "+6[icon:YIELD_FOOD] Food. Increases the number of [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] that may be assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] by 2. Exploration Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Must be placed on Coast or a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: Increases the number of [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] that may be assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] by 2.",
       "Must be placed on Coast or a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP] may enter deep Ocean Terrain.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP] may enter deep Ocean Terrain."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_EX_ASTRONOMY",
    "name": "Astronomy",
    "cost": 525,
    "col": 0,
    "row": 2,
    "icon": "images/symbols/astronomy.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Observatory",
      "icon": "images/buildings/observatory.png",
      "page": "Observatory",
      "tip": "+6 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science per Adjacent Mountain. Exploration Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder",
         "Mountainous Terrain"
        ]
       }
      ],
      "lines": [
       "Exploration Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Fleet Commander",
      "icon": "images/units/fleet_commander.png",
      "page": "Fleet Commander",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Naval Commander Unit[/TIP]",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Naval Commander Unit[/TIP]"
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Ottru",
      "type": "UNIT_OTTRU",
      "kind": "unit",
      "icon": "images/civ-uniques/ottru.png",
      "page": "Ottru",
      "depth": 1,
      "replaces": "Fleet Commander",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Buccaneer",
      "type": "UNIT_BUCCANEER",
      "kind": "unit",
      "icon": "images/civ-uniques/buccaneer.png",
      "page": "Buccaneer",
      "depth": 1,
      "replaces": "Fleet Commander",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Serpent Mound",
      "type": "WONDER_SERPENT_MOUND",
      "kind": "wonder",
      "icon": "images/civ-uniques/serpent_mound.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_MACHINERY",
    "name": "Machinery",
    "cost": 525,
    "col": 0,
    "row": 1,
    "icon": "images/symbols/machinery.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Gristmill",
      "icon": "images/buildings/gristmill.png",
      "page": "Gristmill",
      "tip": "+4 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_FOOD] Food on Farms, Pastures, and Plantations. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Food Building[/TIP]. Must be placed on a River.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_FOOD] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Farms[LI] Pastures[LI] Plantations[/BLIST]",
       "Must be placed on a River."
      ]
     },
     {
      "kind": "building",
      "name": "Sawmill",
      "icon": "images/buildings/sawmill.png",
      "page": "Sawmill",
      "tip": "+3 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production on Camps and Woodcutters. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Production Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_PRODUCTION] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Camps[LI] Woodcutters[/BLIST]"
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Hwacha",
      "type": "UNIT_HWACHA",
      "kind": "unit",
      "icon": "images/civ-uniques/hwacha.png",
      "page": "Hwacha",
      "depth": 1,
      "replaces": "Catapult",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_GUILDS",
    "name": "Guilds",
    "cost": 870,
    "col": 1,
    "row": 3,
    "icon": "images/symbols/guilds.png",
    "prereqs": [
     "NODE_TECH_EX_CARTOGRAPHY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Guildhall",
      "icon": "images/buildings/guildhall.png",
      "page": "Guildhall",
      "tip": "+6[icon:YIELD_GOLD] Gold and +6[icon:YIELD_DIPLOMACY] Influence. Exploration Gold and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "6"
       },
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Navigable River Terrain",
         "Coastal Marine Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Exploration Gold and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Kiln",
      "icon": "images/buildings/kiln.png",
      "page": "Kiln",
      "tip": "+6[icon:YIELD_CULTURE] Culture. +10% [icon:YIELD_PRODUCTION] Production towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Exploration Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +10% [icon:YIELD_PRODUCTION] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+5 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP] for both land and sea [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
      "lines": [
       "+5 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP] for both land and sea [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "",
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_gw_relic.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_EX_FEUDALISM",
    "name": "Feudalism",
    "cost": 870,
    "col": 1,
    "row": 2,
    "icon": "images/symbols/feudalism.png",
    "prereqs": [
     "NODE_TECH_EX_CARTOGRAPHY",
     "NODE_TECH_EX_ASTRONOMY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Inn",
      "icon": "images/buildings/inn.png",
      "page": "Inn",
      "tip": "+6[icon:YIELD_FOOD] Food and +4 [icon:YIELD_HAPPINESS] Happiness. Exploration Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "6"
       },
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Exploration Food and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "building",
      "name": "Medieval Bridge",
      "icon": "images/buildings/medieval_bridge.png",
      "page": "Medieval Bridge",
      "tip": "+4[icon:YIELD_GOLD] Gold. Exploration [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: Exploration [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 [icon:YIELD_FOOD] Food on Farms and Plantations in Farming Towns, Fishing Towns, and Fort Towns.",
      "lines": [
       "+1 [icon:YIELD_FOOD] Food on Farms and Plantations in Farming Towns, Fishing Towns, and Fort Towns."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Collection 3: Water Wonder Pack",
      "civType": "",
      "name": "Nan Madol",
      "type": "WONDER_NAN_MADOL",
      "kind": "wonder",
      "icon": "images/wonders/nan_madol.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_HERALDRY",
    "name": "Heraldry",
    "cost": 870,
    "col": 1,
    "row": 1,
    "icon": "images/symbols/heraldry.png",
    "prereqs": [
     "NODE_TECH_EX_ASTRONOMY",
     "NODE_TECH_EX_MACHINERY"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Knight",
      "icon": "images/units/knight.png",
      "page": "Knight",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Man-At-Arms",
      "icon": "images/units/man_at_arms.png",
      "page": "Man-At-Arms",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Privateer",
      "icon": "images/units/privateer.png",
      "page": "Privateer",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Light Naval Unit[/TIP]. Has the [icon:UNIT_CAUTION]  [TIP:LOC_PEDIA_CONCEPTS_PIRATE_TOOLTIP]Pirate Ability[/TIP]. Defeating a unit with the Privateer provides [icon:YIELD_GOLD] Gold equal to 100% of that unit's [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP].",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Light Naval Unit[/TIP]. Has the [icon:UNIT_CAUTION]  [TIP:LOC_PEDIA_CONCEPTS_PIRATE_TOOLTIP]Pirate Ability[/TIP]. Defeating a unit with the Privateer provides [icon:YIELD_GOLD] Gold equal to 100% of that unit's [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_gw_relic.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "Mamluk",
      "type": "UNIT_MAMLUK_2",
      "kind": "unit",
      "icon": "images/units/mamluk.png",
      "page": "Mamluk",
      "depth": 1,
      "replaces": "Knight",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "Bolyar",
      "type": "UNIT_BOYAR_2",
      "kind": "unit",
      "icon": "images/civ-uniques/bolyar.png",
      "page": "",
      "depth": 1,
      "replaces": "Knight",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Tobang",
      "type": "UNIT_TOBANG_2",
      "kind": "unit",
      "icon": "images/civ-uniques/tobang.png",
      "page": "Tobang",
      "depth": 1,
      "replaces": "Knight",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Hawai'i",
      "civType": "CIVILIZATION_HAWAII",
      "name": "Leiomano",
      "type": "UNIT_LEIOMANO_2",
      "kind": "unit",
      "icon": "images/units/leiomano.png",
      "page": "Leiomano",
      "depth": 1,
      "replaces": "Man-At-Arms",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ming",
      "civType": "CIVILIZATION_MING",
      "name": "Xunleichong",
      "type": "UNIT_XUNLEICHONG_2",
      "kind": "unit",
      "icon": "images/units/xunleichong.png",
      "page": "Xunleichong",
      "depth": 1,
      "replaces": "Man-At-Arms",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Norman",
      "civType": "CIVILIZATION_NORMAN",
      "name": "Chevaler",
      "type": "UNIT_CHEVALER_2",
      "kind": "unit",
      "icon": "images/units/chevaler.png",
      "page": "Chevaler",
      "depth": 1,
      "replaces": "Knight",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Sloop",
      "type": "UNIT_SLOOP_2",
      "kind": "unit",
      "icon": "images/civ-uniques/sloop.png",
      "page": "Sloop",
      "depth": 1,
      "replaces": "Privateer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Kispoko Nena’to",
      "type": "UNIT_KISPOKO_NENA_TO_2",
      "kind": "unit",
      "icon": "images/civ-uniques/kispoko_nena_to.png",
      "page": "Kispoko Nena’to",
      "depth": 1,
      "replaces": "Man-At-Arms",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Songhai",
      "civType": "CIVILIZATION_SONGHAI",
      "name": "Gold Bangles Infantry",
      "type": "UNIT_GOLD_BANGLES_2",
      "kind": "unit",
      "icon": "images/units/gold_bangles_infantry.png",
      "page": "Gold Bangles Infantry",
      "depth": 1,
      "replaces": "Man-At-Arms",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Spain",
      "civType": "CIVILIZATION_SPAIN",
      "name": "Tercio",
      "type": "UNIT_TERCIO_2",
      "kind": "unit",
      "icon": "images/units/tercio.png",
      "page": "Tercio",
      "depth": 1,
      "replaces": "Man-At-Arms",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "Rila Monastery",
      "type": "WONDER_RILA_MONASTERY",
      "kind": "wonder",
      "icon": "images/wonders/rila_monastery.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_CASTLES",
    "name": "Castles",
    "cost": 870,
    "col": 1,
    "row": 0,
    "icon": "images/symbols/castles.png",
    "prereqs": [
     "NODE_TECH_EX_MACHINERY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Dungeon",
      "icon": "images/buildings/dungeon.png",
      "page": "Dungeon",
      "tip": "+4[icon:YIELD_DIPLOMACY] Influence and +6[icon:YIELD_PRODUCTION] Production. Exploration Diplomacy and Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "4"
       },
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Exploration Diplomacy and Production [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Medieval Walls",
      "icon": "images/buildings/medieval_walls.png",
      "page": "Medieval Walls",
      "tip": "Exploration Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
      "yields": [],
      "adj": [],
      "lines": [
       "Effect: Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
       "Exploration Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Crossbowman",
      "icon": "images/units/crossbowman.png",
      "page": "Crossbowman",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "espionage",
      "name": "Open The Gates",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Destroy the defenses of a District in a target Settlement.",
      "lines": [
       "Destroy the defenses of a District in a target Settlement."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Inca",
      "civType": "CIVILIZATION_INCA",
      "name": "Warak'aq",
      "type": "UNIT_WARAKAQ_2",
      "kind": "unit",
      "icon": "images/units/warak_aq.png",
      "page": "Warak'aq",
      "depth": 1,
      "replaces": "Crossbowman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "Keshig",
      "type": "UNIT_KESHIG_2",
      "kind": "unit",
      "icon": "images/units/keshig.png",
      "page": "Keshig",
      "depth": 1,
      "replaces": "Crossbowman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "Himeji Castle",
      "type": "WONDER_HIMEJI_CASTLE",
      "kind": "wonder",
      "icon": "images/civ-uniques/himeji_castle.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "Thành Huế",
      "type": "WONDER_THANH_HUE",
      "kind": "wonder",
      "icon": "images/civ-uniques/thanh_hue.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "Voi Chiến",
      "type": "UNIT_VOI_CHIEN_2",
      "kind": "unit",
      "icon": "images/civ-uniques/voi_chien.png",
      "page": "Voi Chiến",
      "depth": 1,
      "replaces": "Crossbowman",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_EDUCATION",
    "name": "Education",
    "cost": 1300,
    "col": 2,
    "row": 2,
    "icon": "images/symbols/education.png",
    "prereqs": [
     "NODE_TECH_EX_GUILDS",
     "NODE_TECH_EX_FEUDALISM"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "University",
      "icon": "images/buildings/university.png",
      "page": "University",
      "tip": "+8 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:YIELD_SCIENCE] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Shwedagon Zedi Daw",
      "icon": "images/wonders/shwedagon_zedi_daw.png",
      "page": "Shwedagon Zedi Daw",
      "tip": "[B]+4 [icon:YIELD_SCIENCE][/B]. [B]+1 [icon:YIELD_SCIENCE][/B] on all [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_RURAL_TOOLTIP]Rural[/TIP] tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] that have a natural Appeal. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Lake.",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on all [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_RURAL_TOOLTIP]Rural[/TIP] tiles in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] that have a natural Appeal. +1 [icon:ATTRIBUTE_WILDCARD] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute Point[/TIP]. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed adjacent to a Lake."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "tip": "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_gw_relic.png",
      "tip": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP].",
      "lines": [
       "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Heliocentric Model",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 5 [icon:SCIENCE_VP] Innovation and Naval Units gain +1 Movement upon completion.",
      "lines": [
       "Grants 5 [icon:SCIENCE_VP] Innovation and Naval Units gain +1 Movement upon completion."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_EX_SHIPBUILDING",
    "name": "Shipbuilding",
    "cost": 1300,
    "col": 2,
    "row": 1,
    "icon": "images/symbols/shipbuilding.png",
    "prereqs": [
     "NODE_TECH_EX_FEUDALISM",
     "NODE_TECH_EX_HERALDRY"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Shipyard",
      "icon": "images/buildings/shipyard.png",
      "page": "Shipyard",
      "tip": "+8 [icon:YIELD_PRODUCTION] Production. Exploration Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Must be placed on Coast adjacent to land. +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. +1 [icon:YIELD_PRODUCTION] Production for every Adjacent Hardwood and Niter Resource.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder",
         "Hardwood Resource",
         "Niter Resource"
        ]
       }
      ],
      "lines": [
       "Effect: +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location.",
       "Must be placed on Coast adjacent to land."
      ]
     },
     {
      "kind": "unit",
      "name": "Carrack",
      "icon": "images/units/carrack.png",
      "page": "Carrack",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP].",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can safely travel across deep Ocean Terrain without taking [icon:DAMAGED] Damage.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can safely travel across deep Ocean Terrain without taking [icon:DAMAGED] Damage."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "All Units ignore [icon:Action_Move] Movement penalties from deep Ocean Terrain.",
      "lines": [
       "All Units ignore [icon:Action_Move] Movement penalties from deep Ocean Terrain."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP] can safely travel across deep Ocean Terrain without taking [icon:DAMAGED] Damage.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP] can safely travel across deep Ocean Terrain without taking [icon:DAMAGED] Damage."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "All Tier 2 and Tier 3 [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can use the Automate Exploration Action.",
      "lines": [
       "All Tier 2 and Tier 3 [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can use the Automate Exploration Action."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] may enter deep Ocean Terrain.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] may enter deep Ocean Terrain."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Kalam",
      "type": "UNIT_KALAM_2",
      "kind": "unit",
      "icon": "images/units/kalam.png",
      "page": "Kalam",
      "depth": 1,
      "replaces": "Carrack",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "Víkingr",
      "type": "UNIT_VIKINGR_2",
      "kind": "unit",
      "icon": "images/civ-uniques/vikingr.png",
      "page": "Víkingr",
      "depth": 1,
      "replaces": "Carrack",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Majapahit",
      "civType": "CIVILIZATION_MAJAPAHIT",
      "name": "Cetbang",
      "type": "UNIT_CETBANG_2",
      "kind": "unit",
      "icon": "images/units/cetbang.png",
      "page": "Cetbang",
      "depth": 1,
      "replaces": "Carrack",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Havana Harbor",
      "type": "WONDER_HAVANA_HARBOR",
      "kind": "wonder",
      "icon": "images/wonders/havana_harbor.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_METALLURGY",
    "name": "Metallurgy",
    "cost": 1300,
    "col": 2,
    "row": 0,
    "icon": "images/symbols/metallurgy.png",
    "prereqs": [
     "NODE_TECH_EX_HERALDRY",
     "NODE_TECH_EX_CASTLES"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Armorer",
      "icon": "images/buildings/armorer.png",
      "page": "Armorer",
      "tip": "+8 [icon:YIELD_PRODUCTION] Production. Exploration Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. +1 [icon:YIELD_PRODUCTION] Production for each Adjacent Horses and Iron Resource.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder",
         "Horses Resource",
         "Iron Resource"
        ]
       }
      ],
      "lines": [
       "+8 [icon:YIELD_PRODUCTION] Production. Exploration Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. +10% [icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Trebuchet",
      "icon": "images/units/trebuchet.png",
      "page": "Trebuchet",
      "tip": "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard Strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Tier 2 Exploration [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard Strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:Action_Ranged] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP].",
      "lines": [
       "+3 [icon:Action_Ranged] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Hwacha",
      "type": "UNIT_HWACHA_2",
      "kind": "unit",
      "icon": "images/civ-uniques/hwacha.png",
      "page": "Hwacha",
      "depth": 1,
      "replaces": "Trebuchet",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_ARCHITECTURE",
    "name": "Architecture",
    "cost": 1900,
    "col": 3,
    "row": 2,
    "icon": "images/symbols/architecture.png",
    "prereqs": [
     "NODE_TECH_EX_EDUCATION",
     "NODE_TECH_EX_SHIPBUILDING"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Menagerie",
      "icon": "images/buildings/menagerie.png",
      "page": "Menagerie",
      "tip": "+8[icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_HAPPINESS] Happiness on Camps and Pastures. Exploration Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +1 [icon:YIELD_HAPPINESS] on Camps and Pastures."
      ]
     },
     {
      "kind": "building",
      "name": "Pavilion",
      "icon": "images/buildings/pavilion.png",
      "page": "Pavilion",
      "tip": "+8 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:YIELD_HAPPINESS] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "Forbidden City",
      "icon": "images/wonders/forbidden_city.png",
      "page": "Forbidden City",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on all [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:WONDER] Wonders. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. [B]+1 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on [icon:Action_Fortify] Fortifications in this [icon:YIELD_CITIES] City. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on all [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:WONDER] Wonders.",
       "[B]+1 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on [icon:Action_Fortify] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 Relic Slot on Pavilions",
      "lines": [
       "+1 Relic Slot on Pavilions"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_EX_METAL_CASTING",
    "name": "Metal Casting",
    "cost": 1900,
    "col": 3,
    "row": 0,
    "icon": "images/symbols/metal_casting.png",
    "prereqs": [
     "NODE_TECH_EX_SHIPBUILDING",
     "NODE_TECH_EX_METALLURGY"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Lancer",
      "icon": "images/units/lancer.png",
      "page": "Lancer",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Pikeman",
      "icon": "images/units/pikeman.png",
      "page": "Pikeman",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "Mamluk",
      "type": "UNIT_MAMLUK_3",
      "kind": "unit",
      "icon": "images/units/mamluk.png",
      "page": "Mamluk",
      "depth": 1,
      "replaces": "Lancer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "Bolyar",
      "type": "UNIT_BOYAR_3",
      "kind": "unit",
      "icon": "images/civ-uniques/bolyar.png",
      "page": "",
      "depth": 1,
      "replaces": "Lancer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Tobang",
      "type": "UNIT_TOBANG_3",
      "kind": "unit",
      "icon": "images/civ-uniques/tobang.png",
      "page": "Tobang",
      "depth": 1,
      "replaces": "Lancer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Hawai'i",
      "civType": "CIVILIZATION_HAWAII",
      "name": "Leiomano",
      "type": "UNIT_LEIOMANO_3",
      "kind": "unit",
      "icon": "images/units/leiomano.png",
      "page": "Leiomano",
      "depth": 1,
      "replaces": "Pikeman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ming",
      "civType": "CIVILIZATION_MING",
      "name": "Xunleichong",
      "type": "UNIT_XUNLEICHONG_3",
      "kind": "unit",
      "icon": "images/units/xunleichong.png",
      "page": "Xunleichong",
      "depth": 1,
      "replaces": "Pikeman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Norman",
      "civType": "CIVILIZATION_NORMAN",
      "name": "Chevaler",
      "type": "UNIT_CHEVALER_3",
      "kind": "unit",
      "icon": "images/units/chevaler.png",
      "page": "Chevaler",
      "depth": 1,
      "replaces": "Lancer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Kispoko Nena’to",
      "type": "UNIT_KISPOKO_NENA_TO_3",
      "kind": "unit",
      "icon": "images/civ-uniques/kispoko_nena_to.png",
      "page": "Kispoko Nena’to",
      "depth": 1,
      "replaces": "Pikeman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Songhai",
      "civType": "CIVILIZATION_SONGHAI",
      "name": "Gold Bangles Infantry",
      "type": "UNIT_GOLD_BANGLES_3",
      "kind": "unit",
      "icon": "images/units/gold_bangles_infantry.png",
      "page": "Gold Bangles Infantry",
      "depth": 1,
      "replaces": "Pikeman",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Spain",
      "civType": "CIVILIZATION_SPAIN",
      "name": "Tercio",
      "type": "UNIT_TERCIO_3",
      "kind": "unit",
      "icon": "images/units/tercio.png",
      "page": "Tercio",
      "depth": 1,
      "replaces": "Pikeman",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_URBAN_PLANNING",
    "name": "Urban Planning",
    "cost": 3625,
    "col": 4,
    "row": 2,
    "icon": "images/symbols/urban_planning.png",
    "prereqs": [
     "NODE_TECH_EX_ARCHITECTURE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Bank",
      "icon": "images/buildings/bank.png",
      "page": "Bank",
      "tip": "+8 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Exploration Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Navigable River Terrain",
         "Coastal Marine Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +1 [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Hospital",
      "icon": "images/buildings/hospital.png",
      "page": "Hospital",
      "tip": "+8 [icon:YIELD_FOOD] Food. +15% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]. Exploration Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "8"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +15% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Machu Pikchu",
      "icon": "images/wonders/machu_pikchu.png",
      "page": "Machu Pikchu",
      "tip": "[B]+4 [icon:YIELD_GOLD][/B]. [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] Adjacency for Mountains. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on a Grassland or Tropical Mountain.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] Adjacency for Mountains.",
       "Must be placed on a Grassland or Tropical Mountain."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "tip": "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "project",
      "name": "Discover Calculus",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 10  [icon:SCIENCE_VP] Innovation, a Scientific Attribute Point and 2 Siege units in the Capital upon completion.",
      "lines": [
       "Grants 10  [icon:SCIENCE_VP] Innovation, a Scientific Attribute Point and 2 Siege units in the Capital upon completion."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_EX_GUNPOWDER",
    "name": "Gunpowder",
    "cost": 3625,
    "col": 4,
    "row": 1,
    "icon": "images/symbols/gunpowder.png",
    "prereqs": [
     "NODE_TECH_EX_METAL_CASTING"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Arquebusier",
      "icon": "images/units/arquebusier.png",
      "page": "Arquebusier",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     },
     {
      "kind": "unit",
      "name": "Bombard",
      "icon": "images/units/bombard.png",
      "page": "Bombard",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard Strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard Strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Galleon",
      "icon": "images/units/galleon.png",
      "page": "Galleon",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP].",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Privateer",
      "icon": "images/units/privateer.png",
      "page": "Privateer",
      "tip": "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Light Naval Unit[/TIP]. Has the [icon:UNIT_CAUTION] [TIP:LOC_PEDIA_CONCEPTS_PIRATE_TOOLTIP]Pirate Ability[/TIP]. Defeating a unit with the Privateer provides [icon:YIELD_GOLD] Gold equal to 100% of that unit's [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP].",
      "lines": [
       "Tier 3 Exploration [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Light Naval Unit[/TIP]. Has the [icon:UNIT_CAUTION] [TIP:LOC_PEDIA_CONCEPTS_PIRATE_TOOLTIP]Pirate Ability[/TIP]. Defeating a unit with the Privateer provides [icon:YIELD_GOLD] Gold equal to 100% of that unit's [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Kalam",
      "type": "UNIT_KALAM_3",
      "kind": "unit",
      "icon": "images/units/kalam.png",
      "page": "Kalam",
      "depth": 1,
      "replaces": "Galleon",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Hwacha",
      "type": "UNIT_HWACHA_3",
      "kind": "unit",
      "icon": "images/civ-uniques/hwacha.png",
      "page": "Hwacha",
      "depth": 1,
      "replaces": "Bombard",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "Víkingr",
      "type": "UNIT_VIKINGR_3",
      "kind": "unit",
      "icon": "images/civ-uniques/vikingr.png",
      "page": "Víkingr",
      "depth": 1,
      "replaces": "Galleon",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Inca",
      "civType": "CIVILIZATION_INCA",
      "name": "Warak'aq",
      "type": "UNIT_WARAKAQ_3",
      "kind": "unit",
      "icon": "images/units/warak_aq.png",
      "page": "Warak'aq",
      "depth": 1,
      "replaces": "Arquebusier",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Majapahit",
      "civType": "CIVILIZATION_MAJAPAHIT",
      "name": "Cetbang",
      "type": "UNIT_CETBANG_3",
      "kind": "unit",
      "icon": "images/units/cetbang.png",
      "page": "Cetbang",
      "depth": 1,
      "replaces": "Galleon",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "Keshig",
      "type": "UNIT_KESHIG_3",
      "kind": "unit",
      "icon": "images/units/keshig.png",
      "page": "Keshig",
      "depth": 1,
      "replaces": "Arquebusier",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Sloop",
      "type": "UNIT_SLOOP_3",
      "kind": "unit",
      "icon": "images/civ-uniques/sloop.png",
      "page": "Sloop",
      "depth": 1,
      "replaces": "Privateer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "Voi Chiến",
      "type": "UNIT_VOI_CHIEN_3",
      "kind": "unit",
      "icon": "images/civ-uniques/voi_chien.png",
      "page": "Voi Chiến",
      "depth": 1,
      "replaces": "Arquebusier",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_EX_FUTURE_TECH",
    "name": "Future Tech",
    "cost": 4250,
    "col": 5,
    "row": 2,
    "icon": "images/symbols/future_tech.png",
    "prereqs": [
     "NODE_TECH_EX_URBAN_PLANNING",
     "NODE_TECH_EX_GUNPOWDER"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 [icon:ATTRIBUTE] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute Point[/TIP].",
      "lines": [
       "+1 [icon:ATTRIBUTE] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute Point[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "A boost for a starting [icon:RADIAL_TECH] [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "A boost for a starting [icon:RADIAL_TECH] [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+10 [icon:NOTIFICATION_TEAM_VICTORIOUS] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "+10 [icon:NOTIFICATION_TEAM_VICTORIOUS] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants 3 [icon:SCIENCE_VP] Innovation",
      "lines": [
       "Grants 3 [icon:SCIENCE_VP] Innovation"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "MODERN": {
  "age": "Modern",
  "nodes": [
   {
    "id": "NODE_TECH_MO_ACADEMICS",
    "name": "Academics",
    "cost": 1400,
    "col": 0,
    "row": 1,
    "icon": "images/symbols/academics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Schoolhouse",
      "icon": "images/buildings/schoolhouse.png",
      "page": "Schoolhouse",
      "tip": "+9[icon:YIELD_SCIENCE] Science. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Modern Science Building."
      ]
     },
     {
      "kind": "wonder",
      "name": "Oxford University",
      "icon": "images/wonders/oxford_university.png",
      "page": "Oxford University",
      "tip": "[B]+4 [icon:YIELD_SCIENCE][/B]. Grants 2 [icon:RADIAL_TECH] free [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technologies[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "Grants 2 [icon:RADIAL_TECH] free [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technologies[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] point. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_STEAM_ENGINE",
    "name": "Steam Engine",
    "cost": 1400,
    "col": 0,
    "row": 2,
    "icon": "images/symbols/steam_engine.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Ironworks",
      "icon": "images/buildings/ironworks.png",
      "page": "Ironworks",
      "tip": "+4 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production on Mines, Quarries, Woodcutters, Clay Pits, Oil Rigs, and Mountain Terrain. [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Production Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_PRODUCTION] on the following [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from its [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus:[BLIST][LI] Mines[LI] Quarries[LI] Woodcutters[LI] Clay Pits[LI] Oil Rigs[LI] Mountain Terrain[/BLIST]"
      ]
     },
     {
      "kind": "building",
      "name": "Port",
      "icon": "images/buildings/port.png",
      "page": "Port",
      "tip": "+9[icon:YIELD_GOLD] Gold. +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Modern Gold Building. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Must be placed on Coast adjacent to land. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +2 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location.",
       "Must be placed on Coast adjacent to land. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Ironclad",
      "icon": "images/units/ironclad.png",
      "page": "Ironclad",
      "tip": "Tier 1 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "Tier 1 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Barbary Corsair",
      "type": "UNIT_BARBARY_CORSAIR",
      "kind": "unit",
      "icon": "images/civ-uniques/barbary_corsair.png",
      "page": "Barbary Corsair",
      "depth": 1,
      "replaces": "Ironclad",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_MILITARY_SCIENCE",
    "name": "Military Science",
    "cost": 1400,
    "col": 0,
    "row": 3,
    "icon": "images/symbols/military_science.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Defensive Fortifications",
      "icon": "images/buildings/defensive_fortifications.png",
      "page": "Defensive Fortifications",
      "tip": "Modern Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
      "yields": [],
      "adj": [],
      "lines": [
       "Effect: Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
       "Modern Fortification and [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Military Academy",
      "icon": "images/buildings/military_academy.png",
      "page": "Military Academy",
      "tip": "+9[icon:YIELD_PRODUCTION] Production. [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Grants a free [icon:NAR_REW_PROMOTION] [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Level[/TIP] to new [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP] trained in this Settlement.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Grants a free [icon:NAR_REW_PROMOTION] [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Level[/TIP] to new [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP] trained in this Settlement."
      ]
     },
     {
      "kind": "wonder",
      "name": "Red Fort",
      "icon": "images/wonders/red_fort.png",
      "page": "Red Fort",
      "tip": "[B]+4 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION]. Acts as a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP] that must be conquered. [B]+50 [icon:Action_Heal] HP[/B] to this [icon:CITY_FORTIFIED] Fortified District and all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Centers. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "4"
       },
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "Acts as a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP] that must be conquered. [B]+50 [icon:Action_Heal] HP[/B] to this [icon:CITY_FORTIFIED] Fortified District and all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Centers.",
       "Must be adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_ELECTRICITY",
    "name": "Electricity",
    "cost": 2425,
    "col": 1,
    "row": 0,
    "icon": "images/symbols/electricity.png",
    "prereqs": [
     "NODE_TECH_MO_ACADEMICS"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Laboratory",
      "icon": "images/buildings/laboratory.png",
      "page": "Laboratory",
      "tip": "+12 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_SCIENCE] Science on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. +1 [icon:YIELD_HAPPINESS] Happiness for each Adjacent Quinine Resource. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "12"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       },
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent Quinine Resource"
       }
      ],
      "lines": [
       "[B]Effect:[/B] +1 [icon:YIELD_SCIENCE] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "tip": "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "+1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "Battersea Power Station",
      "type": "WONDER_BATTERSEA_POWER_STATION",
      "kind": "wonder",
      "icon": "images/wonders/battersea_power_station.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_URBANIZATION",
    "name": "Urbanization",
    "cost": 2425,
    "col": 1,
    "row": 1,
    "icon": "images/symbols/urbanization.png",
    "prereqs": [
     "NODE_TECH_MO_ACADEMICS",
     "NODE_TECH_MO_STEAM_ENGINE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Department Store",
      "icon": "images/buildings/department_store.png",
      "page": "Department Store",
      "tip": "+12 [icon:YIELD_HAPPINESS] Happiness. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Modern Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "12"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Opera House",
      "icon": "images/buildings/opera_house.png",
      "page": "Opera House",
      "tip": "+12[icon:YIELD_CULTURE] Culture. +6[icon:YIELD_DIPLOMACY] Influence. Modern Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "12"
       },
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Modern Culture and Diplomacy [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Modern Bridge",
      "icon": "images/buildings/modern_bridge.png",
      "page": "Modern Bridge",
      "tip": "+6 [icon:YIELD_GOLD] Gold. Modern [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]Effect:[/B] Modern [TIP:LOC_PEDIA_CONCEPTS_BRIDGE_TOOLTIP]Bridge[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 [icon:YIELD_POPULATION] Population in every City",
      "lines": [
       "+1 [icon:YIELD_POPULATION] Population in every City"
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Collection 2: Asia Wonder Pack",
      "civType": "",
      "name": "Ubudiah Mosque",
      "type": "WONDER_UBUDIAH_MOSQUE",
      "kind": "wonder",
      "icon": "images/wonders/ubudiah_mosque.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_COMBUSTION",
    "name": "Combustion",
    "cost": 2425,
    "col": 1,
    "row": 2,
    "icon": "images/symbols/combustion.png",
    "prereqs": [
     "NODE_TECH_MO_STEAM_ENGINE",
     "NODE_TECH_MO_MILITARY_SCIENCE"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Cruiser",
      "icon": "images/units/cruiser.png",
      "page": "Cruiser",
      "tip": "Tier 2 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "Tier 2 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Dreadnought",
      "icon": "images/units/dreadnought.png",
      "page": "Dreadnought",
      "tip": "Tier 2 Modern Heavy [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "Tier 2 Modern Heavy [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Landship",
      "icon": "images/units/landship.png",
      "page": "Landship",
      "tip": "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "Revenge",
      "type": "UNIT_REVENGE",
      "kind": "unit",
      "icon": "images/civ-uniques/revenge.png",
      "page": "Revenge",
      "depth": 1,
      "replaces": "Dreadnought",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "Turtle Ship",
      "type": "UNIT_TURTLE_SHIP_2",
      "kind": "unit",
      "icon": "images/civ-uniques/turtle_ship.png",
      "page": "Turtle Ship",
      "depth": 1,
      "replaces": "Dreadnought",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Meiji Japan",
      "civType": "CIVILIZATION_MEIJI",
      "name": "Mikasa",
      "type": "UNIT_MIKASA",
      "kind": "unit",
      "icon": "images/units/mikasa.png",
      "page": "Mikasa",
      "depth": 1,
      "replaces": "Dreadnought",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Barbary Corsair",
      "type": "UNIT_BARBARY_CORSAIR_2",
      "kind": "unit",
      "icon": "images/civ-uniques/barbary_corsair.png",
      "page": "Barbary Corsair",
      "depth": 1,
      "replaces": "Cruiser",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Prussia",
      "civType": "CIVILIZATION_PRUSSIA",
      "name": "Hussar",
      "type": "UNIT_HUSSAR_2",
      "kind": "unit",
      "icon": "images/units/hussar.png",
      "page": "Hussar",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "Gholām",
      "type": "UNIT_GHILMAN_2",
      "kind": "unit",
      "icon": "images/civ-uniques/gholam.png",
      "page": "Gholām",
      "depth": 1,
      "replaces": "Landship",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Russia",
      "civType": "CIVILIZATION_RUSSIA",
      "name": "Cossack",
      "type": "UNIT_COSSACK_2",
      "kind": "unit",
      "icon": "images/units/cossack.png",
      "page": "Cossack",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_INDUSTRIALIZATION",
    "name": "Industrialization",
    "cost": 2425,
    "col": 1,
    "row": 3,
    "icon": "images/symbols/industrialization.png",
    "prereqs": [
     "NODE_TECH_MO_MILITARY_SCIENCE"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Rail Station",
      "icon": "images/buildings/rail_station.png",
      "page": "Rail Station",
      "tip": "+9 [icon:YIELD_GOLD] Gold, +9 [icon:YIELD_PRODUCTION] Production. +10% [icon:YIELD_PRODUCTION] Production towards training Units in [icon:YIELD_CITIES] Cities with a Railroad. When built, upgrades any Roads to [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that also have a Rail Station into Railroads. Railroads allow Units to move from one [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Rail Station to another. +1 [icon:YIELD_GOLD] Gold for each Adjacent Quarter. Modern Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "9"
       },
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "+10%[icon:YIELD_PRODUCTION] Production towards training Units in [icon:YIELD_CITIES] Cities with a Railroad.",
       "[B]Effect:[/B] +10% [icon:YIELD_PRODUCTION] Production towards training Units in [icon:YIELD_CITIES] Cities with a Railroad.",
       "When built, upgrades any Roads to [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that also have a Rail Station into Railroads. Railroads allow Units to move from one [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Rail Station to another.",
       "Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Field Gun",
      "icon": "images/units/field_gun.png",
      "page": "Field Gun",
      "tip": "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     },
     {
      "kind": "unit",
      "name": "Howitzer",
      "icon": "images/units/howitzer.png",
      "page": "Howitzer",
      "tip": "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Rifle Infantry",
      "icon": "images/units/rifle_infantry.png",
      "page": "Rifle Infantry",
      "tip": "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 2 Modern [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "Settlements connected by Rail gain +3 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for each type of Unique Improvement in the Settlement.",
      "lines": [
       "Settlements connected by Rail gain +3 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for each type of Unique Improvement in the Settlement."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "America",
      "civType": "CIVILIZATION_AMERICA",
      "name": "Marine",
      "type": "UNIT_MARINE",
      "kind": "unit",
      "icon": "images/units/marine.png",
      "page": "Marine",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Buganda",
      "civType": "CIVILIZATION_BUGANDA",
      "name": "Abambowa",
      "type": "UNIT_ABAMBOWA_2",
      "kind": "unit",
      "icon": "images/units/abambowa.png",
      "page": "Abambowa",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "French Empire",
      "civType": "CIVILIZATION_FRENCH_EMPIRE",
      "name": "Garde Impériale",
      "type": "UNIT_GARDE_IMPERIALE_2",
      "kind": "unit",
      "icon": "images/civ-uniques/garde_imperiale.png",
      "page": "Garde Impériale",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mexico",
      "civType": "CIVILIZATION_MEXICO",
      "name": "Soldaderas",
      "type": "UNIT_SOLDADERAS_2",
      "kind": "unit",
      "icon": "images/units/soldaderas.png",
      "page": "Soldaderas",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mughal",
      "civType": "CIVILIZATION_MUGHAL",
      "name": "Sepoy",
      "type": "UNIT_SEPOY_2",
      "kind": "unit",
      "icon": "images/units/sepoy.png",
      "page": "Sepoy",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "Gurkha",
      "type": "UNIT_GURKHA_2",
      "kind": "unit",
      "icon": "images/civ-uniques/gurkha.png",
      "page": "Gurkha",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Janissary",
      "type": "UNIT_JANISSARY_2",
      "kind": "unit",
      "icon": "images/civ-uniques/janissary.png",
      "page": "Janissary",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Qing",
      "civType": "CIVILIZATION_QING",
      "name": "Gusa",
      "type": "UNIT_GUSA_2",
      "kind": "unit",
      "icon": "images/units/gusa.png",
      "page": "Gusa",
      "depth": 1,
      "replaces": "Rifle Infantry",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Russia",
      "civType": "CIVILIZATION_RUSSIA",
      "name": "Katyusha Rocket Launcher",
      "type": "UNIT_KATYUSHA",
      "kind": "unit",
      "icon": "images/units/katyusha_rocket_launcher.png",
      "page": "Katyusha Rocket Launcher",
      "depth": 1,
      "replaces": "Howitzer",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Siam",
      "civType": "CIVILIZATION_SIAM",
      "name": "Chang Beun",
      "type": "UNIT_CHANG_BEUN_2",
      "kind": "unit",
      "icon": "images/units/chang_beun.png",
      "page": "Chang Beun",
      "depth": 1,
      "replaces": "Field Gun",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_RADIO",
    "name": "Radio",
    "cost": 3000,
    "col": 2,
    "row": 1,
    "icon": "images/symbols/radio.png",
    "prereqs": [
     "NODE_TECH_MO_ELECTRICITY",
     "NODE_TECH_MO_URBANIZATION"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Radio Station",
      "icon": "images/buildings/radio_station.png",
      "page": "Radio Station",
      "tip": "+9[icon:YIELD_HAPPINESS] Happiness and +9[icon:YIELD_DIPLOMACY] Influence. Modern Diplomacy and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "9"
       },
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Natural Wonder",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Modern Diplomacy and Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Tenement",
      "icon": "images/buildings/tenement.png",
      "page": "Tenement",
      "tip": "+12 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_HAPPINESS] Happiness on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Modern Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "12"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +1 [icon:YIELD_HAPPINESS] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Eiffel Tower",
      "icon": "images/wonders/eiffel_tower.png",
      "page": "Eiffel Tower",
      "tip": "[B]+5 [icon:YIELD_CULTURE][/B]. [B]+4 [icon:YIELD_CULTURE][/B] and [B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] and [B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Radio Telescope",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 5 [icon:SCIENCE_VP] Innovation upon completion. Requires a Radio Station in the City. Each Civilization can only complete this Project once.",
      "lines": [
       "Grants 5 [icon:SCIENCE_VP] Innovation upon completion. Requires a Radio Station in the City. Each Civilization can only complete this Project once."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_FLIGHT",
    "name": "Flight",
    "cost": 3000,
    "col": 2,
    "row": 2,
    "icon": "images/symbols/flight.png",
    "prereqs": [
     "NODE_TECH_MO_URBANIZATION",
     "NODE_TECH_MO_COMBUSTION"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Aerodrome",
      "icon": "images/buildings/aerodrome.png",
      "page": "Aerodrome",
      "tip": "+9[icon:YIELD_PRODUCTION] Production. Modern Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Required to train [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Packed [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] have +1 Intercept Range. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "9"
       }
      ],
      "adj": [],
      "lines": [
       "[B]Effect:[/B] Required to train [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] trained in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] will spawn at this [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building's[/TIP] location. Packed [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP] have +1 Intercept Range.",
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Squadron Commander",
      "icon": "images/units/squadron_commander.png",
      "page": "Squadron Commander",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Air Commander Unit[/TIP]",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Air Commander Unit[/TIP]"
      ]
     },
     {
      "kind": "unit",
      "name": "Biplane",
      "icon": "images/units/biplane.png",
      "page": "Biplane",
      "tip": "Tier 2 Modern Fighter [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Can intercept enemy [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] or [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "Tier 2 Modern Fighter [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Can intercept enemy [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] or [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Trench Fighter",
      "icon": "images/units/trench_fighter.png",
      "page": "Trench Fighter",
      "tip": "Tier 2 Modern Ground Attack [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Strong against Land and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. Not very effective against Aircraft.",
      "lines": [
       "Tier 2 Modern Ground Attack [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Strong against Land and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. Not very effective against Aircraft."
      ]
     },
     {
      "kind": "unit",
      "name": "Bomber",
      "icon": "images/units/bomber.png",
      "page": "Bomber",
      "tip": "Tier 2 Modern Siege [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] at long range.",
      "lines": [
       "Tier 2 Modern Siege [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] at long range."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "project",
      "name": "Trans-Oceanic Flight",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "When completed:[BLIST][LI] Gain a [icon:UNIT_SQUADRON_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Squadron Commander[/TIP].[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST][n]Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once.",
      "lines": [
       "When completed:[BLIST][LI] Gain a [icon:UNIT_SQUADRON_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Squadron Commander[/TIP].[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST]",
       "Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+1 Intercept Range for Fighter Units.",
      "lines": [
       "+1 Intercept Range for Fighter Units."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "Settlements with an Aerodrome gain +3 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on Unique Buildings.",
      "lines": [
       "Settlements with an Aerodrome gain +3 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on Unique Buildings."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Meiji Japan",
      "civType": "CIVILIZATION_MEIJI",
      "name": "Zero",
      "type": "UNIT_ZERO",
      "kind": "unit",
      "icon": "images/units/zero.png",
      "page": "Zero",
      "depth": 1,
      "replaces": "Biplane",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Prussia",
      "civType": "CIVILIZATION_PRUSSIA",
      "name": "Stuka",
      "type": "UNIT_STUKA",
      "kind": "unit",
      "icon": "images/units/stuka.png",
      "page": "Stuka",
      "depth": 1,
      "replaces": "Trench Fighter",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_MASS_PRODUCTION",
    "name": "Mass Production",
    "cost": 3000,
    "col": 2,
    "row": 3,
    "icon": "images/symbols/mass_production.png",
    "prereqs": [
     "NODE_TECH_MO_COMBUSTION",
     "NODE_TECH_MO_INDUSTRIALIZATION"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Cannery",
      "icon": "images/buildings/cannery.png",
      "page": "Cannery",
      "tip": "+9 [icon:YIELD_FOOD] Food. +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]. +1 [icon:YIELD_FOOD] Food for each Adjacent Fish Resource. Modern Food [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder",
         "Fish Resource"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +10% [icon:GROWTH_RATE] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Factory",
      "icon": "images/buildings/factory.png",
      "page": "Factory",
      "tip": "+12 [icon:YIELD_PRODUCTION] Production. Allows one type of [icon:RADIAL_RESOURCES] Factory Resource to be assigned to this Settlement. +1 [icon:RADIAL_RESOURCES] Resource Capacity in this Settlement. Modern Resource Building. Must be built in a Settlement connected to the [icon:NOTIFICATION_SELECT_CAPITAL] Capital by Railroad. Can be purchased in [icon:YIELD_TOWNS] Towns.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "12"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_PRODUCTION] for each adjacent:",
        "list": [
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] Allows one type of [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] to be assigned to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be built in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] connected to the [icon:NOTIFICATION_SELECT_CAPITAL] Capital by Railroad. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_economic.png",
      "tip": "+3 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for Slotted Factory [icon:RADIAL_RESOURCES] Resources.",
      "lines": [
       "+3 [icon:ECONOMIC_VP] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for Slotted Factory [icon:RADIAL_RESOURCES] Resources."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Sabotage Shipping",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Destroy all Ports and Rail Stations in a target City.",
      "lines": [
       "Destroy all Ports and Rail Stations in a target City."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Collection 4: Brush and Blade Wonder Pack",
      "civType": "",
      "name": "Nirayama Reverberatory Furnace",
      "type": "WONDER_NIRAYAMA_REVERBERATORY_FURNACE",
      "kind": "wonder",
      "icon": "images/wonders/nirayama_reverberatory_furnace.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_COMPUTATION",
    "name": "Computation",
    "cost": 4000,
    "col": 3,
    "row": 1,
    "icon": "images/symbols/computation.png",
    "prereqs": [
     "NODE_TECH_MO_RADIO"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Stock Exchange",
      "icon": "images/buildings/stock_exchange.png",
      "page": "Stock Exchange",
      "tip": "+12 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]. Modern Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "12"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "[B]Effect:[/B] +1 [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "-1 [icon:YIELD_HAPPINESS] Happiness [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "-1 [icon:YIELD_HAPPINESS] Happiness [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_MOBILIZATION",
    "name": "Mobilization",
    "cost": 4000,
    "col": 3,
    "row": 2,
    "icon": "images/symbols/mobilization.png",
    "prereqs": [
     "NODE_TECH_MO_FLIGHT"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Aircraft Carrier",
      "icon": "images/units/aircraft_carrier.png",
      "page": "Aircraft Carrier",
      "tip": "Naval [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP] and Air [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Unit",
      "lines": [
       "Naval [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP] and Air [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Unit"
      ]
     },
     {
      "kind": "unit",
      "name": "Battleship",
      "icon": "images/units/battleship.png",
      "page": "Battleship",
      "tip": "Tier 3 Modern Heavy [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "Tier 3 Modern Heavy [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Destroyer",
      "icon": "images/units/destroyer.png",
      "page": "Destroyer",
      "tip": "Tier 3 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "Tier 3 Modern Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "unit",
      "name": "Submarine",
      "icon": "images/units/submarine.png",
      "page": "Submarine",
      "tip": "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]. Can only attack Naval or Embarked Units.",
      "lines": [
       "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]. Can only attack Naval or Embarked Units."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "Revenge",
      "type": "UNIT_REVENGE_2",
      "kind": "unit",
      "icon": "images/civ-uniques/revenge.png",
      "page": "Revenge",
      "depth": 1,
      "replaces": "Battleship",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "Turtle Ship",
      "type": "UNIT_TURTLE_SHIP_3",
      "kind": "unit",
      "icon": "images/civ-uniques/turtle_ship.png",
      "page": "Turtle Ship",
      "depth": 1,
      "replaces": "Battleship",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Meiji Japan",
      "civType": "CIVILIZATION_MEIJI",
      "name": "Mikasa",
      "type": "UNIT_MIKASA_2",
      "kind": "unit",
      "icon": "images/units/mikasa.png",
      "page": "Mikasa",
      "depth": 1,
      "replaces": "Battleship",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Barbary Corsair",
      "type": "UNIT_BARBARY_CORSAIR_3",
      "kind": "unit",
      "icon": "images/civ-uniques/barbary_corsair.png",
      "page": "Barbary Corsair",
      "depth": 1,
      "replaces": "Destroyer",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_ARMOR",
    "name": "Armor",
    "cost": 4000,
    "col": 3,
    "row": 3,
    "icon": "images/symbols/armor.png",
    "prereqs": [
     "NODE_TECH_MO_MASS_PRODUCTION"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Infantry Company",
      "icon": "images/units/infantry_company.png",
      "page": "Infantry Company",
      "tip": "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP].",
      "lines": [
       "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Tank",
      "icon": "images/units/tank.png",
      "page": "Tank",
      "tip": "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP].",
      "lines": [
       "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "unit",
      "name": "AT Gun",
      "icon": "images/units/at_gun.png",
      "page": "AT Gun",
      "tip": "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense.",
      "lines": [
       "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Unit[/TIP]. Stronger on attack than defense."
      ]
     },
     {
      "kind": "unit",
      "name": "Assault Gun",
      "icon": "images/units/assault_gun.png",
      "page": "Assault Gun",
      "tip": "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Tier 3 Modern [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "America",
      "civType": "CIVILIZATION_AMERICA",
      "name": "Marine",
      "type": "UNIT_MARINE_2",
      "kind": "unit",
      "icon": "images/units/marine.png",
      "page": "Marine",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Buganda",
      "civType": "CIVILIZATION_BUGANDA",
      "name": "Abambowa",
      "type": "UNIT_ABAMBOWA_3",
      "kind": "unit",
      "icon": "images/units/abambowa.png",
      "page": "Abambowa",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "French Empire",
      "civType": "CIVILIZATION_FRENCH_EMPIRE",
      "name": "Garde Impériale",
      "type": "UNIT_GARDE_IMPERIALE_3",
      "kind": "unit",
      "icon": "images/civ-uniques/garde_imperiale.png",
      "page": "Garde Impériale",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mexico",
      "civType": "CIVILIZATION_MEXICO",
      "name": "Soldaderas",
      "type": "UNIT_SOLDADERAS_3",
      "kind": "unit",
      "icon": "images/units/soldaderas.png",
      "page": "Soldaderas",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mughal",
      "civType": "CIVILIZATION_MUGHAL",
      "name": "Sepoy",
      "type": "UNIT_SEPOY_3",
      "kind": "unit",
      "icon": "images/units/sepoy.png",
      "page": "Sepoy",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "Gurkha",
      "type": "UNIT_GURKHA_3",
      "kind": "unit",
      "icon": "images/civ-uniques/gurkha.png",
      "page": "Gurkha",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Janissary",
      "type": "UNIT_JANISSARY_3",
      "kind": "unit",
      "icon": "images/civ-uniques/janissary.png",
      "page": "Janissary",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Prussia",
      "civType": "CIVILIZATION_PRUSSIA",
      "name": "Hussar",
      "type": "UNIT_HUSSAR_3",
      "kind": "unit",
      "icon": "images/units/hussar.png",
      "page": "Hussar",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "Gholām",
      "type": "UNIT_GHILMAN_3",
      "kind": "unit",
      "icon": "images/civ-uniques/gholam.png",
      "page": "Gholām",
      "depth": 1,
      "replaces": "Tank",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Qing",
      "civType": "CIVILIZATION_QING",
      "name": "Gusa",
      "type": "UNIT_GUSA_3",
      "kind": "unit",
      "icon": "images/units/gusa.png",
      "page": "Gusa",
      "depth": 1,
      "replaces": "Infantry Company",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Russia",
      "civType": "CIVILIZATION_RUSSIA",
      "name": "Cossack",
      "type": "UNIT_COSSACK_3",
      "kind": "unit",
      "icon": "images/units/cossack.png",
      "page": "Cossack",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Russia",
      "civType": "CIVILIZATION_RUSSIA",
      "name": "Katyusha Rocket Launcher",
      "type": "UNIT_KATYUSHA_2",
      "kind": "unit",
      "icon": "images/units/katyusha_rocket_launcher.png",
      "page": "Katyusha Rocket Launcher",
      "depth": 2,
      "replaces": "Assault Gun",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Siam",
      "civType": "CIVILIZATION_SIAM",
      "name": "Chang Beun",
      "type": "UNIT_CHANG_BEUN_3",
      "kind": "unit",
      "icon": "images/units/chang_beun.png",
      "page": "Chang Beun",
      "depth": 2,
      "replaces": "AT Gun",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_AERODYNAMICS",
    "name": "Aerodynamics",
    "cost": 6000,
    "col": 4,
    "row": 2,
    "icon": "images/symbols/aerodynamics.png",
    "prereqs": [
     "NODE_TECH_MO_COMPUTATION",
     "NODE_TECH_MO_MOBILIZATION",
     "NODE_TECH_MO_ARMOR"
    ],
    "unlocks": [
     {
      "kind": "unit",
      "name": "Fighter",
      "icon": "images/units/fighter.png",
      "page": "Fighter",
      "tip": "Tier 3 Modern Fighter [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Can intercept enemy [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] or [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "Tier 3 Modern Fighter [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Can intercept enemy [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] or [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Dive bomber",
      "icon": "images/units/dive_bomber.png",
      "page": "Dive bomber",
      "tip": "Tier 3 Modern Ground Attack [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Strong against Land and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP].",
      "lines": [
       "Tier 3 Modern Ground Attack [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. Strong against Land and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. Not very effective against [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Heavy Bomber",
      "icon": "images/units/heavy_bomber.png",
      "page": "Heavy Bomber",
      "tip": "Tier 3 Modern Siege [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] at long range.",
      "lines": [
       "Tier 3 Modern Siege [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Unit[/TIP]. High Bombard strength for attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] at long range."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]5 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]5 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Break The Sound Barrier",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "When completed:[BLIST][LI] +1 [icon:NAR_REW_COMBAT]Combat Strength to Air Units.[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST][n]Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once.",
      "lines": [
       "When completed:[BLIST][LI] +1 [icon:NAR_REW_COMBAT]Combat Strength to Air Units.[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST]",
       "Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP].",
      "lines": [
       "+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Meiji Japan",
      "civType": "CIVILIZATION_MEIJI",
      "name": "Zero",
      "type": "UNIT_ZERO_2",
      "kind": "unit",
      "icon": "images/units/zero.png",
      "page": "Zero",
      "depth": 1,
      "replaces": "Fighter",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Prussia",
      "civType": "CIVILIZATION_PRUSSIA",
      "name": "Stuka",
      "type": "UNIT_STUKA_2",
      "kind": "unit",
      "icon": "images/units/stuka.png",
      "page": "Stuka",
      "depth": 1,
      "replaces": "Dive bomber",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_TECH_MO_ROCKETRY",
    "name": "Rocketry",
    "cost": 8500,
    "col": 5,
    "row": 2,
    "icon": "images/symbols/rocketry.png",
    "prereqs": [
     "NODE_TECH_MO_AERODYNAMICS"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Launch Pad",
      "icon": "images/buildings/launch_pad.png",
      "page": "Launch Pad",
      "tip": "+24 [icon:YIELD_SCIENCE] Science. Unlocks the [icon:DEFAULT_PROJECT] Launch Satellite [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. Modern Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "18"
       }
      ],
      "adj": [],
      "lines": [
       "[B]Effect:[/B] Unlocks the [icon:DEFAULT_PROJECT] Launch Satellite [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Occupies a full tile and cannot be paired with another [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Sabotage Space Program",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Increases the time it takes to construct Launch Pads and the time to complete the [icon:DEFAULT_PROJECT] Launch Satellite [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
      "lines": [
       "Increases the time it takes to construct Launch Pads and the time to complete the [icon:DEFAULT_PROJECT] Launch Satellite [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Launch Satellite",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "When completed:[BLIST][LI] Reveals the entire map.[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST][n]Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once.",
      "lines": [
       "When completed:[BLIST][LI] Reveals the entire map.[LI] +5 [icon:SCIENCE_VP] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].[/BLIST]",
       "Each Civilization can only complete this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] once."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]5 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]5 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Crewed Space Flight Preparation",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "Grants 15 [icon:SCIENCE_VP] Innovation upon completion. Requires a Launch Pad in the City. Repeatable.",
      "lines": [
       "Grants 15 [icon:SCIENCE_VP] Innovation upon completion. Requires a Launch Pad in the City. Repeatable."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_NUCLEAR_FISSION",
    "name": "Nuclear Fission",
    "cost": 8500,
    "col": 5,
    "row": 3,
    "icon": "images/symbols/nuclear_fission.png",
    "prereqs": [
     "NODE_TECH_MO_AERODYNAMICS"
    ],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Manhattan Project",
      "icon": "images/wonders/manhattan_project.png",
      "page": "Manhattan Project",
      "tip": "[B]+5 [icon:YIELD_SCIENCE][/B]. Grants player a Nuclear Weapon, and allows you to build additional Nuclear Weapons via a [icon:DEFAULT_PROJECT] Project. Unlocks the [icon:DEFAULT_PROJECT] Project Operation Ivy and Produce Nuclear Weapon [icon:DEFAULT_PROJECT] Projects. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. This [icon:WONDER] Wonder can be built by multiple Civilizations. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "Grants player a Nuclear Weapon, and allows you to build additional Nuclear Weapons via a [icon:DEFAULT_PROJECT] Project. Unlocks the [icon:DEFAULT_PROJECT] Project Operation Ivy and Produce Nuclear Weapon [icon:DEFAULT_PROJECT] Projects. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "This [icon:WONDER] Wonder can be built by multiple Civilizations."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_TECH_MO_FUTURE_TECH",
    "name": "Future Tech",
    "cost": 10000,
    "col": 6,
    "row": 2,
    "icon": "images/symbols/future_tech.png",
    "prereqs": [
     "NODE_TECH_MO_ROCKETRY",
     "NODE_TECH_MO_NUCLEAR_FISSION"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+1 [icon:ATTRIBUTE] Random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point.",
      "lines": [
       "+1 [icon:ATTRIBUTE] Random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+10 [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "+10 [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants 3 [icon:SCIENCE_VP] Innovation",
      "lines": [
       "Grants 3 [icon:SCIENCE_VP] Innovation"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 }
};

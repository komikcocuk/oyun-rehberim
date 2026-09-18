// The civics trees -- each Age's main tree, its branch trees and one
// tree per civilization -- read out of the game's own
// progression-trees-culture*.xml files by tools/build_civic_tree.py, in the
// technology tree's node shape so the same code draws them.
window.CIVPEDIA_CIVIC_TREE = {
 "CIVICS_ANTIQUITY_MAIN": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Antiquity Civics",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_MAIN_CHIEFDOM",
    "name": "Chiefdom",
    "cost": 90,
    "col": 0,
    "row": 2,
    "icon": "images/civics/chiefdom.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Charismatic Leader",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Tool Making",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlocks Civilization Unique [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civics Tree[/TIP].",
      "lines": [
       "Unlocks Civilization Unique [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civics Tree[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_MYSTICISM",
    "name": "Mysticism",
    "cost": 125,
    "col": 1,
    "row": 1,
    "icon": "images/civics/mysticism.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_CHIEFDOM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Priesthood",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Altar",
      "icon": "images/buildings/altar.png",
      "page": "Altar",
      "tip": "+3 [icon:YIELD_HAPPINESS] Happiness. Provides benefits and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses based on your chosen [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP]. Antiquity Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent Wonder"
       }
      ],
      "lines": [
       "Effect: Provides benefits and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses based on your chosen [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP].",
       "Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlocks founding a [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP].",
      "lines": [
       "Unlocks founding a [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Clan Networks",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus.",
      "lines": [
       "[B]+20% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus."
      ]
     },
     {
      "kind": "wonder",
      "name": "Great Stele",
      "icon": "images/wonders/great_stele.png",
      "page": "Great Stele",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B]. Gain [B]200 [icon:YIELD_GOLD][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] when you construct a [icon:WONDER] Wonder, including this one. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]200 [icon:YIELD_GOLD][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] when you construct a [icon:WONDER] Wonder, including this one.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_DISCIPLINE",
    "name": "Discipline",
    "cost": 125,
    "col": 1,
    "row": 2,
    "icon": "images/civics/discipline.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_CHIEFDOM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Survey",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Scouts gain [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP].",
      "lines": [
       "Scouts gain [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Dur-Sharrukin",
      "icon": "images/wonders/dur_sharrukin.png",
      "page": "Dur-Sharrukin",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_FORTIFIED] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] in all Settlements. Acts as a [icon:CITY_FORTIFIED] Fortified District that must be conquered. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_FORTIFIED] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] in all Settlements. Acts as a [icon:CITY_FORTIFIED] Fortified District that must be conquered.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Army Commander",
      "icon": "images/units/army_commander.png",
      "page": "Army Commander",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Land Commander Unit[/TIP]",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Land Commander Unit[/TIP]"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain a free [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP].",
      "lines": [
       "Gain a free [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Honor",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Gate of All Nations",
      "icon": "images/wonders/gate_of_all_nations.png",
      "page": "Gate of All Nations",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all wars.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Achaemenid Persia",
      "civType": "CIVILIZATION_PERSIA",
      "name": "Hazarapatis",
      "type": "UNIT_HAZARAPATIS",
      "kind": "unit",
      "icon": "images/civ-uniques/hazarapatis.png",
      "page": "Hazarapatis",
      "depth": 1,
      "replaces": "Army Commander",
      "early": false,
      "with": false,
      "text": ""
     },
     {
      "civ": "Rome",
      "civType": "CIVILIZATION_ROME",
      "name": "Legatus",
      "type": "UNIT_LEGATUS",
      "kind": "unit",
      "icon": "images/civ-uniques/legatus.png",
      "page": "Legatus",
      "depth": 1,
      "replaces": "Army Commander",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
    "name": "Public Life",
    "cost": 245,
    "col": 2,
    "row": 0,
    "icon": "images/civics/public_life.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_MYSTICISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "City Guard",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Oracle",
      "icon": "images/wonders/oracle.png",
      "page": "Oracle",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. When gaining rewards from a [icon:NAR_REW_DEFAULT] Narrative Event, gain an additional [B]20 [icon:YIELD_CULTURE][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "When gaining rewards from a [icon:NAR_REW_DEFAULT] Narrative Event, gain an additional [B]20 [icon:YIELD_CULTURE][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Annona",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on Food Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on Food Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS",
    "name": "Code of Laws",
    "cost": 245,
    "col": 2,
    "row": 1,
    "icon": "images/civics/code_of_laws.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_MYSTICISM",
     "NODE_CIVIC_AQ_MAIN_DISCIPLINE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Oratory",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B] per turn.",
      "lines": [
       "[B]+2 [icon:YIELD_DIPLOMACY][/B] per turn."
      ]
     },
     {
      "kind": "wonder",
      "name": "Petra",
      "icon": "images/wonders/petra.png",
      "page": "Petra",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Desert.",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on Desert."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "unit",
      "name": "Merchant",
      "icon": "images/units/merchant.png",
      "page": "Merchant",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain a free [icon:UNIT_MERCHANT] Merchant.",
      "lines": [
       "Gain a free [icon:UNIT_MERCHANT] Merchant."
      ]
     },
     {
      "kind": "espionage",
      "name": "Improve Trade Relations",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "If action accepted, permanently increase the number of [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you can establish with a Civilization.",
      "lines": [
       "If action accepted, permanently increase the number of [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you can establish with a Civilization."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Ethics",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "wonder",
      "name": "Mundo Perdido",
      "icon": "images/wonders/mundo_perdido.png",
      "page": "Mundo Perdido",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Tropical Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tropical.",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Tropical Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on Tropical."
      ]
     },
     {
      "kind": "espionage",
      "name": "Steal Government Secrets",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Gain a Civic from the target that you have not studied. If the Civilization has no eligible Civics, gain [icon:YIELD_CULTURE] Culture instead.",
      "lines": [
       "Gain a Civic from the target that you have not studied. If the Civilization has no eligible Civics, gain [icon:YIELD_CULTURE] Culture instead."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "Vaishya",
      "type": "UNIT_VAISHYA",
      "kind": "unit",
      "icon": "images/civ-uniques/vaishya.png",
      "page": "Vaishya",
      "depth": 1,
      "replaces": "Merchant",
      "early": false,
      "with": false,
      "text": ""
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_TACTICS",
    "name": "Tactics",
    "cost": 245,
    "col": 2,
    "row": 3,
    "icon": "images/civics/tactics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_DISCIPLINE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Drills",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training Infantry and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training Infantry and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Terracotta Army",
      "icon": "images/wonders/terracotta_army.png",
      "page": "Terracotta Army",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B]. Grants a free [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] when built. [B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Grassland.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Grants a free [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] when built. [B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP].",
       "Must be placed on Grassland."
      ]
     },
     {
      "kind": "tradition",
      "name": "Commanderies",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_GOLD][/B] towards upgrading Units.",
      "lines": [
       "[B]+20% [icon:YIELD_GOLD][/B] towards upgrading Units."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_ENTERTAINMENT",
    "name": "Entertainment",
    "cost": 450,
    "col": 3,
    "row": 0,
    "icon": "images/civics/entertainment.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Rites and Rituals",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Colosseum",
      "icon": "images/wonders/colosseum.png",
      "page": "Colosseum",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "[B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP].",
      "lines": [
       "[B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
    "name": "Citizenship",
    "cost": 450,
    "col": 3,
    "row": 1,
    "icon": "images/civics/citizenship.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Castes",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Drama and Poetry",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Culture Buildings.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Culture Buildings."
      ]
     },
     {
      "kind": "wonder",
      "name": "Emile Bell",
      "icon": "images/wonders/emile_bell.png",
      "page": "Emile Bell",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B]. Gain a unique [icon:ENDEAVOR] Diplomatic [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] called Ginseng Agreement that grants [icon:YIELD_FOOD] to both Leaders' [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_POLITICAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Gain a unique [icon:ENDEAVOR] Diplomatic [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] called Ginseng Agreement that grants [icon:YIELD_FOOD] to both Leaders' [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_POLITICAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] Point.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     },
     {
      "kind": "project",
      "name": "Cultural Festival",
      "icon": "images/tech-badges/unlock_project.png",
      "tip": "While this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] is active, this City generates additional [icon:YIELD_CULTURE]Culture equal to 25% of its[icon:YIELD_PRODUCTION] Production each turn.[n]You can cancel this Project at any time.",
      "lines": [
       "While this [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP] is active, this City generates additional [icon:YIELD_CULTURE]Culture equal to 25% of its[icon:YIELD_PRODUCTION] Production each turn.",
       "You can cancel this Project at any time."
      ]
     },
     {
      "kind": "tradition",
      "name": "Yaxche",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Hospitality",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     },
     {
      "kind": "wonder",
      "name": "Weiyang Palace",
      "icon": "images/wonders/weiyang_palace.png",
      "page": "Weiyang Palace",
      "tip": "[B]+3 [icon:YIELD_DIPLOMACY][/B]. [B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Grassland.",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B]. Must be placed on Grassland."
      ]
     },
     {
      "kind": "espionage",
      "name": "Wonder Construction",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Grants a bonus to [icon:WONDER] Wonder construction.",
      "lines": [
       "Grants a bonus to [icon:WONDER] Wonder construction."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
    "name": "Organized Military",
    "cost": 450,
    "col": 3,
    "row": 3,
    "icon": "images/civics/organized_military.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_TACTICS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Conscription",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
      "lines": [
       "[B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units."
      ]
     },
     {
      "kind": "wonder",
      "name": "Mausoleum of Theodoric",
      "icon": "images/wonders/mausoleum_of_theodoric.png",
      "page": "Mausoleum of Theodoric",
      "tip": "[B]+3 [icon:YIELD_PRODUCTION][/B]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] grant [B]+100% [icon:Action_Pillage] Pillage[/B] Yields and [icon:Action_Heal] HP. [B]+1 [icon:ATTRIBUTE_MILITARISTIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] gain [B]+100% yields[/B] and [icon:Action_Heal] HP from pillaging. [B]+1 [icon:ATTRIBUTE_MILITARISTIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP] Point.",
       "Must be placed adjacent to Coast."
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
      "kind": "tradition",
      "name": "Fajia",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1[/B] War Support on Wars you Declare.",
      "lines": [
       "[B]+1[/B] War Support on Wars you Declare."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_LITERACY",
    "name": "Literacy",
    "cost": 600,
    "col": 4,
    "row": 1,
    "icon": "images/civics/literacy.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_CITIZENSHIP"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Literature",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Science Buildings.",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Science Buildings."
      ]
     },
     {
      "kind": "wonder",
      "name": "Nalanda",
      "icon": "images/wonders/nalanda.png",
      "page": "Nalanda",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B]. Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]. Has [B]2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:ATTRIBUTE_SCIENTIFIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP] Point. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Plains.",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]. Has [B]2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:ATTRIBUTE_SCIENTIFIC][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP] Point. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed on Plains."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
    "name": "Skilled Trades",
    "cost": 600,
    "col": 4,
    "row": 2,
    "icon": "images/civics/skilled_trades.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_CITIZENSHIP"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Coinage",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants."
      ]
     },
     {
      "kind": "wonder",
      "name": "Sanchi Stupa",
      "icon": "images/wonders/sanchi_stupa.png",
      "page": "Sanchi Stupa",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:YIELD_CULTURE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Plains.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on Plains."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_economic.png",
      "tip": "[B]+1 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] (not [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]).",
      "lines": [
       "[B]+1 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] (not [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP])."
      ]
     },
     {
      "kind": "tradition",
      "name": "Hangjiao",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Production Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] on Production Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
    "name": "Philosophy",
    "cost": 750,
    "col": 5,
    "row": 1,
    "icon": "images/civics/philosophy.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_LITERACY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Scholars",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "wonder",
      "name": "Angkor Wat",
      "icon": "images/wonders/angkor_wat.png",
      "page": "Angkor Wat",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Poiesis",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP] in Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or [B]+2 [icon:YIELD_CULTURE][/B] in Ecstatic Settlements.",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP] in Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or [B]+2 [icon:YIELD_CULTURE][/B] in Ecstatic Settlements."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_COMMERCE",
    "name": "Commerce",
    "cost": 750,
    "col": 5,
    "row": 2,
    "icon": "images/civics/commerce.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Commodities",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Medicine",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Units gain +5 Healing.",
      "lines": [
       "Units gain +5 Healing."
      ]
     },
     {
      "kind": "wonder",
      "name": "Monks Mound",
      "icon": "images/wonders/monks_mound.png",
      "page": "Monks Mound",
      "tip": "[B]+3 [icon:YIELD_FOOD][/B]. [B]+4 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAIN_FUTURE_CIVIC",
    "name": "Future Civic",
    "cost": 1000,
    "col": 6,
    "row": 2,
    "icon": "images/civics/future_civic.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAIN_ENTERTAINMENT",
     "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "NODE_CIVIC_AQ_MAIN_COMMERCE",
     "NODE_CIVIC_AQ_MAIN_ORG_MILITARY"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [icon:ATTRIBUTE][/B] random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point.",
      "lines": [
       "[B]+1 [icon:ATTRIBUTE][/B] random [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "A boost for a non-Civilization-unique starting [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "A boost for a non-Civilization-unique starting [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "Grants 5 [icon:CULTURE_VP] Tourism",
      "lines": [
       "Grants 5 [icon:CULTURE_VP] Tourism"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_TEST_OF_TIME": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Antiquity Test of Time",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_FOUNDATION",
    "name": "Foundation",
    "cost": 250,
    "col": 1,
    "icon": "",
    "prereqs": [
     "NODE_CIVIC_AQ_ABBASID_ORIGINS",
     "NODE_CIVIC_AQ_CHOLA_ORIGINS",
     "NODE_CIVIC_AQ_HAWAII_ORIGINS",
     "NODE_CIVIC_AQ_INCAN_ORIGINS",
     "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
     "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
     "NODE_CIVIC_AQ_MING_ORIGINS",
     "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
     "NODE_CIVIC_AQ_SPAIN_ORIGINS",
     "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
     "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
     "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
     "NODE_CIVIC_AQ_MEIJI_ORIGINS",
     "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
     "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
     "NODE_CIVIC_AQ_QING_ORIGINS",
     "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "NODE_CIVIC_AQ_SIAM_ORIGINS",
     "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
     "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
     "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
     "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
     "NODE_CIVIC_AQ_ICELAND_ORIGINS",
     "NODE_CIVIC_AQ_JOSEON_ORIGINS",
     "NODE_CIVIC_AQ_NEPAL_ORIGINS",
     "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
     "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
     "NODE_CIVIC_AQ_QAJAR_ORIGINS",
     "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
     "NODE_CIVIC_AQ_SHAWNEE_ORIGINS"
    ],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "",
      "type": "MOD_CIVIC_AQ_ATTRIBUTE_EXPANSIONIST_SPECIALIST_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     },
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "",
      "type": "MOD_AQ_CODEX_CIVIC",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_codex.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP]."
     },
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "Experimentation",
      "type": "TRADITION_AQ_ATTRIBUTE_SCIENTIFIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     },
     {
      "civ": "Abbasid",
      "civType": "CIVILIZATION_ABBASID",
      "name": "Fractal Cities",
      "type": "TRADITION_AQ_ATTRIBUTE_EXPANSIONIST_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]."
     },
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Emissaries",
      "type": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported."
     },
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Merchant Class",
      "type": "TRADITION_AQ_ATTRIBUTE_ECONOMIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP]."
     },
     {
      "civ": "Hawai'i",
      "civType": "CIVILIZATION_HAWAII",
      "name": "Enlightened Rule",
      "type": "TRADITION_AQ_ATTRIBUTE_CULTURAL_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
     },
     {
      "civ": "Hawai'i",
      "civType": "CIVILIZATION_HAWAII",
      "name": "Pyramid Of The Sun",
      "type": "WONDER_PYRAMID_OF_THE_SUN",
      "kind": "wonder",
      "icon": "images/wonders/pyramid_of_the_sun.png",
      "page": "Pyramid Of The Sun",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": ""
     },
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "",
      "type": "MOD_CIVIC_AQ_ATTRIBUTE_MILITARISTIC_EXPANSIONIST_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "Warrior Class",
      "type": "TRADITION_AQ_ATTRIBUTE_MILITARISTIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders."
     },
     {
      "civ": "Norman",
      "civType": "CIVILIZATION_NORMAN",
      "name": "Priestly Class",
      "type": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
    "name": "Syncretism",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/syncretism.png",
    "prereqs": [
     "NODE_CIVIC_AQ_ABBASID_ORIGINS",
     "NODE_CIVIC_AQ_CHOLA_ORIGINS",
     "NODE_CIVIC_AQ_HAWAII_ORIGINS",
     "NODE_CIVIC_AQ_INCAN_ORIGINS",
     "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
     "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
     "NODE_CIVIC_AQ_MING_ORIGINS",
     "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
     "NODE_CIVIC_AQ_SPAIN_ORIGINS",
     "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
     "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
     "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
     "NODE_CIVIC_AQ_MEIJI_ORIGINS",
     "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
     "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
     "NODE_CIVIC_AQ_QING_ORIGINS",
     "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "NODE_CIVIC_AQ_SIAM_ORIGINS",
     "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
     "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
     "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
     "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
     "NODE_CIVIC_AQ_ICELAND_ORIGINS",
     "NODE_CIVIC_AQ_JOSEON_ORIGINS",
     "NODE_CIVIC_AQ_NEPAL_ORIGINS",
     "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
     "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
     "NODE_CIVIC_AQ_QAJAR_ORIGINS",
     "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
     "NODE_CIVIC_AQ_SHAWNEE_ORIGINS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions.",
      "lines": [
       "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_ABBASID_ORIGINS",
    "name": "Abbasid Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "City of Peace Tradition I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_CHOLA_ORIGINS",
    "name": "Chola Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Devakoshta I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Merchant",
      "icon": "images/units/merchant.png",
      "page": "Merchant",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain a free [icon:UNIT_MERCHANT] Merchant.",
      "lines": [
       "Gain a free [icon:UNIT_MERCHANT] Merchant."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HAWAII_ORIGINS",
    "name": "Hawaiian Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ho'okupu I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_INCAN_ORIGINS",
    "name": "Incan Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Tirakuna I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
    "name": "Majapahit Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Awisan Dalem I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
    "name": "Mongolia Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Baghatur I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MING_ORIGINS",
    "name": "Ming Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Baojia I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
    "name": "Norman Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Juré I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
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
      "kind": "tradition",
      "name": "Palisading I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
    "name": "Songhai Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Wakia I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Merchant",
      "icon": "images/units/merchant.png",
      "page": "Merchant",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SPAIN_ORIGINS",
    "name": "Spain Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Cerro Rico I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
    "name": "American Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Gold Rush I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
    "name": "Bugandan Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Interlacustrine I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain Adjacency from Lakes.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain Adjacency from Lakes."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
    "name": "French Imperial Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Style Empire I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 15% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 15% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MEIJI_ORIGINS",
    "name": "Meiji Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Shusei Kokubō I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
    "name": "Mexico Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Order and Progress I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +3[icon:YIELD_FOOD] Food in every Joyous or happier Settlement for 6 Turns.",
      "lines": [
       "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +3[icon:YIELD_FOOD] Food in every Joyous or happier Settlement for 6 Turns."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Muralismo I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
    "name": "Mughal Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Qilachas I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
    "name": "Prussian Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Coking I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_QING_ORIGINS",
    "name": "Qing Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Tun Ken I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
      ]
     },
     {
      "kind": "unit",
      "name": "Merchant",
      "icon": "images/units/merchant.png",
      "page": "Merchant",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP] who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] or Build Roads between [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain a free [icon:UNIT_MERCHANT] Merchant.",
      "lines": [
       "Gain a free [icon:UNIT_MERCHANT] Merchant."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
    "name": "Russian Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "General Moroz I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Západnichestvo I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_SCIENCE][/B] but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+15% [icon:YIELD_SCIENCE][/B] but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SIAM_ORIGINS",
    "name": "Siamese Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Monthon I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_GOLD][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+3 [icon:YIELD_GOLD][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
    "name": "Bulgarian Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "Stratagems I",
      "type": "TRADITION_STRATAGEMS_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
    "name": "Vietnamese Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "Cấm Binh I",
      "type": "TRADITION_CAM_BINH_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
    "name": "Goryeo Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Hoguk Jonggyo I",
      "type": "TRADITION_HOGUK_JONGGYO_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
    "name": "British Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "East India Company I",
      "type": "TRADITION_EAST_INDIA_COMPANY_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_ICELAND_ORIGINS",
    "name": "Icelandic Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "Dróttkvætt I",
      "type": "TRADITION_DROTTKVAETT_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_JOSEON_ORIGINS",
    "name": "Joseon Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "",
      "type": "MOD_PROGRESSION_TREE_JOSEON_CITY_LIMIT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_generic.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]"
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "Yangbeobmiui I",
      "type": "TRADITION_YANGBEOBMIUI_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_NEPAL_ORIGINS",
    "name": "Nepali Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "Himāl I",
      "type": "TRADITION_HIMAL_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
    "name": "Ottoman Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Sedef Kakma I",
      "type": "TRADITION_SEDEF_KAKMA_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
    "name": "Pirate Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
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
      "early": false,
      "with": true,
      "text": "Gain [B]1 [icon:UNIT_SETTLER] Settler[/B] for free."
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Black Flag I",
      "type": "TRADITION_BLACK_FLAG_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_QAJAR_ORIGINS",
    "name": "Qajar Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "Dār al-Fonūn I",
      "type": "TRADITION_DAR_AL_FONUN_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
    "name": "Sengoku Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "Gekokujo I",
      "type": "TRADITION_GEKOKUJO_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_AQ_SHAWNEE_ORIGINS",
    "name": "Shawnee Origins",
    "cost": 150,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "",
      "type": "MOD_AQ_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Helikhilenawewipe I",
      "type": "TRADITION_HELIKHILENAWEWIPE_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]."
     }
    ]
   }
  ]
 },
 "CIVICS_EXPLORATION_MAIN": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Exploration Civics",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_MAIN_ECONOMICS",
    "name": "Economics",
    "cost": 700,
    "col": 0,
    "row": 3,
    "icon": "images/civics/economics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Maritime Law",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_PIETY",
    "name": "Piety",
    "cost": 700,
    "col": 0,
    "row": 1,
    "icon": "images/civics/piety.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Commune",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP]. [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "[B]+20% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP]. [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Temple",
      "icon": "images/buildings/temple.png",
      "page": "Temple",
      "tip": "+6[icon:YIELD_HAPPINESS] Happiness. Has 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] slot. Allows the creation of [icon:UNIT_MISSIONARY] Missionary Units in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Exploration Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
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
       "Effect: Has 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] slot. Allows the creation of [icon:UNIT_MISSIONARY] Missionary Units in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
    "name": "Mercantilism",
    "cost": 900,
    "col": 1,
    "row": 3,
    "icon": "images/civics/mercantilism.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_ECONOMICS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Trade Winds",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants."
      ]
     },
     {
      "kind": "wonder",
      "name": "Tomb of Askia",
      "icon": "images/wonders/tomb_of_askia.png",
      "page": "Tomb of Askia",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B]. [B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] in this Settlement for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Desert.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] in this Settlement for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
       "Must be placed on Desert."
      ]
     },
     {
      "kind": "tradition",
      "name": "Primitive Accumulation",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE] Science[/B] on [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards constructing [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE] Science[/B] on [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards constructing [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_AUTHORITY",
    "name": "Authority",
    "cost": 900,
    "col": 1,
    "row": 1,
    "icon": "images/civics/authority.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_ECONOMICS",
     "NODE_CIVIC_EX_MAIN_PIETY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Vassalage",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "espionage",
      "name": "Counter Spy",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Activate counter [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] activities to hamper any covert actions you suspect another Leader is taking against you. Doubles the time to complete, increases failure chance by 30%, and increases reveal chance by 30% for espionage actions against you.",
      "lines": [
       "Activate counter [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] activities to hamper any covert actions you suspect another Leader is taking against you. Doubles the time to complete, increases failure chance by 30%, and increases reveal chance by 30% for espionage actions against you."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Levies",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
      "lines": [
       "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units."
      ]
     },
     {
      "kind": "wonder",
      "name": "Erdene Zuu",
      "icon": "images/wonders/erdene_zuu.png",
      "page": "Erdene Zuu",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. Creating a [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its cost. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Creating a [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its cost.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_INSPIRATION",
    "name": "Inspiration",
    "cost": 900,
    "col": 1,
    "row": 0,
    "icon": "images/civics/inspiration.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_PIETY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Renaissance",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Hale o Keawe",
      "icon": "images/wonders/hale_o_keawe.png",
      "page": "Hale o Keawe",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be on Coast adjacent to land, but not adjacent to Tundra.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots.",
       "Must be on Coast adjacent to land, but not adjacent to Tundra."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_COLONIALISM",
    "name": "Colonialism",
    "cost": 1300,
    "col": 2,
    "row": 3,
    "icon": "images/civics/colonialism.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_MERCANTILISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Charters",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "tradition",
      "name": "Colonial Surplus",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "El Escorial",
      "icon": "images/wonders/el_escorial.png",
      "page": "El Escorial",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [B]+4 [icon:YIELD_HAPPINESS][/B] on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] within 7 tiles of this [icon:WONDER] Wonder. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [B]+4 [icon:YIELD_HAPPINESS][/B] on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] within 7 tiles of this [icon:WONDER] Wonder.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_BUREAUCRACY",
    "name": "Bureaucracy",
    "cost": 1300,
    "col": 2,
    "row": 2,
    "icon": "images/civics/bureaucracy.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_AUTHORITY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Constitution",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintaining[/TIP] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintaining[/TIP] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Borobudur",
      "icon": "images/wonders/borobudur.png",
      "page": "Borobudur",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+3 [icon:YIELD_FOOD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Food from Borobudur.",
       "Happiness from Borobudur.",
       "[B]+3 [icon:YIELD_FOOD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to Coast."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE",
    "name": "Diplomatic Service",
    "cost": 1300,
    "col": 2,
    "row": 1,
    "icon": "images/civics/diplomatic_service.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_AUTHORITY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Heqin",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Brihadeeswarar Temple",
      "icon": "images/wonders/brihadeeswarar_temple.png",
      "page": "Brihadeeswarar Temple",
      "tip": "[B]+3 [icon:YIELD_DIPLOMACY][/B]. All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Navigable River or on a [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
       "Must be placed adjacent to a Navigable River or on a [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_SOCIETY",
    "name": "Society",
    "cost": 1300,
    "col": 2,
    "row": 0,
    "icon": "images/civics/society.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_INSPIRATION"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Patronage",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "tradition",
      "name": "Uposatha",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "tradition",
      "name": "Marcher Lords",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE] Culture[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] without a Growing Focus, or +4 in Joyous or happier Towns without a Growing Focus.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE] Culture[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] without a Growing Focus, or +4 in Joyous or happier Towns without a Growing Focus."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "House of Wisdom",
      "icon": "images/wonders/house_of_wisdom.png",
      "page": "House of Wisdom",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B]. Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+2 [icon:YIELD_SCIENCE][/B] from [icon:NAR_REW_GREATWORK] Great Works. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+2 [icon:YIELD_SCIENCE][/B] from [icon:NAR_REW_GREATWORK] Great Works. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
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
      "kind": "espionage",
      "name": "Sabotage Specialist Morale",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Disable [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the target Settlement.",
      "lines": [
       "Disable [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the target Settlement."
      ]
     }
    ],
    "uniques": [
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "Reykjaholt",
      "type": "WONDER_REYKHOLT",
      "kind": "wonder",
      "icon": "images/civ-uniques/reykjaholt.png",
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
    "id": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
    "name": "Imperialism",
    "cost": 2100,
    "col": 3,
    "row": 3,
    "icon": "images/civics/imperialism.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_COLONIALISM",
     "NODE_CIVIC_EX_MAIN_BUREAUCRACY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Indenture",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "tradition",
      "name": "Tariffs",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP], but [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+50% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP], but [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
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
      "kind": "tradition",
      "name": "Tequitl",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "+10 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [B]+2 [icon:YIELD_SCIENCE] Science[/B] on [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you initiate.",
      "lines": [
       "+10 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [B]+2 [icon:YIELD_SCIENCE] Science[/B] on [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you initiate."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Commissioned Officers",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for Fleets and Armies.",
      "lines": [
       "[B]+30%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for Fleets and Armies."
      ]
     },
     {
      "kind": "tradition",
      "name": "Metropole",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]. +10 Range for all [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
      "lines": [
       "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]. +10 Range for all [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "White Tower",
      "icon": "images/wonders/white_tower.png",
      "page": "White Tower",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B]. [B]+4 [icon:YIELD_HAPPINESS][/B] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
       "Must be placed adjacent to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[icon:RADIAL_RESOURCES] Tea and Spices Resources are worth +1 [icon:TREASURE_FLEET] Cargo for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP].",
      "lines": [
       "[icon:RADIAL_RESOURCES] Tea and Spices Resources are worth +1 [icon:TREASURE_FLEET] Cargo for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
    "name": "Sovereignty",
    "cost": 2100,
    "col": 3,
    "row": 2,
    "icon": "images/civics/sovereignty.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_BUREAUCRACY",
     "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Divine Right",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10 [icon:YIELD_HAPPINESS][/B] and [B]+4 [icon:YIELD_DIPLOMACY][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "[B]+10 [icon:YIELD_HAPPINESS][/B] and [B]+4 [icon:YIELD_DIPLOMACY][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Regulars",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP]."
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
      "kind": "tradition",
      "name": "Mahakrung",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], or [B]+15 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] if it's Ecstatic.",
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], or [B]+15 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] if it's Ecstatic."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "De Facto",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Units gain +5 [icon:Action_Heal] Healing.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Units gain +5 [icon:Action_Heal] Healing."
      ]
     },
     {
      "kind": "tradition",
      "name": "De Jure",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
    "name": "Social Class",
    "cost": 2100,
    "col": 3,
    "row": 0,
    "icon": "images/civics/social_class.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE",
     "NODE_CIVIC_EX_MAIN_SOCIETY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Chivalry",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Enlightenment",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_scientific.png",
      "tip": "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
      "lines": [
       "Grants [B]2 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Bourgeoisie",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in your [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in your [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Yeomanry",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Notre Dame",
      "icon": "images/wonders/notre_dame.png",
      "page": "Notre Dame",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B]. [B]+3 [icon:YIELD_CULTURE][/B] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. Start a [icon:CELEBRATION] Celebration immediately after constructing this [icon:WONDER] Wonder. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP] and a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "From Notre Dame.",
       "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. Start a [icon:CELEBRATION] Celebration immediately after constructing this [icon:WONDER] Wonder.",
       "Must be adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP] and a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[icon:RADIAL_RESOURCES] Furs and Cocoa Resources are worth +1 [icon:TREASURE_FLEET] Cargo for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP].",
      "lines": [
       "[icon:RADIAL_RESOURCES] Furs and Cocoa Resources are worth +1 [icon:TREASURE_FLEET] Cargo for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAIN_FUTURE_CIVIC",
    "name": "Future Civic",
    "cost": 3000,
    "col": 4,
    "row": 2,
    "icon": "images/civics/future_civic.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [icon:ATTRIBUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute[/TIP] Point.",
      "lines": [
       "[B]+1 [icon:ATTRIBUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute[/TIP] Point."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "A boost for a non-Civilization unique starting [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "A boost for a non-Civilization unique starting [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic[/TIP] in the next [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "Grants 7 [icon:CULTURE_VP] Tourism",
      "lines": [
       "Grants 7 [icon:CULTURE_VP] Tourism"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_BRANCH_THEOLOGY": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Theology",
  "civ": "",
  "civType": "",
  "branch": true,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
    "name": "Theology",
    "cost": 700,
    "col": 0,
    "icon": "images/civics/theology.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Evangelism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Units[/TIP]. +1 charge for [icon:UNIT_MISSIONARY] Missionaries.",
      "lines": [
       "[B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Units[/TIP]. +1 charge for [icon:UNIT_MISSIONARY] Missionaries."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Receive 1 additional [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Enhancer Belief[/TIP].",
      "lines": [
       "Receive 1 additional [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Enhancer Belief[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Dargah",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD] Food[/B] and [B][icon:YIELD_HAPPINESS] Happiness[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD] Food[/B] and [B][icon:YIELD_HAPPINESS] Happiness[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Vinaya",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD] Gold[/B] and [B][icon:YIELD_DIPLOMACY] Influence[/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD] Gold[/B] and [B][icon:YIELD_DIPLOMACY] Influence[/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_BRANCH_REFORMATION",
    "name": "Reformation",
    "cost": 900,
    "col": 1,
    "icon": "images/civics/reformation.png",
    "prereqs": [
     "NODE_CIVIC_EX_BRANCH_THEOLOGY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Rationalism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "lines": [
       "[B]+15% [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Religious Orders",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "lines": [
       "[B]+15% [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Convert Population",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Convert the target Settlement to your founded Religion.",
      "lines": [
       "Convert the target Settlement to your founded Religion."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_TEST_OF_TIME": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Exploration Test of Time",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_HIERARCHY",
    "name": "Hierarchy",
    "cost": 1200,
    "col": 1,
    "icon": "",
    "prereqs": [
     "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
     "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
     "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "NODE_CIVIC_EX_HAN_RENAISSANCE",
     "NODE_CIVIC_EX_KHMER_RENAISSANCE",
     "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
     "NODE_CIVIC_EX_MAYA_RENAISSANCE",
     "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
     "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
     "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
     "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
     "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
     "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
     "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
     "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
     "NODE_CIVIC_EX_QING_RENAISSANCE",
     "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
     "NODE_CIVIC_EX_SIAM_RENAISSANCE",
     "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
     "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
     "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
     "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
     "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
     "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
     "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
     "NODE_CIVIC_EX_SILLA_RENAISSANCE",
     "NODE_CIVIC_EX_TONGA_RENAISSANCE"
    ],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Classical Revival",
      "type": "TRADITION_EX_ATTRIBUTE_CULTURAL_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
     },
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Notre Dame",
      "type": "WONDER_NOTRE_DAME",
      "kind": "wonder",
      "icon": "images/wonders/notre_dame.png",
      "page": "Notre Dame",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": ""
     },
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Supply and Demand",
      "type": "TRADITION_EX_ATTRIBUTE_ECONOMIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have."
     },
     {
      "civ": "Buganda",
      "civType": "CIVILIZATION_BUGANDA",
      "name": "Clan Society I",
      "type": "TRADITION_CLAN_SOCIETY_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles."
     },
     {
      "civ": "Greece",
      "civType": "CIVILIZATION_GREECE",
      "name": "Spy Network",
      "type": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started."
     },
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Alchemy",
      "type": "TRADITION_EX_ATTRIBUTE_SCIENTIFIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost."
     },
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Jubilee",
      "type": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "Gwageo I",
      "type": "TRADITION_GWAGEO_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists."
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "",
      "type": "MOD_CIVIC_EX_ATTRIBUTE_EXPANSIONIST_SPECIALIST_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "Municipal Charters",
      "type": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_TALL",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]."
     },
     {
      "civ": "Maurya",
      "civType": "CIVILIZATION_MAURYA",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Maurya",
      "civType": "CIVILIZATION_MAURYA",
      "name": "Professional Army",
      "type": "TRADITION_EX_ATTRIBUTE_MILITARISTIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
     },
     {
      "civ": "Mississippian",
      "civType": "CIVILIZATION_MISSISSIPPIAN",
      "name": "",
      "type": "MOD_CIVIC_EX_ATTRIBUTE_EXPANSIONIST_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Mississippian",
      "civType": "CIVILIZATION_MISSISSIPPIAN",
      "name": "Yanakuna",
      "type": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_WIDE",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
    "name": "Syncretism",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/syncretism.png",
    "prereqs": [
     "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
     "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
     "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "NODE_CIVIC_EX_HAN_RENAISSANCE",
     "NODE_CIVIC_EX_KHMER_RENAISSANCE",
     "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
     "NODE_CIVIC_EX_MAYA_RENAISSANCE",
     "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
     "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
     "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
     "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
     "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
     "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
     "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
     "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
     "NODE_CIVIC_EX_QING_RENAISSANCE",
     "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
     "NODE_CIVIC_EX_SIAM_RENAISSANCE",
     "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
     "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
     "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
     "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
     "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
     "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
     "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
     "NODE_CIVIC_EX_SILLA_RENAISSANCE",
     "NODE_CIVIC_EX_TONGA_RENAISSANCE"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions.",
      "lines": [
       "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
    "name": "Aksumite Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "May This Please The People II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
    "name": "Egyptian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Akhet II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
    "name": "Greek Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Delian League II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and supporting [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and supporting [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Peloponnesian League II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] and [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] and [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_HAN_RENAISSANCE",
    "name": "Han Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Fenghuo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
      "lines": [
       "[B]+1 [icon:Action_Move] Movement[/B] and [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_KHMER_RENAISSANCE",
    "name": "Khmer Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Pithi Chrat II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-10 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-10 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
    "name": "Maurya Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Charvaka II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAYA_RENAISSANCE",
    "name": "Maya Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Miracles of the Twins II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Ranged Units ignore [icon:CITY_UNIMPROVED] Vegetation for [icon:Action_Move] Movement.",
      "lines": [
       "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Ranged Units ignore [icon:CITY_UNIMPROVED] Vegetation for [icon:Action_Move] Movement."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
    "name": "Mississippian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Gift Economy II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+2 [icon:YIELD_HAPPINESS][/B] from imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] and [B]+2 [icon:YIELD_HAPPINESS][/B] from imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
    "name": "Achaemenid Persian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kara II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units. Infantry Units [icon:Action_Heal] Heal [B]15 [icon:Action_Heal] HP[/B] after defeating an enemy Unit.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units. Infantry Units [icon:Action_Heal] Heal [B]15 [icon:Action_Heal] HP[/B] after defeating an enemy Unit."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
    "name": "Roman Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Latinitas II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns. These numbers are doubled again in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns. These numbers are doubled again in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
    "name": "American Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Robber Baron I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
      "lines": [
       "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
    "name": "Bugandan Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ng'oma I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
      "lines": [
       "[B]+4 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
    "name": "French Imperial Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Cocorico I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 15% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 15% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
    "name": "Meiji Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Fukoku Kyōhei I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. When you train a Naval Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. When you train a Naval Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost."
      ]
     },
     {
      "kind": "tradition",
      "name": "O-yatoi Gaikokujin I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
    "name": "Mexico Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "La Reforma I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, [B]+100% [icon:YIELD_PRODUCTION][/B] towards training and [icon:YIELD_GOLD] towards purchasing [icon:UNIT_MISSIONARY] Missionaries and +2 Charges and [icon:Action_Move] Movement for [icon:UNIT_MISSIONARY] Missionaries for 10 Turns.",
      "lines": [
       "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, [B]+100% [icon:YIELD_PRODUCTION][/B] towards training and [icon:YIELD_GOLD] towards purchasing [icon:UNIT_MISSIONARY] Missionaries and +2 Charges and [icon:Action_Move] Movement for [icon:UNIT_MISSIONARY] Missionaries for 10 Turns."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Muralismo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
    "name": "Mughal Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Mayūrāsana I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "[B]+5% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
    "name": "Prussian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Realpolitik I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_QING_RENAISSANCE",
    "name": "Qing Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Cohong I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to it.",
      "lines": [
       "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to it."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Banner Army I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
      "lines": [
       "[B]+20% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units."
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
    "name": "Russian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Krestyanskaya Reforma I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_PRODUCTION][/B], but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+15% [icon:YIELD_PRODUCTION][/B], but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SIAM_RENAISSANCE",
    "name": "Siamese Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "San Lak Mueang I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
    "name": "Assyrian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "Miḫiṣtu II",
      "type": "TRADITION_MIHISTU_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "",
      "type": "MOD_EX_RELIC",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_gw_relic.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "Gain 1 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "Girru II",
      "type": "TRADITION_GIRRU_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 2,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
    "name": "Carthaginian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "Quinquereme II",
      "type": "TRADITION_QUINQUEREME_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
    "name": "British Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Great Britain",
      "civType": "CIVILIZATION_GREAT_BRITAIN",
      "name": "No Eternal Allies I",
      "type": "TRADITION_NO_ETERNAL_ALLIES_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
    "name": "Heian Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "Jo-bo System II",
      "type": "TRADITION_JO_BO_SYSTEM_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
    "name": "Joseon Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Joseon",
      "civType": "CIVILIZATION_JOSEON",
      "name": "Yangban Bureaucracy I",
      "type": "TRADITION_YANGBAN_BUREAUCRACY_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
    "name": "Nepali Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Nepal",
      "civType": "CIVILIZATION_NEPAL",
      "name": "Maitri Sandhi I",
      "type": "TRADITION_MAITRI_SANDHI_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
    "name": "Ottoman Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Ottomans",
      "civType": "CIVILIZATION_OTTOMANS",
      "name": "Osmanlı Barok I",
      "type": "TRADITION_OSMANLI_BAROK_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
    "name": "Qajar Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Qajar",
      "civType": "CIVILIZATION_QAJAR",
      "name": "Soleymaniyeh Palace I",
      "type": "TRADITION_SOLEYMANIYEH_PALACE_I",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_SILLA_RENAISSANCE",
    "name": "Silla Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "Seorabeol II",
      "type": "TRADITION_SEORABEOL_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_EX_TONGA_RENAISSANCE",
    "name": "Tongan Renaissance",
    "cost": 800,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "",
      "type": "MOD_EX_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "Tongiaki II",
      "type": "TRADITION_TONGIAKI_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]."
     }
    ]
   }
  ]
 },
 "CIVICS_MODERN_MAIN": {
  "age": "Modern",
  "kind": "civic",
  "name": "Modern Civics",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_MAIN_MODERNIZATION",
    "name": "Modernity",
    "cost": 1600,
    "col": 0,
    "row": 1,
    "icon": "images/civics/modernity.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Civil Engineering",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Living Standards",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Hermitage",
      "icon": "images/wonders/hermitage.png",
      "page": "Hermitage",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B]. [B]+5 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that have a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display. Has [B]3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP][/B] slots. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tundra.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that have a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display. Has [B]3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP][/B] slots.",
       "Must be placed on Tundra."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_NATURAL_HISTORY",
    "name": "Natural History",
    "cost": 1600,
    "col": 0,
    "row": 2,
    "icon": "images/civics/natural_history.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Land Heritage",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIMPROVED] Mountains. [B]+6 [icon:YIELD_CULTURE][/B] on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIMPROVED] Mountains. [B]+6 [icon:YIELD_CULTURE][/B] on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Museum",
      "icon": "images/buildings/museum.png",
      "page": "Museum",
      "tip": "+9 [icon:YIELD_CULTURE] Culture. Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] slots. Modern Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "9"
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
       "[B]Effect:[/B] Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] slots."
      ]
     },
     {
      "kind": "wonder",
      "name": "Muzibu Azaala Mpanga",
      "icon": "images/wonders/muzibu_azaala_mpanga.png",
      "page": "Muzibu Azaala Mpanga",
      "tip": "[B]+4 [icon:YIELD_FOOD][/B]. [B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on Lake tiles. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Lake. [B]+1 [icon:YIELD_POPULATION][/B] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Lakes.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on Lake tiles. [B]+1 [icon:YIELD_POPULATION][/B] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Lakes.",
       "Must be placed adjacent to a Lake."
      ]
     },
     {
      "kind": "unit",
      "name": "Explorer",
      "icon": "images/units/explorer.png",
      "page": "Explorer",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP] that finds and extracts [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried in an earlier [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP] that finds and extracts [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried in an earlier [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Explorers can Research [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried since the [TIP:LOC_PEDIA_CONCEPTS_EXPLORATION_AGE_TOOLTIP]Exploration Age[/TIP].",
      "lines": [
       "Explorers can Research [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried since the [TIP:LOC_PEDIA_CONCEPTS_EXPLORATION_AGE_TOOLTIP]Exploration Age[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "[B]+1 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Explorers.",
      "lines": [
       "[B]+1 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Explorers."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION",
    "name": "Social Question",
    "cost": 1600,
    "col": 0,
    "row": 0,
    "icon": "images/civics/social_question.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Humanism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "tradition",
      "name": "Social Science",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
      "lines": [
       "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists."
      ]
     },
     {
      "kind": "wonder",
      "name": "Dogo Onsen",
      "icon": "images/wonders/dogo_onsen.png",
      "page": "Dogo Onsen",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B]. This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gains a [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] every time you enter a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gains a [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] every time you enter a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
       "Must be placed adjacent to Coast."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
    "name": "Political Theory",
    "cost": 2750,
    "col": 1,
    "row": 1,
    "icon": "images/civics/political_theory.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_MODERNIZATION",
     "NODE_CIVIC_MO_MAIN_NATURAL_HISTORY",
     "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Free Speech",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Evidenzbureau",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards Counterspy [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] Actions.",
      "lines": [
       "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards Counterspy [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] Actions."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlocks [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology Trees.",
      "lines": [
       "Unlocks [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology Trees."
      ]
     },
     {
      "kind": "wonder",
      "name": "Doi Suthep",
      "icon": "images/wonders/doi_suthep.png",
      "page": "Doi Suthep",
      "tip": "[B]+4 [icon:YIELD_DIPLOMACY][/B]. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_GLOBALISM",
    "name": "Globalism",
    "cost": 3750,
    "col": 2,
    "row": 2,
    "icon": "images/civics/globalism.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ambassadors",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_DIPLOMACY][/B] per turn.",
      "lines": [
       "[B]+6 [icon:YIELD_DIPLOMACY][/B] per turn."
      ]
     },
     {
      "kind": "tradition",
      "name": "Crown Properties",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B] on [icon:CITY_BUILDING_LIST] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_DIPLOMACY][/B] on [icon:CITY_BUILDING_LIST] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Think-tanks",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards Projects, or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_PRODUCTION][/B] towards Projects, or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
      "kind": "tradition",
      "name": "Preservation Societies",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_SCIENCE][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Palacio de Bellas Artes",
      "icon": "images/wonders/palacio_de_bellas_artes.png",
      "page": "Palacio de Bellas Artes",
      "tip": "[B]+5 [icon:YIELD_CULTURE][/B]. Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:NAR_REW_GREATWORK] Great Works. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:NAR_REW_GREATWORK] Great Works.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "espionage",
      "name": "Spread Rumors of Fake Artifacts",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Remove all yields from the target Civilization's displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP].",
      "lines": [
       "Remove all yields from the target Civilization's displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "[B]+4 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on improved Breathtaking tiles in Resort [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when you have at least 7 improved Breathtaking tiles.",
      "lines": [
       "[B]+4 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on improved Breathtaking tiles in Resort [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when you have at least 7 improved Breathtaking tiles."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_NATIONALISM",
    "name": "Nationalism",
    "cost": 3750,
    "col": 2,
    "row": 1,
    "icon": "images/civics/nationalism.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Demagogy",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Gain [icon:YIELD_HAPPINESS] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP].",
      "lines": [
       "Gain [icon:YIELD_HAPPINESS] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP]."
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
      "kind": "tradition",
      "name": "Garrison State",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards adding [icon:WAR_SUPPORT] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards adding [icon:WAR_SUPPORT] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Army Corps of Engineers",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_PRODUCTION][/B] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "People's Army",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Taj Mahal",
      "icon": "images/wonders/taj_mahal.png",
      "page": "Taj Mahal",
      "tip": "[B]+5 [icon:YIELD_GOLD][/B]. [B]+50% [icon:CELEBRATION][/B] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] duration. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Plains.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+50% [icon:CELEBRATION][/B] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] duration. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point.",
       "Must be placed on Plains."
      ]
     },
     {
      "kind": "espionage",
      "name": "Infiltrate Enemy Positions",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Your [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] Units will use their Bombard Strength against all units belonging to the target.",
      "lines": [
       "Your [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] Units will use their Bombard Strength against all units belonging to the target."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_CAPITALISM",
    "name": "Capitalism",
    "cost": 7500,
    "col": 3,
    "row": 2,
    "icon": "images/civics/capitalism.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_GLOBALISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Laissez-Faire",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]."
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
      "tip": "[B]+4 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn on worked Coal and Oil [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
      "lines": [
       "[B]+4 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn on worked Coal and Oil [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Statue of Liberty",
      "icon": "images/wonders/statue_of_liberty.png",
      "page": "Statue of Liberty",
      "tip": "[B]+6 [icon:YIELD_HAPPINESS][/B]. Spawns [B]4 [icon:UNIT_MIGRANT] Migrants[/B]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Coast adjacent to land.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "Spawns [B]4 [icon:UNIT_MIGRANT] Migrants[/B].",
       "Must be placed on Coast adjacent to land."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "[B]+10 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for each player you have started at least [B]2 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] with.",
      "lines": [
       "[B]+10 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] for each player you have started at least [B]2 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] with."
      ]
     },
     {
      "kind": "tradition",
      "name": "Monopolies",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Factory.",
      "lines": [
       "[B]+5 [icon:YIELD_GOLD][/B] and [B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Factory."
      ]
     },
     {
      "kind": "wonder",
      "name": "Chengde Mountain Resort",
      "icon": "images/wonders/chengde_mountain_resort.png",
      "page": "Chengde Mountain Resort",
      "tip": "[B]+6 [icon:YIELD_GOLD][/B]. [B]+5% [icon:YIELD_CULTURE][/B] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Mountain.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5% [icon:YIELD_CULTURE][/B] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
       "Must be placed adjacent to a Mountain."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_MILITARISM",
    "name": "Militarism",
    "cost": 7500,
    "col": 3,
    "row": 0,
    "icon": "images/civics/militarism.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_NATIONALISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Materiel",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "+10 [icon:Action_Heal] Healing for Units. [B]+1 [icon:Action_Move] Movement[/B] for Armies and Fleets.",
      "lines": [
       "+10 [icon:Action_Heal] Healing for Units. [B]+1 [icon:Action_Move] Movement[/B] for Armies and Fleets."
      ]
     },
     {
      "kind": "tradition",
      "name": "Trenchworks",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:Action_Fortify] Fortified Units and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:Action_Fortify] Fortified Units and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Jingoism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:NAR_REW_COMBAT] Combat Strength[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when attacking an opponent from a different ideology.",
      "lines": [
       "[B]+5 [icon:NAR_REW_COMBAT] Combat Strength[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when attacking an opponent from a different ideology."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_economic.png",
      "tip": "[B]+6 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for each conquered [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "lines": [
       "[B]+6 [icon:ECONOMIC_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_GDP_TOOLTIP]GDP[/TIP] per turn for each conquered [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Draft",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing Units and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP] for Units.",
      "lines": [
       "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing Units and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP] for Units."
      ]
     },
     {
      "kind": "tradition",
      "name": "Projection of Force",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Naval Units.",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Naval Units."
      ]
     },
     {
      "kind": "wonder",
      "name": "Brandenburg Gate",
      "icon": "images/wonders/brandenburg_gate.png",
      "page": "Brandenburg Gate",
      "tip": "[B]+6 [icon:YIELD_PRODUCTION][/B]. [B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_HEGEMONY",
    "name": "Hegemony",
    "cost": 7500,
    "col": 3,
    "row": 1,
    "icon": "images/civics/hegemony.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "NODE_CIVIC_MO_MAIN_NATIONALISM"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Explorers can Research [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried since the [TIP:LOC_PEDIA_CONCEPTS_ANTIQUITY_AGE_TOOLTIP]Antiquity Age[/TIP]. Gain a free [icon:NAR_REW_GREATWORK] Artifact when Researching [icon:NAR_REW_GREATWORK] Artifacts.",
      "lines": [
       "Explorers can Research [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifacts[/TIP] buried since the [TIP:LOC_PEDIA_CONCEPTS_ANTIQUITY_AGE_TOOLTIP]Antiquity Age[/TIP]. Gain a free [icon:NAR_REW_GREATWORK] Artifact when Researching [icon:NAR_REW_GREATWORK] Artifacts."
      ]
     },
     {
      "kind": "tradition",
      "name": "Cultural Imperialism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+6 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
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
      "kind": "wonder",
      "name": "World's Fair",
      "icon": "images/wonders/worlds_fair.png",
      "page": "World's Fair",
      "tip": "[B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on all [icon:WONDER] Wonders.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "6"
       },
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "6"
       },
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       },
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+2 [icon:CULTURE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP] on all [icon:WONDER] Wonders."
      ]
     },
     {
      "kind": "tradition",
      "name": "Sphere of Influence",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you have.",
      "lines": [
       "Gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you have."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAIN_FUTURE_CIVIC",
    "name": "Future Civic",
    "cost": 8000,
    "col": 4,
    "row": 1,
    "icon": "images/civics/future_civic.png",
    "prereqs": [
     "NODE_CIVIC_MO_MAIN_HEGEMONY",
     "NODE_CIVIC_MO_MAIN_MILITARISM",
     "NODE_CIVIC_MO_MAIN_CAPITALISM"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [icon:ATTRIBUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute[/TIP] Point.",
      "lines": [
       "[B]+1 [icon:ATTRIBUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Random Attribute[/TIP] Point."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP].",
      "lines": [
       "[B]+10 [icon:NOTIFICATION_TEAM_VICTORIOUS][/B] [TIP:LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP]Age Progress[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP].",
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_cultural.png",
      "tip": "Grants 10 [icon:CULTURE_VP] Tourism",
      "lines": [
       "Grants 10 [icon:CULTURE_VP] Tourism"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_BRANCH_DEMOCRACY": {
  "age": "Modern",
  "kind": "civic",
  "name": "Democracy",
  "civ": "",
  "civType": "",
  "branch": true,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_BRANCH_DEMOCRACY",
    "name": "Democracy",
    "cost": 2750,
    "col": 0,
    "icon": "images/civics/democracy.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Fireside Chats",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Suffrage",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+4[/B] [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+4[/B] [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Cultural Attribute Point",
      "lines": [
       "Gain 1 Cultural Attribute Point"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Diplomatic Attribute Point",
      "lines": [
       "Gain 1 Diplomatic Attribute Point"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_LIBERALISM",
    "name": "Liberalism",
    "cost": 3250,
    "col": 1,
    "icon": "images/civics/liberalism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_DEMOCRACY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Free Press",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP]. [B]-5 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP]. [B]-5 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Welfare State",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_HAPPINESS] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP]. [B]-5 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_HAPPINESS] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP]. [B]-5 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
    "name": "Progressivism",
    "cost": 4500,
    "col": 2,
    "icon": "images/civics/progressivism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_LIBERALISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Avant Garde",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "New Deal",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Their Finest Hour",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Air Units in your own territory.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Air Units in your own territory."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_BRANCH_FASCISM": {
  "age": "Modern",
  "kind": "civic",
  "name": "Fascism",
  "civ": "",
  "civType": "",
  "branch": true,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_BRANCH_FASCISM",
    "name": "Fascism",
    "cost": 2750,
    "col": 0,
    "icon": "images/civics/fascism.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Assembly Line",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Dirigisme",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+3[/B] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+3[/B] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Economic Attribute Point",
      "lines": [
       "Gain 1 Economic Attribute Point"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Militaristic Attribute Point",
      "lines": [
       "Gain 1 Militaristic Attribute Point"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_RADICALISM",
    "name": "Radicalism",
    "cost": 3250,
    "col": 1,
    "icon": "images/civics/radicalism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_FASCISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Martial Law",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_PRODUCTION] equal to your [icon:ATTRIBUTE_MILITARISTIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_PRODUCTION] equal to your [icon:ATTRIBUTE_MILITARISTIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Propaganda",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_GOLD] equal to your [icon:ATTRIBUTE_ECONOMIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_GOLD] equal to your [icon:ATTRIBUTE_ECONOMIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
    "name": "Absolutism",
    "cost": 4500,
    "col": 2,
    "icon": "images/civics/absolutism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_RADICALISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Military-Industrial Complex",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for all Units.",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for all Units."
      ]
     },
     {
      "kind": "tradition",
      "name": "Strategic Railways",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Rail Station.",
      "lines": [
       "[B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Rail Station."
      ]
     },
     {
      "kind": "tradition",
      "name": "Scorched Earth",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units when attacking. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] gain +25% yields and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units when attacking. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] gain +25% yields and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_BRANCH_COMMUNISM": {
  "age": "Modern",
  "kind": "civic",
  "name": "Communism",
  "civ": "",
  "civType": "",
  "branch": true,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_BRANCH_COMMUNISM",
    "name": "Communism",
    "cost": 2750,
    "col": 0,
    "icon": "images/civics/communism.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Productive Forces Determinism",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Proletariat",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+3[/B] [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+3[/B] [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Expansionist Attribute Point",
      "lines": [
       "Gain 1 Expansionist Attribute Point"
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain 1 Scientific Attribute Point",
      "lines": [
       "Gain 1 Scientific Attribute Point"
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_CENTRALISM",
    "name": "Centralism",
    "cost": 3250,
    "col": 1,
    "icon": "images/civics/centralism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_COMMUNISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Collectivization",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_FOOD] equal to your [icon:ATTRIBUTE_EXPANSIONIST] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_FOOD] equal to your [icon:ATTRIBUTE_EXPANSIONIST] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Naukograd",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_SCIENCE] equal to your [icon:ATTRIBUTE_SCIENTIFIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_SCIENCE] equal to your [icon:ATTRIBUTE_SCIENTIFIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
    "name": "Socialism",
    "cost": 4500,
    "col": 2,
    "icon": "images/civics/socialism.png",
    "prereqs": [
     "NODE_CIVIC_MO_BRANCH_CENTRALISM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Defense of the Motherland",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in your own territory.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in your own territory."
      ]
     },
     {
      "kind": "tradition",
      "name": "Police State",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+8 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War.",
      "lines": [
       "[B]+8 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War."
      ]
     },
     {
      "kind": "tradition",
      "name": "Public Works",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards completing [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards completing [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_TEST_OF_TIME": {
  "age": "Modern",
  "kind": "civic",
  "name": "Modern Test of Time",
  "civ": "",
  "civType": "",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_ADMINISTRATION",
    "name": "Administration",
    "cost": 3000,
    "col": 1,
    "icon": "",
    "prereqs": [
     "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
     "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
     "NODE_CIVIC_MO_GREECE_MODERNIZATION",
     "NODE_CIVIC_MO_HAN_MODERNIZATION",
     "NODE_CIVIC_MO_KHMER_MODERNIZATION",
     "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
     "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
     "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
     "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
     "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
     "NODE_CIVIC_MO_INCAN_MODERNIZATION",
     "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
     "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
     "NODE_CIVIC_MO_MING_MODERNIZATION",
     "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
     "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
     "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
     "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
     "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
     "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
     "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
     "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
     "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
     "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
     "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
     "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
     "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
     "NODE_CIVIC_MO_SILLA_MODERNIZATION",
     "NODE_CIVIC_MO_TONGA_MODERNIZATION"
    ],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Gold Standard",
      "type": "TRADITION_MO_ATTRIBUTE_ECONOMIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
     },
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Romanticism",
      "type": "TRADITION_MO_ATTRIBUTE_CULTURAL_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain."
     },
     {
      "civ": "Aksum",
      "civType": "CIVILIZATION_AKSUM",
      "name": "Taj Mahal",
      "type": "WONDER_TAJ_MAHAL",
      "kind": "wonder",
      "icon": "images/wonders/taj_mahal.png",
      "page": "Taj Mahal",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": ""
     },
     {
      "civ": "Greece",
      "civType": "CIVILIZATION_GREECE",
      "name": "The Great Game",
      "type": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started."
     },
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Location Theory",
      "type": "TRADITION_MO_ATTRIBUTE_SCIENTIFIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     },
     {
      "civ": "Han",
      "civType": "CIVILIZATION_HAN",
      "name": "Vaudeville",
      "type": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]."
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "",
      "type": "MOD_CIVIC_MO_ATTRIBUTE_EXPANSIONIST_SPECIALIST_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_specialistcap.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     },
     {
      "civ": "Khmer",
      "civType": "CIVILIZATION_KHMER",
      "name": "Developmentalism",
      "type": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_TALL",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]."
     },
     {
      "civ": "Maurya",
      "civType": "CIVILIZATION_MAURYA",
      "name": "Force Structuring",
      "type": "TRADITION_MO_ATTRIBUTE_MILITARISTIC_01",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP]."
     },
     {
      "civ": "Mississippian",
      "civType": "CIVILIZATION_MISSISSIPPIAN",
      "name": "Industrial Agriculture",
      "type": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_WIDE",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP]."
     },
     {
      "civ": "Mongolia",
      "civType": "CIVILIZATION_MONGOLIA",
      "name": "",
      "type": "MOD_CIVIC_MO_ATTRIBUTE_MILITARISTIC_EXPANSIONIST_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Bread Dance II",
      "type": "TRADITION_BREAD_DANCE_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns."
     },
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "Beopseong II",
      "type": "TRADITION_BEOPSEONG_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
     },
     {
      "civ": "Songhai",
      "civType": "CIVILIZATION_SONGHAI",
      "name": "Mud Brick II",
      "type": "TRADITION_MUD_BRICK_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
    "name": "Syncretism",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/syncretism.png",
    "prereqs": [
     "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
     "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
     "NODE_CIVIC_MO_GREECE_MODERNIZATION",
     "NODE_CIVIC_MO_HAN_MODERNIZATION",
     "NODE_CIVIC_MO_KHMER_MODERNIZATION",
     "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
     "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
     "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
     "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
     "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
     "NODE_CIVIC_MO_INCAN_MODERNIZATION",
     "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
     "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
     "NODE_CIVIC_MO_MING_MODERNIZATION",
     "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
     "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
     "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
     "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
     "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
     "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
     "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
     "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
     "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
     "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
     "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
     "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
     "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
     "NODE_CIVIC_MO_SILLA_MODERNIZATION",
     "NODE_CIVIC_MO_TONGA_MODERNIZATION"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions.",
      "lines": [
       "Select an associated Civ's Units or Infrastructure, or Affirm your own Traditions."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
    "name": "Aksumite Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Port of Nations II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+200% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+200% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
    "name": "Egyptian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kemet II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_GREECE_MODERNIZATION",
    "name": "Greek Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Xenia II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_HAN_MODERNIZATION",
    "name": "Han Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ju Xian II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_KHMER_MODERNIZATION",
    "name": "Khmer Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kambu-Mera II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+100% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
    "name": "Maurya Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Arthashastra II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
    "name": "Maya Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Haab' II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Tzolk'in II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
    "name": "Mississippian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Shell Tempered Pottery II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
      "lines": [
       "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
    "name": "Achaemenid Persian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Čāpār-Kāna II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[B]+6 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Shahanshah II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units fighting in enemy territory. [B]+10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units fighting in enemy territory. [B]+10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
    "name": "Roman Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Princeps Civitatis II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Rome",
      "civType": "CIVILIZATION_ROME",
      "name": "Auxilia II",
      "type": "TRADITION_AUXILIA_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of its [icon:YIELD_PRODUCTION] cost."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
    "name": "Abbasid Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Sales and Trade II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
    "name": "Chola Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Chola",
      "civType": "CIVILIZATION_CHOLA",
      "name": "Angadi II",
      "type": "TRADITION_ANGADI_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+8 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
    "name": "Hawaiian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ahupua'a II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
      "lines": [
       "[B]+6 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_INCAN_MODERNIZATION",
    "name": "Incan Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Qullqa II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
    "name": "Majapahit Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Negarakertagama II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
      "lines": [
       "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
    "name": "Mongolia Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Jarlig II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MING_MODERNIZATION",
    "name": "Ming Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Grand Secretariat II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+3 [icon:YIELD_GOLD][/B] on Science Buildings.",
      "lines": [
       "[B]+3 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+3 [icon:YIELD_GOLD][/B] on Science Buildings."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
    "name": "Norman Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Bayeux Tapestry II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
      "lines": [
       "[B]+6 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
    "name": "Songhai Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Timbuktu II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
    "name": "Spain Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": [
     {
      "civ": "Spain",
      "civType": "CIVILIZATION_SPAIN",
      "name": "Great and Most Fortunate Navy II",
      "type": "TRADITION_GREAT_AND_MOST_FORTUNATE_NAVY_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": true,
      "with": false,
      "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
    "name": "Assyrian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Assyria",
      "civType": "CIVILIZATION_ASSYRIA",
      "name": "Dūrāni II",
      "type": "TRADITION_DURANI_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
    "name": "Bulgarian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Bulgaria",
      "civType": "CIVILIZATION_BULGARIA",
      "name": "Iconolatry II",
      "type": "TRADITION_ICONOLATRY_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
    "name": "Carthaginian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Carthage",
      "civType": "CIVILIZATION_CARTHAGE",
      "name": "Gaulos II",
      "type": "TRADITION_GAULOS_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
    "name": "Vietnamese Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "",
      "type": "MOD_MO_ARTIFACT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_generic.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]."
     },
     {
      "civ": "Đại Việt",
      "civType": "CIVILIZATION_DAI_VIET",
      "name": "Ruộng Làng Xã II",
      "type": "TRADITION_RUONG_LANG_XA_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
    "name": "Goryeo Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Goryeo",
      "civType": "CIVILIZATION_GORYEO",
      "name": "Bongwan II",
      "type": "TRADITION_BONGWAN_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
    "name": "Heian Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Heian Japan",
      "civType": "CIVILIZATION_HEIAN",
      "name": "Insei II",
      "type": "TRADITION_INSEI_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
    "name": "Icelandic Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Iceland",
      "civType": "CIVILIZATION_ICELAND",
      "name": "Lyfsteinn II",
      "type": "TRADITION_LYFSTEINN_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
    "name": "Pirate Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Republic of Pirates",
      "civType": "CIVILIZATION_PIRATE_REPUBLIC",
      "name": "Press Gangs II",
      "type": "TRADITION_PRESS_GANGS_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
    "name": "Sengoku Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Sengoku Japan",
      "civType": "CIVILIZATION_SENGOKU",
      "name": "Kabunakama II",
      "type": "TRADITION_KABUNAKAMA_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
    "name": "Shawnee Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Shawnee",
      "civType": "CIVILIZATION_SHAWNEE",
      "name": "Niwiitikeemekonaaki II",
      "type": "TRADITION_NIWIITIKEEMEKONAAKI_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_SILLA_MODERNIZATION",
    "name": "Silla Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Silla",
      "civType": "CIVILIZATION_SILLA",
      "name": "The Golden Road II",
      "type": "TRADITION_THE_GOLDEN_ROAD_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP]."
     }
    ]
   },
   {
    "id": "NODE_CIVIC_MO_TONGA_MODERNIZATION",
    "name": "Tongan Modernization",
    "cost": 2000,
    "col": 0,
    "icon": "",
    "prereqs": [],
    "unlocks": [],
    "mastery": [],
    "uniques": [
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "",
      "type": "MOD_MO_SETTLEMENT_CAP_INCREASE",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "",
      "type": "MOD_TOT_TRADITION_SLOT",
      "kind": "modifier",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "+1 Tradition slot."
     },
     {
      "civ": "Tonga",
      "civType": "CIVILIZATION_TONGA",
      "name": "Ngatu II",
      "type": "TRADITION_NGATU_II",
      "kind": "tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "page": "",
      "depth": 1,
      "replaces": "",
      "early": false,
      "with": true,
      "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands."
     }
    ]
   }
  ]
 },
 "CIVICS_ANTIQUITY_AKSUM": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Aksumite Civics",
  "civ": "Aksum",
  "civType": "CIVILIZATION_AKSUM",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA",
    "name": "Periplus of the Erythraean Sea",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/aksumite_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Port of Nations I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+100% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+100% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast."
      ]
     },
     {
      "kind": "wonder",
      "name": "Great Stele",
      "icon": "images/wonders/great_stele.png",
      "page": "Great Stele",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B]. Gain [B]200 [icon:YIELD_GOLD][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] when you construct a [icon:WONDER] Wonder, including this one. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]200 [icon:YIELD_GOLD][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] when you construct a [icon:WONDER] Wonder, including this one.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM",
    "name": "Monumentum Adulitanum",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/aksumite_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Throne Of My Fathers",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast. Gain [icon:YIELD_CULTURE] equal to 25% of your [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
      "lines": [
       "[B]+15% [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast. Gain [icon:YIELD_CULTURE] equal to 25% of your [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP]."
      ]
     },
     {
      "kind": "improvement",
      "name": "Hawilt",
      "icon": "images/improvements/hawilt.png",
      "page": "Hawilt",
      "tip": "Aksumite [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_CULTURE] Culture for adjacent [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] and other Hawilti. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Hawilt",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
       "Aksumite [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES",
    "name": "Book of the Himyarites",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/aksumite_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "May This Please The People I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_EGYPT": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Egyptian Civics",
  "civ": "Egypt",
  "civType": "CIVILIZATION_EGYPT",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI",
    "name": "Arrival of Hapi",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/egyptian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Mortuary Temple",
      "icon": "images/buildings/mortuary_temple.png",
      "page": "Mortuary Temple",
      "tip": "Egyptian Unique Gold Building. +3[icon:YIELD_GOLD] Gold. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Navigable Rivers. +1[icon:YIELD_CULTURE] Culture Adjacency for Wonders. Ageless.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent Wonder"
       },
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent Navigable River Terrain"
       }
      ],
      "lines": [
       "Egyptian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Akhet I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS",
    "name": "Scales of Anubis",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/egyptian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Mastaba",
      "icon": "images/buildings/mastaba.png",
      "page": "Mastaba",
      "tip": "Egyptian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_GOLD] Gold Adjacency for Desert Terrain, [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Desert Tile",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Egyptian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Riches of the Duat",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled when constructed in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with [icon:YIELD_CITIES] City Centers in Desert Terrain. [B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:WONDER] Wonders on Desert.",
      "lines": [
       "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled when constructed in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with [icon:YIELD_CITIES] City Centers in Desert Terrain. [B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:WONDER] Wonders on Desert."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA",
    "name": "Light of Amun-Ra",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/egyptian_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI",
     "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kemet I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]."
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
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_GREECE": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Greek Civics",
  "civ": "Greece",
  "civType": "CIVILIZATION_GREECE",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_GREECE_EKKLESIA",
    "name": "Ekklesia",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/greek_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Odeon",
      "icon": "images/buildings/odeon.png",
      "page": "Odeon",
      "tip": "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Xenia I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_GREECE_AGOGE",
    "name": "Agoge",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/greek_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Parthenon",
      "icon": "images/buildings/parthenon.png",
      "page": "Parthenon",
      "tip": "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3 [icon:YIELD_CULTURE] Culture. +2 [icon:YIELD_DIPLOMACY] Influence if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]. +1 [icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent Wonder"
       }
      ],
      "lines": [
       "+2 [icon:YIELD_DIPLOMACY] if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
       "Greek [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Strategoi",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
    "name": "Symmachia",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/greek_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_GREECE_EKKLESIA",
     "NODE_CIVIC_AQ_GREECE_AGOGE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Delian League I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Peloponnesian League I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP].",
      "lines": [
       "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "wonder",
      "name": "Oracle",
      "icon": "images/wonders/oracle.png",
      "page": "Oracle",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. When gaining rewards from a [icon:NAR_REW_DEFAULT] Narrative Event, gain an additional [B]20 [icon:YIELD_CULTURE][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "When gaining rewards from a [icon:NAR_REW_DEFAULT] Narrative Event, gain an additional [B]20 [icon:YIELD_CULTURE][/B] per [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+1 [icon:ATTRIBUTE_WILDCARD][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Wildcard Attribute[/TIP] Point.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     }
    ],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_HAN": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Han Civics",
  "civ": "Han",
  "civType": "CIVILIZATION_HAN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_HAN_REN",
    "name": "Ren",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/han_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Xumin Zhao",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HAN_YI",
    "name": "Yi",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/han_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HAN_REN"
    ],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Great Wall",
      "icon": "images/improvements/great_wall.png",
      "page": "Great Wall",
      "tip": "Han [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_CULTURE] Culture. +1[icon:YIELD_HAPPINESS] Happiness for adjacent Great Wall Improvements. +1 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP]. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. A Road is also placed with each Great Wall Improvement. Can only be built in a line. Cannot branch or fork. Has reduced cost scaling compared to other Unique Improvements.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent Great Wall Constructible"
       }
      ],
      "lines": [
       "Effect: +1 [icon:CULTURE_VP] [TIP:LOC_PEDIA_CONCEPTS_TOURISTS_TOOLTIP]Tourism[/TIP]. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile.",
       "A Road is also placed with each Great Wall Improvement. Can only be built in a line. Cannot branch or fork.",
       "Has reduced cost scaling compared to other Unique Improvements.",
       "Han [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Fenghuo I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
      "lines": [
       "[B]+1 [icon:Action_Move] Movement[/B] and [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HAN_LI",
    "name": "Li",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/han_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HAN_REN"
    ],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Weiyang Palace",
      "icon": "images/wonders/weiyang_palace.png",
      "page": "Weiyang Palace",
      "tip": "[B]+3 [icon:YIELD_DIPLOMACY][/B]. [B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Grassland.",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B]. Must be placed on Grassland."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HAN_ZHI",
    "name": "Zhi",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/han_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HAN_REN"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Xiu Taixue",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] gain a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP].",
      "lines": [
       "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] gain a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Ju Xian I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_KHMER": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Khmer Civics",
  "civ": "Khmer",
  "civType": "CIVILIZATION_KHMER",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_KHMER_MOUSONG",
    "name": "Mousong",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/khmer_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Baray",
      "icon": "images/improvements/baray.png",
      "page": "Baray",
      "tip": "Khmer [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3[icon:YIELD_FOOD] Food. +1[icon:YIELD_FOOD] Food on all [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per Settlement. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] do not get pillaged by floods.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: +1 [icon:YIELD_FOOD] on all [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] do not get pillaged by floods.",
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Khmer [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Vaishya",
      "icon": "images/civ-uniques/vaishya.png",
      "page": "Vaishya",
      "tip": "Khmer Unique Merchant. Civilian who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] to import [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] from a foreign [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Immune to flood damage. Ignores [icon:Action_Move] Movement penalties from Wet Terrain.",
      "lines": [
       "Khmer Unique Merchant. Civilian who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] to import [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] from a foreign [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Immune to flood damage. Ignores [icon:Action_Move] Movement penalties from Wet Terrain."
      ]
     },
     {
      "kind": "tradition",
      "name": "Pithi Chrat I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_KHMER_AMNACH",
    "name": "Amnach",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/khmer_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_KHMER_MOUSONG"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Bon Om Touk",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain an adjacency for [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. [B]+3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain an adjacency for [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. [B]+3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Angkor Wat",
      "icon": "images/wonders/angkor_wat.png",
      "page": "Angkor Wat",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI",
    "name": "Chakravarti",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/khmer_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_KHMER_AMNACH"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kambu-Mera I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_MAURYA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Mauryan Civics",
  "civ": "Maurya",
  "civType": "CIVILIZATION_MAURYA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_MAURYA_ACHARYA",
    "name": "Acharya",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/mauryan_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Dharamshala",
      "icon": "images/buildings/dharamshala.png",
      "page": "Dharamshala",
      "tip": "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_SCIENCE] Science Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent:",
        "list": [
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Vihara",
      "icon": "images/buildings/vihara.png",
      "page": "Vihara",
      "tip": "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Mountains and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Mauryan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Charvaka I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlocks founding a [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP], or grants an additional [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Belief[/TIP] if you have already founded one.",
      "lines": [
       "Unlocks founding a [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP], or grants an additional [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Belief[/TIP] if you have already founded one."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAURYA_VYUHAM",
    "name": "Vyuham",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/mauryan_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAURYA_ACHARYA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kshatriya",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when adjacent to each other, or +5 while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when adjacent to each other, or +5 while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD",
    "name": "Mantriparishad",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/mauryan_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAURYA_VYUHAM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Arthashastra I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Sanchi Stupa",
      "icon": "images/wonders/sanchi_stupa.png",
      "page": "Sanchi Stupa",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:YIELD_CULTURE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Plains.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on Plains."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_MAYA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Maya Civics",
  "civ": "Maya",
  "civType": "CIVILIZATION_MAYA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC",
    "name": "Rain of Chaac",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/maya_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "K'uh Nah",
      "icon": "images/buildings/k_uh_nah.png",
      "page": "K'uh Nah",
      "tip": "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +3[icon:YIELD_SCIENCE] Science. +2[icon:YIELD_SCIENCE] Science if placed on [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. +1[icon:YIELD_SCIENCE] Science Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_SCIENCE] for each adjacent Wonder"
       }
      ],
      "lines": [
       "+2 [icon:YIELD_SCIENCE] if placed on [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
       "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Pet Kot",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA",
    "name": "Lords of Xibalba",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/maya_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Jalaw",
      "icon": "images/buildings/jalaw.png",
      "page": "Jalaw",
      "tip": "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Maya [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Miracles of the Twins I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
      "lines": [
       "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
    "name": "Calendar Round",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/maya_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC",
     "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "wonder",
      "name": "Mundo Perdido",
      "icon": "images/wonders/mundo_perdido.png",
      "page": "Mundo Perdido",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Tropical Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tropical.",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] Tropical Terrain in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed on Tropical."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Tzolk'in I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Haab' I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]."
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
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_MISSISSIPPIAN": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Mississippian Civics",
  "civ": "Mississippian",
  "civType": "CIVILIZATION_MISSISSIPPIAN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS",
    "name": "Earthworks",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/mississippian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Potkop",
      "icon": "images/improvements/potkop.png",
      "page": "Potkop",
      "tip": "Mississippian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_FOOD] Food for each adjacent [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "1"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_FOOD] for each adjacent Resource"
       }
      ],
      "lines": [
       "Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
       "Mississippian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Watonathi",
      "icon": "images/civ-uniques/watonathi.png",
      "page": "Watonathi",
      "tip": "Mississippian Unique Merchant. Civilian who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] to import [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] from a foreign [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Gain 25[icon:YIELD_GOLD] Gold per [icon:RADIAL_RESOURCES] Resource acquired when creating a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
      "lines": [
       "Mississippian Unique Merchant. Civilian who can establish a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] to import [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] from a foreign [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Gain 25[icon:YIELD_GOLD] Gold per [icon:RADIAL_RESOURCES] Resource acquired when creating a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Monks Mound",
      "icon": "images/wonders/monks_mound.png",
      "page": "Monks Mound",
      "tip": "[B]+3 [icon:YIELD_FOOD][/B]. [B]+4 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Shell-Tempered Pottery I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Food, Gold, and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] Adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
      "lines": [
       "Food, Gold, and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] Adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA",
    "name": "Cah-nah-ha",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/mississippian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Gift Economy I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH",
    "name": "Waahih",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/mississippian_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS",
     "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Buzzard Cult",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when defending. When making Peace with another Leader, [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with that Leader returns to Neutral and you get a free [icon:UNIT_MERCHANT] Merchant in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when defending. When making Peace with another Leader, [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with that Leader returns to Neutral and you get a free [icon:UNIT_MERCHANT] Merchant in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_PERSIA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Achaemenid Persian Civic",
  "civ": "Achaemenid Persia",
  "civType": "CIVILIZATION_PERSIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_PERSIA_SPADA",
    "name": "Spada",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/achaemenid_persian_civic.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kara I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units."
      ]
     },
     {
      "kind": "wonder",
      "name": "Gate of All Nations",
      "icon": "images/wonders/gate_of_all_nations.png",
      "page": "Gate of All Nations",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B]. [B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all wars.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_PERSIA_SATRAPIES",
    "name": "Satrapies",
    "cost": 150,
    "col": 1,
    "icon": "images/civics/achaemenid_persian_civic.png",
    "prereqs": [
     "NODE_CIVIC_AQ_PERSIA_SPADA"
    ],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Pairidaeza",
      "icon": "images/improvements/pairidaeza.png",
      "page": "Pairidaeza",
      "tip": "Achaemenid Persian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_CULTURE] Culture and +1 [icon:YIELD_GOLD] Gold. +5 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] with a Pairidaeza. Cannot be placed adjacent to another Pairidaeza.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       },
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "1"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: +5 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] with a Pairidaeza. Cannot be placed adjacent to another Pairidaeza.",
       "Achaemenid Persian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Čāpār-Kāna I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE",
    "name": "Baziš",
    "cost": 250,
    "col": 2,
    "icon": "images/civics/achaemenid_persian_civic.png",
    "prereqs": [
     "NODE_CIVIC_AQ_PERSIA_SATRAPIES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Shahanshah I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in enemy territory. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in enemy territory. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_ROME": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Roman Civics",
  "civ": "Rome",
  "civType": "CIVILIZATION_ROME",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS",
    "name": "Exercitus Romanus",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/roman_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Temple of Jupiter",
      "icon": "images/buildings/temple_of_jupiter.png",
      "page": "Temple of Jupiter",
      "tip": "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Happiness Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Auxilia I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
      "lines": [
       "[B]+3% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS",
    "name": "Civis Romanus",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/roman_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Basilica",
      "icon": "images/buildings/basilica.png",
      "page": "Basilica",
      "tip": "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Diplomacy Building[/TIP]. +3 [icon:YIELD_DIPLOMACY] Influence. +1 [icon:YIELD_GOLD] Gold Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Culture Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Roman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Cursus Honorum",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on Diplomacy and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP], doubled if a [icon:CITY_BUILDING_LIST] Building is both. [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commanders[/TIP] gain the Bulwark [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] on Diplomacy and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP], doubled if a [icon:CITY_BUILDING_LIST] Building is both. [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commanders[/TIP] gain the Bulwark [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE",
    "name": "Legatus Pro Praetore",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/roman_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS",
     "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
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
      "kind": "tradition",
      "name": "Latinitas I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns.",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS",
    "name": "Senatus Populusque Romanus",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/roman_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Princeps Civitatis I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "[B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B].",
      "lines": [
       "[B]+1 [icon:NAR_REW_TRADITION_SLOT] Tradition Slot[/B]."
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
      "name": "Colosseum",
      "icon": "images/wonders/colosseum.png",
      "page": "Colosseum",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_ABBASID": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Abbasid Civics",
  "civ": "Abbasid",
  "civType": "CIVILIZATION_ABBASID",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_ABBASID_ROUND_CITY",
    "name": "Round City",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/abbasid_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Mosque",
      "icon": "images/buildings/mosque.png",
      "page": "Mosque",
      "tip": "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Unlocks the ability to found a [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Happiness Constructible",
         "Wonder"
        ]
       },
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Culture Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: Unlocks the ability to found a [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
       "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "City of Peace Tradition II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ABBASID_MAWLA",
    "name": "Mawla",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/abbasid_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Madrasa",
      "icon": "images/buildings/madrasa.png",
      "page": "Madrasa",
      "tip": "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +6[icon:YIELD_SCIENCE] Science. +1[icon:YIELD_SCIENCE] Science Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP], Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Quarter",
         "Science Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Abbasid [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Sales and Trade I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ABBASID_AL_JABR",
    "name": "Al-Jabr",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/abbasid_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_ABBASID_ROUND_CITY",
     "NODE_CIVIC_EX_ABBASID_MAWLA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Compendious Book Tradition",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "House of Wisdom",
      "icon": "images/wonders/house_of_wisdom.png",
      "page": "House of Wisdom",
      "tip": "[B]+3 [icon:YIELD_SCIENCE][/B]. Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+2 [icon:YIELD_SCIENCE][/B] from [icon:NAR_REW_GREATWORK] Great Works. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+2 [icon:YIELD_SCIENCE][/B] from [icon:NAR_REW_GREATWORK] Great Works. [B]+3 [icon:SCIENCE_VP][/B] [TIP:LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP]Innovation[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_CHOLA": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Chola Civics",
  "civ": "Chola",
  "civType": "CIVILIZATION_CHOLA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_CHOLA_NAGARAM",
    "name": "Nagaram",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/chola_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Manigramam",
      "icon": "images/buildings/manigramam.png",
      "page": "Manigramam",
      "tip": "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Quarter",
         "Wonder"
        ]
       },
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Gold Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Must be placed adjacent to Coast.",
       "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Anjuvannam",
      "icon": "images/buildings/anjuvannam.png",
      "page": "Anjuvannam",
      "tip": "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold and Military Building[/TIP]. +6[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for Coastal Terrain, [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +50%[icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
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
         "Coastal Marine Terrain",
         "Navigable River Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "+50%[icon:YIELD_PRODUCTION] Production towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
       "Effect: +50%[icon:YIELD_PRODUCTION] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
       "Must be placed adjacent to Coast.",
       "Chola [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Military Building[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Brihadeeswarar Temple",
      "icon": "images/wonders/brihadeeswarar_temple.png",
      "page": "Brihadeeswarar Temple",
      "tip": "[B]+3 [icon:YIELD_DIPLOMACY][/B]. All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Navigable River or on a [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
       "Must be placed adjacent to a Navigable River or on a [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor River[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_CHOLA_KANAKAM",
    "name": "Kanakam",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/chola_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_CHOLA_NAGARAM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Devakoshta II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]. [B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:DIPLOMATIC_ACTION] Diplomatic Actions with other Leaders if you have at least [B]5 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]. [B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:DIPLOMATIC_ACTION] Diplomatic Actions with other Leaders if you have at least [B]5 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_CHOLA_DIGVIJAYA",
    "name": "Digvijaya",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/chola_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_CHOLA_NAGARAM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Marakkalam",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Heavy Naval Units.",
      "lines": [
       "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Heavy Naval Units."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS",
    "name": "Monsoon Winds",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/chola_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_CHOLA_DIGVIJAYA",
     "NODE_CIVIC_EX_CHOLA_KANAKAM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Angadi I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
      "lines": [
       "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_HAWAII": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Hawai'i Civics",
  "civ": "Hawai'i",
  "civType": "CIVILIZATION_HAWAII",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_HAWAII_MANA",
    "name": "Mana",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/hawaii_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kapa",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_HAWAII_OHANA",
    "name": "Ohana",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/hawaii_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Lo'i Kalo",
      "icon": "images/improvements/lo_i_kalo.png",
      "page": "Lo'i Kalo",
      "tip": "Hawaiian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_FOOD] Food and +2 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_CULTURE] Culture for each adjacent Fishing Boat. Must be placed on Grassland or Tropical.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "3"
       },
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent Fishing Boat"
       }
      ],
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on Grassland or Tropical.",
       "Hawaiian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Ahupua'a I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_HAWAII_HE_E_NALU",
    "name": "He'e nalu",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/hawaii_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_HAWAII_MANA",
     "NODE_CIVIC_EX_HAWAII_OHANA"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_gw_relic.png",
      "tip": "[B]+2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relics[/TIP].",
      "lines": [
       "[B]+2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relics[/TIP]."
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
      "kind": "tradition",
      "name": "Ho'okupu II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes."
      ]
     },
     {
      "kind": "wonder",
      "name": "Hale o Keawe",
      "icon": "images/wonders/hale_o_keawe.png",
      "page": "Hale o Keawe",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be on Coast adjacent to land, but not adjacent to Tundra.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots.",
       "Must be on Coast adjacent to land, but not adjacent to Tundra."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_INCA": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Incan Civics",
  "civ": "Inca",
  "civType": "CIVILIZATION_INCA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_INCA_MITA",
    "name": "Mit'a",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/incan_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Terrace Farm",
      "icon": "images/improvements/terrace_farm.png",
      "page": "Terrace Farm",
      "tip": "Incan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_GOLD] Gold to all adjacent [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] without a River or Feature.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "+1 [icon:YIELD_GOLD] to all adjacent [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
       "[TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] without a River or Feature.",
       "Incan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Tirakuna II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
      "lines": [
       "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_INCA_AYLLU",
    "name": "Ayllu",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/incan_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_INCA_MITA"
    ],
    "unlocks": [
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
      "kind": "tradition",
      "name": "Qullqa I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_INCA_QHAPAQ_NAN",
    "name": "Qhapaq Ñan",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/incan_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_INCA_MITA"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] with 3 Worked Mountains generate [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP] worth 2 Cargo each.",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] with 3 Worked Mountains generate [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP] worth 2 Cargo each."
      ]
     },
     {
      "kind": "tradition",
      "name": "Quipu",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] gain [B]+0.5 [icon:YIELD_GOLD][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Urban Population[/TIP] and [B]+0.5 [icon:YIELD_PRODUCTION][/B] for every [icon:YIELD_POPULATION] Rural Population.",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] gain [B]+0.5 [icon:YIELD_GOLD][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Urban Population[/TIP] and [B]+0.5 [icon:YIELD_PRODUCTION][/B] for every [icon:YIELD_POPULATION] Rural Population."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_MAJAPAHIT": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Majapahit Civics",
  "civ": "Majapahit",
  "civType": "CIVILIZATION_MAJAPAHIT",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_MAJAPAHIT_WAYANG",
    "name": "Wayang",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/majapahit_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Candi Bentar",
      "icon": "images/buildings/candi_bentar.png",
      "page": "Candi Bentar",
      "tip": "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +6[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_CULTURE] Culture Adjacency for Coastal Terrain, [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Navigable River Terrain",
         "Coastal Marine Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Panji",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN",
    "name": "Aliran Kepercayaan",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/majapahit_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Meru",
      "icon": "images/buildings/meru.png",
      "page": "Meru",
      "tip": "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +6[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Mountains and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +2 [icon:YIELD_HAPPINESS] Happiness on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonders.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Mountainous Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: +2 [icon:YIELD_HAPPINESS] on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonders.",
       "Majapahit [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Negarakertagama I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA",
    "name": "Nusantara",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/majapahit_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_MAJAPAHIT_WAYANG",
     "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Awisan Dalem II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
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
      "name": "Borobudur",
      "icon": "images/wonders/borobudur.png",
      "page": "Borobudur",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. [B]+3 [icon:YIELD_FOOD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Food from Borobudur.",
       "Happiness from Borobudur.",
       "[B]+3 [icon:YIELD_FOOD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Must be placed adjacent to Coast."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_MING": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Ming Civics",
  "civ": "Ming",
  "civType": "CIVILIZATION_MING",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_MING_NINE_GARRISONS",
    "name": "Nine Garrisons",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/ming_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Ming Great Wall",
      "icon": "images/improvements/ming_great_wall.png",
      "page": "Ming Great Wall",
      "tip": "Ming [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_GOLD] Gold Adjacency for [icon:Action_Fortify] Fortification Constructibles. +1 [icon:CULTURE_VP] Tourism. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. A Road is also placed with each Great Wall Segment. Can only be built in a line and cannot branch or fork. Has reduced cost scaling compared to other Unique Improvements.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "5"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent Fortification Constructible"
       }
      ],
      "lines": [
       "Effect: Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile.",
       "A Road is also placed with each Great Wall Segment. Can only be built in a line. Cannot branch or fork.",
       "Ming [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Divine Engine Division",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit. [B]+3 [icon:Action_Ranged] Ranged Combat Strength[/B] to [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] adjacent to another Ranged Unit.",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit. [B]+3 [icon:Action_Ranged] Ranged Combat Strength[/B] to [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] adjacent to another Ranged Unit."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MING_LIJIA",
    "name": "Lijia",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/ming_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_MING_NINE_GARRISONS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Baojia II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. This becomes +2 in [icon:YIELD_CITIES] Cities other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. This becomes +2 in [icon:YIELD_CITIES] Cities other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MING_DA_MING_LU",
    "name": "Da Ming Lu",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/ming_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_MING_NINE_GARRISONS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Grand Secretariat I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+2 [icon:YIELD_GOLD][/B] on Science Buildings.",
      "lines": [
       "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+2 [icon:YIELD_GOLD][/B] on Science Buildings."
      ]
     },
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
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_MONGOLIA": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Mongolian Civics",
  "civ": "Mongolia",
  "civType": "CIVILIZATION_MONGOLIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_MONGOLIA_ULUS",
    "name": "Ulus",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/mongolian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Örtöö",
      "icon": "images/improvements/ortoo.png",
      "page": "Örtöö",
      "tip": "Mongolian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_GOLD] Gold. Restores [icon:Action_Move] Movement to your Units at its location. Cannot be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough[/TIP], River, or a tile with a Feature.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: Restores [icon:Action_Move] Movement to your Units at its location.",
       "Cannot be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough[/TIP], River, or a tile with a Feature.",
       "Mongolian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Erdene Zuu",
      "icon": "images/wonders/erdene_zuu.png",
      "page": "Erdene Zuu",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B]. Creating a [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its cost. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Creating a [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its cost.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Gerege",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS",
    "name": "Four Hounds",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/mongolian_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_MONGOLIA_ULUS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Baghatur II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_MONGOLIA_YASSA",
    "name": "Yassa",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/mongolian_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Jarlig I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+2 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+2 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_NORMAN": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Norman Civics",
  "civ": "Norman",
  "civType": "CIVILIZATION_NORMAN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
    "name": "Consuetudines et Justicie",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/norman_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Motte",
      "icon": "images/buildings/motte.png",
      "page": "Motte",
      "tip": "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP] and Fortification. +6[icon:YIELD_HAPPINESS] Happiness. +4[icon:YIELD_HAPPINESS] Happiness if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]. +1 [icon:YIELD_HAPPINESS] Happiness adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent Wonder"
       }
      ],
      "lines": [
       "+4 [icon:YIELD_HAPPINESS] if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
       "Effect: Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
       "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP] and Fortification."
      ]
     },
     {
      "kind": "tradition",
      "name": "Palisading II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "building",
      "name": "Bailey",
      "icon": "images/buildings/bailey.png",
      "page": "Bailey",
      "tip": "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP] and Fortification. +6 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_CULTURE] Culture Adjacency for Fortification Constructibles and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
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
         "Fortification Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Effect: Turns the District into a [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP], adding 100 [icon:Action_Heal] HP and giving it a defense strength when attacked.",
       "Norman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP] and Fortification."
      ]
     },
     {
      "kind": "tradition",
      "name": "Familia Regis",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "The [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] gains a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:CITY_FORTIFIED] Fortification Constructibles.",
      "lines": [
       "The [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] gains a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:CITY_FORTIFIED] Fortification Constructibles."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
    "name": "Common Law",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/norman_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Juré II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+2 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+2 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Servitium Debitum",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Cavalry Units.",
      "lines": [
       "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Cavalry Units."
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK",
    "name": "Domesday Book",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/norman_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_NORMAN_COMMON_LAW"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Bayeux Tapestry I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements."
      ]
     },
     {
      "kind": "wonder",
      "name": "White Tower",
      "icon": "images/wonders/white_tower.png",
      "page": "White Tower",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B]. [B]+4 [icon:YIELD_HAPPINESS][/B] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
       "Must be placed adjacent to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_SONGHAI": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Songhai Civics",
  "civ": "Songhai",
  "civType": "CIVILIZATION_SONGHAI",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
    "name": "Ships of the Desert",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/songhai_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Caravanserai",
      "icon": "images/improvements/caravanserai.png",
      "page": "Caravanserai",
      "tip": "Songhai [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +5 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP]. +1 [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. Must be placed on Desert or Plains. Cannot be adjacent to another Caravanserai.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "5"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Resource",
         "Navigable River"
        ]
       }
      ],
      "lines": [
       "+1 [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP] must be placed on Desert or Plains. Cannot be adjacent to another Caravanserai.",
       "Songhai [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Tomb of Askia",
      "icon": "images/wonders/tomb_of_askia.png",
      "page": "Tomb of Askia",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B]. [B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] in this Settlement for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Desert.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] in this Settlement for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
       "Must be placed on Desert."
      ]
     },
     {
      "kind": "tradition",
      "name": "Timbuktu I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Mud Brick I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SONGHAI_HI_KOI",
    "name": "Hi-Koi",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/songhai_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Isa",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for all Units on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor[/TIP] and Navigable Rivers do not end Unit [icon:Action_Move] Movement.",
      "lines": [
       "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for all Units on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor[/TIP] and Navigable Rivers do not end Unit [icon:Action_Move] Movement."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SONGHAI_KANTA",
    "name": "Kanta",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/songhai_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
     "NODE_CIVIC_EX_SONGHAI_HI_KOI"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP] generate [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP] worth 2 Cargo each.",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP] generate [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP] worth 2 Cargo each."
      ]
     },
     {
      "kind": "tradition",
      "name": "Wakia II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
      "lines": [
       "[B]+3 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_SPAIN": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Spanish Civics",
  "civ": "Spain",
  "civType": "CIVILIZATION_SPAIN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES",
    "name": "Council of the Indies",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/spanish_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Casa Consistorial",
      "icon": "images/buildings/casa_consistorial.png",
      "page": "Casa Consistorial",
      "tip": "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +6[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
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
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
       "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Casa de Contratación",
      "icon": "images/buildings/casa_de_contratacion.png",
      "page": "Casa de Contratación",
      "tip": "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +6[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
      "yields": [
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
         "Navigable River",
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Must be built in the [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] adjacent to Coast.",
       "Spanish [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Conquista",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP], or [B]+5 [icon:NAR_REW_COMBAT][/B] Combat Strength for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP], or [B]+5 [icon:NAR_REW_COMBAT][/B] Combat Strength for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "El Escorial",
      "icon": "images/wonders/el_escorial.png",
      "page": "El Escorial",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [B]+4 [icon:YIELD_HAPPINESS][/B] on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] within 7 tiles of this [icon:WONDER] Wonder. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [B]+4 [icon:YIELD_HAPPINESS][/B] on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] within 7 tiles of this [icon:WONDER] Wonder.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SPAIN_ARMADA",
    "name": "Armada",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/spanish_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Great and Most Fortunate Navy I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES",
    "name": "New World Riches",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/spanish_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Cerro Rico II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], or [B]+3 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], or [B]+3 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "[B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]. [icon:RADIAL_RESOURCES]  [icon:YIELD_GOLD] and Silver [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] are worth [B]+1 [icon:TREASURE_FLEET][/B] Cargo for [icon:UNIT_TREASURE_FLEET] Treasure Convoys.",
      "lines": [
       "[B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]. [icon:RADIAL_RESOURCES]  [icon:YIELD_GOLD] and Silver [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] are worth [B]+1 [icon:TREASURE_FLEET][/B] Cargo for [icon:UNIT_TREASURE_FLEET] Treasure Convoys."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_AMERICA": {
  "age": "Modern",
  "kind": "civic",
  "name": "American Civics",
  "civ": "America",
  "civType": "CIVILIZATION_AMERICA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY",
    "name": "Yankee Ingenuity",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/american_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "building",
      "name": "Steel Mill",
      "icon": "images/buildings/steel_mill.png",
      "page": "Steel Mill",
      "tip": "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production. +1[icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
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
         "Resource",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Gold Rush II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY",
    "name": "Captains of Industry",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/american_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "building",
      "name": "Railyard",
      "icon": "images/buildings/railyard.png",
      "page": "Railyard",
      "tip": "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production. +1[icon:YIELD_PRODUCTION] Production Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Quarter",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "American [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Robber Baron II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING",
    "name": "Wartime Manufacturing",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/american_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY",
     "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Lend-Lease",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars, or +2 if joining a [icon:WAR] War with an [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Ally[/TIP]. [B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when fighting a [icon:WAR] War in which your [icon:WAR_SUPPORT] War Support is higher than your opponent.",
      "lines": [
       "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars, or +2 if joining a [icon:WAR] War with an [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Ally[/TIP]. [B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when fighting a [icon:WAR] War in which your [icon:WAR_SUPPORT] War Support is higher than your opponent."
      ]
     },
     {
      "kind": "wonder",
      "name": "Statue of Liberty",
      "icon": "images/wonders/statue_of_liberty.png",
      "page": "Statue of Liberty",
      "tip": "[B]+6 [icon:YIELD_HAPPINESS][/B]. Spawns [B]4 [icon:UNIT_MIGRANT] Migrants[/B]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Coast adjacent to land.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "Spawns [B]4 [icon:UNIT_MIGRANT] Migrants[/B].",
       "Must be placed on Coast adjacent to land."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_BUGANDA": {
  "age": "Modern",
  "kind": "civic",
  "name": "Buganda Civics",
  "civ": "Buganda",
  "civType": "CIVILIZATION_BUGANDA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_BUGANDA_NNALUBAALE",
    "name": "'Nnalubaale",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/buganda_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Kabaka's Lake",
      "icon": "images/improvements/kabaka_s_lake.png",
      "page": "Kabaka's Lake",
      "tip": "Bugandan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_HAPPINESS] Happiness. Counts as a Lake for bonuses and adjacencies. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Effect: Counts as a Lake for bonuses and adjacencies.",
       "Does not remove [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. One per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Bugandan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Clan Society II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles."
      ]
     },
     {
      "kind": "wonder",
      "name": "Muzibu Azaala Mpanga",
      "icon": "images/wonders/muzibu_azaala_mpanga.png",
      "page": "Muzibu Azaala Mpanga",
      "tip": "[B]+4 [icon:YIELD_FOOD][/B]. [B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on Lake tiles. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Lake. [B]+1 [icon:YIELD_POPULATION][/B] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Lakes.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on Lake tiles. [B]+1 [icon:YIELD_POPULATION][/B] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Lakes.",
       "Must be placed adjacent to a Lake."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BUGANDA_BLUTABAALO",
    "name": "Blutabaalo",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/buganda_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_BUGANDA_NNALUBAALE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ng'oma II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+8 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
      "lines": [
       "[B]+8 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_BUGANDA_NYANZA",
    "name": "Nyanza",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/buganda_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_BUGANDA_BLUTABAALO"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Interlacustrine II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain an Adjacency with Lakes based on all the Building's Yields.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain an Adjacency with Lakes based on all the Building's Yields."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_FRENCH_EMPIRE": {
  "age": "Modern",
  "kind": "civic",
  "name": "French Civics",
  "civ": "French Empire",
  "civType": "CIVILIZATION_FRENCH_EMPIRE",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE",
    "name": "Belle Époque",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/french_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Salon",
      "icon": "images/buildings/salon.png",
      "page": "Salon",
      "tip": "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Happiness Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Style Empire II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE",
    "name": "Voie Triomphale",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/french_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Jardin à la Française",
      "icon": "images/buildings/jardin_a_la_francaise.png",
      "page": "Jardin à la Française",
      "tip": "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Culture Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "French [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Cocorico II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 25% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 25% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE",
    "name": "Grande Armée",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/french_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE",
     "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Bataillon-Carré",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] gain the Swift ability, allowing them to ignore [TIP:LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP]Zone of Control[/TIP].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] gain the Swift ability, allowing them to ignore [TIP:LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP]Zone of Control[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_FRENCH_EMPIRE_CODE_CIVIL",
    "name": "Code Civil des Français",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/french_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE"
    ],
    "unlocks": [
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
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_MEIJI": {
  "age": "Modern",
  "kind": "civic",
  "name": "Meiji Civics",
  "civ": "Meiji Japan",
  "civType": "CIVILIZATION_MEIJI",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA",
    "name": "Bunmei Kaika",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/meiji_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Jukogyo",
      "icon": "images/buildings/jukogyo.png",
      "page": "Jukogyo",
      "tip": "Meiji Japan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9[icon:YIELD_PRODUCTION] Production. +1[icon:YIELD_PRODUCTION] Production Adjacency for Coastal Terrain and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Coastal Marine Terrain",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Meiji [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Fukoku Kyōhei II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Aircraft[/TIP] Units. When you train a Naval or Aircraft Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Aircraft[/TIP] Units. When you train a Naval or Aircraft Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost."
      ]
     },
     {
      "kind": "wonder",
      "name": "Dogo Onsen",
      "icon": "images/wonders/dogo_onsen.png",
      "page": "Dogo Onsen",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B]. This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gains a [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] every time you enter a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] gains a [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] every time you enter a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
       "Must be placed adjacent to Coast."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES",
    "name": "Oath in Five Articles",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/meiji_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Ginkō",
      "icon": "images/buildings/ginko.png",
      "page": "Ginkō",
      "tip": "Meiji Japan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Gold Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Meiji [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "O-yatoi Gaikokujin II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL",
    "name": "Supreme War Council",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/meiji_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA",
     "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Shusei Kokubō II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. Military and Science Buildings receive an adjacency for Coast.",
      "lines": [
       "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. Military and Science Buildings receive an adjacency for Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN",
    "name": "Kantai Kessen",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/meiji_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kōkūtai",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Aircraft attacking an enemy Unit adjacent to a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
      "lines": [
       "[B]+6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Aircraft attacking an enemy Unit adjacent to a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_MEXICO": {
  "age": "Modern",
  "kind": "civic",
  "name": "Mexico Civics",
  "civ": "Mexico",
  "civType": "CIVILIZATION_MEXICO",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
    "name": "Planes Políticos",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/mexico_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Catedral",
      "icon": "images/buildings/catedral.png",
      "page": "Catedral",
      "tip": "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_Happiness] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_CULTURE] for each adjacent:",
        "list": [
         "Culture Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Portal de Mercaderes",
      "icon": "images/buildings/portal_de_mercaderes.png",
      "page": "Portal de Mercaderes",
      "tip": "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_GOLD] Gold Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_GOLD] for each adjacent:",
        "list": [
         "Gold Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Mexican [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Corridos",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "Palacio de Bellas Artes",
      "icon": "images/wonders/palacio_de_bellas_artes.png",
      "page": "Palacio de Bellas Artes",
      "tip": "[B]+5 [icon:YIELD_CULTURE][/B]. Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:NAR_REW_GREATWORK] Great Works. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "5"
       }
      ],
      "adj": [],
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]. Has [B]3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:NAR_REW_GREATWORK] Great Works.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Muralismo III",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+6 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+6 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA",
    "name": "Plan of Iguala",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/mexico_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, Gain one free Infantry Unit in each City immediately.",
      "lines": [
       "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, Gain one free Infantry Unit in each City immediately."
      ]
     },
     {
      "kind": "tradition",
      "name": "Cry of Dolores",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] in friendly territory for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] in friendly territory for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA",
    "name": "Plan of Ayutla",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/mexico_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +2[icon:YIELD_DIPLOMACY] Influence in every Joyous or happier Settlement for 6 Turns.",
      "lines": [
       "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +2[icon:YIELD_DIPLOMACY] Influence in every Joyous or happier Settlement for 6 Turns."
      ]
     },
     {
      "kind": "tradition",
      "name": "La Reforma II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC",
    "name": "Plan of Tuxtepec",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/mexico_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +3[icon:YIELD_SCIENCE] Science in every Joyous or happier Settlement for 6 Turns.",
      "lines": [
       "Unlock an additional [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP] effect, +3[icon:YIELD_SCIENCE] Science in every Joyous or happier Settlement for 6 Turns."
      ]
     },
     {
      "kind": "tradition",
      "name": "Order and Progress II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_MUGHAL": {
  "age": "Modern",
  "kind": "civic",
  "name": "Mughal Civics",
  "civ": "Mughal",
  "civType": "CIVILIZATION_MUGHAL",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_MUGHAL_ZABT",
    "name": "Zabt",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/mughal_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Stepwell",
      "icon": "images/improvements/stepwell.png",
      "page": "Stepwell",
      "tip": "Mughal [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_FOOD] Food. +2 [icon:YIELD_FOOD] Food from adjacent Farms. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Cannot be placed adjacent to another Stepwell.",
      "yields": [
       {
        "y": "YIELD_FOOD",
        "n": "Food",
        "v": "2"
       }
      ],
      "adj": [
       {
        "text": "+2 [icon:YIELD_FOOD] for each adjacent Farm"
       }
      ],
      "lines": [
       "Does not remove [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. Cannot be placed adjacent to another Stepwell.",
       "Mughal [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Jins-i Kamil",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on Farms for each adjacent Plantation, and on Plantations for each adjacent Farm.",
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on Farms for each adjacent Plantation, and on Plantations for each adjacent Farm."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MUGHAL_JAGIR",
    "name": "Jagir",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/mughal_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MUGHAL_ZABT"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Qilachas II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_MUGHAL_MANSABDARI",
    "name": "Mansabdari",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/mughal_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MUGHAL_ZABT"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Gunpowder Empire",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units."
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
    "id": "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE",
    "name": "Gardens of Paradise",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/mughal_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_MUGHAL_JAGIR",
     "NODE_CIVIC_MO_MUGHAL_MANSABDARI"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Mayūrāsana II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_PRUSSIA": {
  "age": "Modern",
  "kind": "civic",
  "name": "Prussian Civics",
  "civ": "Prussia",
  "civType": "CIVILIZATION_PRUSSIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_PRUSSIA_RUHR",
    "name": "Ruhr",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/prussian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Coking II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN",
    "name": "Zollverein",
    "cost": 2000,
    "col": 1,
    "icon": "images/civics/prussian_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_PRUSSIA_RUHR"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Mediatization",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH",
    "name": "Ems Dispatch",
    "cost": 3000,
    "col": 2,
    "icon": "images/civics/prussian_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Realpolitik II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
      "lines": [
       "[B]+2 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader."
      ]
     },
     {
      "kind": "wonder",
      "name": "Brandenburg Gate",
      "icon": "images/wonders/brandenburg_gate.png",
      "page": "Brandenburg Gate",
      "tip": "[B]+6 [icon:YIELD_PRODUCTION][/B]. [B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [
       {
        "y": "YIELD_PRODUCTION",
        "n": "Production",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars. [B]+1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG",
    "name": "Bewegungskrieg",
    "cost": 4000,
    "col": 3,
    "icon": "images/civics/prussian_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Iron Cross",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] of a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP]Commendation[/TIP].",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] of a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP]Commendation[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_QING": {
  "age": "Modern",
  "kind": "civic",
  "name": "Qing Civics",
  "civ": "Qing",
  "civType": "CIVILIZATION_QING",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS",
    "name": "Ten Great Campaigns",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/qing_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Tun Ken II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+50% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_QING_OPEN_CUSTOMS",
    "name": "Open Customs",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/qing_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Qianzhuang",
      "icon": "images/buildings/qianzhuang.png",
      "page": "Qianzhuang",
      "tip": "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
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
         "Gold Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Cohong II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to them.",
      "lines": [
       "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to them."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION",
    "name": "Kang Xi Tax Reformation",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/qing_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Shiguan",
      "icon": "images/buildings/shiguan.png",
      "page": "Shiguan",
      "tip": "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +9[icon:YIELD_SCIENCE] Science. +1[icon:YIELD_HAPPINESS] Happiness Adjacency for Happiness [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [
       {
        "y": "YIELD_SCIENCE",
        "n": "Science",
        "v": "9"
       }
      ],
      "adj": [
       {
        "text": "+1 [icon:YIELD_HAPPINESS] for each adjacent:",
        "list": [
         "Happiness Constructible",
         "Wonder"
        ]
       }
      ],
      "lines": [
       "Qing [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Building[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Farmland Assessment",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER",
    "name": "Stabilizing Frontier",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/qing_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_QING_OPEN_CUSTOMS",
     "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Banner Army II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
      "lines": [
       "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units."
      ]
     },
     {
      "kind": "wonder",
      "name": "Chengde Mountain Resort",
      "icon": "images/wonders/chengde_mountain_resort.png",
      "page": "Chengde Mountain Resort",
      "tip": "[B]+6 [icon:YIELD_GOLD][/B]. [B]+5% [icon:YIELD_CULTURE][/B] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a Mountain.",
      "yields": [
       {
        "y": "YIELD_GOLD",
        "n": "Gold",
        "v": "6"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5% [icon:YIELD_CULTURE][/B] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
       "Must be placed adjacent to a Mountain."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_RUSSIA": {
  "age": "Modern",
  "kind": "civic",
  "name": "Russian Civics",
  "civ": "Russia",
  "civType": "CIVILIZATION_RUSSIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_RUSSIA_SERFDOM",
    "name": "Serfdom",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/russian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Obshchina",
      "icon": "images/improvements/obshchina.png",
      "page": "Obshchina",
      "tip": "Russian Empire [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +1 [icon:YIELD_FOOD] Food on all Farms in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. +2 [icon:YIELD_CULTURE] Culture in [icon:CITY_UNIMPROVED] Tundra Terrain. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Cannot be placed adjacent to another Obshchina.",
      "yields": [],
      "adj": [],
      "lines": [
       "Effect: +2 [icon:YIELD_CULTURE] Culture if placed in [icon:CITY_UNIMPROVED] Tundra Terrain.",
       "+1 [icon:YIELD_FOOD] Food on all Farms in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
       "Does not remove [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile. Cannot be placed adjacent to another Obshchina.",
       "Russian Empire [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Krestyanskaya Reforma II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
      "lines": [
       "[B]+15% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS",
    "name": "Table of Ranks",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/russian_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_RUSSIA_SERFDOM"
    ],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Hermitage",
      "icon": "images/wonders/hermitage.png",
      "page": "Hermitage",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B]. [B]+5 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that have a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display. Has [B]3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP][/B] slots. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tundra.",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that have a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display. Has [B]3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP][/B] slots.",
       "Must be placed on Tundra."
      ]
     },
     {
      "kind": "tradition",
      "name": "Západnichestvo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+15% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] Cities.",
      "lines": [
       "[B]+15% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] Cities."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE",
    "name": "Samoderzhaviye",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/russian_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "General Moroz II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Enemy Units in your territory take double [icon:DAMAGED] Damage from Blizzards. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
      "lines": [
       "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Enemy Units in your territory take double [icon:DAMAGED] Damage from Blizzards. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_SIAM": {
  "age": "Modern",
  "kind": "civic",
  "name": "Siam Civics",
  "civ": "Siam",
  "civType": "CIVILIZATION_SIAM",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
    "name": "Nine Gems",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/siam_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Bang",
      "icon": "images/improvements/bang.png",
      "page": "Bang",
      "tip": "Siamese [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3 [icon:YIELD_CULTURE] Culture and [icon:YIELD_HAPPINESS] Happiness. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP].",
      "yields": [
       {
        "y": "YIELD_CULTURE",
        "n": "Culture",
        "v": "3"
       },
       {
        "y": "YIELD_HAPPINESS",
        "n": "Happiness",
        "v": "3"
       }
      ],
      "adj": [],
      "lines": [
       "Does not remove [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile. Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP].",
       "Siamese [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "San Lak Mueang II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "Doi Suthep",
      "icon": "images/wonders/doi_suthep.png",
      "page": "Doi Suthep",
      "tip": "[B]+4 [icon:YIELD_DIPLOMACY][/B]. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "4"
       }
      ],
      "adj": [],
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Sakdina",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] and [B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_SIAM_MANDALA",
    "name": "Mandala",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/siam_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_SIAM_NINE_GEMS"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Prathetsarat",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions with [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP].",
      "lines": [
       "[B]+20% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions with [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_SIAM_SRIWILAI",
    "name": "Sriwilai",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/siam_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_SIAM_MANDALA"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Monthon II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+3 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+5 [icon:YIELD_GOLD][/B] and [B]+3 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_ASSYRIA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Assyrian Civics",
  "civ": "Assyria",
  "civType": "CIVILIZATION_ASSYRIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU",
    "name": "Birtūtu",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/assyria_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Citadel",
      "icon": "images/civ-uniques/citadel.png",
      "page": "",
      "tip": "Assyrian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production and Fortification Building[/TIP]. +3 [icon:YIELD_PRODUCTION] Production. +2 [icon:YIELD_HAPPINESS] Happiness if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP]. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "wonder",
      "name": "Dur-Sharrukin",
      "icon": "images/wonders/dur_sharrukin.png",
      "page": "Dur-Sharrukin",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_FORTIFIED] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] in all Settlements. Acts as a [icon:CITY_FORTIFIED] Fortified District that must be conquered. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [],
      "adj": [],
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_FORTIFIED] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] in all Settlements. Acts as a [icon:CITY_FORTIFIED] Fortified District that must be conquered.",
       "Must be placed adjacent to a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]."
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
      "kind": "tradition",
      "name": "Dūrāni I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology Mastery[/TIP] completed this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology Mastery[/TIP] completed this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
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
    "id": "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU",
    "name": "Tupšarrūtu",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/assyria_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Royal Library",
      "icon": "images/civ-uniques/royal_library.png",
      "page": "",
      "tip": "Assyrian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +3 [icon:YIELD_SCIENCE] Science. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP]Codex[/TIP] slots. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for Rivers and +1 [icon:YIELD_SCIENCE] Science Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "unit",
      "name": "Turtanu",
      "icon": "images/civ-uniques/turtanu.png",
      "page": "Turtanu",
      "tip": "Assyrian Unique Army Commander. [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry units[/TIP] within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] have +5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Assyrian Unique Army Commander. [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry units[/TIP] within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] have +5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Miḫiṣtu I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot.",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot."
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
    "id": "NODE_CIVIC_AQ_ASSYRIA_KIBRAT_ARBA_I",
    "name": "Kibrāt Arba’i",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/assyria_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Girru I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+3 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      "lines": [
       "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+3 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
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
   }
  ]
 },
 "CIVICS_EXPLORATION_BULGARIA": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Bulgaria Civics",
  "civ": "Bulgaria",
  "civType": "CIVILIZATION_BULGARIA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES",
    "name": "Seven Tribes",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/bulgaria_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Hidden Fortress",
      "icon": "images/civ-uniques/hidden_fortress.png",
      "page": "",
      "tip": "Bulgarian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_PRODUCTION] Production. +2 [icon:YIELD_CULTURE] Culture for each adjacent [TIP:LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP]Mountain[/TIP]. Units on this tile gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP]. Counts as a [icon:Action_Fortify] Fortification, granting +6 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units defending on the tile. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] not adjacent to another Hidden Fortress.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "False Retreat",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Receive [icon:YIELD_FOOD] in all [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when Pillaging [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] equal to 50% of the Yield or [icon:Action_Heal] HP gained. [B]-3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for all Combat Units against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
      "lines": [
       "Receive [icon:YIELD_FOOD] in all [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when Pillaging [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] equal to 50% of the Yield or [icon:Action_Heal] HP gained. [B]-3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for all Combat Units against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_BULGARIA_TARNOVO_SCHOOLS",
    "name": "Tarnovo Schools",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/bulgaria_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Iconolatry I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Rila Monastery",
      "icon": "images/wonders/rila_monastery.png",
      "page": "",
      "tip": "+4 [icon:YIELD_CULTURE]. Has 3 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slots. Gain a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] every time you construct a [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonder[/TIP], including this one. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Cannot be placed adjacent to a [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP].",
      "yields": [],
      "adj": [],
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_BULGARIA_TSARSTVIE",
    "name": "Tsarstvie",
    "cost": 2000,
    "col": 1,
    "icon": "images/civics/bulgaria_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Stratagems II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "+50% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]8 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
      "lines": [
       "+50% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]8 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_CARTHAGE": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Carthage Civics",
  "civ": "Carthage",
  "civType": "CIVILIZATION_CARTHAGE",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS",
    "name": "Shipsheds",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/carthage_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Cothon",
      "icon": "images/civ-uniques/cothon.png",
      "page": "",
      "tip": "Carthaginian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +2 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production Adjacency for Coast, [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be placed on Coast.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "wonder",
      "name": "Byrsa",
      "icon": "images/civ-uniques/byrsa.png",
      "page": "",
      "tip": "+2 [icon:YIELD_GOLD]. [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] cannot be [icon:Action_Pillage] Plundered. All [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] that are adjacent to Coast and eligible for Walls receive a [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to Coast.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Quinquereme I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
      "lines": [
       "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP",
    "name": "Wisdom of Tanit",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/carthage_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Dockyard",
      "icon": "images/civ-uniques/dockyard.png",
      "page": "",
      "tip": "Carthaginian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +2 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_FOOD] Food Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be placed on Coast.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Gaulos I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_CARTHAGE_SICILIAN_WARS",
    "name": "Sicilian Wars",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/carthage_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP",
     "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Suffetes",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+20% [icon:YIELD_GOLD][/B] in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+20% [icon:YIELD_FOOD][/B] in Fishing or Farming [icon:YIELD_TOWNS] Towns. [B]+1 [icon:TRADE_ROUTE][/B] Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] Range for every [icon:YIELD_TOWNS] Town with a [icon:TOWN_FOCUS] Trade Outpost Focus.",
      "lines": [
       "[B]+20% [icon:YIELD_GOLD][/B] in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+20% [icon:YIELD_FOOD][/B] in Fishing or Farming [icon:YIELD_TOWNS] Towns. [B]+1 [icon:TRADE_ROUTE][/B] Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] Range for every [icon:YIELD_TOWNS] Town with a [icon:TOWN_FOCUS] Trade Outpost Focus."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "[B]+2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "[B]+2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_DAI_VIET": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Đại Việt Civics",
  "civ": "Đại Việt",
  "civType": "CIVILIZATION_DAI_VIET",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN",
    "name": "Cấm Quân",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/dai_viet_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Thành Huế",
      "icon": "images/civ-uniques/thanh_hue.png",
      "page": "",
      "tip": "+4 [icon:YIELD_CULTURE]. +1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with 7 [icon:Action_Fortify] Fortification Constructibles. Acts as a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be built adjacent to Medieval Walls, in a [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] with 7 Medieval [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Walls[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Cấm Binh II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing and [icon:YIELD_GOLD] towards purchasing [icon:CITY_FORTIFIED] Fortification Constructibles.",
      "lines": [
       "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing and [icon:YIELD_GOLD] towards purchasing [icon:CITY_FORTIFIED] Fortification Constructibles."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_DAI_VIET_CHU_NOM",
    "name": "Chữ Nôm",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/dai_viet_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Con Kênh",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Culture and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [icon:CITY_UNIMPROVED] Tropical Terrain.",
      "lines": [
       "Culture and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [icon:CITY_UNIMPROVED] Tropical Terrain."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_DAI_VIET_THANH_HOANG",
    "name": "Thành Hoàng",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/dai_viet_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Water Puppet Theater",
      "icon": "images/civ-uniques/water_puppet_theater.png",
      "page": "",
      "tip": "Đại Việt [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +2 [icon:YIELD_HAPPINESS] Happiness if placed on [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. +1 [icon:YIELD_CULTURE] Culture for every time a Storm, Flood, or Volcanic Eruption has provided Fertility to this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] do not get pillaged by Floods. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed adjacent to a River not adjacent to another Water Puppet Theater.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+2 Tradition slots.",
      "lines": [
       "+2 Tradition slots."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_DAI_VIET_TU_DAN",
    "name": "Tứ Dân",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/dai_viet_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN",
     "NODE_CIVIC_EX_DAI_VIET_CHU_NOM",
     "NODE_CIVIC_EX_DAI_VIET_THANH_HOANG"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Ruộng Làng Xã I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
      "lines": [
       "[B]+1 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_GORYEO": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Goryeo Civics",
  "civ": "Goryeo",
  "civType": "CIVILIZATION_GORYEO",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_GORYEO_CHEONSU",
    "name": "Cheonsu",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/goryeo_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Gama",
      "icon": "images/civ-uniques/gama.png",
      "page": "",
      "tip": "Goryeo [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +3[icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] buildings. Must be placed on a [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated[/TIP] tile.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Bongwan I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Buseoksa",
      "icon": "images/civ-uniques/buseoksa.png",
      "page": "",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B]. Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] within 6 of this [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonder[/TIP] receive [B]+1 [icon:YIELD_DIPLOMACY] Influence[/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. Ecstatic Settlements within 6 of this [icon:WONDER] Wonder receive [B]+1 [icon:YIELD_DIPLOMACY] Influence[/B] and [B]+2 [icon:YIELD_GOLD] Gold[/B] on [icon:CITY_RURAL] Unique Improvements. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tropical or Grassland adjacent to at least one Mountain tile.",
      "yields": [],
      "adj": [],
      "lines": []
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_GORYEO_TRIPITAKA_KOREANA",
    "name": "Tripitaka Koreana",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/goryeo_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_GORYEO_CHEONSU"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Hoguk Jonggyo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] or Settlements following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] or Settlements following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_GORYEO_JIKJI",
    "name": "Jikji",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/goryeo_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_GORYEO_CHEONSU"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Sagae Chibubeop",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [icon:YIELD_GOLD] equal to 10% of their [icon:YIELD_CULTURE].",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [icon:YIELD_GOLD] equal to 10% of their [icon:YIELD_CULTURE]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_GREAT_BRITAIN": {
  "age": "Modern",
  "kind": "civic",
  "name": "Great Britain Civics",
  "civ": "Great Britain",
  "civType": "CIVILIZATION_GREAT_BRITAIN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_GREAT_BRITAIN_PAX_BRITANNICA",
    "name": "Pax Britannica",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/great_britain_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Battersea Power Station",
      "icon": "images/wonders/battersea_power_station.png",
      "page": "",
      "tip": "+4[icon:YIELD_PRODUCTION] Production. Receive a second [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] each time you train a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] (But not Purchase). [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on land adjacent to Coast.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "building",
      "name": "Royal Exchange",
      "icon": "images/civ-uniques/royal_exchange.png",
      "page": "",
      "tip": "British [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +9 [icon:YIELD_GOLD] Gold. +1 [icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Quarters[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "building",
      "name": "Manufactory",
      "icon": "images/civ-uniques/manufactory.png",
      "page": "",
      "tip": "British [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +9 [icon:YIELD_PRODUCTION] Production. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1 [icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES",
    "name": "Society of Antiquaries",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/great_britain_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_GREAT_BRITAIN_PAX_BRITANNICA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Proceedings",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with both a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] and a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted. [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] receive [B]+3 [icon:YIELD_PRODUCTION][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] assigned to them.",
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with both a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] and a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted. [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] receive [B]+3 [icon:YIELD_PRODUCTION][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] assigned to them."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP].",
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_GREAT_BRITAIN_CHARTERED_COMPANIES",
    "name": "Chartered Companies",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/great_britain_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "East India Company II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
      "lines": [
       "[B]+5 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_GREAT_BRITAIN_SPLENDID_ISOLATION",
    "name": "Splendid Isolation",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/great_britain_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "No Eternal Allies II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
      "lines": [
       "[B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP]."
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
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_HEIAN": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Heian Civics",
  "civ": "Heian Japan",
  "civType": "CIVILIZATION_HEIAN",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_HEIAN_RITSURYO",
    "name": "Ritsuryo",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/heian_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Jinja (Land)",
      "icon": "images/civ-uniques/jinja.png",
      "page": "",
      "tip": "Heian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2[icon:YIELD_HAPPINESS] Happiness. +2[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Charming and Breathtaking[/TIP] tiles. One Jinja (Land) per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "improvement",
      "name": "Jinja (Sea)",
      "icon": "images/civ-uniques/jinja.png",
      "page": "",
      "tip": "Heian [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2[icon:YIELD_HAPPINESS] Happiness. +2[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Charming and Breathtaking[/TIP] tiles. One Jinja (Sea) per [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Insei I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HEIAN_WAKA",
    "name": "Waka",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/heian_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HEIAN_RITSURYO"
    ],
    "unlocks": [
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
      "kind": "tradition",
      "name": "Utsurou",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] receive [B]+2 [icon:YIELD_CULTURE][/B] for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display, but [icon:UNIT_ARMY_COMMANDER] Commanders receive [B]-25% [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP][/B].",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] receive [B]+2 [icon:YIELD_CULTURE][/B] for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display, but [icon:UNIT_ARMY_COMMANDER] Commanders receive [B]-25% [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP][/B]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HEIAN_URBAN_GRID",
    "name": "Urban Grid",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/heian_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HEIAN_RITSURYO"
    ],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Hoo-do",
      "icon": "images/civ-uniques/hoo_do.png",
      "page": "",
      "tip": "[icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] provide +1 [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appeal[/TIP] to adjacent tiles. [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles receive +1 [icon:YIELD_PRODUCTION], +1 [icon:YIELD_CULTURE], and +1 [icon:YIELD_HAPPINESS] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP] adjacent to a [TIP:LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP]River[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Jo-bo System I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+0.5 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+0.5 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_HEIAN_MONO_NO_AWARE",
    "name": "Mono No Aware",
    "cost": 400,
    "col": 2,
    "icon": "images/civics/heian_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_HEIAN_WAKA",
     "NODE_CIVIC_AQ_HEIAN_URBAN_GRID"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Monogatari",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency with Charming tiles and [B]+2 [icon:YIELD_FOOD][/B] Adjacency with [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency with Charming tiles and [B]+2 [icon:YIELD_FOOD][/B] Adjacency with [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_ICELAND": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Iceland Civics",
  "civ": "Iceland",
  "civType": "CIVILIZATION_ICELAND",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
    "name": "Landnámabók",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/iceland_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Þingstaðr",
      "icon": "images/icons/improvement_thing.png",
      "page": "",
      "tip": "Icelandic [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Wet, [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP], Volcano, and [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated[/TIP] tiles. Must be placed on Tundra or Grassland not adjacent to another Þingstaðr.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Dróttkvætt II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
      "lines": [
       "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "tradition",
      "name": "Reiði Guðanna",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Cultural and [icon:YIELD_PRODUCTION] Adjacency from Volcanoes and [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]. ( [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonder Volcanoes do not count twice) [B]+25% [icon:YIELD_GOLD][/B] towards purchasing [icon:ACTION_IMPROVE] Repairs.",
      "lines": [
       "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Cultural and [icon:YIELD_PRODUCTION] Adjacency from Volcanoes and [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]. ( [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonder Volcanoes do not count twice) [B]+25% [icon:YIELD_GOLD][/B] towards purchasing [icon:ACTION_IMPROVE] Repairs."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA",
    "name": "Hugins Drekka",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/iceland_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_ICELAND_LANDNAMABOK"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Strandhögg",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can [icon:Action_Pillage] Pillage and Coastal Raid tiles within 2 tiles. Naval Units can disperse [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP] or [icon:Action_Pillage] Coastal Raid for [B]1 [icon:Action_Move] Movement[/B] when in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Does not apply to Discoveries.",
      "lines": [
       "[TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can [icon:Action_Pillage] Pillage and Coastal Raid tiles within 2 tiles. Naval Units can disperse [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP] or [icon:Action_Pillage] Coastal Raid for [B]1 [icon:Action_Move] Movement[/B] when in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Does not apply to Discoveries."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ICELAND_VAERINGJAR",
    "name": "Væringjar",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/iceland_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_ICELAND_LANDNAMABOK"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Lyfsteinn I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "+10 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
      "lines": [
       "+10 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_ICELAND_THJODVELDID",
    "name": "Þjóðveldið",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/iceland_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA",
     "NODE_CIVIC_EX_ICELAND_VAERINGJAR"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain [B]2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relics[/TIP].",
      "lines": [
       "Gain [B]2 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relics[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Reykjaholt",
      "icon": "images/civ-uniques/reykjaholt.png",
      "page": "",
      "tip": "+3 [icon:YIELD_CULTURE]. +25% [icon:YIELD_PRODUCTION] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in this [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] for every [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. Has 3 [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on Tundra.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_JOSEON": {
  "age": "Modern",
  "kind": "civic",
  "name": "Joseon Civics",
  "civ": "Joseon",
  "civType": "CIVILIZATION_JOSEON",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_JOSEON_IHAK",
    "name": "Seongnihak",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/joseon_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Confucian Academy",
      "icon": "images/civ-uniques/confucian_academy.png",
      "page": "",
      "tip": "Joseon [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9 [icon:YIELD_CULTURE] Culture. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for [icon:CITY_UNIMPROVED] Mountains and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but cannot be built in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "wonder",
      "name": "Hwaseong",
      "icon": "images/wonders/hwaseong.png",
      "page": "",
      "tip": "+4[icon:YIELD_CULTURE]. +1 [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] and [icon:NAR_REW_TRADITION_SLOT] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slot. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP] adjacent to [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]",
      "lines": [
       "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]"
      ]
     },
     {
      "kind": "tradition",
      "name": "Gwageo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_JOSEON_SEONBI",
    "name": "Seonbi",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/joseon_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Printing House",
      "icon": "images/civ-uniques/printing_house.png",
      "page": "",
      "tip": "Joseon [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Science Building[/TIP]. +9 [icon:YIELD_SCIENCE] Science. +1 [icon:YIELD_PRODUCTION] Production Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_QUARTERS_TOOLTIP]Quarters[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Can be purchased in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but cannot be built in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]",
      "lines": [
       "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]"
      ]
     },
     {
      "kind": "tradition",
      "name": "Silhak",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON",
    "name": "Gyeongguk Daejeon",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/joseon_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_JOSEON_IHAK",
     "NODE_CIVIC_MO_JOSEON_SEONBI"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Yangbeobmiui II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Seowon. [B]-10% [icon:YIELD_CULTURE][/B] in other [icon:YIELD_CITIES] Cities. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
      "lines": [
       "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Seowon. [B]-10% [icon:YIELD_CULTURE][/B] in other [icon:YIELD_CITIES] Cities. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_JOSEON_SAMGANG",
    "name": "Samgang",
    "cost": 4000,
    "col": 2,
    "icon": "images/civics/joseon_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON"
    ],
    "unlocks": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]",
      "lines": [
       "[B]+1 [TIP:LOC_PEDIA_CONCEPTS_PAGE_CITY_CAP_1_CHAPTER_CONTENT_PARA_1]City Limit[/TIP].[/B]"
      ]
     },
     {
      "kind": "tradition",
      "name": "Yangban Bureaucracy II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]3[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
      "lines": [
       "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]3[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_NEPAL": {
  "age": "Modern",
  "kind": "civic",
  "name": "Nepal Civics",
  "civ": "Nepal",
  "civType": "CIVILIZATION_NEPAL",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA",
    "name": "Jyumdo Bagha",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/nepal_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Tundikhel",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units adjacent to [icon:CITY_UNIMPROVED] Mountains. This is doubled if the Unit is also in your territory. Units complete [icon:Action_Fortify] Fortifications in 1 turn if adjacent to a [icon:CITY_UNIMPROVED] Mountain.",
      "lines": [
       "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units adjacent to [icon:CITY_UNIMPROVED] Mountains. This is doubled if the Unit is also in your territory. Units complete [icon:Action_Fortify] Fortifications in 1 turn if adjacent to a [icon:CITY_UNIMPROVED] Mountain."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR",
    "name": "Singha Durbar",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/nepal_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Boudhanath",
      "icon": "images/civ-uniques/boudhanath.png",
      "page": "",
      "tip": "+6 [icon:YIELD_DIPLOMACY]. +20 [icon:RELATIONSHIP] Relationship with all other Leaders. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be built in Grassland or Tropical adjacent to a Mountain.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_espionage.png",
      "tip": "Unlocks the [icon:DIPLOMATIC_ACTION] Gift Gurkha Action which grants a Gurkha Unit to another Civilization. Nepal receives a [B]+10 [icon:RELATIONSHIP][/B] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with them and [B]5 [icon:YIELD_CULTURE][/B] (Scales by Gamespeed) for the current [icon:RELATIONSHIP] Relationship Level with them. Can only be done with [icon:PLAYER_RELATIONSHIP_FRIENDLY] Friendly or [icon:PLAYER_RELATIONSHIP_HELPFUL] Helpful Civilizations.",
      "lines": [
       "Unlocks the [icon:DIPLOMATIC_ACTION] Gift Gurkha Action which grants a Gurkha Unit to another Civilization. Nepal receives a [B]+10 [icon:RELATIONSHIP][/B] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with them and [B]5 [icon:YIELD_CULTURE][/B] (Scales by Gamespeed) for the current [icon:RELATIONSHIP] Relationship Level with them. Can only be done with [icon:PLAYER_RELATIONSHIP_FRIENDLY] Friendly or [icon:PLAYER_RELATIONSHIP_HELPFUL] Helpful Civilizations."
      ]
     },
     {
      "kind": "tradition",
      "name": "Maitri Sandhi II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +20% otherwise.",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +20% otherwise."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
    "name": "Gorkhapatra",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/nepal_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA",
     "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Himāl II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "tradition",
      "name": "Sagarmatha",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] receive an Adjacency from [icon:CITY_UNIMPROVED] Mountains.",
      "lines": [
       "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] receive an Adjacency from [icon:CITY_UNIMPROVED] Mountains."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_OTTOMANS": {
  "age": "Modern",
  "kind": "civic",
  "name": "Ottoman Civics",
  "civ": "Ottomans",
  "civType": "CIVILIZATION_OTTOMANS",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU",
    "name": "Şahi Topu",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/ottomans_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Siege Train",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "When a unit destroys a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District's[/TIP] defenses, all other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] have their [icon:Action_Move] Movement restored.",
      "lines": [
       "When a unit destroys a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District's[/TIP] defenses, all other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] have their [icon:Action_Move] Movement restored."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_OTTOMANS_HARBIYE_NEZARETI",
    "name": "Harbiye Nezâreti",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/ottomans_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Erkân-ı Harbiye Mektebi",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. -2 [icon:YIELD_GOLD] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Gold Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP].",
      "lines": [
       "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. -2 [icon:YIELD_GOLD] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Gold Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI",
    "name": "Lâle Devri",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/ottomans_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Sedef Kakma II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+5 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+5 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
      "lines": [
       "[B]+5 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+5 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B]."
      ]
     },
     {
      "kind": "building",
      "name": "Hammam",
      "icon": "images/civ-uniques/hammam.png",
      "page": "",
      "tip": "Ottoman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9 [icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_GOLD] Gold Adjacency with Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and +1[icon:YIELD_HAPPINESS] Happiness Adjacency with [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "wonder",
      "name": "Sultanahmet Camii",
      "icon": "images/civ-uniques/sultanahmet_camii.png",
      "page": "",
      "tip": "+4 [icon:YIELD_HAPPINESS]. +2 [icon:YIELD_CULTURE] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. This is doubled for Exploration [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] and tripled for Antiquity [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be built adjacent to another [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonder[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     }
    ],
    "mastery": [
     {
      "kind": "building",
      "name": "Cami",
      "icon": "images/civ-uniques/cami.png",
      "page": "",
      "tip": "Ottoman [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +9 [icon:YIELD_CULTURE] Culture. +1[icon:YIELD_HAPPINESS] Happiness Adjacency with Science [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and +1[icon:YIELD_CULTURE] Culture Adjacency with [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Has 2 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] slots.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+2 Tradition slots.",
      "lines": [
       "+2 Tradition slots."
      ]
     }
    ],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_OTTOMANS_TANZIMAT",
    "name": "Tanẓîmât",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/ottomans_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Osmanlı Barok II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+3 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing Museums.",
      "lines": [
       "[B]+3 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing Museums."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP].",
      "lines": [
       "Gain [B]1 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_PIRATE_REPUBLIC": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Pirate Civics",
  "civ": "Republic of Pirates",
  "civType": "CIVILIZATION_PIRATE_REPUBLIC",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT",
    "name": "Articles of Agreement",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/republic_of_pirates_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Naval Station",
      "icon": "images/civ-uniques/naval_station.png",
      "page": "",
      "tip": "Republic of Pirates [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Production Building[/TIP]. +5[icon:YIELD_PRODUCTION] Production. +1[icon:YIELD_PRODUCTION] Production Adjacency for Military [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be placed on Coast. Has no [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Press Gangs I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
      "lines": [
       "[B]+100% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL",
    "name": "Ports of Call",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/republic_of_pirates_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT"
    ],
    "unlocks": [
     {
      "kind": "building",
      "name": "Naval Arsenal",
      "icon": "images/civ-uniques/naval_arsenal.png",
      "page": "",
      "tip": "Republic of Pirates [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Gold Building[/TIP]. +4[icon:YIELD_GOLD] Gold. +1[icon:YIELD_GOLD] Gold Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. Must be placed on Coast.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Merry Life and a Short One",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "When you defeat a [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP], gain [icon:YIELD_GOLD] equal to the Unit’s [icon:YIELD_PRODUCTION] cost. When you defeat a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP], gain [icon:YIELD_GOLD] equal to 25% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
      "lines": [
       "When you defeat a [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP], gain [icon:YIELD_GOLD] equal to the Unit’s [icon:YIELD_PRODUCTION] cost. When you defeat a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP], gain [icon:YIELD_GOLD] equal to 25% of the Unit’s [icon:YIELD_PRODUCTION] cost."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "wonder",
      "name": "Havana Harbor",
      "icon": "images/wonders/havana_harbor.png",
      "page": "",
      "tip": "+3 [icon:YIELD_GOLD]. This [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] generates [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP] worth 3 Cargo in the [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Exploration Age[/TIP]. +1 [icon:ATTRIBUTE_ECONOMIC] Economic [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be built in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP] Coast adjacent to Land that is not a Lake.",
      "yields": [],
      "adj": [],
      "lines": []
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
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ENEMY_OF_ALL_NATIONS",
    "name": "Enemy of All Nations",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/republic_of_pirates_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Black Flag II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +100% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] and Naval Units gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] on Atolls.",
      "lines": [
       "[B]+100 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +100% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] and Naval Units gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] on Atolls."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_unitupgrade.png",
      "tip": "[B]+15 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] against [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP].",
      "lines": [
       "[B]+15 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] against [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]."
      ]
     }
    ],
    "mastery": [
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "+2 Cargo from captured [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP].",
      "lines": [
       "+2 Cargo from captured [icon:UNIT_TREASURE_FLEET] [TIP:LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP]Treasure Convoys[/TIP]."
      ]
     }
    ],
    "uniques": []
   }
  ]
 },
 "CIVICS_MODERN_QAJAR": {
  "age": "Modern",
  "kind": "civic",
  "name": "Qajar Civics",
  "civ": "Qajar",
  "civType": "CIVILIZATION_QAJAR",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE",
    "name": "The Sun Throne",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/qajar_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Eram Garden",
      "icon": "images/civ-uniques/eram_garden.png",
      "page": "",
      "tip": "+4 [icon:YIELD_FOOD]. +1 [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be built in Desert Terrain.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "building",
      "name": "Takyeh",
      "icon": "images/civ-uniques/takyeh.png",
      "page": "",
      "tip": "Qajar [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +9[icon:YIELD_HAPPINESS] Happiness. +1 [icon:YIELD_DIPLOMACY] Influence Adjacency for Culture [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Soleymaniyeh Palace II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+0.5 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
      "lines": [
       "[B]+0.5 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_QAJAR_TWELVE_GATES",
    "name": "Twelve Gates",
    "cost": 2000,
    "col": 0,
    "icon": "images/civics/qajar_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Ghahve Khane",
      "icon": "images/civ-uniques/ghahve_khane.png",
      "page": "",
      "tip": "Qajar [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Food Building[/TIP]. +9 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_HAPPINESS] Happiness Adjacency for Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Dār al-Fonūn II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10 [icon:YIELD_SCIENCE][/B] and [icon:YIELD_CULTURE] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "[B]+10 [icon:YIELD_SCIENCE][/B] and [icon:YIELD_CULTURE] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_MO_QAJAR_NEZAM_E_JADID",
    "name": "Neẓām-e J̌adīd",
    "cost": 3000,
    "col": 1,
    "icon": "images/civics/qajar_civics.png",
    "prereqs": [
     "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE",
     "NODE_CIVIC_MO_QAJAR_TWELVE_GATES"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Qullarāqāsi",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] for every [B]2[/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] for every [B]2[/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_SENGOKU": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Sengoku Civics",
  "civ": "Sengoku Japan",
  "civType": "CIVILIZATION_SENGOKU",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_SENGOKU_TENKA_BITO",
    "name": "Tenka Bito",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/sengoku_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "improvement",
      "name": "Tea House",
      "icon": "images/civ-uniques/tea_house.png",
      "page": "",
      "tip": "Sengoku [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +2 [icon:YIELD_FOOD] [b]Food[/b] and +2 [icon:YIELD_HAPPINESS] [b]Happiness[/b]. +1 [icon:YIELD_CULTURE] [b]Culture[/b] for each adjacent [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Does not remove [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] bonuses on a tile. Must be placed on an existing [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvement[/TIP] not adjacent to another Tea House and on [TIP:LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP]Flat Terrain[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SENGOKU_IKKI",
    "name": "Ikki",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/sengoku_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Himeji Castle",
      "icon": "images/civ-uniques/himeji_castle.png",
      "page": "",
      "tip": "+4 [icon:YIELD_CULTURE] on [icon:Action_Fortify] Fortifications in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. +5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] in all Settlements. Acts as a [icon:CITY_FORTIFIED] Fortified District that must be conquered. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Gekokujo II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
      "lines": [
       "[B]+100% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA",
    "name": "Rakuichi-Rakuza",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/sengoku_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Kabunakama I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SENGOKU_KINSEI",
    "name": "Kinsei",
    "cost": 2000,
    "col": 1,
    "icon": "images/civics/sengoku_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SENGOKU_TENKA_BITO",
     "NODE_CIVIC_EX_SENGOKU_IKKI",
     "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Daimyo",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "Land [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] fight as though they were at full [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] even when [icon:DAMAGED] Damaged.",
      "lines": [
       "Land [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] fight as though they were at full [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] even when [icon:DAMAGED] Damaged."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_generic.png",
      "tip": "Newly trained Samurai are Tier 2.",
      "lines": [
       "Newly trained Samurai are Tier 2."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_settlementlimit.png",
      "tip": "+2 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
      "lines": [
       "+2 [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_EXPLORATION_SHAWNEE": {
  "age": "Exploration",
  "kind": "civic",
  "name": "Shawnee Civics",
  "civ": "Shawnee",
  "civType": "CIVILIZATION_SHAWNEE",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI",
    "name": "Wiyehi Simekofi",
    "cost": 800,
    "col": 0,
    "icon": "images/civics/shawnee_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "wonder",
      "name": "Serpent Mound",
      "icon": "images/civ-uniques/serpent_mound.png",
      "page": "",
      "tip": "+4 [icon:YIELD_DIPLOMACY]. +3 [icon:YIELD_SCIENCE] and +2 [icon:YIELD_PRODUCTION] on all [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed in Grassland.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "improvement",
      "name": "Mawaskawe Skote",
      "icon": "images/civ-uniques/mawaskawe_skote.png",
      "page": "",
      "tip": "Shawnee [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvement[/TIP]. +4 [icon:YIELD_FOOD] Food. +1 [icon:YIELD_GOLD] Gold for each adjacent [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. Must be placed on [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP], and cannot be placed adjacent to another Mawaskawe Skote.",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Bread Dance I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+4 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+4 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
      "lines": [
       "[B]+4 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+4 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI",
    "name": "Miyaska Latoweki",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/shawnee_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Niwiitikeemekonaaki I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
      "lines": [
       "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
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
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SHAWNEE_TELWATIKI",
    "name": "Telwatiki",
    "cost": 1200,
    "col": 1,
    "icon": "images/civics/shawnee_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Helikhilenawewipe II",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
      "lines": [
       "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_EX_SHAWNEE_MALEKI_KINTAKE",
    "name": "Maleki Kintake",
    "cost": 2000,
    "col": 2,
    "icon": "images/civics/shawnee_civics.png",
    "prereqs": [
     "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI",
     "NODE_CIVIC_EX_SHAWNEE_TELWATIKI"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Takesiyake Yepepoki",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Tundra, Desert, and Plains Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. These numbers are doubled if the tile is also [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] Terrain.",
      "lines": [
       "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Tundra, Desert, and Plains Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. These numbers are doubled if the tile is also [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] Terrain."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_SILLA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Silla Civics",
  "civ": "Silla",
  "civType": "CIVILIZATION_SILLA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_SILLA_KOLP_UM",
    "name": "Kolp'um",
    "cost": 108,
    "col": 0,
    "icon": "images/civics/silla_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Beopseong I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP].",
      "lines": [
       "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP]."
      ]
     },
     {
      "kind": "building",
      "name": "Pagoda",
      "icon": "images/civ-uniques/pagoda.png",
      "page": "",
      "tip": "Silla [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3 [icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_DIPLOMACY] Influence Adjacency for Natural Wonders, Mountains, and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "building",
      "name": "Lecture Hall",
      "icon": "images/civ-uniques/lecture_hall.png",
      "page": "",
      "tip": "Silla [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3 [icon:YIELD_CULTURE] Culture. +1[icon:YIELD_CULTURE] Culture Adjacency for [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. +1 [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in this [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] if placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SILLA_SAMGUK_SAGI",
    "name": "Samguk Sagi",
    "cost": 120,
    "col": 1,
    "icon": "images/civics/silla_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_SILLA_KOLP_UM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Strategic Allies",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_FOOD] and [icon:YIELD_PRODUCTION] to both players equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
      "lines": [
       "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_FOOD] and [icon:YIELD_PRODUCTION] to both players equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP]."
      ]
     },
     {
      "kind": "wonder",
      "name": "Emile Bell",
      "icon": "images/wonders/emile_bell.png",
      "page": "Emile Bell",
      "tip": "[B]+2 [icon:YIELD_DIPLOMACY][/B]. Gain a unique [icon:ENDEAVOR] Diplomatic [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] called Ginseng Agreement that grants [icon:YIELD_FOOD] to both Leaders' [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_POLITICAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] Point. [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP]. Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP].",
      "yields": [
       {
        "y": "YIELD_DIPLOMACY",
        "n": "Influence",
        "v": "2"
       }
      ],
      "adj": [],
      "lines": [
       "Gain a unique [icon:ENDEAVOR] Diplomatic [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] called Ginseng Agreement that grants [icon:YIELD_FOOD] to both Leaders' [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+1 [icon:ATTRIBUTE_POLITICAL][/B] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] Point.",
       "Must be placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SILLA_SEONGGOL",
    "name": "Seonggol",
    "cost": 120,
    "col": 1,
    "icon": "images/civics/silla_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_SILLA_KOLP_UM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "The Golden Road I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players equal to 50% of the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
      "lines": [
       "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players equal to 50% of the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP]."
      ]
     },
     {
      "kind": "unit",
      "name": "Sangdaedeung",
      "icon": "images/civ-uniques/sangdaedeung.png",
      "page": "Sangdaedeung",
      "tip": "Silla Unique Merchant. When you create a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP], gain +5 [icon:YIELD_GOLD] Gold for the current Relationship Level with the Leader (On Standard Speed), does not apply to [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP]. Minimum 5 [icon:YIELD_GOLD] Gold.",
      "lines": [
       "Silla Unique Merchant. When you create a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP], gain +5 [icon:YIELD_GOLD] Gold for the current Relationship Level with the Leader (On Standard Speed), does not apply to [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP]. Minimum 5 [icon:YIELD_GOLD] Gold."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_SILLA_JINGOL",
    "name": "Jingol",
    "cost": 120,
    "col": 1,
    "icon": "images/civics/silla_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_SILLA_KOLP_UM"
    ],
    "unlocks": [
     {
      "kind": "tradition",
      "name": "Seorabeol I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 },
 "CIVICS_ANTIQUITY_TONGA": {
  "age": "Antiquity",
  "kind": "civic",
  "name": "Tongan Civics",
  "civ": "Tonga",
  "civType": "CIVILIZATION_TONGA",
  "branch": false,
  "nodes": [
   {
    "id": "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS",
    "name": "Lapita Origins",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/tonga_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Vaikaukau",
      "icon": "images/civ-uniques/vaikaukau.png",
      "page": "",
      "tip": "Tongan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Happiness Building[/TIP]. +3[icon:YIELD_HAPPINESS] Happiness. +1[icon:YIELD_CULTURE] Culture Adjacency for Coast and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
     },
     {
      "kind": "tradition",
      "name": "Takuaka",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Fishing Boats in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on Fishing Boats on Reefs in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
      "lines": [
       "[B]+1 [icon:YIELD_PRODUCTION][/B] on Fishing Boats in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on Fishing Boats on Reefs in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
      ]
     },
     {
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA",
    "name": "ʻEsi Maka Faakinanga",
    "cost": 150,
    "col": 0,
    "icon": "images/civics/tonga_civics.png",
    "prereqs": [],
    "unlocks": [
     {
      "kind": "building",
      "name": "Langi",
      "icon": "images/civ-uniques/langi.png",
      "page": "",
      "tip": "Tongan [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP]Unique Culture Building[/TIP]. +3[icon:YIELD_CULTURE] Culture. +1[icon:YIELD_FOOD] Food Adjacency for [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
      "yields": [],
      "adj": [],
      "lines": []
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
      "kind": "tradition",
      "name": "Tongiaki I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP].",
      "lines": [
       "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   },
   {
    "id": "NODE_CIVIC_AQ_TONGA_KAVA_CEREMONY",
    "name": "Kava Ceremony",
    "cost": 250,
    "col": 1,
    "icon": "images/civics/tonga_civics.png",
    "prereqs": [
     "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA",
     "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS"
    ],
    "unlocks": [
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
      "kind": "effect",
      "name": "",
      "icon": "images/tech-badges/unlock_traditionslot.png",
      "tip": "+1 Tradition slot.",
      "lines": [
       "+1 Tradition slot."
      ]
     },
     {
      "kind": "tradition",
      "name": "Ngatu I",
      "icon": "images/tech-badges/unlock_tradition.png",
      "tip": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
      "lines": [
       "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
      ]
     }
    ],
    "mastery": [],
    "uniques": []
   }
  ]
 }
};
window.CIVPEDIA_CIVIC_TREE_INDEX = {
 "ANTIQUITY": {
  "main": "CIVICS_ANTIQUITY_MAIN",
  "branches": [],
  "civs": [
   {
    "key": "CIVICS_ANTIQUITY_PERSIA",
    "civ": "Achaemenid Persia",
    "civType": "CIVILIZATION_PERSIA",
    "name": "Achaemenid Persian Civic"
   },
   {
    "key": "CIVICS_ANTIQUITY_AKSUM",
    "civ": "Aksum",
    "civType": "CIVILIZATION_AKSUM",
    "name": "Aksumite Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_ASSYRIA",
    "civ": "Assyria",
    "civType": "CIVILIZATION_ASSYRIA",
    "name": "Assyrian Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_CARTHAGE",
    "civ": "Carthage",
    "civType": "CIVILIZATION_CARTHAGE",
    "name": "Carthage Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_EGYPT",
    "civ": "Egypt",
    "civType": "CIVILIZATION_EGYPT",
    "name": "Egyptian Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_GREECE",
    "civ": "Greece",
    "civType": "CIVILIZATION_GREECE",
    "name": "Greek Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_HAN",
    "civ": "Han",
    "civType": "CIVILIZATION_HAN",
    "name": "Han Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_HEIAN",
    "civ": "Heian Japan",
    "civType": "CIVILIZATION_HEIAN",
    "name": "Heian Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_KHMER",
    "civ": "Khmer",
    "civType": "CIVILIZATION_KHMER",
    "name": "Khmer Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_MAURYA",
    "civ": "Maurya",
    "civType": "CIVILIZATION_MAURYA",
    "name": "Mauryan Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_MAYA",
    "civ": "Maya",
    "civType": "CIVILIZATION_MAYA",
    "name": "Maya Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_MISSISSIPPIAN",
    "civ": "Mississippian",
    "civType": "CIVILIZATION_MISSISSIPPIAN",
    "name": "Mississippian Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_ROME",
    "civ": "Rome",
    "civType": "CIVILIZATION_ROME",
    "name": "Roman Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_SILLA",
    "civ": "Silla",
    "civType": "CIVILIZATION_SILLA",
    "name": "Silla Civics"
   },
   {
    "key": "CIVICS_ANTIQUITY_TONGA",
    "civ": "Tonga",
    "civType": "CIVILIZATION_TONGA",
    "name": "Tongan Civics"
   }
  ],
  "tot": "CIVICS_ANTIQUITY_TEST_OF_TIME"
 },
 "EXPLORATION": {
  "main": "CIVICS_EXPLORATION_MAIN",
  "branches": [
   "CIVICS_EXPLORATION_BRANCH_THEOLOGY"
  ],
  "civs": [
   {
    "key": "CIVICS_EXPLORATION_ABBASID",
    "civ": "Abbasid",
    "civType": "CIVILIZATION_ABBASID",
    "name": "Abbasid Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_BULGARIA",
    "civ": "Bulgaria",
    "civType": "CIVILIZATION_BULGARIA",
    "name": "Bulgaria Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_CHOLA",
    "civ": "Chola",
    "civType": "CIVILIZATION_CHOLA",
    "name": "Chola Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_GORYEO",
    "civ": "Goryeo",
    "civType": "CIVILIZATION_GORYEO",
    "name": "Goryeo Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_HAWAII",
    "civ": "Hawai'i",
    "civType": "CIVILIZATION_HAWAII",
    "name": "Hawai'i Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_ICELAND",
    "civ": "Iceland",
    "civType": "CIVILIZATION_ICELAND",
    "name": "Iceland Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_INCA",
    "civ": "Inca",
    "civType": "CIVILIZATION_INCA",
    "name": "Incan Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_MAJAPAHIT",
    "civ": "Majapahit",
    "civType": "CIVILIZATION_MAJAPAHIT",
    "name": "Majapahit Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_MING",
    "civ": "Ming",
    "civType": "CIVILIZATION_MING",
    "name": "Ming Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_MONGOLIA",
    "civ": "Mongolia",
    "civType": "CIVILIZATION_MONGOLIA",
    "name": "Mongolian Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_NORMAN",
    "civ": "Norman",
    "civType": "CIVILIZATION_NORMAN",
    "name": "Norman Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_PIRATE_REPUBLIC",
    "civ": "Republic of Pirates",
    "civType": "CIVILIZATION_PIRATE_REPUBLIC",
    "name": "Pirate Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_SENGOKU",
    "civ": "Sengoku Japan",
    "civType": "CIVILIZATION_SENGOKU",
    "name": "Sengoku Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_SHAWNEE",
    "civ": "Shawnee",
    "civType": "CIVILIZATION_SHAWNEE",
    "name": "Shawnee Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_SONGHAI",
    "civ": "Songhai",
    "civType": "CIVILIZATION_SONGHAI",
    "name": "Songhai Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_SPAIN",
    "civ": "Spain",
    "civType": "CIVILIZATION_SPAIN",
    "name": "Spanish Civics"
   },
   {
    "key": "CIVICS_EXPLORATION_DAI_VIET",
    "civ": "Đại Việt",
    "civType": "CIVILIZATION_DAI_VIET",
    "name": "Đại Việt Civics"
   }
  ],
  "tot": "CIVICS_EXPLORATION_TEST_OF_TIME"
 },
 "MODERN": {
  "main": "CIVICS_MODERN_MAIN",
  "branches": [
   "CIVICS_MODERN_BRANCH_DEMOCRACY",
   "CIVICS_MODERN_BRANCH_FASCISM",
   "CIVICS_MODERN_BRANCH_COMMUNISM"
  ],
  "civs": [
   {
    "key": "CIVICS_MODERN_AMERICA",
    "civ": "America",
    "civType": "CIVILIZATION_AMERICA",
    "name": "American Civics"
   },
   {
    "key": "CIVICS_MODERN_BUGANDA",
    "civ": "Buganda",
    "civType": "CIVILIZATION_BUGANDA",
    "name": "Buganda Civics"
   },
   {
    "key": "CIVICS_MODERN_FRENCH_EMPIRE",
    "civ": "French Empire",
    "civType": "CIVILIZATION_FRENCH_EMPIRE",
    "name": "French Civics"
   },
   {
    "key": "CIVICS_MODERN_GREAT_BRITAIN",
    "civ": "Great Britain",
    "civType": "CIVILIZATION_GREAT_BRITAIN",
    "name": "Great Britain Civics"
   },
   {
    "key": "CIVICS_MODERN_JOSEON",
    "civ": "Joseon",
    "civType": "CIVILIZATION_JOSEON",
    "name": "Joseon Civics"
   },
   {
    "key": "CIVICS_MODERN_MEIJI",
    "civ": "Meiji Japan",
    "civType": "CIVILIZATION_MEIJI",
    "name": "Meiji Civics"
   },
   {
    "key": "CIVICS_MODERN_MEXICO",
    "civ": "Mexico",
    "civType": "CIVILIZATION_MEXICO",
    "name": "Mexico Civics"
   },
   {
    "key": "CIVICS_MODERN_MUGHAL",
    "civ": "Mughal",
    "civType": "CIVILIZATION_MUGHAL",
    "name": "Mughal Civics"
   },
   {
    "key": "CIVICS_MODERN_NEPAL",
    "civ": "Nepal",
    "civType": "CIVILIZATION_NEPAL",
    "name": "Nepal Civics"
   },
   {
    "key": "CIVICS_MODERN_OTTOMANS",
    "civ": "Ottomans",
    "civType": "CIVILIZATION_OTTOMANS",
    "name": "Ottoman Civics"
   },
   {
    "key": "CIVICS_MODERN_PRUSSIA",
    "civ": "Prussia",
    "civType": "CIVILIZATION_PRUSSIA",
    "name": "Prussian Civics"
   },
   {
    "key": "CIVICS_MODERN_QAJAR",
    "civ": "Qajar",
    "civType": "CIVILIZATION_QAJAR",
    "name": "Qajar Civics"
   },
   {
    "key": "CIVICS_MODERN_QING",
    "civ": "Qing",
    "civType": "CIVILIZATION_QING",
    "name": "Qing Civics"
   },
   {
    "key": "CIVICS_MODERN_RUSSIA",
    "civ": "Russia",
    "civType": "CIVILIZATION_RUSSIA",
    "name": "Russian Civics"
   },
   {
    "key": "CIVICS_MODERN_SIAM",
    "civ": "Siam",
    "civType": "CIVILIZATION_SIAM",
    "name": "Siam Civics"
   }
  ],
  "tot": "CIVICS_MODERN_TEST_OF_TIME"
 }
};

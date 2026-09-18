// What a Test of Time civic unlocks, for its page, where the civics tree
// data has nothing to show (DLC civs' civics; the Attribute civics).
// Built from the game's ProgressionTreeNodeUnlocks by
// tools/build_civic_page_unlocks.py.
window.CIVPEDIA_CIVIC_PAGE_UNLOCKS = {
 "NODE_CIVIC_AQ_FOUNDATION": [
  {
   "label": "Cultural civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Enlightened Rule",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
     "lines": [
      "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
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
    }
   ]
  },
  {
   "label": "Diplomatic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Priestly Class",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
     "lines": [
      "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]."
     ]
    },
    {
     "kind": "tradition",
     "name": "Emissaries",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported.",
     "lines": [
      "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported."
     ]
    }
   ]
  },
  {
   "label": "Economic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Merchant Class",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP].",
     "lines": [
      "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP]."
     ]
    }
   ]
  },
  {
   "label": "Expansionist civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Fractal Cities",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP].",
     "lines": [
      "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]."
     ]
    },
    {
     "kind": "effect",
     "name": "",
     "icon": "images/tech-badges/unlock_specialistcap.png",
     "tip": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     ]
    }
   ]
  },
  {
   "label": "Militaristic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Warrior Class",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders.",
     "lines": [
      "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders."
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
    }
   ]
  },
  {
   "label": "Scientific civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Experimentation",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_BULGARIA_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Stratagems I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
     "lines": [
      "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_DAI_VIET_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Cấm Binh I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
     "lines": [
      "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_GORYEO_FOUNDATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Hoguk Jonggyo I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
     "lines": [
      "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "East India Company I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
     "lines": [
      "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_ICELAND_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Dróttkvætt I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
     "lines": [
      "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_JOSEON_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Yangbeobmiui I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
     "lines": [
      "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus."
     ]
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
     "kind": "effect",
     "name": "",
     "icon": "images/tech-badges/unlock_traditionslot.png",
     "tip": "+1 Tradition slot.",
     "lines": [
      "+1 Tradition slot."
     ]
    }
   ]
  }
 ],
 "NODE_CIVIC_AQ_NEPAL_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Himāl I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
     "lines": [
      "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_OTTOMANS_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Sedef Kakma I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
     "lines": [
      "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Black Flag I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
     "lines": [
      "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]."
     ]
    },
    {
     "kind": "effect",
     "name": "",
     "icon": "images/tech-badges/unlock_generic.png",
     "tip": "Gain [B]1 [icon:UNIT_SETTLER] Settler[/B] for free.",
     "lines": [
      "Gain [B]1 [icon:UNIT_SETTLER] Settler[/B] for free."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_QAJAR_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Dār al-Fonūn I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
     "lines": [
      "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_SENGOKU_FOUNDATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Gekokujo I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
     "lines": [
      "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_AQ_SHAWNEE_ORIGINS": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Helikhilenawewipe I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
     "lines": [
      "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_HIERARCHY": [
  {
   "label": "Cultural civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Classical Revival",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
     "lines": [
      "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]."
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
    }
   ]
  },
  {
   "label": "Diplomatic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Jubilee",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
     "lines": [
      "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]."
     ]
    },
    {
     "kind": "tradition",
     "name": "Spy Network",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started.",
     "lines": [
      "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started."
     ]
    }
   ]
  },
  {
   "label": "Economic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Supply and Demand",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have.",
     "lines": [
      "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have."
     ]
    }
   ]
  },
  {
   "label": "Expansionist civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Municipal Charters",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
     "lines": [
      "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]."
     ]
    },
    {
     "kind": "effect",
     "name": "",
     "icon": "images/tech-badges/unlock_specialistcap.png",
     "tip": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     ]
    },
    {
     "kind": "tradition",
     "name": "Yanakuna",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
     "lines": [
      "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP]."
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
   ]
  },
  {
   "label": "Militaristic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Professional Army",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
     "lines": [
      "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]."
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
   ]
  },
  {
   "label": "Scientific civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Alchemy",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost.",
     "lines": [
      "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost."
     ]
    }
   ]
  },
  {
   "label": "Buganda",
   "rows": [
    {
     "kind": "tradition",
     "name": "Clan Society I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
     "lines": [
      "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles."
     ]
    }
   ]
  },
  {
   "label": "Joseon",
   "rows": [
    {
     "kind": "tradition",
     "name": "Gwageo I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists.",
     "lines": [
      "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists."
     ]
    }
   ]
  }
 ],
 "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE": [
  {
   "label": "",
   "rows": [
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
     "name": "Miḫiṣtu II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works.",
     "lines": [
      "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works."
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
     "name": "Girru II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Quinquereme II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
     "lines": [
      "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "No Eternal Allies I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
     "lines": [
      "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_HEIAN_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Jo-bo System II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
     "lines": [
      "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_JOSEON_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Yangban Bureaucracy I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
     "lines": [
      "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_NEPAL_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Maitri Sandhi I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise.",
     "lines": [
      "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Osmanlı Barok I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
     "lines": [
      "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_QAJAR_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Soleymaniyeh Palace I",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
     "lines": [
      "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_SILLA_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Seorabeol II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
     "lines": [
      "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_EX_TONGA_RENAISSANCE": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Tongiaki II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
     "lines": [
      "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_ADMINISTRATION": [
  {
   "label": "Cultural civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Romanticism",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain.",
     "lines": [
      "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain."
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
    }
   ]
  },
  {
   "label": "Diplomatic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Vaudeville",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
     "lines": [
      "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]."
     ]
    },
    {
     "kind": "tradition",
     "name": "The Great Game",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started.",
     "lines": [
      "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started."
     ]
    }
   ]
  },
  {
   "label": "Economic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Gold Standard",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
     "lines": [
      "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]."
     ]
    }
   ]
  },
  {
   "label": "Expansionist civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Developmentalism",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
     "lines": [
      "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP]."
     ]
    },
    {
     "kind": "effect",
     "name": "",
     "icon": "images/tech-badges/unlock_specialistcap.png",
     "tip": "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     ]
    },
    {
     "kind": "tradition",
     "name": "Industrial Agriculture",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
     "lines": [
      "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP]."
     ]
    }
   ]
  },
  {
   "label": "Militaristic civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Force Structuring",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP].",
     "lines": [
      "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP]."
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
    }
   ]
  },
  {
   "label": "Scientific civilizations",
   "rows": [
    {
     "kind": "tradition",
     "name": "Location Theory",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
     "lines": [
      "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]."
     ]
    }
   ]
  },
  {
   "label": "Songhai",
   "rows": [
    {
     "kind": "tradition",
     "name": "Mud Brick II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
     "lines": [
      "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts."
     ]
    }
   ]
  },
  {
   "label": "Shawnee",
   "rows": [
    {
     "kind": "tradition",
     "name": "Bread Dance II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
     "lines": [
      "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns."
     ]
    }
   ]
  },
  {
   "label": "Silla",
   "rows": [
    {
     "kind": "tradition",
     "name": "Beopseong II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
     "lines": [
      "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]."
     ]
    }
   ]
  }
 ],
 "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Dūrāni II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age.",
     "lines": [
      "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_BULGARIA_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Iconolatry II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted.",
     "lines": [
      "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Gaulos II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
     "lines": [
      "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Ruộng Làng Xã II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
     "lines": [
      "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_GORYEO_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Bongwan II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
     "lines": [
      "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_HEIAN_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Insei II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
     "lines": [
      "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_ICELAND_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Lyfsteinn II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
     "lines": [
      "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Press Gangs II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
     "lines": [
      "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_SENGOKU_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Kabunakama II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
     "lines": [
      "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Niwiitikeemekonaaki II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
     "lines": [
      "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_SILLA_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "The Golden Road II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
     "lines": [
      "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP]."
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
   ]
  }
 ],
 "NODE_CIVIC_MO_TONGA_MODERNIZATION": [
  {
   "label": "",
   "rows": [
    {
     "kind": "tradition",
     "name": "Ngatu II",
     "icon": "images/tech-badges/unlock_tradition.png",
     "tip": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands.",
     "lines": [
      "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands."
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
   ]
  }
 ]
};

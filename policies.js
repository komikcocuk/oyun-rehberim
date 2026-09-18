// Every Social Policy, Crisis Policy and Tradition in the game (the Traditions
// table, Base and DLC) with what unlocks it -- tools/build_policies.py.
window.CIVPEDIA_POLICIES = {
 "byName": {
  "Enlightened Rule": {
   "id": "TRADITION_AQ_ATTRIBUTE_CULTURAL_01",
   "name": "Enlightened Rule",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Priestly Class": {
   "id": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Priestly Class",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Emissaries": {
   "id": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "Emissaries",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Merchant Class": {
   "id": "TRADITION_AQ_ATTRIBUTE_ECONOMIC_01",
   "name": "Merchant Class",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Fractal Cities": {
   "id": "TRADITION_AQ_ATTRIBUTE_EXPANSIONIST_01",
   "name": "Fractal Cities",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Warrior Class": {
   "id": "TRADITION_AQ_ATTRIBUTE_MILITARISTIC_01",
   "name": "Warrior Class",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Experimentation": {
   "id": "TRADITION_AQ_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Experimentation",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Port of Nations I": {
   "id": "TRADITION_PORT_OF_NATIONS_I",
   "name": "Port of Nations I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+100% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Periplus of the Erythraean Sea",
     "civicId": "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Port of Nations II": {
   "id": "TRADITION_PORT_OF_NATIONS_II",
   "name": "Port of Nations II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+200% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "Port of Nations I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Aksumite Modernization",
     "civicId": "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Throne Of My Fathers": {
   "id": "TRADITION_THRONE_OF_MY_FATHERS",
   "name": "Throne Of My Fathers",
   "text": "[B]+15% [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast. Gain [icon:YIELD_CULTURE] equal to 25% of your [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Monumentum Adulitanum",
     "civicId": "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "May This Please The People I": {
   "id": "TRADITION_MAY_THIS_PLEASE_THE_PEOPLE_I",
   "name": "May This Please The People I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Book of the Himyarites",
     "civicId": "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "May This Please The People II": {
   "id": "TRADITION_MAY_THIS_PLEASE_THE_PEOPLE_II",
   "name": "May This Please The People II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "May This Please The People I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Aksumite Renaissance",
     "civicId": "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Incense Road I": {
   "id": "TRADITION_AKSUM_SYNCRETISM_EXPLORATION",
   "name": "Incense Road I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Incense Road II": {
   "id": "TRADITION_AKSUM_SYNCRETISM_MODERN",
   "name": "Incense Road II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "Incense Road I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Akhet I": {
   "id": "TRADITION_AKHET_I",
   "name": "Akhet I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Arrival of Hapi",
     "civicId": "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Akhet II": {
   "id": "TRADITION_AKHET_II",
   "name": "Akhet II",
   "text": "[B]+3 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Akhet I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Egyptian Renaissance",
     "civicId": "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Riches of the Duat": {
   "id": "TRADITION_RICHES_OF_THE_DUAT",
   "name": "Riches of the Duat",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled when constructed in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with [icon:YIELD_CITIES] City Centers in Desert Terrain. [B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:WONDER] Wonders on Desert.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Scales of Anubis",
     "civicId": "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kemet I": {
   "id": "TRADITION_KEMET_I",
   "name": "Kemet I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Light of Amun-Ra",
     "civicId": "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kemet II": {
   "id": "TRADITION_KEMET_II",
   "name": "Kemet II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Kemet I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Egyptian Modernization",
     "civicId": "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Golden Horus I": {
   "id": "TRADITION_EGYPT_SYNCRETISM_EXPLORATION",
   "name": "Golden Horus I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Golden Horus II": {
   "id": "TRADITION_EGYPT_SYNCRETISM_MODERN",
   "name": "Golden Horus II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Golden Horus I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Xenia I": {
   "id": "TRADITION_XENIA_I",
   "name": "Xenia I",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ekklesia",
     "civicId": "NODE_CIVIC_AQ_GREECE_EKKLESIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Xenia II": {
   "id": "TRADITION_XENIA_II",
   "name": "Xenia II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Xenia I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Greek Modernization",
     "civicId": "NODE_CIVIC_MO_GREECE_MODERNIZATION",
     "icon": "images/civics/greek_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Strategoi": {
   "id": "TRADITION_STRATEGOI",
   "name": "Strategoi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Agoge",
     "civicId": "NODE_CIVIC_AQ_GREECE_AGOGE",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Delian League I": {
   "id": "TRADITION_DELIAN_LEAGUE_I",
   "name": "Delian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Symmachia",
     "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Delian League II": {
   "id": "TRADITION_DELIAN_LEAGUE_II",
   "name": "Delian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and supporting [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Delian League I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Greek Renaissance",
     "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "icon": "images/civics/greek_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Peloponnesian League I": {
   "id": "TRADITION_PELOPONNESIAN_LEAGUE_I",
   "name": "Peloponnesian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Symmachia",
     "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Peloponnesian League II": {
   "id": "TRADITION_PELOPONNESIAN_LEAGUE_II",
   "name": "Peloponnesian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] and [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Peloponnesian League I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Greek Renaissance",
     "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "icon": "images/civics/greek_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hellenism I": {
   "id": "TRADITION_GREECE_SYNCRETISM_EXPLORATION",
   "name": "Hellenism I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Hellenism II": {
   "id": "TRADITION_GREECE_SYNCRETISM_MODERN",
   "name": "Hellenism II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Hellenism I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Fenghuo I": {
   "id": "TRADITION_FENGHUO",
   "name": "Fenghuo I",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Yi",
     "civicId": "NODE_CIVIC_AQ_HAN_YI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Fenghuo II": {
   "id": "TRADITION_FENGHUO_II",
   "name": "Fenghuo II",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Fenghuo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Han Renaissance",
     "civicId": "NODE_CIVIC_EX_HAN_RENAISSANCE",
     "icon": "images/civics/han_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Xumin Zhao": {
   "id": "TRADITION_XUMIN_ZHAO",
   "name": "Xumin Zhao",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ren",
     "civicId": "NODE_CIVIC_AQ_HAN_REN",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Xiu Taixue": {
   "id": "TRADITION_XIU_TAIXUE",
   "name": "Xiu Taixue",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] gain a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Zhi",
     "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ju Xian I": {
   "id": "TRADITION_JU_XIAN",
   "name": "Ju Xian I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Zhi",
     "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ju Xian II": {
   "id": "TRADITION_JU_XIAN_II",
   "name": "Ju Xian II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Ju Xian I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Han Modernization",
     "civicId": "NODE_CIVIC_MO_HAN_MODERNIZATION",
     "icon": "images/civics/han_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Capable Rule I": {
   "id": "TRADITION_HAN_SYNCRETISM_EXPLORATION",
   "name": "Capable Rule I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Capable Rule II": {
   "id": "TRADITION_HAN_SYNCRETISM_MODERN",
   "name": "Capable Rule II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Capable Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Pithi Chrat I": {
   "id": "TRADITION_PITHI_CHRAT_I",
   "name": "Pithi Chrat I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mousong",
     "civicId": "NODE_CIVIC_AQ_KHMER_MOUSONG",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Pithi Chrat II": {
   "id": "TRADITION_PITHI_CHRAT_II",
   "name": "Pithi Chrat II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-10 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Pithi Chrat I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Khmer Renaissance",
     "civicId": "NODE_CIVIC_EX_KHMER_RENAISSANCE",
     "icon": "images/civics/khmer_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Bon Om Touk": {
   "id": "TRADITION_BON_OM_TOUK",
   "name": "Bon Om Touk",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain an adjacency for [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. [B]+3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Amnach",
     "civicId": "NODE_CIVIC_AQ_KHMER_AMNACH",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kambu-Mera I": {
   "id": "TRADITION_KAMBU_MERA_I",
   "name": "Kambu-Mera I",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Chakravarti",
     "civicId": "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kambu-Mera II": {
   "id": "TRADITION_KAMBU_MERA_II",
   "name": "Kambu-Mera II",
   "text": "[B]+100% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Kambu-Mera I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Khmer Modernization",
     "civicId": "NODE_CIVIC_MO_KHMER_MODERNIZATION",
     "icon": "images/civics/khmer_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Varna I": {
   "id": "TRADITION_KHMER_SYNCRETISM_EXPLORATION",
   "name": "Varna I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Varna II": {
   "id": "TRADITION_KHMER_SYNCRETISM_MODERN",
   "name": "Varna II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Varna I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Charvaka I": {
   "id": "TRADITION_CHARVAKA_I",
   "name": "Charvaka I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Acharya",
     "civicId": "NODE_CIVIC_AQ_MAURYA_ACHARYA",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Charvaka II": {
   "id": "TRADITION_CHARVAKA_II",
   "name": "Charvaka II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Charvaka I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Maurya Renaissance",
     "civicId": "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Kshatriya": {
   "id": "TRADITION_KSHATRIYA",
   "name": "Kshatriya",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when adjacent to each other, or +5 while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Vyuham",
     "civicId": "NODE_CIVIC_AQ_MAURYA_VYUHAM",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Arthashastra I": {
   "id": "TRADITION_ARTHASHASTRA_I",
   "name": "Arthashastra I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Mantriparishad",
     "civicId": "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Arthashastra II": {
   "id": "TRADITION_ARTHASHASTRA_II",
   "name": "Arthashastra II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Arthashastra I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maurya Modernization",
     "civicId": "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Chhatrapati I": {
   "id": "TRADITION_MAURYA_SYNCRETISM_EXPLORATION",
   "name": "Chhatrapati I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Chhatrapati II": {
   "id": "TRADITION_MAURYA_SYNCRETISM_MODERN",
   "name": "Chhatrapati II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Chhatrapati I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Pet Kot": {
   "id": "TRADITION_PET_KOT",
   "name": "Pet Kot",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Rain of Chaac",
     "civicId": "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Miracles of the Twins I": {
   "id": "TRADITION_MIRACLES_OF_THE_TWINS_I",
   "name": "Miracles of the Twins I",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Lords of Xibalba",
     "civicId": "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Miracles of the Twins II": {
   "id": "TRADITION_MIRACLES_OF_THE_TWINS_II",
   "name": "Miracles of the Twins II",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Ranged Units ignore [icon:CITY_UNIMPROVED] Vegetation for [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Miracles of the Twins I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Maya Renaissance",
     "civicId": "NODE_CIVIC_EX_MAYA_RENAISSANCE",
     "icon": "images/civics/maya_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Haab' I": {
   "id": "TRADITION_HAAB_I",
   "name": "Haab' I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Calendar Round",
     "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Haab' II": {
   "id": "TRADITION_HAAB_II",
   "name": "Haab' II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Haab' I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maya Modernization",
     "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "icon": "images/civics/maya_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Tzolk'in I": {
   "id": "TRADITION_TZOLKIN_I",
   "name": "Tzolk'in I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Calendar Round",
     "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tzolk'in II": {
   "id": "TRADITION_TZOLKIN_II",
   "name": "Tzolk'in II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Tzolk'in I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maya Modernization",
     "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "icon": "images/civics/maya_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Milpa I": {
   "id": "TRADITION_MAYA_SYNCRETISM_EXPLORATION",
   "name": "Milpa I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Milpa II": {
   "id": "TRADITION_MAYA_SYNCRETISM_MODERN",
   "name": "Milpa II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on Happiness and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Milpa I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Buzzard Cult": {
   "id": "TRADITION_ATASSA",
   "name": "Buzzard Cult",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when defending. When making Peace with another Leader, [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with that Leader returns to Neutral and you get a free [icon:UNIT_MERCHANT] Merchant in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Waahih",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Gift Economy I": {
   "id": "TRADITION_GIFT_ECONOMY",
   "name": "Gift Economy I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Cah-nah-ha",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Gift Economy II": {
   "id": "TRADITION_GIFT_ECONOMY_II",
   "name": "Gift Economy II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+2 [icon:YIELD_HAPPINESS][/B] from imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Gift Economy I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mississippian Renaissance",
     "civicId": "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Shell-Tempered Pottery I": {
   "id": "TRADITION_SHELL_TEMPERED_POTTERY",
   "name": "Shell-Tempered Pottery I",
   "text": "Food, Gold, and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] Adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Earthworks",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Shell Tempered Pottery II": {
   "id": "TRADITION_SHELL_TEMPERED_POTTERY_II",
   "name": "Shell Tempered Pottery II",
   "text": "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Shell-Tempered Pottery I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Mississippian Modernization",
     "civicId": "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sacrificial Effigies I": {
   "id": "TRADITION_MISSISSIPPIAN_SYNCRETISM_EXPLORATION",
   "name": "Sacrificial Effigies I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Sacrificial Effigies II": {
   "id": "TRADITION_MISSISSIPPIAN_SYNCRETISM_MODERN",
   "name": "Sacrificial Effigies II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking. [B]+50 [icon:YIELD_GOLD][/B] per [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] on [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] creation. Scales by Gamespeed.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Sacrificial Effigies I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Čāpār-Kāna I": {
   "id": "TRADITION_ANGARIUM",
   "name": "Čāpār-Kāna I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Satrapies",
     "civicId": "NODE_CIVIC_AQ_PERSIA_SATRAPIES",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  "Čāpār-Kāna II": {
   "id": "TRADITION_ANGARIUM_II",
   "name": "Čāpār-Kāna II",
   "text": "[B]+6 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Čāpār-Kāna I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Modernization",
     "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Modern"
    }
   ]
  },
  "Kara I": {
   "id": "TRADITION_KARA",
   "name": "Kara I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Spada",
     "civicId": "NODE_CIVIC_AQ_PERSIA_SPADA",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kara II": {
   "id": "TRADITION_KARA_II",
   "name": "Kara II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units. Infantry Units [icon:Action_Heal] Heal [B]15 [icon:Action_Heal] HP[/B] after defeating an enemy Unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Kara I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Renaissance",
     "civicId": "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Exploration"
    }
   ]
  },
  "Shahanshah I": {
   "id": "TRADITION_SHAHANSHAH",
   "name": "Shahanshah I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in enemy territory. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Baziš",
     "civicId": "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  "Shahanshah II": {
   "id": "TRADITION_SHAHANSHAH_II",
   "name": "Shahanshah II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units fighting in enemy territory. [B]+10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Shahanshah I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Modernization",
     "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Modern"
    }
   ]
  },
  "Fractal Rule I": {
   "id": "TRADITION_PERSIA_SYNCRETISM_EXPLORATION",
   "name": "Fractal Rule I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Fractal Rule II": {
   "id": "TRADITION_PERSIA_SYNCRETISM_MODERN",
   "name": "Fractal Rule II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Fractal Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Auxilia I": {
   "id": "TRADITION_AUXILIA_I",
   "name": "Auxilia I",
   "text": "[B]+3% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Exercitus Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Auxilia II": {
   "id": "TRADITION_AUXILIA_II",
   "name": "Auxilia II",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Auxilia I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Roman Modernization",
     "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "icon": "images/civics/roman_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Cursus Honorum": {
   "id": "TRADITION_CURSUS_HONORUM",
   "name": "Cursus Honorum",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on Diplomacy and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP], doubled if a [icon:CITY_BUILDING_LIST] Building is both. [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commanders[/TIP] gain the Bulwark [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Civis Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Latinitas I": {
   "id": "TRADITION_LATINITAS_I",
   "name": "Latinitas I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Legatus Pro Praetore",
     "civicId": "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Latinitas II": {
   "id": "TRADITION_LATINITAS_II",
   "name": "Latinitas II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns. These numbers are doubled again in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Latinitas I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Roman Renaissance",
     "civicId": "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
     "icon": "images/civics/roman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Princeps Civitatis I": {
   "id": "TRADITION_PRINCEPS_CIVITATIS_I",
   "name": "Princeps Civitatis I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Senatus Populusque Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Princeps Civitatis II": {
   "id": "TRADITION_PRINCEPS_CIVITATIS_II",
   "name": "Princeps Civitatis II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Princeps Civitatis I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Roman Modernization",
     "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "icon": "images/civics/roman_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Limitanei I": {
   "id": "TRADITION_ROME_SYNCRETISM_EXPLORATION",
   "name": "Limitanei I",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Limitanei II": {
   "id": "TRADITION_ROME_SYNCRETISM_MODERN",
   "name": "Limitanei II",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Limitanei I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Castes": {
   "id": "TRADITION_CASTES",
   "name": "Castes",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  "Charismatic Leader": {
   "id": "TRADITION_CHARISMATIC_LEADER",
   "name": "Charismatic Leader",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 90,
   "unlockedBy": [
    {
     "civic": "Chiefdom",
     "civicId": "NODE_CIVIC_AQ_MAIN_CHIEFDOM",
     "icon": "images/civics/chiefdom.png",
     "age": "Antiquity"
    }
   ]
  },
  "City Guard": {
   "id": "TRADITION_CITY_GUARD",
   "name": "City Guard",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Public Life",
     "civicId": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
     "icon": "images/civics/public_life.png",
     "age": "Antiquity"
    }
   ]
  },
  "Clan Networks": {
   "id": "TRADITION_CLAN_NETWORKS",
   "name": "Clan Networks",
   "text": "[B]+20% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 125,
   "unlockedBy": [
    {
     "civic": "Mysticism",
     "civicId": "NODE_CIVIC_AQ_MAIN_MYSTICISM",
     "icon": "images/civics/mysticism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Coinage": {
   "id": "TRADITION_COINAGE",
   "name": "Coinage",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Skilled Trades",
     "civicId": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
     "icon": "images/civics/skilled_trades.png",
     "age": "Antiquity"
    }
   ]
  },
  "Commodities": {
   "id": "TRADITION_COMMODITIES",
   "name": "Commodities",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Commerce",
     "civicId": "NODE_CIVIC_AQ_MAIN_COMMERCE",
     "icon": "images/civics/commerce.png",
     "age": "Antiquity"
    }
   ]
  },
  "Conscription": {
   "id": "TRADITION_CONSCRIPTION",
   "name": "Conscription",
   "text": "[B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Organized Military",
     "civicId": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
     "icon": "images/civics/organized_military.png",
     "age": "Antiquity"
    }
   ]
  },
  "Drama and Poetry": {
   "id": "TRADITION_DRAMA_AND_POETRY",
   "name": "Drama and Poetry",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Culture Buildings.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  "Drills": {
   "id": "TRADITION_DRILLS",
   "name": "Drills",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training Infantry and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Tactics",
     "civicId": "NODE_CIVIC_AQ_MAIN_TACTICS",
     "icon": "images/civics/tactics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ethics": {
   "id": "TRADITION_ETHICS",
   "name": "Ethics",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Code of Laws",
     "civicId": "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS",
     "icon": "images/civics/code_of_laws.png",
     "age": "Antiquity"
    }
   ]
  },
  "Honor": {
   "id": "TRADITION_HONOR",
   "name": "Honor",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 125,
   "unlockedBy": [
    {
     "civic": "Discipline",
     "civicId": "NODE_CIVIC_AQ_MAIN_DISCIPLINE",
     "icon": "images/civics/discipline.png",
     "age": "Antiquity"
    }
   ]
  },
  "Hospitality": {
   "id": "TRADITION_HOSPITALITY",
   "name": "Hospitality",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  "Literature": {
   "id": "TRADITION_LITERATURE",
   "name": "Literature",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Science Buildings.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Literacy",
     "civicId": "NODE_CIVIC_AQ_MAIN_LITERACY",
     "icon": "images/civics/literacy.png",
     "age": "Antiquity"
    }
   ]
  },
  "Medicine": {
   "id": "TRADITION_MEDICINE",
   "name": "Medicine",
   "text": "Units gain +5 Healing.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Commerce",
     "civicId": "NODE_CIVIC_AQ_MAIN_COMMERCE",
     "icon": "images/civics/commerce.png",
     "age": "Antiquity"
    }
   ]
  },
  "Oratory": {
   "id": "TRADITION_ORATORY",
   "name": "Oratory",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Code of Laws",
     "civicId": "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS",
     "icon": "images/civics/code_of_laws.png",
     "age": "Antiquity"
    }
   ]
  },
  "Priesthood": {
   "id": "TRADITION_PRIESTHOOD",
   "name": "Priesthood",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Mysticism",
     "civicId": "NODE_CIVIC_AQ_MAIN_MYSTICISM",
     "icon": "images/civics/mysticism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Rites and Rituals": {
   "id": "TRADITION_RITES_AND_RITUALS",
   "name": "Rites and Rituals",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Entertainment",
     "civicId": "NODE_CIVIC_AQ_MAIN_ENTERTAINMENT",
     "icon": "images/civics/entertainment.png",
     "age": "Antiquity"
    }
   ]
  },
  "Scholars": {
   "id": "TRADITION_SCHOLARS",
   "name": "Scholars",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Philosophy",
     "civicId": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "icon": "images/civics/philosophy.png",
     "age": "Antiquity"
    }
   ]
  },
  "Survey": {
   "id": "TRADITION_SURVEY",
   "name": "Survey",
   "text": "Scouts gain [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Discipline",
     "civicId": "NODE_CIVIC_AQ_MAIN_DISCIPLINE",
     "icon": "images/civics/discipline.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tool Making": {
   "id": "TRADITION_TOOL_MAKING",
   "name": "Tool Making",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 90,
   "unlockedBy": [
    {
     "civic": "Chiefdom",
     "civicId": "NODE_CIVIC_AQ_MAIN_CHIEFDOM",
     "icon": "images/civics/chiefdom.png",
     "age": "Antiquity"
    }
   ]
  },
  "Yaxche": {
   "id": "TRADITION_YAXCHE",
   "name": "Yaxche",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  "Poiesis": {
   "id": "TRADITION_POIEISIS",
   "name": "Poiesis",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP] in Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or [B]+2 [icon:YIELD_CULTURE][/B] in Ecstatic Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Philosophy",
     "civicId": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "icon": "images/civics/philosophy.png",
     "age": "Antiquity"
    }
   ]
  },
  "Commanderies": {
   "id": "TRADITION_COMMANDERIES",
   "name": "Commanderies",
   "text": "[B]+20% [icon:YIELD_GOLD][/B] towards upgrading Units.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Tactics",
     "civicId": "NODE_CIVIC_AQ_MAIN_TACTICS",
     "icon": "images/civics/tactics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Fajia": {
   "id": "TRADITION_FAJIA",
   "name": "Fajia",
   "text": "[B]+1[/B] War Support on Wars you Declare.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Organized Military",
     "civicId": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
     "icon": "images/civics/organized_military.png",
     "age": "Antiquity"
    }
   ]
  },
  "Annona": {
   "id": "TRADITION_ANNONA",
   "name": "Annona",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Food Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Public Life",
     "civicId": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
     "icon": "images/civics/public_life.png",
     "age": "Antiquity"
    }
   ]
  },
  "Hangjiao": {
   "id": "TRADITION_HANGJIAO",
   "name": "Hangjiao",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Production Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Skilled Trades",
     "civicId": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
     "icon": "images/civics/skilled_trades.png",
     "age": "Antiquity"
    }
   ]
  },
  "Banditry": {
   "id": "TRADITION_BANDITRY",
   "name": "Banditry",
   "text": "[B]-5 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Barbarian Mercenaries": {
   "id": "TRADITION_BARBARIAN_MERCENARIES",
   "name": "Barbarian Mercenaries",
   "text": "[B]+100% [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Decentralization": {
   "id": "TRADITION_DECENTRALIZATION",
   "name": "Decentralization",
   "text": "[B]-75% [icon:YIELD_GOLD][/B] and [icon:YIELD_FOOD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Specialization.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Inferior Tactics": {
   "id": "TRADITION_INFERIOR_TACTICS",
   "name": "Inferior Tactics",
   "text": "[B]-6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Rebellious Commanders": {
   "id": "TRADITION_REBELLIOUS_COMMANDERS",
   "name": "Rebellious Commanders",
   "text": "[B]-1 [icon:YIELD_HAPPINESS][/B] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Tribute": {
   "id": "TRADITION_TRIBUTE",
   "name": "Tribute",
   "text": "[B]-10 [icon:YIELD_GOLD][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Healing Cults": {
   "id": "TRADITION_HEALING_CULTS",
   "name": "Healing Cults",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] on Altars in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] but [B]-10 [icon:YIELD_GOLD][/B] on Altars.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Prognosis": {
   "id": "TRADITION_PROGNOSIS",
   "name": "Prognosis",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] but [B]-4 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Science Buildings.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Miasma": {
   "id": "TRADITION_MIASMA",
   "name": "Miasma",
   "text": "Gain [B]1 [icon:UNIT_MIGRANT] Migrant[/B] when a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] is [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] but [B]-25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Prosecute Apostates": {
   "id": "TRADITION_PROSECUTE_APOSTATES",
   "name": "Prosecute Apostates",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] but [B]-5 [icon:YIELD_HAPPINESS][/B] in Settlements with no Altar.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Recruitment Shortfalls": {
   "id": "TRADITION_RECRUITMENT_SHORTFALLS",
   "name": "Recruitment Shortfalls",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] but -15 Healing on all Units.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Poleis": {
   "id": "TRADITION_REPUBLIC_UNHAPPINESS",
   "name": "Poleis",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] more than 9 tiles away from your [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Zhuhou": {
   "id": "TRADITION_DESPOTISM_UNHAPPINESS",
   "name": "Zhuhou",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] without a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP] Fortification.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Decadence": {
   "id": "TRADITION_OLIGARCHY_UNHAPPINESS",
   "name": "Decadence",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with unfilled [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Incompetent Ministers": {
   "id": "TRADITION_INCOMPETENT_MINISTERS",
   "name": "Incompetent Ministers",
   "text": "[B]-1 [icon:YIELD_DIPLOMACY][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] you founded.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Suppress Local Traditions": {
   "id": "TRADITION_SUPPRESS_LOCAL_TRADITIONS",
   "name": "Suppress Local Traditions",
   "text": "[B]-3 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] you did not found.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Ambitious Governors": {
   "id": "TRADITION_AMBITIOUS_GOVERNORS",
   "name": "Ambitious Governors",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Provincial Scorn": {
   "id": "TRADITION_PROVINCIAL_SCORN",
   "name": "Provincial Scorn",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Independent Nobility": {
   "id": "TRADITION_CAPITAL_UNHAPPINESS",
   "name": "Independent Nobility",
   "text": "[B]-10 [icon:YIELD_HAPPINESS][/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Stagnation": {
   "id": "TRADITION_TRADITION_LOYALTY_SETTLEMENT_CAP",
   "name": "Stagnation",
   "text": "[B]-1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Classical Revival": {
   "id": "TRADITION_EX_ATTRIBUTE_CULTURAL_01",
   "name": "Classical Revival",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Jubilee": {
   "id": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Jubilee",
   "text": "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Spy Network": {
   "id": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "Spy Network",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Supply and Demand": {
   "id": "TRADITION_EX_ATTRIBUTE_ECONOMIC_01",
   "name": "Supply and Demand",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Municipal Charters": {
   "id": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_TALL",
   "name": "Municipal Charters",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Yanakuna": {
   "id": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_WIDE",
   "name": "Yanakuna",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Professional Army": {
   "id": "TRADITION_EX_ATTRIBUTE_MILITARISTIC_01",
   "name": "Professional Army",
   "text": "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Alchemy": {
   "id": "TRADITION_EX_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Alchemy",
   "text": "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  "City of Peace Tradition II": {
   "id": "TRADITION_CITY_OF_PEACE",
   "name": "City of Peace Tradition II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "City of Peace Tradition I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Round City",
     "civicId": "NODE_CIVIC_EX_ABBASID_ROUND_CITY",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "City of Peace Tradition I": {
   "id": "TRADITION_COMPENDIOUS_BOOK_I",
   "name": "City of Peace Tradition I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Abbasid Origins",
     "civicId": "NODE_CIVIC_AQ_ABBASID_ORIGINS",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Compendious Book Tradition": {
   "id": "TRADITION_COMPENDIOUS_BOOK_II",
   "name": "Compendious Book Tradition",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Al-Jabr",
     "civicId": "NODE_CIVIC_EX_ABBASID_AL_JABR",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Sales and Trade I": {
   "id": "TRADITION_SALES_AND_TRADE_I",
   "name": "Sales and Trade I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mawla",
     "civicId": "NODE_CIVIC_EX_ABBASID_MAWLA",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Sales and Trade II": {
   "id": "TRADITION_SALES_AND_TRADE_II",
   "name": "Sales and Trade II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "Sales and Trade I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Abbasid Modernization",
     "civicId": "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Rasool I": {
   "id": "TRADITION_ABBASID_SYNCRETISM_ANTIQUITY",
   "name": "Rasool I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Rasool II": {
   "id": "TRADITION_ABBASID_SYNCRETISM_MODERN",
   "name": "Rasool II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "Rasool I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Devakoshta I": {
   "id": "TRADITION_DEVAKOSHTA_I",
   "name": "Devakoshta I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Chola Origins",
     "civicId": "NODE_CIVIC_AQ_CHOLA_ORIGINS",
     "icon": "images/civics/chola_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Devakoshta II": {
   "id": "TRADITION_DEVAKOSHTA_II",
   "name": "Devakoshta II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]. [B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:DIPLOMATIC_ACTION] Diplomatic Actions with other Leaders if you have at least [B]5 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Devakoshta I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Kanakam",
     "civicId": "NODE_CIVIC_EX_CHOLA_KANAKAM",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Marakkalam": {
   "id": "TRADITION_MARAKKALAM",
   "name": "Marakkalam",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Heavy Naval Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Digvijaya",
     "civicId": "NODE_CIVIC_EX_CHOLA_DIGVIJAYA",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Angadi I": {
   "id": "TRADITION_ANGADI_I",
   "name": "Angadi I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Monsoon Winds",
     "civicId": "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Angadi II": {
   "id": "TRADITION_ANGADI_II",
   "name": "Angadi II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+8 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Angadi I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Chola Modernization",
     "civicId": "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
     "icon": "images/civics/chola_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Veera Banaju Dharma I": {
   "id": "TRADITION_CHOLA_SYNCRETISM_ANTIQUITY",
   "name": "Veera Banaju Dharma I",
   "text": "[B]+5 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+50% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Veera Banaju Dharma II": {
   "id": "TRADITION_CHOLA_SYNCRETISM_MODERN",
   "name": "Veera Banaju Dharma II",
   "text": "[B]+10 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+100% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Veera Banaju Dharma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Ahupua'a I": {
   "id": "TRADITION_AHUPUA_A_I",
   "name": "Ahupua'a I",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ohana",
     "civicId": "NODE_CIVIC_EX_HAWAII_OHANA",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Ahupua'a II": {
   "id": "TRADITION_AHUPUA_A_II",
   "name": "Ahupua'a II",
   "text": "[B]+6 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Ahupua'a I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Hawaiian Modernization",
     "civicId": "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Ho'okupu I": {
   "id": "TRADITION_HO_OKUPU_I",
   "name": "Ho'okupu I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Hawaiian Origins",
     "civicId": "NODE_CIVIC_AQ_HAWAII_ORIGINS",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ho'okupu II": {
   "id": "TRADITION_HO_OKUPU_II",
   "name": "Ho'okupu II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Ho'okupu I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "He'e nalu",
     "civicId": "NODE_CIVIC_EX_HAWAII_HE_E_NALU",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Kapa": {
   "id": "TRADITION_KAPA",
   "name": "Kapa",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mana",
     "civicId": "NODE_CIVIC_EX_HAWAII_MANA",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hōkūle'a I": {
   "id": "TRADITION_HAWAII_SYNCRETISM_ANTIQUITY",
   "name": "Hōkūle'a I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Hōkūle'a II": {
   "id": "TRADITION_HAWAII_SYNCRETISM_MODERN",
   "name": "Hōkūle'a II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast. [B]+4 [icon:YIELD_CULTURE][/B] on Volcanoes.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Hōkūle'a I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Qullqa I": {
   "id": "TRADITION_QULLQA_I",
   "name": "Qullqa I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Ayllu",
     "civicId": "NODE_CIVIC_EX_INCA_AYLLU",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Qullqa II": {
   "id": "TRADITION_QULLQA_II",
   "name": "Qullqa II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Qullqa I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Incan Modernization",
     "civicId": "NODE_CIVIC_MO_INCAN_MODERNIZATION",
     "icon": "images/civics/incan_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Quipu": {
   "id": "TRADITION_QUIPU",
   "name": "Quipu",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] gain [B]+0.5 [icon:YIELD_GOLD][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Urban Population[/TIP] and [B]+0.5 [icon:YIELD_PRODUCTION][/B] for every [icon:YIELD_POPULATION] Rural Population.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Qhapaq Ñan",
     "civicId": "NODE_CIVIC_EX_INCA_QHAPAQ_NAN",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Tirakuna I": {
   "id": "TRADITION_TIRAKUNA_I",
   "name": "Tirakuna I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Incan Origins",
     "civicId": "NODE_CIVIC_AQ_INCAN_ORIGINS",
     "icon": "images/civics/incan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tirakuna II": {
   "id": "TRADITION_TIRAKUNA_II",
   "name": "Tirakuna II",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Tirakuna I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mit'a",
     "civicId": "NODE_CIVIC_EX_INCA_MITA",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Huaca I": {
   "id": "TRADITION_INCA_SYNCRETISM_ANTIQUITY",
   "name": "Huaca I",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Huaca II": {
   "id": "TRADITION_INCA_SYNCRETISM_MODERN",
   "name": "Huaca II",
   "text": "[B]+15% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Huaca I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Panji": {
   "id": "TRADITION_PANJI",
   "name": "Panji",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Wayang",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_WAYANG",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Negarakertagama I": {
   "id": "TRADITION_NEGARAKERTAGAMA_I",
   "name": "Negarakertagama I",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Aliran Kepercayaan",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Negarakertagama II": {
   "id": "TRADITION_NEGARAKERTAGAMA_II",
   "name": "Negarakertagama II",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Negarakertagama I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Majapahit Modernization",
     "civicId": "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Awisan Dalem I": {
   "id": "TRADITION_AWISAN_DALEM_I",
   "name": "Awisan Dalem I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Majapahit Origins",
     "civicId": "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Awisan Dalem II": {
   "id": "TRADITION_AWISAN_DALEM_II",
   "name": "Awisan Dalem II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Awisan Dalem I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Nusantara",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Subak I": {
   "id": "TRADITION_MAJAPAHIT_SYNCRETISM_ANTIQUITY",
   "name": "Subak I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+10% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Subak II": {
   "id": "TRADITION_MAJAPAHIT_SYNCRETISM_MODERN",
   "name": "Subak II",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Subak I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Baojia I": {
   "id": "TRADITION_BAOJIA_I",
   "name": "Baojia I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ming Origins",
     "civicId": "NODE_CIVIC_AQ_MING_ORIGINS",
     "icon": "images/civics/ming_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Baojia II": {
   "id": "TRADITION_BAOJIA_II",
   "name": "Baojia II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. This becomes +2 in [icon:YIELD_CITIES] Cities other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Baojia I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Lijia",
     "civicId": "NODE_CIVIC_EX_MING_LIJIA",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Divine Engine Division": {
   "id": "TRADITION_DIVINE_ENGINE_DIVISION",
   "name": "Divine Engine Division",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit. [B]+3 [icon:Action_Ranged] Ranged Combat Strength[/B] to [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] adjacent to another Ranged Unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Nine Garrisons",
     "civicId": "NODE_CIVIC_EX_MING_NINE_GARRISONS",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Grand Secretariat I": {
   "id": "TRADITION_GRAND_SECRETARIAT_I",
   "name": "Grand Secretariat I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+2 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Da Ming Lu",
     "civicId": "NODE_CIVIC_EX_MING_DA_MING_LU",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Grand Secretariat II": {
   "id": "TRADITION_GRAND_SECRETARIAT_II",
   "name": "Grand Secretariat II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+3 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Grand Secretariat I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ming Modernization",
     "civicId": "NODE_CIVIC_MO_MING_MODERNIZATION",
     "icon": "images/civics/ming_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Chaogong I": {
   "id": "TRADITION_MING_SYNCRETISM_ANTIQUITY",
   "name": "Chaogong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Chaogong II": {
   "id": "TRADITION_MING_SYNCRETISM_MODERN",
   "name": "Chaogong II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Chaogong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Baghatur I": {
   "id": "TRADITION_BAGHATUR_I",
   "name": "Baghatur I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mongolia Origins",
     "civicId": "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Baghatur II": {
   "id": "TRADITION_BAGHATUR_II",
   "name": "Baghatur II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Baghatur I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Four Hounds",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Gerege": {
   "id": "TRADITION_GEREGE",
   "name": "Gerege",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ulus",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_ULUS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Jarlig I": {
   "id": "TRADITION_JARLIG_I",
   "name": "Jarlig I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Yassa",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_YASSA",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Jarlig II": {
   "id": "TRADITION_JARLIG_II",
   "name": "Jarlig II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Jarlig I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Mongolia Modernization",
     "civicId": "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Jarugachi I": {
   "id": "TRADITION_MONGOLIA_SYNCRETISM_ANTIQUITY",
   "name": "Jarugachi I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Jarugachi II": {
   "id": "TRADITION_MONGOLIA_SYNCRETISM_MODERN",
   "name": "Jarugachi II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+50% [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] from [TIP:LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP]Flanking[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Jarugachi I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Juré I": {
   "id": "TRADITION_JURE_I",
   "name": "Juré I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Norman Origins",
     "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "icon": "images/civics/norman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Juré II": {
   "id": "TRADITION_JURE_II",
   "name": "Juré II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+2 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Juré I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Common Law",
     "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Palisading I": {
   "id": "TRADITION_PALISADING_I",
   "name": "Palisading I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Norman Origins",
     "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "icon": "images/civics/norman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Palisading II": {
   "id": "TRADITION_PALISADING_II",
   "name": "Palisading II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Palisading I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Consuetudines et Justicie",
     "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Familia Regis": {
   "id": "TRADITION_FAMILIA_REGIS",
   "name": "Familia Regis",
   "text": "The [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] gains a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Consuetudines et Justicie",
     "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Servitium Debitum": {
   "id": "TRADITION_SERVITIUM_DEBITUM",
   "name": "Servitium Debitum",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Cavalry Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Common Law",
     "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Bayeux Tapestry I": {
   "id": "TRADITION_BAYEUX_TAPESTRY_I",
   "name": "Bayeux Tapestry I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Domesday Book",
     "civicId": "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Bayeux Tapestry II": {
   "id": "TRADITION_BAYEUX_TAPESTRY_II",
   "name": "Bayeux Tapestry II",
   "text": "[B]+6 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Bayeux Tapestry I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Norman Modernization",
     "civicId": "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
     "icon": "images/civics/norman_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sauveté I": {
   "id": "TRADITION_NORMAN_SYNCRETISM_ANTIQUITY",
   "name": "Sauveté I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Sauveté II": {
   "id": "TRADITION_NORMAN_SYNCRETISM_MODERN",
   "name": "Sauveté II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Sauveté I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Isa": {
   "id": "TRADITION_ISA",
   "name": "Isa",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for all Units on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor[/TIP] and Navigable Rivers do not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Hi-Koi",
     "civicId": "NODE_CIVIC_EX_SONGHAI_HI_KOI",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Mud Brick I": {
   "id": "TRADITION_MUD_BRICK_I",
   "name": "Mud Brick I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ships of the Desert",
     "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Mud Brick II": {
   "id": "TRADITION_MUD_BRICK_II",
   "name": "Mud Brick II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Mud Brick I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/songhai_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Timbuktu I": {
   "id": "TRADITION_TIMBUKTU_I",
   "name": "Timbuktu I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ships of the Desert",
     "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Timbuktu II": {
   "id": "TRADITION_TIMBUKTU_II",
   "name": "Timbuktu II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Timbuktu I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Songhai Modernization",
     "civicId": "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
     "icon": "images/civics/songhai_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Wakia I": {
   "id": "TRADITION_WAKIA_I",
   "name": "Wakia I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Songhai Origins",
     "civicId": "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
     "icon": "images/civics/songhai_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Wakia II": {
   "id": "TRADITION_WAKIA_II",
   "name": "Wakia II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Wakia I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Kanta",
     "civicId": "NODE_CIVIC_EX_SONGHAI_KANTA",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Charismatic Kingship I": {
   "id": "TRADITION_SONGHAI_SYNCRETISM_ANTIQUITY",
   "name": "Charismatic Kingship I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Charismatic Kingship II": {
   "id": "TRADITION_SONGHAI_SYNCRETISM_MODERN",
   "name": "Charismatic Kingship II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Charismatic Kingship I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Conquista": {
   "id": "TRADITION_CONQUISTA",
   "name": "Conquista",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP], or [B]+5 [icon:NAR_REW_COMBAT][/B] Combat Strength for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Council of the Indies",
     "civicId": "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Cerro Rico I": {
   "id": "TRADITION_CERRO_RICO_I",
   "name": "Cerro Rico I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Spain Origins",
     "civicId": "NODE_CIVIC_AQ_SPAIN_ORIGINS",
     "icon": "images/civics/spanish_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Cerro Rico II": {
   "id": "TRADITION_CERRO_RICO_II",
   "name": "Cerro Rico II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], or [B]+3 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Cerro Rico I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "New World Riches",
     "civicId": "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Great and Most Fortunate Navy I": {
   "id": "TRADITION_GREAT_AND_MOST_FORTUNATE_NAVY_I",
   "name": "Great and Most Fortunate Navy I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Armada",
     "civicId": "NODE_CIVIC_EX_SPAIN_ARMADA",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Great and Most Fortunate Navy II": {
   "id": "TRADITION_GREAT_AND_MOST_FORTUNATE_NAVY_II",
   "name": "Great and Most Fortunate Navy II",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Great and Most Fortunate Navy I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Spain Modernization",
     "civicId": "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
     "icon": "images/civics/spanish_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Corregidor I": {
   "id": "TRADITION_SPAIN_SYNCRETISM_ANTIQUITY",
   "name": "Corregidor I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Corregidor II": {
   "id": "TRADITION_SPAIN_SYNCRETISM_MODERN",
   "name": "Corregidor II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Corregidor I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Bourgeoisie": {
   "id": "TRADITION_BOURGEOISIE",
   "name": "Bourgeoisie",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in your [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  "Charters": {
   "id": "TRADITION_CHARTERS",
   "name": "Charters",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Priesthood",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Colonialism",
     "civicId": "NODE_CIVIC_EX_MAIN_COLONIALISM",
     "icon": "images/civics/colonialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Chivalry": {
   "id": "TRADITION_CHIVALRY",
   "name": "Chivalry",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  "Colonial Surplus": {
   "id": "TRADITION_COLONIAL_SURPLUS",
   "name": "Colonial Surplus",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Colonialism",
     "civicId": "NODE_CIVIC_EX_MAIN_COLONIALISM",
     "icon": "images/civics/colonialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Commissioned Officers": {
   "id": "TRADITION_COMMISSIONED_OFFICERS",
   "name": "Commissioned Officers",
   "text": "[B]+30%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for Fleets and Armies.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Commune": {
   "id": "TRADITION_COMMUNE",
   "name": "Commune",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP]. [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Piety",
     "civicId": "NODE_CIVIC_EX_MAIN_PIETY",
     "icon": "images/civics/piety.png",
     "age": "Exploration"
    }
   ]
  },
  "Constitution": {
   "id": "TRADITION_CONSTITUTION",
   "name": "Constitution",
   "text": "[B]+25% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintaining[/TIP] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Bureaucracy",
     "civicId": "NODE_CIVIC_EX_MAIN_BUREAUCRACY",
     "icon": "images/civics/bureaucracy.png",
     "age": "Exploration"
    }
   ]
  },
  "De Facto": {
   "id": "TRADITION_DE_FACTO",
   "name": "De Facto",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Units gain +5 [icon:Action_Heal] Healing.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  "De Jure": {
   "id": "TRADITION_DE_JURE",
   "name": "De Jure",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  "Divine Right": {
   "id": "TRADITION_DIVINE_RIGHT",
   "name": "Divine Right",
   "text": "[B]+10 [icon:YIELD_HAPPINESS][/B] and [B]+4 [icon:YIELD_DIPLOMACY][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Oratory",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  "Enlightenment": {
   "id": "TRADITION_ENLIGHTENMENT",
   "name": "Enlightenment",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  "Evangelism": {
   "id": "TRADITION_EVANGELISM",
   "name": "Evangelism",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Units[/TIP]. +1 charge for [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Survey",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  "Heqin": {
   "id": "TRADITION_HEQIN",
   "name": "Heqin",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Diplomatic Service",
     "civicId": "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE",
     "icon": "images/civics/diplomatic_service.png",
     "age": "Exploration"
    }
   ]
  },
  "Indenture": {
   "id": "TRADITION_INDENTURE",
   "name": "Indenture",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Castes",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Levies": {
   "id": "TRADITION_LEVIES",
   "name": "Levies",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Conscription",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Authority",
     "civicId": "NODE_CIVIC_EX_MAIN_AUTHORITY",
     "icon": "images/civics/authority.png",
     "age": "Exploration"
    }
   ]
  },
  "Maritime Law": {
   "id": "TRADITION_MARITIME_LAW",
   "name": "Maritime Law",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Economics",
     "civicId": "NODE_CIVIC_EX_MAIN_ECONOMICS",
     "icon": "images/civics/economics.png",
     "age": "Exploration"
    }
   ]
  },
  "Metropole": {
   "id": "TRADITION_METROPOLE",
   "name": "Metropole",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]. +10 Range for all [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Patronage": {
   "id": "TRADITION_PATRONAGE",
   "name": "Patronage",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  "Rationalism": {
   "id": "TRADITION_RATIONALISM",
   "name": "Rationalism",
   "text": "[B]+15% [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Reformation",
     "civicId": "NODE_CIVIC_EX_BRANCH_REFORMATION",
     "icon": "images/civics/reformation.png",
     "age": "Exploration"
    }
   ]
  },
  "Regulars": {
   "id": "TRADITION_REGULARS",
   "name": "Regulars",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  "Religious Orders": {
   "id": "TRADITION_RELIGIOUS_ORDERS",
   "name": "Religious Orders",
   "text": "[B]+15% [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Reformation",
     "civicId": "NODE_CIVIC_EX_BRANCH_REFORMATION",
     "icon": "images/civics/reformation.png",
     "age": "Exploration"
    }
   ]
  },
  "Renaissance": {
   "id": "TRADITION_RENAISSANCE",
   "name": "Renaissance",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Inspiration",
     "civicId": "NODE_CIVIC_EX_MAIN_INSPIRATION",
     "icon": "images/civics/inspiration.png",
     "age": "Exploration"
    }
   ]
  },
  "Tariffs": {
   "id": "TRADITION_TARIFFS",
   "name": "Tariffs",
   "text": "[B]+50% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP], but [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Trade Winds": {
   "id": "TRADITION_TRADE_WINDS",
   "name": "Trade Winds",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Mercantilism",
     "civicId": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
     "icon": "images/civics/mercantilism.png",
     "age": "Exploration"
    }
   ]
  },
  "Uposatha": {
   "id": "TRADITION_UPOSATHA",
   "name": "Uposatha",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Rites and Rituals",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  "Vassalage": {
   "id": "TRADITION_VASSALAGE",
   "name": "Vassalage",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Authority",
     "civicId": "NODE_CIVIC_EX_MAIN_AUTHORITY",
     "icon": "images/civics/authority.png",
     "age": "Exploration"
    }
   ]
  },
  "Yeomanry": {
   "id": "TRADITION_YEOMANRY",
   "name": "Yeomanry",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  "Marcher Lords": {
   "id": "TRADITION_MARCHER_LORDS",
   "name": "Marcher Lords",
   "text": "[B]+2 [icon:YIELD_CULTURE] Culture[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] without a Growing Focus, or +4 in Joyous or happier Towns without a Growing Focus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  "Mahakrung": {
   "id": "TRADITION_MAHAKRUNG",
   "name": "Mahakrung",
   "text": "[B]+5 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], or [B]+15 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] if it's Ecstatic.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  "Primitive Accumulation": {
   "id": "TRADITION_PRIMITIVE_ACCUMULATION",
   "name": "Primitive Accumulation",
   "text": "[B]+2 [icon:YIELD_SCIENCE] Science[/B] on [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards constructing [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Mercantilism",
     "civicId": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
     "icon": "images/civics/mercantilism.png",
     "age": "Exploration"
    }
   ]
  },
  "Tequitl": {
   "id": "TRADITION_TEQUITL",
   "name": "Tequitl",
   "text": "+10 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [B]+2 [icon:YIELD_SCIENCE] Science[/B] on [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you initiate.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  "Dargah": {
   "id": "TRADITION_DARGAH",
   "name": "Dargah",
   "text": "[B]+2 [icon:YIELD_FOOD] Food[/B] and [B][icon:YIELD_HAPPINESS] Happiness[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  "Vinaya": {
   "id": "TRADITION_VINAYA",
   "name": "Vinaya",
   "text": "[B]+2 [icon:YIELD_GOLD] Gold[/B] and [B][icon:YIELD_DIPLOMACY] Influence[/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  "Conscription Riots": {
   "id": "TRADITION_CONSCRIPTION_RIOTS",
   "name": "Conscription Riots",
   "text": "[B]-10 [icon:YIELD_HAPPINESS][/B] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Nouveau Riche": {
   "id": "TRADITION_NOUVEAU_RICHE",
   "name": "Nouveau Riche",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Gendarmerie": {
   "id": "TRADITION_GENDARMERIE",
   "name": "Gendarmerie",
   "text": "[B]-4 [icon:YIELD_HAPPINESS][/B] in each [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Impoverished Nobility": {
   "id": "TRADITION_IMPOVERISHED_NOBILITY",
   "name": "Impoverished Nobility",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Oppressive Tariffs": {
   "id": "TRADITION_OPPRESSIVE_TARIFFS",
   "name": "Oppressive Tariffs",
   "text": "[B]-1 [icon:YIELD_GOLD][/B] per [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialist[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Purged Officer Corp": {
   "id": "TRADITION_PURGED_OFFICER_CORP",
   "name": "Purged Officer Corp",
   "text": "[B]-6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] on all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Revolutionary Tribunal": {
   "id": "TRADITION_REVOLUTIONARY_TRIBUNAL",
   "name": "Revolutionary Tribunal",
   "text": "[B]-2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Religious Tax Exemptions": {
   "id": "TRADITION_RELIGIOUS_EXEMPTIONS",
   "name": "Religious Tax Exemptions",
   "text": "[B]-2 [icon:YIELD_GOLD][/B] per displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Strict Censorship": {
   "id": "TRADITION_STRICT_CENSORSHIP",
   "name": "Strict Censorship",
   "text": "[B]-10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Tax Farming": {
   "id": "TRADITION_TAX_FARMING",
   "name": "Tax Farming",
   "text": "[B]-50% [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Weak Bureaucracy": {
   "id": "TRADITION_WEAK_BUREAUCRACY",
   "name": "Weak Bureaucracy",
   "text": "[B]-8 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Divine Punishment": {
   "id": "TRADITION_DIVINE_PUNISHMENT",
   "name": "Divine Punishment",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_PLAGUE] [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. These Settlements gain a [icon:UNIT_MIGRANT] Migrant when [icon:YIELD_PLAGUE] Infected.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Divine Mercy": {
   "id": "TRADITION_DIVINE_MERCY",
   "name": "Divine Mercy",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP] are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Minor Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Humoralism": {
   "id": "TRADITION_HUMORALISM",
   "name": "Humoralism",
   "text": "Gain [B]100 [icon:YIELD_SCIENCE][/B] (Scales by Game Speed) when [icon:UNIT_PHYSICIAN] Physicians Treat the Sick on a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP] with a Hospital.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Plague Cults": {
   "id": "TRADITION_PLAGUE_CULTS",
   "name": "Plague Cults",
   "text": "Gain [B]100 [icon:YIELD_CULTURE][/B] (Scales by Game Speed) when [icon:UNIT_PHYSICIAN] Physicians Treat the Sick on a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP] with a Temple.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Lazarettos": {
   "id": "TRADITION_LAZARETTOS",
   "name": "Lazarettos",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in Coastal [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Dungeon are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Major Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Cordon Sanitaire": {
   "id": "TRADITION_CORDON_SANITAIRE",
   "name": "Cordon Sanitaire",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]stationed[/TIP] [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Major Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Religious Tolerance": {
   "id": "TRADITION_RELIGIOUS_TOLERANCE",
   "name": "Religious Tolerance",
   "text": "[B]+8 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that do not follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. -2 Charges on new [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Religious Zeal": {
   "id": "TRADITION_RELIGIOUS_ZEAL",
   "name": "Religious Zeal",
   "text": "[B]-8 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that do not follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. +2 Charges on new [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Schism": {
   "id": "TRADITION_RELIGIOUS_ESPIONAGE",
   "name": "Schism",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:ESPIONAGE] Convert [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]-4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] Settlements.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Jizya": {
   "id": "TRADITION_RELIGIOUS_MERCHANTS",
   "name": "Jizya",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. [B]-4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP] Settlements.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Bhanaka": {
   "id": "TRADITION_RELIGIOUS_MOVEMENT",
   "name": "Bhanaka",
   "text": "All [icon:UNIT_MISSIONARY] Missionaries in your territory gain [B]+1 [icon:Action_Move] Movement[/B].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Ius Reformandi": {
   "id": "TRADITION_IUS_REFORMANDI",
   "name": "Ius Reformandi",
   "text": "When you convert a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] you own, gain a Migrant and Damage [B]3[/B] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in that Settlement.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Liturgical Disputes": {
   "id": "TRADITION_LITURGICAL_DISPUTES",
   "name": "Liturgical Disputes",
   "text": "[B]-4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Romanticism": {
   "id": "TRADITION_MO_ATTRIBUTE_CULTURAL_01",
   "name": "Romanticism",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Vaudeville": {
   "id": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Vaudeville",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "The Great Game": {
   "id": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "The Great Game",
   "text": "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Gold Standard": {
   "id": "TRADITION_MO_ATTRIBUTE_ECONOMIC_01",
   "name": "Gold Standard",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Developmentalism": {
   "id": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_TALL",
   "name": "Developmentalism",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Industrial Agriculture": {
   "id": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_WIDE",
   "name": "Industrial Agriculture",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Force Structuring": {
   "id": "TRADITION_MO_ATTRIBUTE_MILITARISTIC_01",
   "name": "Force Structuring",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Location Theory": {
   "id": "TRADITION_MO_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Location Theory",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  "Gold Rush I": {
   "id": "TRADITION_GOLD_RUSH_I",
   "name": "Gold Rush I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "American Origins",
     "civicId": "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
     "icon": "images/civics/american_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Gold Rush II": {
   "id": "TRADITION_GOLD_RUSH_II",
   "name": "Gold Rush II",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Gold Rush I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Yankee Ingenuity",
     "civicId": "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Robber Baron I": {
   "id": "TRADITION_ROBBER_BARON_I",
   "name": "Robber Baron I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "American Renaissance",
     "civicId": "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
     "icon": "images/civics/american_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Robber Baron II": {
   "id": "TRADITION_ROBBER_BARON_II",
   "name": "Robber Baron II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Robber Baron I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Captains of Industry",
     "civicId": "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Lend-Lease": {
   "id": "TRADITION_LEND_LEASE",
   "name": "Lend-Lease",
   "text": "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars, or +2 if joining a [icon:WAR] War with an [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Ally[/TIP]. [B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when fighting a [icon:WAR] War in which your [icon:WAR_SUPPORT] War Support is higher than your opponent.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Wartime Manufacturing",
     "civicId": "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Land of Opportunity I": {
   "id": "TRADITION_AMERICA_SYNCRETISM_ANTIQUITY",
   "name": "Land of Opportunity I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Land of Opportunity II": {
   "id": "TRADITION_AMERICA_SYNCRETISM_EXPLORATION",
   "name": "Land of Opportunity II",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_PRODUCTION][/B] on Mines, Clay Pits, Quarries, Woodcutters, and Oil Rigs in [icon:TOWN_FOCUS] Mining [icon:YIELD_TOWNS] Towns, [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Land of Opportunity I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Clan Society I": {
   "id": "TRADITION_CLAN_SOCIETY_I",
   "name": "Clan Society I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/civics/buganda_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Clan Society II": {
   "id": "TRADITION_CLAN_SOCIETY_II",
   "name": "Clan Society II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Clan Society I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "'Nnalubaale",
     "civicId": "NODE_CIVIC_MO_BUGANDA_NNALUBAALE",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Interlacustrine I": {
   "id": "TRADITION_INTERLACUSTRINE_I",
   "name": "Interlacustrine I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain Adjacency from Lakes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Bugandan Origins",
     "civicId": "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
     "icon": "images/civics/buganda_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Interlacustrine II": {
   "id": "TRADITION_INTERLACUSTRINE_II",
   "name": "Interlacustrine II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain an Adjacency with Lakes based on all the Building's Yields.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Interlacustrine I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Nyanza",
     "civicId": "NODE_CIVIC_MO_BUGANDA_NYANZA",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Ng'oma I": {
   "id": "TRADITION_NG_OMA_I",
   "name": "Ng'oma I",
   "text": "[B]+4 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Bugandan Renaissance",
     "civicId": "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
     "icon": "images/civics/buganda_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Ng'oma II": {
   "id": "TRADITION_NG_OMA_II",
   "name": "Ng'oma II",
   "text": "[B]+8 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Ng'oma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Blutabaalo",
     "civicId": "NODE_CIVIC_MO_BUGANDA_BLUTABAALO",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Ebika I": {
   "id": "TRADITION_BUGANDA_SYNCRETISM_ANTIQUITY",
   "name": "Ebika I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ebika II": {
   "id": "TRADITION_BUGANDA_SYNCRETISM_EXPLORATION",
   "name": "Ebika II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Ebika I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Bataillon-Carré": {
   "id": "TRADITION_BATAILLON_CARRE",
   "name": "Bataillon-Carré",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] gain the Swift ability, allowing them to ignore [TIP:LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP]Zone of Control[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Grande Armée",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Cocorico I": {
   "id": "TRADITION_COCORICO_I",
   "name": "Cocorico I",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 15% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "French Imperial Renaissance",
     "civicId": "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
     "icon": "images/civics/french_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Cocorico II": {
   "id": "TRADITION_COCORICO_II",
   "name": "Cocorico II",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 25% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "Cocorico I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Voie Triomphale",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Style Empire I": {
   "id": "TRADITION_STYLE_EMPIRE_I",
   "name": "Style Empire I",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 15% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "French Imperial Origins",
     "civicId": "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
     "icon": "images/civics/french_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Style Empire II": {
   "id": "TRADITION_STYLE_EMPIRE_II",
   "name": "Style Empire II",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "Style Empire I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Belle Époque",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  "De l'Esprit des Loix I": {
   "id": "TRADITION_FRENCH_EMPIRE_SYNCRETISM_ANTIQUITY",
   "name": "De l'Esprit des Loix I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "De l'Esprit des Loix II": {
   "id": "TRADITION_FRENCH_EMPIRE_SYNCRETISM_EXPLORATION",
   "name": "De l'Esprit des Loix II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "De l'Esprit des Loix I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Reign of Terror": {
   "id": "TRADITION_ROBESPIERRE_REIGN_OF_TERROR",
   "name": "Reign of Terror",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP], but [B]-25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Shusei Kokubō I": {
   "id": "TRADITION_SHUSEI_KOKUBO_I",
   "name": "Shusei Kokubō I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Meiji Origins",
     "civicId": "NODE_CIVIC_AQ_MEIJI_ORIGINS",
     "icon": "images/civics/meiji_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Shusei Kokubō II": {
   "id": "TRADITION_SHUSEI_KOKUBO_II",
   "name": "Shusei Kokubō II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. Military and Science Buildings receive an adjacency for Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "Shusei Kokubō I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Supreme War Council",
     "civicId": "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Fukoku Kyōhei I": {
   "id": "TRADITION_FUKOKU_KYOHEI_I",
   "name": "Fukoku Kyōhei I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. When you train a Naval Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Meiji Renaissance",
     "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "icon": "images/civics/meiji_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Fukoku Kyōhei II": {
   "id": "TRADITION_FUKOKU_KYOHEI_II",
   "name": "Fukoku Kyōhei II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Aircraft[/TIP] Units. When you train a Naval or Aircraft Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "Fukoku Kyōhei I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Bunmei Kaika",
     "civicId": "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  "O-yatoi Gaikokujin I": {
   "id": "TRADITION_O_YATOI_GAIKOKUJIN_I",
   "name": "O-yatoi Gaikokujin I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Meiji Renaissance",
     "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "icon": "images/civics/meiji_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "O-yatoi Gaikokujin II": {
   "id": "TRADITION_O_YATOI_GAIKOKUJIN_II",
   "name": "O-yatoi Gaikokujin II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Oath in Five Articles",
     "civicId": "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Kōkūtai": {
   "id": "TRADITION_KOKUTAI",
   "name": "Kōkūtai",
   "text": "[B]+6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Aircraft attacking an enemy Unit adjacent to a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Kantai Kessen",
     "civicId": "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Kimi I": {
   "id": "TRADITION_MEIJI_SYNCRETISM_ANTIQUITY",
   "name": "Kimi I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kimi II": {
   "id": "TRADITION_MEIJI_SYNCRETISM_EXPLORATION",
   "name": "Kimi II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Order and Progress I": {
   "id": "TRADITION_ORDER_AND_PROGRESS_I",
   "name": "Order and Progress I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mexico Origins",
     "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Order and Progress II": {
   "id": "TRADITION_ORDER_AND_PROGRESS_II",
   "name": "Order and Progress II",
   "text": "[B]+4 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Order and Progress I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Tuxtepec",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  "La Reforma I": {
   "id": "TRADITION_LA_REFORMA_I",
   "name": "La Reforma I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mexico Renaissance",
     "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "icon": "images/civics/mexico_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "La Reforma II": {
   "id": "TRADITION_LA_REFORMA_II",
   "name": "La Reforma II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "La Reforma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Ayutla",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Corridos": {
   "id": "TRADITION_CORRIDOS",
   "name": "Corridos",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Planes Políticos",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Cry of Dolores": {
   "id": "TRADITION_CRY_OF_DOLORES",
   "name": "Cry of Dolores",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] in friendly territory for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Iguala",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Campesinos I": {
   "id": "TRADITION_MEXICO_SYNCRETISM_ANTIQUITY",
   "name": "Campesinos I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +5 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Campesinos II": {
   "id": "TRADITION_MEXICO_SYNCRETISM_EXPLORATION",
   "name": "Campesinos II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +10 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Campesinos I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Muralismo I": {
   "id": "TRADITION_MURALISMO_I",
   "name": "Muralismo I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mexico Origins",
     "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Muralismo II": {
   "id": "TRADITION_MURALISMO_II",
   "name": "Muralismo II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Muralismo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mexico Renaissance",
     "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "icon": "images/civics/mexico_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Muralismo III": {
   "id": "TRADITION_MURALISMO_III",
   "name": "Muralismo III",
   "text": "[B]+6 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Muralismo II",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Planes Políticos",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Gunpowder Empire": {
   "id": "TRADITION_GUNPOWDER_EMPIRE",
   "name": "Gunpowder Empire",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Mansabdari",
     "civicId": "NODE_CIVIC_MO_MUGHAL_MANSABDARI",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Jins-i Kamil": {
   "id": "TRADITION_JINSI_KAMIL",
   "name": "Jins-i Kamil",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms for each adjacent Plantation, and on Plantations for each adjacent Farm.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Zabt",
     "civicId": "NODE_CIVIC_MO_MUGHAL_ZABT",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Mayūrāsana I": {
   "id": "TRADITION_MAYURASANA_I",
   "name": "Mayūrāsana I",
   "text": "[B]+5% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mughal Renaissance",
     "civicId": "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
     "icon": "images/civics/mughal_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Mayūrāsana II": {
   "id": "TRADITION_MAYURASANA_II",
   "name": "Mayūrāsana II",
   "text": "[B]+10% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Mayūrāsana I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Gardens of Paradise",
     "civicId": "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Qilachas I": {
   "id": "TRADITION_QILACHAS_I",
   "name": "Qilachas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mughal Origins",
     "civicId": "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
     "icon": "images/civics/mughal_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Qilachas II": {
   "id": "TRADITION_QILACHAS_II",
   "name": "Qilachas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Qilachas I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Jagir",
     "civicId": "NODE_CIVIC_MO_MUGHAL_JAGIR",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Karkhanas I": {
   "id": "TRADITION_MUGHAL_SYNCRETISM_ANTIQUITY",
   "name": "Karkhanas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Karkhanas II": {
   "id": "TRADITION_MUGHAL_SYNCRETISM_EXPLORATION",
   "name": "Karkhanas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Karkhanas I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Coking I": {
   "id": "TRADITION_COKING_I",
   "name": "Coking I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Prussian Origins",
     "civicId": "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
     "icon": "images/civics/prussian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Coking II": {
   "id": "TRADITION_COKING_II",
   "name": "Coking II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Coking I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ruhr",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_RUHR",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Realpolitik I": {
   "id": "TRADITION_REALPOLITIK_I",
   "name": "Realpolitik I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Prussian Renaissance",
     "civicId": "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
     "icon": "images/civics/prussian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Realpolitik II": {
   "id": "TRADITION_REALPOLITIK_II",
   "name": "Realpolitik II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Realpolitik I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Ems Dispatch",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Mediatization": {
   "id": "TRADITION_MEDIATIZATION",
   "name": "Mediatization",
   "text": "[B]+10% [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Zollverein",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Iron Cross": {
   "id": "TRADITION_IRON_CROSS",
   "name": "Iron Cross",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] of a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP]Commendation[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Bewegungskrieg",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Tugenden I": {
   "id": "TRADITION_PRUSSIA_SYNCRETISM_ANTIQUITY",
   "name": "Tugenden I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tugenden II": {
   "id": "TRADITION_PRUSSIA_SYNCRETISM_EXPLORATION",
   "name": "Tugenden II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Tugenden I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Banner Army I": {
   "id": "TRADITION_BANNER_ARMY_I",
   "name": "Banner Army I",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qing Renaissance",
     "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
     "icon": "images/civics/qing_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Banner Army II": {
   "id": "TRADITION_BANNER_ARMY",
   "name": "Banner Army II",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Banner Army I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Stabilizing Frontier",
     "civicId": "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Cohong I": {
   "id": "TRADITION_COHONG_I",
   "name": "Cohong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qing Renaissance",
     "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
     "icon": "images/civics/qing_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Cohong II": {
   "id": "TRADITION_COHONG_II",
   "name": "Cohong II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Cohong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Open Customs",
     "civicId": "NODE_CIVIC_MO_QING_OPEN_CUSTOMS",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Farmland Assessment": {
   "id": "TRADITION_FARMLAND_ASSESSMENT",
   "name": "Farmland Assessment",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Kang Xi Tax Reformation",
     "civicId": "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Tun Ken I": {
   "id": "TRADITION_TUN_KEN_I",
   "name": "Tun Ken I",
   "text": "[B]+25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Qing Origins",
     "civicId": "NODE_CIVIC_AQ_QING_ORIGINS",
     "icon": "images/civics/qing_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tun Ken II": {
   "id": "TRADITION_TUN_KEN_II",
   "name": "Tun Ken II",
   "text": "[B]+50% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Tun Ken I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ten Great Campaigns",
     "civicId": "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Ethnic Stratification I": {
   "id": "TRADITION_QING_SYNCRETISM_ANTIQUITY",
   "name": "Ethnic Stratification I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ethnic Stratification II": {
   "id": "TRADITION_QING_SYNCRETISM_EXPLORATION",
   "name": "Ethnic Stratification II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] founded by you.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Ethnic Stratification I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "General Moroz I": {
   "id": "TRADITION_GENERAL_MOROZ_I",
   "name": "General Moroz I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Russian Origins",
     "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "icon": "images/civics/russian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "General Moroz II": {
   "id": "TRADITION_GENERAL_MOROZ_II",
   "name": "General Moroz II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Enemy Units in your territory take double [icon:DAMAGED] Damage from Blizzards. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "General Moroz I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Samoderzhaviye",
     "civicId": "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Západnichestvo I": {
   "id": "TRADITION_ZAPADNICHESTVO_I",
   "name": "Západnichestvo I",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Russian Origins",
     "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "icon": "images/civics/russian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Západnichestvo II": {
   "id": "TRADITION_ZAPADNICHESTVO_II",
   "name": "Západnichestvo II",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] Cities.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Západnichestvo I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Table of Ranks",
     "civicId": "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Krestyanskaya Reforma I": {
   "id": "TRADITION_KRESTYANSKAYA_REFORMA_I",
   "name": "Krestyanskaya Reforma I",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B], but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Russian Renaissance",
     "civicId": "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
     "icon": "images/civics/russian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Krestyanskaya Reforma II": {
   "id": "TRADITION_KRESTYANSKAYA_REFORMA_II",
   "name": "Krestyanskaya Reforma II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Krestyanskaya Reforma I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Serfdom",
     "civicId": "NODE_CIVIC_MO_RUSSIA_SERFDOM",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Skazki I": {
   "id": "TRADITION_RUSSIA_SYNCRETISM_ANTIQUITY",
   "name": "Skazki I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Skazki II": {
   "id": "TRADITION_RUSSIA_SYNCRETISM_EXPLORATION",
   "name": "Skazki II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Skazki I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Monthon I": {
   "id": "TRADITION_MONTHON_I",
   "name": "Monthon I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Siamese Origins",
     "civicId": "NODE_CIVIC_AQ_SIAM_ORIGINS",
     "icon": "images/civics/siam_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Monthon II": {
   "id": "TRADITION_MONTHON_II",
   "name": "Monthon II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+3 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "Monthon I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Sriwilai",
     "civicId": "NODE_CIVIC_MO_SIAM_SRIWILAI",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Prathetsarat": {
   "id": "TRADITION_PRATHETSARAT",
   "name": "Prathetsarat",
   "text": "[B]+20% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions with [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Mandala",
     "civicId": "NODE_CIVIC_MO_SIAM_MANDALA",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sakdina": {
   "id": "TRADITION_SAKDINA",
   "name": "Sakdina",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Nine Gems",
     "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  "San Lak Mueang I": {
   "id": "TRADITION_SAN_LAK_MUEANG_I",
   "name": "San Lak Mueang I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Siamese Renaissance",
     "civicId": "NODE_CIVIC_EX_SIAM_RENAISSANCE",
     "icon": "images/civics/siam_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "San Lak Mueang II": {
   "id": "TRADITION_SAN_LAK_MUEANG_II",
   "name": "San Lak Mueang II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "San Lak Mueang I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Nine Gems",
     "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Chatusadom I": {
   "id": "TRADITION_SIAM_SYNCRETISM_ANTIQUITY",
   "name": "Chatusadom I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Chatusadom II": {
   "id": "TRADITION_SIAM_SYNCRETISM_EXPLORATION",
   "name": "Chatusadom II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "Chatusadom I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Ambassadors": {
   "id": "TRADITION_AMBASSADORS",
   "name": "Ambassadors",
   "text": "[B]+6 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  "Civil Engineering": {
   "id": "TRADITION_CIVIL_ENGINEERING",
   "name": "Civil Engineering",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Commune",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Modernity",
     "civicId": "NODE_CIVIC_MO_MAIN_MODERNIZATION",
     "icon": "images/civics/modernity.png",
     "age": "Modern"
    }
   ]
  },
  "Demagogy": {
   "id": "TRADITION_DEMAGOGY",
   "name": "Demagogy",
   "text": "Gain [icon:YIELD_HAPPINESS] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Divine Right",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  "People's Army": {
   "id": "TRADITION_PEOPLES_ARMY",
   "name": "People's Army",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  "Free Speech": {
   "id": "TRADITION_FREE_SPEECH",
   "name": "Free Speech",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Constitution",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Political Theory",
     "civicId": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
     "icon": "images/civics/political_theory.png",
     "age": "Modern"
    }
   ]
  },
  "Humanism": {
   "id": "TRADITION_HUMANISM",
   "name": "Humanism",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Social Question",
     "civicId": "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION",
     "icon": "images/civics/social_question.png",
     "age": "Modern"
    }
   ]
  },
  "Laissez-Faire": {
   "id": "TRADITION_LAISSEZ_FAIRE",
   "name": "Laissez-Faire",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Capitalism",
     "civicId": "NODE_CIVIC_MO_MAIN_CAPITALISM",
     "icon": "images/civics/capitalism.png",
     "age": "Modern"
    }
   ]
  },
  "Monopolies": {
   "id": "TRADITION_MONOPOLIES",
   "name": "Monopolies",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Factory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Metropole",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Capitalism",
     "civicId": "NODE_CIVIC_MO_MAIN_CAPITALISM",
     "icon": "images/civics/capitalism.png",
     "age": "Modern"
    }
   ]
  },
  "Materiel": {
   "id": "TRADITION_MATERIEL",
   "name": "Materiel",
   "text": "+10 [icon:Action_Heal] Healing for Units. [B]+1 [icon:Action_Move] Movement[/B] for Armies and Fleets.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  "Trenchworks": {
   "id": "TRADITION_TRENCHWORKS",
   "name": "Trenchworks",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:Action_Fortify] Fortified Units and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  "Draft": {
   "id": "TRADITION_DRAFT",
   "name": "Draft",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing Units and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Levies",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  "Projection of Force": {
   "id": "TRADITION_PROJECTION_OF_FORCE",
   "name": "Projection of Force",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Naval Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  "Cultural Imperialism": {
   "id": "TRADITION_CULTURAL_IMPERIALISM",
   "name": "Cultural Imperialism",
   "text": "[B]+6 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Hegemony",
     "civicId": "NODE_CIVIC_MO_MAIN_HEGEMONY",
     "icon": "images/civics/hegemony.png",
     "age": "Modern"
    }
   ]
  },
  "Sphere of Influence": {
   "id": "TRADITION_SPHERE_OF_INFLUENCE",
   "name": "Sphere of Influence",
   "text": "Gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you have.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Hegemony",
     "civicId": "NODE_CIVIC_MO_MAIN_HEGEMONY",
     "icon": "images/civics/hegemony.png",
     "age": "Modern"
    }
   ]
  },
  "Preservation Societies": {
   "id": "TRADITION_PRESERVATION_SOCIETIES",
   "name": "Preservation Societies",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  "Land Heritage": {
   "id": "TRADITION_LAND_HERITAGE",
   "name": "Land Heritage",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIMPROVED] Mountains. [B]+6 [icon:YIELD_CULTURE][/B] on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Natural History",
     "civicId": "NODE_CIVIC_MO_MAIN_NATURAL_HISTORY",
     "icon": "images/civics/natural_history.png",
     "age": "Modern"
    }
   ]
  },
  "Social Science": {
   "id": "TRADITION_SOCIAL_SCIENCE",
   "name": "Social Science",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Social Question",
     "civicId": "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION",
     "icon": "images/civics/social_question.png",
     "age": "Modern"
    }
   ]
  },
  "Living Standards": {
   "id": "TRADITION_LIVING_STANDARDS",
   "name": "Living Standards",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Modernity",
     "civicId": "NODE_CIVIC_MO_MAIN_MODERNIZATION",
     "icon": "images/civics/modernity.png",
     "age": "Modern"
    }
   ]
  },
  "Garrison State": {
   "id": "TRADITION_GARRISON_STATE",
   "name": "Garrison State",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards adding [icon:WAR_SUPPORT] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  "Jingoism": {
   "id": "TRADITION_JINGOISM",
   "name": "Jingoism",
   "text": "[B]+5 [icon:NAR_REW_COMBAT] Combat Strength[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when attacking an opponent from a different ideology.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  "Evidenzbureau": {
   "id": "TRADITION_EVIDENZBUREAU",
   "name": "Evidenzbureau",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards Counterspy [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] Actions.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Political Theory",
     "civicId": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
     "icon": "images/civics/political_theory.png",
     "age": "Modern"
    }
   ]
  },
  "Crown Properties": {
   "id": "TRADITION_CROWN_PROPERTIES",
   "name": "Crown Properties",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] on [icon:CITY_BUILDING_LIST] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  "Think-tanks": {
   "id": "TRADITION_THINK_TANKS",
   "name": "Think-tanks",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards Projects, or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  "Army Corps of Engineers": {
   "id": "TRADITION_ARMY_CORPS_OF_ENGINEERS",
   "name": "Army Corps of Engineers",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  "Productive Forces Determinism": {
   "id": "TRADITION_PRODUCTIVE_FORCES_DETERMINISM",
   "name": "Productive Forces Determinism",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Communism",
     "civicId": "NODE_CIVIC_MO_BRANCH_COMMUNISM",
     "icon": "images/civics/communism.png",
     "age": "Modern"
    }
   ]
  },
  "Proletariat": {
   "id": "TRADITION_PROLETARIAT",
   "name": "Proletariat",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Communism",
     "civicId": "NODE_CIVIC_MO_BRANCH_COMMUNISM",
     "icon": "images/civics/communism.png",
     "age": "Modern"
    }
   ]
  },
  "Collectivization": {
   "id": "TRADITION_COLLECTIVIZATION",
   "name": "Collectivization",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_FOOD] equal to your [icon:ATTRIBUTE_EXPANSIONIST] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Centralism",
     "civicId": "NODE_CIVIC_MO_BRANCH_CENTRALISM",
     "icon": "images/civics/centralism.png",
     "age": "Modern"
    }
   ]
  },
  "Naukograd": {
   "id": "TRADITION_NAUKOGRAD",
   "name": "Naukograd",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_SCIENCE] equal to your [icon:ATTRIBUTE_SCIENTIFIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Centralism",
     "civicId": "NODE_CIVIC_MO_BRANCH_CENTRALISM",
     "icon": "images/civics/centralism.png",
     "age": "Modern"
    }
   ]
  },
  "Defense of the Motherland": {
   "id": "TRADITION_DEFENSE_OF_THE_MOTHERLAND",
   "name": "Defense of the Motherland",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in your own territory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  "Police State": {
   "id": "TRADITION_POLICE_STATE",
   "name": "Police State",
   "text": "[B]+8 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  "Public Works": {
   "id": "TRADITION_PUBLIC_WORKS",
   "name": "Public Works",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards completing [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  "Fireside Chats": {
   "id": "TRADITION_FIRESIDE_CHATS",
   "name": "Fireside Chats",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Democracy",
     "civicId": "NODE_CIVIC_MO_BRANCH_DEMOCRACY",
     "icon": "images/civics/democracy.png",
     "age": "Modern"
    }
   ]
  },
  "Suffrage": {
   "id": "TRADITION_SUFFRAGE",
   "name": "Suffrage",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Democracy",
     "civicId": "NODE_CIVIC_MO_BRANCH_DEMOCRACY",
     "icon": "images/civics/democracy.png",
     "age": "Modern"
    }
   ]
  },
  "Free Press": {
   "id": "TRADITION_FREE_PRESS",
   "name": "Free Press",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP]. [B]-5 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Liberalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_LIBERALISM",
     "icon": "images/civics/liberalism.png",
     "age": "Modern"
    }
   ]
  },
  "Welfare State": {
   "id": "TRADITION_WELFARE_STATE",
   "name": "Welfare State",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_HAPPINESS] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP]. [B]-5 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Liberalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_LIBERALISM",
     "icon": "images/civics/liberalism.png",
     "age": "Modern"
    }
   ]
  },
  "Avant Garde": {
   "id": "TRADITION_AVANT_GARDE",
   "name": "Avant Garde",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  "New Deal": {
   "id": "TRADITION_NEW_DEAL",
   "name": "New Deal",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  "Their Finest Hour": {
   "id": "TRADITION_THEIR_FINEST_HOUR",
   "name": "Their Finest Hour",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Air Units in your own territory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  "Assembly Line": {
   "id": "TRADITION_ASSEMBLY_LINE",
   "name": "Assembly Line",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Fascism",
     "civicId": "NODE_CIVIC_MO_BRANCH_FASCISM",
     "icon": "images/civics/fascism.png",
     "age": "Modern"
    }
   ]
  },
  "Dirigisme": {
   "id": "TRADITION_DIRIGISME",
   "name": "Dirigisme",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Fascism",
     "civicId": "NODE_CIVIC_MO_BRANCH_FASCISM",
     "icon": "images/civics/fascism.png",
     "age": "Modern"
    }
   ]
  },
  "Martial Law": {
   "id": "TRADITION_MARTIAL_LAW",
   "name": "Martial Law",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_PRODUCTION] equal to your [icon:ATTRIBUTE_MILITARISTIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Radicalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_RADICALISM",
     "icon": "images/civics/radicalism.png",
     "age": "Modern"
    }
   ]
  },
  "Propaganda": {
   "id": "TRADITION_PROPAGANDA",
   "name": "Propaganda",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_GOLD] equal to your [icon:ATTRIBUTE_ECONOMIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Radicalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_RADICALISM",
     "icon": "images/civics/radicalism.png",
     "age": "Modern"
    }
   ]
  },
  "Military-Industrial Complex": {
   "id": "TRADITION_MILITARY_INDUSTRIAL_COMPLEX",
   "name": "Military-Industrial Complex",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for all Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  "Strategic Railways": {
   "id": "TRADITION_STRATEGIC_RAILWAYS",
   "name": "Strategic Railways",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Rail Station.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  "Scorched Earth": {
   "id": "TRADITION_SCORCHED_EARTH",
   "name": "Scorched Earth",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units when attacking. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] gain +25% yields and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  "System of Ideas": {
   "id": "TRADITION_SYSTEM_OF_IDEAS",
   "name": "System of Ideas",
   "text": "[B]+50% [icon:YIELD_CULTURE][/B] towards researching [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civics[/TIP] that unlock an [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology but [B]-50% [icon:YIELD_HAPPINESS][/B] towards [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "The First International": {
   "id": "TRADITION_COMMUNISM_UNIQUE",
   "name": "The First International",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most Factories.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Perpetual Peace": {
   "id": "TRADITION_DEMOCRACY_UNIQUE",
   "name": "Perpetual Peace",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Supremacy": {
   "id": "TRADITION_FASCISM_UNIQUE",
   "name": "Supremacy",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most completed [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Tech[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Civic Masteries[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Wartime Innovation": {
   "id": "TRADITION_WARTIME_INNOVATION",
   "name": "Wartime Innovation",
   "text": "Training a [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Unit[/TIP] grants [icon:YIELD_SCIENCE] equal to 25% of the Unit's cost while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "War Heroes": {
   "id": "TRADITION_WAR_HEROES",
   "name": "War Heroes",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Wartime Economy": {
   "id": "TRADITION_WARTIME_ECONOMY",
   "name": "Wartime Economy",
   "text": "[B]+100% [icon:YIELD_GOLD][/B] towards purchasing Factories and Rail Stations while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "National Prestige": {
   "id": "TRADITION_NATIONAL_PRESTIGE",
   "name": "National Prestige",
   "text": "[B]+10% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions per displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Last Reserves": {
   "id": "TRADITION_LAST_RESERVES",
   "name": "Last Reserves",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] per [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Grand Alliance": {
   "id": "TRADITION_GRAND_ALLIANCE",
   "name": "Grand Alliance",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you ahve.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  "Dūrāni I": {
   "id": "TRADITION_DURANI",
   "name": "Dūrāni I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology Mastery[/TIP] completed this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Birtūtu",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Miḫiṣtu I": {
   "id": "TRADITION_MIHISTU",
   "name": "Miḫiṣtu I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Tupšarrūtu",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Girru I": {
   "id": "TRADITION_GIRRU",
   "name": "Girru I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+3 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Kibrāt Arba’i",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_KIBRAT_ARBA_I",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Miḫiṣtu II": {
   "id": "TRADITION_MIHISTU_II",
   "name": "Miḫiṣtu II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Miḫiṣtu I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Assyrian Renaissance",
     "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "icon": "images/civics/assyria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Girru II": {
   "id": "TRADITION_GIRRU_II",
   "name": "Girru II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Girru I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Assyrian Renaissance",
     "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "icon": "images/civics/assyria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Ashur I": {
   "id": "TRADITION_ASSYRIA_SYNCRETISM_EXPLORATION",
   "name": "Ashur I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Dūrāni II": {
   "id": "TRADITION_DURANI_II",
   "name": "Dūrāni II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Dūrāni I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Assyrian Modernization",
     "civicId": "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
     "icon": "images/civics/assyria_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Ashur II": {
   "id": "TRADITION_ASSYRIA_SYNCRETISM_MODERN",
   "name": "Ashur II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Ashur I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Stratagems I": {
   "id": "TRADITION_STRATAGEMS_I",
   "name": "Stratagems I",
   "text": "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Bulgarian Origins",
     "civicId": "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "False Retreat": {
   "id": "TRADITION_FALSE_RETREAT",
   "name": "False Retreat",
   "text": "Receive [icon:YIELD_FOOD] in all [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when Pillaging [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] equal to 50% of the Yield or [icon:Action_Heal] HP gained. [B]-3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for all Combat Units against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Seven Tribes",
     "civicId": "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Iconolatry I": {
   "id": "TRADITION_ICONOLATRY",
   "name": "Iconolatry I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tarnovo Schools",
     "civicId": "NODE_CIVIC_EX_BULGARIA_TARNOVO_SCHOOLS",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Stratagems II": {
   "id": "TRADITION_STRATAGEMS",
   "name": "Stratagems II",
   "text": "+50% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]8 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Stratagems I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Tsarstvie",
     "civicId": "NODE_CIVIC_EX_BULGARIA_TSARSTVIE",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Iconolatry II": {
   "id": "TRADITION_ICONOLATRY_II",
   "name": "Iconolatry II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Iconolatry I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Bulgarian Modernization",
     "civicId": "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Uporitost I": {
   "id": "TRADITION_BULGARIA_SYNCRETISM_ANTIQUITY",
   "name": "Uporitost I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Uporitost II": {
   "id": "TRADITION_BULGARIA_SYNCRETISM_MODERN",
   "name": "Uporitost II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] can [icon:Action_Pillage] Pillage for [B]1 [icon:Action_Move] Movement[/B].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Uporitost I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Gaulos I": {
   "id": "TRADITION_GAULOS_I",
   "name": "Gaulos I",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Wisdom of Tanit",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Quinquereme I": {
   "id": "TRADITION_QUINQUEREME_I",
   "name": "Quinquereme I",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Shipsheds",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Suffetes": {
   "id": "TRADITION_SUFFETES",
   "name": "Suffetes",
   "text": "[B]+20% [icon:YIELD_GOLD][/B] in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+20% [icon:YIELD_FOOD][/B] in Fishing or Farming [icon:YIELD_TOWNS] Towns. [B]+1 [icon:TRADE_ROUTE][/B] Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] Range for every [icon:YIELD_TOWNS] Town with a [icon:TOWN_FOCUS] Trade Outpost Focus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Sicilian Wars",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_SICILIAN_WARS",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Quinquereme II": {
   "id": "TRADITION_QUINQUEREME_II",
   "name": "Quinquereme II",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Quinquereme I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Carthaginian Renaissance",
     "civicId": "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
     "icon": "images/civics/carthage_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hannoid Rule I": {
   "id": "TRADITION_CARTHAGE_SYNCRETISM_EXPLORATION",
   "name": "Hannoid Rule I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Gaulos II": {
   "id": "TRADITION_GAULOS_II",
   "name": "Gaulos II",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Gaulos I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Carthaginian Modernization",
     "civicId": "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
     "icon": "images/civics/carthage_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Hannoid Rule II": {
   "id": "TRADITION_CARTHAGE_SYNCRETISM_MODERN",
   "name": "Hannoid Rule II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Hannoid Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Cấm Binh I": {
   "id": "TRADITION_CAM_BINH_I",
   "name": "Cấm Binh I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Vietnamese Origins",
     "civicId": "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Cấm Binh II": {
   "id": "TRADITION_CAM_BINH_II",
   "name": "Cấm Binh II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing and [icon:YIELD_GOLD] towards purchasing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Cấm Binh I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Cấm Quân",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Con Kênh": {
   "id": "TRADITION_CON_KENH",
   "name": "Con Kênh",
   "text": "Culture and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Chữ Nôm",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_CHU_NOM",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Ruộng Làng Xã I": {
   "id": "TRADITION_RUONG_LANG_XA_I",
   "name": "Ruộng Làng Xã I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tứ Dân",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_TU_DAN",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Ruộng Làng Xã II": {
   "id": "TRADITION_RUONG_LANG_XA_II",
   "name": "Ruộng Làng Xã II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Ruộng Làng Xã I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Vietnamese Modernization",
     "civicId": "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Hành Chính Công I": {
   "id": "TRADITION_DAI_VIET_SYNCRETISM_ANTIQUITY",
   "name": "Hành Chính Công I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Hành Chính Công II": {
   "id": "TRADITION_DAI_VIET_SYNCRETISM_MODERN",
   "name": "Hành Chính Công II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Hành Chính Công I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Bongwan I": {
   "id": "TRADITION_BONGWAN",
   "name": "Bongwan I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Cheonsu",
     "civicId": "NODE_CIVIC_EX_GORYEO_CHEONSU",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hoguk Jonggyo II": {
   "id": "TRADITION_HOGUK_JONGGYO",
   "name": "Hoguk Jonggyo II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] or Settlements following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Hoguk Jonggyo I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tripitaka Koreana",
     "civicId": "NODE_CIVIC_EX_GORYEO_TRIPITAKA_KOREANA",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Sagae Chibubeop": {
   "id": "TRADITION_SAGAE_CHIBUBEOP",
   "name": "Sagae Chibubeop",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [icon:YIELD_GOLD] equal to 10% of their [icon:YIELD_CULTURE].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Jikji",
     "civicId": "NODE_CIVIC_EX_GORYEO_JIKJI",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hoguk Jonggyo I": {
   "id": "TRADITION_HOGUK_JONGGYO_I",
   "name": "Hoguk Jonggyo I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Goryeo Origins",
     "civicId": "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Bongwan II": {
   "id": "TRADITION_BONGWAN_II",
   "name": "Bongwan II",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Bongwan I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Goryeo Modernization",
     "civicId": "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sambyeolcho I": {
   "id": "TRADITION_GORYEO_SYNCRETISM_ANTIQUITY",
   "name": "Sambyeolcho I",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Sambyeolcho II": {
   "id": "TRADITION_GORYEO_SYNCRETISM_MODERN",
   "name": "Sambyeolcho II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Sambyeolcho I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "East India Company I": {
   "id": "TRADITION_EAST_INDIA_COMPANY_I",
   "name": "East India Company I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "British Origins",
     "civicId": "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "East India Company II": {
   "id": "TRADITION_EAST_INDIA_COMPANY_II",
   "name": "East India Company II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "East India Company I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Chartered Companies",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_CHARTERED_COMPANIES",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  "No Eternal Allies I": {
   "id": "TRADITION_NO_ETERNAL_ALLIES_I",
   "name": "No Eternal Allies I",
   "text": "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "British Renaissance",
     "civicId": "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "No Eternal Allies II": {
   "id": "TRADITION_NO_ETERNAL_ALLIES_II",
   "name": "No Eternal Allies II",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "No Eternal Allies I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Splendid Isolation",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SPLENDID_ISOLATION",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Proceedings": {
   "id": "TRADITION_PROCEEDINGS",
   "name": "Proceedings",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with both a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] and a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted. [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] receive [B]+3 [icon:YIELD_PRODUCTION][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Society of Antiquaries",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Royal Society I": {
   "id": "TRADITION_GREAT_BRITAIN_SYNCRETISM_ANTIQUITY",
   "name": "Royal Society I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+1 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Royal Society II": {
   "id": "TRADITION_GREAT_BRITAIN_SYNCRETISM_EXPLORATION",
   "name": "Royal Society II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+2 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "Royal Society I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Insei I": {
   "id": "TRADITION_INSEI",
   "name": "Insei I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ritsuryo",
     "civicId": "NODE_CIVIC_AQ_HEIAN_RITSURYO",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Utsurou": {
   "id": "TRADITION_UTSUROU",
   "name": "Utsurou",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] receive [B]+2 [icon:YIELD_CULTURE][/B] for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display, but [icon:UNIT_ARMY_COMMANDER] Commanders receive [B]-25% [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP][/B].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Waka",
     "civicId": "NODE_CIVIC_AQ_HEIAN_WAKA",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Jo-bo System I": {
   "id": "TRADITION_JO_BO_SYSTEM",
   "name": "Jo-bo System I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+0.5 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Urban Grid",
     "civicId": "NODE_CIVIC_AQ_HEIAN_URBAN_GRID",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Monogatari": {
   "id": "TRADITION_MONOGATARI",
   "name": "Monogatari",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency with Charming tiles and [B]+2 [icon:YIELD_FOOD][/B] Adjacency with [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Mono No Aware",
     "civicId": "NODE_CIVIC_AQ_HEIAN_MONO_NO_AWARE",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Jo-bo System II": {
   "id": "TRADITION_JO_BO_SYSTEM_II",
   "name": "Jo-bo System II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Jo-bo System I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Heian Renaissance",
     "civicId": "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
     "icon": "images/civics/heian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Insei II": {
   "id": "TRADITION_INSEI_II",
   "name": "Insei II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Insei I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Heian Modernization",
     "civicId": "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
     "icon": "images/civics/heian_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Shikken I": {
   "id": "TRADITION_HEIAN_SYNCRETISM_EXPLORATION",
   "name": "Shikken I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Shikken II": {
   "id": "TRADITION_HEIAN_SYNCRETISM_MODERN",
   "name": "Shikken II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Shikken I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Strandhögg": {
   "id": "TRADITION_STRANDHOGG",
   "name": "Strandhögg",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can [icon:Action_Pillage] Pillage and Coastal Raid tiles within 2 tiles. Naval Units can disperse [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP] or [icon:Action_Pillage] Coastal Raid for [B]1 [icon:Action_Move] Movement[/B] when in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Does not apply to Discoveries.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hugins Drekka",
     "civicId": "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Reiði Guðanna": {
   "id": "TRADITION_REIDI_GUDANNA",
   "name": "Reiði Guðanna",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Cultural and [icon:YIELD_PRODUCTION] Adjacency from Volcanoes and [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]. ( [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonder Volcanoes do not count twice) [B]+25% [icon:YIELD_GOLD][/B] towards purchasing [icon:ACTION_IMPROVE] Repairs.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Landnámabók",
     "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Dróttkvætt II": {
   "id": "TRADITION_DROTTKVAETT_II",
   "name": "Dróttkvætt II",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Dróttkvætt I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Landnámabók",
     "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Lyfsteinn I": {
   "id": "TRADITION_LYFSTEINN_I",
   "name": "Lyfsteinn I",
   "text": "+10 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Væringjar",
     "civicId": "NODE_CIVIC_EX_ICELAND_VAERINGJAR",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Dróttkvætt I": {
   "id": "TRADITION_DROTTKVAETT_I",
   "name": "Dróttkvætt I",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Icelandic Origins",
     "civicId": "NODE_CIVIC_AQ_ICELAND_ORIGINS",
     "icon": "images/civics/iceland_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Lyfsteinn II": {
   "id": "TRADITION_LYFSTEINN_II",
   "name": "Lyfsteinn II",
   "text": "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Lyfsteinn I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Icelandic Modernization",
     "civicId": "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
     "icon": "images/civics/iceland_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Drekahöfuð I": {
   "id": "TRADITION_ICELAND_SYNCRETISM_ANTIQUITY",
   "name": "Drekahöfuð I",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Drekahöfuð II": {
   "id": "TRADITION_ICELAND_SYNCRETISM_MODERN",
   "name": "Drekahöfuð II",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost. [B]+1 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for each improved [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonder[/TIP] in your empire.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Drekahöfuð I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Gwageo II": {
   "id": "TRADITION_GWAGEO",
   "name": "Gwageo II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Gwageo I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Seongnihak",
     "civicId": "NODE_CIVIC_MO_JOSEON_IHAK",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Silhak": {
   "id": "TRADITION_SILHAK",
   "name": "Silhak",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Seonbi",
     "civicId": "NODE_CIVIC_MO_JOSEON_SEONBI",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Yangbeobmiui II": {
   "id": "TRADITION_YANGBEOBMIUI",
   "name": "Yangbeobmiui II",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Seowon. [B]-10% [icon:YIELD_CULTURE][/B] in other [icon:YIELD_CITIES] Cities. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Yangbeobmiui I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gyeongguk Daejeon",
     "civicId": "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Yangban Bureaucracy II": {
   "id": "TRADITION_YANGBAN_BUREAUCRACY",
   "name": "Yangban Bureaucracy II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]3[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Yangban Bureaucracy I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Samgang",
     "civicId": "NODE_CIVIC_MO_JOSEON_SAMGANG",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Yangbeobmiui I": {
   "id": "TRADITION_YANGBEOBMIUI_I",
   "name": "Yangbeobmiui I",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Joseon Origins",
     "civicId": "NODE_CIVIC_AQ_JOSEON_ORIGINS",
     "icon": "images/civics/joseon_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Gwageo I": {
   "id": "TRADITION_GWAGEO_I",
   "name": "Gwageo I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/civics/joseon_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Yangban Bureaucracy I": {
   "id": "TRADITION_YANGBAN_BUREAUCRACY_I",
   "name": "Yangban Bureaucracy I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Joseon Renaissance",
     "civicId": "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
     "icon": "images/civics/joseon_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Hermit Kingdom I": {
   "id": "TRADITION_JOSEON_SYNCRETISM_ANTIQUITY",
   "name": "Hermit Kingdom I",
   "text": "[B]+0.5 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Hermit Kingdom II": {
   "id": "TRADITION_JOSEON_SYNCRETISM_EXPLORATION",
   "name": "Hermit Kingdom II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Hermit Kingdom I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Himāl I": {
   "id": "TRADITION_HIMAL_I",
   "name": "Himāl I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Nepali Origins",
     "civicId": "NODE_CIVIC_AQ_NEPAL_ORIGINS",
     "icon": "images/civics/nepal_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Himāl II": {
   "id": "TRADITION_HIMAL",
   "name": "Himāl II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Himāl I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gorkhapatra",
     "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Maitri Sandhi I": {
   "id": "TRADITION_MAITRI_SANDHI_I",
   "name": "Maitri Sandhi I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Nepali Renaissance",
     "civicId": "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
     "icon": "images/civics/nepal_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Maitri Sandhi II": {
   "id": "TRADITION_MAITRI_SANDHI",
   "name": "Maitri Sandhi II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +20% otherwise.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Maitri Sandhi I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Singha Durbar",
     "civicId": "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Tundikhel": {
   "id": "TRADITION_TUNDIKHEL",
   "name": "Tundikhel",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units adjacent to [icon:CITY_UNIMPROVED] Mountains. This is doubled if the Unit is also in your territory. Units complete [icon:Action_Fortify] Fortifications in 1 turn if adjacent to a [icon:CITY_UNIMPROVED] Mountain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Jyumdo Bagha",
     "civicId": "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sagarmatha": {
   "id": "TRADITION_SAGARMATHA",
   "name": "Sagarmatha",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] receive an Adjacency from [icon:CITY_UNIMPROVED] Mountains.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gorkhapatra",
     "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Kumar and Kumari I": {
   "id": "TRADITION_NEPAL_SYNCRETISM_ANTIQUITY",
   "name": "Kumar and Kumari I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kumar and Kumari II": {
   "id": "TRADITION_NEPAL_SYNCRETISM_EXPLORATION",
   "name": "Kumar and Kumari II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Kumar and Kumari I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Erkân-ı Harbiye Mektebi": {
   "id": "TRADITION_ERKAN_I_HARBIYE_MEKTEBI",
   "name": "Erkân-ı Harbiye Mektebi",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. -2 [icon:YIELD_GOLD] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Gold Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Harbiye Nezâreti",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_HARBIYE_NEZARETI",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Osmanlı Barok I": {
   "id": "TRADITION_OSMANLI_BAROK_I",
   "name": "Osmanlı Barok I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ottoman Renaissance",
     "civicId": "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Osmanlı Barok II": {
   "id": "TRADITION_OSMANLI_BAROK_II",
   "name": "Osmanlı Barok II",
   "text": "[B]+3 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing Museums.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Osmanlı Barok I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Tanẓîmât",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_TANZIMAT",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Sedef Kakma I": {
   "id": "TRADITION_SEDEF_KAKMA_I",
   "name": "Sedef Kakma I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ottoman Origins",
     "civicId": "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Sedef Kakma II": {
   "id": "TRADITION_SEDEF_KAKMA_II",
   "name": "Sedef Kakma II",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+5 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Sedef Kakma I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Lâle Devri",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Siege Train": {
   "id": "TRADITION_SIEGE_TRAIN",
   "name": "Siege Train",
   "text": "When a unit destroys a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District's[/TIP] defenses, all other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] have their [icon:Action_Move] Movement restored.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Şahi Topu",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Mehterân I": {
   "id": "TRADITION_OTTOMANS_SYNCRETISM_ANTIQUITY",
   "name": "Mehterân I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Mehterân II": {
   "id": "TRADITION_OTTOMANS_SYNCRETISM_EXPLORATION",
   "name": "Mehterân II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP]. Training a Siege Unit grants [icon:YIELD_HAPPINESS] towards [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP] equal to 50% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Mehterân I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Press Gangs I": {
   "id": "TRADITION_PRESS_GANGS_I",
   "name": "Press Gangs I",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Articles of Agreement",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Press Gangs II": {
   "id": "TRADITION_PRESS_GANGS_II",
   "name": "Press Gangs II",
   "text": "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Press Gangs I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Pirate Modernization",
     "civicId": "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Merry Life and a Short One": {
   "id": "TRADITION_MERRY_LIFE_AND_A_SHORT_ONE",
   "name": "Merry Life and a Short One",
   "text": "When you defeat a [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP], gain [icon:YIELD_GOLD] equal to the Unit’s [icon:YIELD_PRODUCTION] cost. When you defeat a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP], gain [icon:YIELD_GOLD] equal to 25% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Ports of Call",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Black Flag I": {
   "id": "TRADITION_BLACK_FLAG_I",
   "name": "Black Flag I",
   "text": "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Pirate Origins",
     "civicId": "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Black Flag II": {
   "id": "TRADITION_BLACK_FLAG_II",
   "name": "Black Flag II",
   "text": "[B]+100 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +100% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] and Naval Units gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] on Atolls.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Black Flag I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Enemy of All Nations",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ENEMY_OF_ALL_NATIONS",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Brethren of the Coast I": {
   "id": "TRADITION_PIRATE_REPUBLIC_SYNCRETISM_ANTIQUITY",
   "name": "Brethren of the Coast I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Brethren of the Coast II": {
   "id": "TRADITION_PIRATE_REPUBLIC_SYNCRETISM_MODERN",
   "name": "Brethren of the Coast II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Brethren of the Coast I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Qullarāqāsi": {
   "id": "TRADITION_QULLARAQASI",
   "name": "Qullarāqāsi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] for every [B]2[/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Neẓām-e J̌adīd",
     "civicId": "NODE_CIVIC_MO_QAJAR_NEZAM_E_JADID",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Soleymaniyeh Palace I": {
   "id": "TRADITION_SOLEYMANIYEH_PALACE_I",
   "name": "Soleymaniyeh Palace I",
   "text": "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qajar Renaissance",
     "civicId": "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
     "icon": "images/civics/qajar_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Soleymaniyeh Palace II": {
   "id": "TRADITION_SOLEYMANIYEH_PALACE_II",
   "name": "Soleymaniyeh Palace II",
   "text": "[B]+0.5 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Soleymaniyeh Palace I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "The Sun Throne",
     "civicId": "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Dār al-Fonūn I": {
   "id": "TRADITION_DAR_AL_FONUN_I",
   "name": "Dār al-Fonūn I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Qajar Origins",
     "civicId": "NODE_CIVIC_AQ_QAJAR_ORIGINS",
     "icon": "images/civics/qajar_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Dār al-Fonūn II": {
   "id": "TRADITION_DAR_AL_FONUN_II",
   "name": "Dār al-Fonūn II",
   "text": "[B]+10 [icon:YIELD_SCIENCE][/B] and [icon:YIELD_CULTURE] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Dār al-Fonūn I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Twelve Gates",
     "civicId": "NODE_CIVIC_MO_QAJAR_TWELVE_GATES",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Waqāye'-e Ettefāqiya I": {
   "id": "TRADITION_QAJAR_SYNCRETISM_ANTIQUITY",
   "name": "Waqāye'-e Ettefāqiya I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Waqāye'-e Ettefāqiya II": {
   "id": "TRADITION_QAJAR_SYNCRETISM_EXPLORATION",
   "name": "Waqāye'-e Ettefāqiya II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_DIPLOMACY] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Waqāye'-e Ettefāqiya I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Daimyo": {
   "id": "TRADITION_DAIMYO",
   "name": "Daimyo",
   "text": "Land [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] fight as though they were at full [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] even when [icon:DAMAGED] Damaged.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Kinsei",
     "civicId": "NODE_CIVIC_EX_SENGOKU_KINSEI",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Gekokujo II": {
   "id": "TRADITION_GEKOKUJO",
   "name": "Gekokujo II",
   "text": "[B]+100% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Gekokujo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ikki",
     "civicId": "NODE_CIVIC_EX_SENGOKU_IKKI",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Kabunakama I": {
   "id": "TRADITION_KABUNAKAMA",
   "name": "Kabunakama I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Rakuichi-Rakuza",
     "civicId": "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Gekokujo I": {
   "id": "TRADITION_GEKOKUJO_I",
   "name": "Gekokujo I",
   "text": "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Sengoku Origins",
     "civicId": "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Kabunakama II": {
   "id": "TRADITION_KABUNAKAMA_II",
   "name": "Kabunakama II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Kabunakama I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Sengoku Modernization",
     "civicId": "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Bushido I": {
   "id": "TRADITION_SENGOKU_SYNCRETISM_ANTIQUITY",
   "name": "Bushido I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Bushido II": {
   "id": "TRADITION_SENGOKU_SYNCRETISM_MODERN",
   "name": "Bushido II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Bushido I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Helikhilenawewipe I": {
   "id": "TRADITION_HELIKHILENAWEWIPE_I",
   "name": "Helikhilenawewipe I",
   "text": "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Shawnee Origins",
     "civicId": "NODE_CIVIC_AQ_SHAWNEE_ORIGINS",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Helikhilenawewipe II": {
   "id": "TRADITION_HELIKHILENAWEWIPE_II",
   "name": "Helikhilenawewipe II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Helikhilenawewipe I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Telwatiki",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_TELWATIKI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Bread Dance I": {
   "id": "TRADITION_BREAD_DANCE_I",
   "name": "Bread Dance I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+4 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Wiyehi Simekofi",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Bread Dance II": {
   "id": "TRADITION_BREAD_DANCE_II",
   "name": "Bread Dance II",
   "text": "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Bread Dance I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Niwiitikeemekonaaki I": {
   "id": "TRADITION_NIWIITIKEEMEKONAAKI",
   "name": "Niwiitikeemekonaaki I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Miyaska Latoweki",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Niwiitikeemekonaaki II": {
   "id": "TRADITION_NIWIITIKEEMEKONAAKI_II",
   "name": "Niwiitikeemekonaaki II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Niwiitikeemekonaaki I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Shawnee Modernization",
     "civicId": "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Takesiyake Yepepoki": {
   "id": "TRADITION_TAKESIYAKE_YEPEPOKI",
   "name": "Takesiyake Yepepoki",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Tundra, Desert, and Plains Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. These numbers are doubled if the tile is also [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] Terrain.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maleki Kintake",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_MALEKI_KINTAKE",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Strategic Gifts I": {
   "id": "TRADITION_SHAWNEE_SYNCRETISM_ANTIQUITY",
   "name": "Strategic Gifts I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  "Strategic Gifts II": {
   "id": "TRADITION_SHAWNEE_SYNCRETISM_MODERN",
   "name": "Strategic Gifts II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Strategic Gifts I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Beopseong I": {
   "id": "TRADITION_BEOPSEONG_I",
   "name": "Beopseong I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 108,
   "unlockedBy": [
    {
     "civic": "Kolp'um",
     "civicId": "NODE_CIVIC_AQ_SILLA_KOLP_UM",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Beopseong II": {
   "id": "TRADITION_BEOPSEONG_II",
   "name": "Beopseong II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Beopseong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/silla_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Strategic Allies": {
   "id": "TRADITION_STRATEGIC_ALLIES",
   "name": "Strategic Allies",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_FOOD] and [icon:YIELD_PRODUCTION] to both players equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Samguk Sagi",
     "civicId": "NODE_CIVIC_AQ_SILLA_SAMGUK_SAGI",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "The Golden Road I": {
   "id": "TRADITION_THE_GOLDEN_ROAD_I",
   "name": "The Golden Road I",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players equal to 50% of the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Seonggol",
     "civicId": "NODE_CIVIC_AQ_SILLA_SEONGGOL",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "The Golden Road II": {
   "id": "TRADITION_THE_GOLDEN_ROAD_II",
   "name": "The Golden Road II",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "The Golden Road I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Silla Modernization",
     "civicId": "NODE_CIVIC_MO_SILLA_MODERNIZATION",
     "icon": "images/civics/silla_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Seorabeol I": {
   "id": "TRADITION_SEORABEOL_I",
   "name": "Seorabeol I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Jingol",
     "civicId": "NODE_CIVIC_AQ_SILLA_JINGOL",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Seorabeol II": {
   "id": "TRADITION_SEORABEOL_II",
   "name": "Seorabeol II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Seorabeol I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Silla Renaissance",
     "civicId": "NODE_CIVIC_EX_SILLA_RENAISSANCE",
     "icon": "images/civics/silla_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Revised Bone-Rank I": {
   "id": "TRADITION_SILLA_SYNCRETISM_EXPLORATION",
   "name": "Revised Bone-Rank I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "Revised Bone-Rank II": {
   "id": "TRADITION_SILLA_SYNCRETISM_MODERN",
   "name": "Revised Bone-Rank II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Revised Bone-Rank I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  "Ngatu I": {
   "id": "TRADITION_NGATU_I",
   "name": "Ngatu I",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Kava Ceremony",
     "civicId": "NODE_CIVIC_AQ_TONGA_KAVA_CEREMONY",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Ngatu II": {
   "id": "TRADITION_NGATU_II",
   "name": "Ngatu II",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "Ngatu I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Tongan Modernization",
     "civicId": "NODE_CIVIC_MO_TONGA_MODERNIZATION",
     "icon": "images/civics/tonga_civics.png",
     "age": "Modern"
    }
   ]
  },
  "Tongiaki I": {
   "id": "TRADITION_TONGIAKI_I",
   "name": "Tongiaki I",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "ʻEsi Maka Faakinanga",
     "civicId": "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "Tongiaki II": {
   "id": "TRADITION_TONGIAKI_II",
   "name": "Tongiaki II",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "Tongiaki I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Tongan Renaissance",
     "civicId": "NODE_CIVIC_EX_TONGA_RENAISSANCE",
     "icon": "images/civics/tonga_civics.png",
     "age": "Exploration"
    }
   ]
  },
  "Takuaka": {
   "id": "TRADITION_TAKUAKA",
   "name": "Takuaka",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Fishing Boats in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on Fishing Boats on Reefs in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Lapita Origins",
     "civicId": "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  "T’ui Ha’atakalaua I": {
   "id": "TRADITION_TONGA_SYNCRETISM_EXPLORATION",
   "name": "T’ui Ha’atakalaua I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  "T’ui Ha’atakalaua II": {
   "id": "TRADITION_TONGA_SYNCRETISM_MODERN",
   "name": "T’ui Ha’atakalaua II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "T’ui Ha’atakalaua I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  }
 },
 "list": [
  {
   "id": "TRADITION_AQ_ATTRIBUTE_CULTURAL_01",
   "name": "Enlightened Rule",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Priestly Class",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "Emissaries",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_ECONOMIC_01",
   "name": "Merchant Class",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_EXPANSIONIST_01",
   "name": "Fractal Cities",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_MILITARISTIC_01",
   "name": "Warrior Class",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AQ_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Experimentation",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Foundation",
     "civicId": "NODE_CIVIC_AQ_FOUNDATION",
     "icon": "images/icons/civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PORT_OF_NATIONS_I",
   "name": "Port of Nations I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+100% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Periplus of the Erythraean Sea",
     "civicId": "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PORT_OF_NATIONS_II",
   "name": "Port of Nations II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+200% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "Port of Nations I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Aksumite Modernization",
     "civicId": "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_THRONE_OF_MY_FATHERS",
   "name": "Throne Of My Fathers",
   "text": "[B]+15% [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast. Gain [icon:YIELD_CULTURE] equal to 25% of your [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Monumentum Adulitanum",
     "civicId": "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MAY_THIS_PLEASE_THE_PEOPLE_I",
   "name": "May This Please The People I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Book of the Himyarites",
     "civicId": "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MAY_THIS_PLEASE_THE_PEOPLE_II",
   "name": "May This Please The People II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "May This Please The People I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Aksumite Renaissance",
     "civicId": "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
     "icon": "images/civics/aksumite_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_AKSUM_SYNCRETISM_EXPLORATION",
   "name": "Incense Road I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_AKSUM_SYNCRETISM_MODERN",
   "name": "Incense Road II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AKSUM",
   "civName": "Aksum",
   "attr": "",
   "obsoletes": "Incense Road I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AKHET_I",
   "name": "Akhet I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Arrival of Hapi",
     "civicId": "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AKHET_II",
   "name": "Akhet II",
   "text": "[B]+3 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Akhet I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Egyptian Renaissance",
     "civicId": "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RICHES_OF_THE_DUAT",
   "name": "Riches of the Duat",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled when constructed in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with [icon:YIELD_CITIES] City Centers in Desert Terrain. [B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:WONDER] Wonders on Desert.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Scales of Anubis",
     "civicId": "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KEMET_I",
   "name": "Kemet I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Light of Amun-Ra",
     "civicId": "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KEMET_II",
   "name": "Kemet II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Kemet I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Egyptian Modernization",
     "civicId": "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
     "icon": "images/civics/egyptian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_EGYPT_SYNCRETISM_EXPLORATION",
   "name": "Golden Horus I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EGYPT_SYNCRETISM_MODERN",
   "name": "Golden Horus II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_EGYPT",
   "civName": "Egypt",
   "attr": "",
   "obsoletes": "Golden Horus I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_XENIA_I",
   "name": "Xenia I",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ekklesia",
     "civicId": "NODE_CIVIC_AQ_GREECE_EKKLESIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_XENIA_II",
   "name": "Xenia II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Xenia I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Greek Modernization",
     "civicId": "NODE_CIVIC_MO_GREECE_MODERNIZATION",
     "icon": "images/civics/greek_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STRATEGOI",
   "name": "Strategoi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Agoge",
     "civicId": "NODE_CIVIC_AQ_GREECE_AGOGE",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DELIAN_LEAGUE_I",
   "name": "Delian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Symmachia",
     "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DELIAN_LEAGUE_II",
   "name": "Delian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and supporting [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Delian League I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Greek Renaissance",
     "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "icon": "images/civics/greek_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PELOPONNESIAN_LEAGUE_I",
   "name": "Peloponnesian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Symmachia",
     "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
     "icon": "images/civics/greek_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PELOPONNESIAN_LEAGUE_II",
   "name": "Peloponnesian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] and [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Peloponnesian League I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Greek Renaissance",
     "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
     "icon": "images/civics/greek_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GREECE_SYNCRETISM_EXPLORATION",
   "name": "Hellenism I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GREECE_SYNCRETISM_MODERN",
   "name": "Hellenism II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREECE",
   "civName": "Greece",
   "attr": "",
   "obsoletes": "Hellenism I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FENGHUO",
   "name": "Fenghuo I",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Yi",
     "civicId": "NODE_CIVIC_AQ_HAN_YI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_FENGHUO_II",
   "name": "Fenghuo II",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Fenghuo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Han Renaissance",
     "civicId": "NODE_CIVIC_EX_HAN_RENAISSANCE",
     "icon": "images/civics/han_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_XUMIN_ZHAO",
   "name": "Xumin Zhao",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ren",
     "civicId": "NODE_CIVIC_AQ_HAN_REN",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_XIU_TAIXUE",
   "name": "Xiu Taixue",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] gain a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Zhi",
     "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JU_XIAN",
   "name": "Ju Xian I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Zhi",
     "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
     "icon": "images/civics/han_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JU_XIAN_II",
   "name": "Ju Xian II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Ju Xian I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Han Modernization",
     "civicId": "NODE_CIVIC_MO_HAN_MODERNIZATION",
     "icon": "images/civics/han_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_HAN_SYNCRETISM_EXPLORATION",
   "name": "Capable Rule I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HAN_SYNCRETISM_MODERN",
   "name": "Capable Rule II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAN",
   "civName": "Han",
   "attr": "",
   "obsoletes": "Capable Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PITHI_CHRAT_I",
   "name": "Pithi Chrat I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mousong",
     "civicId": "NODE_CIVIC_AQ_KHMER_MOUSONG",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PITHI_CHRAT_II",
   "name": "Pithi Chrat II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-10 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Pithi Chrat I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Khmer Renaissance",
     "civicId": "NODE_CIVIC_EX_KHMER_RENAISSANCE",
     "icon": "images/civics/khmer_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BON_OM_TOUK",
   "name": "Bon Om Touk",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain an adjacency for [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. [B]+3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Amnach",
     "civicId": "NODE_CIVIC_AQ_KHMER_AMNACH",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KAMBU_MERA_I",
   "name": "Kambu-Mera I",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Chakravarti",
     "civicId": "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI",
     "icon": "images/civics/khmer_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KAMBU_MERA_II",
   "name": "Kambu-Mera II",
   "text": "[B]+100% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Kambu-Mera I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Khmer Modernization",
     "civicId": "NODE_CIVIC_MO_KHMER_MODERNIZATION",
     "icon": "images/civics/khmer_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_KHMER_SYNCRETISM_EXPLORATION",
   "name": "Varna I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_KHMER_SYNCRETISM_MODERN",
   "name": "Varna II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_KHMER",
   "civName": "Khmer",
   "attr": "",
   "obsoletes": "Varna I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CHARVAKA_I",
   "name": "Charvaka I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Acharya",
     "civicId": "NODE_CIVIC_AQ_MAURYA_ACHARYA",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CHARVAKA_II",
   "name": "Charvaka II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Charvaka I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Maurya Renaissance",
     "civicId": "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_KSHATRIYA",
   "name": "Kshatriya",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when adjacent to each other, or +5 while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Vyuham",
     "civicId": "NODE_CIVIC_AQ_MAURYA_VYUHAM",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ARTHASHASTRA_I",
   "name": "Arthashastra I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Mantriparishad",
     "civicId": "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ARTHASHASTRA_II",
   "name": "Arthashastra II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Arthashastra I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maurya Modernization",
     "civicId": "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
     "icon": "images/civics/mauryan_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MAURYA_SYNCRETISM_EXPLORATION",
   "name": "Chhatrapati I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAURYA_SYNCRETISM_MODERN",
   "name": "Chhatrapati II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAURYA",
   "civName": "Maurya",
   "attr": "",
   "obsoletes": "Chhatrapati I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PET_KOT",
   "name": "Pet Kot",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Rain of Chaac",
     "civicId": "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MIRACLES_OF_THE_TWINS_I",
   "name": "Miracles of the Twins I",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Lords of Xibalba",
     "civicId": "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MIRACLES_OF_THE_TWINS_II",
   "name": "Miracles of the Twins II",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Ranged Units ignore [icon:CITY_UNIMPROVED] Vegetation for [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Miracles of the Twins I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Maya Renaissance",
     "civicId": "NODE_CIVIC_EX_MAYA_RENAISSANCE",
     "icon": "images/civics/maya_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HAAB_I",
   "name": "Haab' I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Calendar Round",
     "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HAAB_II",
   "name": "Haab' II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Haab' I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maya Modernization",
     "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "icon": "images/civics/maya_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TZOLKIN_I",
   "name": "Tzolk'in I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Calendar Round",
     "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
     "icon": "images/civics/maya_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TZOLKIN_II",
   "name": "Tzolk'in II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Tzolk'in I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maya Modernization",
     "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
     "icon": "images/civics/maya_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MAYA_SYNCRETISM_EXPLORATION",
   "name": "Milpa I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAYA_SYNCRETISM_MODERN",
   "name": "Milpa II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on Happiness and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAYA",
   "civName": "Maya",
   "attr": "",
   "obsoletes": "Milpa I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ATASSA",
   "name": "Buzzard Cult",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when defending. When making Peace with another Leader, [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with that Leader returns to Neutral and you get a free [icon:UNIT_MERCHANT] Merchant in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Waahih",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GIFT_ECONOMY",
   "name": "Gift Economy I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Cah-nah-ha",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GIFT_ECONOMY_II",
   "name": "Gift Economy II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+2 [icon:YIELD_HAPPINESS][/B] from imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Gift Economy I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mississippian Renaissance",
     "civicId": "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SHELL_TEMPERED_POTTERY",
   "name": "Shell-Tempered Pottery I",
   "text": "Food, Gold, and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] Adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Earthworks",
     "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SHELL_TEMPERED_POTTERY_II",
   "name": "Shell Tempered Pottery II",
   "text": "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Shell-Tempered Pottery I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Mississippian Modernization",
     "civicId": "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
     "icon": "images/civics/mississippian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MISSISSIPPIAN_SYNCRETISM_EXPLORATION",
   "name": "Sacrificial Effigies I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MISSISSIPPIAN_SYNCRETISM_MODERN",
   "name": "Sacrificial Effigies II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking. [B]+50 [icon:YIELD_GOLD][/B] per [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] on [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] creation. Scales by Gamespeed.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MISSISSIPPIAN",
   "civName": "Mississippian",
   "attr": "",
   "obsoletes": "Sacrificial Effigies I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ANGARIUM",
   "name": "Čāpār-Kāna I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Satrapies",
     "civicId": "NODE_CIVIC_AQ_PERSIA_SATRAPIES",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ANGARIUM_II",
   "name": "Čāpār-Kāna II",
   "text": "[B]+6 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Čāpār-Kāna I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Modernization",
     "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_KARA",
   "name": "Kara I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Spada",
     "civicId": "NODE_CIVIC_AQ_PERSIA_SPADA",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KARA_II",
   "name": "Kara II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units. Infantry Units [icon:Action_Heal] Heal [B]15 [icon:Action_Heal] HP[/B] after defeating an enemy Unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Kara I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Renaissance",
     "civicId": "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SHAHANSHAH",
   "name": "Shahanshah I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in enemy territory. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Baziš",
     "civicId": "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SHAHANSHAH_II",
   "name": "Shahanshah II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units fighting in enemy territory. [B]+10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Shahanshah I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Achaemenid Persian Modernization",
     "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
     "icon": "images/civics/achaemenid_persian_civic.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PERSIA_SYNCRETISM_EXPLORATION",
   "name": "Fractal Rule I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PERSIA_SYNCRETISM_MODERN",
   "name": "Fractal Rule II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PERSIA",
   "civName": "Achaemenid Persia",
   "attr": "",
   "obsoletes": "Fractal Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AUXILIA_I",
   "name": "Auxilia I",
   "text": "[B]+3% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Exercitus Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AUXILIA_II",
   "name": "Auxilia II",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Auxilia I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Roman Modernization",
     "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "icon": "images/civics/roman_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CURSUS_HONORUM",
   "name": "Cursus Honorum",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on Diplomacy and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP], doubled if a [icon:CITY_BUILDING_LIST] Building is both. [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commanders[/TIP] gain the Bulwark [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Civis Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_LATINITAS_I",
   "name": "Latinitas I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Legatus Pro Praetore",
     "civicId": "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_LATINITAS_II",
   "name": "Latinitas II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns. These numbers are doubled again in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Latinitas I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Roman Renaissance",
     "civicId": "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
     "icon": "images/civics/roman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PRINCEPS_CIVITATIS_I",
   "name": "Princeps Civitatis I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Senatus Populusque Romanus",
     "civicId": "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS",
     "icon": "images/civics/roman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PRINCEPS_CIVITATIS_II",
   "name": "Princeps Civitatis II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Princeps Civitatis I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Roman Modernization",
     "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
     "icon": "images/civics/roman_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ROME_SYNCRETISM_EXPLORATION",
   "name": "Limitanei I",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ROME_SYNCRETISM_MODERN",
   "name": "Limitanei II",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ROME",
   "civName": "Rome",
   "attr": "",
   "obsoletes": "Limitanei I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CASTES",
   "name": "Castes",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CHARISMATIC_LEADER",
   "name": "Charismatic Leader",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 90,
   "unlockedBy": [
    {
     "civic": "Chiefdom",
     "civicId": "NODE_CIVIC_AQ_MAIN_CHIEFDOM",
     "icon": "images/civics/chiefdom.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CITY_GUARD",
   "name": "City Guard",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Public Life",
     "civicId": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
     "icon": "images/civics/public_life.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CLAN_NETWORKS",
   "name": "Clan Networks",
   "text": "[B]+20% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 125,
   "unlockedBy": [
    {
     "civic": "Mysticism",
     "civicId": "NODE_CIVIC_AQ_MAIN_MYSTICISM",
     "icon": "images/civics/mysticism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_COINAGE",
   "name": "Coinage",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Skilled Trades",
     "civicId": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
     "icon": "images/civics/skilled_trades.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_COMMODITIES",
   "name": "Commodities",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Commerce",
     "civicId": "NODE_CIVIC_AQ_MAIN_COMMERCE",
     "icon": "images/civics/commerce.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CONSCRIPTION",
   "name": "Conscription",
   "text": "[B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Organized Military",
     "civicId": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
     "icon": "images/civics/organized_military.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DRAMA_AND_POETRY",
   "name": "Drama and Poetry",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Culture Buildings.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DRILLS",
   "name": "Drills",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training Infantry and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Tactics",
     "civicId": "NODE_CIVIC_AQ_MAIN_TACTICS",
     "icon": "images/civics/tactics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ETHICS",
   "name": "Ethics",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Code of Laws",
     "civicId": "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS",
     "icon": "images/civics/code_of_laws.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HONOR",
   "name": "Honor",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 125,
   "unlockedBy": [
    {
     "civic": "Discipline",
     "civicId": "NODE_CIVIC_AQ_MAIN_DISCIPLINE",
     "icon": "images/civics/discipline.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HOSPITALITY",
   "name": "Hospitality",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_LITERATURE",
   "name": "Literature",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_BUILDING_LIST] Science Buildings.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Literacy",
     "civicId": "NODE_CIVIC_AQ_MAIN_LITERACY",
     "icon": "images/civics/literacy.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MEDICINE",
   "name": "Medicine",
   "text": "Units gain +5 Healing.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Commerce",
     "civicId": "NODE_CIVIC_AQ_MAIN_COMMERCE",
     "icon": "images/civics/commerce.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ORATORY",
   "name": "Oratory",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Code of Laws",
     "civicId": "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS",
     "icon": "images/civics/code_of_laws.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PRIESTHOOD",
   "name": "Priesthood",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Mysticism",
     "civicId": "NODE_CIVIC_AQ_MAIN_MYSTICISM",
     "icon": "images/civics/mysticism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_RITES_AND_RITUALS",
   "name": "Rites and Rituals",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Entertainment",
     "civicId": "NODE_CIVIC_AQ_MAIN_ENTERTAINMENT",
     "icon": "images/civics/entertainment.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SCHOLARS",
   "name": "Scholars",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Philosophy",
     "civicId": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "icon": "images/civics/philosophy.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SURVEY",
   "name": "Survey",
   "text": "Scouts gain [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Exploration"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Discipline",
     "civicId": "NODE_CIVIC_AQ_MAIN_DISCIPLINE",
     "icon": "images/civics/discipline.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TOOL_MAKING",
   "name": "Tool Making",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 90,
   "unlockedBy": [
    {
     "civic": "Chiefdom",
     "civicId": "NODE_CIVIC_AQ_MAIN_CHIEFDOM",
     "icon": "images/civics/chiefdom.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_YAXCHE",
   "name": "Yaxche",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "icon": "images/civics/citizenship.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_POIEISIS",
   "name": "Poiesis",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP] in Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or [B]+2 [icon:YIELD_CULTURE][/B] in Ecstatic Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 750,
   "unlockedBy": [
    {
     "civic": "Philosophy",
     "civicId": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "icon": "images/civics/philosophy.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_COMMANDERIES",
   "name": "Commanderies",
   "text": "[B]+20% [icon:YIELD_GOLD][/B] towards upgrading Units.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Tactics",
     "civicId": "NODE_CIVIC_AQ_MAIN_TACTICS",
     "icon": "images/civics/tactics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_FAJIA",
   "name": "Fajia",
   "text": "[B]+1[/B] War Support on Wars you Declare.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 450,
   "unlockedBy": [
    {
     "civic": "Organized Military",
     "civicId": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
     "icon": "images/civics/organized_military.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ANNONA",
   "name": "Annona",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Food Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 245,
   "unlockedBy": [
    {
     "civic": "Public Life",
     "civicId": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
     "icon": "images/civics/public_life.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HANGJIAO",
   "name": "Hangjiao",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Production Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 600,
   "unlockedBy": [
    {
     "civic": "Skilled Trades",
     "civicId": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
     "icon": "images/civics/skilled_trades.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BANDITRY",
   "name": "Banditry",
   "text": "[B]-5 [icon:YIELD_GOLD][/B] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_BARBARIAN_MERCENARIES",
   "name": "Barbarian Mercenaries",
   "text": "[B]+100% [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DECENTRALIZATION",
   "name": "Decentralization",
   "text": "[B]-75% [icon:YIELD_GOLD][/B] and [icon:YIELD_FOOD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Specialization.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_INFERIOR_TACTICS",
   "name": "Inferior Tactics",
   "text": "[B]-6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_REBELLIOUS_COMMANDERS",
   "name": "Rebellious Commanders",
   "text": "[B]-1 [icon:YIELD_HAPPINESS][/B] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_TRIBUTE",
   "name": "Tribute",
   "text": "[B]-10 [icon:YIELD_GOLD][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_HEALING_CULTS",
   "name": "Healing Cults",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] on Altars in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] but [B]-10 [icon:YIELD_GOLD][/B] on Altars.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_PROGNOSIS",
   "name": "Prognosis",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] but [B]-4 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Science Buildings.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_MIASMA",
   "name": "Miasma",
   "text": "Gain [B]1 [icon:UNIT_MIGRANT] Migrant[/B] when a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] is [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] but [B]-25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_PROSECUTE_APOSTATES",
   "name": "Prosecute Apostates",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] but [B]-5 [icon:YIELD_HAPPINESS][/B] in Settlements with no Altar.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RECRUITMENT_SHORTFALLS",
   "name": "Recruitment Shortfalls",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] but -15 Healing on all Units.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_REPUBLIC_UNHAPPINESS",
   "name": "Poleis",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] more than 9 tiles away from your [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DESPOTISM_UNHAPPINESS",
   "name": "Zhuhou",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] without a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_WALL_TOOLTIP]Wall[/TIP] Fortification.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_OLIGARCHY_UNHAPPINESS",
   "name": "Decadence",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with unfilled [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_INCOMPETENT_MINISTERS",
   "name": "Incompetent Ministers",
   "text": "[B]-1 [icon:YIELD_DIPLOMACY][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] you founded.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_SUPPRESS_LOCAL_TRADITIONS",
   "name": "Suppress Local Traditions",
   "text": "[B]-3 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] you did not found.",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_AMBITIOUS_GOVERNORS",
   "name": "Ambitious Governors",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_PROVINCIAL_SCORN",
   "name": "Provincial Scorn",
   "text": "[B]-6 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_CAPITAL_UNHAPPINESS",
   "name": "Independent Nobility",
   "text": "[B]-10 [icon:YIELD_HAPPINESS][/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_TRADITION_LOYALTY_SETTLEMENT_CAP",
   "name": "Stagnation",
   "text": "[B]-1 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "crisis",
   "age": "Antiquity",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_CULTURAL_01",
   "name": "Classical Revival",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Jubilee",
   "text": "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "Spy Network",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_ECONOMIC_01",
   "name": "Supply and Demand",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_TALL",
   "name": "Municipal Charters",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_EXPANSIONIST_01_WIDE",
   "name": "Yanakuna",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_MILITARISTIC_01",
   "name": "Professional Army",
   "text": "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EX_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Alchemy",
   "text": "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/icons/civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CITY_OF_PEACE",
   "name": "City of Peace Tradition II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "City of Peace Tradition I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Round City",
     "civicId": "NODE_CIVIC_EX_ABBASID_ROUND_CITY",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COMPENDIOUS_BOOK_I",
   "name": "City of Peace Tradition I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Abbasid Origins",
     "civicId": "NODE_CIVIC_AQ_ABBASID_ORIGINS",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_COMPENDIOUS_BOOK_II",
   "name": "Compendious Book Tradition",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Al-Jabr",
     "civicId": "NODE_CIVIC_EX_ABBASID_AL_JABR",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SALES_AND_TRADE_I",
   "name": "Sales and Trade I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mawla",
     "civicId": "NODE_CIVIC_EX_ABBASID_MAWLA",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SALES_AND_TRADE_II",
   "name": "Sales and Trade II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "Sales and Trade I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Abbasid Modernization",
     "civicId": "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
     "icon": "images/civics/abbasid_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ABBASID_SYNCRETISM_ANTIQUITY",
   "name": "Rasool I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ABBASID_SYNCRETISM_MODERN",
   "name": "Rasool II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ABBASID",
   "civName": "Abbasid",
   "attr": "",
   "obsoletes": "Rasool I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DEVAKOSHTA_I",
   "name": "Devakoshta I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Chola Origins",
     "civicId": "NODE_CIVIC_AQ_CHOLA_ORIGINS",
     "icon": "images/civics/chola_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DEVAKOSHTA_II",
   "name": "Devakoshta II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]. [B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:DIPLOMATIC_ACTION] Diplomatic Actions with other Leaders if you have at least [B]5 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Devakoshta I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Kanakam",
     "civicId": "NODE_CIVIC_EX_CHOLA_KANAKAM",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MARAKKALAM",
   "name": "Marakkalam",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Heavy Naval Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Digvijaya",
     "civicId": "NODE_CIVIC_EX_CHOLA_DIGVIJAYA",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ANGADI_I",
   "name": "Angadi I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Monsoon Winds",
     "civicId": "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS",
     "icon": "images/civics/chola_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ANGADI_II",
   "name": "Angadi II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+8 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Angadi I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Chola Modernization",
     "civicId": "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
     "icon": "images/civics/chola_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CHOLA_SYNCRETISM_ANTIQUITY",
   "name": "Veera Banaju Dharma I",
   "text": "[B]+5 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+50% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CHOLA_SYNCRETISM_MODERN",
   "name": "Veera Banaju Dharma II",
   "text": "[B]+10 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+100% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CHOLA",
   "civName": "Chola",
   "attr": "",
   "obsoletes": "Veera Banaju Dharma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AHUPUA_A_I",
   "name": "Ahupua'a I",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ohana",
     "civicId": "NODE_CIVIC_EX_HAWAII_OHANA",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_AHUPUA_A_II",
   "name": "Ahupua'a II",
   "text": "[B]+6 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Ahupua'a I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Hawaiian Modernization",
     "civicId": "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_HO_OKUPU_I",
   "name": "Ho'okupu I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Hawaiian Origins",
     "civicId": "NODE_CIVIC_AQ_HAWAII_ORIGINS",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HO_OKUPU_II",
   "name": "Ho'okupu II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Ho'okupu I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "He'e nalu",
     "civicId": "NODE_CIVIC_EX_HAWAII_HE_E_NALU",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_KAPA",
   "name": "Kapa",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mana",
     "civicId": "NODE_CIVIC_EX_HAWAII_MANA",
     "icon": "images/civics/hawaii_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HAWAII_SYNCRETISM_ANTIQUITY",
   "name": "Hōkūle'a I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HAWAII_SYNCRETISM_MODERN",
   "name": "Hōkūle'a II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast. [B]+4 [icon:YIELD_CULTURE][/B] on Volcanoes.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HAWAII",
   "civName": "Hawai'i",
   "attr": "",
   "obsoletes": "Hōkūle'a I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QULLQA_I",
   "name": "Qullqa I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Ayllu",
     "civicId": "NODE_CIVIC_EX_INCA_AYLLU",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_QULLQA_II",
   "name": "Qullqa II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Qullqa I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Incan Modernization",
     "civicId": "NODE_CIVIC_MO_INCAN_MODERNIZATION",
     "icon": "images/civics/incan_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QUIPU",
   "name": "Quipu",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] gain [B]+0.5 [icon:YIELD_GOLD][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Urban Population[/TIP] and [B]+0.5 [icon:YIELD_PRODUCTION][/B] for every [icon:YIELD_POPULATION] Rural Population.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Qhapaq Ñan",
     "civicId": "NODE_CIVIC_EX_INCA_QHAPAQ_NAN",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TIRAKUNA_I",
   "name": "Tirakuna I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Incan Origins",
     "civicId": "NODE_CIVIC_AQ_INCAN_ORIGINS",
     "icon": "images/civics/incan_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TIRAKUNA_II",
   "name": "Tirakuna II",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Tirakuna I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mit'a",
     "civicId": "NODE_CIVIC_EX_INCA_MITA",
     "icon": "images/civics/incan_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_INCA_SYNCRETISM_ANTIQUITY",
   "name": "Huaca I",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_INCA_SYNCRETISM_MODERN",
   "name": "Huaca II",
   "text": "[B]+15% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_INCA",
   "civName": "Inca",
   "attr": "",
   "obsoletes": "Huaca I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PANJI",
   "name": "Panji",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Wayang",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_WAYANG",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_NEGARAKERTAGAMA_I",
   "name": "Negarakertagama I",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Aliran Kepercayaan",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_NEGARAKERTAGAMA_II",
   "name": "Negarakertagama II",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Negarakertagama I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Majapahit Modernization",
     "civicId": "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AWISAN_DALEM_I",
   "name": "Awisan Dalem I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Majapahit Origins",
     "civicId": "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AWISAN_DALEM_II",
   "name": "Awisan Dalem II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Awisan Dalem I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Nusantara",
     "civicId": "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA",
     "icon": "images/civics/majapahit_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAJAPAHIT_SYNCRETISM_ANTIQUITY",
   "name": "Subak I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+10% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MAJAPAHIT_SYNCRETISM_MODERN",
   "name": "Subak II",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MAJAPAHIT",
   "civName": "Majapahit",
   "attr": "",
   "obsoletes": "Subak I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BAOJIA_I",
   "name": "Baojia I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ming Origins",
     "civicId": "NODE_CIVIC_AQ_MING_ORIGINS",
     "icon": "images/civics/ming_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BAOJIA_II",
   "name": "Baojia II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. This becomes +2 in [icon:YIELD_CITIES] Cities other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Baojia I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Lijia",
     "civicId": "NODE_CIVIC_EX_MING_LIJIA",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DIVINE_ENGINE_DIVISION",
   "name": "Divine Engine Division",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit. [B]+3 [icon:Action_Ranged] Ranged Combat Strength[/B] to [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] adjacent to another Ranged Unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Nine Garrisons",
     "civicId": "NODE_CIVIC_EX_MING_NINE_GARRISONS",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GRAND_SECRETARIAT_I",
   "name": "Grand Secretariat I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+2 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Da Ming Lu",
     "civicId": "NODE_CIVIC_EX_MING_DA_MING_LU",
     "icon": "images/civics/ming_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GRAND_SECRETARIAT_II",
   "name": "Grand Secretariat II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+3 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Grand Secretariat I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ming Modernization",
     "civicId": "NODE_CIVIC_MO_MING_MODERNIZATION",
     "icon": "images/civics/ming_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MING_SYNCRETISM_ANTIQUITY",
   "name": "Chaogong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MING_SYNCRETISM_MODERN",
   "name": "Chaogong II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MING",
   "civName": "Ming",
   "attr": "",
   "obsoletes": "Chaogong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BAGHATUR_I",
   "name": "Baghatur I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mongolia Origins",
     "civicId": "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BAGHATUR_II",
   "name": "Baghatur II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Baghatur I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Four Hounds",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GEREGE",
   "name": "Gerege",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ulus",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_ULUS",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_JARLIG_I",
   "name": "Jarlig I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Yassa",
     "civicId": "NODE_CIVIC_EX_MONGOLIA_YASSA",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_JARLIG_II",
   "name": "Jarlig II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Jarlig I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Mongolia Modernization",
     "civicId": "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
     "icon": "images/civics/mongolian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MONGOLIA_SYNCRETISM_ANTIQUITY",
   "name": "Jarugachi I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MONGOLIA_SYNCRETISM_MODERN",
   "name": "Jarugachi II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+50% [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] from [TIP:LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP]Flanking[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MONGOLIA",
   "civName": "Mongolia",
   "attr": "",
   "obsoletes": "Jarugachi I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_JURE_I",
   "name": "Juré I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Norman Origins",
     "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "icon": "images/civics/norman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JURE_II",
   "name": "Juré II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+2 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Juré I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Common Law",
     "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PALISADING_I",
   "name": "Palisading I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Norman Origins",
     "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
     "icon": "images/civics/norman_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PALISADING_II",
   "name": "Palisading II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Palisading I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Consuetudines et Justicie",
     "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_FAMILIA_REGIS",
   "name": "Familia Regis",
   "text": "The [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] gains a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Consuetudines et Justicie",
     "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SERVITIUM_DEBITUM",
   "name": "Servitium Debitum",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Cavalry Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Common Law",
     "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BAYEUX_TAPESTRY_I",
   "name": "Bayeux Tapestry I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Domesday Book",
     "civicId": "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK",
     "icon": "images/civics/norman_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BAYEUX_TAPESTRY_II",
   "name": "Bayeux Tapestry II",
   "text": "[B]+6 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Bayeux Tapestry I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Norman Modernization",
     "civicId": "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
     "icon": "images/civics/norman_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NORMAN_SYNCRETISM_ANTIQUITY",
   "name": "Sauveté I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_NORMAN_SYNCRETISM_MODERN",
   "name": "Sauveté II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NORMAN",
   "civName": "Norman",
   "attr": "",
   "obsoletes": "Sauveté I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ISA",
   "name": "Isa",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for all Units on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor[/TIP] and Navigable Rivers do not end Unit [icon:Action_Move] Movement.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Hi-Koi",
     "civicId": "NODE_CIVIC_EX_SONGHAI_HI_KOI",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MUD_BRICK_I",
   "name": "Mud Brick I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ships of the Desert",
     "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MUD_BRICK_II",
   "name": "Mud Brick II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Mud Brick I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/songhai_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TIMBUKTU_I",
   "name": "Timbuktu I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ships of the Desert",
     "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TIMBUKTU_II",
   "name": "Timbuktu II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Timbuktu I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Songhai Modernization",
     "civicId": "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
     "icon": "images/civics/songhai_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_WAKIA_I",
   "name": "Wakia I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Songhai Origins",
     "civicId": "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
     "icon": "images/civics/songhai_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_WAKIA_II",
   "name": "Wakia II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Wakia I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Kanta",
     "civicId": "NODE_CIVIC_EX_SONGHAI_KANTA",
     "icon": "images/civics/songhai_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SONGHAI_SYNCRETISM_ANTIQUITY",
   "name": "Charismatic Kingship I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SONGHAI_SYNCRETISM_MODERN",
   "name": "Charismatic Kingship II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SONGHAI",
   "civName": "Songhai",
   "attr": "",
   "obsoletes": "Charismatic Kingship I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CONQUISTA",
   "name": "Conquista",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP], or [B]+5 [icon:NAR_REW_COMBAT][/B] Combat Strength for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Council of the Indies",
     "civicId": "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CERRO_RICO_I",
   "name": "Cerro Rico I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Spain Origins",
     "civicId": "NODE_CIVIC_AQ_SPAIN_ORIGINS",
     "icon": "images/civics/spanish_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CERRO_RICO_II",
   "name": "Cerro Rico II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], or [B]+3 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Cerro Rico I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "New World Riches",
     "civicId": "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GREAT_AND_MOST_FORTUNATE_NAVY_I",
   "name": "Great and Most Fortunate Navy I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Armada",
     "civicId": "NODE_CIVIC_EX_SPAIN_ARMADA",
     "icon": "images/civics/spanish_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GREAT_AND_MOST_FORTUNATE_NAVY_II",
   "name": "Great and Most Fortunate Navy II",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Great and Most Fortunate Navy I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Spain Modernization",
     "civicId": "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
     "icon": "images/civics/spanish_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SPAIN_SYNCRETISM_ANTIQUITY",
   "name": "Corregidor I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SPAIN_SYNCRETISM_MODERN",
   "name": "Corregidor II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SPAIN",
   "civName": "Spain",
   "attr": "",
   "obsoletes": "Corregidor I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BOURGEOISIE",
   "name": "Bourgeoisie",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in your [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CHARTERS",
   "name": "Charters",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Priesthood",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Colonialism",
     "civicId": "NODE_CIVIC_EX_MAIN_COLONIALISM",
     "icon": "images/civics/colonialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CHIVALRY",
   "name": "Chivalry",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COLONIAL_SURPLUS",
   "name": "Colonial Surplus",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Colonialism",
     "civicId": "NODE_CIVIC_EX_MAIN_COLONIALISM",
     "icon": "images/civics/colonialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COMMISSIONED_OFFICERS",
   "name": "Commissioned Officers",
   "text": "[B]+30%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]Commander Experience[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for Fleets and Armies.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COMMUNE",
   "name": "Commune",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP]. [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Piety",
     "civicId": "NODE_CIVIC_EX_MAIN_PIETY",
     "icon": "images/civics/piety.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CONSTITUTION",
   "name": "Constitution",
   "text": "[B]+25% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintaining[/TIP] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Bureaucracy",
     "civicId": "NODE_CIVIC_EX_MAIN_BUREAUCRACY",
     "icon": "images/civics/bureaucracy.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DE_FACTO",
   "name": "De Facto",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Units gain +5 [icon:Action_Heal] Healing.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DE_JURE",
   "name": "De Jure",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DIVINE_RIGHT",
   "name": "Divine Right",
   "text": "[B]+10 [icon:YIELD_HAPPINESS][/B] and [B]+4 [icon:YIELD_DIPLOMACY][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Oratory",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ENLIGHTENMENT",
   "name": "Enlightenment",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_EVANGELISM",
   "name": "Evangelism",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Units[/TIP]. +1 charge for [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Survey",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HEQIN",
   "name": "Heqin",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Diplomatic Service",
     "civicId": "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE",
     "icon": "images/civics/diplomatic_service.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_INDENTURE",
   "name": "Indenture",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Castes",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_LEVIES",
   "name": "Levies",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Conscription",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Authority",
     "civicId": "NODE_CIVIC_EX_MAIN_AUTHORITY",
     "icon": "images/civics/authority.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MARITIME_LAW",
   "name": "Maritime Law",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Economics",
     "civicId": "NODE_CIVIC_EX_MAIN_ECONOMICS",
     "icon": "images/civics/economics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_METROPOLE",
   "name": "Metropole",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP]. +10 Range for all [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PATRONAGE",
   "name": "Patronage",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RATIONALISM",
   "name": "Rationalism",
   "text": "[B]+15% [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Reformation",
     "civicId": "NODE_CIVIC_EX_BRANCH_REFORMATION",
     "icon": "images/civics/reformation.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_REGULARS",
   "name": "Regulars",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RELIGIOUS_ORDERS",
   "name": "Religious Orders",
   "text": "[B]+15% [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] in your own [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] that are converted to your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Reformation",
     "civicId": "NODE_CIVIC_EX_BRANCH_REFORMATION",
     "icon": "images/civics/reformation.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RENAISSANCE",
   "name": "Renaissance",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Inspiration",
     "civicId": "NODE_CIVIC_EX_MAIN_INSPIRATION",
     "icon": "images/civics/inspiration.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TARIFFS",
   "name": "Tariffs",
   "text": "[B]+50% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP], but [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TRADE_WINDS",
   "name": "Trade Winds",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [icon:UNIT_MERCHANT] Merchants.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Mercantilism",
     "civicId": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
     "icon": "images/civics/mercantilism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_UPOSATHA",
   "name": "Uposatha",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Rites and Rituals",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_VASSALAGE",
   "name": "Vassalage",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Authority",
     "civicId": "NODE_CIVIC_EX_MAIN_AUTHORITY",
     "icon": "images/civics/authority.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_YEOMANRY",
   "name": "Yeomanry",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "policy",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [
    "Modern"
   ],
   "cost": 0,
   "unlockedBy": [
    {
     "civic": "Social Class",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS",
     "icon": "images/civics/social_class.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MARCHER_LORDS",
   "name": "Marcher Lords",
   "text": "[B]+2 [icon:YIELD_CULTURE] Culture[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] without a Growing Focus, or +4 in Joyous or happier Towns without a Growing Focus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1300,
   "unlockedBy": [
    {
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "icon": "images/civics/society.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAHAKRUNG",
   "name": "Mahakrung",
   "text": "[B]+5 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], or [B]+15 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] if it's Ecstatic.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "icon": "images/civics/sovereignty.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PRIMITIVE_ACCUMULATION",
   "name": "Primitive Accumulation",
   "text": "[B]+2 [icon:YIELD_SCIENCE] Science[/B] on [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards constructing [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 900,
   "unlockedBy": [
    {
     "civic": "Mercantilism",
     "civicId": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
     "icon": "images/civics/mercantilism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TEQUITL",
   "name": "Tequitl",
   "text": "+10 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [B]+2 [icon:YIELD_SCIENCE] Science[/B] on [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you initiate.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2100,
   "unlockedBy": [
    {
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "icon": "images/civics/imperialism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DARGAH",
   "name": "Dargah",
   "text": "[B]+2 [icon:YIELD_FOOD] Food[/B] and [B][icon:YIELD_HAPPINESS] Happiness[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_VINAYA",
   "name": "Vinaya",
   "text": "[B]+2 [icon:YIELD_GOLD] Gold[/B] and [B][icon:YIELD_DIPLOMACY] Influence[/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 700,
   "unlockedBy": [
    {
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "icon": "images/civics/theology.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CONSCRIPTION_RIOTS",
   "name": "Conscription Riots",
   "text": "[B]-10 [icon:YIELD_HAPPINESS][/B] in all [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_NOUVEAU_RICHE",
   "name": "Nouveau Riche",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_GENDARMERIE",
   "name": "Gendarmerie",
   "text": "[B]-4 [icon:YIELD_HAPPINESS][/B] in each [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_IMPOVERISHED_NOBILITY",
   "name": "Impoverished Nobility",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_OPPRESSIVE_TARIFFS",
   "name": "Oppressive Tariffs",
   "text": "[B]-1 [icon:YIELD_GOLD][/B] per [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialist[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_PURGED_OFFICER_CORP",
   "name": "Purged Officer Corp",
   "text": "[B]-6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] on all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_REVOLUTIONARY_TRIBUNAL",
   "name": "Revolutionary Tribunal",
   "text": "[B]-2 [icon:SETTLEMENT_LIMIT][/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_EXEMPTIONS",
   "name": "Religious Tax Exemptions",
   "text": "[B]-2 [icon:YIELD_GOLD][/B] per displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_STRICT_CENSORSHIP",
   "name": "Strict Censorship",
   "text": "[B]-10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_TAX_FARMING",
   "name": "Tax Farming",
   "text": "[B]-50% [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_WEAK_BUREAUCRACY",
   "name": "Weak Bureaucracy",
   "text": "[B]-8 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DIVINE_PUNISHMENT",
   "name": "Divine Punishment",
   "text": "[B]+5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_PLAGUE] [TIP:LOC_PEDIA_CONCEPTS_INFECTED_TOOLTIP]Infected[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. These Settlements gain a [icon:UNIT_MIGRANT] Migrant when [icon:YIELD_PLAGUE] Infected.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DIVINE_MERCY",
   "name": "Divine Mercy",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP] are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Minor Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_HUMORALISM",
   "name": "Humoralism",
   "text": "Gain [B]100 [icon:YIELD_SCIENCE][/B] (Scales by Game Speed) when [icon:UNIT_PHYSICIAN] Physicians Treat the Sick on a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP] with a Hospital.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_PLAGUE_CULTS",
   "name": "Plague Cults",
   "text": "Gain [B]100 [icon:YIELD_CULTURE][/B] (Scales by Game Speed) when [icon:UNIT_PHYSICIAN] Physicians Treat the Sick on a [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]District[/TIP] with a Temple.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_LAZARETTOS",
   "name": "Lazarettos",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in Coastal [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Dungeon are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Major Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_CORDON_SANITAIRE",
   "name": "Cordon Sanitaire",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]stationed[/TIP] [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] are not [icon:DAMAGED] Damaged by [icon:YIELD_PLAGUE] Major Outbreaks.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_TOLERANCE",
   "name": "Religious Tolerance",
   "text": "[B]+8 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that do not follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. -2 Charges on new [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_ZEAL",
   "name": "Religious Zeal",
   "text": "[B]-8 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] that do not follow your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. +2 Charges on new [icon:UNIT_MISSIONARY] Missionaries.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_ESPIONAGE",
   "name": "Schism",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:ESPIONAGE] Convert [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]-4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_HOMELANDS_TOOLTIP]Homelands[/TIP] Settlements.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_MERCHANTS",
   "name": "Jizya",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP]. [B]-4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP] Settlements.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_RELIGIOUS_MOVEMENT",
   "name": "Bhanaka",
   "text": "All [icon:UNIT_MISSIONARY] Missionaries in your territory gain [B]+1 [icon:Action_Move] Movement[/B].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_IUS_REFORMANDI",
   "name": "Ius Reformandi",
   "text": "When you convert a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] you own, gain a Migrant and Damage [B]3[/B] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in that Settlement.",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_LITURGICAL_DISPUTES",
   "name": "Liturgical Disputes",
   "text": "[B]-4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "crisis",
   "age": "Exploration",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_CULTURAL_01",
   "name": "Romanticism",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Cultural",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_HAPPINESS",
   "name": "Vaudeville",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_DIPLOMATIC_01_INFLUENCE",
   "name": "The Great Game",
   "text": "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Diplomatic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_ECONOMIC_01",
   "name": "Gold Standard",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Economic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_TALL",
   "name": "Developmentalism",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_EXPANSIONIST_01_WIDE",
   "name": "Industrial Agriculture",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Expansionist",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_MILITARISTIC_01",
   "name": "Force Structuring",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Militaristic",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MO_ATTRIBUTE_SCIENTIFIC_01",
   "name": "Location Theory",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "Scientific",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/icons/civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GOLD_RUSH_I",
   "name": "Gold Rush I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "American Origins",
     "civicId": "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
     "icon": "images/civics/american_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GOLD_RUSH_II",
   "name": "Gold Rush II",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Gold Rush I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Yankee Ingenuity",
     "civicId": "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ROBBER_BARON_I",
   "name": "Robber Baron I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "American Renaissance",
     "civicId": "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
     "icon": "images/civics/american_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ROBBER_BARON_II",
   "name": "Robber Baron II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Robber Baron I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Captains of Industry",
     "civicId": "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_LEND_LEASE",
   "name": "Lend-Lease",
   "text": "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars, or +2 if joining a [icon:WAR] War with an [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Ally[/TIP]. [B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when fighting a [icon:WAR] War in which your [icon:WAR_SUPPORT] War Support is higher than your opponent.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Wartime Manufacturing",
     "civicId": "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING",
     "icon": "images/civics/american_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AMERICA_SYNCRETISM_ANTIQUITY",
   "name": "Land of Opportunity I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_AMERICA_SYNCRETISM_EXPLORATION",
   "name": "Land of Opportunity II",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_PRODUCTION][/B] on Mines, Clay Pits, Quarries, Woodcutters, and Oil Rigs in [icon:TOWN_FOCUS] Mining [icon:YIELD_TOWNS] Towns, [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_AMERICA",
   "civName": "America",
   "attr": "",
   "obsoletes": "Land of Opportunity I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CLAN_SOCIETY_I",
   "name": "Clan Society I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/civics/buganda_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CLAN_SOCIETY_II",
   "name": "Clan Society II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Clan Society I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "'Nnalubaale",
     "civicId": "NODE_CIVIC_MO_BUGANDA_NNALUBAALE",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_INTERLACUSTRINE_I",
   "name": "Interlacustrine I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain Adjacency from Lakes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Bugandan Origins",
     "civicId": "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
     "icon": "images/civics/buganda_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_INTERLACUSTRINE_II",
   "name": "Interlacustrine II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain an Adjacency with Lakes based on all the Building's Yields.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Interlacustrine I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Nyanza",
     "civicId": "NODE_CIVIC_MO_BUGANDA_NYANZA",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NG_OMA_I",
   "name": "Ng'oma I",
   "text": "[B]+4 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Bugandan Renaissance",
     "civicId": "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
     "icon": "images/civics/buganda_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_NG_OMA_II",
   "name": "Ng'oma II",
   "text": "[B]+8 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Ng'oma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Blutabaalo",
     "civicId": "NODE_CIVIC_MO_BUGANDA_BLUTABAALO",
     "icon": "images/civics/buganda_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BUGANDA_SYNCRETISM_ANTIQUITY",
   "name": "Ebika I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BUGANDA_SYNCRETISM_EXPLORATION",
   "name": "Ebika II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BUGANDA",
   "civName": "Buganda",
   "attr": "",
   "obsoletes": "Ebika I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BATAILLON_CARRE",
   "name": "Bataillon-Carré",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] gain the Swift ability, allowing them to ignore [TIP:LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP]Zone of Control[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Grande Armée",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_COCORICO_I",
   "name": "Cocorico I",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 15% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "French Imperial Renaissance",
     "civicId": "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
     "icon": "images/civics/french_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COCORICO_II",
   "name": "Cocorico II",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 25% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "Cocorico I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Voie Triomphale",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STYLE_EMPIRE_I",
   "name": "Style Empire I",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 15% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "French Imperial Origins",
     "civicId": "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
     "icon": "images/civics/french_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_STYLE_EMPIRE_II",
   "name": "Style Empire II",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "Style Empire I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Belle Époque",
     "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE",
     "icon": "images/civics/french_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FRENCH_EMPIRE_SYNCRETISM_ANTIQUITY",
   "name": "De l'Esprit des Loix I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_FRENCH_EMPIRE_SYNCRETISM_EXPLORATION",
   "name": "De l'Esprit des Loix II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "De l'Esprit des Loix I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ROBESPIERRE_REIGN_OF_TERROR",
   "name": "Reign of Terror",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP], but [B]-25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_FRENCH_EMPIRE",
   "civName": "French Empire",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_SHUSEI_KOKUBO_I",
   "name": "Shusei Kokubō I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Meiji Origins",
     "civicId": "NODE_CIVIC_AQ_MEIJI_ORIGINS",
     "icon": "images/civics/meiji_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SHUSEI_KOKUBO_II",
   "name": "Shusei Kokubō II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. Military and Science Buildings receive an adjacency for Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "Shusei Kokubō I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Supreme War Council",
     "civicId": "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FUKOKU_KYOHEI_I",
   "name": "Fukoku Kyōhei I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. When you train a Naval Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Meiji Renaissance",
     "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "icon": "images/civics/meiji_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_FUKOKU_KYOHEI_II",
   "name": "Fukoku Kyōhei II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Aircraft[/TIP] Units. When you train a Naval or Aircraft Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "Fukoku Kyōhei I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Bunmei Kaika",
     "civicId": "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_O_YATOI_GAIKOKUJIN_I",
   "name": "O-yatoi Gaikokujin I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Meiji Renaissance",
     "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
     "icon": "images/civics/meiji_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_O_YATOI_GAIKOKUJIN_II",
   "name": "O-yatoi Gaikokujin II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Oath in Five Articles",
     "civicId": "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_KOKUTAI",
   "name": "Kōkūtai",
   "text": "[B]+6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Aircraft attacking an enemy Unit adjacent to a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Kantai Kessen",
     "civicId": "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN",
     "icon": "images/civics/meiji_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MEIJI_SYNCRETISM_ANTIQUITY",
   "name": "Kimi I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MEIJI_SYNCRETISM_EXPLORATION",
   "name": "Kimi II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEIJI",
   "civName": "Meiji Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ORDER_AND_PROGRESS_I",
   "name": "Order and Progress I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mexico Origins",
     "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ORDER_AND_PROGRESS_II",
   "name": "Order and Progress II",
   "text": "[B]+4 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Order and Progress I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Tuxtepec",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_LA_REFORMA_I",
   "name": "La Reforma I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mexico Renaissance",
     "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "icon": "images/civics/mexico_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_LA_REFORMA_II",
   "name": "La Reforma II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "La Reforma I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Ayutla",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CORRIDOS",
   "name": "Corridos",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Planes Políticos",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CRY_OF_DOLORES",
   "name": "Cry of Dolores",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] in friendly territory for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Plan of Iguala",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MEXICO_SYNCRETISM_ANTIQUITY",
   "name": "Campesinos I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +5 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MEXICO_SYNCRETISM_EXPLORATION",
   "name": "Campesinos II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +10 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Campesinos I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MURALISMO_I",
   "name": "Muralismo I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mexico Origins",
     "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MURALISMO_II",
   "name": "Muralismo II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Muralismo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mexico Renaissance",
     "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
     "icon": "images/civics/mexico_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MURALISMO_III",
   "name": "Muralismo III",
   "text": "[B]+6 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MEXICO",
   "civName": "Mexico",
   "attr": "",
   "obsoletes": "Muralismo II",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Planes Políticos",
     "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
     "icon": "images/civics/mexico_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GUNPOWDER_EMPIRE",
   "name": "Gunpowder Empire",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Mansabdari",
     "civicId": "NODE_CIVIC_MO_MUGHAL_MANSABDARI",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_JINSI_KAMIL",
   "name": "Jins-i Kamil",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms for each adjacent Plantation, and on Plantations for each adjacent Farm.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Zabt",
     "civicId": "NODE_CIVIC_MO_MUGHAL_ZABT",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MAYURASANA_I",
   "name": "Mayūrāsana I",
   "text": "[B]+5% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Mughal Renaissance",
     "civicId": "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
     "icon": "images/civics/mughal_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAYURASANA_II",
   "name": "Mayūrāsana II",
   "text": "[B]+10% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Mayūrāsana I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Gardens of Paradise",
     "civicId": "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QILACHAS_I",
   "name": "Qilachas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Mughal Origins",
     "civicId": "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
     "icon": "images/civics/mughal_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_QILACHAS_II",
   "name": "Qilachas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Qilachas I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Jagir",
     "civicId": "NODE_CIVIC_MO_MUGHAL_JAGIR",
     "icon": "images/civics/mughal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MUGHAL_SYNCRETISM_ANTIQUITY",
   "name": "Karkhanas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MUGHAL_SYNCRETISM_EXPLORATION",
   "name": "Karkhanas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_MUGHAL",
   "civName": "Mughal",
   "attr": "",
   "obsoletes": "Karkhanas I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COKING_I",
   "name": "Coking I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Prussian Origins",
     "civicId": "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
     "icon": "images/civics/prussian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_COKING_II",
   "name": "Coking II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Coking I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ruhr",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_RUHR",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_REALPOLITIK_I",
   "name": "Realpolitik I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Prussian Renaissance",
     "civicId": "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
     "icon": "images/civics/prussian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_REALPOLITIK_II",
   "name": "Realpolitik II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Realpolitik I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Ems Dispatch",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MEDIATIZATION",
   "name": "Mediatization",
   "text": "[B]+10% [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Zollverein",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_IRON_CROSS",
   "name": "Iron Cross",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] of a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP]Commendation[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Bewegungskrieg",
     "civicId": "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG",
     "icon": "images/civics/prussian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PRUSSIA_SYNCRETISM_ANTIQUITY",
   "name": "Tugenden I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PRUSSIA_SYNCRETISM_EXPLORATION",
   "name": "Tugenden II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PRUSSIA",
   "civName": "Prussia",
   "attr": "",
   "obsoletes": "Tugenden I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BANNER_ARMY_I",
   "name": "Banner Army I",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qing Renaissance",
     "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
     "icon": "images/civics/qing_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BANNER_ARMY",
   "name": "Banner Army II",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Banner Army I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Stabilizing Frontier",
     "civicId": "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_COHONG_I",
   "name": "Cohong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qing Renaissance",
     "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
     "icon": "images/civics/qing_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_COHONG_II",
   "name": "Cohong II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Cohong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Open Customs",
     "civicId": "NODE_CIVIC_MO_QING_OPEN_CUSTOMS",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FARMLAND_ASSESSMENT",
   "name": "Farmland Assessment",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Kang Xi Tax Reformation",
     "civicId": "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TUN_KEN_I",
   "name": "Tun Ken I",
   "text": "[B]+25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Qing Origins",
     "civicId": "NODE_CIVIC_AQ_QING_ORIGINS",
     "icon": "images/civics/qing_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TUN_KEN_II",
   "name": "Tun Ken II",
   "text": "[B]+50% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Tun Ken I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Ten Great Campaigns",
     "civicId": "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS",
     "icon": "images/civics/qing_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QING_SYNCRETISM_ANTIQUITY",
   "name": "Ethnic Stratification I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_QING_SYNCRETISM_EXPLORATION",
   "name": "Ethnic Stratification II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] founded by you.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QING",
   "civName": "Qing",
   "attr": "",
   "obsoletes": "Ethnic Stratification I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GENERAL_MOROZ_I",
   "name": "General Moroz I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Russian Origins",
     "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "icon": "images/civics/russian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GENERAL_MOROZ_II",
   "name": "General Moroz II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Enemy Units in your territory take double [icon:DAMAGED] Damage from Blizzards. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "General Moroz I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Samoderzhaviye",
     "civicId": "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ZAPADNICHESTVO_I",
   "name": "Západnichestvo I",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Russian Origins",
     "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
     "icon": "images/civics/russian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ZAPADNICHESTVO_II",
   "name": "Západnichestvo II",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] Cities.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Západnichestvo I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Table of Ranks",
     "civicId": "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_KRESTYANSKAYA_REFORMA_I",
   "name": "Krestyanskaya Reforma I",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B], but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Russian Renaissance",
     "civicId": "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
     "icon": "images/civics/russian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_KRESTYANSKAYA_REFORMA_II",
   "name": "Krestyanskaya Reforma II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Krestyanskaya Reforma I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Serfdom",
     "civicId": "NODE_CIVIC_MO_RUSSIA_SERFDOM",
     "icon": "images/civics/russian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_RUSSIA_SYNCRETISM_ANTIQUITY",
   "name": "Skazki I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_RUSSIA_SYNCRETISM_EXPLORATION",
   "name": "Skazki II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_RUSSIA",
   "civName": "Russia",
   "attr": "",
   "obsoletes": "Skazki I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MONTHON_I",
   "name": "Monthon I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Siamese Origins",
     "civicId": "NODE_CIVIC_AQ_SIAM_ORIGINS",
     "icon": "images/civics/siam_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MONTHON_II",
   "name": "Monthon II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+3 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "Monthon I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Sriwilai",
     "civicId": "NODE_CIVIC_MO_SIAM_SRIWILAI",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PRATHETSARAT",
   "name": "Prathetsarat",
   "text": "[B]+20% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions with [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Mandala",
     "civicId": "NODE_CIVIC_MO_SIAM_MANDALA",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SAKDINA",
   "name": "Sakdina",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Nine Gems",
     "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SAN_LAK_MUEANG_I",
   "name": "San Lak Mueang I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Siamese Renaissance",
     "civicId": "NODE_CIVIC_EX_SIAM_RENAISSANCE",
     "icon": "images/civics/siam_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SAN_LAK_MUEANG_II",
   "name": "San Lak Mueang II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "San Lak Mueang I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Nine Gems",
     "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
     "icon": "images/civics/siam_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SIAM_SYNCRETISM_ANTIQUITY",
   "name": "Chatusadom I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SIAM_SYNCRETISM_EXPLORATION",
   "name": "Chatusadom II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SIAM",
   "civName": "Siam",
   "attr": "",
   "obsoletes": "Chatusadom I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_AMBASSADORS",
   "name": "Ambassadors",
   "text": "[B]+6 [icon:YIELD_DIPLOMACY][/B] per turn.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CIVIL_ENGINEERING",
   "name": "Civil Engineering",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuilding[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Commune",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Modernity",
     "civicId": "NODE_CIVIC_MO_MAIN_MODERNIZATION",
     "icon": "images/civics/modernity.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DEMAGOGY",
   "name": "Demagogy",
   "text": "Gain [icon:YIELD_HAPPINESS] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Divine Right",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PEOPLES_ARMY",
   "name": "People's Army",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Land Military Units[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FREE_SPEECH",
   "name": "Free Speech",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Constitution",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Political Theory",
     "civicId": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
     "icon": "images/civics/political_theory.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_HUMANISM",
   "name": "Humanism",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Social Question",
     "civicId": "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION",
     "icon": "images/civics/social_question.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_LAISSEZ_FAIRE",
   "name": "Laissez-Faire",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+1 [icon:YIELD_HAPPINESS][/B] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Capitalism",
     "civicId": "NODE_CIVIC_MO_MAIN_CAPITALISM",
     "icon": "images/civics/capitalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MONOPOLIES",
   "name": "Monopolies",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a Factory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Metropole",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Capitalism",
     "civicId": "NODE_CIVIC_MO_MAIN_CAPITALISM",
     "icon": "images/civics/capitalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MATERIEL",
   "name": "Materiel",
   "text": "+10 [icon:Action_Heal] Healing for Units. [B]+1 [icon:Action_Move] Movement[/B] for Armies and Fleets.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TRENCHWORKS",
   "name": "Trenchworks",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:Action_Fortify] Fortified Units and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DRAFT",
   "name": "Draft",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing Units and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]maintenance[/TIP] for Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "Levies",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PROJECTION_OF_FORCE",
   "name": "Projection of Force",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Naval Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CULTURAL_IMPERIALISM",
   "name": "Cultural Imperialism",
   "text": "[B]+6 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Hegemony",
     "civicId": "NODE_CIVIC_MO_MAIN_HEGEMONY",
     "icon": "images/civics/hegemony.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SPHERE_OF_INFLUENCE",
   "name": "Sphere of Influence",
   "text": "Gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you have.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Hegemony",
     "civicId": "NODE_CIVIC_MO_MAIN_HEGEMONY",
     "icon": "images/civics/hegemony.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PRESERVATION_SOCIETIES",
   "name": "Preservation Societies",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_LAND_HERITAGE",
   "name": "Land Heritage",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIMPROVED] Mountains. [B]+6 [icon:YIELD_CULTURE][/B] on [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Natural History",
     "civicId": "NODE_CIVIC_MO_MAIN_NATURAL_HISTORY",
     "icon": "images/civics/natural_history.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SOCIAL_SCIENCE",
   "name": "Social Science",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] on [icon:SPECIALIST] Specialists.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Social Question",
     "civicId": "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION",
     "icon": "images/civics/social_question.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_LIVING_STANDARDS",
   "name": "Living Standards",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1600,
   "unlockedBy": [
    {
     "civic": "Modernity",
     "civicId": "NODE_CIVIC_MO_MAIN_MODERNIZATION",
     "icon": "images/civics/modernity.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GARRISON_STATE",
   "name": "Garrison State",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards adding [icon:WAR_SUPPORT] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_JINGOISM",
   "name": "Jingoism",
   "text": "[B]+5 [icon:NAR_REW_COMBAT] Combat Strength[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when attacking an opponent from a different ideology.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 7500,
   "unlockedBy": [
    {
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "icon": "images/civics/militarism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_EVIDENZBUREAU",
   "name": "Evidenzbureau",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards Counterspy [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] Actions.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Political Theory",
     "civicId": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
     "icon": "images/civics/political_theory.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CROWN_PROPERTIES",
   "name": "Crown Properties",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] on [icon:CITY_BUILDING_LIST] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_THINK_TANKS",
   "name": "Think-tanks",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards Projects, or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "icon": "images/civics/globalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ARMY_CORPS_OF_ENGINEERS",
   "name": "Army Corps of Engineers",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3750,
   "unlockedBy": [
    {
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "icon": "images/civics/nationalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PRODUCTIVE_FORCES_DETERMINISM",
   "name": "Productive Forces Determinism",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Communism",
     "civicId": "NODE_CIVIC_MO_BRANCH_COMMUNISM",
     "icon": "images/civics/communism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PROLETARIAT",
   "name": "Proletariat",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Communism",
     "civicId": "NODE_CIVIC_MO_BRANCH_COMMUNISM",
     "icon": "images/civics/communism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_COLLECTIVIZATION",
   "name": "Collectivization",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_FOOD] equal to your [icon:ATTRIBUTE_EXPANSIONIST] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Expansionist Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Centralism",
     "civicId": "NODE_CIVIC_MO_BRANCH_CENTRALISM",
     "icon": "images/civics/centralism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NAUKOGRAD",
   "name": "Naukograd",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_SCIENCE] equal to your [icon:ATTRIBUTE_SCIENTIFIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Scientific Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Centralism",
     "civicId": "NODE_CIVIC_MO_BRANCH_CENTRALISM",
     "icon": "images/civics/centralism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DEFENSE_OF_THE_MOTHERLAND",
   "name": "Defense of the Motherland",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in your own territory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_POLICE_STATE",
   "name": "Police State",
   "text": "[B]+8 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] while at [icon:WAR] War.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PUBLIC_WORKS",
   "name": "Public Works",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards completing [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Socialism",
     "civicId": "NODE_CIVIC_MO_BRANCH_SOCIALISM",
     "icon": "images/civics/socialism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FIRESIDE_CHATS",
   "name": "Fireside Chats",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Democracy",
     "civicId": "NODE_CIVIC_MO_BRANCH_DEMOCRACY",
     "icon": "images/civics/democracy.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SUFFRAGE",
   "name": "Suffrage",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Democracy",
     "civicId": "NODE_CIVIC_MO_BRANCH_DEMOCRACY",
     "icon": "images/civics/democracy.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_FREE_PRESS",
   "name": "Free Press",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_CULTURE] equal to your [icon:ATTRIBUTE_CULTURAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Cultural Attribute[/TIP]. [B]-5 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Liberalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_LIBERALISM",
     "icon": "images/civics/liberalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_WELFARE_STATE",
   "name": "Welfare State",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_HAPPINESS] equal to your [icon:ATTRIBUTE_POLITICAL] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Diplomatic Attribute[/TIP]. [B]-5 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Liberalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_LIBERALISM",
     "icon": "images/civics/liberalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_AVANT_GARDE",
   "name": "Avant Garde",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_HAPPINESS] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NEW_DEAL",
   "name": "New Deal",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_THEIR_FINEST_HOUR",
   "name": "Their Finest Hour",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Air Units[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Air Units in your own territory.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Progressivism",
     "civicId": "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM",
     "icon": "images/civics/progressivism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ASSEMBLY_LINE",
   "name": "Assembly Line",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-2 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Fascism",
     "civicId": "NODE_CIVIC_MO_BRANCH_FASCISM",
     "icon": "images/civics/fascism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DIRIGISME",
   "name": "Dirigisme",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]-3 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2750,
   "unlockedBy": [
    {
     "civic": "Fascism",
     "civicId": "NODE_CIVIC_MO_BRANCH_FASCISM",
     "icon": "images/civics/fascism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MARTIAL_LAW",
   "name": "Martial Law",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_PRODUCTION] equal to your [icon:ATTRIBUTE_MILITARISTIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Militaristic Attribute[/TIP]. [B]-5 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Radicalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_RADICALISM",
     "icon": "images/civics/radicalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PROPAGANDA",
   "name": "Propaganda",
   "text": "[icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain [icon:YIELD_GOLD] equal to your [icon:ATTRIBUTE_ECONOMIC] [TIP:LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP]Economic Attribute[/TIP]. [B]-5 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3250,
   "unlockedBy": [
    {
     "civic": "Radicalism",
     "civicId": "NODE_CIVIC_MO_BRANCH_RADICALISM",
     "icon": "images/civics/radicalism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MILITARY_INDUSTRIAL_COMPLEX",
   "name": "Military-Industrial Complex",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP], but [B]+1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for all Units.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STRATEGIC_RAILWAYS",
   "name": "Strategic Railways",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Rail Station.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SCORCHED_EARTH",
   "name": "Scorched Earth",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units when attacking. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] gain +25% yields and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging.",
   "slot": "policy",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 4500,
   "unlockedBy": [
    {
     "civic": "Absolutism",
     "civicId": "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM",
     "icon": "images/civics/absolutism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SYSTEM_OF_IDEAS",
   "name": "System of Ideas",
   "text": "[B]+50% [icon:YIELD_CULTURE][/B] towards researching [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civics[/TIP] that unlock an [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology but [B]-50% [icon:YIELD_HAPPINESS][/B] towards [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_COMMUNISM_UNIQUE",
   "name": "The First International",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most Factories.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DEMOCRACY_UNIQUE",
   "name": "Perpetual Peace",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_FASCISM_UNIQUE",
   "name": "Supremacy",
   "text": "Decrease [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with Leaders of the opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology with the most completed [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Tech[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Civic Masteries[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_WARTIME_INNOVATION",
   "name": "Wartime Innovation",
   "text": "Training a [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Unit[/TIP] grants [icon:YIELD_SCIENCE] equal to 25% of the Unit's cost while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_WAR_HEROES",
   "name": "War Heroes",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] per [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_WARTIME_ECONOMY",
   "name": "Wartime Economy",
   "text": "[B]+100% [icon:YIELD_GOLD][/B] towards purchasing Factories and Rail Stations while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_NATIONAL_PRESTIGE",
   "name": "National Prestige",
   "text": "[B]+10% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions per displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP]Artifact[/TIP] while at [icon:WAR] War with a Leader with an opposing [icon:NOTIFICATION_IDEOLOGY_CHOSEN] Ideology.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_LAST_RESERVES",
   "name": "Last Reserves",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] per [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_GRAND_ALLIANCE",
   "name": "Grand Alliance",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] and [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Units for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP] you ahve.",
   "slot": "crisis",
   "age": "Modern",
   "civ": "",
   "civName": "",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 99999,
   "unlockedBy": []
  },
  {
   "id": "TRADITION_DURANI",
   "name": "Dūrāni I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology Mastery[/TIP] completed this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Birtūtu",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MIHISTU",
   "name": "Miḫiṣtu I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Tupšarrūtu",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GIRRU",
   "name": "Girru I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+3 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Kibrāt Arba’i",
     "civicId": "NODE_CIVIC_AQ_ASSYRIA_KIBRAT_ARBA_I",
     "icon": "images/civics/assyria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MIHISTU_II",
   "name": "Miḫiṣtu II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Miḫiṣtu I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Assyrian Renaissance",
     "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "icon": "images/civics/assyria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GIRRU_II",
   "name": "Girru II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Girru I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Assyrian Renaissance",
     "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
     "icon": "images/civics/assyria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ASSYRIA_SYNCRETISM_EXPLORATION",
   "name": "Ashur I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DURANI_II",
   "name": "Dūrāni II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Dūrāni I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Assyrian Modernization",
     "civicId": "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
     "icon": "images/civics/assyria_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ASSYRIA_SYNCRETISM_MODERN",
   "name": "Ashur II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ASSYRIA",
   "civName": "Assyria",
   "attr": "",
   "obsoletes": "Ashur I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STRATAGEMS_I",
   "name": "Stratagems I",
   "text": "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Bulgarian Origins",
     "civicId": "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_FALSE_RETREAT",
   "name": "False Retreat",
   "text": "Receive [icon:YIELD_FOOD] in all [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when Pillaging [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] equal to 50% of the Yield or [icon:Action_Heal] HP gained. [B]-3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for all Combat Units against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Seven Tribes",
     "civicId": "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ICONOLATRY",
   "name": "Iconolatry I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tarnovo Schools",
     "civicId": "NODE_CIVIC_EX_BULGARIA_TARNOVO_SCHOOLS",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_STRATAGEMS",
   "name": "Stratagems II",
   "text": "+50% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]8 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Stratagems I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Tsarstvie",
     "civicId": "NODE_CIVIC_EX_BULGARIA_TSARSTVIE",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ICONOLATRY_II",
   "name": "Iconolatry II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Iconolatry I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Bulgarian Modernization",
     "civicId": "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
     "icon": "images/civics/bulgaria_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BULGARIA_SYNCRETISM_ANTIQUITY",
   "name": "Uporitost I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BULGARIA_SYNCRETISM_MODERN",
   "name": "Uporitost II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] can [icon:Action_Pillage] Pillage for [B]1 [icon:Action_Move] Movement[/B].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_BULGARIA",
   "civName": "Bulgaria",
   "attr": "",
   "obsoletes": "Uporitost I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GAULOS_I",
   "name": "Gaulos I",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Wisdom of Tanit",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_QUINQUEREME_I",
   "name": "Quinquereme I",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Shipsheds",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SUFFETES",
   "name": "Suffetes",
   "text": "[B]+20% [icon:YIELD_GOLD][/B] in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+20% [icon:YIELD_FOOD][/B] in Fishing or Farming [icon:YIELD_TOWNS] Towns. [B]+1 [icon:TRADE_ROUTE][/B] Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] Range for every [icon:YIELD_TOWNS] Town with a [icon:TOWN_FOCUS] Trade Outpost Focus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Sicilian Wars",
     "civicId": "NODE_CIVIC_AQ_CARTHAGE_SICILIAN_WARS",
     "icon": "images/civics/carthage_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_QUINQUEREME_II",
   "name": "Quinquereme II",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Quinquereme I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Carthaginian Renaissance",
     "civicId": "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
     "icon": "images/civics/carthage_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CARTHAGE_SYNCRETISM_EXPLORATION",
   "name": "Hannoid Rule I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GAULOS_II",
   "name": "Gaulos II",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Gaulos I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Carthaginian Modernization",
     "civicId": "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
     "icon": "images/civics/carthage_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CARTHAGE_SYNCRETISM_MODERN",
   "name": "Hannoid Rule II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_CARTHAGE",
   "civName": "Carthage",
   "attr": "",
   "obsoletes": "Hannoid Rule I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_CAM_BINH_I",
   "name": "Cấm Binh I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Vietnamese Origins",
     "civicId": "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_CAM_BINH_II",
   "name": "Cấm Binh II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing and [icon:YIELD_GOLD] towards purchasing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Cấm Binh I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Cấm Quân",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_CON_KENH",
   "name": "Con Kênh",
   "text": "Culture and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Chữ Nôm",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_CHU_NOM",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RUONG_LANG_XA_I",
   "name": "Ruộng Làng Xã I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tứ Dân",
     "civicId": "NODE_CIVIC_EX_DAI_VIET_TU_DAN",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_RUONG_LANG_XA_II",
   "name": "Ruộng Làng Xã II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Ruộng Làng Xã I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Vietnamese Modernization",
     "civicId": "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
     "icon": "images/civics/dai_viet_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DAI_VIET_SYNCRETISM_ANTIQUITY",
   "name": "Hành Chính Công I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DAI_VIET_SYNCRETISM_MODERN",
   "name": "Hành Chính Công II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_DAI_VIET",
   "civName": "Đại Việt",
   "attr": "",
   "obsoletes": "Hành Chính Công I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BONGWAN",
   "name": "Bongwan I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Cheonsu",
     "civicId": "NODE_CIVIC_EX_GORYEO_CHEONSU",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HOGUK_JONGGYO",
   "name": "Hoguk Jonggyo II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] or Settlements following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Hoguk Jonggyo I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Tripitaka Koreana",
     "civicId": "NODE_CIVIC_EX_GORYEO_TRIPITAKA_KOREANA",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SAGAE_CHIBUBEOP",
   "name": "Sagae Chibubeop",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [icon:YIELD_GOLD] equal to 10% of their [icon:YIELD_CULTURE].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Jikji",
     "civicId": "NODE_CIVIC_EX_GORYEO_JIKJI",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HOGUK_JONGGYO_I",
   "name": "Hoguk Jonggyo I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Goryeo Origins",
     "civicId": "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BONGWAN_II",
   "name": "Bongwan II",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Bongwan I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Goryeo Modernization",
     "civicId": "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
     "icon": "images/civics/goryeo_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GORYEO_SYNCRETISM_ANTIQUITY",
   "name": "Sambyeolcho I",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GORYEO_SYNCRETISM_MODERN",
   "name": "Sambyeolcho II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GORYEO",
   "civName": "Goryeo",
   "attr": "",
   "obsoletes": "Sambyeolcho I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_EAST_INDIA_COMPANY_I",
   "name": "East India Company I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "British Origins",
     "civicId": "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_EAST_INDIA_COMPANY_II",
   "name": "East India Company II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "East India Company I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Chartered Companies",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_CHARTERED_COMPANIES",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NO_ETERNAL_ALLIES_I",
   "name": "No Eternal Allies I",
   "text": "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "British Renaissance",
     "civicId": "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_NO_ETERNAL_ALLIES_II",
   "name": "No Eternal Allies II",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "No Eternal Allies I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Splendid Isolation",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SPLENDID_ISOLATION",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_PROCEEDINGS",
   "name": "Proceedings",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with both a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] and a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted. [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] receive [B]+3 [icon:YIELD_PRODUCTION][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] assigned to them.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Society of Antiquaries",
     "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES",
     "icon": "images/civics/great_britain_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GREAT_BRITAIN_SYNCRETISM_ANTIQUITY",
   "name": "Royal Society I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+1 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GREAT_BRITAIN_SYNCRETISM_EXPLORATION",
   "name": "Royal Society II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+2 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_GREAT_BRITAIN",
   "civName": "Great Britain",
   "attr": "",
   "obsoletes": "Royal Society I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_INSEI",
   "name": "Insei I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ritsuryo",
     "civicId": "NODE_CIVIC_AQ_HEIAN_RITSURYO",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_UTSUROU",
   "name": "Utsurou",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] receive [B]+2 [icon:YIELD_CULTURE][/B] for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display, but [icon:UNIT_ARMY_COMMANDER] Commanders receive [B]-25% [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP][/B].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Waka",
     "civicId": "NODE_CIVIC_AQ_HEIAN_WAKA",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JO_BO_SYSTEM",
   "name": "Jo-bo System I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+0.5 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Urban Grid",
     "civicId": "NODE_CIVIC_AQ_HEIAN_URBAN_GRID",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_MONOGATARI",
   "name": "Monogatari",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency with Charming tiles and [B]+2 [icon:YIELD_FOOD][/B] Adjacency with [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 400,
   "unlockedBy": [
    {
     "civic": "Mono No Aware",
     "civicId": "NODE_CIVIC_AQ_HEIAN_MONO_NO_AWARE",
     "icon": "images/civics/heian_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JO_BO_SYSTEM_II",
   "name": "Jo-bo System II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Jo-bo System I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Heian Renaissance",
     "civicId": "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
     "icon": "images/civics/heian_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_INSEI_II",
   "name": "Insei II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Insei I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Heian Modernization",
     "civicId": "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
     "icon": "images/civics/heian_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_HEIAN_SYNCRETISM_EXPLORATION",
   "name": "Shikken I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HEIAN_SYNCRETISM_MODERN",
   "name": "Shikken II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_HEIAN",
   "civName": "Heian Japan",
   "attr": "",
   "obsoletes": "Shikken I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STRANDHOGG",
   "name": "Strandhögg",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can [icon:Action_Pillage] Pillage and Coastal Raid tiles within 2 tiles. Naval Units can disperse [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP] or [icon:Action_Pillage] Coastal Raid for [B]1 [icon:Action_Move] Movement[/B] when in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Does not apply to Discoveries.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hugins Drekka",
     "civicId": "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_REIDI_GUDANNA",
   "name": "Reiði Guðanna",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Cultural and [icon:YIELD_PRODUCTION] Adjacency from Volcanoes and [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]. ( [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonder Volcanoes do not count twice) [B]+25% [icon:YIELD_GOLD][/B] towards purchasing [icon:ACTION_IMPROVE] Repairs.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Landnámabók",
     "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DROTTKVAETT_II",
   "name": "Dróttkvætt II",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Dróttkvætt I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Landnámabók",
     "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_LYFSTEINN_I",
   "name": "Lyfsteinn I",
   "text": "+10 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Væringjar",
     "civicId": "NODE_CIVIC_EX_ICELAND_VAERINGJAR",
     "icon": "images/civics/iceland_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DROTTKVAETT_I",
   "name": "Dróttkvætt I",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Icelandic Origins",
     "civicId": "NODE_CIVIC_AQ_ICELAND_ORIGINS",
     "icon": "images/civics/iceland_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_LYFSTEINN_II",
   "name": "Lyfsteinn II",
   "text": "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Lyfsteinn I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Icelandic Modernization",
     "civicId": "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
     "icon": "images/civics/iceland_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_ICELAND_SYNCRETISM_ANTIQUITY",
   "name": "Drekahöfuð I",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_ICELAND_SYNCRETISM_MODERN",
   "name": "Drekahöfuð II",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost. [B]+1 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for each improved [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonder[/TIP] in your empire.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_ICELAND",
   "civName": "Iceland",
   "attr": "",
   "obsoletes": "Drekahöfuð I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_GWAGEO",
   "name": "Gwageo II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Gwageo I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Seongnihak",
     "civicId": "NODE_CIVIC_MO_JOSEON_IHAK",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SILHAK",
   "name": "Silhak",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Seonbi",
     "civicId": "NODE_CIVIC_MO_JOSEON_SEONBI",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_YANGBEOBMIUI",
   "name": "Yangbeobmiui II",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Seowon. [B]-10% [icon:YIELD_CULTURE][/B] in other [icon:YIELD_CITIES] Cities. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Yangbeobmiui I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gyeongguk Daejeon",
     "civicId": "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_YANGBAN_BUREAUCRACY",
   "name": "Yangban Bureaucracy II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]3[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Yangban Bureaucracy I",
   "starting": [],
   "cost": 4000,
   "unlockedBy": [
    {
     "civic": "Samgang",
     "civicId": "NODE_CIVIC_MO_JOSEON_SAMGANG",
     "icon": "images/civics/joseon_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_YANGBEOBMIUI_I",
   "name": "Yangbeobmiui I",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Joseon Origins",
     "civicId": "NODE_CIVIC_AQ_JOSEON_ORIGINS",
     "icon": "images/civics/joseon_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_GWAGEO_I",
   "name": "Gwageo I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Hierarchy",
     "civicId": "NODE_CIVIC_EX_HIERARCHY",
     "icon": "images/civics/joseon_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_YANGBAN_BUREAUCRACY_I",
   "name": "Yangban Bureaucracy I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Joseon Renaissance",
     "civicId": "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
     "icon": "images/civics/joseon_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_JOSEON_SYNCRETISM_ANTIQUITY",
   "name": "Hermit Kingdom I",
   "text": "[B]+0.5 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_JOSEON_SYNCRETISM_EXPLORATION",
   "name": "Hermit Kingdom II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_JOSEON",
   "civName": "Joseon",
   "attr": "",
   "obsoletes": "Hermit Kingdom I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_HIMAL_I",
   "name": "Himāl I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Nepali Origins",
     "civicId": "NODE_CIVIC_AQ_NEPAL_ORIGINS",
     "icon": "images/civics/nepal_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HIMAL",
   "name": "Himāl II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Himāl I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gorkhapatra",
     "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MAITRI_SANDHI_I",
   "name": "Maitri Sandhi I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Nepali Renaissance",
     "civicId": "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
     "icon": "images/civics/nepal_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_MAITRI_SANDHI",
   "name": "Maitri Sandhi II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +20% otherwise.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Maitri Sandhi I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Singha Durbar",
     "civicId": "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TUNDIKHEL",
   "name": "Tundikhel",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units adjacent to [icon:CITY_UNIMPROVED] Mountains. This is doubled if the Unit is also in your territory. Units complete [icon:Action_Fortify] Fortifications in 1 turn if adjacent to a [icon:CITY_UNIMPROVED] Mountain.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Jyumdo Bagha",
     "civicId": "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SAGARMATHA",
   "name": "Sagarmatha",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] receive an Adjacency from [icon:CITY_UNIMPROVED] Mountains.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Gorkhapatra",
     "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
     "icon": "images/civics/nepal_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NEPAL_SYNCRETISM_ANTIQUITY",
   "name": "Kumar and Kumari I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_NEPAL_SYNCRETISM_EXPLORATION",
   "name": "Kumar and Kumari II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_NEPAL",
   "civName": "Nepal",
   "attr": "",
   "obsoletes": "Kumar and Kumari I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_ERKAN_I_HARBIYE_MEKTEBI",
   "name": "Erkân-ı Harbiye Mektebi",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. -2 [icon:YIELD_GOLD] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Gold Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Harbiye Nezâreti",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_HARBIYE_NEZARETI",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_OSMANLI_BAROK_I",
   "name": "Osmanlı Barok I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ottoman Renaissance",
     "civicId": "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_OSMANLI_BAROK_II",
   "name": "Osmanlı Barok II",
   "text": "[B]+3 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing Museums.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Osmanlı Barok I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Tanẓîmât",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_TANZIMAT",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SEDEF_KAKMA_I",
   "name": "Sedef Kakma I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Ottoman Origins",
     "civicId": "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SEDEF_KAKMA_II",
   "name": "Sedef Kakma II",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+5 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Sedef Kakma I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Lâle Devri",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SIEGE_TRAIN",
   "name": "Siege Train",
   "text": "When a unit destroys a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District's[/TIP] defenses, all other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] have their [icon:Action_Move] Movement restored.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Şahi Topu",
     "civicId": "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU",
     "icon": "images/civics/ottomans_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_OTTOMANS_SYNCRETISM_ANTIQUITY",
   "name": "Mehterân I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_OTTOMANS_SYNCRETISM_EXPLORATION",
   "name": "Mehterân II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP]. Training a Siege Unit grants [icon:YIELD_HAPPINESS] towards [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP] equal to 50% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_OTTOMANS",
   "civName": "Ottomans",
   "attr": "",
   "obsoletes": "Mehterân I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PRESS_GANGS_I",
   "name": "Press Gangs I",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Articles of Agreement",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PRESS_GANGS_II",
   "name": "Press Gangs II",
   "text": "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Press Gangs I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Pirate Modernization",
     "civicId": "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_MERRY_LIFE_AND_A_SHORT_ONE",
   "name": "Merry Life and a Short One",
   "text": "When you defeat a [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP], gain [icon:YIELD_GOLD] equal to the Unit’s [icon:YIELD_PRODUCTION] cost. When you defeat a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP], gain [icon:YIELD_GOLD] equal to 25% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Ports of Call",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BLACK_FLAG_I",
   "name": "Black Flag I",
   "text": "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Pirate Origins",
     "civicId": "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BLACK_FLAG_II",
   "name": "Black Flag II",
   "text": "[B]+100 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +100% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] and Naval Units gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] on Atolls.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Black Flag I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Enemy of All Nations",
     "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ENEMY_OF_ALL_NATIONS",
     "icon": "images/civics/republic_of_pirates_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_PIRATE_REPUBLIC_SYNCRETISM_ANTIQUITY",
   "name": "Brethren of the Coast I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_PIRATE_REPUBLIC_SYNCRETISM_MODERN",
   "name": "Brethren of the Coast II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_PIRATE_REPUBLIC",
   "civName": "Republic of Pirates",
   "attr": "",
   "obsoletes": "Brethren of the Coast I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QULLARAQASI",
   "name": "Qullarāqāsi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] for every [B]2[/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Neẓām-e J̌adīd",
     "civicId": "NODE_CIVIC_MO_QAJAR_NEZAM_E_JADID",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SOLEYMANIYEH_PALACE_I",
   "name": "Soleymaniyeh Palace I",
   "text": "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Qajar Renaissance",
     "civicId": "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
     "icon": "images/civics/qajar_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SOLEYMANIYEH_PALACE_II",
   "name": "Soleymaniyeh Palace II",
   "text": "[B]+0.5 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Soleymaniyeh Palace I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "The Sun Throne",
     "civicId": "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_DAR_AL_FONUN_I",
   "name": "Dār al-Fonūn I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Qajar Origins",
     "civicId": "NODE_CIVIC_AQ_QAJAR_ORIGINS",
     "icon": "images/civics/qajar_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_DAR_AL_FONUN_II",
   "name": "Dār al-Fonūn II",
   "text": "[B]+10 [icon:YIELD_SCIENCE][/B] and [icon:YIELD_CULTURE] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Dār al-Fonūn I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Twelve Gates",
     "civicId": "NODE_CIVIC_MO_QAJAR_TWELVE_GATES",
     "icon": "images/civics/qajar_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_QAJAR_SYNCRETISM_ANTIQUITY",
   "name": "Waqāye'-e Ettefāqiya I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_QAJAR_SYNCRETISM_EXPLORATION",
   "name": "Waqāye'-e Ettefāqiya II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_DIPLOMACY] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_QAJAR",
   "civName": "Qajar",
   "attr": "",
   "obsoletes": "Waqāye'-e Ettefāqiya I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_DAIMYO",
   "name": "Daimyo",
   "text": "Land [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] fight as though they were at full [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] even when [icon:DAMAGED] Damaged.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Kinsei",
     "civicId": "NODE_CIVIC_EX_SENGOKU_KINSEI",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GEKOKUJO",
   "name": "Gekokujo II",
   "text": "[B]+100% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Gekokujo I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Ikki",
     "civicId": "NODE_CIVIC_EX_SENGOKU_IKKI",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_KABUNAKAMA",
   "name": "Kabunakama I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Rakuichi-Rakuza",
     "civicId": "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_GEKOKUJO_I",
   "name": "Gekokujo I",
   "text": "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Sengoku Origins",
     "civicId": "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_KABUNAKAMA_II",
   "name": "Kabunakama II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Kabunakama I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Sengoku Modernization",
     "civicId": "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
     "icon": "images/civics/sengoku_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SENGOKU_SYNCRETISM_ANTIQUITY",
   "name": "Bushido I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SENGOKU_SYNCRETISM_MODERN",
   "name": "Bushido II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SENGOKU",
   "civName": "Sengoku Japan",
   "attr": "",
   "obsoletes": "Bushido I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_HELIKHILENAWEWIPE_I",
   "name": "Helikhilenawewipe I",
   "text": "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Shawnee Origins",
     "civicId": "NODE_CIVIC_AQ_SHAWNEE_ORIGINS",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_HELIKHILENAWEWIPE_II",
   "name": "Helikhilenawewipe II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Helikhilenawewipe I",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Telwatiki",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_TELWATIKI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BREAD_DANCE_I",
   "name": "Bread Dance I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+4 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Wiyehi Simekofi",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_BREAD_DANCE_II",
   "name": "Bread Dance II",
   "text": "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Bread Dance I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NIWIITIKEEMEKONAAKI",
   "name": "Niwiitikeemekonaaki I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Miyaska Latoweki",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_NIWIITIKEEMEKONAAKI_II",
   "name": "Niwiitikeemekonaaki II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Niwiitikeemekonaaki I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Shawnee Modernization",
     "civicId": "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TAKESIYAKE_YEPEPOKI",
   "name": "Takesiyake Yepepoki",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Tundra, Desert, and Plains Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. These numbers are doubled if the tile is also [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] Terrain.",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Maleki Kintake",
     "civicId": "NODE_CIVIC_EX_SHAWNEE_MALEKI_KINTAKE",
     "icon": "images/civics/shawnee_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SHAWNEE_SYNCRETISM_ANTIQUITY",
   "name": "Strategic Gifts I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SHAWNEE_SYNCRETISM_MODERN",
   "name": "Strategic Gifts II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SHAWNEE",
   "civName": "Shawnee",
   "attr": "",
   "obsoletes": "Strategic Gifts I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_BEOPSEONG_I",
   "name": "Beopseong I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 108,
   "unlockedBy": [
    {
     "civic": "Kolp'um",
     "civicId": "NODE_CIVIC_AQ_SILLA_KOLP_UM",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_BEOPSEONG_II",
   "name": "Beopseong II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Beopseong I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Administration",
     "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
     "icon": "images/civics/silla_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_STRATEGIC_ALLIES",
   "name": "Strategic Allies",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_FOOD] and [icon:YIELD_PRODUCTION] to both players equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Samguk Sagi",
     "civicId": "NODE_CIVIC_AQ_SILLA_SAMGUK_SAGI",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_THE_GOLDEN_ROAD_I",
   "name": "The Golden Road I",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players equal to 50% of the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Seonggol",
     "civicId": "NODE_CIVIC_AQ_SILLA_SEONGGOL",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_THE_GOLDEN_ROAD_II",
   "name": "The Golden Road II",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "The Golden Road I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Silla Modernization",
     "civicId": "NODE_CIVIC_MO_SILLA_MODERNIZATION",
     "icon": "images/civics/silla_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_SEORABEOL_I",
   "name": "Seorabeol I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 120,
   "unlockedBy": [
    {
     "civic": "Jingol",
     "civicId": "NODE_CIVIC_AQ_SILLA_JINGOL",
     "icon": "images/civics/silla_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_SEORABEOL_II",
   "name": "Seorabeol II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Seorabeol I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Silla Renaissance",
     "civicId": "NODE_CIVIC_EX_SILLA_RENAISSANCE",
     "icon": "images/civics/silla_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SILLA_SYNCRETISM_EXPLORATION",
   "name": "Revised Bone-Rank I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_SILLA_SYNCRETISM_MODERN",
   "name": "Revised Bone-Rank II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_SILLA",
   "civName": "Silla",
   "attr": "",
   "obsoletes": "Revised Bone-Rank I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_NGATU_I",
   "name": "Ngatu I",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 250,
   "unlockedBy": [
    {
     "civic": "Kava Ceremony",
     "civicId": "NODE_CIVIC_AQ_TONGA_KAVA_CEREMONY",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_NGATU_II",
   "name": "Ngatu II",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands.",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "Ngatu I",
   "starting": [],
   "cost": 2000,
   "unlockedBy": [
    {
     "civic": "Tongan Modernization",
     "civicId": "NODE_CIVIC_MO_TONGA_MODERNIZATION",
     "icon": "images/civics/tonga_civics.png",
     "age": "Modern"
    }
   ]
  },
  {
   "id": "TRADITION_TONGIAKI_I",
   "name": "Tongiaki I",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "ʻEsi Maka Faakinanga",
     "civicId": "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TONGIAKI_II",
   "name": "Tongiaki II",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "Tongiaki I",
   "starting": [],
   "cost": 800,
   "unlockedBy": [
    {
     "civic": "Tongan Renaissance",
     "civicId": "NODE_CIVIC_EX_TONGA_RENAISSANCE",
     "icon": "images/civics/tonga_civics.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TAKUAKA",
   "name": "Takuaka",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Fishing Boats in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on Fishing Boats on Reefs in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "slot": "tradition",
   "age": "Antiquity",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 150,
   "unlockedBy": [
    {
     "civic": "Lapita Origins",
     "civicId": "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS",
     "icon": "images/civics/tonga_civics.png",
     "age": "Antiquity"
    }
   ]
  },
  {
   "id": "TRADITION_TONGA_SYNCRETISM_EXPLORATION",
   "name": "T’ui Ha’atakalaua I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "slot": "tradition",
   "age": "Exploration",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "",
   "starting": [],
   "cost": 1200,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Exploration"
    }
   ]
  },
  {
   "id": "TRADITION_TONGA_SYNCRETISM_MODERN",
   "name": "T’ui Ha’atakalaua II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "slot": "tradition",
   "age": "Modern",
   "civ": "CIVILIZATION_TONGA",
   "civName": "Tonga",
   "attr": "",
   "obsoletes": "T’ui Ha’atakalaua I",
   "starting": [],
   "cost": 3000,
   "unlockedBy": [
    {
     "civic": "Syncretism",
     "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
     "icon": "images/civics/syncretism.png",
     "age": "Modern"
    }
   ]
  }
 ],
 "civOrder": [
  "CIVILIZATION_AKSUM",
  "CIVILIZATION_EGYPT",
  "CIVILIZATION_GREECE",
  "CIVILIZATION_HAN",
  "CIVILIZATION_KHMER",
  "CIVILIZATION_MAURYA",
  "CIVILIZATION_MAYA",
  "CIVILIZATION_MISSISSIPPIAN",
  "CIVILIZATION_PERSIA",
  "CIVILIZATION_ROME",
  "CIVILIZATION_INDEPENDENT",
  "CIVILIZATION_NONE",
  "CIVILIZATION_ABBASID",
  "CIVILIZATION_CHOLA",
  "CIVILIZATION_HAWAII",
  "CIVILIZATION_INCA",
  "CIVILIZATION_MAJAPAHIT",
  "CIVILIZATION_MING",
  "CIVILIZATION_MONGOLIA",
  "CIVILIZATION_NORMAN",
  "CIVILIZATION_SONGHAI",
  "CIVILIZATION_SPAIN",
  "CIVILIZATION_AMERICA",
  "CIVILIZATION_BUGANDA",
  "CIVILIZATION_FRENCH_EMPIRE",
  "CIVILIZATION_MEIJI",
  "CIVILIZATION_MEXICO",
  "CIVILIZATION_MUGHAL",
  "CIVILIZATION_PRUSSIA",
  "CIVILIZATION_QING",
  "CIVILIZATION_RUSSIA",
  "CIVILIZATION_SIAM",
  "CIVILIZATION_PLACEHOLDER_CITYSTATE",
  "CIVILIZATION_ASSYRIA",
  "CIVILIZATION_BULGARIA",
  "CIVILIZATION_CARTHAGE",
  "CIVILIZATION_DAI_VIET",
  "CIVILIZATION_GORYEO",
  "CIVILIZATION_GREAT_BRITAIN",
  "CIVILIZATION_HEIAN",
  "CIVILIZATION_ICELAND",
  "CIVILIZATION_JOSEON",
  "CIVILIZATION_NEPAL",
  "CIVILIZATION_OTTOMANS",
  "CIVILIZATION_PIRATE_REPUBLIC",
  "CIVILIZATION_QAJAR",
  "CIVILIZATION_SENGOKU",
  "CIVILIZATION_SHAWNEE",
  "CIVILIZATION_SILLA",
  "CIVILIZATION_TONGA"
 ]
};

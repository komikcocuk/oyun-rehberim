// Every Tradition a civilization can hold and what unlocks it -- its own
// civics tree, the Test of Time trees of the other Ages, the Syncretism
// civic -- read out of the game's tables by tools/build_civ_traditions.py.
window.CIVPEDIA_CIV_TRADITIONS = {
 "CIVILIZATION_ABBASID": [
  {
   "name": "Fractal Cities",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing and [B]+10% [icon:YIELD_GOLD][/B] towards purchasing [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP].",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Experimentation",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": ""
  },
  {
   "name": "City of Peace Tradition I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "age": "Antiquity",
   "civic": "Abbasid Origins",
   "civicId": "NODE_CIVIC_AQ_ABBASID_ORIGINS",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Rasool I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "City of Peace Tradition II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency with the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "age": "Exploration",
   "civic": "Round City",
   "civicId": "NODE_CIVIC_EX_ABBASID_ROUND_CITY",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": "City of Peace Tradition I"
  },
  {
   "name": "Sales and Trade I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Exploration",
   "civic": "Mawla",
   "civicId": "NODE_CIVIC_EX_ABBASID_MAWLA",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Compendious Book Tradition",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "age": "Exploration",
   "civic": "Al-Jabr",
   "civicId": "NODE_CIVIC_EX_ABBASID_AL_JABR",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Sales and Trade II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with at least [B]5 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Abbasid Modernization",
   "civicId": "NODE_CIVIC_MO_ABBASID_MODERNIZATION",
   "civicIcon": "images/civics/abbasid_civics.png",
   "obsoletes": "Sales and Trade I"
  },
  {
   "name": "Rasool II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for the [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Hall and [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Rasool I"
  }
 ],
 "CIVILIZATION_AKSUM": [
  {
   "name": "Port of Nations I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+100% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Periplus of the Erythraean Sea",
   "civicId": "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Throne Of My Fathers",
   "text": "[B]+15% [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast. Gain [icon:YIELD_CULTURE] equal to 25% of your [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "age": "Antiquity",
   "civic": "Monumentum Adulitanum",
   "civicId": "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "May This Please The People I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Book of the Himyarites",
   "civicId": "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Classical Revival",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Supply and Demand",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP] you have.",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "May This Please The People II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] on or adjacent to Coast.",
   "age": "Exploration",
   "civic": "Aksumite Renaissance",
   "civicId": "NODE_CIVIC_EX_AKSUM_RENAISSANCE",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": "May This Please The People I"
  },
  {
   "name": "Incense Road I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Romanticism",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Appealing[/TIP] Terrain.",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Gold Standard",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Port of Nations II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+200% [icon:TRADE_INCOME][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to Coast.",
   "age": "Modern",
   "civic": "Aksumite Modernization",
   "civicId": "NODE_CIVIC_MO_AKSUM_MODERNIZATION",
   "civicIcon": "images/civics/aksumite_civics.png",
   "obsoletes": "Port of Nations I"
  },
  {
   "name": "Incense Road II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [icon:TRADE_ROUTE] Trade Routes gain [B]+2 [icon:Action_Showall][/B] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] and cannot be Pillaged.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Incense Road I"
  }
 ],
 "CIVILIZATION_AMERICA": [
  {
   "name": "Gold Rush I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Antiquity",
   "civic": "American Origins",
   "civicId": "NODE_CIVIC_AQ_AMERICAN_ORIGINS",
   "civicIcon": "images/civics/american_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Land of Opportunity I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Robber Baron I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "age": "Exploration",
   "civic": "American Renaissance",
   "civicId": "NODE_CIVIC_EX_AMERICAN_RENAISSANCE",
   "civicIcon": "images/civics/american_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Land of Opportunity II",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_PRODUCTION][/B] on Mines, Clay Pits, Quarries, Woodcutters, and Oil Rigs in [icon:TOWN_FOCUS] Mining [icon:YIELD_TOWNS] Towns, [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Land of Opportunity I"
  },
  {
   "name": "Gold Rush II",
   "text": "[B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Yankee Ingenuity",
   "civicId": "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY",
   "civicIcon": "images/civics/american_civics.png",
   "obsoletes": "Gold Rush I"
  },
  {
   "name": "Robber Baron II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Captains of Industry",
   "civicId": "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY",
   "civicIcon": "images/civics/american_civics.png",
   "obsoletes": "Robber Baron I"
  },
  {
   "name": "Lend-Lease",
   "text": "[B]+1 [icon:WAR_SUPPORT][/B] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP] on all [icon:WAR] Wars, or +2 if joining a [icon:WAR] War with an [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Ally[/TIP]. [B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when fighting a [icon:WAR] War in which your [icon:WAR_SUPPORT] War Support is higher than your opponent.",
   "age": "Modern",
   "civic": "Wartime Manufacturing",
   "civicId": "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING",
   "civicIcon": "images/civics/american_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_ASSYRIA": [
  {
   "name": "Girru I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+3 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Antiquity",
   "civic": "Kibrāt Arba’i",
   "civicId": "NODE_CIVIC_AQ_ASSYRIA_KIBRAT_ARBA_I",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Dūrāni I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology Mastery[/TIP] completed this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Antiquity",
   "civic": "Birtūtu",
   "civicId": "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Miḫiṣtu I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot.",
   "age": "Antiquity",
   "civic": "Tupšarrūtu",
   "civicId": "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Miḫiṣtu II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP] with a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] slot. [B]+2 [icon:YIELD_SCIENCE][/B] on displayed [icon:NAR_REW_GREATWORK] Great Works.",
   "age": "Exploration",
   "civic": "Assyrian Renaissance",
   "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": "Miḫiṣtu I"
  },
  {
   "name": "Girru II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] within an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP]'s Radius. [B]+5 [icon:YIELD_PRODUCTION][/B], [icon:YIELD_SCIENCE], and [icon:YIELD_FOOD] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Exploration",
   "civic": "Assyrian Renaissance",
   "civicId": "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": "Girru I"
  },
  {
   "name": "Ashur I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Dūrāni II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] not founded by you that were conquered in this [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_TECH_TOOLTIP]Technology[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Mastery[/TIP] completed this Age.",
   "age": "Modern",
   "civic": "Assyrian Modernization",
   "civicId": "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION",
   "civicIcon": "images/civics/assyria_civics.png",
   "obsoletes": "Dūrāni I"
  },
  {
   "name": "Ashur II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP]. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when attacking [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Ashur I"
  }
 ],
 "CIVILIZATION_BUGANDA": [
  {
   "name": "Interlacustrine I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain Adjacency from Lakes.",
   "age": "Antiquity",
   "civic": "Bugandan Origins",
   "civicId": "NODE_CIVIC_AQ_BUGANDA_ORIGINS",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ebika I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Clan Society I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ng'oma I",
   "text": "[B]+4 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "age": "Exploration",
   "civic": "Bugandan Renaissance",
   "civicId": "NODE_CIVIC_EX_BUGANDA_RENAISSANCE",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ebika II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Lakes.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Ebika I"
  },
  {
   "name": "Ng'oma II",
   "text": "[B]+8 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units that are on or adjacent to a Lake. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP]Embarked[/TIP] Units.",
   "age": "Modern",
   "civic": "Blutabaalo",
   "civicId": "NODE_CIVIC_MO_BUGANDA_BLUTABAALO",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": "Ng'oma I"
  },
  {
   "name": "Interlacustrine II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain an Adjacency with Lakes based on all the Building's Yields.",
   "age": "Modern",
   "civic": "Nyanza",
   "civicId": "NODE_CIVIC_MO_BUGANDA_NYANZA",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": "Interlacustrine I"
  },
  {
   "name": "Clan Society II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each other owned Settlement within 6 tiles.",
   "age": "Modern",
   "civic": "'Nnalubaale",
   "civicId": "NODE_CIVIC_MO_BUGANDA_NNALUBAALE",
   "civicIcon": "images/civics/buganda_civics.png",
   "obsoletes": "Clan Society I"
  }
 ],
 "CIVILIZATION_BULGARIA": [
  {
   "name": "Stratagems I",
   "text": "+25% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]4 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "age": "Antiquity",
   "civic": "Bulgarian Origins",
   "civicId": "NODE_CIVIC_AQ_BULGARIA_ORIGINS",
   "civicIcon": "images/civics/bulgaria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Uporitost I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "False Retreat",
   "text": "Receive [icon:YIELD_FOOD] in all [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] when Pillaging [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] equal to 50% of the Yield or [icon:Action_Heal] HP gained. [B]-3 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for all Combat Units against [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Exploration",
   "civic": "Seven Tribes",
   "civicId": "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES",
   "civicIcon": "images/civics/bulgaria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Iconolatry I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "age": "Exploration",
   "civic": "Tarnovo Schools",
   "civicId": "NODE_CIVIC_EX_BULGARIA_TARNOVO_SCHOOLS",
   "civicIcon": "images/civics/bulgaria_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Stratagems II",
   "text": "+50% Yield and [icon:Action_Heal] HP from [icon:Action_Pillage] Pillaging. [B]+5 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [icon:UNIT_CLASS_INFANTRY] Infantry and [icon:UNIT_CLASS_CAVALRY] [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry[/TIP] against other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when you have at least [B]8 [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP][/B] on display.",
   "age": "Exploration",
   "civic": "Tsarstvie",
   "civicId": "NODE_CIVIC_EX_BULGARIA_TSARSTVIE",
   "civicIcon": "images/civics/bulgaria_civics.png",
   "obsoletes": "Stratagems I"
  },
  {
   "name": "Iconolatry II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_GOLD] from [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on Hidden Fortresses in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:NAR_REW_GREATWORK] Great Work Slotted.",
   "age": "Modern",
   "civic": "Bulgarian Modernization",
   "civicId": "NODE_CIVIC_MO_BULGARIA_MODERNIZATION",
   "civicIcon": "images/civics/bulgaria_civics.png",
   "obsoletes": "Iconolatry I"
  },
  {
   "name": "Uporitost II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] can [icon:Action_Pillage] Pillage for [B]1 [icon:Action_Move] Movement[/B].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Uporitost I"
  }
 ],
 "CIVILIZATION_CARTHAGE": [
  {
   "name": "Quinquereme I",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "age": "Antiquity",
   "civic": "Shipsheds",
   "civicId": "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS",
   "civicIcon": "images/civics/carthage_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Gaulos I",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "age": "Antiquity",
   "civic": "Wisdom of Tanit",
   "civicId": "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP",
   "civicIcon": "images/civics/carthage_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Suffetes",
   "text": "[B]+20% [icon:YIELD_GOLD][/B] in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+20% [icon:YIELD_FOOD][/B] in Fishing or Farming [icon:YIELD_TOWNS] Towns. [B]+1 [icon:TRADE_ROUTE][/B] Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] Range for every [icon:YIELD_TOWNS] Town with a [icon:TOWN_FOCUS] Trade Outpost Focus.",
   "age": "Antiquity",
   "civic": "Sicilian Wars",
   "civicId": "NODE_CIVIC_AQ_CARTHAGE_SICILIAN_WARS",
   "civicIcon": "images/civics/carthage_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Quinquereme II",
   "text": "+1 Range for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Heavy Naval Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Naval Units for each [icon:RADIAL_RESOURCES] Unique [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP]City Resource[/TIP] assigned to your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Carthaginian Renaissance",
   "civicId": "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE",
   "civicIcon": "images/civics/carthage_civics.png",
   "obsoletes": "Quinquereme I"
  },
  {
   "name": "Hannoid Rule I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Gaulos II",
   "text": "[B]+25% [icon:YIELD_GOLD][/B] towards purchasing [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Buildings[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "age": "Modern",
   "civic": "Carthaginian Modernization",
   "civicId": "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION",
   "civicIcon": "images/civics/carthage_civics.png",
   "obsoletes": "Gaulos I"
  },
  {
   "name": "Hannoid Rule II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_PRODUCTION] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Hannoid Rule I"
  }
 ],
 "CIVILIZATION_CHOLA": [
  {
   "name": "Emissaries",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] from active [icon:ENDEAVOR] Endeavors you started or supported.",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Merchant Class",
   "text": "[B]+1 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP].",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Devakoshta I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "age": "Antiquity",
   "civic": "Chola Origins",
   "civicId": "NODE_CIVIC_AQ_CHOLA_ORIGINS",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Veera Banaju Dharma I",
   "text": "[B]+5 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+50% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Devakoshta II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP]. [B]+50% [icon:YIELD_DIPLOMACY][/B] towards [icon:DIPLOMATIC_ACTION] Diplomatic Actions with other Leaders if you have at least [B]5 [icon:TRADE_ROUTE][/B] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "age": "Exploration",
   "civic": "Kanakam",
   "civicId": "NODE_CIVIC_EX_CHOLA_KANAKAM",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": "Devakoshta I"
  },
  {
   "name": "Marakkalam",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for every other Civilization with which you have a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] and [icon:Action_Showall] [TIP:LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP]Sight[/TIP] for Heavy Naval Units.",
   "age": "Exploration",
   "civic": "Digvijaya",
   "civicId": "NODE_CIVIC_EX_CHOLA_DIGVIJAYA",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Angadi I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "age": "Exploration",
   "civic": "Monsoon Winds",
   "civicId": "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Angadi II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+8 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] other than the [icon:NOTIFICATION_SELECT_CAPITAL] Capital if they have a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Water Building[/TIP].",
   "age": "Modern",
   "civic": "Chola Modernization",
   "civicId": "NODE_CIVIC_MO_CHOLA_MODERNIZATION",
   "civicIcon": "images/civics/chola_civics.png",
   "obsoletes": "Angadi I"
  },
  {
   "name": "Veera Banaju Dharma II",
   "text": "[B]+10 [icon:YIELD_DIPLOMACY][/B] if you have 5 or more [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. [B]+100% [icon:YIELD_PRODUCTION][/B] towards training [icon:UNIT_MERCHANT] Merchants.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Veera Banaju Dharma I"
  }
 ],
 "CIVILIZATION_DAI_VIET": [
  {
   "name": "Cấm Binh I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "age": "Antiquity",
   "civic": "Vietnamese Origins",
   "civicId": "NODE_CIVIC_AQ_DAI_VIET_ORIGINS",
   "civicIcon": "images/civics/dai_viet_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Hành Chính Công I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Cấm Binh II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] Fortifications. [B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing and [icon:YIELD_GOLD] towards purchasing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "age": "Exploration",
   "civic": "Cấm Quân",
   "civicId": "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN",
   "civicIcon": "images/civics/dai_viet_civics.png",
   "obsoletes": "Cấm Binh I"
  },
  {
   "name": "Con Kênh",
   "text": "Culture and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "age": "Exploration",
   "civic": "Chữ Nôm",
   "civicId": "NODE_CIVIC_EX_DAI_VIET_CHU_NOM",
   "civicIcon": "images/civics/dai_viet_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ruộng Làng Xã I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "age": "Exploration",
   "civic": "Tứ Dân",
   "civicId": "NODE_CIVIC_EX_DAI_VIET_TU_DAN",
   "civicIcon": "images/civics/dai_viet_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ruộng Làng Xã II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Farms, Plantations, and Fortifications in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain. [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] in friendly territory.",
   "age": "Modern",
   "civic": "Vietnamese Modernization",
   "civicId": "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION",
   "civicIcon": "images/civics/dai_viet_civics.png",
   "obsoletes": "Ruộng Làng Xã I"
  },
  {
   "name": "Hành Chính Công II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_FOOD] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetation[/TIP] in [icon:CITY_UNIMPROVED] Tropical Terrain.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Hành Chính Công I"
  }
 ],
 "CIVILIZATION_EGYPT": [
  {
   "name": "Akhet I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "age": "Antiquity",
   "civic": "Arrival of Hapi",
   "civicId": "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI",
   "civicIcon": "images/civics/egyptian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Riches of the Duat",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled when constructed in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with [icon:YIELD_CITIES] City Centers in Desert Terrain. [B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:WONDER] Wonders on Desert.",
   "age": "Antiquity",
   "civic": "Scales of Anubis",
   "civicId": "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS",
   "civicIcon": "images/civics/egyptian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kemet I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "age": "Antiquity",
   "civic": "Light of Amun-Ra",
   "civicId": "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA",
   "civicIcon": "images/civics/egyptian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Akhet II",
   "text": "[B]+3 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "age": "Exploration",
   "civic": "Egyptian Renaissance",
   "civicId": "NODE_CIVIC_EX_EGYPT_RENAISSANCE",
   "civicIcon": "images/civics/egyptian_civics.png",
   "obsoletes": "Akhet I"
  },
  {
   "name": "Golden Horus I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Kemet II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP].",
   "age": "Modern",
   "civic": "Egyptian Modernization",
   "civicId": "NODE_CIVIC_MO_EGYPT_MODERNIZATION",
   "civicIcon": "images/civics/egyptian_civics.png",
   "obsoletes": "Kemet I"
  },
  {
   "name": "Golden Horus II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], doubled on Antiquity [icon:WONDER] Wonders.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Golden Horus I"
  }
 ],
 "CIVILIZATION_FRENCH_EMPIRE": [
  {
   "name": "Style Empire I",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 15% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Antiquity",
   "civic": "French Imperial Origins",
   "civicId": "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS",
   "civicIcon": "images/civics/french_civics.png",
   "obsoletes": ""
  },
  {
   "name": "De l'Esprit des Loix I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Cocorico I",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 15% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Exploration",
   "civic": "French Imperial Renaissance",
   "civicId": "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE",
   "civicIcon": "images/civics/french_civics.png",
   "obsoletes": ""
  },
  {
   "name": "De l'Esprit des Loix II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] for every [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policy[/TIP] slotted into the [icon:GOVERNMENT] Government.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "De l'Esprit des Loix I"
  },
  {
   "name": "Style Empire II",
   "text": "Constructing a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Modern",
   "civic": "Belle Époque",
   "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE",
   "civicIcon": "images/civics/french_civics.png",
   "obsoletes": "Style Empire I"
  },
  {
   "name": "Cocorico II",
   "text": "When you defeat an enemy Unit, gain [icon:YIELD_CULTURE] equal to 25% of its [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP]. [B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP] and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Modern",
   "civic": "Voie Triomphale",
   "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE",
   "civicIcon": "images/civics/french_civics.png",
   "obsoletes": "Cocorico I"
  },
  {
   "name": "Bataillon-Carré",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] gain the Swift ability, allowing them to ignore [TIP:LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP]Zone of Control[/TIP].",
   "age": "Modern",
   "civic": "Grande Armée",
   "civicId": "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE",
   "civicIcon": "images/civics/french_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_GORYEO": [
  {
   "name": "Hoguk Jonggyo I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Antiquity",
   "civic": "Goryeo Origins",
   "civicId": "NODE_CIVIC_AQ_GORYEO_FOUNDATION",
   "civicIcon": "images/civics/goryeo_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Sambyeolcho I",
   "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Bongwan I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Exploration",
   "civic": "Cheonsu",
   "civicId": "NODE_CIVIC_EX_GORYEO_CHEONSU",
   "civicIcon": "images/civics/goryeo_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Hoguk Jonggyo II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] or Settlements following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
   "age": "Exploration",
   "civic": "Tripitaka Koreana",
   "civicId": "NODE_CIVIC_EX_GORYEO_TRIPITAKA_KOREANA",
   "civicIcon": "images/civics/goryeo_civics.png",
   "obsoletes": "Hoguk Jonggyo I"
  },
  {
   "name": "Sagae Chibubeop",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [icon:YIELD_GOLD] equal to 10% of their [icon:YIELD_CULTURE].",
   "age": "Exploration",
   "civic": "Jikji",
   "civicId": "NODE_CIVIC_EX_GORYEO_JIKJI",
   "civicIcon": "images/civics/goryeo_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Bongwan II",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Modern",
   "civic": "Goryeo Modernization",
   "civicId": "NODE_CIVIC_MO_GORYEO_MODERNIZATION",
   "civicIcon": "images/civics/goryeo_civics.png",
   "obsoletes": "Bongwan I"
  },
  {
   "name": "Sambyeolcho II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] for every active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] you started or supported. [B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Sambyeolcho I"
  }
 ],
 "CIVILIZATION_GREAT_BRITAIN": [
  {
   "name": "East India Company I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "age": "Antiquity",
   "civic": "British Origins",
   "civicId": "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS",
   "civicIcon": "images/civics/great_britain_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Royal Society I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+1 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "No Eternal Allies I",
   "text": "[B]+5% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "age": "Exploration",
   "civic": "British Renaissance",
   "civicId": "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE",
   "civicIcon": "images/civics/great_britain_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Royal Society II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] adjacent to Coast. [B]+2 [icon:YIELD_CULTURE][/B] on Science Buildings adjacent to Coast.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Royal Society I"
  },
  {
   "name": "Proceedings",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with both a [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] and a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted. [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] receive [B]+3 [icon:YIELD_PRODUCTION][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_FACTORY_RESOURCES_TOOLTIP]Factory Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Society of Antiquaries",
   "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES",
   "civicIcon": "images/civics/great_britain_civics.png",
   "obsoletes": ""
  },
  {
   "name": "East India Company II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_TOWNS] Towns adjacent to Coast.",
   "age": "Modern",
   "civic": "Chartered Companies",
   "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_CHARTERED_COMPANIES",
   "civicIcon": "images/civics/great_britain_civics.png",
   "obsoletes": "East India Company I"
  },
  {
   "name": "No Eternal Allies II",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_GOLD] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5% [icon:YIELD_GOLD][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Alliance[/TIP].",
   "age": "Modern",
   "civic": "Splendid Isolation",
   "civicId": "NODE_CIVIC_MO_GREAT_BRITAIN_SPLENDID_ISOLATION",
   "civicIcon": "images/civics/great_britain_civics.png",
   "obsoletes": "No Eternal Allies I"
  }
 ],
 "CIVILIZATION_GREECE": [
  {
   "name": "Xenia I",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "age": "Antiquity",
   "civic": "Ekklesia",
   "civicId": "NODE_CIVIC_AQ_GREECE_EKKLESIA",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Strategoi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Antiquity",
   "civic": "Agoge",
   "civicId": "NODE_CIVIC_AQ_GREECE_AGOGE",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Delian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "age": "Antiquity",
   "civic": "Symmachia",
   "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Peloponnesian League I",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP].",
   "age": "Antiquity",
   "civic": "Symmachia",
   "civicId": "NODE_CIVIC_AQ_GREECE_SYMMACHIA",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Spy Network",
   "text": "[B]+30% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] from active [icon:ESPIONAGE] Espionage Actions you started.",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Delian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and supporting [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP].",
   "age": "Exploration",
   "civic": "Greek Renaissance",
   "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": "Delian League I"
  },
  {
   "name": "Peloponnesian League II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] and [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage Actions[/TIP].",
   "age": "Exploration",
   "civic": "Greek Renaissance",
   "civicId": "NODE_CIVIC_EX_GREECE_RENAISSANCE",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": "Peloponnesian League I"
  },
  {
   "name": "Hellenism I",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "The Great Game",
   "text": "[B]+40% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] from active [icon:SANCTIONS] Sanctions you started.",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Xenia II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating and progressing the Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Greek Modernization",
   "civicId": "NODE_CIVIC_MO_GREECE_MODERNIZATION",
   "civicIcon": "images/civics/greek_civics.png",
   "obsoletes": "Xenia I"
  },
  {
   "name": "Hellenism II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Hellenism I"
  }
 ],
 "CIVILIZATION_HAN": [
  {
   "name": "Xumin Zhao",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Antiquity",
   "civic": "Ren",
   "civicId": "NODE_CIVIC_AQ_HAN_REN",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Fenghuo I",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "age": "Antiquity",
   "civic": "Yi",
   "civicId": "NODE_CIVIC_AQ_HAN_YI",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Xiu Taixue",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] gain a [B]+1 [icon:YIELD_SCIENCE][/B] Adjacency for [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP].",
   "age": "Antiquity",
   "civic": "Zhi",
   "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ju Xian I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Antiquity",
   "civic": "Zhi",
   "civicId": "NODE_CIVIC_AQ_HAN_ZHI",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Jubilee",
   "text": "+3 to all Yields in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Alchemy",
   "text": "When you [TIP:LOC_PEDIA_CONCEPTS_OVERBUILDABLE_TOOLTIP]Overbuild[/TIP] a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Building[/TIP], gain [icon:YIELD_SCIENCE] equal to 25% of the new Building's [icon:YIELD_PRODUCTION] cost.",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Fenghuo II",
   "text": "[B]+1 [icon:Action_Move] Movement[/B] and [B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Fortification Buildings[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in your territory. [B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_BUILDING_LIST] Fortification Buildings and [icon:CITY_RURAL] Improvements.",
   "age": "Exploration",
   "civic": "Han Renaissance",
   "civicId": "NODE_CIVIC_EX_HAN_RENAISSANCE",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": "Fenghuo I"
  },
  {
   "name": "Capable Rule I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Vaudeville",
   "text": "Double the base yield of [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Location Theory",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Projects[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_MASTERY_TOOLTIP]Tech Mastery[/TIP] completed in an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ju Xian II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Modern",
   "civic": "Han Modernization",
   "civicId": "NODE_CIVIC_MO_HAN_MODERNIZATION",
   "civicIcon": "images/civics/han_civics.png",
   "obsoletes": "Ju Xian I"
  },
  {
   "name": "Capable Rule II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Capable Rule I"
  }
 ],
 "CIVILIZATION_HAWAII": [
  {
   "name": "Enlightened Rule",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ho'okupu I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "age": "Antiquity",
   "civic": "Hawaiian Origins",
   "civicId": "NODE_CIVIC_AQ_HAWAII_ORIGINS",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Hōkūle'a I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Kapa",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "age": "Exploration",
   "civic": "Mana",
   "civicId": "NODE_CIVIC_EX_HAWAII_MANA",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ahupua'a I",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "age": "Exploration",
   "civic": "Ohana",
   "civicId": "NODE_CIVIC_EX_HAWAII_OHANA",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ho'okupu II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on Marine Terrain. [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] do not get pillaged by Floods, Volcanic Eruptions, and Hurricanes.",
   "age": "Exploration",
   "civic": "He'e nalu",
   "civicId": "NODE_CIVIC_EX_HAWAII_HE_E_NALU",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": "Ho'okupu I"
  },
  {
   "name": "Ahupua'a II",
   "text": "[B]+6 [icon:YIELD_FOOD][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP].",
   "age": "Modern",
   "civic": "Hawaiian Modernization",
   "civicId": "NODE_CIVIC_MO_HAWAII_MODERNIZATION",
   "civicIcon": "images/civics/hawaii_civics.png",
   "obsoletes": "Ahupua'a I"
  },
  {
   "name": "Hōkūle'a II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP] adjacent to Coast. [B]+4 [icon:YIELD_CULTURE][/B] on Volcanoes.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Hōkūle'a I"
  }
 ],
 "CIVILIZATION_HEIAN": [
  {
   "name": "Insei I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+2 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "age": "Antiquity",
   "civic": "Ritsuryo",
   "civicId": "NODE_CIVIC_AQ_HEIAN_RITSURYO",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Utsurou",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with an [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] [TIP:LOC_PEDIA_CONCEPTS_STATIONED_TOOLTIP]Stationed[/TIP] receive [B]+2 [icon:YIELD_CULTURE][/B] for each [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] on display, but [icon:UNIT_ARMY_COMMANDER] Commanders receive [B]-25% [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP][/B].",
   "age": "Antiquity",
   "civic": "Waka",
   "civicId": "NODE_CIVIC_AQ_HEIAN_WAKA",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Jo-bo System I",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+0.5 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "age": "Antiquity",
   "civic": "Urban Grid",
   "civicId": "NODE_CIVIC_AQ_HEIAN_URBAN_GRID",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Monogatari",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency with Charming tiles and [B]+2 [icon:YIELD_FOOD][/B] Adjacency with [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "age": "Antiquity",
   "civic": "Mono No Aware",
   "civicId": "NODE_CIVIC_AQ_HEIAN_MONO_NO_AWARE",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Jo-bo System II",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_CULTURE][/B] Adjacency for [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "age": "Exploration",
   "civic": "Heian Renaissance",
   "civicId": "NODE_CIVIC_EX_HEIAN_RENAISSANCE",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": "Jo-bo System I"
  },
  {
   "name": "Shikken I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Insei II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Buildings[/TIP] when not in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on Happiness Buildings when in a [icon:CELEBRATION] Celebration.",
   "age": "Modern",
   "civic": "Heian Modernization",
   "civicId": "NODE_CIVIC_MO_HEIAN_MODERNIZATION",
   "civicIcon": "images/civics/heian_civics.png",
   "obsoletes": "Insei I"
  },
  {
   "name": "Shikken II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] and [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on [TIP:LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP]Breathtaking[/TIP] tiles.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Shikken I"
  }
 ],
 "CIVILIZATION_ICELAND": [
  {
   "name": "Dróttkvætt I",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "age": "Antiquity",
   "civic": "Icelandic Origins",
   "civicId": "NODE_CIVIC_AQ_ICELAND_ORIGINS",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Drekahöfuð I",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Dróttkvætt II",
   "text": "Coastal Raiding and Pillaging with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of [icon:Action_Pillage] Pillage Yields and [icon:Action_Heal] Healing.",
   "age": "Exploration",
   "civic": "Landnámabók",
   "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": "Dróttkvætt I"
  },
  {
   "name": "Strandhögg",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] can [icon:Action_Pillage] Pillage and Coastal Raid tiles within 2 tiles. Naval Units can disperse [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Powers[/TIP] or [icon:Action_Pillage] Coastal Raid for [B]1 [icon:Action_Move] Movement[/B] when in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. Does not apply to Discoveries.",
   "age": "Exploration",
   "civic": "Hugins Drekka",
   "civicId": "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Lyfsteinn I",
   "text": "+10 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "age": "Exploration",
   "civic": "Væringjar",
   "civicId": "NODE_CIVIC_EX_ICELAND_VAERINGJAR",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Reiði Guðanna",
   "text": "All [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] gain a [B]+1 [icon:YIELD_CULTURE][/B] Cultural and [icon:YIELD_PRODUCTION] Adjacency from Volcanoes and [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonders[/TIP]. ( [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] Natural Wonder Volcanoes do not count twice) [B]+25% [icon:YIELD_GOLD][/B] towards purchasing [icon:ACTION_IMPROVE] Repairs.",
   "age": "Exploration",
   "civic": "Landnámabók",
   "civicId": "NODE_CIVIC_EX_ICELAND_LANDNAMABOK",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Lyfsteinn II",
   "text": "+20 [icon:Action_Heal] Healing for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] outside friendly territory.",
   "age": "Modern",
   "civic": "Icelandic Modernization",
   "civicId": "NODE_CIVIC_MO_ICELAND_MODERNIZATION",
   "civicIcon": "images/civics/iceland_civics.png",
   "obsoletes": "Lyfsteinn I"
  },
  {
   "name": "Drekahöfuð II",
   "text": "Producing a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of the Unit's [icon:YIELD_PRODUCTION] cost. [B]+1 [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP][/B] for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] for each improved [icon:NOTIFICATION_DISCOVER_NATURAL_WONDER] [TIP:LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP]Natural Wonder[/TIP] in your empire.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Drekahöfuð I"
  }
 ],
 "CIVILIZATION_INCA": [
  {
   "name": "Tirakuna I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Food Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "age": "Antiquity",
   "civic": "Incan Origins",
   "civicId": "NODE_CIVIC_AQ_INCAN_ORIGINS",
   "civicIcon": "images/civics/incan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Huaca I",
   "text": "[B]+10% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Tirakuna II",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] receive an Adjacency for Mountains. [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] does not end Unit [icon:Action_Move] Movement.",
   "age": "Exploration",
   "civic": "Mit'a",
   "civicId": "NODE_CIVIC_EX_INCA_MITA",
   "civicIcon": "images/civics/incan_civics.png",
   "obsoletes": "Tirakuna I"
  },
  {
   "name": "Qullqa I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "age": "Exploration",
   "civic": "Ayllu",
   "civicId": "NODE_CIVIC_EX_INCA_AYLLU",
   "civicIcon": "images/civics/incan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Quipu",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] gain [B]+0.5 [icon:YIELD_GOLD][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Urban Population[/TIP] and [B]+0.5 [icon:YIELD_PRODUCTION][/B] for every [icon:YIELD_POPULATION] Rural Population.",
   "age": "Exploration",
   "civic": "Qhapaq Ñan",
   "civicId": "NODE_CIVIC_EX_INCA_QHAPAQ_NAN",
   "civicIcon": "images/civics/incan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Qullqa II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] for each active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] you started.",
   "age": "Modern",
   "civic": "Incan Modernization",
   "civicId": "NODE_CIVIC_MO_INCAN_MODERNIZATION",
   "civicIcon": "images/civics/incan_civics.png",
   "obsoletes": "Qullqa I"
  },
  {
   "name": "Huaca II",
   "text": "[B]+15% [icon:YIELD_FOOD][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with their [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Center adjacent to a Mountain or with 3 worked Mountain tiles.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Huaca I"
  }
 ],
 "CIVILIZATION_JOSEON": [
  {
   "name": "Yangbeobmiui I",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "age": "Antiquity",
   "civic": "Joseon Origins",
   "civicId": "NODE_CIVIC_AQ_JOSEON_ORIGINS",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Hermit Kingdom I",
   "text": "[B]+0.5 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Gwageo I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. But [B]-0.5 [icon:YIELD_HAPPINESS][/B] on [icon:SPECIALIST] Specialists.",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Yangban Bureaucracy I",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+1 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]2[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Exploration",
   "civic": "Joseon Renaissance",
   "civicId": "NODE_CIVIC_EX_JOSEON_RENAISSANCE",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Hermit Kingdom II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Hermit Kingdom I"
  },
  {
   "name": "Gwageo II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Seongnihak",
   "civicId": "NODE_CIVIC_MO_JOSEON_IHAK",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": "Gwageo I"
  },
  {
   "name": "Silhak",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Seonbi",
   "civicId": "NODE_CIVIC_MO_JOSEON_SEONBI",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Yangbeobmiui II",
   "text": "[B]+0.5 [icon:YIELD_CULTURE][/B] per [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] with a Seowon. [B]-10% [icon:YIELD_CULTURE][/B] in other [icon:YIELD_CITIES] Cities. [B]+15% [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with any Focus.",
   "age": "Modern",
   "civic": "Gyeongguk Daejeon",
   "civicId": "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": "Yangbeobmiui I"
  },
  {
   "name": "Yangban Bureaucracy II",
   "text": "[icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] receive [B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] with at least [B]3[/B] [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Samgang",
   "civicId": "NODE_CIVIC_MO_JOSEON_SAMGANG",
   "civicIcon": "images/civics/joseon_civics.png",
   "obsoletes": "Yangban Bureaucracy I"
  }
 ],
 "CIVILIZATION_KHMER": [
  {
   "name": "Pithi Chrat I",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-5 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Mousong",
   "civicId": "NODE_CIVIC_AQ_KHMER_MOUSONG",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Bon Om Touk",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain an adjacency for [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP]. [B]+3 [icon:NAR_REW_GREATWORK][/B] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Work[/TIP] Slots on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP].",
   "age": "Antiquity",
   "civic": "Amnach",
   "civicId": "NODE_CIVIC_AQ_KHMER_AMNACH",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kambu-Mera I",
   "text": "[B]+50% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Antiquity",
   "civic": "Chakravarti",
   "civicId": "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Municipal Charters",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Pithi Chrat II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP]Floodplains[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], but [B]-10 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Khmer Renaissance",
   "civicId": "NODE_CIVIC_EX_KHMER_RENAISSANCE",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": "Pithi Chrat I"
  },
  {
   "name": "Varna I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Developmentalism",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kambu-Mera II",
   "text": "[B]+100% [icon:YIELD_FOOD][/B] and [icon:YIELD_HAPPINESS] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+1 [icon:SPECIALIST][/B] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP]Specialist Limit[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Modern",
   "civic": "Khmer Modernization",
   "civicId": "NODE_CIVIC_MO_KHMER_MODERNIZATION",
   "civicIcon": "images/civics/khmer_civics.png",
   "obsoletes": "Kambu-Mera I"
  },
  {
   "name": "Varna II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] on [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Varna I"
  }
 ],
 "CIVILIZATION_MAJAPAHIT": [
  {
   "name": "Awisan Dalem I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Majapahit Origins",
   "civicId": "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS",
   "civicIcon": "images/civics/majapahit_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Subak I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+10% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Panji",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "age": "Exploration",
   "civic": "Wayang",
   "civicId": "NODE_CIVIC_EX_MAJAPAHIT_WAYANG",
   "civicIcon": "images/civics/majapahit_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Negarakertagama I",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Exploration",
   "civic": "Aliran Kepercayaan",
   "civicId": "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN",
   "civicIcon": "images/civics/majapahit_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Awisan Dalem II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_UNIMPROVED] Marine Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Exploration",
   "civic": "Nusantara",
   "civicId": "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA",
   "civicIcon": "images/civics/majapahit_civics.png",
   "obsoletes": "Awisan Dalem I"
  },
  {
   "name": "Negarakertagama II",
   "text": "[B]+33% [icon:YIELD_FOOD][/B] towards maintaining [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP]. [B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "age": "Modern",
   "civic": "Majapahit Modernization",
   "civicId": "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION",
   "civicIcon": "images/civics/majapahit_civics.png",
   "obsoletes": "Negarakertagama I"
  },
  {
   "name": "Subak II",
   "text": "[B]+4 [icon:YIELD_FOOD][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] on or adjacent to [icon:CITY_UNIMPROVED] Coast. [B]+15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] adjacent to [icon:CITY_UNIMPROVED] Coast.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Subak I"
  }
 ],
 "CIVILIZATION_MAURYA": [
  {
   "name": "Charvaka I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Acharya",
   "civicId": "NODE_CIVIC_AQ_MAURYA_ACHARYA",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kshatriya",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Infantry and [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] when adjacent to each other, or +5 while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Antiquity",
   "civic": "Vyuham",
   "civicId": "NODE_CIVIC_AQ_MAURYA_VYUHAM",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Arthashastra I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Mantriparishad",
   "civicId": "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Professional Army",
   "text": "[B]+25%[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP] for all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP], or +50% in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Charvaka II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Exploration",
   "civic": "Maurya Renaissance",
   "civicId": "NODE_CIVIC_EX_MAURYA_RENAISSANCE",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": "Charvaka I"
  },
  {
   "name": "Chhatrapati I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Force Structuring",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards constructing [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Arthashastra II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every 5 excess [icon:YIELD_HAPPINESS] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+10% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Modern",
   "civic": "Maurya Modernization",
   "civicId": "NODE_CIVIC_MO_MAURYA_MODERNIZATION",
   "civicIcon": "images/civics/mauryan_civics.png",
   "obsoletes": "Arthashastra I"
  },
  {
   "name": "Chhatrapati II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] and on [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP] Halls in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Chhatrapati I"
  }
 ],
 "CIVILIZATION_MAYA": [
  {
   "name": "Pet Kot",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Rain of Chaac",
   "civicId": "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Miracles of the Twins I",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "age": "Antiquity",
   "civic": "Lords of Xibalba",
   "civicId": "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Tzolk'in I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "age": "Antiquity",
   "civic": "Calendar Round",
   "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Haab' I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP].",
   "age": "Antiquity",
   "civic": "Calendar Round",
   "civicId": "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Miracles of the Twins II",
   "text": "All Units gain the Poison ability, [B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] against [icon:DAMAGED] Wounded Units. Scouts and [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] in [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP]. Ranged Units ignore [icon:CITY_UNIMPROVED] Vegetation for [icon:Action_Move] Movement.",
   "age": "Exploration",
   "civic": "Maya Renaissance",
   "civicId": "NODE_CIVIC_EX_MAYA_RENAISSANCE",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": "Miracles of the Twins I"
  },
  {
   "name": "Milpa I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Haab' II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Modern",
   "civic": "Maya Modernization",
   "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": "Haab' I"
  },
  {
   "name": "Tzolk'in II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP], doubled while in a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Modern",
   "civic": "Maya Modernization",
   "civicId": "NODE_CIVIC_MO_MAYA_MODERNIZATION",
   "civicIcon": "images/civics/maya_civics.png",
   "obsoletes": "Tzolk'in I"
  },
  {
   "name": "Milpa II",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on Happiness and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] placed on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP]Vegetated Terrain[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Milpa I"
  }
 ],
 "CIVILIZATION_MEIJI": [
  {
   "name": "Shusei Kokubō I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP].",
   "age": "Antiquity",
   "civic": "Meiji Origins",
   "civicId": "NODE_CIVIC_AQ_MEIJI_ORIGINS",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kimi I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Fukoku Kyōhei I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. When you train a Naval Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "age": "Exploration",
   "civic": "Meiji Renaissance",
   "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": ""
  },
  {
   "name": "O-yatoi Gaikokujin I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Meiji Renaissance",
   "civicId": "NODE_CIVIC_EX_MEIJI_RENAISSANCE",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kimi II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_EMPIRE_RESOURCES_TOOLTIP]Empire Resource[/TIP]. [B]+1 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to Coast for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Fukoku Kyōhei II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP]Aircraft[/TIP] Units. When you train a Naval or Aircraft Unit, receive [icon:YIELD_SCIENCE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "age": "Modern",
   "civic": "Bunmei Kaika",
   "civicId": "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": "Fukoku Kyōhei I"
  },
  {
   "name": "O-yatoi Gaikokujin II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_SCIENCE] from [icon:SPECIALIST] [TIP:LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP]Specialists[/TIP].",
   "age": "Modern",
   "civic": "Oath in Five Articles",
   "civicId": "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Shusei Kokubō II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards Military and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP]. Military and Science Buildings receive an adjacency for Coast.",
   "age": "Modern",
   "civic": "Supreme War Council",
   "civicId": "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": "Shusei Kokubō I"
  },
  {
   "name": "Kōkūtai",
   "text": "[B]+6 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Aircraft attacking an enemy Unit adjacent to a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP].",
   "age": "Modern",
   "civic": "Kantai Kessen",
   "civicId": "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN",
   "civicIcon": "images/civics/meiji_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_MEXICO": [
  {
   "name": "Order and Progress I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Antiquity",
   "civic": "Mexico Origins",
   "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Muralismo I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Antiquity",
   "civic": "Mexico Origins",
   "civicId": "NODE_CIVIC_AQ_MEXICO_ORIGINS",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Campesinos I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +5 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "La Reforma I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a Growing Focus for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Exploration",
   "civic": "Mexico Renaissance",
   "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Muralismo II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Exploration",
   "civic": "Mexico Renaissance",
   "civicId": "NODE_CIVIC_EX_MEXICO_RENAISSANCE",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": "Muralismo I"
  },
  {
   "name": "Campesinos II",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP]. +10 to all Yields in the [icon:NOTIFICATION_SELECT_CAPITAL] Capital during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Campesinos I"
  },
  {
   "name": "Corridos",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Modern",
   "civic": "Planes Políticos",
   "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Cry of Dolores",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP] in friendly territory for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Modern",
   "civic": "Plan of Iguala",
   "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": ""
  },
  {
   "name": "La Reforma II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Modern",
   "civic": "Plan of Ayutla",
   "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": "La Reforma I"
  },
  {
   "name": "Order and Progress II",
   "text": "[B]+4 [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted into the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Modern",
   "civic": "Plan of Tuxtepec",
   "civicId": "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": "Order and Progress I"
  },
  {
   "name": "Muralismo III",
   "text": "[B]+6 [icon:YIELD_HAPPINESS][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Modern",
   "civic": "Planes Políticos",
   "civicId": "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS",
   "civicIcon": "images/civics/mexico_civics.png",
   "obsoletes": "Muralismo II"
  }
 ],
 "CIVILIZATION_MING": [
  {
   "name": "Baojia I",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "age": "Antiquity",
   "civic": "Ming Origins",
   "civicId": "NODE_CIVIC_AQ_MING_ORIGINS",
   "civicIcon": "images/civics/ming_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Chaogong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Divine Engine Division",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] Unit. [B]+3 [icon:Action_Ranged] Ranged Combat Strength[/B] to [TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] adjacent to another Ranged Unit.",
   "age": "Exploration",
   "civic": "Nine Garrisons",
   "civicId": "NODE_CIVIC_EX_MING_NINE_GARRISONS",
   "civicIcon": "images/civics/ming_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Baojia II",
   "text": "[B]+1 [icon:YIELD_SCIENCE][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to a [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]City[/TIP]. This becomes +2 in [icon:YIELD_CITIES] Cities other than your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Lijia",
   "civicId": "NODE_CIVIC_EX_MING_LIJIA",
   "civicIcon": "images/civics/ming_civics.png",
   "obsoletes": "Baojia I"
  },
  {
   "name": "Grand Secretariat I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+2 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "age": "Exploration",
   "civic": "Da Ming Lu",
   "civicId": "NODE_CIVIC_EX_MING_DA_MING_LU",
   "civicIcon": "images/civics/ming_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Grand Secretariat II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] on [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP] and [B]+3 [icon:YIELD_GOLD][/B] on Science Buildings.",
   "age": "Modern",
   "civic": "Ming Modernization",
   "civicId": "NODE_CIVIC_MO_MING_MODERNIZATION",
   "civicIcon": "images/civics/ming_civics.png",
   "obsoletes": "Grand Secretariat I"
  },
  {
   "name": "Chaogong II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] slotted into your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Chaogong I"
  }
 ],
 "CIVILIZATION_MISSISSIPPIAN": [
  {
   "name": "Shell-Tempered Pottery I",
   "text": "Food, Gold, and [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] Adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "age": "Antiquity",
   "civic": "Earthworks",
   "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Gift Economy I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_HAPPINESS] for every imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "age": "Antiquity",
   "civic": "Cah-nah-ha",
   "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Buzzard Cult",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP] when defending. When making Peace with another Leader, [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with that Leader returns to Neutral and you get a free [icon:UNIT_MERCHANT] Merchant in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Waahih",
   "civicId": "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Yanakuna",
   "text": "Food [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_FOOD][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "age": "Exploration",
   "civic": "Hierarchy",
   "civicId": "NODE_CIVIC_EX_HIERARCHY",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Gift Economy II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [B]+2 [icon:YIELD_HAPPINESS][/B] from imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "age": "Exploration",
   "civic": "Mississippian Renaissance",
   "civicId": "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": "Gift Economy I"
  },
  {
   "name": "Sacrificial Effigies I",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Industrial Agriculture",
   "text": "Production [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] gain a [B]+1 [icon:YIELD_PRODUCTION][/B] Adjacency for [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Shell Tempered Pottery II",
   "text": "All [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] receive a [B]+1 [icon:YIELD_GOLD][/B] adjacency for [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "age": "Modern",
   "civic": "Mississippian Modernization",
   "civicId": "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION",
   "civicIcon": "images/civics/mississippian_civics.png",
   "obsoletes": "Shell-Tempered Pottery I"
  },
  {
   "name": "Sacrificial Effigies II",
   "text": "[TIP:LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP]Ranged Units[/TIP] apply the [icon:PLOT_BURNING] [TIP:LOC_PEDIA_CONCEPTS_BURNING_TOOLTIP]Burning Status[/TIP] to tiles for 2 turns when attacking. [B]+50 [icon:YIELD_GOLD][/B] per [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] on [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] creation. Scales by Gamespeed.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Sacrificial Effigies I"
  }
 ],
 "CIVILIZATION_MONGOLIA": [
  {
   "name": "Warrior Class",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training all [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commanders[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] for every Unit packed into [icon:UNIT_ARMY_COMMANDER] Commanders.",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Baghatur I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "age": "Antiquity",
   "civic": "Mongolia Origins",
   "civicId": "NODE_CIVIC_AQ_MONGOLIA_ORIGINS",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Jarugachi I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Gerege",
   "text": "[B]+4 [icon:YIELD_HAPPINESS][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Exploration",
   "civic": "Ulus",
   "civicId": "NODE_CIVIC_EX_MONGOLIA_ULUS",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Baghatur II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "age": "Exploration",
   "civic": "Four Hounds",
   "civicId": "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": "Baghatur I"
  },
  {
   "name": "Jarlig I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Exploration",
   "civic": "Yassa",
   "civicId": "NODE_CIVIC_EX_MONGOLIA_YASSA",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Jarlig II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Captured Cities[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Captured Towns[/TIP] do not cost double to convert into [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Modern",
   "civic": "Mongolia Modernization",
   "civicId": "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION",
   "civicIcon": "images/civics/mongolian_civics.png",
   "obsoletes": "Jarlig I"
  },
  {
   "name": "Jarugachi II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] and [icon:YIELD_PRODUCTION] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Horse Resources[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+50% [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] from [TIP:LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP]Flanking[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Jarugachi I"
  }
 ],
 "CIVILIZATION_MUGHAL": [
  {
   "name": "Qilachas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Antiquity",
   "civic": "Mughal Origins",
   "civicId": "NODE_CIVIC_AQ_MUGHAL_ORIGINS",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Karkhanas I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Mayūrāsana I",
   "text": "[B]+5% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Exploration",
   "civic": "Mughal Renaissance",
   "civicId": "NODE_CIVIC_EX_MUGHAL_RENAISSANCE",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Karkhanas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on Farms in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], [icon:YIELD_WAREHOUSE] [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse[/TIP] Bonus.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Karkhanas I"
  },
  {
   "name": "Jins-i Kamil",
   "text": "[B]+1 [icon:YIELD_FOOD][/B] on Farms for each adjacent Plantation, and on Plantations for each adjacent Farm.",
   "age": "Modern",
   "civic": "Zabt",
   "civicId": "NODE_CIVIC_MO_MUGHAL_ZABT",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Qilachas II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Modern",
   "civic": "Jagir",
   "civicId": "NODE_CIVIC_MO_MUGHAL_JAGIR",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": "Qilachas I"
  },
  {
   "name": "Gunpowder Empire",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units.",
   "age": "Modern",
   "civic": "Mansabdari",
   "civicId": "NODE_CIVIC_MO_MUGHAL_MANSABDARI",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Mayūrāsana II",
   "text": "[B]+10% [icon:YIELD_GOLD][/B] towards purchasing Units, [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP], [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
   "age": "Modern",
   "civic": "Gardens of Paradise",
   "civicId": "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE",
   "civicIcon": "images/civics/mughal_civics.png",
   "obsoletes": "Mayūrāsana I"
  }
 ],
 "CIVILIZATION_NEPAL": [
  {
   "name": "Himāl I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Antiquity",
   "civic": "Nepali Origins",
   "civicId": "NODE_CIVIC_AQ_NEPAL_ORIGINS",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kumar and Kumari I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Maitri Sandhi I",
   "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +10% otherwise.",
   "age": "Exploration",
   "civic": "Nepali Renaissance",
   "civicId": "NODE_CIVIC_EX_NEPAL_RENAISSANCE",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kumar and Kumari II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [TIP:LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP]Warehouse Buildings[/TIP]. [B]+1 [icon:YIELD_DIPLOMACY][/B] on Mountains.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Kumar and Kumari I"
  },
  {
   "name": "Tundikhel",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units adjacent to [icon:CITY_UNIMPROVED] Mountains. This is doubled if the Unit is also in your territory. Units complete [icon:Action_Fortify] Fortifications in 1 turn if adjacent to a [icon:CITY_UNIMPROVED] Mountain.",
   "age": "Modern",
   "civic": "Jyumdo Bagha",
   "civicId": "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Maitri Sandhi II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavors[/TIP] if you have the least amount of [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], +20% otherwise.",
   "age": "Modern",
   "civic": "Singha Durbar",
   "civicId": "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": "Maitri Sandhi I"
  },
  {
   "name": "Himāl II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], [B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIMPROVED] Mountain Terrain in other [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Modern",
   "civic": "Gorkhapatra",
   "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": "Himāl I"
  },
  {
   "name": "Sagarmatha",
   "text": "Food and [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Science Buildings[/TIP] receive an Adjacency from [icon:CITY_UNIMPROVED] Mountains.",
   "age": "Modern",
   "civic": "Gorkhapatra",
   "civicId": "NODE_CIVIC_MO_NEPAL_GORKHAPATRA",
   "civicIcon": "images/civics/nepal_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_NORMAN": [
  {
   "name": "Priestly Class",
   "text": "[icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Buildings[/TIP] cost no [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Foundation",
   "civicId": "NODE_CIVIC_AQ_FOUNDATION",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Juré I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+1 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Antiquity",
   "civic": "Norman Origins",
   "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Palisading I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "age": "Antiquity",
   "civic": "Norman Origins",
   "civicId": "NODE_CIVIC_AQ_NORMAN_ORIGINS",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Sauveté I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Palisading II",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards constructing [icon:CITY_FORTIFIED] Fortification Constructibles. [B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_PRODUCTION] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP].",
   "age": "Exploration",
   "civic": "Consuetudines et Justicie",
   "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": "Palisading I"
  },
  {
   "name": "Juré II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] and [B]+2 [icon:YIELD_HAPPINESS][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Exploration",
   "civic": "Common Law",
   "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": "Juré I"
  },
  {
   "name": "Bayeux Tapestry I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "age": "Exploration",
   "civic": "Domesday Book",
   "civicId": "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Familia Regis",
   "text": "The [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] gains a [B]+1 [icon:YIELD_HAPPINESS][/B] Adjacency for [icon:CITY_FORTIFIED] Fortification Constructibles.",
   "age": "Exploration",
   "civic": "Consuetudines et Justicie",
   "civicId": "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Servitium Debitum",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP]Cavalry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Cavalry Units.",
   "age": "Exploration",
   "civic": "Common Law",
   "civicId": "NODE_CIVIC_EX_NORMAN_COMMON_LAW",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Bayeux Tapestry II",
   "text": "[B]+6 [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. Gain a free [icon:CITY_FORTIFIED] Fortification purchase in Captured Settlements.",
   "age": "Modern",
   "civic": "Norman Modernization",
   "civicId": "NODE_CIVIC_MO_NORMAN_MODERNIZATION",
   "civicIcon": "images/civics/norman_civics.png",
   "obsoletes": "Bayeux Tapestry I"
  },
  {
   "name": "Sauveté II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] on [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified Districts[/TIP], doubled in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP]. [B]+25 [icon:Action_Heal] HP[/B] on [icon:CITY_FORTIFIED] Fortified Districts.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Sauveté I"
  }
 ],
 "CIVILIZATION_OTTOMANS": [
  {
   "name": "Sedef Kakma I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+3 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "age": "Antiquity",
   "civic": "Ottoman Origins",
   "civicId": "NODE_CIVIC_AQ_OTTOMANS_ORIGINS",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Mehterân I",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Osmanlı Barok I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "age": "Exploration",
   "civic": "Ottoman Renaissance",
   "civicId": "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Mehterân II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege Units[/TIP]. [B]+1 [icon:Action_Move] Movement[/B] for [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Units[/TIP]. Training a Siege Unit grants [icon:YIELD_HAPPINESS] towards [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebrations[/TIP] equal to 50% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Mehterân I"
  },
  {
   "name": "Siege Train",
   "text": "When a unit destroys a [icon:CITY_FORTIFIED] [TIP:LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP]Fortified District's[/TIP] defenses, all other [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] have their [icon:Action_Move] Movement restored.",
   "age": "Modern",
   "civic": "Şahi Topu",
   "civicId": "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Erkân-ı Harbiye Mektebi",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP]Siege[/TIP] and [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. -2 [icon:YIELD_GOLD] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Gold Maintenance[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP].",
   "age": "Modern",
   "civic": "Harbiye Nezâreti",
   "civicId": "NODE_CIVIC_MO_OTTOMANS_HARBIYE_NEZARETI",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Sedef Kakma II",
   "text": "[B]+5 [icon:YIELD_CULTURE][/B] on [icon:CITY_UNIQUE_QUARTER] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP]Quarters[/TIP] with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP][/B]. [B]+5 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_UNIQUE_QUARTER] Quarters with at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Culture Building[/TIP][/B].",
   "age": "Modern",
   "civic": "Lâle Devri",
   "civicId": "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": "Sedef Kakma I"
  },
  {
   "name": "Osmanlı Barok II",
   "text": "[B]+3 [icon:YIELD_HAPPINESS][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP]. [B]+15% [icon:YIELD_PRODUCTION][/B] towards constructing Museums.",
   "age": "Modern",
   "civic": "Tanẓîmât",
   "civicId": "NODE_CIVIC_MO_OTTOMANS_TANZIMAT",
   "civicIcon": "images/civics/ottomans_civics.png",
   "obsoletes": "Osmanlı Barok I"
  }
 ],
 "CIVILIZATION_PERSIA": [
  {
   "name": "Kara I",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units.",
   "age": "Antiquity",
   "civic": "Spada",
   "civicId": "NODE_CIVIC_AQ_PERSIA_SPADA",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": ""
  },
  {
   "name": "Čāpār-Kāna I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Antiquity",
   "civic": "Satrapies",
   "civicId": "NODE_CIVIC_AQ_PERSIA_SATRAPIES",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": ""
  },
  {
   "name": "Shahanshah I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in enemy territory. [B]+5 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "age": "Antiquity",
   "civic": "Baziš",
   "civicId": "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": ""
  },
  {
   "name": "Kara II",
   "text": "[B]+25% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP]. [B]-3 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Infantry Units. Infantry Units [icon:Action_Heal] Heal [B]15 [icon:Action_Heal] HP[/B] after defeating an enemy Unit.",
   "age": "Exploration",
   "civic": "Achaemenid Persian Renaissance",
   "civicId": "NODE_CIVIC_EX_PERSIA_RENAISSANCE",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": "Kara I"
  },
  {
   "name": "Fractal Rule I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+1 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Čāpār-Kāna II",
   "text": "[B]+6 [icon:YIELD_GOLD][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Captured [icon:YIELD_TOWNS] Towns from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Modern",
   "civic": "Achaemenid Persian Modernization",
   "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": "Čāpār-Kāna I"
  },
  {
   "name": "Shahanshah II",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units fighting in enemy territory. [B]+10 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] for every different Civilization you have captured a [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] from.",
   "age": "Modern",
   "civic": "Achaemenid Persian Modernization",
   "civicId": "NODE_CIVIC_MO_PERSIA_MODERNIZATION",
   "civicIcon": "images/civics/achaemenid_persian_civic.png",
   "obsoletes": "Shahanshah I"
  },
  {
   "name": "Fractal Rule II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] on Unique Improvements and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Fractal Rule I"
  }
 ],
 "CIVILIZATION_PIRATE_REPUBLIC": [
  {
   "name": "Black Flag I",
   "text": "[B]+50 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +50% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "age": "Antiquity",
   "civic": "Pirate Origins",
   "civicId": "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS",
   "civicIcon": "images/civics/republic_of_pirates_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Brethren of the Coast I",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-1 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Press Gangs I",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "age": "Exploration",
   "civic": "Articles of Agreement",
   "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT",
   "civicIcon": "images/civics/republic_of_pirates_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Merry Life and a Short One",
   "text": "When you defeat a [TIP:LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP]Support Unit[/TIP], gain [icon:YIELD_GOLD] equal to the Unit’s [icon:YIELD_PRODUCTION] cost. When you defeat a [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP], gain [icon:YIELD_GOLD] equal to 25% of the Unit’s [icon:YIELD_PRODUCTION] cost.",
   "age": "Exploration",
   "civic": "Ports of Call",
   "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL",
   "civicIcon": "images/civics/republic_of_pirates_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Black Flag II",
   "text": "[B]+100 [icon:YIELD_GOLD][/B] (Scales with Game Speed) from [icon:Action_Pillage] Plundering [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP]. +100% Yields and [icon:Action_Heal] Healing from [icon:Action_Pillage] Coastal Raiding with [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] and Naval Units gain [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth[/TIP] on Atolls.",
   "age": "Exploration",
   "civic": "Enemy of All Nations",
   "civicId": "NODE_CIVIC_EX_PIRATE_REPUBLIC_ENEMY_OF_ALL_NATIONS",
   "civicIcon": "images/civics/republic_of_pirates_civics.png",
   "obsoletes": "Black Flag I"
  },
  {
   "name": "Press Gangs II",
   "text": "[B]+150% [icon:YIELD_PRODUCTION][/B] and [icon:YIELD_GOLD] towards training Light [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commander[/TIP] gain the [icon:NAR_REW_PROMOTION] [TIP:LOC_PROMOTION_FLEET_LOOTING_DESCRIPTION]Looting Promotion[/TIP] for free.",
   "age": "Modern",
   "civic": "Pirate Modernization",
   "civicId": "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION",
   "civicIcon": "images/civics/republic_of_pirates_civics.png",
   "obsoletes": "Press Gangs I"
  },
  {
   "name": "Brethren of the Coast II",
   "text": "[B]+3 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]-2 [icon:YIELD_HAPPINESS][/B] on [icon:CITY_URBAN] Districts not on or adjacent to Coast.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Brethren of the Coast I"
  }
 ],
 "CIVILIZATION_PRUSSIA": [
  {
   "name": "Coking I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to it.",
   "age": "Antiquity",
   "civic": "Prussian Origins",
   "civicId": "NODE_CIVIC_AQ_PRUSSIA_ORIGINS",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Tugenden I",
   "text": "[B]+2 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Realpolitik I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "age": "Exploration",
   "civic": "Prussian Renaissance",
   "civicId": "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Tugenden II",
   "text": "[B]+3 [icon:YIELD_SCIENCE][/B] from active [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanctions[/TIP] you started.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Tugenden I"
  },
  {
   "name": "Coking II",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Ruhr",
   "civicId": "NODE_CIVIC_MO_PRUSSIA_RUHR",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": "Coking I"
  },
  {
   "name": "Mediatization",
   "text": "[B]+10% [icon:YIELD_CULTURE][/B] in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Captured Settlements[/TIP] from any [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
   "age": "Modern",
   "civic": "Zollverein",
   "civicId": "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Realpolitik II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [icon:PLAYER_RELATIONSHIP_UNFRIENDLY] Unfriendly or [icon:PLAYER_RELATIONSHIP_HOSTILE] Hostile [icon:RELATIONSHIP] [TIP:LOC_PEDIA_CONCEPTS_RELATIONSHIP_TOOLTIP]Relationship[/TIP] with another Leader.",
   "age": "Modern",
   "civic": "Ems Dispatch",
   "civicId": "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": "Realpolitik I"
  },
  {
   "name": "Iron Cross",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units within the [icon:COMMANDER_RADIUS] [TIP:LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP]Command Radius[/TIP] of a [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP]Commendation[/TIP].",
   "age": "Modern",
   "civic": "Bewegungskrieg",
   "civicId": "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG",
   "civicIcon": "images/civics/prussian_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_QAJAR": [
  {
   "name": "Dār al-Fonūn I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [B]+3 [icon:YIELD_SCIENCE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "age": "Antiquity",
   "civic": "Qajar Origins",
   "civicId": "NODE_CIVIC_AQ_QAJAR_ORIGINS",
   "civicIcon": "images/civics/qajar_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Waqāye'-e Ettefāqiya I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Soleymaniyeh Palace I",
   "text": "[B]+0.25 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Exploration",
   "civic": "Qajar Renaissance",
   "civicId": "NODE_CIVIC_EX_QAJAR_RENAISSANCE",
   "civicIcon": "images/civics/qajar_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Waqāye'-e Ettefāqiya II",
   "text": "[B]+1 [icon:YIELD_HAPPINESS][/B] and [icon:YIELD_DIPLOMACY] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Waqāye'-e Ettefāqiya I"
  },
  {
   "name": "Soleymaniyeh Palace II",
   "text": "[B]+0.5 [icon:YIELD_DIPLOMACY][/B] for every [icon:YIELD_POPULATION] [TIP:LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP]Population[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Modern",
   "civic": "The Sun Throne",
   "civicId": "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE",
   "civicIcon": "images/civics/qajar_civics.png",
   "obsoletes": "Soleymaniyeh Palace I"
  },
  {
   "name": "Dār al-Fonūn II",
   "text": "[B]+10 [icon:YIELD_SCIENCE][/B] and [icon:YIELD_CULTURE] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "age": "Modern",
   "civic": "Twelve Gates",
   "civicId": "NODE_CIVIC_MO_QAJAR_TWELVE_GATES",
   "civicIcon": "images/civics/qajar_civics.png",
   "obsoletes": "Dār al-Fonūn I"
  },
  {
   "name": "Qullarāqāsi",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land[/TIP] [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] for every [B]2[/B] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] under the [icon:SETTLEMENT_LIMIT] [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP]Settlement Limit[/TIP].",
   "age": "Modern",
   "civic": "Neẓām-e J̌adīd",
   "civicId": "NODE_CIVIC_MO_QAJAR_NEZAM_E_JADID",
   "civicIcon": "images/civics/qajar_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_QING": [
  {
   "name": "Tun Ken I",
   "text": "[B]+25% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Antiquity",
   "civic": "Qing Origins",
   "civicId": "NODE_CIVIC_AQ_QING_ORIGINS",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ethnic Stratification I",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Cohong I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to it.",
   "age": "Exploration",
   "civic": "Qing Renaissance",
   "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Banner Army I",
   "text": "[B]+20% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-1 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "age": "Exploration",
   "civic": "Qing Renaissance",
   "civicId": "NODE_CIVIC_EX_QING_RENAISSANCE",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ethnic Stratification II",
   "text": "[B]+2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP]Resource Capacity[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] founded by you.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Ethnic Stratification I"
  },
  {
   "name": "Tun Ken II",
   "text": "[B]+50% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Ten Great Campaigns",
   "civicId": "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": "Tun Ken I"
  },
  {
   "name": "Cohong II",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for every [B]2 [icon:RADIAL_RESOURCES][/B] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Open Customs",
   "civicId": "NODE_CIVIC_MO_QING_OPEN_CUSTOMS",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": "Cohong I"
  },
  {
   "name": "Farmland Assessment",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP] assigned to them.",
   "age": "Modern",
   "civic": "Kang Xi Tax Reformation",
   "civicId": "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Banner Army II",
   "text": "[B]+30% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-2 [icon:YIELD_GOLD][/B] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] for Land Units.",
   "age": "Modern",
   "civic": "Stabilizing Frontier",
   "civicId": "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER",
   "civicIcon": "images/civics/qing_civics.png",
   "obsoletes": "Banner Army I"
  }
 ],
 "CIVILIZATION_ROME": [
  {
   "name": "Auxilia I",
   "text": "[B]+3% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 25% of its [icon:YIELD_PRODUCTION] cost.",
   "age": "Antiquity",
   "civic": "Exercitus Romanus",
   "civicId": "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Cursus Honorum",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on Diplomacy and [icon:CITY_BUILDING_LIST] [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Military Buildings[/TIP], doubled if a [icon:CITY_BUILDING_LIST] Building is both. [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commanders[/TIP] gain the Bulwark [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "age": "Antiquity",
   "civic": "Civis Romanus",
   "civicId": "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Latinitas I",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns.",
   "age": "Antiquity",
   "civic": "Legatus Pro Praetore",
   "civicId": "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Princeps Civitatis I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Antiquity",
   "civic": "Senatus Populusque Romanus",
   "civicId": "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Latinitas II",
   "text": "[B]+2 [icon:YIELD_FOOD][/B] and [icon:YIELD_CULTURE] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP], doubled in Fort [icon:YIELD_TOWNS] Towns. These numbers are doubled again in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "age": "Exploration",
   "civic": "Roman Renaissance",
   "civicId": "NODE_CIVIC_EX_ROMAN_RENAISSANCE",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": "Latinitas I"
  },
  {
   "name": "Limitanei I",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Auxilia II",
   "text": "[B]+5% [icon:YIELD_PRODUCTION][/B] towards [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP]. Training an [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] grants [icon:YIELD_CULTURE] equal to 50% of its [icon:YIELD_PRODUCTION] cost.",
   "age": "Modern",
   "civic": "Roman Modernization",
   "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": "Auxilia I"
  },
  {
   "name": "Princeps Civitatis II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
   "age": "Modern",
   "civic": "Roman Modernization",
   "civicId": "NODE_CIVIC_MO_ROMAN_MODERNIZATION",
   "civicIcon": "images/civics/roman_civics.png",
   "obsoletes": "Princeps Civitatis I"
  },
  {
   "name": "Limitanei II",
   "text": "[B]+1 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Units[/TIP] for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP]. [B]+3 [icon:YIELD_CULTURE][/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Town[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Limitanei I"
  }
 ],
 "CIVILIZATION_RUSSIA": [
  {
   "name": "General Moroz I",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "age": "Antiquity",
   "civic": "Russian Origins",
   "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Západnichestvo I",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Antiquity",
   "civic": "Russian Origins",
   "civicId": "NODE_CIVIC_AQ_RUSSIA_ORIGINS",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Skazki I",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Krestyanskaya Reforma I",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B], but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP].",
   "age": "Exploration",
   "civic": "Russian Renaissance",
   "civicId": "NODE_CIVIC_EX_RUSSIA_RENAISSANCE",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Skazki II",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP]. [B]+3 [icon:YIELD_SCIENCE][/B] on [icon:WONDER] Wonders in Tundra.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Skazki I"
  },
  {
   "name": "Krestyanskaya Reforma II",
   "text": "[B]+15% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_PRODUCTION][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:GROWTH_RATE][/B] [TIP:LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP]Growth Rate[/TIP] in [icon:YIELD_CITIES] Cities.",
   "age": "Modern",
   "civic": "Serfdom",
   "civicId": "NODE_CIVIC_MO_RUSSIA_SERFDOM",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": "Krestyanskaya Reforma I"
  },
  {
   "name": "Západnichestvo II",
   "text": "[B]+15% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP], or [B]+20% [icon:YIELD_SCIENCE][/B] in [icon:YIELD_CITIES] Cities in Tundra, but [B]-15% [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] Cities.",
   "age": "Modern",
   "civic": "Table of Ranks",
   "civicId": "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": "Západnichestvo I"
  },
  {
   "name": "General Moroz II",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for Units in Tundra. Enemy Units in your territory take double [icon:DAMAGED] Damage from Blizzards. Your Units, [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP], and [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] are immune to [icon:DAMAGED] Damage from Blizzards.",
   "age": "Modern",
   "civic": "Samoderzhaviye",
   "civicId": "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE",
   "civicIcon": "images/civics/russian_civics.png",
   "obsoletes": "General Moroz I"
  }
 ],
 "CIVILIZATION_SENGOKU": [
  {
   "name": "Gekokujo I",
   "text": "[B]+50% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "age": "Antiquity",
   "civic": "Sengoku Origins",
   "civicId": "NODE_CIVIC_AQ_SENGOKU_FOUNDATION",
   "civicIcon": "images/civics/sengoku_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Bushido I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Gekokujo II",
   "text": "[B]+100% [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP][/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_EXPERIENCE_TOOLTIP]XP[/TIP]. But all [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP] have an additional [icon:YIELD_HAPPINESS] [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP].",
   "age": "Exploration",
   "civic": "Ikki",
   "civicId": "NODE_CIVIC_EX_SENGOKU_IKKI",
   "civicIcon": "images/civics/sengoku_civics.png",
   "obsoletes": "Gekokujo I"
  },
  {
   "name": "Kabunakama I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "age": "Exploration",
   "civic": "Rakuichi-Rakuza",
   "civicId": "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA",
   "civicIcon": "images/civics/sengoku_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Daimyo",
   "text": "Land [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] fight as though they were at full [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] even when [icon:DAMAGED] Damaged.",
   "age": "Exploration",
   "civic": "Kinsei",
   "civicId": "NODE_CIVIC_EX_SENGOKU_KINSEI",
   "civicIcon": "images/civics/sengoku_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Kabunakama II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] for each [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] it has active. [B]+3[/B] [icon:NAR_REW_COMBAT] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] to all [TIP:LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP]Land Units[/TIP]. [B]-25 [icon:YIELD_GOLD][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] without a [TIP:LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP]Garrisoned[/TIP] unit.",
   "age": "Modern",
   "civic": "Sengoku Modernization",
   "civicId": "NODE_CIVIC_MO_SENGOKU_MODERNIZATION",
   "civicIcon": "images/civics/sengoku_civics.png",
   "obsoletes": "Kabunakama I"
  },
  {
   "name": "Bushido II",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for every [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] Level. [icon:UNIT_ARMY_COMMANDER] Army Commanders gain the Old Guard [TIP:LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP]Promotion[/TIP] for free.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Bushido I"
  }
 ],
 "CIVILIZATION_SHAWNEE": [
  {
   "name": "Helikhilenawewipe I",
   "text": "[B]+33% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "age": "Antiquity",
   "civic": "Shawnee Origins",
   "civicId": "NODE_CIVIC_AQ_SHAWNEE_ORIGINS",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Strategic Gifts I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+2 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Bread Dance I",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+4 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "age": "Exploration",
   "civic": "Wiyehi Simekofi",
   "civicId": "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Niwiitikeemekonaaki I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Exploration",
   "civic": "Miyaska Latoweki",
   "civicId": "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Helikhilenawewipe II",
   "text": "[B]+50% [icon:YIELD_DIPLOMACY][/B] towards the initiating and progressing the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP].",
   "age": "Exploration",
   "civic": "Telwatiki",
   "civicId": "NODE_CIVIC_EX_SHAWNEE_TELWATIKI",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": "Helikhilenawewipe I"
  },
  {
   "name": "Takesiyake Yepepoki",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Tundra, Desert, and Plains Terrain in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. These numbers are doubled if the tile is also [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable River[/TIP] Terrain.",
   "age": "Exploration",
   "civic": "Maleki Kintake",
   "civicId": "NODE_CIVIC_EX_SHAWNEE_MALEKI_KINTAKE",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Bread Dance II",
   "text": "[B]+8 [icon:YIELD_CULTURE][/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Farming Towns[/TIP] and [B]+8 [icon:YIELD_FOOD][/B] in [icon:YIELD_TOWNS] Fishing Towns.",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": "Bread Dance I"
  },
  {
   "name": "Niwiitikeemekonaaki II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] on the [icon:CITY_RURAL] Mawaskawe Skote for every [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Shawnee Modernization",
   "civicId": "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION",
   "civicIcon": "images/civics/shawnee_civics.png",
   "obsoletes": "Niwiitikeemekonaaki I"
  },
  {
   "name": "Strategic Gifts II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] adjacent to [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [B]+4 [icon:YIELD_GOLD][/B] per [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Strategic Gifts I"
  }
 ],
 "CIVILIZATION_SIAM": [
  {
   "name": "Monthon I",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Antiquity",
   "civic": "Siamese Origins",
   "civicId": "NODE_CIVIC_AQ_SIAM_ORIGINS",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Chatusadom I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "San Lak Mueang I",
   "text": "[B]+1 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "age": "Exploration",
   "civic": "Siamese Renaissance",
   "civicId": "NODE_CIVIC_EX_SIAM_RENAISSANCE",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Chatusadom II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_DIPLOMACY] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Chatusadom I"
  },
  {
   "name": "San Lak Mueang II",
   "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] from [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Buildings[/TIP].",
   "age": "Modern",
   "civic": "Nine Gems",
   "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": "San Lak Mueang I"
  },
  {
   "name": "Prathetsarat",
   "text": "[B]+20% [icon:YIELD_DIPLOMACY][/B] towards initiating [icon:DIPLOMATIC_ACTION] Diplomatic Actions with [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP].",
   "age": "Modern",
   "civic": "Mandala",
   "civicId": "NODE_CIVIC_MO_SIAM_MANDALA",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Monthon II",
   "text": "[B]+5 [icon:YIELD_GOLD][/B] and [B]+3 [icon:YIELD_CULTURE][/B] on the [TIP:LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP]Palace[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Sriwilai",
   "civicId": "NODE_CIVIC_MO_SIAM_SRIWILAI",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": "Monthon I"
  },
  {
   "name": "Sakdina",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] and [B]+2 [icon:YIELD_DIPLOMACY][/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] for each [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] you are [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of.",
   "age": "Modern",
   "civic": "Nine Gems",
   "civicId": "NODE_CIVIC_MO_SIAM_NINE_GEMS",
   "civicIcon": "images/civics/siam_civics.png",
   "obsoletes": ""
  }
 ],
 "CIVILIZATION_SILLA": [
  {
   "name": "Beopseong I",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Happiness Building[/TIP].",
   "age": "Antiquity",
   "civic": "Kolp'um",
   "civicId": "NODE_CIVIC_AQ_SILLA_KOLP_UM",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Strategic Allies",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_FOOD] and [icon:YIELD_PRODUCTION] to both players equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "age": "Antiquity",
   "civic": "Samguk Sagi",
   "civicId": "NODE_CIVIC_AQ_SILLA_SAMGUK_SAGI",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": ""
  },
  {
   "name": "The Golden Road I",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players equal to 50% of the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "age": "Antiquity",
   "civic": "Seonggol",
   "civicId": "NODE_CIVIC_AQ_SILLA_SEONGGOL",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Seorabeol I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "age": "Antiquity",
   "civic": "Jingol",
   "civicId": "NODE_CIVIC_AQ_SILLA_JINGOL",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Seorabeol II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] and [icon:YIELD_DIPLOMACY] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] assigned to Trade Outpost [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "age": "Exploration",
   "civic": "Silla Renaissance",
   "civicId": "NODE_CIVIC_EX_SILLA_RENAISSANCE",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": "Seorabeol I"
  },
  {
   "name": "Revised Bone-Rank I",
   "text": "[B]+1 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Beopseong II",
   "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP].",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": "Beopseong I"
  },
  {
   "name": "The Golden Road II",
   "text": "All [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] between you and your [icon:PLAYER_RELATIONSHIP_ALLIANCE] [TIP:LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP]Allies[/TIP] grant [icon:YIELD_SCIENCE] and [icon:YIELD_CULTURE] to both players [icon:YIELD_CULTURE] equal to the route's [icon:TRADE_INCOME] [TIP:LOC_PEDIA_CONCEPTS_TRADE_INCOME_TOOLTIP]Trade Income[/TIP].",
   "age": "Modern",
   "civic": "Silla Modernization",
   "civicId": "NODE_CIVIC_MO_SILLA_MODERNIZATION",
   "civicIcon": "images/civics/silla_civics.png",
   "obsoletes": "The Golden Road I"
  },
  {
   "name": "Revised Bone-Rank II",
   "text": "[B]+2 [icon:YIELD_CULTURE][/B] and [icon:YIELD_SCIENCE] for each imported [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resource[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Revised Bone-Rank I"
  }
 ],
 "CIVILIZATION_SONGHAI": [
  {
   "name": "Wakia I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "age": "Antiquity",
   "civic": "Songhai Origins",
   "civicId": "NODE_CIVIC_AQ_SONGHAI_ORIGINS",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Charismatic Kingship I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Timbuktu I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "age": "Exploration",
   "civic": "Ships of the Desert",
   "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Isa",
   "text": "[B]+5 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] and [B]+2 [icon:Action_Move] Movement[/B] for all Units on [TIP:LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP]Navigable Rivers[/TIP]. [TIP:LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP]Minor[/TIP] and Navigable Rivers do not end Unit [icon:Action_Move] Movement.",
   "age": "Exploration",
   "civic": "Hi-Koi",
   "civicId": "NODE_CIVIC_EX_SONGHAI_HI_KOI",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Wakia II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] for every active [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP].",
   "age": "Exploration",
   "civic": "Kanta",
   "civicId": "NODE_CIVIC_EX_SONGHAI_KANTA",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": "Wakia I"
  },
  {
   "name": "Mud Brick I",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "age": "Exploration",
   "civic": "Ships of the Desert",
   "civicId": "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Mud Brick II",
   "text": "[B]+2 [icon:YIELD_PRODUCTION][/B] on the Caravanserai in [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP] with a [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP] and in Mining [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] and Trade Outposts.",
   "age": "Modern",
   "civic": "Administration",
   "civicId": "NODE_CIVIC_MO_ADMINISTRATION",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": "Mud Brick I"
  },
  {
   "name": "Timbuktu II",
   "text": "[B]+3 [icon:YIELD_GOLD][/B] on [icon:CITY_UNIMPROVED] [TIP:LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP]Rough Terrain[/TIP] and Mines on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP] if there is at least [B]1 [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Gold Building[/TIP][/B] in that [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlement[/TIP].",
   "age": "Modern",
   "civic": "Songhai Modernization",
   "civicId": "NODE_CIVIC_MO_SONGHAI_MODERNIZATION",
   "civicIcon": "images/civics/songhai_civics.png",
   "obsoletes": "Timbuktu I"
  },
  {
   "name": "Charismatic Kingship II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP]Improvements[/TIP] on [icon:CITY_UNIMPROVED] Desert Terrain, doubled on [icon:CITY_RURAL] [TIP:LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP]Unique Improvements[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Charismatic Kingship I"
  }
 ],
 "CIVILIZATION_SPAIN": [
  {
   "name": "Cerro Rico I",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP].",
   "age": "Antiquity",
   "civic": "Spain Origins",
   "civicId": "NODE_CIVIC_AQ_SPAIN_ORIGINS",
   "civicIcon": "images/civics/spanish_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Corregidor I",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast.",
   "age": "Antiquity",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_AQ_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Great and Most Fortunate Navy I",
   "text": "[B]+50% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "age": "Exploration",
   "civic": "Armada",
   "civicId": "NODE_CIVIC_EX_SPAIN_ARMADA",
   "civicIcon": "images/civics/spanish_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Cerro Rico II",
   "text": "[B]+1 [icon:YIELD_GOLD][/B] on [icon:RADIAL_RESOURCES] [TIP:LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP]Resources[/TIP], or [B]+3 [icon:YIELD_GOLD][/B] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "age": "Exploration",
   "civic": "New World Riches",
   "civicId": "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES",
   "civicIcon": "images/civics/spanish_civics.png",
   "obsoletes": "Cerro Rico I"
  },
  {
   "name": "Conquista",
   "text": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for all Units in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP], or [B]+5 [icon:NAR_REW_COMBAT][/B] Combat Strength for [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP].",
   "age": "Exploration",
   "civic": "Council of the Indies",
   "civicId": "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES",
   "civicIcon": "images/civics/spanish_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Great and Most Fortunate Navy II",
   "text": "[B]+100% [icon:YIELD_PRODUCTION][/B] towards training [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Units[/TIP]. [icon:UNIT_FLEET_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Fleet Commanders[/TIP] gain the [TIP:LOC_PROMOTION_FLEET_FLOTILLA_DESCRIPTION]Flotilla Promotion[/TIP] for free.",
   "age": "Modern",
   "civic": "Spain Modernization",
   "civicId": "NODE_CIVIC_MO_SPAIN_MODERNIZATION",
   "civicIcon": "images/civics/spanish_civics.png",
   "obsoletes": "Great and Most Fortunate Navy I"
  },
  {
   "name": "Corregidor II",
   "text": "[B]+2 [icon:YIELD_GOLD][/B] on [icon:CITY_URBAN] [TIP:LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP]Districts[/TIP] on or adjacent to Coast. [B]+10% [icon:YIELD_FOOD][/B] and [icon:YIELD_PRODUCTION] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "Corregidor I"
  }
 ],
 "CIVILIZATION_TONGA": [
  {
   "name": "Takuaka",
   "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Fishing Boats in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP]. [B]+2 [icon:YIELD_SCIENCE][/B] on Fishing Boats on Reefs in all [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP].",
   "age": "Antiquity",
   "civic": "Lapita Origins",
   "civicId": "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS",
   "civicIcon": "images/civics/tonga_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Tongiaki I",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP].",
   "age": "Antiquity",
   "civic": "ʻEsi Maka Faakinanga",
   "civicId": "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA",
   "civicIcon": "images/civics/tonga_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Ngatu I",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP].",
   "age": "Antiquity",
   "civic": "Kava Ceremony",
   "civicId": "NODE_CIVIC_AQ_TONGA_KAVA_CEREMONY",
   "civicIcon": "images/civics/tonga_civics.png",
   "obsoletes": ""
  },
  {
   "name": "Tongiaki II",
   "text": "[B]+10 [icon:TRADE_ROUTE][/B] Naval [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Route Range[/TIP]. [B]+3 [icon:YIELD_GOLD][/B] and [icon:YIELD_SCIENCE] from Naval [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP].",
   "age": "Exploration",
   "civic": "Tongan Renaissance",
   "civicId": "NODE_CIVIC_EX_TONGA_RENAISSANCE",
   "civicIcon": "images/civics/tonga_civics.png",
   "obsoletes": "Tongiaki I"
  },
  {
   "name": "T’ui Ha’atakalaua I",
   "text": "[B]+3 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "age": "Exploration",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_EX_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": ""
  },
  {
   "name": "Ngatu II",
   "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards the initiating and supporting the [icon:PROJECT] Befriend Independent [icon:DEFAULT_PROJECT] [TIP:LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP]Project[/TIP], if the [icon:INDEPENDENT_POWER] [TIP:LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP]Independent Power[/TIP] is in [TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP]. [B]+100% [icon:YIELD_DIPLOMACY][/B] towards all [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] Actions if the [icon:CITYSTATE] City-State is in Distant Lands.",
   "age": "Modern",
   "civic": "Tongan Modernization",
   "civicId": "NODE_CIVIC_MO_TONGA_MODERNIZATION",
   "civicIcon": "images/civics/tonga_civics.png",
   "obsoletes": "Ngatu I"
  },
  {
   "name": "T’ui Ha’atakalaua II",
   "text": "[B]+4 [icon:YIELD_CULTURE][/B] and [icon:YIELD_GOLD] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP] for every [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] with a [icon:CITYSTATE] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP].",
   "age": "Modern",
   "civic": "Syncretism",
   "civicId": "NODE_CIVIC_MO_SYNCRETISM_CHOICE",
   "civicIcon": "images/civics/syncretism.png",
   "obsoletes": "T’ui Ha’atakalaua I"
  }
 ]
};

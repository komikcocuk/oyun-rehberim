// What each Government does, per Age, from the game's governments.xml,
// golden-ages.xml and the civics trees' government-gated tradition rows.
// Built by tools/build_government_stats.py.
window.CIVPEDIA_GOVERNMENT_STATS = {
 "ANTIQUITY": {
  "GOVERNMENT_CLASSICAL_REPUBLIC": {
   "name": "Classical Republic",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "+1 [icon:YIELD_CULTURE] Culture in Happy or happier Settlements. +4 additional [icon:YIELD_CULTURE] Culture in Joyous or happier Cities.",
   "celebrationName": "We Love The Assembly Day!",
   "celebrations": [
    {
     "name": "Classical Republic",
     "text": "+100 [icon:YIELD_DIPLOMACY] Influence immediately (Scales by Game Speed)."
    },
    {
     "name": "Classical Republic",
     "text": "+10% [icon:YIELD_PRODUCTION] Production towards constructing Wonders, or +20% in Joyous or happier Cities, during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_YAXCHE",
     "name": "Yaxche",
     "text": "[B]+2 [icon:YIELD_HAPPINESS][/B] on [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP].",
     "civic": "Citizenship",
     "civicId": "NODE_CIVIC_AQ_MAIN_CITIZENSHIP",
     "civicIcon": "images/civics/citizenship.png"
    },
    {
     "type": "TRADITION_POIEISIS",
     "name": "Poiesis",
     "text": "[B]+1 [icon:YIELD_CULTURE][/B] on displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP] in Joyous [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or [B]+2 [icon:YIELD_CULTURE][/B] in Ecstatic Settlements.",
     "civic": "Philosophy",
     "civicId": "NODE_CIVIC_AQ_MAIN_PHILOSOPHY",
     "civicIcon": "images/civics/philosophy.png"
    }
   ],
   "ages": [
    "Antiquity"
   ]
  },
  "GOVERNMENT_DESPOTISM": {
   "name": "Despotism",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "+2 [icon:YIELD_SCIENCE] Science for each conquered Settlement. Unhappiness causes -3% reduction in Yields in your Settlements per point of negative [icon:YIELD_HAPPINESS] Happiness (usually -5%).",
   "celebrationName": "We Love The Tyrant Day!",
   "celebrations": [
    {
     "name": "Despotism",
     "text": "+1 [icon:YIELD_SCIENCE] Science on Production and Production Warehouse Buildings during the Celebration."
    },
    {
     "name": "Despotism",
     "text": "+10% [icon:YIELD_PRODUCTION] Production towards training Military Units and +10% [icon:YIELD_GOLD] Gold towards purchasing Military Units during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_COMMANDERIES",
     "name": "Commanderies",
     "text": "[B]+20% [icon:YIELD_GOLD][/B] towards upgrading Units.",
     "civic": "Tactics",
     "civicId": "NODE_CIVIC_AQ_MAIN_TACTICS",
     "civicIcon": "images/civics/tactics.png"
    },
    {
     "type": "TRADITION_FAJIA",
     "name": "Fajia",
     "text": "[B]+1[/B] War Support on Wars you Declare.",
     "civic": "Organized Military",
     "civicId": "NODE_CIVIC_AQ_MAIN_ORG_MILITARY",
     "civicIcon": "images/civics/organized_military.png"
    }
   ],
   "ages": [
    "Antiquity"
   ]
  },
  "GOVERNMENT_OLIGARCHY": {
   "name": "Oligarchy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "+10% [icon:YIELD_PRODUCTION] Production towards Buildings. +10% [icon:YIELD_GOLD] Gold towards purchasing Warehouses in Fishing and Farming Towns.",
   "celebrationName": "We Love The Council Day!",
   "celebrations": [
    {
     "name": "Oligarchy",
     "text": "+200 [icon:YIELD_GOLD] Gold immediately (Scales by Game Speed)."
    },
    {
     "name": "Oligarchy",
     "text": "+1 [icon:YIELD_FOOD] Food in Towns for each Connected Settlement during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_ANNONA",
     "name": "Annona",
     "text": "[B]+1 [icon:YIELD_FOOD][/B] on Food Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
     "civic": "Public Life",
     "civicId": "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE",
     "civicIcon": "images/civics/public_life.png"
    },
    {
     "type": "TRADITION_HANGJIAO",
     "name": "Hangjiao",
     "text": "[B]+1 [icon:YIELD_PRODUCTION][/B] on Production Warehouse Buildings in Happy or happier [TIP:LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP]Settlements[/TIP], or +2 in Joyous or happier Settlements.",
     "civic": "Skilled Trades",
     "civicId": "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES",
     "civicIcon": "images/civics/skilled_trades.png"
    }
   ],
   "ages": [
    "Antiquity"
   ]
  },
  "GOVERNMENT_REVOLUCION": {
   "name": "Revolución",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you this effect during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. Unlock more [icon:CELEBRATION] Celebration effects by researching the Mexican [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic Tree[/TIP].",
   "ability": "+6 [icon:YIELD_HAPPINESS] Happiness in Cities for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "celebrationName": "¡Viva la Revolución!",
   "celebrations": [
    {
     "name": "Revolución",
     "text": "+2[icon:YIELD_CULTURE] Culture in Happy Settlements, or +6 in Joyous Settlements, or +10 in Ecstatic Settlements, during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Antiquity",
    "Exploration",
    "Modern"
   ]
  }
 },
 "EXPLORATION": {
  "GOVERNMENT_FEUDAL_MONARCHY": {
   "name": "Feudal Monarchy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+10% [icon:YIELD_PRODUCTION] Production[/B] towards training Military Units and constructing Walls.",
   "celebrationName": "We Love The Monarch Day!",
   "celebrations": [
    {
     "name": "Feudal Monarchy",
     "text": "+3 [icon:NAR_REW_COMBAT] Combat Strength for Military Units during the Celebration."
    },
    {
     "name": "Feudal Monarchy",
     "text": "Your highest level [icon:UNIT_ARMY_COMMANDER] Commander receives a free Promotion."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_MARCHER_LORDS",
     "name": "Marcher Lords",
     "text": "[B]+2 [icon:YIELD_CULTURE] Culture[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] without a Growing Focus, or +4 in Joyous or happier Towns without a Growing Focus.",
     "civic": "Society",
     "civicId": "NODE_CIVIC_EX_MAIN_SOCIETY",
     "civicIcon": "images/civics/society.png"
    },
    {
     "type": "TRADITION_MAHAKRUNG",
     "name": "Mahakrung",
     "text": "[B]+5 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] in your [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP], or [B]+15 [icon:YIELD_CULTURE] Culture[/B], [B][icon:YIELD_PRODUCTION] Production[/B], and [B][icon:YIELD_GOLD] Gold[/B] if it's Ecstatic.",
     "civic": "Sovereignty",
     "civicId": "NODE_CIVIC_EX_MAIN_SOVEREIGNTY",
     "civicIcon": "images/civics/sovereignty.png"
    }
   ],
   "ages": [
    "Exploration"
   ]
  },
  "GOVERNMENT_PLUTOCRACY": {
   "name": "Plutocracy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards Overbuilding.",
   "celebrationName": "We Love The Guilds Day!",
   "celebrations": [
    {
     "name": "Plutocracy",
     "text": "+600 [icon:YIELD_GOLD] Gold immediately (Scales by Game Speed)."
    },
    {
     "name": "Plutocracy",
     "text": "-2 [icon:YIELD_FOOD] Food and [icon:YIELD_HAPPINESS] Happiness Maintenance for Specialists during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_PRIMITIVE_ACCUMULATION",
     "name": "Primitive Accumulation",
     "text": "[B]+2 [icon:YIELD_SCIENCE] Science[/B] on [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP]. [B]+20% [icon:YIELD_PRODUCTION] Production[/B] towards constructing [icon:YIELD_GOLD] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
     "civic": "Mercantilism",
     "civicId": "NODE_CIVIC_EX_MAIN_MERCANTILISM",
     "civicIcon": "images/civics/mercantilism.png"
    },
    {
     "type": "TRADITION_TEQUITL",
     "name": "Tequitl",
     "text": "+10 [TIP:LOC_PEDIA_CONCEPTS_TRADE_RANGE_TOOLTIP]Trade Range[/TIP]. [B]+2 [icon:YIELD_SCIENCE] Science[/B] on [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Routes[/TIP] you initiate.",
     "civic": "Imperialism",
     "civicId": "NODE_CIVIC_EX_MAIN_IMPERIALISM",
     "civicIcon": "images/civics/imperialism.png"
    }
   ],
   "ages": [
    "Exploration"
   ]
  },
  "GOVERNMENT_THEOCRACY": {
   "name": "Theocracy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+20% [icon:YIELD_PRODUCTION] Production[/B] and [B][icon:YIELD_GOLD] Gold[/B] towards constructing or purchasing Temples and Missionaries.",
   "celebrationName": "We Love The Demiurge Day!",
   "celebrations": [
    {
     "name": "Theocracy",
     "text": "Receive a free [icon:NAR_REW_GREATWORK] Relic. +1 [icon:YIELD_CULTURE] Culture and [icon:YIELD_HAPPINESS] Happiness on displayed Relics during the Celebration."
    },
    {
     "name": "Theocracy",
     "text": "+1 [icon:YIELD_GOLD] Gold and [icon:YIELD_DIPLOMACY] Influence on displayed [icon:NAR_REW_GREATWORK] Relics during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_DARGAH",
     "name": "Dargah",
     "text": "[B]+2 [icon:YIELD_FOOD] Food[/B] and [B][icon:YIELD_HAPPINESS] Happiness[/B] in [icon:YIELD_TOWNS] [TIP:LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP]Towns[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "civicIcon": "images/civics/theology.png"
    },
    {
     "type": "TRADITION_VINAYA",
     "name": "Vinaya",
     "text": "[B]+2 [icon:YIELD_GOLD] Gold[/B] and [B][icon:YIELD_DIPLOMACY] Influence[/B] in [icon:YIELD_CITIES] [TIP:LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP]Cities[/TIP] following your [icon:NAR_REW_RELIGION] [TIP:LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP]Religion[/TIP].",
     "civic": "Theology",
     "civicId": "NODE_CIVIC_EX_BRANCH_THEOLOGY",
     "civicIcon": "images/civics/theology.png"
    }
   ],
   "ages": [
    "Exploration"
   ]
  },
  "GOVERNMENT_REVOLUCION": {
   "name": "Revolución",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you this effect during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. Unlock more [icon:CELEBRATION] Celebration effects by researching the Mexican [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic Tree[/TIP].",
   "ability": "+6 [icon:YIELD_HAPPINESS] Happiness in Cities for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "celebrationName": "¡Viva la Revolución!",
   "celebrations": [
    {
     "name": "Revolución",
     "text": "+2[icon:YIELD_CULTURE] Culture in Happy Settlements, or +6 in Joyous Settlements, or +10 in Ecstatic Settlements, during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Antiquity",
    "Exploration",
    "Modern"
   ]
  },
  "GOVERNMENT_REVOLUTIONARY_AUTHORITARIANISM": {
   "name": "Revolutionary Authoritarianism",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+3 [icon:NAR_REW_COMBAT][/B] [TIP:LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP]Combat Strength[/TIP] for [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP].",
   "celebrationName": "Long Live the Regime!",
   "celebrations": [
    {
     "name": "Revolutionary Authoritarianism",
     "text": "+100%[icon:YIELD_PRODUCTION] Production towards training Military Units during the Celebration."
    },
    {
     "name": "Revolutionary Authoritarianism",
     "text": "+6 War Support on wars you declare during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Exploration"
   ]
  },
  "GOVERNMENT_CONSTITUTIONAL_MONARCHY": {
   "name": "Constitutional Monarchy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+2 [icon:YIELD_GOLD][/B] for each active [icon:ENDEAVOR] [TIP:LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP]Endeavor[/TIP] and [icon:SANCTIONS] [TIP:LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP]Sanction[/TIP] you initiated or supported.",
   "celebrationName": "Long Live the Monarchy!",
   "celebrations": [
    {
     "name": "Constitutional Monarchy",
     "text": "+40%[icon:YIELD_GOLD] Gold during the Celebration."
    },
    {
     "name": "Constitutional Monarchy",
     "text": "+100%[icon:YIELD_DIPLOMACY] Influence towards initiating Diplomatic Endeavors during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Exploration"
   ]
  },
  "GOVERNMENT_REVOLUTIONARY_REPUBLIC": {
   "name": "Revolutionary Republic",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[B]+1 [icon:YIELD_CULTURE][/B] from displayed [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP]Great Works[/TIP].",
   "celebrationName": "Long Live the Republic!",
   "celebrations": [
    {
     "name": "Revolutionary Republic",
     "text": "+20%[icon:YIELD_CULTURE] Culture and[icon:YIELD_SCIENCE] Science during the Celebration."
    },
    {
     "name": "Revolutionary Republic",
     "text": "+100%[icon:YIELD_DIPLOMACY] Influence towards initiating Diplomatic Sanctions during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Exploration"
   ]
  }
 },
 "MODERN": {
  "GOVERNMENT_AUTHORITARIANISM": {
   "name": "Authoritarianism",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "+3 [icon:YIELD_FOOD] Food and [icon:YIELD_GOLD] Gold in Settlements you have conquered in this Age. Unhappiness causes -3% reduction in Yields in your Settlements per point of negative [icon:YIELD_HAPPINESS] Happiness (usually -5%).",
   "celebrationName": "We Love The Leader Day!",
   "celebrations": [
    {
     "name": "Authoritarianism",
     "text": "+20%[icon:YIELD_PRODUCTION] Production towards training Military Units during the Celebration."
    },
    {
     "name": "Authoritarianism",
     "text": "+2 [icon:WAR_SUPPORT] War Support on Wars you Declare during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_GARRISON_STATE",
     "name": "Garrison State",
     "text": "[B]+25% [icon:YIELD_DIPLOMACY][/B] towards adding [icon:WAR_SUPPORT] [TIP:LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP]War Support[/TIP].",
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "civicIcon": "images/civics/nationalism.png"
    },
    {
     "type": "TRADITION_JINGOISM",
     "name": "Jingoism",
     "text": "[B]+5 [icon:NAR_REW_COMBAT] Combat Strength[/B] for all [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Units[/TIP] when attacking an opponent from a different ideology.",
     "civic": "Militarism",
     "civicId": "NODE_CIVIC_MO_MAIN_MILITARISM",
     "civicIcon": "images/civics/militarism.png"
    }
   ],
   "ages": [
    "Modern"
   ]
  },
  "GOVERNMENT_BUREAUCRATIC_MONARCHY": {
   "name": "Bureaucratic Monarchy",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "+5% [icon:YIELD_GOLD] Gold towards Purchasing [icon:CITY_BUILDING_LIST] Buildings in [icon:YIELD_CITIES] Cities, or +10% in Joyous or happier [icon:YIELD_CITIES] Cities.",
   "celebrationName": "We Love The Sovereign Day!",
   "celebrations": [
    {
     "name": "Bureaucratic Monarchy",
     "text": "+1000 [icon:YIELD_GOLD] Gold immediately (Scales by Game Speed)."
    },
    {
     "name": "Bureaucratic Monarchy",
     "text": "+20% [icon:YIELD_DIPLOMACY] Influence towards initiating all Diplomatic Actions during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_EVIDENZBUREAU",
     "name": "Evidenzbureau",
     "text": "[B]+100% [icon:YIELD_DIPLOMACY][/B] towards Counterspy [icon:ESPIONAGE] [TIP:LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP]Espionage[/TIP] Actions.",
     "civic": "Political Theory",
     "civicId": "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY",
     "civicIcon": "images/civics/political_theory.png"
    },
    {
     "type": "TRADITION_CROWN_PROPERTIES",
     "name": "Crown Properties",
     "text": "[B]+2 [icon:YIELD_DIPLOMACY][/B] on [icon:CITY_BUILDING_LIST] Gold [TIP:LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP]Buildings[/TIP].",
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "civicIcon": "images/civics/globalism.png"
    }
   ],
   "ages": [
    "Modern"
   ]
  },
  "GOVERNMENT_ELECTIVE_REPUBLIC": {
   "name": "Elective Republic",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you a choice between these effects during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP].",
   "ability": "[icon:SPECIALIST] Specialists get +1 [icon:YIELD_SCIENCE] Science and [icon:YIELD_CULTURE] Culture, and +1 [icon:YIELD_HAPPINESS] Happiness Maintenance.",
   "celebrationName": "We Love The Prime Minister Day!",
   "celebrations": [
    {
     "name": "Elective Republic",
     "text": "+1000 [icon:YIELD_SCIENCE] Science immediately (Scales by Game Speed)."
    },
    {
     "name": "Elective Republic",
     "text": "+1 [icon:YIELD_CULTURE] Culture on [icon:CITY_UNIQUE_QUARTER] Quarters in Happy Settlements, or +2 [icon:YIELD_CULTURE] in Joyous Settlements, or +3 [icon:YIELD_CULTURE] in Ecstatic Settlements, during the Celebration."
    }
   ],
   "traditions": [
    {
     "type": "TRADITION_THINK_TANKS",
     "name": "Think-tanks",
     "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards Projects, or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
     "civic": "Globalism",
     "civicId": "NODE_CIVIC_MO_MAIN_GLOBALISM",
     "civicIcon": "images/civics/globalism.png"
    },
    {
     "type": "TRADITION_ARMY_CORPS_OF_ENGINEERS",
     "name": "Army Corps of Engineers",
     "text": "[B]+10% [icon:YIELD_PRODUCTION][/B] towards [icon:WONDER] [TIP:LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP]Wonders[/TIP], or [B]+20%[/B] in the [icon:NOTIFICATION_SELECT_CAPITAL] [TIP:LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP]Capital[/TIP].",
     "civic": "Nationalism",
     "civicId": "NODE_CIVIC_MO_MAIN_NATIONALISM",
     "civicIcon": "images/civics/nationalism.png"
    }
   ],
   "ages": [
    "Modern"
   ]
  },
  "GOVERNMENT_REVOLUCION": {
   "name": "Revolución",
   "summary": "This [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] grants you this effect during a [icon:CELEBRATION] [TIP:LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP]Celebration[/TIP]. Unlock more [icon:CELEBRATION] Celebration effects by researching the Mexican [icon:CIVICS] [TIP:LOC_PEDIA_CONCEPTS_CIVIC_TOOLTIP]Civic Tree[/TIP].",
   "ability": "+6 [icon:YIELD_HAPPINESS] Happiness in Cities for every [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Tradition[/TIP] slotted in the [icon:GOVERNMENT] [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP].",
   "celebrationName": "¡Viva la Revolución!",
   "celebrations": [
    {
     "name": "Revolución",
     "text": "+2[icon:YIELD_CULTURE] Culture in Happy Settlements, or +6 in Joyous Settlements, or +10 in Ecstatic Settlements, during the Celebration."
    }
   ],
   "traditions": [],
   "ages": [
    "Antiquity",
    "Exploration",
    "Modern"
   ]
  }
 }
};

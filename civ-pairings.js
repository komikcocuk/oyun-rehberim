// Leader and civilization pairings, and how each Age opens the next: the
// game's LeaderCivilizationBias, CivilizationUnlocks, LeaderUnlocks and
// gameplay unlock tables (Base + DLC), by tools/build_civ_pairings.py.
window.CIVPEDIA_CIV_PAIRINGS = {
 "leaders": {
  "LEADER_AMINA": {
   "picks": [
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Amina was from the same continent as Aksum."
    },
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Amina was from the same continent as Egypt."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Amina and the Abbasids were both Muslim."
    },
    {
     "civ": "CIVILIZATION_SONGHAI",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Amina was from the same region as Songhai."
    },
    {
     "civ": "CIVILIZATION_BUGANDA",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Amina was from the same continent as Buganda."
    },
    {
     "civ": "CIVILIZATION_MEXICO",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Mexico strategically complements Amina."
    },
    {
     "civ": "CIVILIZATION_PIRATE_REPUBLIC",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Amina and the Republic of Pirates both like Gold and Resources."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_SONGHAI",
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_PIRATE_REPUBLIC"
    ],
    "Modern": [
     "CIVILIZATION_BUGANDA",
     "CIVILIZATION_MEXICO"
    ]
   }
  },
  "LEADER_HARRIET_TUBMAN": {
   "picks": [
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Harriet Tubman's ancestors came from the same continent as Aksum."
    },
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Harriet Tubman's ancestors came from the same continent as Egypt."
    },
    {
     "civ": "CIVILIZATION_INCA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Harriet Tubman was from the Americas."
    },
    {
     "civ": "CIVILIZATION_SONGHAI",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Harriet Tubman's ancestors came from the same continent as Songhai."
    },
    {
     "civ": "CIVILIZATION_AMERICA",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Harriet Tubman was American."
    },
    {
     "civ": "CIVILIZATION_BUGANDA",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Buganda strategically complements Harriet Tubman."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_INCA",
     "CIVILIZATION_SONGHAI"
    ],
    "Modern": [
     "CIVILIZATION_AMERICA",
     "CIVILIZATION_BUGANDA"
    ]
   }
  },
  "LEADER_HATSHEPSUT": {
   "picks": [
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Aksum was a neighbor to Hatshepsut's Egypt."
    },
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Hatshepsut ruled Egypt."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Abbasids later ruled what was once Hatshepsut's Egypt."
    },
    {
     "civ": "CIVILIZATION_SONGHAI",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Hatshepsut was from the same continent as Songhai."
    },
    {
     "civ": "CIVILIZATION_BUGANDA",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Hatshepsut was from the same continent as Buganda."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Mughal strategically complement Hatshepsut."
    },
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Hatshepsut was from the same continent as Carthage."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_SONGHAI",
     "CIVILIZATION_ABBASID"
    ],
    "Modern": [
     "CIVILIZATION_BUGANDA",
     "CIVILIZATION_MUGHAL"
    ]
   }
  },
  "LEADER_IBN_BATTUTA": {
   "picks": [
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ibn Battuta traveled in the same region as Aksum."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ibn Battuta traveled through Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 3,
     "choice": "Historical",
     "reason": "Ibn Battuta spent a great deal of time in once Abbasid regions."
    },
    {
     "civ": "CIVILIZATION_SONGHAI",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ibn Battuta traveled through the Songhai region."
    },
    {
     "civ": "CIVILIZATION_BUGANDA",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Ibn Battuta was from the same continent as Buganda."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ibn Battuta traveled in what was to become Mughal India."
    },
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ibn Battuta traveled in the same region as Carthage."
    },
    {
     "civ": "CIVILIZATION_OTTOMANS",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "The Ottomans strategically complement Ibn Battuta."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_SONGHAI"
    ],
    "Modern": [
     "CIVILIZATION_BUGANDA",
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_OTTOMANS"
    ]
   }
  },
  "LEADER_AUGUSTUS": {
   "picks": [
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 3,
     "choice": "Historical",
     "reason": "Augustus ruled Egypt."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Augustus ruled Rome."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Augustus's Rome influenced the Abbasids."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Augustus ruled Spain when it was part of Rome."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Augustus's Rome influenced the French."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Augustus's Rome influenced Prussia."
    },
    {
     "civ": "CIVILIZATION_BULGARIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Historical",
     "reason": "Augustus ruled the region that would become Bulgaria."
    },
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 3,
     "choice": "Strategic",
     "reason": "Carthage strategically complements Augustus."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_SPAIN",
     "CIVILIZATION_BULGARIA"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_FRIEDRICH": {
   "picks": [
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Egypt strategically complements Friedrich."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Friedrich styled himself as a Roman successor."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Friedrich was from the same continent as the Normans."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Friedrich was from the same continent as Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Friedrich was influenced by French culture."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Friedrich ruled Prussia."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_PRUSSIA",
     "CIVILIZATION_FRENCH_EMPIRE"
    ]
   }
  },
  "LEADER_ISABELLA": {
   "picks": [
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Isabella and Egypt shared the Mediterranean."
    },
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Isabella and Greece shared the Mediterranean."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Arab caliphates had an influence on Isabella's Spain."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Isabella ruled Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Isabella is from the same region as France."
    },
    {
     "civ": "CIVILIZATION_MEXICO",
     "age": "Modern",
     "bias": 3,
     "choice": "Strategic",
     "reason": "Isabella's Spain had an influence on Mexico."
    },
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Isabella and Carthage share the Mediterranean."
    },
    {
     "civ": "CIVILIZATION_HEIAN",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Heian strategically complements Isabella."
    },
    {
     "civ": "CIVILIZATION_ICELAND",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Iceland strategically complements Isabella."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_SPAIN",
     "CIVILIZATION_ICELAND"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_MEXICO"
    ]
   }
  },
  "LEADER_BENJAMIN_FRANKLIN": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Benjamin Franklin drew influence from Greek ideas."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Benjamin Franklin drew influence from Roman ideas."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Benjamin Franklin shares a cultural link with the Normans."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Spain strategically complements Benjamin Franklin."
    },
    {
     "civ": "CIVILIZATION_AMERICA",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Benjamin Franklin was a statesman in America."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Historical",
     "reason": "Benjamin Franklin was a diplomat in France."
    },
    {
     "civ": "CIVILIZATION_GREAT_BRITAIN",
     "age": "Modern",
     "bias": 3,
     "choice": "Strategic",
     "reason": "Great Britain strategically complements Benjamin Franklin."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_AMERICA",
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_GREAT_BRITAIN"
    ]
   }
  },
  "LEADER_CATHERINE": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Catherine drew influence from Greek ideas."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Catherine drew influence from Roman ideas."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Catherine's Russia was once ruled by the Mongols."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Normans strategically complement Catherine."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Catherine was born near Prussia."
    },
    {
     "civ": "CIVILIZATION_RUSSIA",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Catherine ruled Russia."
    },
    {
     "civ": "CIVILIZATION_BULGARIA",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Catherine was from the same continent as Bulgaria."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_MONGOLIA",
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_BULGARIA"
    ],
    "Modern": [
     "CIVILIZATION_RUSSIA",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_CHARLEMAGNE": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Charlemagne was from the same continent as Greece."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Charlemagne styled himself as a Roman successor."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Charlemagne ruled Normandy."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Charlemagne fought in Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Charlemagne ruled medieval France."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Charlemagne ruled part of the Prussian region."
    },
    {
     "civ": "CIVILIZATION_BULGARIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Bulgaria strategically complements Charlemagne."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN",
     "CIVILIZATION_BULGARIA"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_LAFAYETTE": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Lafayette was influenced by Greek ideas."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Lafayette was influenced by Roman ideas."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Lafayette's France included Normandy."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Lafayette was from the same continent as Spain."
    },
    {
     "civ": "CIVILIZATION_AMERICA",
     "age": "Modern",
     "bias": 3,
     "choice": "Historical",
     "reason": "Lafayette had an influence on America."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Lafayette was a statesman in France."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_AMERICA"
    ]
   }
  },
  "LEADER_MACHIAVELLI": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Machiavelli was influenced by Greek ideas."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Machiavelli was from the same region as Rome."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Machiavelli was from the same continent as the Normans."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Machiavelli was from the same continent as Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Machiavelli was from the same continent as France."
    },
    {
     "civ": "CIVILIZATION_RUSSIA",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Machiavelli was from the same continent as Russia."
    },
    {
     "civ": "CIVILIZATION_GORYEO",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Goryeo strategically complements Machiavelli."
    },
    {
     "civ": "CIVILIZATION_SILLA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Silla strategically complements Machiavelli."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN",
     "CIVILIZATION_GORYEO"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_RUSSIA"
    ]
   }
  },
  "LEADER_CONFUCIUS": {
   "picks": [
    {
     "civ": "CIVILIZATION_HAN",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Han drew inspiration from Confucius."
    },
    {
     "civ": "CIVILIZATION_MING",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ming drew inspiration from Confucius."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "The Yuan Dynasty drew inspiration from Confucius."
    },
    {
     "civ": "CIVILIZATION_QING",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Qing drew inspiration from Confucius."
    },
    {
     "civ": "CIVILIZATION_GORYEO",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Goryeo drew inspiration from Confucius."
    },
    {
     "civ": "CIVILIZATION_JOSEON",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Joseon drew inspiration from Confucius."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_MING",
     "CIVILIZATION_MONGOLIA",
     "CIVILIZATION_GORYEO"
    ],
    "Modern": [
     "CIVILIZATION_QING",
     "CIVILIZATION_JOSEON"
    ]
   }
  },
  "LEADER_ASHOKA": {
   "picks": [
    {
     "civ": "CIVILIZATION_KHMER",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ashoka influenced Khmer culture."
    },
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Ashoka ruled Maurya."
    },
    {
     "civ": "CIVILIZATION_CHOLA",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ashoka was from the same region as the Chola."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Hawai'i strategically complements Ashoka."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ashoka ruled the same region as the Mughal."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ashoka influenced Siamese culture."
    },
    {
     "civ": "CIVILIZATION_NEPAL",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ashoka was from the same continent as Nepal."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_CHOLA",
     "CIVILIZATION_HAWAII"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_SIAM",
     "CIVILIZATION_NEPAL"
    ]
   }
  },
  "LEADER_HIMIKO": {
   "picks": [
    {
     "civ": "CIVILIZATION_KHMER",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Khmer."
    },
    {
     "civ": "CIVILIZATION_MISSISSIPPIAN",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Mississippians strategically complement Himiko."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Hawai'i strategically complements Himiko."
    },
    {
     "civ": "CIVILIZATION_MAJAPAHIT",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Majapahit."
    },
    {
     "civ": "CIVILIZATION_MEIJI",
     "age": "Modern",
     "bias": 3,
     "choice": "Historical",
     "reason": "Himiko ruled ancient Japan."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Siam."
    },
    {
     "civ": "CIVILIZATION_HEIAN",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Himiko was from Japan and complements their gameplay."
    },
    {
     "civ": "CIVILIZATION_SENGOKU",
     "age": "Exploration",
     "bias": 3,
     "choice": "Historical",
     "reason": "Himiko was from Japan."
    },
    {
     "civ": "CIVILIZATION_TONGA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Tonga strategically complements Himiko."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_HAWAII",
     "CIVILIZATION_MAJAPAHIT",
     "CIVILIZATION_SENGOKU"
    ],
    "Modern": [
     "CIVILIZATION_MEIJI",
     "CIVILIZATION_SIAM"
    ]
   }
  },
  "LEADER_TRUNG_TRAC": {
   "picks": [
    {
     "civ": "CIVILIZATION_KHMER",
     "age": "Antiquity",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Trung Trac was from the same region as Khmer."
    },
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Trung Trac was from the same continent as the Maurya."
    },
    {
     "civ": "CIVILIZATION_CHOLA",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Trung Trac was from the same continent as the Chola."
    },
    {
     "civ": "CIVILIZATION_MAJAPAHIT",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Trung Trac was from the same region as Majapahit."
    },
    {
     "civ": "CIVILIZATION_MEIJI",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Trung Trac was from the same continent as Meiji Japan."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Trung Trac was from the same region as Siam."
    },
    {
     "civ": "CIVILIZATION_DAI_VIET",
     "age": "Exploration",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Trung Trac was a ruler in ancient Vietnam."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_CHOLA",
     "CIVILIZATION_MAJAPAHIT",
     "CIVILIZATION_DAI_VIET"
    ],
    "Modern": [
     "CIVILIZATION_MEIJI",
     "CIVILIZATION_SIAM"
    ]
   }
  },
  "LEADER_XERXES": {
   "picks": [
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Xerxes was from the same region as the Maurya."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Xerxes ruled Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Xerxes influenced the Abbasids."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Mongols later captured Xerxes' Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Xerxes' Achaemenid Persia had an influence on the Mughal."
    },
    {
     "civ": "CIVILIZATION_RUSSIA",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Xerxes was from a nearby region to Russia."
    },
    {
     "civ": "CIVILIZATION_ASSYRIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Xerxes ruled the region that was once Assyria."
    },
    {
     "civ": "CIVILIZATION_QAJAR",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Xerxes ruled the region that would become Qajar Iran."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_MONGOLIA"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_RUSSIA",
     "CIVILIZATION_QAJAR"
    ]
   }
  },
  "LEADER_JOSE_RIZAL": {
   "picks": [
    {
     "civ": "CIVILIZATION_MAYA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Maya strategically complement José Rizal."
    },
    {
     "civ": "CIVILIZATION_MISSISSIPPIAN",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Mississippians strategically complement José Rizal."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Hawai'i's anti-colonial struggles resonate with José Rizal's own."
    },
    {
     "civ": "CIVILIZATION_MAJAPAHIT",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "José Rizal was from the same region as Majapahit."
    },
    {
     "civ": "CIVILIZATION_MEIJI",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "José Rizal was from the same continent as Meiji Japan."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "José Rizal was from the same continent as Siam."
    },
    {
     "civ": "CIVILIZATION_HEIAN",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Heian strategically complements José Rizal."
    },
    {
     "civ": "CIVILIZATION_ICELAND",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Iceland strategically complements José Rizal."
    },
    {
     "civ": "CIVILIZATION_TONGA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Tonga strategically complements José Rizal."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_HAWAII",
     "CIVILIZATION_MAJAPAHIT",
     "CIVILIZATION_ICELAND"
    ],
    "Modern": [
     "CIVILIZATION_MEIJI",
     "CIVILIZATION_SIAM"
    ]
   }
  },
  "LEADER_PACHACUTI": {
   "picks": [
    {
     "civ": "CIVILIZATION_MAYA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Pachacuti was an indigenous person in the Americas."
    },
    {
     "civ": "CIVILIZATION_MISSISSIPPIAN",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Pachacuti was an indigenous person in the Americas."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Pachacuti was an indigenous person in the Americas."
    },
    {
     "civ": "CIVILIZATION_INCA",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Pachacuti ruled the Inca."
    },
    {
     "civ": "CIVILIZATION_AMERICA",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Pachacuti was from the Americas."
    },
    {
     "civ": "CIVILIZATION_MEXICO",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Pachacuti was from the Americas."
    },
    {
     "civ": "CIVILIZATION_JOSEON",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Joseon strategically complements Pachacuti."
    },
    {
     "civ": "CIVILIZATION_NEPAL",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Nepal strategically complements Pachacuti."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_HAWAII",
     "CIVILIZATION_INCA"
    ],
    "Modern": [
     "CIVILIZATION_AMERICA",
     "CIVILIZATION_MEXICO",
     "CIVILIZATION_JOSEON",
     "CIVILIZATION_NEPAL"
    ]
   }
  },
  "LEADER_ADA_LOVELACE": {
   "picks": [
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ada Lovelace was from the same continent as Rome."
    },
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ada Lovelace was from the same continent as Greece."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ada Lovelace's Britain was once ruled by the Normans."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Abbasids strategically complement Ada Lovelace."
    },
    {
     "civ": "CIVILIZATION_RUSSIA",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Ada Lovelace was from the same continent as Russia."
    },
    {
     "civ": "CIVILIZATION_GREAT_BRITAIN",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Ada Lovelace was British."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_ABBASID"
    ],
    "Modern": [
     "CIVILIZATION_RUSSIA",
     "CIVILIZATION_GREAT_BRITAIN"
    ]
   }
  },
  "LEADER_ALEXANDER": {
   "picks": [
    {
     "civ": "CIVILIZATION_GREECE",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Alexander ruled Greece."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Alexander conquered Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Alexander's empire covered much of the same territory as the Abbasids."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Mongolia strategically complements Alexander."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "The French Empire strategically complements Alexander."
    },
    {
     "civ": "CIVILIZATION_OTTOMANS",
     "age": "Modern",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Alexander was from the same Geographic area as the Ottomans."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_MONGOLIA"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_OTTOMANS"
    ]
   }
  },
  "LEADER_ASHOKA_WORLD_CONQUEROR": {
   "picks": [
    {
     "civ": "CIVILIZATION_KHMER",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ashoka influenced Khmer culture."
    },
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Ashoka ruled Maurya."
    },
    {
     "civ": "CIVILIZATION_CHOLA",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ashoka was from the same region as the Chola."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Hawai'i strategically complements Ashoka."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Ashoka ruled the same region as the Mughal."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 2,
     "choice": "Historical",
     "reason": "Ashoka influenced Siamese culture."
    },
    {
     "civ": "CIVILIZATION_NEPAL",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Ashoka was from the same continent as Nepal."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_CHOLA",
     "CIVILIZATION_HAWAII"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_SIAM",
     "CIVILIZATION_NEPAL"
    ]
   }
  },
  "LEADER_HIMIKO_HIGH_SHAMAN": {
   "picks": [
    {
     "civ": "CIVILIZATION_KHMER",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Khmer."
    },
    {
     "civ": "CIVILIZATION_MISSISSIPPIAN",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Mississippians strategically complement Himiko."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Hawai'i strategically complements Himiko."
    },
    {
     "civ": "CIVILIZATION_MAJAPAHIT",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Majapahit."
    },
    {
     "civ": "CIVILIZATION_MEIJI",
     "age": "Modern",
     "bias": 3,
     "choice": "Historical",
     "reason": "Himiko ruled ancient Japan."
    },
    {
     "civ": "CIVILIZATION_SIAM",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Himiko was from the same continent as Siam."
    },
    {
     "civ": "CIVILIZATION_HEIAN",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Himiko was from Japan and complements their gameplay."
    },
    {
     "civ": "CIVILIZATION_SENGOKU",
     "age": "Exploration",
     "bias": 3,
     "choice": "Historical",
     "reason": "Himiko was from Japan."
    },
    {
     "civ": "CIVILIZATION_TONGA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Tonga strategically complements Himiko."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_HAWAII",
     "CIVILIZATION_MAJAPAHIT",
     "CIVILIZATION_SENGOKU"
    ],
    "Modern": [
     "CIVILIZATION_MEIJI",
     "CIVILIZATION_SIAM"
    ]
   }
  },
  "LEADER_GENGHIS_KHAN": {
   "picks": [
    {
     "civ": "CIVILIZATION_ASSYRIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Assyria strategically complements Genghis Khan."
    },
    {
     "civ": "CIVILIZATION_BULGARIA",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Bulgaria strategically complements Genghis Khan."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Achaemenid Persia strategically complements Genghis Khan."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Genghis Khan ruled the Mongols."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Genghis Khan was from the same continent as the Mughal."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Prussia strategically complements Genghis Khan."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_BULGARIA",
     "CIVILIZATION_MONGOLIA"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_LAKSHMIBAI": {
   "picks": [
    {
     "civ": "CIVILIZATION_ASSYRIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Lakshmibai was from the same continent as Assyria."
    },
    {
     "civ": "CIVILIZATION_DAI_VIET",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Lakshmibai was from the same continent as Đại Việt."
    },
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Lakshmibai was from the same region as Maurya."
    },
    {
     "civ": "CIVILIZATION_CHOLA",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Lakshmibai was from the same continent as Chola."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Lakshmibai was from the same region as the Mughal."
    },
    {
     "civ": "CIVILIZATION_NEPAL",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Lakshmibai was from the same continent as Nepal."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_DAI_VIET",
     "CIVILIZATION_CHOLA"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_NEPAL"
    ]
   }
  },
  "LEADER_XERXES_THE_ACHAEMENID": {
   "picks": [
    {
     "civ": "CIVILIZATION_ASSYRIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Xerxes ruled the region that was once Assyria."
    },
    {
     "civ": "CIVILIZATION_MAURYA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Xerxes was from the same region as the Maurya."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Xerxes ruled Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Xerxes influenced the Abbasids."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Mongols later captured Xerxes' Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Xerxes' Achaemenid Persia had an influence on the Mughal."
    },
    {
     "civ": "CIVILIZATION_RUSSIA",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Xerxes was from a nearby region to Russia."
    },
    {
     "civ": "CIVILIZATION_QAJAR",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Xerxes ruled the region that would become Qajar Iran."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_MONGOLIA"
    ],
    "Modern": [
     "CIVILIZATION_MUGHAL",
     "CIVILIZATION_RUSSIA",
     "CIVILIZATION_QAJAR"
    ]
   }
  },
  "LEADER_GILGAMESH": {
   "picks": [
    {
     "civ": "CIVILIZATION_ASSYRIA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Gilgamesh was from the same continent as Assyria."
    },
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Gilgamesh was from the same continent as Achaemenid Persia."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Gilgamesh was from the same continent as the Abbasids."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Normans strategically complement Gilgamesh."
    },
    {
     "civ": "CIVILIZATION_CHOLA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Chola strategically complements Gilgamesh."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The French Empire strategically complement Gilgamesh."
    },
    {
     "civ": "CIVILIZATION_OTTOMANS",
     "age": "Modern",
     "bias": 4,
     "choice": "Geographic",
     "reason": "Gilgamesh was from the same continent as the Ottomans."
    },
    {
     "civ": "CIVILIZATION_QAJAR",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Gilgamesh was from the same continent as Qajar Iran."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_ABBASID",
     "CIVILIZATION_CHOLA"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_OTTOMANS",
     "CIVILIZATION_QAJAR"
    ]
   }
  },
  "LEADER_SIMON_BOLIVAR": {
   "picks": [
    {
     "civ": "CIVILIZATION_MAYA",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Simón Bolívar was from the Americas."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Rome strategically complements Simón Bolívar."
    },
    {
     "civ": "CIVILIZATION_INCA",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Simón Bolívar was from the Americas."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Spain strategically complements Simón Bolívar."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Simón Bolívar was influenced by the French Empire."
    },
    {
     "civ": "CIVILIZATION_MEXICO",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Simón Bolívar was from the Americas."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_INCA",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_MEXICO"
    ]
   }
  },
  "LEADER_EDWARD_TEACH": {
   "picks": [
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Carthage strategically complements Edward Teach."
    },
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Aksum strategically complements Edward Teach."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Edward Teach pirated Spanish waters."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Edward Teach was from the same continent as France."
    },
    {
     "civ": "CIVILIZATION_GREAT_BRITAIN",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Edward Teach was originally from Great Britain."
    },
    {
     "civ": "CIVILIZATION_ICELAND",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Iceland strategically complements Edward Teach."
    },
    {
     "civ": "CIVILIZATION_PIRATE_REPUBLIC",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Edward Teach was the most feared pirate of the Republic of Pirates."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_SPAIN",
     "CIVILIZATION_ICELAND",
     "CIVILIZATION_PIRATE_REPUBLIC"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_GREAT_BRITAIN"
    ]
   }
  },
  "LEADER_SAYYIDA_AL_HURRA": {
   "picks": [
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Sayyida al Hurra was from the same region as Carthage."
    },
    {
     "civ": "CIVILIZATION_OTTOMANS",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Sayyida al Hurra allied with Ottoman corsairs."
    },
    {
     "civ": "CIVILIZATION_PIRATE_REPUBLIC",
     "age": "Exploration",
     "bias": 2,
     "choice": "Strategic",
     "reason": "The Republic of Pirates strategically complements Sayyida al Hurra."
    },
    {
     "civ": "CIVILIZATION_AKSUM",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Aksum strategically complements Sayyida al Hurra."
    },
    {
     "civ": "CIVILIZATION_ABBASID",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Sayyida al Hurra was from the same region as the Abbasids."
    },
    {
     "civ": "CIVILIZATION_MUGHAL",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The Mughal strategically complement Sayyida al Hurra."
    }
   ],
   "unlocks": {
    "Modern": [
     "CIVILIZATION_OTTOMANS",
     "CIVILIZATION_MUGHAL"
    ],
    "Exploration": [
     "CIVILIZATION_PIRATE_REPUBLIC",
     "CIVILIZATION_ABBASID"
    ]
   }
  },
  "LEADER_FRIEDRICH_BAROQUE": {
   "picks": [
    {
     "civ": "CIVILIZATION_EGYPT",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Egypt strategically complements Friedrich."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Friedrich styled himself as a Roman successor."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Friedrich was from the same continent as the Normans."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Friedrich was from the same continent as Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Friedrich was influenced by French culture."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Friedrich ruled Prussia."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_PRUSSIA",
     "CIVILIZATION_FRENCH_EMPIRE"
    ]
   }
  },
  "LEADER_YI_SUN_SIN": {
   "picks": [
    {
     "civ": "CIVILIZATION_GORYEO",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Yi Sun-sin was from Korea."
    },
    {
     "civ": "CIVILIZATION_JOSEON",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Yi Sun-sin lead Joseon's Turtle Ships to victory."
    },
    {
     "civ": "CIVILIZATION_CARTHAGE",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Carthage strategically complements Yi Sun-sin."
    },
    {
     "civ": "CIVILIZATION_GREAT_BRITAIN",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Great Britain strategically complements Yi Sun-sin."
    },
    {
     "civ": "CIVILIZATION_SILLA",
     "age": "Antiquity",
     "bias": 4,
     "choice": "Historical",
     "reason": "Yi Sun-sin was from Korea."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_GORYEO"
    ],
    "Modern": [
     "CIVILIZATION_JOSEON",
     "CIVILIZATION_GREAT_BRITAIN"
    ]
   }
  },
  "LEADER_TOYOTOMI_HIDEYOSHI": {
   "picks": [
    {
     "civ": "CIVILIZATION_HEIAN",
     "age": "Antiquity",
     "bias": 3,
     "choice": "Historical",
     "reason": "Toyotomi Hideyoshi was from Japan."
    },
    {
     "civ": "CIVILIZATION_SENGOKU",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Toyotomi Hideyoshi will convince you to play Sengoku and was a unifier of Sengoku Japan."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Rome strategically complements Toyotomi Hideyoshi."
    },
    {
     "civ": "CIVILIZATION_MONGOLIA",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Toyotomi Hideyoshi was from the same continent as Mongolia."
    },
    {
     "civ": "CIVILIZATION_MEIJI",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Toyotomi Hideyoshi was from Japan."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 1,
     "choice": "Strategic",
     "reason": "The French Empire strategically complements Toyotomi Hideyoshi."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_SENGOKU",
     "CIVILIZATION_MONGOLIA"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_MEIJI"
    ]
   }
  },
  "LEADER_NAPOLEON_EMPEROR": {
   "picks": [
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Achaemenid Persia strategically complements Napoleon."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Napoleon styled himself as a Roman successor."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Napoleon's France included Normandy."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Napoleon campaigned in Spain."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Napoleon led the French Empire."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Prussia strategically complements Napoleon."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_NAPOLEON_REVOLUTIONARY": {
   "picks": [
    {
     "civ": "CIVILIZATION_PERSIA",
     "age": "Antiquity",
     "bias": 1,
     "choice": "Strategic",
     "reason": "Achaemenid Persia strategically complements Napoleon."
    },
    {
     "civ": "CIVILIZATION_ROME",
     "age": "Antiquity",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Napoleon styled himself as a Roman successor."
    },
    {
     "civ": "CIVILIZATION_SPAIN",
     "age": "Exploration",
     "bias": 2,
     "choice": "Geographic",
     "reason": "Napoleon campaigned in Spain."
    },
    {
     "civ": "CIVILIZATION_NORMAN",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Napoleon's France included Normandy."
    },
    {
     "civ": "CIVILIZATION_FRENCH_EMPIRE",
     "age": "Modern",
     "bias": 4,
     "choice": "Historical",
     "reason": "Napoleon led the French Empire."
    },
    {
     "civ": "CIVILIZATION_PRUSSIA",
     "age": "Modern",
     "bias": 2,
     "choice": "Strategic",
     "reason": "Prussia strategically complements Napoleon."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_NORMAN",
     "CIVILIZATION_SPAIN"
    ],
    "Modern": [
     "CIVILIZATION_FRENCH_EMPIRE",
     "CIVILIZATION_PRUSSIA"
    ]
   }
  },
  "LEADER_TECUMSEH": {
   "picks": [
    {
     "civ": "CIVILIZATION_MISSISSIPPIAN",
     "age": "Antiquity",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Tecumseh's ancestors were neighbors to the Mississippians."
    },
    {
     "civ": "CIVILIZATION_SHAWNEE",
     "age": "Exploration",
     "bias": 4,
     "choice": "Historical",
     "reason": "Tecumseh led the Shawnee."
    },
    {
     "civ": "CIVILIZATION_HAWAII",
     "age": "Exploration",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Tecumseh was an indigenous person in the Americas."
    },
    {
     "civ": "CIVILIZATION_AMERICA",
     "age": "Modern",
     "bias": 3,
     "choice": "Geographic",
     "reason": "Tecumseh lived in lands later occupied by America."
    },
    {
     "civ": "CIVILIZATION_MEXICO",
     "age": "Modern",
     "bias": 1,
     "choice": "Geographic",
     "reason": "Tecumseh was from North America."
    }
   ],
   "unlocks": {
    "Exploration": [
     "CIVILIZATION_SHAWNEE",
     "CIVILIZATION_HAWAII"
    ],
    "Modern": [
     "CIVILIZATION_AMERICA",
     "CIVILIZATION_MEXICO"
    ]
   }
  }
 },
 "civNext": {
  "CIVILIZATION_EGYPT": [
   "CIVILIZATION_ABBASID",
   "CIVILIZATION_SONGHAI",
   "CIVILIZATION_OTTOMANS"
  ],
  "CIVILIZATION_PERSIA": [
   "CIVILIZATION_ABBASID",
   "CIVILIZATION_MONGOLIA",
   "CIVILIZATION_MUGHAL",
   "CIVILIZATION_BULGARIA",
   "CIVILIZATION_QAJAR",
   "CIVILIZATION_SENGOKU"
  ],
  "CIVILIZATION_KHMER": [
   "CIVILIZATION_CHOLA",
   "CIVILIZATION_MAJAPAHIT",
   "CIVILIZATION_SIAM",
   "CIVILIZATION_DAI_VIET",
   "CIVILIZATION_JOSEON"
  ],
  "CIVILIZATION_MAURYA": [
   "CIVILIZATION_CHOLA",
   "CIVILIZATION_MAJAPAHIT",
   "CIVILIZATION_NEPAL"
  ],
  "CIVILIZATION_MISSISSIPPIAN": [
   "CIVILIZATION_HAWAII",
   "CIVILIZATION_INCA",
   "CIVILIZATION_SHAWNEE"
  ],
  "CIVILIZATION_MAYA": [
   "CIVILIZATION_HAWAII",
   "CIVILIZATION_INCA",
   "CIVILIZATION_MEXICO"
  ],
  "CIVILIZATION_HAN": [
   "CIVILIZATION_MING",
   "CIVILIZATION_MONGOLIA",
   "CIVILIZATION_QING"
  ],
  "CIVILIZATION_GREECE": [
   "CIVILIZATION_NORMAN",
   "CIVILIZATION_SPAIN",
   "CIVILIZATION_RUSSIA",
   "CIVILIZATION_BULGARIA",
   "CIVILIZATION_GORYEO"
  ],
  "CIVILIZATION_ROME": [
   "CIVILIZATION_NORMAN",
   "CIVILIZATION_SPAIN",
   "CIVILIZATION_AMERICA",
   "CIVILIZATION_FRENCH_EMPIRE",
   "CIVILIZATION_PRUSSIA",
   "CIVILIZATION_GREAT_BRITAIN",
   "CIVILIZATION_ICELAND",
   "CIVILIZATION_OTTOMANS"
  ],
  "CIVILIZATION_AKSUM": [
   "CIVILIZATION_SONGHAI",
   "CIVILIZATION_BUGANDA",
   "CIVILIZATION_PIRATE_REPUBLIC"
  ],
  "CIVILIZATION_NORMAN": [
   "CIVILIZATION_AMERICA",
   "CIVILIZATION_FRENCH_EMPIRE",
   "CIVILIZATION_PRUSSIA",
   "CIVILIZATION_GREAT_BRITAIN"
  ],
  "CIVILIZATION_ABBASID": [
   "CIVILIZATION_BUGANDA",
   "CIVILIZATION_MUGHAL",
   "CIVILIZATION_OTTOMANS",
   "CIVILIZATION_QAJAR"
  ],
  "CIVILIZATION_SONGHAI": [
   "CIVILIZATION_BUGANDA"
  ],
  "CIVILIZATION_HAWAII": [
   "CIVILIZATION_MEIJI"
  ],
  "CIVILIZATION_MAJAPAHIT": [
   "CIVILIZATION_MEIJI"
  ],
  "CIVILIZATION_INCA": [
   "CIVILIZATION_MEXICO"
  ],
  "CIVILIZATION_SPAIN": [
   "CIVILIZATION_MEXICO"
  ],
  "CIVILIZATION_CHOLA": [
   "CIVILIZATION_MUGHAL",
   "CIVILIZATION_SIAM",
   "CIVILIZATION_NEPAL"
  ],
  "CIVILIZATION_MING": [
   "CIVILIZATION_QING"
  ],
  "CIVILIZATION_MONGOLIA": [
   "CIVILIZATION_QING",
   "CIVILIZATION_RUSSIA"
  ],
  "CIVILIZATION_ASSYRIA": [
   "CIVILIZATION_ABBASID",
   "CIVILIZATION_QAJAR"
  ],
  "CIVILIZATION_BULGARIA": [
   "CIVILIZATION_RUSSIA"
  ],
  "CIVILIZATION_CARTHAGE": [
   "CIVILIZATION_SPAIN",
   "CIVILIZATION_OTTOMANS",
   "CIVILIZATION_PIRATE_REPUBLIC"
  ],
  "CIVILIZATION_DAI_VIET": [
   "CIVILIZATION_SIAM"
  ],
  "CIVILIZATION_GORYEO": [
   "CIVILIZATION_JOSEON",
   "CIVILIZATION_FRENCH_EMPIRE"
  ],
  "CIVILIZATION_PIRATE_REPUBLIC": [
   "CIVILIZATION_GREAT_BRITAIN",
   "CIVILIZATION_FRENCH_EMPIRE"
  ],
  "CIVILIZATION_HEIAN": [
   "CIVILIZATION_HAWAII",
   "CIVILIZATION_MEIJI",
   "CIVILIZATION_NEPAL",
   "CIVILIZATION_SENGOKU"
  ],
  "CIVILIZATION_ICELAND": [
   "CIVILIZATION_AMERICA"
  ],
  "CIVILIZATION_SENGOKU": [
   "CIVILIZATION_MEIJI"
  ],
  "CIVILIZATION_SHAWNEE": [
   "CIVILIZATION_AMERICA",
   "CIVILIZATION_MEXICO"
  ],
  "CIVILIZATION_SILLA": [
   "CIVILIZATION_GORYEO",
   "CIVILIZATION_JOSEON",
   "CIVILIZATION_MONGOLIA"
  ],
  "CIVILIZATION_TONGA": [
   "CIVILIZATION_HAWAII"
  ]
 },
 "gameplay": {
  "CIVILIZATION_ABBASID": [
   {
    "deed": "Improve three Camels.",
    "why": "Camels were an important commodity to the Abbasids.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_CHOLA": [
   {
    "deed": "Have three Settlements with City Centers adjacent to a Coastal tile. Cities only adjacent to Lakes do not count.",
    "why": "Ports were an important part of the Chola's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_HAWAII": [
   {
    "deed": "Have two Settlements on an Island (a landmass with a maximum of 30 tiles).",
    "why": "Islands were an important part of Hawai'i's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_INCA": [
   {
    "deed": "Have three Settlements with at least three Mountains each.",
    "why": "Mountains were an important part of the Inca's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_MAJAPAHIT": [
   {
    "deed": "Improve three Pearls.",
    "why": "Sea resources were an important commodity to Majapahit.",
    "age": "Antiquity"
   },
   {
    "deed": "Have three Naval Trade Routes.",
    "why": "Naval Trade was an important part of Majapahit's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_MING": [
   {
    "deed": "Improve three Silk.",
    "why": "Silk was an important commodity to Ming.",
    "age": "Antiquity"
   },
   {
    "deed": "Have eight Resources slotted in one Settlement.",
    "why": "Resources were an important part of Ming's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_MONGOLIA": [
   {
    "deed": "Have three Siege units.",
    "why": "Siege units were an important part of Mongolia's identity.",
    "age": "Antiquity"
   },
   {
    "deed": "Improve three Horses.",
    "why": "Horses were an important commodity to Mongolia.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_NORMAN": [
   {
    "deed": "Improve three Iron.",
    "why": "Iron was an important commodity to the Normans.",
    "age": "Antiquity"
   },
   {
    "deed": "Build five Walls.",
    "why": "Walls were an important defensive measure to the Normans.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_SONGHAI": [
   {
    "deed": "Have three Settlements with at least three Navigable River tiles each.",
    "why": "Navigable Rivers were an important part of Songhai's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_SPAIN": [
   {
    "deed": "Reconquer a lost Settlement.",
    "why": "Conquest was an important part of Spain's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_AMERICA": [
   {
    "deed": "Have three Distant Land Settlements in either Plains or Grasslands.",
    "why": "Distant Land Settling was an important part of America's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_BUGANDA": [
   {
    "deed": "Have two Settlements with their City Center adjacent to a Lake.",
    "why": "Lakes were an important part of Buganda's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_FRENCH_EMPIRE": [
   {
    "deed": "Improve three Wine.",
    "why": "Wine was an important commodity to the French Empire.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_MEIJI": [
   {
    "deed": "Improve three Tea.",
    "why": "Tea was an important commodity to Meiji Japan.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_MEXICO": [
   {
    "deed": "Have three Distant Land Settlements in Desert or Tropical.",
    "why": "Distant Land Settling was an important part of Mexico's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_MUGHAL": [
   {
    "deed": "Have at least three Trade Routes with unique Civilizations.",
    "why": "Trade was an important part of Mughal's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_PRUSSIA": [
   {
    "deed": "Have three Army Commanders.",
    "why": "Army Commanders were an important part of Prussia's identity.",
    "age": "Exploration"
   },
   {
    "deed": "Improve three Niter.",
    "why": "Niter was an important commodity to Prussia.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_QING": [
   {
    "deed": "Improve three Jade.",
    "why": "Jade was an important commodity to Qing.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_RUSSIA": [
   {
    "deed": "Have three Settlements on Tundra.",
    "why": "Tundra Settlements were an important part of Russia's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_SIAM": [
   {
    "deed": "Have four Temples.",
    "why": "Temples were an important part of Siam's identity.",
    "age": "Exploration"
   },
   {
    "deed": "Improve three Ivory.",
    "why": "Ivory was an important commodity to Siam.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_BULGARIA": [
   {
    "deed": "Have three Altars.",
    "why": "Altars were an important part of Bulgaria's identity.",
    "age": ""
   }
  ],
  "CIVILIZATION_DAI_VIET": [
   {
    "deed": "Have three Settlements on Tropical.",
    "why": "Tropical Settlements were an important part of Đại Việt's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_GORYEO": [
   {
    "deed": "Have 10 Unique Improvements.",
    "why": "Unique Improvements were an important part of Goryeo's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_GREAT_BRITAIN": [
   {
    "deed": "Have two Fleet Commanders.",
    "why": "Fleet Commanders were an important part of Great Britain's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_ICELAND": [
   {
    "deed": "Be the first to discover a Natural Wonder.",
    "why": "Discovery was an important part of Iceland's identity.",
    "age": "Antiquity"
   },
   {
    "deed": "Coastal Raid 5 times.",
    "why": "Raiding was an important part of Iceland's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_JOSEON": [
   {
    "deed": "Have 16 Specialists.",
    "why": "Specialists were an important part of Joseon's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_NEPAL": [
   {
    "deed": "Have three Settlements with at least five Mountains.",
    "why": "Mountains were an important part of Nepal's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_OTTOMANS": [
   {
    "deed": "Conquer a Capital.",
    "why": "Conquering a Capital was an important part of the Ottomans' identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_PIRATE_REPUBLIC": [
   {
    "deed": "Plunder two Trade Routes.",
    "why": "Plundering was an important part of Republic of Pirates's identity.",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_QAJAR": [
   {
    "deed": "Have 1 Settlement with at least five Specialists.",
    "why": "Specialists were an important part of Qajar's identity.",
    "age": "Exploration"
   }
  ],
  "CIVILIZATION_SENGOKU": [
   {
    "deed": "Be at War with everyone in the Homelands.",
    "why": "",
    "age": "Antiquity"
   }
  ],
  "CIVILIZATION_SHAWNEE": [
   {
    "deed": "Improve 3 Hides.",
    "why": "Hides were an important commodity to the Shawnee.",
    "age": "Antiquity"
   },
   {
    "deed": "Be [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of 2 [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-States[/TIP].",
    "why": "The Shawnee were friends with many smaller nations.",
    "age": "Antiquity"
   }
  ]
 },
 "civAge": {
  "CIVILIZATION_AKSUM": "Antiquity",
  "CIVILIZATION_EGYPT": "Antiquity",
  "CIVILIZATION_GREECE": "Antiquity",
  "CIVILIZATION_HAN": "Antiquity",
  "CIVILIZATION_KHMER": "Antiquity",
  "CIVILIZATION_MAURYA": "Antiquity",
  "CIVILIZATION_MAYA": "Antiquity",
  "CIVILIZATION_MISSISSIPPIAN": "Antiquity",
  "CIVILIZATION_PERSIA": "Antiquity",
  "CIVILIZATION_ROME": "Antiquity",
  "CIVILIZATION_ABBASID": "Exploration",
  "CIVILIZATION_CHOLA": "Exploration",
  "CIVILIZATION_HAWAII": "Exploration",
  "CIVILIZATION_INCA": "Exploration",
  "CIVILIZATION_MAJAPAHIT": "Exploration",
  "CIVILIZATION_MING": "Exploration",
  "CIVILIZATION_MONGOLIA": "Exploration",
  "CIVILIZATION_NORMAN": "Exploration",
  "CIVILIZATION_SONGHAI": "Exploration",
  "CIVILIZATION_SPAIN": "Exploration",
  "CIVILIZATION_AMERICA": "Modern",
  "CIVILIZATION_BUGANDA": "Modern",
  "CIVILIZATION_FRENCH_EMPIRE": "Modern",
  "CIVILIZATION_MEXICO": "Modern",
  "CIVILIZATION_MUGHAL": "Modern",
  "CIVILIZATION_MEIJI": "Modern",
  "CIVILIZATION_PRUSSIA": "Modern",
  "CIVILIZATION_QING": "Modern",
  "CIVILIZATION_RUSSIA": "Modern",
  "CIVILIZATION_SIAM": "Modern",
  "CIVILIZATION_ASSYRIA": "Antiquity",
  "CIVILIZATION_BULGARIA": "Exploration",
  "CIVILIZATION_CARTHAGE": "Antiquity",
  "CIVILIZATION_DAI_VIET": "Exploration",
  "CIVILIZATION_GORYEO": "Exploration",
  "CIVILIZATION_GREAT_BRITAIN": "Modern",
  "CIVILIZATION_PIRATE_REPUBLIC": "Exploration",
  "CIVILIZATION_HEIAN": "Antiquity",
  "CIVILIZATION_ICELAND": "Exploration",
  "CIVILIZATION_JOSEON": "Modern",
  "CIVILIZATION_NEPAL": "Modern",
  "CIVILIZATION_OTTOMANS": "Modern",
  "CIVILIZATION_QAJAR": "Modern",
  "CIVILIZATION_SENGOKU": "Exploration",
  "CIVILIZATION_SHAWNEE": "Exploration",
  "CIVILIZATION_SILLA": "Antiquity",
  "CIVILIZATION_TONGA": "Antiquity"
 }
};

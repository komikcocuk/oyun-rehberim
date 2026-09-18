// Art and quote for the Culture section's civic pages, where civ-civic-media.js
// has none: a tree node's own emblem (civic-tree.js), a Test of Time
// "<Civ> Origins" page its civilization's civics emblem, quotes from the game's
// TypeQuotes tables. Built by tools/build_civic_pages.py. Fills gaps only:
// an entry civ-civic-media.js already carries keeps its quote, gains art.
(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  var M = {
 "NODE_CIVIC_AQ_SYNCRETISM_CHOICE": {
  "portrait": "images/civics/syncretism.png",
  "portraitAlt": "Syncretism",
  "quote": "Syncretism is the borrowing, affirmation, or integration of concepts, symbols, or practices of one Tradition into another.",
  "quoteAuthor": "Judith Berling"
 },
 "NODE_CIVIC_AQ_ABBASID_ORIGINS": {
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Abbasid Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_CHOLA_ORIGINS": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Chola Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_HAWAII_ORIGINS": {
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Hawaiian Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_INCAN_ORIGINS": {
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Incan Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS": {
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Majapahit Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MONGOLIA_ORIGINS": {
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Mongolia Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MING_ORIGINS": {
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Ming Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_NORMAN_ORIGINS": {
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Norman Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SONGHAI_ORIGINS": {
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Songhai Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SPAIN_ORIGINS": {
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Spain Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_AMERICAN_ORIGINS": {
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "American Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_BUGANDA_ORIGINS": {
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Bugandan Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "French Imperial Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MEIJI_ORIGINS": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Meiji Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MEXICO_ORIGINS": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Mexico Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MUGHAL_ORIGINS": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Mughal Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_PRUSSIA_ORIGINS": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Prussian Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_QING_ORIGINS": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Qing Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_RUSSIA_ORIGINS": {
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Russian Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SIAM_ORIGINS": {
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Siamese Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_GREAT_BRITAIN_ORIGINS": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "British Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_BULGARIA_ORIGINS": {
  "portrait": "images/civics/bulgaria_civics.png",
  "portraitAlt": "Bulgarian Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_GORYEO_FOUNDATION": {
  "portrait": "images/civics/goryeo_civics.png",
  "portraitAlt": "Goryeo Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_ICELAND_ORIGINS": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Icelandic Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_JOSEON_ORIGINS": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Joseon Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_NEPAL_ORIGINS": {
  "portrait": "images/civics/nepal_civics.png",
  "portraitAlt": "Nepali Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_OTTOMANS_ORIGINS": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Ottoman Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_PIRATE_REPUBLIC_ORIGINS": {
  "portrait": "images/civics/republic_of_pirates_civics.png",
  "portraitAlt": "Pirate Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_QAJAR_ORIGINS": {
  "portrait": "images/civics/qajar_civics.png",
  "portraitAlt": "Qajar Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SENGOKU_FOUNDATION": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Sengoku Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SHAWNEE_ORIGINS": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Shawnee Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_DAI_VIET_ORIGINS": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Vietnamese Origins",
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MAIN_CHIEFDOM": {
  "portrait": "images/civics/chiefdom.png",
  "portraitAlt": "Chiefdom",
  "quote": "I protect thee with this flame, and I drive away the foe and the sand from thy feet.",
  "quoteAuthor": "The Book of the Dead"
 },
 "NODE_CIVIC_AQ_MAIN_MYSTICISM": {
  "portrait": "images/civics/mysticism.png",
  "portraitAlt": "Mysticism",
  "quote": "There is another world, but it is in this one.",
  "quoteAuthor": "Paul Éluard"
 },
 "NODE_CIVIC_AQ_MAIN_DISCIPLINE": {
  "portrait": "images/civics/discipline.png",
  "portraitAlt": "Discipline",
  "quote": "Do nothing which is of no use.",
  "quoteAuthor": "Miyamoto Musashi"
 },
 "NODE_CIVIC_AQ_MAIN_PUBLIC_LIFE": {
  "portrait": "images/civics/public_life.png",
  "portraitAlt": "Public Life",
  "quote": "Remain less interested in who we imagine ourselves to be than in what we can do for one another.",
  "quoteAuthor": "Paul Gilroy"
 },
 "NODE_CIVIC_AQ_MAIN_CODE_OF_LAWS": {
  "portrait": "images/civics/code_of_laws.png",
  "portraitAlt": "Code of Laws",
  "quote": "An eye for an eye, a tooth for a tooth.",
  "quoteAuthor": "Exodus 21:24"
 },
 "NODE_CIVIC_AQ_MAIN_TACTICS": {
  "portrait": "images/civics/tactics.png",
  "portraitAlt": "Tactics",
  "quote": "Those who delight to attack and to display their valour and fealty should be formed in companies.",
  "quoteAuthor": "Sun Tzu"
 },
 "NODE_CIVIC_AQ_MAIN_ENTERTAINMENT": {
  "portrait": "images/civics/entertainment.png",
  "portraitAlt": "Entertainment",
  "quote": "All the world's a stage, and all the men and women merely players.",
  "quoteAuthor": "William Shakespeare"
 },
 "NODE_CIVIC_AQ_MAIN_CITIZENSHIP": {
  "portrait": "images/civics/citizenship.png",
  "portraitAlt": "Citizenship",
  "quote": "After the assembly gathered, the elders gave their answer.",
  "quoteAuthor": "The Epic of Gilgamesh"
 },
 "NODE_CIVIC_AQ_MAIN_ORG_MILITARY": {
  "portrait": "images/civics/organized_military.png",
  "portraitAlt": "Organized Military",
  "quote": "An army is a miniature of the society which produces it.",
  "quoteAuthor": "C. L. R. James"
 },
 "NODE_CIVIC_AQ_MAIN_LITERACY": {
  "portrait": "images/civics/literacy.png",
  "portraitAlt": "Literacy",
  "quote": "God, with such splendid irony, granted me books and night at one touch.",
  "quoteAuthor": "Jorge Luis Borges"
 },
 "NODE_CIVIC_AQ_MAIN_SKILLED_TRADES": {
  "portrait": "images/civics/skilled_trades.png",
  "portraitAlt": "Skilled Trades",
  "quote": "Skill is handed down to me from my ancestors in a perpetual line of accumulated wisdom.",
  "quoteAuthor": "Shuji Nakagawa"
 },
 "NODE_CIVIC_AQ_MAIN_PHILOSOPHY": {
  "portrait": "images/civics/philosophy.png",
  "portraitAlt": "Philosophy",
  "quote": "The unexamined life is not worth living.",
  "quoteAuthor": "Socrates"
 },
 "NODE_CIVIC_AQ_MAIN_COMMERCE": {
  "portrait": "images/civics/commerce.png",
  "portraitAlt": "Commerce",
  "quote": "The dogs bark, but the caravan moves on.",
  "quoteAuthor": "Turkish Proverb"
 },
 "NODE_CIVIC_AQ_MAIN_FUTURE_CIVIC": {
  "portrait": "images/civics/future_civic.png",
  "portraitAlt": "Future Civic"
 },
 "NODE_CIVIC_AQ_PERSIA_SPADA": {
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Spada",
  "quote": "Be eager in the face of danger.",
  "quoteAuthor": "Xenophon"
 },
 "NODE_CIVIC_AQ_PERSIA_SATRAPIES": {
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Satrapies",
  "quote": "Better to live in a rugged land and rule than to cultivate rich plains and serve.",
  "quoteAuthor": "Cyrus the Great"
 },
 "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE": {
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Baziš",
  "quote": "Should I pass you by and leave you lying there because of your war against us, or should I set you up again because of your virtues?",
  "quoteAuthor": "Plutarch"
 },
 "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA": {
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Periplus of the Erythraean Sea",
  "quote": "To that place all the ivory is brought.",
  "quoteAuthor": "The Periplus of the Erythraean Sea"
 },
 "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM": {
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Monumentum Adulitanum",
  "quote": "I set up here this throne and consecrated it to Ares.",
  "quoteAuthor": "Monumentum Adulitanum"
 },
 "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES": {
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Book of the Himyarites",
  "quote": "Africa will write its own history, and in both north and south it will be a history of glory and dignity.",
  "quoteAuthor": "Patrice Lumumba"
 },
 "NODE_CIVIC_AQ_ASSYRIA_BIRTUTU": {
  "portrait": "images/civics/assyria_civics.png",
  "portraitAlt": "Birtūtu",
  "quote": "The city's wall I established firm as the mountains, and peoples of the land which my hands had conquered, I settled therein.",
  "quoteAuthor": "Sargon II"
 },
 "NODE_CIVIC_AQ_ASSYRIA_TUPSARRUTU": {
  "portrait": "images/civics/assyria_civics.png",
  "portraitAlt": "Tupšarrūtu",
  "quote": "You, O Ashur, hold all knowledge from the ancient past to the distant future.",
  "quoteAuthor": "Ashurbanipal"
 },
 "NODE_CIVIC_AQ_ASSYRIA_KIBRAT_ARBA_I": {
  "portrait": "images/civics/assyria_civics.png",
  "portraitAlt": "Kibrāt Arba’i",
  "quote": "I led my armies from one end of the earth to the other and brought into submission all princes of the four quarters.",
  "quoteAuthor": "Sennacherib"
 },
 "NODE_CIVIC_AQ_CARTHAGE_SHIPSHEDS": {
  "portrait": "images/civics/carthage_civics.png",
  "portraitAlt": "Shipsheds",
  "quote": "Sailing quickly forth, we passed a country burning with fires and fragrance, from which streams of flames fell into the sea.",
  "quoteAuthor": "Hanno the Navigator"
 },
 "NODE_CIVIC_AQ_CARTHAGE_RED_SLIP": {
  "portrait": "images/civics/carthage_civics.png",
  "portraitAlt": "Wisdom of Tanit",
  "quote": "He who finds more joy in an urban dwelling will have no need for a rural farm.",
  "quoteAuthor": "Mago"
 },
 "NODE_CIVIC_AQ_CARTHAGE_SICILIAN_WARS": {
  "portrait": "images/civics/carthage_civics.png",
  "portraitAlt": "Sicilian Wars",
  "quote": "Presenting the captured fleet, the Carthaginians ensured that the people could not only hear but see the greatness of their success.",
  "quoteAuthor": "Diodorus Siculus"
 },
 "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI": {
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Arrival of Hapi",
  "quote": "The River begins to rise when other Rivers diminish and begins to subside just when other Rivers increase.",
  "quoteAuthor": "Ibn Battuta"
 },
 "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS": {
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Scales of Anubis",
  "quote": "The god Anubis said: Pass, thou, for thou knowest the names.",
  "quoteAuthor": "The Book of the Dead"
 },
 "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA": {
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Light of Amun-Ra",
  "quote": "Behold, thou image of gold, thou lord of terror; thou rollest along and art renewed day by day.",
  "quoteAuthor": "The Book of the Dead"
 },
 "NODE_CIVIC_AQ_GREECE_EKKLESIA": {
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Ekklesia",
  "quote": "The administration is in the hands of the many and not of the few.",
  "quoteAuthor": "Pericles"
 },
 "NODE_CIVIC_AQ_GREECE_AGOGE": {
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Agoge",
  "quote": "If you think that I rely on numbers, then all Greece is not sufficient. If on men's valor, then this number will do.",
  "quoteAuthor": "Leonidas"
 },
 "NODE_CIVIC_AQ_GREECE_SYMMACHIA": {
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Symmachia",
  "quote": "Right, as the world goes, is only in question between equals in power, while the strong do what they can and the weak suffer what they must.",
  "quoteAuthor": "Thucydides"
 },
 "NODE_CIVIC_AQ_HAN_REN": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Ren",
  "quote": "Looked at from a distance, the scholar appears stern; when approached, he is mild; when he is heard to speak, his language is firm.",
  "quoteAuthor": "Confucius"
 },
 "NODE_CIVIC_AQ_HAN_YI": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Yi",
  "quote": "Riches and honors acquired by unrighteousness are to me as a floating cloud.",
  "quoteAuthor": "Confucius"
 },
 "NODE_CIVIC_AQ_HAN_LI": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Li",
  "quote": "Always and in everything let there be reverence.",
  "quoteAuthor": "The Book of Rites"
 },
 "NODE_CIVIC_AQ_HAN_ZHI": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Zhi",
  "quote": "I do not open up the truth to one who is not eager to get knowledge.",
  "quoteAuthor": "Confucius"
 },
 "NODE_CIVIC_AQ_HEIAN_RITSURYO": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Ritsuryo",
  "quote": "Perhaps for the first time in their history, the Japanese people came to understand what was meant by the State.",
  "quoteAuthor": "Kanichi Asakawa"
 },
 "NODE_CIVIC_AQ_HEIAN_WAKA": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Waka",
  "quote": "Our tears are not the dew, but have become a sea in the center of our circle.",
  "quoteAuthor": "Ise"
 },
 "NODE_CIVIC_AQ_HEIAN_URBAN_GRID": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Urban Grid",
  "quote": "Heian-kyō’s planners started not with the master grid plan but rather with the single unit.",
  "quoteAuthor": "Matthew Stavros"
 },
 "NODE_CIVIC_AQ_HEIAN_MONO_NO_AWARE": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Mono No Aware",
  "quote": "Real things in the dark seem no more real than dreams.",
  "quoteAuthor": "Murasaki Shikibu"
 },
 "NODE_CIVIC_AQ_KHMER_MOUSONG": {
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Mousong",
  "quote": "Rain fell like crystal, swelling the River and giving life to the forest, on the bodies of the young and old alike.",
  "quoteAuthor": "Moni Mekhala and Ream Eyso"
 },
 "NODE_CIVIC_AQ_KHMER_AMNACH": {
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Amnach",
  "quote": "The king's fire was like the moon, and his enemies drooped to the ground like lotuses at night.",
  "quoteAuthor": "Preah Khan Inscription"
 },
 "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI": {
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Chakravarti",
  "quote": "Live with the Dhamma as your island, the Dhamma as your refuge, with nothing else as your refuge.",
  "quoteAuthor": "The Cakkavatti Sutta"
 },
 "NODE_CIVIC_AQ_MAURYA_ACHARYA": {
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Acharya",
  "quote": "Those who know true wisdom are one with Thee, O God.",
  "quoteAuthor": "Vishnu Purana"
 },
 "NODE_CIVIC_AQ_MAURYA_VYUHAM": {
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Vyuham",
  "quote": "For those who are born, death is certain, and for those who are dead, birth is certain.",
  "quoteAuthor": "The Mahābhārata"
 },
 "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD": {
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Mantriparishad",
  "quote": "Test a servant in duty, a relative in difficulty, a friend in adversity, and a wife in misfortune.",
  "quoteAuthor": "Chanakya"
 },
 "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC": {
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Rain of Chaac",
  "quote": "All alone the sky exists. The face of the earth has not yet appeared.",
  "quoteAuthor": "Popol Vuh"
 },
 "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA": {
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Lords of Xibalba",
  "quote": "The monarchs of Xibalba requested to be slain and resuscitated. They were killed, but the brothers refrained from resuscitating.",
  "quoteAuthor": "Popol Vuh"
 },
 "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND": {
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Calendar Round",
  "quote": "It is 12 Ahau 8 Pax. The Holy Lord of Ixtutz drives the stone into the ground.",
  "quoteAuthor": "The Geneva Stela"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS": {
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Earthworks",
  "quote": "The king's cup was placed on a tumulus, with many arrows set about it.",
  "quoteAuthor": "Jacques le Moyne"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA": {
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Cah-nah-ha",
  "quote": "The things the worshipper gives to his gods are not the food he places on the altar, or the blood in his veins. It is his thought.",
  "quoteAuthor": "Émile Durkheim"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH": {
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Waahih",
  "quote": "This is a good day to die!",
  "quoteAuthor": "Sitting Bull"
 },
 "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Exercitus Romanus",
  "quote": "It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.",
  "quoteAuthor": "Julius Caesar"
 },
 "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Civis Romanus",
  "quote": "Avoid any specific discussion of public Policy at public meetings.",
  "quoteAuthor": "Cicero"
 },
 "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Legatus Pro Praetore",
  "quote": "Those who steal from one person spend their lives in shackles and chains - those who steal from all people, in purple and [icon:YIELD_GOLD].",
  "quoteAuthor": "Cato"
 },
 "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Senatus Populusque Romanus",
  "quote": "Let arms yield to the toga.",
  "quoteAuthor": "Cicero"
 },
 "NODE_CIVIC_AQ_SILLA_KOLP_UM": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Kolp'um",
  "quote": "How brilliant is the autumn field, ripe with the fruit of enlightenment beneath the full moon.",
  "quoteAuthor": "Kyunyeo"
 },
 "NODE_CIVIC_AQ_SILLA_SAMGUK_SAGI": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Samguk Sagi",
  "quote": "In the third month, a comet appeared in the southeast and a dragon flew past Mount Yangsan.",
  "quoteAuthor": "Samguk Sagi"
 },
 "NODE_CIVIC_AQ_SILLA_SEONGGOL": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Seonggol",
  "quote": "It is no wonder that the founders of the Three Kingdoms had divine origins.",
  "quoteAuthor": "Samguk Yusa"
 },
 "NODE_CIVIC_AQ_SILLA_JINGOL": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Jingol",
  "quote": "Ah, Hwarang, you are the high pine branch that does not know frost.",
  "quoteAuthor": "Ode to Knight Kipa"
 },
 "NODE_CIVIC_AQ_TONGA_LAPITA_ORIGINS": {
  "portrait": "images/civics/tonga_civics.png",
  "portraitAlt": "Lapita Origins",
  "quote": "Stand firm and the waves will break.",
  "quoteAuthor": "Tongan Proverb"
 },
 "NODE_CIVIC_AQ_TONGA_ESI_MAKA_FAAKINANGA": {
  "portrait": "images/civics/tonga_civics.png",
  "portraitAlt": "ʻEsi Maka Faakinanga",
  "quote": "The whole island submitted to him. From thence he proceeded to another group of islands. They readily yielded to his power.",
  "quoteAuthor": "George Vason"
 },
 "NODE_CIVIC_AQ_TONGA_KAVA_CEREMONY": {
  "portrait": "images/civics/tonga_civics.png",
  "portraitAlt": "Kava Ceremony",
  "quote": "They are still as their children, and one with them.",
  "quoteAuthor": "Tāufaʻāhau I"
 },
 "NODE_CIVIC_EX_AKSUM_RENAISSANCE": {
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Aksumite Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_EGYPT_RENAISSANCE": {
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Egyptian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_GREECE_RENAISSANCE": {
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Greek Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_HAN_RENAISSANCE": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Han Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_KHMER_RENAISSANCE": {
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Khmer Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MAURYA_RENAISSANCE": {
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Maurya Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MAYA_RENAISSANCE": {
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Maya Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE": {
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Mississippian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_PERSIA_RENAISSANCE": {
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Achaemenid Persian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_ROMAN_RENAISSANCE": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Roman Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_SYNCRETISM_CHOICE": {
  "portrait": "images/civics/syncretism.png",
  "portraitAlt": "Syncretism",
  "quote": "The Holy Roman Empire was neither Holy nor Roman, nor an Empire.",
  "quoteAuthor": "Voltaire"
 },
 "NODE_CIVIC_EX_AMERICAN_RENAISSANCE": {
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "American Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_BUGANDA_RENAISSANCE": {
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Bugandan Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "French Imperial Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MEIJI_RENAISSANCE": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Meiji Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MEXICO_RENAISSANCE": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Mexico Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MUGHAL_RENAISSANCE": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Mughal Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Prussian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_QING_RENAISSANCE": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Qing Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_RUSSIA_RENAISSANCE": {
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Russian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_SIAM_RENAISSANCE": {
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Siamese Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_ASSYRIA_RENAISSANCE": {
  "portrait": "images/civics/assyria_civics.png",
  "portraitAlt": "Assyrian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_GREAT_BRITAIN_RENAISSANCE": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "British Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_CARTHAGE_RENAISSANCE": {
  "portrait": "images/civics/carthage_civics.png",
  "portraitAlt": "Carthaginian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_HEIAN_RENAISSANCE": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Heian Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_JOSEON_RENAISSANCE": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Joseon Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_NEPAL_RENAISSANCE": {
  "portrait": "images/civics/nepal_civics.png",
  "portraitAlt": "Nepali Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_OTTOMANS_RENAISSANCE": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Ottoman Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_QAJAR_RENAISSANCE": {
  "portrait": "images/civics/qajar_civics.png",
  "portraitAlt": "Qajar Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_SILLA_RENAISSANCE": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Silla Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_TONGA_RENAISSANCE": {
  "portrait": "images/civics/tonga_civics.png",
  "portraitAlt": "Tongan Renaissance",
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MAIN_PIETY": {
  "portrait": "images/civics/piety.png",
  "portraitAlt": "Piety",
  "quote": "I take refuge in the Buddha. I take refuge in the Dharma. I take refuge in the Sangha.",
  "quoteAuthor": "Ratanattaya Chant"
 },
 "NODE_CIVIC_EX_MAIN_ECONOMICS": {
  "portrait": "images/civics/economics.png",
  "portraitAlt": "Economics",
  "quote": "Wealth circulates like blood, all parts partake.",
  "quoteAuthor": "William Penn"
 },
 "NODE_CIVIC_EX_MAIN_INSPIRATION": {
  "portrait": "images/civics/inspiration.png",
  "portraitAlt": "Inspiration",
  "quote": "O for a muse of fire.",
  "quoteAuthor": "William Shakespeare"
 },
 "NODE_CIVIC_EX_MAIN_AUTHORITY": {
  "portrait": "images/civics/authority.png",
  "portraitAlt": "Authority",
  "quote": "I have collected all the writings and burnt those which were of no use.",
  "quoteAuthor": "Qin Shi Huang"
 },
 "NODE_CIVIC_EX_MAIN_MERCANTILISM": {
  "portrait": "images/civics/mercantilism.png",
  "portraitAlt": "Mercantilism",
  "quote": "Plentie of money maketh generally things deare, and scarcity of money maketh likewise generally things good cheape.",
  "quoteAuthor": "Gerard de Malynes"
 },
 "NODE_CIVIC_EX_MAIN_SOCIETY": {
  "portrait": "images/civics/society.png",
  "portraitAlt": "Society",
  "quote": "The social pact ensures that men become equal by covenant and by right.",
  "quoteAuthor": "Jean-Jacques Rousseau"
 },
 "NODE_CIVIC_EX_MAIN_DIPLOMATIC_SERVICE": {
  "portrait": "images/civics/diplomatic_service.png",
  "portraitAlt": "Diplomatic Service",
  "quote": "Since words are not fine, fine words are not sincere.",
  "quoteAuthor": "Lao Tzu"
 },
 "NODE_CIVIC_EX_MAIN_BUREAUCRACY": {
  "portrait": "images/civics/bureaucracy.png",
  "portraitAlt": "Bureaucracy",
  "quote": "A bureaucracy always tends to become a pedantocracy.",
  "quoteAuthor": "John Stuart Mill"
 },
 "NODE_CIVIC_EX_MAIN_COLONIALISM": {
  "portrait": "images/civics/colonialism.png",
  "portraitAlt": "Colonialism",
  "quote": "Colonialism is not satisfied merely with holding a people in its grip, but it turns to the past of the oppressed people, and destroys it.",
  "quoteAuthor": "Frantz Fanon"
 },
 "NODE_CIVIC_EX_MAIN_SOCIAL_CLASS": {
  "portrait": "images/civics/social_class.png",
  "portraitAlt": "Social Class",
  "quote": "When monks are righteous, rajahs are righteous. When ministers are righteous, brahmins and householders are righteous. Thus townsfolk and villagers are righteous.",
  "quoteAuthor": "The Book of Gradual Sayings"
 },
 "NODE_CIVIC_EX_MAIN_SOVEREIGNTY": {
  "portrait": "images/civics/sovereignty.png",
  "portraitAlt": "Sovereignty",
  "quote": "The spear and the title go together.",
  "quoteAuthor": "Nuer Saying"
 },
 "NODE_CIVIC_EX_MAIN_IMPERIALISM": {
  "portrait": "images/civics/imperialism.png",
  "portraitAlt": "Imperialism",
  "quote": "Every empire tells itself that its mission is not to plunder and control but to educate and liberate.",
  "quoteAuthor": "Edward Said"
 },
 "NODE_CIVIC_EX_MAIN_FUTURE_CIVIC": {
  "portrait": "images/civics/future_civic.png",
  "portraitAlt": "Future Civic"
 },
 "NODE_CIVIC_EX_ABBASID_ROUND_CITY": {
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Round City",
  "quote": "Baghdad was a city of palaces, not of stucco and mortar, but of marble.",
  "quoteAuthor": "The Yakut"
 },
 "NODE_CIVIC_EX_ABBASID_MAWLA": {
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Mawla",
  "quote": "Know that God has assigned a leader for you - nomad and city resident, Arab and non-Arab, free or slave, young or old.",
  "quoteAuthor": "The Hadith of Ghadir Khumm"
 },
 "NODE_CIVIC_EX_ABBASID_AL_JABR": {
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Al-Jabr",
  "quote": "When I considered what people generally want in calculating, I found that it always is a number.",
  "quoteAuthor": "Al-Khwarizmi"
 },
 "NODE_CIVIC_EX_BULGARIA_SEVEN_TRIBES": {
  "portrait": "images/civics/bulgaria_civics.png",
  "portraitAlt": "Seven Tribes",
  "quote": "As previously reported, the Bulgars annihilated all of their foes.",
  "quoteAuthor": "The Laws of Khan Krum"
 },
 "NODE_CIVIC_EX_BULGARIA_TARNOVO_SCHOOLS": {
  "portrait": "images/civics/bulgaria_civics.png",
  "portraitAlt": "Tarnovo Schools",
  "quote": "Demons fear these relics and dare not approach their blessed contents.",
  "quoteAuthor": "Presbyter Kosmas"
 },
 "NODE_CIVIC_EX_BULGARIA_TSARSTVIE": {
  "portrait": "images/civics/bulgaria_civics.png",
  "portraitAlt": "Tsarstvie",
  "quote": "Like the morning star, you appeared to us and dispelled the shadow of the enemy.",
  "quoteAuthor": "Eulogy for Peter I"
 },
 "NODE_CIVIC_EX_CHOLA_NAGARAM": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Nagaram",
  "quote": "Swifter than the monsoon rains, I hurry home, thinking only of you.",
  "quoteAuthor": "Ainkurunooru"
 },
 "NODE_CIVIC_EX_CHOLA_KANAKAM": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Kanakam",
  "quote": "If the goddess wills it, wealth will multiply. When she departs, these gifts vanish.",
  "quoteAuthor": "Naanmanik Kadigai"
 },
 "NODE_CIVIC_EX_CHOLA_DIGVIJAYA": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Digvijaya",
  "quote": "The ten heads of Ravana lay like the mountains holding the earth, his shoulders like tides, without movement.",
  "quoteAuthor": "Ramavataram"
 },
 "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Monsoon Winds",
  "quote": "It is preceded by desolation; it brings with it the hopes of spring.",
  "quoteAuthor": "Khushwant Singh"
 },
 "NODE_CIVIC_EX_GORYEO_CHEONSU": {
  "portrait": "images/civics/goryeo_civics.png",
  "portraitAlt": "Cheonsu",
  "quote": "Let's have a cup, and still another cup, and watch the night through till the morning breaks.",
  "quoteAuthor": "Yi Kyubo"
 },
 "NODE_CIVIC_EX_GORYEO_TRIPITAKA_KOREANA": {
  "portrait": "images/civics/goryeo_civics.png",
  "portraitAlt": "Tripitaka Koreana",
  "quote": "The rain could turn to gold, and still your thirst would not be slaked. Desire is unquenchable.",
  "quoteAuthor": "The Tripiṭaka"
 },
 "NODE_CIVIC_EX_GORYEO_JIKJI": {
  "portrait": "images/civics/goryeo_civics.png",
  "portraitAlt": "Jikji",
  "quote": "There is no need to search. Nirvana has always been innate in everyone.",
  "quoteAuthor": "Jinul"
 },
 "NODE_CIVIC_EX_HAWAII_MANA": {
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Mana",
  "quote": "Mana is a part of the spiritual world, but felt in the physical.",
  "quoteAuthor": "Bradd Shore"
 },
 "NODE_CIVIC_EX_HAWAII_OHANA": {
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Ohana",
  "quote": "Nānā i ke kumu. Look to the source.",
  "quoteAuthor": "Hawaiian Saying"
 },
 "NODE_CIVIC_EX_HAWAII_HE_E_NALU": {
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "He'e nalu",
  "quote": "Just take your time - wave comes. Let the other guys go.",
  "quoteAuthor": "Duke Kahanamoku"
 },
 "NODE_CIVIC_EX_ICELAND_LANDNAMABOK": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Landnámabók",
  "quote": "With law our land will rise and with lawlessness it will perish.",
  "quoteAuthor": "Njáls saga"
 },
 "NODE_CIVIC_EX_ICELAND_HUGINS_DREKKA": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Hugins Drekka",
  "quote": "Eagerly I accepted your sword, Njǫrðr of battle, and I will find no fault with it later. This is my wish – it is a praiseworthy pursuit.",
  "quoteAuthor": "Sigvatr Þórðarson"
 },
 "NODE_CIVIC_EX_ICELAND_VAERINGJAR": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Væringjar",
  "quote": "The ship was covered in gold above the water, with marvelous dragon heads and a double-sided sail of the most precious cloth.",
  "quoteAuthor": "Flateyjarbók"
 },
 "NODE_CIVIC_EX_ICELAND_THJODVELDID": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Þjóðveldið",
  "quote": "The battle-hardened enemy of the wolf gave to me the craft of poetry devoid of fault.",
  "quoteAuthor": "Egill Skallagrímsson"
 },
 "NODE_CIVIC_EX_INCA_MITA": {
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Mit'a",
  "quote": "Labor service is generally considered to be the critical means by which the Inca state funded its activities.",
  "quoteAuthor": "Terry Yarov LeVine"
 },
 "NODE_CIVIC_EX_INCA_AYLLU": {
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Ayllu",
  "quote": "The valley sings with the voice of the morning, of the noontide, of the afternoon, of the evening.",
  "quoteAuthor": "José María Arguedas"
 },
 "NODE_CIVIC_EX_INCA_QHAPAQ_NAN": {
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Qhapaq Ñan",
  "quote": "The Earth and the Places watch human consumption jealously and demand their part in it.",
  "quoteAuthor": "Catherine Allen"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_WAYANG": {
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Wayang",
  "quote": "A set of betel nut offerings and incense shivers in the clear stillness of the world.",
  "quoteAuthor": "I. Wayan Arthawa"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN": {
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Aliran Kepercayaan",
  "quote": "Whoever is given compassion will return love.",
  "quoteAuthor": "Gagak Mwang Sarpa Pejah Dening Yuyu"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA": {
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Nusantara",
  "quote": "Wherever you go, we will follow, and share in joy and sorrow.",
  "quoteAuthor": "Cakrangga Mwang Durbuddhi"
 },
 "NODE_CIVIC_EX_MING_NINE_GARRISONS": {
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Nine Garrisons",
  "quote": "If we do not destroy our enemies, what are armies for?",
  "quoteAuthor": "The Yongle Emperor"
 },
 "NODE_CIVIC_EX_MING_LIJIA": {
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Lijia",
  "quote": "Bright are the city walls of the capital; red-robed officials shout on broad streets.",
  "quoteAuthor": "Yuan Hongdao"
 },
 "NODE_CIVIC_EX_MING_DA_MING_LU": {
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Da Ming Lu",
  "quote": "Rituals guide the people; law codes restrain the wayward.",
  "quoteAuthor": "The Hongwu Emperor"
 },
 "NODE_CIVIC_EX_MONGOLIA_ULUS": {
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Ulus",
  "quote": "The Mongols did not find honor in fighting; they found honor in winning.",
  "quoteAuthor": "Jack Weatherford"
 },
 "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS": {
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Four Hounds",
  "quote": "Chisels for snouts and awls for tongues, iron for hearts and whips for swords, drinking the dew and racing the wind - they go.",
  "quoteAuthor": "The Secret History of the Mongols"
 },
 "NODE_CIVIC_EX_MONGOLIA_YASSA": {
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Yassa",
  "quote": "It is forbidden to make peace with a monarch who has not submitted.",
  "quoteAuthor": "The Yassa"
 },
 "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE": {
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Consuetudines et Justicie",
  "quote": "Never promise anything except what you are willing to give.",
  "quoteAuthor": "The Book of Good Manners"
 },
 "NODE_CIVIC_EX_NORMAN_COMMON_LAW": {
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Common Law",
  "quote": "They cover their sins with excuses of error and ignorance.",
  "quoteAuthor": "The Mirror of Justices"
 },
 "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK": {
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Domesday Book",
  "quote": "It has been a city since ancient times.",
  "quoteAuthor": "Description of England"
 },
 "NODE_CIVIC_EX_PIRATE_REPUBLIC_ARTICLES_OF_AGREEMENT": {
  "portrait": "images/civics/republic_of_pirates_civics.png",
  "portraitAlt": "Articles of Agreement",
  "quote": "Yes, I do heartily repent. I repent I had not done more mischief.",
  "quoteAuthor": "Anonymous Pirate"
 },
 "NODE_CIVIC_EX_PIRATE_REPUBLIC_PORTS_OF_CALL": {
  "portrait": "images/civics/republic_of_pirates_civics.png",
  "portraitAlt": "Ports of Call",
  "quote": "Heaven, you fool? Did you ever hear of any pirate going thither? Give me hell, it's a merrier place.",
  "quoteAuthor": "Pirate, Black Bart's crew"
 },
 "NODE_CIVIC_EX_PIRATE_REPUBLIC_ENEMY_OF_ALL_NATIONS": {
  "portrait": "images/civics/republic_of_pirates_civics.png",
  "portraitAlt": "Enemy of All Nations",
  "quote": "I am a man of fortune, and must seek my fortune.",
  "quoteAuthor": "Henry Avery"
 },
 "NODE_CIVIC_EX_SENGOKU_TENKA_BITO": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Tenka Bito",
  "quote": "Fifty years of a human's life – these are but a dream, an illusion.",
  "quoteAuthor": "Oda Nobunaga"
 },
 "NODE_CIVIC_EX_SENGOKU_IKKI": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Ikki",
  "quote": "They look strong; they are weak. Their power only comes from your submission.",
  "quoteAuthor": "Osugi Sakae"
 },
 "NODE_CIVIC_EX_SENGOKU_RAKUICHI_RAKUZA": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Rakuichi-Rakuza",
  "quote": "People are castles. People are walls. People are moats.",
  "quoteAuthor": "Takeda Shingen"
 },
 "NODE_CIVIC_EX_SENGOKU_KINSEI": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Kinsei",
  "quote": "On all the islands, glittering lights appear, in the spring sea.",
  "quoteAuthor": "Shiki"
 },
 "NODE_CIVIC_EX_SHAWNEE_WYEHI_SIMEKOFI": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Wiyehi Simekofi",
  "quote": "I am the maker of my own destiny.",
  "quoteAuthor": "Tecumseh"
 },
 "NODE_CIVIC_EX_SHAWNEE_MIYASKA_LATOWEKI": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Miyaska Latoweki",
  "quote": "Our words are to be believed, when we say a thing we stand to it.",
  "quoteAuthor": "Kekewepelethy"
 },
 "NODE_CIVIC_EX_SHAWNEE_TELWATIKI": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Telwatiki",
  "quote": "Annihilation is at hand unless we unite in one common cause against the common foe.",
  "quoteAuthor": "Tecumseh"
 },
 "NODE_CIVIC_EX_SHAWNEE_MALEKI_KINTAKE": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Maleki Kintake",
  "quote": "Kill no more animals than are necessary to feed and clothe you.",
  "quoteAuthor": "Tenskwatawa"
 },
 "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT": {
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Ships of the Desert",
  "quote": "He knew the desert routes and watering places, the stars at night, the scent and touch of sand.",
  "quoteAuthor": "H. J. Fisher"
 },
 "NODE_CIVIC_EX_SONGHAI_HI_KOI": {
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Hi-Koi",
  "quote": "One finds oneself on the path already traveled and one foresees what remains to be done.",
  "quoteAuthor": "Jean-Marie Gibbal"
 },
 "NODE_CIVIC_EX_SONGHAI_KANTA": {
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Kanta",
  "quote": "Every village that follows his wishes, he conquers them. He moves on. Every village that refuses, he conquers it, he burns it, he moves on.",
  "quoteAuthor": "The Epic of Askia Mohammed"
 },
 "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES": {
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Council of the Indies",
  "quote": "I have a glove into which I can put your whole city.",
  "quoteAuthor": "Charles V"
 },
 "NODE_CIVIC_EX_SPAIN_ARMADA": {
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Armada",
  "quote": "I sent the Armada against men, not God's winds and waves.",
  "quoteAuthor": "Philip II"
 },
 "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES": {
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "New World Riches",
  "quote": "We came to serve God - and get rich.",
  "quoteAuthor": "Bernal Díaz del Castillo"
 },
 "NODE_CIVIC_EX_DAI_VIET_CAM_QUAN": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Cấm Quân",
  "quote": "Swinging gleaming blades will cleave you into bamboo chips!",
  "quoteAuthor": "Nam quốc sơn hà"
 },
 "NODE_CIVIC_EX_DAI_VIET_CHU_NOM": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Chữ Nôm",
  "quote": "Which door leads to fortune and which to misfortune? The result is determined by people.",
  "quoteAuthor": "Nguyễn Bỉnh Khiêm"
 },
 "NODE_CIVIC_EX_DAI_VIET_THANH_HOANG": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Thành Hoàng",
  "quote": "As the lotus withers, the chrysanthemums bloom. Long sadness, short days – then winter turns to spring.",
  "quoteAuthor": "The Tale of Kiều"
 },
 "NODE_CIVIC_EX_DAI_VIET_TU_DAN": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Tứ Dân",
  "quote": "The path to fame is one amid a hundred paths to failure.",
  "quoteAuthor": "Đặng Trần Côn"
 },
 "NODE_CIVIC_EX_BRANCH_THEOLOGY": {
  "portrait": "images/civics/theology.png",
  "portraitAlt": "Theology",
  "quote": "By knowing things in their true nature, one knows the divine.",
  "quoteAuthor": "The Book of Causes"
 },
 "NODE_CIVIC_EX_BRANCH_REFORMATION": {
  "portrait": "images/civics/reformation.png",
  "portraitAlt": "Reformation",
  "quote": "The gospel cannot be truly preached without offense and tumult.",
  "quoteAuthor": "Martin Luther"
 },
 "NODE_CIVIC_MO_AKSUM_MODERNIZATION": {
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Aksumite Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_EGYPT_MODERNIZATION": {
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Egyptian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_GREECE_MODERNIZATION": {
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Greek Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_HAN_MODERNIZATION": {
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Han Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_KHMER_MODERNIZATION": {
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Khmer Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAURYA_MODERNIZATION": {
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Maurya Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAYA_MODERNIZATION": {
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Maya Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION": {
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Mississippian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_PERSIA_MODERNIZATION": {
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Achaemenid Persian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ROMAN_MODERNIZATION": {
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Roman Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ABBASID_MODERNIZATION": {
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Abbasid Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_CHOLA_MODERNIZATION": {
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Chola Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_HAWAII_MODERNIZATION": {
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Hawaiian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_INCAN_MODERNIZATION": {
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Incan Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION": {
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Majapahit Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION": {
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Mongolia Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MING_MODERNIZATION": {
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Ming Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_NORMAN_MODERNIZATION": {
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Norman Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SONGHAI_MODERNIZATION": {
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Songhai Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SPAIN_MODERNIZATION": {
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Spain Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SYNCRETISM_CHOICE": {
  "portrait": "images/civics/syncretism.png",
  "portraitAlt": "Syncretism",
  "quote": "The huacas were the gods of the Indians; and in many places the Spaniards turned the huacas into churches or placed the image of the Virgin, and thus the people continue to go to them and pay them respect.",
  "quoteAuthor": "Felipe Guaman Poma de Ayala"
 },
 "NODE_CIVIC_MO_ASSYRIA_MODERNIZATION": {
  "portrait": "images/civics/assyria_civics.png",
  "portraitAlt": "Assyrian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_BULGARIA_MODERNIZATION": {
  "portrait": "images/civics/bulgaria_civics.png",
  "portraitAlt": "Bulgarian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_CARTHAGE_MODERNIZATION": {
  "portrait": "images/civics/carthage_civics.png",
  "portraitAlt": "Carthaginian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_GORYEO_MODERNIZATION": {
  "portrait": "images/civics/goryeo_civics.png",
  "portraitAlt": "Goryeo Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_HEIAN_MODERNIZATION": {
  "portrait": "images/civics/heian_civics.png",
  "portraitAlt": "Heian Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ICELAND_MODERNIZATION": {
  "portrait": "images/civics/iceland_civics.png",
  "portraitAlt": "Icelandic Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_PIRATE_REPUBLIC_MODERNIZATION": {
  "portrait": "images/civics/republic_of_pirates_civics.png",
  "portraitAlt": "Pirate Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SENGOKU_MODERNIZATION": {
  "portrait": "images/civics/sengoku_civics.png",
  "portraitAlt": "Sengoku Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SHAWNEE_MODERNIZATION": {
  "portrait": "images/civics/shawnee_civics.png",
  "portraitAlt": "Shawnee Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SILLA_MODERNIZATION": {
  "portrait": "images/civics/silla_civics.png",
  "portraitAlt": "Silla Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_TONGA_MODERNIZATION": {
  "portrait": "images/civics/tonga_civics.png",
  "portraitAlt": "Tongan Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_DAI_VIET_MODERNIZATION": {
  "portrait": "images/civics/dai_viet_civics.png",
  "portraitAlt": "Vietnamese Modernization",
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAIN_SOCIAL_QUESTION": {
  "portrait": "images/civics/social_question.png",
  "portraitAlt": "Social Question",
  "quote": "The memory of having sat at someone’s feet will later make you want to trample him underfoot.",
  "quoteAuthor": "Natsume Sōseki"
 },
 "NODE_CIVIC_MO_MAIN_MODERNIZATION": {
  "portrait": "images/civics/modernity.png",
  "portraitAlt": "Modernity",
  "quote": "In the enlightenment, what does not add up in numbers becomes illusion.",
  "quoteAuthor": "Theodor Adorno"
 },
 "NODE_CIVIC_MO_MAIN_NATURAL_HISTORY": {
  "portrait": "images/civics/natural_history.png",
  "portraitAlt": "Natural History",
  "quote": "I died from the mineral and I became the plant; I died from the plant and I arose the animal; I died from the animal and I became the man.",
  "quoteAuthor": "Rumi"
 },
 "NODE_CIVIC_MO_MAIN_POLITICAL_THEORY": {
  "portrait": "images/civics/political_theory.png",
  "portraitAlt": "Political Theory",
  "quote": "The one who adapts his policy to his times prospers.",
  "quoteAuthor": "Niccolò Machiavelli"
 },
 "NODE_CIVIC_MO_MAIN_NATIONALISM": {
  "portrait": "images/civics/nationalism.png",
  "portraitAlt": "Nationalism",
  "quote": "The members of the nation will never know most of their fellow-members, yet in the minds of each lives the image of their communion.",
  "quoteAuthor": "Benedict Anderson"
 },
 "NODE_CIVIC_MO_MAIN_GLOBALISM": {
  "portrait": "images/civics/globalism.png",
  "portraitAlt": "Globalism",
  "quote": "The well-being of faraway strangers should be no less of a concern than our immediate neighbors.",
  "quoteAuthor": "Fuyuki Kurasawa"
 },
 "NODE_CIVIC_MO_MAIN_MILITARISM": {
  "portrait": "images/civics/militarism.png",
  "portraitAlt": "Militarism",
  "quote": "If I cannot inspire love, I will cause fear.",
  "quoteAuthor": "Mary Shelley"
 },
 "NODE_CIVIC_MO_MAIN_HEGEMONY": {
  "portrait": "images/civics/hegemony.png",
  "portraitAlt": "Hegemony",
  "quote": "We feel free because we lack the very language to articulate our unfreedom.",
  "quoteAuthor": "Slavoj Žižek"
 },
 "NODE_CIVIC_MO_MAIN_CAPITALISM": {
  "portrait": "images/civics/capitalism.png",
  "portraitAlt": "Capitalism",
  "quote": "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
  "quoteAuthor": "Adam Smith"
 },
 "NODE_CIVIC_MO_MAIN_FUTURE_CIVIC": {
  "portrait": "images/civics/future_civic.png",
  "portraitAlt": "Future Civic"
 },
 "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY": {
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Yankee Ingenuity",
  "quote": "We have it in our power to begin the world over again.",
  "quoteAuthor": "Thomas Paine"
 },
 "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY": {
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Captains of Industry",
  "quote": "I would rather earn one percent off a hundred people's efforts than one hundred percent of my own efforts.",
  "quoteAuthor": "John D. Rockefeller"
 },
 "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING": {
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Wartime Manufacturing",
  "quote": "What's good for M&M Enterprises is good for the country!",
  "quoteAuthor": "Joseph Heller"
 },
 "NODE_CIVIC_MO_BUGANDA_NNALUBAALE": {
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "'Nnalubaale",
  "quote": "We want our cattle to get fat on our land, and we do not want the fat removed to feed others.",
  "quoteAuthor": "Jomo Kenyatta"
 },
 "NODE_CIVIC_MO_BUGANDA_BLUTABAALO": {
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Blutabaalo",
  "quote": "When elephants fight, it is the grass that suffers.",
  "quoteAuthor": "Kikuyu Proverb"
 },
 "NODE_CIVIC_MO_BUGANDA_NYANZA": {
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Nyanza",
  "quote": "One small twig, combined with others, makes a bundle.",
  "quoteAuthor": "Ugandan Proverb"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Belle Époque",
  "quote": "There is only one good thing in life, and that is love.",
  "quoteAuthor": "Guy de Maupassant"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Voie Triomphale",
  "quote": "Beauty perishes in life, but is immortal in art.",
  "quoteAuthor": "Leonardo da Vinci"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Grande Armée",
  "quote": "I can do other things besides war, but duty comes first.",
  "quoteAuthor": "Napoleon Bonaparte"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_CODE_CIVIL": {
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Code Civil des Français",
  "quote": "Is it not an absurd and terrible thing that that which is true in one village is false in another?",
  "quoteAuthor": "Voltaire"
 },
 "NODE_CIVIC_MO_GREAT_BRITAIN_PAX_BRITANNICA": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "Pax Britannica",
  "quote": "Increased means and increased leisure are the two civilizers of man.",
  "quoteAuthor": "Benjamin Disraeli"
 },
 "NODE_CIVIC_MO_GREAT_BRITAIN_SOCIETY_OF_ANTIQUARIES": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "Society of Antiquaries",
  "quote": "As my eyes grew accustomed to the light, details of the room emerged. Strange animals, statues, and gold – everywhere the glint of gold.",
  "quoteAuthor": "Howard Carter"
 },
 "NODE_CIVIC_MO_GREAT_BRITAIN_CHARTERED_COMPANIES": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "Chartered Companies",
  "quote": "They say that \"Knowledge is Power.\" I used to think so; but I now know that they meant \"money.\"",
  "quoteAuthor": "Lord Byron"
 },
 "NODE_CIVIC_MO_GREAT_BRITAIN_SPLENDID_ISOLATION": {
  "portrait": "images/civics/great_britain_civics.png",
  "portraitAlt": "Splendid Isolation",
  "quote": "War is righteous or unrighteous according as it is opportune or inopportune.",
  "quoteAuthor": "Lord Salisbury"
 },
 "NODE_CIVIC_MO_JOSEON_IHAK": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Seongnihak",
  "quote": "He who learns but does not think is lost. He who thinks but does not learn is endangered.",
  "quoteAuthor": "Confucius"
 },
 "NODE_CIVIC_MO_JOSEON_SEONBI": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Seonbi",
  "quote": "Of all the things in the world, humanity is the most precious.",
  "quoteAuthor": "Dongmongseonseup"
 },
 "NODE_CIVIC_MO_JOSEON_GYEONGGUK_DAEJEON": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Gyeongguk Daejeon",
  "quote": "A miserly father always has a wastrel son; an intelligent wife, a stupid husband. This is the way of things, so I laugh by myself. But nobody knows.",
  "quoteAuthor": "Chong Yakyong"
 },
 "NODE_CIVIC_MO_JOSEON_SAMGANG": {
  "portrait": "images/civics/joseon_civics.png",
  "portraitAlt": "Samgang",
  "quote": "The ruler sees his subjects as his hands and feet. The subjects see him as their head.",
  "quoteAuthor": "Samgang Haengsil-do"
 },
 "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Bunmei Kaika",
  "quote": "The man I used to meet in the mirror is no more.",
  "quoteAuthor": "Masaoka Shiki"
 },
 "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Oath in Five Articles",
  "quote": "Knowledge will be sought through the whole world to strengthen the foundation of imperial rule.",
  "quoteAuthor": "The Oath in Five Articles"
 },
 "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Supreme War Council",
  "quote": "First, we protect the line of sovereignty. Then, the line of advantage.",
  "quoteAuthor": "Yamagata Aritomo"
 },
 "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN": {
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Kantai Kessen",
  "quote": "Humanity is born for love and revolution.",
  "quoteAuthor": "Osamu Dazai"
 },
 "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Planes Políticos",
  "quote": "I'd rather die on my feet than live on my knees.",
  "quoteAuthor": "Emiliano Zapata"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Iguala",
  "quote": "My own will was law, and who compelled me to divide my power? Myself, and myself alone.",
  "quoteAuthor": "Agustín de Iturbide"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Ayutla",
  "quote": "The Mexican nation is an indivisible one.",
  "quoteAuthor": "Constitution of the United Mexican States"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC": {
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Tuxtepec",
  "quote": "Nothing ever happens in Mexico until it happens.",
  "quoteAuthor": "Porfirio Díaz"
 },
 "NODE_CIVIC_MO_MUGHAL_ZABT": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Zabt",
  "quote": "Not a virgin or rupee was safe in his realm.",
  "quoteAuthor": "Mulk Raj Anand"
 },
 "NODE_CIVIC_MO_MUGHAL_JAGIR": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Jagir",
  "quote": "We think these big people are very happy, but we are just worried about hunger. They have a thousand worries.",
  "quoteAuthor": "Munshi Premchand"
 },
 "NODE_CIVIC_MO_MUGHAL_MANSABDARI": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Mansabdari",
  "quote": "A monarch should be ever intent on conquest, lest his neighbors rise against him.",
  "quoteAuthor": "Akbar the Great"
 },
 "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE": {
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Gardens of Paradise",
  "quote": "The world is a bridge - pass over it, but build no houses.",
  "quoteAuthor": "Akbar the Great"
 },
 "NODE_CIVIC_MO_NEPAL_JYUMDO_BAGHA": {
  "portrait": "images/civics/nepal_civics.png",
  "portraitAlt": "Jyumdo Bagha",
  "quote": "Better to die than be a coward.",
  "quoteAuthor": "Gurkha Motto"
 },
 "NODE_CIVIC_MO_NEPAL_SINGHA_DURBAR": {
  "portrait": "images/civics/nepal_civics.png",
  "portraitAlt": "Singha Durbar",
  "quote": "Ayo gorkhali! The Gurkhas are upon you!",
  "quoteAuthor": "Gurkha Battle Cry"
 },
 "NODE_CIVIC_MO_NEPAL_GORKHAPATRA": {
  "portrait": "images/civics/nepal_civics.png",
  "portraitAlt": "Gorkhapatra",
  "quote": "There is an inseparable relationship between the culture of a country and the ideology it follows.",
  "quoteAuthor": "King Birendra"
 },
 "NODE_CIVIC_MO_OTTOMANS_SAHI_TOPU": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Şahi Topu",
  "quote": "With extraordinary thunder and a flame that illuminated, then blackened, all surroundings, the rod set the stone violently in motion.",
  "quoteAuthor": "Michael Kritoboulos"
 },
 "NODE_CIVIC_MO_OTTOMANS_LALE_DEVRI": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Lâle Devri",
  "quote": "If the tulip cups are absent, bring the wine cups instead.",
  "quoteAuthor": "Nedîm"
 },
 "NODE_CIVIC_MO_OTTOMANS_HARBIYE_NEZARETI": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Harbiye Nezâreti",
  "quote": "Either I take the city or the city takes me.",
  "quoteAuthor": "Mehmed II"
 },
 "NODE_CIVIC_MO_OTTOMANS_TANZIMAT": {
  "portrait": "images/civics/ottomans_civics.png",
  "portraitAlt": "Tanẓîmât",
  "quote": "We deem it appropriate to provide the provinces of the Ottoman Empire the benefit of a good administration through new institutions.",
  "quoteAuthor": "Gülhane Hatt-ı Şerifi"
 },
 "NODE_CIVIC_MO_PRUSSIA_RUHR": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Ruhr",
  "quote": "Technology puts to nature the unreasonable demand that it supply power which can be extracted and stored.",
  "quoteAuthor": "Martin Heidegger"
 },
 "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Zollverein",
  "quote": "A nation should not view industries' progress from a purely economic standpoint.",
  "quoteAuthor": "Friedrich List"
 },
 "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Ems Dispatch",
  "quote": "Prussia was hatched from a cannonball.",
  "quoteAuthor": "Napoleon Bonaparte"
 },
 "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG": {
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Bewegungskrieg",
  "quote": "War is merely the continuation of policy by other means.",
  "quoteAuthor": "Carl von Clausewitz"
 },
 "NODE_CIVIC_MO_QAJAR_THE_SUN_THRONE": {
  "portrait": "images/civics/qajar_civics.png",
  "portraitAlt": "The Sun Throne",
  "quote": "We sat down and conversation ensued. We then arose and passed on.",
  "quoteAuthor": "Naser al-Din Shah Qajar"
 },
 "NODE_CIVIC_MO_QAJAR_TWELVE_GATES": {
  "portrait": "images/civics/qajar_civics.png",
  "portraitAlt": "Twelve Gates",
  "quote": "Here all work is laid aside, while nothing but pleasure becomes the order of the day.",
  "quoteAuthor": "Henry Ballantine"
 },
 "NODE_CIVIC_MO_QAJAR_NEZAM_E_JADID": {
  "portrait": "images/civics/qajar_civics.png",
  "portraitAlt": "Neẓām-e J̌adīd",
  "quote": "If there be no war in paradise, how can there be any delights there?",
  "quoteAuthor": "Nader Shah"
 },
 "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Ten Great Campaigns",
  "quote": "Foreigners appreciate only military power.",
  "quoteAuthor": "The Qianlong Emperor"
 },
 "NODE_CIVIC_MO_QING_OPEN_CUSTOMS": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Open Customs",
  "quote": "Go abroad and trade to show the populous and affluent nature of our rule.",
  "quoteAuthor": "The Kangxi Emperor"
 },
 "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Kang Xi Tax Reformation",
  "quote": "There are many ways of governing well, and they all are order and prosperity.",
  "quoteAuthor": "Qing Emperor"
 },
 "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER": {
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Stabilizing Frontier",
  "quote": "If I just folded my arms and yielded, I would have no face to see our ancestors after death.",
  "quoteAuthor": "Qing Emperor"
 },
 "NODE_CIVIC_MO_RUSSIA_SERFDOM": {
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Serfdom",
  "quote": "Men accept servility so as to accumulate wealth.",
  "quoteAuthor": "Étienne de La Boétie"
 },
 "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS": {
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Table of Ranks",
  "quote": "Kings are the slaves of history.",
  "quoteAuthor": "Leo Tolstoy"
 },
 "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE": {
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Samoderzhaviye",
  "quote": "The well-being of the sovereign is inseparable from the national well-being.",
  "quoteAuthor": "Nicholas II"
 },
 "NODE_CIVIC_MO_SIAM_NINE_GEMS": {
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Nine Gems",
  "quote": "City of angels, great city of immortals, magnificent city of the nine gems, seat of the king, home of the gods.",
  "quoteAuthor": "Name of Bangkok"
 },
 "NODE_CIVIC_MO_SIAM_MANDALA": {
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Mandala",
  "quote": "The universe consists of an infinite amount of suns and an infinite amount of worlds. At the center of each is Mount Meru.",
  "quoteAuthor": "Chaophraya Thiphakorawong"
 },
 "NODE_CIVIC_MO_SIAM_SRIWILAI": {
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Sriwilai",
  "quote": "From every nation, from twelvefold tongues, all come and stand in the shade of this city.",
  "quoteAuthor": "King Narai"
 },
 "NODE_CIVIC_MO_BRANCH_DEMOCRACY": {
  "portrait": "images/civics/democracy.png",
  "portraitAlt": "Democracy",
  "quote": "Suffrage is the pivotal right.",
  "quoteAuthor": "Susan B. Anthony"
 },
 "NODE_CIVIC_MO_BRANCH_LIBERALISM": {
  "portrait": "images/civics/liberalism.png",
  "portraitAlt": "Liberalism",
  "quote": "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.",
  "quoteAuthor": "The Declaration of Independence"
 },
 "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM": {
  "portrait": "images/civics/progressivism.png",
  "portraitAlt": "Progressivism",
  "quote": "The idea of freedom is inspiring. But what does it mean? If you are free in a political sense but have no food, what's that? The freedom to starve?",
  "quoteAuthor": "Angela Davis"
 },
 "NODE_CIVIC_MO_BRANCH_FASCISM": {
  "portrait": "images/civics/fascism.png",
  "portraitAlt": "Fascism",
  "quote": "For authoritarians, facts depend entirely on the power of men who can fabricate it.",
  "quoteAuthor": "Hannah Arendt"
 },
 "NODE_CIVIC_MO_BRANCH_RADICALISM": {
  "portrait": "images/civics/radicalism.png",
  "portraitAlt": "Radicalism",
  "quote": "The urge to destroy is also a creative urge.",
  "quoteAuthor": "Mikhail Bakunin"
 },
 "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM": {
  "portrait": "images/civics/absolutism.png",
  "portraitAlt": "Absolutism",
  "quote": "The center of authority in this new system is no longer an all-powerful king but the system itself, invisible but omnipresent.",
  "quoteAuthor": "Lewis Mumford"
 },
 "NODE_CIVIC_MO_BRANCH_COMMUNISM": {
  "portrait": "images/civics/communism.png",
  "portraitAlt": "Communism",
  "quote": "Workers of the world, unite! You have nothing to lose but your chains.",
  "quoteAuthor": "Karl Marx"
 },
 "NODE_CIVIC_MO_BRANCH_CENTRALISM": {
  "portrait": "images/civics/centralism.png",
  "portraitAlt": "Centralism",
  "quote": "I read, I study, I examine, I listen, I reflect, and out of all of this I try to form an idea into which I put as much common sense as I can.",
  "quoteAuthor": "Marquis de Lafayette"
 },
 "NODE_CIVIC_MO_BRANCH_SOCIALISM": {
  "portrait": "images/civics/socialism.png",
  "portraitAlt": "Socialism",
  "quote": "Socialism does not mean much more than better wages and shorter hours and nobody bossing you about.",
  "quoteAuthor": "George Orwell"
 }
};
  Object.keys(M).forEach(function (k) {
    var cur = window.CIVPEDIA_MEDIA[k] || {};
    Object.keys(M[k]).forEach(function (f) { if (cur[f] === undefined) cur[f] = M[k][f]; });
    window.CIVPEDIA_MEDIA[k] = cur;
  });
})();

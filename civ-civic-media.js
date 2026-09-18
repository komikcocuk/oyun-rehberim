// Quote + portrait for CULTURE-section civic pages, merged into the shared
// MEDIA lookup so the generic entry-card picks them up automatically.
// Quote/QuoteAuthor: <TypeQuotes> in progression-trees-culture*.xml (game files).
// Portrait: civilization.fandom.com (game's own cult_* icon textures are an
// undecodable proprietary format) -- one shared image per civ's unique civic
// tree (images/civics/<civ>_civics.png), one own image per universal/ideology
// civic (Capitalism-style). The 66 "Test of Time" nodes get a quote only; no
// image convention has been confirmed for them yet.
(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  var CIVIC_MEDIA = {
 "NODE_CIVIC_AQ_FOUNDATION": {
  "quote": "The whole wild woods are teeming with the sweet breath of the morn.",
  "quoteAuthor": "Liliʻuokalani"
 },
 "NODE_CIVIC_AQ_SYNCRETISM_CHOICE": {
  "quote": "Syncretism is the borrowing, affirmation, or integration of concepts, symbols, or practices of one Tradition into another.",
  "quoteAuthor": "Judith Berling"
 },
 "NODE_CIVIC_AQ_ABBASID_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_CHOLA_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_HAWAII_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_INCAN_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MAJAPAHIT_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MONGOLIA_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MING_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_NORMAN_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SONGHAI_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SPAIN_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_AMERICAN_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_BUGANDA_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_FRENCH_EMPIRE_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MEIJI_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MEXICO_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_MUGHAL_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_PRUSSIA_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_QING_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_RUSSIA_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_SIAM_ORIGINS": {
  "quote": "There will be time to prepare a face to meet the faces that you meet; there will be time to murder and create.",
  "quoteAuthor": "T. S. Eliot"
 },
 "NODE_CIVIC_AQ_AKSUM_PERIPLUS_OF_THE_ERYTHRAEAN_SEA": {
  "quote": "To that place all the ivory is brought.",
  "quoteAuthor": "The Periplus of the Erythraean Sea",
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Periplus of the Erythraean Sea"
 },
 "NODE_CIVIC_AQ_AKSUM_MONUMENTUM_ADULITANUM": {
  "quote": "I set up here this throne and consecrated it to Ares.",
  "quoteAuthor": "Monumentum Adulitanum",
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Monumentum Adulitanum"
 },
 "NODE_CIVIC_AQ_AKSUM_BOOK_OF_THE_HIMYARITES": {
  "quote": "Africa will write its own history, and in both north and south it will be a history of glory and dignity.",
  "quoteAuthor": "Patrice Lumumba",
  "portrait": "images/civics/aksumite_civics.png",
  "portraitAlt": "Book of the Himyarites"
 },
 "NODE_CIVIC_AQ_EGYPT_ARRIVAL_OF_HAPI": {
  "quote": "The River begins to rise when other Rivers diminish and begins to subside just when other Rivers increase.",
  "quoteAuthor": "Ibn Battuta",
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Arrival of Hapi"
 },
 "NODE_CIVIC_AQ_EGYPT_SCALES_OF_ANUBIS": {
  "quote": "The god Anubis said: Pass, thou, for thou knowest the names.",
  "quoteAuthor": "The Book of the Dead",
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Scales of Anubis"
 },
 "NODE_CIVIC_AQ_EGYPT_LIGHT_OF_AMUN_RA": {
  "quote": "Behold, thou image of gold, thou lord of terror; thou rollest along and art renewed day by day.",
  "quoteAuthor": "The Book of the Dead",
  "portrait": "images/civics/egyptian_civics.png",
  "portraitAlt": "Light of Amun-Ra"
 },
 "NODE_CIVIC_AQ_GREECE_EKKLESIA": {
  "quote": "The administration is in the hands of the many and not of the few.",
  "quoteAuthor": "Pericles",
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Ekklesia"
 },
 "NODE_CIVIC_AQ_GREECE_AGOGE": {
  "quote": "If you think that I rely on numbers, then all Greece is not sufficient. If on men's valor, then this number will do.",
  "quoteAuthor": "Leonidas",
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Agoge"
 },
 "NODE_CIVIC_AQ_GREECE_SYMMACHIA": {
  "quote": "Right, as the world goes, is only in question between equals in power, while the strong do what they can and the weak suffer what they must.",
  "quoteAuthor": "Thucydides",
  "portrait": "images/civics/greek_civics.png",
  "portraitAlt": "Symmachia"
 },
 "NODE_CIVIC_AQ_HAN_REN": {
  "quote": "Looked at from a distance, the scholar appears stern; when approached, he is mild; when he is heard to speak, his language is firm.",
  "quoteAuthor": "Confucius",
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Ren"
 },
 "NODE_CIVIC_AQ_HAN_YI": {
  "quote": "Riches and honors acquired by unrighteousness are to me as a floating cloud.",
  "quoteAuthor": "Confucius",
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Yi"
 },
 "NODE_CIVIC_AQ_HAN_LI": {
  "quote": "Always and in everything let there be reverence.",
  "quoteAuthor": "The Book of Rites",
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Li"
 },
 "NODE_CIVIC_AQ_HAN_ZHI": {
  "quote": "I do not open up the truth to one who is not eager to get knowledge.",
  "quoteAuthor": "Confucius",
  "portrait": "images/civics/han_civics.png",
  "portraitAlt": "Zhi"
 },
 "NODE_CIVIC_AQ_KHMER_MOUSONG": {
  "quote": "Rain fell like crystal, swelling the River and giving life to the forest, on the bodies of the young and old alike.",
  "quoteAuthor": "Moni Mekhala and Ream Eyso",
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Mousong"
 },
 "NODE_CIVIC_AQ_KHMER_AMNACH": {
  "quote": "The king's fire was like the moon, and his enemies drooped to the ground like lotuses at night.",
  "quoteAuthor": "Preah Khan Inscription",
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Amnach"
 },
 "NODE_CIVIC_AQ_KHMER_CHAKRAVARTI": {
  "quote": "Live with the Dhamma as your island, the Dhamma as your refuge, with nothing else as your refuge.",
  "quoteAuthor": "The Cakkavatti Sutta",
  "portrait": "images/civics/khmer_civics.png",
  "portraitAlt": "Chakravarti"
 },
 "NODE_CIVIC_AQ_MAURYA_ACHARYA": {
  "quote": "Those who know true wisdom are one with Thee, O God.",
  "quoteAuthor": "Vishnu Purana",
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Acharya"
 },
 "NODE_CIVIC_AQ_MAURYA_VYUHAM": {
  "quote": "For those who are born, death is certain, and for those who are dead, birth is certain.",
  "quoteAuthor": "The Mahābhārata",
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Vyuham"
 },
 "NODE_CIVIC_AQ_MAURYA_MANTRIPARISHAD": {
  "quote": "Test a servant in duty, a relative in difficulty, a friend in adversity, and a wife in misfortune.",
  "quoteAuthor": "Chanakya",
  "portrait": "images/civics/mauryan_civics.png",
  "portraitAlt": "Mantriparishad"
 },
 "NODE_CIVIC_AQ_MAYA_RAIN_OF_CHAAC": {
  "quote": "All alone the sky exists. The face of the earth has not yet appeared.",
  "quoteAuthor": "Popol Vuh",
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Rain of Chaac"
 },
 "NODE_CIVIC_AQ_MAYA_LORDS_OF_XIBALBA": {
  "quote": "The monarchs of Xibalba requested to be slain and resuscitated. They were killed, but the brothers refrained from resuscitating.",
  "quoteAuthor": "Popol Vuh",
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Lords of Xibalba"
 },
 "NODE_CIVIC_AQ_MAYA_CALENDAR_ROUND": {
  "quote": "It is 12 Ahau 8 Pax. The Holy Lord of Ixtutz drives the stone into the ground.",
  "quoteAuthor": "The Geneva Stela",
  "portrait": "images/civics/maya_civics.png",
  "portraitAlt": "Calendar Round"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_EARTHWORKS": {
  "quote": "The king's cup was placed on a tumulus, with many arrows set about it.",
  "quoteAuthor": "Jacques le Moyne",
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Earthworks"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_CAH_NAH_HA": {
  "quote": "The things the worshipper gives to his gods are not the food he places on the altar, or the blood in his veins. It is his thought.",
  "quoteAuthor": "Émile Durkheim",
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Cah-nah-ha"
 },
 "NODE_CIVIC_AQ_MISSISSIPPIAN_WAAHIH": {
  "quote": "This is a good day to die!",
  "quoteAuthor": "Sitting Bull",
  "portrait": "images/civics/mississippian_civics.png",
  "portraitAlt": "Waahih"
 },
 "NODE_CIVIC_AQ_PERSIA_SPADA": {
  "quote": "Be eager in the face of danger.",
  "quoteAuthor": "Xenophon",
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Spada"
 },
 "NODE_CIVIC_AQ_PERSIA_SATRAPIES": {
  "quote": "Better to live in a rugged land and rule than to cultivate rich plains and serve.",
  "quoteAuthor": "Cyrus the Great",
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Satrapies"
 },
 "NODE_CIVIC_AQ_PERSIA_ACHAEMENID_EMPIRE": {
  "quote": "Should I pass you by and leave you lying there because of your war against us, or should I set you up again because of your virtues?",
  "quoteAuthor": "Plutarch",
  "portrait": "images/civics/achaemenid_persian_civic.png",
  "portraitAlt": "Baziš"
 },
 "NODE_CIVIC_AQ_ROME_EXERCITUS_ROMANUS": {
  "quote": "It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.",
  "quoteAuthor": "Julius Caesar",
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Exercitus Romanus"
 },
 "NODE_CIVIC_AQ_ROME_CIVIS_ROMANUS": {
  "quote": "Avoid any specific discussion of public Policy at public meetings.",
  "quoteAuthor": "Cicero",
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Civis Romanus"
 },
 "NODE_CIVIC_AQ_ROME_LEGATUS_PRO_PRAETORE": {
  "quote": "Those who steal from one person spend their lives in shackles and chains - those who steal from all people, in purple and [icon:YIELD_GOLD].",
  "quoteAuthor": "Cato",
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Legatus Pro Praetore"
 },
 "NODE_CIVIC_AQ_ROME_SENATUS_POPULUSQUE_ROMANUS": {
  "quote": "Let arms yield to the toga.",
  "quoteAuthor": "Cicero",
  "portrait": "images/civics/roman_civics.png",
  "portraitAlt": "Senatus Populusque Romanus"
 },
 "NODE_CIVIC_EX_BRANCH_THEOLOGY": {
  "quote": "By knowing things in their true nature, one knows the divine.",
  "quoteAuthor": "The Book of Causes",
  "portrait": "images/civics/theology.png",
  "portraitAlt": "Theology"
 },
 "NODE_CIVIC_EX_BRANCH_REFORMATION": {
  "quote": "The gospel cannot be truly preached without offense and tumult.",
  "quoteAuthor": "Martin Luther",
  "portrait": "images/civics/reformation.png",
  "portraitAlt": "Reformation"
 },
 "NODE_CIVIC_EX_AKSUM_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_EGYPT_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_GREECE_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_HAN_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_KHMER_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MAURYA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MAYA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MISSISSIPPIAN_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_PERSIA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_ROMAN_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_HIERARCHY": {
  "quote": "I gaze into the faces of eagles and jaguars, and behold the faces of jades and jewels.",
  "quoteAuthor": "Nezahualcoyotl"
 },
 "NODE_CIVIC_EX_SYNCRETISM_CHOICE": {
  "quote": "The Holy Roman Empire was neither Holy nor Roman, nor an Empire.",
  "quoteAuthor": "Voltaire"
 },
 "NODE_CIVIC_EX_AMERICAN_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_BUGANDA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_FRENCH_EMPIRE_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MEIJI_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MEXICO_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_MUGHAL_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_PRUSSIA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_QING_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_RUSSIA_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_SIAM_RENAISSANCE": {
  "quote": "Spring winds bring life again.",
  "quoteAuthor": "Bai Juyi"
 },
 "NODE_CIVIC_EX_ABBASID_ROUND_CITY": {
  "quote": "Baghdad was a city of palaces, not of stucco and mortar, but of marble.",
  "quoteAuthor": "The Yakut",
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Round City"
 },
 "NODE_CIVIC_EX_ABBASID_MAWLA": {
  "quote": "Know that God has assigned a leader for you - nomad and city resident, Arab and non-Arab, free or slave, young or old.",
  "quoteAuthor": "The Hadith of Ghadir Khumm",
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Mawla"
 },
 "NODE_CIVIC_EX_ABBASID_AL_JABR": {
  "quote": "When I considered what people generally want in calculating, I found that it always is a number.",
  "quoteAuthor": "Al-Khwarizmi",
  "portrait": "images/civics/abbasid_civics.png",
  "portraitAlt": "Al-Jabr"
 },
 "NODE_CIVIC_EX_CHOLA_NAGARAM": {
  "quote": "Swifter than the monsoon rains, I hurry home, thinking only of you.",
  "quoteAuthor": "Ainkurunooru",
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Nagaram"
 },
 "NODE_CIVIC_EX_CHOLA_KANAKAM": {
  "quote": "If the goddess wills it, wealth will multiply. When she departs, these gifts vanish.",
  "quoteAuthor": "Naanmanik Kadigai",
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Kanakam"
 },
 "NODE_CIVIC_EX_CHOLA_DIGVIJAYA": {
  "quote": "The ten heads of Ravana lay like the mountains holding the earth, his shoulders like tides, without movement.",
  "quoteAuthor": "Ramavataram",
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Digvijaya"
 },
 "NODE_CIVIC_EX_CHOLA_MONSOON_WINDS": {
  "quote": "It is preceded by desolation; it brings with it the hopes of spring.",
  "quoteAuthor": "Khushwant Singh",
  "portrait": "images/civics/chola_civics.png",
  "portraitAlt": "Monsoon Winds"
 },
 "NODE_CIVIC_EX_HAWAII_MANA": {
  "quote": "Mana is a part of the spiritual world, but felt in the physical.",
  "quoteAuthor": "Bradd Shore",
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Mana"
 },
 "NODE_CIVIC_EX_HAWAII_OHANA": {
  "quote": "Nānā i ke kumu. Look to the source.",
  "quoteAuthor": "Hawaiian Saying",
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "Ohana"
 },
 "NODE_CIVIC_EX_HAWAII_HE_E_NALU": {
  "quote": "Just take your time - wave comes. Let the other guys go.",
  "quoteAuthor": "Duke Kahanamoku",
  "portrait": "images/civics/hawaii_civics.png",
  "portraitAlt": "He'e nalu"
 },
 "NODE_CIVIC_EX_INCA_MITA": {
  "quote": "Labor service is generally considered to be the critical means by which the Inca state funded its activities.",
  "quoteAuthor": "Terry Yarov LeVine",
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Mit'a"
 },
 "NODE_CIVIC_EX_INCA_AYLLU": {
  "quote": "The valley sings with the voice of the morning, of the noontide, of the afternoon, of the evening.",
  "quoteAuthor": "José María Arguedas",
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Ayllu"
 },
 "NODE_CIVIC_EX_INCA_QHAPAQ_NAN": {
  "quote": "The Earth and the Places watch human consumption jealously and demand their part in it.",
  "quoteAuthor": "Catherine Allen",
  "portrait": "images/civics/incan_civics.png",
  "portraitAlt": "Qhapaq Ñan"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_WAYANG": {
  "quote": "A set of betel nut offerings and incense shivers in the clear stillness of the world.",
  "quoteAuthor": "I. Wayan Arthawa",
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Wayang"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_ALIRAN_KEPERCAYAAN": {
  "quote": "Whoever is given compassion will return love.",
  "quoteAuthor": "Gagak Mwang Sarpa Pejah Dening Yuyu",
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Aliran Kepercayaan"
 },
 "NODE_CIVIC_EX_MAJAPAHIT_NUSUNTARA": {
  "quote": "Wherever you go, we will follow, and share in joy and sorrow.",
  "quoteAuthor": "Cakrangga Mwang Durbuddhi",
  "portrait": "images/civics/majapahit_civics.png",
  "portraitAlt": "Nusantara"
 },
 "NODE_CIVIC_EX_MING_NINE_GARRISONS": {
  "quote": "If we do not destroy our enemies, what are armies for?",
  "quoteAuthor": "The Yongle Emperor",
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Nine Garrisons"
 },
 "NODE_CIVIC_EX_MING_LIJIA": {
  "quote": "Bright are the city walls of the capital; red-robed officials shout on broad streets.",
  "quoteAuthor": "Yuan Hongdao",
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Lijia"
 },
 "NODE_CIVIC_EX_MING_DA_MING_LU": {
  "quote": "Rituals guide the people; law codes restrain the wayward.",
  "quoteAuthor": "The Hongwu Emperor",
  "portrait": "images/civics/ming_civics.png",
  "portraitAlt": "Da Ming Lu"
 },
 "NODE_CIVIC_EX_MONGOLIA_ULUS": {
  "quote": "The Mongols did not find honor in fighting; they found honor in winning.",
  "quoteAuthor": "Jack Weatherford",
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Ulus"
 },
 "NODE_CIVIC_EX_MONGOLIA_FOUR_HOUNDS": {
  "quote": "Chisels for snouts and awls for tongues, iron for hearts and whips for swords, drinking the dew and racing the wind - they go.",
  "quoteAuthor": "The Secret History of the Mongols",
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Four Hounds"
 },
 "NODE_CIVIC_EX_MONGOLIA_YASSA": {
  "quote": "It is forbidden to make peace with a monarch who has not submitted.",
  "quoteAuthor": "The Yassa",
  "portrait": "images/civics/mongolian_civics.png",
  "portraitAlt": "Yassa"
 },
 "NODE_CIVIC_EX_NORMAN_CONSUETUDINES_ET_JUSTICIE": {
  "quote": "Never promise anything except what you are willing to give.",
  "quoteAuthor": "The Book of Good Manners",
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Consuetudines et Justicie"
 },
 "NODE_CIVIC_EX_NORMAN_COMMON_LAW": {
  "quote": "They cover their sins with excuses of error and ignorance.",
  "quoteAuthor": "The Mirror of Justices",
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Common Law"
 },
 "NODE_CIVIC_EX_NORMAN_DOMESDAY_BOOK": {
  "quote": "It has been a city since ancient times.",
  "quoteAuthor": "Description of England",
  "portrait": "images/civics/norman_civics.png",
  "portraitAlt": "Domesday Book"
 },
 "NODE_CIVIC_EX_SONGHAI_SHIPS_OF_THE_DESERT": {
  "quote": "He knew the desert routes and watering places, the stars at night, the scent and touch of sand.",
  "quoteAuthor": "H. J. Fisher",
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Ships of the Desert"
 },
 "NODE_CIVIC_EX_SONGHAI_HI_KOI": {
  "quote": "One finds oneself on the path already traveled and one foresees what remains to be done.",
  "quoteAuthor": "Jean-Marie Gibbal",
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Hi-Koi"
 },
 "NODE_CIVIC_EX_SONGHAI_KANTA": {
  "quote": "Every village that follows his wishes, he conquers them. He moves on. Every village that refuses, he conquers it, he burns it, he moves on.",
  "quoteAuthor": "The Epic of Askia Mohammed",
  "portrait": "images/civics/songhai_civics.png",
  "portraitAlt": "Kanta"
 },
 "NODE_CIVIC_EX_SPAIN_COUNCIL_OF_THE_INDIES": {
  "quote": "I have a glove into which I can put your whole city.",
  "quoteAuthor": "Charles V",
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Council of the Indies"
 },
 "NODE_CIVIC_EX_SPAIN_ARMADA": {
  "quote": "I sent the Armada against men, not God's winds and waves.",
  "quoteAuthor": "Philip II",
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "Armada"
 },
 "NODE_CIVIC_EX_SPAIN_NEW_WORLD_RICHES": {
  "quote": "We came to serve God - and get rich.",
  "quoteAuthor": "Bernal Díaz del Castillo",
  "portrait": "images/civics/spanish_civics.png",
  "portraitAlt": "New World Riches"
 },
 "NODE_CIVIC_MO_BRANCH_DEMOCRACY": {
  "quote": "Suffrage is the pivotal right.",
  "quoteAuthor": "Susan B. Anthony",
  "portrait": "images/civics/democracy.png",
  "portraitAlt": "Democracy"
 },
 "NODE_CIVIC_MO_BRANCH_LIBERALISM": {
  "quote": "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.",
  "quoteAuthor": "The Declaration of Independence",
  "portrait": "images/civics/liberalism.png",
  "portraitAlt": "Liberalism"
 },
 "NODE_CIVIC_MO_BRANCH_PROGRESSIVISM": {
  "quote": "The idea of freedom is inspiring. But what does it mean? If you are free in a political sense but have no food, what's that? The freedom to starve?",
  "quoteAuthor": "Angela Davis",
  "portrait": "images/civics/progressivism.png",
  "portraitAlt": "Progressivism"
 },
 "NODE_CIVIC_MO_BRANCH_FASCISM": {
  "quote": "For authoritarians, facts depend entirely on the power of men who can fabricate it.",
  "quoteAuthor": "Hannah Arendt",
  "portrait": "images/civics/fascism.png",
  "portraitAlt": "Fascism"
 },
 "NODE_CIVIC_MO_BRANCH_RADICALISM": {
  "quote": "The urge to destroy is also a creative urge.",
  "quoteAuthor": "Mikhail Bakunin",
  "portrait": "images/civics/radicalism.png",
  "portraitAlt": "Radicalism"
 },
 "NODE_CIVIC_MO_BRANCH_AUTHORITARIANISM": {
  "quote": "The center of authority in this new system is no longer an all-powerful king but the system itself, invisible but omnipresent.",
  "quoteAuthor": "Lewis Mumford",
  "portrait": "images/civics/absolutism.png",
  "portraitAlt": "Absolutism"
 },
 "NODE_CIVIC_MO_BRANCH_COMMUNISM": {
  "quote": "Workers of the world, unite! You have nothing to lose but your chains.",
  "quoteAuthor": "Karl Marx",
  "portrait": "images/civics/communism.png",
  "portraitAlt": "Communism"
 },
 "NODE_CIVIC_MO_BRANCH_CENTRALISM": {
  "quote": "I read, I study, I examine, I listen, I reflect, and out of all of this I try to form an idea into which I put as much common sense as I can.",
  "quoteAuthor": "Marquis de Lafayette",
  "portrait": "images/civics/centralism.png",
  "portraitAlt": "Centralism"
 },
 "NODE_CIVIC_MO_BRANCH_SOCIALISM": {
  "quote": "Socialism does not mean much more than better wages and shorter hours and nobody bossing you about.",
  "quoteAuthor": "George Orwell",
  "portrait": "images/civics/socialism.png",
  "portraitAlt": "Socialism"
 },
 "NODE_CIVIC_MO_AKSUM_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_EGYPT_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_GREECE_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_HAN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_KHMER_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAURYA_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAYA_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MISSISSIPPIAN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_PERSIA_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ROMAN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ABBASID_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_CHOLA_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_HAWAII_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_INCAN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MAJAPAHIT_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MONGOLIA_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_MING_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_NORMAN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SONGHAI_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_SPAIN_MODERNIZATION": {
  "quote": "What has been cut apart cannot be glued back together.",
  "quoteAuthor": "Zygmunt Bauman"
 },
 "NODE_CIVIC_MO_ADMINISTRATION": {
  "quote": "The conflict between countryside and city becomes surpassed when, simultaneously, both are absorbed into one generalized urban fabric.",
  "quoteAuthor": "Henri Lefebvre"
 },
 "NODE_CIVIC_MO_SYNCRETISM_CHOICE": {
  "quote": "The huacas were the gods of the Indians; and in many places the Spaniards turned the huacas into churches or placed the image of the Virgin, and thus the people continue to go to them and pay them respect.",
  "quoteAuthor": "Felipe Guaman Poma de Ayala"
 },
 "NODE_CIVIC_MO_AMERICA_YANKEE_INGENUITY": {
  "quote": "We have it in our power to begin the world over again.",
  "quoteAuthor": "Thomas Paine",
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Yankee Ingenuity"
 },
 "NODE_CIVIC_MO_AMERICA_CAPTAINS_OF_INDUSTRY": {
  "quote": "I would rather earn one percent off a hundred people's efforts than one hundred percent of my own efforts.",
  "quoteAuthor": "John D. Rockefeller",
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Captains of Industry"
 },
 "NODE_CIVIC_MO_AMERICA_WARTIME_MANUFACTURING": {
  "quote": "What's good for M&M Enterprises is good for the country!",
  "quoteAuthor": "Joseph Heller",
  "portrait": "images/civics/american_civics.png",
  "portraitAlt": "Wartime Manufacturing"
 },
 "NODE_CIVIC_MO_BUGANDA_NNALUBAALE": {
  "quote": "We want our cattle to get fat on our land, and we do not want the fat removed to feed others.",
  "quoteAuthor": "Jomo Kenyatta",
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "'Nnalubaale"
 },
 "NODE_CIVIC_MO_BUGANDA_BLUTABAALO": {
  "quote": "When elephants fight, it is the grass that suffers.",
  "quoteAuthor": "Kikuyu Proverb",
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Blutabaalo"
 },
 "NODE_CIVIC_MO_BUGANDA_NYANZA": {
  "quote": "One small twig, combined with others, makes a bundle.",
  "quoteAuthor": "Ugandan Proverb",
  "portrait": "images/civics/buganda_civics.png",
  "portraitAlt": "Nyanza "
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_BELLE_EPOQUE": {
  "quote": "There is only one good thing in life, and that is love.",
  "quoteAuthor": "Guy de Maupassant",
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Belle Époque"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_VOIE_TRIOMPHALE": {
  "quote": "Beauty perishes in life, but is immortal in art.",
  "quoteAuthor": "Leonardo da Vinci",
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Voie Triomphale"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_GRANDE_ARMEE": {
  "quote": "I can do other things besides war, but duty comes first.",
  "quoteAuthor": "Napoleon Bonaparte",
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Grande Armée"
 },
 "NODE_CIVIC_MO_FRENCH_EMPIRE_CODE_CIVIL": {
  "quote": "Is it not an absurd and terrible thing that that which is true in one village is false in another?",
  "quoteAuthor": "Voltaire",
  "portrait": "images/civics/french_civics.png",
  "portraitAlt": "Code Civil des Français"
 },
 "NODE_CIVIC_MO_MEIJI_BUNMEI_KAIKA": {
  "quote": "The man I used to meet in the mirror is no more.",
  "quoteAuthor": "Masaoka Shiki",
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Bunmei Kaika"
 },
 "NODE_CIVIC_MO_MEIJI_OATH_IN_FIVE_ARTICLES": {
  "quote": "Knowledge will be sought through the whole world to strengthen the foundation of imperial rule.",
  "quoteAuthor": "The Oath in Five Articles",
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Oath in Five Articles"
 },
 "NODE_CIVIC_MO_MEIJI_SUPREME_WAR_COUNCIL": {
  "quote": "First, we protect the line of sovereignty. Then, the line of advantage.",
  "quoteAuthor": "Yamagata Aritomo",
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Supreme War Council"
 },
 "NODE_CIVIC_MO_MEIJI_KANTAI_KESSEN": {
  "quote": "Humanity is born for love and revolution.",
  "quoteAuthor": "Osamu Dazai",
  "portrait": "images/civics/meiji_civics.png",
  "portraitAlt": "Kantai Kessen"
 },
 "NODE_CIVIC_MO_MEXICO_PLANES_POLITICOS": {
  "quote": "I'd rather die on my feet than live on my knees.",
  "quoteAuthor": "Emiliano Zapata",
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Planes Políticos"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_IGUALA": {
  "quote": "My own will was law, and who compelled me to divide my power? Myself, and myself alone.",
  "quoteAuthor": "Agustín de Iturbide",
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Iguala"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_AYUTLA": {
  "quote": "The Mexican nation is an indivisible one.",
  "quoteAuthor": "Constitution of the United Mexican States",
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Ayutla"
 },
 "NODE_CIVIC_MO_MEXICO_PLAN_OF_TUXTEPEC": {
  "quote": "Nothing ever happens in Mexico until it happens.",
  "quoteAuthor": "Porfirio Díaz",
  "portrait": "images/civics/mexico_civics.png",
  "portraitAlt": "Plan of Tuxtepec"
 },
 "NODE_CIVIC_MO_MUGHAL_ZABT": {
  "quote": "Not a virgin or rupee was safe in his realm.",
  "quoteAuthor": "Mulk Raj Anand",
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Zabt"
 },
 "NODE_CIVIC_MO_MUGHAL_JAGIR": {
  "quote": "We think these big people are very happy, but we are just worried about hunger. They have a thousand worries.",
  "quoteAuthor": "Munshi Premchand",
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Jagir"
 },
 "NODE_CIVIC_MO_MUGHAL_MANSABDARI": {
  "quote": "A monarch should be ever intent on conquest, lest his neighbors rise against him.",
  "quoteAuthor": "Akbar the Great",
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Mansabdari"
 },
 "NODE_CIVIC_MO_MUGHAL_GARDENS_OF_PARADISE": {
  "quote": "The world is a bridge - pass over it, but build no houses.",
  "quoteAuthor": "Akbar the Great",
  "portrait": "images/civics/mughal_civics.png",
  "portraitAlt": "Gardens of Paradise"
 },
 "NODE_CIVIC_MO_PRUSSIA_RUHR": {
  "quote": "Technology puts to nature the unreasonable demand that it supply power which can be extracted and stored.",
  "quoteAuthor": "Martin Heidegger",
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Ruhr"
 },
 "NODE_CIVIC_MO_PRUSSIA_ZOLLVEREIN": {
  "quote": "A nation should not view industries' progress from a purely economic standpoint.",
  "quoteAuthor": "Friedrich List",
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Zollverein"
 },
 "NODE_CIVIC_MO_PRUSSIA_EMS_DISPATCH": {
  "quote": "Prussia was hatched from a cannonball.",
  "quoteAuthor": "Napoleon Bonaparte",
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Ems Dispatch"
 },
 "NODE_CIVIC_MO_PRUSSIA_BEWEGUNGSKRIEG": {
  "quote": "War is merely the continuation of policy by other means.",
  "quoteAuthor": "Carl von Clausewitz",
  "portrait": "images/civics/prussian_civics.png",
  "portraitAlt": "Bewegungskrieg"
 },
 "NODE_CIVIC_MO_QING_TEN_GREAT_CAMPAIGNS": {
  "quote": "Foreigners appreciate only military power.",
  "quoteAuthor": "The Qianlong Emperor",
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Ten Great Campaigns"
 },
 "NODE_CIVIC_MO_QING_OPEN_CUSTOMS": {
  "quote": "Go abroad and trade to show the populous and affluent nature of our rule.",
  "quoteAuthor": "The Kangxi Emperor",
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Open Customs"
 },
 "NODE_CIVIC_MO_QING_KANG_XI_TAX_REFORMATION": {
  "quote": "There are many ways of governing well, and they all are order and prosperity.",
  "quoteAuthor": "Qing Emperor",
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Kang Xi Tax Reformation"
 },
 "NODE_CIVIC_MO_QING_STABILIZING_FRONTIER": {
  "quote": "If I just folded my arms and yielded, I would have no face to see our ancestors after death.",
  "quoteAuthor": "Qing Emperor",
  "portrait": "images/civics/qing_civics.png",
  "portraitAlt": "Stabilizing Frontier"
 },
 "NODE_CIVIC_MO_RUSSIA_SERFDOM": {
  "quote": "Men accept servility so as to accumulate wealth.",
  "quoteAuthor": "Étienne de La Boétie",
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Serfdom"
 },
 "NODE_CIVIC_MO_RUSSIA_TABLE_OF_RANKS": {
  "quote": "Kings are the slaves of history.",
  "quoteAuthor": "Leo Tolstoy",
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Table of Ranks"
 },
 "NODE_CIVIC_MO_RUSSIA_SAMODERZHAVIYE": {
  "quote": "The well-being of the sovereign is inseparable from the national well-being.",
  "quoteAuthor": "Nicholas II",
  "portrait": "images/civics/russian_civics.png",
  "portraitAlt": "Samoderzhaviye"
 },
 "NODE_CIVIC_MO_SIAM_NINE_GEMS": {
  "quote": "City of angels, great city of immortals, magnificent city of the nine gems, seat of the king, home of the gods.",
  "quoteAuthor": "Name of Bangkok",
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Nine Gems"
 },
 "NODE_CIVIC_MO_SIAM_MANDALA": {
  "quote": "The universe consists of an infinite amount of suns and an infinite amount of worlds. At the center of each is Mount Meru.",
  "quoteAuthor": "Chaophraya Thiphakorawong",
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Mandala"
 },
 "NODE_CIVIC_MO_SIAM_SRIWILAI": {
  "quote": "From every nation, from twelvefold tongues, all come and stand in the shade of this city.",
  "quoteAuthor": "King Narai",
  "portrait": "images/civics/siam_civics.png",
  "portraitAlt": "Sriwilai"
 }
};
  for (var k in CIVIC_MEDIA) { window.CIVPEDIA_MEDIA[k] = CIVIC_MEDIA[k]; }
})();

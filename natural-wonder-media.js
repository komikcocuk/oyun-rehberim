// Portrait screenshots for MAP > Natural Wonders, merged into the shared MEDIA
// lookup. Source: civilization.fandom.com "<Name> in-game (Civ7).png" in-game
// captures, centre-cropped square and downscaled to 480px JPEG.
(function () {
  window.CIVPEDIA_MEDIA = window.CIVPEDIA_MEDIA || {};
  var NW_MEDIA = {
 "FEATURE_VALLEY_OF_FLOWERS": {
  "portrait": "images/natural_wonders/valley_of_flowers.jpg",
  "portraitAlt": "Valley of Flowers"
 },
 "FEATURE_HOERIKWAGGO": {
  "portrait": "images/natural_wonders/hoerikwaggo.jpg",
  "portraitAlt": "Hoerikwaggo"
 },
 "FEATURE_TORRES_DEL_PAINE": {
  "portrait": "images/natural_wonders/torres_del_paine.jpg",
  "portraitAlt": "Torres del Paine"
 },
 "FEATURE_BARRIER_REEF": {
  "portrait": "images/natural_wonders/great_barrier_reef.jpg",
  "portraitAlt": "Great Barrier Reef"
 },
 "FEATURE_REDWOOD_FOREST": {
  "portrait": "images/natural_wonders/redwood_forest.jpg",
  "portraitAlt": "Redwood Forest"
 },
 "FEATURE_GRAND_CANYON": {
  "portrait": "images/natural_wonders/grand_canyon.jpg",
  "portraitAlt": "Grand Canyon"
 },
 "FEATURE_GULLFOSS": {
  "portrait": "images/natural_wonders/gullfoss.jpg",
  "portraitAlt": "Gullfoss"
 },
 "FEATURE_IGUAZU_FALLS": {
  "portrait": "images/natural_wonders/iguazu_falls.jpg",
  "portraitAlt": "Iguazú Falls"
 },
 "FEATURE_KILIMANJARO": {
  "portrait": "images/natural_wonders/mount_kilimanjaro.jpg",
  "portraitAlt": "Mount Kilimanjaro"
 },
 "FEATURE_ULURU": {
  "portrait": "images/natural_wonders/uluru.jpg",
  "portraitAlt": "Uluru"
 },
 "FEATURE_ZHANGJIAJIE": {
  "portrait": "images/natural_wonders/zhangjiajie.jpg",
  "portraitAlt": "Zhangjiajie"
 },
 "FEATURE_THERA": {
  "portrait": "images/natural_wonders/thera.jpg",
  "portraitAlt": "Thera"
 }
};
  for (var k in NW_MEDIA) { window.CIVPEDIA_MEDIA[k] = NW_MEDIA[k]; }
})();

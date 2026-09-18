# Görsel varlıklar / icon konvansiyonu

Uygulama ikonları dosya adından bulur. Dosya yoksa otomatik olarak
harf rozetine (ör. "G", "CS") düşer — eksik ikonlar hata vermez.

## Klasörler ve adlandırma

| Klasör | Ne için | Dosya adı kuralı | Örnek |
|---|---|---|---|
| `images/icons/` | Metin içi kavram/yield ikonları (`[icon:TOKEN]`) | `<token>.png` (küçük harf) | `[icon:YIELD_GOLD]` → `yield_gold.png` |
| `images/icons/` | Lider attribute çipleri | `attribute_<ad>.png` | `attribute_economic.png` |
| `images/icons/` | Başlangıç bias / terrain çipleri | `terrain_<ad>.png` | `terrain_desert.png` |
| `images/civs/` | Civ Syncretism tablosundaki civ logoları (48 adet, dolu) | `<civ_adı>.png` (slug) | `images/civs/songhai.png` |
| `images/mementos/` | Memento ikonları (108 adet, dolu) | `<memento_adı>.png` (slug) | `images/mementos/takoba.png` |
| `images/icons/terrain_generic.png` | Starting Biases için tek jenerik "tile" ikonu (wiki de biome başına ayrı ikon kullanmıyor) | sabit | — |
| `images/leaders/icons/` | Lider portreleri | `<slug>.png` | `amina.png` |

Slug kuralı: küçük harf, aksan sil, parantez içini sil, harf/rakam
dışını `_` yap (`app.js` → `iconSlug`).

## İkon eşleştirmesi (wiki ile birebir)

`app.js`'teki `[icon:TOKEN]` → dosya adı = `<token>.png`. Dosyalar,
oyun ability metnindeki token'ları wiki lider tablosundaki **tam o
konumda** görünen ikon dosyasıyla hizalayarak indirildi
(`tools/align_icons.py` → `tools/token2wikifile.json` / `dl_map.json`).

Önemli düzeltmeler: `unit_army_commander` = `Commander (Civ7).png`
(önceki "Army Commander Icon" yanlıştı), `military_vp` = `Dominion`,
`yield_angry` = `Unrest`, `action_move` = `Movement`, `growth_rate` =
`Growth Rate`. Yeniden üretmek için wrows.json'u localhost harvester ile
`api.php?action=parse` üzerinden çek, sonra `align_icons.py`.

Wiki, oyun metninde `[icon:]` olmayan pek çok yere de ikon koyuyor
("Cavalry Units" → Unit, "Cities" → City, "Happiness" → Happiness…).
`tools/splice2.py` bunları oyun ability metnine difflib hizalamasıyla
enjekte ediyor (`ability_spliced.json` → `leader-lore.js`'e merge). ~350
wiki ikonundan ~26'sı hâlâ farklı (çoğu sıralama nüansı / elle yazılmış
Himiko metni). Yeni gereken ikonlar: `unit`, `attribute`, `happy`,
`joyous`, `ecstatic`, `mastery`, `age_antiquity`.

## leader-lore.js (oyun dosyalarından)

`app/src/main/assets/leader-lore.js` — Civ VII kurulumundaki
`LeaderText.xml` / `CivilopediaText.xml` dosyalarından **birebir** çıkarıldı:
- 36 liderin `abilityName` + `abilityDesc` (oyunun kendi `[BLIST]/[LI]/[B]/
  [icon:TOKEN]/[TIP:]` işaretlemesiyle) → ability metni ve sağ kart artık
  tahmine (`linkifyConcepts`) değil, oyun metnine dayanıyor.
- 17 DLC/persona liderinin `history` paragrafları → **Historical Context**
  bölümü. 19 elle yazılmış lider zaten `data.js`'te bu metne sahip; app.js
  hepsine "Historical Context" başlığını veriyor.
- 36 liderin `agendaName` + `agendaDesc`'i (`LOC_DIPLOMACY_AGENDA_*_DESC`,
  `tools/extract_agendas.py`) → sağ karttaki **Leader Agenda** bölümü.
  Önceki metin `leader-list.js` katalogundandı ve `linkifyConcepts` "Cavalry
  Units"e yanlışlıkla Combat Strength kılıç ikonu koyuyordu. Artık oyun metni
  birebir; oyunun koyduğu `[icon:]`'lar dışında ikon eklenmiyor.
  ("Unit"/"Units" kelimesi linkify listesinden çıkarıldı.)
- `CIVPEDIA_EXTRA_TIPS`: oyundan çekilen 3 eksik tooltip (Dominion,
  Independent Power, Mastery).

## leader-extras.js (wiki'den)

`leader-extras.js` — civilization.fandom.com'daki her lider sayfasının
infobox'ından kazındı (`tools/build_extras.py` + harvester):
- **Starting Biases** (36 liderde 17 dolu) → etiket listesi. İkon: wiki de
  biome başına ayrı ikon kullanmadığı için tek `terrain_generic.png`.
- **Mementos** (36 lider) → etiket listesi + `images/mementos/<slug>.png`.
- **Civ Syncretism & Unlocks** (36 lider) → `suggested` / `antiquity` /
  `exploration` / `modern` civ listeleri + `images/civs/<slug>.png` logoları.

Uygulamadaki eski `civSyncretismAndUnlocks` (historic/geographic/strategic)
alanı artık kullanılmıyor; `renderSyncretismBlock` wiki yapısını
(Suggested/Antiquity/Exploration/Modern) render ediyor.

### Görünüm

Sağ karttaki listeler kutucuk (chip) yerine wiki tarzında:
- Attributes / Starting Biases / Mementos → `mode:"rows"` (ikon + metin,
  alt alta, çerçevesiz).
- Civ Syncretism → `mode:"grid"` (civ logosu üstte, adı altında).
`renderLinkedList(items, forcedPage, iconDir, fixedIcon, mode)`.

Yeniden üretmek için: `scratchpad/extract_leaders.py` + `build_lore.py`
(Steam yolu script içinde sabit).

## Mevcut durum

`images/icons/` altında **87 gerçek ikon var** (civilization.fandom.com'dan,
kaynak/lisans sorumluluğu proje sahibinde, dağıtılmıyor). `data.js` metinlerinde
geçen 87 `[icon:...]` token'ından **86'sı** artık gerçek ikonla eşleşiyor:
tüm yield'ler, 7 attribute, resources/tech/civics, wonder/celebration/specialist,
trade_route/government/social_policy/tradition, war/war_support, 3 victory puanı,
greatwork, citystate, combat, religion, promotion, unit ikonları (settler,
migrant, merchant, missionary, army/fleet commander, hoplite, gusa, chevaler,
treasure_fleet), action_* (move/heal/ranged/pillage/fortify/showall),
city_* (unique_quarter/urban/rural/unimproved/fortified/building_list),
player_relationship_* (alliance/friendly/helpful/unfriendly/hostile),
diplomatic_action, commander_radius, growth_rate, damaged, project,
narrative event, tradition slot, natural wonder, ideology, capital.

**Hâlâ rozet (dosya yok):**
- `UNIT_CAUTION` — wiki'de karşılığı bulunamadı.
- Terrain/biome ikonları — wiki'de küçük ikon yok (Desert, Plains, Tundra,
  Grassland, Tropical, Vegetated, Coastal, River...). İstersen oyunun kendi
  dosyalarından ekle: `terrain_desert.png` vb.
- Civ logoları (`images/civs/`) ve mementolar (`images/mementos/`) —
  `leader-list.js`'te veri de boş.

Bir token'ın etiketini/sembolünü/hedef sayfasını ayarlamak:
`leader-media.js` → `CIVPEDIA_ICON_META`. `img: "ozel_ad.png"` alanı dosya
adı kuralını ezer.

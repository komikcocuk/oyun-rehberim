// Hand-written unit strategy notes, adapted from the Strategy sections on
// civilization.fandom.com plus verified game mechanics. Prose style matches the
// "Civ Mechanics and Strategy" civ chapters: state facts directly, no
// attribution to guides. Rendered by app.js as a collapsible "Strategy" section
// above Historical Context. Tier variants (UNIT_X_2 / _3) fall back to UNIT_X.
window.CIVPEDIA_UNIT_STRATEGY = {
 "UNIT_SCOUT": [
  "The Scout is the first unit to train when a game begins. It is not a military unit, so it cannot fight; both of its actions — [icon:action_showall] Search and Lookout — only work while it still has [icon:action_move] Movement points, and using either one ends the turn.",
  "Search, used the moment a Scout is built, reveals the surrounding terrain and any nearby [icon:INDEPENDENT_POWER] Independent Powers or rival civilizations, which informs early Settlement placement. Two or three Scouts working outward toward the likely positions of other civilizations claim the contested goody huts before rivals reach them; huts along coastlines and in snow are safe to leave for later.",
  "Once the map is explored the Scout becomes a sentry. Lookout stationed on rough or vegetated tiles along a border gives early warning of an invasion, and because Scouts are cheap and share tiles with friendly units they can feed [icon:action_showall] Sight to [icon:ACTION_RANGED] Ranged and Air units whose attack range exceeds their vision.",
  "A Scout can travel with an [icon:UNIT_ARMY_COMMANDER] Army Commander without taking a unit slot. Ahead of an advancing army it scouts enemy [icon:CITY_FORTIFIED] Fortifications and hidden units so long-range bombardment lands where it matters, while staying safe inside the stack."
 ],
 "UNIT_WARRIOR": [
  "The Warrior is every civilization's first military unit and can be produced in a single turn from a new [icon:YIELD_CITIES] Capital, though the Scout is still the better opening build.",
  "Its role is defensive: hold off hostile [icon:INDEPENDENT_POWER] Independent Powers early, then serve as a cheap front line that shields [icon:ACTION_RANGED] Ranged units until a proper army is assembled. Upgrade it to Spearman once Bronze Working is available."
 ],
 "UNIT_CHARIOT": [
  "The Chariot is the first Cavalry unit of the Antiquity Age. Its high [icon:action_move] Movement and [icon:NAR_REW_COMBAT] Combat Strength make it the most reliable answer to enemy [icon:ACTION_RANGED] Ranged units, which are the dominant force of the age — it flanks and destroys exposed archers and Ballistas before they can fire again.",
  "Chariots are expensive for this stage and are not needed in quantity. Two or three are enough to counter enemy Ranged units and to reinforce a distant [icon:UNIT_ARMY_COMMANDER] Commander quickly."
 ],
 "UNIT_BALLISTA": [
  "The Ballista is the Antiquity Age's only [icon:BOMBARD_STRENGTH] Siege unit, so it is the strongest way to break large [icon:YIELD_CITIES] Cities defended by several [icon:CITY_FORTIFIED] Fortified Districts.",
  "It has weak defensive [icon:NAR_REW_COMBAT] Combat Strength and low [icon:action_move] Movement, so it must move with Infantry escorts or only after the area is cleared. Mastering The Wheel first raises its Movement enough to keep pace with an army."
 ],
 "UNIT_HOPLITE": [
  "A Hoplite should always be fielded next to a second Hoplite so both gain the adjacency [icon:NAR_REW_COMBAT] Combat Strength bonus; the bonus does not stack past one neighbour, so build them in pairs when packing a [icon:UNIT_ARMY_COMMANDER] Commander.",
  "The unit scales with allied [icon:CITYSTATE] City-States after Mastering Agoge II and taking the Strategoi Tradition, so a steady [icon:YIELD_DIPLOMACY] Influence income to win over Independent Powers directly increases Hoplite power."
 ],
 "UNIT_MEDJAY": [
  "The Medjay is a defensive unit built around urban fighting: +6 [icon:NAR_REW_COMBAT] Combat Strength when defending inside a Settlement lets it stall an attack on the frontier.",
  "It also works offensively as bait — lure an enemy army across the border, then swarm it near one of your Settlements. The attack bonus is only +3, but three or more Medjay focusing one target still remove it in a turn."
 ],
 "UNIT_FOEDERATI": [
  "The Foederati is a Spearman that costs as little as a Warrior to produce or purchase (with a rising cost per copy) and hits slightly harder — 25 versus 20 [icon:NAR_REW_COMBAT] Combat Strength. It is strongest kept in the thick of a fight, where its in-combat bonus applies.",
  "As a [icon:CITYSTATE] Suzerain reward it is worth taking only when you become Suzerain of a militaristic Independent Power and have no better diplomatic options; the other Suzerain bonuses scale far better with the number of Independent Powers you hold."
 ],
 "UNIT_BURNING_ARROW": [
  "The Burning status the Burning Arrow applies covers any land tile, [icon:CITY_FORTIFIED] Fortified Districts included, making it the only non-Siege unit that can damage enemies behind Walls. With [icon:ACTION_RANGED] Ranged units already the strongest class of the age, this removes most of the need for melee support.",
  "Only Cavalry can realistically close on Burning Arrows, and even they struggle against a tight formation under an experienced Commander. Fortified Burning Arrows behind a wall of burning tiles are extremely hard to reach without heavy losses.",
  "It is reasonable to train nothing else in the Antiquity Age — the Burning Arrow defends against any land or naval attacker and leads sieges equally well."
 ],
 "UNIT_JAGUAR_SLAYER": [
  "Playing as the Maya, two or three Jaguar Slayers early give both reconnaissance and melee power for an early rush. They also gain +1 [icon:action_move] Movement and +1 [icon:action_showall] Sight from the Survey Social Policy unlocked by Discipline.",
  "The Jaguar Trap action is situational but valuable when Jaguar Slayers are being overwhelmed and need to disengage: it damages the pursuing unit and buys a turn for a Hul'che to keep firing."
 ],
 "UNIT_GALLEY": [
  "The Galley is the earliest [icon:UNIT_FLEET_COMMANDER] Naval unit, essential for forming a first fleet and for naval exploration. Its Coastal Raid action is the standard way to pick up extra Discoveries from Coastal Edifices and adjacent land finds.",
  "It also screens your own units crossing water and hunts hostile ships, which matters most on maps with heavy coastline or [icon:trade_route] Navigable Rivers."
 ],
 "UNIT_GALLEON": [
  "The Galleon's Auto-Explore action makes it the best Exploration-Age ship for finding ruins and charting the map. A narrative choice lets you buy one before it is unlocked — costly, but a quick fix for a weak navy."
 ],
 "UNIT_MERCHANT": [
  "In the Antiquity Age a Merchant needs Code of Laws researched and a foreign Settlement or [icon:CITYSTATE] City-State in range; in later ages it is available from the start.",
  "A [icon:trade_route] Trade Route across open ocean requires Cartography and a Fishing Quay (or similar) in a Settlement on each landmass. Before Shipbuilding is researched, open-ocean tiles damage the Merchant, so route carefully.",
  "Establish a route by moving the Merchant into an eligible foreign Settlement and using Make Trade Route, or by picking a route from the Trade Lens."
 ],
 "UNIT_MIGRANT": [
  "A Migrant can only ever become [icon:YIELD_POPULATION] [B]Rural[/B] Population, never a [icon:SPECIALIST] Specialist. It is not built; it arrives from specific sources — the Statue of Liberty (4 at once), the Miasma crisis policy during the Antiquity Plague, Harriet Tubman's spy ability, the Flood of Opportunity narrative event, or automatically when a [icon:YIELD_CITIES] City's Population outgrows both its Specialist slots and its workable tiles.",
  "Move a Migrant to any friendly Settlement and resettle it there to add that Population immediately, which is a fast way to grow a young town or backfill a city that has lost citizens."
 ],
 "UNIT_TREASURE_FLEET": [
  "A Settlement in Distant Lands that works at least one Treasure Resource — Cocoa, Furs, Gold, Horses, Rubies, Silver, Spices, Sugar or Tea — spawns a Treasure Convoy every ten turns (Standard speed) carrying one Cargo per Treasure Resource worked. Quantity is what counts, not variety: four sources of Cocoa beat one each of Spices, Tea and Sugar.",
  "Move a Convoy to a Homeland Settlement and use Unload Cargo for 20 GDP and 100 [icon:YIELD_GOLD] Gold per Cargo (Standard speed), progressing the Economic Victory. Tea and Spices double to 2 Cargo after Mastering Imperialism; Furs and Cocoa double after Mastering Social Class; Havana Harbor produces 3-Cargo Convoys. The Inca (Cities with 3 worked Mountains, after Qhapaq Ñan) and Songhai (Navigable Rivers, after Kanta) generate Convoys in the Homelands instead.",
  "The Treasure Convoy is the only unit that can be captured in normal play, and at 30 Defense Strength it dies easily — if defeated it switches sides. Escort it with a warship when at war, or pack it into a [icon:UNIT_FLEET_COMMANDER] Fleet Commander with the Flotilla Promotion, which makes it untargetable and faster. The AI guards its Convoys poorly, so intercepting theirs along the coast is an efficient way to score points."
 ],
 "UNIT_JOHN_MAYNARD_KEYNES": [
  "The Great Banker can deliver enough GDP to swing an Economic Victory, but only by visiting several foreign [icon:NOTIFICATION_SELECT_CAPITAL] Capitals and establishing a World Bank Office in each for a rising [icon:YIELD_GOLD] Gold cost. Each activation consumes all Movement, and because it usually teleports between Capitals it averages about two turns per Office.",
  "What matters is establishing an Office every two turns without stalling, which takes preparation in three areas. First, exploration: the Great Banker has 8 [icon:action_move] Movement but only 1 [icon:action_showall] Sight and cannot teleport to a Capital it has never seen, so scout the whole map early with faster units before rivals turn Hostile and close their borders.",
  "Second, Gold: costs climb with each Office, so stockpile Gold in advance and keep a reserve for the volatile late game, when a sudden war can force emergency military spending. Third, movement: with 8 Movement the Banker can occasionally walk between two nearby Capitals in one turn, saving a teleport — check adjacent Capital positions before spending one.",
  "Save known Capitals that sit near suspected undiscovered ones for last, since each foreign Capital can only be teleported to once; your own Capital stays available every turn for repositioning."
 ],
 "UNIT_PROSPECTOR": [
  "The Prospector claims a [icon:RADIAL_RESOURCES] Resource tile just outside a city's workable range, but its [icon:YIELD_PRODUCTION] Production cost climbs steeply with each one trained, so use it sparingly and only when a specific Resource is worth it.",
  "For the American civilization it helps toward the Railroad Tycoon Economic Victory. Prioritise Factory Resources: slotted, they add GDP toward that victory on top of their empire-wide effect."
 ],
 "UNIT_KATYUSHA": [
  "The Katyusha Rocket Launcher has lower [icon:NAR_REW_COMBAT] Combat and [icon:BOMBARD_STRENGTH] Bombard Strength than other Modern-Age Siege units, but its longer Range lets it shell [icon:CITY_FORTIFIED] Districts from outside the reply range of enemy Ranged units, and its higher [icon:action_move] Movement lets it reposition and reinforce quickly.",
  "It is fragile against Air units, so keep Fighters over it."
 ],
 "UNIT_SEPOY": [
  "Use the Mansabdari and Mayūrāsana bonuses to purchase Sepoys as cheaply as possible. Their siege attack clears [icon:CITY_FORTIFIED] city defences and also punishes enemy Naval units that stray into range, which is their main value.",
  "The drawback is a Range of 1; spending the ranged attack on non-fortified targets is usually a waste, since it only carries 5 strength there."
 ],
 "UNIT_ZAMINDAR": [
  "The Zamindar gives every newly founded Settlement an extra [icon:YIELD_POPULATION] Population — and, less obviously, applies that bonus to Settlements founded earlier as well, so it jump-starts every current and future Mughal city."
 ],
 "UNIT_ARMY_COMMANDER": [
  "The Army Commander is the backbone of every land war. Units packed into it move as one stack at the Commander's speed, are untargetable while packed, and gain the Commander's [icon:COMMANDER_RADIUS] Command Radius aura; a lone unit outside a Commander is slow, exposed, and cut off from Promotions.",
  "Commanders earn experience whenever a unit in their radius fights, and spend it on Promotions from four trees (Leadership, Assault, Logistics, and an Age-specific tree). Leadership's radius and movement Promotions come first — a wider aura and more Movement multiply everything else the Commander does.",
  "Its Commands turn a group into a coordinated force: Coordinated Attack sends all packed melee units in at once with +2 [icon:NAR_REW_COMBAT] Combat Strength, Focus Fire does the same for Ranged and Siege with +2 [icon:ACTION_RANGED] Ranged and Bombard, and Defensive Perimeters fortifies the whole radius in one action. Keep one Commander per front, keep it a tile or two back from the line, and never let it be caught unpacked in the open."
 ],
 "UNIT_TRUNG_NHI": [
  "Trung Nhi is Trung Trac's unique [icon:UNIT_ARMY_COMMANDER] Army Commander, and she is not built — she appears for free the moment the first Military Unit of the Age is produced. That saves the Production a first Commander would cost and puts Trung Trac a Commander ahead at the start of every Age.",
  "She is Ageless: instead of being left behind at an Age transition she carries over with every [icon:NAR_REW_PROMOTION] Promotion she has earned, so experience invested in her early keeps paying out for the rest of the game. Her respawn timer after a defeat is shorter than a normal Commander's, so she can lead from closer to the front than most.",
  "Her unique tree replaces Leadership and her Sisters Unite Commendation replaces Duty. She starts with the Heroic Assault command, whose damage rises as you spend [icon:NAR_REW_PROMOTION] Promotions in that tree — commit to it and Heroic Assault becomes a repeatable opening strike on an enemy stack or [icon:CITY_FORTIFIED] District rather than a situational finisher. She still has the standard land Commands — Coordinated Attack, Focus Fire, Defensive Perimeters — for running a packed army."
 ],
 "UNIT_FLEET_COMMANDER": [
  "The Fleet Commander is the naval Army Commander: it packs ships, moves them as one fast stack, shelters them from attack while packed, and projects a [icon:COMMANDER_RADIUS] Command Radius aura at sea.",
  "Barrage Land Target lets a packed fleet shell coastal [icon:CITY_FORTIFIED] Districts from range with a strength bonus, making the Fleet Commander the core of any naval invasion. The Flotilla Promotion also lets it carry a [icon:UNIT_TREASURE_FLEET] Treasure Convoy untargetably — the safest way to run treasure home during a war."
 ],
 "UNIT_CARRIER_COMMANDER": [
  "The Aircraft Carrier is the air Commander. Packed Air Units ride it safely and rebase from it, and its Commands — Carpet Bomb, Fighter Sweep, Ground Attack — fire every packed aircraft of a type at once.",
  "Aerial Reconnaissance reveals a wide area including Stealth Units for a turn, and it is one of the few units that can deliver a WMD Strike. Keep it well behind the front and screened by Fighters."
 ],
 "UNIT_SPEARMAN": [
  "The Spearman is the Antiquity anti-cavalry unit: its bonus against mounted units makes a small screen of Spearmen the cheap answer to enemy Chariots and Horsemen that would otherwise ride down your [icon:ACTION_RANGED] Ranged line.",
  "Outside that matchup it is unremarkable — low attack, no special utility — so build only what you need to cover the flanks and let Warriors or Swordsmen carry the assault."
 ],
 "UNIT_SWORDSMAN": [
  "The Swordsman is Antiquity's dedicated attacker: higher [icon:NAR_REW_COMBAT] Combat Strength than the Warrior and a bonus when attacking, which makes it the unit that actually takes [icon:CITY_FORTIFIED] Districts once a Ballista has knocked the walls down.",
  "It needs Iron, so secure an Iron source early if you plan an Antiquity war. Pair Swordsmen with a Ballista and a couple of Spearmen and they will break most early cities."
 ],
 "UNIT_ARCHER": [
  "The Archer is the first true [icon:ACTION_RANGED] Ranged unit and, with Ranged units dominant in the Antiquity Age, the unit you build most. It attacks without taking counter-damage, so a line of two or three Archers behind a Warrior screen wins almost every early fight.",
  "Its weakness is being reached: keep it out of enemy melee range, back it with a front line, and use terrain so cavalry cannot flank it."
 ],
 "UNIT_SLINGER": [
  "The Slinger is a cheap, tech-free [icon:ACTION_RANGED] Ranged unit available from turn one — useful for chasing off hostile Independent Powers and for early aggression before Archery. Upgrade Slingers into Archers rather than disbanding them once Bronze Working lands."
 ],
 "UNIT_HORSEMAN": [
  "The Horseman trades the Chariot's cost for raw speed and the ability to retreat after attacking. Its job is to run down wounded units, pick off [icon:ACTION_RANGED] Ranged units that stray from their line, and race between fronts. It folds quickly to Spearmen, so strike and pull back rather than trading blows."
 ],
 "UNIT_QUADRIREME": [
  "The Quadrireme is the Antiquity Age's upgraded warship — stronger than the Galley for contesting sea control and escorting coastal landings. Like the Galley it can Coastal Raid for Discoveries and pillage shoreline improvements."
 ],
 "UNIT_MAN_AT_ARMS": [
  "The Man-At-Arms is the Exploration-Age melee anchor: solid [icon:NAR_REW_COMBAT] Combat Strength and a defensive bonus that lets it hold a line while Crossbowmen and Trebuchets do the damage behind it. It is the standard body of an Exploration army rather than its edge."
 ],
 "UNIT_CROSSBOWMAN": [
  "The Crossbowman is the Exploration [icon:ACTION_RANGED] Ranged unit, hitting harder than the Archer and especially effective against armoured melee. Keep the same discipline as with Archers — screen it, keep it back, and let it fire without reply."
 ],
 "UNIT_KNIGHT": [
  "The Knight is the Exploration heavy cavalry: high [icon:NAR_REW_COMBAT] Combat Strength and the mobility to flank a line, punish exposed [icon:ACTION_RANGED] Ranged units, and exploit a breach. It is strong enough to trade directly, but still best used to hit soft targets and reposition rather than grind against Pikemen."
 ],
 "UNIT_PIKEMAN": [
  "The Pikeman is the Exploration anti-cavalry wall — a hard counter to Knights and other mounted units. A few Pikemen on the flanks let your Crossbowmen and Trebuchets operate without fear of a cavalry charge."
 ],
 "UNIT_TREBUCHET": [
  "The Trebuchet is the Exploration siege engine: high [icon:BOMBARD_STRENGTH] Bombard Strength for tearing down [icon:CITY_FORTIFIED] Fortified Districts, but slow and fragile. Move it with a full escort and only bring it up once the approach is clear."
 ],
 "UNIT_LINE_INFANTRY": [
  "Line Infantry is the Modern Age's standard soldier — ranged fire folded into a melee body, so it forms both the wall and part of the damage of an army. Mass it, support it with artillery, and keep it in a Commander's radius for the Combat Strength aura."
 ],
 "UNIT_RIFLEMAN": [
  "Rifle Infantry upgrades Line Infantry with more [icon:NAR_REW_COMBAT] Combat Strength and better defence — the core body of a late-Modern army. It still wants artillery behind it and Fighters overhead once air power arrives."
 ],
 "UNIT_TANK": [
  "The Tank is the Modern breakthrough unit: high [icon:NAR_REW_COMBAT] Combat Strength, extra [icon:action_move] Movement, and the ability to move after attacking. Concentrate Tanks to punch through a line, then exploit into the enemy rear before they can re-form. They are vulnerable to AT Guns and air power, so lead with them but do not send them alone."
 ],
 "UNIT_FIELD_CANNON": [
  "The Field Cannon is early Modern artillery — strong [icon:BOMBARD_STRENGTH] Bombard Strength against [icon:CITY_FORTIFIED] Districts at range. Same rules as every siege unit: escort it, keep it out of melee, and give it [icon:action_showall] Sight from a Scout or a front-line unit so it can fire at maximum range."
 ],
 "UNIT_FRIGATE": [
  "The Ship of the Line is the Exploration Age's main warship, built to fight other fleets and bombard coastal Districts. Group them under a [icon:UNIT_FLEET_COMMANDER] Fleet Commander so Barrage Land Target can soften a port before your troops land."
 ],
 "UNIT_IRONCLAD": [
  "The Ironclad opens the Modern naval age — a tough, steam-powered warship that outclasses Age-of-Sail ships and dominates coastal waters until Cruisers and Battleships arrive. Use it to seize sea control early in the Age and to shell shoreline Districts."
 ],
 "UNIT_BATTLESHIP": [
  "The Battleship is the Modern capital ship: the highest naval [icon:NAR_REW_COMBAT] Combat and [icon:BOMBARD_STRENGTH] Bombard Strength in the game, able to bombard land Districts from far offshore. Screen it with Destroyers against Submarines and keep Fighters overhead, then use it to break any coastal defence."
 ],
 "UNIT_SUBMARINE": [
  "The Submarine is a stealth raider — invisible until it strikes, deadly to capital ships, and ideal for cutting enemy [icon:trade_route] sea trade and picking off lone [icon:UNIT_TREASURE_FLEET] Treasure Convoys. It is weak once spotted, so hit and slip away rather than joining a fleet action; enemy Destroyers exist to hunt it."
 ],
 "UNIT_DESTROYER": [
  "The Destroyer is fast, cheap, and the primary anti-Submarine ship — its job is to screen the battle line and reveal stealth raiders before they reach your capital ships. Keep a couple with every fleet."
 ],
 "UNIT_BIPLANE": [
  "The Biplane is the first Fighter: it wins air superiority, intercepts enemy Air Units, and clears the sky so your Bombers can work. It is poor against ground and naval targets — keep it for the anti-air role and rebase it from an Aerodrome or Carrier near the front."
 ],
 "UNIT_BOMBER": [
  "The Bomber is the Modern siege weapon from the air — heavy damage to [icon:CITY_FORTIFIED] Fortified Districts and ground units, delivered from beyond reply range. It is defenceless against Fighters, so only send Bombers where you hold air superiority, and pack them into a Carrier or Squadron for the Carpet Bomb command."
 ],
 "UNIT_FIGHTER": [
  "The Fighter is the mainline air-superiority unit: it escorts Bombers, intercepts incoming strikes, and denies the enemy the sky over a front. Keep Fighters based within range of wherever your Bombers and ground forces operate."
 ],
 "UNIT_EXPLORER": [
  "The Explorer's value is the Excavate Artifact action — digging Artifacts out of ruins for [icon:NAR_REW_GREATWORK] Great Works and Culture, which feeds a Cultural path in the Exploration Age. Research Artifacts first reveals ruin locations across the continents. Escort Explorers in contested Distant Lands; they cannot defend themselves."
 ],
 "UNIT_MISSIONARY": [
  "The Missionary spends Religious Spread charges to convert Settlements to your Religion, the engine of a Religious game. Convert your own borders first to lock them, then push charges into rival Settlements — the first conversion of an enemy Settlement also pays [icon:YIELD_GOLD] Gold."
 ],
 "UNIT_SETTLER": [
  "Settlers found Towns and are the single most important investment of the early game — every Town is more yields, more Resources, and progress toward the Settlement Limit. Buy or build them continuously in the Antiquity Age and place Towns on fresh Resources, defensible terrain, and river or coast tiles. Escort a Settler if hostile units or Independent Powers are near; losing one is a large setback."
 ],
 "UNIT_FOUNDER": [
  "The Founder is the free Settler every civilization starts with, and it founds your Capital rather than a Town. Move a tile or two off the spawn if it buys a markedly better site — fresh Resources, a river, a defensible hill — but do not waste many turns; an early Capital compounds."
 ]
};

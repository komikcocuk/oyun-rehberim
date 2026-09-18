(function () {
  var RAW = window.CIVPEDIA_DATA || {};
  var SECTIONS = RAW.sections || {};
  var SECTION_ORDER = (RAW.sectionOrder || Object.keys(SECTIONS)).filter(function (id) {
    return !!SECTIONS[id];
  });
  var GLOBAL_TIPS = RAW.tips || {};
  // a section home's own art: the portrait in the brass ring at the top of
  // the page (the Getting Started page's ring), and the painting that closes
  // it, rising out of the dark as the page is scrolled to it (bindPaintReveal)
  var HOME_ART = {
    LEADERS: { portrait: "images/ui/leaders-cring.jpg", scene: "images/paintings/scene/leaders-home-group.jpg" },
    // the Test of Time clock, cut along its own hexagonal frame, over the
    // update's key art (the Ages of a civilization, pyramids to rocket)
    AGES: { hex: "images/ui/ages-hex.png?v=2", scene: "images/paintings/scene/ages-home-keyart.jpg" },
    // the civ emblems tiled on the game's dark backdrop, the fourth row and
    // column running on under the frame (tools/make_civs_cring.py)
    // Ryan Andrade's pre-production Rome (the commander over his city) as the
    // emblem, Sang Han's Challenges & Opportunities advisors painting under it
    GOVERNMENT: { portrait: "images/ui/government-cring.jpg", scene: "images/paintings/scene/government-home-advisors.jpg" },
    // the tree homes: an emblem over the tree's title button (the game's
    // Exploration science painting; Anita Tabaczkiewicz's Abbasid scholars),
    // Sang Han's Science Victory and Can Wen's Culture Advisor under the guide
    TECHNOLOGIES: { portrait: "images/ui/technologies-cring.jpg", scene: "images/paintings/scene/technologies-home-science-victory.jpg" },
    CULTURE: { portrait: "images/ui/culture-cring.jpg", scene: "images/paintings/scene/culture-home-advisor-wide.jpg", aspect: "1600 / 910" },
    // Sang Han's tropical biome concept (a river through hex terrain) as the
    // emblem, Ryan Andrade's first-time-player river city under the guide
    MAP: { portrait: "images/ui/map-cring.jpg?v=2", scene: "images/paintings/scene/map-home-ftue.jpg" },
    CIVILIZATIONS: { portrait: "images/ui/civs-cring.jpg?v=5", scene: "images/paintings/scene/egypt.jpg" },
    // Elizer Morcillos' trailer keyframes: the warrior before the burning city
    // as the emblem, the merchant held at sword-point under the guide
    UNITS: { portrait: "images/ui/units-cring.jpg?v=2", scene: "images/paintings/scene/units-home-keyart.jpg" },
    // Elizer Morcillos' trailer keyframes: the masked dancer among the candles
    // as the emblem, the robed figure over the dunes at sunset under the guide
    // (the robed figure stands at the far left: the stage is cut from there)
    RELIGION: { portrait: "images/ui/religion-cring.jpg", scene: "images/paintings/scene/religion-home-keyart.jpg", focus: 0.17 },
    // Can Wen's Abbasid madinat hex concept as the emblem, Rob Izquierdo's
    // Entrepôt render under the guide
    IMPROVEMENTS: { portrait: "images/ui/improvements-cring.jpg", scene: "images/paintings/scene/improvements-home-entrepot.jpg" },
    // the pyramids (M1 Culture) close the Wonders home
    // Erik Bakker's Grand Bazaar hex (whole, as the Improvements emblem sits) as the emblem
    WONDERS: { portrait: "images/ui/wonders-cring.jpg?v=2", scene: "images/paintings/scene/civilizations-home-culture.jpg" },
    // Ryan Andrade's pre-production city concept as the emblem, under it the
    // Settler's Edition skyline in gold
    BUILDINGS: { portrait: "images/ui/buildings-cring.jpg?v=5", scene: "images/paintings/scene/buildings-home.jpg" }
  };
  // a page's own closing painting where the game has none: the Getting
  // Started page ends on the Test of Time key art retitled Civilopedia /
  // Welcome, captioned Welcome, on a stage of the picture's own proportion
  var PAGE_ART = {
    INTRO: { scene: "images/paintings/scene/welcome-civilopedia-only.jpg", name: "Welcome", aspect: "1312 / 996" }
  };
  var MEDIA = window.CIVPEDIA_MEDIA || {};
  // the closing paintings of the pages the game gives none (scene-art.js)
  var SCENE_ART = window.CIVPEDIA_SCENE_ART || {};
  var ICON_META = window.CIVPEDIA_ICON_META || {};
  var LEADER_CATALOG = window.CIVPEDIA_LEADER_CATALOG || [];
  // Exact ability text + Historical Context pulled straight from the Civ VII game files.
  var LEADER_LORE = window.CIVPEDIA_LEADER_LORE || {};
  // Starting biases / Mementos / Civ syncretism scraped from the fandom leader pages.
  var LEADER_EXTRAS = window.CIVPEDIA_LEADER_EXTRAS || {};
  // Victories section (Cultural / Economic / Military / Scientific / Score) from game text.
  var VICTORIES_DATA = window.CIVPEDIA_VICTORIES || null;
  // Per-Age civilization ability text from game files.
  var CIV_LORE = window.CIVPEDIA_CIV_LORE || null;
  // Civ logo + unique units / buildings / improvements from game data.
  var CIV_EXTRAS = window.CIVPEDIA_CIV_EXTRAS || {};
  var CIVIC_HISTORY = window.CIVPEDIA_CIVIC_HISTORY || {};   // civic-history.js
  var GOV_FAQ = window.CIVPEDIA_GOV_FAQ || [];               // gov-faq.js
  // Civ unique civic tree + traditions from game data.
  var CIV_CIVICS = window.CIVPEDIA_CIV_CIVICS || {};
  // Hand-written "Civ Mechanics and Strategy" notes (community-sourced, not game files).
  var CIV_STRATEGY = window.CIVPEDIA_CIV_STRATEGY || {};
  var CIV_TIPS = window.CIVPEDIA_CIV_TIPS || {};
  // Wonder stat block (unlockedBy / cost / placement / effects) from game data.
  var WONDER_STATS = window.CIVPEDIA_WONDER_STATS || {};
  var TECH_CIVIC_ICONS = window.CIVPEDIA_TECH_CIVIC_ICONS || {};
  var IMPROVEMENT_STATS = window.CIVPEDIA_IMPROVEMENT_STATS || {};
  var BUILDING_STATS = window.CIVPEDIA_BUILDING_STATS || {};
  // Resource type + age (Bonus / City / Empire / Treasure / Factory) from game data.
  var RESOURCE_META = window.CIVPEDIA_RESOURCE_META || {};
  var NW_STATS = window.CIVPEDIA_NW_STATS || {};
  // Unit stat panel (unlockedBy / obsoletedBy / cost / traits / upgrades) from game data.
  var UNIT_STATS = window.CIVPEDIA_UNIT_STATS || {};
  var UNIT_ATTRS = window.CIVPEDIA_UNIT_ATTRS || {};
  // Unit action catalogue { "Fortify": {name, effect, icon}, ... } from fandom.
  var UNIT_ACTIONS = window.CIVPEDIA_UNIT_ACTIONS || {};
  // Hand-written unit strategy notes (fandom-adapted), keyed by unit id.
  var UNIT_STRATEGY = window.CIVPEDIA_UNIT_STRATEGY || {};
  var CIV_BONUSES = window.CIVPEDIA_UNIT_CIV_BONUSES || {};
  // Every Tradition / Social Policy / Crisis Policy in the game, name -> {slot, tip}.
  var TRADITION_TIPS = window.CIVPEDIA_TRADITION_TIPS || {};
  (function (extra) {
    Object.keys(extra).forEach(function (tag) {
      if (!GLOBAL_TIPS[tag]) GLOBAL_TIPS[tag] = extra[tag];
    });
  })(window.CIVPEDIA_EXTRA_TIPS || {});
  var leaderById = {};
  var leaderByName = {};

  var sidebarEl = document.getElementById("sidebar");
  var contentEl = document.getElementById("content");
  var searchEl = document.getElementById("search");
  var tabbarEl = document.getElementById("tabbar");
  var pageTitleEl = document.getElementById("page-title");
  var pageTitleTextEl = document.getElementById("page-title-text");
  var navPrevEl = document.getElementById("nav-prev");
  var navNextEl = document.getElementById("nav-next");
  var homeTitle = document.getElementById("home-title");
  var drawerHandle = document.getElementById("drawer-handle");
  var sidebarScrim = document.getElementById("sidebar-scrim");

  function isMobileNav() {
    return window.matchMedia("(max-width: 820px)").matches;
  }
  // The badge's turn marks the state a tap can undo: the drawer standing
  // open on a phone, the sidebar column folded away on a desktop.
  function syncDrawerHandle() {
    if (!drawerHandle) return;
    var mobile = isMobileNav();
    var open = mobile ? document.body.classList.contains("sidebar-open")
      : !document.body.classList.contains("sidebar-hidden");
    drawerHandle.classList.toggle("is-open", mobile ? open : !open);
    drawerHandle.setAttribute("aria-expanded", open ? "true" : "false");
    drawerHandle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  function setSidebarOpen(open) {
    if (!open) document.body.classList.remove("search-drawer");
    document.body.classList.toggle("sidebar-open", open);
    syncDrawerHandle();
  }
  function setSidebarHidden(hidden) {
    document.body.classList.toggle("sidebar-hidden", hidden);
    syncDrawerHandle();
  }
  if (drawerHandle) {
    drawerHandle.addEventListener("click", function () {
      if (isMobileNav()) setSidebarOpen(!document.body.classList.contains("sidebar-open"));
      else setSidebarHidden(!document.body.classList.contains("sidebar-hidden"));
    });
    syncDrawerHandle();                // the desktop starts with the column shown
  }

  // ---- the opening (index.html #splash): the title card rises out of the
  // dark the way a page's painting does (paintRevealLayout/Draw: the smoke,
  // the warm rim of light, the embers), on a clock instead of the scroll;
  // then it holds a moment and the app is under it. A tap or a key ends it
  // early; with reduced motion it simply stands, then goes.
  // the page's closing painting (bindPaintReveal); declared before anything
  // renders, so the first page drawn keeps its animation
  var paintReveal = null;
  var REDUCED_MOTION = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  (function () {
    var splash = document.getElementById("splash");
    if (!splash) return;
    var stage = splash.querySelector(".splash-stage");
    var canvas = splash.querySelector("canvas");
    var ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    var done = false, raf = 0, holdTimer = 0, ending = false;
    // a page opened with ?splashloop plays the opening over and over (for
    // looking at it); a tap starts it again instead of ending it
    var loop = /[?&]splashloop/.test(location.search);
    function restart() {
      clearTimeout(holdTimer);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      S.q = 0; S.embers = []; S.last = 0; t0 = 0; ending = false;
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#07090d";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      holdTimer = setTimeout(function () { raf = requestAnimationFrame(frame); }, 700);
    }
    function end() {
      if (done) return;
      if (loop && S && S.img) { restart(); return; }
      done = true;
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(holdTimer);
      splash.classList.add("is-out");
      var gone = function () { if (splash.parentNode) splash.parentNode.removeChild(splash); };
      splash.addEventListener("animationend", function (ev) { if (ev.target === splash) gone(); });
      setTimeout(gone, 900);
    }
    splash.addEventListener("click", end);
    document.addEventListener("keydown", function onKey(ev) {
      if (ev.key === "Enter" || ev.key === "Escape" || ev.key === " ") {
        end();
        document.removeEventListener("keydown", onKey);
      }
    });
    var still = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (!ctx) { setTimeout(end, 1200); return; }
    var S = { fig: splash, stage: stage, canvas: canvas, ctx: ctx, q: still ? 1 : 0, img: null, visible: true, raf: 0, last: 0, embers: [], dead: false, w: 0, h: 0, solid: true };
    // (the ending is trimmed: it holds briefly once the light is nearly all
    // up, instead of waiting out the lag's last creep and the last embers)
    var RISE = 3600, HOLD = still ? 1000 : 600, t0 = 0;
    function frame(now) {
      raf = 0;
      if (done) return;
      if (!paintRevealLayout(S)) { raf = requestAnimationFrame(frame); return; }
      if (!t0) t0 = now;
      var dt = S.last ? Math.min(0.1, (now - S.last) / 1000) : 1 / 60;
      S.last = now;
      // the light comes up over RISE ms, with the same lag the scroll has
      var target = still ? 1 : Math.min(1, Math.max(0, (now - t0 - 250) / RISE));
      S.q += (target - S.q) * (1 - Math.exp(-dt * 2.4));
      if (Math.abs(target - S.q) < 0.002) S.q = target;
      paintRevealDraw(S, now / 1000, dt);
      if (S.q >= 0.96 && !ending) { ending = true; holdTimer = setTimeout(end, HOLD); }
      raf = requestAnimationFrame(frame);
    }
    var img = new Image();
    img.onload = function () { if (done) return; S.img = img; raf = requestAnimationFrame(frame); };
    img.onerror = end;
    img.src = "images/ui/splash.jpg";
    if (!loop) setTimeout(end, 9000);      // whatever happens, the app comes
  })();
  if (sidebarScrim) {
    sidebarScrim.addEventListener("click", function () { setSidebarOpen(false); });
  }
  if (homeTitle) {
    homeTitle.addEventListener("click", goHome);
    homeTitle.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); goHome(); }
    });
  }
  function closeMobileNav() {
    if (isMobileNav()) setSidebarOpen(false);
  }

  var mqlMobile = window.matchMedia("(max-width: 820px)");
  var mqlHandler = function () {
    // Re-render the active page so it switches between the desktop
    // two-column layout and the mobile single-column accordion stack.
    if (currentPageCtx) {
      renderPage(currentPageCtx.page, currentPageCtx.groupTitle, currentPageCtx.sectionId);
    }
    if (!isMobileNav()) setSidebarOpen(false);
    syncDrawerHandle();
  };
  if (mqlMobile.addEventListener) mqlMobile.addEventListener("change", mqlHandler);
  else if (mqlMobile.addListener) mqlMobile.addListener(mqlHandler);

  var currentSectionId = SECTION_ORDER[0] || "CONCEPTS";
  // Units sidebar: which age groups are expanded. Reset (all collapsed) every
  // time the UNITS section is entered afresh; toggles are remembered while the
  // user stays within UNITS. `null` = needs a fresh reset on next render.
  var unitsAgeOpen = null;
  var sidebarLastSection = null;
  // Units index: scroll position + which "Unique Variants" expanders were open,
  // captured the moment the user clicks away into a unit page so that using the
  // toolbar's back arrow restores the exact same orientation instead of a fresh
  // (scrolled-to-top, all-collapsed) render. Keyed by the stable data-exp-key
  // each expander carries (see unitMatrixTable / unitTreeHtml).
  var unitsIndexScroll = 0;
  var unitsIndexExpanded = {};
  var unitsIndexAgesOpen = {};   // Units home: which Age banners are open
  var unitsIndexCatsOpen = {};   // ... and which category strips inside them
  // A commander (Army/Fleet Commander, Trung Nhi, ...) is a SINGLE shared page
  // repeated across every Age's Command list, but its "Unique Variants" only
  // belong to specific Ages (e.g. Fleet Commander's Ottru is Antiquity,
  // Buccaneer is Exploration -- neither is Modern). `pendingUnitAgeCtx` is set
  // by whichever click handler knows which Age section the click came from,
  // right before it calls navigateToPage(); navigateToPage consumes it into
  // `unitPageAgeCtx` (and clears it), so any OTHER navigation path (search,
  // an Upgrade-To link, ...) that doesn't set it first naturally gets `null`
  // (= show every variant, today's behaviour). renderUnitVariants() reads
  // `unitPageAgeCtx` to filter. Preserved across back/forward via navHist.
  var pendingUnitAgeCtx = null;
  var unitPageAgeCtx = null;
  var activePageId = null;
  var trail = [];
  var TRAIL_MAX = 10;
  var currentPageCtx = null;

  // page back / forward history (see recordNav / navRelative below)
  var navHist = [];
  var navPos = -1;
  var NAV_HIST_MAX = 50;
  var navReplaying = false;

  var tabButtons = {};
  var tabbarIndicatorEl = null;
  var tabbarDragMoved = false;
  var flatPages = [];

  var TAB_ICONS = {
    CONCEPTS: "box",
    LEADERS: "cup",
    AGES: "hourglass",
    CIVILIZATIONS: "flag",
    GOVERNMENT: "bank",
    CULTURE: "hill",
    TECHNOLOGIES: "atom",
    MAP: "mountain",
    BUILDINGS: "building",
    IMPROVEMENTS: "tree",
    WONDERS: "gem",
    RELIGION: "halo",
    UNITS: "person"
  };

  // A section whose subject only exists in some Ages. The in-game Civilopedia
  // builds each section from a live DB query and drops the tab entirely once
  // that query returns nothing (screen-civilopedia.js only adds a tab when
  // pages.length > 0) -- Religion's pages come from the Beliefs table, which
  // only age-antiquity (18 Pantheons) and age-exploration (42 Beliefs) fill,
  // so the section is simply absent in a Modern-Age game. This reference keeps
  // every Age's content in one place, so the section states its Ages instead.
  var SECTION_AGE_TAGS = {
    CIVILIZATIONS: {
      note: "Every civilization brings one [B]Civ Ability[/B], its own unique units and infrastructure, an associated [icon:WONDER] Wonder, and a civics tree of its own whose [icon:TRADITION] [TIP:LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP]Traditions[/TIP] outlive the [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP].",
      // Sourced from the game's own text (the Tradition / Ageless / Government
      // concept tooltips and pages, the civics trees' unlock rows and their
      // "+1 Tradition Slot" grants) and the wiki's Social Policy and
      // Civilizations pages.
      chapters: [
        {
          title: "HOW TO USE CIV ABILITY",
          body: [
            "A [B]Civ Ability[/B] is the passive bonus written at the top of every civilization page. It is on from the first turn you play that civilization and needs nothing to unlock -- no research, no building, no button. It quietly changes what your Settlements, Units or yields do, so the whole game is about arranging your play so its trigger fires as often as possible.",
            "Read the ability for its [B]trigger[/B] and its [B]scope[/B]. \"+3 [icon:YIELD_FOOD] Food on Coastal tiles\" wants coastal Settlements; \"per [icon:NAR_REW_TRADITION_SLOT] Tradition slotted\" wants a full Government; \"every time you discover a Natural Wonder\" wants early Scouts. Most abilities also name the civilization's own pieces -- its unique quarter, its buildings, its wonder -- and pay out more when they are built. The pieces are listed right under the ability on each page, with links to their own pages.",
            "The ability belongs to the civilization, not the leader. The [B]Leader Ability[/B] (see the Leaders section) stacks on top of it, and the two are chosen separately, so a leader can be paired with any civilization whose unlock conditions are met. When you evolve into a new civilization at an [TIP:LOC_PEDIA_CONCEPTS_AGE_TOOLTIP]Age[/TIP] transition, the old Civ Ability ends and the new one begins -- only your [icon:TRADITION] Traditions carry over.",
            "Some pages show the ability under [B]Antiquity Age[/B], [B]Exploration Age[/B] and [B]Modern Age[/B] headings. That is the game's Test of Time text: if you keep playing the same civilization into a later Age, the ability takes that Age's form (a stronger, reworded version of the same idea). The version in force is always the one for the Age you are in."
          ]
        },
        {
          title: "HOW TO UNLOCK CIV TRADITIONS AND USE",
          body: [
            "The game defines them in one line: [B]Traditions are powerful [TIP:LOC_PEDIA_CONCEPTS_AGELESS_TOOLTIP]Ageless[/TIP] effects unique to your Civilization that can be added to your [TIP:LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP]Government[/TIP] by placing them into an available Tradition Slot.[/B] They are the civilization's own [icon:SOCIAL_POLICY] [TIP:LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP]Social Policies[/TIP], and unlike the standard ones they never expire.",
            "[B]Where they come from.[/B] Open the Culture section: next to each Age's civics tree, the unique pip lists the civilizations with a tree of their own, and every civilization page has its tree at the bottom. Each civic on that tree grants one or more [icon:TRADITION] Traditions (the scroll badge on the bar) -- Persia's [B]Spada[/B] grants [B]Kara I[/B], Egypt's [B]Arrival of Hapi[/B] grants [B]Akhet I[/B] -- and most trees also carry [B]+1 Tradition Slot[/B] grants (the dashed-square badge). Research the tree with [icon:YIELD_CULTURE] Culture like any civic. In the Antiquity Age it is revealed once you complete [B]Chiefdom[/B], the first civic on the main tree; in the later Ages it is open from the start.",
            "[B]Government Traditions.[/B] Three civics on each Age's main tree carry Traditions that only your current [icon:GOVERNMENT] Government unlocks (Classical Republic opens Yaxche at Citizenship and Poiesis at Philosophy; Theocracy opens Dargah and Vinaya at Theology). Every Government page lists its two under Traditions, each marked \"Unlocked by\" the civic that holds it.",
            "[B]Slotting them.[/B] Traditions are placed on the Government screen, in [icon:NAR_REW_TRADITION_SLOT] Tradition Slots -- these are separate from the Policy Slots that hold standard Social Policies and from the Crisis slot. You can rearrange your policies whenever you complete a civic or gain a slot, so a newly unlocked Tradition can go in at once. Slots come from the civilization's own civics (+1 Tradition Slot), from a few main-tree civics and Governments, and from Attribute points and Suzerainty bonuses that add policy slots.",
            "[B]Across Ages.[/B] The Government concept page puts it plainly: [B]while Governments change on Age Transition, Traditions you've unlocked are carried over.[/B] Traditions from your Antiquity civilization stay usable in the Exploration and Modern Ages, whatever civilization you evolve into -- so choose successors whose play still fits them (a coastal Tradition is wasted on a landlocked empire). If you keep the same civilization across Ages (Test of Time), its Traditions can be replaced by upgraded versions -- Kara I, then Kara II -- and a set of generic Traditions becomes available to every civilization."
          ]
        }
      ]
    },
    RELIGION: {
      note: "[icon:AGE_ANTIQUITY] [B]Antiquity[/B] [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheons[/TIP] and [icon:AGE_EXPLORATION] [B]Exploration[/B] Age [TIP:LOC_SYN_BELIEF]Beliefs[/TIP]. Both are chosen only in those two Ages, so the game's own Civilopedia drops this section completely in a [icon:AGE_MODERN] [B]Modern[/B] Age game — there are no Beliefs left to found. The Founder bonuses of a religion you already hold do carry into the [icon:AGE_MODERN] Modern Age.",
      // Sourced from the game's own data and Civilopedia/advisor text:
      // religion.xml (BeliefClasses MaxInReligion/AdoptionOrder, Shareable),
      // progression-trees-culture-common.xml (Mysticism / Piety / Theology),
      // panel-belief-picker.js (slot opening rules), victories.xml + legacies
      // (6/9/12 Relics, the 20-Relic unlock) and greatworks.xml (Relic yields).
      chapters: [
        {
          title: "ANTIQUITY: THE PANTHEON",
          body: [
            "Research the [icon:CIVIC_MYSTICISM] [B]Mysticism[/B] civic — 125 [icon:YIELD_CULTURE] Culture on the Antiquity main tree — and it unlocks both the [icon:ALTAR] [B]Altar[/B] and the right to found a [TIP:LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP]Pantheon[/TIP]. You then choose exactly one Pantheon Belief, and it is locked for the rest of the Age.",
            "Almost every Pantheon only pays out in Settlements that have an [icon:ALTAR] [B]Altar[/B]. The belief is the multiplier; the Altar is the socket it plugs into. If you take a Pantheon, plan to put an Altar in every Settlement you care about.",
            "The game's own belief data sorts the 18 into four kinds, and this reference's sidebar uses the same split:",
            "[BLIST][LI][B]Adjacency[/B] (2) — the Altar itself gains +1 [icon:YIELD_HAPPINESS] Happiness for each adjacent Mountain, [icon:TERRAIN_NATURAL_WONDER] Natural Wonder, Coast, Lake or Navigable River.[LI][B]Warehouse[/B] (4) — a yield is added to every matching tile in the Settlement: Farms and Pastures, Camps and Woodcutters, Mines and Quarries, Fishing Boats and Reefs.[LI][B]Percentage[/B] (6) — a rate goes up: Growth, Building, Unit, Settler or [icon:WONDER] Wonder Production, or the [icon:YIELD_DIPLOMACY] Influence you spend on Endeavors and Sanctions.[LI][B]Flat Bonus[/B] (6) — a fixed amount lands somewhere specific: yields on the Altar, on [icon:CITY_UNIQUE_QUARTER] Quarters, on [icon:RADIAL_RESOURCES] Resources, or healing for Units at home.[/BLIST]",
            "14 of the 18 Pantheons are [B]exclusive[/B]: the first player to take one locks everyone else out of it. Only [B]Monument to the Gods[/B], [B]Sacred Waters[/B], [B]God of Revelry[/B] and [B]Trickster God[/B] can be shared.",
            "[B]One civilization bends this rule.[/B] Maurya's [icon:CIVIC_ACHARYA] [B]Acharya[/B] civic (150 [icon:YIELD_CULTURE] Culture on its own unique tree) also unlocks founding a Pantheon — and if you have already founded one, it grants an [B]additional[/B] Pantheon Belief instead. It is the only alternative route to a Pantheon in the game.",
            "The Pantheon does [B]not[/B] carry into the [icon:AGE_EXPLORATION] [B]Exploration[/B] Age — its effects live and die with the Altar era. [B]Treat it as an Antiquity economy boost, not as the first step of a religion.[/B]"
          ]
        },
        {
          title: "EXPLORATION: FOUNDING A RELIGION",
          body: [
            "Research the [icon:CIVIC_PIETY] [B]Piety[/B] civic (700 [icon:YIELD_CULTURE] Culture) to unlock the [icon:BUILDING_TEMPLE] [B]Temple[/B]. Finish a Temple anywhere and that Settlement becomes your [TIP:LOC_PEDIA_CONCEPTS_HOLY_CITY_TOOLTIP][B]Holy City[/B][/TIP] — the game then asks you to found your [icon:NAR_REW_RELIGION] Religion.",
            "You choose a name and icon, and [B]two[/B] beliefs: one [B]Reliquary[/B] and one [B]Founder[/B]. [B]Neither can be changed later in the Age[/B], so pick them for the strategy you actually intend to run.",
            "Founding also reveals the [icon:CIVIC_THEOLOGY] [B]Theology[/B] civic branch, which stays hidden until you own a [TIP:LOC_PEDIA_CONCEPTS_HOLY_CITY_TOOLTIP]Holy City[/TIP]. [icon:CIVIC_THEOLOGY] [B]Theology[/B] itself grants [B]+1 Belief[/B] and a free [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP]; [icon:CIVIC_REFORMATION] [B]Reformation[/B] behind it adds the Rationalism and Religious Orders Traditions and the [icon:YIELD_POPULATION] [B]Convert Population[/B] espionage action."
          ]
        },
        {
          title: "THE FIVE BELIEF SLOTS",
          body: [
            "A Religion holds at most [B]five[/B] Beliefs: [B]1 Reliquary[/B], [B]3 Founder[/B] and [B]1 Enhancer[/B]. You start with two of them at founding and earn the rest.",
            "[BLIST][LI]At founding: the Reliquary slot and the first Founder slot.[LI]The [B]Enhancer[/B] slot opens once you have earned 3 Beliefs.[LI]The second Founder slot opens at 4 earned, the third at 5.[/BLIST]",
            "Beyond the founding pair, extra Beliefs have only three sources in the whole game: the [icon:CIVIC_THEOLOGY] [B]Theology[/B] civic, and two [icon:NAR_REW_DEFAULT] [TIP:LOC_SYN_NARRATIVE_EVENT]Narrative Events[/TIP]. There is no way to buy or build one, so [B]Theology is effectively mandatory[/B] for any religious plan.",
            "[B]Beliefs are first-come, first-served.[/B] Apart from [B]Anitya[/B] (Reliquary), [B]Covenant[/B] (Founder) and [B]Divine Inspiration[/B] (Enhancer), every Belief in the game can be taken by only one civilization. Founding early is itself an advantage, independent of what you pick."
          ]
        },
        {
          title: "SPREADING: MISSIONARIES AND CONVERSION",
          body: [
            "The [icon:UNIT_MISSIONARY] [B]Missionary[/B] is a [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP]: 150 [icon:YIELD_PRODUCTION] Production, 4 [icon:ACTION_MOVE] Movement and [B]3 Spread Religion charges[/B]. It can be trained in any Settlement that has a Temple, and converting a Settlement for the first time also pays [B]25 [icon:YIELD_GOLD] Gold[/B].",
            "Every Settlement holds a separate [B]Urban[/B] and [B]Rural[/B] population, each following its own religion. Spreading on an Urban District converts the urban half; spreading on a Rural tile converts the rural half. The Settlement only counts as following your Religion when [B]both[/B] halves match.",
            "If a Settlement follows [B]no[/B] religion yet, a single spread converts both halves at once — a large and often decisive first-mover advantage.",
            "The moment a Settlement is converted, the game checks your Reliquary Belief and pays out a [icon:NAR_REW_GREATWORK] Relic if the Settlement qualifies.",
            "Three civilizations replace the Missionary: [icon:UNIT_KAHUNA] [B]Kahuna[/B] (Hawai'i, which can also heal), [icon:UNIT_PEDANDA] [B]Pedanda[/B] (Majapahit) and [icon:UNIT_HOCEEPKILENI] [B]Hoceepkileni[/B] (Shawnee, +1 [icon:ACTION_MOVE] Movement and [icon:TERRAIN_GENERIC] Rivers do not end its movement)."
          ]
        },
        {
          title: "RELICS AND THE CULTURAL LEGACY",
          body: [
            "A [icon:NAR_REW_GREATWORK] [TIP:LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP]Relic[/TIP] is a cultural Great Work. Displayed in a Great Work slot it gives [B]+2 [icon:YIELD_CULTURE] Culture[/B] and [B]+2 [icon:YIELD_HAPPINESS] Happiness[/B], and it feeds Tourism.",
            "The Exploration [TIP:LOC_SYN_LEGACY_PATH][B]Cultural Legacy Path[/B][/TIP] is named [TIP:LOC_SYN_TOSHAKHANA][B]Toshakhana[/B][/TIP], and it is literally a relic count: display [B]6 / 9 / 12[/B] Relics for its three milestones. Clearing the first one is what [B]carries a Belief into the [icon:AGE_MODERN] Modern Age[/B]; clearing the third completes the path and earns its Golden Age.",
            "Slots are the real bottleneck. Your Palace has 1 and every Temple has 1. The [TIP:LOC_SYN_RELIGIOUS_SITE][B]Religious Site[/B][/TIP] Town project adds [B]+2[/B] Relic Slots to Temples in that Town, [B]Sanctum Belief[/B] adds 1 to Temples in Cities, [B]Parampara[/B] adds 1 to [icon:CITY_BUILDING_LIST] Science Buildings, and the [B]Architecture[/B] technology's mastery adds +1 to [B]Pavilions[/B]. A Relic you cannot display is worth nothing.",
            "Besides [TIP:LOC_SYN_CONVERSION]conversions[/TIP], [icon:NAR_REW_GREATWORK] Relics come from the [icon:CIVIC_THEOLOGY] [B]Theology[/B] civic, the House of Wisdom, Majapahit's [B]Pura quarter[/B], becoming [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of a [icon:CITYSTATE] [B]Cultural City-State[/B], [B]Theocracy Golden Ages[/B], [B]ruins[/B] and [icon:NAR_REW_DEFAULT] [TIP:LOC_SYN_NARRATIVE_EVENT][B]Narrative Events[/B][/TIP]."
          ]
        },
        {
          title: "STRATEGY",
          body: [
            "[B]Your Reliquary Belief is the entire engine.[/B] It decides which Settlements pay you Relics, and Relics are the Age's cultural currency. Choose it for targets you can actually reach on the map in front of you.",
            "[B]Icons[/B] (+2 Relics per [icon:CITYSTATE] City-State converted) is the reliable default — City-States sit close, rivals largely ignore them, and each one costs a single charge for two Relics.",
            "[B]Only the first conversion pays.[/B] The religion does not have to stay. Never spend charges re-converting a Settlement you already scored, and do not grieve when a rival flips it back.",
            "[B]There is no meaningful religious defence.[/B] Missionaries cannot be blocked or attacked, and resistance bonuses do not hold a border. Do not build a plan around protecting your own faithful.",
            "[TIP:LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP]Distant Lands[/TIP] Settlements are the least contested targets on the map — [B]Evangelism[/B] and [B]Charoen[/B] reward exactly that trip, and they pair naturally with the Economic legacy fleet you are already sailing.",
            "Founder Beliefs that pay a [B]flat amount per converted Settlement[/B] — Interfaith Dialogue, Tithe, Holy Ecumene, Vipassana, Tikkun Olam — travel to any map. The biome-specific ones (Reincarnation, Shamanism, Desert Faith, Holy Waters, Sacred Herds, Sky Gods) depend on terrain you do not control.",
            "Enhancers that manufacture conversions for free compound with everything else: [B]Conversion[/B] seeds Distant-Lands Towns, [B]Dawah[/B] converts through Trade Routes, [B]Millenarianism[/B] through conquest, and [B]Zeal[/B] simply adds a charge to every Missionary.",
            "Roughly [B]four[/B] [icon:UNIT_MISSIONARY] [B]Missionaries[/B] is enough to carry the Cultural and Economic legacy paths together. Build the Temples for the slots before you build the fifth [icon:UNIT_MISSIONARY] Missionary."
          ]
        },
        {
          title: "INTO THE MODERN AGE",
          body: [
            "The system closes. No Beliefs exist in the [icon:AGE_MODERN] [TIP:LOC_PEDIA_CONCEPTS_MODERN_AGE_TOOLTIP][B]Modern Age[/B][/TIP], which is why the game's own Civilopedia shows no Religion section there at all.",
            "Five Founder Beliefs survive as [TIP:LOC_SYN_AGE_TRANSITION][B]Age Transition cards[/B][/TIP] costing 1 [icon:ATTRIBUTE_WILDCARD] [TIP:LOC_SYN_WILDCARD][B]Wildcard[/B][/TIP] slot each — [B]Tikkun Olam[/B], [B]Pushkaram[/B], [B]Feed the World[/B], [B]Chesed[/B] and [B]Salat[/B]. A card appears only if your Religion actually held that Belief and you cleared [B]Toshakhana[/B]'s first milestone — [B]6[/B] displayed [icon:NAR_REW_GREATWORK] Relics. [B]Covenant[/B] instead moves its bonus from your Holy City's Temple onto your Palace.",
            "The second Cultural milestone pays [B]+2 [icon:YIELD_CULTURE] Culture per Relic[/B] you held in the previous Age, and Relics keep scoring [B]3 points each[/B] toward the [B]Modern Cultural Victory[/B]. A relic pile built in the [icon:AGE_EXPLORATION] Exploration Age is a real head start, not a souvenir."
          ]
        },
        {
          title: "CIVILIZATIONS AND LEADERS",
          body: [
            "[B]No Belief is tied to a civilization or a leader.[/B] Every Pantheon and every Belief is offered to everyone, and no leader in the game carries a religion-specific ability. What a civilization can change is how efficiently it works the system:",
            "[BLIST][LI][icon:CIV_MAURYA] [B]Maurya[/B] — the [icon:CIVIC_ACHARYA] [B]Acharya[/B] civic is a second route to a Pantheon, or an extra Pantheon Belief if you already have one.[LI][icon:CIV_HAWAII] [B]Hawai'i[/B] — the [icon:UNIT_KAHUNA] [B]Kahuna[/B] replaces the Missionary and can also heal; the He'e Nalu tradition grants 2 Relics outright.[LI][icon:CIV_MAJAPAHIT] [B]Majapahit[/B] — the [icon:UNIT_PEDANDA] [B]Pedanda[/B] replaces the Missionary, and the [B]Pura[/B] Unique Quarter pays a Relic the moment it is completed.[LI][icon:CIV_SHAWNEE] [B]Shawnee[/B] — the [icon:UNIT_HOCEEPKILENI] [B]Hoceepkileni[/B] replaces the Missionary with +1 [icon:ACTION_MOVE] Movement, and [icon:TERRAIN_GENERIC] Rivers do not end its movement.[/BLIST]",
            "Everything else is open. Pairing a religious plan with a civilization is about Culture output, Temple production and reach across the map — not about unlocking different Beliefs."
          ]
        },
        {
          title: "THE TWELVE RELIGIONS",
          body: [
            "When you found a Religion you name it — [icon:RELIGION_BUDDHISM] [B]Buddhism[/B], [icon:RELIGION_CATHOLICISM] [B]Catholicism[/B], [icon:RELIGION_CONFUCIANISM] [B]Confucianism[/B], [icon:RELIGION_HINDUISM] [B]Hinduism[/B], [icon:RELIGION_ISLAM] [B]Islam[/B], [icon:RELIGION_JUDAISM] [B]Judaism[/B], [icon:RELIGION_ORTHODOXY] [B]Orthodoxy[/B], [icon:RELIGION_PROTESTANTISM] [B]Protestantism[/B], [icon:RELIGION_SHINTO] [B]Shinto[/B], [icon:RELIGION_SIKHISM] [B]Sikhism[/B], [icon:RELIGION_TAOISM] [B]Taoism[/B] or [icon:RELIGION_ZOROASTRIANISM] [B]Zoroastrianism[/B] — or one of twelve custom slots you title yourself.",
            "The choice is purely cosmetic. A religion carries a name, an icon and a colour, and nothing else: no religion has a single gameplay modifier attached to it, and all 60 Beliefs are available whichever one you pick. That is also why the game gives the religions no Civilopedia pages of their own, while the Beliefs each get one."
          ]
        }
      ]
    }
  };

  var ICONS = {
    box: '<path d="M8 1.5 14 4.5 8 7.5 2 4.5z"/><path d="M2 5v6l5.6 3V8z"/><path d="M14 5v6l-5.6 3V8z" opacity=".62"/>',
    cup: '<path d="M5 2h6v4.6a3 3 0 0 1-6 0z"/><rect x="7" y="9.5" width="2" height="3"/><rect x="5" y="13" width="6" height="1.4"/><path d="M11 3.5h2a2 2 0 0 1-2 3z" opacity=".72"/>',
    hourglass: '<path d="M4 2h8L8 8z"/><path d="M4 14h8L8 8z"/>',
    flag: '<path d="M2 13.5q6-3.5 12 0z" opacity=".55"/><rect x="4.6" y="2" width="1.4" height="10.5"/><path d="M6 3h7l-2 2.3 2 2.3H6z"/>',
    bank: '<path d="M8 2l6 4H2z"/><rect x="3" y="7" width="1.6" height="5"/><rect x="7.2" y="7" width="1.6" height="5"/><rect x="11.4" y="7" width="1.6" height="5"/><rect x="2" y="12.5" width="12" height="1.4"/>',
    hill: '<path d="M1.5 13Q8 4.5 14.5 13z"/>',
    atom: '<circle cx="8" cy="8" r="1.6"/><ellipse cx="8" cy="8" rx="6" ry="2.4" fill="none" stroke="currentColor" stroke-width="1"/><ellipse cx="8" cy="8" rx="6" ry="2.4" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6" ry="2.4" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(120 8 8)"/>',
    mountain: '<path d="M2 13 6 5l3 5 2-3 3 6z"/>',
    building: '<rect x="2.5" y="6.5" width="4" height="7.5"/><rect x="8.8" y="3" width="4.6" height="11"/><rect x="3.5" y="8.5" width="1" height="1.3" fill="#151922"/><rect x="10" y="5" width="1" height="1.3" fill="#151922"/><rect x="10" y="7.6" width="1" height="1.3" fill="#151922"/>',
    tree: '<circle cx="6" cy="4.6" r="2.6"/><rect x="5.4" y="7" width="1.2" height="3.4"/><path d="M9 14V9.6L11.6 8l2.6 1.6V14z" opacity=".85"/>',
    gem: '<path d="M4 6.5 8 2l4 4.5L8 14z"/><path d="M4 6.5h8M8 2v12M6 6.5 8 2m2 4.5L8 2" fill="none" stroke="#151922" stroke-width=".45" opacity=".7"/>',
    halo: '<ellipse cx="8" cy="5" rx="3.4" ry="1.4" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 6.4V14M8 8.6 4.5 7.4M8 8.6l3.5-1.2M5.2 11.4h5.6" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    person: '<circle cx="8" cy="5" r="2.6"/><path d="M3 14q5-6 10 0z"/>',
    star: '<path d="M8 1.2 9.9 5.6 14.7 6 11 9.1 12.1 13.8 8 11.3 3.9 13.8 5 9.1 1.3 6 6.1 5.6z"/>'
  };

  normalizeLeaderCatalog();
  augmentLeaderPages();
  augmentVictories();
  augmentCivilizations();
  augmentCivStrategy();
  augmentCivTips();
  buildFlatIndex();
  renderTabbar();
  bindTabbarDragScroll();
  bindDragScrollAreas();
  renderSidebar();
  goHome();

  searchEl.addEventListener("input", function () {
    runSearch(searchEl.value);
    // on a phone the results fill the menu drawer, which is shut: open it
    // under the search box so the box stays in reach while typing
    if (!isMobileNav()) return;
    if (searchEl.value.trim()) {
      document.body.style.setProperty("--search-drawer-top", Math.round(searchEl.getBoundingClientRect().bottom + 6) + "px");
      document.body.classList.add("search-drawer");
      setSidebarOpen(true);
    } else if (document.body.classList.contains("search-drawer")) {
      setSidebarOpen(false);
    }
  });
  searchEl.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      searchEl.value = "";
      renderSidebar();
      syncActiveSidebarItem();
    }
  });
  document.addEventListener("click", closeActiveTip);
  // a tip is fixed to the screen: scrolling anything leaves it behind, so close it
  document.addEventListener("scroll", function () { if (activeTipEl) closeActiveTip(); }, true);
  window.addEventListener("resize", closeActiveTip);
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!(t && t.closest && t.closest(".civic-node"))) closeCivicPopups(null);
  });
  document.addEventListener("click", function (ev) {
    var el = ev.target && ev.target.closest && ev.target.closest(".pol-ref[data-pol]");
    if (!el) return;
    var rec = POLICIES.byName[el.getAttribute("data-pol")];
    if (!rec) return;
    ev.preventDefault(); ev.stopPropagation();
    closeActiveTip();
    showCardPop(el, policyCardHtml(rec, true));
  }, true);

  function normalizeLeaderCatalog() {
    LEADER_CATALOG.forEach(function (leader, index) {
      leader.id = leader.id || makeLeaderId(leader.name);
      leader.sort = index;
      leaderById[leader.id] = leader;
      leaderByName[leader.name.toLowerCase()] = leader;
    });
  }

  function makeLeaderId(name) {
    return "LEADER_" + String(name || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toUpperCase();
  }

  // "Victories" is a collapsible group at the BOTTOM of the AGES section's sidebar,
  // matching the in-game Civilopedia layout (not its own top-level tab).
  function augmentVictories() {
    if (!VICTORIES_DATA || !SECTIONS.AGES) return;
    var pages = (((VICTORIES_DATA.groups || [])[0]) || {}).pages || [];
    if (!pages.length) return;
    SECTIONS.AGES.groups = SECTIONS.AGES.groups || [];
    if (SECTIONS.AGES.groups.some(function (g) { return g.id === "VICTORIES"; })) return;
    SECTIONS.AGES.groups.push({
      id: "VICTORIES",
      title: VICTORIES_DATA.section || "Victories",
      sort: 999,
      pages: pages
    });
  }

  function augmentCivilizations() {
    var sec = SECTIONS.CIVILIZATIONS;
    if (!sec || !CIV_LORE) return;
    (sec.groups || []).forEach(function (group) {
      (group.pages || []).forEach(function (page) {
        var lore = CIV_LORE[page.id];
        if (!lore || !lore.ages) return;
        var ability = (page.chapters || []).filter(function (c) {
          return c.chapter_id === "ABILITY";
        })[0];
        if (!ability) return;

        // every Age its own section, even where two Ages read the same
        var paras = [];
        ["Antiquity", "Exploration", "Modern"].forEach(function (age) {
          var text = lore.ages[age];
          if (!text) return;
          paras.push("[AGE]" + age + " Age[/AGE]");
          paras.push(text);
        });
        if (!paras.length) return;
        ability.paragraphs = paras;
        if (lore.abilityName) ability.title = lore.abilityName;
      });
    });
  }

  // Insert a "Civ Mechanics and Strategy" chapter (community notes) right after
  // the Ability chapter on each civ page that has strategy data.
  function augmentCivStrategy() {
    var sec = SECTIONS.CIVILIZATIONS;
    if (!sec) return;
    (sec.groups || []).forEach(function (group) {
      (group.pages || []).forEach(function (page) {
        var strat = CIV_STRATEGY[page.id];
        if (!strat || !strat.paragraphs || !strat.paragraphs.length) return;
        var chapters = page.chapters || (page.chapters = []);
        if (chapters.some(function (c) { return c.chapter_id === "STRATEGY"; })) return;
        var at = 0;
        for (var i = 0; i < chapters.length; i += 1) {
          if (chapters[i].chapter_id === "ABILITY") at = i + 1;
        }
        chapters.splice(at, 0, {
          chapter_id: "STRATEGY",
          title: strat.title || "Mechanics and Strategy",
          paragraphs: strat.paragraphs.slice(),
          leaders: strat.leaders ? strat.leaders.slice() : []
        });
      });
    });
  }

  // Insert the game's loading-screen "Tips & Hints" line as a TIPS chapter,
  // just above Historical Context, on each civ page that has one.
  function augmentCivTips() {
    var sec = SECTIONS.CIVILIZATIONS;
    if (!sec) return;
    (sec.groups || []).forEach(function (group) {
      function add(page) {
        var txt = CIV_TIPS[page.id];
        if (!txt) return;
        var chapters = page.chapters || (page.chapters = []);
        var tip = "[B]Tips & Hints.[/B] " + txt;
        // the tip is the last paragraph of Mechanics and Strategy; a civ
        // without strategy notes gets the chapter with the tip alone
        var strat = chapters.filter(function (c) { return c.chapter_id === "STRATEGY"; })[0];
        if (strat) {
          if (strat.paragraphs.indexOf(tip) < 0) strat.paragraphs.push(tip);
          return;
        }
        var at = chapters.length;
        for (var i = 0; i < chapters.length; i += 1) {
          if (chapters[i].chapter_id === "HISTORY") { at = i; break; }
        }
        chapters.splice(at, 0, {
          chapter_id: "STRATEGY", title: "Mechanics and Strategy", paragraphs: [tip]
        });
      }
      (group.pages || []).forEach(add);
      (group.subgroups || []).forEach(function (s) { (s.pages || []).forEach(add); });
    });
  }

  // Units that CANNOT be built with plain Production (Great People, leader-
  // granted Commanders, Migrants, Trade units, Founders...) get a short "How to
  // Train / Get" chapter explaining where they actually come from. Ordinary
  // Production-trained units get none. Built lazily by renderUnitBody so the
  // helpers it leans on (unitClassTier etc.) are already defined.
  var UNIT_HOWTO_HAND = { UNIT_PHYSICIAN: 1, UNIT_TREASURE_FLEET: 1 };
  var UNIT_HOWTO_FIXED = {
    // Army Commander (and its 2 Antiquity-civ variants explicitly tied to the
    // same civic node, Hazarapatis/Legatus) has a genuinely non-standard
    // unlock: researching Discipline both unlocks it for training AND grants
    // one for free at your Capital, automatically, the moment the civic
    // completes (game: NODE_CIVIC_AQ_MAIN_DISCIPLINE -> MOD_DISCIPLINE_FREE_
    // COMMANDER, EFFECT_CITY_GRANT_UNIT UnitType=UNIT_ARMY_COMMANDER Amount=1
    // AllowUniqueOverride=true -- the override is why Persia/Rome get their
    // OWN unique for free instead of a plain Army Commander). The other 6
    // Army Commander variants (Mwami, Tarkhan, Jangyongyoung, Noyan, Sardār)
    // belong to Exploration/Modern civs -- by the time a player is playing
    // one of those civs, Discipline (an Antiquity-only civic) was already
    // completed under a DIFFERENT civ, so this free-grant fact doesn't
    // describe how THEY personally are acquired and is deliberately not
    // repeated on their pages. Fleet Commander has no equivalent free-grant
    // (Astronomy just unlocks training, nothing else) so it gets no HOWTO.
    UNIT_ARMY_COMMANDER: {
      title: "How to Train the Army Commander",
      paragraphs: [
        "The [B]Army Commander[/B] unlocks once you research the [B]Discipline[/B] civic ([icon:AGE_ANTIQUITY] Antiquity Age). Completing Discipline also grants your Capital one Army Commander for free — automatically, and only once (your civilization's own unique replacement instead, if it has one).",
        "Afterward, train further Army Commanders — or buy them with [icon:YIELD_GOLD] Gold — for 100 [icon:YIELD_PRODUCTION] Production, with the cost rising for each further one you build."
      ]
    },
    UNIT_HAZARAPATIS: {
      title: "How to Train the Hazarapatis",
      paragraphs: [
        "The [B]Hazarapatis[/B] is Achaemenid Persia's unique Army Commander. It unlocks the moment you research the [B]Discipline[/B] civic ([icon:AGE_ANTIQUITY] Antiquity Age) — completing Discipline also grants your Capital one Hazarapatis for free, automatically and only once.",
        "Afterward, train further Hazarapatis — or buy them with [icon:YIELD_GOLD] Gold — for 100 [icon:YIELD_PRODUCTION] Production, with the cost rising for each further one you build."
      ]
    },
    UNIT_LEGATUS: {
      title: "How to Train the Legatus",
      paragraphs: [
        "The [B]Legatus[/B] is Rome's unique Army Commander. It unlocks the moment you research the [B]Discipline[/B] civic ([icon:AGE_ANTIQUITY] Antiquity Age) — completing Discipline also grants your Capital one Legatus for free, automatically and only once.",
        "Afterward, train further Legatus — or buy them with [icon:YIELD_GOLD] Gold — for 100 [icon:YIELD_PRODUCTION] Production, with the cost rising for each further one you build."
      ]
    },
    UNIT_NINJA: {
      title: "How to Train the Shinobi",
      paragraphs: [
        "The [B]Shinobi[/B] is [B]Sengoku Japan[/B]'s unique [TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP], available in the [icon:AGE_EXPLORATION] Exploration Age. It is trained — or purchased with [icon:YIELD_GOLD] Gold — for 150 [icon:YIELD_PRODUCTION] Production, and each further Shinobi you build costs +50 [icon:YIELD_PRODUCTION] Production more than the last.",
        "The Sengoku [icon:NAR_REW_DEFAULT] Narrative Event [B]Hear Them Out[/B] can grant a free [icon:YIELD_GOLD] purchase charge for a Shinobi.",
        "Once fielded it has the [TIP:LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP]Stealth Ability[/TIP] — hidden from enemies unless they are adjacent. Spend its 1 Charge on [B]Sabotage[/B] to force an enemy [icon:UNIT_ARMY_COMMANDER] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Army Commander[/TIP] to Respawn. Any enemy [TIP:LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP]Military Unit[/TIP] that shares its tile can use [B]Disperse Shinobi Clan[/B] to reveal and remove it."
      ]
    },
    UNIT_JOHN_MAYNARD_KEYNES: {
      title: "How to Train the Great Banker",
      paragraphs: [
        "The [B]Great Banker[/B] (John Maynard Keynes) is a Modern-Age [B]Victory[/B] Great Person on the [icon:ECONOMIC_VP] Economic [B]path[/B]. It is not trained in the normal way — it is awarded for progress toward the [TIP:LOC_SYN_ECONOMIC_VICTORY]Economic Victory[/TIP], and only one is ever received.",
        "When activated it grants a large, one-time surge of [icon:YIELD_GOLD] Gold and locks in your economic lead. Spend its single Charge deliberately, as with any Great Person."
      ]
    },
    UNIT_AERODROME_COMMANDER: {
      title: "How to Get the Aerodrome Commander",
      paragraphs: [
        "The [B]Aerodrome Commander[/B] is a special [icon:AGE_MODERN] Modern-Age [icon:UNIT_AERODROME_COMMANDER] [B]Air[/B] [TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP]. It is never trained or bought — one is created automatically, bound to the building, whenever you construct an [B]Aerodrome[/B] (unlocked by the [icon:TECH_FLIGHT] [B]Flight[/B] technology).",
        "It cannot move and is destroyed if its Aerodrome is removed. Use it to pack, base and launch Air Units from that Settlement, and to Promote as it earns experience."
      ]
    },
    // Foederati / Corsair / Partisan: identical mechanic in every Age -- a
    // Tier-4 Suzerain bonus from a Militaristic City-State, not a tech/civic,
    // unlocks training. (independents-gameeffects.xml:
    // REQUIREMENT_PLAYER_ELIGIBLE_CS_BONUS / CITY_STATE_BONUS_<AGE>_4,
    // CityStateType="MILITARISTIC".)
    UNIT_FOEDERATI: {
      title: "How to Train the Foederati",
      paragraphs: [
        "The [B]Foederati[/B] is a Tier 1 City-State-[B]Unique[/B] [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] — not available to every civilization. It unlocks once you become the [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of a [icon:CITYSTATE] [B]Militaristic[/B] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] (its fourth Suzerain bonus).",
        "Once unlocked it trains for [icon:YIELD_PRODUCTION] Production like any other unit — up to 20% cheaper to purchase with [icon:YIELD_GOLD] Gold — and each further Foederati costs slightly more than the last. It gains +2 [icon:NAR_REW_COMBAT] Combat Strength for every adjacent Military Unit."
      ]
    },
    UNIT_CORSAIR: {
      title: "How to Get the Corsair",
      paragraphs: [
        "The [B]Corsair[/B] is a Tier 1 City-State-[B]Unique[/B] Heavy [TIP:LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP]Naval Unit[/TIP] — not available to every civilization. It unlocks once you become the [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of a [icon:CITYSTATE] [B]Militaristic[/B] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] (its fourth Suzerain bonus).",
        "It can only be bought with [icon:YIELD_GOLD] Gold, not trained with Production, and carries higher [TIP:LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP]Maintenance[/TIP] than a normal Heavy Naval Unit. It captures an enemy Naval Unit outright whenever it defeats one."
      ]
    },
    UNIT_PARTISAN: {
      title: "How to Train the Partisan",
      paragraphs: [
        "The [B]Partisan[/B] is a City-State-[B]Unique[/B] [TIP:LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP]Infantry Unit[/TIP] — not available to every civilization. It unlocks once you become the [TIP:LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP]Suzerain[/TIP] of a [icon:CITYSTATE] [B]Militaristic[/B] [TIP:LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP]City-State[/TIP] (its fourth Suzerain bonus, Modern Age).",
        "Each further Partisan you build costs more [icon:YIELD_PRODUCTION] Production than the last. It gains +5 [icon:NAR_REW_COMBAT] Combat Strength against civilizations with a different Ideology, and +10 Healing in owned territory."
      ]
    }
  };
  function unitHowtoChapter(page) {
    if (UNIT_HOWTO_HAND[page.id]) return null;      // has a hand-written one
    // A named Great Person (Plato, Sei Shonagon, ...) inherits its training
    // rules from the "type" page (Logios, Shijin, ...) it's a variant of --
    // repeating the identical HOWTO chapter on every individual is noise.
    if (unitIsGpVariant(page)) return null;
    // Tier variants (Corsair T2/T3, ...) share the same unlock condition as
    // their Tier-1 page -- the fixed map is only ever keyed by the base id.
    var fixedKey = UNIT_HOWTO_FIXED[page.id] ? page.id : String(page.id).replace(/_[234]$/, "");
    if (UNIT_HOWTO_FIXED[fixedKey]) {
      var f = UNIT_HOWTO_FIXED[fixedKey];
      return { chapter_id: "HOWTO", title: f.title, paragraphs: f.paragraphs.slice() };
    }
    var s = UNIT_STATS[page.id];
    if (!s) return null;
    var name = page.title || "Unit";
    var grp = String(page.group || "");
    var ageM = /^UNITS_(ANTIQUITY|EXPLORATION|MODERN)_/.exec(grp);
    var ageKey = ageM ? ageM[1] : "";
    var age = { ANTIQUITY: "Antiquity", EXPLORATION: "Exploration", MODERN: "Modern" }[ageKey] || "";
    var ageTag = age ? "[icon:AGE_" + ageKey + "] " + age + " Age" : "";
    var uq = s.uniqueTo || unitInheritUniqueTo(page.id);
    var civ = uq && uq.civ;
    var lead = UNIT_LEADER_UNLOCK[String(page.id).replace(/_[234]$/, "")];
    var isGP = /UNIQUE_CIVILIAN/.test(grp);
    var stdProd = s.cost && s.cost.yield === "YIELD_PRODUCTION" && s.cost.amount;
    var howToVerb = "Train";
    var paras = null;

    var ageArt = /^(Antiquity|Exploration)/.test(age) ? "an " : "a ";
    // A unit the game itself marks Ageless (its own SUMMARY says so, e.g.
    // Trung Nhi) carries between every Age -- the age computed above is just
    // whichever data.js copy of the page happened to be open, not a real
    // "born in this Age" fact, so naming it here is actively misleading
    // (shows a different Age depending on which sidebar row you opened it
    // from). Only the non-ageless, single-Age case gets the age-Age phrase.
    var isAgeless = /\bAgeless\b/i.test(unitSummaryPlain(page));
    if (lead && !s.cost) {
      paras = ["[B]" + name + "[/B] is " + (age && !isAgeless ? ageArt + age + "-Age " : "a ") +
        "[TIP:LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP]Commander[/TIP] tied to " +
        (lead.leader || "its leader") + ". It is not trained — " +
        (lead.note ? lead.note.replace(/\.$/, "") : lead.leader + "'s leader ability grants it") + "."];
    } else if (isGP) {
      var infra = unitRequiredInfrastructure(page);
      if (infra && infra.name) {
        paras = [
          "[B]" + name + "[/B] is a Great Person" + (civ ? " for " + civ : "") +
            (ageTag ? ", available in the " + ageTag : "") +
            ". Each is received at random — and only once — from any Settlement that has built the [B]" +
            infra.name + "[/B].",
          "Every Great Person you claim raises the cost of the next. It carries a single Charge for its signature action and is consumed when used."
        ];
      } else if (s.requiresBuilding && s.requiresBuilding.name) {
        paras = ["[B]" + name + "[/B] can only be trained in a Settlement that already has a [B]" +
          s.requiresBuilding.name + "[/B]" +
          (stdProd ? ", for " + s.cost.amount + " [icon:YIELD_PRODUCTION] Production" : "") + "."];
      } else if (stdProd) {
        // Ordinary Gold-or-Production acquisition with nothing else distinctive
        // about it (a plain reskin of its base unit's own unlock/cost, e.g.
        // Colonist/Sokeman/Nagarika as Settler, Tajiro/Vaishya as Merchant) --
        // no HOWTO chapter, same as any standard non-unique unit. paras stays
        // null/unset here on purpose.
      } else {
        paras = ["[B]" + name + "[/B] is " + (civ ? civ + "'s unique " : "a ") +
          "[TIP:LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP]Civilian Unit[/TIP]" +
          (ageTag ? ", available in the " + ageTag : "") +
          ". It is granted by its civilization's abilities or by specific in-game events rather than trained."];
      }
    } else if (page.id === "UNIT_MIGRANT") {
      howToVerb = "Get";
      paras = ["A [B]Migrant[/B] is never trained. One appears when a [icon:YIELD_TOWNS] Town grows, from certain Wonders and policies, and when a Settlement is razed. A Migrant can only ever settle as [icon:YIELD_POPULATION] [B]Rural[/B] Population."];
    } else if (page.id === "UNIT_TRADE_CARAVAN" || page.id === "UNIT_TRADE_SHIP") {
      howToVerb = "Get";
      paras = ["[B]" + name + "[/B] is not built with [icon:YIELD_PRODUCTION] Production. It is created when you open a [icon:TRADE_ROUTE] [TIP:LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP]Trade Route[/TIP] from one of your Settlements, and it then runs that route automatically."];
    } else if (page.id === "UNIT_FOUNDER") {
      howToVerb = "Get";
      paras = ["The [B]Founder[/B] is the free unit every civilization begins the game with. Use it to found your first Settlement — it is consumed in the act."];
    } else if (s.requiresBuilding && s.requiresBuilding.name) {
      paras = ["[B]" + name + "[/B] can only be trained in a Settlement that already has a [B]" +
        s.requiresBuilding.name + "[/B]" +
        (stdProd ? ", for " + s.cost.amount + " [icon:YIELD_PRODUCTION] Production" : "") + "."];
    } else if (!stdProd && !/_COMMAND_/.test(grp) && !/UNIQUE_MILITARY|LAND_COMBAT|NAVAL_COMBAT|AIR_COMBAT/.test(grp) &&
        !(s.stats && s.stats.combat)) {
      howToVerb = "Get";
      paras = ["[B]" + name + "[/B] is not produced with standard [icon:YIELD_PRODUCTION] Production" +
        (civ ? ", and is unique to " + civ : "") + ". " +
        (s.cost && s.cost.yield === "YIELD_GOLD"
          ? "Purchase it with " + s.cost.amount + " [icon:YIELD_GOLD] Gold."
          : "It becomes available through its civilization's abilities or specific game events.")];
    }

    if (!paras || !paras.length) return null;       // ordinary Production unit
    return { chapter_id: "HOWTO", title: "How to " + howToVerb + " the " + name, paragraphs: paras };
  }

  function augmentLeaderPages() {
    if (!SECTIONS.LEADERS) {
      SECTIONS.LEADERS = { section: "Leaders", groups: [{ id: "LEADERS", title: "", pages: [] }] };
    }
    if (!SECTIONS.LEADERS.groups || !SECTIONS.LEADERS.groups.length) {
      SECTIONS.LEADERS.groups = [{ id: "LEADERS", title: "", pages: [] }];
    }

    var group = SECTIONS.LEADERS.groups[0];
    var existing = {};
    SECTIONS.LEADERS.groups.forEach(function (g) {
      (g.pages || []).forEach(function (page) {
        existing[page.id] = true;
        existing[page.title.toLowerCase()] = true;
      });
    });

    LEADER_CATALOG.forEach(function (leader) {
      if (existing[leader.id] || existing[leader.name.toLowerCase()]) return;
      group.pages.push({
        id: leader.id,
        group: null,
        title: leader.name,
        sort: 1000 + leader.sort,
        generatedLeader: true,
        chapters: buildGeneratedLeaderChapters(leader)
      });
      existing[leader.id] = true;
      existing[leader.name.toLowerCase()] = true;
    });
  }

  function buildGeneratedLeaderChapters(leader) {
    var lore = LEADER_LORE[leader.id] || {};
    var chapters = [];
    chapters.push({
      chapter_id: "ABILITY",
      title: lore.abilityName || valueOrNone(leader.ability && leader.ability.name),
      // Prefer the verbatim game markup ([BLIST]/[LI]/[icon:]/[TIP:]); fall back to the
      // plain catalog description only if the game text is missing.
      paragraphs: [lore.abilityDesc || valueOrNone(leader.ability && leader.ability.description)]
    });
    if (lore.history && lore.history.length) {
      chapters.push({
        chapter_id: "HISTORY",
        title: "Historical Context",
        paragraphs: lore.history.slice()
      });
    }
    return chapters;
  }
  function currentData() {
    return SECTIONS[currentSectionId] || { section: "", groups: [] };
  }

  function eachGroupUnit(group, fn) {
    if (group.subgroups && group.subgroups.length) {
      group.subgroups.forEach(function (sub) { fn(sub); });
    } else {
      fn(group);
    }
  }

  function buildFlatIndex() {
    flatPages = [];
    SECTION_ORDER.forEach(function (sectionId) {
      (SECTIONS[sectionId].groups || []).forEach(function (group) {
        eachGroupUnit(group, function (unit) {
          (unit.pages || []).forEach(function (page) {
            // A page listed under more than one group (the ten basic
            // Improvements appear in all three Ages) is indexed once -- the
            // extra sidebar copies carry .alias and are skipped here so search
            // and the prev/next arrows still see one entry.
            if (page.alias) return;
            flatPages.push({
              sectionId: sectionId,
              groupTitle: unit.title || group.title || "",
              page: page,
              searchText: makeSearchText(sectionId, unit.title || group.title, page)
            });
          });
        });
      });
    });
  }

  function makeSearchText(sectionId, groupTitle, page) {
    var chunks = [sectionLabel(sectionId), groupTitle || "", page.title || ""];
    (page.chapters || []).forEach(function (chapter) {
      chunks.push(chapter.title || "");
      (chapter.paragraphs || []).forEach(function (para) {
        chunks.push(stripMarkup(para));
      });
    });
    return chunks.join(" ").toLowerCase();
  }

  function renderTabbar() {
    tabbarEl.innerHTML = "";
    tabButtons = {};

    SECTION_ORDER.forEach(function (sectionId) {
      var btn = document.createElement("button");
      var label = sectionLabel(sectionId);
      btn.type = "button";
      btn.className = "tab-btn" + (sectionId === currentSectionId ? " active" : "");
      btn.title = label;
      btn.setAttribute("aria-label", label);
      // Framed PNG section icons (images/ui/tab/<section>.png); fall back to the
      // built-in SVG glyph if one is missing.
      var timg = new Image();
      timg.className = "tab-btn-img";
      timg.alt = "";
      timg.src = "images/ui/tab/" + sectionId.toLowerCase() + ".png";
      timg.onerror = function () {
        btn.classList.add("tab-btn--svg");
        btn.innerHTML = svgIcon(TAB_ICONS[sectionId]);
      };
      btn.appendChild(timg);
      btn.addEventListener("click", function () {
        // A tab just opens that section's home page -- it never opens the
        // navigation drawer (only the menu badge does that).
        setActiveSection(sectionId);
      });
      tabbarEl.appendChild(btn);
      tabButtons[sectionId] = btn;
    });

    // Mobile-only: a single gold segment that glides along the tabbar's
    // bottom border to the active tab (desktop keeps the little per-icon
    // glow from .tab-btn.active::after instead -- see style.css).
    tabbarIndicatorEl = document.createElement("span");
    tabbarIndicatorEl.className = "tabbar-indicator";
    tabbarEl.appendChild(tabbarIndicatorEl);
    updateTabbarIndicator();
  }

  // A row of <button>s inside an overflow-x:auto strip doesn't reliably pick
  // up a touch/drag as a native scroll gesture in every WebView -- drive the
  // scroll ourselves so a swipe always works, and swallow the click that
  // would otherwise follow a drag (so a swipe never also opens a tab).
  // Pointer Events (mouse + touch + pen unified) on anything that supports
  // them; plain Touch Events as a fallback for older WebViews that don't --
  // never both at once, or the same physical swipe would drive scrollLeft
  // twice.
  // A horizontally scrolling area in the content -- the unit matrix, a tree
  // pane -- can be dragged with the mouse; a drag longer than a few pixels
  // swallows the click that would follow it. Touch keeps the native pan.
  var DRAG_SCROLL_SELECTOR = ".unit-matrix-wrap, .tt-scroll";
  function bindDragScrollAreas() {
    if (!contentEl || !window.PointerEvent) return;
    var area = null, startX = 0, startY = 0, startLeft = 0, startTop = 0, moved = false, dragId = null;
    var dragMoved = false;          // the last gesture was a drag: its click is not a click
    contentEl.addEventListener("pointerdown", function (ev) {
      dragMoved = false;
      if (ev.pointerType !== "mouse" || ev.button !== 0) return;
      var el = ev.target.closest && ev.target.closest(DRAG_SCROLL_SELECTOR);
      if (!el || el.scrollWidth <= el.clientWidth + 1) return;
      area = el; dragId = ev.pointerId; moved = false;
      startX = ev.clientX; startY = ev.clientY;
      startLeft = el.scrollLeft; startTop = el.scrollTop;
    });
    contentEl.addEventListener("pointermove", function (ev) {
      if (!area || ev.pointerId !== dragId) return;
      var dx = ev.clientX - startX, dy = ev.clientY - startY;
      if (!moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        moved = true;
        area.classList.add("is-dragging");
      }
      if (moved) {
        area.scrollLeft = startLeft - dx;
        area.scrollTop = startTop - dy;
        if (ev.cancelable) ev.preventDefault();
      }
    });
    function end(ev) {
      if (!area || ev.pointerId !== dragId) return;
      area.classList.remove("is-dragging");
      dragMoved = moved;
      area = null; dragId = null; moved = false;
    }
    contentEl.addEventListener("pointerup", end);
    contentEl.addEventListener("pointercancel", end);
    contentEl.addEventListener("click", function (ev) {
      if (dragMoved) {
        dragMoved = false;
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, true);
  }

  function bindTabbarDragScroll() {
    var startX = 0, startScroll = 0, moved = false;
    function start(x) {
      startX = x;
      startScroll = tabbarEl.scrollLeft;
      moved = false;
      // A gesture that ends in pointercancel (no pointerup) never gets a
      // trailing click to consume this flag -- clear it now, at the start of
      // the NEXT gesture, so a stale "true" from that earlier, unrelated drag
      // can't silently eat this one's tap.
      tabbarDragMoved = false;
    }
    function move(x, ev) {
      var dx = x - startX;
      if (!moved && Math.abs(dx) > 4) moved = true;
      if (moved) {
        tabbarEl.scrollLeft = startScroll - dx;
        if (ev.cancelable) ev.preventDefault();
      }
    }
    function end() { tabbarDragMoved = moved; moved = false; }

    if (window.PointerEvent) {
      var dragId = null;
      tabbarEl.addEventListener("pointerdown", function (ev) {
        if (ev.pointerType === "mouse" && ev.button !== 0) return;
        dragId = ev.pointerId;
        start(ev.clientX);
      });
      tabbarEl.addEventListener("pointermove", function (ev) {
        if (dragId === null || ev.pointerId !== dragId) return;
        move(ev.clientX, ev);
      });
      ["pointerup", "pointercancel"].forEach(function (t) {
        tabbarEl.addEventListener(t, function (ev) {
          if (dragId === null || ev.pointerId !== dragId) return;
          dragId = null;
          end();
        });
      });
    } else {
      tabbarEl.addEventListener("touchstart", function (ev) {
        start(ev.touches[0].clientX);
      }, { passive: true });
      tabbarEl.addEventListener("touchmove", function (ev) {
        move(ev.touches[0].clientX, ev);
      }, { passive: false });
      ["touchend", "touchcancel"].forEach(function (t) {
        tabbarEl.addEventListener(t, end);
      });
    }

    tabbarEl.addEventListener("click", function (ev) {
      if (tabbarDragMoved) {
        tabbarDragMoved = false;
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, true);
  }

  // Slides .tabbar-indicator under the active tab. offsetLeft/offsetWidth are
  // layout values relative to the tabbar's own content box, unaffected by its
  // horizontal scroll position, so the bar tracks the button correctly both
  // at rest and while the strip is scrolled.
  function updateTabbarIndicator() {
    if (!tabbarIndicatorEl) return;
    var btn = tabButtons[currentSectionId];
    if (!btn) { tabbarIndicatorEl.style.width = "0"; return; }
    var w = Math.max(18, Math.round(btn.offsetWidth * 0.6));
    tabbarIndicatorEl.style.width = w + "px";
    tabbarIndicatorEl.style.left = (btn.offsetLeft + (btn.offsetWidth - w) / 2) + "px";
    // Keep the active tab in view when the strip is scrolled (mobile).
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  function svgIcon(iconId) {
    return '<svg viewBox="0 0 16 16" aria-hidden="true">' + (ICONS[iconId] || ICONS.box) + "</svg>";
  }

  function renderLeaderIndex() {
    activePageId = "__LEADER_INDEX__";
    currentPageCtx = null;
    recordNav({ kind: "section", sectionId: "LEADERS" });
    renderSidebar();
    setPageTitle(sectionLabel("LEADERS"));

    var mainRows = LEADER_CATALOG.filter(function (leader) { return leader.type !== "persona"; });
    var personaRows = LEADER_CATALOG.filter(function (leader) { return leader.type === "persona"; });
    var html = '<div class="page-panel leader-index-panel">';
    html += '<div class="panel-header"><h2>LEADERS</h2></div>';
    html += renderLeaderTable("Leaders", mainRows);
    html += renderLeaderTable("Alternate Personas", personaRows);
    html += '</div>';
    contentEl.innerHTML = restoreGameRefs(html);
    contentEl.scrollTop = 0;
    bindLeaderTableHandlers();
    bindTipHandlers();
    bindLinkedIconHandlers();
    syncActiveSidebarItem();
    closeMobileNav();
  }

  // Units landing page: the hierarchy from the wiki's "List of units" page --
  // Age > Military Units (one class x tier table, per-cell "Unique units"
  // expander) / Civilian Units + Commanders (each base unit with its unique
  // variants nested beneath it) / Great People (base only -- the variants live
  // on the base unit's own page). NOT a sidebar entry; re-tapping the Units
  // tab opens the tree instead (see renderTabbar).
  var UNIT_AGE_LABELS = {
    "Antiquity Units": "Antiquity Age",
    "Exploration Units": "Exploration",
    "Modern Units": "Modern Age"
  };
  var UNIT_MATRIX_CLASSES = ["Cavalry", "Infantry", "Ranged", "Siege",
    "Heavy Naval", "Light Naval", "Stealth Naval",
    "Fighter Air", "Ground Attack Air", "Siege Air"];
  var UNIT_CLASS_CANON = {};
  UNIT_MATRIX_CLASSES.forEach(function (c) { UNIT_CLASS_CANON[c.toLowerCase()] = c; });
  var UNIT_CLASS_RE = /Tier\s+(\d+)\b[^.]*?\b(Ground Attack Air|Fighter Air|Siege Air|Heavy Naval|Light Naval|Stealth Naval|Cavalry|Infantry|Ranged|Siege)\s+Unit/i;

  // A few non-unique units have real tier variants that each deserve their own
  // nav row (Privateer Tier 2 / Tier 3).
  var NAV_KEEP_ALL_TIERS = { "UNIT_PRIVATEER": 1 };

  // Drop tier-variant pages (UNIT_X_2 / UNIT_X_MENCIUS ...) whose id is prefixed
  // by another page's id in the same list -- keep only the base page.
  function unitBasePages(pages) {
    var ids = (pages || []).map(function (p) { return p.id; });
    return (pages || []).filter(function (p) {
      return !ids.some(function (o) {
        return o !== p.id && p.id.indexOf(o + "_") === 0 && !NAV_KEEP_ALL_TIERS[o];
      });
    });
  }

  // Nav entries that carry a leader badge (the leader whose ability grants the
  // unit). `age` limits it to that Age's list.
  var NAV_LEADER_BADGE = {
    "UNIT_FLEET_COMMANDER": { age: "Antiquity Units", leader: "Yi Sun-sin", icon: "images/leaders/yi_sun_sin_hex.png", hex: true },
    "UNIT_TRUNG_NHI": { leader: "Trung Trac", icon: "images/leaders/trung_trac_hex.png", hex: true }
  };

  // Units the game keeps buildable across Ages -- shown in every Age's nav list.
  var UNITS_PERSIST = {
    "Army Commander": "all", "Fleet Commander": "all",
    "Merchant": "all", "Migrant": "all", "Scout": "all", "Settler": "all",
    "Trade Caravan": ["Antiquity Units", "Modern Units"],
    "Trade Ship": ["Antiquity Units", "Modern Units"]
  };

  // The UNITS nav tree, transformed from data.js: Great-People individuals
  // collapse to their "type" page (Logios, Tjaty, ...) with the civ's icon; the
  // persistent units above appear under every Age they exist in.
  function unitsSidebarGroups() {
    var src = (SECTIONS.UNITS && SECTIONS.UNITS.groups) || [];
    var byTitle = {};
    src.forEach(function (g) {
      (g.subgroups || []).forEach(function (s) {
        (s.pages || []).forEach(function (p) { if (p.title) byTitle[p.title.toLowerCase()] = p; });
      });
    });
    function civLogo(id) {
      var s = UNIT_STATS[id] || {};
      return (s.uniqueTo && s.uniqueTo.logo) || null;
    }
    // unit title -> the base unit's portrait it replaces (Vaishya->Merchant,
    // Dhow->Galley). Keyed by title so every Tier of a unique resolves.
    var baseIconByTitle = {};
    Object.keys(UNIT_STATS).forEach(function (bid) {
      var bIcon = (MEDIA[bid] || {}).portrait;
      if (!bIcon) return;
      (UNIT_STATS[bid].variants || []).forEach(function (v) {
        var key = String(v.name || "").toLowerCase();
        if (key && !baseIconByTitle[key]) baseIconByTitle[key] = bIcon;
      });
    });
    // Generic round icon (classical bust, same baked frame as every other
    // nav-unit disc) for the Great-Person "type" pages (Logios, Tjaty, Shi Fu,
    // Saga Hero, ...) -- they replace no standard unit, so they'd otherwise
    // show an empty circle in the Unique Civilian list.
    var GREAT_PERSON_ICON = "images/nav-unit/great_person.png";
    // Trained units filed under "Unique Civilian" that replace no standard
    // unit (so decorate() can't find a "replaces" icon) but are NOT Great
    // People -- Shinobi is a trainable stealth/sabotage unit, Prospector a
    // trainable American civilian; the generic bust would misrepresent them.
    // Both already have their own real nav-unit portrait (framed the same
    // session as every other civ-unique round icon), so use that instead of
    // the Great-Person fallback.
    var UNIQUE_CIV_OWN_ICON = {
      UNIT_NINJA: "images/nav-unit/shinobi.png",
      UNIT_PROSPECTOR: "images/nav-unit/prospector.png"
    };

    function decorate(p, withTier, age, gpFallback) {
      var extra = {};
      var s = UNIT_STATS[p.id] || {};
      var logo = civLogo(p.id);
      // Nav icons are pre-baked with the correct dark disc (HDR-safe) -- the civ
      // logo on a hexagon disc, the base-unit icon on a round disc.
      if (logo) {
        extra.icon = logo.replace(/images\/(civs|icons)\//, "images/nav-civ/");
        extra.civName = (s.uniqueTo && s.uniqueTo.civ) || "";
      }
      // the standard unit this unique replaces at its own tier -- from the game
      // data first, then a title-match fallback.
      var bi = (s.replaces && s.replaces.icon) ||
        baseIconByTitle[String(p.title || "").toLowerCase()];
      if (bi) extra.baseIcon = bi.replace("images/units/", "images/nav-unit/");
      else if (UNIQUE_CIV_OWN_ICON[p.id]) { extra.baseIcon = UNIQUE_CIV_OWN_ICON[p.id]; }
      else if (gpFallback) { extra.baseIcon = GREAT_PERSON_ICON; extra.isGP = true; }
      if (withTier && s.tier) extra.navSuffix = " · Tier " + s.tier;
      var nb = NAV_LEADER_BADGE[String(p.id).replace(/_[234]$/, "")];
      if (nb && (!nb.age || nb.age === age)) {
        extra.leaderBadge = { icon: nb.icon, name: nb.leader, hex: !!nb.hex };
      }
      return Object.keys(extra).length ? Object.assign({}, p, extra) : p;
    }
    // Physician isn't tied to a specific civ (its badge is the generic
    // "Independent Powers" faction, not a real civ) and isn't a Great-Person
    // type page either -- it belongs with the plain persistent Civilians
    // (Founder, Merchant, ...), not the civ-specific Unique Civilian list.
    var RECLASSIFY_TO_CIVILIANS = { UNIT_PHYSICIAN: 1 };
    return src.map(function (g) {
      var age = g.title;
      var reclassified = [];
      var subs = (g.subgroups || []).map(function (s) {
        var pages;
        if (s.title === "Unique Civilian") {
          var srcPages = (s.pages || []).filter(function (p) {
            if (RECLASSIFY_TO_CIVILIANS[p.id]) { reclassified.push(p); return false; }
            return true;
          });
          pages = unitBasePages(srcPages).map(function (p) { return decorate(p, false, age, true); });
          // GP "type" pages (no base-unit icon) first, then the standalone
          // unique civilians (Nagarika, Tankwa, Vaishya, Watonathi); each
          // group alphabetical -> puts Tjaty before Tankwa.
          pages.sort(function (a, b) {
            var ka = (a.baseIcon && !a.isGP) ? 1 : 0, kb = (b.baseIcon && !b.isGP) ? 1 : 0;
            if (ka !== kb) return ka - kb;
            var sa = a.sort == null ? 10 : a.sort, sb = b.sort == null ? 10 : b.sort;
            if (sa !== sb) return sa - sb;   // explicit sort wins (Physician after Saga Hero)
            return String(a.title || "").localeCompare(String(b.title || ""));
          });
        } else if (s.title === "Unique Military") {
          // keep every Tier as its own entry (the game has Dhow T2 / Dhow T3,
          // Burning Arrow T1 / T2, ...); label each with its Tier.
          pages = (s.pages || []).map(function (p) { return decorate(p, true, age); });
          pages.sort(function (a, b) {
            var c = String(a.title || "").localeCompare(String(b.title || ""));
            return c || ((UNIT_STATS[a.id] || {}).tier || 0) - ((UNIT_STATS[b.id] || {}).tier || 0);
          });
        } else {
          pages = unitBasePages(s.pages || []).map(function (p) { return decorate(p, false, age); });
        }
        return { title: s.title, pages: pages };
      });
      var subByTitle = {};
      subs.forEach(function (s) { subByTitle[s.title] = s; });
      function ensureSub(title) {
        if (!subByTitle[title]) {
          var ns = { title: title, pages: [] };
          subs.push(ns); subByTitle[title] = ns;
        }
        return subByTitle[title];
      }
      reclassified.forEach(function (p) {
        var sub = ensureSub("Civilians");
        // gpFallback=false -- no round icon (it's not a Great Person); the
        // civ hex badge (its real "Independent Powers" logo) still applies.
        var dp = decorate(p, false, age, false);
        if (!sub.pages.some(function (x) { return x.id === dp.id; })) {
          sub.pages.push(dp);
        }
      });
      Object.keys(UNITS_PERSIST).forEach(function (title) {
        var ages = UNITS_PERSIST[title];
        if (ages !== "all" && ages.indexOf(age) === -1) return;
        var pg = byTitle[title.toLowerCase()];
        if (!pg) return;
        // Fleet Commander sits in "Command" in every Age, same as Army
        // Commander -- previously Antiquity moved it into "Unique Military"
        // instead (a leftover from when only Yi Sun-sin could train it there);
        // user asked for it to be consistent across all three Ages.
        var sub = ensureSub(/Commander$/.test(title) ? "Command" : "Civilians");
        if (!sub.pages.some(function (p) { return p.id === pg.id; })) {
          sub.pages.push(pg);
        }
      });
      subs.forEach(function (s) {
        if (s.title === "Command" || s.title === "Civilians") {
          s.pages.sort(function (a, b) {
            return String(a.title || "").localeCompare(String(b.title || ""));
          });
        }
      });
      return { title: g.title, subgroups: subs.filter(function (s) { return s.pages.length; }) };
    }).filter(function (g) { return g.subgroups.length; });
  }

  function unitSummaryPlain(page) {
    var txt = "";
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "SUMMARY") txt += " " + (c.paragraphs || []).join(" ");
    });
    return txt.replace(/\[[^\]]*\]/g, " ").replace(/\s+/g, " ").trim();
  }

  function unitClassTier(page) {
    // build_unit_stats.py stamps the matrix cell (class + tier, taken from the
    // base unit's <TypeTags>) so a unique variant lands under its base even
    // when its SUMMARY doesn't say "Tier N … <Class> Unit".
    var mx = (UNIT_STATS[page.id] || {}).matrix;
    if (mx && mx.cls && mx.tier) {
      return { tier: mx.tier, cls: UNIT_CLASS_CANON[String(mx.cls).toLowerCase()] || mx.cls };
    }
    var m = unitSummaryPlain(page).match(UNIT_CLASS_RE);
    if (!m) return null;
    return { tier: parseInt(m[1], 10), cls: UNIT_CLASS_CANON[m[2].toLowerCase()] || m[2] };
  }

  // City-State uniques carry no civ in the data -- name their patron explicitly.
  var UNIT_CIV_OVERRIDE = {
    UNIT_FOEDERATI: "Militaristic City-State"
  };
  function unitChipCiv(page) {
    var s = UNIT_STATS[page.id] || {};
    if (s.uniqueTo && s.uniqueTo.civ) return s.uniqueTo.civ;
    if (UNIT_CIV_OVERRIDE[page.id]) return UNIT_CIV_OVERRIDE[page.id];
    return /City-State Unique/i.test(unitSummaryPlain(page)) ? "City-State" : "";
  }

  // Unit icon for the landing-page matrix / index -- the gold-ring frame (same
  // pre-baked ring PNG as the nav) is composited into the image itself.
  function unitEmblem(src) {
    if (src) {
      // civ-uniques/ holds unique-UNIT portraits (they just happen to live in
      // that folder alongside civ trait art) -- round unit frame, not the civ
      // hex, same as every other unit icon.
      var framed = src
        .replace("images/units/", "images/nav-unit/")
        .replace("images/civ-uniques/", "images/nav-unit/")
        .replace("images/civs/", "images/nav-civ/");
      return '<span class="civic-emblem civic-emblem-unit civic-emblem-unit--framed"><img alt="" src="' +
        attrEscape(framed) +
        '" onerror="this.closest(&quot;.civic-emblem&quot;).classList.add(&quot;noimg&quot;)"></span>';
    }
    return '<span class="civic-emblem civic-emblem-unit noimg"></span>';
  }

  function unitMatrixCells(pages) {
    var cells = {};
    pages.forEach(function (p) {
      var ct = unitClassTier(p);
      if (!ct) return;
      (cells[ct.cls] || (cells[ct.cls] = {}));
      (cells[ct.cls][ct.tier] || (cells[ct.cls][ct.tier] = [])).push(p);
    });
    return cells;
  }

  function unitMatrixChip(page, kind) {
    var media = MEDIA[page.id] || {};
    var civ = kind === "uniq" ? unitChipCiv(page) : "";
    // DLC tag sits right beside the civ name (same row), not stacked as its
    // own line below it.
    var civHtml = civ
      ? '<small class="chip-civ">' + escapeHtml(civ) + dlcTagHtml(page.id) + '</small>'
      : dlcTagHtml(page.id);
    return '<button class="unit-matrix-chip unit-matrix-chip--' + kind + '" type="button" data-page-id="' +
      attrEscape(page.id) + '">' + unitEmblem(media.portrait) + '<span>' + escapeHtml(page.title || "") +
      civHtml + '</span></button>';
  }

  function unitMatrixTable(classes, stdCells, uniqCells) {
    var cols = classes.filter(function (c) { return stdCells[c] || uniqCells[c]; });
    if (!cols.length) return "";
    var tierSet = {};
    cols.forEach(function (c) {
      [stdCells[c], uniqCells[c]].forEach(function (byTier) {
        Object.keys(byTier || {}).forEach(function (t) { tierSet[t] = 1; });
      });
    });
    var tiers = Object.keys(tierSet).map(Number).sort(function (a, b) { return a - b; });

    var h = '<div class="unit-matrix-wrap"><table class="unit-matrix"><thead><tr><th></th>';
    cols.forEach(function (c) { h += '<th>' + escapeHtml(c) + '</th>'; });
    h += '</tr></thead><tbody>';
    tiers.forEach(function (t) {
      h += '<tr><th>Tier ' + t + '</th>';
      cols.forEach(function (c) {
        var std = (stdCells[c] && stdCells[c][t]) || [];
        var uniq = (uniqCells[c] && uniqCells[c][t]) || [];
        h += '<td>';
        if (!std.length && !uniq.length) {
          h += '<span class="unit-matrix-empty">&mdash;</span>';
        } else {
          std.forEach(function (p) { h += unitMatrixChip(p, "std"); });
          if (uniq.length) {
            var mxKey = "mx:" + (std[0] ? std[0].id : uniq[0].id);
            h += '<button class="unit-matrix-exp" type="button" aria-expanded="false" data-exp-key="' +
              attrEscape(mxKey) + '">' +
              'Unique Variants <span>' + uniq.length + '</span></button>' +
              '<div class="unit-matrix-uniq" hidden>';
            uniq.forEach(function (p) { h += unitMatrixChip(p, "uniq"); });
            h += '</div>';
          }
        }
        h += '</td>';
      });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  function unitIndexList(pages) {
    var html = '<div class="unit-index-list">';
    pages.forEach(function (page) {
      var media = MEDIA[page.id] || {};
      html += '<button class="unit-index-item" type="button" data-page-id="' +
        attrEscape(page.id) + '">' + unitEmblem(media.portrait) +
        '<span class="unit-index-name">' + escapeHtml(page.title || "") +
        dlcTagHtml(page.id) + '</span></button>';
    });
    return html + '</div>';
  }

  // Base unit -> its unique variants (from unit-stats.js): {name, civ, icon, pageId}.
  // Prefer the unambiguous `pageId` (a variant's own exact unit id) when present --
  // several tiers of the same named unique (Hoplite / Hoplite II / Hoplite III)
  // share one display title, so the old title-only `findPageByTitle` lookup could
  // resolve every tier's chip to the same (first-found) page regardless of which
  // base unit's list it was rendered under.
  function unitVariantEntries(baseId) {
    return ((UNIT_STATS[baseId] || {}).variants || []).map(function (v) {
      var e = v.pageId ? findPageById(v.pageId) : (v.page ? findPageByTitle(v.page) : null);
      return {
        name: v.name || "", civ: v.civ || "", icon: v.icon || "",
        pageId: e ? e.page.id : null
      };
    });
  }
  // A commander tied to a specific leader carries that leader's portrait icon
  // at the end of its row (Trung Nhi -> Trung Trac, in every Age).
  var COMMANDER_LEADER_ICON = {
    "Trung Nhi": { src: "images/leaders/trung_trac_hex.png", name: "Trung Trac" },
    // Yi Sun-sin only unlocks Fleet Commander training via the Antiquity-Age
    // Discipline civic (see UNIT_LEADER_UNLOCK below) -- the badge should only
    // show on the Antiquity row, not the Exploration/Modern ones.
    "Fleet Commander": { src: "images/leaders/yi_sun_sin_hex.png", name: "Yi Sun-sin", age: "ANTIQUITY" }
  };
  // Every UnitType defined in a DLC/*/modules/data/units.xml (as opposed to
  // Base/modules/**/data/units.xml) -- same "DLC" tag convention as the
  // Leaders list (leader.availability === "dlc"). Base-game units get no tag.
  // IDs already renamed where build_unit_stats.py keyed a DLC unit by its
  // localized display name (UNIT_BALIK -> UNIT_TARKHAN etc.).
  var DLC_UNITS = {
    UNIT_ANTIQUARIAN: 1, UNIT_BARBARY_CORSAIR: 1, UNIT_BARBARY_CORSAIR_2: 1,
    UNIT_BARBARY_CORSAIR_3: 1, UNIT_BOLYAR: 1, UNIT_BOLYAR_2: 1, UNIT_BOLYAR_3: 1,
    UNIT_BUCCANEER: 1, UNIT_COLONIST: 1, UNIT_GHILMAN: 1, UNIT_GHILMAN_2: 1,
    UNIT_GHILMAN_3: 1, UNIT_GURKHA: 1, UNIT_GURKHA_2: 1, UNIT_GURKHA_3: 1,
    UNIT_HOCEEPKILENI: 1, UNIT_HWACHA: 1, UNIT_HWACHA_2: 1, UNIT_HWACHA_3: 1,
    UNIT_HWARANG: 1, UNIT_HWARANG_2: 1, UNIT_JANGYONGYOUNG: 1, UNIT_JANISSARY: 1,
    UNIT_JANISSARY_2: 1, UNIT_JANISSARY_3: 1, UNIT_KALIA: 1, UNIT_KALIA_2: 1,
    UNIT_KISPOKO_NENA_TO: 1, UNIT_KISPOKO_NENA_TO_2: 1, UNIT_KISPOKO_NENA_TO_3: 1,
    UNIT_MAGARRU: 1, UNIT_MAGARRU_2: 1, UNIT_NINJA: 1, UNIT_NUMIDIAN_CAVALRY: 1,
    UNIT_NUMIDIAN_CAVALRY_2: 1, UNIT_QUAN_VUONG: 1, UNIT_REVENGE: 1, UNIT_REVENGE_2: 1,
    UNIT_SAGA_HERO: 1, UNIT_SAGA_HERO_EGILL_SKALLAGRIMSSON: 1,
    UNIT_SAGA_HERO_FREYDIS_EIRIKSDOTTIR: 1, UNIT_SAGA_HERO_GISLI_SURSSON: 1,
    UNIT_SAGA_HERO_GRETTIR_ASMUNDARSON: 1, UNIT_SAGA_HERO_GUDRIDR_THORBJARNARDOTTIR: 1,
    UNIT_SAGA_HERO_GUDRUN_OSVIFRSDOTTIR: 1, UNIT_SAGA_HERO_GUNNAR_HAMUNDARSON: 1,
    UNIT_SAGA_HERO_HRAFNKELL_HALLFREDSSON: 1, UNIT_SAGA_HERO_KJARTAN_OLAFSSON: 1,
    UNIT_SAGA_HERO_NJALL_THORGEIRSSON: 1, UNIT_SAMURAI: 1, UNIT_SAMURAI_2: 1,
    UNIT_SAMURAI_3: 1, UNIT_SANGDAEDEUNG: 1, UNIT_SHERPA: 1, UNIT_SHIJIN: 1,
    UNIT_SHIJIN_IZUMI_SHIKIBUTIR: 1, UNIT_SHIJIN_KI_NO_TOMONORI: 1,
    UNIT_SHIJIN_KI_NO_TSURAYUKI: 1, UNIT_SHIJIN_LADY_SARASHINA: 1,
    UNIT_SHIJIN_MIBU_NO_TADAMINE: 1, UNIT_SHIJIN_MICHITSUNA_S_MOTHER: 1,
    UNIT_SHIJIN_MURASAKI_SHIKIBU: 1, UNIT_SHIJIN_NAKAYAMA_TADACHIKA: 1,
    UNIT_SHIJIN_OSHIKOCHI_NO_MITSUNE: 1, UNIT_SHIJIN_SEI_SHONAGON: 1,
    UNIT_SLOOP: 1, UNIT_SLOOP_2: 1, UNIT_SLOOP_3: 1, UNIT_SOLTAN: 1,
    UNIT_TARKHAN: 1, UNIT_TEHINA: 1, UNIT_TOBANG: 1, UNIT_TOBANG_2: 1,
    UNIT_TOBANG_3: 1, UNIT_TRUNG_NHI: 1, UNIT_TURTANU: 1, UNIT_TURTLE_SHIP: 1,
    UNIT_TURTLE_SHIP_2: 1, UNIT_TURTLE_SHIP_3: 1, UNIT_VIKINGR: 1,
    UNIT_VIKINGR_2: 1, UNIT_VIKINGR_3: 1, UNIT_VOI_CHIEN: 1, UNIT_VOI_CHIEN_2: 1,
    UNIT_VOI_CHIEN_3: 1, UNIT_YUMI: 1, UNIT_YUMI_2: 1
  };
  function dlcTagHtml(pageId) {
    return DLC_UNITS[pageId] ? '<small class="unit-dlc-tag" title="Added by a DLC pack">[DLC]</small>' : "";
  }
  function unitTreeRow(pageId, name, civ, src, ageKey) {
    // Variants with no page still get a logo: fall back to the downloaded
    // civ-unique icon named after the unit.
    var ico = unitEmblem(src || ("images/civ-uniques/" + iconSlug(name) + ".png"));
    var lead = COMMANDER_LEADER_ICON[name];
    if (lead && lead.age && ageKey && lead.age !== ageKey) lead = null;
    var leadIco = lead
      ? '<span class="unit-tree-leader-col" data-nav-leader="' + attrEscape(lead.name) + '">' +
        '<img class="unit-tree-leader-ico" src="' + attrEscape(lead.src) + '" alt="' +
        attrEscape(lead.name) + '" title="' + attrEscape(lead.name) + '" onerror="this.remove()">' +
        '<span class="unit-tree-leader-name">' + escapeHtml(lead.name) + '</span></span>'
      : "";
    var label = '<span class="unit-tree-name">' + escapeHtml(name) +
      (civ ? ' <small class="unit-tree-civ">' + escapeHtml(civ) + '</small>' : "") +
      dlcTagHtml(pageId) + '</span>' + leadIco;
    if (pageId) {
      return '<button class="unit-tree-item" type="button" data-page-id="' +
        attrEscape(pageId) + '">' + ico + label + '</button>';
    }
    return '<span class="unit-tree-item unit-tree-item--plain">' + ico + label + '</span>';
  }
  // Unique civilians that are actually TRAINED (not random Great People) belong
  // in the Civilian Units list, tagged with their civ's hex logo. Also the home
  // for civ-unique support civilians the game files 'core class civilian' that
  // aren't Great People and aren't a variant of a base unit (Prospector).
  var TRAINED_UNIQUE_CIVILIANS = { UNIT_PHYSICIAN: 1, UNIT_NINJA: 1, UNIT_PROSPECTOR: 1 };
  function trainedUniqueCivilianRow(p) {
    var media = MEDIA[p.id] || {};
    var uq = (UNIT_STATS[p.id] || {}).uniqueTo || {};
    var logo = uq.logo ? uq.logo.replace(/images\/(civs|icons)\//, "images/nav-civ/") : "";
    var badge = logo
      ? '<img class="unit-tree-civ-logo" src="' + attrEscape(logo) + '" alt="' +
        attrEscape(uq.civ || "") + '" title="' + attrEscape(uq.civ || "") +
        '" data-nav-civ="' + attrEscape(uq.civ || "") + '" onerror="this.remove()">'
      : "";
    return '<li><button class="unit-tree-item unit-tree-item--civ" type="button" data-page-id="' +
      attrEscape(p.id) + '">' + unitEmblem(media.portrait) +
      '<span class="unit-tree-name">' + escapeHtml(p.title || "") + dlcTagHtml(p.id) + '</span>' + badge +
      '</button></li>';
  }
  function civilianUnitsHtml(pages, trained, ageKey) {
    var html = unitTreeHtml(pages, ageKey).replace(/<\/ul>$/, "");
    (trained || []).slice().sort(function (a, b) {
      return (a.title || "").localeCompare(b.title || "");
    }).forEach(function (p) { html += trainedUniqueCivilianRow(p); });
    return html + "</ul>";
  }
  // A unique variant's own data.js page tells us which Age it actually
  // belongs to (its `group` is "UNITS_ANTIQUITY_..." / "..._EXPLORATION_..." /
  // "..._MODERN_..."), independent of its civ. Persistent base units (Army/
  // Fleet Commander, Settler, Scout, ...) render once per Age via
  // withPersist(), and every time pulled the SAME global variants list off
  // UNIT_STATS -- without this, e.g. Ottru (Chola, Exploration) or Jangyongyoung
  // (Joseon, Modern) showed up under the Antiquity Fleet/Army Commander too.
  function unitAgeOf(pageId) {
    if (!pageId) return null;
    var entry = findPageById(pageId);
    var m = entry && /^UNITS_(ANTIQUITY|EXPLORATION|MODERN)_/.exec(String(entry.page.group || ""));
    return m ? m[1] : null;
  }
  function unitTreeHtml(pages, ageKey) {
    var html = '<ul class="unit-tree">';
    pages.forEach(function (p) {
      var vars = unitVariantEntries(p.id);
      if (ageKey) {
        vars = vars.filter(function (v) {
          var vAge = unitAgeOf(v.pageId);
          return !vAge || vAge === ageKey;
        });
      }
      html += '<li>' + unitTreeRow(p.id, p.title || "", "", (MEDIA[p.id] || {}).portrait, ageKey);
      if (vars.length) {
        html += '<button class="unit-matrix-exp" type="button" aria-expanded="false" data-exp-key="' +
          attrEscape("tree:" + p.id) + '">' +
          'Unique Variants <span>' + vars.length + '</span></button>' +
          '<ul class="unit-tree-vars" hidden>';
        vars.forEach(function (v) {
          html += '<li>' + unitTreeRow(v.pageId, v.name, v.civ, v.icon) + '</li>';
        });
        html += '</ul>';
      }
      html += '</li>';
    });
    return html + '</ul>';
  }

  // A click on a sub-icon inside a unit row (the leader portrait on Trung Nhi,
  // the civ hex on a unique row, the civ name text) navigates to that
  // leader / civilization page instead of the unit's own page. Returns true
  // when it handled the click.
  function navFromIconClick(target, boundary) {
    var el = target && target.closest
      ? target.closest("[data-nav-leader],[data-nav-civ]")
      : null;
    if (!el || (boundary && !boundary.contains(el))) return false;
    var lead = el.getAttribute("data-nav-leader");
    if (lead) {
      var l = leaderByName[lead.toLowerCase()];
      if (l) { openLeaderById(l.id); return true; }
      navigateToNamedPage(lead);
      return true;
    }
    var civ = el.getAttribute("data-nav-civ");
    if (civ) { navigateToNamedPage(civ); return true; }
    return false;
  }

  // The Units home's categories as strip buttons in the Age banners' manner:
  // the thin gold frame, a medallion and the name on the left, and one of the
  // game's own loading-screen paintings for that category and Age
  // (paintings.js, tools/import_paintings.py) opening to the right.
  var PAINTINGS = window.CIVPEDIA_PAINTINGS || { pages: {}, units: {} };
  var UNIT_CAT_ICON = {
    military: "images/icons/military.png",
    civilian: "images/icons/unit_settler.png",
    commanders: "images/icons/unit_army_commander.png",
    great: "images/nav-unit/great_person.png",
    other: "images/icons/unit.png"
  };
  function unitCatSection(key, title, count, body, ageKey) {
    var stateKey = ageKey + ":" + key;
    var open = unitsIndexCatsOpen[stateKey] === true;
    var art = ((PAINTINGS.units || {})[ageKey] || {})[key] || "";
    return '<div class="unit-index-section unit-cat' + (open ? '' : ' collapsed') + '" data-cat="' + key + '" data-cat-key="' + attrEscape(stateKey) + '">' +
      '<button class="unit-cat-head" type="button" data-cat="' + key + '" aria-expanded="' + (open ? 'true' : 'false') + '">' +
        '<span class="unit-cat-art" aria-hidden="true"' + (art ? ' style="background-image:url(&quot;' + attrEscape(art) + '&quot;)"' : '') + '></span>' +
        '<span class="unit-cat-disc' + (key === "great" ? ' unit-cat-disc--framed' : '') + '"><img src="' + attrEscape(UNIT_CAT_ICON[key] || "") + '" alt=""></span>' +
        '<span class="unit-cat-label">' + escapeHtml(title) + '</span>' +
        (count ? '<span class="unit-cat-count">' + count + '</span>' : '') +
      '</button>' +
      '<div class="unit-cat-body"><div class="unit-cat-inner">' + body + '</div></div></div>';
  }

  function renderUnitIndex() {
    activePageId = "__UNIT_INDEX__";
    currentPageCtx = null;
    recordNav({ kind: "section", sectionId: "UNITS" });
    renderSidebar();
    setPageTitle(sectionLabel("UNITS"));

    var groups = (SECTIONS.UNITS && SECTIONS.UNITS.groups) || [];
    // No panel header -- the toolbar's #page-title already shows "Units", and
    // each age group carries its own <h3>.
    var unitGuide = sectionFaqHtml("UNITS", "");
    // (acc-exclusive: one Age open at a time, as on a civilization's page)
    var html = '<div class="page-panel unit-index-panel acc-exclusive' + (unitGuide ? ' page-panel--faq' : '') + '">';
    // the section's emblem over the Age panels, as on the other homes
    if (HOME_ART.UNITS && HOME_ART.UNITS.portrait) {
      html += '<div class="intro-hero"><div class="intro-emblem"><div class="intro-cring">' +
        '<img src="' + attrEscape(HOME_ART.UNITS.portrait) + '" alt=""></div>' +
        '<div class="intro-hex-name">' + escapeHtml(sectionLabel("UNITS")) + '</div></div></div>';
    }

    // Names shown as a Civilian / Commander unique variant anywhere -- these are
    // kept out of the Great People lists (their base unit carries them instead).
    var variantCovered = {};
    groups.forEach(function (g) {
      (g.subgroups || []).forEach(function (s) {
        if (s.title !== "Civilians" && s.title !== "Command") return;
        (s.pages || []).forEach(function (b) {
          ((UNIT_STATS[b.id] || {}).variants || []).forEach(function (v) {
            if (v.name) variantCovered[v.name.toLowerCase()] = 1;
            if (v.page) variantCovered[String(v.page).toLowerCase()] = 1;
          });
        });
      });
    });

    // Units that persist across Ages (the game keeps them buildable) but that
    // data.js only files under one Age. Mirror the wiki's "List of units" page,
    // which repeats them in every Age they are available.
    var pageByTitle = {};
    groups.forEach(function (g) {
      (g.subgroups || []).forEach(function (s) {
        (s.pages || []).forEach(function (p) {
          if (p.title) pageByTitle[p.title.toLowerCase()] = p;
        });
      });
    });
    var AGE_ALL = ["Antiquity Units", "Exploration Units", "Modern Units"];
    var UNIT_PERSIST = {
      "Army Commander": AGE_ALL, "Fleet Commander": AGE_ALL,
      "Merchant": AGE_ALL, "Migrant": AGE_ALL, "Scout": AGE_ALL, "Settler": AGE_ALL,
      "Trade Caravan": ["Antiquity Units", "Modern Units"],
      "Trade Ship": ["Antiquity Units", "Modern Units"]
    };
    function withPersist(arr, kind, ageTitle) {
      var seen = {};
      arr.forEach(function (p) { seen[(p.title || "").toLowerCase()] = 1; });
      Object.keys(UNIT_PERSIST).forEach(function (title) {
        if (UNIT_PERSIST[title].indexOf(ageTitle) === -1) return;
        var pg = pageByTitle[title.toLowerCase()];
        if (!pg || seen[title.toLowerCase()]) return;
        var isCmd = /Commander$/.test(title);
        if ((kind === "command") !== isCmd) return;
        arr.push(pg);
      });
      return arr.sort(function (a, b) {
        return (a.title || "").localeCompare(b.title || "");
      });
    }

    groups.forEach(function (group) {
      var by = {};
      (group.subgroups || []).forEach(function (s) { by[s.title] = s.pages || []; });
      var civilians = withPersist(unitBasePages(by["Civilians"] || []), "civ", group.title);
      var command = withPersist(unitBasePages(by["Command"] || []), "command", group.title);
      var stdMil = unitBasePages((by["Land Combat"] || [])
        .concat(by["Naval Combat"] || [], by["Air Combat"] || []));
      var uniqMilAllTiers = by["Unique Military"] || [];
      var uniqMil = unitBasePages(uniqMilAllTiers);
      // Unique units the class x tier matrix can't place (civ-unique Commanders,
      // recon / builder uniques, DLC rows with no class tag) would otherwise be
      // invisible. Route Commander-class ones into Commanders, the rest into an
      // "Other Unique Units" list.
      var uniqMilLeftover = uniqMil.filter(function (p) { return !unitClassTier(p); });
      var uniqMilCmd = uniqMilLeftover.filter(function (p) {
        return ((UNIT_STATS[p.id] || {}).commands || []).length > 0 &&
          // already shown under Army/Fleet Commander's own "Unique Variants"
          // (Hazarapatis / Legatus / Turtanu under Army Commander, Ottru /
          // Tarkhan under Fleet Commander) -- don't ALSO list it as its own
          // top-level Commanders row.
          !variantCovered[(p.title || "").toLowerCase()];
      });
      var uniqMilOther = uniqMilLeftover.filter(function (p) {
        return !((UNIT_STATS[p.id] || {}).commands || []).length &&
          // already shown under a base unit's "Unique Variants" (Jaguar Slayer
          // under Scout, Zamindar under Settler) -- don't repeat it here.
          !variantCovered[(p.title || "").toLowerCase()];
      });
      var uniqCivPages = unitBasePages(by["Unique Civilian"] || []);
      var greatPeople = uniqCivPages.filter(function (p) {
        return !variantCovered[(p.title || "").toLowerCase()] &&
          !TRAINED_UNIQUE_CIVILIANS[p.id];
      });
      var trainedUniqCiv = uniqCivPages.filter(function (p) {
        return TRAINED_UNIQUE_CIVILIANS[p.id];
      });

      if (!(stdMil.length + uniqMil.length + civilians.length + command.length +
            greatPeople.length + trainedUniqCiv.length)) return;

      // civ-unique commanders join the regular Commanders list
      var commandAll = command.concat(uniqMilCmd).sort(function (a, b) {
        return (a.title || "").localeCompare(b.title || "");
      });

      // each Age opens and closes on its Age banner, as on a civilization page
      var ageName = (group.title || "").split(" ")[0];
      var ageLabel = UNIT_AGE_LABELS[group.title] || group.title || "";
      var ageKeyU = ageName.toUpperCase();
      var ageOpen = unitsIndexAgesOpen[ageKeyU] === true;
      html += '<section class="unit-index-group age-acc age-acc--panel' + (ageOpen ? '' : ' collapsed') +
        '" data-age="' + attrEscape(ageKeyU) + '">' +
        '<div class="age-sub age-acc-head age-acc-head--panel" role="button" tabindex="0" aria-expanded="' +
          (ageOpen ? 'true' : 'false') + '">' +
          '<img class="age-card-btn" src="images/ui/age-card-' + attrEscape(ageName.toLowerCase()) + '.png" alt="' + attrEscape(ageLabel) + '">' +
          '<img class="age-strip-label" src="images/ui/age-label-' + attrEscape(ageName.toLowerCase()) + '.png" alt=""></div>' +
        '<div class="age-acc-body"><div class="age-acc-inner">';

      // Military Units -- one class x tier table (Cavalry / Infantry / Ranged /
      // Siege / naval / air columns, Tier rows, per-cell Unique-units expander)
      var tbl = unitMatrixTable(UNIT_MATRIX_CLASSES,
        unitMatrixCells(stdMil), unitMatrixCells(uniqMilAllTiers));
      // Civilian Units / Commanders / Great People -- each its own top-level
      // section, same level as Military Units; each opens on its strip button
      var ageKey = (group.title || "").split(" ")[0].toUpperCase();
      if (tbl) {
        html += unitCatSection("military", "Military Units", 0, tbl, ageKey);
      }
      if (civilians.length || trainedUniqCiv.length) {
        html += unitCatSection("civilian", "Civilian Units", 0, civilianUnitsHtml(civilians, trainedUniqCiv, ageKey), ageKey);
      }
      if (commandAll.length) {
        html += unitCatSection("commanders", "Commanders", 0, unitTreeHtml(commandAll, ageKey), ageKey);
      }
      if (greatPeople.length) {
        html += unitCatSection("great", "Great People", 0, unitIndexList(greatPeople), ageKey);
      }
      if (uniqMilOther.length) {
        html += unitCatSection("other", "Other Unique Units", 0,
          unitIndexList(uniqMilOther.slice().sort(function (a, b) {
            return (a.title || "").localeCompare(b.title || "");
          })), ageKey);
      }

      html += '</div></div></section>';
    });

    html += unitGuide;
    if (HOME_ART.UNITS && HOME_ART.UNITS.scene) html += paintRevealHtml(HOME_ART.UNITS.scene, sectionLabel("UNITS"));
    html += '</div>';
    contentEl.innerHTML = restoreGameRefs(html);
    bindChapterAccordions();
    bindPaintReveal();
    contentEl.querySelectorAll(".unit-cat > .unit-cat-head").forEach(function (head) {
      head.addEventListener("click", function () {
        var sec = head.parentNode;
        var open = sec.classList.toggle("collapsed") === false;
        head.setAttribute("aria-expanded", open ? "true" : "false");
        unitsIndexCatsOpen[sec.getAttribute("data-cat-key")] = open;
      });
    });
    contentEl.querySelectorAll(".unit-index-group > .age-acc-head--panel").forEach(function (head) {
      sizeAgePanel(head);
      head.addEventListener("click", function () {
        // (after the accordion's own toggle: opening one Age closed the others)
        contentEl.querySelectorAll(".unit-index-group").forEach(function (g) {
          unitsIndexAgesOpen[g.getAttribute("data-age")] = !g.classList.contains("collapsed");
        });
      });
    });

    // Re-apply whichever "Unique Variants" expanders were open before the user
    // last clicked away (see captureUnitsIndexState) -- must happen BEFORE the
    // scrollTop restore below, since expanding a section changes page height.
    contentEl.querySelectorAll(".unit-matrix-exp[data-exp-key]").forEach(function (btn) {
      if (!unitsIndexExpanded[btn.getAttribute("data-exp-key")]) return;
      btn.setAttribute("aria-expanded", "true");
      if (btn.nextElementSibling) btn.nextElementSibling.hidden = false;
    });
    contentEl.scrollTop = unitsIndexScroll;

    function captureUnitsIndexState() {
      unitsIndexScroll = contentEl.scrollTop;
      var expanded = {};
      contentEl.querySelectorAll('.unit-matrix-exp[aria-expanded="true"][data-exp-key]').forEach(function (btn) {
        expanded[btn.getAttribute("data-exp-key")] = 1;
      });
      unitsIndexExpanded = expanded;
    }

    contentEl.querySelectorAll("[data-page-id]").forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        captureUnitsIndexState();
        if (navFromIconClick(ev.target, btn)) return;
        var entry = findPageById(btn.getAttribute("data-page-id"));
        if (entry) {
          var ageSec = btn.closest(".unit-index-group");
          pendingUnitAgeCtx = ageSec ? ageSec.getAttribute("data-age") : null;
          navigateToPage(entry.page, entry.groupTitle, entry.sectionId);
        }
      });
    });
    contentEl.querySelectorAll(".unit-matrix-exp").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        if (btn.nextElementSibling) btn.nextElementSibling.hidden = open;
      });
    });

    syncActiveSidebarItem();
    closeMobileNav();
  }

  function renderLeaderTable(title, rows) {
    if (!rows.length) return "";
    var html = '<section class="leader-table-section"><h3>' + escapeHtml(title.toUpperCase()) + '</h3>';
    html += '<div class="leader-name-list">';
    rows.forEach(function (leader) {
      html += renderLeaderIdentity(leader);
    });
    html += '</div></section>';
    return html;
  }

  function renderLeaderIdentity(leader) {
    var media = MEDIA[leader.id] || {};
    var portrait = media.thumbnail || media.portrait || leader.portrait;
    var avatar = portrait ? '<img src="' + attrEscape(portrait) + '" alt="' + attrEscape(leader.name) + '">' : '<span>' + escapeHtml(initials(leader.name)) + '</span>';
    var meta = [];
    if (leader.availability === "dlc") meta.push("DLC");
    if (leader.type === "persona") meta.push("Persona");
    return '<button class="leader-open leader-identity" type="button" data-leader-id="' + attrEscape(leader.id) + '"><span class="leader-avatar">' + avatar + '</span><span class="leader-name-text">' + escapeHtml(leader.name) + (meta.length ? '<small>' + escapeHtml(meta.join(" / ")) + '</small>' : '') + '</span></button>';
  }

  var BIOME_ICONS = {
    desert: '<circle cx="4.5" cy="4.5" r="2.2"/><path d="M1 12.5q3-3.5 5.5 0 2.5-3 4 0 2-3.5 4.5 0" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    plains: '<path d="M1 11.5q4-3 7 0t7 0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 8.5V11M8 6.5V10M12 8.5V11" stroke="currentColor" stroke-width="1.4"/>',
    grassland: '<path d="M2 14.5V9q1-3.5 2.2 0M6 14.5V6.5q1.6-4.5 3.2 0M10.5 14.5V8q1.4-3.2 3 0" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    tundra: '<path d="M8 1v14M1 8h14M3.3 3.3l9.4 9.4M12.7 3.3l-9.4 9.4" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M8 4.4 6.6 3M8 4.4 9.4 3M8 11.6 6.6 13M8 11.6 9.4 13M4.4 8 3 6.6M4.4 8 3 9.4M11.6 8 13 6.6M11.6 8 13 9.4" stroke="currentColor" stroke-width="1.2" fill="none"/>',
    tropical: '<path d="M8 15V7" stroke="currentColor" stroke-width="1.8"/><path d="M8 7q-5.5-3-7.5-.8Q4 4.6 8 7M8 7q5.5-3 7.5-.8Q12 4.6 8 7M8 7q-2.4-5.5-4.6-5.4Q6.4 2.5 8 7M8 7q2.4-5.5 4.6-5.4Q9.6 2.5 8 7"/>',
    vegetated: '<circle cx="8" cy="6" r="4.4"/><rect x="7.1" y="9.5" width="1.8" height="5.2"/>',
    mountainous: '<path d="M0.5 14.5 6 3.5l3.6 6.5L11.3 6.5l4.2 8z"/>',
    mountain: '<path d="M0.5 14.5 6 3.5l3.6 6.5L11.3 6.5l4.2 8z"/>',
    coastal: '<path d="M1 5.5q2-2.2 4 0t4 0 4 0M1 9.5q2-2.2 4 0t4 0 4 0M1 13.5q2-2.2 4 0t4 0 4 0" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    coast: '<path d="M1 5.5q2-2.2 4 0t4 0 4 0M1 9.5q2-2.2 4 0t4 0 4 0M1 13.5q2-2.2 4 0t4 0 4 0" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    river: '<path d="M4 0.5Q9 4 4.5 8T9 15.5" fill="none" stroke="currentColor" stroke-width="2"/>',
    navigable_river: '<path d="M4 0.5Q9 4 4.5 8T9 15.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.5 4.5h4l-1 2h-3z"/>',
    flat: '<rect x="0.5" y="7" width="15" height="2.2"/>',
    natural_wonder: '<path d="M8 0.8l1.95 4.6 4.95.4-3.8 3.3 1.2 4.9L8 11.5 3.7 14l1.2-4.9L1.1 5.8l4.95-.4z"/>'
  };

  function biomeSvg(label) {
    var body = BIOME_ICONS[iconSlug(label)];
    if (!body) return "";
    return '<svg class="chip-svg" viewBox="0 0 16 16" aria-hidden="true">' + body + '</svg>';
  }

  function renderLinkedList(items, forcedPage, iconDir, fixedIcon, mode) {
    items = (items || []).filter(function (item) {
      return item != null && String(item).trim() !== "";
    });
    if (!items.length) return '<span class="leader-none">None</span>';
    mode = mode || "chips";
    var isRows = mode === "rows" || mode === "rows-lg" || mode === "rows-biome";
    var wrapClass = mode === "grid" ? "leader-icon-grid" : (isRows ? "leader-row-list" : "leader-chip-list");
    if (mode === "rows-lg" || mode === "rows-biome") wrapClass += " leader-row-list-lg";
    var itemClass = mode === "grid" ? "leader-grid-item" : (isRows ? "leader-row-item" : "leader-link-chip");
    return '<div class="' + wrapClass + '">' + items.map(function (item) {
      var label = String(item).replace(/\s*\(\d+\)\s*$/, "");
      var icon;
      if (mode === "rows-biome") {
        icon = biomeSvg(label);
      } else {
        var src = fixedIcon || (iconDir ? iconDir + iconSlug(label) + ".png" : "");
        icon = src ? '<img class="chip-icon" alt="" src="' + attrEscape(src) + '" onerror="this.remove()">' : "";
      }
      return '<button class="' + itemClass + '" type="button" data-page-title="' + attrEscape(forcedPage || label) + '">' + icon + '<span class="chip-text">' + escapeHtml(item) + '</span></button>';
    }).join("") + '</div>';
  }

  function iconSlug(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\([^)]*\)/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toLowerCase();
  }

  function bindLeaderTableHandlers() {
    contentEl.querySelectorAll(".leader-open[data-leader-id]").forEach(function (button) {
      button.addEventListener("click", function () { openLeaderById(button.getAttribute("data-leader-id")); });
    });
    contentEl.querySelectorAll(".leader-expand[data-expand-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        var target = document.getElementById(button.getAttribute("data-expand-id"));
        if (!target) return;
        target.hidden = !target.hidden;
        button.classList.toggle("open", !target.hidden);
      });
    });
    contentEl.querySelectorAll(".leader-link-chip[data-page-title]").forEach(function (button) {
      button.addEventListener("click", function () { navigateToNamedPage(button.getAttribute("data-page-title")); });
    });
    contentEl.querySelectorAll(".leader-mark").forEach(function (button) {
      button.addEventListener("click", function () { button.classList.toggle("active"); });
    });
  }

  function openLeaderById(id) {
    var leader = leaderById[id];
    var entry = findPageById(id) || (leader ? findPageByTitle(leader.name) : null);
    if (!entry && leader) {
      entry = { sectionId: "LEADERS", groupTitle: "", page: { id: leader.id, title: leader.name, chapters: buildGeneratedLeaderChapters(leader) } };
    }
    if (!entry) return;
    currentSectionId = "LEADERS";
    updateTabbarActive();
    renderSidebar();
    navigateToPage(entry.page, entry.groupTitle, entry.sectionId);
  }

  // the Concepts home ("Getting Started") and the card list, which the
  // Policies pages' badges open, are not sidebar entries; nor is the Memento
  // Cards list, which the Mementos page and a leader's portrait open
  function hiddenFromSidebar(page) {
    return page.id === "INTRO" || page.id === "MEMENTO_LIST" || page.layout === "CardList";
  }

  function findPageById(id) {
    for (var i = 0; i < flatPages.length; i += 1) {
      if (flatPages[i].page.id === id) return flatPages[i];
    }
    return null;
  }

  function navigateToNamedPage(title) {
    var target = findPageByTitle(title);
    if (!target) return;
    if (target.sectionId !== currentSectionId) {
      currentSectionId = target.sectionId;
      updateTabbarActive();
      renderSidebar();
    }
    navigateToPage(target.page, target.groupTitle, target.sectionId);
  }

  function initials(name) {
    return String(name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map(function (part) { return part.charAt(0); }).join("").toUpperCase();
  }

  function valueOrNone(value) {
    value = String(value == null ? "" : value).trim();
    return value || "None";
  }

  function setActiveSection(sectionId, opts) {
    opts = opts || {};
    if (!SECTIONS[sectionId]) return;

    currentSectionId = sectionId;
    updateTabbarActive();
    renderSidebar();

    if (opts.skipAutoSelect) {
      syncActiveSidebarItem();
      return;
    }

    // CONCEPTS keeps its bespoke Introduction landing; UNITS uses the full
    // units overview as its home; every other section opens a shared template
    // home page (content filled in later).
    if (sectionId === "CONCEPTS") {
      var intro = findIntroEntry() || firstPageInSection(sectionId);
      if (intro) {
        navigateToPage(intro.page, intro.groupTitle || "", sectionId);
        return;
      }
    }
    if (sectionId === "UNITS") {
      // A tab click is a fresh start, unlike the toolbar back/forward arrows
      // (navRelative) which deliberately replay the exact prior scroll +
      // expanded state -- clicking the UNITS tab again (even from a unit
      // detail page, still "within" Units) should always land on a clean,
      // fully-collapsed index.
      unitsIndexScroll = 0;
      unitsIndexExpanded = {};
      renderUnitIndex();
      return;
    }
    renderSectionHome(sectionId);
  }

  // Age-limited sections (Religion) open with a line saying which Ages their
  // subject belongs to; every other section's home body is still empty.
  function sectionHomeBody(sectionId) {
    var tag = SECTION_AGE_TAGS[sectionId];
    return tag ? "<p>" + richText(boldAgeNames(tag.note)) + "</p>" : "";
  }

  // A section that ships its own written guide (Religion's mechanics) renders
  // it as collapsed chapters under the section-home heading, same shape as a
  // unit page's HOWTO / STRATEGY.
  function sectionHomeChapters(sectionId) {
    var tag = SECTION_AGE_TAGS[sectionId];
    if (!tag || !tag.chapters) return "";
    return tag.chapters.map(function (c) {
      // The slots chapter is the one place the three Belief classes are the
      // subject rather than a passing word, so there they carry their class
      // icon and open that sidebar category. "seen" keeps the icon on the first
      // mention only -- later ones stay links without repeating the glyph.
      var slotsChapter = /BELIEF SLOTS/.test(String(c.title || ""));
      var seen = {};
      // No linkifyTraditions here: several Belief names double as Tradition or
      // Civic names (Evangelism, Acharya), and the auto-linker would attach the
      // wrong entry's tip. This text carries its own [TIP:...] markup instead.
      var body = c.body.map(function (p) {
        // The same auto-linker chain the Units section runs, so every concept,
        // action, Great Person, unit and civ name the icon tables know about
        // picks up its glyph + infotip here too. The name linkers (pantheon /
        // belief / structure) run last, on finished HTML, so the icon passes
        // cannot stuff a second glyph inside one of their labels.
        var html = renderParagraphMarkup(linkifyUnitConcepts(String(p)));
        // No linkifyUnitNames / linkifyGpNames here: this is prose, not a unit
        // page, and both fire on ordinary words that happen to name something --
        // there IS a unit called "Founder", and "Kahuna" also resolves as a
        // Great Person, so the Belief class and the civ's Missionary came out
        // double-iced. The few unit portraits this guide wants are written into
        // the text itself.
        html = collapseAdjacentIcons(groupIconWords(linkifyCivNames(
          linkifyCodex(linkifyActions(html)))));
        html = linkifyStructures(linkifyPantheonNames(html));
        html = linkifyBeliefNames(html, seen);
        if (slotsChapter) html = linkifyBeliefClasses(html, seen);
        return html;
      }).join("");
      return chapterSectionHtml(c.title, body, "guide");
    }).join("");
  }

  // A section's home page -- same template as the Introduction landing: a framed
  // emblem (the section's own icon for now) + a section-title heading, with the
  // body left empty to be filled in later.
  // The Technologies home IS the tech tree: the three Ages as a switcher
  // under the heading, the chosen Age's tree below it. The choice sticks for
  // the session, so coming back lands on the tree you were reading.
  // key, name, the game's Age panel (emblem, name and the flourish under it)
  var TECH_TREE_AGES = [
    // (the wide 2.3:1 cut of the Age banners, tools/cut_age_panels_wide.py)
    ["ANTIQUITY", "Antiquity", "images/ui/age-panel-wide-antiquity.png"],
    ["EXPLORATION", "Exploration", "images/ui/age-panel-wide-exploration.png"],
    ["MODERN", "Modern", "images/ui/age-panel-wide-modern.png"]
  ];
  // the Technologies and Culture homes: the title art, looking as it always
  // did, is a button. Closed, the home is the title and the section's guide;
  // the title opens the three Age panels, and an Age panel opens its tree.
  function treeHeadBtnHtml(art, label, open) {
    return '<div class="tt-head-art"><button type="button" class="tt-head-btn" aria-expanded="' +
      (open ? "true" : "false") + '" aria-label="' + attrEscape(label) + '">' +
      '<img src="' + attrEscape(art) + '" alt="' + attrEscape(label) + '"></button></div>';
  }

  // A tree home re-renders on every tap. The page keeps its scroll; when
  // `closing` names a folded part (.tt-rows, .tt-open) it folds shut first
  // and the re-render follows; a part that has just opened lets its popups
  // overflow again once its fold has settled.
  function treeHomeUpdate(sectionId, closing, apply) {
    // while a fold runs the browser must not re-anchor the scroll to the
    // content under it: the fold pushes that content down and draws it up
    // again, and nothing else moves
    contentEl.classList.add("no-anchor");
    clearTimeout(treeHomeUpdate.anchorTimer);
    treeHomeUpdate.anchorTimer = setTimeout(function () { contentEl.classList.remove("no-anchor"); }, 1400);
    var go = function () {
      var top = contentEl.scrollTop;    // the scroll as it stands when the page is redrawn
      apply();
      renderSectionHome(sectionId);
      contentEl.scrollTop = top;
      contentEl.querySelectorAll(".tt-rows, .tt-open").forEach(function (el) {
        el.addEventListener("animationend", function () { el.classList.add("is-settled"); }, { once: true });
      });
    };
    if (!closing || closing.classList.contains("is-closing")) { if (!closing) go(); return; }
    closing.classList.remove("is-settled");
    closing.classList.add("is-closing");
    var done = false;
    var finish = function () { if (done) return; done = true; go(); };
    closing.addEventListener("animationend", finish, { once: true });
    setTimeout(finish, 520);
  }

  var techTreeHomeKey = "ANTIQUITY";
  var techHeadOpen = false;            // the heading opens the Age panels
  var techHomeOpen = false;            // an Age panel opens its tree
  function techTreeHomeHtml() {
    var tabs = TECH_TREE_AGES.map(function (a) {
      var on = techHomeOpen && a[0] === techTreeHomeKey;
      return '<button type="button" class="tt-age' + (on ? " is-active" : "") +
        '" data-tree="' + a[0] + '" role="tab" aria-selected="' + (on ? "true" : "false") +
        '" aria-expanded="' + (on ? "true" : "false") +
        '" aria-label="' + escapeHtml(a[1] + " Age tree") + '">' +
        '<img class="tt-age-img" alt="" src="' + a[2] + '"></button>';
    }).join("");
    var head = treeHeadBtnHtml("images/ui/head-technology.png", "Technology trees", techHeadOpen);
    if (!techHeadOpen) return head;
    return head + '<div class="tt-rows"><div class="tt-rows-in"><div class="tt-ages" role="tablist">' + tabs + '</div>' +
      (techHomeOpen ? '<div class="tt-open"><div class="tt-open-in">' + renderTechTreeBody(techTreeHomeKey) + '</div></div>'
        : '<div class="tt-hint">Tap an Age to open its technology tree</div>') + '</div></div>';
  }

  // The Culture home: the civics trees. The Age panels again, each with the
  // unique pip in its corner (the civilizations with a tree of their own in
  // that Age); under them a tab strip and the tree -- the Age's main tree
  // with its branches, or one civilization's.
  var civicHomeAge = "ANTIQUITY";
  var civicHomeCiv = null;
  var civicHeadOpen = false;           // the heading opens the Age panels
  var civicHomeOpen = false;           // an Age panel opens its tree
  function civicTreeHomeHtml() {
    var ix = CIVIC_INDEX[civicHomeAge] || {};
    var tabs = TECH_TREE_AGES.map(function (a) {
      var civs = (CIVIC_INDEX[a[0]] || {}).civs || [];
      var on = civicHomeOpen && a[0] === civicHomeAge;
      return '<div class="tt-age-wrap">' +
        '<button type="button" class="tt-age' + (on ? " is-active" : "") +
        '" data-age="' + a[0] + '" role="tab" aria-selected="' + (on ? "true" : "false") +
        '" aria-expanded="' + (on ? "true" : "false") +
        '" aria-label="' + escapeHtml(a[1] + " Age civics") + '">' +
        '<img class="tt-age-img" alt="" src="' + a[2] + '"></button>' +
        (civs.length ? '<span class="tt-pip tt-pip--unique tt-age-uq" data-age="' + a[0] + '" role="button" tabindex="0" title="' +
          attrEscape(civs.length + " civilizations have a civics tree of their own in the " + a[1] + " Age") + '">' +
          '<span class="tt-uq-count">' + civs.length + '</span></span>' : "") +
        '</div>';
    }).join("");
    var ageName = (TECH_TREE_AGES.filter(function (a) { return a[0] === civicHomeAge; })[0] || [])[1] || "";
    var civTree = civicHomeCiv && TECH_TREE[civicHomeCiv];
    var strip = '<div class="ct-tabs" role="tablist">' +
      '<button type="button" class="ct-tab' + (civTree ? "" : " is-active") + '" data-key="">' + escapeHtml(ageName + " Civics") + '</button>' +
      (civTree ? '<button type="button" class="ct-tab is-active" data-key="' + attrEscape(civicHomeCiv) + '">' + escapeHtml(civTree.name) + '</button>' : "") +
      '</div>';
    var body = "";
    if (civTree) {
      body = renderTechTreeBody(civicHomeCiv);
    } else if (ix.main) {
      body = renderTechTreeBody(ix.main, ix.branches || []);
    }
    var head = treeHeadBtnHtml("images/ui/head-civics.png", "Civics trees", civicHeadOpen);
    if (!civicHeadOpen) return head;
    return head + '<div class="tt-rows"><div class="tt-rows-in"><div class="tt-ages tt-ages--civic" role="tablist">' + tabs + '</div>' +
      (civicHomeOpen ? '<div class="tt-open"><div class="tt-open-in">' + strip + body + '</div></div>'
        : '<div class="tt-hint">Tap an Age to open its civics tree</div>') + '</div></div>' +
      // the card an Age panel's pip opens (bindTechTreePopups): a tree body
      // brings its own, the hint state needs one of its own
      (civicHomeOpen ? "" : '<div class="tt-pop" hidden role="dialog" aria-label="Civilizations with a civics tree"></div>');
  }

  // the card the Age panel's pip opens: one row per civilization with a
  // civics tree in that Age -- its tree's emblem, its name, its flag
  function civicCivListHtml(age) {
    var ix = CIVIC_INDEX[age] || {};
    var ageName = (TECH_TREE_AGES.filter(function (a) { return a[0] === age; })[0] || [])[1] || "";
    var logos = civNameIcons();
    var rows = (ix.civs || []).map(function (c) {
      var t = TECH_TREE[c.key] || {};
      var emblem = ((t.nodes || [])[0] || {}).icon || "";
      var flag = logos[c.civ] || "";
      return '<div class="tt-ticket tt-ticket--uq ct-civ" role="button" tabindex="0" data-key="' + attrEscape(c.key) + '">' +
        (emblem ? '<img class="tt-tk-ico" alt="" src="' + attrEscape(emblem) + '" onerror="this.style.visibility=&quot;hidden&quot;">' : '<span class="tt-tk-ico"></span>') +
        '<div class="tt-tk-div"></div>' +
        '<div class="tt-tk-body"><div class="tt-tk-name">' + escapeHtml(c.name) + '</div><div class="tt-hr"></div>' +
        '<div class="tt-tk-line tt-uq-row"><span class="tt-uq-civ">' +
        (flag ? '<img class="tt-uq-flag" alt="" src="' + attrEscape(flag) + '">' : "") +
        '<span class="tt-uq-civname">' + escapeHtml(c.civ) + '</span></span></div></div></div>';
    }).join("");
    return '<span class="tt-pop-corner tt-pop-corner--tl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--tr"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--bl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--br"></span>' +
      '<button type="button" class="tt-pop-close" aria-label="Close"></button>' +
      '<div class="tt-pop-title">' + escapeHtml(ageName + " Civics") + "</div>" +
      '<div class="tt-pop-state">Civilizations</div>' +
      '<div class="tt-pop-list">' + rows + "</div>";
  }

  // A hexagonal frame in the Natural Wonder frame's language: brass gradient
  // lip, purple keyline, soft brass halo (the shadow comes from CSS). Drawn as
  // SVG so the rings are true rings on the slanted edges too. The art inside
  // is a pointy-top hexagon itself, so it fills the inner hexagon exactly.
  var RELIGION_HOME_EMBLEM = "images/ui/religion-emblem.png";
  var RELIGION_HOME_EMBLEM_READY = true;
  function hexPoints(r) {
    var pts = [];
    for (var i = 0; i < 6; i += 1) {
      var a = Math.PI / 180 * (60 * i - 90);
      pts.push((100 + r * Math.cos(a)).toFixed(2) + "," + (100 + r * Math.sin(a)).toFixed(2));
    }
    return pts.join(" ");
  }
  function hexFrameHtml(src, glyphSvg) {
    var ring = function (r, fill, w) {
      return '<polygon points="' + hexPoints(r) + '" fill="' + fill + '" stroke="' + fill +
        '" stroke-width="' + w + '" stroke-linejoin="round"/>';
    };
    var inner = 92.9;
    return '<svg class="hex-frame" viewBox="0 0 200 200" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="hexBrass" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#e7d49a"/><stop offset="1" stop-color="#6f5c34"/></linearGradient>' +
        '<radialGradient id="hexPlate" cx="0.5" cy="0.4" r="0.7">' +
          '<stop offset="0" stop-color="#1b2130"/><stop offset="1" stop-color="#0b0e15"/></radialGradient>' +
        '<clipPath id="hexClip"><polygon points="' + hexPoints(inner) + '"/></clipPath>' +
      '</defs>' +
      // the square frame's 3px lip / 2px keyline / 3px halo, at this box's
      // size: a ring's edge thickness is (radius step) x cos 30
      ring(96.7, "#2b2350", 1) +
      ring(95.2, "url(#hexBrass)", 1) +
      '<polygon points="' + hexPoints(inner) + '" fill="url(#hexPlate)"/>' +
      (src
        // the art's own hexagon spans 252 of its 256px: scale it up so that
        // hexagon meets the lip, and let the clip take the rest
        ? '<image href="' + attrEscape(src) + '" x="' + (100 - inner * 256 / 252).toFixed(2) +
          '" y="' + (100 - inner * 256 / 252).toFixed(2) +
          '" width="' + (inner * 2 * 256 / 252).toFixed(2) + '" height="' + (inner * 2 * 256 / 252).toFixed(2) +
          '" clip-path="url(#hexClip)" preserveAspectRatio="xMidYMid slice"/>'
        : String(glyphSvg || "").replace("<svg ", '<svg x="58" y="58" width="84" height="84" class="hex-glyph" ')) +
      '</svg>';
  }

  // The Government home: the section's emblem, then the questions a player
  // asks about Governments, Policies, Traditions and Celebrations, each a
  // chapter that opens on a tap (gov-faq.js). Government and concept names
  // in the answers link to their pages.
  var GOV_LINK_NAMES = ["Revolutionary Authoritarianism", "Revolutionary Republic", "Constitutional Monarchy", "Classical Republic",
    "Bureaucratic Monarchy", "Elective Republic", "Feudal Monarchy", "Authoritarianism", "Despotism", "Oligarchy", "Plutocracy",
    "Theocracy", "Revolución", "Ideologies", "Policies: Basics", "Policies: Traditions", "Syncretism"];
  function linkGovNames(html) {
    var re = new RegExp("(^|[^\\w>])(" + GOV_LINK_NAMES.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(?![\\w-])", "g");
    // only in text between tags
    return html.split(/(<[^>]+>)/).map(function (part) {
      if (part.charAt(0) === "<") return part;
      return part.replace(re, function (all, pre, name) {
        return pre + '<span class="page-link" data-page-title="' + attrEscape(name) + '">' + name + '</span>';
      });
    }).join("");
  }
  function govHomeHtml() {
    var html = '<div class="gov-home-emblem"><img class="entry-portrait" src="images/ui/government-disc.png" alt="Government"></div>';
    GOV_FAQ.forEach(function (f) {
      html += faqItemHtml(f.q, linkGovNames(chapterBodyHtml({ paragraphs: f.paragraphs })));
    });
    return html;
  }

  // One question of a guide: a chapter that opens on a tap, marked as a
  // guide row (`chapter--faq`) so the small caption look stays on the
  // questions and an ordinary heading on the same page (the Welcome on the
  // General Concepts home) keeps its own.
  function faqItemHtml(question, bodyHtml) {
    return chapterSectionHtml(String(question).toUpperCase(), bodyHtml, "toggle-collapsed")
      .replace('<section class="chapter ', '<section class="chapter chapter--faq ');
  }

  // The Civilizations and Leaders homes: a guide in questions and answers,
  // grouped under small captions, each question opening on a tap like the
  // Government home's (section-faq.js)
  var SECTION_FAQ = window.CIVPEDIA_SECTION_FAQ || {};

  // the pages a guide's words link to: the sections whose page titles are
  // names rather than ordinary words. A title that reads as a plain word in a
  // sentence ("Repair", "Trade", "Combat") would link half the guide, so the
  // skip list keeps them out.
  var FAQ_LINK_SECTIONS = ["CONCEPTS", "CIVILIZATIONS", "LEADERS", "GOVERNMENT", "AGES", "WONDERS",
    "TECHNOLOGIES", "CULTURE", "MAP", "BUILDINGS", "IMPROVEMENTS", "RELIGION", "UNITS"];
  var FAQ_NAME_SKIP = /^(Ages|Home|Getting Started|Future Tech|Future Civic|Origins|Foundation|Repair|Trade|Combat|Team Play|Just One More Turn|Force-Ending Turns \(PC-Only\))$/;
  var FAQ_NAME_RE = null, FAQ_NAME_TITLE = {};
  function linkFaqNames(html) {
    if (FAQ_NAME_RE === null) {
      var names = [];
      flatPages.forEach(function (e) {
        if (FAQ_LINK_SECTIONS.indexOf(e.sectionId) < 0) return;
        var t = String(e.page.title || "");
        if (t.length < 5 || FAQ_NAME_SKIP.test(t)) return;
        if (!FAQ_NAME_TITLE[t]) { FAQ_NAME_TITLE[t] = t; names.push(t); }
      });
      FAQ_NAME_RE = names.length ? new RegExp("(^|[^\\w'])(" + names.sort(function (a, b) { return b.length - a.length; })
        .map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(s?)(?![\\w])", "g") : false;
    }
    if (!FAQ_NAME_RE) return html;
    var depth = 0, seen = {};
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) {
        // count open links and buttons: a name inside one stays as it is
        if (/^<(span[^>]*\b(page-link|game-ref|tip)\b|button|a\b)/.test(chunk)) depth += 1;
        else if (/^<\/(span|button|a)>/.test(chunk) && depth > 0) depth -= 1;
        return chunk;
      }
      if (depth > 0) return chunk;
      return chunk.replace(FAQ_NAME_RE, function (m, lead, name, plural) {
        // one link per name in an answer: the first mention carries it
        if (seen[name]) return m;
        seen[name] = 1;
        return lead + '<span class="page-link" data-page-title="' + attrEscape(name) + '" role="button" tabindex="0">' + escapeHtml(name + plural) + '</span>';
      });
    }).join("");
  }

  // the guide's live lists, from the data
  function faqFill(text) {
    return String(text).replace("[DEEDS]", function () {
      var rows = [];
      Object.keys(CIV_PAIRINGS.gameplay || {}).forEach(function (civ) {
        var c = CIV_EXTRAS[civ];
        if (!c) return;
        var age = CIV_PAIRINGS.civAge[civ] || c.age || "";
        rows.push({ age: age, name: c.name, deeds: CIV_PAIRINGS.gameplay[civ] });
      });
      var order = { Exploration: 0, Modern: 1 };
      rows.sort(function (a, b) { return (order[a.age] || 0) - (order[b.age] || 0) || a.name.localeCompare(b.name); });
      return "[BLIST]" + rows.map(function (r) {
        return "[LI][B]" + r.name + "[/B] (" + r.age + "): " + r.deeds.map(function (g) {
          return g.deed.replace(/\[icon:[^\]]*\]\s*/g, "").replace(/\.$/, "") + (g.age ? " in " + g.age : "");
        }).join(", or ") + ".";
      }).join("") + "[/BLIST]";
    }).replace("[LEADERS_BY_ATTRIBUTE]", function () {
      var by = {};
      (window.CIVPEDIA_LEADER_CATALOG || []).forEach(function (l) {
        (l.attributes || []).forEach(function (a) { (by[a] = by[a] || []).push(l.name); });
      });
      return "[BLIST]" + ["Cultural", "Diplomatic", "Economic", "Expansionist", "Militaristic", "Scientific", "Wildcard"].filter(function (a) { return by[a]; })
        .map(function (a) { return "[LI][B]" + a + ":[/B] " + by[a].sort().join("; ") + "."; }).join("") + "[/BLIST]";
    });
  }

  // (plain: no name links -- the General Concepts guide reads as prose)
  function sectionFaqHtml(sectionId, hero, plain) {
    var faq = (SECTION_FAQ || window.CIVPEDIA_SECTION_FAQ || {})[sectionId] || {};
    var html = "";
    (faq.groups || []).forEach(function (g) {
      html += '<div class="unit-req-head civ-ability-cap faq-group-cap">' + escapeHtml(g.title) + '</div>';
      (g.items || []).forEach(function (f) {
        var body = chapterBodyHtml({ paragraphs: f.paragraphs.map(faqFill) });
        html += faqItemHtml(f.q, plain ? body : linkFaqNames(body));
      });
    });
    if (!html) return hero;
    // the whole guide folds under one FAQ heading, closed until tapped, set
    // a few lines below whatever stands above it
    return hero + chapterSectionHtml("FAQ", html, "toggle-collapsed")
      .replace('<section class="chapter ', '<section class="chapter chapter--faq-wrap ');
  }

  function renderSectionHome(sectionId) {
    // the General Concepts home is the game's introduction page ("Getting
    // Started"), which the sidebar no longer lists
    if (sectionId === "CONCEPTS") {
      var intro = findIntroEntry();
      if (intro) {
        navigateToPage(intro.page, intro.groupTitle, intro.sectionId);
        return;
      }
    }
    activePageId = "__HOME__" + sectionId;
    currentPageCtx = null;
    recordNav({ kind: "section", sectionId: sectionId });
    renderSidebar();
    setPageTitle(sectionLabel(sectionId));
    var isTechHome = sectionId === "TECHNOLOGIES" && TECH_TREE[techTreeHomeKey];
    var isCivicHome = sectionId === "CULTURE" && (CIVIC_INDEX[civicHomeAge] || {}).main;
    // the Technologies home is the tree and nothing else: no emblem plate, no
    // heading -- the Age switcher is the first thing on the page
    var hero = sectionId === "RELIGION" && !HOME_ART.RELIGION
      ? '<div class="intro-hero"><div class="intro-hex">' +
          hexFrameHtml(RELIGION_HOME_EMBLEM_READY ? RELIGION_HOME_EMBLEM : null, svgIcon(TAB_ICONS[sectionId])) +
        '</div></div>'
      : sectionId === "GOVERNMENT" && !HOME_ART.GOVERNMENT
      ? '<div class="gov-home-emblem"><img class="entry-portrait" src="images/ui/government-disc.png" alt="Government"></div>'
      : HOME_ART[sectionId] && HOME_ART[sectionId].hex
      ? '<div class="intro-hero"><div class="intro-emblem"><div class="intro-hex intro-hex--art">' +
          '<img src="' + attrEscape(HOME_ART[sectionId].hex) + '" alt="">' +
        '</div><div class="intro-hex-name">' + escapeHtml(sectionLabel(sectionId)) + '</div></div></div>'
      : HOME_ART[sectionId] && HOME_ART[sectionId].portrait
      ? '<div class="intro-hero"><div class="intro-emblem"><div class="intro-cring">' +
          '<img src="' + attrEscape(HOME_ART[sectionId].portrait) + '" alt="">' +
        '</div><div class="intro-hex-name">' + escapeHtml(sectionLabel(sectionId)) + '</div></div></div>'
      : '<div class="intro-hero"><div class="intro-cring">' +
          '<div class="section-home-plate">' + svgIcon(TAB_ICONS[sectionId]) + '</div>' +
        '</div></div>';
    var isFaqHome = !!(SECTION_FAQ[sectionId] && (SECTION_FAQ[sectionId].groups || []).length);
    // (the older Government home, kept for a build without its guide)
    var isGovHome = sectionId === "GOVERNMENT" && GOV_FAQ.length && !isFaqHome;
    // the section's own head (its tree, its emblem), then its guide under it
    var guide = isFaqHome ? sectionFaqHtml(sectionId, "") : "";
    // a tree home's emblem stands over its title button, unnamed (the button is the name)
    var treeEmblem = HOME_ART[sectionId] && HOME_ART[sectionId].portrait
      ? '<div class="intro-hero tree-home-emblem"><div class="intro-emblem"><div class="intro-cring">' +
          '<img src="' + attrEscape(HOME_ART[sectionId].portrait) + '" alt=""></div></div></div>' : "";
    var homeBody = isTechHome ? treeEmblem + techTreeHomeHtml() + guide
      : isCivicHome ? treeEmblem + civicTreeHomeHtml() + guide
      : isGovHome ? govHomeHtml() + guide
      : isFaqHome ? hero + guide
      : hero + chapterSectionHtml(sectionLabel(sectionId).toUpperCase(), sectionHomeBody(sectionId), "static") +
        sectionHomeChapters(sectionId);
    if (HOME_ART[sectionId] && HOME_ART[sectionId].scene) {
      homeBody += paintRevealHtml(HOME_ART[sectionId].scene, sectionLabel(sectionId), { focus: HOME_ART[sectionId].focus, aspect: HOME_ART[sectionId].aspect });
    }
    contentEl.innerHTML = restoreGameRefs(
      '<div class="page-panel' + (isTechHome || isCivicHome ? " page-panel--tech-home" : "") + (isGovHome || isFaqHome ? " page-panel--faq" : "") + '">' +
        '<div class="panel-shell panel-shell--full"><div class="panel-body">' +
          homeBody +
        '</div></div></div>');
    contentEl.scrollTop = 0;
    bindChapterAccordions();
    bindTipHandlers();
    bindLinkedIconHandlers();
    bindPaintReveal();
    if (isTechHome) {
      contentEl.querySelectorAll(".tt-head-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          treeHomeUpdate(sectionId, techHeadOpen ? contentEl.querySelector(".tt-rows") : null, function () {
            techHeadOpen = !techHeadOpen;
            if (!techHeadOpen) techHomeOpen = false;
          });
        });
      });
      contentEl.querySelectorAll(".tt-age").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var key = btn.getAttribute("data-tree");
          if (!key) return;
          var closes = techHomeOpen && key === techTreeHomeKey;
          treeHomeUpdate(sectionId, closes ? contentEl.querySelector(".tt-open") : null, function () {
            if (closes) techHomeOpen = false;
            else { techTreeHomeKey = key; techHomeOpen = true; }
          });
        });
      });
      bindTechTreePopups();
      requestAnimationFrame(bindTechTreeEdges);
    }
    if (isCivicHome) {
      contentEl.querySelectorAll(".tt-head-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          treeHomeUpdate(sectionId, civicHeadOpen ? contentEl.querySelector(".tt-rows") : null, function () {
            civicHeadOpen = !civicHeadOpen;
            if (!civicHeadOpen) { civicHomeOpen = false; civicHomeCiv = null; }
          });
        });
      });
      contentEl.querySelectorAll(".tt-age[data-age]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var age = btn.getAttribute("data-age");
          var closes = civicHomeOpen && age === civicHomeAge && !civicHomeCiv;
          treeHomeUpdate(sectionId, closes ? contentEl.querySelector(".tt-open") : null, function () {
            if (closes) civicHomeOpen = false;
            else { civicHomeAge = age; civicHomeCiv = null; civicHomeOpen = true; }
          });
        });
      });
      contentEl.querySelectorAll(".ct-tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
          var key = tab.getAttribute("data-key") || null;
          if (key === civicHomeCiv) return;
          treeHomeUpdate(sectionId, null, function () { civicHomeCiv = key; });
        });
      });
      bindTechTreePopups();
      requestAnimationFrame(bindTechTreeEdges);
    }
    syncActiveSidebarItem();
    closeMobileNav();
  }

  function firstPageInSection(sectionId) {
    var groups = (SECTIONS[sectionId] && SECTIONS[sectionId].groups) || [];
    for (var i = 0; i < groups.length; i += 1) {
      if (groups[i].pages && groups[i].pages.length) {
        return { page: groups[i].pages[0], groupTitle: groups[i].title || "" };
      }
    }
    return null;
  }

  function updateTabbarActive() {
    Object.keys(tabButtons).forEach(function (sectionId) {
      tabButtons[sectionId].classList.toggle("active", sectionId === currentSectionId);
    });
    updateTabbarIndicator();
  }

  function renderSidebar() {
    sidebarEl.innerHTML = "";

    var title = document.createElement("div");
    title.className = "sidebar-title";
    title.textContent = sectionLabel(currentSectionId);
    sidebarEl.appendChild(title);

    // (the "List of leaders" table page is gone: the Leaders home is the guide)


    var isUnits = currentSectionId === "UNITS";
    // Entering UNITS from another section -> every age group starts collapsed.
    if (isUnits && sidebarLastSection !== "UNITS") {
      unitsAgeOpen = {};
      unitsIndexScroll = 0;
      unitsIndexExpanded = {};
    }
    sidebarLastSection = currentSectionId;

    var groups = isUnits
      ? unitsSidebarGroups()
      : (currentData().groups || []);
    var firstOpenIndex = findFirstGroupWithPages(groups);

    function collapsibleHeader(title, count, open, extraClass) {
      var header = document.createElement("div");
      header.className = "group-header" + (extraClass ? " " + extraClass : "");
      // An age-named group (the three Units sections, Religion's "Antiquity
      // Pantheons" / "Exploration Beliefs") gets that Age's colour emblem in a
      // round frame.
      var ageM = /^(Antiquity|Exploration|Modern)\b/.exec(title);
      var ageIco = ageM
        ? '<span class="group-age-ico"><img src="images/icons/age_' + ageM[1].toLowerCase() +
          '.png" alt="" onerror="this.style.display=&quot;none&quot;"></span>'
        : "";
      header.innerHTML =
        '<span class="group-toggle">' + (open ? "-" : "+") + "</span>" +
        '<span class="group-title">' + ageIco + escapeHtml(title) + "</span>" +
        '<span class="count">' + count + "</span>";
      return header;
    }

    groups.forEach(function (group, groupIndex) {
      var hasSubs = group.subgroups && group.subgroups.length;
      var total = groupPageCount(group);
      if (!total) return;

      if (!group.title) {
        renderPageItems(group.pages, "", sidebarEl);
        return;
      }

      // every group starts closed, down to the top categories
      var groupOpen = isUnits ? unitsAgeOpen[group.title] === true : false;
      var header = collapsibleHeader(group.title, total, groupOpen);
      var body = document.createElement("div");
      body.className = "group-pages" + (groupOpen ? " open" : "") + (hasSubs ? " group-pages--nested" : "");

      if (hasSubs) {
        var subs = group.subgroups.filter(function (s) { return s.pages && s.pages.length; });
        var anyActive = subs.some(subHasActivePage);
        subs.forEach(function (sub, si) {
          var subOpen = false;
          var sh = collapsibleHeader(sub.title, sub.pages.length, subOpen, "subgroup-header");
          var sl = document.createElement("div");
          sl.className = "group-pages group-subpages" + (subOpen ? " open" : "");
          renderPageItems(sub.pages, sub.title, sl, isUnits ? group.title : null);
          sh.addEventListener("click", function (ev) {
            ev.stopPropagation();
            var o = sl.classList.toggle("open");
            sh.querySelector(".group-toggle").textContent = o ? "-" : "+";
          });
          body.appendChild(sh);
          body.appendChild(sl);
        });
      } else {
        renderPageItems(group.pages, group.title, body);
      }

      header.addEventListener("click", function () {
        var open = body.classList.toggle("open");
        header.querySelector(".group-toggle").textContent = open ? "-" : "+";
        if (isUnits && unitsAgeOpen) unitsAgeOpen[group.title] = open;
      });

      sidebarEl.appendChild(header);
      sidebarEl.appendChild(body);
    });

    syncActiveSidebarItem();
  }

  function groupPageCount(group) {
    if (group.subgroups && group.subgroups.length) {
      return group.subgroups.reduce(function (n, s) { return n + ((s.pages || []).length); }, 0);
    }
    return (group.pages || []).filter(function (pg) { return !hiddenFromSidebar(pg); }).length;
  }

  function subHasActivePage(sub) {
    return !!activePageId && (sub.pages || []).some(function (p) { return p.id === activePageId; });
  }

  function renderPageItems(pages, groupTitle, parent, ageTitle) {
    // ageTitle ("Antiquity Units" / "Exploration Units" / "Modern Units") is
    // only passed for the UNITS sidebar -- lets a click record which Age
    // section it came from (see pendingUnitAgeCtx / renderUnitVariants),
    // since a persisted commander page is the exact same object in all three.
    var ageKey = ageTitle ? String(ageTitle).split(" ")[0].toUpperCase() : null;
    // When a group repeats a unit name (Hoplite / Burning Arrow / ... appear once
    // per Tier), disambiguate each entry with its tier.
    var titleCounts = {};
    pages.forEach(function (p) { titleCounts[p.title] = (titleCounts[p.title] || 0) + 1; });

    pages.forEach(function (page) {
      if (hiddenFromSidebar(page)) return;
      var item = document.createElement("div");
      item.className = "page-item" +
        ((page.icon || page.baseIcon || page.leaderBadge) ? " page-item-iconed" : "");
      var label = page.title;
      var st = UNIT_STATS[page.id];
      if (page.navSuffix) {
        label = page.title + page.navSuffix;
      } else if (titleCounts[page.title] > 1 && st && st.tier) {
        label = page.title + " · Tier " + st.tier;
      }
      if (page.icon || page.baseIcon || page.leaderBadge) {
        // Icons sit AFTER the name in fixed columns: [round base-unit] then the
        // rightmost slot (civ hex, or -- for a leader-unlocked unit with no civ
        // -- the leader badge, so it sits at the far right). Empty slots stay.
        var leaderInHex = page.leaderBadge && !page.icon;
        var baseIsLeader = page.leaderBadge && !leaderInHex;
        // A leader badge shows the unlocking leader's name under the portrait.
        var leaderColCls = "pi-round" + (page.leaderBadge && page.leaderBadge.hex ? " pi-leader-hex" : "");
        var leaderCol = page.leaderBadge
          ? '<span class="pi-leader-col">' +
            '<span class="' + leaderColCls + '"><img class="pi-leader-img" alt="" src="' +
            attrEscape(page.leaderBadge.icon) +
            '" onerror="this.closest(&quot;.pi-round&quot;).classList.add(&quot;noimg&quot;)"></span>' +
            '<span class="pi-leader-name">' + escapeHtml(page.leaderBadge.name || "") + '</span></span>'
          : "";
        // Base-unit icons use the circular (ring) frame; civ logos the hexagon.
        var base = baseIsLeader
          ? leaderCol
          : '<span class="' + (page.baseIcon ? 'pi-round' : 'pi-round pi-round--empty') + '">' +
            (page.baseIcon
              ? '<img class="pi-base-img" alt="" src="' + attrEscape(page.baseIcon) +
                '" onerror="this.closest(&quot;.pi-round&quot;).classList.add(&quot;noimg&quot;)">'
              : "") + '</span>';
        // A Building's row ends with the class it belongs to -- a small glyph
        // with the class named under it (Warehouse, Science, ...). It is a
        // label, not a framed nav logo, so it skips the hexagon and the empty
        // base-unit column that keeps the Units rows in step.
        // Only the classes with a glyph of their own keep it (Palace, City
        // Hall, Warehouse, Fortification, Military, Diplomacy, Unique
        // Building, Quarter); a yield class is named alone.
        var catGlyph = /^(?:Palace|City Hall|Warehouse|Fortification|Military|Diplomacy|Unique Building|Quarter)$/i.test(page.iconLabel || "");
        var catCol = page.icon && page.iconLabel
          ? '<span class="pi-cat-col">' + (catGlyph ? '<img class="pi-cat-img" alt="" src="' +
            attrEscape(page.icon) +
            '" onerror="this.classList.add(&quot;noimg&quot;)">' : '') +
            '<span class="pi-cat-name">' + escapeHtml(page.iconLabel) + '</span></span>'
          : "";
        var hex = catCol ? catCol : (page.icon
          ? '<span class="pi-hex' + (page.iconPlain ? " pi-hex--plain" : "") + '"><img class="page-item-icon" alt="" src="' +
            attrEscape(page.icon) +
            '" onerror="this.closest(&quot;.pi-hex&quot;).classList.add(&quot;noimg&quot;)"></span>'
          : (leaderInHex
            ? leaderCol
            : '<span class="pi-hex pi-round--empty"></span>'));
        item.innerHTML = '<span class="page-item-label">' + escapeHtml(label) + '</span>' +
          (catCol ? "" : base) + hex;
      } else {
        item.textContent = label;
      }
      item.dataset.pageId = page.id;
      item.addEventListener("click", function (ev) {
        // The leader badge -> that leader's page; the civ hex -> that civ's
        // page; anything else (base-unit icon, the label) -> the unit page.
        var t = ev.target;
        if (t && t.closest) {
          if (t.closest(".pi-leader-col") && page.leaderBadge && page.leaderBadge.name) {
            var l = leaderByName[page.leaderBadge.name.toLowerCase()];
            if (l) { openLeaderById(l.id); return; }
            navigateToNamedPage(page.leaderBadge.name); return;
          }
          if (t.closest(".pi-hex") && page.civName) {
            navigateToNamedPage(page.civName); return;
          }
        }
        pendingUnitAgeCtx = ageKey;
        navigateToPage(page, groupTitle, currentSectionId);
        syncActiveSidebarItem();
      });
      parent.appendChild(item);
    });
  }

  function findFirstGroupWithPages(groups) {
    for (var i = 0; i < groups.length; i += 1) {
      if (groupPageCount(groups[i]) > 0) return i;
    }
    return -1;
  }

  function groupHasActivePage(group) {
    if (!activePageId) return false;
    if ((group.pages || []).some(function (p) { return p.id === activePageId; })) return true;
    return (group.subgroups || []).some(subHasActivePage);
  }

  function syncActiveSidebarItem() {
    var items = sidebarEl.querySelectorAll(".page-item");
    items.forEach(function (item) {
      item.classList.toggle("active", item.dataset.pageId === activePageId);
    });
  }

  function setPageTitle(title) {
    if (pageTitleTextEl) pageTitleTextEl.textContent = title || "";
    else if (pageTitleEl) pageTitleEl.textContent = title || "";
  }

  function renderBreadcrumb() {
    var last = trail[trail.length - 1];
    setPageTitle(sectionLabel(last ? last.sectionId : currentSectionId));
  }

  // ---- page back / forward history -------------------------------------------
  // Every view the user opens (a content page, or a section index / home) is
  // pushed to navHist; the toolbar arrows step through it like a browser.
  // Replaying an entry must not re-record it, hence the navReplaying guard.
  // (navHist / navPos / navReplaying are declared with the other state vars.)
  function sameNavEntry(a, b) {
    if (!a || !b || a.kind !== b.kind) return false;
    if (a.kind === "section") return a.sectionId === b.sectionId;
    return a.page && b.page && a.page.id === b.page.id && a.sectionId === b.sectionId;
  }

  function recordNav(entry) {
    if (navReplaying) return;
    if (sameNavEntry(navHist[navPos], entry)) return;
    navHist = navHist.slice(0, navPos + 1);
    navHist.push(entry);
    if (navHist.length > NAV_HIST_MAX) navHist.shift();
    navPos = navHist.length - 1;
    updateNavArrows();
  }

  function updateNavArrows() {
    if (navPrevEl) navPrevEl.disabled = navPos <= 0;
    if (navNextEl) navNextEl.disabled = navPos >= navHist.length - 1;
  }

  function navRelative(delta) {
    var target = navHist[navPos + delta];
    if (!target) return;
    navPos += delta;
    navReplaying = true;
    try {
      if (target.kind === "section") {
        currentSectionId = target.sectionId;
        updateTabbarActive();
        renderSidebar();
        if (target.sectionId === "UNITS") renderUnitIndex();
        else renderSectionHome(target.sectionId);
      } else {
        if (target.sectionId !== currentSectionId) {
          currentSectionId = target.sectionId;
          updateTabbarActive();
          renderSidebar();
        }
        activePageId = target.page.id;
        unitPageAgeCtx = target.ageCtx || null;
        setPageTitle(sectionLabel(target.sectionId));
        renderPage(target.page, target.groupTitle, target.sectionId);
        syncActiveSidebarItem();
        closeMobileNav();
      }
    } finally {
      navReplaying = false;
    }
    updateNavArrows();
  }

  if (navPrevEl) navPrevEl.addEventListener("click", function () { navRelative(-1); });
  if (navNextEl) navNextEl.addEventListener("click", function () { navRelative(1); });

  function goHome() {
    var intro = findIntroEntry() || flatPages[0];
    if (!intro) return;

    currentSectionId = intro.sectionId;
    updateTabbarActive();
    renderSidebar();
    navigateToPage(intro.page, intro.groupTitle, intro.sectionId);
  }

  function findIntroEntry() {
    for (var i = 0; i < flatPages.length; i += 1) {
      if (flatPages[i].sectionId === "CONCEPTS" && flatPages[i].page.id === "INTRO") {
        return flatPages[i];
      }
    }
    return null;
  }

  function navigateToPage(page, groupTitle, sectionId) {
    activePageId = page.id;
    sectionId = sectionId || currentSectionId;
    unitPageAgeCtx = pendingUnitAgeCtx;
    pendingUnitAgeCtx = null;
    pushTrail(page, groupTitle, sectionId);
    recordNav({ kind: "page", page: page, groupTitle: groupTitle || "", sectionId: sectionId, ageCtx: unitPageAgeCtx });
    renderBreadcrumb();
    renderPage(page, groupTitle, sectionId);
    syncActiveSidebarItem();
    closeMobileNav();
  }

  function pushTrail(page, groupTitle, sectionId) {
    var last = trail[trail.length - 1];
    if (last && last.page.id === page.id && last.sectionId === sectionId) return;

    trail.push({ page: page, groupTitle: groupTitle || "", sectionId: sectionId });
    if (trail.length > TRAIL_MAX) {
      trail = trail.slice(trail.length - TRAIL_MAX);
    }
  }

  // The icon tables name a concept by its everyday word; the sidebar page
  // carries the game's longer title. Resolve the one to the other.
  var PAGE_ALIASES = {
    "production": "Production: Yield", "food": "Food: Yield", "gold": "Gold Income",
    "growth": "Growth Moment", "units": "Unit Types", "city": "Cities", "town": "Towns",
    "trade route": "Trade", "independent powers": "Befriending Independents",
    "social policies": "Policies: Basics", "traditions": "Policies: Traditions",
    "population": "Urban Population", "commander": "Army and Commanders",
    "fortification": "Fortifications", "quarters": "Buildings: Quarters",
    "resource": "Improve Resource", "influence": "Diplomacy and Influence",
    "diplomacy": "Diplomacy and Influence", "great work": "Great Works",
    "natural wonder": "Natural Wonders", "pillage": "Pillaging",
    "religion": "Religion Overview", "chevalier": "Chevaler",
    // a leader's Starting Biases name terrain words
    "coastal": "Marine", "coast": "Marine", "river": "Rivers", "navigable river": "Rivers",
    "flat": "Biomes, Features, and Terrain", "mountainous": "Biomes, Features, and Terrain",
    "vegetated": "Biomes, Features, and Terrain", "rough": "Biomes, Features, and Terrain",
    "lake": "Lakes"
  };
  function resolvePageTitle(title) {
    var n = String(title || "").toLowerCase();
    return PAGE_ALIASES[n] || String(title || "");
  }
  function findPageByTitle(title) {
    var normalized = resolvePageTitle(title).toLowerCase();
    for (var i = 0; i < flatPages.length; i += 1) {
      if (flatPages[i].page.title.toLowerCase() === normalized) {
        return flatPages[i];
      }
    }
    return null;
  }
  function renderPage(page, groupTitle, sectionId) {
    currentPageCtx = { page: page, groupTitle: groupTitle, sectionId: sectionId };
    var headerTitle = page.id === "INTRO" ? "Introduction" : page.title;
    var leaderMeta = getLeaderMetaForPage(page);
    var isBiome = page.layout === "Biome";
    var isTechTree = page.layout === "TechTree";
    var isPolicyList = page.layout === "CardList" || page.layout === "MementoList";
    var isResource = sectionId === "MAP" && !!RESOURCE_META[page.id];
    var isNaturalWonder = sectionId === "MAP" && !isResource && MEDIA[page.id] && MEDIA[page.id].portrait;
    var isUnit = sectionId === "UNITS" && !!UNIT_STATS[page.id];
    var isIntro = page.id === "INTRO";
    // A Belief page is only its card -- artwork, class heading and the effect.
    // Repeating the same sentence as a body chapter next to it said nothing, so
    // the card becomes the page and the two-column split is dropped.
    var isBelief = sectionId === "RELIGION" && (page.chapters || []).length > 0;
    // a General Concepts page is its text alone, headed by its title
    var isConcept = (sectionId === "CONCEPTS" || (sectionId === "AGES" && (groupTitle === "General Concepts" || groupTitle === "Victories"))) && !isIntro && !isPolicyList;
    var showAside = sectionId !== "AGES" && !isBiome && !isIntro && !isBelief && !isTechTree && !isPolicyList && !isConcept;
    var civExtra = sectionId === "CIVILIZATIONS" ? CIV_EXTRAS[page.id] : null;
    var mobile = isMobileNav();

    var html = '<div class="page-panel' + (civExtra || leaderMeta ? " page-panel--civ" : "") +
      (isIntro && (window.CIVPEDIA_SECTION_FAQ || {}).CONCEPTS ? " page-panel--faq" : "") + '">';
    // a civilization or leader page opens on its portrait card; the name is on the card
    // (a Wonder's name is written under its art instead)
    var isWonderCard = sectionId === "WONDERS" && !!(MEDIA[page.id] || {}).portrait;
    // a Technology / Civic writes its name under its disc, a Belief on its card
    var isNamedTech = (sectionId === "TECHNOLOGIES" || sectionId === "CULTURE") &&
      (!!(MEDIA[page.id] || {}).portrait || (sectionId === "CULTURE" && /_(FOUNDATION|HIERARCHY|ADMINISTRATION)$/.test(page.id))) ||
      // an Improvement or a Resource writes its name under its art too
      ((sectionId === "IMPROVEMENTS" || sectionId === "BUILDINGS") && !!(MEDIA[page.id] || {}).portrait) ||
      (sectionId === "MAP" && !!RESOURCE_META[page.id]) ||
      (sectionId === "GOVERNMENT" && !!governmentStats(page, groupTitle));
    var isMementoList = page.layout === "MementoList";
    if (!isIntro && !civExtra && !leaderMeta && !isConcept && !isWonderCard && !isNamedTech && !isBelief && !isBiome && !isNaturalWonder && !isUnit && !isMementoList) {
      html += '<div class="panel-header"><h2>' + escapeHtml(headerTitle.toUpperCase()) + "</h2></div>";
    }

    {
      html += '<div class="panel-shell' + (showAside ? "" : " panel-shell--full") + (isResource || (sectionId === "IMPROVEMENTS" && IMPROVEMENT_STATS[page.id]) || (sectionId === "BUILDINGS" && BUILDING_STATS[page.id]) || (sectionId === "GOVERNMENT" && governmentStats(page, groupTitle)) ? " panel-shell--flush" : "") + '">';
      var bodyHtml;
      if (isIntro) {
        bodyHtml = renderIntroBody(page);
      } else if (isTechTree) {
        bodyHtml = renderTechTreeBody(String(page.id).replace("TECH_TREE_", ""));
      } else if (isPolicyList) {
        // the Memento list is headed like a Historical Context chapter, not a panel bar
        bodyHtml = isMementoList ? '<section class="chapter mem-list-head"><h3 class="chapter-title"><span class="chapter-title-text">' +
          escapeHtml(page.title) + '</span>' + ornamentHtml() + '</h3></section>' + renderMementoListBody() : renderCardListBody();
      } else if (sectionId === "WONDERS" && WONDER_STATS[page.id]) {
        bodyHtml = renderWonderBody(page);
      } else if (sectionId === "IMPROVEMENTS" && IMPROVEMENT_STATS[page.id]) {
        bodyHtml = renderWonderBody(page);
      } else if (sectionId === "BUILDINGS" && BUILDING_STATS[page.id]) {
        bodyHtml = renderWonderBody(page);
      } else if (isBiome) {
        bodyHtml = renderHistoryOnlyBody(page);
      } else if (isNaturalWonder || isResource) {
        bodyHtml = renderNaturalWonderBody(page);
      } else if (isUnit) {
        bodyHtml = renderUnitBody(page);
      } else if ((sectionId === "TECHNOLOGIES" || sectionId === "CULTURE") && (techNode(page.id) || sectionId === "CULTURE")) {
        bodyHtml = renderTechBody(page);
      } else if (sectionId === "GOVERNMENT" && governmentStats(page, groupTitle)) {
        bodyHtml = renderTechBody(page);
      } else if (isBelief) {
        bodyHtml = '<div class="belief-solo">' +
          renderEntryCard(page, groupTitle, sectionId) + "</div>";
      } else if (isConcept) {
        bodyHtml = renderConceptBody(page);
      } else if (civExtra) {
        bodyHtml = renderCivBody(page, civExtra);
      } else if (leaderMeta) {
        bodyHtml = renderLeaderBody(page);
      } else {
        bodyHtml = renderChapters(page.chapters || [], !!leaderMeta, sectionId);
      }
      html += '<div class="panel-body">' + bodyHtml + "</div>";
      if (showAside) {
        if (leaderMeta) {
          html += renderLeaderEntryCard(page, leaderMeta);
        } else if (civExtra) {
          html += renderCivEntryCard(page, civExtra, groupTitle);
        } else {
          html += renderEntryCard(page, groupTitle, sectionId);
        }
      }
      html += "</div>";
    }
    // a leader's, civilization's or Wonder's loading-screen painting closes
    // the page, under Historical Context, rising out of the dark as it is
    // scrolled to (paintings.js, bindPaintReveal)
    var pageArt = PAGE_ART[page.id];
    var scene = pageArt ? pageArt.scene : ((window.CIVPEDIA_PAINTINGS || {}).scenes || {})[page.id];
    // a Building page closes on a render of a Civ VII building (building-scenes.js)
    // (Palace and City Hall are one page id in each Age: keyed by id@group, each Age has its own)
    if (!scene && sectionId === "BUILDINGS") {
      var bScenes = window.CIVPEDIA_BUILDING_SCENES || {};
      scene = (bScenes[page.id + "@" + page.group] || bScenes[page.id] || {}).src;
    }
    // ...and any other page on the picture scene-art.js gives it (concept
    // art, a photograph or a painting set into the app's key)
    if (!scene) {
      // (an Ages page shares its id and group with a General Concepts page:
      // "SECTION:ID" keeps their pictures apart)
      var sa = SCENE_ART[sectionId + ":" + page.id] || SCENE_ART[page.id + "@" + page.group] || SCENE_ART[page.id];
      if (sa && sa.src) { scene = sa.src; pageArt = { scene: sa.src, name: page.title || sa.name, aspect: sa.aspect }; }
    }
    if (scene) html += paintRevealHtml(scene, pageArt ? pageArt.name : (leaderMeta ? leaderMeta.name : page.title), pageArt);
    html += "</div>";

    contentEl.innerHTML = restoreGameRefs(html);
    // General Concepts pages and every Historical Context read as plain prose
    plainProse(contentEl.querySelectorAll(".chapter--plain .chapter-body" +
      (isConcept || isIntro || (sectionId === "AGES" && groupTitle === "General Concepts") ? ", .panel-body .chapter-body" : "")));
    contentEl.scrollTop = 0;
    bindTipHandlers();
    bindLinkedIconHandlers();
    bindGalleryHandlers();
    bindChapterAccordions();
    // an Age banner's height (whole on a desktop, the strip on a phone)
    contentEl.querySelectorAll(".age-acc > .age-acc-head--panel").forEach(sizeAgePanel);
    bindAccBoxes();
    bindCivicTrees();
    bindJourneys();
    bindPaintReveal();
    unwrapLongIconWords(contentEl);
    contentEl.querySelectorAll(".unit-variant[data-page-title]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        navigateToNamedPage(btn.getAttribute("data-page-title"));
      });
    });
    contentEl.querySelectorAll(".unit-variant[data-page-id], .unit-pvariant[data-page-id], .civ-unique-head--link[data-page-id], .unit-req-link[data-page-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var entry = findPageById(btn.getAttribute("data-page-id"));
        if (entry) navigateToPage(entry.page, entry.groupTitle, entry.sectionId);
      });
    });
    bindTechTreePopups();
    requestAnimationFrame(bindCivicTreeEdges);
    requestAnimationFrame(bindTechTreeEdges);
  }

  // ---- The painting at the end of a page (paintings.js scenes): the
  // leader's, civilization's or Wonder's loading-screen painting under
  // Historical Context. Scrolled down to, it rises out of the dark: light
  // spreads from the middle through drifting smoke with a warm rim on its
  // edge, the colour comes back, a slow zoom settles, a few embers rise; at
  // the end the name fades in under it. Drawn on a canvas -- the smoke is a
  // small noise field worked out each frame and scaled up (the painting is
  // only drawn, never read back, so a file:// page may use it). 3:2 on a
  // phone, 2:1 on a desktop.
  function paintRevealHtml(src, name, opts) {
    var aspect = opts && opts.aspect;
    var parts = aspect ? String(aspect).split("/") : null;
    // a tall or near-square picture keeps a small centred stage; a wide one
    // fills the page width at its own proportion
    var tall = parts && parseFloat(parts[0]) < parseFloat(parts[1]) * 1.2;
    return '<figure class="paint-reveal' + (aspect ? (tall ? ' paint-reveal--tall' : ' paint-reveal--own') : '') + '" data-src="' + attrEscape(src) + '"' +
      (opts && opts.focus != null ? ' data-focus="' + attrEscape(String(opts.focus)) + '"' : '') +
      (aspect ? ' style="--paint-aspect: ' + attrEscape(aspect) + '"' : '') + ' aria-hidden="true">' +
      '<div class="paint-reveal-stage"><canvas class="paint-reveal-canvas"></canvas></div>' +
      '<figcaption class="paint-reveal-cap"><span class="paint-reveal-name">' + escapeHtml(name) + '</span>' + ornamentHtml() + '</figcaption>' +
      '</figure>';
  }

  var PAINT_NOISE = null;
  var PAINT_NOISE_N = 64;
  function paintNoiseGrid() {
    if (PAINT_NOISE) return;
    var n = PAINT_NOISE_N, seed = 20260916;
    PAINT_NOISE = new Float32Array(n * n);
    for (var i = 0; i < n * n; i += 1) {
      seed = (seed * 16807) % 2147483647;
      PAINT_NOISE[i] = seed / 2147483647;
    }
  }
  // smooth value noise on the tiling grid, 0..1
  function paintNoise(x, y) {
    var g = PAINT_NOISE, n = PAINT_NOISE_N;
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var x0 = ((xi % n) + n) % n, y0 = ((yi % n) + n) % n, x1 = (x0 + 1) % n, y1 = (y0 + 1) % n;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    var a = g[y0 * n + x0], b = g[y0 * n + x1], c = g[y1 * n + x0], d = g[y1 * n + x1];
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  function paintFbm(x, y) {
    return paintNoise(x, y) * 0.5 + paintNoise(x * 2.03 + 17.1, y * 2.03 + 5.3) * 0.3 + paintNoise(x * 4.07 + 3.7, y * 4.07 + 11.9) * 0.2;
  }

  var EMBER_SPRITE = null;
  function emberSprite() {
    if (EMBER_SPRITE) return EMBER_SPRITE;
    var c = document.createElement("canvas");
    c.width = c.height = 32;
    var x = c.getContext("2d"), g = x.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, "rgba(255,238,196,1)");
    g.addColorStop(0.22, "rgba(255,196,118,0.85)");
    g.addColorStop(0.55, "rgba(255,136,56,0.22)");
    g.addColorStop(1, "rgba(255,120,40,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, 32, 32);
    EMBER_SPRITE = c;
    return c;
  }

  // (paintReveal and REDUCED_MOTION are declared near the top: the first page
  // is drawn before this point, and a "= null" here would drop its painting)

  function bindPaintReveal() {
    if (paintReveal) {
      paintReveal.dead = true;
      if (paintReveal.io) paintReveal.io.disconnect();
      if (paintReveal.raf) cancelAnimationFrame(paintReveal.raf);
      paintReveal = null;
    }
    var fig = contentEl.querySelector(".paint-reveal");
    if (!fig) return;
    var canvas = fig.querySelector("canvas");
    var ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    if (!ctx) { fig.remove(); return; }
    var S = paintReveal = {
      fig: fig, stage: fig.querySelector(".paint-reveal-stage"), canvas: canvas, ctx: ctx,
      q: REDUCED_MOTION ? 1 : 0, img: null, visible: false, raf: 0, last: 0, embers: [], dead: false, w: 0, h: 0
    };
    paintRevealBelowFold(S);
    // a picture above it that loads later (an Age emblem not yet cached) makes
    // the page taller: measure again so the gap stays the same on every page
    contentEl.querySelectorAll("img").forEach(function (im) {
      if (im.complete || !(im.compareDocumentPosition(fig) & Node.DOCUMENT_POSITION_FOLLOWING)) return;
      im.addEventListener("load", function () { if (!S.dead) paintRevealBelowFold(S); }, { once: true });
    });
    var img = new Image();
    img.onload = function () {
      if (S.dead) return;
      S.img = img;
      fig.classList.add("is-ready");
      paintRevealKick(S);
    };
    img.onerror = function () { if (!S.dead) fig.remove(); };
    var load = function () { if (!img.getAttribute("src")) img.src = fig.getAttribute("data-src"); };
    if (window.IntersectionObserver) {
      // loaded and drawn only when the page is scrolled near it
      S.io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          S.visible = en.isIntersecting;
          if (S.visible) { load(); paintRevealKick(S); }
        });
      }, { root: contentEl, rootMargin: "500px 0px 500px 0px" });
      S.io.observe(fig);
    } else {
      S.visible = true;
      load();
    }
  }

  // the painting always starts under the fold, however short the page: it is
  // pushed down until its top sits at the bottom edge of the page's view, so it
  // only ever comes up as the page is scrolled to it
  function paintRevealBelowFold(S) {
    S.fig.style.marginTop = "";
    var top = S.fig.getBoundingClientRect().top - contentEl.getBoundingClientRect().top + contentEl.scrollTop;
    var gap = contentEl.clientHeight - top;
    if (gap > 0) S.fig.style.marginTop = (gap + 4) + "px";
  }

  // the canvas and its layers for the stage's size: the painting cut to the
  // stage (a little larger, for the zoom) in colour and in the dark's grey,
  // and the smoke field (distance from the light plus two noise fields the
  // smoke drifts between) at a low resolution
  function paintRevealLayout(S) {
    var w = S.stage.clientWidth, h = S.stage.clientHeight;
    if (!w || !h || !S.img) return false;
    if (w === S.w && h === S.h) return true;
    S.w = w;
    S.h = h;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cw = S.canvas.width = Math.round(w * dpr);
    var ch = S.canvas.height = Math.round(h * dpr);
    var img = S.img, iw = img.naturalWidth, ih = img.naturalHeight, ca = cw / ch;
    var sw = iw, sh = ih, sx = 0, sy = 0;
    // a picture wider than the stage is cut at its centre, or where data-focus says (0..1)
    var fx = parseFloat(S.fig.getAttribute("data-focus"));
    if (iw / ih > ca) { sw = ih * ca; sx = (iw - sw) * (isNaN(fx) ? 0.5 : fx); } else { sh = iw / ca; sy = (ih - sh) * 0.4; }
    var pw = Math.round(cw * 1.12), ph = Math.round(ch * 1.12);
    S.col = document.createElement("canvas");
    S.col.width = pw;
    S.col.height = ph;
    S.col.getContext("2d").drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph);
    S.grey = document.createElement("canvas");
    S.grey.width = pw;
    S.grey.height = ph;
    var gx = S.grey.getContext("2d");
    if ("filter" in gx) {
      gx.filter = "grayscale(0.85) brightness(0.48) contrast(1.12)";
      gx.drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph);
    } else {
      gx.drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph);
      gx.fillStyle = "rgba(6,8,12,0.55)";
      gx.fillRect(0, 0, pw, ph);
    }
    paintNoiseGrid();
    var MH = 60, MW = Math.max(60, Math.round(MH * w / h));
    S.mw = MW;
    S.mh = MH;
    S.mask = document.createElement("canvas");
    S.mask.width = MW;
    S.mask.height = MH;
    S.mctx = S.mask.getContext("2d");
    S.mdata = S.mctx.createImageData(MW, MH);
    S.glow = document.createElement("canvas");
    S.glow.width = MW;
    S.glow.height = MH;
    S.gctx = S.glow.getContext("2d");
    S.gdata = S.gctx.createImageData(MW, MH);
    var n = MW * MH, aspect = w / h, fx = 0.5, fy = 0.45;
    var maxd = Math.sqrt(Math.pow(0.5 * aspect, 2) + Math.pow(0.55, 2));
    S.base = new Float32Array(n);
    S.f1 = new Float32Array(n);
    S.f2 = new Float32Array(n);
    for (var y = 0; y < MH; y += 1) {
      for (var x = 0; x < MW; x += 1) {
        var u = (x + 0.5) / MW, v = (y + 0.5) / MH, i = y * MW + x;
        var dx = (u - fx) * aspect, dy = v - fy;
        S.base[i] = Math.sqrt(dx * dx + dy * dy) / maxd;
        S.f1[i] = paintFbm(u * 3 * aspect, v * 3);
        S.f2[i] = paintFbm(u * 3 * aspect + 41.3, v * 3 + 17.7);
      }
    }
    return true;
  }

  // how far the painting has come into the screen: nothing while its top
  // edge is below the screen, all of it by the time its bottom is in view
  function paintRevealTarget(S) {
    if (REDUCED_MOTION) return 1;
    var vr = contentEl.getBoundingClientRect();
    var r = S.stage.getBoundingClientRect();
    if (!r.height) return 0;
    var p = (vr.bottom - r.top - 0.12 * r.height) / (0.8 * r.height);
    return p < 0 ? 0 : p > 1 ? 1 : p;
  }

  function paintRevealKick(S) {
    if (!S || S.dead || S.raf || !S.img) return;
    S.last = 0;
    S.raf = requestAnimationFrame(function (t) { paintRevealFrame(S, t); });
  }

  function paintRevealFrame(S, now) {
    S.raf = 0;
    if (S.dead || !S.fig.isConnected) return;
    if (!paintRevealLayout(S)) return;
    var dt = S.last ? Math.min(0.1, (now - S.last) / 1000) : 1 / 60;
    S.last = now;
    var target = paintRevealTarget(S);
    // the light follows the scroll with a little lag, so it flows
    S.q += (target - S.q) * (1 - Math.exp(-dt * 2.4));
    if (Math.abs(target - S.q) < 0.002) S.q = target;
    paintRevealDraw(S, now / 1000, dt);
    S.fig.style.setProperty("--reveal", S.q.toFixed(3));
    var moving = S.q !== target || (S.q > 0 && S.q < 1) || S.embers.length > 0;
    if (moving && S.visible) S.raf = requestAnimationFrame(function (t) { paintRevealFrame(S, t); });
  }

  function paintRevealDraw(S, t, dt) {
    var ctx = S.ctx, cw = S.canvas.width, ch = S.canvas.height;
    var q = S.q, e = q * q * (3 - 2 * q);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#07090d";
    ctx.fillRect(0, 0, cw, ch);
    // the painting settles from a slow zoom and rises a little; the grey of
    // the dark gives way to its colour
    var z = 1.12 - 0.12 * e;
    var dw = cw * z, dh = ch * z;
    var dx = (cw - dw) / 2, dy = (ch - dh) * 0.45 + (1 - e) * ch * 0.025;
    if (e < 1) ctx.drawImage(S.grey, dx, dy, dw, dh);
    if (e > 0) {
      ctx.globalAlpha = e;
      ctx.drawImage(S.col, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    }
    if (q < 1) {
      // the dark and its smoke; the light's front is where the field
      // crosses the threshold, with the warm rim just outside it
      var MW = S.mw, MH = S.mh, md = S.mdata.data, gd = S.gdata.data;
      var T0 = S.solid ? -0.62 : -0.3, T = T0 + e * (1.38 - T0), W = 0.14, rim = Math.pow(1 - e, 0.85);
      var veil = S.solid ? 1 - 0.14 * Math.min(1, q * 3) : 0.86;   // the veil's least alpha
      var mix = 0.5 + 0.5 * Math.sin(t * 0.3);
      var born = S.embers.length < 13 && q > 0.04 && q < 0.96 ? 0.002 : 0;
      for (var y = 0; y < MH; y += 1) {
        for (var x = 0; x < MW; x += 1) {
          var i = y * MW + x, o = i * 4;
          var smoke = paintNoise(x * 0.13 + t * 0.2, y * 0.13 - t * 0.07);
          var fv = S.base[i] * 0.9 + (S.f1[i] * mix + S.f2[i] * (1 - mix) - 0.5) * 0.8 + (smoke - 0.5) * 0.14;
          var d = (fv - T + W) / (2 * W);
          d = d <= 0 ? 0 : d >= 1 ? 1 : d * d * (3 - 2 * d);
          md[o] = 7;
          md[o + 1] = 9;
          md[o + 2] = 13;
          md[o + 3] = 255 * d * (veil + (1 - veil) * smoke);
          var g = (fv - T - 0.03) / 0.085;
          g = Math.exp(-g * g) * rim;
          gd[o] = 255;
          gd[o + 1] = 214;
          gd[o + 2] = 158;
          gd[o + 3] = 255 * g;
          if (born && g > 0.55 && Math.random() < born) {
            S.embers.push({ x: (x + 0.5) / MW, y: (y + 0.5) / MH, vx: (Math.random() - 0.5) * 0.03, vy: -(0.035 + Math.random() * 0.06), life: 1, s: 0.5 + Math.random() });
          }
        }
      }
      S.mctx.putImageData(S.mdata, 0, 0);
      S.gctx.putImageData(S.gdata, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(S.mask, 0, 0, cw, ch);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.26;
      ctx.drawImage(S.glow, 0, 0, cw, ch);
      ctx.globalAlpha = 1;
      // a soft shaft of light crosses while the painting rises
      var shaft = Math.sin(Math.PI * e) * 0.09;
      if (shaft > 0.005) {
        var sx0 = cw * (-0.35 + e * 1.2);
        var lg = ctx.createLinearGradient(sx0, 0, sx0 + cw * 0.45, ch);
        lg.addColorStop(0, "rgba(255,215,150,0)");
        lg.addColorStop(0.5, "rgba(255,215,150," + shaft.toFixed(3) + ")");
        lg.addColorStop(1, "rgba(255,215,150,0)");
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, cw, ch);
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (S.embers.length) {
      var sprite = emberSprite(), size = ch * 0.013;
      ctx.globalCompositeOperation = "lighter";
      S.embers = S.embers.filter(function (p) {
        p.life -= dt * 0.55;
        if (p.life <= 0) return false;
        p.x += (p.vx + Math.sin(t * 1.7 + p.y * 18) * 0.012) * dt;
        p.y += p.vy * dt;
        var s = size * p.s * (0.5 + 0.5 * p.life);
        ctx.globalAlpha = Math.min(1, p.life * 1.6) * 0.55;
        ctx.drawImage(sprite, p.x * cw - s, p.y * ch - s, s * 2, s * 2);
        return true;
      });
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }
  }

  contentEl.addEventListener("scroll", function () { if (paintReveal) paintRevealKick(paintReveal); }, { passive: true });
  window.addEventListener("resize", function () {
    if (paintReveal) { paintRevealBelowFold(paintReveal); paintRevealKick(paintReveal); }
  });

  var civicEdgeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(civicEdgeTimer);
    civicEdgeTimer = setTimeout(function () {
      closeCivicPopups(null);
      bindCivicTreeEdges();
      bindTechTreeEdges();
    }, 150);
    updateTabbarIndicator();
  });

  // On a civilization page one section is open at a time: opening a card
  // box or a chapter closes the others (the Ability and Traditions boxes
  // are always open and take no part)
  function closeOtherCivSections(box) {
    var panel = box.closest(".page-panel--civ");
    if (!panel) return;
    panel.querySelectorAll(".civ-box:not(.civ-ability-box):not(.civ-box--static), .chapter-accordion").forEach(function (sec) {
      if (sec === box || sec.contains(box) || sec.classList.contains("collapsed")) return;
      sec.classList.add("collapsed");
      var h = sec.querySelector(":scope > .civ-box-title, :scope > .chapter-title");
      if (h && h.hasAttribute("aria-expanded")) h.setAttribute("aria-expanded", "false");
    });
    // and any open Age banner outside it (the `--always` list keeps its own)
    panel.querySelectorAll(".age-acc:not(.collapsed)").forEach(function (acc) {
      if (acc === box || acc.contains(box) || box.contains(acc) || acc.parentNode.classList.contains("acc-exclusive--always")) return;
      acc.classList.add("collapsed");
      var h = acc.querySelector(":scope > .age-acc-head");
      if (h) { h.setAttribute("aria-expanded", "false"); sizeAgePanel(h); }
    });
  }

  function bindChapterAccordions() {
    var titles = contentEl.querySelectorAll(".chapter-accordion > .chapter-title");
    titles.forEach(function (title) {
      var box = title.parentNode;
      // `--toggle` sections collapse/expand on every viewport; the rest only
      // behave as accordions on mobile.
      var always = box.classList.contains("chapter-accordion--toggle");
      if (isMobileNav() && !always) box.classList.add("collapsed");
      function toggle() {
        if (!always && !isMobileNav()) return;
        box.classList.toggle("collapsed");
        // a guide's questions: one open at a time
        if (!box.classList.contains("collapsed") && box.classList.contains("chapter--faq")) {
          (box.closest(".page-panel") || contentEl).querySelectorAll(".chapter--faq:not(.collapsed)").forEach(function (sib) {
            if (sib === box) return;
            sib.classList.add("collapsed");
            var h = sib.querySelector(":scope > .chapter-title");
            if (h && h.hasAttribute("aria-expanded")) h.setAttribute("aria-expanded", "false");
          });
        }
        if (!box.classList.contains("collapsed")) closeOtherCivSections(box);
        if (!box.classList.contains("collapsed") && box.querySelector(".tt-graph")) {
          requestAnimationFrame(bindTechTreeEdges);
        }
      }
      title.addEventListener("click", toggle);
      title.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      });
    });
    // the civ card's boxes (the static ones -- Traditions -- have no button)
    contentEl.querySelectorAll(".civ-box > .civ-box-title:not(.civ-box-title--static)").forEach(function (head) {
      function toggle() {
        var box = head.parentNode;
        box.classList.toggle("collapsed");
        head.setAttribute("aria-expanded", box.classList.contains("collapsed") ? "false" : "true");
        if (!box.classList.contains("collapsed")) closeOtherCivSections(box);
        if (!box.classList.contains("collapsed") && box.querySelector(".tt-graph")) {
          requestAnimationFrame(bindTechTreeEdges);
        }
      }
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      });
    });
    // the Civ Ability's and Traditions' Age sections; inside an
    // `.acc-exclusive` holder one section is open at a time -- opening
    // one closes the others (the card list's Age panels and its civs)
    contentEl.querySelectorAll(".age-acc > .age-acc-head").forEach(function (head) {
      function close(sib, box) {
        if (sib === box || !sib.classList.contains("age-acc") || sib.classList.contains("collapsed")) return;
        sib.classList.add("collapsed");
        var h = sib.querySelector(":scope > .age-acc-head");
        if (h) { h.setAttribute("aria-expanded", "false"); sizeAgePanel(h); }
      }
      function toggle() {
        var box = head.parentNode;
        box.classList.toggle("collapsed");
        head.setAttribute("aria-expanded", box.classList.contains("collapsed") ? "false" : "true");
        sizeAgePanel(head);
        // the card list: a section opens with every strip inside it closed
        if (!box.classList.contains("collapsed")) {
          box.querySelectorAll(".card-cat:not(.collapsed)").forEach(function (sub) {
            sub.classList.add("collapsed");
            var h = sub.querySelector(":scope > .age-acc-head");
            if (h) h.setAttribute("aria-expanded", "false");
          });
        }
        if (box.classList.contains("collapsed")) return;
        // a civilization or leader page: one Age banner open on the whole
        // page, at every width -- the Civ Ability's and the Traditions'
        // banners close each other, and so does any other open section.
        // (a holder marked `--always` keeps one open of its own: the
        // civilizations under Civ Syncretism & Paths, which take no part)
        var panel = box.closest(".page-panel--civ");
        if (panel && !box.parentNode.classList.contains("acc-exclusive--always")) {
          panel.querySelectorAll(".age-acc").forEach(function (sib) {
            if (sib.contains(box) || sib.parentNode.classList.contains("acc-exclusive--always")) return;
            close(sib, box);
          });
          closeOtherCivSections(box);
          return;
        }
        if (box.parentNode.classList.contains("acc-exclusive")) {
          Array.prototype.forEach.call(box.parentNode.children, function (sib) { close(sib, box); });
        }
      }
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      });
    });
  }

  // An Age panel's head: closed, a 26px strip showing the Age's name; open,
  // the whole banner (1000 x 263) -- its height set in px so the change
  // animates. The strip's crop and the timing live in style.css.
  var AGE_PANEL_RATIO = 263 / 1000;
  // On a desktop the banner shows whole even while its Age is closed (a tap
  // still opens and closes the Age); on a phone a closed Age is the strip.
  function sizeAgePanel(head) {
    if (!head.classList.contains("age-acc-head--panel")) return;
    // (a civilization's page and the Units home keep the thin strip at every width)
    var open = !head.parentNode.classList.contains("collapsed") || (!isMobileNav() && !head.closest(".page-panel--civ, .unit-index-panel, .pol-list-body"));
    head.style.height = open ? Math.round(head.clientWidth * AGE_PANEL_RATIO) + "px" : "";
  }
  window.addEventListener("resize", function () {
    document.querySelectorAll(".age-acc > .age-acc-head--panel").forEach(sizeAgePanel);
  });

  // Mobile: a single stacked list of collapsible boxes (leader / civ pages).
  function bindAccBoxes() {
    contentEl.querySelectorAll(".acc-box > .acc-head").forEach(function (head) {
      function toggle() {
        var box = head.parentNode;
        box.classList.toggle("collapsed");
        if (!box.classList.contains("collapsed") && box.querySelector(".civic-tree-graph")) {
          requestAnimationFrame(bindCivicTreeEdges);
        }
      }
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      });
    });
  }

  function accBoxHtml(sec) {
    var body = sec.body && String(sec.body).trim() ? sec.body : '<span class="leader-none">None</span>';
    return '<section class="acc-box collapsed" data-acc="' + attrEscape(sec.id) + '">' +
      '<h3 class="acc-head" role="button" tabindex="0">' +
        '<span class="acc-head-text">' + escapeHtml(String(sec.title).toUpperCase()) + "</span>" +
        ornamentHtml() +
      "</h3>" +
      '<div class="acc-body">' +
        (sec.sub ? '<div class="acc-subname"><span>' + escapeHtml(sec.sub) + "</span></div>" : "") +
        body +
      "</div></section>";
  }

  function hasItems(arr) {
    return (arr || []).some(function (v) { return v != null && String(v).trim() !== ""; });
  }

  // Compact horizontal attribute chips shown inside the emblem box (mobile).
  function attrChipsHtml(attrs) {
    attrs = (attrs || []).filter(function (a) { return a != null && String(a).trim() !== ""; });
    if (!attrs.length) return "";
    return '<div class="m-attrs">' + attrs.map(function (a) {
      var label = String(a).replace(/\s*\(\d+\)\s*$/, "");
      return '<span class="m-attr">' +
        '<img class="m-attr-icon" alt="" src="images/icons/attribute_' + iconSlug(label) +
        '.png" onerror="this.remove()"><span>' + escapeHtml(label) + "</span></span>";
    }).join("") + "</div>";
  }

  // A General Concepts page: the title heads the first chapter in the
  // Historical Context style, every further chapter under its own heading,
  // all open; a page with a badge (the Policies pages) shows it first
  function renderConceptBody(page) {
    var media = CONCEPT_MEDIA[page.id];
    var out = "";
    if (media && media.portrait) {
      out += '<div class="concept-badge entry-emblem entry-emblem-photo tech-emblem' +
        (media.link ? ' entry-emblem--link civ-unique-head--link" data-page-id="' + attrEscape(media.link) + '" title="' + attrEscape(media.linkTitle || "") : '') +
        '"><img class="entry-portrait" src="' + attrEscape(media.portrait) + '" alt="' + attrEscape(media.portraitAlt || page.title) + '">' +
        // the page's own title under the badge, underlined like every other
        // name that opens a page, so the badge reads as a link
        (media.link ? '<span class="concept-badge-link">' + escapeHtml(page.title) + '</span>' : '') +
        '</div>';
    }
    (page.chapters || []).forEach(function (c, i) {
      // (a page with a linked badge carries its title there, not over the text)
      if (i === 0 && media && media.link) {
        out += '<section class="chapter"><div class="chapter-body">' + chapterBodyHtml(c) + '</div></section>';
        return;
      }
      var title = i === 0 ? page.title : (c.title || "");
      out += chapterSectionHtml(String(title).toUpperCase(), chapterBodyHtml(c), i === 0 ? "static" : "sub");
    });
    return '<div class="concept-page">' + out + '</div>';
  }

  function chapterBodyHtml(chapter) {
    var out = "";
    (chapter.paragraphs || []).forEach(function (para) {
      out += renderParagraphMarkup(para);
    });
    if (chapter.leaders && chapter.leaders.length) {
      out += renderLeaderSynergyBody(chapter.leaders);
    }
    return out;
  }

  // Leader-synergy rows for the "Civ Mechanics and Strategy" chapter — same
  // collapsible-row pattern as Traditions (round emblem + name, click to open),
  // just with a leader portrait in the ring instead of the tradition scroll icon.
  function renderLeaderSynergyBody(leaders) {
    var html = '<div class="age-sub"><span>Leaders</span>' + ornamentHtml() + '</div><div class="tradition-list leader-list">';
    leaders.forEach(function (l) {
      var src = l.icon || (l.id ? "images/leaders/icons/" + l.id + ".png" : "");
      html += '<div class="tradition-item leader-item">' +
        '<button class="tradition-head" type="button" aria-expanded="false">' +
          itemEmblem(src, "civic-emblem-sm civic-emblem-photo") +
          '<span class="tradition-name">' + escapeHtml(l.name) + '</span>' +
        '</button>' +
        '<div class="tradition-detail"><div class="civic-detail-inner">' +
          (l.synergy ? statText(l.synergy, true) : '<p class="civic-none">No notes.</p>') +
        '</div></div>' +
      '</div>';
    });
    return html + '</div>';
  }

  function renderLeaderMobile(page, leader) {
    var media = MEDIA[page.id] || {};
    var portrait = media.portrait || leader.portrait;
    var lore = LEADER_LORE[leader.id] || {};
    var extras = LEADER_EXTRAS[leader.id] || {};

    var html = '<div class="mobile-stack">';
    // the game's loading-screen introduction takes the quote box; the
    // leader's own quotation then sits under the portrait as its caption
    var intro = (INTRO_TEXT.leaders || {})[leader.id] || "";
    var caption = intro && lore.quote
      ? '<div class="emblem-caption"><span class="emblem-caption-text">&ldquo;' + escapeHtml(lore.quote) + '&rdquo;</span>' +
        '<span class="emblem-caption-name">' + escapeHtml(leader.name) + '</span></div>'
      : "";
    html += '<div class="m-emblem">';
    if (portrait) {
      html += '<div class="m-emblem-photo' + (caption ? ' has-caption' : '') + '"><img src="' + attrEscape(portrait) + '" alt="' +
        attrEscape(media.portraitAlt || leader.name) + '">' + caption + '</div>';
    } else {
      html += '<div class="m-emblem-mono"><span>' + escapeHtml(initials(leader.name)) + "</span>" + caption + "</div>";
    }
    html += '<div class="m-quote">' + ornamentHtml();
    if (intro) {
      html += '<p class="leader-quote-text intro-text">' + escapeHtml(intro) + '</p>';
    } else {
      if (lore.quote) {
        html += '<p class="leader-quote-text">&ldquo;' + escapeHtml(lore.quote) + "&rdquo;</p>";
      }
      html += '<p class="leader-quote-name">' + escapeHtml(leader.name) + "</p>";
    }
    html += attrChipsHtml(leader.attributes);
    html += "</div></div>";

    var biases = extras.biases || leader.startingBiases;
    var uniqueItems = leader.unique && leader.unique.items;

    var secs = [
      { id: "ABILITY", title: "Leader Ability",
        sub: lore.abilityName || (leader.ability && leader.ability.name),
        body: statText(valueOrNone(lore.abilityDesc || (leader.ability && leader.ability.description)), true) },
      { id: "AGENDA", title: "Leader Agenda",
        sub: lore.agendaName || (leader.agenda && leader.agenda.name),
        body: statText(valueOrNone(lore.agendaDesc || (leader.agenda && leader.agenda.description)), true) },
      { id: "SYNCRETISM", title: "Civ Syncretism",
        body: syncretismInnerHtml(extras.syncretism || leader.civSyncretismAndUnlocks) }
    ];
    if (hasItems(uniqueItems)) {
      secs.push({ id: "UNIQUE", title: "Unique", body: renderLinkedList(uniqueItems, null) });
    }
    if (hasItems(biases)) {
      secs.push({ id: "BIASES", title: "Starting Biases",
        body: renderLinkedList(biases, null, null, null, "rows-biome") });
    }
    secs.push({ id: "MEMENTOS", title: "Mementos",
      body: renderLinkedList(extras.mementos || leader.mementos, null, "images/mementos/", null, "rows-lg") });
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "HISTORY") {
        secs.push({ id: "HISTORY", title: "Historical Context", body: chapterBodyHtml(c) });
      }
    });

    secs.forEach(function (sec) { html += accBoxHtml(sec); });
    return html + "</div>";
  }

  function renderCivMobile(page, extra) {
    var html = '<div class="mobile-stack">';
    html += '<div class="m-emblem civ">';
    if (extra.logo) {
      html += '<div class="m-emblem-photo civ"><img src="' + attrEscape(extra.logo) + '" alt="' +
        attrEscape(extra.name) + '" onerror="this.closest(&quot;.m-emblem-photo&quot;).remove()"></div>';
    }
    html += '<div class="m-emblem-foot">' + ornamentHtml() + "</div></div>";

    var secs = [];
    var traits = extra.traits || extra.uniques || [];
    if (traits.length) {
      var tbody = "";
      traits.forEach(function (u) { tbody += renderCivUniqueEntry(u); });
      secs.push({ id: "TRAITS", title: "Traits", body: tbody });
    }
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "ABILITY") {
        secs.push({ id: "ABILITY", title: "Civ Ability", sub: c.title || "", body: chapterBodyHtml(c) });
      } else if (c.chapter_id === "STRATEGY") {
        secs.push({ id: "STRATEGY", title: c.title || "Mechanics and Strategy", body: chapterBodyHtml(c) });
      } else if (c.chapter_id === "TIPS") {
        secs.push({ id: "TIPS", title: c.title || "Tips & Hints", body: chapterBodyHtml(c) });
      } else if (c.chapter_id === "HISTORY") {
        secs.push({ id: "HISTORY", title: "Historical Context", body: chapterBodyHtml(c) });
      }
    });

    var civicData = CIV_CIVICS[page.id];
    if (civicData && civicData.civics && civicData.civics.length) {
      secs.push({ id: "CIVICS", title: civicSectionTitle(civicData),
        body: renderCivicsBody(civicData, extra.logo || "", extra) });
    }
    if (civicData && civicData.traditions && civicData.traditions.length) {
      secs.push({ id: "TRADITIONS", title: "Traditions", body: renderTraditionsBody(civicData) });
    }

    secs.forEach(function (sec) { html += accBoxHtml(sec); });
    return html + "</div>";
  }

  // --- Civics tree + Traditions (from game data) -------------------------------

  // Small glyph shown before each unlock line, keyed by the unlock kind. The game
  // shows a bespoke icon per item; the app only ships a stable set of kind icons,
  // so we use those (consistent, always present).
  function civicUnlockIconSrc(kind) {
    switch (String(kind || "").toLowerCase()) {
      case "tradition": return "images/icons/tradition.png";
      case "wonder": return "images/icons/wonder.png";
      case "building": return "images/icons/city_building_list.png";
      case "improvement": return "images/icons/city_rural.png";
      case "unit": return "images/icons/unit.png";
      case "bonus": return "images/icons/nar_rew_tradition_slot.png";
      default: return "images/icons/radial_civics.png";
    }
  }

  // Pull the verbatim game description for an unlock: traditions from the civ's
  // own tradition list, unique buildings/improvements from CIV_EXTRAS traits.
  function civicUnlockDesc(u, data, extra) {
    var name = String(u.name || "").toLowerCase();
    if (/tradition/i.test(u.kind)) {
      var t = (data.traditions || []).filter(function (x) {
        return String(x.name || "").toLowerCase() === name;
      })[0];
      return (t && t.desc) || "";
    }
    var traits = (extra && (extra.traits || extra.uniques)) || [];
    var m = traits.filter(function (x) {
      return String(x.name || "").toLowerCase() === name;
    })[0];
    return (m && m.desc) || "";
  }

  // The item's own art, if the app ships one (unique buildings / improvements /
  // units carry an icon in CIV_EXTRAS, or a file under images/civ-uniques/).
  // Title -> portrait, from every page that has one. Buildings, Improvements
  // and Wonders each keep their art in their own folder now, so guessing
  // "images/civ-uniques/<slug>.png" missed them; look the real file up first.
  var PORTRAIT_BY_TITLE = null;
  function portraitByTitle(name) {
    if (!PORTRAIT_BY_TITLE) {
      PORTRAIT_BY_TITLE = {};
      (flatPages || []).forEach(function (e) {
        var src = (MEDIA[e.page.id] || {}).portrait;
        var t = String(e.page.title || "").toLowerCase();
        if (src && t && !PORTRAIT_BY_TITLE[t]) PORTRAIT_BY_TITLE[t] = src;
      });
    }
    return PORTRAIT_BY_TITLE[String(name || "").toLowerCase()] || "";
  }

  // Word characters for name matching. \w stops at ASCII, and plenty of these
  // names are not ASCII (Ginkō, Örtöö, Casa de Contratación, K'uh Nah).
  var NAME_WORD = "A-Za-z0-9_\\u00C0-\\u024F\\u1E00-\\u1EFF";

  // Is there a page by this exact title? (Used before turning a name into a
  // link -- a data-page-title that resolves to nothing is a dead click.)
  var PAGE_TITLE_SET = null;
  function pageTitleExists(name) {
    if (!PAGE_TITLE_SET && flatPages && flatPages.length) {
      PAGE_TITLE_SET = {};
      flatPages.forEach(function (e) {
        PAGE_TITLE_SET[String(e.page.title || "").toLowerCase()] = true;
      });
    }
    if (!PAGE_TITLE_SET) return true;      // not built yet: keep the link
    return !!PAGE_TITLE_SET[resolvePageTitle(name).toLowerCase()];
  }

  // Mint an [icon:...] token for a page that has its own artwork, so a named
  // Building can be written into prose with its own art instead of the generic
  // glyph linkifyUnitConcepts would reach for ("Temple" inside "Temple of
  // Jupiter"). Same trick buildingTips() uses for a civ's unique infrastructure.
  function namedBuildingIcon(name) {
    var src = portraitByTitle(name);
    if (!src) return "";
    var token = "BLDG_" + String(name).toUpperCase()
      .replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    ICON_META[token] = { label: name, img: src.replace(/^images\//, "../"), page: name };
    return token;
  }

  function civicUnlockItemIcon(u, extra) {
    var name = String(u.name || "").toLowerCase();
    var traits = (extra && (extra.traits || extra.uniques)) || [];
    var m = traits.filter(function (x) {
      return String(x.name || "").toLowerCase() === name;
    })[0];
    if (m && m.icon) return m.icon;
    var known = portraitByTitle(u.name);
    if (known) return known;
    if (/wonder|building|improvement|unit/i.test(u.kind || "")) {
      return "images/civ-uniques/" + iconSlug(u.name) + ".png";
    }
    return "";
  }

  // Row layout: [generic kind icon] KIND [item icon] Name — matching the game's
  // civic tooltip (a category glyph, then the specific reward's own icon).
  function civicUnlockHtml(u, data, extra) {
    var kindSrc = civicUnlockIconSrc(u.kind);
    var itemSrc = civicUnlockItemIcon(u, extra);
    var desc = civicUnlockDesc(u, data, extra);
    var itemImg = itemSrc
      ? '<img class="civic-unlock-item-icon" alt="" src="' + attrEscape(itemSrc) +
        '" onerror="this.remove()"> '
      : "";
    return '<li class="civic-unlock">' +
      '<img class="civic-unlock-kind-icon" alt="" src="' + attrEscape(kindSrc) +
        '" onerror="this.closest(\'.civic-unlock\').classList.add(\'noimg\')">' +
      '<div class="civic-unlock-body">' +
        '<div class="civic-unlock-line">' +
          '<span class="civic-kind">' + escapeHtml(u.kind) + '</span>' +
          itemImg +
          '<span class="civic-unlock-name">' + richText(u.name) + '</span>' +
        '</div>' +
        (desc ? '<div class="civic-unlock-desc">' + renderParagraphMarkup(desc) + '</div>' : '') +
      '</div>' +
      '</li>';
  }

  function civicCostHtml(cost) {
    return "";                                   // (a cost is shown on Unit pages only)
    if (!cost) return "";
    return '<span class="civic-node-cost">' + escapeHtml(String(cost)) +
      ' <span class="inline-icon inline-icon-culture" aria-hidden="true">' +
      '<img class="inline-icon-img" alt="" src="images/icons/yield_culture.png" onerror="this.closest(&quot;.inline-icon&quot;).classList.add(&quot;noimg&quot;)">' +
      '<span class="inline-icon-glyph">C</span></span></span>';
  }

  var CIVIC_AGES = ["Antiquity", "Exploration", "Modern"];

  function civicNodeHtml(n, i, data, extra, emblem) {
    var unlocks = (n.unlocks || []).map(function (u) {
      return civicUnlockHtml(u, data, extra);
    }).join("");
    return '<div class="civic-node" data-civic-index="' + i + '">' +
      '<button class="civic-node-head" type="button" aria-expanded="false">' +
        '<span class="civic-emblem"><img alt="" src="' + attrEscape(emblem) +
          '" onerror="this.closest(&quot;.civic-emblem&quot;).classList.add(&quot;noimg&quot;)"></span>' +
        '<span class="civic-node-name">' + escapeHtml(n.name) + '</span>' +
        civicCostHtml(n.cost) +
      '</button>' +
      '<div class="civic-node-popup" role="dialog">' +
        '<div class="civic-popup-title">' + escapeHtml(n.name) + '</div>' +
        '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div>' +
        (unlocks ? '<ul class="civic-unlocks">' + unlocks + '</ul>'
                 : '<p class="civic-none">No unlocks listed.</p>') +
      '</div>' +
    '</div>';
  }

  // One top-to-bottom chain of round civ-emblem nodes per Age, laid out side by
  // side (like the in-game civic tree). Clicking a node opens a floating info card.
  // The section heading ("Unique Aksumite Civics") is the accordion / chapter
  // title itself - see civicSectionTitle - so the body carries no heading.
  function civicSectionTitle(data) {
    return (data && data.treeName) ? ("Unique " + data.treeName) : "Civics";
  }

  // Draw the civ's unique civic tree as the branching graph it actually is
  // (left → right by prerequisite depth, like the in-game civic screen).
  // Connector lines are drawn as a measured SVG overlay by bindCivicTreeEdges().
  function renderCivicsBody(data, logo, extra) {
    var nodes = (data.civics || []).slice();
    var emblem = logo || "images/icons/civics.png";
    if (!nodes.length) return '<p class="civic-none">No civics listed.</p>';

    var byName = {};
    nodes.forEach(function (n) { byName[n.name] = n; });

    var depthCache = {};
    function depthOf(n) {
      if (depthCache[n.name] != null) return depthCache[n.name];
      depthCache[n.name] = 0; // cycle guard
      var pres = (n.prereqs || []).filter(function (p) { return byName[p]; });
      var d = pres.length
        ? 1 + Math.max.apply(null, pres.map(function (p) { return depthOf(byName[p]); }))
        : 0;
      depthCache[n.name] = d;
      return d;
    }
    nodes.forEach(depthOf);

    var maxD = 0;
    nodes.forEach(function (n) { maxD = Math.max(maxD, depthCache[n.name]); });
    var cols = [];
    for (var d = 0; d <= maxD; d += 1) cols.push([]);
    nodes.forEach(function (n) { cols[depthCache[n.name]].push(n); });

    var idx = 0;
    var colsHtml = cols.map(function (col) {
      var cells = col.map(function (n) {
        return '<div class="civic-tree-node" data-node-name="' + attrEscape(n.name) +
          '" data-prereqs="' + attrEscape((n.prereqs || []).join("|")) + '">' +
          civicNodeHtml(n, idx++, data, extra, emblem) + "</div>";
      }).join("");
      return '<div class="civic-tree-col">' + cells + "</div>";
    }).join("");

    return '<div class="civic-tree-scroll"><div class="civic-tree-graph">' +
      '<svg class="civic-tree-edges" aria-hidden="true"></svg>' +
      '<div class="civic-tree-cols">' + colsHtml + "</div></div></div>";
  }

  function bindCivicTreeEdges() {
    contentEl.querySelectorAll(".civic-tree-graph").forEach(function (graph) {
      var svg = graph.querySelector(".civic-tree-edges");
      var cols = graph.querySelector(".civic-tree-cols");
      if (!svg || !cols) return;
      var w = cols.scrollWidth, h = cols.scrollHeight;
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.setAttribute("viewBox", "0 0 " + w + " " + h);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var gb = cols.getBoundingClientRect();
      var byName = {};
      graph.querySelectorAll(".civic-tree-node").forEach(function (el) {
        byName[el.getAttribute("data-node-name")] = el;
      });
      graph.querySelectorAll(".civic-tree-node").forEach(function (el) {
        var pres = (el.getAttribute("data-prereqs") || "").split("|").filter(Boolean);
        if (!pres.length) return;
        var cb = el.getBoundingClientRect();
        var x2 = cb.left - gb.left, y2 = cb.top - gb.top + cb.height / 2;
        pres.forEach(function (pname) {
          var p = byName[pname];
          if (!p) return;
          var pb = p.getBoundingClientRect();
          var x1 = pb.right - gb.left, y1 = pb.top - gb.top + pb.height / 2;
          var mx = (x1 + x2) / 2;
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("class", "civic-edge");
          path.setAttribute("d", "M " + x1 + " " + y1 + " C " + mx + " " + y1 + ", " + mx + " " + y2 + ", " + x2 + " " + y2);
          svg.appendChild(path);
        });
      });
    });
  }

  // ---- Technology tree ----------------------------------------------------
  // The in-game tech screen, rebuilt from the game's own progression tree: a
  // round framed emblem biting into the left edge of a leather bar, the tech
  // named across the top of it, and what it grants laid out along the bottom.
  // A Mastery ("II") bar hangs under any tech that has one. Prerequisite lines
  // are drawn as a measured SVG overlay, square-cornered like the game's.
  var GOVERNMENT_STATS = window.CIVPEDIA_GOVERNMENT_STATS || {};
  var TECH_TREE = window.CIVPEDIA_TECH_TREE || {};
  // the civics trees (civic-tree.js) share the tree code: same node shape,
  // same lookup
  var CIVIC_TREE = window.CIVPEDIA_CIVIC_TREE || {};
  var CIVIC_INDEX = window.CIVPEDIA_CIVIC_TREE_INDEX || {};
  var CIV_TRADITIONS = window.CIVPEDIA_CIV_TRADITIONS || {};
  var INTRO_TEXT = window.CIVPEDIA_INTRO_TEXT || { leaders: {}, civs: {} };
  var POLICIES = window.CIVPEDIA_POLICIES || { byName: {}, list: [] };
  Object.keys(CIVIC_TREE).forEach(function (k) { TECH_TREE[k] = CIVIC_TREE[k]; });

  function techPipHtml(u) {
    // a plain-text tip: the game's effect strings carry [icon:...] tokens that
    // a title-style tooltip cannot render
    var tip = u.name || cleanTipText(String(u.tip || "").replace(/\[icon:[^\]]*\]/g, " "));
    var art = u.kind === "effect" || u.kind === "project" || u.kind === "espionage" || u.kind === "tradition";
    // a unique thing with no page of its own (Jinja, Byrsa, Tea House) links
    // where the glossary sends it: its civilization's page
    if (u.name && u.kind !== "tradition" && (!u.page || !pageTitleExists(u.page))) {
      var ref = gameRefs()[u.name];
      u = Object.assign({}, u, { page: ref && ref.page && pageTitleExists(ref.page) ? ref.page : "" });
    }
    return '<span class="tt-pip tt-pip--' + attrEscape(u.kind) +
      (art ? " tt-pip--badge" : "") + '"' +
      (tip ? ' data-tip="' + attrEscape(tip) + '"' : "") +
      (u.page ? ' data-page-title="' + attrEscape(u.page) +
        '" role="button" tabindex="0"' : "") + '>' +
      '<img alt="" src="' + attrEscape(u.icon) +
      '" onerror="this.closest(&quot;.tt-pip&quot;).classList.add(&quot;noimg&quot;)"></span>';
  }

  // the civ rows that belong to this bar (depth 1 on the main bar, 2 on the
  // mastery bar), and the pip that opens them
  function techUniques(n, mastery) {
    if (mastery === "all") return n.uniques || [];        // a page's pip: the tech and its Mastery
    return (n.uniques || []).filter(function (u) { return (u.depth === 2) === !!mastery; });
  }
  function techUniquePipHtml(n, mastery) {
    var list = techUniques(n, mastery);
    if (!list.length) return "";
    var civs = {};
    list.forEach(function (u) { civs[u.civ] = 1; });
    var count = Object.keys(civs).length;
    return '<span class="tt-pip tt-pip--unique" data-unique="1" role="button" tabindex="0" ' +
      'title="' + attrEscape(count + " civilization" + (count > 1 ? "s" : "") + " unlock something of their own here") + '">' +
      '<span class="tt-uq-count">' + count + '</span></span>';
  }

  // the unlocks the game shows: one with neither a name nor a line of text
  // (Guilds II's sea trade range has no string) is skipped on the bar and
  // on the card alike, as tree-grid.js skips it
  function techVisibleUnlocks(n, mastery) {
    return ((mastery ? n.mastery : n.unlocks) || []).filter(function (u) {
      return u.name || (u.lines && u.lines.length) || (u.yields && u.yields.length) || (u.adj && u.adj.length);
    });
  }

  function techBarHtml(n, mastery) {
    var list = techVisibleUnlocks(n, mastery);
    // The Mastery badge is a single piece of the game's art -- ring and "II"
    // together -- so it carries no logo of its own.
    return '<div class="tt-bar' + (mastery ? " tt-bar--mastery" : " tt-bar--main") + '">' +
      '<span class="tt-disc' + (mastery ? " tt-disc--ii" : "") + '">' +
        (mastery ? "" :
          '<img class="tt-disc-img" alt="" src="' + attrEscape(n.icon) +
          '" onerror="this.closest(&quot;.tt-disc&quot;).classList.add(&quot;noimg&quot;)">') +
      '</span>' +
      '<span class="tt-plate">' +
        // the Science cost is on the hover card, not repeated on the bar
        '<span class="tt-head">' +
          '<span class="tt-name">' + escapeHtml(n.name + (mastery ? " II" : "")) + '</span>' +
        '</span>' +
        '<span class="tt-pips">' + list.map(techPipHtml).join("") + techUniquePipHtml(n, mastery) + '</span>' +
      '</span></div>';
  }

  // The in-game hover card (the game's tech-civic-tooltip), one depth at a
  // time: the main bar's card shows what the technology grants, the "II"
  // bar's card what its Mastery grants. Each unlock is a ticket -- its art,
  // a hairline, its name, its base yields as rows, its adjacency rules and
  // the game's own description lines -- and the Science cost closes the card.
  function techTicketHtml(u) {
    var body = "";
    if (u.name) {
      // the ticket's title opens the thing's own page when it has one
      var pageTitle = u.page && pageTitleExists(u.page) ? u.page : (pageTitleExists(u.name) ? u.name : "");
      body += '<div class="tt-tk-name' + (pageTitle ? ' page-link" data-page-title="' + attrEscape(pageTitle) : '') +
        '">' + escapeHtml(u.name) + '</div><div class="tt-hr"></div>';
    }
    (u.yields || []).forEach(function (y) {
      body += '<div class="tt-tk-yield"><span class="tt-tk-yname">' + escapeHtml(y.n) +
        '</span><span class="tt-tk-yval">+' + escapeHtml(String(y.v)) +
        renderInlineIcon(y.y) + '</span></div><div class="tt-hr"></div>';
    });
    (u.adj || []).forEach(function (g, i) {
      body += '<div class="tt-tk-adj' + (i ? " tt-tk-adj--next" : "") + '">' +
        statText(g.text, false, true) +
        (g.list ? '<ul class="tt-tk-list">' + g.list.map(function (x) {
          return "<li>" + escapeHtml(x) + "</li>";
        }).join("") + "</ul>" : "") + "</div>";
    });
    (u.lines || []).forEach(function (l, i) {
      // a line carrying the game's [BLIST] list markup goes through the
      // list renderer; plain lines stay inline
      body += '<div class="tt-tk-line' + (i ? " tt-tk-line--next" : "") + '">' +
        statText(l, l.indexOf("[BLIST]") !== -1, true) + "</div>";
    });
    return '<div class="tt-ticket">' +
      '<img class="tt-tk-ico" alt="" src="' + attrEscape(u.icon) +
        '" onerror="this.style.visibility=&quot;hidden&quot;">' +
      '<div class="tt-tk-div"></div>' +
      '<div class="tt-tk-body">' + body + "</div></div>";
  }

  // The unique card: the same panel, a ticket per civ row. The civ's flat
  // logo leads its name (a link to the civ's page), then what it gets here
  // and which generic unit that stands in for.
  function techUniqueCardHtml(n, level) {
    var list = techUniques(n, level);
    var logos = civNameIcons();
    var tickets = list.map(function (u) {
      var logo = logos[u.civ] || "";
      var civ = '<span class="tt-uq-civ">' +
        (logo ? '<img class="tt-uq-flag" alt="" src="' + attrEscape(logo) + '">' : "") +
        '<span class="tt-uq-civname' + (pageTitleExists(u.civ) ? ' page-link" data-page-title="' + attrEscape(u.civ) : '') +
        '">' + escapeHtml(u.civ) + '</span></span>';
      var what;
      if (u.kind === "modifier") {
        what = statText(u.text || "", false, true);
      } else if (u.replaces) {
        what = 'in place of the <span class="tt-uq-generic">' + escapeHtml(u.replaces) + '</span>';
      } else if (u.early) {
        what = 'unlocked here, ahead of everyone else';
      } else if (u.with) {
        what = u.civType
          ? 'on every player’s tree when this civilization is in the game'
          : 'on every player’s tree when this collection is enabled';
      } else {
        what = 'unique to this civilization';
      }
      // (a unique with no page key of its own still links when its name is a page)
      var uqPage = u.page && pageTitleExists(u.page) ? u.page
        : u.name && u.kind !== "tradition" && pageTitleExists(u.name) ? u.name : "";
      var name = u.name
        ? '<div class="tt-tk-name' + (uqPage ? ' page-link" data-page-title="' + attrEscape(uqPage) : '') +
          '">' + escapeHtml(u.name) +
          (level === "all" && u.depth === 2 ? ' <span class="tt-uq-lvl">II</span>' : '') +
          '</div><div class="tt-hr"></div>'
        : "";
      return '<div class="tt-ticket tt-ticket--uq">' +
        '<img class="tt-tk-ico" alt="" src="' + attrEscape(u.icon) + '" onerror="this.style.visibility=&quot;hidden&quot;">' +
        '<div class="tt-tk-div"></div>' +
        '<div class="tt-tk-body">' + name +
          '<div class="tt-tk-line tt-uq-row">' + civ + '<span class="tt-uq-what"> — ' + what + '</span></div>' +
        '</div></div>';
    }).join("");
    return '<span class="tt-pop-corner tt-pop-corner--tl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--tr"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--bl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--br"></span>' +
      '<button type="button" class="tt-pop-close" aria-label="Close"></button>' +
      '<div class="tt-pop-title">' + escapeHtml(n.name + (level === 1 ? " II" : "")) + "</div>" +
      '<div class="tt-pop-state">Civilization Unlocks</div>' +
      '<div class="tt-pop-list">' + tickets + "</div>";
  }

  function techPopupHtml(n, level) {
    var list = techVisibleUnlocks(n, level);
    return '<span class="tt-pop-corner tt-pop-corner--tl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--tr"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--bl"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--br"></span>' +
      '<button type="button" class="tt-pop-close" aria-label="Close"></button>' +
      '<div class="tt-pop-title">' + escapeHtml(n.name + (level ? " II" : "")) + "</div>" +
      '<div class="tt-pop-state">' + (level ? "Mastery" : escapeHtml((n._age || "") + " Age " + (n._kind === "civic" ? "Civic" : "Technology"))) + "</div>" +
      '<div class="tt-pop-list">' + list.map(techTicketHtml).join("") + "</div>";
  }

  // one tree's graph: its columns and the SVG its lines are drawn on
  function techGraphHtml(key) {
    var tree = TECH_TREE[key];
    if (!tree || !(tree.nodes || []).length) return "";
    var cols = [];
    var rowCount = 0;
    tree.nodes.forEach(function (n) {
      (cols[n.col] = cols[n.col] || []).push(n);
      if (typeof n.row === "number") rowCount = Math.max(rowCount, n.row + 1);
    });
    // every tree carries the game's grid rows; a tree without them would
    // spread each column evenly
    var colsHtml = cols.map(function (col) {
      return '<div class="tt-col' + (rowCount ? " tt-col--grid" : "") + '"' +
        (rowCount ? ' style="--tt-rows:' + rowCount + '"' : "") + '>' + col.map(function (n) {
        return '<div class="tt-node" data-node-id="' + attrEscape(n.id) +
          '" data-prereqs="' + attrEscape((n.prereqs || []).join("|")) + '"' +
          (rowCount ? ' style="--tt-r:' + (n.row + 1) + ';grid-row:var(--tt-r)"' : "") + '>' +
          techBarHtml(n, false) +
          (techVisibleUnlocks(n, true).length ? techBarHtml(n, true) : "") +
          '</div>';
      }).join("") + '</div>';
    }).join("");

    return '<div class="tt-graph" data-tree="' + attrEscape(key) + '">' +
      '<svg class="tt-edges" aria-hidden="true"></svg>' +
      '<div class="tt-cols">' + colsHtml + '</div></div>';
  }

  // the tree in its scroll pane, with any branch trees (the civics screen's
  // detached clusters: Theology, the ideologies) under it in the same pane,
  // each headed by its name; one card for all of them
  function renderTechTreeBody(key, branchKeys) {
    var main = techGraphHtml(key);
    if (!main) {
      return '<p class="civic-none">No tree data.</p>';
    }
    var branches = (branchKeys || []).map(function (k) {
      var g = techGraphHtml(k);
      if (!g) return "";
      return '<div class="ct-branch-head unit-req-head">' + escapeHtml((TECH_TREE[k] || {}).name || "") + '</div>' + g;
    }).join("");
    return '<div class="tt-scroll">' + main + branches + '</div>' +
      '<div class="tt-pop" hidden role="dialog" aria-label="Technology detail"></div>';
  }

  // Hover opens a bar's card and lights the bar; a click pins it open, which
  // is how it works on a touch screen. The card is fixed to the viewport and
  // clamped to it, so it always lands on screen whatever the phone's size.
  var techPopPinned = null;
  function bindTechTreePopups() {
    var pop = contentEl.querySelector(".tt-pop");
    if (!pop) return;
    // the card is fixed to the screen, so it lives directly under the page:
    // inside a folding box (.tt-rows-in, .tt-open-in) a transform would make
    // it sit relative to that box instead
    if (pop.parentNode !== contentEl) contentEl.appendChild(pop);
    var nodesById = {};
    Object.keys(TECH_TREE).forEach(function (key) {
      var tree = TECH_TREE[key] || {};
      (tree.nodes || []).forEach(function (n) {
        n._age = tree.age || "";
        n._kind = tree.kind || "tech";
        nodesById[n.id] = n;
      });
    });

    function clearOpen() {
      contentEl.querySelectorAll(".tt-bar.is-open").forEach(function (el) {
        el.classList.remove("is-open");
      });
    }
    function hide() {
      pop.hidden = true;
      techPopPinned = null;
      clearOpen();
    }
    function place(bar) {
      var b = bar.getBoundingClientRect();
      var vw = window.innerWidth, vh = window.innerHeight;
      var margin = 8;
      pop.style.maxHeight = (vh - margin * 2) + "px";
      var w = pop.offsetWidth, h = pop.offsetHeight;
      var left = b.right + 12;
      if (left + w > vw - margin) left = b.left - 12 - w;       // flip to the left
      // the bar itself may be scrolled off-screen, so neither side is
      // necessarily on screen: clamp last, which is what lands the card in
      // view on a phone
      left = Math.min(Math.max(margin, left), Math.max(margin, vw - w - margin));
      var top = b.top + b.height / 2 - h / 2;
      top = Math.min(Math.max(margin, top), vh - h - margin);
      pop.style.left = Math.round(left) + "px";
      pop.style.top = Math.round(top) + "px";
    }
    function show(bar, pin, mode) {
      var node = bar.closest(".tt-node");
      var data = nodesById[node ? node.getAttribute("data-node-id") : bar.getAttribute("data-node-id")];
      if (!data) return;
      var level = bar.classList.contains("tt-bar--mastery") ? 1
        : bar.classList.contains("tech-uq-pip") ? "all" : 0;
      clearOpen();
      bar.classList.add("is-open");
      pop.innerHTML = restoreGameRefs(mode === "unique" ? techUniqueCardHtml(data, level) : techPopupHtml(data, level));
      bindLinkedIconHandlers();
      var closeBtn = pop.querySelector(".tt-pop-close");
      if (closeBtn) closeBtn.addEventListener("click", function (ev) { ev.stopPropagation(); hide(); });
      pop.hidden = false;
      pop.scrollTop = 0;
      place(bar);
      // the artwork may still be loading; re-place once it has laid out
      requestAnimationFrame(function () { if (!pop.hidden) place(bar); });
      techPopPinned = pin ? bar : null;
      bindTipHandlers();
    }

    // A card opens on a click (the bar, or its unique pip) and closes only
    // on its own X -- not on hover-out, not on a tap elsewhere, not on a
    // scroll. Clicking another bar swaps the card for that bar's.
    // an Age panel's pip (the Culture home): the civilizations with a tree
    contentEl.querySelectorAll(".tt-age-uq").forEach(function (btn) {
      btn.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); btn.click(); }
      });
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var age = btn.getAttribute("data-age");
        if (techPopPinned === btn && !pop.hidden) return;
        clearOpen();
        pop.innerHTML = restoreGameRefs(civicCivListHtml(age));
        var closeBtn = pop.querySelector(".tt-pop-close");
        if (closeBtn) closeBtn.addEventListener("click", function (e) { e.stopPropagation(); hide(); });
        pop.querySelectorAll(".ct-civ").forEach(function (row) {
          row.addEventListener("click", function () {
            var key = row.getAttribute("data-key");
            hide();
            treeHomeUpdate("CULTURE", null, function () {
              civicHeadOpen = true;
              civicHomeOpen = true;
              civicHomeAge = age;
              civicHomeCiv = key;
            });
          });
        });
        pop.hidden = false;
        pop.scrollTop = 0;
        pop.setAttribute("data-mode", "civs");
        place(btn);
        requestAnimationFrame(function () { if (!pop.hidden) place(btn); });
        techPopPinned = btn;
      });
    });
    // a Technology page's pip: the same card, both depths at once
    contentEl.querySelectorAll(".tech-uq-pip").forEach(function (pip) {
      pip.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (techPopPinned === pip && !pop.hidden) return;
        show(pip, true, "unique");
        pop.setAttribute("data-mode", "unique");
      });
    });
    contentEl.querySelectorAll(".tt-bar").forEach(function (bar) {
      bar.addEventListener("click", function (ev) {
        if (ev.target.closest("[data-page-title]")) return;   // a pip of its own
        ev.stopPropagation();
        var mode = ev.target.closest(".tt-pip--unique") ? "unique" : "";
        if (techPopPinned === bar && pop.getAttribute("data-mode") === mode && !pop.hidden) return;
        show(bar, true, mode);
        pop.setAttribute("data-mode", mode);
      });
    });
  }

  function bindTechTreeEdges() {
    contentEl.querySelectorAll(".tt-graph").forEach(function (graph) {
      var svg = graph.querySelector(".tt-edges");
      var cols = graph.querySelector(".tt-cols");
      if (!svg || !cols) return;
      // On a phone the tree flows top to bottom (the columns are tiers), so
      // the router works in (u, v) = (along the flow, across it) and P()
      // turns a point back into x y for either direction.
      var vert = getComputedStyle(cols).flexDirection === "column";
      function P(u, v) { return vert ? (v + " " + u) : (u + " " + v); }
      // on the grid every row is as tall as the tallest node, so the rows
      // line up across the columns
      if (!vert && graph.querySelector(".tt-col--grid")) {
        var tallest = 0;
        graph.querySelectorAll(".tt-node").forEach(function (el) {
          tallest = Math.max(tallest, el.offsetHeight);
        });
        graph.style.setProperty("--tt-row-h", tallest + "px");
      }
      var w = cols.scrollWidth, h = cols.scrollHeight;
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.setAttribute("viewBox", "0 0 " + w + " " + h);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var gb = cols.getBoundingClientRect();
      // each node measured once: its extent across the flow (lo..hi), where
      // a line lands (the gem at the left of its emblem, or its emblem's top
      // on a phone) and where a line leaves (the right end of its main bar,
      // or its bottom on a phone) -- all relative to the graph
      var geo = {}, colNodes = [], colIn = [], colOut = [];
      graph.querySelectorAll(".tt-col").forEach(function (colEl, ci) {
        var list = [], lo = Infinity, hi = -Infinity;
        colEl.querySelectorAll(".tt-node").forEach(function (el) {
          var r = el.getBoundingClientRect();
          var disc = (el.querySelector(".tt-bar--main .tt-disc") || el).getBoundingClientRect();
          var plate = (el.querySelector(".tt-bar--main .tt-plate") || el).getBoundingClientRect();
          var g = vert ? {
            col: ci, lo: r.left - gb.left, hi: r.right - gb.left,
            inU: disc.top - gb.top + 3, inV: disc.left - gb.left + disc.width / 2,
            outU: r.bottom - gb.top, outV: disc.left - gb.left + disc.width / 2
          } : {
            col: ci, lo: r.top - gb.top, hi: r.bottom - gb.top,
            inU: disc.left - gb.left + 3, inV: disc.top - gb.top + disc.height / 2,
            outU: plate.right - gb.left, outV: plate.top - gb.top + plate.height / 2
          };
          g.prereqs = (el.getAttribute("data-prereqs") || "").split("|").filter(Boolean);
          geo[el.getAttribute("data-node-id")] = g;
          list.push(g);
          lo = Math.min(lo, g.inU - 3);
          hi = Math.max(hi, g.outU);
        });
        colNodes.push(list);
        colIn.push(lo);
        colOut.push(hi);
      });
      // the flow position of the gap between column i and i+1
      function gapU(i) { return Math.round((colOut[i] + colIn[i + 1]) / 2); }
      // is a run along the flow at v clear of every node in columns from..to?
      function rowClear(from, to, v) {
        for (var c = from; c <= to; c += 1) {
          for (var k = 0; k < colNodes[c].length; k += 1) {
            var n = colNodes[c][k];
            if (v >= n.lo - 6 && v <= n.hi + 6) return false;
          }
        }
        return true;
      }
      // pass 1: every line's endpoints and the gap it turns in
      var lines = [];
      Object.keys(geo).forEach(function (id) {
        var c = geo[id];
        c.prereqs.forEach(function (pid) {
          var p = geo[pid];
          if (!p) return;
          var u1 = p.outU, v1 = p.outV, u2 = c.inU, v2 = c.inV;
          // where the line turns: the first gap it can, then the last, then
          // any in between -- whichever keeps both runs off the nodes
          var gi = null;
          if (c.col > p.col) {
            var order = [p.col];
            if (c.col - 1 !== p.col) order.push(c.col - 1);
            for (var g = p.col + 1; g < c.col - 1; g += 1) order.push(g);
            for (var oi = 0; oi < order.length && gi === null; oi += 1) {
              var cand = order[oi];
              if (rowClear(p.col + 1, cand, v1) && rowClear(cand + 1, c.col - 1, v2)) gi = cand;
            }
            if (gi === null) gi = p.col;
          }
          lines.push({ pid: pid, u1: u1, v1: v1, u2: u2, v2: v2, gi: gi,
            mu: gi === null ? Math.round((u1 + u2) / 2) : gapU(gi) });
        });
      });
      // pass 2: parents whose lines turn in the same gap each get their own
      // lane in it, so one parent's crossing never runs into another's --
      // Pottery's trunk must not touch the Sailing-to-Currency line
      var byGap = {};
      lines.forEach(function (ln) {
        if (ln.gi === null || Math.abs(ln.v2 - ln.v1) < 2) return;
        var g = byGap[ln.gi] = byGap[ln.gi] || {};
        var e = g[ln.pid] = g[ln.pid] || { v1: ln.v1, u1: ln.u1, u2: ln.u2, lo: Infinity, hi: -Infinity };
        e.lo = Math.min(e.lo, ln.v1, ln.v2);
        e.hi = Math.max(e.hi, ln.v1, ln.v2);
      });
      // Lanes sit inside the gap with the full corner radius kept on both
      // sides (so every turn stays as rounded as a lone line's), and a
      // parent whose crossing would run across another parent's stub --
      // Navigation dropping past the Mathematics line into Future Tech --
      // takes the lane beyond it.
      var laneU = {};                                  // "gap|parent" -> where it turns
      Object.keys(byGap).forEach(function (gi) {
        var g = byGap[gi];
        var pids = Object.keys(g);
        function covers(a, b) {   // does a's crossing pass b's stub?
          return g[b].v1 > g[a].lo + 1 && g[b].v1 < g[a].hi - 1;
        }
        pids.forEach(function (pid) {
          g[pid].rank = pids.filter(function (o) { return o !== pid && covers(pid, o); }).length;
        });
        pids.sort(function (a, b) { return (g[a].rank - g[b].rank) || (g[a].v1 - g[b].v1); });
        // the lanes spread about the middle of the gap itself, within the
        // room the gap has (a parent's own stub may start well before it)
        var n = pids.length;
        var room = Math.max(0, colIn[+gi + 1] - colOut[+gi] - 20);   // 10px of corner each side
        var step = n > 1 ? Math.min(14, room / (n - 1)) : 0;
        var centre = gapU(+gi);
        pids.forEach(function (pid, idx) {
          laneU[gi + "|" + pid] = Math.round(centre + (idx - (n - 1) / 2) * step);
        });
      });
      lines.forEach(function (ln) {
        var u1 = ln.u1, v1 = ln.v1, u2 = ln.u2, v2 = ln.v2;
        var mu = laneU[ln.gi + "|" + ln.pid] || ln.mu;
        var r = Math.min(10, Math.abs(v2 - v1) / 2, Math.abs(mu - u1), Math.abs(u2 - mu));
        var d;
        if (Math.abs(v2 - v1) < 2 || !r) {
          d = "M " + P(u1, v1) + " L " + P(u2, v2);
        } else {
          var sgn = v2 > v1 ? 1 : -1;
          d = "M " + P(u1, v1) +
            " L " + P(mu - r, v1) +
            " Q " + P(mu, v1) + " " + P(mu, v1 + sgn * r) +
            " L " + P(mu, v2 - sgn * r) +
            " Q " + P(mu, v2) + " " + P(mu + r, v2) +
            " L " + P(u2, v2);
        }
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("class", "tt-edge");
        path.setAttribute("d", d);
        svg.appendChild(path);
      });
    });
  }

  function renderTraditionsBody(data) {
    var byAge = {};
    (data.traditions || []).forEach(function (t) {
      var k = t.age || "";
      (byAge[k] = byAge[k] || []).push(t);
    });
    var order = ["Antiquity", "Exploration", "Modern", ""];
    var html = '<div class="tradition-list">';
    order.forEach(function (age) {
      var arr = byAge[age];
      if (!arr || !arr.length) return;
      if (age) html += '<div class="age-sub"><span>' + escapeHtml(age) + " Age</span>" + ornamentHtml() + "</div>";
      arr.forEach(function (t) {
        html += '<div class="tradition-item">' +
          '<button class="tradition-head" type="button" aria-expanded="false">' +
            '<span class="civic-emblem civic-emblem-sm"><img alt="" src="images/icons/tradition.png" onerror="this.closest(&quot;.civic-emblem&quot;).classList.add(&quot;noimg&quot;)"></span>' +
            '<span class="tradition-name">' + escapeHtml(t.name) + '</span>' +
          '</button>' +
          '<div class="tradition-detail"><div class="civic-detail-inner">' +
            (t.desc ? renderParagraphMarkup(t.desc) : '<p class="civic-none">No description.</p>') +
          '</div></div>' +
        '</div>';
      });
    });
    return html + '</div>';
  }

  function closeCivicPopups(except) {
    contentEl.querySelectorAll(".civic-node.open").forEach(function (node) {
      if (node === except) return;
      node.classList.remove("open");
      var h = node.querySelector(".civic-node-head");
      if (h) h.setAttribute("aria-expanded", "false");
      var pop = node.querySelector(".civic-node-popup");
      if (pop) pop.removeAttribute("style");
    });
  }

  // Inside the horizontally-scrolling tree the popup would be clipped, so when
  // a node in a .civic-tree-graph opens, pin its popup with position:fixed.
  function positionCivicPopup(node) {
    var pop = node.querySelector(".civic-node-popup");
    var head = node.querySelector(".civic-node-head");
    if (!pop || !head || !node.closest(".civic-tree-graph")) return;
    pop.style.position = "fixed";
    pop.style.transform = "none";
    pop.style.left = "0px";
    pop.style.top = "0px";
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var hr = head.getBoundingClientRect();
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var left = hr.left + hr.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, vw - pw - 8));
    var top = hr.bottom + 10;
    if (top + ph > vh - 8) top = Math.max(8, hr.top - ph - 10);
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  // Click a civic node to open its floating info card (one at a time); click a
  // tradition to slide its detail open.
  function bindCivicTrees() {
    contentEl.querySelectorAll(".civic-node-head").forEach(function (head) {
      head.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var node = head.closest(".civic-node");
        if (!node) return;
        var wasOpen = node.classList.contains("open");
        closeCivicPopups(node);
        node.classList.toggle("open", !wasOpen);
        head.setAttribute("aria-expanded", !wasOpen ? "true" : "false");
        if (!wasOpen) positionCivicPopup(node);
        else {
          var pop = node.querySelector(".civic-node-popup");
          if (pop) pop.removeAttribute("style");
        }
      });
    });
    contentEl.querySelectorAll(".tradition-head").forEach(function (head) {
      head.addEventListener("click", function () {
        var item = head.closest(".tradition-item");
        if (!item) return;
        var open = item.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  // Desktop: the same two sections as chapter-accordion blocks appended to the body.
  function civExtraChaptersHtml(page) {
    var data = CIV_CIVICS[page.id];
    if (!data) return "";
    function block(title, sub, body) {
      return '<section class="chapter chapter-accordion">' +
        '<h3 class="chapter-title" role="button" tabindex="0">' +
          '<span class="chapter-title-text">' + escapeHtml(title.toUpperCase()) + "</span>" +
          '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div></h3>' +
        '<div class="chapter-body">' +
          (sub ? '<div class="chapter-subname"><span>' + escapeHtml(sub) + "</span></div>" : "") +
          body +
        "</div></section>";
    }
    var extra = CIV_EXTRAS[page.id] || {};
    var logo = extra.logo || "";
    var out = "";
    if (data.civics && data.civics.length) {
      out += block(civicSectionTitle(data), "", renderCivicsBody(data, logo, extra));
    }
    if (data.traditions && data.traditions.length) {
      out += block("Traditions", "", renderTraditionsBody(data));
    }
    return out;
  }

  // mode: "static" (never collapses), "toggle-collapsed" (collapses/expands on
  // any viewport, starts closed), or falsy (mobile-only accordion).
  // mode: undefined  -> mobile accordion (collapsible only on narrow screens)
  //       "static"       -> never collapses, keeps the ornament divider
  //       "static-bare"  -> never collapses, no ornament divider
  //       "toggle-collapsed" -> collapsible on every viewport, starts closed
  // Prose with no inline glyphs, links or infotips: the icons go, a linked or
  // tipped word stays as its plain text (bold and paragraphs are kept)
  function plainProse(bodies) {
    Array.prototype.forEach.call(bodies, function (body) {
      body.querySelectorAll("button.inline-icon, img[class*='-ico']").forEach(function (el) { el.remove(); });
      body.querySelectorAll(".iw, .tip, .page-link, .game-ref, .structure-ref, .pantheon-ref, [data-tip], [data-tip-html], [data-page-title], [data-page-id]").forEach(function (el) {
        if (!el.isConnected || el.matches("button:not(.inline-icon)")) return;
        var parent = el.parentNode;
        while (el.firstChild) parent.insertBefore(el.firstChild, el);
        el.remove();
      });
      body.normalize();
      // the space an icon left at a word's start
      body.querySelectorAll("p, li").forEach(function (p) {
        p.innerHTML = p.innerHTML.replace(/ {2,}/g, " ").replace(/^\s+/, "");
      });
    });
  }

  function chapterSectionHtml(titleUpper, bodyHtml, mode) {
    var isStatic = mode === "static" || mode === "static-bare" || mode === "sub";
    var sectionCls = "chapter";
    var titleAttrs = "";
    if (!isStatic) {
      sectionCls += " chapter-accordion";
      titleAttrs = ' role="button" tabindex="0"';
    }
    // a Historical Context opens closed at every width, as on a phone
    if (titleUpper === "HISTORICAL CONTEXT" && !isStatic) mode = "toggle-collapsed";
    if (mode === "toggle-collapsed") sectionCls += " chapter-accordion--toggle collapsed";
    if (mode === "static-bare") sectionCls += " chapter-bare";
    // a sub-heading: smaller, one tapering rule under it instead of the ornament
    if (mode === "sub") sectionCls += " chapter--sub";
    // CIV BONUSES names a civ's own unique Building/Quarter by icon+name a lot
    // more densely than any other chapter -- give it a dedicated hook so those
    // specific building glyphs can render larger there without also blowing up
    // the same glyph inside HOWTO/Historical Context prose.
    if (titleUpper === "CIV BONUSES") sectionCls += " chapter--civ-bonuses";
    // history reads as plain prose: no glyphs, links or infotips in it
    if (titleUpper === "HISTORICAL CONTEXT") sectionCls += " chapter--plain";
    if (mode === "guide") sectionCls += " chapter-accordion--toggle collapsed chapter--guide";
    var ornament = mode === "static-bare" ? "" : mode === "sub" ? '<span class="chapter-subrule"></span>' :
      '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div>';
    return '<section class="' + sectionCls + '">' +
      '<h3 class="chapter-title"' + titleAttrs + '>' +
        '<span class="chapter-title-text">' + escapeHtml(titleUpper) + '</span>' +
        ornament + '</h3>' +
      '<div class="chapter-body">' + bodyHtml + '</div></section>';
  }

  // WONDERS pages: an "Effects" bullet list (from the game's own summary text,
  // its trailing "Must be placed…" sentence lifted out into the Placement stat)
  // followed by the "Historical Context" chapter. The raw SUMMARY chapter is
  // not rendered here — its content lives in WONDER_STATS.
  function renderWonderBody(page) {
    var out = "";
    // EFFECTS now lives in the stat card next to Placement (same box), so only
    // the essay is left for the wide column.
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "HISTORY") out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(c));
    });
    return out;
  }

  // Biome pages: just the descriptive essay -- no heading over it, the page
  // title already says what it is. No sidebar meta card, no "Topics" chip.
  function renderHistoryOnlyBody(page) {
    var out = "";
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "HISTORY") {
        out += chapterSectionHtml(String(page.title).toUpperCase(), chapterBodyHtml(c), "static");
      }
    });
    return out;
  }

  // Landing page: the ornamental "C" ring in a soft-edged square brass frame
  // (natural-wonders style), then the Welcome chapter. No Details / Topics card.
  function renderIntroBody(page) {
    var hero =
      '<div class="intro-hero">' +
        '<div class="intro-cring">' +
          '<img src="images/ui/intro-cring.jpg" alt="Sid Meier’s Civilization VII">' +
        '</div>' +
      '</div>';
    // under the Welcome: the guide in questions and answers (section-faq.js)
    var faq = (window.CIVPEDIA_SECTION_FAQ || {}).CONCEPTS;
    var guide = faq && (faq.groups || []).length
      ? '<div class="intro-guide">' + sectionFaqHtml("CONCEPTS", "", true) + '</div>' : "";
    return hero + renderChapters(page.chapters || [], false, "CONCEPTS", { welcome: true }) + guide;
  }

  // A generic terrain/tile glyph before "<X> Terrain" / "<X> Biome" phrases —
  // the game's own effect text writes these as bare words with no icon.
  var NW_TERRAIN_RE = /\b(Coastal|Flat|Rough|Vegetated|Tundra|Desert|Grassland|Plains|Tropical|Mountain|Volcano|Navigable River|Marine|Ocean|Rural|Urban) (Terrain|Biome)\b/g;

  // Natural Wonders: the effect line as a plain lead paragraph (with a terrain
  // icon injected), then a collapsible "Historical Context" essay that starts
  // closed on every viewport.
  var YIELD_NAMES = {
    YIELD_FOOD: "Food", YIELD_PRODUCTION: "Production", YIELD_GOLD: "Gold",
    YIELD_SCIENCE: "Science", YIELD_CULTURE: "Culture", YIELD_HAPPINESS: "Happiness",
    YIELD_DIPLOMACY: "Influence"
  };
  var AGE_EMBLEMS = {
    Antiquity: "images/icons/age_antiquity.png",
    Exploration: "images/icons/age_exploration.png",
    Modern: "images/icons/age_modern.png"
  };
  // The three City-State resources are not a class of their own in the game
  // (they are City resources that are never on the map and never tradeable);
  // their badge is the coloured city-state glyph, unframed.
  function resourceClassIcon(label, cls) {
    if (label === "City-State Resource") {
      return '<span class="inline-icon inline-icon--cs" title="City-State"><img class="inline-icon-img" alt="" ' +
        'src="images/icons/independent_power.png"></span>';
    }
    return cls ? renderInlineIcon("RESOURCECLASS_" + String(cls).toUpperCase()) : "";
  }
  function nwIce(text) {
    return String(text || "").replace(NW_TERRAIN_RE, "[icon:TERRAIN_GENERIC] $1 $2");
  }
  // A resource's tile yield (Resource_YieldChanges) and its effect once it is
  // assigned -- the effect and the resource's class change from Age to Age
  // (the Age modules re-declare both), so the Effects box lists each Age the
  // resource exists in under that Age's emblem and class.
  function resourceStatBoxes(res) {
    var ages = res.ages || [];
    function yieldLine(a) {
      return (a.yields || []).map(function (y) {
        return "+" + y.v + " [icon:" + y.y + "] " + (YIELD_NAMES[y.y] || y.y);
      }).join(", ");
    }
    function ageHead(a) {
      return '<div class="res-age-head">' +
        (AGE_EMBLEMS[a.age] ? '<img class="res-age-emblem" alt="" src="' + AGE_EMBLEMS[a.age] + '">' : "") +
        '<span class="res-age-name">' + escapeHtml(a.age) + ' Age</span>' +
        '<span class="res-age-class">' + resourceClassIcon(a.label, a.cls) +
          '<span>' + escapeHtml(a.label) + '</span></span>' +
        '</div>';
    }
    var html = "";
    var withYield = ages.filter(function (a) { return (a.yields || []).length; });
    if (withYield.length) {
      var first = yieldLine(withYield[0]);
      var same = withYield.every(function (a) { return yieldLine(a) === first; });
      html += wonderStatBox("Yields", '<div class="wonder-effects">' +
        (same
          ? statText(first, false)
          : withYield.map(function (a) {
              return '<div class="res-age">' + ageHead(a) +
                '<div class="res-age-text">' + statText(yieldLine(a), false) + '</div></div>';
            }).join(""))
        + '</div>');
    }
    var withText = ages.filter(function (a) { return a.text; });
    if (withText.length) {
      html += wonderStatBox("Effects", '<div class="wonder-effects">' +
        withText.map(function (a) {
          return '<div class="res-age">' + ageHead(a) +
            '<div class="res-age-text">' + statText(a.text, false) + '</div></div>';
        }).join("") + '</div>');
    }
    return html;
  }

  // the game's Description, split: its tile yields and its Tooltip
  function naturalWonderStatBoxes(id) {
    var nw = NW_STATS[id];
    if (!nw) return "";
    return (nw.yields ? wonderStatBox("Yields", '<div class="wonder-effects">' + statText(nwIce(nw.yields), false) + '</div>') : "") +
      (nw.effects ? wonderStatBox(nw.effectsHead || "Effects", '<div class="wonder-effects">' + statText(nwIce(nw.effects), false) + '</div>') : "");
  }

  // Natural Wonders and Resources: the stat boxes live on the card with the
  // artwork (renderEntryCard), the way a Building's do, so the page column is
  // the Historical Context box alone.
  function renderNaturalWonderBody(page) {
    var out = "";
    var nw = NW_STATS[page.id];
    var res = RESOURCE_META[page.id];
    if (nw || (res && res.ages && res.ages.length)) {
      // nothing here: the card carries the boxes
    } else {
      (page.chapters || []).forEach(function (c) {
        if (c.chapter_id === "SUMMARY") {
          var body = (c.paragraphs || []).map(function (p) {
            return renderParagraphMarkup(nwIce(p));
          }).join("");
          out += '<div class="nw-effects">' + body + "</div>";
        }
      });
    }
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "HISTORY") {
        out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(c), "toggle-collapsed");
      }
    });
    return out;
  }

  // Units: the SUMMARY line as a plain lead paragraph (no heading), then the
  // HISTORY essay under a collapsible "Historical Context" that starts closed.
  // The mechanical stat panel + the UNIQUE ABILITY box live in the aside
  // (renderUnitAside).
  // The game's own unit description text ices some concepts and leaves the same
  // concept bare elsewhere (e.g. "Combat Strength" gets a sword but "Ranged
  // Strength" / "Bombard Strength" don't; Merchant's "Build Roads" has none).
  // Fill those gaps — but never double-ice a phrase that already has an icon.
  // Order matters: multi-word / specific phrases first so "Army Commander" and
  // "Command Radius" resolve before the bare word "Commander", etc.
  // Specifically-named Policies / Traditions: each keeps its own SOCIAL_POLICY
  // glyph even when a generic policy icon already sits in the same sentence.
  var NAMED_POLICIES = ["Divine Punishment", "Divine Mercy", "Humoralism", "Plague Cults"];
  // Generic policy concepts: infotip only, never an icon.
  var LOWERCASE_CONCEPTS = ["bonuses and adjacencies", "adjacencies"];
  var TERRAIN_WORD_RE = /^(Grasslands?|Tropical|Tundra|Desert|Plains|Lakes?|Features?|Reefs?|Coast|Ocean|Hills|Vegetated|Rough|Flat|Wet|Rivers?)$/;
  var TIP_ONLY_CONCEPTS = [
    "Settlement Limit", "Distant Lands", "Warehouse Buildings", "Warehouse Building", "Warehouses", "Warehouse", "Treasure Convoys", "Treasure Convoy", "Treasure Resources", "Treasure Resource", "Resource Capacity", "City Resources", "Defensive Fortifications", "Defensive Fortification", "Diplomatic Projects", "Diplomatic Project", "Economic Victory", "Minor Rivers", "Minor River", "Trade Network", "Town Focus", "Age Progress", "War Support", "Pantheons", "Pantheon", "Religion", "Governments", "Government", "Attributes", "Attribute", "Innovation", "Artifacts", "Artifact", "Relics", "Relic", "Projects", "Project", "Embarked", "Embark", "Appeal", "Sanctions", "Sanction", "Endeavors", "Endeavor", "Stealth", "Commendations", "Commendation", "Alliances", "Alliance", "Espionage", "Skirmish", "Garrisoned","bonuses and adjacencies", "adjacencies", "Crisis Policy Slot", "Crisis Policies", "Crisis Policy", "Ageless", "Maintenance Cost", "Maintenance", "Adjacency", "Swift ability", "Blizzards", "Blizzard", "Amphibious ability", "Amphibious",
    // the game's own text never puts a glyph on these bare words
    "Settlements", "Settlement", "settlements", "settlement", "Units", "Unit", "Zone of Control"];
  var UNIT_CONCEPT_ICONS = [
    // Tip-only concepts (2026-09-14): every concept the game writes a
    // Civilopedia tooltip for, wherever the app prints it -- longer phrases
    // first so "Settlement Limit" wins over "Settlement".
    ["Settlement Limit", "NAR_REW_TRADITION_SLOT"],
    ["Distant Lands", "NAR_REW_TRADITION_SLOT"],
    ["Warehouse Buildings", "NAR_REW_TRADITION_SLOT"],
    ["Warehouse Building", "NAR_REW_TRADITION_SLOT"],
    ["Warehouses", "NAR_REW_TRADITION_SLOT"],
    ["Warehouse", "NAR_REW_TRADITION_SLOT"],
    ["Treasure Convoys", "NAR_REW_TRADITION_SLOT"],
    ["Treasure Convoy", "NAR_REW_TRADITION_SLOT"],
    ["Treasure Resources", "NAR_REW_TRADITION_SLOT"],
    ["Treasure Resource", "NAR_REW_TRADITION_SLOT"],
    ["Resource Capacity", "NAR_REW_TRADITION_SLOT"],
    ["City Resources", "NAR_REW_TRADITION_SLOT"],
    ["Defensive Fortifications", "NAR_REW_TRADITION_SLOT"],
    ["Defensive Fortification", "NAR_REW_TRADITION_SLOT"],
    ["Diplomatic Projects", "NAR_REW_TRADITION_SLOT"],
    ["Diplomatic Project", "NAR_REW_TRADITION_SLOT"],
    ["Economic Victory", "NAR_REW_TRADITION_SLOT"],
    ["Minor Rivers", "NAR_REW_TRADITION_SLOT"],
    ["Minor River", "NAR_REW_TRADITION_SLOT"],
    ["Trade Network", "NAR_REW_TRADITION_SLOT"],
    ["Town Focus", "NAR_REW_TRADITION_SLOT"],
    ["Age Progress", "NAR_REW_TRADITION_SLOT"],
    ["War Support", "NAR_REW_TRADITION_SLOT"],
    ["Pantheons", "NAR_REW_TRADITION_SLOT"],
    ["Pantheon", "NAR_REW_TRADITION_SLOT"],
    ["Religion", "NAR_REW_TRADITION_SLOT"],
    ["Governments", "NAR_REW_TRADITION_SLOT"],
    ["Government", "NAR_REW_TRADITION_SLOT"],
    ["Attributes", "NAR_REW_TRADITION_SLOT"],
    ["Attribute", "NAR_REW_TRADITION_SLOT"],
    ["Innovation", "NAR_REW_TRADITION_SLOT"],
    ["Artifacts", "NAR_REW_TRADITION_SLOT"],
    ["Artifact", "NAR_REW_TRADITION_SLOT"],
    ["Relics", "NAR_REW_TRADITION_SLOT"],
    ["Relic", "NAR_REW_TRADITION_SLOT"],
    ["Projects", "NAR_REW_TRADITION_SLOT"],
    ["Project", "NAR_REW_TRADITION_SLOT"],
    ["Embarked", "NAR_REW_TRADITION_SLOT"],
    ["Embark", "NAR_REW_TRADITION_SLOT"],
    ["Appeal", "NAR_REW_TRADITION_SLOT"],
    ["Sanctions", "NAR_REW_TRADITION_SLOT"],
    ["Sanction", "NAR_REW_TRADITION_SLOT"],
    ["Endeavors", "NAR_REW_TRADITION_SLOT"],
    ["Endeavor", "NAR_REW_TRADITION_SLOT"],
    ["Stealth", "NAR_REW_TRADITION_SLOT"],
    ["Commendations", "NAR_REW_TRADITION_SLOT"],
    ["Commendation", "NAR_REW_TRADITION_SLOT"],
    ["Alliances", "NAR_REW_TRADITION_SLOT"],
    ["Alliance", "NAR_REW_TRADITION_SLOT"],
    ["Espionage", "NAR_REW_TRADITION_SLOT"],
    ["Skirmish", "NAR_REW_TRADITION_SLOT"],
    ["Garrisoned", "NAR_REW_TRADITION_SLOT"],
    // Tip only, no icon -- the attrs bullet already spells the mechanic out
    // in its own trailing text ("Ageless — is not replaced..."), the word
    // just needs to be tappable too.
    ["Ageless", "NAR_REW_TRADITION_SLOT"],
    ["Swift ability", "NAR_REW_TRADITION_SLOT"],
    ["Blizzards", "NAR_REW_TRADITION_SLOT"],
    ["Blizzard", "NAR_REW_TRADITION_SLOT"],
    ["Amphibious ability", "NAR_REW_TRADITION_SLOT"],
    ["Amphibious", "NAR_REW_TRADITION_SLOT"],
    ["Tropical Terrain", "TERRAIN_GENERIC"],
    ["Mount Everest", "TERRAIN_NATURAL_WONDER"],
    // Age names carry the Ages nav glyph (age_<x>.png).
    ["Antiquity Age", "AGE_ANTIQUITY"], ["Antiquity-Age", "AGE_ANTIQUITY"],
    ["Exploration Age", "AGE_EXPLORATION"], ["Exploration-Age", "AGE_EXPLORATION"],
    ["Modern Age", "AGE_MODERN"], ["Modern-Age", "AGE_MODERN"],
    // Crisis mechanics + Crisis Policies (Traditions unlocked by a Crisis).
    ["Crisis Policy Slot", "SOCIAL_POLICY"],
    ["Crisis Policies", "SOCIAL_POLICY"],
    ["Crisis Policy", "SOCIAL_POLICY"],
    // Named Age Crises (the game's own AgeCrisisEventType rows) + this app's
    // own "Infection Crisis" phrasing -- each is its own compound entry so the
    // bare "Crisis" match below never splits the icon into the middle of the
    // name ("Infection [icon] Crisis" -> "[icon] Infection Crisis").
    ["Invasion Crisis", "NAR_REW_DEFAULT"],
    ["Plague Crisis", "NAR_REW_DEFAULT"],
    ["Loyalty Crisis", "NAR_REW_DEFAULT"],
    ["Religion Crisis", "NAR_REW_DEFAULT"],
    ["Revolution Crisis", "NAR_REW_DEFAULT"],
    ["World War Crisis", "NAR_REW_DEFAULT"],
    ["Infection Crisis", "NAR_REW_DEFAULT"],
    ["Crisis", "NAR_REW_DEFAULT"],
    ["Divine Punishment", "SOCIAL_POLICY"],
    ["Divine Mercy", "SOCIAL_POLICY"],
    ["Plague Cults", "SOCIAL_POLICY"],
    ["Humoralism", "SOCIAL_POLICY"],
    ["Social Policies", "SOCIAL_POLICY"],
    ["Social Policy", "SOCIAL_POLICY"],
    // Bare "policy/policies" (e.g. "from certain Wonders and policies") --
    // runs after the named/compound Policy phrases above so those keep
    // winning; the icon-already-in-sentence + UNIT_ICON_GUARD checks below
    // stop this from re-icing "Social Policy" etc.
    ["Policies", "SOCIAL_POLICY"],
    ["Policy", "SOCIAL_POLICY"],
    // lower-case variants -- "policy"/"policies" as a common noun usually
    // isn't capitalised mid-sentence in this game's prose (unlike the game's
    // proper-noun concepts), and the matcher below is case-sensitive.
    ["policies", "SOCIAL_POLICY"],
    ["policy", "SOCIAL_POLICY"],
    ["Combat Strength", "NAR_REW_COMBAT"],
    ["Ranged Strength", "RANGED_STRENGTH"],
    ["Bombard Strength", "BOMBARD_STRENGTH"],
    ["Command Radius", "COMMANDER_RADIUS"],
    ["Zone of Control", "COMMANDER_RADIUS"],
    ["Cavalry Charge", "NAR_REW_COMBAT"],
    ["Flanking", "NAR_REW_COMBAT"],
    ["First Strike", "NAR_REW_COMBAT"],
    ["Great Work Slot", "GREATWORK"],
    ["Great Work", "GREATWORK"],
    ["Tradition slot", "NAR_REW_TRADITION_SLOT"],
    ["Independent Power", "INDEPENDENT_POWER"],
    // One name, so the glyph leads the whole phrase rather than landing on
    // its second word ("Unique [icon] Improvement").
    ["Unique Improvements", "IMPROVEMENT"],
    ["Unique Improvement", "IMPROVEMENT"],
    ["Unique Quarters", "CITY_UNIQUE_QUARTER"],
    ["Unique Quarter", "CITY_UNIQUE_QUARTER"],
    // "Roman Unique Diplomacy Building" is one label too -- the game writes the
    // yield category into the middle of it, so each variant is listed here
    // (longest first) or the glyph lands on "Building" and a second one on the
    // yield word.
    ["Unique Gold and Military Building", "CITY_BUILDING_LIST"],
    ["Unique Happiness Building", "CITY_BUILDING_LIST"],
    ["Unique Production Building", "CITY_BUILDING_LIST"],
    ["Unique Diplomacy Building", "CITY_BUILDING_LIST"],
    ["Unique Culture Building", "CITY_BUILDING_LIST"],
    ["Unique Science Building", "CITY_BUILDING_LIST"],
    ["Unique Military Building", "CITY_BUILDING_LIST"],
    ["Unique Food Building", "CITY_BUILDING_LIST"],
    ["Unique Gold Building", "CITY_BUILDING_LIST"],
    ["Unique Buildings", "CITY_BUILDING_LIST"],
    ["Unique Building", "CITY_BUILDING_LIST"],
    ["City-State", "CITYSTATE"],
    ["City Hall", "CITY_HALL"],
    ["Aerodrome Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Aerodrome Commander", "UNIT_AERODROME_COMMANDER"],
    ["Aerodrome", "CITY_BUILDING_LIST"],
    ["Jinja", "IMPROVEMENT_JINJA"],
    ["Growth Rate", "GROWTH_RATE"],
    ["Trade Routes", "TRADE_ROUTE"],
    ["Trade Route", "TRADE_ROUTE"],
    ["Trade Caravan", "UNIT_TRADE_CARAVAN"],
    ["Trade Ship", "UNIT_TRADE_SHIP"],
    ["Migrant", "UNIT_MIGRANT"],
    ["Merchant", "UNIT_MERCHANT"],
    ["Build Roads", "BUILD_ROAD"],
    ["Build Road", "BUILD_ROAD"],
    ["Open Borders", "DIPLOMACY"],
    // The plural MUST be listed too: "\bNatural Wonder\b" cannot match inside
    // "Natural Wonders" (the \b fails before the "s"), so without this entry the
    // later bare "Wonders" pattern split the phrase and stamped the man-made
    // [icon:WONDER] in the middle of it ("Natural [wonder] Wonders").
    ["Natural Wonders", "TERRAIN_NATURAL_WONDER"],
    ["Natural Wonder", "TERRAIN_NATURAL_WONDER"],
    // Terrain/feature words the Improvement and Wonder cards lean on.
    ["Flat Terrain", "TERRAIN_GENERIC"],
    ["Floodplains", "TERRAIN_GENERIC"],
    ["Floodplain", "TERRAIN_GENERIC"],
    // Terrain, Biome and Feature words the Improvement / Wonder placement and
    // effect lines are full of. All share the generic terrain glyph -- the game
    // ships no per-biome icon. Compounds ("Navigable River", "Flat Terrain")
    // are listed above/below so they still win over the bare word.
    ["bonuses and adjacencies", "TERRAIN_GENERIC"],
    // compounds first, so the bare "River" / "Terrain" words below cannot
    // split them
    ["Navigable Rivers", "TERRAIN_GENERIC"],
    ["Navigable River", "TERRAIN_GENERIC"],
    ["Rough", "TERRAIN_GENERIC"],
    ["Flat", "TERRAIN_GENERIC"],
    ["Wet", "TERRAIN_GENERIC"],
    ["Vegetated", "TERRAIN_GENERIC"],
    ["Rivers", "TERRAIN_GENERIC"],
    ["River", "TERRAIN_GENERIC"],
    ["Coast", "TERRAIN_GENERIC"],
    ["Ocean", "TERRAIN_GENERIC"],
    ["Lakes", "TERRAIN_GENERIC"],
    ["Lake", "TERRAIN_GENERIC"],
    ["Grasslands", "TERRAIN_GENERIC"],
    ["Grassland", "TERRAIN_GENERIC"],
    ["Tropical", "TERRAIN_GENERIC"],
    ["Tundra", "TERRAIN_GENERIC"],
    ["Desert", "TERRAIN_GENERIC"],
    ["Plains", "TERRAIN_GENERIC"],
    ["Hills", "TERRAIN_GENERIC"],
    ["Reefs", "TERRAIN_GENERIC"],
    ["Reef", "TERRAIN_GENERIC"],
    ["Features", "TERRAIN_GENERIC"],
    ["Feature", "TERRAIN_GENERIC"],
    ["adjacencies", "TERRAIN_GENERIC"],
    ["Mountains", "TERRAIN_GENERIC"],
    ["Mountain", "TERRAIN_GENERIC"],
    ["Adjacency", "TERRAIN_GENERIC"],
    ["Rough or Vegetated", "TERRAIN_GENERIC"],
    ["Rough, Vegetated, and Wet", "TERRAIN_GENERIC"],
    ["Rough Terrain", "TERRAIN_GENERIC"],
    ["Vegetated Terrain", "TERRAIN_GENERIC"],
    ["Featureless terrain", "TERRAIN_GENERIC"],
    ["Featureless", "TERRAIN_GENERIC"],
    // Plurals first, for the same reason as "Natural Wonders" above: the bare
    // "Commanders" entry further down would otherwise split the phrase and
    // (for a Fleet Commander) stamp the wrong, Army icon inside it.
    ["Army Commanders", "UNIT_ARMY_COMMANDER"],
    ["Army Commander", "UNIT_ARMY_COMMANDER"],
    ["Fleet Commanders", "UNIT_FLEET_COMMANDER"],
    ["Fleet Commander", "UNIT_FLEET_COMMANDER"],
    // Compound unit-class phrases -- the icon belongs at the very start of the
    // whole phrase, so these must resolve before the bare "Naval Unit" /
    // "Commander" / "Unit" entries further down.
    ["Heavy Naval Units", "MILITARY"], ["Heavy Naval Unit", "MILITARY"],
    ["Light Naval Units", "MILITARY"], ["Light Naval Unit", "MILITARY"],
    ["Stealth Naval Units", "MILITARY"], ["Stealth Naval Unit", "MILITARY"],
    ["Ground Attack Air Units", "MILITARY"], ["Ground Attack Air Unit", "MILITARY"],
    ["Fighter Air Units", "MILITARY"], ["Fighter Air Unit", "MILITARY"],
    ["Siege Air Units", "MILITARY"], ["Siege Air Unit", "MILITARY"],
    ["Land Commander Units", "UNIT_ARMY_COMMANDER"], ["Land Commander Unit", "UNIT_ARMY_COMMANDER"],
    ["Naval Commander Units", "UNIT_FLEET_COMMANDER"], ["Naval Commander Unit", "UNIT_FLEET_COMMANDER"],
    ["Air Commander Units", "UNIT_ARMY_COMMANDER"], ["Air Commander Unit", "UNIT_ARMY_COMMANDER"],
    ["Commander Units", "UNIT_ARMY_COMMANDER"], ["Commander Unit", "UNIT_ARMY_COMMANDER"],
    ["Palace", "PALACE"],
    ["Academy", "ACADEMY"],
    ["Library", "LIBRARY"],
    ["Observatory", "OBSERVATORY"],
    ["Menagerie", "MENAGERIE"],
    ["Hospital", "HOSPITAL"],
    ["Temple", "TEMPLE"],
    ["Acropolis", "CITY_UNIQUE_QUARTER"],
    ["Necropolis", "CITY_UNIQUE_QUARTER"],
    ["Ulema", "CITY_UNIQUE_QUARTER"],
    ["Zócalo", "CITY_UNIQUE_QUARTER"],
    ["Zocalo", "CITY_UNIQUE_QUARTER"],
    ["Aerodrome Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Aerodrome Commander", "UNIT_AERODROME_COMMANDER"],
    ["Aircraft Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Aircraft Commander", "UNIT_AERODROME_COMMANDER"],
    ["Squadron Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Squadron Commander", "UNIT_AERODROME_COMMANDER"],
    ["Air Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Air Commander", "UNIT_AERODROME_COMMANDER"],
    ["Commanders", "UNIT_ARMY_COMMANDER"],
    ["Commander", "UNIT_ARMY_COMMANDER"],
    ["Wonders", "WONDER"],
    ["Wonder", "WONDER"],
    ["Codex", "GREATWORK"],
    ["Fortified Districts", "CITY_FORTIFIED"],
    ["Fortified District", "CITY_FORTIFIED"],
    ["Quarters", "CITY_URBAN"],
    ["Quarter", "CITY_URBAN"],
    ["Districts", "CITY_URBAN"],
    ["District", "CITY_URBAN"],
    ["districts", "CITY_URBAN"],
    ["district", "CITY_URBAN"],
    ["Towns", "YIELD_TOWNS"],
    ["Town", "YIELD_TOWNS"],
    ["Capital", "NOTIFICATION_SELECT_CAPITAL"],
    ["Specialist Limit", "SPECIALIST"],
    ["Specialists", "SPECIALIST"],
    ["Specialist", "SPECIALIST"],
    ["Resources", "RADIAL_RESOURCES"],
    ["Resource", "RADIAL_RESOURCES"],
    ["Celebration", "CELEBRATION"],
    ["Influence", "YIELD_DIPLOMACY"],
    ["Suzerain", "CITYSTATE"],
    ["Buildings", "CITY_BUILDING_LIST"],
    ["Building", "CITY_BUILDING_LIST"],
    ["Improvements", "IMPROVEMENT"],
    ["Improvement", "IMPROVEMENT"],
    ["Settlements", "YIELD_CITIES"],
    ["Settlement", "YIELD_CITIES"],
    ["settlements", "YIELD_CITIES"],
    ["settlement", "YIELD_CITIES"],
    // "Holy City" is one name -- without these the bare "City" entry below
    // split it and dropped a settlement glyph in the middle of the phrase.
    ["Holy Cities", "NAR_REW_RELIGION"],
    ["Holy City", "NAR_REW_RELIGION"],
    ["Cities", "YIELD_CITIES"],
    ["City", "YIELD_CITIES"],
    ["Hoplites", "UNIT_HOPLITE"],
    ["Hoplite", "UNIT_HOPLITE"],
    ["Cavalry Units", "MILITARY"],
    ["Cavalry Unit", "MILITARY"],
    ["Infantry Units", "MILITARY"],
    ["Infantry Unit", "MILITARY"],
    ["Ranged Units", "MILITARY"],
    ["Ranged Unit", "MILITARY"],
    ["Siege Units", "MILITARY"],
    ["Siege Unit", "MILITARY"],
    ["Naval Units", "MILITARY"],
    ["Naval Unit", "MILITARY"],
    ["Land Units", "MILITARY"],
    ["Land Unit", "MILITARY"],
    ["Air Units", "MILITARY"],
    ["Air Unit", "MILITARY"],
    ["Military Units", "MILITARY"],
    ["Military Unit", "MILITARY"],
    ["Independent Units", "INDEPENDENT_POWER"],
    ["Independent Unit", "INDEPENDENT_POWER"],
    ["Support Units", "UNIT"],
    ["Support Unit", "UNIT"],
    ["Civilian Units", "UNIT"],
    ["Civilian Unit", "UNIT"],
    ["Recon Units", "UNIT"],
    ["Recon Unit", "UNIT"],
    ["Units", "UNIT"],
    ["Unit", "UNIT"],
    // bare unit-class words in an enumeration ("against Infantry and Cavalry
    // Units") -- run last so the compound "<class> Unit(s)" entries win first.
    ["Infantry", "MILITARY"],
    ["Cavalry", "MILITARY"],
    ["Movement", "ACTION_MOVE"],
    ["Sight", "ACTION_SHOWALL"],
    ["Promotions", "NAR_REW_PROMOTION"],
    ["Promotion", "NAR_REW_PROMOTION"],
    ["Tradition", "NAR_REW_TRADITION_SLOT"],
    ["Science", "YIELD_SCIENCE"],
    ["Culture", "YIELD_CULTURE"],
    ["Happiness", "YIELD_HAPPINESS"],
    ["Production", "YIELD_PRODUCTION"],
    ["Population", "YIELD_POPULATION"],
    ["Food", "YIELD_FOOD"],
    ["Maintenance Cost", "YIELD_GOLD"],
    ["Maintenance", "YIELD_GOLD"]
  ];
  // An icon already sits on this phrase if there's an [icon:...] token within the
  // last ~3 words before it (covers "+3[icon:X] Culture" and, crucially,
  // "[icon:MILITARY] [TIP:...]Ranged Unit" -> do NOT also ice the trailing
  // "Unit"; "[icon:CITY_FORTIFIED] [TIP:...]Fortified Districts" -> not
  // "Districts"). [TIP:…]/[B] markup between the icon and the word is ignored.
  // an [icon:X] within ~2 words of the phrase already covers it -- but "and" /
  // "or" / a comma starts a NEW phrase ("[icon] Infantry and Cavalry Units"),
  // so don't let the guard reach across one.
  // The bridged words must belong to the SAME noun phrase. A conjunction starts
  // a new one ("[icon] Infantry and Cavalry Units"), and so does a preposition
  // or a bare quantifier: in "+1 [icon:YIELD_FOOD] on all Floodplains" the icon
  // belongs to the "+1", not to the Floodplains, so that phrase still earns its
  // own glyph.
  var UNIT_ICON_GUARD = /\[icon:[A-Za-z0-9_]+\](?:\s+(?!and\b|or\b|on\b|in\b|at\b|to\b|for\b|from\b|with\b|of\b|all\b|per\b|towards\b)[A-Za-z][\w'’-]*){0,2}[\s.;:()'’-]*$/;
  // Concept phrases that carry a game tooltip -> tapping the phrase opens it,
  // same as the [TIP:...] tokens already in the game's own description text.
  // (Trade Caravan / Trade Ship have no concept tooltip -- GLOBAL_TIPS gets a
  // synthetic entry from their one-line game description below.)
  GLOBAL_TIPS.LOC_SYN_TRADE_CARAVAN = GLOBAL_TIPS.LOC_SYN_TRADE_CARAVAN ||
    "Automatically-moved Civilian Unit that shows activity along a Land Trade Route.";
  GLOBAL_TIPS.LOC_SYN_TRADE_SHIP = GLOBAL_TIPS.LOC_SYN_TRADE_SHIP ||
    "Automatically-moved Civilian Unit that shows activity along a Naval Trade Route.";
  // Migrant/Merchant have no Civilopedia CONCEPTS page either -- source the
  // synthetic tip from the game's own SUMMARY text for that unit (data.js).
  GLOBAL_TIPS.LOC_SYN_MIGRANT = GLOBAL_TIPS.LOC_SYN_MIGRANT ||
    "Never trained -- appears automatically when a Town grows, from certain Wonders and policies, or when a Settlement is razed. Can only settle as Rural Population.";
  GLOBAL_TIPS.LOC_SYN_MERCHANT = GLOBAL_TIPS.LOC_SYN_MERCHANT ||
    "Civilian Unit who can establish a Trade Route or Build Roads between Settlements.";
  GLOBAL_TIPS.LOC_SYN_AGELESS_UNIT = GLOBAL_TIPS.LOC_SYN_AGELESS_UNIT ||
    "Is not replaced or removed at an Age transition.";
  // No LOC_PEDIA_CONCEPTS_MOVEMENT_TOOLTIP exists for the bare word -- the
  // game only documents it as the "Move Range" stat shown on a unit's panel.
  GLOBAL_TIPS.LOC_SYN_MOVEMENT = GLOBAL_TIPS.LOC_SYN_MOVEMENT ||
    "The number of tiles a Unit can move in a single turn (its Move Range).";
  // No LOC_PEDIA_CONCEPTS_WET_TERRAIN_TOOLTIP exists -- Wet Terrain (Marsh)
  // is only ever named in unit-ability text, never its own Concepts page.
  GLOBAL_TIPS.LOC_SYN_WET_TERRAIN = GLOBAL_TIPS.LOC_SYN_WET_TERRAIN ||
    "Wet Terrain (Marsh) ends a unit's movement.";
  // No LOC_PEDIA_CONCEPTS_CARGO_TOOLTIP exists -- sourced from the Treasure
  // Convoy concept's own text (LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP).
  GLOBAL_TIPS.LOC_SYN_CARGO = GLOBAL_TIPS.LOC_SYN_CARGO ||
    "The amount of Gold a Treasure Convoy delivers when it unloads at a Settlement in your Homelands.";
  // No Civilopedia Concepts page exists -- sourced from the narrative story's
  // own game files (LOC_3002A_STORYTITLE / REQSET_3002A_NARRATIVE_REQUISITE,
  // triggers after a Chevaler kills an enemy Unit).
  GLOBAL_TIPS.LOC_SYN_CHEVALER_CHARGE = GLOBAL_TIPS.LOC_SYN_CHEVALER_CHARGE ||
    "Norman Narrative Event: triggers after a Chevaler kills an enemy Unit in combat. Choosing “Victory is certain” grants +25% Production towards training further Chevaler.";
  // No Civilopedia Concepts page exists -- sourced from the Voi Chien's own
  // innate ability in the game files (CAM_QUAN_UNIT_OWNER_TERRITORY /
  // CAM_QUAN_UNIT_NOT_OWNER_TERRITORY modifiers).
  GLOBAL_TIPS.LOC_SYN_CAM_QUAN = GLOBAL_TIPS.LOC_SYN_CAM_QUAN ||
    "Voi Chiến's own ability: +3 Combat Strength, increased to +6 while inside friendly territory.";
  // No LOC_PEDIA_CONCEPTS_ADJACENCY_TOOLTIP exists for the bare word -- the
  // game only ever documents individual Adjacency bonuses per Building.
  GLOBAL_TIPS.LOC_SYN_ADJACENCY = GLOBAL_TIPS.LOC_SYN_ADJACENCY ||
    "A yield bonus a Building, District, or Improvement gains for being placed next to specific terrain, Resources, or other Constructibles.";
  // LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP is already referenced by other game
  // text in data.js, but its own definition was never carried over.
  GLOBAL_TIPS.LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP = GLOBAL_TIPS.LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP ||
    "Mountains cannot be settled, worked, or improved, but they block Sight beyond them, grant a Combat Strength bonus to Units on or adjacent to them, and can grant Adjacency bonuses to nearby Buildings.";
  // No LOC_PEDIA_CONCEPTS_UNIT_TOOLTIP exists for the bare word -- sourced
  // from the game's own "Unit Types" Civilopedia page instead (Military /
  // Support / Civilian definitions), not invented.
  GLOBAL_TIPS.LOC_SYN_UNIT = GLOBAL_TIPS.LOC_SYN_UNIT ||
    "A single movable piece on the map, created by a civilization. Falls into one of three types: Military (can fight), Civilian (specialized non-combat roles, e.g. Merchants or Settlers), or Support (no combat strength, but offers exploration and other utility).";
  GLOBAL_TIPS.LOC_SYN_AERODROME = GLOBAL_TIPS.LOC_SYN_AERODROME ||
    "A Modern-era military Building. Air Units are trained at and stationed on an Aerodrome, and an Aerodrome Commander is permanently linked to one and cannot move.";
  // No LOC_PEDIA_CONCEPTS_ECONOMIC_VICTORY_TOOLTIP exists -- sourced from the
  // game's own Victories page (victories.js, VICTORY_ECONOMIC).
  GLOBAL_TIPS.LOC_SYN_ECONOMIC_VICTORY = GLOBAL_TIPS.LOC_SYN_ECONOMIC_VICTORY ||
    "Won by holding significantly more GDP than every other player and maintaining that lead for 5 turns.";
  // No LOC_PEDIA_CONCEPTS_SWIFT_TOOLTIP exists -- sourced from the game's own
  // Combat Modifiers concepts page ("Swift: ...") instead.
  GLOBAL_TIPS.LOC_SYN_SWIFT_ABILITY = GLOBAL_TIPS.LOC_SYN_SWIFT_ABILITY ||
    "Units with the Swift ability ignore the Zone of Control exerted by enemy units, letting them move freely past them.";
  // No LOC_PEDIA_CONCEPTS_BLIZZARD_TOOLTIP exists -- sourced from the game's
  // random-events data (CLASS_BLIZZARD, Tundra-only Natural Disaster).
  GLOBAL_TIPS.LOC_SYN_BLIZZARD = GLOBAL_TIPS.LOC_SYN_BLIZZARD ||
    "A Natural Disaster on Tundra tiles: it damages Units, damages Buildings and Improvements, and reduces Food and Production yields in the area for its duration.";
  // No LOC_PEDIA_CONCEPTS_TROPICAL_TERRAIN_TOOLTIP exists -- Tropical is a
  // latitude-banded Biome (BIOME_TROPICAL), not a Terrain or Feature type.
  GLOBAL_TIPS.LOC_SYN_TROPICAL_TERRAIN = GLOBAL_TIPS.LOC_SYN_TROPICAL_TERRAIN ||
    "A Biome found near the equator, independent of the underlying Terrain -- it can occur on Flat, Hill, or Mountain tiles and typically hosts Rainforest, Mangrove, or Tropical Floodplain.";
  // The game names the Belief classes internally (Founder / Enhancer /
  // Reliquary) but writes no concept tooltip for the word itself -- this is the
  // Religion page's own closing sentence, plus the Ages the two sets belong to.
  GLOBAL_TIPS.LOC_SYN_BELIEF = GLOBAL_TIPS.LOC_SYN_BELIEF ||
    "Beliefs determine what benefits are gained from converting Settlements to follow a Religion. A Religion adds them one at a time, in the Exploration Age; Antiquity's Pantheon Beliefs are an earlier, separate set.";
  // The game never TIP-wraps "Narrative Event" and ships no concept tooltip for
  // it (it is not in the Civilopedia's concept list at all). Written from the
  // narrative-stories data itself: stories fire from world/player conditions and
  // offer a choice of rewards -- two of them carry EFFECT_ADD_BELIEF, which is
  // why this reference counts them among the three sources of extra Beliefs.
  GLOBAL_TIPS.LOC_SYN_NARRATIVE_EVENT = GLOBAL_TIPS.LOC_SYN_NARRATIVE_EVENT ||
    "A story moment triggered by what is happening in your game, offering a choice between rewards -- yields, Units, Relics, Attribute Points, and in two cases an extra Belief. The choice is permanent.";
  // Legacy Paths have no concept tooltip either; written from victories.xml
  // (each path carries three AgeProgressionMilestones and a Golden Age unlock).
  GLOBAL_TIPS.LOC_SYN_LEGACY_PATH = GLOBAL_TIPS.LOC_SYN_LEGACY_PATH ||
    "An Age's scoring track. Each Legacy Path has three milestones; clearing the third completes the path and earns its Golden Age reward for the next Age. You may chase one, several, or none.";
  // LOC_LEGACY_PATH_EXPLORATION_CULTURE_NAME / _DESCRIPTION -- the game's own
  // words for the Exploration Cultural path, plus its 6/9/12 milestone rows.
  GLOBAL_TIPS.LOC_SYN_TOSHAKHANA = GLOBAL_TIPS.LOC_SYN_TOSHAKHANA ||
    "The Exploration Age's Cultural Legacy Path. \"Display 12 Relics in your empire.\" Its three milestones sit at 6, 9 and 12 displayed Relics.";
  // LOC_PROJECT_TOWN_TEMPLE_DESCRIPTION, verbatim -- the project's display name
  // is \"Religious Site\" even though its internal type is PROJECT_TOWN_TEMPLE.
  GLOBAL_TIPS.LOC_SYN_RELIGIOUS_SITE = GLOBAL_TIPS.LOC_SYN_RELIGIOUS_SITE ||
    "A Town specialisation project: +2 Happiness on all Buildings and +2 Relic Slots on Temples in this Town, and +25% Gold towards purchasing Temples there.";
  // No concept tooltip for conversion; written from UNITOPERATION_SPREAD_RELIGION.
  GLOBAL_TIPS.LOC_SYN_CONVERSION = GLOBAL_TIPS.LOC_SYN_CONVERSION ||
    "Changing a Settlement's Urban or Rural Population to your Religion with a Missionary's Spread Religion charge. A Settlement follows your Religion only once both halves match.";
  // LOC_PEDIA_CONCEPTS_PAGE_ATTRIBUTE_1_CHAPTER_CONTENT_PARA_2 + the Ages page:
  // a Wildcard point is the one that fits anywhere.
  GLOBAL_TIPS.LOC_SYN_WILDCARD = GLOBAL_TIPS.LOC_SYN_WILDCARD ||
    "The Attribute / Legacy point that fits any category. Where a Cultural point only buys Cultural rewards, a Wildcard buys whichever one you want -- which is how Age Transition cards are paid for.";
  // Written from age-transition.xml: each row is a card with a WildcardCost and
  // an Unlock requirement, offered once when the Age rolls over.
  GLOBAL_TIPS.LOC_SYN_AGE_TRANSITION = GLOBAL_TIPS.LOC_SYN_AGE_TRANSITION ||
    "Rewards offered once, on the screen between two Ages. Each card costs Legacy points, and appears only if you met its unlock condition in the Age that just ended.";
  // No LOC_PEDIA_CONCEPTS_MOUNT_EVEREST_TOOLTIP exists -- sourced from the
  // game's own Natural Wonder feature data (FEATURE_MOUNT_EVEREST).
  GLOBAL_TIPS.LOC_SYN_MOUNT_EVEREST = GLOBAL_TIPS.LOC_SYN_MOUNT_EVEREST ||
    "A Natural Wonder on Mountain terrain in Tropical Biomes. It reveals every Mountain tile on the map and grants nearby Happiness, Diplomacy, and Culture.";
  GLOBAL_TIPS.LOC_SYN_CRISIS = GLOBAL_TIPS.LOC_SYN_CRISIS ||
    "A period of upheaval that begins partway through each Age (plague, revolt, invasion, ...). It opens Crisis Policy slots and drives the world toward the next Age.";
  GLOBAL_TIPS.LOC_SYN_CRISIS_POLICY = GLOBAL_TIPS.LOC_SYN_CRISIS_POLICY ||
    "A Social Policy (Tradition) that can only be slotted while a Crisis is active. Crisis events unlock which Crisis Policies are available.";
  GLOBAL_TIPS.LOC_SYN_DIVINE_PUNISHMENT = GLOBAL_TIPS.LOC_SYN_DIVINE_PUNISHMENT ||
    "Crisis Policy (Tradition): +5 Happiness in Infected Settlements that follow your Religion; those Settlements gain a Migrant when Infected.";
  GLOBAL_TIPS.LOC_SYN_DIVINE_MERCY = GLOBAL_TIPS.LOC_SYN_DIVINE_MERCY ||
    "Crisis Policy (Tradition): Buildings, Improvements and Districts in Settlements that follow your Religion are not damaged by Infection.";
  GLOBAL_TIPS.LOC_SYN_SOCIAL_POLICY = GLOBAL_TIPS.LOC_SYN_SOCIAL_POLICY ||
    "A slotted bonus in your Government. Most Social Policies are Traditions unlocked by Civics; Crisis Policies are slotted only during a Crisis.";
  // game LOC_PEDIA_CONCEPTS_UNREST_TOOLTIP (not carried in data.js tips).
  GLOBAL_TIPS.LOC_PEDIA_CONCEPTS_UNREST_TOOLTIP = GLOBAL_TIPS.LOC_PEDIA_CONCEPTS_UNREST_TOOLTIP ||
    "Settlements suffering from Unrest cannot purchase Units, Buildings, Improvements, or Repairs. They incur a [icon:YIELD_HAPPINESS] Happiness penalty until the Unrest ends.";
  // Plague-Crisis Traditions (CultureSlotType CRISIS_CULTURE_SLOT, IsCrisis) --
  // game LOC_TRADITION_HUMORALISM/PLAGUE_CULTS_DESCRIPTION.
  GLOBAL_TIPS.LOC_SYN_HUMORALISM = GLOBAL_TIPS.LOC_SYN_HUMORALISM ||
    "Crisis Policy (Tradition): gain 100 [icon:YIELD_SCIENCE] Science (scaled by Game Speed) when a Physician Treats the Sick on a District with a Hospital.";
  GLOBAL_TIPS.LOC_SYN_PLAGUE_CULTS = GLOBAL_TIPS.LOC_SYN_PLAGUE_CULTS ||
    "Crisis Policy (Tradition): gain 100 [icon:YIELD_CULTURE] Culture (scaled by Game Speed) when a Physician Treats the Sick on a District with a Temple.";
  var UNIT_CONCEPT_TIPS = {
    // coverage pass (2026-09-14): the game's own concept tooltips
    "Settlement Limit": "LOC_PEDIA_CONCEPTS_SETTLEMENT_LIMIT_TOOLTIP",
    "Distant Lands": "LOC_PEDIA_CONCEPTS_DISTANT_LANDS_TOOLTIP",
    "Warehouse Buildings": "LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP",
    "Warehouse Building": "LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP",
    "Warehouses": "LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP",
    "Warehouse": "LOC_PEDIA_CONCEPTS_WAREHOUSE_TOOLTIP",
    "Treasure Convoys": "LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP",
    "Treasure Convoy": "LOC_PEDIA_CONCEPTS_TREASURE_CONVOY_TOOLTIP",
    "Treasure Resources": "LOC_PEDIA_CONCEPTS_TREASURE_RESOURCES_TOOLTIP",
    "Treasure Resource": "LOC_PEDIA_CONCEPTS_TREASURE_RESOURCES_TOOLTIP",
    "Resource Capacity": "LOC_PEDIA_CONCEPTS_RESOURCE_CAPACITY_TOOLTIP",
    "City Resources": "LOC_PEDIA_CONCEPTS_CITY_RESOURCES_TOOLTIP",
    "Defensive Fortifications": "LOC_PEDIA_CONCEPTS_DEFENSIVE_FORTIFICATION_TOOLTIP",
    "Defensive Fortification": "LOC_PEDIA_CONCEPTS_DEFENSIVE_FORTIFICATION_TOOLTIP",
    "Diplomatic Projects": "LOC_PEDIA_CONCEPTS_DIPLOMATIC_PROJECTS_TOOLTIP",
    "Diplomatic Project": "LOC_PEDIA_CONCEPTS_DIPLOMATIC_PROJECTS_TOOLTIP",
    "Economic Victory": "LOC_PEDIA_CONCEPTS_ECONOMIC_VICTORY_TOOLTIP",
    "Minor Rivers": "LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP",
    "Minor River": "LOC_PEDIA_CONCEPTS_MINOR_RIVER_TOOLTIP",
    "Trade Network": "LOC_PEDIA_CONCEPTS_TRADE_NETWORK_TOOLTIP",
    "Town Focus": "LOC_PEDIA_CONCEPTS_TOWN_FOCUS_TOOLTIP",
    "Age Progress": "LOC_PEDIA_CONCEPTS_AGE_PROGRESS_TOOLTIP",
    "War Support": "LOC_PEDIA_CONCEPTS_WAR_SUPPORT_TOOLTIP",
    "Pantheons": "LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP",
    "Pantheon": "LOC_PEDIA_CONCEPTS_PANTHEON_TOOLTIP",
    "Religion": "LOC_PEDIA_CONCEPTS_RELIGION_TOOLTIP",
    "Governments": "LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP",
    "Government": "LOC_PEDIA_CONCEPTS_GOVERNMENT_TOOLTIP",
    "Attributes": "LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP",
    "Attribute": "LOC_PEDIA_CONCEPTS_ATTRIBUTE_TOOLTIP",
    "Innovation": "LOC_PEDIA_CONCEPTS_INNOVATION_TOOLTIP",
    "Artifacts": "LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP",
    "Artifact": "LOC_PEDIA_CONCEPTS_ARTIFACT_TOOLTIP",
    "Relics": "LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP",
    "Relic": "LOC_PEDIA_CONCEPTS_RELIC_TOOLTIP",
    "Projects": "LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP",
    "Project": "LOC_PEDIA_CONCEPTS_PROJECTS_TOOLTIP",
    "Embarked": "LOC_PEDIA_CONCEPTS_EMBARKED_TOOLTIP",
    "Embark": "LOC_PEDIA_CONCEPTS_EMBARK_TOOLTIP",
    "Appeal": "LOC_PEDIA_CONCEPTS_APPEAL_TOOLTIP",
    "Sanctions": "LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP",
    "Sanction": "LOC_PEDIA_CONCEPTS_SANCTION_TOOLTIP",
    "Endeavors": "LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP",
    "Endeavor": "LOC_PEDIA_CONCEPTS_ENDEAVOR_TOOLTIP",
    "Stealth": "LOC_PEDIA_CONCEPTS_STEALTH_TOOLTIP",
    "Commendations": "LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP",
    "Commendation": "LOC_PEDIA_CONCEPTS_COMMENDATION_TOOLTIP",
    "Alliances": "LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP",
    "Alliance": "LOC_PEDIA_CONCEPTS_ALLIANCE_TOOLTIP",
    "Espionage": "LOC_PEDIA_CONCEPTS_ESPIONAGE_TOOLTIP",
    "Skirmish": "LOC_PEDIA_CONCEPTS_SKIRMISH_TOOLTIP",
    "Garrisoned": "LOC_PEDIA_CONCEPTS_GARRISONED_TOOLTIP",
    "Natural Wonders": "LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP",
    "Natural Wonder": "LOC_PEDIA_CONCEPTS_NATURAL_WONDER_TOOLTIP",
    "Unique Buildings": "LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP",
    "Unique Building": "LOC_PEDIA_CONCEPTS_UNIQUE_BUILDING_TOOLTIP",
    "Unique Improvements": "LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP",
    "Unique Improvement": "LOC_PEDIA_CONCEPTS_UNIQUE_IMPROVEMENT_TOOLTIP",
    "Unique Quarters": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Unique Quarter": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Floodplains": "LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP",
    "Floodplain": "LOC_PEDIA_CONCEPTS_FLOODPLAINS_TOOLTIP",
    "Flanking": "LOC_PEDIA_CONCEPTS_FLANKING_TOOLTIP",
    "Flat Terrain": "LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP",
    "Independent Power": "LOC_PEDIA_CONCEPTS_INDEPENDENT_POWER_TOOLTIP",
    "Promotions": "LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP",
    "Cavalry": "LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP",
    "Infantry": "LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP",
    "Commander Units": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "districts": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    "district": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    "settlements": "LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP",
    "settlement": "LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP",
    "bonuses and adjacencies": "LOC_SYN_ADJACENCY",
    "adjacencies": "LOC_SYN_ADJACENCY",
    "Rivers": "LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP",
    "River": "LOC_PEDIA_CONCEPTS_RIVER_TOOLTIP",
    "Rough": "LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP",
    "Flat": "LOC_PEDIA_CONCEPTS_FLAT_TERRAIN_TOOLTIP",
    "Vegetated": "LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP",
    "Coast": "LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP",
    "Ocean": "LOC_PEDIA_CONCEPTS_WATER_TERRAIN_TOOLTIP",
    "Holy City": "LOC_PEDIA_CONCEPTS_HOLY_CITY_TOOLTIP",
    "Holy Cities": "LOC_PEDIA_CONCEPTS_HOLY_CITY_TOOLTIP",
    "Aerodrome": "LOC_SYN_AERODROME",
    "Jinja": "LOC_SYN_JINJA",
    "Antiquity Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Antiquity-Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Exploration Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Exploration-Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Modern Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Modern-Age": "LOC_PEDIA_CONCEPTS_AGE_TOOLTIP",
    "Crisis": "LOC_SYN_CRISIS",
    "Crisis Policy": "LOC_SYN_CRISIS_POLICY",
    "Crisis Policies": "LOC_SYN_CRISIS_POLICY",
    "Crisis Policy Slot": "LOC_SYN_CRISIS_POLICY",
    "Divine Punishment": "LOC_SYN_DIVINE_PUNISHMENT",
    "Divine Mercy": "LOC_SYN_DIVINE_MERCY",
    "Humoralism": "LOC_SYN_HUMORALISM",
    "Plague Cults": "LOC_SYN_PLAGUE_CULTS",
    "Social Policy": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "Social Policies": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "Policy": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "Policies": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "policy": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "policies": "LOC_PEDIA_CONCEPTS_SOCIAL_POLICY_TOOLTIP",
    "Ranged Units": "LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP",
    "Ranged Unit": "LOC_PEDIA_CONCEPTS_RANGED_UNITS_TOOLTIP",
    "Infantry Units": "LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP",
    "Infantry Unit": "LOC_PEDIA_CONCEPTS_INFANTRY_UNITS_TOOLTIP",
    "Cavalry Units": "LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP",
    "Cavalry Unit": "LOC_PEDIA_CONCEPTS_CAVALRY_UNITS_TOOLTIP",
    "Siege Units": "LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP",
    "Siege Unit": "LOC_PEDIA_CONCEPTS_SIEGE_UNITS_TOOLTIP",
    "Naval Units": "LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP",
    "Naval Unit": "LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP",
    "Heavy Naval Unit": "LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP",
    "Light Naval Unit": "LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP",
    "Stealth Naval Unit": "LOC_PEDIA_CONCEPTS_NAVAL_UNITS_TOOLTIP",
    "Ground Attack Air Unit": "LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP",
    "Fighter Air Unit": "LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP",
    "Siege Air Unit": "LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP",
    "Land Commander Unit": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Naval Commander Unit": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Air Commander Unit": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Commander Unit": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Land Units": "LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP",
    "Land Unit": "LOC_PEDIA_CONCEPTS_LAND_UNITS_TOOLTIP",
    "Air Units": "LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP",
    "Air Unit": "LOC_PEDIA_CONCEPTS_AIR_UNITS_TOOLTIP",
    "Military Units": "LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP",
    "Military Unit": "LOC_PEDIA_CONCEPTS_MILITARY_UNIT_TOOLTIP",
    "Support Units": "LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP",
    "Support Unit": "LOC_PEDIA_CONCEPTS_SUPPORT_UNIT_TOOLTIP",
    "Civilian Units": "LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP",
    "Civilian Unit": "LOC_PEDIA_CONCEPTS_CIVILIAN_UNIT_TOOLTIP",
    "Improvements": "LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP",
    "Improvement": "LOC_PEDIA_CONCEPTS_IMPROVEMENT_TOOLTIP",
    "Fortified Districts": "LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP",
    "Fortified District": "LOC_PEDIA_CONCEPTS_FORTIFIED_DISTRICTS_TOOLTIP",
    "Districts": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    "District": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    "Commanders": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Commander": "LOC_PEDIA_CONCEPTS_COMMANDER_TOOLTIP",
    "Trade Routes": "LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP",
    "Trade Route": "LOC_PEDIA_CONCEPTS_TRADE_ROUTE_TOOLTIP",
    "Trade Caravan": "LOC_SYN_TRADE_CARAVAN",
    "Trade Ship": "LOC_SYN_TRADE_SHIP",
    "Migrant": "LOC_SYN_MIGRANT",
    "Merchant": "LOC_SYN_MERCHANT",
    "Units": "LOC_SYN_UNIT",
    "Unit": "LOC_SYN_UNIT",
    "Ageless": "LOC_SYN_AGELESS_UNIT",
    "Movement": "LOC_SYN_MOVEMENT",
    "Maintenance Cost": "LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP",
    "Maintenance": "LOC_PEDIA_CONCEPTS_MAINTENANCE_TOOLTIP",
    "Navigable Rivers": "LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP",
    "Navigable River": "LOC_PEDIA_CONCEPTS_NAVIGABLE_RIVER_TOOLTIP",
    "Mountains": "LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP",
    "Mountain": "LOC_PEDIA_CONCEPTS_MOUNTAIN_TOOLTIP",
    "Adjacency": "LOC_SYN_ADJACENCY",
    "Swift ability": "LOC_SYN_SWIFT_ABILITY",
    "Blizzards": "LOC_SYN_BLIZZARD",
    "Blizzard": "LOC_SYN_BLIZZARD",
    "Amphibious ability": "LOC_PEDIA_CONCEPTS_AMPHIBIOUS_TOOLTIP",
    "Amphibious": "LOC_PEDIA_CONCEPTS_AMPHIBIOUS_TOOLTIP",
    "Tropical Terrain": "LOC_SYN_TROPICAL_TERRAIN",
    "Mount Everest": "LOC_SYN_MOUNT_EVEREST",
    // Data-driven pass (2026-09-11): every UNIT_CONCEPT_ICONS entry below had
    // an icon but no tap-tooltip -- wired up wherever data.js's own "tips"
    // object (game LOC_PEDIA_CONCEPTS_*_TOOLTIP text) actually has that exact
    // concept, instead of writing new copy by hand. Entries with no matching
    // game concept (e.g. bare "Unit"/"Units", "Influence") are left as
    // icon-only on purpose -- no invented tooltip text.
    "Settlements": "LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP",
    "Settlement": "LOC_PEDIA_CONCEPTS_SETTLEMENT_TOOLTIP",
    "Cities": "LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP",
    "City": "LOC_PEDIA_CONCEPTS_CITIES_TOOLTIP",
    "Towns": "LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP",
    "Town": "LOC_PEDIA_CONCEPTS_TOWN_TOOLTIP",
    "Population": "LOC_PEDIA_CONCEPTS_POPULATION_TOOLTIP",
    "Wonders": "LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP",
    "Wonder": "LOC_PEDIA_CONCEPTS_WONDERS_TOOLTIP",
    "Buildings": "LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP",
    "Building": "LOC_PEDIA_CONCEPTS_BUILDINGS_TOOLTIP",
    "Resources": "LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP",
    "Resource": "LOC_PEDIA_CONCEPTS_RESOURCES_TOOLTIP",
    "Specialists": "LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP",
    "Specialist": "LOC_PEDIA_CONCEPTS_SPECIALIST_TOOLTIP",
    "Specialist Limit": "LOC_PEDIA_CONCEPTS_SPECIALIST_LIMIT_TOOLTIP",
    "Celebration": "LOC_PEDIA_CONCEPTS_CELEBRATIONS_TOOLTIP",
    "Suzerain": "LOC_PEDIA_CONCEPTS_SUZERAIN_TOOLTIP",
    "Capital": "LOC_PEDIA_CONCEPTS_CAPITAL_TOOLTIP",
    "Palace": "LOC_PEDIA_CONCEPTS_PALACE_TOOLTIP",
    "Growth Rate": "LOC_PEDIA_CONCEPTS_GROWTH_RATE_TOOLTIP",
    "Tradition": "LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP",
    "Tradition slot": "LOC_PEDIA_CONCEPTS_TRADITION_TOOLTIP",
    "Command Radius": "LOC_PEDIA_CONCEPTS_COMMAND_RADIUS_TOOLTIP",
    "Zone of Control": "LOC_PEDIA_CONCEPTS_ZONE_OF_CONTROL_TOOLTIP",
    "Great Work Slot": "LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP",
    "Great Work": "LOC_PEDIA_CONCEPTS_GREAT_WORKS_TOOLTIP",
    "City-State": "LOC_PEDIA_CONCEPTS_CITY_STATE_TOOLTIP",
    "Codex": "LOC_PEDIA_CONCEPTS_CODEX_TOOLTIP",
    // Unique Quarters -- each is a specific instance of the same concept.
    "Acropolis": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Necropolis": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Ulema": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Zócalo": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    "Zocalo": "LOC_PEDIA_CONCEPTS_UNIQUE_QUARTER_TOOLTIP",
    // Quarters/Districts share one icon token (CITY_URBAN) already -- share
    // the District concept tip too.
    "Quarters": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    "Quarter": "LOC_PEDIA_CONCEPTS_DISTRICT_TOOLTIP",
    // Same data-driven pass, second sweep over unit-attrs.js's combat/terrain
    // bullet lines (already icon'd, just never tap-tooltipped).
    "Combat Strength": "LOC_PEDIA_CONCEPTS_COMBAT_STRENGTH_TOOLTIP",
    "Sight": "LOC_PEDIA_CONCEPTS_SIGHT_TOOLTIP",
    "Promotion": "LOC_PEDIA_CONCEPTS_PROMOTION_TOOLTIP",
    "Rough Terrain": "LOC_PEDIA_CONCEPTS_ROUGH_TERRAIN_TOOLTIP",
    "Vegetated Terrain": "LOC_PEDIA_CONCEPTS_VEGETATED_TERRAIN_TOOLTIP"
  };
  function linkifyUnitConcepts(text) {
    // "[B]Aircraft[/B] Commanders": the bold splits the term, so the Army
    // Commander glyph would land on the bare "Commanders". Bold the whole term.
    text = text.replace(/\[B\](Aircraft|Squadron|Army|Fleet)\[\/B\]\s+(Commanders?)\b/g, "[B]$1 $2[/B]");
    // Game text often writes "against [TIP:…INFANTRY_UNITS…]Infantry[/TIP] and
    // Cavalry Units" -- the bare-word "Infantry" is already tip-wrapped so the
    // concept pass skips it and it gets no icon. Give any tip-wrapped bare
    // unit-class word its [icon:MILITARY] up front (unless one already sits
    // there).
    text = text.replace(
      /(\[icon:[^\]]+\]\s*)?(\[TIP:LOC_PEDIA_CONCEPTS_(?:INFANTRY|CAVALRY|RANGED|SIEGE|NAVAL|LAND|AIR|MILITARY)_UNITS?_TOOLTIP\])(Infantry|Cavalry|Ranged|Siege|Naval|Land|Air|Military)(\[\/TIP\])/g,
      function (m, iconPre, tipOpen, word, tipClose) {
        if (iconPre) return m;
        return "[icon:MILITARY] " + tipOpen + word + tipClose;
      });
    // "Air [TIP]Commander[/TIP] Unit": the game tip-wraps the middle word, so
    // the phrase entries below cannot see the whole phrase and the icon would
    // land between "Air" and "Commander". Ice the phrase up front instead.
    text = text.replace(
      /(\[icon:[^\]]+\]\s*)?\b(Air|Naval|Land|Army|Fleet|Squadron)\s+(\[TIP:[^\]]+\])?(Commanders?)(\[\/TIP\])?(\s+Units?)?\b/g,
      function (m, iconPre, kind, tipOpen, word, tipClose, unit) {
        if (iconPre) return m;
        var icon = kind === "Naval" || kind === "Fleet" ? "UNIT_FLEET_COMMANDER" :
          kind === "Air" || kind === "Squadron" ? "UNIT_AERODROME_COMMANDER" : "UNIT_ARMY_COMMANDER";
        return "[icon:" + icon + "] " + kind + " " + (tipOpen || "") + word + (tipClose || "") + (unit || "");
      });
    // The FIRST class in an enumeration is a bare word the pass above never
    // sees: "+1 Range for Ranged and [TIP:..]Siege Units[/TIP]" left "Ranged"
    // glyphless while its partner got one. Ice it too, the same way the Units
    // section already treats "Infantry Units and Cavalry Units".
    text = text.replace(
      /(\[icon:[^\]]+\]\s*)?\b(Infantry|Cavalry|Ranged|Siege|Naval|Land|Air|Military)(\s+(?:and|or)\s+)(?=(?:\[icon:[^\]]+\]\s*)?(?:\[TIP:[^\]]+\])?(?:Infantry|Cavalry|Ranged|Siege|Naval|Land|Air|Military)\b[^.]{0,14}?\bUnits?\b)/g,
      function (m, iconPre, word, joiner) {
        if (iconPre) return m;
        return "[icon:MILITARY] " + word + joiner;
      });
    // Every concept word/phrase this pass turns into a link/tip reads as a UI
    // label from here on, same as "Town" / "Settlement" / "Wonders" already
    // do -- capitalise it even when the sentence's own grammar has it
    // lower-case ("...and policies..." -> "...and Policies...").
    // Most concepts read as UI labels and get capitalised; a few are ordinary
    // prose ("...for bonuses and adjacencies") and must stay lower-case.
    function capFirst(s) {
      if (LOWERCASE_CONCEPTS.indexOf(s) !== -1) return s;
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    UNIT_CONCEPT_ICONS.forEach(function (pair) {
      var re = new RegExp("(\\[TIP:[^\\]]+\\])?\\b(" + pair[0].replace(/ /g, "\\s+") + ")\\b", "g");
      text = text.replace(re, function (m, _tip, _ph, offset) {
        _ph = capFirst(_ph);
        var tag = UNIT_CONCEPT_TIPS[pair[0]];
        var pre = text.slice(0, offset);
        var insideTip = !!_tip ||
          (pre.split("[TIP:").length - 1) > (pre.split("[/TIP]").length - 1);
        // add the game tooltip to the phrase if it has one and isn't already
        // inside a [TIP:…] (one the game put here, or an enclosing unclosed tag).
        var canTip = tag && !insideTip && GLOBAL_TIPS[tag] &&
          text.substr(offset + m.length, 6) !== "[/TIP]";
        var back = pre.slice(Math.max(0, offset - 120))
          .replace(/\[\/?(?:TIP:[^\]]+|TIP|[Bb])\]/g, "");
        // the bare "Unit(s)" catch-all must not drop an icon in the MIDDLE of a
        // class phrase ("Infantry Unit" -> "Infantry [icon] Unit") when the
        // compound entry above was skipped -- leave it to the compound.
        if ((pair[0] === "Unit" || pair[0] === "Units") &&
            /\b(?:Infantry|Cavalry|Ranged|Siege|Naval|Land|Air|Military|Support|Civilian|Recon|Independent|Commander)\s*$/.test(back)) {
          return m;
        }
        // a bare class word inside a unit's own name ("Line Infantry", "Gold
        // Bangles Infantry") or an ability ("Cavalry Charge") is not the class
        if (/^(?:Infantry|Cavalry|Ranged|Siege)$/.test(pair[0])) {
          if (/^\s+Charge\b/.test(text.substr(offset + m.length, 8))) return m;
          var backName = back.replace(/\s+/g, " ") + _ph;
          if (Object.keys(unitNameIcons()).some(function (n) {
            return n.length > pair[0].length && n.slice(-pair[0].length - 1) === " " + pair[0] && backName.slice(-n.length) === n;
          })) return m;
        }
        // A bare terrain word followed by another capitalised word is part of a
        // name, not the terrain ("Desert Faith" the Belief, "Tundra Cities") --
        // leave those alone.
        if (TERRAIN_WORD_RE.test(pair[0])) {
          var afterTerrain = text.substr(offset + m.length, 10);
          // "Desert Terrain" / "Tundra tiles" are still the terrain; anything
          // else capitalised after it is a name ("Desert Faith").
          if (/^\s+[A-Z]/.test(afterTerrain) &&
              !/^\s+(Terrains?|Tiles?|Biomes?)\b/.test(afterTerrain)) {
            return m;
          }
        }
        // the bare "Crisis" entry must never fire in front of "Polic(y|ies)" --
        // "Crisis Policy" / "Crisis Policies" / "Crisis Policy Slot" are their own
        // compound entries (SOCIAL_POLICY icon) handled above.
        if (pair[0] === "Crisis" &&
            /^\s+Polic/i.test(text.substr(offset + m.length, 8))) {
          return m;
        }
        // nor the Aerodrome building in front of "Commander" (the unit)
        if (pair[0] === "Aerodrome" &&
            /^(?:\[\/?[A-Z:_]+\])*\s+(?:\[[^\]]+\])*Commander/.test(text.substr(offset + m.length, 60))) {
          return m;
        }
        // generic policy CONCEPTS ("Crisis Policy Slot") carry the infotip only
        // -- no icon. Only specifically-named policies (Divine Punishment) get
        // the SOCIAL_POLICY glyph.
        if (TIP_ONLY_CONCEPTS.indexOf(pair[0]) !== -1) {
          // the source data itself already bolded this word (e.g. an attrs
          // bullet that spells out the definition right after it, "Ageless —
          // is not replaced...") -- a tooltip repeating the same text would be
          // redundant, so leave it as plain bold with no tip.
          if (pre.slice(-3) === "[B]" && text.substr(offset + m.length, 4) === "[/B]") return m;
          return canTip ? "[TIP:" + tag + "]" + _ph + "[/TIP]" : m;
        }
        // an icon already sits on this phrase -> keep it, but still make the
        // phrase tappable (e.g. data pre-bakes "[icon:TRADE_ROUTE] Trade Route").
        if (UNIT_ICON_GUARD.test(back)) {
          return canTip ? "[TIP:" + tag + "]" + _ph + "[/TIP]" : m;
        }
        // don't repeat the same icon elsewhere in this sentence (either
        // direction) -- EXCEPT enumerated unit classes ("Infantry Units and
        // Cavalry Units"), where each class keeps its own [icon:MILITARY].
        var enumeratedClass = pair[1] === "MILITARY" &&
          /\b(?:Infantry|Cavalry|Ranged|Siege|Naval|Land|Air|Military|Heavy Naval|Light Naval|Stealth Naval) Units?$/.test(pair[0]);
        // a specifically-named Policy / Tradition ("Divine Punishment") always
        // keeps its own [icon:SOCIAL_POLICY], even when a generic "Crisis Policy
        // Slot" icon already sits in the same sentence.
        var namedPolicy = pair[1] === "SOCIAL_POLICY" &&
          NAMED_POLICIES.indexOf(pair[0]) !== -1;
        if (!enumeratedClass && !namedPolicy) {
          var sentStart = text.lastIndexOf(".", offset - 1) + 1;
          var sentEnd = text.indexOf(".", offset);
          if (sentEnd === -1) sentEnd = text.length;
          if (text.slice(sentStart, sentEnd).indexOf("[icon:" + pair[1] + "]") !== -1) {
            return canTip ? "[TIP:" + tag + "]" + _ph + "[/TIP]" : m;
          }
        }
        if (canTip) {
          return "[icon:" + pair[1] + "] [TIP:" + tag + "]" + _ph + "[/TIP]";
        }
        // still adding a fresh icon here (no tip) -- capitalise the word too.
        return "[icon:" + pair[1] + "] " + (_tip || "") + _ph;
      });
    });
    return boldAgeNames(text);
  }

  // "Antiquity Age" / "Exploration Age" / "Modern Age" is one proper name, so the
  // whole phrase is bold -- never just its first word with a plain "Age" left
  // hanging off it. Runs on the markup, so it also repairs strings the data
  // already wrote as "[B]Modern[/B] Age", and it is idempotent.
  var AGE_NAME_RE = /(\[B\])?\b(Antiquity|Exploration|Modern)(?:\[\/B\])?([\s-]+)Age\b(?:\[\/B\])?/g;
  function boldAgeNames(markup) {
    var text = String(markup);
    return text.replace(AGE_NAME_RE, function (m, bOpen, name, gap, offset) {
      // Already inside a wider [B]...[/B] run -> that whole run is bold already.
      var pre = text.slice(0, offset);
      if (!bOpen && (pre.split("[B]").length - 1) > (pre.split("[/B]").length - 1)) return m;
      return "[B]" + name + gap + "Age[/B]";
    });
  }

  // Any Tradition / Social Policy / Crisis Policy named in Units prose gets its
  // slot icon + a game-text infotip. Fires when the name is bold ([B]…[/B], the
  // CIV BONUSES list-lead shape) OR sits next to the words "Tradition" /
  // "Social Policy" / "Crisis Policy" / "policy" -- never on a bare common word
  // ("Honor", "Draft") in running prose.
  // Fandom-sourced "Civ Bonuses" text names a tradition WITHOUT its tier
  // numeral ("Samoderzhaviye", "General Moroz") even though the game's own
  // Tradition rows are always tiered ("General Moroz I" / "General Moroz II").
  // Fall back to the lowest tier's tip for the bare name so those still get
  // an icon + infotip.
  var ROMAN_TIER = { I: 1, II: 2, III: 3, IV: 4 };
  var TRADITION_TIPS_BARE = null;
  function traditionTipsBare() {
    if (TRADITION_TIPS_BARE !== null) return TRADITION_TIPS_BARE;
    var map = {}, bestTier = {};
    Object.keys(TRADITION_TIPS).forEach(function (k) {
      var m = /^(.*)\s(I{1,3}|IV)$/.exec(k);
      if (!m || TRADITION_TIPS[m[1]]) return;
      var bare = m[1], tier = ROMAN_TIER[m[2]] || 99;
      if (!(bare in bestTier) || tier < bestTier[bare]) {
        bestTier[bare] = tier;
        map[bare] = TRADITION_TIPS[k];
      }
    });
    TRADITION_TIPS_BARE = map;
    return TRADITION_TIPS_BARE;
  }
  // Civ Bonuses text also names Civic tree nodes (e.g. "Samoderzhaviye" is
  // the CIVIC that unlocks the "General Moroz II" Tradition) -- these get
  // their own [icon:CIVICS] and a tip built from what the node unlocks
  // (civ-civics.js, itself game-file-sourced).
  // Standard (shared, non-civ-unique) civic-tree nodes named in hand-written
  // unit-unlock prose (app.js's own paras, e.g. Army Commander/Hazarapatis/
  // Legatus's "research the Discipline civic..."). civ-civics.js only carries
  // each civ's OWN unique tree, so these never show up there -- curated here
  // instead of leaving them icon-less. Kept short on purpose: add an entry
  // only once a unit page is actually found naming that civic.
  var STANDARD_CIVIC_TIPS = {
    "Discipline": {
      slot: "civic", icon: "CIVICS",
      tip: "Antiquity-Age civic. Unlocks training the Army Commander and grants your Capital one for free, automatically, the moment it's researched."
    }
  };
  var CIVIC_TIPS = null;
  function civicTips() {
    if (CIVIC_TIPS !== null) return CIVIC_TIPS;
    var map = {};
    Object.keys(STANDARD_CIVIC_TIPS).forEach(function (name) {
      map[name] = STANDARD_CIVIC_TIPS[name];
    });
    Object.keys(CIV_CIVICS).forEach(function (civKey) {
      (CIV_CIVICS[civKey].civics || []).forEach(function (c) {
        if (!c.name || map[c.name] || TRADITION_TIPS[c.name] || traditionTipsBare()[c.name]) return;
        var unlocks = c.unlocks || [];
        var tUnlock = unlocks.filter(function (u) { return /tradition/i.test(u.kind); })[0];
        var tip;
        if (tUnlock) {
          var tMeta = TRADITION_TIPS[tUnlock.name] ||
            traditionTipsBare()[tUnlock.name.replace(/\s(I{1,3}|IV)$/, "")];
          tip = "Civic: unlocks the " + tUnlock.name + " Tradition." + (tMeta ? " " + tMeta.tip : "");
        } else if (unlocks.length) {
          tip = "Civic: unlocks " + unlocks.map(function (u) { return u.name; }).join(", ") + ".";
        } else {
          tip = "Civic tree node.";
        }
        map[c.name] = { slot: "civic", icon: "CIVICS", tip: tip };
      });
    });
    CIVIC_TIPS = map;
    return CIVIC_TIPS;
  }
  function cleanTipText(s) {
    var t = String(s || "");
    t = t.replace(/\[TIP:[^\]]+\]/g, "").replace(/\[\/TIP\]/g, "");
    t = t.replace(/\[BLIST\]|\[\/BLIST\]|\[\/LIST\]/g, "");
    t = t.replace(/\[LI\]/g, " ");
    t = t.replace(/\[B\]|\[\/B\]|\[b\]|\[\/b\]/g, "");
    t = t.replace(/\s+/g, " ").trim();
    return t;
  }
  // Civ Bonuses text also names a civ's own unique Building / Unique Quarter
  // (e.g. Norman's "Donjon", the Chevaler's quarter) -- civ-extras.js already
  // carries each one's own icon + game description (the same data the civ
  // page's TRAITS card renders), so reuse it verbatim rather than a generic
  // glyph. Registers a synthetic ICON_META token per building so it can render
  // that unit's/building's own portrait through the normal [icon:KEY] pipeline.
  var BUILDING_TIPS = null;
  function buildingTips() {
    if (BUILDING_TIPS !== null) return BUILDING_TIPS;
    var map = {};
    function add(t) {
      if (!t || !t.name || map[t.name] || TRADITION_TIPS[t.name] ||
          traditionTipsBare()[t.name] || civicTips()[t.name]) return;
      var token = "BLDG_" + t.name.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
      ICON_META[token] = {
        label: t.name,
        img: (t.icon || "images/icons/city_unique_quarter.png").replace(/^images\//, "../"),
        // Örtöö, Anjuvannam and the rest all have their own page -- naming it
        // makes the glyph follow through, and gives it the hover highlight
        // every other clickable icon has.
        page: pageTitleExists(t.name) ? t.name : undefined
      };
      map[t.name] = { slot: "building", icon: token, tip: "Unique Infrastructure: " + cleanTipText(t.desc || "") };
    }
    Object.keys(CIV_EXTRAS).forEach(function (civKey) {
      (CIV_EXTRAS[civKey].traits || []).forEach(function (t) {
        if (t.cat !== "Infrastructure") return;
        add(t);
        (t.sub || []).forEach(add);
      });
    });
    BUILDING_TIPS = map;
    return BUILDING_TIPS;
  }
  // Civ Bonuses text also names the civ's own Civilization Ability (e.g.
  // Norman's "Normannitas", Rome's "Twelve Tables") -- civ-lore.js has the
  // exact game text per Age; use the civ's own flag as the icon (its own
  // signature ability) and the home-Age description as the tip.
  var CIV_ABILITY_TIPS = null;
  function civAbilityTips() {
    if (CIV_ABILITY_TIPS !== null) return CIV_ABILITY_TIPS;
    var map = {};
    if (CIV_LORE) {
      Object.keys(CIV_LORE).forEach(function (civKey) {
        var lore = CIV_LORE[civKey];
        var name = lore && lore.abilityName;
        if (!name || map[name] || TRADITION_TIPS[name] || traditionTipsBare()[name] ||
            civicTips()[name] || buildingTips()[name]) return;
        var extra = CIV_EXTRAS[civKey] || {};
        var homeText = lore.ages && lore.ages[lore.home];
        var token = "CIVABIL_" + name.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
        if (extra.logo) ICON_META[token] = { label: name, img: extra.logo.replace(/^images\//, "../") };
        map[name] = {
          slot: "civability",
          icon: extra.logo ? token : "CIVICS",
          tip: "Civilization Ability: " + cleanTipText(homeText || "")
        };
      });
    }
    CIV_ABILITY_TIPS = map;
    return CIV_ABILITY_TIPS;
  }
  function traditionMeta(name) {
    return TRADITION_TIPS[name] || traditionTipsBare()[name] || civicTips()[name] ||
      buildingTips()[name] || civAbilityTips()[name];
  }
  var TRADITION_RE = null;
  function traditionRe() {
    if (TRADITION_RE !== null) return TRADITION_RE;
    var keys = Object.keys(TRADITION_TIPS)
      .concat(Object.keys(traditionTipsBare()))
      .concat(Object.keys(civicTips()))
      .concat(Object.keys(buildingTips()))
      .concat(Object.keys(civAbilityTips()));
    if (!keys.length) { TRADITION_RE = false; return TRADITION_RE; }
    keys.sort(function (a, b) { return b.length - a.length; });
    var alt = keys.map(function (k) {
      return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    }).join("|");
    // Fandom's own Civ Bonuses text sometimes tacks a roman-numeral tier onto
    // a CIVIC name that has no such tiered variant in the game ("Blutabaalo
    // II") -- an optional trailing numeral is allowed on every alternative so
    // the match still lands; the numeral is stripped again before lookup.
    TRADITION_RE = new RegExp(
      "(^|[^A-Za-z0-9])(\\[[Bb]\\])?(" + alt + ")(\\s+(?:IV|I{1,3}))?(\\[\\/[Bb]\\])?(?![A-Za-z0-9])", "g");
    return TRADITION_RE;
  }
  function linkifyTraditions(text) {
    var re = traditionRe();
    if (!re || !text) return text;
    return String(text).replace(re, function (m, lead, bOpen, name, extraTier, bClose, offset, whole) {
      var meta = traditionMeta(name.replace(/\s+/g, " "));
      if (!meta) return m;
      var nameStart = offset + lead.length + (bOpen ? bOpen.length : 0);
      var pre = whole.slice(0, nameStart);
      if ((pre.split("[TIP:").length - 1) > (pre.split("[/TIP]").length - 1)) return m;
      var back = pre.slice(-48).replace(/\[\/?(?:TIP:[^\]]+|TIP|[Bb])\]/g, "");
      if (/\[icon:[A-Za-z0-9_]+\][^\[]{0,14}$/.test(back)) return m;
      var after = whole.substr(offset + m.length, 22);
      var bolded = !!(bOpen && bClose);
      var contextOk = bolded ||
        /^[\s,;:]*(?:Tradition|(?:Social\s+|Crisis\s+)?[Pp]olic(?:y|ies))\b/.test(after) ||
        /(?:Tradition|Social\s+Policy|Crisis\s+Policy)[,;:]?\s*$/.test(back);
      if (!contextOk) return m;
      var iconKey = meta.icon || (meta.slot === "crisis" ? "SOCIAL_POLICY" : "NAR_REW_TRADITION_SLOT");
      var tag = "LOC_SYN_TRAD_" + name.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
      if (!GLOBAL_TIPS[tag]) GLOBAL_TIPS[tag] = meta.tip;
      return lead + (bOpen || "") + "[icon:" + iconKey + "] [TIP:" + tag + "]" +
        name + (extraTier || "") + "[/TIP]" + (bClose || "");
    });
  }

  // The UNIQUE ABILITY box: the game's own ability text glues some inline icons
  // straight onto the preceding number ("+3[icon:YIELD_CULTURE]") while spacing
  // others, and leaves recurring concepts (Combat Strength, Promotion) with no
  // icon at all. Normalise the spacing and fill the gaps so the icons match the
  // rest of the unit page.
  function unitAbilityText(raw) {
    var t = String(raw || "");
    t = t.replace(/(\S)(\[icon:[A-Za-z0-9_]+\])/g, "$1 $2");
    return linkifyUnitConcepts(t);
  }

  // Split unit description text into sentences on ". " that is not inside a
  // [TIP:…]/[icon:…] tag, so the game's mechanic-list descriptions can be shown
  // as a lead line + a bullet list (Jaguar Slayer, Legatus, Medjay, …).
  function splitUnitSentences(text) {
    var out = [], depth = 0, buf = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === "[") depth++;
      else if (ch === "]") depth = Math.max(0, depth - 1);
      buf += ch;
      // Don't treat the "." in an abbreviation ("... vs. 3)") as a sentence end.
      if (depth === 0 && ch === "." && (text[i + 1] === " " || i === text.length - 1) &&
          !/\bvs\.$/i.test(buf)) {
        out.push(buf.trim());
        buf = "";
        if (text[i + 1] === " ") i++;
      }
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  }
  // Multi-paragraph unit prose (HOWTO, CIV BONUSES): same concept-icon +
  // tooltip + action linking as a unit summary, but keeps [BLIST]/[AGE] markup.
  function unitProseHtml(paragraphs) {
    return (paragraphs || []).map(function (p) {
      return collapseAdjacentIcons(groupIconWords(linkifyCivNames(linkifyGpNames(linkifyCodex(linkifyActions(
        renderParagraphMarkup(linkifyTraditions(linkifyUnitConcepts(String(p))))))))));
    }).join("");
  }

  var UNIT_STOPWORDS = {
    a: 1, an: 1, the: 1, of: 1, in: 1, on: 1, to: 1, and: 1, or: 1, from: 1,
    for: 1, is: 1, are: 1, be: 1, by: 1, with: 1, when: 1, this: 1, that: 1,
    it: 1, its: 1, unit: 1, units: 1, can: 1, not: 1, no: 1, any: 1, has: 1
  };
  function unitWordSet(text) {
    var t = String(text || "")
      .replace(/\[TIP:[^\]]*\]|\[\/TIP\]|\[icon:[^\]]*\]|\[\/?[Bb]\]/g, " ")
      .toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    var set = {};
    t.split(/\s+/).forEach(function (w) {
      if (w && !UNIT_STOPWORDS[w]) set[w] = 1;
    });
    return set;
  }
  // Two attribute/summary lines say "the same thing" if they share most of their
  // significant words (game SUMMARY vs wiki Notes/Attributes often overlap).
  function unitTextSimilar(a, b) {
    var sa = unitWordSet(a), sb = unitWordSet(b);
    var ka = Object.keys(sa), kb = Object.keys(sb);
    if (!ka.length || !kb.length) return false;
    var common = ka.filter(function (w) { return sb[w]; }).length;
    return common / Math.min(ka.length, kb.length) >= 0.6;
  }

  // One de-duplicated bullet list combining every sentence of the game SUMMARY
  // with the wiki-style Attributes. No lead paragraph, no heading. Sentences that
  // just restate the aside's UNIQUE ABILITY box are dropped.
  function renderUnitSummary(page) {
    var notes = [];
    var abilitySentences = [];
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "UNIQUE_ABILITY") {
        (c.paragraphs || []).forEach(function (p) {
          splitUnitSentences(String(p || "")).forEach(function (s) {
            if (s.trim()) abilitySentences.push(s.trim());
          });
        });
        return;
      }
      if (c.chapter_id !== "SUMMARY") return;
      (c.paragraphs || []).forEach(function (p) {
        splitUnitSentences(String(p || "")).forEach(function (s) {
          if (s.trim()) notes.push(s.trim());
        });
      });
    });

    var attrs = UNIT_ATTRS[page.id] ||
      UNIT_ATTRS[String(page.id).replace(/_[234]$/, "")] || [];
    var merged = notes.concat(attrs);

    // Trade Caravan / Trade Ship: the "moves automatically" and "can be
    // plundered" lines are dropped (they only restate that the unit is an
    // uncontrolled trade-route marker) -- keep just what it replaces.
    var baseId = String(page.id).replace(/_[234]$/, "");
    if (baseId === "UNIT_TRADE_CARAVAN" || baseId === "UNIT_TRADE_SHIP") {
      merged = merged.filter(function (x) {
        return !/^\s*(automatically-moved|moves? automatically|subject to plunder|can be plundered)\b/i.test(x);
      });
    }

    // A few short factual lines share enough words with a longer neighbour to
    // trip the similarity test but say something the longer one doesn't -- keep
    // them (e.g. GP "Each <X> can only be received once.").
    var keepShort = /can only be received once|only be earned once/i;
    var final = [];
    merged.forEach(function (x, i) {
      if (abilitySentences.some(function (a) { return unitTextSimilar(x, a); })) return;
      var supersededByLonger = !keepShort.test(x) && merged.some(function (y, j) {
        return j !== i && unitTextSimilar(x, y) &&
          Object.keys(unitWordSet(y)).length > Object.keys(unitWordSet(x)).length;
      });
      if (supersededByLonger) return;
      if (final.some(function (f) { return unitTextSimilar(f, x) && !keepShort.test(x); })) return;
      final.push(x);
    });

    // Variant great-person pages whose SUMMARY is only the ability text still
    // deserve the "one charge" line.
    var gpLine = /great person/i;
    if (unitIsGreatPerson(page) && !final.some(function (f) { return gpLine.test(f); })) {
      final.unshift("A [icon:GREAT_PERSON] Great Person with one charge.");
    }

    if (!final.length) return "";
    var cls = "unit-attrs" + (unitIsGpVariant(page) ? " unit-attrs--gp-variant" : "");
    return '<ul class="' + cls + '">' + final.map(function (x) {
      return "<li>" + collapseAdjacentIcons(groupIconWords(linkifyCivNames(linkifyUnitNames(linkifyGpNames(linkifyCodex(linkifyActions(richText(linkifyUnitConcepts(String(x)))))))))) + "</li>";
    }).join("") + "</ul>";
  }

  function renderUnitBody(page) {
    var out = renderUnitSummary(page);
    out += renderUnitActions(page);
    out += renderUnitVariants(page);
    out += renderUnitPossibleVariants(page);
    var howto = (page.chapters || []).filter(function (c) {
      return c.chapter_id === "HOWTO";
    })[0] || unitHowtoChapter(page);
    if (howto) {
      out += chapterSectionHtml((howto.title || "How To").toUpperCase(),
        unitProseHtml(howto.paragraphs), "toggle-collapsed");
    }
    var strat = UNIT_STRATEGY[page.id] || UNIT_STRATEGY[String(page.id).replace(/_[234]$/, "")];
    if (strat && strat.length) {
      out += chapterSectionHtml("STRATEGY",
        strat.map(function (p) {
          // STRATEGY prose deliberately skips the concept auto-linker (it would
          // ice half the paragraph), so the Age-name rule is applied directly.
          return renderParagraphMarkup(linkifyTraditions(boldAgeNames(String(p))));
        }).join(""),
        "toggle-collapsed");
    }
    // "Civ Bonuses" -- the parent civ's Ability / Unique Quarter / Civics that
    // synergise with this unit (fandom unit-page "Civ bonuses" list).
    var cb = CIV_BONUSES[page.id] || CIV_BONUSES[String(page.id).replace(/_[234]$/, "")];
    if (cb && cb.length) {
      out += chapterSectionHtml("CIV BONUSES", unitProseHtml(cb), "toggle-collapsed");
    }
    var histChapter = (page.chapters || []).filter(function (c) {
      return c.chapter_id === "HISTORY";
    })[0];
    if (!histChapter) {
      var fb = unitHistoryFallback(page.id);
      if (fb) {
        histChapter = (fb.chapters || []).filter(function (c) {
          return c.chapter_id === "HISTORY";
        })[0];
      }
    }
    if (histChapter) {
      out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(histChapter), "toggle-collapsed");
    }
    return out;
  }

  // Tier variants (UNIT_X_2/_3) and named great-people (UNIT_CONQUISTADOR_X,
  // UNIT_TJATY_X, ...) have no Historical Context of their own -- fall back to
  // the base tier, then to the unit-type page, so every unit shows one.
  function unitHistoryFallback(id) {
    function hasHist(p) {
      return p && (p.chapters || []).some(function (c) { return c.chapter_id === "HISTORY"; });
    }
    var base = findPageById(String(id).replace(/_[234]$/, ""));
    if (base && base.page.id !== id && hasHist(base.page)) return base.page;
    var parts = String(id).split("_");
    while (parts.length > 2) {
      parts.pop();
      var cand = findPageById(parts.join("_"));
      if (cand && hasHist(cand.page)) return cand.page;
    }
    return null;
  }

  // One row per unique replacement: [variant icon + name]  [flat civ logo + civ
  // name]. No borders. Opens like Historical Context.
  function renderUnitVariants(page) {
    var s = UNIT_STATS[page.id] || {};
    var vs = s.variants || [];
    // A persistent commander (Army/Fleet Commander, Trung Nhi...) is the same
    // shared page in every Age's Command list, but its variants each belong to
    // one specific Age -- only show the ones that match whichever Age section
    // the user actually navigated in from (see unitPageAgeCtx / unitAgeOf).
    if (unitPageAgeCtx) {
      vs = vs.filter(function (v) {
        var vAge = unitAgeOf(v.pageId);
        return !vAge || vAge === unitPageAgeCtx;
      });
    }
    if (!vs.length) return "";
    function side(img, label, cls) {
      return '<span class="unit-variant-side ' + cls + '">' +
        (img
          ? '<img class="unit-variant-ico" src="' + attrEscape(img) +
            '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
          : '<span class="unit-variant-ico unit-variant-ico--empty"></span>') +
        '<span class="unit-variant-label">' + escapeHtml(label) + '</span></span>';
    }
    var body = '<div class="unit-variants">' + vs.map(function (v) {
      var row = side(v.icon, v.name, "is-unit") + side(v.logo, v.civ || "—", "is-civ");
      // Prefer the unambiguous pageId (several tiers of a named unique share one
      // display title, e.g. Hoplite / Hoplite II / Hoplite III) -- fall back to
      // the title-based lookup only for older data that hasn't been given one.
      if (v.pageId) {
        return '<button type="button" class="unit-variant" data-page-id="' + attrEscape(v.pageId) + '">' + row + "</button>";
      }
      return v.page
        ? '<button type="button" class="unit-variant" data-page-title="' + attrEscape(v.page) + '">' + row + "</button>"
        : '<div class="unit-variant unit-variant--plain">' + row + "</div>";
    }).join("") + "</div>";
    return chapterSectionHtml("UNIQUE VARIANTS", body, "toggle-collapsed");
  }

  // Great-person "type" pages (Tjaty, Logios, 'Alim, Conquistador, Uparat, ...)
  // whose named individuals are separate pages id-prefixed by this one -- list
  // them under a "Possible Variants" section.
  function renderUnitPossibleVariants(page) {
    if (!/UNIQUE_CIVILIAN/.test(page.group || "")) return "";
    var prefix = page.id + "_";
    var kids = flatPages.filter(function (e) {
      return e.sectionId === "UNITS" && e.page.id.indexOf(prefix) === 0;
    }).map(function (e) { return e.page; });
    if (!kids.length) return "";
    kids.sort(function (a, b) { return String(a.title || "").localeCompare(String(b.title || "")); });
    var body = '<div class="unit-pvariants">' + kids.map(function (k) {
      var src = (MEDIA[k.id] || {}).portrait || portraitByTitle(k.title) ||
        ("images/civ-uniques/" + iconSlug(k.title) + ".png");
      return '<button type="button" class="unit-pvariant" data-page-id="' + attrEscape(k.id) + '">' +
        unitEmblem(src) + '<span>' + escapeHtml(String(k.title || "").trim()) + '</span></button>';
    }).join("") + '</div>';
    return chapterSectionHtml("POSSIBLE VARIANTS", body, "toggle-collapsed");
  }

  // A horizontal strip of the unit's actions (icon only). Tapping an icon opens
  // its Effect text — from the game's "List of unit actions" — as a tip popup,
  // with the same inline concept icons the wiki shows in that Effect column.
  function actionEffectHtml(text) {
    return escapeHtml(String(text || "")).replace(/\[\[([a-z0-9_]+)\]\]/g, function (_, slug) {
      return '<img class="tip-inline-icon" src="images/actions-inline/' + slug +
        '.png" alt="" onerror="this.remove()">';
    });
  }
  function stripActionTokens(text) {
    return String(text || "").replace(/\[\[[a-z0-9_]+\]\]\s*/g, "");
  }

  // Turn any Action / Command name that shows up inside a rendered bullet (or
  // any HTML fragment) into a clickable .tip that opens the same effect popover
  // as the ACTIONS / COMMANDS icon strip. Runs on already-rendered HTML: it
  // only touches text between tags, longest names first.
  // Wording the game uses in prose that doesn't equal the canonical action name.
  var ACTION_TEXT_ALIASES = {
    "Build Roads": "Build Road to Settlement",
    "Build Road": "Build Road to Settlement",
    "Build a Road": "Build Road to Settlement",
    "Pillaged": "Pillage",
    "Rebase": "Rebase Aircraft",
    "fortifications": "Fortify"
  };
  var ACTION_NAME_RE = null;
  function actionNameRegex() {
    if (ACTION_NAME_RE) return ACTION_NAME_RE;
    var names = Object.keys(UNIT_ACTIONS).concat(Object.keys(ACTION_TEXT_ALIASES))
      .sort(function (a, b) { return b.length - a.length; });
    if (!names.length) return null;
    var esc = names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    ACTION_NAME_RE = new RegExp("\\b(" + esc.join("|") + ")\\b(s)?", "g");
    return ACTION_NAME_RE;
  }
  function linkifyActions(html) {
    var re = actionNameRegex();
    if (!re) return html;
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) return chunk;                       // this piece is a tag
      return chunk.replace(re, function (m, name, plural) {
        var def = UNIT_ACTIONS[name] || UNIT_ACTIONS[ACTION_TEXT_ALIASES[name]];
        if (!def) return m;
        var tipHtml = '<strong class="tip-title">' + escapeHtml(def.name) + "</strong>" +
          actionEffectHtml(def.effect);
        var ico = def.icon
          ? '<img class="action-inline-ico" src="' + attrEscape(def.icon) +
            '" alt="" onerror="this.remove()">'
          : "";
        // icon + name are ONE clickable action ref -- tapping the logo opens the
        // effect popover just like tapping the name.
        return '<span class="iw"><span class="tip action-ref" data-tip="' +
          attrEscape(def.name + " — " + stripActionTokens(def.effect)) +
          '" data-tip-html="' + attrEscape(tipHtml) + '">' + ico + name + (plural || "") +
          "</span></span>";
      });
    }).join("");
  }

  // True when parts[i] (a text run from html.split(/(<[^>]+>)/)) sits inside an
  // .action-ref span -- so the later name linkifiers leave an action's own name
  // alone instead of stuffing a unit/GP icon into the middle of it.
  function insideActionRef(parts, i) {
    var armed = false, depth = 0;
    for (var j = 1; j < i; j += 2) {
      var t = parts[j];
      if (!armed) {
        if (/^<span [^>]*\baction-ref\b/i.test(t)) { armed = true; depth = 1; }
      } else if (/^<span\b/i.test(t)) {
        depth += 1;
      } else if (/^<\/span>/i.test(t)) {
        depth -= 1;
        if (depth <= 0) armed = false;
      }
    }
    return armed;
  }

  // Codex great-works named in ability / attribute text link out to the
  // real-world work they represent. Opens in the system browser (the Android
  // shell hands http(s) links to an ACTION_VIEW intent).
  var CODEX_LINKS = {
    "Hymn to Aphrodite": "https://en.wikipedia.org/wiki/Ode_to_Aphrodite"
  };
  var CODEX_LINK_RE = null;
  function codexLinkRegex() {
    if (CODEX_LINK_RE) return CODEX_LINK_RE;
    var names = Object.keys(CODEX_LINKS).sort(function (a, b) { return b.length - a.length; });
    if (!names.length) return null;
    var esc = names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    CODEX_LINK_RE = new RegExp("(" + esc.join("|") + ")", "g");
    return CODEX_LINK_RE;
  }
  function linkifyCodex(html) {
    var re = codexLinkRegex();
    if (!re) return html;
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) return chunk;                       // this piece is a tag
      return chunk.replace(re, function (name) {
        var url = CODEX_LINKS[name];
        if (!url) return name;
        return '<a class="codex-link" href="' + attrEscape(url) +
          '" target="_blank" rel="noopener noreferrer">' + name + "</a>";
      });
    }).join("");
  }

  // Great-person names in prose carry that GP's own portrait as a small round
  // inline icon (Tjaty, Logios, Aristotle, ...). Built lazily from the UNITS
  // section's UNIQUE_CIVILIAN pages + their MEDIA portraits.
  var GP_NAME_ICONS = null;
  function gpNameIcons() {
    if (GP_NAME_ICONS) return GP_NAME_ICONS;
    GP_NAME_ICONS = {};
    (flatPages || []).forEach(function (e) {
      if (e.sectionId !== "UNITS" || !/UNIQUE_CIVILIAN/.test(e.page.group || "")) return;
      var src = (MEDIA[e.page.id] || {}).portrait;
      var nm = String(e.page.title || "").trim();
      if (src && nm.length > 2 && !GP_NAME_ICONS[nm]) GP_NAME_ICONS[nm] = src;
    });
    return GP_NAME_ICONS;
  }
  var GP_NAME_RE;
  function gpNameRegex() {
    if (GP_NAME_RE !== undefined) return GP_NAME_RE;
    var names = Object.keys(gpNameIcons()).sort(function (a, b) { return b.length - a.length; });
    if (!names.length) { GP_NAME_RE = null; return null; }
    var esc = names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    GP_NAME_RE = new RegExp("\\b(" + esc.join("|") + ")\\b", "g");
    return GP_NAME_RE;
  }
  function linkifyGpNames(html) {
    var re = gpNameRegex();
    if (!re) return html;
    var map = gpNameIcons();
    var parts = String(html).split(/(<[^>]+>)/);
    return parts.map(function (chunk, i) {
      if (i % 2) return chunk;                       // this piece is a tag
      if (insideActionRef(parts, i)) return chunk;   // leave an action's name alone
      return chunk.replace(re, function (m, name, offset, whole) {
        var before = whole.slice(Math.max(0, offset - 100));
        if (/gp-inline-ico/.test(before.slice(-100)) &&
            !/[.;!?]\s*$/.test(before)) return m;      // already iced in this run
        return '<span class="iw"><img class="gp-inline-ico" src="' + attrEscape(map[name]) +
          '" alt="" onerror="this.remove()">' + m + "</span>";
      });
    }).join("");
  }

  // Regular unit names in an attributes bullet get that unit's icon (e.g.
  // "...to Tier 3 Dhow." -> a Dhow icon). Built from every non-GP UNITS page.
  var UNIT_NAME_ICONS = null;
  function unitNameIcons() {
    if (UNIT_NAME_ICONS) return UNIT_NAME_ICONS;
    UNIT_NAME_ICONS = {};
    (flatPages || []).forEach(function (e) {
      if (e.sectionId !== "UNITS" || /UNIQUE_CIVILIAN/.test(e.page.group || "")) return;
      var src = (MEDIA[e.page.id] || {}).portrait;
      var nm = String(e.page.title || "").trim();
      if (src && nm.length >= 4 && !UNIT_NAME_ICONS[nm]) UNIT_NAME_ICONS[nm] = src;
    });
    return UNIT_NAME_ICONS;
  }
  var UNIT_NAME_RE;
  function unitNameRegex() {
    if (UNIT_NAME_RE !== undefined) return UNIT_NAME_RE;
    var names = Object.keys(unitNameIcons()).sort(function (a, b) { return b.length - a.length; });
    if (!names.length) { UNIT_NAME_RE = null; return null; }
    var esc = names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    UNIT_NAME_RE = new RegExp("\\b(" + esc.join("|") + ")\\b", "g");
    return UNIT_NAME_RE;
  }
  function linkifyUnitNames(html) {
    var re = unitNameRegex();
    if (!re) return html;
    var map = unitNameIcons();
    var parts = String(html).split(/(<[^>]+>)/);
    return parts.map(function (chunk, i) {
      if (i % 2) return chunk;
      if (insideActionRef(parts, i)) return chunk;   // leave an action's name alone
      // Everything rendered before this text run. An icon that sits just before
      // the name still counts as "already iced" even when a wrapper tag (e.g.
      // a <span class="tip"> from a [TIP:..] concept) was opened between the
      // icon and the name -- allow only whitespace + non-<button> tags in the
      // gap so a concept inline-icon / unit portrait right before the phrase
      // is still seen.
      var pre = parts.slice(0, i).join("");
      var ICED_BEFORE =
        /(?:<\/button>|(?:unit-name-ico|gp-inline-ico)[^>]*>)(?:\s|<(?!button)[^>]*>)*$/;
      return chunk.replace(re, function (m, name, offset, whole) {
        var before = whole.slice(Math.max(0, offset - 90), offset);
        var after = whole.slice(offset + name.length, offset + name.length + 14);
        // skip: an icon already sits right before it (in this text run, or as the
        // immediately preceding tag -- an inline concept icon / GP portrait), OR
        // it's "<Word> Strength" (a combat stat, e.g. "Bombard Strength").
        if (/(?:unit-name-ico|gp-inline-ico)[^>]*>\s*$/.test(before)) return m;
        if (/<\/button>\s*$/.test(before)) return m;
        if ((offset === 0 || /^\s*$/.test(before)) && ICED_BEFORE.test(pre)) return m;
        if (/^\s+(strength|attack|units?)\b/i.test(after)) return m;
        // a role word in a unit's class line ("Modern Fighter Air Unit"), not
        // the Fighter unit: the class noun carries the icon
        var afterText = (whole.slice(offset + name.length) + parts.slice(i + 1, i + 16).join("")).replace(/<button\b[\s\S]*?<\/button>/g, "").replace(/<[^>]+>/g, "").slice(0, 24);
        if (/^\s+(?:air|naval|land|siege|ranged|infantry|cavalry|support)\s+unit/i.test(afterText)) return m;
        return '<span class="iw"><img class="unit-name-ico" src="' + attrEscape(map[name]) +
          '" alt="" onerror="this.remove()">' + m + "</span>";
      });
    }).join("");
  }

  // A civ name/adjective in a unit-attrs bullet ("Tier 2 Norman Unique …",
  // "Spanish Unique …", "Songhai Unique …") carries that civ's flag as a small
  // inline icon. Keys are both the display name and the adjective (from
  // CIVPEDIA_CIV_LOGOS, emitted by build_unit_stats.py) plus every unit's
  // uniqueTo.civ. Only fires on "<Civ> Unique" so common words can't misfire.
  var CIV_NAME_ICONS = null;
  function civNameIcons() {
    if (CIV_NAME_ICONS) return CIV_NAME_ICONS;
    CIV_NAME_ICONS = { "City-State": "images/icons/independent_power.png" };
    var emitted = window.CIVPEDIA_CIV_LOGOS || {};
    Object.keys(emitted).forEach(function (k) {
      if (!CIV_NAME_ICONS[k]) CIV_NAME_ICONS[k] = emitted[k];
    });
    Object.keys(UNIT_STATS).forEach(function (k) {
      var u = UNIT_STATS[k] && UNIT_STATS[k].uniqueTo;
      if (u && u.civ && u.logo && !CIV_NAME_ICONS[u.civ]) CIV_NAME_ICONS[u.civ] = u.logo;
    });
    return CIV_NAME_ICONS;
  }
  var CIV_NAME_RE;
  function civNameRegex() {
    if (CIV_NAME_RE !== undefined) return CIV_NAME_RE;
    var names = Object.keys(civNameIcons()).sort(function (a, b) { return b.length - a.length; });
    if (!names.length) { CIV_NAME_RE = null; return null; }
    var esc = names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    // Zero-width lookaheads only -- the match is just the civ name itself, so
    // surrounding whitespace/punctuation is never touched. Three shapes carry
    // a flag: the unit-attrs "<Civ> Unique …" bullet phrasing, the
    // unitHowtoChapter templates' "<Civ>'s unique …" (stdProd GP) and
    // "… for <Civ>, available in the …" (infra-gated GP).
    // \b is ASCII-only in JS ([A-Za-z0-9_] via \w) -- it silently fails to
    // find a boundary in front of a name that starts with a non-ASCII letter
    // (Đại Việt, ...), since neither the preceding space nor "Đ" counts as a
    // \w character. Unicode-property lookaround (needs the "u" flag) instead.
    CIV_NAME_RE = new RegExp("(?<![\\p{L}\\p{N}_])(" + esc.join("|") +
      ")(?![\\p{L}\\p{N}_])(?=\\s+Unique\\b|'s\\s+unique\\b|,\\s+available\\b)", "gu");
    return CIV_NAME_RE;
  }
  function linkifyCivNames(html) {
    var re = civNameRegex();
    if (!re) return html;
    var map = civNameIcons();
    var parts = String(html).split(/(<[^>]+>)/);
    // a concept icon ("[icon:CITYSTATE] City-State …") the game text already put
    // on the phrase (an inline-icon button, or a name/flag icon) blocks a
    // second flag -- allow only whitespace + non-<button> tags in the gap.
    var ICED = /(?:<\/button>|(?:civ-inline-ico|unit-name-ico|gp-inline-ico)[^>]*>)(?:\s|<(?!button)[^>]*>)*$/;
    return parts.map(function (chunk, i) {
      if (i % 2) return chunk;
      var pre = parts.slice(0, i).join("");
      return chunk.replace(re, function (m, name, offset, whole) {
        var before = whole.slice(Math.max(0, offset - 80), offset);
        if (/(?:civ-inline-ico|unit-name-ico|gp-inline-ico)[^>]*>\s*$/.test(before)) return m;
        if ((offset === 0 || /^\s*$/.test(before)) && ICED.test(pre)) return m;
        return '<span class="iw"><img class="civ-inline-ico" src="' + attrEscape(map[name]) +
          '" alt="" onerror="this.remove()">' + name + "</span>";
      });
    }).join("");
  }

  // An inline icon, the numeric value in front of it (+2, -1, 50%, ...) and the
  // word right after it must never be split across a line break -- on a narrow
  // screen the "+2" or the icon would sit alone at a row end. Wrap the whole
  // "<+N> <icon> <next token>" run in a nowrap span. Runs last, on rendered HTML.
  var ICON_WORD_RE = new RegExp(
    "([+\\-\\u2212\\u2013]?\\d[\\d.,]*\\s*%?\\s*)?" +
    "(<button class=\"inline-icon(?:(?!<button)[\\s\\S])*?<\\/button>)(\\s+)" +
    "(<span class=\"tip[\\s\\S]*?<\\/span>|<strong[\\s\\S]*?<\\/strong>|[A-Za-z0-9’'‘().,%+\\-\\/]+)",
    "g");
  function groupIconWords(html) {
    return String(html).replace(ICON_WORD_RE, function (m, num, icon, sp, word) {
      return '<span class="iw">' + (num || "") + icon + sp + word + "</span>";
    });
  }
  // A generic baked icon immediately followed by a MORE SPECIFIC auto-linked
  // icon (unit/GP/civ portrait, or an action glyph) for the same phrase is
  // always a duplicate: the game text baked an [icon:…] in front of a phrase
  // that linkifyActions / linkifyUnitNames / linkifyGpNames then iced again
  // (e.g. "[icon:Action_Pillage] Coastal Raid" -> pillage glyph + coastal-raid
  // glyph). Drop the first, keep the more specific second.
  // Two plain inline-icon buttons back-to-back are only a duplicate if they
  // are literally the SAME icon (two concept-linker passes re-icing the same
  // word) -- two DIFFERENT icons placed side by side on purpose (e.g.
  // "[icon:MILITARY] [icon:CITYSTATE] Militaristic City-State") must both
  // survive, so those are compared by their image src before dropping either.
  // Runs last.
  var ADJ_ICON_RE = new RegExp(
    '(<button class="inline-icon\\b(?:(?!<button)[\\s\\S])*?<\\/button>)(\\s*)' +
    '((?:<span\\b[^>]*>\\s*)*)' +
    '(<img class="(?:action-inline-ico|unit-name-ico|gp-inline-ico|civ-inline-ico)\\b[^>]*>|<button class="inline-icon\\b(?:(?!<button)[\\s\\S])*?<\\/button>)',
    "g");
  function collapseAdjacentIcons(html) {
    var s = String(html), prev;
    do {
      prev = s;
      s = s.replace(ADJ_ICON_RE, function (m, btn1, ws, spanOpeners, next) {
        if (next.indexOf('<button class="inline-icon') !== 0) {
          return spanOpeners + next;
        }
        var src1 = /src="([^"]+)"/.exec(btn1);
        var src2 = /src="([^"]+)"/.exec(next);
        if (src1 && src2 && src1[1] === src2[1]) {
          return spanOpeners + next;
        }
        return m;
      });
    } while (s !== prev);
    return s;
  }
  // Actions the game only grants through a specific leader's ability, so they
  // appear on the unit but are not available to every player. Keyed by action
  // name. (Genghis Khan's "Chosen of Tengri" lets Army Commanders convert
  // adjacent Independent Military Units once per Age — the only such action in
  // the game.)
  var ACTION_LEADER_LOCK = {
    "Convert Independents": { leader: "Genghis Khan", icon: "images/leaders/icons/genghis_khan.png" }
  };
  // A leader whose ability unlocks a unit earlier than its normal tech/civic.
  var UNIT_LEADER_UNLOCK = {
    "UNIT_FLEET_COMMANDER": {
      leader: "Yi Sun-sin",
      icon: "images/leaders/icons/yi_sun_sin.png",
      // Fleet Commander's normal unlock is the Astronomy tech (Exploration
      // Age, see UNIT_STATS.UNIT_FLEET_COMMANDER.unlockedBy) -- Yi Sun-sin's
      // own leader trait (TRAIT_UNLOCK_FLEET_COMMANDER) bypasses that, so he
      // can train them from the start of the game, in the Antiquity Age.
      // (Was previously mislabelled "the Discipline civic" -- that unlocks
      // Army Commander, not Fleet Commander; unrelated to Yi Sun-sin.)
      note: "Yi Sun-sin can train Fleet Commanders from the start of the game — his leader trait bypasses the Astronomy tech every other civilization needs to unlock them.",
      civicIcon: "images/symbols/astronomy.png",
      civicName: "Astronomy"
    },
    "UNIT_TRUNG_NHI": {
      leader: "Trung Trac",
      icon: "images/leaders/icons/trung_trac.png",
      note: "Trung Nhi is awarded once the first Military Unit is produced."
    }
  };
  function actionButtonHtml(a) {
    var lock = ACTION_LEADER_LOCK[a.name];
    var tipHtml = '<strong class="tip-title">' + escapeHtml(a.name) + '</strong>' +
      actionEffectHtml(a.effect);
    var plain = a.name + " — " + stripActionTokens(a.effect);
    if (lock) {
      tipHtml += '<span class="tip-note">' +
        (lock.icon ? '<img class="tip-note-ico" src="' + attrEscape(lock.icon) +
          '" alt="" onerror="this.remove()">' : "") +
        "Unique to " + escapeHtml(lock.leader) + "</span>";
      plain += "  (Unique to " + lock.leader + ")";
    }
    return '<button type="button" class="unit-action tip' +
      (lock ? " unit-action--leader" : "") + '" ' +
      'data-tip="' + attrEscape(plain) + '" ' +
      'data-tip-html="' + attrEscape(tipHtml) + '" ' +
      'title="' + attrEscape(lock ? a.name + " (Unique to " + lock.leader + ")" : a.name) +
      '" aria-label="' + attrEscape(a.name) + '">' +
      '<img src="' + attrEscape(a.icon) + '" alt="' + attrEscape(a.name) +
      '" onerror="this.closest(&quot;.unit-action&quot;).classList.add(&quot;noimg&quot;)">' +
      '<span class="unit-action-fallback">' + escapeHtml(a.name.charAt(0)) + '</span>' +
      (lock && lock.icon ? '<img class="unit-action-leadermark" src="' + attrEscape(lock.icon) +
        '" alt="" onerror="this.remove()">' : "") +
      '</button>';
  }
  function actionStripHtml(names, aria) {
    var defs = (names || []).map(function (n) { return UNIT_ACTIONS[n]; }).filter(Boolean);
    if (!defs.length) return "";
    return '<div class="unit-actions" aria-label="' + attrEscape(aria) + '">' +
      defs.map(actionButtonHtml).join("") + "</div>";
  }
  // Two icon strips: a unit's general Actions, and -- for Commanders -- its
  // Commands (the wiki lists these under a separate "Commands:" heading). Each
  // is a plain centred section, no ornament, never collapses.
  function renderUnitActions(page) {
    var s = UNIT_STATS[page.id] || {};
    var out = "";
    var acts = actionStripHtml(s.actions, "Unit actions");
    if (acts) out += chapterSectionHtml("ACTIONS", acts, "static-bare");
    var cmds = actionStripHtml(s.commands, "Commander commands");
    if (cmds) out += chapterSectionHtml("COMMANDS", cmds, "static-bare");
    return out;
  }

  // opts.welcome: the introduction's chapter -- closed at every width, and
  // the one heading in the app whose ornament shows while it is closed
  function renderChapters(chapters, leaderEffects, sectionId, opts) {
    var isCiv = sectionId === "CIVILIZATIONS";
    var welcome = !!(opts && opts.welcome);
    var histLabel = leaderEffects || isCiv;
    // a civ page reads Tips & Hints, Mechanics and Strategy, Historical
    // Context: the strategy notes sit right before the history
    if (isCiv) {
      var strat = chapters.filter(function (c) { return c.chapter_id === "STRATEGY"; });
      if (strat.length) {
        chapters = chapters.filter(function (c) { return c.chapter_id !== "STRATEGY"; });
        var hi = chapters.length;
        for (var k = 0; k < chapters.length; k += 1) { if (chapters[k].chapter_id === "HISTORY") { hi = k; break; } }
        chapters = chapters.slice(0, hi).concat(strat, chapters.slice(hi));
      }
    }
    return chapters.map(function (chapter) {
      var html = '<section class="chapter chapter-accordion' + (welcome ? ' chapter-accordion--toggle chapter--welcome collapsed' : '') + '">';
      var chapterTitle = chapter.title;
      var subName = "";
      if (histLabel && chapter.chapter_id === "HISTORY") {
        chapterTitle = "Historical Context";
      }
      // Civ ability: generic "Ability" heading + the ability's own name as a subline.
      if (isCiv && chapter.chapter_id === "ABILITY") {
        subName = chapter.title || "";
        chapterTitle = "Ability";
      }
      if (isCiv && chapter.chapter_id === "STRATEGY") chapterTitle = "Mechanics and Strategy";
      if (chapterTitle) {
        html += '<h3 class="chapter-title" role="button" tabindex="0">' +
          '<span class="chapter-title-text">' + escapeHtml(chapterTitle.toUpperCase()) + "</span>" +
          '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div></h3>';
      }
      html += '<div class="chapter-body">';
      if (subName) {
        html += '<div class="chapter-subname"><span>' + escapeHtml(subName) + '</span></div>';
      }
      var bullet = leaderEffects && (chapter.chapter_id === "ABILITY" || chapter.chapter_id === "AGENDA");
      (chapter.paragraphs || []).forEach(function (para) {
        html += renderParagraphMarkup(bullet ? bulletizeEffects(para) : para);
      });
      if (chapter.leaders && chapter.leaders.length) {
        html += renderLeaderSynergyBody(chapter.leaders);
      }
      html += "</div></section>";
      return html;
    }).join("");
  }

  function renderParagraphMarkup(raw) {
    var text = protectGameRefs(String(raw || ""));
    var parts = text.split(/(\[BLIST\][\s\S]*?\[\/(?:BLIST|LIST)\])/g);
    var html = "";

    parts.forEach(function (part) {
      if (!part) return;
      var listMatch = part.match(/^\[BLIST\]([\s\S]*?)\[\/(?:BLIST|LIST)\]$/);
      if (listMatch) {
        var items = listMatch[1].split("[LI]").filter(function (chunk) {
          return chunk.trim().length;
        });
        html += "<ul>" + items.map(function (item) {
          return "<li>" + richText(item.trim()) + "</li>";
        }).join("") + "</ul>";
      } else {
        var paragraphs = part.split("[NN]");
        paragraphs.forEach(function (paragraph) {
          if (!paragraph.trim()) return;
          var ageMatch = paragraph.match(/^\s*\[AGE\]([\s\S]*?)\[\/AGE\]\s*$/);
          if (ageMatch) {
            html += '<div class="age-sub"><span>' + escapeHtml(ageMatch[1].trim()) + "</span>" + ornamentHtml() + "</div>";
          } else {
            html += "<p>" + richText(paragraph) + "</p>";
          }
        });
      }
    });

    return html;
  }

  function getLeaderMetaForPage(page) {
    if (!page) return null;
    return leaderById[page.id] || leaderByName[String(page.title || "").toLowerCase()] || null;
  }

  function ornamentHtml() {
    return '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div>';
  }

  // A ringed round frame around an item icon (matches the civic-tree emblems).
  function itemEmblem(src, sizeClass) {
    if (!src) return "";
    return '<span class="civic-emblem ' + (sizeClass || "civic-emblem-sm") +
      '"><img alt="" src="' + attrEscape(src) +
      '" onerror="this.closest(&quot;.civic-emblem&quot;).classList.add(&quot;noimg&quot;)"></span>';
  }

  // Same baked gold-ring frame as the Units landing page (nav-civu/*.png), sized
  // to match the other trait emblems.
  // "Kispoko Nena’to" -> "kispoko_nena_to": the app's image file names
  function slugify(name) {
    return String(name || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }

  function civUnitEmblem(src, name) {
    // the round ring the Units landing page uses (nav-unit/*.png); a unit the
    // data left without an icon is found by its name; the hex plaque
    // (nav-civu) is the fallback if no ring was cut for it
    var base = src ? src.replace(/^.*\//, "") : slugify(name || "") + ".png";
    if (!base || base === ".png") return itemEmblem("", "civic-emblem-md");
    return '<span class="civic-emblem civic-emblem-unit civic-emblem-unit--framed civic-emblem-md">' +
      '<img alt="" src="images/nav-unit/' + attrEscape(base) +
      '" onerror="if(!this.dataset.alt){this.dataset.alt=1;this.src=&quot;images/nav-civu/' + attrEscape(base) +
      '&quot;}else{this.closest(&quot;.civic-emblem&quot;).classList.add(&quot;noimg&quot;)}"></span>';
  }

  // a Trait's description: the unit pages' linker chain, plus building links.
  // `names` are held out of the chain: the trait's own name stays plain, a
  // quarter's buildings come back as links to their pages (whole names, so
  // the structure linker cannot pick "Temple" out of "Mortuary Temple").
  function civTraitProse(text, names) {
    var src = protectGameRefs(String(text || ""));
    var held = [];
    (names || []).forEach(function (nm) {
      if (!nm.name || src.indexOf(nm.name) === -1) return;
      var idx = held.length;
      held.push(nm);
      src = src.split(nm.name).join("\u0001" + idx + "\u0001");
    });
    var html = linkifyStructures(collapseAdjacentIcons(groupIconWords(
      linkifyCivNames(linkifyUnitNames(linkifyGpNames(linkifyCodex(linkifyActions(
        richText(linkifyUnitConcepts(src))))))))));
    return restoreGameRefs(html.replace(/\u0001(\d+)\u0001/g, function (m, i) {
      var nm = held[+i];
      if (!nm) return "";
      return nm.link && pageTitleExists(nm.name)
        ? '<span class="page-link" data-page-title="' + attrEscape(nm.name) + '">' + escapeHtml(nm.name) + '</span>'
        : escapeHtml(nm.name);
    }));
  }

  function renderCivUniqueEntry(u) {
    var cat = u.cat || u.kind || "";
    var isUnit = /\bUnit$/.test(cat);
    var isInfra = /Infrastructure/i.test(cat);
    var emblem = isUnit
      ? civUnitEmblem(u.icon, u.name)
      : isInfra
        // a Unique Quarter's district glyph carries no ring
        ? itemEmblem(u.icon || "images/icons/city_unique_quarter.png", "civic-emblem-md civic-emblem--plain")
        : itemEmblem(u.icon, "civic-emblem-md");
    var nameHtml = '<span class="civ-unique-name">' + escapeHtml(u.name) + '</span>';
    var pg = findPageByTitle(u.name);
    var head = pg
      ? '<button class="civ-unique-head civ-unique-head--link" type="button" data-page-id="' +
        attrEscape(pg.page.id) + '">' + emblem + nameHtml + '</button>'
      : '<div class="civ-unique-head">' + emblem + nameHtml + '</div>';
    var html = '<div class="entry-subgroup civ-unique">' +
      '<span>' + escapeHtml(cat ? "Unique " + cat : "") + '</span>' + head +
      (u.desc ? '<p class="civ-unique-desc">' + civTraitProse(u.desc,
        [{ name: u.name }].concat((u.sub || []).map(function (s) { return { name: s.name, link: true }; }))) + '</p>' : '');
    (u.sub || []).forEach(function (s) {
      // sub-buildings render frameless -- just the icon art itself.
      var subIco = s.icon
        ? '<img class="civ-sub-icon" alt="" src="' + attrEscape(s.icon) +
          '" onerror="this.remove()">'
        : '';
      html += '<div class="civ-sub">' +
        '<div class="civ-unique-head">' + subIco +
        '<span class="civ-unique-name civ-sub-name">' + escapeHtml(s.name) + '</span></div>' +
        (s.desc ? '<p class="civ-unique-desc">' + civTraitProse(s.desc, [{ name: s.name }, { name: u.name }]) + '</p>' : '') +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // one Trait as a row of a card box: art, name (a link when it has a page),
  // the game's description; a quarter's buildings follow it, indented
  function civTraitRowHtml(u, sub) {
    var cat = u.cat || u.kind || "";
    var isUnit = /\bUnit$/.test(cat);
    var isInfra = /Infrastructure/i.test(cat);
    var emblem = isUnit
      ? civUnitEmblem(u.icon, u.name)
      : sub
        // a quarter's building: its own art, by name when the data has none
        ? itemEmblem(u.icon || "images/civ-uniques/" + slugify(u.name) + ".png", "civic-emblem-md civic-emblem--plain")
        : isInfra
          ? itemEmblem(u.icon || "images/icons/city_unique_quarter.png", "civic-emblem-md civic-emblem--plain")
          : itemEmblem(u.icon, "civic-emblem-md");
    var pg = findPageByTitle(u.name);
    // what the thing is, from its page: a Quarter, an Improvement, a Building
    if (isInfra && pg && pg.page && pg.page.id) {
      cat = /^QUARTER_/.test(pg.page.id) ? "Quarter" : /^IMPROVEMENT_/.test(pg.page.id) ? "Improvement" : /^BUILDING_/.test(pg.page.id) ? "Building" : cat;
    } else if (isInfra && (u.sub || []).length) {
      cat = "Quarter";
    }
    var name = pg
      ? '<span class="gov-tradition-name page-link" data-page-title="' + attrEscape(pg.page.title) + '">' + escapeHtml(u.name) + '</span>'
      : '<span class="gov-tradition-name">' + escapeHtml(u.name) + '</span>';
    // the row is the thing's art, its name (a link to its page) and its
    // kind; the description lives on the page itself
    return '<div class="wonder-unlock-row tech-row gov-tradition civ-trait-row' + (sub ? ' civ-trait-row--sub' : '') + '">' +
      emblem +
      '<div class="gov-tradition-body">' + name +
        (cat && !sub ? '<div class="civ-trait-cat">' + escapeHtml("Unique " + cat) + '</div>' : '') +
      '</div></div>' +
      (u.sub || []).map(function (x) { return civTraitRowHtml(x, true); }).join("");
  }

  // The Civ Ability's Age sub-headings become sections that open and
  // close: the civ's home Age open, the others closed. The heading keeps
  // its look; an open section sits on a gold shade.
  function ageAccordionHtml(bodyHtml, homeAge) {
    var marker = '<div class="age-sub">';
    var parts = bodyHtml.split(marker);
    if (parts.length < 2) return bodyHtml;
    // the Age sections sit in one holder where one is open at a time
    var out = parts[0] + '<div class="acc-exclusive">';
    for (var i = 1; i < parts.length; i += 1) {
      var chunk = marker + parts[i];
      // the heading holds its text and the ornament (a div of its own)
      var headEnd = chunk.indexOf("</div>", chunk.indexOf("</div>") + 6) + 6;
      var label = (/<span>([^<]*)<\/span>/.exec(chunk.slice(0, headEnd)) || [])[1] || "";
      var age = (/^(Antiquity|Exploration|Modern)/.exec(label) || [])[1];
      // the head is the Age's panel (the Technologies home's button in our
      // card frame); every Age starts closed
      var panelOpen = false;   // every Age panel starts closed (on a desktop its banner shows whole)
      var head = age
        ? '<div class="age-sub age-acc-head age-acc-head--panel" role="button" tabindex="0" aria-expanded="' + (panelOpen ? 'true' : 'false') + '">' +
          '<img class="age-card-btn" src="images/ui/age-card-' + age.toLowerCase() + '.png" alt="' + attrEscape(label) + '">' +
          '<img class="age-strip-label" src="images/ui/age-label-' + age.toLowerCase() + '.png" alt=""></div>'
        : chunk.slice(0, headEnd).replace(marker, '<div class="age-sub age-acc-head" role="button" tabindex="0" aria-expanded="false">');
      out += '<div class="age-acc' + (panelOpen ? '' : ' collapsed') + (age ? " age-acc--panel" : "") + '">' + head + '<div class="age-acc-body"><div class="age-acc-inner">' + chunk.slice(headEnd) + '</div></div></div>';
    }
    return out + '</div>';
  }

  // A civ card box: its heading is the chapter title as a 40px button that
  // opens and closes the box (bindChapterAccordions)
  function civCardBox(head, body, open, extra, sub) {
    // no head: the box has no title button and stays open; a `civ-box--static`
    // box keeps its title as a plain heading and stays open too
    var isStatic = (extra || "").indexOf("civ-box--static") >= 0;
    return '<div class="entry-section wonder-stats civ-box' + (open || !head || isStatic ? "" : " collapsed") + (extra ? " " + extra : "") + '">' +
      (!head ? "" : isStatic
        // a static box wears the small white caption the Ability box uses
        ? '<div class="unit-req-head civ-ability-cap civ-box-cap">' + escapeHtml(head) + '</div>'
        : '<h3 class="chapter-title civ-box-title" role="button" tabindex="0" aria-expanded="' + (open ? "true" : "false") + '">' +
          '<span class="chapter-title-text">' + escapeHtml(head) + '</span>' +
          // a trait row (`sub` given): open, its name sits on the plate
          // between two rules with the small white caption under it
          (sub ? '<span class="civ-box-plate"><span class="name-plate"><span>' + escapeHtml(head) + '</span></span>' +
            '<span class="unit-req-head civ-ability-cap">' + escapeHtml(sub) + '</span></span>' : ornamentHtml()) + '</h3>') +
      '<div class="civ-box-body">' + body + '</div></div>';
  }

  // The civilization-select card, in the game's layout (588 x 381 at full
  // size, everything placed in percentages so it scales with the box)
  function civCardHtml(extra, groupTitle) {
    var age = extra.age || (/^(Antiquity|Exploration|Modern)/.exec(groupTitle || "") || [])[1] || "";
    var bezel = function (src, title, cls) {
      return '<span class="civ-card-bezel ' + cls + '" title="' + attrEscape(title) + '"><img src="' + attrEscape(src) + '" alt="" onerror="this.remove()"></span>';
    };
    var attrs = (extra.attrs || []).slice(0, 2).map(function (a, i) {
      var name = a.charAt(0).toUpperCase() + a.slice(1);
      return bezel("images/icons/attribute_" + a + ".png", name, "civ-card-bezel--a" + (i + 1));
    }).join("");
    var ageBezel = age && AGE_EMBLEMS[age] ? bezel(AGE_EMBLEMS[age], age + " Age", "civ-card-bezel--age") : "";
    return '<div class="civ-card" role="img" aria-label="' + attrEscape(extra.name) + '">' +
      '<img class="civ-card-glyph" src="' + attrEscape(extra.logo) + '" alt="" onerror="this.remove()">' +
      '<div class="civ-card-name">' + escapeHtml(extra.name) + '</div>' +
      '<div class="civ-card-strip"></div>' +
      attrs + ageBezel +
      '<img class="civ-card-flourish" src="images/ui/card-flourish.png" alt="" onerror="this.remove()">' +
      '</div>';
  }

  function civTraitBox(head, list, note) {
    if (!list.length && !note) return "";
    var body = list.length
      ? '<div class="wonder-formed tech-rows">' + list.map(function (u) { return civTraitRowHtml(u); }).join("") + '</div>'
      : '<div class="civ-trait-note">' + note + '</div>';
    return civCardBox(head, body, false);
  }

  // why a civ's Unique Buildings box is empty (the game gives it none)
  var CIV_NO_INFRA_NOTE = {
    CIVILIZATION_NEPAL: "Nepal has no unique Building or Quarter. Its unique tile, the Highland Power Station, is not built by a city: the " +
      '<span class="page-link" data-page-title="Sherpa">Sherpa</span> raises it on Mountain terrain within five tiles of a City Center.',
    CIVILIZATION_PRUSSIA: "Prussia has no unique Building, Quarter or Improvement. Its unique pieces are the " +
      '<span class="page-link" data-page-title="Hussar">Hussar</span> and the <span class="page-link" data-page-title="Stuka">Stuka</span>; its associated Wonder is the ' +
      '<span class="page-link" data-page-title="Brandenburg Gate">Brandenburg Gate</span>.'
  };

  // A civilization or leader card set the way a Technology's is: the card's
  // own art without frame or black ground (tools/make_card_plates.py) on the
  // Historical Context ground, in the stretchable bronze frame
  // the card's corners: its Attribute bezels pinned bottom-left, and (for a
  // civilization) its Starting Biases stacked bottom-right, each with the
  // terrain glyph and its name
  function cardCornersHtml(attrs, biases) {
    var left = (attrs || []).slice(0, 2).map(function (a) {
      var k = String(a || "").toLowerCase();
      return k ? '<img class="card-bezel" src="images/ui/bezel-' + attrEscape(k) + '.png" alt="' + attrEscape(a) + '" title="' + attrEscape(k.charAt(0).toUpperCase() + k.slice(1)) + '">' : "";
    }).join("");
    var right = (biases || []).map(function (b) {
      var label = String(b.label || b || "").replace(/\s*\(\d+\)\s*$/, "");
      var linked = !!findPageByTitle(label);
      return '<span class="card-bias">' +
        '<img class="card-bias-ico" src="images/icons/terrain_generic.png" alt="">' +
        '<span class="card-bias-name' + (linked ? ' page-link" data-page-title="' + attrEscape(label) + '" role="link" tabindex="0' : '') + '">' +
          escapeHtml(label) + '</span></span>';
    }).join("");
    return (left ? '<span class="card-bezels">' + left + '</span>' : '') +
      (right ? '<span class="card-biases" aria-label="Starting Biases">' + right + '</span>' : '');
  }
  function cardPlateHtml(src, alt, extraCls, after, corners) {
    var plate = String(src || "").replace(/^(images\/(?:civ-cards|leader-cards))\/([^\/]+\.png)$/, "$1/plate/$2");
    if (plate === src) return "";
    return '<div class="entry-emblem entry-emblem-photo civ-emblem civ-emblem--card tech-card-emblem card-plate-emblem' + (extraCls || "") + '">' +
      '<div class="tech-card card-plate"><img class="card-plate-art" src="' + attrEscape(plate) + '" alt="' + attrEscape(alt) + '">' + (corners || "") +
        '<span class="tech-card-frame" aria-hidden="true"></span>' +
        '<img class="tech-card-flourish" src="images/ui/card-frame-flourish.png" alt=""></div>' + (after || "") + '</div>';
  }

  function renderCivEntryCard(page, extra, groupTitle) {
    var html = '<aside class="entry-card civ-detail-card" aria-label="Civilization details">';
    if (extra.card && cardPlateHtml(extra.card, extra.name)) {
      html += cardPlateHtml(extra.card, extra.name, "", "",
        cardCornersHtml(extra.attrs, (window.CIVPEDIA_CIV_START_BIASES || {})[page.id]));
    } else if (extra.card) {
      // the game's civilization-select card, frame and all, filling the box
      html += '<div class="entry-emblem entry-emblem-photo civ-emblem civ-emblem--card"><img class="entry-portrait" src="' +
        attrEscape(extra.card) + '" alt="' + attrEscape(extra.name) +
        '" onerror="this.closest(&quot;.civ-emblem&quot;).style.display=&quot;none&quot;"></div>';
    } else if (extra.logo) {
      html += '<div class="entry-emblem entry-emblem-photo civ-emblem"><img class="entry-portrait" src="' +
        attrEscape(extra.logo) + '" alt="' + attrEscape(extra.name) +
        '" onerror="this.closest(&quot;.civ-emblem&quot;).style.display=&quot;none&quot;"></div>';
    }
    // the game's loading-screen introduction, in the quote box
    var civIntro = (INTRO_TEXT.civs || {})[page.id] || "";
    if (civIntro) {
      html += '<div class="leader-quote"><div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div>' +
        '<p class="leader-quote-text intro-text">' + escapeHtml(civIntro) + '</p></div>';
    }
    // the civ ability: its name on the plate, "Civ Ability" under it in the
    // small white caption the trait boxes use, then its text by Age
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id !== "ABILITY") return;
      html += civCardBox(c.title || "Civ Ability",
        '<div class="wonder-effects civ-ability-text">' +
          ageAccordionHtml(linkifyWonderNames(chapterBodyHtml(c)), (/^(Antiquity|Exploration|Modern)/.exec(groupTitle || "") || [])[1]) +
        '</div>', false, "leader-trait-box", "Civ Ability");
    });
    var traits = extra.traits || extra.uniques || [];
    var units = traits.filter(function (u) { return /\bUnit$/.test(u.cat || u.kind || ""); });
    var infra = traits.filter(function (u) { return !/\bUnit$/.test(u.cat || u.kind || ""); });
    html += civTraitBox("Unique Units", units);
    html += civTraitBox("Unique Buildings", infra, infra.length ? "" : (CIV_NO_INFRA_NOTE[page.id] ||
      "This civilization has no unique Building, Quarter or Improvement; its unique pieces are its units."));
    // the civ's own civics and the Traditions they grant, from its tree
    var treeKey = civicTreeKeyFor(page.id);
    var tree = treeKey && TECH_TREE[treeKey];
    if (tree && tree.nodes && tree.nodes.length) {
      // the civ's own civics tree, drawn as on the Culture home, under the
      // tree's name as the box heading
      html += civCardBox(tree.name || "Civics", '<div class="civ-card-tree">' + renderTechTreeBody(treeKey) + '</div>', false);
    }
    // every Tradition the civ can hold, as the game's cards, by Age
    var trads = CIV_TRADITIONS[page.id] || [];
    if (trads.length) {
      var logo = civNameIcons()[extra.name] || civNameIcons()[page.title] || "";
      var byAge = {};
      trads.forEach(function (t) { (byAge[t.age] = byAge[t.age] || []).push(t); });
      var ages = ["Antiquity", "Exploration", "Modern"].filter(function (a) { return byAge[a]; });
      // the Ages fold as the Civ Ability's do, the civ's home Age open
      html += civCardBox("Traditions", ageAccordionHtml(ages.map(function (a) {
        return (ages.length > 1 ? '<div class="age-sub"><span>' + a + ' Age</span>' + ornamentHtml() + '</div>' : '') +
          '<div class="trad-cards">' + byAge[a].map(function (t) { return traditionCardHtml(t, logo); }).join("") + '</div>';
      }).join(""), (/^(Antiquity|Exploration|Modern)/.exec(groupTitle || "") || [])[1]), true, "civ-trad-box civ-box--static");
    }
    html += '</aside>';
    return html;
  }

  // One Tradition as the Government screen shows it: the framed card with
  // the hex badge on its left edge; the "Unlocked by" line under the name,
  // above the card's rule
  function traditionCardHtml(t, logo) {
    var unlock = '<div class="gov-tradition-civic trad-unlock"><span class="unit-cost-lbl">Unlocked by</span>' +
        (t.civicIcon ? '<img class="gov-civic-ico" src="' + attrEscape(t.civicIcon) + '" alt="">' : '') +
        '<span class="unit-req-name' + (pageTitleExists(t.civic) ? ' page-link" data-page-title="' + attrEscape(t.civic) : ' unit-req-name--plain') +
        '">' + escapeHtml(t.civic) + '</span></div>' +
      (t.obsoletes ? '<div class="trad-replaces">Replaces ' + escapeHtml(t.obsoletes) + '</div>' : '');
    return '<div class="trad-entry">' +
      '<div class="trad-card trad-card--unlock">' +
        '<img class="trad-badge" src="images/icons/tradition_hex.png" alt="">' +
        '<div class="trad-head">' +
          (logo ? '<img class="trad-civ" src="' + attrEscape(logo) + '" alt="" onerror="this.remove()">' : '<span class="trad-cross">\u2724</span>') +
          '<span>' + escapeHtml(t.name) + '</span></div>' +
        '<div class="trad-top">' + unlock + '</div>' +
        (t.text ? '<div class="trad-text">' + statText(t.text, false, true) + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  // The page body: the ability up front, then the collapsible sections a
  // unit page has -- strategy, tips, history -- and the civ's own civics
  // tree and traditions
  function civicTreeKeyFor(civType) {
    var found = "";
    Object.keys(CIVIC_INDEX).forEach(function (age) {
      (CIVIC_INDEX[age].civs || []).forEach(function (c) { if (c.civType === civType) found = c.key; });
    });
    return found;
  }

  function renderCivBody(page, extra) {
    var out = "";
    var chapters = page.chapters || [];
    // Tips & Hints, then Mechanics and Strategy right before the history
    chapters.forEach(function (c) {
      if (c.chapter_id === "TIPS") {
        out += chapterSectionHtml((c.title || "Tips & Hints").toUpperCase(), chapterBodyHtml(c), "toggle-collapsed");
      }
    });
    chapters.forEach(function (c) {
      if (c.chapter_id === "STRATEGY") {
        out += chapterSectionHtml("MECHANICS AND STRATEGY", chapterBodyHtml(c), "toggle-collapsed");
      }
    });
    chapters.forEach(function (c) {
      if (c.chapter_id === "HISTORY") {
        out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(c), "toggle-collapsed");
      }
    });
    var data = CIV_CIVICS[page.id];
    var treeKey = civicTreeKeyFor(page.id);
    // a civ with a tree of its own shows it on the card, in the Civics box
    if (!(treeKey && TECH_TREE[treeKey]) && data && data.civics && data.civics.length) {
      out += chapterSectionHtml(civicSectionTitle(data).toUpperCase(), renderCivicsBody(data, extra.logo || "", extra), "toggle-collapsed");
    }
    if (!(treeKey && TECH_TREE[treeKey]) && data && data.traditions && data.traditions.length) {
      // a civ without a tree of its own in the data: the old traditions list
      out += chapterSectionHtml("TRADITIONS", renderTraditionsBody(data), "toggle-collapsed");
    }
    return out;
  }

  // ---- Leader and civilization pairings (civ-pairings.js, civ-pair-notes.js)
  var CIV_PAIRINGS = window.CIVPEDIA_CIV_PAIRINGS || { leaders: {}, civNext: {}, gameplay: {}, civAge: {} };
  var CIV_PAIR_NOTES = window.CIVPEDIA_CIV_PAIR_NOTES || {};
  var CIV_PAIR_PLANS = window.CIVPEDIA_CIV_PAIR_PLANS || {};
  var PAIR_AGES = ["Antiquity", "Exploration", "Modern"];

  function pairCiv(civ) {
    var x = CIV_EXTRAS[civ] || {};
    var base = x.logo ? x.logo.replace(/^.*\//, "") : "";
    var name = x.name || civ.replace(/^CIVILIZATION_/, "").replace(/_/g, " ").toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    return { id: civ, name: name, hex: base ? "images/nav-civ/" + base : "",
      attrs: (x.attrs || []).map(function (a) { return String(a).toLowerCase(); }),
      age: CIV_PAIRINGS.civAge[civ] || x.age || "" };
  }

  // the game's suggestion strength, 1-4, as four small gems
  function pairGems(n) {
    var out = '<span class="pair-gems" title="Suggestion strength ' + n + ' of 4">';
    for (var i = 1; i <= 4; i += 1) out += '<span class="pair-gem' + (i <= n ? " is-on" : "") + '"></span>';
    return out + "</span>";
  }

  // how a civilization is opened for this leader at the Age transition
  function pairOpeners(leaderId, civ, played) {
    var c = pairCiv(civ);
    var L = CIV_PAIRINGS.leaders[leaderId] || {};
    var out = { leader: false, civs: [], deeds: [] };
    if (c.age === "Antiquity") return out;
    if (((L.unlocks || {})[c.age] || []).indexOf(civ) >= 0) out.leader = true;
    Object.keys(CIV_PAIRINGS.civNext).forEach(function (prev) {
      if (CIV_PAIRINGS.civNext[prev].indexOf(civ) < 0) return;
      if (PAIR_AGES.indexOf(pairCiv(prev).age) >= PAIR_AGES.indexOf(c.age)) return;
      if (!played || played.indexOf(prev) >= 0) out.civs.push(prev);
    });
    (CIV_PAIRINGS.gameplay[civ] || []).forEach(function (g) { out.deeds.push(g); });
    return out;
  }

  function pairCivLink(civ) {
    var c = pairCiv(civ);
    return pageTitleExists(c.name) ? '<span class="page-link" data-page-title="' + attrEscape(c.name) + '">' + escapeHtml(c.name) + '</span>' : escapeHtml(c.name);
  }

  function PAGE_AGE_BEFORE(age) {
    return age === "Modern" ? "Exploration" : age === "Exploration" ? "Antiquity" : "";
  }

  function pairOpenedHtml(leader, civ) {
    var c = pairCiv(civ);
    if (c.age === "Antiquity") return "Every Antiquity civilization can be chosen when the game begins.";
    var o = pairOpeners(leader.id, civ, null);
    var parts = [];
    if (o.leader) parts.push("[B]" + escapeHtml(leader.name) + "[/B] opens it: it is always available to this leader in the " + c.age + " Age");
    if (o.civs.length) parts.push("playing " + o.civs.map(pairCivLink).join(", ").replace(/, ([^,]*)$/, " or $1") + " before it opens it");
    // a gameplay unlock: a deed done in the Age before opens it for any
    // leader; one deed is enough, and each is listed with the game's reason
    if (o.deeds.length) {
      var deedAge = o.deeds[0].age || PAGE_AGE_BEFORE(c.age);
      parts.push("any leader can also open it by doing " + (o.deeds.length > 1 ? "any one of these" : "this") +
        (deedAge ? " during the " + deedAge + " Age" : "") + ": " +
        o.deeds.map(function (g) {
          return "[B]" + escapeHtml(g.deed.replace(/\[icon:[^\]]*\]\s*/g, "").replace(/\.$/, "")) + "[/B]" +
            (g.why ? " (" + escapeHtml(g.why.replace(/\.$/, "")) + ")" : "");
        }).join(o.deeds.length > 2 ? "; " : " or "));
    }
    return parts.length ? parts.map(function (t) { return t.charAt(0).toUpperCase() + t.slice(1); }).join(". ") + "." : "";
  }

  // A civilization's details for a leader: why the game suggests it, how the
  // two work together, both sides' Attributes and how to get it. `lead` is a
  // first section of its own.
  function pairBodyHtml(leader, civ, pick, lead) {
    var c = pairCiv(civ);
    var lattrs = (leader.attributes || []).map(function (a) { return String(a).toLowerCase(); });
    var p = pick || {};
    var notes = CIV_PAIR_NOTES[leader.id + "|" + civ] || [];
    var shared = c.attrs.filter(function (a) { return lattrs.indexOf(a) >= 0; });
    var body = lead || '';
    if (p.reason) body += '<div class="pair-sec"><div class="pair-sec-head">Why the game suggests it</div><p class="pair-reason"><span class="pair-choice pair-choice--' + (p.choice || "").toLowerCase() + '">' + escapeHtml(p.choice) + ' choice</span> ' + escapeHtml(p.reason) + '</p></div>';
    if (notes.length) body += '<div class="pair-sec"><div class="pair-sec-head">How they work together</div><div class="wonder-effects civ-ability-text">' + statText("[BLIST][LI]" + notes.join("[LI]") + "[/BLIST]", true) + '</div></div>';
    // the pair's game plan: what to do, step by step, to win with it
    var plan = CIV_PAIR_PLANS[leader.id + "|" + civ] || [];
    if (plan.length) body += '<div class="pair-sec pair-plan"><div class="pair-sec-head">Game plan</div><div class="wonder-effects civ-ability-text">' + statText("[BLIST][LI]" + plan.join("[LI]") + "[/BLIST]", true) + '</div></div>';
    // the two sides' Attributes in two columns under one heading, divided
    // by a short upright rule; a shared one glows on both sides
    var attrCol = function (list, label) {
      return '<div class="pair-attr-col"><div class="pair-attr-icons">' + list.map(function (a) {
        var nm = a.charAt(0).toUpperCase() + a.slice(1);
        return '<span class="pair-attr' + (shared.indexOf(a) >= 0 ? " is-shared" : "") + '" title="' + attrEscape(nm + (shared.indexOf(a) >= 0 ? " - shared" : "")) + '"><img src="images/icons/attribute_' + a + '.png" alt="' + attrEscape(nm) + '"></span>';
      }).join("") + '</div><div class="pair-attr-label">' + escapeHtml(label) + '</div></div>';
    };
    body += '<div class="pair-sec"><div class="pair-sec-head">Attributes</div><div class="pair-attrs">' +
      attrCol(c.attrs, c.name) + '<span class="pair-attr-rule"></span>' + attrCol(lattrs, leader.name) + '</div></div>';
    var opened = pairOpenedHtml(leader, civ);
    // (the parts are escaped already and carry page links: bold only)
    if (opened) body += '<div class="pair-sec"><div class="pair-sec-head">How to get it</div><p class="pair-open">' + opened.replace(/\[B\]/g, "<strong>").replace(/\[\/B\]/g, "</strong>") + '</p></div>';
    return body;
  }

  // Three-Age routes: an Antiquity pick, an Exploration civilization that the
  // leader or that pick opens, a Modern one opened by the leader or by either
  // civilization played before. Scored by the game's suggestion strength and
  // the Attributes shared with the leader; the best three that differ from
  // each other in at least two steps.
  function civRoutesFor(leader) {
    var L = CIV_PAIRINGS.leaders[leader.id];
    if (!L || !L.picks) return [];
    var bias = {};
    L.picks.forEach(function (p) { bias[p.civ] = p.bias; });
    var lattrs = (leader.attributes || []).map(function (a) { return String(a).toLowerCase(); });
    function score(civ) {
      var c = pairCiv(civ);
      return (bias[civ] || 0) + 0.5 * c.attrs.filter(function (a) { return lattrs.indexOf(a) >= 0; }).length;
    }
    function reachable(age, played) {
      var out = [];
      Object.keys(CIV_PAIRINGS.civAge).forEach(function (civ) {
        if (CIV_PAIRINGS.civAge[civ] !== age || !CIV_EXTRAS[civ]) return;
        var o = pairOpeners(leader.id, civ, played);
        if (o.leader || o.civs.length) out.push(civ);
      });
      return out;
    }
    var starts = L.picks.filter(function (p) { return p.age === "Antiquity"; }).map(function (p) { return p.civ; });
    var paths = [];
    starts.forEach(function (a) {
      reachable("Exploration", [a]).forEach(function (e) {
        reachable("Modern", [a, e]).forEach(function (m) {
          paths.push({ civs: [a, e, m], score: score(a) + score(e) + score(m) });
        });
      });
    });
    paths.sort(function (x, y) { return y.score - x.score; });
    var chosen = [];
    paths.forEach(function (pth) {
      if (chosen.length >= 3) return;
      var distinct = chosen.every(function (c) {
        return pth.civs.filter(function (civ, i) { return c.civs[i] !== civ; }).length >= 2;
      });
      if (distinct) chosen.push(pth);
    });
    return chosen.map(function (pth) { return pth.civs; });
  }

  // ---- Civ Syncretism and Civ Paths in one box. A map of the three Ages:
  // the civilizations the game suggests for the leader (and any a route
  // passes through) in their Age's column, a faint line where one opens the
  // next, the chosen route drawn in gold over it. Under the map each
  // civilization is an Age strip -- its painting cut thin -- that opens into
  // the whole banner and the pairing's details, one open at a time
  // (bindChapterAccordions' .acc-exclusive).
  function civJourneyHtml(leader) {
    var L = CIV_PAIRINGS.leaders[leader.id];
    if (!L || !L.picks || !L.picks.length) return "";
    var pickOf = {};
    L.picks.forEach(function (p) { pickOf[p.civ] = p; });
    var short = String(leader.name || "").split(",")[0];
    var portrait = leader.portrait || "";
    var unlocks = L.unlocks || {};
    // each route's steps and how each step is opened: by the civilization
    // just before it ("civ"), by the leader ("leader"), or only by the
    // civilization before that ("earlier")
    var routes = civRoutesFor(leader).map(function (r) {
      var kinds = [""];
      var notes = ["Step 1: the route starts here."];
      for (var i = 1; i < r.length; i += 1) {
        var o = pairOpeners(leader.id, r[i], r.slice(0, i));
        kinds.push(o.civs.indexOf(r[i - 1]) >= 0 ? "civ" : o.leader ? "leader" : "earlier");
        var by = (o.leader ? [leader.name] : []).concat(o.civs.map(function (pc) { return pairCiv(pc).name; }));
        notes.push("Step " + (i + 1) + ": opened by " + by.map(function (b) { return "<strong>" + escapeHtml(b) + "</strong>"; }).join(" and ") +
          " when the " + escapeHtml(pairCiv(r[i]).age) + " Age begins.");
      }
      return { civs: r, kinds: kinds, notes: notes };
    });
    // the map's civilizations: the suggestions, then any a route adds;
    // strongest suggestion first in each Age
    var civs = L.picks.map(function (p) { return p.civ; });
    routes.forEach(function (r) { r.civs.forEach(function (c) { if (civs.indexOf(c) < 0) civs.push(c); }); });
    var byAge = {};
    PAIR_AGES.forEach(function (a) { byAge[a] = []; });
    civs.forEach(function (c) { var a = pairCiv(c).age; if (byAge[a]) byAge[a].push(c); });
    PAIR_AGES.forEach(function (a) {
      byAge[a].sort(function (x, y) { return ((pickOf[y] || {}).bias || 0) - ((pickOf[x] || {}).bias || 0); });
    });
    var anyNext = false, anyBy = false, choices = {};
    var node = function (civ, nextAge) {
      var c = pairCiv(civ), p = pickOf[civ];
      var next = nextAge ? (CIV_PAIRINGS.civNext[civ] || []).filter(function (n) { return byAge[nextAge].indexOf(n) >= 0; }) : [];
      var byLeader = !!portrait && (unlocks[c.age] || []).indexOf(civ) >= 0;
      var choice = p ? String(p.choice || "").toLowerCase() : "";
      if (next.length) anyNext = true;
      if (byLeader) anyBy = true;
      if (choice) choices[choice] = p.choice;
      return '<button type="button" class="pj-node' + (p && p.bias === 4 ? ' is-top' : '') + '" data-civ="' + attrEscape(civ) + '"' +
        (choice ? ' data-choice="' + attrEscape(choice) + '"' : '') +
        (next.length ? ' data-next="' + attrEscape(next.join(" ")) + '"' : '') +
        ' aria-label="' + attrEscape(c.name + (p ? ", " + p.choice + " choice" : "")) + '">' +
        '<span class="pj-node-hex">' + (c.hex ? '<img src="' + attrEscape(c.hex) + '" alt="" onerror="this.remove()">' : '') +
          (byLeader ? '<span class="pj-node-by"><img src="' + attrEscape(portrait) + '" alt=""></span>' : '') + '</span>' +
        '<span class="pj-node-name">' + escapeHtml(c.name) + '</span>' +
        (p ? pairGems(p.bias) : '<span class="pj-node-extra">Route</span>') +
        '</button>';
    };
    var map = '<div class="pj-map"><svg class="pj-edges" aria-hidden="true"></svg>' +
      PAIR_AGES.map(function (age, ai) {
        return '<div class="pj-col"><div class="pj-col-head"><img src="images/icons/age_' + age.toLowerCase() + '.png" alt=""><span>' + escapeHtml(age) + '</span></div>' +
          '<div class="pj-col-nodes">' + byAge[age].map(function (civ) { return node(civ, PAIR_AGES[ai + 1]); }).join("") + '</div></div>';
      }).join("") + '</div>';
    var kinds = {};
    routes.forEach(function (r) { r.kinds.forEach(function (k) { if (k) kinds[k] = 1; }); });
    var legend = '<div class="pj-legend">' +
      (anyNext ? '<span class="pj-key"><i class="pj-key-line pj-key-line--faint"></i>opens the next</span>' : '') +
      (kinds.civ ? '<span class="pj-key"><i class="pj-key-line"></i>route</span>' : '') +
      (kinds.leader ? '<span class="pj-key"><i class="pj-key-line pj-key-line--dash"></i>route, opened by ' + escapeHtml(short) + '</span>' : '') +
      (kinds.earlier ? '<span class="pj-key"><i class="pj-key-line pj-key-line--dot"></i>route, opened by an earlier step</span>' : '') +
      (anyBy ? '<span class="pj-key"><i class="pj-key-by"><img src="' + attrEscape(portrait) + '" alt=""></i>always open to ' + escapeHtml(short) + '</span>' : '') +
      ["historical", "geographic", "strategic"].filter(function (k) { return choices[k]; }).map(function (k) {
        return '<span class="pj-key"><i class="pj-key-gem pj-key-gem--' + k + '"></i>' + escapeHtml(choices[k]) + '</span>';
      }).join("") +
      '</div>';
    var dataRoutes = attrEscape(JSON.stringify(routes.map(function (r) { return { civs: r.civs, kinds: r.kinds }; })));
    var pjHtml = function (ri, listHtml) {
      return '<div class="pj" data-route="' + ri + '" data-routes="' + dataRoutes + '">' + map + legend +
        '<div class="pj-list acc-exclusive acc-exclusive--always">' + listHtml + '</div></div>';
    };
    var html = '<p class="pj-intro">The civilizations the game suggests for <strong>' + escapeHtml(leader.name) + '</strong>, Age by Age, strongest first. ' +
      (routes.length
        ? 'Each route is a way through the three Ages that stays open at every step: open one for its map and its civilizations.</p>'
        : 'A line joins a civilization to one it opens in the next Age. Tap a civilization for its card.</p>');
    if (!routes.length) {
      return html + pjHtml(-1, PAIR_AGES.map(function (age) {
        if (!byAge[age].length) return "";
        return '<div class="unit-req-head civ-ability-cap pj-cap">' + escapeHtml(age) + '</div>' +
          byAge[age].map(function (civ) { return journeyStripHtml(leader, civ, pickOf[civ], routes); }).join("");
      }).join(""));
    }
    // a route closed is one row: the three civilizations' paintings side by
    // side under its number and its steps; open, the map with the route
    // drawn in gold and the route's own civilizations, Age by Age
    html += '<div class="pj-route-list acc-exclusive acc-exclusive--always">' + routes.map(function (r, ri) {
      var names = r.civs.map(function (civ) { return pairCiv(civ).name; });
      var arts = r.civs.map(function (civ) {
        var art = ((window.CIVPEDIA_PAINTINGS || {}).pages || {})[civ] || "";
        return '<span' + (art ? ' style="background-image:url(&quot;' + attrEscape(art) + '&quot;)"' : '') + '></span>';
      }).join("");
      var steps = r.civs.map(function (civ, i) {
        var c = pairCiv(civ);
        return (i ? '<i class="pj-route-sep"></i>' : '') + '<span class="pj-route-civ" title="' + attrEscape(c.name) + '">' +
          (c.hex ? '<img src="' + attrEscape(c.hex) + '" alt="' + attrEscape(c.name) + '" onerror="this.remove()">' : escapeHtml(c.name)) +
          '</span>';
      }).join("");
      var list = PAIR_AGES.map(function (age) {
        var civ = r.civs.filter(function (c) { return pairCiv(c).age === age; })[0];
        return civ ? '<div class="unit-req-head civ-ability-cap pj-cap">' + escapeHtml(age) + '</div>' +
          journeyStripHtml(leader, civ, pickOf[civ], routes) : "";
      }).join("");
      return '<div class="age-acc pj-route-acc collapsed" data-route="' + ri + '">' +
        '<div class="age-acc-head pj-route-head" role="button" tabindex="0" aria-expanded="false" aria-label="' +
          attrEscape("Route " + (ri + 1) + ": " + names.join(", ")) + '">' +
          '<span class="pj-route-arts" aria-hidden="true">' + arts + '</span>' +
          '<span class="pj-route-in"><span class="pj-route-num">Route ' + (ri + 1) + '</span>' +
          '<span class="pj-route-civs">' + steps + '</span></span></div>' +
        '<div class="age-acc-body"><div class="age-acc-inner">' + pjHtml(ri, list) + '</div></div></div>';
    }).join("") + '</div>';
    return html;
  }

  // One civilization as an Age strip: closed, the painting cut to the strip
  // under its emblem and name (and its step on the chosen route); open, the
  // whole banner with the emblem, the name, the game's choice and the
  // leader's portrait, the details under it
  function journeyStripHtml(leader, civ, pick, routes) {
    var c = pairCiv(civ), p = pick || null;
    var art = ((window.CIVPEDIA_PAINTINGS || {}).pages || {})[civ] || "";
    var choice = p ? String(p.choice || "").toLowerCase() : "";
    var sub = p
      ? '<span class="pair-choice pair-choice--' + attrEscape(choice) + '">' + escapeHtml(p.choice) + ' choice</span>' + pairGems(p.bias)
      : '<span class="pair-choice">On a route</span>';
    // what this civilization is on each route it belongs to
    var notes = routes.map(function (r, ri) {
      var k = r.civs.indexOf(civ);
      return k < 0 ? "" : '<p class="pair-open pj-route-note" data-route="' + ri + '">' + r.notes[k] + '</p>';
    }).join("");
    var lead = notes ? '<div class="pair-sec pj-route-sec"><div class="pair-sec-head">On this route</div>' + notes + '</div>' : '';
    var portrait = leader.portrait || "";
    var hex = c.hex ? attrEscape(c.hex) : "";
    return '<div class="age-acc age-acc--panel pj-civ collapsed" data-civ="' + attrEscape(civ) + '"' + (choice ? ' data-choice="' + attrEscape(choice) + '"' : '') + '>' +
      '<div class="age-sub age-acc-head age-acc-head--panel pj-head" role="button" tabindex="0" aria-expanded="false" aria-label="' + attrEscape(c.name) + '">' +
        '<span class="pj-art"' + (art ? ' style="background-image:url(&quot;' + attrEscape(art) + '&quot;)"' : '') + '></span>' +
        '<span class="pj-slim">' + (hex ? '<img class="pj-slim-hex" src="' + hex + '" alt="" onerror="this.remove()">' : '') +
          '<span class="pj-slim-name">' + escapeHtml(c.name) + '</span><span class="pj-step"></span></span>' +
        '<span class="pj-full"><span class="pj-full-in">' + (hex ? '<img class="pj-full-hex" src="' + hex + '" alt="" onerror="this.remove()">' : '') +
          '<span class="pj-full-text"><span class="pj-full-name">' + escapeHtml(c.name) + '</span><span class="pj-full-sub">' + sub + '</span></span>' +
          (portrait ? '<span class="pj-full-leader"><img src="' + attrEscape(portrait) + '" alt="' + attrEscape(leader.name) + '"></span>' : '') +
        '</span></span>' +
      '</div>' +
      '<div class="age-acc-body"><div class="age-acc-inner"><div class="pj-card">' + pairBodyHtml(leader, civ, p, lead) + '</div></div></div></div>';
  }

  // the map's lines, measured from where the emblems sit: a faint curve from
  // a civilization to each one it opens in the next Age, the chosen route in
  // gold (solid when the step before opens it, dashed when the leader does,
  // dotted when only an earlier step does)
  function drawJourney(pj) {
    var map = pj.querySelector(".pj-map");
    var svg = map && map.querySelector(".pj-edges");
    if (!svg) return;
    var mr = map.getBoundingClientRect();
    if (!mr.width || !mr.height) return;
    var pos = {};
    map.querySelectorAll(".pj-node").forEach(function (n) {
      var h = n.querySelector(".pj-node-hex").getBoundingClientRect();
      pos[n.getAttribute("data-civ")] = { l: h.left - mr.left, r: h.right - mr.left, y: h.top - mr.top + h.height / 2 };
    });
    var f = function (v) { return v.toFixed(1); };
    var curve = function (a, b) {
      var x1 = a.r + 5, x2 = b.l - 5, y1 = a.y, y2 = b.y, mx = (x1 + x2) / 2;
      var rr = Math.min(10, Math.abs(y2 - y1) / 2, (x2 - x1) / 2);
      if (Math.abs(y2 - y1) < 2 || rr <= 0) return "M" + f(x1) + " " + f(y1) + " L" + f(x2) + " " + f(y2);
      var sg = y2 > y1 ? 1 : -1;
      return "M" + f(x1) + " " + f(y1) + " L" + f(mx - rr) + " " + f(y1) +
        " Q" + f(mx) + " " + f(y1) + " " + f(mx) + " " + f(y1 + sg * rr) +
        " L" + f(mx) + " " + f(y2 - sg * rr) +
        " Q" + f(mx) + " " + f(y2) + " " + f(mx + rr) + " " + f(y2) +
        " L" + f(x2) + " " + f(y2);
    };
    var out = "";
    map.querySelectorAll(".pj-node[data-next]").forEach(function (n) {
      var a = pos[n.getAttribute("data-civ")];
      n.getAttribute("data-next").split(" ").forEach(function (civ) {
        if (a && pos[civ]) out += '<path class="pj-edge" d="' + curve(a, pos[civ]) + '"></path>';
      });
    });
    var routes = [];
    try { routes = JSON.parse(pj.getAttribute("data-routes") || "[]"); } catch (e) { routes = []; }
    var r = routes[+pj.getAttribute("data-route") || 0];
    if (r) {
      for (var i = 1; i < r.civs.length; i += 1) {
        var a = pos[r.civs[i - 1]], b = pos[r.civs[i]];
        if (!a || !b) continue;
        var d = curve(a, b), kind = r.kinds[i], delay = ((i - 1) * 0.3).toFixed(2) + "s";
        out += '<path class="pj-edge pj-edge--glow" d="' + d + '" style="animation-delay:' + delay + '"></path>';
        out += '<path class="pj-edge pj-edge--route' + (kind === "leader" ? " pj-edge--dash" : kind === "earlier" ? " pj-edge--dot" : "") + '" d="' + d + '"' +
          (kind === "civ" ? ' pathLength="1"' : '') + ' style="animation-delay:' + delay + '"></path>';
      }
    }
    var w = Math.round(mr.width), h = Math.round(mr.height);
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.innerHTML = out;
  }

  // a route chosen: its civilizations lit on the map with their step, the
  // others dimmed; each strip shows its step and its note for that route
  function setJourneyRoute(pj, ri) {
    var routes = [];
    try { routes = JSON.parse(pj.getAttribute("data-routes") || "[]"); } catch (e) { routes = []; }
    var r = routes[ri] || { civs: [] };
    pj.setAttribute("data-route", String(ri));
    pj.classList.toggle("pj--routed", !!routes[ri]);
    pj.querySelectorAll(".pj-route").forEach(function (b) {
      var on = +b.getAttribute("data-route") === ri;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    pj.querySelectorAll(".pj-node").forEach(function (n) {
      var k = r.civs.indexOf(n.getAttribute("data-civ"));
      n.classList.toggle("in-route", k >= 0);
      n.setAttribute("data-step", k >= 0 ? String(k + 1) : "");
    });
    pj.querySelectorAll(".pj-civ").forEach(function (s) {
      var k = r.civs.indexOf(s.getAttribute("data-civ"));
      s.classList.toggle("in-route", k >= 0);
      var st = s.querySelector(".pj-step");
      if (st) st.textContent = k >= 0 ? String(k + 1) : "";
    });
    drawJourney(pj);
  }

  var journeyObserver = null;
  function bindJourneys() {
    if (journeyObserver) { journeyObserver.disconnect(); journeyObserver = null; }
    var list = contentEl.querySelectorAll(".pj");
    if (!list.length) return;
    // the lines follow the map's size (the box opening, a turned phone)
    if (window.ResizeObserver) {
      journeyObserver = new ResizeObserver(function (entries) {
        entries.forEach(function (en) { var pj = en.target.closest(".pj"); if (pj) drawJourney(pj); });
      });
    }
    list.forEach(function (pj) {
      // a civilization on the map opens its strip below; one this route
      // does not pass through opens the route that does, or its own page
      pj.querySelectorAll(".pj-node").forEach(function (n) {
        n.addEventListener("click", function () {
          var civ = n.getAttribute("data-civ");
          var sel = '.pj-civ[data-civ="' + civ + '"]';
          var openStrip = function (strip) {
            var head = strip.querySelector(".pj-head");
            if (strip.classList.contains("collapsed")) head.click();
            setTimeout(function () { head.scrollIntoView({ behavior: "smooth", block: "center" }); }, 420);
          };
          var strip = pj.querySelector(sel);
          if (strip) { openStrip(strip); return; }
          var holder = pj.closest(".pj-route-list");
          var other = holder ? Array.prototype.filter.call(holder.children, function (acc) { return !!acc.querySelector(sel); })[0] : null;
          if (other) {
            var rh = other.querySelector(".pj-route-head");
            if (other.classList.contains("collapsed")) rh.click();
            setTimeout(function () { openStrip(other.querySelector(sel)); }, 450);
            return;
          }
          navigateToNamedPage(pairCiv(civ).name);
        });
      });
      setJourneyRoute(pj, +pj.getAttribute("data-route"));
      if (journeyObserver) journeyObserver.observe(pj.querySelector(".pj-map"));
    });
  }

  // An .iw keeps an icon on the line with its word. The linker sometimes wraps
  // a whole sentence in one (an icon at its start and a tip inside), and a
  // no-wrap sentence runs off a phone screen: such a group may wrap.
  function unwrapLongIconWords(root) {
    (root || document).querySelectorAll(".iw").forEach(function (el) {
      if (el.textContent.replace(/\s+/g, " ").trim().length > 28) el.classList.add("iw--wrap");
    });
  }
  // An icon belongs at the head of the whole term it marks. The linkers find
  // the head noun ("Units", "Towns", "Building") and can leave its modifiers
  // behind: "Land [icon] Military Units", "Mining [icon] Towns", "Desert
  // [icon] Floodplains". After a text is written, such an icon moves in front
  // of its capitalised modifiers; and when the term already carries an icon
  // ("[Happiness] Happiness [icon] Building", "[flag] Greek Unique [icon]
  // Infantry Unit") the second icon goes -- one term, one icon.
  var PHRASE_STOP = /^(A|An|The|In|On|For|To|Of|And|Or|With|From|By|At|Its|Your|Each|Every|All|Any|No|Per|Gain|Gains|Grant|Grants|Receive|Receives|When|If|This|That|Can|Has|Have|Is|Are|Build|Builds|Construct|Train|Unlock|Unlocks|Require|Requires|Allow|Allows|Toward|Towards|Adjacent|Near|Other|Their|His|Her|Most|More|Less|Some|Many|Two|Three|Four|Five|Six|One|Free|Additional|Extra|Also|Double|Both|These|Those|New|Enemy|Enemies|Friendly|Nearby|Current|Previous|Next|First|Second|Last|Only|Not|Cannot|May|Must|Will|Use|Uses|Using|Capture|Captures|Capturing|Defeat|Defeats|Defeating|Increase|Increases|Decrease|Reduce|Reduces|Lose|Loses|Earn|Earns|Get|Gets|After|Before|During|Until|While|Once|Against|Between|Within|Into|Over|Under|Via|Plus|Than|Like|Such|As|But|So|Then|Where|Which|Who|What|How|Place|Placed|Stationed|Assigned|Slotted|Choose|Select|Make|Makes|Keep|Keeps|Found|Founds|Settle|Settles|Move|Moves|Take|Takes|Give|Gives|Provide|Provides|Add|Adds|Convert|Converts|Count|Counts|Ignore|Ignores|Heal|Heals|Attack|Attacks|Attacking|Defending|Fighting|Research|Researching|Study|Studying|Complete|Completing|Constructing|Training|Purchasing|Buying|Converting|Establishing|Creating|Pay|Pays|Cost|Costs|Spend|Spends|Buy|Earned|Built|Tier|Yes|Tip|Note|Effect|Effects)$/;
  var PHRASE_NAMES = null;
  function phraseNames() {
    if (PHRASE_NAMES) return PHRASE_NAMES;
    PHRASE_NAMES = {};
    Object.keys(civNameIcons()).forEach(function (n) { PHRASE_NAMES[n] = 1; });
    Object.keys(CIV_EXTRAS).forEach(function (k) { if (CIV_EXTRAS[k].name) PHRASE_NAMES[CIV_EXTRAS[k].name] = 1; });
    (window.CIVPEDIA_LEADER_CATALOG || []).forEach(function (l) { String(l.name || "").split(/[ ,]+/).forEach(function (w) { if (w) PHRASE_NAMES[w] = 1; }); });
    delete PHRASE_NAMES["City-State"];   // a term the flag table also carries, not a name
    return PHRASE_NAMES;
  }
  var PHRASE_NOUN = /^\s*(?:Buildings?|Quarters?|Districts?|Improvements?|Units?|Projects?|Resources?|Wonders?)\b/;
  // an element that already marks the term: a civ flag, a unit's own icon or
  // a term glyph (Happiness, City-State...). A Tradition or Policy card icon
  // names a card of its own ("[card] Daimyo [icon] Land Military Units"), so
  // the term after it still needs its icon.
  var CARD_ICON_TITLE = /Polic|Tradition|Slot|Memento|Wonder|Technolog|Civic/i;
  function isIcedElement(el) {
    if (!el || el.nodeType !== 1) return false;
    var ico = el.matches("button.inline-icon, img.unit-name-ico, img.civ-inline-ico, .game-ref") ? el :
      el.querySelector && el.querySelector("button.inline-icon, img.unit-name-ico, img.civ-inline-ico");
    if (!ico) return false;
    return !(ico.matches("button.inline-icon") && CARD_ICON_TITLE.test(ico.getAttribute("title") || ""));
  }
  // the sibling before a node, past blank text
  function prevNonBlank(n) {
    var p = n && n.previousSibling;
    while (p && p.nodeType === 3 && !p.data.trim()) p = p.previousSibling;
    return p;
  }
  var PHRASE_MULTI = null;
  function phraseMultiNames() {
    if (PHRASE_MULTI) return PHRASE_MULTI;
    var list = [];
    Object.keys(civNameIcons()).forEach(function (n) {
      if (n === "City-State") return;
      list.push({ n: n + " Empire", civ: true });
      if (/\s/.test(n)) list.push({ n: n, civ: true });
    });
    var refs = gameRefs() || {};
    Object.keys(refs).forEach(function (n) { if (/\s/.test(n)) list.push({ n: n, civ: false }); });
    list.sort(function (a, b) { return b.n.length - a.n.length; });
    // gameRefs() is empty until the page tables exist: build again later
    if (Object.keys(refs).length) PHRASE_MULTI = list;
    return list;
  }
  // where the modifiers may start when [start] would cut a name in two
  // (-1: the whole run is part of a civilization's name)
  function nameCut(text, start) {
    var names = phraseMultiNames();
    for (var i = 0; i < names.length; i += 1) {
      var n = names[i].n, idx = text.indexOf(n);
      while (idx !== -1) {
        if ((idx < start || (idx === start && names[i].civ)) && idx + n.length > start) {
          if (!names[i].civ) return idx;
          var s = idx + n.length;
          while (s < text.length && /\s/.test(text.charAt(s))) s += 1;
          return s >= text.length ? -1 : s;
        }
        idx = text.indexOf(n, idx + 1);
      }
    }
    return start;
  }
  // one step: "moved" (the icon went in front of its modifiers - look again),
  // "removed" (the term already had an icon) or "" (nothing to do)
  // a yield or stat glyph marks its own word ("Flat [Influence] Influence",
  // "Unique [Production] Production and Fortification Building"): it never
  // moves in front of other words
  var NO_MOVE_TITLE = /^(?:Food|Production|Gold|Science|Culture|Happiness|Influence|Tourism|Diplomacy|Combat Strength|Ranged Strength|Bombard Strength|Ranged Attack|Movement|Sight|Celebration|Relationship)$/;
  function fixIconPhraseStep(btn, removeOnly) {
    if (NO_MOVE_TITLE.test(btn.getAttribute("title") || "")) removeOnly = true;
    // the text right before the icon, climbing out of the wrappers the icon
    // opens (an icon-and-word group, a tip, bold)
    var node = btn;
    while (!prevNonBlank(node) && node.parentNode && node.parentNode.matches && node.parentNode.matches(".iw, .tip, strong, b")) node = node.parentNode;
    var prev = node.previousSibling;
    while (prev && prev.nodeType === 3 && !prev.data.trim() && prev.previousSibling && prev.previousSibling.nodeType === 1) prev = prev.previousSibling;
    var after = btn.nextSibling ? btn.nextSibling.textContent : "";
    if (!after.trim() && btn.nextSibling && btn.nextSibling.nextSibling) after += btn.nextSibling.nextSibling.textContent;
    if (!prev) return "";
    // inside a hyphenated compound ("Culture-and-[Gold] Gold payout"): the
    // compound's first word carries the icon
    var tailTxt = prev.textContent;
    if (/^-\s*$/.test(tailTxt) && prev.previousSibling) tailTxt = prev.previousSibling.textContent + tailTxt;
    if (/[A-Za-z]-\s*$/.test(tailTxt)) {
      if (prev.nodeType === 3) prev.data = prev.data.replace(/-\s+$/, "-");
      var nx = btn.nextSibling;
      if (nx && nx.nodeType === 3) nx.data = nx.data.replace(/^\s+/, "");
      btn.remove();
      return "removed";
    }
    if (prev.nodeType === 1) {
      // "[Happiness] Happiness" then this icon on "Building": one term, one icon
      if (isIcedElement(prev)) {
        // the same glyph twice in a row ("[icon] [B][icon] Army Commanders[/B]")
        var prevIco = prev.matches("button.inline-icon") ? prev : null;
        if (prevIco && prevIco.getAttribute("title") === btn.getAttribute("title")) { btn.remove(); return "removed"; }
        if (PHRASE_NOUN.test(after) && !/[.,;:]\s*$/.test(prev.textContent)) { btn.remove(); return "removed"; }
        return "";
      }
      // a card of its own ("[card] Daimyo"): the term starts after it
      if (prev.querySelector && prev.querySelector("button.inline-icon, img")) return "";
      // a plain word group of modifiers in its own element (a tip, a group
      // an earlier icon left): "[icon] Militaristic City-State [icon] Unique
      // Improvement" -- the term's icon already stands before it
      var ptxt = prev.textContent.trim();
      if (prev.matches && prev.matches("span, strong, b") && /^(?:[A-Z][A-Za-zÀ-ɏ'’-]*\s*){1,3}$/.test(ptxt) &&
          !ptxt.split(/\s+/).some(function (w) { return PHRASE_STOP.test(w) || phraseNames()[w]; })) {
        var before = prevNonBlank(prev);
        if (before && before.nodeType === 3) {
          var bm = /((?:[A-Z][A-Za-zÀ-ɏ'’-]*\s+){1,3})$/.exec(before.data);
          var bwords = bm ? bm[1].trim().split(/\s+/).filter(function (w) { return !PHRASE_STOP.test(w) && !phraseNames()[w]; }) : [];
          if (bwords.length && !before.data.slice(0, before.data.length - bm[1].length).trim() && isIcedElement(prevNonBlank(before))) { btn.remove(); return "removed"; }
        }
        if (isIcedElement(before)) { btn.remove(); return "removed"; }
        if (removeOnly) return "";
        prev.parentNode.insertBefore(btn, prev);
        prev.parentNode.insertBefore(document.createTextNode(" "), prev);
        return "moved";
      }
      return "";
    }
    if (prev.nodeType !== 3) return "";
    var text = prev.data;
    var m = /((?:[A-Z][A-Za-zÀ-ɏ'’-]*\s+){1,3})$/.exec(text);
    if (!m) return "";
    var words = m[1].trim().split(/\s+/);
    // keep only the run of modifiers next to the icon
    var run = [];
    for (var i = words.length - 1; i >= 0; i -= 1) {
      var w = words[i];
      if (PHRASE_STOP.test(w) || /['’]s?$/.test(w) || phraseNames()[w]) break;
      run.unshift(w);
    }
    if (!run.length) return "";
    var start = text.length - m[1].length + m[1].lastIndexOf(run.join(" "));
    // never cut a name in two: a civilization's ("Achaemenid Persian", "Russian
    // Empire") stays before the icon, any other ("Great Wall") goes after it
    start = nameCut(text, start);
    if (start < 0) return "";
    // the modifiers open the text right after an iced word ("[flag] Greek
    // Unique [icon] Infantry Unit"): that term has its icon already
    if (!text.slice(0, start).trim() && isIcedElement(prevNonBlank(prev))) { btn.remove(); return "removed"; }
    if (removeOnly) return "";
    var rest = prev.splitText(start);
    rest.parentNode.insertBefore(btn, rest);
    rest.parentNode.insertBefore(document.createTextNode(" "), rest);
    return "moved";
  }
  function fixIconPhrases(root) {
    var seen = [];
    (root || document).querySelectorAll("button.inline-icon:not([data-phr])").forEach(function (btn) {
      btn.setAttribute("data-phr", "1");
      if (!btn.closest("li, p, .tech-row-text, .trad-text, .mem-text, .tip-popover, .civ-ability-text, .pair-reason, .pair-open, .unit-attrs, .wonder-effects")) return;
      seen.push(btn);
      for (var k = 0; k < 4 && fixIconPhraseStep(btn) === "moved"; k += 1) { /* keep walking back */ }
    });
    // an icon moved later in the text can make an earlier one a double
    // ("[CS] Militaristic City-State [icon] Unique Improvement"): look again
    seen.forEach(function (btn) { if (btn.isConnected) fixIconPhraseStep(btn, true); });
  }

  if (window.MutationObserver) {
    var iwPending = false;
    new MutationObserver(function () {
      if (iwPending) return;
      iwPending = true;
      requestAnimationFrame(function () { iwPending = false; fixIconPhrases(document.body); unwrapLongIconWords(document.body); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  // A leader's Mementos as the game's cards: the diamond art in its column,
  // the name, where it unlocks, a rule, the effect (mementos.js)
  var MEMENTOS = window.CIVPEDIA_MEMENTOS || {};
  function mementoCardsHtml(names) {
    names = (names || []).filter(function (n) { return n != null && String(n).trim() !== ""; });
    if (!names.length) return '<div class="civ-trait-note">None</div>';
    return '<div class="mem-cards">' + names.map(function (n) {
      var key = String(n).replace(/\s*\(memento\)\s*$/i, "").trim();
      var rec = MEMENTOS[key] || {};
      var icon = "images/mementos/" + iconSlug(n) + ".png";
      return '<div class="mem-card">' +
        '<div class="mem-art"><img src="' + attrEscape(icon) + '" alt="" onerror="this.remove()"></div>' +
        '<div class="mem-body">' +
          '<div class="mem-name">' + escapeHtml(rec.name || key) + '</div>' +
          // on the leader's own page the level alone says it; a Foundation
          // memento keeps the game's wording
          ((rec.level && rec.path && rec.path !== "Foundation") ? '<div class="mem-unlock">Unlocks at level ' + rec.level + '</div>'
            : rec.unlock ? '<div class="mem-unlock">' + escapeHtml(rec.unlock) + '</div>' : '') +
          (rec.text ? '<div class="mem-text">' + statText(rec.text, false, true) + '</div>' : '') +
        '</div></div>';
    }).join("") + '</div>';
  }

  // A leader page's body: the history, a chapter that opens on a tap (the
  // ability and agenda live on the card)
  function renderLeaderBody(page) {
    var out = "";
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "HISTORY") out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(c), "toggle-collapsed");
    });
    return out;
  }

  // The leader card, in the civilization page's shape: the drawn card (the
  // laurel portrait, the name, the attribute bezels) with the leader's
  // quotation under it, the loading-screen introduction in the quote box,
  // the Ability, the Agenda and the rest as 45px rows one open at a time.
  function renderLeaderEntryCard(page, leader) {
    var media = MEDIA[page.id] || {};
    var lore = LEADER_LORE[leader.id] || {};
    var extras = LEADER_EXTRAS[leader.id] || {};
    var html = '<aside class="entry-card civ-detail-card leader-card-page" aria-label="Leader details">';
    var caption = lore.quote
      ? '<div class="emblem-caption leader-card-caption"><span class="emblem-caption-text">&ldquo;' + escapeHtml(lore.quote) + '&rdquo;</span>' +
        '<span class="emblem-caption-name">' + escapeHtml(leader.name) + '</span></div>'
      : "";
    var art = leader.card || media.portrait || leader.portrait;
    if (art && cardPlateHtml(art, leader.name)) {
      // the leader's Starting Biases on the card, as a civilization's are
      var cardBiases = (extras.biases || leader.startingBiases || []).map(function (b) { return { label: b }; });
      html += cardPlateHtml(art, leader.name, caption ? " has-caption" : "", caption, cardCornersHtml(leader.attributes, cardBiases));
    } else if (art) {
      html += '<div class="entry-emblem entry-emblem-photo civ-emblem civ-emblem--card' + (caption ? " has-caption" : "") + '">' +
        '<img class="entry-portrait" src="' + attrEscape(art) + '" alt="' + attrEscape(leader.name) + '">' + caption + '</div>';
    }
    var intro = (INTRO_TEXT.leaders || {})[leader.id] || "";
    if (intro) {
      html += '<div class="leader-quote">' + ornamentHtml() + '<p class="leader-quote-text intro-text">' + escapeHtml(intro) + '</p></div>';
    }
    var abilityName = lore.abilityName || (leader.ability && leader.ability.name) || "";
    var abilityDesc = lore.abilityDesc || (leader.ability && leader.ability.description) || "";
    html += civCardBox(abilityName || "Leader Ability",
      '<div class="wonder-effects civ-ability-text">' + statText(valueOrNone(abilityDesc), true) + '</div>', false,
      "leader-trait-box", "Leader Ability");
    var agendaName = lore.agendaName || (leader.agenda && leader.agenda.name) || "";
    var agendaDesc = lore.agendaDesc || (leader.agenda && leader.agenda.description) || "";
    // the Agenda in the Ability's shape: its own name on the row, the kind under it
    html += civCardBox(agendaName || "Leader Agenda",
      '<div class="wonder-effects civ-ability-text">' + statText(valueOrNone(agendaDesc), true) + '</div>', false,
      "leader-trait-box", "Leader Agenda");
    var uniqueItems = leader.unique && leader.unique.items;
    if (hasItems(uniqueItems)) {
      html += civCardBox("Unique", '<div class="leader-row-list leader-row-list-lg">' + uniqueItems.filter(Boolean).map(function (name) {
        var e = reqPageEntry(name);
        var icon = (e && (MEDIA[e.page.id] || {}).portrait) || (gameRefs()[name] || {}).icon || "";
        return '<button class="leader-row-item unit-req-link" type="button"' + (e ? ' data-page-id="' + attrEscape(e.page.id) + '"' : '') + '>' +
          (icon ? '<img class="chip-icon" alt="" src="' + attrEscape(icon) + '" onerror="this.remove()">' : '') +
          '<span class="chip-text">' + escapeHtml(name) + '</span></button>';
      }).join("") + '</div>', false);
    }
    // the game's suggested civilizations and the three-Age routes through
    // them, on one map with each civilization's strip under it
    var journey = civJourneyHtml(leader);
    if (journey) {
      html += civCardBox("Civ Syncretism & Paths", journey, false, "pair-box pj-box");
    } else {
      var sync = syncretismInnerHtml(extras.syncretism || leader.civSyncretismAndUnlocks);
      html += civCardBox("Civ Syncretism", sync || '<div class="civ-trait-note">None</div>', false);
    }
    // (Starting Biases are written on the card)
    html += civCardBox("Mementos", mementoCardsHtml(extras.mementos || leader.mementos), false);
    // (no Gallery: a leader's other portraits are pages of their own)
    html += '</aside>';
    return html;
  }

  function renderNamedDetailBlock(title, name, description) {
    return '<div class="entry-section"><h4>' + escapeHtml(title) + '</h4><div class="leader-detail-name">' + escapeHtml(valueOrNone(name)) + '</div><div class="leader-detail-desc">' + statText(valueOrNone(description), true) + '</div></div>';
  }

  function renderDetailBlock(title, items, forcedPage, iconDir, fixedIcon, mode) {
    var html = '<div class="entry-section"><h4>' + escapeHtml(title) + '</h4>';
    html += renderLinkedList(items, forcedPage, iconDir, fixedIcon, mode);
    html += '</div>';
    return html;
  }

  var SYNCRETISM_ORDER = ["suggested", "antiquity", "exploration", "modern"];

  function syncretismInnerHtml(data) {
    var groups = data || {};
    var keys = SYNCRETISM_ORDER.filter(function (k) { return groups[k] && groups[k].length; });
    Object.keys(groups).forEach(function (k) {
      if (SYNCRETISM_ORDER.indexOf(k) === -1 && groups[k] && groups[k].length) keys.push(k);
    });
    if (!keys.length) return "";
    return keys.map(function (key) {
      var label = key.charAt(0).toUpperCase() + key.slice(1);
      return '<div class="entry-subgroup"><span>' + escapeHtml(label) + "</span>" +
        renderLinkedList(groups[key], null, "images/civs/", null, "grid") + "</div>";
    }).join("");
  }

  function renderSyncretismBlock(data) {
    var inner = syncretismInnerHtml(data);
    return '<div class="entry-section"><h4>Civ Syncretism</h4>' +
      (inner || '<span class="leader-none">None</span>') + "</div>";
  }

  // A "<Head>" label + one icon/name row (Unlocked By / Obsoleted By /
  // Upgrade From / Upgrade To). `ref` = { name, icon, tier? }.
  // "Academics" / "Mysticism II" -> the same {name, icon} shape a unit's
  // unlockedBy carries, so Wonders can reuse the Units requirement block.
  // The trailing numeral is a Civic mastery level, not part of the name, so
  // the icon is looked up without it.
  // A Wonder/Improvement stat line is game text with its own [TIP:] markup but
  // no icons, so it goes through the concept linker first -- the linker keeps
  // an existing tip and only adds the glyph. No unit/GP name passes here, for
  // the same reason the Religion guide skips them.
  // ---- The game's names: a glossary of unique units, commanders, improvements,
  // quarters, quarter buildings and Wonders, each with its own art and page
  var GAME_REFS = null, GAME_REF_RE = null, GAME_REF_TOKENS = [];
  // a following word that belongs to the name ("Legatus Commanders")
  var GAME_REF_TAIL = "(?:\\s+(?:Army\\s+|Fleet\\s+)?(?:Commanders?|Units?|Quarters?|Improvements?))?";
  // capitalised names that are also plain words in a phrase
  var GAME_REF_SKIP = { "Marine": /^\s+(?:Terrain|tiles?)/i, "Colonist": /^\s+Units?\b/i };
  // a match that reads as something else: (rest after it, text before it, page) -> skip
  var GAME_REF_SKIP_FN = {
    // the Marine biome ("Marine tiles", "Marine-terrain", "Desert, Marine, Tropical"):
    // only "Marines", "Marine Unit" or "the Marine" (not "the Marine tiles") is the American unit
    "Marine": function (rest, before) {
      if (/^(?:s\b|\s+Units?\b)/.test(rest)) return false;
      return !(/\bthe\s+$/i.test(before) && !/^(?:-|\s+(?:Terrain|tiles?|biome)\b)/i.test(rest));
    },
    // Blackbeard's flagship, not Britain's warship
    "Revenge": function (rest, before) { return /Anne[’']s\s*$/.test(before); },
    // the real wall of history, and the Ming's own wall on Ming pages
    "Great Wall": function (rest, before, page) {
      return /^Ming\b/.test(page) || /(?:beyond|through|across|along|behind)\s+the\s+$/i.test(before) || /^\s+in\s+\d{3,4}/.test(rest);
    }
  };
  function gameRefs() {
    if (GAME_REFS) return GAME_REFS;
    // (not before the page index exists: the links need it)
    if (typeof flatPages === "undefined" || !flatPages || !flatPages.length || !PAGE_ALIASES || !SECTIONS) return {};
    GAME_REFS = {};
    // a page of that title in one of these sections (a name like "Marine" is
    // both a biome and a unit): its id, so the link lands on the right one
    function idIn(title, sections) {
      for (var i = 0; i < flatPages.length; i += 1) {
        var e = flatPages[i];
        if (e.page.title === title && sections.indexOf(e.sectionId) >= 0) return e.page.id;
      }
      return "";
    }
    function put(name, icon, page, fallback, pageId) {
      name = String(name || "").trim();
      if (name.length < 4 || GAME_REFS[name]) return;
      GAME_REFS[name] = { icon: icon, page: page, fallback: fallback || "", pageId: pageId || "" };
    }
    Object.keys(CIV_EXTRAS).forEach(function (cid) {
      var civ = CIV_EXTRAS[cid];
      (civ.traits || civ.uniques || []).forEach(function (t) {
        var cat = t.cat || t.kind || "";
        var page = pageTitleExists(t.name) ? t.name : civ.name;
        if (/\bUnit$/.test(cat)) {
          var base = t.icon ? t.icon.replace(/^.*\//, "") : slugify(t.name) + ".png";
          put(t.name, "images/nav-unit/" + base, page, t.icon || "images/nav-civu/" + base, idIn(t.name, ["UNITS"]));
        } else {
          put(t.name, t.icon || "images/icons/city_unique_quarter.png", page, "", idIn(t.name, ["IMPROVEMENTS", "BUILDINGS", "WONDERS"]));
        }
        (t.sub || []).forEach(function (sb) {
          put(sb.name, sb.icon || "images/civ-uniques/" + slugify(sb.name) + ".png", pageTitleExists(sb.name) ? sb.name : page);
        });
      });
    });
    (((SECTIONS.WONDERS || {}).groups) || []).forEach(function (g) {
      [].concat(g.pages || [], [].concat.apply([], (g.subgroups || []).map(function (x) { return x.pages || []; }))).forEach(function (pg) {
        var media = MEDIA[pg.id] || {};
        put(pg.title, media.portrait || "images/wonders/" + slugify(pg.title) + ".png", pg.title, "", pg.id);
      });
    });
    // a civilization's own Wonder, named in its ability ("+30% Production
    // towards constructing the Byrsa"): its art, and the civ's page when the
    // Wonder has none of its own
    if (CIV_LORE) {
      Object.keys(CIV_LORE).forEach(function (cid) {
        var civName = (CIV_EXTRAS[cid] || {}).name;
        var ages = (CIV_LORE[cid] || {}).ages || {};
        Object.keys(ages).forEach(function (a) {
          String(ages[a] || "").replace(/\[[^\]]*\]/g, "").replace(/towards constructing (?:the )?([^.,;]+?)\s*\./g, function (m, w) {
            w = w.trim();
            // "+10% Production towards constructing Buildings" names a concept,
            // not a Wonder: only a Wonder page, or a name the concept pages do
            // not carry, becomes a game reference
            if (!civName || GAME_REFS[w]) return m;
            var wid = idIn(w, ["WONDERS"]);
            if (!wid && idIn(w, ["CONCEPTS"])) return m;
            put(w, "images/wonders/" + slugify(w) + ".png", pageTitleExists(w) ? w : civName, "", wid);
            return m;
          });
        });
      });
    }
    var names = Object.keys(GAME_REFS).sort(function (a, b) { return b.length - a.length; })
      .map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    GAME_REF_RE = names.length
      ? new RegExp("(^|[^\\w\\u00C0-\\u024F'])(" + names.join("|") + ")((?:e?s)?)(?![\\w\\u00C0-\\u024F])(" + GAME_REF_TAIL + ")", "g")
      : null;
    return GAME_REFS;
  }

  // text -> text with each game name held in a placeholder
  function protectGameRefs(text) {
    gameRefs();
    if (!GAME_REF_RE || !text) return text;
    var self = currentPageCtx && currentPageCtx.page ? currentPageCtx.page.title : "";
    var parts = String(text).split(/(<[^>]+>|\[TIP:[^\]]+\]|\[icon:[^\]]+\])/);
    var res = [];
    parts.forEach(function (chunk, i) {
      if (i % 2) { res.push(chunk); return; }
      res.push(chunk.replace(GAME_REF_RE, function (m, lead, name, plural, tail, offset, whole) {
        var after = whole.slice(offset + m.length, offset + m.length + 16);
        if (name === self) return m;
        if (GAME_REF_SKIP[name] && GAME_REF_SKIP[name].test(plural + tail + after)) return m;
        if (GAME_REF_SKIP_FN[name] && GAME_REF_SKIP_FN[name](plural + tail + after, whole.slice(Math.max(0, offset - 30), offset) + lead, self)) return m;
        GAME_REF_TOKENS.push({ name: name, text: name + plural + tail });
        // the name brings its own art: an icon set just before it
        // ("[icon:BLDG_VIHARA] Vihara", "[icon:CITY_RURAL] Mawaskawe Skote")
        // would print a second one
        if (offset === 0 && !/\S/.test(lead) && i >= 1 && /^\[icon:[A-Za-z0-9_]+\]$/.test(parts[i - 1])) res[i - 1] = "";
        return lead + "g" + (GAME_REF_TOKENS.length - 1) + "";
      }));
    });
    return res.join("");
  }

  // placeholders -> the name's art and a link (plain text inside a tag)
  function restoreGameRefs(html) {
    if (!html || String(html).indexOf("g") < 0) return html;
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      return chunk.replace(/g(\d+)/g, function (m, n) {
        var t = GAME_REF_TOKENS[+n];
        if (!t) return "";
        if (i % 2) return attrEscape(t.text);
        var ref = GAME_REFS[t.name] || {};
        var alt = ref.fallback ? "if(!this.dataset.alt){this.dataset.alt=1;this.src=&quot;" + attrEscape(ref.fallback) + "&quot;}else{this.remove()}" : "this.remove()";
        // a link by page id when the title is shared (the Marine unit and biome)
        var target = ref.pageId
          ? 'civ-unique-head--link" data-page-id="' + attrEscape(ref.pageId)
          : 'page-link" data-page-title="' + attrEscape(ref.page || t.name);
        return '<span class="iw game-ref ' + target + '" role="button" tabindex="0">' +
          '<img class="unit-name-ico game-ref-ico" src="' + attrEscape(ref.icon || "") + '" alt="" onerror="' + alt + '">' +
          escapeHtml(t.text) + '</span>';
      });
    }).join("");
  }

  function statText(markup, bullet, rawTips) {
    var src = protectGameRefs(String(markup || ""));
    var m;
    if (rawTips) {
      // the game's card prints its own [TIP]...[/TIP] terms as written ("Gold
      // Buildings" stays a plain brass term): the concept linker only runs on
      // the text between them, so no icon is slipped inside a term
      m = src.split(/(\[TIP:[^\]]+\][\s\S]*?\[\/TIP\])/).map(function (seg, i) {
        return i % 2 ? seg : linkifyUnitConcepts(seg);
      }).join("");
      // and the card shows only the icons the game wrote ([icon:SCIENCE_VP]
      // before Innovation): the linker's own icons ("Unlocks [unit] Unit
      // Flanking") are dropped, each token kept as many times as the game
      // text carries it
      var own = {};
      src.replace(/\[icon:([^\]]+)\]/g, function (t, k) { own[k] = (own[k] || 0) + 1; return t; });
      m = m.replace(/\[icon:([^\]]+)\]\s*/g, function (t, k) {
        if (own[k] > 0) { own[k] -= 1; return t; }
        return "";
      });
    } else {
      m = linkifyUnitConcepts(src);
    }
    var html = bullet ? renderParagraphMarkup(bulletizeEffects(m)) : richText(m);
    return restoreGameRefs(collapseAdjacentIcons(groupIconWords(linkifyCodex(linkifyActions(html)))));
  }

  function wonderStatBox(head, body) {
    return '<div class="entry-section wonder-stats"><div class="unit-req-head">' +
      escapeHtml(head) + '</div>' + body + '</div>';
  }

  function unlockRef(name) {
    if (!name) return null;
    var base = String(name).replace(/\s+(I|II|III|IV)$/, "");
    var meta = TECH_CIVIC_ICONS[name] || TECH_CIVIC_ICONS[base] || null;
    return { name: String(name), icon: meta ? meta.icon : "" };
  }

  // A requirement's name as a link to its page (a Tech or Civic first, then a
  // unit, building or improvement of that name); plain when there is none.
  // "Mysticism II" (a mastery level) opens Mysticism.
  var REQ_SECTIONS = ["TECHNOLOGIES", "CULTURE", "UNITS", "BUILDINGS", "IMPROVEMENTS", "WONDERS", "CIVILIZATIONS", "GOVERNMENT", "RELIGION", "MAP", "CONCEPTS"];
  function reqPageEntry(name) {
    var key = String(name || "").replace(/\s+(?:I{1,3}|IV|V)$/, "").trim().toLowerCase();
    if (!key) return null;
    var best = null, rank = 99;
    for (var i = 0; i < flatPages.length; i += 1) {
      var e = flatPages[i];
      if (e.page.title.toLowerCase() !== key) continue;
      var r = REQ_SECTIONS.indexOf(e.sectionId);
      if (r < 0) r = 50;
      if (r < rank) { best = e; rank = r; }
    }
    return best || findPageByTitle(key);
  }
  function reqNameInner(name, extraCls) {
    var e = reqPageEntry(name);
    if (!e || (currentPageCtx && currentPageCtx.page === e.page)) {
      return '<span class="unit-req-name' + (extraCls || "") + '">' + escapeHtml(name);
    }
    return '<span class="unit-req-name page-link unit-req-link' + (extraCls || "") + '" role="link" tabindex="0" data-page-id="' +
      attrEscape(e.page.id) + '">' + escapeHtml(name);
  }
  function unitReqBlock(head, ref) {
    if (!ref || !ref.name) return "";
    return '<div class="unit-req">' +
      '<div class="unit-req-head">' + escapeHtml(head) + '</div>' +
      '<div class="unit-req-row">' +
        (ref.icon
          ? '<img class="unit-req-ico" src="' + attrEscape(ref.icon) +
            '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
          : '') +
        reqNameInner(ref.name) +
          (ref.tier ? ' <span class="unit-tier">Tier ' + escapeHtml(String(ref.tier)) + '</span>' : '') +
        '</span>' +
      '</div></div>';
  }

  // Same as unitReqBlock but one head over several icon/name rows -- used for
  // "Unlocked By" when the game lists more than one Requirement (e.g. Merchant:
  // Code of Laws + Chola / Songhai / Qing Origins). `list` = [{name,icon,tier?}].
  function unitReqRowHtml(ref) {
    return '<div class="unit-req-row">' +
      (ref.icon
        ? '<img class="unit-req-ico" src="' + attrEscape(ref.icon) +
          '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
        : '') +
      reqNameInner(ref.name) +
        (ref.tier ? ' <span class="unit-tier">Tier ' + escapeHtml(String(ref.tier)) + '</span>' : '') +
      '</span>' +
    '</div>';
  }
  function unitReqBlockList(head, list) {
    list = (list || []).filter(function (r) { return r && r.name; });
    if (!list.length) return "";
    if (list.length === 1) {
      return '<div class="unit-req">' +
        '<div class="unit-req-head">' + escapeHtml(head) + '</div>' +
        '<div class="unit-req-rows">' + unitReqRowHtml(list[0]) + '</div></div>';
    }
    // Several Requirements: the primary (first) sits on its own row on top, the
    // alternates below it, left to right, wrapping when out of room.
    return '<div class="unit-req unit-req--multi">' +
      '<div class="unit-req-head">' + escapeHtml(head) + '</div>' +
      '<div class="unit-req-rows">' +
        unitReqRowHtml(list[0]) +
        '<div class="unit-req-alts">' +
          list.slice(1).map(unitReqRowHtml).join("") +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // A great person is any page whose SUMMARY (or its "type" page's SUMMARY)
  // reads "A Great Person with one charge...".
  function unitIsGreatPerson(page) {
    var re = /great person[\s\S]*charge/i;
    if (re.test(unitSummaryPlain(page))) return true;
    var base = null;
    flatPages.forEach(function (e) {
      if (e.sectionId === "UNITS" && e.page.id !== page.id &&
          page.id.indexOf(e.page.id + "_") === 0 &&
          (!base || e.page.id.length > base.id.length)) {
        base = e.page;
      }
    });
    return !!(base && re.test(unitSummaryPlain(base)));
  }

  // A named great person (Rabia of Basra) whose id extends a GP "type" page's id
  // (UNIT_ALIM). The type page keeps the generic training bullets; the named
  // pages inherit them, which is noise on a phone -- so those get hidden there.
  function unitIsGpVariant(page) {
    return flatPages.some(function (e) {
      return e.sectionId === "UNITS" && e.page.id !== page.id &&
        page.id.indexOf(e.page.id + "_") === 0 &&
        /UNIQUE_CIVILIAN/.test(e.page.group || "");
    });
  }

  // Great-person variant pages carry no uniqueTo of their own -- borrow it from
  // the "type" page whose id is a prefix (UNIT_TJATY_AMHOSE -> UNIT_TJATY).
  function unitInheritUniqueTo(pageId) {
    var found = null;
    Object.keys(UNIT_STATS).forEach(function (k) {
      if (k !== pageId && pageId.indexOf(k + "_") === 0 && UNIT_STATS[k].uniqueTo) {
        found = UNIT_STATS[k].uniqueTo;
      }
    });
    return found;
  }

  // The Quarter / building a great person must be trained at, read from the
  // SUMMARY ("trained in Cities with a [icon:CITY_UNIQUE_QUARTER] Necropolis").
  function unitRequiredInfrastructure(page) {
    var txt = "";
    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "SUMMARY") txt += " " + (c.paragraphs || []).join(" ");
    });
    var m = txt.match(/\[icon:CITY_UNIQUE_QUARTER\]\s*([A-Za-zÀ-ſ]+)/);
    if (m) return { name: m[1], icon: "images/icons/city_unique_quarter.png" };
    // a specific named improvement the GP is trained beside (Saga Hero -> Þingstaðr)
    m = txt.match(/\[icon:(IMPROVEMENT_[A-Z0-9_]+)\]\s*([A-Za-zÀ-ſ'’-]+)/);
    if (m) return { name: m[2], icon: "images/icons/" + m[1].toLowerCase() + ".png" };
    if (/trained in the \[icon:[^\]]*CAPITAL[^\]]*\]\s*Capital/i.test(txt)) {
      return { name: "Capital", icon: "images/icons/notification_select_capital.png" };
    }
    return null;
  }

  function unitStatRow(iconKey, label, val) {
    return '<div class="unit-stat">' +
      '<span class="unit-stat-ico">' + renderInlineIcon(iconKey) + '</span>' +
      '<span class="unit-stat-val">' + escapeHtml(String(val)) + '</span>' +
      '<span class="unit-stat-lbl">' + escapeHtml(label) + '</span></div>';
  }

  // Units: a Resource-style panel — framed portrait + unique-civ badge +
  // Unlocked By / Obsoleted By in one box, a thin cost row, then TRAITS
  // (stats), the UNIQUE ABILITY box (great people), and Upgrade From / To.
  function renderUnitAside(page) {
    var s = UNIT_STATS[page.id] || {};
    var media = MEDIA[page.id] || {};
    var isGreatPerson = /UNIQUE_CIVILIAN/.test(page.group || "");
    var html = '<aside class="entry-card entry-card--emblem-only" aria-label="Entry details">';

    html += '<div class="entry-emblem entry-emblem-photo entry-emblem-photo--contained unit-emblem">';
    if (media.portrait) {
      html += '<img class="entry-portrait unit-icon" src="' + attrEscape(media.portrait) +
        '" alt="' + attrEscape(media.portraitAlt || page.title) +
        '" onerror="this.classList.add(&quot;noimg&quot;)">';
    } else {
      html += svgIcon(TAB_ICONS.UNITS);
    }
    // the unit's name under its art, as a civilization's is (no page header)
    html += '<span class="wonder-emblem-name unit-emblem-name">' + escapeHtml(page.title) + '</span>';
    // "<Civ> Unique" badge on the portrait -- same compact treatment for every
    // unique unit, great people included (matches Jaguar Slayer / Keshig).
    var uqBadge = s.uniqueTo || (isGreatPerson ? unitInheritUniqueTo(page.id) : null);
    if (uqBadge && uqBadge.civ) {
      html += '<div class="unit-unique">' +
        (uqBadge.logo
          ? '<img class="unit-unique-ico" src="' + attrEscape(uqBadge.logo) +
            '" alt="" onerror="this.style.display=&quot;none&quot;">'
          : '') +
        '<span>' + escapeHtml(uqBadge.civ) + ' Unique</span></div>';
    }
    // Tier-1 unique units that replace a base unit have no unlock tech (they
    // come with the civ). If the data still carries an "Unlocked By" that is the
    // same tech as "Obsoleted By", it is that artifact -- drop it.
    var unlockedList = s.unlockedBy
      ? (Array.isArray(s.unlockedBy) ? s.unlockedBy.slice() : [s.unlockedBy])
      : [];
    if (unlockedList.length === 1 && s.obsoletedBy &&
        unlockedList[0].name === s.obsoletedBy.name) unlockedList = [];
    var reqs = "";
    if (isGreatPerson) {
      // "Unique To" is already shown as the portrait badge above; here only the
      // extra requirement (the Unique Improvement / Quarter it needs).
      var infra = unitRequiredInfrastructure(page);
      if (!infra) {
        // Some variant pages carry only their ability text as SUMMARY -- read
        // the requirement off the "type" page instead.
        var baseEntry = null;
        flatPages.forEach(function (e) {
          if (e.sectionId === "UNITS" && e.page.id !== page.id &&
              page.id.indexOf(e.page.id + "_") === 0 &&
              (!baseEntry || e.page.id.length > baseEntry.page.id.length)) {
            baseEntry = e;
          }
        });
        if (baseEntry) infra = unitRequiredInfrastructure(baseEntry.page);
      }
      if (infra) reqs += unitReqBlock("Requirements", infra);
    }
    // A unit that needs a Building before it can be trained (Missionary -> Temple)
    // -- shown as "Requirement" (civ/tech unlocks use "Unlocked By").
    if (s.requiresBuilding && s.requiresBuilding.name) {
      reqs += unitReqBlock("Requirement", s.requiresBuilding);
    }
    reqs += unitReqBlockList("Unlocked By", unlockedList) + unitReqBlock("Obsoleted By", s.obsoletedBy);

    // A leader whose ability unlocks this unit early (Yi Sun-sin -> Fleet
    // Commander in Antiquity via the Discipline civic). Portrait + note, same
    // idea as the Genghis Khan action lock.
    var lu = UNIT_LEADER_UNLOCK[String(page.id).replace(/_[234]$/, "")];
    var luHtml = "";
    if (lu) {
      var noteHtml = escapeHtml(lu.note);
      if (lu.civicIcon && lu.civicName) {
        noteHtml = noteHtml.replace(escapeHtml(lu.civicName),
          '<img class="unit-leader-unlock-civic" src="' + attrEscape(lu.civicIcon) +
          '" alt="" onerror="this.remove()">' + escapeHtml(lu.civicName));
      }
      luHtml = '<div class="unit-leader-unlock">' +
        '<span class="unit-leader-unlock-fig">' +
          '<img class="unit-leader-unlock-ico" src="' + attrEscape(lu.icon) +
            '" alt="" onerror="this.style.display=&quot;none&quot;">' +
          '<span class="unit-leader-unlock-name">' + escapeHtml(lu.leader || "") + '</span>' +
        '</span>' +
        '<span class="unit-leader-unlock-note">' + noteHtml + '</span></div>';
    }
    html += '</div>';

    // A named Great Person variant (Plato, Sei Shonagon, ...) shares its cost
    // with every other individual of its type and that cost climbs with each
    // one trained -- showing a fixed number on the variant page is misleading.
    // Only the "type" page (Logios, Shijin, ...) keeps the cost row.
    if ((s.cost || s.maintenance) && !(isGreatPerson && unitIsGpVariant(page))) {
      html += '<div class="unit-cost-row">';
      if (s.cost) {
        html += '<span class="unit-cost"><span class="unit-cost-lbl">Cost</span>' + renderInlineIcon(s.cost.yield || "YIELD_PRODUCTION") +
          '<span class="unit-cost-val">' + escapeHtml(String(s.cost.amount)) + '</span></span>';
      }
      if (s.maintenance) {
        html += '<span class="unit-cost"><span class="unit-cost-lbl">Maintenance</span>' +
          renderInlineIcon("YIELD_GOLD") +
          '<span class="unit-cost-val">' + escapeHtml(String(s.maintenance)) + '</span></span>';
      }
      html += '</div>';
    }

    // Requirement / Unlocked By / Obsoleted By: a box of their own over the
    // stats, as a Wonder's Unlocked By is
    if (reqs || luHtml) {
      html += '<div class="entry-section unit-upgrades unit-unlocks">' +
        (reqs ? '<div class="unit-reqs unit-reqs--upgrades">' + reqs + '</div>' : '') + luHtml + '</div>';
    }

    // Stat rows: order, labels and icons follow the game's own
    // civilopedia-sidebar-panels.js (Range only when the unit is ranged).
    var st = s.stats || {};
    var rows = "";
    if (st.range && st.ranged) rows += unitStatRow("STAT_RANGE", "Range", st.range);
    if (st.combat) rows += unitStatRow("STAT_MELEE", "Melee Strength", st.combat);
    if (st.ranged) rows += unitStatRow("STAT_RANGED", "Ranged Strength", st.ranged);
    if (st.bombard) rows += unitStatRow("STAT_BOMBARD", "Bombard Strength", st.bombard);
    if (st.moves) rows += unitStatRow("STAT_MOVE", "Move Range", st.moves);
    if (st.sight) rows += unitStatRow("STAT_SIGHT", "Sight Range", st.sight);
    if (rows) {
      html += '<div class="entry-section unit-traits">' + rows + '</div>';
    }

    (page.chapters || []).forEach(function (c) {
      if (c.chapter_id === "UNIQUE_ABILITY") {
        html += '<div class="entry-section unit-uability"><h4>' +
          escapeHtml(c.title || "Unique Ability") + '</h4>' +
          '<div class="unit-uability-body">' + collapseAdjacentIcons(groupIconWords(linkifyGpNames(linkifyCodex(linkifyActions(chapterBodyHtml({
            paragraphs: (c.paragraphs || []).map(unitAbilityText),
            leaders: c.leaders
          })))))) + '</div></div>';
      }
    });

    if (s.upgradeFrom || s.upgradeTo) {
      html += '<div class="entry-section unit-upgrades">' +
        '<div class="unit-reqs unit-reqs--upgrades">' +
          unitReqBlock("Upgrade From", s.upgradeFrom) +
          unitReqBlock("Upgrade To", s.upgradeTo) +
        '</div></div>';
    }

    return html + '</aside>';
  }

  // The Belief card's heading names the class the belief belongs to, which the
  // sidebar group already states ("Antiquity Pantheons", "Founder Beliefs").
  var BELIEF_BONUS_HEADING = {
    pantheon: "Pantheon Bonus",
    founder: "Founder Bonus",
    enhancer: "Enhancer Bonus",
    reliquary: "Reliquary Bonus",
    belief: "Belief Bonus"
  };
  // Nearly every Pantheon pays out "in Settlements with an Altar", so the Altar
  // is the one word on a Belief card worth following. Turn it into its own
  // icon + link to the Altar building page. Runs on rendered HTML, so the
  // split keeps it out of tags and out of words like "Altars'".
  // Named structures the Religion text actually talks about, scanned out of the
  // BUILDINGS / WONDERS page lists: of the 107 building pages only Altar (26
  // mentions), Temple (14) and Palace (3) appear here, plus the House of Wisdom
  // wonder -- and those four are exactly the ones with their own artwork. Each
  // becomes icon + name, linked to its page.
  var STRUCTURE_REFS = [
    ["House of Wisdom", "WONDER_HOUSE_OF_WISDOM", "House of Wisdom"],
    ["Architecture", "TECH_ARCHITECTURE", "Architecture"],
    ["Pavilion", "CITY_BUILDING_LIST", "Pavilion"],
    ["Altar", "ALTAR", "Altar"],
    ["Temple", "BUILDING_TEMPLE", "Temple"],
    ["Palace", "PALACE", "Palace"],
    ["Pura", "QUARTER_PURA", "Pura"]
  ];
  var STRUCTURE_RE = new RegExp("\\b(" + STRUCTURE_REFS.map(function (r) {
    return r[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("|") + ")(s)?\\b", "g");
  // An icon already sitting right before the name (possibly with a [TIP:]/[B]
  // wrapper opened in between) means the text iced it itself -- don't double up.
  var STRUCTURE_ICED = /(?:<\/button>)(?:\s|<(?!button)[^>]*>)*$/;
  function linkifyStructures(html) {
    var parts = String(html).split(/(<[^>]+>)/);
    return parts.map(function (chunk, i) {
      if (i % 2) return chunk;
      var pre = parts.slice(0, i).join("");
      return chunk.replace(STRUCTURE_RE, function (m, name, plural, offset, whole) {
        var before = whole.slice(Math.max(0, offset - 40), offset);
        // "Town Temple" is the Town project, not the building.
        if (name === "Temple" && /\bTown\s+$/.test(before)) return m;
        if (/<\/button>\s*$/.test(before)) return m;
        if ((offset === 0 || /^\s*$/.test(before)) && STRUCTURE_ICED.test(pre)) return m;
        var meta = STRUCTURE_REFS.filter(function (r) { return r[0] === name; })[0];
        return '<span class="iw page-link structure-ref" data-page-title="' +
          attrEscape(meta[2]) + '" role="button" tabindex="0">' +
          renderInlineIcon(meta[1]) + " " + escapeHtml(name + (plural || "")) + "</span>";
      });
    }).join("");
  }

  // Pantheon names written out in the Religion guide get that Pantheon's own
  // artwork in a ring frame, and follow through to its page. Built from the
  // section data so it stays right if the belief list ever changes.
  var PANTHEON_REF_RE = null;
  var PANTHEON_REF_ART = {};
  function pantheonRefRegex() {
    if (PANTHEON_REF_RE !== null) return PANTHEON_REF_RE;
    var group = ((SECTIONS.RELIGION && SECTIONS.RELIGION.groups) || []).filter(function (g) {
      return g.id === "BELIEFS_PANTHEONS";
    })[0];
    // The Pantheons group is split into Adjacency / Warehouse / Percentage /
    // Flat Bonus subgroups, so the names live one level down.
    var pages = (group && group.pages) || [];
    ((group && group.subgroups) || []).forEach(function (sub) {
      pages = pages.concat(sub.pages || []);
    });
    if (!pages.length) { PANTHEON_REF_RE = false; return PANTHEON_REF_RE; }
    pages.forEach(function (p) {
      PANTHEON_REF_ART[p.title] = "images/beliefs/" + String(p.id).toLowerCase() + ".png";
    });
    var alt = pages.map(function (p) { return p.title; })
      .sort(function (a, b) { return b.length - a.length; })
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
      .join("|");
    PANTHEON_REF_RE = new RegExp("(?:" + alt + ")", "g");
    return PANTHEON_REF_RE;
  }
  // A Wonder named in a Civ Ability's text carries the Wonder's own art (the
  // Wonders section's page art, 34px) and opens its page. Built from the
  // section data, so every Wonder page counts.
  var WONDER_REF_RE = null;
  var WONDER_REF_ART = {};
  function wonderRefRegex() {
    if (WONDER_REF_RE !== null) return WONDER_REF_RE;
    var pages = [];
    (((SECTIONS.WONDERS || {}).groups) || []).forEach(function (g) {
      pages = pages.concat(g.pages || []);
      (g.subgroups || []).forEach(function (sub) { pages = pages.concat(sub.pages || []); });
    });
    if (!pages.length) { WONDER_REF_RE = false; return WONDER_REF_RE; }
    pages.forEach(function (pg) {
      var media = MEDIA[pg.id] || {};
      WONDER_REF_ART[pg.title] = media.portrait || ("images/wonders/" + slugify(pg.title) + ".png");
    });
    var alt = pages.map(function (pg) { return pg.title; })
      .sort(function (a, b) { return b.length - a.length; })
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
      .join("|");
    WONDER_REF_RE = new RegExp("(?:^|[^\\w])(" + alt + ")(?![\\w])", "g");
    return WONDER_REF_RE;
  }
  function linkifyWonderNames(html) {
    var re = wonderRefRegex();
    if (!re) return html;
    var parts = String(html).split(/(<[^>]+>)/);
    return parts.map(function (chunk, i) {
      if (i % 2) return chunk;
      // text that is already a link's or a button's label stays as it is
      var prev = parts[i - 1] || "";
      if (/^<(span[^>]*\bpage-link\b|button)/.test(prev)) return chunk;
      return chunk.replace(re, function (m, name, offset, whole) {
        var lead = m.slice(0, m.length - name.length);
        return lead + '<span class="page-link wonder-ref" data-page-title="' + attrEscape(name) +
          '" role="button" tabindex="0"><span class="wonder-ref-ico"><img src="' +
          attrEscape(WONDER_REF_ART[name]) + '" alt="" onerror="this.parentNode.remove()"></span>' +
          escapeHtml(name) + "</span>";
      });
    }).join("");
  }

  function linkifyPantheonNames(html) {
    var re = pantheonRefRegex();
    if (!re) return html;
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) return chunk;
      return chunk.replace(re, function (name) {
        return '<span class="page-link pantheon-ref" data-page-title="' + attrEscape(name) +
          '" role="button" tabindex="0"><span class="pantheon-ref-ico"><img src="' +
          attrEscape(PANTHEON_REF_ART[name]) + '" alt="" onerror="this.remove()"></span>' +
          escapeHtml(name) + "</span>";
      });
    }).join("");
  }

  // Every Belief in a class shares one icon (religion-icons.xml points them all
  // at rel_bel_<class>), so the class word can carry that icon itself and act as
  // the way into the sidebar category listing them.
  var BELIEF_CLASS_GROUPS = {
    Reliquary: "Reliquary Beliefs",
    Founder: "Founder Beliefs",
    Enhancer: "Enhancer Beliefs"
  };
  // A Belief named in the guide carries its class's icon (the game gives all
  // Beliefs of a class the same rel_bel_<class> texture) and links to its page.
  var BELIEF_REF_RE = null;
  var BELIEF_REF_KIND = {};
  var BELIEF_REF_TIP = {};
  function beliefRefRegex() {
    if (BELIEF_REF_RE !== null) return BELIEF_REF_RE;
    var grp = ((SECTIONS.RELIGION && SECTIONS.RELIGION.groups) || []).filter(function (g) {
      return g.id === "BELIEFS_EXPLORATION";
    })[0];
    var names = [];
    ((grp && grp.subgroups) || []).forEach(function (sub) {
      var kind = beliefGroupKind(sub.title);
      (sub.pages || []).forEach(function (p) {
        BELIEF_REF_KIND[p.title] = kind;
        // The belief's own effect line doubles as its infotip, so naming one in
        // the guide shows what it does without leaving the page.
        var para = ((p.chapters || [])[0] || {}).paragraphs || [];
        BELIEF_REF_TIP[p.title] = BELIEF_BONUS_HEADING[kind] + " — " + stripMarkup(para[0] || "");
        names.push(p.title);
      });
    });
    if (!names.length) { BELIEF_REF_RE = false; return BELIEF_REF_RE; }
    BELIEF_REF_RE = new RegExp("(?:" + names
      .sort(function (a, b) { return b.length - a.length; })
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
      .join("|") + ")", "g");
    return BELIEF_REF_RE;
  }
  function linkifyBeliefNames(html, seen) {
    var re = beliefRefRegex();
    if (!re) return html;
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) return chunk;
      return chunk.replace(re, function (name) {
        var key = "belief:" + name;
        var ico = seen[key]
          ? ""
          : '<span class="belief-class-ico"><img src="images/beliefs/class_' +
            BELIEF_REF_KIND[name] + '_sym.png" alt="" onerror="this.remove()"></span>';
        seen[key] = true;
        return '<span class="iw page-link tip belief-class-ref" data-page-title="' +
          attrEscape(name) + '" data-tip="' + attrEscape(BELIEF_REF_TIP[name] || "") +
          '" role="button" tabindex="0">' + ico + escapeHtml(name) + "</span>";
      });
    }).join("");
  }

  function linkifyBeliefClasses(html, seen) {
    return String(html).split(/(<[^>]+>)/).map(function (chunk, i) {
      if (i % 2) return chunk;
      return chunk.replace(/\b(Reliquary|Founder|Enhancer)\b/g, function (word) {
        var ico = seen[word]
          ? ""
          : '<span class="belief-class-ico"><img src="images/beliefs/class_' +
            word.toLowerCase() + '_sym.png" alt="" onerror="this.remove()"></span>';
        seen[word] = true;
        return '<span class="iw page-link belief-class-ref" data-belief-group="' +
          attrEscape(BELIEF_CLASS_GROUPS[word]) + '" role="button" tabindex="0">' +
          ico + escapeHtml(word) + "</span>";
      });
    }).join("");
  }

  // Open the sidebar on a named (sub)group and scroll it into view -- on mobile
  // the drawer itself has to be pulled open first, since it is closed by default.
  function revealSidebarGroup(title) {
    if (currentSectionId !== "RELIGION") {
      currentSectionId = "RELIGION";
      updateTabbarActive();
      renderSidebar();
    }
    var target = null;
    sidebarEl.querySelectorAll(".group-header").forEach(function (h) {
      var t = h.querySelector(".group-title");
      if (t && t.textContent.trim() === title) target = h;
    });
    if (!target) return;
    function open(header, list) {
      if (!list || list.classList.contains("open")) return;
      list.classList.add("open");
      var tg = header && header.querySelector(".group-toggle");
      if (tg) tg.textContent = "-";
    }
    var parentBody = target.parentElement;
    if (parentBody && parentBody.classList.contains("group-pages")) {
      open(parentBody.previousElementSibling, parentBody);
    }
    open(target, target.nextElementSibling);
    if (isMobileNav()) setSidebarOpen(true);
    // offsetTop is measured against the page, not the scroller, so derive the
    // position inside the sidebar from the two rects instead.
    var delta = target.getBoundingClientRect().top - sidebarEl.getBoundingClientRect().top;
    sidebarEl.scrollTop = Math.max(0, sidebarEl.scrollTop + delta - 48);
  }

  function beliefGroupKind(groupTitle) {
    var t = String(groupTitle || "").toLowerCase();
    if (t.indexOf("pantheon") !== -1) return "pantheon";
    if (t.indexOf("founder") !== -1) return "founder";
    if (t.indexOf("enhancer") !== -1) return "enhancer";
    if (t.indexOf("reliquary") !== -1) return "reliquary";
    return "belief";
  }

  // A Technology page's node in the tree data (its unlocks, mastery, cost)
  var TECH_NODE_BY_ID = null;
  function techNode(pageId) {
    if (!TECH_NODE_BY_ID) {
      TECH_NODE_BY_ID = {};
      Object.keys(TECH_TREE).forEach(function (key) {
        ((TECH_TREE[key] || {}).nodes || []).forEach(function (n) {
          n._kind = (TECH_TREE[key] || {}).kind || "tech";
          TECH_NODE_BY_ID[n.id] = n;
        });
      });
    }
    return TECH_NODE_BY_ID[pageId] || null;
  }

  // One row of a tech's box: the unlock's art and name (a link when the
  // thing has a page), or an effect's badge and the game's line for it.
  function techUnlockRowHtml(u) {
    var icon = u.icon
      ? '<img class="unit-req-ico' + (u.kind === "unit" ? " tech-row-ico--unit" : "") + '" src="' + attrEscape(u.icon) +
        '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
      : "";
    var text;
    var pol = u.kind === "tradition" ? POLICIES.byName[u.name] : null;
    if (pol) {
      // a policy or tradition: its effect as the tooltip, its card on a tap
      text = '<span class="unit-req-name pol-ref tip" role="button" tabindex="0" data-pol="' + attrEscape(u.name) +
        '" data-tip="' + attrEscape(plainMarkup(pol.text)) + '">' + escapeHtml(u.name) + '</span>';
    } else if (u.name) {
      var target = u.page && pageTitleExists(u.page) ? u.page : "";
      // no page of its own: where the glossary sends it (its civilization)
      if (!target) {
        var gref = gameRefs()[u.name];
        if (gref && gref.page && pageTitleExists(gref.page)) target = gref.page;
      }
      if (target) {
        text = '<span class="unit-req-name page-link" data-page-title="' + attrEscape(target) + '">' + escapeHtml(u.name) + '</span>';
      } else if (u.tip) {
        // a Project, an Espionage or Diplomatic Action, an ability: no page of
        // its own, so its name opens the game's text as a tip (icons included)
        text = '<span class="unit-req-name tip" role="button" tabindex="0" data-tip="' + attrEscape(plainMarkup(u.tip)) +
          '" data-tip-html="' + attrEscape(/\[BLIST\]/.test(u.tip)
            ? statText(u.tip.replace(/\[n\]/gi, "[NN]"), true, true)
            : statText(u.tip.replace(/\[n\]/gi, " "), false, true)) + '">' + escapeHtml(u.name) + '</span>';
      } else {
        text = '<span class="unit-req-name unit-req-name--plain">' + escapeHtml(u.name) + '</span>';
      }
    } else {
      text = '<span class="unit-req-name unit-req-name--plain tech-row-text">' +
        statText((u.lines || [])[0] || u.tip || "", false, true) + '</span>';
    }
    return '<div class="wonder-unlock-row tech-row">' + icon + text + '</div>';
  }

  // the game's markup as plain words, for a tooltip
  function plainMarkup(t) {
    return String(t || "").replace(/\[icon:[^\]]*\]\s*/g, "").replace(/\[TIP:[^\]]*\]/g, "").replace(/\[\/TIP\]/g, "")
      .replace(/\[\/?B\]/g, "").replace(/\[N\]|\[n\]/g, " ").replace(/\s+/g, " ").trim();
  }

  // how a card came to the player: its civics, its Age start, a Crisis
  function policyUnlockLine(rec) {
    var parts = (rec.unlockedBy || []).map(function (u) {
      return (u.icon ? '<img class="gov-civic-ico" src="' + attrEscape(u.icon) + '" alt="">' : '') +
        '<span class="unit-req-name' + (pageTitleExists(u.civic) ? ' page-link" data-page-title="' + attrEscape(u.civic) : ' unit-req-name--plain') +
        '">' + escapeHtml(u.civic) + '</span>';
    });
    (rec.starting || []).forEach(function (a) { parts.push('<span class="unit-req-name unit-req-name--plain">in hand at the start of the ' + escapeHtml(a) + ' Age</span>'); });
    if (rec.slot === "crisis") parts.push('<span class="unit-req-name unit-req-name--plain">handed out by a Crisis</span>');
    if (!parts.length) return "";
    return '<div class="trad-top"><div class="gov-tradition-civic trad-unlock"><span class="unit-cost-lbl">' + (rec.slot === "crisis" ? "Source" : "Unlocked by") + '</span>' + parts.join('<span class="pol-sep">·</span>') + '</div>' +
      (rec.obsoletes ? '<div class="trad-replaces">Replaces ' + escapeHtml(rec.obsoletes) + '</div>' : '') + '</div>';
  }

  // a policy's or tradition's card: gold for a Tradition (the civilization
  // pages' card), blue for a Social or Crisis Policy (the game's policy card)
  function policyCardHtml(rec, withSource) {
    var lead;
    var src = withSource ? policyUnlockLine(rec) : "";
    var cardCls = src ? " trad-card--unlock" : "";
    if (rec.slot === "tradition") {
      var logo = rec.civName ? (civNameIcons()[rec.civName] || "") : "";
      lead = logo ? '<img class="trad-civ" src="' + attrEscape(logo) + '" alt="" onerror="this.remove()">'
        : (rec.attr ? '<img class="trad-civ" src="images/icons/attribute_' + rec.attr.toLowerCase() + '.png" alt="" onerror="this.remove()">'
          : '<span class="trad-cross">\u2724</span>');
      return '<div class="trad-entry"><div class="trad-card' + cardCls + '">' +
        '<img class="trad-badge" src="images/icons/tradition_hex.png" alt="">' +
        '<div class="trad-head">' + lead + '<span>' + escapeHtml(rec.name) + '</span></div>' + src +
        (rec.text ? '<div class="trad-text">' + statText(rec.text, false, true) + '</div>' : '') +
        '</div></div>';
    }
    if (rec.slot === "crisis") {
      // the game's crisis card: crimson frame, hatched edges, the warning
      // badge on its top-left corner, the name and text centred
      return '<div class="trad-entry pol-entry"><div class="trad-card pol-card pol-card--crisis' + cardCls + '">' +
        '<img class="crisis-badge" src="images/icons/crisis_badge.png" alt="">' +
        '<div class="trad-head pol-head"><span>' + escapeHtml(rec.name) + '</span></div>' + src +
        (rec.text ? '<div class="trad-text">' + statText(rec.text, false, true) + '</div>' : '') +
        '</div></div>';
    }
    return '<div class="trad-entry pol-entry"><div class="trad-card pol-card' + cardCls + '">' +
      '<img class="trad-badge pol-badge" src="images/icons/policy_round.png" alt="">' +
      '<div class="trad-head pol-head"><span>' + escapeHtml(rec.name) + '</span></div>' + src +
      (rec.text ? '<div class="trad-text">' + statText(rec.text, false, true) + '</div>' : '') +
      '</div></div>';
  }

  // the tree's card popup, opened for any element: the card sits beside it
  function showCardPop(anchor, innerHtml) {
    var pop = contentEl.querySelector(".tt-pop");
    if (!pop) {
      pop = document.createElement("div");
      pop.className = "tt-pop"; pop.hidden = true; pop.setAttribute("role", "dialog");
      contentEl.appendChild(pop);
    }
    pop.innerHTML = '<span class="tt-pop-corner tt-pop-corner--tl"></span><span class="tt-pop-corner tt-pop-corner--tr"></span>' +
      '<span class="tt-pop-corner tt-pop-corner--bl"></span><span class="tt-pop-corner tt-pop-corner--br"></span>' +
      '<button type="button" class="tt-pop-close" aria-label="Close"></button>' +
      '<div class="tt-pop-list pol-pop">' + restoreGameRefs(innerHtml) + '</div>';
    pop.querySelector(".tt-pop-close").addEventListener("click", function (ev) { ev.stopPropagation(); pop.hidden = true; });
    pop.hidden = false;
    pop.scrollTop = 0;
    var b = anchor.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight, margin = 8;
    pop.style.maxHeight = (vh - margin * 2) + "px";
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var left = b.right + 12;
    if (left + w > vw - margin) left = b.left - 12 - w;
    left = Math.min(Math.max(margin, left), Math.max(margin, vw - w - margin));
    var top = Math.min(Math.max(margin, b.top + b.height / 2 - h / 2), vh - h - margin);
    pop.style.left = Math.round(left) + "px";
    pop.style.top = Math.round(top) + "px";
    bindTipHandlers();
    bindLinkedIconHandlers();
    pop.querySelectorAll(".page-link[data-page-title]").forEach(function (el) {
      el.addEventListener("click", function (ev) { ev.stopPropagation(); pop.hidden = true; navigateToNamedPage(el.getAttribute("data-page-title")); });
    });
  }

  // the card list page: every Social Policy, Crisis Policy and Tradition
  // under the three Age panels (the Civ Ability's buttons); inside an Age
  // the policies, the crisis policies, then each civilization's Traditions
  // behind its hex icon, the Government and the attribute Traditions --
  // every heading opens on a tap, all closed to begin with
  function renderCardListBody() {
    var list = POLICIES.list || [];
    function civHex(civId) {
      var ex = CIV_EXTRAS[civId] || {};
      return ex.logo ? ex.logo.replace(/images\/(civs|icons)\//, "images/nav-civ/") : "";
    }
    function cards(recs) {
      return recs.length ? '<div class="trad-cards pol-list">' + recs.map(function (r) { return policyCardHtml(r, true); }).join("") + '</div>' : "";
    }
    // each section is a strip like the Units home's categories: a painting
    // behind, the section's badge in a medallion, its name -- no ornament
    function acc(head, icon, bodyHtml, sub, art) {
      if (!bodyHtml) return "";
      return '<div class="age-acc card-cat collapsed' + (sub ? ' card-cat--sub' : '') + '">' +
        '<div class="age-acc-head unit-cat-head card-cat-head" role="button" tabindex="0" aria-expanded="false">' +
          '<span class="unit-cat-art" aria-hidden="true"' + (art ? ' style="background-image:url(&quot;' + attrEscape(art) + '&quot;)"' : '') + '></span>' +
          (icon ? '<span class="unit-cat-disc unit-cat-disc--framed"><img src="' + attrEscape(icon) + '" alt="" onerror="this.remove()"></span>' : '') +
          '<span class="unit-cat-label">' + escapeHtml(head) + '</span></div>' +
        '<div class="age-acc-body"><div class="age-acc-inner">' + bodyHtml + '</div></div></div>';
    }
    // (Ming has no loading-screen painting of its own: the Great Wall stands in)
    var civArt = function (civId) { return (PAINTINGS.pages || {})[civId] || (/MING/.test(civId) ? "images/paintings/great_wall.jpg" : ""); };
    // the game's order: a policy in hand at the start first, then by the
    // cost of the civic that unlocks it; a civ by its place in the game's
    // civilization table
    function byCost(a, b) { return (a.cost || 0) - (b.cost || 0); }
    var civOrder = POLICIES.civOrder || [];
    function civRank(id) { var i = civOrder.indexOf(id); return i < 0 ? 999 : i; }
    var out = "";
    ["Antiquity", "Exploration", "Modern"].forEach(function (age) {
      var inAge = list.filter(function (r) { return r.age === age; });
      if (!inAge.length) return;
      var ak = age.toLowerCase();
      var leaderArt = { antiquity: "confucius", exploration: "machiavelli", modern: "catherine" }[ak];
      var body = acc("Social Policies", "images/icons/policy_round.png", cards(inAge.filter(function (r) { return r.slot === "policy"; }).sort(byCost)), false, "images/paintings/economic_" + ak + ".jpg") +
        acc("Crisis Policies", "images/icons/crisis_badge.png", cards(inAge.filter(function (r) { return r.slot === "crisis"; })), false, "images/paintings/domination_" + ak + ".jpg");
      body += acc("Government Traditions", "images/icons/tradition_hex.png", cards(inAge.filter(function (r) { return r.slot === "tradition" && !r.civName && !r.attr; })), false, "images/paintings/" + leaderArt + ".jpg");
      // the civilizations' own Traditions last, one section per civ (its
      // hex icon at the head of the line, the line set to the left)
      var civs = {};
      inAge.forEach(function (r) {
        if (r.slot === "tradition" && r.civName) (civs[r.civName] = civs[r.civName] || { civ: r.civ, recs: [] }).recs.push(r);
      });
      var civNames = Object.keys(civs).sort(function (a, b) { return civRank(civs[a].civ) - civRank(civs[b].civ) || a.localeCompare(b); });
      body += acc("Unique Civ Traditions", "images/icons/tradition_hex.png", '<div class="acc-exclusive">' +
        civNames.map(function (c) { return acc(c, civHex(civs[c].civ), cards(civs[c].recs), true, civArt(civs[c].civ)); }).join("") + '</div>',
        false, civNames.length ? civArt(civs[civNames[0]].civ) : "");
      // the attribute Traditions of the Test of Time on the last line
      body += acc("Attribute Traditions (Test of Time)", "images/icons/attribute.png", cards(inAge.filter(function (r) { return r.slot === "tradition" && r.attr; })), false, "images/paintings/science_" + ak + ".jpg");
      var listOpen = false;
      out += '<div class="age-acc age-acc--panel' + (listOpen ? '' : ' collapsed') + '">' +
        '<div class="age-sub age-acc-head age-acc-head--panel" role="button" tabindex="0" aria-expanded="' + (listOpen ? 'true' : 'false') + '">' +
          '<img class="age-card-btn" src="images/ui/age-card-' + age.toLowerCase() + '.png" alt="' + attrEscape(age + " Age") + '">' +
          '<img class="age-strip-label" src="images/ui/age-label-' + age.toLowerCase() + '.png" alt=""></div>' +
        '<div class="age-acc-body"><div class="age-acc-inner acc-exclusive">' + body + '</div></div></div>';   // one group open at a time
    });
    return '<div class="wonder-effects pol-list-body acc-exclusive">' + out + '</div>';
  }

  // Every Memento as its card, in the Policy card list's strips: the
  // Foundation mementos every leader shares, then each leader's own
  // (the game gives mementos no Age)
  function renderMementoListBody() {
    function acc(head, icon, bodyHtml, sub, art) {
      if (!bodyHtml) return "";
      return '<div class="age-acc card-cat collapsed' + (sub ? ' card-cat--sub' : '') + '">' +
        '<div class="age-acc-head unit-cat-head card-cat-head" role="button" tabindex="0" aria-expanded="false">' +
          '<span class="unit-cat-art" aria-hidden="true"' + (art ? ' style="background-image:url(&quot;' + attrEscape(art) + '&quot;)"' : '') + '></span>' +
          (icon ? '<span class="unit-cat-disc unit-cat-disc--framed"><img src="' + attrEscape(icon) + '" alt="" onerror="this.remove()"></span>' : '') +
          '<span class="unit-cat-label">' + escapeHtml(head) + '</span></div>' +
        '<div class="age-acc-body"><div class="age-acc-inner">' + bodyHtml + '</div></div></div>';
    }
    var names = Object.keys(MEMENTOS);
    var foundation = names.filter(function (n) { return MEMENTOS[n].path === "Foundation"; })
      .sort(function (a, b) { return (MEMENTOS[a].level || 0) - (MEMENTOS[b].level || 0); });
    var leaders = LEADER_CATALOG.filter(function (l) {
      return hasItems((LEADER_EXTRAS[l.id] || {}).mementos || l.mementos);
    }).slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    var out = acc("Foundation Mementos", "images/mementos/lydian_lion.png", mementoCardsHtml(foundation), false,
      "images/paintings/economic_antiquity.jpg");
    out += acc("Leader Mementos", "images/mementos/the_rihla.png", '<div class="acc-exclusive">' +
      leaders.map(function (l) {
        return acc(l.name, l.portrait || "", mementoCardsHtml((LEADER_EXTRAS[l.id] || {}).mementos || l.mementos), true,
          (PAINTINGS.pages || {})[l.id] || (l.id === "LEADER_AUGUSTUS" ? "images/paintings/rome.jpg" : ""));
      }).join("") + '</div>', false, (PAINTINGS.pages || {})[(leaders[0] || {}).id] || "");
    return '<div class="wonder-effects pol-list-body mem-list-body acc-exclusive">' + out + '</div>';
  }

  function techCardBoxes(n) {
    var html = "";
    var main = techVisibleUnlocks(n, false), mastery = techVisibleUnlocks(n, true);
    // the unique pip (the tree's, at 34px) sits at the right end of the
    // first box's heading line
    var uq = techUniques(n, "all");
    // a civilization's own Test of Time civic (Bulgarian Origins, Meiji
    // Renaissance, Chola Modernization) unlocks that civ's own things and
    // nothing another civ would count as unique: its page wears no pip
    if (/_(ORIGINS|RENAISSANCE|MODERNIZATION)$/.test(n.id || "")) uq = [];
    var civs = {};
    uq.forEach(function (u) { civs[u.civ] = 1; });
    var count = Object.keys(civs).length;
    var pip = count ? '<span class="tt-pip tt-pip--unique tech-uq-pip" data-node-id="' + attrEscape(n.id) +
      '" role="button" tabindex="0" title="' +
      attrEscape(count + " civilization" + (count > 1 ? "s" : "") + " unlock something of their own here") + '">' +
      '<span class="tt-uq-count">' + count + '</span></span>' : "";
    function box(head, rows) {
      var h = '<div class="entry-section wonder-stats"><div class="unit-req-head' + (pip ? ' tech-box-head' : '') + '">' +
        escapeHtml(head) + pip + '</div><div class="wonder-formed tech-rows">' + rows.map(techUnlockRowHtml).join("") + '</div></div>';
      pip = "";                                    // the first box only
      return h;
    }
    if (main.length) html += box("Unlocks", main);
    // a Test of Time civic the tree data leaves empty (a DLC civ's Origins,
    // the Attribute civics): its unlocks from the game's tables, grouped
    // by who receives them
    var extraGroups = !main.length && !mastery.length ? (window.CIVPEDIA_CIVIC_PAGE_UNLOCKS || {})[n.id] : null;
    if (extraGroups && extraGroups.length) {
      var rowsHtml = extraGroups.map(function (g) {
        return (g.label ? '<div class="unit-req-head civ-ability-cap civic-unlock-group">' + escapeHtml(g.label) + '</div>' : '') +
          g.rows.map(techUnlockRowHtml).join("");
      }).join("");
      html += '<div class="entry-section wonder-stats"><div class="unit-req-head' + (pip ? ' tech-box-head' : '') + '">Unlocks' + pip +
        '</div><div class="wonder-formed tech-rows">' + rowsHtml + '</div></div>';
      pip = "";
    }
    if (mastery.length) html += box("Mastery", mastery);
    if (pip) html += '<div class="entry-section wonder-stats"><div class="unit-req-head tech-box-head">Civilizations' + pip + '</div></div>';
    return html;
  }


  // The essay under its own heading (an accordion on a phone)
  function renderTechBody(page) {
    var out = '<div class="tt-pop" hidden role="dialog" aria-label="Civilization unlocks"></div>';
    var chapters = page.chapters || [];
    var hist = chapters.filter(function (c) { return c.chapter_id === "HISTORY" || !c.chapter_id; });
    hist.forEach(function (c) {
      out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml(c));
    });
    // a civic the game writes no history for (a Test of Time civic) keeps
    // the summary its page carries, under its own heading
    // (the generated summary repeated the unlock boxes: not shown); our own
    // historical note takes its place where one is written
    if (!hist.length) {
      var note = CIVIC_HISTORY[page.id];
      if (note) out += chapterSectionHtml("HISTORICAL CONTEXT", chapterBodyHtml({ paragraphs: [].concat(note) }));
    }
    return out;
  }

  function governmentStats(page, groupTitle) {
    var m = /^(Antiquity|Exploration|Modern)/.exec(groupTitle || "");
    var age = m ? m[1].toUpperCase() : "";
    return (GOVERNMENT_STATS[age] || {})[page.id] || null;
  }

  // A Government page's boxes: its standing bonus, its celebration and the
  // options it offers, the Traditions it opens on the civics tree
  function governmentCardBoxes(g) {
    var html = "";
    if (g.ability) {
      html += wonderStatBox("Ability", '<div class="wonder-effects">' + statText(g.ability, true) + '</div>');
    }
    if (g.celebrations && g.celebrations.length) {
      html += wonderStatBox("Celebration",
        (g.celebrationName ? '<div class="gov-celebration-name">' + renderInlineIcon("CELEBRATION") + ' ' + escapeHtml(g.celebrationName) + '</div>' : '') +
        '<div class="gov-note">Choose one of these effects when it begins:</div>' +
        '<div class="wonder-effects"><ul>' + g.celebrations.map(function (o) {
          return '<li>' + statText(o.text, false) + '</li>';      // one option, one line
        }).join("") + '</ul></div>');
    }
    if (g.traditions && g.traditions.length) {
      // the Traditions as the game's cards, the ones the card list shows
      html += wonderStatBox("Traditions", '<div class="trad-cards pol-list gov-trad-cards">' + g.traditions.map(function (t) {
        var rec = (POLICIES.byName || {})[t.name] ||
          { name: t.name, text: t.text, slot: "tradition", unlockedBy: t.civic ? [{ civic: t.civic, icon: t.civicIcon }] : [] };
        return policyCardHtml(rec, true);
      }).join("") + '</div>');
    }
    return html;
  }

  // the Policies concept pages wear the badges, which open the card lists
  var CONCEPT_MEDIA = {
    POLICIES_1: { portrait: "images/icons/policy_round.png", portraitAlt: "Social Policies", link: "CARD_LIST", linkTitle: "Every policy and tradition card" },
    POLICIES_2: { portrait: "images/icons/tradition_hex.png", portraitAlt: "Traditions", link: "CARD_LIST", linkTitle: "Every policy and tradition card" },
    MEMENTOS: { portrait: "images/mementos/lydian_lion.png", portraitAlt: "Lydian Lion", link: "MEMENTO_LIST", linkTitle: "Every memento card" }
  };

  function renderEntryCard(page, groupTitle, sectionId) {
    var chapters = page.chapters || [];
    var media = MEDIA[page.id] || {};
    var chapterTitles = chapters.map(function (chapter) {
      return chapter.title;
    }).filter(Boolean).slice(0, 5);

    if (!chapterTitles.length && chapters.length) {
      chapterTitles = ["Content"];
    }

    if (sectionId === "UNITS" && UNIT_STATS[page.id]) {
      return renderUnitAside(page);
    }

    var resMeta = sectionId === "MAP" ? RESOURCE_META[page.id] : null;
    if (resMeta) {
      // Resource: the wiki icon (already framed) + a type sub-label, in one
      // box — like a leader's portrait + name. No Details / Topics.
      var classIcon = resourceClassIcon(resMeta.typeLabel, resMeta.type);
      return '<aside class="entry-card entry-card--emblem-only entry-card--tech entry-card--resource" aria-label="Entry details">' +
        '<div class="entry-emblem entry-emblem-photo entry-emblem-photo--contained resource-emblem">' +
          (media.portrait
            ? '<img class="entry-portrait resource-icon" src="' + attrEscape(media.portrait) +
              '" alt="' + attrEscape(media.portraitAlt || page.title) + '">'
            : svgIcon(TAB_ICONS[sectionId])) +
          // the name under the art in the civilization cards' lettering (no page header)
          '<span class="wonder-emblem-name">' + escapeHtml(page.title) + '</span>' +
          '<div class="resource-type">' + classIcon +
            '<span>' + escapeHtml(resMeta.typeLabel || "Resource") + '</span></div>' +
        '</div>' +
        // Yields / Effects in a box of their own, a Cost row's height below the art
        (resMeta.ages && resMeta.ages.length ? '<div class="resource-stats-box">' + resourceStatBoxes(resMeta) + '</div>' : "") +
        '</aside>';
    }

    // A Belief page's card is the belief itself: its own artwork over its own
    // effect text. Section/Group/Chapters and the "Content" topic tag say
    // nothing the sidebar does not already show, so they are dropped here.
    if (sectionId === "RELIGION") {
      // Each of the 18 Pantheons has its own artwork; the 42 Exploration
      // Beliefs share one icon per class -- that is the game's own art, not a
      // gap (religion-icons.xml points every belief at rel_bel_<class>).
      var beliefKind = beliefGroupKind(groupTitle);
      var beliefArt = beliefKind === "pantheon"
        ? "images/beliefs/" + String(page.id).toLowerCase() + ".png"
        // The *_sym cut-out, not the framed original: the card draws the disc
        // and the gold ring itself, and the artwork's own dark plate showed
        // through as a grey circle inside them.
        : "images/beliefs/class_" + beliefKind + "_sym.png";
      // Same auto-linker chain the Units section runs over its attribute
      // bullets, so a Belief's "Settlements" / "Units" / "Growth Rate" pick up
      // the icon + infotip the game text left off. linkifyStructures runs last, on
      // the finished HTML, so its own link survives the icon passes.
      // one bullet per sentence of the effect text
      var beliefItems = [];
      chapters.forEach(function (c) {
        (c.paragraphs || []).forEach(function (para) {
          String(para).split(/\.\s+(?=[A-Z\[+\-\d])/).forEach(function (s) {
            s = s.trim();
            if (!s) return;
            if (!/[.!?)%]$/.test(s)) s += ".";
            beliefItems.push(s);
          });
        });
      });
      var beliefBody = beliefItems.length ? '<ul>' + beliefItems.map(function (s) {
        return "<li>" + linkifyStructures(collapseAdjacentIcons(groupIconWords(
          linkifyCivNames(linkifyUnitNames(linkifyGpNames(linkifyCodex(linkifyActions(
            richText(linkifyUnitConcepts(s))
          )))))))) + "</li>";
      }).join("") + '</ul>' : "";
      // the game's own belief card: the artwork in its disc on the left, the
      // name and the effect beside it, all in one bordered card
      return '<aside class="entry-card belief-card belief-card--game" aria-label="Entry details">' +
        '<span class="belief-game-disc"><span class="belief-card-disc' +
          (beliefKind === "pantheon" ? " belief-card-disc--inscribed" : "") + '">' +
          '<img class="entry-portrait" src="' + attrEscape(beliefArt) + '" alt=""></span></span>' +
        '<div class="belief-game-text">' +
          '<h3 class="belief-game-name">' + escapeHtml(page.title) + '</h3>' +
          (beliefBody ? '<div class="belief-bonus">' + beliefBody + '</div>' : '') +
        '</div>' +
        '</aside>';
    }

    if (sectionId === "CONCEPTS" && CONCEPT_MEDIA[page.id]) media = CONCEPT_MEDIA[page.id];
    // the Attribute civics of the Test of Time have no art of their own: the
    // game's Attribute emblem stands in for it
    if (sectionId === "CULTURE" && !media.portrait && /_(FOUNDATION|HIERARCHY|ADMINISTRATION)$/.test(page.id)) {
      media = Object.assign({}, media, { portrait: "images/icons/attribute.png" });
    }
    var mapPhoto = sectionId === "MAP" && media.portrait;   // Natural Wonders
    var html = '<aside class="entry-card' + (mapPhoto ? ' entry-card--emblem-only entry-card--tech entry-card--resource entry-card--nw' : '') +
      (sectionId === "TECHNOLOGIES" || sectionId === "CULTURE" || sectionId === "WONDERS" ? ' entry-card--tech' : '') +
      (sectionId === "WONDERS" ? ' entry-card--wonder' : '') + '" aria-label="Entry details">';
    if (mapPhoto) {
      html += '<div class="entry-emblem entry-emblem-photo entry-emblem-photo--contained">' +
        '<span class="nw-frame"><img class="entry-portrait" src="' + attrEscape(media.portrait) +
        '" alt="' + attrEscape(media.portraitAlt || page.title) + '"></span>' +
        '<span class="wonder-emblem-name">' + escapeHtml(page.title) + '</span></div>';
    } else if (media.portrait) {
      // An Improvement's art is the game's own diamond plaque -- it carries its
      // frame already, so it is shown plain rather than in one of ours.
      // A Technology's art is the game's own disc (glow and all), shown
      // large and plain, as the game's Civilopedia shows it.
      html += '<div class="entry-emblem entry-emblem-photo' +
        // a Wonder's art at the Improvement plaque's size, its name under it
        // in the civilization cards' lettering (the page has no header)
        (sectionId === "WONDERS" ? ' improvement-emblem wonder-emblem' : '') +
        (sectionId === "IMPROVEMENTS" || sectionId === "BUILDINGS" ? ' improvement-emblem' : '') +
        (sectionId === "IMPROVEMENTS" || sectionId === "BUILDINGS" ? ' wonder-emblem' : '') +
        (sectionId === "TECHNOLOGIES" || sectionId === "CULTURE" || sectionId === "GOVERNMENT" || media.link ? ' tech-emblem' : '') +
        (sectionId === "TECHNOLOGIES" || sectionId === "CULTURE" ? ' tech-emblem--named' : '') +
        (media.link ? ' entry-emblem--link civ-unique-head--link" data-page-id="' + attrEscape(media.link) + '" title="' + attrEscape(media.linkTitle || "") : '') +
        '"><img class="entry-portrait" src="' + attrEscape(media.portrait) + '" alt="' + attrEscape(media.portraitAlt || page.title) + '">' +
        // a Technology / Civic writes its name under its disc the same way
        (sectionId === "WONDERS" || sectionId === "TECHNOLOGIES" || sectionId === "CULTURE" || sectionId === "IMPROVEMENTS" || sectionId === "BUILDINGS"
          ? '<span class="wonder-emblem-name">' + escapeHtml(page.title) + '</span>' : '') +
        // (a Building's cost is set in this box's bottom-right corner, below)
        (sectionId === "BUILDINGS" ? '<!--emblem-corner-->' : '') + '</div>';
    } else if (sectionId === "GOVERNMENT") {
      // the game has no art per government; its Government emblem stands
      // set like a civilization's card: the glyph on the black plate, the name
      // under it in the cards' lettering -- no ring, no frame, no flourish
      html += '<div class="entry-emblem entry-emblem-photo tech-card-emblem gov-card-emblem">' +
        '<div class="tech-card">' +
          // (a crisp redraw of the game's 88px glyph: tools/draw_government_icon.py)
          '<img class="gov-card-glyph" src="images/icons/government-hd.png" alt="">' +
          '<span class="tech-card-name">' + escapeHtml(page.title) + '</span></div></div>';
    } else {
      html += '<div class="entry-emblem">' + svgIcon(TAB_ICONS[sectionId]) + "</div>";
    }
    if (media.quote) {
      html += '<div class="leader-quote">' +
        '<div class="ornament"><span class="ornament-line"></span><span class="ornament-gem"></span><span class="ornament-line"></span></div>' +
        '<p class="leader-quote-text">&ldquo;' + escapeHtml(media.quote) + '&rdquo;</p>' +
        (media.quoteAuthor ? '<p class="leader-quote-name">' + escapeHtml(media.quoteAuthor) + '</p>' : '') +
        '</div>';
    }

    // Natural Wonders: the (small, framed) photo and its Yields / Effects
    // boxes -- no Details / Topics.
    if (mapPhoto) {
      var nwBoxes = naturalWonderStatBoxes(page.id);
      return html + (nwBoxes ? '<div class="resource-stats-box">' + nwBoxes + '</div>' : '') + "</aside>";
    }

    // An Improvement reads exactly like a Wonder: what unlocks it, what it
    // costs, what it does, and where it may go. Order differs by one step --
    // an Improvement's placement rule is an exception note, so it follows the
    // effects rather than leading them.
    var iStats = sectionId === "IMPROVEMENTS" ? IMPROVEMENT_STATS[page.id]
      : sectionId === "BUILDINGS" ? BUILDING_STATS[page.id] : null;
    if (iStats) {
      // an Improvement: its art is one box, Cost / Effects / ... a second one
      // 22px under it, on the Historical Context boxes' ground
      // (a Building the same, its Cost written in the art box's bottom-right corner)
      var iSplit = sectionId === "IMPROVEMENTS" || sectionId === "BUILDINGS";
      var costInCorner = sectionId === "BUILDINGS";
      iStats = Object.assign({}, iStats, { cost: "" });     // (a cost is shown on Unit pages only)
      if (costInCorner) {
        html = html.replace("<!--emblem-corner-->", iStats.cost
          ? '<span class="unit-cost emblem-cost"><span class="unit-cost-lbl">Cost</span>' + renderInlineIcon("YIELD_PRODUCTION") +
            '<span class="unit-cost-val">' + escapeHtml(String(iStats.cost)) + '</span></span>'
          : "");
        if (iStats.cost) html = html.replace("improvement-emblem wonder-emblem", "improvement-emblem wonder-emblem emblem--cornered");
      }
      if (iSplit) {
        html = html.replace('<aside class="entry-card', '<aside class="entry-card entry-card--tech entry-card--resource');
        html += '<div class="resource-stats-box">';
      }
      var iUnlock = iStats.unlockedBy
        ? { name: iStats.unlockedBy, icon: iStats.unlockIcon || "" }
        : null;
      // A Unique Quarter is not "unlocked" by one thing -- it is formed by two
      // named Buildings, so each gets its own row with its own artwork, the way
      // a Tech or a Civic leads the Unlocked By row.
      var formedBy = (iStats.kind === "quarter" && iStats.formedBy &&
        iStats.formedBy.length ? iStats.formedBy : null);
      // a Unique Quarter's "Formed By" pair is already spelled out in its
      // Effects ("Created by constructing the Odeon and Parthenon"), so the
      // card skips the block
      if ((iUnlock || (iStats.cost && !costInCorner)) && iStats.kind !== "quarter") {
        html += '<div class="wonder-unlock">' +
          (iUnlock ? '<div class="unit-req-head">' +
            (iStats.kind === "quarter" ? 'Formed By' : 'Unlocked By') + '</div>' : '');
        if (formedBy) {
          // The two rows are centred as a block, not each on its own, so the
          // artwork lines up in one column however long the names are.
          html += '<div class="wonder-formed">' + formedBy.map(function (name) {
            var src = portraitByTitle(name) || iStats.unlockIcon || "";
            return '<div class="wonder-unlock-row">' +
              (src ? '<img class="unit-req-ico" src="' + attrEscape(src) +
                '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">' : '') +
              reqNameInner(name) + '</span></div>';
          }).join("") + '</div>';
        } else {
          html += '<div class="wonder-unlock-row">' +
            (iUnlock
              ? (iUnlock.icon
                  ? '<img class="unit-req-ico" src="' + attrEscape(iUnlock.icon) +
                    '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
                  : '') +
                // A City-State unlock is a description ("Cultural City-State
                // Suzerainty"), not the name of a page you can look up, so it
                // drops the brass that marks a real name.
                (iStats.kind === "citystate" || iStats.kind === "quarter"
                  ? '<span class="unit-req-name unit-req-name--plain">' + escapeHtml(iUnlock.name)
                  : reqNameInner(iUnlock.name)) + '</span>'
              : '') +
            (iStats.cost && !costInCorner
              // with no unlock beside it the cost is labelled, and needs no divider
              ? '<span class="unit-cost wonder-cost' + (iUnlock ? '' : ' wonder-cost--solo') + '">' +
                '<span class="unit-cost-lbl">Cost</span>' + renderInlineIcon("YIELD_PRODUCTION") +
                '<span class="unit-cost-val">' + escapeHtml(String(iStats.cost)) + '</span></span>'
              : '') +
            '</div>';
        }
        html += '</div>';
      }
      // The same two Buildings are named again in the Quarter's own text
      // ("Created by constructing the Basilica and Temple of Jupiter"), where
      // the generic Temple glyph used to stand in for the Temple of Jupiter.
      function withBuildingIcons(markup) {
        var m = String(markup || "");
        (formedBy || []).slice().sort(function (a, b) {
          return b.length - a.length;
        }).forEach(function (name) {
          var token = namedBuildingIcon(name);
          if (!token) return;
          // \b is ASCII-only: after the "ō" of "Ginkō" it sees two non-word
          // characters and refuses to match, so the boundaries are spelled out
          // with the accented ranges included.
          var re = new RegExp("(^|[^" + NAME_WORD + "])(" +
            name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![" + NAME_WORD + "])", "g");
          m = m.replace(re, function (whole, pre, hit, offset, src) {
            var before = src.slice(Math.max(0, offset - 48), offset + pre.length);
            if (/\[icon:[A-Za-z0-9_]+\]\s*$/.test(before)) return whole;
            return pre + "[icon:" + token + "] " + hit;
          });
        });
        return m;
      }
      if (iStats.effects) {
        html += wonderStatBox("Effects",
          '<div class="wonder-effects">' + statText(withBuildingIcons(iStats.effects), true) +
          '</div>');
      }
      // Adjacency and Warehouse are read straight out of the game's own
      // Constructible_Adjacencies / _WarehouseYields tables -- the authored
      // description only ever summarises them, and often not at all.
      if (iStats.adjacency) {
        html += wonderStatBox("Adjacency",
          '<div class="wonder-effects">' + statText(iStats.adjacency, true) + '</div>');
      }
      if (iStats.warehouse) {
        html += wonderStatBox("Warehouse Bonus",
          '<div class="wonder-effects">' + statText(iStats.warehouse, true) + '</div>');
      }
      if (iStats.placement) {
        html += wonderStatBox("Placement",
          '<div class="wonder-placement">' + statText(iStats.placement, false) + '</div>');
      }
      if (iStats.maintenance) {
        html += wonderStatBox("Maintenance",
          '<div class="wonder-placement">' + statText(iStats.maintenance, false) +
          ' per turn</div>');
      }
      return html + (iSplit ? "</div>" : "") + "</aside>";
    }

    var tNode = sectionId === "TECHNOLOGIES" || sectionId === "CULTURE" ? techNode(page.id) : null;
    if (tNode) {
      var tBoxes = techCardBoxes(tNode);
      if (!tBoxes) return html + "</aside>";
      html = html.replace(/^(<aside class="entry-card)([^>]*>)/, '$1 entry-card--split$2<div class="entry-card-top">');
      return html + '</div><div class="resource-stats-box">' + tBoxes + "</div></aside>";
    }
    if (sectionId === "CULTURE") {
      // a Test of Time civic: no tree node, so the card is its art and quote
      return html + "</aside>";
    }
    var gov = sectionId === "GOVERNMENT" ? governmentStats(page, groupTitle) : null;
    if (gov) {
      // its Ability / Celebration in a box of their own, 22px under the emblem
      html = html.replace('<aside class="entry-card', '<aside class="entry-card entry-card--tech entry-card--resource');
      return html + '<div class="resource-stats-box">' + governmentCardBoxes(gov) + "</div></aside>";
    }

    var wStats = WONDER_STATS[page.id];
    if (wStats) {
      // Same furniture as a unit page, below the quote: the unlock as an
      // icon + name requirement block, the build cost as the cost chip.
      var wUnlock = unlockRef(wStats.unlockedBy);
      html = html.replace(/^(<aside class="entry-card)([^>]*>)/, '$1 entry-card--split$2<div class="entry-card-top">') +
        '</div><div class="resource-stats-box">';
      if (wUnlock) {
        html += '<div class="wonder-unlock">' +
          (wUnlock ? '<div class="unit-req-head">Unlocked By</div>' : '') +
          '<div class="wonder-unlock-row">' +
            (wUnlock
              ? (wUnlock.icon
                  ? '<img class="unit-req-ico" src="' + attrEscape(wUnlock.icon) +
                    '" alt="" onerror="this.classList.add(&quot;noimg&quot;)">'
                  : '') +
                reqNameInner(wUnlock.name) + '</span>'
              : '') +
          '</div></div>';
      }
      if (wStats.placement) {
        html += wonderStatBox("Placement",
          '<div class="wonder-placement">' + statText(wStats.placement, false) + '</div>');
      }
      if (wStats.effects) {
        // Same box as Placement, but the bullet list keeps its own shape.
        html += wonderStatBox("Effects",
          '<div class="wonder-effects">' + statText(wStats.effects, true) + '</div>');
      }
      return html + "</div></aside>";
    }

    html += '<div class="entry-section"><h4>Details</h4>';
    html += '<div class="entry-row"><span>Section</span><strong>' + escapeHtml(sectionLabel(sectionId)) + "</strong></div>";
    if (groupTitle) {
      html += '<div class="entry-row"><span>Group</span><strong>' + escapeHtml(groupTitle) + "</strong></div>";
    }
    html += '<div class="entry-row"><span>Chapters</span><strong>' + chapters.length + "</strong></div>";
    html += "</div>";

    if (chapterTitles.length) {
      html += '<div class="entry-section"><h4>Topics</h4><div class="entry-tags">';
      chapterTitles.forEach(function (title) {
        html += '<span class="entry-tag">' + escapeHtml(title) + "</span>";
      });
      html += "</div></div>";
    if (media.gallery && media.gallery.length) {
      html += '<div class="entry-section"><h4>Gallery</h4><div class="entry-gallery">';
      media.gallery.forEach(function (item) {
        html += '<button class="entry-gallery-item" type="button" data-gallery-src="' + attrEscape(item.src) + '" data-gallery-alt="' + attrEscape(item.label || page.title) + '"><img src="' + attrEscape(item.src) + '" alt="' + attrEscape(item.label || page.title) + '"><span>' + escapeHtml(item.label || 'Image') + '</span></button>';
      });
      html += '</div></div>';
    }
    }

    html += "</aside>";
    return html;
  }

  function runSearch(query) {
    var q = query.trim().toLowerCase();
    if (!q) {
      renderSidebar();
      return;
    }

    // title matches first (an exact title, then a title starting with the
    // query, then a title containing it), the text-only matches after --
    // so "Han" lists Han before the 80 pages that merely mention it
    function rank(entry) {
      var t = (entry.page.title || "").toLowerCase();
      return t === q ? 0 : t.indexOf(q) === 0 ? 1 : t.indexOf(q) !== -1 ? 2 : 3;
    }
    var matches = flatPages.filter(function (entry) {
      return entry.searchText.indexOf(q) !== -1;
    }).map(function (entry, i) { return { e: entry, r: rank(entry), i: i }; })
      .sort(function (a, b) { return a.r - b.r || a.i - b.i; })
      .map(function (x) { return x.e; })
      .slice(0, 80);

    sidebarEl.innerHTML = "";
    var label = document.createElement("div");
    label.className = "search-results-label";
    label.textContent = matches.length + " result" + (matches.length === 1 ? "" : "s");
    sidebarEl.appendChild(label);

    if (!matches.length) {
      var none = document.createElement("div");
      none.className = "no-results";
      none.textContent = "No results found.";
      sidebarEl.appendChild(none);
      return;
    }

    matches.forEach(function (entry) {
      var item = document.createElement("div");
      item.className = "page-item";
      item.dataset.pageId = entry.page.id;
      item.innerHTML = escapeHtml(entry.page.title) +
        ' <span class="result-meta">- ' + escapeHtml(entry.groupTitle || sectionLabel(entry.sectionId)) + "</span>";
      item.addEventListener("click", function () {
        currentSectionId = entry.sectionId;
        updateTabbarActive();
        navigateToPage(entry.page, entry.groupTitle, entry.sectionId);
      });
      sidebarEl.appendChild(item);
    });

    syncActiveSidebarItem();
  }

  function sectionLabel(sectionId) {
    return (SECTIONS[sectionId] && SECTIONS[sectionId].section) || sectionId;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function attrEscape(value) {
    return escapeHtml(value).replace(/"/g, "&quot;");
  }

  function stripMarkup(raw) {
    return String(raw || "")
      .replace(/\[NN\]/g, " ")
      .replace(/\[BLIST\]|\[\/BLIST\]|\[\/LIST\]|\[LI\]/g, " ")
      .replace(/\[\/?[Bb]\]/g, "")
      .replace(/\[icon:[^\]]+\]/g, "")
      .replace(/\[TIP:[^\]]+\]/g, "")
      .replace(/\[\/TIP\]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Ordered longest-first so "Combat Strength" wins over "Strength", "Cities" over "City", etc.
  var CONCEPT_TOKENS = [
    ["Combat Strength", "NAR_REW_COMBAT"],
    ["Resource Capacity", "RADIAL_RESOURCES"],
    ["Command Radius", "COMMANDER_RADIUS"],
    ["Civic Masteries", "CIVICS"],
    ["Civic Mastery", "CIVICS"],
    ["Technology Masteries", "RADIAL_TECH"],
    ["Technology Mastery", "RADIAL_TECH"],
    ["Masteries", "RADIAL_TECH"],
    ["Mastery", "RADIAL_TECH"],
    ["Natural Wonders", "NOTIFICATION_DISCOVER_NATURAL_WONDER"],
    ["Natural Wonder", "NOTIFICATION_DISCOVER_NATURAL_WONDER"],
    ["Trade Routes", "TRADE_ROUTE"],
    ["Trade Route", "TRADE_ROUTE"],
    ["War Support", "WAR_SUPPORT"],
    ["Diplomatic Actions", "DIPLOMATIC_ACTION"],
    ["Diplomatic Action", "DIPLOMATIC_ACTION"],
    ["Great Works", "GREATWORK"],
    ["Great Work", "GREATWORK"],
    ["Army Commanders", "UNIT_ARMY_COMMANDER"],
    ["Army Commander", "UNIT_ARMY_COMMANDER"],
    ["Fleet Commanders", "UNIT_FLEET_COMMANDER"],
    ["Fleet Commander", "UNIT_FLEET_COMMANDER"],
    ["Aerodrome Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Aerodrome Commander", "UNIT_AERODROME_COMMANDER"],
    ["Aircraft Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Aircraft Commander", "UNIT_AERODROME_COMMANDER"],
    ["Squadron Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Squadron Commander", "UNIT_AERODROME_COMMANDER"],
    ["Air Commanders", "UNIT_AERODROME_COMMANDER"],
    ["Air Commander", "UNIT_AERODROME_COMMANDER"],
    ["Commanders", "UNIT_ARMY_COMMANDER"],
    ["Commander", "UNIT_ARMY_COMMANDER"],
    ["Treasure Fleets", "UNIT_TREASURE_FLEET"],
    ["Treasure Fleet", "UNIT_TREASURE_FLEET"],
    ["Independent Powers", "INDEPENDENT_POWER"],
    ["Independent Power", "INDEPENDENT_POWER"],
    ["City-States", "CITYSTATE"],
    ["City-State", "CITYSTATE"],
    ["Social Policies", "SOCIAL_POLICY"],
    ["Social Policy", "SOCIAL_POLICY"],
    ["Settlement Limit", "SETTLEMENT_LIMIT"],
    ["Fortifications", "CITY_FORTIFIED"],
    ["Fortification", "CITY_FORTIFIED"],
    ["Fortified", "CITY_FORTIFIED"],
    ["Celebrations", "CELEBRATION"],
    ["Celebration", "CELEBRATION"],
    ["Endeavors", "ENDEAVOR"],
    ["Endeavor", "ENDEAVOR"],
    ["Espionage", "ESPIONAGE"],
    ["Sanctions", "SANCTIONS"],
    ["Sanction", "SANCTIONS"],
    ["Traditions", "TRADITION"],
    ["Tradition", "TRADITION"],
    ["Governments", "GOVERNMENT"],
    ["Government", "GOVERNMENT"],
    ["Buildings", "CITY_BUILDING_LIST"],
    ["Building", "CITY_BUILDING_LIST"],
    ["Migrants", "UNIT_MIGRANT"],
    ["Migrant", "UNIT_MIGRANT"],
    ["Movement", "ACTION_MOVE"],
    ["Wildcard", "ATTRIBUTE_WILDCARD"],
    // (the game never puts a glyph on a bare "Settlement": no Settler icon here)
    ["Specialists", "SPECIALIST"],
    ["Specialist", "SPECIALIST"],
    ["Resources", "RADIAL_RESOURCES"],
    ["Resource", "RADIAL_RESOURCES"],
    ["Production", "YIELD_PRODUCTION"],
    ["Happiness", "YIELD_HAPPINESS"],
    ["Influence", "YIELD_DIPLOMACY"],
    ["Diplomacy", "YIELD_DIPLOMACY"],
    ["Science", "YIELD_SCIENCE"],
    ["Culture", "YIELD_CULTURE"],
    ["Wonders", "WONDER"],
    ["Wonder", "WONDER"],
    ["Holy Cities", "NAR_REW_RELIGION"],
    ["Holy City", "NAR_REW_RELIGION"],
    ["Cities", "YIELD_CITIES"],
    ["Towns", "YIELD_TOWNS"],
    ["Town", "YIELD_TOWNS"],
    ["City", "YIELD_CITIES"],
    ["Food", "YIELD_FOOD"],
    ["Gold", "YIELD_GOLD"],
    ["Wars", "WAR"],
    ["War", "WAR"],
    ["Growth", "GROWTH_RATE"]
    // "Unit(s)" is intentionally NOT linkified: Civ VII has no standalone unit
    // icon, so "Cavalry Units" etc. used to wrongly pick up the Combat Strength
    // sword. Where the game wants a unit glyph it writes an explicit [icon:...].
    // Terrain/biome words are likewise skipped (no small terrain icons exist).
  ];

  // Prefixes one icon before the first mention of each known concept. Only used on
  // plain (markup-free) catalog text; text that already carries [icon:...] is left alone.
  // Same job as UNIT_ICON_GUARD, but for the icons linkifyConcepts writes, which
  // sit flush against their word ("[icon:X]Natural") instead of space-separated.
  var CONCEPT_ICON_GUARD = /\[icon:[A-Za-z0-9_]+\](?:\s*(?!and\b|or\b)[A-Za-z][\w'’-]*){0,2}[\s.;:()'’-]*$/;

  function linkifyConcepts(raw) {
    var text = String(raw == null ? "" : raw);
    if (text.indexOf("[icon:") !== -1) return text;
    CONCEPT_TOKENS.forEach(function (pair) {
      var re = new RegExp("\\b(" + pair[0].replace(/ /g, "\\s+") + ")\\b", "g");
      var done = false;
      text = text.replace(re, function (match, _w, offset) {
        if (done) return match;
        // A compound this list already iced must not collect a second glyph in
        // the middle of itself: "[icon:NATURAL_WONDER]Natural Wonder" would
        // otherwise pick up the man-made [icon:WONDER] on its own second word,
        // and "[icon:ARMY_COMMANDER]Army Commanders" the bare "Commanders" one.
        if (CONCEPT_ICON_GUARD.test(text.slice(0, offset))) return match;
        done = true;
        return "[icon:" + pair[1] + "]" + match;
      });
    });
    return text;
  }

  // Turns a plain ability/agenda description into the same bulleted, icon-prefixed
  // list the hand-authored leaders use ([BLIST]/[LI] markup). Text that is already
  // marked up (or just "None") is passed straight through.
  function bulletizeEffects(raw) {
    var text = String(raw == null ? "" : raw).trim();
    if (!text || text === "None") return text || "None";
    if (text.indexOf("[BLIST]") !== -1 || text.indexOf("[LI]") !== -1) return text;

    var clauses;
    if (/\n/.test(text)) {
      clauses = text.split(/\s*\n+\s*/);
    } else {
      clauses = text.split(/(?:\.|;)\s+/);
    }

    clauses = clauses
      .map(function (chunk) {
        chunk = chunk.trim().replace(/^[•\-\*\s]+/, "");
        if (chunk && !/[.!?)%]$/.test(chunk)) chunk += ".";
        return chunk;
      })
      .filter(function (chunk) { return chunk.length > 1; });

    if (!clauses.length) return text;

    return "[BLIST]" + clauses.map(function (chunk) {
      return "[LI]" + linkifyConcepts(chunk);
    }).join("") + "[/BLIST]";
  }

  // Game icon tokens that have no dedicated PNG in the app — reuse a close one.
  var ICON_ALIASES = {
    TRADE_INCOME: "trade_route.png",
    TRADE_YIELD: "trade_route.png",
    TRADE_EFFICIENCY: "trade_route.png",
    TREASURE_FLEET: "../units/treasure_convoy.png",
    UNIT_TREASURE_FLEET: "../units/treasure_convoy.png",
    TOWN_FOCUS: "yield_towns.png",
    TECHS: "radial_tech.png",
    TECH: "radial_tech.png",
    ACTION_BOMBARD: "bombard_strength.png",
    ACTION_IMPROVE: "improvement.png",
    UNIT_CLASS_INFANTRY: "military.png", UNIT_CLASS_CAVALRY: "military.png",
    UNIT_CLASS_RANGED: "ranged_strength.png", UNIT_CLASS_SIEGE: "bombard_strength.png",
    UNIT_CLASS_NAVAL: "military.png", UNIT_CLASS_NAVAL_MELEE: "military.png",
    UNIT_CLASS_NAVAL_RANGED: "military.png", UNIT_CLASS_AIR: "military.png",
    UNIT_COLONIST: "../civ-uniques/colonist.png",
    UNIT_BUCCANEER: "../civ-uniques/buccaneer.png",
    UNIT_CHEVALER: "../civ-uniques/chevaler.png",
    UNIT_EXPLORER: "../units/explorer.png",
    GREAT_PERSON: "../nav-unit/great_person.png",
    TECH_FLIGHT: "../symbols/flight.png",
    CIVIC_ACHARYA: "../civics/mauryan_civics.png",
    CIVIC_MYSTICISM: "../civics/mysticism.png",
    CIVIC_PIETY: "../civics/piety.png",
    CIVIC_THEOLOGY: "../civics/theology.png",
    TECH_ARCHITECTURE: "../symbols/architecture.png",
    CIVIC_REFORMATION: "../civics/reformation.png",
    // The three civs that replace the Missionary; their unit glyphs live with
    // the other unique-unit art rather than in images/icons.
    UNIT_KAHUNA: "../civ-uniques/kahuna.png",
    UNIT_PEDANDA: "../civ-uniques/pedanda.png",
    UNIT_HOCEEPKILENI: "../civ-uniques/hoceepkileni.png",
    WONDER_HOUSE_OF_WISDOM: "../wonders/house_of_wisdom.png",
    QUARTER_PURA: "../civ-uniques/pura.png",
    // The game writes [icon:CULTURE_VP] in front of every "Tourism" it prints
    // (Tourism IS the culture victory point). All 30 uses in this app read
    // "Tourism", so the token gets the Tourism trophy rather than the Codex
    // disc culture_vp.png happened to hold.
    CULTURE_VP: "tourism.png",
    // and [icon:SCIENCE_VP] is the Innovation legacy-point trophy; its own
    // file, so the old atom disc science_vp.png (the Science Victory page
    // icon) is left to that page
    SCIENCE_VP: "innovation.png",
    // The four civs whose bullet in CIVILIZATIONS AND LEADERS names them
    // outright (linkifyCivNames only fires on the unit-page phrasings).
    CIV_MAURYA: "../civs/mauryan.png",
    CIV_HAWAII: "../civs/hawaiian.png",
    CIV_MAJAPAHIT: "../civs/majapahit.png",
    CIV_SHAWNEE: "../civs/shawnee.png",
    // The 12 nameable religions. Colour discs with a white symbol -- the
    // game's own look (its textures are CIVBIG and undecodable, so these come
    // from the wiki's copies of the same art).
    RELIGION_BUDDHISM: "../religions/buddhism.png",
    RELIGION_CATHOLICISM: "../religions/catholicism.png",
    RELIGION_CONFUCIANISM: "../religions/confucianism.png",
    RELIGION_HINDUISM: "../religions/hinduism.png",
    RELIGION_ISLAM: "../religions/islam.png",
    RELIGION_JUDAISM: "../religions/judaism.png",
    RELIGION_ORTHODOXY: "../religions/orthodoxy.png",
    RELIGION_PROTESTANTISM: "../religions/protestantism.png",
    RELIGION_SHINTO: "../religions/shinto.png",
    RELIGION_SIKHISM: "../religions/sikhism.png",
    RELIGION_TAOISM: "../religions/taoism.png",
    RELIGION_ZOROASTRIANISM: "../religions/zoroastrianism.png",
    TERRAIN_GENERIC: "terrain_generic.png",
    AKSUMITE: "../civs/aksumite.png",
    // Unit stat-panel icons (match the game's civilopedia-sidebar-panels.js).
    STAT_RANGE: "stat_range.png",
    STAT_MELEE: "stat_melee.png",
    STAT_RANGED: "stat_ranged.png",
    STAT_BOMBARD: "stat_bombard.png",
    STAT_MOVE: "stat_move.png",
    STAT_SIGHT: "stat_sight.png",
    CITY_FORTIFIED: "city_fortified.png"
  };

  function renderInlineIcon(name) {
    var key = String(name || "").toUpperCase();
    var meta = ICON_META[key] || {};
    var label = meta.label || key
      .replace(/^(YIELD|ATTRIBUTE|TERRAIN|NAR_REW|RADIAL|CITY|UNIT|ACTION|NOTIFICATION)_/, "")
      .replace(/_/g, " ")
      .toLowerCase()
      .trim();
    if (key === "TERRAIN_GENERIC") label = "Terrain";
    if (key === "TECH_FLIGHT") label = "Flight";
    if (key === "CIVIC_ACHARYA") label = "Acharya";
    if (key === "AGE_ANTIQUITY") label = "Antiquity Age";
    if (key === "AGE_EXPLORATION") label = "Exploration Age";
    if (key === "AGE_MODERN") label = "Modern Age";
    if (key === "CIVIC_MYSTICISM") label = "Mysticism";
    if (key === "CIVIC_PIETY") label = "Piety";
    if (key === "TECH_ARCHITECTURE") label = "Architecture";
    if (key === "CIVIC_THEOLOGY") label = "Theology";
    if (key === "CIVIC_REFORMATION") label = "Reformation";
    if (key === "UNIT_MISSIONARY") label = "Missionary";
    if (key === "UNIT_KAHUNA") label = "Kahuna";
    if (key === "UNIT_PEDANDA") label = "Pedanda";
    if (key === "UNIT_HOCEEPKILENI") label = "Hoceepkileni";
    if (key === "WONDER_HOUSE_OF_WISDOM") label = "House of Wisdom";
    if (key === "QUARTER_PURA") label = "Pura";
    if (key === "CULTURE_VP") label = "Tourism";
    if (key === "SCIENCE_VP") label = "Innovation";
    if (key === "CIV_MAURYA") label = "Maurya";
    if (key === "CIV_HAWAII") label = "Hawai'i";
    if (key === "CIV_MAJAPAHIT") label = "Majapahit";
    if (key === "CIV_SHAWNEE") label = "Shawnee";
    if (/^RELIGION_/.test(key)) label = key.slice(9).charAt(0) +
      key.slice(10).toLowerCase();
    if (key === "RADIAL_TECH") label = "Technology";
    // the game writes this notification icon before "Age Progress"
    if (key === "NOTIFICATION_TEAM_VICTORIOUS") label = "Age Progress";
    if (key === "GREAT_PERSON") label = "Great Person";
    if (key === "AKSUMITE") label = "Aksum";
    if (key === "IMPROVEMENT_THING") label = "Þingstaðr";
    if (key === "IMPROVEMENT_JINJA") label = "Jinja";
    if (key === "CIVICS") label = "Civic";
    if (key === "BUILDING_TEMPLE") label = "Temple";
    if (key === "BUILD_ROAD") label = "Build Road";
    if (key === "RANGED_STRENGTH") label = "Ranged Strength";
    if (key === "BOMBARD_STRENGTH") label = "Bombard Strength";
    if (key === "STAT_RANGE") label = "Range";
    if (key === "STAT_MELEE") label = "Melee Strength";
    if (key === "STAT_RANGED") label = "Ranged Strength";
    if (key === "STAT_BOMBARD") label = "Bombard Strength";
    if (key === "STAT_MOVE") label = "Move Range";
    if (key === "STAT_SIGHT") label = "Sight Range";
    if (key === "CITY_FORTIFIED") label = "Fortified District";
    if (key === "CITY_HALL") label = "City Hall";
    if (key === "CITY_URBAN") label = "District";
    if (key === "CITY_UNIQUE_QUARTER") label = "Quarter";
    if (key === "UNIT_ARMY_COMMANDER") label = "Army Commander";
    if (key === "UNIT_FLEET_COMMANDER") label = "Fleet Commander";
    if (key === "COMMANDER_RADIUS") label = "Command Radius";
    if (["PALACE", "ACADEMY", "LIBRARY", "OBSERVATORY", "MENAGERIE", "HOSPITAL", "TEMPLE", "ALTAR"].indexOf(key) !== -1) {
      label = key.charAt(0) + key.slice(1).toLowerCase();
    }
    if (key === "MILITARY") label = "Units";
    if (key === "DIPLOMACY") label = "Open Borders";
    if (key === "TERRAIN_NATURAL_WONDER") label = "Natural Wonder";
    if (key === "CITY_BUILDING_LIST") label = "Building";
    if (key === "IMPROVEMENT") label = "Improvement";
    if (key === "UNIT_TRADE_CARAVAN") label = "Trade Caravan";
    if (key === "UNIT_TRADE_SHIP") label = "Trade Ship";
    if (key === "ACTION_HEAL") label = "Heal";
    if (key.indexOf("RESOURCECLASS_") === 0) {
      label = key.slice(14).charAt(0) + key.slice(15).toLowerCase() + " Resource";
    }
    if (!label) label = "icon";
    var symbol = meta.symbol || label.charAt(0).toUpperCase();
    var kind = meta.kind || "generic";
    var file = meta.img || ICON_ALIASES[key] || key.toLowerCase() + ".png";
    // no link to a page that is not in the book: a dead click reads as a bug
    var pageAttr = meta.page && pageTitleExists(meta.page)
      ? ' data-page-title="' + attrEscape(meta.page) + '"' : "";
    // A SPECIFIC named building (Observatory, Academy, ...) renders larger in the
    // Unique Ability box (scoped rule keys off .inline-icon--structure). The
    // GENERIC "Buildings" glyph (CITY_BUILDING_LIST) stays at normal 17px.
    var structure = /^(PALACE|ACADEMY|LIBRARY|OBSERVATORY|MENAGERIE|HOSPITAL|TEMPLE|BUILDING_TEMPLE|ALTAR|WONDER_HOUSE_OF_WISDOM|QUARTER_PURA|TERRAIN_NATURAL_WONDER|GREAT_PERSON)$/.test(key) ||
        key.indexOf("IMPROVEMENT_") === 0
      ? " inline-icon--structure" : "";
    // BLDG_* are the synthetic tokens minted for a NAMED building's own artwork
    // -- buildingTips() for a civ's unique infrastructure, namedBuildingIcon()
    // for the two Buildings that form a Quarter. They are little paintings, not
    // glyphs, so they read at logo size, unframed, and light up on hover.
    if (key.indexOf("BLDG_") === 0) structure += " inline-icon--bldg";
    // Age emblems (age_<x>.png) are logos, not glyphs -- render them a bit
    // larger so they read as the Age they mark.
    if (/^AGE_/.test(key)) structure += " inline-icon--emblem";
    // A named Tech unlocking a specific building/unit (Flight -> Aerodrome)
    // reads as a small logo in prose, same idea as an Age emblem.
    if (/^(TECH_|CIVIC_)/.test(key) && !/^CIVICS$/.test(key)) structure += " inline-icon--tech";
    // A religion emblem is already a framed disc; it reads as a logo, not a
    // glyph, so it gets the same 34px treatment inside the brass ring.
    if (/^RELIGION_/.test(key)) structure += " inline-icon--religion";
    if (/^CIV_/.test(key)) structure += " inline-icon--religion";
    return '<button class="inline-icon inline-icon-' + attrEscape(kind) + structure + '" type="button" title="' +
      attrEscape(label) + '" aria-label="' + attrEscape(label) + '"' + pageAttr + '>' +
      '<img class="inline-icon-img" alt="" src="images/icons/' + attrEscape(file) +
      '" onerror="this.closest(&quot;.inline-icon&quot;).classList.add(&quot;noimg&quot;)">' +
      '<span class="inline-icon-glyph">' + escapeHtml(symbol) + '</span>' +
      '</button>';
  }
  function richText(raw) {
    var html = escapeHtml(raw || "");
    // "[TIP]water[/TIP] [B]tiles[/B]" -> "[TIP]water tiles[/TIP]": the word
    // that completes a terrain phrase joins the term it belongs to
    html = html.replace(/\[\/TIP\] (?:\[B\])?(tiles|Tiles|Terrain|terrain)(?:\[\/B\])?(?![A-Za-z])/g, " $1[/TIP]");
    // "Unique Gold [TIP]Building[/TIP]" -> "[TIP]Unique Gold Building[/TIP]":
    // the class of building is one phrase, tipped whole, its icon in front
    html = html.replace(/\b((?:Unique )?(?:Gold|Food|Production|Science|Culture|Happiness|Influence|Diplomacy|Military|Warehouse) )(\[TIP:[^\]]+\])(Buildings?)(\[\/TIP\])/g, "$2$1$3$4");

    html = html.replace(/\[B\]([\s\S]*?)\[\/B\]/g, "<strong>$1</strong>");
    html = html.replace(/\[b\]([\s\S]*?)\[\/b\]/g, "<strong>$1</strong>");
    html = html.replace(/\[icon:([^\]]+)\]/g, function (_, name) {
      return renderInlineIcon(name);
    });
    html = html.replace(/\[TIP:([^\]]+)\]([\s\S]*?)\[\/TIP\]/g, function (_, tag, term) {
      var def = GLOBAL_TIPS[tag] ? stripMarkup(GLOBAL_TIPS[tag]) : "";
      return '<span class="tip" data-tip="' + attrEscape(def) + '">' + term + "</span>";
    });

    return html;
  }

  var activeTipEl = null;

  // Within one box (a trait, a card ticket, a stat box, a chapter's body) a
  // tooltip term is offered once: later spans with the same tip drop the
  // tip and its underline and read as plain text. Runs before the handlers
  // are bound.
  var TIP_BOX_SELECTOR = ".civ-unique, .tt-ticket, .trad-card, .age-acc, .entry-section, .wonder-unlock, .unit-attrs, .chapter-body, .leader-quote, .m-acc, .acc-body";
  function dedupeTips(root) {
    var scope = root || contentEl;
    if (!scope || !scope.querySelectorAll) return;
    scope.querySelectorAll(TIP_BOX_SELECTOR).forEach(function (box) {
      var seen = {};
      box.querySelectorAll(".tip[data-tip]").forEach(function (el) {
        // only the nearest box counts, so a tip in a nested box is judged there
        if (el.closest(TIP_BOX_SELECTOR) !== box) return;
        var key = el.getAttribute("data-tip");
        if (!key) return;
        if (seen[key]) {
          el.classList.remove("tip");
          el.removeAttribute("data-tip");
          el.removeAttribute("data-tip-html");
          el.removeAttribute("role");
          el.removeAttribute("tabindex");
        } else {
          seen[key] = true;
        }
      });
    });
  }

  function bindTipHandlers() {
    dedupeTips();
    contentEl.querySelectorAll(".tip").forEach(function (el) {
      el.addEventListener("click", function (ev) {
        ev.stopPropagation();
        closeActiveTip();

        var html = el.getAttribute("data-tip-html");
        var def = el.getAttribute("data-tip");
        if (!def && !html) return;

        var box = document.createElement("span");
        box.className = "tip-popover";
        if (html) {
          box.classList.add("tip-popover--rich");
          box.innerHTML = html;
        } else {
          box.textContent = def;
        }
        // the box lives on the page's top layer, fixed to the screen, so no
        // card, scroll box or popup it was opened in can clip it
        box.classList.add("tip-popover--fixed");
        document.body.appendChild(box);
        activeTipEl = box;
        positionTipPopover(el, box);
      });
    });
  }

  function bindGalleryHandlers() {
    contentEl.querySelectorAll(".entry-gallery-item[data-gallery-src]").forEach(function (button) {
      button.addEventListener("click", function () {
        var img = contentEl.querySelector(".entry-portrait");
        if (!img) return;
        img.src = button.getAttribute("data-gallery-src");
        img.alt = button.getAttribute("data-gallery-alt") || img.alt;
      });
    });
  }
  function bindLinkedIconHandlers() {
    // .page-link is icon+word together (a Belief card's "Altar"); the bare
    // .inline-icon form is the glyph on its own.
    contentEl.querySelectorAll(".inline-icon[data-page-title], .page-link[data-page-title], .tt-pip[data-page-title]").forEach(function (el) {
      function go(ev) {
        ev.stopPropagation();
        var target = findPageByTitle(el.getAttribute("data-page-title"));
        if (!target) return;
        if (target.sectionId !== currentSectionId) {
          currentSectionId = target.sectionId;
          updateTabbarActive();
          renderSidebar();
        }
        navigateToPage(target.page, target.groupTitle, target.sectionId);
      }
      el.addEventListener("click", go);
      el.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(ev); }
      });
    });
    // A Belief class ("Founder") points at a sidebar category rather than a
    // single page -- open that category instead of navigating.
    contentEl.querySelectorAll("[data-belief-group]").forEach(function (el) {
      function go(ev) {
        ev.stopPropagation();
        revealSidebarGroup(el.getAttribute("data-belief-group"));
      }
      el.addEventListener("click", go);
      el.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(ev); }
      });
    });
  }
  // Keep the popover on screen: over the anchor's first line (under it when
  // there is no room above), centred on it, clamped to the screen's sides.
  function positionTipPopover(anchor, box) {
    var margin = 8;
    var rects = anchor.getClientRects();
    var a = rects.length ? rects[0] : anchor.getBoundingClientRect();
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var b = box.getBoundingClientRect();
    var left = Math.max(margin, Math.min(a.left + a.width / 2 - b.width / 2, vw - margin - b.width));
    var top = a.top - b.height - 8;
    if (top < margin) {
      var last = rects.length ? rects[rects.length - 1] : a;
      top = Math.min(last.bottom + 8, vh - margin - b.height);
    }
    box.style.left = Math.round(left) + "px";
    box.style.top = Math.round(Math.max(margin, top)) + "px";
  }

  function closeActiveTip() {
    if (activeTipEl && activeTipEl.parentNode) {
      activeTipEl.parentNode.removeChild(activeTipEl);
    }
    activeTipEl = null;
  }
})();










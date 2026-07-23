export type WorkGroup = "list" | "analysis" | "releases";

export type Work = {
  home?: true;
  group: WorkGroup;
  topic: string;
  cat: string;
  pub: string;
  title: string;
  badge: string;
  summary: string;
  link: string;
  tags: string[];
};

export const site = {
  name: "Nabil",
  fullName: "Nabil Ibrahim-Oladosu",
  role: "SEO Content Writer covering Anime, Manga & Gaming",
  location: "Lagos, Nigeria",
  email: "nabilibrahimoladosu@gmail.com",
  linkedin: "https://www.linkedin.com/in/nabil-ibrahim-oladosu/",
  github: "https://github.com/Alpha-Espada",
};

export const works: Work[] = [
  { home: true, group: "releases", topic: "MF Ghost", cat: "Anime News", pub: "Soap Central", title: "MF Ghost Season 3: Complete Release Schedule & Episode Guide", badge: "14,900+ views (series)", summary: "The master schedule tracking every air date, stream platform and race leg across Season 3, the anchor of an 11-part series.", link: "https://www.soapcentral.com/anime/mf-ghost-season-3-complete-release-schedule-all-episodes-and-when-they-get-released", tags: ["MF Ghost", "Release Schedule", "SEO Highlight"] },
  { home: true, group: "list", topic: "Black Clover", cat: "Features & Listicles", pub: "Soap Central", title: "10 Strongest Characters in Black Clover, Ranked", badge: "Ranked listicle", summary: "A definitive power ranking of the most formidable mages and devils in Yuki Tabata's Black Clover.", link: "https://www.soapcentral.com/anime/10-strongest-characters-black-clover", tags: ["Black Clover", "Power Ranking", "Asta"] },
  { home: true, group: "list", topic: "Naruto", cat: "Features & Listicles", pub: "Game Rant", title: "Naruto: How Iruka Influenced Naruto Throughout the Series", badge: "Game Rant byline", summary: "An editorial on how Iruka Umino's acceptance pulled Naruto back from darkness and shaped his path to Hokage.", link: "https://gamerant.com/naruto-how-iruka-influenced-naruto-throughout-the-series/", tags: ["Naruto", "Iruka", "Editorial"] },
  { group: "releases", topic: "Kill Blue", cat: "Anime News", pub: "Soap Central", title: "Kill Blue: Complete Release Schedule & When Every Episode Drops", badge: "Release schedule", summary: "A comprehensive guide tracking all episode air dates and release times for the Kill Blue anime.", link: "https://www.soapcentral.com/anime/kill-blue-complete-release-schedule-all-episodes-and-when-they-get-released", tags: ["Kill Blue", "Shonen Jump", "Guide"] },
  { group: "analysis", topic: "Jujutsu Kaisen", cat: "Manga & Gaming Analysis", pub: "Soap Central", title: "Everything Revealed in Jujutsu Kaisen Volume Extras, Explained", badge: "Lore breakdown", summary: "An explanatory breakdown of key lore revelations, character trivia and author commentary in the volume extras.", link: "https://www.soapcentral.com/anime/everything-revealed-in-jujutsu-kaisen-modulo-volume-3-extra-explained", tags: ["Jujutsu Kaisen", "Manga Extras", "Lore"] },
  { group: "releases", topic: "MF Ghost", cat: "Episode Breakdowns", pub: "Soap Central", title: "MF Ghost Season 3 Episode 4: Release Date & Everything to Know", badge: "14,900+ views (series)", summary: "Release details, time zones, streaming channels and plot expectations for Season 3 Episode 4.", link: "https://www.soapcentral.com/anime/mf-ghost-season-3-episode-4-release-date-and-everything-you-need-to-know", tags: ["MF Ghost", "Episode Guide", "Racing"] },
  { group: "analysis", topic: "Fire Force", cat: "Manga & Gaming Analysis", pub: "Soap Central", title: "Is Arthur Boyle Dead in Fire Force Season 3? Fate Explained", badge: "Character fate", summary: "Unpacking Arthur Boyle's battle with Dragon and explaining his ultimate fate in Fire Force.", link: "https://www.soapcentral.com/anime/is-arthur-boyle-dead-in-fire-force-season-3-explained", tags: ["Fire Force", "Arthur Boyle", "Fate"] },
  { group: "list", topic: "MHA × Demon Slayer", cat: "Features & Listicles", pub: "Soap Central", title: "10 Pairs of MHA & Demon Slayer Characters Who Share a Voice Actor", badge: "Anime overlaps", summary: "Highlighting the seiyuu who voice major characters across both My Hero Academia and Demon Slayer.", link: "https://www.soapcentral.com/anime/10-pairs-my-hero-academia-demon-slayer-characters-who-share-same-voice", tags: ["My Hero Academia", "Demon Slayer", "Seiyuu"] },
  { group: "analysis", topic: "Record of Ragnarok", cat: "Manga & Gaming Analysis", pub: "Soap Central", title: "Record of Ragnarok S3: Hades vs. Qin Shi Huang Fight Explained", badge: "Fight breakdown", summary: "A combat breakdown analyzing the battle between the King of the Underworld and the First Emperor of China.", link: "https://www.soapcentral.com/anime/record-of-ragnarok-season-3-hades-vs-qin-shi-huang-explained", tags: ["Record of Ragnarok", "Hades", "Fight Analysis"] },
  { group: "analysis", topic: "Jujutsu Kaisen", cat: "Manga & Gaming Analysis", pub: "Soap Central", title: "Does Inumaki Appear in Jujutsu Kaisen Season 3? Fate Explained", badge: "Character fate", summary: "Addressing Toge Inumaki's status after the Shibuya Incident and his role in the Culling Game arc.", link: "https://www.soapcentral.com/anime/does-inumaki-appear-in-jujutsu-kaisen-season-3-character-s-fate-explained", tags: ["Jujutsu Kaisen", "Inumaki", "Culling Game"] },
  { group: "releases", topic: "Hana-Kimi", cat: "Anime News", pub: "Soap Central", title: "Will There Be a Hana-Kimi Season 2? Renewal Status Explored", badge: "Renewal status", summary: "Examining manga material, studio announcements and renewal prospects for the Hana-Kimi adaptation.", link: "https://www.soapcentral.com/anime/will-there-be-a-hana-kimi-season-2-renewal-status-explored", tags: ["Hana-Kimi", "Shojo", "Anime News"] },
  { group: "analysis", topic: "Gachiakuta", cat: "Manga & Gaming Analysis", pub: "Soap Central", title: "How Old is Zanka in Gachiakuta? Ages of All Main Characters", badge: "Character guide", summary: "An age and profile guide for Zanka Nijiku and the Janitors squad in Kei Urana's Gachiakuta.", link: "https://www.soapcentral.com/anime/how-old-is-zanka-in-gachiakuta-age-of-all-characters-explained", tags: ["Gachiakuta", "Zanka", "Character Guide"] },
  { group: "releases", topic: "The Angel Next Door", cat: "Episode Breakdowns", pub: "Soap Central", title: "The Angel Next Door Spoils Me Rotten S2 Ep 2: Release & Guide", badge: "Romance guide", summary: "Air date, streaming availability and story progression for Amane and Mahiru in Season 2 Episode 2.", link: "https://www.soapcentral.com/anime/the-angel-next-door-spoils-me-rotten-2-episode-2-release-date-and-everything-you-need-to-know", tags: ["Romance Anime", "Episode Guide"] },
  { group: "releases", topic: "Boruto", cat: "Anime News", pub: "Soap Central", title: "Boruto: Two Blue Vortex Chapter Spoilers & Plot Breakdown", badge: "Manga spoilers", summary: "Breaking down high-stakes developments, Sarada's battle and the growing threat of the Shinju forces.", link: "https://www.soapcentral.com/anime/boruto-two-blue-vortex-chapter-32-spoilers-sarada-falls-as-mamushi-s-army-grows-to-1000", tags: ["Boruto", "Two Blue Vortex", "Spoilers"] },
  { group: "releases", topic: "The Angel Next Door", cat: "Episode Breakdowns", pub: "Soap Central", title: "The Angel Next Door Spoils Me Rotten S2 Ep 5: Release & Guide", badge: "Episode guide", summary: "Release details and narrative expectations for Episode 5 of the romantic comedy series.", link: "https://www.soapcentral.com/anime/the-angel-next-door-spoils-me-rotten-2-episode-5-release-date-and-everything-you-need-to-know", tags: ["Romance Anime", "Episode 5"] },
  { group: "list", topic: "Naruto", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "10 Most Well-Written Naruto Arcs, Ranked", badge: "Ranked feature", summary: "Ranking Masashi Kishimoto's finest arcs by thematic depth, fight choreography and emotional payoff.", link: "https://deltiasgaming.com/article/10-most-well-written-naruto-arcs-ranked/", tags: ["Naruto", "Arc Ranking", "Shonen"] },
  { group: "list", topic: "One-Punch Man", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "8 Characters Like Atomic Samurai Who Got Sidelined in OPM", badge: "Hero analysis", summary: "Examining the top-tier S-Class heroes who deserved more screentime in the major battle arcs.", link: "https://deltiasgaming.com/article/8-characters-like-atomic-samurai-who-got-sidelined-in-one-punch-man/", tags: ["One-Punch Man", "S-Class", "Listicle"] },
  { group: "analysis", topic: "Demon Slayer", cat: "Manga & Gaming Analysis", pub: "Deltia's Gaming", title: "Yoriichi Tsugikuni Was Under-Utilized in Demon Slayer: Here's Why", badge: "Editorial feature", summary: "A critical retrospective on the Sun Breathing progenitor and his narrative role in Kimetsu no Yaiba.", link: "https://deltiasgaming.com/article/yoriichi-tsugikuni-was-under-utilized-in-demon-slayer-and-heres-why/", tags: ["Demon Slayer", "Yoriichi", "Editorial"] },
  { group: "analysis", topic: "Black Clover", cat: "Manga & Gaming Analysis", pub: "Deltia's Gaming", title: "Who is Mimosa Vermillion in Black Clover? Powers & History", badge: "Character profile", summary: "A full profile of Mimosa's Plant Magic, her Golden Dawn status and key moments.", link: "https://deltiasgaming.com/article/who-is-mimosa-vermillion-in-black-clover/", tags: ["Black Clover", "Mimosa", "Golden Dawn"] },
  { group: "list", topic: "One Piece", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "All 12 Worst Generation Supernovas in One Piece, Ranked", badge: "Power ranking", summary: "Power ranking Luffy, Law, Kid, Zoro and the rest of the Worst Generation pirates.", link: "https://deltiasgaming.com/article/all-12-worst-generation-supernovas-in-one-piece-ranked-weakest-to-strongest/", tags: ["One Piece", "Supernovas", "Luffy"] },
  { group: "analysis", topic: "Solo Leveling", cat: "Manga & Gaming Analysis", pub: "Deltia's Gaming", title: "Solo Leveling Fight Explained: Sung Jinwoo vs. Ant King (Beru)", badge: "Fight breakdown", summary: "Analyzing the iconic Jeju Island Raid where Sung Jinwoo faced the terrifying Ant King.", link: "https://deltiasgaming.com/article/solo-leveling-fight-explained-sung-jinwoo-vs-ant-king/", tags: ["Solo Leveling", "Sung Jinwoo", "Beru"] },
  { group: "releases", topic: "I've Been Killing Slimes", cat: "Anime News", pub: "Deltia's Gaming", title: "Everything to Know About I've Been Killing Slimes Season 2", badge: "Isekai news", summary: "Premiere dates, returning voice cast and light-novel volume expectations for the sequel.", link: "https://deltiasgaming.com/article/everything-you-need-to-know-about-ive-been-killing-slimes-2/", tags: ["Isekai", "Season 2", "News"] },
  { group: "list", topic: "PUBG × Anime", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "All Anime PUBG Collaborations, Ranked Least to Most Controversial", badge: "Gaming & anime", summary: "Ranking PUBG Mobile crossover events with iconic anime franchises by community reception.", link: "https://deltiasgaming.com/article/all-anime-pubg-collaborations-ranked-least-to-most-controversial/", tags: ["PUBG", "Crossovers", "Gaming"] },
  { group: "list", topic: "My Hero Academia", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "10 Times Fans Loved Himiko Toga from My Hero Academia", badge: "Fan favorite", summary: "Himiko Toga's most memorable, tragic and fan-favorite moments across the series.", link: "https://deltiasgaming.com/article/10-times-fans-loved-himiko-toga-from-my-hero-academia/", tags: ["My Hero Academia", "Toga", "Villains"] },
  { group: "analysis", topic: "Boruto", cat: "Manga & Gaming Analysis", pub: "Deltia's Gaming", title: "Is Kawaki Evil in Boruto? Motives & Omnipotence Explained", badge: "Character analysis", summary: "Examining Kawaki's protective loyalty to Naruto and the consequences of Eida's Omnipotence.", link: "https://deltiasgaming.com/article/is-kawaki-evil-in-boruto/", tags: ["Boruto", "Kawaki", "Omnipotence"] },
  { group: "analysis", topic: "One Piece", cat: "Manga & Gaming Analysis", pub: "Deltia's Gaming", title: "Why Does Zoro Use Three Swords in One Piece? Santoryu Origins", badge: "Lore breakdown", summary: "The emotional origin behind Roronoa Zoro's Three-Sword Style and Kuina's promise.", link: "https://deltiasgaming.com/article/why-does-zoro-use-three-swords-in-one-piece/", tags: ["One Piece", "Zoro", "Santoryu"] },
  { group: "list", topic: "Black Clover", cat: "Features & Listicles", pub: "Deltia's Gaming", title: "All 11 Black Clover Arcs, Ranked from Worst to Best", badge: "Complete ranking", summary: "Every arc ranked, from the Magic Knights Entrance Exam to the Spade Kingdom Invasion.", link: "https://deltiasgaming.com/article/all-11-black-clover-arcs-ranked-from-worst-to-best/", tags: ["Black Clover", "Arc Ranking", "Spade Kingdom"] },
];

export const stats = [
  { n: "600+", l: "Articles published" },
  { n: "150K+", l: "Total organic views" },
  { n: "30+", l: "Series covered" },
  { n: "14,900+", l: "Views on one MF Ghost series" },
];

export const pubs = ["Soap Central", "Deltia's Gaming", "Game Rant"];

export const series = [
  "One Piece", "Naruto", "Jujutsu Kaisen", "Demon Slayer", "Black Clover", "MF Ghost",
  "Solo Leveling", "My Hero Academia", "Boruto", "Fire Force", "Record of Ragnarok", "One-Punch Man",
];

export const phases = [
  { p: "Research & outline", m: "AI-accelerated", d: "Rapid topic mapping and structural brainstorming before a word is written." },
  { p: "SERP gap mapping", m: "AI-assisted", d: "Finding the missing subheadings and search intents competitors skipped." },
  { p: "Final copy & tone", m: "100% human", d: "Authentic editorial voice, character reads and polish. Zero AI copy-paste." },
  { p: "Fact-check & canon audit", m: "Zero-hallucination", d: "Every claim verified against the official manga chapters and episodes." },
];

export const skills = [
  "SEO & keyword strategy", "Intent mapping", "Headline A/B formatting", "Internal linking",
  "WordPress CMS", "Image specs & metadata", "Release-schedule tracking", "Episode breakdowns",
  "Arc & character analysis", "Fandom sentiment", "SERP gap analysis", "Canonical fact-checking",
];

export const experience = [
  { role: "Anime Content Writer", org: "Soap Central", time: "Apr 2025–Present", note: "500+ articles and 150,000+ organic views. 7+ weekly features, schedules and listicles across 30+ titles; 14,900+ views on an 11-part MF Ghost Season 3 series." },
  { role: "Anime Content Writer (Contract)", org: "Deltia's Gaming", time: "Dec 2024–Apr 2025", note: "100+ articles in five months, including 40+ in the first month. Sourced and formatted images to spec and worked with lead editors to cut revision loops." },
  { role: "Anime Features Writer", org: "Game Rant", time: "Jan 2024–Feb 2025", note: "Feature bylines and lore breakdowns under strict internal style guides for SEO headlines, intro hooks and internal linking." },
  { role: "Frontend Developer (Angular)", org: "Tireda Technologies", time: "Oct 2025–Present", note: "Maintaining admin platforms in Angular 17+ with standalone components and Tailwind CSS, a technical lens on web publishing." },
];

export const education = { deg: "B.Sc. Mechanical Engineering", school: "University of Ibadan", time: "2019–2025" };

export const services = [
  { t: "SEO Anime & Gaming Articles", d: "In-depth listicles, character breakdowns, lore guides and explainers built to rank on Google and pull recurring search traffic.", items: ["1,000–2,500+ word optimized articles", "Keyword-rich subheadings & metas", "Sourced, formatted image suggestions", "Internal linking recommendations"], turn: "24–48 hours" },
  { t: "Rapid Newsroom Coverage", d: "Fast-turnaround reporting on trailers, cast reveals, release dates and trending events during peak search windows.", items: ["400–800 word rapid updates", "Canonical social & press sourcing", "Headline options for news carousels", "Self-published in WordPress"], turn: "Same day / fast-track" },
  { t: "Content Planning & Research", d: "Seasonal schedule mapping, competitor gap analysis and content-calendar creation for media outlets.", items: ["Seasonal coverage strategy", "High-traffic topic target lists", "SERP competitor briefs", "Structured outline templates"], turn: "Flexible / project basis" },
];

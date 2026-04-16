// ─── ENTRY CONFIG ─────────────────────────────────────────────────────────────
// This is the main list of docs shown in the sidebar.
// To add a new doc: copy any entry block, give it a unique id, set the title/category/
// description, point source at the file path, and list related entry ids.
// To remove a doc: delete its entry block.
// To reorder: move the block up or down in the array.
export const ENTRY_CONFIG = [
  { id: "overview", title: "Project Overview", category: "overview", description: "High-level project guardrails and the main architecture landing page.", source: "story-documents/architecture/README.md", related: ["world-lore", "story-rules", "full-structure"] },
  { id: "leo", title: "Leo", category: "characters", description: "Core protagonist canon, current emotional state, and locked future reveals.", source: "characters/leo/character.md", related: ["leos-father", "marshe", "richard", "act-1-outline"] },
  { id: "leos-father", title: "Leo's Father", category: "characters", description: "Warm father, hidden heir, and the sickness-era tragedy at the center of Leo's grief.", source: "characters/leos-father/character.md", related: ["leo", "richard", "king", "world-lore"] },
  { id: "richard", title: "Richard", category: "characters", description: "Silent protector, lost political steward, and feared village outcast.", source: "characters/richard/character.md", related: ["leo", "leos-father", "king", "political-motives"] },
  { id: "marshe", title: "Marshe", category: "characters", description: "Specific bully, inherited damage, and future tragedy tied to Leo.", source: "characters/marshe/character.md", related: ["leo", "leos-father", "marshes-father", "full-structure"] },
  { id: "marshes-father", title: "Marshe's Father", category: "characters", description: "Military foil, family wound, and sickness-fueled later public horror.", source: "characters/marshes-father/character.md", related: ["marshe", "leos-father", "richard", "political-motives"] },
  { id: "king", title: "The King", category: "characters", description: "Usurper, manipulator of prophecy, and architect of buried legitimacy.", source: "characters/king/character.md", related: ["leos-father", "esmeralda", "world-lore", "kingdom-lore"] },
  { id: "esmeralda", title: "Esmeralda", category: "characters", description: "Future-facing royal figure, loved daughter inside a fabricated inheritance story.", source: "characters/esmeralda/character.md", related: ["king", "richard", "kingdom-lore"] },
  { id: "world-lore", title: "World Lore", category: "world", description: "Kingdom mechanics, hidden lineage, exile history, weapons, and future prophecy.", source: "story-documents/world-lore.md", related: ["political-motives", "kingdom-lore", "story-rules"] },
  { id: "political-motives", title: "Political Motives", category: "world", description: "The pressure system under the throne, rebellion logic, and political meaning of major figures.", source: "story-documents/political-motives.md", related: ["world-lore", "king", "richard", "leos-father"] },
  { id: "ancient-hostile-force", title: "Ancient Hostile Force", category: "world", description: "Hidden anti-ancient force, rival-king bargain, and the deeper pressure behind the crystal conflict.", source: "story-documents/ancient-hostile-force.md", related: ["world-lore", "political-motives", "kingdom-lore"] },
  { id: "story-rules", title: "Story Rules", category: "architecture", description: "Guardrails for canon, tone, character usage, and active planning discipline.", source: "story-documents/architecture/story-rules.md", related: ["overview", "full-structure", "current-handoff"] },
  { id: "full-structure", title: "Full Story Structure", category: "structure", description: "Master architecture doc for backstory, sequences, reveals, and core placements.", source: "story-documents/architecture/full-story-structure.md", related: ["act-1-outline", "current-handoff", "story-version-lore"] },
  { id: "act-1-outline", title: "Act 1 Outline", category: "structure", description: "Fast sequence outline for current screenplay progression.", source: "story-documents/architecture/act-1-outline.md", related: ["full-structure", "current-handoff", "leo"] },
  { id: "current-handoff", title: "Current Handoff", category: "structure", description: "Where the active story currently is and what reveal handling must stay locked.", source: "story-documents/architecture/current-handoff.md", related: ["act-1-outline", "story-rules", "full-structure"] },
  { id: "story-version-lore", title: "Story Version of Lore", category: "reference", description: "Prose-facing story material and remembered beats in screenplay language.", source: "story-documents/architecture/screenplay-prosev1.txt", related: ["full-structure", "act-1-outline", "leo", "leos-father"] },
  { id: "kingdom-lore", title: "Story Version of Kingdom Lore", category: "reference", description: "Narrative explanation of the kingdom's theft, doctrine, and succession fracture.", source: "story-documents/architecture/Story Version of Kingdom Lore - Fresh Draft.txt", related: ["world-lore", "political-motives", "king", "leos-father"] }
];

// ─── CATEGORY LABELS ──────────────────────────────────────────────────────────
// Display names for the filter chips in the sidebar.
// To add a new category: add it here and use the same key in ENTRY_CONFIG entries.
export const CATEGORY_LABELS = {
  all: "Everything",
  overview: "Overview",
  characters: "Characters",
  world: "World",
  architecture: "Architecture",
  structure: "Structure",
  reference: "Reference"
};

// ─── GALLERY CONFIG ───────────────────────────────────────────────────────────
// Maps an entry id to an array of concept-art images shown below the entry header.
// To add images for an entry: add a key matching the entry id, then list { src, label } objects.
// src is relative to the project root. label is the caption shown under the image.
export const GALLERY_CONFIG = {
  overview: [
    { src: "world-art/castle.jfif", label: "Castle" },
    { src: "world-art/exile-village.jfif", label: "Exile Village" },
    { src: "world-art/leo-hometown.jfif", label: "Leo's Hometown" }
  ],
  leo: [
    { src: "characters/leo/concept-art/child/1.jpeg", label: "Child Leo 1" },
    { src: "characters/leo/concept-art/child/2.jpeg", label: "Child Leo 2" },
    { src: "characters/leo/concept-art/teenager/3.jpeg", label: "Leo 18 - 1" },
    { src: "characters/leo/concept-art/teenager/4.jpeg", label: "Leo 18 - 2" }
  ],
  "leos-father": [
    { src: "characters/leos-father/concept-art/young/download - 2026-04-13T203447.747.jpeg", label: "Young Leo's Father" },
    { src: "characters/leos-father/concept-art/young/download - 2026-04-13T203527.550.jpeg", label: "Young Leo's Father Variation" }
  ],
  richard: [
    { src: "characters/richard/concept-art/middle-aged/download - 2026-04-13T203338.427.jpeg", label: "Richard" }
  ],
  marshe: [
    { src: "characters/marshe/concept-art/teenager/download - 2026-04-13T204051.663.jpeg", label: "Teen Marshe" },
    { src: "characters/marshe/concept-art/child/download - 2026-04-13T204013.414.jpeg", label: "Child Marshe" }
  ],
  "marshes-father": [
    { src: "characters/marshes-father/concept-art/young/download - 2026-04-13T203745.730.jpeg", label: "Young Marshe's Father" },
    { src: "characters/marshes-father/concept-art/young/download - 2026-04-13T203811.113.jpeg", label: "Young Marshe's Father Variation" }
  ],
  king: [
    { src: "characters/king/concept-art/middle-aged/download - 2026-04-13T204338.083.jpeg", label: "Middle-Aged King" },
    { src: "characters/king/concept-art/old/download - 2026-04-13T204343.603.jpeg", label: "Older King" }
  ],
  esmeralda: [
    { src: "characters/esmeralda/concept-art/realistic/1.png", label: "Esmeralda 18 - Realistic 1" },
    { src: "characters/esmeralda/concept-art/realistic/2.jpeg", label: "Esmeralda 18 - Realistic 2" },
    { src: "characters/esmeralda/concept-art/cartoon/3.png", label: "Esmeralda 18 - Anime 1" },
    { src: "characters/esmeralda/concept-art/cartoon/4.jpeg", label: "Esmeralda 18 - Anime 2" }
  ],
  "world-lore": [
    { src: "world-art/castle.jfif", label: "Castle" },
    { src: "world-art/exile-village.jfif", label: "Exile Village" },
    { src: "world-art/exile-village-2.jfif", label: "Exile Village Variation" },
    { src: "world-art/leo-hometown.jfif", label: "Leo's Hometown" }
  ]
};

// ─── APP CONSTANTS ────────────────────────────────────────────────────────────
// GitHub repo slug used to build prefilled issue URLs from the Workbench "Send" flow.
// Change this if the repo is ever renamed or transferred.
export const GITHUB_REPO = "loronajay/project-lore";

// localStorage keys for persisted data.
// If you ever need to wipe saved notes or theme across all sessions, bump the version suffix (e.g. v2).
export const NOTES_KEY = "lore-workbench-notes-v1";
export const THEME_KEY = "lore-workbench-theme-v1";

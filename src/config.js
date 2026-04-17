// ─── ENTRY CONFIG ─────────────────────────────────────────────────────────────
// This is the main list of docs shown in the sidebar.
// To add a new doc: copy any entry block, give it a unique id, set the title/category/
// description, point source at the file path, and list related entry ids.
// To remove a doc: delete its entry block.
// To reorder: move the block up or down in the array.
export const ENTRY_CONFIG = [
  { id: "overview", title: "Project Overview", category: "overview", description: "High-level map of the story docs and how the canon tree is organized.", source: "story/README.md", related: ["world-lore", "story-rules", "full-structure"] },
  { id: "leo", title: "Leo", category: "characters", description: "Core protagonist canon, current emotional state, and locked future reveals.", source: "story/characters/leo/character.md", related: ["jack", "marshe", "richard", "act-1-outline"] },
  { id: "jack", title: "Jack (Leo's Father)", category: "characters", description: "Warm father, hidden heir, and the sickness-era tragedy at the center of Leo's grief.", source: "story/characters/jack/character.md", related: ["leo", "richard", "king", "world-lore"] },
  { id: "richard", title: "Richard", category: "characters", description: "Silent protector, lost political steward, and feared village outcast.", source: "story/characters/richard/character.md", related: ["leo", "jack", "king", "political-motives"] },
  { id: "marshe", title: "Marshe", category: "characters", description: "Specific bully, inherited damage, and future tragedy tied to Leo.", source: "story/characters/marshe/character.md", related: ["leo", "jack", "marcus", "full-structure"] },
  { id: "marcus", title: "Marcus (Marshe's Father)", category: "characters", description: "Military foil, family wound, and sickness-fueled later public horror.", source: "story/characters/marcus/character.md", related: ["marshe", "jack", "richard", "political-motives"] },
  { id: "aldric", title: "Aldric", category: "characters", description: "Current General of Eden's army, antagonist whose role deepens through later story events.", source: "story/characters/aldric/character.md", related: ["king", "richard", "political-motives"] },
  { id: "king", title: "The King", category: "characters", description: "Usurper, manipulator of prophecy, and architect of buried legitimacy.", source: "story/characters/king-gideon/character.md", related: ["jack", "esmeralda", "world-lore", "kingdom-lore"] },
  { id: "esmeralda", title: "Esmeralda", category: "characters", description: "Future-facing royal figure, loved daughter inside a fabricated inheritance story.", source: "story/characters/esmeralda/character.md", related: ["king", "richard", "kingdom-lore"] },
  { id: "world-lore", title: "World Lore", category: "world", description: "Kingdom mechanics, hidden lineage, exile history, weapons, and future prophecy.", source: "story/world/world-lore/world-lore.md", related: ["political-motives", "kingdom-lore", "story-rules"] },
  { id: "political-motives", title: "Political Motives", category: "world", description: "The pressure system under the throne, rebellion logic, and political meaning of major figures.", source: "story/world/world-lore/political-motives.md", related: ["world-lore", "king", "richard", "jack"] },
  { id: "ancient-hostile-force", title: "Ancient Hostile Force", category: "world", description: "Hidden anti-ancient force, rival-king bargain, and the deeper pressure behind the crystal conflict.", source: "story/characters/ancient-hostile-force/ancient-hostile-force.md", related: ["world-lore", "political-motives", "kingdom-lore"] },
  { id: "story-rules", title: "Story Rules", category: "architecture", description: "Guardrails for canon, tone, character usage, and active planning discipline.", source: "story/for-agents/story-rules.md", related: ["overview", "full-structure", "current-handoff"] },
  { id: "full-structure", title: "Full Story Structure", category: "structure", description: "Master architecture doc for backstory, sequences, reveals, and core placements.", source: "story/world/story-guides/full-story-structure.md", related: ["act-1-outline", "current-handoff", "story-version-lore"] },
  { id: "act-1-outline", title: "Act 1 Outline", category: "structure", description: "Fast sequence outline for current screenplay progression.", source: "story/world/story-guides/act-1-outline.md", related: ["full-structure", "current-handoff", "leo"] },
  { id: "current-handoff", title: "Current Handoff", category: "structure", description: "Where the active story currently is and what reveal handling must stay locked.", source: "story/for-agents/current-handoff.md", related: ["act-1-outline", "story-rules", "full-structure"] },
  { id: "story-version-lore", title: "Screenplay Prose V1", category: "reference", description: "Novelized prose-form canon used by the workbench as the primary story prose track.", source: "story/world/prose-documents/screenplay-prose-novelized-v1.txt", related: ["full-structure", "act-1-outline", "leo", "jack"] },
  { id: "kingdom-lore", title: "Kingdom Lore Prose", category: "reference", description: "Narrative explanation of the kingdom's theft, doctrine, and succession fracture.", source: "story/world/prose-documents/kingdom-lore-prose.md", related: ["world-lore", "political-motives", "king", "jack"] }
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
    { src: "story/characters/leo/concept-art/child/1.jpeg", label: "Child Leo - Realistic 1" },
    { src: "story/characters/leo/concept-art/child/2.jpeg", label: "Child Leo - Realistic 2" },
    { src: "story/characters/leo/concept-art/teenager/3.jpeg", label: "Leo 18 - Anime 1" },
    { src: "story/characters/leo/concept-art/teenager/4.jpeg", label: "Leo 18 - Anime 2" }
  ],
  jack: [
    { src: "story/characters/jack/concept-art/young/download - 2026-04-13T203447.747.jpeg", label: "Young Jack" },
    { src: "story/characters/jack/concept-art/young/download - 2026-04-13T203527.550.jpeg", label: "Young Jack Variation" }
  ],
  richard: [
    { src: "story/characters/richard/concept-art/middle-aged/Richard-Pre-Exile.jpeg", label: "Richard - Pre Exile" }
  ],
  marshe: [
    { src: "story/characters/marshe/concept-art/teenager/Teenaged-Marshe.jpeg", label: "Teen Marshe" },
    { src: "story/characters/marshe/concept-art/child/Child-Marshe.jpeg", label: "Child Marshe" }
  ],
  marcus: [
    { src: "story/characters/marcus/concept-art/young/Marcus-Pre-Exile-1.jpeg", label: "Young Marcus" },
    { src: "story/characters/marcus/concept-art/young/Marcus-Pre-Exile-2.jpeg", label: "Young Marcus Variation" }
  ],
  king: [
    { src: "story/characters/king-gideon/concept-art/middle-aged/download - 2026-04-13T204338.083.jpeg", label: "Middle-Aged King" },
    { src: "story/characters/king-gideon/concept-art/old/download - 2026-04-13T204343.603.jpeg", label: "Older King" }
  ],
  esmeralda: [
    { src: "story/characters/esmeralda/concept-art/realistic/1.png", label: "Esmeralda 18 - Realistic 1" },
    { src: "story/characters/esmeralda/concept-art/realistic/2.jpeg", label: "Esmeralda 18 - Realistic 2" },
    { src: "story/characters/esmeralda/concept-art/cartoon/3.png", label: "Esmeralda 18 - Anime 1" },
    { src: "story/characters/esmeralda/concept-art/cartoon/4.jpeg", label: "Esmeralda 18 - Anime 2" }
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

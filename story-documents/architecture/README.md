# Lore Story Architecture

This folder is the main planning and canon-structure space for `LORE`.

It works together with:
- `story-documents/world-lore.md`
- `story-documents/political-motives.md`
- `characters/<name>/character.md`
- the root-level GitHub Pages workbench in `index.html`, `styles.css`, and `app.js`

## Core architecture docs

- [full-story-structure.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/full-story-structure.md): master story map for backstory, character placement, major reveals, and sequence order
- [act-1-outline.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/act-1-outline.md): fast outline for current Act 1 progression
- [current-handoff.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/current-handoff.md): the exact currently active story position and any immediate locked handling notes
- [story-rules.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/story-rules.md): tone, reveal, character-usage, and collaboration guardrails

## Supporting canon docs

- [world-lore.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/world-lore.md): kingdom structure, doctrine, lineage, crystal lore, exile policy, and setting-level truth
- [political-motives.md](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/political-motives.md): agendas, hidden motives, and political meaning for rulers, rebels, and institutions

## Character canon

- Character-specific canon lives under `characters/<name>/character.md`.
- Those files should hold the cleanest per-character breakdown of:
- status
- story role
- public perception
- inner reality
- relationships
- locked canon
- TBD / unresolved questions
- Character concept art also lives under `characters/<name>/concept-art/`.

## Workbench page

- The GitHub Pages workbench reads from the current markdown and text files rather than from a separate canon database.
- `app.js` maps which docs appear as top-level entries in the reader.
- `TBD` sections in the docs are surfaced automatically in the workbench dashboard.
- Workbench notes created from the page are currently browser-local and exportable as JSON; they are not canon until merged back into the docs.

## Workflow

- Update `current-handoff.md` when the active writing position changes.
- Update `act-1-outline.md` when beat order or pacing changes.
- Update `full-story-structure.md` when larger canon placement or reveal logic changes.
- Update `story-rules.md` when we lock a storytelling constraint, reveal rule, or collaboration norm.
- Update `world-lore.md` when setting truth changes.
- Update `political-motives.md` when agendas or political stakes change.
- Update the relevant `characters/<name>/character.md` file whenever we clarify a character.
- When touching a character, do a coherence pass across every relevant reference doc so shorthand summaries do not drift.

## Reference prose docs

- [Story Version of Lore.txt](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/Story%20Version%20of%20Lore.txt): prose-facing story memory and sequence material
- [Story Version of Kingdom Lore.txt](C:/Users/leoja/Desktop/Dad Games/lore-project/story-documents/architecture/Story%20Version%20of%20Kingdom%20Lore.txt): prose-facing explanation of kingdom history and succession fracture

These are still useful reference documents, but the markdown docs are the preferred source of truth when contradictions appear.

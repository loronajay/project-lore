# Lore World Docs

This folder holds the shared story-world material for `LORE`.

It is the main home for:
- worldbuilding and political canon
- story-level guide documents
- prose-form canon documents tied to the world and story

It works alongside:
- `story/characters/` for per-character canon and concept art
- `story/for-agents/` for fast-load agent references, handoff state, and collaboration rules
- `film/` for adaptation-facing material derived from the story docs

## Folder layout

### `world-lore/`

Reference canon for the setting itself.

- [world-lore.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/world-lore/world-lore.md): kingdom structure, doctrine, lineage, crystal lore, exile policy, and setting-level truth
- [world-lore-summary.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/world-lore/world-lore-summary.md): compressed read on the setting
- [political-motives.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/world-lore/political-motives.md): agendas, hidden motives, and political meaning for rulers, rebels, and institutions
- [political-motives-summary.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/world-lore/political-motives-summary.md): compressed political read

### `story-guides/`

Guide documents for overall story shape and progression.

- [full-story-structure.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/story-guides/full-story-structure.md): master story map for backstory, character placement, major reveals, and sequence order
- [act-1-outline.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/story-guides/act-1-outline.md): fast outline for current Act 1 progression
- [official-lore-timeline.txt](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/story-guides/official-lore-timeline.txt): chronological canon timeline

### `prose-documents/`

Prose-form canon and narrative reference documents.

- [screenplay-prose-novelized-v1.txt](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/prose-documents/screenplay-prose-novelized-v1.txt): prose canon in a more novelized voice
- [screenplay-prose-screenplay-v1.txt](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/prose-documents/screenplay-prose-screenplay-v1.txt): prose canon in a more screenplay-facing voice
- [kingdom-lore-prose.md](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/prose-documents/kingdom-lore-prose.md): prose-form treatment of the kingdom's backstory and structure
- [Story Version of Kingdom Lore.txt](/C:/Users/leoja/Desktop/Dad%20Games/lore-project/story/world/prose-documents/Story%20Version%20of%20Kingdom%20Lore.txt): older prose-form kingdom canon still retained as reference

## Authority and usage

- Use `world-lore/` for compressed reference truth.
- Use `story-guides/` for story arrangement, reveal placement, and timeline handling.
- Use `prose-documents/` for narrative-form canon that captures tone, scene feel, and story memory.
- Use `story/characters/<name>/character.md` and `story/characters/<name>/summary.md` for per-character truth.
- Use `story/for-agents/` for fast operational docs like handoff notes and rules, not as the main home of world canon.

## Workflow

- Update `world-lore/` when setting truth, doctrine, politics, or background forces change.
- Update `story-guides/` when sequence order, reveal handling, or overall placement changes.
- Update `prose-documents/` when the prose-form canon evolves or when one prose track diverges meaningfully from another.
- When changing important canon here, do a coherence pass across:
- `story/characters/`
- `story/for-agents/`
- `film/reference-map.md` and other adaptation docs that depend on these files

## Notes

- File format does not determine canon status here. Both Markdown and `.txt` files may be canon.
- The workbench and film docs should reference the current paths in this folder once the repo cleanup is finished.

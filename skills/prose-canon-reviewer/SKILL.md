---
name: prose-canon-reviewer
description: Review prose story drafts against the LORE architecture docs for contradictions, sequence drift, missing canon, object continuity, reveal timing, and character-state mismatches. Use when comparing a readable story version to canon, validating whether prose matches the outline, or checking that context was not lost between drafting sessions. Prefer review-first behavior and avoid rewriting unless explicitly asked.
---

# Prose Canon Reviewer

Review prose drafts against project canon without silently changing story logic.

## Sources of truth

Use these files as the canonical reference set:

- `story-documents/architecture/full-story-structure.md`
- `story-documents/architecture/act-1-outline.md`
- `story-documents/architecture/current-handoff.md`
- `story-documents/architecture/story-rules.md`

Treat prose drafts as implementation layers, not automatic canon.

## Review rules

- Findings come first.
- Focus on contradictions, sequencing errors, object continuity, reveal timing, and missing context.
- Distinguish between:
  - hard contradiction
  - soft omission
  - optional improvement
- Cite exact file and line references for both the prose draft and the canon source.

## Guardrails

- Do not rewrite prose unless the user explicitly asks for fixes.
- Do not move beats around to "repair" the story unless the user authorizes an edit.
- If prose and canon disagree, ask which one is authoritative unless the user already clarified it.
- If sequencing is ambiguous, ask one focused clarifying question before editing any document.

## Comparison checklist

- opening image and dream content
- current sequence order
- object continuity
- flashback placement
- emotional logic
- reveal timing
- character state at each beat
- tone alignment with grounded-fantasy rules

## Output pattern

At the end of a review, summarize:

- confirmed aligned beats
- contradictions found
- unresolved ambiguities
- whether any docs were changed

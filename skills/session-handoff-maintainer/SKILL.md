---
name: session-handoff-maintainer
description: Maintain continuity between writing sessions for the LORE project. Use when updating the current story position, preserving what was confirmed, tracking what is still TBD, summarizing a session, or preparing the repo so future agents can resume work safely. Prefer updating handoff and canon docs with minimal edits and ask before any broad structural changes.
---

# Session Handoff Maintainer

Preserve continuity between sessions so the project can survive long gaps and multiple agents.

## Primary files

- `story-documents/architecture/current-handoff.md`
- `story-documents/architecture/act-1-outline.md`
- `story-documents/architecture/full-story-structure.md`
- `story-documents/architecture/story-rules.md`

## Core job

- Keep `current-handoff.md` accurate and narrow.
- Capture the exact current beat, what just became true, and what happens next.
- Record confirmed canon in durable docs rather than leaving it only in chat history.
- Preserve TBDs when the user has not decided yet.

## Update policy

- Update only the files needed for continuity.
- If a change affects beat order, sync both `current-handoff.md` and `act-1-outline.md`.
- If a change affects durable canon, sync `full-story-structure.md`.
- If a change affects workflow or restrictions, sync `story-rules.md`.

## Clarification triggers

Ask before editing if any of the following are unclear:

- where the active scene currently ends
- what the immediate next beat is
- whether the user is confirming canon or only exploring
- whether a prose draft should be updated or only architecture docs

## End-of-session pattern

Summarize:

- what is now canon
- current active position
- next beat
- what remains TBD

## Guardrails

- Do not invent missing canon to make the handoff feel complete.
- Do not compress unresolved ambiguity into false certainty.
- Do not update prose drafts unless asked.

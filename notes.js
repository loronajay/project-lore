// ─── NOTES & GITHUB INTEGRATION ───────────────────────────────────────────────
// Everything related to the Workbench note lifecycle:
//   - Saving and persisting notes to localStorage
//   - Persisting the theme preference
//   - Exporting and importing notes as JSON
//   - Building and opening prefilled GitHub issues
//
// Notes are stored as plain objects in localStorage under NOTES_KEY.
// The GitHub issue flow opens a new browser tab — it does not commit to the repo.

import { NOTES_KEY, THEME_KEY, GITHUB_REPO } from "./config.js";
import { state } from "./state.js";
import { statusLabel } from "./utils.js";

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────

// Writes the current notes array to localStorage.
// Called after any mutation to state.notes.
export function persistNotes() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(state.notes));
}

// Writes the current theme to localStorage.
// Called when the user toggles the theme button.
export function persistTheme() {
  localStorage.setItem(THEME_KEY, state.theme);
}

// ─── NOTE CRUD ────────────────────────────────────────────────────────────────

// Appends a new note to state.notes and persists it.
// Returns false (without saving) if no body text was provided.
// The caller is responsible for re-rendering the notes list after calling this.
export function saveNote({ title, body, entryId, status, tags }) {
  if (!body) return;

  state.notes.push({
    id: crypto.randomUUID(),
    title,
    body,
    entryId,
    status,
    tags,
    createdAt: Date.now()
  });

  persistNotes();
}

// ─── IMPORT / EXPORT ──────────────────────────────────────────────────────────

// Triggers a JSON download of all current notes.
// The downloaded file can be re-imported with importNotes.
export function exportNotes() {
  const blob = new Blob([JSON.stringify(state.notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "lore-workbench-notes.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

// Reads a JSON file from the file input, replaces the current notes, and persists.
// Returns a Promise that resolves to true if the import succeeded, false otherwise.
// The caller is responsible for re-rendering the notes list on success.
export function importNotes(event) {
  const [file] = event.target.files || [];
  if (!file) return Promise.resolve(false);

  return file.text().then((text) => {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      state.notes = parsed;
      persistNotes();
      return true;
    }
    return false;
  }).catch(() => {
    alert("That note export could not be imported.");
    return false;
  }).finally(() => {
    // Reset the input so the same file can be re-imported if needed
    event.target.value = "";
  });
}

// ─── GITHUB ISSUE FLOW ────────────────────────────────────────────────────────

// Opens a prefilled GitHub issue in a new tab for all notes.
// Shows an alert if there are no notes to send.
export function sendAllNotesToGitHub() {
  if (!state.notes.length) {
    alert("There are no saved notes to send yet.");
    return;
  }
  openGitHubIssueForNotes(state.notes);
}

// Opens a prefilled GitHub issue in a new tab for the given array of notes.
// The title and body are built by buildGitHubIssue.
export function openGitHubIssueForNotes(notes) {
  const issue = buildGitHubIssue(notes);
  const url = new URL(`https://github.com/${GITHUB_REPO}/issues/new`);
  url.searchParams.set("title", issue.title);
  url.searchParams.set("body", issue.body);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

// Builds the issue title and body text from an array of notes.
// A single note gets a specific title. Multiple notes get a batch title.
function buildGitHubIssue(notes) {
  const single = notes.length === 1;
  const firstNote = notes[0];
  const firstEntry = state.entries.find((entry) => entry.id === firstNote.entryId);

  const title = single
    ? `[Workbench] ${firstEntry ? firstEntry.title : "General"} - ${firstNote.title}`
    : `[Workbench] Mobile note batch (${notes.length})`;

  const body = [
    "## Workbench Capture",
    "",
    "Captured from the GitHub Pages story workbench.",
    "",
    ...notes.flatMap((note, index) => {
      const entry = state.entries.find((item) => item.id === note.entryId);
      return [
        `### Note ${index + 1}`,
        `- Entry: ${entry ? entry.title : note.entryId}`,
        `- Status: ${statusLabel(note.status)}`,
        `- Tags: ${note.tags.length ? note.tags.join(", ") : "None"}`,
        `- Created: ${new Date(note.createdAt).toLocaleString()}`,
        "",
        `**${note.title}**`,
        "",
        note.body,
        "",
        "---",
        ""
      ];
    })
  ].join("\n");

  return { title, body };
}

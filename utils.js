// ─── UTILITIES ────────────────────────────────────────────────────────────────
// Pure helper functions with no side effects and no dependency on app state.
// Safe to call from anywhere. Nothing in here should need to change unless
// you're adjusting how data is formatted or how files are fetched.

// Escapes HTML special characters so user-supplied text can't inject markup.
// Used everywhere we're inserting text content into innerHTML.
export function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Splits a comma-separated tag string into a trimmed array, dropping empty values.
// e.g. "act1, leo, " → ["act1", "leo"]
export function splitTags(value) {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

// Returns a human-readable label for a note's status value.
// If you add a new status option to the HTML <select>, add its label here too.
export function statusLabel(status) {
  switch (status) {
    case "exploring": return "Exploring";
    case "locked":    return "Locked";
    default:          return "Idea";
  }
}

// Returns true if a source file came back with the "unavailable" fallback text,
// meaning the file couldn't be fetched in this environment (e.g. file:// protocol).
export function isUnavailableText(raw) {
  return raw.startsWith("# Unavailable");
}

// Fetches a text file by relative path. Returns fallback text if the fetch fails
// (e.g. the file doesn't exist yet, or the app is opened directly as file://).
export async function fetchText(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    return await response.text();
  } catch {
    return `# Unavailable\n\n- Could not load \`${path}\` in this environment.`;
  }
}

// Derives the path for a character's summary.md or world doc summary, given an entry config object.
// Returns null if the entry type doesn't have a summary file.
// To add summary support for a new category, extend the conditions here.
export function getSummarySource(entry) {
  if (entry.category === "characters") {
    // Character summaries live next to character.md as summary.md
    return entry.source.replace(/character\.md$/i, "summary.md");
  }

  if (entry.id === "world-lore" || entry.id === "political-motives") {
    // World doc summaries are named with a -summary suffix
    return entry.source.replace(/\.md$/i, "-summary.md");
  }

  return null;
}

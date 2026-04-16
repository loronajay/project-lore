// ─── MARKDOWN PARSING & RENDERING ─────────────────────────────────────────────
// Converts raw Markdown text into structured data and HTML strings.
// This is a lightweight custom parser — it only handles the subset of Markdown
// used in the LORE docs (headings, bullets, numbered lists, bold, code, links).
// If you add new Markdown formatting to the source docs and want it rendered,
// extend the relevant function below.

import { escapeHtml } from "./utils.js";

// ─── SECTION PARSING ──────────────────────────────────────────────────────────

// Splits a Markdown doc into an array of sections, each with a title and body lines.
// Sections are divided by the first heading level found below H1.
// e.g. an H2-structured doc produces one section per H2 heading.
export function parseSections(raw) {
  const lines = raw.split(/\r?\n/);
  const sections = [];

  // Detect the base heading level used for top-level sections in this doc
  const headingLevels = lines
    .map((line) => line.match(/^(#{1,6})\s+(.*)$/))
    .filter(Boolean)
    .map((match) => match[1].length);
  const baseLevel = headingLevels.find((level) => level > 1) || headingLevels[0] || 1;

  let current = { title: "Overview", lines: [] };

  lines.forEach((line) => {
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();

      // Skip anything above the base level (e.g. the doc title H1)
      if (level < baseLevel) return;

      if (level === baseLevel) {
        // Start a new section
        if (current.lines.length) sections.push(current);
        current = { title, lines: [] };
        return;
      }

      // Sub-headings become lines within the current section
      current.lines.push(line);
      return;
    }

    // Collapse consecutive blank lines into one
    if (!line.trim() && current.lines.length && current.lines[current.lines.length - 1] === "") {
      return;
    }

    current.lines.push(line);
  });

  if (current.lines.length) sections.push(current);

  // Drop sections that have no non-blank content
  return sections.filter((section) => section.lines.some((line) => line.trim()));
}

// ─── TBD EXTRACTION ───────────────────────────────────────────────────────────

// Scans a raw Markdown string for bullet items under any "## TBD" heading.
// Returns an array of those bullet strings (without the leading dash).
// TBD items are surfaced in the sidebar panel and the Workbench TBD dashboard.
export function extractTbdItems(raw) {
  const lines = raw.split(/\r?\n/);
  let inTbd = false;
  const items = [];

  lines.forEach((line) => {
    if (/^##+\s+TBD/i.test(line)) {
      inTbd = true;
      return;
    }
    if (/^##+\s+/.test(line) && !/^##+\s+TBD/i.test(line)) {
      inTbd = false;
    }
    if (inTbd && /^\s*-\s+/.test(line)) {
      items.push(line.replace(/^\s*-\s+/, "").trim());
    }
  });

  return items;
}

// ─── SECTION BODY RENDERING ───────────────────────────────────────────────────

// Converts an array of Markdown body lines into an HTML string.
// Handles: paragraphs, unordered lists, ordered lists, sub-headings (H3–H6).
// Inline formatting is handled by renderInlineMarkdown below.
export function renderSectionBody(lines) {
  const chunks = [];
  let unorderedListItems = [];
  let orderedListItems = [];
  let paragraphBuffer = [];

  const flushUnorderedList = () => {
    if (!unorderedListItems.length) return;
    chunks.push(`<ul>${unorderedListItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
    unorderedListItems = [];
  };

  const flushOrderedList = () => {
    if (!orderedListItems.length) return;
    chunks.push(`<ol>${orderedListItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ol>`);
    orderedListItems = [];
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    chunks.push(`<p>${renderInlineMarkdown(paragraphBuffer.join(" "))}</p>`);
    paragraphBuffer = [];
  };

  const flushHeading = (title) => {
    flushUnorderedList();
    flushOrderedList();
    flushParagraph();
    chunks.push(`<h5>${escapeHtml(title)}</h5>`);
  };

  lines.forEach((line) => {
    if (!line.trim()) {
      flushUnorderedList();
      flushOrderedList();
      flushParagraph();
      return;
    }

    // Sub-heading (H3 or deeper within a section)
    const headerMatch = line.match(/^#{3,6}\s+(.*)$/);
    if (headerMatch) {
      flushHeading(headerMatch[1].trim());
      return;
    }

    // Unordered list item (- text)
    if (/^\s*-\s+/.test(line)) {
      flushOrderedList();
      flushParagraph();
      unorderedListItems.push(line.replace(/^\s*-\s+/, "").trim());
      return;
    }

    // Ordered list item (1. text)
    if (/^\s*\d+\.\s+/.test(line)) {
      flushUnorderedList();
      flushParagraph();
      orderedListItems.push(line.replace(/^\s*\d+\.\s+/, "").trim());
      return;
    }

    // Plain paragraph text
    flushUnorderedList();
    flushOrderedList();
    paragraphBuffer.push(line.trim());
  });

  flushUnorderedList();
  flushOrderedList();
  flushParagraph();
  return chunks.join("");
}

// ─── SUMMARY BODY RENDERING ───────────────────────────────────────────────────

// Renders a summary file (summary.md) into HTML, suppressing redundant section
// titles like "Summary" or "<Entry Title> Summary" since those are already shown
// in the UI heading above the summary panel.
export function renderSummaryBody(raw, entryTitle) {
  const sections = parseSections(raw);

  return sections.map((section) => {
    const normalizedTitle = section.title.trim().toLowerCase();
    const redundantTitle =
      normalizedTitle === `${entryTitle} summary`.toLowerCase() ||
      normalizedTitle === "summary";
    const heading = redundantTitle ? "" : `<h5>${escapeHtml(section.title)}</h5>`;
    return `<div class="summary-block">${heading}${renderSectionBody(section.lines)}</div>`;
  }).join("");
}

// ─── INLINE MARKDOWN ──────────────────────────────────────────────────────────

// Renders inline Markdown within a single line of text into an HTML string.
// Handles: `code spans` and [link text](url).
// All other text is HTML-escaped for safety.
function renderInlineMarkdown(text) {
  // Matches either `code` or [label](href)
  const pattern = /`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  let result = "";
  let cursor = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    result += escapeHtml(text.slice(cursor, match.index));

    if (match[1] !== undefined) {
      // Backtick code span
      result += `<code>${escapeHtml(match[1])}</code>`;
    } else {
      // Markdown link
      const label = escapeHtml(match[2]);
      const href = match[3].trim();
      if (isRenderableHref(href)) {
        result += `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${label}</a>`;
      } else {
        // Non-web hrefs (e.g. bare entry ids) are shown as text + code
        result += `${label} <code>${escapeHtml(href)}</code>`;
      }
    }

    cursor = pattern.lastIndex;
  }

  result += escapeHtml(text.slice(cursor));
  return result;
}

// Returns true if an href looks like a real URL or relative file path worth linking.
// Keeps internal cross-reference hrefs (plain strings without slashes) from becoming broken links.
function isRenderableHref(href) {
  return /^(https?:\/\/|\.{0,2}\/|[^:\s)]+\.[^:\s)]+(?:\/.*)?$)/i.test(href);
}

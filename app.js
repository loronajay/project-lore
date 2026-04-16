// ─── APP ENTRY POINT ──────────────────────────────────────────────────────────
// This file wires everything together: it boots the app, binds all UI events,
// and exposes the top-level render() call that refreshes the whole page at once.
//
// The app is split across six other files:
//   config.js   — entry list, category labels, gallery images, repo slug
//   state.js    — runtime state, DOM element refs, query helpers
//   utils.js    — pure helpers (escaping, formatting, file fetching)
//   markdown.js — Markdown parsing and HTML rendering
//   notes.js    — note save/load/export/import, GitHub issue flow
//   render.js   — all DOM-writing render functions

import { ENTRY_CONFIG } from "./config.js";
import { state, elements } from "./state.js";
import { fetchText, getSummarySource, splitTags } from "./utils.js";
import { parseSections, extractTbdItems } from "./markdown.js";
import { saveNote, persistTheme, exportNotes, importNotes, sendAllNotesToGitHub } from "./notes.js";
import {
  applyTheme,
  renderMode,
  renderMobileNav,
  renderCategoryFilters,
  renderEntryList,
  renderActiveEntry,
  renderNotes,
  renderTbdDashboard,
  populateEntrySelect,
  closeGalleryDialog
} from "./render.js";

// ─── BOOT ─────────────────────────────────────────────────────────────────────

// Fetches all source files, parses them, then renders the initial UI.
// This runs once when the page loads.
async function boot() {
  applyTheme();

  // Load all entries in parallel — each one fetches its source file and optional summary
  state.entries = await Promise.all(
    ENTRY_CONFIG.map(async (entry) => {
      const raw = await fetchText(entry.source);
      const summarySource = getSummarySource(entry);
      const summaryRaw = summarySource ? await fetchText(summarySource) : "";
      return {
        ...entry,
        raw,
        sections: parseSections(raw),
        tbdItems: extractTbdItems(raw),
        summarySource,
        summaryRaw
      };
    })
  );

  renderCategoryFilters();
  populateEntrySelect();
  bindEvents();
  render();
}

// ─── EVENT BINDING ────────────────────────────────────────────────────────────

// Attaches all UI event listeners.
// Most events update one piece of state then call the minimum render functions needed.
function bindEvents() {
  // Search input — filters the entry list in real time
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderEntryList();
  });

  // Theme toggle — switches between dark and light and persists the choice
  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    persistTheme();
    applyTheme();
  });

  // Mobile sidebar drawer toggle
  elements.mobileNavToggle.addEventListener("click", () => {
    state.mobileNavOpen = !state.mobileNavOpen;
    renderMobileNav();
  });

  // Close the mobile drawer automatically when the viewport widens past the breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      state.mobileNavOpen = false;
    }
    renderMobileNav();
  });

  // Mode buttons (Read / Workbench)
  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      renderMode();
    });
  });

  // Quick note form (sidebar, visible in Read mode)
  elements.quickNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveNote({
      title: elements.quickNoteTitle.value.trim() || "Quick note",
      body: elements.quickNoteBody.value.trim(),
      entryId: state.activeEntryId,
      status: elements.quickNoteStatus.value,
      tags: splitTags(elements.quickNoteTags.value)
    });
    elements.quickNoteForm.reset();
    renderNotes(); // refresh the notes list after saving
  });

  // Full note form (Workbench panel)
  elements.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveNote({
      title: elements.noteTitle.value.trim() || "Untitled note",
      body: elements.noteBody.value.trim(),
      entryId: elements.noteEntrySelect.value,
      status: elements.noteStatus.value,
      tags: splitTags(elements.noteTags.value)
    });
    elements.noteForm.reset();
    elements.noteEntrySelect.value = state.activeEntryId; // restore the linked-entry selection
    renderNotes();
  });

  // Expand / Collapse All toggle for the entry section accordion
  elements.collapseButton.addEventListener("click", () => {
    const openSections = elements.entryContent.querySelectorAll("details");
    const shouldCollapse = Array.from(openSections).some((section) => section.open);
    openSections.forEach((section) => {
      section.open = !shouldCollapse;
    });
    elements.collapseButton.textContent = shouldCollapse ? "Expand All" : "Collapse All";
  });

  // "Open Questions" button — jumps to the Workbench TBD dashboard
  elements.showTbdButton.addEventListener("click", () => {
    state.mode = "workbench";
    renderMode();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // "All Notes" button — jumps to the Workbench panel
  elements.showAllNotesButton.addEventListener("click", () => {
    state.mode = "workbench";
    renderMode();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Workbench toolbar buttons
  elements.sendAllNotesButton.addEventListener("click", sendAllNotesToGitHub);
  elements.exportNotesButton.addEventListener("click", exportNotes);

  // Import: re-render notes after a successful import
  elements.importNotesInput.addEventListener("change", (event) => {
    importNotes(event).then((success) => {
      if (success) renderNotes();
    });
  });

  // Gallery dialog
  elements.galleryDialogClose.addEventListener("click", closeGalleryDialog);
  elements.galleryDialog.addEventListener("click", (event) => {
    // Close when clicking the backdrop (not the image itself)
    if (event.target === elements.galleryDialog) {
      closeGalleryDialog();
    }
  });
}

// ─── TOP-LEVEL RENDER ─────────────────────────────────────────────────────────

// Refreshes all UI panels at once. Use for mode switches or navigation.
// For targeted updates (e.g. after saving a note), call the specific render
// function directly instead to avoid unnecessary DOM churn.
function render() {
  applyTheme();
  renderMode();
  renderMobileNav();
  renderEntryList();
  renderActiveEntry();
  renderNotes();
  renderTbdDashboard();
}

// ─── START ────────────────────────────────────────────────────────────────────

boot();

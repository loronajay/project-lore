// ─── STATE & ELEMENTS ─────────────────────────────────────────────────────────
// This file holds two things:
//   - `state` — the single source of truth for all runtime app state.
//     Every piece of data the app needs to render is stored here.
//   - `elements` — a cache of DOM element references so the rest of the code
//     doesn't have to call getElementById repeatedly.
//
// You shouldn't need to change this file often. To add a new piece of state,
// add a key to the `state` object below. To reference a new DOM element,
// add it to `elements` using the element's id from index.html.

import { NOTES_KEY, THEME_KEY, CATEGORY_LABELS } from "./config.js";

// Load notes from localStorage on startup.
function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
  } catch {
    return [];
  }
}

// Load the saved theme preference, defaulting to dark.
function loadTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

// ─── RUNTIME STATE ────────────────────────────────────────────────────────────
// All mutable app state lives here. Other modules import this object and read
// or write its properties directly — there's no getter/setter layer.
export const state = {
  mode: "read",                        // "read" | "workbench"
  activeCategory: "all",               // currently selected filter chip
  activeEntryId: "overview",           // id of the entry shown in the reader
  summaryVisibleForEntryId: null,      // which entry's summary panel is open (null = none)
  search: "",                          // current search string
  entries: [],                         // populated by boot() after fetching all source files
  notes: loadNotes(),                  // persisted workbench notes from localStorage
  mobileNavOpen: false,                // whether the mobile sidebar drawer is open
  theme: loadTheme()                   // "dark" | "light"
};

// ─── DOM ELEMENT CACHE ────────────────────────────────────────────────────────
// All elements the app touches, looked up once at startup.
// If you add a new interactive element to index.html, add its reference here.
export const elements = {
  heroTitle: document.getElementById("heroTitle"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  themeToggle: document.getElementById("themeToggle"),
  mobileNavToggle: document.getElementById("mobileNavToggle"),
  mobileNavContent: document.getElementById("mobileNavContent"),
  categoryFilters: document.getElementById("categoryFilters"),
  entryList: document.getElementById("entryList"),
  searchInput: document.getElementById("searchInput"),
  entryCategory: document.getElementById("entryCategory"),
  entrySource: document.getElementById("entrySource"),
  entryTitle: document.getElementById("entryTitle"),
  entryDescription: document.getElementById("entryDescription"),
  entryActions: document.getElementById("entryActions"),
  entryRelated: document.getElementById("entryRelated"),
  entrySummarySection: document.getElementById("entrySummarySection"),
  entrySummaryLabel: document.getElementById("entrySummaryLabel"),
  entrySummaryContent: document.getElementById("entrySummaryContent"),
  entryGallerySection: document.getElementById("entryGallerySection"),
  entryGalleryLabel: document.getElementById("entryGalleryLabel"),
  entryGallery: document.getElementById("entryGallery"),
  galleryDialog: document.getElementById("galleryDialog"),
  galleryDialogImage: document.getElementById("galleryDialogImage"),
  galleryDialogCaption: document.getElementById("galleryDialogCaption"),
  galleryDialogClose: document.getElementById("galleryDialogClose"),
  entryContent: document.getElementById("entryContent"),
  tbdList: document.getElementById("tbdList"),
  tbdCount: document.getElementById("tbdCount"),
  quickNoteForm: document.getElementById("quickNoteForm"),
  quickNoteTitle: document.getElementById("quickNoteTitle"),
  quickNoteBody: document.getElementById("quickNoteBody"),
  quickNoteStatus: document.getElementById("quickNoteStatus"),
  quickNoteTags: document.getElementById("quickNoteTags"),
  modeButtons: document.querySelectorAll(".mode-button"),
  readPanel: document.getElementById("readPanel"),
  workbenchPanel: document.getElementById("workbenchPanel"),
  noteForm: document.getElementById("noteForm"),
  noteTitle: document.getElementById("noteTitle"),
  noteBody: document.getElementById("noteBody"),
  noteEntrySelect: document.getElementById("noteEntrySelect"),
  noteStatus: document.getElementById("noteStatus"),
  noteTags: document.getElementById("noteTags"),
  notesList: document.getElementById("notesList"),
  tbdDashboard: document.getElementById("tbdDashboard"),
  collapseButton: document.getElementById("collapseButton"),
  showTbdButton: document.getElementById("showTbdButton"),
  showAllNotesButton: document.getElementById("showAllNotesButton"),
  sendAllNotesButton: document.getElementById("sendAllNotesButton"),
  exportNotesButton: document.getElementById("exportNotesButton"),
  importNotesInput: document.getElementById("importNotesInput"),
  noteTemplate: document.getElementById("noteTemplate")
};

// ─── STATE QUERY HELPERS ──────────────────────────────────────────────────────
// These read from `state` and are used by render functions to know what to show.

// Returns the currently active entry object, or the first entry as a fallback.
export function getActiveEntry() {
  return state.entries.find((entry) => entry.id === state.activeEntryId) || state.entries[0];
}

// Returns the subset of entries that match the current category filter and search string.
export function getFilteredEntries() {
  return state.entries.filter((entry) => {
    const categoryMatch = state.activeCategory === "all" || entry.category === state.activeCategory;
    const searchMatch = !state.search ||
      entry.title.toLowerCase().includes(state.search) ||
      entry.description.toLowerCase().includes(state.search) ||
      entry.raw.toLowerCase().includes(state.search);
    return categoryMatch && searchMatch;
  });
}

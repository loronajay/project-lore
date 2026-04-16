// ─── RENDER FUNCTIONS ─────────────────────────────────────────────────────────
// All functions that write to the DOM live here.
// Each function reads from `state` and writes to `elements` — they never take
// the data they need as parameters. To change what something displays, change
// the state first, then call the relevant render function.
//
// render() in app.js is the top-level call that refreshes everything at once.
// Individual render functions are called for targeted updates (e.g. renderNotes
// after saving a note, without re-rendering the whole page).

import { CATEGORY_LABELS, GALLERY_CONFIG } from "./config.js";
import { state, elements, getActiveEntry, getFilteredEntries } from "./state.js";
import { escapeHtml, statusLabel, isUnavailableText } from "./utils.js";
import { parseSections, renderSectionBody, renderSummaryBody } from "./markdown.js";
import { persistNotes, openGitHubIssueForNotes } from "./notes.js";

// ─── THEME ────────────────────────────────────────────────────────────────────

// Applies state.theme to the document and updates the toggle button label.
export function applyTheme() {
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  elements.themeToggle.textContent = isDark ? "Light Theme" : "Dark Theme";
  elements.themeToggle.setAttribute("aria-pressed", String(isDark));
}

// ─── MODE ─────────────────────────────────────────────────────────────────────

// Shows the Read or Workbench panel based on state.mode,
// and marks the matching mode button as active.
export function renderMode() {
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  elements.readPanel.classList.toggle("is-visible", state.mode === "read");
  elements.workbenchPanel.classList.toggle("is-visible", state.mode === "workbench");
}

// ─── MOBILE NAV ───────────────────────────────────────────────────────────────

// Shows or hides the sidebar drawer on mobile based on state.mobileNavOpen.
// On desktop, the sidebar is always visible regardless of that flag.
export function renderMobileNav() {
  const isMobile = window.innerWidth <= 1080;
  if (!isMobile) {
    elements.mobileNavContent.hidden = false;
    elements.mobileNavToggle.setAttribute("aria-expanded", "true");
    return;
  }

  elements.mobileNavContent.hidden = !state.mobileNavOpen;
  elements.mobileNavToggle.setAttribute("aria-expanded", String(state.mobileNavOpen));
  elements.mobileNavToggle.textContent = state.mobileNavOpen ? "Hide Library" : "Browse Library";
}

// ─── CATEGORY FILTERS ─────────────────────────────────────────────────────────

// Renders the filter chip buttons from CATEGORY_LABELS.
// To add a new filter, add the category to CATEGORY_LABELS in config.js.
export function renderCategoryFilters() {
  elements.categoryFilters.innerHTML = "";
  Object.keys(CATEGORY_LABELS).forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent = CATEGORY_LABELS[category];
    button.classList.toggle("is-active", state.activeCategory === category);
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderCategoryFilters();
      renderEntryList();
    });
    elements.categoryFilters.appendChild(button);
  });
}

// ─── ENTRY LIST ───────────────────────────────────────────────────────────────

// Renders the sidebar entry buttons filtered by category and search string.
export function renderEntryList() {
  const visibleEntries = getFilteredEntries();
  elements.entryList.innerHTML = "";

  if (!visibleEntries.length) {
    elements.entryList.innerHTML = '<div class="empty-state">No entries match this filter yet.</div>';
    return;
  }

  visibleEntries.forEach((entry) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "entry-button";
    button.classList.toggle("is-active", entry.id === state.activeEntryId);
    button.innerHTML = `${entry.title}<small>${CATEGORY_LABELS[entry.category] || entry.category}</small>`;
    button.addEventListener("click", () => {
      state.activeEntryId = entry.id;
      // Keep the summary open if you were already viewing this entry
      if (state.summaryVisibleForEntryId !== entry.id) {
        state.summaryVisibleForEntryId = null;
      }
      if (window.innerWidth <= 1080) {
        state.mobileNavOpen = false;
      }
      renderEntryList();
      renderMobileNav();
      renderActiveEntry();
    });
    elements.entryList.appendChild(button);
  });
}

// ─── ACTIVE ENTRY ─────────────────────────────────────────────────────────────

// Re-renders everything in the main content area for the currently selected entry.
export function renderActiveEntry() {
  const entry = getActiveEntry();
  if (!entry) return;

  elements.heroTitle.textContent = entry.title;
  elements.heroSubtitle.textContent = entry.description;
  elements.entryCategory.textContent = CATEGORY_LABELS[entry.category] || entry.category;
  elements.entrySource.innerHTML = `<a href="${entry.source}" target="_blank" rel="noreferrer">Open source file</a>`;
  elements.entryTitle.textContent = entry.title;
  elements.entryDescription.textContent = entry.description;
  elements.noteEntrySelect.value = entry.id;

  renderEntryActions(entry);
  renderRelatedLinks(entry);
  renderSummary(entry);
  renderGallery(entry);
  renderEntrySections(entry);
  renderEntryTbd(entry);
  renderNotes();
}

// ─── RELATED LINKS ────────────────────────────────────────────────────────────

// Renders the "Related" link buttons below the entry header.
// Clicking a related link navigates to that entry.
export function renderRelatedLinks(entry) {
  elements.entryRelated.innerHTML = "";
  (entry.related || []).forEach((relatedId) => {
    const relatedEntry = state.entries.find((item) => item.id === relatedId);
    if (!relatedEntry) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "related-link";
    button.textContent = relatedEntry.title;
    button.addEventListener("click", () => {
      state.activeEntryId = relatedEntry.id;
      state.mode = "read";
      if (window.innerWidth <= 1080) {
        state.mobileNavOpen = false;
      }
      // Full re-render since mode may have changed
      applyTheme();
      renderMode();
      renderMobileNav();
      renderEntryList();
      renderActiveEntry();
      renderNotes();
      renderTbdDashboard();
    });
    elements.entryRelated.appendChild(button);
  });
}

// ─── ENTRY ACTIONS (SUMMARY TOGGLE) ───────────────────────────────────────────

// Renders the "Read Summary" / "Hide Summary" toggle button if a summary file exists.
// The button is omitted entirely if there's no summary available for this entry.
export function renderEntryActions(entry) {
  elements.entryActions.innerHTML = "";
  if (!entry.summaryRaw || isUnavailableText(entry.summaryRaw)) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "related-link";
  button.textContent = state.summaryVisibleForEntryId === entry.id ? "Hide Summary" : "Read Summary";
  button.addEventListener("click", () => {
    state.summaryVisibleForEntryId = state.summaryVisibleForEntryId === entry.id ? null : entry.id;
    renderEntryActions(entry);
    renderSummary(entry);
  });
  elements.entryActions.appendChild(button);
}

// ─── SUMMARY PANEL ────────────────────────────────────────────────────────────

// Shows or hides the summary panel based on whether the user has toggled it open.
export function renderSummary(entry) {
  const hasVisibleSummary = state.summaryVisibleForEntryId === entry.id &&
    entry.summaryRaw && !isUnavailableText(entry.summaryRaw);
  elements.entrySummarySection.hidden = !hasVisibleSummary;
  elements.entrySummaryContent.innerHTML = "";

  if (!hasVisibleSummary) return;

  elements.entrySummaryLabel.textContent = `Pulled from ${entry.summarySource}.`;
  elements.entrySummaryContent.innerHTML = renderSummaryBody(entry.summaryRaw, entry.title);
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────

// Renders the concept-art gallery for the active entry.
// Images are defined in GALLERY_CONFIG in config.js.
export function renderGallery(entry) {
  const galleryItems = GALLERY_CONFIG[entry.id] || [];
  elements.entryGallery.innerHTML = "";

  if (!galleryItems.length) {
    elements.entryGallerySection.hidden = true;
    return;
  }

  elements.entryGallerySection.hidden = false;
  elements.entryGalleryLabel.textContent =
    `${galleryItems.length} image${galleryItems.length === 1 ? "" : "s"} available for this entry.`;

  galleryItems.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";
    figure.innerHTML = `
      <button class="gallery-button" type="button" aria-label="Expand ${escapeHtml(item.label)}">
        <img src="${item.src}" alt="${escapeHtml(item.label)}" loading="lazy">
      </button>
      <figcaption>${escapeHtml(item.label)}</figcaption>
    `;
    figure.querySelector(".gallery-button").addEventListener("click", () => openGalleryDialog(item));
    elements.entryGallery.appendChild(figure);
  });
}

// Opens the full-screen image dialog for a single gallery item.
export function openGalleryDialog(item) {
  elements.galleryDialogImage.src = item.src;
  elements.galleryDialogImage.alt = item.label;
  elements.galleryDialogCaption.textContent = item.label;
  if (typeof elements.galleryDialog.showModal === "function") {
    elements.galleryDialog.showModal();
  }
}

// Closes the full-screen image dialog.
export function closeGalleryDialog() {
  elements.galleryDialog.close();
}

// ─── ENTRY SECTIONS (COLLAPSIBLE) ─────────────────────────────────────────────

// Renders the entry's Markdown content as collapsible <details> sections.
// Each top-level heading in the source file becomes one expandable block.
export function renderEntrySections(entry) {
  elements.entryContent.innerHTML = "";
  if (!entry.sections.length) {
    elements.entryContent.innerHTML =
      '<div class="empty-state">No structured sections parsed yet. Open the source file directly for now.</div>';
    return;
  }

  entry.sections.forEach((section) => {
    const wrapper = document.createElement("details");
    wrapper.className = "content-section";
    wrapper.open = false;

    const summary = document.createElement("summary");
    summary.textContent = section.title;

    const body = document.createElement("div");
    body.className = "section-body";
    body.innerHTML = renderSectionBody(section.lines);

    wrapper.append(summary, body);
    elements.entryContent.appendChild(wrapper);
  });

  // Reset the collapse button label whenever we load a new entry
  elements.collapseButton.textContent = "Expand All";
}

// ─── TBD LIST (SIDEBAR) ───────────────────────────────────────────────────────

// Renders the "Open Questions" list in the sidebar for the active entry.
// TBD items are extracted from "## TBD" sections in the source Markdown.
export function renderEntryTbd(entry) {
  elements.tbdList.innerHTML = "";
  elements.tbdCount.textContent = String(entry.tbdItems.length);

  if (!entry.tbdItems.length) {
    elements.tbdList.innerHTML =
      '<div class="empty-state">No explicit TBD bullets in this entry right now.</div>';
    return;
  }

  entry.tbdItems.forEach((item) => {
    const block = document.createElement("article");
    block.className = "mini-item";
    block.innerHTML = `<h4>${entry.title}</h4><p>${escapeHtml(item)}</p>`;
    elements.tbdList.appendChild(block);
  });
}

// ─── TBD DASHBOARD (WORKBENCH) ────────────────────────────────────────────────

// Renders the full TBD dashboard in the Workbench panel,
// collecting unresolved items from every tracked entry.
export function renderTbdDashboard() {
  const allTbd = state.entries.flatMap((entry) =>
    entry.tbdItems.map((item) => ({ entryId: entry.id, entryTitle: entry.title, item }))
  );

  elements.tbdDashboard.innerHTML = "";
  if (!allTbd.length) {
    elements.tbdDashboard.innerHTML =
      '<div class="empty-state">No unresolved bullets were found in the tracked docs.</div>';
    return;
  }

  allTbd.forEach((item) => {
    const card = document.createElement("article");
    card.className = "note-card";
    card.innerHTML = `
      <div class="note-topline">
        <div>
          <h4 class="note-title">${escapeHtml(item.entryTitle)}</h4>
          <p class="note-meta">TBD surfaced from source docs</p>
        </div>
        <button class="ghost-button" type="button">Open</button>
      </div>
      <p class="note-body">${escapeHtml(item.item)}</p>
    `;
    card.querySelector("button").addEventListener("click", () => {
      state.activeEntryId = item.entryId;
      state.mode = "read";
      // Full re-render to switch back to the Read panel
      applyTheme();
      renderMode();
      renderMobileNav();
      renderEntryList();
      renderActiveEntry();
      renderNotes();
      renderTbdDashboard();
    });
    elements.tbdDashboard.appendChild(card);
  });
}

// ─── NOTES LIST ───────────────────────────────────────────────────────────────

// Renders saved notes.
// In Read mode: shows only notes attached to the active entry.
// In Workbench mode: shows all notes, sorted newest-first.
export function renderNotes() {
  const activeEntry = getActiveEntry();
  const activeNotes = state.notes.filter((note) => note.entryId === activeEntry.id);
  const noteGroups = state.mode === "workbench" ? state.notes : activeNotes;

  elements.notesList.innerHTML = "";
  if (!noteGroups.length) {
    elements.notesList.innerHTML =
      '<div class="empty-state">No saved notes yet. Use the forms on this page to start capturing story ideas.</div>';
    return;
  }

  noteGroups
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((note) => {
      const node = elements.noteTemplate.content.firstElementChild.cloneNode(true);
      const linkedEntry = state.entries.find((entry) => entry.id === note.entryId);

      node.querySelector(".note-title").textContent = note.title;
      node.querySelector(".note-meta").textContent =
        `${statusLabel(note.status)} | ${linkedEntry ? linkedEntry.title : "General"} | ${new Date(note.createdAt).toLocaleString()}`;
      node.querySelector(".note-body").textContent = note.body || "(No note body)";

      const tagsWrap = node.querySelector(".note-tags");
      note.tags.forEach((tag) => {
        const tagNode = document.createElement("span");
        tagNode.className = "note-tag";
        tagNode.textContent = tag;
        tagsWrap.appendChild(tagNode);
      });

      // Send this single note as a prefilled GitHub issue
      node.querySelector(".send-button").addEventListener("click", () => {
        openGitHubIssueForNotes([note]);
      });

      // Delete this note from state and re-render
      node.querySelector(".delete-button").addEventListener("click", () => {
        state.notes = state.notes.filter((item) => item.id !== note.id);
        persistNotes();
        renderNotes();
      });

      elements.notesList.appendChild(node);
    });
}

// ─── ENTRY SELECT ─────────────────────────────────────────────────────────────

// Populates the "linked entry" dropdown in the Workbench note form.
// Called once during boot after all entries are loaded.
export function populateEntrySelect() {
  elements.noteEntrySelect.innerHTML = state.entries
    .map((entry) => `<option value="${entry.id}">${entry.title}</option>`)
    .join("");
  elements.noteEntrySelect.value = state.activeEntryId;
}

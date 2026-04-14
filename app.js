const ENTRY_CONFIG = [
  { id: "overview", title: "Project Overview", category: "overview", description: "High-level project guardrails and the main architecture landing page.", source: "story-documents/architecture/README.md", related: ["world-lore", "story-rules", "full-structure"] },
  { id: "leo", title: "Leo", category: "characters", description: "Core protagonist canon, current emotional state, and locked future reveals.", source: "characters/leo/character.md", related: ["leos-father", "marshe", "richard", "act-1-outline"] },
  { id: "leos-father", title: "Leo's Father", category: "characters", description: "Warm father, hidden heir, and the sickness-era tragedy at the center of Leo's grief.", source: "characters/leos-father/character.md", related: ["leo", "richard", "king", "world-lore"] },
  { id: "richard", title: "Richard", category: "characters", description: "Silent protector, lost political steward, and feared village outcast.", source: "characters/richard/character.md", related: ["leo", "leos-father", "king", "political-motives"] },
  { id: "marshe", title: "Marshe", category: "characters", description: "Specific bully, inherited damage, and future tragedy tied to Leo.", source: "characters/marshe/character.md", related: ["leo", "leos-father", "marshes-father", "full-structure"] },
  { id: "marshes-father", title: "Marshe's Father", category: "characters", description: "Military foil, family wound, and sickness-fueled later public horror.", source: "characters/marshes-father/character.md", related: ["marshe", "leos-father", "richard", "political-motives"] },
  { id: "king", title: "The King", category: "characters", description: "Usurper, manipulator of prophecy, and architect of buried legitimacy.", source: "characters/king/character.md", related: ["leos-father", "esmeralda", "world-lore", "kingdom-lore"] },
  { id: "esmeralda", title: "Esmeralda", category: "characters", description: "Future-facing royal figure, loved daughter inside a fabricated inheritance story.", source: "characters/esmeralda/character.md", related: ["king", "richard", "kingdom-lore"] },
  { id: "world-lore", title: "World Lore", category: "world", description: "Kingdom mechanics, hidden lineage, exile history, weapons, and future prophecy.", source: "story-documents/world-lore.md", related: ["political-motives", "kingdom-lore", "story-rules"] },
  { id: "political-motives", title: "Political Motives", category: "world", description: "The pressure system under the throne, rebellion logic, and political meaning of major figures.", source: "story-documents/political-motives.md", related: ["world-lore", "king", "richard", "leos-father"] },
  { id: "story-rules", title: "Story Rules", category: "architecture", description: "Guardrails for canon, tone, character usage, and active planning discipline.", source: "story-documents/architecture/story-rules.md", related: ["overview", "full-structure", "current-handoff"] },
  { id: "full-structure", title: "Full Story Structure", category: "structure", description: "Master architecture doc for backstory, sequences, reveals, and core placements.", source: "story-documents/architecture/full-story-structure.md", related: ["act-1-outline", "current-handoff", "story-version-lore"] },
  { id: "act-1-outline", title: "Act 1 Outline", category: "structure", description: "Fast sequence outline for current screenplay progression.", source: "story-documents/architecture/act-1-outline.md", related: ["full-structure", "current-handoff", "leo"] },
  { id: "current-handoff", title: "Current Handoff", category: "structure", description: "Where the active story currently is and what reveal handling must stay locked.", source: "story-documents/architecture/current-handoff.md", related: ["act-1-outline", "story-rules", "full-structure"] },
  { id: "story-version-lore", title: "Story Version of Lore", category: "reference", description: "Prose-facing story material and remembered beats in screenplay language.", source: "story-documents/architecture/Story Version of Lore.txt", related: ["full-structure", "act-1-outline", "leo", "leos-father"] },
  { id: "kingdom-lore", title: "Story Version of Kingdom Lore", category: "reference", description: "Narrative explanation of the kingdom's theft, doctrine, and succession fracture.", source: "story-documents/architecture/Story Version of Kingdom Lore.txt", related: ["world-lore", "political-motives", "king", "leos-father"] }
];

const CATEGORY_LABELS = {
  all: "Everything",
  overview: "Overview",
  characters: "Characters",
  world: "World",
  architecture: "Architecture",
  structure: "Structure",
  reference: "Reference"
};

const GITHUB_REPO = "loronajay/project-lore";

const GALLERY_CONFIG = {
  overview: [
    { src: "world-art/castle.jfif", label: "Castle" },
    { src: "world-art/exile-village.jfif", label: "Exile Village" },
    { src: "world-art/leo-hometown.jfif", label: "Leo's Hometown" }
  ],
  leo: [
    { src: "characters/leo/concept-art/child/1.jpeg", label: "Child Leo 1" },
    { src: "characters/leo/concept-art/child/2.jpeg", label: "Child Leo 2" },
    { src: "characters/leo/concept-art/teenager/3.jpeg", label: "Teen Leo 3" },
    { src: "characters/leo/concept-art/teenager/4.jpeg", label: "Teen Leo 4" }
  ],
  "leos-father": [
    { src: "characters/leos-father/concept-art/young/download - 2026-04-13T203447.747.jpeg", label: "Young Leo's Father" },
    { src: "characters/leos-father/concept-art/young/download - 2026-04-13T203527.550.jpeg", label: "Young Leo's Father Variation" }
  ],
  richard: [
    { src: "characters/richard/concept-art/middle-aged/download - 2026-04-13T203338.427.jpeg", label: "Richard" }
  ],
  marshe: [
    { src: "characters/marshe/concept-art/teenager/download - 2026-04-13T204051.663.jpeg", label: "Teen Marshe" },
    { src: "characters/marshe/concept-art/child/download - 2026-04-13T204013.414.jpeg", label: "Child Marshe" }
  ],
  "marshes-father": [
    { src: "characters/marshes-father/concept-art/young/download - 2026-04-13T203745.730.jpeg", label: "Young Marshe's Father" },
    { src: "characters/marshes-father/concept-art/young/download - 2026-04-13T203811.113.jpeg", label: "Young Marshe's Father Variation" }
  ],
  king: [
    { src: "characters/king/concept-art/middle-aged/download - 2026-04-13T204338.083.jpeg", label: "Middle-Aged King" },
    { src: "characters/king/concept-art/old/download - 2026-04-13T204343.603.jpeg", label: "Older King" }
  ],
  esmeralda: [
    { src: "characters/esmeralda/concept-art/realistic/1.png", label: "Realistic Esmeralda 1" },
    { src: "characters/esmeralda/concept-art/realistic/2.jpeg", label: "Realistic Esmeralda 2" },
    { src: "characters/esmeralda/concept-art/cartoon/3.png", label: "Cartoon Esmeralda 3" },
    { src: "characters/esmeralda/concept-art/cartoon/4.jpeg", label: "Cartoon Esmeralda 4" }
  ],
  "world-lore": [
    { src: "world-art/castle.jfif", label: "Castle" },
    { src: "world-art/exile-village.jfif", label: "Exile Village" },
    { src: "world-art/exile-village-2.jfif", label: "Exile Village Variation" },
    { src: "world-art/leo-hometown.jfif", label: "Leo's Hometown" }
  ]
};

const NOTES_KEY = "lore-workbench-notes-v1";
const THEME_KEY = "lore-workbench-theme-v1";
const state = {
  mode: "read",
  activeCategory: "all",
  activeEntryId: "overview",
  search: "",
  entries: [],
  notes: loadNotes(),
  mobileNavOpen: false,
  theme: loadTheme()
};

const elements = {
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
  entryRelated: document.getElementById("entryRelated"),
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

boot();

async function boot() {
  applyTheme();
  state.entries = await Promise.all(
    ENTRY_CONFIG.map(async (entry) => {
      const raw = await fetchText(entry.source);
      return { ...entry, raw, sections: parseSections(raw), tbdItems: extractTbdItems(raw) };
    })
  );

  renderCategoryFilters();
  populateEntrySelect();
  bindEvents();
  render();
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderEntryList();
  });

  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    persistTheme();
    applyTheme();
  });

  elements.mobileNavToggle.addEventListener("click", () => {
    state.mobileNavOpen = !state.mobileNavOpen;
    renderMobileNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      state.mobileNavOpen = false;
    }
    renderMobileNav();
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      renderMode();
    });
  });

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
  });

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
    elements.noteEntrySelect.value = state.activeEntryId;
  });

  elements.collapseButton.addEventListener("click", () => {
    const openSections = elements.entryContent.querySelectorAll("details");
    const shouldCollapse = Array.from(openSections).some((section) => section.open);
    openSections.forEach((section) => {
      section.open = !shouldCollapse;
    });
    elements.collapseButton.textContent = shouldCollapse ? "Expand All" : "Collapse All";
  });

  elements.showTbdButton.addEventListener("click", () => {
    state.mode = "workbench";
    renderMode();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.showAllNotesButton.addEventListener("click", () => {
    state.mode = "workbench";
    renderMode();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.sendAllNotesButton.addEventListener("click", sendAllNotesToGitHub);
  elements.exportNotesButton.addEventListener("click", exportNotes);
  elements.importNotesInput.addEventListener("change", importNotes);
  elements.galleryDialogClose.addEventListener("click", closeGalleryDialog);
  elements.galleryDialog.addEventListener("click", (event) => {
    if (event.target === elements.galleryDialog) {
      closeGalleryDialog();
    }
  });
}

function render() {
  applyTheme();
  renderMode();
  renderMobileNav();
  renderEntryList();
  renderActiveEntry();
  renderNotes();
  renderTbdDashboard();
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  elements.themeToggle.textContent = isDark ? "Light Theme" : "Dark Theme";
  elements.themeToggle.setAttribute("aria-pressed", String(isDark));
}

function renderMode() {
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  elements.readPanel.classList.toggle("is-visible", state.mode === "read");
  elements.workbenchPanel.classList.toggle("is-visible", state.mode === "workbench");
}

function renderCategoryFilters() {
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

function renderEntryList() {
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

function renderActiveEntry() {
  const entry = getActiveEntry();
  if (!entry) {
    return;
  }

  elements.heroTitle.textContent = entry.title;
  elements.heroSubtitle.textContent = entry.description;
  elements.entryCategory.textContent = CATEGORY_LABELS[entry.category] || entry.category;
  elements.entrySource.innerHTML = `<a href="${entry.source}" target="_blank" rel="noreferrer">Open source file</a>`;
  elements.entryTitle.textContent = entry.title;
  elements.entryDescription.textContent = entry.description;
  elements.noteEntrySelect.value = entry.id;

  renderRelatedLinks(entry);
  renderGallery(entry);
  renderEntrySections(entry);
  renderEntryTbd(entry);
  renderNotes();
}

function renderMobileNav() {
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

function renderRelatedLinks(entry) {
  elements.entryRelated.innerHTML = "";
  (entry.related || []).forEach((relatedId) => {
    const relatedEntry = state.entries.find((item) => item.id === relatedId);
    if (!relatedEntry) {
      return;
    }
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
      render();
    });
    elements.entryRelated.appendChild(button);
  });
}

function renderGallery(entry) {
  const galleryItems = GALLERY_CONFIG[entry.id] || [];
  elements.entryGallery.innerHTML = "";

  if (!galleryItems.length) {
    elements.entryGallerySection.hidden = true;
    return;
  }

  elements.entryGallerySection.hidden = false;
  elements.entryGalleryLabel.textContent = `${galleryItems.length} image${galleryItems.length === 1 ? "" : "s"} available for this entry.`;

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

function openGalleryDialog(item) {
  elements.galleryDialogImage.src = item.src;
  elements.galleryDialogImage.alt = item.label;
  elements.galleryDialogCaption.textContent = item.label;
  if (typeof elements.galleryDialog.showModal === "function") {
    elements.galleryDialog.showModal();
  }
}

function closeGalleryDialog() {
  elements.galleryDialog.close();
}

function renderEntrySections(entry) {
  elements.entryContent.innerHTML = "";
  if (!entry.sections.length) {
    elements.entryContent.innerHTML = '<div class="empty-state">No structured sections parsed yet. Open the source file directly for now.</div>';
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

  elements.collapseButton.textContent = "Expand All";
}

function renderEntryTbd(entry) {
  elements.tbdList.innerHTML = "";
  elements.tbdCount.textContent = String(entry.tbdItems.length);

  if (!entry.tbdItems.length) {
    elements.tbdList.innerHTML = '<div class="empty-state">No explicit TBD bullets in this entry right now.</div>';
    return;
  }

  entry.tbdItems.forEach((item) => {
    const block = document.createElement("article");
    block.className = "mini-item";
    block.innerHTML = `<h4>${entry.title}</h4><p>${escapeHtml(item)}</p>`;
    elements.tbdList.appendChild(block);
  });
}

function renderTbdDashboard() {
  const allTbd = state.entries.flatMap((entry) =>
    entry.tbdItems.map((item) => ({ entryId: entry.id, entryTitle: entry.title, item }))
  );

  elements.tbdDashboard.innerHTML = "";
  if (!allTbd.length) {
    elements.tbdDashboard.innerHTML = '<div class="empty-state">No unresolved bullets were found in the tracked docs.</div>';
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
      render();
    });
    elements.tbdDashboard.appendChild(card);
  });
}

function renderNotes() {
  const activeEntry = getActiveEntry();
  const activeNotes = state.notes.filter((note) => note.entryId === activeEntry.id);
  const noteGroups = state.mode === "workbench" ? state.notes : activeNotes;

  elements.notesList.innerHTML = "";
  if (!noteGroups.length) {
    elements.notesList.innerHTML = '<div class="empty-state">No saved notes yet. Use the forms on this page to start capturing story ideas.</div>';
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

      node.querySelector(".send-button").addEventListener("click", () => {
        openGitHubIssueForNotes([note]);
      });

      node.querySelector(".delete-button").addEventListener("click", () => {
        state.notes = state.notes.filter((item) => item.id !== note.id);
        persistNotes();
        renderNotes();
      });

      elements.notesList.appendChild(node);
    });
}

function populateEntrySelect() {
  elements.noteEntrySelect.innerHTML = state.entries
    .map((entry) => `<option value="${entry.id}">${entry.title}</option>`)
    .join("");
  elements.noteEntrySelect.value = state.activeEntryId;
}

function saveNote({ title, body, entryId, status, tags }) {
  if (!body) {
    return;
  }

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
  renderNotes();
}

function persistNotes() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(state.notes));
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
  } catch {
    return [];
  }
}

function persistTheme() {
  localStorage.setItem(THEME_KEY, state.theme);
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

function exportNotes() {
  const blob = new Blob([JSON.stringify(state.notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "lore-workbench-notes.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function sendAllNotesToGitHub() {
  if (!state.notes.length) {
    alert("There are no saved notes to send yet.");
    return;
  }
  openGitHubIssueForNotes(state.notes);
}

function openGitHubIssueForNotes(notes) {
  const issue = buildGitHubIssue(notes);
  const url = new URL(`https://github.com/${GITHUB_REPO}/issues/new`);
  url.searchParams.set("title", issue.title);
  url.searchParams.set("body", issue.body);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

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

function importNotes(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  file.text().then((text) => {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      state.notes = parsed;
      persistNotes();
      renderNotes();
    }
  }).catch(() => {
    alert("That note export could not be imported.");
  }).finally(() => {
    event.target.value = "";
  });
}

function getFilteredEntries() {
  return state.entries.filter((entry) => {
    const categoryMatch = state.activeCategory === "all" || entry.category === state.activeCategory;
    const searchMatch = !state.search ||
      entry.title.toLowerCase().includes(state.search) ||
      entry.description.toLowerCase().includes(state.search) ||
      entry.raw.toLowerCase().includes(state.search);
    return categoryMatch && searchMatch;
  });
}

function getActiveEntry() {
  return state.entries.find((entry) => entry.id === state.activeEntryId) || state.entries[0];
}

function parseSections(raw) {
  const lines = raw.split(/\r?\n/);
  const sections = [];
  let current = { title: "Overview", lines: [] };

  lines.forEach((line) => {
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      if (current.lines.length) {
        sections.push(current);
      }
      current = { title: headerMatch[2].trim(), lines: [] };
      return;
    }

    if (!line.trim() && current.lines.length && current.lines[current.lines.length - 1] === "") {
      return;
    }

    current.lines.push(line);
  });

  if (current.lines.length) {
    sections.push(current);
  }

  return sections.filter((section) => section.lines.some((line) => line.trim()));
}

function extractTbdItems(raw) {
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

function renderSectionBody(lines) {
  const chunks = [];
  let listItems = [];
  let paragraphBuffer = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    chunks.push(`<ul>${listItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) {
      return;
    }
    chunks.push(`<p>${escapeHtml(paragraphBuffer.join(" "))}</p>`);
    paragraphBuffer = [];
  };

  lines.forEach((line) => {
    if (!line.trim()) {
      flushList();
      flushParagraph();
      return;
    }

    if (/^\s*-\s+/.test(line)) {
      flushParagraph();
      listItems.push(line.replace(/^\s*-\s+/, "").trim());
      return;
    }

    flushList();
    paragraphBuffer.push(line.trim());
  });

  flushList();
  flushParagraph();
  return chunks.join("");
}

async function fetchText(path) {
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

function splitTags(value) {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function statusLabel(status) {
  switch (status) {
    case "exploring":
      return "Exploring";
    case "locked":
      return "Locked";
    default:
      return "Idea";
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/*
  Three.js 100 Drills - exercise launcher
  ------------------------------------------------------------
  You do not need to edit this file.
  Your code goes in src/exNN.js; the model answers live in solutions/solNN.js.

  The state lives in the URL query (a hash also works).
    nothing    -> the index of all 100 exercises (the entry point)
    ?q=12      -> starter code for exercise 12
    ?q=12&a=1  -> model answer for exercise 12
*/
import "./launcher.css";
import exercises from "./exercises.json";

// Vite glob import. Each module is only fetched once it is actually called.
const starters = import.meta.glob("./src/ex*.js");
const solutions = import.meta.glob("./solutions/sol*.js");

const TOTAL = exercises.length;
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function readState() {
  // StackBlitz passes the selection in as ?initialpath=/?q=12.
  // The hash is a fallback for anyone switching by hand.
  const search = new URLSearchParams(location.search);
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const get = (key) => search.get(key) ?? hash.get(key);

  const raw = get("q");
  if (raw === null || raw === "") return { no: null, answer: false };

  const parsed = Number.parseInt(raw, 10);
  const no = Number.isNaN(parsed) ? 1 : Math.min(TOTAL, Math.max(1, parsed));
  return { no, answer: get("a") === "1" };
}

// Always switch by navigating, so no WebGL context or event listener from the
// previous exercise is left behind.
function go(no, answer) {
  location.href = answer ? `?q=${no}&a=1` : `?q=${no}`;
}

function goIndex() {
  location.href = location.pathname;
}

const state = readState();

// ---- Entry point: the exercise index ------------------------------
function renderIndex() {
  document.title = "Three.js 100 Drills";

  const page = document.createElement("div");
  page.className = "tj-index";
  page.innerHTML = `
    <h1>Three.js 100 Drills</h1>
    <p class="tj-lead">Pick the exercise you want to work on.</p>
    <p class="tj-lead">
      Write your code in <code>src/exNN.js</code> in the editor on the left.
      If you get stuck, the panel at the top right shows the model answer.
    </p>
    <input class="tj-search" type="search"
           placeholder="Filter by number or keyword (e.g. 35 / shader / texture)"
           autocomplete="off" />
    <div class="tj-grid">
      ${exercises
        .map(
          (e) => `
        <a class="tj-card" href="?q=${e.no}" data-title="${esc(e.title)}" data-no="${e.no}">
          <span class="tj-no">${e.no}</span>
          <span class="tj-name">${esc(e.title)}</span>
        </a>`
        )
        .join("")}
    </div>
    <p class="tj-empty" hidden>No exercise matches that filter.</p>
  `;
  document.body.appendChild(page);

  const cards = [...page.querySelectorAll(".tj-card")];
  const empty = page.querySelector(".tj-empty");

  page.querySelector(".tj-search").addEventListener("input", (event) => {
    const q = event.currentTarget.value.trim().toLowerCase();
    let shown = 0;
    for (const card of cards) {
      const hit =
        !q ||
        card.dataset.no === q ||
        card.dataset.no.startsWith(q) ||
        card.dataset.title.toLowerCase().includes(q);
      card.hidden = !hit;
      if (hit) shown += 1;
    }
    empty.hidden = shown > 0;
  });
}

if (state.no === null) {
  renderIndex();
} else {
  renderExercise();
}

// ---- The exercise view --------------------------------------------
function renderExercise() {
  const entry = exercises.find((e) => e.no === state.no) ?? exercises[0];
  const filePath = state.answer
    ? `solutions/sol${pad(state.no)}.js`
    : `src/ex${pad(state.no)}.js`;

  const panel = document.createElement("div");
  panel.className = "tj-launcher";
  if (localStorage.getItem("tj-collapsed") === "1") {
    panel.classList.add("is-collapsed");
  }
  panel.innerHTML = `
    <div class="tj-head">
      <button class="tj-home" type="button" title="Back to the exercise index">Index</button>
      <span class="tj-badge">${state.no} / ${TOTAL}</span>
      <button class="tj-toggle" type="button">${
        panel.classList.contains("is-collapsed") ? "Show" : "Hide"
      }</button>
    </div>
    <div class="tj-body">
      <div class="tj-title">${esc(entry.title)}</div>
      <div class="tj-row">
        <button class="tj-nav" type="button" data-step="-1" ${
          state.no === 1 ? "disabled" : ""
        }>&lsaquo;</button>
        <select class="tj-select">
          ${exercises
            .map(
              (e) =>
                `<option value="${e.no}" ${
                  e.no === state.no ? "selected" : ""
                }>${e.no}. ${esc(e.title)}</option>`
            )
            .join("")}
        </select>
        <button class="tj-nav" type="button" data-step="1" ${
          state.no === TOTAL ? "disabled" : ""
        }>&rsaquo;</button>
      </div>
      <div class="tj-mode">
        <button type="button" data-answer="0" class="${
          state.answer ? "" : "is-active"
        }">Starter</button>
        <button type="button" data-answer="1" class="${
          state.answer ? "is-active" : ""
        }">Answer</button>
      </div>
      <div class="tj-file">Editing: ${filePath}</div>
    </div>
  `;
  document.body.appendChild(panel);

  const body = panel.querySelector(".tj-body");

  panel.querySelector(".tj-home").addEventListener("click", goIndex);

  panel.querySelector(".tj-toggle").addEventListener("click", (event) => {
    const collapsed = panel.classList.toggle("is-collapsed");
    localStorage.setItem("tj-collapsed", collapsed ? "1" : "0");
    event.currentTarget.textContent = collapsed ? "Show" : "Hide";
  });

  panel.querySelector(".tj-select").addEventListener("change", (event) => {
    go(Number(event.currentTarget.value), state.answer);
  });

  for (const nav of panel.querySelectorAll(".tj-nav")) {
    nav.addEventListener("click", () => {
      go(state.no + Number(nav.dataset.step), state.answer);
    });
  }

  for (const mode of panel.querySelectorAll(".tj-mode button")) {
    mode.addEventListener("click", () => {
      const answer = mode.dataset.answer === "1";
      if (answer !== state.answer) go(state.no, answer);
    });
  }

  function note(message, isError = false) {
    const el = document.createElement("div");
    el.className = isError ? "tj-note is-error" : "tj-note";
    el.textContent = message;
    body.appendChild(el);
    panel.classList.remove("is-collapsed");
  }

  const key = state.answer
    ? `./solutions/sol${pad(state.no)}.js`
    : `./src/ex${pad(state.no)}.js`;
  const load = state.answer ? solutions[key] : starters[key];

  (async () => {
    if (!load) {
      note(`${key} was not found.`, true);
      return;
    }
    try {
      await load();
      // Some starters are nothing but comments, so the screen stays empty.
      // Say so, otherwise it looks broken.
      setTimeout(() => {
        if (!document.querySelector("canvas")) {
          note(`Edit ${filePath} to draw something.`);
        }
      }, 1200);
    } catch (error) {
      note(`Error in ${filePath}:\n${error?.stack ?? error}`, true);
    }
  })();
}

// Pick up a hash that was edited directly in the address bar.
window.addEventListener("hashchange", () => location.reload());

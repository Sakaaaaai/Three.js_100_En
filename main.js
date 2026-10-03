/*
  Three.js 100 Drills - exercise launcher
  ------------------------------------------------------------
  You do not need to edit this file.
  Your code goes in src/exNN.js; the model answers live in solutions/solNN.js.

  The state lives in the URL query (a hash also works).
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

function readState() {
  // StackBlitz passes the selection in as ?initialpath=/?q=12.
  // The hash is a fallback for anyone switching by hand.
  const search = new URLSearchParams(location.search);
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const get = (key) => search.get(key) ?? hash.get(key);

  const raw = Number.parseInt(get("q") ?? "", 10);
  const no = Number.isNaN(raw) ? 1 : Math.min(TOTAL, Math.max(1, raw));
  return { no, answer: get("a") === "1" };
}

// Always switch by navigating, so no WebGL context or event listener from the
// previous exercise is left behind.
function go(no, answer) {
  location.href = answer ? `?q=${no}&a=1` : `?q=${no}`;
}

const state = readState();
const entry = exercises.find((e) => e.no === state.no) ?? exercises[0];
const filePath = state.answer
  ? `solutions/sol${pad(state.no)}.js`
  : `src/ex${pad(state.no)}.js`;

// ---- Panel ---------------------------------------------------------
const panel = document.createElement("div");
panel.className = "tj-launcher";
if (localStorage.getItem("tj-collapsed") === "1") {
  panel.classList.add("is-collapsed");
}
panel.innerHTML = `
  <div class="tj-head">
    <span class="tj-badge">Exercise ${state.no} / ${TOTAL}</span>
    <button class="tj-toggle" type="button">${
      panel.classList.contains("is-collapsed") ? "Show" : "Hide"
    }</button>
  </div>
  <div class="tj-body">
    <div class="tj-title">${entry.title}</div>
    <div class="tj-row">
      <button class="tj-nav" type="button" data-step="-1" ${
        state.no === 1 ? "disabled" : ""
      }>&lsaquo;</button>
      <select class="tj-select">
        ${exercises
          .map(
            (e) =>
              `<option value="${e.no}" ${e.no === state.no ? "selected" : ""}>${
                e.no
              }. ${e.title}</option>`
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

// ---- Load the exercise ---------------------------------------------
const key = state.answer
  ? `./solutions/sol${pad(state.no)}.js`
  : `./src/ex${pad(state.no)}.js`;
const load = state.answer ? solutions[key] : starters[key];

async function run() {
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
}

run();

// Pick up a hash that was edited directly in the address bar.
window.addEventListener("hashchange", () => location.reload());

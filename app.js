/* sachin.pm — interactions. Content lives in data.js */
(() => {
const S = window.SITE;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get(k, d) { try { const v = localStorage.getItem("sp_" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("sp_" + k, JSON.stringify(v)); } catch {} }
};
const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

/* ---------- Toast ---------- */
const toastEl = $("#toast");
let toastT;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

/* ---------- Theme ---------- */
const root = document.documentElement;
const savedTheme = store.get("theme", null);
if (savedTheme) root.dataset.theme = savedTheme;
function isDark() {
  if (root.dataset.theme) return root.dataset.theme === "dark";
  return !matchMedia("(prefers-color-scheme: light)").matches;
}
function toggleTheme() {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  store.set("theme", next);
  field.readColors();
  toast(next === "dark" ? "Dark mode" : "Light mode");
}
$("#theme-toggle").addEventListener("click", toggleTheme);

/* ---------- Hero field: an attention map ----------
   The cursor is the query and the dots are tokens: nearby dots light up and link to it.
   Asking a question makes the field focus on the Ask panel while the answer streams.
   Lines never cross the hero text, so the copy stays readable. */
const field = (() => {
  const c = $("#field"), ctx = c.getContext("2d");
  const hero = $(".hero"), panel = $("#ask");
  let w, h, dpr, dots = [], mouse = null, t = 0, running = false, dotRGB = "150,160,190", acc = "#FFB547";
  let keepOut = [], box = null, picks = [], heat = 0, thinking = false, thinkStart = 0, releaseAt = 0;
  const GAP = 30, R = 170;
  function rel(node, pad) {
    const hb = hero.getBoundingClientRect(), b = node.getBoundingClientRect();
    return { l: b.left - hb.left - pad, t: b.top - hb.top - pad, r: b.right - hb.left + pad, b: b.bottom - hb.top + pad };
  }
  const inside = (x, y, q) => x > q.l && x < q.r && y > q.t && y < q.b;
  // Liang–Barsky clip test: does the segment cross rect q?
  function crosses(x1, y1, x2, y2, q) {
    const dx = x2 - x1, dy = y2 - y1;
    let t0 = 0, t1 = 1;
    for (const [p, v] of [[-dx, x1 - q.l], [dx, q.r - x1], [-dy, y1 - q.t], [dy, q.b - y1]]) {
      if (p === 0) { if (v < 0) return false; continue; }
      const r = v / p;
      if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; }
      else { if (r < t0) return false; if (r < t1) t1 = r; }
    }
    return true;
  }
  const clear = (x1, y1, x2, y2) => !keepOut.some((q) => crosses(x1, y1, x2, y2, q));
  function measure() {
    if (!w) return;
    keepOut = [...$$(".hero-copy > *"), $(".stats"), $(".field-note")].filter((n) => n && n.offsetParent).map((n) => rel(n, 10));
    box = rel(panel, 0);
    for (const d of dots) { d.ko = keepOut.some((q) => inside(d.x, d.y, q)); d.under = inside(d.x, d.y, box); }
  }
  function readColors() { dotRGB = cssVar("--dot") || dotRGB; acc = cssVar("--accent") || acc; if (!running) draw(); }
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dots = [];
    for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ x, y, j: Math.random() * 6.28 });
    measure();
    draw();
  }
  function orbit() {
    // idle: a phantom cursor circles the Ask panel, so the field stays alive on touch screens
    const m = 26, L = box.l - m, T = box.t - m, pw = box.r - box.l + 2 * m, ph = box.b - box.t + 2 * m;
    let s = (t * 0.035) % (2 * (pw + ph));
    if (s < pw) return { x: L + s, y: T }; s -= pw;
    if (s < ph) return { x: L + pw, y: T + s }; s -= ph;
    if (s < pw) return { x: L + pw - s, y: T + ph }; s -= pw;
    return { x: L, y: T + ph - s };
  }
  const edge = (d) => ({ x: Math.min(box.r, Math.max(box.l, d.x)), y: Math.min(box.b, Math.max(box.t, d.y)) });
  // A question arrived: score the dots around the panel (favoring ~110px away, plus noise) and start attending.
  function focus() {
    if (reduced || !box) return;
    picks = dots.filter((d) => !d.ko && !d.under).map((d) => {
      const e = edge(d), dist = Math.hypot(d.x - e.x, d.y - e.y);
      return { d, e, dist, s: Math.exp(-(((dist - 110) / 75) ** 2)) * (0.5 + Math.random()), off: Math.random() };
    }).filter((p) => p.dist > 20 && p.dist < 300 && clear(p.d.x, p.d.y, p.e.x, p.e.y)).sort((a, b) => b.s - a.s).slice(0, 36);
    thinking = true; thinkStart = performance.now(); releaseAt = Infinity;
    panel.classList.add("thinking");
  }
  // The answer finished: let the focus fade, but keep it on screen long enough to read as intentional.
  function release() { releaseAt = Math.max(performance.now(), thinkStart + 1600); }
  function draw() {
    if (!w) return;
    if (thinking && t > releaseAt) { thinking = false; panel.classList.remove("thinking"); }
    heat += ((thinking ? 1 : 0) - heat) * 0.07;
    ctx.clearRect(0, 0, w, h);
    const f = mouse || orbit(), calm = 1 - heat * 0.6;
    const near = [];
    for (const d of dots) {
      const k = d.ko || d.under ? 0 : Math.max(0, 1 - Math.hypot(d.x - f.x, d.y - f.y) / R) * calm;
      const twinkle = 0.5 + 0.5 * Math.sin(t * 0.0012 + d.j);
      const a = 0.10 + 0.08 * twinkle + k * 0.75;
      const r = 1 + k * 2.2;
      ctx.fillStyle = `rgba(${dotRGB},${a.toFixed(3)})`;
      ctx.beginPath(); ctx.arc(d.x, d.y, r, 0, 6.283); ctx.fill();
      if (k > 0.25 && clear(f.x, f.y, d.x, d.y)) near.push([k, d]);
    }
    near.sort((a, b) => b[0] - a[0]);
    ctx.lineWidth = 1;
    for (const [k, d] of near.slice(0, 7)) {
      ctx.strokeStyle = acc; ctx.globalAlpha = k * 0.55;
      ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(d.x, d.y); ctx.stroke();
      ctx.fillStyle = acc; ctx.globalAlpha = Math.min(1, k * 1.1);
      ctx.beginPath(); ctx.arc(d.x, d.y, 1.4 + k * 2.2, 0, 6.283); ctx.fill();
    }
    if (heat > 0.01) {
      // attention sharpens over ~1.4s: a softmax-like temperature drops, so weight concentrates on the top dots
      const el = t - thinkStart, tau = 2.5 + 11.5 * Math.max(0, 1 - el / 1400);
      picks.forEach((p, i) => {
        const wg = Math.exp(-i / tau), a = heat * wg;
        if (a < 0.02) return;
        ctx.strokeStyle = acc; ctx.globalAlpha = a * 0.75;
        ctx.beginPath(); ctx.moveTo(p.d.x, p.d.y); ctx.lineTo(p.e.x, p.e.y); ctx.stroke();
        ctx.fillStyle = acc; ctx.globalAlpha = Math.min(1, a * 1.2);
        ctx.beginPath(); ctx.arc(p.d.x, p.d.y, 1.3 + wg * 2.2, 0, 6.283); ctx.fill();
        if (wg > 0.15) {
          // values flow into the panel
          const u = (el / 850 + p.off) % 1;
          ctx.beginPath(); ctx.arc(p.d.x + (p.e.x - p.d.x) * u, p.d.y + (p.e.y - p.d.y) * u, 1.2 + wg, 0, 6.283); ctx.fill();
        }
      });
    }
    ctx.globalAlpha = 1;
  }
  function loop(now) { if (!running) return; t = now; draw(); requestAnimationFrame(loop); }
  hero.addEventListener("pointermove", (e) => { const b = hero.getBoundingClientRect(); mouse = { x: e.clientX - b.left, y: e.clientY - b.top }; if (reduced) draw(); });
  hero.addEventListener("pointerleave", () => { mouse = null; if (reduced) draw(); });
  new ResizeObserver(size).observe(hero);
  document.fonts?.ready.then(() => { measure(); draw(); });
  if (!reduced && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; requestAnimationFrame(loop); }
      else if (!e.isIntersecting) running = false;
    }).observe(hero);
  }
  readColors();
  return { readColors, focus, release };
})();
matchMedia("(prefers-color-scheme: light)").addEventListener?.("change", () => field.readColors());

/* ---------- Ask my portfolio ---------- */
const askLog = $("#ask-log"), askForm = $("#ask-form"), askInput = $("#ask-input");
let streaming = null;
S.ask.chips.forEach((q) => {
  const b = el("button", null, esc(q)); b.type = "button";
  b.addEventListener("click", () => ask(q));
  $("#ask-chips").append(b);
});
function retrieve(q) {
  const text = q.toLowerCase();
  const tokens = text.split(/[^a-z0-9₹+-]+/).filter(Boolean);
  let best = null, bestScore = 0;
  for (const item of S.ask.kb) {
    let s = 0;
    for (const k of item.keys) {
      if (k.includes(" ")) { if (text.includes(k)) s += 2; continue; }
      if (tokens.some((tk) => tk === k || tk === k + "s" || (k.length >= 5 && tk.length >= 5 && tk.slice(0, 5) === k.slice(0, 5)))) s += 1;
    }
    if (s > bestScore) { bestScore = s; best = item; }
  }
  return best;
}
function finishStreaming() { if (streaming) { streaming.finish(); streaming = null; } }
function ask(q) {
  q = q.trim(); if (!q) return;
  finishStreaming();
  field.focus();
  askLog.append(el("div", "msg q", esc(q)));
  const hit = retrieve(q);
  const paras = hit ? hit.a : S.ask.fallback;
  const a = el("div", "msg a");
  const src = el("div", "src", `<span>${hit ? "retrieved" : "no match"}</span>${esc(hit ? hit.src : "try a suggested question")}`);
  askLog.append(a);
  askLog.scrollTop = askLog.scrollHeight;
  const ps = paras.map(() => el("p"));
  ps.forEach((p) => a.append(p));
  const caret = el("span", "caret");
  let pi = 0, ci = 0, timer;
  const done = () => { clearInterval(timer); ps.forEach((p, i) => (p.textContent = paras[i])); caret.remove(); a.append(src); askLog.scrollTop = askLog.scrollHeight; field.release(); };
  streaming = { finish: done };
  if (reduced) { done(); streaming = null; return; }
  setTimeout(() => {
    if (!streaming || streaming.finish !== done) return;
    timer = setInterval(() => {
      ci += 3;
      if (ci >= paras[pi].length) { ps[pi].textContent = paras[pi]; pi++; ci = 0; if (pi >= paras.length) { done(); streaming = null; return; } }
      ps[pi].textContent = paras[pi].slice(0, ci); ps[pi].append(caret);
      askLog.scrollTop = askLog.scrollHeight;
    }, 16);
  }, 280);
}
askForm.addEventListener("submit", (e) => { e.preventDefault(); ask(askInput.value); askInput.value = ""; });

/* ---------- Tile spotlight ---------- */
$$(".tile").forEach((t) => t.addEventListener("pointermove", (e) => {
  const b = t.getBoundingClientRect();
  t.style.setProperty("--mx", e.clientX - b.left + "px");
  t.style.setProperty("--my", e.clientY - b.top + "px");
}));

/* ---------- OutLoud funnel ---------- */
(() => {
  const list = $("#funnel"), steps = S.outloudFunnel, top = steps[0][1];
  let worst = 1;
  steps.forEach(([, n], i) => { if (i && steps[i - 1][1] - n > steps[worst - 1][1] - steps[worst][1]) worst = i; });
  steps.forEach(([label, n], i) => {
    const prev = i ? steps[i - 1][1] : null;
    const li = el("li", i === worst ? "leak" : null);
    li.tabIndex = 0;
    li.innerHTML = `
      <span class="f-label">${esc(label)}</span>
      <span class="f-track">
        <span class="f-bar" style="width:calc((100% - 150px) * ${n / top})" aria-hidden="true"></span>
        <span class="f-val">${n} users</span>
        ${prev ? `<span class="f-drop">−${prev - n}</span>` : ""}
      </span>
      ${prev ? `<span class="f-tip">${Math.round((n / prev) * 100)}% of the previous step · ${Math.round((n / top) * 100)}% of starts</span>` : ""}`;
    list.append(li);
  });
  if (reduced || !("IntersectionObserver" in window)) { list.classList.add("in"); return; }
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { list.classList.add("in"); io.disconnect(); } }, { threshold: 0.4 });
  io.observe(list);
})();

/* ---------- Changelog ---------- */
const LABEL = { added: "Added", shipped: "Shipped", changed: "Changed" };
S.changelog.forEach((r) => {
  const li = el("li", "rel " + r.kind);
  li.innerHTML = `
    <div class="rel-meta"><span class="tag">${esc(r.v)}</span><time>${esc(r.when)}</time></div>
    <div class="rel-body">
      <h3>${esc(r.title)}</h3>
      <p class="where">${esc(r.where)}</p>
      <ul>${r.notes.map(([k, t]) => `<li><b class="k-${k}">${LABEL[k]}</b><span>${esc(t)}</span></li>`).join("")}</ul>
      ${r.link ? `<a class="link rel-link" href="${esc(r.link.href)}">${esc(r.link.label)}</a>` : ""}
    </div>`;
  $("#log").append(li);
});

/* ---------- Teardowns ---------- */
const FILTERS = ["All", "Growth", "UX", "PRD", "GTM", "AI", "B2B"];
const tdGrid = $("#td-grid"), tdFilters = $("#td-filters");
$("#td-count").textContent = S.teardowns.length;
const tdCards = S.teardowns.map((d) => {
  const a = el("a", "td");
  a.href = d.href; a.target = "_blank"; a.rel = "noopener";
  a.dataset.tags = d.tags.join("|");
  a.innerHTML = `
    <span class="td-kind">${esc(d.kind)}</span>
    <span class="td-brand">${esc(d.brand)}</span>
    <span class="td-title">${esc(d.title)}</span>
    <span class="td-q">${esc(d.q)}</span>
    <span class="td-tags">${d.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</span>
    <span class="td-open" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>`;
  a.setAttribute("aria-label", `${d.brand}: ${d.title} (opens in a new tab)`);
  tdGrid.append(a);
  return a;
});
function setFilter(f) {
  $$("button", tdFilters).forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === f));
  tdCards.forEach((c) => c.classList.toggle("hide", f !== "All" && !c.dataset.tags.split("|").includes(f)));
  store.set("filter", f);
}
FILTERS.forEach((f) => {
  const n = f === "All" ? S.teardowns.length : S.teardowns.filter((d) => d.tags.includes(f)).length;
  if (!n) return;
  const b = el("button", null, `${f}<span class="n">${n}</span>`);
  b.type = "button"; b.dataset.f = f;
  b.addEventListener("click", () => setFilter(f));
  tdFilters.append(b);
});
setFilter(FILTERS.includes(store.get("filter", "All")) ? store.get("filter", "All") : "All");

/* ---------- Sessions ---------- */
$("#ss-count").textContent = S.sessions.length;
S.sessions.forEach((v) => {
  const a = el("a", "ss");
  a.href = v.href; a.target = "_blank"; a.rel = "noopener";
  const chips = v.tools.map((t) => `<span class="chip">${esc(t)}</span>`);
  a.innerHTML = `
    <span class="ss-shot"><img src="${esc(v.img)}" alt="${esc(v.alt)}" width="960" height="540" loading="lazy"><span class="ss-play" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 3.2v9.6L12.8 8Z" fill="currentColor"/></svg></span></span>
    <span class="ss-body">
      <span class="ss-kind">${esc(v.kind)}</span>
      <span class="ss-title">${esc(v.title)}</span>
      <span class="ss-q">${esc(v.q)}</span>
      <span class="ss-tags">${chips.join(v.flow ? '<span class="ss-arrow" aria-hidden="true">→</span>' : "")}</span>
    </span>`;
  a.setAttribute("aria-label", `${v.title}, ${v.kind} (YouTube video, opens in a new tab)`);
  $("#ss-grid").append(a);
});

/* ---------- Toolkit ---------- */
S.toolkit.forEach((g) => {
  const d = el("div", "kit-group", `<h3>${esc(g.group)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
  $("#kit").append(d);
});

/* ---------- Copy buttons ---------- */
function copy(text, node) {
  const ok = () => toast("Copied " + text);
  const fallback = () => {
    if (node) { const rg = document.createRange(); rg.selectNodeContents(node); const s = getSelection(); s.removeAllRanges(); s.addRange(rg); }
    toast("Selected. Press ⌘C / Ctrl+C to copy");
  };
  try { navigator.clipboard.writeText(text).then(ok, fallback); } catch { fallback(); }
}
$$(".copy").forEach((b) => b.addEventListener("click", () => copy(b.dataset.copy, b.previousElementSibling)));

/* ---------- Petals (marigold confetti) ---------- */
const pc = $("#petals"), pctx = pc.getContext("2d");
let parts = [], pAnim = false;
function petals(n = 70) {
  if (reduced) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  pc.width = innerWidth * dpr; pc.height = innerHeight * dpr; pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const cols = ["#FFB547", "#FF9F1C", "#FFD166", "#F77F00", "#FFC857"];
  for (let i = 0; i < n; i++) parts.push({
    x: innerWidth * (0.2 + Math.random() * 0.6), y: -20 - Math.random() * innerHeight * 0.3,
    vx: (Math.random() - 0.5) * 2.4, vy: 1.5 + Math.random() * 2.5, r: Math.random() * 6.28,
    vr: (Math.random() - 0.5) * 0.2, s: 5 + Math.random() * 6, c: cols[i % cols.length], sway: Math.random() * 6.28
  });
  if (!pAnim) { pAnim = true; requestAnimationFrame(stepPetals); }
}
function stepPetals() {
  pctx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter((p) => p.y < innerHeight + 30);
  for (const p of parts) {
    p.sway += 0.04; p.x += p.vx + Math.sin(p.sway) * 0.8; p.y += p.vy; p.r += p.vr;
    pctx.save(); pctx.translate(p.x, p.y); pctx.rotate(p.r);
    pctx.fillStyle = p.c; pctx.beginPath(); pctx.ellipse(0, 0, p.s, p.s * 0.55, 0, 0, 6.283); pctx.fill();
    pctx.restore();
  }
  if (parts.length) requestAnimationFrame(stepPetals); else { pAnim = false; pctx.clearRect(0, 0, innerWidth, innerHeight); }
}

/* ---------- Command menu (⌘K) ---------- */
const cmdk = $("#cmdk"), cIn = $("#cmdk-input"), cList = $("#cmdk-list");
const go = (id) => () => $(id).scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
const COMMANDS = [
  { g: "Go to", label: "Work", hint: "6 products", run: go("#work") },
  { g: "Go to", label: "OutLoud case study", hint: "research → prompt → funnel", run: go("#case") },
  { g: "Go to", label: "Changelog", hint: "career", run: go("#changelog") },
  { g: "Go to", label: "Teardowns & PRDs", hint: "10 docs", run: go("#teardowns") },
  { g: "Go to", label: "Sessions", hint: "n8n + ASO videos", run: go("#sessions") },
  { g: "Go to", label: "Toolkit & community", run: go("#toolkit") },
  { g: "Go to", label: "Contact", run: go("#contact") },
  { g: "Do", label: "Copy email address", hint: S.email, run: () => copy(S.email, $("#c-email")) },
  { g: "Do", label: "Switch light / dark theme", run: toggleTheme },
  { g: "Do", label: "Throw marigold petals", hint: "or type ship", run: () => petals(90) },
  ...S.ask.chips.map((q) => ({ g: "Ask", label: q, run: () => { go("#top")(); setTimeout(() => ask(q), 350); } })),
  { g: "Open", label: "OutLoud (live product)", href: S.links.outloud },
  { g: "Open", label: "LinkedIn", href: S.links.linkedin },
  { g: "Open", label: "Resume (PDF)", href: S.links.resume },
  { g: "Open", label: "GitHub", href: S.links.github },
  { g: "Open", label: "YouTube · IT Wale Bhaiya", href: S.links.youtube },
  ...S.teardowns.map((d) => ({ g: "Teardowns", label: `${d.brand}: ${d.title}`, href: d.href })),
  ...S.sessions.map((v) => ({ g: "Sessions", label: v.title, hint: v.kind, href: v.href }))
];
let cFiltered = [], cSel = 0, lastFocus = null;
function renderCmd() {
  const q = cIn.value.trim().toLowerCase();
  cFiltered = COMMANDS.filter((c) => !q || (c.label + " " + c.g + " " + (c.hint || "")).toLowerCase().includes(q));
  cSel = Math.min(cSel, Math.max(0, cFiltered.length - 1));
  cList.innerHTML = "";
  if (!cFiltered.length) { cList.append(el("li", "empty", `Nothing matches “${esc(cIn.value)}”. Try “Zepto”, “OutLoud” or “email”.`)); return; }
  let g = null;
  cFiltered.forEach((c, i) => {
    if (c.g !== g) { g = c.g; cList.append(el("li", "grp", esc(g))); }
    const li = el("li", "opt", `<span>${esc(c.label)}</span><small>${c.href ? "↗" : esc(c.hint || "")}</small>`);
    li.setAttribute("role", "option"); li.id = "cmd-" + i;
    li.setAttribute("aria-selected", i === cSel);
    li.addEventListener("mousemove", () => { if (cSel !== i) { cSel = i; mark(); } });
    li.addEventListener("click", () => runCmd(c));
    cList.append(li);
  });
  cIn.setAttribute("aria-activedescendant", "cmd-" + cSel);
}
function mark() {
  $$(".opt", cList).forEach((o) => o.setAttribute("aria-selected", o.id === "cmd-" + cSel));
  const cur = $("#cmd-" + cSel); cur && cur.scrollIntoView({ block: "nearest" });
  cIn.setAttribute("aria-activedescendant", "cmd-" + cSel);
}
function runCmd(c) {
  closeCmd();
  if (c.href) { const a = el("a"); a.href = c.href; a.target = "_blank"; a.rel = "noopener"; document.body.append(a); a.click(); a.remove(); }
  else c.run();
}
function openCmd() { lastFocus = document.activeElement; cmdk.hidden = false; cIn.value = ""; cSel = 0; renderCmd(); cIn.focus(); }
function closeCmd() { cmdk.hidden = true; lastFocus && lastFocus.focus && lastFocus.focus(); }
$("#cmdk-open").addEventListener("click", openCmd);
cmdk.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) closeCmd(); });
cIn.addEventListener("input", () => { cSel = 0; renderCmd(); });
cIn.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") { e.preventDefault(); cSel = (cSel + 1) % Math.max(1, cFiltered.length); mark(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); cSel = (cSel - 1 + cFiltered.length) % Math.max(1, cFiltered.length); mark(); }
  else if (e.key === "Enter" && cFiltered[cSel]) { e.preventDefault(); runCmd(cFiltered[cSel]); }
  else if (e.key === "Tab") e.preventDefault();
});

/* ---------- Global keys: ⌘K, /, esc, and the "ship" easter egg ---------- */
let typed = "";
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); cmdk.hidden ? openCmd() : closeCmd(); return; }
  if (e.key === "Escape" && !cmdk.hidden) { closeCmd(); return; }
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === "/") { e.preventDefault(); askInput.focus(); return; }
  if (e.key.length === 1) {
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === "ship") { petals(110); toast("Shipped. 🌼"); typed = ""; }
  }
});

/* ---------- Show Ctrl K instead of ⌘K off Apple devices ---------- */
if (!/Mac|iPhone|iPad/i.test(navigator.userAgentData?.platform || navigator.platform || navigator.userAgent)) $$(".mod-k").forEach((k) => (k.textContent = "Ctrl K"));

/* ---------- Clock, nav state ---------- */
const clockFmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" });
const tickClock = () => ($("#clock").textContent = clockFmt.format(new Date()));
tickClock(); setInterval(tickClock, 15000);

const navLinks = $$(".nav a");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["work", "case", "changelog", "teardowns", "sessions", "contact"].forEach((id) => io.observe($("#" + id)));
}

console.log("%c sachin.pm %c Hey, fellow builder. This site is plain HTML/CSS/JS. Content lives in data.js. Say hi: " + S.email,
  "background:#FFB547;color:#1C1204;font-weight:700;padding:3px 6px;border-radius:4px", "color:inherit");
})();

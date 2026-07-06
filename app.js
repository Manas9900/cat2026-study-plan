// CAT 2026 App v2 — Rendering Logic
document.addEventListener("DOMContentLoaded", () => {
  initCountdown(); initTabs();
  renderWeekly(); renderMocks(); renderQA(); renderLRDI(); renderVARC(); renderMilestones();
});

// ─── PROGRESS TRACKING (localStorage) ───
function getP(k) { return localStorage.getItem("cat26_"+k) === "1"; }
function setP(k,v) { localStorage.setItem("cat26_"+k, v?"1":"0"); }
function toggleP(k) { setP(k, !getP(k)); }

function cb(key, label, extra="") {
  const checked = getP(key) ? "checked" : "";
  return `<label class="exercise-row"><input type="checkbox" class="checkbox-custom" data-key="${key}" ${checked} onchange="toggleP('${key}');updateCounts()"><span>${label}</span>${extra}</label>`;
}

function updateCounts() {
  // Update QA progress
  let qaTotal=0, qaDone=0;
  QA_CHAPTERS.forEach(c => {
    for(let l=1;l<=c.levels;l++) {
      qaTotal++; if(getP(c.id+"_l"+l)) qaDone++;
    }
  });
  const qaEl = document.getElementById("qa-progress");
  if(qaEl) qaEl.textContent = `${qaDone}/${qaTotal} levels done`;

  // LR progress
  let lrTotal=0, lrDone=0;
  LR_CHAPTERS.forEach(c => {
    for(let l=1;l<=c.levels;l++) { lrTotal++; if(getP(c.id+"_l"+l)) lrDone++; }
  });
  const lrEl = document.getElementById("lr-progress");
  if(lrEl) lrEl.textContent = `${lrDone}/${lrTotal} levels done`;

  // DI progress
  let diTotal=0, diDone=0;
  DI_CHAPTERS.forEach(c => {
    for(let l=1;l<=c.levels;l++) { diTotal++; if(getP(c.id+"_l"+l)) diDone++; }
  });
  const diEl = document.getElementById("di-progress");
  if(diEl) diEl.textContent = `${diDone}/${diTotal} levels done`;

  // LR videos
  let lvTotal=0, lvDone=0;
  LR_VIDEOS.forEach(v => {
    for(let i=1;i<=v.count;i++) { lvTotal++; if(getP(v.id+"_"+i)) lvDone++; }
  });
  const lvEl = document.getElementById("lv-progress");
  if(lvEl) lvEl.textContent = `${lvDone}/${lvTotal} lectures done`;

  // Mocks
  let mockDone = MOCKS.filter(m => getP("mock_"+m.num)).length;
  const mkEl = document.getElementById("mock-progress");
  if(mkEl) mkEl.textContent = `${mockDone}/${MOCKS.length} mocks done`;
  const statMk = document.getElementById("stat-mocks");
  if(statMk) statMk.textContent = `${mockDone}/${MOCKS.length}`;
}

// ─── COUNTDOWN ───
function initCountdown() {
  function update() {
    const diff = CAT_DATE - new Date();
    const d = Math.floor(diff/864e5), h = Math.floor((diff%864e5)/36e5);
    document.getElementById("countdown").textContent = `${d} days ${h} hours to CAT 2026`;
    document.getElementById("stat-days").textContent = d;
  }
  update(); setInterval(update, 60000);
}

// ─── TABS ───
function initTabs() {
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

// ─── WEEKLY PLANS ───
function renderWeekly() {
  const el = document.getElementById("weekly");
  const cp = getCurrentPhase();
  let html = `<h2 class="section-title">Weekly Schedule Templates</h2>
    <p class="section-desc">Phase-specific templates · Current: <strong style="color:${cp.color}">${cp.name}</strong> (${cp.hrs} hrs/day)</p>`;

  // Phase overview
  html += `<div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">`;
  PHASES.forEach(p => {
    const isCurrent = p.id === cp.id;
    html += `<div class="card" style="padding:.6rem 1rem;${isCurrent?'border-color:'+p.color+';box-shadow:0 0 12px '+p.color+'33;':''}display:flex;align-items:center;gap:1rem">
      <span style="font-size:.7rem;padding:2px 8px;border-radius:999px;background:${p.color}20;color:${p.color};font-weight:700;min-width:90px;text-align:center">${p.hrs} hrs/day</span>
      <span style="font-weight:${isCurrent?700:500};font-size:.85rem;${isCurrent?'color:var(--text)':'color:var(--text2)'}">${p.name}</span>
      <span style="font-size:.75rem;color:var(--text2);margin-left:auto">${fmtDate(p.start)} – ${fmtDate(p.end)}</span>
      ${isCurrent ? '<span style="font-size:.6rem;padding:2px 6px;border-radius:999px;background:var(--green);color:#fff;font-weight:700">NOW</span>' : ''}
    </div>`;
  });
  html += `</div>`;

  // Exam blocks warning
  html += `<div class="alert-box" style="border-left-color:var(--red);margin-bottom:1.5rem">
    <strong>⚠️ College Exam Blocks</strong><br>
    ${EXAMS.map(e => `<span style="color:var(--text2);font-size:.85rem">• ${e.name}: ${fmtDate(e.start)}–${fmtDate(e.end)} (prep from ${fmtDate(e.prep)})</span>`).join('<br>')}
  </div>`;

  // Render templates
  const templates = [
    { key: "college", applies: "Phases 1, 3 (Jul 6–24, Aug 2–Sep 10)" },
    { key: "fulltime", applies: "Phases 5, 7 (Sep 22–Nov 10, Nov 19–28)" },
    { key: "exam", applies: "Phases 2, 4, 6 (Exam weeks)" }
  ];

  templates.forEach(t => {
    const tmpl = TEMPLATES[t.key];
    html += `<div style="margin-bottom:2rem">
      <div class="week-header"><h3>${tmpl.title}</h3><span class="phase-badge" style="background:var(--surface2);color:var(--text2)">${t.applies}</span><div class="line"></div></div>
      <p class="section-desc">${tmpl.subtitle}</p>
      <div class="template-grid">`;
    tmpl.days.forEach(day => {
      html += `<div class="template-card"><h4>${day.day}</h4>`;
      day.slots.forEach(s => {
        html += `<div class="slot"><div class="slot-label">${s.time}</div><div class="slot-tasks">${s.tasks}</div></div>`;
      });
      html += `</div>`;
    });
    html += `</div></div>`;
  });

  // Daily non-negotiables
  html += `<div class="card" style="padding:1rem">
    <h4 style="margin-bottom:.5rem;color:var(--amber)">📌 Daily Non-Negotiables (Every Single Day)</h4>
    <ul style="font-size:.85rem;color:var(--text2);list-style:none;line-height:2">
      <li>📖 <strong>1 RC test</strong> (15 min) — build reading habit</li>
      <li>📰 <strong>The Hindu editorial</strong> (20 min) — vocab + comprehension</li>
      <li>📰 <strong>ET editorial</strong> (15 min) — when time permits</li>
      <li>📝 <strong>At least 1 mini-test</strong> from QA/LRDI/VARC bank</li>
      <li>📋 <strong>Error log</strong> (15–20 min) — review mistakes</li>
    </ul>
  </div>`;

  el.innerHTML = html;
}

// ─── MOCK CALENDAR ───
function renderMocks() {
  const el = document.getElementById("mocks");
  let html = `<h2 class="section-title">Full Mock Test Calendar</h2>
    <p class="section-desc">30 Full-Length Mocks · Last mock: Nov 25 · 3 hrs + 1.5 hrs review · <strong id="mock-progress">0/${MOCKS.length} mocks done</strong></p>`;

  // Frequency ramp
  html += `<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem">
    <span class="phase-badge" style="background:var(--cyan)20;color:var(--cyan)">Jul: 1–2 mocks</span>
    <span class="phase-badge" style="background:var(--accent)20;color:var(--accent2)">Aug: 1/week</span>
    <span class="phase-badge" style="background:var(--green)20;color:var(--green)">Sep: 1/week</span>
    <span class="phase-badge" style="background:var(--amber)20;color:var(--amber)">Oct: 2/week</span>
    <span class="phase-badge" style="background:var(--red)20;color:var(--red)">Nov: 2–3/week</span>
  </div>`;

  // Group by month
  const groups = {};
  MOCKS.forEach(m => {
    const month = new Date(m.date+"T00:00:00").toLocaleString('en-US',{month:'long',year:'numeric'});
    if(!groups[month]) groups[month] = [];
    groups[month].push(m);
  });

  for(const [month, items] of Object.entries(groups)) {
    html += `<div class="mock-month"><h3>${month}</h3><div class="mock-list">`;
    items.forEach(m => {
      const done = getP("mock_"+m.num);
      const phase = PHASES.find(p=>p.id===m.phase);
      html += `<div class="mock-item ${done?'done':''}">
        <label style="display:flex;align-items:center;gap:.75rem;flex:1;cursor:pointer">
          <input type="checkbox" class="checkbox-custom" data-key="mock_${m.num}" ${done?"checked":""} onchange="toggleP('mock_${m.num}');updateCounts()">
          <span class="mock-num">Mock #${m.num}</span>
          <span class="mock-date">${fmtDate(m.date)} (${m.day})</span>
        </label>
        <span class="phase-badge" style="background:${phase?phase.color:'var(--accent)'}20;color:${phase?phase.color:'var(--accent)'}">${phase?phase.name.split('—')[0].trim():''}</span>
      </div>`;
    });
    html += `</div></div>`;
  }

  html += `<div class="alert-box" style="border-left-color:var(--amber);margin-top:1rem">
    <strong>💡 Mock Day Protocol</strong><br>
    <span style="font-size:.85rem;color:var(--text2)">Morning: Take mock (3 hrs, exam conditions) → Afternoon: Detailed review (1.5 hrs) → Evening: Error log + strategy notes (30 min). No new content on mock days.</span>
  </div>`;

  el.innerHTML = html;
  updateCounts();
}

// ─── QA TRACKER ───
function renderQA() {
  const el = document.getElementById("qa");
  const totalQ = QA_CHAPTERS.reduce((s,c) => s + c.levels*c.qPerLevel, 0);

  let html = `<h2 class="section-title">Quant (QA) Tracker</h2>
    <p class="section-desc">${QA_CHAPTERS.length} chapters · ${totalQ}+ questions · 3 difficulty levels each · <strong id="qa-progress">0/0 levels done</strong></p>`;

  html += `<div class="alert-box" style="border-left-color:var(--accent);margin-bottom:1rem">
    <strong>📝 Strategy:</strong> Revise from IPM handwritten notes → Solve CrackU book questions → Watch video ONLY if stuck after notes revision
  </div>`;

  // Chapters
  QA_CHAPTERS.forEach(c => {
    let done = 0;
    for(let l=1;l<=c.levels;l++) if(getP(c.id+"_l"+l)) done++;
    const pct = Math.round((done/c.levels)*100);

    html += `<div class="card chapter-card" id="${c.id}">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <div style="flex:1">
          <strong>${c.name}</strong>
          <span style="font-size:.75rem;color:var(--text2);margin-left:.5rem">${c.levels} levels × ~${c.qPerLevel} Qs = ~${c.levels*c.qPerLevel} Qs</span>
        </div>
        <span style="font-size:.8rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${c.levels}</span>
        <div class="progress-bar" style="width:80px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:.3rem;padding:.5rem 0">`;

    for(let l=1;l<=c.levels;l++) {
      html += cb(c.id+"_l"+l, `Level ${l} (${c.qPerLevel} questions)`, `<span style="font-size:.7rem;color:var(--text2);margin-left:auto">~${c.qPerLevel} Qs</span>`);
    }

    html += `</div></div></div>`;
  });

  // Conditional QA Videos
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.1rem">📺 QA Video Lectures <span style="font-size:.8rem;color:var(--amber)">(Conditional — watch only if stuck)</span></h3>`;
  html += `<div class="alert-box" style="border-left-color:var(--amber);margin-bottom:1rem">
    <span style="font-size:.85rem">Watch these ONLY if you cannot solve questions after revising your IPM notes. Don't watch all — be selective.</span>
  </div>`;

  QA_VIDEOS.forEach(v => {
    let done = 0;
    for(let i=1;i<=v.count;i++) if(getP(v.id+"_"+i)) done++;
    html += `<div class="card" style="padding:.6rem 1rem;margin-bottom:.3rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.9rem">${v.name}</strong>
        <span style="font-size:.8rem;color:var(--text2)">${done}/${v.count} watched</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.2rem;padding:.5rem 0">`;
    for(let i=1;i<=v.count;i++) {
      html += cb(v.id+"_"+i, `Lecture ${i}`);
    }
    html += `</div></div>`;
  });

  el.innerHTML = html;
  updateCounts();
}

// ─── LRDI & DI TRACKER ───
function renderLRDI() {
  const el = document.getElementById("lrdi");

  let html = `<h2 class="section-title">LRDI & DI Tracker</h2>
    <p class="section-desc">Your weakest section — TOP PRIORITY · LR video lectures + Book exercises + DI practice</p>`;

  // ─ LR VIDEO LECTURES (must watch all) ─
  html += `<h3 style="margin-bottom:.75rem;font-size:1.1rem">📺 LR Video Lectures <span style="font-size:.8rem;color:var(--red)">(ALL must watch — 33 total)</span> · <span id="lv-progress" style="font-size:.8rem;color:var(--text2)">0/0</span></h3>`;
  html += `<div class="alert-box" style="border-left-color:var(--red);margin-bottom:1rem">
    <strong>🔴 Priority:</strong> LR is your weakest. Complete all 33 video lectures by end of August. Watch 1/day during college phase, 2/day if time permits.
  </div>`;

  LR_VIDEOS.forEach(v => {
    let done = 0;
    for(let i=1;i<=v.count;i++) if(getP(v.id+"_"+i)) done++;
    const pct = Math.round((done/v.count)*100);

    html += `<div class="card" style="margin-bottom:.4rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.9rem">${v.name}</strong>
        <span style="font-size:.8rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${v.count}</span>
        <div class="progress-bar" style="width:60px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.2rem;padding:.5rem 0">`;
    for(let i=1;i<=v.count;i++) html += cb(v.id+"_"+i, `Lecture ${i} (~1–1.5 hrs)`);
    html += `</div></div>`;
  });

  // ─ LR BOOK EXERCISES ─
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.1rem">📘 LR Book Exercises · <span id="lr-progress" style="font-size:.8rem;color:var(--text2)">0/0</span></h3>`;

  LR_CHAPTERS.forEach(c => {
    let done = 0;
    for(let l=1;l<=c.levels;l++) if(getP(c.id+"_l"+l)) done++;
    const pct = Math.round((done/c.levels)*100);
    const note = c.sets ? " (set-based, ~8–9 sets per level)" : "";

    html += `<div class="card chapter-card">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <div style="flex:1">
          <strong>${c.name}</strong>
          <span style="font-size:.75rem;color:var(--text2);margin-left:.5rem">${c.levels} level${c.levels>1?'s':''} × ~${c.qPerLevel} Qs${note}</span>
        </div>
        <span style="font-size:.8rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${c.levels}</span>
        <div class="progress-bar" style="width:60px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.3rem;padding:.5rem 0">`;
    for(let l=1;l<=c.levels;l++) {
      html += cb(c.id+"_l"+l, `Level ${l} (~${c.qPerLevel} questions / ~${Math.ceil(c.qPerLevel/5)} sets)`);
    }
    html += `</div></div>`;
  });

  // ─ DI BOOK EXERCISES ─
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.1rem">📊 DI Book Exercises · <span id="di-progress" style="font-size:.8rem;color:var(--text2)">0/0</span></h3>`;

  DI_CHAPTERS.forEach(c => {
    let done = 0;
    for(let l=1;l<=c.levels;l++) if(getP(c.id+"_l"+l)) done++;
    const pct = Math.round((done/c.levels)*100);

    html += `<div class="card chapter-card">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <div style="flex:1">
          <strong>${c.name}</strong>
          <span style="font-size:.75rem;color:var(--text2);margin-left:.5rem">${c.levels} level${c.levels>1?'s':''} × ~${c.qPerLevel} Qs</span>
        </div>
        <span style="font-size:.8rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${c.levels}</span>
        <div class="progress-bar" style="width:60px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.3rem;padding:.5rem 0">`;
    for(let l=1;l<=c.levels;l++) {
      html += cb(c.id+"_l"+l, `${c.levels>1?'Level '+l:'Exercise'} (~${c.qPerLevel} questions)`);
    }
    html += `</div></div>`;
  });

  // Mini-tests reminder
  html += `<div class="card" style="padding:1rem;margin-top:1.5rem">
    <h4 style="margin-bottom:.5rem">📝 LRDI Mini-Tests (from CrackU daily test bank)</h4>
    <p style="font-size:.85rem;color:var(--text2)">73 LRDI mini-tests pending · 15 min each · Do 1/day minimum · These are SEPARATE from book exercises above</p>
  </div>`;

  el.innerHTML = html;
  updateCounts();
}

// ─── VARC PLAN ───
function renderVARC() {
  const el = document.getElementById("varc");
  let html = `<h2 class="section-title">VARC Plan</h2>
    <p class="section-desc">Practice-driven · Daily RC habit · Newspaper reading · 90 VARC mini-tests</p>`;

  html += `<div class="alert-box" style="border-left-color:var(--varc);margin-bottom:1.5rem">
    <strong>📖 Core Strategy:</strong> No formal lectures needed. Build reading speed and comprehension through daily practice.
  </div>`;

  // Daily habits
  html += `<div class="card" style="padding:1.2rem;margin-bottom:1rem">
    <h4 style="margin-bottom:.8rem;color:var(--varc)">📌 Daily VARC Routine (Every Single Day)</h4>
    <div style="display:flex;flex-direction:column;gap:.6rem">
      <div style="display:flex;align-items:center;gap:.75rem;padding:.6rem .8rem;background:var(--surface2);border-radius:8px">
        <span style="font-size:1.2rem">📝</span>
        <div>
          <strong style="font-size:.9rem">1 RC Test</strong>
          <div style="font-size:.8rem;color:var(--text2)">15–20 min · From CrackU mini-test bank (90 total) · Build reading + answering speed</div>
        </div>
        <span style="font-size:.75rem;color:var(--varc);margin-left:auto">15 min</span>
      </div>
      <div style="display:flex;align-items:center;gap:.75rem;padding:.6rem .8rem;background:var(--surface2);border-radius:8px">
        <span style="font-size:1.2rem">📰</span>
        <div>
          <strong style="font-size:.9rem">The Hindu Editorial</strong>
          <div style="font-size:.8rem;color:var(--text2)">Read 1 editorial daily · Focus on understanding argument structure + vocab</div>
        </div>
        <span style="font-size:.75rem;color:var(--amber);margin-left:auto">20 min</span>
      </div>
      <div style="display:flex;align-items:center;gap:.75rem;padding:.6rem .8rem;background:var(--surface2);border-radius:8px">
        <span style="font-size:1.2rem">💼</span>
        <div>
          <strong style="font-size:.9rem">Economic Times Editorial</strong>
          <div style="font-size:.8rem;color:var(--text2)">Read when time permits · Good for business/economy RC passages</div>
        </div>
        <span style="font-size:.75rem;color:var(--cyan);margin-left:auto">15 min</span>
      </div>
    </div>
  </div>`;

  // Mini-tests tracker
  html += `<h3 style="margin-top:1.5rem;margin-bottom:.75rem;font-size:1.1rem">📝 VARC Mini-Tests (90 total)</h3>
    <p class="section-desc">RC passages (~73) + Non-RC tests (~17 — para jumbles, odd sentence, para summary) · 15 min each</p>`;

  // RC tests in batches of 10
  html += `<div style="display:flex;flex-direction:column;gap:.3rem">`;
  for(let batch=1; batch<=9; batch++) {
    const start = (batch-1)*10+1, end = Math.min(batch*10, 90);
    let done = 0;
    for(let i=start;i<=end;i++) if(getP("varc_"+i)) done++;
    const pct = Math.round((done/(end-start+1))*100);

    html += `<div class="card" style="margin-bottom:.2rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.85rem">${batch<=7?'RC Tests':'Non-RC Tests'} #${start}–${end}</strong>
        <span style="font-size:.8rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${end-start+1}</span>
        <div class="progress-bar" style="width:60px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:.3rem;padding:.5rem 0">`;
    for(let i=start;i<=end;i++) html += cb("varc_"+i, `Test ${i}`);
    html += `</div></div>`;
  }
  html += `</div>`;

  // QA mini-tests
  html += `<h3 style="margin-top:1.5rem;margin-bottom:.75rem;font-size:1.1rem">📘 QA Mini-Tests (94 total)</h3>`;
  html += `<div style="display:flex;flex-direction:column;gap:.3rem">`;
  for(let batch=1; batch<=10; batch++) {
    const start = (batch-1)*10+1, end = Math.min(batch*10, 94);
    let done = 0;
    for(let i=start;i<=end;i++) if(getP("qamt_"+i)) done++;
    html += `<div class="card" style="margin-bottom:.2rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.85rem">QA Tests #${start}–${end}</strong>
        <span style="font-size:.8rem;color:var(--text2)">${done}/${end-start+1}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:.3rem;padding:.5rem 0">`;
    for(let i=start;i<=end;i++) html += cb("qamt_"+i, `Test ${i}`);
    html += `</div></div>`;
  }
  html += `</div>`;

  // LRDI mini-tests
  html += `<h3 style="margin-top:1.5rem;margin-bottom:.75rem;font-size:1.1rem">📗 LRDI Mini-Tests (73 total)</h3>`;
  html += `<div style="display:flex;flex-direction:column;gap:.3rem">`;
  for(let batch=1; batch<=8; batch++) {
    const start = (batch-1)*10+1, end = Math.min(batch*10, 73);
    let done = 0;
    for(let i=start;i<=end;i++) if(getP("lrmt_"+i)) done++;
    html += `<div class="card" style="margin-bottom:.2rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.85rem">LRDI Tests #${start}–${end}</strong>
        <span style="font-size:.8rem;color:var(--text2)">${done}/${end-start+1}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:.3rem;padding:.5rem 0">`;
    for(let i=start;i<=end;i++) html += cb("lrmt_"+i, `Test ${i}`);
    html += `</div></div>`;
  }
  html += `</div>`;

  el.innerHTML = html;
}

// ─── MILESTONES ───
function renderMilestones() {
  const el = document.getElementById("milestones");
  let html = `<h2 class="section-title">Milestones & Estimates</h2>
    <p class="section-desc">Key dates and completion targets from July 6 to November 29</p>`;

  html += `<div style="display:flex;flex-direction:column;gap:.3rem">`;
  MILESTONES.forEach((m, i) => {
    const isLast = i === MILESTONES.length - 1;
    const isExam = m.icon === "🎓";
    html += `<div class="card" style="padding:.6rem 1rem;${isLast?'border-color:var(--amber);box-shadow:0 0 12px rgba(245,158,11,.2)':''}${isExam?'border-left:3px solid var(--red);':''}">
      <div style="display:flex;align-items:center;gap:1rem">
        <span style="font-size:1.2rem">${m.icon}</span>
        <span style="min-width:120px;font-size:.8rem;font-weight:700;color:var(--accent2)">${m.date}</span>
        <span style="font-size:.85rem">${m.event}</span>
      </div>
    </div>`;
  });
  html += `</div>`;

  // Content completion estimates
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.1rem">📊 Completion Estimates</h3>`;
  const estimates = [
    { title:"33 LR Video Lectures", target:"End of August", detail:"1/day college phase. All done by Aug 31.", color:"var(--red)" },
    { title:"LR Book Exercises", target:"Mid-October", detail:"2–3 sets/day. Accelerate during term break.", color:"var(--lrdi)" },
    { title:"DI Book Exercises", target:"Mid-October", detail:"Interleave with LR practice. ~30 min/day.", color:"var(--di)" },
    { title:"QA Book (825+ Qs)", target:"End of October", detail:"10–15 Qs/day. Notes revision first, then solve.", color:"var(--qa)" },
    { title:"257 Mini-Tests", target:"Early November", detail:"2–3/day. Mix of QA, LRDI, VARC.", color:"var(--accent)" },
    { title:"30 Full Mocks", target:"November 25", detail:"Ramp: 1/wk → 2/wk → 3/wk final weeks.", color:"var(--amber)" },
    { title:"CAT 2026 Exam", target:"November 29", detail:"D-Day. You've got this. 🏆", color:"var(--pink)" }
  ];

  html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:.75rem">`;
  estimates.forEach(e => {
    html += `<div class="card" style="padding:1rem">
      <h4 style="font-size:.85rem;margin-bottom:.4rem">${e.title}</h4>
      <div style="font-size:1.1rem;font-weight:800;color:${e.color}">${e.target}</div>
      <div style="font-size:.8rem;color:var(--text2);margin-top:.3rem">${e.detail}</div>
    </div>`;
  });
  html += `</div>`;

  // Hard rules
  html += `<div class="alert-box" style="border-left-color:var(--red);margin-top:1.5rem">
    <strong>🛑 Hard Rules</strong><br>
    <ul style="font-size:.85rem;color:var(--text2);margin-top:.3rem;padding-left:1rem;line-height:1.8">
      <li>No new content after Oct 31 — Nov is mocks + revision ONLY</li>
      <li>Never skip daily RC test — even during exam weeks</li>
      <li>Error log every single day — even 15 min counts</li>
      <li>Mock review is NON-NEGOTIABLE — no mock without full review</li>
      <li>LR videos are TOP priority — finish before anything else</li>
    </ul>
  </div>`;

  el.innerHTML = html;
}

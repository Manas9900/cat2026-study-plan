// CAT 2026 War Room App v6.0 — 98+ Percentile | Daily EOD Targets | 25 Mocks | 45 Sectionals
document.addEventListener("DOMContentLoaded", () => {
  initDefaults();
  initCountdown();
  initTabs();
  renderDaily();
  renderPlan();
  renderMocks();
  renderSectionals();
  renderShortNotes();
  renderVARC();
  renderDILR();
  renderMilestones();
  updateCounts();
});

// ─── DEFAULTS ───────────────────────────────────────────────────────────────
function initDefaults() {
  // Sequence & Series already done
  if (localStorage.getItem("cat26_sn_seq") === null) localStorage.setItem("cat26_sn_seq", "1");
}

// ─── PERSISTENCE ────────────────────────────────────────────────────────────
const getP = k => localStorage.getItem("cat26_" + k) === "1";
const setP = (k, v) => localStorage.setItem("cat26_" + k, v ? "1" : "0");
function toggleP(k) { setP(k, !getP(k)); updateCounts(); }

function cb(key, label, cls = "") {
  const c = getP(key) ? "checked" : "";
  const s = getP(key) ? "text-decoration:line-through;color:var(--text2)" : "";
  return `<label class="exercise-row ${cls}"><input type="checkbox" class="checkbox-custom" ${c} onchange="toggleP('${key}')"><span style="${s}">${label}</span></label>`;
}

// ─── COUNT UPDATES ───────────────────────────────────────────────────────────
function updateCounts() {
  // Mocks
  const mDone = MOCKS.filter(m => getP("mock_" + m.num)).length;
  el("mock-prog", `${mDone}/${MOCKS.length}`);
  el("stat-mocks", `${mDone}/${MOCKS.length}`);

  // Sectionals
  let secDone = 0;
  ["varc","dilr","qa"].forEach(s => { for (let i = 1; i <= SECTIONAL_TESTS[s]; i++) if (getP("sec_"+s+"_"+i)) secDone++; });
  el("sec-prog", `${secDone}/${SECTIONAL_TESTS.total}`);
  el("stat-sec", `${secDone}/${SECTIONAL_TESTS.total}`);

  // Short Notes
  const snDone = QA_SHORT_NOTES.filter(s => getP(s.id)).length;
  el("sn-prog", `${snDone}/${QA_SHORT_NOTES.length}`);
  el("stat-sn", `${snDone}/${QA_SHORT_NOTES.length}`);

  // VARC days
  const vDone = VARC_DAYS.filter(d => getP(d.id)).length;
  el("varc-prog", `${vDone}/${VARC_DAYS.length} days logged`);
}

function el(id, txt) { const e = document.getElementById(id); if (e) e.textContent = txt; }

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────
function initCountdown() {
  function upd() {
    const diff = CAT_DATE - new Date();
    const d = Math.floor(diff / 864e5), h = Math.floor((diff % 864e5) / 36e5), m = Math.floor((diff % 36e5) / 6e4);
    document.getElementById("countdown").textContent = `${d} days, ${h} hours, ${m} mins to CAT 2026`;
    document.getElementById("stat-days").textContent = d;
  }
  upd(); setInterval(upd, 60000);
}

// ─── TABS ────────────────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".tab,.tab-panel").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById(b.dataset.tab).classList.add("active");
  }));
}

function formatSecBadges(sec) {
  if (!sec) return '';
  const arr = Array.isArray(sec) ? sec : [sec];
  return arr.map(s => {
    const isVarc = s.toLowerCase().startsWith('varc');
    const isDilr = s.toLowerCase().startsWith('dilr');
    const color = isVarc ? 'var(--varc)' : (isDilr ? 'var(--lrdi)' : 'var(--qa)');
    const num = s.split('_')[1];
    const name = isVarc ? 'VA Sectional' : (isDilr ? 'DILR Sectional' : 'QA Sectional');
    return `<span style="font-size:.65rem;padding:2px 7px;border-radius:99px;background:${color}20;color:${color};margin-left:.3rem;font-weight:700">${name} #${num}</span>`;
  }).join('');
}

function renderScheduledTestsBanner(mock, sec) {
  if (!mock && !sec) return '';
  const items = [];
  if (mock) {
    items.push(`<span style="background:var(--accent)25;color:var(--accent2);padding:4px 10px;border-radius:6px;font-weight:700;font-size:.78rem;border:1px solid var(--accent)50">🧪 Full Mock Test #${mock} (2 Hours · CAT Slot)</span>`);
  }
  if (sec) {
    const arr = Array.isArray(sec) ? sec : [sec];
    arr.forEach(s => {
      const isVarc = s.toLowerCase().startsWith('varc');
      const isDilr = s.toLowerCase().startsWith('dilr');
      const color = isVarc ? 'var(--varc)' : (isDilr ? 'var(--lrdi)' : 'var(--qa)');
      const name = isVarc ? 'VA Sectional Test' : (isDilr ? 'DILR Sectional Test' : 'QA Sectional Test');
      const num = s.split('_')[1];
      items.push(`<span style="background:${color}20;color:${color};padding:4px 10px;border-radius:6px;font-weight:700;font-size:.78rem;border:1px solid ${color}40">🎯 ${name} #${num} (40 Mins)</span>`);
    });
  }
  return `<div style="background:var(--surface2);border-radius:8px;padding:.5rem .75rem;margin-bottom:.7rem;display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">
    <span style="font-size:.7rem;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.05em">⚡ Scheduled Tests:</span>
    ${items.join(' ')}
  </div>`;
}

// ─── TAB: DAILY EOD TARGETS ─────────────────────────────────────────────────
function renderDaily() {
  const today = new Date().toISOString().split("T")[0];
  const phaseColors = { p1:"var(--cyan)", p2:"var(--amber)", p3:"var(--green)", p4:"var(--pink)" };
  const typeLabels  = {
    college:"🏫 College Day", "college+mock":"🏫+🧪 College + Mock", "weekend":"☀️ Weekend",
    "weekend+mock":"☀️+🧪 Weekend + Mock", holiday:"🏹 Holiday", deepawali:"🪔 Deepawali",
    "deepawali+mock":"🪔+🧪 Deepawali + Mock", midterm:"🎓 Midterm", "midterm+mock":"🎓+🧪 Midterm + Mock",
    midterm_end:"🎓 Midterm Last Day", "free+mock":"🏛️+🧪 Foundation Day + Mock", taper:"🧘 Taper Day"
  };

  // Find today's day
  const todayEntry = DAILY_PLAN.find(d => d.date === today);
  const todayNum   = todayEntry ? todayEntry.day : null;

  let h = `<h2 class="section-title">📅 Daily EOD Targets — 40-Day War Room</h2>
    <p class="section-desc">Specific tasks for every single day · Check off by End of Day · Auto-highlights today</p>`;

  // Today's spotlight card (if in range)
  if (todayEntry) {
    const pc = phaseColors[todayEntry.phase];
    h += `<div class="card" style="padding:1.2rem;border-color:${pc};box-shadow:0 0 20px ${pc}30;margin-bottom:1.5rem;animation:pulse-border 2s infinite">
      <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.8rem">
        <span style="font-size:1.5rem">🎯</span>
        <div>
          <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${pc}">TODAY — Day ${todayEntry.day} / 40</div>
          <div style="font-size:1.1rem;font-weight:800">${todayEntry.label} (${todayEntry.weekday}) · ${typeLabels[todayEntry.type] || todayEntry.type}
            ${todayEntry.mock ? `<span style="font-size:.7rem;padding:2px 8px;border-radius:99px;background:var(--accent)20;color:var(--accent);margin-left:.4rem;font-weight:700">Full Mock #${todayEntry.mock}</span>` : ''}
            ${formatSecBadges(todayEntry.sectional)}
          </div>
        </div>
      </div>
      ${renderScheduledTestsBanner(todayEntry.mock, todayEntry.sectional)}
      ${todayEntry.note ? `<div style="font-size:.82rem;background:var(--surface2);padding:.5rem .75rem;border-radius:8px;border-left:3px solid ${pc};margin-bottom:.8rem;color:var(--text)">${todayEntry.note}</div>` : ''}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-bottom:.8rem">
        <div style="background:var(--surface2);border-radius:8px;padding:.7rem">
          <div style="font-size:.7rem;font-weight:700;color:var(--amber);text-transform:uppercase;margin-bottom:.4rem">🌅 Morning</div>
          ${todayEntry.morning.map(t=>`<div style="font-size:.8rem;padding:.2rem 0;border-bottom:1px solid var(--border);line-height:1.4">› ${t}</div>`).join('')}
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:.7rem">
          <div style="font-size:.7rem;font-weight:700;color:var(--purple);text-transform:uppercase;margin-bottom:.4rem">🌙 Evening</div>
          ${todayEntry.evening.map(t=>`<div style="font-size:.8rem;padding:.2rem 0;border-bottom:1px solid var(--border);line-height:1.4">› ${t}</div>`).join('')}
        </div>
      </div>
      <div style="background:var(--surface2);border-radius:8px;padding:.7rem">
        <div style="font-size:.7rem;font-weight:700;color:var(--green);text-transform:uppercase;margin-bottom:.5rem">✅ EOD Checklist — Complete before midnight</div>
        ${todayEntry.eod.map((item,i)=>cb('eod_d'+todayEntry.day+'_'+i, item, 'eod-item')).join('')}
      </div>
      ${todayEntry.tip ? `<div style="font-size:.79rem;color:var(--accent2);margin-top:.6rem;padding:.4rem .6rem;background:var(--surface2);border-radius:6px">${todayEntry.tip}</div>` : ''}
    </div>`;
  } else if (today < "2026-10-20") {
    h += `<div class="alert-box" style="border-left-color:var(--cyan)">⏳ War Room starts Oct 20, 2026. Get ready!</div>`;
  } else {
    h += `<div class="alert-box" style="border-left-color:var(--amber)">🏆 CAT 2026 complete! Review your performance and plan for IIM interviews.</div>`;
  }

  // Phase grouping
  const phases = [
    { id:"p1", label:"Phase 1: Pre-Midterm Power Surge", sub:"Oct 20 – Nov 8 · 5–6 hrs/day · Max output" },
    { id:"p2", label:"Phase 2: Midterm Maintenance", sub:"Nov 9–15 · 1.5 hrs/day · Stay sharp" },
    { id:"p3", label:"Phase 3: Peak Daily Mock Sprint", sub:"Nov 16–26 · 7–8 hrs/day · Daily mocks" },
    { id:"p4", label:"Phase 4: Taper & Consolidation", sub:"Nov 27–28 · 2 hrs max · Rest & consolidate" }
  ];

  phases.forEach(phase => {
    const days = DAILY_PLAN.filter(d => d.phase === phase.id);
    const pc = phaseColors[phase.id];
    const eodDoneCount = days.reduce((acc, d) => acc + d.eod.filter((_,i) => getP('eod_d'+d.day+'_'+i)).length, 0);
    const eodTotal = days.reduce((acc, d) => acc + d.eod.length, 0);

    h += `<div style="margin-bottom:2rem">
      <div class="week-header">
        <h3 style="color:${pc}">${phase.label}</h3>
        <span style="font-size:.75rem;color:var(--text2)">${eodDoneCount}/${eodTotal} tasks done</span>
        <div class="line"></div>
      </div>
      <p style="font-size:.76rem;color:var(--text2);margin-bottom:.7rem">${phase.sub}</p>
      <div style="display:flex;flex-direction:column;gap:.5rem">`;

    days.forEach(d => {
      const isToday = d.date === today;
      const isPast  = d.date < today;
      const eodDone = d.eod.filter((_,i) => getP('eod_d'+d.day+'_'+i)).length;
      const allDone = eodDone === d.eod.length;
      const pct     = Math.round((eodDone / d.eod.length) * 100);

      let borderColor = isToday ? pc : (allDone ? 'var(--green)' : (isPast ? 'var(--red)' : 'var(--border)'));
      let glow = isToday ? `box-shadow:0 0 12px ${pc}40;` : '';

      h += `<div class="card day-card" style="padding:0;border-color:${borderColor};${glow}">
        <div class="card-header" onclick="this.parentElement.classList.toggle('open')"
             style="display:flex;align-items:center;gap:.8rem;padding:.7rem 1rem;cursor:pointer">
          <span style="min-width:50px;font-size:.75rem;font-weight:800;color:${isToday?pc:(allDone?'var(--green)':(isPast?'var(--red)':'var(--text2)'))}">${isToday?'TODAY':('Day '+d.day)}</span>
          <span style="font-size:.82rem;font-weight:700;flex:1">${d.label} (${d.weekday})
            ${d.mock?`<span style="font-size:.65rem;padding:2px 6px;border-radius:99px;background:var(--accent)20;color:var(--accent);margin-left:.4rem;font-weight:700">Full Mock #${d.mock}</span>`:''}
            ${formatSecBadges(d.sectional)}
          </span>
          <span style="font-size:.7rem;color:var(--text2)">${typeLabels[d.type]||d.type}</span>
          <div style="display:flex;align-items:center;gap:.4rem">
            <div class="progress-bar" style="width:50px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
            <span style="font-size:.72rem;color:${allDone?'var(--green)':'var(--text2)'}">${eodDone}/${d.eod.length}</span>
          </div>
          <span class="chevron">▾</span>
        </div>
        <div class="card-body" style="padding:.7rem 1rem;border-top:1px solid var(--border)">
          ${renderScheduledTestsBanner(d.mock, d.sectional)}
          ${d.note?`<div style="font-size:.78rem;color:var(--text2);background:var(--surface2);padding:.4rem .6rem;border-radius:6px;border-left:3px solid ${pc};margin-bottom:.7rem">${d.note}</div>`:''}
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.7rem">
            <div>
              <div style="font-size:.68rem;font-weight:700;color:var(--amber);text-transform:uppercase;margin-bottom:.3rem">🌅 Morning</div>
              ${d.morning.map(t=>`<div style="font-size:.77rem;color:var(--text2);padding:.15rem 0;border-bottom:1px solid var(--border)">› ${t}</div>`).join('')}
            </div>
            <div>
              <div style="font-size:.68rem;font-weight:700;color:var(--purple);text-transform:uppercase;margin-bottom:.3rem">🌙 Evening</div>
              ${d.evening.map(t=>`<div style="font-size:.77rem;color:var(--text2);padding:.15rem 0;border-bottom:1px solid var(--border)">› ${t}</div>`).join('')}
            </div>
          </div>
          <div style="background:var(--surface2);border-radius:7px;padding:.6rem">
            <div style="font-size:.68rem;font-weight:700;color:var(--green);text-transform:uppercase;margin-bottom:.4rem">✅ EOD Checklist</div>
            ${d.eod.map((item,i)=>cb('eod_d'+d.day+'_'+i, item, 'eod-item')).join('')}
          </div>
          ${d.tip?`<div style="font-size:.75rem;color:var(--accent2);margin-top:.5rem;padding:.3rem .5rem;background:var(--surface2);border-radius:5px">${d.tip}</div>`:''}
        </div>
      </div>`;
    });

    h += `</div></div>`;
  });

  // CAT Day card
  h += `<div class="card" style="padding:1.2rem;border-color:var(--amber);box-shadow:0 0 24px rgba(245,158,11,.3);margin-top:1rem">
    <div style="text-align:center;margin-bottom:.8rem">
      <div style="font-size:1.8rem">🏆</div>
      <div style="font-size:1.1rem;font-weight:800;color:var(--amber)">Nov 29 — CAT 2026 EXAM DAY</div>
      <div style="font-size:.82rem;color:var(--text2);margin-top:.3rem">${CAT_DAY.note}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:.3rem">
      ${CAT_DAY.sections.map(s=>`<div style="font-size:.82rem;background:var(--surface2);padding:.4rem .7rem;border-radius:6px">🎯 ${s}</div>`).join('')}
    </div>
    <div style="font-size:.79rem;color:var(--accent2);margin-top:.7rem;text-align:center">${CAT_DAY.morning}</div>
  </div>`;

  document.getElementById("daily").innerHTML = h;
}

// ─── TAB 1: BATTLE PLAN ──────────────────────────────────────────────────────
function renderPlan() {
  const cp = getCurrentPhase();
  let h = `<h2 class="section-title">⚔️ 40-Day War Room — 98+ Percentile Battle Plan</h2>
    <p class="section-desc">Active Phase: <strong style="color:${cp.color}">${cp.name}</strong> · ${cp.hrs}</p>`;

  // Score Target Box
  h += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.75rem;margin-bottom:1.5rem">`;
  [
    { label:"Overall Target", val:"98+ Percentile", sub:"~110–120 raw / 198", c:"var(--accent)" },
    { label:"QA Target", val:"20–22 Correct", sub:"85%+ acc · Sub-90s per easy Q", c:"var(--qa)" },
    { label:"DILR Target", val:"12–14 Correct", sub:"80%+ acc · 2.5 sets complete", c:"var(--lrdi)" },
    { label:"VARC Target", val:"16–18 Correct", sub:"78%+ acc · Eliminate don't select", c:"var(--varc)" }
  ].forEach(t => {
    h += `<div class="card" style="padding:1rem;border-color:${t.c};text-align:center">
      <div style="font-size:.72rem;color:var(--text2);font-weight:600;text-transform:uppercase;letter-spacing:.05em">${t.label}</div>
      <div style="font-size:1.4rem;font-weight:800;color:${t.c};margin:.3rem 0">${t.val}</div>
      <div style="font-size:.72rem;color:var(--text2)">${t.sub}</div>
    </div>`;
  });
  h += `</div>`;

  // Phase Roadmap
  h += `<div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">`;
  PHASES.forEach(p => {
    const cur = p.id === cp.id;
    h += `<div class="card" style="padding:.7rem 1.1rem;${cur ? `border-color:${p.color};box-shadow:0 0 14px ${p.color}30;` : ''}display:flex;align-items:flex-start;gap:.9rem">
      <span style="font-size:.68rem;padding:3px 10px;border-radius:99px;background:${p.color}20;color:${p.color};font-weight:700;min-width:100px;text-align:center;white-space:nowrap;margin-top:.15rem">${p.hrs}</span>
      <div style="flex:1">
        <div style="font-weight:${cur?700:600};font-size:.86rem">${p.name} ${cur?'<span style="font-size:.62rem;padding:2px 7px;border-radius:99px;background:var(--green);color:#fff;margin-left:.3rem">ACTIVE NOW</span>':''}</div>
        <div style="font-size:.75rem;color:var(--text2);margin-top:.15rem">${p.desc}</div>
      </div>
      <span style="font-size:.74rem;color:var(--text2);white-space:nowrap">${fmtDate(p.start)} – ${fmtDate(p.end)}</span>
    </div>`;
  });
  h += `</div>`;

  // Blocked days
  h += `<div class="alert-box" style="border-left-color:var(--amber);margin-bottom:1.5rem">
    <strong>📅 Key Dates & Blocked Days:</strong>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.4rem;margin-top:.5rem">
      ${BLOCKED.map(b => `<div style="font-size:.8rem;background:var(--surface2);padding:.35rem .6rem;border-radius:6px;border-left:3px solid ${b.color}"><strong>${fmtDate(b.start)}</strong> ${b.start!==b.end?'–'+fmtDate(b.end):''}: ${b.label}</div>`).join("")}
    </div>
  </div>`;

  // Daily Templates
  const templates = [
    {
      title: "🏫 College Day (Class: 10:20–17:20)",
      color: "var(--cyan)",
      phase: "Phase 1 & 2",
      slots: [
        { t:"5:45–7:30 AM (1.75h)", c:"var(--qa)", task:"QA Short-Notes (1 chapter) + Speed Drill: 20 Qs of that chapter in 25 min timer" },
        { t:"7:30–8:00 AM (30 min)", c:"var(--varc)", task:"1 RC passage (Aeon/Economist) — read actively, no questions. Just comprehension training." },
        { t:"10:20–17:20", c:"var(--text2)", task:"College classes. Formula flashcards during breaks." },
        { t:"6:00–7:30 PM (1.5h)", c:"var(--lrdi)", task:"3 DILR sets under 35-min timer + 20-min review of errors" },
        { t:"8:30–10:00 PM (1.5h)", c:"var(--varc)", task:"2nd RC passage with FULL ANNOTATION (why wrong options are wrong) + Hindu/Aeon editorial" }
      ]
    },
    {
      title: "🔥 Free Day / Holiday",
      color: "var(--green)",
      phase: "Phase 1 (Max Output)",
      slots: [
        { t:"6:30–9:30 AM (3h)", c:"var(--accent)", task:"FULL MOCK under strict exam conditions (8:30 AM is CAT slot — start at that time)" },
        { t:"10:00 AM–12:30 PM (2.5h)", c:"var(--accent)", task:"DEEP MOCK REVIEW — 5-step protocol (VARC annotation → DILR re-solve → QA trap audit → Pattern analysis → Next-mock strategy note)" },
        { t:"2:00–4:00 PM (2h)", c:"var(--lrdi)", task:"QA Short-Notes (2 chapters) + speed drills (20 Qs each under 25-min timer)" },
        { t:"5:00–6:30 PM (1.5h)", c:"var(--lrdi)", task:"3 DILR sets (35-min timed) — focus on weakest set-type identified in today's mock" },
        { t:"8:00–9:00 PM (1h)", c:"var(--varc)", task:"1 RC passage annotation + error log update + tomorrow's plan (3 specific improvement targets)" }
      ]
    },
    {
      title: "🎓 Midterm Exam Days (Nov 9–15)",
      color: "var(--amber)",
      phase: "Phase 2 (Maintenance)",
      slots: [
        { t:"6:30–8:00 AM (1.5h)", c:"var(--accent)", task:"1 VARC sectional (40 min) + review OR 2 DILR sets (35 min). Alternate days." },
        { t:"College / Midterm exams", c:"var(--text2)", task:"Focus on your IIM Rohtak exams. Zero guilt." },
        { t:"9:30–10:00 PM (30 min)", c:"var(--qa)", task:"QA formula sheet review (1 chapter, 5 min each). Error log update." }
      ]
    },
    {
      title: "⚡ Peak Sprint Days (Nov 16–26)",
      color: "var(--green)",
      phase: "Phase 3 (Daily Mock)",
      slots: [
        { t:"8:00–10:30 AM (2.5h)", c:"var(--accent)", task:"FULL MOCK at 8:30 AM sharp — CAT exam slot simulation" },
        { t:"11:00 AM–1:30 PM (2.5h)", c:"var(--accent)", task:"Immediate mock review — all 5 steps. No exceptions." },
        { t:"3:00–5:00 PM (2h)", c:"var(--lrdi)", task:"DILR cold re-solve (yesterday's wrong sets) + 2 fresh sets" },
        { t:"6:00–7:30 PM (1.5h)", c:"var(--qa)", task:"QA speed round: 30 questions mixed from short-notes chapters. Timer on." },
        { t:"8:30–9:30 PM (1h)", c:"var(--varc)", task:"2 RC passages (annotation) + error pattern note for tomorrow's mock improvement" }
      ]
    }
  ];

  templates.forEach(t => {
    h += `<div style="margin-bottom:1.8rem">
      <div class="week-header"><h3>${t.title}</h3>
        <span class="phase-badge" style="background:${t.color}20;color:${t.color}">${t.phase}</span>
        <div class="line"></div></div>
      <div class="card" style="padding:.8rem;display:flex;flex-direction:column;gap:.5rem">`;
    t.slots.forEach(s => {
      h += `<div style="display:flex;gap:.9rem;padding:.55rem .7rem;background:var(--surface2);border-radius:8px;align-items:flex-start">
        <div style="min-width:155px;font-size:.76rem;font-weight:700;color:${s.c};flex-shrink:0">${s.t}</div>
        <div style="font-size:.82rem;color:var(--text);line-height:1.5">${s.task}</div>
      </div>`;
    });
    h += `</div></div>`;
  });

  document.getElementById("weekly").innerHTML = h;
}

// ─── TAB 2: 25 MOCKS ─────────────────────────────────────────────────────────
function renderMocks() {
  const pColors = { p1:"var(--cyan)", p2:"var(--amber)", p3:"var(--green)" };
  let h = `<h2 class="section-title">25 Full-Length Mocks Calendar</h2>
    <p class="section-desc">Quality > Quantity · 2h exam + 2.5h deep review = 4.5h total per mock · Completed: <strong id="mock-prog">0/25</strong></p>`;

  h += `<div class="alert-box" style="border-left-color:var(--red);margin-bottom:1.5rem">
    <strong>🛑 The 5-Step Review Protocol (mandatory after EVERY mock):</strong>
    <div style="display:flex;flex-direction:column;gap:.4rem;margin-top:.5rem">
    ${REVIEW_PROTOCOL.map(r => `<div style="font-size:.8rem;background:var(--surface2);padding:.4rem .6rem;border-radius:6px">
      <strong style="color:var(--accent2)">${r.step}:</strong> <span style="color:var(--text2)">${r.detail}</span></div>`).join("")}
    </div>
  </div>`;

  // Group by phase
  const groups = { p1:"Pre-Midterm Surge (Oct 21 – Nov 8)", p2:"Midterm Window (Nov 9–15)", p3:"Peak Sprint (Nov 16–26)" };
  ["p1","p2","p3"].forEach(ph => {
    const mocks = MOCKS.filter(m => m.phase === ph);
    h += `<div style="margin-bottom:1.5rem"><h3 style="font-size:.95rem;margin-bottom:.6rem;color:${pColors[ph]}">${groups[ph]}</h3>
      <div class="card" style="padding:0;overflow:hidden">`;
    mocks.forEach(m => {
      const done = getP("mock_" + m.num);
      h += `<div style="border-bottom:1px solid var(--border);padding:.7rem 1rem;background:${done?'var(--surface2)':'transparent'}">
        <label style="display:flex;align-items:center;gap:.9rem;cursor:pointer">
          <input type="checkbox" class="checkbox-custom" ${done?"checked":""} onchange="toggleP('mock_${m.num}')">
          <span style="font-size:.8rem;font-weight:700;color:${pColors[ph]};min-width:45px">#${m.num}</span>
          <div style="flex:1">
            <div style="font-size:.86rem;font-weight:600;${done?'text-decoration:line-through;color:var(--text2)':''}">${fmtDate(m.date)} (${m.day})</div>
            <div style="font-size:.74rem;color:var(--text2)">${m.focus}</div>
          </div>
        </label>
      </div>`;
    });
    h += `</div></div>`;
  });

  document.getElementById("mocks").innerHTML = h;
}

// ─── TAB 3: 45 SECTIONALS ────────────────────────────────────────────────────
function renderSectionals() {
  let h = `<h2 class="section-title">45 Sectional Tests Tracker</h2>
    <p class="section-desc">VARC (15) + DILR (15) + QA (15) = 45 Total · 40 min each · <span id="sec-prog">0/45</span> done · Spaced across all 40 days</p>`;

  h += `<div class="alert-box" style="border-left-color:var(--green);margin-bottom:1.5rem">
    <strong>⏱️ Real 40-Minute Sectional Mock Exams:</strong> Each sectional test is a complete 40-minute computer-based test from your test series portal (IMS / TIME / CL / Cracku) — equivalent to 1/3 of an actual CAT exam:
    <ul style="font-size:.82rem;color:var(--text2);margin-top:.4rem;padding-left:1.2rem;line-height:1.8">
      <li><strong>VA Sectionals (15 tests):</strong> Complete 40 mins · 24 Questions (16 RC in 4 passages + 8 VA). Target: 16+ correct via strict 3-pass elimination.</li>
      <li><strong>DILR Sectionals (15 tests):</strong> Complete 40 mins · 20 Questions (4 sets of 5 Qs). Target: 2.5 sets complete (12+ correct) via 4-min scan rule.</li>
      <li><strong>QA Sectionals (15 tests):</strong> Complete 40 mins · 22 Questions across all domains. Target: 20+ correct via 2-round execution (sub-90s easy Qs).</li>
    </ul>
    <div style="font-size:.78rem;color:var(--accent2);margin-top:.4rem">💡 <em>Always take each sectional with full 40-min continuous timer without pausing, followed immediately by 25–30 min error analysis.</em></div>
  </div>`;

  [
    { name:"VA Sectional Tests (15 Tests · 40 Min Each)", prefix:"sec_varc", count:15, color:"var(--varc)",
      tips:["Tests 1–5: Focus on RC only. 2 passages, time-box each to 12 min. 3-pass elimination.", "Tests 6–10: Mix RC + VA (Para Jumbles & Odd Sentence). Aim for 80%+ accuracy.", "Tests 11–15: Full section simulation. Zero guesswork, ruthless option elimination."] },
    { name:"DILR Sectional Tests (15 Tests · 40 Min Each)", prefix:"sec_dilr", count:15, color:"var(--lrdi)",
      tips:["Tests 1–5: 4-min scan rule discipline. Pick 2 green sets only.", "Tests 6–10: Mix set types (Tournaments + Quant DILR + Scheduling). Complete 2 sets clean.", "Tests 11–15: Strict exam conditions. Attempt 2.5 sets with 85%+ accuracy."] },
    { name:"QA Sectional Tests (15 Tests · 40 Min Each)", prefix:"sec_qa", count:15, color:"var(--qa)",
      tips:["Tests 1–5: Speed drill on Easy+Medium Qs — sub-90s target for easy Qs.", "Tests 6–10: 2-round strategy execution (Round 1: 35 min easy, Round 2: 25 min medium).", "Tests 11–15: Full section simulation. Skip hard traps instantly. Target 20+ correct."] }
  ].forEach(s => {
    let done = 0; for (let i = 1; i <= s.count; i++) if (getP(s.prefix+"_"+i)) done++;
    const pct = Math.round((done/s.count)*100);
    h += `<div style="margin-bottom:1.8rem">
      <div class="week-header"><h3 style="color:${s.color}">${s.name}</h3>
        <span style="font-size:.8rem;color:${done===s.count?'var(--green)':'var(--text2)'}">${done}/${s.count} done</span>
        <div class="progress-bar" style="width:100px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="line"></div></div>
      <div style="display:flex;flex-direction:column;gap:.2rem;margin-bottom:.7rem">
        ${s.tips.map(t=>`<div style="font-size:.75rem;color:var(--text2);background:var(--surface2);padding:.3rem .6rem;border-radius:5px">• ${t}</div>`).join("")}
      </div>
      <div class="card" style="padding:.7rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:.35rem">
        ${Array.from({length:s.count},(_,i)=>cb(s.prefix+"_"+(i+1),`Test #${i+1}`)).join("")}
      </div></div>`;
  });

  document.getElementById("qa").innerHTML = h;
}

// ─── TAB 4: QA SHORT NOTES ───────────────────────────────────────────────────
function renderShortNotes() {
  let h = `<h2 class="section-title">QA Formula Short-Notes (All 16 Chapters)</h2>
    <p class="section-desc">1–2 pages per chapter · Formula + Shortcut + Trap Alert · After writing: 20-Q speed drill in 25 min · Done: <span id="sn-prog">1/16</span></p>`;

  h += `<div class="alert-box" style="border-left-color:var(--qa);margin-bottom:1.5rem">
    <strong>📝 Short-Notes Protocol:</strong> Each chapter note must include: <br>
    <span style="font-size:.8rem;color:var(--text2)">(1) Core formulas with conditions of validity &nbsp;|&nbsp; (2) 3–5 shortcut tricks with example &nbsp;|&nbsp; (3) Top 2 traps you fall for in mocks &nbsp;|&nbsp; (4) One line mnemonics to recall on exam day</span>
  </div>`;

  // Speed drill tracker alongside
  h += `<div style="display:flex;flex-direction:column;gap:.45rem">`;
  QA_SHORT_NOTES.forEach((sn, i) => {
    const done = getP(sn.id);
    const drillDone = getP("drill_" + sn.id);
    const badgeColor = sn.priority === "high" ? "var(--red)" : sn.priority === "med" ? "var(--amber)" : "var(--green)";

    h += `<div class="card" style="padding:0;border-color:${done?'var(--green)':'var(--border)'}">
      <div style="display:flex;align-items:center;gap:.8rem;padding:.75rem 1.1rem">
        <input type="checkbox" class="checkbox-custom" ${done?"checked":""} onchange="toggleP('${sn.id}')">
        <div style="flex:1">
          <div style="font-size:.85rem;font-weight:600;${done?'text-decoration:line-through;color:var(--text2)':''}">${i+1}. ${sn.name}</div>
        </div>
        <span style="font-size:.7rem;padding:2px 8px;border-radius:99px;background:${done?'var(--green)20':'var(--surface2)'};color:${done?'var(--green)':badgeColor};font-weight:700">${done?'Done ✅':sn.badge}</span>
        <div style="display:flex;align-items:center;gap:.4rem;margin-left:.5rem">
          <input type="checkbox" class="checkbox-custom" ${drillDone?"checked":""} onchange="toggleP('drill_${sn.id}')">
          <span style="font-size:.72rem;color:${drillDone?'var(--green)':'var(--text2)'}">${drillDone?'Drill ✅':'Speed Drill'}</span>
        </div>
      </div>
    </div>`;
  });
  h += `</div>`;

  document.getElementById("lrdi").innerHTML = h;
}

// ─── TAB 5: VARC SYSTEM ─────────────────────────────────────────────────────
function renderVARC() {
  let h = `<h2 class="section-title">VARC Accuracy System — 16+ Correct</h2>
    <p class="section-desc">Elimination over selection · 2 annotated RC passages daily · Aeon / Economist / HBR level reading</p>`;

  // RC Protocol
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.2rem;border-color:var(--varc)">
    <h4 style="color:var(--varc);margin-bottom:.7rem">📖 ${VARC_SYSTEM.rc.title}</h4>
    ${VARC_SYSTEM.rc.steps.map((s,i)=>`<div style="display:flex;gap:.7rem;padding:.4rem 0;border-bottom:${i<VARC_SYSTEM.rc.steps.length-1?'1px solid var(--border)':'none'}"><span style="color:var(--accent2);font-weight:700;min-width:16px">${i+1}.</span><span style="font-size:.83rem;color:var(--text)">${s}</span></div>`).join("")}
  </div>`;

  // VA Protocol
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.2rem;border-color:var(--varc)">
    <h4 style="color:var(--varc);margin-bottom:.7rem">⚡ ${VARC_SYSTEM.va.title}</h4>
    ${VARC_SYSTEM.va.steps.map((s,i)=>`<div style="display:flex;gap:.7rem;padding:.4rem 0;border-bottom:${i<VARC_SYSTEM.va.steps.length-1?'1px solid var(--border)':'none'}"><span style="color:var(--accent2);font-weight:700;min-width:16px">${i+1}.</span><span style="font-size:.83rem;color:var(--text)">${s}</span></div>`).join("")}
  </div>`;

  // Reading list
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.5rem">
    <h4 style="color:var(--amber);margin-bottom:.6rem">📚 ${VARC_SYSTEM.reading.title}</h4>
    ${VARC_SYSTEM.reading.items.map(r=>`<div style="font-size:.82rem;color:var(--text2);padding:.3rem 0;border-bottom:1px solid var(--border)">→ ${r}</div>`).join("")}
  </div>`;

  // Daily RC log
  h += `<div class="week-header"><h3>✅ Daily RC Annotation Log (2 passages/day)</h3>
    <span style="font-size:.8rem;color:var(--text2)" id="varc-prog">0 days logged</span>
    <div class="line"></div></div>
    <p class="section-desc">Check off each day when you've done BOTH RC passages with full annotation. Even midterm days — at least 1 passage.</p>
    <div class="card" style="padding:.8rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(95px,1fr));gap:.3rem">`;
  VARC_DAYS.forEach(d => {
    const done = getP(d.id);
    h += `<label style="display:flex;align-items:center;gap:.35rem;cursor:pointer;font-size:.75rem;padding:.3rem .4rem;border-radius:6px;background:${done?'var(--green)20':'var(--surface2)'};border:1px solid ${done?'var(--green)':'var(--border)'}">
      <input type="checkbox" class="checkbox-custom" ${done?"checked":""} onchange="toggleP('${d.id}')">
      <span style="color:${done?'var(--green)':'var(--text2)'}">${fmtDate(d.date)}</span>
    </label>`;
  });
  h += `</div>`;

  document.getElementById("varc").innerHTML = h;
}

// ─── TAB 6: DILR + MILESTONES ────────────────────────────────────────────────
function renderDILR() {
  let h = `<h2 class="section-title">DILR Confidence System — 12+ Correct</h2>
    <p class="section-desc">The 4-Minute Scan Rule + 2 Set Mastery + Daily Timed Drills</p>`;

  // Scan rule
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.2rem;border-color:var(--lrdi)">
    <h4 style="color:var(--lrdi);margin-bottom:.7rem">⚡ ${DILR_SYSTEM.scan.title}</h4>
    ${DILR_SYSTEM.scan.steps.map((s,i)=>`<div style="display:flex;gap:.7rem;padding:.4rem 0;border-bottom:${i<DILR_SYSTEM.scan.steps.length-1?'1px solid var(--border)':'none'}"><span style="color:var(--accent2);font-weight:700;min-width:16px">${i+1}.</span><span style="font-size:.83rem">${s}</span></div>`).join("")}
  </div>`;

  // Priority sets
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.2rem">
    <h4 style="margin-bottom:.7rem">🎯 ${DILR_SYSTEM.sets.title}</h4>
    ${DILR_SYSTEM.sets.items.map(s=>`<div style="font-size:.82rem;padding:.35rem 0;border-bottom:1px solid var(--border)">${s}</div>`).join("")}
  </div>`;

  // Daily drill batches tracker
  h += `<div class="week-header"><h3>📊 Daily DILR Timed Drill Batches</h3><div class="line"></div></div>
    <p class="section-desc">3 sets/day under 35-min timer · Mark done when batch complete</p>
    <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">`;
  DILR_BATCHES.forEach(b => {
    let done = 0;
    for (let i = 1; i <= b.sets; i++) if (getP("db_"+b.id+"_"+i)) done++;
    const pct = Math.round((done/b.sets)*100);
    h += `<div class="card" style="padding:.7rem 1rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')" style="display:flex;align-items:center;gap:.7rem;cursor:pointer">
        <strong style="flex:1;font-size:.84rem">${b.label}</strong>
        <span style="font-size:.78rem;color:var(--text2)">${done}/${b.sets}</span>
        <div class="progress-bar" style="width:70px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(85px,1fr));gap:.3rem;padding:.5rem 0">
        ${Array.from({length:b.sets},(_,i)=>cb("db_"+b.id+"_"+(i+1),`Set ${i+1}`)).join("")}
      </div></div>`;
  });
  h += `</div>`;

  // QA speed system
  h += `<div class="card" style="padding:1.1rem;margin-bottom:1.2rem;border-color:var(--qa)">
    <h4 style="color:var(--qa);margin-bottom:.7rem">⚡ ${QA_SYSTEM.speed.title}</h4>
    <p style="font-size:.83rem;color:var(--text2);margin-bottom:.6rem">${QA_SYSTEM.speed.detail}</p>
    <h5 style="margin-bottom:.5rem">${QA_SYSTEM.rounds.title}</h5>
    ${QA_SYSTEM.rounds.rounds.map((r,i)=>`<div style="font-size:.82rem;padding:.35rem 0;border-bottom:${i<QA_SYSTEM.rounds.rounds.length-1?'1px solid var(--border)':'none'}"><strong>Round ${i+1}:</strong> ${r}</div>`).join("")}
  </div>`;

  document.getElementById("qa-system").innerHTML = h;
}

// ─── TAB 7: MILESTONES ───────────────────────────────────────────────────────
function renderMilestones() {
  let h = `<h2 class="section-title">🏆 Road to CAT Domination — 40-Day Milestones</h2>
    <p class="section-desc">Oct 20 → Nov 29 · Trust the process. Execute the system.</p>
    <div style="display:flex;flex-direction:column;gap:.35rem">`;
  const today = new Date().toISOString().split("T")[0];
  MILESTONES.forEach((m, i) => {
    const isLast = i === MILESTONES.length - 1;
    h += `<div class="card" style="padding:.75rem 1.1rem;${isLast?'border-color:var(--amber);box-shadow:0 0 16px rgba(245,158,11,.25)':''}">
      <div style="display:flex;align-items:center;gap:1.1rem">
        <span style="font-size:1.3rem">${m.icon}</span>
        <span style="min-width:85px;font-size:.8rem;font-weight:700;color:var(--accent2)">${m.date}</span>
        <span style="font-size:.86rem;line-height:1.4">${m.event}</span>
      </div>
    </div>`;
  });
  h += `</div>`;

  // Hard Rules
  h += `<div class="alert-box" style="border-left-color:var(--red);margin-top:1.5rem">
    <strong>🛑 The 6 Non-Negotiable Laws of 98+ Percentile:</strong>
    <ul style="font-size:.83rem;color:var(--text2);margin-top:.4rem;padding-left:1rem;line-height:1.9">
      <li><strong>No new theory learning from today.</strong> Syllabus is done. Only execution, analysis, and pattern recognition.</li>
      <li><strong>Every mock MUST have a 2.5-hour review.</strong> A mock without review is a $200 ticket thrown in the trash.</li>
      <li><strong>Never guess in VARC.</strong> 4 accurate answers beat 12 guesses with 6 negatives. Always.</li>
      <li><strong>DILR: 2 sets completed > 3 sets half-done.</strong> Deep accuracy, not wide coverage.</li>
      <li><strong>QA Speed Drills are mandatory after each short-note chapter.</strong> Knowledge without speed is useless in CAT.</li>
      <li><strong>Sleep by 10:30 PM on exam week (Nov 16–28).</strong> Your circadian rhythm must match the 8:30 AM CAT slot.</li>
    </ul>
  </div>`;

  document.getElementById("milestones").innerHTML = h;
}

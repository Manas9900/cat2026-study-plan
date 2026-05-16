// CAT 2026 Schedule App
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initTabs();
  renderPhase1();
  renderPhase2();
  renderMocks();
  renderQuant();
  renderEstimates();
});

function initCountdown() {
  function update() {
    const now = new Date();
    const diff = CAT_DATE - now;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    document.getElementById("countdown").textContent = `${d} days ${h} hours to CAT 2026`;
    document.getElementById("stat-days").textContent = d;
  }
  update();
  setInterval(update, 60000);
}

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

function fmt(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function renderPhase1() {
  const days = generatePhase1();
  const el = document.getElementById("phase1");
  let html = `<h2 class="section-title">Phase 1 — Full Intensity</h2>
    <p class="section-desc">15 May – 20 June 2026 · 37 days · 6–7 hrs/day · Backlog clearance + Topic revision + Practice buildup</p>`;

  // Week grouping
  let currentWeek = -1;
  const weekStart = new Date(2026, 4, 15);

  days.forEach((day, i) => {
    const d = new Date(day.date + "T00:00:00");
    const weekNum = Math.floor((d - weekStart) / (7 * 86400000));
    if (weekNum !== currentWeek) {
      currentWeek = weekNum;
      const clust = LRDI_CLUSTERS[weekNum] || LRDI_CLUSTERS[LRDI_CLUSTERS.length - 1];
      html += `<div class="week-header"><h3>Week ${weekNum + 1}</h3><span class="lrdi-tag">LRDI: ${clust.types}</span><div class="line"></div></div>`;
    }

    const tags = day.tags || [];
    const tagsHtml = tags.map(t => {
      let cls = "tag-lecture";
      if (t === "Revision") cls = "tag-revision";
      if (t === "Sectional") cls = "tag-sectional";
      if (t === "Light Day") cls = "tag-rest";
      if (t === "Advance") cls = "tag-lecture";
      return `<span class="tag ${cls}">${t}</span>`;
    }).join("");

    const dotsHtml = `
      ${day.miniTests.qa ? '<span class="mini-dot qa" title="QA"></span>' : ""}
      ${day.miniTests.lrdi ? '<span class="mini-dot lrdi" title="LRDI"></span>' : ""}
      ${day.miniTests.varc ? '<span class="mini-dot varc" title="VARC"></span>' : ""}
    `;

    let bodyHtml = "";
    if (day.morning) {
      bodyHtml += `<div class="time-block"><div class="time-label morning">☀️ ${day.morning.label}</div><ul class="task-list">${day.morning.tasks.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
    }
    if (day.afternoon) {
      bodyHtml += `<div class="time-block"><div class="time-label afternoon">🌤️ ${day.afternoon.label}</div><ul class="task-list">${day.afternoon.tasks.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
    }
    if (day.evening) {
      bodyHtml += `<div class="time-block"><div class="time-label evening">🌙 ${day.evening.label}</div><ul class="task-list">${day.evening.tasks.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
    }

    html += `<div class="day-card ${day.isSunday ? "sunday" : ""}" id="day-${day.date}">
      <div class="day-head" onclick="this.parentElement.classList.toggle('open')">
        <div class="day-date">${fmt(day.date)} <span class="dow">${day.dayName}</span></div>
        <div class="day-tags">${tagsHtml}</div>
        <div class="day-mini">${dotsHtml}</div>
        <span class="chevron">▾</span>
      </div>
      <div class="day-body">${bodyHtml}</div>
    </div>`;
  });

  // Mini-test summary
  let totalQA = 0, totalLRDI = 0, totalVARC = 0;
  days.forEach(d => { totalQA += d.miniTests.qa; totalLRDI += d.miniTests.lrdi; totalVARC += d.miniTests.varc; });
  html += `<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)">
    <h4 style="margin-bottom:.5rem">Phase 1 Mini-Test Totals</h4>
    <p style="font-size:.85rem;color:var(--text2)">
      <span style="color:var(--qa)">■</span> QA: ~${totalQA} of 94 &nbsp;
      <span style="color:var(--lrdi)">■</span> LRDI: ~${totalLRDI} of 73 &nbsp;
      <span style="color:var(--varc)">■</span> VARC: ~${totalVARC} of 90 &nbsp;
      | Total: ~${totalQA+totalLRDI+totalVARC} of 257
    </p>
  </div>`;

  el.innerHTML = html;
}

function renderPhase2() {
  const el = document.getElementById("phase2");
  let html = `<h2 class="section-title">Phase 2 — College + CAT</h2>
    <p class="section-desc">21 June – 29 November 2026 · ~23 weeks · 2–3 hrs/day · Morning (6–8 AM) + Evening (8–10:30 PM)</p>
    <div style="margin-bottom:1rem;padding:.8rem 1rem;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2);border-radius:8px;font-size:.85rem;color:var(--amber)">
      ⚡ <strong>Hard stop on new content: 25 September 2026.</strong> Oct–Nov = Mocks + Revision only.
    </div>
    <div class="template-grid">`;

  PHASE2_TEMPLATE.forEach(day => {
    html += `<div class="template-card"><h4>${day.day}</h4>`;
    day.slots.forEach(slot => {
      html += `<div class="slot"><div class="slot-label">${slot.time}</div><div class="slot-tasks">${slot.tasks}</div></div>`;
    });
    html += `</div>`;
  });

  html += `</div>`;

  // Phase 2 weekly summary
  html += `<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)">
    <h4 style="margin-bottom:.5rem">Phase 2 Weekly Breakdown</h4>
    <ul style="font-size:.85rem;color:var(--text2);list-style:none;line-height:2">
      <li>📚 <strong>3 CrackU lectures/week</strong> (Mon, Wed, Fri mornings)</li>
      <li>📝 <strong>~5 QA + 4 LRDI + 5 VARC mini-tests/week</strong></li>
      <li>🎯 <strong>2–3 Sectional tests/week</strong> (Wed evening + Sat morning + Sun if no mock)</li>
      <li>📖 <strong>5–6 RC passages/week</strong> (daily habit)</li>
      <li>🧪 <strong>1–2 Full mocks/week</strong> (ramping up Oct–Nov)</li>
      <li>📋 <strong>Daily error log</strong> (15–20 min built into every evening)</li>
    </ul>
  </div>`;

  // Oct-Nov modified template
  html += `<div style="margin-top:1rem;padding:1rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)">
    <h4 style="margin-bottom:.5rem;color:var(--amber)">🔥 October–November Modified Template</h4>
    <p style="font-size:.85rem;color:var(--text2);line-height:1.7">
      No new lectures. Replace lecture slots with: <strong>Weak area revision</strong> (from error logs), 
      <strong>Formula sheet review</strong>, <strong>Speed drills</strong> (10 Qs in 15 min), 
      and <strong>Mock analysis deep-dives</strong>. Mock frequency: 2/week (Oct) → 2–3/week (Nov). 
      Taper final week — last mock on Nov 28 (Saturday).
    </p>
  </div>`;

  el.innerHTML = html;
}

function renderMocks() {
  const { groups, total } = generateMockCalendar();
  const el = document.getElementById("mocks");
  document.getElementById("stat-mocks").textContent = total;

  let html = `<h2 class="section-title">Full Mock Test Calendar</h2>
    <p class="section-desc">Late June – 28 November 2026 · ${total} Full-Length Mocks · Sunday preferred · 3 hrs + 1.5 hrs review</p>`;

  // Frequency ramp visual
  html += `<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem">
    <div style="padding:.4rem .8rem;background:rgba(99,102,241,.1);border-radius:6px;font-size:.75rem;color:var(--accent2)">Jun–Jul: 1/2 weeks</div>
    <div style="padding:.4rem .8rem;background:rgba(6,182,212,.1);border-radius:6px;font-size:.75rem;color:var(--cyan)">Aug: 1/week</div>
    <div style="padding:.4rem .8rem;background:rgba(16,185,129,.1);border-radius:6px;font-size:.75rem;color:var(--green)">Sep: 1/week</div>
    <div style="padding:.4rem .8rem;background:rgba(245,158,11,.1);border-radius:6px;font-size:.75rem;color:var(--amber)">Oct: 2/week</div>
    <div style="padding:.4rem .8rem;background:rgba(239,68,68,.1);border-radius:6px;font-size:.75rem;color:var(--red)">Nov: 2–3/week</div>
  </div>`;

  for (const [month, items] of Object.entries(groups)) {
    html += `<div class="mock-month"><h3>${month}</h3><div class="mock-list">`;
    items.forEach(m => {
      html += `<div class="mock-item">
        <span class="mock-num">Mock #${m.num}</span>
        <span class="mock-date">${fmt(m.date)} (${m.day})</span>
        <span class="mock-type mock-full">${m.freq}</span>
      </div>`;
    });
    html += `</div></div>`;
  }

  el.innerHTML = html;
}

function renderQuant() {
  const el = document.getElementById("quant");
  let html = `<h2 class="section-title">Quant Revision Sequence</h2>
    <p class="section-desc">Priority order based on CAT frequency · Aligned with CrackU lectures · Use IPM handwritten notes + 2–3 CrackU topic tests per topic</p>`;

  html += `<div class="quant-track">`;
  QUANT_REVISION_SEQ.forEach(t => {
    const statusColor = t.status === "High Priority" ? "var(--red)" : t.status === "Medium" ? "var(--amber)" : "var(--green)";
    html += `<div class="quant-topic">
      <div class="quant-priority">#${t.id}</div>
      <div style="flex:1">
        <div class="quant-name">${t.name}</div>
        <div class="quant-dates">Phase 1: ${t.phase1Dates}</div>
      </div>
      <span style="font-size:.7rem;padding:2px 8px;border-radius:999px;background:${statusColor}15;color:${statusColor}">${t.status}</span>
    </div>`;
  });
  html += `</div>`;

  // LRDI Clustering
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.2rem">LRDI Practice Clustering</h3>
    <p class="section-desc">Cluster by type for pattern recognition — mapped to Phase 1 weeks</p>`;
  html += `<div style="display:flex;flex-direction:column;gap:.4rem">`;
  LRDI_CLUSTERS.forEach(c => {
    html += `<div style="display:flex;align-items:center;gap:1rem;padding:.6rem 1rem;background:var(--surface);border:1px solid var(--border);border-radius:8px">
      <span style="font-size:.8rem;font-weight:700;color:var(--cyan);min-width:130px">${c.weeks.split("(")[0]}</span>
      <span style="flex:1;font-size:.85rem">${c.types}</span>
      <span style="font-size:.75rem;color:var(--text2)">${c.count}</span>
    </div>`;
  });
  html += `</div>`;

  // Alignment note
  html += `<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)">
    <h4 style="margin-bottom:.5rem">🔗 Lecture-Revision Alignment</h4>
    <ul style="font-size:.82rem;color:var(--text2);line-height:1.8;list-style:none">
      <li>• <strong>May 15–16:</strong> Linear Equations lecture → Revise Linear Equations from IPM notes</li>
      <li>• <strong>May 18–19:</strong> Inequalities lecture → Revise Inequalities notes</li>
      <li>• <strong>May 20:</strong> VARC lecture → Use free revision slot for Geometry (Priority #1)</li>
      <li>• <strong>May 21–22:</strong> Quadratic Equations lecture → Revise Quadratic Equations</li>
      <li>• <strong>May 23:</strong> Functions lecture → Revise Functions notes</li>
      <li>• <strong>May 25–26:</strong> Progressions lecture → Revise Progressions & Series</li>
      <li>• <strong>May 27–29:</strong> Geometry lectures → Deep Geometry revision (3 days!)</li>
      <li>• <strong>May 30:</strong> VARC lecture → Use free slot for Profit/Loss/Interest</li>
      <li>• <strong>June 1–20:</strong> Follow priority sequence for deep/remaining revision</li>
    </ul>
  </div>`;

  el.innerHTML = html;
}

function renderEstimates() {
  const el = document.getElementById("estimates");
  const now = new Date();

  let html = `<h2 class="section-title">Completion Estimates</h2>
    <p class="section-desc">Projected completion dates for all major milestones — based on the planned pace</p>
    <div class="est-grid">`;

  ESTIMATES.forEach(e => {
    const targetDate = parseTargetDate(e.target);
    const totalDays = Math.max(1, Math.floor((targetDate - new Date(2026, 4, 15)) / 86400000));
    const elapsed = Math.max(0, Math.floor((now - new Date(2026, 4, 15)) / 86400000));
    const pct = Math.min(100, Math.round((elapsed / totalDays) * 100));

    html += `<div class="est-card">
      <h4>${e.title}</h4>
      <div class="est-date">${e.target}</div>
      <div class="est-detail">${e.detail}</div>
      <div class="est-bar"><div class="est-bar-fill" style="width:${pct}%;background:${e.color}"></div></div>
    </div>`;
  });

  html += `</div>`;

  // Key milestones timeline
  html += `<h3 style="margin-top:2rem;margin-bottom:.75rem;font-size:1.2rem">📅 Key Milestones Timeline</h3>`;
  const milestones = [
    { date: "15 May 2026", event: "Phase 1 begins — Full intensity", icon: "🚀" },
    { date: "30 May 2026", event: "All 14 backlog lectures completed", icon: "✅" },
    { date: "20 Jun 2026", event: "Phase 1 ends — ~100 mini-tests done", icon: "🏁" },
    { date: "21 Jun 2026", event: "Phase 2 begins — College + CAT", icon: "🎓" },
    { date: "28 Jun 2026", event: "First full-length mock test", icon: "🧪" },
    { date: "~Late Sep 2026", event: "All 48 sectionals + 73 LRDI minis done", icon: "📊" },
    { date: "25 Sep 2026", event: "HARD STOP — No new content after this", icon: "🛑" },
    { date: "~Mid Oct 2026", event: "All 257 mini-tests completed", icon: "✨" },
    { date: "Oct–Nov 2026", event: "Mocks + Weak area revision only", icon: "🔥" },
    { date: "28 Nov 2026", event: "Last mock test", icon: "🎯" },
    { date: "29 Nov 2026", event: "CAT 2026 — D-Day", icon: "🏆" }
  ];

  html += `<div style="display:flex;flex-direction:column;gap:.3rem">`;
  milestones.forEach((m, i) => {
    html += `<div style="display:flex;align-items:center;gap:1rem;padding:.6rem 1rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;${i === milestones.length-1 ? 'border-color:var(--amber);' : ''}">
      <span style="font-size:1.2rem">${m.icon}</span>
      <span style="min-width:130px;font-size:.8rem;font-weight:700;color:var(--accent2)">${m.date}</span>
      <span style="font-size:.85rem;color:var(--text)">${m.event}</span>
    </div>`;
  });
  html += `</div>`;

  el.innerHTML = html;
}

function parseTargetDate(str) {
  const months = { "January":0,"February":1,"March":2,"April":3,"May":4,"June":5,"July":6,"August":7,"September":8,"October":9,"November":10,"December":11 };
  // Handle formats like "30 May 2026", "Mid-October 2026", "Late September 2026", "25 September 2026"
  if (str.includes("Mid-October")) return new Date(2026, 9, 15);
  if (str.includes("Late September")) return new Date(2026, 8, 25);
  if (str.includes("28 November")) return new Date(2026, 10, 28);
  if (str.includes("29 November")) return new Date(2026, 10, 29);
  if (str.includes("25 September")) return new Date(2026, 8, 25);
  if (str.includes("30 May")) return new Date(2026, 4, 30);
  return new Date(2026, 10, 29); // default
}

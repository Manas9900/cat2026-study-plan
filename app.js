// CAT 2026 App v4.0 — Final 40-Day Sprint (25 Mocks, 46 Sectionals, QA Short Notes, Midterm Sync)
document.addEventListener("DOMContentLoaded", () => {
  initDefaults();
  initCountdown();
  initTabs();
  renderWeekly();
  renderMocks();
  renderSectionals();
  renderQAShortNotes();
  renderBoosters();
  renderMilestones();
  updateAllCounts();
});

// Initialize sequence and series as done by default
function initDefaults() {
  if (localStorage.getItem("cat26_sn_seq") === null) {
    localStorage.setItem("cat26_sn_seq", "1");
  }
}

// ─── PROGRESS (localStorage) ───
function getP(k) { return localStorage.getItem("cat26_" + k) === "1"; }
function setP(k, v) { localStorage.setItem("cat26_" + k, v ? "1" : "0"); }
function toggleP(k) { setP(k, !getP(k)); updateAllCounts(); }

function cb(key, label, extra = "") {
  const c = getP(key) ? "checked" : "";
  return `<label class="exercise-row"><input type="checkbox" class="checkbox-custom" data-key="${key}" ${c} onchange="toggleP('${key}')"><span>${label}</span>${extra}</label>`;
}

function updateAllCounts() {
  // Mocks
  let mD = MOCKS.filter(m => getP("mock_" + m.num)).length;
  const mk = document.getElementById("mock-prog"); if (mk) mk.textContent = `${mD}/${MOCKS.length} done`;
  const sm = document.getElementById("stat-mocks"); if (sm) sm.textContent = `${mD}/${MOCKS.length}`;

  // Sectionals
  let secD = 0;
  ["varc", "dilr", "qa"].forEach(s => {
    for (let i = 1; i <= SECTIONAL_TESTS[s]; i++) if (getP("sec_" + s + "_" + i)) secD++;
  });
  const secEl = document.getElementById("sec-prog"); if (secEl) secEl.textContent = `${secD}/${SECTIONAL_TESTS.total} done`;
  const sSec = document.getElementById("stat-sectionals"); if (sSec) sSec.textContent = `${secD}/${SECTIONAL_TESTS.total}`;

  // QA Short Notes
  let snD = QA_SHORT_NOTES.filter(s => getP(s.id)).length;
  const snEl = document.getElementById("sn-prog"); if (snEl) snEl.textContent = `${snD}/${QA_SHORT_NOTES.length} chapters done`;
  const sSn = document.getElementById("stat-sn"); if (sSn) sSn.textContent = `${snD}/${QA_SHORT_NOTES.length}`;
}

// ─── COUNTDOWN ───
function initCountdown() {
  function u() {
    const diff = CAT_DATE - new Date(), d = Math.floor(diff / 864e5), h = Math.floor((diff % 864e5) / 36e5);
    document.getElementById("countdown").textContent = `${d} days ${h} hours to CAT 2026 (Nov 29)`;
    document.getElementById("stat-days").textContent = d;
  }
  u();
  setInterval(u, 60000);
}

// ─── TABS ───
function initTabs() {
  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    b.classList.add("active");
    document.getElementById(b.dataset.tab).classList.add("active");
  }));
}

// ─── TAB 1: WEEKLY & SPRINT PLANS ───
function renderWeekly() {
  const el = document.getElementById("weekly"), cp = getCurrentPhase();
  let h = `<h2 class="section-title">40-Day Final Sprint & Midterm Strategy</h2>
    <p class="section-desc">Current Phase: <strong style="color:${cp.color}">${cp.name}</strong> (${cp.hrs})</p>`;

  // Strategic Mentor Alert Box
  h += `<div class="alert-box" style="border-left-color:var(--accent);margin-bottom:1.5rem">
    <strong>🧠 Mentor Strategy for the Final 40 Days (Oct 20 – Nov 29):</strong><br>
    <span style="font-size:.85rem;color:var(--text2);line-height:1.7">
      • <strong>Your Advantage (PwD + EWS + Strong Academics):</strong> You do <em>not</em> need to score 99 percentile. 85+ percentile guarantees converts for top IIMs + FMS. In raw score terms, that is roughly <strong>45–55 raw marks</strong> out of 198! That means solving only <strong>5-6 Qs in VARC, 4-5 Qs (1 solid set) in DILR, and 8-10 Qs in QA</strong> accurately.<br>
      • <strong>Pre-Exam Surge (Oct 20 – Nov 4):</strong> Boost your pace now so during your college midterm exams (Nov 9–15), your only job is taking 1 maintenance mock/sectional daily.<br>
      • <strong>Logical Reasoning Confidence:</strong> Focus on <em>Set Selection</em> (First 4 mins rule). Solving just ONE 5-question set completely guarantees 90+ percentile in DILR for PwD!<br>
      • <strong>VARC Accuracy Fix:</strong> Shift from 'selection' to rigorous 'elimination'. Read with mental paragraph summaries.<br>
      • <strong>QA Short-Notes:</strong> Complete quick formula & shortcut sheets for every chapter (Sequence & Series already done!).
    </span>
  </div>`;

  // Phases Roadmap
  h += `<div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.8rem">`;
  PHASES.forEach(p => {
    const cur = p.id === cp.id;
    h += `<div class="card" style="padding:.65rem 1rem;${cur ? 'border-color:' + p.color + ';box-shadow:0 0 12px ' + p.color + '30;' : ''}display:flex;align-items:center;gap:.9rem">
      <span style="font-size:.7rem;padding:3px 10px;border-radius:99px;background:${p.color}20;color:${p.color};font-weight:700;min-width:95px;text-align:center">${p.hrs}</span>
      <div style="flex:1">
        <div style="font-weight:${cur ? 700 : 600};font-size:.86rem">${p.name}</div>
        <div style="font-size:.74rem;color:var(--text2)">${p.desc}</div>
      </div>
      <span style="font-size:.75rem;color:var(--text2);margin-left:auto;white-space:nowrap">${fmtDate(p.start)} – ${fmtDate(p.end)}</span>
      ${cur ? '<span style="font-size:.65rem;padding:2px 8px;border-radius:99px;background:var(--green);color:#fff;font-weight:700">ACTIVE</span>' : ''}
    </div>`;
  });
  h += `</div>`;

  // Blocked & Exam Days
  h += `<div class="alert-box" style="border-left-color:var(--amber);margin-bottom:1.8rem">
    <strong>📅 Key Milestones & Exam Dates (from your Midterm Schedule):</strong><br>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.5rem;margin-top:.4rem">
      ${BLOCKED_DAYS.map(d => `<div style="font-size:.82rem;color:var(--text2);background:var(--surface2);padding:.4rem .6rem;border-radius:6px">• <strong style="color:var(--text)">${d.label}</strong>: ${fmtDate(d.start)}${d.start !== d.end ? ' – ' + fmtDate(d.end) : ''}</div>`).join('')}
    </div>
  </div>`;

  // Detailed Daily Templates
  [
    { tmpl: TEMPLATES.pre_midterm, badge: "Oct 20 – Nov 4 (Now Active)", c: "var(--cyan)" },
    { tmpl: TEMPLATES.midterm_window, badge: "Nov 5 – Nov 15 (Midterm & Diwali)", c: "var(--amber)" },
    { tmpl: TEMPLATES.peak_sprint, badge: "Nov 16 – Nov 26 (Peak Final Sprint)", c: "var(--green)" }
  ].forEach(t => {
    h += `<div style="margin-bottom:2rem">
      <div class="week-header">
        <h3>${t.tmpl.title}</h3>
        <span class="phase-badge" style="background:${t.c}20;color:${t.c};font-weight:700">${t.badge}</span>
        <div class="line"></div>
      </div>
      <p class="section-desc">${t.tmpl.subtitle}</p>
      <div class="card" style="padding:1rem;display:flex;flex-direction:column;gap:.7rem">`;
    t.tmpl.slots.forEach(s => {
      h += `<div style="display:flex;gap:.9rem;padding:.5rem .7rem;background:var(--surface2);border-radius:8px;align-items:flex-start">
        <div style="min-width:160px;font-size:.78rem;font-weight:700;color:var(--accent2)">${s.time}</div>
        <div style="font-size:.82rem;color:var(--text);line-height:1.5">${s.task}</div>
      </div>`;
    });
    h += `</div></div>`;
  });

  el.innerHTML = h;
}

// ─── TAB 2: MOCKS CALENDAR (25 FULL MOCKS) ───
function renderMocks() {
  const el = document.getElementById("mocks");
  let h = `<h2 class="section-title">25 Full-Length Mocks Calendar (Oct 21 – Nov 26)</h2>
    <p class="section-desc">Strict 2-hour exam timer + 1.5-hour deep post-mock analysis · <strong id="mock-prog">0/25 done</strong></p>`;

  h += `<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem">
    <span class="phase-badge" style="background:var(--cyan)20;color:var(--cyan)">Pre-Midterm: 10 Mocks (Alternate Days)</span>
    <span class="phase-badge" style="background:var(--amber)20;color:var(--amber)">Midterm Window: 4 Mocks (Maintenance)</span>
    <span class="phase-badge" style="background:var(--green)20;color:var(--green)">Peak Sprint: 11 Mocks (Daily Rhythm)</span>
  </div>`;

  h += `<div class="card" style="padding:0;overflow:hidden">`;
  MOCKS.forEach(m => {
    const d = getP("mock_" + m.num);
    h += `<div class="mock-item ${d ? 'done' : ''}" style="border-bottom:1px solid var(--border);padding:.75rem 1rem">
      <label style="display:flex;align-items:center;gap:.9rem;flex:1;cursor:pointer">
        <input type="checkbox" class="checkbox-custom" data-key="mock_${m.num}" ${d ? "checked" : ""} onchange="toggleP('mock_${m.num}')">
        <span class="mock-num" style="min-width:55px">#${m.num}</span>
        <div style="flex:1">
          <div style="font-size:.85rem;font-weight:600;${d ? 'text-decoration:line-through;color:var(--text2)' : ''}">${fmtDate(m.date)} (${m.day}) — <span style="color:var(--accent2)">${m.phase}</span></div>
          <div style="font-size:.74rem;color:var(--text2)">${m.target}</div>
        </div>
        <span style="font-size:.75rem;padding:3px 8px;border-radius:6px;background:var(--surface2);color:var(--text2)">CAT Slot Simulation</span>
      </label>
    </div>`;
  });
  h += `</div>`;

  h += `<div class="alert-box" style="border-left-color:var(--amber);margin-top:1.5rem">
    <strong>💡 The Golden 3-Step Mock Review Protocol:</strong><br>
    1. <strong>Unattempted Analysis:</strong> Solve every unattempted question without timer. If you can solve it easily, mark it as 'Selection Error' (you missed an easy question).<br>
    2. <strong>Incorrect Analysis:</strong> Categorize errors into Conceptual, Calculation, or Panic/Rush. Write the exact fix in your Error Log.<br>
    3. <strong>Correct Analysis:</strong> Did you take >3 mins on any correct question? Look at solution for a faster shortcut or option elimination.
  </div>`;

  el.innerHTML = h;
}

// ─── TAB 3: 45+ SECTIONAL TESTS ───
function renderSectionals() {
  const el = document.getElementById("qa");
  let h = `<h2 class="section-title">45+ Sectional Tests Tracker (15 VARC, 15 DILR, 16 QA)</h2>
    <p class="section-desc">40 minutes each · Targeted speed, set selection & accuracy building · <strong id="sec-prog">0/46 done</strong></p>`;

  h += `<div class="alert-box" style="border-left-color:var(--green);margin-bottom:1.5rem">
    <strong>🎯 Sectional Goal:</strong> Sectionals are the fastest way to fix section-specific issues without taking a 2-hour full test. Take at least 1-2 sectionals on non-mock days and during college exam weeks!
  </div>`;

  [
    { name: "VARC Sectionals (15 Tests)", prefix: "sec_varc", count: 15, color: "var(--varc)", tip: "Focus: Test 3-pass elimination and accuracy > 80% with zero negative marks." },
    { name: "DILR Sectionals (15 Tests)", prefix: "sec_dilr", count: 15, color: "var(--lrdi)", tip: "Focus: Practice the 4-minute scan. Ensure at least 1 set is 100% correct in 18-20 mins." },
    { name: "QA Sectionals (16 Tests)", prefix: "sec_qa", count: 16, color: "var(--qa)", tip: "Focus: Round 1 (easy Qs, <1.5 min each) then Round 2 (moderate Qs). Target 9-11 correct." }
  ].forEach(s => {
    let d = 0; for (let i = 1; i <= s.count; i++) if (getP(s.prefix + "_" + i)) d++;
    const pct = Math.round((d / s.count) * 100);

    h += `<div style="margin-bottom:1.5rem">
      <div class="week-header">
        <h3 style="color:${s.color}">${s.name}</h3>
        <span style="font-size:.82rem;color:${pct === 100 ? 'var(--green)' : 'var(--text2)'};margin-left:auto">${d}/${s.count} done</span>
        <div class="progress-bar" style="width:100px;margin:0 .8rem"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="line"></div>
      </div>
      <p style="font-size:.76rem;color:var(--text2);margin-bottom:.6rem">${s.tip}</p>
      <div class="card" style="padding:.8rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.4rem">`;
    for (let i = 1; i <= s.count; i++) {
      h += cb(s.prefix + "_" + i, `Test #${i}`);
    }
    h += `</div></div>`;
  });

  el.innerHTML = h;
}

// ─── TAB 4: QA SHORT NOTES (FORMULAS & SHORT TRICKS) ───
function renderQAShortNotes() {
  const el = document.getElementById("lrdi");
  let h = `<h2 class="section-title">QA Short Notes & Formula Master Sheets</h2>
    <p class="section-desc">Consolidate formulas, short tricks, and trap alerts chapter-wise from your notes · <strong id="sn-prog">1/16 chapters done</strong></p>`;

  h += `<div class="alert-box" style="border-left-color:var(--qa);margin-bottom:1.5rem">
    <strong>📝 Short Notes Rule of Thumb:</strong><br>
    Keep each chapter to <strong>1 to 2 pages maximum</strong>. Include: (1) Core formulas & conditions of validity, (2) Special shortcut tricks (e.g., faulty balance ratio method, AM-GM inequalities, remainder theorem shortcuts), (3) Mistakes you frequently make in mocks. Sequence & Series is already done!
  </div>`;

  h += `<div class="card" style="padding:0;overflow:hidden">`;
  QA_SHORT_NOTES.forEach((sn, idx) => {
    const d = getP(sn.id);
    const badgeColor = d ? 'var(--green)' : (sn.status === 'done' ? 'var(--green)' : 'var(--accent)');

    h += `<div class="card-header" style="padding:.85rem 1.2rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.9rem;background:${d ? 'var(--surface2)' : 'transparent'}">
      <input type="checkbox" class="checkbox-custom" data-key="${sn.id}" ${d ? "checked" : ""} onchange="toggleP('${sn.id}')">
      <div style="flex:1">
        <div style="font-size:.88rem;font-weight:600;${d ? 'text-decoration:line-through;color:var(--text2)' : ''}">${idx + 1}. ${sn.name}</div>
      </div>
      <span style="font-size:.72rem;padding:3px 9px;border-radius:99px;background:${badgeColor}20;color:${badgeColor};font-weight:700">
        ${d ? 'Completed ✅' : sn.badge}
      </span>
    </div>`;
  });
  h += `</div>`;

  el.innerHTML = h;
}

// ─── TAB 5: LR & VARC BOOSTERS ───
function renderBoosters() {
  const el = document.getElementById("varc");
  let h = `<h2 class="section-title">DILR Confidence & VARC Accuracy Boosters</h2>
    <p class="section-desc">Tested exam-hall mental models to overcome lack of confidence in LR and low accuracy in VARC</p>`;

  // 1. DILR Booster
  h += `<div style="margin-bottom:2rem">
    <div class="week-header">
      <h3 style="color:var(--lrdi)">🧩 DILR Confidence Playbook (How to Crack 90+ %ile in PwD)</h3>
      <div class="line"></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:.75rem">`;
  DILR_FRAMEWORKS.forEach(f => {
    h += `<div class="card" style="padding:1rem;border-left:4px solid var(--lrdi)">
      <strong style="font-size:.9rem;color:var(--text)">${f.type}</strong>
      <p style="font-size:.82rem;color:var(--text2);margin:.4rem 0">${f.principle}</p>
      <div style="font-size:.8rem;color:var(--cyan);background:var(--surface2);padding:.4rem .6rem;border-radius:6px">⚡ <strong>Action:</strong> ${f.action}</div>
    </div>`;
  });
  h += `</div></div>`;

  // 2. VARC Booster
  h += `<div>
    <div class="week-header">
      <h3 style="color:var(--varc)">🎯 VARC High-Accuracy Protocol (Elimination over Selection)</h3>
      <div class="line"></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:.75rem">`;
  VARC_ACCURACY_RULES.forEach(r => {
    h += `<div class="card" style="padding:1rem;border-left:4px solid var(--varc)">
      <strong style="font-size:.9rem;color:var(--text)">${r.rule}</strong>
      <p style="font-size:.82rem;color:var(--text2);margin-top:.4rem;line-height:1.6">${r.detail}</p>
    </div>`;
  });
  h += `</div></div>`;

  el.innerHTML = h;
}

// ─── TAB 6: MILESTONES ───
function renderMilestones() {
  const el = document.getElementById("milestones");
  let h = `<h2 class="section-title">40-Day Road to CAT 2026 Domination</h2>
    <p class="section-desc">Key milestones from today (Oct 20) to D-Day (Nov 29)</p>`;

  h += `<div style="display:flex;flex-direction:column;gap:.35rem">`;
  MILESTONES.forEach((m, i) => {
    const last = i === MILESTONES.length - 1;
    const exam = m.icon === "🎓" || m.icon === "🪔";
    h += `<div class="card" style="padding:.7rem 1.1rem;${last ? 'border-color:var(--amber);box-shadow:0 0 15px rgba(245,158,11,.25)' : ''}${exam ? 'border-left:3px solid var(--amber);' : ''}">
      <div style="display:flex;align-items:center;gap:1.1rem">
        <span style="font-size:1.25rem">${m.icon}</span>
        <span style="min-width:110px;font-size:.82rem;font-weight:700;color:var(--accent2)">${m.date}</span>
        <span style="font-size:.85rem">${m.event}</span>
      </div>
    </div>`;
  });
  h += `</div>`;

  // Hard rules
  h += `<div class="alert-box" style="border-left-color:var(--red);margin-top:1.5rem">
    <strong>🛑 The 5 Golden Mentor Rules for the Last 40 Days:</strong>
    <ul style="font-size:.83rem;color:var(--text2);margin-top:.4rem;padding-left:1rem;line-height:1.8">
      <li><strong>No new ground-up theory:</strong> Syllabus is already complete. Your score will come from high-speed execution, accurate set selection, and elimination discipline.</li>
      <li><strong>Never take a mock without 1.5 hours of review:</strong> A mock without analysis is a total waste of 2 hours.</li>
      <li><strong>Never guess in VARC:</strong> 4 genuine correct questions > 12 attempts with 6 negatives.</li>
      <li><strong>Daily Formula Sheet Audit:</strong> 15 minutes before sleeping, flip through your self-made QA short notes.</li>
      <li><strong>Mental Frame:</strong> You are aiming for ~45–55 marks for a dream 85–90+ percentile in PwD category. Stay composed!</li>
    </ul>
  </div>`;

  el.innerHTML = h;
}

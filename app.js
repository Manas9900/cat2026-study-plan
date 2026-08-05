// CAT 2026 App v3.2 — Professional Mentor Plan | CrackU Portal Sync & Class Schedule
document.addEventListener("DOMContentLoaded", () => {
  initLRProgress();
  initCountdown(); initTabs();
  renderWeekly(); renderOswaal(); renderMocks(); renderVideos(); renderVARC(); renderMilestones();
  updateAllCounts();
});

// Initialize pre-completed items (Games & Tournaments 5/6 done from CrackU portal)
function initLRProgress() {
  if (localStorage.getItem("cat26_lv3_init") !== "1") {
    // Pre-check first 5 lectures of Games, Tournaments & Scheduling
    for (let i = 1; i <= 5; i++) {
      if (localStorage.getItem("cat26_lv3_" + i) === null) {
        localStorage.setItem("cat26_lv3_" + i, "1");
      }
    }
    localStorage.setItem("cat26_lv3_init", "1");
  }
}

// ─── PROGRESS (localStorage) ───
function getP(k) { return localStorage.getItem("cat26_"+k)==="1"; }
function setP(k,v) { localStorage.setItem("cat26_"+k,v?"1":"0"); }
function toggleP(k) { setP(k,!getP(k)); updateAllCounts(); }

function cb(key, label, extra="") {
  const c = getP(key)?"checked":"";
  return `<label class="exercise-row"><input type="checkbox" class="checkbox-custom" data-key="${key}" ${c} onchange="toggleP('${key}')"><span>${label}</span>${extra}</label>`;
}

function updateAllCounts() {
  // Oswaal
  ["varc","dilr","qa","papers"].forEach(sec => {
    const chs = OSWAAL[sec].chapters;
    let d=0; chs.forEach(c => { if(getP(c.id)) d++; });
    const el=document.getElementById("ow-"+sec+"-prog");
    if(el) el.textContent=`${d}/${chs.length} done`;
  });
  // LR vids
  let lvT=0,lvD=0;
  LR_VIDEOS.forEach(v => { for(let i=1;i<=v.count;i++){lvT++;if(getP(v.id+"_"+i))lvD++;} });
  const lv=document.getElementById("lv-prog"); if(lv) lv.textContent=`${lvD}/${lvT} done (${lvT-lvD} remaining)`;

  // Sectionals
  let secD=0;
  ["qa","dilr","varc"].forEach(s => {
    for(let i=1;i<=SECTIONAL_TESTS[s];i++) if(getP("sec_"+s+"_"+i)) secD++;
  });
  const secEl=document.getElementById("sec-prog"); if(secEl) secEl.textContent=`${secD}/45 sectionals done`;

  // Mocks
  let mD=MOCKS.filter(m=>getP("mock_"+m.num)).length;
  const mk=document.getElementById("mock-prog"); if(mk) mk.textContent=`${mD}/${MOCKS.length} done`;
  const sm=document.getElementById("stat-mocks"); if(sm) sm.textContent=`${mD}/${MOCKS.length}`;
}

// ─── COUNTDOWN ───
function initCountdown() {
  function u(){
    const diff=CAT_DATE-new Date(), d=Math.floor(diff/864e5), h=Math.floor((diff%864e5)/36e5);
    document.getElementById("countdown").textContent=`${d} days ${h} hours to CAT 2026`;
    document.getElementById("stat-days").textContent=d;
  } u(); setInterval(u,60000);
}

// ─── TABS ───
function initTabs() {
  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
    b.classList.add("active");
    document.getElementById(b.dataset.tab).classList.add("active");
  }));
}

// ─── TAB 1: WEEKLY PLANS ───
function renderWeekly() {
  const el=document.getElementById("weekly"), cp=getCurrentPhase();
  let h=`<h2 class="section-title">Schedule & Weekly Templates</h2>
    <p class="section-desc">Current: <strong style="color:${cp.color}">${cp.name}</strong> (${cp.hrs})</p>`;

  // Mentor Strategy Alert Box
  h+=`<div class="alert-box" style="border-left-color:var(--qa);margin-bottom:1.2rem">
    <strong>🎯 Mentor Strategy & Daily Allocations:</strong><br>
    <span style="font-size:.84rem;color:var(--text2)">
      • <strong>Class Day Schedule:</strong> Classes 10:20–17:20. Morning (1.5h: 6:30–8:00 AM) + Evening (Strict 1.5h: 8:30–10:00 PM).<br>
      • <strong>Freed LR Time Reallocated:</strong> 5 lectures of Games & Tournaments ALREADY completed (saved ~7.5 hrs!). Time reallocated to High-Volume QA PYQs & Sectionals.<br>
      • <strong>QA Priority:</strong> Your top scoring potential! Solve Oswaal PYQs + Topic Tests + Sectionals. Watch 1.5–2h revision video ONLY if stuck after notes.<br>
      • <strong>LR Revision:</strong> MANDATORY 1.5–2h revision video for every remaining LR topic + Oswaal DILR set practice.<br>
      • <strong>VARC:</strong> Daily 1 RC test (15m) + The Hindu editorial (20m).
    </span>
  </div>`;

  // Phase timeline
  h+=`<div style="display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.5rem">`;
  PHASES.forEach(p => {
    const cur=p.id===cp.id;
    h+=`<div class="card" style="padding:.55rem 1rem;${cur?'border-color:'+p.color+';box-shadow:0 0 10px '+p.color+'30;':''}display:flex;align-items:center;gap:.8rem">
      <span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:${p.color}20;color:${p.color};font-weight:700;min-width:80px;text-align:center">${p.hrs}</span>
      <span style="font-weight:${cur?700:500};font-size:.82rem">${p.name}</span>
      <span style="font-size:.72rem;color:var(--text2);margin-left:auto">${fmtDate(p.start)} – ${fmtDate(p.end)}</span>
      ${cur?'<span style="font-size:.6rem;padding:2px 6px;border-radius:99px;background:var(--green);color:#fff;font-weight:700">NOW</span>':''}
    </div>`;
  });
  h+=`</div>`;

  // Blocked days
  h+=`<div class="alert-box" style="border-left-color:var(--pink);margin-bottom:1.5rem">
    <strong>📅 Blocked / Special Days</strong><br>
    ${BLOCKED_DAYS.map(d=>`<span style="font-size:.82rem;color:var(--text2)">• ${d.label}: ${fmtDate(d.start)}${d.start!==d.end?' – '+fmtDate(d.end):''}</span>`).join('<br>')}
  </div>`;

  // Templates
  const tpls=[
    {key:"college",applies:"Aug 5 – Sep 13 (college days)"},
    {key:"fulltime",applies:"Sep 22 – Nov 10, Nov 18–28 (term break)"},
    {key:"exam",applies:"Sep 14–21, Nov 11–17 (exam weeks)"}
  ];
  tpls.forEach(t => {
    const tmpl=TEMPLATES[t.key];
    h+=`<div style="margin-bottom:2rem">
      <div class="week-header"><h3>${tmpl.title}</h3><span class="phase-badge" style="background:var(--surface2);color:var(--text2)">${t.applies}</span><div class="line"></div></div>
      <p class="section-desc">${tmpl.subtitle}</p>
      <div class="template-grid">`;
    tmpl.days.forEach(d => {
      h+=`<div class="template-card"><h4>${d.day}</h4>`;
      d.slots.forEach(s => h+=`<div class="slot"><div class="slot-label">${s.time}</div><div class="slot-tasks">${s.tasks}</div></div>`);
      h+=`</div>`;
    });
    h+=`</div></div>`;
  });

  // Non-negotiables
  h+=`<div class="card" style="padding:1rem"><h4 style="margin-bottom:.5rem;color:var(--amber)">📌 Daily Non-Negotiables</h4>
    <ul style="font-size:.83rem;color:var(--text2);list-style:none;line-height:2">
      <li>📖 1 RC test (15 min)</li><li>📰 The Hindu editorial (20 min)</li>
      <li>📰 ET editorial (15 min, when time permits)</li><li>📝 1 Topic Test / Mini-Test (15–20 min)</li>
      <li>📋 Error log (15 min)</li></ul></div>`;

  el.innerHTML=h;
}

// ─── TAB 2: OSWAAL BOOK TRACKER ───
function renderOswaal() {
  const el=document.getElementById("lrdi");
  let h=`<h2 class="section-title">Oswaal CAT PYQ Book — Chapter Tracker</h2>
    <p class="section-desc">784 pages · 25 years PYQs · Chapter-wise & Topic-wise · High-volume practice engine</p>`;

  ["qa","dilr","varc","papers"].forEach(sec => {
    const s=OSWAAL[sec];
    let done=0; s.chapters.forEach(c=>{if(getP(c.id))done++;});
    const pct=Math.round((done/s.chapters.length)*100);

    h+=`<div style="margin-bottom:1.5rem">
      <div class="week-header"><h3>${s.icon} ${s.name}</h3>
        <span id="ow-${sec}-prog" style="font-size:.82rem;color:${pct===100?'var(--green)':'var(--text2)'}">${done}/${s.chapters.length} done</span>
        <div class="progress-bar" style="width:100px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="line"></div></div>`;

    s.chapters.forEach(c => {
      const d=getP(c.id);
      h+=`<div class="card" style="padding:0;margin-bottom:.3rem">
        <label class="card-header" style="cursor:pointer;padding:.65rem 1rem">
          <input type="checkbox" class="checkbox-custom" data-key="${c.id}" ${d?"checked":""} onchange="toggleP('${c.id}')">
          <span style="flex:1;font-size:.85rem;${d?'text-decoration:line-through;color:var(--text2)':''}">${c.name}</span>
          <span style="font-size:.72rem;color:var(--text2)">p. ${c.pages}</span>
          <span style="font-size:.7rem;color:var(--accent2);min-width:50px;text-align:right">~${c.est}</span>
        </label></div>`;
    });
    h+=`</div>`;
  });

  h+=`<div class="alert-box" style="border-left-color:var(--accent)">
    <strong>📖 QA Revision Protocol:</strong> Revise IPM handwritten notes first → Solve Oswaal PYQ chapter → Solve Topic Test. Watch 1.5–2h revision video ONLY if stuck after attempting questions.
  </div>`;

  el.innerHTML=h;
}

// ─── TAB 3: MOCK CALENDAR ───
function renderMocks() {
  const el=document.getElementById("mocks");
  let h=`<h2 class="section-title">Mock Calendar — 30 Full-Length Mocks</h2>
    <p class="section-desc">Aug 9 → Nov 25 · 3 hrs + 1.5 hrs review · <strong id="mock-prog">0/30 done</strong></p>`;

  h+=`<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem">
    <span class="phase-badge" style="background:var(--cyan)20;color:var(--cyan)">Aug: 4 mocks</span>
    <span class="phase-badge" style="background:var(--accent)20;color:var(--accent2)">Sep: 4 mocks</span>
    <span class="phase-badge" style="background:var(--green)20;color:var(--green)">Oct: 10 mocks (2/wk)</span>
    <span class="phase-badge" style="background:var(--amber)20;color:var(--amber)">Nov: 12 mocks (ramp)</span>
  </div>`;

  const groups={};
  MOCKS.forEach(m => {
    const mo=new Date(m.date+"T00:00:00").toLocaleString('en-US',{month:'long'});
    if(!groups[mo]) groups[mo]=[];
    groups[mo].push(m);
  });

  for(const [mo,items] of Object.entries(groups)){
    h+=`<div class="mock-month"><h3>${mo} 2026</h3><div class="mock-list">`;
    items.forEach(m => {
      const d=getP("mock_"+m.num);
      h+=`<div class="mock-item ${d?'done':''}">
        <label style="display:flex;align-items:center;gap:.75rem;flex:1;cursor:pointer">
          <input type="checkbox" class="checkbox-custom" data-key="mock_${m.num}" ${d?"checked":""} onchange="toggleP('mock_${m.num}')">
          <span class="mock-num">#${m.num}</span>
          <span class="mock-date">${fmtDate(m.date)} (${m.day})</span>
        </label></div>`;
    });
    h+=`</div></div>`;
  }

  h+=`<div class="alert-box" style="border-left-color:var(--amber);margin-top:1rem">
    <strong>💡 Mock Protocol:</strong> Take mock in exam conditions (3 hrs) → Detailed review (1.5 hrs) → Error log (30 min). No new content on mock days.
  </div>`;
  el.innerHTML=h;
}

// ─── TAB 4: VIDEOS, SECTIONALS & TESTS ───
function renderVideos() {
  const el=document.getElementById("qa");
  let h=`<h2 class="section-title">Sectional Tests, Topic Tests & CrackU Videos</h2>`;

  // 1. SECTIONAL TESTS (45 Total)
  h+=`<div style="margin-bottom:2rem">
    <div class="week-header">
      <h3>🎯 Sectional Tests (45 Total — 15 per section)</h3>
      <span id="sec-prog" style="font-size:.82rem;color:var(--text2)">0/45 sectionals done</span>
      <div class="line"></div>
    </div>
    <p class="section-desc">40 mins each under timed exam conditions · Take 2–3 per week during term break</p>`;

  [{name:"QA Sectionals (15)",prefix:"sec_qa",count:15,color:"var(--qa)"},
   {name:"DILR Sectionals (15)",prefix:"sec_dilr",count:15,color:"var(--lrdi)"},
   {name:"VARC Sectionals (15)",prefix:"sec_varc",count:15,color:"var(--varc)"}
  ].forEach(s => {
    let d=0; for(let i=1;i<=s.count;i++) if(getP(s.prefix+"_"+i)) d++;
    h+=`<div class="card" style="margin-bottom:.4rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${s.color};margin-right:.5rem"></span>
        <strong style="font-size:.85rem">${s.name}</strong>
        <span style="font-size:.78rem;color:var(--text2);margin-left:auto">${d}/${s.count}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:.3rem;padding:.5rem 0">`;
    for(let i=1;i<=s.count;i++) h+=cb(s.prefix+"_"+i,`Sectional ${i}`);
    h+=`</div></div>`;
  });
  h+=`</div>`;

  // 2. TOPIC TESTS TRACKER
  h+=`<div style="margin-bottom:2rem">
    <div class="week-header">
      <h3>📚 Topic Tests (37 Total across all chapters)</h3>
      <div class="line"></div>
    </div>
    <p class="section-desc">Timed tests after finishing each Oswaal chapter to test concept accuracy</p>`;

  [{name:"QA Topic Tests (15)",key:"qa",color:"var(--qa)"},
   {name:"DILR Topic Tests (13)",key:"dilr",color:"var(--lrdi)"},
   {name:"VARC Topic Tests (9)",key:"varc",color:"var(--varc)"}
  ].forEach(tGroup => {
    const tests = TOPIC_TESTS[tGroup.key];
    let d=0; tests.forEach(t => { if(getP(t.id)) d++; });
    h+=`<div class="card" style="margin-bottom:.4rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${tGroup.color};margin-right:.5rem"></span>
        <strong style="font-size:.85rem">${tGroup.name}</strong>
        <span style="font-size:.78rem;color:var(--text2);margin-left:auto">${d}/${tests.length}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.2rem;padding:.5rem 0">`;
    tests.forEach(t => { h+=cb(t.id, t.name); });
    h+=`</div></div>`;
  });
  h+=`</div>`;

  // 3. LR REVISION VIDEOS (EXACT CRACKU PORTAL SYNC)
  h+=`<div style="margin-bottom:2rem">
    <div class="week-header">
      <h3>📺 LR Topic Revision Videos <span style="font-size:.8rem;color:var(--red)">(CRACKU PORTAL SYNCED)</span></h3>
      <span id="lv-prog" style="font-size:.8rem;color:var(--text2)">5/38 completed</span>
      <div class="line"></div>
    </div>
    <div class="alert-box" style="border-left-color:var(--green);margin-bottom:1rem">
      <strong>✅ Portal Sync:</strong> 5 lectures of <em>Games, Tournaments & Scheduling</em> are ALREADY completed on CrackU! Freed up ~7.5 hours reallocated to extra QA & Sectionals.
    </div>`;

  LR_VIDEOS.forEach(v => {
    let d=0; for(let i=1;i<=v.count;i++) if(getP(v.id+"_"+i)) d++;
    const pct=Math.round((d/v.count)*100);
    const badge = v.note ? `<span style="font-size:.72rem;color:var(--green);margin-left:.5rem">(${v.note})</span>` : "";
    h+=`<div class="card" style="margin-bottom:.35rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.85rem">${v.name}</strong> ${badge}
        <span style="font-size:.78rem;color:${pct===100?'var(--green)':'var(--text2)'};margin-left:auto;margin-right:.5rem">${d}/${v.count} completed</span>
        <div class="progress-bar" style="width:60px"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.2rem;padding:.5rem 0">`;
    for(let i=1;i<=v.count;i++) h+=cb(v.id+"_"+i,`Lecture ${i} (~1.5–2 hrs)`);
    h+=`</div></div>`;
  });
  h+=`</div>`;

  // 4. QA REVISION VIDEOS (CONDITIONAL)
  h+=`<div style="margin-bottom:2rem">
    <div class="week-header">
      <h3>📺 QA Revision Videos <span style="font-size:.8rem;color:var(--amber)">(CONDITIONAL — watch 1.5–2h ONLY if facing difficulty)</span></h3>
      <div class="line"></div>
    </div>
    <div class="alert-box" style="border-left-color:var(--amber);margin-bottom:1rem">
      <strong>💡 Optional for QA:</strong> Do NOT watch by default. Revise handwritten notes first → solve Oswaal. Watch video ONLY if stuck!
    </div>`;

  QA_VIDEOS.forEach(v => {
    let d=0; for(let i=1;i<=v.count;i++) if(getP(v.id+"_"+i)) d++;
    h+=`<div class="card" style="margin-bottom:.3rem">
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <strong style="font-size:.85rem">${v.name}</strong>
        <span style="font-size:.78rem;color:var(--text2)">${d}/${v.count}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:.2rem;padding:.5rem 0">`;
    for(let i=1;i<=v.count;i++) h+=cb(v.id+"_"+i,`Lecture ${i} (~1.5–2 hrs)`);
    h+=`</div></div>`;
  });
  h+=`</div>`;

  // 5. MINI-TESTS (257 total)
  h+=`<div>
    <div class="week-header">
      <h3>📝 Daily Mini-Tests (257 Total)</h3>
      <div class="line"></div>
    </div>
    <p class="section-desc">QA (94) + LRDI (73) + VARC (90) · 15 min each · 1–2 per day</p>`;

  [{label:"QA",prefix:"qamt",count:94,color:"var(--qa)"},
   {label:"LRDI",prefix:"lrmt",count:73,color:"var(--lrdi)"},
   {label:"VARC",prefix:"vrmt",count:90,color:"var(--varc)"}
  ].forEach(sec => {
    const batches=Math.ceil(sec.count/10);
    for(let b=0;b<batches;b++){
      const s=b*10+1, e=Math.min((b+1)*10,sec.count);
      let d=0; for(let i=s;i<=e;i++) if(getP(sec.prefix+"_"+i)) d++;
      h+=`<div class="card" style="margin-bottom:.2rem">
        <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${sec.color};margin-right:.5rem"></span>
          <strong style="font-size:.82rem">${sec.label} #${s}–${e}</strong>
          <span style="font-size:.78rem;color:var(--text2);margin-left:auto">${d}/${e-s+1}</span>
          <span class="chevron">▾</span>
        </div>
        <div class="card-body" style="display:flex;flex-wrap:wrap;gap:.3rem;padding:.5rem 0">`;
      for(let i=s;i<=e;i++) h+=cb(sec.prefix+"_"+i,`Test ${i}`);
      h+=`</div></div>`;
    }
  });
  h+=`</div>`;

  el.innerHTML=h;
}

// ─── TAB 5: VARC DAILY ───
function renderVARC() {
  const el=document.getElementById("varc");
  let h=`<h2 class="section-title">VARC Daily Plan</h2>
    <p class="section-desc">Practice-driven · Build reading speed & comprehension through daily habit</p>`;

  h+=`<div class="card" style="padding:1.2rem;margin-bottom:1.5rem">
    <h4 style="margin-bottom:.8rem;color:var(--varc)">📌 Daily VARC Routine (Every Single Day)</h4>
    <div style="display:flex;flex-direction:column;gap:.6rem">`;

  [{icon:"📝",title:"1 RC Test",desc:"From mini-test bank (90 total) · Build reading + answering speed",time:"15 min",c:"var(--varc)"},
   {icon:"📰",title:"The Hindu Editorial",desc:"1 editorial daily · Focus on argument structure + vocab",time:"20 min",c:"var(--amber)"},
   {icon:"💼",title:"Economic Times Editorial",desc:"When time permits · Good for business/economy RC",time:"15 min",c:"var(--cyan)"}
  ].forEach(item => {
    h+=`<div style="display:flex;align-items:center;gap:.75rem;padding:.6rem .8rem;background:var(--surface2);border-radius:8px">
      <span style="font-size:1.2rem">${item.icon}</span>
      <div><strong style="font-size:.88rem">${item.title}</strong>
        <div style="font-size:.78rem;color:var(--text2)">${item.desc}</div></div>
      <span style="font-size:.72rem;color:${item.c};margin-left:auto">${item.time}</span></div>`;
  });
  h+=`</div></div>`;

  h+=`<div class="card" style="padding:1rem">
    <h4 style="margin-bottom:.5rem">📘 Oswaal VARC Chapters & Sectionals</h4>
    <p style="font-size:.82rem;color:var(--text2)">Track Oswaal VARC in <strong>Oswaal Book</strong> tab, and 15 VARC Sectionals in <strong>Sectionals & Tests</strong> tab.</p>
  </div>`;

  el.innerHTML=h;
}

// ─── TAB 6: MILESTONES ───
function renderMilestones() {
  const el=document.getElementById("milestones");
  let h=`<h2 class="section-title">Milestones & Timeline</h2>
    <p class="section-desc">Key dates from Aug 5 to Nov 29</p>`;

  h+=`<div style="display:flex;flex-direction:column;gap:.3rem">`;
  MILESTONES.forEach((m,i) => {
    const last=i===MILESTONES.length-1, exam=m.icon==="🎓";
    h+=`<div class="card" style="padding:.6rem 1rem;${last?'border-color:var(--amber);box-shadow:0 0 12px rgba(245,158,11,.2)':''}${exam?'border-left:3px solid var(--red);':''}">
      <div style="display:flex;align-items:center;gap:1rem">
        <span style="font-size:1.1rem">${m.icon}</span>
        <span style="min-width:100px;font-size:.78rem;font-weight:700;color:var(--accent2)">${m.date}</span>
        <span style="font-size:.83rem">${m.event}</span></div></div>`;
  });
  h+=`</div>`;

  // Hard rules
  h+=`<div class="alert-box" style="border-left-color:var(--red);margin-top:1.5rem">
    <strong>🛑 Hard Rules</strong>
    <ul style="font-size:.83rem;color:var(--text2);margin-top:.3rem;padding-left:1rem;line-height:1.8">
      <li>No new Oswaal chapters after Nov 10 — Nov is mocks + sectionals + revision ONLY</li>
      <li>Never skip daily RC test — even during exams</li>
      <li>Error log every day — even 10 min counts</li>
      <li>Mock & Sectional review is NON-NEGOTIABLE — deep error analysis after every test</li>
      <li>LR Revision videos = MANDATORY for every topic</li>
      <li>QA = High-scoring priority (Maximize Oswaal + Topic Tests + Sectionals)</li></ul></div>`;

  el.innerHTML=h;
}

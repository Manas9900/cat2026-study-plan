// CAT 2026 — 98+ Percentile War Room | v5.0 | Oct 20 – Nov 29 (40 Days)
// Target: ~110–120 raw marks | QA: 20+ | DILR: 12+ | VARC: 16+
const CAT_DATE = new Date(2026, 10, 29); // Nov 29

// ── REALITY CHECK ──────────────────────────────────────────────────────────
// 98+ percentile needs ~110-120 raw marks out of 198.
// Breakdown: QA 20+ correct (of 26), DILR 12+ correct (of 20), VARC 16+ correct (of 24)
// Accuracy must be 80%+ across all sections.
// This means: attempt ~55-65 questions, get ~85% right. Quality >> Quantity.

const TARGET = {
  overall: "98+ Percentile",
  rawScore: "110–120 / 198",
  qa: { correct: "20–22", accuracy: "85%+", strategy: "Speed + Shortcut Drills. Sub-90 sec per easy Q." },
  dilr: { correct: "12–14", accuracy: "80%+", strategy: "Complete 2.5 sets. 4-min scan rule. Never touch a 'trap' set." },
  varc: { correct: "16–18", accuracy: "78%+", strategy: "Elimination protocol. 2 RC passages daily with annotation. HBR/Aeon articles." }
};

// ── PHASES (College Midterm Integrated) ────────────────────────────────────
const PHASES = [
  {
    id: "p1", name: "Phase 1: Pre-Midterm Power Surge",
    start: "2026-10-20", end: "2026-11-08",
    hrs: "5–6 hrs/day", color: "var(--cyan)",
    desc: "Max output phase. Daily mock OR 2 sectionals. QA short-notes complete. Fix VARC accuracy with 2 annotated RC passages/day. 3 DILR sets under 35-min daily."
  },
  {
    id: "p2", name: "Phase 2: Midterm Maintenance Window",
    start: "2026-11-09", end: "2026-11-15",
    hrs: "2–3 hrs/day", color: "var(--amber)",
    desc: "College midterm exams. Morning: 1 sectional (40 min) or 1 RC+DILR drill. Evening: Error log + formula sheet. Keep mind warm — don't stop entirely."
  },
  {
    id: "p3", name: "Phase 3: Peak Daily Mock Ramp",
    start: "2026-11-16", end: "2026-11-26",
    hrs: "7–8 hrs/day", color: "var(--green)",
    desc: "Daily full mock at actual CAT slot (8:30 AM). 2.5h deep review. VARC passage annotation. DILR re-solve next day cold. QA speed audit. This is D-week training."
  },
  {
    id: "p4", name: "Phase 4: Taper & Consolidation",
    start: "2026-11-27", end: "2026-11-28",
    hrs: "2 hrs max", color: "var(--pink)",
    desc: "Zero mocks. Only your QA short-notes, mock strategy sheet, 1 light RC passage. Sleep by 10 PM. Let the brain consolidate."
  }
];

const BLOCKED = [
  { start: "2026-10-24", end: "2026-10-24", label: "Dussehra 🏹 — 8h High-Output Day", color: "var(--green)" },
  { start: "2026-11-05", end: "2026-11-07", label: "Deepawali 🪔 — Light (1 Sectional/day)", color: "var(--amber)" },
  { start: "2026-11-09", end: "2026-11-15", label: "IIM Rohtak Midterm Exams 🎓", color: "var(--red)" },
  { start: "2026-11-16", end: "2026-11-16", label: "Foundation Day 🏛️ — Full-day Mock Sprint", color: "var(--green)" },
  { start: "2026-11-27", end: "2026-11-28", label: "Taper Days 🧘 — Rest & Consolidate", color: "var(--purple)" },
  { start: "2026-11-29", end: "2026-11-29", label: "CAT 2026 D-DAY 🏆", color: "var(--accent)" }
];

// ── 25 FULL MOCKS (Quality > Quantity — Every mock = data, not judgment) ─────
// Each mock = 2h exam + 2.5h review. Review IS the practice.
const MOCKS = [
  { num:1,  date:"2026-10-21", day:"Wed", phase:"p1", focus:"Benchmark — Identify exact weak question types in each section" },
  { num:2,  date:"2026-10-23", day:"Fri", phase:"p1", focus:"VARC Elimination Drill — cross out 3 options before committing" },
  { num:3,  date:"2026-10-24", day:"Sat", phase:"p1", focus:"Dussehra 8h Day — Mock + Full Re-solve + Short Notes" },
  { num:4,  date:"2026-10-25", day:"Sun", phase:"p1", focus:"Weekend Sprint — DILR 4-min scan rule practice" },
  { num:5,  date:"2026-10-26", day:"Mon", phase:"p1", focus:"DILR Set-Selection Discipline — never touch a trap set" },
  { num:6,  date:"2026-10-28", day:"Wed", phase:"p1", focus:"QA Sub-90 Sec Speed Execution — count easy Qs in Round 1" },
  { num:7,  date:"2026-10-31", day:"Sat", phase:"p1", focus:"Full Simulation — 55+ total attempts, track section-wise count" },
  { num:8,  date:"2026-11-01", day:"Sun", phase:"p1", focus:"VARC Focus Mock — 3-pass method mandatory for every RC" },
  { num:9,  date:"2026-11-02", day:"Mon", phase:"p1", focus:"Attempt Discipline — 55+ attempts, 80%+ accuracy goal" },
  { num:10, date:"2026-11-04", day:"Wed", phase:"p1", focus:"Pre-Midterm Final Benchmark — track vs Mock #1 progress" },
  { num:11, date:"2026-11-06", day:"Fri", phase:"p1", focus:"Deepawali Light Mock — maintain exam rhythm on holiday" },
  { num:12, date:"2026-11-08", day:"Sun", phase:"p1", focus:"Final Pre-Midterm Mock — full simulation before exam week" },
  { num:13, date:"2026-11-11", day:"Wed", phase:"p2", focus:"Midterm Window Mock — morning maintenance, keep brain warm" },
  { num:14, date:"2026-11-14", day:"Sat", phase:"p2", focus:"Weekend Midterm Mock — CAT slot timing (8:30 AM start)" },
  { num:15, date:"2026-11-15", day:"Sun", phase:"p2", focus:"Midterm Last Day Mock — final warmup before Phase 3 sprint" },
  { num:16, date:"2026-11-16", day:"Mon", phase:"p3", focus:"Foundation Day — Full Throttle Reset Mock (8:30 AM sharp)" },
  { num:17, date:"2026-11-17", day:"Tue", phase:"p3", focus:"Peak Sprint 1 — VARC 3-pass + elimination rate tracking" },
  { num:18, date:"2026-11-18", day:"Wed", phase:"p3", focus:"Peak Sprint 2 — DILR next-day cold re-solve protocol" },
  { num:19, date:"2026-11-19", day:"Thu", phase:"p3", focus:"Peak Sprint 3 — QA shortcut speed (IPM tricks → CAT speed)" },
  { num:20, date:"2026-11-20", day:"Fri", phase:"p3", focus:"Peak Sprint 4 — Section time management (track per-section min)" },
  { num:21, date:"2026-11-21", day:"Sat", phase:"p3", focus:"Peak Sprint 5 — Full D-day simulation at 8:30 AM" },
  { num:22, date:"2026-11-22", day:"Sun", phase:"p3", focus:"Peak Sprint 6 — Execute pre-planned strategy, no deviations" },
  { num:23, date:"2026-11-23", day:"Mon", phase:"p3", focus:"Clutch Accuracy Mock — 85%+ accuracy even if attempts drop" },
  { num:24, date:"2026-11-25", day:"Wed", phase:"p3", focus:"Penultimate Mock — finalize section strategy, write exam card" },
  { num:25, date:"2026-11-26", day:"Thu", phase:"p3", focus:"LAST MOCK 🎯 — Confidence builder. Simulate D-day exactly." }
];

// ── 45 SECTIONALS (15 per section — Maximum Coverage for 98+) ──────────────
// Mixed on mock AND non-mock days. 15 VARC + 15 DILR + 15 QA.
const SECTIONAL_TESTS = {
  varc: 15,  // Focus: RC 3-pass method, VA accuracy (Para Jumbles + Odd Sentence)
  dilr: 15,  // Focus: Timed 2-set completion, 4-min scan discipline
  qa: 15,    // Focus: Speed drills — sub-90 sec per easy Q, 2-round strategy
  total: 45
};

// ── QA SHORT NOTES (Formula + Shortcut + Trap Alert) ───────────────────────
const QA_SHORT_NOTES = [
  { id:"sn_seq",   name:"Sequences & Series (AP, GP, HP, AGP, Telescoping)",     done:true,  badge:"DONE ✅",  priority:"" },
  { id:"sn_num",   name:"Number System (Remainders, CRT, Euler, Factors, Bases)", done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_pct",   name:"Percentages, P&L, Faulty Weights, Successive Change",    done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_ratio", name:"Ratio, Mixtures, Alligations, Partnerships",             done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_tsd",   name:"TSD (Relative Speed, Trains, Boats, Escalators)",        done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_tw",    name:"Time & Work, Pipes, Efficiency Method",                  done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_avg",   name:"Averages, Deviations, Weighted Avg Shortcuts",           done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_alg_eq",name:"Linear & Quadratic Equations, Descarte's Rule",          done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_ineq",  name:"Inequalities, Modulus, Wavy Curve, AM-GM Bounds",        done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_func",  name:"Functions, Graphs, Transformations, Odd/Even/Period",    done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_log",   name:"Logarithms, Surds, Indices, Base Change Tricks",         done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_tri",   name:"Triangles: Cevians, Centers, Similarity, Stewart, etc.", done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_circ",  name:"Circles: Tangents, Power of Point, Cyclic Quads",        done:false, badge:"P1 🔴",    priority:"high" },
  { id:"sn_mens",  name:"Mensuration 2D/3D & Coordinate (Lines, Circles)",        done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_pnc",   name:"P&C: Derangements, Grouping, Partition, Multinomial",    done:false, badge:"P2 🟡",    priority:"med"  },
  { id:"sn_prob",  name:"Probability, Conditional, Bayes, Geometric Probability", done:false, badge:"P3 🟢",    priority:"low"  }
];

// ── DAILY VARC ANNOTATION LOG ──────────────────────────────────────────────
// 2 RC passages daily. Each must be annotated.
const VARC_DAYS = (() => {
  const days = [];
  let d = new Date("2026-10-20");
  const end = new Date("2026-11-28");
  let n = 1;
  while (d <= end) {
    const ds = d.toISOString().split("T")[0];
    days.push({ id: "vd_" + n, date: ds, num: n });
    n++;
    d.setDate(d.getDate() + 1);
  }
  return days;
})();

// ── DILR DAILY TIMED SETS ─────────────────────────────────────────────────
// 3 sets daily under 35-min timer on non-mock days.
const DILR_BATCHES = [
  { id:"db1", label:"Oct 20–25 (6 days × 3 sets = 18 sets)", sets:18 },
  { id:"db2", label:"Oct 26–31 (6 days × 3 sets = 18 sets)", sets:18 },
  { id:"db3", label:"Nov 1–8   (8 days × 3 sets = 24 sets)", sets:24 },
  { id:"db4", label:"Nov 9–15  (7 days × 1 set  = 7 sets — midterm mode)", sets:7 },
  { id:"db5", label:"Nov 16–26 (11 days × 2 sets = 22 sets — post mock)", sets:22 }
];

// ── MOCK REVIEW PROTOCOL STEPS (For each of the 25 mocks) ─────────────────
const REVIEW_PROTOCOL = [
  { step:"Step 1 (45 min): VARC Annotation", detail:"Re-read every RC passage. For each wrong/skipped question, write ONE sentence: 'I chose [X] because [reason]. The trap was [Y]. Correct reasoning is [Z].' This is non-negotiable." },
  { step:"Step 2 (30 min): DILR Cold Re-solve", detail:"Do NOT read solutions first. Re-attempt all wrong DILR sets from scratch with fresh eyes. If still stuck after 15 min, THEN read solution. Next morning, solve the set again cold." },
  { step:"Step 3 (30 min): QA Trap Audit", detail:"For every wrong QA question, classify the error: (a) Formula gap → update short note, (b) Calculation error → write correct method, (c) Mis-read → highlight and be more careful next time." },
  { step:"Step 4 (30 min): Attempt Pattern Analysis", detail:"Count: attempts per section, correct per section, net score. Did you attempt wrong questions? Did you skip easy ones? Plot a trend graph over mocks." },
  { step:"Step 5 (15 min): Next Mock Strategy Note", detail:"Write 3 specific things to do differently in the NEXT mock. Put this note on your desk before the next mock. Read it 5 minutes before starting." }
];

// ── VARC ACCURACY SYSTEM (For 16+ correct) ────────────────────────────────
const VARC_SYSTEM = {
  rc: {
    title: "RC Protocol: 3-Pass Method",
    steps: [
      "PASS 1 (3 min): Read the LAST paragraph first, then P1. What is the main argument/position?",
      "PASS 2 (5 min): Read fully. After EACH paragraph, pause and mentally complete: 'This paragraph says _______ in order to ______.'",
      "PASS 3 (4 min): Answer questions using ELIMINATION. Never pick an answer directly. Cross out wrong options first.",
      "ELIMINATION FILTERS: (1) Out of Scope, (2) Extreme Tone [always/never/only], (3) Distortion [twists author's logic], (4) Too Narrow [minor detail as main idea]."
    ]
  },
  va: {
    title: "VA Protocol: The High-Accuracy Anchor",
    steps: [
      "Para Summary: Find PREMISE (what is being discussed?) + CONCLUSION (what does the author conclude?). The correct option = both in 1 sentence.",
      "Odd Sentence Out: Find the sentence that introduces a NEW topic/entity/actor not connected to the others.",
      "Para Jumbles: Find the OPENER (no pronoun/article reference, introduces topic) and CLOSER (conclusion word: thus/hence/therefore). Build inward.",
      "Target: 6/8 VA questions with 85%+ accuracy. This is your SAFE marks bank."
    ]
  },
  reading: {
    title: "Daily Reading Material (Upgrade from The Hindu)",
    items: [
      "Aeon Magazine (aeon.co) — Philosophy, Psychology, Science. Closest to CAT VARC passage tone.",
      "The Economist (economist.com) — Economics, Politics, Social. Dense, complex sentence structures.",
      "Harvard Business Review (hbr.org) — Management, Strategy. Business-oriented abstract thinking.",
      "The Hindu Editorial — Still useful for speed, but NOT sufficient alone for 98+ VARC."
    ]
  }
};

// ── DILR CONFIDENCE SYSTEM (For 12+ correct) ──────────────────────────────
const DILR_SYSTEM = {
  scan: {
    title: "The 4-Minute Scan Rule (Non-Negotiable at 98+)",
    steps: [
      "When DILR section begins: DO NOT touch pen to paper for 4 minutes.",
      "Scan all 4 sets. Label each: 🟢 (familiar template — do first), 🟡 (conditional — do if time), 🔴 (novel/trap — skip entirely).",
      "At 98+ percentile, you need 2.5 sets correct. That means 2 complete sets (10 Qs) + 2-3 Qs from a 3rd set.",
      "The student who scores 98+ in DILR does NOT solve 4 sets. They solve 2 sets with 100% accuracy."
    ]
  },
  sets: {
    title: "Priority Set Types to Master (in order)",
    items: [
      "🏆 Games & Tournaments (Knockout/Round-Robin) — Already your strongest. This is guaranteed 15 marks.",
      "⭐ Linear/Matrix Arrangements — Master tabular representation. 15-20 PYQ sets minimum.",
      "⭐ Quant-Based DILR (Maxima/Minima/Venn) — Pure algebra. Leverages your QA strength.",
      "🟡 Scheduling & Selection — Learn the constraint-table approach. 10 PYQ sets.",
      "🔴 Novel/Abstract Sets — Practice identification only. Skip in exam unless obvious."
    ]
  },
  drill: {
    title: "Daily DILR Drill (35-Minute Timed)",
    steps: [
      "Daily (non-mock days): 3 DILR sets under strict 35-minute timer.",
      "Week 1 (Oct 20-26): Only Arrangements + Tournaments. Build speed on comfortable types.",
      "Week 2 (Oct 27-Nov 2): Add Quant-Based sets. Mix with Arrangements.",
      "Week 3+ (Nov 3 onwards): Full mixed sets as they appear in CAT — scan and select."
    ]
  }
};

// ── QA SPEED SYSTEM (For 20+ correct) ─────────────────────────────────────
const QA_SYSTEM = {
  speed: {
    title: "Sub-90 Second Rule (For Easy Questions)",
    detail: "At 98+ percentile, easy QA questions must be solved in under 90 seconds. Medium questions: under 2.5 min. Hard questions: skip in Round 1, attempt in Round 2. Never spend >3 min on any single question."
  },
  rounds: {
    title: "2-Round QA Execution Strategy",
    rounds: [
      "Round 1 (35 min): Solve all Easy questions first. Target: 14-16 correct. Skip anything that takes >90 sec to set up.",
      "Round 2 (25 min): Return to Medium questions. Try 5-7 more. If stuck in 2 min, use answer options (back-solve, eliminate) to narrow down.",
      "Never attempt Hard questions unless you have 10+ min left AND you are confident."
    ]
  },
  drills: {
    title: "Daily QA Speed Drill (After Short-Notes for that chapter)",
    steps: [
      "After writing short-notes for a chapter, solve 20 questions of that chapter under 25-minute timer.",
      "Target: 18/20 correct in 25 min. If not achieved, redo with timer.",
      "Use your IPM exam-solving techniques — you've cracked these before!"
    ]
  }
};

// ── MILESTONES ─────────────────────────────────────────────────────────────
const MILESTONES = [
  { date:"20 Oct", event:"v5.0 War Room Activated — 98+ Percentile Mission Begins", icon:"🚀" },
  { date:"24 Oct", event:"Dussehra: 8-Hour Power Day — Mock #2 + All P1 Short Notes", icon:"🏹" },
  { date:"31 Oct", event:"Target: All 16 QA Short-Notes Complete + Mock #5 Done", icon:"📝" },
  { date:"4 Nov", event:"Pre-Midterm Final: 7 Mocks + 20 Sectionals + DILR = 60+ sets", icon:"🎯" },
  { date:"5–8 Nov", event:"Deepawali — 1 sectional/day. Rest. Stay sharp.", icon:"🪔" },
  { date:"9–15 Nov", event:"IIM Rohtak Midterm Exams — Morning mock (40 min). Evening log.", icon:"🎓" },
  { date:"16 Nov", event:"Foundation Day — Full Throttle Launch. Daily mock sprint begins.", icon:"🔥" },
  { date:"21 Nov", event:"21 Mocks + 35+ Sectionals milestone. Review all error logs.", icon:"⭐" },
  { date:"26 Nov", event:"Final Mock #25 — Lock strategy. No surprises on exam day.", icon:"🏁" },
  { date:"27–28 Nov", event:"Taper: Read QA short-notes + mock strategy. Sleep 10 PM sharp.", icon:"🧘" },
  { date:"29 Nov", event:"CAT 2026 — Execute, don't improvise. Trust the system. 🏆", icon:"🏆" }
];

// ── HELPERS ────────────────────────────────────────────────────────────────
function getCurrentPhase() {
  const now = new Date();
  for (const p of PHASES) {
    if (now >= new Date(p.start + "T00:00:00") && now <= new Date(p.end + "T23:59:59")) return p;
  }
  return PHASES[0];
}
function fmtDate(s) {
  return new Date(s + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short" });
}
function daysTo(s) {
  return Math.ceil((new Date(s + "T00:00:00") - new Date()) / 864e5);
}

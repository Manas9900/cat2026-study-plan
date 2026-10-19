// CAT 2026 Schedule v4.0 — 40-Day Final Sprint (Oct 20 – Nov 29, 2026)
// Targets: 25+ Full Mocks, 45+ Sectionals, QA Formula Short-Notes, LR Confidence & VARC Accuracy Booster
const CAT_DATE = new Date(2026, 10, 29);

const PHASES = [
  { 
    id:"p1", 
    name:"Pre-Midterm Power Surge", 
    start:"2026-10-20", 
    end:"2026-11-04", 
    hrs:"5–6 hrs/day", 
    color:"var(--cyan)", 
    desc:"Heavy Sectional & Mock ramp-up, finish all QA Short-Notes, daily VARC accuracy drill & crack 2-3 standard LR sets/day before exams begin." 
  },
  { 
    id:"p2", 
    name:"Deepawali & Midterm Exams", 
    start:"2026-11-05", 
    end:"2026-11-15", 
    hrs:"2.5–3.5 hrs/day", 
    color:"var(--amber)", 
    desc:"Midterm & Diwali Mode: Zero heavy concept learning. Only 1 Mock/Sectional per day + Analysis + Formula revision. Keep mind fresh." 
  },
  { 
    id:"p3", 
    name:"Post-Midterm Peak Sprint", 
    start:"2026-11-16", 
    end:"2026-11-26", 
    hrs:"7–8 hrs/day", 
    color:"var(--green)", 
    desc:"Peak CAT mode: Daily Full Mock / Sectionals at actual CAT slot (8:30 AM / 12:30 PM / 4:30 PM) + rigorous error log audit + QA shortcut speed." 
  },
  { 
    id:"p4", 
    name:"Taper & Mental Conditioning", 
    start:"2026-11-27", 
    end:"2026-11-28", 
    hrs:"2 hrs/day", 
    color:"var(--pink)", 
    desc:"No mocks. Only self-made QA short notes, formula sheets, mock strategy review & mental relaxation." 
  }
];

const BLOCKED_DAYS = [
  { start:"2026-10-24", end:"2026-10-24", label:"Dussehra 🏹 (Holiday - 8h High Output Day)", color:"var(--green)" },
  { start:"2026-10-31", end:"2026-11-01", label:"Weekend Pre-Exam Mocks & QA Formula Sprint", color:"var(--cyan)" },
  { start:"2026-11-05", end:"2026-11-08", label:"Deepawali Break 🪔 (Light / Family + 1 Daily Sectional)", color:"var(--amber)" },
  { start:"2026-11-09", end:"2026-11-15", label:"Mid Term Examination 🎓 (Morning CAT slot + Evening Exam Prep)", color:"var(--red)" },
  { start:"2026-11-16", end:"2026-11-16", label:"Foundation Day 🏛️ (Holiday - CAT Day!)", color:"var(--green)" },
  { start:"2026-11-29", end:"2026-11-29", label:"CAT 2026 D-DAY 🏆 (Battle Day)", color:"var(--accent)" }
];

// ─── QA SHORT-NOTES TRACKER (FORMULAS & SHORT TRICKS) ───
const QA_SHORT_NOTES = [
  { id:"sn_seq", name:"Sequence, Series & Progressions (AP, GP, HP, AGP, Telescoping)", status:"done", badge:"Completed ✅" },
  { id:"sn_num", name:"Number System (Remainders, CRT, Power Cycles, Factors, Base System)", status:"todo", badge:"Priority 1" },
  { id:"sn_arith_pct", name:"Percentages, Profit & Loss, Faulty Weights, Successive Change", status:"todo", badge:"High Scoring" },
  { id:"sn_arith_ratio", name:"Ratio, Proportions, Mixtures, Alligations & Partnerships", status:"todo", badge:"High Scoring" },
  { id:"sn_arith_avg", name:"Averages, Deviations & Weighted Average Shortcuts", status:"todo", badge:"Quick" },
  { id:"sn_tsd", name:"Time Speed Distance (Relative Speed, Trains, Escalators, Races)", status:"todo", badge:"Priority 1" },
  { id:"sn_tw", name:"Time & Work, Pipes & Cisterns, Efficiency Shortcuts", status:"todo", badge:"Quick" },
  { id:"sn_alg_eq", name:"Linear & Quadratic Equations, Descarte's Rule, Roots & Max/Min", status:"todo", badge:"High Scoring" },
  { id:"sn_alg_ineq", name:"Inequalities, Modulus, Wavy Curve Method & AM-GM Bounds", status:"todo", badge:"Essential" },
  { id:"sn_alg_func", name:"Functions, Graphs, Transformations, Periodic & Odd/Even", status:"todo", badge:"Crucial" },
  { id:"sn_alg_log", name:"Logarithms, Surds, Indices & Base Change Shortcuts", status:"todo", badge:"Quick Marks" },
  { id:"sn_geo_tri", name:"Geometry: Triangles, Cevians, Centers, Similarity, Stewart Theorem", status:"todo", badge:"Priority 1" },
  { id:"sn_geo_circ", name:"Circles, Tangents, Power of Point, Cyclic Quads (Ptolemy)", status:"todo", badge:"High Scoring" },
  { id:"sn_geo_mens", name:"Mensuration 2D/3D & Coordinate Geometry (Straight Lines, Distance)", status:"todo", badge:"Formulas" },
  { id:"sn_mod_pnc", name:"Permutation & Combination (Derangements, Grouping, Partition)", status:"todo", badge:"Shortcuts" },
  { id:"sn_mod_prob", name:"Probability, Conditional, Bayes, Dice/Coin Shortcuts", status:"todo", badge:"Shortcuts" }
];

// ─── 45+ SECTIONAL TESTS (15 VARC, 15 DILR, 16 QA = 46 Total) ───
const SECTIONAL_TESTS = {
  varc: 15,
  dilr: 15,
  qa: 16,
  total: 46
};

// ─── 25 FULL-LENGTH MOCKS CALENDAR (Oct 21 – Nov 26) ───
const MOCKS = [
  { num:1, date:"2026-10-21", day:"Wed", phase:"Pre-Midterm", target:"Benchmark Mock (Analyze LR & VARC weakness)" },
  { num:2, date:"2026-10-23", day:"Fri", phase:"Pre-Midterm", target:"Time Allocation & Accuracy Focus" },
  { num:3, date:"2026-10-24", day:"Sat", phase:"Dussehra", target:"Dussehra Full Mock (Exam Conditions)" },
  { num:4, date:"2026-10-26", day:"Mon", phase:"Pre-Midterm", target:"VARC Option Elimination Practice" },
  { num:5, date:"2026-10-28", day:"Wed", phase:"Pre-Midterm", target:"DILR Set Selection Discipline" },
  { num:6, date:"2026-10-30", day:"Fri", phase:"Pre-Midterm", target:"QA High-Speed Round 1 (Easy Qs first)" },
  { num:7, date:"2026-10-31", day:"Sat", phase:"Pre-Midterm", target:"Full 2-Hour Strict CAT Simulation" },
  { num:8, date:"2026-11-01", day:"Sun", phase:"Pre-Midterm", target:"Sunday Mock + Macro Performance Audit" },
  { num:9, date:"2026-11-03", day:"Tue", phase:"Pre-Midterm", target:"Pre-Midterm Readiness Check" },
  { num:10, date:"2026-11-04", day:"Wed", phase:"Pre-Midterm", target:"Consolidation Mock before Exams" },
  { num:11, date:"2026-11-06", day:"Fri", phase:"Diwali Break", target:"Diwali Morning Mock (Light day)" },
  { num:12, date:"2026-11-08", day:"Sun", phase:"Diwali Break", target:"Post-Diwali Baseline Calibration" },
  { num:13, date:"2026-11-11", day:"Wed", phase:"Midterm Window", target:"Midterm Rhythm Mock (Slot match)" },
  { num:14, date:"2026-11-14", day:"Sat", phase:"Midterm Window", target:"Weekend Midterm Maintenance Mock" },
  { num:15, date:"2026-11-16", day:"Mon", phase:"Foundation Day", target:"Full Throttle Reset Mock" },
  { num:16, date:"2026-11-17", day:"Tue", phase:"Peak Sprint", target:"Daily Mock #1 (Slot match 8:30 AM)" },
  { num:17, date:"2026-11-18", day:"Wed", phase:"Peak Sprint", target:"Daily Mock #2 (VARC Accuracy Drill)" },
  { num:18, date:"2026-11-19", day:"Thu", phase:"Peak Sprint", target:"Daily Mock #3 (DILR Confidence Drill)" },
  { num:19, date:"2026-11-20", day:"Fri", phase:"Peak Sprint", target:"Daily Mock #4 (QA Max Scoring Drill)" },
  { num:20, date:"2026-11-21", day:"Sat", phase:"Peak Sprint", target:"Daily Mock #5 (Complete Simulation)" },
  { num:21, date:"2026-11-22", day:"Sun", phase:"Peak Sprint", target:"Daily Mock #6 (Slot match 12:30 PM)" },
  { num:22, date:"2026-11-23", day:"Mon", phase:"Peak Sprint", target:"Daily Mock #7 (Clutch Strategy Execution)" },
  { num:23, date:"2026-11-24", day:"Tue", phase:"Peak Sprint", target:"Daily Mock #8 (Error minimization)" },
  { num:24, date:"2026-11-25", day:"Wed", phase:"Peak Sprint", target:"Daily Mock #9 (Final Tune-up Mock 1)" },
  { num:25, date:"2026-11-26", day:"Thu", phase:"Peak Sprint", target:"FINAL MOCK #25 🎯 (Confidence Booster)" }
];

// ─── DILR CONFIDENCE BOOSTER PROTOCOL ───
const DILR_FRAMEWORKS = [
  {
    type: "Selection & Filtering Rule (First 4 Mins)",
    principle: "CAT DILR is won or lost in the FIRST 4 MINUTES. Scan all 4 sets. Classify as 🟢 Doable (Standard template), 🟡 Conditional (Can do if math checks out), 🔴 Trap (Novel, dense conditions). NEVER touch Red sets.",
    action: "Solve 1 easy/medium set completely (4-5 Qs = 12-15 marks) -> Clears 90+ percentile in PwD category instantly!"
  },
  {
    type: "Games & Tournaments (Your Strength)",
    principle: "You already finished 5/6 CrackU lectures. This is your home ground.",
    action: "Master knockout rounds, round-robin points tables & ranking tie-breakers. This is your guaranteed 15 marks set."
  },
  {
    type: "Linear / Circular & Matrix Arrangement",
    principle: "Always draw tabular / grid structures with positive assertions first, negative conditions on the side.",
    action: "Do 15-20 past CAT PYQ sets from Oswaal book. Build muscle memory so unfamiliar variations don't rattle you."
  },
  {
    type: "Quant-Based DILR & Maxima-Minima (Venn)",
    principle: "Pure algebra and equation writing disguised as DILR. Perfect fit since your Quant foundation is solid.",
    action: "3-set Venn diagrams formula: Total = A + B + C - (sum of 2s) + (all 3) + None. Solve 8-10 Oswaal sets."
  }
];

// ─── VARC ACCURACY PROTOCOL (FOR HIGH ACCURACY) ───
const VARC_ACCURACY_RULES = [
  {
    rule: "Elimination > Selection (The 2-Option Trap)",
    detail: "Never look for the 'Right' answer in RC. Look for the 3 WRONG answers. Eliminate for: (1) Out of Scope, (2) Extreme Tone (always, never, only), (3) Distortion (twisting author's logic), (4) Too Narrow."
  },
  {
    rule: "Mental Paragraph Mapping (15-Sec Pause)",
    detail: "After reading every paragraph, pause for 10 seconds and state in your own words: 'Why did the author write this paragraph? What is the main point?'. Do NOT read passively."
  },
  {
    rule: "Question Triage (Skip the Traps)",
    detail: "First attempt: Direct/Factual questions and Primary Purpose. Leave 'Which of the following, if true, most weakens...' for later or skip if ambiguous. Never guess blindly (negative marking kills VARC)."
  },
  {
    rule: "Verbal Ability (VA) is your High-Accuracy Anchor",
    detail: "Para Summary (find the premise + conclusion in 1 sentence) & Odd-Sentence-Out have higher hit rates than tricky RC inferences. Target 6/8 VA attempts with 80%+ accuracy."
  }
];

// ─── WEEKLY / DAILY TEMPLATES (MIDTERM & SPRINT) ───
const TEMPLATES = {
  pre_midterm: {
    title: "Phase 1: Pre-Midterm Surge (Oct 20 – Nov 4)",
    subtitle: "5–6 Hours/Day · Class Schedule (10:20–17:20) · Early AM + Evening Strategy",
    slots: [
      { time: "6:00 AM – 8:00 AM (2.0 hrs)", task: "☀️ QA SHORT-NOTES & FORMULA DRILL: Draft short-notes for 1 QA chapter + solve 15 tricky questions from Oswaal/notes." },
      { time: "College Hours (10:20 – 17:20)", task: "🏫 College classes + Midterm project submissions. Keep lunch/breaks free for quick formula review on phone." },
      { time: "18:00 – 19:30 (1.5 hrs)", task: "🎯 SECTIONAL TEST OR DILR BOOST: 1 Sectional Test (40 mins) + 40 mins deep error analysis OR 2 high-level DILR sets." },
      { time: "20:30 – 22:30 (2.0 hrs)", task: "📖 VARC ACCURACY DRILL: 1 RC Sectional (40 mins) + 30 mins audit of wrong options + 1 The Hindu / Aeon Essay editorial + 20 mins Daily Error Log." }
    ]
  },
  midterm_window: {
    title: "Phase 2: Midterm & Deepawali (Nov 5 – Nov 15)",
    subtitle: "2.5–3.5 Hours/Day · Maintenance Mode · No New Fatigue",
    slots: [
      { time: "6:30 AM – 8:00 AM (1.5 hrs)", task: "⚡ MORNING MOCK / SECTIONAL: Alternate days: 1 Full Mock OR 2 Sectionals under strict exam timer." },
      { time: "Daytime (College & Exams)", task: "🎓 Midterm Exams & College preparation. Zero guilt for focusing on semester grades." },
      { time: "21:00 – 22:15 (1.25 hrs)", task: "🔍 ERROR AUDIT & QA FORMULA GLANCE: 30 mins mock analysis + 30 mins QA short notes review + 15 mins daily error log." }
    ]
  },
  peak_sprint: {
    title: "Phase 3: Peak Sprint (Nov 16 – Nov 26)",
    subtitle: "7–8 Hours/Day · Full Throttle · Daily Mock + Analysis + Formula Mastery",
    slots: [
      { time: "8:00 AM – 11:30 AM (3.5 hrs)", task: "🔥 FULL CAT MOCK (Exam conditions): 2 hours testing (8:30–10:30) + 1.5 hours immediate deep error analysis." },
      { time: "13:30 – 15:30 (2.0 hrs)", task: "🎯 TARGETED WEAK AREA SECTIONALS: 1 VARC Sectional + 1 DILR Sectional with option breakdown." },
      { time: "16:30 – 18:30 (2.0 hrs)", task: "⚡ QA SPEED & SHORT-NOTES AUDIT: Rapid solving of 25 QA PYQs using shortcut tricks + formula memorization." },
      { time: "20:30 – 21:30 (1.0 hr)", task: "🧘 MINDSET & ERROR LOG CONSOLIDATION: Review today's mistakes, write insights, sleep early for circadian clock reset." }
    ]
  }
};

const MILESTONES = [
  { date: "20 Oct", event: "Launch of 40-Day Final Sprint — Mission Top IIMs & FMS", icon: "🚀" },
  { date: "24 Oct", event: "Dussehra Holiday — 8-Hour Power Study & Mock #3", icon: "🏹" },
  { date: "31 Oct", event: "All 16 QA Short-Notes Modules Finished & Ready", icon: "📝" },
  { date: "04 Nov", event: "Pre-Midterm Target: 10 Full Mocks & 25 Sectionals Completed", icon: "🎯" },
  { date: "05–08 Nov", event: "Deepawali Break — Maintain Daily Sectionals + Family Rest", icon: "🪔" },
  { date: "09–15 Nov", event: "IIM Rohtak Midterm Exams — Smooth Sailing & Maintenance Mocks", icon: "🎓" },
  { date: "16 Nov", event: "Foundation Day Holiday — Launch of 10-Day Peak Daily Mock Ramp", icon: "🔥" },
  { date: "21 Nov", event: "40+ Sectionals & 20+ Mocks Milestone Crossed", icon: "⭐" },
  { date: "26 Nov", event: "Final Mock #25 Completed — All Mocks & Sectionals Wrapped!", icon: "🏁" },
  { date: "27–28 Nov", event: "Taper Days — Only QA Short Notes, Strategy Recap & Full Rest", icon: "🧘" },
  { date: "29 Nov", event: "CAT 2026 D-DAY — Deliver Your Best Performance!", icon: "🏆" }
];

// Helper Functions
function getCurrentPhase() {
  const now = new Date();
  for (const p of PHASES) {
    if (now >= new Date(p.start + "T00:00:00") && now <= new Date(p.end + "T23:59:59")) return p;
  }
  return PHASES[0];
}

function fmtDate(s) {
  return new Date(s + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

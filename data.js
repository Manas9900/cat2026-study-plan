// CAT 2026 Schedule Data v2 — Revised July 6, 2026
const CAT_DATE = new Date(2026, 10, 29);
const START = new Date(2026, 6, 6);

const PHASES = [
  { id:"p1", name:"College + Foundation", start:"2026-07-06", end:"2026-07-24", hrs:"3–4", color:"var(--cyan)", desc:"LR videos + QA book start + daily RC" },
  { id:"p2", name:"Midterm Exam", start:"2026-07-25", end:"2026-08-01", hrs:"1–2", color:"var(--red)", desc:"College midterm — reduced CAT study" },
  { id:"p3", name:"College + Ramp-up", start:"2026-08-02", end:"2026-09-10", hrs:"3–4", color:"var(--accent)", desc:"Continue LR/QA + mocks begin" },
  { id:"p4", name:"Endterm Exam", start:"2026-09-11", end:"2026-09-21", hrs:"1–2", color:"var(--red)", desc:"College endterm — reduced CAT study" },
  { id:"p5", name:"Term Break — Full Throttle", start:"2026-09-22", end:"2026-11-10", hrs:"6–7", color:"var(--green)", desc:"Full-time CAT prep. Complete all content. Heavy mocks." },
  { id:"p6", name:"Mid-Nov Midterm", start:"2026-11-11", end:"2026-11-18", hrs:"2–3", color:"var(--amber)", desc:"College midterm — still do mocks" },
  { id:"p7", name:"Final Sprint", start:"2026-11-19", end:"2026-11-28", hrs:"6–7", color:"var(--pink)", desc:"Last mocks + revision only. Taper Nov 27–28." }
];

const EXAMS = [
  { name:"College Midterm", start:"2026-07-28", end:"2026-08-01", prep:"2026-07-25" },
  { name:"College Endterm", start:"2026-09-14", end:"2026-09-19", prep:"2026-09-11" },
  { name:"Mid-Nov Midterm", start:"2026-11-13", end:"2026-11-17", prep:"2026-11-11" }
];

// ─── QA BOOK CHAPTERS (11 chapters × 3 levels × ~25 Qs) ───
const QA_CHAPTERS = [
  { id:"qa1", name:"Average, Ratio & Proportion", levels:3, qPerLevel:25, priority:1 },
  { id:"qa2", name:"Profit, Loss & Interest", levels:3, qPerLevel:25, priority:2 },
  { id:"qa3", name:"Time, Distance & Work", levels:3, qPerLevel:25, priority:3 },
  { id:"qa4", name:"Linear Equations", levels:3, qPerLevel:25, priority:4 },
  { id:"qa5", name:"Quadratic Equations", levels:3, qPerLevel:25, priority:5 },
  { id:"qa6", name:"Inequalities", levels:3, qPerLevel:25, priority:6 },
  { id:"qa7", name:"Progressions & Series", levels:3, qPerLevel:25, priority:7 },
  { id:"qa8", name:"Number System", levels:3, qPerLevel:30, priority:8 },
  { id:"qa9", name:"Logarithm, Surds & Indices", levels:3, qPerLevel:25, priority:9 },
  { id:"qa10", name:"Probability & P&C", levels:3, qPerLevel:25, priority:10 },
  { id:"qa11", name:"Functions", levels:3, qPerLevel:20, priority:11 }
];

// ─── QA VIDEO LECTURES (conditional — watch only if stuck) ───
const QA_VIDEOS = [
  { id:"qv1", name:"Geometry", count:20, conditional:true },
  { id:"qv2", name:"Number System", count:13, conditional:true },
  { id:"qv3", name:"Algebra", count:10, conditional:true },
  { id:"qv4", name:"Arithmetic", count:10, conditional:true },
  { id:"qv5", name:"Permutation & Combination", count:2, conditional:true },
  { id:"qv6", name:"Probability", count:2, conditional:true },
  { id:"qv7", name:"Functions", count:2, conditional:true }
];

// ─── LR BOOK CHAPTERS ───
const LR_CHAPTERS = [
  { id:"lr1", name:"Arrangements", levels:3, qPerLevel:42, sets:true },
  { id:"lr2", name:"Puzzles", levels:3, qPerLevel:42, sets:true },
  { id:"lr3", name:"Games & Tournaments", levels:3, qPerLevel:42, sets:true },
  { id:"lr4", name:"Scheduling", levels:1, qPerLevel:45, sets:true },
  { id:"lr5", name:"Selection with Condition", levels:1, qPerLevel:45, sets:true },
  { id:"lr6", name:"2D and 3D LR", levels:1, qPerLevel:45, sets:true },
  { id:"lr7", name:"Quant-Based LR", levels:1, qPerLevel:45, sets:true }
];

// ─── LR VIDEO LECTURES (ALL to be watched — weakness area) ───
const LR_VIDEOS = [
  { id:"lv1", name:"Arrangements & Spatial Reasoning", count:10 },
  { id:"lv2", name:"Set-based & Complex LR", count:5 },
  { id:"lv3", name:"Games, Tournaments & Scheduling", count:6 },
  { id:"lv4", name:"Data Interpretation & Mixed Sets", count:8 },
  { id:"lv5", name:"Revision Complete Video", count:4 }
];

// ─── DI BOOK CHAPTERS ───
const DI_CHAPTERS = [
  { id:"di1", name:"DI Basics", levels:3, qPerLevel:27 },
  { id:"di2", name:"Charts", levels:3, qPerLevel:27 },
  { id:"di3", name:"Table with Missing Values", levels:1, qPerLevel:30 },
  { id:"di4", name:"Data Change over a Period", levels:1, qPerLevel:30 },
  { id:"di5", name:"DI with Connected Data Sets", levels:1, qPerLevel:30 },
  { id:"di6", name:"Quant-Based DI", levels:1, qPerLevel:30 },
  { id:"di7", name:"Venn Diagrams", levels:1, qPerLevel:30 },
  { id:"di8", name:"Maxima-Minima", levels:1, qPerLevel:30 }
];

// ─── MINI-TESTS (carried from May plan) ───
const MINI_TESTS = { qa:94, lrdi:73, varc:90, total:257 };

// ─── MOCK CALENDAR (30 mocks before Nov 25) ───
const MOCKS = [
  { num:1, date:"2026-07-19", day:"Sun", phase:"p1" },
  { num:2, date:"2026-07-26", day:"Sun", phase:"p2" },
  { num:3, date:"2026-08-02", day:"Sun", phase:"p3" },
  { num:4, date:"2026-08-09", day:"Sun", phase:"p3" },
  { num:5, date:"2026-08-16", day:"Sun", phase:"p3" },
  { num:6, date:"2026-08-23", day:"Sun", phase:"p3" },
  { num:7, date:"2026-08-30", day:"Sun", phase:"p3" },
  { num:8, date:"2026-09-06", day:"Sun", phase:"p3" },
  { num:9, date:"2026-09-20", day:"Sun", phase:"p4" },
  { num:10, date:"2026-09-27", day:"Sun", phase:"p5" },
  { num:11, date:"2026-10-01", day:"Thu", phase:"p5" },
  { num:12, date:"2026-10-04", day:"Sun", phase:"p5" },
  { num:13, date:"2026-10-08", day:"Thu", phase:"p5" },
  { num:14, date:"2026-10-11", day:"Sun", phase:"p5" },
  { num:15, date:"2026-10-15", day:"Thu", phase:"p5" },
  { num:16, date:"2026-10-18", day:"Sun", phase:"p5" },
  { num:17, date:"2026-10-22", day:"Thu", phase:"p5" },
  { num:18, date:"2026-10-25", day:"Sun", phase:"p5" },
  { num:19, date:"2026-10-29", day:"Thu", phase:"p5" },
  { num:20, date:"2026-11-01", day:"Sun", phase:"p5" },
  { num:21, date:"2026-11-05", day:"Thu", phase:"p5" },
  { num:22, date:"2026-11-08", day:"Sun", phase:"p5" },
  { num:23, date:"2026-11-12", day:"Thu", phase:"p6" },
  { num:24, date:"2026-11-15", day:"Sun", phase:"p6" },
  { num:25, date:"2026-11-19", day:"Thu", phase:"p7" },
  { num:26, date:"2026-11-22", day:"Sun", phase:"p7" },
  { num:29, date:"2026-11-24", day:"Tue", phase:"p7" },
  { num:30, date:"2026-11-25", day:"Wed", phase:"p7" }
];
// Insert Aug 27 mock and renumber
MOCKS.splice(6, 0, { num:0, date:"2026-08-27", day:"Thu", phase:"p3" });
MOCKS.forEach((m,i) => m.num = i+1);

// ─── WEEKLY TEMPLATES ───
const TEMPLATES = {
  college: {
    title: "College Phase (3–4 hrs/day)",
    subtitle: "Morning 6–8 AM + Evening 8–10:30 PM",
    days: [
      { day:"Monday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"LR Video Lecture (~1–1.5 hr) + LR book exercise (30 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + Read The Hindu editorial (20 min) + 1 QA mini-test (15 min) + 1 LRDI mini-test (15 min) + QA book questions L1 (30 min) + Error log (15 min)" }
      ]},
      { day:"Tuesday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"QA notes revision (30 min) + QA book questions L2 (45 min) + 1 QA mini-test (15 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + ET editorial (15 min) + LR book exercise (30 min) + 1 LRDI mini-test (15 min) + 1 VARC mini-test (15 min) + DI book exercise (20 min)" }
      ]},
      { day:"Wednesday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"LR Video Lecture (~1–1.5 hr) + LR book exercise (30 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + QA book questions L3 (45 min) + 1 QA mini-test (15 min) + Error log (15 min)" }
      ]},
      { day:"Thursday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"QA notes revision (30 min) + QA book questions (45 min) + 1 QA mini-test (15 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + ET editorial (15 min) + DI book exercise (30 min) + 1 LRDI mini-test (15 min) + 1 VARC mini-test (15 min) + Weak area review (20 min)" }
      ]},
      { day:"Friday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"LR Video Lecture (~1–1.5 hr) + LR book exercise (30 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 LRDI mini-test (15 min) + 1 VARC mini-test (15 min) + Weekly error log review (30 min)" }
      ]},
      { day:"Saturday", slots:[
        { time:"Morning 6:00–8:00 AM", tasks:"LR Video Lecture (1 hr) + DI book exercise (30 min) + 1 LRDI mini-test (15 min)" },
        { time:"Evening 8:00–10:30 PM", tasks:"1 RC test (15 min) + QA book questions (45 min) + LR book exercise (30 min) + 1 QA mini-test (15 min) + Error log (15 min)" }
      ]},
      { day:"Sunday ☀️", slots:[
        { time:"Mock Day (when scheduled)", tasks:"Full Mock Test — 3 hrs + Detailed Review — 1.5 hrs + Error log + strategy notes (30 min)" },
        { time:"Non-mock Sunday", tasks:"LR Video (1.5 hr) + QA book (1 hr) + DI book (30 min) + 1 RC test + The Hindu editorial + 2 mini-tests" }
      ]}
    ]
  },
  fulltime: {
    title: "Full-Time Phase (6–7 hrs/day)",
    subtitle: "Term break — Morning + Afternoon + Evening",
    days: [
      { day:"Monday", slots:[
        { time:"Morning (2–2.5 hrs)", tasks:"LR/DI book exercises — 2 sets (1 hr) + QA book questions — 1 chapter level (45 min) + 1 QA mini-test (15 min)" },
        { time:"Afternoon (2–2.5 hrs)", tasks:"QA notes revision + book questions (1 hr) + DI book exercise (30 min) + 1 LRDI mini-test (15 min) + 1 QA mini-test (15 min)" },
        { time:"Evening (1.5–2 hrs)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 VARC mini-test (15 min) + Error log (20 min) + Weak area drill (30 min)" }
      ]},
      { day:"Tuesday", slots:[
        { time:"Morning (2–2.5 hrs)", tasks:"QA book questions — full chapter level (1.5 hr) + 1 QA mini-test (15 min)" },
        { time:"Afternoon (2–2.5 hrs)", tasks:"LR book exercises — 3 sets (1.5 hr) + 1 LRDI mini-test (15 min) + DI exercise (30 min)" },
        { time:"Evening (1.5–2 hrs)", tasks:"1 RC test (15 min) + ET editorial (15 min) + 1 VARC mini-test (15 min) + QA weak area practice (45 min)" }
      ]},
      { day:"Wednesday", slots:[
        { time:"Morning (2–2.5 hrs)", tasks:"LR book exercises — 3 sets (1.5 hr) + 1 LRDI mini-test (15 min) + DI exercise (30 min)" },
        { time:"Afternoon (2–2.5 hrs)", tasks:"QA book questions (1 hr) + QA notes revision (30 min) + 1 QA mini-test (15 min)" },
        { time:"Evening (1.5–2 hrs)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 VARC mini-test (15 min) + Error log review (30 min)" }
      ]},
      { day:"Thursday", slots:[
        { time:"Morning (2–2.5 hrs)", tasks:"QA book — complete remaining level of a chapter (1.5 hr) + 1 QA mini-test (15 min)" },
        { time:"Afternoon (2–2.5 hrs)", tasks:"LR book exercises (1 hr) + DI book exercise (30 min) + 1 LRDI mini-test (15 min) + 1 VARC mini-test (15 min)" },
        { time:"Evening (1.5–2 hrs)", tasks:"1 RC test (15 min) + ET editorial (15 min) + Mock review if pending (45 min) + Error log (15 min)" }
      ]},
      { day:"Friday", slots:[
        { time:"Morning (2–2.5 hrs)", tasks:"LR book exercises — 3 sets (1.5 hr) + 1 LRDI mini-test (15 min)" },
        { time:"Afternoon (2–2.5 hrs)", tasks:"QA book questions (1 hr) + DI exercise (30 min) + 1 QA mini-test (15 min) + Weekly review (30 min)" },
        { time:"Evening (1.5–2 hrs)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 VARC mini-test (15 min) + Error log (20 min)" }
      ]},
      { day:"Saturday", slots:[
        { time:"Morning (2.5 hrs)", tasks:"LR book exercises (1 hr) + QA book questions (1 hr) + DI exercise (30 min)" },
        { time:"Afternoon (2.5 hrs)", tasks:"QA book — finish chapter (1 hr) + 2 mini-tests (30 min) + Weak area deep dive (1 hr)" },
        { time:"Evening (1.5 hrs)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 VARC mini-test (15 min) + Error log (20 min)" }
      ]},
      { day:"Sunday ☀️", slots:[
        { time:"Mock Day", tasks:"Full Mock Test — 3 hrs (morning) + Detailed Mock Review — 1.5 hrs (afternoon) + Error log + strategy notes (30 min)" },
        { time:"Remaining time", tasks:"1 RC test + The Hindu editorial + Light revision of weak areas" }
      ]}
    ]
  },
  exam: {
    title: "Exam Week (1–2 hrs/day for CAT)",
    subtitle: "College exams — maintain momentum with minimum viable CAT work",
    days: [
      { day:"Every Day", slots:[
        { time:"Morning or Evening (1–1.5 hrs)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 mini-test of any section (15 min) + Light QA formula review (20 min)" },
        { time:"If extra time available", tasks:"1 more mini-test + LR set practice (30 min)" }
      ]}
    ]
  }
};

// ─── MILESTONES ───
const MILESTONES = [
  { date:"6 Jul 2026", event:"Plan v2 begins — fresh start", icon:"🚀" },
  { date:"24 Jul 2026", event:"Phase 1 ends — ~14 LR videos done", icon:"📺" },
  { date:"28 Jul–1 Aug", event:"College Midterm Exams", icon:"🎓" },
  { date:"~End Aug 2026", event:"All 33 LR video lectures completed", icon:"✅" },
  { date:"~Mid Sep 2026", event:"50% QA book exercises done", icon:"📊" },
  { date:"14–19 Sep", event:"College Endterm Exams", icon:"🎓" },
  { date:"22 Sep 2026", event:"Term break starts — FULL THROTTLE", icon:"🔥" },
  { date:"~Mid Oct 2026", event:"All LR + DI book exercises done", icon:"✅" },
  { date:"~End Oct 2026", event:"All QA book exercises done", icon:"✅" },
  { date:"~Early Nov", event:"All 257 mini-tests completed", icon:"✨" },
  { date:"11–17 Nov", event:"Mid-Nov College Midterm", icon:"🎓" },
  { date:"25 Nov 2026", event:"Last mock (#30) — DONE", icon:"🎯" },
  { date:"26–28 Nov", event:"Light revision + rest + confidence", icon:"🧘" },
  { date:"29 Nov 2026", event:"CAT 2026 — D-DAY 🏆", icon:"🏆" }
];

// ─── HELPER: get current phase ───
function getCurrentPhase() {
  const now = new Date();
  for (const p of PHASES) {
    const s = new Date(p.start + "T00:00:00");
    const e = new Date(p.end + "T23:59:59");
    if (now >= s && now <= e) return p;
  }
  return PHASES[0];
}

// ─── HELPER: local date string ───
function localDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function fmtDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day:"numeric", month:"short" });
}

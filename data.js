// CAT 2026 Schedule v3 — Fresh Start Aug 5, 2026 | Oswaal PYQ Chapter-wise
const CAT_DATE = new Date(2026, 10, 29);

const PHASES = [
  { id:"p1", name:"College + Foundation", start:"2026-08-05", end:"2026-09-13", hrs:"2–3", color:"var(--cyan)", desc:"Oswaal chapter-wise + LR videos + daily RC. Classes 10:20–17:20." },
  { id:"p2", name:"Endterm Exams", start:"2026-09-14", end:"2026-09-21", hrs:"1", color:"var(--red)", desc:"College endterms — daily RC + 1 mini-test only" },
  { id:"p3", name:"Term Break — Full Throttle", start:"2026-09-22", end:"2026-11-10", hrs:"6–7", color:"var(--green)", desc:"Full-time CAT. Finish Oswaal + 2 mocks/week." },
  { id:"p4", name:"Mid-Nov Midterm", start:"2026-11-11", end:"2026-11-17", hrs:"2–3", color:"var(--amber)", desc:"College midterm — still do weekend mocks" },
  { id:"p5", name:"Final Sprint", start:"2026-11-18", end:"2026-11-28", hrs:"6–7", color:"var(--pink)", desc:"Last mocks daily + revision. Taper Nov 27–28." }
];

const EXAMS = [
  { name:"College Endterm", start:"2026-09-14", end:"2026-09-21", prep:"2026-09-11" },
  { name:"Mid-Nov Midterm", start:"2026-11-13", end:"2026-11-17", prep:"2026-11-11" }
];

const BLOCKED_DAYS = [
  { start:"2026-08-12", end:"2026-08-17", label:"GF Trip ❤️", color:"var(--pink)" },
  { start:"2026-08-15", end:"2026-08-15", label:"Independence Day 🇮🇳", color:"var(--amber)" },
  { start:"2026-08-26", end:"2026-08-26", label:"Milad-un-Nabi 🟢", color:"var(--green)" },
  { start:"2026-09-04", end:"2026-09-04", label:"Janmashtami 🟢", color:"var(--green)" },
  { start:"2026-09-14", end:"2026-09-21", label:"Endterm Exams 🎓", color:"var(--red)" },
  { start:"2026-09-22", end:"2026-09-28", label:"Term Break 🔥", color:"var(--green)" }
];

// ─── OSWAAL BOOK TRACKER ───
const OSWAAL = {
  varc: {
    name: "VARC", color: "var(--varc)", icon: "📕",
    chapters: [
      { id:"ov1", name:"Intro to VARC", pages:"1–3", est:"30 min" },
      { id:"ov2", name:"Para Jumbles — Basics", pages:"4–15", est:"2 hrs" },
      { id:"ov3", name:"Para Jumbles — Subjective", pages:"15–25", est:"2 hrs" },
      { id:"ov4", name:"Para Jumbles — Odd Sentence Out", pages:"25–33", est:"1.5 hrs" },
      { id:"ov5", name:"Summary Type Questions", pages:"34–53", est:"3 hrs" },
      { id:"ov6", name:"RC — Basics", pages:"54–60", est:"1 hr" },
      { id:"ov7", name:"RC — Environment & Life Science", pages:"60–80", est:"3 hrs" },
      { id:"ov8", name:"RC — Science & Technology", pages:"80–95", est:"3 hrs" },
      { id:"ov9", name:"RC — Economics & Management", pages:"95–110", est:"3 hrs" },
      { id:"ov10", name:"RC — Social Science & History", pages:"110–125", est:"3 hrs" },
      { id:"ov11", name:"RC — Literature & Art", pages:"125–140", est:"3 hrs" },
      { id:"ov12", name:"RC — Philosophy & Psychology", pages:"140–155", est:"3 hrs" },
      { id:"ov13", name:"RC — Politics & Contemporary", pages:"155–164", est:"2 hrs" }
    ]
  },
  dilr: {
    name: "DILR", color: "var(--lrdi)", icon: "📗",
    chapters: [
      { id:"od1", name:"LR — Mathematical Reasoning", pages:"165–185", est:"3 hrs" },
      { id:"od2", name:"LR — Set Theory", pages:"185–200", est:"3 hrs" },
      { id:"od3", name:"LR — Games & Tournaments", pages:"200–220", est:"3 hrs" },
      { id:"od4", name:"LR — Group Arrangement", pages:"220–240", est:"3 hrs" },
      { id:"od5", name:"LR — Sitting/Standing Arrangement", pages:"240–260", est:"3 hrs" },
      { id:"od6", name:"LR — Puzzles", pages:"260–275", est:"3 hrs" },
      { id:"od7", name:"LR — Order & Ranking", pages:"275–285", est:"2 hrs" },
      { id:"od8", name:"LR — Analytical Reasoning", pages:"285–300", est:"3 hrs" },
      { id:"od9", name:"LR — Binary & Conditional Logic", pages:"300–309", est:"2 hrs" },
      { id:"od10", name:"DI — Line & Bar Charts", pages:"310–340", est:"4 hrs" },
      { id:"od11", name:"DI — Pie Charts", pages:"340–360", est:"3 hrs" },
      { id:"od12", name:"DI — Data Tabulation", pages:"360–385", est:"4 hrs" },
      { id:"od13", name:"DI — Caselets", pages:"385–405", est:"3 hrs" },
      { id:"od14", name:"DI — Logic Based DI", pages:"405–422", est:"3 hrs" }
    ]
  },
  qa: {
    name: "QA", color: "var(--qa)", icon: "📘",
    chapters: [
      { id:"oq1", name:"Number System — Divisibility & Properties", pages:"423–430", est:"2 hrs" },
      { id:"oq2", name:"Number System — HCF, LCM & Remainder", pages:"430–440", est:"2 hrs" },
      { id:"oq3", name:"Number System — Conversion & Misc", pages:"440–446", est:"1.5 hrs" },
      { id:"oq4", name:"Arithmetic — Percentage & P/L/Discount", pages:"447–470", est:"4 hrs" },
      { id:"oq5", name:"Arithmetic — SI/CI & Ratio/Proportion", pages:"470–485", est:"3 hrs" },
      { id:"oq6", name:"Arithmetic — Average & Mixture", pages:"485–495", est:"2 hrs" },
      { id:"oq7", name:"Arithmetic — Time, Speed & Distance", pages:"495–505", est:"2 hrs" },
      { id:"oq8", name:"Arithmetic — Time & Work, Pipes, Clocks", pages:"505–519", est:"3 hrs" },
      { id:"oq9", name:"Geometry — Lines, Angles & Triangles", pages:"520–540", est:"3 hrs" },
      { id:"oq10", name:"Geometry — Quads, Polygons & Circles", pages:"540–560", est:"3 hrs" },
      { id:"oq11", name:"Mensuration & Coordinate Geometry", pages:"560–578", est:"3 hrs" },
      { id:"oq12", name:"Algebra — Equations & Polynomials", pages:"579–600", est:"3 hrs" },
      { id:"oq13", name:"Algebra — Inequalities & Functions", pages:"600–625", est:"4 hrs" },
      { id:"oq14", name:"Algebra — Logarithm & Progressions", pages:"625–651", est:"4 hrs" },
      { id:"oq15", name:"Modern Maths — P&C, Probability & Sets", pages:"652–674", est:"4 hrs" }
    ]
  },
  papers: {
    name: "Full Papers", color: "var(--amber)", icon: "📄",
    chapters: [
      { id:"op1", name:"CAT 2023 Shift-1 (Full Paper)", pages:"17–48", est:"4 hrs" },
      { id:"op2", name:"CAT 2023 Shift-2 (Full Paper)", pages:"49–60", est:"4 hrs" },
      { id:"op3", name:"CAT 2023 Shift-3 (Full Paper)", pages:"61–72", est:"4 hrs" },
      { id:"op4", name:"Sample Paper 1", pages:"675–687", est:"3 hrs" },
      { id:"op5", name:"Sample Paper 2", pages:"688–699", est:"3 hrs" },
      { id:"op6", name:"Sample Paper 3", pages:"700–712", est:"3 hrs" }
    ]
  }
};

// ─── LR VIDEO LECTURES (ALL — weakness area) ───
const LR_VIDEOS = [
  { id:"lv1", name:"Arrangements & Spatial Reasoning", count:10 },
  { id:"lv2", name:"Set-based & Complex LR", count:5 },
  { id:"lv3", name:"Games, Tournaments & Scheduling", count:6 },
  { id:"lv4", name:"Data Interpretation & Mixed Sets", count:8 },
  { id:"lv5", name:"Revision Complete Video", count:4 }
];

// ─── QA VIDEO LECTURES (conditional) ───
const QA_VIDEOS = [
  { id:"qv1", name:"Geometry", count:20, conditional:true },
  { id:"qv2", name:"Number System", count:13, conditional:true },
  { id:"qv3", name:"Algebra", count:10, conditional:true },
  { id:"qv4", name:"Arithmetic", count:10, conditional:true },
  { id:"qv5", name:"Permutation & Combination", count:2, conditional:true },
  { id:"qv6", name:"Probability", count:2, conditional:true },
  { id:"qv7", name:"Functions", count:2, conditional:true }
];

const MINI_TESTS = { qa:94, lrdi:73, varc:90, total:257 };

// ─── 30 MOCKS (Aug 9 – Nov 25) ───
const MOCKS = [
  { num:1, date:"2026-08-09", day:"Sun" },
  { num:2, date:"2026-08-23", day:"Sun" },
  { num:3, date:"2026-08-26", day:"Wed" },
  { num:4, date:"2026-08-30", day:"Sun" },
  { num:5, date:"2026-09-04", day:"Fri" },
  { num:6, date:"2026-09-06", day:"Sun" },
  { num:7, date:"2026-09-13", day:"Sun" },
  { num:8, date:"2026-09-27", day:"Sun" },
  { num:9, date:"2026-10-01", day:"Thu" },
  { num:10, date:"2026-10-04", day:"Sun" },
  { num:11, date:"2026-10-08", day:"Thu" },
  { num:12, date:"2026-10-11", day:"Sun" },
  { num:13, date:"2026-10-15", day:"Thu" },
  { num:14, date:"2026-10-18", day:"Sun" },
  { num:15, date:"2026-10-22", day:"Thu" },
  { num:16, date:"2026-10-25", day:"Sun" },
  { num:17, date:"2026-10-29", day:"Thu" },
  { num:18, date:"2026-10-31", day:"Sat" },
  { num:19, date:"2026-11-01", day:"Sun" },
  { num:20, date:"2026-11-05", day:"Thu" },
  { num:21, date:"2026-11-08", day:"Sun" },
  { num:22, date:"2026-11-12", day:"Thu" },
  { num:23, date:"2026-11-15", day:"Sun" },
  { num:24, date:"2026-11-18", day:"Wed" },
  { num:25, date:"2026-11-19", day:"Thu" },
  { num:26, date:"2026-11-20", day:"Fri" },
  { num:27, date:"2026-11-22", day:"Sun" },
  { num:28, date:"2026-11-23", day:"Mon" },
  { num:29, date:"2026-11-24", day:"Tue" },
  { num:30, date:"2026-11-25", day:"Wed" }
];

// ─── WEEKLY TEMPLATES ───
const TEMPLATES = {
  college: {
    title:"College Phase (2–3 hrs/day)", subtitle:"Classes 10:20–17:20 · CAT: Early AM + Late PM",
    days:[
      { day:"Weekday (Classes)", slots:[
        { time:"6:00–8:00 AM (before class)", tasks:"LR Video Lecture (1–1.5 hr) OR Oswaal chapter solving (1.5 hr)" },
        { time:"8:30–10:00 PM (after class)", tasks:"1 RC test (15 min) + The Hindu editorial (20 min) + 1 mini-test (15 min) + Oswaal PYQs (30 min) + Error log (10 min)" }
      ]},
      { day:"Free Weekday / Holiday", slots:[
        { time:"Morning (2.5 hrs)", tasks:"Oswaal PYQ chapter (1.5 hr) + LR Video (1 hr)" },
        { time:"Afternoon (2 hrs)", tasks:"Oswaal PYQ chapter continued (1 hr) + 2 mini-tests (30 min) + DI practice (30 min)" },
        { time:"Evening (1.5 hrs)", tasks:"1 RC test (15 min) + Hindu editorial (20 min) + ET editorial (15 min) + Error log (20 min)" }
      ]},
      { day:"Sunday ☀️ (Mock Day)", slots:[
        { time:"Morning (3 hrs)", tasks:"Full Mock Test — strict exam conditions" },
        { time:"Afternoon (1.5 hrs)", tasks:"Detailed mock review — analyse every wrong answer" },
        { time:"Evening (30 min)", tasks:"Error log + strategy notes for next mock" }
      ]}
    ]
  },
  fulltime: {
    title:"Full-Time Term Break (6–7 hrs/day)", subtitle:"Sep 22 onwards — Morning + Afternoon + Evening",
    days:[
      { day:"Mon/Wed/Fri", slots:[
        { time:"Morning (2.5 hrs)", tasks:"Oswaal DILR chapter (1.5 hr) + 1 LRDI mini-test (15 min) + LR Video if pending (45 min)" },
        { time:"Afternoon (2 hrs)", tasks:"Oswaal QA chapter (1.5 hr) + 1 QA mini-test (15 min)" },
        { time:"Evening (1.5 hrs)", tasks:"1 RC test (15 min) + Hindu editorial (20 min) + 1 VARC mini-test (15 min) + Error log (20 min)" }
      ]},
      { day:"Tue/Thu/Sat", slots:[
        { time:"Morning (2.5 hrs)", tasks:"Oswaal QA chapter (1.5 hr) + 1 QA mini-test (15 min) + IPM notes revision (30 min)" },
        { time:"Afternoon (2 hrs)", tasks:"Oswaal VARC chapter (1 hr) + Oswaal DILR chapter (45 min) + 1 LRDI mini-test (15 min)" },
        { time:"Evening (1.5 hrs)", tasks:"1 RC test (15 min) + ET editorial (15 min) + 1 VARC mini-test (15 min) + Weak area drill (30 min)" }
      ]},
      { day:"Mock Day (Thu + Sun)", slots:[
        { time:"Morning (3 hrs)", tasks:"Full Mock — exam conditions (3 hrs)" },
        { time:"Afternoon (1.5 hrs)", tasks:"Mock review — error analysis" },
        { time:"Evening (1.5 hrs)", tasks:"1 RC test + Hindu editorial + Error log + Light Oswaal" }
      ]}
    ]
  },
  exam: {
    title:"Exam Week (1 hr/day for CAT)", subtitle:"Endterms/Midterms — minimum viable CAT",
    days:[
      { day:"Every Day", slots:[
        { time:"Any 1 hr window", tasks:"1 RC test (15 min) + Hindu editorial (20 min) + 1 mini-test (15 min) + Formula glance (10 min)" }
      ]}
    ]
  }
};

const MILESTONES = [
  { date:"5 Aug", event:"Plan v3 FRESH START — 116 days to CAT", icon:"🚀" },
  { date:"9 Aug", event:"First Mock (#1)", icon:"🧪" },
  { date:"12–17 Aug", event:"GF Trip ❤️ — no CAT, enjoy!", icon:"❤️" },
  { date:"~10 Sep", event:"All 33 LR videos done (1/day pace)", icon:"📺" },
  { date:"13 Sep", event:"Mock #7 — last before endterms", icon:"🧪" },
  { date:"14–21 Sep", event:"College Endterm Exams", icon:"🎓" },
  { date:"22 Sep", event:"TERM BREAK — Full Throttle begins!", icon:"🔥" },
  { date:"~15 Oct", event:"Oswaal DILR section complete", icon:"✅" },
  { date:"~31 Oct", event:"Oswaal QA section complete", icon:"✅" },
  { date:"~5 Nov", event:"All 257 mini-tests done + Oswaal VARC done", icon:"✨" },
  { date:"11–17 Nov", event:"Mid-Nov College Midterm", icon:"🎓" },
  { date:"25 Nov", event:"Last mock (#30)", icon:"🎯" },
  { date:"27–28 Nov", event:"Light revision + formula sheet + rest", icon:"🧘" },
  { date:"29 Nov", event:"CAT 2026 — D-DAY 🏆", icon:"🏆" }
];

// ─── HELPERS ───
function getCurrentPhase() {
  const now = new Date();
  for (const p of PHASES) {
    if (now >= new Date(p.start+"T00:00:00") && now <= new Date(p.end+"T23:59:59")) return p;
  }
  return PHASES[0];
}
function fmtDate(s) {
  return new Date(s+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"});
}

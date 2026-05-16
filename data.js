// CAT 2026 Schedule Data — Generated algorithmically
const CAT_DATE = new Date(2026, 10, 29); // Nov 29, 2026

const BACKLOG = [
  { day: 82, topic: "Quant: Algebra – Linear Equations 1", pct: 50, section: "QA", revTopic: "Linear Equations" },
  { day: 83, topic: "Quant: Algebra – Linear Equations 2", pct: 0, section: "QA", revTopic: "Linear Equations" },
  { day: 84, topic: "Quant: Algebra – Inequalities 1", pct: 0, section: "QA", revTopic: "Inequalities" },
  { day: 85, topic: "Quant: Algebra – Inequalities 2", pct: 0, section: "QA", revTopic: "Inequalities" },
  { day: 86, topic: "VARC: Informative & Scientific RC", pct: 0, section: "VARC", revTopic: "Geometry (Priority #1)" },
  { day: 87, topic: "Quant: Algebra – Quadratic Equations 1", pct: 0, section: "QA", revTopic: "Quadratic Equations" },
  { day: 88, topic: "Quant: Algebra – Quadratic Equations 2", pct: 0, section: "QA", revTopic: "Quadratic Equations" },
  { day: 89, topic: "Quant: Algebra – Functions", pct: 0, section: "QA", revTopic: "Functions" },
  { day: 90, topic: "Quant: Algebra – Progressions 1", pct: 0, section: "QA", revTopic: "Progressions & Series" },
  { day: 91, topic: "Quant: Algebra – Progressions 2", pct: 0, section: "QA", revTopic: "Progressions & Series" },
  { day: 92, topic: "Quant: Geometry – Intro & Triangles", pct: 0, section: "QA", revTopic: "Geometry – Basics" },
  { day: 93, topic: "Quant: Geometry – Triangles 1", pct: 0, section: "QA", revTopic: "Geometry – Triangles" },
  { day: 94, topic: "Quant: Geometry – Triangles 2", pct: 0, section: "QA", revTopic: "Geometry – Triangles Advanced" },
  { day: 95, topic: "VARC: Para Summary", pct: 0, section: "VARC", revTopic: "Profit, Loss & Interest" }
];

const QUANT_REVISION_SEQ = [
  { id: 1, name: "Geometry", days: "May 20, 27–29; Jun 12", phase1Dates: "Partial in backlog + deep Jun 1–3", status: "High Priority" },
  { id: 2, name: "Profit, Loss & Interest / Percentages", days: "May 30; Jun 4–5", phase1Dates: "Jun 1–5", status: "High Priority" },
  { id: 3, name: "Number System", days: "Jun 3–4", phase1Dates: "Jun 6, 8", status: "High Priority" },
  { id: 4, name: "Time, Distance & Work", days: "Jun 5–6", phase1Dates: "Jun 9–10", status: "High Priority" },
  { id: 5, name: "Progressions & Series", days: "May 25–26; Jun 11", phase1Dates: "Backlog aligned + Jun 11", status: "Medium" },
  { id: 6, name: "Linear & Quadratic Equations", days: "May 15–16, 21–22; Jun 12", phase1Dates: "Backlog aligned + Jun 12", status: "Medium" },
  { id: 7, name: "Averages, Ratio & Proportion", days: "Jun 13, 15", phase1Dates: "Jun 13, 15", status: "Medium" },
  { id: 8, name: "Inequalities", days: "May 18–19; Jun 16", phase1Dates: "Backlog aligned + Jun 16", status: "Medium" },
  { id: 9, name: "Logarithms, Surds & Indices", days: "Jun 17", phase1Dates: "Jun 17", status: "Lower" },
  { id: 10, name: "Functions, Graphs & Statistics", days: "May 23; Jun 18", phase1Dates: "Backlog aligned + Jun 18", status: "Lower" },
  { id: 11, name: "Probability & Combinatorics", days: "Jun 19–20", phase1Dates: "Jun 19–20", status: "Lower" }
];

const LRDI_CLUSTERS = [
  { weeks: "Week 1 (May 15–21)", types: "Arrangements + Scheduling", count: "~12 tests" },
  { weeks: "Week 2 (May 22–28)", types: "Puzzles + Venn Diagrams", count: "~12 tests" },
  { weeks: "Week 3 (May 29–Jun 4)", types: "Games & Tournaments + Coins & Weights", count: "~12 tests" },
  { weeks: "Week 4 (Jun 5–11)", types: "DI: Charts, Tables, Pie, Data Change", count: "~12 tests" },
  { weeks: "Week 5 (Jun 12–18)", types: "Quant-Based LR + Special Charts + Truth-Liar", count: "~12 tests" },
  { weeks: "Week 6 (Jun 19–20)", types: "Mixed / Overflow", count: "~4 tests" }
];

// LRDI cluster lookup by date
function getLRDICluster(d) {
  const t = d.getTime();
  const ranges = [
    [new Date(2026,4,15), new Date(2026,4,22), "Arrangements & Scheduling"],
    [new Date(2026,4,22), new Date(2026,4,29), "Puzzles & Venn Diagrams"],
    [new Date(2026,4,29), new Date(2026,5,5), "Games & Tournaments"],
    [new Date(2026,5,5), new Date(2026,5,12), "DI Types"],
    [new Date(2026,5,12), new Date(2026,5,19), "Quant-LR & Special"],
    [new Date(2026,5,19), new Date(2026,5,21), "Mixed"]
  ];
  for (const [s, e, label] of ranges) if (t >= s.getTime() && t < e.getTime()) return label;
  return "Mixed";
}

// June revision topics (post-backlog)
const JUNE_REVISION = {
  1: "Geometry (Deep Dive 1)", 2: "Geometry (Deep Dive 2)", 3: "Geometry (Deep Dive 3)",
  4: "Profit, Loss & Interest 1", 5: "Profit, Loss & Interest 2",
  6: "Number System 1", 8: "Number System 2",
  9: "Time, Distance & Work 1", 10: "Time, Distance & Work 2",
  11: "Progressions (Deep Review)", 12: "Linear & Quadratic (Deep Review)",
  13: "Averages, Ratio & Proportion 1", 15: "Averages, Ratio & Proportion 2",
  16: "Inequalities (Deep Review)", 17: "Logarithms, Surds & Indices",
  18: "Functions & Statistics (Deep Review)",
  19: "Probability & Combinatorics 1", 20: "Probability & Combinatorics 2"
};

// Sectional test schedule (Phase 1 — Saturdays)
const P1_SECTIONALS = [
  { date: "2026-05-16", section: "QA Sectional #1" },
  { date: "2026-05-23", section: "LRDI Sectional #1" },
  { date: "2026-05-30", section: "VARC Sectional #1" },
  { date: "2026-06-06", section: "QA Sectional #2" },
  { date: "2026-06-13", section: "LRDI Sectional #2" },
  { date: "2026-06-20", section: "VARC Sectional #2" }
];

function generatePhase1() {
  const days = [];
  const start = new Date(2026, 4, 15); // May 15
  const end = new Date(2026, 5, 20);   // Jun 20
  let backlogIdx = 0;
  let advanceLecNum = 0;
  let sectIdx = 0;

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dt = new Date(d);
    const dow = dt.getDay(); // 0=Sun
    const isSun = dow === 0;
    const dateStr = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = dayNames[dow];
    const mm = dt.getMonth(), dd = dt.getDate();
    const isSectionalDay = P1_SECTIONALS.some(s => s.date === dateStr);
    const sectionalInfo = P1_SECTIONALS.find(s => s.date === dateStr);
    const lrdiCluster = getLRDICluster(dt);

    if (isSun) {
      // Sunday schedule
      const sunWeek = Math.floor((dt - start) / (7*86400000));
      days.push({
        date: dateStr, dayName, isSunday: true,
        tags: ["Light Day"],
        morning: { label: "Morning (2–3 hrs)", tasks: [
          sunWeek < 3 ? "Sectional Test (rotate QA/LRDI/VARC) — 60–75 min" : "Full Mock Test — 3 hrs",
          sunWeek < 3 ? "Sectional review + error log" : ""
        ].filter(Boolean)},
        afternoon: sunWeek >= 3 ? { label: "Afternoon (1–1.5 hrs)", tasks: ["Mock review + error log — detailed analysis", "Update weak-areas tracker"]} : null,
        evening: { label: "Evening (30–45 min)", tasks: ["1 VARC RC passage (daily habit)", "Light error log review"]},
        lecture: null, revisionTopic: null, lrdiCluster: null,
        miniTests: { qa: 0, lrdi: sunWeek < 3 ? 1 : 0, varc: 1 }
      });
      continue;
    }

    // Determine lecture
    let lecture = null, revTopic = null;
    if (backlogIdx < BACKLOG.length) {
      const bl = BACKLOG[backlogIdx];
      lecture = `CrackU Day ${bl.day}: ${bl.topic}${bl.pct > 0 ? ` (complete remaining ${100-bl.pct}%)` : ""}`;
      revTopic = bl.revTopic;
      backlogIdx++;
    } else {
      advanceLecNum++;
      lecture = `CrackU Advance Lecture #${advanceLecNum}`;
      revTopic = JUNE_REVISION[dd] || "Continue priority revision";
    }

    // QA mini-test topic hint (aligned with revision)
    const qaHint = revTopic || "Mixed";
    // Determine VARC mini-test type
    let varcType = "RC";
    if (dateStr === "2026-05-20") varcType = "Informative/Scientific RC (aligned with lecture)";
    else if (dateStr === "2026-05-30") varcType = "Para Summary (aligned with lecture)";
    else if (dd % 5 === 0) varcType = "Non-RC (Para Jumble / Odd Sentence)";

    const morningTasks = [
      `<strong>Lecture:</strong> ${lecture} — ~1–1.5 hrs`,
      `<strong>Revision:</strong> ${revTopic} from IPM notes — ~45–60 min`
    ];

    let afternoonTasks, eveningTasks;
    if (isSectionalDay) {
      afternoonTasks = [
        `<strong>${sectionalInfo.section}</strong> — 60–75 min`,
        "Sectional review + error log — 30 min",
        `<strong>LRDI Mini-test</strong> (${lrdiCluster}) — 15 min`
      ];
      eveningTasks = [
        "<strong>1 RC passage</strong> (daily habit) — 20 min",
        `<strong>VARC Mini-test</strong> (${varcType}) — 15 min`,
        "Error log consolidation — 15 min"
      ];
    } else {
      afternoonTasks = [
        `<strong>2–3 Topic tests</strong> (${qaHint}) from CrackU bank — 45 min`,
        `<strong>QA Mini-test</strong> (${qaHint}) — 15 min`,
        `<strong>LRDI Mini-test</strong> (${lrdiCluster}) — 15 min`,
        "Break — 10 min"
      ];
      eveningTasks = [
        "<strong>1 RC passage</strong> (daily habit) — 20 min",
        `<strong>VARC Mini-test</strong> (${varcType}) — 15 min`,
        "Error log + day review — 20 min"
      ];
    }

    days.push({
      date: dateStr, dayName, isSunday: false,
      tags: [lecture.includes("Advance") ? "Advance" : "Backlog", revTopic ? "Revision" : null, isSectionalDay ? "Sectional" : null].filter(Boolean),
      morning: { label: "Morning (2–2.5 hrs)", tasks: morningTasks },
      afternoon: { label: "Afternoon (2–2.5 hrs)", tasks: afternoonTasks },
      evening: { label: "Evening (1.5–2 hrs)", tasks: eveningTasks },
      lecture, revisionTopic: revTopic, lrdiCluster,
      miniTests: { qa: isSectionalDay ? 0 : 1, lrdi: 1, varc: 1 }
    });
  }
  return days;
}

const PHASE2_TEMPLATE = [
  { day: "Monday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "CrackU Advance Lecture (~1 hr) + Quick notes revision (30 min) + 1 QA Mini-test (15 min)" },
    { time: "Evening 8:00–10:30 PM", tasks: "1 RC passage (20 min) + 1 VARC Mini-test (15 min) + 1 LRDI Mini-test (15 min) + Error log (15 min)" }
  ]},
  { day: "Tuesday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "Quant topic revision from IPM notes (45 min) + 2 Topic tests from CrackU bank (45 min) + 1 QA Mini-test (15 min)" },
    { time: "Evening 8:00–10:30 PM", tasks: "1 RC passage (20 min) + 1 LRDI Mini-test (15 min) + 1 VARC Mini-test (15 min) + Weak area drill (30 min)" }
  ]},
  { day: "Wednesday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "CrackU Advance Lecture (~1 hr) + Quick revision (30 min) + 1 QA Mini-test (15 min)" },
    { time: "Evening 8:00–10:30 PM", tasks: "Sectional Test (QA/LRDI/VARC rotating) — 60–75 min + Review — 30 min" }
  ]},
  { day: "Thursday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "Quant revision (45 min) + 1 QA Mini-test (15 min) + 1 LRDI Mini-test (15 min)" },
    { time: "Evening 8:00–10:30 PM", tasks: "1 RC passage (20 min) + 1 VARC Mini-test (15 min) + Error log review (30 min) + Weak area practice (30 min)" }
  ]},
  { day: "Friday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "CrackU Advance Lecture (~1 hr) + Notes revision (30 min) + 1 QA Mini-test (15 min)" },
    { time: "Evening 8:00–10:30 PM", tasks: "1 RC passage (20 min) + 1 LRDI Mini-test (15 min) + 1 VARC Mini-test (15 min) + Weekly review (30 min)" }
  ]},
  { day: "Saturday", slots: [
    { time: "Morning 6:00–8:00 AM", tasks: "Sectional Test — 60–75 min + Quick review" },
    { time: "Evening 8:00–10:30 PM", tasks: "Sectional detailed review (30 min) + 1 RC passage (20 min) + 1 VARC Mini-test (15 min) + Error log (15 min)" }
  ]},
  { day: "Sunday ☀️", slots: [
    { time: "Full Mock Day (Flexible)", tasks: "Full-Length Mock Test — 3 hrs (morning preferred) + Detailed Mock Review — 1–1.5 hrs (afternoon) + Error log + strategy notes — 30 min" },
    { time: "If no mock scheduled", tasks: "2 Sectional Tests (different sections) — 2.5 hrs + Review — 1 hr + 1 RC passage" }
  ]}
];

// Mock Calendar: Late June – Nov 28, 2026
function generateMockCalendar() {
  const mocks = [];
  let num = 0;
  // Late June – July: 1 per 2 weeks
  const jj = [
    ["2026-06-28","Sunday"], ["2026-07-12","Sunday"], ["2026-07-26","Sunday"]
  ];
  // August: 1/week
  const aug = [
    ["2026-08-02","Sunday"], ["2026-08-09","Sunday"], ["2026-08-16","Sunday"], ["2026-08-23","Sunday"], ["2026-08-30","Sunday"]
  ];
  // September: 1/week
  const sep = [
    ["2026-09-06","Sunday"], ["2026-09-13","Sunday"], ["2026-09-20","Sunday"], ["2026-09-27","Sunday"]
  ];
  // October: 2/week
  const oct = [
    ["2026-10-04","Sunday"], ["2026-10-08","Thursday"],
    ["2026-10-11","Sunday"], ["2026-10-15","Thursday"],
    ["2026-10-18","Sunday"], ["2026-10-22","Thursday"],
    ["2026-10-25","Sunday"], ["2026-10-29","Thursday"]
  ];
  // November: 2–3/week, taper last week
  const nov = [
    ["2026-11-01","Sunday"], ["2026-11-04","Wednesday"], ["2026-11-08","Sunday"],
    ["2026-11-11","Wednesday"], ["2026-11-15","Sunday"], ["2026-11-18","Wednesday"],
    ["2026-11-22","Sunday"], ["2026-11-25","Wednesday"], ["2026-11-28","Saturday"]
  ];

  const all = [
    ...jj.map(m => ({...m, period: "Jun–Jul"})),
    ...aug.map(m => ({...m, period: "August"})),
    ...sep.map(m => ({...m, period: "September"})),
    ...oct.map(m => ({...m, period: "October"})),
    ...nov.map(m => ({...m, period: "November"}))
  ];

  const groups = {};
  for (const arr of [jj,aug,sep,oct,nov]) {
    for (const [date, day] of arr) {
      num++;
      const month = new Date(date).toLocaleString('en-US',{month:'long', year:'numeric'});
      if (!groups[month]) groups[month] = [];
      groups[month].push({ num, date, day, freq: num <= 3 ? "1/2 weeks" : num <= 8 ? "1/week" : num <= 12 ? "1/week" : num <= 20 ? "2/week" : "2–3/week" });
    }
  }
  return { groups, total: num };
}

const ESTIMATES = [
  { title: "14 Backlog Lectures", target: "30 May 2026", detail: "1 lecture/day (no Sundays) from May 15. All 14 done by May 30.", pct: 0, color: "var(--accent)" },
  { title: "QA Mini-Tests (~94)", target: "Mid-October 2026", detail: "~32 in Phase 1 (1/day) + ~4/week in Phase 2 (Jul–Oct). All 94 cleared by mid-Oct.", pct: 0, color: "var(--qa)" },
  { title: "LRDI Mini-Tests (~73)", target: "Late September 2026", detail: "~32 in Phase 1 + ~4/week in Phase 2. All 73 cleared by late Sep.", pct: 0, color: "var(--lrdi)" },
  { title: "VARC Mini-Tests (~90)", target: "Mid-October 2026", detail: "~32 in Phase 1 + ~4/week in Phase 2. All 90 cleared by mid-Oct.", pct: 0, color: "var(--varc)" },
  { title: "48 Sectional Tests", target: "25 September 2026", detail: "6 in Phase 1 (Saturdays) + ~3/week in Phase 2 (42 over 14 weeks). Done by late Sep.", pct: 0, color: "var(--purple)" },
  { title: "Syllabus Completion", target: "25 September 2026", detail: "All new content (CrackU advance lectures) stops by Sep 25. From Sep 26: mocks & revision only.", pct: 0, color: "var(--green)" },
  { title: "25–30 Full Mocks", target: "28 November 2026", detail: "Ramp from 1/2wks (Jul) → 1/wk (Aug–Sep) → 2/wk (Oct) → 2–3/wk (Nov). ~29 total.", pct: 0, color: "var(--amber)" },
  { title: "CAT 2026 Exam", target: "29 November 2026", detail: "D-Day. IIM calls incoming. 🎯", pct: 0, color: "var(--red)" }
];

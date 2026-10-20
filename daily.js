// CAT 2026 — Daily EOD Target System | v6.0
// 40 Days: Oct 20 – Nov 28 + CAT Day Nov 29
// College: Mon–Sat 10:20–17:20 | Morning 5:45–8:00 AM | Evening 6:00–10:00 PM

const DAILY_PLAN = [
  // ═══════════════════════════════════════════════════════
  // PHASE 1: PRE-MIDTERM POWER SURGE (Oct 20 – Nov 8)
  // ═══════════════════════════════════════════════════════
  {
    day:1, date:"2026-10-20", label:"Oct 20", weekday:"Tue", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Number System (formulas + 3 tricks)", "1 RC passage — Aeon.co (read actively, note main idea)"],
    evening:["DILR: 3 sets timed (35 min) — Linear Arrangements only", "QA Speed Drill: 20 Number System Qs in 25 min", "2nd RC passage with FULL annotation (note why each wrong option is wrong)"],
    eod:["✅ QA Short Notes: Number System written (1 page)", "✅ 3 DILR sets timed (35 min timer used)", "✅ 2 RC passages done (both annotated — main idea + wrong option reasons noted)", "✅ 20 QA Qs attempted with timer"],
    mock:null, sectional:null,
    note:"Day 1: Set your rhythm. Morning = QA Notes. Evening = DILR + VARC. This is the template for every college day.",
    tip:"🔥 Start strong. Today's habits become next 40 days' habits."
  },
  {
    day:2, date:"2026-10-21", label:"Oct 21", weekday:"Wed", type:"college+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #1 — Full 2h exam from 8:00 AM (benchmark test — no pressure, just measure)", "Note scores: QA ___ / DILR ___ / VARC ___"],
    evening:["MOCK #1 Review (2.5h): VARC annotation → DILR re-solve → QA trap audit → Pattern analysis → Next-mock strategy note", "DILR: Re-solve all wrong sets cold (no solution peaking)"],
    eod:["✅ Mock #1 completed (2h full exam)", "✅ Mock #1 reviewed — all 5 steps done (2.5h review)", "✅ Error log updated (VARC wrong reasons + QA error type noted)", "✅ 3 specific improvements written for Mock #2"],
    mock:1, sectional:null,
    note:"Benchmark Day. Don't worry about score — just identify where you stand in each section.",
    tip:"📊 Mock #1 score is data, not judgment. Analyze, don't agonize."
  },
  {
    day:3, date:"2026-10-22", label:"Oct 22", weekday:"Thu", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Percentages + P&L (successive change, faulty weights)", "Apply Mock #1 fix #1 in your head — what was your VARC mistake?"],
    evening:["DILR: 3 sets timed (35 min) — Linear + Matrix Arrangements", "QA Speed Drill: 20 Percentages Qs in 25 min", "2 RC passages (Economist) — annotate tone: neutral / critical / cautious"],
    eod:["✅ QA Short Notes: Percentages + P&L written", "✅ 3 DILR sets completed (35 min timer)", "✅ 2 RC passages annotated (tone identified for each)", "✅ Speed drill 20 Qs done"],
    mock:null, sectional:"varc_1",
    note:"VARC Sectional today — apply the 3-pass method. Before starting: write 'I will use elimination, not selection' on paper.",
    tip:"📖 Sectional #1 VARC: Write your improvement target BEFORE you start."
  },
  {
    day:4, date:"2026-10-23", label:"Oct 23", weekday:"Fri", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Ratio, Mixtures & Alligation (allegation cross method)", "Review yesterday's VARC sectional — count how many times you used elimination vs direct selection"],
    evening:["DILR: 3 sets timed — Tournaments (your strength, build confidence)", "QA Speed Drill: 20 Ratio/Mixture Qs in 25 min", "2 RC passages (HBR) — annotation focus: author's argument structure"],
    eod:["✅ QA Short Notes: Ratio & Mixtures written", "✅ 3 DILR sets completed (Tournaments practiced)", "✅ 2 RC passages annotated (argument structure noted)", "✅ VARC sectional error analysis done"],
    mock:null, sectional:null,
    note:"Ratio & Alligation is very high-frequency in CAT. Master the alligation cross — it solves 60% of mixture problems in seconds.",
    tip:"⚡ Alligation cross trick: difference of concentrations crossed over = ratio of quantities."
  },
  {
    day:5, date:"2026-10-24", label:"Oct 24", weekday:"Sat", type:"holiday",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #2 — Full 2h exam from 8:30 AM SHARP (Dussehra 8-Hour Power Day)", "Keep phone on DND. Full simulation — no breaks."],
    evening:["MOCK #2 Deep Review (2.5h) — full 5-step protocol", "QA Short Notes: TSD — Relative Speed, Trains, Boats (2h)", "QA Speed Drill: 30 TSD Qs in 35 min", "DILR: 2 extra sets (bonus — free day energy)"],
    eod:["✅ Mock #2 done (8:30 AM start)", "✅ Mock #2 reviewed — all 5 steps (2.5h)", "✅ QA Short Notes: TSD written", "✅ 30 TSD speed drill done", "✅ Dussehra 8h output: Mock + Review + Notes + Drill ✓"],
    mock:2, sectional:null,
    note:"🏹 DUSSEHRA POWER DAY — This is your biggest prep day in Phase 1. 8 hours of focused work. Treat it like CAT itself.",
    tip:"🎯 Today's effort = extra 5 percentile. Most candidates waste holidays."
  },
  {
    day:6, date:"2026-10-25", label:"Oct 25", weekday:"Sun", type:"weekend",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Time & Work + Pipes (efficiency method, LCM approach)", "Review yesterday's Mock #2 errors — cold re-solve 2 DILR sets from scratch"],
    evening:["DILR Sectional #1 (40 min, timed) — 2 sets only, scan first 4 min", "QA Speed Drill: 20 Time & Work Qs in 25 min", "2 RC passages (Aeon) — annotation focus: identify conclusion in each passage"],
    eod:["✅ QA Short Notes: Time & Work written", "✅ DILR Sectional #1 done (4-min scan rule followed)", "✅ 2 Mock #2 DILR sets cold re-solved", "✅ 2 RC passages annotated"],
    mock:null, sectional:"dilr_1",
    note:"DILR Sectional: Practice the 4-minute scan. Label sets 🟢🟡🔴 before writing anything.",
    tip:"🧩 In DILR sectional, focus on COMPLETING 1 set fully before touching a 2nd."
  },
  {
    day:7, date:"2026-10-26", label:"Oct 26", weekday:"Mon", type:"college+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #3 — Full 2h exam (VARC Elimination Drill Mock — focus on using elimination protocol)", "Before starting: write your 3 improvement targets from Mock #2"],
    evening:["MOCK #3 Review (2.5h) — track: did elimination help in VARC? How many wrong options did you correctly eliminate?", "2 RC passages (Economist) with annotation"],
    eod:["✅ Mock #3 done (elimination protocol used throughout VARC)", "✅ Mock #3 reviewed — VARC annotation step completed", "✅ Elimination success rate tracked (how many traps avoided?)", "✅ 3 improvements noted for Mock #4"],
    mock:3, sectional:null,
    note:"VARC Elimination Mock: Your one job in VARC today is to eliminate, not select. Cross out 3 options before committing.",
    tip:"📖 Extreme tone words = automatic elimination: always, never, only, most, least."
  },
  {
    day:8, date:"2026-10-27", label:"Oct 27", weekday:"Tue", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Averages + Weighted Average (deviation method)", "Review Mock #3 QA errors — classify: formula gap / calc error / mis-read"],
    evening:["DILR: 3 sets timed (35 min) — Quant-Based DILR (Maxima/Minima)", "QA Speed Drill: 20 Averages Qs in 25 min", "2 RC passages (HBR) — annotation + identify the 'distortion' trap option"],
    eod:["✅ QA Short Notes: Averages written", "✅ 3 DILR sets done (Quant-Based type practiced)", "✅ Mock #3 QA errors classified (formula gap / calc / mis-read)", "✅ 2 RC passages annotated (distortion trap identified)"],
    mock:null, sectional:"varc_2",
    note:"Quant-Based DILR is where your IPM math background gives you an edge. Maxima/Minima, Venn diagrams — these are just algebra in disguise.",
    tip:"💡 Quant-DILR tip: Set up variables first. Don't trial-and-error. Solve algebraically."
  },
  {
    day:9, date:"2026-10-28", label:"Oct 28", weekday:"Wed", type:"college+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #4 — Full 2h exam (DILR Set-Selection Speed Discipline — practice the 4-min scan)", "Use a separate timer for the 4-min scan phase"],
    evening:["MOCK #4 Review (2.5h) — focus: did you complete 2 DILR sets fully? What was scan quality?", "DILR: Cold re-solve the worst DILR set from Mock #4"],
    eod:["✅ Mock #4 done (4-min scan rule strictly followed)", "✅ How many sets scanned? Which did you pick? Was the pick correct?", "✅ Mock #4 DILR re-solved cold (evening)", "✅ Scan quality assessment noted"],
    mock:4, sectional:null,
    note:"DILR Discipline Mock: The scan quality in today's mock tells you everything. Did you correctly identify the 'trap' set and avoid it?",
    tip:"🔴 A wrong DILR set choice costs 8–10 minutes. The 4-min scan saves more time than it costs."
  },
  {
    day:10, date:"2026-10-29", label:"Oct 29", weekday:"Thu", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Linear & Quadratic Equations (Vieta's formulas, Descartes rule)", "Review Mock #4 improvement targets"],
    evening:["DILR: 3 sets timed (35 min) — Scheduling & Selection sets", "QA Speed Drill: 20 Equations Qs in 25 min", "2 RC passages (Aeon) — focus: 'out of scope' trap identification"],
    eod:["✅ QA Short Notes: Equations written", "✅ 3 DILR sets done (Scheduling type practiced)", "✅ 2 RC passages annotated (OOS traps identified)", "✅ Speed drill 20 Qs with timer"],
    mock:null, sectional:"dilr_2",
    note:"Scheduling DILR sets look scary but have a pattern: build a constraint table. Once you see the template, they become predictable.",
    tip:"📋 Scheduling tip: List ALL constraints before solving. Never solve while reading constraints simultaneously."
  },
  {
    day:11, date:"2026-10-30", label:"Oct 30", weekday:"Fri", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Inequalities + Modulus + Wavy Curve method", "Quickly revise: Number System + Percentages notes (5 min each)"],
    evening:["DILR: 3 sets timed (35 min) — Mixed types (scan and pick)", "QA Speed Drill: 20 Inequalities Qs in 25 min", "2 RC passages — annotation + note: 'too narrow' trap spotting"],
    eod:["✅ QA Short Notes: Inequalities + Wavy Curve written", "✅ 3 DILR sets done (mixed types — scan used)", "✅ 2 RC passages annotated ('too narrow' trap found)", "✅ Quick revision: Number System + Percentages notes (10 min each)"],
    mock:null, sectional:"qa_1",
    note:"QA Sectional today: 2-round strategy. Round 1 (35 min) = Easy only. Round 2 (25 min) = Medium. Skip all Hard.",
    tip:"⏱️ QA Sectional: Use a watch or phone timer for the 35-min Round 1 cutoff. Be disciplined."
  },
  {
    day:12, date:"2026-10-31", label:"Oct 31", weekday:"Sat", type:"weekend+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #5 — Full 2h exam from 8:30 AM (QA Sub-90 Sec Speed Execution Focus)", "In Round 1 of QA: skip if setup takes >90 sec. Count skips."],
    evening:["MOCK #5 Review (2.5h) — full 5-step protocol", "QA Short Notes: Triangles — Cevians, Centers, Similarity (2h)", "QA Speed Drill: 20 Triangle Qs in 25 min"],
    eod:["✅ Mock #5 done (sub-90 sec rule used in QA)", "✅ How many QA Qs solved in Round 1? Target: 14–16", "✅ Mock #5 full review done (2.5h)", "✅ QA Short Notes: Triangles written", "✅ Phase 1 Week 2 complete — all short notes on track?"],
    mock:5, sectional:null,
    note:"QA Speed Mock: Count how long you spend per question. Any question where setup takes >90 sec = skip in Round 1. Track this.",
    tip:"⚡ IPM math base = your superpower in QA. You just need to execute fast, not think differently."
  },
  {
    day:13, date:"2026-11-01", label:"Nov 1", weekday:"Sun", type:"weekend",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Circles — Tangents, Power of Point, Cyclic Quads", "Cold re-solve: 2 worst DILR sets from Mock #5"],
    evening:["DILR Sectional #3 (40 min) — 2 complete sets, 4-min scan mandatory", "QA Speed Drill: 20 Circle Qs in 25 min", "2 RC passages (Economist) — full annotation"],
    eod:["✅ QA Short Notes: Circles written", "✅ Mock #5 DILR cold re-solve done", "✅ DILR Sectional #3 completed (scan time noted)", "✅ 2 RC passages annotated"],
    mock:null, sectional:"dilr_3",
    note:"Circles geometry is very CAT-friendly. Tangent-radius perpendicularity, Power of a Point — these appear every year.",
    tip:"📐 Circle shortcut: Any angle in semicircle = 90°. Inscribed angle = half central angle. Memorize these."
  },
  {
    day:14, date:"2026-11-02", label:"Nov 2", weekday:"Mon", type:"college+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #6 — Full 2h exam (Full Attempt Discipline — target 55+ total attempts)", "Count attempts in each section: VARC ___ / DILR ___ / QA ___"],
    evening:["MOCK #6 Review (2.5h) — full 5-step protocol", "2 RC passages with annotation"],
    eod:["✅ Mock #6 done (attempt count tracked)", "✅ Total attempts ≥ 55? If not, note which section to increase", "✅ Mock #6 reviewed — all 5 review steps done", "✅ Attempt strategy calibrated for next mock"],
    mock:6, sectional:null,
    note:"Attempt Discipline Mock: 55+ attempts means ~20 QA + 18 DILR + 18 VARC. If you're below this, you're leaving marks on the table.",
    tip:"🎯 98+ percentile = attempt quality AND quantity. Both matter. Don't be too conservative."
  },
  {
    day:15, date:"2026-11-03", label:"Nov 3", weekday:"Tue", type:"college",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Mensuration 2D/3D + Coordinate Geometry (line equations, circle equations)", "Review Mock #6 QA errors — any formula gaps? Update short notes."],
    evening:["DILR: 3 sets timed (35 min) — Mixed (you pick using scan)", "QA Speed Drill: 20 Mensuration Qs in 25 min", "2 RC passages — annotation focus: distinguish 'inference' from 'assumption' type questions"],
    eod:["✅ QA Short Notes: Mensuration + CoordGeo written", "✅ 3 DILR sets done (scanned and selected)", "✅ 2 RC passages annotated (inference vs assumption noted)", "✅ Mock #6 formula gaps updated in short notes"],
    mock:null, sectional:"varc_3",
    note:"Mensuration: Know 2D areas by heart (triangle, quad, circle). 3D: cylinder, cone, sphere volumes. These are 2-mark freebies in QA.",
    tip:"📏 Memorize: Cone volume = (1/3)πr²h. Sphere = (4/3)πr³. These save 45 seconds in exam."
  },
  {
    day:16, date:"2026-11-04", label:"Nov 4", weekday:"Wed", type:"college+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #7 — Full 2h exam (Pre-Midterm Final Benchmark — this score = your real baseline)", "Write your 3 targets BEFORE starting (on paper, on your desk)"],
    evening:["MOCK #7 Review (2.5h) — very thorough, this is your benchmark", "Identify: which section improved most since Mock #1? Which still weak?"],
    eod:["✅ Mock #7 done — score noted (QA___ / DILR___ / VARC___)", "✅ Improvement vs Mock #1 tracked (section-wise)", "✅ Mock #7 fully reviewed (all 5 steps)", "✅ Pre-midterm status: 7 mocks done ✓"],
    mock:7, sectional:null,
    note:"🎯 BENCHMARK MOCK: Compare your Mock #7 score to Mock #1. This gap = your Phase 1 improvement. If QA improved but VARC hasn't, adjust Phase 2 allocation.",
    tip:"📈 Plot your scores after every mock. The trendline is more important than any single score."
  },
  {
    day:17, date:"2026-11-05", label:"Nov 5", weekday:"Thu", type:"deepawali",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: P&C — Derangements, Grouping, Partition (2h)", "Quick revision: ALL short notes written so far (5 min each — just scan)"],
    evening:["VARC Sectional #4 (40 min) — application of elimination protocol", "QA Speed Drill: 20 P&C Qs in 25 min", "1 RC passage with annotation (Deepawali — lighter day is okay)"],
    eod:["✅ QA Short Notes: P&C written", "✅ VARC Sectional #4 done (elimination used)", "✅ All previous short notes scanned (quick revision)", "✅ 1 RC passage annotated (minimum for today)"],
    mock:null, sectional:"varc_4",
    note:"🪔 Deepawali Day 1 — lighter load. But 1 sectional + notes = staying sharp. Don't go cold.",
    tip:"🎆 Most CAT toppers say: 'I studied 2–3 hours on Deepawali. That's what separated me.'"
  },
  {
    day:18, date:"2026-11-06", label:"Nov 6", weekday:"Fri", type:"deepawali+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #8 — Full 2h exam (Deepawali Light Mock — maintain rhythm)", "Even 60% output on a holiday = ahead of 90% of your competition"],
    evening:["MOCK #8 Review (1.5h) — lighter review on holiday (focus only on DILR re-solve)", "1 RC passage annotation", "Family time — you deserve it 🎆"],
    eod:["✅ Mock #8 done (holiday mock — rhythm maintained)", "✅ DILR sets from Mock #8 cold re-solved", "✅ 1 RC passage annotated", "✅ Deepawali celebrated + CAT prep maintained ✓"],
    mock:8, sectional:null,
    note:"🪔 Deepawali Mock — give yourself credit for showing up on a holiday. This discipline is what 98+ requires.",
    tip:"🏆 Your competition is resting today. You're not. This is the edge."
  },
  {
    day:19, date:"2026-11-07", label:"Nov 7", weekday:"Sat", type:"deepawali",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["QA Short Notes: Probability + Bayes Theorem (geometric probability)", "QA Speed Drill: 20 Probability Qs in 25 min"],
    evening:["DILR Sectional #4 (40 min) — mixed sets, full scan+select protocol", "1 RC passage annotation", "Review all 16 QA short-notes checklist — how many done?"],
    eod:["✅ QA Short Notes: Probability written", "✅ DILR Sectional #4 done", "✅ 1 RC passage annotated", "✅ Short notes status checked — how many of 16 complete?"],
    mock:null, sectional:"dilr_4",
    note:"🪔 Deepawali Day 3 — completing the 16th QA short note (Probability) means your entire short-notes system is now done! 🎉",
    tip:"📝 After Probability notes: you have ALL 16 chapters covered. This is a massive milestone."
  },
  {
    day:20, date:"2026-11-08", label:"Nov 8", weekday:"Sun", type:"weekend+mock",
    phase:"p1", phaseLabel:"Phase 1",
    morning:["MOCK #9 — Full 2h exam from 8:30 AM (Last big mock before midterms — treat it like CAT)", "Full simulation: phone off, single desk, water bottle, no breaks"],
    evening:["MOCK #9 Deep Review (2.5h) — very thorough, this is pre-midterm final", "DILR: Cold re-solve 2 sets from Mock #9", "Prepare midterm maintenance plan: what 1 thing will you do each midterm day?"],
    eod:["✅ Mock #9 done (full simulation conditions)", "✅ Mock #9 reviewed — all 5 steps", "✅ Phase 1 complete: 9 Mocks ✓ | 4 Sectionals ✓ | 16 Short Notes ✓ (check count)", "✅ Midterm maintenance plan ready (1 task/day for Nov 9–15)"],
    mock:9, sectional:null,
    note:"🚨 PHASE 1 COMPLETE. You've done 9 mocks, 4+ sectionals, and 16 QA short notes. Now protect the momentum during midterms.",
    tip:"💪 Going into midterms with 9 mocks done = you're 2x ahead of most CAT aspirants."
  },

  // ═══════════════════════════════════════════════════════
  // PHASE 2: MIDTERM MAINTENANCE WINDOW (Nov 9–15)
  // ═══════════════════════════════════════════════════════
  {
    day:21, date:"2026-11-09", label:"Nov 9", weekday:"Mon", type:"midterm",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["VARC Sectional #5 (40 min) — 2 RC passages only, timed, full annotation after", "OR: 2 DILR sets timed (35 min) — if exam later today, do DILR (less mentally draining)"],
    evening:["QA formula sheet review: Number System + Percentages + Ratio (10 min each)", "Error log: note top 3 mistakes from last 3 mocks in each section", "Sleep by 10:30 PM"],
    eod:["✅ Morning study done (1.5h — sectional OR DILR drill)", "✅ QA formula review done (3 chapters, 10 min each)", "✅ Error log updated", "✅ In bed by 10:30 PM"],
    mock:null, sectional:"varc_5",
    note:"🎓 MIDTERM DAY 1 — IIM Rohtak exams start. Your CAT prep goes to maintenance mode. 1.5h/day is enough to stay sharp. Don't stop entirely.",
    tip:"🧠 Studying 1.5h during midterms keeps neural pathways active. Going cold for 7 days = losing 10% sharpness."
  },
  {
    day:22, date:"2026-11-10", label:"Nov 10", weekday:"Tue", type:"midterm",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["2 DILR sets timed (35 min) — Arrangements only (fast, mechanical, confidence-building)", "1 RC passage — quick read, 5-min annotation (just main idea + tone)"],
    evening:["QA formula review: TSD + Time&Work + Averages (10 min each)", "1 QA chapter speed drill: 15 Qs in 18 min (whichever chapter feels weakest)", "Sleep by 10:30 PM"],
    eod:["✅ 2 DILR sets done (35 min timer)", "✅ 1 RC passage annotated (quick version)", "✅ QA formula review: 3 chapters done", "✅ 15 QA Qs drilled"],
    mock:null, sectional:null,
    note:"🎓 Midterm Day 2 — Keep it simple: DILR + RC + formula review. 1.5h total. That's all.",
    tip:"⚡ During midterms: DILR is the best to practice (mechanical, doesn't need mental ramp-up)."
  },
  {
    day:23, date:"2026-11-11", label:"Nov 11", weekday:"Wed", type:"midterm+mock",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["MOCK #10 — Full 2h exam (Midterm Window Mock — morning maintenance mock)", "Start at 8:30 AM. Full conditions despite midterms."],
    evening:["MOCK #10 Mini-Review (1h): VARC annotation + DILR re-solve only (skip QA trap audit — too tired)", "QA formula review: Equations + Inequalities (10 min each)", "Sleep by 10:30 PM"],
    eod:["✅ Mock #10 done (midterm week — major achievement)", "✅ VARC annotation from Mock #10 done", "✅ 2 DILR sets from Mock #10 cold re-solved", "✅ QA formula review: 2 chapters"],
    mock:10, sectional:null,
    note:"🎓 MIDTERM MOCK — Giving a mock while studying for college exams is elite-level discipline. Your competition is only doing college prep right now.",
    tip:"🔥 This is where 98+ candidates are made. Not in the easy times — in the hard times."
  },
  {
    day:24, date:"2026-11-12", label:"Nov 12", weekday:"Thu", type:"midterm",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["VARC Sectional #6 (40 min) — VA questions focus (Para Jumbles + Odd Sentence Out)", "1 RC passage annotation"],
    evening:["QA formula review: Triangles + Circles + Mensuration (10 min each)", "Review Mock #10 errors (only QA — what traps did you fall for?)", "Sleep by 10:30 PM"],
    eod:["✅ VARC Sectional #6 done (VA focused)", "✅ 1 RC passage annotated", "✅ QA formula review: 3 chapters", "✅ Mock #10 QA errors reviewed"],
    mock:null, sectional:"varc_6",
    note:"🎓 VA Questions (Para Jumbles, Odd Sentence) are often ignored. But they're the most reliable marks in VARC — high accuracy potential.",
    tip:"📝 Para Jumble trick: Find opener (no pronoun/article reference) and closer (thus/hence/therefore) first."
  },
  {
    day:25, date:"2026-11-13", label:"Nov 13", weekday:"Fri", type:"midterm",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["2 DILR sets timed (35 min) — Quant-Based DILR (leverages your math background)", "1 RC passage — quick annotation"],
    evening:["QA formula review: P&C + Probability + Sequences (10 min each)", "Write your Phase 3 plan: what will you do on Foundation Day (Nov 16)?", "Sleep by 10:30 PM"],
    eod:["✅ 2 DILR sets done (Quant-Based)", "✅ 1 RC passage annotated", "✅ QA formula review: 3 chapters", "✅ Phase 3 launch plan written (Foundation Day schedule)"],
    mock:null, sectional:null,
    note:"🎓 Plan Foundation Day (Nov 16) TODAY. Write out the exact schedule for that day — it's your biggest free day in Phase 3.",
    tip:"📋 Planning the day before = 30% more output. Decision fatigue kills study sessions."
  },
  {
    day:26, date:"2026-11-14", label:"Nov 14", weekday:"Sat", type:"midterm+mock",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["MOCK #11 — Full 2h exam from 8:30 AM (Weekend Midterm Mock — CAT slot timing)", "Full conditions: single desk, water, no distractions"],
    evening:["MOCK #11 Full Review (2.5h) — this is a weekend, you have time. Do all 5 steps.", "DILR: Cold re-solve worst 2 sets from Mock #11"],
    eod:["✅ Mock #11 done (8:30 AM sharp)", "✅ Mock #11 full review done (all 5 steps, 2.5h)", "✅ DILR cold re-solve done", "✅ Trend: Scores improving since Mock #1? Note the trend."],
    mock:11, sectional:null,
    note:"📊 After Mock #11, compare scores vs Mock #1, #5, #9, #11. Plot the curve. This is your evidence of improvement.",
    tip:"📈 Score trend > individual score. A rising trend going into Phase 3 = you're on track for 98+."
  },
  {
    day:27, date:"2026-11-15", label:"Nov 15", weekday:"Sun", type:"midterm_end",
    phase:"p2", phaseLabel:"Phase 2 (Midterms)",
    morning:["QA Short Notes: Full revision run — all 16 chapters (5 min each = 80 min total)", "Identify: which 3 chapters still feel shaky? Mark them."],
    evening:["DILR Sectional #5 (40 min) — full mixed sets, scan protocol", "2 RC passages with full annotation", "Celebrate: midterms done! 🎉 Phase 3 starts tomorrow."],
    eod:["✅ All 16 QA short notes revised (80 min rapid run)", "✅ 3 shaky chapters identified and marked for Phase 3 focus", "✅ DILR Sectional #5 done", "✅ 2 RC passages annotated", "✅ MIDTERMS COMPLETE — Phase 3 launch tomorrow 🚀"],
    mock:null, sectional:"dilr_5",
    note:"🎓 MIDTERMS DONE. You survived 7 days while maintaining CAT prep. Most people fully stop. You didn't. That's the difference.",
    tip:"🔥 Tomorrow is Foundation Day. Your biggest prep day in Phase 3. Prepare your study space tonight."
  },

  // ═══════════════════════════════════════════════════════
  // PHASE 3: PEAK DAILY MOCK SPRINT (Nov 16–26)
  // ═══════════════════════════════════════════════════════
  {
    day:28, date:"2026-11-16", label:"Nov 16", weekday:"Mon", type:"free+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["MOCK #12 — Full 2h exam from 8:30 AM SHARP (Foundation Day — Full Throttle Reset Mock)", "Phone off. Full simulation. CAT exam day conditions."],
    evening:["MOCK #12 Deep Review (2.5h) — MOST THOROUGH REVIEW of all 12 mocks so far", "DILR: Cold re-solve worst 2 sets + 2 fresh sets (bonus free day)", "2 RC passages full annotation"],
    eod:["✅ Mock #12 done (8:30 AM — Foundation Day launch)", "✅ Mock #12 review: all 5 steps, most detailed yet", "✅ 4 DILR sets done (2 re-solve + 2 fresh)", "✅ 2 RC passages annotated", "✅ PHASE 3 LAUNCHED 🔥"],
    mock:12, sectional:null,
    note:"🏛️ FOUNDATION DAY — No college. Full-day CAT sprint. Target: 8 hours of focused work. Mock + Review + DILR + VARC. This day alone = 3 college days worth.",
    tip:"🚀 After today, you'll give mocks every 1–2 days until Nov 26. This is the final acceleration."
  },
  {
    day:29, date:"2026-11-17", label:"Nov 17", weekday:"Tue", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["MOCK #13 — Full 2h exam from 8:00 AM (VARC annotation drill focus — 3-pass method mandatory)", "Track: Did you use 3-pass method? How many RC questions did you eliminate correctly?"],
    evening:["MOCK #13 Review (2.5h) — VARC step is most important today", "QA Speed Round: 30 mixed questions, timer on (from short-notes chapters)", "2 RC passages annotation"],
    eod:["✅ Mock #13 done (3-pass VARC method used)", "✅ VARC annotation: all RC passages annotated in review", "✅ 30 QA speed questions done", "✅ 2 RC passages annotated"],
    mock:13, sectional:null,
    note:"📖 VARC Focus Mock — After review, count: how many VARC questions were wrong due to not using 3-pass? If >2, you're still picking directly instead of eliminating.",
    tip:"💡 3-Pass works ONLY if you practice it daily. Don't switch to it only in mocks."
  },
  {
    day:30, date:"2026-11-18", label:"Nov 18", weekday:"Wed", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["MOCK #14 — Full 2h exam (DILR re-solve next day — set this mock's DILR aside for tomorrow morning review)", "Today: immediately after mock, only do VARC review step"],
    evening:["MOCK #14 Review (2h) — VARC annotation + QA trap audit (skip DILR — save for tomorrow morning cold re-solve)", "2 RC passages full annotation"],
    eod:["✅ Mock #14 done", "✅ VARC review: RC annotation complete", "✅ QA trap audit: errors classified", "✅ DILR sets from Mock #14 saved for tomorrow morning cold re-solve"],
    mock:14, sectional:null,
    note:"🧩 DILR Cold Re-Solve System: Keep today's DILR wrong sets for tomorrow morning. Fresh brain = better learning than reviewing when tired.",
    tip:"🔬 Cold re-solve = the most powerful DILR learning technique. Memory consolidation happens overnight."
  },
  {
    day:31, date:"2026-11-19", label:"Nov 19", weekday:"Thu", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: Mock #14's worst DILR sets (30 min, no solutions)", "MOCK #15 — Full 2h exam (QA Shortcut Speed Focus)", "QA goal: solve every easy Q in <90 sec. Count how many you beat this target on."],
    evening:["MOCK #15 Review (2.5h) — QA step is most important today", "2 RC passages annotation", "Write: which QA shortcuts saved you the most time today?"],
    eod:["✅ Mock #14 DILR cold re-solved (morning)", "✅ Mock #15 done (sub-90 sec counted for easy QA Qs)", "✅ Mock #15 QA review: shortcuts identified", "✅ 2 RC passages annotated"],
    mock:15, sectional:null,
    note:"⚡ QA Shortcut Mock — For every question you solve, ask: 'Is there a shorter way?' IPM training taught you methods, CAT needs you to shortcut them.",
    tip:"🔥 If you solve correctly in 90 sec, great. If you solve correctly in 45 sec, you can attempt 2 more questions. That's 6+ marks."
  },
  {
    day:32, date:"2026-11-20", label:"Nov 20", weekday:"Fri", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: Mock #15's worst DILR sets (30 min, fresh brain)", "MOCK #16 — Full 2h exam (Section Time Management — strict section timer)", "Track exactly how many minutes you spend in each section"],
    evening:["MOCK #16 Review (2.5h) — full protocol", "QA Speed Round: 25 mixed questions (timer)", "2 RC passages annotation"],
    eod:["✅ Mock #15 DILR cold re-solved (morning)", "✅ Mock #16 done (section time tracked)", "✅ Time allocation analysis: too long in X section?", "✅ Mock #16 full review done", "✅ 2 RC passages annotated"],
    mock:16, sectional:null,
    note:"⏱️ Time Management Mock — The biggest score killer in CAT is poor section time distribution. After this mock, you should know exactly where your minutes go.",
    tip:"📊 Ideal time: VARC 40 min RC + 20 min VA. DILR 20 min scan+2sets. QA 35 min Round1 + 25 min Round2."
  },
  {
    day:33, date:"2026-11-21", label:"Nov 21", weekday:"Sat", type:"weekend",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: Mock #16's worst 2 DILR sets (fresh brain, 30 min)", "Full revision: all 16 QA short-notes rapid scan (80 min = 5 min/chapter)", "Mark: which 2 chapters still have doubts?"],
    evening:["VARC Sectional #7 (40 min) — RC only, strict 3-pass method", "DILR Sectional #6 (40 min) — 2 sets, 4-min scan mandatory", "2 RC passages full annotation"],
    eod:["✅ Mock #16 DILR cold re-solved", "✅ All 16 QA short-notes rapid revision done", "✅ VARC Sectional #7 done (3-pass method)", "✅ DILR Sectional #6 done (scan used)", "✅ 2 RC passages annotated"],
    mock:null, sectional:"varc_7",
    note:"📚 Sectional Saturday — No mock today. Rest the 'mock brain'. Use sectionals to fix specific weaknesses identified in this week's mocks.",
    tip:"🎯 Sectionals > Mocks for targeted skill fixes. A focused 40-min sectional teaches more than a rushed mock."
  },
  {
    day:34, date:"2026-11-22", label:"Nov 22", weekday:"Sun", type:"weekend+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["MOCK #17 — Full 2h exam from 8:30 AM (Full Simulation + Strategy Review)", "Strategy goal: execute YOUR game plan, not react to the paper"],
    evening:["MOCK #17 Deep Review (2.5h) — all 5 steps", "DILR: cold re-solve worst 2 sets", "2 RC passages annotation"],
    eod:["✅ Mock #17 done (your strategy followed?)", "✅ Did you follow the pre-decided section strategy? Note deviations.", "✅ Mock #17 full review done", "✅ DILR cold re-solve done", "✅ 2 RC passages annotated"],
    mock:17, sectional:null,
    note:"🎯 Strategy Mock — After 17 mocks, you know your style. Today: commit to your optimal strategy before starting. Execute it. Review if it worked.",
    tip:"🏆 The exam isn't won by brilliant improvisation. It's won by executing a well-practiced strategy."
  },
  {
    day:35, date:"2026-11-23", label:"Nov 23", weekday:"Mon", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: Mock #17's DILR worst 2 sets", "MOCK #18 — Full 2h exam (Clutch Accuracy Focus — attempt fewer, get more right)", "Target: every question you attempt = correct. Skip anything doubtful."],
    evening:["MOCK #18 Review (2.5h) — all 5 steps, focus on: did you skip the right questions?", "2 RC passages annotation", "Write: which question types should you NEVER attempt in CAT (your personal skip list)?"],
    eod:["✅ Mock #17 DILR cold re-solved (morning)", "✅ Mock #18 done (accuracy-first strategy used)", "✅ Mock #18 review done", "✅ Personal 'skip list' written (question types to always skip in CAT)", "✅ 2 RC passages annotated"],
    mock:18, sectional:null,
    note:"🎯 CLUTCH ACCURACY MOCK — At 98+ percentile, wrong answers kill you more than unattempted ones. Today's goal: 85%+ accuracy even if attempts drop.",
    tip:"❌ Negative marking in CAT = -⅓ mark. Getting 5 wrong = -1.67 marks. Better to skip than guess."
  },
  {
    day:36, date:"2026-11-24", label:"Nov 24", weekday:"Tue", type:"college",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: Mock #18's DILR worst sets (30 min)", "VARC Sectional #8 (40 min) — RC + VA mixed, full elimination protocol"],
    evening:["QA Sectional #2 (40 min) — 2-round strategy strictly applied", "DILR Sectional #7 (40 min) — 2 complete sets only", "2 RC passages annotation"],
    eod:["✅ Mock #18 DILR cold re-solved (morning)", "✅ VARC Sectional #8 done", "✅ QA Sectional #2 done (2-round strategy logged)", "✅ DILR Sectional #7 done (2 sets completed)", "✅ 2 RC passages annotated"],
    mock:null, sectional:"varc_8",
    note:"🎯 Triple Sectional Day — All 3 sections tested today. This is a mini full-mock broken into 3 focused sessions. Equal weight to all sections.",
    tip:"📊 After 3 sectionals, your raw scores tell you exactly where you'll score in CAT. Trust the data."
  },
  {
    day:37, date:"2026-11-25", label:"Nov 25", weekday:"Wed", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["Cold re-solve: any remaining DILR sets from past week that you're still not sure about", "MOCK #19 — Full 2h exam (Penultimate Mock — Finalize your section strategy NOW)"],
    evening:["MOCK #19 Review (2.5h) — all 5 steps. After review: write your FINAL CAT STRATEGY (section order, time split, skip criteria)", "2 RC passages annotation"],
    eod:["✅ Mock #19 done (penultimate mock)", "✅ Mock #19 full review done", "✅ FINAL CAT STRATEGY WRITTEN (your definitive plan for Nov 29)", "✅ 2 RC passages annotated", "✅ 1 mock remaining: Mock #20 tomorrow"],
    mock:19, sectional:null,
    note:"🎯 PENULTIMATE MOCK — After this mock, write your FINAL exam strategy card. This card goes on your desk Nov 27–28 and you read it before sleeping.",
    tip:"📋 Final strategy card: Section order + Time split + Skip criteria + 3 mindset reminders. Laminate it if possible."
  },
  {
    day:38, date:"2026-11-26", label:"Nov 26", weekday:"Thu", type:"college+mock",
    phase:"p3", phaseLabel:"Phase 3",
    morning:["MOCK #20 — FINAL MOCK 🎯 Full 2h exam from 8:30 AM (Confidence Builder — simulate D-day exactly)", "The last practice match before the championship. Stay calm, execute."],
    evening:["MOCK #20 Review (2.5h) — all 5 steps", "After review: read all your short-notes one final time (rapid, 3–4 min/chapter)", "2 RC passages annotation — last daily RC annotation session"],
    eod:["✅ MOCK #20 DONE — 20 MOCKS COMPLETE 🏁", "✅ Mock #20 reviewed — all 5 steps", "✅ All 16 QA short-notes final read-through done", "✅ 2 RC passages annotated — VARC log complete", "✅ 20 MOCKS ✓ | 30 SECTIONALS ✓ | 16 SHORT NOTES ✓ — WAR ROOM COMPLETE 🏆"],
    mock:20, sectional:null,
    note:"🎯 FINAL MOCK — After 20 mocks, you know your score range. Don't overthink it. The training is done. Trust your system.",
    tip:"🏆 Champions don't try new things in the final day. They execute what they've practiced 20 times."
  },

  // ═══════════════════════════════════════════════════════
  // PHASE 4: TAPER & CONSOLIDATION (Nov 27–28)
  // ═══════════════════════════════════════════════════════
  {
    day:39, date:"2026-11-27", label:"Nov 27", weekday:"Fri", type:"taper",
    phase:"p4", phaseLabel:"Phase 4 (Taper)",
    morning:["Read your FINAL CAT STRATEGY CARD twice (section order, time split, skip criteria)", "Read QA short-notes: P1 priority chapters only — Number System, Percentages, Ratios, TSD, Triangles, Circles (2 min each)"],
    evening:["1 light RC passage (no pressure, just keep the reading brain warm)", "Mock score review: what's your score range across last 5 mocks? That's your CAT range.", "Sleep by 10 PM SHARP 🌙"],
    eod:["✅ Strategy card read (morning + evening)", "✅ 6 priority QA short-notes revised", "✅ 1 RC passage read (light)", "✅ In bed by 10 PM"],
    mock:null, sectional:null,
    note:"🧘 TAPER DAY 1 — Zero mocks. Zero pressure. The engine is fully charged. Now you're just keeping it warm. No new information today.",
    tip:"😴 Sleep quality Nov 27–28 directly impacts your cognitive performance on Nov 29. 10 PM bedtime is non-negotiable."
  },
  {
    day:40, date:"2026-11-28", label:"Nov 28", weekday:"Sat", type:"taper",
    phase:"p4", phaseLabel:"Phase 4 (Taper)",
    morning:["Read all 16 QA short-notes one final time (5 min each = 80 min) — just reinforce memory", "Read your strategy card one last time. Visualize executing it perfectly tomorrow."],
    evening:["Pack your bag for CAT 2026 (admit card, ID proof, pens, watch)", "Light meal. NO screen time after 8 PM.", "Visualization: Close eyes, 10 min — imagine the 3-hour exam. Section by section. Calm, focused, executing.", "Sleep by 9:30 PM 🌙"],
    eod:["✅ All 16 QA short-notes final revision done", "✅ CAT bag packed (admit card ✓, ID proof ✓, pens ✓)", "✅ Strategy card memorized", "✅ In bed by 9:30 PM"],
    mock:null, sectional:null,
    note:"🧘 CAT EVE — The battle is won or lost before it begins. You've done 20 mocks, 30 sectionals, 16 short-notes, and 40 days of discipline. Now rest and trust the work.",
    tip:"🏆 Champions don't prepare the night before. They REST. Your preparation is DONE. Tomorrow, just execute."
  }
];

// CAT DAY reference (not a study day)
const CAT_DAY = {
  date:"2026-11-29", label:"Nov 29",
  note:"🏆 CAT 2026 — The championship. Execute your strategy. Trust 40 days of preparation. IIM A / B / C / FMS awaits.",
  morning:"Arrive 45 min early. Read your strategy card at the center. Deep breaths.",
  sections:["VARC: 3-pass method + elimination. 2 RC complete. 6 VA accurate.", "DILR: 4-min scan. Pick 2 green sets. Complete fully.", "QA: 2 rounds. Sub-90 sec per easy Q. Skip all hard."]
};

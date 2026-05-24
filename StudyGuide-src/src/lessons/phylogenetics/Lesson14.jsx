import React from "react";

const toneClasses = {
  stone: "border-stone-200 bg-stone-50 text-stone-900",
  red: "border-red-100 bg-red-50 text-red-950",
  dark: "border-stone-800 bg-stone-950 text-white",
  green: "border-emerald-100 bg-emerald-50 text-emerald-950",
  amber: "border-amber-100 bg-amber-50 text-amber-950",
  sky: "border-sky-100 bg-sky-50 text-sky-950",
  purple: "border-violet-100 bg-violet-50 text-violet-950",
};

const baseEn = {
  eyebrow: "Lesson 14 · Divergence time analyses",
  title: "Divergence time analyses: turning branch lengths into time",
  subtitle: "This lesson moves from phylograms to chronograms. The key question is how we convert genetic distance into calendar time when rates are not perfectly clock-like.",
  big: "A time tree is not just a tree with aligned tips. It is a phylogeny whose branch lengths explicitly represent time. To build one, we need a tree, branch lengths, a clock model and calibrations from fossils, geological events, dated tips, or other external temporal information.",
  tags: ["molecular clock", "strict clock", "relaxed clock", "LSD", "PML", "Bayesian dating", "tip dating", "node dating", "fossil priors", "crown vs stem"],
  workflow: ["branch lengths", "clock model", "rate variation", "calibrations", "dating method", "time tree", "uncertainty", "interpretation"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Do not infer time just from the drawing", "Tips aligned vertically do not automatically mean that a tree is a time tree. You must know what branch lengths encode: topology only, amount of change, or time."],
    ["The molecular clock is useful but conditional", "The exam-style answer is not that the molecular clock is always true or always false. It can be a reasonable approximation in some cases, but rates often vary."],
    ["Time = distance / rate", "For two lineages diverging from a common ancestor, the working intuition is Time = Distance / (2 × rate), because both descendant branches accumulate substitutions."],
    ["Calibrations are the bridge to real time", "Without external temporal information, branch lengths are in substitutions or relative units. Fossils, dated tips, or geological events anchor the tree to calendar time."],
    ["Crown and stem placement matters", "A fossil inside the living radiation calibrates a crown node; a fossil on an extinct lineage outside the crown but closest to it informs a stem placement."],
  ],
  sections: [
    ["1. From phylogram to chronogram", [
      "Earlier lessons distinguished topology from branch lengths. A cladogram only shows branching order; a phylogram uses branch lengths for amount of evolutionary change; a chronogram uses branch lengths for time.",
      "Divergence time analysis asks how old the splits are. This is not automatically visible from the tree drawing. A tree can have all tips visually aligned and still not be a chronogram unless its branch lengths are explicitly scaled to time."
    ]],
    ["2. Molecular clock intuition", [
      "The molecular clock hypothesis says that substitutions can accumulate at an approximately constant rate over time. If this held perfectly, converting genetic distance into time would be straightforward.",
      "For two species descending from one ancestor, the distance between them is the sum of changes on both descendant lineages. That is why the practical formula is Time = Distance / (2 × rate), unless the rate has been implicitly normalized."
    ]],
    ["3. Why the clock is often violated", [
      "Rates can vary among genes, lineages and genomic regions. Selection, generation time, metabolic rate, DNA repair, demographic bottlenecks and life-history differences can all affect the accumulation of substitutions.",
      "A branch can accelerate or decelerate relative to the rest of the tree. If we force a strict clock on such data, age estimates can become biased because the method interprets rate variation as time variation."
    ]],
    ["4. Strict molecular clock", [
      "A strict molecular clock assumes one rate across the entire tree. Every lineage converts substitutions into time using the same rate.",
      "This is simple and can work for some datasets, especially when rate variation is weak, but it is often unrealistic for large, heterogeneous or deeply sampled datasets."
    ]],
    ["5. Local molecular clock", [
      "A local clock allows different monophyletic groups to evolve at different constant rates. For example, one clade could have a rate different from another clade.",
      "The professor framed this as conceptually possible but less generally satisfying, because the causes of rate variation are often lineage-specific traits or demographic histories rather than broad taxonomic labels chosen a priori."
    ]],
    ["6. Relaxed molecular clocks", [
      "Relaxed clocks allow rates to vary among branches. They are the main response to the fact that real datasets rarely obey a single global rate.",
      "Two important families are correlated/autocorrelated clocks and uncorrelated clocks. Both relax the strict clock, but they differ in whether neighboring branches are expected to have related rates."
    ]],
    ["7. Autocorrelated vs uncorrelated relaxed clocks", [
      "Autocorrelated clocks assume that rates change gradually along the tree: daughter branches tend to inherit a rate similar to the parent branch. This makes sense when rate is partly tied to inherited organismal traits such as generation time or metabolism.",
      "Uncorrelated clocks draw branch rates independently. They are useful when rate shifts can be sudden or when taxon sampling is sparse and neighboring branches should not necessarily be forced to have similar rates."
    ]],
    ["8. Least Squares Dating / LSD", [
      "LSD fits node ages to branch lengths by minimizing discrepancies between genetic distances and temporal constraints. It is very fast and therefore useful for large datasets or teaching practicals.",
      "In IQ-TREE, LSD can work from a fixed topology and branch lengths. It is not a fully probabilistic Bayesian framework, but it gives a practical way to build a first time tree from calibrations."
    ]],
    ["9. Penalized Maximum Likelihood", [
      "Penalized Maximum Likelihood is an intermediate strategy. It allows rate variation, but penalizes abrupt changes so that neighboring branches do not vary arbitrarily.",
      "This balances fit to the branch lengths with smoothness in the rate trajectory. Classical tools include r8s and treePL, especially for large phylogenies where full Bayesian dating is expensive."
    ]],
    ["10. Bayesian divergence dating", [
      "Bayesian approaches model uncertainty in rates, dates, calibrations, and sometimes topology. They are computationally heavy, but they are the standard when the goal is a detailed probabilistic time tree.",
      "Software such as BEAST and RevBayes can implement relaxed clocks, birth-death or fossilized birth-death models, and total-evidence dating that combines molecular and morphological data."
    ]],
    ["11. Node dating", [
      "Node dating assigns temporal information to internal nodes. This is common when using fossils or geological events to constrain the age of a clade.",
      "A fossil usually provides a minimum age: the lineage must have existed by the time the fossil existed. The true divergence can be older, so the maximum age is often softer and must be modeled carefully."
    ]],
    ["12. Tip dating", [
      "Tip dating assigns ages directly to sampled terminals. It is common in viral phylogenies, ancient DNA, and total-evidence datasets including extinct taxa.",
      "In viral examples, some tips may be sampled on exact dates, others only within a year or a date range. Those dates make it possible to estimate a time-scaled tree even without fossil node calibrations."
    ]],
    ["13. Fossil priors and calibration shapes", [
      "Calibration uncertainty is modeled with prior distributions. Normal priors are bell-shaped and require a justified mean and spread. Exponential priors peak near the minimum and decline rapidly into the past.",
      "Lognormal priors put high probability just older than the fossil minimum but allow a long tail toward older ages. Uniform priors assign equal probability between bounds, which is simple but often biologically unrealistic unless the maximum bound is well justified."
    ]],
    ["14. Crown vs stem fossils", [
      "A crown group contains the most recent common ancestor of all living members of a clade and all its descendants. A crown fossil is placed inside that living radiation and calibrates the crown node.",
      "A stem fossil belongs to an extinct lineage closer to the crown group than to any other living group, but outside the crown itself. Archaeopteryx is the example used for stem birds."
    ]],
    ["15. Practical part I: node dating in mollusks", [
      "The node-dating exercise uses a precomputed mollusk ML tree, a partition file and a calibration file based on literature node ages such as Mollusca and Gastropoda.",
      "The IQ-TREE command uses --date for node calibrations, --date-tip 0 for present-day tips, -o for the outgroup, -te for the fixed ML topology and --date-ci to estimate confidence intervals by resampling branch lengths."
    ]],
    ["16. Practical part II: tip dating in Dengue", [
      "The tip-dating exercise uses a Dengue alignment with dated samples. Some tips have exact dates, some have only a year, some have date ranges, and some use NA for an unknown lower or upper bound.",
      "The output time tree can then be inspected in FigTree. The professor emphasized that dated tips may not align at the same vertical position because their sampling dates differ, especially on short viral timescales."
    ]],
    ["17. Reading the time tree", [
      "The NEXUS output can store more information than a simple Newick tree, including node ages and confidence intervals. In FigTree, the key is to display node ages and uncertainty bars rather than only the topology.",
      "Nodes fixed by tight calibrations may lack broad confidence intervals because their ages were supplied as hard constraints. Other nodes are estimated by the dating model and should show uncertainty that often increases deeper in time."
    ]],
  ],
  clockTitle: "Clock models at a glance",
  clockRows: [
    ["Strict clock", "One rate across all branches", "Simple but often unrealistic; biased if rate variation is strong"],
    ["Local clock", "Different constant rates for predefined clades", "Useful when rate groups are justified a priori"],
    ["Autocorrelated relaxed clock", "Rates change gradually; daughter branches resemble parent branches", "Good when rate behaves like an inherited biological trait"],
    ["Uncorrelated relaxed clock", "Each branch draws its own rate", "Good for sudden rate shifts or sparse taxon sampling"],
  ],
  methodsTitle: "Dating approaches",
  methods: [
    ["LSD", "Fast least-squares dating", "Fixed topology and branch lengths; implemented in IQ-TREE."],
    ["PML", "Penalized maximum likelihood", "Balances fit and rate smoothing; tools include r8s and treePL."],
    ["Bayesian", "Fully probabilistic dating", "Models uncertainty in rates, dates, calibrations and sometimes topology; BEAST / RevBayes."],
  ],
  priorTitle: "Fossil prior shapes",
  priors: [
    ["Normal", "Centered bell curve", "Use when a mean and uncertainty are strongly justified, often geological calibrations."],
    ["Exponential", "Peak at the minimum", "Good when the fossil is likely close to the true divergence time."],
    ["Lognormal", "Hard minimum + older tail", "Common for fossils: the split is older than the fossil, but not infinitely older with equal probability."],
    ["Uniform", "Equal probability between bounds", "Simple, but only sensible when both minimum and maximum bounds are justified."],
  ],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["Node dating", "Use a mollusk ML tree, literature node constraints, an outgroup and --date-tip 0."],
    ["Calibration file", "Lists taxa defining an MRCA and the age constraint; spacing matters because taxa are comma-separated."],
    ["--date", "Points IQ-TREE/LSD to the calibration file containing node or tip dates."],
    ["-te", "Supplies a precomputed topology and branch lengths for dating."],
    ["--date-ci", "Resamples branch lengths to estimate confidence intervals around node ages."],
    ["Tip dating", "Uses viral samples with exact dates, years, date ranges or NA bounds."],
    ["FigTree", "Open timetree.nexus and display node ages, uncertainty and time scale."],
    ["Dengue interpretation", "Use dated viral tips to infer timing and likely geographic origin/spread of a strain."],
  ],
  takeaways: [
    "A chronogram is a tree whose branch lengths represent time.",
    "The molecular clock can be useful, but it is only an approximation in many datasets.",
    "Time = Distance / (2 × rate) is the key intuition for two diverging lineages.",
    "Strict clocks assume one rate; relaxed clocks allow rate variation among branches.",
    "Autocorrelated relaxed clocks make descendant rates resemble parent rates.",
    "Uncorrelated relaxed clocks allow each branch to have an independent rate.",
    "LSD is fast and practical, but not a full probabilistic framework.",
    "Bayesian dating is powerful because it models uncertainty, but it is computationally expensive.",
    "Tip dating uses dated terminals; node dating uses internal calibrations.",
    "Fossils usually provide minimum ages, not exact divergence times.",
    "Lognormal and exponential priors are common for fossil calibrations.",
    "Crown and stem fossil placement changes which node should be calibrated."
  ],
  checklist: [
    "I can distinguish cladogram, phylogram and chronogram.",
    "I can explain the molecular clock hypothesis without saying it is always true.",
    "I can use the intuition Time = Distance / (2 × rate).",
    "I can distinguish strict, local and relaxed clocks.",
    "I can explain autocorrelated vs uncorrelated relaxed clocks.",
    "I can compare LSD, PML and Bayesian dating at a conceptual level.",
    "I can distinguish tip dating from node dating.",
    "I can explain why fossils usually give minimum constraints.",
    "I can choose a reasonable fossil prior shape and justify it.",
    "I can distinguish crown and stem fossil placement.",
    "I know what --date, --date-tip, -te, -o and --date-ci do in the practical.",
    "I can interpret why some time-tree nodes have fixed ages or wider uncertainty."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 14 · Análisis de tiempos de divergencia",
  title: "Análisis de tiempos de divergencia: convertir longitudes de rama en tiempo",
  subtitle: "Esta lección pasa de filogramas a cronogramas. La pregunta central es cómo convertir distancia genética en tiempo real cuando las tasas no siguen perfectamente un reloj molecular.",
  big: "Un time tree no es simplemente un árbol con las puntas alineadas. Es una filogenia cuyas longitudes de rama representan tiempo. Para construirlo se necesita un árbol, longitudes de rama, un modelo de reloj y calibraciones externas.",
  workflow: ["branch lengths", "modelo de reloj", "variación de tasa", "calibraciones", "método de datación", "time tree", "incertidumbre", "interpretación"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo encaja la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["No infieras tiempo solo por el dibujo", "Que las puntas estén alineadas no prueba que sea un time tree. Hay que saber qué codifican las ramas: topología, cambio o tiempo."],
    ["El reloj molecular es útil pero condicional", "La respuesta tipo examen no es que siempre sea verdadero o falso: a veces aproxima bien la evolución, pero las tasas suelen variar."],
    ["Tiempo = distancia / tasa", "Para dos linajes, la intuición útil es Time = Distance / (2 × rate), porque ambos linajes acumulan sustituciones."],
    ["Las calibraciones conectan con tiempo real", "Sin información externa, las ramas están en sustituciones o unidades relativas. Fósiles, tips fechados o eventos geológicos anclan el árbol."],
    ["Crown y stem importan", "Un fósil dentro de la radiación viva calibra un crown node; un fósil fuera de la corona pero cercano informa el stem."],
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۴ · تحلیل زمان واگرایی",
  title: "تحلیل زمان واگرایی: تبدیل طول شاخه به زمان",
  subtitle: "این درس توضیح می‌دهد چگونه از فاصلهٔ ژنتیکی به زمان تقویمی برسیم، مخصوصاً وقتی نرخ تکامل در شاخه‌ها یکسان نیست.",
  big: "درخت زمانی فقط درختی با نوک‌های هم‌راستا نیست؛ طول شاخه‌ها باید واقعاً زمان را نشان دهند. برای این کار به مدل ساعت و کالیبراسیون نیاز داریم.",
  workflow: ["طول شاخه", "مدل ساعت", "تغییر نرخ", "کالیبراسیون", "روش تاریخ‌گذاری", "درخت زمانی", "عدم قطعیت", "تفسیر"],
  section: "بخش",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "نقشهٔ درس",
  emphasisTitle: "نکات تأکیدی استاد",
  checklistTitle: "پیش از ادامه",
};

const c = { en: baseEn, es, fa };

function Card({ title, children, tone = "stone" }) {
  return <div className={`rounded-3xl border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}>
    <h3 className="text-lg font-black tracking-tight">{title}</h3>
    <p className="mt-2 text-sm font-semibold leading-7 opacity-85">{children}</p>
  </div>;
}

function Flow({ items }) {
  return <div className="grid gap-2 md:grid-cols-4 xl:grid-cols-8">
    {items.map((item, index) => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-center">
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-xs font-black text-white">{index + 1}</div>
      <div className="mt-3 text-xs font-black uppercase tracking-wide text-stone-700">{item}</div>
    </div>)}
  </div>;
}

function ClockTable({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">clock logic</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.clockTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200">
      <div className="grid grid-cols-[0.85fr_1.05fr_1.4fr] bg-stone-950 text-sm font-black text-white">
        <div className="p-4">Model</div><div className="border-l border-white/10 p-4">Assumption</div><div className="border-l border-white/10 p-4">Why it matters</div>
      </div>
      {copy.clockRows.map(([model, assumption, why]) => <div key={model} className="grid grid-cols-[0.85fr_1.05fr_1.4fr] border-t border-stone-200 bg-[#fffaf0] text-sm font-semibold leading-6 text-stone-700">
        <div className="p-4 font-black text-stone-950">{model}</div><div className="border-l border-stone-200 p-4">{assumption}</div><div className="border-l border-stone-200 p-4">{why}</div>
      </div>)}
    </div>
  </section>;
}

function DatingMethods({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">method choice</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.methodsTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.methods.map(([title, subtitle, body], index) => <Card key={title} title={`${title} · ${subtitle}`} tone={["green", "amber", "purple"][index]}>{body}</Card>)}
    </div>
  </section>;
}

function PriorGrid({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-[#fffaf0] p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">calibration uncertainty</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.priorTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {copy.priors.map(([name, shape, use], index) => <div key={name} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black text-stone-950">{name}</h3>
          <span className="rounded-full bg-stone-950 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">{shape}</span>
        </div>
        <div className="mt-4 h-16 rounded-2xl border border-stone-200 bg-stone-50 p-2">
          <div className={`h-full rounded-xl ${index === 0 ? "bg-gradient-to-r from-stone-100 via-stone-500 to-stone-100" : index === 1 ? "bg-gradient-to-r from-stone-900 via-stone-200 to-stone-50" : index === 2 ? "bg-gradient-to-r from-stone-50 via-stone-900 to-stone-200" : "bg-stone-300"}`} />
        </div>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-700">{use}</p>
      </div>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">practical commands</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.practicalTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {copy.practicalCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "green", "amber", "purple", "stone", "red", "sky", "green"][index % 8]}>{body}</Card>)}
    </div>
  </section>;
}

function Takeaways({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-xl shadow-stone-900/10 md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">exam memory</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">High-yield takeaways</h2>
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      {copy.takeaways.map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold leading-6 text-stone-100"><span className="mr-2 text-sky-300">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
    </div>
  </section>;
}

const quizEn = [
  {
    kind: "theory",
    question: "What distinguishes a chronogram from a phylogram?",
    options: ["A chronogram has branch lengths scaled to time; a phylogram has branch lengths scaled to amount of change", "A chronogram is always unrooted; a phylogram is always rooted", "A chronogram contains only fossil taxa", "A phylogram has no topology"],
    answer: 0,
    explanation: "Chronograms are time trees; phylograms encode evolutionary change through branch lengths.",
    optionExplanations: ["Correct. The meaning of branch length is the key difference.", "Chronograms are normally rooted, and rooting alone is not the distinction.", "Chronograms can include extant taxa, dated tips, fossils, or combinations.", "Every tree has a topology; phylograms add change-scaled branch lengths."],
  },
  {
    kind: "theory",
    question: "Which statement best summarizes the molecular clock hypothesis?",
    options: ["Substitutions may accumulate at a roughly constant rate over time", "All sites in a gene evolve at the same rate", "Evolution happens only in sudden bursts", "Morphological traits never change"],
    answer: 0,
    explanation: "The clock concerns the accumulation of substitutions over time, not equality among sites.",
    optionExplanations: ["Correct. It can be a useful approximation in some cases.", "Across-site rate variation is a different assumption.", "This contradicts the basic clock idea.", "The molecular clock is about molecular substitutions, not immutability of morphology."],
  },
  {
    kind: "theory",
    question: "Why does the simple pairwise dating intuition use Time = Distance / (2 × rate)?",
    options: ["Because both descendant lineages accumulate substitutions after the split", "Because every tree has exactly two fossils", "Because branch lengths are always measured in years", "Because only two nucleotides can change"],
    answer: 0,
    explanation: "The observed distance between two descendants sums changes along both paths from their common ancestor.",
    optionExplanations: ["Correct. Each lineage contributes to the total pairwise distance.", "The factor of two is not about fossils.", "Branch lengths are often substitutions per site before dating.", "The four nucleotide states are unrelated to this factor."],
  },
  {
    kind: "theory",
    question: "What is the main assumption of a strict molecular clock?",
    options: ["All lineages share the same evolutionary rate", "Every fossil gives an exact divergence time", "Every branch has independent rates", "Only tips can be dated"],
    answer: 0,
    explanation: "A strict clock enforces one rate across the whole tree.",
    optionExplanations: ["Correct. This is why it can be biased if rates vary.", "Fossils usually give minimum constraints, not exact times.", "Independent branch rates describe uncorrelated relaxed clocks.", "Node dating is also possible."],
  },
  {
    kind: "theory",
    question: "How does an autocorrelated relaxed clock differ from an uncorrelated relaxed clock?",
    options: ["Autocorrelated clocks make neighboring branches have related rates; uncorrelated clocks draw branch rates independently", "Autocorrelated clocks forbid fossils; uncorrelated clocks require fossils", "Autocorrelated clocks are distance-based; uncorrelated clocks are parsimony-based", "They are identical terms"],
    answer: 0,
    explanation: "The dependence among branch rates is the central difference.",
    optionExplanations: ["Correct. Autocorrelated models clock drift; uncorrelated models independent rate draws.", "Both can be used with calibrations depending on the software and analysis.", "Both are clock models, not tree-building criteria like parsimony.", "They encode different assumptions about rate inheritance."],
  },
  {
    kind: "theory",
    question: "Which approach is described as very fast and implemented in IQ-TREE for dating fixed trees?",
    options: ["Least Squares Dating / LSD", "Fossilized Birth-Death MCMC only", "Nearest Neighbor Interchange", "Reciprocal Best Hit"],
    answer: 0,
    explanation: "LSD fits dates to branch lengths by least squares and is used in the practical through IQ-TREE.",
    optionExplanations: ["Correct. LSD is the fast method used here.", "FBD is a Bayesian fossil model, not the fast IQ-TREE practical method.", "NNI proposes tree rearrangements; it is not a dating method.", "RBH is for orthology inference."],
  },
  {
    kind: "theory",
    question: "What is node dating?",
    options: ["Assigning temporal constraints to internal nodes", "Assigning dates only to terminal sampled viruses", "Removing all fossils from the analysis", "Estimating bootstrap support by resampling columns"],
    answer: 0,
    explanation: "Node dating calibrates internal divergences, usually using fossils or geological events.",
    optionExplanations: ["Correct. Fossils are often used to constrain MRCAs.", "That describes tip dating.", "Node dating often relies on fossils.", "Bootstrap support is unrelated to dating calibration."],
  },
  {
    kind: "theory",
    question: "What is tip dating?",
    options: ["Assigning ages directly to terminal samples", "Forcing all internal nodes to the same age", "Using only morphology without dates", "Choosing a substitution model by BIC"],
    answer: 0,
    explanation: "Tip dating uses sampling dates of terminals, common for viruses and ancient DNA.",
    optionExplanations: ["Correct. Terminals themselves carry temporal information.", "That would not be tip dating.", "Total-evidence dating can include morphology, but tip dating means dated terminal taxa.", "Model selection is separate."],
  },
  {
    kind: "theory",
    question: "Why do fossils usually provide minimum age constraints rather than exact divergence dates?",
    options: ["The lineage must already have existed when the fossil was deposited, but the split may be older", "Fossils are always younger than living species", "Fossils cannot be placed on trees", "Molecular clocks do not use time"],
    answer: 0,
    explanation: "A fossil proves that the lineage existed by that date; it does not prove when the lineage originated exactly.",
    optionExplanations: ["Correct. This is why priors often have a hard minimum and a tail toward older ages.", "Fossils are older samples, not younger than living species in that sense.", "Fossil placement is central to calibration.", "Molecular clocks explicitly connect substitutions and time."],
  },
  {
    kind: "theory",
    question: "Which fossil prior shape has high probability near the minimum bound and a heavy tail toward older ages?",
    options: ["Lognormal", "Uniform", "Strict molecular clock", "Neighbor joining"],
    answer: 0,
    explanation: "Lognormal priors are common for fossils because divergence likely predates the fossil but not with equal probability forever.",
    optionExplanations: ["Correct. It models a hard/near-hard minimum with older uncertainty.", "Uniform assigns equal probability between bounds.", "A strict clock is a rate model, not a calibration prior shape.", "Neighbor joining is a distance-based tree method."],
  },
  {
    kind: "practical",
    question: "In the node-dating practical, what does --date specify?",
    options: ["The calibration file containing node or tip dates", "The outgroup taxon", "The substitution model only", "The number of bootstrap replicates"],
    answer: 0,
    explanation: "--date points IQ-TREE to the file with temporal constraints.",
    optionExplanations: ["Correct. The file can contain MRCA node ages or dated tips.", "The outgroup is supplied with -o.", "Model/partition information is separate.", "Bootstrap and dating confidence intervals are different options."],
  },
  {
    kind: "practical",
    question: "Why is -o H_robusta used in the mollusk dating command?",
    options: ["To specify the outgroup because time trees are rooted", "To choose the fastest gene", "To remove fossils", "To run ASTRAL"],
    answer: 0,
    explanation: "Dating requires a rooted temporal interpretation, so the practical explicitly supplies an outgroup.",
    optionExplanations: ["Correct. The outgroup helps root the analysis.", "It is not a gene-speed setting.", "Fossil/node calibrations remain in the calibration file.", "ASTRAL is a coalescent summary method, not this dating command."],
  },
  {
    kind: "practical",
    question: "What is the purpose of --date-ci 100 in the practical command?",
    options: ["To estimate confidence intervals by resampling branch lengths", "To force exactly 100 taxa into the tree", "To run 100 MCMC chains", "To delete 100 columns"],
    answer: 0,
    explanation: "The flag estimates uncertainty around dates through branch-length resampling.",
    optionExplanations: ["Correct. It helps produce confidence intervals in the time tree.", "It does not control taxon number.", "This IQ-TREE/LSD practical is not an MCMC run.", "Deleting columns is jackknife-like, not date-ci."],
  },
  {
    kind: "practical",
    question: "In the Dengue tip-dating file, what can a range such as 2019-02-01:2019-12-31 represent?",
    options: ["A sample known only to have been collected within that interval", "A fossil minimum and maximum for a crown bird", "A branch support value", "A codon position range"],
    answer: 0,
    explanation: "Tip dates can be exact, coarse or interval-based when sampling information is incomplete.",
    optionExplanations: ["Correct. The practical uses ranges and NA bounds for uncertain sampling dates.", "This is a dated tip example, not a bird fossil node calibration.", "Support values are not written as date ranges.", "Codon positions are unrelated here."],
  },
  {
    kind: "practical",
    question: "Why does the practical open timetree.nexus in FigTree rather than relying only on a Newick tree?",
    options: ["NEXUS can store node ages and confidence interval information useful for time trees", "Newick cannot store any topology", "FigTree cannot open dated trees", "NEXUS removes all branch lengths"],
    answer: 0,
    explanation: "The time-tree output needs information beyond a simple topology string, including ages and uncertainty.",
    optionExplanations: ["Correct. NEXUS is richer for this practical output.", "Newick can store topology and branch lengths, but less annotation.", "FigTree is used precisely to inspect the time tree.", "NEXUS preserves/display annotations; it does not remove branch lengths."],
  },
];

export const lesson14Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function DivergenceTimeLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = c[lang] || c.en;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return <main dir={dir} className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
    <LessonResources lang={lang} lessonNo={lessonNo} />

    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-7 md:p-10 lg:p-12">
          <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700">{copy.eyebrow}</div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
          <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
            <MiniTreeIcon active />
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">{copy.bigPicture}</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{copy.workflowTitle}</div>
      <Flow items={copy.workflow} />
    </section>

    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "amber", "green", "purple", "red"][index % 5]}>{body}</Card>)}
    </section>

    <ClockTable copy={copy} />

    {copy.sections.slice(0, 7).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <DatingMethods copy={copy} />

    {copy.sections.slice(7, 12).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{copy.section} {index + 8}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <PriorGrid copy={copy} />

    {copy.sections.slice(12).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{copy.section} {index + 13}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">checklist</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-sky-700" /><span>{item}</span></label>)}</div>
    </section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

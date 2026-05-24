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

const enSections = [
  [
    "1. The divide: compressing characters versus scoring them",
    [
      "Distance-based methods first compress an alignment into pairwise distances. Once the distance matrix is built, the algorithm no longer knows which exact columns supported each relationship; it only sees distances among taxa.",
      "Character-based methods keep the alignment columns as separate pieces of evidence. The central question becomes: given a candidate topology, how many changes, or how much probability, is needed to explain each site?",
    ],
  ],
  [
    "2. Maximum parsimony: the simplest scoring criterion",
    [
      "Maximum parsimony is character-based. It prefers the tree that explains the observed character states with the fewest total changes. This is an implicit evolutionary model: among competing histories, the least-change explanation is favored.",
      "The method is intuitive because each informative site can be mapped onto alternative topologies and assigned a minimum number of changes. The tree length is the sum of these minimum changes across sites.",
    ],
  ],
  [
    "3. Why only some sites help parsimony",
    [
      "Invariant sites do not distinguish among topologies: if every taxon has A, every tree can explain that column without conflict. Singleton sites are variable, but if only one taxon has the rare state, they usually do not choose among alternative groupings.",
      "A parsimony-informative site has at least two states, and each of those states appears in at least two taxa. This is why a pattern such as G C G C can support one split, while A A A T mostly tells us that one terminal branch changed.",
    ],
  ],
  [
    "4. Site conflict: why one column is never the whole tree",
    [
      "Some sites may support the same topology, while others support a different one. This is normal: homoplasy, noise, saturation, or genuine historical complexity can make characters disagree.",
      "Parsimony resolves this by adding site scores across the alignment. The best tree is the topology with the lowest total length, not necessarily the tree favored by every single site.",
    ],
  ],
  [
    "5. Tree space: why we need search moves",
    [
      "For four taxa, there are only three unrooted binary topologies. But the number of possible trees grows explosively with more taxa, so exhaustive search quickly becomes impossible.",
      "This is why character-based inference needs two ingredients: a scoring function, such as parsimony, likelihood, or posterior probability, and a way to propose new candidate trees to score.",
    ],
  ],
  [
    "6. NNI, SPR and TBR: three intensities of tree rearrangement",
    [
      "Nearest Neighbor Interchange (NNI) is the smallest local move: choose an internal branch and swap neighboring subtrees around that branch. It is fast, but it explores tree space conservatively.",
      "Subtree Pruning and Regrafting (SPR) cuts a subtree and reattaches it elsewhere. Tree Bisection and Reconnection (TBR) is more aggressive: cut the tree into two parts and reconnect them in alternative ways.",
    ],
  ],
  [
    "7. How this links to later lessons",
    [
      "Maximum likelihood and Bayesian inference will use more explicit models of sequence evolution, but the logic of proposing, scoring, accepting or rejecting candidate trees remains central.",
      "That is why the professor framed character-based methods as tree-scoring rather than simply tree-building: the software outputs a tree, but the conceptual machinery is a search through scored topologies.",
    ],
  ],
];

const enPractical = [
  ["Distance workflow", "The practical computes p-distances with dist.p(), then builds UPGMA and Neighbor Joining trees from the same distance matrix."],
  ["Character workflow", "It then switches to maximum parsimony: pratchet() searches tree space using a parsimony ratchet strategy."],
  ["Optimization moves", "optim.parsimony() can refine a candidate tree with moves such as NNI, making the idea of local tree rearrangement concrete."],
  ["Fitch scores", "fitch(tree, alignment) lets you compare how many changes different trees require on the same alignment: UPGMA, NJ and MP trees can be scored side by side."],
];

const enTakeaways = [
  "Distance methods are fast because they compress alignments into distance matrices.",
  "UPGMA is rooted and ultrametric because it assumes clock-like evolution.",
  "Neighbor Joining is unrooted and less clock-dependent, but still distance-based.",
  "Maximum parsimony is character-based: it minimizes total character-state changes.",
  "Only parsimony-informative sites help choose among alternative topologies.",
  "NNI, SPR and TBR are tree-search moves with increasing rearrangement intensity.",
];

const enChecklist = [
  "I can explain why distance methods lose site-level information.",
  "I can describe UPGMA and NJ without mixing their assumptions.",
  "I can define maximum parsimony as a tree-scoring criterion.",
  "I can identify invariant, singleton and parsimony-informative sites.",
  "I can explain why site conflict is expected in real alignments.",
  "I can distinguish NNI, SPR and TBR as increasingly broad tree moves.",
];

const c = {
  en: {
    eyebrow: "Lesson 06 · Distance-based versus character-based algorithms",
    title: "From distance matrices to parsimony search",
    subtitle: "This revision keeps the distance-method recap short and uses the space to develop maximum parsimony, informative sites and tree rearrangements.",
    big: "Distance methods build a tree from pairwise distances. Character-based methods score candidate trees from the alignment columns themselves. Maximum parsimony is the first scoring criterion: choose the tree requiring the fewest changes, then use moves such as NNI, SPR and TBR to search tree space.",
    flow: ["alignment", "distance matrix", "UPGMA / NJ", "characters", "parsimony score", "NNI / SPR / TBR"],
    tags: ["distance matrix", "UPGMA", "Neighbor Joining", "maximum parsimony", "Fitch score", "tree rearrangements"],
    emphasisTitle: "What the professor emphasized",
    emphasis: [
      ["The exam-style contrast", "Distance-based methods take a distance matrix and return a tree. Character-based methods take aligned characters and score candidate trees."],
      ["UPGMA versus NJ", "UPGMA is rooted, ultrametric and clock-dependent. NJ is unrooted and less tied to a strict molecular clock, but it is still distance-based."],
      ["Parsimony-informative sites", "A classic definition: at least two character states, each represented in at least two taxa. Invariant sites and singletons do not resolve competing topologies in the same way."],
      ["Search plus score", "For character methods, scoring a tree is not enough. Because tree space grows quickly, algorithms must propose new topologies: NNI, SPR and TBR are examples of those moves."],
    ],
    sections: enSections,
    practicalTitle: "Practical connection",
    practical: enPractical,
    takeaways: enTakeaways,
    checklist: enChecklist,
  },
  es: {
    eyebrow: "Lección 06 · Métodos basados en distancia versus caracteres",
    title: "De matrices de distancia a búsqueda por parsimonia",
    subtitle: "Esta versión deja el repaso de métodos de distancia más corto y usa el espacio para desarrollar máxima parsimonia, sitios informativos y rearrangements de árboles.",
    big: "Los métodos de distancia construyen un árbol a partir de distancias pareadas. Los métodos basados en caracteres puntúan árboles candidatos usando las columnas del alineamiento. La máxima parsimonia es el primer criterio: escoger el árbol que requiere menos cambios y explorar el tree space con movimientos como NNI, SPR y TBR.",
    flow: ["alineamiento", "matriz de distancia", "UPGMA / NJ", "caracteres", "score de parsimonia", "NNI / SPR / TBR"],
    tags: ["matriz de distancia", "UPGMA", "Neighbor Joining", "máxima parsimonia", "Fitch score", "rearrangements"],
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["Contraste de examen", "Los métodos de distancia usan una matriz de distancia y devuelven un árbol. Los métodos basados en caracteres usan caracteres alineados y puntúan árboles candidatos."],
      ["UPGMA versus NJ", "UPGMA es enraizado, ultramétrico y dependiente del reloj. NJ es no enraizado y menos dependiente de un reloj estricto, pero sigue siendo de distancia."],
      ["Sitios informativos", "Definición clásica: al menos dos estados de carácter, cada uno presente en al menos dos taxa. Invariantes y singletons no resuelven topologías competidoras igual."],
      ["Búsqueda + score", "En métodos de caracteres, puntuar un árbol no basta. Como el tree space crece rápido, se necesitan movimientos como NNI, SPR y TBR para proponer topologías."],
    ],
    sections: enSections,
    practicalTitle: "Conexión práctica",
    practical: enPractical,
    takeaways: enTakeaways,
    checklist: enChecklist,
  },
  fa: {
    eyebrow: "درس ۰۶ · روش‌های فاصله‌ای و کاراکتری",
    title: "از ماتریس فاصله تا جستجوی پارسیمونی",
    subtitle: "در این نسخه مرور روش‌های فاصله‌ای کوتاه‌تر شده و تمرکز بیشتر روی پارسیمونی، سایت‌های اطلاعاتی و جابه‌جایی درخت‌هاست.",
    big: "روش‌های فاصله‌ای از فاصله‌های جفتی درخت می‌سازند. روش‌های کاراکتری ستون‌های هم‌ترازی را جداگانه نگه می‌دارند و درخت‌های کاندید را امتیازدهی می‌کنند. پارسیمونی درختی را ترجیح می‌دهد که کمترین تعداد تغییر را نیاز داشته باشد.",
    flow: ["هم‌ترازی", "ماتریس فاصله", "UPGMA / NJ", "کاراکترها", "امتیاز پارسیمونی", "NNI / SPR / TBR"],
    tags: ["ماتریس فاصله", "UPGMA", "Neighbor Joining", "maximum parsimony", "Fitch score", "tree rearrangements"],
    emphasisTitle: "نکات مهم استاد",
    emphasis: [
      ["تفاوت اصلی", "روش‌های فاصله‌ای با ماتریس فاصله کار می‌کنند؛ روش‌های کاراکتری با ستون‌های هم‌ترازی و امتیازدهی درخت‌ها."],
      ["UPGMA در برابر NJ", "UPGMA ریشه‌دار و ultrametric است و به فرض ساعت مولکولی وابسته است. NJ بدون ریشه است و کمتر به ساعت وابسته است."],
      ["سایت‌های اطلاعاتی", "سایت پارسیمونی‌ـاطلاعاتی حداقل دو حالت دارد و هر حالت در حداقل دو تاکسون دیده می‌شود."],
      ["جستجو و امتیاز", "برای روش‌های کاراکتری باید توپولوژی‌های جدید با حرکت‌هایی مثل NNI، SPR و TBR پیشنهاد شوند."],
    ],
    sections: enSections,
    practicalTitle: "ارتباط با بخش عملی",
    practical: enPractical,
    takeaways: enTakeaways,
    checklist: enChecklist,
  },
};

function Card({ title, children, tone = "stone" }) {
  return <div className={`rounded-[1.7rem] border p-5 shadow-sm ${toneClasses[tone]}`}><h3 className="text-lg font-black tracking-tight">{title}</h3><p className="mt-2 text-sm font-semibold leading-7 opacity-80">{children}</p></div>;
}

function Flow({ items }) {
  return <div className="flex flex-wrap items-center gap-2">{items.map((item, i) => <React.Fragment key={item}><span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700">{item}</span>{i < items.length - 1 && <span className="text-red-500">→</span>}</React.Fragment>)}</div>;
}

function DistanceRecap() {
  const rows = [["A", 0, 5, 9, 9], ["B", 5, 0, 10, 10], ["C", 9, 10, 0, 8], ["D", 9, 10, 8, 0]];
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">distance methods recap</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">One number per pair: useful, fast, but compressed</h2>
    <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="overflow-x-auto rounded-3xl border border-stone-200 bg-stone-50 p-3">
        <table className="w-full min-w-[420px] border-separate border-spacing-2 text-center text-sm font-black">
          <thead><tr>{["Taxon", "A", "B", "C", "D"].map(h => <th key={h} className="rounded-2xl bg-stone-950 px-4 py-3 text-white">{h}</th>)}</tr></thead>
          <tbody>{rows.map(r => <tr key={r[0]}>{r.map((x, i) => <td key={i} className={`rounded-2xl border px-4 py-3 ${r[0] === "A" && i === 2 ? "border-red-200 bg-red-50 text-red-700" : "border-stone-200 bg-white"}`}>{x}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-3">
        <Card title="UPGMA" tone="amber">Pick the smallest distance, merge that pair, recalculate cluster distances by averages. Fast, rooted, ultrametric, and clock-dependent.</Card>
        <Card title="Neighbor Joining" tone="sky">Start from the same kind of matrix, transform it with net divergence into a Q-matrix, estimate branch lengths, and return an unrooted tree.</Card>
      </div>
    </div>
  </section>;
}

function ParsimonySiteGrid() {
  const rows = [
    ["site 1", "A A A A", "invariant", "does not choose among trees"],
    ["site 2", "G C G C", "informative", "can support split 13|24"],
    ["site 3", "A A A T", "singleton", "variable, but mainly a terminal change"],
    ["site 4", "G T G T", "informative", "another column supporting a split"],
  ];
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">maximum parsimony</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">Not every variable site is equally useful</h2>
    <div className="mt-5 grid gap-3 md:grid-cols-2">{rows.map(([site, states, label, msg]) => <div key={site} className="rounded-3xl border border-white/10 bg-white/8 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{site} · {label}</div><div className="mt-2 font-mono text-lg font-black">{states}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-300">{msg}</p></div>)}</div>
  </section>;
}

function ParsimonyScoring() {
  const topologies = [
    ["AB|CD", "2 changes", "not preferred for G C G C"],
    ["AC|BD", "1 change", "preferred by this site"],
    ["AD|BC", "2 changes", "not preferred for this site"],
  ];
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">how scoring works</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Map a site onto alternative trees, then count changes</h2>
    <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-stone-700">For a four-taxon pattern such as G C G C, the topology grouping taxa 1 and 3 together, and taxa 2 and 4 together, can explain the pattern with fewer changes. Across a full alignment, parsimony sums these minimum changes across sites.</p>
    <div className="mt-5 grid gap-4 md:grid-cols-3">{topologies.map(([name, score, note]) => <div key={name} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="font-mono text-2xl font-black text-stone-950">{name}</div><div className="mt-3 rounded-full bg-red-50 px-3 py-2 text-sm font-black text-red-800">{score}</div><p className="mt-3 text-sm font-semibold leading-6 text-stone-700">{note}</p></div>)}</div>
  </section>;
}

function TreeMoveGallery() {
  const moves = [
    ["NNI", "Nearest Neighbor Interchange", "Smallest local move. Choose an internal branch and swap neighboring subtrees. Fast, conservative, good for local improvement."],
    ["SPR", "Subtree Pruning and Regrafting", "Cut one subtree and attach it elsewhere. Broader search than NNI because a whole clade can move across the tree."],
    ["TBR", "Tree Bisection and Reconnection", "Cut the tree into two parts and reconnect them in alternative ways. Most aggressive, explores more topologies, but costs more."],
  ];
  return <section className="mt-8 rounded-[2rem] border border-violet-100 bg-violet-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-violet-700">tree-space moves</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Three ways to propose a new tree</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-3">{moves.map(([short, full, body]) => <div key={short} className="rounded-3xl border border-violet-100 bg-white p-5"><div className="text-4xl font-black text-violet-800">{short}</div><h3 className="mt-2 text-lg font-black text-stone-950">{full}</h3><p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{body}</p></div>)}</div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.practicalTitle}</div><div className="mt-5 grid gap-4 md:grid-cols-2">{copy.practical.map(([title, body]) => <Card key={title} title={title} tone="green">{body}</Card>)}</div></section>;
}

function Takeaways({ copy }) {
  return <section className="mt-8 rounded-[2rem] border border-amber-100 bg-amber-50 p-6 shadow-sm md:p-8"><h2 className="text-3xl font-black tracking-tight text-stone-950">Take-home logic</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.takeaways.map(x => <div key={x} className="rounded-2xl border border-amber-200 bg-white/70 p-4 text-sm font-black leading-6 text-stone-800">{x}</div>)}</div></section>;
}

const quizEn = [
  {kind:"theory",question:"What is the main input of a distance-based phylogenetic method?",options:["A matrix of pairwise distances.","A posterior distribution of trees.","A list of synapomorphies only.","A fossil calibration table."],answer:0,optionExplanations:["Correct. Distance methods work from pairwise distances among taxa.","Posterior distributions are Bayesian outputs, not distance-method inputs.","Synapomorphies are characters; distance methods collapse them into distances.","Calibrations belong to divergence-time analysis, not basic UPGMA/NJ."]},
  {kind:"theory",question:"What information is lost when an alignment is collapsed into a distance matrix?",options:["The identity of site-by-site character patterns.","The names of all taxa.","The total number of sequences.","The possibility of building any tree."],answer:0,optionExplanations:["Correct. After compression, the algorithm sees one distance per pair, not which columns supported which split.","Taxon names are still present in the matrix.","The number of sequences is still represented by matrix size.","Distance methods do build trees; the issue is loss of site-level detail."]},
  {kind:"theory",question:"UPGMA is best described as producing:",options:["A rooted ultrametric tree under a clock-like assumption.","An unrooted tree without clock assumptions.","A Bayesian posterior sample.","A maximum-likelihood tree with GTR parameters."],answer:0,optionExplanations:["Correct. UPGMA assumes approximately equal rates from root to tips.","That is closer to Neighbor Joining.","Bayesian sampling is a different inference framework.","UPGMA is not a likelihood model-fitting method."]},
  {kind:"theory",question:"Neighbor Joining differs from UPGMA because NJ:",options:["Uses a Q-matrix/net divergence criterion and returns an unrooted tree.","Assumes a strict molecular clock more strongly.","Is a character-based method.","Uses posterior priors."],answer:0,optionExplanations:["Correct. NJ transforms distances before choosing joins and estimates branch lengths.","UPGMA is the clock-dependent one.","NJ remains distance-based.","Priors belong to Bayesian inference."]},
  {kind:"theory",question:"Maximum parsimony prefers the tree that:",options:["Requires the fewest character-state changes.","Has the longest branches.","Maximizes P(data | model).","Has the highest posterior probability."],answer:0,optionExplanations:["Correct. Parsimony minimizes total inferred changes.","Branch length is not the parsimony criterion.","That describes maximum likelihood.","That describes Bayesian inference."]},
  {kind:"theory",question:"Why is maximum parsimony considered character-based?",options:["Because it evaluates aligned sites as individual characters.","Because it ignores the alignment after computing distances.","Because it only uses taxon names.","Because it always assumes a strict molecular clock."],answer:0,optionExplanations:["Correct. Each column can contribute to the tree score.","That describes the distance-method compression step.","Taxon names alone cannot score a topology.","The clock assumption is associated with UPGMA, not parsimony."]},
  {kind:"theory",question:"A parsimony-informative site must contain:",options:["At least two states, each represented in at least two taxa.","Only one state across all taxa.","A unique state in exactly one taxon.","Only gaps and no nucleotides."],answer:0,optionExplanations:["Correct. This is the classic definition emphasized in class and exam samples.","That is an invariant site.","That is a singleton, variable but not parsimony-informative.","Gaps alone do not define informative phylogenetic signal."]},
  {kind:"theory",question:"Why is a singleton site usually not parsimony-informative?",options:["It marks a change on one terminal branch but does not distinguish among alternative groupings.","It means all taxa have the same nucleotide.","It always proves the outgroup is wrong.","It is used only in Bayesian inference."],answer:0,optionExplanations:["Correct. A unique state generally supports a terminal change, not a relationship among multiple taxa.","All taxa with the same state would be invariant, not singleton.","Singletons do not diagnose outgroup choice by themselves.","Singleton is a site-pattern concept, not Bayesian-specific."]},
  {kind:"theory",question:"What does site conflict mean in a parsimony context?",options:["Different alignment columns support different topologies.","The alignment file cannot be opened.","All taxa have identical sequences.","The tree has no branch lengths."],answer:0,optionExplanations:["Correct. Real alignments often contain characters favoring different histories.","That is a file problem, not a biological or phylogenetic conflict.","Identical sequences would reduce informative conflict.","Parsimony can be discussed with topology and changes; lack of branch lengths is not site conflict."]},
  {kind:"theory",question:"NNI, SPR and TBR are best understood as:",options:["Tree rearrangement moves used to explore tree space.","Alignment scoring matrices.","Distance correction formulas.","Gap penalties."],answer:0,optionExplanations:["Correct. They propose alternative topologies for scoring.","They operate on trees, not on pairwise alignment scoring.","Distance corrections are models such as JC/K80.","Gap penalties belong to sequence alignment."]},
  {kind:"practical",question:"In the Lesson 06 practical, dist.p(alignment) is used to compute:",options:["A p-distance matrix.","A Bayesian posterior sample.","A Gblocks-filtered alignment.","A fossil-calibrated chronogram."],answer:0,optionExplanations:["Correct. dist.p() calculates p-distances from the alignment.","No MCMC posterior is produced by dist.p().","Gblocks is a filtering tool from the alignment lesson.","Chronograms are divergence-time outputs."]},
  {kind:"practical",question:"In the practical, upgma(dm) builds:",options:["A rooted UPGMA tree from a distance matrix.","An unrooted NJ tree from raw sequences.","A parsimony ratchet search.","A multiple sequence alignment."],answer:0,optionExplanations:["Correct. dm is the distance matrix used by UPGMA.","NJ is built with nj(dm), not upgma(dm).","The parsimony ratchet uses pratchet().","Alignment is produced before distance calculation."]},
  {kind:"practical",question:"In the practical, nj(dm) is used to infer:",options:["An unrooted Neighbor Joining tree.","A rooted ultrametric UPGMA tree.","A filtered alignment.","A site-rate model."],answer:0,optionExplanations:["Correct. NJ generates an unrooted distance-based tree.","That describes UPGMA.","Filtering is done with separate tools.","Site-rate models are part of substitution-model inference."]},
  {kind:"practical",question:"What does pratchet(alignment, ...) perform in the practical?",options:["A parsimony ratchet search for better MP trees.","A Q-matrix calculation for NJ.","A global pairwise alignment.","A posterior ESS diagnostic."],answer:0,optionExplanations:["Correct. pratchet() searches tree space under maximum parsimony.","Q-matrices are part of the NJ explanation.","Global pairwise alignment is Needleman–Wunsch-like, not pratchet().","ESS is used in Bayesian MCMC diagnostics."]},
  {kind:"practical",question:"Why compute fitch(treeUPGMA, alignment), fitch(treeNJ, alignment), and fitch(treePARSIMONY, alignment)?",options:["To compare parsimony scores of different trees on the same alignment.","To convert all trees into chronograms.","To delete non-informative taxa.","To estimate base frequencies for GTR."],answer:0,optionExplanations:["Correct. Fitch scores show how many changes each tree requires under parsimony.","Chronograms require time calibration methods.","Taxon deletion is not the purpose of fitch().","GTR parameter estimation belongs to likelihood models."]}
];

export const lesson06Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function DistanceCharacterAlgorithmsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = c[lang] || c.en;
  const dir = lang === "fa" ? "rtl" : "ltr";
  return <main dir={dir} className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
    <LessonResources lang={lang} lessonNo={lessonNo} />

    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 md:p-10 lg:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
          <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
            <MiniTreeIcon active />
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">workflow</div><Flow items={copy.flow} /></section>
    <section className="mt-8 grid gap-5 md:grid-cols-2">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "red", "green", "amber"][index % 4]}>{body}</Card>)}</section>

    <DistanceRecap />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Section {index + 1}</div><h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div></section>)}

    <ParsimonySiteGrid />
    <ParsimonyScoring />
    <TreeMoveGallery />
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Before moving on</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div>
    </section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

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

const c = {
  en: {
    eyebrow: "Lesson 06 · Distance-based versus character-based algorithms",
    title: "From distance matrices to tree scoring",
    subtitle: "This lesson separates two big families of phylogenetic methods: methods that collapse an alignment into distances, and methods that evaluate characters one by one.",
    big: "Distance-based methods turn an alignment into a pairwise distance matrix and iteratively build a tree. Character-based methods keep sites as individual characters and ask which topology is best supported under a criterion such as maximum parsimony, maximum likelihood, or Bayesian inference.",
    flow: ["alignment", "distance matrix", "UPGMA / NJ", "characters", "parsimony score", "tree search"],
    tags: ["distance matrix", "UPGMA", "Neighbor Joining", "maximum parsimony", "informative sites", "NNI / SPR / TBR"],
    emphasisTitle: "What the professor emphasized",
    emphasis: [
      ["Input matters", "A classic exam-style distinction is that distance-based methods take a distance matrix as input, while character-based methods work from the aligned characters themselves."],
      ["UPGMA is fast but clock-dependent", "UPGMA produces a rooted ultrametric tree and relies strongly on a molecular-clock-like assumption. If rates vary across lineages, UPGMA can be misleading."],
      ["NJ is still distance-based", "Neighbor Joining is more flexible than UPGMA because it does not assume equal rates and returns an unrooted tree, but it still collapses all character information into pairwise distances."],
      ["Character-based methods score trees", "The professor repeated that character-based inference is conceptually about scoring candidate trees. The software may output a tree, but the core operation is tree evaluation."],
    ],
    sections: [
      ["1. Distance-based methods", ["Distance methods start from aligned sequences, compare each pair of taxa, and summarize all observed differences between those two sequences into one number. The resulting table is a distance matrix.", "This is useful because it is fast and gives a sensible starting tree or exploratory result, especially for large datasets. The trade-off is information loss: many site-level patterns are compressed into a single pairwise distance."]],
      ["2. UPGMA", ["UPGMA begins with a distance matrix, finds the closest pair, clusters them, recalculates distances from the new cluster to all other taxa using arithmetic means, and repeats until one tree remains.", "Its output is rooted and ultrametric. That means all tips are treated as equally distant from the root, which corresponds to a strict molecular clock assumption. This is simple and fast, but dangerous if lineages evolve at different rates."]],
      ["3. Neighbor Joining", ["Neighbor Joining also starts from a distance matrix, but it does not simply pick the smallest raw distance. It computes net divergence values and a Q-matrix to decide which pair should be joined.", "Unlike UPGMA, NJ estimates branch lengths during the joining process and produces an unrooted tree. It is less dependent on a strict clock, but it is still not a model-based character method."]],
      ["4. Character-based methods", ["Character-based methods do not collapse the alignment into one distance per pair. Instead, they consider columns of the alignment as individual characters and evaluate how well a candidate tree explains those characters.", "This family includes maximum parsimony, maximum likelihood and Bayesian inference. The lesson focuses on parsimony as the most intuitive starting point: prefer the tree requiring the fewest character-state changes."]],
      ["5. Informative sites", ["A site is parsimony-informative when it has at least two different character states, and each of those states appears in at least two taxa. Invariant sites and singleton changes do not help choose among alternative topologies in the same way.", "A useful mental model is that an informative column can act like a miniature synapomorphy: it may suggest that taxa sharing a state also share a more recent common ancestor."]],
      ["6. Tree space and rearrangements", ["Character-based methods score trees, but the number of possible trees grows explosively. Exhaustively scoring every topology quickly becomes impossible.", "Tree rearrangement algorithms explore tree space. NNI makes small local swaps, SPR moves whole subtrees, and TBR cuts and reconnects the tree more aggressively. They propose new candidate topologies that can be scored under parsimony or later under likelihood/Bayesian frameworks."]],
    ],
    practicalTitle: "Practical connection",
    practical: [
      ["Read and align", "The practical reads nucleotide sequences, aligns them, and converts the alignment into a phylogenetic data object in R."],
      ["Distance workflow", "It computes p-distances with dist.p(), then builds a rooted UPGMA tree and an unrooted NJ tree from the same distance matrix."],
      ["Character workflow", "It uses parsimony ratchet with pratchet(), then optionally optimizes the result with NNI using optim.parsimony()."],
      ["Compare scores", "The same alignment can be used to compute Fitch parsimony scores for UPGMA, NJ and parsimony trees, making the distinction between building a tree and scoring a tree concrete."],
    ],
    takeaways: ["Distance methods are fast because they compress alignments into distance matrices.", "UPGMA assumes clock-like evolution and returns a rooted ultrametric tree.", "Neighbor Joining returns an unrooted tree and is less clock-dependent, but remains distance-based.", "Character-based methods keep sites separate and score candidate trees.", "Parsimony-informative sites require at least two states, each represented in at least two taxa."],
    checklist: ["I can define a distance matrix.", "I can explain why UPGMA assumes a molecular clock.", "I can contrast UPGMA and NJ.", "I can distinguish distance-based from character-based methods.", "I can identify a parsimony-informative site.", "I can explain why NNI, SPR and TBR are tree-search moves."],
  },
  es: {
    eyebrow: "Lección 06 · Algoritmos basados en distancia versus caracteres",
    title: "De matrices de distancia a puntuación de árboles",
    subtitle: "Esta clase separa dos familias de métodos: los que colapsan el alineamiento en distancias y los que evalúan caracteres uno por uno.",
    big: "Los métodos basados en distancia convierten un alineamiento en una matriz de distancias pareadas y construyen el árbol de manera iterativa. Los métodos basados en caracteres conservan los sitios como caracteres individuales y preguntan qué topología está mejor apoyada bajo un criterio como parsimonia, máxima verosimilitud o inferencia bayesiana.",
    flow: ["alineamiento", "matriz de distancia", "UPGMA / NJ", "caracteres", "score de parsimonia", "búsqueda de árboles"],
    tags: ["matriz de distancia", "UPGMA", "Neighbor Joining", "parsimonia", "sitios informativos", "NNI / SPR / TBR"],
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["El input importa", "Una distinción clásica de examen: los métodos de distancia usan una matriz de distancia; los métodos basados en caracteres usan los caracteres alineados."],
      ["UPGMA es rápido pero depende del reloj", "UPGMA produce un árbol enraizado y ultramétrico, y depende fuertemente de una hipótesis tipo reloj molecular."],
      ["NJ sigue siendo de distancia", "Neighbor Joining es más flexible que UPGMA porque no asume tasas iguales y genera un árbol no enraizado, pero aún colapsa los caracteres en distancias."],
      ["Los métodos de caracteres puntúan árboles", "La inferencia basada en caracteres se entiende como evaluación de topologías candidatas; el árbol final sale de comparar scores."],
    ],
    sections: [], practicalTitle: "Conexión práctica", practical: [], takeaways: [], checklist: []
  },
  fa: {
    eyebrow: "درس ۰۶ · روش‌های مبتنی بر فاصله و مبتنی بر کاراکتر",
    title: "از ماتریس فاصله تا امتیازدهی درخت",
    subtitle: "این درس تفاوت دو خانوادهٔ اصلی روش‌های فیلوژنتیک را توضیح می‌دهد.",
    big: "روش‌های فاصله‌ای کل اطلاعات هم‌ترازی را به فاصله‌های جفتی تبدیل می‌کنند. روش‌های مبتنی بر کاراکتر هر ستون هم‌ترازی را جداگانه نگه می‌دارند و درخت‌های کاندید را امتیازدهی می‌کنند.",
    flow: ["هم‌ترازی", "ماتریس فاصله", "UPGMA / NJ", "کاراکترها", "امتیاز پارسیمونی", "جستجوی درخت"],
    tags: ["ماتریس فاصله", "UPGMA", "Neighbor Joining", "پارسیمونی", "سایت‌های اطلاعاتی", "NNI / SPR / TBR"],
    emphasisTitle: "نکات مهم استاد",
    emphasis: [["ورودی مهم است", "روش‌های فاصله‌ای با ماتریس فاصله کار می‌کنند؛ روش‌های مبتنی بر کاراکتر با ستون‌های هم‌ترازی."],["UPGMA و ساعت مولکولی", "UPGMA سریع است اما فرض می‌کند نرخ تکامل در شاخه‌ها تقریباً ثابت است."],["NJ هنوز فاصله‌ای است", "Neighbor Joining نسبت به UPGMA انعطاف‌پذیرتر است اما همچنان اطلاعات را به فاصله تبدیل می‌کند."],["روش‌های کاراکتری درخت را امتیاز می‌دهند", "در این روش‌ها هدف ارزیابی توپولوژی‌های کاندید است."]],
    sections: [], practicalTitle: "بخش عملی", practical: [], takeaways: [], checklist: []
  }
};

c.es.sections = c.en.sections.map(([title, body], i) => ([
  ["1. Métodos basados en distancia", "2. UPGMA", "3. Neighbor Joining", "4. Métodos basados en caracteres", "5. Sitios informativos", "6. Espacio de árboles y rearrangements"][i],
  body
]));
c.es.practical = [["Leer y alinear", "La práctica lee secuencias, las alinea y las convierte en un objeto filogenético en R."],["Flujo de distancia", "Calcula p-distances con dist.p(), y después construye árboles UPGMA y NJ."],["Flujo de caracteres", "Usa parsimony ratchet con pratchet() y luego puede optimizar con NNI mediante optim.parsimony()."],["Comparar scores", "Calcula scores de Fitch para los árboles UPGMA, NJ y parsimonia."]];
c.es.takeaways = ["Los métodos de distancia comprimen el alineamiento en una matriz.", "UPGMA asume evolución tipo reloj y produce árbol enraizado ultramétrico.", "NJ produce árbol no enraizado y depende menos del reloj.", "Los métodos de caracteres mantienen los sitios separados y puntúan árboles.", "Un sitio informativo para parsimonia tiene al menos dos estados, cada uno en al menos dos taxa."];
c.es.checklist = ["Puedo definir matriz de distancia.", "Puedo explicar el supuesto de reloj en UPGMA.", "Puedo contrastar UPGMA y NJ.", "Puedo distinguir métodos de distancia y de caracteres.", "Puedo reconocer un sitio informativo.", "Puedo explicar NNI, SPR y TBR como movimientos de búsqueda."];
c.fa.sections = c.en.sections;
c.fa.practical = c.en.practical;
c.fa.takeaways = c.en.takeaways;
c.fa.checklist = c.en.checklist;

function Card({ title, children, tone = "stone" }) {
  return <div className={`rounded-[1.7rem] border p-5 shadow-sm ${toneClasses[tone]}`}><h3 className="text-lg font-black tracking-tight">{title}</h3><p className="mt-2 text-sm font-semibold leading-7 opacity-80">{children}</p></div>;
}
function Flow({ items }) {
  return <div className="flex flex-wrap items-center gap-2">{items.map((item, i) => <React.Fragment key={item}><span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700">{item}</span>{i < items.length - 1 && <span className="text-red-500">→</span>}</React.Fragment>)}</div>;
}
function MatrixDemo() {
  const rows = [["A",0,5,9,9],["B",5,0,10,10],["C",9,10,0,8],["D",9,10,8,0]];
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">UPGMA mini lab</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Closest pair → new cluster → recalculated distances</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[520px] border-separate border-spacing-2 text-center text-sm font-black"><thead><tr>{["Taxon","A","B","C","D"].map(h=><th key={h} className="rounded-2xl bg-stone-950 px-4 py-3 text-white">{h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i} className={`rounded-2xl border px-4 py-3 ${r[0] !== "A" || i !== 2 ? "border-stone-200 bg-stone-50" : "border-red-200 bg-red-50 text-red-700"}`}>{x}</td>)}</tr>)}</tbody></table></div><p className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-7 text-red-900">A and B are the closest pair. UPGMA merges them first, then recalculates distances from the new cluster (A,B) to C and D by averaging the previous distances.</p></section>;
}
function InformativeSites() {
  const rows = [["site 1","A A A A","invariant","not useful to choose topology"],["site 2","G C G C","informative","supports grouping 1+3 versus 2+4"],["site 3","A A A T","singleton","variable but not parsimony-informative"],["site 4","G T G T","informative","another column that can support a topology"]];
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">parsimony</div><h2 className="mt-2 text-3xl font-black tracking-tight">Which sites can choose among trees?</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{rows.map(([site, states, label, msg]) => <div key={site} className="rounded-3xl border border-white/10 bg-white/8 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{site} · {label}</div><div className="mt-2 font-mono text-lg font-black">{states}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-300">{msg}</p></div>)}</div></section>;
}
function PracticalBridge({ copy }) { return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.practicalTitle}</div><div className="mt-5 grid gap-4 md:grid-cols-2">{copy.practical.map(([t,b])=><Card key={t} title={t} tone="green">{b}</Card>)}</div></section>; }
function Takeaways({ copy }) { return <section className="mt-8 rounded-[2rem] border border-amber-100 bg-amber-50 p-6 shadow-sm md:p-8"><h2 className="text-3xl font-black tracking-tight text-stone-950">Take-home logic</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.takeaways.map(x=><div key={x} className="rounded-2xl border border-amber-200 bg-white/70 p-4 text-sm font-black leading-6 text-stone-800">{x}</div>)}</div></section>; }

const quizEn = [
  {kind:"theory",question:"What is the main input of a distance-based phylogenetic method?",options:["A matrix of pairwise distances.","A posterior distribution of trees.","A list of synapomorphies only.","A fossil calibration table."],answer:0,optionExplanations:["Correct. Distance methods work from pairwise distances among taxa.","Posterior distributions are Bayesian outputs, not distance-method inputs.","Synapomorphies are characters; distance methods collapse differences into distances.","Calibrations belong to divergence-time analysis, not basic UPGMA/NJ."]},
  {kind:"theory",question:"What is the key simplification made by distance-based methods?",options:["They ignore the alignment completely.","They compress many character differences into pairwise distance values.","They model every site separately.","They estimate posterior probabilities for each branch."],answer:1,optionExplanations:["They still start from aligned sequences or other comparable data.","Correct. The site-level information is summarized into distances.","That describes character-based methods.","Posterior probabilities are Bayesian support values."]},
  {kind:"theory",question:"UPGMA is best described as producing:",options:["An unrooted tree without clock assumptions.","A rooted ultrametric tree under a clock-like assumption.","A Bayesian posterior sample.","A maximum-likelihood tree with GTR parameters."],answer:1,optionExplanations:["That is closer to Neighbor Joining.","Correct. UPGMA assumes approximately equal rates from root to tips.","Bayesian sampling is a different inference framework.","UPGMA is not a likelihood model-fitting method."]},
  {kind:"theory",question:"Why can UPGMA fail when rates vary strongly among lineages?",options:["Because it cannot read DNA alignments.","Because its clock-like assumption is violated.","Because it only works for amino acids.","Because it requires a rooted input tree."],answer:1,optionExplanations:["The issue is not file type or DNA reading.","Correct. Non-clocklike evolution breaks the ultrametric assumption.","UPGMA is not restricted to amino acids.","UPGMA builds a rooted tree; it does not require one as input."]},
  {kind:"theory",question:"Neighbor Joining differs from UPGMA because NJ:",options:["Uses a Q-matrix/net divergence criterion and returns an unrooted tree.","Assumes a strict molecular clock more strongly.","Is a character-based method.","Uses posterior priors."],answer:0,optionExplanations:["Correct. NJ transforms the distance information before choosing joins and estimates branch lengths.","UPGMA is the clock-dependent one.","NJ remains distance-based.","Priors belong to Bayesian inference."]},
  {kind:"theory",question:"Character-based methods differ from distance-based methods because they:",options:["Use only the total number of taxa.","Keep aligned sites as separate characters for tree evaluation.","Never use evolutionary assumptions.","Always produce rooted trees."],answer:1,optionExplanations:["The number of taxa is not enough to infer a tree.","Correct. Columns are evaluated separately rather than collapsed into distances.","Many character-based methods use explicit or implicit evolutionary models.","Rooting depends on the method and data; it is not guaranteed."]},
  {kind:"theory",question:"Maximum parsimony prefers the tree that:",options:["Has the longest branches.","Requires the fewest character-state changes.","Maximizes P(data | model).","Has the highest posterior probability."],answer:1,optionExplanations:["Branch length is not the parsimony criterion.","Correct. Parsimony minimizes total inferred changes.","That describes maximum likelihood.","That describes Bayesian inference."]},
  {kind:"theory",question:"A parsimony-informative site must contain:",options:["Only one state across all taxa.","At least two states, each represented in at least two taxa.","A unique state in exactly one taxon.","Only gaps and no nucleotides."],answer:1,optionExplanations:["That is an invariant site.","Correct. This is the classic definition emphasized in class and exam samples.","That is a singleton, variable but not parsimony-informative.","Gaps alone do not define informative phylogenetic signal."]},
  {kind:"theory",question:"What is an invariant site?",options:["A site where all taxa have the same state.","A site with four equally frequent states.","A site that defines a clade by itself.","A site removed by Bayesian inference."],answer:0,optionExplanations:["Correct. It varies in no taxon and cannot choose among topologies.","Four states would be variable, not invariant.","A clade-defining site would be a shared derived state pattern.","Bayesian inference does not define invariant sites this way."]},
  {kind:"theory",question:"NNI, SPR and TBR are best understood as:",options:["Alignment scoring matrices.","Tree rearrangement moves used to explore tree space.","Distance correction formulas.","Gap penalties."],answer:1,optionExplanations:["They operate on trees, not on pairwise alignment scoring.","Correct. They propose alternative topologies for scoring.","Distance corrections are models such as JC/K80.","Gap penalties belong to sequence alignment."]},
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
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div><h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p><div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><MiniTreeIcon active /><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div></div></div></div></section>
    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">workflow</div><Flow items={copy.flow} /></section>
    <section className="mt-8 grid gap-5 md:grid-cols-2">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky","red","green","amber"][index % 4]}>{body}</Card>)}</section>
    <MatrixDemo />
    <InformativeSites />
    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Section {index + 1}</div><h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div></section>)}
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />
    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Before moving on</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div></section>
    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

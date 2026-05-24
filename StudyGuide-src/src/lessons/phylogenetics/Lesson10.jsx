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
  eyebrow: "Lesson 10 · Support metrics",
  title: "Support metrics: confidence, robustness and conflict",
  subtitle: "A phylogenetic tree is a hypothesis. Support metrics tell us how much evidence, robustness or concordance there is behind each branch.",
  big: "Support values are not interchangeable. Bootstrap and jackknife ask whether the same split survives resampling; aLRT asks whether a branch is locally better than an alternative; posterior probabilities summarize Bayesian tree samples; concordance factors ask how many genes or sites agree with a branch.",
  tags: ["bootstrap", "TBE", "jackknife", "aLRT", "gCF", "sCF", "PP", "quartets", "IQ-TREE"],
  workflow: ["best/reference tree", "resampling or test", "replicate trees", "split search", "support value", "compare metrics"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Trees are hypotheses", "A phylogenetic tree should not be read as direct observation of the past. Support values are the way we ask how reliable a branch is."],
    ["Support is branch/split based", "Most support metrics are attached to internal branches because they represent bipartitions. Terminal tips do not need support: they are observed samples."],
    ["Bootstrap is robustness, not truth", "Bootstrap proportions tell how often a split survives perturbation of the data. They are not a direct probability that the branch is correct."],
    ["Metrics answer different questions", "BPs, TBE, aLRT, PP, gCF and sCF can disagree because they summarize different kinds of evidence."],
    ["Compare support types", "The safest interpretation comes from looking for consistent outcomes across metrics rather than trusting one number blindly."],
  ],
  sections: [
    ["1. Why support metrics exist", [
      "Phylogenetic inference gives us a topology, but the topology is still a hypothesis. A branch can appear in a best ML tree because the available data slightly favor it, because a few sites dominate the signal, or because the model/search procedure is imperfect.",
      "Support metrics add a second layer: they do not infer the original tree again from scratch conceptually, but ask how stable, strong or concordant each internal branch is under a defined procedure. The key unit is usually the split/bipartition induced by an internal branch."
    ]],
    ["2. Nonparametric bootstrap", [
      "Nonparametric bootstrap starts from an alignment of length n and randomly samples n columns with replacement. Some columns are sampled multiple times and others disappear. A tree is inferred from each bootstrapped alignment using the same method as for the original tree.",
      "For a node in the reference tree, the bootstrap proportion is the percentage of replicate trees that contain the same split. This measures robustness of the signal to resampling. It is usually displayed on the best tree or on a consensus of bootstrap trees."
    ]],
    ["3. What it means to search for a split", [
      "A split is not the drawing position of a node; it is the division of taxa produced by cutting an internal branch. For example, one branch might separate {A,B,C} from {D,E,F,G}. In each replicate tree, we ask whether that same bipartition exists.",
      "This is why support is naturally attached to internal nodes. If a split appears in all 100 bootstrap trees, its BP is 100%. If it appears in 33 of 100 trees, its BP is 33%. The value summarizes replicate frequency, not absolute truth."
    ]],
    ["4. Parametric bootstrap", [
      "Parametric bootstrap is model-based. First, a tree and substitution model are estimated from the original alignment. Then replicate alignments are simulated under that estimated model and tree. Trees are inferred from the simulated alignments, and branch frequencies are counted as in the ordinary bootstrap.",
      "The advantage is that it can be fast and model-aware. The danger is that the support values depend heavily on the model used to simulate the data. If the model is misspecified, the simulated replicates can reinforce a wrong view of the data."
    ]],
    ["5. Transfer Bootstrap Expectation (TBE)", [
      "Classical bootstrap is binary: a reference split is either present or absent in a replicate tree. This becomes harsh in very large trees. If one rogue taxon jumps to the wrong side of a deep clade, the whole clade can be scored as absent even if almost everything else is placed correctly.",
      "TBE replaces strict presence/absence with a gradual transfer distance. It asks how many tips must be moved from one side of a replicate split to recover the reference split. This is especially useful for massive taxon samplings and unstable tips."
    ]],
    ["6. Jackknife", [
      "Jackknife is related to bootstrap, but it deletes data instead of resampling with replacement. A jackknifed alignment is produced by randomly removing a proportion of columns, often around 50%, or equivalently by drawing sites without replacement.",
      "Then, as with bootstrap, a tree is inferred for each jackknifed alignment and the frequency of each split is counted. The important distinction is sampling with replacement for bootstrap versus deletion / sampling without replacement for jackknife."
    ]],
    ["7. approximate Likelihood Ratio Test (aLRT)", [
      "aLRT is a fast branch-specific support metric related to the ordinary likelihood ratio test. The classical LRT compares the log-likelihood of the current tree against a null hypothesis in which the branch of interest is collapsed.",
      "The approximation avoids expensive full optimization. In IQ-TREE style SH-aLRT, support is estimated through local alternatives around a branch, often using NNI-like configurations. It is fast and local, but that also means it may miss distant alternative topologies with higher likelihood."
    ]],
    ["8. Posterior Probabilities", [
      "Posterior probabilities come from Bayesian inference. After burn-in, the MCMC run has a posterior sample of trees. The posterior probability of a clade is the frequency with which its bipartition appears in those sampled trees.",
      "PP values range from 0 to 1: PP = 0.95 means the clade appeared in 95% of post-burn-in sampled trees. They often look higher than nonparametric bootstrap values and are sensitive to model choice and priors, so they should not be interpreted as the same thing as BPs."
    ]],
    ["9. Concordance Factors", [
      "Concordance factors ask a different question from ordinary support. Instead of asking whether resampling supports a branch, they quantify how much of the underlying gene or site evidence agrees with a branch in a reference tree.",
      "gCF is the percentage of decisive gene trees that contain the branch. sCF is the percentage of decisive informative sites that support the branch. High values indicate broad agreement; low values reveal conflict even when concatenated ML support is high."
    ]],
    ["10. Quartet logic behind CFs", [
      "For an internal branch, taxa around the branch can be reduced to quartets. A quartet has three possible unrooted resolutions. One resolution is concordant with the reference branch; the other two are discordant alternatives.",
      "This is why CFs are useful for diagnosing conflict. A branch may have high bootstrap because the concatenated matrix strongly prefers it, while gCF or sCF show that many genes or sites actually prefer one of the two alternative quartet resolutions."
    ]],
    ["11. Pitfalls and good practice", [
      "Different support values fail in different ways. Parametric supports depend on model specification; posterior probabilities depend on priors and Bayesian model assumptions; ordinary bootstrap can be overly harsh with rogue taxa; concordance factors can be affected by gene-tree error or low decisive information.",
      "The good practice message is to compare metrics. A clade supported by BP, SH-aLRT, PP and concordance factors is easier to trust. A clade with 100% bootstrap but low gCF/sCF should be interpreted as strongly supported by the concatenated data but biologically or statistically conflicted."
    ]],
    ["12. Practical workflow in IQ-TREE", [
      "The practical starts by inferring a reference tree with a fixed model such as GTR. Nonparametric bootstrap uses `-b`; ultrafast/parametric-style bootstrap uses `-B`; jackknife uses `-j` or `-J`; SH-aLRT uses `-alrt`.",
      "The practical then combines supports, inspects `.iqtree`, `.treefile` and `.splits.nex` outputs, and computes concordance factors by inferring a concatenated species tree, gene trees for each locus, and then running `--gcf` and `--scf` against the reference tree."
    ]],
  ],
  bootstrapTitle: "Bootstrap vs jackknife",
  bootstrapCards: [
    ["Bootstrap", "Sample n columns with replacement → same length alignment; duplicated and missing columns are possible."],
    ["Jackknife", "Delete / sample without replacement → shorter alignment; no column can be over-represented."],
    ["Shared question", "Does the same split appear after the data have been perturbed?"],
  ],
  metricsTitle: "Support metrics are not synonyms",
  metricsCards: [
    ["BP", "Split frequency across bootstrapped trees; robustness to resampling."],
    ["TBE", "Gradual bootstrap support based on transfer distance; useful with rogue taxa."],
    ["aLRT", "Fast branch-specific local likelihood test."],
    ["PP", "Frequency of a clade in the Bayesian posterior tree sample."],
    ["gCF", "Percentage of decisive gene trees supporting the branch."],
    ["sCF", "Percentage of decisive sites supporting the branch."],
  ],
  splitTitle: "Think in splits, not drawings",
  splitCaption: "A branch defines a bipartition. Support asks whether that bipartition, or a close version of it in TBE, appears again under a support procedure.",
  practicalTitle: "Practical focus",
  practicalCards: [
    ["Reference tree", "Infer a tree with IQ-TREE and a fixed model so support values can be attached to a concrete topology."],
    ["Bootstrap", "Use `-b 100` for standard nonparametric bootstrap; use `-B 1000` for ultrafast bootstrap."],
    ["Jackknife", "Use `-j` or `-J`; adjust deleted-site proportion with `--jack-prop`."],
    ["SH-aLRT", "Use `-alrt 1000`, often together with `-B 1000`, to compare support types on the same tree."],
    ["Concordance factors", "Use `--gcf` with locus trees and `--scf` with the alignment/partition data."],
    ["Posterior trees", "Use `iqtree -con mytrees -minsup 0.5 -bi 100` to summarize a posterior tree set."],
  ],
  takeaways: [
    "A phylogenetic tree is a hypothesis; support values quantify confidence or agreement around branches.",
    "Nonparametric bootstrap resamples alignment columns with replacement and counts split frequencies.",
    "Parametric bootstrap simulates alignments from an estimated model and is highly model-dependent.",
    "TBE is designed to soften the all-or-nothing behavior of classical bootstrap in large trees with rogue taxa.",
    "Jackknife deletes data rather than duplicating sampled columns.",
    "aLRT is fast and local; it measures branch-specific likelihood support, not resampling robustness.",
    "Posterior probabilities come from Bayesian posterior tree samples and are not equivalent to bootstrap values.",
    "gCF and sCF expose gene/site concordance and discordance behind a reference branch.",
  ],
  checklist: [
    "I can explain why trees need support metrics.",
    "I can define a split/bipartition and connect it to an internal branch.",
    "I can distinguish bootstrap from jackknife.",
    "I can distinguish nonparametric and parametric bootstrap.",
    "I can explain why TBE helps with rogue taxa in large trees.",
    "I can describe what aLRT compares.",
    "I can interpret posterior probability as clade frequency in post-burn-in trees.",
    "I can define gCF and sCF.",
    "I can explain why high bootstrap and low concordance factors can coexist.",
    "I can identify the IQ-TREE flags used in the practical."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 10 · Métricas de soporte",
  title: "Métricas de soporte: confianza, robustez y conflicto",
  subtitle: "Un árbol filogenético es una hipótesis. Las métricas de soporte nos dicen cuánta evidencia, robustez o concordancia hay detrás de cada rama.",
  big: "Las métricas de soporte no son intercambiables. Bootstrap y jackknife preguntan si el mismo split sobrevive al remuestreo; aLRT pregunta si una rama es localmente mejor que una alternativa; las probabilidades posteriores resumen árboles bayesianos; los concordance factors preguntan cuántos genes o sitios están de acuerdo con una rama.",
  workflow: ["árbol de referencia", "remuestreo o test", "árboles replicados", "búsqueda de splits", "valor de soporte", "comparar métricas"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo se organiza la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["Los árboles son hipótesis", "Un árbol filogenético no es observación directa del pasado. Los valores de soporte son la forma de preguntar qué tan confiable es una rama."],
    ["El soporte se piensa como rama/split", "La mayoría de métricas se asignan a ramas internas porque representan biparticiones. Las puntas terminales no necesitan soporte: son muestras observadas."],
    ["Bootstrap es robustez, no verdad", "Las bootstrap proportions indican cuántas veces un split sobrevive a una perturbación de los datos. No son una probabilidad directa de que la rama sea verdadera."],
    ["Cada métrica responde otra pregunta", "BPs, TBE, aLRT, PP, gCF y sCF pueden discrepar porque resumen evidencia distinta."],
    ["Conviene comparar soportes", "La interpretación más segura aparece cuando diferentes métricas dan resultados consistentes, no cuando se cree ciegamente en un solo número."],
  ],
  bootstrapTitle: "Bootstrap vs jackknife",
  metricsTitle: "Las métricas de soporte no son sinónimos",
  splitTitle: "Piensa en splits, no en dibujos",
  splitCaption: "Una rama define una bipartición. El soporte pregunta si esa bipartición, o una versión cercana en TBE, vuelve a aparecer bajo un procedimiento de soporte.",
  practicalTitle: "Foco de la práctica",
  takeaways: [
    "Un árbol filogenético es una hipótesis; los soportes cuantifican confianza o acuerdo alrededor de ramas.",
    "El bootstrap no paramétrico remuestrea columnas con reemplazo y cuenta frecuencias de splits.",
    "El bootstrap paramétrico simula alineamientos desde un modelo estimado y depende mucho de ese modelo.",
    "TBE suaviza el comportamiento todo-o-nada del bootstrap clásico en árboles grandes con rogue taxa.",
    "Jackknife elimina datos en vez de duplicar columnas muestreadas.",
    "aLRT es rápido y local; mide soporte likelihood de rama, no robustez por remuestreo.",
    "Las posterior probabilities vienen de muestras posteriores bayesianas y no equivalen al bootstrap.",
    "gCF y sCF muestran concordancia/discordancia de genes y sitios detrás de una rama.",
  ],
  checklist: [
    "Puedo explicar por qué los árboles necesitan métricas de soporte.",
    "Puedo definir un split/bipartición y conectarlo con una rama interna.",
    "Puedo distinguir bootstrap de jackknife.",
    "Puedo distinguir bootstrap no paramétrico y paramétrico.",
    "Puedo explicar por qué TBE ayuda con rogue taxa en árboles grandes.",
    "Puedo describir qué compara aLRT.",
    "Puedo interpretar PP como frecuencia de clado en árboles post-burn-in.",
    "Puedo definir gCF y sCF.",
    "Puedo explicar por qué pueden coexistir bootstrap alto y CF bajo.",
    "Puedo identificar los flags de IQ-TREE usados en la práctica."
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۰ · معیارهای پشتیبانی",
  title: "معیارهای پشتیبانی: اطمینان، استحکام و تعارض",
  subtitle: "درخت فیلوژنتیک یک فرضیه است؛ معیارهای پشتیبانی نشان می‌دهند هر شاخه چقدر شواهد یا هم‌خوانی دارد.",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "مسیر درس",
  emphasisTitle: "نکات مورد تأکید استاد",
  checklistTitle: "پیش از ادامه",
  section: "بخش",
  bootstrapTitle: "Bootstrap در برابر jackknife",
  metricsTitle: "معیارهای پشتیبانی مترادف نیستند",
  splitTitle: "به split فکر کن، نه فقط شکل درخت",
  practicalTitle: "بخش عملی",
};

const c = { en: baseEn, es, fa };

function Card({ title, children, tone = "stone" }) {
  return <div className={`rounded-3xl border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}>
    <h3 className="text-base font-black tracking-tight">{title}</h3>
    <p className="mt-2 text-sm font-semibold leading-7 opacity-85">{children}</p>
  </div>;
}

function Flow({ items }) {
  return <div className="flex flex-wrap items-center gap-2">
    {items.map((item, index) => <React.Fragment key={item}>
      <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700">{item}</div>
      {index < items.length - 1 && <span className="text-lg font-black text-red-500">→</span>}
    </React.Fragment>)}
  </div>;
}

function BootstrapBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">resampling logic</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.bootstrapTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.bootstrapCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "amber", "green"][index]}>{body}</Card>)}
    </div>
    <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200 bg-stone-950 p-5 text-white">
      <div className="grid gap-3 text-xs font-mono md:grid-cols-2">
        <div>
          <div className="mb-2 font-black uppercase tracking-[0.18em] text-red-200">original columns</div>
          <div className="rounded-2xl bg-white/10 p-3">1 2 3 4 5 6 7 8 9 10</div>
        </div>
        <div>
          <div className="mb-2 font-black uppercase tracking-[0.18em] text-red-200">bootstrap sample</div>
          <div className="rounded-2xl bg-white/10 p-3">3 3 8 1 10 4 4 6 2 8</div>
        </div>
      </div>
    </div>
  </section>;
}

function SplitBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">bipartitions</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-red-950">{copy.splitTitle}</h2>
    <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-red-950/80">{copy.splitCaption}</p>
    <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl border border-red-100 bg-white p-5">
        <svg viewBox="0 0 420 230" className="h-64 w-full">
          <line x1="70" y1="115" x2="185" y2="115" stroke="#57534e" strokeWidth="5" />
          <line x1="185" y1="115" x2="290" y2="55" stroke="#57534e" strokeWidth="5" />
          <line x1="185" y1="115" x2="290" y2="175" stroke="#57534e" strokeWidth="5" />
          <line x1="290" y1="55" x2="360" y2="35" stroke="#57534e" strokeWidth="4" />
          <line x1="290" y1="55" x2="360" y2="75" stroke="#57534e" strokeWidth="4" />
          <line x1="290" y1="175" x2="360" y2="145" stroke="#57534e" strokeWidth="4" />
          <line x1="290" y1="175" x2="360" y2="205" stroke="#57534e" strokeWidth="4" />
          <circle cx="185" cy="115" r="11" fill="#dc2626" />
          <text x="25" y="120" className="fill-stone-700 text-sm font-black">root</text>
          <text x="368" y="40" className="fill-stone-900 text-sm font-black">A</text>
          <text x="368" y="80" className="fill-stone-900 text-sm font-black">B</text>
          <text x="368" y="150" className="fill-stone-900 text-sm font-black">C</text>
          <text x="368" y="210" className="fill-stone-900 text-sm font-black">D</text>
          <text x="194" y="104" className="fill-red-700 text-xs font-black">cut here</text>
        </svg>
      </div>
      <div className="grid content-center gap-4">
        <Card title="Reference split" tone="red">AB | CD</Card>
        <Card title="Classical BP" tone="sky">Does the replicate tree contain exactly AB | CD? yes/no.</Card>
        <Card title="TBE" tone="green">If not exact, how many tips must be transferred to recover the reference split?</Card>
      </div>
    </div>
  </section>;
}

function MetricsBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">compare, do not collapse</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.metricsTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {copy.metricsCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "green", "amber", "purple", "red", "stone"][index % 6]}>{body}</Card>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">IQ-TREE support practical</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-red-950">{copy.practicalTitle}</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {copy.practicalCards.map(([title, body]) => <div key={title} className="rounded-3xl border border-red-100 bg-white p-5">
        <div className="text-sm font-black text-red-900">{title}</div>
        <p className="mt-2 text-sm font-semibold leading-7 text-stone-700">{body}</p>
      </div>)}
    </div>
  </section>;
}

function Takeaways({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">takeaways</div>
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      {copy.takeaways.map(item => <div key={item} className="rounded-3xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{item}</div>)}
    </div>
  </section>;
}

const quizEn = [
  {
    kind: "theory",
    question: "What is the main reason support metrics are needed in phylogenetics?",
    options: ["Phylogenetic trees are hypotheses that need confidence assessment", "Support metrics replace the need for alignments", "Support values identify species names automatically", "Support metrics convert unrooted trees into chronograms"],
    answer: 0,
    explanation: "A phylogenetic tree is an inferred hypothesis, so support metrics evaluate how reliable its branches are under specific procedures.",
    optionExplanations: ["Correct. Support metrics quantify confidence, robustness or concordance for inferred branches.", "Alignments are still the input for most analyses.", "Taxon labels are not inferred by support metrics.", "Rooting and dating are separate tasks."],
  },
  {
    kind: "theory",
    question: "In nonparametric bootstrap, how is a bootstrap alignment generated?",
    options: ["By sampling alignment columns with replacement", "By deleting every third taxon", "By simulating a new alignment from an estimated model", "By sampling trees from a Bayesian posterior"],
    answer: 0,
    explanation: "Nonparametric bootstrap samples columns with replacement until a replicate alignment of length n is formed.",
    optionExplanations: ["Correct. Columns may appear multiple times or not at all.", "Taxa are not systematically deleted in the standard bootstrap.", "That describes parametric bootstrap.", "That describes Bayesian posterior tree sampling."],
  },
  {
    kind: "theory",
    question: "A bootstrap proportion of 80% for a branch means:",
    options: ["The branch appeared in 80% of bootstrap replicate trees", "The branch has an 80% chance of being true in an absolute sense", "80% of taxa are outgroups", "The alignment has 80% GC content"],
    answer: 0,
    explanation: "Bootstrap proportions count how often a split appears among replicate trees.",
    optionExplanations: ["Correct. It is a split frequency across bootstrap trees.", "Bootstrap is not a direct probability of truth.", "Outgroups are unrelated to this value.", "GC content is a compositional statistic, not branch support."],
  },
  {
    kind: "theory",
    question: "Why can parametric bootstrap be misleading if the evolutionary model is misspecified?",
    options: ["Because simulated replicates are generated from that model", "Because it samples columns without replacement", "Because it ignores the original tree entirely", "Because it cannot produce branch support values"],
    answer: 0,
    explanation: "Parametric bootstrap simulates data under the estimated model, so wrong assumptions can bias the support distribution.",
    optionExplanations: ["Correct. The model drives the simulated alignments.", "Sampling without replacement describes jackknife.", "The estimated tree is part of the simulation procedure.", "It does produce support values."],
  },
  {
    kind: "theory",
    question: "What problem is Transfer Bootstrap Expectation designed to reduce?",
    options: ["The all-or-nothing penalty of classical bootstrap in large trees with rogue taxa", "The need to align sequences", "The problem of choosing a substitution model for proteins", "The conversion of posterior trees into priors"],
    answer: 0,
    explanation: "TBE gives partial credit based on transfer distance when a split is nearly recovered but a few tips move.",
    optionExplanations: ["Correct. It is especially useful for large phylogenies with unstable tips.", "TBE is applied after tree inference, not alignment construction.", "Protein model choice is a different topic.", "TBE is not a Bayesian prior procedure."],
  },
  {
    kind: "theory",
    question: "How does jackknife differ from bootstrap in the basic resampling step?",
    options: ["Jackknife deletes or samples without replacement; bootstrap samples with replacement", "Jackknife uses posterior probabilities only", "Jackknife requires gene trees but no alignment", "Jackknife is always model-free while bootstrap is always Bayesian"],
    answer: 0,
    explanation: "Jackknife removes a subset of sites; bootstrap resamples sites with replacement.",
    optionExplanations: ["Correct. This is the clean exam distinction.", "Posterior probabilities are Bayesian support values.", "Jackknife starts from an alignment, like bootstrap.", "Both can have variants; the key distinction is replacement versus deletion."],
  },
  {
    kind: "theory",
    question: "What does aLRT evaluate?",
    options: ["Branch-specific likelihood support, often through local alternatives", "Gene expression levels in transcriptomes", "Alignment similarity before trimming", "The number of posterior trees after burn-in"],
    answer: 0,
    explanation: "aLRT is a fast approximate likelihood ratio support test for individual branches.",
    optionExplanations: ["Correct. It is local and branch-specific.", "Expression levels are unrelated to branch support.", "Alignment similarity is not the aLRT target.", "Posterior tree count belongs to Bayesian summaries."],
  },
  {
    kind: "theory",
    question: "Posterior probability support is calculated as:",
    options: ["The frequency of a clade in post-burn-in Bayesian sampled trees", "The proportion of columns sampled with replacement", "The distance between two sequences", "The number of gaps in an alignment"],
    answer: 0,
    explanation: "PP is the clade frequency in the posterior tree sample after burn-in.",
    optionExplanations: ["Correct. This comes from Bayesian MCMC output.", "That is bootstrap resampling logic.", "Distances are used in distance-based methods.", "Gaps are alignment features, not posterior probabilities."],
  },
  {
    kind: "theory",
    question: "What does gCF measure?",
    options: ["The percentage of decisive gene trees that contain a branch", "The percentage of GC sites in a gene", "The likelihood ratio of two local trees", "The proportion of invariant sites"],
    answer: 0,
    explanation: "Gene concordance factor measures support for a branch across gene trees.",
    optionExplanations: ["Correct. gCF summarizes gene-tree concordance.", "GC content is composition, not gCF.", "Likelihood ratios belong to aLRT/LRT.", "Invariant sites are model/alignment features."],
  },
  {
    kind: "theory",
    question: "What does a low sCF value on a branch suggest?",
    options: ["Few decisive sites support that branch or site-level conflict is high", "The branch is necessarily absent from the ML tree", "The branch length must be zero", "The tree has no terminal taxa"],
    answer: 0,
    explanation: "sCF reports site concordance, so low values warn about weak or conflicting site support.",
    optionExplanations: ["Correct. Low sCF indicates limited site-level agreement.", "The branch can still be present in the reference tree.", "Branch length is not determined by sCF alone.", "Terminal taxa are unrelated."],
  },
  {
    kind: "practical",
    question: "In the practical, which IQ-TREE option invokes standard nonparametric bootstrap replicates?",
    options: ["-b", "-B", "--gcf", "-con"],
    answer: 0,
    explanation: "The practical uses `-b 100` for standard nonparametric bootstrap.",
    optionExplanations: ["Correct. `-b` specifies the number of standard bootstrap replicates.", "`-B` invokes ultrafast bootstrap in IQ-TREE.", "`--gcf` calculates gene concordance factors.", "`-con` summarizes trees into a consensus."],
  },
  {
    kind: "practical",
    question: "Which IQ-TREE option is used for ultrafast bootstrap in the practical?",
    options: ["-B", "-j", "-alrt", "--scf"],
    answer: 0,
    explanation: "IQ-TREE uses `-B`, typically with at least 1000 replicates, for ultrafast bootstrap.",
    optionExplanations: ["Correct. The practical uses `-B 1000`.", "`-j` is for nonparametric jackknife.", "`-alrt` is for SH-like aLRT.", "`--scf` computes site concordance factors."],
  },
  {
    kind: "practical",
    question: "What do `-j` and `-J` refer to in the support practical?",
    options: ["Nonparametric and parametric jackknife", "Two different outgroup rooting methods", "Two codon substitution models", "Two ways of converting FASTA into PHYLIP"],
    answer: 0,
    explanation: "The practical uses `-j` and `-J` for jackknife variants.",
    optionExplanations: ["Correct. They implement jackknife support workflows.", "Rooting is not the role of these flags.", "Codon models are not specified by these flags.", "Format conversion is done by tools such as AMAS."],
  },
  {
    kind: "practical",
    question: "Why run `-B 1000 -alrt 1000` together?",
    options: ["To compare different support metrics on the same ML tree", "To remove all gaps before inference", "To infer orthogroups from proteins", "To force all support values to be identical"],
    answer: 0,
    explanation: "Combining ultrafast bootstrap and SH-aLRT makes it easy to compare support types across the tree.",
    optionExplanations: ["Correct. Different support metrics may agree or conflict.", "Gap removal is an alignment-filtering step.", "Orthogroups are inferred before tree building.", "Different metrics are not expected to be identical."],
  },
  {
    kind: "practical",
    question: "What inputs are needed to compute gCF with IQ-TREE in the practical?",
    options: ["A reference tree and a set of locus gene trees", "Only a raw unaligned FASTA file", "Only a Bayesian prior file", "A matrix of trait correlations"],
    answer: 0,
    explanation: "The practical computes gCF by comparing locus trees against a reference species/concatenated tree.",
    optionExplanations: ["Correct. `--gcf loci.treefile` is used with a reference tree.", "Unaligned FASTA is not enough for gCF.", "Priors are not the input for gCF.", "Trait correlation matrices belong to comparative methods, not support factors."],
  },
];

export const lesson10Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function SupportMetricsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = c[lang] || c.en;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return <main dir={dir} className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
    <LessonResources lang={lang} lessonNo={lessonNo} />

    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-7 md:p-10 lg:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
          <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
            <MiniTreeIcon active />
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{copy.bigPicture}</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.workflowTitle}</div>
      <Flow items={copy.workflow} />
    </section>

    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "red", "green", "amber", "purple"][index % 5]}>{body}</Card>)}
    </section>

    <BootstrapBlock copy={copy} />
    <SplitBlock copy={copy} />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <MetricsBlock copy={copy} />
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div>
    </section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

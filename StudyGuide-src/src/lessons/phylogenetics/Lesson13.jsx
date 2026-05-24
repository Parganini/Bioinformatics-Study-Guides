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
  eyebrow: "Lesson 13 · Biases in phylogenetics",
  title: "Biases in phylogenetics: when more data are not always the solution",
  subtitle: "This lesson separates random error from model-driven error, then follows the main artifacts that can mislead phylogenetic inference: saturation, long branch attraction and compositional heterogeneity.",
  big: "Stochastic bias is a data-amount problem: noise dominates because there are too few informative characters. Systematic bias is a model-fit problem: the data violate the assumptions of the method, so adding more data can make the wrong answer look more strongly supported.",
  tags: ["stochastic bias", "systematic bias", "SRH assumptions", "saturation", "long branch attraction", "composition heterogeneity", "recoding", "LMAP"],
  workflow: ["error source", "stochastic bias", "systematic bias", "SRH violations", "saturation", "LBA", "composition", "diagnostics"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Do not confuse weak support with systematic error", "Stochastic bias often gives unstable or weakly supported relationships because the dataset is too small or has too few informative sites."],
    ["More data can be dangerous", "For stochastic error, more genes usually help. For systematic error, more biased data can reinforce the wrong topology with high support."],
    ["SRH assumptions are the core shortcut", "Stationarity, reversibility and homogeneity make inference tractable, but real datasets often violate them with shifts in rate or composition."],
    ["Saturation hides history", "If many substitutions occur at the same site, the observed difference stops tracking the true number of changes."],
    ["The practical makes bias visible", "By forcing AT-rich changes in two octopus sequences, the notebook turns long-branch attraction into something you can see on a tree."],
  ],
  sections: [
    ["1. Why this lesson matters", [
      "Earlier lessons treated discordance as a possible biological signal: ILS, HGT or introgression can make gene trees differ from the species tree. This lesson focuses on another kind of discordance: technical or methodological failure.",
      "A tree can be wrong because the data are too weak, or because the method is confidently fitting the wrong model to biased data. Those two failures require very different solutions."
    ]],
    ["2. Stochastic bias: not enough signal", [
      "Stochastic bias is random error introduced by limited data. The true phylogenetic signal exists, but it is overwhelmed by sampling noise, few informative sites, short alignments, too few genes, or high variance in the substitution process.",
      "The mitigation is mostly to increase useful information: longer alignments, more loci, more informative characters, better taxon sampling, filtering of noisy or uninformative regions, and support metrics to identify uncertain branches."
    ]],
    ["3. How much data is enough?", [
      "The slides give ballpark numbers rather than universal rules: dozens of genes may resolve shallow/recent divergences, 100–500 genes can reduce stochastic error at intermediate depths, and thousands of genes are often used in genome-scale studies.",
      "The professor stressed that these numbers are context-dependent. The required data depend on divergence depth, rate of evolution, taxon sampling, noise, and how difficult the historical question is."
    ]],
    ["4. Systematic bias: the model is wrong", [
      "Systematic bias occurs when the assumptions of the inference method do not match the evolutionary process that generated the data. Unlike stochastic bias, it does not disappear just because you add more data.",
      "This is why systematic bias is dangerous: a wrong model can repeatedly interpret the same biased signal in the same wrong way, producing a highly supported but incorrect topology."
    ]],
    ["5. SRH assumptions", [
      "Many standard sequence-evolution models rely on SRH assumptions. Stationarity means nucleotide or amino-acid frequencies remain constant through time. Reversibility means the process can be modeled the same forward and backward in time. Homogeneity means the same model applies across lineages.",
      "These assumptions are useful simplifications, but real datasets often violate them. The practical therefore includes matched-pairs tests of symmetry in IQ-TREE to detect violations of stationarity and homogeneity."
    ]],
    ["6. Saturation: multiple hits erase signal", [
      "Saturation happens when multiple substitutions accumulate at the same site. If a site changes A→G→C→A, the observed state may hide the true number of historical changes.",
      "The consequences are underestimation of divergence, increased homoplasy, and loss of phylogenetic signal at deeper timescales. Transitions often saturate faster than transversions because they are more frequent."
    ]],
    ["7. Saturation depends on marker and timescale", [
      "A fast-evolving marker is not always bad; it can be useful for shallow divergences. The problem appears when the marker evolves too quickly relative to the timescale studied.",
      "The reverse problem also exists: a highly conserved gene can be too slow for shallow questions and produce mostly invariant sites. The practical point is to match marker speed to evolutionary depth."
    ]],
    ["8. Mitigating saturation", [
      "Possible mitigations include choosing less saturated genes or regions, using amino-acid alignments instead of nucleotide alignments for deep phylogenies, and applying models that account for multiple hits and rate heterogeneity.",
      "Recoding is another strategy. Amino acids can be collapsed into broader biochemical categories, such as Dayhoff6 or SR4, and nucleotides can be recoded as R/Y. This reduces the alphabet and can reduce misleading compositional or saturation signal."
    ]],
    ["9. Rate heterogeneity and long branch attraction", [
      "Long branch attraction occurs when lineages with many substitutions are incorrectly grouped together because they independently accumulate similar states. The problem is especially severe when long evolutionary times and uneven rates create many parallel changes.",
      "Parsimony is particularly vulnerable because it tends to prefer the tree requiring the fewest apparent changes, even if those similarities are homoplastic. Better-fitting ML/BI models, gamma rate heterogeneity, CAT/profile mixture models, and richer taxon sampling can reduce the problem."
    ]],
    ["10. Breaking long branches", [
      "One practical mitigation for LBA is to add intermediate taxa. If a long branch is split into shorter branches, the model has a better chance of reconstructing where changes occurred and fewer convergent changes are interpreted as shared ancestry.",
      "If the bias is extreme and cannot be modeled, excluding a problematic long-branched taxon or a problematic partition can sometimes be justified, but only after diagnosing the issue carefully."
    ]],
    ["11. Compositional heterogeneity", [
      "Compositional heterogeneity means that taxa differ strongly in nucleotide or amino-acid frequencies. If a model assumes homogeneous composition, taxa may cluster because they share similar GC content or amino-acid composition rather than ancestry.",
      "Common causes include mutation bias, thermophily, parasitism, endosymbiosis, and metabolic constraints. The Enterobacterales practical uses endosymbionts because they often have accelerated substitution rates and strong AT bias."
    ]],
    ["12. Mitigating compositional bias", [
      "Mitigations include adding taxa that break long branches, using profile mixture models that allow different sites to have different equilibrium profiles, recoding amino acids or nucleotides, and excluding extreme taxa or partitions when they distort the topology.",
      "The key is not to assume that every dataset can be saved by one default model. The professor framed this as a modeling problem: understand the idiosyncrasies of your data, then choose an analysis that matches them better."
    ]],
    ["13. Interpreting a saturation plot", [
      "At low divergence, observed differences increase roughly linearly with corrected/model-based distance. At high divergence, observed differences plateau because repeated substitutions at the same sites are no longer visible.",
      "A useful warning sign is when a model-based distance continues increasing but the raw observed distance stops increasing. That separation indicates that simple counting is no longer tracking the true amount of evolutionary change."
    ]],
    ["14. Practical part I: forcing bias into an alignment", [
      "The first exercise opens bias.aln in AliView. Two duplicated sequences, Ptetracirrhus_bias and Ovulgaris_bias, are edited by adding many As and Ts, simulating both accelerated evolution and AT-prone directional change.",
      "A quick tree is then inferred with iqtree -s data/example_bias/bias.aln -fast. The goal is not realism; it is to make the logic of long branch attraction tangible by seeing whether biased long branches move together."
    ]],
    ["15. Practical part II: real-life bias and model choice", [
      "The second exercise concatenates Enterobacterales alignments with AMAS and compares a simple LG+G4 inference with a profile mixture model such as LG+C10+G4. The question is whether endosymbionts cluster differently under a model that handles profile heterogeneity better.",
      "Then the practical uses RS4 recoding, matched-pairs symmetry tests, and likelihood mapping. These steps ask three different questions: can recoding reduce bias, which alignments reject SRH assumptions, and which genes are least phylogenetically informative."
    ]],
  ],
  compareTitle: "Stochastic vs systematic bias",
  compareRows: [
    ["Cause", "Limited data / weak signal", "Incorrect model or violated assumptions"],
    ["Behavior with more data", "Usually decreases", "Can persist or become more strongly supported"],
    ["Typical symptom", "Low support, instability, unresolved branches", "High support for a wrong or biased topology"],
    ["Main mitigation", "More informative characters and better sampling", "Better models, diagnostics, recoding, subsampling or excluding problematic data"],
  ],
  diagnosticTitle: "Practical diagnostics and what they ask",
  diagnostics: [
    ["AT-biased manual edit", "Can artificial parallel change make unrelated long branches look similar?"],
    ["LG+G4 vs LG+C10+G4", "Does a profile mixture model change the placement of biased taxa?"],
    ["RS4 recoding", "Does reducing the amino-acid alphabet reduce saturation/compositional signal?"],
    ["SymPval / MarPval / IntPval", "Do alignments reject stationarity, homogeneity, or both?"],
    ["LMAP", "Does a gene contain enough quartet signal, or is it mostly unresolved/noisy?"],
  ],
  saturationTitle: "Saturation plot intuition",
  saturationLabels: ["Early divergence", "Linear signal", "Plateau", "Saturated signal"],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["bias.aln", "Edit two duplicated octopus sequences by adding many A/T states to simulate fast and directional change."],
    ["iqtree -fast", "Infer a quick tree and inspect whether the biased long branches become artificially close."],
    ["AMAS concat", "Concatenate many Enterobacterales alignments into one amino-acid supermatrix."],
    ["LG vs LG+C10", "Compare a simple empirical model against a profile mixture model on a biased bacterial dataset."],
    ["RS4 recoding", "Collapse amino acids into four biochemical categories and infer a tree from the recoded alignment."],
    ["--symtest-only", "Use matched-pairs tests to detect violations of stationarity and homogeneity."],
    ["LMAP", "Run likelihood mapping with 5000 quartets to identify poorly informative alignments."],
  ],
  takeaways: [
    "Stochastic bias is caused by limited data or weak signal; systematic bias is caused by model violations.",
    "More data helps stochastic bias but can make systematic bias more convincing.",
    "SRH means stationarity, reversibility and homogeneity.",
    "Saturation occurs when multiple substitutions at a site hide the true number of changes.",
    "Transitions often saturate faster than transversions.",
    "Long branch attraction groups long branches because of convergent or unmodeled changes, not ancestry.",
    "Parsimony is especially vulnerable to LBA.",
    "Compositional heterogeneity can group taxa by nucleotide or amino-acid frequencies.",
    "Endosymbionts are useful examples because they often show AT bias and accelerated rates.",
    "Profile mixture models, recoding and taxon sampling are tools for reducing systematic bias.",
    "IQ-TREE symmetry tests diagnose stationarity and homogeneity violations.",
    "Likelihood mapping helps distinguish informative genes from noisy or unresolved ones."
  ],
  checklist: [
    "I can distinguish stochastic and systematic bias.",
    "I can explain why adding more data can worsen systematic bias.",
    "I can define stationarity, reversibility and homogeneity.",
    "I can explain saturation and why it underestimates divergence.",
    "I know why marker speed must match divergence depth.",
    "I can describe long branch attraction and why parsimony is vulnerable.",
    "I can explain how adding intermediate taxa can break long branches.",
    "I can define compositional heterogeneity and name likely causes.",
    "I can explain what amino-acid or nucleotide recoding tries to achieve.",
    "I can interpret SymPval, MarPval and IntPval at a basic level.",
    "I can describe why LG+C10 may outperform a single-profile LG model on biased data.",
    "I can explain what LMAP is used for in the practical."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 13 · Sesgos en filogenética",
  title: "Sesgos en filogenética: cuando más datos no siempre son la solución",
  subtitle: "Esta lección separa el error aleatorio del error producido por un modelo inadecuado, y sigue los artefactos principales que pueden engañar una inferencia filogenética: saturación, long branch attraction y heterogeneidad composicional.",
  big: "El sesgo estocástico es un problema de cantidad de información: el ruido domina porque hay pocos caracteres informativos. El sesgo sistemático es un problema de ajuste del modelo: los datos violan los supuestos del método, por lo que añadir más datos puede hacer que una respuesta incorrecta parezca mejor soportada.",
  workflow: ["fuente del error", "sesgo estocástico", "sesgo sistemático", "violaciones SRH", "saturación", "LBA", "composición", "diagnóstico"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo encaja la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["No confundas bajo soporte con sesgo sistemático", "El sesgo estocástico suele dar relaciones inestables o con bajo soporte porque el dataset es pequeño o tiene pocos sitios informativos."],
    ["Más datos puede ser peligroso", "Para el error estocástico, más genes suelen ayudar. Para el error sistemático, más datos sesgados pueden reforzar la topología equivocada."],
    ["SRH es el atajo central", "Stationarity, reversibility y homogeneity hacen manejable la inferencia, pero los datos reales suelen violarlas con cambios de tasa o composición."],
    ["La saturación esconde historia", "Si muchas sustituciones ocurren en el mismo sitio, la diferencia observada deja de reflejar el número real de cambios."],
    ["La práctica vuelve visible el sesgo", "Al forzar cambios ricos en A/T en dos secuencias de pulpo, el notebook convierte long branch attraction en algo que se puede ver en un árbol."],
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۳ · سوگیری‌ها در تبارزایی",
  title: "سوگیری‌ها در تبارزایی: وقتی دادهٔ بیشتر همیشه راه‌حل نیست",
  subtitle: "این درس خطای تصادفی را از خطای ناشی از مدل نادرست جدا می‌کند و سه خطر مهم را دنبال می‌کند: اشباع، جذب شاخه‌های بلند، و ناهمگنی ترکیب توالی‌ها.",
  big: "سوگیری تصادفی زمانی رخ می‌دهد که دادهٔ informative کافی نداریم. سوگیری سیستماتیک زمانی رخ می‌دهد که فرض‌های مدل نقض می‌شوند؛ در این حالت دادهٔ بیشتر می‌تواند جواب غلط را با پشتیبانی بالاتر نشان دهد.",
  workflow: ["منبع خطا", "سوگیری تصادفی", "سوگیری سیستماتیک", "نقض SRH", "اشباع", "LBA", "ترکیب", "تشخیص"],
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

function BiasTable({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">core contrast</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.compareTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200">
      <div className="grid grid-cols-[1fr_1.15fr_1.15fr] bg-stone-950 text-sm font-black text-white">
        <div className="p-4">Axis</div><div className="border-l border-white/10 p-4">Stochastic</div><div className="border-l border-white/10 p-4">Systematic</div>
      </div>
      {copy.compareRows.map(([axis, stochastic, systematic]) => <div key={axis} className="grid grid-cols-[1fr_1.15fr_1.15fr] border-t border-stone-200 bg-[#fffaf0] text-sm font-semibold leading-6 text-stone-700">
        <div className="p-4 font-black text-stone-950">{axis}</div><div className="border-l border-stone-200 p-4">{stochastic}</div><div className="border-l border-stone-200 p-4">{systematic}</div>
      </div>)}
    </div>
  </section>;
}

function SaturationPlot({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-[#fffaf0] p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">visual intuition</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.saturationTitle}</h2>
    <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
        <svg viewBox="0 0 620 330" className="h-auto w-full" role="img" aria-label="Saturation plot sketch">
          <line x1="70" y1="270" x2="570" y2="270" stroke="#292524" strokeWidth="3" />
          <line x1="70" y1="270" x2="70" y2="40" stroke="#292524" strokeWidth="3" />
          <text x="300" y="315" textAnchor="middle" className="fill-stone-700 text-[18px] font-bold">divergence / corrected distance</text>
          <text x="22" y="160" textAnchor="middle" transform="rotate(-90 22 160)" className="fill-stone-700 text-[18px] font-bold">observed differences</text>
          <path d="M80 265 C160 220, 240 175, 315 140 C395 108, 485 100, 560 98" fill="none" stroke="#b91c1c" strokeWidth="7" strokeLinecap="round" />
          <path d="M80 265 C150 235, 230 205, 320 170 C410 135, 495 105, 560 76" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" strokeDasharray="12 12" />
          <line x1="330" y1="70" x2="330" y2="270" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="8 8" />
          <text x="180" y="65" textAnchor="middle" className="fill-stone-900 text-[18px] font-black">{copy.saturationLabels[0]}</text>
          <text x="180" y="90" textAnchor="middle" className="fill-stone-600 text-[14px] font-bold">{copy.saturationLabels[1]}</text>
          <text x="455" y="65" textAnchor="middle" className="fill-stone-900 text-[18px] font-black">{copy.saturationLabels[2]}</text>
          <text x="455" y="90" textAnchor="middle" className="fill-stone-600 text-[14px] font-bold">{copy.saturationLabels[3]}</text>
          <circle cx="525" cy="100" r="7" fill="#b91c1c" />
          <text x="540" y="106" className="fill-red-800 text-[14px] font-black">raw / observed</text>
          <circle cx="525" cy="76" r="7" fill="#0f766e" />
          <text x="540" y="82" className="fill-emerald-800 text-[14px] font-black">model-corrected</text>
        </svg>
      </div>
      <div className="grid gap-3">
        {copy.sections[12][1].map((paragraph, index) => <div key={index} className="rounded-3xl border border-stone-200 bg-white p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}
      </div>
    </div>
  </section>;
}

function DiagnosticGrid({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">notebook bridge</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.diagnosticTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {copy.diagnostics.map(([title, body], index) => <Card key={title} title={title} tone={["red", "sky", "green", "amber", "purple"][index % 5]}>{body}</Card>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">practical commands</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.practicalTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {copy.practicalCards.map(([title, body], index) => <Card key={title} title={title} tone={["stone", "sky", "green", "amber", "purple", "red"][index % 6]}>{body}</Card>)}
    </div>
  </section>;
}

function Takeaways({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-xl shadow-stone-900/10 md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">exam memory</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">High-yield takeaways</h2>
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      {copy.takeaways.map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold leading-6 text-stone-100"><span className="mr-2 text-red-300">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
    </div>
  </section>;
}

const quizEn = [
  {
    kind: "theory",
    question: "Which statement best distinguishes stochastic bias from systematic bias?",
    options: ["Stochastic bias comes from limited signal; systematic bias comes from model violations", "Stochastic bias is caused only by wrong file names; systematic bias is always random", "Stochastic bias increases with every extra gene; systematic bias disappears automatically", "They are two names for the same kind of error"],
    answer: 0,
    explanation: "Stochastic bias is mainly a sampling/noise problem; systematic bias is a model-assumption problem.",
    optionExplanations: ["Correct. This is the central contrast of the lesson.", "File names can cause practical errors, not these conceptual biases.", "This reverses the main point: more data often helps stochastic bias but can reinforce systematic bias.", "They require different diagnoses and mitigation strategies."],
  },
  {
    kind: "theory",
    question: "Why can adding more data make systematic bias worse?",
    options: ["Because the wrong model keeps interpreting biased signal in the same wrong direction", "Because every extra gene is automatically uninformative", "Because likelihood cannot be calculated on long alignments", "Because systematic bias is just low bootstrap support"],
    answer: 0,
    explanation: "If the model is misspecified, more data can increase confidence in an incorrect topology.",
    optionExplanations: ["Correct. More data strengthens the biased pattern when the model cannot account for it.", "Extra genes can be useful; the issue is whether their signal violates model assumptions.", "Likelihood can be calculated on long alignments; computation may be heavier but that is not the conceptual problem.", "Systematic bias can produce high support for the wrong answer."],
  },
  {
    kind: "theory",
    question: "What do the SRH assumptions stand for?",
    options: ["Stationarity, reversibility and homogeneity", "Saturation, rooting and homology", "Substitution, recombination and heterozygosity", "Sampling, recoding and Hamming distance"],
    answer: 0,
    explanation: "SRH summarizes three major assumptions in many sequence-evolution models.",
    optionExplanations: ["Correct. Frequencies stable, process reversible, same model across branches.", "These are important concepts, but not the SRH acronym.", "These terms are biological/statistical concepts, not the SRH triad.", "These are practical ideas, not SRH assumptions."],
  },
  {
    kind: "theory",
    question: "What is saturation in sequence evolution?",
    options: ["Multiple substitutions occur at the same site, hiding the true number of changes", "Every site is perfectly conserved", "All branches have identical lengths", "A model has too few partitions"],
    answer: 0,
    explanation: "Saturation makes observed differences underestimate actual evolutionary change.",
    optionExplanations: ["Correct. Repeated hits erase historical information.", "Perfect conservation is invariant signal, not saturation.", "Equal branch lengths relate to clock-like behavior, not saturation.", "Under-partitioning can be a model issue, but saturation specifically concerns repeated substitutions."],
  },
  {
    kind: "theory",
    question: "Why do transitions often saturate faster than transversions?",
    options: ["They are biochemically more frequent", "They are impossible to model", "They only happen in proteins", "They always create stop codons"],
    answer: 0,
    explanation: "Because transitions occur more frequently, they reach the repeated-hit regime sooner.",
    optionExplanations: ["Correct. More frequent changes accumulate multiple hits faster.", "Substitution models can include transition/transversion differences.", "Transitions/transversions are nucleotide substitutions.", "Most transitions do not necessarily create stop codons."],
  },
  {
    kind: "theory",
    question: "What is long branch attraction?",
    options: ["Unrelated long branches cluster together because of convergent or unmodeled changes", "A method for rooting a tree with an outgroup", "A support metric based on posterior trees", "A form of perfect clock-like evolution"],
    answer: 0,
    explanation: "LBA is a systematic artifact where long branches appear falsely related.",
    optionExplanations: ["Correct. Similarity comes from excessive/parallel change, not shared ancestry.", "Outgroup rooting gives direction; it does not define LBA.", "Posterior probability is a Bayesian support metric.", "LBA is linked to rate heterogeneity, not perfect clock behavior."],
  },
  {
    kind: "theory",
    question: "Which method is especially vulnerable to long branch attraction?",
    options: ["Maximum parsimony", "Profile mixture Bayesian inference only", "Any method that uses an outgroup", "AMAS concatenation itself"],
    answer: 0,
    explanation: "Parsimony can interpret convergent states on long branches as shared derived characters.",
    optionExplanations: ["Correct. Parsimony lacks an explicit model to correct repeated hits effectively.", "Profile mixture methods are often used to mitigate heterogeneity, not singled out as the most vulnerable here.", "Using an outgroup is not the cause of LBA.", "AMAS is a concatenation tool, not an inference criterion."],
  },
  {
    kind: "theory",
    question: "What is compositional heterogeneity?",
    options: ["Different taxa have different nucleotide or amino-acid frequencies", "Every taxon has exactly the same GC content", "All genes have identical histories", "A bootstrap alignment has repeated columns"],
    answer: 0,
    explanation: "Compositional heterogeneity can cluster taxa by composition instead of ancestry.",
    optionExplanations: ["Correct. This violates homogeneous-composition assumptions.", "That would be compositional homogeneity.", "Gene history discordance is a different topic.", "Repeated columns describe bootstrap resampling, not composition heterogeneity."],
  },
  {
    kind: "theory",
    question: "Which scenario is a classic source of compositional bias in the practical?",
    options: ["Endosymbionts with accelerated rates and AT bias", "Slowly evolving histones used at deep timescales", "Perfectly balanced base frequencies in all taxa", "A completely invariant alignment"],
    answer: 0,
    explanation: "Endosymbiotic bacteria often show strong AT bias and fast evolution, making them useful examples of systematic bias.",
    optionExplanations: ["Correct. The Enterobacterales dataset exploits this issue.", "Slowly evolving histones can be uninformative at shallow scales but are not the practical's main compositional-bias example.", "Balanced frequencies would not create the stated bias.", "Invariant alignments lack signal but do not illustrate AT-biased long branches."],
  },
  {
    kind: "theory",
    question: "What is the goal of recoding approaches such as Dayhoff6, SR4 or R/Y?",
    options: ["Collapse states into broader categories to reduce saturation or compositional signal", "Create more nucleotide states than before", "Remove all phylogenetic signal", "Turn trees into distance matrices"],
    answer: 0,
    explanation: "Recoding reduces the alphabet and can dampen misleading fine-scale compositional or saturated variation.",
    optionExplanations: ["Correct. Recoding is a mitigation strategy for some systematic biases.", "Recoding usually reduces, not expands, the alphabet.", "The aim is to preserve useful signal while reducing misleading signal.", "Recoding transforms sequence states, not trees."],
  },
  {
    kind: "practical",
    question: "In the first practical exercise, why are As and Ts inserted into Ptetracirrhus_bias and Ovulgaris_bias?",
    options: ["To simulate accelerated, AT-prone change in two lineages", "To root the tree automatically", "To convert amino acids into codons", "To calculate RF distances"],
    answer: 0,
    explanation: "The manual edit creates a toy example of fast directional change that may induce long branch attraction.",
    optionExplanations: ["Correct. It is deliberately artificial but conceptually useful.", "Adding A/T states does not root a tree.", "The exercise edits an alignment; it is not a codon-conversion step.", "RF distance compares trees, not edited sequence states."],
  },
  {
    kind: "practical",
    question: "What does the command iqtree -s data/example_bias/bias.aln -fast do in the bias exercise?",
    options: ["Infers a quick tree from the edited alignment", "Runs a symmetry test only", "Concatenates all genes with AMAS", "Runs likelihood mapping on 5000 quartets"],
    answer: 0,
    explanation: "The command quickly infers a tree so you can inspect whether the biased sequences cluster unexpectedly.",
    optionExplanations: ["Correct. The point is visual inspection of the artifact.", "Symmetry tests use --symtest-only later in the practical.", "AMAS concatenation is a separate command.", "LMAP uses -lmap and -n 0."],
  },
  {
    kind: "practical",
    question: "Why compare LG+G4 with LG+C10+G4 on the Enterobacterales dataset?",
    options: ["To see whether a profile mixture model handles compositional/profile heterogeneity better than a single-profile model", "To test whether bootstrapping removes all bias", "To translate proteins into DNA", "To force every gene to have its own species tree"],
    answer: 0,
    explanation: "LG+C10+G4 allows multiple profiles and may reduce artifacts caused by biased amino-acid composition.",
    optionExplanations: ["Correct. This is the central model-comparison logic.", "Bootstrap assesses support; it does not automatically remove systematic bias.", "The data remain amino-acid alignments.", "This is still tree inference from a concatenated alignment, not gene-tree summary inference."],
  },
  {
    kind: "practical",
    question: "In IQ-TREE's matched-pairs symmetry tests, what does a small MarPval indicate?",
    options: ["Rejection of stationarity", "Rejection of homology", "A perfectly clock-like gene", "The best ASTRAL score"],
    answer: 0,
    explanation: "MarPval tests marginal symmetry, which is associated with stationarity.",
    optionExplanations: ["Correct. MarPval < 0.05 suggests stationarity is rejected.", "Homology is assessed before this analysis through orthology/alignment logic.", "Clock-like evolution is not what MarPval tests.", "ASTRAL score belongs to coalescent summary inference, not symmetry testing."],
  },
  {
    kind: "practical",
    question: "What is likelihood mapping used for in this practical?",
    options: ["To assess how phylogenetically informative each alignment is", "To merge all partitions by BIC", "To simulate new bootstrap alignments", "To estimate dN/dS"],
    answer: 0,
    explanation: "LMAP samples quartets and shows whether the data strongly support resolved relationships or are mostly unresolved/noisy.",
    optionExplanations: ["Correct. The .svg files help identify poorly informative genes.", "Partition merging is a model-selection task, not LMAP here.", "Bootstrap simulation is not likelihood mapping.", "dN/dS belongs to codon selection analyses."],
  },
];

export const lesson13Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function BiasesPhylogeneticsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

    <BiasTable copy={copy} />

    {copy.sections.slice(0, 12).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <SaturationPlot copy={copy} />
    <DiagnosticGrid copy={copy} />

    {copy.sections.slice(13).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 14}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

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

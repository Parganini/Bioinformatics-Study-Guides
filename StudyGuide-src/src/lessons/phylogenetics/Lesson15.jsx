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
  eyebrow: "Lesson 15 · Inferring selection",
  title: "Inferring selection with codon models",
  subtitle: "This lesson uses phylogenetic trees as tools to study molecular evolution: synonymous and nonsynonymous substitutions, dN/dS, codon models, foreground/background branches, and CODEML tests.",
  big: "Until now, most trees were endpoints: we inferred relationships. Here the tree becomes an input for asking evolutionary questions. Codon models use the genetic code to separate changes that alter proteins from changes that do not, then estimate whether selection is purifying, neutral, relaxed, or positive.",
  tags: ["codons", "genetic code", "synonymous", "nonsynonymous", "dN", "dS", "ω = dN/dS", "MG94", "GY94", "foreground", "background", "CODEML"],
  workflow: ["phylogeny as tool", "codon degeneracy", "dN and dS", "ω interpretation", "codon models", "site / branch / branch-site", "foreground tagging", "CODEML + LRT"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Trees become tools", "The goal is no longer only reconstructing ancestry. A phylogeny can be used as a framework for asking how molecular evolution changed across genes, sites, or lineages."],
    ["dS neutrality is an assumption", "Synonymous substitutions are often treated as approximately neutral, but the professor explicitly noted that this is debated because synonymous changes can affect expression, translation and other processes."],
    ["ω is comparative, not magical", "ω < 1, ≈1 and >1 are useful shortcuts, but real interpretation often depends on comparing contexts: foreground vs background, sites vs sites, or lineages vs lineages."],
    ["Whole-gene ω > 1 is suspicious", "A gene-wide dN/dS above 1 usually points to pseudogenization, alignment problems, or orthology errors rather than simple, clean positive selection across an entire protein."],
    ["Codon alignment is mandatory", "Codon models require the reading frame to be preserved. Indels must occur in multiples of three; otherwise codons are broken and dN/dS analyses become biologically meaningless."],
  ],
  sections: [
    ["1. From reconstructing trees to studying processes", [
      "Phylogenetics reconstructs shared ancestry, but an inferred tree can also be used to study evolutionary processes. In this lesson, the process of interest is selection acting on protein-coding genes.",
      "The logic is that substitutions occur along branches. If we know the tree and the codon alignment, we can ask whether protein-changing substitutions accumulated differently from silent substitutions in specific genes, sites or lineages."
    ]],
    ["2. Translation and the genetic code", [
      "Translation reads nucleotide triplets called codons. With four nucleotides and three positions, there are 4 × 4 × 4 = 64 possible codons. In the universal code, 61 encode amino acids and three are stop codons.",
      "Because only 20 amino acids are encoded by 61 sense codons, the genetic code is degenerate: many amino acids are encoded by more than one codon. This degeneracy is what makes synonymous and nonsynonymous substitutions possible."
    ]],
    ["3. Synonymous vs nonsynonymous substitutions", [
      "A synonymous substitution changes the DNA sequence but not the amino acid. Its rate is dS and is commonly treated as approximately neutral with respect to protein function.",
      "A nonsynonymous substitution changes the encoded amino acid. Its rate is dN and is expected to reflect selective pressure on the protein because amino acid changes can alter structure, function or fitness."
    ]],
    ["4. Sites, substitutions and why raw counts are not enough", [
      "dN and dS are not just counts. They are rates per nonsynonymous or synonymous site. A synonymous site is a codon position where a change can leave the amino acid unchanged; a nonsynonymous site is one where a change alters the amino acid.",
      "There are typically many more nonsynonymous opportunities than synonymous opportunities, yet observed nonsynonymous substitutions are often fewer because purifying selection removes many amino-acid-changing mutations."
    ]],
    ["5. The ω = dN/dS ratio", [
      "The Goldman–Yang framework often parameterizes selection as ω = dN/dS. If ω < 1, nonsynonymous substitutions are suppressed relative to synonymous substitutions, suggesting purifying selection.",
      "If ω ≈ 1, nonsynonymous and synonymous substitutions accumulate at similar rates, suggesting neutral or relaxed evolution. If ω > 1, there is an excess of protein-changing substitutions, which can indicate positive selection in the right context."
    ]],
    ["6. MG94 and GY94", [
      "MG94 separates the rate of synonymous substitutions from the rate of nonsynonymous substitutions. It estimates dS and dN as different components of a codon substitution process.",
      "GY94 also distinguishes codon changes by amino-acid effect, but it is usually discussed through ω = dN/dS. It also includes mutation-model ingredients such as transition/transversion bias κ and codon-frequency assumptions such as F3×4."
    ]],
    ["7. Why codon models are not ordinary nucleotide models", [
      "Nucleotide models see A, C, G and T as states. Amino acid models see 20 amino acids. Codon models sit between them: they model 61 sense codons as states and use the genetic code to decide whether a codon change is synonymous or nonsynonymous.",
      "This matters because natural selection often acts at the protein level, but the observed data are nucleotide sequences. Codon models connect nucleotide substitutions to amino-acid consequences."
    ]],
    ["8. Site-specific models", [
      "Site-specific models allow ω to vary across codons. This makes biological sense because catalytic sites, binding regions, structural domains and flexible loops may experience different constraints.",
      "The limitation is that site-specific models average the site’s behavior across all branches. They can identify codons with different selective regimes, but they may miss lineage-specific shifts."
    ]],
    ["9. Branch-specific models", [
      "Branch-specific models allow ω to vary across lineages. This is useful when a lineage enters a new environment, loses a function, changes ecology, or undergoes a major phenotypic shift.",
      "The limitation is that branch models average ω across all codons in the gene. A branch can have a higher average dN/dS, but that does not tell us which codons drove the shift."
    ]],
    ["10. Branch-site models", [
      "Branch-site models relax both assumptions at once: ω can vary across codons and across selected branches. They are designed to detect selection affecting specific sites along specific lineages.",
      "The professor’s example was intuitive: if deep-sea octopods colonized a low-light environment, one might ask which codons in a visual gene changed specifically on the deep-sea branches."
    ]],
    ["11. Foreground and background", [
      "Foreground branches are the branches explicitly tested for a different dN/dS regime. Background branches are all remaining branches that provide the baseline for comparison.",
      "In the practical, deep-sea cephalopod branches are tagged as foreground using #1 in the Newick tree. The biological question is whether those branches have a different ω from shallow-water relatives."
    ]],
    ["12. Purifying, neutral, positive and relaxed selection", [
      "Purifying selection means ω < 1: amino-acid-changing substitutions are removed because they tend to harm protein function. This is the most common pattern for coding genes.",
      "Relaxed selection is not necessarily ω > 1. It can mean that ω increased relative to a more constrained background. For example, a branch can shift from strong purifying selection to weaker purifying selection without becoming positively selected."
    ]],
    ["13. Why whole-gene ω > 1 is a red flag", [
      "A whole-gene dN/dS above 1 would imply that the entire coding sequence accumulated more amino-acid-changing substitutions than silent substitutions. That is rarely a clean signal of adaptive evolution for every codon in a real gene.",
      "The professor emphasized that high gene-wide dN/dS often indicates pseudogenization, broken reading frames, paralogy/orthology problems, or bad alignment. In species-tree work, dN/dS can therefore be used as a filter to detect problematic genes."
    ]],
    ["14. Codon-based alignments", [
      "Codon models require codon-aware alignments. The alignment must keep triplets intact so that insertions and deletions occur in multiples of three nucleotides.",
      "If a nucleotide alignment breaks codons or introduces frameshifts, the model may interpret alignment artifacts as nonsynonymous evolution. That is why the practical uses PRANK with the -codon option before CODEML."
    ]],
    ["15. Practical biological question", [
      "The practical asks whether deep-sea cephalopod species show a different selective regime in a rhabdomeric opsin, a gene connected to vision. Deep-sea species are the focal foreground branches.",
      "The key interpretation is not simply ‘positive selection’. The practical result points to a higher dN/dS in deep-sea branches, consistent with relaxed selection or a shifted selective regime compared with the background."
    ]],
    ["16. Practical workflow", [
      "Start in data/example_selection. Use PRANK to infer a codon alignment: prank -d=Rhabdomeric1.fasta -o=Rhabdomeric1.aln -codon. Then infer a tree with IQ-TREE from the codon alignment.",
      "Tag the hypothesized foreground branches in the Newick tree by adding #1 to the deep-sea species. CODEML reads the alignment, the tagged tree and the .ctl control file to estimate codon-model parameters."
    ]],
    ["17. CODEML control files", [
      "CODEML is configured through .ctl files rather than long command-line flags. Important settings include seqfile, treefile, outfile, runmode, seqtype = 1 for codons, CodonFreq, model, NSsites, kappa and omega.",
      "In the practical, M0 uses one ω for all branches, while M2 allows foreground branches to have a different ω. The main distinction is the model setting in the control file."
    ]],
    ["18. Comparing M0 and M2 with an LRT", [
      "M0 is the simpler/null model: one ω describes the whole tree. M2 is the alternative model: foreground branches can have a different ω from the background.",
      "After running codeml for both control files, the likelihood ratio test compares whether the more complex model improves the likelihood enough to justify the extra parameter. The provided Python script reads both CODEML outputs and returns a p-value."
    ]],
    ["19. Reading CODEML outputs", [
      "CODEML outputs codon usage, base frequencies by codon position, branch statistics, dN, dS and dN/dS. These are not decorative: they show how the codon model estimated the evolutionary process.",
      "In M0, every branch has the same dN/dS estimate. In the branch model, foreground branches receive a separate dN/dS estimate; in the practical they have a higher value than the background."
    ]],
    ["20. Exploratory M1", [
      "The task asks students to try M1, which gives each branch its own ω. This model has many parameters and is generally not recommended as a final hypothesis test.",
      "It can still be useful exploratorily: it helps identify which branches drive the signal and whether the chosen foreground grouping is biologically sensible."
    ]],
  ],
  modelTitle: "Codon model families",
  modelRows: [
    ["MG94", "Separate dS and dN", "Estimates synonymous and nonsynonymous rates explicitly."],
    ["GY94", "ω = dN/dS", "Summarizes selection using the ratio between nonsynonymous and synonymous rates."],
    ["Site-specific", "ω varies among codons", "Good for finding constrained or selected sites averaged across the tree."],
    ["Branch-specific", "ω varies among lineages", "Good for testing lineage shifts averaged across the gene."],
    ["Branch-site", "ω varies by codon and lineage", "Good for testing specific sites on focal branches."],
  ],
  omegaTitle: "How to read ω without overclaiming",
  omegaCards: [
    ["ω < 1", "Purifying selection", "Nonsynonymous changes are suppressed relative to synonymous changes."],
    ["ω ≈ 1", "Neutral / relaxed", "Protein-changing and silent changes accumulate at similar rates."],
    ["ω > 1", "Positive selection", "Potential adaptive signal, especially for sites or branches; suspicious if averaged over a whole gene."],
    ["Δω > 0", "Relaxed selection", "A lineage can have higher ω than background without exceeding 1."],
  ],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["PRANK -codon", "Builds a codon-aware alignment where indels preserve reading frame."],
    ["IQ-TREE tree", "Provides the topology that CODEML uses for branch/codon model estimation."],
    ["#1 tags", "Mark foreground branches in the Newick tree, such as deep-sea species."],
    [".ctl files", "Control CODEML inputs and model settings: sequence, tree, output, model, NSsites and codon frequencies."],
    ["M0", "One omega ratio for all branches: the simple null model."],
    ["M2", "Foreground and background can have different omega values."],
    ["LRT_from_codeml.py", "Compares likelihoods and returns a p-value for the nested model comparison."],
    ["M1 task", "Exploratory model where each branch can have its own omega; useful but parameter-rich."],
  ],
  takeaways: [
    "Phylogenetic trees can be used to study evolutionary processes, not only infer ancestry.",
    "Codon degeneracy makes synonymous and nonsynonymous substitutions possible.",
    "dS is treated as approximately neutral, but this is a simplifying assumption.",
    "dN reflects protein-changing substitutions and is more directly connected to selection on proteins.",
    "ω = dN/dS: below 1 usually means purifying selection, around 1 neutral/relaxed evolution, above 1 positive selection in the right context.",
    "MG94 models dS and dN separately; GY94 is often summarized by ω.",
    "Site models vary ω across codons; branch models vary ω across lineages; branch-site models vary both.",
    "Foreground branches are the focal tested branches; background branches provide the baseline.",
    "Whole-gene ω > 1 is suspicious and often indicates pseudogenization, paralogy or alignment problems.",
    "Codon alignments must preserve reading frame; indels should be multiples of three.",
    "CODEML uses .ctl files and tagged Newick trees rather than only command-line flags.",
    "M0 vs M2 can be compared with an LRT to test whether foreground branches have a different ω."
  ],
  checklist: [
    "I can explain why codon degeneracy creates synonymous and nonsynonymous substitutions.",
    "I can distinguish dN, dS and ω.",
    "I can state the usual interpretation of ω < 1, ω ≈ 1 and ω > 1 with caveats.",
    "I can explain why dS neutrality is an assumption, not an absolute truth.",
    "I can compare MG94 and GY94 conceptually.",
    "I can distinguish site-specific, branch-specific and branch-site models.",
    "I can define foreground and background in codon-model tests.",
    "I can explain why a whole-gene dN/dS above 1 is suspicious.",
    "I can explain why codon-based alignment is necessary.",
    "I know what PRANK -codon, CODEML, .ctl files and #1 Newick tags do in the practical.",
    "I can describe the M0 vs M2 likelihood ratio test.",
    "I can interpret higher foreground ω as a shifted or relaxed selective regime, not automatically positive selection."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 15 · Inferencia de selección",
  title: "Inferir selección con modelos de codones",
  subtitle: "Esta lección usa árboles filogenéticos como herramientas para estudiar evolución molecular: sustituciones sinónimas y no sinónimas, dN/dS, modelos de codones, ramas foreground/background y pruebas con CODEML.",
  big: "Hasta ahora los árboles eran casi siempre el resultado final. Aquí el árbol se vuelve una entrada para preguntar cómo cambió la evolución molecular en genes, sitios o linajes. Los modelos de codones separan cambios que alteran proteínas de cambios que no lo hacen, y estiman si la selección es purificadora, neutral, relajada o positiva.",
  workflow: ["árbol como herramienta", "degeneración del código", "dN y dS", "interpretar ω", "modelos de codones", "sitio / rama / branch-site", "foreground", "CODEML + LRT"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo encaja la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["Los árboles se vuelven herramientas", "El objetivo ya no es solo reconstruir relaciones. La filogenia sirve como marco para preguntar cómo cambió la evolución molecular entre genes, sitios o linajes."],
    ["La neutralidad de dS es una suposición", "Las sustituciones sinónimas suelen tratarse como casi neutrales, pero el profe remarcó que esto se debate porque pueden afectar expresión, traducción u otros procesos."],
    ["ω es comparativo", "ω < 1, ≈1 y >1 son atajos útiles, pero la interpretación real depende del contexto: foreground vs background, sitios vs sitios o linajes vs linajes."],
    ["ω > 1 en todo el gen es sospechoso", "Un dN/dS mayor a 1 para un gen completo suele indicar pseudogenización, problemas de alineamiento u ortología, no selección positiva limpia en toda la proteína."],
    ["El alineamiento de codones es obligatorio", "Los modelos de codones requieren preservar el marco de lectura. Los indels deben ser múltiplos de tres."],
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۵ · استنباط انتخاب",
  title: "استنباط انتخاب با مدل‌های کدونی",
  subtitle: "در این درس از درخت‌های تبارزایی برای مطالعهٔ تکامل مولکولی، dN/dS و مدل‌های کدونی استفاده می‌کنیم.",
  big: "در اینجا درخت فقط خروجی نیست؛ خودش ورودی تحلیل انتخاب است. مدل‌های کدونی تغییرات مترادف و غیرمترادف را جدا می‌کنند و دربارهٔ فشار انتخابی نتیجه می‌دهند.",
  workflow: ["درخت به‌عنوان ابزار", "کدون", "dN و dS", "ω", "مدل کدونی", "سایت/شاخه", "foreground", "CODEML"],
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
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">{index + 1}</div>
      <div className="mt-3 text-xs font-black uppercase tracking-wide text-stone-700">{item}</div>
    </div>)}
  </div>;
}

function ModelTable({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">codon models</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.modelTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200">
      <div className="grid grid-cols-[0.8fr_1fr_1.45fr] bg-stone-950 text-sm font-black text-white">
        <div className="p-4">Model</div><div className="border-l border-white/10 p-4">What varies</div><div className="border-l border-white/10 p-4">Main idea</div>
      </div>
      {copy.modelRows.map(([model, varies, idea]) => <div key={model} className="grid grid-cols-[0.8fr_1fr_1.45fr] border-t border-stone-200 bg-[#fffaf0] text-sm font-semibold leading-6 text-stone-700">
        <div className="p-4 font-black text-stone-950">{model}</div><div className="border-l border-stone-200 p-4">{varies}</div><div className="border-l border-stone-200 p-4">{idea}</div>
      </div>)}
    </div>
  </section>;
}

function OmegaPanel({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-[#fffaf0] p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">interpretation</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.omegaTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {copy.omegaCards.map(([symbol, title, body], index) => <div key={symbol} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${index === 0 ? "bg-emerald-50 text-emerald-800" : index === 1 ? "bg-stone-100 text-stone-800" : index === 2 ? "bg-red-50 text-red-800" : "bg-sky-50 text-sky-800"}`}>{symbol}</div>
        <h3 className="mt-4 text-xl font-black text-stone-950">{title}</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{body}</p>
      </div>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">practical commands</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.practicalTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {copy.practicalCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "green", "amber", "purple", "stone", "red", "sky", "green"][index % 8]}>{body}</Card>)}
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
    question: "Why can phylogenetic trees be used to infer selection in this lesson?",
    options: ["They provide a framework for mapping substitutions along lineages", "They directly show amino acid fitness without sequence data", "They replace the need for codon alignments", "They prove every branch underwent positive selection"],
    answer: 0,
    explanation: "The tree supplies the evolutionary framework where substitutions can be assigned and compared across branches.",
    optionExplanations: ["Correct. Trees become tools for studying molecular evolution.", "Fitness is inferred indirectly; it is not directly visible from a tree alone.", "Codon alignments remain essential for dN/dS analysis.", "Selection must be tested; it is not guaranteed by having a tree."],
  },
  {
    kind: "theory",
    question: "What creates the distinction between synonymous and nonsynonymous substitutions?",
    options: ["The degeneracy of the genetic code", "The existence of branch support values", "The fact that all trees are rooted", "The use of bootstrap resampling"],
    answer: 0,
    explanation: "Because multiple codons can encode the same amino acid, some nucleotide changes alter the protein and others do not.",
    optionExplanations: ["Correct. Degeneracy allows silent and amino-acid-changing substitutions.", "Support values do not define codon effects.", "Rooting is not what makes substitutions synonymous or nonsynonymous.", "Bootstrap is a support method, not genetic-code logic."],
  },
  {
    kind: "theory",
    question: "What is dN?",
    options: ["The rate of nonsynonymous substitutions per nonsynonymous site", "The number of nucleotide states in a Markov chain", "The distance between two trees", "The posterior probability of a node"],
    answer: 0,
    explanation: "dN normalizes amino-acid-changing substitutions by the number of nonsynonymous opportunities.",
    optionExplanations: ["Correct. It is a rate per nonsynonymous site.", "That describes model state space, not dN.", "Tree distance is something like Robinson-Foulds distance.", "Posterior probability is a Bayesian support metric."],
  },
  {
    kind: "theory",
    question: "What is the usual interpretation of ω = dN/dS < 1?",
    options: ["Purifying selection", "Positive selection across all codons", "No codons are changing", "The alignment is not codon-based"],
    answer: 0,
    explanation: "ω < 1 means nonsynonymous changes are reduced relative to synonymous changes, usually because amino-acid changes are deleterious.",
    optionExplanations: ["Correct. Purifying selection removes many protein-changing mutations.", "Positive selection is associated with ω > 1 in the right context.", "Substitutions can still occur; they are just biased away from nonsynonymous changes.", "Codon alignment quality is separate from the value itself."],
  },
  {
    kind: "theory",
    question: "Why is dS often used as a neutral reference, and what is the caveat?",
    options: ["Synonymous changes often do not alter proteins, but they are not guaranteed to be completely neutral", "Synonymous changes always destroy protein function", "dS is measured from fossils only", "dS is the same as bootstrap support"],
    answer: 0,
    explanation: "The working assumption is approximate neutrality of synonymous substitutions, but biology can make synonymous changes functionally relevant.",
    optionExplanations: ["Correct. The professor emphasized that dS neutrality is debated.", "Synonymous changes do not alter amino acids, although they can have other effects.", "dS is estimated from coding sequence evolution, not fossils.", "Bootstrap support and dS are unrelated quantities."],
  },
  {
    kind: "theory",
    question: "Which statement best contrasts MG94 and GY94?",
    options: ["MG94 models dS and dN as separate rates; GY94 is commonly summarized using ω = dN/dS", "MG94 is a distance matrix; GY94 is an alignment program", "MG94 uses only amino acids; GY94 uses only morphology", "MG94 and GY94 are bootstrap algorithms"],
    answer: 0,
    explanation: "Both are codon models, but the GY94 discussion commonly centers on the dN/dS ratio.",
    optionExplanations: ["Correct. This is the key conceptual distinction in the lesson.", "They are codon substitution models, not distance or alignment methods.", "Both operate on codon evolution, not morphology.", "They estimate codon evolution, not support by resampling."],
  },
  {
    kind: "theory",
    question: "What do site-specific codon models allow?",
    options: ["ω can vary among codon sites", "ω can vary only among species names", "All branches must have independent topologies", "The genetic code is ignored"],
    answer: 0,
    explanation: "Site models ask whether different codons are under different selective regimes.",
    optionExplanations: ["Correct. Sites can have different dN/dS values.", "Species names are not the unit of a site model.", "Topology variation is not part of basic site-specific codon models.", "Codon models rely on the genetic code."],
  },
  {
    kind: "theory",
    question: "What is the limitation of a branch-specific model?",
    options: ["It averages ω across all codons in the gene for each branch class", "It cannot use a tree", "It cannot distinguish synonymous and nonsynonymous substitutions", "It forces all foreground branches to have zero length"],
    answer: 0,
    explanation: "Branch models can detect lineage shifts, but they do not identify the particular codons driving the shift.",
    optionExplanations: ["Correct. That is why branch-site models are useful.", "Branch models require a tree.", "Codon branch models explicitly distinguish these substitution types.", "Branch length is not forced to zero."],
  },
  {
    kind: "theory",
    question: "What are foreground branches in codon model tests?",
    options: ["Branches explicitly allowed or tested for a different dN/dS regime", "Branches that are drawn in front of the figure", "All terminal branches by default", "Branches excluded from the analysis"],
    answer: 0,
    explanation: "Foreground branches are the focal hypothesis; background branches provide the comparison baseline.",
    optionExplanations: ["Correct. They are the branches under explicit testing.", "The term is statistical/modeling jargon, not drawing position.", "Terminals are foreground only if tagged or specified as such.", "Foreground branches are included, not excluded."],
  },
  {
    kind: "theory",
    question: "Why is a whole-gene dN/dS > 1 often suspicious?",
    options: ["It may indicate pseudogenization, misalignment or orthology problems rather than clean positive selection across every codon", "It proves every amino acid became adaptive", "It means no nonsynonymous substitutions occurred", "It means the tree must be unrooted"],
    answer: 0,
    explanation: "Positive selection can be localized, but an entire gene with ω > 1 is often a warning sign.",
    optionExplanations: ["Correct. The professor emphasized this as an important caveat.", "That is an overinterpretation.", "ω > 1 implies many nonsynonymous changes, not none.", "Rooting is unrelated to this warning."],
  },
  {
    kind: "practical",
    question: "Why does the practical use PRANK with the -codon option?",
    options: ["To build a codon-aware alignment that preserves reading frame", "To infer posterior probabilities", "To calculate Robinson-Foulds distances", "To remove all synonymous substitutions"],
    answer: 0,
    explanation: "Codon models require intact triplets and indels in multiples of three.",
    optionExplanations: ["Correct. This prevents biologically implausible frameshift artifacts.", "PRANK -codon is not a Bayesian support command.", "RF distance compares tree topologies.", "The point is not to remove synonymous changes; they are needed for dS."],
  },
  {
    kind: "practical",
    question: "In the practical Newick tree, what does adding #1 to a species label do?",
    options: ["Tags that branch as foreground for CODEML", "Deletes the species from the analysis", "Marks a bootstrap replicate", "Changes the genetic code to mitochondrial"],
    answer: 0,
    explanation: "CODEML reads the #1 labels to know which branches belong to the foreground class.",
    optionExplanations: ["Correct. The deep-sea branches are marked this way.", "The species remains in the tree.", "Bootstrap replicates are not marked with #1 here.", "The genetic code is specified in the control file."],
  },
  {
    kind: "practical",
    question: "What is the main difference between the M0 and M2 CODEML analyses in the practical?",
    options: ["M0 assumes one omega for all branches; M2 allows foreground and background to differ", "M0 uses proteins; M2 uses fossils", "M0 is Bayesian; M2 is UPGMA", "M0 deletes the tree; M2 deletes the alignment"],
    answer: 0,
    explanation: "This nested comparison asks whether a separate foreground ω improves the model.",
    optionExplanations: ["Correct. M0 is the simpler model; M2 is the branch model with a foreground class.", "Both use codon data and a tree.", "CODEML here is maximum-likelihood codon modeling, not UPGMA.", "Both need the tree and alignment."],
  },
  {
    kind: "practical",
    question: "What does LRT_from_codeml.py compare?",
    options: ["The likelihoods of two nested CODEML models", "The GC content of two alignments", "The number of tips in two trees", "The date of two fossils"],
    answer: 0,
    explanation: "The script uses the CODEML output files to perform a likelihood ratio test.",
    optionExplanations: ["Correct. It tests whether the more complex model is justified.", "GC content is not the LRT target here.", "Tree size is not the likelihood comparison.", "Fossil dating belongs to Lesson 14."],
  },
  {
    kind: "practical",
    question: "What did the practical result suggest for the deep-sea rhabdomeric opsin branches?",
    options: ["They had a higher dN/dS than the background, consistent with a shifted or relaxed selective regime", "They had exactly zero substitutions", "They were removed because they were not codon-aligned", "They proved all codons were under positive selection"],
    answer: 0,
    explanation: "The foreground branches showed higher ω, but the interpretation should be cautious: higher dN/dS is not automatically whole-gene positive selection.",
    optionExplanations: ["Correct. The important wording is shifted/relaxed selective regime.", "The analysis estimates substitutions and rates, not zero change.", "They are the focal branches, not removed.", "That overclaims; branch models average across codons."],
  },
];

export const lesson15Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function InferringSelectionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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
      {copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "amber", "green", "purple", "red"][index % 5]}>{body}</Card>)}
    </section>

    <OmegaPanel copy={copy} />

    {copy.sections.slice(0, 7).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <ModelTable copy={copy} />

    {copy.sections.slice(7, 14).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 8}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <PracticalBridge copy={copy} />

    {copy.sections.slice(14).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 15}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

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

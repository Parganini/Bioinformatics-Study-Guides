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
  eyebrow: "Lesson 12 · Discordance, ILS and the coalescent",
  title: "Discordance, ILS and the coalescent: when genes tell different histories",
  subtitle: "A species tree is one history of speciation events. A gene tree is the history of one locus. This lesson explains why those histories can disagree for real biological reasons, and how coalescent methods use that disagreement instead of hiding it.",
  big: "The key move is from one supermatrix and one assumed tree to many gene trees and a model of how lineages coalesce backward in time. ILS is the central example: ancestral polymorphisms persist across speciation events and sort into descendant species in ways that do not necessarily match the species tree.",
  tags: ["species tree", "gene tree", "discordance", "ILS", "RF distance", "coalescent", "ASTRAL", "quartets", "LPP", "ASTRAL-Pro"],
  workflow: ["species tree", "gene trees", "biological discordance", "RF distance", "coalescent", "ASTRAL", "ASTRAL-Pro"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Gene trees are not failed species trees", "A gene tree can disagree with the species tree because the locus genuinely had a different biological history. Discordance is not automatically an inference error."],
    ["ILS is about ancestral polymorphism", "The professor repeatedly framed ILS as ancestral variation that survives speciation and then sorts erratically across descendant lineages."],
    ["Discordance can be biological or technical", "ILS, HGT and hybrid introgression create real conflict. Later lessons deal with artifacts and biases that can create apparent conflict."],
    ["Coalescent methods change the input", "Concatenation starts from aligned sequences. Summary coalescent methods start from gene trees, usually unrooted binary Newick files."],
    ["ASTRAL is quartet-based", "ASTRAL breaks gene trees into quartets and searches for the species tree that agrees with the largest number of quartet topologies."],
  ],
  sections: [
    ["1. Species tree vs gene tree", [
      "A species tree represents the evolutionary history of species: cladogenesis, or the sequence of speciation events. It is the tree we often want when asking how species are related.",
      "A gene tree traces the ancestry of a single locus. Because different loci occupy different parts of the genome and have their own genealogical histories, one gene tree may differ from another gene tree and from the species tree. That difference is gene-tree discordance."
    ]],
    ["2. The central warning: discordance is not automatically an error", [
      "Earlier lessons focused on cases where phylogenetic inference can fail because of noise, model violation or bad data. Lesson 12 adds another possibility: the inference may be recovering a real history, but that history is the history of a gene, not the history of species.",
      "This is why the course distinguishes true biological conflict from technical artifacts. ILS, horizontal gene transfer and hybrid introgression can make gene trees disagree even if every gene tree was inferred perfectly."
    ]],
    ["3. Incomplete Lineage Sorting (ILS)", [
      "ILS occurs when ancestral polymorphisms persist through speciation events. The alleles do not coalesce before the species split, so multiple ancestral variants are carried into descendant lineages.",
      "Later, those alleles are lost or fixed in descendant species in an erratic way. If we build a tree from that locus, the gene tree can group species according to allele history rather than species history."
    ]],
    ["4. When is ILS likely?", [
      "ILS is especially likely when effective population sizes are large. Large populations keep ancestral polymorphism for longer, increasing the chance that variation spans multiple speciation events.",
      "It is also common when speciation events are close together in time. Short internodes give gene lineages little time to coalesce before the next split, producing discordant gene histories in rapid radiations."
    ]],
    ["5. HGT and hybrid introgression", [
      "Horizontal Gene Transfer (HGT) moves genetic material between lineages that are not in a parent–offspring relationship. It is especially common in microbes, but the conceptual point is broader: inheritance can be horizontal, not only vertical.",
      "Hybrid introgression occurs when species hybridize and the hybrid backcrosses with one parental lineage. Genetic material from one species can therefore enter the genome of another, creating loci whose histories disagree with the main species tree."
    ]],
    ["6. Measuring tree disagreement with RF distance", [
      "Robinson–Foulds distance compares two trees with the same set of taxa by decomposing them into splits. It counts the splits present in Tree A but absent in Tree B, plus the splits present in Tree B but absent in Tree A.",
      "RF distance is easy and useful, but it treats all split differences equally. A single unstable taxon can increase RF distance a lot even if the deep biological structure of the trees is mostly the same. This is similar in spirit to why TBE was introduced for very large trees."
    ]],
    ["7. Concatenation-based species tree inference", [
      "Concatenation combines gene alignments into one supermatrix and infers one tree from that single matrix. This is powerful because it increases data and can reduce stochastic error.",
      "The strong assumption is that all genes share the same underlying tree. Partition models can let genes differ in substitution model or branch-length scaling, but the species topology is usually still treated as one shared topology."
    ]],
    ["8. Coalescent-based species tree inference", [
      "Coalescent-based methods relax the single-gene-history assumption. Instead of forcing every locus into one supermatrix, they use multiple gene histories and infer the species tree that best explains their discordance under the multispecies coalescent.",
      "For the summary methods used in the practical, the input is not a FASTA alignment but a set of gene trees, often unrooted binary Newick trees with leaves labeled by species. The output is again a species tree."
    ]],
    ["9. The coalescent as a retrospective model", [
      "The coalescent looks backward in time. Instead of starting from an ancestor and watching lineages diverge, it starts from sampled genes in the present and asks when they trace back to a common ancestor.",
      "That is why divergence events become coalescence events when viewed backward. Two sampled gene copies eventually coalesce into one ancestral copy, then multiple lineages continue backward until the history reaches deeper ancestors."
    ]],
    ["10. Kingman coalescent assumptions", [
      "The classical coalescent is a null model with ideal assumptions: constant effective population size, random mating, no selection, no migration, non-overlapping generations, no recombination within loci, and infinite-sites or infinite-alleles mutation models.",
      "The point for this course is not to memorize every mathematical detail, but to understand that coalescent theory provides a baseline expectation for neutral genealogical histories. Deviations can later be used to study demography, structure, selection or recombination."
    ]],
    ["11. A useful intuition: 2Ne generations", [
      "For two gene copies in a diploid population, there are 2Ne possible parental gene copies in the previous generation. The probability that the two sampled copies choose the same parent in one generation is therefore 1/(2Ne).",
      "This is why larger effective population size increases expected coalescent time. The longer gene lineages remain uncoalesced, the more opportunity there is for ILS across closely spaced speciation events."
    ]],
    ["12. Three families of coalescent species-tree methods", [
      "Gene tree summary methods first infer gene trees with ML or Bayesian methods, then summarize them into a species tree. Examples include ASTRAL, ASTRID, MP-EST and BUCKy.",
      "Site-based methods skip separate gene-tree inference and use site patterns or SNPs predicted under the coalescent, such as SVDQuartets and SNAPP. Bayesian co-estimation methods jointly estimate gene trees and the species tree under a fuller coalescent model, such as StarBEAST2, but are computationally expensive."
    ]],
    ["13. Why ASTRAL uses quartets", [
      "The multispecies coalescent predicts that, for any quartet, the most frequent gene-tree topology should match the species-tree topology. The two discordant topologies are expected to be equally probable and less frequent under ILS alone.",
      "ASTRAL breaks gene trees into quartets, counts which quartet topology is most frequent, and searches for the species tree that maximizes agreement with those quartet signals. It does not directly estimate Ne or simulate the full coalescent process."
    ]],
    ["14. Support and branch lengths in coalescent trees", [
      "ASTRAL reports Local Posterior Probability (LPP), a branch support metric based on quartet frequencies. It ranges from 0 to 1, unlike bootstrap percentages that usually range from 0 to 100.",
      "ASTRAL can also use Multi Locus Bootstrap (MLBS), which assesses branch stability by resampling gene trees. Branch lengths in this framework can be in coalescent units, where one coalescent unit corresponds to 2Ne generations."
    ]],
    ["15. Practical workflow: from gene trees to species tree", [
      "The practical first infers individual gene trees with IQ-TREE using a folder of alignments: iqtree2 -S data/example_alignements/aa --prefix loci. The resulting loci.treefile contains multiple gene trees, and RF distances can be calculated with iqtree -t loci.treefile -rf_all.",
      "Then ASTRAL is run with astral -i loci.treefile. The output reports the number of gene trees, species, optimization rounds, NNI moves, a quartet score, and the final species tree. The final tree includes support values and branch lengths; if no output file is specified, it is printed directly to the terminal."
    ]],
    ["16. ASTRAL-Pro and paralogs", [
      "Standard ASTRAL is designed for gene trees where leaves represent species. ASTRAL-Pro extends this idea to handle paralogous gene copies, incorporating gene duplication and loss alongside ILS.",
      "The practical aligns paralog files with MAFFT, infers gene trees with IQ-TREE, reformats tip names with sed so ASTRAL-Pro sees copies from the same species correctly, and then runs astral-pro -i paralogs.ref.nwk. The final question asks whether the single-copy and paralog-based species trees are the same."
    ]],
  ],
  compareTitle: "Concatenation vs coalescent summary inference",
  compareCards: [
    ["Concatenation", "Input: one supermatrix of aligned sequences. Assumption: one tree describes all genes, even if partitions differ in substitution model."],
    ["Coalescent summary", "Input: many gene trees. Goal: infer the species tree that best explains discordant gene histories under the multispecies coalescent."],
    ["Exam shortcut", "Distance-based methods input a distance matrix; summary coalescent methods input gene trees; concatenation methods input aligned sequences."],
  ],
  ilsTitle: "ILS in one sentence",
  ilsSteps: [
    ["1", "Ancestral population contains polymorphism."],
    ["2", "Speciation occurs before alleles coalesce."],
    ["3", "Alleles sort differently across descendant species."],
    ["4", "The gene tree can disagree with the species tree."],
  ],
  methodTitle: "Coalescent method families",
  methodCards: [
    ["Gene-tree summary", "Infer gene trees first, then summarize them. Examples: ASTRAL, ASTRID, MP-EST, BUCKy."],
    ["Site-based", "Use site patterns or SNPs directly without estimating gene trees first. Examples: SVDQuartets, SNAPP."],
    ["Bayesian co-estimation", "Jointly estimate gene trees and species tree. More rigorous but expensive. Example: StarBEAST2."],
  ],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["iqtree2 -S", "Infer one gene tree per alignment from a directory and collect them in loci.treefile."],
    ["-rf_all", "Compute pairwise RF distances among gene trees to quantify topological disagreement."],
    ["astral -i", "Use gene trees as input and infer a species tree by maximizing quartet agreement."],
    ["NNI moves", "ASTRAL explores tree space with local rearrangements; accepted moves improve the quartet score."],
    ["Score", "The ASTRAL score is a raw count of quartet agreements, not a likelihood or percentage."],
    ["ASTRAL-Pro", "Uses paralog-containing gene trees by accounting for duplication/loss and extracting ortholog-like quartet signal."],
  ],
  takeaways: [
    "Species trees and gene trees answer different historical questions.",
    "ILS is caused by ancestral polymorphisms persisting across speciation events and sorting inconsistently.",
    "Large Ne and short internodes increase the probability of ILS.",
    "HGT and hybrid introgression can also create true biological discordance.",
    "RF distance counts split differences between trees with the same taxa, but it treats all split differences equally.",
    "Concatenation assumes one shared tree; coalescent summary methods use multiple gene trees.",
    "The coalescent is retrospective: it follows sampled genes backward until they coalesce.",
    "ASTRAL relies on quartet frequencies predicted by the multispecies coalescent.",
    "LPP is a quartet-based support metric from 0 to 1; MLBS is a bootstrap-style metric across gene trees.",
    "ASTRAL-Pro allows paralogous copies to contribute to species-tree inference."
  ],
  checklist: [
    "I can distinguish a species tree from a gene tree.",
    "I can explain ILS using ancestral polymorphism and incomplete sorting.",
    "I know why large Ne and rapid speciation promote ILS.",
    "I can distinguish ILS, HGT and hybrid introgression.",
    "I understand why discordance can be biological rather than technical.",
    "I can define RF distance as a split-distance measure.",
    "I can compare concatenation and coalescent-based species-tree inference.",
    "I can explain what the coalescent means by looking backward in time.",
    "I can name the three families of coalescent species-tree methods.",
    "I can explain why ASTRAL uses quartets and what its score means.",
    "I can interpret LPP, MLBS and coalescent units at a basic level.",
    "I can describe what ASTRAL-Pro adds for paralogs."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 12 · Discordancia, ILS y coalescente",
  title: "Discordancia, ILS y coalescente: cuando los genes cuentan historias distintas",
  subtitle: "Un species tree representa una historia de especiación. Un gene tree representa la historia de un locus. Esta lección explica por qué esas historias pueden diferir por razones biológicas reales y cómo los métodos coalescentes usan esa discordancia.",
  big: "El cambio conceptual es pasar de una supermatriz y un solo árbol asumido a muchos gene trees y un marco que mira hacia atrás en el tiempo, hasta que las líneas génicas coalescen. ILS es el ejemplo central: polimorfismos ancestrales sobreviven eventos de especiación y se fijan en descendientes de forma que no siempre refleja el species tree.",
  workflow: ["species tree", "gene trees", "discordancia biológica", "RF distance", "coalescente", "ASTRAL", "ASTRAL-Pro"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo se organiza la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  compareTitle: "Concatenación vs inferencia coalescente de resumen",
  ilsTitle: "ILS en una frase",
  methodTitle: "Familias de métodos coalescentes",
  practicalTitle: "Foco de la práctica",
  emphasis: [
    ["Los gene trees no son species trees fallidos", "Un gene tree puede diferir del species tree porque ese locus tuvo una historia biológica realmente distinta."],
    ["ILS trata de polimorfismo ancestral", "El profe lo planteó como variación ancestral que sobrevive a la especiación y luego se ordena de forma errática."],
    ["La discordancia puede ser biológica o técnica", "ILS, HGT e introgression generan conflicto real; las lecciones siguientes cubren artefactos que parecen conflicto."],
    ["Los métodos coalescentes cambian el input", "La concatenación parte de secuencias alineadas; los summary methods coalescentes parten de gene trees."],
    ["ASTRAL se basa en quartets", "ASTRAL descompone los gene trees en quartets y busca el species tree que explica más topologías de quartet."],
  ],
  takeaways: [
    "Species trees y gene trees responden preguntas históricas distintas.",
    "ILS ocurre cuando polimorfismos ancestrales persisten tras especiación y se ordenan de manera inconsistente.",
    "Ne grande e internodos cortos aumentan la probabilidad de ILS.",
    "HGT e hybrid introgression también pueden generar discordancia biológica real.",
    "RF distance cuenta diferencias de splits entre árboles con los mismos taxa, pero trata todas las diferencias igual.",
    "La concatenación asume un árbol compartido; los summary methods coalescentes usan múltiples gene trees.",
    "El coalescente es retrospectivo: sigue genes muestreados hacia atrás hasta que coalescen.",
    "ASTRAL se basa en frecuencias de quartets predichas por el multispecies coalescent.",
    "LPP es soporte basado en quartets de 0 a 1; MLBS es un soporte tipo bootstrap entre gene trees.",
    "ASTRAL-Pro permite usar copias parálogas en inferencia de species tree."
  ],
  checklist: [
    "Puedo distinguir species tree y gene tree.",
    "Puedo explicar ILS usando polimorfismo ancestral y sorting incompleto.",
    "Sé por qué Ne grande y especiación rápida favorecen ILS.",
    "Puedo distinguir ILS, HGT e hybrid introgression.",
    "Entiendo por qué la discordancia puede ser biológica y no técnica.",
    "Puedo definir RF distance como medida basada en splits.",
    "Puedo comparar concatenación e inferencia coalescente de species trees.",
    "Puedo explicar el coalescente como una mirada hacia atrás en el tiempo.",
    "Puedo nombrar las tres familias de métodos coalescentes.",
    "Puedo explicar por qué ASTRAL usa quartets y qué significa su score.",
    "Puedo interpretar LPP, MLBS y coalescent units de forma básica.",
    "Puedo describir qué agrega ASTRAL-Pro para parálogos."
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۲ · ناسازگاری، ILS و coalescent",
  title: "ناسازگاری، ILS و coalescent: وقتی ژن‌ها تاریخ‌های متفاوتی می‌گویند",
  subtitle: "درخت گونه‌ها تاریخ گونه‌زایی را نشان می‌دهد؛ درخت ژن تاریخ یک جایگاه ژنی را. این درس توضیح می‌دهد چرا این دو می‌توانند به دلایل زیستی واقعی متفاوت باشند.",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "مسیر درس",
  emphasisTitle: "نکات مورد تأکید استاد",
  checklistTitle: "پیش از ادامه",
  section: "بخش",
  compareTitle: "Concatenation در برابر روش‌های coalescent",
  ilsTitle: "ILS در یک جمله",
  methodTitle: "خانواده‌های روش‌های coalescent",
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
      {index < items.length - 1 && <span className="text-stone-400">→</span>}
    </React.Fragment>)}
  </div>;
}

function CompareBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">frameworks</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.compareTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.compareCards.map(([title, body], index) => <Card key={title} title={title} tone={["red", "sky", "amber"][index]}>{body}</Card>)}
    </div>
  </section>;
}

function ILSBlock({ copy }) {
  return <section className="mt-8 overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-950 shadow-xl shadow-stone-900/10">
    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="p-7 text-white md:p-8">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">incomplete lineage sorting</div>
        <h2 className="mt-3 text-3xl font-black tracking-tight">{copy.ilsTitle}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-300">Ancestral variants can survive across speciation events. If they coalesce only deeper in the past, a locus may support a topology different from the species tree.</p>
      </div>
      <div className="grid gap-3 bg-white/5 p-5 md:grid-cols-4">
        {copy.ilsSteps.map(([n, text]) => <div key={n} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-sm font-black">{n}</div>
          <p className="mt-4 text-sm font-bold leading-6 text-stone-100">{text}</p>
        </div>)}
      </div>
    </div>
  </section>;
}

function MethodsBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">coalescent inference</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.methodTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.methodCards.map(([title, body], index) => <Card key={title} title={title} tone={["green", "purple", "sky"][index]}>{body}</Card>)}
    </div>
  </section>;
}

function ASTRALBlock() {
  const rows = [
    ["Gene trees", "Separate Newick trees inferred from individual loci."],
    ["Quartets", "Each gene tree is decomposed into four-taxon statements."],
    ["Score", "Raw count of quartet agreements with the candidate species tree."],
    ["Search", "NNI moves propose alternative trees; better quartet agreement improves the score."],
  ];
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-[#fffaf0] p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">ASTRAL intuition</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Gene trees → quartets → species tree</h2>
    <div className="mt-6 grid gap-3 md:grid-cols-4">
      {rows.map(([title, body], index) => <div key={title} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="text-3xl font-black text-red-700">{index + 1}</div>
        <h3 className="mt-3 text-lg font-black text-stone-950">{title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{body}</p>
      </div>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">notebook bridge</div>
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
    question: "What is the main difference between a species tree and a gene tree?",
    options: ["A species tree represents speciation history; a gene tree represents the history of one locus", "A species tree is always unrooted and a gene tree is always rooted", "A species tree is built only from morphology and a gene tree only from proteins", "A gene tree is just a species tree with support values removed"],
    answer: 0,
    explanation: "The species tree tracks cladogenesis among species; each gene tree tracks the ancestry of a particular locus.",
    optionExplanations: ["Correct. This distinction is the basis of the lesson.", "Rooting is not the defining distinction.", "Both can be inferred from molecular data; the distinction is historical level, not data type.", "A gene tree is not a simplified species tree; it has its own biological history."],
  },
  {
    kind: "theory",
    question: "What causes Incomplete Lineage Sorting?",
    options: ["Ancestral polymorphisms persist across speciation and sort inconsistently", "All sites in the alignment are invariant", "The tree was saved in the wrong file format", "A molecular clock is perfectly obeyed"],
    answer: 0,
    explanation: "ILS happens when alleles do not coalesce before speciation events and are distributed among descendants in a way that may disagree with the species tree.",
    optionExplanations: ["Correct. This is the key conceptual definition.", "Invariant sites may be uninformative, but they are not ILS.", "File format can cause software problems, not biological discordance.", "Clock-like evolution does not create ILS."],
  },
  {
    kind: "theory",
    question: "Which conditions make ILS more likely?",
    options: ["Large effective population size and closely spaced speciation events", "Tiny alignments and no taxa", "Only perfectly clock-like genes", "No ancestral polymorphism at all"],
    answer: 0,
    explanation: "Large Ne extends coalescent times, and short internodes give lineages little time to coalesce before the next speciation event.",
    optionExplanations: ["Correct. These are the two high-yield conditions from the slides.", "Poor data can cause error, but not the biological mechanism of ILS.", "Clock-like rate is unrelated to the probability of lineage sorting.", "Without ancestral polymorphism, there is nothing to sort incompletely."],
  },
  {
    kind: "theory",
    question: "Horizontal Gene Transfer differs from hybrid introgression because HGT is primarily:",
    options: ["Transfer of genetic material between lineages outside parent-offspring inheritance", "Sorting of ancestral alleles without gene flow", "Random resampling of alignment columns", "A way of calculating branch support"],
    answer: 0,
    explanation: "HGT is horizontal movement of genetic material, while hybrid introgression is vertical transfer through hybridization and backcrossing.",
    optionExplanations: ["Correct. HGT is not standard vertical inheritance.", "That describes ILS, not HGT.", "That describes bootstrap logic.", "Support metrics quantify confidence; they are not HGT."],
  },
  {
    kind: "theory",
    question: "What does Robinson–Foulds distance measure?",
    options: ["The symmetric difference in splits between two trees with the same taxa", "The number of substitutions per site in an alignment", "The posterior probability of a branch", "The gamma shape parameter of a model"],
    answer: 0,
    explanation: "RF distance compares tree topologies by counting splits unique to each tree.",
    optionExplanations: ["Correct. RF distance is a split-based topological distance.", "Substitutions per site describe branch lengths or sequence distances, not RF distance.", "Posterior probability is a support measure.", "Gamma shape describes among-site rate variation."],
  },
  {
    kind: "theory",
    question: "What is a limitation of RF distance?",
    options: ["It treats all split differences equally, even if some are biologically minor", "It can only compare DNA sequences and not trees", "It directly estimates Ne", "It only works for Bayesian posterior trees"],
    answer: 0,
    explanation: "A single unstable tip can change several splits, so RF distance can exaggerate some biologically small differences.",
    optionExplanations: ["Correct. RF is useful but blunt.", "RF compares trees, not sequences.", "Ne belongs to population/coalescent models, not RF distance.", "RF can compare any comparable tree topologies with the same taxa."],
  },
  {
    kind: "theory",
    question: "What is the key assumption of concatenation-based species-tree inference?",
    options: ["All genes can be represented by one shared species-tree topology", "Every gene must have its own species tree", "Only paralogs can be used", "No alignment is required"],
    answer: 0,
    explanation: "Concatenation puts genes into one supermatrix and usually infers one tree, even if partitions differ in model details.",
    optionExplanations: ["Correct. This assumption is exactly what coalescent methods relax.", "That is closer to recognizing gene-tree discordance, not concatenation.", "Concatenation often uses single-copy orthologs, not only paralogs.", "Concatenation requires aligned gene blocks."],
  },
  {
    kind: "theory",
    question: "The coalescent is called retrospective because it:",
    options: ["Follows sampled gene copies backward in time until they share ancestors", "Predicts future mutations in living populations", "Always starts with a fixed outgroup", "Only works on morphological matrices"],
    answer: 0,
    explanation: "The coalescent looks from present-day samples back to their common ancestral copies.",
    optionExplanations: ["Correct. Backward-in-time thinking is the core intuition.", "It is not a forward prediction of future mutations.", "Outgroup rooting is unrelated to the retrospective framework.", "The coalescent is a population-genetic framework for gene lineages."],
  },
  {
    kind: "theory",
    question: "Under the multispecies coalescent, why are quartets useful for ASTRAL?",
    options: ["The most frequent gene-tree quartet topology is expected to match the species-tree topology", "Quartets remove the need for gene trees", "Quartets are only a file format", "Quartets prove that HGT never happened"],
    answer: 0,
    explanation: "ASTRAL relies on quartet frequencies: the dominant quartet should represent the species tree under MSC assumptions.",
    optionExplanations: ["Correct. This is the ASTRAL logic.", "ASTRAL summary methods start from gene trees.", "Quartets are four-taxon topological statements, not a file format.", "Quartets can reveal discordance; they do not rule out HGT."],
  },
  {
    kind: "theory",
    question: "What is one coalescent unit?",
    options: ["A time scale equal to 2Ne generations", "A bootstrap replicate", "A single alignment column", "A transition/transversion ratio"],
    answer: 0,
    explanation: "Coalescent units scale time by population size; one coalescent unit corresponds to 2Ne generations.",
    optionExplanations: ["Correct. This connects branch lengths to population size.", "Bootstrap replicates are support resampling units.", "Alignment columns are sites, not coalescent units.", "Transition/transversion ratio belongs to substitution models."],
  },
  {
    kind: "practical",
    question: "In the practical, what does iqtree2 -S data/example_alignements/aa --prefix loci do?",
    options: ["Infers a separate tree for each alignment in the directory and writes them with the loci prefix", "Runs ASTRAL directly on a concatenated matrix", "Computes only amino-acid frequencies and stops", "Deletes all paralogous sequences"],
    answer: 0,
    explanation: "The -S option runs IQ-TREE on multiple loci/alignments, producing a set of gene trees such as loci.treefile.",
    optionExplanations: ["Correct. These gene trees become the input for later coalescent inference.", "ASTRAL is a separate program and takes gene trees as input.", "IQ-TREE performs tree inference, not just frequency counting.", "Paralog filtering is not the role of this command."],
  },
  {
    kind: "practical",
    question: "What is the purpose of iqtree -t loci.treefile -rf_all?",
    options: ["Compute pairwise RF distances among the gene trees", "Concatenate all alignments into one supermatrix", "Run PhyloBayes MCMC chains", "Translate nucleotides into amino acids"],
    answer: 0,
    explanation: "The command compares tree topologies and writes RF distances, helping quantify gene-tree discordance.",
    optionExplanations: ["Correct. This is a practical way to measure tree disagreement.", "Concatenation is a different step/tool.", "PhyloBayes is for Bayesian inference, not this RF command.", "Translation is unrelated."],
  },
  {
    kind: "practical",
    question: "What is the input of astral -i loci.treefile?",
    options: ["A file containing multiple gene trees", "A raw FASTQ file", "A single distance matrix", "An unaligned proteome file"],
    answer: 0,
    explanation: "ASTRAL summary inference starts from gene trees, not from raw sequences.",
    optionExplanations: ["Correct. This is a classic practical/exam distinction.", "FASTQ reads are far upstream of ASTRAL.", "Distance matrices are used by distance-based tree methods, not ASTRAL input here.", "Proteomes must be processed into alignments and gene trees first."],
  },
  {
    kind: "practical",
    question: "In the ASTRAL output, what does the score represent?",
    options: ["A raw count of quartet agreements between gene trees and the candidate species tree", "A posterior probability from 0 to 1", "The number of alignment columns", "The RF distance between two sequences"],
    answer: 0,
    explanation: "ASTRAL's score counts how many quartet statements from gene trees match the inferred species tree; higher is better.",
    optionExplanations: ["Correct. It is a quartet-agreement count, not a likelihood.", "LPP is the posterior-like support metric, not the score itself.", "Alignment length is not the ASTRAL score.", "RF distance compares tree splits, not sequences."],
  },
  {
    kind: "practical",
    question: "Why does the practical use sed before running ASTRAL-Pro on paralog trees?",
    options: ["To reformat tip names so copies from the same species are recognized consistently", "To remove all internal branches", "To convert Newick into FASTQ", "To calculate local posterior probabilities"],
    answer: 0,
    explanation: "IQ-TREE needs unique tip names, but ASTRAL-Pro needs species identity to be clear when multiple gene copies exist.",
    optionExplanations: ["Correct. The command strips gene-copy identifiers after the species name.", "It does not delete internal branches.", "Newick and FASTQ are completely different formats.", "LPP is computed by ASTRAL/ASTRAL-Pro, not by sed."],
  },
];

export const lesson12Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function DiscordanceCoalescentLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

    <CompareBlock copy={copy} />
    <ILSBlock copy={copy} />
    <MethodsBlock copy={copy} />
    <ASTRALBlock />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
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

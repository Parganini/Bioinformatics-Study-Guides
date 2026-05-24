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
  eyebrow: "Lesson 11 · Complex models",
  title: "Complex models: modelling heterogeneity instead of pretending it is not there",
  subtitle: "Simple substitution models assume that one evolutionary process can describe the whole alignment. Real data often violate that assumption across sites, genes, lineages and compositions.",
  big: "The lesson compares two major strategies for heterogeneity: partition models, where we define subsets a priori, and mixture models, where sites are assigned probabilistically to hidden components. The practical turns this into IQ-TREE commands for mixture, profile mixture and GHOST heterotachy models.",
  tags: ["heterogeneity", "partition models", "mixture models", "edge-linked", "edge-unlinked", "+G", "C60", "CAT", "GHOST", "IQ-TREE"],
  workflow: ["simple model", "violated assumptions", "partitioning", "mixture components", "heterotachy", "model diagnostics"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Complex models fix a real problem", "They are not decorative. They are used because rates, compositions and even branch-specific processes can vary across the alignment."],
    ["Partition models need a priori units", "When we partition by gene or codon position, we assume those units are meaningful sources of heterogeneity before the analysis starts."],
    ["Mixture models are probabilistic", "A site is not hard-assigned to one class; it has probabilities of belonging to different components, and likelihoods are integrated over them."],
    ["Edge-proportional is a good compromise", "Edge-equal is often too simple; edge-unlinked can overfit. Proportional branch lengths usually balance realism and parameter cost."],
    ["Heterotachy is site × lineage rate variation", "Gamma rate variation is across sites, but it keeps one branch-length pattern. Heterotachy means a site can be slow on some branches and fast on others."],
  ],
  sections: [
    ["1. Why simple models become insufficient", [
      "A simple model applies one substitution process to all sites in an alignment. That is convenient, but real alignments are rarely homogeneous. Some sites are conserved, some are fast, some genes have different compositions, and some lineages change rate in specific regions of the tree.",
      "The practical reason is important: if the model ignores heterogeneity, the likelihood calculation may force very different signals into one average process. That can reduce fit, inflate support for wrong branches, and contribute to systematic error such as long-branch attraction."
    ]],
    ["2. What kinds of heterogeneity are we trying to model?", [
      "Rate heterogeneity across sites means some columns evolve slowly and others quickly. Rate heterogeneity across lineages means some branches accumulate more substitutions. Composition heterogeneity means different sites or lineages have different nucleotide or amino-acid frequencies.",
      "The difficult case is heterotachy: rate heterogeneity across both sites and branches. For example, a gene region may accelerate only in a particular clade because selection, function or constraint changed there."
    ]],
    ["3. Partition models", [
      "Partition models split a concatenated alignment into predefined subsets, such as genes, codon positions, domains, or gene-by-codon-position blocks. Each partition can then receive its own substitution model and parameters.",
      "The strength is interpretability: we decide that genes or codon positions are biologically meaningful units. The weakness is that the assumption may be wrong. A gene can contain both conserved and fast-evolving domains, and different genes can share very similar evolutionary patterns."
    ]],
    ["4. Edge-linked with equal branch lengths", [
      "In an edge-linked equal branch-length partition model, all partitions share the same topology and the same set of branch lengths. The partitions may have different Q matrices or model parameters, but the amount of change along each branch is forced to be identical across partitions.",
      "This is usually unrealistic for phylogenomics because different genes, codon positions or functional regions often evolve at different speeds. It is simple and parameter-efficient, but often too restrictive."
    ]],
    ["5. Edge-linked with proportional branch lengths", [
      "In an edge-proportional model, partitions share a topology and a common branch-length pattern, but each partition can scale that pattern by a multiplier. One partition may be globally faster or slower than another while keeping the same relative branch pattern.",
      "This is often the recommended trade-off. It captures major rate differences among partitions without estimating a completely independent branch-length set for every partition."
    ]],
    ["6. Edge-unlinked partition models", [
      "In an edge-unlinked model, each partition has its own branch lengths. This is the most flexible of the three partition strategies because different partitions can show different amounts of change on different branches.",
      "The price is many more parameters. If partitions are short or contain few informative sites, edge-unlinked models can overfit: the model starts describing noise instead of stable evolutionary signal."
    ]],
    ["7. Which partition model should you choose?", [
      "Edge-equal is usually too simple because it assumes every part of the alignment evolves at the same speed along the same branches. Edge-unlinked is powerful but can be too parameter-rich, especially with many small partitions.",
      "Edge-proportional is usually the practical middle ground: it avoids the strongest oversimplification but does not estimate a fully independent tree-length pattern for every partition."
    ]],
    ["8. Mixture models", [
      "Mixture models also allow more than one process along the sequence, but they do not require us to specify the site subsets beforehand. Instead, each site has a probability of belonging to different components.",
      "The likelihood of a site is a weighted sum over components. This is the conceptual difference from partitioning: partitioning says 'this site belongs to partition 1'; mixture models say 'this site has probabilities of belonging to components 1, 2, 3...'"
    ]],
    ["9. Rate mixture models", [
      "A rate mixture model keeps the same substitution model but allows sites to evolve under different rate multipliers. The familiar +G model is exactly this idea: a gamma distribution is divided into discrete rate categories such as +G4.",
      "The important point is that rate categories are not manually assigned by the user. The model estimates which sites are more compatible with slow or fast categories."
    ]],
    ["10. Profile mixture models", [
      "Profile mixture models mainly address composition heterogeneity, especially in protein data. Sites share a substitution matrix but may have different equilibrium amino-acid frequency profiles.",
      "Empirical profile models such as LG+C60 use fixed profiles estimated from large datasets. Bayesian profile models such as CAT infer profile structure from the data. These models can reduce systematic errors when different sites prefer different amino-acid compositions."
    ]],
    ["11. Full mixture models", [
      "A full mixture model allows sites to differ not only in rate or frequency profile, but in the full substitution process. Each component can correspond to a different Q matrix or substitution model.",
      "This is flexible and biologically appealing, but computationally heavier. The more components and parameters we allow, the more we must worry about computation, identifiability and overfitting."
    ]],
    ["12. Heterotachy and GHOST", [
      "Heterotachy means the same site evolves at different rates on different branches. A standard +G model does not fully solve this because it assigns site-rate categories but keeps one branch-length pattern across the tree.",
      "GHOST, General Heterogeneous evolution On a Single Topology, models heterotachy by using mixture classes with their own branch lengths and often their own Q matrices while maintaining one topology. It resembles an edge-unlinked partition model, but without requiring a predefined partition file."
    ]],
    ["13. MAST and topological heterogeneity", [
      "Most models in this lesson relax assumptions about rates, branch lengths or compositions while keeping a single topology. MAST goes one step further by relaxing the topology itself inside a concatenated ML framework.",
      "This matters because biological processes such as incomplete lineage sorting, introgression and recombination can create real topological discordance among loci. The course returns to this topic in the following lesson on discordance and coalescent methods."
    ]],
    ["14. Partition models vs mixture models", [
      "Partition models: each site is assigned to a fixed subset before the analysis. A distinct substitution model is applied to that subset. The site-to-partition assignment is known and fixed.",
      "Mixture models: the site-to-class assignment is unknown. The model estimates probabilities for each site across components, and the final likelihood integrates over those possibilities."
    ]],
    ["15. Practical workflow", [
      "The practical starts with IQ-TREE mixture syntax: MIX{JC,GTR}+G4 combines two substitution components and four gamma categories, producing eight site categories. The -wspmr flag writes site posterior probabilities to a .siteprob file.",
      "Then the practical uses MixtureFinder with MIX+MFP, model restrictions with -mset, rate-category choices with -mrate, and a maximum number of Q-mixture classes with -qmax. It also tests profile mixture models such as LG+C60+G4 and GHOST heterotachy models such as GTR+H4, GTR*H4 and GTR+FO*H4."
    ]],
  ],
  compareTitle: "Partition models vs mixture models",
  compareCards: [
    ["Partition model", "Sites are assigned to predefined subsets: genes, codon positions, domains or arbitrary blocks."],
    ["Mixture model", "Sites are assigned probabilistically to hidden components; the data decide how likely each component is."],
    ["Shared goal", "Both try to model heterogeneity instead of forcing one average process onto the whole alignment."],
  ],
  edgeTitle: "Three partition branch-length strategies",
  edgeCards: [
    ["Edge-equal", "1 topology, 1 branch-length set. Simple but often unrealistic."],
    ["Edge-proportional", "1 topology, branch lengths scaled by partition. Usually a good compromise."],
    ["Edge-unlinked", "1 topology, independent branch lengths per partition. Flexible but parameter-rich."],
  ],
  mixtureTitle: "Three mixture model families",
  mixtureCards: [
    ["Rate mixture", "+G: same substitution model, different rate categories across sites."],
    ["Profile mixture", "Different site frequency profiles, especially useful for protein composition heterogeneity."],
    ["Full mixture", "Different components can have different substitution models or Q matrices."],
  ],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["MIX{JC,GTR}+G4", "Two substitution components times four gamma categories. Use -wspmr to inspect .siteprob."],
    ["MIX+MFP", "Let IQ-TREE search mixture model structure with restrictions such as -mset and -mrate."],
    ["-qmax", "Caps the maximum number of Q-mixture classes, avoiding an uncontrolled component explosion."],
    ["LG+C60+G4", "Profile mixture model for protein alignments with 60 empirical amino-acid profiles."],
    ["GTR+H4", "GHOST heterotachy model with four classes and linked GTR parameters."],
    ["GTR+FO*H4", "More flexible GHOST form: separate base frequencies and unlinked GTR parameters across classes."],
  ],
  takeaways: [
    "Complex models are used because real alignments violate simple homogeneity assumptions.",
    "Partition models require predefined site subsets; mixture models infer hidden components probabilistically.",
    "Edge-equal, edge-proportional and edge-unlinked partition models differ in how branch lengths are shared among partitions.",
    "Edge-proportional models are often a good trade-off between oversimplification and overparameterization.",
    "+G is a rate mixture model: sites differ in rate, not in the whole substitution process.",
    "Profile mixture models such as LG+C60 address composition heterogeneity across sites.",
    "GHOST models heterotachy: the same site can have different rates on different branches.",
    "MAST relaxes the single-topology assumption and anticipates gene-tree discordance topics.",
  ],
  checklist: [
    "I can explain why simple substitution models may fail.",
    "I can distinguish rate, composition and heterotachy heterogeneity.",
    "I can define partition models and mixture models.",
    "I can compare edge-equal, edge-proportional and edge-unlinked branch-length models.",
    "I understand why edge-proportional is often a good compromise.",
    "I can explain why +G is a rate mixture model.",
    "I can describe profile mixture models such as LG+C60 and CAT.",
    "I can explain what GHOST is designed to model.",
    "I can interpret what .siteprob contains after -wspmr.",
    "I can identify the IQ-TREE flags used in the practical."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 11 · Modelos complejos",
  title: "Modelos complejos: modelar la heterogeneidad en lugar de ignorarla",
  subtitle: "Los modelos simples asumen que un solo proceso evolutivo describe todo el alineamiento. Los datos reales suelen violar esa idea entre sitios, genes, linajes y composiciones.",
  big: "La lección compara dos estrategias principales: modelos de partición, donde definimos subconjuntos a priori, y modelos de mezcla, donde los sitios se asignan probabilísticamente a componentes ocultos. La práctica lo aterriza con IQ-TREE para mixture, profile mixture y GHOST.",
  workflow: ["modelo simple", "supuestos violados", "particiones", "componentes mixture", "heterotachy", "diagnóstico"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo se organiza la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  compareTitle: "Modelos de partición vs modelos mixture",
  edgeTitle: "Tres estrategias de branch lengths por partición",
  mixtureTitle: "Tres familias de mixture models",
  practicalTitle: "Foco de la práctica",
  emphasis: [
    ["Los modelos complejos arreglan un problema real", "No son decoración: se usan porque tasas, composiciones y procesos específicos de ramas pueden variar dentro del alineamiento."],
    ["Las particiones necesitan unidades a priori", "Si particionamos por gen o posición de codón, asumimos antes del análisis que esas unidades capturan heterogeneidad."],
    ["Los mixture models son probabilísticos", "Un sitio no se asigna rígidamente a una clase; tiene probabilidades de pertenecer a distintos componentes."],
    ["Edge-proportional es buen compromiso", "Edge-equal suele ser demasiado simple; edge-unlinked puede sobreajustar. Proportional suele balancear realismo y costo de parámetros."],
    ["Heterotachy es variación sitio × linaje", "Gamma modela variación entre sitios, pero mantiene un patrón de ramas. Heterotachy permite que un sitio sea lento en unas ramas y rápido en otras."],
  ],
  takeaways: [
    "Los modelos complejos existen porque los alineamientos reales violan supuestos simples de homogeneidad.",
    "Los partition models requieren subconjuntos definidos de antemano; los mixture models infieren componentes ocultos probabilísticamente.",
    "Edge-equal, edge-proportional y edge-unlinked difieren en cómo comparten branch lengths entre particiones.",
    "Edge-proportional suele ser un buen balance entre sobresimplificación y sobreparametrización.",
    "+G es un rate mixture model: los sitios difieren en tasa, no en todo el proceso de sustitución.",
    "Los profile mixture models como LG+C60 tratan heterogeneidad composicional entre sitios.",
    "GHOST modela heterotachy: un mismo sitio puede tener tasas diferentes en distintas ramas.",
    "MAST relaja el supuesto de una sola topología y conecta con discordancia entre genes.",
  ],
  checklist: [
    "Puedo explicar por qué pueden fallar los modelos simples.",
    "Puedo distinguir heterogeneidad de tasa, composición y heterotachy.",
    "Puedo definir partition models y mixture models.",
    "Puedo comparar edge-equal, edge-proportional y edge-unlinked.",
    "Entiendo por qué edge-proportional suele ser un buen compromiso.",
    "Puedo explicar por qué +G es un rate mixture model.",
    "Puedo describir profile mixture models como LG+C60 y CAT.",
    "Puedo explicar para qué sirve GHOST.",
    "Puedo interpretar qué contiene .siteprob después de -wspmr.",
    "Puedo identificar los flags de IQ-TREE usados en la práctica."
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۱ · مدل‌های پیچیده",
  title: "مدل‌های پیچیده: مدل‌سازی ناهمگنی در فرگشت توالی‌ها",
  subtitle: "مدل‌های ساده فرض می‌کنند یک فرایند برای کل هم‌ردیفی کافی است؛ اما داده‌های واقعی در نرخ، ترکیب و شاخه‌ها ناهمگن‌اند.",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "مسیر درس",
  emphasisTitle: "نکات مورد تأکید استاد",
  checklistTitle: "پیش از ادامه",
  section: "بخش",
  compareTitle: "مدل‌های پارتیشن در برابر مدل‌های mixture",
  edgeTitle: "سه راهبرد برای طول شاخه‌ها",
  mixtureTitle: "سه خانوادهٔ مدل mixture",
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

function PartitionVsMixture({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">fixed assignment vs hidden components</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.compareTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.compareCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "purple", "green"][index]}>{body}</Card>)}
    </div>
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">partition view</div>
        <div className="grid grid-cols-9 gap-1 text-center text-xs font-black text-stone-700">
          {["OG1", "OG2", "OG3", "OG4", "OG5", "OG6", "OG7", "OG8", "OG9"].map((x, i) => <div key={x} className={`rounded-xl p-3 ${i < 3 ? "bg-sky-100" : i < 6 ? "bg-amber-100" : "bg-emerald-100"}`}>{x}</div>)}
        </div>
        <p className="mt-3 text-sm font-semibold leading-7 text-stone-700">Every site belongs to one predefined block.</p>
      </div>
      <div className="rounded-3xl border border-stone-200 bg-stone-950 p-5 text-white">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-red-200">mixture view</div>
        <div className="grid grid-cols-6 gap-2 text-center text-xs font-mono">
          {["0.72", "0.18", "0.10", "0.25", "0.61", "0.14", "0.05", "0.31", "0.64", "0.43", "0.39", "0.18"].map((x, i) => <div key={`${x}-${i}`} className="rounded-xl bg-white/10 p-3">{x}</div>)}
        </div>
        <p className="mt-3 text-sm font-semibold leading-7 text-white/80">Each site has probabilities across hidden components.</p>
      </div>
    </div>
  </section>;
}

function EdgeBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">partition branch lengths</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-red-950">{copy.edgeTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.edgeCards.map(([title, body], index) => <Card key={title} title={title} tone={["red", "green", "amber"][index]}>{body}</Card>)}
    </div>
    <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-white p-5">
      <svg viewBox="0 0 760 230" className="h-64 w-full">
        {[90, 380, 660].map((offset, i) => <g key={offset}>
          <line x1={offset - 35} y1="115" x2={offset + 35} y2="115" stroke="#57534e" strokeWidth="5" />
          <line x1={offset + 35} y1="115" x2={offset + 105} y2="70" stroke="#57534e" strokeWidth={i === 0 ? 4 : i === 1 ? 3 : 5} />
          <line x1={offset + 35} y1="115" x2={offset + 105} y2="160" stroke="#57534e" strokeWidth={i === 0 ? 4 : i === 1 ? 6 : 2} />
          <circle cx={offset + 35} cy="115" r="9" fill="#dc2626" />
          <text x={offset - 45} y="202" className="fill-stone-800 text-sm font-black">{["equal", "proportional", "unlinked"][i]}</text>
        </g>)}
      </svg>
    </div>
  </section>;
}

function MixtureBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">rate · profile · full mixture</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.mixtureTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.mixtureCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "purple", "green"][index]}>{body}</Card>)}
    </div>
    <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-5">
      <div className="grid gap-3 text-sm font-bold text-stone-700 md:grid-cols-3">
        <div className="rounded-2xl bg-sky-50 p-4"><span className="font-black text-sky-900">+G4</span><br />K1 · K2 · K3 · K4 rate categories</div>
        <div className="rounded-2xl bg-violet-50 p-4"><span className="font-black text-violet-900">LG+C60</span><br />60 empirical amino-acid profiles</div>
        <div className="rounded-2xl bg-emerald-50 p-4"><span className="font-black text-emerald-900">MIX&#123;JC,GTR&#125;</span><br />different Q matrices as components</div>
      </div>
    </div>
  </section>;
}

function HeterotachyBlock() {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-800 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">heterotachy</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">Same site, different branches, different rates</h2>
    <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl bg-white/10 p-5">
        <svg viewBox="0 0 420 220" className="h-60 w-full">
          <line x1="65" y1="110" x2="170" y2="110" stroke="#f5f5f4" strokeWidth="4" />
          <line x1="170" y1="110" x2="295" y2="50" stroke="#f97316" strokeWidth="7" />
          <line x1="170" y1="110" x2="295" y2="170" stroke="#93c5fd" strokeWidth="3" />
          <line x1="295" y1="50" x2="365" y2="32" stroke="#f97316" strokeWidth="7" />
          <line x1="295" y1="50" x2="365" y2="75" stroke="#f97316" strokeWidth="7" />
          <line x1="295" y1="170" x2="365" y2="145" stroke="#93c5fd" strokeWidth="3" />
          <line x1="295" y1="170" x2="365" y2="198" stroke="#93c5fd" strokeWidth="3" />
          <text x="35" y="115" className="fill-white text-xs font-black">site i</text>
          <text x="250" y="28" className="fill-orange-200 text-xs font-black">fast in this clade</text>
          <text x="250" y="207" className="fill-sky-200 text-xs font-black">slow elsewhere</text>
        </svg>
      </div>
      <div className="grid content-center gap-4">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/85"><b>+G</b> handles rate variation across sites, but uses one branch-length pattern.</div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/85"><b>GHOST</b> handles classes with different branch lengths on one topology.</div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/85"><b>MAST</b> goes further by relaxing the single-topology assumption.</div>
      </div>
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">IQ-TREE complex model practical</div>
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
    question: "Why do we need complex substitution models?",
    options: ["Because real alignments often violate simple homogeneity assumptions", "Because simple models cannot read FASTA files", "Because complex models remove the need for trees", "Because all sites always evolve identically"],
    answer: 0,
    explanation: "Complex models address heterogeneity in rates, compositions, branches or sites.",
    optionExplanations: ["Correct. Complex models are meant to better fit heterogeneous data.", "File format is not the issue.", "Trees are still central in phylogenetic inference.", "That is the assumption that fails, not the reason for complex models."],
  },
  {
    kind: "theory",
    question: "What is the key difference between partition models and mixture models?",
    options: ["Partition models use predefined site subsets; mixture models assign sites probabilistically to components", "Partition models are Bayesian and mixture models are always distance-based", "Partition models cannot use branch lengths", "Mixture models only work for morphology"],
    answer: 0,
    explanation: "Partitioning fixes the site-to-partition assignment before analysis; mixture models infer component membership probabilistically.",
    optionExplanations: ["Correct. This is the core distinction.", "Both can be used in likelihood-style sequence analyses.", "Partition models can absolutely use branch lengths.", "Mixture models are common in molecular sequence evolution."],
  },
  {
    kind: "theory",
    question: "In an edge-linked equal branch-length partition model, partitions share:",
    options: ["The same topology and the same branch-length set", "A different topology for every gene", "Only posterior probabilities", "Only amino-acid profiles"],
    answer: 0,
    explanation: "Edge-equal means all partitions share one set of branch lengths.",
    optionExplanations: ["Correct. It is the most constrained branch-length partition model.", "That would relax topology, not edge-equal partitioning.", "Posterior probabilities are support values, not model structure.", "Amino-acid profiles belong to profile models."],
  },
  {
    kind: "theory",
    question: "Why is edge-proportional often recommended?",
    options: ["It balances oversimplification and overparameterization", "It forbids rate differences among partitions", "It estimates a separate topology for every partition", "It only works without alignments"],
    answer: 0,
    explanation: "Edge-proportional models let partitions scale branch lengths while avoiding fully unlinked branch sets.",
    optionExplanations: ["Correct. It is a practical compromise.", "It explicitly allows partitions to be faster or slower.", "The topology is still shared.", "It requires aligned data."],
  },
  {
    kind: "theory",
    question: "What is the main risk of edge-unlinked partition models with many short partitions?",
    options: ["Overfitting due to too many branch-length parameters", "They always force equal rates", "They cannot use substitution models", "They delete all missing data"],
    answer: 0,
    explanation: "If each small partition has its own branch lengths, the model may fit noise rather than signal.",
    optionExplanations: ["Correct. Flexibility can become overfitting.", "That describes the opposite of unlinked flexibility.", "They can use substitution models.", "Missing data handling is a separate issue."],
  },
  {
    kind: "theory",
    question: "Which model family is +G an example of?",
    options: ["A rate mixture model", "An orthology inference method", "A coalescent species tree method", "A tree rooting algorithm"],
    answer: 0,
    explanation: "+G uses discrete gamma rate categories to model rate variation across sites.",
    optionExplanations: ["Correct. It is the classic rate mixture idea.", "Orthology inference happens before alignment/tree inference.", "Coalescent methods address species trees and gene-tree discordance.", "Rooting is unrelated to +G."],
  },
  {
    kind: "theory",
    question: "What does a profile mixture model mainly vary across sites?",
    options: ["Equilibrium nucleotide or amino-acid frequencies", "Only species names", "The order of taxa in the FASTA file", "The outgroup used for rooting"],
    answer: 0,
    explanation: "Profile mixture models allow different sites to follow different composition profiles.",
    optionExplanations: ["Correct. This is especially useful for protein composition heterogeneity.", "Species names are metadata, not profile components.", "FASTA order is not the evolutionary model.", "Outgroup choice is not the profile mixture mechanism."],
  },
  {
    kind: "theory",
    question: "What is heterotachy?",
    options: ["The same site evolving at different rates on different branches", "All sites evolving at the same rate", "The use of only one taxon", "A fixed amino-acid profile"],
    answer: 0,
    explanation: "Heterotachy is rate variation that depends on both site and lineage/branch.",
    optionExplanations: ["Correct. It is site-by-branch rate heterogeneity.", "That is homogeneity, not heterotachy.", "Taxon count is unrelated.", "A profile is a frequency vector, not heterotachy."],
  },
  {
    kind: "theory",
    question: "What is GHOST designed to model?",
    options: ["Heterotachy using mixture classes with different branch lengths on one topology", "Only synonymous substitutions", "Only taxon sampling", "Only raw Hamming distances"],
    answer: 0,
    explanation: "GHOST is a General Heterogeneous evolution On a Single Topology model for heterotachy.",
    optionExplanations: ["Correct. It handles branch-length heterogeneity across hidden site classes.", "Codon selection models deal with synonymous/nonsynonymous changes.", "Taxon sampling is experimental design.", "Distances are not the GHOST framework."],
  },
  {
    kind: "theory",
    question: "What does MAST relax compared with most models discussed in this lesson?",
    options: ["The assumption of a single topology", "The need for sequences", "The genetic code", "The existence of taxa"],
    answer: 0,
    explanation: "MAST accounts for topological heterogeneity within a concatenated ML framework.",
    optionExplanations: ["Correct. It anticipates discordance from ILS, introgression or recombination.", "Sequence data are still needed.", "The genetic code is not the MAST target.", "Taxa are still the tips in the analysis."],
  },
  {
    kind: "practical",
    question: "In the practical, what does MIX{JC,GTR}+G4 specify?",
    options: ["Two mixture components combined with four gamma rate categories", "Four independent outgroups", "A GHOST model with four topologies", "A model that uses only amino-acid profiles"],
    answer: 0,
    explanation: "JC and GTR are the two components, and +G4 adds four discrete gamma categories.",
    optionExplanations: ["Correct. This gives eight site categories in the example.", "Outgroups are not specified by this model string.", "GHOST uses +H or *H, not this syntax.", "JC/GTR are nucleotide substitution models."],
  },
  {
    kind: "practical",
    question: "What is the role of -wspmr in the IQ-TREE practical?",
    options: ["It writes site posterior probabilities for mixture classes/rate categories", "It deletes all partitions", "It converts protein sequences into nucleotides", "It chooses an outgroup"],
    answer: 0,
    explanation: "-wspmr produces a .siteprob file that helps inspect component membership probabilities per site.",
    optionExplanations: ["Correct. This is how you inspect the probabilistic assignment of sites.", "Partition deletion is not the function of -wspmr.", "Sequence translation is not its role.", "Outgroup rooting is separate."],
  },
  {
    kind: "practical",
    question: "What does -qmax control in the MixtureFinder command?",
    options: ["The maximum number of Q-mixture classes", "The number of taxa in the alignment", "The minimum bootstrap support", "The number of posterior trees discarded as burn-in"],
    answer: 0,
    explanation: "-qmax limits how many mixture Q components IQ-TREE is allowed to explore.",
    optionExplanations: ["Correct. It caps model complexity.", "Taxon number comes from the alignment.", "Bootstrap support is controlled by bootstrap flags.", "Burn-in is relevant to Bayesian tree samples, not this option."],
  },
  {
    kind: "practical",
    question: "What does LG+C60+G4 represent in the practical?",
    options: ["A protein profile mixture model with 60 empirical profiles and gamma rate categories", "A nucleotide-only JC model", "A pure distance matrix", "A codon model for dN/dS"],
    answer: 0,
    explanation: "LG+C60 combines the LG protein model with C60 profile mixture components, plus +G4 rate variation.",
    optionExplanations: ["Correct. It targets protein composition and rate heterogeneity.", "JC is a nucleotide model, not LG+C60.", "It is a substitution model, not a distance matrix.", "dN/dS belongs to codon models such as MG94/GY94."],
  },
  {
    kind: "practical",
    question: "In GHOST syntax, what is the difference between GTR+H4 and GTR*H4?",
    options: ["+H links GTR parameters across classes; *H unlinks them", "+H removes all rate heterogeneity; *H roots the tree", "They are identical commands", "GTR*H4 is only for morphology"],
    answer: 0,
    explanation: "The practical notes that +H4 links GTR parameters across classes, while *H4 estimates them separately.",
    optionExplanations: ["Correct. *H4 is more flexible and parameter-rich.", "Both are heterotachy model syntax, not rooting commands.", "They differ in parameter linking.", "They are sequence evolution model commands."],
  },
];

export const lesson11Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function ComplexModelsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

    <PartitionVsMixture copy={copy} />
    <EdgeBlock copy={copy} />
    <MixtureBlock copy={copy} />
    <HeterotachyBlock />

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

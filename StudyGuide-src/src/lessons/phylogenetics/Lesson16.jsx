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
  eyebrow: "Lesson 16 · Trait evolution on phylogenies",
  title: "Modelling trait evolution on phylogenies",
  subtitle: "The final lesson turns phylogenetic trees into tools for comparative biology: trait models, ancestral state reconstruction, phylogenetic signal, and phylogenetically corrected regression.",
  big: "A phylogeny is not only an endpoint. Once you have a tree, you can ask how traits evolved, whether a trait carries phylogenetic signal, what ancestral states were likely, and whether two traits are associated after accounting for shared ancestry.",
  tags: ["comparative methods", "discrete traits", "continuous traits", "Mk", "ER / SYM / ARD", "BM", "OU", "ancestral states", "Pagel's λ", "Blomberg's K", "PIC", "PGLS"],
  workflow: ["tree + traits", "trait type", "discrete Mk", "continuous BM/OU", "model fit", "ancestral states", "phylogenetic signal", "PIC/PGLS"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["Trees are now analytical tools", "Earlier lessons focused on obtaining a defensible tree. Here the tree becomes the statistical scaffold for testing hypotheses about traits, ancestry, diversification and biogeography."],
    ["Trait type matters", "Discrete traits and continuous traits are not modeled with the same machinery: finite states usually point to Mk models, while quantitative traits point to BM/OU-type processes."],
    ["Do not ignore shared ancestry", "Species are not independent observations. Treating them as independent can inflate false positives because closely related taxa resemble each other partly due to common ancestry."],
    ["Model choice is still central", "The same logic seen in substitution models returns here: ER, SYM and ARD are different assumptions about transition rates; BM and OU are different assumptions about continuous trait dynamics."],
    ["The practical is the conceptual anchor", "The octopod depth-state example shows discrete ancestral-state reconstruction, while the Brownian simulation plus PIC regression shows why raw regression can be misleading."],
  ],
  sections: [
    ["1. From phylogeny as endpoint to phylogeny as tool", [
      "Phylogenetic comparative methods combine trees with trait data. The tree provides the expected covariance among species: close relatives are expected to be more similar than distant relatives under many evolutionary models.",
      "The slides frame comparative methods broadly: they can be used for model fitting, ancestral state reconstruction, diversification analyses, biogeography and tests of evolutionary hypotheses. In this lesson, the practical focuses especially on ancestral states and regression correction."
    ]],
    ["2. What data do comparative methods need?", [
      "Two inputs are fundamental: a phylogeny and trait data. An ultrametric tree is especially useful because branch lengths can be interpreted as time, making models such as Brownian Motion more meaningful.",
      "The trait table must match the tip labels of the tree. If names are inconsistent, the model is not comparing the intended species and the biological interpretation collapses."
    ]],
    ["3. Discrete vs continuous traits", [
      "Discrete characters have a finite set of states: for example presence/absence, flower colour categories, habitat classes, or the depth categories used for Octopodiformes in the practical.",
      "Continuous traits are measurements on a scale: body size, beak depth, enzyme activity, genome size, temperature tolerance, or any other quantitative phenotype. Different trait types require different likelihood models."
    ]],
    ["4. The Mk model for discrete characters", [
      "Mk is the standard model family for discrete character evolution. The M points to the Markov property: future changes depend on the current state, not on the full past history. The k indicates that the model can be generalized to any number of states.",
      "This should feel familiar from sequence evolution. The state space changes from nucleotides or amino acids to trait states, but the idea of a rate matrix governing transitions remains the same."
    ]],
    ["5. ER, SYM and ARD", [
      "ER, Equal Rates, assumes all state transitions have the same rate. It is simple, parameter-light and can be preferred when data are limited or when transitions look broadly similar.",
      "SYM allows different transition rates but keeps forward and reverse rates equal. ARD, All Rates Different, gives each directional transition its own rate, making it flexible but parameter-rich and vulnerable to overfitting on small datasets."
    ]],
    ["6. Ancestral state reconstruction", [
      "Ancestral state reconstruction asks which states were likely at internal nodes, given a tree, observed tip states and a model of trait evolution. It is not time travel; it is model-based inference with uncertainty.",
      "In the practical, `ace()` estimates the likelihood of each ancestral depth category at each internal node. Pie charts on nodes summarize those probabilities rather than declaring a single state with absolute certainty."
    ]],
    ["7. Continuous trait evolution", [
      "Continuous traits are not described by a finite transition matrix in the same way as discrete states. Instead, models describe how quantitative values move through time along branches.",
      "The two major models introduced are Brownian Motion, a neutral random-walk model, and Ornstein-Uhlenbeck, which adds stabilizing selection toward an optimum."
    ]],
    ["8. Brownian Motion", [
      "Brownian Motion models trait evolution as a random walk: at each small time step, the trait changes by a small normally distributed amount. There is no preferred direction and no optimum.",
      "A key expectation is that trait variance increases linearly with time since divergence. Under BM, close relatives tend to resemble each other because they share more recent evolutionary history."
    ]],
    ["9. Ornstein-Uhlenbeck", [
      "The OU model extends BM by adding stabilizing selection. Traits are pulled toward an optimum, commonly written θ, so variance may increase initially but then level off around an adaptive peak.",
      "OU includes parameters such as the optimum θ, ancestral/root state z₀, the strength of attraction α and the evolutionary rate σ². It is useful when traits appear constrained or when adaptive hypotheses are being tested."
    ]],
    ["10. Phylogenetic signal", [
      "Phylogenetic signal is the tendency for related species to resemble each other more than expected under random trait distribution. A strong signal means trait variation is structured by the tree.",
      "A weak signal can mean rapid evolution, convergence, ecological filtering, measurement noise, or trait dynamics that are not well captured by a simple tree-structured model."
    ]],
    ["11. Pagel's λ", [
      "Pagel's λ rescales internal branches to estimate how much trait covariance is explained by shared ancestry. It ranges from values near 0 to values near 1.",
      "λ ≈ 1 means the trait covariance is close to Brownian expectations on the tree. λ ≈ 0 means internal branches are effectively collapsed and the trait behaves almost independently of phylogeny."
    ]],
    ["12. Blomberg's K", [
      "Blomberg's K compares observed trait variance across a phylogeny to the variance expected under Brownian Motion. It is another way to quantify phylogenetic signal in quantitative traits.",
      "K ≈ 1 matches BM expectations, K > 1 indicates stronger conservation than BM predicts, and K < 1 indicates weaker signal, rapid evolution or convergence."
    ]],
    ["13. The non-independence problem", [
      "Standard regression assumes independent residuals. Species violate this assumption because shared ancestry induces covariance among observations.",
      "If phylogeny is ignored, regression can report false associations simply because related species share both traits through common ancestry. This is the comparative-methods version of autocorrelation."
    ]],
    ["14. PIC", [
      "Phylogenetically Independent Contrasts transform trait values into contrasts at nodes. The method removes the phylogenetic covariance expected under Brownian Motion and then runs regression on those contrasts.",
      "PIC is simple, fast and conceptually powerful, but it relies on assumptions about branch lengths and BM-like trait evolution."
    ]],
    ["15. PGLS", [
      "Phylogenetic Generalized Least Squares models the covariance structure directly in the regression. Instead of transforming the data first, it changes the error structure of the model.",
      "PGLS is flexible because it can incorporate branch-length transformations such as Pagel's λ and, in broader frameworks, different evolutionary covariance assumptions."
    ]],
    ["16. Reading comparative analyses carefully", [
      "A comparative result depends on the tree, branch lengths, trait coding, chosen model and taxon sampling. A beautiful plot does not remove those assumptions.",
      "The same practical lesson from the whole course applies here: tools do not answer biological questions automatically; they formalize assumptions, estimate parameters and require interpretation."
    ]],
  ],
  modelTitle: "Trait models at a glance",
  modelRows: [
    ["Mk", "Discrete characters", "Markov model for transitions among k finite trait states."],
    ["ER", "Discrete rate matrix", "All transitions share one rate; simple and parameter-light."],
    ["SYM", "Discrete rate matrix", "Forward and reverse transitions are equal, but different pairs can have different rates."],
    ["ARD", "Discrete rate matrix", "Every directional transition has its own rate; flexible but parameter-rich."],
    ["BM", "Continuous traits", "Random walk; variance increases with time; useful null model."],
    ["OU", "Continuous traits", "BM plus stabilizing selection toward an optimum."],
    ["Pagel's λ", "Phylogenetic signal", "Scales internal branches to estimate phylogenetic covariance."],
    ["Blomberg's K", "Phylogenetic signal", "Compares observed trait variance to BM expectation."],
    ["PIC", "Regression correction", "Transforms data into phylogenetically independent contrasts."],
    ["PGLS", "Regression correction", "Models covariance directly in generalized least squares."],
  ],
  practicalTitle: "Practical focus",
  practicalCards: [
    ["ape / phytools / geiger", "R packages used to read trees, manipulate phylogenies, fit comparative models and visualize trait evolution."],
    ["force.ultrametric()", "Makes the Octopodiformes tree ultrametric, which is helpful for time-based comparative models."],
    ["Depth categories", "Discrete trait states: P, E, D1, D2 and N describe maximum observed depth categories for octopodiform taxa."],
    ["fitDiscrete()", "Fits ER, SYM and ARD Mk-type models and reports model fit statistics."],
    ["Akaike weights", "Compare model support; in the practical, ER is the best fit for the discrete depth-state data."],
    ["ace()", "Performs ancestral state reconstruction for discrete traits and returns node likelihoods."],
    ["pbtree() + fastBM()", "Simulates a tree and two continuous traits evolving under Brownian Motion."],
    ["lm() vs pic()", "Shows why raw regression can be misleading and how PIC corrects for phylogenetic non-independence."],
  ],
  takeaways: [
    "Phylogenetic comparative methods use trees plus trait data to study evolutionary processes.",
    "Discrete traits have finite states; continuous traits are measured on a scale.",
    "Mk models discrete character evolution as a Markov process.",
    "ER, SYM and ARD differ in how transition rates among states are constrained.",
    "Ancestral state reconstruction estimates probabilities at internal nodes, not absolute historical facts.",
    "BM is a random-walk model where trait variance increases with time.",
    "OU adds stabilizing selection toward an optimum.",
    "Phylogenetic signal means related species resemble each other because of shared ancestry.",
    "Pagel's λ and Blomberg's K quantify phylogenetic signal in different ways.",
    "Species are not independent data points; ignoring phylogeny can inflate Type I error.",
    "PIC transforms trait data into contrasts; PGLS models the phylogenetic covariance structure directly.",
    "The practical links the theory to real commands: fitDiscrete, ace, aicw, fastBM, lm and pic."
  ],
  checklist: [
    "I can explain what phylogenetic comparative methods are used for.",
    "I can distinguish discrete and continuous traits.",
    "I can explain why Mk is analogous to substitution models seen earlier.",
    "I can compare ER, SYM and ARD.",
    "I can explain what ancestral state reconstruction estimates.",
    "I can define BM and OU in words.",
    "I can explain why BM is a null model for continuous trait evolution.",
    "I can explain what phylogenetic signal means.",
    "I can interpret λ close to 0 and λ close to 1.",
    "I can interpret K < 1, K ≈ 1 and K > 1.",
    "I can explain why species are not independent observations.",
    "I can state the difference between PIC and PGLS.",
    "I can connect the R practical commands to the biological question."
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 16 · Evolución de rasgos en filogenias",
  title: "Modelar la evolución de rasgos en filogenias",
  subtitle: "La última lección convierte los árboles filogenéticos en herramientas de biología comparativa: modelos de rasgos, reconstrucción ancestral, señal filogenética y regresión corregida por filogenia.",
  big: "Una filogenia no es solo un resultado final. Una vez que tienes un árbol, puedes preguntar cómo evolucionaron los rasgos, si existe señal filogenética, qué estados ancestrales son probables y si dos rasgos están asociados después de corregir por ascendencia compartida.",
  workflow: ["árbol + rasgos", "tipo de rasgo", "Mk discreto", "BM/OU continuo", "ajuste de modelo", "estados ancestrales", "señal filogenética", "PIC/PGLS"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo encaja la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["Los árboles ahora son herramientas", "Antes queríamos obtener un árbol defendible. Aquí el árbol se vuelve el marco estadístico para probar hipótesis sobre rasgos, ancestría, diversificación y biogeografía."],
    ["El tipo de rasgo importa", "Los rasgos discretos y continuos no se modelan igual: estados finitos apuntan a modelos Mk, mientras que rasgos cuantitativos apuntan a BM/OU."],
    ["No ignores la ascendencia compartida", "Las especies no son observaciones independientes. Tratarlas como independientes puede inflar falsos positivos porque los parientes se parecen por historia común."],
    ["La elección de modelo sigue siendo central", "La lógica de modelos vuelve: ER, SYM y ARD son supuestos distintos sobre tasas de transición; BM y OU son supuestos distintos sobre dinámica de rasgos continuos."],
    ["La práctica fija la idea", "El ejemplo de profundidad en Octopodiformes muestra reconstrucción ancestral discreta; la simulación BM con PIC muestra por qué la regresión cruda puede engañar."],
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۱۶ · تکامل صفات روی تبارزایی‌ها",
  title: "مدل‌سازی تکامل صفات روی تبارزایی‌ها",
  subtitle: "آخرین درس درخت تبارزایی را به ابزار زیست‌شناسی تطبیقی تبدیل می‌کند: مدل‌های صفت، بازسازی حالت‌های نیاکانی، سیگنال فیلوژنتیکی و رگرسیون تصحیح‌شده.",
  big: "درخت فقط خروجی نهایی نیست. با داشتن درخت می‌توان پرسید صفات چگونه تکامل یافته‌اند، آیا صفت سیگنال فیلوژنتیکی دارد، حالت‌های نیاکانی چه بوده‌اند، و آیا دو صفت پس از کنترل خویشاوندی مشترک با هم رابطه دارند.",
  workflow: ["درخت + صفت", "نوع صفت", "Mk", "BM/OU", "برازش مدل", "حالت نیاکانی", "سیگنال", "PIC/PGLS"],
  section: "بخش",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "نقشهٔ درس",
  emphasisTitle: "نکات تأکیدی استاد",
  checklistTitle: "پیش از ادامه",
  emphasis: [
    ["درخت‌ها ابزار تحلیل‌اند", "در این درس درخت چارچوب آماری برای آزمون فرضیه‌های مربوط به صفات و تکامل آن‌هاست."],
    ["نوع صفت مهم است", "صفات گسسته معمولاً با مدل Mk و صفات پیوسته با BM یا OU بررسی می‌شوند."],
    ["گونه‌ها مستقل نیستند", "به دلیل تاریخ تکاملی مشترک، گونه‌های خویشاوند داده‌های مستقل محسوب نمی‌شوند."],
    ["انتخاب مدل مهم است", "ER، SYM و ARD فرض‌های متفاوتی دربارهٔ نرخ گذار دارند؛ BM و OU نیز دینامیک‌های متفاوتی را برای صفات پیوسته فرض می‌کنند."],
    ["تمرین عملی کلیدی است", "مثال Octopodiformes بازسازی حالت نیاکانی و مثال Brownian/PIC اهمیت تصحیح فیلوژنتیکی را نشان می‌دهد."],
  ],
};

const copies = { en: baseEn, es, fa };

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
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">models</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.modelTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200">
      <div className="grid grid-cols-[0.8fr_1fr_1.45fr] bg-stone-950 text-sm font-black text-white">
        <div className="p-4">Model</div><div className="border-l border-white/10 p-4">Used for</div><div className="border-l border-white/10 p-4">Main idea</div>
      </div>
      {copy.modelRows.map(([model, use, idea]) => <div key={model} className="grid grid-cols-[0.8fr_1fr_1.45fr] border-t border-stone-200 bg-[#fffaf0] text-sm font-semibold leading-6 text-stone-700">
        <div className="p-4 font-black text-stone-950">{model}</div><div className="border-l border-stone-200 p-4">{use}</div><div className="border-l border-stone-200 p-4">{idea}</div>
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
    question: "What is the main goal of phylogenetic comparative methods?",
    options: ["To combine trees with trait data to test evolutionary hypotheses", "To ignore shared ancestry and run ordinary statistics", "To align protein-coding genes by codons", "To infer only branch support values"],
    answer: 0,
    explanation: "Comparative methods use phylogenies plus associated data to study trait evolution, ancestry, diversification and related processes.",
    optionExplanations: ["Correct. The tree provides the evolutionary framework for interpreting trait data.", "Ignoring shared ancestry is exactly the problem comparative methods are designed to avoid.", "Codon alignment belongs to selection analyses, not the core definition of comparative methods.", "Branch support is a phylogenetic inference topic, not the main goal here."],
  },
  {
    kind: "theory",
    question: "Which trait is discrete rather than continuous?",
    options: ["Presence or absence of wings", "Body length measured in centimeters", "Enzyme activity measured on a scale", "Beak depth measured in millimeters"],
    answer: 0,
    explanation: "Discrete traits have a finite number of states, such as present/absent or categorical depth zones.",
    optionExplanations: ["Correct. Presence/absence is a finite-state character.", "Body length is a continuous measurement.", "Enzyme activity is quantitative and continuous here.", "Beak depth is a continuous measurement."],
  },
  {
    kind: "theory",
    question: "What does the Mk model describe?",
    options: ["Evolution of discrete character states as a Markov process", "Brownian random walks for continuous traits only", "Bootstrap resampling of alignment columns", "dN/dS variation across codon sites"],
    answer: 0,
    explanation: "Mk is a Markov model for discrete trait evolution with k possible states.",
    optionExplanations: ["Correct. Mk is the discrete-trait analogue of a state-transition model.", "Brownian Motion is used for continuous traits, not the Mk model.", "Bootstrap is a support method, not trait evolution modeling.", "dN/dS belongs to codon models and selection analyses."],
  },
  {
    kind: "theory",
    question: "In the ER version of an Mk model, what is assumed?",
    options: ["All transitions among states share the same rate", "Every directional transition has its own unique rate", "Forward and reverse transitions are always forbidden", "Traits evolve toward a continuous optimum"],
    answer: 0,
    explanation: "ER means Equal Rates: the same transition rate is used for every state change.",
    optionExplanations: ["Correct. ER is the simplest rate matrix assumption.", "That describes ARD, not ER.", "SYM constrains forward/reverse equality; it does not forbid transitions.", "That is the OU model idea for continuous traits."],
  },
  {
    kind: "theory",
    question: "What distinguishes ARD from ER and SYM in discrete trait modeling?",
    options: ["ARD allows each directional transition to have its own rate", "ARD forces all rates to be equal", "ARD only applies to continuous body size", "ARD collapses the tree into a star"],
    answer: 0,
    explanation: "ARD, All Rates Different, is the most flexible of the three rate-matrix options discussed.",
    optionExplanations: ["Correct. This flexibility can help but can also overfit.", "Equal rates describe ER.", "Continuous traits are modeled with BM/OU-type processes, not ARD Mk rates.", "ARD changes the transition model, not the topology itself."],
  },
  {
    kind: "theory",
    question: "Under Brownian Motion trait evolution, what happens to trait variance through time?",
    options: ["It increases linearly with time since divergence", "It is always pulled back to a fixed optimum", "It stays exactly zero at all nodes", "It depends only on bootstrap support"],
    answer: 0,
    explanation: "BM is a random-walk model in which variance accumulates with elapsed evolutionary time.",
    optionExplanations: ["Correct. This is a core BM expectation.", "That describes OU, not BM.", "BM allows variance to accumulate.", "Bootstrap support is not the driver of BM variance."],
  },
  {
    kind: "theory",
    question: "What does the OU model add to Brownian Motion?",
    options: ["Stabilizing selection pulling traits toward an optimum", "A codon table for synonymous substitutions", "A nonparametric bootstrap procedure", "A requirement that all traits be discrete"],
    answer: 0,
    explanation: "OU is BM plus attraction toward an optimum, often used for stabilizing selection or adaptive peaks.",
    optionExplanations: ["Correct. OU includes an optimum and strength of attraction.", "Codon tables belong to selection analyses.", "Bootstrap is unrelated to the OU process itself.", "OU is for continuous traits."],
  },
  {
    kind: "theory",
    question: "What does strong phylogenetic signal mean?",
    options: ["Related species resemble each other more than expected by random trait distribution", "All branches have 100% bootstrap support", "The trait must be under positive selection", "The tree must be a cladogram with no branch lengths"],
    answer: 0,
    explanation: "Phylogenetic signal measures how much trait similarity follows shared ancestry.",
    optionExplanations: ["Correct. Shared ancestry structures trait covariance.", "Support and signal are different concepts.", "Strong signal can arise without positive selection.", "Branch lengths are often important for measuring signal."],
  },
  {
    kind: "theory",
    question: "How should Pagel's λ close to 0 be interpreted?",
    options: ["The trait behaves almost independently of phylogeny", "The trait perfectly matches Brownian covariance", "The trait is necessarily a discrete character", "The tree has no terminal taxa"],
    answer: 0,
    explanation: "λ near 0 collapses internal branches, meaning shared ancestry explains little of the trait covariance.",
    optionExplanations: ["Correct. Low λ means weak phylogenetic structure in the trait.", "λ near 1 is closer to Brownian covariance.", "λ is about phylogenetic signal, not whether a trait is discrete.", "λ says nothing like this about the number of taxa."],
  },
  {
    kind: "theory",
    question: "What does Blomberg's K > 1 indicate?",
    options: ["The trait is more conserved among close relatives than expected under BM", "The trait is completely independent of phylogeny", "The trait has no variance", "The trait is a codon model parameter"],
    answer: 0,
    explanation: "K > 1 means close relatives are more similar than expected under Brownian Motion.",
    optionExplanations: ["Correct. It indicates stronger-than-BM phylogenetic conservation.", "Independence from phylogeny would imply weak signal, not K > 1.", "K > 1 does not mean zero variance.", "K is a comparative-method metric, not a codon parameter."],
  },
  {
    kind: "practical",
    question: "In the practical, why is `force.ultrametric()` used on the Octopodiformes tree?",
    options: ["To make the tree suitable for time-based comparative analyses", "To delete all fossil taxa", "To infer a new maximum-likelihood topology", "To convert discrete traits into codons"],
    answer: 0,
    explanation: "An ultrametric tree has tips aligned in time and is better suited for comparative models involving trait evolution through time.",
    optionExplanations: ["Correct. This helps make branch lengths interpretable for comparative methods.", "The command is not a fossil-filtering step.", "It does not infer a new ML topology.", "It has nothing to do with codons."],
  },
  {
    kind: "practical",
    question: "What are P, E, D1, D2 and N in the Octopodiformes practical?",
    options: ["Discrete depth-zone character states", "Substitution models for nucleotides", "Bootstrap replicate labels", "Continuous Brownian traits"],
    answer: 0,
    explanation: "They classify maximum observed depth: pelagic, euphotic, disphotic categories and no-photic.",
    optionExplanations: ["Correct. They are the states of the discrete trait.", "They are not DNA substitution models.", "They do not label bootstrap trees.", "They are categorical, not continuous."],
  },
  {
    kind: "practical",
    question: "What does `fitDiscrete(tree, data, model='ER')` do?",
    options: ["Fits an equal-rates Mk-type model to the discrete trait", "Runs a raw linear regression", "Computes dN/dS for codons", "Calculates RF distances among gene trees"],
    answer: 0,
    explanation: "`fitDiscrete()` fits discrete trait evolution models such as ER, SYM and ARD.",
    optionExplanations: ["Correct. ER assumes all transitions share one rate.", "Raw regression is done with `lm()` later in the practical.", "dN/dS belongs to CODEML/codon models.", "RF distance compares tree topologies, not discrete trait model fit."],
  },
  {
    kind: "practical",
    question: "What does `ace(data, tree, model='ER', type='discrete')` estimate?",
    options: ["Ancestral state likelihoods at internal nodes", "A codon-aware alignment", "A bootstrap support distribution", "A GTR substitution matrix"],
    answer: 0,
    explanation: "`ace()` performs ancestral character estimation; for discrete traits it estimates state probabilities at nodes.",
    optionExplanations: ["Correct. The node pies visualize these likelihoods.", "Codon-aware alignment was Lesson 15 with PRANK.", "Bootstrap support is a different analysis.", "GTR is a nucleotide substitution model."],
  },
  {
    kind: "practical",
    question: "Why does the practical compare `lm(x ~ y)` with a regression on `pic(x, tree)` and `pic(y, tree)`?",
    options: ["To show how phylogenetic non-independence can create misleading raw trait correlations", "To prove Brownian traits are always causally related", "To convert a continuous trait into a discrete Mk model", "To estimate fossil calibration priors"],
    answer: 0,
    explanation: "The raw regression treats tips as independent; PIC corrects for covariance due to shared ancestry.",
    optionExplanations: ["Correct. This is the practical demonstration of why comparative corrections matter.", "Brownian-simulated traits can look correlated because of shared phylogeny, not causation.", "PIC does not convert continuous traits into Mk states.", "Fossil calibration belongs to divergence-time analysis."],
  },
];

export const lesson16Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function TraitEvolutionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = copies[lang] || copies.en;
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

    {copy.sections.slice(0, 6).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <ModelTable copy={copy} />

    {copy.sections.slice(6, 13).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 7}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <PracticalBridge copy={copy} />

    {copy.sections.slice(13).map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 14}</div>
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

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
    eyebrow: "Lesson 07 · Models of sequence evolution",
    title: "How sequence evolution is modelled",
    subtitle: "Models are the bridge between an alignment and a probabilistic phylogenetic inference: they say which changes are possible, how likely they are, and how hidden multiple substitutions are handled.",
    big: "A substitution model is a simplified but explicit story of sequence change. It defines states, transition probabilities and assumptions. This matters because observed differences are not the same as real evolutionary substitutions: the same site may have changed several times, sites may evolve at different speeds, and different data types need different models.",
    flow: ["states", "substitution rates", "base / codon / amino-acid frequencies", "rate heterogeneity", "model selection", "tree inference"],
    tags: ["Markov property", "Ts/Tv", "JC69 → GTR", "codon models", "empirical AA models", "+Γ / +I", "IQ-TREE"],
    emphasisTitle: "What the professor emphasized",
    emphasis: [
      ["Models are useful simplifications", "The key quote of the lecture is Box's idea: all models are wrong, but some are useful. Do not treat a model as the literal biological truth; treat it as an explicit approximation that lets inference become computable."],
      ["Markov property is exam material", "A substitution model asks what happens next from the current state. It does not remember the full history of previous states. This is the core of the Markov property."],
      ["Do not confuse parameters and values", "A model parameter is a slot in the model, such as a transition/transversion rate or a base-frequency term. Its numerical value is estimated from data or fixed from a previous empirical study."],
      ["Observed distance underestimates change", "When multiple substitutions happen at the same site, observed p-distance misses part of the evolutionary history. Models try to correct for that hidden change."],
    ],
    sections: [
      ["1. Why do we need substitution models?", ["In distance and parsimony, it is tempting to count visible differences directly. But visible differences are only a surface trace of the actual evolutionary process.", "A site can change A→G and later G→A, leaving no visible difference despite two substitutions. Or it can change through several intermediate states. A model lets us reason about these unobserved events rather than pretending that observed mismatches are the whole story."]],
      ["2. Markov models: states and transitions", ["A Markov model describes movement among a finite set of states. For nucleotides, the states are A, C, G and T; for codons there are 61 sense codons; for amino acids there are 20 states.", "The Markov property says that the probability of the next state depends on the current state, not on the whole past trajectory. In phylogenetics this makes substitutions mathematically tractable along branches."]],
      ["3. Transitions, transversions and model complexity", ["Transitions are substitutions within the same nucleotide class: A↔G among purines and C↔T among pyrimidines. Transversions move between purines and pyrimidines. Many datasets show transition bias, so models that distinguish Ts/Tv can fit better than equal-rate models.", "Nucleotide models can be seen as a ladder of complexity: JC69 assumes equal base frequencies and equal rates; K80 distinguishes transitions and transversions; F81 allows unequal base frequencies; HKY combines unequal frequencies with Ts/Tv bias; TN93 adds two transition rates; GTR allows six reversible exchangeability rates plus base frequencies."]],
      ["4. Mechanistic versus empirical models", ["Nucleotide and codon models are often mechanistic: their parameters are estimated from the dataset and have biological interpretations, such as base frequencies, exchangeability rates or dN/dS.", "Protein models such as Dayhoff/PAM, JTT, WAG, LG and MtREV are commonly empirical: their rate matrices were estimated from large reference datasets and are then reused. Some parts, such as amino-acid frequencies with +F, can still be estimated from the current alignment."]],
      ["5. Codon models and selection", ["Codon models use the genetic code. Because several codons encode the same amino acid, substitutions can be synonymous or nonsynonymous. This allows models to connect sequence evolution with selection on proteins.", "MG94 separates rates of synonymous and nonsynonymous substitutions. GY94 is often expressed with ω = dN/dS: ω < 1 suggests purifying selection, ω = 1 is compatible with neutral evolution, and ω > 1 suggests positive selection. Later lessons go deeper into this." ]],
      ["6. Rate heterogeneity and saturation", ["Real alignments rarely evolve at one uniform rate. Some sites are highly conserved, some are noisy, and some may be effectively invariable. Modifiers such as +Γ model among-site rate variation, while +I allows a proportion of invariant sites.", "Saturation occurs when too many substitutions accumulate at the same sites. It causes underestimation of real divergence, erodes phylogenetic signal and can contribute to long-branch attraction. This is why corrected distances and model choice matter." ]],
      ["7. Practical model selection", ["In the practical, IQ-TREE is used with ModelFinder. The command with -m TESTONLY evaluates candidate models for an alignment and reports alignment statistics, likelihoods and information criteria such as AIC, AICc and BIC.", "The practical output is useful because it connects theory to diagnostics: number of sequences, columns, distinct patterns, parsimony-informative sites, singleton sites, constant sites, gap/ambiguity percentage and composition tests. The model name itself is a compressed description of assumptions, such as LG+F+G4." ]],
    ],
    modelTableTitle: "Model ladder",
    modelRows: [
      ["JC69", "Equal base frequencies; all substitutions equally likely", "baseline / oversimplified"],
      ["K80 / K2P", "Equal base frequencies; transitions and transversions have different rates", "captures Ts/Tv bias"],
      ["F81", "Unequal base frequencies; equal substitution rates", "captures composition bias"],
      ["HKY85", "Unequal base frequencies plus transition/transversion bias", "common intermediate model"],
      ["TN93", "Unequal base frequencies; two transition rates; one transversion rate", "more flexible Ts structure"],
      ["GTR", "Six reversible exchangeability rates plus base frequencies", "general reversible nucleotide model"],
    ],
    practicalTitle: "Practical connection",
    practical: [
      ["Run ModelFinder", "Use IQ-TREE on an aligned and filtered MSA with -m TESTONLY or -m MF to compare candidate models."],
      ["Read the summary", "The .iqtree file is the human-readable report: it contains input statistics, tested models and the selected best-fit model."],
      ["Interpret model names", "LG+F+G4 means an LG empirical amino-acid matrix, amino-acid frequencies estimated from the alignment, and gamma-distributed rate heterogeneity with four categories."],
      ["Check data assumptions", "The standard output reports parsimony-informative sites, singleton sites, constant sites, gaps/ambiguities and composition tests. These are not just decoration: they diagnose the data before tree inference."],
    ],
    takeaways: ["Models correct the gap between observed differences and unobserved substitutions.", "The Markov property means the next state depends on the current state only.", "JC69, K80, F81, HKY, TN93 and GTR differ by rates and base-frequency assumptions.", "Codon models connect substitutions with synonymous/nonsynonymous change and dN/dS.", "Empirical amino-acid models use fixed matrices, but modifiers like +F and +G can adapt to the dataset.", "Saturation and rate heterogeneity explain why raw p-distance can mislead."],
    checklist: ["I can define a substitution model.", "I can explain the Markov property.", "I can distinguish transitions from transversions.", "I can order JC69, K80, F81, HKY, TN93 and GTR by assumptions.", "I can explain empirical vs mechanistic models.", "I can interpret +F, +G4 and +I in a model name.", "I can explain why saturation underestimates divergence."],
  },
  es: {
    eyebrow: "Lección 07 · Modelos de evolución de secuencias",
    title: "Cómo se modela la evolución de secuencias",
    subtitle: "Los modelos conectan el alineamiento con la inferencia probabilística: dicen qué cambios son posibles, qué tan probables son y cómo se corrigen sustituciones múltiples no observadas.",
    big: "Un modelo de sustitución es una historia simplificada pero explícita de cómo cambian las secuencias. Define estados, probabilidades de transición y supuestos. Esto importa porque las diferencias observadas no son lo mismo que las sustituciones reales: un mismo sitio pudo cambiar varias veces, los sitios pueden evolucionar a distintas velocidades y cada tipo de dato necesita modelos distintos.",
    flow: ["estados", "tasas de sustitución", "frecuencias", "heterogeneidad de tasas", "selección de modelo", "inferencia del árbol"],
    tags: ["propiedad de Markov", "Ts/Tv", "JC69 → GTR", "modelos de codones", "modelos AA empíricos", "+Γ / +I", "IQ-TREE"],
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["Los modelos son simplificaciones útiles", "La idea clave es: todos los modelos son incorrectos, pero algunos son útiles. No son la biología literal, sino una aproximación explícita para poder inferir."],
      ["La propiedad de Markov es importante", "El modelo pregunta qué pasa después desde el estado actual. No recuerda toda la historia previa del sitio."],
      ["No confundas parámetros con valores", "Un parámetro es una parte del modelo; el valor numérico es lo que se estima en los datos o viene fijado por un modelo empírico."],
      ["La distancia observada subestima el cambio", "Si ocurren varias sustituciones en el mismo sitio, el p-distance pierde parte de la historia. Los modelos intentan corregir ese cambio oculto."],
    ],
    sections: [
      ["1. ¿Por qué necesitamos modelos de sustitución?", ["Contar diferencias visibles es útil, pero no basta. Las diferencias observadas son solo una traza superficial del proceso evolutivo.", "Un sitio puede cambiar A→G y luego G→A, de modo que al final no vemos diferencia aunque ocurrieron dos sustituciones. El modelo permite razonar sobre eventos no observados."]],
      ["2. Modelos de Markov: estados y transiciones", ["Un modelo de Markov describe movimiento entre estados finitos. En nucleótidos son A, C, G y T; en codones hay 61 codones con sentido; en aminoácidos hay 20 estados.", "La propiedad de Markov dice que la probabilidad del siguiente estado depende del estado actual, no de toda la trayectoria previa."]],
      ["3. Transiciones, transversiones y complejidad", ["Las transiciones ocurren dentro de la misma clase: A↔G y C↔T. Las transversiones ocurren entre purinas y pirimidinas. Muchos datos muestran sesgo hacia transiciones.", "Los modelos forman una escalera: JC69 iguala todo; K80 separa Ts/Tv; F81 permite frecuencias desiguales; HKY combina frecuencias desiguales y Ts/Tv; TN93 añade dos tasas de transición; GTR permite seis tasas reversibles y frecuencias." ]],
      ["4. Modelos mecanísticos versus empíricos", ["Los modelos de nucleótidos y codones suelen ser mecanísticos: sus parámetros se estiman desde el dataset y tienen interpretación biológica.", "Los modelos de proteínas como Dayhoff/PAM, JTT, WAG, LG y MtREV suelen ser empíricos: usan matrices estimadas previamente desde muchos alineamientos. Algunos componentes, como +F, sí pueden estimarse desde el alineamiento actual." ]],
      ["5. Modelos de codones y selección", ["Los modelos de codones usan el código genético. Como varios codones codifican el mismo aminoácido, los cambios pueden ser sinónimos o no sinónimos.", "MG94 separa dS y dN. GY94 suele expresarse con ω = dN/dS: ω < 1 sugiere selección purificadora, ω = 1 evolución neutral y ω > 1 selección positiva." ]],
      ["6. Heterogeneidad de tasas y saturación", ["Los sitios no evolucionan todos a la misma velocidad. +Γ modela variación de tasas entre sitios y +I permite una proporción de sitios invariantes.", "La saturación ocurre cuando demasiadas sustituciones se acumulan en los mismos sitios. Subestima la divergencia real, reduce señal filogenética y puede contribuir a long-branch attraction." ]],
      ["7. Selección de modelo en la práctica", ["En la práctica se usa IQ-TREE con ModelFinder. -m TESTONLY evalúa modelos candidatos y reporta estadísticas del alineamiento, likelihoods y criterios como AIC, AICc y BIC.", "El nombre del modelo resume supuestos: LG+F+G4 significa matriz empírica LG, frecuencias estimadas del alineamiento y heterogeneidad gamma con cuatro categorías." ]],
    ],
    modelTableTitle: "Escalera de modelos",
    modelRows: [],
    practicalTitle: "Conexión práctica",
    practical: [],
    takeaways: [],
    checklist: []
  },
  fa: {
    eyebrow: "درس ۰۷ · مدل‌های تکامل توالی",
    title: "چگونه تکامل توالی مدل‌سازی می‌شود",
    subtitle: "مدل‌ها بین هم‌ترازی و استنباط فیلوژنتیک احتمالاتی پل می‌زنند: چه تغییرهایی ممکن‌اند، چقدر محتمل‌اند و چگونه تغییرهای پنهان اصلاح می‌شوند.",
    big: "مدل جانشینی یک روایت ساده‌شده اما صریح از تغییر توالی است. اختلاف‌های مشاهده‌شده همیشه برابر با تعداد واقعی جانشینی‌ها نیستند، چون یک جایگاه می‌تواند چند بار تغییر کند و جایگاه‌های مختلف سرعت‌های متفاوتی داشته باشند.",
    flow: ["حالت‌ها", "نرخ‌های جانشینی", "فراوانی‌ها", "ناهمگنی نرخ", "انتخاب مدل", "استنباط درخت"],
    tags: ["ویژگی مارکوف", "Ts/Tv", "JC69 → GTR", "مدل‌های کدون", "مدل‌های تجربی پروتئین", "+Γ / +I", "IQ-TREE"],
    emphasisTitle: "نکات مهم استاد",
    emphasis: [
      ["مدل‌ها ساده‌سازی‌های مفیدند", "مدل حقیقت کامل زیستی نیست؛ یک تقریب صریح است که محاسبه و استنباط را ممکن می‌کند."],
      ["ویژگی مارکوف", "حالت بعدی فقط به حالت فعلی وابسته است، نه به کل تاریخچهٔ قبلی."],
      ["پارامتر با مقدار فرق دارد", "پارامتر جایگاه یا بخش مدل است؛ مقدار عددی چیزی است که از داده تخمین زده می‌شود یا در مدل تجربی ثابت است."],
      ["فاصلهٔ مشاهده‌شده تغییر واقعی را کم‌برآورد می‌کند", "اگر چند جانشینی در یک جایگاه رخ دهد، p-distance بخشی از تاریخچه را نمی‌بیند."],
    ],
    sections: [], modelTableTitle: "نردبان مدل‌ها", modelRows: [], practicalTitle: "بخش عملی", practical: [], takeaways: [], checklist: []
  }
};

c.es.modelRows = c.en.modelRows;
c.es.practical = [
  ["Ejecutar ModelFinder", "Usa IQ-TREE con -m TESTONLY o -m MF sobre un MSA alineado y filtrado para comparar modelos candidatos."],
  ["Leer el resumen", "El archivo .iqtree es el reporte legible: contiene estadísticas del input, modelos probados y el modelo elegido."],
  ["Interpretar nombres de modelos", "LG+F+G4 significa una matriz empírica LG, frecuencias de aminoácidos estimadas desde el alineamiento y heterogeneidad de tasas gamma con cuatro categorías."],
  ["Revisar supuestos de los datos", "El output reporta sitios parsimony-informative, singleton, constant, gap/ambiguity y composition tests. Sirve para diagnosticar los datos antes del árbol."],
];
c.es.takeaways = c.en.takeaways;
c.es.checklist = ["Puedo definir un modelo de sustitución.", "Puedo explicar la propiedad de Markov.", "Puedo distinguir transiciones y transversiones.", "Puedo ordenar JC69, K80, F81, HKY, TN93 y GTR por supuestos.", "Puedo explicar modelos empíricos versus mecanísticos.", "Puedo interpretar +F, +G4 y +I.", "Puedo explicar por qué la saturación subestima la divergencia."];
c.fa.sections = c.en.sections;
c.fa.modelRows = c.en.modelRows;
c.fa.practical = c.en.practical;
c.fa.takeaways = c.en.takeaways;
c.fa.checklist = c.en.checklist;

function Card({ title, children, tone = "stone" }) {
  return <article className={`rounded-[2rem] border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}><h3 className="text-xl font-black tracking-tight">{title}</h3><div className="mt-3 text-sm font-semibold leading-7 opacity-85">{children}</div></article>;
}

function Flow({ items }) {
  return <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">{items.map((item, index) => <div key={item} className="rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-sm font-black text-white">{index + 1}</div><div className="text-sm font-black leading-6 text-stone-800">{item}</div></div>)}</div>;
}

function ModelLadder({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">nucleotide models</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.modelTableTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-stone-200">
      <div className="grid grid-cols-[0.7fr_2fr_1.1fr] bg-stone-950 text-xs font-black uppercase tracking-[0.16em] text-white">
        <div className="p-4">Model</div><div className="p-4">Assumptions</div><div className="p-4">Why it matters</div>
      </div>
      {copy.modelRows.map(([model, assumptions, why], index) => <div key={model} className={`grid grid-cols-[0.7fr_2fr_1.1fr] text-sm font-semibold leading-6 ${index % 2 ? "bg-stone-50" : "bg-white"}`}>
        <div className="border-t border-stone-200 p-4 font-black text-red-800">{model}</div>
        <div className="border-t border-stone-200 p-4 text-stone-700">{assumptions}</div>
        <div className="border-t border-stone-200 p-4 text-stone-700">{why}</div>
      </div>)}
    </div>
  </section>;
}

function StateDiagram() {
  const states = [{ id: "A", x: 50, y: 20 }, { id: "G", x: 160, y: 20 }, { id: "C", x: 50, y: 120 }, { id: "T", x: 160, y: 120 }];
  return <section className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">visual intuition</div>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-stone-950">A model is a network of possible changes</h2>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-700">For nucleotides, the model decides how likely it is to move among A, C, G and T. Simpler models force many arrows to share the same rate; more complex models allow more rates and unequal frequencies.</p>
      <svg viewBox="0 0 220 150" className="mt-5 h-56 w-full rounded-3xl border border-stone-200 bg-stone-50">
        <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#b91c1c" /></marker></defs>
        {[["A","G"],["C","T"],["A","C"],["A","T"],["G","C"],["G","T"]].map(([a,b]) => {
          const s = states.find(x => x.id === a); const e = states.find(x => x.id === b);
          const isTs = (a === "A" && b === "G") || (a === "C" && b === "T");
          return <line key={`${a}${b}`} x1={s.x} y1={s.y} x2={e.x} y2={e.y} stroke={isTs ? "#b91c1c" : "#78716c"} strokeWidth={isTs ? 4 : 2} strokeDasharray={isTs ? "" : "5 5"} markerEnd="url(#arrow)" />;
        })}
        {states.map(s => <g key={s.id}><circle cx={s.x} cy={s.y} r="18" fill="#fff" stroke="#1c1917" strokeWidth="3" /><text x={s.x} y={s.y + 6} textAnchor="middle" fontSize="18" fontWeight="900" fill="#1c1917">{s.id}</text></g>)}
      </svg>
    </div>
    <div className="grid gap-5 md:grid-cols-2">
      <Card title="Transitions" tone="red">A↔G and C↔T happen within the same chemical class. K80/HKY/TN93 explicitly recognize that these often behave differently from transversions.</Card>
      <Card title="Transversions" tone="stone">A↔C, A↔T, G↔C and G↔T move between purine and pyrimidine classes. They are usually less frequent and are often modeled separately.</Card>
      <Card title="Frequencies" tone="sky">Base frequencies describe how common A, C, G and T are at equilibrium. F81, HKY, TN93 and GTR allow unequal frequencies.</Card>
      <Card title="Hidden substitutions" tone="amber">The observed state at a tip may hide several changes along the branch. This is the reason models are needed for corrected distances and likelihood.</Card>
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.practicalTitle}</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">ModelFinder makes the model choice explicit</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-2">{copy.practical.map(([title, body]) => <Card key={title} title={title} tone="stone">{body}</Card>)}</div>
    <pre className="mt-6 overflow-x-auto rounded-3xl bg-stone-950 p-5 text-sm font-bold leading-7 text-stone-100"><code>{`iqtree2 -s data/example_alignements/aa/N0.HOG0000096.ref.aln -m TESTONLY
# output: alignment stats, composition test, likelihood table, AIC/AICc/BIC, selected model`}</code></pre>
  </section>;
}

function Takeaways({ copy }) {
  return <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">takeaways</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">What to remember</h2>
    <div className="mt-5 grid gap-3 md:grid-cols-2">{copy.takeaways.map(item => <div key={item} className="rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100">{item}</div>)}</div>
  </section>;
}

const quizEn = [
  {kind:"theory",question:"What is the main purpose of a substitution model in phylogenetics?",options:["To describe probabilities of sequence changes through evolutionary time.","To manually align sequences by color.","To remove all gaps from an alignment.","To guarantee that the inferred tree is correct."],answer:0,optionExplanations:["Correct. A substitution model formalizes how states change and supports distance correction, likelihood and Bayesian inference.","Manual inspection may help alignment, but it is not the purpose of a substitution model.","Filtering gaps is an alignment-processing step, not a substitution model.","Models are approximations; they do not guarantee truth."]},
  {kind:"theory",question:"The Markov property means that the probability of the next state depends on:",options:["The current state only.","Every previous state in the complete history.","The name of the taxon.","The order of taxa in the alignment file."],answer:0,optionExplanations:["Correct. This memoryless assumption is central to Markov substitution models.","That would violate the Markov simplification used here.","Taxon names are labels, not model states.","File order should not determine substitution probabilities."]},
  {kind:"theory",question:"Which pair is a transition?",options:["A↔G","A↔C","A↔T","G↔T"],answer:0,optionExplanations:["Correct. A and G are both purines, so this is a transition.","A is a purine and C is a pyrimidine, so this is a transversion.","A↔T is a purine-pyrimidine change, a transversion.","G↔T is a purine-pyrimidine change, a transversion."]},
  {kind:"theory",question:"JC69 assumes:",options:["Equal base frequencies and equal substitution rates.","Unequal base frequencies and six different rates.","Two transition rates and one transversion rate.","A codon-based dN/dS parameter."],answer:0,optionExplanations:["Correct. JC69 is the simplest equal-frequency, equal-rate nucleotide model.","That describes a much more complex model such as GTR.","That is closer to TN93.","dN/dS belongs to codon models, not JC69."]},
  {kind:"theory",question:"K80/K2P improves over JC69 mainly by:",options:["Distinguishing transitions from transversions.","Allowing codons to be stop codons.","Using posterior probabilities.","Estimating amino-acid replacement matrices from proteins."],answer:0,optionExplanations:["Correct. K80 adds separate rates for transitions and transversions while keeping equal base frequencies.","This is unrelated to K80.","Posterior probabilities belong to Bayesian inference.","That describes empirical amino-acid model construction."]},
  {kind:"theory",question:"F81 differs from JC69 because F81:",options:["Allows unequal equilibrium base frequencies.","Distinguishes synonymous and nonsynonymous substitutions.","Uses only amino-acid states.","Has no substitution process."],answer:0,optionExplanations:["Correct. F81 keeps equal exchangeability but permits unequal base frequencies.","That belongs to codon models such as MG94/GY94.","F81 is a nucleotide model.","F81 is still a substitution model."]},
  {kind:"theory",question:"GTR is best described as:",options:["A general reversible nucleotide model with six exchangeability rates and base frequencies.","A model with one equal rate for all changes only.","A protein-only empirical matrix.","A tool to trim alignments."],answer:0,optionExplanations:["Correct. GTR is the most general common time-reversible nucleotide model.","That is closer to JC69.","Protein empirical matrices include models such as JTT, WAG and LG.","Trimming is done by tools like Gblocks, not GTR."]},
  {kind:"theory",question:"In codon models, ω = dN/dS greater than 1 is usually interpreted as:",options:["Positive selection.","Purifying selection.","Strict molecular clock.","No substitutions."],answer:0,optionExplanations:["Correct. More nonsynonymous than synonymous change relative to expectation suggests positive selection.","Purifying selection is associated with ω < 1.","A molecular clock concerns rates through time, not dN/dS directly.","ω > 1 implies nonsynonymous substitutions are occurring, not absent."]},
  {kind:"theory",question:"Empirical amino-acid models such as JTT, WAG or LG usually:",options:["Use fixed rate matrices estimated from large reference datasets.","Estimate every exchangeability only from the current nucleotide alignment.","Are codon models based on dN/dS.","Are gap-opening penalties."],answer:0,optionExplanations:["Correct. Their substitution matrices come from previous large-scale protein datasets.","This is more typical of mechanistic nucleotide models.","dN/dS belongs to codon models.","Gap penalties are alignment scoring parameters."]},
  {kind:"theory",question:"What problem does saturation create?",options:["It hides multiple substitutions at the same sites and can underestimate divergence.","It makes every site perfectly informative.","It prevents any model from having parameters.","It automatically roots a tree."],answer:0,optionExplanations:["Correct. Saturation erases or obscures the history of repeated changes.","Saturation usually destroys or weakens phylogenetic signal.","Models can still have parameters; the issue is loss of signal and model fit.","Saturation has nothing to do with rooting by itself."]},
  {kind:"practical",question:"In the Lesson 07 practical, what does `iqtree2 -s alignment -m TESTONLY` do?",options:["Runs standard model selection on the alignment without a full tree inference workflow.","Runs MAFFT to create a new alignment.","Runs Gblocks to trim poorly aligned columns.","Runs ASTRAL to infer a species tree."],answer:0,optionExplanations:["Correct. TESTONLY asks IQ-TREE/ModelFinder to test models and report model-selection statistics.","MAFFT is an alignment program, not this IQ-TREE command.","Gblocks filters alignments; this command tests substitution models.","ASTRAL uses gene trees for species-tree inference, not this model-selection command."]},
  {kind:"practical",question:"The practical IQ-TREE output reports 109 parsimony-informative sites, 220 singleton sites and 174 constant sites. What is the point of reading this?",options:["It diagnoses the amount and structure of phylogenetic signal in the alignment.","It tells you the exact final species tree.","It proves that no model is needed.","It replaces sequence alignment."],answer:0,optionExplanations:["Correct. These counts summarize the data before interpreting model selection and tree inference.","Site counts do not directly give the final topology.","The output is part of a model-selection workflow, not evidence against models.","Alignment must already exist before this IQ-TREE run."]},
  {kind:"practical",question:"In a model name such as LG+F+G4, what does +F indicate?",options:["Amino-acid frequencies are estimated from the current alignment.","Four gamma rate categories are used.","The model is a codon model with dN/dS.","All sites are removed as filters."],answer:0,optionExplanations:["Correct. +F uses empirical frequencies from the alignment.","Four gamma categories are indicated by +G4, not +F.","LG is an amino-acid model, not a codon dN/dS model.","+F is a model component, not a trimming instruction."]},
  {kind:"practical",question:"In LG+F+G4, what does +G4 represent?",options:["Gamma-distributed rate heterogeneity with four discrete categories.","Four different gene trees for ASTRAL.","Four gap opening penalties.","Four codon positions."],answer:0,optionExplanations:["Correct. +G4 approximates among-site rate variation with four gamma categories.","ASTRAL gene-tree inputs are unrelated here.","Gap penalties belong to alignment algorithms.","Protein alignments do not have codon positions in this way."]},
  {kind:"practical",question:"Why is a composition test in IQ-TREE output useful?",options:["It checks whether sequences show strong compositional heterogeneity that may violate model assumptions.","It calculates the final posterior probability of each clade.","It decides which gaps should be manually moved in AliView.","It turns amino acids into nucleotides."],answer:0,optionExplanations:["Correct. Composition heterogeneity can warn about model violations and bias.","Posterior probabilities come from Bayesian analysis, not the composition test.","AliView editing is separate from IQ-TREE's composition test.","Composition tests do not convert sequence type."]}
];

export const lesson07Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function ModelsSequenceEvolutionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">workflow</div><Flow items={copy.flow} /></section>
    <section className="mt-8 grid gap-5 md:grid-cols-2">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky","red","green","amber"][index % 4]}>{body}</Card>)}</section>
    <StateDiagram />
    <ModelLadder copy={copy} />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Section {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Before moving on</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div></section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

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

const nucleotideRows = [
  ["JC69", "1 rate", "A=C=G=T", "All substitutions are equally likely."],
  ["K80 / K2P", "2 rates", "A=C=G=T", "Transitions and transversions have different rates."],
  ["F81", "1 rate", "Unequal", "Base composition can differ from 25/25/25/25."],
  ["HKY85", "2 rates", "Unequal", "Combines Ts/Tv bias and unequal base frequencies."],
  ["TN93", "3 rates", "Unequal", "Two transition rates plus one transversion rate."],
  ["GTR", "6 rates", "Unequal", "Most general common time-reversible nucleotide model."],
];

const c = {
  en: {
    eyebrow: "Lesson 07 · Models of sequence evolution",
    title: "Models of sequence evolution",
    subtitle: "This lesson is not another tree-search lesson. It is about the assumptions we put between an alignment and the evolutionary process that produced it.",
    big: "The central problem is simple: the differences we observe in an alignment are not always the real number of substitutions that happened. A site can change more than once, some sites evolve faster than others, and nucleotide, codon and protein data need different model families.",
    flow: ["alignment", "observed differences", "substitution model", "corrected distances", "likelihood", "model choice"],
    tags: ["Markov property", "JC69 → GTR", "Ts/Tv", "codon models", "amino-acid models", "+F / +G4 / +I", "IQ-TREE"],
    bigPicture: "Big picture",
    workflow: "workflow",
    section: "Section",
    checklistTitle: "Before moving on",
    emphasisTitle: "What the professor emphasized",
    emphasis: [
      ["Models are useful, not literally true", "The lecture explicitly uses the idea that all models are wrong, but some are useful. A substitution model is an approximation that makes inference possible, not a perfect simulation of biology."],
      ["Markov property is core vocabulary", "A Markov model uses the current state to define transition probabilities to future states. It does not need the full past trajectory of the site."],
      ["Parameters are not their values", "A parameter is the slot in the model, such as a base-frequency term or an exchangeability rate. The numerical value is what is estimated from data or fixed from an empirical matrix."],
      ["Distances come back here", "Raw Hamming or p-distance counts observed differences. Model-corrected distances try to account for substitutions that happened but are no longer directly visible."],
    ],
    sections: [
      ["1. From observed differences to evolutionary substitutions", [
        "The same alignment can be interpreted at different levels. At the surface level, we see characters: A, C, G, T or amino acids. At the evolutionary level, we want to infer substitutions along branches.",
        "The problem is that one observed mismatch is not necessarily one substitution. A site may have changed A→G→A, leaving no visible difference, or A→C→T, leaving one visible mismatch but two historical changes. Models help correct this gap between observation and history."
      ]],
      ["2. Markov models: the grammar of substitutions", [
        "A substitution model is usually a continuous-time Markov model. The state space is finite: four nucleotide states, 61 sense codons, or 20 amino-acid states. Along a branch, the model describes probabilities of moving from one state to another.",
        "The Markov property means the future depends on the current state, not on the full path that produced it. For example, once a site is currently A, the probability of moving to G is determined from A, not from whether it used to be C before becoming A."
      ]],
      ["3. Nucleotide models: JC69 to GTR", [
        "Nucleotide models differ mainly in two ingredients: base frequencies and substitution rates. The simplest models assume every base has the same frequency and every change has the same rate. More complex models allow unequal frequencies and different exchangeability rates.",
        "Transitions are A↔G and C↔T changes within the same nucleotide class. Transversions are changes between purines and pyrimidines. K80/K2P introduced this distinction; GTR is the flexible end of the common reversible nucleotide model ladder."
      ]],
      ["4. Codon substitution models: selection enters the model", [
        "Codon models use the genetic code. They distinguish changes that preserve the amino acid from changes that alter it. That distinction is the bridge from sequence evolution to protein-level selective pressure.",
        "MG94 separates synonymous and nonsynonymous rates. GY94 is commonly expressed through ω = dN/dS. If ω < 1, nonsynonymous changes are suppressed and purifying selection is inferred; if ω ≈ 1, evolution is compatible with neutrality; if ω > 1, nonsynonymous changes are favored and positive selection is suggested."
      ]],
      ["5. Amino-acid models: empirical matrices", [
        "Protein models often use empirical exchangeability matrices estimated from large sets of alignments. Dayhoff/PAM was based on closely related proteins; JTT expanded the dataset; WAG and LG were later estimated from broader datasets; MtREV and other matrices are specialized for particular biological contexts.",
        "Empirical does not mean magic. The matrix gives fixed relative replacement tendencies, but modifiers can still adapt the model to the current dataset. In a model such as LG+F+G4, LG is the matrix, +F estimates amino-acid frequencies from the alignment, and +G4 models among-site rate heterogeneity."
      ]],
      ["6. Modifiers: +F, +I, +G and +R", [
        "+F means empirical state frequencies are calculated from the alignment instead of using the frequencies embedded in the matrix. For amino-acid models this is common, because the composition of one dataset may not match the dataset used to estimate the original matrix.",
        "+G or +G4 models rate variation across sites using a discrete gamma distribution. +I adds a class of invariable sites. +R, the FreeRate model used by IQ-TREE/ModelFinder, relaxes the strict gamma shape and lets rate categories be more flexible."
      ]],
      ["7. Distances: Hamming, p-distance and model-corrected distance", [
        "A Hamming distance counts mismatches between aligned sequences. A p-distance converts this into a proportion of different positions and may also be calculated with particular gap treatments. Both are observed distances: they count what is visible in the alignment.",
        "Model-corrected distances ask a different question: given a substitution model, how much evolutionary change probably happened? Jukes-Cantor, Kimura and GTR-like corrections try to account for multiple substitutions at the same site. As divergence grows, observed p-distance saturates and increasingly underestimates true evolutionary distance."
      ]],
      ["8. Model selection in the practical", [
        "The practical uses IQ-TREE / ModelFinder on an aligned and filtered MSA. A command such as iqtree2 -s data/example_alignements/aa/N0.HOG0000096.ref.aln -m TESTONLY runs model selection without immediately committing to the full downstream inference.",
        "The output reports whether the alignment looks like protein data, the number of sequences and columns, distinct site patterns, parsimony-informative sites, singleton sites, constant sites, gaps/ambiguities and composition tests. Then it compares candidate models using log-likelihood and criteria such as AIC, AICc and BIC."
      ]],
    ],
    nucleotideTitle: "Nucleotide model ladder",
    codonTitle: "Codon models",
    codonCards: [
      ["State space", "61 sense codons rather than 4 nucleotides. Stop codons are usually excluded from the instantaneous substitution process."],
      ["Synonymous vs nonsynonymous", "A codon change may preserve the amino acid or change the protein sequence. This is why codon models are useful for studying selection."],
      ["MG94", "Models synonymous and nonsynonymous substitution rates separately, often discussed as dS and dN."],
      ["GY94", "Often parameterized with ω = dN/dS: below 1 purifying, near 1 neutral, above 1 positive selection."],
    ],
    aaTitle: "Empirical amino-acid models",
    aaRows: [
      ["Dayhoff / PAM", "Early empirical model estimated from closely related proteins."],
      ["JTT", "A larger and more diverse empirical protein model than PAM."],
      ["WAG", "Estimated by maximum-likelihood procedures from broad protein datasets."],
      ["LG", "A widely used empirical protein model often selected for general protein alignments."],
      ["MtREV / Q.*", "Specialized matrices for particular biological contexts, such as mitochondrial or clade-specific datasets."],
    ],
    distanceTitle: "Distance block",
    distanceCards: [
      ["Hamming", "Count of positions that differ between two aligned sequences."],
      ["p-distance", "Observed proportion of different aligned positions."],
      ["Corrected distance", "Model-based estimate of substitutions per site, accounting for hidden multiple hits."],
      ["Saturation", "When repeated substitutions erase signal, observed distance stops increasing linearly with real evolutionary time."],
    ],
    practicalTitle: "Practical connection",
    practical: [
      ["Input", "An aligned and filtered MSA, usually nucleotide or protein. In the practical, the example is detected as protein data."],
      ["Command", "iqtree2 -s <alignment> -m TESTONLY runs standard ModelFinder model selection."],
      ["Output", "The .iqtree summary is the readable report; .log records the run; .treefile is the tree used by ModelFinder; .model.gz stores model results."],
      ["Decision", "ModelFinder compares candidate models and usually chooses the one minimizing BIC unless AIC or AICc is requested."],
    ],
    takeaways: ["Observed mismatches are not the same as historical substitutions.", "Markov models describe transitions among sequence states along branches.", "Nucleotide models differ by base frequencies and exchangeability rates.", "Codon models connect sequence evolution with dN/dS and selection.", "Empirical amino-acid models use pre-estimated matrices, often with dataset-specific modifiers.", "Corrected distances matter because p-distance saturates."],
    checklist: ["I can explain why raw differences underestimate substitutions.", "I can define the Markov property.", "I can distinguish transitions from transversions.", "I can compare JC69, K80, F81, HKY, TN93 and GTR.", "I can explain MG94, GY94 and ω = dN/dS.", "I can explain Dayhoff/PAM, JTT, WAG and LG as empirical amino-acid models.", "I can interpret +F, +G4, +I and +R.", "I can distinguish Hamming, p-distance and corrected distance."],
  },
  es: {
    eyebrow: "Lección 07 · Modelos de evolución de secuencias",
    title: "Modelos de evolución de secuencias",
    subtitle: "Esta lección no es otra clase de búsqueda de árboles. Trata de los supuestos que ponemos entre un alineamiento y el proceso evolutivo que lo produjo.",
    big: "El problema central es simple: las diferencias que vemos en un alineamiento no siempre son el número real de sustituciones que ocurrieron. Un sitio puede cambiar más de una vez, algunos sitios evolucionan más rápido que otros, y los datos de nucleótidos, codones y proteínas necesitan familias de modelos distintas.",
    flow: ["alineamiento", "diferencias observadas", "modelo de sustitución", "distancias corregidas", "likelihood", "selección de modelo"],
    tags: ["propiedad de Markov", "JC69 → GTR", "Ts/Tv", "modelos de codones", "modelos de aminoácidos", "+F / +G4 / +I", "IQ-TREE"],
    bigPicture: "Idea central",
    workflow: "flujo",
    section: "Sección",
    checklistTitle: "Antes de seguir",
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["Los modelos son útiles, no literalmente verdaderos", "La clase usa explícitamente la idea de que todos los modelos son incorrectos, pero algunos son útiles. Un modelo de sustitución es una aproximación que permite inferir, no una simulación perfecta de la biología."],
      ["La propiedad de Markov es vocabulario central", "Un modelo de Markov usa el estado actual para definir probabilidades de transición a estados futuros. No necesita recordar toda la historia previa del sitio."],
      ["No confundas parámetros con valores", "Un parámetro es el espacio dentro del modelo, por ejemplo una frecuencia de base o una tasa de intercambio. El valor numérico se estima con los datos o viene fijado en una matriz empírica."],
      ["Las distancias vuelven aquí", "Hamming o p-distance cuentan diferencias observadas. Las distancias corregidas por modelo intentan recuperar sustituciones que ocurrieron pero ya no son directamente visibles."],
    ],
    sections: [
      ["1. De diferencias observadas a sustituciones evolutivas", [
        "El mismo alineamiento puede interpretarse en distintos niveles. En la superficie vemos caracteres: A, C, G, T o aminoácidos. Evolutivamente queremos inferir sustituciones a lo largo de ramas.",
        "El problema es que una diferencia observada no necesariamente equivale a una sustitución. Un sitio pudo cambiar A→G→A y terminar sin diferencia visible, o A→C→T y mostrar una sola diferencia aunque hayan ocurrido dos cambios. Los modelos corrigen esa brecha entre observación e historia."
      ]],
      ["2. Modelos de Markov: la gramática de las sustituciones", [
        "Un modelo de sustitución suele ser un modelo de Markov en tiempo continuo. El espacio de estados es finito: cuatro nucleótidos, 61 codones con sentido o 20 aminoácidos. A lo largo de una rama, el modelo describe probabilidades de pasar de un estado a otro.",
        "La propiedad de Markov dice que el futuro depende del estado actual, no de toda la trayectoria anterior. Si un sitio está actualmente en A, la probabilidad de pasar a G se define desde A, no desde si antes fue C."
      ]],
      ["3. Modelos de nucleótidos: de JC69 a GTR", [
        "Los modelos de nucleótidos difieren sobre todo en dos ingredientes: frecuencias de bases y tasas de sustitución. Los modelos más simples asumen que todas las bases tienen la misma frecuencia y que todos los cambios tienen la misma tasa. Los más complejos permiten frecuencias desiguales y tasas de intercambio distintas.",
        "Las transiciones son cambios A↔G y C↔T dentro de la misma clase de nucleótidos. Las transversiones son cambios entre purinas y pirimidinas. K80/K2P introdujo esta distinción; GTR es el extremo flexible de la escalera común de modelos reversibles."
      ]],
      ["4. Modelos de codones: la selección entra al modelo", [
        "Los modelos de codones usan el código genético. Distinguen cambios que conservan el aminoácido de cambios que alteran la proteína. Por eso conectan evolución de secuencias con presión selectiva sobre proteínas.",
        "MG94 separa tasas sinónimas y no sinónimas. GY94 suele expresarse con ω = dN/dS. Si ω < 1 se infiere selección purificadora; si ω ≈ 1 es compatible con neutralidad; si ω > 1 sugiere selección positiva."
      ]],
      ["5. Modelos de aminoácidos: matrices empíricas", [
        "Los modelos de proteínas suelen usar matrices empíricas estimadas a partir de grandes conjuntos de alineamientos. Dayhoff/PAM se basó en proteínas cercanas; JTT amplió el conjunto; WAG y LG se estimaron con datasets más amplios; MtREV y otros modelos se especializan en contextos particulares.",
        "Empírico no significa mágico. La matriz da tendencias de reemplazo fijas, pero los modificadores pueden adaptar el modelo al dataset. En LG+F+G4, LG es la matriz, +F estima las frecuencias desde el alineamiento y +G4 modela heterogeneidad de tasas entre sitios."
      ]],
      ["6. Modificadores: +F, +I, +G y +R", [
        "+F significa que las frecuencias de estados se calculan desde el alineamiento en vez de usar las frecuencias incluidas en la matriz. En proteínas es común, porque la composición del dataset actual puede no coincidir con la del dataset usado para estimar la matriz original.",
        "+G o +G4 modela variación de tasas entre sitios con una distribución gamma discreta. +I añade una clase de sitios invariantes. +R, FreeRate en IQ-TREE/ModelFinder, relaja la forma gamma y deja que las categorías de tasa sean más flexibles."
      ]],
      ["7. Distancias: Hamming, p-distance y distancia corregida", [
        "La distancia de Hamming cuenta posiciones diferentes entre dos secuencias alineadas. La p-distance convierte eso en proporción de posiciones distintas y puede calcularse con distintos tratamientos de gaps. Ambas son distancias observadas: cuentan lo visible en el alineamiento.",
        "Las distancias corregidas por modelo hacen otra pregunta: dado un modelo de sustitución, ¿cuánto cambio evolutivo probablemente ocurrió? Correcciones como Jukes-Cantor, Kimura o aproximaciones tipo GTR intentan considerar sustituciones múltiples en el mismo sitio. Con mucha divergencia, la p-distance se satura y subestima cada vez más la distancia real."
      ]],
      ["8. Selección de modelo en la práctica", [
        "La práctica usa IQ-TREE / ModelFinder sobre un MSA alineado y filtrado. Un comando como iqtree2 -s data/example_alignements/aa/N0.HOG0000096.ref.aln -m TESTONLY ejecuta selección de modelo sin comprometerse todavía con toda la inferencia posterior.",
        "El output reporta si el alineamiento parece de proteínas, número de secuencias y columnas, patrones distintos, sitios informativos para parsimonia, singletons, sitios constantes, gaps/ambigüedad y pruebas de composición. Después compara modelos usando log-likelihood y criterios como AIC, AICc y BIC."
      ]],
    ],
    nucleotideTitle: "Escalera de modelos de nucleótidos",
    codonTitle: "Modelos de codones",
    codonCards: [
      ["Espacio de estados", "61 codones con sentido en vez de 4 nucleótidos. Los codones stop normalmente se excluyen del proceso instantáneo de sustitución."],
      ["Sinónimo vs no sinónimo", "Un cambio de codón puede conservar el aminoácido o cambiar la proteína. Por eso estos modelos sirven para estudiar selección."],
      ["MG94", "Modela por separado tasas de sustitución sinónimas y no sinónimas, discutidas como dS y dN."],
      ["GY94", "Suele parametrizarse con ω = dN/dS: menor que 1 purificadora, cerca de 1 neutral, mayor que 1 positiva."],
    ],
    aaTitle: "Modelos empíricos de aminoácidos",
    aaRows: [
      ["Dayhoff / PAM", "Modelo empírico temprano estimado con proteínas cercanamente relacionadas."],
      ["JTT", "Modelo proteico empírico basado en un dataset más grande y diverso que PAM."],
      ["WAG", "Estimado mediante procedimientos de máxima verosimilitud con datasets proteicos amplios."],
      ["LG", "Modelo empírico muy usado y frecuentemente seleccionado para alineamientos de proteínas."],
      ["MtREV / Q.*", "Matrices especializadas para contextos particulares, como mitocondrias o datasets de ciertos clados."],
    ],
    distanceTitle: "Bloque de distancias",
    distanceCards: [
      ["Hamming", "Conteo de posiciones que difieren entre dos secuencias alineadas."],
      ["p-distance", "Proporción observada de posiciones distintas."],
      ["Distancia corregida", "Estimación basada en modelo de sustituciones por sitio, incluyendo cambios múltiples ocultos."],
      ["Saturación", "Cuando sustituciones repetidas borran señal, la distancia observada deja de aumentar linealmente con el tiempo evolutivo real."],
    ],
    practicalTitle: "Conexión práctica",
    practical: [
      ["Input", "Un MSA alineado y filtrado, normalmente de nucleótidos o proteínas. En la práctica, el ejemplo se detecta como proteína."],
      ["Comando", "iqtree2 -s <alignment> -m TESTONLY ejecuta selección estándar de modelos con ModelFinder."],
      ["Output", "El .iqtree es el reporte legible; .log registra la ejecución; .treefile es el árbol usado por ModelFinder; .model.gz guarda resultados de modelos."],
      ["Decisión", "ModelFinder compara modelos candidatos y normalmente elige el que minimiza BIC, salvo que se solicite AIC o AICc."],
    ],
    takeaways: ["Las diferencias observadas no son lo mismo que sustituciones históricas.", "Los modelos de Markov describen transiciones entre estados a lo largo de ramas.", "Los modelos de nucleótidos difieren por frecuencias de bases y tasas de intercambio.", "Los modelos de codones conectan evolución de secuencia con dN/dS y selección.", "Los modelos empíricos de aminoácidos usan matrices preestimadas, a menudo con modificadores del dataset.", "Las distancias corregidas importan porque la p-distance se satura."],
    checklist: ["Puedo explicar por qué las diferencias crudas subestiman sustituciones.", "Puedo definir la propiedad de Markov.", "Puedo distinguir transiciones y transversiones.", "Puedo comparar JC69, K80, F81, HKY, TN93 y GTR.", "Puedo explicar MG94, GY94 y ω = dN/dS.", "Puedo explicar Dayhoff/PAM, JTT, WAG y LG como modelos empíricos de aminoácidos.", "Puedo interpretar +F, +G4, +I y +R.", "Puedo distinguir Hamming, p-distance y distancia corregida."],
  },
};

c.fa = {
  ...c.en,
  eyebrow: "درس ۰۷ · مدل‌های تکامل توالی",
  title: "مدل‌های تکامل توالی",
  subtitle: "این درس دربارهٔ فرض‌هایی است که بین هم‌ترازی و فرایند تکاملی قرار می‌دهیم.",
  bigPicture: "ایدهٔ اصلی",
  workflow: "روند کار",
  section: "بخش",
  checklistTitle: "پیش از ادامه",
};

function Card({ title, children, tone = "stone" }) {
  return <article className={`rounded-[2rem] border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}>
    <h3 className="text-lg font-black tracking-tight">{title}</h3>
    <p className="mt-3 text-sm font-semibold leading-7 opacity-80">{children}</p>
  </article>;
}

function Flow({ items }) {
  return <div className="grid gap-3 md:grid-cols-6">
    {items.map((item, index) => <div key={item} className="rounded-3xl border border-stone-200 bg-white p-4 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-sm font-black text-white">{index + 1}</div>
      <div className="text-xs font-black uppercase tracking-[0.14em] text-stone-700">{item}</div>
    </div>)}
  </div>;
}

function StateNetwork() {
  const nodes = [
    ["A", 60, 50, "purine"], ["G", 200, 50, "purine"], ["C", 60, 190, "pyrimidine"], ["T", 200, 190, "pyrimidine"]
  ];
  const edges = [[0,1,"transition"],[2,3,"transition"],[0,2,"transversion"],[0,3,"transversion"],[1,2,"transversion"],[1,3,"transversion"]];
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">states</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">A, C, G and T are model states</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-700">A nucleotide model defines how likely it is to move between these states. The distinction between transitions and transversions is one of the first ways models become more realistic than JC69.</p>
      </div>
      <svg viewBox="0 0 260 240" className="h-72 w-full rounded-[2rem] border border-stone-200 bg-stone-50 p-4">
        {edges.map(([a,b,type], i) => {
          const [x1,y1] = nodes[a].slice(1,3); const [x2,y2] = nodes[b].slice(1,3);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={type === "transition" ? "#b91c1c" : "#78716c"} strokeWidth={type === "transition" ? 5 : 2.5} strokeLinecap="round" opacity={type === "transition" ? 0.9 : 0.45}/>;
        })}
        {nodes.map(([label,x,y,kind]) => <g key={label}>
          <circle cx={x} cy={y} r="24" fill={kind === "purine" ? "#fee2e2" : "#dcfce7"} stroke="#292524" strokeWidth="3" />
          <text x={x} y={y+7} textAnchor="middle" className="fill-stone-950 text-xl font-black">{label}</text>
        </g>)}
        <text x="130" y="30" textAnchor="middle" className="fill-red-700 text-xs font-black">transitions</text>
        <text x="130" y="225" textAnchor="middle" className="fill-stone-600 text-xs font-black">transversions</text>
      </svg>
    </div>
  </section>;
}

function NucleotideLadder({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">JC69 → GTR</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.nucleotideTitle}</h2>
    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-stone-200">
      <div className="grid grid-cols-[0.7fr_0.8fr_1fr_1.5fr] bg-stone-950 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white">
        <div>Model</div><div>Rates</div><div>Frequencies</div><div>Assumption</div>
      </div>
      {nucleotideRows.map((row, i) => <div key={row[0]} className={`grid grid-cols-[0.7fr_0.8fr_1fr_1.5fr] gap-3 px-4 py-4 text-sm font-semibold ${i % 2 ? "bg-stone-50" : "bg-white"}`}>
        {row.map(cell => <div key={cell} className="text-stone-700">{cell}</div>)}
      </div>)}
    </div>
  </section>;
}

function CodonAndAminoAcid({ copy }) {
  return <section className="mt-8 grid gap-6 lg:grid-cols-2">
    <div className="rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">dN / dS</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.codonTitle}</h2>
      <div className="mt-5 grid gap-3">
        {copy.codonCards.map(([title, body]) => <Card key={title} title={title} tone="amber">{body}</Card>)}
      </div>
    </div>
    <div className="rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">protein data</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.aaTitle}</h2>
      <div className="mt-5 grid gap-3">
        {copy.aaRows.map(([title, body]) => <div key={title} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
          <div className="text-sm font-black text-stone-950">{title}</div>
          <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{body}</p>
        </div>)}
      </div>
    </div>
  </section>;
}

function DistanceBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">observed vs corrected</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">{copy.distanceTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-4">
      {copy.distanceCards.map(([title, body], index) => <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-5">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-stone-950">{index + 1}</div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-300">{body}</p>
      </div>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">IQ-TREE / ModelFinder</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-red-950">{copy.practicalTitle}</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {copy.practical.map(([title, body]) => <div key={title} className="rounded-3xl border border-red-100 bg-white p-5">
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
  {kind:"theory",question:"Why do substitution models matter in molecular phylogenetics?",options:["Because observed differences may underestimate the true number of substitutions.","Because they replace the need for sequence alignment.","Because they make all sites evolve at the same rate.","Because they remove the need to choose taxa."],answer:0,optionExplanations:["Correct. Multiple substitutions can occur at the same site, so raw differences can miss historical change.","Alignment is still required before most model-based analyses.","Many models explicitly allow rate variation across sites.","Taxon sampling is a separate design issue, not solved by substitution models."]},
  {kind:"theory",question:"The Markov property means that a substitution model:",options:["Depends only on the current state when predicting the next state.","Remembers every previous state in the history of a site.","Cannot be used for nucleotide data.","Automatically identifies orthologs."],answer:0,optionExplanations:["Correct. The next transition depends on the present state, not the entire past trajectory.","That is the opposite of the Markov simplification.","Nucleotide substitution models are classic Markov models.","Orthology inference is a different step before alignment and tree inference."]},
  {kind:"theory",question:"Which pair is a transition?",options:["A↔G","A↔C","G↔T","C↔G"],answer:0,optionExplanations:["Correct. A and G are both purines.","A↔C is a transversion.","G↔T is a transversion.","C↔G is a transversion."]},
  {kind:"theory",question:"What is the main difference between JC69 and K80/K2P?",options:["K80 distinguishes transitions from transversions, while JC69 treats all changes equally.","JC69 is a codon model, while K80 is an amino-acid model.","K80 has no substitution rates.","JC69 allows six exchangeability rates."],answer:0,optionExplanations:["Correct. K80 introduces two rate classes: transitions and transversions.","Both are nucleotide models.","K80 has substitution-rate parameters; it is not parameter-free.","Six exchangeabilities describe GTR, not JC69."]},
  {kind:"theory",question:"F81 extends JC69 mainly by allowing:",options:["Unequal equilibrium base frequencies.","Two transition rates and one transversion rate.","Amino-acid replacement matrices.","Branch-site positive selection."],answer:0,optionExplanations:["Correct. F81 keeps simple exchangeability but allows unequal base composition.","That description is closer to TN93.","Amino-acid matrices are protein models, not F81.","Branch-site selection belongs to later codon-model applications."]},
  {kind:"theory",question:"GTR is best described as:",options:["A reversible nucleotide model with six exchangeability rates and base frequencies.","A model with no base frequencies.","A protein-only empirical matrix.","A trimming algorithm for noisy alignments."],answer:0,optionExplanations:["Correct. GTR is the most general common reversible nucleotide model.","Base frequencies are part of GTR.","Protein empirical models include JTT, WAG and LG.","Trimming tools include Gblocks; GTR is a substitution model."]},
  {kind:"theory",question:"In codon models, ω = dN/dS < 1 usually suggests:",options:["Purifying selection.","Positive selection.","No genetic code is being used.","All sites are saturated."],answer:0,optionExplanations:["Correct. Nonsynonymous changes are relatively suppressed.","Positive selection is associated with ω > 1.","Codon models explicitly use the genetic code.","Saturation is about repeated substitutions and loss of signal, not directly ω < 1."]},
  {kind:"theory",question:"Which statement best describes empirical amino-acid models such as JTT, WAG or LG?",options:["They use replacement matrices estimated from large protein datasets.","They estimate dN/dS from codons.","They are identical to JC69.","They are gap penalty schemes for alignment."],answer:0,optionExplanations:["Correct. These models reuse empirically estimated amino-acid exchangeabilities.","dN/dS is a codon-model concept.","JC69 is a simple nucleotide model.","Gap penalties are alignment scoring rules, not substitution models."]},
  {kind:"theory",question:"In a model name such as LG+F+G4, what does +F mean?",options:["Frequencies are estimated from the current alignment.","Four gamma rate categories are used.","The model is forced to be nucleotide-only.","The alignment has been filtered by Gblocks."],answer:0,optionExplanations:["Correct. +F uses observed state frequencies from the dataset.","Four gamma categories are indicated by +G4.","LG is a protein model, not nucleotide-only.","Filtering is a preprocessing step, not the meaning of +F."]},
  {kind:"theory",question:"What does +G4 model?",options:["Among-site rate heterogeneity with four discrete gamma categories.","Four alternative outgroups.","Four codon positions.","Four independent alignments."],answer:0,optionExplanations:["Correct. It approximates gamma-distributed rate variation across sites.","Outgroup choice is unrelated to +G4.","Codons have three positions, and +G4 is not a codon-position flag.","+G4 is a model modifier, not a dataset count."]},
  {kind:"practical",question:"In the practical, what does `iqtree2 -s ... -m TESTONLY` do?",options:["Runs ModelFinder model selection on the alignment.","Runs MAFFT to build the alignment.","Runs Gblocks to trim the alignment.","Runs ASTRAL to combine gene trees."],answer:0,optionExplanations:["Correct. TESTONLY performs standard model selection in IQ-TREE/ModelFinder.","MAFFT is a separate alignment program.","Gblocks is a trimming tool, not this IQ-TREE command.","ASTRAL is for species-tree inference from gene trees."]},
  {kind:"practical",question:"The practical output reports parsimony-informative, singleton and constant sites. Why is that useful?",options:["It summarizes the structure of phylogenetic signal in the alignment.","It gives the final accepted species tree.","It proves that all sites evolve at equal rates.","It identifies every orthologous gene."],answer:0,optionExplanations:["Correct. These counts help evaluate how much information and variation the alignment contains.","Site summaries do not directly give the final topology.","Variable site categories do not prove equal rates; they often motivate rate-heterogeneity models.","Orthology inference happens upstream of the alignment."]},
  {kind:"practical",question:"What does the composition test in IQ-TREE warn about?",options:["Compositional heterogeneity that may violate model assumptions.","The number of CPU cores used.","Whether MAFFT used global alignment.","Whether the outgroup is correct."],answer:0,optionExplanations:["Correct. Strong composition differences across taxa can indicate model violation and potential bias.","CPU usage is logged elsewhere and is not the purpose of the composition test.","The composition test does not diagnose the MAFFT alignment strategy.","Rooting and outgroup choice are separate issues."]},
  {kind:"practical",question:"Which file is the human-readable IQ-TREE summary mentioned in the practical?",options:["The .iqtree file.","The .ckp.gz checkpoint only.","The .model.gz binary-style result only.","The original FASTA alignment."],answer:0,optionExplanations:["Correct. The .iqtree file is the readable report with model and data summaries.","The checkpoint file stores recovery information, not the main readable summary.","The .model.gz stores model results for software use.","The FASTA alignment is the input, not the IQ-TREE report."]},
  {kind:"practical",question:"In ModelFinder, BIC/AIC/AICc are used to:",options:["Compare models while balancing fit and complexity.","Translate nucleotide sequences into proteins.","Calculate reciprocal best hits.","Choose which taxa belong to the ingroup."],answer:0,optionExplanations:["Correct. Information criteria reward model fit but penalize unnecessary complexity.","Translation is a sequence-processing task, not model selection.","Reciprocal best hits relate to orthology inference.","Ingroup choice is part of study design, not BIC/AIC/AICc."]},
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
            <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{copy.bigPicture}</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.workflow}</div><Flow items={copy.flow} /></section>
    <section className="mt-8 grid gap-5 md:grid-cols-2">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky","red","green","amber"][index % 4]}>{body}</Card>)}</section>

    <StateNetwork />
    <NucleotideLadder copy={copy} />
    <CodonAndAminoAcid copy={copy} />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <DistanceBlock copy={copy} />
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div></section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

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
    eyebrow: "Lesson 08 · Maximum Likelihood",
    title: "Maximum Likelihood and concatenated phylogenomics",
    subtitle: "Maximum Likelihood is the bridge between the substitution models from Lesson 07 and the tree searches used by real phylogenetic software.",
    big: "ML asks P(data | model): how probable are the observed sequences if a given evolutionary model and tree are true? In phylogenetics, the model is not only the substitution matrix; it also includes topology, branch lengths, rate heterogeneity, partitions and other assumptions.",
    tags: ["P(D|M)", "Q matrix", "conditional likelihood", "log-likelihood", "tree search", "concatenation", "partitioning", "AMAS", "IQ-TREE"],
    workflow: ["alignment", "model + tree", "site likelihoods", "tree score", "tree proposal", "partitioned supermatrix"],
    section: "Section",
    bigPicture: "Big picture",
    workflowTitle: "How the lesson fits together",
    emphasisTitle: "What the professor emphasized",
    checklistTitle: "Before moving on",
    emphasis: [
      ["Likelihood is P(data | model)", "The central exam-safe statement is that ML evaluates the probability of the observed data given a model. It is not P(model | data), which belongs to Bayesian inference."],
      ["The model is broader than the substitution model", "The professor explicitly warned not to reduce the word model to only GTR, LG or another substitution model. Topology, branch lengths, partitioning and model parameters are all part of the inference framework."],
      ["ML scores trees; search algorithms propose them", "A likelihood calculation evaluates a tree. It does not magically enumerate every topology. Software needs a starting tree and then proposal moves such as NNI, SPR or TBR."],
      ["Concatenate after aligning", "Each orthogroup must be aligned separately first. Concatenating unaligned genes would mix non-homologous positions and destroy the meaning of the columns."],
      ["Partitioning is the middle ground", "One model for everything ignores heterogeneity; one model for every gene over-parameterizes. Partition merging groups genes that are described well by similar evolutionary models."],
    ],
    sections: [
      ["1. What Maximum Likelihood asks", [
        "Maximum Likelihood is a general statistical method for estimating parameters of a probability model. In phylogenetics the question becomes: what is the probability of the sequences we observe, given a tree and a model of sequence evolution?",
        "The shorthand is P(D|M): probability of data given model. The data are the aligned sequences. The model includes the substitution process, the branch lengths, the tree topology and the extra assumptions used to describe rate heterogeneity or partitions."
      ]],
      ["2. From GTR to a likelihood calculation", [
        "Lesson 07 introduced GTR as a general reversible nucleotide model. In Lesson 08, GTR becomes part of the machinery that scores a tree. The Q matrix stores instantaneous transition rates between states, combining exchangeabilities and target-state frequencies.",
        "For a single site, if a branch goes from G to C, the likelihood calculation accesses the G→C transition probability implied by the model and the branch. The same happens for all branches in the proposed tree, then the probabilities are combined."
      ]],
      ["3. Site likelihoods and hidden ancestral states", [
        "At the tips, the states are observed: if a species has G at a site, the likelihood for G is 1 and for other states is 0. Internal nodes are different. Their states are not observed, so ML must consider alternative ancestral states instead of pretending one reconstruction is certain.",
        "This is where conditional likelihood and Felsenstein's pruning algorithm enter. The algorithm recursively sums over possible ancestral states at internal nodes, weighting them by transition probabilities, so that uncertainty about ancestors is integrated into the likelihood."
      ]],
      ["4. From site likelihood to tree likelihood", [
        "A tree likelihood is built from the likelihoods of all sites in the alignment. Conceptually, this is a product across sites. That product relies on an important assumption: sites are treated as independent observations under the model.",
        "In practice, software reports log-likelihoods. Taking logs turns products into sums, avoids extremely tiny numbers that cause numerical problems, improves computational handling and enables comparisons such as likelihood-ratio tests."
      ]],
      ["5. ML is tree scoring, not automatic tree finding", [
        "Character-based inference is mainly about scoring trees. To infer a tree, software combines that score with a search strategy. It starts from an initial tree, proposes a modified topology, evaluates the new tree and keeps or discards it depending on the score and search algorithm.",
        "The proposal step can use local or aggressive rearrangements. NNI makes small local swaps, SPR cuts a subtree and regrafts it elsewhere, and TBR explores even larger rearrangements. The larger the tree space, the more important these heuristics become."
      ]],
      ["6. Concatenation: the supermatrix approach", [
        "Real phylogenomics rarely uses one gene. Orthology inference gives many orthogroups, each is aligned and filtered, and then the alignments can be concatenated into one large matrix. This is the supermatrix approach.",
        "Concatenation increases the amount of data and can reduce stochastic error: random noise from short alignments is averaged over more characters. It works naturally with MP, ML and BI, but it is not the framework used by coalescent methods, which instead use many gene trees as input."
      ]],
      ["7. Matrix occupancy and missing genes", [
        "A concatenated matrix can include only genes present in every species, or it can allow missing data. A strict 100% occupancy matrix keeps only orthogroups represented across all species; a looser threshold keeps more genes but introduces missing blocks.",
        "The choice is a trade-off. Strict occupancy gives a cleaner matrix but may discard many informative genes. Relaxed occupancy uses more data but adds missing data. The professor framed this as a practical middle-ground decision, not as a rule with one universal answer."
      ]],
      ["8. Why partition the concatenated matrix?", [
        "Concatenation creates heterogeneity. Different genes, domains or codon positions can evolve at different speeds, with different compositions and different substitution patterns. Treating the whole matrix as one partition can underfit that heterogeneity.",
        "The opposite extreme is giving every gene its own independent model, which can overfit, weaken parameter estimation and increase computational burden. Partitioning tries to keep useful heterogeneity while avoiding too many parameters."
      ]],
      ["9. Merging partitions and choosing models", [
        "Partition merging groups blocks that are well described by similar models. The goal is not to group genes by biological function, but by how similarly their sequence evolution can be modeled. ModelFinder can search both the substitution model and the partitioning scheme.",
        "Because adding parameters almost always improves raw likelihood, model selection uses penalties for complexity. AIC, AICc and BIC balance model fit against parameter number. In the practical quiz, the key rule is simple: lower BIC means a better-supported model under that criterion."
      ]],
      ["10. Edge-linked, proportional and edge-unlinked partitions", [
        "IQ-TREE offers different ways to handle branch lengths across partitions. Edge-linked equal branch lengths forces all partitions to share the same branch lengths; it is simple but often unrealistic. Edge-linked proportional branch lengths lets partitions share relative branch lengths while scaling rates, and is commonly recommended.",
        "Edge-unlinked models give each partition its own branch lengths, which can capture heterotachy but is parameter-rich. Separate tree inference goes further and estimates separate trees for partitions. The practical compares these ideas using IQ-TREE options such as -q, -p, -Q and -S."
      ]],
      ["11. Practical workflow: AMAS and IQ-TREE", [
        "The practical begins with AMAS. `AMAS.py concat` combines multiple aligned protein MSAs into a concatenated alignment and creates a partition file that records the coordinate boundaries of each gene in the supermatrix.",
        "Then IQ-TREE uses the concatenated alignment and partition file for model selection. `-m TESTONLY` performs model testing; `-m MFP` can combine model choice and partitioning; `-rcluster 10` speeds up partition merging by checking only the top fraction of candidate schemes."
      ]],
    ],
    equationTitle: "Likelihood in one line",
    equationCards: [
      ["Data", "The aligned sequences observed at the tips."],
      ["Model", "Substitution model + topology + branch lengths + rate heterogeneity + partitions."],
      ["Score", "The likelihood or log-likelihood assigned to a tree under the model."],
    ],
    searchTitle: "The ML search loop",
    searchSteps: ["starting tree", "proposal", "evaluation", "keep / discard", "repeat"],
    concatTitle: "Concatenation is block structure",
    concatCaption: "Each colored block is an aligned orthogroup. Concatenation joins blocks; the partition file remembers where each block starts and ends.",
    partitionTitle: "Three partition strategies",
    partitionCards: [
      ["One partition", "Simple and fast, but risks under-partitioning because all genes are forced into one model."],
      ["Every gene separate", "Flexible, but can overfit and estimate too many parameters from too little data."],
      ["Merged partitions", "Middle ground: group genes with similar evolutionary behavior and reduce over-parameterization."],
    ],
    practicalTitle: "Practical focus",
    practicalCards: [
      ["AMAS concat", "Produces `concatenated.out` and `partitions.txt` from already aligned files."],
      ["Partition file", "Stores coordinate boundaries such as p1 = 1–1532, p2 = 1533–1771, etc."],
      ["IQ-TREE TESTONLY", "Compares candidate models without committing to a full final inference."],
      ["MFP + rcluster", "Searches model and partitioning scheme, using relaxed clustering to reduce computation."],
    ],
    takeaways: ["ML evaluates P(data | model), not P(model | data).", "The phylogenetic model includes substitution model, topology, branch lengths and partition assumptions.", "Internal states are hidden and handled by conditional likelihood/pruning, not guessed once and fixed.", "Log-likelihoods are used for stability, efficiency and comparison.", "Concatenation increases signal but can introduce heterogeneity and gene-tree incongruence issues.", "Partitioning is a compromise between underfitting and overfitting."],
    checklist: ["I can define likelihood as P(D|M).", "I can explain what belongs to the model in ML phylogenetics.", "I can describe how site likelihoods are combined into tree likelihood.", "I can explain why log-likelihood is used.", "I can explain why ML needs tree-search proposals.", "I can define concatenation / supermatrix.", "I can explain matrix occupancy and missing data.", "I can compare under-partitioning and over-partitioning.", "I can distinguish -q, -p and -Q partition branch-length schemes.", "I can describe what AMAS and IQ-TREE do in the practical."],
  },
  es: {
    eyebrow: "Lección 08 · Maximum Likelihood",
    title: "Maximum Likelihood y filogenómica concatenada",
    subtitle: "Maximum Likelihood conecta los modelos de sustitución de la Lección 07 con las búsquedas de árboles que usa el software filogenético real.",
    big: "ML pregunta P(datos | modelo): ¿qué tan probables son las secuencias observadas si cierto modelo evolutivo y cierto árbol fueran verdaderos? En filogenética, el modelo no es solo la matriz de sustitución; también incluye topología, longitudes de rama, heterogeneidad de tasas, particiones y otros supuestos.",
    tags: ["P(D|M)", "matriz Q", "conditional likelihood", "log-likelihood", "búsqueda de árboles", "concatenación", "particiones", "AMAS", "IQ-TREE"],
    workflow: ["alineamiento", "modelo + árbol", "likelihood por sitio", "score del árbol", "propuesta de árbol", "supermatriz particionada"],
    section: "Sección",
    bigPicture: "Idea central",
    workflowTitle: "Cómo se organiza la lección",
    emphasisTitle: "Lo que el profe remarcó",
    checklistTitle: "Antes de seguir",
    emphasis: [
      ["Likelihood es P(datos | modelo)", "La frase segura para examen es que ML evalúa la probabilidad de los datos observados dado un modelo. No es P(modelo | datos), que corresponde a inferencia bayesiana."],
      ["El modelo es más amplio que el modelo de sustitución", "El profesor insistió en no reducir modelo a GTR, LG u otro modelo de sustitución. Topología, longitudes de rama, particionamiento y parámetros también forman parte del marco de inferencia."],
      ["ML puntúa árboles; los algoritmos los proponen", "Un cálculo de likelihood evalúa un árbol. No enumera mágicamente todas las topologías. El software necesita un árbol inicial y movimientos de propuesta como NNI, SPR o TBR."],
      ["Primero alinear, luego concatenar", "Cada orthogroup debe alinearse por separado antes de concatenar. Concatenar genes no alineados mezclaría posiciones no homólogas y rompería el significado de las columnas."],
      ["El particionamiento es el punto medio", "Un solo modelo para todo ignora heterogeneidad; un modelo para cada gen sobre-parametriza. Fusionar particiones agrupa genes descritos por modelos evolutivos similares."],
    ],
    sections: [
      ["1. Qué pregunta Maximum Likelihood", [
        "Maximum Likelihood es un método estadístico general para estimar parámetros de un modelo probabilístico. En filogenética la pregunta se vuelve: ¿cuál es la probabilidad de las secuencias observadas, dado un árbol y un modelo de evolución de secuencias?",
        "La forma corta es P(D|M): probabilidad de los datos dado el modelo. Los datos son las secuencias alineadas. El modelo incluye el proceso de sustitución, las longitudes de rama, la topología del árbol y supuestos extra sobre heterogeneidad de tasas o particiones."
      ]],
      ["2. De GTR a un cálculo de likelihood", [
        "La Lección 07 introdujo GTR como un modelo nucleotídico reversible general. En la Lección 08, GTR pasa a ser parte de la maquinaria que puntúa un árbol. La matriz Q almacena tasas instantáneas entre estados, combinando exchangeabilities y frecuencias del estado destino.",
        "Para un sitio individual, si una rama va de G a C, el cálculo de likelihood accede a la probabilidad de transición G→C implicada por el modelo y la rama. Lo mismo ocurre en todas las ramas del árbol propuesto y luego se combinan las probabilidades."
      ]],
      ["3. Likelihood por sitio y estados ancestrales ocultos", [
        "En las puntas, los estados se observan: si una especie tiene G en un sitio, la likelihood de G es 1 y la de los otros estados es 0. Los nodos internos son distintos. Sus estados no se observan, así que ML debe considerar alternativas en vez de fijar una reconstrucción ancestral como segura.",
        "Aquí entran conditional likelihood y el algoritmo de pruning de Felsenstein. El algoritmo suma recursivamente sobre posibles estados ancestrales en los nodos internos, ponderándolos por probabilidades de transición, de modo que la incertidumbre ancestral queda integrada en la likelihood."
      ]],
      ["4. De likelihood por sitio a likelihood del árbol", [
        "La likelihood del árbol se construye a partir de las likelihoods de todos los sitios del alineamiento. Conceptualmente, es un producto a través de sitios. Ese producto depende de un supuesto importante: los sitios se tratan como observaciones independientes bajo el modelo.",
        "En la práctica, el software reporta log-likelihoods. Usar logaritmos transforma productos en sumas, evita números diminutos que causan problemas numéricos, facilita el cálculo y permite comparaciones como likelihood-ratio tests."
      ]],
      ["5. ML puntúa árboles, no los encuentra automáticamente", [
        "La inferencia basada en caracteres consiste en gran parte en puntuar árboles. Para inferir un árbol, el software combina ese score con una estrategia de búsqueda. Parte de un árbol inicial, propone una topología modificada, evalúa el nuevo árbol y lo conserva o descarta según el score y el algoritmo.",
        "La propuesta puede usar movimientos locales o agresivos. NNI hace pequeños intercambios locales, SPR corta un subárbol y lo injerta en otro lugar, y TBR explora reordenamientos aún mayores. Cuanto mayor es el tree space, más importantes son estas heurísticas."
      ]],
      ["6. Concatenación: el enfoque supermatrix", [
        "La filogenómica real casi nunca usa un solo gen. La inferencia de ortología genera muchos orthogroups, cada uno se alinea y filtra, y después esos alineamientos pueden concatenarse en una matriz grande. Ese es el enfoque supermatrix.",
        "La concatenación aumenta la cantidad de datos y puede reducir error estocástico: el ruido aleatorio de alineamientos cortos se promedia sobre más caracteres. Funciona naturalmente con MP, ML y BI, pero no es el marco de los métodos coalescentes, que usan muchos gene trees como input."
      ]],
      ["7. Ocupación de matriz y genes faltantes", [
        "Una matriz concatenada puede incluir solo genes presentes en todas las especies, o puede permitir datos faltantes. Una matriz estricta con 100% de ocupación conserva solo orthogroups representados en todas las especies; un umbral más laxo conserva más genes pero introduce bloques vacíos.",
        "La decisión es un trade-off. La ocupación estricta da una matriz más limpia pero puede descartar genes informativos. La ocupación laxa usa más datos pero añade missing data. El profesor lo presentó como una decisión práctica de punto medio, no como una regla universal."
      ]],
      ["8. Por qué particionar la matriz concatenada", [
        "La concatenación crea heterogeneidad. Genes, dominios o posiciones de codón distintas pueden evolucionar a velocidades distintas, con composiciones distintas y patrones de sustitución distintos. Tratar toda la matriz como una sola partición puede subajustar esa heterogeneidad.",
        "El extremo opuesto es darle a cada gen su propio modelo independiente, lo que puede sobreajustar, debilitar la estimación de parámetros y aumentar la carga computacional. Particionar intenta conservar heterogeneidad útil evitando demasiados parámetros."
      ]],
      ["9. Fusionar particiones y elegir modelos", [
        "Fusionar particiones agrupa bloques que están bien descritos por modelos similares. El objetivo no es agrupar genes por función biológica, sino por qué tan parecida es su evolución de secuencia. ModelFinder puede buscar simultáneamente el modelo de sustitución y el esquema de particiones.",
        "Como añadir parámetros casi siempre mejora la likelihood cruda, la selección de modelos usa penalizaciones por complejidad. AIC, AICc y BIC balancean ajuste y número de parámetros. En la práctica, la regla clave es simple: menor BIC implica mejor modelo bajo ese criterio."
      ]],
      ["10. Particiones edge-linked, proportional y edge-unlinked", [
        "IQ-TREE ofrece distintas formas de manejar longitudes de rama entre particiones. Edge-linked equal branch lengths fuerza a todas las particiones a compartir las mismas longitudes; es simple pero suele ser poco realista. Edge-linked proportional permite compartir longitudes relativas mientras cada partición escala su tasa, y suele recomendarse.",
        "Los modelos edge-unlinked dan a cada partición sus propias longitudes de rama, lo que puede capturar heterotachy pero añade muchos parámetros. Separate tree inference va más lejos y estima árboles separados para particiones. La práctica compara estas ideas con opciones como -q, -p, -Q y -S."
      ]],
      ["11. Flujo práctico: AMAS e IQ-TREE", [
        "La práctica empieza con AMAS. `AMAS.py concat` combina múltiples MSAs de proteínas ya alineados en un alineamiento concatenado y genera un archivo de particiones que registra las coordenadas de cada gen dentro de la supermatriz.",
        "Después IQ-TREE usa el alineamiento concatenado y el archivo de particiones para selección de modelo. `-m TESTONLY` hace model testing; `-m MFP` puede combinar elección de modelo y particionamiento; `-rcluster 10` acelera la fusión de particiones revisando solo una fracción de los esquemas candidatos."
      ]],
    ],
    equationTitle: "Likelihood en una línea",
    equationCards: [
      ["Datos", "Las secuencias alineadas observadas en las puntas."],
      ["Modelo", "Modelo de sustitución + topología + longitudes de rama + heterogeneidad de tasas + particiones."],
      ["Score", "La likelihood o log-likelihood asignada a un árbol bajo el modelo."],
    ],
    searchTitle: "El bucle de búsqueda ML",
    searchSteps: ["árbol inicial", "propuesta", "evaluación", "conservar / descartar", "repetir"],
    concatTitle: "La concatenación tiene estructura de bloques",
    concatCaption: "Cada bloque de color es un orthogroup alineado. La concatenación une bloques; el archivo de particiones recuerda dónde empieza y termina cada uno.",
    partitionTitle: "Tres estrategias de partición",
    partitionCards: [
      ["Una partición", "Simple y rápida, pero puede subparticionar porque fuerza todos los genes a un solo modelo."],
      ["Cada gen separado", "Flexible, pero puede sobreajustar y estimar demasiados parámetros con pocos datos."],
      ["Particiones fusionadas", "Punto medio: agrupa genes con comportamiento evolutivo similar y reduce sobre-parametrización."],
    ],
    practicalTitle: "Foco práctico",
    practicalCards: [
      ["AMAS concat", "Produce `concatenated.out` y `partitions.txt` a partir de archivos ya alineados."],
      ["Archivo de particiones", "Guarda límites de coordenadas como p1 = 1–1532, p2 = 1533–1771, etc."],
      ["IQ-TREE TESTONLY", "Compara modelos candidatos sin hacer necesariamente la inferencia final completa."],
      ["MFP + rcluster", "Busca modelo y esquema de particiones, usando clustering relajado para reducir cómputo."],
    ],
    takeaways: ["ML evalúa P(datos | modelo), no P(modelo | datos).", "El modelo filogenético incluye modelo de sustitución, topología, longitudes de rama y particiones.", "Los estados internos están ocultos y se manejan con conditional likelihood/pruning, no con una única reconstrucción fija.", "Los log-likelihoods se usan por estabilidad, eficiencia y comparación.", "La concatenación aumenta señal pero puede introducir heterogeneidad y problemas de incongruencia entre gene trees.", "El particionamiento es un compromiso entre subajuste y sobreajuste."],
    checklist: ["Puedo definir likelihood como P(D|M).", "Puedo explicar qué forma parte del modelo en ML filogenético.", "Puedo describir cómo las likelihoods por sitio se combinan en likelihood del árbol.", "Puedo explicar por qué se usa log-likelihood.", "Puedo explicar por qué ML necesita propuestas de búsqueda de árboles.", "Puedo definir concatenación / supermatrix.", "Puedo explicar matrix occupancy y missing data.", "Puedo comparar under-partitioning y over-partitioning.", "Puedo distinguir -q, -p y -Q como esquemas de longitudes de rama por partición.", "Puedo describir qué hacen AMAS e IQ-TREE en la práctica."],
  },
};

c.fa = {
  ...c.en,
  eyebrow: "درس ۰۸ · بیشینه درست‌نمایی",
  title: "بیشینه درست‌نمایی و فیلوژنومیک الحاقی",
  subtitle: "این درس مدل‌های جانشینی را به جست‌وجوی درخت در نرم‌افزارهای فیلوژنتیک وصل می‌کند.",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "ساختار درس",
  emphasisTitle: "نکات مورد تأکید استاد",
  checklistTitle: "پیش از ادامه",
  section: "بخش",
};

function Card({ title, children, tone = "stone" }) {
  return <article className={`rounded-[2rem] border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}>
    <h3 className="text-lg font-black tracking-tight">{title}</h3>
    <p className="mt-3 text-sm font-semibold leading-7 opacity-85">{children}</p>
  </article>;
}

function Flow({ items }) {
  return <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
    {items.map((item, index) => <div key={item} className="rounded-3xl border border-stone-200 bg-white p-4 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-sm font-black text-white">{index + 1}</div>
      <div className="text-xs font-black uppercase tracking-[0.14em] text-stone-700">{item}</div>
    </div>)}
  </div>;
}

function EquationBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">P(D|M)</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.equationTitle}</h2>
        <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-center text-white shadow-inner">
          <div className="text-4xl font-black tracking-tight md:text-5xl">L = P(D | M)</div>
          <p className="mt-3 text-sm font-semibold text-stone-300">Maximum Likelihood scores how probable the alignment is under a model and tree.</p>
        </div>
      </div>
      <div className="grid gap-3">
        {copy.equationCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "amber", "green"][index]}>{body}</Card>)}
      </div>
    </div>
  </section>;
}

function SiteLikelihoodFigure() {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">site likelihood</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">Observed tips, hidden ancestors</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-700">For each alignment column, tip states are known but internal-node states are not. ML does not choose one ancestor and stop; it sums over the possible states by conditional likelihood.</p>
      </div>
      <svg viewBox="0 0 520 260" className="h-80 w-full rounded-[2rem] border border-stone-200 bg-white p-4">
        <line x1="250" y1="45" x2="155" y2="120" stroke="#44403c" strokeWidth="4" />
        <line x1="250" y1="45" x2="345" y2="120" stroke="#44403c" strokeWidth="4" />
        <line x1="155" y1="120" x2="95" y2="210" stroke="#78716c" strokeWidth="4" />
        <line x1="155" y1="120" x2="215" y2="210" stroke="#78716c" strokeWidth="4" />
        <line x1="345" y1="120" x2="285" y2="210" stroke="#78716c" strokeWidth="4" />
        <line x1="345" y1="120" x2="405" y2="210" stroke="#78716c" strokeWidth="4" />
        {[250,155,345].map((x, i) => <g key={i}><circle cx={x} cy={i === 0 ? 45 : 120} r="22" fill="#fef3c7" stroke="#292524" strokeWidth="3"/><text x={x} y={(i === 0 ? 45 : 120)+6} textAnchor="middle" className="fill-stone-950 text-sm font-black">?</text></g>)}
        {[[95,210,"G"],[215,210,"G"],[285,210,"C"],[405,210,"C"]].map(([x,y,label]) => <g key={x}><circle cx={x} cy={y} r="23" fill="#dcfce7" stroke="#292524" strokeWidth="3"/><text x={x} y={y+7} textAnchor="middle" className="fill-stone-950 text-lg font-black">{label}</text></g>)}
        <text x="250" y="20" textAnchor="middle" className="fill-red-700 text-xs font-black">sum over possible states</text>
        <text x="250" y="250" textAnchor="middle" className="fill-stone-600 text-xs font-black">tip states are observed</text>
      </svg>
    </div>
  </section>;
}

function SearchLoop({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">tree space</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight">{copy.searchTitle}</h2>
    <div className="mt-6 grid gap-3 md:grid-cols-5">
      {copy.searchSteps.map((step, index) => <div key={step} className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-stone-950">{index + 1}</div>
        <div className="text-sm font-black uppercase tracking-[0.12em] text-stone-100">{step}</div>
      </div>)}
    </div>
    <p className="mt-5 max-w-4xl text-sm font-semibold leading-7 text-stone-300">NNI, SPR and TBR belong to the proposal side of the loop. GTR, branch lengths, site likelihoods and log-likelihood belong to the evaluation side.</p>
  </section>;
}

function ConcatenationBlock({ copy }) {
  const blocks = ["bg-red-200", "bg-amber-200", "bg-emerald-200", "bg-sky-200", "bg-violet-200", "bg-stone-300"];
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">supermatrix</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.concatTitle}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-700">{copy.concatCaption}</p>
      </div>
      <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
        {["species 1", "species 2", "species 3", "species 4"].map((name, row) => <div key={name} className="mb-2 grid grid-cols-[80px_1fr] items-center gap-3 last:mb-0">
          <div className="text-xs font-black text-stone-500">{name}</div>
          <div className="flex overflow-hidden rounded-xl border border-stone-300">
            {blocks.map((block, index) => <div key={block + index} className={`${block} h-8 ${row === 2 && index === 2 ? "opacity-20" : ""}`} style={{ width: `${[20, 11, 22, 16, 13, 18][index]}%` }} />)}
          </div>
        </div>)}
        <div className="mt-4 grid grid-cols-6 gap-2 text-center text-[10px] font-black uppercase tracking-[0.1em] text-stone-500">
          {blocks.map((_, i) => <div key={i}>OG {i + 1}</div>)}
        </div>
      </div>
    </div>
  </section>;
}

function PartitionBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">underfit ↔ overfit</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.partitionTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.partitionCards.map(([title, body], index) => <Card key={title} title={title} tone={["red", "amber", "green"][index]}>{body}</Card>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">AMAS / IQ-TREE</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-red-950">{copy.practicalTitle}</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-2">
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
    question: "In Maximum Likelihood phylogenetics, what does P(D|M) mean?",
    options: ["The probability of the observed data given the model.", "The probability that the model is true given the data.", "The probability that all trees have equal branch lengths.", "The probability that every gene has the same history."],
    answer: 0,
    explanation: "ML evaluates how probable the observed alignment is under a specified model and tree.",
    optionExplanations: ["Correct. This is the basic likelihood statement.", "This is Bayesian posterior probability, P(M|D), not ML likelihood.", "Equal branch lengths are not the definition of likelihood.", "Gene histories can differ; concatenation often assumes one tree, but this is not P(D|M)."],
  },
  {
    kind: "theory",
    question: "In this lesson, what is included in the phylogenetic 'model' for ML?",
    options: ["Only the name of the substitution model, such as GTR.", "Only the raw alignment columns.", "Substitution process, topology, branch lengths and additional assumptions such as partitions.", "Only the outgroup and the root."],
    answer: 2,
    explanation: "The professor stressed that the model is broader than the substitution matrix alone.",
    optionExplanations: ["Too narrow. GTR can be one component, but not the whole model.", "The alignment is the data, not the model.", "Correct. ML treats many things as part of the modeling framework.", "Rooting is important, but it is not the whole ML model."],
  },
  {
    kind: "theory",
    question: "Why are internal node states handled with conditional likelihood rather than simply fixed once?",
    options: ["Because tips are never observed.", "Because internal ancestral states are unobserved and uncertain.", "Because ML cannot use substitution models.", "Because only invariant sites are used in ML."],
    answer: 1,
    explanation: "Internal states are hidden variables, so ML sums over possibilities.",
    optionExplanations: ["Tips are observed; that is why their states anchor the calculation.", "Correct. Conditional likelihood integrates uncertainty about ancestors.", "ML explicitly uses substitution models.", "ML can use variable sites; it is not restricted to invariant sites."],
  },
  {
    kind: "theory",
    question: "What does Felsenstein's pruning algorithm efficiently compute?",
    options: ["Pairwise BLAST reciprocal hits.", "Conditional likelihoods by summing over ancestral states recursively.", "The AMAS partition file.", "A strict molecular clock calibration."],
    answer: 1,
    explanation: "Pruning makes likelihood calculation feasible on trees by decomposing the problem recursively.",
    optionExplanations: ["RBH belongs to orthology inference, not ML site-likelihood computation.", "Correct. This is the purpose of the pruning algorithm.", "AMAS creates concatenated alignments and partition files.", "Clock calibration is part of divergence-time analysis, not the pruning algorithm."],
  },
  {
    kind: "theory",
    question: "Why is log-likelihood preferred over raw likelihood in phylogenetic ML?",
    options: ["It turns products into sums and avoids extremely small numbers.", "It removes the need for a tree topology.", "It makes all models equally complex.", "It converts a distance matrix into an alignment."],
    answer: 0,
    explanation: "Likelihoods across many sites can become tiny; logs improve numerical stability and make sums easier.",
    optionExplanations: ["Correct. This is the main computational reason.", "A topology is still needed.", "Model complexity is handled by criteria such as AIC/BIC, not by taking logs.", "Alignment and distance matrices are separate preprocessing/inference objects."],
  },
  {
    kind: "theory",
    question: "Which statement best describes ML tree search?",
    options: ["ML directly evaluates every possible topology for large datasets.", "ML needs proposal moves because tree space is usually too large to search exhaustively.", "ML works only on distance matrices.", "ML never changes the starting tree."],
    answer: 1,
    explanation: "Tree space grows too fast, so heuristic proposals are needed.",
    optionExplanations: ["Exhaustive search is usually impossible for realistic datasets.", "Correct. Software proposes and evaluates alternative trees.", "ML is a character-based method, not a distance-only method.", "The point of search is to modify and evaluate topologies."],
  },
  {
    kind: "theory",
    question: "Concatenation, or the supermatrix approach, means:",
    options: ["Merging multiple aligned gene/protein alignments into one large dataset.", "Estimating one separate species tree per gene and never combining them.", "Running a BLAST search against every possible genome.", "Replacing alignment with a distance matrix."],
    answer: 0,
    explanation: "Concatenation joins aligned blocks into one large matrix for MP/ML/BI-style inference.",
    optionExplanations: ["Correct. The partition file records the block boundaries.", "That describes gene-tree based approaches more than concatenation.", "BLAST may be used upstream for homology/orthology, not concatenation.", "Concatenation preserves aligned characters, not a distance-only summary."],
  },
  {
    kind: "theory",
    question: "Why can concatenation reduce stochastic error?",
    options: ["It increases the number of characters, averaging out random noise from limited data.", "It guarantees that all genes have identical evolutionary histories.", "It removes all model violations automatically.", "It makes missing data impossible."],
    answer: 0,
    explanation: "More aligned characters can reduce random sampling error, although systematic problems may remain.",
    optionExplanations: ["Correct. This is one of the main motivations for concatenation.", "Concatenation often assumes one tree, but genes can disagree biologically.", "Model violations can become a problem in concatenated datasets.", "Missing data can still occur as empty blocks."],
  },
  {
    kind: "theory",
    question: "What is a major risk of using one single model for an entire concatenated matrix?",
    options: ["Under-partitioning: ignoring heterogeneity among genes or sites.", "Over-partitioning by estimating too many independent parameters.", "The inability to produce any alignment file.", "The loss of all taxa names."],
    answer: 0,
    explanation: "One partition can be too simple for heterogeneous genes.",
    optionExplanations: ["Correct. This can underfit real differences in evolutionary process.", "Over-partitioning is the opposite extreme: too many partitions.", "Alignment files already exist before concatenation.", "Taxon names can be managed in concatenation; they are not inherently lost."],
  },
  {
    kind: "theory",
    question: "Why do AIC, AICc and BIC matter in model and partition selection?",
    options: ["They compare models while penalizing unnecessary parameters.", "They calculate reciprocal best hits.", "They define which residues are gaps.", "They force every partition to have the same branch length."],
    answer: 0,
    explanation: "Raw likelihood improves with more parameters, so information criteria balance fit and complexity.",
    optionExplanations: ["Correct. They are used to avoid choosing overly complex models just because fit improves.", "RBH is an orthology procedure.", "Gap definition belongs to alignment, not AIC/BIC.", "Branch-length sharing is controlled by partition model options, not by the criteria themselves."],
  },
  {
    kind: "practical",
    question: "In the practical, what is the role of AMAS.py concat?",
    options: ["To concatenate already aligned MSAs and generate a partition file.", "To infer posterior probabilities by MCMC.", "To trim sites according to Gblocks rules.", "To estimate reciprocal best hits."],
    answer: 0,
    explanation: "AMAS is used to create the concatenated alignment and the partition coordinates.",
    optionExplanations: ["Correct. It outputs files such as concatenated.out and partitions.txt.", "MCMC belongs to Bayesian inference, not AMAS concat.", "Gblocks is a trimming tool.", "RBH belongs to orthology inference."],
  },
  {
    kind: "practical",
    question: "What does the partition file produced in the practical store?",
    options: ["The coordinate boundaries of each gene/block in the concatenated alignment.", "Only the final ML tree topology.", "The raw unaligned sequences for all genes.", "The list of all possible NNI moves."],
    answer: 0,
    explanation: "The partition file tells IQ-TREE where each block begins and ends.",
    optionExplanations: ["Correct. It contains ranges such as charset p1 = 1-1532.", "Tree topology is stored in tree output files, not the partition file.", "Sequences are in alignment files, not in the partition-coordinate file.", "Search moves are not listed in the partition file."],
  },
  {
    kind: "practical",
    question: "In IQ-TREE partition options, which one is generally presented as the recommended proportional branch-length model?",
    options: ["-p", "-q", "-Q", "-S"],
    answer: 0,
    explanation: "The practical describes -p as edge-linked proportional and recommended.",
    optionExplanations: ["Correct. -p allows partition-specific rates with proportional branch lengths.", "-q is edge-linked equal branch lengths, described as unrealistic.", "-Q is edge-unlinked and very parameter-rich.", "-S runs separate tree inference for each partition."],
  },
  {
    kind: "practical",
    question: "What does `iqtree -s concatenated.out -Q partitions.txt -m TESTONLY` mainly test?",
    options: ["Models for a partitioned concatenated alignment under an edge-unlinked scheme.", "Whether AMAS can align raw genes from scratch.", "Whether the outgroup is monophyletic.", "Whether all genes are 100% occupied."],
    answer: 0,
    explanation: "TESTONLY performs model selection; -Q tells IQ-TREE to use an edge-unlinked partition model.",
    optionExplanations: ["Correct. It is a partitioned model-selection run.", "AMAS concat does not align raw genes from scratch.", "Outgroup monophyly is not what this command tests.", "Matrix occupancy is a data property, not the specific purpose of TESTONLY."],
  },
  {
    kind: "practical",
    question: "What does `-rcluster 10` do in the practical's ModelFinder partitioning command?",
    options: ["It examines only the top 10% of candidate partition-merging schemes to save time.", "It creates ten new outgroups.", "It forces exactly ten taxa into each partition.", "It makes all branch lengths equal."],
    answer: 0,
    explanation: "The relaxed clustering option reduces the partition-search burden.",
    optionExplanations: ["Correct. It is a computational shortcut for large partition searches.", "It has nothing to do with outgroup creation.", "Partitions are blocks of sites, not groups of ten taxa.", "Branch-length equality is a different partition-model assumption."],
  },
];

export const lesson08Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function MaximumLikelihoodLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8"><div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.workflowTitle}</div><Flow items={copy.workflow} /></section>

    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky","red","green","amber","purple"][index % 5]}>{body}</Card>)}</section>

    <EquationBlock copy={copy} />
    <SiteLikelihoodFigure />
    <SearchLoop copy={copy} />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <ConcatenationBlock copy={copy} />
    <PartitionBlock copy={copy} />
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div></section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

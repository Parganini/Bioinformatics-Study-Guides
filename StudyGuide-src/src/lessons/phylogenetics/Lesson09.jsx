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
  eyebrow: "Lesson 09 · Bayesian Inference",
  title: "Bayesian Inference, MCMC and posterior trees",
  subtitle: "Bayesian phylogenetics turns the likelihood machinery from Lesson 08 into a posterior distribution of trees, parameters and models.",
  big: "ML asks P(data | model). Bayesian Inference asks P(model | data): how plausible are trees and parameters after seeing the alignment? Because the denominator requires integrating over impossible tree and parameter spaces, Bayesian software uses MCMC to sample the posterior distribution.",
  tags: ["P(M|D)", "Bayes theorem", "prior", "likelihood", "MCMC", "Metropolis-Hastings", "MC3", "burn-in", "ESS", "Tracer", "MCC tree"],
  workflow: ["alignment", "prior + likelihood", "MCMC proposal", "accept / reject", "burn-in + diagnostics", "posterior summary"],
  section: "Section",
  bigPicture: "Big picture",
  workflowTitle: "How the lesson fits together",
  emphasisTitle: "What the professor emphasized",
  checklistTitle: "Before moving on",
  emphasis: [
    ["BI asks P(model | data)", "The safest contrast with Maximum Likelihood is the direction of the conditional probability: ML evaluates P(data | model), while Bayesian Inference estimates P(model | data)."],
    ["MCMC is not optional decoration", "The posterior cannot be computed directly in realistic phylogenetics. MCMC is the numerical strategy used to sample trees and parameters from a complex posterior distribution."],
    ["Worse moves can be useful", "Metropolis-Hastings does not simply accept every better proposal and reject every worse one. It can accept slightly worse states so the chain can escape local optima."],
    ["Diagnostics matter", "Bayesian output is meaningful only after burn-in removal and convergence/mixing checks. ESS, trace plots and comparison of independent chains are not cosmetic steps."],
    ["BI stores many trees", "Unlike a typical ML search that ends in a single best tree, Bayesian inference stores a posterior sample of trees that must be summarized with consensus or MCC-style approaches."],
  ],
  sections: [
    ["1. From ML to Bayesian thinking", [
      "Lesson 08 framed phylogenetic inference as a likelihood problem: P(D|M), the probability of the alignment given a model and tree. Lesson 09 flips the question: after seeing the data, how plausible is a model, a topology, branch lengths and all other parameters?",
      "That flipped question is the Bayesian posterior, P(M|D). In phylogenetics, the model includes the tree topology, branch lengths, substitution model parameters, rate heterogeneity and priors. The posterior is therefore a distribution over many possible trees and parameter values, not just a single score."
    ]],
    ["2. Bayes theorem in phylogenetics", [
      "The general formula is posterior = likelihood × prior / marginal likelihood. The likelihood is the part we already know from ML: how probable are the data if a particular tree and model are true?",
      "The prior represents assumptions before seeing the data. A prior can be set on trees, branch lengths, model parameters, rates or other quantities. The marginal likelihood is the normalizing term that averages over the whole parameter space, which is why it becomes computationally painful."
    ]],
    ["3. Why direct computation is impossible", [
      "In a small example, Bayes theorem looks easy. In phylogenetics, the space of possible trees grows explosively, and for each topology there are branch lengths, substitution parameters and rate parameters. Directly summing or integrating over all of that is not feasible.",
      "The key practical consequence is that Bayesian phylogenetics relies on numerical sampling. Instead of enumerating all trees and all parameter combinations, the analysis constructs a chain that visits plausible parts of the posterior distribution."
    ]],
    ["4. MCMC: Markov Chain Monte Carlo", [
      "MCMC stands for Markov Chain Monte Carlo. Markov Chain means the next step depends on the current state, not the full past history. Monte Carlo means random sampling is used to approximate a complex distribution.",
      "Each state of the chain can be imagined as one complete phylogenetic scenario: a tree topology, branch lengths and numerical parameter values. If the chain runs well, the frequency with which it visits regions of tree space approximates the posterior distribution."
    ]],
    ["5. The hiking metaphor", [
      "The professor used the image of a hiker moving across hills. Peaks represent better posterior regions, valleys represent worse regions, and the landscape is the huge space of trees and parameters. A purely greedy hiker that only moves uphill can get trapped on a local peak.",
      "Bayesian MCMC solves part of that problem by allowing some downhill moves. This is not a mistake; it is the mechanism that lets the chain leave a local optimum and continue searching for a better region of the posterior landscape."
    ]],
    ["6. Metropolis-Hastings acceptance", [
      "The Metropolis-Hastings criterion compares a proposed state with the current state. Better proposals are usually accepted. Worse proposals can still be accepted with a probability related to the ratio between proposed and current posterior probabilities.",
      "This rule is one of the most important conceptual differences from a simple hill-climbing search. It prevents the analysis from becoming too brittle and gives the chain a chance to cross valleys between peaks."
    ]],
    ["7. Multiple chains and heated chains", [
      "A single chain can fool you: it might look stable because it is stuck on one local optimum. Running multiple independent chains gives a stronger diagnostic, because they should converge toward the same target distribution if the search is working.",
      "Metropolis-coupled MCMC, often called MC3, adds heated chains. The cold chain samples the actual posterior. Heated chains explore a flattened version of the landscape, make bolder moves and help escape local optima."
    ]],
    ["8. Burn-in", [
      "At the beginning of an MCMC run, the chain is usually far from the target distribution. Those early samples should not be treated as representative of the posterior, so they are discarded as burn-in.",
      "The professor gave a ballpark idea that burn-in can often be around 10–35%, but the real lesson is not to choose it blindly. You inspect traces and decide whether the early part of the chain is still moving toward stationarity."
    ]],
    ["9. ESS, mixing and the fuzzy caterpillar", [
      "Effective Sample Size measures how much independent information your posterior sample contains. A chain can have many recorded points but still have low ESS if consecutive samples are highly autocorrelated.",
      "Tracer makes this visible. A good trace looks like a stable fuzzy caterpillar around a stationary distribution. A bad trace trends upward or downward, jumps between regimes, or shows strong autocorrelation. ESS below 100 is weak; around 200 is often treated as a minimum acceptable target."
    ]],
    ["10. Posterior trees and clade probabilities", [
      "Bayesian inference stores sampled trees through time. After burn-in, the frequency of a bipartition among sampled trees becomes its posterior probability. That is why posterior probabilities are commonly displayed as node support values.",
      "These values are not bootstrap percentages. A posterior probability is a model-based probability conditional on the data, priors and MCMC sample. Bootstrap support is a resampling frequency under a different framework."
    ]],
    ["11. Majority-rule consensus and MCC trees", [
      "A majority-rule consensus tree contains clades that appear in more than 50% of the sampled posterior trees. It is intuitive, but it can sometimes assemble a combination of clades that was not itself one of the sampled trees.",
      "A Maximum Clade Credibility tree chooses a real tree from the posterior sample, typically the sampled tree with the highest product of posterior clade probabilities. This is often useful because it summarizes the posterior without inventing a topology that was never sampled."
    ]],
    ["12. Practical workflow: PhyloBayes", [
      "The practical uses PhyloBayes to make Bayesian inference concrete. First, the alignment is converted from FASTA to PHYLIP using AMAS, because PhyloBayes expects a PHYLIP-formatted input file.",
      "Then two runs are launched separately, for example `pb_mpi -d alignment.phy chain1` and `pb_mpi -d alignment.phy chain2`. The point is not just to obtain a tree; it is to compare runs, inspect traces and decide whether the posterior was sampled well enough."
    ]],
    ["13. Practical outputs and post-processing", [
      "PhyloBayes produces files with different roles: `.chain` stores the current state and allows resuming the run, `.trace` records sampled statistics such as log-likelihood and parameters, and `.treelist` stores sampled trees.",
      "Diagnostics are done with tools such as `tracecomp` and Tracer. Consensus summaries are produced with `bpcomp`, which outputs bipartitions and a consensus tree. If a clade has posterior probability below the cutoff, it can collapse into a polytomy in the consensus tree."
    ]],
  ],
  bayesTitle: "Bayes theorem in one phylogenetic line",
  bayesCards: [
    ["Posterior", "P(tree, parameters | alignment): what Bayesian inference wants to estimate."],
    ["Likelihood", "P(alignment | tree, parameters): the ML-style score inherited from Lesson 08."],
    ["Prior", "Assumptions assigned before seeing the data; they are part of the model."],
    ["Marginal likelihood", "The difficult normalizing term that requires integrating over the whole model space."],
  ],
  mcmcTitle: "MCMC as a hiker in tree space",
  mcmcCaption: "A chain moves through possible trees and parameters. It tends to move toward better posterior regions, but it can also accept some worse moves to avoid being trapped in local optima.",
  mcmcSteps: ["current state", "propose change", "evaluate posterior", "accept / reject", "sample", "repeat"],
  diagnosticsTitle: "Diagnostics are part of the analysis",
  diagnosticsCards: [
    ["Burn-in", "Discard early samples before the chain has reached the target distribution."],
    ["ESS", "Effective Sample Size estimates how much independent information the trace contains."],
    ["Trace plot", "A stable fuzzy caterpillar suggests stationarity and good mixing."],
    ["Multiple chains", "Independent runs should converge toward the same posterior distribution."],
  ],
  treeSummaryTitle: "From many sampled trees to one readable tree",
  treeSummaryCards: [
    ["Posterior sample", "After burn-in, the treelist is a sample of plausible trees."],
    ["Majority-rule consensus", "Keeps clades found in more than half of posterior trees."],
    ["MCC tree", "Chooses a real sampled tree with high overall clade credibility."],
  ],
  practicalTitle: "Practical bridge: PhyloBayes, Tracer and bpcomp",
  practicalCards: [
    ["AMAS convert", "Convert FASTA to PHYLIP with `AMAS.py convert -d dna -u phylip -f fasta -i ...` before launching PhyloBayes."],
    ["Two chains", "Run two independent chains so convergence can be assessed rather than assumed."],
    ["tracecomp / Tracer", "Check ESS, relative differences and trace shapes. Look for stable traces, not trending or stuck traces."],
    ["bpcomp", "Summarize posterior trees into bipartitions and a consensus tree; interpret collapsed branches as low posterior support under the cutoff."],
  ],
  takeaways: [
    "Bayesian inference estimates P(model | data), not P(data | model).",
    "The posterior combines likelihood, priors and marginal likelihood.",
    "MCMC samples a posterior distribution because direct enumeration is impossible.",
    "Metropolis-Hastings can accept some worse moves to escape local optima.",
    "Burn-in, ESS and trace inspection determine whether the sample is trustworthy.",
    "BI gives a posterior sample of trees, which must be summarized carefully.",
  ],
  checklist: [
    "I can distinguish likelihood from posterior probability.",
    "I can explain prior, likelihood and marginal likelihood in Bayes theorem.",
    "I can describe why MCMC is needed in Bayesian phylogenetics.",
    "I can explain what burn-in removes and why ESS matters.",
    "I can distinguish cold and heated chains in MC3.",
    "I can explain the difference between majority-rule consensus and MCC trees.",
    "I can identify the roles of .chain, .trace and .treelist files in PhyloBayes.",
    "I can explain why two chains are run in the practical.",
  ],
};

const es = {
  ...baseEn,
  eyebrow: "Lección 09 · Inferencia bayesiana",
  title: "Inferencia bayesiana, MCMC y árboles posteriores",
  subtitle: "La inferencia bayesiana transforma la maquinaria de likelihood de la Lección 08 en una distribución posterior de árboles, parámetros y modelos.",
  big: "ML pregunta P(datos | modelo). La inferencia bayesiana pregunta P(modelo | datos): ¿qué tan plausibles son los árboles y parámetros después de observar el alineamiento? Como el denominador exige integrar sobre espacios enormes de árboles y parámetros, se usa MCMC para muestrear la distribución posterior.",
  workflow: ["alineamiento", "prior + likelihood", "propuesta MCMC", "aceptar / rechazar", "burn-in + diagnósticos", "resumen posterior"],
  section: "Sección",
  bigPicture: "Idea central",
  workflowTitle: "Cómo se organiza la lección",
  emphasisTitle: "Lo que el profe remarcó",
  checklistTitle: "Antes de seguir",
  emphasis: [
    ["BI pregunta P(modelo | datos)", "El contraste más seguro con Maximum Likelihood es la dirección de la probabilidad condicional: ML evalúa P(datos | modelo), mientras que BI estima P(modelo | datos)."],
    ["MCMC no es decoración", "La posterior no se puede calcular directamente en filogenética realista. MCMC es la estrategia numérica para muestrear árboles y parámetros de una distribución posterior compleja."],
    ["Los movimientos peores pueden ayudar", "Metropolis-Hastings no acepta solo propuestas mejores. Puede aceptar estados ligeramente peores para que la cadena escape de óptimos locales."],
    ["Los diagnósticos importan", "El output bayesiano solo es útil después de remover burn-in y revisar convergencia/mixing. ESS, trazas y comparación de cadenas son parte del análisis."],
    ["BI guarda muchos árboles", "A diferencia de una búsqueda ML típica que termina en un solo árbol mejor, BI almacena una muestra posterior de árboles que debe resumirse."],
  ],
  sections: [
    ["1. De ML al razonamiento bayesiano", [
      "La Lección 08 planteó la inferencia como P(D|M), la probabilidad del alineamiento dado un modelo y un árbol. La Lección 09 invierte la pregunta: después de ver los datos, ¿qué tan plausibles son el modelo, la topología, las longitudes de rama y los parámetros?",
      "Esa pregunta invertida es la posterior bayesiana, P(M|D). En filogenética, el modelo incluye topología, branch lengths, parámetros del modelo de sustitución, heterogeneidad de tasas y priors. Por eso la posterior es una distribución sobre muchos árboles y valores, no un solo score."
    ]],
    ["2. Teorema de Bayes en filogenética", [
      "La fórmula general es posterior = likelihood × prior / marginal likelihood. La likelihood es la parte que ya conocemos de ML: qué tan probables son los datos si cierto árbol y modelo fueran verdaderos.",
      "El prior representa supuestos antes de ver los datos. Puede aplicarse a árboles, longitudes de rama, parámetros, tasas u otras cantidades. La marginal likelihood normaliza integrando sobre el espacio completo, lo que la vuelve computacionalmente difícil."
    ]],
    ["3. Por qué el cálculo directo es imposible", [
      "En un ejemplo pequeño, Bayes parece sencillo. En filogenética, el espacio de árboles crece explosivamente y para cada topología hay longitudes de rama, parámetros de sustitución y tasas. No es viable sumar o integrar todo directamente.",
      "La consecuencia práctica es que BI depende de muestreo numérico. En vez de enumerar todos los árboles y parámetros, construye una cadena que visita regiones plausibles de la distribución posterior."
    ]],
    ["4. MCMC: Markov Chain Monte Carlo", [
      "MCMC significa Markov Chain Monte Carlo. Markov Chain significa que el siguiente estado depende del estado actual, no de toda la historia previa. Monte Carlo significa que se usa muestreo aleatorio para aproximar una distribución compleja.",
      "Cada estado de la cadena puede imaginarse como un escenario filogenético completo: topología, longitudes de rama y valores numéricos de parámetros. Si la cadena funciona bien, la frecuencia con la que visita regiones del tree space aproxima la posterior."
    ]],
    ["5. La metáfora del excursionista", [
      "El profe usó la imagen de un excursionista moviéndose por colinas. Los picos son regiones posteriores mejores, los valles regiones peores, y el paisaje es el enorme espacio de árboles y parámetros. Un excursionista que solo sube se puede quedar atrapado en un pico local.",
      "MCMC resuelve parte del problema permitiendo algunos movimientos hacia abajo. No es un error: es lo que permite que la cadena salga de un óptimo local y continúe buscando una región posterior mejor."
    ]],
    ["6. Criterio de Metropolis-Hastings", [
      "Metropolis-Hastings compara un estado propuesto con el estado actual. Las propuestas mejores suelen aceptarse. Las peores todavía pueden aceptarse con una probabilidad relacionada con el cociente entre posterior propuesta y posterior actual.",
      "Esta regla es una diferencia conceptual importante frente a una búsqueda puramente greedy. Evita que el análisis sea demasiado rígido y permite cruzar valles entre picos."
    ]],
    ["7. Múltiples cadenas y cadenas calentadas", [
      "Una sola cadena puede engañar: puede parecer estable porque está atrapada en un óptimo local. Varias cadenas independientes son un diagnóstico más fuerte, porque deberían converger hacia la misma distribución objetivo si la búsqueda funciona.",
      "Metropolis-coupled MCMC, o MC3, añade cadenas calentadas. La cadena fría muestrea la posterior real. Las cadenas calentadas exploran un paisaje aplanado, hacen movimientos más audaces y ayudan a escapar de óptimos locales."
    ]],
    ["8. Burn-in", [
      "Al inicio de una corrida MCMC, la cadena suele estar lejos de la distribución objetivo. Esas muestras tempranas no deben tratarse como representativas de la posterior, por eso se descartan como burn-in.",
      "El profesor dio como referencia que el burn-in puede estar alrededor de 10–35%, pero la lección real es no escogerlo a ciegas. Hay que inspeccionar las trazas y decidir si la parte inicial aún está moviéndose hacia la estacionariedad."
    ]],
    ["9. ESS, mixing y fuzzy caterpillar", [
      "Effective Sample Size mide cuánta información independiente contiene la muestra posterior. Una cadena puede tener muchas muestras guardadas y aun así tener ESS bajo si las muestras consecutivas están autocorrelacionadas.",
      "Tracer permite verlo visualmente. Una buena traza parece un fuzzy caterpillar estable alrededor de una distribución estacionaria. Una mala traza muestra tendencias, saltos entre regímenes o autocorrelación fuerte. ESS menor a 100 es débil; alrededor de 200 suele ser un mínimo aceptable."
    ]],
    ["10. Árboles posteriores y probabilidades de clados", [
      "BI guarda árboles muestreados a lo largo del tiempo. Después del burn-in, la frecuencia de una bipartición entre los árboles muestreados se interpreta como su posterior probability. Por eso se muestran como soporte de nodos.",
      "No son porcentajes de bootstrap. Una posterior probability es una probabilidad basada en modelo, condicionada por datos, priors y la muestra MCMC. Bootstrap es una frecuencia de remuestreo bajo otro marco."
    ]],
    ["11. Majority-rule consensus y MCC", [
      "Un majority-rule consensus conserva los clados presentes en más del 50% de los árboles posteriores. Es intuitivo, pero a veces puede ensamblar una combinación de clados que no fue exactamente un árbol muestreado.",
      "Un Maximum Clade Credibility tree elige un árbol real de la muestra posterior, normalmente el que maximiza el producto de probabilidades posteriores de clados. Es útil porque resume la posterior sin inventar una topología no muestreada."
    ]],
    ["12. Flujo práctico: PhyloBayes", [
      "La práctica usa PhyloBayes para hacer concreta la inferencia bayesiana. Primero se convierte el alineamiento FASTA a PHYLIP con AMAS, porque PhyloBayes espera input en formato PHYLIP.",
      "Luego se lanzan dos corridas independientes, por ejemplo `pb_mpi -d alignment.phy chain1` y `pb_mpi -d alignment.phy chain2`. La idea no es solo obtener un árbol; es comparar corridas, inspeccionar trazas y decidir si la posterior fue muestreada adecuadamente."
    ]],
    ["13. Outputs prácticos y post-procesamiento", [
      "PhyloBayes produce archivos con roles distintos: `.chain` guarda el estado actual y permite continuar una corrida, `.trace` registra estadísticas muestreadas como log-likelihood y parámetros, y `.treelist` guarda los árboles muestreados.",
      "Los diagnósticos se hacen con `tracecomp` y Tracer. Los resúmenes de consenso se generan con `bpcomp`, que produce biparticiones y un árbol consenso. Si un clado queda por debajo del cutoff de posterior, puede colapsarse en una politomía."
    ]],
  ],
  bayesTitle: "Bayes en una línea filogenética",
  bayesCards: [
    ["Posterior", "P(árbol, parámetros | alineamiento): lo que BI quiere estimar."],
    ["Likelihood", "P(alineamiento | árbol, parámetros): el score tipo ML heredado de la Lección 08."],
    ["Prior", "Supuestos antes de observar los datos; forman parte del modelo."],
    ["Marginal likelihood", "El término normalizador difícil que integra sobre todo el espacio de modelos."],
  ],
  mcmcTitle: "MCMC como excursionista en tree space",
  mcmcCaption: "Una cadena se mueve por árboles y parámetros posibles. Tiende a regiones posteriores mejores, pero puede aceptar algunos movimientos peores para evitar quedar atrapada en óptimos locales.",
  mcmcSteps: ["estado actual", "proponer cambio", "evaluar posterior", "aceptar / rechazar", "muestrear", "repetir"],
  diagnosticsTitle: "Los diagnósticos son parte del análisis",
  diagnosticsCards: [
    ["Burn-in", "Descarta muestras tempranas antes de que la cadena alcance la distribución objetivo."],
    ["ESS", "Effective Sample Size estima cuánta información independiente contiene la traza."],
    ["Trace plot", "Un fuzzy caterpillar estable sugiere estacionariedad y buen mixing."],
    ["Múltiples cadenas", "Corridas independientes deberían converger hacia la misma posterior."],
  ],
  treeSummaryTitle: "De muchos árboles muestreados a un árbol legible",
  treeSummaryCards: [
    ["Muestra posterior", "Después del burn-in, el treelist es una muestra de árboles plausibles."],
    ["Majority-rule consensus", "Conserva clados presentes en más de la mitad de los árboles posteriores."],
    ["MCC tree", "Elige un árbol real muestreado con alta credibilidad global de clados."],
  ],
  practicalTitle: "Puente práctico: PhyloBayes, Tracer y bpcomp",
  practicalCards: [
    ["AMAS convert", "Convierte FASTA a PHYLIP con `AMAS.py convert -d dna -u phylip -f fasta -i ...` antes de lanzar PhyloBayes."],
    ["Dos cadenas", "Ejecuta dos cadenas independientes para evaluar convergencia en vez de asumirla."],
    ["tracecomp / Tracer", "Revisa ESS, diferencias relativas y forma de las trazas. Busca trazas estables, no tendencias o bloqueos."],
    ["bpcomp", "Resume árboles posteriores en biparticiones y árbol consenso; interpreta ramas colapsadas como bajo soporte posterior bajo el cutoff."],
  ],
  takeaways: [
    "BI estima P(modelo | datos), no P(datos | modelo).",
    "La posterior combina likelihood, priors y marginal likelihood.",
    "MCMC muestrea la posterior porque la enumeración directa es imposible.",
    "Metropolis-Hastings puede aceptar movimientos peores para escapar de óptimos locales.",
    "Burn-in, ESS y trazas determinan si la muestra es confiable.",
    "BI produce una muestra posterior de árboles que debe resumirse cuidadosamente.",
  ],
  checklist: [
    "Distingo likelihood de posterior probability.",
    "Puedo explicar prior, likelihood y marginal likelihood en Bayes.",
    "Puedo explicar por qué se necesita MCMC en BI filogenética.",
    "Puedo explicar qué remueve burn-in y por qué importa ESS.",
    "Distingo cadenas frías y calentadas en MC3.",
    "Distingo majority-rule consensus y MCC tree.",
    "Identifico el rol de .chain, .trace y .treelist en PhyloBayes.",
    "Puedo explicar por qué se corren dos cadenas en la práctica.",
  ],
};

const fa = {
  ...baseEn,
  eyebrow: "درس ۰۹ · استنباط بیزی",
  title: "استنباط بیزی، MCMC و درخت‌های پسین",
  subtitle: "این درس نشان می‌دهد چگونه likelihood به یک توزیع پسین از درخت‌ها و پارامترها تبدیل می‌شود.",
  bigPicture: "ایدهٔ اصلی",
  workflowTitle: "ساختار درس",
  emphasisTitle: "نکات مورد تأکید استاد",
  checklistTitle: "پیش از ادامه",
  section: "بخش",
};

const c = { en: baseEn, es, fa };

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

function BayesBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">posterior</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.bayesTitle}</h2>
        <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-center text-white shadow-inner">
          <div className="text-2xl font-black tracking-tight md:text-4xl">P(M | D) ∝ P(D | M) × P(M)</div>
          <p className="mt-3 text-sm font-semibold text-stone-300">Posterior is proportional to likelihood times prior.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {copy.bayesCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "green", "amber", "purple"][index]}>{body}</Card>)}
      </div>
    </div>
  </section>;
}

function MCMCBlock({ copy }) {
  return <section className="mt-8 overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
    <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">MCMC</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight">{copy.mcmcTitle}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-stone-300">{copy.mcmcCaption}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {copy.mcmcSteps.map((step, index) => <div key={step} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-center">
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-black text-stone-950">{index + 1}</div>
            <div className="text-xs font-black uppercase tracking-[0.12em] text-stone-100">{step}</div>
          </div>)}
        </div>
      </div>
      <svg viewBox="0 0 560 300" className="h-80 w-full rounded-[2rem] border border-white/10 bg-white/5 p-3">
        <path d="M20 250 C70 245,80 210,115 210 C155 210,150 150,195 150 C245 150,235 70,290 70 C345 70,340 180,385 180 C430 180,430 115,475 115 C515 115,515 70,540 65" fill="none" stroke="#fca5a5" strokeWidth="6" />
        <path d="M28 246 C65 238,96 226,128 206 C157 188,171 170,198 151 C226 130,250 99,287 72" fill="none" stroke="#fde68a" strokeWidth="4" strokeDasharray="9 8" />
        <path d="M290 70 C250 128,240 176,292 206 C335 230,384 180,440 132 C480 98,506 76,540 65" fill="none" stroke="#86efac" strokeWidth="4" strokeDasharray="7 8" />
        {[[70,232,"start"],[205,150,"local"],[290,70,"global"],[395,180,"valley"],[510,86,"sample"]].map(([x,y,label]) => <g key={label}>
          <circle cx={x} cy={y} r="15" fill="#fff" stroke="#292524" strokeWidth="3" />
          <text x={x} y={y - 22} textAnchor="middle" className="fill-white text-[11px] font-black">{label}</text>
        </g>)}
        <text x="280" y="285" textAnchor="middle" className="fill-stone-300 text-xs font-bold">worse moves can help the chain cross valleys</text>
      </svg>
    </div>
  </section>;
}

function DiagnosticsBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">burn-in / ESS / Tracer</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.diagnosticsTitle}</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {copy.diagnosticsCards.map(([title, body], index) => <Card key={title} title={title} tone={["amber", "green", "sky", "purple"][index]}>{body}</Card>)}
        </div>
      </div>
      <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-stone-500">trace shape</div>
        <svg viewBox="0 0 520 260" className="h-72 w-full rounded-[1.5rem] bg-white">
          <line x1="45" y1="220" x2="490" y2="220" stroke="#a8a29e" strokeWidth="3" />
          <line x1="45" y1="30" x2="45" y2="220" stroke="#a8a29e" strokeWidth="3" />
          <path d="M55 130 C80 115,105 145,130 128 C155 110,175 145,205 128 C235 108,255 147,285 129 C315 112,340 144,370 130 C405 112,435 148,480 128" fill="none" stroke="#16a34a" strokeWidth="5" />
          <path d="M55 205 C115 195,160 170,205 160 C255 150,300 110,350 95 C405 80,440 65,480 42" fill="none" stroke="#dc2626" strokeWidth="5" strokeDasharray="9 7" />
          <text x="95" y="85" className="fill-emerald-700 text-xs font-black">good: fuzzy caterpillar</text>
          <text x="305" y="65" className="fill-red-700 text-xs font-black">bad: still trending</text>
          <text x="250" y="247" textAnchor="middle" className="fill-stone-600 text-xs font-bold">generations</text>
        </svg>
      </div>
    </div>
  </section>;
}

function TreeSummaryBlock({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">posterior tree sample</div>
    <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.treeSummaryTitle}</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {copy.treeSummaryCards.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "amber", "green"][index]}>{body}</Card>)}
    </div>
  </section>;
}

function PracticalBridge({ copy }) {
  return <section className="mt-8 rounded-[2.5rem] border border-red-100 bg-red-50 p-6 shadow-sm md:p-8">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">PhyloBayes / Tracer</div>
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
    question: "What probability does Bayesian phylogenetic inference primarily estimate?",
    options: ["P(data | model)", "P(model | data)", "P(prior | likelihood)", "P(tree space | distance matrix)"],
    answer: 1,
    explanation: "Bayesian inference estimates the posterior probability of the model, tree and parameters given the observed data.",
    optionExplanations: ["This is the Maximum Likelihood direction.", "Correct. This is the posterior probability.", "Priors and likelihoods are components of Bayes theorem, not the target probability in this form.", "Tree space is explored, but this expression is not the posterior."],
  },
  {
    kind: "theory",
    question: "In Bayes theorem, the posterior is proportional to which two quantities?",
    options: ["Likelihood and prior", "Likelihood and branch count", "Prior and p-distance", "Bootstrap and ESS"],
    answer: 0,
    explanation: "The posterior is proportional to likelihood multiplied by prior, with marginal likelihood as the normalizing term.",
    optionExplanations: ["Correct. Posterior ∝ likelihood × prior.", "Branch count is not the Bayesian formula.", "p-distance is a distance measure, not the central Bayesian product.", "Bootstrap and ESS are not multiplied to obtain the posterior."],
  },
  {
    kind: "theory",
    question: "Why is MCMC used in Bayesian phylogenetics?",
    options: ["Because direct integration over all trees and parameters is computationally infeasible", "Because Bayesian inference does not need likelihoods", "Because MCMC converts amino acids into nucleotides", "Because it guarantees a perfect tree after one iteration"],
    answer: 0,
    explanation: "MCMC approximates the posterior by sampling when direct enumeration or integration is impossible.",
    optionExplanations: ["Correct. Tree and parameter spaces are too large for direct calculation.", "Bayesian phylogenetics uses likelihood as a key component.", "MCMC is a sampling algorithm, not a translation tool.", "MCMC requires many iterations and diagnostic checks."],
  },
  {
    kind: "theory",
    question: "What does the Markov Chain part of MCMC imply?",
    options: ["The next state depends on the current state, not the full previous history", "All previous states must be stored to propose the next one", "The chain can never move to a worse state", "The chain only samples distance matrices"],
    answer: 0,
    explanation: "The Markov property means transitions depend on the current state.",
    optionExplanations: ["Correct. This is the Markov property.", "The full history is not required under the Markov property.", "Worse states can sometimes be accepted by Metropolis-Hastings.", "MCMC samples trees and parameters, not only distance matrices."],
  },
  {
    kind: "theory",
    question: "What is the role of the Metropolis-Hastings criterion?",
    options: ["It decides whether to accept or reject a proposed state", "It trims poorly aligned regions", "It converts FASTA files into PHYLIP files", "It calculates reciprocal best hits"],
    answer: 0,
    explanation: "Metropolis-Hastings governs acceptance of proposals during MCMC.",
    optionExplanations: ["Correct. It compares proposed and current states probabilistically.", "Trimming belongs to tools such as Gblocks or trimAl.", "Format conversion is done by tools such as AMAS.", "RBH belongs to orthology inference."],
  },
  {
    kind: "theory",
    question: "Why can accepting a slightly worse proposed state be useful?",
    options: ["It helps the chain escape local optima", "It makes likelihood unnecessary", "It forces all posterior probabilities to equal 1", "It removes the need for burn-in"],
    answer: 0,
    explanation: "Occasional downhill moves allow the chain to cross valleys and avoid being trapped on local peaks.",
    optionExplanations: ["Correct. This is the point of the hiking metaphor.", "Likelihood remains central to the posterior.", "Posterior probabilities are not forced to 1.", "Burn-in is still needed because early samples may be unrepresentative."],
  },
  {
    kind: "theory",
    question: "In MC3, what do heated chains do?",
    options: ["Explore a flattened posterior landscape to escape local optima", "Replace the cold chain as the only valid posterior sample", "Increase base frequencies to exactly 25%", "Delete all trees sampled before burn-in"],
    answer: 0,
    explanation: "Heated chains make bolder moves and help exploration; the cold chain samples the target posterior.",
    optionExplanations: ["Correct. Heating flattens the landscape and improves exploration.", "The cold chain is the one associated with the actual posterior target.", "Heating is unrelated to forcing equal base frequencies.", "Burn-in removal is a post-processing decision, not the role of heated chains."],
  },
  {
    kind: "theory",
    question: "What is burn-in?",
    options: ["Initial MCMC samples discarded because the chain has not yet reached stationarity", "The final tree selected by Maximum Likelihood", "The part of the alignment removed by Gblocks", "A correction for transition/transversion bias"],
    answer: 0,
    explanation: "Burn-in removes early samples that are not representative of the posterior distribution.",
    optionExplanations: ["Correct. Early chain states are usually far from the target distribution.", "That is not burn-in and belongs to a different framework.", "Alignment trimming is unrelated to MCMC burn-in.", "Transition/transversion bias is handled by substitution models."],
  },
  {
    kind: "theory",
    question: "What does a low ESS value indicate?",
    options: ["Poor effective sampling and strong autocorrelation", "Perfect convergence of all parameters", "A guaranteed correct topology", "A fully saturated alignment"],
    answer: 0,
    explanation: "Low ESS means the trace does not contain enough independent information and the run likely needs improvement or more length.",
    optionExplanations: ["Correct. ESS summarizes effective independent sample size.", "Perfect convergence would not be described by low ESS.", "ESS is diagnostic, not proof of a correct topology.", "Saturation is a sequence-evolution issue, not the meaning of ESS."],
  },
  {
    kind: "theory",
    question: "How does an MCC tree differ from a majority-rule consensus tree?",
    options: ["An MCC tree is a real sampled tree selected for high clade credibility", "An MCC tree always contains only clades with posterior probability below 0.5", "An MCC tree is built from a distance matrix", "An MCC tree is the same as a bootstrap replicate"],
    answer: 0,
    explanation: "MCC selects an actual sampled tree with high overall clade credibility, whereas majority-rule consensus summarizes clades appearing above a threshold.",
    optionExplanations: ["Correct. This is the core distinction emphasized in the lecture.", "Low posterior clades are usually not the goal of an MCC summary.", "MCC summaries come from posterior tree samples, not distance matrices.", "Bootstrap replicates belong to resampling support, not Bayesian posterior summarization."],
  },
  {
    kind: "practical",
    question: "In the practical, why is AMAS used before running PhyloBayes?",
    options: ["To convert the alignment from FASTA to PHYLIP format", "To calculate ESS values", "To build the consensus tree from sampled trees", "To heat the MCMC chains"],
    answer: 0,
    explanation: "PhyloBayes needs a PHYLIP-formatted alignment in this practical, so AMAS performs the format conversion.",
    optionExplanations: ["Correct. The command uses `AMAS.py convert -d dna -u phylip -f fasta`.", "ESS is checked later using trace diagnostics.", "Consensus trees are built later with tools such as bpcomp or TreeAnnotator.", "Heating is part of MCMC configuration, not AMAS conversion."],
  },
  {
    kind: "practical",
    question: "Why are two PhyloBayes chains launched in the practical?",
    options: ["To assess convergence by comparing independent runs", "To align two genes at the same time", "To force a strict molecular clock", "To create two different outgroups"],
    answer: 0,
    explanation: "Independent chains help check whether different runs converge toward the same posterior distribution.",
    optionExplanations: ["Correct. Comparing chains is a core Bayesian diagnostic.", "The alignment already exists before the BI run.", "A strict clock is not the reason for launching two chains.", "Outgroups are not created by running multiple chains."],
  },
  {
    kind: "practical",
    question: "Which PhyloBayes output file stores sampled tree topologies?",
    options: [".treelist", ".trace", ".chain", ".bplist"],
    answer: 0,
    explanation: "The treelist stores sampled trees used to build posterior summaries.",
    optionExplanations: ["Correct. `.treelist` contains sampled tree topologies.", "`.trace` records statistics such as log-likelihood and parameter values.", "`.chain` stores the state of the run and can allow resuming.", "`.bplist` is produced by bpcomp and lists bipartitions."],
  },
  {
    kind: "practical",
    question: "What is `tracecomp` used for in the practical?",
    options: ["Checking trace diagnostics such as ESS and relative differences", "Performing sequence alignment", "Running reciprocal best hit searches", "Changing nucleotide states into amino acids"],
    answer: 0,
    explanation: "tracecomp summarizes convergence-related diagnostics for one or more chains.",
    optionExplanations: ["Correct. It reports values such as effective sample size and relative differences.", "Alignment is done before the Bayesian run.", "RBH is an orthology step, not Bayesian diagnostics.", "Translation is unrelated to tracecomp."],
  },
  {
    kind: "practical",
    question: "What does `bpcomp chain1 chain2` generate?",
    options: ["A bipartition list and a consensus tree", "A new multiple sequence alignment", "A set of reciprocal BLAST hits", "A gamma-rate model file only"],
    answer: 0,
    explanation: "bpcomp summarizes posterior tree samples into files such as `bpcomp.bplist` and `bpcomp.con.tre`.",
    optionExplanations: ["Correct. It produces bipartition and consensus-tree summaries.", "It does not align sequences.", "It does not perform orthology inference.", "It is about tree-sample comparison, not only rate modeling."],
  },
];

export const lesson09Quiz = { en: quizEn, es: quizEn, fa: quizEn };

export default function BayesianInferenceLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

    <BayesBlock copy={copy} />
    <MCMCBlock copy={copy} />

    {copy.sections.map(([title, body], index) => <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.section} {index + 1}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{body.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}</div>
    </section>)}

    <DiagnosticsBlock copy={copy} />
    <TreeSummaryBlock copy={copy} />
    <PracticalBridge copy={copy} />
    <Takeaways copy={copy} />

    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{copy.checklist.map(item => <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" /><span>{item}</span></label>)}</div></section>

    <LessonPractical lang={lang} lessonNo={lessonNo} />
    <LessonQuiz lang={lang} lessonNo={lessonNo} />
    <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
  </main>;
}

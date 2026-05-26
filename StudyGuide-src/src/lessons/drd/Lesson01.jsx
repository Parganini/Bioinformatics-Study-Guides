import React, { useMemo, useState } from "react";

const SLIDES_URL = "https://drive.google.com/file/d/1F1UK7JpTC8Sm8arnNC9mfXnj8aLxbzqZ/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1kYvSq04ZeL3mt3GbLNdNwmaAqFImS8CgG70t_9NQWnA/edit?usp=drivesdk";

const FLOW_STEPS = [
  {
    title: "1. Biological question",
    body: "La pregunta debe ser focused: no basta “study cancer”; hay que definir tejido, condición, estímulo, dosis, tiempo o población.",
  },
  {
    title: "2. Model + design",
    body: "El modelo puede ser in vitro, in vivo, ex vivo, animal o humano. El diseño puede ser case-control, longitudinal, cross-sectional o time-series.",
  },
  {
    title: "3. Technique",
    body: "La técnica se elige después de la pregunta: DNA-seq, RNA profiling, methylation array, protein/metabolite assays, microbiome, etc.",
  },
  {
    title: "4. Data + statistics",
    body: "La medición produce numbers/data/variability. Después se decide si el resultado es interpretable y estadísticamente defendible.",
  },
  {
    title: "5. New question",
    body: "Los resultados no cierran el proceso: normalmente generan una segunda biological question más específica.",
  },
];

const DESIGN_CARDS = [
  ["Model", "human · animal · in vitro · in vivo · ex vivo"],
  ["Variables", "cell type/tissue · sex/gender · stimulus · dose · microenvironment · time/age"],
  ["Sample size", "suficiente para detectar una diferencia significativa, no solo para generar datos"],
  ["Technique", "ad hoc: debe responder la pregunta y tener variabilidad técnica aceptable"],
];

const OMICS = [
  ["Genomics", "sequence, mutations, aberrations", "DNA-seq · arrays · Hi-C"],
  ["Transcriptomics", "mRNA and RNA profiles", "microarrays · RNA-seq"],
  ["Epigenomics", "DNA methylation, chromatin", "methylation arrays · ChIP-seq · Nanopore"],
  ["Metagenomics", "microbiome genes", "DNA-seq"],
  ["Proteomics / metabolomics", "proteins and metabolites", "protein arrays · LC-MS · GC-MS · NMR"],
  ["Single-cell / spatial", "cell-level and tissue-positioned omics", "scRNA-seq · CITE-seq · GeoMx DSP"],
];

const VARIABILITY_ITEMS = [
  { id: "sex", label: "Sex/gender effect", type: "bio", why: "Es una diferencia biológica que puede estratificarse para reducir heterogeneidad." },
  { id: "operator", label: "Operator pipetting", type: "technical", why: "Procede del manejo experimental; debe mantenerse bajo y estable." },
  { id: "age", label: "Chronological age", type: "bio", why: "La edad modifica DNA/RNA profiles y aumenta heterogeneidad." },
  { id: "scanner", label: "Scanner / machine noise", type: "technical", why: "La profesora remarca que hay que conocer la variabilidad propia de la máquina." },
  { id: "exposome", label: "Exposome: stress, diet, smoke", type: "bio", why: "Ambiente y estilo de vida interactúan con genética y epigenética." },
  { id: "reagents", label: "Different reagent lots", type: "technical", why: "Kits y reactivos pueden introducir variación experimental." },
];

const QUIZ = [
  {
    question: "What should be defined before choosing the technique?",
    options: ["The biological question and model", "The final p-value", "The colour of the plot", "The file name"],
    answer: 0,
    explanation: "La técnica se elige ad hoc, después de saber qué proceso biológico, modelo y variable se quiere medir.",
  },
  {
    question: "Which statement matches the lecture’s logic about variability?",
    options: ["Technical variability should be higher than biological variability", "Technical variability should be low and known", "Biological variability should always be removed", "Replicates and donors mean the same thing"],
    answer: 1,
    explanation: "La variabilidad técnica siempre existe, pero debe ser baja y conocida para no cubrir la señal biológica.",
  },
  {
    question: "In the qPCR example, identical replicates of the same sample estimate mainly:",
    options: ["biological variability", "experimental variability", "sex differences", "microbiome effects"],
    answer: 1,
    explanation: "Misma muestra, mismo operador, mismos reactivos: las diferencias restantes son variabilidad experimental/técnica.",
  },
  {
    question: "Why is the microbiome mentioned as a design variable?",
    options: ["It is always a technical artifact", "It is relevant especially in gut-related biological questions", "It replaces RNA measurements", "It only matters in plants"],
    answer: 1,
    explanation: "La transcripción enfatiza que en patología intestinal no se puede ignorar el microbiome porque puede afectar el contexto biológico.",
  },
];

function Pill({ children, tone = "stone" }) {
  const tones = {
    red: "border-red-200 bg-red-50 text-red-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    stone: "border-stone-200 bg-white text-stone-700",
    dark: "border-stone-800 bg-stone-950 text-white",
  };
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${tones[tone] || tones.stone}`}>{children}</span>;
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-stone-600">{children}</p>}
    </div>
  );
}

function ProgressDots({ active }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map(i => <span key={i} className={`h-2.5 w-2.5 rounded-full ${i <= active ? "bg-red-700" : "bg-stone-200"}`} />)}
    </div>
  );
}

function BiologicalQuestionBuilder() {
  const [model, setModel] = useState("human cohort");
  const [independent, setIndependent] = useState("age");
  const [dependent, setDependent] = useState("DNA methylation profile");
  const [technique, setTechnique] = useState("Illumina EPIC / 450K methylation array");

  const sentence = `In a ${model}, does ${independent} modify ${dependent}, measured by ${technique}?`;
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Interactive builder</div>
          <h3 className="mt-1 text-2xl font-black text-stone-950">Build a focused biological question</h3>
        </div>
        <Pill tone="red">question → experiment</Pill>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <SelectBox label="Model" value={model} setValue={setModel} options={["human cohort", "in vitro cell model", "animal model", "ex vivo blood sample"]} />
        <SelectBox label="Independent variable" value={independent} setValue={setIndependent} options={["age", "inflammatory stimulus", "drug dose", "sex/gender", "time after treatment"]} />
        <SelectBox label="Dependent variable" value={dependent} setValue={setDependent} options={["DNA methylation profile", "mRNA expression", "microRNA profile", "protein level", "metabolite profile"]} />
        <SelectBox label="Technique" value={technique} setValue={setTechnique} options={["Illumina EPIC / 450K methylation array", "RNA-seq", "microarray", "qPCR", "ELISA"]} />
      </div>
      <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Focused question</div>
        <p className="mt-2 text-xl font-black leading-8">{sentence}</p>
      </div>
    </article>
  );
}

function SelectBox({ label, value, setValue, options }) {
  return (
    <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</span>
      <select value={value} onChange={e => setValue(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100">
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function VariabilityClassifier() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => VARIABILITY_ITEMS.filter(item => answers[item.id] === item.type).length, [answers]);
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Checkpoint</div>
          <h3 className="mt-1 text-2xl font-black text-stone-950">Classify variability sources</h3>
        </div>
        <Pill tone={score === VARIABILITY_ITEMS.length ? "emerald" : "amber"}>{score}/{VARIABILITY_ITEMS.length}</Pill>
      </div>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">Marca si cada fuente pertenece principalmente a variabilidad biológica o experimental. La clave de la clase: la técnica debe tener variabilidad baja para no ocultar la señal biológica.</p>
      <div className="mt-5 grid gap-3">
        {VARIABILITY_ITEMS.map(item => {
          const selected = answers[item.id];
          const correct = selected && selected === item.type;
          const wrong = selected && selected !== item.type;
          return (
            <div key={item.id} className={`rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : wrong ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}>
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <div className="text-sm font-black text-stone-950">{item.label}</div>
                  {selected && <div className="mt-1 text-xs font-bold leading-5 text-stone-600">{item.why}</div>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setAnswers({ ...answers, [item.id]: "bio" })} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-black text-stone-700 transition hover:border-red-200 hover:bg-red-50">Biological</button>
                  <button onClick={() => setAnswers({ ...answers, [item.id]: "technical" })} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-black text-stone-700 transition hover:border-red-200 hover:bg-red-50">Experimental</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function CVExercise() {
  const [values, setValues] = useState("260, 282, 310, 279, 284");
  const parsed = useMemo(() => values.split(/[\s,;]+/).map(v => Number(v)).filter(Number.isFinite), [values]);
  const stats = useMemo(() => {
    if (parsed.length < 2) return null;
    const mean = parsed.reduce((a, b) => a + b, 0) / parsed.length;
    const sd = Math.sqrt(parsed.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (parsed.length - 1));
    const cv = sd / mean * 100;
    return { mean, sd, cv };
  }, [parsed]);
  const interpretation = stats?.cv <= 10 ? "low technical variability" : stats?.cv <= 25 ? "moderate variability" : "high variability; design or biology may dominate";
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Mini calculator</div>
          <h3 className="mt-1 text-2xl font-black text-stone-950">Coefficient of Variation</h3>
        </div>
        <Pill tone="dark">CV = SD / mean × 100</Pill>
      </div>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">En la transcripción, los replicados técnicos de qPCR dan un CV cercano a 8.5%, mientras que distintos donantes pueden rondar ~51–52%. La diferencia conceptual importa más que el número exacto.</p>
      <textarea value={values} onChange={e => setValues(e.target.value)} rows={2} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100" />
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <StatCard label="n" value={parsed.length || "—"} />
        <StatCard label="mean" value={stats ? stats.mean.toFixed(2) : "—"} />
        <StatCard label="SD" value={stats ? stats.sd.toFixed(2) : "—"} />
        <StatCard label="CV" value={stats ? `${stats.cv.toFixed(2)}%` : "—"} tone="red" />
      </div>
      {stats && <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-black text-amber-900">Interpretation: {interpretation}</div>}
    </article>
  );
}

function StatCard({ label, value, tone = "stone" }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className={`mt-1 text-3xl font-black ${tone === "red" ? "text-red-700" : "text-stone-950"}`}>{value}</div>
    </div>
  );
}

function QuizBlock() {
  const [answers, setAnswers] = useState({});
  const correct = QUIZ.filter((q, idx) => answers[idx] === q.answer).length;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Self-check" title="Quiz rápido de la lectura">Preguntas diseñadas para la versión React. La explicación se muestra al responder.</SectionHeader>
      <div className="mb-4 flex items-center justify-between rounded-2xl bg-stone-950 p-4 text-white">
        <div className="text-sm font-black">Score</div>
        <div className="text-2xl font-black">{correct}/{QUIZ.length}</div>
      </div>
      <div className="grid gap-4">
        {QUIZ.map((q, idx) => (
          <article key={q.question} className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <div className="text-sm font-black leading-6 text-stone-950">{idx + 1}. {q.question}</div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {q.options.map((option, optIdx) => {
                const picked = answers[idx] === optIdx;
                const isCorrect = q.answer === optIdx;
                return (
                  <button key={option} onClick={() => setAnswers({ ...answers, [idx]: optIdx })} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold leading-5 transition ${picked && isCorrect ? "border-emerald-300 bg-emerald-50 text-emerald-900" : picked ? "border-red-300 bg-red-50 text-red-900" : "border-stone-200 bg-white text-stone-700 hover:border-red-200"}`}>{option}</button>
                );
              })}
            </div>
            {answers[idx] !== undefined && <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-6 text-stone-600">{q.explanation}</div>}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExamTrainer() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
      <SectionHeader eyebrow="Written exam trainer" title="Pregunta tipo examen de 10–12 líneas">
        <span className="text-stone-300">El verification test del Module 1 usa preguntas focalizadas: 45 minutos, 4 preguntas, aproximadamente 10–12 líneas cada una.</span>
      </SectionHeader>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl bg-white/5 p-5">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Prompt</div>
          <p className="mt-3 text-xl font-black leading-8">Explain why biological context and variability are essential when designing a DNA/RNA dynamics experiment.</p>
          <div className="mt-5 grid gap-2">
            {["focused biological question", "model and variables", "sample size", "ad hoc technique", "biological vs experimental variability", "statistics and interpretation"].map(item => (
              <label key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-stone-100"><input type="checkbox" className="h-4 w-4 accent-red-500" />{item}</label>
            ))}
          </div>
        </article>
        <article className="rounded-3xl bg-white p-5 text-stone-900">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Model answer</div>
          <p className="mt-3 text-sm font-semibold leading-7 text-stone-700">In DNA/RNA dynamics, biological context is essential because it determines the model, the variables and the technique. A question must be focused: for example, not simply “study cancer”, but a specific cancer, condition, drug, dose or time. The design must define whether samples are human, animal, in vitro, in vivo or ex vivo, and whether the comparison is case-control, longitudinal or time-series. The dependent variable may be RNA expression, DNA methylation, proteins or another omics layer. Variability is central because biological variability reflects real differences between donors, cells, age, sex or exposome, whereas experimental variability comes from machines, reagents, operator and processing. Technical variability should be low and known; otherwise it can hide biological effects. Therefore, sample size, replicates, QC and statistics are necessary before drawing conclusions.</p>
        </article>
      </div>
    </section>
  );
}

export default function DRDLesson01({ lang = "es", isDone = false, toggle = () => {} }) {
  const [activeFlow, setActiveFlow] = useState(0);
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">← Volver al dashboard DRD</a>
        <button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? "✓ Completada" : "Marcar completada"}</button>
      </div>

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">DRD Lesson 1 · Apr 28</div>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">From biological question to data and variability.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">Diseño de la primera página de estudio para DNA/RNA Dynamics. Integra las slides de introducción con la transcripción: pregunta biológica, modelo experimental, omics, variabilidad, CV, distribución y lógica del examen.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill tone="red">biological question</Pill>
              <Pill>experimental design</Pill>
              <Pill>technical variability</Pill>
              <Pill>biological variability</Pill>
              <Pill>CV</Pill>
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Module" value="1" tone="red" />
                <StatCard label="Exam" value="4Q" />
                <StatCard label="Answer" value="10–12" />
                <StatCard label="Core" value="CV" tone="red" />
              </div>
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big idea</div>
                <p className="mt-2 text-lg font-bold leading-7">A biological question becomes useful only when it becomes a measurable design with controlled variability.</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={SLIDES_URL} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-black text-stone-700 hover:bg-white">Slides PDF</a>
                <a href={TRANSCRIPT_URL} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-black text-stone-700 hover:bg-white">Transcripción</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeader eyebrow="Core flow" title="How wet lab science works">La transcripción insiste en que no es un flujo trivial: cada experimento empieza con una pregunta focalizada, produce datos y abre nuevas preguntas.</SectionHeader>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-2">
            {FLOW_STEPS.map((step, idx) => (
              <button key={step.title} onClick={() => setActiveFlow(idx)} className={`w-full rounded-2xl border p-4 text-left transition ${activeFlow === idx ? "border-red-200 bg-red-50 shadow-sm" : "border-stone-200 bg-stone-50 hover:bg-white"}`}>
                <div className="flex items-center justify-between gap-3"><span className="text-sm font-black text-stone-950">{step.title}</span><ProgressDots active={idx} /></div>
              </button>
            ))}
          </div>
          <article className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Active step</div>
            <h3 className="mt-3 text-3xl font-black tracking-tight">{FLOW_STEPS[activeFlow].title}</h3>
            <p className="mt-4 text-lg font-semibold leading-8 text-stone-200">{FLOW_STEPS[activeFlow].body}</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <BiologicalQuestionBuilder />
        <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Design checklist</div>
          <h3 className="mt-1 text-2xl font-black text-stone-950">What the slides ask you to define</h3>
          <div className="mt-5 grid gap-3">
            {DESIGN_CARDS.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-sm font-black text-stone-950">{title}</div>
                <div className="mt-1 text-sm font-semibold leading-6 text-stone-600">{body}</div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeader eyebrow="Omics map" title="Choose the layer that answers the question">La clase introduce la era ómica para evitar un error común: elegir una técnica avanzada antes de saber qué capa biológica se necesita medir.</SectionHeader>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {OMICS.map(([name, what, tools]) => (
            <article key={name} className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-xl font-black text-stone-950">{name}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{what}</p>
              <div className="mt-4 rounded-2xl bg-white p-3 text-xs font-black text-red-700 shadow-sm">{tools}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]">
        <VariabilityClassifier />
        <CVExercise />
      </section>

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeader eyebrow="Interpretation" title="Replicates are not donors">Esta distinción aparece explícitamente en la transcripción y es fundamental para no confundir variabilidad técnica con variabilidad biológica.</SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-xl font-black text-emerald-950">Technical replicates</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-emerald-900">Same biological sample, same operator, same reagents. The expected difference should be small but never zero.</p>
          </article>
          <article className="rounded-3xl border border-red-200 bg-red-50 p-5">
            <h3 className="text-xl font-black text-red-950">Different donors</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-red-900">Different DNA/RNA profiles. The coefficient of variation now includes biological variability plus the technical variability embedded in the measurement.</p>
          </article>
          <article className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-xl font-black text-amber-950">Design response</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-amber-900">If biological variability is huge, use stratification, larger sample size, longitudinal design or a more precise biological question.</p>
          </article>
        </div>
      </section>

      <QuizBlock />
      <ExamTrainer />

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeader eyebrow="Implementation notes" title="Cómo encaja esta página en la guía">Esta lectura es la base para todas las siguientes: Stanford, Affymetrix, Illumina, Module 2 pipelines y differential expression.</SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["React lesson", "La página ya funciona como una lección React interactiva con builder, clasificador, CV calculator, quiz y exam trainer."],
            ["Quiz", "Las preguntas son cortas y conceptuales, preparadas para expandirse con más feedback por opción."],
            ["Mock exam", "El bloque final entrena la estructura de 10–12 líneas que pide Capri."],
            ["Next lesson", "La siguiente página debería aplicar esta lógica a Stanford two-colour arrays: técnica, sesgos, QC y variabilidad."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-xl font-black text-stone-950">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

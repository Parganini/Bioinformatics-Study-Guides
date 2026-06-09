import React, { useMemo, useState } from "react";

const kMeansPoints = [
  { id: "G1", x: 1, y: 1 },
  { id: "G2", x: 1.5, y: 2 },
  { id: "G3", x: 3, y: 4 },
  { id: "G4", x: 5, y: 7 },
  { id: "G5", x: 3.5, y: 5 },
  { id: "G6", x: 4.5, y: 5 },
  { id: "G7", x: 3.5, y: 4.5 },
];

const examSignals = [
  "When and why apply K-means clustering?",
  "Compare K-means and hierarchical clustering.",
  "When and why apply PCA in a high-dimensional experiment?",
  "Explain Pearson, Spearman and Euclidean distance for hierarchical clustering.",
  "Explain linkage methods, especially average linkage.",
  "Interpret a heatmap: sample dendrogram, gene dendrogram, color scale and outliers.",
  "Explain a volcano plot and why adjusted p-values are used.",
  "Explain FDR, Bonferroni and Benjamini-Hochberg correction.",
];

function distance(point, centroid) {
  return Math.sqrt((point.x - centroid.x) ** 2 + (point.y - centroid.y) ** 2);
}

function mean(points) {
  return {
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
  };
}

function assign(points, c1, c2) {
  return points.map((point) => {
    const d1 = distance(point, c1);
    const d2 = distance(point, c2);
    return { ...point, d1, d2, cluster: d1 <= d2 ? "C1" : "C2" };
  });
}

function sectionTitle(eyebrow, title, body) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {body ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{body}</p> : null}
    </div>
  );
}

function SlideGuidedNotes({ blocks = [] }) {
  if (!blocks.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Slide-guided notes", "Follow the logic of the June 9 slides", "Each block is organized as: what the slide contributes, what the professor stressed, and how it can become an exam answer.")}
      <div className="grid gap-4 lg:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.range} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{block.range}</span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">slides</span>
            </div>
            <h3 className="mt-4 text-xl font-black leading-7 text-stone-950">{block.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{block.body}</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">Professor emphasis</div>
                <p className="mt-2 text-sm font-bold leading-6 text-amber-950">{block.professor}</p>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Exam cue</div>
                <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{block.exam}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function KMeansLab() {
  const [step, setStep] = useState(0);
  const states = useMemo(() => {
    const first = assign(kMeansPoints, kMeansPoints[0], kMeansPoints[3]);
    const c1a = mean(first.filter((point) => point.cluster === "C1"));
    const c2a = mean(first.filter((point) => point.cluster === "C2"));
    const second = assign(kMeansPoints, c1a, c2a);
    const c1b = mean(second.filter((point) => point.cluster === "C1"));
    const c2b = mean(second.filter((point) => point.cluster === "C2"));
    const third = assign(kMeansPoints, c1b, c2b);
    return [
      { label: "Initial centroids", c1: kMeansPoints[0], c2: kMeansPoints[3], rows: first },
      { label: "After first recomputation", c1: c1a, c2: c2a, rows: second },
      { label: "Stable final clusters", c1: c1b, c2: c2b, rows: third },
    ];
  }, []);
  const current = states[step];

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "K-means centroid loop", "Move through the exact logic of the class example: initial centroids, reassignment, new centroids and final stability.")}
      <div className="flex flex-wrap gap-2">
        {states.map((state, index) => (
          <button
            key={state.label}
            type="button"
            onClick={() => setStep(index)}
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${step === index ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
          >
            {index + 1}. {state.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Centroids</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-red-700">C1</div>
              <div className="mt-2 text-2xl font-black text-stone-950">({current.c1.x.toFixed(2)}, {current.c1.y.toFixed(2)})</div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">C2</div>
              <div className="mt-2 text-2xl font-black text-stone-950">({current.c2.x.toFixed(2)}, {current.c2.y.toFixed(2)})</div>
            </div>
          </div>
          <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950">
            Exam wording: each gene joins the nearest centroid; centroids are recalculated from original data until assignments no longer change.
          </p>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border border-stone-200 bg-white">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-stone-50 text-xs font-black uppercase tracking-[0.14em] text-stone-500">
              <tr><th className="p-3">Gene</th><th className="p-3">Coordinates</th><th className="p-3">Distance C1</th><th className="p-3">Distance C2</th><th className="p-3">Cluster</th></tr>
            </thead>
            <tbody>
              {current.rows.map((point) => (
                <tr key={point.id} className="border-t border-stone-100">
                  <td className="p-3 font-black text-stone-950">{point.id}</td>
                  <td className="p-3 font-mono">({point.x}, {point.y})</td>
                  <td className="p-3 font-mono">{point.d1.toFixed(2)}</td>
                  <td className="p-3 font-mono">{point.d2.toFixed(2)}</td>
                  <td className={`p-3 font-black ${point.cluster === "C1" ? "text-red-700" : "text-emerald-700"}`}>{point.cluster}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PCALab() {
  const [pc1, setPc1] = useState(72);
  const [pc2, setPc2] = useState(16);
  const total = Math.min(100, pc1 + pc2);
  const conclusion = total >= 80
    ? "PC1 and PC2 already summarize most of the visible structure. A two-dimensional PCA plot can be informative."
    : "PC1 and PC2 do not explain enough variance alone. Inspect additional components or a scree plot before overinterpreting the 2D plot.";

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Mini-lab", "PCA variance interpretation", "The professor's point is conceptual: PCA catches the directions of maximum variance and lets you inspect structure in fewer dimensions.")}
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            PC1 explained variance: {pc1}%
            <input type="range" min="5" max="90" value={pc1} onChange={(event) => setPc1(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            PC2 explained variance: {pc2}%
            <input type="range" min="1" max="50" value={pc2} onChange={(event) => setPc2(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Cumulative PC1 + PC2</div>
          <div className="mt-2 text-5xl font-black text-stone-950">{total}%</div>
          <div className="mt-4 h-4 overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${total}%` }} />
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">{conclusion}</p>
        </div>
      </div>
    </section>
  );
}

function InterpretationCards() {
  const [choice, setChoice] = useState("heatmap");
  const cards = {
    heatmap: {
      title: "Heatmap",
      cue: "Rows, columns, color scale and dendrograms first; biology second.",
      answer: "A defensible answer names which dendrogram represents samples, which represents genes/probes, what the color scale means, and whether the clusters match healthy/tumor, batch or outlier structure.",
    },
    david: {
      title: "DAVID / GO / KEGG",
      cue: "Gene lists need biological annotation.",
      answer: "After differential analysis, DAVID-like tools can identify enriched GO terms, pathway maps and functional groups, turning many genes into interpretable biological themes.",
    },
    volcano: {
      title: "Volcano plot",
      cue: "Effect size plus corrected significance.",
      answer: "The x-axis shows log fold change; the y-axis shows -log10 adjusted p-value. Genes above the threshold and far left/right are significant down- or up-regulated candidates.",
    },
  };

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Interpretation lab", "From plot to biological sentence", "Pick the output and rehearse the minimum answer the professor seems to want.")}
      <div className="flex flex-wrap gap-2">
        {Object.entries(cards).map(([key, card]) => (
          <button
            key={key}
            type="button"
            onClick={() => setChoice(key)}
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${choice === key ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
          >
            {card.title}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] border border-red-100 bg-red-50 p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{cards[choice].cue}</div>
        <p className="mt-3 text-base font-black leading-8 text-red-950">{cards[choice].answer}</p>
      </div>
    </section>
  );
}

function ExamRadar() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      {sectionTitle("Exam radar", "Prompts extracted for discussion", "I kept these out of the main exam trainer for now. The review document has model-answer direction and proposed integration status.")}
      <div className="grid gap-3 md:grid-cols-2">
        {examSignals.map((signal) => (
          <div key={signal} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{signal}</div>
        ))}
      </div>
    </section>
  );
}

export function LessonInteractions({ content }) {
  return (
    <>
      <SlideGuidedNotes blocks={content?.slideBlocks} />
      <KMeansLab />
      <PCALab />
      <InterpretationCards />
      <ExamRadar />
    </>
  );
}

import React from "react";
import { drdLessonHref } from "../../lessons/drd/drdManifest.js";

const RADAR_BLOCKS = [
  {
    title: "High-confidence signals from June 9",
    intro: "Prompts the professor marked directly or repeatedly during the M1.8 class.",
    tone: "red",
    items: [
      {
        priority: "High",
        prompt: "When and why would you apply K-means clustering?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["unsupervised grouping", "predefined K", "centroids", "Euclidean assignment", "limitations"],
      },
      {
        priority: "High",
        prompt: "How do you decide K in K-means?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["prior biology", "hierarchical hint", "avoid over-clustering", "stability check"],
      },
      {
        priority: "High",
        prompt: "Compare K-means and hierarchical clustering.",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["centroid partition", "dendrogram", "predefined K", "relationship among clusters"],
      },
      {
        priority: "High",
        prompt: "When and why would you apply PCA?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["dimensionality reduction", "variance", "outliers", "group separation", "not clustering"],
      },
      {
        priority: "High",
        prompt: "How do you interpret a PCA plot and scree plot?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["points", "PC1/PC2 variance", "total variance", "outliers", "biological design"],
      },
      {
        priority: "High",
        prompt: "How do you interpret a heatmap in gene-expression analysis?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["rows/columns", "two dendrograms", "color legend", "scaling", "clusters/outliers"],
      },
      {
        priority: "High",
        prompt: "Explain a volcano plot.",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["log fold change", "-log10 adjusted p-value", "up/down regions", "thresholds"],
      },
      {
        priority: "High",
        prompt: "What does multiple-testing correction mean and why is it necessary?",
        source: "M1.8 + M1.6 review",
        lesson: "m1-deg-ii",
        expected: ["many tests", "false positives", "Bonferroni", "Benjamini-Hochberg", "volcano context"],
      },
      {
        priority: "Hold",
        prompt: "One single-cell RNA-seq question will always be present.",
        source: "M1.8 transcript",
        lesson: "m1-scrna",
        expected: ["reserve for M1.9", "guest lecture", "must become practice card later"],
      },
    ],
  },
  {
    title: "Statistical-test review pack",
    intro: "These need full 10-12 line reasoning: biological question, design, assumptions and interpretation.",
    tone: "emerald",
    items: [
      {
        priority: "Medium",
        prompt: "When and why is Welch correction used?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["unequal variances", "degrees of freedom", "parametric assumption check"],
      },
      {
        priority: "Medium",
        prompt: "When and why would you apply the Wilcoxon signed-rank test?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["paired design", "non-parametric", "before/after", "biological question"],
      },
      {
        priority: "Medium",
        prompt: "When and why would you apply the Mann-Whitney U test?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["two independent groups", "rank-based", "small/non-normal data", "H0"],
      },
      {
        priority: "Medium",
        prompt: "When and why would you apply one-way ANOVA?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["more than two groups", "one factor", "parametric", "post-hoc after significance"],
      },
      {
        priority: "Medium",
        prompt: "When and why would you apply Kruskal-Wallis?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["non-parametric ANOVA alternative", "ranks", "three or more groups", "post-hoc"],
      },
      {
        priority: "Medium",
        prompt: "Why are post-hoc tests needed after significant ANOVA or Kruskal-Wallis?",
        source: "Mid-class review",
        lesson: "m1-deg-ii",
        expected: ["global test", "at least one group differs", "which pair differs", "pairwise interpretation"],
      },
    ],
  },
  {
    title: "Unsupervised-method and distance pack",
    intro: "A comparison block for methods that often get confused in short written answers.",
    tone: "stone",
    items: [
      {
        priority: "Medium",
        prompt: "For each unsupervised method, when would you apply it and why?",
        source: "Final review",
        lesson: "m1-samples-genes-ii",
        expected: ["MDS", "hierarchical clustering", "K-means", "PCA", "method-specific purpose"],
      },
      {
        priority: "Medium",
        prompt: "Explain Pearson, Spearman and Euclidean distance in hierarchical clustering.",
        source: "Final review",
        lesson: "m1-samples-genes-i",
        expected: ["linear profile", "rank-based trend", "geometric distance", "scale sensitivity"],
      },
      {
        priority: "Medium",
        prompt: "Explain linkage methods, especially average linkage.",
        source: "Final review",
        lesson: "m1-samples-genes-i",
        expected: ["cluster distance", "single", "complete", "average", "dendrogram shape"],
      },
      {
        priority: "Medium",
        prompt: "How should an apparent PCA or heatmap outlier be handled?",
        source: "M1.8 transcript",
        lesson: "m1-samples-genes-ii",
        expected: ["do not delete automatically", "technical vs biological", "metadata", "justify exclusion"],
      },
    ],
  },
  {
    title: "Interpretation and report-style pack",
    intro: "Useful as oral reasoning before converting selected prompts into the exam trainer.",
    tone: "amber",
    items: [
      {
        priority: "Review",
        prompt: "What is the biological question in the canine/human DLBCL comparison?",
        source: "M1.8 worked example",
        lesson: "m1-samples-genes-ii",
        expected: ["cross-species lymphoma", "healthy/tumor separation", "PCA", "hierarchical clustering"],
      },
      {
        priority: "Review",
        prompt: "Why focus PCA or clustering on NF-kB target genes?",
        source: "M1.8 worked example",
        lesson: "m1-samples-genes-ii",
        expected: ["immune relevance", "meaningful subset", "clearer variance", "interpretability"],
      },
      {
        priority: "Review",
        prompt: "What does DAVID/GO/KEGG add after a gene list?",
        source: "M1.8 worked example",
        lesson: "m1-samples-genes-ii",
        expected: ["functional categories", "GO terms", "pathways", "enrichment p-values"],
      },
      {
        priority: "Review",
        prompt: "How do pathway/GO results support biological interpretation?",
        source: "M1.8 worked example",
        lesson: "m1-samples-genes-ii",
        expected: ["compare enriched themes", "species/dataset differences", "cautious interpretation"],
      },
    ],
  },
];

const priorityClass = {
  High: "border-red-200 bg-red-50 text-red-700",
  Hold: "border-amber-200 bg-amber-50 text-amber-800",
  Medium: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Review: "border-stone-200 bg-stone-50 text-stone-700",
};

function allItems() {
  return RADAR_BLOCKS.flatMap((block) => block.items);
}

function blockAccent(tone) {
  if (tone === "emerald") return "text-emerald-700";
  if (tone === "amber") return "text-amber-700";
  if (tone === "stone") return "text-stone-700";
  return "text-red-700";
}

export default function DRDExamRadarPage() {
  const items = allItems();
  const highCount = items.filter((item) => item.priority === "High").length;
  const lessons = new Set(items.map((item) => item.lesson)).size;

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 flex flex-col gap-3 rounded-[2rem] border border-stone-200 bg-white/90 p-3 shadow-sm md:flex-row md:items-center md:justify-between">
        <a href="#/" className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
          Previous: DRD dashboard
        </a>
        <div className="text-center text-xs font-black uppercase tracking-[0.28em] text-stone-500">Exam question radar</div>
        <a href="#/exam-practice" className="inline-flex items-center justify-center rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          Next: Written practice
        </a>
      </nav>

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
              Before exam practice
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">
              Professor&apos;s exam signals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              A staging page for the possible written-exam prompts extracted from the June 9 class. Use it to decide which signals should become full 10-12 line practice cards.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["M1.8", "clustering", "PCA", "heatmap", "volcano plot", "statistics"].map((tag) => (
                <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-stone-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <RadarStat label="Signals" value={items.length} />
                <RadarStat label="High" value={highCount} />
                <RadarStat label="Lessons" value={lessons} />
              </div>
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Answer rule</div>
                <p className="mt-2 text-lg font-bold leading-7">
                  Every promoted card should become a complete answer: when, why, design, assumptions, limitation and interpretation.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={drdLessonHref("m1-samples-genes-ii")} className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-black text-red-700 transition hover:bg-red-100">
                  Open M1.8 lesson
                </a>
                <a href="#/exam-practice" className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-center text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
                  Open trainer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-red-200 bg-red-50/60 p-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Curation note</div>
        <p className="mt-2 text-sm font-bold leading-7 text-stone-700">
          This page is intentionally one step before the written-answer trainer: it keeps uncertain and confirmed signals visible without pretending all of them are final exam cards yet.
        </p>
      </section>

      <div className="mt-8 grid gap-7">
        {RADAR_BLOCKS.map((block) => (
          <RadarBlock key={block.title} block={block} />
        ))}
      </div>
    </main>
  );
}

function RadarStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className="mt-1 text-3xl font-black text-stone-950">{value}</div>
    </div>
  );
}

function RadarBlock({ block }) {
  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-5 shadow-sm md:p-7">
      <div className="mb-5">
        <div className={`mb-2 text-xs font-black uppercase tracking-[0.22em] ${blockAccent(block.tone)}`}>Question block</div>
        <h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{block.title}</h2>
        <p className="mt-2 max-w-3xl text-sm font-semibold leading-7 text-stone-600">{block.intro}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {block.items.map((item) => (
          <RadarCard key={item.prompt} item={item} />
        ))}
      </div>
    </section>
  );
}

function RadarCard({ item }) {
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.12em] ${priorityClass[item.priority] || priorityClass.Review}`}>
          {item.priority}
        </span>
        <span className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{item.source}</span>
      </div>
      <h3 className="text-xl font-black leading-7 text-stone-950">{item.prompt}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.expected.map((point) => (
          <span key={point} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-700">
            {point}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <a href={drdLessonHref(item.lesson)} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          Open lesson
        </a>
        <a href="#/exam-practice" className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
          Practice page
        </a>
      </div>
    </article>
  );
}

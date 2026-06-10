import React, { useMemo, useState } from "react";
import { drdLessonHref } from "../../lessons/drd/drdManifest.js";

const PRIORITIES = [
  {
    id: "stats",
    title: "Statistics core",
    time: "2 h",
    weight: "Highest",
    accent: "red",
    route: "m1-deg-ii",
    topics: ["p-value vs alpha", "Type I/II error", "paired/unpaired tests", "ANOVA", "Kruskal-Wallis", "multiple testing"],
    mustSay: "Start from design, then choose the test. Never answer only with the test name.",
  },
  {
    id: "visuals",
    title: "Visual + unsupervised",
    time: "1 h",
    weight: "Very high",
    accent: "black",
    route: "m1-samples-genes-ii",
    topics: ["PCA", "scree plot", "K-means", "hierarchical clustering", "heatmap", "volcano plot", "MA plot"],
    mustSay: "Separate exploration, clustering and statistical significance. PCA shows structure; it does not assign clusters.",
  },
  {
    id: "arrays",
    title: "Arrays + preprocessing",
    time: "45 min",
    weight: "Survival pack",
    accent: "amber",
    route: "m1-affy",
    topics: ["competitive arrays", "non-competitive arrays", "DAT/CEL", "RMA", "Infinium I/II", "CV", "normalization"],
    mustSay: "For each platform, explain sample/chip logic, output, bias and why normalization/QC matters.",
  },
  {
    id: "mock",
    title: "Written simulation",
    time: "45 min",
    weight: "Mandatory",
    accent: "emerald",
    route: "m1-samples-genes-ii",
    topics: ["4 random prompts", "10-12 lines", "speak first", "write second", "correct only three gaps"],
    mustSay: "Every answer needs when, why, design, assumptions/limitations and interpretation.",
  },
];

const TEST_TREE = [
  ["2 groups, paired, approximately normal", "paired t-test", "same subjects before/after or matched samples"],
  ["2 groups, paired, non-normal/outliers/small n", "Wilcoxon signed-rank", "rank-based paired alternative"],
  ["2 groups, independent, approximately normal", "unpaired t-test", "two unrelated biological groups"],
  ["2 groups, independent, unequal variances", "Welch correction", "adjusts degrees of freedom"],
  ["2 groups, independent, non-normal/outliers/small n", "Mann-Whitney U", "rank-based unpaired alternative"],
  [">2 groups, one factor, approximately normal", "one-way ANOVA", "global test on group means"],
  [">2 groups, non-normal/outliers/small n", "Kruskal-Wallis", "rank-based global test"],
  ["ANOVA/Kruskal-Wallis significant", "post-hoc test", "find which groups differ"],
  ["Many genes/probes/CpGs at once", "multiple-testing correction", "control false positives with FDR/BH or Bonferroni"],
];

const FLASHCARDS = [
  {
    id: "pvalue",
    group: "stats",
    front: "Difference between p-value and alpha.",
    back: "A p-value is the probability, assuming H0 is true, of observing a result at least as extreme as the one obtained. Alpha is the pre-set significance threshold, often 0.05. If p < alpha, reject H0; if p >= alpha, fail to reject H0. In omics, raw p-values need correction because many tests inflate false positives.",
  },
  {
    id: "errors",
    group: "stats",
    front: "Type I error, Type II error and power.",
    back: "Type I error is a false positive: rejecting H0 when H0 is true. Type II error is a false negative: failing to reject H0 when H0 is false. Alpha controls Type I error, beta relates to Type II error, and power is 1 - beta. Power depends on sample size, effect size, variability and alpha.",
  },
  {
    id: "parametric",
    group: "stats",
    front: "Parametric vs non-parametric tests.",
    back: "Parametric tests assume a distribution, usually approximate normality, and often compare means. They are powerful when assumptions hold. Non-parametric tests use ranks or medians, are more robust for small, skewed or outlier-heavy data, but may lose power. Always connect the choice to experimental design.",
  },
  {
    id: "wilcoxon",
    group: "stats",
    front: "When and why use Wilcoxon signed-rank?",
    back: "Use it for paired or matched measurements when normality is doubtful, sample size is small or outliers are present. A design could compare the same patients before and after treatment. H0 is no systematic paired difference. Interpret significance as evidence for a consistent within-subject change.",
  },
  {
    id: "mann",
    group: "stats",
    front: "When and why use Mann-Whitney U?",
    back: "Use it for two independent groups when a non-parametric test is needed. It compares rank distributions instead of assuming normal means. A biological design could compare expression between two unrelated patient groups. The answer must include independent groups, ranks, H0 and interpretation.",
  },
  {
    id: "anova",
    group: "stats",
    front: "One-way ANOVA: when, why and what after?",
    back: "Use one-way ANOVA for three or more independent groups with one factor when parametric assumptions are reasonable. It compares between-group to within-group variance using an F statistic. A significant result says at least one group differs, so post-hoc tests are needed to identify the specific contrast.",
  },
  {
    id: "kruskal",
    group: "stats",
    front: "Kruskal-Wallis: when and why?",
    back: "Use Kruskal-Wallis for three or more independent groups when non-normality, small n or outliers make ANOVA unsafe. It is rank-based and tests for global differences among groups. If significant, post-hoc comparisons are still needed because it does not identify which groups differ.",
  },
  {
    id: "fdr",
    group: "stats",
    front: "Multiple testing: Bonferroni vs Benjamini-Hochberg.",
    back: "In omics, thousands of simultaneous tests create many false positives. Bonferroni controls family-wise error rate but is very strict. Benjamini-Hochberg controls false discovery rate and is usually preferred for exploratory gene-expression or methylation analyses. Volcano plots should use adjusted p-values.",
  },
  {
    id: "pca",
    group: "visuals",
    front: "When and why apply PCA?",
    back: "Use PCA for high-dimensional omics data to reduce dimensionality while preserving major variance. PC1 captures the largest variance, PC2 the next orthogonal variance. It helps detect group separation, outliers, batch effects and dominant biological variability. PCA is exploratory, not clustering.",
  },
  {
    id: "kmeans",
    group: "visuals",
    front: "K-means clustering: algorithm and limitations.",
    back: "K-means is unsupervised. It partitions genes or samples into K clusters chosen before running the method. It starts with centroids, assigns points to the nearest centroid, recalculates centroids and iterates until convergence. It is sensitive to scaling, outliers, initialization and does not show hierarchy.",
  },
  {
    id: "hclust",
    group: "visuals",
    front: "Hierarchical clustering vs K-means.",
    back: "Hierarchical clustering builds a dendrogram from distances or similarities and does not require K at the start. K-means requires predefined K and partitions objects around centroids. Hierarchical clustering shows relationships among clusters; K-means is faster but less explanatory about hierarchy.",
  },
  {
    id: "heatmap",
    group: "visuals",
    front: "How to interpret a heatmap.",
    back: "First define rows, columns and the color scale. Dendrograms may cluster genes and samples. Check whether clusters match disease, treatment, time point, tissue or batch. Interpret outliers cautiously and remember that z-score, fold-change or raw intensity scaling changes what colors mean.",
  },
  {
    id: "volcano",
    group: "visuals",
    front: "How to explain a volcano plot.",
    back: "A volcano plot combines effect size and significance. The x-axis is log fold change and the y-axis is usually -log10 adjusted p-value. Significant up-regulated features appear upper right, down-regulated upper left. Thresholds define candidates, but biology needs interpretation.",
  },
  {
    id: "rma",
    group: "arrays",
    front: "RMA in Affymetrix arrays.",
    back: "RMA, Robust Multi-array Average, preprocesses Affymetrix one-color arrays. It includes background correction, quantile normalization and probe-set summarization by median polish. It converts probe-level CEL intensities into robust expression values for downstream PCA, clustering or differential expression.",
  },
  {
    id: "infinium",
    group: "arrays",
    front: "Infinium I vs Infinium II.",
    back: "Infinium I uses two probes and bead types per CpG, one methylated and one unmethylated, giving specificity but using more space. Infinium II uses one probe with single-base extension/color readout, allowing broader coverage. Their signal distributions differ, so probe-type normalization is important.",
  },
];

const MOCK_PROMPTS = [
  "What is a p-value and how does it relate to alpha?",
  "When would you use Wilcoxon signed-rank instead of a paired t-test?",
  "When would you use Mann-Whitney U instead of an unpaired t-test?",
  "Explain one-way ANOVA and why post-hoc tests are needed.",
  "Explain Kruskal-Wallis and when it is preferred over ANOVA.",
  "Why is multiple-testing correction necessary in omics?",
  "Explain PCA and how to interpret a scree plot.",
  "Compare K-means and hierarchical clustering.",
  "How do you interpret a heatmap in gene-expression analysis?",
  "Explain a volcano plot.",
  "What is RMA and where is it applied?",
  "Compare competitive and non-competitive microarrays.",
  "Explain DAT and CEL files in Affymetrix chips.",
  "Compare Infinium I and Infinium II.",
  "Explain MA plot and why normalization matters.",
];

const MISTAKES = [
  ["p >= alpha", "Say fail to reject H0, never accept H0."],
  ["K-means", "It is unsupervised, not supervised."],
  ["PCA", "It can show separation, but it does not assign clusters."],
  ["Wilcoxon", "Do not stop at non-parametric; mention paired design."],
  ["ANOVA/Kruskal", "A significant global test needs post-hoc interpretation."],
  ["Volcano", "Use adjusted p-values when many genes are tested."],
];

const GROUPS = [
  { id: "all", label: "All" },
  { id: "stats", label: "Statistics" },
  { id: "visuals", label: "Visuals" },
  { id: "arrays", label: "Arrays" },
];

function accentClasses(accent) {
  if (accent === "black") return "border-stone-900 bg-stone-950 text-white";
  if (accent === "amber") return "border-amber-200 bg-amber-50 text-amber-900";
  if (accent === "emerald") return "border-emerald-200 bg-emerald-50 text-emerald-900";
  return "border-red-200 bg-red-50 text-red-800";
}

function pickPrompt(index) {
  return MOCK_PROMPTS[index % MOCK_PROMPTS.length];
}

export default function DRDRapidReviewPage() {
  const [group, setGroup] = useState("all");
  const [activeCard, setActiveCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [promptIndex, setPromptIndex] = useState(3);
  const [checks, setChecks] = useState({});
  const [treeMode, setTreeMode] = useState("paired-nonnormal");

  const visibleCards = useMemo(
    () => FLASHCARDS.filter((card) => group === "all" || card.group === group),
    [group],
  );
  const currentCard = visibleCards[activeCard % visibleCards.length] || FLASHCARDS[0];
  const checkCount = Object.values(checks).filter(Boolean).length;

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 flex flex-col gap-3 rounded-[2rem] border border-stone-200 bg-white/90 p-3 shadow-sm md:flex-row md:items-center md:justify-between">
        <a href="#/" className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
          Previous: DRD dashboard
        </a>
        <div className="text-center text-xs font-black uppercase tracking-[0.28em] text-stone-500">Tomorrow rapid review</div>
        <a href="#/exam-radar" className="inline-flex items-center justify-center rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          Next: Exam radar
        </a>
      </nav>

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <h1 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">
              Rapid DRD exam sprint.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              A visual, active guide for tonight: statistics first, visual methods second, array/preprocessing survival pack third. Single-cell RNA-seq is intentionally skipped for this verification.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <HeroMetric label="Answer length" value="10-12" note="lines" />
              <HeroMetric label="Mock exam" value="4" note="prompts" />
              <HeroMetric label="Skip" value="scRNA" note="not for tomorrow" />
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Universal answer skeleton</div>
              <div className="mt-4 grid gap-3">
                {["Define the concept.", "Say when you use it.", "Connect it to the biological question.", "State the experimental design.", "Name assumptions or limitations.", "Interpret the result cautiously."].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{index + 1}</div>
                    <div className="text-sm font-black text-stone-800">{item}</div>
                  </div>
                ))}
              </div>
              <a href="#mock" className="mt-5 inline-flex w-full justify-center rounded-2xl bg-red-700 px-4 py-3 text-sm font-black text-white transition hover:bg-red-800">
                Start 4-question mock
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-4">
        {PRIORITIES.map((item) => (
          <article key={item.id} className={`rounded-[2rem] border p-5 ${accentClasses(item.accent)}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">{item.weight}</div>
                <h2 className="mt-2 text-2xl font-black leading-7">{item.title}</h2>
              </div>
              <div className="rounded-full bg-white/70 px-3 py-1 text-sm font-black text-stone-950">{item.time}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.topics.map((topic) => (
                <span key={topic} className="rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-black text-stone-800">{topic}</span>
              ))}
            </div>
            <p className="mt-4 text-sm font-bold leading-6 opacity-90">{item.mustSay}</p>
            <a href={drdLessonHref(item.route)} className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-stone-950 transition hover:bg-red-100">
              Open lesson
            </a>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <DecisionTree treeMode={treeMode} setTreeMode={setTreeMode} />
        <FlashcardPanel group={group} setGroup={setGroup} currentCard={currentCard} visibleCards={visibleCards} activeCard={activeCard} setActiveCard={setActiveCard} flipped={flipped} setFlipped={setFlipped} />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <VisualMap />
        <AnswerBuilder checks={checks} setChecks={setChecks} checkCount={checkCount} />
      </section>

      <section id="mock" className="mt-10 scroll-mt-28 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">45-minute finish</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Four-prompt written drill</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-7 text-stone-600">
              Speak each answer for 60-90 seconds, then write 10-12 lines. Correct only missing when/why/design/assumptions/interpretation.
            </p>
          </div>
          <button onClick={() => setPromptIndex((value) => value + 4)} className="rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white transition hover:bg-red-800">
            New set
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[0, 1, 2, 3].map((offset) => (
            <article key={offset} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Prompt {offset + 1}</div>
              <p className="mt-3 text-xl font-black leading-8 text-stone-950">{pickPrompt(promptIndex + offset)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Do not lose points here</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Exam traps</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MISTAKES.map(([label, fix]) => (
            <article key={label} className="rounded-[2rem] border border-red-200 bg-red-50 p-5">
              <div className="text-sm font-black uppercase tracking-[0.16em] text-red-700">{label}</div>
              <p className="mt-2 text-sm font-bold leading-6 text-stone-800">{fix}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function HeroMetric({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className="mt-1 text-3xl font-black text-stone-950">{value}</div>
      <div className="text-xs font-bold text-stone-500">{note}</div>
    </div>
  );
}

function DecisionTree({ treeMode, setTreeMode }) {
  const recommendation = {
    "paired-normal": ["paired t-test", "Two matched measurements, normal paired differences."],
    "paired-nonnormal": ["Wilcoxon signed-rank", "Paired design with non-normality, small sample or outliers."],
    "independent-normal": ["unpaired t-test", "Two independent groups with approximately normal data."],
    "independent-unequal": ["Welch correction", "Independent groups with unequal variances."],
    "independent-nonnormal": ["Mann-Whitney U", "Independent groups needing a rank-based test."],
    "multi-normal": ["one-way ANOVA", "Three or more independent groups, one factor, parametric assumptions."],
    "multi-nonnormal": ["Kruskal-Wallis", "Three or more independent groups, rank-based global test."],
    "many-tests": ["multiple-testing correction", "Thousands of simultaneous genes/probes/CpGs."],
  }[treeMode];

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Decision tree</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Choose the test by design.</h2>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {[
          ["paired-normal", "Paired + normal"],
          ["paired-nonnormal", "Paired + non-normal"],
          ["independent-normal", "Independent + normal"],
          ["independent-unequal", "Independent + unequal variance"],
          ["independent-nonnormal", "Independent + non-normal"],
          ["multi-normal", ">2 groups + normal"],
          ["multi-nonnormal", ">2 groups + non-normal"],
          ["many-tests", "Many genes/probes"],
        ].map(([id, label]) => (
          <button key={id} onClick={() => setTreeMode(id)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${treeMode === id ? "border-red-300 bg-red-50 text-red-700" : "border-stone-200 bg-stone-50 text-stone-700 hover:border-red-200"}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Use</div>
        <div className="mt-2 text-3xl font-black">{recommendation[0]}</div>
        <p className="mt-2 text-sm font-bold leading-6 text-stone-200">{recommendation[1]}</p>
      </div>
      <div className="mt-5 grid gap-2">
        {TEST_TREE.map(([situation, method, note]) => (
          <div key={situation} className="grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm md:grid-cols-[1.2fr_0.75fr_1fr]">
            <div className="font-bold text-stone-700">{situation}</div>
            <div className="font-black text-red-700">{method}</div>
            <div className="font-semibold text-stone-500">{note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FlashcardPanel({ group, setGroup, currentCard, visibleCards, activeCard, setActiveCard, flipped, setFlipped }) {
  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Active recall</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">15 flashcards that matter.</h2>
        </div>
        <div className="flex rounded-full border border-stone-200 bg-stone-50 p-1">
          {GROUPS.map((item) => (
            <button key={item.id} onClick={() => { setGroup(item.id); setActiveCard(0); setFlipped(false); }} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${group === item.id ? "bg-red-700 text-white" : "text-stone-600 hover:bg-white"}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <button onClick={() => setFlipped(!flipped)} className="mt-6 min-h-72 w-full rounded-[2rem] border border-stone-200 bg-stone-950 p-7 text-left text-white shadow-inner transition hover:bg-stone-900">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">{flipped ? "Back" : "Front"} · {activeCard + 1}/{visibleCards.length}</div>
        <div className="mt-5 text-3xl font-black leading-10">{flipped ? currentCard.back : currentCard.front}</div>
        <div className="mt-6 text-sm font-bold text-stone-300">Click to flip</div>
      </button>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => { setActiveCard((value) => Math.max(0, value - 1)); setFlipped(false); }} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
          Previous
        </button>
        <button onClick={() => { setActiveCard((value) => (value + 1) % visibleCards.length); setFlipped(false); }} className="rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          Next card
        </button>
      </div>
    </section>
  );
}

function VisualMap() {
  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Visual memory map</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Do not mix these up.</h2>
      <div className="mt-6 grid gap-4">
        {[
          ["PCA", "Variance axes", "PC1 largest variance → PC2 orthogonal variance → separation/outliers/batch"],
          ["K-means", "Centroids", "Choose K → assign nearest centroid → recalculate → converge"],
          ["Hierarchical", "Dendrogram", "distance metric + linkage method → nested relationships"],
          ["Heatmap", "Matrix + colors", "rows/columns + scale + dendrograms + metadata"],
          ["Volcano", "Effect + adjusted p", "logFC left/right + -log10 adj p upward"],
          ["MA plot", "Bias check", "M log ratio vs A average intensity; diagnose normalization need"],
        ].map(([title, shape, body]) => (
          <article key={title} className="grid gap-3 rounded-[2rem] border border-stone-200 bg-stone-50 p-4 sm:grid-cols-[130px_1fr]">
            <div className="flex min-h-24 items-center justify-center rounded-2xl bg-white p-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{title.slice(0, 2)}</div>
                <div className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-red-700">{shape}</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-stone-950">{title}</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-stone-600">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AnswerBuilder({ checks, setChecks, checkCount }) {
  const items = ["Define", "When", "Why", "Design", "Assumptions", "Interpretation"];
  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">10-12 line builder</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Self-check every answer.</h2>
      <div className="mt-5 h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
        <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${(checkCount / items.length) * 100}%` }} />
      </div>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <label key={item} className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${checks[item] ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50 hover:border-red-200"}`}>
            <span className="text-sm font-black text-stone-800">{item}</span>
            <input type="checkbox" checked={!!checks[item]} onChange={() => setChecks({ ...checks, [item]: !checks[item] })} className="h-5 w-5 accent-red-700" />
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Template</div>
        <p className="mt-2 text-sm font-bold leading-7 text-stone-200">
          This method is used when the biological question is to compare or explore ____. In this design, we have ____ groups/samples. I would apply ____ because ____. The null hypothesis is ____. The assumptions/limitations are ____. If significant, I interpret ____ cautiously considering variability, outliers and multiple testing.
        </p>
      </div>
    </section>
  );
}

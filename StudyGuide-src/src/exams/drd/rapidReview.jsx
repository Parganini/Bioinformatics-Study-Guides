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

const TREE_PATHS = {
  "paired-normal": ["2 groups", "paired / matched", "normal paired differences", "paired t-test"],
  "paired-nonnormal": ["2 groups", "paired / matched", "non-normal or outliers", "Wilcoxon signed-rank"],
  "independent-normal": ["2 groups", "independent", "normal + similar variance", "unpaired t-test"],
  "independent-unequal": ["2 groups", "independent", "unequal variance", "Welch correction"],
  "independent-nonnormal": ["2 groups", "independent", "non-normal or outliers", "Mann-Whitney U"],
  "multi-normal": [">2 groups", "one factor", "normal + similar variance", "one-way ANOVA"],
  "multi-nonnormal": [">2 groups", "one factor", "non-normal or outliers", "Kruskal-Wallis"],
  "many-tests": ["many genes/probes", "many p-values", "false-positive risk", "BH/FDR or Bonferroni"],
};

const MODEL_ANSWER_LINES = [
  "I would ask whether ACAT2 expression changes after chemotherapy in the same breast-cancer patients.",
  "The experimental design is paired because each patient is measured before and after treatment.",
  "If the sample size is small or the paired differences are not normally distributed, I would use Wilcoxon signed-rank.",
  "This test is non-parametric and compares the ranks of the paired differences.",
  "The null hypothesis is that the median paired difference is zero.",
  "It fits the biological question because we want a within-patient expression change, not a comparison of independent groups.",
  "Before testing, I would check data quality, normalization and possible outliers.",
  "If p < alpha, I reject H0 and conclude that treatment is associated with a systematic expression change.",
  "If p >= alpha, I fail to reject H0, but I do not prove that there is no effect.",
  "The result must be interpreted cautiously considering sample size, variability and biological context.",
  "If many genes are tested at the same time, p-values should be adjusted for multiple testing.",
  "The final interpretation should connect the statistical result to treatment response or gene-expression regulation.",
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
  const path = TREE_PATHS[treeMode];

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Decision tree</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Choose the test by design.</h2>
      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-50 p-4">
        <div className="grid gap-3 md:grid-cols-4">
          {path.map((step, index) => (
            <div key={`${step}-${index}`} className="relative rounded-2xl border border-red-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Step {index + 1}</div>
              <div className="mt-2 min-h-12 text-lg font-black leading-6 text-stone-950">{step}</div>
              {index < path.length - 1 && <div className="absolute -right-4 top-1/2 z-10 hidden h-1 w-8 -translate-y-1/2 rounded-full bg-red-700 md:block" />}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            ["paired-normal", "2 paired + normal"],
            ["paired-nonnormal", "2 paired + non-normal"],
            ["independent-normal", "2 independent + normal"],
            ["independent-unequal", "2 independent + unequal variance"],
            ["independent-nonnormal", "2 independent + non-normal"],
            ["multi-normal", ">2 groups + normal"],
            ["multi-nonnormal", ">2 groups + non-normal"],
            ["many-tests", "many genes/probes"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setTreeMode(id)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${treeMode === id ? "border-red-300 bg-red-50 text-red-700" : "border-stone-200 bg-white text-stone-700 hover:border-red-200"}`}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 rounded-[2rem] bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Use</div>
        <div className="mt-2 text-3xl font-black">{recommendation[0]}</div>
        <p className="mt-2 text-sm font-bold leading-6 text-stone-200">{recommendation[1]}</p>
      </div>
      <details className="mt-5 rounded-[2rem] border border-stone-200 bg-white p-4">
        <summary className="cursor-pointer text-sm font-black text-stone-900">Open full test map</summary>
        <div className="mt-4 grid gap-2">
        {TEST_TREE.map(([situation, method, note]) => (
          <div key={situation} className="grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm md:grid-cols-[1.2fr_0.75fr_1fr]">
            <div className="font-bold text-stone-700">{situation}</div>
            <div className="font-black text-red-700">{method}</div>
            <div className="font-semibold text-stone-500">{note}</div>
          </div>
        ))}
        </div>
      </details>
    </section>
  );
}

function FlashcardPanel({ group, setGroup, currentCard, visibleCards, activeCard, setActiveCard, flipped, setFlipped }) {
  const [draft, setDraft] = useState("");
  const [score, setScore] = useState({ knew: 0, review: 0 });
  const nextCard = (delta = 1) => {
    setActiveCard((value) => (value + delta + visibleCards.length) % visibleCards.length);
    setFlipped(false);
    setDraft("");
  };

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Active recall</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">15 flashcards that matter.</h2>
        </div>
        <div className="flex rounded-full border border-stone-200 bg-stone-50 p-1">
          {GROUPS.map((item) => (
            <button key={item.id} onClick={() => { setGroup(item.id); setActiveCard(0); setFlipped(false); setDraft(""); }} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${group === item.id ? "bg-red-700 text-white" : "text-stone-600 hover:bg-white"}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">Card {activeCard + 1}/{visibleCards.length}</div>
          <div className="flex gap-2 text-xs font-black">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100">knew {score.knew}</span>
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-100">review {score.review}</span>
          </div>
        </div>
        <div className="mt-5 text-3xl font-black leading-10">{currentCard.front}</div>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Write the answer from memory before revealing..."
          className="mt-5 min-h-32 w-full resize-y rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold leading-6 text-white outline-none placeholder:text-stone-400 focus:border-red-200"
        />
        {flipped ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-stone-950">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Model answer</div>
            <p className="mt-2 text-sm font-bold leading-7">{currentCard.back}</p>
          </div>
        ) : (
          <button onClick={() => setFlipped(true)} className="mt-4 w-full rounded-2xl bg-red-700 px-4 py-3 text-sm font-black text-white transition hover:bg-red-800">
            Reveal answer
          </button>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => nextCard(-1)} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:border-red-200 hover:text-red-700">
          Previous
        </button>
        <button onClick={() => { setScore((value) => ({ ...value, review: value.review + 1 })); nextCard(); }} className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-700 transition hover:bg-red-100">
          Need review
        </button>
        <button onClick={() => { setScore((value) => ({ ...value, knew: value.knew + 1 })); nextCard(); }} className="rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          I knew it
        </button>
        <button onClick={() => nextCard()} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:bg-red-800">
          Next card
        </button>
      </div>
    </section>
  );
}

function VisualMap() {
  const plots = [
    ["PCA", "Variance axes", "PC1 largest variance; PC2 orthogonal variance; look for separation, outliers and batch.", "pca"],
    ["K-means", "Centroids", "Choose K first; assign nearest centroid; recalculate until convergence.", "kmeans"],
    ["Hierarchical", "Dendrogram", "Distance metric plus linkage method creates nested relationships.", "hclust"],
    ["Heatmap", "Matrix + colors", "Rows/columns, color scale, dendrograms and metadata must be read together.", "heatmap"],
    ["Volcano", "Effect + adjusted p", "logFC left/right; -log10 adjusted p-value upward; thresholds define candidates.", "volcano"],
    ["MA plot", "Bias check", "M is log ratio; A is average intensity; curved cloud suggests normalization issue.", "ma"],
  ];

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Visual memory map</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Do not mix these up.</h2>
      <div className="mt-6 grid gap-4">
        {plots.map(([title, shape, body, type]) => (
          <article key={title} className="grid gap-4 rounded-[2rem] border border-stone-200 bg-stone-50 p-4 lg:grid-cols-[260px_1fr]">
            <div className="rounded-2xl border border-stone-200 bg-white p-3">
              <PlotDiagram type={type} />
            </div>
            <div>
              <h3 className="text-xl font-black text-stone-950">{title}</h3>
              <div className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-red-700">{shape}</div>
              <p className="mt-3 text-sm font-bold leading-6 text-stone-600">{body}</p>
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-black text-red-800">
                Exam move: define the axes/parts before interpreting biology.
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlotDiagram({ type }) {
  if (type === "pca") {
    return (
      <svg viewBox="0 0 240 150" className="h-40 w-full">
        <line x1="34" y1="122" x2="214" y2="122" stroke="#111827" strokeWidth="3" />
        <line x1="34" y1="122" x2="34" y2="20" stroke="#111827" strokeWidth="3" />
        <text x="176" y="143" fontSize="12" fontWeight="800" fill="#991b1b">PC1 variance</text>
        <text x="2" y="28" fontSize="12" fontWeight="800" fill="#991b1b">PC2</text>
        {[[72, 88], [84, 75], [96, 94], [108, 82]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#dc2626" />)}
        {[[152, 58], [166, 50], [178, 66], [190, 54]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#0f766e" />)}
        <circle cx="126" cy="35" r="6" fill="#f59e0b" />
        <text x="132" y="38" fontSize="11" fontWeight="800" fill="#111827">outlier?</text>
      </svg>
    );
  }
  if (type === "kmeans") {
    return (
      <svg viewBox="0 0 240 150" className="h-40 w-full">
        {[[62, 50], [78, 64], [54, 76], [86, 88], [156, 48], [174, 62], [162, 82], [190, 74]].map(([x, y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={i < 4 ? "#dc2626" : "#0f766e"} />)}
        <path d="M70 70 L84 70 M77 63 L77 77" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
        <path d="M168 66 L182 66 M175 59 L175 73" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 116 C84 98 94 102 120 116 C150 132 180 126 210 108" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6 6" />
        <text x="38" y="136" fontSize="12" fontWeight="800" fill="#991b1b">K=2, nearest centroid</text>
      </svg>
    );
  }
  if (type === "hclust") {
    return (
      <svg viewBox="0 0 240 150" className="h-40 w-full">
        {["S1", "S2", "S3", "S4", "S5"].map((label, i) => <text key={label} x={38 + i * 38} y="138" fontSize="11" fontWeight="800" fill="#111827">{label}</text>)}
        <path d="M45 122 V92 H83 V122" fill="none" stroke="#dc2626" strokeWidth="4" />
        <path d="M121 122 V82 H159 V122" fill="none" stroke="#0f766e" strokeWidth="4" />
        <path d="M64 92 V55 H140 V82" fill="none" stroke="#111827" strokeWidth="4" />
        <path d="M140 55 H197 V122" fill="none" stroke="#111827" strokeWidth="4" />
        <text x="52" y="28" fontSize="12" fontWeight="800" fill="#991b1b">height = distance / dissimilarity</text>
      </svg>
    );
  }
  if (type === "heatmap") {
    const colors = ["#dc2626", "#fecaca", "#f8fafc", "#bfdbfe", "#2563eb"];
    return (
      <svg viewBox="0 0 240 150" className="h-40 w-full">
        {[0, 1, 2, 3, 4].map((row) => [0, 1, 2, 3, 4, 5].map((col) => <rect key={`${row}-${col}`} x={52 + col * 20} y={30 + row * 18} width="18" height="16" rx="2" fill={colors[(row + col) % colors.length]} />))}
        <path d="M52 22 V10 H92 V22 M92 10 H132 V22 M132 10 H172 V22" fill="none" stroke="#111827" strokeWidth="3" />
        <path d="M38 30 H24 V66 H38 M24 66 V102 H38" fill="none" stroke="#111827" strokeWidth="3" />
        <text x="48" y="140" fontSize="11" fontWeight="800" fill="#991b1b">genes x samples + color scale</text>
        <rect x="186" y="34" width="12" height="70" fill="url(#heat)" />
        <defs>
          <linearGradient id="heat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (type === "volcano") {
    return (
      <svg viewBox="0 0 240 150" className="h-40 w-full">
        <line x1="38" y1="122" x2="210" y2="122" stroke="#111827" strokeWidth="3" />
        <line x1="124" y1="122" x2="124" y2="22" stroke="#111827" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="38" y1="88" x2="210" y2="88" stroke="#991b1b" strokeWidth="2" strokeDasharray="5 5" />
        {[[62, 62], [76, 48], [92, 78], [156, 70], [172, 46], [190, 58], [112, 104], [128, 110], [140, 100]].map(([x, y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={i < 3 ? "#2563eb" : i < 6 ? "#dc2626" : "#a8a29e"} />)}
        <text x="46" y="143" fontSize="11" fontWeight="800" fill="#991b1b">logFC</text>
        <text x="10" y="28" fontSize="11" fontWeight="800" fill="#991b1b">-log10 adj p</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 240 150" className="h-40 w-full">
      <line x1="38" y1="122" x2="210" y2="122" stroke="#111827" strokeWidth="3" />
      <line x1="38" y1="122" x2="38" y2="22" stroke="#111827" strokeWidth="3" />
      <path d="M46 84 C72 52 100 50 128 72 C158 98 184 92 204 70" fill="none" stroke="#dc2626" strokeWidth="4" />
      <line x1="42" y1="76" x2="208" y2="76" stroke="#111827" strokeWidth="2" strokeDasharray="5 5" />
      {[[62, 80], [86, 62], [112, 68], [138, 86], [166, 96], [190, 74]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#0f766e" />)}
      <text x="170" y="142" fontSize="11" fontWeight="800" fill="#991b1b">A intensity</text>
      <text x="10" y="28" fontSize="11" fontWeight="800" fill="#991b1b">M ratio</text>
    </svg>
  );
}

function AnswerBuilder({ checks, setChecks, checkCount }) {
  const items = ["Define", "When", "Why", "Design", "Assumptions", "Interpretation"];
  const [lines, setLines] = useState(Array.from({ length: 12 }, () => ""));
  const [showModel, setShowModel] = useState(false);
  const filledLines = lines.filter((line) => line.trim()).length;
  const updateLine = (index, value) => {
    const next = [...lines];
    next[index] = value;
    setLines(next);
  };

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">10-12 line builder</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Write the answer, then reveal.</h2>
      <div className="mt-5 rounded-[2rem] border border-red-200 bg-red-50 p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Biological question</div>
        <p className="mt-2 text-lg font-black leading-7 text-stone-950">
          Does chemotherapy change ACAT2 expression in the same breast-cancer patients before versus after treatment?
        </p>
        <p className="mt-2 text-sm font-bold leading-6 text-stone-700">
          Assume small sample size and non-normal paired differences. Choose the test and write the answer as if it were tomorrow's exam.
        </p>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
        <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${(checkCount / items.length) * 100}%` }} />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm font-black text-stone-700">{filledLines}/12 lines filled</div>
        <button onClick={() => setLines(Array.from({ length: 12 }, () => ""))} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-black text-stone-700 transition hover:border-red-200 hover:text-red-700">
          Clear lines
        </button>
      </div>
      <div className="mt-5 grid gap-2">
        {lines.map((line, index) => (
          <label key={index} className="grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-3 sm:grid-cols-[70px_1fr] sm:items-center">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-red-700">Line {index + 1}</span>
            <input
              value={line}
              onChange={(event) => updateLine(index, event.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100"
              placeholder={index === 0 ? "Start with the biological question and method..." : ""}
            />
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Checklist</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <label key={item} className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${checks[item] ? "border-red-200 bg-red-50" : "border-stone-200 bg-white hover:border-red-200"}`}>
              <span className="text-sm font-black text-stone-800">{item}</span>
              <input type="checkbox" checked={!!checks[item]} onChange={() => setChecks({ ...checks, [item]: !checks[item] })} className="h-5 w-5 accent-red-700" />
            </label>
          ))}
        </div>
      </div>
      <div className="mt-5 rounded-[2rem] bg-stone-950 p-5 text-white">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Template</div>
        <p className="mt-2 text-sm font-bold leading-7 text-stone-200">
          This method is used when the biological question is to compare or explore ____. In this design, we have ____ groups/samples. I would apply ____ because ____. The null hypothesis is ____. The assumptions/limitations are ____. If significant, I interpret ____ cautiously considering variability, outliers and multiple testing.
        </p>
      </div>
      <button onClick={() => setShowModel(!showModel)} className="mt-5 w-full rounded-2xl bg-red-700 px-4 py-3 text-sm font-black text-white transition hover:bg-red-800">
        {showModel ? "Hide model answer" : "Reveal model answer"}
      </button>
      {showModel && (
        <div className="mt-5 rounded-[2rem] border border-red-200 bg-red-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Model 12-line answer</div>
          <div className="mt-4 grid gap-2">
            {MODEL_ANSWER_LINES.map((line, index) => (
              <div key={line} className="grid gap-2 rounded-2xl border border-red-100 bg-white p-3 text-sm font-bold leading-6 text-stone-800 sm:grid-cols-[70px_1fr]">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-red-700">Line {index + 1}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

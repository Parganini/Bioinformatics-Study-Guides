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
};

const TREE_ACTIVE_IDS = {
  "paired-normal": ["root", "two", "paired", "paired-normal", "paired-ttest"],
  "paired-nonnormal": ["root", "two", "paired", "paired-nonnormal", "wilcoxon"],
  "independent-normal": ["root", "two", "independent", "independent-normal", "unpaired-ttest"],
  "independent-unequal": ["root", "two", "independent", "independent-unequal", "welch"],
  "independent-nonnormal": ["root", "two", "independent", "independent-nonnormal", "mann-whitney"],
  "multi-normal": ["root", "multi", "multi-normal", "anova"],
  "multi-nonnormal": ["root", "multi", "multi-nonnormal", "kruskal"],
};

const BIO_QUESTIONS = [
  {
    id: "wilcoxon-acat2",
    title: "Paired non-parametric design",
    question: "Does chemotherapy change ACAT2 expression in the same breast-cancer patients before versus after treatment?",
    context: "Small sample size and non-normal paired differences.",
    fields: {
      define: "Wilcoxon signed-rank is a non-parametric test for paired or matched measurements.",
      when: "Use it when the same biological units are measured twice and normality of paired differences is doubtful.",
      design: "The design compares ACAT2 expression before and after chemotherapy in the same patients.",
      why: "It fits because the biological question asks for a within-patient treatment-associated change.",
      h0: "H0 states that the median paired difference in ACAT2 expression is zero.",
      assumptions: "It does not require normality, but pairs must be meaningful and measurements should be independent across patients.",
      statistic: "The test ranks absolute paired differences and evaluates whether signed ranks are systematically positive or negative.",
      decision: "If p < alpha, reject H0; if p >= alpha, fail to reject H0.",
      multiplicity: "If many genes are tested, adjust p-values to control false positives.",
      interpretation: "A significant result supports a systematic expression change after chemotherapy.",
      limitation: "Interpret cautiously because small n, outliers and technical variability can affect power.",
      biology: "The final answer should connect the statistical result to treatment response or regulation of ACAT2 expression.",
    },
  },
  {
    id: "mann-mt1b",
    title: "Independent non-parametric design",
    question: "Is MT1B expression different between myeloid and lymphoblastic leukemia patients?",
    context: "Two independent patient groups with small sample size and possible outliers.",
    fields: {
      define: "Mann-Whitney U, or Wilcoxon rank-sum, is a non-parametric test for two independent groups.",
      when: "Use it when two unpaired groups are compared and normality or equal-variance assumptions are unsafe.",
      design: "The design compares MT1B expression between unrelated myeloid and lymphoblastic leukemia patients.",
      why: "It fits because the biological question compares two independent disease groups.",
      h0: "H0 states that the two groups come from the same distribution or have no systematic rank shift.",
      assumptions: "Observations should be independent and the measured expression should be comparable across groups.",
      statistic: "The test ranks all observations and asks whether one group tends to have higher ranks.",
      decision: "If p < alpha, reject H0; otherwise fail to reject H0.",
      multiplicity: "For many genes, use adjusted p-values, often with Benjamini-Hochberg FDR.",
      interpretation: "A significant result suggests MT1B expression differs between leukemia groups.",
      limitation: "It does not directly estimate a mean difference and can lose magnitude information.",
      biology: "Interpret the expression difference in relation to leukemia subtype biology and sample variability.",
    },
  },
  {
    id: "anova-dose",
    title: "Three-group parametric design",
    question: "Does a drug dose change expression of gene X across control, low-dose and high-dose cell cultures?",
    context: "Three independent groups, approximately normal expression values and similar variance.",
    fields: {
      define: "One-way ANOVA is a parametric global test comparing means across three or more independent groups.",
      when: "Use it when one factor defines more than two groups and assumptions are reasonably met.",
      design: "The design has independent cell cultures assigned to control, low-dose and high-dose conditions.",
      why: "It fits because the biological question asks whether dose level changes mean gene expression.",
      h0: "H0 states that all group means are equal.",
      assumptions: "Observations should be independent, approximately normal within groups and have similar variance.",
      statistic: "The F statistic compares between-group variance with within-group variance.",
      decision: "If p < alpha, reject the global H0 and conclude at least one group differs.",
      multiplicity: "After a significant ANOVA, post-hoc tests such as Tukey identify which pairs differ.",
      interpretation: "A significant result supports an expression response to dose, but not the exact contrast without post-hoc analysis.",
      limitation: "ANOVA is sensitive to outliers, unequal variances and non-normal residuals.",
      biology: "Connect the significant contrast to dose-response regulation of gene X.",
    },
  },
  {
    id: "rma-affy",
    title: "Affymetrix preprocessing",
    question: "How would you preprocess Affymetrix GeneChip data before comparing expression between disease and control samples?",
    context: "One-color non-competitive arrays, CEL files and probe-level intensities.",
    fields: {
      define: "RMA means Robust Multi-array Average and is a preprocessing method for Affymetrix one-color arrays.",
      when: "Use it after scanning and CEL-file extraction, before PCA, clustering or differential expression.",
      design: "The design has one sample per array, so arrays must be made comparable across samples.",
      why: "It fits because Affymetrix probe intensities contain background, probe-affinity and array-to-array technical effects.",
      h0: "There is no hypothesis test inside RMA; it prepares expression estimates for downstream tests.",
      assumptions: "The method assumes arrays can be normalized together and probe sets summarize transcript-level signal.",
      statistic: "RMA performs background correction, quantile normalization and median-polish summarization.",
      decision: "After preprocessing, use QC plots and downstream statistics to decide whether samples or genes differ.",
      multiplicity: "Differential expression after RMA still requires multiple-testing correction across genes.",
      interpretation: "The output is a robust expression matrix suitable for biological comparison.",
      limitation: "RMA is platform-specific and preprocessing choices can affect downstream interpretation.",
      biology: "The biological conclusion comes only after connecting normalized expression to disease-control differences.",
    },
  },
];

const BUILDER_FIELDS = [
  ["define", "Define", "What is the concept/method?"],
  ["when", "When", "When do you use it?"],
  ["design", "Experimental design", "Groups, samples, paired/unpaired, platform."],
  ["why", "Why this fits", "Connect method to the biological question."],
  ["h0", "H0", "State the null hypothesis or say if not a test."],
  ["assumptions", "Assumptions", "Normality, independence, variance, pairedness, QC."],
  ["statistic", "What it does", "Ranks, centroids, F statistic, normalization steps."],
  ["decision", "Decision rule", "p vs alpha, adjusted p, post-hoc, threshold."],
  ["multiplicity", "Multiple testing", "Mention FDR/BH/Bonferroni when many features are tested."],
  ["interpretation", "Interpretation", "What a significant result means."],
  ["limitation", "Limitation", "Caution: sample size, outliers, assumptions, platform bias."],
  ["biology", "Biological meaning", "Tie back to disease, treatment, pathway, phenotype."],
];

const BUILDER_CHECKS = [
  "Defines the method/concept",
  "States when to use it",
  "Names paired/unpaired or group structure",
  "Includes a biological question",
  "States H0 or explains why there is no H0",
  "Mentions assumptions",
  "Mentions limitations",
  "Gives decision rule",
  "Uses fail to reject H0, not accept H0",
  "Adds post-hoc if global test is significant",
  "Adds multiple-testing correction when many features are tested",
  "Ends with biological interpretation",
];

const MOCK_BANK = [
  {
    prompt: "What is RMA and when and where do we apply it?",
    answer: "RMA, Robust Multi-array Average, is used for Affymetrix one-color GeneChip arrays after scanning and CEL-file extraction. It preprocesses probe-level intensities before downstream PCA, clustering or differential expression. The method includes background correction, quantile normalization and summarization of probes into probe-set expression values by median polish. It reduces technical noise, probe-affinity effects and array-to-array differences. The output is a comparable expression matrix, but biological interpretation still requires QC, statistical testing and multiple-testing correction.",
  },
  {
    prompt: "Explain PCA statistics and what we use it for.",
    answer: "PCA transforms correlated high-dimensional variables into orthogonal principal components. PC1 captures the largest variance, PC2 the next largest variance orthogonal to PC1, and a scree plot shows variance explained by each component. In omics, PCA summarizes thousands of genes or probes to visualize samples. It helps detect group separation, outliers, batch effects and dominant biological variability. It is exploratory and does not assign clusters, so interpretation must be connected to design and metadata.",
  },
  {
    prompt: "K-means clustering: when and why do we use it?",
    answer: "K-means is an unsupervised clustering method used to group genes or samples with similar profiles when K can be chosen in advance. It starts with K centroids, assigns each point to the nearest centroid, recalculates centroids and iterates until convergence. It is useful for exploratory grouping, disease subtypes, time-course profiles or co-regulated genes. It is fast, but sensitive to scaling, outliers and initialization, and it does not show hierarchical relationships.",
  },
  {
    prompt: "Multiple testing problems and how to resolve them.",
    answer: "In omics, thousands of genes, probes or CpGs are tested at once. With alpha = 0.05, many false positives are expected by chance even if no real effect exists. This is the multiple-testing problem. Bonferroni controls family-wise error rate but is very strict and can reduce power. Benjamini-Hochberg controls false discovery rate and is often preferred in exploratory gene-expression or methylation studies. Volcano plots and DEG/DMP lists should usually use adjusted p-values.",
  },
  {
    prompt: "Competitive and non-competitive arrays.",
    answer: "Competitive arrays hybridize two labeled samples on the same slide, often control and treated samples with different dyes, and measure relative expression as a ratio. They allow direct comparison but are sensitive to dye bias and intra-array effects. Non-competitive arrays, such as Affymetrix GeneChip, place one sample on each array and measure one-color intensity. They scale better to many samples but require inter-array normalization such as quantile normalization or RMA. The platform determines QC, normalization and interpretation.",
  },
  {
    prompt: "Types of linkage methods for hierarchical clustering.",
    answer: "Linkage defines how distance between clusters is calculated during hierarchical clustering. Single linkage uses the closest pair of points and can create chained clusters. Complete linkage uses the farthest pair and tends to produce compact clusters. Average linkage uses the average pairwise distance and is often balanced for expression heatmaps. The linkage method affects dendrogram shape and biological interpretation, so it should be reported with the distance metric.",
  },
];

const GRAPH_PARTS = {
  pca: [
    ["1", "PC1 axis", "The horizontal axis is the component explaining the largest amount of variance. Start by saying how much variance PC1 explains when the plot gives a percentage."],
    ["2", "PC2 axis", "The vertical axis is orthogonal to PC1 and captures the next largest independent variance source."],
    ["3", "Group separation", "Separated clouds can suggest biological condition, treatment, tissue, disease subtype or batch effect. You must connect separation to metadata."],
    ["4", "Outlier", "An isolated point should not be deleted automatically. Ask whether it is technical, biological or metadata-related."],
  ],
  kmeans: [
    ["1", "K chosen first", "K-means does not discover the number of clusters. K must be selected using biology, previous analyses or exploratory structure."],
    ["2", "Centroids", "Each cluster is represented by a centroid, the current mean position/profile of points assigned to that cluster."],
    ["3", "Assignment", "Each point is assigned to the closest centroid, often using Euclidean distance."],
    ["4", "Limitation", "Mention sensitivity to scaling, outliers and initialization, and that K-means does not show hierarchy."],
  ],
  hclust: [
    ["1", "Distance metric", "Pearson, Spearman and Euclidean measure different notions of similarity; the choice changes the dendrogram."],
    ["2", "Linkage", "Single, complete and average linkage define how distances between clusters are computed."],
    ["3", "Height", "The height of a merge represents dissimilarity. Lower merges indicate more similar samples/genes."],
    ["4", "Dendrogram", "The dendrogram shows nested relationships, unlike K-means, which partitions into a fixed K."],
  ],
  heatmap: [
    ["1", "Rows and columns", "Always define whether rows are genes/probes and columns are samples, or the reverse."],
    ["2", "Color scale", "Read the legend before interpreting. Red/blue can mean expression, z-score, fold change or another scaling."],
    ["3", "Dendrograms", "One dendrogram can cluster genes, another can cluster samples. Interpret both with metadata."],
    ["4", "Metadata/outliers", "Ask whether clusters correspond to phenotype, treatment, tissue, time point, batch or outlier samples."],
  ],
  volcano: [
    ["1", "x-axis", "The x-axis is log fold change: left means down-regulated, right means up-regulated."],
    ["2", "y-axis", "The y-axis is usually -log10 adjusted p-value. Higher points are more statistically significant."],
    ["3", "Thresholds", "Horizontal/vertical cutoffs define candidate significant features. In omics this should use adjusted p-values."],
    ["4", "Biology", "A volcano plot identifies candidates; it is not a biological conclusion until interpreted with gene function/pathways."],
  ],
  ma: [
    ["1", "M axis", "M is the log ratio, often treated/control or red/green in two-color arrays."],
    ["2", "A axis", "A is average intensity. It helps diagnose whether bias depends on intensity."],
    ["3", "Centered cloud", "After normalization, the cloud should be roughly centered around M = 0 across intensities."],
    ["4", "Curvature", "A curved trend suggests intensity-dependent bias and need for normalization."],
  ],
};

const COVERAGE_GAPS = [
  {
    title: "Coefficient of variation",
    why: "Domande asks it directly. It is a classic variability/QC answer.",
    say: "CV = SD / mean, often percent. Use it to compare technical variability across probes, arrays or conditions.",
  },
  {
    title: "Bootstrap",
    why: "Appears in the question bank and is easy to confuse with permutation/randomization.",
    say: "Resample with replacement many times to estimate stability, confidence intervals or robustness of a statistic.",
  },
  {
    title: "DAT vs CEL",
    why: "Short Affymetrix platform question that can score quickly.",
    say: "DAT is the raw scanned image; CEL stores extracted probe-level intensities used for RMA/downstream analysis.",
  },
  {
    title: "Distance metrics",
    why: "The June 9 transcript emphasized Pearson, Spearman and Euclidean in clustering.",
    say: "Pearson = linear profile shape, Spearman = rank/monotonic robust trend, Euclidean = geometric magnitude/scale.",
  },
  {
    title: "GO / KEGG / DAVID",
    why: "This was in the interpretation block from the transcript audit.",
    say: "A gene list is not a conclusion; enrichment tools connect genes to biological process, function, components and pathways.",
  },
  {
    title: "Infinium I vs II",
    why: "Already in flashcards, but worth a final platform comparison pass.",
    say: "Infinium I uses two probes/bead types; Infinium II uses one probe with single-base extension. Normalize probe-type bias.",
  },
];

function accentClasses(accent) {
  if (accent === "black") return "border-stone-900 bg-stone-950 text-white";
  if (accent === "amber") return "border-amber-200 bg-amber-50 text-amber-900";
  if (accent === "emerald") return "border-emerald-200 bg-emerald-50 text-emerald-900";
  return "border-red-200 bg-red-50 text-red-800";
}

function pickMock(index) {
  return MOCK_BANK[index % MOCK_BANK.length];
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
        <div className="grid gap-0">
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
          <div className="border-t border-stone-200 bg-white/70 p-5">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Universal answer skeleton</div>
              <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="mt-8 grid gap-4">
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

      <section className="mt-10 grid gap-6">
        <DecisionTree treeMode={treeMode} setTreeMode={setTreeMode} />
        <FlashcardPanel group={group} setGroup={setGroup} currentCard={currentCard} visibleCards={visibleCards} activeCard={activeCard} setActiveCard={setActiveCard} flipped={flipped} setFlipped={setFlipped} />
      </section>

      <section className="mt-10 grid gap-6">
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
        <div className="mt-6 grid gap-5">
          {[0, 1, 2, 3].map((offset) => (
            <WrittenPrompt key={offset} number={offset + 1} item={pickMock(promptIndex + offset)} />
          ))}
        </div>
      </section>

      <CoverageGaps />

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

function WrittenPrompt({ number, item }) {
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Prompt {number}</div>
          <p className="mt-3 text-xl font-black leading-8 text-stone-950">{item.prompt}</p>
        </div>
        <button onClick={() => setShowAnswer(!showAnswer)} className="shrink-0 rounded-full bg-stone-950 px-4 py-2 text-xs font-black text-white transition hover:bg-red-800">
          {showAnswer ? "Hide answer" : "Reveal answer"}
        </button>
      </div>
      <textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Write 10-12 lines here before revealing the answer..."
        className="mt-5 min-h-44 w-full resize-y rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100"
      />
      <div className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-stone-500">
        Approx. {answer.split(/\s+/).filter(Boolean).length} words
      </div>
      {showAnswer && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Model answer</div>
          <p className="mt-2 text-sm font-bold leading-7 text-stone-800">{item.answer}</p>
        </div>
      )}
    </article>
  );
}

function CoverageGaps() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-amber-200 bg-amber-50/80 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-800">Last-minute coverage check</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Question types still worth one pass.</h2>
      <p className="mt-2 max-w-3xl text-sm font-bold leading-7 text-stone-700">
        The main page covers the big core. These are smaller Domande/transcript-style prompts that can still appear as direct written questions.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {COVERAGE_GAPS.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-amber-200 bg-white p-5">
            <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-stone-600">{item.why}</p>
            <div className="mt-4 rounded-2xl bg-stone-950 p-4 text-sm font-bold leading-6 text-white">
              {item.say}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DecisionTree({ treeMode, setTreeMode }) {
  const [treeLayout, setTreeLayout] = useState("horizontal");
  const recommendation = {
    "paired-normal": ["paired t-test", "Two matched measurements, normal paired differences."],
    "paired-nonnormal": ["Wilcoxon signed-rank", "Paired design with non-normality, small sample or outliers."],
    "independent-normal": ["unpaired t-test", "Two independent groups with approximately normal data."],
    "independent-unequal": ["Welch correction", "Independent groups with unequal variances."],
    "independent-nonnormal": ["Mann-Whitney U", "Independent groups needing a rank-based test."],
    "multi-normal": ["one-way ANOVA", "Three or more independent groups, one factor, parametric assumptions."],
    "multi-nonnormal": ["Kruskal-Wallis", "Three or more independent groups, rank-based global test."],
  }[treeMode];
  const path = TREE_PATHS[treeMode];
  const activeIds = TREE_ACTIVE_IDS[treeMode] || [];

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Decision tree</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Choose the test by design.</h2>
        </div>
        <div className="flex rounded-full border border-stone-200 bg-stone-50 p-1">
          {[
            ["horizontal", "Horizontal"],
            ["vertical", "Vertical"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setTreeLayout(id)} className={`rounded-full px-4 py-2 text-xs font-black transition ${treeLayout === id ? "bg-red-700 text-white" : "text-stone-600 hover:bg-white"}`}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-50 p-4">
        <div className="overflow-x-auto pb-3">
          {treeLayout === "horizontal" ? <HorizontalStatTreeSvg activeIds={activeIds} /> : <StatTreeSvg activeIds={activeIds} />}
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
        <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-red-200">{path.join(" -> ")}</p>
      </div>
      <div className="mt-5 rounded-[2rem] border border-amber-200 bg-amber-50 p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">After choosing the test</div>
        <h3 className="mt-2 text-2xl font-black text-stone-950">Many genes/probes/CpGs means multiple-testing correction.</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black text-red-700">Problem:</span> thousands of p-values inflate false positives.</div>
          <div className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black text-red-700">Strict:</span> Bonferroni controls FWER but can be too conservative.</div>
          <div className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700"><span className="font-black text-red-700">Common:</span> Benjamini-Hochberg controls FDR for discovery.</div>
        </div>
      </div>
      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-white p-4">
        <div className="text-sm font-black text-stone-900">Compact map</div>
        <div className="mt-4 grid gap-2">
        {TEST_TREE.map(([situation, method, note]) => (
          <div key={situation} className="grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm md:grid-cols-[1.2fr_0.75fr_1fr]">
            <div className="font-bold text-stone-700">{situation}</div>
            <div className="font-black text-red-700">{method}</div>
            <div className="font-semibold text-stone-500">{note}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

function StatTreeSvg({ activeIds }) {
  const nodes = [
    ["root", 520, 30, 260, 46, "Experimental design"],
    ["two", 280, 115, 170, 44, "2 groups"],
    ["multi", 760, 115, 170, 44, ">2 groups"],
    ["paired", 120, 205, 190, 44, "Paired / matched"],
    ["independent", 420, 205, 210, 44, "Independent"],
    ["multi-normal", 680, 205, 190, 44, "Normal + equal variance"],
    ["multi-nonnormal", 900, 205, 190, 44, "Non-normal / outliers"],
    ["paired-normal", 40, 295, 170, 44, "Normal differences"],
    ["paired-nonnormal", 230, 295, 210, 44, "Non-normal / small n"],
    ["independent-normal", 460, 295, 190, 44, "Normal + equal variance"],
    ["independent-unequal", 680, 295, 180, 44, "Unequal variance"],
    ["independent-nonnormal", 890, 295, 190, 44, "Non-normal / outliers"],
    ["paired-ttest", 40, 385, 170, 52, "paired t-test"],
    ["wilcoxon", 230, 385, 210, 52, "Wilcoxon signed-rank"],
    ["unpaired-ttest", 460, 385, 190, 52, "unpaired t-test"],
    ["welch", 680, 385, 180, 52, "Welch correction"],
    ["mann-whitney", 890, 385, 190, 52, "Mann-Whitney U"],
    ["anova", 680, 475, 190, 52, "one-way ANOVA"],
    ["kruskal", 900, 475, 190, 52, "Kruskal-Wallis"],
    ["posthoc", 790, 565, 220, 52, "If significant: post-hoc"],
  ];
  const edges = [
    ["root", "two"], ["root", "multi"],
    ["two", "paired"], ["two", "independent"],
    ["multi", "multi-normal"], ["multi", "multi-nonnormal"],
    ["paired", "paired-normal"], ["paired", "paired-nonnormal"],
    ["independent", "independent-normal"], ["independent", "independent-unequal"], ["independent", "independent-nonnormal"],
    ["paired-normal", "paired-ttest"], ["paired-nonnormal", "wilcoxon"],
    ["independent-normal", "unpaired-ttest"], ["independent-unequal", "welch"], ["independent-nonnormal", "mann-whitney"],
    ["multi-normal", "anova"], ["multi-nonnormal", "kruskal"],
    ["anova", "posthoc"], ["kruskal", "posthoc"],
  ];
  const byId = Object.fromEntries(nodes.map((node) => [node[0], node]));
  const activeEdge = (from, to) => activeIds.includes(from) && activeIds.includes(to);

  return (
    <svg viewBox="0 0 1120 650" className="min-w-[1120px] rounded-[2rem] border border-stone-200 bg-white">
      {edges.map(([from, to]) => {
        const a = byId[from];
        const b = byId[to];
        const x1 = a[1] + a[3] / 2;
        const y1 = a[2] + a[4];
        const x2 = b[1] + b[3] / 2;
        const y2 = b[2];
        const mid = (y1 + y2) / 2;
        return (
          <path
            key={`${from}-${to}`}
            d={`M ${x1} ${y1} V ${mid} H ${x2} V ${y2}`}
            fill="none"
            stroke={activeEdge(from, to) ? "#dc2626" : "#d6d3d1"}
            strokeWidth={activeEdge(from, to) ? "5" : "3"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
      {nodes.map(([id, x, y, w, h, label]) => <SvgTreeNode key={id} id={id} x={x} y={y} w={w} h={h} label={label} activeIds={activeIds} />)}
      <text x="34" y="625" fontSize="17" fontWeight="900" fill="#991b1b">{"Read it top to bottom: number of groups -> pairedness -> assumptions -> test -> post-hoc if global test."}</text>
    </svg>
  );
}

function HorizontalStatTreeSvg({ activeIds }) {
  const nodes = [
    ["root", 40, 255, 220, 54, "Experimental design"],
    ["two", 340, 150, 150, 48, "2 groups"],
    ["multi", 340, 370, 150, 48, ">2 groups"],
    ["paired", 570, 80, 175, 48, "Paired / matched"],
    ["independent", 570, 220, 175, 48, "Independent"],
    ["multi-normal", 570, 335, 185, 48, "Normal + equal variance"],
    ["multi-nonnormal", 570, 455, 185, 48, "Non-normal / outliers"],
    ["paired-normal", 830, 40, 185, 48, "Normal differences"],
    ["paired-nonnormal", 830, 120, 210, 48, "Non-normal / small n"],
    ["independent-normal", 830, 190, 200, 48, "Normal + equal variance"],
    ["independent-unequal", 830, 270, 180, 48, "Unequal variance"],
    ["independent-nonnormal", 830, 350, 200, 48, "Non-normal / outliers"],
    ["paired-ttest", 1120, 40, 180, 54, "paired t-test"],
    ["wilcoxon", 1120, 120, 220, 54, "Wilcoxon signed-rank"],
    ["unpaired-ttest", 1120, 190, 190, 54, "unpaired t-test"],
    ["welch", 1120, 270, 180, 54, "Welch correction"],
    ["mann-whitney", 1120, 350, 210, 54, "Mann-Whitney U"],
    ["anova", 1120, 455, 185, 54, "one-way ANOVA"],
    ["kruskal", 1120, 535, 185, 54, "Kruskal-Wallis"],
    ["posthoc", 1390, 495, 220, 54, "If significant: post-hoc"],
  ];
  const edges = [
    ["root", "two"], ["root", "multi"],
    ["two", "paired"], ["two", "independent"],
    ["multi", "multi-normal"], ["multi", "multi-nonnormal"],
    ["paired", "paired-normal"], ["paired", "paired-nonnormal"],
    ["independent", "independent-normal"], ["independent", "independent-unequal"], ["independent", "independent-nonnormal"],
    ["paired-normal", "paired-ttest"], ["paired-nonnormal", "wilcoxon"],
    ["independent-normal", "unpaired-ttest"], ["independent-unequal", "welch"], ["independent-nonnormal", "mann-whitney"],
    ["multi-normal", "anova"], ["multi-nonnormal", "kruskal"],
    ["anova", "posthoc"], ["kruskal", "posthoc"],
  ];
  const byId = Object.fromEntries(nodes.map((node) => [node[0], node]));
  const activeEdge = (from, to) => activeIds.includes(from) && activeIds.includes(to);

  return (
    <svg viewBox="0 0 1660 660" className="min-w-[1660px] rounded-[2rem] border border-stone-200 bg-white">
      {edges.map(([from, to]) => {
        const a = byId[from];
        const b = byId[to];
        const x1 = a[1] + a[3];
        const y1 = a[2] + a[4] / 2;
        const x2 = b[1];
        const y2 = b[2] + b[4] / 2;
        const mid = (x1 + x2) / 2;
        return (
          <path
            key={`${from}-${to}`}
            d={`M ${x1} ${y1} H ${mid} V ${y2} H ${x2}`}
            fill="none"
            stroke={activeEdge(from, to) ? "#dc2626" : "#d6d3d1"}
            strokeWidth={activeEdge(from, to) ? "5" : "3"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
      {nodes.map(([id, x, y, w, h, label]) => <SvgTreeNode key={id} id={id} x={x} y={y} w={w} h={h} label={label} activeIds={activeIds} />)}
      <text x="40" y="625" fontSize="19" fontWeight="900" fill="#991b1b">{"Read left to right: design -> number of groups -> pairedness/assumptions -> test -> post-hoc when global."}</text>
    </svg>
  );
}

function SvgTreeNode({ id, x, y, w, h, label, activeIds }) {
  const active = activeIds.includes(id);
  const isResult = ["paired-ttest", "wilcoxon", "unpaired-ttest", "welch", "mann-whitney", "anova", "kruskal", "posthoc"].includes(id);
  const words = label.split(" ");
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="18" fill={active ? "#fef2f2" : isResult ? "#111827" : "#fafaf9"} stroke={active ? "#dc2626" : "#d6d3d1"} strokeWidth={active ? "4" : "2"} />
      <text x={x + w / 2} y={y + h / 2 - (line2 ? 3 : -5)} textAnchor="middle" fontSize="15" fontWeight="900" fill={active ? "#b91c1c" : isResult ? "#ffffff" : "#292524"}>{line1}</text>
      {line2 && <text x={x + w / 2} y={y + h / 2 + 16} textAnchor="middle" fontSize="15" fontWeight="900" fill={active ? "#b91c1c" : isResult ? "#ffffff" : "#292524"}>{line2}</text>}
    </g>
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
          <GraphStudyCard key={title} title={title} shape={shape} body={body} type={type} />
        ))}
      </div>
    </section>
  );
}

function GraphStudyCard({ title, shape, body, type }) {
  const parts = GRAPH_PARTS[type];
  const [activePart, setActivePart] = useState(parts[0][0]);
  const current = parts.find(([id]) => id === activePart) || parts[0];

  return (
    <article className="rounded-[2.5rem] border border-stone-200 bg-stone-50 p-5">
      <div className="mb-4">
        <h3 className="text-3xl font-black text-stone-950">{title}</h3>
        <div className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-red-700">{shape}</div>
        <p className="mt-3 text-sm font-bold leading-6 text-stone-600">{body}</p>
      </div>
      <div className="rounded-[2rem] border border-stone-200 bg-white p-4">
        <PlotDiagram type={type} activePart={activePart} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {parts.map(([id, label]) => (
          <button key={id} onClick={() => setActivePart(id)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${activePart === id ? "border-red-300 bg-red-50 text-red-700" : "border-stone-200 bg-white text-stone-700 hover:border-red-200"}`}>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone-950 text-xs text-white">{id}</span>
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{current[0]} · {current[1]}</div>
        <p className="mt-2 text-sm font-bold leading-7 text-stone-800">{current[2]}</p>
      </div>
    </article>
  );
}

function PlotDiagram({ type, activePart }) {
  const mark = (id, x, y) => (
    <g>
      <circle cx={x} cy={y} r={activePart === id ? "17" : "13"} fill={activePart === id ? "#dc2626" : "#111827"} />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="900" fill="#ffffff">{id}</text>
    </g>
  );

  if (type === "pca") {
    return (
      <svg viewBox="0 0 900 420" className="h-[420px] w-full">
        <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
        <line x1="110" y1="305" x2="790" y2="305" stroke="#111827" strokeWidth="4" />
        <line x1="110" y1="305" x2="110" y2="65" stroke="#111827" strokeWidth="4" />
        <text x="610" y="338" fontSize="22" fontWeight="900" fill="#991b1b">PC1: largest variance</text>
        <text x="42" y="88" fontSize="22" fontWeight="900" fill="#991b1b">PC2</text>
        <ellipse cx="300" cy="220" rx="105" ry="65" fill="#fecaca" opacity="0.45" />
        <ellipse cx="595" cy="145" rx="110" ry="62" fill="#ccfbf1" opacity="0.58" />
        {[[245, 222], [280, 196], [305, 238], [336, 210], [360, 250]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="13" fill="#dc2626" />)}
        {[[540, 142], [582, 120], [620, 158], [665, 133], [690, 178]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="13" fill="#0f766e" />)}
        <circle cx="465" cy="82" r="14" fill="#f59e0b" />
        <text x="486" y="89" fontSize="18" fontWeight="900" fill="#111827">possible outlier</text>
        {mark("1", 705, 305)}
        {mark("2", 110, 80)}
        {mark("3", 455, 230)}
        {mark("4", 465, 82)}
        <text x="50" y="388" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: explain axes -> variance -> separation/outlier -> connect to metadata."}</text>
      </svg>
    );
  }
  if (type === "kmeans") {
    return (
      <svg viewBox="0 0 900 420" className="h-[420px] w-full">
        <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
        <path d="M95 300 C250 220 330 255 430 298 C535 350 690 325 790 240" fill="none" stroke="#f59e0b" strokeWidth="7" strokeDasharray="14 12" />
        <ellipse cx="260" cy="180" rx="145" ry="105" fill="#fecaca" opacity="0.4" />
        <ellipse cx="625" cy="160" rx="150" ry="105" fill="#ccfbf1" opacity="0.58" />
        {[[175, 130], [220, 190], [250, 235], [300, 160], [335, 220], [380, 185]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill="#dc2626" />)}
        {[[540, 125], [585, 185], [630, 110], [680, 168], [715, 225], [760, 145]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill="#0f766e" />)}
        <path d="M252 172 L292 172 M272 152 L272 192" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
        <path d="M632 158 L672 158 M652 138 L652 178" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
        <line x1="175" y1="130" x2="272" y2="172" stroke="#dc2626" strokeWidth="4" strokeDasharray="8 8" />
        <line x1="715" y1="225" x2="652" y2="158" stroke="#0f766e" strokeWidth="4" strokeDasharray="8 8" />
        {mark("1", 94, 78)}
        {mark("2", 272, 172)}
        {mark("3", 498, 205)}
        {mark("4", 760, 72)}
        <text x="64" y="385" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: K chosen first -> centroid -> nearest assignment -> iterate -> limitations."}</text>
      </svg>
    );
  }
  if (type === "hclust") {
    return (
      <svg viewBox="0 0 900 420" className="h-[420px] w-full">
        <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
        {["S1", "S2", "S3", "S4", "S5", "S6"].map((label, i) => <text key={label} x={150 + i * 100} y="330" fontSize="20" fontWeight="900" fill="#111827">{label}</text>)}
        <path d="M160 300 V240 H260 V300" fill="none" stroke="#dc2626" strokeWidth="8" />
        <path d="M360 300 V220 H460 V300" fill="none" stroke="#0f766e" strokeWidth="8" />
        <path d="M560 300 V250 H660 V300" fill="none" stroke="#2563eb" strokeWidth="8" />
        <path d="M210 240 V160 H410 V220" fill="none" stroke="#111827" strokeWidth="8" />
        <path d="M410 160 V90 H610 V250" fill="none" stroke="#111827" strokeWidth="8" />
        <line x1="88" y1="300" x2="88" y2="75" stroke="#991b1b" strokeWidth="4" />
        <text x="46" y="88" fontSize="18" fontWeight="900" fill="#991b1b">height</text>
        {mark("1", 210, 365)}
        {mark("2", 610, 245)}
        {mark("3", 410, 92)}
        {mark("4", 736, 124)}
        <text x="64" y="385" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: distance metric -> linkage -> dendrogram height -> biological grouping."}</text>
      </svg>
    );
  }
  if (type === "heatmap") {
    const colors = ["#dc2626", "#fecaca", "#f8fafc", "#bfdbfe", "#2563eb"];
    return (
      <svg viewBox="0 0 900 420" className="h-[420px] w-full">
        <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((col) => <rect key={`${row}-${col}`} x={210 + col * 42} y={100 + row * 26} width="38" height="22" rx="4" fill={colors[(row + col) % colors.length]} />))}
        <path d="M210 82 V52 H294 V82 M294 52 H378 V82 M378 52 H462 V82 M462 52 H588 V82" fill="none" stroke="#111827" strokeWidth="6" />
        <path d="M184 100 H150 V178 H184 M150 178 V256 H184 M150 256 V304 H184" fill="none" stroke="#111827" strokeWidth="6" />
        <rect x="680" y="110" width="26" height="185" fill="url(#heat)" />
        <text x="720" y="128" fontSize="17" fontWeight="900" fill="#111827">high</text>
        <text x="720" y="296" fontSize="17" fontWeight="900" fill="#111827">low</text>
        <text x="212" y="330" fontSize="18" fontWeight="900" fill="#991b1b">samples / conditions</text>
        <text x="62" y="214" fontSize="18" fontWeight="900" fill="#991b1b">genes</text>
        {mark("1", 254, 360)}
        {mark("2", 706, 102)}
        {mark("3", 402, 52)}
        {mark("4", 110, 258)}
        <text x="64" y="388" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: rows/columns -> color scale -> dendrograms -> metadata/outliers."}</text>
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
      <svg viewBox="0 0 900 420" className="h-[420px] w-full">
        <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
        <line x1="110" y1="305" x2="790" y2="305" stroke="#111827" strokeWidth="4" />
        <line x1="450" y1="305" x2="450" y2="65" stroke="#111827" strokeWidth="3" strokeDasharray="10 10" />
        <line x1="110" y1="175" x2="790" y2="175" stroke="#991b1b" strokeWidth="4" strokeDasharray="10 10" />
        <line x1="330" y1="305" x2="330" y2="65" stroke="#991b1b" strokeWidth="3" strokeDasharray="8 10" />
        <line x1="570" y1="305" x2="570" y2="65" stroke="#991b1b" strokeWidth="3" strokeDasharray="8 10" />
        {[[205, 158], [250, 120], [300, 190], [600, 185], [650, 118], [710, 150]].map(([x, y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill={i < 3 ? "#2563eb" : "#dc2626"} />)}
        {[[390, 260], [420, 245], [455, 275], [500, 260], [530, 235], [470, 215], [435, 225]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="11" fill="#a8a29e" />)}
        <text x="610" y="338" fontSize="21" fontWeight="900" fill="#991b1b">log fold change</text>
        <text x="44" y="92" fontSize="21" fontWeight="900" fill="#991b1b">-log10 adjusted p</text>
        <text x="155" y="94" fontSize="18" fontWeight="900" fill="#2563eb">downregulated</text>
        <text x="622" y="94" fontSize="18" fontWeight="900" fill="#dc2626">upregulated</text>
        {mark("1", 690, 305)}
        {mark("2", 110, 92)}
        {mark("3", 570, 175)}
        {mark("4", 662, 118)}
        <text x="64" y="388" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: effect size -> adjusted p-value -> thresholds -> candidate genes -> biology."}</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 900 420" className="h-[420px] w-full">
      <rect x="20" y="20" width="840" height="330" rx="24" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
      <line x1="110" y1="305" x2="790" y2="305" stroke="#111827" strokeWidth="4" />
      <line x1="110" y1="305" x2="110" y2="70" stroke="#111827" strokeWidth="4" />
      <line x1="120" y1="190" x2="790" y2="190" stroke="#111827" strokeWidth="3" strokeDasharray="10 10" />
      <path d="M130 245 C240 115 360 105 455 182 C560 270 690 250 780 155" fill="none" stroke="#dc2626" strokeWidth="8" opacity="0.85" />
      {[[160, 238], [220, 160], [292, 135], [360, 150], [430, 188], [520, 235], [620, 245], [720, 185]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="13" fill="#0f766e" />)}
      <text x="620" y="338" fontSize="21" fontWeight="900" fill="#991b1b">A: average intensity</text>
      <text x="44" y="92" fontSize="21" fontWeight="900" fill="#991b1b">M: log ratio</text>
      <text x="570" y="178" fontSize="18" fontWeight="900" fill="#111827">expected center M=0</text>
      {mark("1", 110, 92)}
      {mark("2", 690, 305)}
      {mark("3", 580, 190)}
      {mark("4", 430, 120)}
      <text x="64" y="388" fontSize="19" fontWeight="900" fill="#991b1b">{"Exam order: define M and A -> inspect centering -> diagnose intensity bias -> normalize."}</text>
    </svg>
  );
}

function AnswerBuilder({ checks, setChecks, checkCount }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModel, setShowModel] = useState(false);
  const question = BIO_QUESTIONS[questionIndex % BIO_QUESTIONS.length];
  const filledFields = BUILDER_FIELDS.filter(([key]) => (answers[key] || "").trim()).length;
  const updateField = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };
  const nextQuestion = () => {
    setQuestionIndex((value) => (value + 1) % BIO_QUESTIONS.length);
    setAnswers({});
    setShowModel(false);
    setChecks({});
  };

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">10-12 line builder</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Write the answer, then reveal.</h2>
      <div className="mt-5 rounded-[2rem] border border-red-200 bg-red-50 p-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{question.title}</div>
            <p className="mt-2 text-lg font-black leading-7 text-stone-950">{question.question}</p>
          </div>
          <button onClick={nextQuestion} className="shrink-0 rounded-full bg-stone-950 px-4 py-2 text-xs font-black text-white transition hover:bg-red-800">
            Next biological question
          </button>
        </div>
        <p className="mt-2 text-lg font-black leading-7 text-stone-950">
          {question.context}
        </p>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
        <div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${(checkCount / BUILDER_CHECKS.length) * 100}%` }} />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm font-black text-stone-700">{filledFields}/{BUILDER_FIELDS.length} answer blocks filled</div>
        <button onClick={() => setAnswers({})} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-black text-stone-700 transition hover:border-red-200 hover:text-red-700">
          Clear answer
        </button>
      </div>
      <div className="mt-5 grid gap-3">
        {BUILDER_FIELDS.map(([key, label, placeholder]) => (
          <label key={key} className="grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-4 lg:grid-cols-[190px_1fr] lg:items-start">
            <span>
              <span className="block text-sm font-black text-red-700">{label}</span>
              <span className="mt-1 block text-xs font-semibold leading-5 text-stone-500">{placeholder}</span>
            </span>
            <textarea
              value={answers[key] || ""}
              onChange={(event) => updateField(key, event.target.value)}
              className="min-h-20 w-full resize-y rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-semibold leading-6 text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100"
              placeholder={placeholder}
            />
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-[2rem] border border-stone-200 bg-stone-50 p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Checklist</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {BUILDER_CHECKS.map((item) => (
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
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Model answer by blocks</div>
          <div className="mt-4 grid gap-2">
            {BUILDER_FIELDS.map(([key, label]) => (
              <div key={key} className="grid gap-2 rounded-2xl border border-red-100 bg-white p-3 text-sm font-bold leading-6 text-stone-800 lg:grid-cols-[190px_1fr]">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-red-700">{label}</span>
                <span>{question.fields[key]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

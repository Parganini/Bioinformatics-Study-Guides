import React, { useMemo, useState } from "react";
import slide01 from "../../assets/drd/lesson11/slide-01.png";
import slide02 from "../../assets/drd/lesson11/slide-02.png";
import slide03 from "../../assets/drd/lesson11/slide-03.png";
import slide04 from "../../assets/drd/lesson11/slide-04.png";
import slide05 from "../../assets/drd/lesson11/slide-05.png";
import slide06 from "../../assets/drd/lesson11/slide-06.png";
import slide07 from "../../assets/drd/lesson11/slide-07.png";
import slide08 from "../../assets/drd/lesson11/slide-08.png";
import slide09 from "../../assets/drd/lesson11/slide-09.png";
import slide10 from "../../assets/drd/lesson11/slide-10.png";
import slide11 from "../../assets/drd/lesson11/slide-11.png";
import slide12 from "../../assets/drd/lesson11/slide-12.png";
import slide13 from "../../assets/drd/lesson11/slide-13.png";
import slide14 from "../../assets/drd/lesson11/slide-14.png";
import slide15 from "../../assets/drd/lesson11/slide-15.png";
import slide16 from "../../assets/drd/lesson11/slide-16.png";
import slide17 from "../../assets/drd/lesson11/slide-17.png";
import slide18 from "../../assets/drd/lesson11/slide-18.png";
import slide19 from "../../assets/drd/lesson11/slide-19.png";
import slide20 from "../../assets/drd/lesson11/slide-20.png";
import slide21 from "../../assets/drd/lesson11/slide-21.png";
import slide22 from "../../assets/drd/lesson11/slide-22.png";
import slide23 from "../../assets/drd/lesson11/slide-23.png";
import slide24 from "../../assets/drd/lesson11/slide-24.png";
import slide25 from "../../assets/drd/lesson11/slide-25.png";
import slide26 from "../../assets/drd/lesson11/slide-26.png";
import slide27 from "../../assets/drd/lesson11/slide-27.png";
import slide28 from "../../assets/drd/lesson11/slide-28.png";
import slide29 from "../../assets/drd/lesson11/slide-29.png";
import slide30 from "../../assets/drd/lesson11/slide-30.png";
import slide31 from "../../assets/drd/lesson11/slide-31.png";
import slide32 from "../../assets/drd/lesson11/slide-32.png";

const SLIDES_URL = "https://drive.google.com/file/d/1JSN_XP7mF2r39TUzdiSOMW2Rum5Ij7ya/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/13Wu08yLvUaTITj3PmAC8yupFHzC6g8_zXbmVaGxAsUA/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=YjqoFPQxKJU&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=12";

const IMG = {
  s01: { src: slide01, slide: 1 }, s02: { src: slide02, slide: 2 }, s03: { src: slide03, slide: 3 }, s04: { src: slide04, slide: 4 },
  s05: { src: slide05, slide: 5 }, s06: { src: slide06, slide: 6 }, s07: { src: slide07, slide: 7 }, s08: { src: slide08, slide: 8 },
  s09: { src: slide09, slide: 9 }, s10: { src: slide10, slide: 10 }, s11: { src: slide11, slide: 11 }, s12: { src: slide12, slide: 12 },
  s13: { src: slide13, slide: 13 }, s14: { src: slide14, slide: 14 }, s15: { src: slide15, slide: 15 }, s16: { src: slide16, slide: 16 },
  s17: { src: slide17, slide: 17 }, s18: { src: slide18, slide: 18 }, s19: { src: slide19, slide: 19 }, s20: { src: slide20, slide: 20 },
  s21: { src: slide21, slide: 21 }, s22: { src: slide22, slide: 22 }, s23: { src: slide23, slide: 23 }, s24: { src: slide24, slide: 24 },
  s25: { src: slide25, slide: 25 }, s26: { src: slide26, slide: 26 }, s27: { src: slide27, slide: 27 }, s28: { src: slide28, slide: 28 },
  s29: { src: slide29, slide: 29 }, s30: { src: slide30, slide: 30 }, s31: { src: slide31, slide: 31 }, s32: { src: slide32, slide: 32 }
};

const UI = {
  en: {
    current: "M1.7", dashboard: "DRD dashboard", previous: "Previous", next: "Next", previousTitle: "M1.6 Differentially expressed genes II", nextTitle: "M1.8 Samples and genes II",
    mark: "Mark completed", done: "Completed", resources: "Class resources", slides: "Slides", transcript: "Transcript", recording: "Recording", slide: "Slide", zoom: "Click to zoom", close: "Close zoom",
    professor: "Professor emphasis", exam: "Exam watch", expand: "Open expanded answer", include: "What to include", trap: "Common trap", model: "Sample answer", checkpoint: "Checkpoint",
    words: "words", module: "Module", writtenExam: "Written test", answerLines: "Answer lines", core: "Core idea", bigIdea: "Big idea",
    heroEyebrow: "Module 1 · June 5 · Relationship between samples and genes I",
    heroTitle: "From expression matrices to relationships, clusters and heatmaps",
    heroSubtitle: "A theoretical Module 1 lesson guided by the June 5 slides and class transcript: unsupervised analysis, distance metrics, MDS, hierarchical clustering, bootstrap validation and heatmap interpretation.",
    tags: ["matrix", "distance", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "After normalization and differential testing, the dataset is still a matrix. This lesson asks how genes, CpGs or samples organize themselves when we let the data reveal similarity and dissimilarity."
  },
  es: {
    current: "M1.7", dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", previousTitle: "M1.6 Genes diferencialmente expresados II", nextTitle: "M1.8 Muestras y genes II",
    mark: "Marcar completada", done: "Completada", resources: "Recursos de clase", slides: "Diapositivas", transcript: "Transcripción", recording: "Grabación", slide: "Diapo", zoom: "Clic para ampliar", close: "Cerrar zoom",
    professor: "Énfasis de la profesora", exam: "Ojo para examen", expand: "Abrir respuesta desarrollada", include: "Qué incluir", trap: "Trampa frecuente", model: "Respuesta modelo", checkpoint: "Punto de control",
    words: "palabras", module: "Módulo", writtenExam: "Examen escrito", answerLines: "Líneas", core: "Idea clave", bigIdea: "Idea central",
    heroEyebrow: "Módulo 1 · 5 de junio · Relationship between samples and genes I",
    heroTitle: "De matrices de expresión a relaciones, clusters y heatmaps",
    heroSubtitle: "Lección teórica del Módulo 1 guiada por las diapositivas del 5 de junio y la transcripción de clase: análisis no supervisado, métricas de distancia, MDS, clustering jerárquico, bootstrap validation e interpretación de heatmaps.",
    tags: ["matriz", "distancia", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "Después de normalización y tests diferenciales, el dataset sigue siendo una matriz. Esta lección pregunta cómo se organizan genes, CpGs o muestras cuando dejamos que los datos revelen similitud y disimilitud."
  },
  fa: {
    current: "M1.7", dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", previousTitle: "M1.6 Differentially expressed genes II", nextTitle: "M1.8 Samples and genes II",
    mark: "علامت‌گذاری کامل", done: "کامل شد", resources: "منابع کلاس", slides: "اسلایدها", transcript: "رونوشت", recording: "ضبط", slide: "اسلاید", zoom: "برای بزرگ‌نمایی کلیک کنید", close: "بستن بزرگ‌نمایی",
    professor: "تأکید استاد", exam: "نکته امتحان", expand: "باز کردن پاسخ کامل", include: "چه چیزهایی بیاوریم", trap: "اشتباه رایج", model: "پاسخ نمونه", checkpoint: "چک‌پوینت",
    words: "کلمه", module: "ماژول", writtenExam: "آزمون کتبی", answerLines: "خط پاسخ", core: "ایده اصلی", bigIdea: "ایده مرکزی",
    heroEyebrow: "Module 1 · June 5 · Relationship between samples and genes I",
    heroTitle: "From expression matrices to relationships, clusters and heatmaps",
    heroSubtitle: "A theoretical lesson on unsupervised analysis, distance metrics, MDS, hierarchical clustering, bootstrap validation and heatmap interpretation.",
    tags: ["matrix", "distance", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "After normalization and differential testing, the dataset is still a matrix. Here we ask how genes, CpGs or samples organize themselves by similarity and dissimilarity."
  }
};
function getUi(lang = "es") { return UI[lang] || UI.es; }

const COPY = {
  en: {
    sections: [
      {
        title: "1. The matrix is the starting point",
        intro: "The lesson opens by changing the question. We are no longer asking only whether one gene is significant; we ask how the whole dataset is internally organized.",
        slides: [
          { img: "s01", title: "Relationship between genes/samples", body: "The slide defines the goal as understanding intrinsic characteristics and relationships within the data itself: unsupervised analysis and visualization.", professor: "This is a conceptual shift after normalization and statistical tests: let the data organize itself, then interpret biologically.", exam: { q: "Why is this analysis unsupervised?", include: ["No a priori labels are imposed", "It explores intrinsic structure", "It can be applied to genes, CpGs or samples"], trap: "Do not present it as proof of differential expression." } },
          { img: "s02", title: "Two directions of the same matrix", body: "The same matrix can be read as pairwise genes measured by all samples, or pairwise samples measured by all genes.", professor: "The professor clarified this with a student: the objects can be genes or samples; the logic is the same, but the interpretation changes.", exam: { q: "What changes when you compare genes instead of samples?", include: ["Genes are profiles across samples", "Samples are profiles across genes", "The biological conclusion changes"], trap: "Do not mix rows and columns without saying what is being compared." } }
        ],
        extra: "matrix"
      },
      {
        title: "2. Similarity becomes a distance",
        intro: "Near means similar; far means dissimilar. To make this usable by algorithms, the profiles are transformed into numerical distances.",
        slides: [
          { img: "s03", title: "Geometrical properties", body: "Distance is non-negative, zero only for identical profiles, symmetric and constrained by the triangle inequality.", professor: "The point is not to memorize geometry, but to understand why distances can be used to place profiles in a space or tree.", exam: { q: "What does a small distance mean?", include: ["Profiles are close", "They are similar according to the chosen metric", "Similarity still needs biological interpretation"], trap: "Small distance is not automatically a causal relationship." } },
          { img: "s04", title: "Pearson r as relationship", body: "Pearson r quantifies a linear relationship between two profiles and ranges from -1 to +1.", professor: "The professor explicitly emphasized: correlation is not causality.", exam: { q: "What assumption is behind Pearson?", include: ["Linearity", "Two sets of measurements", "r between -1 and +1"], trap: "Do not use correlation as evidence of causal regulation." } }
        ],
        extra: "distance"
      },
      {
        title: "3. Pearson distance: d = 1 − |r|",
        intro: "Pearson can be converted into a distance. With this definition, strongly positive and strongly negative correlations are both close.",
        slides: [
          { img: "s05", title: "Converting correlation into distance", body: "The slide uses d = 1 − |r|. Perfect positive or negative correlation gives distance 0; no correlation gives distance 1.", professor: "This is why opposite profiles may still be close when correlation distance is used.", exam: { q: "Why does r = -1 also give d = 0?", include: ["The formula uses absolute value", "Perfect anti-correlation is still a strong relationship", "Distance is about relationship strength here"], trap: "Do not say negative correlation is always far away." } },
          { img: "s06", title: "DLBCL example", body: "In the DLBCL example, IGKC and NKG7 have r = 0.97 and distance d = 0.03, so their profiles are very close across patients.", professor: "The professor used this example to connect numbers to biological profiles measured across many patients.", exam: { q: "How do you interpret r = 0.97 and d = 0.03?", include: ["Very strong correlation", "Very small distance", "Similar profiles across samples"], trap: "Do not infer that one gene causes the other." } },
          { img: "s07", title: "Significance and outliers", body: "Pearson r can be tested with a t statistic, df = N − 2, but it is sensitive to outliers.", professor: "Outliers can strongly change the apparent relationship, so visualization matters before trusting the metric.", exam: { q: "What is a Pearson limitation?", include: ["Sensitive to outliers", "Assumes linearity", "Needs visual inspection"], trap: "Do not rely on r without checking the scatterplot." } }
        ],
        extra: "pearson"
      },
      {
        title: "4. Spearman and Euclidean: the metric must fit the design",
        intro: "The class compares metrics because the best choice depends on outliers, scaling and whether the design is a time series.",
        slides: [
          { img: "s08", title: "Yeast sporulation time series", body: "The old yeast sporulation paper is used to show that a metric can be misleading when time points and outliers are present.", professor: "Time series are powerful because they follow the same genome along time, but they make metric choice more delicate.", exam: { q: "Why is time series special?", include: ["Order of time points matters", "Up/down trends matter", "Ranks can lose direction"], trap: "Do not analyze time points as unordered measurements without comment." } },
          { img: "s09", title: "Spearman ranks", body: "Spearman replaces true measurements by ranks. This makes it robust to outliers and scale-invariant.", professor: "The professor says Spearman is useful with outliers because ranks reduce the effect of extreme values.", exam: { q: "When is Spearman useful?", include: ["Non-parametric correlation", "Rank-based", "Robust to outliers"], trap: "Do not say Spearman preserves expression magnitude." } },
          { img: "s10", title: "Spearman in time series", body: "Because values become ranks, the direction of regulation can be lost, which is a problem for time-series competitive-array data.", professor: "For this reason, Spearman is not automatically the best choice for a time series.", exam: { q: "Why can Spearman be problematic in time series?", include: ["Ranks replace measurements", "Up/down direction can be lost", "Temporal trend matters"], trap: "Do not choose Spearman just because it is robust." } },
          { img: "s11", title: "Euclidean distance", body: "Euclidean distance is geometric, non-negative and can keep opposite expression profiles far apart.", professor: "The professor contrasts it with correlation distances: Euclidean can detect large geometric separation.", exam: { q: "What is the advantage of Euclidean distance?", include: ["Direct geometric meaning", "Preserves magnitude separation", "Opposite profiles can be far"], trap: "Do not forget scaling." } },
          { img: "s12", title: "Scaling matters", body: "The same yeast example changes from Euclidean distance 5.8 to 0.88 after scaling.", professor: "Euclidean distance depends on scaling, so normalized/scaled data are essential.", exam: { q: "Why does scaling matter for Euclidean distance?", include: ["Magnitude affects the result", "Different scales change distances", "Normalization is required"], trap: "Do not compare Euclidean distances across differently scaled data." } },
          { img: "s13", title: "Different strengths", body: "Pearson, Spearman and Euclidean can give different answers; researchers compare results and choose according to the dataset.", professor: "There is no universal best metric. You must justify it.", exam: { q: "How should you choose a metric?", include: ["Consider outliers", "Consider time series", "Consider scaling", "Compare methods"], trap: "Do not write that one metric is always best." } }
        ],
        extra: "metric"
      },
      {
        title: "5. MDS: an algorithm, not a metric",
        intro: "MDS starts from a distance matrix and maps high-dimensional relationships into a lower-dimensional space for visualization.",
        slides: [
          { img: "s14", title: "Unsupervised analysis", body: "MDS, hierarchical clustering, k-means and PCA are exploratory methods for whole-data structure.", professor: "These methods do not start by assuming how groups should behave.", exam: { q: "What is the aim of unsupervised analysis?", include: ["Explore whole-data structure", "Let data organize itself", "Then assign biological meaning"], trap: "Do not confuse it with a supervised classifier." } },
          { img: "s15", title: "MDS purpose", body: "MDS maps distances between points from high-dimensional space into 2D or 3D without too much loss of information.", professor: "The key is distance preservation, not the absolute value of the axes.", exam: { q: "What does MDS preserve?", include: ["Between-object distances", "As well as possible", "In low-dimensional space"], trap: "Do not interpret axis values as expression levels." } },
          { img: "s16", title: "Distance matrix to coordinates", body: "The algorithm starts from a triangular distance matrix and produces coordinates that approximately preserve those distances.", professor: "A student asked whether MDS is a metric; the professor clarified that it is an algorithm that uses metrics.", exam: { q: "Is MDS a metric?", include: ["No", "It is an algorithm", "It uses a distance matrix"], trap: "Do not call MDS a distance measure." } },
          { img: "s17", title: "Interpreting MDS", body: "Near points indicate similar profiles; far points indicate dissimilar profiles. Different metrics can produce similar or different maps.", professor: "If two metrics give a similar MDS map, that supports the interpretation, but it still requires biological follow-up.", exam: { q: "How do you interpret an MDS plot?", include: ["Near/far profiles", "Relative distances", "Compare metrics"], trap: "Do not overinterpret a single exploratory plot." } }
        ],
        extra: "mds"
      },
      {
        title: "6. Hierarchical clustering and linkage methods",
        intro: "Hierarchical clustering builds a dendrogram from the closest profiles upward. Branch length and linkage method determine the final structure.",
        slides: [
          { img: "s18", title: "Bottom-up clustering", body: "Agglomerative hierarchical clustering starts from the nearest genes or samples and organizes them into a dendrogram.", professor: "Short branches mean proximity and similarity; long branches mean distance.", exam: { q: "What does a dendrogram show?", include: ["Tree of profiles", "Branch length", "Similarity/dissimilarity"], trap: "Do not read it without considering the metric." } },
          { img: "s19", title: "Distance matrix", body: "The closest genes form the first cluster, then distances between the new cluster and the remaining genes are recalculated.", professor: "The algorithm is automatic, but you must understand the logic to explain it in the exam.", exam: { q: "What happens after the first cluster forms?", include: ["Distances are recalculated", "A linkage rule is applied", "The dendrogram grows"], trap: "Do not say the algorithm stops after pairing the closest two genes." } },
          { img: "s20", title: "Linkage methods", body: "Single uses minimum distance, complete uses maximum distance, average uses average pairwise distance, and Ward minimizes variance increase.", professor: "Average linkage is often a good trade-off and works well in many applications.", exam: { q: "Compare linkage methods.", include: ["Single/minimum", "Complete/maximum", "Average/UPGMA", "Ward/variance"], trap: "Do not discuss clustering without naming both metric and linkage." } },
          { img: "s21", title: "Average linkage", body: "After clustering RDHL and ALOX5, average linkage recalculates the distance from that cluster to each remaining gene.", professor: "The same linkage method must be used consistently through the dendrogram construction.", exam: { q: "How does average linkage work?", include: ["Average pairwise distances", "Between all objects in the two clusters", "Used after each agglomeration"], trap: "Do not confuse average linkage with the average expression value." } },
          { img: "s22", title: "Reading branches and nodes", body: "The closer the genes, the shorter the branches. For n genes there are n−1 internal nodes and 2n−1 total nodes.", professor: "Always look up the tree and branch lengths to establish proximity.", exam: { q: "What does branch length indicate?", include: ["Distance/proximity", "Short = similar", "Long = dissimilar"], trap: "Do not count only labels; branch height matters." } }
        ],
        extra: "linkage"
      },
      {
        title: "7. Comparing cluster outputs and validating nodes",
        intro: "The professor shows the same yeast genes clustered with different metrics/linkages to prove that the final dendrogram is not unique.",
        slides: [
          { img: "s23", title: "Persistent and transient genes", body: "In the yeast time series, some genes behave persistently while others are transient. Clustering helps formalize these natural groups.", professor: "Visual inspection gives intuition, but clustering makes the pattern explicit.", exam: { q: "What is a natural cluster in this example?", include: ["Persistent genes", "Transient genes", "Shared temporal behavior"], trap: "Do not call every cluster biologically meaningful without validation." } },
          { img: "s24", title: "Single linkage and chaining", body: "Pearson + single linkage finds one large cluster but adds many genes one by one: a chaining effect.", professor: "Chaining is usually a warning sign that the dendrogram structure is not ideal.", exam: { q: "What is chaining?", include: ["Objects added one by one", "Often caused by single linkage", "Poor structure"], trap: "Do not interpret chaining as a strong biological pathway." } },
          { img: "s25", title: "Complete vs average linkage", body: "Complete and average linkage can recover two main clusters better, although no method is perfect.", professor: "Pearson + average linkage often works well and was emphasized as a practical first attempt.", exam: { q: "Why try different linkage methods?", include: ["Different outputs", "Some show structure better", "Need robust interpretation"], trap: "Do not choose the prettiest tree without justification." } },
          { img: "s26", title: "Spearman or Euclidean outputs", body: "Spearman may lose fine structure through distance 0; Euclidean may create loose clusters by placing opposite profiles far away.", professor: "The output must be interpreted through the metric: the same biological data can look different.", exam: { q: "Why can fine structure disappear?", include: ["Rank-based Spearman", "Many identical rank shapes", "Distance 0"], trap: "Do not ignore metric artifacts." } },
          { img: "s27", title: "Three rules to remember", body: "Correlation distances can bring opposite profiles close, Spearman can produce zero distances, and Euclidean often produces larger distances.", professor: "These are the practical exam points for comparing dendrograms.", exam: { q: "Why can correlation cluster opposite profiles?", include: ["Uses relationship strength", "Absolute correlation distance", "Opposite trends may be close"], trap: "Do not equate correlation distance with Euclidean separation." } },
          { img: "s28", title: "Take-home message", body: "Hierarchical clustering is useful, but many variants exist and clusters should be validated.", professor: "The professor explicitly says hierarchical clustering is a likely exam question.", exam: { q: "How can clustering be useful?", include: ["Identify related genes/samples", "Show them in a dendrogram", "Suggest further analysis"], trap: "Do not claim the dendrogram is final proof." } },
          { img: "s29", title: "Bootstrap validation", body: "Bootstrap resampling repeats clustering many times and asks how often a cluster is recovered.", professor: "This validates whether a node is stable and reproducible.", exam: { q: "Why use bootstrap in clustering?", include: ["Assess stability", "Repeat clustering", "Compute support"], trap: "Do not confuse this with the bootstrap used earlier for t-test confirmation, although the idea of resampling is related." } },
          { img: "s30", title: "Bootstrap support", body: "95% is very strong, 80–95% good, 70–80% moderate and <70% weak support.", professor: "Low support means you should be cautious and may need to test other metrics or linkage methods.", exam: { q: "How do you interpret 65% bootstrap support?", include: ["Weak support", "Cluster not stable", "Be cautious"], trap: "Do not call it strong because it is above 50%." } }
        ],
        extra: "bootstrap"
      },
      {
        title: "8. Heatmaps: visualization plus dendrograms",
        intro: "The class ends by connecting dendrograms to heatmaps. Heatmaps make row/column patterns visible, but the legend decides what the colors mean.",
        slides: [
          { img: "s31", title: "Heatmap structure", body: "Rows usually represent genes and columns samples. Color and intensity represent expression or statistics such as up/down regulation.", professor: "The professor warns to pay attention to the legend; colors can be reversed between examples.", exam: { q: "What must you check in a heatmap?", include: ["Rows/columns", "Legend", "Relative color scale", "Dendrogram"], trap: "Do not assume red always means up-regulated." } },
          { img: "s32", title: "Z-score interpretation", body: "Z-scores indicate how many standard deviations a value is above or below the gene mean across samples.", professor: "Heatmap colors usually represent relative expression of each gene across samples, not absolute expression levels.", exam: { q: "What does a positive z-score mean?", include: ["Above gene average", "Relative to that gene across samples", "Not absolute expression"], trap: "Do not compare absolute gene abundance from z-score colors." } }
        ],
        extra: "zscore"
      }
    ],
    labs: {
      matrix: { title: "Mini-lab · Which direction are we reading?", intro: "Choose whether each question compares genes across samples or samples across genes.", items: [
        { q: "Do IGKC and NKG7 have similar behavior across 38 DLBCL patients?", a: "genes", why: "Two genes are compared using all patient samples as measurements." },
        { q: "Are the 7 h and 9 h yeast samples close after considering many transcripts?", a: "samples", why: "Two time-point samples are compared through their gene-expression profiles." },
        { q: "Which transcripts show the same transient sporulation trend?", a: "genes", why: "Genes are grouped by their profile across the time series." }
      ], genes: "Genes", samples: "Samples" },
      distance: { title: "Mini-lab · Distance intuition", intro: "A good distance behaves like geometry. Mark which statements are valid.", items: [
        { q: "The distance from a profile to itself is zero.", a: true }, { q: "A distance can be negative when correlation is negative.", a: false }, { q: "A small distance means profiles are similar according to the chosen metric.", a: true }
      ] },
      pearson: { title: "Mini-lab · Pearson r → distance", intro: "Move r and see how d = 1 − |r| behaves. Notice that +1 and −1 both produce distance 0.", rLabel: "Pearson r", dLabel: "Distance d", meaning: "Interpretation" },
      metric: { title: "Mini-lab · Choose the metric", intro: "Pick the best first metric for each situation.", items: [
        { q: "Two profiles show one very large outlier, and you want a robust relationship measure.", a: "Spearman", why: "Ranks reduce the effect of extreme values." },
        { q: "A time series has opposite up/down behavior that should remain far apart.", a: "Euclidean", why: "Euclidean can preserve opposite profiles as geometrically distant." },
        { q: "Normalized profiles seem linearly related and no strong outliers are visible.", a: "Pearson", why: "Pearson is powerful for linear relationships in normalized data." }
      ] },
      mds: { title: "Mini-lab · MDS is not the metric", intro: "Toggle the input distance. The map changes because MDS uses the metric-derived distance matrix.", euc: "Euclidean distance", cor: "Correlation distance", note: "Interpret relative proximity, not axis values." },
      linkage: { title: "Mini-lab · Linkage method", intro: "Choose a linkage method and read what kind of dendrogram behavior it may produce.", methods: {
        single: { name: "Single / minimum", text: "Uses nearest neighbors. Can capture elongated natural clusters, but may cause chaining." },
        complete: { name: "Complete / maximum", text: "Uses farthest neighbors. Produces compact clusters and avoids chaining more than single linkage." },
        average: { name: "Average / UPGMA", text: "Uses average pairwise distances. A good general-purpose trade-off used often in practice." },
        ward: { name: "Ward", text: "Adds objects while minimizing variance increase. Often useful with Euclidean-like compact clusters." }
      } },
      bootstrap: { title: "Mini-lab · Bootstrap support", intro: "Compute support as recovered clusters / total replicates × 100.", total: "Total replicates", recovered: "Recovered cluster", support: "Support", verdict: "Verdict" },
      zscore: { title: "Mini-lab · Heatmap z-score", intro: "Enter three expression values for one gene across samples. The heatmap z-score is computed within that gene.", values: "Expression values", mean: "Mean", sd: "SD", z: "Z-scores" },
      quiz: { title: "Final checkpoint", items: [
        { q: "MDS is best described as…", options: ["a p-value correction", "a metric", "an algorithm that maps distances", "a paired test"], answer: 2 },
        { q: "With d = 1 − |r|, r = −1 gives…", options: ["d = 2", "d = 1", "d = 0", "d = −1"], answer: 2 },
        { q: "The most common warning for single linkage is…", options: ["heteroscedasticity", "chaining", "bisulfite failure", "FDR inflation"], answer: 1 },
        { q: "Heatmap z-scores are usually…", options: ["absolute expression levels", "relative to each gene across samples", "raw CEL intensities", "bootstrap p-values"], answer: 1 }
      ] },
      written: { title: "Written exam trainer", prompt: "Answer in 10–12 lines: Explain hierarchical clustering and heatmaps in transcriptomic data.", placeholder: "Write your answer here…", model: "Hierarchical clustering is an unsupervised method used to identify similarity and dissimilarity among genes or samples. It starts from a matrix of gene or sample profiles and computes pairwise distances using a metric such as Pearson, Spearman or Euclidean distance. The algorithm is agglomerative: it begins with the closest profiles and progressively joins them into clusters using a linkage method such as single, complete or average linkage. The result is a dendrogram, where short branches indicate similar profiles and long branches indicate dissimilarity. Different metrics and linkage methods can give different dendrograms, so results should be compared and important nodes can be validated by bootstrap support. A heatmap is often associated with the dendrogram to visualize expression patterns across genes and samples. Rows usually represent genes and columns samples, and colors represent relative expression or z-scores. The legend is essential because colors do not always mean the same thing." }
    }
  }
};
COPY.es = COPY.en;
COPY.fa = COPY.en;
function getCopy(lang = "es") { return COPY[lang] || COPY.es; }

function pearsonMeaning(r) {
  const abs = Math.abs(r);
  if (abs >= 0.8) return "Strong relationship: the profiles are close with correlation distance. Check outliers and remember this is not causality.";
  if (abs >= 0.5) return "Moderate relationship: the profiles have some shared pattern, but interpretation depends on the plot and design.";
  return "Weak or absent relationship: distance is high and the profiles are not strongly correlated by Pearson.";
}
function bootstrapVerdict(pct) {
  if (pct >= 95) return "Very strong evidence";
  if (pct >= 80) return "Good support";
  if (pct >= 70) return "Moderate support";
  return "Weak support";
}
function parseValues(text) { return String(text || "").split(/[\s,;]+/).map(Number).filter(Number.isFinite); }
function mean(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length; }
function sdPopulation(arr) { const m = mean(arr); return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length); }

function HeroEyebrow({ children }) { return <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700">{children}</div>; }
function Pill({ children, tone = "stone" }) { const cls = tone === "red" ? "border-red-200 bg-red-50 text-red-700" : "border-stone-200 bg-stone-50 text-stone-700"; return <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${cls}`}>{children}</span>; }
function StatCard({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-[10px] font-black uppercase tracking-[0.18em] text-stone-500">{label}</div><div className="mt-1 text-2xl font-black text-stone-950">{value}</div></div>; }
function Navigation({ ui, isDone, toggle, position = "top" }) { return <div className={`mb-6 flex flex-wrap items-center justify-between gap-3 ${position === "bottom" ? "mt-10" : ""}`}><a href="#/drd" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 shadow-sm hover:bg-stone-50">← {ui.dashboard}</a><div className="flex flex-wrap gap-2"><a href="#/lesson/m1-de-genes-ii" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 hover:bg-stone-50">← {ui.previousTitle}</a><a href="#/lesson/m1-samples-genes-ii" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 hover:bg-stone-50">{ui.nextTitle} →</a><button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? ui.done : ui.mark}</button></div></div>; }
function ResourceLinks({ ui }) { const links = [{ label: ui.slides, href: SLIDES_URL }, { label: ui.transcript, href: TRANSCRIPT_URL }, { label: ui.recording, href: RECORDING_URL }]; return <div className="mt-5 rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{ui.resources}</div><div className="mt-3 flex flex-wrap gap-2">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-black text-stone-700 hover:bg-red-50 hover:text-red-700">{link.label}</a>)}</div></div>; }
function SectionHeader({ eyebrow, title, children }) { return <div className="mb-6"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children ? <p className="mt-3 max-w-4xl text-base font-semibold leading-7 text-stone-600">{children}</p> : null}</div>; }
function NoteBox({ ui, children }) { return <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">{ui.professor}</div><p className="mt-2 text-sm font-bold leading-6 text-amber-950">{children}</p></div>; }
function ExamWatch({ ui, data }) { if (!data) return null; return <details className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4"><summary className="cursor-pointer text-sm font-black text-red-800">{ui.exam}: {data.q}</summary><div className="mt-4 grid gap-3 lg:grid-cols-3"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{ui.include}</div><ul className="mt-2 list-disc space-y-1 pl-4 text-sm font-semibold leading-6 text-stone-700">{data.include.map((x) => <li key={x}>{x}</li>)}</ul></div><div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{ui.trap}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{data.trap}</p></div><div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{ui.model}</div><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{data.answer || "Use the slide concept, connect it to design/metric choice, and close with biological interpretation."}</p></div></div></details>; }
function SlideCard({ ui, item, openZoom, spanFull }) { const figure = IMG[item.img]; if (!figure) return null; return <article className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm ${spanFull ? "md:col-span-2" : ""}`}><button onClick={() => openZoom({ ...figure, title: item.title })} className="group block w-full border-b border-stone-200 bg-white p-3 text-left"><div className={`${spanFull ? "aspect-[16/9]" : "aspect-[4/3]"} overflow-hidden rounded-2xl bg-white`}><img src={figure.src} alt={item.title} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></div></button><div className="p-5"><div className="flex flex-wrap items-center gap-2"><Pill tone="red">{ui.slide} {figure.slide}</Pill><span className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">{ui.zoom}</span></div><h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>{item.professor ? <NoteBox ui={ui}>{item.professor}</NoteBox> : null}<ExamWatch ui={ui} data={item.exam}/></div></article>; }
function SlideGrid({ ui, slides, openZoom }) { return <div className="grid gap-5 md:grid-cols-2">{slides.map((item, idx) => <SlideCard key={`${item.img}-${idx}`} ui={ui} item={item} openZoom={openZoom} spanFull={slides.length % 2 === 1 && idx === slides.length - 1}/>)}</div>; }
function ZoomModal({ ui, zoom, setZoom }) { if (!zoom) return null; return <div className="fixed inset-0 z-50 grid place-items-center bg-stone-950/80 p-4" onClick={() => setZoom(null)}><div className="max-h-[92vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{ui.slide} {zoom.slide}</div><h3 className="text-xl font-black text-stone-950">{zoom.title}</h3></div><button onClick={() => setZoom(null)} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white">{ui.close}</button></div><img src={zoom.src} alt={zoom.title} className="w-full rounded-2xl border border-stone-200 bg-white" /></div></div>; }
function InteractiveShell({ title, intro, children }) { return <div className="mt-6 rounded-[2rem] border border-stone-200 bg-stone-50 p-5"><h3 className="text-2xl font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{intro}</p><div className="mt-5">{children}</div></div>; }
function ResultBox({ label, value, tone = "red" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-white"}`}><div className="text-[10px] font-black uppercase tracking-[0.18em] text-stone-500">{label}</div><div className="mt-1 text-lg font-black text-stone-950">{value}</div></div>; }

function MatrixLab({ lab }) { const [answers, setAnswers] = useState({}); return <InteractiveShell title={lab.title} intro={lab.intro}><div className="grid gap-3">{lab.items.map((item, i) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-white p-4"><p className="font-black text-stone-950">{item.q}</p><div className="mt-3 flex gap-2"><button onClick={() => setAnswers({ ...answers, [i]: "genes" })} className={`rounded-full border px-4 py-2 text-sm font-black ${answers[i] === "genes" ? (item.a === "genes" ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700"}`}>{lab.genes}</button><button onClick={() => setAnswers({ ...answers, [i]: "samples" })} className={`rounded-full border px-4 py-2 text-sm font-black ${answers[i] === "samples" ? (item.a === "samples" ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700"}`}>{lab.samples}</button></div>{answers[i] ? <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">{item.why}</p> : null}</div>)}</div></InteractiveShell>; }
function DistanceLab({ lab }) { const [answers, setAnswers] = useState({}); return <InteractiveShell title={lab.title} intro={lab.intro}><div className="grid gap-3 md:grid-cols-3">{lab.items.map((item, i) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-white p-4"><p className="min-h-[72px] text-sm font-black leading-6 text-stone-950">{item.q}</p><div className="mt-3 flex gap-2"><button onClick={() => setAnswers({ ...answers, [i]: true })} className={`rounded-full border px-3 py-1 text-xs font-black ${answers[i] === true ? (item.a ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700"}`}>True</button><button onClick={() => setAnswers({ ...answers, [i]: false })} className={`rounded-full border px-3 py-1 text-xs font-black ${answers[i] === false ? (!item.a ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700"}`}>False</button></div></div>)}</div></InteractiveShell>; }
function PearsonLab({ lab }) { const [r, setR] = useState(0.97); const distance = 1 - Math.abs(r); return <InteractiveShell title={lab.title} intro={lab.intro}><div className="grid gap-5 md:grid-cols-[1fr_1.2fr]"><div className="rounded-2xl border border-stone-200 bg-white p-5"><label className="text-sm font-black text-stone-700">{lab.rLabel}: {Number(r).toFixed(2)}<input type="range" min="-1" max="1" step="0.01" value={r} onChange={(e) => setR(Number(e.target.value))} className="mt-4 w-full" /></label><div className="mt-4 text-sm font-semibold text-stone-600">d = 1 − |{Number(r).toFixed(2)}| = {distance.toFixed(2)}</div></div><div className="grid gap-3"><ResultBox label={lab.dLabel} value={distance.toFixed(2)} /><ResultBox label={lab.meaning} value={pearsonMeaning(r)} tone="stone" /></div></div></InteractiveShell>; }
function MetricLab({ lab }) { const [answers, setAnswers] = useState({}); const options = ["Pearson", "Spearman", "Euclidean"]; return <InteractiveShell title={lab.title} intro={lab.intro}><div className="grid gap-3">{lab.items.map((item, i) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-white p-4"><p className="font-black text-stone-950">{item.q}</p><div className="mt-3 flex flex-wrap gap-2">{options.map((option) => <button key={option} onClick={() => setAnswers({ ...answers, [i]: option })} className={`rounded-full border px-3 py-1.5 text-xs font-black ${answers[i] === option ? (item.a === option ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700"}`}>{option}</button>)}</div>{answers[i] ? <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">{item.why}</p> : null}</div>)}</div></InteractiveShell>; }
function MDSLab({ lab }) { const [mode, setMode] = useState("euc"); const pts = mode === "euc" ? [[18, 70, "0.5 h"], [33, 56, "2 h"], [52, 48, "5 h"], [68, 28, "7 h"], [78, 26, "9 h"], [88, 32, "11 h"]] : [[16, 72, "0.5 h"], [24, 22, "2 h"], [56, 50, "5 h"], [70, 35, "7 h"], [77, 31, "9 h"], [82, 38, "11 h"]]; return <InteractiveShell title={lab.title} intro={lab.intro}><div className="mb-4 flex flex-wrap gap-2"><button onClick={() => setMode("euc")} className={`rounded-full px-4 py-2 text-sm font-black ${mode === "euc" ? "bg-red-700 text-white" : "border border-stone-200 bg-white text-stone-700"}`}>{lab.euc}</button><button onClick={() => setMode("cor")} className={`rounded-full px-4 py-2 text-sm font-black ${mode === "cor" ? "bg-red-700 text-white" : "border border-stone-200 bg-white text-stone-700"}`}>{lab.cor}</button></div><div className="rounded-2xl border border-stone-200 bg-white p-4"><svg viewBox="0 0 100 82" className="h-72 w-full"><line x1="8" y1="75" x2="95" y2="75" stroke="#a8a29e"/><line x1="8" y1="75" x2="8" y2="8" stroke="#a8a29e"/>{pts.map(([x, y, label]) => <g key={label}><circle cx={x} cy={y} r="3.8" fill="#dc2626"/><text x={x + 2} y={y - 3} fontSize="4" fill="#292524" fontWeight="700">{label}</text></g>)}</svg><p className="text-sm font-bold text-stone-600">{lab.note}</p></div></InteractiveShell>; }
function LinkageLab({ lab }) { const [method, setMethod] = useState("average"); const data = lab.methods[method]; return <InteractiveShell title={lab.title} intro={lab.intro}><div className="flex flex-wrap gap-2">{Object.entries(lab.methods).map(([key, item]) => <button key={key} onClick={() => setMethod(key)} className={`rounded-full px-4 py-2 text-sm font-black ${method === key ? "bg-red-700 text-white" : "border border-stone-200 bg-white text-stone-700"}`}>{item.name}</button>)}</div><div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-5"><h4 className="text-xl font-black text-stone-950">{data.name}</h4><p className="mt-2 text-sm font-bold leading-7 text-stone-700">{data.text}</p></div></InteractiveShell>; }
function BootstrapLab({ lab }) { const [total, setTotal] = useState(1000); const [recovered, setRecovered] = useState(950); const pct = total > 0 ? recovered / total * 100 : 0; return <InteractiveShell title={lab.title} intro={lab.intro}><div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-black text-stone-700">{lab.total}<input type="number" min="1" value={total} onChange={(e) => setTotal(Math.max(1, Number(e.target.value)))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3" /></label><label className="text-sm font-black text-stone-700">{lab.recovered}<input type="number" min="0" value={recovered} onChange={(e) => setRecovered(Math.max(0, Number(e.target.value)))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3" /></label></div><div className="mt-4 grid gap-3 md:grid-cols-2"><ResultBox label={lab.support} value={`${pct.toFixed(1)}%`} /><ResultBox label={lab.verdict} value={bootstrapVerdict(pct)} tone="stone" /></div></InteractiveShell>; }
function ZScoreLab({ lab }) { const [text, setText] = useState("10, 20, 30"); const vals = parseValues(text); const m = vals.length ? mean(vals) : 0; const s = vals.length ? sdPopulation(vals) : 0; const zs = vals.map((v) => s ? ((v - m) / s).toFixed(2) : "0.00"); return <InteractiveShell title={lab.title} intro={lab.intro}><label className="text-sm font-black text-stone-700">{lab.values}<input value={text} onChange={(e) => setText(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3" /></label><div className="mt-4 grid gap-3 md:grid-cols-3"><ResultBox label={lab.mean} value={m.toFixed(2)} /><ResultBox label={lab.sd} value={s.toFixed(2)} tone="stone" /><ResultBox label={lab.z} value={zs.join(", ")} tone="stone" /></div></InteractiveShell>; }
function Quiz({ ui, lab }) { const [answers, setAnswers] = useState({}); const score = lab.items.reduce((acc, item, i) => acc + (answers[i] === item.answer ? 1 : 0), 0); return <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><SectionHeader eyebrow={ui.checkpoint} title={lab.title}>Score: {score}/{lab.items.length}</SectionHeader><div className="grid gap-4 md:grid-cols-2">{lab.items.map((item, i) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><p className="font-black text-stone-950">{i + 1}. {item.q}</p><div className="mt-3 grid gap-2">{item.options.map((option, j) => <button key={option} onClick={() => setAnswers({ ...answers, [i]: j })} className={`rounded-xl border px-3 py-2 text-left text-sm font-bold ${answers[i] === j ? (j === item.answer ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-white text-stone-700"}`}>{option}</button>)}</div></div>)}</div></section>; }
function WrittenTrainer({ ui, lab }) { const [text, setText] = useState(""); const wc = text.trim() ? text.trim().split(/\s+/).length : 0; return <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><SectionHeader eyebrow={ui.exam} title={lab.title}>{lab.prompt}</SectionHeader><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={lab.placeholder} className="min-h-[220px] w-full rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-6 outline-none focus:border-red-300"/><div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{wc} {ui.words}</div><details className="mt-4 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"><summary className="cursor-pointer font-black text-red-800">{ui.model}</summary><p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{lab.model}</p></details></section>; }

export default function DRDLesson11({ lang = "es", isDone = false, toggle = () => {} }) {
  const ui = getUi(lang);
  const copy = getCopy(lang);
  const [zoom, setZoom] = useState(null);
  const sections = useMemo(() => copy.sections, [copy.sections]);
  const labs = copy.labs;
  const extras = { matrix: <MatrixLab lab={labs.matrix}/>, distance: <DistanceLab lab={labs.distance}/>, pearson: <PearsonLab lab={labs.pearson}/>, metric: <MetricLab lab={labs.metric}/>, mds: <MDSLab lab={labs.mds}/>, linkage: <LinkageLab lab={labs.linkage}/>, bootstrap: <BootstrapLab lab={labs.bootstrap}/>, zscore: <ZScoreLab lab={labs.zscore}/> };
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12 text-stone-900"><Navigation ui={ui} isDone={isDone} toggle={toggle}/>
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><HeroEyebrow>{ui.heroEyebrow}</HeroEyebrow><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{ui.heroTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{ui.heroSubtitle}</p><div className="mt-6 flex flex-wrap gap-2">{ui.tags.map((tag) => <Pill key={tag} tone={tag.toLowerCase().includes("pearson") ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={ui.module} value="1" tone="red"/><StatCard label={ui.writtenExam} value="4Q"/><StatCard label={ui.answerLines} value="10–12"/><StatCard label={ui.core} value="near/far" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{ui.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{ui.bigIdeaText}</p></div><ResourceLinks ui={ui}/></div></div></div></section>
    {sections.map((section, idx) => <section key={section.title} className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={`Part ${idx + 1}`} title={section.title}>{section.intro}</SectionHeader><SlideGrid ui={ui} slides={section.slides} openZoom={setZoom}/>{section.extra ? extras[section.extra] : null}</section>)}
    <Quiz ui={ui} lab={labs.quiz}/><WrittenTrainer ui={ui} lab={labs.written}/><Navigation ui={ui} isDone={isDone} toggle={toggle} position="bottom"/><ZoomModal ui={ui} zoom={zoom} setZoom={setZoom}/>
  </main>;
}

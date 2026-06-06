import React, { useMemo, useState } from "react";

const SLIDES_URL = "https://drive.google.com/file/d/1JSN_XP7mF2r39TUzdiSOMW2Rum5Ij7ya/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/13Wu08yLvUaTITj3PmAC8yupFHzC6g8_zXbmVaGxAsUA/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/playlist?list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV";

const UI = {
  en: {
    current: "Lesson 11",
    dashboard: "DRD dashboard",
    previous: "Previous",
    next: "Next",
    previousTitle: "M1.6 Differentially expressed genes II",
    nextTitle: "M1.8 Samples and genes II",
    mark: "Mark completed",
    done: "Completed",
    resources: "Class resources",
    slides: "Slides",
    transcript: "Transcript",
    recording: "Recording playlist",
    slide: "Slide",
    zoom: "Open slide notes",
    close: "Close",
    professor: "Professor notes",
    exam: "Exam watch",
    expand: "Open expanded answer",
    include: "What to include",
    trap: "Common trap",
    model: "Sample answer",
    checkpoint: "Checkpoint",
    words: "words",
    module: "Module",
    writtenExam: "Written test",
    answerLines: "Answer lines",
    core: "Core idea",
    bigIdea: "Big idea",
    miniLab: "Mini-lab",
    correct: "Correct",
    notQuite: "Not quite",
    tryThis: "Try this",
    answer: "Answer",
    scenario: "Scenario",
    decision: "Decision",
    heroEyebrow: "Module 1 · June 5 · Relationship between samples and genes I",
    heroTitle: "From expression matrices to relationships, clusters and heatmaps",
    heroSubtitle: "A slide- and transcript-guided theoretical lesson on unsupervised analysis: similarity, distance metrics, MDS, hierarchical clustering, bootstrap validation and heatmap interpretation.",
    tags: ["unsupervised", "distance", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "After normalization and differential testing, the dataset is still a matrix. This lesson asks a different question: how do genes, probes or samples organize themselves when we let the data reveal similarity and dissimilarity?"
  },
  es: {
    current: "Lección 11",
    dashboard: "Dashboard DRD",
    previous: "Anterior",
    next: "Siguiente",
    previousTitle: "M1.6 Genes diferencialmente expresados II",
    nextTitle: "M1.8 Muestras y genes II",
    mark: "Marcar completada",
    done: "Completada",
    resources: "Recursos de clase",
    slides: "Slides",
    transcript: "Transcripción",
    recording: "Playlist de grabaciones",
    slide: "Diapo",
    zoom: "Abrir notas de diapo",
    close: "Cerrar",
    professor: "Anotaciones de la profesora",
    exam: "Ojo para examen",
    expand: "Abrir respuesta desarrollada",
    include: "Qué incluir",
    trap: "Trampa frecuente",
    model: "Respuesta modelo",
    checkpoint: "Checkpoint",
    words: "palabras",
    module: "Módulo",
    writtenExam: "Examen escrito",
    answerLines: "Líneas",
    core: "Idea clave",
    bigIdea: "Idea central",
    miniLab: "Mini-lab",
    correct: "Correcto",
    notQuite: "Casi",
    tryThis: "Prueba esto",
    answer: "Respuesta",
    scenario: "Escenario",
    decision: "Decisión",
    heroEyebrow: "Módulo 1 · 5 de junio · Relationship between samples and genes I",
    heroTitle: "De matrices de expresión a relaciones, clusters y heatmaps",
    heroSubtitle: "Lección teórica guiada por slides y transcripción sobre análisis no supervisado: similitud, métricas de distancia, MDS, clustering jerárquico, validación bootstrap e interpretación de heatmaps.",
    tags: ["unsupervised", "distance", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "Después de normalización y tests diferenciales, el dataset sigue siendo una matriz. Esta lección pregunta otra cosa: ¿cómo se organizan genes, probes o muestras cuando dejamos que los datos revelen similitud y disimilitud?"
  },
  fa: {
    current: "درس ۱۱",
    dashboard: "داشبورد DRD",
    previous: "قبلی",
    next: "بعدی",
    previousTitle: "M1.6 Differentially expressed genes II",
    nextTitle: "M1.8 Samples and genes II",
    mark: "علامت کامل‌شده",
    done: "کامل شد",
    resources: "منابع کلاس",
    slides: "اسلایدها",
    transcript: "رونوشت",
    recording: "فهرست ضبط‌ها",
    slide: "اسلاید",
    zoom: "باز کردن یادداشت اسلاید",
    close: "بستن",
    professor: "یادداشت استاد",
    exam: "نکته امتحان",
    expand: "باز کردن پاسخ کامل",
    include: "چه مواردی بیاوریم",
    trap: "اشتباه رایج",
    model: "پاسخ نمونه",
    checkpoint: "Checkpoint",
    words: "کلمه",
    module: "ماژول",
    writtenExam: "آزمون کتبی",
    answerLines: "خط پاسخ",
    core: "ایده اصلی",
    bigIdea: "ایده مرکزی",
    miniLab: "مینی‌لب",
    correct: "درست",
    notQuite: "نه کاملاً",
    tryThis: "امتحان کن",
    answer: "پاسخ",
    scenario: "سناریو",
    decision: "تصمیم",
    heroEyebrow: "Module 1 · June 5 · Relationship between samples and genes I",
    heroTitle: "From expression matrices to relationships, clusters and heatmaps",
    heroSubtitle: "A slide- and transcript-guided lesson on unsupervised analysis, distance metrics, MDS, hierarchical clustering, bootstrap validation and heatmaps.",
    tags: ["unsupervised", "distance", "Pearson", "Spearman", "MDS", "clustering", "heatmap"],
    bigIdeaText: "After normalization and differential tests, the dataset is still a matrix. Here we ask how genes, probes or samples organize themselves by similarity and dissimilarity."
  }
};

const COPY = {
  en: {
    sections: [
      {
        title: "1. Why relationships between samples and genes come after statistics",
        intro: "The professor starts by positioning this class after data processing, normalization and statistical testing. The goal now is exploratory: understand intrinsic relationships inside the dataset itself.",
        professor: "The class explicitly shifts from hypothesis tests toward exploratory techniques. Unsupervised methods do not start from labels or assumptions; they let the data organize itself and then require biological interpretation.",
        slides: [
          { n: 1, title: "Relationships between genes/samples", body: "Understanding intrinsic characteristics and relationships within the data itself: unsupervised analysis and data visualization." },
          { n: 2, title: "Similarity of gene or sample profiles", body: "The same matrix can be read in two directions: pairwise genes measured by all samples, or pairwise samples measured by all genes." },
          { n: 14, title: "Unsupervised analysis", body: "MDS, hierarchical clustering, k-means and PCA are exploratory approaches to understand whole-data structure." }
        ],
        exam: {
          q: "Why do we study relationships between genes and samples?",
          include: ["Start from the feature × sample matrix.", "Say this is unsupervised/exploratory analysis.", "Mention similarity/dissimilarity and visualization.", "Connect the result to biological interpretation, outliers or technical structure."],
          trap: "Do not say that unsupervised analysis proves differential expression. It complements the statistical tests.",
          answer: "After normalization and statistical testing, omics data are still organized as a matrix with genes or CpGs in rows and samples in columns. Differential tests identify individual features associated with conditions, but they do not describe the intrinsic structure of the dataset. Unsupervised analysis studies similarity and dissimilarity among samples or among genes without imposing a priori labels. If samples are close, they may share a phenotype, tissue, time point or batch; if genes are close, they may share a common expression or methylation profile. Therefore, these methods complement statistical testing and help generate biological interpretation."
        }
      },
      {
        title: "2. Similarity becomes distance",
        intro: "The class insists on a simple intuition: near means similar, far means dissimilar. To make this operational, gene or sample profiles are converted into distances.",
        professor: "Before formulas, the professor reviews basic geometry: distance cannot be negative, distance to itself is zero, distance is symmetric, and the triangle inequality matters when we place profiles in Cartesian-like spaces.",
        slides: [
          { n: 3, title: "Geometrical properties", body: "Distance is non-negative, zero only for identical profiles, symmetric, and constrained by the triangle inequality." },
          { n: 4, title: "Cartesian intuition", body: "Genes and samples are represented as profiles. Low distance means proximity and similarity; high distance means dissimilarity." }
        ],
        exam: {
          q: "How do similarity and distance relate in gene/sample profiles?",
          include: ["Define profiles as vectors across samples or genes.", "Explain near/far as similar/dissimilar.", "Mention that a distance matrix summarizes pairwise relationships.", "Add that metric choice affects the result."],
          trap: "Do not treat distance as a biological conclusion by itself. It is a numerical summary that needs interpretation.",
          answer: "A gene or sample profile can be represented as a vector of measurements. Similarity becomes measurable by defining a distance between two vectors. A small distance means that two profiles are close and therefore similar, while a large distance means dissimilarity. By computing all pairwise distances, we obtain a distance matrix that can be used for MDS, hierarchical clustering or heatmaps. However, the result depends on the chosen metric, so the biological interpretation must consider whether Pearson, Spearman or Euclidean distance is appropriate for the dataset."
        }
      },
      {
        title: "3. Pearson correlation distance: strong relationship, no causality",
        intro: "Pearson r measures a linear relationship between two profiles. In this lesson it is transformed into a distance using d = 1 − |r|, so strong positive and strong negative correlations both become close.",
        professor: "The professor explicitly says not to memorize the formula, but to understand the concept: Pearson studies covariance relative to variability, assumes linearity, gives r between −1 and +1, and correlation does not imply causality.",
        slides: [
          { n: 5, title: "Pearson r", body: "−1 is strong negative correlation, +1 strong positive correlation, 0 no correlation. It measures linear relationship, not causality." },
          { n: 6, title: "Convert r into distance", body: "Using d = 1 − |r|: r = −1 or +1 gives distance 0; r = 0 gives distance 1." },
          { n: 7, title: "DLBCL example", body: "In the Alizadeh DLBCL dataset, IGKC and NKG7 have r = 0.97, so d = 0.03: very similar profiles across patients." },
          { n: 8, title: "Limits", body: "Pearson can be strongly skewed by outliers. Significance can be assessed with a t statistic and df = n − 2." }
        ],
        exam: {
          q: "Explain Pearson correlation as a distance measure.",
          include: ["Define r and its range.", "Say Pearson assumes linearity and does not imply causality.", "Use d = 1 − |r|.", "Give the r = 0.97 → d = 0.03 example.", "Mention sensitivity to outliers and possible p-value."],
          trap: "Do not say that a negative correlation is far away if distance is defined with |r|. With d = 1 − |r|, r = −1 and r = +1 both give distance 0.",
          answer: "Pearson r quantifies the strength of a linear relationship between two gene or sample profiles. It ranges from −1 to +1: +1 means strong positive correlation, −1 strong negative correlation, and values near 0 indicate no linear correlation. In this lesson Pearson is converted into a distance using d = 1 − |r|. Therefore, both perfect positive and perfect negative correlations have distance 0, while uncorrelated profiles have distance near 1. For example, r = 0.97 gives d = 0.03, indicating very similar profiles. The limitation is that Pearson is sensitive to outliers and correlation does not imply causality."
        }
      },
      {
        title: "4. Spearman and Euclidean distance: the metric must fit the design",
        intro: "The professor then compares alternative metrics. Spearman is robust to outliers because it uses ranks, but ranks can erase direction in time-series designs. Euclidean distance is geometric and preserves opposite profiles, but depends on scaling.",
        professor: "There is no universal best metric. The class repeatedly says to compare metrics and choose according to data structure: outliers, scaling, time series and the biological question.",
        slides: [
          { n: 10, title: "Outliers affect Pearson", body: "In a yeast sporulation time series, an outlier can make Pearson distance misleading." },
          { n: 11, title: "Spearman correlation", body: "Measurements are replaced by ranks. This is non-parametric and robust to outliers, but direction of up/down regulation can be lost." },
          { n: 13, title: "Euclidean distance", body: "Calculated from coordinate differences; the larger the number, the greater the distance. Scaling changes Euclidean distance." },
          { n: 14, title: "Different strengths", body: "Pearson/Spearman may cluster opposite profiles as close; Euclidean can keep them far but may produce looser clusters." }
        ],
        exam: {
          q: "Compare Pearson, Spearman and Euclidean distance.",
          include: ["Pearson: linear, powerful, outlier-sensitive.", "Spearman: rank-based, robust to outliers, may lose direction.", "Euclidean: geometric, positive, scale-dependent.", "Say metric choice changes clustering/MDS."],
          trap: "Do not choose Spearman automatically for time series: ranking may lose the up/down temporal behavior that matters biologically.",
          answer: "Pearson correlation distance is useful when profiles have a linear relationship and data are normalized, but it is sensitive to outliers. Spearman is a non-parametric correlation based on ranks, so it is more robust to outliers and scale changes; however, in time-series data it may lose important up/down direction because true measurements are replaced by ranks. Euclidean distance has a direct geometrical meaning and can keep opposite profiles far apart, but it depends strongly on scaling. Because these metrics emphasize different aspects of the data, clustering or MDS should be interpreted together with the metric used."
        }
      },
      {
        title: "5. MDS: an algorithm, not a metric",
        intro: "Multidimensional scaling starts from a distance matrix and tries to place objects in 2D or 3D so that distances among points are preserved as much as possible.",
        professor: "A student asked whether MDS is another metric. The professor clarified: MDS is an algorithm, not a distance metric. The values on the axes are not the biological result; the important information is which profiles are close or far after mapping.",
        slides: [
          { n: 15, title: "MDS purpose", body: "Map distances from high-dimensional space into lower-dimensional space without too much loss of information." },
          { n: 16, title: "Triangular matrix", body: "Start from pairwise distances. MDS scales them into points in 2D or 3D." },
          { n: 17, title: "Compare metrics", body: "Euclidean and correlation distances can give similar or different MDS maps; this affects interpretation." }
        ],
        exam: {
          q: "What is MDS and how should it be interpreted?",
          include: ["Say it is an algorithm, not a metric.", "It starts from a distance matrix.", "It maps high-dimensional distances into low-dimensional coordinates.", "Interpret relative proximity, not axis values."],
          trap: "Do not interpret MDS axis numbers as gene-expression values. The distances between points are the key information.",
          answer: "Multidimensional scaling is an unsupervised visualization algorithm, not a metric. It starts from a matrix of pairwise distances, such as Euclidean or correlation distances, and places the objects in two- or three-dimensional space so that the distances among points are preserved as well as possible. It is useful because omics profiles are high-dimensional and difficult to visualize directly. In interpretation, the exact coordinate values are less important than the relative proximity: close points represent similar profiles and distant points represent dissimilar profiles."
        }
      },
      {
        title: "6. Hierarchical clustering: build a dendrogram from distances",
        intro: "Hierarchical clustering is presented as an agglomerative, bottom-up algorithm. It starts from the closest genes or samples and progressively joins them into clusters shown as a dendrogram.",
        professor: "The professor says hierarchical clustering is a possible exam question. The expected answer should state what the algorithm does, what task it solves, and how it helps identify similar genes or samples.",
        slides: [
          { n: 18, title: "Agglomerative clustering", body: "Similar profiles have low distance and appear close together with shorter branches in a dendrogram." },
          { n: 20, title: "Distance matrix", body: "The algorithm starts from a triangular distance matrix. The nearest pair is joined first." },
          { n: 22, title: "Linkage methods", body: "Single/minimum, complete/maximum, average/UPGMA and Ward define how distances between clusters are recalculated." },
          { n: 28, title: "Different results", body: "Different combinations of metric and linkage can produce different dendrograms; the best one must be evaluated biologically and statistically." }
        ],
        exam: {
          q: "Explain hierarchical clustering and linkage methods.",
          include: ["Define it as unsupervised and agglomerative/bottom-up.", "Start from a distance matrix.", "Explain dendrogram, nodes and branch lengths.", "Mention linkage methods and different results.", "Add that clusters need validation."],
          trap: "Do not read only left-right order in the dendrogram. Branch length and node height carry the distance information.",
          answer: "Hierarchical clustering is an unsupervised agglomerative algorithm that starts from a distance matrix and progressively joins the closest genes or samples. The result is a dendrogram, where short branches indicate proximity and similarity, while long branches indicate greater distance. After the first pair is joined, the distance between a new cluster and other objects must be recalculated using a linkage method such as single, complete, average or Ward. Different metrics and linkage methods can produce different dendrograms, so the result must be interpreted carefully and, when possible, validated statistically."
        }
      },
      {
        title: "7. Bootstrap validation and heatmaps",
        intro: "The final part connects cluster stability with visualization. Bootstrap validation asks whether a node or cluster is reproducible, while heatmaps make gene/sample structure visually readable.",
        professor: "Heatmap is another likely exam question. The professor emphasizes that the legend is essential: colors may represent z-scores, fold changes or another statistic, so red/green cannot be interpreted without the legend.",
        slides: [
          { n: 33, title: "Bootstrap validation", body: "Repeat hierarchical clustering on bootstrap datasets and calculate how often a cluster is recovered." },
          { n: 34, title: "Bootstrap support", body: "95% is very strong evidence, 80–95% good support, 70–80% moderate, and below 70% weak support." },
          { n: 35, title: "Heatmap", body: "Rows usually represent genes, columns samples, and colors show relative expression or statistics such as up/down regulation." },
          { n: 36, title: "Z-score", body: "Zij = (xij − μi) / σi: expression of gene i in sample j minus the mean of that gene across samples, divided by its standard deviation." },
          { n: 37, title: "DLBCL heatmap example", body: "A large heatmap plus dendrogram separates patient samples from other lymphocyte or lymphoma-related samples, generating new biological questions." }
        ],
        exam: {
          q: "Why are bootstrap validation and heatmaps useful after clustering?",
          include: ["Bootstrap checks stability/reproducibility of clusters.", "Support is percentage of times a node is recovered.", "Heatmap displays matrix values with colors plus dendrograms.", "Explain z-score or fold-change legend.", "Warn that colors are relative and legend-dependent."],
          trap: "Do not say color always means the same thing. In one heatmap red may be up-regulation; in another it may be down-regulation, depending on the legend.",
          answer: "Bootstrap validation evaluates whether a cluster or dendrogram node is stable. The dataset is resampled many times, hierarchical clustering is repeated, and the percentage of replicates in which the same cluster appears is reported as bootstrap support. High support, for example around 95%, suggests a reproducible cluster, while low support raises doubts about the metric or linkage choice. Heatmaps complement this by displaying the gene × sample matrix as colors, often together with dendrograms. The interpretation depends on the legend: colors may represent z-scores, fold changes or another statistic, so heatmaps show relative patterns, not absolute biological truth by themselves."
        }
      }
    ],
    labs: {
      pearson: {
        title: "Pearson r → distance",
        intro: "The slide example uses r = 0.97 and d = 1 − |r|, giving d = 0.03.",
        rLabel: "Pearson r",
        distance: "distance d",
        veryClose: "very close / very similar",
        moderate: "intermediate distance",
        far: "far / dissimilar",
        hint: "Because the absolute value is used, both strong positive and strong negative correlations become short distances."
      },
      metric: {
        title: "Choose the metric",
        intro: "Pick the most defensible metric for each situation.",
        options: ["Pearson", "Spearman", "Euclidean"],
        items: [
          { prompt: "Normalized profiles, expected linear co-variation, no major outliers.", answer: "Pearson", why: "Pearson is powerful for linear relationships, but only if outliers are not driving the result." },
          { prompt: "Profiles contain outliers and you mainly care about monotonic rank order.", answer: "Spearman", why: "Spearman replaces measurements by ranks and is more robust to outliers." },
          { prompt: "Time-series genes show opposite up/down trends and direction must be preserved.", answer: "Euclidean", why: "Euclidean can keep opposite profiles far, while Spearman may lose direction after ranking." }
        ]
      },
      mds: {
        title: "MDS interpretation",
        intro: "Select the pair that should be interpreted as most similar in a 2D MDS map.",
        pairs: ["A–B: close points", "A–D: far points", "B–C: medium distance"],
        answer: "A–B: close points",
        why: "In MDS, axis values are not the main biological message. Relative distance between points is what matters."
      },
      bootstrap: {
        title: "Bootstrap support",
        intro: "Compute cluster support from recovered replicates / total replicates × 100.",
        recovered: "Recovered replicates",
        total: "Total replicates",
        support: "support",
        veryStrong: "very strong evidence",
        good: "good support",
        moderate: "moderate support",
        weak: "weak support"
      },
      zscore: {
        title: "Heatmap z-score",
        intro: "Compute how many standard deviations each gene value is above or below its gene mean across samples.",
        values: "Gene values across samples",
        mean: "mean",
        sd: "SD",
        zscores: "z-scores",
        interpretation: "Positive means higher than that gene average, near 0 means near average, negative means lower than average."
      }
    },
    quiz: [
      { q: "Unsupervised analysis mainly means…", options: ["letting data structure emerge before assigning interpretation", "testing one pre-defined gene only", "normalizing raw TIFF files"], answer: 0 },
      { q: "With d = 1 − |r|, r = −1 gives…", options: ["distance 2", "distance 1", "distance 0"], answer: 2 },
      { q: "Spearman is useful with outliers because…", options: ["it uses ranks", "it ignores sample size", "it is a heatmap color scale"], answer: 0 },
      { q: "MDS is…", options: ["a metric", "an algorithm for mapping distances", "a post-hoc ANOVA test"], answer: 1 },
      { q: "Single linkage may cause…", options: ["chaining", "bisulfite conversion", "FDR correction"], answer: 0 },
      { q: "Heatmap colors should be interpreted…", options: ["only with the legend", "always as absolute expression", "without the dendrogram"], answer: 0 }
    ]
  },
  es: {
    sections: [
      {
        title: "1. Por qué las relaciones entre muestras y genes vienen después de la estadística",
        intro: "La profesora empieza ubicando esta clase después del procesamiento, la normalización y los tests estadísticos. Ahora el objetivo es exploratorio: entender las relaciones intrínsecas dentro del dataset.",
        professor: "La clase cambia explícitamente de los tests de hipótesis hacia técnicas exploratorias. Los métodos no supervisados no parten de etiquetas ni supuestos previos: dejan que los datos se organicen y luego exigen interpretación biológica.",
        slides: [
          { n: 1, title: "Relationships between genes/samples", body: "Entender características y relaciones intrínsecas dentro de los datos: análisis no supervisado y visualización." },
          { n: 2, title: "Similarity of gene or sample profiles", body: "La misma matriz puede leerse en dos direcciones: genes por pares medidos en todas las muestras, o muestras por pares medidas por todos los genes." },
          { n: 14, title: "Unsupervised analysis", body: "MDS, hierarchical clustering, k-means y PCA son enfoques exploratorios para entender la estructura global de los datos." }
        ],
        exam: {
          q: "¿Por qué estudiamos relaciones entre genes y muestras?",
          include: ["Partir de la matriz feature × sample.", "Decir que es análisis no supervisado/exploratorio.", "Mencionar similitud/disimilitud y visualización.", "Conectar el resultado con interpretación biológica, outliers o estructura técnica."],
          trap: "No digas que el análisis no supervisado demuestra expresión diferencial. Complementa los tests estadísticos.",
          answer: "Después de la normalización y los tests estadísticos, los datos ómicos siguen organizados como una matriz con genes o CpGs en filas y muestras en columnas. Los tests diferenciales identifican features individuales asociadas a una condición, pero no describen la estructura intrínseca del dataset. El análisis no supervisado estudia la similitud y disimilitud entre muestras o entre genes sin imponer etiquetas a priori. Si las muestras están cerca, pueden compartir fenotipo, tejido, tiempo o batch; si los genes están cerca, pueden compartir un perfil de expresión o metilación. Por eso estos métodos complementan la estadística y ayudan a construir interpretación biológica."
        }
      },
      {
        title: "2. La similitud se convierte en distancia",
        intro: "La clase insiste en una intuición simple: cerca significa similar, lejos significa disimilar. Para operativizarlo, los perfiles de genes o muestras se convierten en distancias.",
        professor: "Antes de las fórmulas, la profesora repasa geometría básica: la distancia no puede ser negativa, la distancia de un perfil consigo mismo es cero, la distancia es simétrica y la desigualdad triangular importa cuando colocamos perfiles en espacios tipo cartesiano.",
        slides: [
          { n: 3, title: "Geometrical properties", body: "La distancia es no negativa, cero solo para perfiles idénticos, simétrica y limitada por la desigualdad triangular." },
          { n: 4, title: "Intuición cartesiana", body: "Genes y muestras se representan como perfiles. Distancia baja significa proximidad y similitud; distancia alta significa disimilitud." }
        ],
        exam: {
          q: "¿Cómo se relacionan similitud y distancia en perfiles gen/muestra?",
          include: ["Definir perfiles como vectores a través de muestras o genes.", "Explicar cerca/lejos como similar/disimilar.", "Mencionar que una matriz de distancias resume relaciones por pares.", "Añadir que la métrica elegida afecta el resultado."],
          trap: "No trates la distancia como conclusión biológica por sí sola. Es un resumen numérico que necesita interpretación.",
          answer: "Un perfil de gen o de muestra puede representarse como un vector de mediciones. La similitud se vuelve medible al definir una distancia entre dos vectores. Una distancia pequeña significa que dos perfiles están cerca y por tanto son similares, mientras que una distancia grande indica disimilitud. Al calcular todas las distancias por pares se obtiene una matriz de distancias que puede usarse para MDS, clustering jerárquico o heatmaps. Sin embargo, el resultado depende de la métrica elegida, por lo que la interpretación biológica debe considerar si Pearson, Spearman o Euclidean distance son adecuados para el dataset."
        }
      },
      {
        title: "3. Pearson correlation distance: relación fuerte, no causalidad",
        intro: "Pearson r mide una relación lineal entre dos perfiles. En esta lección se transforma en distancia usando d = 1 − |r|, de modo que correlaciones positivas fuertes y negativas fuertes se vuelven cercanas.",
        professor: "La profesora dice explícitamente que no quiere que memorices la fórmula, sino el concepto: Pearson estudia covarianza relativa a la variabilidad, asume linealidad, da r entre −1 y +1, y correlación no significa causalidad.",
        slides: [
          { n: 5, title: "Pearson r", body: "−1 es correlación negativa fuerte, +1 correlación positiva fuerte, 0 no correlación. Mide relación lineal, no causalidad." },
          { n: 6, title: "Convertir r en distancia", body: "Con d = 1 − |r|: r = −1 o +1 da distancia 0; r = 0 da distancia 1." },
          { n: 7, title: "Ejemplo DLBCL", body: "En el dataset DLBCL de Alizadeh, IGKC y NKG7 tienen r = 0.97, por tanto d = 0.03: perfiles muy similares entre pacientes." },
          { n: 8, title: "Límites", body: "Pearson puede sesgarse fuertemente por outliers. Su significancia se puede evaluar con t y df = n − 2." }
        ],
        exam: {
          q: "Explica Pearson correlation como medida de distancia.",
          include: ["Definir r y su rango.", "Decir que Pearson asume linealidad y no implica causalidad.", "Usar d = 1 − |r|.", "Dar el ejemplo r = 0.97 → d = 0.03.", "Mencionar sensibilidad a outliers y posible p-value."],
          trap: "No digas que una correlación negativa es lejana si la distancia se define con |r|. Con d = 1 − |r|, r = −1 y r = +1 dan distancia 0.",
          answer: "Pearson r cuantifica la fuerza de una relación lineal entre dos perfiles de genes o muestras. Su rango va de −1 a +1: +1 significa correlación positiva fuerte, −1 correlación negativa fuerte y valores cercanos a 0 ausencia de correlación lineal. En esta lección Pearson se convierte en distancia mediante d = 1 − |r|. Por eso tanto una correlación positiva perfecta como una negativa perfecta tienen distancia 0, mientras que perfiles no correlacionados tienen distancia cercana a 1. Por ejemplo, r = 0.97 da d = 0.03, lo que indica perfiles muy similares. La limitación es que Pearson es sensible a outliers y que correlación no implica causalidad."
        }
      },
      {
        title: "4. Spearman y Euclidean distance: la métrica debe encajar con el diseño",
        intro: "Luego la profesora compara métricas alternativas. Spearman es robusto a outliers porque usa rangos, pero los rangos pueden borrar la dirección en series temporales. Euclidean distance es geométrica y conserva perfiles opuestos, pero depende del scaling.",
        professor: "No hay una métrica universalmente mejor. La clase repite que hay que comparar métricas y elegir según la estructura de los datos: outliers, scaling, series temporales y pregunta biológica.",
        slides: [
          { n: 10, title: "Outliers afectan Pearson", body: "En una serie temporal de esporulación de levadura, un outlier puede hacer engañosa la distancia basada en Pearson." },
          { n: 11, title: "Spearman correlation", body: "Las mediciones se sustituyen por rangos. Es no paramétrico y robusto a outliers, pero puede perderse la dirección up/down." },
          { n: 13, title: "Euclidean distance", body: "Se calcula a partir de diferencias de coordenadas; cuanto mayor el número, mayor la distancia. El scaling cambia la distancia euclídea." },
          { n: 14, title: "Diferentes fortalezas", body: "Pearson/Spearman pueden agrupar como cercanos perfiles opuestos; Euclidean puede mantenerlos lejos, pero puede producir clusters más laxos." }
        ],
        exam: {
          q: "Compara Pearson, Spearman y Euclidean distance.",
          include: ["Pearson: lineal, potente, sensible a outliers.", "Spearman: basado en rangos, robusto a outliers, puede perder dirección.", "Euclidean: geométrico, positivo, dependiente de scaling.", "Decir que la métrica cambia clustering/MDS."],
          trap: "No elijas Spearman automáticamente en series temporales: el ranking puede perder el comportamiento temporal up/down que importa biológicamente.",
          answer: "Pearson correlation distance es útil cuando los perfiles tienen una relación lineal y los datos están normalizados, pero es sensible a outliers. Spearman es una correlación no paramétrica basada en rangos, por lo que es más robusta a outliers y cambios de escala; sin embargo, en series temporales puede perder dirección importante porque sustituye las mediciones reales por rangos. Euclidean distance tiene una interpretación geométrica directa y puede mantener perfiles opuestos como lejanos, pero depende mucho del scaling. Como estas métricas enfatizan aspectos distintos de los datos, cualquier clustering o MDS debe interpretarse junto con la métrica usada."
        }
      },
      {
        title: "5. MDS: un algoritmo, no una métrica",
        intro: "Multidimensional scaling parte de una matriz de distancias e intenta colocar objetos en 2D o 3D de forma que las distancias entre puntos se preserven lo mejor posible.",
        professor: "Una estudiante preguntó si MDS era otra métrica. La profesora aclaró: MDS es un algoritmo, no una distancia. Los valores de los ejes no son el resultado biológico; lo importante es qué perfiles quedan cerca o lejos después del mapeo.",
        slides: [
          { n: 15, title: "Objetivo de MDS", body: "Mapear distancias desde un espacio de alta dimensión a un espacio de menor dimensión sin demasiada pérdida de información." },
          { n: 16, title: "Matriz triangular", body: "Se parte de distancias por pares. MDS las escala a puntos en 2D o 3D." },
          { n: 17, title: "Comparar métricas", body: "Distancia euclídea y distancia de correlación pueden dar mapas MDS parecidos o distintos; eso afecta la interpretación." }
        ],
        exam: {
          q: "¿Qué es MDS y cómo se interpreta?",
          include: ["Decir que es un algoritmo, no una métrica.", "Parte de una matriz de distancias.", "Mapea distancias de alta dimensión a coordenadas de baja dimensión.", "Interpretar proximidad relativa, no valores de los ejes."],
          trap: "No interpretes los números de los ejes MDS como valores de expresión génica. La información clave son las distancias entre puntos.",
          answer: "Multidimensional scaling es un algoritmo de visualización no supervisado, no una métrica. Parte de una matriz de distancias por pares, como distancias euclídeas o de correlación, y coloca los objetos en un espacio de dos o tres dimensiones intentando preservar lo mejor posible las distancias originales. Es útil porque los perfiles ómicos son de alta dimensión y no se pueden visualizar directamente. En la interpretación, los valores exactos de las coordenadas importan menos que la proximidad relativa: puntos cercanos representan perfiles similares y puntos alejados representan perfiles disimilares."
        }
      },
      {
        title: "6. Hierarchical clustering: construir un dendrograma desde distancias",
        intro: "Hierarchical clustering se presenta como un algoritmo aglomerativo, bottom-up. Empieza desde los genes o muestras más cercanos y los va uniendo en clusters representados como dendrograma.",
        professor: "La profesora dice que hierarchical clustering es una posible pregunta de examen. La respuesta esperada debe decir qué hace el algoritmo, cuál es su tarea y cómo ayuda a identificar genes o muestras similares.",
        slides: [
          { n: 18, title: "Clustering aglomerativo", body: "Perfiles similares tienen baja distancia y aparecen juntos con ramas más cortas en un dendrograma." },
          { n: 20, title: "Distance matrix", body: "El algoritmo parte de una matriz triangular de distancias. El par más cercano se une primero." },
          { n: 22, title: "Linkage methods", body: "Single/minimum, complete/maximum, average/UPGMA y Ward definen cómo recalcular distancias entre clusters." },
          { n: 28, title: "Resultados diferentes", body: "Diferentes combinaciones de métrica y linkage pueden producir dendrogramas distintos; el mejor debe evaluarse biológica y estadísticamente." }
        ],
        exam: {
          q: "Explica hierarchical clustering y linkage methods.",
          include: ["Definirlo como no supervisado y aglomerativo/bottom-up.", "Partir de una matriz de distancias.", "Explicar dendrograma, nodos y longitud de ramas.", "Mencionar linkage methods y resultados diferentes.", "Añadir que los clusters necesitan validación."],
          trap: "No leas solo el orden izquierda-derecha del dendrograma. La longitud de ramas y altura de nodos contienen la información de distancia.",
          answer: "Hierarchical clustering es un algoritmo no supervisado y aglomerativo que parte de una matriz de distancias y une progresivamente los genes o muestras más cercanos. El resultado es un dendrograma, donde ramas cortas indican proximidad y similitud, mientras que ramas largas indican mayor distancia. Después de unir el primer par, la distancia entre el nuevo cluster y los demás objetos debe recalcularse usando un linkage method como single, complete, average o Ward. Distintas métricas y métodos de linkage pueden producir dendrogramas diferentes, por lo que el resultado debe interpretarse con cuidado y, si es posible, validarse estadísticamente."
        }
      },
      {
        title: "7. Bootstrap validation y heatmaps",
        intro: "La parte final conecta estabilidad de clusters con visualización. Bootstrap validation pregunta si un nodo o cluster es reproducible, mientras que los heatmaps hacen legible visualmente la estructura genes/muestras.",
        professor: "Heatmap es otra pregunta probable de examen. La profesora enfatiza que la leyenda es esencial: los colores pueden representar z-scores, fold changes u otro estadístico, así que rojo/verde no se interpreta sin leyenda.",
        slides: [
          { n: 33, title: "Bootstrap validation", body: "Repetir hierarchical clustering en datasets bootstrap y calcular cuántas veces se recupera un cluster." },
          { n: 34, title: "Bootstrap support", body: "95% es evidencia muy fuerte, 80–95% buen soporte, 70–80% moderado y menos de 70% débil." },
          { n: 35, title: "Heatmap", body: "Las filas suelen representar genes, las columnas muestras, y los colores muestran expresión relativa o estadísticas como up/down regulation." },
          { n: 36, title: "Z-score", body: "Zij = (xij − μi) / σi: expresión del gen i en la muestra j menos la media de ese gen en todas las muestras, dividido por su desviación estándar." },
          { n: 37, title: "Ejemplo DLBCL", body: "Un heatmap grande con dendrograma separa muestras de pacientes de otras muestras linfocitarias o relacionadas con linfoma, generando nuevas preguntas biológicas." }
        ],
        exam: {
          q: "¿Por qué son útiles bootstrap validation y heatmaps después del clustering?",
          include: ["Bootstrap revisa estabilidad/reproducibilidad de clusters.", "El soporte es porcentaje de veces que se recupera un nodo.", "Heatmap muestra la matriz con colores y dendrogramas.", "Explicar z-score o leyenda de fold-change.", "Advertir que los colores son relativos y dependen de la leyenda."],
          trap: "No digas que el color siempre significa lo mismo. En un heatmap rojo puede ser up-regulation; en otro puede ser down-regulation, según la leyenda.",
          answer: "Bootstrap validation evalúa si un cluster o nodo del dendrograma es estable. El dataset se remuestrea muchas veces, se repite el hierarchical clustering y se calcula en qué porcentaje de réplicas aparece el mismo cluster. Un soporte alto, por ejemplo alrededor de 95%, sugiere un cluster reproducible, mientras que un soporte bajo genera dudas sobre la métrica o el linkage elegido. Los heatmaps complementan esto mostrando la matriz gen × muestra mediante colores, a menudo junto con dendrogramas. La interpretación depende de la leyenda: los colores pueden representar z-scores, fold changes u otro estadístico, por lo que muestran patrones relativos, no una verdad biológica absoluta por sí solos."
        }
      }
    ],
    labs: {
      pearson: {
        title: "Pearson r → distancia",
        intro: "El ejemplo de la slide usa r = 0.97 y d = 1 − |r|, dando d = 0.03.",
        rLabel: "Pearson r",
        distance: "distancia d",
        veryClose: "muy cerca / muy similar",
        moderate: "distancia intermedia",
        far: "lejos / disimilar",
        hint: "Como se usa valor absoluto, tanto correlaciones positivas fuertes como negativas fuertes se vuelven distancias cortas."
      },
      metric: {
        title: "Elige la métrica",
        intro: "Escoge la métrica más defendible para cada situación.",
        options: ["Pearson", "Spearman", "Euclidean"],
        items: [
          { prompt: "Perfiles normalizados, co-variación lineal esperada y sin outliers fuertes.", answer: "Pearson", why: "Pearson es potente para relaciones lineales, pero solo si los outliers no dominan el resultado." },
          { prompt: "Los perfiles tienen outliers y te interesa sobre todo el orden monotónico por rangos.", answer: "Spearman", why: "Spearman sustituye mediciones por rangos y es más robusto a outliers." },
          { prompt: "Genes de una serie temporal muestran tendencias opuestas up/down y hay que preservar dirección.", answer: "Euclidean", why: "Euclidean puede mantener lejos perfiles opuestos, mientras Spearman puede perder dirección tras rankear." }
        ]
      },
      mds: {
        title: "Interpretación de MDS",
        intro: "Selecciona el par que debería interpretarse como más similar en un mapa MDS 2D.",
        pairs: ["A–B: puntos cercanos", "A–D: puntos lejanos", "B–C: distancia media"],
        answer: "A–B: puntos cercanos",
        why: "En MDS, los valores de los ejes no son el mensaje biológico principal. Lo que importa es la distancia relativa entre puntos."
      },
      bootstrap: {
        title: "Bootstrap support",
        intro: "Calcula el soporte de cluster como réplicas recuperadas / réplicas totales × 100.",
        recovered: "Réplicas recuperadas",
        total: "Réplicas totales",
        support: "soporte",
        veryStrong: "evidencia muy fuerte",
        good: "buen soporte",
        moderate: "soporte moderado",
        weak: "soporte débil"
      },
      zscore: {
        title: "Z-score de heatmap",
        intro: "Calcula cuántas desviaciones estándar está cada valor de gen por encima o debajo de su media en todas las muestras.",
        values: "Valores del gen en muestras",
        mean: "media",
        sd: "SD",
        zscores: "z-scores",
        interpretation: "Positivo significa mayor que la media de ese gen; cerca de 0 significa cerca de la media; negativo significa menor que la media."
      }
    },
    quiz: [
      { q: "El análisis no supervisado significa principalmente…", options: ["dejar emerger la estructura de datos antes de asignar interpretación", "testear solo un gen predefinido", "normalizar archivos TIFF crudos"], answer: 0 },
      { q: "Con d = 1 − |r|, r = −1 da…", options: ["distancia 2", "distancia 1", "distancia 0"], answer: 2 },
      { q: "Spearman es útil con outliers porque…", options: ["usa rangos", "ignora el tamaño muestral", "es una escala de color de heatmap"], answer: 0 },
      { q: "MDS es…", options: ["una métrica", "un algoritmo para mapear distancias", "un test post-hoc de ANOVA"], answer: 1 },
      { q: "Single linkage puede causar…", options: ["chaining", "conversión con bisulfito", "corrección FDR"], answer: 0 },
      { q: "Los colores de un heatmap se interpretan…", options: ["solo con la leyenda", "siempre como expresión absoluta", "sin dendrograma"], answer: 0 }
    ]
  }
};
COPY.fa = COPY.en;

const EXAM_BANK = {
  en: [
    { q: "Explain the goal of studying relationships between samples and genes.", a: COPY.en.sections[0].exam.answer },
    { q: "Explain Pearson correlation distance and its limitations.", a: COPY.en.sections[2].exam.answer },
    { q: "Compare Pearson, Spearman and Euclidean distance.", a: COPY.en.sections[3].exam.answer },
    { q: "What is multidimensional scaling and how do you interpret it?", a: COPY.en.sections[4].exam.answer },
    { q: "Explain hierarchical clustering, dendrograms and linkage methods.", a: COPY.en.sections[5].exam.answer },
    { q: "What is bootstrap validation of hierarchical clustering?", a: "Bootstrap validation tests the stability of clusters. A bootstrap dataset is generated by resampling observations or variables with replacement, hierarchical clustering is performed again, and the process is repeated many times, often around 1000 replicates. For each cluster or node, we calculate how often it is recovered. A high percentage, such as 95%, indicates very strong support; 80–95% is good, 70–80% moderate, and below 70% weak. It is useful because different metrics and linkage methods can generate different dendrograms, so cluster stability should be checked before strong biological interpretation." },
    { q: "Explain what a heatmap shows and how z-scores are used.", a: "A heatmap visualizes a gene × sample matrix using colors. Usually each row is a gene or feature and each column is a sample. The color intensity represents a statistic such as relative expression, fold change or z-score, so the legend is essential. A z-score is calculated for each gene in each sample as Zij = (xij − μi) / σi, where μi and σi are the mean and standard deviation of that gene across samples. Positive values mean higher than the gene average, values near zero mean close to average, and negative values mean lower than average. Heatmaps are often combined with dendrograms to visualize clusters." }
  ],
  es: [
    { q: "Explica el objetivo de estudiar relaciones entre muestras y genes.", a: COPY.es.sections[0].exam.answer },
    { q: "Explica Pearson correlation distance y sus limitaciones.", a: COPY.es.sections[2].exam.answer },
    { q: "Compara Pearson, Spearman y Euclidean distance.", a: COPY.es.sections[3].exam.answer },
    { q: "¿Qué es multidimensional scaling y cómo se interpreta?", a: COPY.es.sections[4].exam.answer },
    { q: "Explica hierarchical clustering, dendrogramas y linkage methods.", a: COPY.es.sections[5].exam.answer },
    { q: "¿Qué es bootstrap validation del hierarchical clustering?", a: "Bootstrap validation evalúa la estabilidad de los clusters. Se genera un dataset bootstrap remuestreando observaciones o variables con reemplazo, se repite el hierarchical clustering y el proceso se repite muchas veces, por ejemplo 1000 réplicas. Para cada cluster o nodo se calcula cuántas veces se recupera. Un porcentaje alto, como 95%, indica soporte muy fuerte; 80–95% buen soporte; 70–80% moderado; y menos de 70% débil. Es útil porque diferentes métricas y linkage methods pueden generar dendrogramas distintos, así que la estabilidad debe revisarse antes de hacer una interpretación biológica fuerte." },
    { q: "Explica qué muestra un heatmap y cómo se usan los z-scores.", a: "Un heatmap visualiza una matriz gen × muestra usando colores. Normalmente cada fila es un gen o feature y cada columna una muestra. La intensidad de color representa un estadístico, como expresión relativa, fold change o z-score, por lo que la leyenda es esencial. El z-score se calcula para cada gen en cada muestra como Zij = (xij − μi) / σi, donde μi y σi son la media y desviación estándar de ese gen a través de las muestras. Valores positivos indican más que la media del gen, valores cercanos a cero indican cercanía a la media y valores negativos indican menos que la media. Los heatmaps suelen combinarse con dendrogramas para visualizar clusters." }
  ]
};
EXAM_BANK.fa = EXAM_BANK.en;

function getUi(lang) { return UI[lang] || UI.es; }
function getCopy(lang) { return COPY[lang] || COPY.es; }
function tr(value, lang) { return typeof value === "string" ? value : (value?.[lang] || value?.es || value?.en || ""); }
function cx(...classes) { return classes.filter(Boolean).join(" "); }
function fmt(x, digits = 2) { return Number.isFinite(x) ? x.toFixed(digits).replace(/\.00$/, "") : "—"; }
function parseNums(text) { return String(text || "").split(/[\s,;]+/).map(Number).filter(Number.isFinite); }
function mean(values) { return values.length ? values.reduce((a, b) => a + b, 0) / values.length : NaN; }
function sd(values) { const m = mean(values); if (!values.length) return NaN; return Math.sqrt(values.reduce((a, b) => a + (b - m) ** 2, 0) / values.length); }
function supportLabel(pct, labs) { if (pct >= 95) return labs.veryStrong; if (pct >= 80) return labs.good; if (pct >= 70) return labs.moderate; return labs.weak; }

function HeroEyebrow({ children }) { return <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{children}</div>; }
function Pill({ children, tone = "stone" }) { const cls = tone === "red" ? "border-red-200 bg-red-50 text-red-700" : "border-stone-200 bg-white/80 text-stone-700"; return <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${cls}`}>{children}</span>; }
function StatCard({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">{label}</div><div className="mt-2 text-2xl font-black text-stone-950">{value}</div></div>; }
function SectionHeader({ eyebrow, title, children }) { return <div className="mb-6"><div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children ? <p className="mt-3 max-w-4xl text-base font-semibold leading-7 text-stone-600">{children}</p> : null}</div>; }

function ResourceLinks({ ui }) {
  const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-sm";
  return <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4">
    <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{ui.resources}</div>
    <div className="grid gap-2 sm:grid-cols-3">
      <a href={SLIDES_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-red-200 bg-red-50 text-red-800 hover:bg-white`}>{ui.slides}</a>
      <a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-200 bg-white text-stone-800 hover:bg-stone-50`}>{ui.transcript}</a>
      <a href={RECORDING_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-800 bg-stone-950 text-white hover:bg-red-700`}>{ui.recording}</a>
    </div>
  </div>;
}

function Navigation({ ui, isDone, toggle, position = "top" }) {
  return <nav className={`mb-6 flex flex-wrap items-center justify-between gap-3 ${position === "bottom" ? "mt-10" : ""}`}>
    <a href="#/drd" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 hover:bg-stone-50">← {ui.dashboard}</a>
    <div className="flex flex-wrap gap-2">
      <a href="#/lesson/m1-deg-ii" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 hover:bg-stone-50">← {ui.previous}: {ui.previousTitle}</a>
      <a href="#/drd" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-black text-stone-700 hover:bg-stone-50">{ui.next}: {ui.nextTitle} →</a>
      <button onClick={toggle} className={cx("rounded-full px-4 py-2 text-sm font-black", isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white hover:bg-red-700")}>{isDone ? ui.done : ui.mark}</button>
    </div>
  </nav>;
}

function SlideNoteCard({ ui, slide, open }) {
  return <button type="button" onClick={() => open(slide)} className="group rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 text-left transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-white hover:shadow-sm">
    <div className="flex items-center justify-between gap-3"><Pill tone="red">{ui.slide} {slide.n}</Pill><span className="text-xs font-black uppercase tracking-[0.16em] text-stone-400 group-hover:text-red-600">{ui.zoom}</span></div>
    <h3 className="mt-3 text-lg font-black leading-6 text-stone-950">{slide.title}</h3>
    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{slide.body}</p>
  </button>;
}
function SlideGrid({ ui, slides, open }) { return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{slides.map((slide) => <SlideNoteCard key={`${slide.n}-${slide.title}`} ui={ui} slide={slide} open={open}/>)}</div>; }

function ExamWatch({ ui, exam }) {
  const [open, setOpen] = useState(false);
  return <div className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 p-5">
    <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{ui.exam}</div>
    <p className="mt-2 text-lg font-black leading-7 text-stone-950">{exam.q}</p>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl bg-white/80 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{ui.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-bold leading-6 text-stone-700">{exam.include.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="rounded-2xl bg-white/80 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{ui.trap}</div><p className="mt-3 text-sm font-bold leading-6 text-stone-700">{exam.trap}</p></div>
    </div>
    <button onClick={() => setOpen(!open)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-700">{open ? ui.close : ui.expand}</button>
    {open && <div className="mt-4 rounded-2xl bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-red-700">{ui.model}</div><p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{exam.answer}</p></div>}
  </div>;
}

function ProfessorBox({ ui, children }) { return <div className="mt-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5"><div className="text-xs font-black uppercase tracking-[0.2em] text-amber-800">{ui.professor}</div><p className="mt-2 text-sm font-bold leading-7 text-stone-800">{children}</p></div>; }

function NumberInput({ label, value, setValue, min, max, step = "0.01" }) { return <label className="block"><span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</span><input type="number" value={value} min={min} max={max} step={step} onChange={(e) => setValue(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-lg font-black outline-none focus:border-red-300"/></label>; }
function ResultPill({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-white"}`}><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</div><div className="mt-2 text-2xl font-black text-stone-950">{value}</div></div>; }
function LabShell({ ui, title, intro, children }) { return <div className="mt-5 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{ui.miniLab}</div><h3 className="mt-2 text-2xl font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{intro}</p>{children}</div>; }

function PearsonLab({ ui, labs }) {
  const [r, setR] = useState("0.97");
  const rv = Math.max(-1, Math.min(1, Number(r)));
  const d = 1 - Math.abs(rv);
  const label = d < 0.1 ? labs.veryClose : d < 0.55 ? labs.moderate : labs.far;
  return <LabShell ui={ui} title={labs.title} intro={labs.intro}>
    <div className="mt-4 grid gap-4 md:grid-cols-[0.8fr_1.2fr]"><NumberInput label={labs.rLabel} value={r} setValue={setR} min="-1" max="1" step="0.01"/><div className="grid gap-3 md:grid-cols-2"><ResultPill label={labs.distance} value={fmt(d, 3)} tone="red"/><ResultPill label={ui.decision} value={label}/></div></div>
    <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700">{labs.hint}</p>
  </LabShell>;
}

function MetricLab({ ui, labs }) {
  const [answers, setAnswers] = useState({});
  return <LabShell ui={ui} title={labs.title} intro={labs.intro}>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">{labs.items.map((item, idx) => <article key={item.prompt} className="rounded-2xl border border-stone-200 bg-white p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{ui.scenario} {idx + 1}</div><p className="mt-2 min-h-24 text-sm font-bold leading-6 text-stone-800">{item.prompt}</p><div className="mt-3 grid gap-2">{labs.options.map((option) => <button key={option} onClick={() => setAnswers({ ...answers, [idx]: option })} className={cx("rounded-xl border px-3 py-2 text-left text-sm font-black", answers[idx] === option ? (option === item.answer ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700")}>{option}</button>)}</div>{answers[idx] && <p className="mt-3 text-sm font-semibold leading-6 text-stone-600"><span className="font-black">{answers[idx] === item.answer ? ui.correct : ui.notQuite}.</span> {item.why}</p>}</article>)}</div>
  </LabShell>;
}

function MdsLab({ ui, labs }) {
  const [selected, setSelected] = useState(labs.pairs[0]);
  return <LabShell ui={ui} title={labs.title} intro={labs.intro}>
    <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]"><div className="grid gap-2">{labs.pairs.map((pair) => <button key={pair} onClick={() => setSelected(pair)} className={cx("rounded-2xl border px-4 py-3 text-left text-sm font-black", selected === pair ? "border-red-200 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700")}>{pair}</button>)}</div><div className="rounded-2xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{selected === labs.answer ? ui.correct : ui.notQuite}</div><p className="mt-3 text-lg font-black leading-7">{labs.why}</p></div></div>
  </LabShell>;
}

function BootstrapLab({ ui, labs }) {
  const [recovered, setRecovered] = useState("955");
  const [total, setTotal] = useState("1000");
  const pct = Number(total) > 0 ? (Number(recovered) / Number(total)) * 100 : NaN;
  return <LabShell ui={ui} title={labs.title} intro={labs.intro}>
    <div className="mt-4 grid gap-4 md:grid-cols-2"><NumberInput label={labs.recovered} value={recovered} setValue={setRecovered}/><NumberInput label={labs.total} value={total} setValue={setTotal}/></div>
    <div className="mt-4 grid gap-3 md:grid-cols-2"><ResultPill label={labs.support} value={`${fmt(pct, 1)}%`} tone="red"/><ResultPill label={ui.decision} value={supportLabel(pct, labs)}/></div>
  </LabShell>;
}

function ZScoreLab({ ui, labs }) {
  const [values, setValues] = useState("10, 20, 30");
  const nums = parseNums(values);
  const m = mean(nums);
  const s = sd(nums);
  const z = nums.map((x) => s ? (x - m) / s : 0);
  return <LabShell ui={ui} title={labs.title} intro={labs.intro}>
    <label className="mt-4 block"><span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labs.values}</span><textarea value={values} onChange={(e) => setValues(e.target.value)} rows={3} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white p-4 text-sm font-bold outline-none focus:border-red-300"/></label>
    <div className="mt-4 grid gap-3 md:grid-cols-3"><ResultPill label={labs.mean} value={fmt(m, 2)}/><ResultPill label={labs.sd} value={fmt(s, 2)}/><ResultPill label={labs.zscores} value={z.map((v) => fmt(v, 2)).join(", ")} tone="red"/></div>
    <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-stone-700">{labs.interpretation}</p>
  </LabShell>;
}

function MiniLabs({ ui, copy }) { const labs = copy.labs; return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={ui.miniLab} title="Interactive reasoning labs">{ui.tryThis}: Pearson distance, metric choice, MDS interpretation, bootstrap support and heatmap z-scores.</SectionHeader><PearsonLab ui={ui} labs={labs.pearson}/><MetricLab ui={ui} labs={labs.metric}/><MdsLab ui={ui} labs={labs.mds}/><BootstrapLab ui={ui} labs={labs.bootstrap}/><ZScoreLab ui={ui} labs={labs.zscore}/></section>; }

function Quiz({ ui, copy }) {
  const [answers, setAnswers] = useState({});
  const items = copy.quiz;
  const score = items.reduce((acc, item, idx) => acc + (answers[idx] === item.answer ? 1 : 0), 0);
  return <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><SectionHeader eyebrow={ui.checkpoint} title="Interactive quiz">Score: {score}/{items.length}</SectionHeader><div className="grid gap-4 md:grid-cols-2">{items.map((item, idx) => <div key={item.q} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><p className="font-black text-stone-950">{idx + 1}. {item.q}</p><div className="mt-3 grid gap-2">{item.options.map((option, j) => <button key={option} onClick={() => setAnswers({ ...answers, [idx]: j })} className={cx("rounded-xl border px-3 py-2 text-left text-sm font-bold", answers[idx] === j ? (j === item.answer ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-white text-stone-700")}>{option}</button>)}</div></div>)}</div></section>;
}

function WrittenTrainer({ ui, lang }) {
  const questions = EXAM_BANK[lang] || EXAM_BANK.es;
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const wc = text.trim() ? text.trim().split(/\s+/).length : 0;
  const current = questions[idx];
  return <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><SectionHeader eyebrow={ui.exam} title="Written exam trainer">{questions.length} possible questions from this lesson</SectionHeader><div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]"><div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Prompts</div><div className="mt-3 grid gap-2">{questions.map((item, i) => <button key={item.q} onClick={() => { setIdx(i); setText(""); }} className={cx("rounded-2xl border px-4 py-3 text-left text-sm font-black", idx === i ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700")}>{i + 1}. {item.q}</button>)}</div></div><div><div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Selected prompt</div><p className="mt-2 text-lg font-black leading-7 text-stone-950">{current.q}</p></div><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your 10–12 line answer here…" className="mt-4 min-h-[230px] w-full rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-6 outline-none focus:border-red-300"/><div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{wc} {ui.words}</div><details className="mt-4 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"><summary className="cursor-pointer font-black text-red-800">{ui.model}</summary><p className="mt-3 text-sm font-semibold leading-7 text-stone-700">{current.a}</p></details></div></div></section>;
}

function ZoomModal({ ui, slide, onClose }) {
  if (!slide) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/75 p-4" role="dialog" aria-modal="true" onClick={onClose}>
    <div className="max-h-[92vh] w-[min(820px,94vw)] overflow-auto rounded-[2rem] bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between gap-3"><div><Pill tone="red">{ui.slide} {slide.n}</Pill><h3 className="mt-3 text-2xl font-black text-stone-950">{slide.title}</h3></div><button onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-red-700">{ui.close}</button></div>
      <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6"><p className="text-lg font-bold leading-8 text-stone-700">{slide.body}</p></div>
    </div>
  </div>;
}

export default function DRDLesson11({ lang = "es", isDone = false, toggle = () => {} }) {
  const ui = getUi(lang);
  const copy = getCopy(lang);
  const sections = useMemo(() => copy.sections, [copy]);
  const [zoom, setZoom] = useState(null);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12 text-stone-900">
    <Navigation ui={ui} isDone={isDone} toggle={toggle}/>
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><HeroEyebrow>{ui.heroEyebrow}</HeroEyebrow><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{ui.heroTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{ui.heroSubtitle}</p><div className="mt-6 flex flex-wrap gap-2">{ui.tags.map((tag) => <Pill key={tag} tone={tag === "distance" || tag === "MDS" || tag === "clustering" ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={ui.module} value="1" tone="red"/><StatCard label={ui.writtenExam} value="4Q"/><StatCard label={ui.answerLines} value="10–12"/><StatCard label={ui.core} value="MDS/HC" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{ui.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{ui.bigIdeaText}</p></div><ResourceLinks ui={ui}/></div></div></div></section>
    {sections.map((section, idx) => <section key={section.title} className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={`Part ${idx + 1}`} title={section.title}>{section.intro}</SectionHeader><SlideGrid ui={ui} slides={section.slides} open={setZoom}/><ProfessorBox ui={ui}>{section.professor}</ProfessorBox><ExamWatch ui={ui} exam={section.exam}/></section>)}
    <MiniLabs ui={ui} copy={copy}/>
    <Quiz ui={ui} copy={copy}/>
    <WrittenTrainer ui={ui} lang={lang}/>
    <Navigation ui={ui} isDone={isDone} toggle={toggle} position="bottom"/>
    <ZoomModal ui={ui} slide={zoom} onClose={() => setZoom(null)}/>
  </main>;
}

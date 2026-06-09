export const lessonContent = {
  id: "m1-samples-genes-ii",
  extractionStatus: "source-based-draft",
  objectives: [
    "Explain when K-means clustering is useful and why K must be chosen before running the algorithm.",
    "Describe the K-means loop: choose centroids, compute Euclidean distances, assign objects, recompute centroids and stop when assignments no longer change.",
    "Compare K-means with hierarchical clustering without mixing centroid-based grouping with dendrogram-based proximity.",
    "Explain PCA as dimensionality reduction for variance structure, not as a clustering method.",
    "Interpret PCA, heatmaps, DAVID/GO/KEGG annotation and volcano plots as different stages of biological interpretation after high-dimensional analysis.",
  ],
  coreConcepts: [
    {
      title: "K-means starts from a chosen K",
      body: "K is the number of clusters requested by the analyst. The method can be run with two, three, four or more clusters, but the result depends on that choice and on the initial centroids.",
      keywords: ["K", "centroids", "unsupervised"],
    },
    {
      title: "Centroids are moving means",
      body: "Each cluster has a center, usually called centroid. Genes or samples are assigned to the nearest centroid, then new centroids are recalculated from the original data of the assigned objects.",
      keywords: ["mean", "assignment", "iteration"],
    },
    {
      title: "Euclidean distance drives the simple example",
      body: "The class example uses seven genes with two conditions as X and Y coordinates. Distances from each gene to each centroid are calculated with Euclidean distance, and each gene joins the closest group.",
      keywords: ["Euclidean", "coordinates", "distance"],
    },
    {
      title: "K-means is not a dendrogram",
      body: "Unlike hierarchical clustering, K-means does not produce a hierarchy or relationship among clusters. It produces groups of similar expression profiles around centroids.",
      keywords: ["no hierarchy", "groups", "profiles"],
    },
    {
      title: "PCA summarizes variance, not clusters",
      body: "PCA rotates high-dimensional data into new orthogonal axes. PC1 captures the largest variance, PC2 captures the next largest independent variance, and so on.",
      keywords: ["PC1", "PC2", "variance"],
    },
    {
      title: "Functional interpretation comes after gene lists",
      body: "A list of up- and down-regulated genes is not yet a biological conclusion. DAVID, GO terms, KEGG pathways and volcano plots help connect significant genes to biological themes.",
      keywords: ["DAVID", "GO", "KEGG"],
    },
  ],
  professorEmphasis: [
    "The professor explicitly frames this lesson around when and why to apply the method, not memorizing formulas.",
    "For K-means, she wants the concept of K, centroid, Euclidean distance, reassignment and validation by rerunning with the same K.",
    "She stresses that PCA is not a clustering tool. It is exploratory dimensionality reduction used to identify variance components and hidden patterns.",
    "For heatmaps, she insists on reading both dendrograms: one can be samples and the other genes or probes.",
    "She warns that heatmap colors are meaningless unless the legend states what red, blue and grey actually mean.",
    "She says possible exam questions include PCA, heatmap, volcano plot, FDR/p-value correction and single-cell RNA-seq.",
  ],
  examTraps: [
    "Calling PCA a clustering method. It is not; it summarizes variance and reduces dimensionality.",
    "Writing only 'K-means groups genes' without explaining K, centroid choice, distance, iteration and stopping.",
    "Saying K-means and hierarchical clustering are equivalent. Their logic and outputs are different.",
    "Choosing K as if it were objective without mentioning prior knowledge, previous clustering or validation.",
    "Reading a heatmap without naming rows, columns, color scale and which dendrogram corresponds to samples versus genes.",
    "Listing significant genes without explaining pathway enrichment, GO terms, KEGG/BioCarta or a volcano plot interpretation.",
    "For volcano plots, forgetting that the y-axis is usually -log10 adjusted p-value and the x-axis is log fold change.",
  ],
  practice: [
    {
      title: "K-means in five verbs",
      body: "Choose K, initialize centroids, calculate distances, assign objects, recompute centroids, then repeat until no assignment changes.",
    },
    {
      title: "PCA answer skeleton",
      body: "Start from high-dimensional data, state that PCA reduces dimensions, name PC1/PC2 as variance axes, then explain what a visible separation suggests.",
    },
    {
      title: "Heatmap reading order",
      body: "First define rows, columns and color scale; then interpret sample dendrogram, gene dendrogram and possible outliers.",
    },
    {
      title: "Volcano plot reading order",
      body: "Read log fold change on x, -log10 adjusted p-value on y, then identify significant up- and down-regulated features.",
    },
  ],
  slideBlocks: [
    {
      range: "Slides 1-4",
      title: "K-means as unsupervised grouping",
      body: "The lesson opens by positioning K-means after the previous unsupervised tools. K-means partitions genes or samples into K groups around centroids.",
      professor: "The central question is not only what K-means is, but when and why to apply it.",
      exam: "Define K, centroid, nearest mean and non-deterministic initialization.",
    },
    {
      range: "Slides 5-21",
      title: "The seven-gene K=2 worked example",
      body: "Seven genes are treated as points with two expression coordinates. Initial centroids are chosen, Euclidean distances are calculated, objects are assigned, centroids are recalculated and the loop stops when clusters no longer change.",
      professor: "She repeats that distances are calculated using original data each time new centroids are produced.",
      exam: "A good answer can describe the algorithm without deriving every distance formula.",
    },
    {
      range: "Slides 22-24",
      title: "Back to budding yeast",
      body: "The yeast time-course example links K-means to the previous hierarchical clustering lesson. K=4 appears to fit the natural expression patterns better than K=2, while higher K can create one-gene clusters.",
      professor: "She uses this to explain over-clustering and the need for biological judgment.",
      exam: "Mention that K can be informed by previous analyses or known structure, then validated by rerunning.",
    },
    {
      range: "Slides 25-33",
      title: "PCA as variance-oriented dimensionality reduction",
      body: "PCA maps high-dimensional expression data into fewer dimensions. PC1 captures maximal variance, PC2 captures the next independent variance and the structure is preserved by rotation/projection.",
      professor: "She explicitly says PCA is not clustering; it is exploratory variance analysis.",
      exam: "Use the bottle analogy: the useful view is the one that captures the largest variability.",
    },
    {
      range: "Slides 34-40",
      title: "PCA in leukemia and DLBCL datasets",
      body: "PCA is applied to samples and to selected genes to see whether disease and healthy samples separate. NF-kB target probes improve interpretability and raise outlier questions.",
      professor: "The visual question is whether groups are immediately distinguishable and whether outliers deserve deeper inspection.",
      exam: "Interpret separation cautiously: phenotype, gene subset, outlier and technical explanations all matter.",
    },
    {
      range: "Slides 41-44",
      title: "Heatmaps plus biological annotation",
      body: "Heatmaps summarize expression patterns with row and column clustering. DAVID, GO and KEGG help move from gene lists to biological processes, molecular functions, cellular components and pathways.",
      professor: "A heatmap must be accompanied by a clear legend and biological interpretation.",
      exam: "Explain both dendrograms and state what colors represent before discussing clusters.",
    },
    {
      range: "Slides 45-47",
      title: "Volcano plot and GO slims",
      body: "A volcano plot combines effect size and significance: log fold change on x and -log10 adjusted p-value on y. GO slims provide a broad overview of ontology terms.",
      professor: "She points to volcano plots, adjusted p-values, FDR, Bonferroni and Benjamini-Hochberg as likely exam territory.",
      exam: "Connect volcano plot interpretation to multiple-testing correction and biological categories.",
    },
  ],
  checkpoints: [
    {
      question: "Why is K-means called non-deterministic?",
      answer: "Because it can start from random initial allocations or centroids. Different starts can lead to different final clusters, so results should be checked by repeating the analysis with the same K and by comparing with biological expectations or other clustering methods.",
    },
    {
      question: "How is K-means different from hierarchical clustering?",
      answer: "Hierarchical clustering progressively joins objects by proximity and produces a dendrogram. K-means requires a preselected K and assigns objects to centroid-based groups without producing hierarchy or relationships among the clusters.",
    },
    {
      question: "Why is PCA not a clustering tool?",
      answer: "PCA does not assign samples or genes to user-defined groups. It transforms the data into orthogonal components that capture decreasing amounts of variance, helping reveal trends, separations or outliers in high-dimensional data.",
    },
    {
      question: "What should you mention when interpreting a heatmap?",
      answer: "Define rows, columns, color scale and dendrograms. Then say whether clusters align with phenotype, tissue, batch or outliers, and avoid claiming biology before checking the legend and metadata.",
    },
    {
      question: "What does a volcano plot show?",
      answer: "It shows effect size on the x-axis, usually log fold change, and statistical evidence on the y-axis, usually -log10 adjusted p-value. Significant down- and up-regulated genes appear in the upper left and upper right regions.",
    },
    {
      question: "Why do DAVID, GO or KEGG matter after differential analysis?",
      answer: "Because hundreds of up- or down-regulated genes are hard to interpret as a raw list. Annotation and pathway tools identify enriched biological processes, molecular functions, cellular components and pathways that can support biological interpretation.",
    },
  ],
  checklistTitle: "10-12 line exam-answer checklist",
  reportChecklist: [
    "Open with the biological or exploratory purpose: structure, variance, grouping, pathway meaning or significant genes.",
    "Name the method and what it consumes: genes/samples, expression profiles, distances, variance axes or gene lists.",
    "Explain the key output: centroid clusters, PCs, dendrograms, heatmap colors, enrichment terms or volcano regions.",
    "State what must be checked before biological interpretation: K choice, metadata, outliers, legend, adjusted p-values or pathway context.",
    "Include one limitation: K-means depends on K and initialization; PCA is not clustering; heatmaps need legends; volcano plots need adjusted p-values.",
    "End with a cautious biological interpretation tied to phenotype, treatment, disease, tissue or pathway.",
  ],
};

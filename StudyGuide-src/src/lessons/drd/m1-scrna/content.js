export const lessonContent = {
  id: "m1-scrna",
  extractionStatus: "source-based-draft",
  objectives: [
    "Contrast bulk RNA-seq, sorted mini-bulk, single-cell RNA-seq and spatial transcriptomics.",
    "Explain the 10X Chromium droplet logic: one bead, one cell, one barcode and one isolated GEM reaction.",
    "Describe why UMIs are counted instead of raw reads after PCR amplification.",
    "Identify the main single-cell QC problems: empty droplets, ambient RNA, damaged/dead cells, stressed cells and doublets.",
    "Interpret a feature-barcode matrix, UMAP, marker-gene heatmap and cluster annotation without overclaiming.",
    "Connect TrailMaker exercises to biological interpretation in the MIS-C PBMC dataset.",
  ],
  coreConcepts: [
    {
      title: "Bulk RNA-seq is an average",
      body: "A tissue biopsy contains tumor, immune, endothelial, stromal and other cells. Bulk RNA-seq mixes their transcripts, so the result is a summed or averaged signal rather than a cell-type-resolved profile.",
      keywords: ["bulk", "average", "composition"],
    },
    {
      title: "Single-cell RNA-seq labels the cell of origin",
      body: "Droplet methods dissociate the sample, encapsulate cells in GEMs and attach a cell barcode to transcripts. Reads can then be assigned back to the barcode, which should correspond to a cell.",
      keywords: ["10X", "GEM", "barcode"],
    },
    {
      title: "UMIs protect molecule counting",
      body: "PCR can amplify some fragments more than others. UMIs tag original molecules before amplification, so duplicate reads with the same UMI are collapsed into one molecule count.",
      keywords: ["UMI", "PCR bias", "counts"],
    },
    {
      title: "Zeros are not always biological zeros",
      body: "Only part of the transcriptome is captured, about 30-32 percent in the lecture example. A zero can mean no expression, or simply that a transcript was missed: the dropout effect.",
      keywords: ["dropout", "sparsity", "sampling"],
    },
    {
      title: "QC selects real, useful cells",
      body: "The desired column is one barcode with one living, undamaged cell. Empty droplets, ambient RNA, doublets and stressed or dead cells must be filtered before interpretation.",
      keywords: ["empty droplets", "doublets", "mitochondrial reads"],
    },
    {
      title: "Clusters become biology through markers",
      body: "UMAP and clustering create structure, but labels require marker genes, heatmaps, known biology and sometimes automatic annotation against reference atlases.",
      keywords: ["UMAP", "markers", "annotation"],
    },
  ],
  professorEmphasis: [
    "The strongest contrast is bulk versus single-cell: bulk hides cell composition, while single-cell reveals which cell types are present and what each type expresses.",
    "Spatial transcriptomics is the next step because standard single-cell loses spatial information when the tissue is dissociated.",
    "The 10X barcode answers 'what cell?', the transcript alignment answers 'what gene?', and the UMI answers 'how many original molecules?'.",
    "Quality control is not optional because most matrix columns may correspond to empty droplets or low-quality events.",
    "Work with clusters to overcome dropout and contamination: one cell can miss CD3D, but the cluster transcriptome still supports a T-cell label.",
    "Automatic annotation is useful, but it must be checked against markers and the quality of the reference atlas.",
  ],
  examTraps: [
    "Saying single-cell preserves tissue position. It does not; dissociation destroys spatial context unless the method is spatial transcriptomics.",
    "Counting reads as transcript copies without mentioning UMIs and PCR bias.",
    "Treating every zero as absence of expression, ignoring dropout.",
    "Calling a barcode a cell without QC: empty droplets and doublets can also have barcodes.",
    "Naming clusters from one marker only. The professor explicitly says to check more than one marker.",
    "Overinterpreting a small cluster as a rare cell type before checking whether it is a contaminant or low-quality population.",
  ],
  practice: [
    {
      title: "Bulk vs single-cell decision",
      body: "Given a tumor biopsy question, decide whether bulk RNA-seq is enough or whether cell composition and cell-type-specific expression require single-cell.",
    },
    {
      title: "Barcode-UMI-gene sentence",
      body: "Write the three-part answer: barcode assigns the read to a cell, alignment assigns the read to a gene, UMI counts original molecules.",
    },
    {
      title: "QC triage",
      body: "Classify an event as empty droplet, doublet, damaged cell, stressed cell or good cell using total UMI, mitochondrial fraction and marker mixture.",
    },
    {
      title: "Cluster annotation",
      body: "Use marker genes to label CD14 monocytes, CD16 monocytes, T cells, B cells, NK cells, erythrocytes and platelets.",
    },
  ],
  slideBlocks: [
    {
      range: "Theory slides 1-4",
      title: "Transcriptome heterogeneity",
      body: "Cells share the same DNA but differ in RNA. Plasma cells can have high abundance and low heterogeneity; progenitors can have lower abundance and high heterogeneity.",
      professor: "The professor uses abundance and heterogeneity to explain why a cell transcriptome is not only 'which genes' but also 'how much'.",
      exam: "Define transcriptome as expressed genes plus expression level at a timepoint.",
    },
    {
      range: "Theory slides 5-9",
      title: "Bulk, single-cell and spatial logic",
      body: "Bulk mixes transcripts from all cell types. Sorting can create mini-bulk. Single-cell resolves cell types, while spatial transcriptomics keeps tissue position.",
      professor: "Single-cell has high molecular resolution but loses spatial information; spatial transcriptomics is named as the next revolution.",
      exam: "Use a biopsy example: tumor, immune, endothelial and stromal signals are averaged in bulk.",
    },
    {
      range: "Theory slides 10-16",
      title: "10X Chromium and GEM barcoding",
      body: "A droplet ideally contains one bead, one cell and reagents. Bead oligos carry a cell barcode, UMIs and poly(dT) to capture polyA mRNA.",
      professor: "The core mechanism is labeling transcripts before pooling: once the emulsion is broken, the barcode preserves cell origin.",
      exam: "Explain why poly(dT) captures mRNA and why barcodes allow pooled sequencing.",
    },
    {
      range: "Theory slides 17-23",
      title: "Feature-barcode matrix and QC",
      body: "Rows are genes and columns are barcodes. QC removes empty droplets, ambient RNA, dead or damaged cells, stressed cells and doublets.",
      professor: "She stresses that many columns are junk, so QC is the first real analysis step.",
      exam: "Mention droplet rank/UMIs, mitochondrial percentage and doublet detection as QC ideas.",
    },
    {
      range: "Theory slides 24-32",
      title: "Dimensional reduction, clustering and annotation",
      body: "PCA compresses variance; UMAP places similar cells together; graph-based clustering groups expression profiles; annotation uses markers or reference atlases.",
      professor: "Cluster labels are inferred biology, not raw output. Known and inferred markers must support the name.",
      exam: "Say that UMAP is visualization and clustering is labeling structure; neither alone gives cell identity.",
    },
    {
      range: "Workshop slides",
      title: "TrailMaker MIS-C PBMC analysis",
      body: "The workshop imports a COVID-19 MIS-C PBMC dataset, runs filtering/integration/UMAP, annotates clusters and compares acute versus convalescent samples.",
      professor: "Use cluster markers and plots to go from software output to a biological claim.",
      exam: "CD14 monocytes increase in convalescent samples and FCGR1A/CD64 is reduced in recovered MIS-C CD14 monocytes.",
    },
  ],
  checkpoints: [
    {
      question: "Why can bulk RNA-seq miss cell-type-specific signals?",
      answer: "Bulk RNA-seq mixes transcripts from all cells in the tissue. In a tumor biopsy, tumor cells, immune cells, endothelial cells and stromal cells all contribute to the same signal, so rare or cell-type-specific expression can be diluted by the dominant population.",
    },
    {
      question: "What does each part of the 10X read information tell us?",
      answer: "The 10X barcode identifies the cell or bead of origin, the transcript sequence is aligned to determine the gene, and the UMI identifies the original molecule so PCR duplicates can be collapsed into one count.",
    },
    {
      question: "Why are empty droplets not always truly empty?",
      answer: "They contain no intact cell, but ambient RNA from broken cells can enter droplets and attach to bead barcodes. That creates low-count matrix columns that must be distinguished from real cells during QC.",
    },
    {
      question: "Why is a doublet dangerous?",
      answer: "A doublet contains transcripts from more than one cell under the same barcode. If the cells are different types, the profile can look like an artificial intermediate cell state and mislead clustering or annotation.",
    },
    {
      question: "How should a cluster be annotated?",
      answer: "Use several marker genes, heatmap patterns, known biology, differential expression against other clusters and, if available, automatic annotation. A single marker is not enough because dropout and contamination can mislead individual cells.",
    },
    {
      question: "What biological result was reproduced in the MIS-C exercise?",
      answer: "The class reproduced the idea that CD14 monocytes increase in the convalescent sample and that FCGR1A, also called CD64 and linked to IgG receptor biology, is reduced in recovered MIS-C CD14 monocytes.",
    },
  ],
  checklistTitle: "Single-cell 10-12 line answer checklist",
  reportChecklist: [
    "Start with the biological question: average expression or cell-level heterogeneity.",
    "Contrast bulk, sorted mini-bulk, single-cell and spatial transcriptomics.",
    "Describe 10X/GEM: one bead, one cell, barcode, UMI and poly(dT).",
    "Explain the feature-barcode matrix: genes by barcodes with UMI counts.",
    "Include QC: empty droplets, ambient RNA, doublets, mitochondrial reads, damaged/dead cells.",
    "Mention dropout and why zeros are hard to interpret.",
    "Connect PCA/UMAP/clustering to marker-based cell-type annotation.",
    "End with a cautious biological interpretation tied to composition or cell-type-specific differential expression.",
  ],
};

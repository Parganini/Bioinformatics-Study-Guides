export const lessonContent = {
  id: "m2-batch-clustering",
  extractionStatus: "structured-draft",
  objectives: [
    "Detect possible batch structure using PCA, heatmaps, clustering and metadata overlays.",
    "Explain why batch correction must be justified and not applied blindly.",
    "Describe how ComBat-like correction changes the interpretation of downstream DMP/DMR results.",
    "Connect visualization, clustering and final checks to a defensible team-report conclusion.",
  ],
  coreConcepts: [
    {
      title: "Batch is unwanted technical structure",
      body: "Batch effects are systematic differences caused by processing date, plate, chip, array position, operator or lab conditions rather than the biology under study.",
      keywords: ["plate", "chip", "operator"],
    },
    {
      title: "PCA can reveal hidden structure",
      body: "If samples separate by plate or processing date instead of phenotype, the main variance may be technical. PCA before and after correction is a useful report figure.",
      keywords: ["PCA", "metadata", "variance"],
    },
    {
      title: "Correction can remove signal if design is confounded",
      body: "If all cases are in one batch and all controls in another, batch and phenotype cannot be cleanly separated. Correction may remove biological signal or preserve technical bias.",
      keywords: ["confounding", "design", "ComBat"],
    },
    {
      title: "Final visualization is a verification step",
      body: "Heatmaps, clustering and PCA after correction help check whether the analysis is coherent before interpreting DMP/DMR results biologically.",
      keywords: ["heatmap", "clustering", "DMP/DMR"],
    },
  ],
  professorEmphasis: [
    "Batch correction is part of the argument in the report, not a magic cleaning button.",
    "Show before/after plots when correction changes the data structure.",
    "Never hide confounding; state it as a limitation if design prevents a clean separation.",
  ],
  examTraps: [
    "Applying ComBat without saying which variable was batch and which biological variable was preserved.",
    "Correcting away the phenotype because batch and group are perfectly confounded.",
    "Reporting a beautiful post-correction PCA without explaining what changed from the pre-correction PCA.",
  ],
  practice: [
    {
      title: "Metadata audit",
      body: "List every column that could be technical: Sentrix ID, array, slide, plate, processing date, operator and scan date.",
    },
    {
      title: "Before/after figure caption",
      body: "Write a caption comparing PCA before and after correction, naming both phenotype and batch overlays.",
    },
    {
      title: "Confounding check",
      body: "Make a two-way table of phenotype by batch and decide whether correction is interpretable.",
    },
  ],
  checkpoints: [
    {
      question: "Why can batch correction be dangerous in a confounded design?",
      answer: "If biological group and batch are aligned, the model cannot know which variation is technical and which is biological. Correction may remove true phenotype signal or fail to remove technical bias.",
    },
    {
      question: "What should a report show before claiming batch correction worked?",
      answer: "It should show the relevant metadata, a pre-correction visualization, the correction method and variables, and a post-correction visualization showing reduced technical structure without erasing biological contrast.",
    },
    {
      question: "What is the role of heatmaps after DMP/DMR analysis?",
      answer: "They help verify whether selected loci or regions separate samples in a coherent way and whether the pattern matches phenotype rather than obvious technical variables.",
    },
  ],
  checklistTitle: "Final report verification checklist",
  reportChecklist: [
    "Identify candidate batch variables from metadata.",
    "Show PCA/heatmap before correction with phenotype and batch overlays.",
    "State the correction method and preserved biological variable.",
    "Check whether phenotype and batch are confounded.",
    "Repeat PCA/heatmap after correction and explain what changed.",
    "Connect corrected structure to DMP/DMR interpretation and limitations.",
  ],
};

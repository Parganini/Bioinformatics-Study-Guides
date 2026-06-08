export const lessonContent = {
  id: "m1-affy",
  extractionStatus: "structured-draft",
  objectives: [
    "Contrast Affymetrix GeneChip arrays with Stanford competitive two-colour arrays.",
    "Explain how in situ photolithography builds probes directly on the chip.",
    "Distinguish features, probes, probe sets, PM probes and MM probes.",
    "Describe the DAT/CEL/CDF/CHP file flow and why CEL files are central for reanalysis.",
    "Explain RMA as background correction, quantile normalization and summarization.",
  ],
  coreConcepts: [
    {
      title: "Affymetrix is noncompetitive",
      body: "Each chip receives one biological sample and one fluorescence channel. This avoids Cy3/Cy5 dye competition, but comparisons now depend on making different chips comparable.",
      keywords: ["one-colour", "one sample", "between arrays"],
    },
    {
      title: "Photolithography replaces spotting",
      body: "Oligonucleotide probes are synthesized in situ on the chip using UV light, masks and protected reactive groups. Each feature contains many identical copies of one probe sequence.",
      keywords: ["in situ", "UV masks", "features"],
    },
    {
      title: "Probe sets summarize transcripts",
      body: "A transcript is represented by several probes distributed across the chip. The expression value is not a single spot intensity; it is a summarized value from a probe set.",
      keywords: ["probe set", "transcript", "summarization"],
    },
    {
      title: "PM/MM was designed to estimate nonspecific binding",
      body: "Perfect match probes target the intended sequence. Mismatch probes change the central base to estimate nonspecific signal, although modern workflows often avoid relying on MM subtraction.",
      keywords: ["PM", "MM", "binding"],
    },
    {
      title: "Files encode the measurement pipeline",
      body: "DAT is the scanner image, CEL stores processed feature intensities, CDF maps features to probes and probe sets, and CHP is a processed result file.",
      keywords: ["DAT", "CEL", "CDF", "CHP"],
    },
    {
      title: "RMA turns raw features into expression values",
      body: "RMA combines background correction, quantile normalization and model-based summarization so probe-level measurements become comparable transcript-level values.",
      keywords: ["RMA", "quantile", "expression"],
    },
  ],
  professorEmphasis: [
    "Study Affymetrix as a contrast with Stanford arrays: one sample per chip versus two samples on one chip.",
    "Do not describe GeneChip as a spotted array; the probes are synthesized directly on the chip.",
    "One-colour arrays avoid dye bias but still require normalization across arrays.",
    "CEL files are the key reusable input for many reanalysis workflows.",
    "RMA is a full preprocessing pipeline, not just one generic normalization button.",
    "MIAME/GEO matter because preprocessing choices must be documented for reuse.",
  ],
  examTraps: [
    "Saying one-colour arrays have no normalization problem.",
    "Calling Affymetrix probes spotted instead of synthesized in situ.",
    "Treating one feature as one transcript without mentioning probe sets.",
    "Confusing DAT image files with CEL intensity files.",
    "Explaining RMA without its three operations: background correction, quantile normalization and summarization.",
    "Using PM-MM subtraction as if it were always the preferred modern analysis.",
  ],
  practice: [
    {
      title: "Platform contrast",
      body: "Write a side-by-side answer comparing Stanford competitive arrays and Affymetrix noncompetitive GeneChips.",
    },
    {
      title: "File-flow drill",
      body: "Order DAT, CEL, CDF and CHP, then state what each file contributes to the analysis.",
    },
    {
      title: "PM/MM interpretation",
      body: "Change PM and MM intensities and decide whether the signal looks specific, ambiguous or dominated by nonspecific binding.",
    },
    {
      title: "RMA checklist",
      body: "For a CEL dataset, list the QC checks and preprocessing steps before differential-expression testing.",
    },
  ],
  checkpoints: [
    {
      question: "Why is Affymetrix called noncompetitive?",
      answer: "One sample is hybridized on one chip and measured in one colour channel. Expression comparisons are made across chips after preprocessing, rather than as two dyes competing on the same array.",
    },
    {
      question: "How are GeneChip probes manufactured?",
      answer: "They are synthesized directly on the chip by in situ photolithography. UV light and masks activate selected features so nucleotides can be added step by step.",
    },
    {
      question: "What is the role of a probe set?",
      answer: "A probe set groups multiple probes intended to represent the same transcript. Summarization combines those probe-level signals into one expression value.",
    },
    {
      question: "Which file is usually central for reanalysis and why?",
      answer: "The CEL file, because it stores processed feature-level intensities that can be imported into preprocessing pipelines such as RMA.",
    },
    {
      question: "What does RMA do?",
      answer: "RMA performs background correction, quantile normalization across arrays and summarization of probe-set measurements into expression values.",
    },
  ],
  checklistTitle: "GeneChip written-answer checklist",
  reportChecklist: [
    "Start with the contrast: Affymetrix is one-colour and noncompetitive.",
    "Mention in situ photolithographic synthesis, not spotting.",
    "Define feature, probe and probe set.",
    "Explain PM/MM only as part of probe-design logic.",
    "Order DAT, CEL, CDF and CHP correctly.",
    "Name QC before trusting CEL/RMA values.",
    "Define RMA as background correction, quantile normalization and summarization.",
    "Connect preprocessing documentation to MIAME/GEO reproducibility.",
  ],
};

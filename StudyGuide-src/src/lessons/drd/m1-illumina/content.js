export const lessonContent = {
  id: "m1-illumina",
  extractionStatus: "structured-draft",
  objectives: [
    "Explain the Illumina BeadArray idea and how random beads are optically decoded.",
    "Describe why bisulfite conversion turns methylation into a C-versus-T readout.",
    "Compare 27K, 450K and EPIC arrays by coverage and CpG context.",
    "Distinguish Infinium I and Infinium II chemistry.",
    "Calculate and interpret beta values while remembering probe-type bias and normalization.",
  ],
  coreConcepts: [
    {
      title: "BeadChips use many decoded beads",
      body: "Illumina arrays use beads in microwells/pits, with bead identity decoded optically. Multiple beads per probe improve robustness and make the platform different from fixed photolithographic features.",
      keywords: ["beads", "decoding", "replicates"],
    },
    {
      title: "Methylation is preserved by bisulfite conversion",
      body: "After bisulfite treatment, unmethylated cytosines are converted and read like T, while methylated cytosines remain C-like. The array turns methylation state into a genotyping-like signal.",
      keywords: ["bisulfite", "C/T", "CpG"],
    },
    {
      title: "Coverage evolved from 27K to 450K to EPIC",
      body: "Newer arrays cover more CpGs and more regulatory contexts, but they still sample the methylome. Platform version affects what can be compared across studies.",
      keywords: ["27K", "450K", "EPIC"],
    },
    {
      title: "Infinium I and II use different probe strategies",
      body: "Infinium I uses separate bead/probe designs for methylated and unmethylated states. Infinium II uses one probe and single-base extension to discriminate methylation state.",
      keywords: ["Infinium I", "Infinium II", "chemistry"],
    },
    {
      title: "Beta values are proportions, not final biology",
      body: "A beta value estimates methylation fraction from methylated and unmethylated signal. It is intuitive from 0 to 1, but affected by noise, tissue mixture and probe design.",
      keywords: ["beta", "M signal", "U signal"],
    },
    {
      title: "Probe-type bias requires normalization",
      body: "Infinium I and II probes have different distributions. NOOB, SWAN, functional normalization or quantile-like methods are used so technical structure does not masquerade as biology.",
      keywords: ["probe bias", "NOOB", "SWAN"],
    },
  ],
  professorEmphasis: [
    "The array does not directly see methyl groups after PCR; bisulfite conversion preserves the information as sequence differences.",
    "Do not memorize platform versions as trivia only; connect 27K/450K/EPIC to coverage and comparability.",
    "Beta values are easy to interpret, but their context matters: promoter, gene body, tissue mixture and cell composition.",
    "Infinium I and II chemistry differences are a major source of probe-type bias.",
    "Normalization is not optional before comparing methylation signals.",
    "Epigenetic clocks are useful biomarkers, but causality is not automatically proven.",
  ],
  examTraps: [
    "Saying bisulfite converts methylated cytosines instead of unmethylated cytosines.",
    "Treating beta value as a pure biological truth without mentioning signal, noise or cell mixture.",
    "Forgetting the denominator/offset logic in beta = M / (M + U + offset).",
    "Confusing Infinium I and Infinium II probe designs.",
    "Ignoring probe-type bias before DMP/DMR interpretation.",
    "Claiming methylation always silences genes without considering genomic context.",
    "Presenting epigenetic age biomarkers as fully resolved causal mechanisms.",
  ],
  practice: [
    {
      title: "Bisulfite logic",
      body: "Given a methylated and an unmethylated CpG, state what happens after bisulfite conversion and PCR.",
    },
    {
      title: "Beta calculation",
      body: "Calculate beta from methylated and unmethylated signal and interpret low, intermediate and high values.",
    },
    {
      title: "Infinium sorter",
      body: "Classify statements as Infinium I or Infinium II and explain the probe-design consequence.",
    },
    {
      title: "Normalization warning",
      body: "Explain why probe-type bias and tissue composition must be considered before calling DMPs or DMRs.",
    },
  ],
  checkpoints: [
    {
      question: "What does bisulfite conversion do to unmethylated cytosines?",
      answer: "Unmethylated cytosines are converted and ultimately read as T after PCR, while methylated cytosines are protected and remain C-like.",
    },
    {
      question: "Why is methylation-array readout described as genotyping-like?",
      answer: "Because after bisulfite conversion, methylation status at a CpG is represented as a C-versus-T sequence difference that probes can distinguish.",
    },
    {
      question: "What does a beta value estimate?",
      answer: "It estimates the fraction of methylated signal at a CpG, typically M divided by M plus U plus an offset. Values close to 0 are mostly unmethylated and values close to 1 are mostly methylated.",
    },
    {
      question: "How do Infinium I and Infinium II differ?",
      answer: "Infinium I uses separate probe/bead designs for methylated and unmethylated states. Infinium II uses one probe with single-base extension to discriminate the state.",
    },
    {
      question: "Why is normalization needed in methylation arrays?",
      answer: "Because probe type, background, dye/channel effects, batch structure and sample composition can create technical differences that must be reduced before biological interpretation.",
    },
  ],
  checklistTitle: "Methylation-array written-answer checklist",
  reportChecklist: [
    "Start with the BeadChip/bead-decoding platform idea.",
    "Explain bisulfite conversion: unmethylated C changes, methylated C remains protected.",
    "Connect C/T readout to methylation state at known CpGs.",
    "Mention 27K/450K/EPIC coverage and comparability.",
    "Define Infinium I versus Infinium II.",
    "Give the beta-value formula and interpretation.",
    "Name probe-type bias and normalization before DMP/DMR calls.",
    "Treat epigenetic clocks as biomarkers, not automatic causality.",
  ],
};

export const lessonContent = {
  id: "m1-stanford",
  extractionStatus: "structured-draft",
  objectives: [
    "Explain why Stanford-style microarrays are called competitive two-colour arrays.",
    "Distinguish target, probe, array support and reference sample in a spotted array experiment.",
    "Describe the Cy3/Cy5 workflow from RNA samples to merged image and raw intensity table.",
    "Identify dye bias, background, saturation, scratches, dust and irregular spots as technical artifacts.",
    "Use log2 ratios and MA-plots to reason about normalization quality before biological interpretation.",
  ],
  coreConcepts: [
    {
      title: "Competitive means two samples on one array",
      body: "Control and treated targets are labelled with different dyes, mixed and hybridized on the same spotted probes. The readout is a relative colour ratio, not an absolute expression measurement.",
      keywords: ["two-colour", "same chip", "ratio"],
    },
    {
      title: "Probe and target are not interchangeable",
      body: "The probe is fixed on the array support; the target is the labelled cDNA population generated from the biological sample. The target changes with the experiment, while the array contains the capture probes.",
      keywords: ["probe", "target", "support"],
    },
    {
      title: "Cy3/Cy5 create a useful signal and a bias",
      body: "Cy3 and Cy5 make differential expression visible, but they do not behave identically. Their chemical and optical differences create dye bias that must be checked experimentally and computationally.",
      keywords: ["Cy3", "Cy5", "dye bias"],
    },
    {
      title: "The image is already data",
      body: "Scanning, channel merging, background estimation, pixel summaries and software flags shape the raw data table. Bad images and bad spots cannot be rescued by downstream statistics.",
      keywords: ["TIFF", "pixels", "flags"],
    },
    {
      title: "Dye swap tests colour-related variability",
      body: "The same biological samples can be labelled in reverse dyes on a second array. If the dyes behaved perfectly, combined ratios would approach one, but real experiments produce a cloud.",
      keywords: ["dye swap", "technical", "cloud"],
    },
    {
      title: "MA-plots expose intensity-dependent bias",
      body: "M is the log2 ratio between channels and A is the average log intensity. A good normalized MA cloud is centered around M = 0 and roughly parallel to the x-axis.",
      keywords: ["M", "A", "normalization"],
    },
  ],
  professorEmphasis: [
    "When asked what competitive means, include two samples, one array, two dyes, two lasers and competition for the same probes.",
    "Always connect two-colour arrays to technical variability, especially dye bias and image-level QC.",
    "Visual inspection matters: scratches, dust, donuts, high background and saturation are not optional details.",
    "Do not treat positive/negative control spots as the same thing as a reference sample.",
    "MA-plot is explicitly high-yield: define M and A, then explain the expected normalized cloud.",
    "Normalization makes intensity distributions comparable; it does not claim that the biological results are identical.",
  ],
  examTraps: [
    "Saying the platform gives absolute expression instead of relative Cy5/Cy3 ratios.",
    "Confusing target with probe, or reference sample with QC control spots.",
    "Ignoring dye bias when describing Cy3/Cy5 experiments.",
    "Interpreting saturated or high-background spots as strong biology before QC.",
    "Removing every outlier automatically instead of deciding whether it is technical or biological.",
    "Defining MA-plot vaguely without M = log2(Cy5/Cy3) and A = average log intensity.",
    "Using fold-change thresholds as if they replaced statistical testing.",
  ],
  practice: [
    {
      title: "Workflow ordering",
      body: "Write the Stanford array workflow in order: biological question, two samples, RT plus labelling, competitive hybridization, scanning, QC, normalization.",
    },
    {
      title: "Artifact triage",
      body: "For each problem, decide whether it is a core platform feature, dye bias, image QC/filtering or normalization output.",
    },
    {
      title: "MA-plot reading",
      body: "Given M values before normalization, subtract the median M and describe whether the corrected cloud is closer to zero.",
    },
    {
      title: "Exam answer rehearsal",
      body: "Draft a 10-12 line answer explaining competitive arrays and why normalization is necessary.",
    },
  ],
  checkpoints: [
    {
      question: "Why is the Stanford platform called competitive?",
      answer: "Two labelled target populations, usually control and treated, are mixed on the same array and compete for the same fixed probes. The signal is the relative Cy5/Cy3 ratio for each spot.",
    },
    {
      question: "What does dye swap mainly estimate?",
      answer: "It estimates dye-related technical variability by reversing Cy3/Cy5 labels for the same biological samples. If dye behaviour were perfect, combined ratios would be near one.",
    },
    {
      question: "Why must image QC happen before normalization?",
      answer: "Because scratches, dust, donuts, high background, saturation and bad spot segmentation distort the raw intensity values. Normalization should not be asked to fix unusable measurements.",
    },
    {
      question: "What are M and A in an MA-plot?",
      answer: "M is the log2 ratio between the two channels, commonly log2(Cy5/Cy3). A is the average log intensity, often one half of log2Cy5 plus log2Cy3.",
    },
    {
      question: "What should a normalized MA-plot look like?",
      answer: "The cloud should be centered around M = 0 and roughly parallel to the x-axis, indicating that intensity-dependent dye bias has been reduced.",
    },
    {
      question: "What is the difference between a reference sample and positive/negative controls?",
      answer: "A reference sample is a biological sample used across arrays as a comparison anchor. Positive and negative controls are array-level QC spots used to check hybridization and acquisition.",
    },
  ],
  checklistTitle: "Competitive-array written-answer checklist",
  reportChecklist: [
    "State the biological question and the control/treated comparison.",
    "Define probe, target and spotted array support.",
    "Mention two samples, one chip, two dyes and two lasers.",
    "Explain that the readout is a relative Cy5/Cy3 ratio.",
    "Name dye bias and dye swap as technical-variability controls.",
    "Include visual/spot QC before any biological interpretation.",
    "Define M and A when discussing MA-plots.",
    "Say that normalization centers/comparabilizes intensity distributions before statistics.",
  ],
};

export const lessonContent = {
  id: "m2-batch-clustering",
  extractionStatus: "source-based-draft",
  objectives: [
    "Interpret heatmaps from methylation beta-value matrices using rows, columns, color scales, dendrograms and metadata color bars.",
    "Compare complete, single and average linkage as different hierarchical-clustering strategies.",
    "Connect heatmap clustering to phenotype, technical structure and report-ready interpretation.",
    "Reconstruct the first half of the final-report pipeline: load IDAT raw data, read the SampleSheet, create RGSet/MSet objects and extract red/green signals.",
    "Build a probe-level report table with red intensity, green intensity, Infinium type and relevant color channel.",
    "Evaluate sample quality using QC plots, negative controls and detection p-values before deciding whether to remove samples.",
    "Explain raw beta/M-value density plots and what a group-level shift can suggest.",
  ],
  coreConcepts: [
    {
      title: "Heatmap input is a matrix",
      body: "The practical starts from a beta-value matrix. Rows are CpG features and columns are samples; statistics are not required as heatmap input.",
      keywords: ["matrix", "beta values", "samples"],
    },
    {
      title: "Dendrograms depend on distance and linkage",
      body: "If distance or linkage is not specified, the function uses defaults. Complete linkage tends to produce compact clusters, while single linkage can create elongated structures.",
      keywords: ["Euclidean", "complete", "single"],
    },
    {
      title: "Metadata color bars make heatmaps interpretable",
      body: "A color bar can label samples by phenotype, such as disease versus control, so the dendrogram can be compared with known biology.",
      keywords: ["color bar", "phenotype", "legend"],
    },
    {
      title: "Warnings are not always errors",
      body: "The class repeatedly distinguishes warnings from fatal errors. A warning about extra files tells you to inspect paths and clean the base directory before continuing.",
      keywords: ["warning", "path", "list.files"],
    },
    {
      title: "QC is a layered argument",
      body: "A QC plot alone may flag low median intensity, but negative controls and detection p-values can show the samples are still usable.",
      keywords: ["QC plot", "negative controls", "detection p-value"],
    },
    {
      title: "Density plots become report evidence",
      body: "Raw beta and M-value distributions help compare control and disease groups and inspect global methylation patterns before downstream differential analysis.",
      keywords: ["beta values", "M values", "density"],
    },
  ],
  professorEmphasis: [
    "For heatmaps, first identify the matrix, rows, columns, color scale, dendrograms and metadata tracks before claiming biology.",
    "The practical is report training: do not only run code; comment each output as evidence for a decision.",
    "A warning message is a signal to inspect the folder or object, not a reason to panic.",
    "Do not remove samples from a single QC plot if negative controls and detection p-values support acceptable quality.",
    "Detection p-values ask whether probes are distinguishable from background; summarize failed probes per sample.",
    "When density plots for groups are similar, do not invent a dramatic result; describe the subtle shift and connect it cautiously to later analysis.",
  ],
  examTraps: [
    "Interpreting heatmap colors without reading the legend or beta-value scale.",
    "Saying clustering proves phenotype when the color bar or metadata could show another source of variance.",
    "Forgetting that samples are columns and probes/features are rows in the heatmap example.",
    "Subsetting a probe address without quotation marks, causing R to treat the number as an object rather than a string.",
    "Confusing rownames and colnames when adding sample names to a data frame.",
    "Removing five samples only because the QC plot looks bad, without checking negative controls and detection p-values.",
    "Using density() with NA values or corrupted objects and not regenerating clean group subsets.",
  ],
  practice: [
    {
      title: "Heatmap caption",
      body: "Write a caption that names rows, columns, beta-value color scale, sample dendrogram, feature dendrogram and phenotype color bar.",
    },
    {
      title: "Probe table reconstruction",
      body: "For one probe address, extract red and green intensities, Infinium design type and color channel, then format the result as a data frame.",
    },
    {
      title: "QC decision paragraph",
      body: "Explain why low median intensity is not enough to discard samples when negative controls and detection p-values are acceptable.",
    },
    {
      title: "Density interpretation",
      body: "Compare raw beta distributions for control and disease and state whether peaks suggest a global methylation shift.",
    },
  ],
  slideBlocks: [
    {
      range: "Opening heatmap block",
      title: "heatmap.2 with beta-value matrix",
      body: "The function takes a methylation matrix and optional arguments for color scale, row/column dendrograms, key, title and sample color bars.",
      professor: "The matrix is the main input; statistics are not needed for the heatmap itself.",
      report: "State that CpG beta values were visualized by heatmap and that sample clustering was compared against disease/control metadata.",
    },
    {
      range: "Linkage comparison",
      title: "Complete, single and average linkage",
      body: "Complete linkage compares the most different elements across groups and gives compact clusters; single linkage can create elongated structures; average sits between them.",
      professor: "The visible differences are easier on feature rows because there are many more CpG sites than samples.",
      report: "Name the selected linkage method and avoid treating the dendrogram as method-independent truth.",
    },
    {
      range: "Final report setup",
      title: "Load raw IDAT data with minfi",
      body: "The report begins by defining paths, checking the SampleSheet, reading raw methylation-array intensities and creating red/green data frames.",
      professor: "Use list.files when a warning suggests the folder contains unexpected files.",
      report: "Document the input folder, SampleSheet, read.metharray.exp step and generated RGSet/red/green objects.",
    },
    {
      range: "Probe-specific table",
      title: "Red, green, type and color",
      body: "A group-specific probe address is used to subset red and green intensities and to extract Infinium design type and color channel from the manifest.",
      professor: "The address must be a string; type II probes can have no single color-channel value.",
      report: "Build a data frame with sample names as rownames and columns for red, green, type and color.",
    },
    {
      range: "QC decision",
      title: "QC plot, negative controls and detection p-values",
      body: "Low median intensity alone flagged several samples, but negative controls and low numbers of failed detection p-values supported keeping the samples.",
      professor: "This is the model of how to comment each output: one plot raises a concern, the next checks decide whether it is real.",
      report: "Do not remove samples unless the combined QC evidence supports removal; state the reason.",
    },
    {
      range: "Density plots",
      title: "Raw beta/M-value group distributions",
      body: "Control and disease beta distributions are plotted together. Similar peaks mean no dramatic global difference, but subtle shifts can prepare the later DMP interpretation.",
      professor: "If distributions are similar, say so. A small shift is a cautious observation, not a final biological conclusion.",
      report: "Compare peaks and state whether the disease group shows lower or higher global methylation signal relative to controls.",
    },
  ],
  checkpoints: [
    {
      question: "What should you read first in a methylation heatmap?",
      answer: "Start with the matrix: rows are CpG features, columns are samples and colors represent beta values. Then read row and column dendrograms, the color key and any phenotype or batch color bars before interpreting clusters.",
    },
    {
      question: "Why does linkage method matter?",
      answer: "The linkage method defines how distances between groups are summarized during hierarchical clustering. Complete linkage tends to form compact clusters, single linkage can produce elongated groups, and average linkage lies between them.",
    },
    {
      question: "Why was list.files useful during the final-report walkthrough?",
      answer: "A warning indicated multiple or unexpected files in the base directory. list.files allowed the class to inspect the folder, identify the correct input directory and redefine the path cleanly before loading raw data.",
    },
    {
      question: "Why must a probe address be quoted in R subsetting?",
      answer: "Without quotation marks, R interprets the address-like number as an object or numeric expression rather than a row name string. Quoting it makes it a character identifier for subsetting rows.",
    },
    {
      question: "Why were the apparently low-intensity samples not removed immediately?",
      answer: "The QC plot alone used median intensities and did not evaluate background. Negative control probes were below the threshold and detection p-values showed very few failed probes, so the samples were still considered usable.",
    },
    {
      question: "What does detection p-value summarize in this context?",
      answer: "It tests whether probe signal is distinguishable from background. Counting probes with detection p-value above 0.05 per sample gives a direct table of failed probes for quality assessment.",
    },
  ],
  checklistTitle: "Final report lesson checklist",
  reportChecklist: [
    "Describe the heatmap input matrix, beta-value scale, sample columns and CpG rows.",
    "Name the clustering distance/linkage method and compare clusters to phenotype metadata.",
    "Define the raw-data path and verify contents before loading IDAT files.",
    "Use minfi to generate RGSet/MSet objects and red/green intensity tables.",
    "Quote probe addresses when subsetting and use manifest columns for Infinium type and color.",
    "Interpret QC in layers: QC plot, negative controls and detection p-values.",
    "Summarize failed detection p-values per sample rather than relying on visual impression.",
    "Plot beta/M-value densities by group and write a cautious biological interpretation.",
  ],
};

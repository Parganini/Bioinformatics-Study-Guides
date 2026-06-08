export const lessonContent = {
  id: "m1-foundations",
  extractionStatus: "structured-draft",
  objectives: [
    "Turn a broad biological topic into a focused, measurable biological question.",
    "Connect context, model, experimental design, sample size, variables, technique and statistics into one reasoning chain.",
    "Distinguish technical or experimental variability from biological variability.",
    "Explain why omics technology choice must follow the variable being measured.",
    "Use CV, boxplots, IQR and outliers to describe variability without hiding individual differences.",
  ],
  coreConcepts: [
    {
      title: "A useful question is specific and measurable",
      body: "The course does not start from 'study cancer' or 'study RNA'. It starts from a focused context: which disease or model, which stimulus, dose, time, tissue, cell type and molecular readout.",
      keywords: ["context", "model", "readout"],
    },
    {
      title: "Design links biology to data",
      body: "A biological question becomes an experiment only when variables, controls, sample size and technique are chosen. Statistics is part of the design, not a final decoration.",
      keywords: ["design", "sample size", "statistics"],
    },
    {
      title: "The technique must be ad hoc",
      body: "DNA-seq, RNA profiling, methylation arrays, proteomics, metabolomics, single-cell and spatial methods answer different questions. The correct platform is the one that measures the relevant variable with acceptable technical variability.",
      keywords: ["omics", "platform", "variable"],
    },
    {
      title: "Technical variability can hide biology",
      body: "Experimental variability comes from instruments, reagents, operators, protocols, preprocessing and algorithms. If it is larger than biological variability, the biological signal cannot be trusted.",
      keywords: ["technical", "preprocessing", "signal"],
    },
    {
      title: "Biological variability is not noise by default",
      body: "Individuals differ by genetics, epigenetics, age, environment, microbiome, time and disease state. In personalized medicine, variability can be the phenomenon being studied.",
      keywords: ["donors", "age", "exposome"],
    },
    {
      title: "Replicates are not donors",
      body: "Technical replicates reuse the same biological sample and estimate experimental variability. Different donors are biological samples and introduce true biological variation.",
      keywords: ["replicates", "donors", "CV"],
    },
  ],
  professorEmphasis: [
    "Do not write a generic project topic. Specify context, model, stimulus, dose, time and molecular variable.",
    "Sample size means the number needed to detect a significant and interpretable effect, not simply 'many samples'.",
    "If the question is about RNA, measure RNA; if the question is methylation, choose methylation profiling.",
    "Technical replicates almost never give identical numbers; real experiments have variation.",
    "Different donors must not be called replicates because they add biological variability.",
  ],
  examTraps: [
    "Starting an answer with a technology before stating the biological question.",
    "Confusing independent and dependent variables, or forgetting controls.",
    "Treating raw data as biological conclusions before preprocessing, statistics and interpretation.",
    "Calling donor-to-donor measurements technical replicates.",
    "Reporting only mean and standard deviation when the distribution, IQR or outliers are the point.",
    "Presenting methylation associations as fully solved causality.",
  ],
  practice: [
    {
      title: "Question narrowing",
      body: "Rewrite 'I want to study cancer' into a question with disease subtype, model, stimulus, time point and molecular readout.",
    },
    {
      title: "Variable mapping",
      body: "For one experiment, list independent variables, dependent variables, controls and possible confounders.",
    },
    {
      title: "Variability classification",
      body: "Classify each source as technical or biological: operator, donor age, reagent batch, microbiome, scanner, preprocessing algorithm.",
    },
    {
      title: "Plot choice",
      body: "Decide whether mean/SD, boxplot or individual trajectories best communicate the result, and justify why.",
    },
  ],
  checkpoints: [
    {
      question: "Why does a biological question need to be specific before choosing a technique?",
      answer: "Because the technique must measure the variable implied by the question. A vague question cannot define the model, tissue, stimulus, time point, readout, controls or sample size needed for an interpretable experiment.",
    },
    {
      question: "What is the difference between technical variability and biological variability?",
      answer: "Technical variability is introduced by the experimental method, such as instruments, reagents, operators, protocols or preprocessing. Biological variability comes from real differences among biological samples, such as donor genetics, age, environment, disease or time.",
    },
    {
      question: "Why are different donors not technical replicates?",
      answer: "Technical replicates repeat measurement of the same biological sample to estimate method noise. Different donors are different biological samples, so their differences include true biological variation.",
    },
    {
      question: "What does CV help compare?",
      answer: "The coefficient of variation compares variability relative to the mean, making it useful for comparing variation across measurements with different scales or average levels.",
    },
    {
      question: "Why can a boxplot be more informative than mean +/- SD?",
      answer: "A boxplot shows median, quartiles, IQR and outliers. It can reveal skew, heterogeneity and unusual individuals that a mean and standard deviation may hide.",
    },
  ],
  checklistTitle: "Written-answer checklist",
  reportChecklist: [
    "Open with the focused biological question, not the technology.",
    "Name model, sample type, stimulus or condition, dose/time and biological context.",
    "Define independent and dependent variables.",
    "Justify the omics technique as ad hoc for the measured variable.",
    "Separate technical variability from biological variability.",
    "Mention sample size, controls, statistics and interpretation.",
    "Use distribution/outlier language when variability is central.",
  ],
};

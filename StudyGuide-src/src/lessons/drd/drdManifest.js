export const DRD_RESOURCE_LABELS = {
  slides: "Slides",
  transcript: "Transcript",
  recording: "Recording",
  code: "Code",
  folder: "Drive folder",
  playlist: "Recording playlist",
  finalReport: "Final report folder",
};

export const DRD_STATUS = {
  available: {
    label: "Available",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  active: {
    label: "In progress",
    className: "border-amber-200 bg-amber-50 text-amber-800",
  },
  upcoming: {
    label: "Upcoming",
    className: "border-stone-200 bg-stone-50 text-stone-600",
  },
};

export const DRD_MODULES = [
  {
    id: "module-1",
    code: "M1",
    title: "Module 1 - theory and written-exam reasoning",
    shortTitle: "Module 1",
    description: "Conceptual foundations, platform logic, differential expression, sample-gene relationships and transcriptomics context.",
  },
  {
    id: "module-2",
    code: "M2",
    title: "Module 2 - R/Bioconductor methylation pipeline",
    shortTitle: "Module 2",
    description: "Practical methylation-array workflow from R setup and manifests to QC, normalization, differential methylation and report interpretation.",
  },
];

export const DRD_DRIVE = {
  root: "https://drive.google.com/drive/folders/1AKHMWhHqCxlzADpVb7qiKbLUTGbw3DFd",
  module1: "https://drive.google.com/drive/folders/159c-QOXyrw1SQi3QyC2TwKuxXEr0psmR",
  module2: "https://drive.google.com/drive/folders/1aBCB0mNP33Pghlpad-j-yf7P6mQIx4vM",
  transcriptions: "https://drive.google.com/drive/folders/1t-X65H2V3nsE1PJggR4kzLkx2VuG-mqO",
  recordingsDoc: "https://docs.google.com/document/d/1OG272Ffdab28l3eidAIza0yk_kWboCHX7M3MEvLmtsI/edit?usp=drivesdk",
  recordingsPlaylist: "https://www.youtube.com/playlist?list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV",
};

const module2Folders = {
  "m2-r": "https://drive.google.com/drive/folders/1mf5i_7NYsxPBqG1wgcsELP_OUXpnI1AX",
  "m2-manifest": "https://drive.google.com/drive/folders/1K1YS5YFC0PuzgCznjjkhokV3T31qIYIK",
  "m2-import-qc": "https://drive.google.com/drive/folders/1zmpC8zChT5etH58pF0S8yF0Pk6JKjbS4",
  "m2-normalization-1": "https://drive.google.com/drive/folders/1fM3yEeXvnxzns2JXcdpqeUeneI_fqL89",
  "m2-normalization-2": "https://drive.google.com/drive/folders/1-8FpVZIVya5CHVmOBwQQCnhP9fbB34uS",
  "m2-dmp-dmr": "https://drive.google.com/drive/folders/1NN4d-24ymeODHhcw9JKaLxfVj3F2c197",
};

export const DRD_FINAL_REPORT = {
  id: "final-report",
  title: "Final report preparation",
  summary: "A report-focused route that connects biological question, metadata, QC, normalization, DMP/DMR, PCA, batch effect checks and biological interpretation.",
  folder: "https://drive.google.com/drive/folders/1y7TPM31bH8RU034bSFH8LhmeEc_0smvQ",
  checklist: [
    "State the biological comparison and expected contrast.",
    "Document SampleSheet fields, covariates and possible batch variables.",
    "Explain import, QC and filtering decisions with object names.",
    "Justify the normalization method using before/after plots.",
    "Connect design matrix, DMP/DMR, FDR, PCA and batch checks to interpretation.",
  ],
};

export const DRD_STUDY_PRODUCTS = [
  {
    title: "Modular React lessons",
    desc: "Each canonical route owns its academic content while shared DRD components keep layout, navigation and resources consistent.",
    tags: ["m1-*", "m2-*", "manifest"],
  },
  {
    title: "Interactive checkpoints",
    desc: "Workflow ordering, error spotting, statistical-test choice, plot interpretation and report reasoning.",
    tags: ["QC", "FDR", "PCA", "report"],
  },
  {
    title: "Written-answer trainer",
    desc: "A 24-question exam-practice page built from the DRD_2024 question list and the Domande_DRD developed answers.",
    tags: ["24 questions", "10-12 lines", "model answers"],
  },
  {
    title: "Team-report scaffold",
    desc: "Module 2 report preparation from biological question to methylation-analysis interpretation.",
    tags: ["metadata", "normalization", "DMP/DMR"],
  },
];

export const DRD_EXAM_REPORT_KIT = {
  eyebrow: "Practical study kit",
  title: "Exam and report route",
  body: "Use this as the operating plan for turning the guide into daily practice: short written answers for Module 1 and a reproducible methylation-analysis report for Module 2.",
  writtenTitle: "Module 1 written-test trainer",
  reportTitle: "Module 2 team-report scaffold",
  rubricTitle: "Answer and checklist logic",
  written: [
    { title: "45-minute mock exam", body: "Train with four prompts and force each answer into 10-12 lines.", bullets: ["definition", "workflow", "variability/statistics", "biological meaning"] },
    { title: "Test-selection drills", body: "Start from the experimental design before naming a test.", bullets: ["paired/unpaired", "two or more groups", "parametric/rank-based", "multiple testing"] },
    { title: "Technology comparison answers", body: "Contrast Stanford, Affymetrix and Illumina without turning the answer into a loose fact list.", bullets: ["sample/chip logic", "technical bias", "QC/normalization", "output meaning"] },
  ],
  report: [
    { title: "1. Question and metadata", body: "State the biological comparison, phenotype, covariates and SampleSheet fields that drive the analysis.", checks: ["groups", "sample IDs", "batch variables", "expected contrast"] },
    { title: "2. Import, QC and filtering", body: "Explain RGSet/MSet objects, detection p-values, failed samples/probes and why each filter is justified.", checks: ["RGSet/MSet", "detection p-value", "control probes", "removed probes"] },
    { title: "3. Normalization choice", body: "Compare raw versus normalized distributions and justify the chosen method rather than only naming it.", checks: ["Quantile/Noob/SWAN/Funnorm", "density plot", "probe-type bias", "dye/background correction"] },
    { title: "4. Differential methylation and interpretation", body: "Connect design matrix, contrasts, DMP/DMR, FDR, PCA/batch effect and final biological meaning.", checks: ["beta vs M values", "design matrix", "FDR", "PCA/ComBat"] },
  ],
  rubric: [
    { label: "Define", value: "open with the concept" },
    { label: "Justify", value: "tie it to design/QC" },
    { label: "Interpret", value: "state the biological meaning" },
  ],
};

export function getDRDExamReportKit() {
  return DRD_EXAM_REPORT_KIT;
}

export const DRD_LESSONS = [
  {
    id: "m1-foundations",
    code: "M1.1",
    module: "module-1",
    date: "Apr 28, 2026",
    status: "available",
    title: "Biological question, experimental design and variability",
    summary: "Convert a focused biological question into model, variables, sample size, technique, quantitative data and interpretation. Distinguish biological variability from experimental variability.",
    tags: ["biological question", "variables", "variability", "omics"],
    products: ["React lesson", "concept quiz", "short written practice"],
    lessonType: "theory",
    componentKey: "m1-foundations",
    aliases: ["01"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1F1UK7JpTC8Sm8arnNC9mfXnj8aLxbzqZ/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1kYvSq04ZeL3mt3GbLNdNwmaAqFImS8CgG70t_9NQWnA/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=SQtYHrV1y-U&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=1",
    },
  },
  {
    id: "m1-stanford",
    code: "M1.2",
    module: "module-1",
    date: "May 5, 2026",
    status: "available",
    title: "Competitive two-colour arrays: Stanford",
    summary: "Spotted arrays, Cy3/Cy5 targets, dye bias, dye swap, TIFF/raw images and image-level quality control.",
    tags: ["two-colour", "Cy3/Cy5", "dye swap", "QC"],
    products: ["workflow ordering", "technical-error quiz", "exam-style answer"],
    lessonType: "theory",
    componentKey: "m1-stanford",
    aliases: ["02"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1dZoiMM4jpg6J_1Ty_Pwd-kiInbBZS2nX/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1JLwo7lsvMAB2sCSC2wfyHYyh9wQWUoDoO9QYqnfvLoM/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=UqIn_t1T_RU&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=2",
    },
  },
  {
    id: "m1-affy",
    code: "M1.3",
    module: "module-1",
    date: "May 6, 2026",
    status: "available",
    title: "Affymetrix / ThermoFisher GeneChip",
    summary: "One-colour noncompetitive arrays, photolithography, PM/MM probes, probe sets, DAT/CEL/CDF/CHP files, RMA and quantile normalization.",
    tags: ["one-colour", "PM/MM", "RMA", "CEL files"],
    products: ["file-flow diagram", "PM/MM comparison", "RMA checklist"],
    lessonType: "theory",
    componentKey: "m1-affy",
    aliases: ["03"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1bkgvJ-w8Sgrqt5FSOSi29iOEUc5vJCQL/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1MLeSACuOeUinq637GK8sci2isNKzBgZ-V7K2SVF7nZc/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=2NyulYg-5As&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=3",
    },
  },
  {
    id: "m1-illumina",
    code: "M1.4",
    module: "module-1",
    date: "May 12, 2026",
    status: "available",
    title: "Illumina BeadChip and methylation platforms",
    summary: "BeadArray design, optical decoding, transcriptomics, bisulfite logic, 27K/450K/EPIC coverage and CpG genomic context.",
    tags: ["BeadChip", "bisulfite", "450K", "EPIC"],
    products: ["visual React lesson", "27K/450K/EPIC comparison", "bisulfite quiz"],
    lessonType: "theory",
    componentKey: "m1-illumina",
    aliases: ["05"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1L_othy-SIJtV_pjzDEDluVK5RmZYQ4TI/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1TH6GF5k0goaPW4BISg3D63sVvanGC6UI9m0x1I_Tg1M/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=DCv9v8sUnnU&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=5",
    },
  },
  {
    id: "m1-deg-i",
    code: "M1.5",
    module: "module-1",
    date: "May 26, 2026",
    status: "available",
    title: "Differentially expressed genes I",
    summary: "Fold change versus statistical significance, log2 ratios, MA-plots, null and alternative hypotheses, p-values, alpha/beta errors, power and parametric versus non-parametric tests.",
    tags: ["fold change", "p-value", "power", "MA-plot"],
    products: ["test-selection tree", "p-value exercises", "fold-change traps"],
    lessonType: "theory",
    componentKey: "m1-deg-i",
    aliases: ["06"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/11JJiEdxJCS4OQT58pBYtnxZjPfXV3hgF/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1I4lojrT4VHQYJ6VIzncIHRaaxC426vJvZH_Y0azZT6Y/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=RPcX8U-6CY0&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=10",
    },
  },
  {
    id: "m1-deg-ii",
    code: "M1.6",
    module: "module-1",
    date: "May 27, 2026",
    status: "available",
    title: "Differentially expressed genes II",
    summary: "Bootstrap validation, more-than-two-groups logic, one-way ANOVA, Kruskal-Wallis, multiple testing/FWER and the transition toward gene-set interpretation.",
    tags: ["bootstrap", "ANOVA", "Kruskal-Wallis", "FWER"],
    products: ["bootstrap walkthrough", "ANOVA/Kruskal lab", "multiple-testing traps"],
    lessonType: "theory",
    componentKey: "m1-deg-ii",
    aliases: ["07"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1mgvgsmiFN2nAh6nT3-RRiUslcDaMZWvX/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/145GkBXGfP4tngdTcFf5LjMxFMI8Hqi5QgeZy2aJtnkA/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=HvS_eWmN5Us&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=11",
    },
  },
  {
    id: "m1-samples-genes-i",
    code: "M1.7",
    module: "module-1",
    date: "Jun 5, 2026",
    status: "available",
    title: "Relationship between samples and genes I",
    summary: "Matrices of genes/probes by samples, similarity, distance, sample structure, Pearson correlation, heatmaps and hierarchical clustering logic.",
    tags: ["matrix", "samples", "genes", "distance"],
    products: ["matrix-reading lesson", "sample-distance quiz", "plot interpretation"],
    lessonType: "theory",
    componentKey: "m1-samples-genes-i",
    aliases: ["08"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1JSN_XP7mF2r39TUzdiSOMW2Rum5Ij7ya/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/13Wu08yLvUaTITj3PmAC8yupFHzC6g8_zXbmVaGxAsUA/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=9cBeCHIFOj0&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=13",
    },
  },
  {
    id: "m1-samples-genes-ii",
    code: "M1.8",
    module: "module-1",
    date: "Jun 9, 2026",
    status: "available",
    title: "Relationship between samples and genes II",
    summary: "K-means clustering, PCA, heatmap interpretation, functional annotation with DAVID/GO/KEGG and volcano plots as exploratory tools after differential analysis.",
    tags: ["K-means", "PCA", "heatmap", "DAVID", "volcano plot"],
    products: ["K-means mini-lab", "PCA variance lab", "volcano interpretation", "exam prompts"],
    lessonType: "theory",
    componentKey: "m1-samples-genes-ii",
    aliases: ["09"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1acKbsGsILi05p_Emy_9GEDmvG3j2-RS0/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1D1cfFVcvPSpbPb25sOn3LXhGVgnLsQs3P1hgUaHogKg/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=Z3wzZ2PDOu8&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=14",
    },
  },
  {
    id: "m1-scrna",
    code: "M1.9",
    module: "module-1",
    date: "Jun 10, 2026",
    status: "available",
    title: "Single-cell RNA-seq and TrailMaker workshop",
    summary: "Bulk versus single-cell RNA-seq, 10X droplet barcoding, UMIs, QC, dropout, UMAP/clustering, marker-based annotation and a TrailMaker MIS-C PBMC exercise.",
    tags: ["scRNA-seq", "10X", "UMI", "UMAP", "TrailMaker"],
    products: ["droplet workflow", "QC triage", "cluster annotation", "MIS-C exercise"],
    lessonType: "theory + workshop",
    componentKey: "m1-scrna",
    aliases: ["10"],
    driveFolder: DRD_DRIVE.module1,
    resources: {
      slides: "https://drive.google.com/file/d/1PUbs6aNl9HN1Tq3agbY78UNFl7WpUdhL/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1aP1Gb6SHCIzc8LD2L68Sxji0k-SHngclG3AJ5aMaId0/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=Zs1zcdYZIOY&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=15",
      code: "https://drive.google.com/file/d/1LFe6sdwZwT0_-oGpKUtJ_di-6qxybyOS/view?usp=drivesdk",
    },
  },
  {
    id: "m2-r",
    code: "M2.1",
    module: "module-2",
    date: "May 8, 2026",
    status: "available",
    title: "R/Bioconductor introduction",
    summary: "R basics, packages, scripts, SampleSheet logic, metadata and reproducible analysis habits.",
    tags: ["R", "Bioconductor", "SampleSheet", "metadata"],
    products: ["guided setup", "SampleSheet exercise", "R object glossary"],
    lessonType: "practical",
    componentKey: "m2-r",
    aliases: ["04", "m2-1"],
    driveFolder: module2Folders["m2-r"],
    resources: {
      slides: "https://drive.google.com/file/d/1Qo2clrYIp2JO2cTf6VoSP-a3szJ_kgMa/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1I6CzjnJ7O4F6oJ_46aownNn4woG6ewL3p7xLDEQpgAI/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=XmowKzBBqx8&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=4",
      code: "https://drive.google.com/file/d/1CQ1a8y7fm4PWZ6ubygpIObZhzkcz_Efo/view?usp=drivesdk",
    },
  },
  {
    id: "m2-manifest",
    code: "M2.2",
    module: "module-2",
    date: "May 13, 2026",
    status: "available",
    title: "DNA methylation and Illumina BeadChip chemistry",
    summary: "Manifest files, probe annotation, chromosome/position, genes, CpG island context and probe-level interpretation.",
    tags: ["manifest", "probe ID", "CpG context", "Infinium"],
    products: ["probe annotation quiz", "manifest reading", "chemistry summary"],
    lessonType: "practical",
    componentKey: "m2-manifest",
    aliases: ["m2-2"],
    driveFolder: module2Folders["m2-manifest"],
    resources: {
      slides: "https://drive.google.com/file/d/1sN2mGi86239wfQ8w8K-PYtKeF4pWQXAR/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1StKS_UrrCBaIIvwsyz-vhmfrFQoxWy5HiAo8JFN3kHs/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=prqxPH0DZ_s&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=6",
      code: "https://drive.google.com/file/d/1-jxa2q2refHvGJ55kj3_43tw12uCwgeH/view?usp=drivesdk",
    },
  },
  {
    id: "m2-import-qc",
    code: "M2.3",
    module: "module-2",
    date: "May 19, 2026",
    status: "available",
    title: "Pipeline 1: data import and quality check",
    summary: "Raw methylation-array data, RGSet, MSet_raw, detection p-values, control probes, sample QC and probe QC.",
    tags: ["RGSet", "MSet", "detection p-value", "control probes"],
    products: ["RGSet-MSet diagram", "detection p-value practice", "filtering checklist"],
    lessonType: "practical",
    componentKey: "m2-import-qc",
    aliases: ["m2-3"],
    driveFolder: module2Folders["m2-import-qc"],
    resources: {
      slides: "https://drive.google.com/file/d/18mE84-kSZ83x9t7B3Wrj_FfUN9-H5Ev_/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1RR19_bNqZuU-KwOgeu3S2btB-_3X_M2lbskBlCTnU2o/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=XddknpRmhQI&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=7",
      code: "https://drive.google.com/file/d/1VeUyh13Un4Gger5-NAdYoY2LTvR0S1Ad/view?usp=drivesdk",
    },
  },
  {
    id: "m2-normalization-1",
    code: "M2.4",
    module: "module-2",
    date: "May 20, 2026",
    status: "available",
    title: "Pipeline 2: normalization I",
    summary: "Why raw methylation signals are not directly comparable and how normalization changes distributions and downstream interpretation.",
    tags: ["normalization", "beta values", "density plots", "raw data"],
    products: ["density-plot interpretation", "raw vs normalized comparison", "normalization glossary"],
    lessonType: "practical",
    componentKey: "m2-normalization-1",
    aliases: ["m2-4"],
    driveFolder: module2Folders["m2-normalization-1"],
    resources: {
      slides: "https://drive.google.com/file/d/1k2pszA-h2YXwEfr3SCQPk9ZRb-tfKaMS/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1C5VEIJ_9v1Ak_DgtKza9zyaLg_c-Z__HWxw1_m42FfA/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=aBVSPgrVB7I&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=8",
      code: "https://drive.google.com/file/d/1PCExfbK5Eegc5OvnCEUhUaaMGD_iwXtx/view?usp=drivesdk",
    },
  },
  {
    id: "m2-normalization-2",
    code: "M2.5",
    module: "module-2",
    date: "May 22, 2026",
    status: "available",
    title: "Pipeline 2: normalization II",
    summary: "Quantile, Noob, SWAN and functional normalization, including background, dye bias, probe-type bias and control-probe-based correction.",
    tags: ["batch effects", "PCA", "beta/M", "DMP", "DMR"],
    products: ["beta/M comparison", "DMP tests", "method Venn"],
    lessonType: "practical",
    componentKey: "m2-normalization-2",
    aliases: ["m2-5"],
    driveFolder: module2Folders["m2-normalization-2"],
    resources: {
      slides: "https://drive.google.com/file/d/1wrmgaByWIWoyTD9XCB_bRCbl3Q_wr6sH/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1TTRiPgi9LakpSVHeghxpKaZOyLACQ3bzcOZrIsFHMHk/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=zpHD8CYhF48&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=9",
      code: "https://drive.google.com/file/d/1wiTpYVtVZdVUXTGEF-eMdZFThyOziuaj/view?usp=drivesdk",
    },
  },
  {
    id: "m2-dmp-dmr",
    code: "M2.6",
    module: "module-2",
    date: "Jun 4, 2026",
    status: "available",
    title: "Pipeline 3: DMP/DMR, multiple testing and PCA",
    summary: "Beta versus M values, design matrix, contrasts, DMP/DMR, FDR and PCA for report-ready interpretation.",
    tags: ["DMP", "DMR", "FDR", "PCA"],
    products: ["pipeline walkthrough", "design-matrix practice", "volcano/PCA interpretation"],
    lessonType: "practical",
    componentKey: "m2-dmp-dmr",
    aliases: ["m2-6"],
    driveFolder: module2Folders["m2-dmp-dmr"],
    resources: {
      slides: "https://drive.google.com/file/d/1gKWjGYlPriXXt1xH5aurc6GJHakDJl4T/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/19sBK8F7QXrdj3T2o_be2Fc9c7cA760qToVHukmiFuzw/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=KwAHEd8OEtI&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=12",
      code: "https://drive.google.com/file/d/154I5LREJNqZBY9X5qVH_rsCJsw50AZgX/view?usp=drivesdk",
    },
  },
  {
    id: "m2-batch-clustering",
    code: "M2.7",
    module: "module-2",
    date: "Jun 11, 2026",
    status: "available",
    title: "Pipeline 4: heatmaps, QC decisions and final-report walkthrough",
    summary: "Heatmap/clustering interpretation, linkage choices, report-ready raw-data loading, probe tables, QC plots, negative controls, detection p-values and raw beta/M density plots.",
    tags: ["heatmap", "linkage", "QC", "detection p-value", "final report"],
    products: ["heatmap reader", "probe-table lab", "QC decision stack", "density plot drill"],
    lessonType: "practical",
    componentKey: "m2-batch-clustering",
    aliases: ["m2-7"],
    driveFolder: DRD_DRIVE.module2,
    resources: {
      slides: "https://drive.google.com/file/d/1gKWjGYlPriXXt1xH5aurc6GJHakDJl4T/view?usp=drivesdk",
      transcript: "https://docs.google.com/document/d/1QyKeJmuuvAHx0XJMeXCRTKZTkss3QKD3P_uQGUq2u9o/edit?usp=drivesdk",
      recording: "https://www.youtube.com/watch?v=ddq0rBLJg4I&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=16",
      code: "https://drive.google.com/file/d/1WzaaXrj40z-WUIisS4ldK0m7ehbtcr0i/view?usp=drivesdk",
    },
  },
];

export const DRD_ALIAS_TO_ID = DRD_LESSONS.reduce((acc, lesson) => {
  for (const alias of lesson.aliases || []) acc[alias] = lesson.id;
  return acc;
}, {});

export function drdLessonHref(lesson) {
  return lesson ? `#/lesson/${lesson.id}` : "#/";
}

export function resolveDRDLessonId(routeId) {
  return DRD_ALIAS_TO_ID[routeId] || routeId;
}

export function getDRDLessonById(routeId) {
  const id = resolveDRDLessonId(routeId);
  return DRD_LESSONS.find((lesson) => lesson.id === id) || null;
}

export function getDRDLessonsByModule(moduleId) {
  return DRD_LESSONS.filter((lesson) => lesson.module === moduleId);
}

export function getDRDNeighbors(lessonId) {
  const id = resolveDRDLessonId(lessonId);
  const index = DRD_LESSONS.findIndex((lesson) => lesson.id === id);
  return {
    previous: index > 0 ? DRD_LESSONS[index - 1] : null,
    next: index >= 0 && index < DRD_LESSONS.length - 1 ? DRD_LESSONS[index + 1] : null,
  };
}

export function getAvailableDRDLessons() {
  return DRD_LESSONS.filter((lesson) => lesson.status === "available");
}

export function getDRDProgressTotal() {
  return getAvailableDRDLessons().length;
}

export function filterDRDLessons(lessons, query) {
  const q = query.trim().toLowerCase();
  if (!q) return lessons;
  return lessons.filter((lesson) => {
    const haystack = [
      lesson.id,
      lesson.code,
      lesson.title,
      lesson.summary,
      lesson.lessonType,
      ...(lesson.tags || []),
      ...(lesson.products || []),
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

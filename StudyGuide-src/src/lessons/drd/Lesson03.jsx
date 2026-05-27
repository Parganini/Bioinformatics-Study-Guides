import React, { useMemo, useState } from "react";
import affyTitleSlide from "../../assets/drd/lesson03/affymetrix-title.jpg";
import photolithographySlide from "../../assets/drd/lesson03/photolithography-synthesis.jpg";
import genechipTechSlide from "../../assets/drd/lesson03/genechip-technology.jpg";
import lightMaskSlide from "../../assets/drd/lesson03/in-situ-light-mask.jpg";
import oligosChipSlide from "../../assets/drd/lesson03/oligos-synthesized-chip.jpg";
import cartridgeSlide from "../../assets/drd/lesson03/cartridge-applications.jpg";
import instrumentationSlide from "../../assets/drd/lesson03/instrumentation.jpg";
import humanGenomeSlide from "../../assets/drd/lesson03/genechip-human-genome.jpg";
import expressionDesignSlide from "../../assets/drd/lesson03/expression-array-design.jpg";
import mas5MismatchSlide from "../../assets/drd/lesson03/mas5-mismatch-warning.jpg";
import genechipEvolutionSlide from "../../assets/drd/lesson03/genechip-evolution.jpg";
import senseTargetProtocolSlide from "../../assets/drd/lesson03/sense-target-protocol.jpg";
import hybridizationDetectionSlide from "../../assets/drd/lesson03/hybridization-detection.jpg";
import scanOutputSlide from "../../assets/drd/lesson03/scan-output.jpg";
import visualInspectionSlide from "../../assets/drd/lesson03/visual-inspection.jpg";
import featureQualitySlide from "../../assets/drd/lesson03/feature-quality.jpg";
import gridAlignmentSlide from "../../assets/drd/lesson03/grid-alignment.jpg";
import datCelProcessingSlide from "../../assets/drd/lesson03/dat-cel-processing.jpg";
import affyDataFlowSlide from "../../assets/drd/lesson03/affy-data-flow.jpg";
import fileTypesSlide from "../../assets/drd/lesson03/file-types.jpg";
import probeVariationProblemSlide from "../../assets/drd/lesson03/probe-variation-problem.jpg";
import spikeinProbeVariationSlide from "../../assets/drd/lesson03/spikein-probe-variation.jpg";
import preprocessingStepsSlide from "../../assets/drd/lesson03/preprocessing-steps.jpg";
import rmaOverviewSlide from "../../assets/drd/lesson03/rma-overview.jpg";
import quantileNormalizationSlide from "../../assets/drd/lesson03/quantile-normalization.jpg";
import transcriptCalculationSlide from "../../assets/drd/lesson03/transcript-calculation.jpg";
import additiveModelSlide from "../../assets/drd/lesson03/additive-model.jpg";
import tukeyMedianPolishSlide from "../../assets/drd/lesson03/tukey-median-polish.jpg";
import fittedValuesSummarySlide from "../../assets/drd/lesson03/fitted-values-summary.jpg";
import qcPlotsSlide from "../../assets/drd/lesson03/quality-control-plots.jpg";
import maPlotOneColorSlide from "../../assets/drd/lesson03/ma-plot-one-color.jpg";
import beforeAfterRmaSlide from "../../assets/drd/lesson03/before-after-rma.jpg";
import boxplotsBeforeAfterSlide from "../../assets/drd/lesson03/boxplots-before-after.jpg";
import nextGenArraysSlide from "../../assets/drd/lesson03/next-generation-arrays.jpg";
import humanTranscriptomeArraySlide from "../../assets/drd/lesson03/human-transcriptome-array.jpg";
import annotationFilesSlide from "../../assets/drd/lesson03/annotation-files.jpg";
import miameStandardsSlide from "../../assets/drd/lesson03/miame-standards.jpg";
import geoRepositorySlide from "../../assets/drd/lesson03/geo-repository.jpg";
import geoCelFilesExampleSlide from "../../assets/drd/lesson03/geo-cel-files-example.jpg";

const SLIDES_URL = "https://drive.google.com/file/d/1bkgvJ-w8Sgrqt5FSOSi29iOEUc5vJCQL/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1MLeSACuOeUinq637GK8sci2isNKzBgZ-V7K2SVF7nZc/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "https://www.youtube.com/watch?v=2NyulYg-5As&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=3";

const IMG = {
  affyTitle: { src: affyTitleSlide, slide: 1 },
  photolithography: { src: photolithographySlide, slide: 4 },
  genechipTech: { src: genechipTechSlide, slide: 5 },
  lightMask: { src: lightMaskSlide, slide: 6 },
  oligosChip: { src: oligosChipSlide, slide: 8 },
  cartridge: { src: cartridgeSlide, slide: 9 },
  instrumentation: { src: instrumentationSlide, slide: 11 },
  humanGenome: { src: humanGenomeSlide, slide: 12 },
  expressionDesign: { src: expressionDesignSlide, slide: 13 },
  mas5Mismatch: { src: mas5MismatchSlide, slide: 14 },
  genechipEvolution: { src: genechipEvolutionSlide, slide: 15 },
  senseTargetProtocol: { src: senseTargetProtocolSlide, slide: 16 },
  hybridizationDetection: { src: hybridizationDetectionSlide, slide: 19 },
  scanOutput: { src: scanOutputSlide, slide: 20 },
  visualInspection: { src: visualInspectionSlide, slide: 21 },
  featureQuality: { src: featureQualitySlide, slide: 23 },
  gridAlignment: { src: gridAlignmentSlide, slide: 24 },
  datCelProcessing: { src: datCelProcessingSlide, slide: 26 },
  affyDataFlow: { src: affyDataFlowSlide, slide: 27 },
  fileTypes: { src: fileTypesSlide, slide: 28 },
  probeVariationProblem: { src: probeVariationProblemSlide, slide: 30 },
  spikeinProbeVariation: { src: spikeinProbeVariationSlide, slide: 31 },
  preprocessingSteps: { src: preprocessingStepsSlide, slide: 32 },
  rmaOverview: { src: rmaOverviewSlide, slide: 33 },
  quantileNormalization: { src: quantileNormalizationSlide, slide: 41 },
  transcriptCalculation: { src: transcriptCalculationSlide, slide: 42 },
  additiveModel: { src: additiveModelSlide, slide: 43 },
  tukeyMedianPolish: { src: tukeyMedianPolishSlide, slide: 44 },
  fittedValuesSummary: { src: fittedValuesSummarySlide, slide: 50 },
  qcPlots: { src: qcPlotsSlide, slide: 54 },
  maPlotOneColor: { src: maPlotOneColorSlide, slide: 56 },
  beforeAfterRma: { src: beforeAfterRmaSlide, slide: 57 },
  boxplotsBeforeAfter: { src: boxplotsBeforeAfterSlide, slide: 58 },
  nextGenArrays: { src: nextGenArraysSlide, slide: 59 },
  humanTranscriptomeArray: { src: humanTranscriptomeArraySlide, slide: 60 },
  annotationFiles: { src: annotationFilesSlide, slide: 63 },
  miameStandards: { src: miameStandardsSlide, slide: 64 },
  geoRepository: { src: geoRepositorySlide, slide: 65 },
  geoCelFilesExample: { src: geoCelFilesExampleSlide, slide: 68 }
};

const COPY = {
  en: {
    mark: "Mark completed",
    done: "Completed",
    dashboard: "DRD dashboard",
    previous: "Previous",
    next: "Next",
    current: "Lesson 3",
    previousTitle: "M1.2 Stanford arrays",
    nextTitle: "M2.1 R/Bioconductor intro",
    heroEyebrow: "Module 1 · May 6 · Affymetrix / ThermoFisher",
    heroTitle: "Noncompetitive one-colour GeneChip arrays",
    heroSubtitle: "From photolithography and probe sets to DAT/CEL files, quality control, RMA, quantile normalization and summarization.",
    flow: ["history", "in situ synthesis", "probe sets", "QC files", "RMA", "GEO/MIAME"],
    resources: "Class resources",
    slides: "Slides",
    transcript: "Transcript",
    recording: "Recording",
    open: "Open",
    zoom: "Click to zoom",
    close: "Close zoom",
    slideLabel: "Slide",
    professor: "Professor emphasis",
    exam: "Exam watch",
    examMore: "Open expanded answer",
    include: "What to include",
    trap: "Common trap",
    model: "Sample answer",
    check: "Checkpoint",
    quizTitle: "Quick checkpoint quiz",
    writtenTitle: "Written exam trainer",
    answerPlaceholder: "Write a 10–12 line exam answer here...",
    words: "words",
    modelAnswer: "Model answer",
    sections: [
      {
        eyebrow: "1 · Why this lesson matters",
        title: "We move from competitive two-colour arrays to one-colour GeneChip arrays",
        body: "The professor opens by reminding the class that normalization does not make biological results identical; it makes intensity distributions comparable. Then she changes the technology completely: Affymetrix is noncompetitive, one-colour and one sample per array.",
        professor: "She explicitly says that the comparison competitive vs noncompetitive is a possible exam-style question, so the lesson should be studied as a contrast with Stanford arrays.",
        exam: {
          title: "Possible question: compare competitive and noncompetitive arrays.",
          include: ["Define competitive arrays: two samples, same array, two colours and dye bias.", "Define Affymetrix/GeneChip: one sample per chip, one colour and one scanner channel.", "Explain that Affymetrix removes the Cy3/Cy5 problem but introduces other problems: array-to-array comparability, probe-set summarization and normalization."],
          trap: "Do not say that one-colour arrays have no normalization problems. They avoid dye bias, but still require background correction, quantile normalization and summarization.",
          model: "Competitive arrays compare two labelled samples on the same chip and read a colour ratio, so they are affected by Cy3/Cy5 bias and require intra-array normalization. Affymetrix GeneChip arrays are noncompetitive: one sample is hybridized on one chip and measured with one colour. This avoids the two-dye problem, but each chip must be made comparable to the others, and each transcript must be summarized from several probes. Therefore the key pipeline is background correction, normalization and summarization, often through RMA."
        },
        slides: [
          { key: "affyTitle", spotlight: true, title: "Affymetrix GeneChips: the new platform", body: "The lesson begins with history, technical aspects, data output, normalization and the evolution of these arrays." },
          { key: "photolithography", title: "Noncompetitive array fabrication", body: "This slide names the core manufacturing idea: in situ photolithographic synthesis, not spotting." }
        ]
      },
      {
        eyebrow: "2 · Manufacturing logic",
        title: "Photolithography builds the probes directly on the chip",
        body: "Unlike Stanford arrays, the oligonucleotides are not first synthesized and then spotted. In Affymetrix, UV light, masks and protected reactive groups allow nucleotides to be added in situ, feature by feature. Each feature contains many identical copies of one probe sequence.",
        professor: "The professor stresses that this was revolutionary because the probes are fixed and synthesized directly on the support, and each feature/cell contains a different oligonucleotide chain.",
        exam: {
          title: "Possible question: how is a GeneChip manufactured?",
          include: ["Mention in situ photolithography and UV light.", "Explain that masks expose selected features, allowing a nucleotide to be added only where the protecting group is removed.", "Contrast it with competitive arrays, which used spotting or inkjet-like deposition."],
          trap: "Do not describe Affymetrix as a spotted array. The main distinction is synthesis on the chip itself.",
          model: "Affymetrix GeneChip arrays are manufactured by in situ photolithographic synthesis. The chip surface is divided into very small features, each carrying many identical copies of one oligonucleotide probe. UV light passes through masks and removes protecting groups only in selected positions. A known nucleotide is then added, and the cycle repeats to build specific probe sequences directly on the support. This is fundamentally different from competitive spotted arrays, where pre-synthesized DNA or oligonucleotides are deposited onto the slide."
        },
        slides: [
          { key: "genechipTech", title: "GeneChip technology overview", body: "The slide shows the cartridge-like chip and the concept of features containing probes." },
          { key: "lightMask", title: "UV light and masks", body: "This is the visual core of photolithography: a mask selects which features are activated." },
          { key: "oligosChip", title: "Oligos synthesized on the chip", body: "The probes are synthesized in place and later hybridize with the target sample." }
        ]
      },
      {
        eyebrow: "3 · One-colour platform and instrumentation",
        title: "One sample per chip, one channel, but many arrays to compare",
        body: "GeneChip cartridges can be used for expression, genotyping, miRNA or other targets. The platform includes hybridization, washing/fluidics and scanning. Because each chip carries one biological sample, comparison across conditions requires comparing different chips.",
        professor: "She emphasizes that this platform avoids the two-colour dye issue, but it is not free from experimental variability: instrumentation, washing, chip-to-chip differences and preprocessing still matter.",
        exam: {
          title: "What should you say if asked for GeneChip characteristics?",
          include: ["Noncompetitive/one-colour means one sample per array.", "The array is manufactured by photolithography and each feature contains many identical probes.", "Raw outputs must be inspected and normalized before analysis."],
          trap: "Do not define one-colour only as a visual property. It changes the experimental design because the comparison is across arrays, not within a single array.",
          model: "A GeneChip is a noncompetitive one-colour array, meaning that one sample is hybridized on each chip. The chip is a high-density matrix of features produced by photolithographic synthesis. After sample preparation and hybridization, the chip is washed, scanned and converted into intensity files. Since different biological conditions are run on different chips, preprocessing must make arrays comparable across the experiment."
        },
        slides: [
          { key: "cartridge", title: "GeneChip cartridge and applications", body: "The cartridge can be used for genotyping, expression, miRNA or human/animal targets." },
          { key: "instrumentation", title: "Scanner and fluidics", body: "Hybridization, washing and scanning are part of the technical workflow and can contribute variability." },
          { key: "humanGenome", title: "Human Genome U133 example", body: "Older chips already measured tens of thousands of transcripts, but the key is how they quantify each transcript." }
        ]
      },
      {
        eyebrow: "4 · Probe sets, PM/MM and the mismatch problem",
        title: "A transcript is represented by multiple probes, not by one spot",
        body: "For each transcript, Affymetrix used probe sets: often about 11 probes of around 25 bases. Early arrays paired perfect match probes with mismatch probes. The mismatch was meant to estimate nonspecific background, but it often produced stronger signal than the perfect match, which became a major problem.",
        professor: "The professor spends time on this because it explains why algorithms and later chip designs changed: the scientific community increasingly preferred using perfect match probes only.",
        exam: {
          title: "Possible question: what are PM and MM probes, and why was MM problematic?",
          include: ["Define perfect match: probe sequence complementary to the target transcript region.", "Define mismatch: same probe except one central nucleotide changed.", "Explain the intended use: estimate background/nonspecific binding.", "Explain the problem: mismatch intensity was often higher than PM, so later approaches focused on PM-only strategies."],
          trap: "Do not say MM is simply a negative control that always works. The point of the lecture is that it often failed as expected background.",
          model: "In early Affymetrix arrays, each transcript was represented by a probe set. For each perfect match probe, a corresponding mismatch probe contained one altered nucleotide in the middle. The idea was that the perfect match measured specific hybridization, while the mismatch estimated nonspecific background to subtract. However, mismatch probes frequently showed higher intensity than perfect match probes, which made this correction unreliable. This led to algorithmic fixes and later evolution toward PM-only designs."
        },
        slides: [
          { key: "expressionDesign", title: "Probe-set design", body: "Several probes represent one transcript, often starting near the 3′ end." },
          { key: "mas5Mismatch", title: "MAS 5.0 and MM warning", body: "This slide captures the central issue: PM−MM logic was not always reliable." },
          { key: "genechipEvolution", title: "Evolution toward PM-only", body: "Newer GeneChip designs moved away from mismatch probes and changed target/preprocessing strategy." }
        ]
      },
      {
        eyebrow: "5 · Target preparation and signal detection",
        title: "The protocol is complex; study it to understand variability, not to memorize every enzyme",
        body: "The target-preparation protocol starts from mRNA and builds sense cDNA through several steps. UDG and endonuclease fragment the DNA at uracil-containing positions, biotin is added, and after hybridization streptavidin conjugated to phycoerythrin provides fluorescence.",
        professor: "She says she does not expect the full protocol by heart. The reason to show it is to understand protocol complexity, sources of experimental variability and the difference from competitive arrays.",
        exam: {
          title: "How detailed should the protocol answer be?",
          include: ["Say that mRNA is converted into labelled/biotinylated target suitable for hybridization.", "Mention that the final fluorescence comes from biotin–streptavidin binding with a fluorochrome.", "Use the protocol to discuss why many technical steps can create variability."],
          trap: "Do not spend all 10–12 lines listing enzymes. Use the protocol as evidence that QC and normalization are necessary.",
          model: "The Affymetrix protocol starts from RNA and produces a labelled target that can hybridize to the probes on the chip. The lecture shows several molecular steps, including cDNA synthesis, fragmentation and biotinylation. After hybridization, streptavidin linked to a fluorochrome binds the biotinylated target, allowing the scanner to measure signal. The important point for the exam is not memorizing every enzyme, but understanding that the protocol is more complex than the two-colour workflow and therefore can introduce experimental variability that must be controlled."
        },
        slides: [
          { key: "senseTargetProtocol", title: "Sense target preparation", body: "This slide is useful as a complexity map: RNA → cDNA → fragmentation → biotinylation." },
          { key: "hybridizationDetection", title: "Biotin–streptavidin detection", body: "Fluorescence is read after biotinylated target binds the probe and streptavidin-fluorochrome is added." },
          { key: "scanOutput", title: "Raw scan image", body: "The scan is a grayscale intensity image, not a merged red/green image as in two-colour arrays." }
        ]
      },
      {
        eyebrow: "6 · Image QC and file types",
        title: "DAT is the raw image; CEL is the processed intensity matrix used for analysis",
        body: "The software performs image processing: visual inspection, grid alignment, feature-centering and pixel-level summarization. The professor highlights DAT and CEL as essential vocabulary. DAT is the original image; CEL contains processed intensity values for features. CDF maps features to probes/probe sets, and CHP or reports are more downstream outputs.",
        professor: "She explicitly says that DAT vs CEL is a typical exam question and that CEL files are the files commonly downloaded from GEO for Affymetrix analysis.",
        exam: {
          title: "Typical question: explain DAT, CEL, CDF and CHP files.",
          include: ["DAT: raw scanner image before processing.", "CEL: processed feature-level intensity values; the main file used in downstream analysis.", "CDF: chip definition/map telling which feature belongs to which probe/probe set.", "CHP/report: downstream interpreted or summarized output, often less directly used than CEL in reanalysis."],
          trap: "Do not say CEL is the raw image. The professor specifically distinguishes DAT as original image and CEL as processed feature intensities.",
          model: "In Affymetrix workflows, the DAT file is the original raw image produced by scanning the GeneChip. The software aligns a grid, processes each feature and extracts intensity values. These processed values are stored in the CEL file, which is the key file used for downstream analysis and is commonly available in repositories like GEO. The CDF file is the chip definition file: it maps features to probes and probe sets. CHP or report files contain more downstream summarized calls or QC information, but researchers often reanalyse CEL files directly."
        },
        slides: [
          { key: "visualInspection", title: "Visual inspection", body: "Image inspection includes controls, feature quality and global artifacts." },
          { key: "featureQuality", title: "Feature quality", body: "Each small square must be good enough for reliable intensity extraction." },
          { key: "gridAlignment", title: "Grid alignment", body: "The software aligns the grid and extracts a central pixel region per feature." },
          { key: "datCelProcessing", spotlight: true, title: "DAT → CEL", body: "This is the key visual for the raw image becoming a processed intensity matrix." },
          { key: "affyDataFlow", title: "Affymetrix data flow", body: "The diagram connects experimental information, DAT, CEL, CDF and downstream files." },
          { key: "fileTypes", title: "Affymetrix file types", body: "The slide lists probe information files, experiment files and result files." }
        ]
      },
      {
        eyebrow: "7 · Probe-level variability",
        title: "The same transcript can produce very different probe intensities",
        body: "A probe set contains different probe sequences for the same transcript. Spike-in experiments showed that variation among probes within the same probe set can be larger than variation for the same probe across arrays. This means probe sequence and affinity affect intensity.",
        professor: "When students ask why different probes for one transcript differ, she explains that each probe binds a different region of the transcript; different sequences have different affinity and therefore different intensity.",
        exam: {
          title: "Possible question: why is summarization necessary in Affymetrix data?",
          include: ["Define probe set: multiple probes representing one transcript.", "Explain that each probe has a different sequence and affinity.", "State that the final expression value requires summarizing those probe-level intensities into one number.", "Connect this to RMA/median polish."],
          trap: "Do not assume the average of probe intensities is straightforward. The lecture’s point is precisely that simple averaging is problematic when probe intensities differ so much.",
          model: "Affymetrix does not measure one transcript with a single probe. A transcript is represented by a probe set, usually containing several probes that bind different regions of the transcript. Because those probes have different sequences, GC content and binding affinities, their raw intensities can be very different even when they refer to the same transcript. Therefore the data must be summarized: multiple probe-level intensities are converted into one expression estimate for the probe set. RMA addresses this through a model that accounts for probe affinity and residual error before summarization."
        },
        slides: [
          { key: "probeVariationProblem", title: "Probe set variation", body: "The problem is not only between arrays; it also exists inside a probe set." },
          { key: "spikeinProbeVariation", spotlight: true, title: "Spike-in experiment", body: "The plot demonstrates that probe identity strongly affects intensity." }
        ]
      },
      {
        eyebrow: "8 · RMA: background correction, normalization, summarization",
        title: "RMA is the conceptual center of the lesson",
        body: "Robust Multi-chip Average starts with background-corrected, log-transformed probe intensities. Arrays are made comparable with quantile normalization. Then probe-level values are summarized into one expression value per probe set using an additive model and Tukey median polish.",
        professor: "She emphasizes that quantile normalization makes intensity distributions equal, not biological results equal. The aim is to remove array effects so that further statistics are meaningful.",
        exam: {
          title: "High-yield question: explain RMA.",
          include: ["RMA stands for Robust Multi-chip Average.", "Step 1: background correction.", "Step 2: quantile normalization across arrays to make intensity distributions comparable.", "Step 3: summarization of probes in each probe set into one expression value, using an additive model/median polish."],
          trap: "Do not present quantile normalization as forcing all genes to have the same expression. It equalizes distributions of intensity across arrays, preserving relative ranks/relationships used for comparison.",
          model: "RMA, or Robust Multi-chip Average, is a preprocessing method for Affymetrix arrays. It first corrects probe intensities for background and works on log-transformed values. Then it applies quantile normalization across chips, so that the arrays have comparable intensity distributions. Finally, it summarizes the multiple probes in each probe set into one expression estimate. This summarization uses a model that accounts for probe affinity and residual error, often implemented with Tukey median polish. The goal is to obtain reliable expression values for downstream statistical testing."
        },
        slides: [
          { key: "preprocessingSteps", title: "Three preprocessing steps", body: "Background correction, normalization and summarization are the three ideas to memorize." },
          { key: "rmaOverview", title: "RMA overview", body: "This slide names Robust Multi-chip Average and connects it to Affymetrix analysis." },
          { key: "quantileNormalization", title: "Data after quantile normalization", body: "After quantile normalization, arrays share the same intensity distribution." },
          { key: "transcriptCalculation", title: "How each transcript is calculated", body: "The question moves from individual probes to a probe-set expression value." },
          { key: "additiveModel", title: "Additive model", body: "Intensity is modeled as expression level plus probe affinity plus error." },
          { key: "tukeyMedianPolish", title: "Tukey median polish", body: "Median polish iteratively removes row and column effects to estimate residuals and expression." },
          { key: "fittedValuesSummary", title: "Final summarized values", body: "After residual correction, each probe set receives a final expression value for each chip." }
        ]
      },
      {
        eyebrow: "9 · Quality control after preprocessing",
        title: "Plots tell you whether normalization worked and which transcripts may be interesting",
        body: "After RMA, QC plots, MA-plots and boxplots should show comparable distributions. In one-colour arrays, the MA-plot compares two arrays rather than two dyes on the same array. The professor again reminds that fold-change is only an indication, not a statistical test.",
        professor: "She says MA-plots help both to assess normalization and to see possible candidate transcripts, but significance must be tested statistically.",
        exam: {
          title: "Possible question: what does an MA-plot show in one-colour arrays?",
          include: ["M is the log2 ratio between treated and control arrays.", "A is the average log intensity across the two arrays.", "A good normalized cloud should be centred and not intensity-dependent.", "Fold-change candidates must be followed by statistical testing."],
          trap: "Do not reuse the two-colour explanation blindly. In Affymetrix, the two values come from two different chips, not two channels on one chip.",
          model: "In Affymetrix one-colour arrays, an MA-plot can compare two chips, for example treated versus control. M is the log2 ratio between the two arrays, while A is the average log intensity. If preprocessing worked well, the cloud should be centred around zero and not show a strong dependence on intensity. Points far from zero may indicate transcripts with large fold-change, but fold-change alone is not a statistical test. These candidates must be evaluated with appropriate downstream statistics."
        },
        slides: [
          { key: "qcPlots", title: "QC plots in R", body: "Quality-control plots are used to inspect distributions and hybridization behaviour." },
          { key: "maPlotOneColor", title: "MA-plot for one-colour arrays", body: "Here M compares arrays rather than Cy3/Cy5 channels." },
          { key: "beforeAfterRma", spotlight: true, title: "MA-plots before/after RMA", body: "The visual shift shows why RMA matters before interpretation." },
          { key: "boxplotsBeforeAfter", title: "Boxplots before/after RMA", body: "Boxplots should become comparable after preprocessing." }
        ]
      },
      {
        eyebrow: "10 · Repositories, annotation and reproducibility",
        title: "To reuse public data, you need CEL files, annotation and transparent methods",
        body: "The lesson ends with newer arrays, annotation files, MIAME standards and GEO. The main message is reproducibility: publications and repositories must describe the array, preprocessing, filtering, software and biological design well enough for another team to repeat the analysis.",
        professor: "She explicitly connects this to thesis/paper writing: always state the platform, software, filtering and preprocessing because otherwise results cannot be reproduced.",
        exam: {
          title: "Possible question: why are MIAME/GEO important?",
          include: ["MIAME means Minimum Information About a Microarray Experiment.", "It exists because early microarray results were hard to compare without complete methodological information.", "GEO stores high-throughput expression data, including Affymetrix CEL files and experiment metadata.", "Explain reproducibility: another team should be able to obtain the same results from the same data and pipeline."],
          trap: "Do not treat GEO as just a place to download files. The exam-relevant point is metadata, reproducibility and knowing which files you are downloading.",
          model: "MIAME standards were introduced to ensure that microarray experiments are reported with enough detail to be reproducible. A paper should specify the platform, experimental design, preprocessing, filtering, software and normalization strategy. GEO, the Gene Expression Omnibus, is a repository where high-throughput expression data and metadata can be deposited and downloaded. For Affymetrix studies, researchers often download CEL files and reprocess them with a known pipeline. The key idea is that data are only useful if the biological question, metadata and preprocessing are transparent."
        },
        slides: [
          { key: "nextGenArrays", title: "Next-generation arrays", body: "Affymetrix evolved toward higher-throughput and richer transcriptome platforms." },
          { key: "humanTranscriptomeArray", title: "Human transcriptome array", body: "Newer arrays can cover exons, junctions, non-coding RNAs and more." },
          { key: "annotationFiles", title: "Array annotation files", body: "Annotation files tell you what each probe/probe set represents." },
          { key: "miameStandards", title: "MIAME standards", body: "Minimum information standards exist because methods and metadata matter." },
          { key: "geoRepository", title: "GEO repository", body: "GEO supports public deposition and reuse of high-throughput expression datasets." },
          { key: "geoCelFilesExample", title: "Example of CEL files", body: "The example shows how experimental design, replicates and CEL files appear in a repository." }
        ]
      }
    ],
    keyConcepts: [
      ["Noncompetitive / one-colour", "One biological sample per chip; comparisons are performed across chips."],
      ["Photolithography", "In situ synthesis of oligonucleotide probes using UV light and masks."],
      ["Feature / cell", "A small square on the chip containing many identical copies of one probe."],
      ["Probe set", "A group of probes used together to estimate one transcript's expression level."],
      ["PM/MM", "Perfect match and mismatch probes; MM was intended as background but often behaved unexpectedly."],
      ["DAT", "Raw scanned image file."],
      ["CEL", "Processed feature-intensity file used for analysis."],
      ["CDF", "Chip definition file mapping features to probes and probe sets."],
      ["RMA", "Background correction + quantile normalization + summarization."],
      ["MIAME/GEO", "Standards and repository infrastructure for reproducible microarray data."],
    ],
    quiz: [
      { q: "What makes Affymetrix GeneChip noncompetitive?", options: ["Two samples compete on the same array", "One sample is measured on one chip", "It uses Cy3 and Cy5 together", "It does not need normalization"], answer: 1 },
      { q: "What is a CEL file?", options: ["The original unprocessed image", "A chip definition map", "Processed feature-level intensities", "A final paper report"], answer: 2 },
      { q: "What problem did mismatch probes create?", options: ["They were always black", "They often showed higher intensity than perfect match probes", "They removed all background", "They made one-colour arrays into two-colour arrays"], answer: 1 },
      { q: "RMA includes which three major ideas?", options: ["Dye swap, PCA, clustering", "Background correction, normalization, summarization", "Bisulfite, methylation, beta values", "Sequencing, assembly, annotation"], answer: 1 },
      { q: "In one-colour MA-plots, what is compared?", options: ["Cy3 vs Cy5 on the same chip", "Two different arrays, such as treated vs control", "Only negative controls", "Only mismatch probes"], answer: 1 }
    ],
    writtenPrompt: "Explain the Affymetrix GeneChip workflow and why RMA preprocessing is necessary.",
    writtenModel: "Affymetrix GeneChip is a noncompetitive one-colour microarray platform where one sample is hybridized on one chip. The probes are synthesized in situ by photolithography, and each feature contains many identical oligonucleotide probes. A transcript is not measured by a single probe but by a probe set, usually containing several probes that bind different regions of the transcript. After sample preparation, hybridization, washing and scanning, the raw image is stored as a DAT file and processed into a CEL file containing feature intensities. These intensities cannot be interpreted directly because they include background, array effects and probe-sequence effects. RMA preprocessing corrects background, applies quantile normalization to make arrays comparable, and summarizes the probes in each probe set into one expression value. This produces data suitable for downstream statistical testing."
  },
  es: {
    mark: "Marcar completada",
    done: "Completada",
    dashboard: "Dashboard DRD",
    previous: "Anterior",
    next: "Siguiente",
    current: "Lección 3",
    previousTitle: "M1.2 Arrays Stanford",
    nextTitle: "M2.1 R/Bioconductor intro",
    heroEyebrow: "Module 1 · 6 de mayo · Affymetrix / ThermoFisher",
    heroTitle: "Arrays GeneChip no competitivos one-colour",
    heroSubtitle: "De fotolitografía y probe sets a archivos DAT/CEL, control de calidad, RMA, normalización quantile y summarization.",
    flow: ["historia", "síntesis in situ", "probe sets", "archivos QC", "RMA", "GEO/MIAME"],
    resources: "Recursos de clase",
    slides: "Slides",
    transcript: "Transcripción",
    recording: "Grabación",
    open: "Abrir",
    zoom: "Haz clic para ampliar",
    close: "Cerrar zoom",
    slideLabel: "Diapositiva",
    professor: "Énfasis de la profesora",
    exam: "Ojo para examen",
    examMore: "Ver respuesta ampliada",
    include: "Qué deberías incluir",
    trap: "Trampa frecuente",
    model: "Respuesta modelo",
    check: "Checkpoint",
    quizTitle: "Quiz rápido de control",
    writtenTitle: "Entrenador de examen escrito",
    answerPlaceholder: "Escribe aquí una respuesta de 10–12 líneas...",
    words: "palabras",
    modelAnswer: "Respuesta modelo",
    sections: [],
    keyConcepts: [
      ["Noncompetitive / one-colour", "Una muestra biológica por chip; las comparaciones se hacen entre chips."],
      ["Fotolitografía", "Síntesis in situ de oligonucleótidos usando luz UV y máscaras."],
      ["Feature / cell", "Pequeño cuadrado del chip con muchas copias idénticas de un probe."],
      ["Probe set", "Grupo de probes que juntos estiman la expresión de un transcript."],
      ["PM/MM", "Perfect match y mismatch; MM buscaba estimar background, pero muchas veces no funcionó como esperado."],
      ["DAT", "Imagen escaneada cruda."],
      ["CEL", "Archivo procesado con intensidades por feature, usado para análisis."],
      ["CDF", "Mapa del chip que relaciona features con probes y probe sets."],
      ["RMA", "Background correction + quantile normalization + summarization."],
      ["MIAME/GEO", "Estándares y repositorio para datos de microarrays reproducibles."],
    ],
    quiz: [
      { q: "¿Qué hace que Affymetrix GeneChip sea no competitivo?", options: ["Dos muestras compiten en el mismo array", "Una muestra se mide en un chip", "Usa Cy3 y Cy5 juntos", "No necesita normalización"], answer: 1 },
      { q: "¿Qué es un archivo CEL?", options: ["La imagen original sin procesar", "Un mapa de definición del chip", "Intensidades procesadas a nivel de feature", "Un informe final del paper"], answer: 2 },
      { q: "¿Qué problema generaron los mismatch probes?", options: ["Siempre eran negros", "A menudo tenían más intensidad que los perfect match", "Eliminaban todo el background", "Convertían arrays one-colour en two-colour"], answer: 1 },
      { q: "¿Qué tres ideas principales incluye RMA?", options: ["Dye swap, PCA, clustering", "Background correction, normalización, summarization", "Bisulfito, metilación, beta values", "Secuenciación, ensamblaje, anotación"], answer: 1 },
      { q: "En MA-plots one-colour, ¿qué se compara?", options: ["Cy3 vs Cy5 en el mismo chip", "Dos arrays distintos, por ejemplo treated vs control", "Solo controles negativos", "Solo mismatch probes"], answer: 1 }
    ],
    writtenPrompt: "Explica el workflow de Affymetrix GeneChip y por qué es necesario el preprocesamiento RMA.",
    writtenModel: "Affymetrix GeneChip es una plataforma de microarray no competitiva one-colour, donde una muestra se hibrida en un chip. Los probes se sintetizan in situ mediante fotolitografía, y cada feature contiene muchas copias idénticas de un oligonucleótido. Un transcript no se mide con un solo probe, sino con un probe set, normalmente formado por varios probes que reconocen distintas regiones del transcript. Después de preparar la muestra, hibridar, lavar y escanear, la imagen cruda se guarda como archivo DAT y se procesa en un archivo CEL con intensidades por feature. Estas intensidades no se pueden interpretar directamente porque incluyen background, efectos del array y efectos de secuencia de los probes. RMA corrige el background, aplica normalización quantile para hacer comparables los arrays y resume los probes de cada probe set en un único valor de expresión. Así se obtienen datos adecuados para el análisis estadístico posterior."
  },
  fa: {
    mark: "علامت کامل‌شده",
    done: "کامل‌شده",
    dashboard: "داشبورد DRD",
    previous: "قبلی",
    next: "بعدی",
    current: "درس ۳",
    previousTitle: "M1.2 آرایه‌های Stanford",
    nextTitle: "M2.1 R/Bioconductor intro",
    heroEyebrow: "ماژول ۱ · ۶ مه · Affymetrix / ThermoFisher",
    heroTitle: "آرایه‌های GeneChip غیررقابتی one-colour",
    heroSubtitle: "از فوتولیتوگرافی و probe set تا فایل‌های DAT/CEL، کنترل کیفیت، RMA، quantile normalization و summarization.",
    flow: ["تاریخچه", "سنتز in situ", "probe set", "فایل‌های QC", "RMA", "GEO/MIAME"],
    resources: "منابع کلاس",
    slides: "اسلایدها",
    transcript: "رونویسی",
    recording: "ضبط کلاس",
    open: "باز کردن",
    zoom: "برای بزرگ‌نمایی کلیک کنید",
    close: "بستن بزرگ‌نمایی",
    slideLabel: "اسلاید",
    professor: "تأکید استاد",
    exam: "نکتهٔ امتحان",
    examMore: "پاسخ بازشده را ببینید",
    include: "چه چیزهایی را بیاورید",
    trap: "اشتباه رایج",
    model: "پاسخ نمونه",
    check: "چک‌پوینت",
    quizTitle: "آزمونک سریع",
    writtenTitle: "تمرین پاسخ نوشتاری امتحان",
    answerPlaceholder: "اینجا یک پاسخ ۱۰–۱۲ خطی بنویسید...",
    words: "کلمه",
    modelAnswer: "پاسخ نمونه",
    sections: [],
    keyConcepts: [
      ["Noncompetitive / one-colour", "در هر چیپ فقط یک نمونهٔ زیستی اندازه‌گیری می‌شود؛ مقایسه بین چیپ‌هاست."],
      ["فوتولیتوگرافی", "سنتز in situ الیگونوکلئوتیدها با نور UV و mask."],
      ["Feature / cell", "مربع کوچک روی چیپ که تعداد زیادی کپی یکسان از یک probe دارد."],
      ["Probe set", "گروهی از probeها که با هم بیان یک transcript را تخمین می‌زنند."],
      ["PM/MM", "Perfect match و mismatch؛ MM برای background بود اما همیشه مطابق انتظار عمل نکرد."],
      ["DAT", "تصویر خام اسکن‌شده."],
      ["CEL", "فایل پردازش‌شدهٔ شدت‌های feature برای تحلیل."],
      ["CDF", "نقشهٔ چیپ که featureها را به probe و probe set وصل می‌کند."],
      ["RMA", "Background correction + quantile normalization + summarization."],
      ["MIAME/GEO", "استانداردها و مخزن داده برای بازتولیدپذیری microarray."],
    ],
    quiz: [
      { q: "چه چیزی GeneChip را غیررقابتی می‌کند؟", options: ["دو نمونه روی یک array رقابت می‌کنند", "هر نمونه روی یک چیپ جداگانه اندازه‌گیری می‌شود", "Cy3 و Cy5 همزمان استفاده می‌شوند", "نیازی به normalization ندارد"], answer: 1 },
      { q: "فایل CEL چیست؟", options: ["تصویر خام و پردازش‌نشده", "نقشهٔ تعریف چیپ", "شدت‌های پردازش‌شده در سطح feature", "گزارش نهایی مقاله"], answer: 2 },
      { q: "مشکل mismatch probe چه بود؟", options: ["همیشه سیاه بود", "اغلب شدت بیشتری از perfect match داشت", "تمام background را حذف می‌کرد", "one-colour را به two-colour تبدیل می‌کرد"], answer: 1 },
      { q: "RMA شامل کدام سه ایده است؟", options: ["Dye swap، PCA، clustering", "Background correction، normalization، summarization", "Bisulfite، methylation، beta values", "Sequencing، assembly، annotation"], answer: 1 },
      { q: "در MA-plot آرایهٔ one-colour چه چیزی مقایسه می‌شود؟", options: ["Cy3 و Cy5 روی یک چیپ", "دو array مختلف مثل treated و control", "فقط کنترل‌های منفی", "فقط mismatch probes"], answer: 1 }
    ],
    writtenPrompt: "workflow Affymetrix GeneChip را توضیح دهید و بگویید چرا preprocessing با RMA لازم است.",
    writtenModel: "Affymetrix GeneChip یک پلتفرم microarray غیررقابتی و one-colour است که در آن هر نمونه روی یک چیپ جداگانه hybridize می‌شود. probeها با فوتولیتوگرافی به‌صورت in situ ساخته می‌شوند و هر feature کپی‌های فراوانی از یک oligonucleotide دارد. هر transcript با یک probe منفرد اندازه‌گیری نمی‌شود، بلکه با یک probe set شامل چند probe که بخش‌های مختلف transcript را می‌شناسند. پس از آماده‌سازی نمونه، hybridization، شست‌وشو و اسکن، تصویر خام به‌صورت DAT ذخیره می‌شود و به CEL با intensityهای feature تبدیل می‌شود. این intensityها مستقیماً قابل تفسیر نیستند چون background، اثر array و اثر sequence probe دارند. RMA background را اصلاح می‌کند، quantile normalization را برای مقایسه‌پذیر کردن arrayها انجام می‌دهد و probeهای هر probe set را به یک مقدار expression خلاصه می‌کند."
  }
};

// Reuse the complete English content for Spanish/Farsi structure, replacing visible UI strings and key study text.
COPY.es.sections = COPY.en.sections.map((section, idx) => {
  const esSections = [
    ["1 · Por qué importa esta lección", "Pasamos de arrays competitivos two-colour a GeneChip one-colour", "La profesora empieza recordando que normalizar no significa volver idénticos los resultados biológicos; significa hacer comparables las distribuciones de intensidad. Luego cambia completamente la tecnología: Affymetrix es no competitivo, one-colour y usa una muestra por array.", "Dice explícitamente que comparar arrays competitivos y no competitivos puede ser una pregunta de examen, así que esta lección debe estudiarse en contraste con Stanford arrays."],
    ["2 · Lógica de fabricación", "La fotolitografía construye los probes directamente sobre el chip", "A diferencia de Stanford, los oligonucleótidos no se sintetizan primero para luego spotearse. En Affymetrix, luz UV, máscaras y grupos protectores permiten añadir nucleótidos in situ, feature por feature. Cada feature contiene muchas copias idénticas de una secuencia de probe.", "La profesora insiste en que esto fue revolucionario porque los probes quedan fijos y sintetizados directamente en el soporte, y cada feature/cell contiene una cadena distinta de oligonucleótidos."],
    ["3 · Plataforma one-colour e instrumentación", "Una muestra por chip, un canal, pero muchos arrays que comparar", "Los cartuchos GeneChip pueden usarse para expresión, genotipado, miRNA u otros targets. La plataforma incluye hibridación, lavado/fluidics y escaneo. Como cada chip contiene una muestra biológica, comparar condiciones implica comparar chips distintos.", "Ella enfatiza que esta plataforma evita el problema de los dos dyes, pero no elimina la variabilidad experimental: instrumento, lavado, diferencias entre chips y preprocesamiento siguen importando."],
    ["4 · Probe sets, PM/MM y el problema mismatch", "Un transcript se representa con varios probes, no con un solo spot", "Para cada transcript, Affymetrix usa probe sets: a menudo unos 11 probes de alrededor de 25 bases. Los arrays tempranos emparejaban perfect match con mismatch. El mismatch pretendía estimar background inespecífico, pero muchas veces daba una señal mayor que el perfect match.", "La profesora dedica tiempo a esto porque explica por qué cambiaron los algoritmos y los diseños posteriores: la comunidad científica prefirió cada vez más usar solo perfect match."],
    ["5 · Preparación del target y detección de señal", "El protocolo es complejo; estúdialo para entender variabilidad, no para memorizar cada enzima", "El protocolo parte de mRNA y produce sense cDNA mediante varios pasos. UDG y endonucleasa fragmentan el DNA en posiciones con uracilo, se añade biotina y, tras la hibridación, streptavidin conjugada con phycoerythrin genera fluorescencia.", "Ella dice que no espera el protocolo completo de memoria. Lo muestra para entender la complejidad, las fuentes de variabilidad experimental y la diferencia con los arrays competitivos."],
    ["6 · QC de imagen y tipos de archivo", "DAT es la imagen cruda; CEL es la matriz de intensidades procesadas usada para análisis", "El software procesa la imagen: inspección visual, alineamiento de grid, centrado de features y resumen de píxeles. DAT y CEL son vocabulario esencial. DAT es la imagen original; CEL contiene valores de intensidad procesados por feature. CDF mapea features a probes/probe sets, y CHP/report son salidas más downstream.", "Dice explícitamente que DAT vs CEL es una pregunta típica de examen y que los archivos CEL son los que se descargan comúnmente de GEO para análisis Affymetrix."],
    ["7 · Variabilidad a nivel de probe", "El mismo transcript puede producir intensidades muy distintas entre probes", "Un probe set contiene distintas secuencias de probes para el mismo transcript. Experimentos spike-in mostraron que la variación entre probes del mismo probe set puede ser mayor que la variación del mismo probe entre arrays. Eso significa que la secuencia y la afinidad del probe afectan la intensidad.", "Cuando los estudiantes preguntan por qué difieren los probes de un mismo transcript, ella explica que cada probe se une a una región distinta; distintas secuencias tienen distinta afinidad y, por tanto, distinta intensidad."],
    ["8 · RMA: background correction, normalization, summarization", "RMA es el centro conceptual de la lección", "Robust Multi-chip Average parte de intensidades corregidas por background y transformadas en log. Los arrays se hacen comparables con quantile normalization. Luego los valores de probe se resumen en un valor de expresión por probe set mediante un modelo aditivo y Tukey median polish.", "Ella enfatiza que quantile normalization hace iguales las distribuciones de intensidad, no los resultados biológicos. El objetivo es quitar efectos del array para que la estadística posterior tenga sentido."],
    ["9 · Control de calidad después del preprocesamiento", "Los plots dicen si la normalización funcionó y qué transcripts podrían ser interesantes", "Después de RMA, QC plots, MA-plots y boxplots deben mostrar distribuciones comparables. En arrays one-colour, el MA-plot compara dos arrays, no dos dyes en el mismo array. La profesora recuerda otra vez que fold-change es solo una indicación, no un test estadístico.", "Dice que los MA-plots sirven tanto para evaluar la normalización como para ver posibles transcripts candidatos, pero la significancia debe probarse estadísticamente."],
    ["10 · Repositorios, anotación y reproducibilidad", "Para reutilizar datos públicos necesitas CEL files, anotación y métodos transparentes", "La lección termina con arrays más nuevos, annotation files, estándares MIAME y GEO. El mensaje principal es reproducibilidad: las publicaciones y repositorios deben describir array, preprocesamiento, filtrado, software y diseño biológico lo suficiente para que otro equipo repita el análisis.", "Conecta esto con tesis y papers: siempre hay que declarar plataforma, software, filtrado y preprocesamiento porque, si no, los resultados no son reproducibles."]
  ];
  const [eyebrow, title, body, professor] = esSections[idx];
  return { ...section, eyebrow, title, body, professor };
});
COPY.fa.sections = COPY.en.sections.map((section, idx) => {
  const faSections = [
    ["۱ · چرا این درس مهم است", "از آرایه‌های رقابتی two-colour به GeneChip one-colour می‌رویم", "استاد ابتدا یادآوری می‌کند که normalization نتایج زیستی را یکسان نمی‌کند؛ بلکه توزیع intensityها را قابل‌مقایسه می‌کند. سپس فناوری عوض می‌شود: Affymetrix غیررقابتی است، one-colour است و هر array یک نمونه دارد.", "استاد می‌گوید مقایسهٔ competitive و noncompetitive می‌تواند سؤال امتحان باشد؛ پس این درس باید در مقایسه با Stanford arrays خوانده شود."],
    ["۲ · منطق ساخت", "فوتولیتوگرافی probeها را مستقیماً روی چیپ می‌سازد", "برخلاف Stanford، oligonucleotideها ابتدا جداگانه ساخته و سپس spotted نمی‌شوند. در Affymetrix، نور UV، mask و گروه‌های محافظ اجازه می‌دهند نوکلئوتیدها in situ و feature به feature اضافه شوند. هر feature تعداد زیادی کپی یکسان از یک probe دارد.", "استاد تأکید می‌کند که این فناوری انقلابی بود، چون probeها مستقیماً روی support ساخته و ثابت می‌شوند و هر feature/cell زنجیرهٔ متفاوتی دارد."],
    ["۳ · پلتفرم one-colour و ابزار", "یک نمونه برای هر چیپ، یک کانال، اما چندین array برای مقایسه", "کارتریج‌های GeneChip برای expression، genotyping، miRNA و targetهای دیگر استفاده می‌شوند. پلتفرم شامل hybridization، washing/fluidics و scanning است. چون هر chip یک نمونه دارد، مقایسهٔ شرایط یعنی مقایسهٔ chipهای متفاوت.", "استاد توضیح می‌دهد که این پلتفرم مشکل دو dye را ندارد، اما variability فنی هنوز هست: دستگاه، شست‌وشو، تفاوت chipها و preprocessing."],
    ["۴ · Probe set، PM/MM و مشکل mismatch", "یک transcript با چند probe نشان داده می‌شود، نه یک spot", "برای هر transcript، Affymetrix از probe set استفاده می‌کند: معمولاً حدود ۱۱ probe با طول حدود ۲۵ باز. آرایه‌های اولیه perfect match را با mismatch جفت می‌کردند. mismatch قرار بود background را تخمین بزند، اما اغلب intensity بیشتری از perfect match داشت.", "استاد زمان زیادی برای این موضوع می‌گذارد، چون نشان می‌دهد چرا الگوریتم‌ها و طراحی‌های بعدی تغییر کردند و استفاده از PM-only رایج‌تر شد."],
    ["۵ · آماده‌سازی target و detection", "پروتکل پیچیده است؛ آن را برای فهم variability بخوانید، نه حفظ کردن همهٔ enzymeها", "پروتکل از mRNA شروع می‌کند و در چند مرحله sense cDNA تولید می‌کند. UDG و endonuclease DNA را در جایگاه‌های uracil fragment می‌کنند، biotin اضافه می‌شود و پس از hybridization، streptavidin متصل به phycoerythrin سیگنال fluorescent می‌دهد.", "استاد می‌گوید حفظ کامل پروتکل لازم نیست. هدف نشان دادن پیچیدگی، منابع variability و تفاوت با arrays رقابتی است."],
    ["۶ · QC تصویر و انواع فایل", "DAT تصویر خام است؛ CEL ماتریس intensity پردازش‌شده برای تحلیل است", "نرم‌افزار تصویر را پردازش می‌کند: visual inspection، grid alignment، مرکز کردن featureها و خلاصه‌سازی pixelها. DAT و CEL واژگان کلیدی‌اند. DAT تصویر اولیه است؛ CEL intensity پردازش‌شدهٔ featureها را دارد. CDF featureها را به probe/probe set وصل می‌کند.", "استاد می‌گوید DAT vs CEL سؤال رایج امتحان است و فایل‌های CEL همان فایل‌هایی هستند که معمولاً از GEO برای Affymetrix دانلود می‌شوند."],
    ["۷ · variability در سطح probe", "یک transcript می‌تواند intensityهای بسیار متفاوتی بین probeها بدهد", "یک probe set شامل probeهای مختلف برای یک transcript است. آزمایش‌های spike-in نشان دادند variation بین probeهای یک probe set می‌تواند از variation همان probe بین arrayها بزرگ‌تر باشد. پس sequence و affinity probe روی intensity اثر دارند.", "وقتی دانشجوها می‌پرسند چرا probeهای یک transcript فرق دارند، استاد توضیح می‌دهد که هر probe به ناحیهٔ متفاوتی متصل می‌شود و affinity متفاوت دارد."],
    ["۸ · RMA: background correction، normalization، summarization", "RMA مرکز مفهومی درس است", "Robust Multi-chip Average با intensityهای background-corrected و log-transformed شروع می‌شود. arrayها با quantile normalization قابل‌مقایسه می‌شوند. سپس probeها با additive model و Tukey median polish به یک مقدار expression برای هر probe set خلاصه می‌شوند.", "استاد تأکید می‌کند که quantile normalization توزیع intensityها را برابر می‌کند، نه نتایج زیستی را. هدف حذف array effect برای تحلیل آماری بعدی است."],
    ["۹ · کنترل کیفیت پس از preprocessing", "نمودارها نشان می‌دهند normalization جواب داده و کدام transcriptها جالب‌اند", "بعد از RMA، QC plotها، MA-plotها و boxplotها باید توزیع‌های قابل‌مقایسه نشان دهند. در آرایه‌های one-colour، MA-plot دو array را مقایسه می‌کند، نه دو dye روی یک array. استاد یادآوری می‌کند که fold-change فقط indication است، نه تست آماری.", "استاد می‌گوید MA-plot هم برای ارزیابی normalization و هم برای دیدن candidate transcriptها مفید است، اما significance باید با تست آماری بررسی شود."],
    ["۱۰ · repository، annotation و reproducibility", "برای استفادهٔ دوباره از دادهٔ عمومی به CEL، annotation و روش شفاف نیاز دارید", "درس با arrayهای جدیدتر، annotation fileها، استاندارد MIAME و GEO پایان می‌یابد. پیام اصلی reproducibility است: مقاله و repository باید platform، preprocessing، filtering، software و design را دقیق توضیح دهند.", "استاد این را به پایان‌نامه و مقاله وصل می‌کند: همیشه platform، software، filtering و preprocessing را بنویسید، وگرنه نتایج بازتولیدپذیر نیستند."]
  ];
  const [eyebrow, title, body, professor] = faSections[idx];
  return { ...section, eyebrow, title, body, professor };
});

const toneClasses = {
  red: "border-red-200 bg-red-50 text-red-800",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
  stone: "border-stone-200 bg-stone-50 text-stone-700",
  sky: "border-sky-200 bg-sky-50 text-sky-800"
};

function getCopy(lang = "es") { return COPY[lang] || COPY.es; }
function cn(...classes) { return classes.filter(Boolean).join(" "); }
function wordCount(text = "") { return text.trim() ? text.trim().split(/\s+/).length : 0; }

function getHeroMeta(copy) {
  const current = String(copy.current || "");
  if (current.includes("درس")) {
    return {
      module: "ماژول", exam: "امتحان", answer: "پاسخ", core: "هسته",
      tags: ["one-colour", "Affymetrix", "GeneChip", "PM/MM", "CEL/CDF", "RMA"],
      bigIdea: "ایدهٔ اصلی",
      bigIdeaText: "در GeneChip یک نمونه روی یک chip خوانده می‌شود؛ بنابراین مقایسهٔ زیستی فقط زمانی معتبر است که تصویر، فایل‌ها، probe setها و RMA درست فهمیده و نرمال‌سازی شوند."
    };
  }
  if (current.includes("Lesson")) {
    return {
      module: "Module", exam: "Exam", answer: "Answer", core: "Core",
      tags: ["one-colour", "Affymetrix", "GeneChip", "PM/MM", "CEL/CDF", "RMA"],
      bigIdea: "Big idea",
      bigIdeaText: "In GeneChip, one sample is read on one chip; biological comparison only becomes meaningful after image QC, file mapping, probe-set summarization and RMA normalization."
    };
  }
  return {
    module: "Module", exam: "Examen", answer: "Respuesta", core: "Núcleo",
    tags: ["one-colour", "Affymetrix", "GeneChip", "PM/MM", "CEL/CDF", "RMA"],
    bigIdea: "Idea central",
    bigIdeaText: "En GeneChip, una muestra se lee en un chip; la comparación biológica solo tiene sentido después de QC de imagen, mapeo de archivos, resumen de probe sets y normalización RMA."
  };
}

function Pill({ children, tone = "red" }) {
  return <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-black", toneClasses[tone] || toneClasses.red)}>{children}</span>;
}

function SectionHeader({ eyebrow, title, children }) {
  return <div className="mb-6"><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children && <p className="mt-3 max-w-4xl text-base font-semibold leading-8 text-stone-600">{children}</p>}</div>;
}

function StatCard({ label, value, tone = "stone" }) {
  return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div><div className="mt-1 text-2xl font-black text-stone-950">{value}</div></div>;
}

function ResourceLinks({ copy }) {
  const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-sm";
  return <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{copy.resources}</div><div className="grid gap-2 sm:grid-cols-3"><a href={SLIDES_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-red-200 bg-red-50 text-red-800 hover:bg-white`}>{copy.slides}</a><a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-200 bg-white text-stone-800 hover:bg-stone-50`}>{copy.transcript}</a><a href={CLASS_RECORDING_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-800 bg-stone-950 text-white hover:bg-red-700`}>{copy.recording}</a></div></div>;
}

function LessonNav({ copy, isDone, toggle, position = "top" }) {
  return <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation"><div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><a href="#/lesson/m1-stanford" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {copy.previous}: {copy.previousTitle}</a><div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center"><a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-50">{copy.current} · {copy.dashboard}</a><button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? copy.done : copy.mark}</button></div><a href="#/lesson/m2-r" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">{copy.next}: {copy.nextTitle} →</a></div></nav>;
}

function Hero({ copy }) {
  const meta = getHeroMeta(copy);
  return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.heroEyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.heroTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{copy.heroSubtitle}</p><div className="mt-6 flex flex-wrap gap-2">{meta.tags.map(tag => <Pill key={tag} tone={tag.includes("RMA") || tag.includes("PM") ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={meta.module} value="1" tone="red"/><StatCard label={meta.exam} value="4Q"/><StatCard label={meta.answer} value="10–12"/><StatCard label={meta.core} value="PM/RMA" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{meta.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{meta.bigIdeaText}</p></div><ResourceLinks copy={copy}/></div></div></div></section>;
}

function ExamWatchCard({ data, copy }) {
  if (!data) return null;
  return <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
    <div className="text-xs font-black uppercase tracking-[0.16em] text-red-700">{copy.exam}</div>
    <p className="mt-1 text-sm font-bold leading-6 text-red-950">{data.title}</p>
    <details className="mt-3 rounded-2xl border border-red-200/80 bg-white/80 p-3 open:bg-white">
      <summary className="cursor-pointer list-none text-sm font-black text-red-800 marker:hidden">{copy.examMore}</summary>
      <div className="mt-3 space-y-3 text-sm font-semibold leading-6 text-stone-700">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-500">{copy.include}</div>
          <ul className="mt-2 space-y-2">{data.include.map(point => <li key={point} className="flex gap-2"><span className="mt-1 text-red-600">•</span><span>{point}</span></li>)}</ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3"><div className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-800">{copy.trap}</div><p className="mt-1 font-bold text-amber-950">{data.trap}</p></div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3"><div className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-500">{copy.model}</div><p className="mt-1 font-bold text-stone-900">{data.model}</p></div>
      </div>
    </details>
  </div>;
}

function SlideFigure({ figure, copy, onZoom, isFull, professor, exam }) {
  const image = IMG[figure.key];
  if (!image) return null;
  const noteText = figure.professor || professor;
  const examData = figure.exam || exam;
  const showNotes = Boolean(isFull && (noteText || examData));
  return <article className={cn("overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm", isFull && "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]")}><button type="button" onClick={() => onZoom({ ...figure, ...image })} className={cn("group relative block w-full cursor-zoom-in border-b border-stone-200 bg-white p-3 text-left", isFull && "lg:border-b-0 lg:border-r")}><div className={cn("aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white", isFull && "lg:aspect-auto lg:h-full")}><img src={image.src} alt={figure.title} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></div><span className="pointer-events-none absolute bottom-6 right-6 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-stone-700 shadow-sm transition group-hover:-translate-y-0.5">{copy.zoom}</span></button><div className="p-5"><Pill tone="red">{copy.slideLabel} {image.slide}</Pill><h3 className="mt-3 text-xl font-black text-stone-950">{figure.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{figure.body}</p>{showNotes && <><div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">{copy.professor}</div><p className="mt-1 text-sm font-bold leading-6 text-amber-950">{noteText}</p></div><ExamWatchCard data={examData} copy={copy}/></>}</div></article>;
}

function SlideGrid({ slides = [], copy, onZoom, professor, exam }) {
  return <div className="mt-6 grid gap-4 lg:grid-cols-2">{slides.map((figure, idx) => { const isFull = Boolean(figure.spotlight || (slides.length % 2 === 1 && idx === slides.length - 1)); return <SlideFigure key={`${figure.key}-${idx}`} figure={figure} copy={copy} onZoom={onZoom} professor={professor} exam={exam} isFull={isFull} />; })}</div>;
}

function ZoomModal({ item, copy, onClose }) {
  if (!item) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4" onClick={onClose}><div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><Pill tone="red">{copy.slideLabel} {item.slide}</Pill><h3 className="mt-2 text-xl font-black text-stone-950">{item.title}</h3></div><button onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-red-700">{copy.close}</button></div><img src={item.src} alt={item.title} className="w-full rounded-[1.5rem] object-contain" /><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{item.body}</p></div></div>;
}

function ExamWatch({ data, copy }) {
  if (!data) return null;
  return <details className="mt-5 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 text-amber-950" open><summary className="cursor-pointer text-base font-black">⚑ {copy.exam}: {data.title} · {copy.examMore}</summary><div className="mt-4 grid gap-4 lg:grid-cols-3"><div className="rounded-2xl bg-white/70 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{copy.include}</div><ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold leading-6">{data.include.map(item => <li key={item}>{item}</li>)}</ul></div><div className="rounded-2xl bg-white/70 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{copy.trap}</div><p className="mt-3 text-sm font-semibold leading-6">{data.trap}</p></div><div className="rounded-2xl bg-white/70 p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{copy.model}</div><p className="mt-3 text-sm font-semibold leading-6">{data.model}</p></div></div></details>;
}

function ProfessorNote({ children, copy }) {
  return <div className="mt-5 rounded-[1.75rem] border border-sky-200 bg-sky-50 p-5 text-sky-950"><div className="text-xs font-black uppercase tracking-[0.18em] text-sky-700">{copy.professor}</div><p className="mt-2 text-sm font-semibold leading-7">{children}</p></div>;
}

function TakeHomeCard({ lab }) {
  return <div className="mt-6 rounded-[2rem] border border-red-200 bg-red-50 p-5 lg:p-6"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{lab.takeHome}</div><p className="mt-2 text-sm font-black leading-7 text-red-950">{lab.takeHomeText}</p><div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{lab.takeHomeSteps.map(([title, body], idx) => <div key={title} className="rounded-2xl border border-red-100 bg-white/75 p-4"><div className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">{idx + 1}</span><h4 className="text-sm font-black text-red-950">{title}</h4></div><p className="mt-2 text-xs font-bold leading-6 text-red-900">{body}</p></div>)}</div><p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-black leading-7 text-amber-950">{lab.takeHomeClosing}</p></div>;
}

function LessonSection({ section, copy, onZoom, children, inlineType }) {
  if (inlineType === "decision") {
    const lab = getInteractiveCopy(copy);
    const slides = section.slides || [];
    return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={section.eyebrow} title={section.title}>{section.body}</SectionHeader><div className="mt-6 grid gap-4 lg:grid-cols-2">{slides.map((figure, idx) => { const isFull = Boolean(figure.spotlight); return <SlideFigure key={`${figure.key}-${idx}`} figure={figure} copy={copy} onZoom={onZoom} professor={section.professor} exam={section.exam} isFull={isFull} />; })}<QCDecisionLabs lab={lab} mode="decision"/></div><TakeHomeCard lab={lab}/></section>;
  }
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={section.eyebrow} title={section.title}>{section.body}</SectionHeader><SlideGrid slides={section.slides} copy={copy} onZoom={onZoom} professor={section.professor} exam={section.exam}/>{children}</section>;
}

function KeyConcepts({ copy }) {
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="Glossary" title="Key concepts / Conceptos clave">{copy.heroSubtitle}</SectionHeader><div className="grid gap-3 md:grid-cols-2">{copy.keyConcepts.map(([term, definition]) => <article key={term} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-lg font-black text-stone-950">{term}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{definition}</p></article>)}</div></section>;
}


function getInteractiveCopy(copy) {
  const isFa = String(copy.current || "").includes("درس");
  const isEn = String(copy.current || "").includes("Lesson");
  if (isFa) return {
    eyebrow: "تمرین‌های تعاملی",
    title: "لایهٔ آموزشی اضافه برای Affymetrix",
    intro: "این بخش چیزی فراتر از اسلایدهاست: مفاهیمی را که در امتحان ممکن است به‌صورت مقایسه، workflow یا تفسیر داده بیایند، به‌صورت تمرین فعال مرور می‌کند.",
    pmTitle: "PM/MM simulator",
    pmIntro: "Perfect Match باید سیگنال هدف را نشان دهد؛ Mismatch قرار بود background را تخمین بزند، اما در عمل گاهی از PM قوی‌تر می‌شود.",
    pm: "Perfect Match",
    mm: "Mismatch",
    specific: "PM − MM",
    pmGood: "PM بزرگ‌تر از MM است؛ این حالت با انتظار اولیه سازگار است.",
    pmBad: "هشدار: MM از PM بزرگ‌تر است. این همان trap مهم درس است و نشان می‌دهد چرا MM correction قابل اعتماد نبود.",
    fileTitle: "DAT → CEL → CDF → CHP workflow",
    fileIntro: "روی هر فایل کلیک کن تا ببینی در workflow Affymetrix چه نقشی دارد.",
    files: [
      ["DAT", "تصویر خام scanner؛ هنوز grid و feature intensity قابل استفاده برای تحلیل ندارد."],
      ["CEL", "فایل کلیدی برای reanalysis؛ intensity پردازش‌شدهٔ featureها بعد از image processing."],
      ["CDF", "Chip Definition File؛ نقشه‌ای که می‌گوید هر feature به کدام probe و probe set تعلق دارد."],
      ["CHP", "خروجی downstream یا summarized report؛ برای بازتحلیل معمولاً CEL مهم‌تر است."]
    ],
    rmaTitle: "RMA mini-lab",
    rmaIntro: "RMA را به‌عنوان سه کار جدا بخوان: background correction، quantile normalization و summarization.",
    rmaSteps: [
      ["1", "Background correction", "شدت خام شامل سیگنال واقعی و background است. قبل از تفسیر باید background correction انجام شود."],
      ["2", "Quantile normalization", "توزیع intensity در arrays مختلف هم‌شکل می‌شود تا chipها قابل مقایسه باشند."],
      ["3", "Summarization", "چند probe از یک probe set به یک مقدار expression برای transcript خلاصه می‌شوند."],
    ],
    qnTitle: "Quantile normalization toy example",
    qnIntro: "مقادیر هر array مرتب می‌شوند، رتبه‌های مشابه average می‌گیرند، سپس مقدار متوسط به رتبهٔ اصلی برگردانده می‌شود.",
    qcTitle: "QC checklist",
    qcIntro: "مواردی را که قبل از اعتماد به CEL/RMA باید بررسی شوند علامت بزن.",
    qcItems: ["grid alignment درست است", "featureها اشباع یا مخدوش نیستند", "control probes رفتار قابل انتظار دارند", "boxplot/MA-plot بعد از RMA متعادل‌تر است"],
    decisionTitle: "Competitive vs noncompetitive quick sorter",
    decisionIntro: "هر سناریو را به platform درست وصل کن.",
    scenarios: [
      { prompt: "دو sample روی یک array با Cy3/Cy5", answer: "Competitive", why: "این همان منطق Stanford two-colour است." },
      { prompt: "یک sample در هر GeneChip و مقایسه بین chipها", answer: "Noncompetitive", why: "این منطق Affymetrix one-colour است." },
      { prompt: "مشکل اصلی: dye bias", answer: "Competitive", why: "bias بین fluorochromeها مخصوص two-colour است." },
      { prompt: "مشکل اصلی: بین chips normalization و summarization", answer: "Noncompetitive", why: "Affymetrix به RMA و comparability بین arrays نیاز دارد." }
    ],
    choose: "انتخاب کن",
    correct: "درست",
    review: "مرور کن",
    takeHome: "Take-home",
    takeHomeText: "در پاسخ امتحان، Affymetrix را فقط با عبارت ‘one-colour’ تمام نکن. آن را مثل یک workflow کامل توضیح بده؛ یعنی از ساخت تراشه تا فایل‌ها، QC، normalization و قابلیت بازتولید نتایج.",
    takeHomeSteps: [
      ["Chip fabrication", "probeها روی GeneChip با photolithography و سنتز in situ ساخته می‌شوند. هر feature/cell هزاران نسخه از یک oligonucleotide یکسان دارد و probe setها روی ماتریس پخش‌اند."],
      ["Target preparation", "RNA نمونه به cDNA/cRNA یا target مناسب تبدیل، fragmented و biotinylated می‌شود. استاد تأکید کرد لازم نیست جزئیات پروتکل را حفظ کنی، اما باید بفهمی این مراحل منبع experimental variability هستند."],
      ["Hybridization + washing + scan", "در Affymetrix هر chip معمولاً یک sample دارد. target به probeها hybridize می‌شود، شستشو انجام می‌شود، سیستم biotin–streptavidin–fluorochrome سیگنال را قابل اسکن می‌کند و intensity هر feature به binding مربوط می‌شود."],
      ["DAT / CEL / CDF", "DAT تصویر خام scanner است؛ CEL فایل processed feature intensity است و معمولاً برای reanalysis مهم‌ترین فایل است؛ CDF نقشه‌ای است که می‌گوید هر feature به کدام probe و probe set تعلق دارد."],
      ["QC", "قبل از اعتماد به داده، باید image inspection، grid alignment، کیفیت featureها و control/spike-inها بررسی شوند. این همان پل بین تصویر خام و داده قابل تحلیل است."],
      ["RMA", "RMA یعنی background correction، quantile normalization برای قابل‌مقایسه‌کردن chipها، و summarization برای تبدیل چند probe یک probe set به یک مقدار expression برای transcript."],
      ["GEO / MIAME", "در پایان، داده و روش باید با اطلاعات کافی منتشر شوند: platform، design، فایل‌ها، preprocessing، filtering و normalization. هدف این است که تیم دیگر بتواند همان تحلیل را بازتولید کند."]
    ],
    takeHomeClosing: "زاویهٔ امتحانی: اگر سؤال compare competitive and noncompetitive arrays آمد، Affymetrix را در برابر Stanford two-colour با کل pipeline مقایسه کن، نه فقط با تعداد رنگ‌ها."
  };
  if (isEn) return {
    eyebrow: "Interactive study labs",
    title: "Extra teaching layer for Affymetrix",
    intro: "This section goes beyond the slides: it turns the main exam-relevant concepts into active practice, so you can explain the workflow instead of just recognizing the figures.",
    pmTitle: "PM/MM simulator",
    pmIntro: "Perfect Match should capture target signal; Mismatch was intended to estimate background, but in real arrays it could be stronger than PM.",
    pm: "Perfect Match",
    mm: "Mismatch",
    specific: "PM − MM",
    pmGood: "PM is higher than MM, which matches the original expectation.",
    pmBad: "Warning: MM is higher than PM. This is the key trap from the lecture and explains why MM correction was unreliable.",
    fileTitle: "DAT → CEL → CDF → CHP workflow",
    fileIntro: "Click each file type to review its role in the Affymetrix workflow.",
    files: [
      ["DAT", "Raw scanner image; not yet a feature-intensity table for analysis."],
      ["CEL", "Key reanalysis file; processed feature-level intensities after image processing."],
      ["CDF", "Chip Definition File; maps each feature to its probe and probe set."],
      ["CHP", "Downstream summarized report; CEL is usually more important for reanalysis."]
    ],
    rmaTitle: "RMA mini-lab",
    rmaIntro: "Study RMA as three different jobs: background correction, quantile normalization and summarization.",
    rmaSteps: [
      ["1", "Background correction", "Raw intensities include true signal plus background. Correction is needed before interpretation."],
      ["2", "Quantile normalization", "The intensity distribution is made comparable across arrays, so chips can be compared."],
      ["3", "Summarization", "Multiple probes from the same probe set are condensed into one expression value."],
    ],
    qnTitle: "Quantile normalization toy example",
    qnIntro: "Values are sorted within each array, values with the same rank are averaged, and the averaged ranks are mapped back to the original order.",
    qcTitle: "QC checklist",
    qcIntro: "Check what you should inspect before trusting CEL/RMA values.",
    qcItems: ["grid alignment is correct", "features are not saturated or damaged", "control probes behave as expected", "boxplot/MA-plot improves after RMA"],
    decisionTitle: "Competitive vs noncompetitive quick sorter",
    decisionIntro: "Assign each scenario to the correct platform logic.",
    scenarios: [
      { prompt: "two samples on one array with Cy3/Cy5", answer: "Competitive", why: "That is the Stanford two-colour logic." },
      { prompt: "one sample per GeneChip and comparison across chips", answer: "Noncompetitive", why: "That is the Affymetrix one-colour logic." },
      { prompt: "main issue: dye bias", answer: "Competitive", why: "Fluorochrome bias is specific to two-colour arrays." },
      { prompt: "main issue: between-chip normalization and summarization", answer: "Noncompetitive", why: "Affymetrix requires RMA and array comparability." }
    ],
    choose: "Choose",
    correct: "Correct",
    review: "Review",
    takeHome: "Take-home",
    takeHomeText: "For the exam, do not stop at ‘Affymetrix is one-colour’. Present it as a full workflow that starts with chip manufacturing and ends with normalized, documented, reusable data.",
    takeHomeSteps: [
      ["Chip fabrication", "Probes are synthesized directly on the GeneChip by in situ photolithography. Each feature/cell contains many identical copies of one oligonucleotide, and probe sets are distributed across the chip matrix."],
      ["Target preparation", "The sample RNA is converted into the appropriate labelled target, fragmented and biotinylated. The professor stressed that you do not need to memorize every protocol detail, but you should understand that these steps create experimental variability and differ from competitive arrays."],
      ["Hybridization + washing + scan", "One sample is hybridized on one chip, washed, stained through the biotin–streptavidin–fluorochrome system and scanned in one channel. Brighter features indicate stronger target binding."],
      ["DAT / CEL / CDF", "DAT is the raw scanner image; CEL is the processed feature-intensity file and is the key file for reanalysis; CDF is the map that links features to probes and probe sets."],
      ["QC", "Before trusting intensities, check image inspection, grid alignment, feature quality and control/spike-in behaviour. This is the bridge between a scan and reliable numerical data."],
      ["RMA", "RMA combines background correction, quantile normalization across arrays and summarization of multiple probes into one expression value per probe set/transcript."],
      ["GEO / MIAME", "At the end, data should be documented with platform, design, files, preprocessing, filtering and normalization details so another team can reproduce the analysis."]
    ],
    takeHomeClosing: "Exam angle: if the question asks you to compare competitive and noncompetitive arrays, compare the full Stanford two-colour workflow with the full Affymetrix pipeline, not only the number of colours."
  };
  return {
    eyebrow: "Laboratorios interactivos",
    title: "Capa didáctica extra para Affymetrix",
    intro: "Esta sección va más allá de las diapositivas: convierte los conceptos más preguntables en práctica activa, para que puedas explicar el workflow y no solo reconocer las figuras.",
    pmTitle: "Simulador PM/MM",
    pmIntro: "Perfect Match debería capturar la señal del target; Mismatch buscaba estimar background, pero en arrays reales podía ser más intenso que PM.",
    pm: "Perfect Match",
    mm: "Mismatch",
    specific: "PM − MM",
    pmGood: "PM es mayor que MM, lo cual coincide con la expectativa original.",
    pmBad: "Alerta: MM es mayor que PM. Esta es la trampa clave de la clase y explica por qué la corrección con MM no era fiable.",
    fileTitle: "Workflow DAT → CEL → CDF → CHP",
    fileIntro: "Haz clic en cada tipo de archivo para repasar su papel en el workflow Affymetrix.",
    files: [
      ["DAT", "Imagen cruda del scanner; todavía no es una tabla de intensidades por feature lista para analizar."],
      ["CEL", "Archivo clave para reanálisis; contiene intensidades procesadas por feature después del procesamiento de imagen."],
      ["CDF", "Chip Definition File; mapea cada feature a su probe y probe set."],
      ["CHP", "Reporte downstream o resumido; para reanálisis suele ser más importante el CEL."],
    ],
    rmaTitle: "Mini-lab de RMA",
    rmaIntro: "Estudia RMA como tres trabajos distintos: background correction, quantile normalization y summarization.",
    rmaSteps: [
      ["1", "Background correction", "Las intensidades crudas incluyen señal verdadera más background. Hay que corregir antes de interpretar."],
      ["2", "Quantile normalization", "La distribución de intensidad se hace comparable entre arrays, para que los chips puedan compararse."],
      ["3", "Summarization", "Varios probes del mismo probe set se condensan en un único valor de expresión."],
    ],
    qnTitle: "Ejemplo juguete de quantile normalization",
    qnIntro: "Se ordenan los valores dentro de cada array, se promedian los valores con el mismo rango y luego esos promedios se devuelven al orden original.",
    qcTitle: "Checklist de QC",
    qcIntro: "Marca qué deberías inspeccionar antes de confiar en los valores CEL/RMA.",
    qcItems: ["grid alignment correcto", "features no saturadas ni dañadas", "control probes con comportamiento esperado", "boxplot/MA-plot mejora después de RMA"],
    decisionTitle: "Clasificador rápido: competitive vs noncompetitive",
    decisionIntro: "Asigna cada escenario a la lógica de plataforma correcta.",
    scenarios: [
      { prompt: "dos muestras en un array con Cy3/Cy5", answer: "Competitive", why: "Esa es la lógica Stanford two-colour." },
      { prompt: "una muestra por GeneChip y comparación entre chips", answer: "Noncompetitive", why: "Esa es la lógica Affymetrix one-colour." },
      { prompt: "problema principal: dye bias", answer: "Competitive", why: "El sesgo de fluoróforos es propio de los arrays two-colour." },
      { prompt: "problema principal: normalización entre chips y summarization", answer: "Noncompetitive", why: "Affymetrix requiere RMA y comparabilidad entre arrays." }
    ],
    choose: "Elige",
    correct: "Correcto",
    review: "Revisar",
    takeHome: "Take-home",
    takeHomeText: "Para el examen, no te quedes en ‘Affymetrix es one-colour’. Preséntalo como un workflow completo que empieza con la fabricación del chip y termina con datos normalizados, documentados y reutilizables.",
    takeHomeSteps: [
      ["Fabricación del chip", "Los probes se sintetizan directamente sobre el GeneChip mediante fotolitografía in situ. Cada feature/cell contiene muchas copias idénticas de un oligonucleótido, y los probe sets están distribuidos por la matriz del chip."],
      ["Preparación del target", "El RNA de la muestra se transforma en el target adecuado, se fragmenta y se biotinila. La profesora remarcó que no hace falta memorizar cada detalle del protocolo, pero sí entender que estos pasos introducen variabilidad experimental y son distintos del sistema competitivo."],
      ["Hibridación, lavado y escaneo", "Una muestra se hibrida en un chip, se lava, se marca mediante el sistema biotina–estreptavidina–fluorocromo y se escanea en un solo canal. Las features más brillantes reflejan mayor unión del target."],
      ["DAT / CEL / CDF", "DAT es la imagen cruda del scanner; CEL es el archivo procesado con intensidades por feature y suele ser el archivo clave para reanálisis; CDF es el mapa que conecta features con probes y probe sets."],
      ["QC", "Antes de confiar en las intensidades, hay que revisar inspección visual, alineamiento del grid, calidad de las features y comportamiento de controles/spike-ins. Este paso conecta la imagen con datos numéricos fiables."],
      ["RMA", "RMA combina background correction, quantile normalization entre arrays y summarization para convertir varios probes de un probe set en un único valor de expresión por transcript."],
      ["GEO / MIAME", "Al final, los datos deben documentarse con plataforma, diseño, archivos, preprocessing, filtering y normalization, para que otro grupo pueda reproducir el análisis."]
    ],
    takeHomeClosing: "Ángulo de examen: si preguntan compare competitive and noncompetitive arrays, compara el workflow completo Stanford two-colour con el pipeline Affymetrix, no solo el número de colores."
  };
}

function PMMMSimulator({ lab }) {
  const [pm, setPm] = useState(680);
  const [mm, setMm] = useState(420);
  const diff = pm - mm;
  const max = Math.max(pm, mm, 1);
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><h3 className="text-2xl font-black text-stone-950">{lab.pmTitle}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{lab.pmIntro}</p></div><Pill tone={diff >= 0 ? "emerald" : "amber"}>{lab.specific}: {diff}</Pill></div><div className="mt-5 grid gap-4 md:grid-cols-2"><label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">{lab.pm}<input type="range" min="100" max="1200" value={pm} onChange={e => setPm(Number(e.target.value))} className="mt-3 w-full"/><span className="mt-2 block text-2xl text-stone-950">{pm}</span></label><label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">{lab.mm}<input type="range" min="100" max="1200" value={mm} onChange={e => setMm(Number(e.target.value))} className="mt-3 w-full"/><span className="mt-2 block text-2xl text-stone-950">{mm}</span></label></div><div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="grid gap-3"><div className="h-5 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-red-600" style={{ width: `${Math.max(8, (pm / max) * 100)}%` }} /></div><div className="h-5 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-amber-500" style={{ width: `${Math.max(8, (mm / max) * 100)}%` }} /></div></div><p className={cn("mt-4 text-sm font-black leading-6", diff >= 0 ? "text-emerald-800" : "text-amber-900")}>{diff >= 0 ? lab.pmGood : lab.pmBad}</p></div></article>;
}

function FileWorkflowLab({ lab }) {
  const [active, setActive] = useState(1);
  const item = lab.files[active];
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><h3 className="text-2xl font-black text-stone-950">{lab.fileTitle}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{lab.fileIntro}</p><div className="mt-5 flex flex-wrap gap-2">{lab.files.map(([name], idx) => <button key={name} onClick={() => setActive(idx)} className={cn("rounded-full border px-4 py-2 text-sm font-black transition", active === idx ? "border-red-200 bg-red-600 text-white shadow-sm" : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white")}>{name}</button>)}</div><div className="mt-5 rounded-3xl border border-red-100 bg-red-50 p-5"><div className="text-4xl font-black text-red-700">{item[0]}</div><p className="mt-2 text-sm font-bold leading-7 text-red-950">{item[1]}</p></div></article>;
}

function RMAMiniLab({ lab }) {
  const [active, setActive] = useState(0);
  const step = lab.rmaSteps[active];
  const ranks = [[4, 8, 15], [5, 10, 20], [3, 11, 30]];
  const averaged = ranks[0].map((_, i) => (ranks.reduce((s, arr) => s + arr[i], 0) / ranks.length).toFixed(1));
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm lg:col-span-2"><div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"><div><h3 className="text-2xl font-black text-stone-950">{lab.rmaTitle}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{lab.rmaIntro}</p><div className="mt-5 grid gap-2">{lab.rmaSteps.map((s, idx) => <button key={s[1]} onClick={() => setActive(idx)} className={cn("rounded-2xl border px-4 py-3 text-left transition", active === idx ? "border-red-200 bg-red-50 shadow-sm" : "border-stone-200 bg-stone-50 hover:bg-white")}><div className="text-xs font-black uppercase tracking-[0.16em] text-red-700">Step {s[0]}</div><div className="mt-1 text-base font-black text-stone-950">{s[1]}</div></button>)}</div></div><div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><Pill tone="red">Step {step[0]}</Pill><h4 className="mt-3 text-2xl font-black text-stone-950">{step[1]}</h4><p className="mt-2 text-sm font-bold leading-7 text-stone-600">{step[2]}</p><div className="mt-5 rounded-2xl bg-white p-4"><div className="text-sm font-black text-stone-950">{lab.qnTitle}</div><p className="mt-1 text-xs font-semibold leading-5 text-stone-500">{lab.qnIntro}</p><div className="mt-3 overflow-hidden rounded-xl border border-stone-200 text-center text-xs font-black"><div className="grid grid-cols-4 bg-stone-100"><span className="p-2">Rank</span><span className="p-2">A1</span><span className="p-2">A2</span><span className="p-2">Avg</span></div>{averaged.map((avg, idx) => <div key={idx} className="grid grid-cols-4 border-t border-stone-200"><span className="p-2">{idx + 1}</span><span className="p-2">{ranks[0][idx]}</span><span className="p-2">{ranks[1][idx]}</span><span className="p-2 text-red-700">{avg}</span></div>)}</div></div></div></div></article>;
}

function QCDecisionLabs({ lab, mode = "both" }) {
  const [checked, setChecked] = useState({});
  const [answers, setAnswers] = useState({});
  const total = lab.qcItems.length;
  const done = Object.values(checked).filter(Boolean).length;
  const options = ["Competitive", "Noncompetitive"];
  const qc = <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><h3 className="text-2xl font-black text-stone-950">{lab.qcTitle}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{lab.qcIntro}</p></div><Pill tone={done === total ? "emerald" : "amber"}>{done}/{total}</Pill></div><div className="mt-5 grid gap-2">{lab.qcItems.map((item, idx) => <button key={item} onClick={() => setChecked({ ...checked, [idx]: !checked[idx] })} className={cn("rounded-2xl border px-4 py-3 text-left text-sm font-black transition", checked[idx] ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white")}><span className="me-2">{checked[idx] ? "✓" : "□"}</span>{item}</button>)}</div></article>;
  const decision = <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><h3 className="text-2xl font-black text-stone-950">{lab.decisionTitle}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{lab.decisionIntro}</p><div className="mt-5 grid gap-3">{lab.scenarios.map((sc, idx) => { const selected = answers[idx]; const answered = Boolean(selected); const correct = selected === sc.answer; return <div key={sc.prompt} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-sm font-black text-stone-950">{sc.prompt}</div><div className="mt-3 flex flex-wrap gap-2">{options.map(option => <button key={option} onClick={() => setAnswers({ ...answers, [idx]: option })} className={cn("rounded-full border px-3 py-1.5 text-xs font-black transition", selected === option ? correct ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-amber-300 bg-amber-50 text-amber-900" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100")}>{option}</button>)}</div>{answered && <p className={cn("mt-2 text-xs font-bold leading-5", correct ? "text-emerald-800" : "text-amber-900")}>{correct ? lab.correct : lab.review}: {sc.why}</p>}</div>; })}</div></article>;
  if (mode === "qc") return qc;
  if (mode === "decision") return decision;
  return <>{qc}{decision}</>;
}

function InlineInteractiveLab({ type, copy }) {
  const lab = getInteractiveCopy(copy);
  if (type === "decision") return <TakeHomeCard lab={lab}/>;
  if (type === "pm") return <div className="mt-6"><PMMMSimulator lab={lab}/></div>;
  if (type === "files") return <div className="mt-6 grid gap-5 lg:grid-cols-2"><FileWorkflowLab lab={lab}/><QCDecisionLabs lab={lab} mode="qc"/></div>;
  if (type === "rma") return <div className="mt-6"><RMAMiniLab lab={lab}/></div>;
  return null;
}

function Quiz({ copy }) {
  const [answers, setAnswers] = useState({});
  const score = copy.quiz.reduce((sum, q, idx) => sum + (answers[idx] === q.answer ? 1 : 0), 0);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><SectionHeader eyebrow={copy.check} title={copy.quizTitle} /><Pill tone={score === copy.quiz.length ? "emerald" : "amber"}>{score}/{copy.quiz.length}</Pill></div><div className="grid gap-4 lg:grid-cols-2">{copy.quiz.map((q, idx) => { const selected = answers[idx]; const answered = selected !== undefined; const correct = answered && selected === q.answer; return <article key={q.q} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{idx + 1}</span>{answered && <Pill tone={correct ? "emerald" : "amber"}>{correct ? "Correct" : "Review"}</Pill>}</div><h3 className="mt-4 text-lg font-black leading-7 text-stone-950">{q.q}</h3><div className="mt-4 grid gap-2">{q.options.map((option, optionIdx) => { const isSelected = selected === optionIdx; const isAnswer = q.answer === optionIdx; const cls = !answered ? "border-stone-200 bg-stone-50 hover:bg-white" : isAnswer ? "border-emerald-300 bg-emerald-50 text-emerald-900" : isSelected ? "border-amber-300 bg-amber-50 text-amber-900" : "border-stone-200 bg-stone-50 text-stone-500"; return <button key={option} onClick={() => setAnswers({ ...answers, [idx]: optionIdx })} className={`rounded-2xl border px-4 py-3 text-left text-sm font-black leading-6 transition ${cls}`}><span className="me-2">{String.fromCharCode(65 + optionIdx)}.</span>{option}{answered && isAnswer && <span className="ms-2 text-emerald-700">✓</span>}{answered && isSelected && !isAnswer && <span className="ms-2 text-amber-700">×</span>}</button>; })}</div></article>; })}</div></section>;
}

function WrittenTrainer({ copy }) {
  const [answer, setAnswer] = useState("");
  const words = wordCount(answer);
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow="10–12 lines" title={copy.writtenTitle}>{copy.writtenPrompt}</SectionHeader><div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]"><article className="rounded-3xl border border-stone-200 bg-white p-5"><label className="text-xl font-black text-stone-950" htmlFor="drd-lesson3-answer">{copy.writtenTitle}</label><textarea id="drd-lesson3-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} rows={12} placeholder={copy.answerPlaceholder} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold leading-7 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"/><div className="mt-2 text-xs font-bold text-stone-500">{words} {copy.words}</div></article><article className="rounded-3xl border border-stone-800 bg-stone-950 p-5 text-white"><h3 className="text-xl font-black">{copy.modelAnswer}</h3><p className="mt-3 text-sm font-semibold leading-7 text-stone-200">{copy.writtenModel}</p></article></div></section>;
}

export default function DRDLesson03({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = useMemo(() => getCopy(lang), [lang]);
  const [zoom, setZoom] = useState(null);
  const inlineLabs = { 0: "decision", 3: "pm", 5: "files", 7: "rma" };
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav copy={copy} isDone={isDone} toggle={toggle}/><Hero copy={copy}/>{copy.sections.map((section, idx) => { const inlineType = inlineLabs[idx]; return <LessonSection key={section.eyebrow} section={section} copy={copy} onZoom={setZoom} inlineType={inlineType === "decision" ? "decision" : undefined}>{inlineType && inlineType !== "decision" && <InlineInteractiveLab type={inlineType} copy={copy}/>}</LessonSection>; })}<KeyConcepts copy={copy}/><Quiz copy={copy}/><WrittenTrainer copy={copy}/><LessonNav copy={copy} isDone={isDone} toggle={toggle} position="bottom"/><ZoomModal item={zoom} copy={copy} onClose={() => setZoom(null)}/></main>;
}

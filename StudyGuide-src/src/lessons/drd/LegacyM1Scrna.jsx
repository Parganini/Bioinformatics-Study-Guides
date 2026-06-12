import React, { useMemo, useState } from "react";
import {
  M1LessonHero,
  M1LessonNav,
  M1Pill as Pill,
  M1ResourceLinks,
  M1SectionHeader as SectionHeader,
} from "./module1Shared.jsx";
import { lessonContent } from "./m1-scrna/content.js";

const SLIDES_URL = "https://drive.google.com/file/d/1KWtWuoG0H8i6ZUZlc0-ObT3PEvJCdKK3/view?usp=drivesdk";
const WORKSHOP_URL = "https://drive.google.com/file/d/1ZkNT-eTKp28bBqaRwx5wklCl860NauHB/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1aP1Gb6SHCIzc8LD2L68Sxji0k-SHngclG3AJ5aMaId0/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=Zs1zcdYZIOY&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=15";

const slideModules = import.meta.glob("../../assets/drd/lesson15/slide-*.jpg", { eager: true, import: "default" });
const slideImages = Object.entries(slideModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const ui = {
  mark: "Mark completed",
  done: "Completed",
  dashboard: "DRD dashboard",
  previous: "Previous",
  next: "Next",
  resources: "Class resources",
  slides: "Theory slides",
  code: "Workshop code",
  transcript: "Transcript",
  recording: "Recording",
  slide: "Slide",
  zoom: "Click to zoom",
  close: "Close zoom",
  module: "Module",
  writtenExam: "Written test",
  answerLines: "Answer lines",
  core: "Core idea",
  bigIdea: "Big idea",
};

const slideSections = [
  {
    eyebrow: "Part 1",
    title: "From transcriptome to cell-level heterogeneity",
    intro: "The lesson starts from the same RNA idea as bulk assays, then changes the unit of analysis: instead of one averaged sample, each barcode becomes a cell-level profile.",
    slides: [
      { n: 1, title: "Lesson scope", body: "The June 10 class introduces single-cell RNA-seq and then moves into a TrailMaker workshop." },
      { n: 2, title: "Transcriptome as a cell state", body: "The transcriptome asks which genes are expressed and how much each transcript is represented at a specific timepoint." },
      { n: 3, title: "Which genes are expressed?", body: "Housekeeping, cell-type-specific, inducible and cell-cycle genes explain why cell identity and state both matter." },
      { n: 4, title: "RNA makes cells different", body: "The genome is shared by normal cells, but RNA abundance separates cell types and functional states." },
      { n: 5, title: "Bulk, single-cell and spatial choices", body: "Bulk genomics averages the tissue, single-cell resolves populations and spatial transcriptomics keeps positional context." },
    ],
  },
  {
    eyebrow: "Part 2",
    title: "10X droplets, barcodes and UMIs",
    intro: "This is the mechanism block: dissociate tissue, isolate cells in GEMs, capture mRNA with poly(dT), attach barcodes and use UMIs to count molecules rather than PCR-amplified reads.",
    slides: [
      { n: 6, title: "Single-cell genomics", body: "Single-cell methods deconvolute tissue complexity by measuring many individual cell transcriptomes." },
      { n: 7, title: "Droplet sequencing", body: "Droplet methods partition cells into many isolated reactions before pooling the library." },
      { n: 8, title: "10X Chromium GEMs", body: "10X profiles hundreds to thousands of cells per sample using gel bead-in-emulsion reactions." },
      { n: 9, title: "One bead, one cell, reagents", body: "The ideal GEM contains one barcoded bead, one cell and reverse-transcription reagents." },
      { n: 10, title: "Barcode, UMI and poly(dT)", body: "Each bead carries a cell barcode, different UMIs and poly(dT) sequences to capture polyA transcripts." },
      { n: 11, title: "Amplification and sequencing", body: "Cells lyse inside GEMs, transcripts are tagged, GEMs are broken and the pooled library is sequenced." },
      { n: 12, title: "Collapse reads to UMI counts", body: "Reads with the same 10X barcode, UMI and gene are collapsed to one count in the feature-barcode matrix." },
    ],
  },
  {
    eyebrow: "Part 3",
    title: "Feature-barcode matrix and quality control",
    intro: "The matrix is only useful after QC. A barcode is not automatically a good cell: it may be an empty droplet, ambient RNA, a damaged cell, a stressed cell or a doublet.",
    slides: [
      { n: 13, title: "Feature-barcode matrix", body: "Rows are genes, columns are barcodes and values are UMI counts; cell identity is unknown at this point." },
      { n: 14, title: "Analysis pipeline", body: "Cell Ranger handles alignment, quantification, QC/filtering and normalization before reduction, clustering and annotation." },
      { n: 15, title: "Ideal versus real droplets", body: "Ideally one barcode equals one cell and all transcripts are captured, but real data are sparse and noisy." },
      { n: 16, title: "QC artifacts", body: "Empty droplets, doublets, dead cells, damaged cells and stressed cells must be recognized before interpretation." },
      { n: 17, title: "Droplet rank filtering", body: "UMIs per droplet versus droplet rank helps separate cell-containing droplets from ambient RNA." },
      { n: 18, title: "Mitochondrial fraction", body: "A high mitochondrial read percentage is a warning signal for dead or damaged cells, with cutoffs depending on cell type." },
      { n: 19, title: "Doublet filtering", body: "Droplets with more than one cell can look like intermediate states and should be excluded when likely." },
    ],
  },
  {
    eyebrow: "Part 4",
    title: "Reduction, clustering and annotation",
    intro: "After QC, single-cell analysis compresses variation, builds neighborhoods, clusters cells and gives labels only when marker genes support a biological identity.",
    slides: [
      { n: 20, title: "PCA and UMAP", body: "PCA compresses high-dimensional expression; UMAP learns a low-dimensional manifold to place similar cells together." },
      { n: 21, title: "QC on embeddings", body: "Mitochondrial fraction and doublet score can be inspected on the embedding to spot low-quality structure." },
      { n: 22, title: "Graph-based clustering", body: "Clusters group cells with similar expression profiles into discrete labels that still need biological annotation." },
      { n: 23, title: "Manual or automatic annotation", body: "Cell populations are identified using known markers, inferred markers or automatic comparison to reference datasets." },
      { n: 24, title: "Integration and advanced analyses", body: "Integration corrects batch effects across samples before scaling, PCA and UMAP on the integrated object." },
    ],
  },
  {
    eyebrow: "Part 5",
    title: "TrailMaker processing workflow",
    intro: "The practical half turns the theory into a guided workflow: load the MIS-C PBMC data, process it, inspect QC, integrate samples and generate UMAP/clustering outputs.",
    slides: [
      { n: 25, title: "TrailMaker workshop starts", body: "The second deck moves from scRNA-seq theory into Parse Biosciences TrailMaker." },
      { n: 26, title: "Data Management module", body: "TrailMaker begins with project navigation and dataset management." },
      { n: 27, title: "Project list", body: "Projects organize the datasets before processing and exploration." },
      { n: 28, title: "Dataset repository", body: "The workshop uses the repository to select a prepared example dataset." },
      { n: 29, title: "Copy workshop dataset", body: "The dataset is copied for exploration so the class can work on the same input." },
      { n: 30, title: "Samples inside the project", body: "The project contains the samples that will later be compared across condition and patient state." },
      { n: 31, title: "Go to Data Processing", body: "The class moves from data management into the processing workflow." },
      { n: 32, title: "Processing steps", body: "Filtering removes low-quality events, integration/PCA controls batch and embedding configures UMAP or t-SNE." },
      { n: 33, title: "Pipeline running", body: "The processing pipeline is applied to the dataset before exploration." },
      { n: 34, title: "MIS-C tutorial dataset", body: "The dataset contains acute and convalescent PBMC samples from COVID-19-associated MIS-C." },
      { n: 35, title: "MIS-C biological context", body: "MIS-C is a severe inflammatory syndrome after SARS-CoV-2 infection, often with cardiac symptoms." },
    ],
  },
  {
    eyebrow: "Part 6",
    title: "PBMC sample quality and integration",
    intro: "Before annotation, the workshop asks whether the PBMC samples have comparable quality: dead-cell signal, doublets and integration all affect downstream claims.",
    slides: [
      { n: 36, title: "PBMCs", body: "PBMCs include lymphocytes, monocytes and dendritic cells, and are central to immunology and infection studies." },
      { n: 37, title: "Expected cells and contaminants", body: "The workshop asks what cell types and contaminants to expect before looking at clusters." },
      { n: 38, title: "Processing navigation", body: "The Data Processing module lets the user navigate through the seven processing steps." },
      { n: 39, title: "Tooltips", body: "Explanatory tooltips support parameter interpretation inside the processing module." },
      { n: 40, title: "Pipeline status", body: "The status indicator should be green before downstream interpretation." },
      { n: 41, title: "Manual settings", body: "The workshop warns not to rerun the processing module during the live exercise." },
      { n: 42, title: "Filter logic", body: "Filter step 2 is disabled because step 1 already discarded background barcodes." },
      { n: 43, title: "Exercise 1", body: "Assess whether samples differ in dead-cell proportion, doublets and integration quality." },
      { n: 44, title: "Dead-cell answer", body: "The samples show similar spread and similar percentages of filtered cells for mitochondrial content." },
      { n: 45, title: "Doublet answer", body: "The samples show similar filtered doublet proportions, although P13 acute contains fewer cells." },
      { n: 46, title: "PC selection", body: "TrailMaker defines default PCs using 85 percent explained variation, capped at 30 PCs." },
      { n: 47, title: "Integration answer", body: "Samples are well integrated if they show similar UMAP distribution and all clusters contain cells from all samples." },
      { n: 48, title: "Quality assessment summary", body: "The workflow turns QC plots into a sample-comparability statement." },
      { n: 49, title: "Clustering resolution", body: "The default clustering resolution is 0.8, which affects the number and granularity of clusters." },
    ],
  },
  {
    eyebrow: "Part 7",
    title: "Data exploration and PBMC annotation",
    intro: "This is where the guide should feel practical: TrailMaker clusters are turned into cell-type labels by marker genes, heatmaps and differential expression.",
    slides: [
      { n: 50, title: "Data Exploration module", body: "The module supports fast visualization, cluster annotation, gene expression views and differential expression." },
      { n: 51, title: "Exercise 2 markers", body: "Expected PBMC labels include B cells, T cells, NK cells, monocytes, platelets and erythrocyte contaminants." },
      { n: 52, title: "Unknown clusters", body: "The workshop asks the student to annotate clusters 4, 7 and 12." },
      { n: 53, title: "Annotation instructions", body: "Use marker genes, gene lists and differential expression to assign cautious cell-type labels." },
      { n: 54, title: "Annotation answer", body: "CD14 monocytes, platelets, killer cells, T cells, B cells, CD16 monocytes and red blood cells are identified by marker panels." },
      { n: 55, title: "Memory versus naive B cells", body: "IGH gene patterns distinguish IgG-enriched memory B cells from IgM-enriched naive B cells." },
      { n: 56, title: "Cluster 11 pathway exercise", body: "Pathway analysis is used to characterize an unknown cluster beyond single markers." },
      { n: 57, title: "Pathway instructions", body: "The exercise guides the student through selecting and characterizing cluster 11." },
      { n: 58, title: "Pathway answer", body: "The answer slide connects cluster characterization to functional interpretation." },
      { n: 59, title: "Automatic annotation", body: "Automatic annotation compares profiles to reference datasets, but should still be checked against markers." },
    ],
  },
  {
    eyebrow: "Part 8",
    title: "Composition, differential expression and report figures",
    intro: "The final workshop block turns annotation into biological claims: cell composition changes, CD14 monocyte frequency, differential expression and publication-ready figures.",
    slides: [
      { n: 60, title: "Plots and Tables module", body: "The module exports customized plots, differential expression lists and publication-quality figures." },
      { n: 61, title: "Explore sample composition", body: "Clusters 4, 7 and 12 increase with recovery, while RBCs are recognized as contaminating cells." },
      { n: 62, title: "Composition detail", body: "The same patient is compared from acute to recovered state." },
      { n: 63, title: "Antibody biology", body: "The B-cell composition story links IgG memory and IgM naive B-cell signals to COVID-19 infection." },
      { n: 64, title: "CD14 monocytes", body: "CD14 monocytes become a focused cell population for follow-up analysis." },
      { n: 65, title: "Exercise 3", body: "Create CD14 monocyte and complement cell sets, then build a frequency plot grouped by sample." },
      { n: 66, title: "CD14 answer", body: "The two acute samples have fewer cells in the CD14 monocyte cluster than the convalescent sample." },
      { n: 67, title: "Exercise 4", body: "Run differential expression for cluster 4 in convalescent versus the rest and filter significant genes." },
      { n: 68, title: "Heatmap instructions", body: "Select top genes, overwrite the heatmap and show sample metadata tracks for interpretation." },
      { n: 69, title: "DE answer", body: "RNASE1 is highly significant and FCGR1A/CD64 appears in the DE list, reproducing the paper's finding." },
      { n: 70, title: "Homework figure", body: "Choose a volcano plot, violin/embedding plot or dot plot to communicate the key finding." },
      { n: 71, title: "Publication-ready answer", body: "Volcano, violin and dot plots can each support a different piece of the CD14 monocyte story." },
      { n: 72, title: "Data upload", body: "TrailMaker can also upload a new project and assign metadata to each sample." },
      { n: 73, title: "Supported files", body: "For 10X Chromium datasets, upload raw Cell Ranger count matrices with barcodes, features and matrix files." },
    ],
  },
];

function Navigation({ isDone, toggle, position = "top" }) {
  return (
    <M1LessonNav
      lessonId="m1-scrna"
      labels={ui}
      isDone={isDone}
      toggle={toggle}
      position={position}
    />
  );
}

function ResourceLinks() {
  const links = [
    { label: ui.slides, href: SLIDES_URL, tone: "accent" },
    { label: ui.code, href: WORKSHOP_URL },
    { label: ui.transcript, href: TRANSCRIPT_URL },
    { label: ui.recording, href: RECORDING_URL, tone: "dark" },
  ];
  return <M1ResourceLinks ui={ui} links={links} columns={4} />;
}

function NumberedCard({ index, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">
      <span className="font-black text-stone-950">{index + 1}.</span> {children}
    </div>
  );
}

function Objectives() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Learning objectives" title="By the end you should be able to...">
        The June 10 class moves from the biological need for cell-level expression to the practical TrailMaker workflow used to process and interpret PBMC single-cell data.
      </SectionHeader>
      <div className="grid gap-3 md:grid-cols-2">
        {lessonContent.objectives.map((objective, index) => (
          <NumberedCard key={objective} index={index}>{objective}</NumberedCard>
        ))}
      </div>
    </section>
  );
}

function CoreConcepts() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Core concepts" title="What this lesson must make automatic">
        These are the anchors to reuse in 10-12 line exam answers.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-2">
        {lessonContent.coreConcepts.map((concept) => (
          <article key={concept.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-xl font-black text-stone-950">{concept.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{concept.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {concept.keywords.map((keyword) => <Pill key={keyword} tone={keyword === "UMI" || keyword === "UMAP" ? "red" : "stone"}>{keyword}</Pill>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EmphasisAndTraps() {
  return (
    <section className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
        <SectionHeader eyebrow="Professor emphasis" title="Listen for these signals" />
        <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-700 marker:text-amber-700">
          {lessonContent.professorEmphasis.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
      <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
        <SectionHeader eyebrow="Exam traps" title="Easy ways to lose points" />
        <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-700 marker:text-red-700">
          {lessonContent.examTraps.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </section>
  );
}

function PracticeMoves() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Interactive practice" title="Practice moves">
        Use these as small active-recall tasks before opening the source slides or transcript.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {lessonContent.practice.map((item, index) => (
          <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <Pill tone={index === 1 || index === 2 ? "red" : "stone"}>Step {index + 1}</Pill>
            <h3 className="mt-4 text-lg font-black leading-7 text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SlideCard({ item, onZoom, full }) {
  const src = slideImages[item.n - 1];
  if (!src) return null;
  return (
    <article className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm ${full ? "md:col-span-2" : ""}`}>
      <button type="button" onClick={() => onZoom(item)} className="group block w-full border-b border-stone-200 bg-white p-3 text-left">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white">
          <img src={src} alt={`${ui.slide} ${item.n}: ${item.title}`} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" />
        </div>
      </button>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="red">{ui.slide} {item.n}</Pill>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">{ui.zoom}</span>
        </div>
        <h3 className="mt-3 text-xl font-black text-stone-950">{item.title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>
      </div>
    </article>
  );
}

function SlideGrid({ slides, onZoom }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {slides.map((item, index) => (
        <SlideCard
          key={item.n}
          item={item}
          onZoom={onZoom}
          full={slides.length % 2 === 1 && index === slides.length - 1}
        />
      ))}
    </div>
  );
}

function DropletWorkflowLab() {
  const steps = [
    { label: "Dissociate", text: "Tissue becomes a suspension of single cells, so spatial information is lost." },
    { label: "Encapsulate", text: "10X creates GEMs with ideally one bead, one cell and RT reagents." },
    { label: "Capture", text: "Poly(dT) on the bead captures polyA mRNA after cell lysis." },
    { label: "Barcode", text: "Cell barcode marks origin; UMI marks the original molecule." },
    { label: "Sequence", text: "Reads are pooled, aligned to genes and collapsed by UMI counts." },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Mini-lab" title="10X droplet workflow">
        Click through the wet-lab-to-matrix story until barcode and UMI logic feel automatic.
      </SectionHeader>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="flex flex-wrap gap-2">
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${active === index ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
              >
                {index + 1}. {step.label}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-red-100 bg-red-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{steps[active].label}</div>
            <p className="mt-2 text-base font-black leading-8 text-red-950">{steps[active].text}</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5">
          <svg viewBox="0 0 720 360" className="h-[360px] w-full" role="img" aria-label="10X droplet workflow diagram">
            <rect x="24" y="40" width="145" height="80" rx="26" fill={active >= 0 ? "#fee2e2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <text x="96" y="75" textAnchor="middle" fontSize="15" fontWeight="900" fill="#991b1b">Tissue</text>
            <text x="96" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">many cells</text>
            <path d="M170 80 H250" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <circle cx="295" cy="82" r="38" fill={active >= 1 ? "#fef2f2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <circle cx="282" cy="78" r="9" fill="#111827" />
            <circle cx="306" cy="88" r="12" fill="#ef4444" />
            <text x="295" y="150" textAnchor="middle" fontSize="14" fontWeight="900" fill="#44403c">GEM</text>
            <path d="M335 82 H420" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <rect x="420" y="42" width="150" height="96" rx="22" fill={active >= 3 ? "#fef2f2" : "#fafaf9"} stroke="#dc2626" strokeWidth="4" />
            <text x="495" y="75" textAnchor="middle" fontSize="14" fontWeight="900" fill="#991b1b">Barcode</text>
            <text x="495" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">cell origin</text>
            <text x="495" y="120" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">UMI molecule</text>
            <path d="M570 90 H650" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />
            <rect x="500" y="220" width="170" height="82" rx="24" fill={active >= 4 ? "#111827" : "#fafaf9"} stroke="#d6d3d1" strokeWidth="3" />
            <text x="585" y="252" textAnchor="middle" fontSize="15" fontWeight="900" fill={active >= 4 ? "#fff" : "#44403c"}>Feature-barcode</text>
            <text x="585" y="276" textAnchor="middle" fontSize="15" fontWeight="900" fill={active >= 4 ? "#fff" : "#44403c"}>matrix</text>
            <path d="M520 138 V200 H585 V220" stroke="#d6d3d1" strokeWidth="5" fill="none" strokeLinecap="round" />
            <text x="72" y="324" fontSize="15" fontWeight="900" fill="#991b1b">Barcode = what cell? Alignment = what gene? UMI = original molecule count.</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function QCGateLab() {
  const [umi, setUmi] = useState(1400);
  const [mito, setMito] = useState(12);
  const [mixed, setMixed] = useState(false);
  const call = useMemo(() => {
    if (mixed) return { label: "Likely doublet", text: "Mixed marker programs suggest two cells may share one barcode.", tone: "border-amber-200 bg-amber-50 text-amber-950" };
    if (umi < 400) return { label: "Likely empty droplet", text: "Very low UMI count fits ambient RNA more than a real cell.", tone: "border-red-200 bg-red-50 text-red-950" };
    if (mito > 35) return { label: "Likely damaged/dead", text: "High mitochondrial fraction is a warning signal for cell damage or death.", tone: "border-red-200 bg-red-50 text-red-950" };
    return { label: "Keep for now", text: "UMI count and mitochondrial fraction look compatible with a usable cell.", tone: "border-emerald-200 bg-emerald-50 text-emerald-950" };
  }, [umi, mito, mixed]);

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Mini-lab" title="Single-cell QC triage">
        Use the professor's logic: keep one real, alive, undamaged cell per barcode; discard technical artifacts.
      </SectionHeader>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Total UMIs: {umi}
            <input type="range" min="0" max="7000" step="100" value={umi} onChange={(event) => setUmi(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Mitochondrial reads: {mito}%
            <input type="range" min="0" max="70" value={mito} onChange={(event) => setMito(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            <input type="checkbox" checked={mixed} onChange={(event) => setMixed(event.target.checked)} className="h-5 w-5 accent-red-700" />
            Mixed marker programs
          </label>
        </div>
        <div className={`rounded-[2rem] border p-6 ${call.tone}`}>
          <div className="text-xs font-black uppercase tracking-[0.18em] opacity-80">QC call</div>
          <div className="mt-2 text-4xl font-black">{call.label}</div>
          <p className="mt-4 text-base font-black leading-8">{call.text}</p>
          <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm font-bold leading-6 text-stone-700">Exam wording: QC separates real cell barcodes from empty droplets, ambient RNA, doublets and low-quality cells before clustering or annotation.</p>
        </div>
      </div>
    </section>
  );
}

function AnnotationLab() {
  const clusters = {
    cd14: { label: "CD14 cluster", markers: "S100A8, S100A9, LYZ, CD14", answer: "CD14+ classical monocytes" },
    cd16: { label: "CD16 cluster", markers: "FCGR3A, CDKN1C", answer: "CD16+ non-classical monocytes" },
    b: { label: "B-cell cluster", markers: "CD79A, MS4A1, IGHG1", answer: "B cells / memory B cells" },
    rbc: { label: "RBC signal", markers: "HBB, HBA1, HBA2", answer: "Erythrocyte contaminants" },
    nk: { label: "NK island", markers: "NKG7, KLRD1, GZMB", answer: "NK / cytotoxic cells" },
  };
  const [choice, setChoice] = useState("cd14");
  const item = clusters[choice];

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Annotation lab" title="Marker genes to cautious cluster labels">
        The class repeatedly used marker genes, heatmap signals and differential expression to name clusters.
      </SectionHeader>
      <div className="flex flex-wrap gap-2">
        {Object.entries(clusters).map(([key, cluster]) => (
          <button
            key={key}
            type="button"
            onClick={() => setChoice(key)}
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${choice === key ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"}`}
          >
            {cluster.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Markers to inspect</div>
          <p className="mt-3 text-3xl font-black text-stone-950">{item.markers}</p>
          <p className="mt-4 text-sm font-bold leading-7 text-stone-600">Use more than one marker, because dropout and contamination can make one gene misleading.</p>
        </div>
        <div className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Likely label</div>
          <p className="mt-3 text-3xl font-black text-red-950">{item.answer}</p>
          <p className="mt-4 text-sm font-bold leading-7 text-red-950">Then validate with heatmap, violin/dot plot, frequency plot or automatic annotation.</p>
        </div>
      </div>
    </section>
  );
}

function TrailMakerReportPrompt() {
  const [show, setShow] = useState(false);
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Workshop drill" title="Turn the MIS-C exercise into a biological paragraph">
        This is the practical story: TrailMaker output, annotation, composition, differential expression and biological interpretation.
      </SectionHeader>
      <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-black leading-7 text-stone-950">Prompt: Explain how acute and convalescent MIS-C PBMC samples were interpreted using scRNA-seq clusters, and mention the CD14 monocyte / FCGR1A finding.</p>
        <textarea className="mt-4 min-h-36 w-full rounded-3xl border border-stone-200 bg-white p-4 text-sm font-semibold leading-7 outline-none focus:border-red-300" placeholder="Write 8-10 lines here..." />
        <button type="button" onClick={() => setShow(!show)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-700">{show ? "Hide model answer" : "Reveal model answer"}</button>
        {show ? (
          <p className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-bold leading-7 text-red-950">
            The dataset contains PBMCs from acute and convalescent MIS-C samples analyzed with 10X scRNA-seq. After QC, integration and UMAP, clusters are annotated using markers such as CD14, S100A8 and S100A9 for classical monocytes, CD79A and immunoglobulin genes for B cells, and HBB/HBA for erythrocyte contaminants. Frequency plots compare cell composition across samples. The convalescent sample shows an increase in CD14 monocytes, and differential expression within that cell type identifies changes such as reduced FCGR1A/CD64, an IgG receptor. This matters because single-cell RNA-seq separates composition changes from transcriptomic changes inside a specific cell population.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function SlideSections({ onZoom }) {
  const labAfterSection = {
    "Part 2": <DropletWorkflowLab />,
    "Part 3": <QCGateLab />,
    "Part 7": <AnnotationLab />,
    "Part 8": <TrailMakerReportPrompt />,
  };

  return (
    <>
      {slideSections.map((section) => (
        <React.Fragment key={section.title}>
          <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
            <SectionHeader eyebrow={section.eyebrow} title={section.title}>{section.intro}</SectionHeader>
            <SlideGrid slides={section.slides} onZoom={onZoom} />
          </section>
          {labAfterSection[section.eyebrow] || null}
        </React.Fragment>
      ))}
    </>
  );
}

function QuickQuiz() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeader eyebrow="Checkpoint" title="Quick understanding checks" />
      <div className="grid gap-3">
        {lessonContent.checkpoints.map((item, index) => (
          <details key={item.question} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
            <summary className="cursor-pointer text-sm font-black leading-6 text-stone-950">{index + 1}. {item.question}</summary>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-7 text-stone-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ChecklistHelp() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <details>
        <summary className="cursor-pointer">
          <SectionHeader eyebrow="Help" title={lessonContent.checklistTitle}>
            Open only when you want the answer checklist.
          </SectionHeader>
        </summary>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {lessonContent.reportChecklist.map((item, index) => (
            <NumberedCard key={item} index={index}>{item}</NumberedCard>
          ))}
        </div>
      </details>
    </section>
  );
}

function ZoomModal({ item, onClose }) {
  if (!item) return null;
  const src = slideImages[item.n - 1];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="max-h-[94vh] w-[min(1100px,96vw)] overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <Pill tone="red">{ui.slide} {item.n}</Pill>
            <h3 className="mt-2 text-xl font-black text-stone-950">{item.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white hover:bg-red-700">{ui.close}</button>
        </div>
        <img src={src} alt={`${ui.slide} ${item.n}: ${item.title}`} className="max-h-[78vh] w-full rounded-2xl object-contain" />
        <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{item.body}</p>
      </div>
    </div>
  );
}

export default function LegacyM1Scrna({ isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 text-stone-900 md:pt-12">
      <Navigation isDone={isDone} toggle={toggle} />
      <M1LessonHero
        lessonId="m1-scrna"
        title="Single-cell RNA-seq and TrailMaker workshop"
        subtitle="A slide-guided lesson from the June 10 class: bulk versus single-cell, 10X droplets, barcodes, UMIs, QC, UMAP, marker annotation and the MIS-C TrailMaker workflow."
        tags={["scRNA-seq", "10X", "UMI", "QC", "UMAP", "TrailMaker"]}
        tagTone={(tag) => tag === "UMI" || tag === "UMAP" || tag === "TrailMaker" ? "red" : "stone"}
        statLabels={{ module: ui.module, writtenExam: ui.writtenExam, answerLines: ui.answerLines, core: ui.core }}
        coreValue="10X/UMI"
        bigIdeaLabel={ui.bigIdea}
        bigIdeaText="Single-cell RNA-seq turns a mixed tissue average into cell-level barcoded transcriptomes, but QC and annotation decide whether clusters become biology."
        resourcePanel={<ResourceLinks />}
      />
      <Objectives />
      <CoreConcepts />
      <EmphasisAndTraps />
      <PracticeMoves />
      <SlideSections onZoom={setZoom} />
      <QuickQuiz />
      <ChecklistHelp />
      <Navigation isDone={isDone} toggle={toggle} position="bottom" />
      <ZoomModal item={zoom} onClose={() => setZoom(null)} />
    </main>
  );
}

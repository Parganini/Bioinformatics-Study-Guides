import React, { useMemo, useState } from "react";
import {
  M1LessonHero,
  M1LessonNav,
  M1Pill as Pill,
  M1ResourceLinks,
  M1SectionHeader as SectionHeader,
} from "./module1Shared.jsx";
import { lessonContent } from "./m1-scrna/content.js";

const SLIDES_URL = "https://drive.google.com/file/d/1PUbs6aNl9HN1Tq3agbY78UNFl7WpUdhL/view?usp=drivesdk";
const WORKSHOP_URL = "https://drive.google.com/file/d/1LFe6sdwZwT0_-oGpKUtJ_di-6qxybyOS/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1aP1Gb6SHCIzc8LD2L68Sxji0k-SHngclG3AJ5aMaId0/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=Zs1zcdYZIOY&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=15";

const slideModules = import.meta.glob("../../assets/drd/lesson14/slide-*.jpg", { eager: true, import: "default" });
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
      { n: 2, title: "Transcriptome as a cell state", body: "Cells share the genome, but their transcriptome changes by cell type, timepoint, environment and activation state." },
      { n: 3, title: "Expression abundance and heterogeneity", body: "The professor uses abundance and heterogeneity to show why a cell population cannot always be summarized by one average." },
      { n: 4, title: "Bulk averages the tissue", body: "Bulk RNA-seq mixes tumor, immune, endothelial, stromal and other signals into one sample-level profile." },
      { n: 5, title: "Single-cell and spatial alternatives", body: "Sorted mini-bulk, single-cell RNA-seq and spatial transcriptomics answer related but different biological questions." },
    ],
  },
  {
    eyebrow: "Part 2",
    title: "10X droplets, barcodes and UMIs",
    intro: "This is the mechanism block: dissociate tissue, isolate cells in GEMs, capture mRNA with poly(dT), attach barcodes and use UMIs to count molecules rather than PCR-amplified reads.",
    slides: [
      { n: 6, title: "Droplet sequencing idea", body: "A suspension of cells is partitioned into many small reactions so transcripts can be assigned to cell barcodes." },
      { n: 7, title: "10X Chromium", body: "The Chromium system aims to place one bead, one cell and reagents into each gel bead-in-emulsion reaction." },
      { n: 8, title: "One GEM, one barcode", body: "The useful droplet contains a bead with oligos, a cell and reagents; the barcode tags the cell of origin." },
      { n: 9, title: "Oligo architecture", body: "Bead oligos contain a cell barcode, UMI and poly(dT), so polyA mRNA can be captured after lysis." },
      { n: 10, title: "Pooling after labeling", body: "Once transcripts are labeled, all molecules can be pooled because the barcode preserves cell identity." },
      { n: 11, title: "UMI counting", body: "UMIs mark original molecules before amplification, so duplicate reads can be collapsed into molecular counts." },
    ],
  },
  {
    eyebrow: "Part 3",
    title: "Feature-barcode matrix and quality control",
    intro: "The matrix is only useful after QC. A barcode is not automatically a good cell: it may be an empty droplet, ambient RNA, a damaged cell, a stressed cell or a doublet.",
    slides: [
      { n: 12, title: "Analysis pipeline", body: "Reads are aligned and summarized into a feature-barcode matrix, then filtered before downstream analysis." },
      { n: 13, title: "Feature-barcode matrix", body: "Rows are genes or features; columns are barcodes; entries are UMI counts." },
      { n: 14, title: "Empty droplets", body: "Many droplets do not contain an intact cell but may still capture ambient RNA from broken cells." },
      { n: 15, title: "Cell quality metrics", body: "Total UMI counts, detected genes and mitochondrial fraction help separate good cells from damaged or dead cells." },
      { n: 16, title: "Doublets", body: "A doublet places transcripts from two cells under one barcode, creating artificial mixed profiles." },
      { n: 17, title: "Dropout", body: "Zeros can be technical non-detection, not true absence of expression, because only part of the transcriptome is captured." },
      { n: 18, title: "QC before biology", body: "The professor emphasizes that filtering decisions shape every later UMAP, cluster and biological claim." },
    ],
  },
  {
    eyebrow: "Part 4",
    title: "Reduction, clustering and annotation",
    intro: "After QC, single-cell analysis compresses variation, builds neighborhoods, clusters cells and gives labels only when marker genes support a biological identity.",
    slides: [
      { n: 19, title: "Dimensional reduction", body: "PCA and related steps reduce a sparse high-dimensional count matrix to major axes of variation." },
      { n: 20, title: "UMAP visualization", body: "UMAP places transcriptionally similar cells near each other for exploratory visualization." },
      { n: 21, title: "Graph clustering", body: "Cells are grouped by neighborhood structure, but cluster numbers are not yet cell-type names." },
      { n: 22, title: "Marker-based annotation", body: "Known markers connect clusters to cell types; the lecture warns against naming from one gene only." },
      { n: 23, title: "Automatic annotation", body: "Reference-based annotation can help, but it depends on the quality and match of the reference atlas." },
      { n: 24, title: "Integration", body: "Integration aligns comparable populations across samples or batches so composition and expression can be compared." },
      { n: 25, title: "Interpretation checkpoint", body: "UMAP is visualization, clustering is structure and annotation is biological inference supported by markers." },
    ],
  },
  {
    eyebrow: "Part 5",
    title: "TrailMaker processing workflow",
    intro: "The practical half turns the theory into a guided workflow: load the MIS-C PBMC data, process it, inspect QC, integrate samples and generate UMAP/clustering outputs.",
    slides: [
      { n: 26, title: "TrailMaker platform", body: "The workshop moves from conceptual scRNA-seq into TrailMaker as a reproducible analysis environment." },
      { n: 27, title: "Data management", body: "The data repository organizes datasets and processing outputs before analysis." },
      { n: 28, title: "Workshop dataset", body: "The MIS-C PBMC dataset gives a disease-relevant example with acute and convalescent samples." },
      { n: 29, title: "Start data processing", body: "The class opens the processing workflow, where filtering and integration parameters are configured." },
      { n: 30, title: "Processing steps", body: "The interface walks through preprocessing, normalization, feature selection, reduction and clustering." },
      { n: 31, title: "QC exercise", body: "The practical exercise asks you to inspect quality thresholds rather than blindly accepting defaults." },
      { n: 32, title: "Integrated view", body: "The processed dataset becomes ready for UMAP, clustering, annotation and comparison." },
      { n: 33, title: "Check outputs", body: "The workflow output must be checked before biological interpretation." },
      { n: 34, title: "From pipeline to question", body: "The key transition is from software output to a claim about PBMC composition and expression." },
    ],
  },
  {
    eyebrow: "Part 6",
    title: "PBMC cluster annotation with markers",
    intro: "This is where the page should feel like a real study guide: each visible cluster needs marker evidence, contamination checks and a cautious label.",
    slides: [
      { n: 35, title: "Expected PBMC populations", body: "PBMC data should contain T cells, B cells, NK cells, monocytes and possible contaminants." },
      { n: 36, title: "Cluster marker view", body: "Marker expression patterns help turn unlabeled clusters into candidate cell populations." },
      { n: 37, title: "CD14 monocytes", body: "Classical monocytes are supported by markers such as CD14, S100A8, S100A9 and LYZ." },
      { n: 38, title: "CD16 monocytes", body: "Non-classical monocytes are linked to markers such as FCGR3A and CDKN1C." },
      { n: 39, title: "B cells and plasma-like signals", body: "CD79A and immunoglobulin genes help identify B-cell related populations." },
      { n: 40, title: "T, NK and cytotoxic programs", body: "Markers such as CD3D, NKG7, KLRD1 or GZMB separate lymphocyte programs." },
      { n: 41, title: "Contaminant clusters", body: "HBB, HBA1, HBA2 or platelet markers can indicate erythrocyte or platelet contamination." },
      { n: 42, title: "Annotation caution", body: "A cluster label is an interpretation built from several markers, not a direct output of the algorithm." },
    ],
  },
  {
    eyebrow: "Part 7",
    title: "Composition, differential expression and report logic",
    intro: "The ending ties TrailMaker plots to exam/report language: compare cell composition, then ask whether a specific cell type changes gene expression across conditions.",
    slides: [
      { n: 43, title: "Sample composition", body: "Frequency plots compare how cell-type proportions differ between acute and convalescent samples." },
      { n: 44, title: "CD14 monocyte change", body: "The class highlights CD14 monocytes as an interpretable population in the MIS-C comparison." },
      { n: 45, title: "Cell-type-specific DE", body: "Differential expression inside one annotated cell type separates composition changes from transcriptional changes." },
      { n: 46, title: "FCGR1A / CD64 signal", body: "The professor discusses FCGR1A, also called CD64, as part of the recovered MIS-C monocyte story." },
      { n: 47, title: "Export and report", body: "Final figures and tables should support a cautious biological paragraph, not just show software outputs." },
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
    "Part 6": <AnnotationLab />,
    "Part 7": <TrailMakerReportPrompt />,
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

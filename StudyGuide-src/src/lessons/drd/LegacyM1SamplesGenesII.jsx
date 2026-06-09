import React, { useState } from "react";
import slide01 from "../../assets/drd/lesson14/slide-01.jpg";
import slide02 from "../../assets/drd/lesson14/slide-02.jpg";
import slide03 from "../../assets/drd/lesson14/slide-03.jpg";
import slide04 from "../../assets/drd/lesson14/slide-04.jpg";
import slide05 from "../../assets/drd/lesson14/slide-05.jpg";
import slide06 from "../../assets/drd/lesson14/slide-06.jpg";
import slide07 from "../../assets/drd/lesson14/slide-07.jpg";
import slide08 from "../../assets/drd/lesson14/slide-08.jpg";
import slide09 from "../../assets/drd/lesson14/slide-09.jpg";
import slide10 from "../../assets/drd/lesson14/slide-10.jpg";
import slide11 from "../../assets/drd/lesson14/slide-11.jpg";
import slide12 from "../../assets/drd/lesson14/slide-12.jpg";
import slide13 from "../../assets/drd/lesson14/slide-13.jpg";
import slide14 from "../../assets/drd/lesson14/slide-14.jpg";
import slide15 from "../../assets/drd/lesson14/slide-15.jpg";
import slide16 from "../../assets/drd/lesson14/slide-16.jpg";
import slide17 from "../../assets/drd/lesson14/slide-17.jpg";
import slide18 from "../../assets/drd/lesson14/slide-18.jpg";
import slide19 from "../../assets/drd/lesson14/slide-19.jpg";
import slide20 from "../../assets/drd/lesson14/slide-20.jpg";
import slide21 from "../../assets/drd/lesson14/slide-21.jpg";
import slide22 from "../../assets/drd/lesson14/slide-22.jpg";
import slide23 from "../../assets/drd/lesson14/slide-23.jpg";
import slide24 from "../../assets/drd/lesson14/slide-24.jpg";
import slide25 from "../../assets/drd/lesson14/slide-25.jpg";
import slide26 from "../../assets/drd/lesson14/slide-26.jpg";
import slide27 from "../../assets/drd/lesson14/slide-27.jpg";
import slide28 from "../../assets/drd/lesson14/slide-28.jpg";
import slide29 from "../../assets/drd/lesson14/slide-29.jpg";
import slide30 from "../../assets/drd/lesson14/slide-30.jpg";
import slide31 from "../../assets/drd/lesson14/slide-31.jpg";
import slide32 from "../../assets/drd/lesson14/slide-32.jpg";
import slide33 from "../../assets/drd/lesson14/slide-33.jpg";
import slide34 from "../../assets/drd/lesson14/slide-34.jpg";
import slide35 from "../../assets/drd/lesson14/slide-35.jpg";
import slide36 from "../../assets/drd/lesson14/slide-36.jpg";
import slide37 from "../../assets/drd/lesson14/slide-37.jpg";
import slide38 from "../../assets/drd/lesson14/slide-38.jpg";
import slide39 from "../../assets/drd/lesson14/slide-39.jpg";
import slide40 from "../../assets/drd/lesson14/slide-40.jpg";
import slide41 from "../../assets/drd/lesson14/slide-41.jpg";
import slide42 from "../../assets/drd/lesson14/slide-42.jpg";
import slide43 from "../../assets/drd/lesson14/slide-43.jpg";
import slide44 from "../../assets/drd/lesson14/slide-44.jpg";
import slide45 from "../../assets/drd/lesson14/slide-45.jpg";
import slide46 from "../../assets/drd/lesson14/slide-46.jpg";
import slide47 from "../../assets/drd/lesson14/slide-47.jpg";
import {
  M1LessonHero,
  M1LessonNav,
  M1Pill as Pill,
  M1ResourceLinks,
  M1SectionHeader as SectionHeader,
} from "./module1Shared.jsx";
import { lessonContent } from "./m1-samples-genes-ii/content.js";
import { ExamRadar, InterpretationCards, KMeansLab, PCALab } from "./m1-samples-genes-ii/interactions.jsx";

const SLIDES_URL = "https://drive.google.com/file/d/1acKbsGsILi05p_Emy_9GEDmvG3j2-RS0/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1D1cfFVcvPSpbPb25sOn3LXhGVgnLsQs3P1hgUaHogKg/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=Z3wzZ2PDOu8&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=14";
const slideImages = [
  slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10,
  slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20,
  slide21, slide22, slide23, slide24, slide25, slide26, slide27, slide28, slide29, slide30,
  slide31, slide32, slide33, slide34, slide35, slide36, slide37, slide38, slide39, slide40,
  slide41, slide42, slide43, slide44, slide45, slide46, slide47,
];

const ui = {
  mark: "Mark completed",
  done: "Completed",
  dashboard: "DRD dashboard",
  previous: "Previous",
  next: "Next",
  resources: "Class resources",
  slides: "Slides",
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
    title: "K-means as unsupervised grouping",
    intro: "The first block defines K-means, why K must be chosen in advance and why the result is a set of groups around centroids rather than a hierarchy.",
    slides: [
      { n: 1, title: "Lesson scope", body: "The class frames the second relationship lesson around K-means clustering and principal component analysis." },
      { n: 2, title: "K-means definition", body: "Genes or observations are partitioned into K clusters; each object belongs to the cluster with the nearest mean or centroid." },
      { n: 3, title: "Random assignment and iteration", body: "Initial assignments are updated iteratively to minimize within-cluster distance and increase separation between clusters." },
      { n: 4, title: "K-means example", body: "The slides begin moving from the concept to the concrete two-cluster example." },
      { n: 5, title: "K-means example continued", body: "The repeated examples reinforce that assignments can change as centroids move." },
      { n: 6, title: "K-means limitations", body: "K must be set ahead of time; there is no dendrogram; initialization is non-deterministic and the method can be computationally intensive." },
      { n: 7, title: "Algorithm overview", body: "Choose centroids, compute distances, assign each gene to the nearest centroid, recompute centroids and repeat." },
    ],
  },
  {
    eyebrow: "Part 2",
    title: "Seven-gene K=2 worked example",
    intro: "This is the exam-friendly algorithm block: two conditions become X/Y coordinates, distances are Euclidean and the algorithm stops when assignments no longer change.",
    slides: [
      { n: 8, title: "Input table", body: "Seven genes are represented by two condition values, which become coordinates in a simple two-dimensional example." },
      { n: 9, title: "Initial centroids", body: "The starting centroids are m1=(1,1) and m2=(5,7), chosen far apart for K=2." },
      { n: 10, title: "Step 2 logic", body: "Each distance from each gene to each centroid is calculated with Euclidean distance." },
      { n: 11, title: "Distance table", body: "The slide lists gene coordinates and prepares the distance calculations from m1 and m2." },
      { n: 12, title: "Gene 1 distance", body: "Gene 1 is itself centroid 1, so distance to m1 is 0; distance to m2 is 7.21." },
      { n: 13, title: "Euclidean formula", body: "The short example calculates sqrt((1-5)^2 + (1-7)^2) = 7.21." },
      { n: 14, title: "Gene 2 distances", body: "A second distance example reinforces assignment to the closest centroid." },
      { n: 15, title: "New centroids", body: "After the first assignments, new centroids must be computed using the original data." },
      { n: 16, title: "Step 3 reassignment", body: "Gene 3 moves closer to centroid 2; the new clusters become {1,2} and {3,4,5,6,7}." },
      { n: 17, title: "Step 4 halt", body: "Because the clusters no longer change, K-means stops with final centroids m1=(1.25,1.5) and m2=(3.9,5.1)." },
      { n: 18, title: "Plotting genes", body: "The coordinates can be plotted to visualize the final centroid-based groups." },
    ],
  },
  {
    eyebrow: "Part 3",
    title: "Choosing K and validating the clustering",
    intro: "The budding yeast time series links this class to the previous hierarchical clustering lesson and makes K choice a biological as well as technical decision.",
    slides: [
      { n: 19, title: "Back to budding yeast", body: "The class returns to the Chu et al. time-series data to discuss natural expression patterns." },
      { n: 20, title: "Time-series design", body: "Budding yeast transcript profiles can show transient or persistent expression behavior across time points." },
      { n: 21, title: "K = 4 fits well", body: "A four-cluster solution better matches the visible structure than too few groups." },
      { n: 22, title: "Inspecting the dataset", body: "The examples show why looking at the data matters when choosing K." },
      { n: 23, title: "Problems with K-means", body: "The professor highlights K choice and validation by reclustering with the same K." },
    ],
  },
  {
    eyebrow: "Part 4",
    title: "PCA as dimensionality reduction",
    intro: "PCA is not clustering. It rotates high-dimensional data to axes that capture variance, with PC1 explaining the largest amount and PC2 the next independent amount.",
    slides: [
      { n: 24, title: "Introduction to PCA", body: "PCA is introduced for biological interpretation after clustering." },
      { n: 25, title: "Formal PCA definition", body: "PCA maps high-dimensional points to fewer dimensions while preserving the main structure of the data." },
      { n: 26, title: "What PCA does", body: "It explores covariance or correlation among samples, conditions or genes and identifies variance components." },
      { n: 27, title: "Original axes", body: "The cloud of points is viewed before rotation into principal component space." },
      { n: 28, title: "PC1 and PC2", body: "PC1 captures the greatest variance; PC2 is orthogonal and captures the second largest independent variance." },
      { n: 29, title: "Largest variance direction", body: "The red arrow represents the direction where projected points spread the most around the mean." },
      { n: 30, title: "Rotated data", body: "The data are rotated, but their relative structure is preserved in the PCA coordinate system." },
      { n: 31, title: "Scree plot", body: "The scree plot shows how much variance is retained or lost as components are added." },
    ],
  },
  {
    eyebrow: "Part 5",
    title: "PCA examples in expression datasets",
    intro: "The examples show how PCA can reveal separation, outliers or hidden structure, depending on whether all genes or selected genes are used.",
    slides: [
      { n: 32, title: "Leukemia PCA: all genes", body: "A PCA plot of 34 patients and 8973 genes gives a broad exploratory view." },
      { n: 33, title: "Leukemia PCA: top genes", body: "Using 100 significant genes can sharpen the visible sample structure." },
      { n: 34, title: "Yeast PCA", body: "The first two components organize time points and help identify the dominant temporal processes." },
      { n: 35, title: "More components", body: "Considering additional components may be necessary to explain all variability." },
      { n: 36, title: "Canine and human DLBCL datasets", body: "The class introduces GEO datasets for comparative exploratory analysis." },
      { n: 37, title: "Canine PCA", body: "The first components capture different proportions of variance in canine samples." },
      { n: 38, title: "Human PCA", body: "The human dataset shows a different variance structure and separation pattern." },
      { n: 39, title: "NF-kB target probesets", body: "Focusing on biologically meaningful probesets can improve interpretability." },
    ],
  },
  {
    eyebrow: "Part 6",
    title: "Heatmaps and functional annotation",
    intro: "After clustering or differential analysis, the output still needs interpretation: heatmaps show patterns and annotation tools translate gene lists into biological themes.",
    slides: [
      { n: 40, title: "Heat map", body: "A heatmap visualizes expression levels with gene and sample structure; the legend controls the interpretation." },
      { n: 41, title: "DAVID Knowledgebase", body: "DAVID provides functional annotation tools for finding biological meaning behind large gene lists." },
      { n: 42, title: "DAVID capabilities", body: "The tool can identify GO terms, functional groups, BioCarta/KEGG maps and gene-term relationships." },
      { n: 43, title: "KEGG Pathway", body: "KEGG connects genes with pathway-level biological interpretation." },
      { n: 44, title: "GO enrichment report", body: "GO annotation distinguishes biological process, molecular function and cellular component." },
      { n: 45, title: "DAVID reference", body: "The slides reference DAVID and its protocol/database sources." },
    ],
  },
  {
    eyebrow: "Part 7",
    title: "Volcano plots and GO slims",
    intro: "The final block links effect size, adjusted significance and broad ontology summaries, which the professor flags as likely exam territory.",
    slides: [
      { n: 46, title: "Volcano plot", body: "The x-axis is log fold change; the y-axis is usually -log10 p-value, so low p-values appear high." },
      { n: 47, title: "GO slims", body: "GO slims provide a broad overview of ontology content without the fine-grained detail of full GO." },
    ],
  },
];

function Navigation({ isDone, toggle, position = "top" }) {
  return (
    <M1LessonNav
      lessonId="m1-samples-genes-ii"
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
    { label: ui.transcript, href: TRANSCRIPT_URL },
    { label: ui.recording, href: RECORDING_URL, tone: "dark" },
  ];
  return <M1ResourceLinks ui={ui} links={links} />;
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
        The June 9 class keeps extending the same story from M1.7: once profiles can be compared, the next question is how to group them, reduce dimensions and interpret the outputs.
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
              {concept.keywords.map((keyword) => <Pill key={keyword} tone={keyword === "PCA" || keyword === "DAVID" ? "red" : "stone"}>{keyword}</Pill>)}
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
            <Pill tone={index === 0 || index === 3 ? "red" : "stone"}>Step {index + 1}</Pill>
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

function SlideSections({ onZoom }) {
  const labAfterSection = {
    "Part 2": <KMeansLab />,
    "Part 4": <PCALab />,
    "Part 7": (
      <>
        <InterpretationCards />
        <ExamRadar />
      </>
    ),
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

export default function LegacyM1SamplesGenesII({ isDone = false, toggle = () => {} }) {
  const [zoom, setZoom] = useState(null);
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 text-stone-900 md:pt-12">
      <Navigation isDone={isDone} toggle={toggle} />
      <M1LessonHero
        lessonId="m1-samples-genes-ii"
        title="K-means, PCA and biological interpretation"
        subtitle="A slide-guided lesson from the June 9 class: K-means clustering, centroid updates, PCA as variance-oriented dimensionality reduction, heatmaps, DAVID/GO/KEGG annotation and volcano plots."
        tags={["K-means", "centroids", "PCA", "heatmap", "DAVID", "volcano plot"]}
        tagTone={(tag) => tag === "PCA" || tag === "volcano plot" ? "red" : "stone"}
        statLabels={{ module: ui.module, writtenExam: ui.writtenExam, answerLines: ui.answerLines, core: ui.core }}
        coreValue="K/PCA"
        bigIdeaLabel={ui.bigIdea}
        bigIdeaText="Clustering and PCA do not replace statistical testing; they help inspect structure, variance, outliers and biological meaning after high-dimensional analysis."
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

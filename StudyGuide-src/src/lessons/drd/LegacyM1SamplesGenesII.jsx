import React from "react";
import {
  M1LessonHero,
  M1LessonNav,
  M1Pill as Pill,
  M1ResourceLinks,
  M1SectionHeader as SectionHeader,
} from "./module1Shared.jsx";
import { lessonContent } from "./m1-samples-genes-ii/content.js";
import { LessonInteractions } from "./m1-samples-genes-ii/interactions.jsx";

const SLIDES_URL = "https://drive.google.com/file/d/1acKbsGsILi05p_Emy_9GEDmvG3j2-RS0/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1D1cfFVcvPSpbPb25sOn3LXhGVgnLsQs3P1hgUaHogKg/edit?usp=drivesdk";
const RECORDING_URL = "https://www.youtube.com/watch?v=Z3wzZ2PDOu8&list=PLZSGWjLWZL3KQFkSCUbUXWEVHeF0MTYZV&index=14";

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
  module: "Module",
  writtenExam: "Written test",
  answerLines: "Answer lines",
  core: "Core idea",
  bigIdea: "Big idea",
};

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

export default function LegacyM1SamplesGenesII({ isDone = false, toggle = () => {} }) {
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
      <LessonInteractions content={lessonContent} />
      <QuickQuiz />
      <ChecklistHelp />
      <Navigation isDone={isDone} toggle={toggle} position="bottom" />
    </main>
  );
}

import React from "react";
import { DRDResourcePanel } from "./resourcePanel.jsx";
import { DRDCanonicalNavigation } from "./navigation.jsx";
import { getDRDStatusMeta } from "./status.js";

function lessonTone(lesson) {
  const isModule2 = lesson?.module === "module-2";
  return {
    accent: isModule2 ? "text-emerald-700" : "text-red-700",
    accentBg: isModule2 ? "bg-emerald-700 hover:bg-emerald-800" : "bg-red-700 hover:bg-red-800",
    badge: isModule2 ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700",
    panel: isModule2 ? "bg-[#f3fff7]" : "bg-[#fbf4e8]",
  };
}

function SectionHeading({ eyebrow, title, children, accent }) {
  return (
    <div className="mb-5">
      <div className={`text-xs font-black uppercase tracking-[0.22em] ${accent}`}>{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{children}</p> : null}
    </div>
  );
}

function BulletList({ items = [], className = "" }) {
  if (!items.length) return null;
  return (
    <ul className={`list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-700 marker:text-red-700 ${className}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function ConceptGrid({ items = [], accent, badge }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Core concepts" title="What this lesson must make automatic" accent={accent} />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{item.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(item.keywords || []).map((keyword) => <span key={keyword} className={`rounded-full border px-3 py-1 text-xs font-black ${badge}`}>{keyword}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EmphasisAndTraps({ emphasis = [], traps = [], accent }) {
  if (!emphasis.length && !traps.length) return null;
  return (
    <section className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
        <SectionHeading eyebrow="Professor emphasis" title="Listen for these signals" accent="text-amber-800" />
        <BulletList items={emphasis} />
      </article>
      <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
        <SectionHeading eyebrow="Exam/report traps" title="Easy ways to lose points" accent={accent} />
        <BulletList items={traps} />
      </article>
    </section>
  );
}

function PracticeBlock({ items = [], accent, badge }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Interactive practice" title="Practice moves" accent={accent}>
        Use these as small active-recall tasks before opening the source slides or transcript.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-black ${badge}`}>Step {index + 1}</div>
            <h3 className="text-lg font-black leading-7 text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuizBlock({ items = [], accent }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Quick quiz" title="Checkpoint questions" accent={accent} />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <details key={item.question} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
            <summary className="cursor-pointer text-sm font-black leading-6 text-stone-950">{index + 1}. {item.question}</summary>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-7 text-stone-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ChecklistBlock({ items = [], title = "Checklist block", accent }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Checklist/report block" title={title} accent={accent} />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item, index) => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{index + 1}. {item}</div>)}
      </div>
    </section>
  );
}

export function DRDLessonTemplate({ lesson, content, interactions: Interactions, isDone = false, toggle = () => {} }) {
  const status = getDRDStatusMeta(lesson?.status);
  const tone = lessonTone(lesson);
  const extractionStatus = content?.extractionStatus || "planned";

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-6 md:pt-8">
      <DRDCanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} />
      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`${tone.panel} p-8 md:p-12`}>
          <div className={`inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${tone.badge}`}>{lesson?.code} - {lesson?.date}</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">{lesson?.title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">{lesson?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">{(lesson?.tags || []).map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-3xl border p-5 ${status.className}`}><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Status</div><div className="mt-2 text-2xl font-black">{status.label}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Route</div><div className="mt-2 text-sm font-black text-stone-950">#/lesson/{lesson?.id}</div></div>
          </div>
          <div className="mt-3 rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Content status</div>
            <div className="mt-2 text-sm font-black text-stone-950">{extractionStatus}</div>
          </div>
          <DRDResourcePanel lesson={lesson} />
        </aside>
      </section>

      <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeading eyebrow="Learning objectives" title="By the end you should be able to..." accent={tone.accent} />
        <div className="grid gap-3 md:grid-cols-2">
          {(content?.objectives || []).map((objective, index) => <div key={objective} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{index + 1}. {objective}</div>)}
        </div>
      </section>

      <ConceptGrid items={content?.coreConcepts} accent={tone.accent} badge={tone.badge} />
      <EmphasisAndTraps emphasis={content?.professorEmphasis} traps={content?.examTraps} accent={tone.accent} />
      <PracticeBlock items={content?.practice} accent={tone.accent} badge={tone.badge} />
      {Interactions ? <Interactions lesson={lesson} content={content} /> : null}
      <QuizBlock items={content?.checkpoints} accent={tone.accent} />
      <ChecklistBlock items={content?.reportChecklist} title={content?.checklistTitle} accent={tone.accent} />
      <DRDCanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} bottom />
    </main>
  );
}

export function DRDPlannedLesson(props) {
  const fallbackContent = {
    extractionStatus: "planned",
    objectives: ["Identify the expected source material for this lesson.", "Use the manifest resources when slides, transcript or recording become available."],
    coreConcepts: [],
    professorEmphasis: ["This route is active so the study path stays stable while content is being extracted."],
    examTraps: ["Do not treat an upcoming route as completed content until source material is attached."],
    practice: [],
    checkpoints: [],
    reportChecklist: [],
  };
  return <DRDLessonTemplate {...props} content={fallbackContent} />;
}

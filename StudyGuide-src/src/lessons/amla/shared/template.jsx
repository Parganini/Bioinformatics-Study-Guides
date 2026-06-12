import React from "react";
import { AMLAResourcePanel } from "./resourcePanel.jsx";
import { AMLACanonicalNavigation } from "./navigation.jsx";
import { getAMLAStatusMeta } from "./status.js";

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{children}</p> : null}
    </div>
  );
}

function BulletList({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-6 text-stone-700 marker:text-red-700">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Objectives({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Learning objectives" title="By the end you should be able to..." />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((objective, index) => <div key={objective} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{index + 1}. {objective}</div>)}
      </div>
    </section>
  );
}

function ConceptGrid({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Core concepts" title="Make these concepts automatic" />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{item.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(item.keywords || []).map((keyword) => <span key={keyword} className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{keyword}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SlideGuidedPath({ blocks = [] }) {
  if (!blocks.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Slide-guided study path" title="What to read in the slides and transcript">
        Each block keeps the source material compact: concept, intuition, professor emphasis and what to remember for exam or project.
      </SectionHeading>
      <div className="grid gap-4 lg:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.range} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{block.range}</span>
            <h3 className="mt-4 text-xl font-black leading-7 text-stone-950">{block.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-7 text-stone-600">{block.concept}</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-stone-200 bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Intuition</div>
                <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{block.intuition}</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">Professor emphasis</div>
                <p className="mt-2 text-sm font-bold leading-6 text-amber-950">{block.professor}</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Exam / project memory</div>
                <p className="mt-2 text-sm font-bold leading-6 text-emerald-950">{block.remember}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EmphasisAndTraps({ emphasis = [], traps = [] }) {
  if (!emphasis.length && !traps.length) return null;
  return (
    <section className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
        <SectionHeading eyebrow="Professor emphasis" title="Signals from class" />
        <BulletList items={emphasis} />
      </article>
      <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
        <SectionHeading eyebrow="Common traps" title="Easy ways to lose points" />
        <BulletList items={traps} />
      </article>
    </section>
  );
}

function MiniLab({ lab }) {
  if (!lab) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Mini-lab" title={lab.title}>{lab.objective}</SectionHeading>
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Notebook / tool</div>
          {lab.href ? <a href={lab.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white">Open notebook</a> : <p className="mt-3 text-sm font-bold leading-7 text-red-950">{lab.todo || "No standalone notebook link was visible in the extracted source material."}</p>}
          <div className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-red-700">Explain afterwards</div>
          <BulletList items={lab.explain} />
        </article>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ["Minimum steps", lab.steps],
            ["Parameters to touch", lab.parameters],
            ["Outputs to inspect", lab.outputs],
          ].map(([title, items]) => (
            <article key={title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-lg font-black text-stone-950">{title}</h3>
              <div className="mt-3"><BulletList items={items} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickQuiz({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Quick quiz" title="Short active-recall checks" />
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

function ExamQuestions({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Exam-style questions" title="Reasoning-oriented multiple choice" />
      <div className="grid gap-4">
        {items.map((item, index) => (
          <details key={item.id || item.question} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
            <summary className="cursor-pointer text-base font-black leading-7 text-stone-950">{index + 1}. {item.question}</summary>
            <div className="mt-4 grid gap-2">
              {item.options.map((option, optionIndex) => (
                <div key={option} className={`rounded-2xl border p-3 text-sm font-bold leading-6 ${optionIndex === item.correct ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-stone-200 bg-white text-stone-700"}`}>
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-semibold leading-7 text-stone-700">
              Correct: {String.fromCharCode(65 + item.correct)}. {item.explanation}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ChecklistBlock({ items = [], title = "Study checklist" }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionHeading eyebrow="Project / exam checklist" title={title} />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item, index) => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{index + 1}. {item}</div>)}
      </div>
    </section>
  );
}

export function AMLALessonTemplate({ lesson, content, interactions: Interactions, isDone = false, toggle = () => {} }) {
  const status = getAMLAStatusMeta(lesson?.status);
  const extractionStatus = content?.extractionStatus || "content pending";

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-6 md:pt-8">
      <AMLACanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} />
      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{lesson?.code} - {lesson?.date}</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">{lesson?.title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">{lesson?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">{(lesson?.tags || []).map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-3xl border p-5 ${status.className}`}><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Status</div><div className="mt-2 text-2xl font-black">{status.label}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Lesson type</div><div className="mt-2 text-sm font-black text-stone-950">{lesson?.lessonType}</div></div>
          </div>
          <div className="mt-3 rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Content status</div>
            <div className="mt-2 text-sm font-black text-stone-950">{extractionStatus}</div>
          </div>
          <AMLAResourcePanel lesson={lesson} />
        </aside>
      </section>

      <Objectives items={content?.objectives} />
      <ConceptGrid items={content?.coreConcepts} />
      <SlideGuidedPath blocks={content?.slidePath} />
      <EmphasisAndTraps emphasis={content?.professorEmphasis} traps={content?.commonTraps} />
      <MiniLab lab={content?.miniLab} />
      {Interactions ? <Interactions lesson={lesson} content={content} /> : null}
      <QuickQuiz items={content?.quickQuiz} />
      <ExamQuestions items={content?.examQuestions} />
      <ChecklistBlock items={content?.studyChecklist} title={content?.checklistTitle} />
      <AMLACanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} bottom />
    </main>
  );
}

export function AMLAPlannedLesson(props) {
  const fallbackContent = {
    extractionStatus: "content pending",
    objectives: ["Use the linked slides, transcript and recording as the canonical source while the full lesson is expanded."],
    coreConcepts: [],
    slidePath: [],
    professorEmphasis: ["This route is intentionally present so the AMLA dashboard stays complete and chronological."],
    commonTraps: ["Do not treat this placeholder as complete study content yet."],
    quickQuiz: [],
    examQuestions: [],
    studyChecklist: ["Expand this page after validating AMLA architecture and the quality of the first two complete lessons."],
  };
  return <AMLALessonTemplate {...props} content={fallbackContent} />;
}

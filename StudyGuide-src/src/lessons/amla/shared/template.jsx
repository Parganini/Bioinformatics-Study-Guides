import React, { useState } from "react";
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

function StudyCallout({ label, tone = "stone", children }) {
  const classes = {
    stone: "border-stone-200 bg-white text-stone-700",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-950",
    red: "border-red-100 bg-red-50 text-red-950",
  };
  return (
    <div className={`rounded-2xl border p-4 ${classes[tone] || classes.stone}`}>
      <div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="mt-2 text-sm font-bold leading-6">{children}</div>
    </div>
  );
}

function staticAssetUrl(src) {
  if (!src) return null;
  if (/^(https?:|data:|blob:|\/)/.test(src)) return src;
  const base = import.meta.env.BASE_URL || "./";
  if (base === "./") return `../${src}`;
  return `${base.replace(/\/?$/, "/")}${src}`;
}

function SlidePreview({ slide, resources, onZoom }) {
  const deckKey = slide.deck || "slides";
  const href = slide.href || resources?.[deckKey] || resources?.slides;
  const slideMeta = `${slide.deckLabel || deckKey}${slide.page ? ` - slide ${slide.page}` : ""}`;
  const imageSrc = staticAssetUrl(slide.image);
  if (!imageSrc) {
    return (
      <div className="mb-4 rounded-[1.35rem] border border-dashed border-stone-300 bg-white p-4">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{slideMeta}</div>
        <p className="mt-2 text-sm font-bold leading-6 text-stone-700">Static slide image pending for this block.</p>
        {href ? <a href={href} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs font-black text-red-700">Open source PDF</a> : null}
      </div>
    );
  }
  return (
    <figure className="mb-4 overflow-hidden rounded-[1.35rem] border border-stone-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{slideMeta}</span>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => onZoom?.(slide)} className="text-xs font-black text-red-700">Zoom</button>
          {href ? <a href={href} target="_blank" rel="noreferrer" className="text-xs font-black text-stone-600">PDF</a> : null}
        </div>
      </div>
      <button type="button" onClick={() => onZoom?.(slide)} className="group block w-full bg-white p-2 text-left">
        <img src={imageSrc} alt={`${slideMeta}: ${slide.title}`} className="h-auto w-full rounded-xl border border-stone-100 object-contain transition duration-200 group-hover:scale-[1.01]" loading="lazy" />
      </button>
      <figcaption className="border-t border-stone-100 px-4 py-3 text-xs font-bold leading-5 text-stone-500">Click the slide or Zoom to inspect it larger.</figcaption>
    </figure>
  );
}

function SlideZoomModal({ slide, resources, onClose }) {
  if (!slide?.image) return null;
  const deckKey = slide.deck || "slides";
  const href = slide.href || resources?.[deckKey] || resources?.slides;
  const slideMeta = `${slide.deckLabel || deckKey}${slide.page ? ` - slide ${slide.page}` : ""}`;
  const imageSrc = staticAssetUrl(slide.image);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 p-3 md:p-6" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="max-h-[96vh] w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/20 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{slideMeta}</div>
            <h3 className="text-base font-black text-stone-950">{slide.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            {href ? <a href={href} target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">Open PDF</a> : null}
            <button type="button" onClick={onClose} className="rounded-full bg-stone-950 px-4 py-2 text-xs font-black text-white">Close</button>
          </div>
        </div>
        <div className="max-h-[calc(96vh-92px)] overflow-auto bg-stone-100 p-3">
          <img src={imageSrc} alt={`${slideMeta}: ${slide.title}`} className="mx-auto h-auto max-w-none rounded-lg bg-white shadow-xl md:max-w-full" />
        </div>
      </div>
    </div>
  );
}

function SectionMiniLab({ lab }) {
  if (!lab) return null;
  return (
    <div className="mt-6 rounded-[2rem] border border-red-100 bg-red-50 p-5">
      <div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Mini-lab intercalated here</div>
      <h3 className="mt-2 text-2xl font-black text-red-950">{lab.title}</h3>
      <p className="mt-2 text-sm font-bold leading-7 text-red-950">{lab.objective}</p>
      {lab.href ? (
        <a href={lab.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white">Open notebook / Colab</a>
      ) : (
        <p className="mt-4 rounded-2xl border border-red-200 bg-white p-4 text-sm font-bold leading-7 text-stone-700">{lab.todo || "Notebook link pending in the source material."}</p>
      )}
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          ["Steps", lab.steps],
          ["Change", lab.parameters],
          ["Inspect", lab.outputs],
        ].map(([title, items]) => (
          <article key={title} className="rounded-2xl border border-red-100 bg-white p-4">
            <h4 className="text-sm font-black text-red-800">{title}</h4>
            <div className="mt-3"><BulletList items={items} /></div>
          </article>
        ))}
      </div>
      {lab.explain?.length ? (
        <StudyCallout label="Afterwards explain" tone="emerald">
          <BulletList items={lab.explain} />
        </StudyCallout>
      ) : null}
    </div>
  );
}

function SlideWalkthrough({ sections = [], resources }) {
  const [zoomSlide, setZoomSlide] = useState(null);
  if (!sections.length) return null;
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
        <SectionHeading eyebrow="Slide walkthrough" title="Study the class in slide order">
          Follow the source deck first. Each section adds the transcript comments, the intuition to keep, and the exam/project angle before moving on.
        </SectionHeading>
        {resources?.slides ? (
          <a href={resources.slides} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-800">Open slides while reading</a>
        ) : null}
      </div>
      {sections.map((section, sectionIndex) => (
        <article key={section.title} className="rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">Section {sectionIndex + 1}</span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{section.range}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{section.title}</h2>
          <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{section.intro}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {(section.slides || []).map((slide, slideIndex) => (
              <div key={`${section.title}-${slide.label || slideIndex}`} className={`rounded-[2rem] border border-stone-200 bg-stone-50 p-5 ${section.slides.length % 2 === 1 && slideIndex === section.slides.length - 1 ? "lg:col-span-2" : ""}`}>
                <SlidePreview slide={slide} resources={resources} onZoom={setZoomSlide} />
                <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{slide.label}</span>
                <h3 className="mt-3 text-xl font-black leading-7 text-stone-950">{slide.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-stone-700">{slide.comment}</p>
                {slide.professor ? <StudyCallout label="Professor comment" tone="amber">{slide.professor}</StudyCallout> : null}
                {slide.remember ? <StudyCallout label="Remember for exam/project" tone="emerald">{slide.remember}</StudyCallout> : null}
                {slide.trap ? <StudyCallout label="Common trap" tone="red">{slide.trap}</StudyCallout> : null}
              </div>
            ))}
          </div>
          <SectionMiniLab lab={section.lab} />
        </article>
      ))}
      <SlideZoomModal slide={zoomSlide} resources={resources} onClose={() => setZoomSlide(null)} />
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

      <SlideWalkthrough sections={content?.walkthroughSections} resources={lesson?.resources} />
      {!content?.walkthroughSections?.length ? <SlideGuidedPath blocks={content?.slidePath} /> : null}
      {Interactions ? <Interactions lesson={lesson} content={content} /> : null}
      <Objectives items={content?.objectives} />
      <ConceptGrid items={content?.coreConcepts} />
      <EmphasisAndTraps emphasis={content?.professorEmphasis} traps={content?.commonTraps} />
      {!content?.walkthroughSections?.length ? <MiniLab lab={content?.miniLab} /> : null}
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

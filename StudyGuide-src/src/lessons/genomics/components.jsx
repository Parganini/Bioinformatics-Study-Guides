import React, { useMemo, useState } from "react";

function clsx(...items) {
  return items.filter(Boolean).join(" ");
}

export function SourceBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800">
      {children}
    </span>
  );
}

export function ProfessorNote({ note }) {
  if (!note) return null;
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">Professor / exam emphasis</p>
      <p className="mt-2 text-sm leading-6 text-amber-950">{note.text}</p>
      <p className="mt-2 text-xs font-bold text-amber-800">Supported by: {note.source}</p>
    </div>
  );
}

export function ExamTrap({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-700">Exam trap</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FormulaBox({ formula }) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">Formula</p>
      <h4 className="mt-2 text-base font-black text-sky-950">{formula.title}</h4>
      <p className="mt-2 rounded-xl bg-white/80 px-3 py-2 font-mono text-sm font-bold text-sky-950">{formula.expression}</p>
      <ul className="mt-3 space-y-1 text-sm text-sky-950">
        {formula.variables.map((variable) => (
          <li key={variable}>{variable}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm font-semibold leading-6 text-sky-900">{formula.example}</p>
    </div>
  );
}

export function MiniExercise({ exercise }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">Mini exercise</p>
          <p className="mt-2 text-sm font-bold leading-6 text-stone-900">{exercise.prompt}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="shrink-0 rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-xs font-black text-stone-800 transition hover:bg-stone-100"
        >
          {open ? "Hide answer" : "Show answer"}
        </button>
      </div>
      {open && <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-semibold leading-6 text-emerald-950">{exercise.answer}</p>}
    </div>
  );
}

export function Checklist({ items = [], checked = {}, onToggle }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">Checklist</p>
      <div className="mt-3 grid gap-2">
        {items.map((item, index) => {
          const id = `${index}-${item}`;
          return (
            <label key={id} className="flex cursor-pointer gap-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-stone-800">
              <input
                type="checkbox"
                checked={Boolean(checked[id])}
                onChange={() => onToggle?.(id)}
                className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-700"
              />
              <span>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function assetUrl(asset) {
  const normalized = asset.replace(/^\/+/, "");
  const path = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "";
  const prefix = path.includes("/ag/") ? "../" : import.meta.env.BASE_URL || "./";
  return `${prefix}${normalized}`.replace(/([^:]\/)\/+/g, "$1");
}

export function SlideCallout({ slide, onZoom }) {
  const [failed, setFailed] = useState(false);
  const url = useMemo(() => assetUrl(slide.asset), [slide.asset]);

  return (
    <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="border-b border-stone-200 bg-stone-50 px-4 py-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <figcaption className="text-sm font-black text-stone-900">{slide.topic}</figcaption>
          <span className="text-xs font-bold text-stone-500">{slide.source} - p. {slide.page}</span>
        </div>
      </div>
      {failed ? (
        <div className="flex min-h-52 flex-col justify-center bg-stone-100 p-6 text-center">
          <p className="text-sm font-black text-stone-800">Original slide asset pending</p>
          <p className="mt-2 text-xs font-semibold leading-5 text-stone-600">
            Mapping is preserved for extraction: {slide.source}, page {slide.page}, {slide.asset}.
          </p>
        </div>
      ) : (
        <button type="button" onClick={() => onZoom?.(slide)} className="block w-full bg-white">
          <img
            src={url}
            alt={`${slide.topic} from ${slide.source}, page ${slide.page}`}
            onError={() => setFailed(true)}
            className="aspect-[16/10] w-full bg-white object-contain"
            loading="lazy"
          />
        </button>
      )}
    </figure>
  );
}

export function SlideZoom({ slide, onClose }) {
  if (!slide) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-[min(1100px,100%)] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 px-4 py-3">
          <div>
            <p className="text-sm font-black text-stone-900">{slide.topic}</p>
            <p className="text-xs font-bold text-stone-500">{slide.source} - p. {slide.page}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-stone-300 px-4 py-2 text-xs font-black text-stone-800">
            Close
          </button>
        </div>
        <div className="max-h-[78vh] overflow-auto bg-stone-100 p-3">
          <img src={assetUrl(slide.asset)} alt="" className="mx-auto w-full max-w-[1040px] bg-white object-contain" />
        </div>
      </div>
    </div>
  );
}

export function LectureSection({ section, slides, completed, onToggle, checklistState, onChecklistToggle, onZoom }) {
  return (
    <section id={section.id} className="scroll-mt-24 rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm md:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700">Section {section.number}</p>
          <h2 className="mt-2 text-2xl font-black text-stone-950 md:text-3xl">{section.title}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {section.sources.map((source) => (
              <SourceBadge key={source}>{source}</SourceBadge>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={clsx(
            "rounded-full px-5 py-3 text-sm font-black transition",
            completed
              ? "bg-emerald-700 text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-800"
              : "border border-stone-300 bg-white text-stone-800 hover:bg-stone-50"
          )}
        >
          {completed ? "Completed" : "Mark complete"}
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <ul className="space-y-3 text-base leading-7 text-stone-700">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Remember for the exam</p>
            <p className="mt-2 text-sm font-bold leading-6 text-emerald-950">{section.remember}</p>
          </div>
          <ProfessorNote note={section.professorNote} />
          <ExamTrap items={section.traps} />
          <div className="grid gap-4 md:grid-cols-2">
            {(section.formulas || []).map((formula) => (
              <FormulaBox key={formula.title} formula={formula} />
            ))}
          </div>
          <div className="grid gap-4">
            {(section.exercises || []).map((exercise) => (
              <MiniExercise key={exercise.prompt} exercise={exercise} />
            ))}
          </div>
          <Checklist items={section.checklist} checked={checklistState} onToggle={onChecklistToggle} />
        </div>
        <aside className="space-y-4">
          {slides.length ? (
            slides.map((slide) => <SlideCallout key={slide.id} slide={slide} onZoom={onZoom} />)
          ) : (
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-sm font-black text-stone-800">No slide image selected</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">This section is source-labeled but intentionally text-only to keep the guide compact.</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

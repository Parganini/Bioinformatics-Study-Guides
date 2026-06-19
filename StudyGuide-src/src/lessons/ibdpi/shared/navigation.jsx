import React from "react";
import { getIBDPINeighbors, ibdpiLessonHref } from "../ibdpiManifest.js";

export function IBDPILessonNavigation({ lesson, isDone, toggle }) {
  const { previous, next } = getIBDPINeighbors(lesson.id);
  const navClass = "inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md";
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <a href="#/" className="text-sm font-black text-sky-700">Back to IBDPI dashboard</a>
          <div className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-stone-400">Current class</div>
          <div className="mt-1 text-xl font-black text-stone-950">{lesson.code} - {lesson.title}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {previous ? <a href={ibdpiLessonHref(previous)} className={navClass}>Previous</a> : <span className="rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-sm font-black text-stone-400">First class</span>}
          <button type="button" onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black text-white ${isDone ? "bg-emerald-600" : "bg-sky-700"}`}>{isDone ? "Completed" : "Mark completed"}</button>
          {next ? <a href={ibdpiLessonHref(next)} className={navClass}>Next</a> : <span className="rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-sm font-black text-stone-400">Last class</span>}
        </div>
      </div>
    </section>
  );
}

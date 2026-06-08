import React from "react";
import { DRDResourcePanel } from "./resourcePanel.jsx";
import { DRDCanonicalNavigation } from "./navigation.jsx";
import { getDRDStatusMeta } from "./status.js";

export function DRDPlannedLesson({ lesson, isDone = false, toggle = () => {} }) {
  const status = getDRDStatusMeta(lesson?.status);
  const isModule2 = lesson?.module === "module-2";
  const accent = isModule2 ? "text-emerald-700" : "text-red-700";
  const badge = isModule2 ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700";

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-6 md:pt-8">
      <DRDCanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} />
      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className={`inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${badge}`}>{lesson?.code} - {lesson?.date}</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">{lesson?.title}</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">{lesson?.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">{(lesson?.tags || []).map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-700">{tag}</span>)}</div>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-3xl border p-5 ${status.className}`}><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Status</div><div className="mt-2 text-2xl font-black">{status.label}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Route</div><div className="mt-2 text-sm font-black text-stone-950">#/lesson/{lesson?.id}</div></div>
          </div>
          <DRDResourcePanel lesson={lesson} />
        </aside>
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
          <div className={`text-xs font-black uppercase tracking-[0.22em] ${accent}`}>Planned deliverables</div>
          <div className="mt-4 flex flex-wrap gap-2">{(lesson?.products || []).map((product) => <span key={product} className={`rounded-full border px-3 py-1 text-xs font-black ${badge}`}>{product}</span>)}</div>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
          <div className={`text-xs font-black uppercase tracking-[0.22em] ${accent}`}>Template contract</div>
          <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">The complete lesson will use the shared DRD template: objectives, core concepts, professor emphasis, exam/report traps, interactive practice, quick checkpoint and checklist block.</p>
        </article>
      </section>
      <DRDCanonicalNavigation lesson={lesson} isDone={isDone} toggle={toggle} bottom />
    </main>
  );
}

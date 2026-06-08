import React, { useMemo, useState } from "react";

const categories = [
  ["feature", "Core feature"],
  ["bias", "Technical bias"],
  ["qc", "QC / filtering"],
  ["norm", "Normalization"],
];

const triageItems = [
  {
    id: "two-samples",
    text: "Two labelled samples are hybridized on the same spotted array.",
    answer: "feature",
    why: "This is the defining feature of competitive two-colour arrays.",
  },
  {
    id: "cy5-low",
    text: "Cy5 is stronger at low intensity and Cy3 is stronger at high intensity.",
    answer: "bias",
    why: "Different dye behaviour creates intensity-dependent technical bias.",
  },
  {
    id: "scratch",
    text: "A scratch crosses part of the scan and several spots have high background.",
    answer: "qc",
    why: "This is an image/spot-quality problem and may require filtering or repeating the array.",
  },
  {
    id: "ma-zero",
    text: "After correction, the MA cloud is centered around M = 0.",
    answer: "norm",
    why: "Centering the M distribution is the goal of intra-array normalization.",
  },
  {
    id: "reference",
    text: "The same pooled biological sample is used across many arrays.",
    answer: "feature",
    why: "A reference sample is a design anchor, not a positive/negative QC spot.",
  },
  {
    id: "same-distribution",
    text: "Intensity distributions are made comparable across arrays.",
    answer: "norm",
    why: "Inter-array normalization comparabilizes intensity distributions before downstream analysis.",
  },
];

const maExamples = [
  { label: "Spot A", observed: 1.4 },
  { label: "Spot B", observed: 0.6 },
  { label: "Spot C", observed: -0.2 },
  { label: "Spot D", observed: -1.0 },
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">{children}</p> : null}
    </div>
  );
}

function TriagePractice() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(
    () => triageItems.filter((item) => answers[item.id] === item.answer).length,
    [answers],
  );

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-black text-stone-950">Artifact triage</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">Classify each statement before reading the explanation.</p>
        </div>
        <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{score}/{triageItems.length}</div>
      </div>
      <div className="mt-5 grid gap-3">
        {triageItems.map((item) => {
          const selected = answers[item.id];
          const correct = selected === item.answer;
          const answered = selected !== undefined;
          return (
            <div key={item.id} className={`rounded-2xl border p-4 ${answered ? (correct ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50") : "border-stone-200 bg-stone-50"}`}>
              <div className="text-sm font-black leading-6 text-stone-950">{item.text}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [item.id]: key }))}
                    className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${selected === key ? "border-red-300 bg-white text-red-800 ring-2 ring-red-100" : "border-stone-200 bg-white text-stone-600 hover:border-red-200 hover:bg-red-50"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {answered ? <p className="mt-3 text-xs font-bold leading-5 text-stone-600">{item.why}</p> : null}
            </div>
          );
        })}
      </div>
    </article>
  );
}

function MAScalingPractice() {
  const [median, setMedian] = useState(0.6);
  const corrected = maExamples.map((item) => ({ ...item, corrected: Number((item.observed - median).toFixed(2)) }));

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-stone-950">MA scaling check</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">In a simple intra-array scaling step, subtract the median M from every observed M value.</p>
      <label className="mt-5 block text-xs font-black uppercase tracking-[0.18em] text-stone-500" htmlFor="m1-stanford-median">Median M to subtract</label>
      <div className="mt-2 flex items-center gap-3">
        <input
          id="m1-stanford-median"
          type="range"
          min="-1.2"
          max="1.2"
          step="0.2"
          value={median}
          onChange={(event) => setMedian(Number(event.target.value))}
          className="w-full accent-red-700"
        />
        <div className="w-16 rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2 text-center text-sm font-black text-stone-950">{median.toFixed(1)}</div>
      </div>
      <div className="mt-5 grid gap-2">
        {corrected.map((item) => (
          <div key={item.label} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm font-bold text-stone-700">
            <span>{item.label}</span>
            <span>M obs {item.observed.toFixed(1)}</span>
            <span className={Math.abs(item.corrected) <= 0.4 ? "text-emerald-700" : "text-red-700"}>M corr {item.corrected.toFixed(1)}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950">
        Exam sentence: normalization should move the log-ratio cloud toward M = 0 before expression changes are interpreted biologically.
      </p>
    </article>
  );
}

export function LessonInteractions() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionTitle eyebrow="Guided interaction" title="Separate biology from technical signal">
        The goal is to make the exam logic automatic: identify the platform feature, catch the technical artifact, then say what normalization is trying to fix.
      </SectionTitle>
      <div className="grid gap-5 lg:grid-cols-2">
        <TriagePractice />
        <MAScalingPractice />
      </div>
    </section>
  );
}

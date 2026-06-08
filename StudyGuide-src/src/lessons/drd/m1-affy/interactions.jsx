import React, { useMemo, useState } from "react";

const fileSteps = [
  { id: "DAT", role: "Raw scanner image", next: "image acquisition" },
  { id: "CEL", role: "Feature-level intensity table", next: "preprocessing input" },
  { id: "CDF", role: "Map from features to probes/probe sets", next: "annotation/map" },
  { id: "CHP", role: "Processed output after analysis", next: "result file" },
];

const scenarios = [
  {
    text: "Two labelled samples compete on the same array with Cy3/Cy5.",
    answer: "Stanford",
    why: "That is the two-colour competitive design from the previous lesson.",
  },
  {
    text: "One sample is hybridized per chip and chips are normalized across arrays.",
    answer: "Affymetrix",
    why: "That is the noncompetitive one-colour GeneChip logic.",
  },
  {
    text: "The main preprocessing pipeline is background correction, quantile normalization and summarization.",
    answer: "Affymetrix",
    why: "Those are the core operations of RMA.",
  },
  {
    text: "The central technical issue is colour-specific dye bias.",
    answer: "Stanford",
    why: "Cy3/Cy5 dye bias belongs to the competitive array design.",
  },
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

function PMMMSimulator() {
  const [pm, setPm] = useState(720);
  const [mm, setMm] = useState(260);
  const diff = pm - mm;
  const interpretation = diff > 250
    ? "Specific signal is likely strong: PM is clearly above MM."
    : diff > 0
      ? "Signal is present but modest: mention possible nonspecific contribution."
      : "Danger zone: MM is as high as or higher than PM, so specificity is questionable.";

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-stone-950">PM/MM signal check</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">Move PM and MM intensities, then read the specificity cue.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          Perfect match
          <input type="range" min="100" max="1200" value={pm} onChange={(event) => setPm(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          <span className="mt-2 block text-2xl text-stone-950">{pm}</span>
        </label>
        <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          Mismatch
          <input type="range" min="100" max="1200" value={mm} onChange={(event) => setMm(Number(event.target.value))} className="mt-3 w-full accent-amber-600" />
          <span className="mt-2 block text-2xl text-stone-950">{mm}</span>
        </label>
      </div>
      <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950">PM - MM = {diff}. {interpretation}</p>
    </article>
  );
}

function FileFlow() {
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-stone-950">DAT/CEL/CDF/CHP flow</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">Use this order when explaining raw data, mapping and processed results.</p>
      <div className="mt-5 grid gap-3">
        {fileSteps.map((step, index) => (
          <div key={step.id} className="grid gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:grid-cols-[auto_1fr]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{index + 1}</div>
            <div>
              <div className="text-lg font-black text-stone-950">{step.id}</div>
              <p className="text-sm font-semibold leading-6 text-stone-600">{step.role}. Exam cue: {step.next}.</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function PlatformClassifier() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => scenarios.filter((item, index) => answers[index] === item.answer).length, [answers]);

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm lg:col-span-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-black text-stone-950">Competitive vs noncompetitive</h3>
        <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{score}/{scenarios.length}</div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {scenarios.map((item, index) => {
          const selected = answers[index];
          const answered = selected !== undefined;
          return (
            <div key={item.text} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-sm font-black leading-6 text-stone-950">{item.text}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Stanford", "Affymetrix"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option }))}
                    className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${selected === option ? (option === item.answer ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-white text-stone-600 hover:border-red-200"}`}
                  >
                    {option}
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

export function LessonInteractions() {
  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <SectionTitle eyebrow="Guided interaction" title="Follow the GeneChip pipeline">
        Keep the answer anchored in three moves: platform contrast, file flow and RMA preprocessing.
      </SectionTitle>
      <div className="grid gap-5 lg:grid-cols-2">
        <PMMMSimulator />
        <FileFlow />
        <PlatformClassifier />
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";

const infiniumItems = [
  {
    text: "Separate methylated and unmethylated probe designs.",
    answer: "Infinium I",
    why: "Infinium I distinguishes states with two bead/probe designs.",
  },
  {
    text: "One probe followed by single-base extension.",
    answer: "Infinium II",
    why: "Infinium II uses one probe and reads the state through extension chemistry.",
  },
  {
    text: "Often shows a different intensity distribution from the other chemistry.",
    answer: "Both",
    why: "The difference between probe types is exactly why probe-type bias needs normalization.",
  },
  {
    text: "Uses two beads/probes for one CpG state comparison.",
    answer: "Infinium I",
    why: "Two probe designs are the key memory hook for Infinium I.",
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

function betaMeaning(beta) {
  if (beta < 0.2) return "Mostly unmethylated signal. In promoter context this may be compatible with active expression, but context still matters.";
  if (beta > 0.8) return "Mostly methylated signal. In promoters this often suggests repression, while gene-body context can differ.";
  return "Intermediate or mixed signal. Consider cell-type mixture, allele-specific methylation or heterogeneous tissue composition.";
}

function BetaCalculator() {
  const [mSignal, setMSignal] = useState(800);
  const [uSignal, setUSignal] = useState(200);
  const offset = 100;
  const beta = mSignal / (mSignal + uSignal + offset);

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-stone-950">Beta value calculator</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">Use beta = M / (M + U + offset) as an interpretation aid, not as a final biological claim.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          Methylated signal
          <input type="number" min="0" value={mSignal} onChange={(event) => setMSignal(Math.max(0, Number(event.target.value)))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3" />
        </label>
        <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
          Unmethylated signal
          <input type="number" min="0" value={uSignal} onChange={(event) => setUSignal(Math.max(0, Number(event.target.value)))} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3" />
        </label>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.55fr_1.45fr]">
        <div className="rounded-2xl bg-stone-950 p-5 text-white">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-300">Beta</div>
          <div className="mt-1 text-4xl font-black">{Number.isFinite(beta) ? beta.toFixed(3) : "0.000"}</div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-white" style={{ width: `${Math.max(0, Math.min(100, beta * 100))}%` }} />
          </div>
        </div>
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm font-bold leading-7 text-emerald-950">{betaMeaning(beta)}</p>
      </div>
    </article>
  );
}

function BisulfiteCheckpoint() {
  const [choice, setChoice] = useState(null);
  const options = [
    "Methylated C converts to T; unmethylated C stays C.",
    "Unmethylated C converts and is read as T; methylated C remains protected.",
    "Both methylated and unmethylated C are deleted.",
  ];
  const answer = 1;

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-stone-950">Bisulfite checkpoint</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">Pick the statement that preserves the methylation logic.</p>
      <div className="mt-5 grid gap-2">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => setChoice(index)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${choice === index ? (index === answer ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"}`}
          >
            {option}
          </button>
        ))}
      </div>
      {choice !== null ? <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950">Exam cue: methylation survives bisulfite because methylated cytosines are protected from conversion.</p> : null}
    </article>
  );
}

function InfiniumSorter() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => infiniumItems.filter((item, index) => answers[index] && (answers[index] === item.answer || item.answer === "Both")).length, [answers]);

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm lg:col-span-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-black text-stone-950">Infinium I/II sorter</h3>
        <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{score}/{infiniumItems.length}</div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {infiniumItems.map((item, index) => {
          const selected = answers[index];
          const correct = selected && (selected === item.answer || item.answer === "Both");
          return (
            <div key={item.text} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-sm font-black leading-6 text-stone-950">{item.text}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Infinium I", "Infinium II"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option }))}
                    className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${selected === option ? (correct ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-red-300 bg-red-50 text-red-800") : "border-stone-200 bg-white text-stone-600 hover:border-red-200"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selected ? <p className="mt-3 text-xs font-bold leading-5 text-stone-600">{item.why}</p> : null}
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
      <SectionTitle eyebrow="Guided interaction" title="Turn methylation chemistry into data logic">
        Keep the chain intact: bisulfite conversion creates the C/T readout, Infinium chemistry measures it, beta values summarize it, and normalization protects interpretation.
      </SectionTitle>
      <div className="grid gap-5 lg:grid-cols-2">
        <BetaCalculator />
        <BisulfiteCheckpoint />
        <InfiniumSorter />
      </div>
    </section>
  );
}

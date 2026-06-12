import React, { useState } from "react";

export function LessonInteractions() {
  const [validationGap, setValidationGap] = useState(12);
  const [api, setApi] = useState("sequential");
  const interpretation = validationGap > 20
    ? "Large gap: training is improving much faster than validation. Discuss overfitting controls."
    : validationGap > 8
      ? "Moderate gap: keep monitoring and compare with simpler/regularized runs."
      : "Small gap: curves look consistent, but final test evaluation is still needed.";

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <div className="mb-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Mini interaction</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Keras workflow decisions</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">Practice two decisions from the lecture: which API fits the architecture, and what validation curves suggest.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-sm font-black text-stone-700">Architecture shape</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["sequential", "functional"].map((option) => (
              <button key={option} type="button" onClick={() => setApi(option)} className={`rounded-full border px-4 py-2 text-sm font-black ${api === option ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-600"}`}>
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            {api === "sequential" ? "Use this for a simple stack: input, hidden layers, output." : "Use this when the model branches, merges, has skip connections or multiple inputs/outputs."}
          </p>
        </article>
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <label className="block text-sm font-black text-red-950">
            Training-validation gap: {validationGap}%
            <input type="range" min="0" max="35" value={validationGap} onChange={(event) => setValidationGap(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">{interpretation}</p>
        </article>
      </div>
    </section>
  );
}

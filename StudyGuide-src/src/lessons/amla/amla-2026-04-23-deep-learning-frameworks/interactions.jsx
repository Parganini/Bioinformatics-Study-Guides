import React, { useState } from "react";

export function LessonInteractions() {
  const [previousUnits, setPreviousUnits] = useState(3);
  const [nextUnits, setNextUnits] = useState(5);
  const [model, setModel] = useState("tree");
  const thetaColumns = previousUnits + 1;

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <div className="mb-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Mini interaction</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Dimensions and interpretability</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">
          Practice the two main moves from the lecture: compute a weight matrix dimension and decide what kind of explanation a model gives you.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-sm font-black text-stone-700">Theta(j) dimension</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-stone-700">
              Units in layer j: {previousUnits}
              <input type="range" min="1" max="8" value={previousUnits} onChange={(event) => setPreviousUnits(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
            </label>
            <label className="text-sm font-bold text-stone-700">
              Units in layer j+1: {nextUnits}
              <input type="range" min="1" max="8" value={nextUnits} onChange={(event) => setNextUnits(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
            </label>
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            Theta(j) is <strong>{nextUnits} x {thetaColumns}</strong>: {nextUnits} rows for the next layer, {previousUnits} + 1 columns because the previous layer includes the bias unit.
          </p>
        </article>
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <div className="text-sm font-black text-red-950">Which explanation do you get?</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["tree", "Decision tree"],
              ["network", "Neural network"],
            ].map(([key, label]) => (
              <button key={key} type="button" onClick={() => setModel(key)} className={`rounded-full border px-4 py-2 text-sm font-black ${model === key ? "border-red-300 bg-white text-red-800" : "border-red-100 bg-red-50 text-red-700"}`}>
                {label}
              </button>
            ))}
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            {model === "tree"
              ? "You can follow feature-threshold decisions from root to leaf. That is why the lecture calls trees white-box models, even though they can still overfit."
              : "You can inspect architecture and outputs, but hidden-layer features and weights are not usually a simple human rule. That is the black-box tension."}
          </p>
        </article>
      </div>
    </section>
  );
}

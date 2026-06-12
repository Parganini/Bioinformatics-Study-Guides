import React, { useState } from "react";

function BoundaryCard({ activation, width, features }) {
  const linear = activation === "linear";
  const rich = width > 4;
  const engineered = features.includes("x^2");
  const verdict = linear && !engineered
    ? "Mostly linear: expect failure on circular/XOR-like separation."
    : engineered
      ? "Feature-aware: a simpler model can solve more because the representation encodes curvature."
      : rich
        ? "High capacity: likely flexible, but inspect for over-specialized boundaries."
        : "Moderate capacity: can work, but initialization and activation choice matter more.";

  return (
    <div className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Boundary intuition</div>
      <p className="mt-3 text-xl font-black leading-8 text-red-950">{verdict}</p>
    </div>
  );
}

export function LessonInteractions() {
  const [activation, setActivation] = useState("relu");
  const [width, setWidth] = useState(3);
  const [features, setFeatures] = useState(["x1", "x2"]);

  const toggleFeature = (feature) => {
    setFeatures((current) => current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]);
  };

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <div className="mb-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Mini interaction</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Predict the playground behavior</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">Use this as a quick rehearsal before opening the real demo: choose settings and explain the expected boundary.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Activation
            <select value={activation} onChange={(event) => setActivation(event.target.value)} className="mt-3 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 font-black outline-none">
              <option value="relu">ReLU</option>
              <option value="tanh">tanh</option>
              <option value="linear">linear</option>
            </select>
          </label>
          <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-black text-stone-700">
            Neurons per hidden layer: {width}
            <input type="range" min="1" max="8" value={width} onChange={(event) => setWidth(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-sm font-black text-stone-700">Input features</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["x1", "x2", "x^2"].map((feature) => (
                <button key={feature} type="button" onClick={() => toggleFeature(feature)} className={`rounded-full border px-4 py-2 text-sm font-black ${features.includes(feature) ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-600"}`}>
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
        <BoundaryCard activation={activation} width={width} features={features} />
      </div>
    </section>
  );
}

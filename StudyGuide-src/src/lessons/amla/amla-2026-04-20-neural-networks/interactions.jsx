import React, { useState } from "react";

const metricCases = {
  training: {
    label: "fit() without validation",
    answer: "Training metrics",
    explanation: "If you do not pass validation data or validation_split, the logged loss/accuracy come from the training data.",
  },
  validation: {
    label: "fit(validation_split=0.2)",
    answer: "Training + validation metrics",
    explanation: "Keras still logs training metrics, but adds val_loss and val_accuracy for the held-out validation fraction.",
  },
  test: {
    label: "evaluate(test_images, test_labels)",
    answer: "Final test metrics",
    explanation: "Evaluate is the final held-out check after model choices are fixed.",
  },
};

export function LessonInteractions() {
  const [metricCase, setMetricCase] = useState("training");
  const [fitCount, setFitCount] = useState(1);
  const selected = metricCases[metricCase];

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <div className="mb-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Mini interaction</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Where did this metric come from?</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">
          The 20 April lecture repeatedly separates training logs, validation monitoring and final test evaluation. Practice that distinction here.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-sm font-black text-stone-700">Keras call</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.entries(metricCases).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMetricCase(key)}
                className={`rounded-full border px-4 py-2 text-sm font-black ${metricCase === key ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-600"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white p-4">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{selected.answer}</div>
            <p className="mt-2 text-sm font-bold leading-7 text-stone-700">{selected.explanation}</p>
          </div>
        </article>
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <label className="block text-sm font-black text-red-950">
            Number of consecutive .fit(epochs=10) calls: {fitCount}
            <input type="range" min="1" max="5" value={fitCount} onChange={(event) => setFitCount(Number(event.target.value))} className="mt-3 w-full accent-red-700" />
          </label>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            Same model, no rebuild: this behaves like continuing training to about {fitCount * 10} epochs. To compare fresh runs, rebuild or reinitialize the model first.
          </p>
        </article>
      </div>
    </section>
  );
}

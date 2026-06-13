import React, { useMemo, useState } from "react";

const approaches = {
  regression: {
    label: "Counting by regression",
    output: "One scalar count per image.",
    annotation: "Image-level count labels.",
    strength: "Simpler target and lower annotation cost.",
    risk: "Weak localization and weaker interpretability.",
  },
  detection: {
    label: "Counting by detection",
    output: "Points or bounding boxes for each object.",
    annotation: "Object-level localization labels.",
    strength: "Count comes with a direct object-level explanation.",
    risk: "Crowded regions and overlapping objects are harder.",
  },
  segmentation: {
    label: "Counting by segmentation",
    output: "Pixel-wise mask, then connected objects are counted.",
    annotation: "Pixel-wise masks.",
    strength: "Finest localization and strong fit for cell contours.",
    risk: "Heavy labels, class imbalance and touching objects.",
  },
  thresholding: {
    label: "Thresholding baseline",
    output: "Rule-based binary mask from pixel intensities.",
    annotation: "Ground-truth masks for evaluation/tuning.",
    strength: "Simple, interpretable comparison point.",
    risk: "Sensitive to brightness, artifacts and post-processing choices.",
  },
};

const scenarios = [
  {
    prompt: "You only have the total number of apples per image and need a quick first model.",
    best: "regression",
  },
  {
    prompt: "The report must show which cells were counted, but boxes are sufficient.",
    best: "detection",
  },
  {
    prompt: "The object boundary matters because cells touch and shape affects the count.",
    best: "segmentation",
  },
  {
    prompt: "Before training c-ResUNet, you need a simple non-ML comparison.",
    best: "thresholding",
  },
];

const metricHints = [
  {
    metric: "Precision",
    question: "What goes wrong when precision is low?",
    answer: "The method predicts too many objects that are not true cells.",
  },
  {
    metric: "Recall",
    question: "What goes wrong when recall is low?",
    answer: "The method misses true cells.",
  },
  {
    metric: "Count error",
    question: "Why inspect it together with masks?",
    answer: "A similar count can hide wrong objects, merged cells or split cells.",
  },
  {
    metric: "Dice / overlap",
    question: "Why is it useful for segmentation?",
    answer: "It evaluates mask overlap and is less fooled by background dominance than raw pixel accuracy.",
  },
];

export function LessonInteractions() {
  const [approachKey, setApproachKey] = useState("segmentation");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [metricIndex, setMetricIndex] = useState(0);
  const approach = approaches[approachKey];
  const scenario = scenarios[scenarioIndex];
  const bestApproach = useMemo(() => approaches[scenario.best], [scenario.best]);
  const metric = metricHints[metricIndex];

  return (
    <section className="mt-10 rounded-3xl border border-cyan-100 bg-cyan-50/70 p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-800">Counting workflow check</p>
        <h3 className="mt-1 text-xl font-black text-stone-950">Pick the right output for the scientific question</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
          This class is mostly about matching the task, annotation budget and interpretation need before choosing the model.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-cyan-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(approaches).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setApproachKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  approachKey === key
                    ? "border-cyan-700 bg-cyan-700 text-white"
                    : "border-cyan-200 bg-white text-cyan-900 hover:border-cyan-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{approach.label}</h4>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Output: {approach.output}</p>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Labels: {approach.annotation}</p>
            <p className="mt-3 text-sm leading-6 text-stone-700">Strength: {approach.strength}</p>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
              Watch out: {approach.risk}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-cyan-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">Scenario check</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {scenarios.map((item, index) => (
                <button
                  key={item.prompt}
                  type="button"
                  onClick={() => setScenarioIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    scenarioIndex === index
                      ? "border-stone-950 bg-stone-950 text-white"
                      : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                  }`}
                >
                  Case {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold leading-6 text-stone-800">{scenario.prompt}</p>
              <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm font-black text-emerald-900">
                Best match: {bestApproach.label}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">Metric intuition</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {metricHints.map((item, index) => (
                <button
                  key={item.metric}
                  type="button"
                  onClick={() => setMetricIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    metricIndex === index
                      ? "border-cyan-700 bg-cyan-700 text-white"
                      : "border-cyan-200 bg-white text-cyan-900 hover:border-cyan-400"
                  }`}
                >
                  {item.metric}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <h4 className="text-base font-black text-stone-950">{metric.question}</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{metric.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

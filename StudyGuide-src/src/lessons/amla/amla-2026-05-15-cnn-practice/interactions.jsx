import React, { useMemo, useState } from "react";

const methods = {
  voting: {
    label: "Voting",
    question: "How are learners made diverse?",
    answer: "Use different algorithms or differently configured predictors, then aggregate their outputs.",
    aggregation: "Hard vote over labels or soft average over probabilities.",
    risk: "If errors are correlated, the crowd repeats the same mistakes.",
  },
  bagging: {
    label: "Bagging / Pasting",
    question: "How are learners made diverse?",
    answer: "Use the same algorithm on different random subsets of the training data.",
    aggregation: "Majority vote for classification, average for regression.",
    risk: "Sampling choices and base learner instability matter; OOB logic applies only with replacement sampling.",
  },
  boosting: {
    label: "Boosting",
    question: "How are learners trained?",
    answer: "Sequentially. Each learner tries to correct what previous learners missed.",
    aggregation: "Add weighted/adaptive learners or sum residual-correcting predictors.",
    risk: "High performance, but sequential and prone to overfitting if pushed too far.",
  },
  stacking: {
    label: "Stacking",
    question: "How are predictions combined?",
    answer: "Train a meta-learner on the predictions produced by lower-level learners.",
    aggregation: "A blender learns the aggregation rule.",
    risk: "More flexible but more complex; needs careful hold-out logic.",
  },
};

const cases = [
  {
    prompt: "You want many decision trees trained independently on bootstrap samples and evaluated with OOB score.",
    best: "bagging",
  },
  {
    prompt: "You have logistic regression, SVC and random forest, and want a majority decision.",
    best: "voting",
  },
  {
    prompt: "You want later trees to focus on residual errors left by earlier trees.",
    best: "boosting",
  },
  {
    prompt: "You want another model to learn how to combine base-model predictions.",
    best: "stacking",
  },
];

export function LessonInteractions() {
  const [methodKey, setMethodKey] = useState("voting");
  const [caseIndex, setCaseIndex] = useState(0);
  const method = methods[methodKey];
  const scenario = cases[caseIndex];
  const scenarioMethod = useMemo(() => methods[scenario.best], [scenario.best]);

  return (
    <section className="mt-10 rounded-3xl border border-orange-100 bg-orange-50/70 p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-800">Ensemble sorter</p>
        <h3 className="mt-1 text-xl font-black text-stone-950">Which ensemble logic are you using?</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
          Keep the four ensemble families separate by asking how the learners are created, trained and combined.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-orange-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(methods).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMethodKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  methodKey === key
                    ? "border-orange-700 bg-orange-700 text-white"
                    : "border-orange-200 bg-white text-orange-900 hover:border-orange-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{method.label}</h4>
            <p className="mt-2 text-sm font-bold text-stone-700">{method.question}</p>
            <p className="mt-2 text-sm leading-6 text-stone-700">{method.answer}</p>
            <p className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold text-stone-900">
              Aggregation: {method.aggregation}
            </p>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
              Watch out: {method.risk}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Scenario check</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {cases.map((item, index) => (
              <button
                key={item.prompt}
                type="button"
                onClick={() => setCaseIndex(index)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  caseIndex === index
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
              Best match: {scenarioMethod.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

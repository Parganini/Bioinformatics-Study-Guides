import React, { useMemo, useState } from "react";

const methods = {
  coefficient: {
    label: "Coefficient",
    kind: "Interpretability",
    scope: "Global under the fitted model.",
    use: "Use when the model is simple enough and the coefficient scale is understood.",
    caution: "For logistic regression, coefficients affect log-odds, not raw probability.",
  },
  featureImportance: {
    label: "Feature importance",
    kind: "Post-hoc/global summary",
    scope: "Mostly global.",
    use: "Use to rank features and debug broad model behavior.",
    caution: "Correlated features and interactions can distort rankings.",
  },
  shap: {
    label: "SHAP",
    kind: "Post-hoc explainability",
    scope: "Local by construction; global by aggregation.",
    use: "Use when feature attributions need stronger theoretical grounding or global summaries.",
    caution: "Can be computationally expensive and still does not prove causality.",
  },
  lime: {
    label: "LIME",
    kind: "Post-hoc explainability",
    scope: "Local only.",
    use: "Use for quick explanations of one prediction with a simple local surrogate.",
    caution: "Can vary with perturbation sampling and neighborhood choices.",
  },
};

const scenarios = [
  {
    prompt: "You need to explain one surprising patient/sample prediction.",
    best: "shap",
    answer: "Use a local explanation such as SHAP or LIME; SHAP is the stronger default if available.",
  },
  {
    prompt: "You want a broad ranking of which features the model tends to use across the dataset.",
    best: "featureImportance",
    answer: "Use global feature importance or aggregate SHAP values, then discuss limitations.",
  },
  {
    prompt: "You trained a logistic regression and want to describe direction of association.",
    best: "coefficient",
    answer: "Use coefficients, but state the model scale and assumptions.",
  },
  {
    prompt: "You need a fast model-agnostic local explanation and accept approximate stability.",
    best: "lime",
    answer: "Use LIME and report it as a local surrogate, not a global model explanation.",
  },
];

const claims = [
  {
    claim: "This feature has the largest SHAP value, so it causes the disease.",
    verdict: "Unsafe",
    reason: "SHAP explains the model's prediction, not causal biology.",
  },
  {
    claim: "This local LIME result explains this observation's neighborhood.",
    verdict: "Reasonable",
    reason: "LIME is designed as a local approximation around one case.",
  },
  {
    claim: "The model has 96% accuracy, so no explanation is needed.",
    verdict: "Unsafe",
    reason: "High metrics can hide shortcuts, bias or subgroup failures.",
  },
  {
    claim: "I averaged local SHAP values to obtain a global summary.",
    verdict: "Reasonable",
    reason: "SHAP is local first, but aggregation can provide global insight.",
  },
];

export function LessonInteractions() {
  const [methodKey, setMethodKey] = useState("shap");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [claimIndex, setClaimIndex] = useState(0);
  const method = methods[methodKey];
  const scenario = scenarios[scenarioIndex];
  const selectedScenarioMethod = useMemo(() => methods[scenario.best], [scenario.best]);
  const claim = claims[claimIndex];

  return (
    <section className="mt-10 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-800">XAI method sorter</p>
        <h3 className="mt-1 text-xl font-black text-stone-950">Choose the explanation that matches the question</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
          The main exam/project trap is mixing local, global, intrinsic, post-hoc and causal language.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-indigo-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(methods).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMethodKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  methodKey === key
                    ? "border-indigo-700 bg-indigo-700 text-white"
                    : "border-indigo-200 bg-white text-indigo-900 hover:border-indigo-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{method.label}</h4>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Type: {method.kind}</p>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Scope: {method.scope}</p>
            <p className="mt-3 text-sm leading-6 text-stone-700">Use: {method.use}</p>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
              Caution: {method.caution}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-indigo-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-800">Scenario check</p>
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
                Best match: {selectedScenarioMethod.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{scenario.answer}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-800">Claim safety</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {claims.map((item, index) => (
                <button
                  key={item.claim}
                  type="button"
                  onClick={() => setClaimIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    claimIndex === index
                      ? "border-indigo-700 bg-indigo-700 text-white"
                      : "border-indigo-200 bg-white text-indigo-900 hover:border-indigo-400"
                  }`}
                >
                  Claim {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold leading-6 text-stone-800">{claim.claim}</p>
              <p className={`mt-3 rounded-xl p-3 text-sm font-black ${
                claim.verdict === "Reasonable" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"
              }`}>
                {claim.verdict}: {claim.reason}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";

const tools = {
  ae: {
    label: "Autoencoder",
    use: "Learn a compact representation by reconstructing the input.",
    inputTarget: "Input: x. Target: x, or clean x for denoising.",
    knobs: ["code size", "encoder/decoder depth", "loss", "noise", "regularization"],
    warning: "Good reconstruction can still be trivial if the bottleneck is too weak or absent.",
  },
  svm: {
    label: "SVM",
    use: "Find a large-margin boundary for classification or a margin tube for regression.",
    inputTarget: "Input: features. Target: labels or regression values.",
    knobs: ["scaling", "C", "kernel", "degree/gamma", "epsilon for SVR"],
    warning: "Kernel SVC is powerful but can become slow with many training examples.",
  },
  pca: {
    label: "PCA",
    use: "Reduce dimensionality by projecting onto variance-preserving axes.",
    inputTarget: "Input: feature matrix. Target: none.",
    knobs: ["n_components", "variance threshold", "svd_solver"],
    warning: "Principal components are not original variables, so interpretation changes.",
  },
};

const scenarios = [
  {
    prompt: "You need to denoise corrupted MNIST-like images and you can generate noisy-clean pairs.",
    best: "ae",
    reason: "A denoising autoencoder directly trains noisy input to clean target reconstruction.",
  },
  {
    prompt: "You have a small dataset with a nonlinear decision boundary and want a strong classical baseline.",
    best: "svm",
    reason: "Kernel SVC is well suited for complex small/medium datasets when features are scaled.",
  },
  {
    prompt: "You have 784 features and want a compact representation preserving 95% variance before visualization or faster training.",
    best: "pca",
    reason: "PCA gives a variance-controlled projection and exposes explained variance ratios.",
  },
];

export function LessonInteractions() {
  const [toolKey, setToolKey] = useState("ae");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const tool = tools[toolKey];
  const scenario = scenarios[scenarioIndex];
  const scenarioTool = useMemo(() => tools[scenario.best], [scenario.best]);

  return (
    <section className="mt-10 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-5 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-800">Model choice checkpoint</p>
          <h3 className="mt-1 text-xl font-black text-stone-950">AE, SVM or PCA?</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
            This lecture jumps across tools. Use this checkpoint to keep the objective, target and risks separate.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-indigo-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(tools).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setToolKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  toolKey === key
                    ? "border-indigo-700 bg-indigo-700 text-white"
                    : "border-indigo-200 bg-white text-indigo-900 hover:border-indigo-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{tool.label}</h4>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{tool.use}</p>
            <p className="mt-3 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">{tool.inputTarget}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tool.knobs.map((knob) => (
                <span key={knob} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-800">
                  {knob}
                </span>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
              Watch out: {tool.warning}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-800">Scenario sorter</p>
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
              Best fit: {scenarioTool.label}
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{scenario.reason}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";

const sequenceSetups = {
  seq2seq: {
    label: "Seq-to-seq",
    input: "A sequence.",
    output: "A sequence.",
    example: "Time-series forecasting where each step predicts a shifted future step.",
    caution: "Training may be hard for long sequences; gradients travel through time.",
  },
  seq2vec: {
    label: "Seq-to-vector",
    input: "A sequence.",
    output: "One vector or score.",
    example: "Sentiment score from a review or class label from a document.",
    caution: "The final state must summarize enough of the sequence.",
  },
  vec2seq: {
    label: "Vector-to-seq",
    input: "One vector.",
    output: "A sequence.",
    example: "Image captioning after an image is encoded into a vector.",
    caution: "The vector must contain enough information to generate the sequence.",
  },
  encoderDecoder: {
    label: "Encoder-decoder",
    input: "A sequence encoded into a vector/state.",
    output: "A decoded sequence.",
    example: "Translation after reading the whole source sentence.",
    caution: "A bottleneck can lose information, especially for long sequences.",
  },
};

const projectChecks = [
  {
    prompt: "The report starts directly with a neural network and no data exploration.",
    verdict: "Weak",
    fix: "Add problem framing, EDA, visualizations and a baseline before the advanced model.",
  },
  {
    prompt: "A student uses an LLM to debug code and discloses it, but validates the analysis manually.",
    verdict: "Acceptable",
    fix: "Keep the disclosure and ensure every method/result can be explained.",
  },
  {
    prompt: "The model has strong accuracy but no baseline, no error analysis and no interpretation.",
    verdict: "Weak",
    fix: "Compare against simpler models, inspect failures and explain what the metric means.",
  },
  {
    prompt: "A sequence model is chosen because order matters and baselines are included.",
    verdict: "Acceptable",
    fix: "Also discuss sequence length, memory limits and uncertainty if forecasting.",
  },
];

const advancedTopics = [
  {
    name: "SimpleRNN",
    when: "Short sequences where a simple state may be enough.",
    risk: "Short memory and unstable gradients on long sequences.",
  },
  {
    name: "LSTM / GRU",
    when: "Sequences where longer dependencies matter.",
    risk: "Still limited on very long contexts; training can be heavier.",
  },
  {
    name: "Transformer / LLM",
    when: "Text/token sequences and large-context language tasks.",
    risk: "Compute, validation, hallucination and fast-moving tooling.",
  },
  {
    name: "GAN / VAE",
    when: "Generating or augmenting plausible data samples.",
    risk: "Synthetic data can be misleading without careful validation.",
  },
];

export function LessonInteractions() {
  const [setupKey, setSetupKey] = useState("seq2vec");
  const [projectIndex, setProjectIndex] = useState(0);
  const [topicIndex, setTopicIndex] = useState(0);
  const setup = sequenceSetups[setupKey];
  const project = projectChecks[projectIndex];
  const topic = useMemo(() => advancedTopics[topicIndex], [topicIndex]);

  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-700">Final lesson sorter</p>
        <h3 className="mt-1 text-xl font-black text-stone-950">Map the data, then justify the method</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
          This final class is easier to study if you keep sequence shape, advanced method and project justification separate.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(sequenceSetups).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSetupKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  setupKey === key
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{setup.label}</h4>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Input: {setup.input}</p>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">Output: {setup.output}</p>
            <p className="mt-3 text-sm leading-6 text-stone-700">Example: {setup.example}</p>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
              Watch out: {setup.caution}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">Project sanity check</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {projectChecks.map((item, index) => (
                <button
                  key={item.prompt}
                  type="button"
                  onClick={() => setProjectIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    projectIndex === index
                      ? "border-stone-950 bg-stone-950 text-white"
                      : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                  }`}
                >
                  Case {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold leading-6 text-stone-800">{project.prompt}</p>
              <p className={`mt-3 rounded-xl p-3 text-sm font-black ${
                project.verdict === "Acceptable" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"
              }`}>
                {project.verdict}: {project.fix}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">Advanced method fit</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {advancedTopics.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setTopicIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    topicIndex === index
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <h4 className="text-base font-black text-stone-950">{topic.name}</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">Use when: {topic.when}</p>
              <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
                Risk: {topic.risk}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";

const scenarios = {
  sameConv: {
    label: "3x3 conv, same padding",
    input: "32 x 32 x 3",
    output: "32 x 32 x 16",
    why: "Same padding keeps height and width; the 16 filters become the output depth.",
  },
  validConv: {
    label: "3x3 conv, valid padding",
    input: "32 x 32 x 3",
    output: "30 x 30 x 16",
    why: "Without padding, a 3x3 kernel cannot be centered on border pixels, so spatial size shrinks.",
  },
  maxPool: {
    label: "2x2 max pooling, stride 2",
    input: "32 x 32 x 16",
    output: "16 x 16 x 16",
    why: "Pooling downsamples each feature map independently, so height and width halve but depth remains 16.",
  },
  flatten: {
    label: "Flatten before dense classifier",
    input: "16 x 16 x 32",
    output: "8192 values",
    why: "Flattening rearranges the final 3D volume into one vector: 16 * 16 * 32 = 8192.",
  },
};

const conceptCards = [
  {
    title: "Stride",
    question: "What changes first?",
    answer: "The number of spatial positions visited by the filter.",
    exam: "Bigger stride usually means a smaller feature map.",
  },
  {
    title: "Padding",
    question: "What problem does it solve?",
    answer: "It lets border pixels participate more fairly and controls shrinking.",
    exam: "Same padding preserves spatial size when stride is 1.",
  },
  {
    title: "Pooling",
    question: "What is its job?",
    answer: "It deliberately compresses feature maps after useful activations exist.",
    exam: "Pooling usually changes height/width, not depth.",
  },
  {
    title: "Filter count",
    question: "What does it define?",
    answer: "How many feature maps the convolutional layer outputs.",
    exam: "Output depth equals number of filters.",
  },
];

export function LessonInteractions() {
  const [scenarioKey, setScenarioKey] = useState("sameConv");
  const [activeConcept, setActiveConcept] = useState("Padding");
  const scenario = scenarios[scenarioKey];
  const concept = useMemo(
    () => conceptCards.find((item) => item.title === activeConcept) || conceptCards[0],
    [activeConcept],
  );

  return (
    <section className="rounded-3xl border border-cyan-100 bg-cyan-50/70 p-5 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-800">CNN shape checkpoint</p>
          <h3 className="mt-1 text-xl font-black text-stone-950">Can you predict the next tensor?</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
            Use this as a quick self-check while reviewing convolution, padding, pooling and flattening.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-cyan-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(scenarios).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setScenarioKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  scenarioKey === key
                    ? "border-cyan-700 bg-cyan-700 text-white"
                    : "border-cyan-200 bg-white text-cyan-900 hover:border-cyan-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Input</p>
              <p className="mt-2 text-lg font-black text-stone-950">{scenario.input}</p>
            </div>
            <div className="rounded-2xl bg-cyan-100 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Operation</p>
              <p className="mt-2 text-base font-black text-cyan-950">{scenario.label}</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Output</p>
              <p className="mt-2 text-lg font-black text-emerald-950">{scenario.output}</p>
            </div>
          </div>

          <p className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 p-3 text-sm font-semibold leading-6 text-cyan-950">
            {scenario.why}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">Concept sorter</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {conceptCards.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveConcept(item.title)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  activeConcept === item.title
                    ? "border-stone-950 bg-stone-950 text-white"
                    : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{concept.title}</h4>
            <p className="mt-2 text-sm font-bold text-stone-700">{concept.question}</p>
            <p className="mt-2 text-sm leading-6 text-stone-700">{concept.answer}</p>
            <p className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold text-stone-900">
              Exam memory: {concept.exam}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

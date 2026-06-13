import React, { useState } from "react";

const tensorCases = {
  vector: {
    label: "Tabular/vector batch",
    shape: "(samples, features)",
    note: "A batch of feature vectors is a 2D tensor.",
  },
  sequence: {
    label: "Sequence batch",
    shape: "(samples, timesteps, features)",
    note: "Sequence data adds an explicit time/order axis.",
  },
  image: {
    label: "Image batch",
    shape: "(samples, height, width, channels)",
    note: "TensorFlow commonly uses channels-last image tensors.",
  },
  video: {
    label: "Video batch",
    shape: "(samples, frames, height, width, channels)",
    note: "Video combines a time axis with image axes.",
  },
};

export function LessonInteractions() {
  const [trainingTerm, setTrainingTerm] = useState("bp");
  const [tensorCase, setTensorCase] = useState("image");
  const selected = tensorCases[tensorCase];

  return (
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <div className="mb-5">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Mini interaction</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">Training vocabulary and tensor shapes</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-stone-600">
          These are exactly the distinctions the professor flagged as fair game: GD versus BP, batch versus epoch, and tensor shape language.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
          <div className="text-sm font-black text-stone-700">Which process?</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["bp", "Backpropagation"],
              ["gd", "Gradient descent"],
              ["epoch", "Epoch"],
              ["batch", "Mini-batch"],
            ].map(([key, label]) => (
              <button key={key} type="button" onClick={() => setTrainingTerm(key)} className={`rounded-full border px-4 py-2 text-sm font-black ${trainingTerm === key ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-600"}`}>
                {label}
              </button>
            ))}
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            {trainingTerm === "bp" && "Backpropagation computes gradients by moving error information backward through the network."}
            {trainingTerm === "gd" && "Gradient descent or an optimizer uses gradients to update weights and biases."}
            {trainingTerm === "epoch" && "An epoch is one complete pass through the training set."}
            {trainingTerm === "batch" && "A mini-batch is the smaller chunk of training examples used for one update step."}
          </p>
        </article>
        <article className="rounded-[2rem] border border-red-100 bg-red-50 p-5">
          <div className="text-sm font-black text-red-950">Tensor shape</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.entries(tensorCases).map(([key, item]) => (
              <button key={key} type="button" onClick={() => setTensorCase(key)} className={`rounded-full border px-4 py-2 text-sm font-black ${tensorCase === key ? "border-red-300 bg-white text-red-800" : "border-red-100 bg-red-50 text-red-700"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-stone-700">
            <div className="font-black text-stone-950">{selected.shape}</div>
            <p className="mt-1">{selected.note}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";

const trainingPieces = {
  dataloaders: {
    label: "DataLoaders",
    role: "Read image/mask pairs, split train/validation data and apply transforms.",
    question: "What can go wrong?",
    answer: "If image and mask are misaligned after augmentation, the model learns corrupted supervision.",
  },
  learner: {
    label: "Learner",
    role: "Combines model, data, loss, optimizer, metrics and callbacks into a trainable object.",
    question: "Why use it?",
    answer: "It wraps PyTorch training while keeping the key choices explicit.",
  },
  loss: {
    label: "Loss",
    role: "Defines what training minimizes and how weights are updated.",
    question: "What can go wrong?",
    answer: "A loss dominated by background pixels can miss the rare cell signal.",
  },
  callbacks: {
    label: "Callbacks",
    role: "Modify training behavior through logging, early stopping, saving or learning-rate scheduling.",
    question: "What can go wrong?",
    answer: "Early stopping may stop too soon if the model has a long flat period before improving.",
  },
};

const decisions = [
  {
    prompt: "The model predicts probabilities per pixel, but the report needs a binary mask.",
    best: "Choose and justify a probability threshold; inspect how it changes masks and counts.",
  },
  {
    prompt: "The foreground cell pixels are rare compared with background.",
    best: "Consider weighted BCE, focal loss or Dice-style objectives instead of relying only on plain BCE.",
  },
  {
    prompt: "Training loss is similar between epochs, but validation Dice changes.",
    best: "Compare multiple metrics; loss alone may hide behavior relevant to segmentation quality.",
  },
  {
    prompt: "Predicted masks look plausible but merge neighboring cells.",
    best: "Use visual inspection and object-level/counting evaluation, not only aggregate mask metrics.",
  },
];

const lossCards = [
  {
    name: "BCE",
    fit: "Binary pixel classification.",
    caution: "Can be dominated by background pixels.",
  },
  {
    name: "Weighted BCE",
    fit: "Class imbalance.",
    caution: "Weights must be justified and can shift precision/recall behavior.",
  },
  {
    name: "Focal loss",
    fit: "Hard examples and many easy pixels.",
    caution: "Extra parameters decide how strongly hard cases are emphasized.",
  },
  {
    name: "Dice loss",
    fit: "Mask overlap and segmentation quality.",
    caution: "Do not confuse it with Dice coefficient direction.",
  },
];

export function LessonInteractions() {
  const [pieceKey, setPieceKey] = useState("dataloaders");
  const [decisionIndex, setDecisionIndex] = useState(0);
  const [lossIndex, setLossIndex] = useState(0);
  const piece = trainingPieces[pieceKey];
  const decision = decisions[decisionIndex];
  const loss = useMemo(() => lossCards[lossIndex], [lossIndex]);

  return (
    <section className="mt-10 rounded-3xl border border-violet-100 bg-violet-50/70 p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-800">Segmentation training check</p>
        <h3 className="mt-1 text-xl font-black text-stone-950">Keep model, data, loss and evaluation separate</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-700">
          The practical part is easier if you know which object controls which decision in the workflow.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-violet-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(trainingPieces).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setPieceKey(key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  pieceKey === key
                    ? "border-violet-700 bg-violet-700 text-white"
                    : "border-violet-200 bg-white text-violet-900 hover:border-violet-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 p-4">
            <h4 className="text-lg font-black text-stone-950">{piece.label}</h4>
            <p className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-stone-800">{piece.role}</p>
            <p className="mt-3 text-sm font-black text-stone-950">{piece.question}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{piece.answer}</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-violet-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-800">Decision rehearsal</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {decisions.map((item, index) => (
                <button
                  key={item.prompt}
                  type="button"
                  onClick={() => setDecisionIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    decisionIndex === index
                      ? "border-stone-950 bg-stone-950 text-white"
                      : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                  }`}
                >
                  Case {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold leading-6 text-stone-800">{decision.prompt}</p>
              <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm font-black text-emerald-900">
                Best response: {decision.best}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-800">Loss picker</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {lossCards.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setLossIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    lossIndex === index
                      ? "border-violet-700 bg-violet-700 text-white"
                      : "border-violet-200 bg-white text-violet-900 hover:border-violet-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
              <h4 className="text-base font-black text-stone-950">{loss.name}</h4>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">Good fit: {loss.fit}</p>
              <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-950">
                Caution: {loss.caution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

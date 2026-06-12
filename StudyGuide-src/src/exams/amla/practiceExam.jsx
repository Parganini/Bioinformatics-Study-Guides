import React, { useMemo, useState } from "react";

const QUESTIONS = [
  {
    id: "advanced-prereq",
    prompt: "Which expectation best matches AMLA after the Basic module?",
    options: [
      "Every Python and scikit-learn detail will be retaught from zero.",
      "Basic ML concepts are assumed, and the course adds neural networks plus more autonomous coding.",
      "Only theoretical proofs matter; notebooks are secondary.",
      "The project can ignore interpretation if the metric is high.",
    ],
    correct: 1,
    explanation: "The first lecture explicitly assumes Basic competence and raises the level of autonomy and interpretation.",
    tags: ["course setup", "study strategy"],
    difficulty: "easy",
  },
  {
    id: "perceptron-linear",
    prompt: "Why is a single perceptron limited on XOR-like data?",
    options: [
      "It has no weights.",
      "Its decision boundary is linear.",
      "It cannot use numeric inputs.",
      "It always outputs probabilities.",
    ],
    correct: 1,
    explanation: "A TLU/perceptron uses a weighted sum and threshold, creating a linear boundary.",
    tags: ["perceptron", "linear models"],
    difficulty: "easy",
  },
  {
    id: "bias-term",
    prompt: "A bias term in a neuron is most like which linear-model component?",
    options: ["The intercept", "The residual", "The p-value", "The validation split"],
    correct: 0,
    explanation: "The professor used the y = ax + b analogy: bias shifts the activation threshold.",
    tags: ["bias", "neuron"],
    difficulty: "easy",
  },
  {
    id: "linear-stack",
    prompt: "A network with many dense layers but only linear activations is best described as:",
    options: [
      "Always nonlinear because it has depth.",
      "Equivalent to a linear transformation unless the input representation is changed.",
      "A recurrent neural network.",
      "A model that cannot be trained with gradient descent.",
    ],
    correct: 1,
    explanation: "Compositions of linear transformations remain linear.",
    tags: ["activation", "nonlinearity"],
    difficulty: "medium",
  },
  {
    id: "relu-boundary",
    prompt: "In the playground demo, ReLU often produced polygon-like boundaries because:",
    options: [
      "ReLU combines piecewise linear responses.",
      "ReLU is a probability distribution.",
      "ReLU removes all weights from the network.",
      "ReLU forces the test loss to zero.",
    ],
    correct: 0,
    explanation: "ReLU is piecewise linear, so combinations of ReLU units can form piecewise/polygon-like boundaries.",
    tags: ["ReLU", "decision boundary"],
    difficulty: "medium",
  },
  {
    id: "domain-knowledge",
    prompt: "Adding squared input features solved a circular task quickly. What principle does this show?",
    options: [
      "Domain-informed representation can reduce the need for a larger architecture.",
      "Feature engineering is forbidden in deep learning.",
      "The model no longer needs labels.",
      "Squared features are always better for all tasks.",
    ],
    correct: 0,
    explanation: "A better representation can make the learning problem simpler.",
    tags: ["feature engineering", "capacity"],
    difficulty: "medium",
  },
  {
    id: "large-network-risk",
    prompt: "A large model has very low loss but a boundary that isolates individual points in odd regions. Best next step?",
    options: [
      "Trust it immediately because loss is low.",
      "Inspect data, errors and boundary behavior before claiming success.",
      "Remove the validation set.",
      "Switch to linear activation.",
    ],
    correct: 1,
    explanation: "The lecture emphasized that low metrics can hide subtle failure modes.",
    tags: ["overfitting", "diagnostics"],
    difficulty: "medium",
  },
  {
    id: "framework-sklearn",
    prompt: "In AMLA, scikit-learn remains useful mainly as:",
    options: [
      "A replacement for all deep-learning frameworks.",
      "A baseline/classical ML toolkit for comparison and familiar workflows.",
      "A GPU-only tensor compiler.",
      "A tool only for writing reports.",
    ],
    correct: 1,
    explanation: "The course builds on scikit-learn and uses it for baselines while adding Keras/TensorFlow.",
    tags: ["scikit-learn", "frameworks"],
    difficulty: "easy",
  },
  {
    id: "tensorflow-keras",
    prompt: "What is the relationship between TensorFlow and Keras in the course workflow?",
    options: [
      "Keras is the lower-level C++ engine under TensorFlow.",
      "Keras is used as a higher-level interface for building/training models, mainly on TensorFlow.",
      "TensorFlow is only for tree-based models.",
      "They cannot be used together.",
    ],
    correct: 1,
    explanation: "Keras hides much of the low-level TensorFlow machinery and is the course's main interface.",
    tags: ["TensorFlow", "Keras"],
    difficulty: "easy",
  },
  {
    id: "pytorch-use",
    prompt: "Why might a project choose PyTorch/Hugging Face instead of the course's default stack?",
    options: [
      "Because recent pretrained research models and examples may be easier to access there.",
      "Because PyTorch cannot train neural networks.",
      "Because Hugging Face is only for spreadsheets.",
      "Because TensorFlow has no optimizer support.",
    ],
    correct: 0,
    explanation: "The lecture described PyTorch and Hugging Face as strong ecosystems for research/pretrained models.",
    tags: ["PyTorch", "Hugging Face"],
    difficulty: "medium",
  },
  {
    id: "sequential-api",
    prompt: "Keras Sequential API is appropriate when:",
    options: [
      "The architecture is a single stack of layers.",
      "The model has multiple branches that merge.",
      "The model has two independent inputs.",
      "You do not know the input shape.",
    ],
    correct: 0,
    explanation: "Sequential is for simple one-path stacks.",
    tags: ["Keras", "Sequential"],
    difficulty: "easy",
  },
  {
    id: "functional-api",
    prompt: "Which case most strongly suggests Keras Functional API?",
    options: [
      "A two-layer dense classifier.",
      "A model with branching or multiple inputs.",
      "Any MNIST model.",
      "A model with exactly one output class.",
    ],
    correct: 1,
    explanation: "Functional API supports graph-like, branching architectures.",
    tags: ["Keras", "Functional API"],
    difficulty: "medium",
  },
  {
    id: "compile-fit",
    prompt: "Which ordering best matches the Keras workflow from L02?",
    options: [
      "fit -> compile -> define architecture -> evaluate",
      "define architecture -> compile -> fit -> evaluate",
      "evaluate -> fit -> compile -> define architecture",
      "compile -> evaluate -> fit -> define architecture",
    ],
    correct: 1,
    explanation: "Build the model, attach the training recipe, train, then evaluate.",
    tags: ["Keras workflow"],
    difficulty: "easy",
  },
  {
    id: "validation-split",
    prompt: "In model.fit, validation_split=0.1 means:",
    options: [
      "10% of training data is held out for validation metrics during training.",
      "10% of test data is used to update weights.",
      "The model uses only 10% of all data forever.",
      "The optimizer learning rate is set to 0.1.",
    ],
    correct: 0,
    explanation: "The lecture described validation_split as holding out part of the fit data for validation after each epoch.",
    tags: ["validation", "model.fit"],
    difficulty: "easy",
  },
  {
    id: "history-curves",
    prompt: "Training loss decreases while validation loss rises over epochs. What is the most defensible interpretation?",
    options: [
      "The model may be overfitting and needs diagnostic action.",
      "The model is definitely underfitting.",
      "Validation loss is never useful.",
      "This proves the test set will improve.",
    ],
    correct: 0,
    explanation: "Diverging train/validation curves are a common overfitting warning.",
    tags: ["history", "overfitting"],
    difficulty: "hard",
  },
];

function optionLabel(index) {
  return String.fromCharCode(65 + index);
}

function QuestionCard({ question, index, answer, setAnswer, showFeedback }) {
  const answered = answer !== undefined;
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">Q{index + 1}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{question.difficulty}</span>
        {question.tags.map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{tag}</span>)}
      </div>
      <h2 className="mt-4 text-xl font-black leading-8 text-stone-950">{question.prompt}</h2>
      <div className="mt-4 grid gap-2">
        {question.options.map((option, optionIndex) => {
          const selected = answer === optionIndex;
          const correct = optionIndex === question.correct;
          const showFeedback = answered && !locked;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setAnswer(optionIndex)}
              className={`rounded-2xl border p-3 text-left text-sm font-bold leading-6 transition ${showFeedback && correct ? "border-emerald-300 bg-emerald-50 text-emerald-950" : showFeedback && selected && !correct ? "border-red-300 bg-red-50 text-red-950" : selected ? "border-stone-900 bg-stone-950 text-white" : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"}`}
            >
              {optionLabel(optionIndex)}. {option}
            </button>
          );
        })}
      </div>
      {answered && showFeedback ? (
        <p className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-7 text-stone-700">
          Correct: {optionLabel(question.correct)}. {question.explanation}
        </p>
      ) : null}
    </article>
  );
}

export default function AMLAPracticeExamPage() {
  const [mode, setMode] = useState("practice");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => QUESTIONS.filter((question) => answers[question.id] === question.correct).length, [answers]);
  const showFeedback = mode === "practice" || submitted;
  const setAnswer = (questionId, value) => setAnswers((current) => ({ ...current, [questionId]: value }));

  const reset = (nextMode = mode) => {
    setMode(nextMode);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-sm font-black text-stone-800 transition hover:bg-stone-50">Back to AMLA dashboard</a>
          <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">AMLA practice exam</div>
          <a href="#question-bank" className="rounded-full bg-stone-950 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-red-800">Start</a>
        </div>
      </nav>

      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">Initial bank</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">AMLA Practice Exam</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">Fifteen multiple-choice questions focused on the first two complete AMLA lessons. Practice mode gives immediate feedback; mock mode scores at the end.</p>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-800"><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Questions</div><div className="mt-2 text-3xl font-black">{QUESTIONS.length}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Current score</div><div className="mt-2 text-3xl font-black text-stone-950">{score}</div></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["practice", "mock"].map((option) => (
              <button key={option} type="button" onClick={() => reset(option)} className={`rounded-full border px-4 py-2 text-sm font-black ${mode === option ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700"}`}>
                {option === "practice" ? "Practice mode" : "Mock exam"}
              </button>
            ))}
          </div>
          {mode === "mock" ? <button type="button" onClick={() => setSubmitted(true)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-800">Submit mock</button> : null}
          {locked ? <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black leading-7 text-emerald-950">Final score: {score} / {QUESTIONS.length}</p> : null}
        </aside>
      </section>

      <section id="question-bank" className="mt-10 scroll-mt-28 grid gap-5">
        {QUESTIONS.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            setAnswer={(value) => setAnswer(question.id, value)}
            showFeedback={showFeedback}
          />
        ))}
      </section>
    </main>
  );
}

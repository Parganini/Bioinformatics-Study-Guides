import { buildSections } from "../shared/buildContent.js";

const deck = "3-MM-Theory.pdf";
const deckFolder = "03-mm-theory";
const title = "Probabilistic models for biological sequences";

export const lessonContent = {
  id: "lb1-03-mm-theory",
  extractionStatus: "real slide screenshots extracted from 3-MM-Theory.pdf; full deck covered",
  whyThisMatters: "Probabilistic models change the question from simple similarity to likelihood: how plausible is a sequence under a model, how should the model be trained, and how does Bayes theorem connect evidence to inference?",
  objectives: [
    "Define probabilistic models for biological sequences.",
    "Separate generative and associative model viewpoints.",
    "Explain trainable systems and model parameters.",
    "Contrast P(sequence | model) with P(model | sequence).",
    "Use Bayes theorem as the conceptual bridge to HMMs.",
  ],
  coreConcepts: [
    { title: "Generative models", body: "A model can describe how sequences are produced and assign probabilities to possible observations.", keywords: ["generation", "likelihood", "sequence"] },
    { title: "Associative models", body: "A model can also support classification or association between sequence evidence and biological labels.", keywords: ["association", "classification", "labels"] },
    { title: "Bayesian bridge", body: "Likelihood and posterior probability answer different questions and are connected by Bayes theorem.", keywords: ["Bayes", "posterior", "prior"] },
  ],
  routeSteps: [
    { title: "Start with the random variable", body: "Ask what is observed and what the model assigns probability to." },
    { title: "Separate conditionals", body: "Write P(sequence | model) and P(model | sequence) as different biological questions." },
    { title: "Carry it into HMMs", body: "Hidden paths and profile models use the same probability discipline." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "Likelihood, posterior probability, priors and evidence are different pieces of the inference.",
    trap: "Do not swap P(sequence | model) and P(model | sequence).",
    prompt: "Which probability question is this slide answering?",
    sections: [
      { start: 1, end: 5, title: "Model-based sequence analysis", intro: "The opening slides set up why biological sequences can be treated with probabilistic models.", teaching: "Study interpretation: the model makes assumptions explicit, which is what lets you reason about uncertainty." },
      { start: 6, end: 12, title: "Generative, associative and trainable models", intro: "This block distinguishes ways to define a model and why parameters must be estimated from examples.", teaching: "Study interpretation: trainable does not mean automatically reliable; the examples define what the model learns." },
      { start: 13, end: 20, title: "Likelihood and posterior reasoning", intro: "The deck builds the contrast between sequence probability under a model and model probability given the sequence.", teaching: "Study interpretation: this is the conceptual checkpoint before HMM algorithms." },
      { start: 21, end: 29, title: "Bayes theorem and biological inference", intro: "The closing slides make Bayes theorem the bridge from model scores to inference.", teaching: "Study interpretation: Bayes updates belief with evidence, but priors and model assumptions still matter." },
    ],
  }),
  miniLabs: [
    { title: "Conditional probability sorter", goal: "Practice keeping the two probability questions separate.", steps: ["Write one biological question for P(sequence | model).", "Write a different question for P(model | sequence).", "Explain what extra information Bayes theorem needs."], output: "Two conditional-probability interpretations.", check: "The likelihood question is not the posterior model-choice question.", trap: "Do not reverse the conditioning bar." },
    { title: "Training-data audit", goal: "Decide whether a model can be trusted.", steps: ["List what positive training examples should represent.", "List one bias that would damage the model.", "Write one validation check."], output: "A short training-data quality note.", check: "Trainable does not mean automatically reliable.", trap: "Do not ignore biased or tiny training sets." },
  ],
  checkpoints: [
    { question: "What is a probabilistic model for biological sequences?", answer: "It is a model that assigns probabilities to biological sequences or sequence-derived observations under explicit assumptions and parameters." },
    { question: "Why is Bayes theorem useful here?", answer: "It connects likelihood, prior belief and posterior model probability, helping distinguish evidence under a model from belief in a model." },
    { question: "What does trainable mean?", answer: "It means model parameters can be estimated from examples, so data quality and representativeness matter." },
  ],
  modelAnswer: {
    question: "Explain P(sequence | model) vs P(model | sequence).",
    answer: "P(sequence | model) is the likelihood: how probable the observed sequence is if a particular model generated it. P(model | sequence) is a posterior model question: how probable the model is after observing the sequence. They are not interchangeable; Bayes theorem connects them using priors and evidence normalization.",
  },
  sourceNotes: ["Primary source: 3-MM-Theory.pdf in the Capriotti LB1 Drive folder.", "All slide ranges in the deck are represented with real extracted screenshots.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};

import { buildSections } from "../shared/buildContent.js";

const deck = "3-MM-Theory.pdf";
const deckFolder = "03-mm-theory";
const title = "Probabilistic models for biological sequences";

export const lessonContent = {
  id: "lb1-03-mm-theory",
  extractionStatus: "real slide screenshots extracted from all 29 slides of 3-MM-Theory.pdf",
  whyThisMatters:
    "This lecture is the probability bridge between alignment scores and Hidden Markov Models. Capriotti first asks what it means for a model to assign probability to a sequence, then shows why likelihood is not the same as class membership, how Bayes theorem fixes the question, how Markov models generate sequences, and why hidden state paths naturally lead to HMMs.",
  objectives: [
    "Define a probabilistic model for biological sequences using generative and associative viewpoints.",
    "Explain how a trained family model can score a new sequence as similar to that family.",
    "Distinguish P(sequence | model) from P(model | sequence) and explain why Bayes theorem is needed.",
    "Use model comparison and null models to avoid relying on raw likelihood alone.",
    "Compute the probability of a sequence under a first-order Markov model conceptually.",
    "Explain maximum likelihood training for transition probabilities.",
    "Recognize the hidden-state idea that prepares the next lesson on HMMs.",
  ],
  coreConcepts: [
    {
      title: "Generative model",
      body: "A model can be seen as an object that generates sequences with different probabilities. The probability distribution over sequence space defines what the model considers typical.",
      keywords: ["generative", "sequence space", "likelihood"],
    },
    {
      title: "Associative model",
      body: "The same model can be used operationally: given a sequence, compute the probability associated with that sequence under the model.",
      keywords: ["associative", "score", "probability"],
    },
    {
      title: "Trainable system",
      body: "A useful biological model estimates its parameters from known examples, such as known globins used to represent the globin family.",
      keywords: ["training", "examples", "parameters"],
    },
    {
      title: "Likelihood vs posterior",
      body: "P(s | M) asks how likely the sequence is if the model generated it. P(M | s) asks whether the model/class is likely after observing the sequence.",
      keywords: ["likelihood", "posterior", "conditioning"],
    },
    {
      title: "Bayes theorem",
      body: "Bayes theorem connects likelihood, priors and evidence. In model comparison, the hard-to-estimate sequence probability can cancel when comparing two models.",
      keywords: ["Bayes", "priors", "model comparison"],
    },
    {
      title: "Null model",
      body: "A null model generates all possible sequences from background residue or letter abundances. Comparing against it turns a model likelihood into a relative score.",
      keywords: ["null model", "background", "log odds"],
    },
    {
      title: "Markov model",
      body: "A Markov model generates sequences where the next state depends only on the previous state. Transition probabilities leaving each state must sum to one.",
      keywords: ["Markov", "transition", "normalization"],
    },
    {
      title: "Maximum likelihood training",
      body: "For a Markov model, transition parameters can be estimated from data by counting transitions and normalizing outgoing counts.",
      keywords: ["maximum likelihood", "counts", "training"],
    },
    {
      title: "Hidden state path",
      body: "The dice and bioinformatics examples introduce two processes: a hidden state path and observed symbols emitted from those states. That is the conceptual doorway to HMMs.",
      keywords: ["hidden path", "emissions", "HMM"],
    },
  ],
  routeSteps: [
    {
      title: "Name the probability question",
      body: "Before using any formula, decide whether the slide asks for P(s | M), P(M | s), a model ratio or a score against a null model.",
    },
    {
      title: "Track the generator",
      body: "For Markov examples, follow the path BEGIN -> first symbol -> next symbol -> END and multiply the relevant transition probabilities.",
    },
    {
      title: "Connect training to counts",
      body: "When parameters are unknown, ask what transitions or emissions can be counted from the training data and how normalization is enforced.",
    },
    {
      title: "Prepare for hidden paths",
      body: "The final dice examples are not a side story: they introduce observed sequence, hidden path, transitions and emissions.",
    },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "Always state which conditional probability you are using and what assumptions make the model possible.",
    trap: "Do not swap P(sequence | model) with P(model | sequence), and do not ignore priors, background models or normalization constraints.",
    prompt: "Which probability question, model assumption or training step is this slide teaching?",
    sections: [
      {
        start: 1,
        end: 5,
        title: "From sequence space to trained family models",
        intro:
          "The opening slides define probabilistic models as distributions over sequence space, then show the generative and associative views using globins as the family example.",
        teaching:
          "Study interpretation: a model is not just a label for a family; it is a probability distribution that can assign a new sequence a family-specific plausibility score.",
        remember: "A trained model turns known examples into a representation of what the family looks like in sequence space.",
        trap: "Do not say a high P(s | M) automatically proves class membership. At this point it is only likelihood under one model.",
        prompt: "How can a globin-family model be used as a similarity measure for a new sequence?",
      },
      {
        start: 6,
        end: 9,
        title: "Which probability do we actually need?",
        intro:
          "These slides make the key conceptual move: the model gives P(s | M), but the biological question is often P(M | s). Bayes theorem, model comparison and null models enter to bridge that gap.",
        teaching:
          "Study interpretation: this is one of the most exam-relevant parts of the deck. The professor is warning that likelihood and posterior class probability answer different questions.",
        remember: "Bayes theorem converts evidence under a model into belief about the model only after priors and evidence are accounted for.",
        trap: "Do not treat P(s) as easy to estimate over all sequence space; that is why model ratios and null models are useful.",
        prompt: "Why can comparing two models remove the difficult P(s) term?",
      },
      {
        start: 10,
        end: 15,
        title: "Simple Markov models and sequence probability",
        intro:
          "The weather example introduces first-order dependence: the next symbol depends only on the previous symbol. The deck then formalizes states, transition probabilities, BEGIN/END probabilities and sequence likelihood.",
        teaching:
          "Study interpretation: the weather model is a low-stakes example for the same logic later used in biological sequence models.",
        remember: "A first-order Markov sequence probability is the product of the BEGIN probability, each transition probability and the END probability.",
        trap: "Do not forget the normalization rule: all outgoing probabilities from a state must sum to one.",
        prompt: "How would you calculate P(CSSSCFS | Winter) from the transition table?",
      },
      {
        start: 16,
        end: 17,
        title: "CpG islands as biological model comparison",
        intro:
          "The CpG island slides transfer the Markov/Bayes logic to genomics: compare a CpG model and a non-CpG model and compute posterior probability under the assumption that these are the possible classes.",
        teaching:
          "Study interpretation: this is the biological payoff of the weather example. A sequence can be evaluated by competing probabilistic models.",
        remember: "CpG inference compares P(s | CpG) and P(s | not CpG), weighted by their priors.",
        trap: "Do not ignore the assumption that the model set is complete: CpG and not-CpG are treated as the alternatives.",
        prompt: "What terms appear in the denominator of P(CpG | s), and why?",
      },
      {
        start: 18,
        end: 21,
        title: "Training parameters by maximum likelihood",
        intro:
          "This section explains how model parameters are estimated from known data. Maximum likelihood chooses parameters that maximize the probability of the training data, while MAP adds a parameter prior.",
        teaching:
          "Study interpretation: training is not magic; for Markov transitions it reduces to counting transitions and normalizing them under the probability constraints.",
        remember: "For transition aik, maximum-likelihood estimation is the count of i->k transitions divided by all outgoing transitions from i.",
        trap: "Do not maximize each probability independently; the outgoing probabilities from a state are constrained to sum to one.",
        prompt: "Why do transition counts naturally produce maximum-likelihood parameters for a Markov model?",
      },
      {
        start: 22,
        end: 26,
        title: "Dice example: hidden state plus observed symbols",
        intro:
          "The loaded-die example introduces two processes: choosing hidden dice states R/L and emitting observed numbers from those states. The hidden dice path explains why a sequence of observations can contain unobserved structure.",
        teaching:
          "Study interpretation: this is the moment where the course quietly enters HMM territory: hidden path, transitions between hidden states and emissions of observable symbols.",
        remember: "The observations are visible, but the state path that generated them is hidden.",
        trap: "Do not confuse the emitted number with the hidden state. A 6 is evidence for the loaded die, but it is not itself the loaded die.",
        prompt: "In the casino example, what are the hidden states and what are the emitted symbols?",
      },
      {
        start: 27,
        end: 29,
        title: "Applications and final Markov-training exercise",
        intro:
          "The final slides list examples where hidden variables are inferred from observations, including demography, weather, secondary structure and alignment. The closing exercise asks students to set Markov parameters that maximize a weather sequence probability.",
        teaching:
          "Study interpretation: these examples are there to make the hidden-variable pattern portable before the formal HMM lecture.",
        remember: "In bioinformatics, observed sequences often carry evidence about hidden biological labels such as secondary structure or alignment position.",
        trap: "Do not treat hidden variables as mystical. They are unobserved states whose probabilities can be inferred from observed data and model assumptions.",
        prompt: "How does the alignment example fit the hidden-state framework?",
      },
    ],
  }),
  miniLabs: [
    {
      title: "Likelihood or posterior sorter",
      goal: "Stop mixing up the conditioning direction.",
      steps: [
        "Write one sentence for P(sequence | globin model).",
        "Write one sentence for P(globin model | sequence).",
        "List the extra ingredients needed to move from the first question to the second.",
      ],
      output: "Two probability interpretations plus a Bayes checklist.",
      check: "The second answer should mention priors and evidence/model comparison.",
      trap: "Do not say both probabilities mean 'the sequence is a globin'.",
    },
    {
      title: "Null-model score sketch",
      goal: "Understand why background comparison matters.",
      steps: [
        "Choose a family model M and a null model N.",
        "Explain what P(s | N) represents biologically.",
        "Write the log-ratio score S(M | s) in words.",
      ],
      output: "A short log-odds interpretation.",
      check: "A good answer says the score asks whether the sequence is more compatible with M than with background composition.",
      trap: "Do not treat the null model as 'random garbage'; it uses letter/residue abundances.",
    },
    {
      title: "Weather Markov calculation",
      goal: "Practice multiplying a first-order Markov chain probability.",
      steps: [
        "Pick a short weather string such as CRRCS.",
        "Write the BEGIN probability, each transition and the END term if included.",
        "Explain why no earlier days beyond the previous one appear in the product.",
      ],
      output: "A product expression for the sequence likelihood.",
      check: "The expression should use only adjacent transitions.",
      trap: "Do not multiply unrelated marginal probabilities for each day.",
    },
    {
      title: "Maximum-likelihood transition table",
      goal: "Turn observed transitions into model parameters.",
      steps: [
        "Take a short sequence and count all transitions leaving state C.",
        "Divide each C->target count by the total outgoing transitions from C.",
        "Check that the probabilities leaving C sum to one.",
      ],
      output: "One normalized row of a transition matrix.",
      check: "The row must satisfy the normalization constraint.",
      trap: "Do not normalize by all transitions in the whole dataset if you are estimating one state's outgoing probabilities.",
    },
    {
      title: "Hidden-path translator",
      goal: "Prepare the HMM vocabulary before the next lecture.",
      steps: [
        "For the dice example, name the hidden states and observed alphabet.",
        "For secondary-structure prediction, name the hidden states and observed alphabet.",
        "For sequence-to-family alignment, name what is observed and what is hidden.",
      ],
      output: "Three observed/hidden mappings.",
      check: "Observed symbols should be measurable; hidden states should be inferred.",
      trap: "Do not make the hidden path identical to the observed sequence.",
    },
  ],
  checkpoints: [
    {
      question: "What is a probabilistic model for biological sequences?",
      answer:
        "It is a model that assigns probabilities to biological sequences or sequence-derived observations under explicit assumptions and parameters.",
    },
    {
      question: "What is the difference between the generative and associative definitions?",
      answer:
        "The generative view says the model produces sequences with certain probabilities. The associative view says that, given a sequence, the model computes the probability associated with that sequence.",
    },
    {
      question: "Why is P(sequence | model) not enough to answer class membership?",
      answer:
        "Because P(sequence | model) is a likelihood under one model, while class membership asks P(model | sequence), which also depends on priors and comparison with alternative models or evidence.",
    },
    {
      question: "What is a null model used for?",
      answer:
        "A null model represents background sequence generation, often based only on letter or residue abundances, so the family model can be evaluated relative to background expectation.",
    },
    {
      question: "How is a first-order Markov sequence probability computed?",
      answer:
        "Multiply the probability of the first state from BEGIN, each transition probability from the previous state to the next state, and optionally the transition from the final state to END.",
    },
    {
      question: "How are Markov transition probabilities trained by maximum likelihood?",
      answer:
        "Count transitions from each state to every target state, then normalize each row by the total number of outgoing transitions from that source state.",
    },
    {
      question: "Why does the dice example introduce hidden variables?",
      answer:
        "The observed numbers are visible, but the die used at each roll is hidden. The hidden state path generates observable symbols through state-specific emission probabilities.",
    },
  ],
  modelAnswer: {
    question: "Explain P(sequence | model) vs P(model | sequence) and how Bayes theorem helps.",
    answer:
      "P(sequence | model) is the likelihood: how probable the observed sequence would be if a specific model generated it. For example, it can tell us whether a sequence is plausible under a trained globin model. P(model | sequence) is the posterior model question: after observing the sequence, how probable is it that this model or class explains it? These are not interchangeable. Bayes theorem connects them by multiplying the likelihood by the prior probability of the model and dividing by the evidence. In practice, because the probability of a sequence in the whole sequence space is hard to estimate, we often compare models directly or compare a family model against a null/background model.",
  },
  sourceNotes: [
    "Primary source: 3-MM-Theory.pdf in the Capriotti LB1 Drive folder.",
    "All 29 slide screenshots were extracted from the source PDF and are shown with slide/page labels.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};

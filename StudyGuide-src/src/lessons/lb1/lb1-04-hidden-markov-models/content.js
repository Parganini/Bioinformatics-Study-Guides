import { buildSections } from "../shared/buildContent.js";

const deck = "4-HiddenMarkovModels.pdf";
const deckFolder = "04-hidden-markov-models";
const title = "Hidden Markov Models: states, emissions and paths";

export const lessonContent = {
  id: "lb1-04-hidden-markov-models",
  extractionStatus: "real slide screenshots extracted from all 18 slides of 4-HiddenMarkovModels.pdf",
  whyThisMatters:
    "This is the central HMM lecture. The previous lesson introduced probabilistic sequence models and hidden variables; here Capriotti formalizes HMMs as sequence generators with hidden states, transitions and emissions, then shows how Forward, Backward and Viterbi avoid impossible path enumeration.",
  objectives: [
    "Define an HMM using states, transition probabilities, start/end probabilities, alphabet and emission probabilities.",
    "Explain the difference between the observed sequence s and the hidden path pi.",
    "Compute the idea of a joint probability P(s, pi | M) for one fixed path.",
    "Explain why P(s | M) is a sum over all possible hidden paths.",
    "Describe what the Forward algorithm computes and why it is efficient.",
    "Describe the Backward algorithm as the reverse decomposition of the same sequence-probability problem.",
    "Distinguish Viterbi decoding from posterior decoding.",
    "Connect CpG islands, secondary structure and alignment to observed symbols plus hidden states.",
  ],
  coreConcepts: [
    {
      title: "HMM as stochastic generator",
      body: "An HMM generates an observed sequence by moving through hidden states and emitting one symbol from the alphabet at each state.",
      keywords: ["generator", "states", "emissions"],
    },
    {
      title: "Transition grammar",
      body: "The transition topology and probabilities define which state paths are likely or even allowed. This acts like a probabilistic grammar for the sequence.",
      keywords: ["transition", "topology", "grammar"],
    },
    {
      title: "Emission propensity",
      body: "Each state has its own emission distribution. In CpG islands, for example, the CpG state emits C and G with higher probability than the non-CpG state.",
      keywords: ["emission", "alphabet", "CpG"],
    },
    {
      title: "Observed sequence vs hidden path",
      body: "The sequence s is visible; the path pi through states is not. HMM inference is about reasoning over that hidden path from the observed symbols.",
      keywords: ["observed", "hidden path", "inference"],
    },
    {
      title: "Joint probability",
      body: "For one fixed path, multiply path probability terms and emission probability terms to get P(s, pi | M).",
      keywords: ["joint probability", "path", "product"],
    },
    {
      title: "Sequence probability",
      body: "The total probability P(s | M) is the sum of P(s, pi | M) over all possible hidden paths.",
      keywords: ["sum over paths", "likelihood", "Forward"],
    },
    {
      title: "Dynamic programming",
      body: "Forward and Viterbi reuse partial computations. That turns exponential path enumeration into a tractable table over sequence positions and states.",
      keywords: ["Forward", "Viterbi", "complexity"],
    },
    {
      title: "Forward and Backward",
      body: "Forward computes sequence probability from the beginning; Backward computes the same probability by decomposing from the end.",
      keywords: ["Forward", "Backward", "recurrence"],
    },
    {
      title: "Viterbi path",
      body: "Viterbi finds the single most probable valid path. It is not the total probability of the observed sequence.",
      keywords: ["Viterbi", "best path", "traceback"],
    },
    {
      title: "Posterior decoding",
      body: "Posterior decoding chooses the most probable state at each position using all paths through that position. It can produce an invalid path if transitions are not allowed.",
      keywords: ["posterior decoding", "state probability", "valid path"],
    },
  ],
  routeSteps: [
    {
      title: "Write the model pieces",
      body: "List hidden states, alphabet, transitions, start/end probabilities and emissions before touching the algorithms.",
    },
    {
      title: "Follow one path",
      body: "For a fixed path, multiply start, transitions, end and emissions. This is P(s, pi | M).",
    },
    {
      title: "Then sum or maximize",
      body: "Forward sums over all paths to compute P(s | M). Viterbi maximizes over paths to find pi*.",
    },
    {
      title: "Translate back to biology",
      body: "Ask what the hidden state means: CpG/non-CpG, helix/strand/coil, loaded/regular die, or alignment position.",
    },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "The observed sequence is visible; the hidden path is inferred. Forward sums paths, Viterbi chooses the best valid path.",
    trap: "Do not confuse P(s | M), P(s, pi | M), the Viterbi path and posterior state probabilities.",
    prompt: "What are the hidden states, emitted symbols, transitions and inference question on this slide?",
    sections: [
      {
        start: 1,
        end: 3,
        title: "Formal HMM definition",
        intro:
          "The lecture opens by defining HMMs as stochastic sequence generators with N states, transition probabilities, start/end probabilities, an alphabet and state-specific emissions.",
        teaching:
          "Study interpretation: the formal definition is exam vocabulary. A good answer must name both transitions between hidden states and emissions of observed symbols.",
        remember: "Transitions leaving a state and emissions from a state each obey normalization constraints.",
        trap: "Do not describe an HMM as only a Markov chain; the emission layer is what makes it hidden and observable at the same time.",
        prompt: "Which terms in the formal definition describe movement through states, and which describe observed symbols?",
      },
      {
        start: 4,
        end: 5,
        title: "Generating an observed sequence from a hidden path",
        intro:
          "These slides show the generation process: choose an initial state, emit a symbol, transition to the next state, repeat until END. The secondary-structure example maps residues to alpha, beta and coil labels.",
        teaching:
          "Study interpretation: read the diagram as two aligned rows: observed residue sequence and hidden structural path.",
        remember: "Hidden does not mean absent; it means the label path is not directly observed.",
        trap: "Do not confuse residue letters with secondary-structure states. Residues are emissions; alpha/beta/coil are hidden labels.",
        prompt: "In the secondary-structure example, what is s and what is pi?",
      },
      {
        start: 6,
        end: 7,
        title: "CpG path probability and joint probability",
        intro:
          "The CpG model gives two hidden states, Y and N, each with different nucleotide emissions and transition probabilities. For a chosen path, the joint probability is the product of path probability and emission probability.",
        teaching:
          "Study interpretation: slide 6 is the concrete multiplication example; slide 7 abstracts it into the formula P(s, pi | M).",
        remember: "For one fixed path, multiply transition terms and emission terms; that gives joint probability, not total sequence probability.",
        trap: "Do not calculate only emissions or only transitions. A path explains both where the model goes and what it emits.",
        prompt: "Why is P(s, pi | M) easier to compute than P(s | M)?",
      },
      {
        start: 8,
        end: 10,
        title: "Forward algorithm: summing all paths efficiently",
        intro:
          "The deck then asks for P(s | M), which requires summing over all possible paths. Forward stores partial probabilities Fk(i), meaning the probability of the prefix ending in state k at position i.",
        teaching:
          "Study interpretation: this is the core dynamic-programming lesson. Forward does the same sum over paths as the naive method, but reuses repeated prefix computations.",
        remember: "Forward answers: what is the total probability of the observed sequence under this model?",
        trap: "Do not say Forward returns the best path. It returns a summed likelihood.",
        prompt: "What does Fk(i) represent in words?",
      },
      {
        start: 11,
        end: 13,
        title: "Backward algorithm and complexity",
        intro:
          "Backward decomposes sequence probability from the end, while the complexity slides compare naive enumeration, O(T x N^T), with dynamic programming, O(T x N^2).",
        teaching:
          "Study interpretation: the algorithmic point is not memorizing every index; it is understanding why summing paths directly is infeasible.",
        remember: "Forward and Backward compute the same sequence likelihood from opposite directions.",
        trap: "Do not think the speed-up changes the probability being computed. Dynamic programming is an efficient exact computation for this model.",
        prompt: "Why does the naive method explode with sequence length T?",
      },
      {
        start: 14,
        end: 17,
        title: "Hidden path inference: Viterbi and posterior decoding",
        intro:
          "After computing total sequence probability, the lecture asks a different question: which hidden path best explains the sequence? Viterbi maximizes the joint probability and stores pointers for traceback.",
        teaching:
          "Study interpretation: this is the second major exam distinction. Forward sums over paths; Viterbi chooses one path; posterior decoding chooses per-position states and may not form a valid path.",
        remember: "Viterbi uses max instead of sum and needs traceback pointers.",
        trap: "Do not call posterior decoding the same as Viterbi; posterior per-position choices can violate transition rules.",
        prompt: "Why does Viterbi need pointers, while Forward does not?",
      },
      {
        start: 18,
        end: 18,
        title: "CpG training exercise",
        intro:
          "The final exercise asks students to build an HMM for CpG islands using human chromosome 21 and CpG island annotation.",
        teaching:
          "Study interpretation: the exercise turns the theory into a pipeline: define states, estimate emissions/transitions from annotated data and use the trained model to analyze genomic sequence.",
        remember: "Training a CpG HMM requires both sequence data and annotation that tells which regions are CpG islands.",
        trap: "Do not build emissions from sequence alone without knowing which positions belong to Y versus N during supervised training.",
        prompt: "What data would you need to estimate emissions and transitions for this CpG HMM?",
      },
    ],
  }),
  miniLabs: [
    {
      title: "HMM component inventory",
      goal: "Practice writing the formal model in biology words.",
      steps: [
        "Choose the CpG example.",
        "List hidden states, observed alphabet, start/end probabilities, transitions and emissions.",
        "Write one sentence explaining what the model assumes biologically.",
      ],
      output: "A labeled HMM inventory.",
      check: "Hidden states should be Y/N; emissions should be A/C/G/T.",
      trap: "Do not put nucleotides as hidden states in the CpG model.",
    },
    {
      title: "One-path probability dry run",
      goal: "Understand P(s, pi | M) before using Forward.",
      steps: [
        "Take a short observed sequence such as ATG.",
        "Choose one hidden path such as NNY.",
        "Write the symbolic product: start, emissions, transitions and END.",
      ],
      output: "One joint-probability expression.",
      check: "Your expression should include both emission probabilities and transition probabilities.",
      trap: "Do not present this as P(s | M); it is one path contribution.",
    },
    {
      title: "Forward table narrator",
      goal: "Translate the recurrence into words.",
      steps: [
        "Pick one cell Fl(i+1).",
        "Say which previous states can lead into l.",
        "Explain why the recurrence sums over previous states and then multiplies by the emission at l.",
      ],
      output: "A plain-English explanation of one Forward update.",
      check: "The answer should contain both 'sum over previous states' and 'emit the next symbol'.",
      trap: "Do not use max in the Forward recurrence.",
    },
    {
      title: "Forward vs Viterbi switch",
      goal: "Separate likelihood from decoding.",
      steps: [
        "Write the question answered by Forward.",
        "Write the question answered by Viterbi.",
        "Circle the operation that changes: sum versus max.",
      ],
      output: "Two algorithm-purpose statements.",
      check: "Forward computes P(s | M); Viterbi computes the best path pi*.",
      trap: "Do not say the Viterbi score is the total sequence probability.",
    },
    {
      title: "Posterior decoding warning",
      goal: "Understand why per-position best states can be invalid.",
      steps: [
        "Imagine a model where some transitions are forbidden.",
        "Choose the most probable state at each position independently.",
        "Explain how two adjacent choices could create a transition the model does not allow.",
      ],
      output: "A short invalid-path example.",
      check: "Good answers mention transition topology.",
      trap: "Do not assume position-wise best choices always form a legal path.",
    },
    {
      title: "Supervised CpG training sketch",
      goal: "Prepare the final exercise conceptually.",
      steps: [
        "Use annotated CpG/non-CpG regions to label positions as Y or N.",
        "Count nucleotide emissions inside each state.",
        "Count transitions between Y and N across the labeled sequence.",
      ],
      output: "A three-step training plan.",
      check: "The plan should estimate both emissions and transitions.",
      trap: "Do not estimate only nucleotide frequencies and forget transitions.",
    },
  ],
  checkpoints: [
    {
      question: "Define a Hidden Markov Model.",
      answer:
        "An HMM is a stochastic generator with hidden states, transition probabilities between states, start/end probabilities, an observed alphabet and emission probabilities from each state.",
    },
    {
      question: "What is the difference between s and pi?",
      answer:
        "s is the observed sequence of emitted symbols. pi is the hidden path of states that generated those symbols.",
    },
    {
      question: "What is P(s, pi | M)?",
      answer:
        "It is the joint probability that model M follows a particular hidden path pi and emits the observed sequence s along that path.",
    },
    {
      question: "Why is P(s | M) a sum over paths?",
      answer:
        "Because the sequence could have been generated by many possible hidden paths, so the total sequence probability adds the joint probability over all of them.",
    },
    {
      question: "What does the Forward algorithm solve?",
      answer:
        "It computes P(s | M), the total probability of the observed sequence under the model, by summing over all hidden paths efficiently.",
    },
    {
      question: "What does the Backward algorithm solve?",
      answer:
        "It computes the same sequence probability from the end of the sequence by storing probabilities of suffixes given a current state.",
    },
    {
      question: "What does Viterbi decoding solve?",
      answer:
        "It finds the most probable valid hidden path for the observed sequence by replacing the Forward sum with a maximum and using traceback pointers.",
    },
    {
      question: "Why can posterior decoding create a non-sense path?",
      answer:
        "Because choosing the most probable state at each position independently can select adjacent states that are not connected by allowed transitions.",
    },
  ],
  modelAnswer: {
    question: "Explain Forward, Backward and Viterbi in an HMM.",
    answer:
      "Forward, Backward and Viterbi all use dynamic programming over sequence positions and hidden states. Forward computes the total probability P(s | M) by summing over all possible hidden paths from the beginning of the sequence. Backward computes the same likelihood from the end, using suffix probabilities. Viterbi answers a different question: it finds the single most probable valid hidden path by maximizing over previous states instead of summing and then tracing back pointers. The common trap is to confuse the Viterbi path with the total sequence probability; one is a best explanation, the other is the sum of all possible explanations.",
  },
  sourceNotes: [
    "Primary source: 4-HiddenMarkovModels.pdf in the Capriotti LB1 Drive folder.",
    "All 18 slide screenshots were extracted from the source PDF and are shown with slide/page labels.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};

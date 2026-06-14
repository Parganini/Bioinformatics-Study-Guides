import { buildSections } from "../shared/buildContent.js";

const deck = "5-HMMAlignments.pdf";
const deckFolder = "05-hmm-alignments";
const title = "HMMs for sequence alignment and profile HMMs";

export const lessonContent = {
  id: "lb1-05-hmm-alignments",
  extractionStatus: "real slide screenshots extracted from all 23 slides of 5-HMMAlignments.pdf",
  whyThisMatters:
    "This lecture turns HMMs into practical alignment and classification tools. Capriotti shows why protein-family positions are not equivalent, how profile HMMs model match/insert/delete behavior, how a Viterbi path becomes an alignment, and how HMM scores can be evaluated as predictors using confusion matrices, MCC, ROC and AUC.",
  objectives: [
    "Explain why a protein-family alignment needs position-specific scoring.",
    "Describe how emission probabilities are trained from aligned family columns.",
    "Explain why gaps require explicit topology rather than one generic gap penalty.",
    "Map match, insert and delete states to profile-HMM alignment behavior.",
    "Explain how a Viterbi path through a profile HMM defines an alignment.",
    "Interpret negative log-likelihood and Z-score for globin classification.",
    "Use confusion matrices, accuracy, class-specific measures, MCC, ROC and AUC to evaluate predictors.",
  ],
  coreConcepts: [
    {
      title: "Positions are not equivalent",
      body: "Different alignment columns have different residue compositions and conservation levels, so a single generic substitution score loses family-specific information.",
      keywords: ["position-specific", "logo", "family"],
    },
    {
      title: "Emission probabilities from examples",
      body: "Given aligned training sequences, each match position can learn a residue distribution that describes what is expected at that family position.",
      keywords: ["emissions", "training", "profile"],
    },
    {
      title: "Profile HMM topology",
      body: "Match states model core columns, insert states model extra residues between core positions, and delete states silently skip core positions.",
      keywords: ["match", "insert", "delete"],
    },
    {
      title: "Silent delete states",
      body: "Delete states do not emit characters. They allow a sequence to skip a model position while preserving the model's ordered architecture.",
      keywords: ["silent state", "gap", "delete"],
    },
    {
      title: "Viterbi path as alignment",
      body: "The best path through a profile HMM maps residues onto match and insert states and marks skipped positions through delete states.",
      keywords: ["Viterbi", "alignment", "path"],
    },
    {
      title: "Negative log-likelihood score",
      body: "A sequence can be scored by -log P(s | M). Lower NLL means the sequence is more probable under the model; Z-scores normalize by length-matched distributions.",
      keywords: ["NLL", "Z-score", "classification"],
    },
    {
      title: "Confusion matrix",
      body: "Prediction performance is organized by true positives, false positives, false negatives and true negatives.",
      keywords: ["TP", "FP", "FN", "TN"],
    },
    {
      title: "Accuracy can mislead",
      body: "When datasets are unbalanced, high accuracy can come from predicting the majority class for everything.",
      keywords: ["accuracy", "unbalance", "bias"],
    },
    {
      title: "MCC, ROC and AUC",
      body: "MCC measures correlation between predicted and true classes; ROC/AUC summarize performance as a threshold changes.",
      keywords: ["MCC", "ROC", "AUC"],
    },
  ],
  routeSteps: [
    {
      title: "Start from the alignment columns",
      body: "Ask which columns are conserved, which vary and which contain insertions or deletions.",
    },
    {
      title: "Build the state architecture",
      body: "Turn core columns into match states, insertion-prone regions into insert states and skipped columns into delete states.",
    },
    {
      title: "Use Viterbi to align",
      body: "The most probable state path places each residue into the profile architecture.",
    },
    {
      title: "Evaluate the classifier",
      body: "Once HMM scores classify globins versus non-globins, inspect confusion matrix metrics instead of trusting accuracy alone.",
    },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "A profile HMM is a position-specific family model; its score can become a classifier, so performance metrics matter.",
    trap: "Do not reduce profile HMMs to substitution matrices, and do not judge a classifier only by accuracy on an unbalanced dataset.",
    prompt: "How does this slide connect family-specific alignment information to scoring, paths or classifier evaluation?",
    sections: [
      {
        start: 1,
        end: 3,
        title: "Why position-specific alignment scores are needed",
        intro:
          "The opening slides use globins and sequence logos to show that different positions in a family alignment are not equivalent. Some sites are highly conserved, others tolerate variation.",
        teaching:
          "Study interpretation: the professor is motivating profile models from biological evidence, not from algorithm fashion. If positions differ biologically, scores should differ by position.",
        remember: "A substitution score may depend on the alignment position.",
        trap: "Do not assume BLOSUM/PAM alone captures every family-specific constraint.",
        prompt: "What does a sequence logo reveal that a single substitution matrix cannot represent directly?",
      },
      {
        start: 4,
        end: 6,
        title: "From aligned sequences to emission probabilities",
        intro:
          "These slides show the simplest profile idea: each alignment position is represented by a state, and each state has a residue or nucleotide composition estimated from training sequences.",
        teaching:
          "Study interpretation: a profile is learned by counting what appears at each position, then using those frequencies as emission probabilities.",
        remember: "P(s | M) for an aligned sequence is the product of the position-specific emission probabilities.",
        trap: "Do not score every column with the same residue distribution; each position has its own composition.",
        prompt: "How would you estimate the emission probability for A at position M3?",
      },
      {
        start: 7,
        end: 9,
        title: "Gaps, silent states and profile-HMM topology",
        intro:
          "The lecture then adds gaps. A naive topology would need many transitions, so silent delete states and insert states provide a structured way to represent gaps with fewer parameters.",
        teaching:
          "Study interpretation: gaps become probabilistic events in the model architecture rather than after-the-fact penalties.",
        remember: "Match states emit aligned core residues; insert states emit extra residues; delete states are silent skips.",
        trap: "Do not say delete states emit gap characters. A delete state emits nothing.",
        prompt: "Why do silent states help model deletions without emitting a residue?",
      },
      {
        start: 10,
        end: 11,
        title: "Viterbi paths become alignments",
        intro:
          "The example sequences show how different Viterbi paths through match, insert and delete states generate an alignment. The score -log P(s | M) can be used as an alignment score.",
        teaching:
          "Study interpretation: once the profile HMM exists, alignment is decoding: choose the path that best explains the sequence.",
        remember: "The state path tells where residues align and where core positions are skipped.",
        trap: "Do not separate the alignment from the path; in a profile HMM the path is the alignment explanation.",
        prompt: "How does a path containing D3 and I4 affect the final aligned sequence?",
      },
      {
        start: 12,
        end: 15,
        title: "Globin profile HMM and score distributions",
        intro:
          "The globin slides show a real protein-family application: an HMM trained from many sequences aligns globins and produces NLL scores used to discriminate globins from non-globins.",
        teaching:
          "Study interpretation: profile HMMs are not only for pretty alignments; they can be used as family classifiers.",
        remember: "NLL-score = -log P(s | M); Z-score normalizes NLL using mean and standard deviation from length-matched sequences.",
        trap: "Do not compare raw NLL values across very different sequence lengths without normalization or background context.",
        prompt: "Why does the Z-score use sequences with similar length?",
      },
      {
        start: 16,
        end: 18,
        title: "Confusion matrix and the accuracy trap",
        intro:
          "The deck introduces the 2x2 confusion matrix and then shows why overall accuracy can be misleading when the dataset is unbalanced.",
        teaching:
          "Study interpretation: this is the evaluation warning. A method can look accurate by always predicting the majority class.",
        remember: "Accuracy asks how many predictions are correct overall, but it can hide failure on the minority class.",
        trap: "Do not report only accuracy for an unbalanced biological classification problem.",
        prompt: "How can a classifier reach 0.9 accuracy and still be useless?",
      },
      {
        start: 19,
        end: 21,
        title: "Class-specific measures and MCC",
        intro:
          "These slides introduce measures that ask whether real positives are recovered, whether positive predictions are correct, and whether predictions correlate with true classes.",
        teaching:
          "Study interpretation: sensitivity/recall, precision and MCC answer different evaluation questions. MCC is especially useful under class imbalance.",
        remember: "MCC is 0 for random prediction, 1 for perfect prediction and -1 for completely wrong prediction.",
        trap: "Do not confuse recall with precision: one starts from real positives, the other from predicted positives.",
        prompt: "Why does MCC expose the all-positive classifier as bad even when accuracy is high?",
      },
      {
        start: 22,
        end: 23,
        title: "ROC curve and AUC",
        intro:
          "The final slides explain that ROC curves track true-positive and false-positive rates as a threshold changes, and AUC summarizes the area under that curve.",
        teaching:
          "Study interpretation: threshold-dependent scores like NLL or Z-score should be evaluated over thresholds, not only at one cutoff.",
        remember: "AUC = 1 is perfect; AUC = 0.5 is random.",
        trap: "Do not describe ROC as a single-threshold metric; it is built by varying the threshold.",
        prompt: "What parameter changes when drawing the ROC curve?",
      },
    ],
  }),
  miniLabs: [
    {
      title: "Logo-to-profile translation",
      goal: "Turn a visual conservation pattern into model language.",
      steps: [
        "Pick one highly conserved logo position.",
        "Describe its match-state emission distribution.",
        "Pick one variable position and describe how its emission distribution differs.",
      ],
      output: "Two position-specific emission descriptions.",
      check: "A conserved position should have one dominant emission; a variable position should be spread across several symbols.",
      trap: "Do not use one global residue frequency for both positions.",
    },
    {
      title: "M/I/D path sketch",
      goal: "Practice reading a profile-HMM alignment path.",
      steps: [
        "Write a short profile with M1-M5.",
        "Create a path with one delete state and one insert state.",
        "Show how the emitted residues line up against the model positions.",
      ],
      output: "A small aligned sequence with one skipped core position and one insertion.",
      check: "Delete should emit nothing; insert should emit an extra residue.",
      trap: "Do not print a residue from a delete state.",
    },
    {
      title: "NLL classifier interpretation",
      goal: "Connect profile-HMM probability to family classification.",
      steps: [
        "Write what a low NLL means for P(s | M).",
        "Explain why a threshold can separate likely globins from non-globins.",
        "State why length-matched normalization helps.",
      ],
      output: "A short NLL/Z-score interpretation.",
      check: "Lower NLL means higher model probability.",
      trap: "Do not say high NLL means a better match.",
    },
    {
      title: "Accuracy trap demonstration",
      goal: "See why unbalanced datasets break naive evaluation.",
      steps: [
        "Imagine 90 positives and 10 negatives.",
        "Predict every example as positive.",
        "Compute the accuracy and explain what the model failed to do.",
      ],
      output: "One paragraph explaining the misleading 0.9 accuracy.",
      check: "The answer should mention zero ability to detect the negative class.",
      trap: "Do not call the model good just because 90 percent are correct.",
    },
    {
      title: "Metric selector",
      goal: "Choose a metric for the biological question.",
      steps: [
        "If missing true globins is costly, choose the measure that focuses on real positives.",
        "If false globin calls are costly, choose the measure that focuses on predicted positives.",
        "If the dataset is unbalanced, explain why MCC is attractive.",
      ],
      output: "A metric choice note: recall/sensitivity, precision and MCC.",
      check: "Each metric should be tied to the question it answers.",
      trap: "Do not use the word specificity for precision without checking the course's naming convention.",
    },
    {
      title: "ROC threshold walk",
      goal: "Understand ROC as a moving-threshold summary.",
      steps: [
        "Choose a score threshold for classifying sequences.",
        "Say how relaxing the threshold affects true positives and false positives.",
        "Explain why AUC summarizes performance across thresholds.",
      ],
      output: "A three-sentence ROC explanation.",
      check: "The threshold must vary.",
      trap: "Do not interpret AUC as accuracy at one cutoff.",
    },
  ],
  checkpoints: [
    {
      question: "Why are different positions in a protein-family alignment not equivalent?",
      answer:
        "Because each position can have a different residue distribution, conservation level and biological constraint, so the substitution score may need to depend on position.",
    },
    {
      question: "How are emission probabilities estimated in the simple profile model?",
      answer:
        "They are estimated from aligned training sequences by counting residue or nucleotide frequencies at each position.",
    },
    {
      question: "What do match, insert and delete states represent?",
      answer:
        "Match states represent core aligned positions, insert states emit extra residues between core positions, and delete states silently skip core positions.",
    },
    {
      question: "How does a Viterbi path define an alignment?",
      answer:
        "The path maps each emitted residue to match or insert states and marks skipped model positions through delete states, producing the aligned representation.",
    },
    {
      question: "What is NLL-score?",
      answer:
        "NLL-score is negative log-likelihood, -log P(s | M). Lower values mean the sequence is more probable under the model.",
    },
    {
      question: "Why can accuracy be misleading in unbalanced datasets?",
      answer:
        "A classifier can get high accuracy by always predicting the majority class while failing completely on the minority class.",
    },
    {
      question: "What does MCC measure?",
      answer:
        "MCC measures the correlation between predicted and true classes; it is 1 for perfect prediction, 0 for random prediction and -1 for complete disagreement.",
    },
    {
      question: "What does AUC summarize?",
      answer:
        "AUC summarizes ROC performance across score thresholds, with 1 indicating perfect prediction and 0.5 indicating random prediction.",
    },
  ],
  modelAnswer: {
    question: "Why are profile HMMs useful for aligning and classifying protein families?",
    answer:
      "Profile HMMs are useful because they convert a family alignment into a position-specific probabilistic model. Conserved family columns become match states with their own emission distributions, insert states model extra residues, and silent delete states allow core positions to be skipped. A Viterbi path through the model gives an alignment of a new sequence to the family architecture, while the likelihood or negative log-likelihood can be used as a family-membership score. This is more informative than one generic substitution matrix because the model captures which positions are conserved, which tolerate variation and where insertions or deletions are expected. The score still has to be evaluated with appropriate metrics such as MCC, ROC and AUC, especially when positive and negative classes are unbalanced.",
  },
  sourceNotes: [
    "Primary source: 5-HMMAlignments.pdf in the Capriotti LB1 Drive folder.",
    "All 23 slide screenshots were extracted from the source PDF and are shown with slide/page labels.",
    "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations.",
  ],
};

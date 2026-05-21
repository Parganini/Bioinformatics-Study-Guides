import React from "react";

const toneClasses = {
  stone: "border-stone-200 bg-stone-50 text-stone-900",
  red: "border-red-100 bg-red-50 text-red-950",
  dark: "border-stone-800 bg-stone-950 text-white",
  green: "border-emerald-100 bg-emerald-50 text-emerald-950",
  amber: "border-amber-100 bg-amber-50 text-amber-950",
  sky: "border-sky-100 bg-sky-50 text-sky-950",
  purple: "border-violet-100 bg-violet-50 text-violet-950",
};

const content = {
  "en": {
    "eyebrow": "Lesson 08 · Maximum Likelihood",
    "title": "Maximum Likelihood",
    "subtitle": "Score trees by asking how probable the observed data are under a tree and a model.",
    "big": "Maximum Likelihood evaluates P(data | model). In phylogenetics, the model includes the substitution model, branch lengths and tree topology. Tree inference becomes a search for the topology and parameters that make the observed alignment most likely.",
    "tags": [
      "likelihood",
      "P(D|M)",
      "GTR",
      "branch lengths",
      "tree search",
      "IQ-TREE"
    ],
    "emphasis": [
      [
        "Likelihood is not posterior probability",
        "ML asks how probable the data are if a model/tree is assumed."
      ],
      [
        "Many parameters are optimized",
        "Rates, base composition, branch lengths and even topology are part of the inference problem."
      ],
      [
        "Tree search is necessary",
        "The number of topologies is huge, so algorithms use heuristics such as NNI, SPR and TBR."
      ],
      [
        "Site likelihoods multiply",
        "The probability of the alignment is built from probabilities across sites under the model."
      ]
    ],
    "sections": [
      [
        "What ML asks",
        [
          "Given a tree and substitution model, how likely are the observed sequences?",
          "The best ML tree is the one with the highest likelihood among explored possibilities."
        ]
      ],
      [
        "Parameters",
        [
          "ML estimates branch lengths, substitution rates, base frequencies and other model parameters.",
          "The tree topology itself is also part of the search."
        ]
      ],
      [
        "Site likelihoods",
        [
          "For each site, the model integrates over possible ancestral states.",
          "The overall likelihood is obtained across sites, usually using log-likelihoods for numerical stability."
        ]
      ],
      [
        "Tree search",
        [
          "Because exhaustive search is usually impossible, software explores tree space with rearrangements such as NNI, SPR and TBR."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 08 · Maximum Likelihood",
    "title": "Maximum Likelihood",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "likelihood",
      "P(D|M)",
      "GTR",
      "branch lengths",
      "tree search",
      "IQ-TREE"
    ],
    "emphasis": [
      [
        "Likelihood is not posterior probability",
        "ML asks how probable the data are if a model/tree is assumed."
      ],
      [
        "Many parameters are optimized",
        "Rates, base composition, branch lengths and even topology are part of the inference problem."
      ],
      [
        "Tree search is necessary",
        "The number of topologies is huge, so algorithms use heuristics such as NNI, SPR and TBR."
      ],
      [
        "Site likelihoods multiply",
        "The probability of the alignment is built from probabilities across sites under the model."
      ]
    ],
    "sections": [
      [
        "What ML asks",
        [
          "Given a tree and substitution model, how likely are the observed sequences?",
          "The best ML tree is the one with the highest likelihood among explored possibilities."
        ]
      ],
      [
        "Parameters",
        [
          "ML estimates branch lengths, substitution rates, base frequencies and other model parameters.",
          "The tree topology itself is also part of the search."
        ]
      ],
      [
        "Site likelihoods",
        [
          "For each site, the model integrates over possible ancestral states.",
          "The overall likelihood is obtained across sites, usually using log-likelihoods for numerical stability."
        ]
      ],
      [
        "Tree search",
        [
          "Because exhaustive search is usually impossible, software explores tree space with rearrangements such as NNI, SPR and TBR."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 08 · بیشینه درست‌نمایی",
    "title": "بیشینه درست‌نمایی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "likelihood",
      "P(D|M)",
      "GTR",
      "branch lengths",
      "tree search",
      "IQ-TREE"
    ],
    "emphasis": [
      [
        "Likelihood is not posterior probability",
        "ML asks how probable the data are if a model/tree is assumed."
      ],
      [
        "Many parameters are optimized",
        "Rates, base composition, branch lengths and even topology are part of the inference problem."
      ],
      [
        "Tree search is necessary",
        "The number of topologies is huge, so algorithms use heuristics such as NNI, SPR and TBR."
      ],
      [
        "Site likelihoods multiply",
        "The probability of the alignment is built from probabilities across sites under the model."
      ]
    ],
    "sections": [
      [
        "What ML asks",
        [
          "Given a tree and substitution model, how likely are the observed sequences?",
          "The best ML tree is the one with the highest likelihood among explored possibilities."
        ]
      ],
      [
        "Parameters",
        [
          "ML estimates branch lengths, substitution rates, base frequencies and other model parameters.",
          "The tree topology itself is also part of the search."
        ]
      ],
      [
        "Site likelihoods",
        [
          "For each site, the model integrates over possible ancestral states.",
          "The overall likelihood is obtained across sites, usually using log-likelihoods for numerical stability."
        ]
      ],
      [
        "Tree search",
        [
          "Because exhaustive search is usually impossible, software explores tree space with rearrangements such as NNI, SPR and TBR."
        ]
      ]
    ]
  }
};

export const lesson08Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes Maximum Likelihood in phylogenetics?",
      "options": [
        "estimating the probability the model is true given data",
        "drawing a cladogram by hand",
        "naming species",
        "estimating the tree/model that maximizes the probability of the observed data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating the tree/model that maximizes the probability of the observed data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "Correct. Estimating the tree/model that maximizes the probability of the observed data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes P(D|M)?",
      "options": [
        "probability of the data given the model",
        "probability of the model given the data",
        "probability of a taxon name",
        "probability of a recording"
      ],
      "answer": 0,
      "explanation": "The key idea is that probability of the data given the model.",
      "optionExplanations": [
        "Correct. Probability of the data given the model.",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes log-likelihood?",
      "options": [
        "a branch support metric only",
        "a type of outgroup",
        "a numerically convenient log form of likelihood",
        "an alignment format"
      ],
      "answer": 2,
      "explanation": "The key idea is that a numerically convenient log form of likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "Correct. A numerically convenient log form of likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes branch lengths in ML?",
      "options": [
        "always meaningless",
        "always equal to time",
        "parameters optimized with the model and topology",
        "never estimated"
      ],
      "answer": 2,
      "explanation": "The key idea is that parameters optimized with the model and topology.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "Correct. Parameters optimized with the model and topology.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes tree topology in ML?",
      "options": [
        "always fixed by taxonomy",
        "irrelevant once aligned",
        "identical to a distance matrix",
        "part of the model/search space"
      ],
      "answer": 3,
      "explanation": "The key idea is that part of the model/search space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "Correct. Part of the model/search space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes NNI?",
      "options": [
        "a codon model",
        "a local tree rearrangement swapping neighboring subtrees",
        "an alignment trimmer",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that a local tree rearrangement swapping neighboring subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to NNI.",
        "Correct. A local tree rearrangement swapping neighboring subtrees.",
        "This option refers to another concept or an overstatement, not to NNI.",
        "This option refers to another concept or an overstatement, not to NNI."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SPR?",
      "options": [
        "a base frequency parameter",
        "a type of gap",
        "a clock calibration",
        "a tree rearrangement moving a pruned subtree to another position"
      ],
      "answer": 3,
      "explanation": "The key idea is that a tree rearrangement moving a pruned subtree to another position.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "Correct. A tree rearrangement moving a pruned subtree to another position."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBR?",
      "options": [
        "a molecular clock type",
        "a broad tree rearrangement that cuts and reconnects subtrees",
        "a model of codon selection",
        "a PCR primer"
      ],
      "answer": 1,
      "explanation": "The key idea is that a broad tree rearrangement that cuts and reconnects subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBR.",
        "Correct. A broad tree rearrangement that cuts and reconnects subtrees.",
        "This option refers to another concept or an overstatement, not to TBR.",
        "This option refers to another concept or an overstatement, not to TBR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site likelihood?",
      "options": [
        "the number of taxa only",
        "a recording timestamp",
        "a tip label",
        "the contribution of one alignment column to likelihood"
      ],
      "answer": 3,
      "explanation": "The key idea is that the contribution of one alignment column to likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "Correct. The contribution of one alignment column to likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR in ML?",
      "options": [
        "a taxon-sampling strategy",
        "an orthogroup definition",
        "a tree viewer",
        "a flexible nucleotide substitution model that can be used inside likelihood calculations"
      ],
      "answer": 3,
      "explanation": "The key idea is that a flexible nucleotide substitution model that can be used inside likelihood calculations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "Correct. A flexible nucleotide substitution model that can be used inside likelihood calculations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running IQ-TREE or ML software?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer a tree by maximizing likelihood",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer a tree by maximizing likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "Correct. To infer a tree by maximizing likelihood.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading log-likelihood values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare how well explored trees/models explain the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare how well explored trees/models explain the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "Correct. To compare how well explored trees/models explain the data."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using tree rearrangements?",
      "options": [
        "to create a final answer without checking the data",
        "to understand heuristic exploration of topology space",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to understand heuristic exploration of topology space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "Correct. To understand heuristic exploration of topology space.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking model output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to connect chosen substitution model and ML inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that to connect chosen substitution model and ML inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "Correct. To connect chosen substitution model and ML inference."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting the best tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to remember it is the best under assumptions, not direct observation",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to remember it is the best under assumptions, not direct observation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "Correct. To remember it is the best under assumptions, not direct observation.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes Maximum Likelihood in phylogenetics?",
      "options": [
        "estimating the probability the model is true given data",
        "drawing a cladogram by hand",
        "naming species",
        "estimating the tree/model that maximizes the probability of the observed data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating the tree/model that maximizes the probability of the observed data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "Correct. Estimating the tree/model that maximizes the probability of the observed data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes P(D|M)?",
      "options": [
        "probability of the data given the model",
        "probability of the model given the data",
        "probability of a taxon name",
        "probability of a recording"
      ],
      "answer": 0,
      "explanation": "The key idea is that probability of the data given the model.",
      "optionExplanations": [
        "Correct. Probability of the data given the model.",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes log-likelihood?",
      "options": [
        "a branch support metric only",
        "a type of outgroup",
        "a numerically convenient log form of likelihood",
        "an alignment format"
      ],
      "answer": 2,
      "explanation": "The key idea is that a numerically convenient log form of likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "Correct. A numerically convenient log form of likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes branch lengths in ML?",
      "options": [
        "always meaningless",
        "always equal to time",
        "parameters optimized with the model and topology",
        "never estimated"
      ],
      "answer": 2,
      "explanation": "The key idea is that parameters optimized with the model and topology.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "Correct. Parameters optimized with the model and topology.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes tree topology in ML?",
      "options": [
        "always fixed by taxonomy",
        "irrelevant once aligned",
        "identical to a distance matrix",
        "part of the model/search space"
      ],
      "answer": 3,
      "explanation": "The key idea is that part of the model/search space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "Correct. Part of the model/search space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes NNI?",
      "options": [
        "a codon model",
        "a local tree rearrangement swapping neighboring subtrees",
        "an alignment trimmer",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that a local tree rearrangement swapping neighboring subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to NNI.",
        "Correct. A local tree rearrangement swapping neighboring subtrees.",
        "This option refers to another concept or an overstatement, not to NNI.",
        "This option refers to another concept or an overstatement, not to NNI."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SPR?",
      "options": [
        "a base frequency parameter",
        "a type of gap",
        "a clock calibration",
        "a tree rearrangement moving a pruned subtree to another position"
      ],
      "answer": 3,
      "explanation": "The key idea is that a tree rearrangement moving a pruned subtree to another position.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "Correct. A tree rearrangement moving a pruned subtree to another position."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBR?",
      "options": [
        "a molecular clock type",
        "a broad tree rearrangement that cuts and reconnects subtrees",
        "a model of codon selection",
        "a PCR primer"
      ],
      "answer": 1,
      "explanation": "The key idea is that a broad tree rearrangement that cuts and reconnects subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBR.",
        "Correct. A broad tree rearrangement that cuts and reconnects subtrees.",
        "This option refers to another concept or an overstatement, not to TBR.",
        "This option refers to another concept or an overstatement, not to TBR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site likelihood?",
      "options": [
        "the number of taxa only",
        "a recording timestamp",
        "a tip label",
        "the contribution of one alignment column to likelihood"
      ],
      "answer": 3,
      "explanation": "The key idea is that the contribution of one alignment column to likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "Correct. The contribution of one alignment column to likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR in ML?",
      "options": [
        "a taxon-sampling strategy",
        "an orthogroup definition",
        "a tree viewer",
        "a flexible nucleotide substitution model that can be used inside likelihood calculations"
      ],
      "answer": 3,
      "explanation": "The key idea is that a flexible nucleotide substitution model that can be used inside likelihood calculations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "Correct. A flexible nucleotide substitution model that can be used inside likelihood calculations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running IQ-TREE or ML software?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer a tree by maximizing likelihood",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer a tree by maximizing likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "Correct. To infer a tree by maximizing likelihood.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading log-likelihood values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare how well explored trees/models explain the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare how well explored trees/models explain the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "Correct. To compare how well explored trees/models explain the data."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using tree rearrangements?",
      "options": [
        "to create a final answer without checking the data",
        "to understand heuristic exploration of topology space",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to understand heuristic exploration of topology space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "Correct. To understand heuristic exploration of topology space.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking model output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to connect chosen substitution model and ML inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that to connect chosen substitution model and ML inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "Correct. To connect chosen substitution model and ML inference."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting the best tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to remember it is the best under assumptions, not direct observation",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to remember it is the best under assumptions, not direct observation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "Correct. To remember it is the best under assumptions, not direct observation.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes Maximum Likelihood in phylogenetics?",
      "options": [
        "estimating the probability the model is true given data",
        "drawing a cladogram by hand",
        "naming species",
        "estimating the tree/model that maximizes the probability of the observed data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating the tree/model that maximizes the probability of the observed data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Maximum Likelihood in phylogenetics.",
        "Correct. Estimating the tree/model that maximizes the probability of the observed data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes P(D|M)?",
      "options": [
        "probability of the data given the model",
        "probability of the model given the data",
        "probability of a taxon name",
        "probability of a recording"
      ],
      "answer": 0,
      "explanation": "The key idea is that probability of the data given the model.",
      "optionExplanations": [
        "Correct. Probability of the data given the model.",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M).",
        "This option refers to another concept or an overstatement, not to P(D|M)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes log-likelihood?",
      "options": [
        "a branch support metric only",
        "a type of outgroup",
        "a numerically convenient log form of likelihood",
        "an alignment format"
      ],
      "answer": 2,
      "explanation": "The key idea is that a numerically convenient log form of likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood.",
        "Correct. A numerically convenient log form of likelihood.",
        "This option refers to another concept or an overstatement, not to log-likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes branch lengths in ML?",
      "options": [
        "always meaningless",
        "always equal to time",
        "parameters optimized with the model and topology",
        "never estimated"
      ],
      "answer": 2,
      "explanation": "The key idea is that parameters optimized with the model and topology.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML.",
        "Correct. Parameters optimized with the model and topology.",
        "This option refers to another concept or an overstatement, not to branch lengths in ML."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes tree topology in ML?",
      "options": [
        "always fixed by taxonomy",
        "irrelevant once aligned",
        "identical to a distance matrix",
        "part of the model/search space"
      ],
      "answer": 3,
      "explanation": "The key idea is that part of the model/search space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "This option refers to another concept or an overstatement, not to tree topology in ML.",
        "Correct. Part of the model/search space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes NNI?",
      "options": [
        "a codon model",
        "a local tree rearrangement swapping neighboring subtrees",
        "an alignment trimmer",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that a local tree rearrangement swapping neighboring subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to NNI.",
        "Correct. A local tree rearrangement swapping neighboring subtrees.",
        "This option refers to another concept or an overstatement, not to NNI.",
        "This option refers to another concept or an overstatement, not to NNI."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SPR?",
      "options": [
        "a base frequency parameter",
        "a type of gap",
        "a clock calibration",
        "a tree rearrangement moving a pruned subtree to another position"
      ],
      "answer": 3,
      "explanation": "The key idea is that a tree rearrangement moving a pruned subtree to another position.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "This option refers to another concept or an overstatement, not to SPR.",
        "Correct. A tree rearrangement moving a pruned subtree to another position."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBR?",
      "options": [
        "a molecular clock type",
        "a broad tree rearrangement that cuts and reconnects subtrees",
        "a model of codon selection",
        "a PCR primer"
      ],
      "answer": 1,
      "explanation": "The key idea is that a broad tree rearrangement that cuts and reconnects subtrees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBR.",
        "Correct. A broad tree rearrangement that cuts and reconnects subtrees.",
        "This option refers to another concept or an overstatement, not to TBR.",
        "This option refers to another concept or an overstatement, not to TBR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site likelihood?",
      "options": [
        "the number of taxa only",
        "a recording timestamp",
        "a tip label",
        "the contribution of one alignment column to likelihood"
      ],
      "answer": 3,
      "explanation": "The key idea is that the contribution of one alignment column to likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "This option refers to another concept or an overstatement, not to site likelihood.",
        "Correct. The contribution of one alignment column to likelihood."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR in ML?",
      "options": [
        "a taxon-sampling strategy",
        "an orthogroup definition",
        "a tree viewer",
        "a flexible nucleotide substitution model that can be used inside likelihood calculations"
      ],
      "answer": 3,
      "explanation": "The key idea is that a flexible nucleotide substitution model that can be used inside likelihood calculations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "This option refers to another concept or an overstatement, not to GTR in ML.",
        "Correct. A flexible nucleotide substitution model that can be used inside likelihood calculations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running IQ-TREE or ML software?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer a tree by maximizing likelihood",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer a tree by maximizing likelihood.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software.",
        "Correct. To infer a tree by maximizing likelihood.",
        "This option refers to another concept or an overstatement, not to running IQ-TREE or ML software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading log-likelihood values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare how well explored trees/models explain the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare how well explored trees/models explain the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "This option refers to another concept or an overstatement, not to reading log-likelihood values.",
        "Correct. To compare how well explored trees/models explain the data."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using tree rearrangements?",
      "options": [
        "to create a final answer without checking the data",
        "to understand heuristic exploration of topology space",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to understand heuristic exploration of topology space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "Correct. To understand heuristic exploration of topology space.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements.",
        "This option refers to another concept or an overstatement, not to using tree rearrangements."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking model output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to connect chosen substitution model and ML inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that to connect chosen substitution model and ML inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "This option refers to another concept or an overstatement, not to checking model output.",
        "Correct. To connect chosen substitution model and ML inference."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting the best tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to remember it is the best under assumptions, not direct observation",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to remember it is the best under assumptions, not direct observation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree.",
        "Correct. To remember it is the best under assumptions, not direct observation.",
        "This option refers to another concept or an overstatement, not to interpreting the best tree."
      ]
    }
  ]
};

function Card({ title, children, tone = "stone" }) {
  return <article className={`rounded-[2rem] border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}><h3 className="text-xl font-black tracking-tight">{title}</h3><div className="mt-3 text-sm font-semibold leading-7 opacity-85">{children}</div></article>;
}

function Flow({ items }) {
  return <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{items.map((item, index) => <div key={item} className="rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-sm font-black text-white">{index + 1}</div><div className="text-sm font-black leading-6 text-stone-800">{item}</div></div>)}</div>;
}

export default function MaximumLikelihoodLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = content[lang] || content.en;
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <MiniTreeIcon active />
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.big}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
        <div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">How this lesson is built</div>
        <Flow items={copy.sections.map(s => s[0])} />
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">{copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky","red","green","amber","purple"][index % 5]}>{body}</Card>)}</section>

      {copy.sections.map(([title, paragraphs], index) => (
        <section key={title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Section {index + 1}</div>
          <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {paragraphs.map((paragraph, i) => <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>)}
          </div>
        </section>
      ))}

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">Before moving on</div>
        <h2 className="mt-2 text-2xl font-black">Checklist</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {copy.sections.map(([title]) => <label key={title} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700"/><span>I can explain: {title}</span></label>)}
        </div>
      </section>

      <LessonPractical lang={lang} lessonNo={lessonNo} />
      <LessonQuiz lang={lang} lessonNo={lessonNo} />
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

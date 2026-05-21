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
    "eyebrow": "Lesson 06 · Distance-based vs character-based algorithms",
    "title": "Distance-based versus character-based algorithms",
    "subtitle": "Understand the difference between summarizing sequences as distances and scoring trees character by character.",
    "big": "This lesson contrasts fast exploratory distance methods with character-based approaches that evaluate sequence characters directly. UPGMA and Neighbor Joining are useful to understand algorithmic logic and the assumptions hidden behind a tree.",
    "tags": [
      "distance matrix",
      "UPGMA",
      "Neighbor Joining",
      "Q-matrix",
      "character-based",
      "parsimony"
    ],
    "emphasis": [
      [
        "Distance methods compress information",
        "They first convert alignments into pairwise distances, then build a tree from the matrix."
      ],
      [
        "UPGMA assumes a molecular clock",
        "It produces rooted ultrametric trees and is inappropriate when rates vary strongly."
      ],
      [
        "Neighbor Joining is more flexible",
        "NJ does not require a strict clock and produces unrooted trees."
      ],
      [
        "Character-based methods score trees",
        "They keep site-level information and are central for ML and Bayesian inference later."
      ]
    ],
    "sections": [
      [
        "Distance-based logic",
        [
          "Start from an alignment, compute pairwise distances, and infer a tree from the distance matrix.",
          "This is fast and useful for exploration, but it discards site-by-site information."
        ]
      ],
      [
        "UPGMA",
        [
          "UPGMA clusters the closest pair and recalculates distances by averages.",
          "It assumes equal rates through time, so it gives rooted ultrametric trees."
        ]
      ],
      [
        "Neighbor Joining",
        [
          "NJ uses net divergence and a Q-matrix to avoid simply choosing the smallest raw distance.",
          "It allows different rates among lineages and returns an unrooted topology."
        ]
      ],
      [
        "Character-based logic",
        [
          "Character-based methods compare nucleotides or amino acids site by site.",
          "They are the conceptual bridge toward parsimony, Maximum Likelihood and Bayesian methods."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 06 · Métodos de distancia vs métodos por caracteres",
    "title": "Métodos de distancia vs métodos por caracteres",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "distance matrix",
      "UPGMA",
      "Neighbor Joining",
      "Q-matrix",
      "character-based",
      "parsimony"
    ],
    "emphasis": [
      [
        "Distance methods compress information",
        "They first convert alignments into pairwise distances, then build a tree from the matrix."
      ],
      [
        "UPGMA assumes a molecular clock",
        "It produces rooted ultrametric trees and is inappropriate when rates vary strongly."
      ],
      [
        "Neighbor Joining is more flexible",
        "NJ does not require a strict clock and produces unrooted trees."
      ],
      [
        "Character-based methods score trees",
        "They keep site-level information and are central for ML and Bayesian inference later."
      ]
    ],
    "sections": [
      [
        "Distance-based logic",
        [
          "Start from an alignment, compute pairwise distances, and infer a tree from the distance matrix.",
          "This is fast and useful for exploration, but it discards site-by-site information."
        ]
      ],
      [
        "UPGMA",
        [
          "UPGMA clusters the closest pair and recalculates distances by averages.",
          "It assumes equal rates through time, so it gives rooted ultrametric trees."
        ]
      ],
      [
        "Neighbor Joining",
        [
          "NJ uses net divergence and a Q-matrix to avoid simply choosing the smallest raw distance.",
          "It allows different rates among lineages and returns an unrooted topology."
        ]
      ],
      [
        "Character-based logic",
        [
          "Character-based methods compare nucleotides or amino acids site by site.",
          "They are the conceptual bridge toward parsimony, Maximum Likelihood and Bayesian methods."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 06 · روش‌های فاصله‌ای در برابر روش‌های کاراکتری",
    "title": "روش‌های فاصله‌ای در برابر روش‌های کاراکتری",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "distance matrix",
      "UPGMA",
      "Neighbor Joining",
      "Q-matrix",
      "character-based",
      "parsimony"
    ],
    "emphasis": [
      [
        "Distance methods compress information",
        "They first convert alignments into pairwise distances, then build a tree from the matrix."
      ],
      [
        "UPGMA assumes a molecular clock",
        "It produces rooted ultrametric trees and is inappropriate when rates vary strongly."
      ],
      [
        "Neighbor Joining is more flexible",
        "NJ does not require a strict clock and produces unrooted trees."
      ],
      [
        "Character-based methods score trees",
        "They keep site-level information and are central for ML and Bayesian inference later."
      ]
    ],
    "sections": [
      [
        "Distance-based logic",
        [
          "Start from an alignment, compute pairwise distances, and infer a tree from the distance matrix.",
          "This is fast and useful for exploration, but it discards site-by-site information."
        ]
      ],
      [
        "UPGMA",
        [
          "UPGMA clusters the closest pair and recalculates distances by averages.",
          "It assumes equal rates through time, so it gives rooted ultrametric trees."
        ]
      ],
      [
        "Neighbor Joining",
        [
          "NJ uses net divergence and a Q-matrix to avoid simply choosing the smallest raw distance.",
          "It allows different rates among lineages and returns an unrooted topology."
        ]
      ],
      [
        "Character-based logic",
        [
          "Character-based methods compare nucleotides or amino acids site by site.",
          "They are the conceptual bridge toward parsimony, Maximum Likelihood and Bayesian methods."
        ]
      ]
    ]
  }
};

export const lesson06Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes distance-based methods?",
      "options": [
        "methods that never use alignments",
        "Bayesian posterior summaries",
        "methods that infer trees from pairwise distances among sequences",
        "trait reconstruction methods"
      ],
      "answer": 2,
      "explanation": "The key idea is that methods that infer trees from pairwise distances among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "Correct. Methods that infer trees from pairwise distances among sequences.",
        "This option refers to another concept or an overstatement, not to distance-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes UPGMA?",
      "options": [
        "a codon model",
        "a support value",
        "a mixture model",
        "a distance method that assumes an ultrametric clock-like tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that a distance method that assumes an ultrametric clock-like tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "Correct. A distance method that assumes an ultrametric clock-like tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Neighbor Joining?",
      "options": [
        "a distance method that produces unrooted trees without assuming a strict clock",
        "a trimming algorithm",
        "a gene prediction tool",
        "a fossil calibration method"
      ],
      "answer": 0,
      "explanation": "The key idea is that a distance method that produces unrooted trees without assuming a strict clock.",
      "optionExplanations": [
        "Correct. A distance method that produces unrooted trees without assuming a strict clock.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a distance matrix?",
      "options": [
        "a table of posterior probabilities",
        "a list of orthogroups only",
        "a rooted chronogram",
        "a table of pairwise differences or corrected distances among taxa"
      ],
      "answer": 3,
      "explanation": "The key idea is that a table of pairwise differences or corrected distances among taxa.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "Correct. A table of pairwise differences or corrected distances among taxa."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Q-matrix in NJ?",
      "options": [
        "a matrix of codons",
        "a table of fossil ages",
        "a transformation used to select pairs considering net divergence",
        "a list of bootstrap replicates"
      ],
      "answer": 2,
      "explanation": "The key idea is that a transformation used to select pairs considering net divergence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "Correct. A transformation used to select pairs considering net divergence.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes character-based methods?",
      "options": [
        "methods that ignore individual sites",
        "methods that score possible trees using alignment characters",
        "methods that require morphology only",
        "methods that cannot use models"
      ],
      "answer": 1,
      "explanation": "The key idea is that methods that score possible trees using alignment characters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "Correct. Methods that score possible trees using alignment characters.",
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "This option refers to another concept or an overstatement, not to character-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes p-distance?",
      "options": [
        "a posterior probability",
        "a branch support metric",
        "the observed proportion of differing sites",
        "a measure of taxon sampling"
      ],
      "answer": 2,
      "explanation": "The key idea is that the observed proportion of differing sites.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to p-distance.",
        "This option refers to another concept or an overstatement, not to p-distance.",
        "Correct. The observed proportion of differing sites.",
        "This option refers to another concept or an overstatement, not to p-distance."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock assumption?",
      "options": [
        "the idea that lineages accumulate substitutions at roughly constant rates",
        "the idea that all sequences are identical",
        "the idea that trees are ladders",
        "the idea that gaps cannot occur"
      ],
      "answer": 0,
      "explanation": "The key idea is that the idea that lineages accumulate substitutions at roughly constant rates.",
      "optionExplanations": [
        "Correct. The idea that lineages accumulate substitutions at roughly constant rates.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes exploratory tree building?",
      "options": [
        "publishing the first tree without checks",
        "using quick methods to inspect data before heavier inference",
        "avoiding alignment",
        "removing all taxa"
      ],
      "answer": 1,
      "explanation": "The key idea is that using quick methods to inspect data before heavier inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "Correct. Using quick methods to inspect data before heavier inference.",
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "This option refers to another concept or an overstatement, not to exploratory tree building."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site-by-site information?",
      "options": [
        "information lost when all data are reduced to a distance matrix",
        "only the names of taxa",
        "the information preserved by character-based approaches",
        "only the outgroup choice"
      ],
      "answer": 2,
      "explanation": "The key idea is that the information preserved by character-based approaches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "Correct. The information preserved by character-based approaches.",
        "This option refers to another concept or an overstatement, not to site-by-site information."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes building a distance matrix?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to summarize pairwise differences among sequences",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to summarize pairwise differences among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "Correct. To summarize pairwise differences among sequences.",
        "This option refers to another concept or an overstatement, not to building a distance matrix."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running UPGMA?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how clustering works under a clock-like assumption"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how clustering works under a clock-like assumption.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "Correct. To see how clustering works under a clock-like assumption."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Neighbor Joining?",
      "options": [
        "to compare a more flexible distance-based topology",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to compare a more flexible distance-based topology.",
      "optionExplanations": [
        "Correct. To compare a more flexible distance-based topology.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing distance and character logic?",
      "options": [
        "to understand what information is compressed or retained",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to understand what information is compressed or retained.",
      "optionExplanations": [
        "Correct. To understand what information is compressed or retained.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting rooted vs unrooted outputs?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid over-reading direction where it was not inferred"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid over-reading direction where it was not inferred.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "Correct. To avoid over-reading direction where it was not inferred."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes distance-based methods?",
      "options": [
        "methods that never use alignments",
        "Bayesian posterior summaries",
        "methods that infer trees from pairwise distances among sequences",
        "trait reconstruction methods"
      ],
      "answer": 2,
      "explanation": "The key idea is that methods that infer trees from pairwise distances among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "Correct. Methods that infer trees from pairwise distances among sequences.",
        "This option refers to another concept or an overstatement, not to distance-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes UPGMA?",
      "options": [
        "a codon model",
        "a support value",
        "a mixture model",
        "a distance method that assumes an ultrametric clock-like tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that a distance method that assumes an ultrametric clock-like tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "Correct. A distance method that assumes an ultrametric clock-like tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Neighbor Joining?",
      "options": [
        "a distance method that produces unrooted trees without assuming a strict clock",
        "a trimming algorithm",
        "a gene prediction tool",
        "a fossil calibration method"
      ],
      "answer": 0,
      "explanation": "The key idea is that a distance method that produces unrooted trees without assuming a strict clock.",
      "optionExplanations": [
        "Correct. A distance method that produces unrooted trees without assuming a strict clock.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a distance matrix?",
      "options": [
        "a table of posterior probabilities",
        "a list of orthogroups only",
        "a rooted chronogram",
        "a table of pairwise differences or corrected distances among taxa"
      ],
      "answer": 3,
      "explanation": "The key idea is that a table of pairwise differences or corrected distances among taxa.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "Correct. A table of pairwise differences or corrected distances among taxa."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Q-matrix in NJ?",
      "options": [
        "a matrix of codons",
        "a table of fossil ages",
        "a transformation used to select pairs considering net divergence",
        "a list of bootstrap replicates"
      ],
      "answer": 2,
      "explanation": "The key idea is that a transformation used to select pairs considering net divergence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "Correct. A transformation used to select pairs considering net divergence.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes character-based methods?",
      "options": [
        "methods that ignore individual sites",
        "methods that score possible trees using alignment characters",
        "methods that require morphology only",
        "methods that cannot use models"
      ],
      "answer": 1,
      "explanation": "The key idea is that methods that score possible trees using alignment characters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "Correct. Methods that score possible trees using alignment characters.",
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "This option refers to another concept or an overstatement, not to character-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes p-distance?",
      "options": [
        "a posterior probability",
        "a branch support metric",
        "the observed proportion of differing sites",
        "a measure of taxon sampling"
      ],
      "answer": 2,
      "explanation": "The key idea is that the observed proportion of differing sites.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to p-distance.",
        "This option refers to another concept or an overstatement, not to p-distance.",
        "Correct. The observed proportion of differing sites.",
        "This option refers to another concept or an overstatement, not to p-distance."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock assumption?",
      "options": [
        "the idea that lineages accumulate substitutions at roughly constant rates",
        "the idea that all sequences are identical",
        "the idea that trees are ladders",
        "the idea that gaps cannot occur"
      ],
      "answer": 0,
      "explanation": "The key idea is that the idea that lineages accumulate substitutions at roughly constant rates.",
      "optionExplanations": [
        "Correct. The idea that lineages accumulate substitutions at roughly constant rates.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes exploratory tree building?",
      "options": [
        "publishing the first tree without checks",
        "using quick methods to inspect data before heavier inference",
        "avoiding alignment",
        "removing all taxa"
      ],
      "answer": 1,
      "explanation": "The key idea is that using quick methods to inspect data before heavier inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "Correct. Using quick methods to inspect data before heavier inference.",
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "This option refers to another concept or an overstatement, not to exploratory tree building."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site-by-site information?",
      "options": [
        "information lost when all data are reduced to a distance matrix",
        "only the names of taxa",
        "the information preserved by character-based approaches",
        "only the outgroup choice"
      ],
      "answer": 2,
      "explanation": "The key idea is that the information preserved by character-based approaches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "Correct. The information preserved by character-based approaches.",
        "This option refers to another concept or an overstatement, not to site-by-site information."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes building a distance matrix?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to summarize pairwise differences among sequences",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to summarize pairwise differences among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "Correct. To summarize pairwise differences among sequences.",
        "This option refers to another concept or an overstatement, not to building a distance matrix."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running UPGMA?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how clustering works under a clock-like assumption"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how clustering works under a clock-like assumption.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "Correct. To see how clustering works under a clock-like assumption."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Neighbor Joining?",
      "options": [
        "to compare a more flexible distance-based topology",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to compare a more flexible distance-based topology.",
      "optionExplanations": [
        "Correct. To compare a more flexible distance-based topology.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing distance and character logic?",
      "options": [
        "to understand what information is compressed or retained",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to understand what information is compressed or retained.",
      "optionExplanations": [
        "Correct. To understand what information is compressed or retained.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting rooted vs unrooted outputs?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid over-reading direction where it was not inferred"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid over-reading direction where it was not inferred.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "Correct. To avoid over-reading direction where it was not inferred."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes distance-based methods?",
      "options": [
        "methods that never use alignments",
        "Bayesian posterior summaries",
        "methods that infer trees from pairwise distances among sequences",
        "trait reconstruction methods"
      ],
      "answer": 2,
      "explanation": "The key idea is that methods that infer trees from pairwise distances among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "This option refers to another concept or an overstatement, not to distance-based methods.",
        "Correct. Methods that infer trees from pairwise distances among sequences.",
        "This option refers to another concept or an overstatement, not to distance-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes UPGMA?",
      "options": [
        "a codon model",
        "a support value",
        "a mixture model",
        "a distance method that assumes an ultrametric clock-like tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that a distance method that assumes an ultrametric clock-like tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "This option refers to another concept or an overstatement, not to UPGMA.",
        "Correct. A distance method that assumes an ultrametric clock-like tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Neighbor Joining?",
      "options": [
        "a distance method that produces unrooted trees without assuming a strict clock",
        "a trimming algorithm",
        "a gene prediction tool",
        "a fossil calibration method"
      ],
      "answer": 0,
      "explanation": "The key idea is that a distance method that produces unrooted trees without assuming a strict clock.",
      "optionExplanations": [
        "Correct. A distance method that produces unrooted trees without assuming a strict clock.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to Neighbor Joining."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a distance matrix?",
      "options": [
        "a table of posterior probabilities",
        "a list of orthogroups only",
        "a rooted chronogram",
        "a table of pairwise differences or corrected distances among taxa"
      ],
      "answer": 3,
      "explanation": "The key idea is that a table of pairwise differences or corrected distances among taxa.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "This option refers to another concept or an overstatement, not to a distance matrix.",
        "Correct. A table of pairwise differences or corrected distances among taxa."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Q-matrix in NJ?",
      "options": [
        "a matrix of codons",
        "a table of fossil ages",
        "a transformation used to select pairs considering net divergence",
        "a list of bootstrap replicates"
      ],
      "answer": 2,
      "explanation": "The key idea is that a transformation used to select pairs considering net divergence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ.",
        "Correct. A transformation used to select pairs considering net divergence.",
        "This option refers to another concept or an overstatement, not to the Q-matrix in NJ."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes character-based methods?",
      "options": [
        "methods that ignore individual sites",
        "methods that score possible trees using alignment characters",
        "methods that require morphology only",
        "methods that cannot use models"
      ],
      "answer": 1,
      "explanation": "The key idea is that methods that score possible trees using alignment characters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "Correct. Methods that score possible trees using alignment characters.",
        "This option refers to another concept or an overstatement, not to character-based methods.",
        "This option refers to another concept or an overstatement, not to character-based methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes p-distance?",
      "options": [
        "a posterior probability",
        "a branch support metric",
        "the observed proportion of differing sites",
        "a measure of taxon sampling"
      ],
      "answer": 2,
      "explanation": "The key idea is that the observed proportion of differing sites.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to p-distance.",
        "This option refers to another concept or an overstatement, not to p-distance.",
        "Correct. The observed proportion of differing sites.",
        "This option refers to another concept or an overstatement, not to p-distance."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock assumption?",
      "options": [
        "the idea that lineages accumulate substitutions at roughly constant rates",
        "the idea that all sequences are identical",
        "the idea that trees are ladders",
        "the idea that gaps cannot occur"
      ],
      "answer": 0,
      "explanation": "The key idea is that the idea that lineages accumulate substitutions at roughly constant rates.",
      "optionExplanations": [
        "Correct. The idea that lineages accumulate substitutions at roughly constant rates.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption.",
        "This option refers to another concept or an overstatement, not to molecular clock assumption."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes exploratory tree building?",
      "options": [
        "publishing the first tree without checks",
        "using quick methods to inspect data before heavier inference",
        "avoiding alignment",
        "removing all taxa"
      ],
      "answer": 1,
      "explanation": "The key idea is that using quick methods to inspect data before heavier inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "Correct. Using quick methods to inspect data before heavier inference.",
        "This option refers to another concept or an overstatement, not to exploratory tree building.",
        "This option refers to another concept or an overstatement, not to exploratory tree building."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site-by-site information?",
      "options": [
        "information lost when all data are reduced to a distance matrix",
        "only the names of taxa",
        "the information preserved by character-based approaches",
        "only the outgroup choice"
      ],
      "answer": 2,
      "explanation": "The key idea is that the information preserved by character-based approaches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "This option refers to another concept or an overstatement, not to site-by-site information.",
        "Correct. The information preserved by character-based approaches.",
        "This option refers to another concept or an overstatement, not to site-by-site information."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes building a distance matrix?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to summarize pairwise differences among sequences",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to summarize pairwise differences among sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "This option refers to another concept or an overstatement, not to building a distance matrix.",
        "Correct. To summarize pairwise differences among sequences.",
        "This option refers to another concept or an overstatement, not to building a distance matrix."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running UPGMA?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how clustering works under a clock-like assumption"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how clustering works under a clock-like assumption.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "This option refers to another concept or an overstatement, not to running UPGMA.",
        "Correct. To see how clustering works under a clock-like assumption."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Neighbor Joining?",
      "options": [
        "to compare a more flexible distance-based topology",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to compare a more flexible distance-based topology.",
      "optionExplanations": [
        "Correct. To compare a more flexible distance-based topology.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining.",
        "This option refers to another concept or an overstatement, not to running Neighbor Joining."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing distance and character logic?",
      "options": [
        "to understand what information is compressed or retained",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to understand what information is compressed or retained.",
      "optionExplanations": [
        "Correct. To understand what information is compressed or retained.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic.",
        "This option refers to another concept or an overstatement, not to comparing distance and character logic."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting rooted vs unrooted outputs?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid over-reading direction where it was not inferred"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid over-reading direction where it was not inferred.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "This option refers to another concept or an overstatement, not to interpreting rooted vs unrooted outputs.",
        "Correct. To avoid over-reading direction where it was not inferred."
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

export default function DistanceCharacterMethodsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

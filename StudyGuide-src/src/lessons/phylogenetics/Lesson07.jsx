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
    "eyebrow": "Lesson 07 · Models of sequence evolution",
    "title": "Models of sequence evolution",
    "subtitle": "Learn why phylogenetic inference needs explicit assumptions about how sequences change.",
    "big": "Substitution models describe probabilities of change from one state to another through time. They are simplifications, but useful ones: they correct for unobserved multiple substitutions and define the probability framework used by ML and BI.",
    "tags": [
      "Markov models",
      "JC",
      "K2P",
      "HKY",
      "GTR",
      "rate heterogeneity",
      "model selection"
    ],
    "emphasis": [
      [
        "All models are wrong, some are useful",
        "Models simplify biology but let us compute with explicit assumptions."
      ],
      [
        "Markov property",
        "The next state depends on the current state, not the full past history."
      ],
      [
        "GTR is a general nucleotide model",
        "Many simpler nucleotide models can be seen as constrained cases of GTR."
      ],
      [
        "Models correct hidden change",
        "Observed differences underestimate substitutions when multiple changes happen at the same site."
      ]
    ],
    "sections": [
      [
        "Why models?",
        [
          "Observed sequence differences are not the same as true evolutionary change. Multiple substitutions can hit the same site.",
          "A model provides a mathematical approximation of substitution probabilities."
        ]
      ],
      [
        "Markov substitution models",
        [
          "The process is usually described by transition probabilities among states such as A, C, G and T.",
          "The Markov property says that future changes depend on the current state."
        ]
      ],
      [
        "Model complexity",
        [
          "JC is very simple; K2P distinguishes transitions/transversions; HKY adds base frequencies; GTR allows six exchangeability rates.",
          "More complex models can fit better but also add parameters."
        ]
      ],
      [
        "Rate heterogeneity",
        [
          "Not all sites evolve at the same speed. Gamma-distributed rates or invariant-site components are common ways to model this."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 07 · Modelos de evolución de secuencias",
    "title": "Modelos de evolución de secuencias",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "Markov models",
      "JC",
      "K2P",
      "HKY",
      "GTR",
      "rate heterogeneity",
      "model selection"
    ],
    "emphasis": [
      [
        "All models are wrong, some are useful",
        "Models simplify biology but let us compute with explicit assumptions."
      ],
      [
        "Markov property",
        "The next state depends on the current state, not the full past history."
      ],
      [
        "GTR is a general nucleotide model",
        "Many simpler nucleotide models can be seen as constrained cases of GTR."
      ],
      [
        "Models correct hidden change",
        "Observed differences underestimate substitutions when multiple changes happen at the same site."
      ]
    ],
    "sections": [
      [
        "Why models?",
        [
          "Observed sequence differences are not the same as true evolutionary change. Multiple substitutions can hit the same site.",
          "A model provides a mathematical approximation of substitution probabilities."
        ]
      ],
      [
        "Markov substitution models",
        [
          "The process is usually described by transition probabilities among states such as A, C, G and T.",
          "The Markov property says that future changes depend on the current state."
        ]
      ],
      [
        "Model complexity",
        [
          "JC is very simple; K2P distinguishes transitions/transversions; HKY adds base frequencies; GTR allows six exchangeability rates.",
          "More complex models can fit better but also add parameters."
        ]
      ],
      [
        "Rate heterogeneity",
        [
          "Not all sites evolve at the same speed. Gamma-distributed rates or invariant-site components are common ways to model this."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 07 · مدل‌های تکامل توالی",
    "title": "مدل‌های تکامل توالی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "Markov models",
      "JC",
      "K2P",
      "HKY",
      "GTR",
      "rate heterogeneity",
      "model selection"
    ],
    "emphasis": [
      [
        "All models are wrong, some are useful",
        "Models simplify biology but let us compute with explicit assumptions."
      ],
      [
        "Markov property",
        "The next state depends on the current state, not the full past history."
      ],
      [
        "GTR is a general nucleotide model",
        "Many simpler nucleotide models can be seen as constrained cases of GTR."
      ],
      [
        "Models correct hidden change",
        "Observed differences underestimate substitutions when multiple changes happen at the same site."
      ]
    ],
    "sections": [
      [
        "Why models?",
        [
          "Observed sequence differences are not the same as true evolutionary change. Multiple substitutions can hit the same site.",
          "A model provides a mathematical approximation of substitution probabilities."
        ]
      ],
      [
        "Markov substitution models",
        [
          "The process is usually described by transition probabilities among states such as A, C, G and T.",
          "The Markov property says that future changes depend on the current state."
        ]
      ],
      [
        "Model complexity",
        [
          "JC is very simple; K2P distinguishes transitions/transversions; HKY adds base frequencies; GTR allows six exchangeability rates.",
          "More complex models can fit better but also add parameters."
        ]
      ],
      [
        "Rate heterogeneity",
        [
          "Not all sites evolve at the same speed. Gamma-distributed rates or invariant-site components are common ways to model this."
        ]
      ]
    ]
  }
};

export const lesson07Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes a substitution model?",
      "options": [
        "a mathematical description of how sequence states change over evolutionary time",
        "a drawing style for trees",
        "a transcriptomics protocol",
        "a species name"
      ],
      "answer": 0,
      "explanation": "The key idea is that a mathematical description of how sequence states change over evolutionary time.",
      "optionExplanations": [
        "Correct. A mathematical description of how sequence states change over evolutionary time.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Markov property?",
      "options": [
        "all sites evolve equally",
        "future state probabilities depend on the current state, not the entire past",
        "all trees are rooted",
        "all genes are orthologous"
      ],
      "answer": 1,
      "explanation": "The key idea is that future state probabilities depend on the current state, not the entire past.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "Correct. Future state probabilities depend on the current state, not the entire past.",
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "This option refers to another concept or an overstatement, not to the Markov property."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Jukes-Cantor model?",
      "options": [
        "a relaxed clock",
        "an alignment trimmer",
        "a simple model with equal base frequencies and equal substitution rates",
        "a gene duplication model"
      ],
      "answer": 2,
      "explanation": "The key idea is that a simple model with equal base frequencies and equal substitution rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "Correct. A simple model with equal base frequencies and equal substitution rates.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR?",
      "options": [
        "a plotting convention",
        "a general reversible nucleotide model with six rate parameters",
        "a bootstrap method",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a general reversible nucleotide model with six rate parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR.",
        "Correct. A general reversible nucleotide model with six rate parameters.",
        "This option refers to another concept or an overstatement, not to GTR.",
        "This option refers to another concept or an overstatement, not to GTR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes transition/transversion distinction?",
      "options": [
        "a difference between tips and nodes",
        "a difference between slides and notebooks",
        "a difference between fossils and genomes",
        "a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "Correct. A difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity across sites?",
      "options": [
        "all taxa have identical rates",
        "different alignment positions evolve at different rates",
        "all sites are invariant",
        "branch lengths never matter"
      ],
      "answer": 1,
      "explanation": "The key idea is that different alignment positions evolve at different rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "Correct. Different alignment positions evolve at different rates.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes multiple substitutions?",
      "options": [
        "multiple species with identical names",
        "multiple outgroups",
        "more than one change occurring at the same site over time",
        "multiple slides"
      ],
      "answer": 2,
      "explanation": "The key idea is that more than one change occurring at the same site over time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "Correct. More than one change occurring at the same site over time.",
        "This option refers to another concept or an overstatement, not to multiple substitutions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model selection?",
      "options": [
        "choosing the prettiest tree layout",
        "choosing an adequate substitution model for the data",
        "choosing a file name",
        "choosing a lecture date"
      ],
      "answer": 1,
      "explanation": "The key idea is that choosing an adequate substitution model for the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model selection.",
        "Correct. Choosing an adequate substitution model for the data.",
        "This option refers to another concept or an overstatement, not to model selection.",
        "This option refers to another concept or an overstatement, not to model selection."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "base or amino acid frequencies remain constant over time under the model",
        "all branches have equal length",
        "all sites are gaps",
        "all taxa are independent"
      ],
      "answer": 0,
      "explanation": "The key idea is that base or amino acid frequencies remain constant over time under the model.",
      "optionExplanations": [
        "Correct. Base or amino acid frequencies remain constant over time under the model.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "the tree can be rotated visually",
        "the analysis has no direction",
        "the alignment is reversed",
        "the substitution process is statistically symmetric in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process is statistically symmetric in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process is statistically symmetric in time."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating simple distances?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see why observed differences need correction"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see why observed differences need correction.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "Correct. To see why observed differences need correction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing substitution models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how assumptions affect likelihood and parameters"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how assumptions affect likelihood and parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "Correct. To see how assumptions affect likelihood and parameters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using model-selection output?",
      "options": [
        "to connect a chosen model to downstream tree inference",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to connect a chosen model to downstream tree inference.",
      "optionExplanations": [
        "Correct. To connect a chosen model to downstream tree inference.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting rate heterogeneity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to understand why some sites carry more or less signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that to understand why some sites carry more or less signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "Correct. To understand why some sites carry more or less signal."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting GTR-like parameters?",
      "options": [
        "to recognize that not all substitutions have equal probability",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to recognize that not all substitutions have equal probability.",
      "optionExplanations": [
        "Correct. To recognize that not all substitutions have equal probability.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes a substitution model?",
      "options": [
        "a mathematical description of how sequence states change over evolutionary time",
        "a drawing style for trees",
        "a transcriptomics protocol",
        "a species name"
      ],
      "answer": 0,
      "explanation": "The key idea is that a mathematical description of how sequence states change over evolutionary time.",
      "optionExplanations": [
        "Correct. A mathematical description of how sequence states change over evolutionary time.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Markov property?",
      "options": [
        "all sites evolve equally",
        "future state probabilities depend on the current state, not the entire past",
        "all trees are rooted",
        "all genes are orthologous"
      ],
      "answer": 1,
      "explanation": "The key idea is that future state probabilities depend on the current state, not the entire past.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "Correct. Future state probabilities depend on the current state, not the entire past.",
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "This option refers to another concept or an overstatement, not to the Markov property."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Jukes-Cantor model?",
      "options": [
        "a relaxed clock",
        "an alignment trimmer",
        "a simple model with equal base frequencies and equal substitution rates",
        "a gene duplication model"
      ],
      "answer": 2,
      "explanation": "The key idea is that a simple model with equal base frequencies and equal substitution rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "Correct. A simple model with equal base frequencies and equal substitution rates.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR?",
      "options": [
        "a plotting convention",
        "a general reversible nucleotide model with six rate parameters",
        "a bootstrap method",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a general reversible nucleotide model with six rate parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR.",
        "Correct. A general reversible nucleotide model with six rate parameters.",
        "This option refers to another concept or an overstatement, not to GTR.",
        "This option refers to another concept or an overstatement, not to GTR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes transition/transversion distinction?",
      "options": [
        "a difference between tips and nodes",
        "a difference between slides and notebooks",
        "a difference between fossils and genomes",
        "a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "Correct. A difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity across sites?",
      "options": [
        "all taxa have identical rates",
        "different alignment positions evolve at different rates",
        "all sites are invariant",
        "branch lengths never matter"
      ],
      "answer": 1,
      "explanation": "The key idea is that different alignment positions evolve at different rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "Correct. Different alignment positions evolve at different rates.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes multiple substitutions?",
      "options": [
        "multiple species with identical names",
        "multiple outgroups",
        "more than one change occurring at the same site over time",
        "multiple slides"
      ],
      "answer": 2,
      "explanation": "The key idea is that more than one change occurring at the same site over time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "Correct. More than one change occurring at the same site over time.",
        "This option refers to another concept or an overstatement, not to multiple substitutions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model selection?",
      "options": [
        "choosing the prettiest tree layout",
        "choosing an adequate substitution model for the data",
        "choosing a file name",
        "choosing a lecture date"
      ],
      "answer": 1,
      "explanation": "The key idea is that choosing an adequate substitution model for the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model selection.",
        "Correct. Choosing an adequate substitution model for the data.",
        "This option refers to another concept or an overstatement, not to model selection.",
        "This option refers to another concept or an overstatement, not to model selection."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "base or amino acid frequencies remain constant over time under the model",
        "all branches have equal length",
        "all sites are gaps",
        "all taxa are independent"
      ],
      "answer": 0,
      "explanation": "The key idea is that base or amino acid frequencies remain constant over time under the model.",
      "optionExplanations": [
        "Correct. Base or amino acid frequencies remain constant over time under the model.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "the tree can be rotated visually",
        "the analysis has no direction",
        "the alignment is reversed",
        "the substitution process is statistically symmetric in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process is statistically symmetric in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process is statistically symmetric in time."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating simple distances?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see why observed differences need correction"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see why observed differences need correction.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "Correct. To see why observed differences need correction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing substitution models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how assumptions affect likelihood and parameters"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how assumptions affect likelihood and parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "Correct. To see how assumptions affect likelihood and parameters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using model-selection output?",
      "options": [
        "to connect a chosen model to downstream tree inference",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to connect a chosen model to downstream tree inference.",
      "optionExplanations": [
        "Correct. To connect a chosen model to downstream tree inference.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting rate heterogeneity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to understand why some sites carry more or less signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that to understand why some sites carry more or less signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "Correct. To understand why some sites carry more or less signal."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting GTR-like parameters?",
      "options": [
        "to recognize that not all substitutions have equal probability",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to recognize that not all substitutions have equal probability.",
      "optionExplanations": [
        "Correct. To recognize that not all substitutions have equal probability.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes a substitution model?",
      "options": [
        "a mathematical description of how sequence states change over evolutionary time",
        "a drawing style for trees",
        "a transcriptomics protocol",
        "a species name"
      ],
      "answer": 0,
      "explanation": "The key idea is that a mathematical description of how sequence states change over evolutionary time.",
      "optionExplanations": [
        "Correct. A mathematical description of how sequence states change over evolutionary time.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model.",
        "This option refers to another concept or an overstatement, not to a substitution model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes the Markov property?",
      "options": [
        "all sites evolve equally",
        "future state probabilities depend on the current state, not the entire past",
        "all trees are rooted",
        "all genes are orthologous"
      ],
      "answer": 1,
      "explanation": "The key idea is that future state probabilities depend on the current state, not the entire past.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "Correct. Future state probabilities depend on the current state, not the entire past.",
        "This option refers to another concept or an overstatement, not to the Markov property.",
        "This option refers to another concept or an overstatement, not to the Markov property."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Jukes-Cantor model?",
      "options": [
        "a relaxed clock",
        "an alignment trimmer",
        "a simple model with equal base frequencies and equal substitution rates",
        "a gene duplication model"
      ],
      "answer": 2,
      "explanation": "The key idea is that a simple model with equal base frequencies and equal substitution rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model.",
        "Correct. A simple model with equal base frequencies and equal substitution rates.",
        "This option refers to another concept or an overstatement, not to Jukes-Cantor model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GTR?",
      "options": [
        "a plotting convention",
        "a general reversible nucleotide model with six rate parameters",
        "a bootstrap method",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a general reversible nucleotide model with six rate parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GTR.",
        "Correct. A general reversible nucleotide model with six rate parameters.",
        "This option refers to another concept or an overstatement, not to GTR.",
        "This option refers to another concept or an overstatement, not to GTR."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes transition/transversion distinction?",
      "options": [
        "a difference between tips and nodes",
        "a difference between slides and notebooks",
        "a difference between fossils and genomes",
        "a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "This option refers to another concept or an overstatement, not to transition/transversion distinction.",
        "Correct. A difference between purine-purine/pyrimidine-pyrimidine changes and purine-pyrimidine changes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity across sites?",
      "options": [
        "all taxa have identical rates",
        "different alignment positions evolve at different rates",
        "all sites are invariant",
        "branch lengths never matter"
      ],
      "answer": 1,
      "explanation": "The key idea is that different alignment positions evolve at different rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "Correct. Different alignment positions evolve at different rates.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity across sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes multiple substitutions?",
      "options": [
        "multiple species with identical names",
        "multiple outgroups",
        "more than one change occurring at the same site over time",
        "multiple slides"
      ],
      "answer": 2,
      "explanation": "The key idea is that more than one change occurring at the same site over time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "This option refers to another concept or an overstatement, not to multiple substitutions.",
        "Correct. More than one change occurring at the same site over time.",
        "This option refers to another concept or an overstatement, not to multiple substitutions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model selection?",
      "options": [
        "choosing the prettiest tree layout",
        "choosing an adequate substitution model for the data",
        "choosing a file name",
        "choosing a lecture date"
      ],
      "answer": 1,
      "explanation": "The key idea is that choosing an adequate substitution model for the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model selection.",
        "Correct. Choosing an adequate substitution model for the data.",
        "This option refers to another concept or an overstatement, not to model selection.",
        "This option refers to another concept or an overstatement, not to model selection."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "base or amino acid frequencies remain constant over time under the model",
        "all branches have equal length",
        "all sites are gaps",
        "all taxa are independent"
      ],
      "answer": 0,
      "explanation": "The key idea is that base or amino acid frequencies remain constant over time under the model.",
      "optionExplanations": [
        "Correct. Base or amino acid frequencies remain constant over time under the model.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "the tree can be rotated visually",
        "the analysis has no direction",
        "the alignment is reversed",
        "the substitution process is statistically symmetric in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process is statistically symmetric in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process is statistically symmetric in time."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating simple distances?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see why observed differences need correction"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see why observed differences need correction.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "This option refers to another concept or an overstatement, not to estimating simple distances.",
        "Correct. To see why observed differences need correction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing substitution models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how assumptions affect likelihood and parameters"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how assumptions affect likelihood and parameters.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "This option refers to another concept or an overstatement, not to comparing substitution models.",
        "Correct. To see how assumptions affect likelihood and parameters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using model-selection output?",
      "options": [
        "to connect a chosen model to downstream tree inference",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to connect a chosen model to downstream tree inference.",
      "optionExplanations": [
        "Correct. To connect a chosen model to downstream tree inference.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output.",
        "This option refers to another concept or an overstatement, not to using model-selection output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting rate heterogeneity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to understand why some sites carry more or less signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that to understand why some sites carry more or less signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to inspecting rate heterogeneity.",
        "Correct. To understand why some sites carry more or less signal."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting GTR-like parameters?",
      "options": [
        "to recognize that not all substitutions have equal probability",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to recognize that not all substitutions have equal probability.",
      "optionExplanations": [
        "Correct. To recognize that not all substitutions have equal probability.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters.",
        "This option refers to another concept or an overstatement, not to interpreting GTR-like parameters."
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

export default function ModelsSequenceEvolutionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

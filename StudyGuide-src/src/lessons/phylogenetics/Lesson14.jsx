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
    "eyebrow": "Lesson 14 · Divergence time analyses",
    "title": "Divergence time analyses",
    "subtitle": "Move from branch lengths as change to branch lengths as time.",
    "big": "Divergence dating connects genetic distance, evolutionary rates and time. A strict molecular clock is simple but often unrealistic; local and relaxed clocks allow rate variation. Calibration information is essential to convert substitutions into dates.",
    "tags": [
      "molecular clock",
      "Time = Distance / (2 × rate)",
      "strict clock",
      "relaxed clock",
      "LSD",
      "treePL",
      "calibration"
    ],
    "emphasis": [
      [
        "The simple formula matters",
        "Time = Distance / (2 × rate) when distance is pairwise between two descendants."
      ],
      [
        "Strict clocks are often violated",
        "Rates vary among genes, lineages and time periods."
      ],
      [
        "Relaxed clocks model rate variation",
        "Autocorrelated and uncorrelated clocks make different assumptions."
      ],
      [
        "Calibration is essential",
        "Fossils or known dates anchor relative branch lengths to absolute time."
      ]
    ],
    "sections": [
      [
        "Clock logic",
        [
          "If substitutions accumulate at a roughly constant rate, genetic distance can approximate time.",
          "But distance alone is not time; the substitution rate and calibration matter."
        ]
      ],
      [
        "Strict, local and relaxed clocks",
        [
          "Strict clock: one rate for all lineages. Local clock: different clade-specific rates. Relaxed clock: rates vary branch by branch."
        ]
      ],
      [
        "Dating methods",
        [
          "LSD is fast and fits dates to branch lengths. Penalized likelihood balances fit and rate smoothness. Bayesian methods estimate posterior distributions with priors."
        ]
      ],
      [
        "Calibrations",
        [
          "Fossil constraints, geological events or known sampling dates are used to anchor the time scale. Poor calibrations lead to poor dates."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 14 · Análisis de tiempos de divergencia",
    "title": "Análisis de tiempos de divergencia",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "molecular clock",
      "Time = Distance / (2 × rate)",
      "strict clock",
      "relaxed clock",
      "LSD",
      "treePL",
      "calibration"
    ],
    "emphasis": [
      [
        "The simple formula matters",
        "Time = Distance / (2 × rate) when distance is pairwise between two descendants."
      ],
      [
        "Strict clocks are often violated",
        "Rates vary among genes, lineages and time periods."
      ],
      [
        "Relaxed clocks model rate variation",
        "Autocorrelated and uncorrelated clocks make different assumptions."
      ],
      [
        "Calibration is essential",
        "Fossils or known dates anchor relative branch lengths to absolute time."
      ]
    ],
    "sections": [
      [
        "Clock logic",
        [
          "If substitutions accumulate at a roughly constant rate, genetic distance can approximate time.",
          "But distance alone is not time; the substitution rate and calibration matter."
        ]
      ],
      [
        "Strict, local and relaxed clocks",
        [
          "Strict clock: one rate for all lineages. Local clock: different clade-specific rates. Relaxed clock: rates vary branch by branch."
        ]
      ],
      [
        "Dating methods",
        [
          "LSD is fast and fits dates to branch lengths. Penalized likelihood balances fit and rate smoothness. Bayesian methods estimate posterior distributions with priors."
        ]
      ],
      [
        "Calibrations",
        [
          "Fossil constraints, geological events or known sampling dates are used to anchor the time scale. Poor calibrations lead to poor dates."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 14 · تحلیل زمان واگرایی",
    "title": "تحلیل زمان واگرایی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "molecular clock",
      "Time = Distance / (2 × rate)",
      "strict clock",
      "relaxed clock",
      "LSD",
      "treePL",
      "calibration"
    ],
    "emphasis": [
      [
        "The simple formula matters",
        "Time = Distance / (2 × rate) when distance is pairwise between two descendants."
      ],
      [
        "Strict clocks are often violated",
        "Rates vary among genes, lineages and time periods."
      ],
      [
        "Relaxed clocks model rate variation",
        "Autocorrelated and uncorrelated clocks make different assumptions."
      ],
      [
        "Calibration is essential",
        "Fossils or known dates anchor relative branch lengths to absolute time."
      ]
    ],
    "sections": [
      [
        "Clock logic",
        [
          "If substitutions accumulate at a roughly constant rate, genetic distance can approximate time.",
          "But distance alone is not time; the substitution rate and calibration matter."
        ]
      ],
      [
        "Strict, local and relaxed clocks",
        [
          "Strict clock: one rate for all lineages. Local clock: different clade-specific rates. Relaxed clock: rates vary branch by branch."
        ]
      ],
      [
        "Dating methods",
        [
          "LSD is fast and fits dates to branch lengths. Penalized likelihood balances fit and rate smoothness. Bayesian methods estimate posterior distributions with priors."
        ]
      ],
      [
        "Calibrations",
        [
          "Fossil constraints, geological events or known sampling dates are used to anchor the time scale. Poor calibrations lead to poor dates."
        ]
      ]
    ]
  }
};

export const lesson14Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock?",
      "options": [
        "a perfect rule in all cases",
        "a tree viewer",
        "a gene family",
        "the idea that substitutions may accumulate at an approximately constant rate"
      ],
      "answer": 3,
      "explanation": "The key idea is that the idea that substitutions may accumulate at an approximately constant rate.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "Correct. The idea that substitutions may accumulate at an approximately constant rate."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Time = Distance / (2 × rate)?",
      "options": [
        "a bootstrap equation",
        "a codon table",
        "the pairwise dating formula for two descendant lineages under a simple clock",
        "an alignment score"
      ],
      "answer": 2,
      "explanation": "The key idea is that the pairwise dating formula for two descendant lineages under a simple clock.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "Correct. The pairwise dating formula for two descendant lineages under a simple clock.",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes strict clock?",
      "options": [
        "one evolutionary rate across all branches",
        "different independent rates for every branch",
        "no branch lengths",
        "no substitutions"
      ],
      "answer": 0,
      "explanation": "The key idea is that one evolutionary rate across all branches.",
      "optionExplanations": [
        "Correct. One evolutionary rate across all branches.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes local clock?",
      "options": [
        "one rate for all lineages",
        "different clock rates assigned to predefined clades or groups",
        "no calibration",
        "only morphology"
      ],
      "answer": 1,
      "explanation": "The key idea is that different clock rates assigned to predefined clades or groups.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to local clock.",
        "Correct. Different clock rates assigned to predefined clades or groups.",
        "This option refers to another concept or an overstatement, not to local clock.",
        "This option refers to another concept or an overstatement, not to local clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes relaxed clock?",
      "options": [
        "a model with no rates",
        "a model allowing rate variation among branches",
        "a distance matrix",
        "a taxonomic system"
      ],
      "answer": 1,
      "explanation": "The key idea is that a model allowing rate variation among branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "Correct. A model allowing rate variation among branches.",
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "This option refers to another concept or an overstatement, not to relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes autocorrelated relaxed clock?",
      "options": [
        "all rates are independent",
        "all sites are invariant",
        "nearby branches tend to have related rates",
        "a trimming algorithm"
      ],
      "answer": 2,
      "explanation": "The key idea is that nearby branches tend to have related rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "Correct. Nearby branches tend to have related rates.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes uncorrelated relaxed clock?",
      "options": [
        "daughter branches inherit exactly the parent rate",
        "all branches equal",
        "branch rates are drawn independently",
        "no priors"
      ],
      "answer": 2,
      "explanation": "The key idea is that branch rates are drawn independently.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "Correct. Branch rates are drawn independently.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes calibration?",
      "options": [
        "an alignment gap",
        "external information used to convert relative branch lengths into time",
        "an orthogroup",
        "a support metric"
      ],
      "answer": 1,
      "explanation": "The key idea is that external information used to convert relative branch lengths into time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calibration.",
        "Correct. External information used to convert relative branch lengths into time.",
        "This option refers to another concept or an overstatement, not to calibration.",
        "This option refers to another concept or an overstatement, not to calibration."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes LSD?",
      "options": [
        "a codon model",
        "a gene-tree summary",
        "a transcript",
        "Least Squares Dating, a fast dating approach using fixed topology/branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that Least Squares Dating, a fast dating approach using fixed topology/branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "Correct. Least Squares Dating, a fast dating approach using fixed topology/branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes penalized likelihood?",
      "options": [
        "a bootstrap resampling method",
        "a sequence aligner",
        "a dating approach balancing branch-length fit and rate smoothness",
        "an outgroup"
      ],
      "answer": 2,
      "explanation": "The key idea is that a dating approach balancing branch-length fit and rate smoothness.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "Correct. A dating approach balancing branch-length fit and rate smoothness.",
        "This option refers to another concept or an overstatement, not to penalized likelihood."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running a dating tool?",
      "options": [
        "to create a final answer without checking the data",
        "to estimate node ages from a tree and branch lengths",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to estimate node ages from a tree and branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "Correct. To estimate node ages from a tree and branch lengths.",
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "This option refers to another concept or an overstatement, not to running a dating tool."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes setting calibrations?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to anchor inferred dates to external evidence",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to anchor inferred dates to external evidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "Correct. To anchor inferred dates to external evidence.",
        "This option refers to another concept or an overstatement, not to setting calibrations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing strict and relaxed assumptions?",
      "options": [
        "to see how rate variation affects ages",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how rate variation affects ages.",
      "optionExplanations": [
        "Correct. To see how rate variation affects ages.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading confidence intervals?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid treating dates as exact points",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid treating dates as exact points.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "Correct. To avoid treating dates as exact points.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking rate variation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to decide whether a strict clock is plausible"
      ],
      "answer": 3,
      "explanation": "The key idea is that to decide whether a strict clock is plausible.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "Correct. To decide whether a strict clock is plausible."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock?",
      "options": [
        "a perfect rule in all cases",
        "a tree viewer",
        "a gene family",
        "the idea that substitutions may accumulate at an approximately constant rate"
      ],
      "answer": 3,
      "explanation": "The key idea is that the idea that substitutions may accumulate at an approximately constant rate.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "Correct. The idea that substitutions may accumulate at an approximately constant rate."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Time = Distance / (2 × rate)?",
      "options": [
        "a bootstrap equation",
        "a codon table",
        "the pairwise dating formula for two descendant lineages under a simple clock",
        "an alignment score"
      ],
      "answer": 2,
      "explanation": "The key idea is that the pairwise dating formula for two descendant lineages under a simple clock.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "Correct. The pairwise dating formula for two descendant lineages under a simple clock.",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes strict clock?",
      "options": [
        "one evolutionary rate across all branches",
        "different independent rates for every branch",
        "no branch lengths",
        "no substitutions"
      ],
      "answer": 0,
      "explanation": "The key idea is that one evolutionary rate across all branches.",
      "optionExplanations": [
        "Correct. One evolutionary rate across all branches.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes local clock?",
      "options": [
        "one rate for all lineages",
        "different clock rates assigned to predefined clades or groups",
        "no calibration",
        "only morphology"
      ],
      "answer": 1,
      "explanation": "The key idea is that different clock rates assigned to predefined clades or groups.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to local clock.",
        "Correct. Different clock rates assigned to predefined clades or groups.",
        "This option refers to another concept or an overstatement, not to local clock.",
        "This option refers to another concept or an overstatement, not to local clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes relaxed clock?",
      "options": [
        "a model with no rates",
        "a model allowing rate variation among branches",
        "a distance matrix",
        "a taxonomic system"
      ],
      "answer": 1,
      "explanation": "The key idea is that a model allowing rate variation among branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "Correct. A model allowing rate variation among branches.",
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "This option refers to another concept or an overstatement, not to relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes autocorrelated relaxed clock?",
      "options": [
        "all rates are independent",
        "all sites are invariant",
        "nearby branches tend to have related rates",
        "a trimming algorithm"
      ],
      "answer": 2,
      "explanation": "The key idea is that nearby branches tend to have related rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "Correct. Nearby branches tend to have related rates.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes uncorrelated relaxed clock?",
      "options": [
        "daughter branches inherit exactly the parent rate",
        "all branches equal",
        "branch rates are drawn independently",
        "no priors"
      ],
      "answer": 2,
      "explanation": "The key idea is that branch rates are drawn independently.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "Correct. Branch rates are drawn independently.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes calibration?",
      "options": [
        "an alignment gap",
        "external information used to convert relative branch lengths into time",
        "an orthogroup",
        "a support metric"
      ],
      "answer": 1,
      "explanation": "The key idea is that external information used to convert relative branch lengths into time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calibration.",
        "Correct. External information used to convert relative branch lengths into time.",
        "This option refers to another concept or an overstatement, not to calibration.",
        "This option refers to another concept or an overstatement, not to calibration."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes LSD?",
      "options": [
        "a codon model",
        "a gene-tree summary",
        "a transcript",
        "Least Squares Dating, a fast dating approach using fixed topology/branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that Least Squares Dating, a fast dating approach using fixed topology/branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "Correct. Least Squares Dating, a fast dating approach using fixed topology/branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes penalized likelihood?",
      "options": [
        "a bootstrap resampling method",
        "a sequence aligner",
        "a dating approach balancing branch-length fit and rate smoothness",
        "an outgroup"
      ],
      "answer": 2,
      "explanation": "The key idea is that a dating approach balancing branch-length fit and rate smoothness.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "Correct. A dating approach balancing branch-length fit and rate smoothness.",
        "This option refers to another concept or an overstatement, not to penalized likelihood."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running a dating tool?",
      "options": [
        "to create a final answer without checking the data",
        "to estimate node ages from a tree and branch lengths",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to estimate node ages from a tree and branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "Correct. To estimate node ages from a tree and branch lengths.",
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "This option refers to another concept or an overstatement, not to running a dating tool."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes setting calibrations?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to anchor inferred dates to external evidence",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to anchor inferred dates to external evidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "Correct. To anchor inferred dates to external evidence.",
        "This option refers to another concept or an overstatement, not to setting calibrations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing strict and relaxed assumptions?",
      "options": [
        "to see how rate variation affects ages",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how rate variation affects ages.",
      "optionExplanations": [
        "Correct. To see how rate variation affects ages.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading confidence intervals?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid treating dates as exact points",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid treating dates as exact points.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "Correct. To avoid treating dates as exact points.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking rate variation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to decide whether a strict clock is plausible"
      ],
      "answer": 3,
      "explanation": "The key idea is that to decide whether a strict clock is plausible.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "Correct. To decide whether a strict clock is plausible."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes molecular clock?",
      "options": [
        "a perfect rule in all cases",
        "a tree viewer",
        "a gene family",
        "the idea that substitutions may accumulate at an approximately constant rate"
      ],
      "answer": 3,
      "explanation": "The key idea is that the idea that substitutions may accumulate at an approximately constant rate.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "This option refers to another concept or an overstatement, not to molecular clock.",
        "Correct. The idea that substitutions may accumulate at an approximately constant rate."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Time = Distance / (2 × rate)?",
      "options": [
        "a bootstrap equation",
        "a codon table",
        "the pairwise dating formula for two descendant lineages under a simple clock",
        "an alignment score"
      ],
      "answer": 2,
      "explanation": "The key idea is that the pairwise dating formula for two descendant lineages under a simple clock.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate).",
        "Correct. The pairwise dating formula for two descendant lineages under a simple clock.",
        "This option refers to another concept or an overstatement, not to Time = Distance / (2 × rate)."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes strict clock?",
      "options": [
        "one evolutionary rate across all branches",
        "different independent rates for every branch",
        "no branch lengths",
        "no substitutions"
      ],
      "answer": 0,
      "explanation": "The key idea is that one evolutionary rate across all branches.",
      "optionExplanations": [
        "Correct. One evolutionary rate across all branches.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock.",
        "This option refers to another concept or an overstatement, not to strict clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes local clock?",
      "options": [
        "one rate for all lineages",
        "different clock rates assigned to predefined clades or groups",
        "no calibration",
        "only morphology"
      ],
      "answer": 1,
      "explanation": "The key idea is that different clock rates assigned to predefined clades or groups.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to local clock.",
        "Correct. Different clock rates assigned to predefined clades or groups.",
        "This option refers to another concept or an overstatement, not to local clock.",
        "This option refers to another concept or an overstatement, not to local clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes relaxed clock?",
      "options": [
        "a model with no rates",
        "a model allowing rate variation among branches",
        "a distance matrix",
        "a taxonomic system"
      ],
      "answer": 1,
      "explanation": "The key idea is that a model allowing rate variation among branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "Correct. A model allowing rate variation among branches.",
        "This option refers to another concept or an overstatement, not to relaxed clock.",
        "This option refers to another concept or an overstatement, not to relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes autocorrelated relaxed clock?",
      "options": [
        "all rates are independent",
        "all sites are invariant",
        "nearby branches tend to have related rates",
        "a trimming algorithm"
      ],
      "answer": 2,
      "explanation": "The key idea is that nearby branches tend to have related rates.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock.",
        "Correct. Nearby branches tend to have related rates.",
        "This option refers to another concept or an overstatement, not to autocorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes uncorrelated relaxed clock?",
      "options": [
        "daughter branches inherit exactly the parent rate",
        "all branches equal",
        "branch rates are drawn independently",
        "no priors"
      ],
      "answer": 2,
      "explanation": "The key idea is that branch rates are drawn independently.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock.",
        "Correct. Branch rates are drawn independently.",
        "This option refers to another concept or an overstatement, not to uncorrelated relaxed clock."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes calibration?",
      "options": [
        "an alignment gap",
        "external information used to convert relative branch lengths into time",
        "an orthogroup",
        "a support metric"
      ],
      "answer": 1,
      "explanation": "The key idea is that external information used to convert relative branch lengths into time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calibration.",
        "Correct. External information used to convert relative branch lengths into time.",
        "This option refers to another concept or an overstatement, not to calibration.",
        "This option refers to another concept or an overstatement, not to calibration."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes LSD?",
      "options": [
        "a codon model",
        "a gene-tree summary",
        "a transcript",
        "Least Squares Dating, a fast dating approach using fixed topology/branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that Least Squares Dating, a fast dating approach using fixed topology/branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "This option refers to another concept or an overstatement, not to LSD.",
        "Correct. Least Squares Dating, a fast dating approach using fixed topology/branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes penalized likelihood?",
      "options": [
        "a bootstrap resampling method",
        "a sequence aligner",
        "a dating approach balancing branch-length fit and rate smoothness",
        "an outgroup"
      ],
      "answer": 2,
      "explanation": "The key idea is that a dating approach balancing branch-length fit and rate smoothness.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "This option refers to another concept or an overstatement, not to penalized likelihood.",
        "Correct. A dating approach balancing branch-length fit and rate smoothness.",
        "This option refers to another concept or an overstatement, not to penalized likelihood."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running a dating tool?",
      "options": [
        "to create a final answer without checking the data",
        "to estimate node ages from a tree and branch lengths",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to estimate node ages from a tree and branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "Correct. To estimate node ages from a tree and branch lengths.",
        "This option refers to another concept or an overstatement, not to running a dating tool.",
        "This option refers to another concept or an overstatement, not to running a dating tool."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes setting calibrations?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to anchor inferred dates to external evidence",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to anchor inferred dates to external evidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "This option refers to another concept or an overstatement, not to setting calibrations.",
        "Correct. To anchor inferred dates to external evidence.",
        "This option refers to another concept or an overstatement, not to setting calibrations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing strict and relaxed assumptions?",
      "options": [
        "to see how rate variation affects ages",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how rate variation affects ages.",
      "optionExplanations": [
        "Correct. To see how rate variation affects ages.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions.",
        "This option refers to another concept or an overstatement, not to comparing strict and relaxed assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading confidence intervals?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid treating dates as exact points",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid treating dates as exact points.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals.",
        "Correct. To avoid treating dates as exact points.",
        "This option refers to another concept or an overstatement, not to reading confidence intervals."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking rate variation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to decide whether a strict clock is plausible"
      ],
      "answer": 3,
      "explanation": "The key idea is that to decide whether a strict clock is plausible.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "This option refers to another concept or an overstatement, not to checking rate variation.",
        "Correct. To decide whether a strict clock is plausible."
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

export default function DivergenceTimeLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

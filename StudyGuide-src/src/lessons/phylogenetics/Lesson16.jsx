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
    "eyebrow": "Lesson 16 · Modelling trait evolution on phylogenies",
    "title": "Modelling trait evolution on phylogenies",
    "subtitle": "Use phylogenies as frameworks for studying trait evolution and comparative biology.",
    "big": "Phylogenetic comparative methods combine trees with trait data to test evolutionary hypotheses, reconstruct ancestral states and study diversification. Discrete and continuous traits require different models such as Mk, Brownian Motion and Ornstein-Uhlenbeck.",
    "tags": [
      "comparative methods",
      "discrete traits",
      "continuous traits",
      "Mk model",
      "BM",
      "OU",
      "ancestral states"
    ],
    "emphasis": [
      [
        "Trees become tools for process questions",
        "After inference, phylogenies can be used to study trait evolution."
      ],
      [
        "Trait type determines the model",
        "Discrete characters and continuous characters are modeled differently."
      ],
      [
        "Mk is a Markov model for discrete traits",
        "ER, SYM and ARD differ in transition-rate assumptions."
      ],
      [
        "BM and OU model continuous traits",
        "BM is a random walk; OU adds attraction toward an optimum."
      ]
    ],
    "sections": [
      [
        "Phylogenetic comparative methods",
        [
          "Comparative methods use trees and associated data to ask how traits evolve across clades.",
          "They can test models, reconstruct ancestral states, analyze diversification and study biogeography."
        ]
      ],
      [
        "Discrete traits",
        [
          "Traits with finite states, such as presence/absence or color categories, can be modeled with Mk models.",
          "ER assumes equal rates, SYM symmetric rates and ARD all rates different."
        ]
      ],
      [
        "Continuous traits",
        [
          "Measurements such as body length or beak depth are modeled with processes such as Brownian Motion or Ornstein-Uhlenbeck."
        ]
      ],
      [
        "Ancestral states",
        [
          "The practical focus is reconstructing likely ancestral states using a tree, observed tip states and an evolutionary model."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 16 · Modelar evolución de rasgos en filogenias",
    "title": "Modelar evolución de rasgos en filogenias",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "comparative methods",
      "discrete traits",
      "continuous traits",
      "Mk model",
      "BM",
      "OU",
      "ancestral states"
    ],
    "emphasis": [
      [
        "Trees become tools for process questions",
        "After inference, phylogenies can be used to study trait evolution."
      ],
      [
        "Trait type determines the model",
        "Discrete characters and continuous characters are modeled differently."
      ],
      [
        "Mk is a Markov model for discrete traits",
        "ER, SYM and ARD differ in transition-rate assumptions."
      ],
      [
        "BM and OU model continuous traits",
        "BM is a random walk; OU adds attraction toward an optimum."
      ]
    ],
    "sections": [
      [
        "Phylogenetic comparative methods",
        [
          "Comparative methods use trees and associated data to ask how traits evolve across clades.",
          "They can test models, reconstruct ancestral states, analyze diversification and study biogeography."
        ]
      ],
      [
        "Discrete traits",
        [
          "Traits with finite states, such as presence/absence or color categories, can be modeled with Mk models.",
          "ER assumes equal rates, SYM symmetric rates and ARD all rates different."
        ]
      ],
      [
        "Continuous traits",
        [
          "Measurements such as body length or beak depth are modeled with processes such as Brownian Motion or Ornstein-Uhlenbeck."
        ]
      ],
      [
        "Ancestral states",
        [
          "The practical focus is reconstructing likely ancestral states using a tree, observed tip states and an evolutionary model."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 16 · مدل‌سازی تکامل صفات روی تبارزایی‌ها",
    "title": "مدل‌سازی تکامل صفات روی تبارزایی‌ها",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "comparative methods",
      "discrete traits",
      "continuous traits",
      "Mk model",
      "BM",
      "OU",
      "ancestral states"
    ],
    "emphasis": [
      [
        "Trees become tools for process questions",
        "After inference, phylogenies can be used to study trait evolution."
      ],
      [
        "Trait type determines the model",
        "Discrete characters and continuous characters are modeled differently."
      ],
      [
        "Mk is a Markov model for discrete traits",
        "ER, SYM and ARD differ in transition-rate assumptions."
      ],
      [
        "BM and OU model continuous traits",
        "BM is a random walk; OU adds attraction toward an optimum."
      ]
    ],
    "sections": [
      [
        "Phylogenetic comparative methods",
        [
          "Comparative methods use trees and associated data to ask how traits evolve across clades.",
          "They can test models, reconstruct ancestral states, analyze diversification and study biogeography."
        ]
      ],
      [
        "Discrete traits",
        [
          "Traits with finite states, such as presence/absence or color categories, can be modeled with Mk models.",
          "ER assumes equal rates, SYM symmetric rates and ARD all rates different."
        ]
      ],
      [
        "Continuous traits",
        [
          "Measurements such as body length or beak depth are modeled with processes such as Brownian Motion or Ornstein-Uhlenbeck."
        ]
      ],
      [
        "Ancestral states",
        [
          "The practical focus is reconstructing likely ancestral states using a tree, observed tip states and an evolutionary model."
        ]
      ]
    ]
  }
};

export const lesson16Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes phylogenetic comparative methods?",
      "options": [
        "methods combining phylogenies with trait data to study evolution",
        "methods that ignore shared ancestry",
        "only sequence alignment",
        "only PCR"
      ],
      "answer": 0,
      "explanation": "The key idea is that methods combining phylogenies with trait data to study evolution.",
      "optionExplanations": [
        "Correct. Methods combining phylogenies with trait data to study evolution.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes discrete trait?",
      "options": [
        "a character with a finite number of states",
        "a continuously measured variable",
        "a branch length",
        "a posterior sample"
      ],
      "answer": 0,
      "explanation": "The key idea is that a character with a finite number of states.",
      "optionExplanations": [
        "Correct. A character with a finite number of states.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes continuous trait?",
      "options": [
        "a measurable trait varying along a scale",
        "a presence/absence state only",
        "a codon triplet",
        "a tree root"
      ],
      "answer": 0,
      "explanation": "The key idea is that a measurable trait varying along a scale.",
      "optionExplanations": [
        "Correct. A measurable trait varying along a scale.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Mk model?",
      "options": [
        "a distance matrix",
        "a gene alignment tool",
        "a Markov model for discrete character evolution",
        "a fossil calibration"
      ],
      "answer": 2,
      "explanation": "The key idea is that a Markov model for discrete character evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Mk model.",
        "This option refers to another concept or an overstatement, not to Mk model.",
        "Correct. A Markov model for discrete character evolution.",
        "This option refers to another concept or an overstatement, not to Mk model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ER model?",
      "options": [
        "equal transition rates among states",
        "all rates different",
        "no transitions",
        "continuous-only model"
      ],
      "answer": 0,
      "explanation": "The key idea is that equal transition rates among states.",
      "optionExplanations": [
        "Correct. Equal transition rates among states.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SYM model?",
      "options": [
        "all rates equal always",
        "no reversibility",
        "a bootstrap method",
        "symmetric transition rates between pairs of states"
      ],
      "answer": 3,
      "explanation": "The key idea is that symmetric transition rates between pairs of states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "Correct. Symmetric transition rates between pairs of states."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ARD model?",
      "options": [
        "equal rates only",
        "all transition rates different",
        "a strict clock",
        "a tree viewer"
      ],
      "answer": 1,
      "explanation": "The key idea is that all transition rates different.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ARD model.",
        "Correct. All transition rates different.",
        "This option refers to another concept or an overstatement, not to ARD model.",
        "This option refers to another concept or an overstatement, not to ARD model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Brownian Motion?",
      "options": [
        "a discrete-only Mk model",
        "a random-walk model of continuous trait evolution",
        "a branch support metric",
        "a gene duplication"
      ],
      "answer": 1,
      "explanation": "The key idea is that a random-walk model of continuous trait evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "Correct. A random-walk model of continuous trait evolution.",
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "This option refers to another concept or an overstatement, not to Brownian Motion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Ornstein-Uhlenbeck model?",
      "options": [
        "a continuous trait model with attraction toward an optimum",
        "a model with no selection-like pull",
        "a transcriptome assembler",
        "a rooted tree format"
      ],
      "answer": 0,
      "explanation": "The key idea is that a continuous trait model with attraction toward an optimum.",
      "optionExplanations": [
        "Correct. A continuous trait model with attraction toward an optimum.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ancestral state reconstruction?",
      "options": [
        "inferring likely trait states at internal nodes",
        "observing ancestors directly",
        "removing tips",
        "aligning sequences"
      ],
      "answer": 0,
      "explanation": "The key idea is that inferring likely trait states at internal nodes.",
      "optionExplanations": [
        "Correct. Inferring likely trait states at internal nodes.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes loading a tree and trait table?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to connect observed trait data to phylogeny",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to connect observed trait data to phylogeny.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "Correct. To connect observed trait data to phylogeny.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting Mk models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare ER, SYM and ARD transition assumptions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare ER, SYM and ARD transition assumptions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "Correct. To compare ER, SYM and ARD transition assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reconstructing ancestral states?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate likely internal-node character states"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate likely internal-node character states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "Correct. To estimate likely internal-node character states."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting BM/OU models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to compare continuous trait processes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to compare continuous trait processes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "Correct. To compare continuous trait processes.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting uncertainty?",
      "options": [
        "to avoid treating ancestral reconstructions as direct observations",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid treating ancestral reconstructions as direct observations.",
      "optionExplanations": [
        "Correct. To avoid treating ancestral reconstructions as direct observations.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes phylogenetic comparative methods?",
      "options": [
        "methods combining phylogenies with trait data to study evolution",
        "methods that ignore shared ancestry",
        "only sequence alignment",
        "only PCR"
      ],
      "answer": 0,
      "explanation": "The key idea is that methods combining phylogenies with trait data to study evolution.",
      "optionExplanations": [
        "Correct. Methods combining phylogenies with trait data to study evolution.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes discrete trait?",
      "options": [
        "a character with a finite number of states",
        "a continuously measured variable",
        "a branch length",
        "a posterior sample"
      ],
      "answer": 0,
      "explanation": "The key idea is that a character with a finite number of states.",
      "optionExplanations": [
        "Correct. A character with a finite number of states.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes continuous trait?",
      "options": [
        "a measurable trait varying along a scale",
        "a presence/absence state only",
        "a codon triplet",
        "a tree root"
      ],
      "answer": 0,
      "explanation": "The key idea is that a measurable trait varying along a scale.",
      "optionExplanations": [
        "Correct. A measurable trait varying along a scale.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Mk model?",
      "options": [
        "a distance matrix",
        "a gene alignment tool",
        "a Markov model for discrete character evolution",
        "a fossil calibration"
      ],
      "answer": 2,
      "explanation": "The key idea is that a Markov model for discrete character evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Mk model.",
        "This option refers to another concept or an overstatement, not to Mk model.",
        "Correct. A Markov model for discrete character evolution.",
        "This option refers to another concept or an overstatement, not to Mk model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ER model?",
      "options": [
        "equal transition rates among states",
        "all rates different",
        "no transitions",
        "continuous-only model"
      ],
      "answer": 0,
      "explanation": "The key idea is that equal transition rates among states.",
      "optionExplanations": [
        "Correct. Equal transition rates among states.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SYM model?",
      "options": [
        "all rates equal always",
        "no reversibility",
        "a bootstrap method",
        "symmetric transition rates between pairs of states"
      ],
      "answer": 3,
      "explanation": "The key idea is that symmetric transition rates between pairs of states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "Correct. Symmetric transition rates between pairs of states."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ARD model?",
      "options": [
        "equal rates only",
        "all transition rates different",
        "a strict clock",
        "a tree viewer"
      ],
      "answer": 1,
      "explanation": "The key idea is that all transition rates different.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ARD model.",
        "Correct. All transition rates different.",
        "This option refers to another concept or an overstatement, not to ARD model.",
        "This option refers to another concept or an overstatement, not to ARD model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Brownian Motion?",
      "options": [
        "a discrete-only Mk model",
        "a random-walk model of continuous trait evolution",
        "a branch support metric",
        "a gene duplication"
      ],
      "answer": 1,
      "explanation": "The key idea is that a random-walk model of continuous trait evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "Correct. A random-walk model of continuous trait evolution.",
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "This option refers to another concept or an overstatement, not to Brownian Motion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Ornstein-Uhlenbeck model?",
      "options": [
        "a continuous trait model with attraction toward an optimum",
        "a model with no selection-like pull",
        "a transcriptome assembler",
        "a rooted tree format"
      ],
      "answer": 0,
      "explanation": "The key idea is that a continuous trait model with attraction toward an optimum.",
      "optionExplanations": [
        "Correct. A continuous trait model with attraction toward an optimum.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ancestral state reconstruction?",
      "options": [
        "inferring likely trait states at internal nodes",
        "observing ancestors directly",
        "removing tips",
        "aligning sequences"
      ],
      "answer": 0,
      "explanation": "The key idea is that inferring likely trait states at internal nodes.",
      "optionExplanations": [
        "Correct. Inferring likely trait states at internal nodes.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes loading a tree and trait table?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to connect observed trait data to phylogeny",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to connect observed trait data to phylogeny.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "Correct. To connect observed trait data to phylogeny.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting Mk models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare ER, SYM and ARD transition assumptions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare ER, SYM and ARD transition assumptions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "Correct. To compare ER, SYM and ARD transition assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reconstructing ancestral states?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate likely internal-node character states"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate likely internal-node character states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "Correct. To estimate likely internal-node character states."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting BM/OU models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to compare continuous trait processes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to compare continuous trait processes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "Correct. To compare continuous trait processes.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting uncertainty?",
      "options": [
        "to avoid treating ancestral reconstructions as direct observations",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid treating ancestral reconstructions as direct observations.",
      "optionExplanations": [
        "Correct. To avoid treating ancestral reconstructions as direct observations.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes phylogenetic comparative methods?",
      "options": [
        "methods combining phylogenies with trait data to study evolution",
        "methods that ignore shared ancestry",
        "only sequence alignment",
        "only PCR"
      ],
      "answer": 0,
      "explanation": "The key idea is that methods combining phylogenies with trait data to study evolution.",
      "optionExplanations": [
        "Correct. Methods combining phylogenies with trait data to study evolution.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods.",
        "This option refers to another concept or an overstatement, not to phylogenetic comparative methods."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes discrete trait?",
      "options": [
        "a character with a finite number of states",
        "a continuously measured variable",
        "a branch length",
        "a posterior sample"
      ],
      "answer": 0,
      "explanation": "The key idea is that a character with a finite number of states.",
      "optionExplanations": [
        "Correct. A character with a finite number of states.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait.",
        "This option refers to another concept or an overstatement, not to discrete trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes continuous trait?",
      "options": [
        "a measurable trait varying along a scale",
        "a presence/absence state only",
        "a codon triplet",
        "a tree root"
      ],
      "answer": 0,
      "explanation": "The key idea is that a measurable trait varying along a scale.",
      "optionExplanations": [
        "Correct. A measurable trait varying along a scale.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait.",
        "This option refers to another concept or an overstatement, not to continuous trait."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Mk model?",
      "options": [
        "a distance matrix",
        "a gene alignment tool",
        "a Markov model for discrete character evolution",
        "a fossil calibration"
      ],
      "answer": 2,
      "explanation": "The key idea is that a Markov model for discrete character evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Mk model.",
        "This option refers to another concept or an overstatement, not to Mk model.",
        "Correct. A Markov model for discrete character evolution.",
        "This option refers to another concept or an overstatement, not to Mk model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ER model?",
      "options": [
        "equal transition rates among states",
        "all rates different",
        "no transitions",
        "continuous-only model"
      ],
      "answer": 0,
      "explanation": "The key idea is that equal transition rates among states.",
      "optionExplanations": [
        "Correct. Equal transition rates among states.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model.",
        "This option refers to another concept or an overstatement, not to ER model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes SYM model?",
      "options": [
        "all rates equal always",
        "no reversibility",
        "a bootstrap method",
        "symmetric transition rates between pairs of states"
      ],
      "answer": 3,
      "explanation": "The key idea is that symmetric transition rates between pairs of states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "This option refers to another concept or an overstatement, not to SYM model.",
        "Correct. Symmetric transition rates between pairs of states."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ARD model?",
      "options": [
        "equal rates only",
        "all transition rates different",
        "a strict clock",
        "a tree viewer"
      ],
      "answer": 1,
      "explanation": "The key idea is that all transition rates different.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ARD model.",
        "Correct. All transition rates different.",
        "This option refers to another concept or an overstatement, not to ARD model.",
        "This option refers to another concept or an overstatement, not to ARD model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Brownian Motion?",
      "options": [
        "a discrete-only Mk model",
        "a random-walk model of continuous trait evolution",
        "a branch support metric",
        "a gene duplication"
      ],
      "answer": 1,
      "explanation": "The key idea is that a random-walk model of continuous trait evolution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "Correct. A random-walk model of continuous trait evolution.",
        "This option refers to another concept or an overstatement, not to Brownian Motion.",
        "This option refers to another concept or an overstatement, not to Brownian Motion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Ornstein-Uhlenbeck model?",
      "options": [
        "a continuous trait model with attraction toward an optimum",
        "a model with no selection-like pull",
        "a transcriptome assembler",
        "a rooted tree format"
      ],
      "answer": 0,
      "explanation": "The key idea is that a continuous trait model with attraction toward an optimum.",
      "optionExplanations": [
        "Correct. A continuous trait model with attraction toward an optimum.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model.",
        "This option refers to another concept or an overstatement, not to Ornstein-Uhlenbeck model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ancestral state reconstruction?",
      "options": [
        "inferring likely trait states at internal nodes",
        "observing ancestors directly",
        "removing tips",
        "aligning sequences"
      ],
      "answer": 0,
      "explanation": "The key idea is that inferring likely trait states at internal nodes.",
      "optionExplanations": [
        "Correct. Inferring likely trait states at internal nodes.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction.",
        "This option refers to another concept or an overstatement, not to ancestral state reconstruction."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes loading a tree and trait table?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to connect observed trait data to phylogeny",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to connect observed trait data to phylogeny.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table.",
        "Correct. To connect observed trait data to phylogeny.",
        "This option refers to another concept or an overstatement, not to loading a tree and trait table."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting Mk models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to compare ER, SYM and ARD transition assumptions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to compare ER, SYM and ARD transition assumptions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "This option refers to another concept or an overstatement, not to fitting Mk models.",
        "Correct. To compare ER, SYM and ARD transition assumptions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reconstructing ancestral states?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate likely internal-node character states"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate likely internal-node character states.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "This option refers to another concept or an overstatement, not to reconstructing ancestral states.",
        "Correct. To estimate likely internal-node character states."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes fitting BM/OU models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to compare continuous trait processes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to compare continuous trait processes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models.",
        "Correct. To compare continuous trait processes.",
        "This option refers to another concept or an overstatement, not to fitting BM/OU models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting uncertainty?",
      "options": [
        "to avoid treating ancestral reconstructions as direct observations",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid treating ancestral reconstructions as direct observations.",
      "optionExplanations": [
        "Correct. To avoid treating ancestral reconstructions as direct observations.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty.",
        "This option refers to another concept or an overstatement, not to interpreting uncertainty."
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

export default function TraitEvolutionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

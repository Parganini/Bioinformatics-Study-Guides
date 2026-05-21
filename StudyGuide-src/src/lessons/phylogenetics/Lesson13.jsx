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
    "eyebrow": "Lesson 13 · Biases in phylogenetics",
    "title": "Biases in phylogenetics",
    "subtitle": "Recognize random noise and systematic model violations before they become false trees.",
    "big": "Phylogenetic error can arise from stochastic bias, when limited data fail to overcome noise, or systematic bias, when model assumptions are violated. Saturation, compositional heterogeneity and long branch attraction are recurring dangers.",
    "tags": [
      "stochastic bias",
      "systematic bias",
      "SRH assumptions",
      "saturation",
      "LBA",
      "composition"
    ],
    "emphasis": [
      [
        "More data helps stochastic error",
        "Longer alignments and more genes can average out random noise."
      ],
      [
        "More data can worsen systematic bias",
        "If the model is wrong, adding more biased data may strengthen the wrong answer."
      ],
      [
        "SRH assumptions are fragile",
        "Stationarity, reversibility and homogeneity are simplifying assumptions often violated."
      ],
      [
        "Saturation hides true change",
        "Multiple substitutions at the same site erase historical signal."
      ]
    ],
    "sections": [
      [
        "Stochastic bias",
        [
          "Random noise from limited data can overwhelm the true signal even under a correct model.",
          "Mitigation: more informative sites, longer alignments and support assessment."
        ]
      ],
      [
        "Systematic bias",
        [
          "Model violations can push inference toward the wrong topology with high confidence.",
          "Mitigation: test assumptions, filter problematic data, use better models or subsampling."
        ]
      ],
      [
        "SRH assumptions",
        [
          "Stationary: frequencies remain constant. Reversible: process is symmetric in time. Homogeneous: same model across branches."
        ]
      ],
      [
        "Saturation and LBA",
        [
          "Saturation occurs when multiple substitutions hit the same site.",
          "Long branch attraction clusters long branches due to convergent or unmodelled changes."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 13 · Sesgos en filogenética",
    "title": "Sesgos en filogenética",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "stochastic bias",
      "systematic bias",
      "SRH assumptions",
      "saturation",
      "LBA",
      "composition"
    ],
    "emphasis": [
      [
        "More data helps stochastic error",
        "Longer alignments and more genes can average out random noise."
      ],
      [
        "More data can worsen systematic bias",
        "If the model is wrong, adding more biased data may strengthen the wrong answer."
      ],
      [
        "SRH assumptions are fragile",
        "Stationarity, reversibility and homogeneity are simplifying assumptions often violated."
      ],
      [
        "Saturation hides true change",
        "Multiple substitutions at the same site erase historical signal."
      ]
    ],
    "sections": [
      [
        "Stochastic bias",
        [
          "Random noise from limited data can overwhelm the true signal even under a correct model.",
          "Mitigation: more informative sites, longer alignments and support assessment."
        ]
      ],
      [
        "Systematic bias",
        [
          "Model violations can push inference toward the wrong topology with high confidence.",
          "Mitigation: test assumptions, filter problematic data, use better models or subsampling."
        ]
      ],
      [
        "SRH assumptions",
        [
          "Stationary: frequencies remain constant. Reversible: process is symmetric in time. Homogeneous: same model across branches."
        ]
      ],
      [
        "Saturation and LBA",
        [
          "Saturation occurs when multiple substitutions hit the same site.",
          "Long branch attraction clusters long branches due to convergent or unmodelled changes."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 13 · سوگیری‌ها در تبارزایی",
    "title": "سوگیری‌ها در تبارزایی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "stochastic bias",
      "systematic bias",
      "SRH assumptions",
      "saturation",
      "LBA",
      "composition"
    ],
    "emphasis": [
      [
        "More data helps stochastic error",
        "Longer alignments and more genes can average out random noise."
      ],
      [
        "More data can worsen systematic bias",
        "If the model is wrong, adding more biased data may strengthen the wrong answer."
      ],
      [
        "SRH assumptions are fragile",
        "Stationarity, reversibility and homogeneity are simplifying assumptions often violated."
      ],
      [
        "Saturation hides true change",
        "Multiple substitutions at the same site erase historical signal."
      ]
    ],
    "sections": [
      [
        "Stochastic bias",
        [
          "Random noise from limited data can overwhelm the true signal even under a correct model.",
          "Mitigation: more informative sites, longer alignments and support assessment."
        ]
      ],
      [
        "Systematic bias",
        [
          "Model violations can push inference toward the wrong topology with high confidence.",
          "Mitigation: test assumptions, filter problematic data, use better models or subsampling."
        ]
      ],
      [
        "SRH assumptions",
        [
          "Stationary: frequencies remain constant. Reversible: process is symmetric in time. Homogeneous: same model across branches."
        ]
      ],
      [
        "Saturation and LBA",
        [
          "Saturation occurs when multiple substitutions hit the same site.",
          "Long branch attraction clusters long branches due to convergent or unmodelled changes."
        ]
      ]
    ]
  }
};

export const lesson13Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes stochastic bias?",
      "options": [
        "model violation with infinite data",
        "a taxon name",
        "a recording link",
        "random error due to limited data or weak signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that random error due to limited data or weak signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "Correct. Random error due to limited data or weak signal."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes systematic bias?",
      "options": [
        "random sampling noise only",
        "consistent error caused by wrong assumptions or model violations",
        "a tree viewer",
        "a codon position"
      ],
      "answer": 1,
      "explanation": "The key idea is that consistent error caused by wrong assumptions or model violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "Correct. Consistent error caused by wrong assumptions or model violations.",
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "This option refers to another concept or an overstatement, not to systematic bias."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "state frequencies remain constant over time",
        "all trees are rooted",
        "all genes are orthologous",
        "all taxa are sampled"
      ],
      "answer": 0,
      "explanation": "The key idea is that state frequencies remain constant over time.",
      "optionExplanations": [
        "Correct. State frequencies remain constant over time.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "tree tips can be rotated",
        "species are identical",
        "branches have no length",
        "the substitution process has the same statistical behavior forward and backward in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process has the same statistical behavior forward and backward in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process has the same statistical behavior forward and backward in time."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homogeneity?",
      "options": [
        "all sequences are equal",
        "all alignments are trimmed",
        "all clocks are strict",
        "the same process applies across branches or sites under the model"
      ],
      "answer": 3,
      "explanation": "The key idea is that the same process applies across branches or sites under the model.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "Correct. The same process applies across branches or sites under the model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes saturation?",
      "options": [
        "multiple substitutions at the same site obscuring true change",
        "lack of any mutation",
        "too many species names",
        "a support metric"
      ],
      "answer": 0,
      "explanation": "The key idea is that multiple substitutions at the same site obscuring true change.",
      "optionExplanations": [
        "Correct. Multiple substitutions at the same site obscuring true change.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes long branch attraction?",
      "options": [
        "a correct monophyletic signal always",
        "a Google Drive issue",
        "long branches clustering artefactually due to accumulated changes",
        "a codon model"
      ],
      "answer": 2,
      "explanation": "The key idea is that long branches clustering artefactually due to accumulated changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "Correct. Long branches clustering artefactually due to accumulated changes.",
        "This option refers to another concept or an overstatement, not to long branch attraction."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes compositional heterogeneity?",
      "options": [
        "differences in fonts",
        "differences in nucleotide/amino-acid composition among lineages or genes",
        "differences in recordings",
        "differences in taxon names only"
      ],
      "answer": 1,
      "explanation": "The key idea is that differences in nucleotide/amino-acid composition among lineages or genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "Correct. Differences in nucleotide/amino-acid composition among lineages or genes.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating stochastic error?",
      "options": [
        "using fewer genes always",
        "ignoring branch support",
        "removing all taxa",
        "adding more informative data and assessing support"
      ],
      "answer": 3,
      "explanation": "The key idea is that adding more informative data and assessing support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "Correct. Adding more informative data and assessing support."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating systematic error?",
      "options": [
        "blindly adding more biased data",
        "testing assumptions and using better-fitting models or subsampling",
        "using no model",
        "rotating the tree"
      ],
      "answer": 1,
      "explanation": "The key idea is that testing assumptions and using better-fitting models or subsampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "Correct. Testing assumptions and using better-fitting models or subsampling.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes subsampling genes?",
      "options": [
        "to create a final answer without checking the data",
        "to test whether signal is stable across datasets",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to test whether signal is stable across datasets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "Correct. To test whether signal is stable across datasets.",
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "This option refers to another concept or an overstatement, not to subsampling genes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes detecting saturation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to identify when observed differences underestimate true substitutions",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify when observed differences underestimate true substitutions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "Correct. To identify when observed differences underestimate true substitutions.",
        "This option refers to another concept or an overstatement, not to detecting saturation."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking compositional bias?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect SRH violations"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect SRH violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "Correct. To detect SRH violations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing analyses under filters?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see whether topology depends on problematic data",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see whether topology depends on problematic data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "Correct. To see whether topology depends on problematic data.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting high support carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid mistaking systematic bias for confidence"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid mistaking systematic bias for confidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "Correct. To avoid mistaking systematic bias for confidence."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes stochastic bias?",
      "options": [
        "model violation with infinite data",
        "a taxon name",
        "a recording link",
        "random error due to limited data or weak signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that random error due to limited data or weak signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "Correct. Random error due to limited data or weak signal."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes systematic bias?",
      "options": [
        "random sampling noise only",
        "consistent error caused by wrong assumptions or model violations",
        "a tree viewer",
        "a codon position"
      ],
      "answer": 1,
      "explanation": "The key idea is that consistent error caused by wrong assumptions or model violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "Correct. Consistent error caused by wrong assumptions or model violations.",
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "This option refers to another concept or an overstatement, not to systematic bias."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "state frequencies remain constant over time",
        "all trees are rooted",
        "all genes are orthologous",
        "all taxa are sampled"
      ],
      "answer": 0,
      "explanation": "The key idea is that state frequencies remain constant over time.",
      "optionExplanations": [
        "Correct. State frequencies remain constant over time.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "tree tips can be rotated",
        "species are identical",
        "branches have no length",
        "the substitution process has the same statistical behavior forward and backward in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process has the same statistical behavior forward and backward in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process has the same statistical behavior forward and backward in time."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homogeneity?",
      "options": [
        "all sequences are equal",
        "all alignments are trimmed",
        "all clocks are strict",
        "the same process applies across branches or sites under the model"
      ],
      "answer": 3,
      "explanation": "The key idea is that the same process applies across branches or sites under the model.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "Correct. The same process applies across branches or sites under the model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes saturation?",
      "options": [
        "multiple substitutions at the same site obscuring true change",
        "lack of any mutation",
        "too many species names",
        "a support metric"
      ],
      "answer": 0,
      "explanation": "The key idea is that multiple substitutions at the same site obscuring true change.",
      "optionExplanations": [
        "Correct. Multiple substitutions at the same site obscuring true change.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes long branch attraction?",
      "options": [
        "a correct monophyletic signal always",
        "a Google Drive issue",
        "long branches clustering artefactually due to accumulated changes",
        "a codon model"
      ],
      "answer": 2,
      "explanation": "The key idea is that long branches clustering artefactually due to accumulated changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "Correct. Long branches clustering artefactually due to accumulated changes.",
        "This option refers to another concept or an overstatement, not to long branch attraction."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes compositional heterogeneity?",
      "options": [
        "differences in fonts",
        "differences in nucleotide/amino-acid composition among lineages or genes",
        "differences in recordings",
        "differences in taxon names only"
      ],
      "answer": 1,
      "explanation": "The key idea is that differences in nucleotide/amino-acid composition among lineages or genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "Correct. Differences in nucleotide/amino-acid composition among lineages or genes.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating stochastic error?",
      "options": [
        "using fewer genes always",
        "ignoring branch support",
        "removing all taxa",
        "adding more informative data and assessing support"
      ],
      "answer": 3,
      "explanation": "The key idea is that adding more informative data and assessing support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "Correct. Adding more informative data and assessing support."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating systematic error?",
      "options": [
        "blindly adding more biased data",
        "testing assumptions and using better-fitting models or subsampling",
        "using no model",
        "rotating the tree"
      ],
      "answer": 1,
      "explanation": "The key idea is that testing assumptions and using better-fitting models or subsampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "Correct. Testing assumptions and using better-fitting models or subsampling.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes subsampling genes?",
      "options": [
        "to create a final answer without checking the data",
        "to test whether signal is stable across datasets",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to test whether signal is stable across datasets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "Correct. To test whether signal is stable across datasets.",
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "This option refers to another concept or an overstatement, not to subsampling genes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes detecting saturation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to identify when observed differences underestimate true substitutions",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify when observed differences underestimate true substitutions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "Correct. To identify when observed differences underestimate true substitutions.",
        "This option refers to another concept or an overstatement, not to detecting saturation."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking compositional bias?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect SRH violations"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect SRH violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "Correct. To detect SRH violations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing analyses under filters?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see whether topology depends on problematic data",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see whether topology depends on problematic data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "Correct. To see whether topology depends on problematic data.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting high support carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid mistaking systematic bias for confidence"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid mistaking systematic bias for confidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "Correct. To avoid mistaking systematic bias for confidence."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes stochastic bias?",
      "options": [
        "model violation with infinite data",
        "a taxon name",
        "a recording link",
        "random error due to limited data or weak signal"
      ],
      "answer": 3,
      "explanation": "The key idea is that random error due to limited data or weak signal.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "This option refers to another concept or an overstatement, not to stochastic bias.",
        "Correct. Random error due to limited data or weak signal."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes systematic bias?",
      "options": [
        "random sampling noise only",
        "consistent error caused by wrong assumptions or model violations",
        "a tree viewer",
        "a codon position"
      ],
      "answer": 1,
      "explanation": "The key idea is that consistent error caused by wrong assumptions or model violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "Correct. Consistent error caused by wrong assumptions or model violations.",
        "This option refers to another concept or an overstatement, not to systematic bias.",
        "This option refers to another concept or an overstatement, not to systematic bias."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes stationarity?",
      "options": [
        "state frequencies remain constant over time",
        "all trees are rooted",
        "all genes are orthologous",
        "all taxa are sampled"
      ],
      "answer": 0,
      "explanation": "The key idea is that state frequencies remain constant over time.",
      "optionExplanations": [
        "Correct. State frequencies remain constant over time.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity.",
        "This option refers to another concept or an overstatement, not to stationarity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes reversibility?",
      "options": [
        "tree tips can be rotated",
        "species are identical",
        "branches have no length",
        "the substitution process has the same statistical behavior forward and backward in time"
      ],
      "answer": 3,
      "explanation": "The key idea is that the substitution process has the same statistical behavior forward and backward in time.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "This option refers to another concept or an overstatement, not to reversibility.",
        "Correct. The substitution process has the same statistical behavior forward and backward in time."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homogeneity?",
      "options": [
        "all sequences are equal",
        "all alignments are trimmed",
        "all clocks are strict",
        "the same process applies across branches or sites under the model"
      ],
      "answer": 3,
      "explanation": "The key idea is that the same process applies across branches or sites under the model.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "This option refers to another concept or an overstatement, not to homogeneity.",
        "Correct. The same process applies across branches or sites under the model."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes saturation?",
      "options": [
        "multiple substitutions at the same site obscuring true change",
        "lack of any mutation",
        "too many species names",
        "a support metric"
      ],
      "answer": 0,
      "explanation": "The key idea is that multiple substitutions at the same site obscuring true change.",
      "optionExplanations": [
        "Correct. Multiple substitutions at the same site obscuring true change.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation.",
        "This option refers to another concept or an overstatement, not to saturation."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes long branch attraction?",
      "options": [
        "a correct monophyletic signal always",
        "a Google Drive issue",
        "long branches clustering artefactually due to accumulated changes",
        "a codon model"
      ],
      "answer": 2,
      "explanation": "The key idea is that long branches clustering artefactually due to accumulated changes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "This option refers to another concept or an overstatement, not to long branch attraction.",
        "Correct. Long branches clustering artefactually due to accumulated changes.",
        "This option refers to another concept or an overstatement, not to long branch attraction."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes compositional heterogeneity?",
      "options": [
        "differences in fonts",
        "differences in nucleotide/amino-acid composition among lineages or genes",
        "differences in recordings",
        "differences in taxon names only"
      ],
      "answer": 1,
      "explanation": "The key idea is that differences in nucleotide/amino-acid composition among lineages or genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "Correct. Differences in nucleotide/amino-acid composition among lineages or genes.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity.",
        "This option refers to another concept or an overstatement, not to compositional heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating stochastic error?",
      "options": [
        "using fewer genes always",
        "ignoring branch support",
        "removing all taxa",
        "adding more informative data and assessing support"
      ],
      "answer": 3,
      "explanation": "The key idea is that adding more informative data and assessing support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "This option refers to another concept or an overstatement, not to mitigating stochastic error.",
        "Correct. Adding more informative data and assessing support."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mitigating systematic error?",
      "options": [
        "blindly adding more biased data",
        "testing assumptions and using better-fitting models or subsampling",
        "using no model",
        "rotating the tree"
      ],
      "answer": 1,
      "explanation": "The key idea is that testing assumptions and using better-fitting models or subsampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "Correct. Testing assumptions and using better-fitting models or subsampling.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error.",
        "This option refers to another concept or an overstatement, not to mitigating systematic error."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes subsampling genes?",
      "options": [
        "to create a final answer without checking the data",
        "to test whether signal is stable across datasets",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to test whether signal is stable across datasets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "Correct. To test whether signal is stable across datasets.",
        "This option refers to another concept or an overstatement, not to subsampling genes.",
        "This option refers to another concept or an overstatement, not to subsampling genes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes detecting saturation?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to identify when observed differences underestimate true substitutions",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify when observed differences underestimate true substitutions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "This option refers to another concept or an overstatement, not to detecting saturation.",
        "Correct. To identify when observed differences underestimate true substitutions.",
        "This option refers to another concept or an overstatement, not to detecting saturation."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking compositional bias?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect SRH violations"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect SRH violations.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "This option refers to another concept or an overstatement, not to checking compositional bias.",
        "Correct. To detect SRH violations."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing analyses under filters?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see whether topology depends on problematic data",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see whether topology depends on problematic data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters.",
        "Correct. To see whether topology depends on problematic data.",
        "This option refers to another concept or an overstatement, not to comparing analyses under filters."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting high support carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid mistaking systematic bias for confidence"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid mistaking systematic bias for confidence.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "This option refers to another concept or an overstatement, not to interpreting high support carefully.",
        "Correct. To avoid mistaking systematic bias for confidence."
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

export default function BiasesPhylogeneticsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

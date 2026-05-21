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
    "eyebrow": "Lesson 10 · Support metrics",
    "title": "Support metrics",
    "subtitle": "Quantify how confident we should be in inferred branches.",
    "big": "Trees are hypotheses, so the lesson focuses on how to evaluate confidence: bootstrap, jackknife, aLRT, posterior probabilities, concordance factors and quartet-based support. Support values are summaries of evidence, not direct proof of truth.",
    "tags": [
      "bootstrap",
      "TBE",
      "aLRT",
      "jackknife",
      "gCF",
      "sCF",
      "PP",
      "quartets"
    ],
    "emphasis": [
      [
        "Trees are hypotheses",
        "A tree without support values can be misleadingly authoritative."
      ],
      [
        "Bootstrap is robustness, not truth",
        "Bootstrap proportions summarize how often a split appears under resampling."
      ],
      [
        "Different metrics answer different questions",
        "PP, bootstrap, aLRT and concordance factors are not interchangeable."
      ],
      [
        "Gene and site discordance matter",
        "High support can coexist with conflict among genes or sites."
      ]
    ],
    "sections": [
      [
        "Nonparametric bootstrap",
        [
          "Resample alignment columns with replacement, infer trees and count how often a bipartition appears.",
          "The result is a bootstrap proportion, often placed on the best tree."
        ]
      ],
      [
        "Other branch supports",
        [
          "aLRT approximates likelihood-ratio support; jackknife resamples by deleting subsets; TBE measures transfer distance for unstable taxa."
        ]
      ],
      [
        "Concordance factors",
        [
          "gCF measures how many gene trees support a branch; sCF measures site support.",
          "They help distinguish strong concatenated support from underlying conflict."
        ]
      ],
      [
        "Posterior probability",
        [
          "In Bayesian inference, posterior probabilities summarize clade frequency in the posterior sample.",
          "They are often high and should not be interpreted as identical to bootstrap."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 10 · Métricas de soporte",
    "title": "Métricas de soporte",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "bootstrap",
      "TBE",
      "aLRT",
      "jackknife",
      "gCF",
      "sCF",
      "PP",
      "quartets"
    ],
    "emphasis": [
      [
        "Trees are hypotheses",
        "A tree without support values can be misleadingly authoritative."
      ],
      [
        "Bootstrap is robustness, not truth",
        "Bootstrap proportions summarize how often a split appears under resampling."
      ],
      [
        "Different metrics answer different questions",
        "PP, bootstrap, aLRT and concordance factors are not interchangeable."
      ],
      [
        "Gene and site discordance matter",
        "High support can coexist with conflict among genes or sites."
      ]
    ],
    "sections": [
      [
        "Nonparametric bootstrap",
        [
          "Resample alignment columns with replacement, infer trees and count how often a bipartition appears.",
          "The result is a bootstrap proportion, often placed on the best tree."
        ]
      ],
      [
        "Other branch supports",
        [
          "aLRT approximates likelihood-ratio support; jackknife resamples by deleting subsets; TBE measures transfer distance for unstable taxa."
        ]
      ],
      [
        "Concordance factors",
        [
          "gCF measures how many gene trees support a branch; sCF measures site support.",
          "They help distinguish strong concatenated support from underlying conflict."
        ]
      ],
      [
        "Posterior probability",
        [
          "In Bayesian inference, posterior probabilities summarize clade frequency in the posterior sample.",
          "They are often high and should not be interpreted as identical to bootstrap."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 10 · معیارهای پشتیبانی",
    "title": "معیارهای پشتیبانی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "bootstrap",
      "TBE",
      "aLRT",
      "jackknife",
      "gCF",
      "sCF",
      "PP",
      "quartets"
    ],
    "emphasis": [
      [
        "Trees are hypotheses",
        "A tree without support values can be misleadingly authoritative."
      ],
      [
        "Bootstrap is robustness, not truth",
        "Bootstrap proportions summarize how often a split appears under resampling."
      ],
      [
        "Different metrics answer different questions",
        "PP, bootstrap, aLRT and concordance factors are not interchangeable."
      ],
      [
        "Gene and site discordance matter",
        "High support can coexist with conflict among genes or sites."
      ]
    ],
    "sections": [
      [
        "Nonparametric bootstrap",
        [
          "Resample alignment columns with replacement, infer trees and count how often a bipartition appears.",
          "The result is a bootstrap proportion, often placed on the best tree."
        ]
      ],
      [
        "Other branch supports",
        [
          "aLRT approximates likelihood-ratio support; jackknife resamples by deleting subsets; TBE measures transfer distance for unstable taxa."
        ]
      ],
      [
        "Concordance factors",
        [
          "gCF measures how many gene trees support a branch; sCF measures site support.",
          "They help distinguish strong concatenated support from underlying conflict."
        ]
      ],
      [
        "Posterior probability",
        [
          "In Bayesian inference, posterior probabilities summarize clade frequency in the posterior sample.",
          "They are often high and should not be interpreted as identical to bootstrap."
        ]
      ]
    ]
  }
};

export const lesson10Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes bootstrap proportion?",
      "options": [
        "percentage of resampled trees containing a given split",
        "probability the tree is objectively true",
        "the number of taxa",
        "a molecular clock rate"
      ],
      "answer": 0,
      "explanation": "The key idea is that percentage of resampled trees containing a given split.",
      "optionExplanations": [
        "Correct. Percentage of resampled trees containing a given split.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonparametric bootstrap?",
      "options": [
        "resampling species names without data",
        "resampling alignment columns with replacement",
        "assigning priors",
        "choosing a fossil"
      ],
      "answer": 1,
      "explanation": "The key idea is that resampling alignment columns with replacement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "Correct. Resampling alignment columns with replacement.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes bipartition support?",
      "options": [
        "support for a file name",
        "support for a primer",
        "support for a taxonomic rank",
        "support for a split induced by a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that support for a split induced by a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "Correct. Support for a split induced by a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBE?",
      "options": [
        "a codon model",
        "Transfer Bootstrap Expectation, useful when taxa move among nearby positions",
        "a dating method",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBE.",
        "Correct. Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
        "This option refers to another concept or an overstatement, not to TBE.",
        "This option refers to another concept or an overstatement, not to TBE."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes aLRT?",
      "options": [
        "an approximate likelihood-ratio test for branch support",
        "a sequence aligner",
        "a mitogenome assembler",
        "an outgroup"
      ],
      "answer": 0,
      "explanation": "The key idea is that an approximate likelihood-ratio test for branch support.",
      "optionExplanations": [
        "Correct. An approximate likelihood-ratio test for branch support.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes jackknife?",
      "options": [
        "a tree rotation",
        "a GTR parameter",
        "a gene duplication",
        "support based on deleting/resampling subsets of data"
      ],
      "answer": 3,
      "explanation": "The key idea is that support based on deleting/resampling subsets of data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "Correct. Support based on deleting/resampling subsets of data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "identical to p-distance",
        "Bayesian clade support from posterior samples",
        "a bootstrap alignment",
        "a branch length scale"
      ],
      "answer": 1,
      "explanation": "The key idea is that Bayesian clade support from posterior samples.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Bayesian clade support from posterior samples.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene concordance factor?",
      "options": [
        "proportion of nucleotide sites that are gaps",
        "proportion of gene trees supporting a branch",
        "proportion of taxa in outgroup",
        "proportion of recordings"
      ],
      "answer": 1,
      "explanation": "The key idea is that proportion of gene trees supporting a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "Correct. Proportion of gene trees supporting a branch.",
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "This option refers to another concept or an overstatement, not to gene concordance factor."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site concordance factor?",
      "options": [
        "a species tree program only",
        "a PCR protocol",
        "an alignment viewer",
        "site-level support for a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that site-level support for a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "Correct. Site-level support for a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes support values?",
      "options": [
        "evidence summaries that still depend on data and model assumptions",
        "direct observations of past speciation",
        "proof that no conflict exists",
        "automatic rooting"
      ],
      "answer": 0,
      "explanation": "The key idea is that evidence summaries that still depend on data and model assumptions.",
      "optionExplanations": [
        "Correct. Evidence summaries that still depend on data and model assumptions.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes generating bootstrap replicates?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate robustness of inferred bipartitions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate robustness of inferred bipartitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "Correct. To estimate robustness of inferred bipartitions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes mapping support on a tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to identify well-supported and uncertain branches"
      ],
      "answer": 3,
      "explanation": "The key idea is that to identify well-supported and uncertain branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "Correct. To identify well-supported and uncertain branches."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using approximate support methods?",
      "options": [
        "to create a final answer without checking the data",
        "to trade accuracy and speed in large analyses",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to trade accuracy and speed in large analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "Correct. To trade accuracy and speed in large analyses.",
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "This option refers to another concept or an overstatement, not to using approximate support methods."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gCF and sCF?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect gene/site conflict behind a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect gene/site conflict behind a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "Correct. To detect gene/site conflict behind a branch."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting low support?",
      "options": [
        "to avoid overclaiming relationships that data do not resolve",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid overclaiming relationships that data do not resolve.",
      "optionExplanations": [
        "Correct. To avoid overclaiming relationships that data do not resolve.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes bootstrap proportion?",
      "options": [
        "percentage of resampled trees containing a given split",
        "probability the tree is objectively true",
        "the number of taxa",
        "a molecular clock rate"
      ],
      "answer": 0,
      "explanation": "The key idea is that percentage of resampled trees containing a given split.",
      "optionExplanations": [
        "Correct. Percentage of resampled trees containing a given split.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonparametric bootstrap?",
      "options": [
        "resampling species names without data",
        "resampling alignment columns with replacement",
        "assigning priors",
        "choosing a fossil"
      ],
      "answer": 1,
      "explanation": "The key idea is that resampling alignment columns with replacement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "Correct. Resampling alignment columns with replacement.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes bipartition support?",
      "options": [
        "support for a file name",
        "support for a primer",
        "support for a taxonomic rank",
        "support for a split induced by a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that support for a split induced by a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "Correct. Support for a split induced by a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBE?",
      "options": [
        "a codon model",
        "Transfer Bootstrap Expectation, useful when taxa move among nearby positions",
        "a dating method",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBE.",
        "Correct. Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
        "This option refers to another concept or an overstatement, not to TBE.",
        "This option refers to another concept or an overstatement, not to TBE."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes aLRT?",
      "options": [
        "an approximate likelihood-ratio test for branch support",
        "a sequence aligner",
        "a mitogenome assembler",
        "an outgroup"
      ],
      "answer": 0,
      "explanation": "The key idea is that an approximate likelihood-ratio test for branch support.",
      "optionExplanations": [
        "Correct. An approximate likelihood-ratio test for branch support.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes jackknife?",
      "options": [
        "a tree rotation",
        "a GTR parameter",
        "a gene duplication",
        "support based on deleting/resampling subsets of data"
      ],
      "answer": 3,
      "explanation": "The key idea is that support based on deleting/resampling subsets of data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "Correct. Support based on deleting/resampling subsets of data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "identical to p-distance",
        "Bayesian clade support from posterior samples",
        "a bootstrap alignment",
        "a branch length scale"
      ],
      "answer": 1,
      "explanation": "The key idea is that Bayesian clade support from posterior samples.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Bayesian clade support from posterior samples.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene concordance factor?",
      "options": [
        "proportion of nucleotide sites that are gaps",
        "proportion of gene trees supporting a branch",
        "proportion of taxa in outgroup",
        "proportion of recordings"
      ],
      "answer": 1,
      "explanation": "The key idea is that proportion of gene trees supporting a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "Correct. Proportion of gene trees supporting a branch.",
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "This option refers to another concept or an overstatement, not to gene concordance factor."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site concordance factor?",
      "options": [
        "a species tree program only",
        "a PCR protocol",
        "an alignment viewer",
        "site-level support for a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that site-level support for a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "Correct. Site-level support for a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes support values?",
      "options": [
        "evidence summaries that still depend on data and model assumptions",
        "direct observations of past speciation",
        "proof that no conflict exists",
        "automatic rooting"
      ],
      "answer": 0,
      "explanation": "The key idea is that evidence summaries that still depend on data and model assumptions.",
      "optionExplanations": [
        "Correct. Evidence summaries that still depend on data and model assumptions.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes generating bootstrap replicates?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate robustness of inferred bipartitions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate robustness of inferred bipartitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "Correct. To estimate robustness of inferred bipartitions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes mapping support on a tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to identify well-supported and uncertain branches"
      ],
      "answer": 3,
      "explanation": "The key idea is that to identify well-supported and uncertain branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "Correct. To identify well-supported and uncertain branches."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using approximate support methods?",
      "options": [
        "to create a final answer without checking the data",
        "to trade accuracy and speed in large analyses",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to trade accuracy and speed in large analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "Correct. To trade accuracy and speed in large analyses.",
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "This option refers to another concept or an overstatement, not to using approximate support methods."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gCF and sCF?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect gene/site conflict behind a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect gene/site conflict behind a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "Correct. To detect gene/site conflict behind a branch."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting low support?",
      "options": [
        "to avoid overclaiming relationships that data do not resolve",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid overclaiming relationships that data do not resolve.",
      "optionExplanations": [
        "Correct. To avoid overclaiming relationships that data do not resolve.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes bootstrap proportion?",
      "options": [
        "percentage of resampled trees containing a given split",
        "probability the tree is objectively true",
        "the number of taxa",
        "a molecular clock rate"
      ],
      "answer": 0,
      "explanation": "The key idea is that percentage of resampled trees containing a given split.",
      "optionExplanations": [
        "Correct. Percentage of resampled trees containing a given split.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion.",
        "This option refers to another concept or an overstatement, not to bootstrap proportion."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonparametric bootstrap?",
      "options": [
        "resampling species names without data",
        "resampling alignment columns with replacement",
        "assigning priors",
        "choosing a fossil"
      ],
      "answer": 1,
      "explanation": "The key idea is that resampling alignment columns with replacement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "Correct. Resampling alignment columns with replacement.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap.",
        "This option refers to another concept or an overstatement, not to nonparametric bootstrap."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes bipartition support?",
      "options": [
        "support for a file name",
        "support for a primer",
        "support for a taxonomic rank",
        "support for a split induced by a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that support for a split induced by a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "This option refers to another concept or an overstatement, not to bipartition support.",
        "Correct. Support for a split induced by a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes TBE?",
      "options": [
        "a codon model",
        "Transfer Bootstrap Expectation, useful when taxa move among nearby positions",
        "a dating method",
        "a transcript folder"
      ],
      "answer": 1,
      "explanation": "The key idea is that Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to TBE.",
        "Correct. Transfer Bootstrap Expectation, useful when taxa move among nearby positions.",
        "This option refers to another concept or an overstatement, not to TBE.",
        "This option refers to another concept or an overstatement, not to TBE."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes aLRT?",
      "options": [
        "an approximate likelihood-ratio test for branch support",
        "a sequence aligner",
        "a mitogenome assembler",
        "an outgroup"
      ],
      "answer": 0,
      "explanation": "The key idea is that an approximate likelihood-ratio test for branch support.",
      "optionExplanations": [
        "Correct. An approximate likelihood-ratio test for branch support.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT.",
        "This option refers to another concept or an overstatement, not to aLRT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes jackknife?",
      "options": [
        "a tree rotation",
        "a GTR parameter",
        "a gene duplication",
        "support based on deleting/resampling subsets of data"
      ],
      "answer": 3,
      "explanation": "The key idea is that support based on deleting/resampling subsets of data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "This option refers to another concept or an overstatement, not to jackknife.",
        "Correct. Support based on deleting/resampling subsets of data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "identical to p-distance",
        "Bayesian clade support from posterior samples",
        "a bootstrap alignment",
        "a branch length scale"
      ],
      "answer": 1,
      "explanation": "The key idea is that Bayesian clade support from posterior samples.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Bayesian clade support from posterior samples.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene concordance factor?",
      "options": [
        "proportion of nucleotide sites that are gaps",
        "proportion of gene trees supporting a branch",
        "proportion of taxa in outgroup",
        "proportion of recordings"
      ],
      "answer": 1,
      "explanation": "The key idea is that proportion of gene trees supporting a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "Correct. Proportion of gene trees supporting a branch.",
        "This option refers to another concept or an overstatement, not to gene concordance factor.",
        "This option refers to another concept or an overstatement, not to gene concordance factor."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes site concordance factor?",
      "options": [
        "a species tree program only",
        "a PCR protocol",
        "an alignment viewer",
        "site-level support for a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that site-level support for a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "This option refers to another concept or an overstatement, not to site concordance factor.",
        "Correct. Site-level support for a branch."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes support values?",
      "options": [
        "evidence summaries that still depend on data and model assumptions",
        "direct observations of past speciation",
        "proof that no conflict exists",
        "automatic rooting"
      ],
      "answer": 0,
      "explanation": "The key idea is that evidence summaries that still depend on data and model assumptions.",
      "optionExplanations": [
        "Correct. Evidence summaries that still depend on data and model assumptions.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values.",
        "This option refers to another concept or an overstatement, not to support values."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes generating bootstrap replicates?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to estimate robustness of inferred bipartitions"
      ],
      "answer": 3,
      "explanation": "The key idea is that to estimate robustness of inferred bipartitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "This option refers to another concept or an overstatement, not to generating bootstrap replicates.",
        "Correct. To estimate robustness of inferred bipartitions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes mapping support on a tree?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to identify well-supported and uncertain branches"
      ],
      "answer": 3,
      "explanation": "The key idea is that to identify well-supported and uncertain branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "This option refers to another concept or an overstatement, not to mapping support on a tree.",
        "Correct. To identify well-supported and uncertain branches."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using approximate support methods?",
      "options": [
        "to create a final answer without checking the data",
        "to trade accuracy and speed in large analyses",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to trade accuracy and speed in large analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "Correct. To trade accuracy and speed in large analyses.",
        "This option refers to another concept or an overstatement, not to using approximate support methods.",
        "This option refers to another concept or an overstatement, not to using approximate support methods."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gCF and sCF?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect gene/site conflict behind a branch"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect gene/site conflict behind a branch.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "This option refers to another concept or an overstatement, not to comparing gCF and sCF.",
        "Correct. To detect gene/site conflict behind a branch."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting low support?",
      "options": [
        "to avoid overclaiming relationships that data do not resolve",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to avoid overclaiming relationships that data do not resolve.",
      "optionExplanations": [
        "Correct. To avoid overclaiming relationships that data do not resolve.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support.",
        "This option refers to another concept or an overstatement, not to interpreting low support."
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

export default function SupportMetricsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

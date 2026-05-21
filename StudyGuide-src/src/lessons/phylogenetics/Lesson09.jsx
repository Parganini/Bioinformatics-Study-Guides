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
    "eyebrow": "Lesson 09 · Bayesian Inference",
    "title": "Bayesian Inference",
    "subtitle": "Use Bayes’ theorem and MCMC to approximate the posterior distribution of trees.",
    "big": "Bayesian phylogenetics estimates P(model/tree | data). It combines likelihood, priors and marginal likelihood; because direct computation is impossible for realistic tree spaces, MCMC is used to sample from the posterior distribution.",
    "tags": [
      "Bayes theorem",
      "posterior",
      "prior",
      "likelihood",
      "MCMC",
      "burn-in",
      "Tracer"
    ],
    "emphasis": [
      [
        "BI asks a different probability question",
        "It estimates the probability of the model/tree given the data."
      ],
      [
        "Priors are part of the model",
        "They encode assumptions before seeing the data."
      ],
      [
        "MCMC avoids impossible integration",
        "It samples the posterior rather than enumerating all trees and parameters."
      ],
      [
        "Convergence matters",
        "Posterior summaries are meaningful only if chains have mixed and converged."
      ]
    ],
    "sections": [
      [
        "Bayes theorem",
        [
          "Posterior probability is proportional to likelihood times prior, divided by the marginal likelihood.",
          "In phylogenetics, the model includes trees and evolutionary parameters."
        ]
      ],
      [
        "Why MCMC?",
        [
          "The number of possible trees and parameters is enormous.",
          "MCMC proposes changes, accepts or rejects them, and builds a sample from the posterior distribution."
        ]
      ],
      [
        "Posterior probabilities",
        [
          "Posterior probabilities are often used as clade support in Bayesian analyses.",
          "They are not the same as bootstrap proportions."
        ]
      ],
      [
        "Diagnostics",
        [
          "Burn-in, ESS and trace inspection are needed to ensure the chain gives a credible posterior sample."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 09 · Inferencia Bayesiana",
    "title": "Inferencia Bayesiana",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "Bayes theorem",
      "posterior",
      "prior",
      "likelihood",
      "MCMC",
      "burn-in",
      "Tracer"
    ],
    "emphasis": [
      [
        "BI asks a different probability question",
        "It estimates the probability of the model/tree given the data."
      ],
      [
        "Priors are part of the model",
        "They encode assumptions before seeing the data."
      ],
      [
        "MCMC avoids impossible integration",
        "It samples the posterior rather than enumerating all trees and parameters."
      ],
      [
        "Convergence matters",
        "Posterior summaries are meaningful only if chains have mixed and converged."
      ]
    ],
    "sections": [
      [
        "Bayes theorem",
        [
          "Posterior probability is proportional to likelihood times prior, divided by the marginal likelihood.",
          "In phylogenetics, the model includes trees and evolutionary parameters."
        ]
      ],
      [
        "Why MCMC?",
        [
          "The number of possible trees and parameters is enormous.",
          "MCMC proposes changes, accepts or rejects them, and builds a sample from the posterior distribution."
        ]
      ],
      [
        "Posterior probabilities",
        [
          "Posterior probabilities are often used as clade support in Bayesian analyses.",
          "They are not the same as bootstrap proportions."
        ]
      ],
      [
        "Diagnostics",
        [
          "Burn-in, ESS and trace inspection are needed to ensure the chain gives a credible posterior sample."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 09 · استنباط بیزی",
    "title": "استنباط بیزی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "Bayes theorem",
      "posterior",
      "prior",
      "likelihood",
      "MCMC",
      "burn-in",
      "Tracer"
    ],
    "emphasis": [
      [
        "BI asks a different probability question",
        "It estimates the probability of the model/tree given the data."
      ],
      [
        "Priors are part of the model",
        "They encode assumptions before seeing the data."
      ],
      [
        "MCMC avoids impossible integration",
        "It samples the posterior rather than enumerating all trees and parameters."
      ],
      [
        "Convergence matters",
        "Posterior summaries are meaningful only if chains have mixed and converged."
      ]
    ],
    "sections": [
      [
        "Bayes theorem",
        [
          "Posterior probability is proportional to likelihood times prior, divided by the marginal likelihood.",
          "In phylogenetics, the model includes trees and evolutionary parameters."
        ]
      ],
      [
        "Why MCMC?",
        [
          "The number of possible trees and parameters is enormous.",
          "MCMC proposes changes, accepts or rejects them, and builds a sample from the posterior distribution."
        ]
      ],
      [
        "Posterior probabilities",
        [
          "Posterior probabilities are often used as clade support in Bayesian analyses.",
          "They are not the same as bootstrap proportions."
        ]
      ],
      [
        "Diagnostics",
        [
          "Burn-in, ESS and trace inspection are needed to ensure the chain gives a credible posterior sample."
        ]
      ]
    ]
  }
};

export const lesson09Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes Bayesian Inference in phylogenetics?",
      "options": [
        "maximizing P(D|M) only",
        "trimming alignments",
        "naming taxa",
        "estimating posterior probabilities of trees/models given the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating posterior probabilities of trees/models given the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "Correct. Estimating posterior probabilities of trees/models given the data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "raw frequency of nucleotides",
        "a distance matrix",
        "a gap penalty",
        "probability of a model/tree after considering data and priors"
      ],
      "answer": 3,
      "explanation": "The key idea is that probability of a model/tree after considering data and priors.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Probability of a model/tree after considering data and priors."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes prior probability?",
      "options": [
        "the final tree drawing",
        "belief or assumption before seeing the data",
        "a bootstrap replicate",
        "an orthogroup"
      ],
      "answer": 1,
      "explanation": "The key idea is that belief or assumption before seeing the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to prior probability.",
        "Correct. Belief or assumption before seeing the data.",
        "This option refers to another concept or an overstatement, not to prior probability.",
        "This option refers to another concept or an overstatement, not to prior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes likelihood in Bayes?",
      "options": [
        "P(model | data) itself",
        "P(data | model), one component of Bayes theorem",
        "the taxon name",
        "the MCMC burn-in"
      ],
      "answer": 1,
      "explanation": "The key idea is that P(data | model), one component of Bayes theorem.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "Correct. P(data | model), one component of Bayes theorem.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes marginal likelihood?",
      "options": [
        "a branch length",
        "a tip label",
        "a sequence alignment",
        "the probability of the data averaged over model space"
      ],
      "answer": 3,
      "explanation": "The key idea is that the probability of the data averaged over model space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "Correct. The probability of the data averaged over model space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MCMC?",
      "options": [
        "a distance algorithm",
        "a gene alignment program",
        "a sampling approach used to approximate the posterior distribution",
        "a taxonomic code"
      ],
      "answer": 2,
      "explanation": "The key idea is that a sampling approach used to approximate the posterior distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MCMC.",
        "This option refers to another concept or an overstatement, not to MCMC.",
        "Correct. A sampling approach used to approximate the posterior distribution.",
        "This option refers to another concept or an overstatement, not to MCMC."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes burn-in?",
      "options": [
        "poorly aligned alignment columns",
        "the first taxon in a tree",
        "a fossil calibration",
        "early MCMC samples discarded before summarizing the posterior"
      ],
      "answer": 3,
      "explanation": "The key idea is that early MCMC samples discarded before summarizing the posterior.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "Correct. Early MCMC samples discarded before summarizing the posterior."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ESS?",
      "options": [
        "evolutionary species status",
        "effective sample size, a diagnostic of sampling quality",
        "external sequence site",
        "equal substitution score"
      ],
      "answer": 1,
      "explanation": "The key idea is that effective sample size, a diagnostic of sampling quality.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ESS.",
        "Correct. Effective sample size, a diagnostic of sampling quality.",
        "This option refers to another concept or an overstatement, not to ESS.",
        "This option refers to another concept or an overstatement, not to ESS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior clade support?",
      "options": [
        "raw sequence similarity",
        "the number of species sampled",
        "a primer sequence",
        "frequency/probability of clades in the posterior sample"
      ],
      "answer": 3,
      "explanation": "The key idea is that frequency/probability of clades in the posterior sample.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "Correct. Frequency/probability of clades in the posterior sample."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes convergence?",
      "options": [
        "a synonym of homology",
        "the condition that independent chains are sampling the same target distribution",
        "proof that a tree is true",
        "a type of gap"
      ],
      "answer": 1,
      "explanation": "The key idea is that the condition that independent chains are sampling the same target distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to convergence.",
        "Correct. The condition that independent chains are sampling the same target distribution.",
        "This option refers to another concept or an overstatement, not to convergence.",
        "This option refers to another concept or an overstatement, not to convergence."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Bayesian software?",
      "options": [
        "to create a final answer without checking the data",
        "to sample trees and parameters rather than search for one best tree",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to sample trees and parameters rather than search for one best tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "Correct. To sample trees and parameters rather than search for one best tree.",
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "This option refers to another concept or an overstatement, not to running Bayesian software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting traces?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to check whether parameters appear stable after burn-in"
      ],
      "answer": 3,
      "explanation": "The key idea is that to check whether parameters appear stable after burn-in.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "Correct. To check whether parameters appear stable after burn-in."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking ESS values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to evaluate whether sampling is sufficient"
      ],
      "answer": 3,
      "explanation": "The key idea is that to evaluate whether sampling is sufficient.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "Correct. To evaluate whether sampling is sufficient."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes summarizing posterior trees?",
      "options": [
        "to create a final answer without checking the data",
        "to obtain consensus trees and clade posterior probabilities",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to obtain consensus trees and clade posterior probabilities.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "Correct. To obtain consensus trees and clade posterior probabilities.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing ML and BI output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to distinguish likelihood optimization from posterior sampling",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to distinguish likelihood optimization from posterior sampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "Correct. To distinguish likelihood optimization from posterior sampling.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes Bayesian Inference in phylogenetics?",
      "options": [
        "maximizing P(D|M) only",
        "trimming alignments",
        "naming taxa",
        "estimating posterior probabilities of trees/models given the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating posterior probabilities of trees/models given the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "Correct. Estimating posterior probabilities of trees/models given the data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "raw frequency of nucleotides",
        "a distance matrix",
        "a gap penalty",
        "probability of a model/tree after considering data and priors"
      ],
      "answer": 3,
      "explanation": "The key idea is that probability of a model/tree after considering data and priors.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Probability of a model/tree after considering data and priors."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes prior probability?",
      "options": [
        "the final tree drawing",
        "belief or assumption before seeing the data",
        "a bootstrap replicate",
        "an orthogroup"
      ],
      "answer": 1,
      "explanation": "The key idea is that belief or assumption before seeing the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to prior probability.",
        "Correct. Belief or assumption before seeing the data.",
        "This option refers to another concept or an overstatement, not to prior probability.",
        "This option refers to another concept or an overstatement, not to prior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes likelihood in Bayes?",
      "options": [
        "P(model | data) itself",
        "P(data | model), one component of Bayes theorem",
        "the taxon name",
        "the MCMC burn-in"
      ],
      "answer": 1,
      "explanation": "The key idea is that P(data | model), one component of Bayes theorem.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "Correct. P(data | model), one component of Bayes theorem.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes marginal likelihood?",
      "options": [
        "a branch length",
        "a tip label",
        "a sequence alignment",
        "the probability of the data averaged over model space"
      ],
      "answer": 3,
      "explanation": "The key idea is that the probability of the data averaged over model space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "Correct. The probability of the data averaged over model space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MCMC?",
      "options": [
        "a distance algorithm",
        "a gene alignment program",
        "a sampling approach used to approximate the posterior distribution",
        "a taxonomic code"
      ],
      "answer": 2,
      "explanation": "The key idea is that a sampling approach used to approximate the posterior distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MCMC.",
        "This option refers to another concept or an overstatement, not to MCMC.",
        "Correct. A sampling approach used to approximate the posterior distribution.",
        "This option refers to another concept or an overstatement, not to MCMC."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes burn-in?",
      "options": [
        "poorly aligned alignment columns",
        "the first taxon in a tree",
        "a fossil calibration",
        "early MCMC samples discarded before summarizing the posterior"
      ],
      "answer": 3,
      "explanation": "The key idea is that early MCMC samples discarded before summarizing the posterior.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "Correct. Early MCMC samples discarded before summarizing the posterior."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ESS?",
      "options": [
        "evolutionary species status",
        "effective sample size, a diagnostic of sampling quality",
        "external sequence site",
        "equal substitution score"
      ],
      "answer": 1,
      "explanation": "The key idea is that effective sample size, a diagnostic of sampling quality.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ESS.",
        "Correct. Effective sample size, a diagnostic of sampling quality.",
        "This option refers to another concept or an overstatement, not to ESS.",
        "This option refers to another concept or an overstatement, not to ESS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior clade support?",
      "options": [
        "raw sequence similarity",
        "the number of species sampled",
        "a primer sequence",
        "frequency/probability of clades in the posterior sample"
      ],
      "answer": 3,
      "explanation": "The key idea is that frequency/probability of clades in the posterior sample.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "Correct. Frequency/probability of clades in the posterior sample."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes convergence?",
      "options": [
        "a synonym of homology",
        "the condition that independent chains are sampling the same target distribution",
        "proof that a tree is true",
        "a type of gap"
      ],
      "answer": 1,
      "explanation": "The key idea is that the condition that independent chains are sampling the same target distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to convergence.",
        "Correct. The condition that independent chains are sampling the same target distribution.",
        "This option refers to another concept or an overstatement, not to convergence.",
        "This option refers to another concept or an overstatement, not to convergence."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Bayesian software?",
      "options": [
        "to create a final answer without checking the data",
        "to sample trees and parameters rather than search for one best tree",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to sample trees and parameters rather than search for one best tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "Correct. To sample trees and parameters rather than search for one best tree.",
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "This option refers to another concept or an overstatement, not to running Bayesian software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting traces?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to check whether parameters appear stable after burn-in"
      ],
      "answer": 3,
      "explanation": "The key idea is that to check whether parameters appear stable after burn-in.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "Correct. To check whether parameters appear stable after burn-in."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking ESS values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to evaluate whether sampling is sufficient"
      ],
      "answer": 3,
      "explanation": "The key idea is that to evaluate whether sampling is sufficient.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "Correct. To evaluate whether sampling is sufficient."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes summarizing posterior trees?",
      "options": [
        "to create a final answer without checking the data",
        "to obtain consensus trees and clade posterior probabilities",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to obtain consensus trees and clade posterior probabilities.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "Correct. To obtain consensus trees and clade posterior probabilities.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing ML and BI output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to distinguish likelihood optimization from posterior sampling",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to distinguish likelihood optimization from posterior sampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "Correct. To distinguish likelihood optimization from posterior sampling.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes Bayesian Inference in phylogenetics?",
      "options": [
        "maximizing P(D|M) only",
        "trimming alignments",
        "naming taxa",
        "estimating posterior probabilities of trees/models given the data"
      ],
      "answer": 3,
      "explanation": "The key idea is that estimating posterior probabilities of trees/models given the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "This option refers to another concept or an overstatement, not to Bayesian Inference in phylogenetics.",
        "Correct. Estimating posterior probabilities of trees/models given the data."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior probability?",
      "options": [
        "raw frequency of nucleotides",
        "a distance matrix",
        "a gap penalty",
        "probability of a model/tree after considering data and priors"
      ],
      "answer": 3,
      "explanation": "The key idea is that probability of a model/tree after considering data and priors.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "This option refers to another concept or an overstatement, not to posterior probability.",
        "Correct. Probability of a model/tree after considering data and priors."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes prior probability?",
      "options": [
        "the final tree drawing",
        "belief or assumption before seeing the data",
        "a bootstrap replicate",
        "an orthogroup"
      ],
      "answer": 1,
      "explanation": "The key idea is that belief or assumption before seeing the data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to prior probability.",
        "Correct. Belief or assumption before seeing the data.",
        "This option refers to another concept or an overstatement, not to prior probability.",
        "This option refers to another concept or an overstatement, not to prior probability."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes likelihood in Bayes?",
      "options": [
        "P(model | data) itself",
        "P(data | model), one component of Bayes theorem",
        "the taxon name",
        "the MCMC burn-in"
      ],
      "answer": 1,
      "explanation": "The key idea is that P(data | model), one component of Bayes theorem.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "Correct. P(data | model), one component of Bayes theorem.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes.",
        "This option refers to another concept or an overstatement, not to likelihood in Bayes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes marginal likelihood?",
      "options": [
        "a branch length",
        "a tip label",
        "a sequence alignment",
        "the probability of the data averaged over model space"
      ],
      "answer": 3,
      "explanation": "The key idea is that the probability of the data averaged over model space.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "This option refers to another concept or an overstatement, not to marginal likelihood.",
        "Correct. The probability of the data averaged over model space."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MCMC?",
      "options": [
        "a distance algorithm",
        "a gene alignment program",
        "a sampling approach used to approximate the posterior distribution",
        "a taxonomic code"
      ],
      "answer": 2,
      "explanation": "The key idea is that a sampling approach used to approximate the posterior distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MCMC.",
        "This option refers to another concept or an overstatement, not to MCMC.",
        "Correct. A sampling approach used to approximate the posterior distribution.",
        "This option refers to another concept or an overstatement, not to MCMC."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes burn-in?",
      "options": [
        "poorly aligned alignment columns",
        "the first taxon in a tree",
        "a fossil calibration",
        "early MCMC samples discarded before summarizing the posterior"
      ],
      "answer": 3,
      "explanation": "The key idea is that early MCMC samples discarded before summarizing the posterior.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "This option refers to another concept or an overstatement, not to burn-in.",
        "Correct. Early MCMC samples discarded before summarizing the posterior."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ESS?",
      "options": [
        "evolutionary species status",
        "effective sample size, a diagnostic of sampling quality",
        "external sequence site",
        "equal substitution score"
      ],
      "answer": 1,
      "explanation": "The key idea is that effective sample size, a diagnostic of sampling quality.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ESS.",
        "Correct. Effective sample size, a diagnostic of sampling quality.",
        "This option refers to another concept or an overstatement, not to ESS.",
        "This option refers to another concept or an overstatement, not to ESS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes posterior clade support?",
      "options": [
        "raw sequence similarity",
        "the number of species sampled",
        "a primer sequence",
        "frequency/probability of clades in the posterior sample"
      ],
      "answer": 3,
      "explanation": "The key idea is that frequency/probability of clades in the posterior sample.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "This option refers to another concept or an overstatement, not to posterior clade support.",
        "Correct. Frequency/probability of clades in the posterior sample."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes convergence?",
      "options": [
        "a synonym of homology",
        "the condition that independent chains are sampling the same target distribution",
        "proof that a tree is true",
        "a type of gap"
      ],
      "answer": 1,
      "explanation": "The key idea is that the condition that independent chains are sampling the same target distribution.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to convergence.",
        "Correct. The condition that independent chains are sampling the same target distribution.",
        "This option refers to another concept or an overstatement, not to convergence.",
        "This option refers to another concept or an overstatement, not to convergence."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running Bayesian software?",
      "options": [
        "to create a final answer without checking the data",
        "to sample trees and parameters rather than search for one best tree",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to sample trees and parameters rather than search for one best tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "Correct. To sample trees and parameters rather than search for one best tree.",
        "This option refers to another concept or an overstatement, not to running Bayesian software.",
        "This option refers to another concept or an overstatement, not to running Bayesian software."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting traces?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to check whether parameters appear stable after burn-in"
      ],
      "answer": 3,
      "explanation": "The key idea is that to check whether parameters appear stable after burn-in.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "This option refers to another concept or an overstatement, not to inspecting traces.",
        "Correct. To check whether parameters appear stable after burn-in."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking ESS values?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to evaluate whether sampling is sufficient"
      ],
      "answer": 3,
      "explanation": "The key idea is that to evaluate whether sampling is sufficient.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "This option refers to another concept or an overstatement, not to checking ESS values.",
        "Correct. To evaluate whether sampling is sufficient."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes summarizing posterior trees?",
      "options": [
        "to create a final answer without checking the data",
        "to obtain consensus trees and clade posterior probabilities",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to obtain consensus trees and clade posterior probabilities.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "Correct. To obtain consensus trees and clade posterior probabilities.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees.",
        "This option refers to another concept or an overstatement, not to summarizing posterior trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing ML and BI output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to distinguish likelihood optimization from posterior sampling",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to distinguish likelihood optimization from posterior sampling.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output.",
        "Correct. To distinguish likelihood optimization from posterior sampling.",
        "This option refers to another concept or an overstatement, not to comparing ML and BI output."
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

export default function BayesianInferenceLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

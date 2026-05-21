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
    "eyebrow": "Lesson 11 · Complex models",
    "title": "Complex substitution models",
    "subtitle": "Handle heterogeneity across genes, sites and lineages.",
    "big": "Simple models assume one substitution process for the entire alignment. Real data often violate that assumption, so partition models and mixture models are used to accommodate heterogeneity in rates, composition and branch lengths.",
    "tags": [
      "heterogeneity",
      "partition models",
      "mixture models",
      "edge-linked",
      "edge-unlinked",
      "composition"
    ],
    "emphasis": [
      [
        "Heterogeneity is the rule",
        "Rates and compositions can vary across sites, genes and lineages."
      ],
      [
        "Partitions use prior structure",
        "Genes or codon positions can be assigned to predefined subsets."
      ],
      [
        "Mixtures infer structure probabilistically",
        "Sites can belong to multiple components without fixed partitions."
      ],
      [
        "Branch lengths can be linked or unlinked",
        "Partition models differ in how much branch-length information is shared."
      ]
    ],
    "sections": [
      [
        "Why complex models?",
        [
          "A single substitution model may be too simplistic for multi-gene or genome-scale alignments.",
          "Heterogeneity can affect rates, composition and branch lengths."
        ]
      ],
      [
        "Partition models",
        [
          "Split the alignment into predefined subsets such as genes or codon positions.",
          "Each partition can have its own model and parameters."
        ]
      ],
      [
        "Mixture models",
        [
          "Instead of assigning sites beforehand, a mixture lets sites have probabilities of belonging to components.",
          "This is useful when hidden heterogeneity is expected."
        ]
      ],
      [
        "Branch-length linking",
        [
          "Edge-linked equal branch lengths, proportional branch lengths and edge-unlinked models make different assumptions about shared history among partitions."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 11 · Modelos de sustitución complejos",
    "title": "Modelos de sustitución complejos",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "heterogeneity",
      "partition models",
      "mixture models",
      "edge-linked",
      "edge-unlinked",
      "composition"
    ],
    "emphasis": [
      [
        "Heterogeneity is the rule",
        "Rates and compositions can vary across sites, genes and lineages."
      ],
      [
        "Partitions use prior structure",
        "Genes or codon positions can be assigned to predefined subsets."
      ],
      [
        "Mixtures infer structure probabilistically",
        "Sites can belong to multiple components without fixed partitions."
      ],
      [
        "Branch lengths can be linked or unlinked",
        "Partition models differ in how much branch-length information is shared."
      ]
    ],
    "sections": [
      [
        "Why complex models?",
        [
          "A single substitution model may be too simplistic for multi-gene or genome-scale alignments.",
          "Heterogeneity can affect rates, composition and branch lengths."
        ]
      ],
      [
        "Partition models",
        [
          "Split the alignment into predefined subsets such as genes or codon positions.",
          "Each partition can have its own model and parameters."
        ]
      ],
      [
        "Mixture models",
        [
          "Instead of assigning sites beforehand, a mixture lets sites have probabilities of belonging to components.",
          "This is useful when hidden heterogeneity is expected."
        ]
      ],
      [
        "Branch-length linking",
        [
          "Edge-linked equal branch lengths, proportional branch lengths and edge-unlinked models make different assumptions about shared history among partitions."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 11 · مدل‌های پیچیدهٔ جانشینی",
    "title": "مدل‌های پیچیدهٔ جانشینی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "heterogeneity",
      "partition models",
      "mixture models",
      "edge-linked",
      "edge-unlinked",
      "composition"
    ],
    "emphasis": [
      [
        "Heterogeneity is the rule",
        "Rates and compositions can vary across sites, genes and lineages."
      ],
      [
        "Partitions use prior structure",
        "Genes or codon positions can be assigned to predefined subsets."
      ],
      [
        "Mixtures infer structure probabilistically",
        "Sites can belong to multiple components without fixed partitions."
      ],
      [
        "Branch lengths can be linked or unlinked",
        "Partition models differ in how much branch-length information is shared."
      ]
    ],
    "sections": [
      [
        "Why complex models?",
        [
          "A single substitution model may be too simplistic for multi-gene or genome-scale alignments.",
          "Heterogeneity can affect rates, composition and branch lengths."
        ]
      ],
      [
        "Partition models",
        [
          "Split the alignment into predefined subsets such as genes or codon positions.",
          "Each partition can have its own model and parameters."
        ]
      ],
      [
        "Mixture models",
        [
          "Instead of assigning sites beforehand, a mixture lets sites have probabilities of belonging to components.",
          "This is useful when hidden heterogeneity is expected."
        ]
      ],
      [
        "Branch-length linking",
        [
          "Edge-linked equal branch lengths, proportional branch lengths and edge-unlinked models make different assumptions about shared history among partitions."
        ]
      ]
    ]
  }
};

export const lesson11Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes partition model?",
      "options": [
        "a model that never uses site subsets",
        "a tree dating algorithm",
        "a branch support test",
        "a model that divides an alignment into predefined subsets"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that divides an alignment into predefined subsets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "Correct. A model that divides an alignment into predefined subsets."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mixture model?",
      "options": [
        "a model based only on fixed genes",
        "a taxon sampling strategy",
        "a PCR protocol",
        "a model that combines components and assigns sites probabilistically"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that combines components and assigns sites probabilistically.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "Correct. A model that combines components and assigns sites probabilistically."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity?",
      "options": [
        "all branches equal",
        "absence of substitutions",
        "variation in evolutionary rates across sites or lineages",
        "taxonomy"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation in evolutionary rates across sites or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "Correct. Variation in evolutionary rates across sites or lineages.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes composition heterogeneity?",
      "options": [
        "variation in file names",
        "variation in recording quality",
        "variation in slide color",
        "variation in base/amino-acid frequencies across data or lineages"
      ],
      "answer": 3,
      "explanation": "The key idea is that variation in base/amino-acid frequencies across data or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "Correct. Variation in base/amino-acid frequencies across data or lineages."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-linked partition model?",
      "options": [
        "partitions have no tree",
        "all sites are removed",
        "all genes are paralogs",
        "partitions share branch lengths or a related branch-length structure"
      ],
      "answer": 3,
      "explanation": "The key idea is that partitions share branch lengths or a related branch-length structure.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "Correct. Partitions share branch lengths or a related branch-length structure."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-unlinked partition model?",
      "options": [
        "all partitions are identical",
        "branch lengths are meaningless",
        "only one taxon exists",
        "each partition can have its own branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that each partition can have its own branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "Correct. Each partition can have its own branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes proportional branch lengths?",
      "options": [
        "all rates are zero",
        "a posterior probability",
        "a trimming threshold",
        "partition branch lengths are proportional to a shared set"
      ],
      "answer": 3,
      "explanation": "The key idea is that partition branch lengths are proportional to a shared set.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "Correct. Partition branch lengths are proportional to a shared set."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-position partitioning?",
      "options": [
        "removing all coding genes",
        "separating first, second and third codon positions",
        "creating an outgroup",
        "a synonym of bootstrap"
      ],
      "answer": 1,
      "explanation": "The key idea is that separating first, second and third codon positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "Correct. Separating first, second and third codon positions.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model overparameterization?",
      "options": [
        "using no model at all",
        "aligning sequences",
        "using more parameters than the data can reliably inform",
        "rotating a node"
      ],
      "answer": 2,
      "explanation": "The key idea is that using more parameters than the data can reliably inform.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "Correct. Using more parameters than the data can reliably inform.",
        "This option refers to another concept or an overstatement, not to model overparameterization."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hidden heterogeneity?",
      "options": [
        "variation in course titles",
        "variation in species names only",
        "variation not captured by obvious partitions",
        "lack of data"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation not captured by obvious partitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "Correct. Variation not captured by obvious partitions.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes creating a partition file?",
      "options": [
        "to create a final answer without checking the data",
        "to tell the software which alignment blocks belong together",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to tell the software which alignment blocks belong together.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "Correct. To tell the software which alignment blocks belong together.",
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "This option refers to another concept or an overstatement, not to creating a partition file."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing partition schemes?",
      "options": [
        "to create a final answer without checking the data",
        "to see whether predefined structure improves model fit",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to see whether predefined structure improves model fit.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "Correct. To see whether predefined structure improves model fit.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes testing mixture models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to model hidden site classes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to model hidden site classes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "Correct. To model hidden site classes.",
        "This option refers to another concept or an overstatement, not to testing mixture models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading model-fit output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether complexity is justified",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether complexity is justified.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "Correct. To decide whether complexity is justified.",
        "This option refers to another concept or an overstatement, not to reading model-fit output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes avoiding unnecessary complexity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to balance biological realism and parameter support"
      ],
      "answer": 3,
      "explanation": "The key idea is that to balance biological realism and parameter support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "Correct. To balance biological realism and parameter support."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes partition model?",
      "options": [
        "a model that never uses site subsets",
        "a tree dating algorithm",
        "a branch support test",
        "a model that divides an alignment into predefined subsets"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that divides an alignment into predefined subsets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "Correct. A model that divides an alignment into predefined subsets."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mixture model?",
      "options": [
        "a model based only on fixed genes",
        "a taxon sampling strategy",
        "a PCR protocol",
        "a model that combines components and assigns sites probabilistically"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that combines components and assigns sites probabilistically.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "Correct. A model that combines components and assigns sites probabilistically."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity?",
      "options": [
        "all branches equal",
        "absence of substitutions",
        "variation in evolutionary rates across sites or lineages",
        "taxonomy"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation in evolutionary rates across sites or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "Correct. Variation in evolutionary rates across sites or lineages.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes composition heterogeneity?",
      "options": [
        "variation in file names",
        "variation in recording quality",
        "variation in slide color",
        "variation in base/amino-acid frequencies across data or lineages"
      ],
      "answer": 3,
      "explanation": "The key idea is that variation in base/amino-acid frequencies across data or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "Correct. Variation in base/amino-acid frequencies across data or lineages."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-linked partition model?",
      "options": [
        "partitions have no tree",
        "all sites are removed",
        "all genes are paralogs",
        "partitions share branch lengths or a related branch-length structure"
      ],
      "answer": 3,
      "explanation": "The key idea is that partitions share branch lengths or a related branch-length structure.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "Correct. Partitions share branch lengths or a related branch-length structure."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-unlinked partition model?",
      "options": [
        "all partitions are identical",
        "branch lengths are meaningless",
        "only one taxon exists",
        "each partition can have its own branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that each partition can have its own branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "Correct. Each partition can have its own branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes proportional branch lengths?",
      "options": [
        "all rates are zero",
        "a posterior probability",
        "a trimming threshold",
        "partition branch lengths are proportional to a shared set"
      ],
      "answer": 3,
      "explanation": "The key idea is that partition branch lengths are proportional to a shared set.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "Correct. Partition branch lengths are proportional to a shared set."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-position partitioning?",
      "options": [
        "removing all coding genes",
        "separating first, second and third codon positions",
        "creating an outgroup",
        "a synonym of bootstrap"
      ],
      "answer": 1,
      "explanation": "The key idea is that separating first, second and third codon positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "Correct. Separating first, second and third codon positions.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model overparameterization?",
      "options": [
        "using no model at all",
        "aligning sequences",
        "using more parameters than the data can reliably inform",
        "rotating a node"
      ],
      "answer": 2,
      "explanation": "The key idea is that using more parameters than the data can reliably inform.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "Correct. Using more parameters than the data can reliably inform.",
        "This option refers to another concept or an overstatement, not to model overparameterization."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hidden heterogeneity?",
      "options": [
        "variation in course titles",
        "variation in species names only",
        "variation not captured by obvious partitions",
        "lack of data"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation not captured by obvious partitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "Correct. Variation not captured by obvious partitions.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes creating a partition file?",
      "options": [
        "to create a final answer without checking the data",
        "to tell the software which alignment blocks belong together",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to tell the software which alignment blocks belong together.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "Correct. To tell the software which alignment blocks belong together.",
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "This option refers to another concept or an overstatement, not to creating a partition file."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing partition schemes?",
      "options": [
        "to create a final answer without checking the data",
        "to see whether predefined structure improves model fit",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to see whether predefined structure improves model fit.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "Correct. To see whether predefined structure improves model fit.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes testing mixture models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to model hidden site classes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to model hidden site classes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "Correct. To model hidden site classes.",
        "This option refers to another concept or an overstatement, not to testing mixture models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading model-fit output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether complexity is justified",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether complexity is justified.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "Correct. To decide whether complexity is justified.",
        "This option refers to another concept or an overstatement, not to reading model-fit output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes avoiding unnecessary complexity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to balance biological realism and parameter support"
      ],
      "answer": 3,
      "explanation": "The key idea is that to balance biological realism and parameter support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "Correct. To balance biological realism and parameter support."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes partition model?",
      "options": [
        "a model that never uses site subsets",
        "a tree dating algorithm",
        "a branch support test",
        "a model that divides an alignment into predefined subsets"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that divides an alignment into predefined subsets.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "This option refers to another concept or an overstatement, not to partition model.",
        "Correct. A model that divides an alignment into predefined subsets."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes mixture model?",
      "options": [
        "a model based only on fixed genes",
        "a taxon sampling strategy",
        "a PCR protocol",
        "a model that combines components and assigns sites probabilistically"
      ],
      "answer": 3,
      "explanation": "The key idea is that a model that combines components and assigns sites probabilistically.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "This option refers to another concept or an overstatement, not to mixture model.",
        "Correct. A model that combines components and assigns sites probabilistically."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes rate heterogeneity?",
      "options": [
        "all branches equal",
        "absence of substitutions",
        "variation in evolutionary rates across sites or lineages",
        "taxonomy"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation in evolutionary rates across sites or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity.",
        "Correct. Variation in evolutionary rates across sites or lineages.",
        "This option refers to another concept or an overstatement, not to rate heterogeneity."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes composition heterogeneity?",
      "options": [
        "variation in file names",
        "variation in recording quality",
        "variation in slide color",
        "variation in base/amino-acid frequencies across data or lineages"
      ],
      "answer": 3,
      "explanation": "The key idea is that variation in base/amino-acid frequencies across data or lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "This option refers to another concept or an overstatement, not to composition heterogeneity.",
        "Correct. Variation in base/amino-acid frequencies across data or lineages."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-linked partition model?",
      "options": [
        "partitions have no tree",
        "all sites are removed",
        "all genes are paralogs",
        "partitions share branch lengths or a related branch-length structure"
      ],
      "answer": 3,
      "explanation": "The key idea is that partitions share branch lengths or a related branch-length structure.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "This option refers to another concept or an overstatement, not to edge-linked partition model.",
        "Correct. Partitions share branch lengths or a related branch-length structure."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes edge-unlinked partition model?",
      "options": [
        "all partitions are identical",
        "branch lengths are meaningless",
        "only one taxon exists",
        "each partition can have its own branch lengths"
      ],
      "answer": 3,
      "explanation": "The key idea is that each partition can have its own branch lengths.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "This option refers to another concept or an overstatement, not to edge-unlinked partition model.",
        "Correct. Each partition can have its own branch lengths."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes proportional branch lengths?",
      "options": [
        "all rates are zero",
        "a posterior probability",
        "a trimming threshold",
        "partition branch lengths are proportional to a shared set"
      ],
      "answer": 3,
      "explanation": "The key idea is that partition branch lengths are proportional to a shared set.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "This option refers to another concept or an overstatement, not to proportional branch lengths.",
        "Correct. Partition branch lengths are proportional to a shared set."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-position partitioning?",
      "options": [
        "removing all coding genes",
        "separating first, second and third codon positions",
        "creating an outgroup",
        "a synonym of bootstrap"
      ],
      "answer": 1,
      "explanation": "The key idea is that separating first, second and third codon positions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "Correct. Separating first, second and third codon positions.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning.",
        "This option refers to another concept or an overstatement, not to codon-position partitioning."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes model overparameterization?",
      "options": [
        "using no model at all",
        "aligning sequences",
        "using more parameters than the data can reliably inform",
        "rotating a node"
      ],
      "answer": 2,
      "explanation": "The key idea is that using more parameters than the data can reliably inform.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "This option refers to another concept or an overstatement, not to model overparameterization.",
        "Correct. Using more parameters than the data can reliably inform.",
        "This option refers to another concept or an overstatement, not to model overparameterization."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hidden heterogeneity?",
      "options": [
        "variation in course titles",
        "variation in species names only",
        "variation not captured by obvious partitions",
        "lack of data"
      ],
      "answer": 2,
      "explanation": "The key idea is that variation not captured by obvious partitions.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity.",
        "Correct. Variation not captured by obvious partitions.",
        "This option refers to another concept or an overstatement, not to hidden heterogeneity."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes creating a partition file?",
      "options": [
        "to create a final answer without checking the data",
        "to tell the software which alignment blocks belong together",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to tell the software which alignment blocks belong together.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "Correct. To tell the software which alignment blocks belong together.",
        "This option refers to another concept or an overstatement, not to creating a partition file.",
        "This option refers to another concept or an overstatement, not to creating a partition file."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing partition schemes?",
      "options": [
        "to create a final answer without checking the data",
        "to see whether predefined structure improves model fit",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to see whether predefined structure improves model fit.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "Correct. To see whether predefined structure improves model fit.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes.",
        "This option refers to another concept or an overstatement, not to comparing partition schemes."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes testing mixture models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to model hidden site classes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to model hidden site classes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "This option refers to another concept or an overstatement, not to testing mixture models.",
        "Correct. To model hidden site classes.",
        "This option refers to another concept or an overstatement, not to testing mixture models."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes reading model-fit output?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether complexity is justified",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether complexity is justified.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "This option refers to another concept or an overstatement, not to reading model-fit output.",
        "Correct. To decide whether complexity is justified.",
        "This option refers to another concept or an overstatement, not to reading model-fit output."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes avoiding unnecessary complexity?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to balance biological realism and parameter support"
      ],
      "answer": 3,
      "explanation": "The key idea is that to balance biological realism and parameter support.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "This option refers to another concept or an overstatement, not to avoiding unnecessary complexity.",
        "Correct. To balance biological realism and parameter support."
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

export default function ComplexModelsLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

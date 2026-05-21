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
    "eyebrow": "Lesson 15 · Inferring selection",
    "title": "Inferring selection",
    "subtitle": "Use codon models and dN/dS to study selective pressure on protein-coding genes.",
    "big": "Phylogenetic trees can be used to study processes, not only ancestry. Codon models distinguish synonymous and nonsynonymous substitutions. The ratio ω = dN/dS is interpreted as purifying selection, neutral evolution or positive selection, with important caveats.",
    "tags": [
      "codons",
      "dN",
      "dS",
      "ω",
      "MG94",
      "GY94",
      "purifying selection",
      "positive selection"
    ],
    "emphasis": [
      [
        "Codons matter",
        "Protein-coding evolution is naturally modeled at the codon level."
      ],
      [
        "dN and dS are rates per site type",
        "Synonymous and nonsynonymous opportunities differ, so raw counts are not enough."
      ],
      [
        "ω is a selective-pressure summary",
        "ω < 1 purifying, ω = 1 neutral, ω > 1 positive selection."
      ],
      [
        "dS neutrality is debated",
        "The interpretation is useful but based on assumptions that are not always perfect."
      ]
    ],
    "sections": [
      [
        "Genetic code degeneracy",
        [
          "There are 64 codons, 61 amino-acid codons and 3 stops. Many amino acids have multiple codons.",
          "This allows synonymous and nonsynonymous substitutions."
        ]
      ],
      [
        "dN and dS",
        [
          "Synonymous substitutions do not change the amino acid; nonsynonymous substitutions do.",
          "dN and dS are normalized by the number of possible sites of each type."
        ]
      ],
      [
        "Codon models",
        [
          "MG94 estimates synonymous and nonsynonymous rates. GY94 often focuses on ω = dN/dS."
        ]
      ],
      [
        "Interpreting ω",
        [
          "ω < 1 suggests purifying selection. ω = 1 suggests neutral evolution. ω > 1 suggests positive selection.",
          "Selection can vary among sites, branches and genes."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 15 · Inferir selección",
    "title": "Inferir selección",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "codons",
      "dN",
      "dS",
      "ω",
      "MG94",
      "GY94",
      "purifying selection",
      "positive selection"
    ],
    "emphasis": [
      [
        "Codons matter",
        "Protein-coding evolution is naturally modeled at the codon level."
      ],
      [
        "dN and dS are rates per site type",
        "Synonymous and nonsynonymous opportunities differ, so raw counts are not enough."
      ],
      [
        "ω is a selective-pressure summary",
        "ω < 1 purifying, ω = 1 neutral, ω > 1 positive selection."
      ],
      [
        "dS neutrality is debated",
        "The interpretation is useful but based on assumptions that are not always perfect."
      ]
    ],
    "sections": [
      [
        "Genetic code degeneracy",
        [
          "There are 64 codons, 61 amino-acid codons and 3 stops. Many amino acids have multiple codons.",
          "This allows synonymous and nonsynonymous substitutions."
        ]
      ],
      [
        "dN and dS",
        [
          "Synonymous substitutions do not change the amino acid; nonsynonymous substitutions do.",
          "dN and dS are normalized by the number of possible sites of each type."
        ]
      ],
      [
        "Codon models",
        [
          "MG94 estimates synonymous and nonsynonymous rates. GY94 often focuses on ω = dN/dS."
        ]
      ],
      [
        "Interpreting ω",
        [
          "ω < 1 suggests purifying selection. ω = 1 suggests neutral evolution. ω > 1 suggests positive selection.",
          "Selection can vary among sites, branches and genes."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 15 · استنباط انتخاب",
    "title": "استنباط انتخاب",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "codons",
      "dN",
      "dS",
      "ω",
      "MG94",
      "GY94",
      "purifying selection",
      "positive selection"
    ],
    "emphasis": [
      [
        "Codons matter",
        "Protein-coding evolution is naturally modeled at the codon level."
      ],
      [
        "dN and dS are rates per site type",
        "Synonymous and nonsynonymous opportunities differ, so raw counts are not enough."
      ],
      [
        "ω is a selective-pressure summary",
        "ω < 1 purifying, ω = 1 neutral, ω > 1 positive selection."
      ],
      [
        "dS neutrality is debated",
        "The interpretation is useful but based on assumptions that are not always perfect."
      ]
    ],
    "sections": [
      [
        "Genetic code degeneracy",
        [
          "There are 64 codons, 61 amino-acid codons and 3 stops. Many amino acids have multiple codons.",
          "This allows synonymous and nonsynonymous substitutions."
        ]
      ],
      [
        "dN and dS",
        [
          "Synonymous substitutions do not change the amino acid; nonsynonymous substitutions do.",
          "dN and dS are normalized by the number of possible sites of each type."
        ]
      ],
      [
        "Codon models",
        [
          "MG94 estimates synonymous and nonsynonymous rates. GY94 often focuses on ω = dN/dS."
        ]
      ],
      [
        "Interpreting ω",
        [
          "ω < 1 suggests purifying selection. ω = 1 suggests neutral evolution. ω > 1 suggests positive selection.",
          "Selection can vary among sites, branches and genes."
        ]
      ]
    ]
  }
};

export const lesson15Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes codon?",
      "options": [
        "a branch support metric",
        "a triplet of nucleotides read during translation",
        "a gene tree distance",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a triplet of nucleotides read during translation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon.",
        "Correct. A triplet of nucleotides read during translation.",
        "This option refers to another concept or an overstatement, not to codon.",
        "This option refers to another concept or an overstatement, not to codon."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes synonymous substitution?",
      "options": [
        "a change that always changes protein function",
        "a nucleotide change that does not change the amino acid",
        "a gene duplication",
        "a species split"
      ],
      "answer": 1,
      "explanation": "The key idea is that a nucleotide change that does not change the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "Correct. A nucleotide change that does not change the amino acid.",
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "This option refers to another concept or an overstatement, not to synonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonsynonymous substitution?",
      "options": [
        "a mutation only in noncoding DNA",
        "a tree rotation",
        "a nucleotide change that changes the amino acid",
        "a bootstrap replicate"
      ],
      "answer": 2,
      "explanation": "The key idea is that a nucleotide change that changes the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "Correct. A nucleotide change that changes the amino acid.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dS?",
      "options": [
        "rate of synonymous substitutions per synonymous site",
        "distance between species only",
        "a branch support value",
        "a prior"
      ],
      "answer": 0,
      "explanation": "The key idea is that rate of synonymous substitutions per synonymous site.",
      "optionExplanations": [
        "Correct. Rate of synonymous substitutions per synonymous site.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dN?",
      "options": [
        "number of taxa",
        "a clock model",
        "rate of nonsynonymous substitutions per nonsynonymous site",
        "a trimming score"
      ],
      "answer": 2,
      "explanation": "The key idea is that rate of nonsynonymous substitutions per nonsynonymous site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to dN.",
        "This option refers to another concept or an overstatement, not to dN.",
        "Correct. Rate of nonsynonymous substitutions per nonsynonymous site.",
        "This option refers to another concept or an overstatement, not to dN."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = dN/dS?",
      "options": [
        "a model of branch support",
        "a sequence aligner",
        "a taxonomic code",
        "a ratio summarizing selective pressure on protein-coding genes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a ratio summarizing selective pressure on protein-coding genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "Correct. A ratio summarizing selective pressure on protein-coding genes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω < 1?",
      "options": [
        "positive selection always",
        "purifying selection",
        "no selection inference possible",
        "horizontal transfer"
      ],
      "answer": 1,
      "explanation": "The key idea is that purifying selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "Correct. Purifying selection.",
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "This option refers to another concept or an overstatement, not to ω < 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = 1?",
      "options": [
        "strong purifying selection",
        "branch support",
        "alignment failure",
        "neutral evolution under the dN/dS framework"
      ],
      "answer": 3,
      "explanation": "The key idea is that neutral evolution under the dN/dS framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "Correct. Neutral evolution under the dN/dS framework."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω > 1?",
      "options": [
        "strict molecular clock",
        "positive selection",
        "no substitutions",
        "orthogroup definition"
      ],
      "answer": 1,
      "explanation": "The key idea is that positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "Correct. Positive selection.",
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "This option refers to another concept or an overstatement, not to ω > 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GY94?",
      "options": [
        "a tree viewer",
        "a UCE protocol",
        "a codon model parameterized around dN/dS/ω",
        "a species tree method"
      ],
      "answer": 2,
      "explanation": "The key idea is that a codon model parameterized around dN/dS/ω.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GY94.",
        "This option refers to another concept or an overstatement, not to GY94.",
        "Correct. A codon model parameterized around dN/dS/ω.",
        "This option refers to another concept or an overstatement, not to GY94."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes preparing codon alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to keep reading frames and codon structure valid",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to keep reading frames and codon structure valid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "Correct. To keep reading frames and codon structure valid.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating dN/dS?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer broad selective pressures on genes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer broad selective pressures on genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "Correct. To infer broad selective pressures on genes.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing site or branch models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect heterogeneity in selection"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect heterogeneity in selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "Correct. To detect heterogeneity in selection."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting ω carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid overclaiming positive selection",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid overclaiming positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "Correct. To avoid overclaiming positive selection.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using a tree with codon data?",
      "options": [
        "to place substitutions in an evolutionary context",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to place substitutions in an evolutionary context.",
      "optionExplanations": [
        "Correct. To place substitutions in an evolutionary context.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes codon?",
      "options": [
        "a branch support metric",
        "a triplet of nucleotides read during translation",
        "a gene tree distance",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a triplet of nucleotides read during translation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon.",
        "Correct. A triplet of nucleotides read during translation.",
        "This option refers to another concept or an overstatement, not to codon.",
        "This option refers to another concept or an overstatement, not to codon."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes synonymous substitution?",
      "options": [
        "a change that always changes protein function",
        "a nucleotide change that does not change the amino acid",
        "a gene duplication",
        "a species split"
      ],
      "answer": 1,
      "explanation": "The key idea is that a nucleotide change that does not change the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "Correct. A nucleotide change that does not change the amino acid.",
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "This option refers to another concept or an overstatement, not to synonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonsynonymous substitution?",
      "options": [
        "a mutation only in noncoding DNA",
        "a tree rotation",
        "a nucleotide change that changes the amino acid",
        "a bootstrap replicate"
      ],
      "answer": 2,
      "explanation": "The key idea is that a nucleotide change that changes the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "Correct. A nucleotide change that changes the amino acid.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dS?",
      "options": [
        "rate of synonymous substitutions per synonymous site",
        "distance between species only",
        "a branch support value",
        "a prior"
      ],
      "answer": 0,
      "explanation": "The key idea is that rate of synonymous substitutions per synonymous site.",
      "optionExplanations": [
        "Correct. Rate of synonymous substitutions per synonymous site.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dN?",
      "options": [
        "number of taxa",
        "a clock model",
        "rate of nonsynonymous substitutions per nonsynonymous site",
        "a trimming score"
      ],
      "answer": 2,
      "explanation": "The key idea is that rate of nonsynonymous substitutions per nonsynonymous site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to dN.",
        "This option refers to another concept or an overstatement, not to dN.",
        "Correct. Rate of nonsynonymous substitutions per nonsynonymous site.",
        "This option refers to another concept or an overstatement, not to dN."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = dN/dS?",
      "options": [
        "a model of branch support",
        "a sequence aligner",
        "a taxonomic code",
        "a ratio summarizing selective pressure on protein-coding genes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a ratio summarizing selective pressure on protein-coding genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "Correct. A ratio summarizing selective pressure on protein-coding genes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω < 1?",
      "options": [
        "positive selection always",
        "purifying selection",
        "no selection inference possible",
        "horizontal transfer"
      ],
      "answer": 1,
      "explanation": "The key idea is that purifying selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "Correct. Purifying selection.",
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "This option refers to another concept or an overstatement, not to ω < 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = 1?",
      "options": [
        "strong purifying selection",
        "branch support",
        "alignment failure",
        "neutral evolution under the dN/dS framework"
      ],
      "answer": 3,
      "explanation": "The key idea is that neutral evolution under the dN/dS framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "Correct. Neutral evolution under the dN/dS framework."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω > 1?",
      "options": [
        "strict molecular clock",
        "positive selection",
        "no substitutions",
        "orthogroup definition"
      ],
      "answer": 1,
      "explanation": "The key idea is that positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "Correct. Positive selection.",
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "This option refers to another concept or an overstatement, not to ω > 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GY94?",
      "options": [
        "a tree viewer",
        "a UCE protocol",
        "a codon model parameterized around dN/dS/ω",
        "a species tree method"
      ],
      "answer": 2,
      "explanation": "The key idea is that a codon model parameterized around dN/dS/ω.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GY94.",
        "This option refers to another concept or an overstatement, not to GY94.",
        "Correct. A codon model parameterized around dN/dS/ω.",
        "This option refers to another concept or an overstatement, not to GY94."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes preparing codon alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to keep reading frames and codon structure valid",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to keep reading frames and codon structure valid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "Correct. To keep reading frames and codon structure valid.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating dN/dS?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer broad selective pressures on genes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer broad selective pressures on genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "Correct. To infer broad selective pressures on genes.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing site or branch models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect heterogeneity in selection"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect heterogeneity in selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "Correct. To detect heterogeneity in selection."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting ω carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid overclaiming positive selection",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid overclaiming positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "Correct. To avoid overclaiming positive selection.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using a tree with codon data?",
      "options": [
        "to place substitutions in an evolutionary context",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to place substitutions in an evolutionary context.",
      "optionExplanations": [
        "Correct. To place substitutions in an evolutionary context.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes codon?",
      "options": [
        "a branch support metric",
        "a triplet of nucleotides read during translation",
        "a gene tree distance",
        "a taxonomic rank"
      ],
      "answer": 1,
      "explanation": "The key idea is that a triplet of nucleotides read during translation.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to codon.",
        "Correct. A triplet of nucleotides read during translation.",
        "This option refers to another concept or an overstatement, not to codon.",
        "This option refers to another concept or an overstatement, not to codon."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes synonymous substitution?",
      "options": [
        "a change that always changes protein function",
        "a nucleotide change that does not change the amino acid",
        "a gene duplication",
        "a species split"
      ],
      "answer": 1,
      "explanation": "The key idea is that a nucleotide change that does not change the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "Correct. A nucleotide change that does not change the amino acid.",
        "This option refers to another concept or an overstatement, not to synonymous substitution.",
        "This option refers to another concept or an overstatement, not to synonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes nonsynonymous substitution?",
      "options": [
        "a mutation only in noncoding DNA",
        "a tree rotation",
        "a nucleotide change that changes the amino acid",
        "a bootstrap replicate"
      ],
      "answer": 2,
      "explanation": "The key idea is that a nucleotide change that changes the amino acid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution.",
        "Correct. A nucleotide change that changes the amino acid.",
        "This option refers to another concept or an overstatement, not to nonsynonymous substitution."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dS?",
      "options": [
        "rate of synonymous substitutions per synonymous site",
        "distance between species only",
        "a branch support value",
        "a prior"
      ],
      "answer": 0,
      "explanation": "The key idea is that rate of synonymous substitutions per synonymous site.",
      "optionExplanations": [
        "Correct. Rate of synonymous substitutions per synonymous site.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS.",
        "This option refers to another concept or an overstatement, not to dS."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes dN?",
      "options": [
        "number of taxa",
        "a clock model",
        "rate of nonsynonymous substitutions per nonsynonymous site",
        "a trimming score"
      ],
      "answer": 2,
      "explanation": "The key idea is that rate of nonsynonymous substitutions per nonsynonymous site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to dN.",
        "This option refers to another concept or an overstatement, not to dN.",
        "Correct. Rate of nonsynonymous substitutions per nonsynonymous site.",
        "This option refers to another concept or an overstatement, not to dN."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = dN/dS?",
      "options": [
        "a model of branch support",
        "a sequence aligner",
        "a taxonomic code",
        "a ratio summarizing selective pressure on protein-coding genes"
      ],
      "answer": 3,
      "explanation": "The key idea is that a ratio summarizing selective pressure on protein-coding genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "This option refers to another concept or an overstatement, not to ω = dN/dS.",
        "Correct. A ratio summarizing selective pressure on protein-coding genes."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω < 1?",
      "options": [
        "positive selection always",
        "purifying selection",
        "no selection inference possible",
        "horizontal transfer"
      ],
      "answer": 1,
      "explanation": "The key idea is that purifying selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "Correct. Purifying selection.",
        "This option refers to another concept or an overstatement, not to ω < 1.",
        "This option refers to another concept or an overstatement, not to ω < 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω = 1?",
      "options": [
        "strong purifying selection",
        "branch support",
        "alignment failure",
        "neutral evolution under the dN/dS framework"
      ],
      "answer": 3,
      "explanation": "The key idea is that neutral evolution under the dN/dS framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "This option refers to another concept or an overstatement, not to ω = 1.",
        "Correct. Neutral evolution under the dN/dS framework."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes ω > 1?",
      "options": [
        "strict molecular clock",
        "positive selection",
        "no substitutions",
        "orthogroup definition"
      ],
      "answer": 1,
      "explanation": "The key idea is that positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "Correct. Positive selection.",
        "This option refers to another concept or an overstatement, not to ω > 1.",
        "This option refers to another concept or an overstatement, not to ω > 1."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes GY94?",
      "options": [
        "a tree viewer",
        "a UCE protocol",
        "a codon model parameterized around dN/dS/ω",
        "a species tree method"
      ],
      "answer": 2,
      "explanation": "The key idea is that a codon model parameterized around dN/dS/ω.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to GY94.",
        "This option refers to another concept or an overstatement, not to GY94.",
        "Correct. A codon model parameterized around dN/dS/ω.",
        "This option refers to another concept or an overstatement, not to GY94."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes preparing codon alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to keep reading frames and codon structure valid",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to keep reading frames and codon structure valid.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments.",
        "Correct. To keep reading frames and codon structure valid.",
        "This option refers to another concept or an overstatement, not to preparing codon alignments."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes estimating dN/dS?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to infer broad selective pressures on genes",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to infer broad selective pressures on genes.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS.",
        "Correct. To infer broad selective pressures on genes.",
        "This option refers to another concept or an overstatement, not to estimating dN/dS."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing site or branch models?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to detect heterogeneity in selection"
      ],
      "answer": 3,
      "explanation": "The key idea is that to detect heterogeneity in selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "This option refers to another concept or an overstatement, not to comparing site or branch models.",
        "Correct. To detect heterogeneity in selection."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting ω carefully?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to avoid overclaiming positive selection",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to avoid overclaiming positive selection.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully.",
        "Correct. To avoid overclaiming positive selection.",
        "This option refers to another concept or an overstatement, not to interpreting ω carefully."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using a tree with codon data?",
      "options": [
        "to place substitutions in an evolutionary context",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to place substitutions in an evolutionary context.",
      "optionExplanations": [
        "Correct. To place substitutions in an evolutionary context.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data.",
        "This option refers to another concept or an overstatement, not to using a tree with codon data."
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

export default function InferringSelectionLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

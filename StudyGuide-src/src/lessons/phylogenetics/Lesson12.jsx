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
    "eyebrow": "Lesson 12 · Discordance, ILS and the coalescent",
    "title": "Discordance, ILS and the coalescent",
    "subtitle": "Understand why gene trees and species trees can disagree for biological reasons.",
    "big": "A species tree represents speciation history; a gene tree represents the history of one locus. They may disagree because of Incomplete Lineage Sorting, hybrid introgression, horizontal gene transfer or technical error. Coalescent-based approaches model gene-tree variation instead of hiding it.",
    "tags": [
      "species tree",
      "gene tree",
      "ILS",
      "coalescent",
      "HGT",
      "introgression",
      "ASTRAL"
    ],
    "emphasis": [
      [
        "Gene trees are not automatically species trees",
        "Each locus has its own history."
      ],
      [
        "ILS is biological conflict",
        "Ancestral polymorphisms can persist across speciation events and sort inconsistently."
      ],
      [
        "Short internodes and large Ne increase ILS",
        "Rapid radiations and large populations make discordance more likely."
      ],
      [
        "Coalescent methods need gene trees",
        "They use sets of gene trees rather than one concatenated supermatrix."
      ]
    ],
    "sections": [
      [
        "Species tree vs gene tree",
        [
          "The species tree tracks cladogenesis/speciation events.",
          "A gene tree tracks ancestry of alleles at one locus and can differ from the species tree."
        ]
      ],
      [
        "Incomplete Lineage Sorting",
        [
          "ILS occurs when ancestral polymorphisms fail to coalesce before speciation events.",
          "Alleles sort into descendant species in a way that can make the gene tree differ from species history."
        ]
      ],
      [
        "Other biological conflict",
        [
          "Horizontal Gene Transfer moves genetic material among unrelated lineages, especially microbes.",
          "Hybrid introgression transfers alleles between species through hybridization and backcrossing."
        ]
      ],
      [
        "Concatenation vs coalescent",
        [
          "Concatenation assumes one shared tree for all genes.",
          "Coalescent-based inference uses multiple gene trees and accounts for ILS."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 12 · Discordancia, ILS y coalescente",
    "title": "Discordancia, ILS y coalescente",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "species tree",
      "gene tree",
      "ILS",
      "coalescent",
      "HGT",
      "introgression",
      "ASTRAL"
    ],
    "emphasis": [
      [
        "Gene trees are not automatically species trees",
        "Each locus has its own history."
      ],
      [
        "ILS is biological conflict",
        "Ancestral polymorphisms can persist across speciation events and sort inconsistently."
      ],
      [
        "Short internodes and large Ne increase ILS",
        "Rapid radiations and large populations make discordance more likely."
      ],
      [
        "Coalescent methods need gene trees",
        "They use sets of gene trees rather than one concatenated supermatrix."
      ]
    ],
    "sections": [
      [
        "Species tree vs gene tree",
        [
          "The species tree tracks cladogenesis/speciation events.",
          "A gene tree tracks ancestry of alleles at one locus and can differ from the species tree."
        ]
      ],
      [
        "Incomplete Lineage Sorting",
        [
          "ILS occurs when ancestral polymorphisms fail to coalesce before speciation events.",
          "Alleles sort into descendant species in a way that can make the gene tree differ from species history."
        ]
      ],
      [
        "Other biological conflict",
        [
          "Horizontal Gene Transfer moves genetic material among unrelated lineages, especially microbes.",
          "Hybrid introgression transfers alleles between species through hybridization and backcrossing."
        ]
      ],
      [
        "Concatenation vs coalescent",
        [
          "Concatenation assumes one shared tree for all genes.",
          "Coalescent-based inference uses multiple gene trees and accounts for ILS."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 12 · ناسازگاری، ILS و هم‌نیاگرایی",
    "title": "ناسازگاری، ILS و هم‌نیاگرایی",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "species tree",
      "gene tree",
      "ILS",
      "coalescent",
      "HGT",
      "introgression",
      "ASTRAL"
    ],
    "emphasis": [
      [
        "Gene trees are not automatically species trees",
        "Each locus has its own history."
      ],
      [
        "ILS is biological conflict",
        "Ancestral polymorphisms can persist across speciation events and sort inconsistently."
      ],
      [
        "Short internodes and large Ne increase ILS",
        "Rapid radiations and large populations make discordance more likely."
      ],
      [
        "Coalescent methods need gene trees",
        "They use sets of gene trees rather than one concatenated supermatrix."
      ]
    ],
    "sections": [
      [
        "Species tree vs gene tree",
        [
          "The species tree tracks cladogenesis/speciation events.",
          "A gene tree tracks ancestry of alleles at one locus and can differ from the species tree."
        ]
      ],
      [
        "Incomplete Lineage Sorting",
        [
          "ILS occurs when ancestral polymorphisms fail to coalesce before speciation events.",
          "Alleles sort into descendant species in a way that can make the gene tree differ from species history."
        ]
      ],
      [
        "Other biological conflict",
        [
          "Horizontal Gene Transfer moves genetic material among unrelated lineages, especially microbes.",
          "Hybrid introgression transfers alleles between species through hybridization and backcrossing."
        ]
      ],
      [
        "Concatenation vs coalescent",
        [
          "Concatenation assumes one shared tree for all genes.",
          "Coalescent-based inference uses multiple gene trees and accounts for ILS."
        ]
      ]
    ]
  }
};

export const lesson12Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes species tree?",
      "options": [
        "the evolutionary history of species/speciation events",
        "the history of a single gene only",
        "a distance matrix",
        "a bootstrap replicate"
      ],
      "answer": 0,
      "explanation": "The key idea is that the evolutionary history of species/speciation events.",
      "optionExplanations": [
        "Correct. The evolutionary history of species/speciation events.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene tree?",
      "options": [
        "always identical to the species tree",
        "a taxonomic checklist",
        "a fossil calibration",
        "the evolutionary history of one locus or gene"
      ],
      "answer": 3,
      "explanation": "The key idea is that the evolutionary history of one locus or gene.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "Correct. The evolutionary history of one locus or gene."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Incomplete Lineage Sorting?",
      "options": [
        "a sequence alignment program",
        "a branch support value",
        "ancestral polymorphism sorting discordantly across speciation events",
        "a tree drawing style"
      ],
      "answer": 2,
      "explanation": "The key idea is that ancestral polymorphism sorting discordantly across speciation events.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "Correct. Ancestral polymorphism sorting discordantly across speciation events.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes large effective population size?",
      "options": [
        "a guarantee of no discordance",
        "a condition that can increase ILS",
        "a synonym of orthology",
        "a model of codons"
      ],
      "answer": 1,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "This option refers to another concept or an overstatement, not to large effective population size."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes short time between speciation events?",
      "options": [
        "a condition that can increase ILS",
        "a way to remove all conflict",
        "a bootstrap method",
        "a PCR condition"
      ],
      "answer": 0,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes horizontal gene transfer?",
      "options": [
        "vertical speciation only",
        "a tree rotation",
        "movement of genetic material between unrelated lineages",
        "a clock model"
      ],
      "answer": 2,
      "explanation": "The key idea is that movement of genetic material between unrelated lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "Correct. Movement of genetic material between unrelated lineages.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hybrid introgression?",
      "options": [
        "gene flow through hybridization and backcrossing",
        "gene loss only",
        "trimming alignment columns",
        "Bayesian burn-in"
      ],
      "answer": 0,
      "explanation": "The key idea is that gene flow through hybridization and backcrossing.",
      "optionExplanations": [
        "Correct. Gene flow through hybridization and backcrossing.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes concatenation?",
      "options": [
        "using only one site",
        "using only morphology",
        "always modelling ILS",
        "combining genes into one supermatrix and inferring one tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that combining genes into one supermatrix and inferring one tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "Correct. Combining genes into one supermatrix and inferring one tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes coalescent-based inference?",
      "options": [
        "ignoring gene-tree variation",
        "requiring no gene trees",
        "inferring a species tree from multiple gene trees under a coalescent framework",
        "a distance matrix only"
      ],
      "answer": 2,
      "explanation": "The key idea is that inferring a species tree from multiple gene trees under a coalescent framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "Correct. Inferring a species tree from multiple gene trees under a coalescent framework.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Robinson-Foulds distance?",
      "options": [
        "a molecular clock",
        "a codon model",
        "a metric comparing tree topology via splits",
        "a transcript folder"
      ],
      "answer": 2,
      "explanation": "The key idea is that a metric comparing tree topology via splits.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "Correct. A metric comparing tree topology via splits.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gene trees?",
      "options": [
        "to see how much loci disagree with one another",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how much loci disagree with one another.",
      "optionExplanations": [
        "Correct. To see how much loci disagree with one another.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes calculating RF-like differences?",
      "options": [
        "to create a final answer without checking the data",
        "to quantify topological disagreement",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to quantify topological disagreement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "Correct. To quantify topological disagreement.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running ASTRAL-style species-tree inference?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to infer a species tree from gene trees"
      ],
      "answer": 3,
      "explanation": "The key idea is that to infer a species tree from gene trees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "Correct. To infer a species tree from gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting quartet support?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see alternative histories around branches",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see alternative histories around branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "Correct. To see alternative histories around branches.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes distinguishing conflict from error?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether discordance is biological or technical",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether discordance is biological or technical.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "Correct. To decide whether discordance is biological or technical.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes species tree?",
      "options": [
        "the evolutionary history of species/speciation events",
        "the history of a single gene only",
        "a distance matrix",
        "a bootstrap replicate"
      ],
      "answer": 0,
      "explanation": "The key idea is that the evolutionary history of species/speciation events.",
      "optionExplanations": [
        "Correct. The evolutionary history of species/speciation events.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene tree?",
      "options": [
        "always identical to the species tree",
        "a taxonomic checklist",
        "a fossil calibration",
        "the evolutionary history of one locus or gene"
      ],
      "answer": 3,
      "explanation": "The key idea is that the evolutionary history of one locus or gene.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "Correct. The evolutionary history of one locus or gene."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Incomplete Lineage Sorting?",
      "options": [
        "a sequence alignment program",
        "a branch support value",
        "ancestral polymorphism sorting discordantly across speciation events",
        "a tree drawing style"
      ],
      "answer": 2,
      "explanation": "The key idea is that ancestral polymorphism sorting discordantly across speciation events.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "Correct. Ancestral polymorphism sorting discordantly across speciation events.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes large effective population size?",
      "options": [
        "a guarantee of no discordance",
        "a condition that can increase ILS",
        "a synonym of orthology",
        "a model of codons"
      ],
      "answer": 1,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "This option refers to another concept or an overstatement, not to large effective population size."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes short time between speciation events?",
      "options": [
        "a condition that can increase ILS",
        "a way to remove all conflict",
        "a bootstrap method",
        "a PCR condition"
      ],
      "answer": 0,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes horizontal gene transfer?",
      "options": [
        "vertical speciation only",
        "a tree rotation",
        "movement of genetic material between unrelated lineages",
        "a clock model"
      ],
      "answer": 2,
      "explanation": "The key idea is that movement of genetic material between unrelated lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "Correct. Movement of genetic material between unrelated lineages.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hybrid introgression?",
      "options": [
        "gene flow through hybridization and backcrossing",
        "gene loss only",
        "trimming alignment columns",
        "Bayesian burn-in"
      ],
      "answer": 0,
      "explanation": "The key idea is that gene flow through hybridization and backcrossing.",
      "optionExplanations": [
        "Correct. Gene flow through hybridization and backcrossing.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes concatenation?",
      "options": [
        "using only one site",
        "using only morphology",
        "always modelling ILS",
        "combining genes into one supermatrix and inferring one tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that combining genes into one supermatrix and inferring one tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "Correct. Combining genes into one supermatrix and inferring one tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes coalescent-based inference?",
      "options": [
        "ignoring gene-tree variation",
        "requiring no gene trees",
        "inferring a species tree from multiple gene trees under a coalescent framework",
        "a distance matrix only"
      ],
      "answer": 2,
      "explanation": "The key idea is that inferring a species tree from multiple gene trees under a coalescent framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "Correct. Inferring a species tree from multiple gene trees under a coalescent framework.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Robinson-Foulds distance?",
      "options": [
        "a molecular clock",
        "a codon model",
        "a metric comparing tree topology via splits",
        "a transcript folder"
      ],
      "answer": 2,
      "explanation": "The key idea is that a metric comparing tree topology via splits.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "Correct. A metric comparing tree topology via splits.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gene trees?",
      "options": [
        "to see how much loci disagree with one another",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how much loci disagree with one another.",
      "optionExplanations": [
        "Correct. To see how much loci disagree with one another.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes calculating RF-like differences?",
      "options": [
        "to create a final answer without checking the data",
        "to quantify topological disagreement",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to quantify topological disagreement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "Correct. To quantify topological disagreement.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running ASTRAL-style species-tree inference?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to infer a species tree from gene trees"
      ],
      "answer": 3,
      "explanation": "The key idea is that to infer a species tree from gene trees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "Correct. To infer a species tree from gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting quartet support?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see alternative histories around branches",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see alternative histories around branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "Correct. To see alternative histories around branches.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes distinguishing conflict from error?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether discordance is biological or technical",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether discordance is biological or technical.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "Correct. To decide whether discordance is biological or technical.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes species tree?",
      "options": [
        "the evolutionary history of species/speciation events",
        "the history of a single gene only",
        "a distance matrix",
        "a bootstrap replicate"
      ],
      "answer": 0,
      "explanation": "The key idea is that the evolutionary history of species/speciation events.",
      "optionExplanations": [
        "Correct. The evolutionary history of species/speciation events.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree.",
        "This option refers to another concept or an overstatement, not to species tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes gene tree?",
      "options": [
        "always identical to the species tree",
        "a taxonomic checklist",
        "a fossil calibration",
        "the evolutionary history of one locus or gene"
      ],
      "answer": 3,
      "explanation": "The key idea is that the evolutionary history of one locus or gene.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "This option refers to another concept or an overstatement, not to gene tree.",
        "Correct. The evolutionary history of one locus or gene."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Incomplete Lineage Sorting?",
      "options": [
        "a sequence alignment program",
        "a branch support value",
        "ancestral polymorphism sorting discordantly across speciation events",
        "a tree drawing style"
      ],
      "answer": 2,
      "explanation": "The key idea is that ancestral polymorphism sorting discordantly across speciation events.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting.",
        "Correct. Ancestral polymorphism sorting discordantly across speciation events.",
        "This option refers to another concept or an overstatement, not to Incomplete Lineage Sorting."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes large effective population size?",
      "options": [
        "a guarantee of no discordance",
        "a condition that can increase ILS",
        "a synonym of orthology",
        "a model of codons"
      ],
      "answer": 1,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to large effective population size.",
        "This option refers to another concept or an overstatement, not to large effective population size."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes short time between speciation events?",
      "options": [
        "a condition that can increase ILS",
        "a way to remove all conflict",
        "a bootstrap method",
        "a PCR condition"
      ],
      "answer": 0,
      "explanation": "The key idea is that a condition that can increase ILS.",
      "optionExplanations": [
        "Correct. A condition that can increase ILS.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events.",
        "This option refers to another concept or an overstatement, not to short time between speciation events."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes horizontal gene transfer?",
      "options": [
        "vertical speciation only",
        "a tree rotation",
        "movement of genetic material between unrelated lineages",
        "a clock model"
      ],
      "answer": 2,
      "explanation": "The key idea is that movement of genetic material between unrelated lineages.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer.",
        "Correct. Movement of genetic material between unrelated lineages.",
        "This option refers to another concept or an overstatement, not to horizontal gene transfer."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes hybrid introgression?",
      "options": [
        "gene flow through hybridization and backcrossing",
        "gene loss only",
        "trimming alignment columns",
        "Bayesian burn-in"
      ],
      "answer": 0,
      "explanation": "The key idea is that gene flow through hybridization and backcrossing.",
      "optionExplanations": [
        "Correct. Gene flow through hybridization and backcrossing.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression.",
        "This option refers to another concept or an overstatement, not to hybrid introgression."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes concatenation?",
      "options": [
        "using only one site",
        "using only morphology",
        "always modelling ILS",
        "combining genes into one supermatrix and inferring one tree"
      ],
      "answer": 3,
      "explanation": "The key idea is that combining genes into one supermatrix and inferring one tree.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "This option refers to another concept or an overstatement, not to concatenation.",
        "Correct. Combining genes into one supermatrix and inferring one tree."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes coalescent-based inference?",
      "options": [
        "ignoring gene-tree variation",
        "requiring no gene trees",
        "inferring a species tree from multiple gene trees under a coalescent framework",
        "a distance matrix only"
      ],
      "answer": 2,
      "explanation": "The key idea is that inferring a species tree from multiple gene trees under a coalescent framework.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference.",
        "Correct. Inferring a species tree from multiple gene trees under a coalescent framework.",
        "This option refers to another concept or an overstatement, not to coalescent-based inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes Robinson-Foulds distance?",
      "options": [
        "a molecular clock",
        "a codon model",
        "a metric comparing tree topology via splits",
        "a transcript folder"
      ],
      "answer": 2,
      "explanation": "The key idea is that a metric comparing tree topology via splits.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance.",
        "Correct. A metric comparing tree topology via splits.",
        "This option refers to another concept or an overstatement, not to Robinson-Foulds distance."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing gene trees?",
      "options": [
        "to see how much loci disagree with one another",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to see how much loci disagree with one another.",
      "optionExplanations": [
        "Correct. To see how much loci disagree with one another.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees.",
        "This option refers to another concept or an overstatement, not to comparing gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes calculating RF-like differences?",
      "options": [
        "to create a final answer without checking the data",
        "to quantify topological disagreement",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to quantify topological disagreement.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "Correct. To quantify topological disagreement.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences.",
        "This option refers to another concept or an overstatement, not to calculating RF-like differences."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running ASTRAL-style species-tree inference?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to infer a species tree from gene trees"
      ],
      "answer": 3,
      "explanation": "The key idea is that to infer a species tree from gene trees.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "This option refers to another concept or an overstatement, not to running ASTRAL-style species-tree inference.",
        "Correct. To infer a species tree from gene trees."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes interpreting quartet support?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to see alternative histories around branches",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to see alternative histories around branches.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support.",
        "Correct. To see alternative histories around branches.",
        "This option refers to another concept or an overstatement, not to interpreting quartet support."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes distinguishing conflict from error?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to decide whether discordance is biological or technical",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 2,
      "explanation": "The key idea is that to decide whether discordance is biological or technical.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error.",
        "Correct. To decide whether discordance is biological or technical.",
        "This option refers to another concept or an overstatement, not to distinguishing conflict from error."
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

export default function DiscordanceILSLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

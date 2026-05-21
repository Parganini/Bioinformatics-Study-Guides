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
    "eyebrow": "Lesson 05 · Sequence alignment and filtering",
    "title": "Sequence alignment and filtering",
    "subtitle": "Turn orthologous genes into homologous sites before tree inference.",
    "big": "After orthogroups, the next problem is site homology: columns in an alignment should represent positions that descend from the same ancestral position. The lesson connects alignment, indels, codon/protein logic and filtering of poorly aligned regions.",
    "tags": [
      "orthogroups",
      "homologous sites",
      "MAFFT",
      "trimAl",
      "gaps",
      "indels",
      "filtering"
    ],
    "emphasis": [
      [
        "Orthologous genes are not enough",
        "For phylogenetic inference, the sites inside those genes must also be comparable. Alignment is the step that tries to identify homologous positions."
      ],
      [
        "Gaps are evolutionary hypotheses",
        "Insertions and deletions are not just empty spaces; they represent hypotheses about where sequence material was inserted or lost."
      ],
      [
        "Bad columns can mislead",
        "Poorly aligned or saturated regions may add noise or bias, so trimming/filtering is part of the inference workflow."
      ],
      [
        "Codon awareness matters",
        "For coding sequences, insertions/deletions and alignment errors can disrupt the reading frame and affect downstream interpretation."
      ]
    ],
    "sections": [
      [
        "From orthogroups to sites",
        [
          "An orthogroup gives a set of genes that are comparable at the gene level. Alignment tries to make them comparable at the site level.",
          "A column should ideally contain residues or nucleotides that descend from the same ancestral position."
        ]
      ],
      [
        "Alignment logic",
        [
          "Algorithms such as MAFFT insert gaps to maximize plausible positional homology. This does not prove homology; it builds a hypothesis about it.",
          "Protein alignments may be easier across deeper divergences because amino acids are more conserved than nucleotides."
        ]
      ],
      [
        "Filtering and trimming",
        [
          "Highly ambiguous regions, excessive gaps and poorly aligned blocks can dominate downstream inference.",
          "Tools such as trimAl remove regions that are unlikely to carry reliable phylogenetic signal."
        ]
      ],
      [
        "Exam traps",
        [
          "Do not confuse orthologous genes with homologous sites. Both levels matter.",
          "Do not treat gaps as meaningless blanks. They encode an alignment hypothesis.",
          "Do not assume more alignment length is always better; noisy columns can hurt inference."
        ]
      ]
    ]
  },
  "es": {
    "eyebrow": "Lección 05 · Alineamiento y filtrado de secuencias",
    "title": "Alineamiento y filtrado de secuencias",
    "subtitle": "Borrador de estudio basado en slides, transcripción y práctica de la clase.",
    "big": "Esta lectura resume la teoría de la clase, destaca lo que conviene recordar para el examen y conecta el tema con el notebook práctico correspondiente.",
    "tags": [
      "orthogroups",
      "homologous sites",
      "MAFFT",
      "trimAl",
      "gaps",
      "indels",
      "filtering"
    ],
    "emphasis": [
      [
        "Orthologous genes are not enough",
        "For phylogenetic inference, the sites inside those genes must also be comparable. Alignment is the step that tries to identify homologous positions."
      ],
      [
        "Gaps are evolutionary hypotheses",
        "Insertions and deletions are not just empty spaces; they represent hypotheses about where sequence material was inserted or lost."
      ],
      [
        "Bad columns can mislead",
        "Poorly aligned or saturated regions may add noise or bias, so trimming/filtering is part of the inference workflow."
      ],
      [
        "Codon awareness matters",
        "For coding sequences, insertions/deletions and alignment errors can disrupt the reading frame and affect downstream interpretation."
      ]
    ],
    "sections": [
      [
        "From orthogroups to sites",
        [
          "An orthogroup gives a set of genes that are comparable at the gene level. Alignment tries to make them comparable at the site level.",
          "A column should ideally contain residues or nucleotides that descend from the same ancestral position."
        ]
      ],
      [
        "Alignment logic",
        [
          "Algorithms such as MAFFT insert gaps to maximize plausible positional homology. This does not prove homology; it builds a hypothesis about it.",
          "Protein alignments may be easier across deeper divergences because amino acids are more conserved than nucleotides."
        ]
      ],
      [
        "Filtering and trimming",
        [
          "Highly ambiguous regions, excessive gaps and poorly aligned blocks can dominate downstream inference.",
          "Tools such as trimAl remove regions that are unlikely to carry reliable phylogenetic signal."
        ]
      ],
      [
        "Exam traps",
        [
          "Do not confuse orthologous genes with homologous sites. Both levels matter.",
          "Do not treat gaps as meaningless blanks. They encode an alignment hypothesis.",
          "Do not assume more alignment length is always better; noisy columns can hurt inference."
        ]
      ]
    ]
  },
  "fa": {
    "eyebrow": "درس 05 · هم‌ترازسازی و فیلتر کردن توالی‌ها",
    "title": "هم‌ترازسازی و فیلتر کردن توالی‌ها",
    "subtitle": "پیش‌نویس مطالعه بر پایهٔ اسلایدها، رونویسی و تمرین عملی این جلسه.",
    "big": "این صفحه نکات نظری، تأکیدهای مهم برای امتحان، و ارتباط درس با نوت‌بوک عملی را خلاصه می‌کند.",
    "tags": [
      "orthogroups",
      "homologous sites",
      "MAFFT",
      "trimAl",
      "gaps",
      "indels",
      "filtering"
    ],
    "emphasis": [
      [
        "Orthologous genes are not enough",
        "For phylogenetic inference, the sites inside those genes must also be comparable. Alignment is the step that tries to identify homologous positions."
      ],
      [
        "Gaps are evolutionary hypotheses",
        "Insertions and deletions are not just empty spaces; they represent hypotheses about where sequence material was inserted or lost."
      ],
      [
        "Bad columns can mislead",
        "Poorly aligned or saturated regions may add noise or bias, so trimming/filtering is part of the inference workflow."
      ],
      [
        "Codon awareness matters",
        "For coding sequences, insertions/deletions and alignment errors can disrupt the reading frame and affect downstream interpretation."
      ]
    ],
    "sections": [
      [
        "From orthogroups to sites",
        [
          "An orthogroup gives a set of genes that are comparable at the gene level. Alignment tries to make them comparable at the site level.",
          "A column should ideally contain residues or nucleotides that descend from the same ancestral position."
        ]
      ],
      [
        "Alignment logic",
        [
          "Algorithms such as MAFFT insert gaps to maximize plausible positional homology. This does not prove homology; it builds a hypothesis about it.",
          "Protein alignments may be easier across deeper divergences because amino acids are more conserved than nucleotides."
        ]
      ],
      [
        "Filtering and trimming",
        [
          "Highly ambiguous regions, excessive gaps and poorly aligned blocks can dominate downstream inference.",
          "Tools such as trimAl remove regions that are unlikely to carry reliable phylogenetic signal."
        ]
      ],
      [
        "Exam traps",
        [
          "Do not confuse orthologous genes with homologous sites. Both levels matter.",
          "Do not treat gaps as meaningless blanks. They encode an alignment hypothesis.",
          "Do not assume more alignment length is always better; noisy columns can hurt inference."
        ]
      ]
    ]
  }
};

export const lesson05Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "Which statement best describes the goal of sequence alignment?",
      "options": [
        "to estimate posterior probabilities",
        "to root a tree automatically",
        "to identify homologous positions across sequences",
        "to assign species names"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify homologous positions across sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "Correct. To identify homologous positions across sequences.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a gap in an alignment?",
      "options": [
        "proof that the sequence is wrong",
        "a bootstrap replicate",
        "a branch length",
        "a hypothesis of insertion or deletion relative to other sequences"
      ],
      "answer": 3,
      "explanation": "The key idea is that a hypothesis of insertion or deletion relative to other sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "Correct. A hypothesis of insertion or deletion relative to other sequences."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes filtering/trimming an alignment?",
      "options": [
        "renaming taxa",
        "converting a tree to a chronogram",
        "selecting an outgroup",
        "removing ambiguous or poorly aligned regions before inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that removing ambiguous or poorly aligned regions before inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "Correct. Removing ambiguous or poorly aligned regions before inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homologous sites?",
      "options": [
        "genes with the same function",
        "species with the same morphology",
        "alignment columns that ideally descend from the same ancestral site",
        "branches with equal length"
      ],
      "answer": 2,
      "explanation": "The key idea is that alignment columns that ideally descend from the same ancestral site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "Correct. Alignment columns that ideally descend from the same ancestral site.",
        "This option refers to another concept or an overstatement, not to homologous sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MAFFT?",
      "options": [
        "a divergence dating program",
        "a tool used to align sequences",
        "a support metric",
        "a codon model"
      ],
      "answer": 1,
      "explanation": "The key idea is that a tool used to align sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "Correct. A tool used to align sequences.",
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "This option refers to another concept or an overstatement, not to MAFFT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes trimAl?",
      "options": [
        "a tool used to filter or trim multiple sequence alignments",
        "a Bayesian sampler",
        "a tree viewer",
        "a reciprocal-best-hit algorithm"
      ],
      "answer": 0,
      "explanation": "The key idea is that a tool used to filter or trim multiple sequence alignments.",
      "optionExplanations": [
        "Correct. A tool used to filter or trim multiple sequence alignments.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-aware thinking?",
      "options": [
        "maintaining the reading frame and interpreting indels in multiples of codons when appropriate",
        "ignoring protein translation",
        "forcing all gaps to be one nucleotide",
        "using only morphology"
      ],
      "answer": 0,
      "explanation": "The key idea is that maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
      "optionExplanations": [
        "Correct. Maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes protein alignment across deep divergences?",
      "options": [
        "it eliminates all homoplasy",
        "it replaces orthology inference",
        "it always gives time-calibrated trees",
        "it can preserve signal when nucleotide sequences are too divergent"
      ],
      "answer": 3,
      "explanation": "The key idea is that it can preserve signal when nucleotide sequences are too divergent.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "Correct. It can preserve signal when nucleotide sequences are too divergent."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes poorly aligned regions?",
      "options": [
        "they always improve support",
        "they define clades directly",
        "they can add noise and bias to tree inference",
        "they are the same as outgroups"
      ],
      "answer": 2,
      "explanation": "The key idea is that they can add noise and bias to tree inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "Correct. They can add noise and bias to tree inference.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes alignment as a hypothesis?",
      "options": [
        "alignment is direct observation of ancestors",
        "alignment never affects phylogeny",
        "alignment is identical to taxonomy",
        "the placement of residues and gaps is an inferred statement about history"
      ],
      "answer": 3,
      "explanation": "The key idea is that the placement of residues and gaps is an inferred statement about history.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "Correct. The placement of residues and gaps is an inferred statement about history."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running MAFFT?",
      "options": [
        "to create a final answer without checking the data",
        "to build a multiple sequence alignment from sequence data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to build a multiple sequence alignment from sequence data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "Correct. To build a multiple sequence alignment from sequence data.",
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "This option refers to another concept or an overstatement, not to running MAFFT."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting gap-rich regions?",
      "options": [
        "to create a final answer without checking the data",
        "to decide whether columns may be unreliable",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to decide whether columns may be unreliable.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "Correct. To decide whether columns may be unreliable.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using trimAl?",
      "options": [
        "to remove poorly aligned or highly gappy regions",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to remove poorly aligned or highly gappy regions.",
      "optionExplanations": [
        "Correct. To remove poorly aligned or highly gappy regions.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing before/after alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how filtering changes the dataset"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how filtering changes the dataset.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "Correct. To see how filtering changes the dataset."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking codon/protein consequences?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid misleading downstream analyses"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid misleading downstream analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "Correct. To avoid misleading downstream analyses."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "Which statement best describes the goal of sequence alignment?",
      "options": [
        "to estimate posterior probabilities",
        "to root a tree automatically",
        "to identify homologous positions across sequences",
        "to assign species names"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify homologous positions across sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "Correct. To identify homologous positions across sequences.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a gap in an alignment?",
      "options": [
        "proof that the sequence is wrong",
        "a bootstrap replicate",
        "a branch length",
        "a hypothesis of insertion or deletion relative to other sequences"
      ],
      "answer": 3,
      "explanation": "The key idea is that a hypothesis of insertion or deletion relative to other sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "Correct. A hypothesis of insertion or deletion relative to other sequences."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes filtering/trimming an alignment?",
      "options": [
        "renaming taxa",
        "converting a tree to a chronogram",
        "selecting an outgroup",
        "removing ambiguous or poorly aligned regions before inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that removing ambiguous or poorly aligned regions before inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "Correct. Removing ambiguous or poorly aligned regions before inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homologous sites?",
      "options": [
        "genes with the same function",
        "species with the same morphology",
        "alignment columns that ideally descend from the same ancestral site",
        "branches with equal length"
      ],
      "answer": 2,
      "explanation": "The key idea is that alignment columns that ideally descend from the same ancestral site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "Correct. Alignment columns that ideally descend from the same ancestral site.",
        "This option refers to another concept or an overstatement, not to homologous sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MAFFT?",
      "options": [
        "a divergence dating program",
        "a tool used to align sequences",
        "a support metric",
        "a codon model"
      ],
      "answer": 1,
      "explanation": "The key idea is that a tool used to align sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "Correct. A tool used to align sequences.",
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "This option refers to another concept or an overstatement, not to MAFFT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes trimAl?",
      "options": [
        "a tool used to filter or trim multiple sequence alignments",
        "a Bayesian sampler",
        "a tree viewer",
        "a reciprocal-best-hit algorithm"
      ],
      "answer": 0,
      "explanation": "The key idea is that a tool used to filter or trim multiple sequence alignments.",
      "optionExplanations": [
        "Correct. A tool used to filter or trim multiple sequence alignments.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-aware thinking?",
      "options": [
        "maintaining the reading frame and interpreting indels in multiples of codons when appropriate",
        "ignoring protein translation",
        "forcing all gaps to be one nucleotide",
        "using only morphology"
      ],
      "answer": 0,
      "explanation": "The key idea is that maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
      "optionExplanations": [
        "Correct. Maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes protein alignment across deep divergences?",
      "options": [
        "it eliminates all homoplasy",
        "it replaces orthology inference",
        "it always gives time-calibrated trees",
        "it can preserve signal when nucleotide sequences are too divergent"
      ],
      "answer": 3,
      "explanation": "The key idea is that it can preserve signal when nucleotide sequences are too divergent.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "Correct. It can preserve signal when nucleotide sequences are too divergent."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes poorly aligned regions?",
      "options": [
        "they always improve support",
        "they define clades directly",
        "they can add noise and bias to tree inference",
        "they are the same as outgroups"
      ],
      "answer": 2,
      "explanation": "The key idea is that they can add noise and bias to tree inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "Correct. They can add noise and bias to tree inference.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes alignment as a hypothesis?",
      "options": [
        "alignment is direct observation of ancestors",
        "alignment never affects phylogeny",
        "alignment is identical to taxonomy",
        "the placement of residues and gaps is an inferred statement about history"
      ],
      "answer": 3,
      "explanation": "The key idea is that the placement of residues and gaps is an inferred statement about history.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "Correct. The placement of residues and gaps is an inferred statement about history."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running MAFFT?",
      "options": [
        "to create a final answer without checking the data",
        "to build a multiple sequence alignment from sequence data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to build a multiple sequence alignment from sequence data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "Correct. To build a multiple sequence alignment from sequence data.",
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "This option refers to another concept or an overstatement, not to running MAFFT."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting gap-rich regions?",
      "options": [
        "to create a final answer without checking the data",
        "to decide whether columns may be unreliable",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to decide whether columns may be unreliable.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "Correct. To decide whether columns may be unreliable.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using trimAl?",
      "options": [
        "to remove poorly aligned or highly gappy regions",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to remove poorly aligned or highly gappy regions.",
      "optionExplanations": [
        "Correct. To remove poorly aligned or highly gappy regions.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing before/after alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how filtering changes the dataset"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how filtering changes the dataset.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "Correct. To see how filtering changes the dataset."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking codon/protein consequences?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid misleading downstream analyses"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid misleading downstream analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "Correct. To avoid misleading downstream analyses."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "Which statement best describes the goal of sequence alignment?",
      "options": [
        "to estimate posterior probabilities",
        "to root a tree automatically",
        "to identify homologous positions across sequences",
        "to assign species names"
      ],
      "answer": 2,
      "explanation": "The key idea is that to identify homologous positions across sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment.",
        "Correct. To identify homologous positions across sequences.",
        "This option refers to another concept or an overstatement, not to the goal of sequence alignment."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes a gap in an alignment?",
      "options": [
        "proof that the sequence is wrong",
        "a bootstrap replicate",
        "a branch length",
        "a hypothesis of insertion or deletion relative to other sequences"
      ],
      "answer": 3,
      "explanation": "The key idea is that a hypothesis of insertion or deletion relative to other sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "This option refers to another concept or an overstatement, not to a gap in an alignment.",
        "Correct. A hypothesis of insertion or deletion relative to other sequences."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes filtering/trimming an alignment?",
      "options": [
        "renaming taxa",
        "converting a tree to a chronogram",
        "selecting an outgroup",
        "removing ambiguous or poorly aligned regions before inference"
      ],
      "answer": 3,
      "explanation": "The key idea is that removing ambiguous or poorly aligned regions before inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "This option refers to another concept or an overstatement, not to filtering/trimming an alignment.",
        "Correct. Removing ambiguous or poorly aligned regions before inference."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes homologous sites?",
      "options": [
        "genes with the same function",
        "species with the same morphology",
        "alignment columns that ideally descend from the same ancestral site",
        "branches with equal length"
      ],
      "answer": 2,
      "explanation": "The key idea is that alignment columns that ideally descend from the same ancestral site.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "This option refers to another concept or an overstatement, not to homologous sites.",
        "Correct. Alignment columns that ideally descend from the same ancestral site.",
        "This option refers to another concept or an overstatement, not to homologous sites."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes MAFFT?",
      "options": [
        "a divergence dating program",
        "a tool used to align sequences",
        "a support metric",
        "a codon model"
      ],
      "answer": 1,
      "explanation": "The key idea is that a tool used to align sequences.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "Correct. A tool used to align sequences.",
        "This option refers to another concept or an overstatement, not to MAFFT.",
        "This option refers to another concept or an overstatement, not to MAFFT."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes trimAl?",
      "options": [
        "a tool used to filter or trim multiple sequence alignments",
        "a Bayesian sampler",
        "a tree viewer",
        "a reciprocal-best-hit algorithm"
      ],
      "answer": 0,
      "explanation": "The key idea is that a tool used to filter or trim multiple sequence alignments.",
      "optionExplanations": [
        "Correct. A tool used to filter or trim multiple sequence alignments.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl.",
        "This option refers to another concept or an overstatement, not to trimAl."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes codon-aware thinking?",
      "options": [
        "maintaining the reading frame and interpreting indels in multiples of codons when appropriate",
        "ignoring protein translation",
        "forcing all gaps to be one nucleotide",
        "using only morphology"
      ],
      "answer": 0,
      "explanation": "The key idea is that maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
      "optionExplanations": [
        "Correct. Maintaining the reading frame and interpreting indels in multiples of codons when appropriate.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking.",
        "This option refers to another concept or an overstatement, not to codon-aware thinking."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes protein alignment across deep divergences?",
      "options": [
        "it eliminates all homoplasy",
        "it replaces orthology inference",
        "it always gives time-calibrated trees",
        "it can preserve signal when nucleotide sequences are too divergent"
      ],
      "answer": 3,
      "explanation": "The key idea is that it can preserve signal when nucleotide sequences are too divergent.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "This option refers to another concept or an overstatement, not to protein alignment across deep divergences.",
        "Correct. It can preserve signal when nucleotide sequences are too divergent."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes poorly aligned regions?",
      "options": [
        "they always improve support",
        "they define clades directly",
        "they can add noise and bias to tree inference",
        "they are the same as outgroups"
      ],
      "answer": 2,
      "explanation": "The key idea is that they can add noise and bias to tree inference.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions.",
        "Correct. They can add noise and bias to tree inference.",
        "This option refers to another concept or an overstatement, not to poorly aligned regions."
      ]
    },
    {
      "kind": "theory",
      "question": "Which statement best describes alignment as a hypothesis?",
      "options": [
        "alignment is direct observation of ancestors",
        "alignment never affects phylogeny",
        "alignment is identical to taxonomy",
        "the placement of residues and gaps is an inferred statement about history"
      ],
      "answer": 3,
      "explanation": "The key idea is that the placement of residues and gaps is an inferred statement about history.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "This option refers to another concept or an overstatement, not to alignment as a hypothesis.",
        "Correct. The placement of residues and gaps is an inferred statement about history."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes running MAFFT?",
      "options": [
        "to create a final answer without checking the data",
        "to build a multiple sequence alignment from sequence data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to build a multiple sequence alignment from sequence data.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "Correct. To build a multiple sequence alignment from sequence data.",
        "This option refers to another concept or an overstatement, not to running MAFFT.",
        "This option refers to another concept or an overstatement, not to running MAFFT."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes inspecting gap-rich regions?",
      "options": [
        "to create a final answer without checking the data",
        "to decide whether columns may be unreliable",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 1,
      "explanation": "The key idea is that to decide whether columns may be unreliable.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "Correct. To decide whether columns may be unreliable.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions.",
        "This option refers to another concept or an overstatement, not to inspecting gap-rich regions."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes using trimAl?",
      "options": [
        "to remove poorly aligned or highly gappy regions",
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis"
      ],
      "answer": 0,
      "explanation": "The key idea is that to remove poorly aligned or highly gappy regions.",
      "optionExplanations": [
        "Correct. To remove poorly aligned or highly gappy regions.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl.",
        "This option refers to another concept or an overstatement, not to using trimAl."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes comparing before/after alignments?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to see how filtering changes the dataset"
      ],
      "answer": 3,
      "explanation": "The key idea is that to see how filtering changes the dataset.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "This option refers to another concept or an overstatement, not to comparing before/after alignments.",
        "Correct. To see how filtering changes the dataset."
      ]
    },
    {
      "kind": "practical",
      "question": "Which statement best describes checking codon/protein consequences?",
      "options": [
        "to create a final answer without checking the data",
        "to replace the theoretical concepts completely",
        "to draw a decorative tree unrelated to the analysis",
        "to avoid misleading downstream analyses"
      ],
      "answer": 3,
      "explanation": "The key idea is that to avoid misleading downstream analyses.",
      "optionExplanations": [
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "This option refers to another concept or an overstatement, not to checking codon/protein consequences.",
        "Correct. To avoid misleading downstream analyses."
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

export default function SequenceAlignmentFilteringLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
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

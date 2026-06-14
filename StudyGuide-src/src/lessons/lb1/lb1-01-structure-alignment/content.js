export const lessonContent = {
  id: "lb1-01-structure-alignment",
  extractionStatus: "source-based first pass; no local slide images referenced",
  whyThisMatters: "Structure alignment is one of the cleanest examples of why bioinformatics is not only sequence comparison. Two proteins can keep a similar fold and related function even after their sequences diverge, so structure can reveal relationships that are weak or invisible at the sequence level.",
  objectives: [
    "Define structure superimposition as fitting two structures when the correspondence between atoms or residues is already known.",
    "Define structure alignment as the harder problem of first finding the correspondence set and then optimizing the superimposition.",
    "Explain RMSD as a distance measure after optimal rigid-body transformation.",
    "Distinguish rotation/translation of a rigid body from changing the internal structure of the molecule.",
    "Explain why structural similarity can support homology or family reasoning even at low sequence identity.",
  ],
  coreConcepts: [
    {
      title: "Correspondence set",
      body: "A correspondence set states which residue or atom in structure A is compared to which residue or atom in structure B. Superimposition assumes this mapping; alignment must discover it.",
      keywords: ["mapping", "residue pairs", "hard part"],
    },
    {
      title: "Rigid-body transformation",
      body: "Once correspondence is known, the structures can be rotated and translated to minimize distance. The molecule is not bent or refolded; only its position in space changes.",
      keywords: ["rotation", "translation", "no deformation"],
    },
    {
      title: "RMSD",
      body: "Root-mean-square deviation summarizes the average distance between matched points after superimposition. It is meaningful only relative to the chosen correspondence and structural region.",
      keywords: ["distance", "matched points", "region"],
    },
    {
      title: "Structure alignment",
      body: "Structure alignment searches for the correspondence that gives a biologically meaningful structural match, then evaluates the fit. This is harder than superimposition because the mapping is unknown.",
      keywords: ["search", "correspondence", "fit"],
    },
  ],
  routeSteps: [
    {
      title: "First ask: do I know which residues correspond?",
      body: "If yes, the problem is superimposition. If no, the problem is alignment, and correspondence search becomes central.",
    },
    {
      title: "Then optimize the spatial fit",
      body: "Use a rigid-body transformation to place the structures in the same coordinate frame without changing their internal geometry.",
    },
    {
      title: "Finally interpret the score",
      body: "RMSD and structural overlap are evidence. They must be interpreted with alignment length, domain boundaries and biological context.",
    },
  ],
  walkthroughSections: [
    {
      range: "Deck 1 opening concepts",
      title: "The first distinction: superimposition is not alignment",
      intro: "The most important exam-safe distinction is whether the residue/atom correspondence is already known.",
      slides: [
        {
          label: "Core definition",
          title: "Superimposition assumes known correspondence",
          comment: "If you already know which residues or atoms should be compared, the task is to find the best rigid-body transformation that places one structure over the other.",
          teaching: "Study interpretation: superimposition is a geometry optimization after the biological mapping has already been chosen.",
          remember: "Known correspondence first; then rotation/translation; then RMSD.",
          trap: "Do not say superimposition discovers the alignment. It fits structures after the correspondence is given.",
          prompt: "What information must be known before superimposing two structures?",
        },
        {
          label: "Core definition",
          title: "Alignment must find the correspondence first",
          comment: "Structure alignment is harder because it must decide which residues or structural elements correspond, often across proteins with insertions, deletions or low sequence identity.",
          teaching: "Study interpretation: the computational difficulty is the search over possible correspondences, not merely drawing two structures on top of each other.",
          remember: "Unknown correspondence first; search for matching regions; then superimpose and evaluate.",
          trap: "Do not treat a low RMSD as meaningful if it comes from a tiny or cherry-picked region.",
          prompt: "Why is structure alignment harder than superimposition?",
        },
      ],
    },
    {
      range: "Rigid-body fit and RMSD",
      title: "How the fit is evaluated",
      intro: "Once residue pairs are fixed, the structures are placed in the same coordinate frame and their distance can be summarized.",
      slides: [
        {
          label: "Transformation",
          title: "Rigid-body transformation preserves internal geometry",
          comment: "The optimal transformation rotates and translates one coordinate set relative to the other. It does not stretch helices, move side chains independently or change the protein fold.",
          teaching: "Study interpretation: imagine moving a physical model in your hand, not reshaping it.",
          remember: "Rigid-body means the structure is moved as a whole.",
          trap: "If an answer implies the algorithm changes the protein shape to improve the score, it is describing the wrong operation.",
        },
        {
          label: "RMSD",
          title: "RMSD depends on what you compare",
          comment: "RMSD is computed over matched positions after the optimal transformation. Its value depends on the selected atoms, aligned residues and length of the aligned region.",
          teaching: "Study interpretation: RMSD is compact, but not self-sufficient. Always ask: over which correspondence and how much of the structure?",
          remember: "RMSD is a fit summary, not an automatic biological conclusion.",
          prompt: "Why should RMSD be interpreted together with alignment length and correspondence?",
        },
      ],
    },
    {
      range: "Biological interpretation",
      title: "Why structure can reveal relationships sequence misses",
      intro: "Structure is often more conserved than sequence. This makes structure alignment valuable for distant relationships, but it does not remove the need for careful interpretation.",
      slides: [
        {
          label: "Low sequence identity",
          title: "Similar folds can survive sequence divergence",
          comment: "Proteins can accumulate many substitutions while preserving a fold or active-site geometry. Structural alignment can therefore detect family or homology relationships that pairwise sequence identity alone may miss.",
          teaching: "Study interpretation: this is a transfer-of-knowledge argument, so state the evidence and its limits.",
          remember: "Structure similarity is strong evidence when it covers the relevant domain and functionally important regions.",
          trap: "Do not claim same fold always means same precise function.",
          prompt: "Given two proteins with similar fold but low sequence identity, why can structure alignment still detect homology or family relationships?",
        },
      ],
    },
  ],
  checkpoints: [
    {
      question: "What is the difference between structure superimposition and structure alignment?",
      answer: "Superimposition assumes the correspondence between residues or atoms is already known and finds the best rigid-body transformation. Structure alignment must first find the correspondence set, then superimpose and evaluate the match.",
    },
    {
      question: "What does RMSD measure in this context?",
      answer: "RMSD summarizes the average distance between matched atoms or residues after optimal superimposition. It depends on the chosen correspondence, atom set and aligned region.",
    },
    {
      question: "Why is a rigid-body transformation important?",
      answer: "It means the structure is only rotated and translated as a whole. The algorithm is not changing the internal geometry of the molecule to artificially improve the fit.",
    },
    {
      question: "Why can structure alignment detect relationships at low sequence identity?",
      answer: "Protein folds and functional geometries can be more conserved than primary sequence. If the aligned region is meaningful, structural similarity can support family or homology inference even after sequence divergence.",
    },
  ],
  modelAnswer: {
    question: "What is the difference between structure superimposition and structure alignment?",
    answer: "Structure superimposition starts from a known correspondence between residues or atoms in two structures. The task is then geometric: find the optimal rigid-body rotation and translation that minimize distances, often summarized by RMSD. Structure alignment is harder because the correspondence is not known in advance. It must first identify which residues or structural elements match, then perform the superimposition and evaluate the result. Therefore, superimposition fits a known mapping, while alignment searches for the mapping and then fits it.",
  },
  sourceNotes: [
    "Primary source: 1-Structure-Alignment.pdf in the Capriotti LB1 Drive folder.",
    "Teaching-emphasis boxes are study interpretations from the slide topic and requested course focus, not direct professor quotations.",
    "No local slide screenshots are referenced in this first pass; use the source PDF button for visual details.",
  ],
};

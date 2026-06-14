export const LB1_RESOURCE_LABELS = {
  slides: "Slides",
  transcript: "Transcript folder",
  audio: "Audio recordings",
  recording: "Video recordings",
  notebook: "Notebook",
  folder: "Drive folder",
  icon: "Course icon",
};

export const LB1_STATUS = {
  available: {
    label: "Available",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  active: {
    label: "Active draft",
    className: "border-amber-200 bg-amber-50 text-amber-800",
  },
  planned: {
    label: "Planned",
    className: "border-stone-200 bg-stone-50 text-stone-600",
  },
};

export const LB1_DRIVE = {
  root: "https://drive.google.com/drive/folders/1MabRO9vNO32YKiH67nsYmmZiwh49BMzp",
  transcriptions: "https://drive.google.com/drive/folders/1Ih7xv52jITkkC4FCB_ZcupCNXuXIroQz",
  audio: "https://drive.google.com/drive/folders/1SmriL-1rVCoYZypsm5XWFyt40bJLtiNn",
  recordingsDoc: "https://docs.google.com/document/d/1FKrbza2L-qtIVWyYugUuxa3-8Cv2_8jUVfouLeIT9wQ/edit?usp=drivesdk",
  icon: "https://drive.google.com/file/d/1lZSJQjdXOIal6mOUC0pk4ygFi3zbTItY/view?usp=drivesdk",
  projectNotebook: "https://colab.research.google.com/drive/1kxNfjX4iHGomFGUhFWajLLSf5Vs2_EIR",
  projectIterativeNotebook: "https://colab.research.google.com/drive/1460efSNhBxm-FzJx6cOIT8RUBvbq4uij",
};

export const LB1_DECKS = {
  "0-Module-LSB1-2.pdf": "https://drive.google.com/file/d/1lXppaXOuln0SKvh-i3OJxuhpLssQgE2L/view?usp=drivesdk",
  "1-Structure-Alignment.pdf": "https://drive.google.com/file/d/1RQDnmh6nCMF7FyRfbUULeBz_O9clJNhL/view?usp=drivesdk",
  "2-Multiple-Alignments.pdf": "https://drive.google.com/file/d/1dTmrzZcRmuyuFMXQQukQygQ6d8561p9m/view?usp=drivesdk",
  "3-MM-Theory.pdf": "https://drive.google.com/file/d/18oXARpBqCpbHD1QYXFvhpCDli6ykUCk8/view?usp=drivesdk",
  "4-HiddenMarkovModels.pdf": "https://drive.google.com/file/d/1R2d-QeFXIT_Km3xDVOdqVEy4Bfat_GSE/view?usp=drivesdk",
  "5-HMMAlignments.pdf": "https://drive.google.com/file/d/1B2pSFAhLAXyKlKaraMXDQZ6jLgVuHgMF/view?usp=drivesdk",
  "6-HMMER.pdf": "https://drive.google.com/file/d/10hYpL9qINoAKrtrdkDSHHLR1sTPN8pIB/view?usp=drivesdk",
  "7-ProjectIntro.pdf": "https://drive.google.com/file/d/1GW1sNt9Gti2YVqDwFuqTND_sQ3ajg7C-/view?usp=drivesdk",
  "8-MappingProblems.pdf": "https://drive.google.com/file/d/1xM04QNFrySi7KmkXEOyYUM6vBmznRqYQ/view?usp=drivesdk",
  "9-StructureAnalysis.pdf": "https://drive.google.com/file/d/1qrcnObEFqEnf7JRMNXxC7b-rikuQ798d/view?usp=drivesdk",
  "10-ProteinComplex.pdf": "https://drive.google.com/file/d/1Fo4sHZYujeVc6XXxxsk2Fh9-HOhoQW_n/view?usp=drivesdk",
  "11-ProteinVariants.pdf": "https://drive.google.com/file/d/1M0O6oEVgQHBN75x5BH2k0dP9Wjae9Wku/view?usp=drivesdk",
};

export const LB1_MODULES = [
  {
    id: "module-2a",
    code: "2A",
    title: "Module 2A - structural bioinformatics foundations",
    shortTitle: "Structural foundations",
    description: "Course overview, protein/RNA structure alignment, and multiple alignment reasoning.",
  },
  {
    id: "module-2b",
    code: "2B",
    title: "Module 2B - probabilistic models and HMMs",
    shortTitle: "Models and HMMs",
    description: "Probabilistic sequence models, hidden paths, profile HMMs and HMMER workflows.",
  },
  {
    id: "module-2c",
    code: "2C",
    title: "Module 2C - project and mapping",
    shortTitle: "Project and mapping",
    description: "Kunitz-domain profile-HMM project, annotation mapping and structure analysis.",
  },
  {
    id: "module-2d",
    code: "2D",
    title: "Module 2D - applications",
    shortTitle: "Applications",
    description: "Protein complexes, interaction surfaces, variant interpretation and personalized medicine.",
  },
];

const sharedResources = {
  transcript: LB1_DRIVE.transcriptions,
  audio: LB1_DRIVE.audio,
  recording: LB1_DRIVE.recordingsDoc,
};

export const LB1_LESSONS = [
  {
    id: "lb1-00-module-overview",
    code: "LB1.00",
    module: "module-2a",
    order: 0,
    status: "available",
    title: "Module overview: from sequence and structure to HMMs",
    summary: "A course map for Capriotti's module: structural bioinformatics, alignments, probabilistic models, HMMs, HMMER, the Kunitz profile-HMM project, mapping, complexes and variants.",
    tags: ["course map", "functional annotation", "structure", "HMMs", "project route"],
    sourceDeck: "0-Module-LSB1-2.pdf",
    concepts: ["sequence analysis", "structure analysis", "functional annotation", "model assumptions", "transfer of knowledge", "study routes"],
    products: ["slide walkthrough", "study routes", "high-yield expectations", "mini checkpoints"],
    lessonType: "course overview",
    resources: { slides: LB1_DECKS["0-Module-LSB1-2.pdf"], ...sharedResources },
    aliases: ["00", "overview", "module"],
    componentKey: "lb1-00-module-overview",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-01-structure-alignment",
    code: "LB1.01",
    module: "module-2a",
    order: 1,
    status: "available",
    title: "Protein and RNA structure alignment",
    summary: "Structure superimposition versus structure alignment: correspondence set, rigid-body transformation, RMSD and why structural similarity can remain visible when sequence identity is low.",
    tags: ["structure alignment", "RMSD", "superimposition", "correspondence", "homology"],
    sourceDeck: "1-Structure-Alignment.pdf",
    concepts: ["superimposition", "structural alignment", "rigid-body transformation", "RMSD", "correspondence set", "fold conservation"],
    products: ["slide walkthrough", "common trap", "model answer", "mini checkpoints"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["1-Structure-Alignment.pdf"], ...sharedResources },
    aliases: ["01", "structure-alignment", "alignment"],
    componentKey: "lb1-01-structure-alignment",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-02-multiple-alignments",
    code: "LB1.02",
    module: "module-2a",
    order: 2,
    status: "available",
    title: "Multiple alignments: conservation, variability and profiles",
    summary: "Multiple sequence and structure alignments reveal conserved sites, variable regions, residue distributions and functional constraints across a family.",
    tags: ["MSA", "conserved sites", "sequence logos", "profiles", "functional sites"],
    sourceDeck: "2-Multiple-Alignments.pdf",
    concepts: ["conserved sites", "variable sites", "similar substitutions", "residue distributions", "sequence logos", "profiles"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["2-Multiple-Alignments.pdf"], ...sharedResources },
    aliases: ["02", "multiple-alignments", "msa"],
    componentKey: "lb1-02-multiple-alignments",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-03-mm-theory",
    code: "LB1.03",
    module: "module-2b",
    order: 3,
    status: "available",
    title: "Probabilistic models for biological sequences",
    summary: "Generative and associative views of biological sequence models, trainable systems, likelihood and Bayes theorem as the bridge between model and sequence.",
    tags: ["probabilistic models", "Bayes theorem", "likelihood", "training", "sequence probability"],
    sourceDeck: "3-MM-Theory.pdf",
    concepts: ["generative model", "associative model", "trainable system", "P(sequence | model)", "P(model | sequence)", "Bayes theorem"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["3-MM-Theory.pdf"], ...sharedResources },
    aliases: ["03", "mm-theory", "probabilistic-models"],
    componentKey: "lb1-03-mm-theory",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-04-hidden-markov-models",
    code: "LB1.04",
    module: "module-2b",
    order: 4,
    status: "available",
    title: "Hidden Markov Models: states, emissions and paths",
    summary: "Formal HMM definition with states, transitions, emissions, start/end probabilities, observed sequence and hidden path.",
    tags: ["HMM", "states", "transitions", "emissions", "Viterbi", "Forward"],
    sourceDeck: "4-HiddenMarkovModels.pdf",
    concepts: ["hidden path", "emission probability", "transition probability", "alphabet", "Forward algorithm", "Viterbi algorithm"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["4-HiddenMarkovModels.pdf"], ...sharedResources },
    aliases: ["04", "hmm", "hidden-markov-models"],
    componentKey: "lb1-04-hidden-markov-models",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-05-hmm-alignments",
    code: "LB1.05",
    module: "module-2b",
    order: 5,
    status: "available",
    title: "HMMs for sequence alignment and profile HMMs",
    summary: "How HMMs model alignments using match, insert and delete states, position-specific scores and family profiles.",
    tags: ["profile HMM", "match state", "insert state", "delete state", "alignment"],
    sourceDeck: "5-HMMAlignments.pdf",
    concepts: ["position-specific scoring", "match states", "insert states", "delete states", "profile HMMs", "substitution matrices"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["5-HMMAlignments.pdf"], ...sharedResources },
    aliases: ["05", "profile-hmm", "hmm-alignments"],
    componentKey: "lb1-05-hmm-alignments",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-06-hmmer",
    code: "LB1.06",
    module: "module-2b",
    order: 6,
    status: "available",
    title: "HMMER: profile-HMM workflows for homolog search",
    summary: "HMMER as a profile-HMM tool for building models, searching sequence databases, detecting remote homologs and interpreting E-values.",
    tags: ["HMMER", "hmmbuild", "hmmsearch", "E-value", "remote homologs"],
    sourceDeck: "6-HMMER.pdf",
    concepts: ["hmmbuild", "hmmsearch", "homolog search", "remote homology", "E-value", "statistical significance"],
    products: ["full slide walkthrough", "real slide screenshots", "workflow checklist", "mini-labs"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["6-HMMER.pdf"], ...sharedResources },
    aliases: ["06", "hmmer"],
    componentKey: "lb1-06-hmmer",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-07-kunitz-project",
    code: "LB1.07",
    module: "module-2c",
    order: 7,
    status: "available",
    title: "Kunitz profile-HMM project",
    summary: "Project introduction: build a profile HMM for Kunitz-type protease inhibitor domains and reason about BPTI/aprotinin, disulfide bonds and active-loop conservation.",
    tags: ["Kunitz domain", "profile HMM", "BPTI", "aprotinin", "project"],
    sourceDeck: "7-ProjectIntro.pdf",
    concepts: ["Kunitz domain", "BPTI", "disulfide bonds", "active loop", "positive set", "profile construction"],
    products: ["full slide walkthrough", "real slide screenshots", "project checklist", "notebook links", "mini-labs"],
    lessonType: "source-based project lesson",
    resources: {
      slides: LB1_DECKS["7-ProjectIntro.pdf"],
      notebook: LB1_DRIVE.projectNotebook,
      projectIterativeNotebook: LB1_DRIVE.projectIterativeNotebook,
      ...sharedResources,
    },
    aliases: ["07", "kunitz", "project"],
    componentKey: "lb1-07-kunitz-project",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-08-mapping-problems",
    code: "LB1.08",
    module: "module-2c",
    order: 8,
    status: "available",
    title: "Mapping problems: annotations, residues and databases",
    summary: "Mapping sequence, structure and database annotations is a practical problem: identifiers, residue numbering and evidence transfer can break naive workflows.",
    tags: ["mapping", "annotation", "UniProt", "PDB", "residue numbering"],
    sourceDeck: "8-MappingProblems.pdf",
    concepts: ["identifier mapping", "residue numbering", "sequence-to-structure mapping", "database annotations", "evidence transfer"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["8-MappingProblems.pdf"], ...sharedResources },
    aliases: ["08", "mapping"],
    componentKey: "lb1-08-mapping-problems",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-09-structure-analysis",
    code: "LB1.09",
    module: "module-2c",
    order: 9,
    status: "available",
    title: "Protein structure analysis",
    summary: "Protein structure analysis connects molecular biology data, PDB/FASTA-like entries, sequence-to-structure thinking and structural descriptors.",
    tags: ["structure analysis", "PDB", "FASTA", "descriptors", "protein features"],
    sourceDeck: "9-StructureAnalysis.pdf",
    concepts: ["PDB entries", "FASTA entries", "geometrical features", "secondary structure", "tertiary structure", "sequence-to-structure"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["9-StructureAnalysis.pdf"], ...sharedResources },
    aliases: ["09", "structure-analysis"],
    componentKey: "lb1-09-structure-analysis",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-10-protein-complex",
    code: "LB1.10",
    module: "module-2d",
    order: 10,
    status: "available",
    title: "Protein complexes and interaction surfaces",
    summary: "Protein-protein interactions, interface area, specificity, hot spots, alanine scanning logic and interaction-surface reasoning.",
    tags: ["protein complex", "interface", "hot spots", "alanine scanning", "ddG"],
    sourceDeck: "10-ProteinComplex.pdf",
    concepts: ["interface area", "specificity", "hot spots", "alanine scanning", "delta delta G", "complex prediction"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["10-ProteinComplex.pdf"], ...sharedResources },
    aliases: ["10", "protein-complex", "complexes"],
    componentKey: "lb1-10-protein-complex",
    driveFolder: LB1_DRIVE.root,
  },
  {
    id: "lb1-11-protein-variants",
    code: "LB1.11",
    module: "module-2d",
    order: 11,
    status: "available",
    title: "Protein variants and effect prediction",
    summary: "Predicting protein-variant effects for personalized medicine: SNVs/SNPs/SAVs, coding versus non-coding changes and sequence/structure-function evidence.",
    tags: ["variants", "SNP", "SNV", "SAV", "personalized medicine"],
    sourceDeck: "11-ProteinVariants.pdf",
    concepts: ["coding variants", "non-coding variants", "synonymous", "non-synonymous", "sequence-function", "structure-function"],
    products: ["full slide walkthrough", "real slide screenshots", "mini-labs", "exam prompts"],
    lessonType: "source-based lesson",
    resources: { slides: LB1_DECKS["11-ProteinVariants.pdf"], ...sharedResources },
    aliases: ["11", "protein-variants", "variants"],
    componentKey: "lb1-11-protein-variants",
    driveFolder: LB1_DRIVE.root,
  },
];

export const LB1_STUDY_ROUTES = [
  {
    title: "Fast exam route",
    body: "Start with overview, structure alignment, HMM definitions, HMMER and variant/complex prompts. Write short answers, not loose keyword lists.",
    lessonIds: ["lb1-00-module-overview", "lb1-01-structure-alignment", "lb1-04-hidden-markov-models", "lb1-06-hmmer", "lb1-10-protein-complex", "lb1-11-protein-variants"],
  },
  {
    title: "HMMs route",
    body: "Move from probabilistic models to hidden paths, profile HMMs and HMMER. Keep P(sequence | model) separate from P(model | sequence).",
    lessonIds: ["lb1-03-mm-theory", "lb1-04-hidden-markov-models", "lb1-05-hmm-alignments", "lb1-06-hmmer"],
  },
  {
    title: "Project route",
    body: "Use the Kunitz project as the practical spine: define positive examples, build a profile, search databases and justify hits statistically.",
    lessonIds: ["lb1-02-multiple-alignments", "lb1-05-hmm-alignments", "lb1-06-hmmer", "lb1-07-kunitz-project", "lb1-08-mapping-problems"],
  },
  {
    title: "Structure/function route",
    body: "Review protein features, structure alignment, mapping, complexes and variants as one annotation-and-mechanism story.",
    lessonIds: ["lb1-01-structure-alignment", "lb1-08-mapping-problems", "lb1-09-structure-analysis", "lb1-10-protein-complex", "lb1-11-protein-variants"],
  },
];

export const LB1_HIGH_YIELD_QUESTIONS = [
  "What is transfer of knowledge in functional annotation?",
  "Why is sequence identity not always enough to infer protein family/function?",
  "What is the difference between structure superimposition and structure alignment?",
  "What information does a multiple alignment reveal?",
  "What is a probabilistic model for biological sequences?",
  "Explain P(sequence | model) vs P(model | sequence).",
  "Define an HMM: states, transitions, emissions, path.",
  "Why is the HMM path called hidden?",
  "What problem does the Forward algorithm solve?",
  "Why are profile HMMs useful for protein families?",
  "What does HMMER do, and why is it useful for remote homologs?",
  "What is the Kunitz-domain project asking students to build?",
  "What is a protein-protein interaction hot spot?",
  "What is the difference between synonymous and non-synonymous variants?",
  "Which features can help predict the effect of a protein variant?",
];

export const LB1_PLANNED_CONTENT = {
  "lb1-02-multiple-alignments": {
    studyTargets: [
      "Explain why a multiple alignment is more informative than independent pairwise alignments.",
      "Use conserved positions to reason about family membership and functional sites.",
      "Interpret variable columns as evidence of tolerance, divergence or alignment uncertainty.",
      "Connect residue distributions to sequence logos and profile representations.",
      "Distinguish identical conservation from similar substitutions among amino acids.",
    ],
    commonTraps: [
      "Treating all conserved columns as catalytic sites without supporting evidence.",
      "Forgetting that bad alignment quality can create fake conservation.",
      "Reading a sequence logo as a complete structural explanation.",
    ],
    likelyPrompts: [
      "What information can a multiple alignment reveal about a protein family?",
      "How can conserved and variable sites support functional annotation?",
      "Why do similar substitutions matter when interpreting aligned residues?",
    ],
  },
  "lb1-03-mm-theory": {
    studyTargets: [
      "Define a probabilistic model as a system that assigns probabilities to biological sequences.",
      "Separate generative definitions from associative or discriminative uses.",
      "Explain why models need training data and parameters.",
      "Contrast P(sequence | model) with P(model | sequence).",
      "Use Bayes theorem as the conceptual bridge between likelihood and posterior reasoning.",
    ],
    commonTraps: [
      "Swapping P(sequence | model) and P(model | sequence).",
      "Calling every score a probability without checking normalization.",
      "Forgetting that a useful model can still be an approximation.",
    ],
    likelyPrompts: [
      "What is a probabilistic model for biological sequences?",
      "Why is Bayes theorem useful in model-based sequence analysis?",
      "What does it mean for a biological sequence model to be trainable?",
    ],
  },
  "lb1-04-hidden-markov-models": {
    studyTargets: [
      "Define HMM components: states, transitions, emissions, alphabet and start/end probabilities.",
      "Explain why the state path is hidden while the emitted sequence is observed.",
      "Describe sequence probability as a sum over possible hidden paths.",
      "Explain why naive path enumeration is infeasible for realistic sequences.",
      "Connect Forward, Backward and Viterbi to dynamic programming over repeated subproblems.",
    ],
    commonTraps: [
      "Assuming the observed sequence directly tells you the hidden path.",
      "Confusing the most probable path with the total probability of the sequence.",
      "Trying to enumerate all paths instead of using dynamic programming.",
    ],
    likelyPrompts: [
      "Define an HMM and identify its visible and hidden parts.",
      "Why is the path hidden in a Hidden Markov Model?",
      "What problem does the Forward algorithm solve?",
    ],
  },
  "lb1-05-hmm-alignments": {
    studyTargets: [
      "Explain why a profile HMM is position-specific.",
      "Map match, insert and delete states to alignment columns.",
      "Contrast profile HMMs with simple substitution matrices.",
      "Explain how indels are represented as part of the model rather than as afterthoughts.",
      "Connect multiple alignments to profile construction.",
    ],
    commonTraps: [
      "Thinking insert/delete states emit the same evidence as match states.",
      "Treating profile HMMs as just prettier scoring matrices.",
      "Ignoring alignment quality before building a profile.",
    ],
    likelyPrompts: [
      "Why are profile HMMs useful for protein families?",
      "What do match, insert and delete states represent?",
      "How do profile HMMs improve over a single substitution matrix?",
    ],
  },
  "lb1-06-hmmer": {
    studyTargets: [
      "Describe the HMMER workflow from multiple alignment to profile model to database search.",
      "Know what hmmbuild and hmmsearch do at a high level.",
      "Explain why profile-HMM searches can detect remote homologs.",
      "Interpret E-values as statistical significance evidence, not biological proof by themselves.",
      "Connect database hits back to annotation constraints and family evidence.",
    ],
    commonTraps: [
      "Calling every low E-value hit a confirmed function.",
      "Using HMMER without checking the quality and representativeness of the seed alignment.",
      "Forgetting that remote homology needs careful interpretation.",
    ],
    likelyPrompts: [
      "What does HMMER do?",
      "Why is HMMER useful for remote homolog detection?",
      "How do hmmbuild and hmmsearch fit into a profile-HMM workflow?",
    ],
  },
  "lb1-07-kunitz-project": {
    studyTargets: [
      "Explain the goal: build a profile HMM for the Kunitz-type protease inhibitor domain.",
      "Identify why BPTI/aprotinin and conserved disulfide bonds matter.",
      "Use positive examples to build a family model instead of searching from one sequence only.",
      "Connect active-loop conservation to functional interpretation.",
      "Document the workflow from seed sequences to model building and hit interpretation.",
    ],
    commonTraps: [
      "Treating the project as a button-clicking HMMER exercise.",
      "Ignoring domain boundaries when building the profile.",
      "Accepting hits without checking whether they contain the Kunitz domain pattern.",
    ],
    likelyPrompts: [
      "What is the Kunitz-domain project asking students to build?",
      "Why is a profile HMM appropriate for this project?",
      "Which biological features make Kunitz domains recognizable?",
    ],
  },
  "lb1-08-mapping-problems": {
    studyTargets: [
      "Explain why annotation mapping is not just sequence search.",
      "Identify common mapping problems between UniProt, PDB and residue numbering.",
      "Track how sequence positions can change across isoforms, chains, missing residues and processed proteins.",
      "Distinguish identifier mapping from residue-level mapping.",
      "State evidence limits before transferring annotations.",
    ],
    commonTraps: [
      "Assuming residue 50 in one database is residue 50 everywhere.",
      "Forgetting missing residues and chain IDs in PDB structures.",
      "Transferring annotation without checking the mapped region.",
    ],
    likelyPrompts: [
      "Why can residue numbering create annotation errors?",
      "What makes mapping problems difficult in structural bioinformatics?",
      "How should you check a mapped functional site?",
    ],
  },
  "lb1-09-structure-analysis": {
    studyTargets: [
      "Review protein basics: backbone, side chains and secondary/tertiary/quaternary structure.",
      "Connect FASTA-like sequence entries to PDB-like structure entries.",
      "Identify geometrical and structural descriptors used in protein analysis.",
      "Explain how sequence-to-structure reasoning supports functional annotation.",
      "Use structure features as evidence, not decoration.",
    ],
    commonTraps: [
      "Forgetting that protein structure contains missing and uncertain regions.",
      "Treating secondary-structure labels as the whole structural explanation.",
      "Ignoring side-chain chemistry when interpreting function.",
    ],
    likelyPrompts: [
      "Which protein features are useful for structure analysis?",
      "How does structure analysis support functional annotation?",
      "Why do side-chain properties matter in structural bioinformatics?",
    ],
  },
  "lb1-10-protein-complex": {
    studyTargets: [
      "Define protein-protein interaction interface and interface area.",
      "Explain specificity and why not every contact has equal functional importance.",
      "Define hot spots as residues that contribute disproportionately to binding.",
      "Connect alanine scanning to testing residue contribution.",
      "Use delta delta G as an effect measure when covered by the source material.",
    ],
    commonTraps: [
      "Calling every interface residue a hot spot.",
      "Confusing contact count with binding importance.",
      "Ignoring biological context when predicting complexes.",
    ],
    likelyPrompts: [
      "What is a protein-protein interaction hot spot?",
      "How can alanine scanning reveal important interface residues?",
      "What features help reason about protein complex specificity?",
    ],
  },
  "lb1-11-protein-variants": {
    studyTargets: [
      "Distinguish SNV, SNP and SAV terminology.",
      "Separate coding from non-coding variants.",
      "Explain synonymous versus non-synonymous changes.",
      "Connect sequence conservation, structure and function to variant-effect prediction.",
      "Frame variant prediction as evidence integration for personalized medicine.",
    ],
    commonTraps: [
      "Assuming every non-synonymous variant is damaging.",
      "Ignoring protein context, conservation and structural environment.",
      "Treating prediction scores as clinical truth without validation.",
    ],
    likelyPrompts: [
      "What is the difference between synonymous and non-synonymous variants?",
      "Which features can help predict the effect of a protein variant?",
      "Why is variant-effect prediction relevant to personalized medicine?",
    ],
  },
};

export const LB1_ALIAS_TO_ID = LB1_LESSONS.reduce((acc, lesson) => {
  for (const alias of lesson.aliases || []) acc[alias] = lesson.id;
  return acc;
}, {});

export function lb1LessonHref(lesson) {
  return lesson ? `#/lesson/${lesson.id}` : "#/";
}

export function resolveLB1LessonId(routeId) {
  return LB1_ALIAS_TO_ID[routeId] || routeId;
}

export function getLB1LessonById(routeId) {
  const id = resolveLB1LessonId(routeId);
  return LB1_LESSONS.find((lesson) => lesson.id === id) || null;
}

export function getLB1LessonsByModule(moduleId) {
  return LB1_LESSONS.filter((lesson) => lesson.module === moduleId);
}

export function getLB1Neighbors(lessonId) {
  const id = resolveLB1LessonId(lessonId);
  const index = LB1_LESSONS.findIndex((lesson) => lesson.id === id);
  return {
    previous: index > 0 ? LB1_LESSONS[index - 1] : null,
    next: index >= 0 && index < LB1_LESSONS.length - 1 ? LB1_LESSONS[index + 1] : null,
  };
}

export function getAvailableLB1Lessons() {
  return LB1_LESSONS.filter((lesson) => lesson.status === "available");
}

export function getLB1ProgressTotal() {
  return getAvailableLB1Lessons().length;
}

export function filterLB1Lessons(lessons, query) {
  const q = query.trim().toLowerCase();
  if (!q) return lessons;
  return lessons.filter((lesson) => {
    const resourceText = Object.values(lesson.resources || {}).map((value) => {
      if (!value) return "";
      if (typeof value === "string") return value;
      return JSON.stringify(value);
    });
    const haystack = [
      lesson.id,
      lesson.code,
      lesson.title,
      lesson.summary,
      lesson.lessonType,
      lesson.sourceDeck,
      ...(lesson.tags || []),
      ...(lesson.concepts || []),
      ...(lesson.products || []),
      ...resourceText,
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

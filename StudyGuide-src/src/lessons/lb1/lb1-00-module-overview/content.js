export const lessonContent = {
  id: "lb1-00-module-overview",
  extractionStatus: "source-based first pass; no local slide images referenced",
  whyThisMatters: "LB1 is not a list of tools to memorize. The course asks you to connect a biological question to a computational method, then defend what can and cannot be inferred from sequence, structure, alignments, probabilistic models and database evidence.",
  objectives: [
    "Explain the main aims of the Capriotti module: sequence/structure analysis tools, functional annotation, probabilistic models, HMMs, HMMER and applied protein reasoning.",
    "Place each deck in the course route from structural bioinformatics to profile-HMM project work and protein applications.",
    "State what it means to transfer knowledge from known proteins to an unknown sequence under explicit constraints.",
    "Choose a study route depending on whether the immediate target is exam preparation, HMM understanding, the Kunitz project or structure/function reasoning.",
    "Avoid treating tool output as biological truth without checking model assumptions, evidence quality and annotation scope.",
  ],
  coreConcepts: [
    {
      title: "Tools answer biological questions",
      body: "The guide should always start from the biological problem: compare structures, infer family membership, search homologs, map annotations, reason about complexes or predict variant effects. A method is useful only when its assumptions fit that problem.",
      keywords: ["question first", "method choice", "assumptions"],
    },
    {
      title: "Transfer of knowledge is conditional",
      body: "Functional annotation by similarity is strongest when proteins belong to the same family, preserve relevant residues or structures, and are supported by reliable prior annotation. Similarity alone is evidence, not proof.",
      keywords: ["family", "evidence", "annotation"],
    },
    {
      title: "Structure can preserve signal",
      body: "Protein structures can remain similar even when sequence identity is low. That is why structural alignment, RMSD and fold-level reasoning can recover relationships missed by simple sequence comparison.",
      keywords: ["fold", "RMSD", "low identity"],
    },
    {
      title: "Profiles beat one-sequence thinking",
      body: "Multiple alignments and profile HMMs use a family-level pattern: conserved positions, tolerated substitutions and indel tendencies. This is stronger than searching with one sequence and one substitution matrix.",
      keywords: ["MSA", "profile HMM", "family model"],
    },
    {
      title: "Probabilities need interpretation",
      body: "Model-based sequence analysis asks different questions: how likely is a sequence under a model, which model explains a sequence, and which hidden path best explains the observed symbols.",
      keywords: ["likelihood", "Bayes", "hidden path"],
    },
    {
      title: "Applications return to biology",
      body: "Mapping, complexes and variants are where computational evidence must be translated back into residues, structures, interactions, function and disease relevance.",
      keywords: ["mapping", "interfaces", "variants"],
    },
  ],
  routeSteps: [
    {
      title: "Structural foundations",
      body: "Start with structure alignment and multiple alignments. Learn what similarity means before using it to transfer annotation.",
    },
    {
      title: "Model-based sequence analysis",
      body: "Move to probabilistic models, HMMs and profile HMMs. Keep observed sequence, hidden path and model parameters separate.",
    },
    {
      title: "HMMER and the Kunitz project",
      body: "Use family profiles in practice: build a model, search databases, inspect hits and justify why the Kunitz domain is a good target.",
    },
    {
      title: "Annotation and applications",
      body: "Finish with mapping, structure analysis, complexes and variants. The final skill is explaining what the evidence supports biologically.",
    },
  ],
  walkthroughSections: [
    {
      range: "Deck 0 opening and aims",
      title: "What this module is trying to teach",
      intro: "Read the overview deck as the contract for the module. It tells you that LB1 is about understanding tools for biological inference, not only pressing buttons.",
      slides: [
        {
          label: "Course overview",
          title: "Sequence and structure analysis tools",
          comment: "The course begins with the toolkit: methods for analyzing biological sequences and structures, then uses those tools to support functional annotation and problem solving.",
          teaching: "Study interpretation: when you learn a tool, write down the biological question it answers and the evidence it produces.",
          remember: "A good answer names the method, the input, the output and the biological interpretation.",
          prompt: "Give an example of a biological question that requires structure analysis rather than sequence search alone.",
        },
        {
          label: "Main aims",
          title: "Functional annotation is evidence transfer",
          comment: "The overview frames functional annotation as a central aim. That means inferring properties of an unknown protein from known sequences, structures, domains or families.",
          teaching: "Study interpretation: transfer is valid only under constraints such as same family, conserved region, similar structure and reliable source annotation.",
          remember: "Do not write 'similar sequence therefore same function' without stating the conditions.",
          trap: "The classic trap is over-annotation: transferring a precise function from weak similarity or from a different domain context.",
        },
      ],
    },
    {
      range: "Deck 0 topic map",
      title: "The chronological route is also the logic route",
      intro: "The deck order is not random. It moves from structural evidence to family-level patterns, then to probabilistic models and practical profile-HMM searches.",
      slides: [
        {
          label: "Structural bioinformatics",
          title: "Structure alignment before profile modeling",
          comment: "Protein geometrical features, structural alignment and multiple alignments come first because they define what similarity and conservation mean.",
          teaching: "Study interpretation: if you cannot explain correspondence, RMSD or conserved positions, HMMER hits will feel like unexplained magic.",
          remember: "Structure and alignment concepts are the vocabulary for later family models.",
          prompt: "Why can a structural comparison be informative when sequence identity is low?",
        },
        {
          label: "Probabilistic models",
          title: "From scores to sequence probability",
          comment: "The middle of the course introduces probabilistic models, HMMs and profile HMMs. This changes the language from raw similarity to probability under a model.",
          teaching: "Study interpretation: keep P(sequence | model), P(model | sequence) and best hidden path as different questions.",
          remember: "Bayes theorem is the conceptual bridge; dynamic programming is the computational tool.",
          trap: "Do not confuse the most probable hidden path with the total probability of the observed sequence.",
        },
        {
          label: "Applications",
          title: "HMMER, Kunitz, mapping, complexes and variants",
          comment: "The last part applies the reasoning: build and search a profile HMM, map annotations carefully, analyze structures, reason about interactions and interpret protein variants.",
          teaching: "Study interpretation: practical bioinformatics is often about checking whether an inference is justified, not only finding a hit.",
          remember: "Every output needs a quality check: source, alignment, model, mapping and biological context.",
          prompt: "What extra checks would you make before using an HMMER hit as functional annotation?",
        },
      ],
    },
    {
      range: "Study strategy",
      title: "How to use this guide",
      intro: "The guide gives different routes because exam preparation, project work and conceptual HMM learning ask for different pacing.",
      slides: [
        {
          label: "Fast exam route",
          title: "Prepare short explanations",
          comment: "For the exam, practice compact answers: define the concept, state the workflow, name the trap and connect it to a biological interpretation.",
          teaching: "Study interpretation: common traps are not side notes; they are often what separates a memorized answer from a correct one.",
          remember: "Definition plus contrast plus example is the safest answer structure.",
        },
        {
          label: "Project route",
          title: "Use Kunitz as a workflow spine",
          comment: "The Kunitz project ties multiple alignment, profile HMMs, HMMER and annotation checking into one practical sequence of decisions.",
          teaching: "Study interpretation: document why the seed set, domain boundaries and significance thresholds are credible.",
          remember: "The project is not finished when the command runs; it is finished when the hits are interpreted.",
        },
      ],
    },
  ],
  checkpoints: [
    {
      question: "What does Capriotti expect you to be able to do beyond running tools?",
      answer: "You should explain what each tool assumes, what input it uses, what output it produces, and how that output supports or does not support a biological inference.",
    },
    {
      question: "Why is transfer of knowledge conditional?",
      answer: "Because similarity does not automatically imply identical function. The transfer is stronger when the proteins belong to the same family, preserve relevant residues or structures, and the source annotation is reliable.",
    },
    {
      question: "Why does the course move from alignments to HMMs and HMMER?",
      answer: "Alignments reveal conserved and variable family patterns. HMMs and profile HMMs turn those patterns into probabilistic models that can search databases and detect remote homologs more sensitively.",
    },
    {
      question: "Which route should you use if your goal is the Kunitz project?",
      answer: "Start with multiple alignments and profile HMMs, then study HMMER, then the Kunitz project, and finally mapping problems so hits and domain annotations are interpreted carefully.",
    },
  ],
  modelAnswer: {
    question: "What is the main logic of Laboratory of Bioinformatics I?",
    answer: "LB1 teaches how to connect biological questions to computational evidence. The course starts from sequence and structure analysis, then uses alignments to detect conserved family patterns, introduces probabilistic models and HMMs, applies profile HMMs through HMMER and the Kunitz-domain project, and finishes with mapping, structure analysis, complexes and variants. The central skill is not only running a tool, but explaining why the method is appropriate, what assumptions it makes, and how confidently its output can support functional annotation.",
  },
  sourceNotes: [
    "Primary source: 0-Module-LSB1-2.pdf in the Capriotti LB1 Drive folder.",
    "Supporting source folders for transcriptions and recordings are linked, but this first pass avoids transcript-specific quotes unless a class match is verified.",
    "No local slide screenshots are referenced in this first pass; use the source PDF button for visual details.",
  ],
};

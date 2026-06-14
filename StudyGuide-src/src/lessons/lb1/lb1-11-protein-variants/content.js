import { buildSections } from "../shared/buildContent.js";

const deck = "11-ProteinVariants.pdf";
const deckFolder = "11-protein-variants";
const title = "Protein variants and effect prediction";

export const lessonContent = {
  id: "lb1-11-protein-variants",
  extractionStatus: "real slide screenshots extracted from 11-ProteinVariants.pdf; full deck covered",
  whyThisMatters: "Variant-effect prediction integrates everything: sequence conservation, structure, function, annotation quality and disease relevance. The goal is not to call every mutation damaging, but to explain what evidence supports a predicted effect.",
  objectives: ["Distinguish SNV, SNP and SAV terminology.", "Separate coding, non-coding, synonymous and non-synonymous variants.", "Explain why conservation and structure help predict variant effects.", "Connect variant prediction to personalized medicine with caution."],
  coreConcepts: [
    { title: "Variant terminology", body: "Different terms describe population frequency, DNA change and amino-acid change.", keywords: ["SNV", "SNP", "SAV"] },
    { title: "Functional effect", body: "A variant can affect protein sequence, structure, stability, interaction or regulation.", keywords: ["effect", "function", "structure"] },
    { title: "Evidence integration", body: "Predictions combine conservation, physicochemical change, structural context and annotations.", keywords: ["conservation", "features", "prediction"] },
  ],
  routeSteps: [
    { title: "Define the variant", body: "Start with DNA/protein terminology and coding consequence." },
    { title: "Locate the context", body: "Ask whether the change affects a conserved site, domain, interface or structural core." },
    { title: "Predict cautiously", body: "Combine features and state uncertainty, especially for clinical relevance." },
  ],
  walkthroughSections: buildSections({
    deckFolder,
    deck,
    title,
    remember: "Variant prediction is evidence integration, not diagnosis.",
    trap: "Do not assume every non-synonymous variant is damaging or every synonymous variant is irrelevant.",
    prompt: "Which evidence type does this slide use for variant interpretation: terminology, conservation, structure, function, method or clinical context?",
    sections: [
      { start: 1, end: 8, title: "Variant motivation and personalized medicine", intro: "The opening slides frame why protein-variant prediction matters for disease and individualized interpretation.", teaching: "Study interpretation: clinical relevance raises the standard for evidence and caution." },
      { start: 9, end: 18, title: "Terminology: SNVs, SNPs, SAVs and coding consequence", intro: "This block establishes the vocabulary for DNA and protein changes.", teaching: "Study interpretation: define the variant before predicting its effect." },
      { start: 19, end: 32, title: "Sequence-function evidence", intro: "The deck develops conservation and evolutionary evidence for variant interpretation.", teaching: "Study interpretation: a conserved position is a warning signal, but the mechanism still needs explanation." },
      { start: 33, end: 48, title: "Structure-function evidence", intro: "This part connects variants to stability, active sites, interfaces and structural environment.", teaching: "Study interpretation: structure tells you why a substitution may be tolerated or damaging." },
      { start: 49, end: 64, title: "Prediction methods and features", intro: "The late-middle slides discuss computational features and prediction logic.", teaching: "Study interpretation: prediction is feature integration, not a single magic score." },
      { start: 65, end: 80, title: "Disease interpretation and reporting limits", intro: "The closing slides connect variant scores back to personalized medicine and reporting.", teaching: "Study interpretation: separate computational prediction from validated clinical truth." },
    ],
  }),
  miniLabs: [
    { title: "Variant consequence classifier", goal: "Practice terminology first.", steps: ["Write one synonymous, one non-synonymous and one non-coding example.", "State which one changes the protein sequence.", "State why the other cases may still matter biologically."], output: "Three classified variants with consequences.", check: "Coding consequence is only one layer of effect.", trap: "Do not assume synonymous always means no effect." },
    { title: "Structure-context variant audit", goal: "Use structure to explain a mutation.", steps: ["Place the residue in a core, surface, active site or interface context.", "Compare physicochemical properties before and after substitution.", "Write a cautious effect prediction."], output: "A structure-aware prediction paragraph.", check: "Mechanism makes the prediction stronger.", trap: "Do not call every non-synonymous change damaging." },
    { title: "Prediction-score disclaimer", goal: "Practice responsible reporting.", steps: ["State the computational prediction.", "List two features supporting it.", "List one reason experimental or clinical validation may still be needed."], output: "A prediction plus evidence and caveat.", check: "Prediction is evidence, not diagnosis.", trap: "Do not treat model scores as clinical truth." },
  ],
  checkpoints: [
    { question: "What is the difference between synonymous and non-synonymous variants?", answer: "A synonymous coding variant does not change the encoded amino acid, while a non-synonymous variant changes the protein sequence." },
    { question: "Which features help predict variant effect?", answer: "Conservation, physicochemical change, domain position, active or binding sites, solvent exposure, stability, interfaces and annotations can help." },
    { question: "Why is variant prediction relevant to personalized medicine?", answer: "It helps prioritize which genetic changes may affect protein function or disease risk, but predictions require careful validation." },
  ],
  modelAnswer: { question: "Which features can help predict the effect of a protein variant?", answer: "Useful features include evolutionary conservation, whether the amino-acid change is chemically conservative, location in a domain, active site, binding interface or structural core, solvent exposure, predicted stability change and known functional annotations. A strong answer explains the mechanism: why this residue and substitution matter in context. The result should be framed as a prediction requiring validation, not as automatic clinical truth." },
  sourceNotes: ["Primary source: 11-ProteinVariants.pdf in the Capriotti LB1 Drive folder.", "All 80 slides are represented with real extracted screenshots and grouped into complete study sections.", "Teaching-emphasis boxes are study interpretations from the slides, not direct transcript quotations."],
};

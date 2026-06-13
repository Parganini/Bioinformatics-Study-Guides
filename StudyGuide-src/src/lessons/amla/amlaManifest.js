export const AMLA_RESOURCE_LABELS = {
  slides: "Slides",
  transcript: "Transcript",
  recording: "Recording",
  notebook: "Notebook / Colab",
  code: "Code",
  extraSlides: "Extra slides",
  playgroundSlides: "Playground slides",
  folder: "Drive folder",
  project: "Project brief",
  audio: "Audio",
};

export const AMLA_STATUS = {
  available: {
    label: "Available",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  draft: {
    label: "Draft",
    className: "border-amber-200 bg-amber-50 text-amber-800",
  },
  todo: {
    label: "Content pending",
    className: "border-stone-200 bg-stone-50 text-stone-600",
  },
};

export const AMLA_MODULES = [
  {
    id: "module-1",
    code: "M1",
    title: "Module 1 - neural-network foundations",
    shortTitle: "Neural-network foundations",
    description: "Advanced-course setup, transition from classical ML to neural networks, deep-learning frameworks and first Keras/TensorFlow workflows.",
  },
  {
    id: "module-2",
    code: "M2",
    title: "Module 2 - applied deep-learning labs and project work",
    shortTitle: "Applied deep-learning labs",
    description: "Computer-vision notebooks, segmentation workflows, explainable AI and project/report interpretation.",
  },
];

export const AMLA_DRIVE = {
  root: "https://drive.google.com/drive/folders/19OueXkS4AXLF1EHzF0Y5FyzvrUZx-0Qv",
  module1: "https://drive.google.com/drive/folders/1VMU4k8t0nYIZUPSVpIK_6NLdotE7DhcZ",
  module2: "https://drive.google.com/drive/folders/1P2chb1eTcNK4JuEzQGGzTNOzb4c0lvbb",
  transcriptions: "https://drive.google.com/drive/folders/1gxxfQFoiWPxtsx41Sw_JtfS25viV00ng",
  recordingsDoc: "https://docs.google.com/document/d/1kBDYscPjxhGS9K3pax8NRuuXB5rY5vVJKw_NDghhNWA/edit?usp=drivesdk",
  projectDoc: "https://docs.google.com/document/d/1VQ-mZWB1zlTwZOK5pVoBNtGqOrb6EA5DymQeTS-MQEU/edit?usp=drivesdk",
  projectVideo: "https://drive.google.com/file/d/15Nl_wDlw07Dxuw_1BP4uDPGLPtK-C4bu/view?usp=drivesdk",
  projectAudio: "https://drive.google.com/file/d/1mWYQWrttnEgd-_dOSbGD_bpop_IxXke4/view?usp=drivesdk",
  notebooks: "https://drive.google.com/drive/folders/1f8gEC7I8K4ursZg7ZJIaBOf4stdKfw09",
};

const recordings = {
  "2026-04-16": "https://www.youtube.com/watch?v=4IT_izOElXA&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=1",
  "2026-04-17": "https://www.youtube.com/watch?v=YAJWDckZKZg&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=2",
  "2026-04-20": "https://www.youtube.com/watch?v=Prix97eRHwA&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=3",
  "2026-04-23": "https://www.youtube.com/watch?v=_LONRHdr_8Q&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=4",
  "2026-05-07": "https://www.youtube.com/watch?v=9OE3Qlrnf_E&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=5",
  "2026-05-08": "https://www.youtube.com/watch?v=rTEcyFJinA0&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=6",
  "2026-05-14": "https://www.youtube.com/watch?v=40TwrHkEzaQ&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=7",
  "2026-05-15": "https://www.youtube.com/watch?v=8NDV5Ql7_XY&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=8",
  "2026-05-21": "https://www.youtube.com/watch?v=2bvHJpqVu5c&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=9",
  "2026-05-22": "https://www.youtube.com/watch?v=CN4NDNWw9HI&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=10",
  "2026-05-28": "https://www.youtube.com/watch?v=abA-Bguj2eU&list=PLZSGWjLWZL3InLnGunpUvWeZpiYfYC8J2&index=11",
};

const transcripts = {
  "2026-04-16": "https://docs.google.com/document/d/1hV3TTq0q5B-W7oHusgqlOOpEIZLflLfRwrBLHEzxnJI/edit?usp=drivesdk",
  "2026-04-17": "https://docs.google.com/document/d/1POOeHIq5DE34yYVF3Uwfi0gvqTGnULBDFx7_WkBQAKo/edit?usp=drivesdk",
  "2026-04-20": "https://docs.google.com/document/d/1Q0WwnO7XfWSQtwfbXfN_BRnu1L-xqMEVeCJvSa5gYJM/edit?usp=drivesdk",
  "2026-04-23": "https://docs.google.com/document/d/1Dt5gr8TFjsWuM7oQ2r23kUXd4XjFTn0kcuvKYCK5ZWw/edit?usp=drivesdk",
  "2026-05-07": "https://docs.google.com/document/d/1W_Ali0EtwLVLa_8c3Orx1Gjnmy5ZVOWFA-eBuPFJbJo/edit?usp=drivesdk",
  "2026-05-08": "https://docs.google.com/document/d/1cQaVHsdYRlrLCvNe80Xuxr8uNu408IeCBOsC4Y4id9I/edit?usp=drivesdk",
  "2026-05-14": "https://docs.google.com/document/d/12BP5d3BwSxY0IYEc8P_ufkBpkP2ozt3b_XvxoJ1Mmzw/edit?usp=drivesdk",
  "2026-05-15": "https://docs.google.com/document/d/1pR7KB_8tgdt73Y7KNYLsjkMsYkwwnMNxoi91diPeAd0/edit?usp=drivesdk",
  "2026-05-21": "https://docs.google.com/document/d/1xbZV4684Uuceelm3NJzI0VYPRay2V7HOs3F1mZ4tXms/edit?usp=drivesdk",
  "2026-05-22": "https://docs.google.com/document/d/1zeWUtbwfQzMXUxZrRAYZZR9vTYOk07Q__1-53qxvtH8/edit?usp=drivesdk",
  "2026-05-28": "https://docs.google.com/document/d/1lPW9UVo2A-8zlVAhe_U57IGL3LvuIr5jlxNNfuFCPZ4/edit?usp=drivesdk",
  "2026-05-29": "https://docs.google.com/document/d/1MZvCu7kI5e_cgLQ9apogCkdvMGFmOEnburicHdzoWO4/edit?usp=drivesdk",
};

export const AMLA_STUDY_PRODUCTS = [
  {
    title: "Manifest-driven lessons",
    desc: "AMLA mirrors the DRD architecture: resources, status, routing and placeholders are controlled in one manifest.",
    tags: ["manifest", "routes", "resources"],
  },
  {
    title: "Source-based lessons in progress",
    desc: "Completed pages use the static-slide + commentary format from DRD, while pending classes stay explicit until they are expanded from their slides and transcript.",
    tags: ["slides", "transcript", "source-based"],
  },
  {
    title: "Notebook-first mini-labs",
    desc: "Notebook links are surfaced when present; missing Colab URLs remain explicit TODOs instead of invented links.",
    tags: ["Colab", "Keras", "TensorFlow"],
  },
  {
    title: "Initial practice exam",
    desc: "A first multiple-choice bank focuses on the first two lessons and can later grow to the full-course 60-question set.",
    tags: ["15 questions", "mock mode", "feedback"],
  },
];

export const AMLA_PROJECT_GUIDANCE = {
  title: "Advanced project relevance",
  body: "AMLA project work should show more maturity than simply applying a model. The report must justify model choice, inspect outputs, interpret failures, explain results and include advanced models from the course where appropriate.",
  checklist: [
    "Use at least one advanced model or method from the AMLA part when doing an advanced submission.",
    "Keep code and report self-contained enough that the evaluators can understand what was done.",
    "Interpret results and failure modes instead of reporting only metric values.",
    "Be transparent about LLM/tool use and never delegate interpretation to a generated answer.",
    "Use visualizations as evidence for decisions, not as decoration.",
  ],
};

export const AMLA_LESSONS = [
  {
    id: "amla-2026-04-16-intro-advanced",
    code: "L01",
    module: "module-1",
    date: "2026-04-16",
    status: "available",
    title: "Advanced course launch and neural-network intuition",
    summary: "Course logistics, Basic-to-Advanced expectations, exam/project rules, neural-network motivation and a no-code playground for decision boundaries, activation functions, capacity and convergence.",
    tags: ["course setup", "neural networks", "perceptron", "activation functions", "capacity"],
    lessonType: "theory + interactive demo",
    products: ["source-based lesson", "playground mini-lab", "exam-style MCQs"],
    resources: {
      slides: "https://drive.google.com/file/d/1wKbLPrG0Nxv891cUP4MynsYvPFB8fRvy/view?usp=drivesdk",
      extraSlides: "https://drive.google.com/file/d/1HVWUeKtPUE_pxo0FJryFjEsKjBkwOYQh/view?usp=drivesdk",
      playgroundSlides: "https://drive.google.com/file/d/17Z3vTar-vLGqB932eQguLl2VM8Nv_FiY/view?usp=drivesdk",
      transcript: transcripts["2026-04-16"],
      recording: recordings["2026-04-16"],
      notebook: null,
      code: "https://playground.tensorflow.org/",
    },
    aliases: ["01", "l01", "intro"],
    componentKey: "amla-2026-04-16-intro-advanced",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-04-17-hands-on-setup",
    code: "L02",
    module: "module-1",
    date: "2026-04-17",
    status: "available",
    title: "Frameworks, MNIST and first Keras/TensorFlow workflow",
    summary: "A practical bridge from scikit-learn to deep-learning frameworks: framework choice, TensorFlow vs PyTorch, MNIST classification, Keras Sequential models, compile/fit/evaluate and training curves.",
    tags: ["TensorFlow", "Keras", "PyTorch", "MNIST", "model.fit", "validation"],
    lessonType: "hands-on setup",
    products: ["source-based lesson", "framework comparison", "Keras workflow quiz"],
    resources: {
      slides: "https://drive.google.com/file/d/10FvZXY58dUeHgllfvJmAG4bFqsyao5OG/view?usp=drivesdk",
      transcript: transcripts["2026-04-17"],
      recording: recordings["2026-04-17"],
      notebook: { todo: "The transcript says the MNIST tutorial link is on the slide/QR code, but the extracted PDF text did not expose a standalone URL." },
    },
    aliases: ["02", "l02", "keras-setup", "mnist"],
    componentKey: "amla-2026-04-17-hands-on-setup",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-04-20-neural-networks",
    code: "L03",
    module: "module-1",
    date: "2026-04-20",
    status: "available",
    title: "Keras/MNIST continuation and exam-context discussion",
    summary: "Basic-test feedback followed by the MNIST2A Keras walkthrough: loading MNIST through Keras, Sequential Dense models, softmax multiclass output, compile/fit/validation/evaluate and history diagnostics.",
    tags: ["Keras", "MNIST", "Sequential", "validation", "evaluate", "exam context"],
    lessonType: "hands-on continuation",
    products: ["source-based lesson", "static-slide walkthrough", "MNIST2A mini-lab", "exam-style MCQs"],
    resources: {
      slides: "https://drive.google.com/file/d/10FvZXY58dUeHgllfvJmAG4bFqsyao5OG/view?usp=drivesdk",
      transcript: transcripts["2026-04-20"],
      recording: recordings["2026-04-20"],
      notebook: { todo: "The transcript continues the MNIST/Keras notebook work, but the extracted sources did not expose a standalone Colab/Drive URL." },
    },
    aliases: ["03", "l03", "keras-continuation", "mnist-continuation"],
    componentKey: "amla-2026-04-20-neural-networks",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-04-23-deep-learning-frameworks",
    code: "L04",
    module: "module-1",
    date: "2026-04-23",
    status: "available",
    title: "Neural-network representation, XNOR and decision trees",
    summary: "Formal representation of neural networks with bias units, activations, weight matrices and forward propagation; hidden-layer intuition through XNOR; then decision trees as interpretable non-network classifiers/regressors.",
    tags: ["neural networks", "forward propagation", "XNOR", "decision trees", "CART", "interpretability"],
    lessonType: "theory + baseline mini-lab",
    products: ["source-based lesson", "static-slide walkthrough", "DT notebook mini-lab", "exam-style MCQs"],
    resources: { slides: "https://drive.google.com/file/d/1lr5UIh_hYDwRNs33PO7_Sm40Rc_X7SF-/view?usp=drivesdk", transcript: transcripts["2026-04-23"], recording: recordings["2026-04-23"], notebook: "https://github.com/dbonacorsi/AML-Adv/", code: "https://github.com/dbonacorsi/AML-Adv/" },
    aliases: ["04", "l04", "forward-propagation", "decision-trees", "xnor"],
    componentKey: "amla-2026-04-23-deep-learning-frameworks",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-05-07-training-diagnostics",
    code: "L05",
    module: "module-1",
    date: "2026-05-07",
    status: "available",
    title: "MLP architectures, backpropagation and tensor operations",
    summary: "MLP output heads for regression/classification, backpropagation versus gradient descent, mini-batches/epochs, tensor ranks for real data, tensor operations inside Dense layers and optimizer logic.",
    tags: ["MLP", "backpropagation", "gradient descent", "tensors", "Dense layers", "optimizers"],
    lessonType: "theory + tensor mini-lab",
    products: ["source-based lesson", "tensor mini-lab", "exam-style MCQs"],
    resources: { slides: "https://drive.google.com/file/d/1KH42rcyEu6FZDd91nD1mAuWiSaTzE9dl/view?usp=drivesdk", transcript: transcripts["2026-05-07"], recording: recordings["2026-05-07"], notebook: { todo: "Slide 36 names `..._HandsOn_Tensors.ipynb`, but the extracted sources did not expose a standalone Colab/Drive URL." } },
    aliases: ["05", "l05", "mlp-training", "backpropagation", "tensors"],
    componentKey: "amla-2026-05-07-training-diagnostics",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-05-08-model-regularization",
    code: "L06",
    module: "module-1",
    date: "2026-05-08",
    status: "available",
    title: "Convolutional neural networks: filters, pooling and visualizations",
    summary: "CNN motivation and mechanics: local receptive fields, weight sharing, convolution, feature maps, stride, padding, pooling, flattening, feature-map/filter visualization and a high-level tour of major CNN architectures.",
    tags: ["CNN", "convolution", "feature maps", "padding", "pooling", "VGG", "ResNet"],
    lessonType: "theory + shape mini-lab",
    products: ["source-based lesson", "static-slide walkthrough", "CNN shape interaction", "exam-style MCQs"],
    resources: {
      slides: "https://drive.google.com/file/d/1mXJV9hVkWTujLZcENm2HJ-d5yLzl6yMc/view?usp=drivesdk",
      transcript: transcripts["2026-05-08"],
      recording: recordings["2026-05-08"],
      notebook: { todo: "The lecture discusses CNN visualizations and mentions some material is not in the Colab notebook, but the extracted sources did not expose a standalone notebook URL." },
    },
    aliases: ["06", "l06", "cnn", "convolution", "pooling"],
    componentKey: "amla-2026-05-08-model-regularization",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-05-14-convolutional-networks",
    code: "L07",
    module: "module-1",
    date: "2026-05-14",
    status: "todo",
    title: "Autoencoders and representation learning",
    summary: "Content pending. Module 1 Lecture5 matches this class and focuses on autoencoders, learned compressed representations and reconstruction-oriented training.",
    tags: ["autoencoders", "representation learning", "reconstruction"],
    lessonType: "theory + mini-lab",
    products: ["placeholder", "resources linked"],
    resources: { slides: "https://drive.google.com/file/d/1wy_48Rhs_ABO3WGRN6L2pJAFgXRvP5xz/view?usp=drivesdk", transcript: transcripts["2026-05-14"], recording: recordings["2026-05-14"], notebook: null },
    aliases: ["07", "l07"],
    componentKey: "amla-2026-05-14-convolutional-networks",
    driveFolder: AMLA_DRIVE.module1,
  },
  {
    id: "amla-2026-05-15-cnn-practice",
    code: "L08",
    module: "module-2",
    date: "2026-05-15",
    status: "todo",
    title: "Ensemble learning and Module 2 launch",
    summary: "Content pending. Module 1 Lecture6 matches the ensemble-learning class; Module 2 Lecture0 is kept as a short complementary setup deck.",
    tags: ["ensemble learning", "module 2", "setup"],
    lessonType: "theory + module transition",
    products: ["placeholder", "resources linked"],
    resources: { slides: "https://drive.google.com/file/d/1T8JbT2riAu7GC9v5D0VXxYDp1aFZ5aaD/view?usp=drivesdk", extraSlides: "https://drive.google.com/file/d/1jUiL9kL09mt3kdmnwII7lCsyV4gHCx61/view?usp=drivesdk", transcript: transcripts["2026-05-15"], recording: recordings["2026-05-15"], notebook: null },
    aliases: ["08", "l08"],
    componentKey: "amla-2026-05-15-cnn-practice",
    driveFolder: AMLA_DRIVE.module2,
  },
  {
    id: "amla-2026-05-21-vision-mini-project",
    code: "L09",
    module: "module-2",
    date: "2026-05-21",
    status: "todo",
    title: "Object recognition and counting with Fluocells",
    summary: "Content pending. Module 2 Lecture3_tmp matches this class: object recognition, counting and the Fluocells applied workflow.",
    tags: ["object recognition", "counting", "fluocells", "baseline"],
    lessonType: "hands-on",
    products: ["placeholder", "notebooks linked"],
    resources: {
      slides: "https://drive.google.com/file/d/1cCvCJR99ZIbi3pZtHMWX_ZhHgv_2EXqE/view?usp=drivesdk",
      transcript: transcripts["2026-05-21"],
      recording: recordings["2026-05-21"],
      notebook: "https://drive.google.com/file/d/1bxhhJBMlrnGdzDBPhXsbcjSRl6E_5Ilg/view?usp=drivesdk",
      code: "https://drive.google.com/file/d/1Pv9q32z_IrqMpQryCN3dfugg5w1W14Ob/view?usp=drivesdk",
    },
    aliases: ["09", "l09"],
    componentKey: "amla-2026-05-21-vision-mini-project",
    driveFolder: AMLA_DRIVE.module2,
  },
  {
    id: "amla-2026-05-22-segmentation-workflow",
    code: "L10",
    module: "module-2",
    date: "2026-05-22",
    status: "todo",
    title: "Object recognition/counting continuation and segmentation workflow",
    summary: "Content pending. Module 2 Lecture4 matches this class and continues the computer-vision workflow toward segmentation and training-loop details.",
    tags: ["object recognition", "segmentation", "c-ResUNet", "training loop"],
    lessonType: "hands-on",
    products: ["placeholder", "notebooks linked"],
    resources: {
      slides: "https://drive.google.com/file/d/1yVBi_GR45XfOHviZSlUS-SHpfwEw5t0Z/view?usp=drivesdk",
      transcript: transcripts["2026-05-22"],
      recording: recordings["2026-05-22"],
      notebook: "https://drive.google.com/file/d/1kLScbhmBiE9QIwZbwFNoicogMzEQ7v1R/view?usp=drivesdk",
      code: "https://drive.google.com/file/d/12JHNS0uxEVT6cRwMw9TpKlj0_ZNtLQlg/view?usp=drivesdk",
    },
    aliases: ["10", "l10"],
    componentKey: "amla-2026-05-22-segmentation-workflow",
    driveFolder: AMLA_DRIVE.module2,
  },
  {
    id: "amla-2026-05-28-explainable-ai",
    code: "L11",
    module: "module-2",
    date: "2026-05-28",
    status: "todo",
    title: "Explainable AI: SHAP and LIME",
    summary: "Content pending. XAI slides and the SHAP/LIME notebook are linked for future expansion.",
    tags: ["XAI", "SHAP", "LIME", "interpretability"],
    lessonType: "theory + mini-lab",
    products: ["placeholder", "notebook linked"],
    resources: {
      slides: "https://drive.google.com/file/d/1hA_ILPmLzhTTfzd1LHV1wMrWqYLbhTJv/view?usp=drivesdk",
      transcript: transcripts["2026-05-28"],
      recording: recordings["2026-05-28"],
      notebook: "https://drive.google.com/file/d/1Ek2bEgyK_P8Csn0Og1o6JxLkhFxgc0Yq/view?usp=drivesdk",
    },
    aliases: ["11", "l11", "xai"],
    componentKey: "amla-2026-05-28-explainable-ai",
    driveFolder: AMLA_DRIVE.module2,
  },
  {
    id: "amla-2026-05-29-project-xai-sequential",
    code: "L12",
    module: "module-2",
    date: "2026-05-29",
    status: "todo",
    title: "Final communications and advanced-topic wrap-up",
    summary: "Content pending. Module 1 Lecture7_tmp is the primary class deck for the final AMLA session; project/report PDFs are kept as complementary resources.",
    tags: ["final class", "project", "report", "advanced topics"],
    lessonType: "project briefing + theory",
    products: ["placeholder", "project resources linked"],
    resources: {
      slides: "https://drive.google.com/file/d/1KrhKbjcLPD3OXAxGvc_rYnSC5-_Oe6lN/view?usp=drivesdk",
      extraSlides: "https://drive.google.com/file/d/1QGJSeGL-4gp_Stbnfm5hR2yx8ApLwsU7/view?usp=drivesdk",
      transcript: transcripts["2026-05-29"],
      recording: null,
      audio: AMLA_DRIVE.projectAudio,
      project: AMLA_DRIVE.projectDoc,
      code: "https://drive.google.com/file/d/1ZqHIZTOj_irE2bN9tQjhQ_1P-rhqN4cB/view?usp=drivesdk",
    },
    aliases: ["12", "l12", "project"],
    componentKey: "amla-2026-05-29-project-xai-sequential",
    driveFolder: AMLA_DRIVE.module2,
  },
];

export const AMLA_ALIAS_TO_ID = AMLA_LESSONS.reduce((acc, lesson) => {
  for (const alias of lesson.aliases || []) acc[alias] = lesson.id;
  return acc;
}, {});

export function amlaLessonHref(lesson) {
  return lesson ? `#/lesson/${lesson.id}` : "#/";
}

export function resolveAMLALessonId(routeId) {
  return AMLA_ALIAS_TO_ID[routeId] || routeId;
}

export function getAMLALessonById(routeId) {
  const id = resolveAMLALessonId(routeId);
  return AMLA_LESSONS.find((lesson) => lesson.id === id) || null;
}

export function getAMLALessonsByModule(moduleId) {
  return AMLA_LESSONS.filter((lesson) => lesson.module === moduleId);
}

export function getAMLANeighbors(lessonId) {
  const id = resolveAMLALessonId(lessonId);
  const index = AMLA_LESSONS.findIndex((lesson) => lesson.id === id);
  return {
    previous: index > 0 ? AMLA_LESSONS[index - 1] : null,
    next: index >= 0 && index < AMLA_LESSONS.length - 1 ? AMLA_LESSONS[index + 1] : null,
  };
}

export function getAvailableAMLALessons() {
  return AMLA_LESSONS.filter((lesson) => lesson.status === "available");
}

export function getAMLAProgressTotal() {
  return getAvailableAMLALessons().length;
}

export function filterAMLALessons(lessons, query) {
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
      ...(lesson.tags || []),
      ...(lesson.products || []),
      ...resourceText,
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

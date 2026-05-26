import React, { useMemo, useState } from "react";

const SLIDES_URL = "https://drive.google.com/file/d/1F1UK7JpTC8Sm8arnNC9mfXnj8aLxbzqZ/view?usp=drivesdk";
const TRANSCRIPT_URL = "https://docs.google.com/document/d/1kYvSq04ZeL3mt3GbLNdNwmaAqFImS8CgG70t_9NQWnA/edit?usp=drivesdk";
const CLASS_RECORDING_URL = "#";

const LESSON_COPY = {
  "en": {
    "back": "Back to DRD dashboard",
    "done": "✓ Completed",
    "mark": "Mark completed",
    "eyebrow": "DRD Lesson 1 · Apr 28",
    "title": "From biological question to data and variability.",
    "subtitle": "First study page for DNA/RNA Dynamics, built from the introductory slides and the April 28 transcript: biological question, experimental model, omics, variability, CV, distribution and exam logic.",
    "tags": [
      "biological question",
      "experimental design",
      "technical variability",
      "biological variability",
      "CV"
    ],
    "module": "Module",
    "exam": "Exam",
    "answer": "Answer",
    "core": "Core",
    "bigIdea": "Big idea",
    "bigIdeaText": "A biological question becomes useful only when it becomes a measurable design with controlled variability.",
    "slides": "Slides PDF",
    "transcript": "Transcript",
    "flowEyebrow": "Core flow",
    "flowTitle": "How wet lab science works",
    "flowIntro": "The transcript insists this is not a trivial pipeline: every experiment starts with a focused question, produces data/statistics, and usually opens the next question.",
    "activeStep": "Active step",
    "flow": [
      {
        "title": "1. Biological question",
        "body": "The question must be focused: not simply ‘study cancer’, but which cancer, model, treatment, dose, time, tissue or population."
      },
      {
        "title": "2. Model + design",
        "body": "The model can be in vitro, in vivo, ex vivo, animal or human. The design can be case-control, longitudinal, cross-sectional or time-series."
      },
      {
        "title": "3. Technique",
        "body": "The technique is chosen after the question: DNA-seq, RNA profiling, methylation array, protein/metabolite assays, microbiome and so on."
      },
      {
        "title": "4. Data + statistics",
        "body": "The measurement produces numbers, data and variability. Then we decide whether the result is interpretable and statistically defensible."
      },
      {
        "title": "5. New question",
        "body": "Results rarely close the process. They normally generate a second, more focused biological question."
      }
    ],
    "builderEyebrow": "Interactive builder",
    "builderTitle": "Build a focused biological question",
    "builderPill": "question → experiment",
    "model": "Model",
    "independent": "Independent variable",
    "dependent": "Dependent variable",
    "technique": "Technique",
    "focusedQuestion": "Focused question",
    "sentence": "In a {model}, does {independent} modify {dependent}, measured by {technique}?",
    "models": [
      "human cohort",
      "in vitro cell model",
      "animal model",
      "ex vivo blood sample"
    ],
    "independentOptions": [
      "age",
      "inflammatory stimulus",
      "drug dose",
      "sex/gender",
      "time after treatment"
    ],
    "dependentOptions": [
      "DNA methylation profile",
      "mRNA expression",
      "microRNA profile",
      "protein level",
      "metabolite profile"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "Design checklist",
    "designTitle": "What the slides ask you to define",
    "designCards": [
      [
        "Model",
        "human · animal · in vitro · in vivo · ex vivo"
      ],
      [
        "Variables",
        "cell type/tissue · sex/gender · stimulus · dose · microenvironment · time/age"
      ],
      [
        "Sample size",
        "sufficient to detect a significant difference, not only to generate data"
      ],
      [
        "Technique",
        "ad hoc: it must answer the question and have acceptable technical variability"
      ]
    ],
    "omicsEyebrow": "Omics map",
    "omicsTitle": "Choose the layer that answers the question",
    "omicsIntro": "The lecture introduces the omics era to avoid a common error: choosing an advanced technique before knowing which biological layer must be measured.",
    "omics": [
      [
        "Genomics",
        "sequence, mutations, aberrations",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA and RNA profiles",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "DNA methylation, chromatin",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "microbiome genes",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "proteins and metabolites",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "cell-level and tissue-positioned omics",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "Classify variability sources",
    "classIntro": "Mark each source as mainly biological or experimental. The lesson’s key rule: technical variability must be low enough not to hide the biological signal.",
    "bioBtn": "Biological",
    "techBtn": "Experimental",
    "varItems": [
      {
        "id": "sex",
        "label": "Sex/gender effect",
        "type": "bio",
        "why": "A biological difference that can be stratified to reduce heterogeneity."
      },
      {
        "id": "operator",
        "label": "Operator pipetting",
        "type": "technical",
        "why": "Comes from experimental handling and must remain low and stable."
      },
      {
        "id": "age",
        "label": "Chronological age",
        "type": "bio",
        "why": "Age modifies DNA/RNA profiles and increases heterogeneity."
      },
      {
        "id": "scanner",
        "label": "Scanner / machine noise",
        "type": "technical",
        "why": "The transcript stresses that the researcher must know the machine’s own variability."
      },
      {
        "id": "exposome",
        "label": "Exposome: stress, diet, smoke",
        "type": "bio",
        "why": "Environment and lifestyle interact with genetics and epigenetics."
      },
      {
        "id": "reagents",
        "label": "Different reagent lots",
        "type": "technical",
        "why": "Kits and reagents can introduce experimental variation."
      }
    ],
    "cvEyebrow": "Mini calculator",
    "cvTitle": "Coefficient of Variation",
    "cvIntro": "In the transcript, qPCR technical replicates give about 8.5% CV, while different donors can be around 51–52%. The conceptual difference matters more than the exact number.",
    "cvFormula": "CV = SD / mean × 100",
    "interpretation": "Interpretation:",
    "low": "low technical variability",
    "moderate": "moderate variability",
    "high": "high variability; design or biology may dominate",
    "repEyebrow": "Interpretation",
    "repTitle": "Replicates are not donors",
    "repIntro": "This distinction appears explicitly in the transcript and is essential for not confusing technical variability with biological variability.",
    "repCards": [
      [
        "Technical replicates",
        "Same biological sample, same operator, same reagents. The expected difference should be small but never zero."
      ],
      [
        "Different donors",
        "Different DNA/RNA profiles. CV now includes biological variability plus the technical variability embedded in the measurement."
      ],
      [
        "Design response",
        "If biological variability is huge, use stratification, larger sample size, longitudinal design or a more precise biological question."
      ]
    ],
    "quizEyebrow": "Quick quiz",
    "quizTitle": "Check the logic of the lecture",
    "showAnswer": "Show answer",
    "correct": "Correct",
    "wrong": "Try again",
    "quiz": [
      {
        "question": "What should be defined before choosing the technique?",
        "options": [
          "The biological question and model",
          "The final p-value",
          "The colour of the plot",
          "The file name"
        ],
        "answer": 0,
        "explanation": "The technique is chosen ad hoc after knowing the biological process, model and variable to measure."
      },
      {
        "question": "Which statement matches the lecture’s logic about variability?",
        "options": [
          "Technical variability should be higher than biological variability",
          "Technical variability should be low and known",
          "Biological variability should always be removed",
          "Replicates and donors mean the same thing"
        ],
        "answer": 1,
        "explanation": "Technical variability always exists, but it must be low and known so it does not cover the biological signal."
      },
      {
        "question": "In the qPCR example, identical replicates of the same sample estimate mainly:",
        "options": [
          "biological variability",
          "experimental variability",
          "sex differences",
          "microbiome effects"
        ],
        "answer": 1,
        "explanation": "Same sample, same operator, same reagents: the remaining differences are experimental/technical variability."
      },
      {
        "question": "Why is the microbiome mentioned as a design variable?",
        "options": [
          "It is always a technical artifact",
          "It is relevant especially in gut-related biological questions",
          "It replaces RNA measurements",
          "It only matters in plants"
        ],
        "answer": 1,
        "explanation": "The transcript emphasizes that gut-related pathology cannot ignore the microbiome because it changes the biological context."
      }
    ],
    "examEyebrow": "Written exam trainer",
    "examTitle": "10–12-line answer skeleton",
    "examQuestion": "Explain why biological context and variability are essential when designing a DNA/RNA dynamics experiment.",
    "copySkeleton": "Use this skeleton",
    "skeleton": [
      "Start from a focused biological question, not a broad topic.",
      "Define model: human, animal, in vitro, in vivo or ex vivo.",
      "Define independent/dependent variables: stimulus, age, tissue, time, dose, etc.",
      "Choose the technique after the question: RNA, DNA methylation, protein, microbiome…",
      "Distinguish biological variability from technical variability.",
      "Explain that technical variability must be low and known.",
      "Use sample size, replicates, QC and statistics before drawing conclusions."
    ],
    "implEyebrow": "Implementation notes",
    "implTitle": "How this page fits the guide",
    "implIntro": "This reading is the base for the next ones: Stanford, Affymetrix, Illumina, Module 2 pipelines and differential expression.",
    "implCards": [
      [
        "React lesson",
        "Interactive lesson with builder, classifier, CV calculator, quiz and exam trainer."
      ],
      [
        "Quiz",
        "Short conceptual questions, ready to expand with feedback per option."
      ],
      [
        "Mock exam",
        "The final block trains the 10–12-line structure requested by Capri."
      ],
      [
        "Next lesson",
        "Next page should apply this logic to Stanford two-colour arrays: technique, biases, QC and variability."
      ]
    ]
  },
  "es": {
    "back": "Volver al dashboard DRD",
    "done": "✓ Completada",
    "mark": "Marcar completada",
    "eyebrow": "DRD Lección 1 · 28 abril",
    "title": "De la pregunta biológica a los datos y la variabilidad.",
    "subtitle": "Primera página de estudio para DNA/RNA Dynamics, construida con las slides introductorias y la transcripción del 28 de abril: pregunta biológica, modelo experimental, ómicas, variabilidad, CV, distribución y lógica de examen.",
    "tags": [
      "pregunta biológica",
      "diseño experimental",
      "variabilidad técnica",
      "variabilidad biológica",
      "CV"
    ],
    "module": "Module",
    "exam": "Examen",
    "answer": "Respuesta",
    "core": "Núcleo",
    "bigIdea": "Idea central",
    "bigIdeaText": "Una pregunta biológica solo se vuelve útil cuando se transforma en un diseño medible con variabilidad controlada.",
    "slides": "Slides PDF",
    "transcript": "Transcripción",
    "flowEyebrow": "Flujo central",
    "flowTitle": "Cómo funciona la wet lab science",
    "flowIntro": "La transcripción insiste en que no es un pipeline trivial: cada experimento empieza con una pregunta focalizada, produce datos/estadística y normalmente abre otra pregunta.",
    "activeStep": "Paso activo",
    "flow": [
      {
        "title": "1. Pregunta biológica",
        "body": "La pregunta debe ser focused: no basta ‘estudiar cáncer’; hay que definir cáncer, modelo, tratamiento, dosis, tiempo, tejido o población."
      },
      {
        "title": "2. Modelo + diseño",
        "body": "El modelo puede ser in vitro, in vivo, ex vivo, animal o humano. El diseño puede ser case-control, longitudinal, cross-sectional o time-series."
      },
      {
        "title": "3. Técnica",
        "body": "La técnica se elige después de la pregunta: DNA-seq, RNA profiling, methylation array, proteínas/metabolitos, microbioma, etc."
      },
      {
        "title": "4. Datos + estadística",
        "body": "La medición produce números, datos y variabilidad. Después se decide si el resultado es interpretable y defendible estadísticamente."
      },
      {
        "title": "5. Nueva pregunta",
        "body": "Los resultados casi nunca cierran el proceso: normalmente generan una segunda pregunta biológica más específica."
      }
    ],
    "builderEyebrow": "Constructor interactivo",
    "builderTitle": "Construye una pregunta biológica enfocada",
    "builderPill": "pregunta → experimento",
    "model": "Modelo",
    "independent": "Variable independiente",
    "dependent": "Variable dependiente",
    "technique": "Técnica",
    "focusedQuestion": "Pregunta enfocada",
    "sentence": "En un {model}, ¿{independent} modifica {dependent}, medido mediante {technique}?",
    "models": [
      "cohorte humana",
      "modelo celular in vitro",
      "modelo animal",
      "muestra de sangre ex vivo"
    ],
    "independentOptions": [
      "la edad",
      "un estímulo inflamatorio",
      "la dosis de un fármaco",
      "el sexo/género",
      "el tiempo tras tratamiento"
    ],
    "dependentOptions": [
      "el perfil de metilación del DNA",
      "la expresión de mRNA",
      "el perfil de microRNA",
      "el nivel de proteína",
      "el perfil de metabolitos"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "Checklist de diseño",
    "designTitle": "Lo que las slides piden definir",
    "designCards": [
      [
        "Modelo",
        "humano · animal · in vitro · in vivo · ex vivo"
      ],
      [
        "Variables",
        "tipo celular/tejido · sexo/género · estímulo · dosis · microambiente · tiempo/edad"
      ],
      [
        "Sample size",
        "suficiente para detectar una diferencia significativa, no solo para generar datos"
      ],
      [
        "Técnica",
        "ad hoc: debe responder la pregunta y tener variabilidad técnica aceptable"
      ]
    ],
    "omicsEyebrow": "Mapa ómico",
    "omicsTitle": "Elige la capa que responde la pregunta",
    "omicsIntro": "La clase introduce la era ómica para evitar un error común: elegir una técnica avanzada antes de saber qué capa biológica hay que medir.",
    "omics": [
      [
        "Genomics",
        "secuencia, mutaciones, aberraciones",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA y perfiles de RNA",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "metilación de DNA, cromatina",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "genes del microbioma",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "proteínas y metabolitos",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "ómicas a nivel celular y posición tisular",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "Clasifica fuentes de variabilidad",
    "classIntro": "Marca si cada fuente pertenece principalmente a variabilidad biológica o experimental. Regla clave: la variabilidad técnica debe ser suficientemente baja para no ocultar la señal biológica.",
    "bioBtn": "Biológica",
    "techBtn": "Experimental",
    "varItems": [
      {
        "id": "sex",
        "label": "Efecto sexo/género",
        "type": "bio",
        "why": "Diferencia biológica que puede estratificarse para reducir heterogeneidad."
      },
      {
        "id": "operator",
        "label": "Pipeteo del operador",
        "type": "technical",
        "why": "Procede del manejo experimental y debe mantenerse bajo y estable."
      },
      {
        "id": "age",
        "label": "Edad cronológica",
        "type": "bio",
        "why": "La edad modifica perfiles DNA/RNA y aumenta heterogeneidad."
      },
      {
        "id": "scanner",
        "label": "Ruido del scanner/máquina",
        "type": "technical",
        "why": "La transcripción recalca que el investigador debe conocer la variabilidad propia de la máquina."
      },
      {
        "id": "exposome",
        "label": "Exposoma: estrés, dieta, tabaco",
        "type": "bio",
        "why": "Ambiente y estilo de vida interactúan con genética y epigenética."
      },
      {
        "id": "reagents",
        "label": "Lotes distintos de reactivos",
        "type": "technical",
        "why": "Kits y reactivos pueden introducir variación experimental."
      }
    ],
    "cvEyebrow": "Mini calculadora",
    "cvTitle": "Coeficiente de variación",
    "cvIntro": "En la transcripción, los replicados técnicos de qPCR dan un CV cercano a 8.5%, mientras que distintos donantes pueden rondar 51–52%. La diferencia conceptual importa más que el número exacto.",
    "cvFormula": "CV = SD / media × 100",
    "interpretation": "Interpretación:",
    "low": "variabilidad técnica baja",
    "moderate": "variabilidad moderada",
    "high": "variabilidad alta; el diseño o la biología pueden dominar",
    "repEyebrow": "Interpretación",
    "repTitle": "Replicados no son donantes",
    "repIntro": "Esta distinción aparece explícitamente en la transcripción y es fundamental para no confundir variabilidad técnica con variabilidad biológica.",
    "repCards": [
      [
        "Replicados técnicos",
        "Misma muestra biológica, mismo operador, mismos reactivos. La diferencia esperada debe ser pequeña, pero nunca cero."
      ],
      [
        "Donantes distintos",
        "Perfiles DNA/RNA distintos. El CV incluye ahora variabilidad biológica más la variabilidad técnica incrustada en la medición."
      ],
      [
        "Respuesta de diseño",
        "Si la variabilidad biológica es enorme, usa estratificación, mayor sample size, diseño longitudinal o una pregunta más precisa."
      ]
    ],
    "quizEyebrow": "Quiz rápido",
    "quizTitle": "Comprueba la lógica de la clase",
    "showAnswer": "Mostrar respuesta",
    "correct": "Correcto",
    "wrong": "Inténtalo otra vez",
    "quiz": [
      {
        "question": "¿Qué debe definirse antes de elegir la técnica?",
        "options": [
          "La pregunta biológica y el modelo",
          "El p-value final",
          "El color del gráfico",
          "El nombre del archivo"
        ],
        "answer": 0,
        "explanation": "La técnica se elige ad hoc después de saber qué proceso, modelo y variable se quiere medir."
      },
      {
        "question": "¿Qué frase encaja con la lógica de la clase sobre variabilidad?",
        "options": [
          "La variabilidad técnica debe ser mayor que la biológica",
          "La variabilidad técnica debe ser baja y conocida",
          "La variabilidad biológica siempre debe eliminarse",
          "Replicados y donantes significan lo mismo"
        ],
        "answer": 1,
        "explanation": "La variabilidad técnica siempre existe, pero debe ser baja y conocida para no cubrir la señal biológica."
      },
      {
        "question": "En el ejemplo de qPCR, replicados idénticos de la misma muestra estiman sobre todo:",
        "options": [
          "variabilidad biológica",
          "variabilidad experimental",
          "diferencias de sexo",
          "efectos del microbioma"
        ],
        "answer": 1,
        "explanation": "Misma muestra, mismo operador, mismos reactivos: las diferencias restantes son variabilidad experimental/técnica."
      },
      {
        "question": "¿Por qué se menciona el microbioma como variable de diseño?",
        "options": [
          "Siempre es un artefacto técnico",
          "Es relevante especialmente en preguntas biológicas relacionadas con intestino",
          "Sustituye las mediciones de RNA",
          "Solo importa en plantas"
        ],
        "answer": 1,
        "explanation": "La transcripción enfatiza que en patología intestinal no se puede ignorar el microbioma porque cambia el contexto biológico."
      }
    ],
    "examEyebrow": "Entrenador de examen escrito",
    "examTitle": "Esqueleto de respuesta de 10–12 líneas",
    "examQuestion": "Explica por qué el contexto biológico y la variabilidad son esenciales al diseñar un experimento de DNA/RNA dynamics.",
    "copySkeleton": "Usa este esqueleto",
    "skeleton": [
      "Parte de una pregunta biológica enfocada, no de un tema amplio.",
      "Define el modelo: humano, animal, in vitro, in vivo o ex vivo.",
      "Define variables independientes/dependientes: estímulo, edad, tejido, tiempo, dosis, etc.",
      "Elige la técnica después de la pregunta: RNA, metilación DNA, proteína, microbioma…",
      "Distingue variabilidad biológica de variabilidad técnica.",
      "Explica que la variabilidad técnica debe ser baja y conocida.",
      "Usa sample size, replicados, QC y estadística antes de concluir."
    ],
    "implEyebrow": "Notas de implementación",
    "implTitle": "Cómo encaja esta página en la guía",
    "implIntro": "Esta lectura es la base para las siguientes: Stanford, Affymetrix, Illumina, pipelines de Module 2 y differential expression.",
    "implCards": [
      [
        "React lesson",
        "Lección interactiva con builder, clasificador, calculadora de CV, quiz y exam trainer."
      ],
      [
        "Quiz",
        "Preguntas conceptuales cortas, listas para ampliar con feedback por opción."
      ],
      [
        "Mock exam",
        "El bloque final entrena la estructura de 10–12 líneas que pide Capri."
      ],
      [
        "Siguiente lección",
        "La próxima página debería aplicar esta lógica a Stanford two-colour arrays: técnica, sesgos, QC y variabilidad."
      ]
    ]
  },
  "fa": {
    "back": "بازگشت به داشبورد DRD",
    "done": "✓ کامل شد",
    "mark": "علامت کامل‌شده",
    "eyebrow": "درس ۱ DRD · ۲۸ آوریل",
    "title": "از پرسش زیستی تا داده و تغییرپذیری.",
    "subtitle": "نخستین صفحهٔ مطالعه برای DNA/RNA Dynamics، بر پایهٔ اسلایدهای معرفی و رونویسی ۲۸ آوریل: پرسش زیستی، مدل آزمایشی، اومیکس، تغییرپذیری، CV، توزیع و منطق امتحان.",
    "tags": [
      "پرسش زیستی",
      "طراحی آزمایش",
      "تغییرپذیری فنی",
      "تغییرپذیری زیستی",
      "CV"
    ],
    "module": "ماژول",
    "exam": "امتحان",
    "answer": "پاسخ",
    "core": "هسته",
    "bigIdea": "ایدهٔ اصلی",
    "bigIdeaText": "یک پرسش زیستی زمانی مفید می‌شود که به طراحی قابل اندازه‌گیری با تغییرپذیری کنترل‌شده تبدیل شود.",
    "slides": "PDF اسلایدها",
    "transcript": "رونویسی",
    "flowEyebrow": "جریان اصلی",
    "flowTitle": "علم wet lab چگونه کار می‌کند؟",
    "flowIntro": "رونویسی تأکید می‌کند که این یک خط ساده نیست: هر آزمایش با پرسش متمرکز آغاز می‌شود، داده/آمار تولید می‌کند و معمولاً پرسش تازه‌ای می‌سازد.",
    "activeStep": "گام فعال",
    "flow": [
      {
        "title": "۱. پرسش زیستی",
        "body": "پرسش باید focused باشد: نه فقط «مطالعهٔ سرطان»، بلکه نوع سرطان، مدل، درمان، دوز، زمان، بافت یا جمعیت."
      },
      {
        "title": "۲. مدل + طراحی",
        "body": "مدل می‌تواند in vitro، in vivo، ex vivo، حیوانی یا انسانی باشد. طراحی می‌تواند case-control، طولی، cross-sectional یا time-series باشد."
      },
      {
        "title": "۳. تکنیک",
        "body": "تکنیک بعد از پرسش انتخاب می‌شود: DNA-seq، پروفایل RNA، آرایهٔ متیلاسیون، سنجش پروتئین/متابولیت، میکروبیوم و غیره."
      },
      {
        "title": "۴. داده + آمار",
        "body": "اندازه‌گیری اعداد، داده و تغییرپذیری تولید می‌کند. سپس باید دید نتیجه قابل تفسیر و از نظر آماری قابل دفاع است یا نه."
      },
      {
        "title": "۵. پرسش تازه",
        "body": "نتیجه‌ها معمولاً پایان فرایند نیستند؛ اغلب پرسش زیستی دقیق‌تری ایجاد می‌کنند."
      }
    ],
    "builderEyebrow": "سازندهٔ تعاملی",
    "builderTitle": "یک پرسش زیستی متمرکز بسازید",
    "builderPill": "پرسش → آزمایش",
    "model": "مدل",
    "independent": "متغیر مستقل",
    "dependent": "متغیر وابسته",
    "technique": "تکنیک",
    "focusedQuestion": "پرسش متمرکز",
    "sentence": "در {model}، آیا {independent} باعث تغییر {dependent} می‌شود که با {technique} سنجیده شده است؟",
    "models": [
      "کوهورت انسانی",
      "مدل سلولی in vitro",
      "مدل حیوانی",
      "نمونهٔ خون ex vivo"
    ],
    "independentOptions": [
      "سن",
      "محرک التهابی",
      "دوز دارو",
      "جنس/جندر",
      "زمان پس از درمان"
    ],
    "dependentOptions": [
      "پروفایل متیلاسیون DNA",
      "بیان mRNA",
      "پروفایل microRNA",
      "سطح پروتئین",
      "پروفایل متابولیت"
    ],
    "techniqueOptions": [
      "Illumina EPIC / 450K methylation array",
      "RNA-seq",
      "microarray",
      "qPCR",
      "ELISA"
    ],
    "designEyebrow": "چک‌لیست طراحی",
    "designTitle": "اسلایدها از شما چه چیزهایی می‌خواهند تعریف کنید",
    "designCards": [
      [
        "مدل",
        "انسان · حیوان · in vitro · in vivo · ex vivo"
      ],
      [
        "متغیرها",
        "نوع سلول/بافت · جنس/جندر · محرک · دوز · ریزمحیط · زمان/سن"
      ],
      [
        "اندازهٔ نمونه",
        "کافی برای یافتن تفاوت معنی‌دار، نه فقط تولید داده"
      ],
      [
        "تکنیک",
        "ad hoc: باید به پرسش پاسخ دهد و تغییرپذیری فنی قابل قبول داشته باشد"
      ]
    ],
    "omicsEyebrow": "نقشهٔ اومیکس",
    "omicsTitle": "لایه‌ای را انتخاب کنید که به پرسش پاسخ می‌دهد",
    "omicsIntro": "درس مفهوم omics era را معرفی می‌کند تا از خطای رایج جلوگیری شود: انتخاب تکنیک پیشرفته قبل از دانستن لایهٔ زیستی مورد نیاز.",
    "omics": [
      [
        "Genomics",
        "توالی، جهش‌ها، ناهنجاری‌ها",
        "DNA-seq · arrays · Hi-C"
      ],
      [
        "Transcriptomics",
        "mRNA و پروفایل‌های RNA",
        "microarrays · RNA-seq"
      ],
      [
        "Epigenomics",
        "متیلاسیون DNA، کروماتین",
        "methylation arrays · ChIP-seq · Nanopore"
      ],
      [
        "Metagenomics",
        "ژن‌های میکروبیوم",
        "DNA-seq"
      ],
      [
        "Proteomics / metabolomics",
        "پروتئین‌ها و متابولیت‌ها",
        "protein arrays · LC-MS · GC-MS · NMR"
      ],
      [
        "Single-cell / spatial",
        "اومیکس در سطح سلول و موقعیت بافت",
        "scRNA-seq · CITE-seq · GeoMx DSP"
      ]
    ],
    "classEyebrow": "Checkpoint",
    "classTitle": "منابع تغییرپذیری را طبقه‌بندی کنید",
    "classIntro": "مشخص کنید هر منبع بیشتر زیستی است یا آزمایشی. قانون کلیدی: تغییرپذیری فنی باید آن‌قدر کم باشد که سیگنال زیستی را پنهان نکند.",
    "bioBtn": "زیستی",
    "techBtn": "آزمایشی",
    "varItems": [
      {
        "id": "sex",
        "label": "اثر جنس/جندر",
        "type": "bio",
        "why": "تفاوت زیستی که می‌توان برای کاهش ناهمگنی stratify کرد."
      },
      {
        "id": "operator",
        "label": "پیپت‌کردن توسط اپراتور",
        "type": "technical",
        "why": "از کار آزمایشگاهی می‌آید و باید کم و پایدار باشد."
      },
      {
        "id": "age",
        "label": "سن تقویمی",
        "type": "bio",
        "why": "سن پروفایل DNA/RNA را تغییر می‌دهد و ناهمگنی را افزایش می‌دهد."
      },
      {
        "id": "scanner",
        "label": "نویز اسکنر/دستگاه",
        "type": "technical",
        "why": "رونویسی تأکید می‌کند پژوهشگر باید تغییرپذیری خود دستگاه را بشناسد."
      },
      {
        "id": "exposome",
        "label": "اکسپوزوم: استرس، رژیم، سیگار",
        "type": "bio",
        "why": "محیط و سبک زندگی با ژنتیک و اپی‌ژنتیک تعامل دارند."
      },
      {
        "id": "reagents",
        "label": "لات‌های مختلف مواد مصرفی",
        "type": "technical",
        "why": "کیت‌ها و مواد می‌توانند تغییرپذیری آزمایشی وارد کنند."
      }
    ],
    "cvEyebrow": "ماشین‌حساب کوچک",
    "cvTitle": "ضریب تغییرات",
    "cvIntro": "در رونویسی، تکرارهای فنی qPCR حدود ۸.۵٪ CV دارند، در حالی که اهداکنندگان مختلف می‌توانند حدود ۵۱–۵۲٪ باشند. تفاوت مفهومی از عدد دقیق مهم‌تر است.",
    "cvFormula": "CV = SD / میانگین × 100",
    "interpretation": "تفسیر:",
    "low": "تغییرپذیری فنی پایین",
    "moderate": "تغییرپذیری متوسط",
    "high": "تغییرپذیری بالا؛ طراحی یا زیست‌شناسی ممکن است غالب باشد",
    "repEyebrow": "تفسیر",
    "repTitle": "تکرارها همان اهداکنندگان نیستند",
    "repIntro": "این تمایز در رونویسی به‌صراحت آمده و برای اشتباه نگرفتن تغییرپذیری فنی با زیستی ضروری است.",
    "repCards": [
      [
        "تکرارهای فنی",
        "همان نمونهٔ زیستی، همان اپراتور، همان مواد. تفاوت مورد انتظار باید کوچک باشد، اما هرگز صفر نیست."
      ],
      [
        "اهداکنندگان متفاوت",
        "پروفایل‌های DNA/RNA متفاوت. CV اکنون تغییرپذیری زیستی به‌علاوهٔ تغییرپذیری فنی موجود در اندازه‌گیری را شامل می‌شود."
      ],
      [
        "پاسخ طراحی",
        "اگر تغییرپذیری زیستی بسیار زیاد است، stratification، نمونهٔ بزرگ‌تر، طراحی طولی یا پرسش دقیق‌تر به کار ببرید."
      ]
    ],
    "quizEyebrow": "آزمونک سریع",
    "quizTitle": "منطق درس را بسنجید",
    "showAnswer": "نمایش پاسخ",
    "correct": "درست",
    "wrong": "دوباره تلاش کنید",
    "quiz": [
      {
        "question": "قبل از انتخاب تکنیک چه چیزی باید تعریف شود؟",
        "options": [
          "پرسش زیستی و مدل",
          "p-value نهایی",
          "رنگ نمودار",
          "نام فایل"
        ],
        "answer": 0,
        "explanation": "تکنیک ad hoc و پس از مشخص شدن فرایند، مدل و متغیر مورد اندازه‌گیری انتخاب می‌شود."
      },
      {
        "question": "کدام جمله با منطق درس دربارهٔ تغییرپذیری سازگار است؟",
        "options": [
          "تغییرپذیری فنی باید از زیستی بیشتر باشد",
          "تغییرپذیری فنی باید کم و شناخته‌شده باشد",
          "تغییرپذیری زیستی همیشه باید حذف شود",
          "تکرارها و اهداکنندگان یک معنی دارند"
        ],
        "answer": 1,
        "explanation": "تغییرپذیری فنی همیشه وجود دارد، اما باید کم و شناخته‌شده باشد تا سیگنال زیستی را نپوشاند."
      },
      {
        "question": "در مثال qPCR، تکرارهای یکسان از همان نمونه عمدتاً چه چیزی را برآورد می‌کنند؟",
        "options": [
          "تغییرپذیری زیستی",
          "تغییرپذیری آزمایشی",
          "تفاوت‌های جنس",
          "اثر میکروبیوم"
        ],
        "answer": 1,
        "explanation": "همان نمونه، همان اپراتور، همان مواد: تفاوت‌های باقی‌مانده تغییرپذیری فنی/آزمایشی هستند."
      },
      {
        "question": "چرا میکروبیوم به عنوان متغیر طراحی ذکر می‌شود؟",
        "options": [
          "همیشه آرتیفکت فنی است",
          "به‌ویژه در پرسش‌های مربوط به روده مهم است",
          "جایگزین سنجش RNA می‌شود",
          "فقط در گیاهان مهم است"
        ],
        "answer": 1,
        "explanation": "رونویسی تأکید می‌کند در پاتولوژی‌های روده نمی‌توان میکروبیوم را نادیده گرفت، چون زمینهٔ زیستی را تغییر می‌دهد."
      }
    ],
    "examEyebrow": "تمرین امتحان نوشتاری",
    "examTitle": "اسکلت پاسخ ۱۰–۱۲ خطی",
    "examQuestion": "توضیح دهید چرا زمینهٔ زیستی و تغییرپذیری در طراحی آزمایش DNA/RNA dynamics ضروری هستند.",
    "copySkeleton": "از این اسکلت استفاده کنید",
    "skeleton": [
      "از یک پرسش زیستی متمرکز شروع کنید، نه یک موضوع کلی.",
      "مدل را تعریف کنید: انسان، حیوان، in vitro، in vivo یا ex vivo.",
      "متغیرهای مستقل/وابسته را تعریف کنید: محرک، سن، بافت، زمان، دوز و غیره.",
      "تکنیک را پس از پرسش انتخاب کنید: RNA، متیلاسیون DNA، پروتئین، میکروبیوم…",
      "تغییرپذیری زیستی را از تغییرپذیری فنی جدا کنید.",
      "توضیح دهید تغییرپذیری فنی باید کم و شناخته‌شده باشد.",
      "پیش از نتیجه‌گیری از sample size، تکرارها، QC و آمار استفاده کنید."
    ],
    "implEyebrow": "یادداشت‌های پیاده‌سازی",
    "implTitle": "این صفحه چگونه در راهنما جا می‌گیرد",
    "implIntro": "این خوانش پایهٔ صفحات بعدی است: Stanford، Affymetrix، Illumina، پایپ‌لاین‌های Module 2 و differential expression.",
    "implCards": [
      [
        "درس React",
        "درس تعاملی با سازنده، طبقه‌بند، ماشین‌حساب CV، آزمونک و تمرین امتحان."
      ],
      [
        "آزمونک",
        "پرسش‌های مفهومی کوتاه، آماده برای گسترش با بازخورد برای هر گزینه."
      ],
      [
        "Mock exam",
        "بلوک پایانی ساختار ۱۰–۱۲ خطی مورد انتظار Capri را تمرین می‌دهد."
      ],
      [
        "درس بعدی",
        "صفحهٔ بعدی باید همین منطق را روی Stanford two-colour arrays اعمال کند: تکنیک، سوگیری‌ها، QC و تغییرپذیری."
      ]
    ]
  }
};

function getCopy(lang) { return LESSON_COPY[lang] || LESSON_COPY.es; }

const RESOURCE_COPY = {
  en: { resources: "Class resources", recording: "Class recording", recordingPending: "Recording link pending" },
  es: { resources: "Recursos de clase", recording: "Grabación de la clase", recordingPending: "Link de grabación pendiente" },
  fa: { resources: "منابع کلاس", recording: "ضبط کلاس", recordingPending: "لینک ضبط هنوز اضافه نشده" }
};

function ResourceLinks({ copy, lang = "es" }) {
  const labels = RESOURCE_COPY[lang] || RESOURCE_COPY.es;
  const recordingReady = CLASS_RECORDING_URL && CLASS_RECORDING_URL !== "#";
  const linkBase = "rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-sm";
  return (
    <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">{labels.resources}</div>
      <div className="grid gap-2 sm:grid-cols-3">
        <a href={SLIDES_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-red-200 bg-red-50 text-red-800 hover:bg-white`}>{copy.slides}</a>
        <a href={TRANSCRIPT_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-200 bg-white text-stone-800 hover:bg-stone-50`}>{copy.transcript}</a>
        {recordingReady ? (
          <a href={CLASS_RECORDING_URL} target="_blank" rel="noreferrer" className={`${linkBase} border-stone-800 bg-stone-950 text-white hover:bg-red-700`}>{labels.recording}</a>
        ) : (
          <span className={`${linkBase} cursor-not-allowed border-stone-200 bg-white text-stone-400`} aria-disabled="true">{labels.recordingPending}</span>
        )}
      </div>
    </div>
  );
}

function fmt(template, values) { return Object.entries(values).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), template); }
function Pill({ children, tone = "stone" }) {
  const tones = { red: "border-red-200 bg-red-50 text-red-700", amber: "border-amber-200 bg-amber-50 text-amber-800", emerald: "border-emerald-200 bg-emerald-50 text-emerald-800", stone: "border-stone-200 bg-white text-stone-700", dark: "border-stone-800 bg-stone-950 text-white" };
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${tones[tone] || tones.stone}`}>{children}</span>;
}
function SectionHeader({ eyebrow, title, children }) { return <div className="mb-5"><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>{children && <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-stone-600">{children}</p>}</div>; }
function ProgressDots({ active }) { return <div className="flex gap-1.5">{[0,1,2,3,4].map(i => <span key={i} className={`h-2.5 w-2.5 rounded-full ${i <= active ? "bg-red-700" : "bg-stone-200"}`} />)}</div>; }
function StatCard({ label, value, tone = "stone" }) { return <div className={`rounded-2xl border p-4 ${tone === "red" ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}><div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div><div className="mt-1 text-2xl font-black text-stone-950">{value}</div></div>; }
function SelectBox({ label, value, setValue, options }) { return <label className="block rounded-2xl border border-stone-200 bg-stone-50 p-4"><span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">{label}</span><select value={value} onChange={e => setValue(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100">{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
function BiologicalQuestionBuilder({ copy }) {
  const [model, setModel] = useState(copy.models[0]); const [independent, setIndependent] = useState(copy.independentOptions[0]); const [dependent, setDependent] = useState(copy.dependentOptions[0]); const [technique, setTechnique] = useState(copy.techniqueOptions[0]);
  const sentence = fmt(copy.sentence, { model, independent, dependent, technique });
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.builderEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.builderTitle}</h3></div><Pill tone="red">{copy.builderPill}</Pill></div><div className="mt-5 grid gap-3 md:grid-cols-2"><SelectBox label={copy.model} value={model} setValue={setModel} options={copy.models}/><SelectBox label={copy.independent} value={independent} setValue={setIndependent} options={copy.independentOptions}/><SelectBox label={copy.dependent} value={dependent} setValue={setDependent} options={copy.dependentOptions}/><SelectBox label={copy.technique} value={technique} setValue={setTechnique} options={copy.techniqueOptions}/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{copy.focusedQuestion}</div><p className="mt-2 text-xl font-black leading-8">{sentence}</p></div></article>;
}
function VariabilityClassifier({ copy }) {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => copy.varItems.filter(item => answers[item.id] === item.type).length, [answers, copy.varItems]);
  const optionClass = (selected, option) => {
    const isSelected = selected === option;
    if (!selected) return "border-stone-200 bg-white text-stone-700 hover:border-red-200 hover:bg-red-50";
    if (isSelected && selected === option) {
      return selected === "bio"
        ? "border-emerald-300 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-100"
        : "border-sky-300 bg-sky-50 text-sky-900 ring-2 ring-sky-100";
    }
    return "border-stone-200 bg-white/70 text-stone-400";
  };
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.classEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.classTitle}</h3></div><Pill tone={score === copy.varItems.length ? "emerald" : "amber"}>{score}/{copy.varItems.length}</Pill></div>
    <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.classIntro}</p>
    <div className="mt-5 grid gap-3">{copy.varItems.map(item => {
      const selected = answers[item.id];
      const correct = selected && selected === item.type;
      const wrong = selected && selected !== item.type;
      return <div key={item.id} className={`rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : wrong ? "border-red-200 bg-red-50" : "border-stone-200 bg-stone-50"}`}>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div><div className="text-sm font-black text-stone-950">{item.label}</div>{selected && <div className="mt-1 text-xs font-bold leading-5 text-stone-600">{item.why}</div>}</div>
          <div className="flex gap-2">
            <button onClick={() => setAnswers({ ...answers, [item.id]: "bio" })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${optionClass(selected, "bio")}`}>{selected === "bio" ? "✓ " : ""}{copy.bioBtn}</button>
            <button onClick={() => setAnswers({ ...answers, [item.id]: "technical" })} className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${optionClass(selected, "technical")}`}>{selected === "technical" ? "✓ " : ""}{copy.techBtn}</button>
          </div>
        </div>
      </div>;
    })}</div>
  </article>;
}
function CVExercise({ copy }) {
  const [values, setValues] = useState("260, 282, 310, 279, 284"); const parsed = useMemo(() => values.split(/[\s,;]+/).map(v => Number(v)).filter(Number.isFinite), [values]);
  const stats = useMemo(() => { if (parsed.length < 2) return null; const mean = parsed.reduce((a,b)=>a+b,0)/parsed.length; const sd = Math.sqrt(parsed.reduce((s,x)=>s + Math.pow(x-mean,2),0)/(parsed.length-1)); return { mean, sd, cv: sd/mean*100 }; }, [parsed]);
  const interp = stats?.cv <= 10 ? copy.low : stats?.cv <= 25 ? copy.moderate : copy.high;
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.cvEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.cvTitle}</h3></div><Pill tone="dark">{copy.cvFormula}</Pill></div><p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{copy.cvIntro}</p><textarea value={values} onChange={e => setValues(e.target.value)} rows={2} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-bold text-stone-800 outline-none focus:border-red-300 focus:ring-4 focus:ring-red-100"/><div className="mt-4 grid gap-3 md:grid-cols-4"><StatCard label="n" value={parsed.length || "—"}/><StatCard label="mean" value={stats ? stats.mean.toFixed(2) : "—"}/><StatCard label="SD" value={stats ? stats.sd.toFixed(2) : "—"}/><StatCard label="CV" value={stats ? `${stats.cv.toFixed(2)}%` : "—"} tone="red"/></div>{stats && <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-black text-amber-900">{copy.interpretation} {interp}</div>}</article>;
}
function QuizBlock({ copy }) { const [selected, setSelected] = useState({}); return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.quizEyebrow} title={copy.quizTitle} /> <div className="grid gap-4">{copy.quiz.map((q, qi) => <article key={q.question} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-lg font-black text-stone-950">{qi + 1}. {q.question}</h3><div className="mt-4 grid gap-2 md:grid-cols-2">{q.options.map((opt, oi) => { const picked = selected[qi] === oi; const correct = q.answer === oi; const answered = selected[qi] !== undefined; return <button key={opt} onClick={() => setSelected({...selected, [qi]: oi})} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${picked && correct ? "border-emerald-300 bg-emerald-50 text-emerald-900" : picked ? "border-red-300 bg-red-50 text-red-900" : answered && correct ? "border-emerald-200 bg-white text-emerald-900" : "border-stone-200 bg-white text-stone-700 hover:border-red-200"}`}>{opt}</button>; })}</div>{selected[qi] !== undefined && <p className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-stone-700">{selected[qi] === q.answer ? copy.correct : copy.wrong} · {q.explanation}</p>}</article>)}</div></section>; }
const EXAM_TRAINER_COPY = {
  en: {
    write: "Write your answer here",
    placeholder: "Draft 10–12 lines: define the biological question, model, variables, technique, variability and why QC/statistics are needed...",
    modelTitle: "Example of a correct answer",
    modelAnswer: "In DNA/RNA dynamics, the biological context is essential because it determines which variables should be measured and which technique is appropriate. A good experiment starts from a focused biological question, not from a broad topic. The model must be defined, for example human samples, animal models, in vitro cells, in vivo systems or ex vivo samples. The design must also specify independent and dependent variables, such as stimulus, age, sex, tissue, dose and time. Once the question is clear, the technique can be chosen, such as RNA profiling, DNA methylation arrays, qPCR or other omics approaches. Variability is central because biological variability reflects real differences among individuals, cells or conditions, while experimental variability comes from operators, reagents, instruments and data-processing steps. Technical variability should be low and known, otherwise it can hide the biological signal. Therefore sample size, replicates, quality control and statistical analysis are required before interpreting results. Only then can the data support a reliable biological conclusion."
  },
  es: {
    write: "Escribe tu respuesta aquí",
    placeholder: "Redacta 10–12 líneas: define la pregunta biológica, modelo, variables, técnica, variabilidad y por qué hacen falta QC/estadística...",
    modelTitle: "Ejemplo de respuesta correcta",
    modelAnswer: "En DNA/RNA dynamics, el contexto biológico es esencial porque determina qué variables deben medirse y qué técnica es apropiada. Un buen experimento parte de una pregunta biológica enfocada, no de un tema amplio. El modelo debe definirse, por ejemplo muestras humanas, modelos animales, células in vitro, sistemas in vivo o muestras ex vivo. El diseño también debe especificar variables independientes y dependientes, como estímulo, edad, sexo, tejido, dosis y tiempo. Cuando la pregunta está clara, se elige la técnica, por ejemplo RNA profiling, arrays de metilación de DNA, qPCR u otros enfoques ómicos. La variabilidad es central porque la variabilidad biológica refleja diferencias reales entre individuos, células o condiciones, mientras que la variabilidad experimental procede del operador, reactivos, instrumentos y procesamiento de datos. La variabilidad técnica debe ser baja y conocida; si no, puede ocultar la señal biológica. Por eso hacen falta sample size, replicados, quality control y análisis estadístico antes de interpretar resultados. Solo así los datos pueden sostener una conclusión biológica fiable."
  },
  fa: {
    write: "پاسخ خود را اینجا بنویسید",
    placeholder: "در ۱۰–۱۲ خط بنویسید: پرسش زیستی، مدل، متغیرها، تکنیک، تغییرپذیری و دلیل نیاز به QC/آمار...",
    modelTitle: "نمونهٔ پاسخ درست",
    modelAnswer: "در DNA/RNA dynamics، زمینهٔ زیستی ضروری است چون تعیین می‌کند چه متغیرهایی باید اندازه‌گیری شوند و کدام تکنیک مناسب است. یک آزمایش خوب از یک پرسش زیستی متمرکز شروع می‌شود، نه از یک موضوع بسیار کلی. مدل باید مشخص شود، مانند نمونه‌های انسانی، مدل حیوانی، سلول‌های in vitro، سیستم‌های in vivo یا نمونه‌های ex vivo. طراحی همچنین باید متغیر مستقل و وابسته را مشخص کند، مانند محرک، سن، جنس، بافت، دوز و زمان. وقتی پرسش روشن شد، تکنیک انتخاب می‌شود؛ برای مثال RNA profiling، آرایه‌های متیلاسیون DNA، qPCR یا روش‌های دیگر omics. تغییرپذیری مهم است چون تغییرپذیری زیستی تفاوت‌های واقعی میان افراد، سلول‌ها یا شرایط را نشان می‌دهد، اما تغییرپذیری آزمایشی از اپراتور، مواد، دستگاه و پردازش داده ایجاد می‌شود. تغییرپذیری فنی باید کم و شناخته‌شده باشد، وگرنه می‌تواند سیگنال زیستی را پنهان کند. بنابراین اندازهٔ نمونه، تکرارها، کنترل کیفیت و تحلیل آماری پیش از تفسیر نتایج لازم هستند. تنها در این صورت داده‌ها می‌توانند از یک نتیجهٔ زیستی قابل اعتماد پشتیبانی کنند."
  }
};

function ExamTrainer({ copy, lang = "es" }) {
  const [draft, setDraft] = useState("");
  const local = EXAM_TRAINER_COPY[lang] || EXAM_TRAINER_COPY.es;
  return <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
    <SectionHeader eyebrow={copy.examEyebrow} title={copy.examTitle}>{copy.examQuestion}</SectionHeader>
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="rounded-3xl border border-red-200 bg-red-50 p-5"><h3 className="text-xl font-black text-red-950">{copy.copySkeleton}</h3><ol className="mt-4 space-y-2 text-sm font-bold leading-6 text-red-900">{copy.skeleton.map(item => <li key={item} className="flex gap-2"><span>•</span><span>{item}</span></li>)}</ol></article>
      <article className="rounded-3xl border border-stone-200 bg-white p-5">
        <label className="text-xl font-black text-stone-950" htmlFor="drd-written-answer">{local.write}</label>
        <textarea id="drd-written-answer" value={draft} onChange={e => setDraft(e.target.value)} rows={10} placeholder={local.placeholder} className="mt-4 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold leading-7 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100" />
        <div className="mt-2 text-xs font-bold text-stone-500">{draft.trim().split(/\s+/).filter(Boolean).length} words</div>
      </article>
    </div>
    <article className="mt-4 rounded-3xl border border-stone-800 bg-stone-950 p-5 text-white">
      <h3 className="text-xl font-black">{local.modelTitle}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-stone-200">{local.modelAnswer}</p>
    </article>
  </section>;
}

const LESSON_NAV_COPY = {
  en: { dashboard: "DRD dashboard", previous: "Previous", next: "Next", current: "Lesson 1", nextTitle: "M1.2 Stanford two-colour arrays" },
  es: { dashboard: "Dashboard DRD", previous: "Anterior", next: "Siguiente", current: "Lección 1", nextTitle: "M1.2 Stanford two-colour arrays" },
  fa: { dashboard: "داشبورد DRD", previous: "قبلی", next: "بعدی", current: "درس ۱", nextTitle: "M1.2 آرایه‌های دو رنگ Stanford" }
};

function LessonNav({ lang = "es", position = "top", isDone = false, toggle = () => {}, copy }) {
  const nav = LESSON_NAV_COPY[lang] || LESSON_NAV_COPY.es;
  const labels = copy || getCopy(lang);
  return <nav className={`${position === "bottom" ? "mt-10" : "mb-6"} rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm`} aria-label="Lesson navigation">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <a href="#/" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">← {nav.previous}: {nav.dashboard}</a>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
        <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">{nav.current}</div>
        <button onClick={toggle} className={`rounded-full px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 text-white" : "bg-stone-950 text-white"}`}>{isDone ? labels.done : labels.mark}</button>
      </div>
      <a href="#/lesson/m1-stanford" className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md">{nav.next}: {nav.nextTitle} →</a>
    </div>
  </nav>;
}

export default function DRDLesson01({ lang = "es", isDone = false, toggle = () => {} }) {
  const copy = getCopy(lang); const [activeFlow, setActiveFlow] = useState(0);
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><LessonNav lang={lang} position="top" isDone={isDone} toggle={toggle} copy={copy}/>
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{copy.subtitle}</p><div className="mt-6 flex flex-wrap gap-2">{copy.tags.map(tag => <Pill key={tag} tone={tag.includes("CV") ? "red" : "stone"}>{tag}</Pill>)}</div></div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner"><div className="grid grid-cols-2 gap-3"><StatCard label={copy.module} value="1" tone="red"/><StatCard label={copy.exam} value="4Q"/><StatCard label={copy.answer} value="10–12"/><StatCard label={copy.core} value="CV" tone="red"/></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{copy.bigIdea}</div><p className="mt-2 text-lg font-bold leading-7">{copy.bigIdeaText}</p></div><ResourceLinks copy={copy} lang={lang}/></div></div></div></section>
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.flowEyebrow} title={copy.flowTitle}>{copy.flowIntro}</SectionHeader><div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div className="space-y-2">{copy.flow.map((step, idx) => <button key={step.title} onClick={() => setActiveFlow(idx)} className={`w-full rounded-2xl border p-4 text-left transition ${activeFlow === idx ? "border-red-200 bg-red-50 shadow-sm" : "border-stone-200 bg-stone-50 hover:bg-white"}`}><div className="flex items-center justify-between gap-3"><span className="text-sm font-black text-stone-950">{step.title}</span><ProgressDots active={idx} /></div></button>)}</div><article className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{copy.activeStep}</div><h3 className="mt-3 text-3xl font-black tracking-tight">{copy.flow[activeFlow].title}</h3><p className="mt-4 text-lg font-semibold leading-8 text-stone-200">{copy.flow[activeFlow].body}</p></article></div></section>
    <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]"><BiologicalQuestionBuilder copy={copy}/><article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{copy.designEyebrow}</div><h3 className="mt-1 text-2xl font-black text-stone-950">{copy.designTitle}</h3><div className="mt-5 grid gap-3">{copy.designCards.map(([title, body]) => <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><div className="text-sm font-black text-stone-950">{title}</div><div className="mt-1 text-sm font-semibold leading-6 text-stone-600">{body}</div></div>)}</div></article></section>
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.omicsEyebrow} title={copy.omicsTitle}>{copy.omicsIntro}</SectionHeader><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{copy.omics.map(([name, what, tools]) => <article key={name} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-xl font-black text-stone-950">{name}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{what}</p><div className="mt-4 rounded-2xl bg-white p-3 text-xs font-black text-red-700 shadow-sm">{tools}</div></article>)}</div></section>
    <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr]"><VariabilityClassifier copy={copy}/><CVExercise copy={copy}/></section>
    <section className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><SectionHeader eyebrow={copy.repEyebrow} title={copy.repTitle}>{copy.repIntro}</SectionHeader><div className="grid gap-4 lg:grid-cols-3">{copy.repCards.map(([title, body], i) => <article key={title} className={`rounded-3xl border p-5 ${i === 0 ? "border-emerald-200 bg-emerald-50" : i === 1 ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}><h3 className="text-xl font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{body}</p></article>)}</div></section>
    <QuizBlock copy={copy}/><ExamTrainer copy={copy} lang={lang}/><LessonNav lang={lang} position="bottom" isDone={isDone} toggle={toggle} copy={copy}/>
  </main>;
}

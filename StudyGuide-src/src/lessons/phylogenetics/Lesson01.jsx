import React from "react";

export default function CourseIntroLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical } = shared;
  const copy = {
    en: {
      eyebrow: "Lesson 01 · Course introduction & setup",
      title: "Start the course with the map, the tools and the exam logic.",
      subtitle: "This first lesson orients the course: what molecular phylogenetics is, how the classes work, which materials and tools matter, and how to study without reducing the course to commands.",
      bigIdea: "The goal is to learn how biological data become phylogenetic inferences that can be interpreted and defended.",
      stats: [["6", "CFUs"], ["48", "total hours"], ["16", "classes"], ["3h", "per class"]],
      sections: {
        glance: ["Course at a glance", ["Molecular Phylogenetics B5791", "MSc in Bioinformatics", "Theory + practical sessions", "Slides, papers, books, GitHub, Drive and recordings"]],
        rhythm: ["How each lesson works", [["1h20", "theoretical explanation"], ["20 min", "pause"], ["1h20", "practical session"]]],
        toolkit: ["Software toolkit", [["Command line / environment", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["Visual / analysis tools", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["Exam format", [["22", "multiple choice questions · one point each · no penalty"], ["2", "open-ended synthesis questions · five points each"], ["Focus", "understanding, interpretation and practical reasoning"]]],
        study: ["How to study", ["Understand concepts before memorizing terms.", "Connect every practical step to the biological question.", "Review slides with the study guide, then test yourself with checkpoints.", "Use tools as part of the logic of inference, not as isolated commands."]],
        checklist: ["Before Lesson 02, I can...", ["Explain how the course is organized.", "Identify the main study materials.", "Recognize the tools used in practical sessions.", "Describe the exam format.", "Explain why interpretation matters more than memorizing commands."]]
      },
      roadmap: "Course roadmap",
    },
    es: {
      eyebrow: "Lección 01 · Introducción y setup",
      title: "Empieza el curso con el mapa, las herramientas y la lógica del examen.",
      subtitle: "Esta primera lección orienta la materia: qué es la filogenética molecular, cómo funcionan las clases, qué materiales y herramientas importan, y cómo estudiar sin reducir el curso a comandos.",
      bigIdea: "El objetivo es aprender cómo los datos biológicos se convierten en inferencias filogenéticas que pueden interpretarse y defenderse.",
      stats: [["6", "CFUs"], ["48", "horas totales"], ["16", "clases"], ["3h", "por clase"]],
      sections: {
        glance: ["Course at a glance", ["Molecular Phylogenetics B5791", "MSc in Bioinformatics", "Teoría + sesiones prácticas", "Slides, papers, libros, GitHub, Drive y grabaciones"]],
        rhythm: ["Cómo funciona cada clase", [["1h20", "explicación teórica"], ["20 min", "pausa"], ["1h20", "sesión práctica"]]],
        toolkit: ["Software toolkit", [["Línea de comandos / entorno", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["Herramientas visuales / análisis", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["Formato del examen", [["22", "preguntas multiple choice · un punto cada una · sin penalización"], ["2", "preguntas abiertas de síntesis · cinco puntos cada una"], ["Enfoque", "comprensión, interpretación y razonamiento práctico"]]],
        study: ["Cómo estudiar", ["Entiende los conceptos antes de memorizar términos.", "Conecta cada paso práctico con la pregunta biológica.", "Repasa las slides con la guía y luego usa checkpoints.", "Usa las herramientas como parte de la lógica de inferencia, no como comandos aislados."]],
        checklist: ["Antes de Lesson 02, puedo...", ["Explicar cómo está organizado el curso.", "Identificar los materiales principales de estudio.", "Reconocer las herramientas usadas en las prácticas.", "Describir el formato del examen.", "Explicar por qué interpretar importa más que memorizar comandos."]]
      },
      roadmap: "Ruta del curso",
    },
    fa: {
      eyebrow: "درس ۰۱ · معرفی درس و آماده‌سازی",
      title: "درس را با نقشهٔ راه، ابزارها و منطق امتحان شروع کنید.",
      subtitle: "این درس اول مسیر را مشخص می‌کند: تبارزایی مولکولی چیست، کلاس‌ها چگونه پیش می‌روند، چه منابع و ابزارهایی مهم‌اند، و چگونه بدون فروکاستن درس به چند دستور آن را مطالعه کنیم.",
      bigIdea: "هدف این است که یاد بگیریم داده‌های زیستی چگونه به استنباط‌های تبارزایی قابل تفسیر و قابل دفاع تبدیل می‌شوند.",
      stats: [["6", "واحد CFU"], ["48", "ساعت کل"], ["16", "جلسه"], ["3h", "برای هر جلسه"]],
      sections: {
        glance: ["نمای کلی درس", ["Molecular Phylogenetics B5791", "کارشناسی ارشد بیوانفورماتیک", "نظری + جلسه‌های عملی", "اسلایدها، مقاله‌ها، کتاب‌ها، GitHub، Drive و ضبط‌ها"]],
        rhythm: ["هر جلسه چگونه پیش می‌رود", [["1h20", "توضیح نظری"], ["20 min", "استراحت"], ["1h20", "جلسهٔ عملی"]]],
        toolkit: ["جعبه‌ابزار نرم‌افزاری", [["خط فرمان / محیط", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["ابزارهای تصویری / تحلیلی", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["ساختار امتحان", [["22", "سؤال چندگزینه‌ای · هرکدام یک امتیاز · بدون نمرهٔ منفی"], ["2", "سؤال بازِ ترکیبی · هرکدام پنج امتیاز"], ["تمرکز", "فهم، تفسیر و استدلال عملی"]]],
        study: ["چگونه مطالعه کنیم", ["پیش از حفظ واژه‌ها، مفهوم‌ها را بفهمید.", "هر گام عملی را به پرسش زیستی وصل کنید.", "اسلایدها را همراه راهنما مرور کنید و بعد با چک‌پوینت‌ها خود را بسنجید.", "ابزارها را بخشی از منطق استنباط بدانید، نه چند دستور جداگانه."]],
        checklist: ["پیش از درس ۰۲، می‌توانم...", ["توضیح دهم درس چگونه سازمان‌دهی شده است.", "منابع اصلی مطالعه را شناسایی کنم.", "ابزارهای استفاده‌شده در جلسه‌های عملی را بشناسم.", "ساختار امتحان را توضیح دهم.", "توضیح دهم چرا تفسیر مهم‌تر از حفظ دستورهاست."]]
      },
      roadmap: "نقشهٔ راه درس",
    }
  }[lang] || {};

  const renderCardList = (items) => <div className="grid gap-3 sm:grid-cols-2">{items.map(item => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{item}</div>)}</div>;

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />
      <LessonPractical lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="grid grid-cols-2 gap-3">{copy.stats.map(([value,label]) => <div key={label} className="rounded-3xl bg-stone-50 p-4"><div className="text-4xl font-black text-red-700">{value}</div><div className="mt-1 text-sm font-bold leading-5 text-stone-600">{label}</div></div>)}</div>
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.bigIdea}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.glance[0]}</div>{renderCardList(copy.sections.glance[1])}</article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.rhythm[0]}</div><div className="grid gap-3">{copy.sections.rhythm[1].map(([time,label]) => <div key={time} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4"><span className="text-2xl font-black text-stone-950">{time}</span><span className="text-sm font-bold text-stone-600">{label}</span></div>)}</div></article>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.toolkit[0]}</div><div className="grid gap-4 md:grid-cols-2">{copy.sections.toolkit[1].map(([group, tools]) => <div key={group} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-xl font-black text-stone-950">{group}</h3><div className="mt-4 flex flex-wrap gap-2">{tools.map(tool => <span key={tool} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-black text-stone-700">{tool}</span>)}</div></div>)}</div></section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1fr]"><article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.exam[0]}</div><div className="space-y-3">{copy.sections.exam[1].map(([value,label]) => <div key={value} className="rounded-2xl border border-red-100 bg-red-50 p-4"><div className="text-2xl font-black text-red-700">{value}</div><div className="mt-1 text-sm font-bold leading-6 text-red-950">{label}</div></div>)}</div></article><article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.study[0]}</div>{renderCardList(copy.sections.study[1])}</article></section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.roadmap}</div><div className="grid gap-2 md:grid-cols-2">{titles.map((title, i) => <a key={title} href={`#/lesson/${String(i+1).padStart(2,"0")}`} className={`rounded-2xl border px-4 py-3 text-sm font-black ${i === 0 ? "border-red-200 bg-red-50 text-red-800" : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"}`}>{String(i+1).padStart(2,"0")} · {title}</a>)}</div></section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-200">{copy.sections.checklist[0]}</div><div className="grid gap-3 md:grid-cols-2">{copy.sections.checklist[1].map(item => <label key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700"/><span>{item}</span></label>)}</div></section>

      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

export const lesson01Quiz = {
  "en": [
    {
      "kind": "theory",
      "question": "What is the basic structure of the Molecular Phylogenetics course?",
      "options": [
        "8 classes of 6 hours",
        "16 classes of 3 hours",
        "12 classes of 4 hours",
        "Only independent practicals"
      ],
      "answer": 1,
      "explanation": "The course has 48 total hours organized as 16 classes of 3 hours each.",
      "optionExplanations": [
        "Eight six-hour meetings would also total 48 hours, but that is not the schedule described for this course.",
        "Correct. The course is organized as 16 classes of 3 hours, for 48 hours total.",
        "Twelve four-hour meetings would be a different format; the slides specify 16 classes of 3 hours.",
        "The course includes practical work, but it is not only independent practicals; it also has lectures and guided sessions."
      ]
    },
    {
      "kind": "theory",
      "question": "What is the intended focus of studying this course?",
      "options": [
        "Memorizing software commands",
        "Interpreting phylogenetic inferences and workflows",
        "Only reading historical taxonomy",
        "Avoiding practical sessions"
      ],
      "answer": 1,
      "explanation": "Commands matter only as part of a workflow. The key goal is understanding how biological data become defensible phylogenetic interpretations.",
      "optionExplanations": [
        "Software commands are used in the practicals, but they are tools, not the main learning objective.",
        "Correct. The goal is to understand workflows and interpret phylogenetic results in a biologically meaningful way.",
        "Historical taxonomy appears in the background, but the course is broader and focuses on molecular phylogenetic inference.",
        "Practicals are part of how the course connects concepts to real analysis, so avoiding them would miss a key component."
      ]
    },
    {
      "kind": "theory",
      "question": "Which description matches the exam format presented in the course introduction?",
      "options": [
        "Only oral questions",
        "22 multiple choice questions plus 2 open-ended synthesis questions",
        "Only code exercises",
        "A long essay without predefined length"
      ],
      "answer": 1,
      "explanation": "The exam combines multiple choice questions with open-ended questions that test synthesis and interpretation.",
      "optionExplanations": [
        "The exam was not presented as an oral-only assessment.",
        "Correct. The format combines 22 multiple choice questions with 2 open-ended synthesis questions.",
        "Coding tools appear in practicals, but the exam is not only code exercises.",
        "The open questions have a predefined length and focus on synthesis, not an unrestricted long essay."
      ]
    },
    {
      "kind": "practical",
      "question": "What is the main purpose of the Lesson 01 practical notebook?",
      "options": [
        "To infer a final phylogenetic tree",
        "To set up the software environment and course toolkit",
        "To estimate divergence times",
        "To test selection using dN/dS"
      ],
      "answer": 1,
      "explanation": "The first practical is about software installation and preparing the tools that will be used later.",
      "optionExplanations": [
        "Inferring final trees comes later; Lesson 01 is about getting the working environment ready.",
        "Correct. The first notebook focuses on software installation and preparing the course toolkit.",
        "Divergence-time analysis is a later application, not the purpose of the setup notebook.",
        "dN/dS and selection are covered later; they are not the aim of the first practical."
      ]
    },
    {
      "kind": "practical",
      "question": "How should the practical sessions be studied?",
      "options": [
        "As command lists to memorize",
        "As workflows connected to biological questions",
        "As optional material unrelated to the exam",
        "As replacements for the lecture slides"
      ],
      "answer": 1,
      "explanation": "The practicals are meant to connect methods and outputs to biological interpretation, not to be memorized as isolated commands.",
      "optionExplanations": [
        "Commands are useful, but memorizing them without context misses the logic of the analysis.",
        "Correct. Practicals should be studied as workflows that answer biological questions.",
        "Practicals are relevant because they show how theory becomes analysis and interpretation.",
        "Slides and practicals complement each other; the notebook does not replace the lecture material."
      ]
    }
  ],
  "es": [
    {
      "kind": "theory",
      "question": "¿Cuál es la estructura básica del curso de Filogenética Molecular?",
      "options": [
        "8 clases de 6 horas",
        "16 clases de 3 horas",
        "12 clases de 4 horas",
        "Solo prácticas independientes"
      ],
      "answer": 1,
      "explanation": "El curso tiene 48 horas totales organizadas como 16 clases de 3 horas cada una.",
      "optionExplanations": [
        "Ocho clases de seis horas también sumarían 48 horas, pero no es el formato descrito para el curso.",
        "Correcto. El curso se organiza en 16 clases de 3 horas, para un total de 48 horas.",
        "Doce clases de cuatro horas sería otro formato; las slides especifican 16 clases de 3 horas.",
        "El curso incluye prácticas, pero no son prácticas independientes únicamente: también hay explicación teórica y sesiones guiadas."
      ]
    },
    {
      "kind": "theory",
      "question": "¿Cuál es el enfoque correcto para estudiar esta materia?",
      "options": [
        "Memorizar comandos de software",
        "Interpretar inferencias filogenéticas y flujos de trabajo",
        "Leer solo taxonomía histórica",
        "Evitar las prácticas"
      ],
      "answer": 1,
      "explanation": "Los comandos importan solo dentro de un flujo de análisis. La clave es entender cómo los datos biológicos se convierten en interpretaciones filogenéticas defendibles.",
      "optionExplanations": [
        "Los comandos se usan en las prácticas, pero son herramientas; no son el objetivo principal del curso.",
        "Correcto. La idea es entender los flujos de análisis e interpretar resultados filogenéticos con sentido biológico.",
        "La taxonomía histórica aparece como contexto, pero el curso es más amplio y se centra en inferencia filogenética molecular.",
        "Las prácticas conectan los conceptos con análisis reales; evitarlas dejaría fuera una parte clave del curso."
      ]
    },
    {
      "kind": "theory",
      "question": "¿Qué formato de examen se presentó en la introducción?",
      "options": [
        "Solo preguntas orales",
        "22 preguntas multiple choice + 2 preguntas abiertas de síntesis",
        "Solo ejercicios de código",
        "Un ensayo largo sin longitud definida"
      ],
      "answer": 1,
      "explanation": "El examen combina preguntas multiple choice con preguntas abiertas que evalúan síntesis e interpretación.",
      "optionExplanations": [
        "El examen no fue presentado como una evaluación solo oral.",
        "Correcto. El formato combina 22 preguntas multiple choice con 2 preguntas abiertas de síntesis.",
        "El código y las herramientas aparecen en prácticas, pero el examen no es solo de programación.",
        "Las preguntas abiertas tienen longitud predefinida y buscan síntesis, no un ensayo largo sin límite."
      ]
    },
    {
      "kind": "practical",
      "question": "¿Cuál es el objetivo principal del notebook práctico de la Lección 01?",
      "options": [
        "Inferir el árbol filogenético final",
        "Preparar el entorno de software y el toolkit del curso",
        "Estimar tiempos de divergencia",
        "Inferir selección con dN/dS"
      ],
      "answer": 1,
      "explanation": "La primera práctica se centra en instalación y preparación de las herramientas que se usarán después.",
      "optionExplanations": [
        "Inferir árboles finales ocurre más adelante; la Lección 01 prepara el entorno de trabajo.",
        "Correcto. El primer notebook se centra en instalar y preparar las herramientas del curso.",
        "Los tiempos de divergencia se trabajan en una aplicación posterior, no en el notebook de setup.",
        "dN/dS y selección aparecen más adelante; no son el objetivo de la primera práctica."
      ]
    },
    {
      "kind": "practical",
      "question": "¿Cómo conviene estudiar las prácticas?",
      "options": [
        "Como listas de comandos para memorizar",
        "Como flujos conectados con preguntas biológicas",
        "Como material opcional sin relación con el examen",
        "Como reemplazo de las slides"
      ],
      "answer": 1,
      "explanation": "Las prácticas conectan métodos y outputs con interpretación biológica; no son comandos aislados.",
      "optionExplanations": [
        "Los comandos sirven, pero memorizarlos sin contexto no ayuda a entender la lógica del análisis.",
        "Correcto. Las prácticas deben estudiarse como flujos de trabajo conectados con preguntas biológicas.",
        "Las prácticas sí son relevantes porque muestran cómo la teoría se convierte en análisis e interpretación.",
        "Las slides y las prácticas se complementan; el notebook no reemplaza el material teórico."
      ]
    }
  ],
  "fa": [
    {
      "kind": "theory",
      "question": "ساختار اصلی درس تبارزایی مولکولی چیست؟",
      "options": [
        "۸ جلسهٔ ۶ ساعته",
        "۱۶ جلسهٔ ۳ ساعته",
        "۱۲ جلسهٔ ۴ ساعته",
        "فقط تمرین‌های مستقل"
      ],
      "answer": 1,
      "explanation": "این درس ۴۸ ساعت است و در قالب ۱۶ جلسهٔ ۳ ساعته برگزار می‌شود.",
      "optionExplanations": [
        "۸ جلسهٔ ۶ ساعته هم ۴۸ ساعت می‌شود، اما قالب اعلام‌شدهٔ این درس نیست.",
        "درست است. درس در قالب ۱۶ جلسهٔ ۳ ساعته، در مجموع ۴۸ ساعت، برگزار می‌شود.",
        "۱۲ جلسهٔ ۴ ساعته قالب دیگری است؛ در اسلایدها ۱۶ جلسهٔ ۳ ساعته آمده است.",
        "درس بخش عملی دارد، اما فقط تمرین مستقل نیست؛ توضیح نظری و جلسهٔ هدایت‌شده هم دارد."
      ]
    },
    {
      "kind": "theory",
      "question": "تمرکز درست در مطالعهٔ این درس چیست؟",
      "options": [
        "حفظ دستورهای نرم‌افزاری",
        "تفسیر استنباط‌های تبارزایی و جریان تحلیل",
        "فقط خواندن تاریخچهٔ رده‌بندی",
        "نادیده‌گرفتن بخش عملی"
      ],
      "answer": 1,
      "explanation": "دستورها فقط درون جریان تحلیل معنا دارند؛ هدف فهم تبدیل دادهٔ زیستی به تفسیر تبارزایی قابل دفاع است.",
      "optionExplanations": [
        "دستورهای نرم‌افزاری ابزارند، نه هدف اصلی یادگیری.",
        "درست است. هدف فهم جریان تحلیل و تفسیر نتایج تبارزایی با معنای زیستی است.",
        "تاریخچهٔ رده‌بندی فقط بخشی از زمینه است؛ درس گسترده‌تر و دربارهٔ استنباط تبارزایی مولکولی است.",
        "بخش عملی مفاهیم را به تحلیل واقعی وصل می‌کند، بنابراین نادیده‌گرفتن آن درست نیست."
      ]
    },
    {
      "kind": "theory",
      "question": "ساختار امتحان چگونه معرفی شد؟",
      "options": [
        "فقط پرسش شفاهی",
        "۲۲ سؤال چندگزینه‌ای + ۲ سؤال باز ترکیبی",
        "فقط تمرین کدنویسی",
        "یک مقالهٔ بلند بدون طول مشخص"
      ],
      "answer": 1,
      "explanation": "امتحان ترکیبی از سؤال‌های چندگزینه‌ای و سؤال‌های باز برای سنجش ترکیب و تفسیر است.",
      "optionExplanations": [
        "امتحان به‌صورت فقط شفاهی معرفی نشد.",
        "درست است. امتحان شامل ۲۲ سؤال چندگزینه‌ای و ۲ سؤال باز ترکیبی است.",
        "ابزارها در تمرین‌ها استفاده می‌شوند، اما امتحان فقط تمرین کدنویسی نیست.",
        "پرسش‌های باز طول مشخص دارند و بر ترکیب و تفسیر تمرکز می‌کنند، نه مقالهٔ نامحدود."
      ]
    },
    {
      "kind": "practical",
      "question": "هدف اصلی notebook عملی درس ۰۱ چیست؟",
      "options": [
        "استنباط درخت نهایی",
        "آماده‌سازی محیط نرم‌افزاری و ابزارهای درس",
        "برآورد زمان واگرایی",
        "استنباط انتخاب با dN/dS"
      ],
      "answer": 1,
      "explanation": "تمرین اول دربارهٔ نصب و آماده‌سازی ابزارهایی است که بعداً استفاده می‌شوند.",
      "optionExplanations": [
        "استنباط درخت نهایی در درس‌های بعدی می‌آید؛ درس ۰۱ محیط کار را آماده می‌کند.",
        "درست است. اولین notebook روی نصب و آماده‌سازی ابزارهای درس تمرکز دارد.",
        "برآورد زمان واگرایی کاربردی مربوط به درس‌های بعدی است، نه notebook نصب.",
        "dN/dS و انتخاب بعداً مطرح می‌شوند و هدف تمرین اول نیستند."
      ]
    },
    {
      "kind": "practical",
      "question": "بخش‌های عملی را چگونه باید مطالعه کرد؟",
      "options": [
        "به‌عنوان فهرست دستورها برای حفظ‌کردن",
        "به‌عنوان جریان تحلیل مرتبط با پرسش زیستی",
        "به‌عنوان محتوای اختیاری نامرتبط با امتحان",
        "به‌عنوان جایگزین اسلایدها"
      ],
      "answer": 1,
      "explanation": "تمرین‌ها روش‌ها و خروجی‌ها را به تفسیر زیستی وصل می‌کنند، نه اینکه فقط چند دستور جداگانه باشند.",
      "optionExplanations": [
        "حفظ دستورها بدون زمینه، منطق تحلیل را نشان نمی‌دهد.",
        "درست است. تمرین‌ها باید به‌عنوان جریان تحلیل مرتبط با پرسش زیستی مطالعه شوند.",
        "تمرین‌ها مرتبط‌اند، چون نشان می‌دهند نظریه چگونه به تحلیل و تفسیر تبدیل می‌شود.",
        "اسلایدها و notebook مکمل هم هستند؛ notebook جایگزین کامل اسلایدها نیست."
      ]
    }
  ]
};

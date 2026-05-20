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

const copy = {
  en: {
    eyebrow: "Lesson 03 · Phylogenetics 101 · Molecular phylogenetics",
    title: "Move from tree thinking to molecular characters, genetic distance and clocks.",
    subtitle:
      "This lesson asks what kind of evidence can be used for phylogenetics, why molecular sequences are so powerful, and why neutral change is useful but never perfectly clock-like.",
    tags: ["characters", "homology", "homoplasy", "molecular data", "genetic distance", "molecular clock", "neutral theory"],
    coreLabel: "Core idea",
    core:
      "Phylogenetics can use many kinds of characters, but molecular phylogenetics works best when the compared states are homologous, informative and not dominated by convergence or selection.",
    pathTitle: "How this lesson is built",
    path: [
      ["1", "Characters", "What counts as data for phylogenetic inference?"],
      ["2", "Quality", "Which properties make a character useful rather than misleading?"],
      ["3", "Homology", "Why must compared states come from shared ancestry?"],
      ["4", "Molecules", "Why are sequences objective, abundant and scalable?"],
      ["5", "Distance", "How do sequence differences become evolutionary distance and time?"],
    ],
    emphasisTitle: "What the professor stressed",
    emphasis: [
      ["Phylogenetics is not only molecular", "Characters can be morphology, behaviour, genome structure, language or food traits. Molecular data dominate today because they are abundant and standardized, not because other characters are impossible.", "sky"],
      ["Not every character is useful", "A good character should be heritable, independent, informative, clear, homologous and not excessively homoplastic.", "green"],
      ["Homology beats superficial similarity", "The professor repeatedly framed this as comparing the ‘same thing’: states are useful when they descend from one ancestral state, even if their current function differs.", "red"],
      ["Distance must be interpreted through time", "Sequence differences are observations; phylogenetic distance is interpreted as change accumulated along descendant lineages after a split.", "amber"],
      ["Molecular clocks are approximations", "Neutral changes help reconstruct relationships and estimate dates, but mutation rates and selection vary among genes, genomes and lineages.", "purple"],
    ],
    sections: {
      big: [
        "Big picture",
        "Lesson 02 taught how to read the tree. Lesson 03 asks what evidence should be placed on the tree. Phylogenetics works with characters: observable states that vary among taxa and may carry historical information.",
        "The key exam intuition is that phylogenetic data are not just ‘things that look similar’. They must be interpretable as inherited states. Homology gives phylogenetic signal; homoplasy can generate false signal.",
      ],
      characterTypes: [
        "Phylogenetics can use many character types",
        [
          ["Morphological", "Bones, teeth, floral structures or other anatomical traits."],
          ["Molecular", "DNA, RNA and protein sequences. This is the main focus of the course."],
          ["Behavioural", "Mating behaviours or ecological interactions; useful but difficult to code and often prone to convergence."],
          ["Genomic structural", "Gene order, synteny, insertions, mobile elements or presence/absence features."],
          ["Cultural / linguistic", "Words, cultural traits or food traits can be treated as characters in other fields."],
        ],
        "The course is molecular, but the logic of character choice is broader than molecules.",
      ],
      criteria: [
        "What makes a good phylogenetic character?",
        [
          ["Heritable", "The character must be inherited genetically or developmentally. Acquired states that do not track descent are dangerous."],
          ["Independent", "Characters should not all measure the same underlying signal, otherwise one process is over-counted."],
          ["Informative", "A character that is identical in all taxa gives no resolution; one that changes too much becomes noisy."],
          ["Clear", "States should be coded unambiguously. Molecular states are attractive because A, C, G and T are discrete."],
          ["Homologous", "Compared states should derive from a single ancestral state."],
          ["Low homoplasy", "Convergence and reversals can make unrelated taxa look similar."],
        ],
      ],
      homology: [
        "Homology vs homoplasy",
        "Homology means similarity due to shared ancestry. Homoplasy means similarity not due to shared ancestry, usually because similar outcomes evolved independently or because a lineage reverted to an ancestral-like state.",
        [
          ["Homology", "Human, cat, whale and bat forelimbs look different and perform different functions, but their bones correspond because they descend from one ancestral forelimb.", "green"],
          ["Homoplasy", "Wings in birds, bats and insects; streamlined aquatic bodies in sharks and dolphins; camera-type eyes; echolocation in bats and whales. These similarities can mislead tree inference.", "red"],
        ],
        "Exam trap: function is not the definition of homology. Structures can have different functions and still be homologous; similar functions can evolve independently and be homoplastic.",
      ],
      molecular: [
        "Why molecular phylogenetics?",
        [
          ["Abundant", "Genomes provide huge numbers of characters, and sequencing is comparatively inexpensive."],
          ["Objective", "A nucleotide is scored as A, C, G or T; this reduces subjectivity relative to many morphological characters."],
          ["Multiple resolutions", "Different genes and datasets can be useful for shallow or deep divergences."],
          ["Standardized", "Bioinformatic tools, repositories and pipelines make analyses more reproducible."],
        ],
      ],
      history: [
        "A first molecular bridge",
        "Early molecular phylogenetic evidence came from immunochemistry: stronger serological cross-reactions tended to occur between closer relatives. George Nuttall’s 1904 work used blood reactions to infer relationships among animal groups, supporting the close relationship between humans and great apes.",
      ],
      distance: [
        "From sequence differences to genetic distance",
        "When two present-day sequences differ, those differences accumulated along the two descendant lineages since their common ancestor. A distance between species is therefore interpreted as the sum of changes along both paths from the ancestor to the sampled descendants.",
        "More ancient splits usually have more time to accumulate changes, so they often show greater genetic distance. This is the conceptual bridge from aligned sequences to phylogenetic inference.",
      ],
      clock: [
        "Molecular clock and neutral theory",
        "The molecular clock hypothesis says that molecular changes may accumulate at an approximately constant rate over long periods, allowing genetic distance to approximate divergence time.",
        "Neutral theory explains why many molecular changes can be useful for phylogenetics: if many substitutions are neutral or nearly neutral, they can accumulate through drift and help reconstruct relationships without directly reflecting adaptation.",
        "But the clock is not perfect. Mutation rates vary among genes, genomes and species; selection can remove or favour changes; and convergent molecular evolution can make unrelated lineages look similar.",
      ],
      exam: [
        "How to recognize exam questions",
        [
          ["‘Which character is ideal?’", "Look for heritable, variable-but-not-too-variable, clear, homologous and low-homoplasy."],
          ["‘Wings / echolocation / streamlined bodies’", "Think homoplasy and convergence, not shared ancestry."],
          ["‘Same bones, different functions’", "Think homology: similarity due to common ancestry, not function."],
          ["‘Genetic distance’", "Think accumulated changes along descendant lineages from a common ancestor."],
          ["‘Molecular clock’", "Reasonable approximation in some cases, not universal truth."],
        ],
      ],
      checklist: [
        "Before Lesson 04, I can...",
        [
          "Explain why phylogenetics can use many kinds of characters.",
          "List the properties of a useful phylogenetic character.",
          "Distinguish homology from homoplasy with examples.",
          "Explain why molecular data are widely used today.",
          "Interpret genetic distance as accumulated change through time.",
          "State why the molecular clock is useful but imperfect.",
        ],
      ],
    },
    visual: {
      homology: "homology",
      homoplasy: "homoplasy",
      ancestor: "ancestor",
      descendant: "descendant",
      distance: "distance = path 1 + path 2",
      clock: "approximate clock",
      violation: "rate variation",
    },
  },
  es: {
    eyebrow: "Lección 03 · Phylogenetics 101 · Filogenética molecular",
    title: "Pasar de tree thinking a caracteres moleculares, distancia genética y relojes.",
    subtitle:
      "Esta lección pregunta qué evidencia sirve para la filogenética, por qué las secuencias moleculares son tan potentes y por qué el cambio neutral es útil aunque nunca sea perfectamente clock-like.",
    tags: ["caracteres", "homología", "homoplasia", "datos moleculares", "distancia genética", "reloj molecular", "teoría neutral"],
    coreLabel: "Idea central",
    core:
      "La filogenética puede usar muchos tipos de caracteres, pero la filogenética molecular funciona mejor cuando los estados comparados son homólogos, informativos y no están dominados por convergencia o selección.",
    pathTitle: "Cómo se construye esta lección",
    path: [
      ["1", "Caracteres", "¿Qué cuenta como dato para inferencia filogenética?"],
      ["2", "Calidad", "¿Qué propiedades hacen útil a un carácter?"],
      ["3", "Homología", "¿Por qué los estados comparados deben venir de ancestría común?"],
      ["4", "Moléculas", "¿Por qué las secuencias son objetivas, abundantes y escalables?"],
      ["5", "Distancia", "¿Cómo se convierten diferencias de secuencia en distancia y tiempo?"],
    ],
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["La filogenética no es solo molecular", "Los caracteres pueden ser morfología, comportamiento, estructura genómica, lenguaje o rasgos culturales. Los datos moleculares dominan porque son abundantes y estandarizados, no porque lo demás sea imposible.", "sky"],
      ["No cualquier carácter sirve", "Un buen carácter debe ser heredable, independiente, informativo, claro, homólogo y no excesivamente homoplásico.", "green"],
      ["Homología > similitud superficial", "El profe lo planteó como comparar ‘la misma cosa’: los estados sirven cuando descienden de un estado ancestral común, aunque su función actual difiera.", "red"],
      ["La distancia se interpreta en el tiempo", "Las diferencias entre secuencias son observaciones; la distancia filogenética se interpreta como cambio acumulado en linajes descendientes tras una separación.", "amber"],
      ["Los relojes moleculares son aproximaciones", "Los cambios neutrales ayudan a reconstruir relaciones y fechas, pero las tasas de mutación y la selección varían entre genes, genomas y linajes.", "purple"],
    ],
    sections: {
      big: [
        "Panorama",
        "La Lección 02 enseñó a leer el árbol. La Lección 03 pregunta qué evidencia se coloca en el árbol. La filogenética trabaja con caracteres: estados observables que varían entre taxones y pueden contener información histórica.",
        "La intuición de examen es que los datos filogenéticos no son simplemente ‘cosas parecidas’. Deben poder interpretarse como estados heredados. La homología da señal filogenética; la homoplasia puede generar señal falsa.",
      ],
      characterTypes: [
        "La filogenética puede usar muchos tipos de caracteres",
        [
          ["Morfológicos", "Huesos, dientes, estructuras florales u otros rasgos anatómicos."],
          ["Moleculares", "Secuencias de DNA, RNA y proteínas. Este es el foco principal del curso."],
          ["Comportamentales", "Conductas de apareamiento o interacciones ecológicas; útiles pero difíciles de codificar y a menudo propensas a convergencia."],
          ["Estructurales genómicos", "Orden génico, sintenia, inserciones, elementos móviles o presencia/ausencia."],
          ["Culturales / lingüísticos", "Palabras, rasgos culturales o incluso comida pueden tratarse como caracteres en otros campos."],
        ],
        "El curso es molecular, pero la lógica de elegir caracteres es más amplia que las moléculas.",
      ],
      criteria: [
        "¿Qué hace bueno a un carácter filogenético?",
        [
          ["Heredable", "Debe heredarse genética o desarrollativamente. Estados adquiridos que no siguen la descendencia son peligrosos."],
          ["Independiente", "Los caracteres no deberían medir todos la misma señal subyacente, porque eso sobre-pesa un solo proceso."],
          ["Informativo", "Un carácter igual en todos los taxones no resuelve nada; uno que cambia demasiado se vuelve ruido."],
          ["Claro", "Los estados deben codificarse sin ambigüedad. Las bases A, C, G y T son atractivas por ser discretas."],
          ["Homólogo", "Los estados comparados deben derivar de un estado ancestral común."],
          ["Baja homoplasia", "La convergencia y las reversals pueden hacer que taxones no cercanos parezcan similares."],
        ],
      ],
      homology: [
        "Homología vs homoplasia",
        "Homología significa similitud por ancestría compartida. Homoplasia significa similitud no debida a ancestría compartida, normalmente porque resultados similares evolucionaron independientemente o porque un linaje volvió a un estado parecido al ancestral.",
        [
          ["Homología", "Las extremidades anteriores de humanos, gatos, ballenas y murciélagos se ven distintas y tienen funciones distintas, pero sus huesos corresponden porque descienden de una extremidad ancestral.", "green"],
          ["Homoplasia", "Alas en aves, murciélagos e insectos; cuerpos acuáticos fusiformes en tiburones y delfines; ojos tipo cámara; ecolocalización en murciélagos y ballenas. Estas similitudes pueden engañar la inferencia.", "red"],
        ],
        "Trampa de examen: la función no define homología. Estructuras con funciones distintas pueden ser homólogas; funciones similares pueden evolucionar de forma independiente y ser homoplásicas.",
      ],
      molecular: [
        "¿Por qué filogenética molecular?",
        [
          ["Abundante", "Los genomas ofrecen muchísimos caracteres y la secuenciación es relativamente barata."],
          ["Objetiva", "Un nucleótido se codifica como A, C, G o T, reduciendo subjetividad frente a muchos caracteres morfológicos."],
          ["Múltiples resoluciones", "Genes y datasets distintos pueden servir para divergencias recientes o profundas."],
          ["Estandarizada", "Herramientas bioinformáticas, repositorios y pipelines hacen los análisis más reproducibles."],
        ],
      ],
      history: [
        "Un primer puente molecular",
        "Una evidencia molecular temprana vino de la inmunoquímica: reacciones serológicas más fuertes tendían a ocurrir entre organismos más cercanos. El trabajo de George Nuttall en 1904 usó reacciones sanguíneas para inferir relaciones entre grupos animales, apoyando la cercanía entre humanos y grandes simios.",
      ],
      distance: [
        "De diferencias de secuencia a distancia genética",
        "Cuando dos secuencias actuales difieren, esas diferencias se acumularon en los dos linajes descendientes desde su ancestro común. La distancia entre especies se interpreta como la suma de cambios a lo largo de ambos caminos desde el ancestro a los descendientes muestreados.",
        "Separaciones más antiguas suelen tener más tiempo para acumular cambios, por lo que a menudo muestran mayor distancia genética. Este es el puente conceptual entre secuencias alineadas e inferencia filogenética.",
      ],
      clock: [
        "Reloj molecular y teoría neutral",
        "La hipótesis del reloj molecular dice que los cambios moleculares pueden acumularse a una tasa aproximadamente constante durante largos periodos, haciendo que la distancia genética aproxime el tiempo de divergencia.",
        "La teoría neutral explica por qué muchos cambios moleculares son útiles para filogenética: si muchas sustituciones son neutrales o casi neutrales, pueden acumularse por deriva y ayudar a reconstruir relaciones sin reflejar directamente adaptación.",
        "Pero el reloj no es perfecto. Las tasas de mutación varían entre genes, genomas y especies; la selección puede eliminar o favorecer cambios; y la evolución molecular convergente puede hacer que linajes no cercanos parezcan similares.",
      ],
      exam: [
        "Cómo reconocer preguntas de examen",
        [
          ["‘Which character is ideal?’", "Busca heredable, variable pero no demasiado, claro, homólogo y con poca homoplasia."],
          ["‘Wings / echolocation / streamlined bodies’", "Piensa homoplasia y convergencia, no ancestría compartida."],
          ["‘Same bones, different functions’", "Piensa homología: similitud por ancestría común, no por función."],
          ["‘Genetic distance’", "Piensa cambios acumulados en linajes descendientes desde un ancestro común."],
          ["‘Molecular clock’", "Aproximación razonable en algunos casos, no verdad universal."],
        ],
      ],
      checklist: [
        "Antes de la Lección 04, puedo...",
        [
          "Explicar por qué la filogenética puede usar muchos tipos de caracteres.",
          "Enumerar propiedades de un carácter filogenético útil.",
          "Distinguir homología de homoplasia con ejemplos.",
          "Explicar por qué los datos moleculares se usan tanto hoy.",
          "Interpretar la distancia genética como cambio acumulado en el tiempo.",
          "Decir por qué el reloj molecular es útil pero imperfecto.",
        ],
      ],
    },
    visual: {
      homology: "homología",
      homoplasy: "homoplasia",
      ancestor: "ancestro",
      descendant: "descendiente",
      distance: "distancia = camino 1 + camino 2",
      clock: "reloj aproximado",
      violation: "variación de tasa",
    },
  },
  fa: {
    eyebrow: "درس ۰۳ · تبارزایی ۱۰۱ · تبارزایی مولکولی",
    title: "از تفکر درختی به کاراکترهای مولکولی، فاصلهٔ ژنتیکی و ساعت مولکولی بروید.",
    subtitle:
      "این درس بررسی می‌کند چه نوع شواهدی برای تبارزایی مناسب‌اند، چرا توالی‌های مولکولی قدرتمندند، و چرا تغییرات خنثی مفیدند اما هرگز کاملاً ساعت‌گونه نیستند.",
    tags: ["کاراکترها", "همولوژی", "هموپلازی", "دادهٔ مولکولی", "فاصلهٔ ژنتیکی", "ساعت مولکولی", "نظریهٔ خنثی"],
    coreLabel: "ایدهٔ اصلی",
    core:
      "تبارزایی می‌تواند از انواع کاراکترها استفاده کند، اما تبارزایی مولکولی زمانی بهتر کار می‌کند که حالت‌های مقایسه‌شده همولوگ، اطلاعاتی و کم‌تر تحت تأثیر همگرایی یا انتخاب باشند.",
    pathTitle: "ساختار این درس",
    path: [
      ["1", "کاراکترها", "چه چیزی دادهٔ مناسب برای استنباط تبارزایی است؟"],
      ["2", "کیفیت", "چه ویژگی‌هایی کاراکتر را مفید می‌کند؟"],
      ["3", "همولوژی", "چرا حالت‌های مقایسه‌شده باید از نیای مشترک بیایند؟"],
      ["4", "مولکول‌ها", "چرا توالی‌ها عینی، فراوان و مقیاس‌پذیرند؟"],
      ["5", "فاصله", "تفاوت‌های توالی چگونه به فاصله و زمان تکاملی تبدیل می‌شوند؟"],
    ],
    emphasisTitle: "نکاتی که استاد تأکید کرد",
    emphasis: [
      ["تبارزایی فقط مولکولی نیست", "کاراکترها می‌توانند مورفولوژی، رفتار، ساختار ژنومی، زبان یا ویژگی‌های فرهنگی باشند. داده‌های مولکولی امروز غالب‌اند چون فراوان و استانداردند.", "sky"],
      ["هر کاراکتری مفید نیست", "کاراکتر خوب باید وراثتی، مستقل، اطلاعاتی، روشن، همولوگ و کم‌هموپلازی باشد.", "green"],
      ["همولوژی مهم‌تر از شباهت سطحی است", "باید «همان چیز» را مقایسه کنیم: حالت‌هایی که از یک حالت اجدادی مشترک آمده‌اند، حتی اگر عملکرد امروزی‌شان فرق کند.", "red"],
      ["فاصله در بستر زمان تفسیر می‌شود", "تفاوت‌های توالی مشاهده‌اند؛ فاصلهٔ تبارزایی به‌صورت تغییرات انباشته در دودمان‌های فرزند پس از جدایی تفسیر می‌شود.", "amber"],
      ["ساعت مولکولی یک تقریب است", "تغییرات خنثی به بازسازی روابط و تاریخ‌ها کمک می‌کنند، اما نرخ جهش و انتخاب بین ژن‌ها و دودمان‌ها فرق می‌کند.", "purple"],
    ],
    sections: {
      big: [
        "نمای کلی",
        "درس ۰۲ خواندن درخت را آموزش داد. درس ۰۳ می‌پرسد چه شواهدی روی درخت قرار می‌گیرد. تبارزایی با کاراکترها کار می‌کند: حالت‌های مشاهده‌پذیر که بین تاکسون‌ها فرق دارند و ممکن است اطلاعات تاریخی داشته باشند.",
        "نکتهٔ امتحانی این است که دادهٔ تبارزایی فقط «چیزهای شبیه» نیست. باید بتوان آن را به‌عنوان حالت‌های وراثتی تفسیر کرد. همولوژی سیگنال تبارزایی می‌دهد؛ هموپلازی می‌تواند سیگنال کاذب بسازد.",
      ],
      characterTypes: [
        "تبارزایی می‌تواند از انواع کاراکترها استفاده کند",
        [
          ["مورفولوژیک", "استخوان‌ها، دندان‌ها، ساختارهای گل یا دیگر ویژگی‌های آناتومیک."],
          ["مولکولی", "توالی‌های DNA، RNA و پروتئین. تمرکز اصلی درس همین است."],
          ["رفتاری", "رفتارهای جفت‌گیری یا تعاملات اکولوژیک؛ مفید اما سخت برای کدگذاری و گاهی همگرا."],
          ["ساختاری ژنومی", "ترتیب ژن‌ها، سنتنی، درج‌ها، عناصر متحرک یا حضور/عدم حضور."],
          ["فرهنگی / زبانی", "واژه‌ها یا ویژگی‌های فرهنگی هم در برخی حوزه‌ها مانند کاراکتر استفاده می‌شوند."],
        ],
        "درس مولکولی است، اما منطق انتخاب کاراکتر از مولکول‌ها گسترده‌تر است.",
      ],
      criteria: [
        "چه چیزی یک کاراکتر تبارزایی را خوب می‌کند؟",
        [
          ["وراثتی", "باید ژنتیکی یا تکوینی به ارث برسد. حالت‌های اکتسابی که نسب را دنبال نمی‌کنند خطرناک‌اند."],
          ["مستقل", "همهٔ کاراکترها نباید یک سیگنال زیربنایی را اندازه بگیرند."],
          ["اطلاعاتی", "کاراکتری که در همهٔ تاکسون‌ها یکسان است چیزی را حل نمی‌کند؛ کاراکتری که بیش از حد تغییر می‌کند نویز می‌شود."],
          ["روشن", "حالت‌ها باید بدون ابهام کدگذاری شوند؛ A، C، G و T حالت‌های گسسته‌اند."],
          ["همولوگ", "حالت‌های مقایسه‌شده باید از یک حالت اجدادی مشترک آمده باشند."],
          ["هموپلازی کم", "همگرایی و بازگشت می‌توانند تاکسون‌های غیرنزدیک را شبیه نشان دهند."],
        ],
      ],
      homology: [
        "همولوژی در برابر هموپلازی",
        "همولوژی یعنی شباهت به‌علت نیای مشترک. هموپلازی یعنی شباهت نه به‌علت نیای مشترک، بلکه اغلب به‌دلیل تکامل مستقل یا بازگشت به حالت شبیه اجدادی.",
        [
          ["همولوژی", "اندام‌های جلویی انسان، گربه، نهنگ و خفاش ظاهر و عملکرد متفاوت دارند، اما استخوان‌هایشان متناظر است چون از اندام اجدادی مشترک آمده‌اند.", "green"],
          ["هموپلازی", "بال‌ها در پرندگان، خفاش‌ها و حشرات؛ بدن‌های آبزی کشیده در کوسه و دلفین؛ چشم‌های دوربینی؛ اکولوکیشن در خفاش‌ها و نهنگ‌ها. این شباهت‌ها می‌توانند گمراه‌کننده باشند.", "red"],
        ],
        "دام امتحانی: عملکرد تعریف همولوژی نیست. ساختارهایی با عملکرد متفاوت می‌توانند همولوگ باشند؛ عملکردهای مشابه می‌توانند مستقل تکامل یافته باشند.",
      ],
      molecular: [
        "چرا تبارزایی مولکولی؟",
        [
          ["فراوان", "ژنوم‌ها تعداد زیادی کاراکتر می‌دهند و توالی‌یابی نسبتاً ارزان است."],
          ["عینی", "نوکلئوتید به‌صورت A، C، G یا T کد می‌شود و ذهنیت را کاهش می‌دهد."],
          ["رزولوشن‌های مختلف", "ژن‌ها و داده‌های مختلف برای واگرایی‌های کم‌عمق یا عمیق مفیدند."],
          ["استاندارد", "ابزارها، مخازن و pipelineها تحلیل را بازتولیدپذیرتر می‌کنند."],
        ],
      ],
      history: [
        "یک پل مولکولی اولیه",
        "شواهد مولکولی اولیه از ایمونوشیمی آمد: واکنش‌های سرولوژیک قوی‌تر معمولاً بین خویشاوندان نزدیک‌تر دیده می‌شد. کار Nuttall در ۱۹۰۴ از واکنش‌های خون برای استنباط روابط جانوری استفاده کرد.",
      ],
      distance: [
        "از تفاوت توالی به فاصلهٔ ژنتیکی",
        "وقتی دو توالی امروزی فرق دارند، این تفاوت‌ها در دو دودمان فرزند از زمان نیای مشترک انباشته شده‌اند. فاصلهٔ بین گونه‌ها مجموع تغییرات در هر دو مسیر از نیا تا فرزندان نمونه‌برداری‌شده است.",
        "جدایی‌های قدیمی‌تر معمولاً زمان بیش‌تری برای انباشت تغییرات دارند و بنابراین فاصلهٔ ژنتیکی بیش‌تری نشان می‌دهند.",
      ],
      clock: [
        "ساعت مولکولی و نظریهٔ خنثی",
        "فرضیهٔ ساعت مولکولی می‌گوید تغییرات مولکولی ممکن است در بازه‌های طولانی با نرخ تقریباً ثابت انباشته شوند، پس فاصلهٔ ژنتیکی می‌تواند زمان واگرایی را تقریب بزند.",
        "نظریهٔ خنثی توضیح می‌دهد چرا بسیاری از تغییرات مولکولی برای تبارزایی مفیدند: اگر بسیاری از جهش‌ها خنثی یا تقریباً خنثی باشند، از راه رانش انباشته می‌شوند.",
        "اما ساعت کامل نیست. نرخ جهش بین ژن‌ها، ژنوم‌ها و گونه‌ها فرق می‌کند؛ انتخاب می‌تواند تغییرات را حذف یا تثبیت کند؛ و تکامل همگرا می‌تواند دودمان‌های غیرنزدیک را شبیه کند.",
      ],
      exam: [
        "تشخیص سؤال‌های امتحانی",
        [
          ["‘Which character is ideal?’", "به وراثتی، اطلاعاتی، روشن، همولوگ و کم‌هموپلازی فکر کنید."],
          ["‘Wings / echolocation / streamlined bodies’", "به هموپلازی و همگرایی فکر کنید."],
          ["‘Same bones, different functions’", "به همولوژی فکر کنید: شباهت به‌علت نیای مشترک."],
          ["‘Genetic distance’", "به تغییرات انباشته در دو دودمان پس از نیای مشترک فکر کنید."],
          ["‘Molecular clock’", "یک تقریب مفید در برخی موارد، نه قانون جهان‌شمول."],
        ],
      ],
      checklist: [
        "پیش از درس ۰۴، می‌توانم...",
        [
          "توضیح دهم چرا تبارزایی از انواع کاراکترها استفاده می‌کند.",
          "ویژگی‌های یک کاراکتر مفید را فهرست کنم.",
          "همولوژی و هموپلازی را با مثال جدا کنم.",
          "بگویم چرا دادهٔ مولکولی امروز رایج است.",
          "فاصلهٔ ژنتیکی را به‌عنوان تغییر انباشته تفسیر کنم.",
          "توضیح دهم چرا ساعت مولکولی مفید ولی ناقص است.",
        ],
      ],
    },
    visual: {
      homology: "همولوژی",
      homoplasy: "هموپلازی",
      ancestor: "نیا",
      descendant: "فرزند",
      distance: "فاصله = مسیر ۱ + مسیر ۲",
      clock: "ساعت تقریبی",
      violation: "تغییر نرخ",
    },
  },
};

function Card({ title, body, tone = "stone" }) {
  return (
    <div className={`rounded-3xl border p-5 ${toneClasses[tone] || toneClasses.stone}`}>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 opacity-80">{body}</p>
    </div>
  );
}

function Section({ eyebrow, title, children, tone = "white" }) {
  const bg = tone === "dark" ? "border-stone-800 bg-stone-950 text-white" : "border-stone-200 bg-white/90 text-stone-900";
  return (
    <section className={`rounded-[2rem] border p-6 shadow-sm md:p-8 ${bg}`}>
      {eyebrow && <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>}
      <h2 className="text-2xl font-black tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function CharactersDiagram({ t }) {
  return (
    <svg viewBox="0 0 760 300" className="h-full min-h-[260px] w-full rounded-[2rem] bg-[#fffaf0]" role="img" aria-label="Character choice diagram">
      <rect x="0" y="0" width="760" height="300" rx="32" fill="#fffaf0" />
      <path d="M80 215 C160 80, 285 80, 365 215" fill="none" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M395 215 C475 80, 600 80, 680 215" fill="none" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <circle cx="365" cy="215" r="15" fill="#059669" />
      <circle cx="395" cy="215" r="15" fill="#dc2626" />
      <circle cx="80" cy="215" r="10" fill="#111827" />
      <circle cx="680" cy="215" r="10" fill="#111827" />
      <text x="210" y="60" textAnchor="middle" fontSize="22" fontWeight="900" fill="#065f46">{t.visual.homology}</text>
      <text x="550" y="60" textAnchor="middle" fontSize="22" fontWeight="900" fill="#991b1b">{t.visual.homoplasy}</text>
      <text x="210" y="96" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4b5563">shared ancestry</text>
      <text x="550" y="96" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4b5563">independent similarity</text>
      <text x="365" y="250" textAnchor="middle" fontSize="13" fontWeight="800" fill="#065f46">{t.visual.ancestor}</text>
      <text x="395" y="250" textAnchor="middle" fontSize="13" fontWeight="800" fill="#991b1b">convergence</text>
    </svg>
  );
}

function DistanceDiagram({ t }) {
  return (
    <svg viewBox="0 0 760 320" className="h-full min-h-[280px] w-full rounded-[2rem] bg-white" role="img" aria-label="Genetic distance diagram">
      <rect x="0" y="0" width="760" height="320" rx="32" fill="#ffffff" />
      <line x1="380" y1="250" x2="380" y2="170" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <line x1="380" y1="170" x2="220" y2="75" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <line x1="380" y1="170" x2="540" y2="75" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <circle cx="380" cy="170" r="17" fill="#dc2626" />
      <circle cx="220" cy="75" r="15" fill="#0284c7" />
      <circle cx="540" cy="75" r="15" fill="#059669" />
      <text x="380" y="286" textAnchor="middle" fontSize="15" fontWeight="900" fill="#44403c">{t.visual.ancestor}</text>
      <text x="220" y="45" textAnchor="middle" fontSize="16" fontWeight="900" fill="#075985">SP1</text>
      <text x="540" y="45" textAnchor="middle" fontSize="16" fontWeight="900" fill="#065f46">SP2</text>
      <text x="190" y="135" textAnchor="middle" fontSize="13" fontWeight="800" fill="#075985">path 1</text>
      <text x="570" y="135" textAnchor="middle" fontSize="13" fontWeight="800" fill="#065f46">path 2</text>
      <rect x="240" y="18" width="280" height="36" rx="18" fill="#fef2f2" stroke="#fecaca" />
      <text x="380" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#991b1b">{t.visual.distance}</text>
      <path d="M70 270 H690" stroke="#e7e5e4" strokeWidth="4" strokeLinecap="round" />
      <text x="70" y="292" fontSize="13" fontWeight="800" fill="#78716c">past</text>
      <text x="650" y="292" fontSize="13" fontWeight="800" fill="#78716c">present</text>
    </svg>
  );
}

function ClockDiagram({ t }) {
  return (
    <svg viewBox="0 0 760 260" className="h-full min-h-[240px] w-full rounded-[2rem] bg-[#fffaf0]" role="img" aria-label="Molecular clock diagram">
      <rect width="760" height="260" rx="32" fill="#fffaf0" />
      <line x1="90" y1="205" x2="690" y2="205" stroke="#78716c" strokeWidth="3" />
      <line x1="90" y1="205" x2="90" y2="45" stroke="#78716c" strokeWidth="3" />
      <path d="M105 190 C235 150, 360 120, 655 60" fill="none" stroke="#059669" strokeWidth="7" strokeLinecap="round" />
      <path d="M105 190 C210 180, 340 155, 455 75 C515 40, 600 65, 655 52" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" strokeDasharray="10 10" />
      <text x="140" y="42" fontSize="16" fontWeight="900" fill="#44403c">substitutions</text>
      <text x="630" y="228" fontSize="16" fontWeight="900" fill="#44403c">time</text>
      <text x="420" y="100" fontSize="15" fontWeight="900" fill="#065f46">{t.visual.clock}</text>
      <text x="465" y="48" fontSize="15" fontWeight="900" fill="#991b1b">{t.visual.violation}</text>
    </svg>
  );
}

function MolecularPhylogeneticsLesson({ lang = "es", t, isDone, toggle, lessonNo, titles, shared }) {
  const c = copy[lang] || copy.es;
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz } = shared;
  return (
    <main className="mx-auto w-[min(1100px,calc(100%-24px))] pb-16 pt-8">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{c.eyebrow}</div>
            <h1 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{c.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {c.tags.map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700">{tag}</span>)}
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-4 shadow-inner">
              <CharactersDiagram t={c} />
              <div className="mt-4 rounded-3xl bg-stone-950 p-5 text-white">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{c.coreLabel}</div>
                <p className="mt-2 text-lg font-bold leading-7">{c.core}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-5">
        {c.path.map(([num, title, body]) => (
          <div key={num} className="rounded-3xl border border-stone-200 bg-white/85 p-5 shadow-sm">
            <div className="text-2xl font-black text-red-700">{num}</div>
            <h3 className="mt-2 text-lg font-black text-stone-950">{title}</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{body}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 space-y-8">
        <Section title={c.sections.big[0]}>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-lg leading-8 text-stone-700">
              <p>{c.sections.big[1]}</p>
              <p>{c.sections.big[2]}</p>
            </div>
            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-lg font-black text-stone-950">{c.emphasisTitle}</h3>
              <div className="mt-4 space-y-3">
                {c.emphasis.map(([title, body, tone]) => <Card key={title} title={title} body={body} tone={tone} />)}
              </div>
            </div>
          </div>
        </Section>

        <Section title={c.sections.characterTypes[0]}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {c.sections.characterTypes[1].map(([title, body]) => <Card key={title} title={title} body={body} />)}
          </div>
          <p className="mt-5 rounded-3xl border border-sky-100 bg-sky-50 p-5 text-sm font-bold leading-6 text-sky-950">{c.sections.characterTypes[2]}</p>
        </Section>

        <Section title={c.sections.criteria[0]}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.sections.criteria[1].map(([title, body]) => <Card key={title} title={title} body={body} tone="green" />)}
          </div>
        </Section>

        <Section title={c.sections.homology[0]}>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-lg leading-8 text-stone-700">{c.sections.homology[1]}</p>
              <div className="mt-5 grid gap-4">
                {c.sections.homology[2].map(([title, body, tone]) => <Card key={title} title={title} body={body} tone={tone} />)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-inner">
              <CharactersDiagram t={c} />
            </div>
          </div>
          <p className="mt-5 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-black leading-6 text-red-950">{c.sections.homology[3]}</p>
        </Section>

        <Section title={c.sections.molecular[0]}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {c.sections.molecular[1].map(([title, body]) => <Card key={title} title={title} body={body} tone="sky" />)}
          </div>
        </Section>

        <Section title={c.sections.history[0]}>
          <p className="text-lg leading-8 text-stone-700">{c.sections.history[1]}</p>
        </Section>

        <Section title={c.sections.distance[0]}>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4 text-lg leading-8 text-stone-700">
              <p>{c.sections.distance[1]}</p>
              <p>{c.sections.distance[2]}</p>
            </div>
            <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-inner">
              <DistanceDiagram t={c} />
            </div>
          </div>
        </Section>

        <Section title={c.sections.clock[0]}>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-inner">
              <ClockDiagram t={c} />
            </div>
            <div className="space-y-4 text-lg leading-8 text-stone-700">
              <p>{c.sections.clock[1]}</p>
              <p>{c.sections.clock[2]}</p>
              <p>{c.sections.clock[3]}</p>
            </div>
          </div>
        </Section>

        <Section title={c.sections.exam[0]}>
          <div className="overflow-hidden rounded-[2rem] border border-stone-200">
            {c.sections.exam[1].map(([cue, meaning]) => (
              <div key={cue} className="grid gap-2 border-b border-stone-200 bg-white px-5 py-4 last:border-b-0 md:grid-cols-[0.8fr_1.2fr]">
                <div className="text-sm font-black text-stone-950">{cue}</div>
                <div className="text-sm font-semibold leading-6 text-stone-600">{meaning}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={c.sections.checklist[0]}>
          <div className="grid gap-3 md:grid-cols-2">
            {c.sections.checklist[1].map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold text-stone-700">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </Section>
      </div>

      <LessonPractical lang={lang} lessonNo={lessonNo} />
      <LessonQuiz lang={lang} lessonNo={lessonNo} />
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

const enQuiz = [
  {
    kind: "theory",
    question: "Which statement best describes what a phylogenetic character is?",
    options: ["Any observable state that can vary among taxa", "Only a DNA nucleotide", "Only a morphological trait", "A branch length in a tree"],
    answer: 0,
    explanation: "Characters are observable states used for comparison; they can be molecular, morphological, behavioural, genomic or even cultural.",
    optionExplanations: [
      "Correct. A character is any comparable state that may carry historical signal among taxa.",
      "Nucleotides are important molecular characters, but phylogenetics is broader than DNA.",
      "Morphology can be used, but it is not the only kind of phylogenetic character.",
      "Branch length is part of a tree representation, not the raw character used to infer it.",
    ],
  },
  {
    kind: "theory",
    question: "Which combination best describes an ideal character for phylogenetic analysis?",
    options: ["Heritable, informative, clear and homologous", "Environmentally acquired and identical in all taxa", "Extremely variable in every lineage", "Defined only by current function"],
    answer: 0,
    explanation: "Useful characters should track inheritance, vary enough to be informative, be codable, and reflect homology rather than homoplasy.",
    optionExplanations: [
      "Correct. These properties make a character likely to reflect shared ancestry rather than noise.",
      "A non-heritable acquired trait does not track descent, and an invariant character gives no phylogenetic resolution.",
      "Extremely variable characters can become saturated or noisy and may hide the historical signal.",
      "Function can change or converge; homology is about shared ancestry, not just current function.",
    ],
  },
  {
    kind: "theory",
    question: "Homology means similarity due to:",
    options: ["Shared ancestry", "Identical function", "Independent adaptation", "Equal branch length"],
    answer: 0,
    explanation: "Homology is similarity inherited from a common ancestor.",
    optionExplanations: [
      "Correct. Homologous structures or sequence positions derive from a single ancestral state.",
      "Same function is not enough; bird and insect wings both fly but are not homologous as wings.",
      "Independent adaptation describes convergence, a source of homoplasy.",
      "Branch length is unrelated to the definition of homology.",
    ],
  },
  {
    kind: "theory",
    question: "Which example is most clearly homoplasy?",
    options: ["Forelimb bones of humans, cats, whales and bats", "Echolocation in bats and whales", "A DNA site inherited from a common ancestor", "Mammalian hair inherited from the mammal ancestor"],
    answer: 1,
    explanation: "Echolocation evolved independently in bats and whales, producing similarity not directly due to shared ancestry of that trait.",
    optionExplanations: [
      "Those forelimbs are the classic homology example: different forms and functions, shared ancestral origin.",
      "Correct. Similar function evolved independently in separate lineages, so it is homoplasy.",
      "A state inherited from a common ancestor is homologous, not homoplastic.",
      "Mammalian hair is a shared derived trait of mammals, not a convergence example.",
    ],
  },
  {
    kind: "theory",
    question: "Why are molecular data especially useful in modern phylogenetics?",
    options: ["They are abundant, objective, scalable and standardized", "They never show homoplasy", "They remove the need for models", "They always evolve under selection"],
    answer: 0,
    explanation: "Sequences provide many discrete characters and can be analysed with reproducible computational workflows.",
    optionExplanations: [
      "Correct. These are the practical reasons molecular sequence data dominate many phylogenetic studies.",
      "Molecular data can show homoplasy, saturation and convergence; they are not automatically perfect.",
      "Molecular phylogenetics relies heavily on models of sequence evolution.",
      "For species relationships, neutral or nearly neutral changes are often especially useful; selection can mislead.",
    ],
  },
  {
    kind: "theory",
    question: "A shared ancestral trait used inside a more derived focal clade is called a:",
    options: ["Synapomorphy", "Autapomorphy", "Symplesiomorphy", "Molecular clock"],
    answer: 2,
    explanation: "A symplesiomorphy is a shared ancestral trait and may be misleading for identifying close relationships within the focal group.",
    optionExplanations: [
      "A synapomorphy is shared and derived; it defines clades.",
      "An autapomorphy is derived but unique to one taxon.",
      "Correct. Shared ancestral states can group taxa by old similarities rather than recent common ancestry.",
      "The molecular clock is a hypothesis about rate over time, not a character type.",
    ],
  },
  {
    kind: "theory",
    question: "What does genetic distance between two present-day species conceptually represent?",
    options: ["The sum of changes accumulated along both lineages since their common ancestor", "Only the number of living descendants", "The physical distance between populations", "The vertical order of tips in a tree"],
    answer: 0,
    explanation: "Differences between present sequences are interpreted as changes that happened along the two descendant paths from their common ancestor.",
    optionExplanations: [
      "Correct. This is the conceptual jump from observed sequence differences to evolutionary distance.",
      "The number of descendants is unrelated to pairwise genetic distance.",
      "Geographic distance can influence evolution, but it is not what genetic distance means here.",
      "Tip order in a drawing does not define distance or relatedness.",
    ],
  },
  {
    kind: "theory",
    question: "The molecular clock hypothesis says that molecular changes:",
    options: ["Can sometimes accumulate at an approximately constant rate", "Always accumulate perfectly at the same rate", "Never help estimate time", "Only occur under positive selection"],
    answer: 0,
    explanation: "The professor emphasizes the clock as useful in some cases but not a perfect universal law.",
    optionExplanations: [
      "Correct. The clock can be a reasonable approximation, especially with calibration and appropriate data.",
      "Mutation rates vary among genes, genomes and lineages, so a perfect clock is unrealistic.",
      "Molecular clocks are used precisely because they can help approximate divergence times.",
      "Neutral and nearly neutral changes are central to the clock idea; not only positively selected changes matter.",
    ],
  },
  {
    kind: "theory",
    question: "Why are neutral or nearly neutral mutations useful for reconstructing species relationships?",
    options: ["They can accumulate through drift and track divergence history", "They always improve fitness", "They erase all homoplasy", "They make all genes evolve identically"],
    answer: 0,
    explanation: "Neutral changes are less directly shaped by adaptation, so their accumulation can carry historical signal about descent.",
    optionExplanations: [
      "Correct. Neutral variation can accumulate over time and help reconstruct the branching history of species.",
      "Neutral mutations do not necessarily improve fitness; that is the point of calling them neutral.",
      "Neutral data can still suffer from multiple hits, saturation or other issues.",
      "Genes and lineages can evolve at different rates even when much change is neutral.",
    ],
  },
  {
    kind: "theory",
    question: "Why can selection be problematic for inferring a species tree from molecular data?",
    options: ["It can make unrelated lineages converge on similar molecular states", "It guarantees all sites are homologous", "It makes all mutation rates zero", "It turns sequences into morphology"],
    answer: 0,
    explanation: "Selection can create convergence or rate differences, causing the inferred tree to reflect adaptation rather than species history.",
    optionExplanations: [
      "Correct. Similar selective pressures can produce similar states independently, creating misleading signal.",
      "Homology is about common ancestry of positions or structures, not guaranteed by selection.",
      "Selection changes fixation probabilities; it does not make mutation rates zero.",
      "Sequences remain molecular data, but selection can alter how their variation behaves.",
    ],
  },
  {
    kind: "practical",
    question: "In the sequences practical, why do we treat each aligned sequence position as a potential character?",
    options: ["Because each site can hold a state that differs among taxa", "Because all sites always have the same state", "Because sites are tree branches", "Because alignment removes all evolutionary history"],
    answer: 0,
    explanation: "Sequence-based phylogenetics treats aligned positions as comparable characters whose states may contain signal.",
    optionExplanations: [
      "Correct. A site can be A, C, G, T or another state, and variation among taxa can be used for inference.",
      "Invariant sites are possible, but they are not the reason sites are treated as characters.",
      "Sites are columns in an alignment, not branches in a tree.",
      "Alignment is meant to make positions comparable, not to erase their evolutionary history.",
    ],
  },
  {
    kind: "practical",
    question: "If two aligned DNA sequences differ at 5 out of 100 positions, the simplest observed distance is:",
    options: ["0.05", "5.0", "95", "The number of taxa"],
    answer: 0,
    explanation: "Observed p-distance is the proportion of sites that differ: 5/100 = 0.05.",
    optionExplanations: [
      "Correct. The observed proportion of different sites is 0.05.",
      "5 is the count of differences, not the proportion unless the alignment has length 1.",
      "95 is the number of identical positions, not the distance.",
      "The number of taxa is unrelated to pairwise distance between two sequences.",
    ],
  },
  {
    kind: "practical",
    question: "Why is an observed distance often an underestimate of the true number of substitutions?",
    options: ["Multiple substitutions can happen at the same site", "The alignment always creates fake differences", "DNA has no repeated states", "The root changes the sequence length"],
    answer: 0,
    explanation: "A site can change more than once, but the final observed state may record only one visible difference or none at all.",
    optionExplanations: [
      "Correct. Multiple hits make the observed difference count smaller than the actual number of events.",
      "Alignments can be wrong, but underestimation here refers to hidden multiple substitutions at sites.",
      "DNA has only four states, which actually makes repeated or back substitutions possible.",
      "Rooting affects tree direction, not the observed sequence length in this calculation.",
    ],
  },
  {
    kind: "practical",
    question: "In a practical comparison of sequences, which change would most directly increase pairwise distance?",
    options: ["A mismatch between homologous aligned positions", "Rotating a node in a tree drawing", "Changing the colour of a tip", "Renaming a sequence without changing it"],
    answer: 0,
    explanation: "Pairwise sequence distance is based on differences between comparable aligned positions.",
    optionExplanations: [
      "Correct. A mismatch at an aligned homologous site contributes to observed distance.",
      "Rotating a node changes a tree drawing, not the underlying sequence comparison.",
      "Tip colour is visual annotation and has no effect on molecular distance.",
      "Renaming a sequence changes the label, not the character states.",
    ],
  },
  {
    kind: "practical",
    question: "Why does the practical focus on sequences before tree inference?",
    options: ["Because sequence states are the raw evidence from which distances and models are built", "Because trees are not needed in phylogenetics", "Because every sequence automatically gives the correct species tree", "Because molecular clocks work perfectly"],
    answer: 0,
    explanation: "Before choosing algorithms or models, you need to understand what sequence data represent and how differences are interpreted.",
    optionExplanations: [
      "Correct. Sequences provide the characters that later become distances, likelihoods, and phylogenetic signal.",
      "Trees are central, but the tree is inferred from data; it is not the starting evidence itself.",
      "A single sequence or gene can mislead due to homoplasy, selection, rate variation or limited signal.",
      "Molecular clocks are approximations, not perfect assumptions guaranteed by sequence data.",
    ],
  },
];

function translateQuizEs(q) {
  const map = {
    "Which statement best describes what a phylogenetic character is?": "¿Qué frase describe mejor qué es un carácter filogenético?",
    "Which combination best describes an ideal character for phylogenetic analysis?": "¿Qué combinación describe mejor un carácter ideal para análisis filogenético?",
    "Homology means similarity due to:": "Homología significa similitud debida a:",
    "Which example is most clearly homoplasy?": "¿Qué ejemplo es más claramente homoplasia?",
    "Why are molecular data especially useful in modern phylogenetics?": "¿Por qué los datos moleculares son especialmente útiles en la filogenética moderna?",
    "A shared ancestral trait used inside a more derived focal clade is called a:": "Un rasgo ancestral compartido usado dentro de un clado focal más derivado se llama:",
    "What does genetic distance between two present-day species conceptually represent?": "¿Qué representa conceptualmente la distancia genética entre dos especies actuales?",
    "The molecular clock hypothesis says that molecular changes:": "La hipótesis del reloj molecular dice que los cambios moleculares:",
    "Why are neutral or nearly neutral mutations useful for reconstructing species relationships?": "¿Por qué las mutaciones neutrales o casi neutrales son útiles para reconstruir relaciones entre especies?",
    "Why can selection be problematic for inferring a species tree from molecular data?": "¿Por qué la selección puede ser problemática para inferir un árbol de especies a partir de datos moleculares?",
    "In the sequences practical, why do we treat each aligned sequence position as a potential character?": "En la práctica de secuencias, ¿por qué tratamos cada posición alineada como un carácter potencial?",
    "If two aligned DNA sequences differ at 5 out of 100 positions, the simplest observed distance is:": "Si dos secuencias de DNA alineadas difieren en 5 de 100 posiciones, la distancia observada más simple es:",
    "Why is an observed distance often an underestimate of the true number of substitutions?": "¿Por qué la distancia observada suele subestimar el número real de sustituciones?",
    "In a practical comparison of sequences, which change would most directly increase pairwise distance?": "En una comparación práctica de secuencias, ¿qué cambio aumentaría más directamente la distancia por pares?",
    "Why does the practical focus on sequences before tree inference?": "¿Por qué la práctica se enfoca en secuencias antes de inferir árboles?",
  };
  return q.map(item => ({ ...item, question: map[item.question] || item.question }));
}

export const lesson03Quiz = {
  en: enQuiz,
  es: translateQuizEs(enQuiz),
  fa: enQuiz,
};

export default MolecularPhylogeneticsLesson;

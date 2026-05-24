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
  en: {
    eyebrow: "Lesson 05 · Sequence alignment and filtering",
    title: "From orthologous genes to homologous sites",
    subtitle: "Alignment is the step where comparable genes become comparable positions.",
    big: "Orthology inference tells us which genes can be compared. Alignment tells us which residues or nucleotides inside those genes can be compared. This lesson is about that second level of homology: site homology, gaps, scoring, global/local alignment, multiple sequence alignment, and filtering unreliable regions before phylogenetic inference.",
    tags: ["orthogroups", "homologous sites", "gaps", "gap penalties", "MAFFT", "Gblocks", "filtering"],
    flow: ["orthogroups", "alignment", "site homology", "scoring", "filtering", "tree-ready data"],
    emphasisTitle: "What the professor emphasized",
    emphasis: [
      ["Orthology is not the end", "After finding comparable genes, you still need to identify comparable sites. The professor repeatedly framed this as: same gene first, same position second."],
      ["Alignment is a hypothesis", "The true evolutionary history of substitutions, insertions and deletions is hidden. An alignment is an inferred arrangement of characters and gaps that tries to reconstruct positional homology."],
      ["Gap penalties matter", "A gap is not just a blank. The scoring system decides how costly it is to open and extend gaps, so changing gap-opening penalties can visibly change the alignment."],
      ["Filtering is part of inference", "Poorly aligned regions may not contain reliable homology. Tools such as Gblocks remove ambiguous blocks so downstream trees rely on more trustworthy columns."],
    ],
    sections: [
      {
        title: "1. The bridge: orthogroups → homologous sites",
        body: [
          "Lesson 04 ended with orthogroups: groups of homologous genes descended from one gene in the last common ancestor of the studied species. Lesson 05 asks the next question: once we have those genes, which exact positions inside them should be compared?",
          "A phylogenetic alignment is not just a nice visual arrangement. Ideally, every column contains nucleotides or amino acids that descend from the same ancestral position. That is why the slide says: orthologous genes, homologous sites.",
        ],
        note: "Exam translation: do not answer that alignment simply maximizes percent identity. The goal is positional homology."
      },
      {
        title: "2. Sequences evolve on a tree",
        body: [
          "The lecture uses a toy ancestral sequence, ACGTACGT, and lets substitutions, insertions and deletions accumulate along different branches. At the present, we only observe the final sequences, not the true historical path that generated them.",
          "This matters because two alignments may both look plausible, but only one may better reflect the historical sequence of events. The alignment problem exists because insertions and deletions obscure which present-day characters correspond to the same ancestral character."
        ],
        note: "A mismatch represents different states placed in the same column; a gap represents an inferred insertion/deletion relative to other sequences."
      },
      {
        title: "3. Gaps, mismatches and alignment scores",
        body: [
          "To choose between alternative alignments, algorithms use a scoring scheme. Matches are rewarded, mismatches are penalized and gaps are penalized. The best alignment is the one with the best score under the chosen rules—not necessarily the one that looks prettiest by eye.",
          "The class distinguishes linear and affine gap costs. A linear cost charges the same cost for every gap position. An affine cost charges a higher cost to open a gap and a lower cost to extend it, which is often more biologically plausible because one long indel may be more likely than many independent short indels."
        ],
        note: "Typical exam trap: affine gap penalty = high opening cost + lower extension cost."
      },
      {
        title: "4. Global, local and multiple sequence alignment",
        body: [
          "Pairwise alignment compares two sequences. Needleman–Wunsch is global: it aligns complete sequences end-to-end and is appropriate when the sequences are expected to be homologous across their whole length. Smith–Waterman is local: it finds the best matching region and is useful for domains, motifs or BLAST-like similarity searches.",
          "Multiple sequence alignment extends the problem to many sequences. A common progressive strategy computes pairwise distances, builds a guide tree, aligns the closest sequences first and then aligns sequences or profiles step by step. MAFFT is the practical tool used for this part of the workflow."
        ],
        note: "The professor contrasted the earlier BLAST/RBH-style local search with the global alignment needed for phylogenetic site comparisons."
      },
      {
        title: "5. Distance after alignment",
        body: [
          "Once sequences are aligned, distance can be defined. Hamming distance simply counts substitutions or mismatches and ignores gaps. Pairwise distance is broader because it can include substitutions, insertions and deletions.",
          "The lesson also previews model-corrected distances such as Jukes–Cantor, Kimura 2-parameter, Tamura–Nei, HKY and GTR. Those are developed later, but the conceptual move already appears here: observed differences are not automatically equal to evolutionary distance."
        ],
        note: "Keep separate: observed differences, pairwise distances, and model-corrected evolutionary distances."
      },
      {
        title: "6. Filtering: keeping the tree-ready part",
        body: [
          "Not every region of an alignment is reliable. Some regions may be impossible to align confidently, may have too many gaps, or may not preserve recognizable homology across all taxa. Including those regions can add noise or systematic error to the tree.",
          "Filtering tools such as Gblocks, Aliscore and BMGE remove poorly aligned regions. In the practical, Gblocks is used to detect conserved blocks and produce a trimmed alignment; the HTML output helps inspect how many positions were retained or removed."
        ],
        note: "More characters are not automatically better. Badly aligned characters can make the analysis worse."
      },
    ],
    practicalTitle: "Practical connection",
    practical: [
      ["Input", "Single-copy orthogroups from the OrthoFinder output are used as sequence sets to align."],
      ["Alignment", "MAFFT is used to produce multiple sequence alignments, and gap-opening penalties can be changed to see how the alignment reacts."],
      ["Inspection", "AliView or similar viewers make it possible to visually identify well-aligned cores, outlier sequences and gap-rich stretches."],
      ["Filtering", "Gblocks trims alignments by retaining conserved blocks and removing regions considered too noisy for phylogenetic inference."],
    ],
    takeawayTitle: "Take-home logic",
    takeaways: [
      "Orthology inference gives comparable genes; alignment gives comparable sites.",
      "Gaps are inferred evolutionary events, not just empty cells.",
      "Scoring choices change the alignment, especially gap-opening and extension penalties.",
      "Global alignment is for full-length homologous sequences; local alignment finds matching regions.",
      "Filtering removes regions where homology is uncertain before tree inference."
    ],
    checklistTitle: "Before moving on",
    checklist: [
      "I can explain why orthologous genes still need alignment.",
      "I can define homologous sites in an alignment.",
      "I can distinguish match, mismatch and gap.",
      "I can explain linear vs affine gap penalties.",
      "I can distinguish Needleman–Wunsch from Smith–Waterman.",
      "I can explain why and how Gblocks-style filtering is used."
    ]
  },
  es: {
    eyebrow: "Lección 05 · Alineamiento y filtrado de secuencias",
    title: "De genes ortólogos a sitios homólogos",
    subtitle: "El alineamiento es el paso donde genes comparables se convierten en posiciones comparables.",
    big: "La inferencia de ortología nos dice qué genes podemos comparar. El alineamiento nos dice qué residuos o nucleótidos dentro de esos genes podemos comparar. Esta clase trata ese segundo nivel de homología: homología de sitios, gaps, puntuación de alineamientos, alineamiento global/local, alineamiento múltiple y filtrado de regiones poco confiables antes de inferir árboles.",
    tags: ["orthogroups", "sitios homólogos", "gaps", "penalización de gaps", "MAFFT", "Gblocks", "filtrado"],
    flow: ["orthogroups", "alineamiento", "homología de sitios", "puntuación", "filtrado", "datos listos para árboles"],
    emphasisTitle: "Lo que el profe remarcó",
    emphasis: [
      ["La ortología no es el final", "Después de encontrar genes comparables, todavía hay que identificar sitios comparables. El profesor lo resumió muchas veces como: primero el mismo gen, después la misma posición."],
      ["El alineamiento es una hipótesis", "La historia real de sustituciones, inserciones y deleciones está oculta. Un alineamiento es una inferencia sobre cómo colocar caracteres y gaps para reconstruir homología posicional."],
      ["Las penalizaciones de gaps importan", "Un gap no es solo un espacio vacío. El sistema de puntuación decide cuánto cuesta abrir y extender gaps, así que cambiar la penalización de apertura puede cambiar mucho el alineamiento."],
      ["Filtrar también es inferir", "Las regiones mal alineadas pueden no contener homología confiable. Herramientas como Gblocks eliminan bloques ambiguos para que los árboles usen columnas más confiables."],
    ],
    sections: [
      {
        title: "1. El puente: orthogroups → sitios homólogos",
        body: [
          "La Lección 04 terminó con orthogroups: grupos de genes homólogos que descienden de un único gen en el ancestro común de las especies estudiadas. La Lección 05 pregunta lo siguiente: una vez que tenemos esos genes, ¿qué posiciones exactas dentro de ellos se pueden comparar?",
          "Un alineamiento filogenético no es solo una forma bonita de ordenar secuencias. Idealmente, cada columna contiene nucleótidos o aminoácidos que descienden de la misma posición ancestral. Por eso la slide insiste en: genes ortólogos, sitios homólogos."
        ],
        note: "Trampa de examen: no digas que alinear es simplemente maximizar identidad porcentual. El objetivo es homología posicional."
      },
      {
        title: "2. Las secuencias evolucionan sobre un árbol",
        body: [
          "La clase usa una secuencia ancestral sencilla, ACGTACGT, y deja que sustituciones, inserciones y deleciones se acumulen en diferentes ramas. En el presente solo observamos las secuencias finales, no el camino histórico real que las generó.",
          "Esto importa porque dos alineamientos pueden parecer plausibles, pero solo uno puede reflejar mejor la historia. El problema del alineamiento existe porque las inserciones y deleciones oscurecen qué caracteres actuales corresponden al mismo carácter ancestral."
        ],
        note: "Un mismatch es una diferencia colocada en la misma columna; un gap representa una inserción/deleción inferida respecto a otras secuencias."
      },
      {
        title: "3. Gaps, mismatches y puntuación del alineamiento",
        body: [
          "Para elegir entre alineamientos alternativos, los algoritmos usan un sistema de puntuación. Los matches reciben recompensa, los mismatches penalización y los gaps penalización. El mejor alineamiento es el que obtiene mejor puntaje bajo esas reglas, no necesariamente el que se ve más bonito.",
          "La clase distingue costos lineales y afines para gaps. Un costo lineal cobra lo mismo por cada posición de gap. Un costo afín cobra más por abrir un gap y menos por extenderlo, lo cual suele ser más biológicamente razonable porque un indel largo puede ser más plausible que muchos indels cortos independientes."
        ],
        note: "Trampa típica: gap penalty afín = alto costo de apertura + menor costo de extensión."
      },
      {
        title: "4. Alineamiento global, local y múltiple",
        body: [
          "El alineamiento pareado compara dos secuencias. Needleman–Wunsch es global: alinea secuencias completas de extremo a extremo, útil cuando se espera homología en toda la longitud. Smith–Waterman es local: encuentra la mejor región coincidente, útil para dominios, motivos o búsquedas tipo BLAST.",
          "El alineamiento múltiple extiende el problema a muchas secuencias. Una estrategia progresiva calcula distancias pareadas, construye un guide tree, alinea primero las secuencias más cercanas y luego añade secuencias o perfiles paso a paso. En la práctica, MAFFT es la herramienta usada para esta parte."
        ],
        note: "El profesor contrastó las búsquedas locales tipo BLAST/RBH con el alineamiento global necesario para comparar sitios filogenéticos."
      },
      {
        title: "5. Distancia después del alineamiento",
        body: [
          "Una vez que las secuencias están alineadas, se puede definir distancia. La distancia de Hamming cuenta sustituciones o mismatches e ignora gaps. La distancia pareada es más general porque puede incluir sustituciones, inserciones y deleciones.",
          "La clase también anticipa distancias corregidas por modelos como Jukes–Cantor, Kimura 2-parameter, Tamura–Nei, HKY y GTR. Se desarrollan después, pero la idea ya aparece aquí: diferencias observadas no equivalen automáticamente a distancia evolutiva."
        ],
        note: "Mantén separadas tres ideas: diferencias observadas, distancias pareadas y distancias evolutivas corregidas por modelo."
      },
      {
        title: "6. Filtrado: conservar la parte útil para árboles",
        body: [
          "No toda región de un alineamiento es confiable. Algunas regiones pueden ser imposibles de alinear con seguridad, tener demasiados gaps o no conservar homología reconocible entre todos los taxa. Incluirlas puede añadir ruido o sesgo al árbol.",
          "Herramientas como Gblocks, Aliscore y BMGE eliminan regiones mal alineadas. En la práctica se usa Gblocks para detectar bloques conservados y producir un alineamiento filtrado; el output HTML ayuda a revisar cuántas posiciones se conservaron o eliminaron."
        ],
        note: "Más caracteres no siempre es mejor. Caracteres mal alineados pueden empeorar el análisis."
      },
    ],
    practicalTitle: "Conexión práctica",
    practical: [
      ["Input", "Se usan orthogroups de copia única del output de OrthoFinder como conjuntos de secuencias para alinear."],
      ["Alineamiento", "MAFFT genera alineamientos múltiples, y se modifican penalizaciones de apertura de gaps para observar cómo cambia el resultado."],
      ["Inspección", "AliView u otros visores permiten identificar núcleos bien alineados, secuencias outlier y regiones ricas en gaps."],
      ["Filtrado", "Gblocks recorta alineamientos conservando bloques confiables y eliminando regiones demasiado ruidosas para inferencia filogenética."],
    ],
    takeawayTitle: "Lógica principal",
    takeaways: [
      "La inferencia de ortología da genes comparables; el alineamiento da sitios comparables.",
      "Los gaps son eventos evolutivos inferidos, no celdas vacías sin significado.",
      "Las reglas de puntuación cambian el alineamiento, especialmente apertura y extensión de gaps.",
      "El alineamiento global sirve para secuencias homólogas completas; el local encuentra regiones coincidentes.",
      "El filtrado elimina regiones donde la homología es incierta antes de inferir el árbol."
    ],
    checklistTitle: "Antes de seguir",
    checklist: [
      "Puedo explicar por qué genes ortólogos todavía necesitan alineamiento.",
      "Puedo definir sitios homólogos en un alineamiento.",
      "Puedo distinguir match, mismatch y gap.",
      "Puedo explicar penalización lineal vs afín de gaps.",
      "Puedo distinguir Needleman–Wunsch de Smith–Waterman.",
      "Puedo explicar por qué se usa filtrado tipo Gblocks."
    ]
  },
  fa: {
    eyebrow: "درس 05 · هم‌ترازسازی و فیلتر کردن توالی‌ها",
    title: "از ژن‌های ارتولوگ تا جایگاه‌های همولوگ",
    subtitle: "هم‌ترازسازی مرحله‌ای است که ژن‌های قابل‌مقایسه را به موقعیت‌های قابل‌مقایسه تبدیل می‌کند.",
    big: "استنباط ارتولوژی می‌گوید کدام ژن‌ها قابل مقایسه‌اند؛ هم‌ترازسازی می‌گوید کدام نوکلئوتیدها یا آمینواسیدهای درون آن ژن‌ها قابل مقایسه‌اند. این درس دربارهٔ همولوژی جایگاهی، گپ‌ها، امتیازدهی، هم‌ترازسازی سراسری/محلی، هم‌ترازسازی چندگانه و فیلتر کردن نواحی نامطمئن است.",
    tags: ["ارتوگروه‌ها", "جایگاه‌های همولوگ", "گپ", "امتیاز گپ", "MAFFT", "Gblocks", "فیلتر"],
    flow: ["ارتوگروه", "هم‌ترازسازی", "همولوژی جایگاهی", "امتیازدهی", "فیلتر", "دادهٔ آمادهٔ درخت"],
    emphasisTitle: "نکته‌هایی که استاد تأکید کرد",
    emphasis: [
      ["ارتولوژی پایان کار نیست", "بعد از پیدا کردن ژن‌های قابل مقایسه، باید جایگاه‌های قابل مقایسه را هم پیدا کرد: ابتدا همان ژن، سپس همان موقعیت."],
      ["هم‌ترازسازی یک فرضیه است", "تاریخ واقعی جهش‌ها، درج‌ها و حذف‌ها پنهان است؛ هم‌ترازسازی یک بازسازی استنباطی از این تاریخ است."],
      ["جریمهٔ گپ مهم است", "گپ فقط فضای خالی نیست. هزینهٔ باز کردن و ادامه دادن گپ می‌تواند نتیجهٔ هم‌ترازسازی را تغییر دهد."],
      ["فیلتر کردن بخشی از استنباط است", "نواحی بدهم‌تراز ممکن است همولوژی قابل اعتماد نداشته باشند؛ ابزارهایی مانند Gblocks این بخش‌ها را حذف می‌کنند."],
    ],
    sections: [
      {
        title: "1. پل اصلی: ارتوگروه‌ها → جایگاه‌های همولوگ",
        body: [
          "ارتوگروه‌ها ژن‌هایی را مشخص می‌کنند که در سطح ژن قابل مقایسه‌اند. اما برای فیلوژنتیک، باید بدانیم کدام موقعیت‌ها درون این ژن‌ها از یک موقعیت اجدادی مشترک آمده‌اند.",
          "هدف هم‌ترازسازی این است که هر ستون تا حد ممکن شامل کاراکترهایی باشد که تاریخ تکاملی مشترک دارند."
        ],
        note: "در امتحان: هم‌ترازسازی فقط بیشینه کردن درصد شباهت نیست؛ هدف اصلی همولوژی جایگاهی است."
      },
      {
        title: "2. توالی‌ها روی درخت تکامل می‌یابند",
        body: [
          "در کلاس از یک توالی اجدادی ساده استفاده شد و سپس جایگزینی‌ها، درج‌ها و حذف‌ها روی شاخه‌های مختلف رخ دادند. در زمان حال فقط توالی‌های نهایی را می‌بینیم.",
          "به همین دلیل چند هم‌ترازسازی ممکن است ظاهراً خوب باشند، اما فقط برخی از آن‌ها تاریخ جایگاه‌ها را بهتر بازتاب می‌دهند."
        ],
        note: "mismatch یعنی حالت‌های متفاوت در یک ستون؛ gap یعنی درج/حذف استنباط‌شده نسبت به توالی‌های دیگر."
      },
      {
        title: "3. گپ، mismatch و امتیازدهی",
        body: [
          "الگوریتم‌ها برای انتخاب بین هم‌ترازسازی‌های مختلف از سیستم امتیازدهی استفاده می‌کنند: match امتیاز مثبت دارد، mismatch و gap جریمه دارند.",
          "هزینهٔ خطی برای هر موقعیت گپ یکسان است؛ هزینهٔ affine برای باز کردن گپ زیاد و برای ادامه دادن آن کمتر است."
        ],
        note: "نکتهٔ امتحانی: affine gap penalty = هزینهٔ زیاد برای شروع گپ + هزینهٔ کمتر برای ادامهٔ گپ."
      },
      {
        title: "4. هم‌ترازسازی سراسری، محلی و چندگانه",
        body: [
          "Needleman–Wunsch یک روش سراسری است و کل توالی‌ها را از ابتدا تا انتها هم‌تراز می‌کند. Smith–Waterman محلی است و بهترین ناحیهٔ مشابه را پیدا می‌کند.",
          "در هم‌ترازسازی چندگانه معمولاً ابتدا فاصله‌های جفتی محاسبه می‌شوند، سپس guide tree ساخته می‌شود و توالی‌ها/پروفایل‌ها به‌صورت تدریجی هم‌تراز می‌شوند."
        ],
        note: "BLAST/RBH بیشتر محلی است؛ برای مقایسهٔ جایگاه‌ها در فیلوژنتیک، هم‌ترازسازی سراسری اهمیت دارد."
      },
      {
        title: "5. فاصله پس از هم‌ترازسازی",
        body: [
          "بعد از هم‌ترازسازی می‌توان فاصله را تعریف کرد. Hamming distance فقط mismatchها را می‌شمارد و گپ‌ها را نادیده می‌گیرد؛ pairwise distance می‌تواند درج و حذف را هم در نظر بگیرد.",
          "درس همچنین مدل‌های اصلاح‌کنندهٔ فاصله مانند JC، K80، HKY و GTR را معرفی می‌کند که بعداً بیشتر بررسی می‌شوند."
        ],
        note: "تفاوت مشاهده‌شده همیشه همان فاصلهٔ تکاملی واقعی نیست."
      },
      {
        title: "6. فیلتر کردن برای دادهٔ قابل اعتمادتر",
        body: [
          "همهٔ بخش‌های یک هم‌ترازسازی قابل اعتماد نیستند. نواحی بسیار پرگپ یا مبهم می‌توانند نویز و سوگیری وارد تحلیل کنند.",
          "ابزارهایی مانند Gblocks، Aliscore و BMGE نواحی بدهم‌تراز را حذف می‌کنند تا درخت بر پایهٔ ستون‌های قابل اعتمادتر ساخته شود."
        ],
        note: "دادهٔ بیشتر همیشه بهتر نیست؛ ستون‌های بد می‌توانند نتیجه را بدتر کنند."
      },
    ],
    practicalTitle: "ارتباط با تمرین عملی",
    practical: [
      ["ورودی", "ارتوگروه‌های تک‌کپی خروجی OrthoFinder برای هم‌ترازسازی استفاده می‌شوند."],
      ["هم‌ترازسازی", "MAFFT برای ساخت MSA استفاده می‌شود و تغییر gap opening penalty اثر خود را نشان می‌دهد."],
      ["بازبینی", "نمایشگرهایی مانند AliView برای دیدن نواحی خوب، outlierها و نواحی پرگپ مفیدند."],
      ["فیلتر", "Gblocks بلوک‌های محافظت‌شده را نگه می‌دارد و بخش‌های پرنویز را حذف می‌کند."],
    ],
    takeawayTitle: "منطق اصلی",
    takeaways: [
      "ارتولوژی ژن‌های قابل مقایسه می‌دهد؛ هم‌ترازسازی جایگاه‌های قابل مقایسه می‌دهد.",
      "گپ‌ها رویدادهای تکاملی استنباط‌شده‌اند.",
      "انتخاب امتیازدهی، مخصوصاً جریمهٔ گپ، هم‌ترازسازی را تغییر می‌دهد.",
      "هم‌ترازسازی سراسری برای کل توالی و محلی برای نواحی مشابه است.",
      "فیلتر کردن نواحی نامطمئن قبل از ساخت درخت مهم است."
    ],
    checklistTitle: "پیش از ادامه",
    checklist: [
      "می‌توانم توضیح دهم چرا ژن‌های ارتولوگ هنوز نیاز به هم‌ترازسازی دارند.",
      "می‌توانم جایگاه همولوگ را تعریف کنم.",
      "می‌توانم match، mismatch و gap را جدا کنم.",
      "می‌توانم gap penalty خطی و affine را توضیح دهم.",
      "می‌توانم Needleman–Wunsch و Smith–Waterman را مقایسه کنم.",
      "می‌توانم دلیل فیلتر کردن با Gblocks را توضیح دهم."
    ]
  }
};

function Card({ title, children, tone = "stone" }) {
  return (
    <article className={`rounded-[2rem] border p-5 shadow-sm ${toneClasses[tone] || toneClasses.stone}`}>
      <h3 className="text-lg font-black tracking-tight">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 opacity-85">{children}</p>
    </article>
  );
}

function Flow({ items }) {
  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {items.map((item, index) => (
        <div key={item} className="relative rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-950 text-xs font-black text-white">{index + 1}</div>
          <div className="text-sm font-black leading-5 text-stone-800">{item}</div>
          {index < items.length - 1 && <div className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-red-300 xl:block" />}
        </div>
      ))}
    </div>
  );
}

function AlignmentMiniLab() {
  const rows = [
    ["species 1", "AGGATCTGCAATTGCTCTTCTAATCTGTCTGATCAGGAT"],
    ["species 2", "AGG------AATTGCTCTTCTAATCTGTCT---CAGGAT"],
    ["species 3", "AGGATCTGCAATTGC---TCTAATCTGTCTGATCAGGAT"],
    ["species 4", "AGAATCTGCAATTGCTCTTCTGATCTGTCTGATCACGAT"],
    ["species 5", "AGGATCTGC---TGCTCTTCTGATCTGTCTGATCAGGAT"],
  ];
  return (
    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-stone-950 p-5 text-white shadow-sm md:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">visual anchor</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Orthologous genes, homologous sites</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-stone-300">
            The biologically meaningful unit for tree inference is not just the gene. It is the column: a position where the residues should trace back to the same ancestral site.
          </p>
        </div>
        <div className="overflow-x-auto rounded-[1.6rem] border border-white/10 bg-white/5 p-4 font-mono text-[11px] leading-6 text-stone-100">
          {rows.map(([name, seq]) => (
            <div key={name} className="grid min-w-[640px] grid-cols-[92px_1fr] gap-3">
              <span className="text-red-200">{name}</span>
              <span>{seq}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GapPenaltyPanel({ lang }) {
  const isEs = lang === "es";
  const isFa = lang === "fa";
  const title = isEs ? "Cómo el algoritmo decide" : isFa ? "الگوریتم چگونه تصمیم می‌گیرد؟" : "How the algorithm decides";
  const linear = isEs ? "Costo lineal" : isFa ? "هزینهٔ خطی" : "Linear cost";
  const affine = isEs ? "Costo afín" : isFa ? "هزینهٔ affine" : "Affine cost";
  const body = isEs
    ? "La elección de penalizaciones cambia qué alineamiento gana. Abrir muchos gaps pequeños suele ser más costoso que extender un gap ya abierto."
    : isFa
      ? "انتخاب جریمه‌ها تعیین می‌کند کدام هم‌ترازسازی بهتر امتیاز می‌گیرد. معمولاً باز کردن چند گپ کوچک پرهزینه‌تر از ادامه دادن یک گپ است."
      : "Penalty choices decide which alignment wins. Opening many small gaps is often more costly than extending one already-opened gap.";
  return (
    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">gap penalties</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{title}</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-stone-600">{body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-5">
            <div className="text-sm font-black text-amber-900">{linear}</div>
            <div className="mt-3 rounded-2xl bg-white px-4 py-3 font-mono text-lg font-black text-stone-950">c = −d × g</div>
            <p className="mt-3 text-sm font-semibold leading-6 text-amber-900/80">Every position in the gap pays the same cost.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5">
            <div className="text-sm font-black text-emerald-900">{affine}</div>
            <div className="mt-3 rounded-2xl bg-white px-4 py-3 font-mono text-lg font-black text-stone-950">c = −d − (g−1)e</div>
            <p className="mt-3 text-sm font-semibold leading-6 text-emerald-900/80">Opening the gap is expensive; extending it is cheaper.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodCompare({ lang }) {
  const labels = lang === "es"
    ? ["Global", "Local", "Múltiple"]
    : lang === "fa"
      ? ["سراسری", "محلی", "چندگانه"]
      : ["Global", "Local", "Multiple"];
  const rows = [
    [labels[0], "Needleman–Wunsch", lang === "es" ? "Alinea secuencias completas de extremo a extremo." : lang === "fa" ? "کل توالی‌ها را از ابتدا تا انتها هم‌تراز می‌کند." : "Aligns complete sequences end-to-end."],
    [labels[1], "Smith–Waterman", lang === "es" ? "Encuentra regiones locales de alta similitud." : lang === "fa" ? "بهترین ناحیه‌های مشابه محلی را پیدا می‌کند." : "Finds local high-scoring similarity regions."],
    [labels[2], "MAFFT / MSA", lang === "es" ? "Alinea muchas secuencias usando perfiles y guide trees." : lang === "fa" ? "چندین توالی را با پروفایل‌ها و guide tree هم‌تراز می‌کند." : "Aligns many sequences using profiles and guide trees."],
  ];
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {rows.map(([kind, method, description]) => (
        <article key={kind} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-5 shadow-sm">
          <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-red-700 w-fit">{kind}</div>
          <h3 className="mt-4 text-2xl font-black text-stone-950">{method}</h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{description}</p>
        </article>
      ))}
    </section>
  );
}

function PracticalBridge({ copy }) {
  return (
    <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/90 p-6 shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">practical</div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.practicalTitle}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {copy.practical.map(([title, body], index) => (
          <article key={title} className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-700 text-sm font-black text-white">{index + 1}</div>
            <h3 className="text-lg font-black text-stone-950">{title}</h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-stone-600">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Takeaways({ copy }) {
  return (
    <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
      <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">summary</div>
      <h2 className="mt-2 text-3xl font-black">{copy.takeawayTitle}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {copy.takeaways.map((item) => (
          <div key={item} className="rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100">{item}</div>
        ))}
      </div>
    </section>
  );
}

const quizBase = {
  en: [
    {
      kind: "theory",
      question: "What is the main goal of sequence alignment in a phylogenetic workflow?",
      options: [
        "To maximize visual similarity between sequences regardless of history.",
        "To identify positions that are homologous across sequences.",
        "To infer posterior probabilities for branches.",
        "To replace orthology inference entirely."
      ],
      answer: 1,
      optionExplanations: [
        "Visual similarity can help inspection, but the biological goal is not aesthetics or raw identity alone.",
        "Correct. Alignment tries to place characters that descend from the same ancestral position in the same column.",
        "Posterior probabilities belong to Bayesian tree inference, not to the alignment step.",
        "Alignment follows orthology inference; it does not replace the gene-level comparison."
      ]
    },
    {
      kind: "theory",
      question: "Why are orthologous genes not sufficient by themselves for phylogenetic inference?",
      options: [
        "Because one must still identify homologous sites within those genes.",
        "Because orthologous genes cannot contain substitutions.",
        "Because orthologous genes are always non-coding.",
        "Because orthology only applies to morphological traits."
      ],
      answer: 0,
      optionExplanations: [
        "Correct. The gene may be comparable, but each column of the alignment must also represent a comparable ancestral position.",
        "Orthologous genes can certainly accumulate substitutions, insertions and deletions.",
        "Orthologous genes may be protein-coding or non-coding; the concept is about ancestry, not coding status.",
        "Orthology is a gene-level homology relationship, not a morphological-trait concept."
      ]
    },
    {
      kind: "theory",
      question: "In an alignment, a gap most directly represents:",
      options: [
        "A taxon that should be removed from the dataset.",
        "A branch with low support.",
        "An inferred insertion or deletion relative to other sequences.",
        "A site that must be phylogenetically informative."
      ],
      answer: 2,
      optionExplanations: [
        "A gap alone does not mean the entire taxon should be removed; it may reflect real indel history.",
        "Branch support is evaluated after tree inference, not encoded directly by a gap.",
        "Correct. A gap is a statement about an insertion/deletion hypothesis in the alignment.",
        "A gap does not automatically make a site informative; it may even mark an ambiguous region."
      ]
    },
    {
      kind: "theory",
      question: "Which statement correctly contrasts a linear and an affine gap penalty?",
      options: [
        "Linear penalties are used only for proteins; affine penalties only for DNA.",
        "Linear penalties charge one fixed cost per gap position, while affine penalties separate gap opening and extension costs.",
        "Affine penalties ignore the cost of opening a gap.",
        "Linear penalties always produce biologically correct alignments."
      ],
      answer: 1,
      optionExplanations: [
        "The distinction is mathematical, not DNA-versus-protein specific.",
        "Correct. Affine scoring makes gap opening expensive and extension cheaper.",
        "Affine penalties explicitly include gap opening cost; that is the key feature.",
        "No scoring scheme guarantees the true evolutionary alignment."
      ]
    },
    {
      kind: "theory",
      question: "Needleman–Wunsch is best described as:",
      options: [
        "A local alignment algorithm for isolated motifs only.",
        "A bootstrap support metric.",
        "A global pairwise alignment algorithm.",
        "A model of nucleotide substitution."
      ],
      answer: 2,
      optionExplanations: [
        "This describes Smith–Waterman more closely, not Needleman–Wunsch.",
        "Bootstrap is a support/resampling procedure, not an alignment algorithm.",
        "Correct. Needleman–Wunsch aligns complete sequences end-to-end.",
        "Substitution models such as JC69 or GTR describe change, not alignment."
      ]
    },
    {
      kind: "theory",
      question: "Smith–Waterman is especially useful when you want to:",
      options: [
        "Align complete homologous genes from start to finish.",
        "Find a high-scoring local region such as a motif or domain.",
        "Calculate an MCC tree.",
        "Estimate a strict molecular clock."
      ],
      answer: 1,
      optionExplanations: [
        "That is the goal of a global alignment, such as Needleman–Wunsch.",
        "Correct. Smith–Waterman performs local alignment.",
        "An MCC tree summarizes Bayesian posterior trees, not local alignment.",
        "Molecular clocks are part of dating analyses, not local alignment."
      ]
    },
    {
      kind: "theory",
      question: "Which description best matches multiple sequence alignment by a progressive strategy?",
      options: [
        "Randomly shuffle sequences until a visually pleasing alignment appears.",
        "Use pairwise comparisons, a guide tree and profile-to-profile or sequence-to-profile alignment.",
        "Compute a single posterior probability for each taxon.",
        "Discard all gaps before the alignment begins."
      ],
      answer: 1,
      optionExplanations: [
        "Progressive alignment is algorithmic, not random visual trial-and-error.",
        "Correct. Pairwise distances and guide trees help decide the order in which sequences/profiles are aligned.",
        "Posterior probabilities are not the object of multiple sequence alignment.",
        "Gaps are inserted during alignment; discarding them beforehand is not the progressive MSA strategy."
      ]
    },
    {
      kind: "theory",
      question: "Which statement about Hamming distance is correct in the context of this lesson?",
      options: [
        "It counts mismatches/substitutions and ignores gaps.",
        "It estimates posterior probabilities of clades.",
        "It models different transition and transversion rates.",
        "It is the same thing as an affine gap penalty."
      ],
      answer: 0,
      optionExplanations: [
        "Correct. Hamming distance is a simple count of differences and does not handle indels as pairwise distance can.",
        "Posterior probabilities belong to Bayesian inference.",
        "Different transition/transversion rates are handled by substitution models such as K80, not Hamming distance.",
        "Gap penalties score alignments; Hamming distance measures sequence differences."
      ]
    },
    {
      kind: "theory",
      question: "Why might poorly aligned regions be removed before tree inference?",
      options: [
        "Because they always contain no variation.",
        "Because they may lack reliable positional homology and add noise or bias.",
        "Because tree methods cannot accept any gaps at all.",
        "Because trimming is used to root the tree."
      ],
      answer: 1,
      optionExplanations: [
        "Poorly aligned regions may be highly variable; lack of variation is not the reason for trimming.",
        "Correct. If homology cannot be reconstructed confidently, those columns may mislead downstream inference.",
        "Some tree methods can handle gaps in different ways; the issue is reliability, not mere presence.",
        "Rooting is usually done with an outgroup or other rooting method, not by trimming."
      ]
    },
    {
      kind: "theory",
      question: "Which tool was highlighted for filtering conserved blocks in an alignment?",
      options: [
        "Gblocks",
        "ASTRAL",
        "MrBayes",
        "OrthoFinder"
      ],
      answer: 0,
      optionExplanations: [
        "Correct. Gblocks is used to retain conserved blocks and remove less reliable regions.",
        "ASTRAL is used for coalescent species tree inference from gene trees, not alignment filtering.",
        "MrBayes is a Bayesian phylogenetic inference program, not the filtering tool here.",
        "OrthoFinder infers orthogroups; it is upstream of alignment."
      ]
    },
    {
      kind: "practical",
      question: "In the Lesson 05 practical, why are single-copy orthogroups convenient inputs for alignment?",
      options: [
        "They avoid the need to compare sites.",
        "They are likely to contain one comparable sequence per species, reducing paralogy complications.",
        "They automatically produce rooted trees without alignment.",
        "They are always free of gaps and indels."
      ],
      answer: 1,
      optionExplanations: [
        "Even single-copy orthogroups still need site-level alignment.",
        "Correct. Single-copy orthogroups reduce confusion from paralogs and make the alignment step cleaner.",
        "A rooted tree is not produced automatically by choosing single-copy orthogroups.",
        "Single-copy orthogroups can still contain substitutions, insertions and deletions."
      ]
    },
    {
      kind: "practical",
      question: "What practical effect should you expect when increasing the gap-opening penalty in MAFFT-like alignment settings?",
      options: [
        "Opening new gaps becomes more costly, so the algorithm tends to introduce fewer separate gaps.",
        "All sequences become identical.",
        "The alignment is converted into a chronogram.",
        "Gblocks stops working because gap penalties are illegal."
      ],
      answer: 0,
      optionExplanations: [
        "Correct. A higher gap-opening penalty discourages many separate gap openings and can visibly change alignment length and structure.",
        "Changing gap penalties does not erase substitutions or make sequences identical.",
        "A chronogram is a time-scaled tree, not an alignment output.",
        "Filtering tools can still be used after alignments generated with different settings."
      ]
    },
    {
      kind: "practical",
      question: "What is the role of inspecting alignments visually in AliView or a similar viewer?",
      options: [
        "To manually assign Bayesian priors to every branch.",
        "To identify well-aligned cores, suspicious regions, outlier sequences and gap-rich blocks.",
        "To replace all automated alignment algorithms.",
        "To guarantee that every retained site is free from homoplasy."
      ],
      answer: 1,
      optionExplanations: [
        "Branch priors are part of Bayesian tree inference, not alignment inspection.",
        "Correct. Visual inspection helps sanity-check the alignment before filtering and tree inference.",
        "Inspection complements algorithms; it does not replace them for large datasets.",
        "Homoplasy can remain even in well-aligned sites; visual inspection does not eliminate it."
      ]
    },
    {
      kind: "practical",
      question: "In the Gblocks output, conserved blocks are important because they represent:",
      options: [
        "Regions that are more likely to be reliably aligned across the sampled sequences.",
        "Branches that have posterior probability above 0.95.",
        "Genes that arose by horizontal transfer.",
        "Taxa chosen as outgroups."
      ],
      answer: 0,
      optionExplanations: [
        "Correct. Gblocks aims to keep alignment blocks where positional homology is more trustworthy.",
        "Posterior probabilities are tree support values, not conserved alignment blocks.",
        "Gblocks does not diagnose horizontal transfer by itself.",
        "Outgroup choice is a sampling/rooting issue, not the meaning of a conserved block."
      ]
    },
    {
      kind: "practical",
      question: "Why did the professor contrast BLAST/RBH from the previous practical with the alignment in Lesson 05?",
      options: [
        "BLAST/RBH is mainly a local similarity search for finding candidate homologs, while Lesson 05 focuses on global site homology for phylogenetics.",
        "BLAST/RBH is a chronogram method, while MAFFT is a molecular clock model.",
        "BLAST/RBH removes all gaps, while MAFFT calculates posterior probabilities.",
        "There is no conceptual difference between them."
      ],
      answer: 0,
      optionExplanations: [
        "Correct. The earlier practical helped find comparable genes; this one aligns them to compare sites.",
        "Neither statement is correct: BLAST/RBH is not dating, and MAFFT is not a clock model.",
        "MAFFT aligns sequences; it does not calculate posterior probabilities.",
        "There is a major difference in purpose: finding homologs versus aligning positions."
      ]
    }
  ]
};

quizBase.es = [
  {
    kind: "theory",
    question: "¿Cuál es el objetivo principal del alineamiento de secuencias en un workflow filogenético?",
    options: ["Maximizar similitud visual sin considerar historia.", "Identificar posiciones homólogas entre secuencias.", "Inferir probabilidades posteriores de ramas.", "Reemplazar por completo la inferencia de ortología."],
    answer: 1,
    optionExplanations: ["La similitud visual puede ayudar, pero no es el objetivo biológico principal.", "Correcto. El alineamiento intenta colocar en la misma columna caracteres que descienden de la misma posición ancestral.", "Las probabilidades posteriores pertenecen a la inferencia bayesiana de árboles.", "El alineamiento viene después de la ortología; no la reemplaza."]
  },
  {
    kind: "theory",
    question: "¿Por qué los genes ortólogos no son suficientes por sí solos?",
    options: ["Porque todavía hay que identificar sitios homólogos dentro de esos genes.", "Porque no pueden contener sustituciones.", "Porque siempre son no codificantes.", "Porque la ortología solo aplica a morfología."],
    answer: 0,
    optionExplanations: ["Correcto. El gen puede ser comparable, pero cada columna también debe representar una posición ancestral comparable.", "Los genes ortólogos sí pueden acumular sustituciones, inserciones y deleciones.", "Pueden ser codificantes o no; la ortología habla de ancestralidad.", "La ortología es una relación de homología entre genes."]
  },
  {
    kind: "theory",
    question: "En un alineamiento, un gap representa más directamente:",
    options: ["Un taxón que debe eliminarse.", "Una rama con bajo soporte.", "Una inserción o deleción inferida respecto a otras secuencias.", "Un sitio necesariamente informativo."],
    answer: 2,
    optionExplanations: ["Un gap no implica eliminar todo el taxón.", "El soporte de ramas se evalúa después, en el árbol.", "Correcto. Un gap codifica una hipótesis de indel en el alineamiento.", "Un gap no hace automáticamente que un sitio sea informativo."]
  },
  {
    kind: "theory",
    question: "¿Qué contraste entre gap penalty lineal y afín es correcto?",
    options: ["Lineal solo para proteínas; afín solo para DNA.", "Lineal cobra un costo por posición; afín separa costo de apertura y extensión.", "Afín ignora el costo de abrir gaps.", "Lineal siempre produce el alineamiento verdadero."],
    answer: 1,
    optionExplanations: ["La diferencia es matemática, no depende de DNA/proteína.", "Correcto. En afín, abrir el gap cuesta más y extenderlo cuesta menos.", "La penalización afín incluye explícitamente costo de apertura.", "Ningún esquema garantiza la historia verdadera."]
  },
  {
    kind: "theory",
    question: "Needleman–Wunsch se describe mejor como:",
    options: ["Un algoritmo local para motivos aislados.", "Una métrica de soporte bootstrap.", "Un algoritmo global de alineamiento pareado.", "Un modelo de sustitución nucleotídica."],
    answer: 2,
    optionExplanations: ["Eso describe mejor a Smith–Waterman.", "Bootstrap es un procedimiento de soporte, no de alineamiento.", "Correcto. Needleman–Wunsch alinea secuencias completas de extremo a extremo.", "Los modelos de sustitución describen cambio evolutivo, no alineamiento."]
  },
  {
    kind: "theory",
    question: "Smith–Waterman es especialmente útil para:",
    options: ["Alinear genes completos de principio a fin.", "Encontrar una región local de alta similitud, como un motivo o dominio.", "Calcular un árbol MCC.", "Estimar un reloj molecular estricto."],
    answer: 1,
    optionExplanations: ["Eso corresponde a alineamiento global.", "Correcto. Smith–Waterman realiza alineamiento local.", "Un árbol MCC resume muestras bayesianas de árboles.", "Los relojes moleculares pertenecen a análisis de datación."]
  },
  {
    kind: "theory",
    question: "¿Qué describe mejor una estrategia progresiva de alineamiento múltiple?",
    options: ["Barajar secuencias al azar hasta que se vean bien.", "Usar comparaciones pareadas, un guide tree y alineamiento de perfiles/secuencias.", "Calcular una probabilidad posterior por taxón.", "Descartar todos los gaps antes de comenzar."],
    answer: 1,
    optionExplanations: ["El método progresivo es algorítmico, no visual aleatorio.", "Correcto. Las distancias pareadas y el guide tree ordenan cómo se alinean secuencias o perfiles.", "Eso no es el objetivo del MSA.", "Los gaps se insertan durante el alineamiento."]
  },
  {
    kind: "theory",
    question: "¿Qué afirmación sobre la distancia de Hamming es correcta?",
    options: ["Cuenta mismatches/sustituciones e ignora gaps.", "Estima probabilidades posteriores de clados.", "Modela tasas distintas de transiciones y transversiones.", "Es lo mismo que una penalización afín de gaps."],
    answer: 0,
    optionExplanations: ["Correcto. Es un conteo simple de diferencias y no trata indels como una distancia pareada más general.", "Eso pertenece a inferencia bayesiana.", "Eso corresponde a modelos como K80.", "Las penalizaciones puntúan alineamientos; Hamming mide diferencias."]
  },
  {
    kind: "theory",
    question: "¿Por qué podrían eliminarse regiones mal alineadas antes de inferir árboles?",
    options: ["Porque siempre carecen de variación.", "Porque pueden carecer de homología posicional confiable y añadir ruido o sesgo.", "Porque los métodos de árboles no aceptan ningún gap.", "Porque el trimming sirve para rootear el árbol."],
    answer: 1,
    optionExplanations: ["Pueden ser muy variables; esa no es la razón principal.", "Correcto. Si la homología no se reconstruye con confianza, esas columnas pueden engañar la inferencia.", "Algunos métodos pueden manejar gaps; el problema es la confiabilidad.", "El rooting se hace con outgroup u otros métodos, no con trimming."]
  },
  {
    kind: "theory",
    question: "¿Qué herramienta se destacó para filtrar bloques conservados en un alineamiento?",
    options: ["Gblocks", "ASTRAL", "MrBayes", "OrthoFinder"],
    answer: 0,
    optionExplanations: ["Correcto. Gblocks conserva bloques confiables y elimina regiones menos seguras.", "ASTRAL infiere species trees desde gene trees.", "MrBayes es para inferencia bayesiana de árboles.", "OrthoFinder infiere orthogroups, antes del alineamiento."]
  },
  {
    kind: "practical",
    question: "En la práctica de la Lección 05, ¿por qué son convenientes los orthogroups de copia única?",
    options: ["Evitan comparar sitios.", "Suelen tener una secuencia comparable por especie, reduciendo problemas de paralogía.", "Producen automáticamente árboles rooteados.", "Siempre carecen de gaps e indels."],
    answer: 1,
    optionExplanations: ["Incluso esos orthogroups necesitan alineamiento de sitios.", "Correcto. Reducen confusión por paralogía y limpian el paso de alineamiento.", "No producen árboles rooteados automáticamente.", "Pueden contener sustituciones e indels."]
  },
  {
    kind: "practical",
    question: "¿Qué efecto práctico esperas al aumentar la penalización de apertura de gaps?",
    options: ["Abrir nuevos gaps cuesta más, así que tienden a aparecer menos gaps separados.", "Todas las secuencias se vuelven idénticas.", "El alineamiento se convierte en chronogram.", "Gblocks deja de funcionar porque la penalización es ilegal."],
    answer: 0,
    optionExplanations: ["Correcto. Una mayor penalización desalienta abrir muchos gaps separados y puede cambiar la longitud/estructura del alineamiento.", "No elimina sustituciones.", "Un chronogram es un árbol temporal, no un alineamiento.", "Gblocks puede usarse después de distintos ajustes de alineamiento."]
  },
  {
    kind: "practical",
    question: "¿Para qué sirve inspeccionar visualmente alineamientos en AliView o similar?",
    options: ["Asignar priors bayesianos a cada rama.", "Identificar núcleos bien alineados, regiones sospechosas, secuencias outlier y bloques ricos en gaps.", "Reemplazar todos los algoritmos automáticos.", "Garantizar que no haya homoplasia."],
    answer: 1,
    optionExplanations: ["Los priors de ramas pertenecen a inferencia bayesiana.", "Correcto. La inspección visual ayuda a revisar el alineamiento antes de filtrar e inferir árboles.", "La inspección complementa, no reemplaza, los algoritmos.", "La homoplasia puede permanecer aunque el sitio esté bien alineado."]
  },
  {
    kind: "practical",
    question: "En el output de Gblocks, los bloques conservados importan porque representan:",
    options: ["Regiones probablemente mejor alineadas entre las secuencias.", "Ramas con posterior probability mayor a 0.95.", "Genes de transferencia horizontal.", "Taxa elegidos como outgroup."],
    answer: 0,
    optionExplanations: ["Correcto. Gblocks intenta conservar bloques donde la homología posicional es más confiable.", "Eso es soporte de árboles, no bloques del alineamiento.", "Gblocks no diagnostica HGT por sí solo.", "Outgroup es un tema de muestreo/rooting."]
  },
  {
    kind: "practical",
    question: "¿Por qué el profesor contrastó BLAST/RBH con el alineamiento de la Lección 05?",
    options: ["BLAST/RBH busca similitud local para encontrar genes candidatos; la Lección 05 busca homología global de sitios para filogenética.", "BLAST/RBH es un método de chronogram y MAFFT un modelo de reloj.", "BLAST/RBH elimina todos los gaps y MAFFT calcula posterior probabilities.", "No hay ninguna diferencia conceptual."],
    answer: 0,
    optionExplanations: ["Correcto. La práctica anterior encontraba genes comparables; esta los alinea para comparar posiciones.", "Eso mezcla conceptos incorrectos.", "MAFFT no calcula posterior probabilities.", "Sí hay diferencia: encontrar homologs vs alinear posiciones."]
  }
];

quizBase.fa = quizBase.en;

export const lesson05Quiz = quizBase;

export default function SequenceAlignmentFilteringLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz, MiniTreeIcon } = shared;
  const copy = content[lang] || content.en;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <main dir={dir} className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">{copy.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">{tag}</span>)}</div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <MiniTreeIcon active />
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div>
                <p className="mt-2 text-lg font-bold leading-7">{copy.big}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm md:p-8">
        <div className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-red-700">workflow</div>
        <Flow items={copy.flow} />
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {copy.emphasis.map(([title, body], index) => <Card key={title} title={title} tone={["sky", "red", "green", "amber"][index % 4]}>{body}</Card>)}
      </section>

      <AlignmentMiniLab />
      <GapPenaltyPanel lang={lang} />
      <MethodCompare lang={lang} />

      {copy.sections.map((section, index) => (
        <section key={section.title} className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Section {index + 1}</div>
          <h2 className="text-3xl font-black tracking-tight text-stone-950">{section.title}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {section.body.map((paragraph, i) => (
              <div key={i} className="rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm font-semibold leading-7 text-stone-700">{paragraph}</div>
            ))}
          </div>
          {section.note && <div className="mt-5 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-black leading-7 text-red-900">{section.note}</div>}
        </section>
      ))}

      <PracticalBridge copy={copy} />
      <Takeaways copy={copy} />

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">checklist</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-950">{copy.checklistTitle}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {copy.checklist.map(item => (
            <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-red-700" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <LessonPractical lang={lang} lessonNo={lessonNo} />
      <LessonQuiz lang={lang} lessonNo={lessonNo} />
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

import React, { useState } from "react";

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
    eyebrow: "Lesson 02 · Phylogenetics 101 · Tree thinking",
    title: "Learn to read trees as evolutionary hypotheses, not as visual ladders.",
    subtitle:
      "This lesson builds the language and intuition needed to interpret phylogenetic trees: characters, clades, nodes, branches, rooting, tree types, polytomies, quartets and the most common reading mistakes.",
    tags: ["synapomorphy", "clade", "MRCA", "root", "outgroup", "topology", "quartet"],
    mrcaLabel: "Core rule",
    mrca:
      "Relatedness is read from the branching pattern: taxa are closer when they share a more recent common ancestor, not when their labels are drawn near each other.",
    pathTitle: "How this lesson is built",
    path: [
      ["1", "Evidence", "Which characters actually tell us about shared ancestry?"],
      ["2", "Groups", "Which sets of taxa are natural clades?"],
      ["3", "Tree anatomy", "What do roots, nodes, tips, branches and splits mean?"],
      ["4", "Scale", "What do branch lengths mean in different tree types?"],
      ["5", "Interpretation", "How do we avoid common tree-reading traps?"],
    ],
    visual: {
      root: "Root",
      node: "Internal node",
      branch: "Branch",
      tip: "Tip / OTU",
      ingroup: "Ingroup",
      outgroup: "Outgroup",
      topology: "Topology",
      same: "same tree",
      different: "different tree",
      noScale: "branching only",
      change: "evolutionary change",
      time: "time",
      unresolved: "unresolved",
      clade: "clade",
    },
    sections: {
      big: [
        "Big picture",
        "A phylogenetic tree is a hypothesis about historical relationships. Evolution happened in the past and cannot be directly observed, so trees are inferred from data and can change when new evidence, new taxa, or better models are used.",
        "The practical skill is not memorizing tree shapes. It is learning what information the drawing contains, what it does not contain, and which conclusions are justified by the topology and scale.",
      ],
      hierarchy: [
        "Systematics, taxonomy, phylogenetics and cladistics",
        [
          ["Systematics", "The broadest field: it includes taxonomy and phylogenetics."],
          ["Taxonomy", "The theory and practice of identifying, describing, naming and classifying organisms."],
          ["Phylogenetics", "The reconstruction of evolutionary history and relationships among species or other biological entities."],
          ["Cladistics", "An approach within phylogenetics focused on common ancestry and shared derived traits."],
        ],
        "A useful hierarchy is: Systematics > Phylogenetics > Cladistics. All cladistics is phylogenetics, but not all phylogenetics is cladistics.",
      ],
      characters: [
        "Characters and evidence",
        "Characters are useful for phylogeny when their distribution reflects descent. The key distinction is whether a trait is derived or ancestral, and whether it is shared by the taxa being compared.",
        [
          ["Synapomorphy", "Shared derived trait inherited from the most recent common ancestor of a group. Synapomorphies define clades and are strong evidence of relationship.", "green"],
          ["Autapomorphy", "Unique derived trait found in a single taxon. It helps diagnose that lineage, but does not tell us which other taxa it is closest to.", "sky"],
          ["Symplesiomorphy", "Shared ancestral trait inherited from an older ancestor. It can be misleading because it does not indicate close relationship inside the focal group.", "amber"],
          ["Plesiomorphy", "An ancestral character state retained by multiple taxa. By itself, it does not define a specific clade.", "stone"],
        ],
        "Exam intuition: derived + shared is usually the useful combination. Ancestral + shared often feels convincing, but can group taxa for the wrong historical reason.",
      ],
      clades: [
        "Types of groups",
        [
          ["Monophyletic group", "Contains the most recent common ancestor of the group and all of its descendants. This is a clade.", "green"],
          ["Paraphyletic group", "Contains the common ancestor but excludes some descendants.", "amber"],
          ["Polyphyletic group", "Combines lineages from separate origins; the most recent common ancestor also has descendants outside the proposed group.", "red"],
        ],
      ],
      sampling: [
        "Ingroup and outgroup",
        [
          ["Ingroup", "The focal set of tips assumed in advance to represent the clade we want to study."],
          ["Outgroup", "Tips assumed to fall outside the focal clade. The outgroup helps give direction to the tree and is commonly used for rooting."],
        ],
      ],
      anatomy: [
        "Tree anatomy",
        [
          ["Node", "A point at the end of branches. Internal nodes usually represent hypothetical ancestors, and can also be understood as bipartitions or splits."],
          ["Tip / terminal node / OTU", "The sampled sequences, species, populations or individuals used to build the tree."],
          ["Branch", "A connection between nodes and tips. The branching structure is the topology, which carries the relationship information."],
          ["Bipartition / split", "A division of the tips produced by an internal branch. Support metrics often evaluate these splits."],
          ["Rotation", "Internal nodes can be rotated without changing the tree. The same relationships can be drawn with different tip orders."],
        ],
      ],
      treeTypes: [
        "Tree types and scale",
        [
          ["Cladogram", "Shows only branching order. Branch lengths do not represent time or amount of change.", "noScale"],
          ["Phylogram", "Branch lengths are scaled to amount of evolutionary change, such as nucleotide substitutions per site.", "change"],
          ["Chronogram / timetree", "Branch lengths are scaled to time. This is the output of divergence time analyses.", "time"],
        ],
      ],
      rooting: [
        "Rooting and direction",
        [
          ["Root", "A specific internal node representing the most recent common ancestor of all tips. It is the oldest part of the tree and gives evolutionary direction."],
          ["Rooted tree", "A tree where ancestor–descendant direction can be interpreted."],
          ["Unrooted tree", "A tree showing relationships without direction; it does not specify the oldest point."],
          ["Outgroup rooting", "Uses an external taxon to place the root."],
          ["Midpoint rooting", "Places the root halfway between the two most distant tips; useful as an approximation, but assumption-dependent."],
        ],
      ],
      complexity: [
        "Polytomies, triplets and quartets",
        [
          ["Dichotomous / bifurcating tree", "Every internal node splits into two descendant lineages."],
          ["Polytomy", "A node with more than two descendants. It usually represents unresolved relationships."],
          ["Triplet", "The simplest rooted statement of relationships among three taxa."],
          ["Quartet", "The simplest ambiguous unrooted comparison among four taxa. The possible splits are AB|CD, AC|BD and AD|BC."],
        ],
      ],
      traps: [
        "Common misconceptions",
        [
          ["Adjacent tips are closest", "False. Tip order is not the evidence. Follow branches back to the most recent common ancestor."],
          ["Top or bottom means ancestor", "False. Tips are sampled lineages; they are not ancestors of other tips."],
          ["Trees are ladders", "False. Terms like primitive, lower, ancient or more advanced applied to living lineages encourage ladder-thinking."],
          ["Branch length always means time", "False. It depends on the type of tree and whether a scale is shown."],
        ],
      ],
      exam: [
        "Exam cues",
        [
          ["shared derived trait", "Think: synapomorphy; useful for defining clades."],
          ["shared ancestral trait", "Think: symplesiomorphy; often misleading for close relationships."],
          ["all descendants included", "Think: monophyly."],
          ["some descendants excluded", "Think: paraphyly."],
          ["branching pattern only", "Think: cladogram."],
          ["substitutions per site", "Think: phylogram."],
          ["million years", "Think: chronogram."],
        ],
      ],
      checkpoints: [
        "Checkpoints",
        [
          ["What is the MRCA?", "The most recent common ancestor of the tips being compared."],
          ["What changes when a node rotates?", "Only the drawing. The topology and relationships remain the same."],
          ["What does a polytomy say?", "That the relationship is unresolved or represented as multifurcating."],
        ],
      ],
      checklist: [
        "Before Lesson 03, I can...",
        [
          "Explain why phylogenetic trees are hypotheses.",
          "Distinguish synapomorphy, autapomorphy, symplesiomorphy and plesiomorphy.",
          "Define monophyly, paraphyly and polyphyly.",
          "Identify nodes, tips, branches, root and bipartitions on a tree.",
          "Explain why rotating a node does not change the tree.",
          "Distinguish cladogram, phylogram and chronogram.",
          "Use MRCA logic to compare relatedness among tips.",
          "Avoid ladder-thinking and other common tree-reading mistakes.",
        ],
      ],
    },
  },
  es: {
    eyebrow: "Lección 02 · Phylogenetics 101 · Tree thinking",
    title: "Aprende a leer árboles como hipótesis evolutivas, no como escaleras visuales.",
    subtitle:
      "Esta lección construye el vocabulario y la intuición necesarios para interpretar árboles filogenéticos: caracteres, clados, nodos, ramas, enraizamiento, tipos de árbol, politomías, cuartetos y errores comunes de lectura.",
    tags: ["synapomorphy", "clado", "MRCA", "raíz", "outgroup", "topología", "cuarteto"],
    mrcaLabel: "Regla central",
    mrca:
      "La relación se lee desde el patrón de ramificación: los taxones son más cercanos si comparten un ancestro común más reciente, no si sus etiquetas aparecen juntas en el dibujo.",
    pathTitle: "Cómo está construida esta lección",
    path: [
      ["1", "Evidencia", "¿Qué caracteres realmente informan sobre ancestría compartida?"],
      ["2", "Grupos", "¿Qué conjuntos de taxones son clados naturales?"],
      ["3", "Anatomía", "¿Qué significan raíz, nodos, tips, ramas y splits?"],
      ["4", "Escala", "¿Qué significan las longitudes de rama en cada tipo de árbol?"],
      ["5", "Interpretación", "¿Cómo evitamos las trampas comunes al leer árboles?"],
    ],
    visual: {
      root: "Raíz",
      node: "Nodo interno",
      branch: "Rama",
      tip: "Tip / OTU",
      ingroup: "Ingroup",
      outgroup: "Outgroup",
      topology: "Topología",
      same: "mismo árbol",
      different: "árbol diferente",
      noScale: "solo ramificación",
      change: "cambio evolutivo",
      time: "tiempo",
      unresolved: "no resuelto",
      clade: "clado",
    },
    sections: {
      big: [
        "Big picture",
        "Un árbol filogenético es una hipótesis sobre relaciones históricas. La evolución ocurrió en el pasado y no puede observarse directamente, así que los árboles se infieren a partir de datos y pueden cambiar con nueva evidencia, nuevos taxones o mejores modelos.",
        "La habilidad práctica no es memorizar formas de árboles. Es aprender qué información sí contiene el dibujo, qué información no contiene, y qué conclusiones están justificadas por la topología y la escala.",
      ],
      hierarchy: [
        "Systematics, taxonomy, phylogenetics y cladistics",
        [
          ["Systematics", "El campo más amplio: incluye taxonomy y phylogenetics."],
          ["Taxonomy", "La teoría y práctica de identificar, describir, nombrar y clasificar organismos."],
          ["Phylogenetics", "La reconstrucción de la historia evolutiva y las relaciones entre especies u otras entidades biológicas."],
          ["Cladistics", "Un enfoque dentro de phylogenetics centrado en ancestry común y shared derived traits."],
        ],
        "Una jerarquía útil es: Systematics > Phylogenetics > Cladistics. Toda cladistics es phylogenetics, pero no toda phylogenetics es cladistics.",
      ],
      characters: [
        "Caracteres y evidencia",
        "Los caracteres son útiles para filogenia cuando su distribución refleja descendencia. La clave es distinguir si un rasgo es derivado o ancestral, y si está compartido por los taxones comparados.",
        [
          ["Synapomorphy", "Rasgo derivado compartido heredado del ancestro común más reciente de un grupo. Las synapomorphies definen clados y son evidencia fuerte de relación.", "green"],
          ["Autapomorphy", "Rasgo derivado único de un solo taxón. Ayuda a diagnosticar ese linaje, pero no indica con qué otros taxones está más relacionado.", "sky"],
          ["Symplesiomorphy", "Rasgo ancestral compartido heredado de un ancestro más antiguo. Puede ser engañoso porque no indica relación cercana dentro del grupo focal.", "amber"],
          ["Plesiomorphy", "Estado ancestral de un carácter retenido por varios taxones. Por sí solo no define un clado específico.", "stone"],
        ],
        "Intuición de examen: derivado + compartido suele ser la combinación útil. Ancestral + compartido puede parecer convincente, pero puede agrupar taxones por la razón histórica equivocada.",
      ],
      clades: [
        "Tipos de grupos",
        [
          ["Grupo monofilético", "Contiene el ancestro común más reciente del grupo y todos sus descendientes. Esto es un clado.", "green"],
          ["Grupo parafilético", "Contiene el ancestro común, pero excluye algunos descendientes.", "amber"],
          ["Grupo polifilético", "Combina linajes de orígenes separados; el ancestro común más reciente también tiene descendientes fuera del grupo propuesto.", "red"],
        ],
      ],
      sampling: [
        "Ingroup y outgroup",
        [
          ["Ingroup", "El conjunto focal de tips que asumimos de antemano como el clado que queremos estudiar."],
          ["Outgroup", "Tips que asumimos fuera del clado focal. El outgroup ayuda a dar dirección al árbol y suele usarse para enraizarlo."],
        ],
      ],
      anatomy: [
        "Anatomía del árbol",
        [
          ["Nodo", "Punto en el extremo de ramas. Los nodos internos suelen representar ancestros hipotéticos y también pueden entenderse como biparticiones o splits."],
          ["Tip / nodo terminal / OTU", "Las secuencias, especies, poblaciones o individuos muestreados para construir el árbol."],
          ["Rama", "Conexión entre nodos y tips. La estructura de ramificación es la topología, que contiene la información de relación."],
          ["Bipartición / split", "División de los tips producida por una rama interna. Muchas métricas de soporte evalúan estos splits."],
          ["Rotación", "Los nodos internos pueden rotarse sin cambiar el árbol. Las mismas relaciones pueden dibujarse con distinto orden de tips."],
        ],
      ],
      treeTypes: [
        "Tipos de árbol y escala",
        [
          ["Cladograma", "Muestra solo el orden de ramificación. Las longitudes de rama no representan tiempo ni cantidad de cambio.", "noScale"],
          ["Filograma", "Las longitudes de rama están escaladas a cantidad de cambio evolutivo, por ejemplo sustituciones nucleotídicas por sitio.", "change"],
          ["Cronograma / timetree", "Las longitudes de rama están escaladas a tiempo. Es el tipo de árbol usado en análisis de tiempos de divergencia.", "time"],
        ],
      ],
      rooting: [
        "Raíz y dirección",
        [
          ["Raíz", "Nodo interno específico que representa el ancestro común más reciente de todos los tips. Es la parte más antigua del árbol y da dirección evolutiva."],
          ["Árbol enraizado", "Árbol donde puede interpretarse dirección ancestro–descendiente."],
          ["Árbol no enraizado", "Árbol que muestra relaciones sin dirección; no especifica cuál es el punto más antiguo."],
          ["Outgroup rooting", "Usa un taxón externo para colocar la raíz."],
          ["Midpoint rooting", "Coloca la raíz a mitad de camino entre los dos tips más distantes; es una aproximación, pero depende de supuestos."],
        ],
      ],
      complexity: [
        "Politomías, tripletes y cuartetos",
        [
          ["Árbol dicotómico / bifurcante", "Cada nodo interno se divide en dos linajes descendientes."],
          ["Politomía", "Nodo con más de dos descendientes. Normalmente representa relaciones no resueltas."],
          ["Triplete", "La declaración enraizada más simple de relaciones entre tres taxones."],
          ["Cuarteto", "La comparación no enraizada ambigua más simple entre cuatro taxones. Los splits posibles son AB|CD, AC|BD y AD|CB."],
        ],
      ],
      traps: [
        "Errores comunes",
        [
          ["Los tips adyacentes son los más cercanos", "Falso. El orden de tips no es la evidencia. Sigue las ramas hasta el ancestro común más reciente."],
          ["Arriba o abajo significa ancestro", "Falso. Los tips son linajes muestreados; no son ancestros de otros tips."],
          ["Los árboles son escaleras", "Falso. Términos como primitivo, inferior, antiguo o más avanzado aplicados a linajes actuales fomentan ladder-thinking."],
          ["La longitud de rama siempre significa tiempo", "Falso. Depende del tipo de árbol y de si se muestra una escala."],
        ],
      ],
      exam: [
        "Pistas de examen",
        [
          ["shared derived trait", "Piensa: synapomorphy; útil para definir clados."],
          ["shared ancestral trait", "Piensa: symplesiomorphy; suele engañar al inferir relaciones cercanas."],
          ["todos los descendientes incluidos", "Piensa: monofilia."],
          ["algunos descendientes excluidos", "Piensa: parafilia."],
          ["solo patrón de ramificación", "Piensa: cladograma."],
          ["substitutions per site", "Piensa: filograma."],
          ["million years", "Piensa: cronograma."],
        ],
      ],
      checkpoints: [
        "Checkpoints",
        [
          ["¿Qué es el MRCA?", "El ancestro común más reciente de los tips que se están comparando."],
          ["¿Qué cambia al rotar un nodo?", "Solo el dibujo. La topología y las relaciones siguen siendo las mismas."],
          ["¿Qué indica una politomía?", "Que la relación está no resuelta o representada como multifurcación."],
        ],
      ],
      checklist: [
        "Antes de Lesson 03, puedo...",
        [
          "Explicar por qué los árboles filogenéticos son hipótesis.",
          "Distinguir synapomorphy, autapomorphy, symplesiomorphy y plesiomorphy.",
          "Definir monofilia, parafilia y polifilia.",
          "Identificar nodos, tips, ramas, raíz y biparticiones en un árbol.",
          "Explicar por qué rotar un nodo no cambia el árbol.",
          "Distinguir cladograma, filograma y cronograma.",
          "Usar lógica de MRCA para comparar cercanía evolutiva entre tips.",
          "Evitar ladder-thinking y otros errores comunes de lectura.",
        ],
      ],
    },
  },
  fa: {
    eyebrow: "درس ۰۲ · مبانی تبارزایی · تفکر درختی",
    title: "درخت‌ها را به‌عنوان فرضیه‌های تکاملی بخوانید، نه نردبان‌های بصری.",
    subtitle:
      "این درس واژگان و شهود لازم برای تفسیر درخت‌های تبارزایی را می‌سازد: کاراکترها، کلادها، گره‌ها، شاخه‌ها، ریشه‌گذاری، انواع درخت، چندشاخه‌ای‌ها، کوارتت‌ها و خطاهای رایج خواندن درخت.",
    tags: ["سیناپومورفی", "کلاد", "MRCA", "ریشه", "برون‌گروه", "توپولوژی", "کوارتت"],
    mrcaLabel: "قاعدهٔ اصلی",
    mrca:
      "خویشاوندی از الگوی انشعاب خوانده می‌شود: تاکسون‌ها وقتی نزدیک‌ترند که نیای مشترک جدیدتری داشته باشند، نه وقتی که برچسب‌هایشان کنار هم رسم شده باشد.",
    pathTitle: "ساختار این درس",
    path: [
      ["1", "شواهد", "کدام کاراکترها واقعاً دربارهٔ نیای مشترک اطلاعات می‌دهند؟"],
      ["2", "گروه‌ها", "کدام مجموعه‌های تاکسونی کلاد طبیعی‌اند؟"],
      ["3", "آناتومی", "ریشه، گره، نوک، شاخه و split چه معنایی دارند؟"],
      ["4", "مقیاس", "طول شاخه‌ها در انواع مختلف درخت چه معنایی دارد؟"],
      ["5", "تفسیر", "چگونه از خطاهای رایج خواندن درخت پرهیز کنیم؟"],
    ],
    visual: {
      root: "ریشه",
      node: "گرهٔ داخلی",
      branch: "شاخه",
      tip: "نوک / OTU",
      ingroup: "درون‌گروه",
      outgroup: "برون‌گروه",
      topology: "توپولوژی",
      same: "همان درخت",
      different: "درخت متفاوت",
      noScale: "فقط انشعاب",
      change: "تغییر تکاملی",
      time: "زمان",
      unresolved: "حل‌نشده",
      clade: "کلاد",
    },
    sections: {
      big: [
        "نمای کلی",
        "درخت تبارزایی یک فرضیه دربارهٔ روابط تاریخی است. تکامل در گذشته رخ داده و مستقیم مشاهده نمی‌شود؛ بنابراین درخت‌ها از داده‌ها استنباط می‌شوند و با شواهد جدید، تاکسون‌های تازه یا مدل‌های بهتر می‌توانند تغییر کنند.",
        "مهارت عملی حفظ‌کردن شکل درخت نیست. باید یاد بگیریم تصویر چه اطلاعاتی دارد، چه اطلاعاتی ندارد، و کدام نتیجه‌ها از توپولوژی و مقیاس قابل دفاع‌اند.",
      ],
      hierarchy: [
        "سیستماتیک، تاکسونومی، تبارزایی و کلادیستیک",
        [
          ["سیستماتیک", "گسترده‌ترین حوزه؛ شامل تاکسونومی و تبارزایی است."],
          ["تاکسونومی", "نظریه و عمل شناسایی، توصیف، نام‌گذاری و طبقه‌بندی جانداران."],
          ["تبارزایی", "بازسازی تاریخ تکاملی و روابط میان گونه‌ها یا دیگر واحدهای زیستی."],
          ["کلادیستیک", "رویکردی درون تبارزایی که بر نیای مشترک و صفات مشتق مشترک تمرکز دارد."],
        ],
        "یک سلسله‌مراتب مفید چنین است: سیستماتیک > تبارزایی > کلادیستیک. همهٔ کلادیستیک تبارزایی است، اما همهٔ تبارزایی کلادیستیک نیست.",
      ],
      characters: [
        "کاراکترها و شواهد",
        "کاراکترها زمانی برای تبارزایی مفیدند که توزیع آن‌ها بازتاب تبار و فرود باشد. نکتهٔ کلیدی این است که صفت مشتق است یا اجدادی، و آیا میان تاکسون‌های مورد مقایسه مشترک است یا نه.",
        [
          ["سیناپومورفی", "صفت مشتق مشترک که از نزدیک‌ترین نیای مشترک یک گروه به ارث رسیده است. سیناپومورفی‌ها کلادها را تعریف می‌کنند و شاهد قوی رابطه‌اند.", "green"],
          ["اتاپومورفی", "صفت مشتق منحصربه‌فرد یک تاکسون. آن دودمان را تشخیص می‌دهد، اما نمی‌گوید با کدام تاکسون‌ها نزدیک‌تر است.", "sky"],
          ["سیمپلزیومورفی", "صفت اجدادی مشترک که از نیایی قدیمی‌تر به ارث رسیده است. می‌تواند گمراه‌کننده باشد، چون رابطهٔ نزدیک درون گروه کانونی را نشان نمی‌دهد.", "amber"],
          ["پلزیومورفی", "حالت اجدادی یک کاراکتر که در چندین تاکسون حفظ شده است. به‌تنهایی کلاد خاصی را تعریف نمی‌کند.", "stone"],
        ],
        "شهود امتحانی: مشتق + مشترک معمولاً ترکیب مفید است. اجدادی + مشترک ممکن است قانع‌کننده به نظر برسد، اما تاکسون‌ها را به دلیل تاریخی اشتباه کنار هم بگذارد.",
      ],
      clades: [
        "انواع گروه‌ها",
        [
          ["گروه تک‌تبار", "نزدیک‌ترین نیای مشترک گروه و همهٔ نوادگانش را شامل می‌شود. این یک کلاد است.", "green"],
          ["گروه پیراتبار", "نیای مشترک را شامل می‌شود، اما بعضی نوادگان را حذف می‌کند.", "amber"],
          ["گروه چندتبار", "دودمان‌هایی با منشأ جدا را کنار هم می‌گذارد؛ نزدیک‌ترین نیای مشترک آن‌ها نوادگانی بیرون از گروه پیشنهادی نیز دارد.", "red"],
        ],
      ],
      sampling: [
        "درون‌گروه و برون‌گروه",
        [
          ["درون‌گروه", "مجموعهٔ کانونی نوک‌ها که از پیش آن را کلاد مورد مطالعه فرض می‌کنیم."],
          ["برون‌گروه", "نوک‌هایی که بیرون از کلاد کانونی فرض می‌شوند. برون‌گروه به جهت‌دهی و ریشه‌گذاری درخت کمک می‌کند."],
        ],
      ],
      anatomy: [
        "آناتومی درخت",
        [
          ["گره", "نقطه‌ای در انتهای شاخه‌ها. گره‌های داخلی معمولاً نیاهای فرضی را نشان می‌دهند و می‌توانند به‌عنوان دوپاره‌سازی یا split نیز فهمیده شوند."],
          ["نوک / گره انتهایی / OTU", "توالی‌ها، گونه‌ها، جمعیت‌ها یا افراد نمونه‌برداری‌شده برای ساخت درخت."],
          ["شاخه", "ارتباط میان گره‌ها و نوک‌ها. ساختار شاخه‌بندی همان توپولوژی است و اطلاعات رابطه را حمل می‌کند."],
          ["دوپاره‌سازی / split", "تقسیم نوک‌ها که توسط یک شاخهٔ داخلی ایجاد می‌شود. بسیاری از معیارهای پشتیبانی همین splitها را ارزیابی می‌کنند."],
          ["چرخش", "گره‌های داخلی را می‌توان چرخاند بدون اینکه درخت تغییر کند. همان روابط با ترتیب متفاوت نوک‌ها قابل رسم‌اند."],
        ],
      ],
      treeTypes: [
        "انواع درخت و مقیاس",
        [
          ["کلادوگرام", "فقط ترتیب شاخه‌بندی را نشان می‌دهد. طول شاخه‌ها زمان یا مقدار تغییر را نشان نمی‌دهند.", "noScale"],
          ["فیلوگرام", "طول شاخه‌ها بر اساس مقدار تغییر تکاملی مقیاس‌بندی شده‌اند، مثلاً جانشینی نوکلئوتیدی به ازای هر جایگاه.", "change"],
          ["کرونوگرام / درخت زمانی", "طول شاخه‌ها بر اساس زمان مقیاس‌بندی شده‌اند. این نوع در تحلیل زمان‌های واگرایی به کار می‌رود.", "time"],
        ],
      ],
      rooting: [
        "ریشه‌گذاری و جهت",
        [
          ["ریشه", "گرهٔ داخلی خاصی که نزدیک‌ترین نیای مشترک همهٔ نوک‌ها را نشان می‌دهد. قدیمی‌ترین بخش درخت است و جهت تکاملی می‌دهد."],
          ["درخت ریشه‌دار", "درختی که در آن جهت نیا–نواده قابل تفسیر است."],
          ["درخت بی‌ریشه", "درختی که روابط را بدون جهت نشان می‌دهد و نقطهٔ قدیمی‌تر را مشخص نمی‌کند."],
          ["ریشه‌گذاری با برون‌گروه", "از یک تاکسون خارجی برای قرار دادن ریشه استفاده می‌کند."],
          ["ریشه‌گذاری نقطهٔ میانی", "ریشه را میان دو نوکِ دورتر قرار می‌دهد؛ یک تقریب است و به فرض‌ها وابسته است."],
        ],
      ],
      complexity: [
        "چندشاخه‌ای‌ها، تریپلت‌ها و کوارتت‌ها",
        [
          ["درخت دوشاخه / bifurcating", "هر گرهٔ داخلی به دو دودمان نواده تقسیم می‌شود."],
          ["چندشاخه‌ای / polytomy", "گره‌ای با بیش از دو نواده. معمولاً نشان‌دهندهٔ روابط حل‌نشده است."],
          ["تریپلت", "ساده‌ترین بیان ریشه‌دار رابطه میان سه تاکسون."],
          ["کوارتت", "ساده‌ترین مقایسهٔ بی‌ریشه و مبهم میان چهار تاکسون. splitهای ممکن AB|CD، AC|BD و AD|CB هستند."],
        ],
      ],
      traps: [
        "خطاهای رایج",
        [
          ["نوک‌های کنار هم نزدیک‌ترین‌اند", "نادرست. ترتیب نوک‌ها شاهد رابطه نیست. شاخه‌ها را تا نزدیک‌ترین نیای مشترک دنبال کنید."],
          ["بالا یا پایین یعنی نیا", "نادرست. نوک‌ها دودمان‌های نمونه‌برداری‌شده‌اند؛ نیاهای نوک‌های دیگر نیستند."],
          ["درخت‌ها نردبان‌اند", "نادرست. واژه‌هایی مثل ابتدایی، پایین‌تر، باستانی یا پیشرفته‌تر برای دودمان‌های زنده تفکر نردبانی ایجاد می‌کنند."],
          ["طول شاخه همیشه یعنی زمان", "نادرست. به نوع درخت و وجود مقیاس بستگی دارد."],
        ],
      ],
      exam: [
        "نشانه‌های امتحانی",
        [
          ["shared derived trait", "سیناپومورفی؛ برای تعریف کلادها مفید است."],
          ["shared ancestral trait", "سیمپلزیومورفی؛ معمولاً برای روابط نزدیک گمراه‌کننده است."],
          ["همهٔ نوادگان شامل‌اند", "تک‌تبارگی."],
          ["بعضی نوادگان حذف شده‌اند", "پیراتبارگی."],
          ["فقط الگوی شاخه‌بندی", "کلادوگرام."],
          ["substitutions per site", "فیلوگرام."],
          ["million years", "کرونوگرام."],
        ],
      ],
      checkpoints: [
        "نقاط بررسی",
        [
          ["MRCA چیست؟", "نزدیک‌ترین نیای مشترک نوک‌هایی که مقایسه می‌شوند."],
          ["با چرخاندن یک گره چه چیزی تغییر می‌کند؟", "فقط شکل رسم. توپولوژی و روابط همان می‌مانند."],
          ["چندشاخه‌ای چه می‌گوید؟", "اینکه رابطه حل‌نشده است یا به‌صورت چندانشعابی نمایش داده شده است."],
        ],
      ],
      checklist: [
        "پیش از درس ۰۳، می‌توانم...",
        [
          "توضیح دهم چرا درخت‌های تبارزایی فرضیه‌اند.",
          "سیناپومورفی، اتاپومورفی، سیمپلزیومورفی و پلزیومورفی را تفکیک کنم.",
          "تک‌تبارگی، پیراتبارگی و چندتبارگی را تعریف کنم.",
          "گره‌ها، نوک‌ها، شاخه‌ها، ریشه و دوپاره‌سازی‌ها را در درخت تشخیص دهم.",
          "توضیح دهم چرا چرخاندن یک گره درخت را تغییر نمی‌دهد.",
          "کلادوگرام، فیلوگرام و کرونوگرام را تفکیک کنم.",
          "با منطق MRCA نزدیکی تکاملی میان نوک‌ها را مقایسه کنم.",
          "از تفکر نردبانی و خطاهای رایج خواندن درخت پرهیز کنم.",
        ],
      ],
    },
  },
};

function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8 ${className}`}>
      <div className="mb-5">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{eyebrow}</div>
        {title && <h2 className="text-2xl font-black tracking-tight text-stone-950 md:text-3xl">{title}</h2>}
      </div>
      {children}
    </section>
  );
}

function InfoCard({ title, body, tone = "stone", icon }) {
  return (
    <div className={`rounded-3xl border p-5 ${toneClasses[tone] || toneClasses.stone}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="text-2xl leading-none">{icon}</div>}
        <div>
          <h3 className="text-lg font-black">{title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 opacity-80">{body}</p>
        </div>
      </div>
    </div>
  );
}

function FigureShell({ title, children, dark = false }) {
  return (
    <div className={`rounded-[2rem] border p-4 ${dark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"}`}>
      {title && <div className={`mb-3 text-xs font-black uppercase tracking-[0.18em] ${dark ? "text-red-200" : "text-red-700"}`}>{title}</div>}
      {children}
    </div>
  );
}

function TreeFigure({ labels, focus = "root", compact = false }) {
  const highlight = {
    root: "#dc2626",
    node: "#d97706",
    branch: "#0284c7",
    tip: "#059669",
    ingroup: "#0f766e",
    outgroup: "#7c3aed",
  };
  return (
    <svg viewBox="0 0 560 330" className={`${compact ? "h-64" : "h-[360px]"} w-full`} role="img" aria-label="phylogenetic tree diagram">
      <rect x="0" y="0" width="560" height="330" rx="30" fill="#fffaf0" />
      {focus === "ingroup" && <path d="M205 45 H510 V285 H205 Z" fill="#d1fae5" stroke="#0f766e" strokeWidth="3" strokeDasharray="8 8" rx="24" />}
      {focus === "outgroup" && <rect x="404" y="26" width="118" height="45" rx="18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="3" />}
      <path d="M72 165 H132" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M132 165 L214 75" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M132 165 L214 255" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M214 75 L318 48" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M214 75 L318 118" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M214 255 L318 212" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M214 255 L318 282" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M318 48 H456" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M318 118 H456" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M318 212 H456" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M318 282 H456" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      {focus === "branch" && <path d="M214 75 L318 48" stroke={highlight.branch} strokeWidth="16" strokeLinecap="round" opacity="0.9" />}
      {focus === "root" && <circle cx="132" cy="165" r="18" fill={highlight.root} />}
      {focus === "node" && <circle cx="214" cy="75" r="18" fill={highlight.node} />}
      {focus === "tip" && [48, 118, 212, 282].map((y) => <circle key={y} cx="456" cy={y} r="15" fill={highlight.tip} />)}
      <text x="86" y="204" fill="#dc2626" fontSize="14" fontWeight="800">{labels.root}</text>
      <text x="226" y="64" fill="#d97706" fontSize="14" fontWeight="800">{labels.node}</text>
      <text x="316" y="34" fill="#0284c7" fontSize="14" fontWeight="800">{labels.branch}</text>
      <text x="472" y="53" fill="#059669" fontSize="14" fontWeight="800">A</text>
      <text x="472" y="123" fill="#059669" fontSize="14" fontWeight="800">B</text>
      <text x="472" y="217" fill="#059669" fontSize="14" fontWeight="800">C</text>
      <text x="472" y="287" fill="#059669" fontSize="14" fontWeight="800">D</text>
      <text x="235" y="310" fill="#0f766e" fontSize="14" fontWeight="900">{labels.ingroup}</text>
      <text x="414" y="55" fill="#7c3aed" fontSize="13" fontWeight="900">{labels.outgroup}</text>
    </svg>
  );
}

function CharacterFigure({ labels }) {
  return (
    <svg viewBox="0 0 620 220" className="h-56 w-full" role="img" aria-label="character evidence diagram">
      <rect width="620" height="220" rx="28" fill="#fffaf0" />
      <path d="M55 130 H145" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <path d="M145 130 L245 70" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <path d="M145 130 L245 170" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <path d="M245 70 H380" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <path d="M245 70 L380 112" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <path d="M245 170 H380" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <circle cx="245" cy="70" r="16" fill="#059669" />
      <circle cx="380" cy="70" r="13" fill="#059669" />
      <circle cx="380" cy="112" r="13" fill="#059669" />
      <circle cx="380" cy="170" r="13" fill="#0284c7" />
      <rect x="420" y="40" width="155" height="48" rx="17" fill="#d1fae5" stroke="#059669" />
      <text x="438" y="70" fontSize="14" fontWeight="900" fill="#065f46">Synapomorphy</text>
      <rect x="420" y="106" width="155" height="48" rx="17" fill="#e0f2fe" stroke="#0284c7" />
      <text x="438" y="136" fontSize="14" fontWeight="900" fill="#075985">Autapomorphy</text>
      <rect x="420" y="166" width="155" height="34" rx="14" fill="#fef3c7" stroke="#d97706" />
      <text x="438" y="188" fontSize="13" fontWeight="900" fill="#92400e">Ancestral state</text>
      <text x="68" y="50" fontSize="16" fontWeight="900" fill="#991b1b">{labels.clade}</text>
    </svg>
  );
}

function CladeFigure({ type, labels }) {
  const fill = type === "mono" ? "#d1fae5" : type === "para" ? "#fef3c7" : "#fee2e2";
  const stroke = type === "mono" ? "#059669" : type === "para" ? "#d97706" : "#dc2626";
  return (
    <svg viewBox="0 0 260 150" className="h-36 w-full rounded-2xl bg-white" role="img" aria-label={`${type} group diagram`}>
      <path d="M30 78 H72" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 78 L118 38" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 78 L118 118" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M118 38 H212" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M118 38 L212 70" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M118 118 H212" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      {type === "mono" && <rect x="105" y="24" width="120" height="58" rx="20" fill={fill} stroke={stroke} strokeWidth="3" />}
      {type === "para" && <path d="M104 88 H226 V132 H104 Z" fill={fill} stroke={stroke} strokeWidth="3" />}
      {type === "poly" && <><rect x="178" y="24" width="55" height="58" rx="18" fill={fill} stroke={stroke} strokeWidth="3" /><rect x="178" y="98" width="55" height="38" rx="16" fill={fill} stroke={stroke} strokeWidth="3" /></>}
      <text x="198" y="42" fill="#111827" fontSize="12" fontWeight="900">A</text>
      <text x="198" y="74" fill="#111827" fontSize="12" fontWeight="900">B</text>
      <text x="198" y="122" fill="#111827" fontSize="12" fontWeight="900">C</text>
    </svg>
  );
}

function RotationFigure({ labels }) {
  return (
    <svg viewBox="0 0 640 230" className="h-60 w-full" role="img" aria-label="tree rotation diagram">
      <rect width="640" height="230" rx="28" fill="#fffaf0" />
      <text x="72" y="32" fontSize="14" fontWeight="900" fill="#059669">{labels.same}</text>
      <text x="412" y="32" fontSize="14" fontWeight="900" fill="#dc2626">{labels.different}</text>
      <path d="M70 120 H110 M110 120 L170 75 M110 120 L170 165 M170 75 H245 M170 75 L245 105" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      <text x="255" y="80" fontSize="13" fontWeight="900">A</text><text x="255" y="110" fontSize="13" fontWeight="900">B</text><text x="255" y="170" fontSize="13" fontWeight="900">C</text>
      <path d="M315 120 H355 M355 120 L415 75 M355 120 L415 165 M415 75 H490 M415 165 H490" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      <text x="500" y="80" fontSize="13" fontWeight="900">A</text><text x="500" y="170" fontSize="13" fontWeight="900">B</text><text x="430" y="180" fontSize="13" fontWeight="900">C</text>
      <path d="M285 120 C300 95 300 145 315 120" fill="none" stroke="#991b1b" strokeWidth="3" strokeDasharray="6 6" />
    </svg>
  );
}

function ScaleFigure({ labels }) {
  const rows = [
    [labels.noScale, "M40 62 H115 M115 62 L175 34 M115 62 L175 92 M175 34 H250 M175 92 H250", "#57534e"],
    [labels.change, "M40 142 H100 M100 142 L215 112 M100 142 L155 174 M215 112 H280 M155 174 H235", "#0284c7"],
    [labels.time, "M360 142 H445 M445 142 L505 112 M445 142 L505 174 M505 112 H585 M505 174 H585", "#dc2626"],
  ];
  return (
    <svg viewBox="0 0 640 230" className="h-60 w-full" role="img" aria-label="tree scale diagram">
      <rect width="640" height="230" rx="28" fill="#fffaf0" />
      {rows.map(([label, d, color], i) => (
        <g key={label}>
          <path d={d} stroke="#111827" strokeWidth="6" strokeLinecap="round" />
          <text x={i === 2 ? 380 : 42} y={i === 0 ? 118 : 206} fontSize="14" fontWeight="900" fill={color}>{label}</text>
          {i > 0 && <path d={i === 1 ? "M42 195 H114" : "M382 195 H454"} stroke={color} strokeWidth="5" strokeLinecap="round" />}
        </g>
      ))}
    </svg>
  );
}

function QuartetFigure({ labels }) {
  return (
    <svg viewBox="0 0 640 250" className="h-64 w-full" role="img" aria-label="quartet and polytomy diagram">
      <rect width="640" height="250" rx="28" fill="#fffaf0" />
      <text x="42" y="34" fontSize="14" fontWeight="900" fill="#991b1b">AB|CD</text>
      <text x="252" y="34" fontSize="14" fontWeight="900" fill="#991b1b">AC|BD</text>
      <text x="462" y="34" fontSize="14" fontWeight="900" fill="#991b1b">AD|BC</text>
      {[[30, "A", "B", "C", "D"], [240, "A", "C", "B", "D"], [450, "A", "D", "B", "C"]].map(([x, a, b, c, d]) => (
        <g key={x}>
          <path d={`M${x + 22} 138 H${x + 70} M${x + 70} 138 L${x + 120} 90 M${x + 70} 138 L${x + 120} 186 M${x + 120} 90 H${x + 175} M${x + 120} 186 H${x + 175}`} stroke="#111827" strokeWidth="6" strokeLinecap="round" />
          <text x={x + 185} y="94" fontSize="13" fontWeight="900">{a}</text><text x={x + 185} y="112" fontSize="13" fontWeight="900">{b}</text><text x={x + 185} y="190" fontSize="13" fontWeight="900">{c}</text><text x={x + 185} y="208" fontSize="13" fontWeight="900">{d}</text>
        </g>
      ))}
      <circle cx="320" cy="138" r="8" fill="#d97706" />
      <text x="274" y="232" fontSize="13" fontWeight="900" fill="#d97706">{labels.unresolved}</text>
    </svg>
  );
}

function TreeThinkingLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, LessonPractical, LessonQuiz } = shared;
  const c = copy[lang] || copy.es;
  const sections = c.sections;
  const [focus, setFocus] = useState("root");

  const definitionGrid = (items) => (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, body, tone]) => <InfoCard key={title} title={title} body={body} tone={tone || "stone"} />)}
    </div>
  );

  const focusOptions = ["root", "node", "branch", "tip", "ingroup", "outgroup"];

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{c.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{c.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">{c.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700">{tag}</span>)}</div>
            <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-5 text-red-950">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{c.mrcaLabel}</div>
              <p className="mt-2 text-lg font-black leading-8">{c.mrca}</p>
            </div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <FigureShell title={c.visual.topology}>
              <TreeFigure labels={c.visual} focus={focus} />
            </FigureShell>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{c.pathTitle}</div>
        <div className="grid gap-3 md:grid-cols-5">
          {c.path.map(([num, title, body]) => (
            <div key={num} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white">{num}</div>
              <div className="font-black text-stone-950">{title}</div>
              <p className="mt-2 text-xs font-semibold leading-5 text-stone-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow={sections.big[0]}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xl font-bold leading-9 text-stone-800">{sections.big[1]}</p>
            <p className="mt-4 leading-8 text-stone-600">{sections.big[2]}</p>
          </div>
          <div className="rounded-[2rem] bg-stone-950 p-6 text-white">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-red-200">MRCA</div>
            <p className="mt-3 text-lg font-bold leading-8 text-stone-100">{c.mrca}</p>
          </div>
        </div>
      </Section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Section eyebrow={sections.hierarchy[0]}>
          {definitionGrid(sections.hierarchy[1])}
          <div className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-black leading-7 text-red-950">{sections.hierarchy[2]}</div>
        </Section>
        <Section eyebrow={sections.characters[0]}>
          <p className="mb-5 leading-7 text-stone-600">{sections.characters[1]}</p>
          <FigureShell>
            <CharacterFigure labels={c.visual} />
          </FigureShell>
          <div className="mt-5">{definitionGrid(sections.characters[2])}</div>
          <div className="mt-4 rounded-3xl border border-amber-100 bg-amber-50 p-5 text-sm font-black leading-7 text-amber-950">{sections.characters[3]}</div>
        </Section>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Section eyebrow={sections.clades[0]}>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.clades[1].map(([title, body, tone], i) => (
              <div key={title} className={`rounded-[2rem] border p-5 ${toneClasses[tone]}`}>
                <CladeFigure type={i === 0 ? "mono" : i === 1 ? "para" : "poly"} labels={c.visual} />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 opacity-80">{body}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section eyebrow={sections.sampling[0]}>
          <div className="space-y-4">{sections.sampling[1].map(([title, body]) => <InfoCard key={title} title={title} body={body} />)}</div>
        </Section>
      </section>

      <Section eyebrow={sections.anatomy[0]} className="mt-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <FigureShell>
            <TreeFigure labels={c.visual} focus={focus} compact />
          </FigureShell>
          <div>
            <div className="grid grid-cols-2 gap-2">
              {focusOptions.map((key) => (
                <button key={key} type="button" onClick={() => setFocus(key)} className={`rounded-2xl border px-4 py-3 text-start text-sm font-black transition ${focus === key ? "border-red-200 bg-red-50 text-red-700" : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"}`}>
                  {c.visual[key]}
                </button>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              {sections.anatomy[1].map(([title, body]) => <InfoCard key={title} title={title} body={body} />)}
            </div>
          </div>
        </div>
      </Section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Section eyebrow={sections.treeTypes[0]}>
          <FigureShell>
            <ScaleFigure labels={c.visual} />
          </FigureShell>
          <div className="mt-5 space-y-4">
            {sections.treeTypes[1].map(([title, body], i) => <InfoCard key={title} title={title} body={body} tone={i === 0 ? "stone" : i === 1 ? "sky" : "red"} />)}
          </div>
        </Section>
        <Section eyebrow={sections.rooting[0]}>
          <div className="space-y-4">{sections.rooting[1].map(([title, body], i) => <InfoCard key={title} title={title} body={body} tone={i === 0 ? "red" : "stone"} />)}</div>
        </Section>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Section eyebrow={sections.complexity[0]}>
          <FigureShell>
            <QuartetFigure labels={c.visual} />
          </FigureShell>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {sections.complexity[1].map(([title, body]) => <InfoCard key={title} title={title} body={body} />)}
          </div>
        </Section>
        <section className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
          <div className="mb-5">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-200">{sections.traps[0]}</div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{c.mrcaLabel}</h2>
          </div>
          <FigureShell dark>
            <RotationFigure labels={c.visual} />
          </FigureShell>
          <div className="mt-5 space-y-4">
            {sections.traps[1].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-black">⚠️ {title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-300">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <Section eyebrow={sections.exam[0]}>
          <div className="overflow-hidden rounded-[2rem] border border-stone-200">
            {sections.exam[1].map(([cue, meaning], i) => (
              <div key={cue} className={`grid gap-2 px-5 py-4 text-sm md:grid-cols-[0.8fr_1.2fr] ${i % 2 ? "bg-stone-50" : "bg-white"}`}>
                <div className="font-black text-stone-950">{cue}</div>
                <div className="font-semibold leading-6 text-stone-600">{meaning}</div>
              </div>
            ))}
          </div>
        </Section>
        <Section eyebrow={sections.checkpoints[0]}>
          <div className="space-y-4">{sections.checkpoints[1].map(([title, body]) => <InfoCard key={title} title={title} body={body} tone="purple" />)}</div>
        </Section>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-200">{sections.checklist[0]}</div>
        <div className="grid gap-3 md:grid-cols-2">{sections.checklist[1].map(item => <label key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700"/><span>{item}</span></label>)}</div>
      </section>

      <LessonPractical lang={lang} lessonNo={lessonNo} />
      <LessonQuiz lang={lang} lessonNo={lessonNo} />
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

export default TreeThinkingLesson;

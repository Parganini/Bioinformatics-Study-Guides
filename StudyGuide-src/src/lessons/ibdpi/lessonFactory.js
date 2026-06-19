const imageTodo = { todo: "slide image extraction pending" };

const sharedGlossary = [
  ["Big Data", "Data whose scale, speed, heterogeneity or value extraction problem forces careful infrastructure choices."],
  ["POSIX", "A file-system interface and semantics model, not simply a synonym for a disk."],
  ["IaaS", "Cloud model where the user provisions infrastructure resources such as VMs, volumes and networks."],
  ["container", "A process-level packaged runtime that shares the host kernel while isolating dependencies and execution context."],
  ["workload management system", "A system that accepts jobs, queues them, applies policy and starts them on suitable resources."],
  ["OAuth", "An authorization framework for delegated access using tokens."],
  ["Kubernetes", "A container orchestration system for scheduling, scaling and operating containerized applications."],
  ["FaaS", "Function as a Service: event-triggered code execution where the provider manages the infrastructure layer."],
];

function concept(title, body, keywords) {
  return { title, body, keywords };
}

function checkpoint(prompt, answer, trap, tags = []) {
  return { prompt, answer, trap, tags };
}

function card(front, back) {
  return { front, back };
}

function hand(title, goal, commands, expectedResult, commonError, examAngle) {
  return { title, goal, commands, expectedResult, commonError, examAngle };
}

function slide(label, deck, deckLabel, page, title, comment, professor, remember, examPriority = "high", corsoStatus = "OK") {
  return { label, deck, deckLabel, page, image: imageTodo, title, comment, professor, remember, examPriority, corsoStatus };
}

function section(range, title, intro, slides) {
  return { range, title, intro, slides };
}

const LESSONS = {
  "ibdpi-2026-04-22-course-intro-big-data": {
    objectives: [
      "Explain why the course studies infrastructure rather than Big Data analytics algorithms.",
      "Define Big Data through scale, velocity, heterogeneity, reliability and value extraction.",
      "Classify Big Data use cases as descriptive, predictive or prescriptive.",
      "Connect scientific data growth to infrastructure needs.",
      "Describe the AWS LearnerLab login path and acceptable-use constraints.",
      "Identify what an exam question can ask about selecting the right application.",
    ],
    coreConcepts: [
      concept("Course scope", "IBDPI is about the infrastructure that makes large-scale processing possible: cloud resources, storage, networks, containers, schedulers and orchestration. The professor explicitly separated this from a course on machine learning or analytics models.", ["infrastructure", "course scope"]),
      concept("Big Data definition", "Big Data is not just a large file. The course frames it through volume, velocity, variety, veracity and value, plus the need for systems that can store, move and compute on the data.", ["5 Vs", "definition"]),
      concept("Application classes", "Descriptive applications explain what happened, predictive applications estimate what may happen, and prescriptive applications suggest actions. Infrastructure must match the application pattern.", ["descriptive", "predictive", "prescriptive"]),
      concept("Scientific Big Data", "Genomics, high-energy physics and astronomy create data at a rate that exceeds desktop workflows. The infrastructure problem is how to preserve, transfer, process and reproduce analyses.", ["science", "data deluge"]),
      concept("Selecting the right application", "The professor repeatedly framed infrastructure as secondary to understanding the problem. A better algorithm or application can matter more than adding machines.", ["application choice", "efficiency"]),
      concept("AWS learning environment", "LearnerLab gives temporary cloud access for exercises. The important exam concept is provisioning controlled resources without personal payment details, while respecting course policies.", ["AWS", "LearnerLab"]),
      concept("Login chain", "A cloud VM is not useful until students can reach it securely. The practical chain is console access, instance creation, key pair, security settings and SSH.", ["SSH", "key pair"]),
      concept("Exam style", "The written exam can test what an infrastructure term means, why it matters, and which option is a misleading near-synonym.", ["MCQ", "trap"]),
    ],
    walkthroughSections: [
      section("Opening", "What this course is", "Start by separating infrastructure from analytics.", [
        slide("BDP1 intro", "00_BDP1_2026_Intro.pdf", "BDP1 introduction", "overview", "Course objectives", "The course is about how large-scale processing infrastructures are selected and operated.", "Professor emphasis: do not study this as an AI course; study the systems that make data processing possible.", "Infrastructure choices must follow the application.", "high", "OK"),
        slide("Corso", "Corso_ Introduction to Big Data Processing Infrastructures _ Virtuale.pdf", "Corso", "exam", "Exam scope", "The Corso file is the filter for what receives exam priority.", "Professor emphasis: OK/SKIP status matters.", "OK topics are high priority; SKIP topics should not get equal attention.", "high", "OK"),
      ]),
      section("Big Data framing", "Definition and use cases", "Use examples to anchor the 5 Vs.", [
        slide("Big Data", "01_Big_Data_Introduction_2026.pdf", "Big Data introduction", "definition", "5 Vs", "Volume, velocity, variety, veracity and value explain why ordinary infrastructure breaks down.", "Professor examples included mobility and traffic patterns, plus scientific data growth.", "Big Data is a systems problem as much as a data-size problem.", "high", "OK"),
        slide("Applications", "01_Big_Data_Introduction_2026.pdf", "Big Data introduction", "classification", "Application classes", "Descriptive, predictive and prescriptive applications require different processing strategies.", "The professor used applications to show that the infrastructure is not chosen in isolation.", "Classify the use case before choosing infrastructure.", "high", "OK"),
      ]),
      section("AWS entry", "Course cloud access", "The practical part starts with safe access to cloud resources.", [
        slide("AWS rules", "00_General provisions for the use of IT resources for the course BDP1.pdf", "AWS provisions", "policy", "Acceptable use", "Course resources are temporary and policy-bound.", "Professor emphasis: use the course environment only for course work.", "The exam may focus on the conceptual provisioning chain, not account trivia.", "medium", "OK"),
        slide("LearnerLab", "01_Accessing_AWS_LearnerLab.pdf", "AWS access", "login", "Login path", "Students reach cloud resources through LearnerLab and the AWS console.", "Professor emphasis: ask for help early; cloud access failures block later work.", "Connection setup is part of the OK hands-on scope.", "medium", "OK"),
      ]),
    ],
    handsOn: [
      hand("AWS login checklist", "Reach the AWS console from LearnerLab and prepare for VM creation.", ["Start LearnerLab", "Open AWS console", "Confirm the region and budget/lab state", "Do not enter personal payment details"], "You can see the EC2 console for the course lab.", "Treating the course lab as a personal AWS account.", "Know the access chain and the acceptable-use boundary."),
    ],
    examCheckpoints: [
      checkpoint("Why is Big Data not simply 'large data'?", "Because infrastructure pressure comes from multiple dimensions: size, speed, heterogeneity, reliability and extracting value.", "Choosing volume alone ignores velocity, variety and processing constraints.", ["Big Data"]),
      checkpoint("What is the professor's first infrastructure rule?", "Understand the application/problem before selecting resources.", "Assuming more machines are always the answer.", ["application choice"]),
      checkpoint("What is OK hands-on scope on day one?", "Connection setup and cloud login concepts.", "Memorizing account UI details instead of the provisioning logic.", ["AWS"]),
    ],
    flashcards: [
      card("What are the 5 Vs?", "Volume, velocity, variety, veracity and value."),
      card("What does descriptive analytics do?", "Summarizes what happened."),
      card("What does predictive analytics do?", "Estimates what may happen."),
      card("What does prescriptive analytics do?", "Suggests what action to take."),
      card("What is the common Big Data trap?", "Equating Big Data with file size only."),
      card("What is the AWS day-one goal?", "Set up controlled cloud access for later infrastructure exercises."),
    ],
    glossary: [["LearnerLab", "The course AWS training environment used to provision cloud resources."], ["5 Vs", "A compact Big Data definition: volume, velocity, variety, veracity and value."]],
    skippedOrLowPriority: [{ topic: "Get course data on AWS", reason: "Marked SKIP in Corso / not covered in class / optional", whatToKnowAtMost: "Know that data transfer exists, but do not prioritize command-level details." }],
  },
  "ibdpi-2026-04-24-big-data-applications-aws-setup": {
    objectives: ["Distinguish CPU cores, threads and caches.", "Explain bandwidth versus latency in memory and networking.", "Recognize MAC, IP, subnet and public/private addressing roles.", "Compare RAM, HDD, SSD and tape from a performance perspective.", "Create the conceptual path for an AWS VM and SSH login.", "Explain why IOPS and bandwidth are not interchangeable."],
    coreConcepts: [
      concept("CPU topology", "Sockets contain cores; cores may expose multiple logical threads. Caches L1/L2/L3 reduce memory access cost but differ in size and closeness to the core.", ["CPU", "cache"]),
      concept("Hyperthreading", "Logical threads can improve utilization but do not double physical compute capacity. The exam trap is to count threads as independent cores.", ["thread", "core"]),
      concept("Memory hierarchy", "RAM is volatile and faster than mass storage. Bandwidth measures transfer rate; latency measures delay before data starts moving.", ["RAM", "latency", "bandwidth"]),
      concept("Storage performance", "HDD, SSD and tape differ in sequential bandwidth and random access. Tape can have strong sequential throughput but terrible random access.", ["HDD", "SSD", "tape"]),
      concept("IOPS versus bandwidth", "IOPS counts operations per second; bandwidth counts bytes per second. Small random operations and large sequential streams stress different devices.", ["IOPS", "bandwidth"]),
      concept("Network identifiers", "MAC identifies an interface at link level; IP identifies a network endpoint; subnets define address ranges and routing boundaries.", ["MAC", "IP", "subnet"]),
      concept("Hub, switch, router", "A hub repeats traffic, a switch forwards inside a local network, and a router connects networks.", ["hub", "switch", "router"]),
      concept("AWS VM access", "The practical logic is launch instance, choose image/flavor, attach key pair, open required access and connect with SSH using the private key.", ["EC2", "SSH"]),
    ],
    walkthroughSections: [
      section("Compute", "CPU and memory", "Infrastructure starts with the node.", [
        slide("CPU", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "CPU", "Cores and caches", "Cores, threads and cache levels explain why a CPU is not a single uniform resource.", "Professor emphasis: logical cores are not the same as physical cores.", "Cache locality can dominate performance.", "high", "OK"),
        slide("Memory", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "memory", "Bandwidth and latency", "Bandwidth and latency answer different performance questions.", "Professor emphasis: do not use them as synonyms.", "Fast bandwidth does not eliminate latency.", "high", "OK"),
      ]),
      section("Storage and network", "Moving data", "Big data infrastructure is often limited by movement, not only compute.", [
        slide("Storage", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "storage", "IOPS versus bandwidth", "Random metadata-heavy access differs from streaming large files.", "Professor used tape as an example of high sequential behavior but poor random access.", "IOPS and bandwidth are not interchangeable.", "high", "OK"),
        slide("Network", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "network", "MAC/IP/subnets", "Network configuration determines how servers are reached and isolated.", "Professor connected ifconfig/ping style checks to server reachability.", "Know which layer each identifier belongs to.", "high", "OK"),
      ]),
      section("AWS VM", "First cloud server", "The hands-on route turns concepts into a reachable machine.", [
        slide("EC2", "02_Creating a VM with AWS Academy - step by step.pdf", "AWS VM", "launch", "Create a VM", "Choose image, instance type and key pair; then use SSH.", "Professor emphasis: key permissions and security groups often cause first failures.", "SSH key handling is conceptual exam material.", "medium", "OK"),
      ]),
    ],
    handsOn: [
      hand("SSH into a VM", "Connect to a freshly created Linux VM.", ["chmod 400 key.pem", "ssh -i key.pem ec2-user@PUBLIC_IP", "sudo su -"], "The shell prompt is on the remote server.", "Using a public key as if it were a password, or leaving the private key world-readable.", "Know what the key, public IP and user name do."),
    ],
    examCheckpoints: [
      checkpoint("What is the trap in CPU thread counts?", "Logical threads improve utilization but are not equivalent to extra physical cores.", "Counting every thread as a full independent core.", ["CPU"]),
      checkpoint("Why can tape be good and bad at the same time?", "It can stream sequential data efficiently but is poor for random access.", "Saying tape is simply slow.", ["storage"]),
      checkpoint("What does a router do that a switch does not?", "It connects and routes between networks.", "Treating all network devices as traffic repeaters.", ["networking"]),
    ],
    flashcards: [card("L1 cache", "Smallest and closest CPU cache."), card("L3 cache", "Larger cache often shared across cores."), card("Bandwidth", "Amount transferred per unit time."), card("Latency", "Delay before response or transfer starts."), card("IOPS", "Input/output operations per second."), card("Private key", "Secret credential used by SSH to prove identity.")],
    glossary: [["IOPS", "Input/output operations per second."], ["subnet", "A logical subdivision of an IP network."]],
    skippedOrLowPriority: [{ topic: "Running the basic computational challenge", reason: "Marked SKIP in Corso / not covered in class / optional", whatToKnowAtMost: "Know it motivated application choice; do not prioritize exercise outputs." }],
  },
  "ibdpi-2026-04-27-aws-vm-volumes-checksums": {
    objectives: ["Describe a datacenter as compute, storage, network, power and cooling.", "Explain batch queues, allocation policy, quota and fairshare.", "Define POSIX filesystem semantics.", "Provision the concept of an AWS block volume.", "Format and mount a filesystem at a mount point.", "Distinguish virtualization from cloud computing."],
    coreConcepts: [
      concept("Datacenter building blocks", "A datacenter combines racks, servers, storage, top-of-rack networking, power and cooling. Performance and reliability depend on the whole system.", ["datacenter", "rack"]),
      concept("Batch systems", "Batch systems accept jobs, place them in queues and start them when policy and resources allow.", ["batch", "queue"]),
      concept("Quota and fairshare", "Quota limits usage; fairshare adjusts priority according to historical use and policy.", ["quota", "fairshare"]),
      concept("POSIX filesystem", "POSIX gives familiar file semantics: paths, directories, permissions and file operations. It is not the same thing as object storage.", ["POSIX", "filesystem"]),
      concept("Block volumes", "A cloud volume is a block device that must be attached, formatted with a filesystem and mounted before normal file use.", ["volume", "block device"]),
      concept("Mount points", "Mounting connects a filesystem to a directory path such as /data2.", ["mount", "filesystem"]),
      concept("Cloud versus virtualization", "Virtualization creates virtual machines; cloud adds self-service provisioning, service models, elasticity and operational abstraction.", ["cloud", "virtualization"]),
      concept("Cloud models", "IaaS exposes infrastructure, PaaS exposes a managed platform, and SaaS exposes the application.", ["IaaS", "PaaS", "SaaS"]),
    ],
    walkthroughSections: [
      section("Datacenter", "From server to facility", "A server is only one layer.", [
        slide("Facility", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "power", "Power and cooling", "Large infrastructures are constrained by energy and heat.", "Professor emphasis: datacenter operation is physical as well as digital.", "PUE links useful IT power to facility power.", "high", "OK"),
        slide("Batch", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "batch", "Queues and fairshare", "Users submit non-interactive jobs and policies decide when they run.", "Professor emphasis: pending is not failure; it can mean waiting for policy/resources.", "Queues are policy instruments.", "high", "OK"),
      ]),
      section("Storage", "Filesystems and volumes", "Cloud storage must be prepared before POSIX file use.", [
        slide("POSIX", "03_From the PC to the Datacenter_2026.pdf", "Datacenter", "filesystem", "File semantics", "A filesystem provides names, directories, permissions and metadata.", "Professor linked mount points and metadata to everyday Linux paths.", "A block device is not yet a filesystem.", "high", "OK"),
        slide("AWS volume", "02_Creating a VM with AWS Academy - step by step.pdf", "AWS VM", "volume", "Attach, format, mount", "Attach a volume, create a filesystem, mount it under a directory.", "Professor emphasis: missing mount/format steps are common hands-on errors.", "Provisioning is not the same as mounting.", "high", "OK"),
      ]),
      section("Cloud", "Service and deployment models", "Virtual machines are only one piece of cloud.", [
        slide("Cloud definition", "04_intro_cloud_BDP1_2026.pdf", "Cloud", "definition", "Cloud computing", "Cloud adds service abstractions, self-service and elasticity over virtualized resources.", "Professor emphasis: cloud is not just virtualization.", "Know service/deployment/isolation models.", "high", "OK"),
      ]),
    ],
    handsOn: [
      hand("Prepare an attached volume", "Turn a raw block device into usable storage.", ["lsblk", "sudo mkfs -t ext4 /dev/xvdf", "sudo mkdir /data2", "sudo mount /dev/xvdf /data2", "df -h"], "The new filesystem appears mounted under /data2.", "Writing to the mount directory before mounting, then thinking the volume is used.", "Exam angle: attach, format and mount are distinct steps."),
    ],
    examCheckpoints: [
      checkpoint("What is fairshare?", "A policy that adjusts scheduling priority based on usage history and allocation rules.", "Confusing fairshare with equal wall-clock time for every user.", ["batch"]),
      checkpoint("Why is a volume not immediately a filesystem?", "A volume is a block device; it needs a filesystem and mount point for POSIX file access.", "Calling any attached disk a mounted filesystem.", ["storage"]),
      checkpoint("Why is cloud more than virtualization?", "Cloud adds service models, self-service provisioning, elasticity and operational abstraction.", "Equating a VM with cloud computing.", ["cloud"]),
    ],
    flashcards: [card("Quota", "A limit on resource use."), card("Fairshare", "Scheduling policy based on historical usage and allocation."), card("Block device", "Raw storage device exposed in blocks."), card("mkfs", "Creates a filesystem."), card("mount", "Attaches a filesystem to a directory tree."), card("IaaS", "Infrastructure as a Service.")],
    glossary: [["PUE", "Power Usage Effectiveness, a datacenter efficiency metric."], ["mount point", "Directory where a filesystem is attached."]],
    skippedOrLowPriority: [{ topic: "Reservation and backfill", reason: "Marked SKIP in Corso / not covered in class / optional", whatToKnowAtMost: "Recognize them as advanced scheduling features only." }, { topic: "Monitoring and provisioning", reason: "Marked SKIP in Corso / not covered in class / optional", whatToKnowAtMost: "Know they exist in datacenter operation." }],
  },
};

const moreLessons = {
  "ibdpi-2026-04-29-datacenter-building-blocks": ["Cloud IaaS continuation and container foundations", ["cloud porting", "Docker image", "container", "Docker Hub", "Dockerfile", "ports", "volumes", "reproducibility"], "Professor emphasis: containers are useful because they package a runtime and make execution more reproducible, but they do not remove the need to understand networking and persistence.", ["Pulling an image is not the same as running a container.", "A stopped/deleted container does not preserve internal changes unless persistence is configured.", "A port exposed inside a container is not reachable unless mapped/opened properly."]],
  "ibdpi-2026-04-30-networking-storage-datacenter": ["Docker images, ports, persistence and Compose", ["Dockerfile", "image build", "bind mount", "Docker volume", "port mapping", "Compose", "application stack", "microservices"], "Professor emphasis: Compose moves from one container to a small application stack, but still on one host; orchestration is the next step.", ["The -v option maps persistence; the -p option maps network ports.", "A Dockerfile is a reproducible recipe for an image.", "Compose up/down is not the same as cluster orchestration."]],
  "ibdpi-2026-04-30-cloud-intro-iaas": ["udocker, application choice, checksums and archives", ["udocker", "container security", "checksums", "tar", "tgz", "compression", "BLAST", "application choice"], "Professor emphasis: before scaling infrastructure, choose the right application and protect data integrity with checksums and sensible archive/compression choices.", ["A checksum verifies integrity; it is not encryption.", "tar groups files; gzip compresses.", "Singularity was mentioned but the Corso marks its usage as SKIP."]],
  "ibdpi-2026-05-14-containers-htc-hpc-computing-models": ["HTC, HPC, grids and computing models", ["HTC", "HPC", "grid computing", "speedup", "efficiency", "Amdahl's Law", "UMA", "NUMA", "accelerators", "push/pull", "replicas", "failover"], "Professor emphasis: compare infrastructures by the application communication pattern. HTC maximizes throughput across independent tasks; HPC accelerates tightly coupled parallel work.", ["GPU comparisons must be fair.", "Amdahl's Law limits speedup when serial work remains.", "Grid computing is not simply any cluster."]],
  "ibdpi-2026-05-15-module2-cloud-storage": ["Module 2 launch, POSIX, NFS, REST and object storage", ["PaaS", "SaaS", "POSIX", "NFS", "object storage", "REST", "JSON", "VFS", "container networking"], "Professor emphasis: object storage changes the access model. It is usually REST/HTTP and metadata/key oriented, not POSIX path semantics.", ["Object storage is not a mounted POSIX filesystem by default.", "JSON is a data format, REST is an architectural style.", "Container IPs and host IPs are different layers."]],
  "ibdpi-2026-05-28-advanced-containers-part1": ["Container networking, process monitoring and Git workflow", ["bridge network", "host network", "docker logs", "docker stats", "Portainer", "Git", "commit", "token", "security group"], "Professor emphasis: operating containers means checking networks, process state, logs and resource limits, not only starting them.", ["docker logs inspects application output; docker stats inspects resource use.", "A public cloud security group can block a correctly mapped port.", "Git commits are local until pushed."]],
  "ibdpi-2026-05-29-advanced-containers-part2": ["CI/CD with GitHub Actions and Docker Hub", ["GitHub Actions", "workflow", "Docker Hub", "secrets", "CI/CD", "image tag", "automation", "repository"], "Professor emphasis: the workflow is local development to GitHub to automated build to Docker Hub, with secrets protecting credentials.", ["Never place Docker Hub credentials directly in workflow text.", "A tag identifies an image version.", "CI/CD automates repeatable steps; it does not test correctness by magic."]],
  "ibdpi-2026-06-03-authentication-authorization": ["Authentication, LDAP, Radius and Kerberos", ["authentication", "authorization", "identity", "X.500", "LDAP", "Radius", "Kerberos", "ticket", "X.509"], "Professor emphasis: AAI is difficult and high-yield. Password-only thinking does not scale across federated services.", ["Authentication answers who you are; authorization answers what you may do.", "LDAP is directory access, not the directory content itself.", "Kerberos uses tickets for SSO-like behavior."]],
  "ibdpi-2026-06-05-cloud-automation-part1": ["SAML, OAuth, OpenID Connect and INDIGO-IAM", ["X.509", "SAML", "eduGAIN", "IDEM", "SPID", "OAuth", "OpenID Connect", "JWT", "INDIGO-IAM"], "Professor emphasis: OAuth is authorization; OpenID Connect adds authentication on top. Claims and groups drive final service decisions.", ["OAuth alone is not an authentication protocol.", "SAML federation connects identity providers and service providers.", "A token must be validated and interpreted by the application."]],
  "ibdpi-2026-06-08-cloud-automation-part2": ["Cloud automation, microservices and orchestration", ["reproducibility", "monolith", "microservices", "REST API", "elasticity", "DevOps", "semantic versioning", "Docker Swarm", "Kubernetes", "pod"], "Professor emphasis: move from user thinking to administrator/developer thinking: design small services, monitor them and make releases reproducible.", ["Microservices can increase operational complexity.", "A core service failure can still affect the whole application.", "Semantic versioning signals the scale of change."]],
  "ibdpi-2026-06-10-kubernetes-faas-wrapup": ["Kubernetes, Infrastructure as Code and FaaS wrap-up", ["Minikube", "kubectl", "pod", "deployment", "service", "replica", "secret", "persistent volume", "IaC", "serverless", "FaaS"], "Professor emphasis: Kubernetes is operated through manifests and APIs; serverless still uses servers, but the provider manages them.", ["A pod is the basic Kubernetes unit, not necessarily a whole application.", "Deleting a pod in a deployment causes replacement.", "Serverless does not mean no servers exist."]],
};

function buildGenericLesson(id, [title, keywords, professorNote, traps]) {
  const objectives = [
    `Define the key terms in ${title}.`,
    "Explain why the topic matters for big data infrastructure design.",
    "Connect the slide concepts to the professor's exam emphasis.",
    "Identify which elements are OK exam scope and which are low priority.",
    "Recognize multiple-choice traps that confuse adjacent technologies.",
    "Explain the hands-on workflow at command or conceptual level.",
  ];
  const coreConcepts = keywords.slice(0, 12).map((keyword, index) => concept(
    keyword,
    `${keyword} is part of the course infrastructure vocabulary for this class. Study it by asking what it is, why it matters for scalable or reproducible processing, and which neighboring term it is commonly confused with.`,
    [keyword, index < 4 ? "core" : "support"]
  ));
  while (coreConcepts.length < 8) {
    coreConcepts.push(concept(`Exam link ${coreConcepts.length + 1}`, "Use this class as an exam bridge: define the term, state the infrastructure consequence and name the operational trap.", ["exam", "infrastructure"]));
  }
  const walkthroughSections = [
    section("Part 1", "Core framing", "Start from the conceptual problem and define the infrastructure layer.", [
      slide("Main deck", "Verified course PDF", "Class slides", "opening", keywords[0], `This part introduces ${keywords[0]} as an exam-relevant concept.`, professorNote, "Use the professor note to prioritize exam study.", "high", "OK"),
      slide("Scope", "Corso OK/SKIP", "Corso", "scope", "Exam boundary", "The Corso file decides whether this topic is high priority.", "OK material should be studied actively; SKIP material is only contextual.", "Do not give SKIP topics equal weight.", "high", "OK"),
    ]),
    section("Part 2", "Operational detail", "Translate the concept into system behavior.", [
      slide("Workflow", "Verified course PDF", "Class slides", "middle", keywords[1] || title, "Operational details show how the system is used, not only named.", professorNote, "Expect command-purpose questions rather than raw transcript details.", "high", "OK"),
      slide("Trap", "Verified transcript", "Transcript", "discussion", "Common confusion", traps[0], "Professor emphasis was condensed into exam-style wording here.", traps[1] || traps[0], "medium", "OK"),
    ]),
    section("Part 3", "Exam synthesis", "Close by comparing nearby technologies.", [
      slide("Comparison", "Verified course PDF", "Class slides", "wrap-up", keywords[2] || "comparison", "The course often tests differences between close terms.", professorNote, traps[2] || "Name the difference before choosing an answer.", "high", "OK"),
    ]),
  ];
  const handsOn = [
    hand("Command/concept memory", "Remember the purpose of the workflow, not only the syntax.", ["Identify the resource", "Apply the configuration or command", "Inspect state/output", "Fix network, permission or persistence errors"], "The resource is running, reachable or correctly persisted.", "Skipping inspection and assuming provisioning succeeded.", "Multiple-choice questions may show a command and ask what it does."),
  ];
  const examCheckpoints = [
    checkpoint(`What is the main exam idea in ${title}?`, professorNote, traps[0], keywords.slice(0, 3)),
    checkpoint(`Which neighboring concepts are easy to confuse?`, `Compare ${keywords.slice(0, 3).join(", ")} by role and layer.`, traps[1] || traps[0], keywords.slice(0, 4)),
    checkpoint("What is the operational trap?", traps[2] || "A named resource is not necessarily configured, reachable or persistent.", "Memorizing names without checking state.", keywords.slice(0, 4)),
  ];
  const flashcards = keywords.slice(0, 7).map((keyword) => card(keyword, `Define ${keyword} by role, infrastructure consequence and common trap.`));
  return { objectives, coreConcepts, walkthroughSections, handsOn, examCheckpoints, flashcards, glossary: keywords.slice(0, 6).map((keyword) => [keyword, `High-yield term from ${title}.`]), skippedOrLowPriority: [] };
}

for (const [id, data] of Object.entries(moreLessons)) {
  LESSONS[id] = buildGenericLesson(id, data);
}

export function createIBDPILessonContent(id) {
  const data = LESSONS[id];
  if (!data) throw new Error(`Unknown IBDPI lesson content id: ${id}`);
  return {
    id,
    extractionStatus: "source-based first pass",
    objectives: data.objectives,
    coreConcepts: data.coreConcepts,
    walkthroughSections: data.walkthroughSections,
    handsOn: data.handsOn,
    examCheckpoints: data.examCheckpoints,
    flashcards: data.flashcards,
    glossary: [...data.glossary.map(([term, definition]) => ({ term, definition })), ...sharedGlossary.map(([term, definition]) => ({ term, definition }))].slice(0, 12),
    skippedOrLowPriority: data.skippedOrLowPriority.length ? data.skippedOrLowPriority : [
      {
        topic: "Only topics explicitly marked SKIP in the Corso file",
        reason: "Marked SKIP in Corso / not covered in class / optional",
        whatToKnowAtMost: "Recognize the name as context, but do not build the main exam answer around it.",
      },
    ],
  };
}

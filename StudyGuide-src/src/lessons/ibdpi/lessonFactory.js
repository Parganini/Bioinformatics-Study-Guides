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

function slideAsset(label) {
  if (!label || label === "Corso") return imageTodo;
  return `ibdpi/slides/${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.png`;
}

function slide(label, deck, deckLabel, page, title, comment, professor, remember, examPriority = "high", corsoStatus = "OK", trap = "") {
  return { label, deck, deckLabel, page, image: slideAsset(label), title, comment, professor, remember, examPriority, corsoStatus, trap };
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

function importantSlide(label, deckLabel, page, title, comment, remember, trap, examPriority = "high", corsoStatus = "OK") {
  return slide(label, "Verified course PDF", deckLabel, page, title, comment, "Professor emphasis condensed from the matching class transcript and source deck.", remember, examPriority, corsoStatus, trap);
}

const importantSlideSets = {
  "ibdpi-2026-04-29-datacenter-building-blocks": [
    section("Cloud IaaS", "Porting applications to the cloud", "Use these slides to connect cloud abstraction to concrete application deployment.", [
      importantSlide("cloud-porting", "04 intro cloud BDP1", "IaaS application porting block", "IaaS advantages and tradeoffs", "The cloud gives fast provisioning and elasticity, but the user still owns OS/application choices in IaaS.", "Cloud is not just a VM; the exam asks what operational abstraction is added.", "Calling any virtual machine 'cloud' misses service model, elasticity and provisioning."),
      importantSlide("aws-iaas", "04 intro cloud BDP1", "AWS usage block", "AWS as course IaaS", "AWS is the hands-on environment for instantiating compute and storage for exercises.", "Know the conceptual route: instantiate, connect, attach storage, inspect.", "Memorizing console screenshots is weaker than knowing the resource lifecycle."),
    ]),
    section("Containers", "Basic container concepts", "Container slides become high priority because Docker is an OK topic.", [
      importantSlide("container-concept", "05 Containers", "container basics", "Container versus VM", "A container packages a runtime and process environment while sharing the host kernel.", "Containers improve reproducibility but do not replace infrastructure knowledge.", "Saying containers are lightweight VMs is too imprecise."),
      importantSlide("docker-hub", "05 Containers", "Docker Hub block", "Images and registries", "Docker Hub stores images that can be pulled and run locally or on cloud instances.", "Image, container, registry and Dockerfile are separate exam terms.", "Pulling an image is not the same as running a container."),
    ]),
    section("Persistence and networking", "Why running is not enough", "The professor emphasis is operational: a useful container must keep data and expose services intentionally.", [
      importantSlide("dockerfile", "05 Containers", "Dockerfile block", "Dockerfiles", "A Dockerfile records build steps so the image can be reproduced.", "Study the purpose of common Dockerfile instructions, not only syntax.", "A Dockerfile is the recipe, not the image itself."),
      importantSlide("ports-volumes", "05 Containers", "ports and volumes block", "Ports and volumes", "Ports make services reachable; volumes or bind mounts keep data outside the disposable container layer.", "Use -p for ports and -v for persistence.", "Confusing -p and -v is a classic command-memory trap."),
    ]),
  ],
  "ibdpi-2026-04-30-networking-storage-datacenter": [
    section("Docker operations", "Images, containers and builds", "These are the highest-yield Docker slides for command recognition.", [
      importantSlide("docker-build", "05 Containers", "build block", "Build an image", "Building converts a Dockerfile context into an image tag that can be reused.", "A build should be repeatable from source files.", "Changing a running container is not a reliable build process."),
      importantSlide("docker-run", "05 Containers", "run block", "Run and inspect", "Running creates a container instance from an image; inspection confirms state, ports and mounts.", "Always connect command syntax to lifecycle state.", "Assuming a container is reachable because it is running ignores port/firewall layers."),
    ]),
    section("Compose", "From one container to a stack", "Compose is the bridge toward orchestration, but it is still not Kubernetes.", [
      importantSlide("compose-yaml", "05 Containers", "Compose file block", "Docker Compose YAML", "Compose describes services, networks and volumes for a small multi-container application.", "Compose explains stack structure in one file.", "Compose is not the same as cluster orchestration."),
      importantSlide("compose-up-down", "05 Containers", "Compose commands block", "Compose lifecycle", "up, stop, start and down describe different operational actions on the stack.", "Know what is created, stopped or removed.", "Using down when you only wanted stop can remove resources."),
    ]),
    section("Low-priority boundary", "Optional container topics", "The course mentions adjacent container tools, but the Corso filter decides priority.", [
      importantSlide("export-import", "05 Containers", "optional image transfer", "Image export/import", "Image transfer may appear as context, but it should not outrank Dockerfiles, ports, volumes and Compose.", "Keep optional tooling below OK Docker fundamentals.", "Overstudying optional mechanics can crowd out exam-core container concepts.", "low", "SKIP"),
    ]),
  ],
  "ibdpi-2026-04-30-cloud-intro-iaas": [
    section("Userspace containers", "udocker and restricted environments", "This class links container execution to user privileges.", [
      importantSlide("udocker", "05 Containers", "udocker block", "udocker", "udocker lets users run container-like workflows without normal Docker daemon privileges.", "The exam angle is why userspace execution matters on shared systems.", "Do not confuse udocker with Docker Compose or Kubernetes."),
      importantSlide("security", "05 Containers", "privilege block", "Container privilege boundary", "Container tooling choices depend on local security policy and available privileges.", "Shared infrastructures often restrict privileged daemons.", "Container isolation does not mean unlimited user permission."),
    ]),
    section("Integrity and archives", "Checksums, tar and tgz", "These are small but explicit OK topics.", [
      importantSlide("checksum", "01 Big Data Introduction", "checksum block", "Checksums", "A checksum verifies whether data changed during transfer or storage.", "Integrity is not confidentiality.", "A checksum is not encryption and does not hide data."),
      importantSlide("tar-tgz", "01 Big Data Introduction", "archive block", "tar and tgz", "tar groups files into one archive; gzip compresses; tgz/tar.gz combines both.", "Know archive versus compression.", "Saying tar compresses by itself is the usual trap."),
    ]),
    section("SKIP boundary", "Mentioned but not exam-centered", "Keep Singularity and continuum topics visibly low priority when the Corso marks them that way.", [
      importantSlide("singularity", "05 Containers", "optional tools block", "Singularity usage", "Singularity may be named as an adjacent container tool, but its usage is not the main IBDPI exam target.", "Recognize the name only if needed.", "Do not build a full answer around Singularity usage.", "low", "SKIP"),
    ]),
  ],
  "ibdpi-2026-05-14-containers-htc-hpc-computing-models": [
    section("HTC and grids", "Throughput-first infrastructures", "Start by asking what communication pattern the application has.", [
      importantSlide("htc", "06 HTC", "HTC definition block", "HTC", "HTC optimizes throughput over many independent or loosely coupled tasks.", "Use HTC for many jobs over time, not tight low-latency parallelism.", "HTC is not simply a synonym for HPC."),
      importantSlide("grid", "06 HTC", "grid computing block", "Grid computing", "Grids federate distributed resources through common interfaces and policies.", "Grid suitability depends on loose coupling and distributed ownership.", "A grid is not just any cluster."),
    ]),
    section("HPC", "Parallel speed and limits", "These slides are likely multiple-choice magnets.", [
      importantSlide("speedup", "07 HPC", "speedup/efficiency block", "Speedup and efficiency", "Speedup compares runtimes; efficiency asks how well added resources are used.", "Efficiency is speedup divided by processing elements.", "High speedup can still mean poor efficiency."),
      importantSlide("amdahl", "07 HPC", "Amdahl block", "Amdahl's Law", "The serial fraction limits parallel speedup even with many processors.", "The exam trap is infinite speedup with infinite processors.", "Parallel resources cannot accelerate serial work."),
      importantSlide("uma-numa", "07 HPC", "memory architecture block", "UMA and NUMA", "Shared-memory architectures differ in whether memory access time is uniform.", "Memory topology affects parallel performance.", "Do not confuse UMA/NUMA with cloud service models."),
    ]),
    section("Distributed models", "Push/pull and data placement", "The computing-model slides turn infrastructure into workflow strategy.", [
      importantSlide("push-pull", "08 Computing Models", "job submission block", "Push versus pull", "Push and pull describe who initiates task dispatch or acquisition.", "Connect submission strategy to workload management.", "This is not about phone notifications or HTTP push."),
      importantSlide("data-driven", "08 Computing Models", "data strategies block", "Compute-driven versus data-driven", "Compute-driven workflows move data to computation; data-driven models place computation near data when appropriate.", "Data movement can dominate cost and reliability.", "Ignoring data location is a big infrastructure mistake."),
    ]),
  ],
  "ibdpi-2026-05-15-module2-cloud-storage": [
    section("Module 2 scope", "Beyond IaaS", "This class resets the course from VMs toward services and storage models.", [
      importantSlide("paas-saas", "00 BDPM2 introduction", "service models block", "PaaS and SaaS", "Module 2 extends cloud thinking beyond raw infrastructure toward managed platforms and applications.", "Know where user responsibility decreases.", "PaaS is not 'power as a service'."),
      importantSlide("course-cloud", "00 BDPM2 introduction", "course infrastructure block", "Using course cloud resources", "The course infrastructure remains the practical context for storage and services.", "Study operational purpose, not account trivia.", "Cloud UI details are less important than resource logic."),
    ]),
    section("Storage access", "POSIX, NFS and object storage", "These slides are the main storage contrast for Module 2.", [
      importantSlide("posix-nfs", "01 BDPM2 cloud storage", "POSIX/NFS block", "POSIX and NFS", "NFS exposes remote filesystem access with familiar path semantics, but remote latency and sharing matter.", "POSIX is semantics/interface, not a disk brand.", "Object storage is not automatically POSIX."),
      importantSlide("object-storage", "01 BDPM2 cloud storage", "object storage block", "Object storage", "Object storage organizes data as objects/keys and is commonly accessed through APIs.", "Know why it scales differently from mounted filesystems.", "Treating object storage as a normal mounted directory is the trap."),
    ]),
    section("APIs and data formats", "REST, JSON and VFS", "The professor links storage with application-facing interfaces.", [
      importantSlide("rest-json", "01 BDPM2 cloud storage", "REST/JSON block", "REST and JSON", "REST is an architectural style; JSON is a data representation often carried by APIs.", "Keep architecture and format separate.", "REST is not a file format."),
      importantSlide("vfs", "01 BDPM2 cloud storage", "VFS block", "Virtual file systems", "VFS layers can present different storage backends through filesystem-like abstractions.", "Ask what semantics are preserved and what is emulated.", "A VFS view does not make every backend truly POSIX."),
    ]),
  ],
  "ibdpi-2026-05-28-advanced-containers-part1": [
    section("Container networking", "Reachability across layers", "A running service may still be unreachable unless each layer is open.", [
      importantSlide("bridge-host", "02 BDPM2 containers part 1", "networking block", "Bridge and host networking", "Container networking determines how container processes see each other and the host network.", "Distinguish container IPs, host ports and cloud security groups.", "Mapping a port does not bypass a blocked security group."),
      importantSlide("ports", "02 BDPM2 containers part 1", "port exposure block", "Exposing services", "The service must listen, Docker must map the port, and the cloud/network must allow traffic.", "Debug reachability layer by layer.", "A correct application can look broken when the network layer blocks it."),
    ]),
    section("Operations", "Processes, logs and monitoring", "These slides are about running containers as services, not demos.", [
      importantSlide("logs", "02 BDPM2 containers part 1", "logging block", "docker logs", "Logs expose application output and failure clues.", "Use logs to explain behavior after startup.", "docker logs is not docker stats."),
      importantSlide("stats", "02 BDPM2 containers part 1", "process/resource block", "Process and resource state", "Stats and process inspection show whether a container is consuming resources or failing.", "Operation includes observation.", "Starting a container is not the same as confirming it is healthy."),
    ]),
    section("Development workflow", "Git and security", "This class begins connecting containers to reproducible development.", [
      importantSlide("git", "02 BDPM2 containers part 1", "Git workflow block", "Git workflow", "Commits, pushes and remote repositories structure reproducible development.", "Local commits and remote pushes are different steps.", "A commit is not visible remotely until pushed."),
      importantSlide("tokens", "02 BDPM2 containers part 1", "security block", "Tokens and credentials", "Tokens should be treated as secrets and not hard-coded into public files.", "Credentials belong in protected secret stores.", "Publishing a token in source code is an operational failure."),
    ]),
  ],
  "ibdpi-2026-05-29-advanced-containers-part2": [
    section("CI/CD", "Automating builds", "This lesson links GitHub activity to container image production.", [
      importantSlide("actions", "03 BDPM2 containers part 2", "GitHub Actions block", "GitHub Actions", "A workflow can build and publish images after repository events.", "Automation should make repeated steps reproducible.", "CI/CD does not prove the application is correct unless tests check it."),
      importantSlide("workflow", "03 BDPM2 containers part 2", "workflow YAML block", "Workflow YAML", "Workflow files describe triggers, jobs, steps and actions.", "Study what each block is for.", "A syntax-valid workflow can still be semantically wrong."),
    ]),
    section("Registries", "Docker Hub and image tags", "The registry slides are exam-useful because they separate source code from built artifacts.", [
      importantSlide("dockerhub", "03 BDPM2 containers part 2", "Docker Hub block", "Docker Hub publishing", "Published images can be pulled elsewhere by name and tag.", "Tags identify image versions or channels.", "latest is not a reliable scientific version by itself."),
      importantSlide("secrets", "03 BDPM2 containers part 2", "secrets block", "Secrets", "Registry credentials should be injected through GitHub secrets, not written in workflow text.", "Secret handling is part of secure automation.", "A working workflow with leaked credentials is still wrong."),
    ]),
    section("Release thinking", "From local to shared", "The professor frames automation as workflow discipline.", [
      importantSlide("pipeline", "03 BDPM2 containers part 2", "pipeline block", "Local to GitHub to registry", "The practical path is edit locally, commit, push, let the workflow build/publish, then pull/run the image.", "Know the sequence and artifacts.", "Confusing source repository with image registry blurs the pipeline."),
    ]),
  ],
  "ibdpi-2026-06-03-authentication-authorization": [
    section("AAI basics", "Identity versus permission", "The AAI classes are concept-heavy and easy to confuse.", [
      importantSlide("authn-authz", "04 BDPM2 AAI", "authentication/authorization block", "Authentication and authorization", "Authentication proves identity; authorization decides permitted actions.", "Always separate who you are from what you may do.", "A successful login does not imply all permissions."),
      importantSlide("identity", "04 BDPM2 AAI", "identity attributes block", "Identity attributes", "Services often rely on attributes, groups and policies rather than only usernames.", "Federated systems need structured identity information.", "Password-only thinking does not scale to federated services."),
    ]),
    section("Directory and access systems", "X.500, LDAP, Radius and Kerberos", "These slides are classic acronym traps.", [
      importantSlide("ldap", "04 BDPM2 AAI", "X.500/LDAP block", "X.500 and LDAP", "LDAP is a protocol for accessing directory information; X.500 is the directory standard context.", "LDAP is access to directory information, not the whole federation.", "Calling LDAP the database itself is imprecise."),
      importantSlide("radius", "04 BDPM2 AAI", "Radius block", "Radius", "Radius supports centralized authentication/authorization/accounting scenarios.", "Recognize its AAA role.", "Radius is not a container networking protocol."),
      importantSlide("kerberos", "04 BDPM2 AAI", "Kerberos block", "Kerberos", "Kerberos uses tickets to support authenticated access without repeatedly sending passwords.", "Tickets and realms are the key vocabulary.", "Kerberos tickets are not OAuth tokens."),
    ]),
    section("Certificates", "Public-key identity", "X.509 links identity to certificates and cryptography.", [
      importantSlide("x509", "04 BDPM2 AAI", "X.509 block", "X.509 certificates", "X.509 certificates bind identities to public keys under a certificate authority model.", "Certificates are credentials with trust chains.", "A certificate is not a password."),
    ]),
  ],
  "ibdpi-2026-06-05-cloud-automation-part1": [
    section("Federation", "SAML, eduGAIN, IDEM and SPID", "These slides explain institutional identity across services.", [
      importantSlide("saml", "04 BDPM2 AAI", "SAML block", "SAML", "SAML carries identity assertions between identity providers and service providers.", "Know IdP, SP and assertion roles.", "SAML is not OAuth."),
      importantSlide("edugain-idem-spid", "04 BDPM2 AAI", "federation block", "eduGAIN, IDEM and SPID", "Federations connect identity providers and services across organizations or national contexts.", "The exam may ask the role of federation, not implementation minutiae.", "Federation is not simply a shared password database."),
    ]),
    section("Modern web authorization", "OAuth and OpenID Connect", "This is one of the most important distinction pairs.", [
      importantSlide("oauth", "04 BDPM2 AAI", "OAuth block", "OAuth", "OAuth is a delegated authorization framework using tokens.", "OAuth answers delegated access, not identity by itself.", "OAuth alone is not an authentication protocol."),
      importantSlide("oidc", "04 BDPM2 AAI", "OIDC block", "OpenID Connect", "OIDC adds an authentication layer and identity information on top of OAuth 2.0 flows.", "Use OIDC when the question asks about login/identity over OAuth foundations.", "Answering OAuth when the question asks identity is the trap."),
    ]),
    section("IAM", "INDIGO-IAM", "The course-specific identity platform links tokens, groups and services.", [
      importantSlide("indigo", "04 BDPM2 AAI", "INDIGO-IAM block", "INDIGO-IAM", "INDIGO-IAM manages identity and access for services using federation and token-based flows.", "Claims and groups influence service authorization.", "IAM is not just a login page."),
    ]),
  ],
  "ibdpi-2026-06-08-cloud-automation-part2": [
    section("Automation mindset", "Reproducibility and DevOps", "This class moves from manual use to repeatable operation.", [
      importantSlide("automation", "05 BDPM2 cloud automation part 1", "automation block", "Cloud automation", "Automation makes infrastructure and deployment steps repeatable and reviewable.", "Manual success is not the same as reproducible infrastructure.", "Clicking through a console is hard to audit and repeat."),
      importantSlide("devops", "05 BDPM2 cloud automation part 1", "DevOps block", "DevOps", "DevOps combines development and operations practices around feedback, automation and ownership.", "Study DevOps as a practice model, not a tool name.", "Buying a tool does not mean doing DevOps."),
    ]),
    section("Architecture", "Monoliths and microservices", "The professor frames microservices as a tradeoff, not free magic.", [
      importantSlide("monolith", "05 BDPM2 cloud automation part 1", "monolith block", "Monolith", "A monolith packages multiple functions in one deployable application.", "It can be simpler to operate at small scale.", "Monolith does not automatically mean bad design."),
      importantSlide("microservices", "05 BDPM2 cloud automation part 1", "microservices block", "Microservices", "Microservices split an application into focused services with independent scaling and releases.", "They improve modularity but increase operational complexity.", "Microservices do not eliminate networking, monitoring or failure coupling."),
    ]),
    section("Orchestration preview", "Swarm, Kubernetes and pods", "These slides introduce the orchestration layer before the final class.", [
      importantSlide("swarm", "05 BDPM2 cloud automation part 1", "Docker Swarm block", "Docker Swarm", "Swarm is Docker-native orchestration for services across nodes.", "Recognize it as an orchestration option.", "Swarm is not Docker Compose."),
      importantSlide("k8s-pod", "05 BDPM2 cloud automation part 1", "Kubernetes preview block", "Kubernetes pod", "A pod is the basic deployable Kubernetes unit, often wrapping one or more containers.", "Pods are scheduled by the cluster, not manually SSH-managed as the main workflow.", "A pod is not the entire cluster."),
    ]),
  ],
  "ibdpi-2026-06-10-kubernetes-faas-wrapup": [
    section("Kubernetes hands-on", "Manifests and desired state", "The key is declarative operation through API objects.", [
      importantSlide("kubectl", "06 BDPM2 cloud automation part 2", "kubectl block", "kubectl and manifests", "kubectl applies and inspects YAML-defined Kubernetes resources.", "The manifest describes desired state; the control plane reconciles.", "Typing kubectl is not enough if you cannot name the resource kind."),
      importantSlide("deployment", "06 BDPM2 cloud automation part 2", "deployment block", "Deployments and replicas", "A deployment maintains the desired number of pod replicas.", "Deleting one managed pod usually triggers replacement.", "A pod failure is not the same as deleting the deployment."),
      importantSlide("service", "06 BDPM2 cloud automation part 2", "service block", "Services", "A service gives stable access to changing pods.", "Know why services exist when pods are replaceable.", "Using a pod IP directly is fragile."),
    ]),
    section("Infrastructure as Code", "Templates and orchestration", "These slides generalize Kubernetes manifests to infrastructure templates.", [
      importantSlide("iac", "06 BDPM2 cloud automation part 2", "IaC block", "Infrastructure as Code", "IaC describes infrastructure and services in machine-readable templates.", "Templates support review, repeatability and automation.", "IaC is not manual clicking written down after the fact."),
      importantSlide("template-orchestration", "06 BDPM2 cloud automation part 2", "template orchestration block", "Template-based orchestration", "Application stacks can be described as templates that platforms instantiate and manage.", "Know the split between template, orchestrator and created resources.", "A template is not the running infrastructure."),
    ]),
    section("Serverless and FaaS", "Functions as managed execution", "The wrap-up closes with provider-managed execution.", [
      importantSlide("serverless", "06 BDPM2 cloud automation part 2", "serverless block", "Serverless", "Serverless means the provider manages server provisioning and scaling for the execution model.", "Servers still exist; the abstraction shifts responsibility.", "Serverless does not mean no servers or no cost."),
      importantSlide("faas", "06 BDPM2 cloud automation part 2", "FaaS block", "Function as a Service", "FaaS runs functions in response to events, usually with short-lived execution.", "Study trigger, function, deployment and logs as the conceptual workflow.", "FaaS is not a long-running VM."),
    ]),
  ],
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
  const walkthroughSections = importantSlideSets[id] || [
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

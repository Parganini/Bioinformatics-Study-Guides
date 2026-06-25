import React, { useMemo, useState } from "react";
import { IBDPI_OK_TOPICS, IBDPI_SKIPPED_TOPICS } from "../../lessons/ibdpi/ibdpiManifest.js";

function optionLabel(index) {
  return String.fromCharCode(65 + index);
}

function makeQuestionId(question) {
  return question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function cleanOptionFeedback(text) {
  return text.replace(/^(Correct|Not correct)\.\s*/i, "");
}

const DISTRACTOR_FEEDBACK = {
  "Only files larger than RAM": "Not correct. This reduces Big Data to one size threshold. The technical definition is broader: volume, velocity, variety, veracity/value and the infrastructure pressure caused by processing.",
  "Any dataset stored in the cloud": "Not correct. Cloud storage is an infrastructure choice; it does not make a dataset Big Data by itself.",
  "Any AI training dataset": "Not correct. AI datasets can be Big Data, but the label depends on scale, heterogeneity, speed and processing constraints, not on the fact that AI is involved.",
  "tar compresses; gzip groups files": "Not correct. This reverses the tools: tar collects files into one archive, while gzip compresses bytes.",
  "checksum encrypts; tgz signs": "Not correct. Checksums are for integrity checks, and tgz is a compressed tar archive, not a digital signature mechanism.",
  "tgz is a filesystem": "Not correct. A tgz file is an archive format. It is not mounted as the filesystem where files live during normal operation.",
  "Confidentiality": "Not correct. Confidentiality is about preventing unauthorized reading. A checksum can reveal accidental or malicious changes, but it does not hide data.",
  "Compression": "Not correct. Compression reduces representation size. A checksum is a small integrity value computed from the data.",
  "Network routing": "Not correct. Routing decides packet paths through networks. Checksums verify data integrity after storage or transfer.",
  "It avoids all infrastructure work": "Not correct. A good application choice can reduce waste, but infrastructure design is still necessary for big data workloads.",
  "It is a licensing requirement": "Not correct. The point is technical: application choice changes CPU, memory, storage and network pressure.",
  "It replaces checksums": "Not correct. Choosing the right application and verifying file integrity solve different problems.",
  "A thread is always a physical core": "Not correct. Hardware threads can be logical execution contexts exposed by a core; they are not automatically separate cores.",
  "Threads are storage devices": "Not correct. Threads are execution contexts for computation. Storage devices are disks, volumes, arrays or networked storage systems.",
  "Threads replace caches": "Not correct. Threads and CPU caches are different parts of the architecture: threads execute work, caches reduce memory access cost.",
  "Bandwidth is delay; latency is throughput": "Not correct. The terms are swapped. Bandwidth is amount per time; latency is waiting time before response or transfer.",
  "They are synonyms": "Not correct. A system can have high bandwidth and still high latency, which matters for interactive and small random operations.",
  "Latency applies only to storage": "Not correct. Latency applies to memory, networks, storage and services. It is not limited to disks.",
  "CPU cycles": "Not correct. CPU cycles measure processor activity. IOPS measures storage operation rate.",
  "Network addresses per subnet": "Not correct. Subnets and IP addressing belong to networking. IOPS belongs to storage performance.",
  "Power usage": "Not correct. Power usage is datacenter efficiency territory, such as PUE. IOPS is an I/O performance metric.",
  "It has excellent random access": "Not correct. Tape is weak for random access because positioning is slow; it fits sequential cold archive patterns better.",
  "It replaces RAM": "Not correct. Tape is persistent archival storage with very different latency and bandwidth behavior from memory.",
  "It is POSIX by default": "Not correct. Tape is a storage medium. POSIX semantics come from filesystem interfaces, not automatically from the medium.",
  "A cloud provider": "Not correct. POSIX is not AWS, Azure or another provider; it refers to file interface and behavior expectations.",
  "A RAID level": "Not correct. RAID is a storage redundancy/performance arrangement. POSIX describes file semantics and APIs.",
  "A Docker image format": "Not correct. Docker images package container filesystems and metadata; POSIX is about operating-system file semantics.",
  "Mount, attach, format": "Not correct. You cannot mount a cloud block device before it is attached and has a filesystem.",
  "Format, detach, mount": "Not correct. Detaching removes the device from the server, so mounting after detach is the wrong operational sequence.",
  "SSH, gzip, route": "Not correct. SSH, gzip and routing do not turn a raw block volume into a mounted filesystem.",
  "A filesystem backup": "Not correct. Fairshare is a scheduling/accounting policy, not a data-protection copy.",
  "A network protocol": "Not correct. Protocols move data or define communication rules; fairshare influences job priority in batch systems.",
  "A Docker option": "Not correct. Docker options affect containers. Fairshare belongs to workload and batch scheduling policy.",
  "A checksum type": "Not correct. Quota limits resource usage; it is not a hash or integrity value.",
  "A cloud deployment model": "Not correct. Deployment models are public, private, hybrid or community clouds. Quota is an allocation limit.",
  "A cache level": "Not correct. Cache levels are CPU/memory hierarchy terms such as L1, L2 and L3. Quota is a policy limit.",
  "IaaS = application, SaaS = raw VM": "Not correct. This reverses the abstraction levels: IaaS exposes infrastructure such as VMs, while SaaS exposes finished software.",
  "PaaS = power as a service": "Not correct. PaaS is Platform as a Service, not power infrastructure.",
  "SaaS = storage area service": "Not correct. SaaS is Software as a Service; storage area network is a separate storage concept.",
  "Cloud forbids VMs": "Not correct. VMs are common in IaaS. Cloud adds service and operational layers on top of virtualization.",
  "Virtualization is always physical": "Not correct. Virtualization is explicitly about creating virtual resources over physical hardware.",
  "Cloud has no networks": "Not correct. Cloud systems still rely on networking, subnets, security groups and service connectivity.",
  "Protocol usage estimate": "Not correct. PUE is a datacenter power-efficiency metric, not a network protocol metric.",
  "Public user endpoint": "Not correct. Endpoints are service access points; PUE concerns facility energy overhead.",
  "Parallel unit efficiency": "Not correct. Parallel efficiency is speedup divided by processing elements. PUE is Power Usage Effectiveness.",
  "NAS has no network": "Not correct. The N in NAS is network; NAS provides storage over a networked file-service model.",
  "SAN means server archive number": "Not correct. SAN is Storage Area Network, not a server numbering or archive label.",
  "TAN is a Docker feature": "Not correct. TAN appears in the storage-system discussion; it is not part of Docker container configuration.",
  "Tightly coupled low-latency parallel jobs": "Not correct. That description fits HPC more than HTC. HTC favors many independent or loosely coupled tasks.",
  "Single-thread latency only": "Not correct. HTC is about aggregate throughput across many jobs, not optimizing one thread's response time.",
  "Filesystem formatting": "Not correct. Formatting a filesystem is storage administration, not the defining goal of HTC.",
  "Only web hosting": "Not correct. HPC is about high-performance computation, simulations and parallel workloads, not merely serving web pages.",
  "Cold archives": "Not correct. Cold archives are storage/data-management use cases. HPC focuses on computation.",
  "Identity federation": "Not correct. Identity federation belongs to AAI topics such as SAML, eduGAIN and OIDC, not HPC performance.",
  "Compression always helps": "Not correct. Amdahl's Law is about serial fractions limiting speedup; compression is unrelated unless it changes the workload bottleneck.",
  "OAuth authenticates users": "Not correct. OAuth is an authorization framework, and it is not what Amdahl's Law describes.",
  "Containers need volumes": "Not correct. Containers and volumes are relevant to persistency, but Amdahl's Law is a parallel-computing limit.",
  "Checksum divided by archive size": "Not correct. That ratio is not a parallel efficiency metric. Efficiency compares achieved speedup to resources used.",
  "Latency times bandwidth": "Not correct. Latency and bandwidth are performance properties, but their product is not the definition of parallel efficiency.",
  "GPU memory size": "Not correct. GPU memory capacity may constrain workloads, but efficiency measures how well processing elements are used.",
  "Universal mount archive": "Not correct. This sounds like a storage/archive acronym, but UMA is a memory-architecture term.",
  "User managed authorization": "Not correct. Authorization belongs to AAI. UMA here means Uniform Memory Access.",
  "Untrusted machine account": "Not correct. UMA describes uniform memory access latency from processors.",
  "GPUs never accelerate code": "Not correct. GPUs can accelerate suitable parallel workloads; the caution is about fair benchmarking.",
  "CPUs cannot run serial code": "Not correct. CPUs are well suited for serial control-heavy work. The comparison issue is optimization and data movement.",
  "GPU means grid protocol unit": "Not correct. GPU means Graphics Processing Unit, used as an accelerator for some parallel computation.",
  "A REST format": "Not correct. REST is an API architectural style. A WMS manages jobs and scheduling.",
  "An archive utility": "Not correct. Archive utilities package files. A workload management system handles job queues and execution policy.",
  "A checksum store": "Not correct. Checksums verify data integrity; WMS software manages computational workloads.",
  "How tar compresses files": "Not correct. tar does not compress by itself, and push/pull here is about job dispatch, not archives.",
  "Which cache is closest": "Not correct. Cache levels belong to CPU topology. Push/pull describes who initiates task placement or execution.",
  "Which IDP signs SAML": "Not correct. IDP signatures belong to federation. Push/pull is a workload-management strategy.",
  "A CPU thread": "Not correct. A replica is a data copy for locality, policy or resilience, not an execution context.",
  "A Dockerfile line": "Not correct. Dockerfile lines build images; replicas are copies of data or service instances depending on context.",
  "A Kerberos ticket": "Not correct. Kerberos tickets prove authentication state. Replicas are data-management copies.",
  "Making a filesystem POSIX": "Not correct. POSIX semantics are a filesystem/interface matter; disaster recovery is service and data recovery after failure.",
  "Opening Docker port 80": "Not correct. Port exposure is container networking. Disaster recovery is a broader continuity plan.",
  "Running chmod": "Not correct. chmod changes permissions on files; it is not failover or recovery planning.",
  "A running process": "Not correct. The running process is the container instance. The image is the template used to create it.",
  "A mounted volume": "Not correct. Volumes store persistent data. Images package application/runtime layers.",
  "A subnet": "Not correct. A subnet is a network-addressing concept, not a container image artifact.",
  "A checksum only": "Not correct. A Dockerfile can produce reproducible builds; a checksum alone only verifies content.",
  "A cloud billing account": "Not correct. Billing accounts handle costs and ownership. Dockerfiles define image build steps.",
  "A Kerberos realm": "Not correct. Kerberos realms are authentication domains, not Docker build recipes or DevOps practices.",
  "Maps ports": "Not correct. Port mapping is the role of -p. The -v flag is for volumes or bind mounts.",
  "Deletes an image": "Not correct. Removing images uses Docker image commands, not the -v run option.",
  "Starts Kubernetes": "Not correct. Kubernetes is a separate orchestration system; -v is a Docker run mount option.",
  "Creates a checksum": "Not correct. Docker -p publishes ports. Checksums are computed with checksum tools, not container port flags.",
  "Formats a filesystem": "Not correct. Formatting creates a filesystem on a block device; -p maps container ports.",
  "Requests fairshare": "Not correct. Fairshare belongs to batch scheduling policy. Docker -p exposes network ports.",
  "Federated identity": "Not correct. Federated identity belongs to AAI. Compose describes multi-container applications on one host.",
  "Replacing Kubernetes in production always": "Not correct. Compose is useful for local/single-host stacks, but it is not a universal replacement for cluster orchestration.",
  "Creating POSIX filesystems": "Not correct. Compose can mount volumes, but it does not create POSIX filesystem semantics by itself.",
  "Replace checksums": "Not correct. udocker is about running containers without normal Docker privileges; it does not verify file integrity.",
  "Create SAML tokens": "Not correct. SAML tokens/assertions come from identity federation flows, not udocker.",
  "Measure PUE": "Not correct. PUE is a datacenter power metric. udocker is a userspace container tool.",
  "Always a mounted NFS directory": "Not correct. Object storage is usually accessed by object/key APIs; NFS is a file-service interface.",
  "A CPU cache": "Not correct. CPU caches are processor memory hierarchy. Object storage stores data objects through service APIs.",
  "A Docker volume only": "Not correct. Docker volumes are container storage mounts. Object storage is a broader cloud storage model.",
  "A data format": "Not correct. JSON is a data format; REST is the architectural style often used to expose resources.",
  "A filesystem": "Not correct. A filesystem provides file naming and access semantics. REST describes API interaction style.",
  "A batch queue": "Not correct. Batch queues manage jobs. REST describes stateless resource-oriented API design.",
  "A cloud deployment model": "Not correct. Cloud deployment models describe where cloud resources live. JSON is a syntax for exchanging structured data.",
  "A network switch": "Not correct. A switch forwards network frames. JSON represents data as text objects, arrays and values.",
  "A Kubernetes node": "Not correct. A Kubernetes node runs workloads. JSON is a data interchange format frequently used by APIs.",
  "New function server": "Not correct. This expands the acronym incorrectly. NFS means Network File System.",
  "Node filesystem scheduler": "Not correct. That phrase mixes Kubernetes/node and scheduling vocabulary; NFS is remote filesystem access.",
  "Network federation service": "Not correct. Federation belongs to identity systems. NFS is a network file service.",
  "CPU topology": "Not correct. docker logs shows application/container output, not cores, sockets, caches or NUMA layout.",
  "SAML assertions": "Not correct. SAML assertions are identity-federation messages, not Docker runtime logs.",
  "RAID stripes": "Not correct. RAID stripes are storage layout details. docker logs reads container output streams.",
  "Deciding permitted actions": "Not correct. That is authorization. Authentication answers who or what the entity is.",
  "Compressing files": "Not correct. Compression changes data representation size; it does not establish identity.",
  "Scheduling jobs": "Not correct. Scheduling is workload management. Authentication proves identity.",
  "Proving password correctness only": "Not correct. Password checking is one authentication method. Authorization is about permissions after identity is known.",
  "Archiving data": "Not correct. Archiving stores or packages data. Authorization decides access rights.",
  "Launching an EC2 VM": "Not correct. VM launch is an IaaS operation; authorization decides whether that operation is allowed.",
  "A container engine": "Not correct. LDAP is a directory-access protocol, not Docker or another runtime.",
  "A GPU metric": "Not correct. GPU metrics measure accelerator behavior. LDAP accesses directory information.",
  "A compression tool": "Not correct. Compression tools reduce data size. LDAP queries and manages directory entries.",
  "Object storage APIs": "Not correct. Object storage APIs address data objects. Kerberos is a ticket-based authentication system.",
  "Docker images": "Not correct. Docker images are container templates. Kerberos uses tickets for authentication.",
  "PUE calculation": "Not correct. PUE is facility power efficiency. Kerberos is about authentication tickets.",
  "Batch fairshare": "Not correct. Fairshare is scheduler policy. X.509 concerns public-key certificates.",
  "Docker Compose networks": "Not correct. Compose networks connect containers. X.509 certificates support identity and secure communication.",
  "Tape random access": "Not correct. Tape access pattern is a storage-performance issue. X.509 is an identity/certificate standard.",
  "Filesystem mounting": "Not correct. Mounting attaches a filesystem into a path tree. SAML handles federation messages between identity and service providers.",
  "GPU acceleration": "Not correct. GPU acceleration belongs to HPC/accelerators. SAML belongs to authentication and federation.",
  "Image compression": "Not correct. Image compression changes binary size. SAML exchanges identity assertions.",
  "Authentication protocol by itself": "Not correct. OAuth delegates authorization; OpenID Connect adds the authentication layer on top.",
  "Directory schema": "Not correct. Directory schemas belong to LDAP/X.500 style directories. OAuth is delegated authorization.",
  "Container runtime": "Not correct. Container runtimes run containers. OAuth manages delegated access decisions.",
  "RAID parity": "Not correct. RAID parity protects storage arrays. OpenID Connect is an identity layer over OAuth.",
  "NFS mounting": "Not correct. NFS mounting provides remote filesystem access. OIDC provides identity information and ID tokens.",
  "Batch queues": "Not correct. Batch queues schedule jobs. OIDC is used in authentication/federated identity flows.",
  "A Docker image registry": "Not correct. Registries store container images. INDIGO-IAM manages identity, groups and access tokens.",
  "A filesystem type": "Not correct. INDIGO-IAM is not ext4, NFS or another filesystem; it is an identity and access service.",
  "An HPC benchmark": "Not correct. Benchmarks measure performance. INDIGO-IAM is used for authentication/authorization workflows.",
  "They eliminate networking": "Not correct. Microservices usually increase network communication between services; they do not remove it.",
  "They require no monitoring": "Not correct. Microservices need strong monitoring because failures and dependencies are distributed.",
  "They are always simpler than monoliths": "Not correct. They can improve scaling and ownership, but they add deployment, networking and observability complexity.",
  "A cloud storage protocol": "Not correct. DevOps is an operating and development practice, not an object or file storage protocol.",
  "A checksum algorithm": "Not correct. Checksums verify data integrity. DevOps is about development, operations and feedback loops.",
  "A public IP": "Not correct. A pod may receive cluster networking, but the pod itself is the deployable workload unit, not an IP address.",
  "A Docker Hub token": "Not correct. Registry tokens authenticate image access. Pods encapsulate one or more containers and their resources.",
  "A RAID group": "Not correct. RAID groups belong to storage arrays. Pods belong to Kubernetes workload scheduling.",
  "Formats block devices": "Not correct. Formatting block devices is storage setup. Deployments control desired pod replica state.",
  "Authenticates with SAML": "Not correct. SAML belongs to identity federation. Kubernetes deployments manage workload rollout and replica state.",
  "Compresses archives": "Not correct. Archive compression is done with tools such as gzip; deployments manage Kubernetes pods.",
  "Writing data inside Docker images": "Not correct. IaC describes infrastructure and services as templates; baking mutable data into images is not the idea.",
  "Manual clicking only": "Not correct. IaC is specifically meant to reduce manual clicking by using machine-readable descriptions.",
  "A checksum table": "Not correct. Checksums verify content. IaC templates describe desired infrastructure.",
  "There are literally no servers": "Not correct. Servers still exist; the provider hides provisioning and management from the user.",
  "It is only SaaS": "Not correct. Serverless is a cloud execution model and can include FaaS; it is not simply SaaS.",
  "It means no cost": "Not correct. Serverless changes billing and scaling models, but resources still cost money when used.",
  "Fairshare as a Service": "Not correct. Fairshare is a scheduler policy concept, not the meaning of FaaS.",
  "Filesystem archive access": "Not correct. Filesystem/archive access concerns storage. FaaS is event-triggered function execution.",
  "Federated authentication assertion": "Not correct. Federated assertions belong to SAML/OIDC identity flows. FaaS runs functions in response to events."
};

function q(question, options, correct, explanation, trap, module = "M1", optionFeedback = null) {
  const feedback = optionFeedback || options.map((option, optionIndex) => {
    if (optionIndex === correct) {
      return `Correct. ${explanation}`;
    }
    if (!DISTRACTOR_FEEDBACK[option]) {
      throw new Error(`Missing IBDPI option feedback for "${option}" in "${question}"`);
    }
    return DISTRACTOR_FEEDBACK[option];
  });
  return { id: makeQuestionId(question), question, options, correct, explanation, trap, module, optionFeedback: feedback };
}

function qConcept(question, optionData, correct, explanation, trap, module = "BDP1") {
  return q(
    question,
    optionData.map(([option]) => option),
    correct,
    explanation,
    trap,
    module,
    optionData.map(([, feedback], optionIndex) => optionIndex === correct ? `Correct. ${explanation}` : feedback)
  );
}

function distributeCorrectOption(item, index) {
  const offset = index % item.options.length;
  if (offset === 0) return item;
  const rotate = (values) => values.map((_, newIndex) => {
    const oldIndex = (newIndex - offset + values.length) % values.length;
    return values[oldIndex];
  });
  return {
    ...item,
    options: rotate(item.options),
    optionFeedback: rotate(item.optionFeedback),
    correct: (item.correct + offset) % item.options.length,
  };
}

const QUESTIONS = [
  q("Which definition best captures Big Data in infrastructure terms?", ["Only files larger than RAM", "Data whose size, speed, variety or value extraction creates infrastructure pressure", "Any dataset stored in the cloud", "Any AI training dataset"], 1, "The 5 Vs matter because they create storage, transfer, processing and reliability constraints.", "Volume alone is not enough."),
  q("Which pair is most accurate?", ["tar compresses; gzip groups files", "tar groups files; gzip compresses", "checksum encrypts; tgz signs", "tgz is a filesystem"], 1, "tar creates an archive; gzip compresses it, producing tgz/tar.gz.", "Do not confuse archiving with compression."),
  q("What is a checksum used for?", ["Confidentiality", "Integrity verification", "Compression", "Network routing"], 1, "A checksum helps detect whether data changed during storage or transfer.", "It is not encryption."),
  q("Why can choosing the right application reduce infrastructure pressure?", ["It avoids all infrastructure work", "The algorithm/application can dominate resource needs", "It is a licensing requirement", "It replaces checksums"], 1, "Better application choice can reduce the need for brute-force scaling.", "More machines are not always the answer."),
  q("What is the infrastructure impact of choosing an indexed or optimized algorithm?", ["Always buy more cloud machines first", "It can reduce runtime and data-access pressure before scaling hardware", "Checksums make searches faster", "It turns storage into a SAN"], 1, "Algorithmic structure can change the amount of CPU, memory, storage and network capacity needed.", "Do not turn an algorithm-choice problem into a cloud-capacity answer.", "M1", [
    "Adding machines may help later, but it does not fix an unnecessarily expensive algorithmic strategy.",
    "Correct. Indexed or optimized methods can reduce the work that infrastructure must absorb.",
    "Checksums verify integrity after storage or transfer; they do not accelerate search or indexing.",
    "SAN is a storage architecture; it is not the result of choosing a better algorithm.",
  ]),
  q("Why should huge uncompressed ASCII files usually not be moved around casually?", ["Because ASCII cannot be checksummed", "Because compression/archive choices reduce transfer and storage pressure", "Because tar encrypts the file", "Because POSIX forbids text files"], 1, "Huge text data can create avoidable transfer and storage pressure when a compressed archive is appropriate.", "Do not confuse compression, archiving and integrity checks.", "M1", [
    "ASCII files can be checksummed; checksum is about integrity, not whether text data can be moved.",
    "Correct. tar/tgz and compression choices matter because data movement is part of infrastructure cost.",
    "tar groups files; encryption is a different security operation.",
    "POSIX defines file interface/semantics; it does not forbid text files.",
  ]),
  q("Which statement about CPU threads is safest?", ["A thread is always a physical core", "Logical threads can improve utilization but do not equal new physical cores", "Threads are storage devices", "Threads replace caches"], 1, "Hyperthreading exposes logical execution contexts, not full independent cores.", "Counting logical threads as full cores is a trap."),
  q("Which is the main difference between bandwidth and latency?", ["Bandwidth is delay; latency is throughput", "Bandwidth is transfer rate; latency is response delay", "They are synonyms", "Latency applies only to storage"], 1, "Bandwidth measures amount per time; latency measures waiting time.", "Fast bandwidth does not eliminate latency."),
  q("What does IOPS measure?", ["CPU cycles", "Input/output operations per second", "Network addresses per subnet", "Power usage"], 1, "IOPS is useful for small/random I/O behavior.", "Bandwidth and IOPS answer different questions."),
  q("Why can tape be useful in large infrastructures?", ["It has excellent random access", "It can be cost-effective for cold/sequential data", "It replaces RAM", "It is POSIX by default"], 1, "Tape is often useful for cold archival data with sequential access patterns.", "Tape is not good for random access."),
  q("What is POSIX?", ["A cloud provider", "A filesystem/interface semantics concept", "A RAID level", "A Docker image format"], 1, "POSIX describes familiar file operations and semantics.", "It is not simply any disk."),
  q("Which sequence makes a cloud block volume usable as files?", ["Attach, format, mount", "Mount, attach, format", "Format, detach, mount", "SSH, gzip, route"], 0, "The block device must be attached, given a filesystem and mounted.", "Provisioning alone is not mounting."),
  q("What is fairshare in a batch system?", ["A filesystem backup", "A scheduling policy considering usage/allocation", "A network protocol", "A Docker option"], 1, "Fairshare adjusts priority according to policy and historical use.", "It is not simple equal time for every user."),
  q("What does quota usually express?", ["A limit on resource use", "A checksum type", "A cloud deployment model", "A cache level"], 0, "Quota constrains the amount of resource a user/project may consume.", "Do not confuse quota with fairshare priority."),
  q("Which is the correct cloud-service mapping?", ["IaaS = application, SaaS = raw VM", "IaaS = infrastructure, PaaS = platform, SaaS = software application", "PaaS = power as a service", "SaaS = storage area service"], 1, "IaaS, PaaS and SaaS describe different abstraction levels.", "IaaS is not just 'any cloud'."),
  q("Why is cloud not just virtualization?", ["Cloud forbids VMs", "Cloud adds service models, provisioning, elasticity and abstraction", "Virtualization is always physical", "Cloud has no networks"], 1, "Virtualization is a component; cloud adds operational/service layers.", "A VM alone is not the full cloud concept."),
  q("What is PUE?", ["Protocol usage estimate", "Power Usage Effectiveness", "Public user endpoint", "Parallel unit efficiency"], 1, "PUE measures datacenter facility efficiency.", "It is power/cooling scope, not network scope."),
  q("Which storage relation is correct?", ["DAS is directly attached storage", "NAS has no network", "SAN means server archive number", "TAN is a Docker feature"], 0, "DAS, NAS, SAN and TAN describe different storage attachment/access architectures.", "Do not collapse all storage systems into 'disk'."),
  q("What is HTC optimized for?", ["Tightly coupled low-latency parallel jobs", "High throughput across many independent or loosely coupled tasks", "Single-thread latency only", "Filesystem formatting"], 1, "HTC maximizes throughput over many tasks.", "HTC is not HPC."),
  q("What is HPC optimized for?", ["Coordinated high-performance parallel computation", "Only web hosting", "Cold archives", "Identity federation"], 0, "HPC targets performance for tightly coupled or high-performance workloads.", "Do not define HPC as any cluster."),
  q("What does Amdahl's Law warn about?", ["Compression always helps", "Serial fractions limit parallel speedup", "OAuth authenticates users", "Containers need volumes"], 1, "Remaining serial work caps achievable speedup.", "Infinite processors do not give infinite speedup."),
  q("What is efficiency in parallel computing?", ["Speedup divided by number of processing elements", "Checksum divided by archive size", "Latency times bandwidth", "GPU memory size"], 0, "Efficiency tells how well added resources are used.", "High speedup can still have low efficiency."),
  q("What is UMA?", ["Uniform Memory Access", "Universal mount archive", "User managed authorization", "Untrusted machine account"], 0, "UMA means memory access time is uniform from processors.", "Do not confuse UMA/NUMA with cloud models."),
  q("Why can GPU comparisons be misleading?", ["GPUs never accelerate code", "Comparisons may use different optimization levels or include data-transfer costs unfairly", "CPUs cannot run serial code", "GPU means grid protocol unit"], 1, "CPU/GPU comparisons are only meaningful when optimization level, workload fit and data movement are considered.", "Compare optimized implementations and include data movement."),
  q("What is a workload management system?", ["A REST format", "Software that queues, schedules and manages jobs", "An archive utility", "A checksum store"], 1, "WMS handles job submission and execution policy.", "It is not merely a shell script."),
  q("Push versus pull job submission concerns what?", ["Who initiates work placement/execution", "How tar compresses files", "Which cache is closest", "Which IDP signs SAML"], 0, "It describes job/task dispatch strategy.", "It is not network push notifications."),
  q("What is a replica in data management?", ["An extra logical/physical copy used for access, policy or resilience", "A CPU thread", "A Dockerfile line", "A Kerberos ticket"], 0, "Replicas support availability, locality or policy.", "Replicas are not automatically backups unless managed as such."),
  q("What is disaster recovery about?", ["Recovering service/data after major failure", "Making a filesystem POSIX", "Opening Docker port 80", "Running chmod"], 0, "It concerns failover and recovery planning.", "It is broader than a single retry."),
  q("What is a Docker image?", ["A running process", "A packaged filesystem/runtime template used to start containers", "A mounted volume", "A subnet"], 1, "Images are templates; containers are running instances.", "Image and container are not synonyms."),
  q("What does a Dockerfile provide?", ["A reproducible recipe for building an image", "A checksum only", "A cloud billing account", "A Kerberos realm"], 0, "A Dockerfile records image build steps.", "It is not the same as the built image."),
  q("What does Docker -v commonly do?", ["Maps persistence through a volume or bind mount", "Maps ports", "Deletes an image", "Starts Kubernetes"], 0, "The -v option maps a volume or bind mount for persistent or shared data.", "Do not confuse -v with -p."),
  q("What does Docker -p commonly do?", ["Maps host/container ports", "Creates a checksum", "Formats a filesystem", "Requests fairshare"], 0, "It exposes container service ports through host ports.", "Port mapping can still be blocked by firewall/security groups."),
  q("What is Docker Compose best for?", ["Defining and running multi-container stacks on one host", "Federated identity", "Replacing Kubernetes in production always", "Creating POSIX filesystems"], 0, "Compose uses YAML to describe services, networks and volumes.", "Compose is not the full cluster orchestration story."),
  q("Why is udocker useful?", ["Run containers in userspace where normal Docker privileges may not be available", "Replace checksums", "Create SAML tokens", "Measure PUE"], 0, "udocker supports user-space container execution.", "It does not replace understanding container images, volumes and runtime behavior."),
  q("What is object storage?", ["Key/object-based storage commonly accessed through APIs rather than POSIX paths", "Always a mounted NFS directory", "A CPU cache", "A Docker volume only"], 0, "Object storage exposes data as objects through service APIs rather than ordinary POSIX file paths.", "Object storage is not automatically POSIX."),
  q("What is REST?", ["An architectural style for stateless resource-oriented APIs", "A data format", "A filesystem", "A batch queue"], 0, "REST describes API architecture.", "JSON is the data format often used with REST."),
  q("What is JSON?", ["A lightweight data interchange format", "A cloud deployment model", "A network switch", "A Kubernetes node"], 0, "JSON structures data as objects/arrays/values.", "REST and JSON are different layers."),
  q("What is NFS?", ["Network File System", "New function server", "Node filesystem scheduler", "Network federation service"], 0, "NFS provides remote filesystem access.", "Remote POSIX-like access can carry latency costs."),
  q("What does docker logs inspect?", ["Application/container output logs", "CPU topology", "SAML assertions", "RAID stripes"], 0, "Logs help operate/debug containers.", "It is not the same as docker stats."),
  q("What does Docker bridge membership mainly control?", ["Which containers can communicate directly on that Docker host", "Which AWS region the VM uses", "Which checksum algorithm is computed", "Which Kubernetes deployment is scaled"], 0, "Containers on the same bridge can communicate; containers on different bridges are isolated unless connected explicitly.", "Same host is not the same as same bridge.", "M2", [
    "Correct. Bridge membership is a local connectivity boundary between containers.",
    "AWS region is selected in the cloud account/console, not by Docker bridge membership.",
    "Checksum algorithms verify data integrity; Docker bridge membership is networking.",
    "Kubernetes deployment scaling is managed by Kubernetes objects, not by Docker bridge membership.",
  ]),
  q("What does Docker NAT demonstrate about container connectivity?", ["Outbound Internet access does not prove all container-to-container paths are open", "NAT turns a container into a Docker volume", "NAT replaces cloud security groups", "NAT is the same as OpenID Connect"], 0, "A container may reach the Internet through NAT while still being isolated from containers on other bridges or blocked from inbound access.", "Do not treat one successful ping as proof of full reachability.", "M2", [
    "Correct. NAT can enable outbound connectivity while other local or inbound paths remain blocked.",
    "Docker volumes are persistence mechanisms; NAT is network address translation.",
    "Cloud security groups can still block traffic even if Docker networking is configured correctly.",
    "OpenID Connect is an identity protocol layer over OAuth, unrelated to container NAT.",
  ]),
  q("What is the conceptual role of a container-management GUI?", ["It exposes container-engine objects through a graphical interface", "It converts Docker images into Kubernetes pods automatically", "It removes the need for network access rules", "It stores SAML assertions"], 0, "A GUI can visualize containers, logs, stats and consoles, but the underlying container model is unchanged.", "A graphical interface does not replace understanding images, containers, ports, logs and volumes.", "M2", [
    "Correct. The GUI is another interface to container-engine state and operations.",
    "Kubernetes pod creation is an orchestration concern, not an automatic image conversion.",
    "Firewalls, security groups and port exposure still matter even if a GUI is used.",
    "SAML assertions belong to federated identity, not container GUI management.",
  ]),
  q("What is authentication?", ["Proving who or what an entity is", "Deciding permitted actions", "Compressing files", "Scheduling jobs"], 0, "Authentication establishes identity.", "Do not confuse with authorization."),
  q("What is authorization?", ["Deciding what an authenticated entity may do", "Proving password correctness only", "Archiving data", "Launching an EC2 VM"], 0, "Authorization uses identity/claims/policy to grant access.", "Authentication alone does not imply permission."),
  q("What is LDAP?", ["A protocol for accessing directory information", "A container engine", "A GPU metric", "A compression tool"], 0, "LDAP is lightweight directory access.", "Do not call LDAP the whole identity federation."),
  q("What is Kerberos known for?", ["Ticket-based authentication and SSO-like behavior", "Object storage APIs", "Docker images", "PUE calculation"], 0, "Kerberos uses tickets/TGT/service tickets.", "Tickets are not OAuth tokens."),
  q("What is X.509 used for?", ["Public-key certificate infrastructure", "Batch fairshare", "Docker Compose networks", "Tape random access"], 0, "X.509 certificates support identity and secure communication.", "Certificate is not a password."),
  q("What is SAML mainly used for here?", ["Federated authentication/authorization exchange between IDP and service provider", "Filesystem mounting", "GPU acceleration", "Image compression"], 0, "SAML supports SSO/federation flows.", "It is not OAuth."),
  q("What is OAuth?", ["Delegated authorization framework", "Authentication protocol by itself", "Directory schema", "Container runtime"], 0, "OAuth authorizes delegated access.", "OAuth alone is not OpenID Connect."),
  q("What does OpenID Connect add?", ["Authentication layer and ID tokens on top of OAuth", "RAID parity", "NFS mounting", "Batch queues"], 0, "OIDC uses OAuth flows plus identity information.", "Do not answer OAuth when asked about authentication."),
  q("What role did INDIGO-IAM play?", ["Identity/access management service using federation and OIDC-style flows", "A Docker image registry", "A filesystem type", "An HPC benchmark"], 0, "It ties identity, groups and tokens for services.", "IAM is not only a login page."),
  q("Why are microservices useful?", ["They split an application into small focused services that can scale and evolve independently", "They eliminate networking", "They require no monitoring", "They are always simpler than monoliths"], 0, "Microservices help elasticity and specialization.", "They also add operational complexity."),
  q("What is DevOps?", ["Combining development and operations practices with short feedback cycles", "A cloud storage protocol", "A checksum algorithm", "A Kerberos realm"], 0, "DevOps connects software development, deployment, operation and feedback.", "Not just a tool name."),
  q("What is Kubernetes pod?", ["Basic deployable unit that encapsulates containerized application resources", "A public IP", "A Docker Hub token", "A RAID group"], 0, "Pods are core Kubernetes units and get cluster-level networking.", "A pod is not the whole cluster."),
  q("What does a Kubernetes deployment do?", ["Maintains desired replica state for pods", "Formats block devices", "Authenticates with SAML", "Compresses archives"], 0, "Deployments keep requested replicas running.", "Deleting a pod may cause replacement."),
  q("Why does Kubernetes use Services when pods already have IP addresses?", ["Pod IPs are private/changeable, while Services provide stable access policy", "Services are checksum files", "Services replace Dockerfiles", "Services are Italian identity providers"], 0, "A Service gives stable access to a logical set of pods whose individual IPs can change.", "Direct pod IP access is fragile.", "M2", [
    "Correct. Services abstract changing pod IPs and define how traffic reaches a group of pods.",
    "Checksums verify data integrity; Kubernetes Services are networking/access abstractions.",
    "Dockerfiles build images; Services expose or connect workloads.",
    "Identity providers belong to federation/AAI topics such as IDEM or eduGAIN, not Kubernetes Services.",
  ]),
  q("What is the right way to think about secrets versus configs?", ["Secrets hold sensitive data; configs hold non-sensitive configuration", "Configs are encrypted passwords and secrets are public notes", "Both are just Docker images", "Both are CPU scheduling policies"], 0, "Secrets protect passwords/tokens/keys; configs are for non-sensitive configuration files or values.", "Sensitive and non-sensitive runtime data should not be collapsed.", "M2", [
    "Correct. Sensitive runtime data and ordinary configuration have different security requirements.",
    "This reverses the distinction: configs are not the place for passwords.",
    "Images package runtime filesystems; secrets/configs are runtime configuration mechanisms.",
    "Scheduling policies such as fairshare belong to batch systems, not container secrets/configs.",
  ]),
  q("Which persistence/configuration choice is safest for a database password in a containerized stack?", ["A secret", "A Docker volume containing public data", "A plaintext value committed in docker-compose.yml", "A README sentence"], 0, "Passwords, tokens and keys should be handled as secrets rather than stored in source or images.", "Working once is not enough if credentials are exposed.", "M2", [
    "Correct. A secret is meant for sensitive runtime data such as passwords or tokens.",
    "A volume may persist data, but it is not automatically the right abstraction for protecting a password.",
    "Plaintext credentials in Compose files expose sensitive operational data.",
    "A README documents use; it must not contain operational secrets.",
  ]),
  q("What is Infrastructure as Code?", ["Machine-readable templates describing infrastructure and services", "Writing data inside Docker images", "Manual clicking only", "A checksum table"], 0, "IaC lets systems interpret templates and create resources.", "The template describes what; the platform handles how."),
  q("What does serverless mean?", ["Provider manages server provisioning while user supplies event-triggered code", "There are literally no servers", "It is only SaaS", "It means no cost"], 0, "Serverless abstracts server management.", "Servers still exist."),
  q("What is FaaS?", ["Event-triggered function execution as a cloud service", "Fairshare as a Service", "Filesystem archive access", "Federated authentication assertion"], 0, "FaaS runs functions in response to triggers.", "Do not confuse it with a long-running VM."),
].map(distributeCorrectOption);

QUESTIONS.forEach((item, index) => {
  if (index >= 32) item.module = "M2";
});

const BDP1_PDF_EXAM_QUESTIONS = [
  qConcept("What is the core computational problem in mapping sequencing reads to a genome?", [
    ["Finding short substrings inside a very large reference string", "Not correct. This is not wrong as a phrase, but the key is matching many reads to a reference at scale; a single substring lookup misses the infrastructure pressure."],
    ["Encrypting each read before storage", "Encryption protects confidentiality; it does not solve sequence alignment or mapping."],
    ["Replacing the reference genome with a checksum", "A checksum verifies integrity; it cannot replace the data structure needed for alignment."],
    ["Turning DNA sequences into network packets", "Packets are a networking concept, not the core read-mapping computation."],
  ], 0, "Read mapping is essentially large-scale string matching against a reference, where algorithmic choices affect runtime and infrastructure needs.", "Do not confuse integrity tools or networking with the alignment problem."),
  qConcept("Why can indexed sequence-search methods reduce infrastructure demand?", [
    ["They reduce the search space or lookup cost before hardware scaling is considered", "Correct. Indexing changes the amount of work the system must perform."],
    ["They make disk bandwidth irrelevant", "Indexing can reduce work, but storage and memory access still matter."],
    ["They remove the need for data integrity checks", "Integrity checks remain necessary when data is stored or transferred."],
    ["They convert genomic data into object storage automatically", "Object storage is a storage model; it is not the result of an alignment index."],
  ], 0, "An index can make lookups much cheaper, so the same infrastructure can process larger data or finish sooner.", "More machines are not the only solution to a slow workload."),
  qConcept("What does a checksum primarily verify?", [
    ["Data integrity after storage or transfer", "Correct. Matching checksums indicate that the bytes are likely unchanged."],
    ["User identity", "Identity is handled by authentication mechanisms, not checksums."],
    ["File compression ratio", "Compression ratio measures size reduction; checksum verifies content."],
    ["Network routing policy", "Routing policy decides paths; checksum verification checks data content."],
  ], 0, "A checksum is a compact value used to detect accidental or malicious changes in data.", "A checksum is not encryption or authentication."),
  qConcept("Which statement best distinguishes structured, semi-structured and unstructured data?", [
    ["They differ by degree of schema and organization", "Correct. Tables, JSON/XML-like records and free text/images have different structural constraints."],
    ["They differ only by file size", "Small or large data can be structured, semi-structured or unstructured."],
    ["Only structured data can be processed", "Unstructured and semi-structured data can be processed, but often require different tools."],
    ["Only unstructured data is Big Data", "Big Data can involve any of the three depending on scale and processing constraints."],
  ], 0, "The categories describe how data is organized, not simply whether it is large.", "Do not reduce Big Data to unstructured files only."),
  qConcept("What is the role of CPU cache in a processor hierarchy?", [
    ["To reduce effective memory access latency for frequently used data", "Correct. Caches sit closer to the CPU than RAM and exploit locality."],
    ["To permanently store all user files", "Persistent user files belong to storage devices, not CPU cache."],
    ["To replace network bandwidth", "Cache affects CPU-memory access, not network throughput."],
    ["To enforce cloud quotas", "Quota is a resource policy concept, not a CPU-cache function."],
  ], 0, "Caches improve performance by keeping likely-needed data close to the processor.", "Cache is not RAM, disk or a scheduler policy."),
  qConcept("What is the safest interpretation of cores and threads?", [
    ["Cores are physical execution resources; threads may be logical execution contexts", "Correct. Hardware threads can improve utilization but do not equal extra physical cores."],
    ["A thread is always a separate physical CPU", "A thread may be logical; counting it as a full core is a common mistake."],
    ["Cores store files and threads route packets", "Storage and routing are different system layers."],
    ["More threads always means linear speedup", "Speedup depends on workload, serial fraction, memory pressure and scheduling."],
  ], 0, "Cores and threads describe processor execution capacity, but they are not interchangeable.", "Do not equate logical threads with physical cores."),
  qConcept("What is the main difference between bandwidth and latency?", [
    ["Bandwidth is amount per time; latency is delay before response or transfer", "Correct. High bandwidth does not automatically imply low latency."],
    ["Bandwidth is delay; latency is amount per time", "This reverses the definitions."],
    ["They are synonyms in networks but not in storage", "They are distinct in networks, storage and memory systems."],
    ["Latency applies only to CPU caches", "Latency appears across memory, storage, networks and services."],
  ], 0, "Bandwidth and latency describe different dimensions of performance.", "Do not use one as a substitute for the other."),
  qConcept("Which layer distinction is correct for MAC and IP addresses?", [
    ["MAC identifies a network interface at link layer; IP identifies a host/interface for network-layer routing", "Correct. MAC and IP operate at different layers and scopes."],
    ["MAC is a cloud-storage identifier and IP is a checksum", "Neither definition matches networking."],
    ["MAC and IP are both filesystem paths", "Filesystem paths are storage/OS concepts, not network addresses."],
    ["IP replaces all local switching decisions", "Switching and routing are different network functions."],
  ], 0, "MAC and IP addresses support communication at different networking layers.", "Do not collapse link-layer and network-layer addressing."),
  qConcept("Which device behavior is most accurate?", [
    ["A hub repeats traffic, a switch forwards frames, and a router connects networks", "Correct. The three devices operate with different intelligence and scope."],
    ["A hub routes IP subnets", "Routing between networks is the router role, not hub behavior."],
    ["A switch is a tape archive", "A switch is a network device."],
    ["A router formats filesystems", "Formatting filesystems is storage administration, not routing."],
  ], 0, "Hub, switch and router differ by how they move traffic and what addressing they understand.", "Do not treat all network boxes as equivalent."),
  qConcept("What does a batch system mainly manage?", [
    ["Queued non-interactive jobs and resource allocation policies", "Correct. Batch systems decide when and where jobs run."],
    ["Only file compression", "Compression is a data-format operation, not workload scheduling."],
    ["Only DNS names", "DNS is name resolution; batch systems manage jobs."],
    ["Only Docker image layers", "Container images are packaging artifacts; batch systems manage execution."],
  ], 0, "Batch systems manage workloads using queues, policies and resource constraints.", "A batch system is not just a command shell."),
  qConcept("What is fairshare scheduling intended to balance?", [
    ["Resource priority according to allocation and historical usage", "Correct. Fairshare adjusts priority so usage follows policy over time."],
    ["Disk parity across RAID drives", "RAID parity belongs to storage redundancy, not scheduler priority."],
    ["Checksum strength", "Checksum choice affects integrity detection, not scheduling fairness."],
    ["Container port exposure", "Port exposure is a networking/runtime concern."],
  ], 0, "Fairshare is a scheduling/accounting policy for shared compute resources.", "It is not the same thing as equal instant access for all users."),
  qConcept("Which job component distinction matters in workload systems?", [
    ["Executable, input data, output data, resource requests and environment are separate concerns", "Correct. Schedulers and users need to describe both what runs and what resources/data it needs."],
    ["A job is only a filename", "A filename alone does not capture resources, input, output or execution context."],
    ["A job is always a Docker image", "Containers may package jobs, but jobs are broader workload-management objects."],
    ["A job is a storage RAID level", "RAID is storage layout, not workload description."],
  ], 0, "A job is not just code; it includes inputs, outputs, requirements and execution context.", "Do not ignore data movement and resource requests."),
  qConcept("What is RAID mainly used for?", [
    ["Combining disks for redundancy, performance or both", "Correct. Different RAID levels trade capacity, fault tolerance and speed."],
    ["Authenticating users", "Authentication belongs to AAI/security mechanisms."],
    ["Running Kubernetes pods", "Pods are Kubernetes workload units, not RAID structures."],
    ["Replacing all backups", "RAID can tolerate some disk failures but is not a full backup strategy."],
  ], 0, "RAID organizes multiple disks to improve reliability and/or performance.", "RAID is not a substitute for backup or disaster recovery."),
  qConcept("What makes a filesystem different from a raw block device?", [
    ["A filesystem provides naming, directories, metadata and file access semantics", "Correct. A raw block device must be formatted before ordinary file operations are available."],
    ["A filesystem is always remote", "Filesystems can be local, networked or distributed."],
    ["A raw block device already has POSIX file paths", "A block device does not provide file paths until a filesystem exists."],
    ["A filesystem is a checksum algorithm", "Checksums verify data; filesystems organize storage."],
  ], 0, "Filesystems turn block storage into named files and directories with access semantics.", "Mounting a block device is not enough if it has no filesystem."),
  qConcept("Which storage architecture relation is correct?", [
    ["DAS is directly attached, NAS provides file access over a network, and SAN provides block-level storage over a network", "Correct. These architectures expose storage at different layers."],
    ["NAS means no attached storage", "NAS is Network Attached Storage."],
    ["SAN is only a Docker network", "SAN is a storage network concept, not Docker networking."],
    ["DAS requires object APIs", "DAS is directly attached storage, not object storage."],
  ], 0, "DAS, NAS and SAN differ by attachment model and access semantics.", "Do not collapse all networked storage into the same category."),
  qConcept("Why are parallel filesystems useful in large compute infrastructures?", [
    ["They allow concurrent high-throughput access from many clients or nodes", "Correct. Parallel filesystems are designed for aggregate I/O across many resources."],
    ["They make CPU caches unnecessary", "CPU caches and parallel filesystems solve different bottlenecks."],
    ["They encrypt all network packets automatically", "Encryption is a security feature, not the definition of a parallel filesystem."],
    ["They replace workload schedulers", "Schedulers place jobs; filesystems serve data."],
  ], 0, "Parallel filesystems address shared high-throughput data access.", "Do not confuse storage concurrency with compute scheduling."),
  qConcept("What is tiered storage?", [
    ["Placing data on storage classes with different cost, speed and access characteristics", "Correct. Hot, warm and cold data may belong on different media."],
    ["Using only RAM for all data", "RAM is fast but expensive and volatile; tiering includes multiple storage classes."],
    ["Running all jobs in priority order", "Job priority is scheduling, not storage tiering."],
    ["Converting files into CPU threads", "Threads are execution contexts, not storage classes."],
  ], 0, "Tiered storage matches data value and access frequency to appropriate media.", "Do not treat all storage as equivalent."),
  qConcept("What does PUE measure?", [
    ["Facility power efficiency: total facility energy divided by IT equipment energy", "Correct. Lower PUE means less overhead outside IT load."],
    ["Processor utilization efficiency", "Processor utilization is not PUE."],
    ["Packet usage estimate", "PUE is not a network metric."],
    ["Parallel user entitlement", "Entitlements and quotas are policy concepts, not PUE."],
  ], 0, "PUE quantifies datacenter power and cooling overhead relative to IT equipment.", "PUE is not about CPU speed or network use."),
  qConcept("Which cloud-service model gives the user virtual infrastructure resources?", [
    ["IaaS", "Correct. IaaS exposes infrastructure such as VMs, volumes and networks."],
    ["SaaS", "SaaS exposes complete software applications."],
    ["PaaS", "PaaS exposes an application platform, not raw infrastructure."],
    ["RAID", "RAID is storage organization, not a cloud service model."],
  ], 0, "IaaS provides infrastructure primitives that users configure and operate.", "Do not confuse service models with storage technologies."),
  qConcept("Which statement best distinguishes virtualization from cloud computing?", [
    ["Virtualization creates virtual resources; cloud adds service models, provisioning, elasticity and operational abstraction", "Correct. Virtualization can be a building block of cloud, but it is not the whole cloud model."],
    ["Cloud computing forbids virtual machines", "VMs are common cloud resources."],
    ["Virtualization is only a networking protocol", "Virtualization is broader than networking."],
    ["Cloud computing means no operational choices remain", "Users still make choices about models, costs, security and architecture."],
  ], 0, "Cloud computing often uses virtualization but adds managed access, automation and service abstraction.", "A VM alone is not the complete cloud concept."),
  qConcept("What is a cloud-friendly application characteristic?", [
    ["It can tolerate elasticity, failure and distributed deployment assumptions", "Correct. Cloud-friendly design expects resources to be provisioned, replaced and scaled."],
    ["It requires one fixed physical server forever", "That assumption fights elasticity and replaceability."],
    ["It stores all state inside one temporary VM disk only", "Ephemeral local state can be lost; persistent state needs explicit design."],
    ["It cannot use APIs", "Cloud systems are heavily API-driven."],
  ], 0, "Cloud-friendly applications are designed around elasticity, failure handling and externalized state.", "Do not simply lift a fragile single-host design into cloud and expect resilience."),
  qConcept("What is the main difference between HTC and HPC?", [
    ["HTC maximizes throughput across many tasks; HPC optimizes performance of tightly coupled computation", "Correct. HTC and HPC target different workload shapes."],
    ["HTC is storage and HPC is networking", "Both are computing infrastructure models."],
    ["HTC always uses GPUs and HPC never does", "Accelerators can appear in HPC, and hardware alone does not define the model."],
    ["HTC means cloud SaaS", "HTC is a computing model, not a SaaS category."],
  ], 0, "HTC and HPC differ by workload coupling and performance goal.", "Do not define them only by cluster size."),
  qConcept("What does GFLOPS measure?", [
    ["Billions of floating-point operations per second", "Correct. GFLOPS is a floating-point performance rate."],
    ["Gigabytes of files opened per second", "That would be an I/O metric, not floating-point performance."],
    ["Grid federation login protocol", "GFLOPS is a performance unit, not an identity protocol."],
    ["General filesystem operations", "Filesystem operations are I/O, not floating-point arithmetic."],
  ], 0, "GFLOPS is used to express computational performance for numeric workloads.", "Do not use it as a storage or authentication metric."),
  qConcept("What does Amdahl's Law imply for parallel speedup?", [
    ["The serial fraction limits maximum speedup no matter how many processors are added", "Correct. Parallel resources cannot accelerate work that remains serial."],
    ["Speedup is always equal to the number of processors", "That ignores serial work and overhead."],
    ["Adding GPUs removes all bottlenecks", "Accelerators help suitable parallel work but cannot erase serial fractions and data movement."],
    ["Checksums determine speedup", "Checksums verify integrity; they do not define parallel speedup."],
  ], 0, "Amdahl's Law explains why speedup eventually saturates when part of a program is serial.", "More processors do not guarantee linear speedup."),
  qConcept("What is NUMA?", [
    ["A memory architecture where memory access time depends on which CPU/socket owns the memory", "Correct. NUMA means non-uniform memory access."],
    ["A cloud deployment model", "Cloud deployment models include public, private, hybrid and community."],
    ["A checksum format", "NUMA is memory architecture, not data integrity."],
    ["A Docker registry", "Registries store images; NUMA describes memory locality."],
  ], 0, "NUMA affects performance because memory locality matters on multi-socket systems.", "Do not confuse memory topology with cloud or container terminology."),
  qConcept("When are accelerators such as GPUs most useful?", [
    ["When the workload exposes enough parallelism and data movement overhead is justified", "Correct. Accelerators help suitable kernels, not every workload."],
    ["Whenever any program is slow", "Slow code may be serial, I/O-bound or poorly suited to acceleration."],
    ["Only for authentication protocols", "Authentication is not the typical accelerator workload."],
    ["Only for tape archives", "Tape archive access is storage-oriented, not GPU computation."],
  ], 0, "Accelerators improve performance only when workload structure matches the hardware.", "Do not assume GPU equals automatic speedup."),
  qConcept("What does a workload management system coordinate?", [
    ["Submission, queuing, scheduling, execution and policy for jobs", "Correct. A WMS manages the lifecycle of jobs on resources."],
    ["Only JSON serialization", "JSON is a data format, not a workload manager."],
    ["Only RAID rebuilds", "RAID rebuilds are storage maintenance."],
    ["Only cloud billing invoices", "Billing is accounting; WMS is job execution management."],
  ], 0, "A WMS connects users, jobs, policies and compute resources.", "Do not reduce workload management to command execution only."),
  qConcept("What is the difference between push and pilot/pull job strategies?", [
    ["Push sends work to resources directly; pilot/pull starts an agent that later pulls tasks", "Correct. The initiator and timing of task acquisition differ."],
    ["Push compresses files; pull encrypts files", "Compression and encryption are unrelated to job acquisition strategy."],
    ["Push is for storage and pull is for GPUs", "Both describe scheduling/execution strategies."],
    ["They are two names for the same DNS lookup", "DNS lookup is not job scheduling."],
  ], 0, "Push and pilot/pull strategies differ in how tasks reach execution resources.", "Do not confuse job dispatch with data transfer commands."),
  qConcept("What are input and output sandboxes in job execution?", [
    ["Mechanisms for staging small input files to a job and collecting small output files afterward", "Correct. Sandboxes support job file staging around execution."],
    ["Encrypted identity tokens only", "Tokens may authenticate access, but sandboxes are about job input/output files."],
    ["CPU cache partitions", "CPU caches are hardware memory hierarchy."],
    ["Permanent object storage buckets only", "Sandboxes are typically job-staging mechanisms, not the whole storage system."],
  ], 0, "Sandboxes package the small files needed before and after a job.", "Do not use sandboxes as the answer for large-scale data-management strategy."),
  qConcept("Why does data locality matter in distributed computing?", [
    ["Moving computation near data can reduce transfer time, cost and bottlenecks", "Correct. Data movement can dominate large workflows."],
    ["It makes all checksums unnecessary", "Checksums remain useful for integrity."],
    ["It eliminates the need for scheduling", "Scheduling still decides where work runs."],
    ["It turns RAM into tape", "RAM and tape remain different storage media."],
  ], 0, "Data locality matters because networks and storage have finite bandwidth and latency.", "Do not ignore data movement when planning computation."),
  qConcept("What is policy-driven data management?", [
    ["Automatic data placement, replication or migration based on rules such as access, cost and reliability", "Correct. Policies encode how data should be managed over time."],
    ["Manual file copying only", "Manual copying is not policy-driven automation."],
    ["A CPU branch predictor", "Branch prediction is processor behavior, not data management."],
    ["A Dockerfile instruction", "Dockerfiles build images; data-management policies govern data lifecycle."],
  ], 0, "Policy-driven systems automate data handling according to declared rules.", "Do not confuse a policy with a one-time copy command."),
  qConcept("What is a container at the operating-system level?", [
    ["An isolated process environment sharing the host kernel", "Correct. Containers package runtime dependencies while relying on the host kernel."],
    ["A full hardware emulator with its own kernel in every case", "That describes heavier virtualization, not the basic container model."],
    ["A RAID array", "RAID is storage organization."],
    ["A network router", "Routers forward traffic between networks."],
  ], 0, "Containers isolate processes and filesystems while sharing the kernel.", "Do not confuse containers with full virtual machines."),
  qConcept("What is the relationship between image and container?", [
    ["An image is a template; a container is a running or created instance from that template", "Correct. Images are immutable-ish build artifacts; containers are runtime instances."],
    ["A container builds a Dockerfile into a checksum", "A Dockerfile builds an image; checksums verify data."],
    ["An image is always a network subnet", "Images package files and metadata, not subnets."],
    ["They are exact synonyms", "The runtime instance and the template are different objects."],
  ], 0, "Images and containers are related but distinct lifecycle objects.", "Do not call a running container an image."),
  qConcept("What does a Dockerfile define?", [
    ["A reproducible build recipe for a container image", "Correct. Dockerfiles declare base image, files, commands and configuration."],
    ["A batch fairshare policy", "Fairshare belongs to scheduling policy."],
    ["A physical disk layout", "Disk layout and RAID are storage concerns."],
    ["A SAML federation assertion", "SAML assertions belong to identity federation."],
  ], 0, "A Dockerfile records the steps needed to build an image.", "Do not confuse Dockerfile, image and running container."),
  qConcept("Why are Docker volumes important?", [
    ["They persist or share data outside the writable container layer", "Correct. Volumes avoid losing important state when containers are removed."],
    ["They replace all network ports", "Ports and volumes solve different problems."],
    ["They authenticate cloud users", "Authentication is handled by identity systems."],
    ["They measure PUE", "PUE is a datacenter energy metric."],
  ], 0, "Volumes are the normal abstraction for persistent container data.", "Writing inside the container layer is not the same as durable persistence."),
  qConcept("What does Docker Compose describe?", [
    ["A multi-service application stack with services, networks, volumes and configuration", "Correct. Compose coordinates related containers on a host or local environment."],
    ["A checksum algorithm", "Checksums verify integrity; Compose defines services."],
    ["A memory topology", "Memory topology is hardware architecture."],
    ["A grid certificate authority", "Certificates and CAs belong to security infrastructure."],
  ], 0, "Compose provides a declarative description of a containerized application stack.", "Compose is not the same as Kubernetes orchestration across a cluster."),
  qConcept("Why can udocker be useful in shared computing environments?", [
    ["It can run container images without requiring normal Docker daemon privileges", "Correct. Userspace execution can be practical where privileged Docker is unavailable."],
    ["It turns containers into virtual machines with new kernels", "udocker does not change the basic userspace-container goal into full VM virtualization."],
    ["It replaces all batch systems", "A container runner can be used by jobs, but it is not a scheduler by itself."],
    ["It calculates datacenter PUE", "PUE is an energy-efficiency metric, not a container-runtime function."],
  ], 0, "udocker targets container execution where ordinary Docker privileges are not available.", "Do not treat it as a scheduler, identity system or energy metric."),
  qConcept("In IoT-style Big Data, what is the main infrastructure pressure?", [
    ["Many distributed devices producing heterogeneous, often continuous data streams", "Correct. IoT stresses ingestion, networking, storage, security and processing pipelines."],
    ["A single static spreadsheet", "A static spreadsheet does not capture IoT scale or streaming characteristics."],
    ["Only CPU cache size", "CPU cache may matter locally, but IoT pressure is broader."],
    ["Only RAID parity", "RAID may protect storage, but IoT stresses data ingestion and distributed operation."],
  ], 0, "IoT data tends to be distributed, continuous and heterogeneous.", "Do not reduce IoT to one device or one file."),
].map((item, index) => distributeCorrectOption(item, index + QUESTIONS.length));

const GLOSSARY = [
  ["Big Data", "Data whose volume, velocity, variety, veracity or value extraction creates infrastructure pressure."],
  ["checksum", "A computed value used to verify data integrity."],
  ["tar/tgz", "tar groups files; tgz/tar.gz is a tar archive compressed with gzip."],
  ["VM", "Virtual machine: a virtualized server instance."],
  ["volume", "A block storage device that can be attached, formatted and mounted."],
  ["filesystem", "Structure and semantics for naming, storing and accessing files."],
  ["POSIX", "Standard file interface/semantics, not simply a disk."],
  ["NFS", "Network File System for remote filesystem access."],
  ["object storage", "Key/object storage commonly accessed by API rather than POSIX paths."],
  ["REST", "Stateless resource-oriented API architectural style."],
  ["JSON", "Lightweight structured data interchange format."],
  ["VFS", "Virtual filesystem abstraction layer."],
  ["CPU core", "Physical execution unit within a processor."],
  ["thread", "Logical execution context; not necessarily a physical core."],
  ["cache", "Fast memory close to CPU used to reduce access latency."],
  ["bandwidth", "Amount of data transferred per unit time."],
  ["latency", "Delay before a response or transfer begins."],
  ["IOPS", "Input/output operations per second."],
  ["RAID", "Disk organization for redundancy and/or performance."],
  ["DAS", "Direct Attached Storage."],
  ["NAS", "Network Attached Storage."],
  ["SAN", "Storage Area Network."],
  ["TAN", "Tape Area Network."],
  ["parallel file system", "Filesystem designed for concurrent high-throughput access across nodes."],
  ["batch system", "System that queues and schedules non-interactive jobs."],
  ["fairshare", "Scheduling policy based on allocation and historical usage."],
  ["quota", "Limit on resource usage."],
  ["PUE", "Power Usage Effectiveness, a datacenter efficiency metric."],
  ["virtualization", "Technology for running virtual resources such as VMs."],
  ["IaaS", "Infrastructure as a Service."],
  ["PaaS", "Platform as a Service."],
  ["SaaS", "Software as a Service."],
  ["HTC", "High Throughput Computing."],
  ["HPC", "High Performance Computing."],
  ["grid computing", "Federated distributed computing with standard interfaces and no single central owner."],
  ["speedup", "Runtime improvement compared with a baseline."],
  ["efficiency", "Speedup divided by number of processing elements."],
  ["Amdahl's Law", "Parallel speedup limit imposed by serial fraction."],
  ["UMA", "Uniform Memory Access."],
  ["NUMA", "Non-Uniform Memory Access."],
  ["accelerator", "Specialized hardware such as GPU used to speed selected workloads."],
  ["GPU", "Graphics Processing Unit often used as a parallel accelerator."],
  ["workload management system", "Job submission, scheduling and execution management layer."],
  ["compute-driven model", "Compute placement leads the workflow."],
  ["data-driven model", "Data location/availability drives computation placement."],
  ["replica", "Additional copy for availability, locality or policy."],
  ["QoS", "Quality of Service."],
  ["disaster recovery", "Plan for recovering service/data after major failure."],
  ["container", "Isolated process runtime sharing host kernel."],
  ["Dockerfile", "Recipe for building a Docker image."],
  ["Docker image", "Packaged template used to start containers."],
  ["Docker volume", "Persistent storage managed or mounted for containers."],
  ["Docker Compose", "YAML-based multi-container application definition for one host."],
  ["udocker", "Userspace container runner."],
  ["LDAP", "Lightweight Directory Access Protocol."],
  ["Kerberos", "Ticket-based authentication system."],
  ["X.509", "Certificate standard for public-key infrastructure."],
  ["SAML", "Federated identity assertion protocol."],
  ["OAuth", "Delegated authorization framework."],
  ["OpenID Connect", "Authentication layer built on OAuth 2.0."],
  ["INDIGO-IAM", "Identity and access management service used for federated cloud access."],
  ["microservices", "Small focused services composing an application."],
  ["monolith", "Single application containing many functions in one deployable unit."],
  ["DevOps", "Development plus operations practices with feedback and automation."],
  ["Docker Swarm", "Docker-native container orchestration technology."],
  ["Kubernetes", "Container orchestration platform."],
  ["Infrastructure as Code", "Machine-readable infrastructure templates."],
  ["serverless", "Execution model where provider manages server provisioning."],
  ["FaaS", "Function as a Service."],
];

const COMMAND_MEMORY = [
  ["AWS VM creation concepts", "Choose image/flavor, key pair, security access and public IP; then connect with SSH."],
  ["Attach and format volumes", "`lsblk`, create filesystem with `mkfs`, mount at a directory, verify with `df -h`."],
  ["Filesystem mounting logic", "Attach gives a block device; format gives filesystem; mount gives path access."],
  ["Docker run/build", "`docker pull`, `docker run`, `docker build -t name .` connect images, containers and Dockerfiles."],
  ["Docker volumes and ports", "`-v host:path` or named volumes persist data; `-p host:container` exposes services."],
  ["Docker Compose", "`docker compose up`, `start`, `stop`, `down` manage a described stack."],
  ["Kubernetes/FaaS workflow", "Create manifests, apply with `kubectl`, inspect pods/deployments/services; FaaS attaches function code to events."],
];

const HIGH_YIELD_PRINCIPLES = [
  "Infrastructure choices depend on workload shape: data size, access pattern, latency sensitivity, parallelism and reliability needs.",
  "A better algorithm or application can reduce CPU, memory, storage and network pressure before hardware scaling begins.",
  "IOPS, bandwidth and latency describe different bottlenecks and should not be used as synonyms.",
  "Cloud computing combines virtualization with service models, provisioning, elasticity and operational abstraction.",
  "Docker image, running container, Dockerfile, volume and port mapping are separate concepts.",
  "OAuth delegates authorization; OpenID Connect adds an authentication layer and identity tokens.",
  "A Kubernetes deployment manages desired pod replicas; a Service provides stable access to replaceable pods.",
  "Serverless hides server provisioning from the user; servers still exist and the function still consumes resources.",
];

const LAST_PASS = [
  ["Big Data and application choice", "Use the 5 Vs, workload type and data-access pattern to explain why the infrastructure is needed.", "Trap: answering only 'large file' or ignoring whether the application really fits the infrastructure."],
  ["Integrity, archives and volumes", "Checksum verifies integrity; tar groups files; tgz is tar plus gzip; cloud volumes need attach, filesystem creation and mount.", "Trap: treating checksum as encryption or mounting a raw/unattached block device."],
  ["Datacenter performance vocabulary", "CPU cores/threads/caches, memory latency, network bandwidth/latency and storage IOPS describe different bottlenecks.", "Trap: using bandwidth, latency and IOPS as interchangeable performance words."],
  ["Storage-system layers", "POSIX, RAID, DAS, NAS, SAN, TAN and parallel file systems describe interface, redundancy, attachment and access patterns.", "Trap: calling any disk POSIX or confusing networked file storage with block storage."],
  ["Cloud models", "Cloud adds provisioning, service models, elasticity and operational abstraction on top of virtualization.", "Trap: reversing IaaS/PaaS/SaaS or saying cloud is just a VM."],
  ["HTC, HPC and computing models", "HTC maximizes aggregate throughput; HPC optimizes tightly coupled performance, speedup, efficiency and resource topology.", "Trap: assuming GPUs or more processors always improve runtime despite Amdahl's Law and data movement."],
  ["Containers", "Separate image, container, Dockerfile, registry, volume, port mapping, Compose stack and userspace execution with udocker.", "Trap: confusing a running container with its image or assuming container data persists automatically."],
  ["Cloud storage and APIs", "NFS gives network file access; object storage uses object/key APIs; REST and JSON shape service interaction.", "Trap: treating object storage as a mounted POSIX filesystem by default."],
  ["AAI", "Authentication proves identity; authorization decides permissions; LDAP, Kerberos, X.509, SAML, OAuth, OIDC and IAM occupy different layers.", "Trap: saying OAuth authenticates users by itself or merging authentication and authorization."],
  ["Automation and orchestration", "DevOps, microservices, Swarm, Kubernetes, IaC, serverless and FaaS move from manual servers to declared and event-driven operations.", "Trap: saying serverless means no servers or Compose is the same as Kubernetes."],
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white/85 p-6 shadow-sm">
      <div className="mb-5">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700">{eyebrow}</div>
        <h2 className="text-3xl font-black tracking-tight text-stone-950">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function QuestionCard({ item, index, selected, onSelect }) {
  const answered = selected !== undefined;
  const correct = selected === item.correct;
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-black text-sky-700">Q{index + 1}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{item.module}</span>
      </div>
      <h3 className="mt-3 text-xl font-black leading-8 text-stone-950">{item.question}</h3>
      <div className="mt-4 grid gap-2">
        {item.options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex;
          const isCorrect = optionIndex === item.correct;
          const reveal = answered;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(optionIndex)}
              className={`rounded-2xl border p-4 text-left text-sm font-bold leading-6 transition ${
                reveal && isCorrect
                  ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                  : reveal && isSelected && !isCorrect
                    ? "border-red-300 bg-red-50 text-red-950"
                    : isSelected
                      ? "border-stone-900 bg-stone-950 text-white"
                      : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
              }`}
            >
              <span className="flex flex-wrap items-start justify-between gap-3">
                <span>{optionLabel(optionIndex)}. {option}</span>
                {reveal && isCorrect ? (
                  <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">Correct</span>
                ) : null}
                {reveal && isSelected && !isCorrect ? (
                  <span className="rounded-full bg-red-600 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">Not correct</span>
                ) : null}
              </span>
              {reveal && (isCorrect || isSelected) ? (
                <span className={`mt-3 block border-t pt-3 text-xs font-semibold leading-6 ${
                  isCorrect
                    ? "border-emerald-200 text-emerald-900"
                    : isSelected
                      ? "border-red-200 text-red-900"
                      : "border-stone-200 text-stone-600"
                }`}>
                  {cleanOptionFeedback(item.optionFeedback[optionIndex])}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default function IBDPIExamPrepPage() {
  const [filter, setFilter] = useState("all");
  const [answers, setAnswers] = useState({});
  const [reviewMistakes, setReviewMistakes] = useState(false);
  const [bdp1Answers, setBdp1Answers] = useState({});
  const [bdp1ReviewMistakes, setBdp1ReviewMistakes] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(() => QUESTIONS.filter((item) => answers[item.id] === item.correct).length, [answers]);
  const filteredQuestions = useMemo(() => QUESTIONS.filter((item) => {
    const moduleMatch = filter === "all" || item.module === filter;
    const mistakeMatch = !reviewMistakes || answers[item.id] !== undefined && answers[item.id] !== item.correct;
    return moduleMatch && mistakeMatch;
  }), [answers, filter, reviewMistakes]);
  const bdp1AnsweredCount = Object.keys(bdp1Answers).length;
  const bdp1Score = useMemo(() => BDP1_PDF_EXAM_QUESTIONS.filter((item) => bdp1Answers[item.id] === item.correct).length, [bdp1Answers]);
  const filteredBdp1Questions = useMemo(() => BDP1_PDF_EXAM_QUESTIONS.filter((item) => (
    !bdp1ReviewMistakes || bdp1Answers[item.id] !== undefined && bdp1Answers[item.id] !== item.correct
  )), [bdp1Answers, bdp1ReviewMistakes]);
  const setAnswer = (questionId, optionIndex) => setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  const setBdp1Answer = (questionId, optionIndex) => setBdp1Answers((current) => ({ ...current, [questionId]: optionIndex }));
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <section className="rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/95 p-7 shadow-xl shadow-stone-900/5 md:p-9">
        <a href="#/" className="text-sm font-black text-sky-700">Back to IBDPI dashboard</a>
        <div className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-sky-700">Exam preparation</div>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl">IBDPI OK/SKIP radar and trap trainer</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">First-pass study page for the written multiple-choice exam. It prioritizes topics marked OK in the Corso file and keeps SKIP topics visibly lower priority.</p>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Section eyebrow="OK vs SKIP Radar" title="High-priority OK topics">
          <div className="grid gap-3">
            {IBDPI_OK_TOPICS.map((topic) => <div key={topic} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900">{topic}</div>)}
          </div>
        </Section>
        <Section eyebrow="Lower priority" title="SKIP or contextual topics">
          <div className="grid gap-3">
            {IBDPI_SKIPPED_TOPICS.map((topic) => <div key={topic} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">{topic}</div>)}
          </div>
        </Section>
      </div>

      <div className="mt-8">
        <Section eyebrow="Last-pass radar" title="Concepts and exam traps">
          <div className="grid gap-4 md:grid-cols-2">
            {LAST_PASS.map(([title, body, trap]) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <h3 className="text-base font-black text-stone-950">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{body}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-amber-800">{trap}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/85 p-6 shadow-sm">
        <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700">Multiple-choice trap trainer</div>
            <h2 className="text-3xl font-black tracking-tight text-stone-950">{QUESTIONS.length} interactive first-pass questions</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-stone-600">Select an option to reveal direct feedback. The correct option is marked in green; an incorrect selection is marked in red.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {["all", "M1", "M2"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-xs font-black ${filter === item ? "bg-sky-700 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>{item}</button>)}
            <button type="button" onClick={() => setReviewMistakes((current) => !current)} disabled={answeredCount === 0} className={`rounded-full px-4 py-2 text-xs font-black disabled:opacity-50 ${reviewMistakes ? "bg-red-700 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>Mistakes only</button>
            <button type="button" onClick={() => { setAnswers({}); setReviewMistakes(false); }} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-600">Reset</button>
          </div>
        </div>
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-4 text-sky-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Answered</div><div className="mt-1 text-3xl font-black">{answeredCount}</div></div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Correct</div><div className="mt-1 text-3xl font-black">{score}</div></div>
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4 text-stone-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Visible</div><div className="mt-1 text-3xl font-black">{filteredQuestions.length}</div></div>
        </div>
        <div className="grid gap-4">
          {filteredQuestions.map((item, index) => (
            <QuestionCard key={item.id} item={item} index={index} selected={answers[item.id]} onSelect={(optionIndex) => setAnswer(item.id, optionIndex)} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/85 p-6 shadow-sm">
        <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700">BDP1 PDF concept exam</div>
            <h2 className="text-3xl font-black tracking-tight text-stone-950">{BDP1_PDF_EXAM_QUESTIONS.length} questions from BDP1.pdf</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-stone-600">Concept-focused practice from the PDF: Big Data, datacenter components, networks, storage, cloud, HTC/HPC, distributed models and containers.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <button type="button" onClick={() => setBdp1ReviewMistakes((current) => !current)} disabled={bdp1AnsweredCount === 0} className={`rounded-full px-4 py-2 text-xs font-black disabled:opacity-50 ${bdp1ReviewMistakes ? "bg-red-700 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>Mistakes only</button>
            <button type="button" onClick={() => { setBdp1Answers({}); setBdp1ReviewMistakes(false); }} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-600">Reset</button>
          </div>
        </div>
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-4 text-sky-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Answered</div><div className="mt-1 text-3xl font-black">{bdp1AnsweredCount}</div></div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Correct</div><div className="mt-1 text-3xl font-black">{bdp1Score}</div></div>
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4 text-stone-900"><div className="text-xs font-black uppercase tracking-[0.16em]">Visible</div><div className="mt-1 text-3xl font-black">{filteredBdp1Questions.length}</div></div>
        </div>
        <div className="grid gap-4">
          {filteredBdp1Questions.map((item, index) => (
            <QuestionCard key={item.id} item={item} index={index} selected={bdp1Answers[item.id]} onSelect={(optionIndex) => setBdp1Answer(item.id, optionIndex)} />
          ))}
        </div>
      </section>

      <Section eyebrow="High-yield glossary" title="Terms to recognize">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {GLOSSARY.map(([term, definition]) => <div key={term} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm leading-6"><span className="font-black text-stone-950">{term}:</span> <span className="font-semibold text-stone-600">{definition}</span></div>)}
        </div>
      </Section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Section eyebrow="Hands-on command memory" title="What commands are for">
          <div className="grid gap-3">
            {COMMAND_MEMORY.map(([title, body]) => <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><h3 className="font-black text-stone-950">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{body}</p></div>)}
          </div>
        </Section>
        <Section eyebrow="High-yield principles" title="Do not miss these">
          <div className="grid gap-3">
            {HIGH_YIELD_PRINCIPLES.map((note) => <div key={note} className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm font-bold leading-6 text-sky-900">{note}</div>)}
          </div>
        </Section>
      </div>
    </main>
  );
}

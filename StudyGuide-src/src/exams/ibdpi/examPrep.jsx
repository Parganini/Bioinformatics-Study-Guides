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
  "Only files larger than RAM": "Not correct. This reduces Big Data to one size threshold. The course definition is broader: volume, velocity, variety, veracity/value and the infrastructure pressure caused by processing.",
  "Any dataset stored in the cloud": "Not correct. Cloud storage is an infrastructure choice; it does not make a dataset Big Data by itself.",
  "Any AI training dataset": "Not correct. AI datasets can be Big Data, but the label depends on scale, heterogeneity, speed and processing constraints, not on the fact that AI is involved.",
  "tar compresses; gzip groups files": "Not correct. This reverses the tools: tar collects files into one archive, while gzip compresses bytes.",
  "checksum encrypts; tgz signs": "Not correct. Checksums are for integrity checks, and tgz is a compressed tar archive, not a digital signature mechanism.",
  "tgz is a filesystem": "Not correct. A tgz file is an archive format. It is not mounted as the filesystem where files live during normal operation.",
  "Confidentiality": "Not correct. Confidentiality is about preventing unauthorized reading. A checksum can reveal accidental or malicious changes, but it does not hide data.",
  "Compression": "Not correct. Compression reduces representation size. A checksum is a small integrity value computed from the data.",
  "Network routing": "Not correct. Routing decides packet paths through networks. Checksums in this course are about verifying data integrity after storage or transfer.",
  "It avoids all infrastructure work": "Not correct. A good application choice can reduce waste, but infrastructure design is still necessary for big data workloads.",
  "It is a licensing requirement": "Not correct. The professor's point was technical: application choice changes CPU, memory, storage and network pressure.",
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
  "Cloud forbids VMs": "Not correct. VMs are common in IaaS. The course point is that cloud adds service and operational layers on top of virtualization.",
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
  "Latency times bandwidth": "Not correct. Latency and bandwidth are performance properties, but their product is not the course definition of parallel efficiency.",
  "GPU memory size": "Not correct. GPU memory capacity may constrain workloads, but efficiency measures how well processing elements are used.",
  "Universal mount archive": "Not correct. This sounds like a storage/archive acronym, but UMA is a memory-architecture term.",
  "User managed authorization": "Not correct. Authorization belongs to AAI. UMA here means Uniform Memory Access.",
  "Untrusted machine account": "Not correct. This is not the course meaning. UMA describes uniform memory access latency from processors.",
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

const QUESTIONS = [
  q("What is the best course-specific definition of Big Data?", ["Only files larger than RAM", "Data whose size, speed, variety or value extraction creates infrastructure pressure", "Any dataset stored in the cloud", "Any AI training dataset"], 1, "The course uses the 5 Vs and infrastructure consequences.", "Volume alone is not enough."),
  q("Which pair is most accurate?", ["tar compresses; gzip groups files", "tar groups files; gzip compresses", "checksum encrypts; tgz signs", "tgz is a filesystem"], 1, "tar creates an archive; gzip compresses it, producing tgz/tar.gz.", "Do not confuse archiving with compression."),
  q("What is a checksum used for?", ["Confidentiality", "Integrity verification", "Compression", "Network routing"], 1, "A checksum helps detect whether data changed during storage or transfer.", "It is not encryption."),
  q("Why did the professor stress choosing the right application?", ["It avoids all infrastructure work", "The algorithm/application can dominate resource needs", "It is a licensing requirement", "It replaces checksums"], 1, "Better application choice can reduce the need for brute-force scaling.", "More machines are not always the answer."),
  q("What is the main lesson of the brute force vs BLAST/BWA comparison?", ["Always buy more cloud machines first", "The selected application or indexed method can dominate runtime", "Checksums make searches faster", "BWA is a storage system"], 1, "The computational-challenge slides use BLAST/BWA to show that tool choice can change the infrastructure problem before scaling resources.", "Do not turn an application-choice lesson into a cloud-capacity answer.", "M1", [
    "Adding machines may help later, but the professor's point was to choose a suitable application before scaling.",
    "Correct. The comparison shows that an indexed/optimized tool can beat brute-force scaling by orders of magnitude.",
    "Checksums verify integrity after storage or transfer; they do not accelerate sequence search.",
    "BWA is an alignment tool in the example, not a storage architecture such as NAS or SAN.",
  ]),
  q("Why should huge uncompressed ASCII files usually not be moved around casually in this course?", ["Because ASCII cannot be checksummed", "Because compression/archive choices reduce transfer and storage pressure", "Because tar encrypts the file", "Because POSIX forbids text files"], 1, "The course explicitly warns against moving huge uncompressed ASCII files when a compressed archive is appropriate.", "Do not confuse compression, archiving and integrity checks.", "M1", [
    "ASCII files can be checksummed; checksum is about integrity, not whether text data can be moved.",
    "Correct. tar/tgz and compression choices matter because data movement is part of infrastructure cost.",
    "tar groups files; encryption is a different security operation.",
    "POSIX defines file interface/semantics; it does not forbid text files.",
  ]),
  q("Which statement about CPU threads is safest?", ["A thread is always a physical core", "Logical threads can improve utilization but do not equal new physical cores", "Threads are storage devices", "Threads replace caches"], 1, "Hyperthreading exposes logical execution contexts, not full independent cores.", "Counting logical threads as full cores is a trap."),
  q("Which is the main difference between bandwidth and latency?", ["Bandwidth is delay; latency is throughput", "Bandwidth is transfer rate; latency is response delay", "They are synonyms", "Latency applies only to storage"], 1, "Bandwidth measures amount per time; latency measures waiting time.", "Fast bandwidth does not eliminate latency."),
  q("What does IOPS measure?", ["CPU cycles", "Input/output operations per second", "Network addresses per subnet", "Power usage"], 1, "IOPS is useful for small/random I/O behavior.", "Bandwidth and IOPS answer different questions."),
  q("Why can tape be useful in large infrastructures?", ["It has excellent random access", "It can be cost-effective for cold/sequential data", "It replaces RAM", "It is POSIX by default"], 1, "Tape is often useful for cold archival data with sequential access patterns.", "Tape is not good for random access."),
  q("What is POSIX in this course?", ["A cloud provider", "A filesystem/interface semantics concept", "A RAID level", "A Docker image format"], 1, "POSIX describes familiar file operations and semantics.", "It is not simply any disk."),
  q("Which sequence makes a cloud block volume usable as files?", ["Attach, format, mount", "Mount, attach, format", "Format, detach, mount", "SSH, gzip, route"], 0, "The block device must be attached, given a filesystem and mounted.", "Provisioning alone is not mounting."),
  q("What is fairshare in a batch system?", ["A filesystem backup", "A scheduling policy considering usage/allocation", "A network protocol", "A Docker option"], 1, "Fairshare adjusts priority according to policy and historical use.", "It is not simple equal time for every user."),
  q("What does quota usually express?", ["A limit on resource use", "A checksum type", "A cloud deployment model", "A cache level"], 0, "Quota constrains the amount of resource a user/project may consume.", "Do not confuse quota with fairshare priority."),
  q("Which is the correct cloud-service mapping?", ["IaaS = application, SaaS = raw VM", "IaaS = infrastructure, PaaS = platform, SaaS = software application", "PaaS = power as a service", "SaaS = storage area service"], 1, "The course uses the standard IaaS/PaaS/SaaS split.", "IaaS is not just 'any cloud'."),
  q("Why is cloud not just virtualization?", ["Cloud forbids VMs", "Cloud adds service models, provisioning, elasticity and abstraction", "Virtualization is always physical", "Cloud has no networks"], 1, "Virtualization is a component; cloud adds operational/service layers.", "A VM alone is not the full cloud concept."),
  q("What is PUE?", ["Protocol usage estimate", "Power Usage Effectiveness", "Public user endpoint", "Parallel unit efficiency"], 1, "PUE measures datacenter facility efficiency.", "It is power/cooling scope, not network scope."),
  q("Which storage relation is correct?", ["DAS is directly attached storage", "NAS has no network", "SAN means server archive number", "TAN is a Docker feature"], 0, "DAS is direct; NAS/SAN/TAN are storage architecture terms in the course scope.", "Do not collapse all storage systems into 'disk'."),
  q("What is HTC optimized for?", ["Tightly coupled low-latency parallel jobs", "High throughput across many independent or loosely coupled tasks", "Single-thread latency only", "Filesystem formatting"], 1, "HTC maximizes throughput over many tasks.", "HTC is not HPC."),
  q("What is HPC optimized for?", ["Coordinated high-performance parallel computation", "Only web hosting", "Cold archives", "Identity federation"], 0, "HPC targets performance for tightly coupled or high-performance workloads.", "Do not define HPC as any cluster."),
  q("What does Amdahl's Law warn about?", ["Compression always helps", "Serial fractions limit parallel speedup", "OAuth authenticates users", "Containers need volumes"], 1, "Remaining serial work caps achievable speedup.", "Infinite processors do not give infinite speedup."),
  q("What is efficiency in parallel computing?", ["Speedup divided by number of processing elements", "Checksum divided by archive size", "Latency times bandwidth", "GPU memory size"], 0, "Efficiency tells how well added resources are used.", "High speedup can still have low efficiency."),
  q("What is UMA?", ["Uniform Memory Access", "Universal mount archive", "User managed authorization", "Untrusted machine account"], 0, "UMA means memory access time is uniform from processors.", "Do not confuse UMA/NUMA with cloud models."),
  q("Why can GPU comparisons be misleading?", ["GPUs never accelerate code", "Comparisons may use different optimization levels or include data-transfer costs unfairly", "CPUs cannot run serial code", "GPU means grid protocol unit"], 1, "The professor warned against unfair CPU vs GPU comparisons.", "Compare optimized implementations and include data movement."),
  q("What is a workload management system?", ["A REST format", "Software that queues, schedules and manages jobs", "An archive utility", "A checksum store"], 1, "WMS handles job submission and execution policy.", "It is not merely a shell script."),
  q("Push versus pull job submission concerns what?", ["Who initiates work placement/execution", "How tar compresses files", "Which cache is closest", "Which IDP signs SAML"], 0, "It describes job/task dispatch strategy.", "It is not network push notifications."),
  q("What is a replica in data management?", ["An extra logical/physical copy used for access, policy or resilience", "A CPU thread", "A Dockerfile line", "A Kerberos ticket"], 0, "Replicas support availability, locality or policy.", "Replicas are not automatically backups unless managed as such."),
  q("What is disaster recovery about?", ["Recovering service/data after major failure", "Making a filesystem POSIX", "Opening Docker port 80", "Running chmod"], 0, "It concerns failover and recovery planning.", "It is broader than a single retry."),
  q("What is a Docker image?", ["A running process", "A packaged filesystem/runtime template used to start containers", "A mounted volume", "A subnet"], 1, "Images are templates; containers are running instances.", "Image and container are not synonyms."),
  q("What does a Dockerfile provide?", ["A reproducible recipe for building an image", "A checksum only", "A cloud billing account", "A Kerberos realm"], 0, "A Dockerfile records image build steps.", "It is not the same as the built image."),
  q("What does Docker -v commonly do?", ["Maps persistence through a volume or bind mount", "Maps ports", "Deletes an image", "Starts Kubernetes"], 0, "The professor highlighted -v for persistence.", "Do not confuse -v with -p."),
  q("What does Docker -p commonly do?", ["Maps host/container ports", "Creates a checksum", "Formats a filesystem", "Requests fairshare"], 0, "It exposes container service ports through host ports.", "Port mapping can still be blocked by firewall/security groups."),
  q("What is Docker Compose best for in this course?", ["Defining and running multi-container stacks on one host", "Federated identity", "Replacing Kubernetes in production always", "Creating POSIX filesystems"], 0, "Compose uses YAML to describe services, networks and volumes.", "Compose is not the full cluster orchestration story."),
  q("Why was udocker included?", ["Run containers in userspace where normal Docker privileges may not be available", "Replace checksums", "Create SAML tokens", "Measure PUE"], 0, "udocker supports user-space container execution.", "Singularity usage is low priority by Corso."),
  q("What is object storage?", ["Key/object-based storage commonly accessed through APIs rather than POSIX paths", "Always a mounted NFS directory", "A CPU cache", "A Docker volume only"], 0, "Module 2 contrasts object storage with POSIX/NFS.", "Object storage is not automatically POSIX."),
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
  q("What does Docker NAT demonstrate in the container-networking lecture?", ["Outbound Internet access does not prove all container-to-container paths are open", "NAT turns a container into a Docker volume", "NAT replaces cloud security groups", "NAT is the same as OpenID Connect"], 0, "A container may reach the Internet through NAT while still being isolated from containers on other bridges or blocked from inbound access.", "Do not treat one successful ping as proof of full reachability.", "M2", [
    "Correct. NAT can enable outbound connectivity while other local or inbound paths remain blocked.",
    "Docker volumes are persistence mechanisms; NAT is network address translation.",
    "Cloud security groups can still block traffic even if Docker networking is configured correctly.",
    "OpenID Connect is an identity protocol layer over OAuth, unrelated to container NAT.",
  ]),
  q("Why is Portainer not a replacement for learning Docker commands and concepts?", ["It exposes the same Docker objects through a graphical interface", "It converts Docker images into Kubernetes pods automatically", "It removes the need for security groups", "It stores SAML assertions"], 0, "Portainer is a GUI over Docker state such as containers, logs, stats and consoles.", "A GUI does not change the underlying model.", "M2", [
    "Correct. Portainer visualizes and controls Docker concepts; it does not replace understanding them.",
    "Kubernetes pod creation is an orchestration concern, not automatic Portainer image conversion.",
    "Cloud firewall/security-group reachability still matters when Portainer maps ports.",
    "SAML assertions belong to federated identity, not Docker GUI management.",
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
  q("What is DevOps?", ["Combining development and operations practices with short feedback cycles", "A cloud storage protocol", "A checksum algorithm", "A Kerberos realm"], 0, "The course frames DevOps as a way of thinking and operating releases.", "Not just a tool name."),
  q("What is Kubernetes pod?", ["Basic deployable unit that encapsulates containerized application resources", "A public IP", "A Docker Hub token", "A RAID group"], 0, "Pods are core Kubernetes units and get cluster-level networking.", "A pod is not the whole cluster."),
  q("What does a Kubernetes deployment do?", ["Maintains desired replica state for pods", "Formats block devices", "Authenticates with SAML", "Compresses archives"], 0, "Deployments keep requested replicas running.", "Deleting a pod may cause replacement."),
  q("Why does Kubernetes use Services when pods already have IP addresses?", ["Pod IPs are private/changeable, while Services provide stable access policy", "Services are checksum files", "Services replace Dockerfiles", "Services are Italian identity providers"], 0, "A Service gives stable access to a logical set of pods whose individual IPs can change.", "Direct pod IP access is fragile.", "M2", [
    "Correct. Services abstract changing pod IPs and define how traffic reaches a group of pods.",
    "Checksums verify data integrity; Kubernetes Services are networking/access abstractions.",
    "Dockerfiles build images; Services expose or connect workloads.",
    "Identity providers belong to federation/AAI topics such as IDEM or eduGAIN, not Kubernetes Services.",
  ]),
  q("What is the right way to think about secrets versus configs?", ["Secrets hold sensitive data; configs hold non-sensitive configuration", "Configs are encrypted passwords and secrets are public notes", "Both are just Docker images", "Both are CPU scheduling policies"], 0, "Secrets protect passwords/tokens/keys; configs are for non-sensitive configuration files or values.", "Sensitive and non-sensitive runtime data should not be collapsed.", "M2", [
    "Correct. The course separates secret material from ordinary configuration.",
    "This reverses the distinction: configs are not the place for passwords.",
    "Images package runtime filesystems; secrets/configs are runtime configuration mechanisms.",
    "Scheduling policies such as fairshare belong to batch systems, not container secrets/configs.",
  ]),
  q("Which persistence/configuration choice is safest for a database password in a containerized stack?", ["A secret", "A Docker volume containing public data", "A plaintext value committed in docker-compose.yml", "A README sentence"], 0, "Passwords, tokens and keys should be handled as secrets rather than stored in source or images.", "Working once is not enough if credentials are exposed.", "M2", [
    "Correct. A secret is meant for sensitive runtime data such as passwords or tokens.",
    "A volume may persist data, but it is not automatically the right abstraction for protecting a password.",
    "The cloud-automation slides explicitly call plaintext credentials in Compose files the anti-pattern.",
    "A README documents use; it must not contain operational secrets.",
  ]),
  q("What is Infrastructure as Code?", ["Machine-readable templates describing infrastructure and services", "Writing data inside Docker images", "Manual clicking only", "A checksum table"], 0, "IaC lets systems interpret templates and create resources.", "The template describes what; the platform handles how."),
  q("What does serverless mean?", ["Provider manages server provisioning while user supplies event-triggered code", "There are literally no servers", "It is only SaaS", "It means no cost"], 0, "Serverless abstracts server management.", "Servers still exist."),
  q("What is FaaS?", ["Event-triggered function execution as a cloud service", "Fairshare as a Service", "Filesystem archive access", "Federated authentication assertion"], 0, "FaaS runs functions in response to triggers.", "Do not confuse it with a long-running VM."),
];

QUESTIONS.forEach((item, index) => {
  if (index >= 32) item.module = "M2";
});

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

const PROFESSOR_NOTES = [
  "The course is about infrastructure, not analytics or AI models.",
  "Do not choose infrastructure before understanding the application and data access pattern.",
  "IOPS and bandwidth are different exam concepts.",
  "Cloud is not just virtualization; it adds service models, provisioning, elasticity and abstraction.",
  "A Docker image, container, Dockerfile and volume are separate concepts.",
  "OAuth is authorization; OpenID Connect adds authentication.",
  "Kubernetes is operated through manifests and APIs; deleting one pod in a deployment is not the same as deleting the deployment.",
  "Serverless does not mean there are no servers; it means the provider manages them for the function execution model.",
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
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(() => QUESTIONS.filter((item) => answers[item.id] === item.correct).length, [answers]);
  const filteredQuestions = useMemo(() => QUESTIONS.filter((item) => {
    const moduleMatch = filter === "all" || item.module === filter;
    const mistakeMatch = !reviewMistakes || answers[item.id] !== undefined && answers[item.id] !== item.correct;
    return moduleMatch && mistakeMatch;
  }), [answers, filter, reviewMistakes]);
  const setAnswer = (questionId, optionIndex) => setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
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
        <Section eyebrow="Professor emphasis" title="Do not miss these">
          <div className="grid gap-3">
            {PROFESSOR_NOTES.map((note) => <div key={note} className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm font-bold leading-6 text-sky-900">{note}</div>)}
          </div>
        </Section>
      </div>
    </main>
  );
}

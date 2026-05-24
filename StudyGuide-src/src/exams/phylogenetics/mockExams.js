// Interactive mock exams generated from the uploaded Molecular Phylogenetics mock exam PDFs.
// Questions stay in English to match the original exam language.

export const PHYLO_MOCK_EXAMS = [
  {
    "id": "01",
    "title": "Mock Exam 1",
    "subtitle": "Closed questions across tree thinking, models, support, clocks, selection and coalescent theory.",
    "sourcePdf": "mock-exams/Phylogenetics_Mock_Exam_1.pdf",
    "questions": [
      {
        "kind": "exam",
        "question": "Phylogenetic systematics (cladistics) groups organisms based primarily on:",
        "options": [
          "Overall morphological and phenotypic similarity.",
          "Their unique shared ecological niches.",
          "Their evolutionary history and shared ancestry relationships.",
          "The total percentage of identity calculated across whole genomes."
        ],
        "answer": 2,
        "optionExplanations": [
          "Overall similarity can be phenetic and may group organisms by resemblance rather than ancestry.",
          "Ecological niches may converge independently and are not the basis of cladistics.",
          "Correct — cladistics groups taxa by common ancestry and shared derived characters.",
          "Genome identity can be useful evidence, but cladistics is not defined as whole-genome percent identity."
        ]
      },
      {
        "kind": "exam",
        "question": "A shared derived character state inherited from the immediate most recent common ancestor of a focal clade and defining monophyly is a/an:",
        "options": [
          "Symplesiomorphy.",
          "Synapomorphy.",
          "Autapomorphy.",
          "Homoplasy."
        ],
        "answer": 1,
        "optionExplanations": [
          "A symplesiomorphy is shared but ancestral relative to the focal clade, so it does not diagnose that clade.",
          "Correct — a synapomorphy is a shared derived trait inherited from the MRCA of the clade.",
          "An autapomorphy is derived but unique to one lineage, so it does not define a group.",
          "Homoplasy is similarity from convergence or reversal, not inheritance from the focal MRCA."
        ]
      },
      {
        "kind": "exam",
        "question": "Choose the INCORRECT statement regarding UPGMA:",
        "options": [
          "It calculates a pairwise distance matrix to cluster sequences.",
          "It produces unrooted, additive trees with varying lineage speeds.",
          "It explicitly assumes a constant molecular clock over evolutionary time.",
          "It results in an ultrametric tree where all tips are equidistant from the root."
        ],
        "answer": 1,
        "optionExplanations": [
          "This is true: UPGMA starts from pairwise distances.",
          "Correct — this is the incorrect statement. UPGMA produces rooted ultrametric trees and assumes equal rates, not varying lineage speeds.",
          "This is true: the strict clock assumption is central to UPGMA.",
          "This is true: UPGMA trees are ultrametric, with tips equally distant from the root."
        ]
      },
      {
        "kind": "exam",
        "question": "Which represents an empirical model optimized for amino acid substitution patterns?",
        "options": [
          "General Time Reversible (GTR)",
          "Kimura 2-Parameter (K80)",
          "Jones-Taylor-Thornton (JTT)",
          "Jukes-Cantor (JC69)"
        ],
        "answer": 2,
        "optionExplanations": [
          "GTR is a mechanistic nucleotide model, not an empirical amino-acid matrix.",
          "K80 is a nucleotide model distinguishing transitions and transversions.",
          "Correct — JTT is an empirical amino-acid substitution matrix estimated from protein datasets.",
          "JC69 is the simplest nucleotide model with equal rates and equal base frequencies."
        ]
      },
      {
        "kind": "exam",
        "question": "In MC3, the role of heated chains is to:",
        "options": [
          "Perform the final parameter and branch length posterior calculations.",
          "Flatten the posterior probability landscape to cross deep valleys and escape local optima.",
          "Artificially alter base frequencies to match composition variations.",
          "Accelerate burn-in by dropping early iterations dynamically."
        ],
        "answer": 1,
        "optionExplanations": [
          "The cold chain samples the target posterior; heated chains mainly help exploration.",
          "Correct — heated chains flatten the landscape so the sampler can move between distant peaks.",
          "Base-frequency alteration is handled by substitution models, not by heating chains.",
          "Burn-in is discarded by the user/software; heated chains are not a burn-in deletion mechanism."
        ]
      },
      {
        "kind": "exam",
        "question": "In an alignment scoring system, which pair completes the sentence: a/an ___ gap penalty applies a constant linear cost per gap position, while a/an ___ gap penalty charges a high cost to initiate a gap and a lower cost to extend it?",
        "options": [
          "linear; affine",
          "affine; linear",
          "local; global",
          "transition; transversion"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — linear penalties charge each gap position equally; affine penalties distinguish gap opening from extension.",
          "This reverses the definitions: affine is not the constant per-position penalty.",
          "Local and global describe alignment scope, not gap-cost structure.",
          "Transitions and transversions are substitution classes, not gap penalties."
        ]
      },
      {
        "kind": "exam",
        "question": "Which branch support metric is designed as a continuous variant of standard bootstrap for massive taxon samplings and rogue tips?",
        "options": [
          "Site Concordance Factor (sCF)",
          "Approximate Likelihood Ratio Test (aLRT)",
          "Transfer Bootstrap Expectation (TBE)",
          "Posterior Probability (PP)"
        ],
        "answer": 2,
        "optionExplanations": [
          "sCF measures the fraction of informative sites supporting a branch, not a continuous bootstrap variant.",
          "aLRT is a local likelihood support test, not a bootstrap expectation measure.",
          "Correct — TBE measures how much taxon transfer is needed between bootstrap trees and the reference branch, helping with rogue tips.",
          "Posterior probability is Bayesian support, not a bootstrap-derived metric."
        ]
      },
      {
        "kind": "exam",
        "question": "An outgroup is included a priori primarily to:",
        "options": [
          "Increase the signal-to-noise ratio of variable markers.",
          "Introduce alternative model testing environments.",
          "Provide an evolutionary direction and root to the target tree.",
          "Saturate the alignment matrix to prevent Long Branch Attraction."
        ],
        "answer": 2,
        "optionExplanations": [
          "Outgroups are not mainly marker filters.",
          "Model testing is separate from outgroup selection.",
          "Correct — the outgroup polarizes the tree and helps infer the root/direction of evolution.",
          "Saturation is a problem, not something introduced to prevent LBA."
        ]
      },
      {
        "kind": "exam",
        "question": "The Maximum Clade Credibility (MCC) tree is:",
        "options": [
          "The consensus tree displaying all clades appearing in more than 50% of samples.",
          "The single real sampled tree from the MCMC run maximizing the product of posterior clade probabilities.",
          "An artificial topology assembled by merging the longest branch lengths from distinct chains.",
          "A tree optimized to minimize internal node branch variances."
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes a majority-rule consensus tree, not MCC.",
          "Correct — the MCC tree is a sampled tree with the highest product of clade posterior probabilities.",
          "MCC does not merge branch lengths from different trees.",
          "MCC is not defined by minimizing branch-length variance."
        ]
      },
      {
        "kind": "exam",
        "question": "Which is NOT a major advantage of transcriptomes over whole genomes for phylogenomics?",
        "options": [
          "They yield many more markers than targeted single genes.",
          "They are cheaper, allowing higher taxon sampling.",
          "They provide flawless coverage of non-coding regions and structural mutations.",
          "They work without a mandatory pre-existing reference genome."
        ],
        "answer": 2,
        "optionExplanations": [
          "This is a real advantage: transcriptomes provide many coding markers.",
          "This is a real advantage: they are often cheaper than high-quality genomes.",
          "Correct — transcriptomes mainly capture expressed coding regions, not flawless non-coding or structural variation.",
          "This is often true: de novo transcriptome assembly can be used without a reference genome."
        ]
      },
      {
        "kind": "exam",
        "question": "Under Brownian Motion, the absolute variance of a quantitative trait across species increases:",
        "options": [
          "Exponentially relative to the number of nodes.",
          "Linearly as a function of time since divergence.",
          "Logarithmically until a stable adaptive peak.",
          "Symmetrically based on selection strength toward an optimum."
        ],
        "answer": 1,
        "optionExplanations": [
          "BM does not predict exponential variance growth by node count.",
          "Correct — in BM, expected variance accumulates linearly with time.",
          "A stable adaptive peak is associated with OU-like stabilizing selection, not BM.",
          "Selection toward an optimum is an OU feature, not pure BM."
        ]
      },
      {
        "kind": "exam",
        "question": "Which tree rearrangement search algorithm explores the largest landscape of alternatives with the lowest risk of local optima?",
        "options": [
          "Nearest Neighbor Interchange (NNI)",
          "Subtree Pruning and Regrafting (SPR)",
          "Tree Bisection and Reconnection (TBR)",
          "Metropolis-Hastings Swapping (MHS)"
        ],
        "answer": 2,
        "optionExplanations": [
          "NNI is fast but local and explores the smallest neighborhood.",
          "SPR is broader than NNI but less exhaustive than TBR.",
          "Correct — TBR is the most aggressive of these rearrangements and explores the broadest topology space.",
          "Metropolis-Hastings is an MCMC acceptance criterion, not this tree rearrangement family."
        ]
      },
      {
        "kind": "exam",
        "question": "A polyphyletic taxonomic group is uniquely defined as an assemblage that:",
        "options": [
          "Includes an ancestor and all descendants without exception.",
          "Consists of an ancestor and some, but not all, descendants.",
          "Includes two or more separate groups, each derived from separate common ancestors.",
          "Contains only terminal taxa with identical autapomorphies."
        ],
        "answer": 2,
        "optionExplanations": [
          "That defines a monophyletic group.",
          "That defines a paraphyletic group.",
          "Correct — polyphyly combines lineages whose MRCA also includes taxa outside the group.",
          "Autapomorphies diagnose individual lineages, not polyphyly."
        ]
      },
      {
        "kind": "exam",
        "question": "What is the primary limitation of simple Reciprocal Best Hit (RBH) for orthology?",
        "options": [
          "It requires massive clusters and week-long runtimes.",
          "It is strictly limited to mitochondrial markers.",
          "It fails to detect one-to-many or many-to-many orthology relationships.",
          "It is highly sensitive to transition/transversion ratios."
        ],
        "answer": 2,
        "optionExplanations": [
          "RBH is simple and relatively fast; runtime is not the primary conceptual limitation.",
          "RBH can be applied broadly to genes/proteins, not only mitochondria.",
          "Correct — RBH works best for one-to-one cases and misses complex duplication histories.",
          "Transition/transversion ratios concern nucleotide substitution models, not RBH logic."
        ]
      },
      {
        "kind": "exam",
        "question": "Under-partitioning a complex genomic supermatrix in ML typically leads to:",
        "options": [
          "Overfitting random sequencing noise.",
          "Biased parameter estimation by forcing distinct evolutionary rates into a single model.",
          "Inflation of ESS metrics.",
          "Automatic elimination of parsimony-informative positions."
        ],
        "answer": 1,
        "optionExplanations": [
          "Overfitting is more typical of over-partitioning, not under-partitioning.",
          "Correct — under-partitioning hides heterogeneity by forcing different processes into one model.",
          "ESS is an MCMC diagnostic and is not inflated by ML under-partitioning.",
          "Partitioning does not automatically remove informative sites."
        ]
      },
      {
        "kind": "exam",
        "question": "What ESS threshold is widely recognized as the minimum for adequate MCMC mixing?",
        "options": [
          "10",
          "50",
          "100",
          "200"
        ],
        "answer": 3,
        "optionExplanations": [
          "ESS 10 is far too low and indicates very poor sampling.",
          "ESS 50 is still weak for reliable posterior summaries.",
          "ESS 100 is often marginal, not the usual safe threshold.",
          "Correct — ESS around or above 200 is commonly treated as a minimum adequacy threshold."
        ]
      },
      {
        "kind": "exam",
        "question": "If Pagel's lambda (λ) is close to 0, this indicates that:",
        "options": [
          "The trait perfectly matches Brownian Motion expectations structured by the phylogeny.",
          "The trait distribution is independent of the phylogeny and resembles random noise.",
          "The trait is under extreme stabilizing selection toward an adaptive peak.",
          "The trait has experienced horizontal gene transfer across distant lineages."
        ],
        "answer": 1,
        "optionExplanations": [
          "That would be closer to λ = 1, not λ = 0.",
          "Correct — λ near 0 means phylogenetic covariance is essentially absent.",
          "Stabilizing selection is modeled by OU-like processes, not by λ = 0 itself.",
          "HGT is a gene-history process and is not what Pagel's lambda measures."
        ]
      },
      {
        "kind": "exam",
        "question": "Which is NOT an approach used to estimate divergence times?",
        "options": [
          "Least Squares Dating (LSD)",
          "Penalized Maximum Likelihood (PML)",
          "Bayesian Inference using BEAST",
          "Nearest Neighbor Interchange (NNI)"
        ],
        "answer": 3,
        "optionExplanations": [
          "LSD is a dating approach.",
          "Penalized likelihood can estimate divergence times while smoothing rates.",
          "BEAST is a Bayesian platform for divergence-time analysis.",
          "Correct — NNI is a topology rearrangement move, not a clock-dating method."
        ]
      },
      {
        "kind": "exam",
        "question": "In codon models, which pair completes the sentence: dN/dS ___ indicates purifying selection, whereas dN/dS ___ indicates positive selection?",
        "options": [
          "< 1; > 1",
          "= 1; < 1",
          "> 1; < 1",
          "< 0; = 0"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — ω=dN/dS below 1 indicates purifying selection, above 1 indicates positive selection.",
          "ω = 1 indicates neutral evolution, not purifying selection.",
          "This reverses the interpretation of dN/dS.",
          "dN/dS is a ratio of rates and is not interpreted with negative values here."
        ]
      },
      {
        "kind": "exam",
        "question": "In ML, total tree likelihood is the product of site probabilities, which assumes:",
        "options": [
          "All sites evolve at an identical substitution rate.",
          "Each alignment site evolves independently.",
          "Transitions and transversions have equal probabilities.",
          "Base frequencies remain strictly stationary across all ancestral nodes."
        ],
        "answer": 1,
        "optionExplanations": [
          "Rate heterogeneity can be modeled; identical rates are not required by the product rule itself.",
          "Correct — multiplying site likelihoods assumes conditional independence among sites.",
          "Equal transition/transversion rates is a JC-like model assumption, not the site product assumption.",
          "Stationarity can be model dependent; it is not the reason site probabilities are multiplied."
        ]
      },
      {
        "kind": "exam",
        "question": "The SH topology test is designed to compare multiple trees and is more ___ than the KH test because it adjusts for ___ comparisons.",
        "options": [
          "conservative; multiple",
          "liberal; single",
          "Bayesian; posterior",
          "ultrametric; clock-based"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — SH is more conservative than KH because it corrects for multiple tree comparisons.",
          "This is the opposite: SH is not more liberal and it handles multiple comparisons.",
          "SH is a frequentist topology test, not a Bayesian posterior method.",
          "Ultrametricity and clocks are unrelated to the SH vs KH distinction."
        ]
      },
      {
        "kind": "exam",
        "question": "In fossil calibration, which pair completes the sentence: a/an ___ group contains the last common ancestor of all living members and all descendants, while a/an ___ group contains extinct lineages outside the crown but closer to it than to any other living group?",
        "options": [
          "crown; stem",
          "stem; crown",
          "ingroup; outgroup",
          "monophyletic; polyphyletic"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — crown groups contain living descendants of their LCA; stem groups are extinct lineages outside the crown but close to it.",
          "This reverses crown and stem definitions.",
          "Ingroup/outgroup refers to analysis design, not fossil crown/stem placement.",
          "Monophyly/polyphyly is about clade composition, not the crown-stem fossil distinction."
        ]
      },
      {
        "kind": "exam",
        "question": "In Bayesian inference, the probability that the model and tree are correct given the observed alignment is the:",
        "options": [
          "Prior Probability.",
          "Likelihood function.",
          "Posterior Probability.",
          "Marginal Likelihood."
        ],
        "answer": 2,
        "optionExplanations": [
          "The prior is belief before observing the data.",
          "Likelihood is P(data | model), not P(model | data).",
          "Correct — posterior probability is P(model or tree | data).",
          "The marginal likelihood normalizes the posterior and is used in model comparison."
        ]
      },
      {
        "kind": "exam",
        "question": "In the coalescent, the probability that two gene copies merge in the previous generation is inversely proportional to the ___, and one standard haploid coalescent unit represents ___ generations.",
        "options": [
          "effective population size; Ne",
          "mutation rate; 1/mu",
          "number of genes; 2 genes",
          "tree length; one branch"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — coalescence is less likely in larger populations, and for haploids one coalescent unit is Ne generations.",
          "Mutation rate affects sequence change, not the basic coalescent waiting-time scale.",
          "The number of sampled genes is not the population-size parameter defining the coalescent unit.",
          "Tree length is an outcome, not the parameter in the coalescent probability."
        ]
      },
      {
        "kind": "exam",
        "question": "A singleton alignment column contains a variant state present in only ___ taxon, making that position completely ___ for Maximum Parsimony.",
        "options": [
          "one; uninformative",
          "two; informative",
          "all; diagnostic",
          "zero; saturated"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — a singleton occurs in one taxon only and does not help choose among alternative parsimony trees.",
          "A parsimony-informative site needs at least two states each present in at least two sequences.",
          "A state present in all taxa is constant, not singleton or diagnostic.",
          "Zero taxa cannot carry a variant state; saturation is a different issue."
        ]
      },
      {
        "kind": "exam",
        "question": "The phenomenon where the absolute evolutionary rate at a site changes across branches is ___, and failing to model it can lead to errors such as ___.",
        "options": [
          "heterotachy; long-branch attraction",
          "homology; orthology",
          "stationarity; ultrametricity",
          "synapomorphy; monophyly"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — heterotachy is rate variation through time across lineages at a site and can mislead topology, including LBA-like errors.",
          "Homology and orthology describe shared ancestry of characters/genes, not branch-specific rate shifts.",
          "Stationarity is constant composition through time; ultrametricity is equal root-to-tip distance.",
          "Synapomorphy and monophyly are desired phylogenetic signals, not rate-change artifacts."
        ]
      },
      {
        "kind": "exam",
        "question": "Which describes disruptive selection on a quantitative trait?",
        "options": [
          "The mean shifts toward one extreme phenotype.",
          "Extreme phenotypes on both ends have highest fitness, creating a bimodal distribution.",
          "Extreme phenotypes are selected against, reducing variance around the mean.",
          "Mutations accumulate randomly without affecting fitness."
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes directional selection.",
          "Correct — disruptive selection favors both extremes over intermediate phenotypes.",
          "That describes stabilizing selection.",
          "That describes neutral change, not disruptive selection."
        ]
      }
    ],
    "openEnded": {
      "prompt": "Explain the biological phenomenon of Incomplete Lineage Sorting (ILS) and explicitly state the two primary population or evolutionary conditions under which it is most likely to cause gene tree discordance.",
      "sampleAnswer": "Incomplete Lineage Sorting occurs when ancestral polymorphisms persist through rapid speciation events and alleles coalesce deeper than the species split, so gene trees can differ from the species tree. It is most likely when ancestral effective population sizes are large and speciation events are close together in time."
    }
  },
  {
    "id": "02",
    "title": "Mock Exam 2",
    "subtitle": "Exam-style practice on phylogenomics, alignment, Bayesian inference, support metrics and comparative methods.",
    "sourcePdf": "mock-exams/Phylogenetics_Mock_Exam_2.pdf",
    "questions": [
      {
        "kind": "exam",
        "question": "Phylogenomics is best defined as:",
        "options": [
          "The study of protein structure variations across organelles.",
          "The integration of genomic data and phylogenetic methods to infer evolutionary histories.",
          "A method relying exclusively on mitochondrial DNA loops.",
          "Structural modeling of ancestral chromosomes inside extinct taxa."
        ],
        "answer": 1,
        "optionExplanations": [
          "Protein structure variation is not the definition of phylogenomics.",
          "Correct — phylogenomics combines genome-scale data with phylogenetic inference.",
          "Mitochondrial data can be used, but phylogenomics is not restricted to mtDNA.",
          "Chromosome modeling may be comparative genomics, not the general definition of phylogenomics."
        ]
      },
      {
        "kind": "exam",
        "question": "Occam's Razor is the logical baseline for which tree reconstruction method?",
        "options": [
          "Maximum Likelihood",
          "Bayesian Inference",
          "Maximum Parsimony",
          "Neighbor-Joining"
        ],
        "answer": 2,
        "optionExplanations": [
          "ML maximizes probability under a model, not simply minimum changes.",
          "BI estimates posterior probabilities using likelihoods and priors.",
          "Correct — parsimony prefers the tree requiring the fewest evolutionary changes.",
          "NJ is a distance-based clustering method, not the Occam's Razor tree scorer."
        ]
      },
      {
        "kind": "exam",
        "question": "Choose the INCORRECT statement regarding Neighbor-Joining (NJ):",
        "options": [
          "It uses a Q-matrix adjusting raw distances by net divergence.",
          "It is a character-based phylogenetic reconstruction algorithm.",
          "It does not assume a constant molecular clock.",
          "It generates an unrooted topology by matching pairs of nodes."
        ],
        "answer": 1,
        "optionExplanations": [
          "This is true: NJ relies on the Q-matrix.",
          "Correct — this is incorrect. NJ is distance-based, not character-based.",
          "This is true: unlike UPGMA, NJ does not require a strict clock.",
          "This is true: NJ builds an unrooted tree by joining nodes iteratively."
        ]
      },
      {
        "kind": "exam",
        "question": "Which DNA substitution model allows equilibrium frequencies to vary freely but assumes all instantaneous transformation rates are equal?",
        "options": [
          "Jukes-Cantor (JC69)",
          "Kimura 2-Parameter (K80)",
          "Felsenstein 1981 (F81)",
          "General Time Reversible (GTR)"
        ],
        "answer": 2,
        "optionExplanations": [
          "JC69 fixes equal base frequencies and equal rates.",
          "K80 distinguishes transition and transversion rates but keeps equal frequencies in its classic form.",
          "Correct — F81 estimates unequal base frequencies while using equal exchangeability rates.",
          "GTR allows both unequal base frequencies and multiple rate parameters."
        ]
      },
      {
        "kind": "exam",
        "question": "Which clock model assumes substitution rates are inherited by descendant branches and change gradually relative to parental lineages?",
        "options": [
          "Strict Molecular Clock",
          "Autocorrelated Relaxed Clock",
          "Uncorrelated Lognormal Clock",
          "Local Molecular Clock"
        ],
        "answer": 1,
        "optionExplanations": [
          "A strict clock assumes one constant rate everywhere.",
          "Correct — autocorrelated clocks model gradual rate inheritance along neighboring branches.",
          "Uncorrelated relaxed clocks draw branch rates independently.",
          "A local clock assigns constant rates to designated clades, not gradual parent-child inheritance."
        ]
      },
      {
        "kind": "exam",
        "question": "In alignment pipelines, which pair completes the sentence: the ___ algorithm computes optimal local matches, while the ___ algorithm tracks complete end-to-end global alignments?",
        "options": [
          "Smith-Waterman; Needleman-Wunsch",
          "Needleman-Wunsch; Smith-Waterman",
          "MAFFT; Gblocks",
          "UPGMA; NJ"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — Smith-Waterman is local alignment and Needleman-Wunsch is global alignment.",
          "This reverses the local/global algorithms.",
          "MAFFT aligns sequences and Gblocks trims alignments; they are not the classic local/global pair.",
          "UPGMA and NJ are tree-building methods, not pairwise alignment algorithms."
        ]
      },
      {
        "kind": "exam",
        "question": "What is a primary technical advantage of RADseq/GBS over full-genome sequencing?",
        "options": [
          "It guarantees pristine full-length coding gene assembly.",
          "It provides very cheap genome-scale marker screening without reference templates.",
          "It avoids all errors associated with repetitive elements.",
          "It maps complete mitochondrial genome structure."
        ],
        "answer": 1,
        "optionExplanations": [
          "RADseq/GBS samples reduced genomic regions, not complete full-length genes.",
          "Correct — reduced-representation methods are cheap and useful for many samples.",
          "They reduce complexity but do not eliminate all repetitive-element issues.",
          "Mitochondrial genome architecture is not the purpose of RADseq/GBS."
        ]
      },
      {
        "kind": "exam",
        "question": "Burn-in is discarded at the start of Bayesian MCMC to prevent:",
        "options": [
          "The chain from being trapped in the global maximum.",
          "Over-parameterization of JC69.",
          "Random starting parameters from biasing stationary posterior estimates.",
          "Duplication of in-paralogs in orthogroups."
        ],
        "answer": 2,
        "optionExplanations": [
          "Burn-in does not prevent global-max trapping; it removes early non-stationary samples.",
          "Burn-in is not about substitution-model parameter count.",
          "Correct — early samples before stationarity can reflect starting conditions rather than the posterior.",
          "Orthogroup composition is unrelated to MCMC burn-in."
        ]
      },
      {
        "kind": "exam",
        "question": "A group containing an ancestor and some, but not all, descendant lineages is:",
        "options": [
          "Monophyletic.",
          "Paraphyletic.",
          "Polyphyletic.",
          "Ultrametric."
        ],
        "answer": 1,
        "optionExplanations": [
          "Monophyly includes the ancestor and all descendants.",
          "Correct — paraphyly excludes at least one descendant lineage from the ancestral group.",
          "Polyphyly combines separate lineages without their exclusive MRCA.",
          "Ultrametric describes equal root-to-tip distances, not group composition."
        ]
      },
      {
        "kind": "exam",
        "question": "Blomberg's K > 1 indicates:",
        "options": [
          "Trait evolution is random white noise independent of the tree.",
          "Trait is less conserved than expected under Brownian Motion.",
          "Trait is highly conserved; close relatives are more similar than expected under Brownian Motion.",
          "Trait is driven by directional positive selection across all tips."
        ],
        "answer": 2,
        "optionExplanations": [
          "That would be low phylogenetic signal, not K > 1.",
          "K < 1 indicates less similarity among relatives than BM expectation.",
          "Correct — K > 1 means stronger phylogenetic signal/conservatism than expected under BM.",
          "K alone does not diagnose universal directional positive selection."
        ]
      },
      {
        "kind": "exam",
        "question": "Which heuristic tree search clips out an entire subtree and regrafts it to alternative branches?",
        "options": [
          "Nearest Neighbor Interchange (NNI)",
          "Subtree Pruning and Regrafting (SPR)",
          "Tree Bisection and Reconnection (TBR)",
          "Reciprocal Best Rearrangement (RBR)"
        ],
        "answer": 1,
        "optionExplanations": [
          "NNI swaps adjacent subtrees around an internal branch.",
          "Correct — SPR prunes a subtree and regrafts it elsewhere.",
          "TBR cuts a tree into two and reconnects edges more broadly than SPR.",
          "RBR is not the standard tree rearrangement method here."
        ]
      },
      {
        "kind": "exam",
        "question": "Homoplasy is similarity driven by:",
        "options": [
          "Direct inheritance from a shared ancestral sequence.",
          "Convergent evolution or independent reversals.",
          "Lineage-specific duplications yielding single-copy orthogroups.",
          "Stochastic variations in low-temperature MCMC chains."
        ],
        "answer": 1,
        "optionExplanations": [
          "Direct inheritance is homology/synapomorphy, not homoplasy.",
          "Correct — homoplasy produces similarity independently, through convergence or reversal.",
          "Gene duplication concerns paralogy, not homoplasy.",
          "MCMC temperature is a sampling issue, not a biological source of similarity."
        ]
      },
      {
        "kind": "exam",
        "question": "An orthogroup is:",
        "options": [
          "Genes sharing structure but completely distinct functions.",
          "Homologous genes descending from a single ancestral gene in the last common ancestor of studied species.",
          "Tips clustered only by GC content.",
          "A pair of genes within one organism from tandem duplication."
        ],
        "answer": 1,
        "optionExplanations": [
          "Function is not the defining criterion of an orthogroup.",
          "Correct — an orthogroup is defined relative to a reference LCA and contains homologs from that ancestral gene.",
          "GC clustering is not orthogroup inference.",
          "A within-species duplicate pair is paralogy, not the full orthogroup definition."
        ]
      },
      {
        "kind": "exam",
        "question": "Over-partitioning a massive supermatrix in ML leads to:",
        "options": [
          "Forcing heterogeneous rates into one biased parameter.",
          "Overfitting by assigning excessive free parameters to short segments, reducing power.",
          "Eliminating transitions from the Q-matrix.",
          "Automatically turning phylograms into cladograms."
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes under-partitioning.",
          "Correct — over-partitioning can create too many parameters for too little data per partition.",
          "Partitioning does not remove transitions from substitution models.",
          "Tree drawing style is unrelated to partition-model complexity."
        ]
      },
      {
        "kind": "exam",
        "question": "What do site Concordance Factors (sCF) track along a branch?",
        "options": [
          "Proportion of gene trees recovering that split.",
          "Percentage of informative alignment sites supporting that branch split.",
          "Probability that the branch was generated during burn-in.",
          "Absolute evolutionary time scaled by fossils."
        ],
        "answer": 1,
        "optionExplanations": [
          "That is gene Concordance Factor (gCF), not sCF.",
          "Correct — sCF summarizes site-level support for a branch.",
          "Burn-in is not part of sCF.",
          "sCF is not a divergence-time metric."
        ]
      },
      {
        "kind": "exam",
        "question": "Which support metric does NOT use data resampling or deletion?",
        "options": [
          "Non-Parametric Bootstrap (BPs)",
          "Jackknife Support",
          "Approximate Likelihood Ratio Test (aLRT)",
          "Transfer Bootstrap Expectation (TBE)"
        ],
        "answer": 2,
        "optionExplanations": [
          "Bootstrap resamples alignment columns.",
          "Jackknife deletes a fraction of data.",
          "Correct — aLRT is a local likelihood comparison rather than a resampling/deletion support method.",
          "TBE is derived from bootstrap trees."
        ]
      },
      {
        "kind": "exam",
        "question": "In a substitution saturation plot, severe saturation is flagged by:",
        "options": [
          "A perfectly linear relationship between expected mutations and sequence divergence.",
          "A plateau where transitions flatten relative to transversions over time.",
          "The log-likelihood score collapsing to zero.",
          "A bell-shaped phenotypic distribution."
        ],
        "answer": 1,
        "optionExplanations": [
          "Linearity suggests little saturation.",
          "Correct — a plateau indicates repeated hits obscure the true number of substitutions.",
          "Log-likelihood collapse is not the standard visual saturation diagnostic.",
          "A bell curve describes trait distributions, not substitution saturation."
        ]
      },
      {
        "kind": "exam",
        "question": "RF distance quantifies topological disagreement by counting:",
        "options": [
          "Differences in branch lengths across identical splits.",
          "Unique symmetric bipartitions present in one tree but missing in the other.",
          "Transitions required to transform a Q-matrix.",
          "Frequency of ILS events inside nodes."
        ],
        "answer": 1,
        "optionExplanations": [
          "RF distance ignores branch lengths in its basic form.",
          "Correct — RF distance compares split/bipartition sets between trees.",
          "Q-matrix transitions are substitution-model parameters, not tree topology distance.",
          "RF distance measures topology disagreement, not biological ILS directly."
        ]
      },
      {
        "kind": "exam",
        "question": "Which pair completes the sentence: a/an ___ model uses explicit biological rules like selection, while a/an ___ model uses fixed rates from external databases?",
        "options": [
          "mechanistic; empirical",
          "empirical; mechanistic",
          "Bayesian; parsimony",
          "distance; character"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — mechanistic models estimate interpretable parameters; empirical models use pre-estimated matrices.",
          "This reverses the definitions.",
          "Bayesian/parsimony are inference frameworks, not this substitution-model distinction.",
          "Distance/character describes inference method categories, not empirical vs mechanistic models."
        ]
      },
      {
        "kind": "exam",
        "question": "Which feature represents an autapomorphy?",
        "options": [
          "An ancestral state present across a phylum.",
          "A unique derived trait confined to a single terminal taxon.",
          "A homoplasious structure shared by birds and bats.",
          "A point mutation inside an invariable site."
        ],
        "answer": 1,
        "optionExplanations": [
          "That is a plesiomorphic/symplesiomorphic character, not autapomorphy.",
          "Correct — an autapomorphy is derived and unique to one lineage.",
          "Bird and bat wings as similar functions are homoplasy, not an autapomorphy.",
          "An invariable site has no observed variation; it is not an autapomorphy."
        ]
      },
      {
        "kind": "exam",
        "question": "Which pair completes the AU-test sentence: it uses a ___ bootstrap with variable block sizes, removing selection bias when tree topologies are evaluated ___?",
        "options": [
          "multiscale; a posteriori",
          "non-parametric; before seeing the data",
          "parametric; only under a strict clock",
          "jackknife; without replacement"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — the AU test uses multiscale bootstrap and corrects selection bias from post-hoc topology selection.",
          "A standard non-parametric bootstrap is not the defining AU improvement.",
          "AU is not restricted to strict-clock parametric testing.",
          "Jackknife deletion is a different resampling framework."
        ]
      },
      {
        "kind": "exam",
        "question": "A branch-site codon model detects positive selection affecting a subset of ___ along specified ___ lineages.",
        "options": [
          "sites; foreground",
          "genes; background",
          "taxa; outgroup",
          "rates; clock"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — branch-site models look for selected sites on designated foreground branches.",
          "Background branches are usually the comparison set, not the target of positive selection.",
          "Outgroups root trees; they are not the branch-site target category.",
          "Clock rates are not the selected codon categories in branch-site models."
        ]
      },
      {
        "kind": "exam",
        "question": "PIC and PGLS are needed because raw species data often violate regression assumptions through:",
        "options": [
          "Extreme heteroscedasticity from missing transcriptomes.",
          "Statistical non-independence caused by shared evolutionary history.",
          "A perfect lognormal distribution preventing linear modeling.",
          "Base-composition saturation inside terminal loops."
        ],
        "answer": 1,
        "optionExplanations": [
          "Missing data can matter, but it is not the core phylogenetic comparative-method issue.",
          "Correct — related species are not independent datapoints because they share branches/ancestry.",
          "Trait distributions may vary, but lognormality is not the core PIC/PGLS reason.",
          "Sequence saturation is unrelated to comparative regression on species traits."
        ]
      },
      {
        "kind": "exam",
        "question": "If ancestral effective population size is extremely small, ILS among descendants will be severely:",
        "options": [
          "increased",
          "reduced",
          "unchanged",
          "converted into HGT"
        ],
        "answer": 1,
        "optionExplanations": [
          "Large, not small, ancestral Ne increases the chance of delayed coalescence and ILS.",
          "Correct — small Ne shortens coalescent times and reduces ILS probability.",
          "ILS probability depends strongly on Ne and time between speciation events.",
          "HGT is a different process from ILS."
        ]
      },
      {
        "kind": "exam",
        "question": "GTR incorporates ___ independent base frequency parameters and ___ unique symmetrical substitution rate values.",
        "options": [
          "3; 6",
          "4; 4",
          "1; 2",
          "6; 3"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — four frequencies sum to one, leaving 3 independent values; GTR has six exchangeability rates.",
          "Four frequencies are estimated but only three are independent; four rates is not GTR.",
          "That is closer to simplified models, not GTR.",
          "This swaps the frequency/rate counts."
        ]
      },
      {
        "kind": "exam",
        "question": "A clock model with uniform rate within designated monophyletic groups but different rates between groups is a/an ___ molecular clock.",
        "options": [
          "local",
          "strict",
          "uncorrelated relaxed",
          "autocorrelated relaxed"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — local clocks assign different constant rates to predefined clades/branches.",
          "A strict clock has one rate across the whole tree.",
          "Uncorrelated relaxed clocks assign independent branch rates, not group-specific constants.",
          "Autocorrelated relaxed clocks model gradual rate inheritance, not fixed local groups."
        ]
      },
      {
        "kind": "exam",
        "question": "Which distribution is most appropriate when geological barriers provide absolute hard maximum and soft minimum age boundaries?",
        "options": [
          "Uniform distribution",
          "Normal (Gaussian) distribution",
          "Lognormal distribution",
          "Symmetric binomial distribution"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — among these choices, a uniform prior is the standard bounded option when hard limits define an interval.",
          "A normal prior is symmetric and can place probability outside hard geological bounds.",
          "A lognormal prior is commonly used with a hard minimum and soft maximum tail, not a hard maximum interval here.",
          "A binomial distribution is discrete and not appropriate for continuous node ages."
        ]
      }
    ],
    "openEnded": {
      "prompt": "Describe the fundamental differences between systematic bias and stochastic bias in phylogenomics, and explain how adding more genes impacts each type of bias.",
      "sampleAnswer": "Stochastic bias is random error from limited data and usually decreases when more informative genes/sites are added. Systematic bias comes from model violations or misleading biological/technical processes, so adding more data can reinforce the wrong signal unless the model or dataset design is improved."
    }
  },
  {
    "id": "03",
    "title": "Mock Exam 3",
    "subtitle": "Integrated practice on character methods, codon models, partitioning, clock priors, MCMC diagnostics and bias.",
    "sourcePdf": "mock-exams/Phylogenetics_Mock_Exam_3.pdf",
    "questions": [
      {
        "kind": "exam",
        "question": "Define the primary difference between character-based and distance-based phylogenetic reconstruction:",
        "options": [
          "Character methods compress sites into percentages; distance methods analyze each position.",
          "Distance methods compute a pairwise matrix of total changes; character methods evaluate individual sites with evolutionary models.",
          "Character methods only use proteins; distance methods only use nucleotides.",
          "Distance methods require rooted chronograms; character methods build unrooted cladograms directly."
        ],
        "answer": 1,
        "optionExplanations": [
          "This reverses the central distinction.",
          "Correct — distance methods summarize pairwise divergence, while character methods score site patterns directly.",
          "Both method families can be applied to nucleotide or protein data.",
          "Rooting and chronograms are not the character-vs-distance distinction."
        ]
      },
      {
        "kind": "exam",
        "question": "Which model modifier captures the fraction of sites with zero probability of mutating?",
        "options": [
          "Gamma Distribution (+Γ)",
          "Invariable Sites (+I)",
          "All Rates Different (ARD)",
          "Equal Rates (ER)"
        ],
        "answer": 1,
        "optionExplanations": [
          "Gamma models rate variation among variable sites, not a zero-rate class specifically.",
          "Correct — +I estimates a proportion of invariant sites.",
          "ARD is a discrete-character model parameterization, not nucleotide invariant sites.",
          "ER assumes equal transition rates in discrete traits, not invariant-site fractions."
        ]
      },
      {
        "kind": "exam",
        "question": "Choose the INCORRECT statement about Maximum Parsimony:",
        "options": [
          "It minimizes the total number of required mutations.",
          "It is prone to LBA under rapid rates.",
          "It relies on informative sites where a state appears in at least two taxa.",
          "It uses complex time-reversible substitution matrices to calculate branch lengths."
        ],
        "answer": 3,
        "optionExplanations": [
          "This is true: MP chooses the tree with the fewest changes.",
          "This is true: MP can be misled by long-branch attraction.",
          "This is true in practice: parsimony-informative sites drive topology choice.",
          "Correct — this is incorrect. Time-reversible substitution matrices are ML/BI model ingredients, not MP scoring."
        ]
      },
      {
        "kind": "exam",
        "question": "What do out-paralogs represent?",
        "options": [
          "Duplicates after a designated speciation boundary within one organism.",
          "Paralogs from a duplication before the speciation of the study group.",
          "Orthologs sharing identical function across sister taxa.",
          "Genes modified by horizontal transfer between microbes."
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes in-paralogs relative to the speciation boundary.",
          "Correct — out-paralogs trace to duplications older than the relevant speciation event.",
          "Orthology is defined by speciation, not identical function.",
          "HGT creates xenology-like histories, not out-paralogy."
        ]
      },
      {
        "kind": "exam",
        "question": "Which sequencing approach is lowest cost per sample but restricted to population genomics or fine-scale phylogenies?",
        "options": [
          "Whole-Genome Sequencing",
          "RADseq / GBS",
          "Targeted Transcriptomics",
          "Mitochondrial Genome Assembly"
        ],
        "answer": 1,
        "optionExplanations": [
          "Whole genomes are powerful but not the lowest-cost per sample option.",
          "Correct — RADseq/GBS are cheap reduced-representation methods best for shallow scales.",
          "Transcriptomics provides many coding markers but is not the lowest reduced-representation option.",
          "Mitogenomes are cheap and useful, but RADseq/GBS are the population-genomic reduced-representation answer here."
        ]
      },
      {
        "kind": "exam",
        "question": "In Bayesian MC3, which pair completes the sentence: a/an ___ chain samples the target posterior, while parallel ___ chains explore a flattened landscape?",
        "options": [
          "cold; heated",
          "heated; cold",
          "burn-in; posterior",
          "prior; likelihood"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — the cold chain targets the posterior; heated chains help exploration.",
          "This reverses MC3 roles.",
          "Burn-in is a phase to discard, not a chain type.",
          "Prior and likelihood are Bayesian quantities, not MC3 chain types."
        ]
      },
      {
        "kind": "exam",
        "question": "The LRT statistic is calculated as:",
        "options": [
          "2(L1 + L0)",
          "2(L1 - L0)",
          "(L1 - L0) / 2",
          "L1 / L0"
        ],
        "answer": 1,
        "optionExplanations": [
          "The null and alternative log-likelihoods are subtracted, not added.",
          "Correct — the likelihood-ratio statistic is 2 times the log-likelihood difference.",
          "The statistic is multiplied by 2, not divided by 2.",
          "The classic LRT is based on a difference of log-likelihoods, not a raw ratio in this form."
        ]
      },
      {
        "kind": "exam",
        "question": "A monophyletic clade is uniquely diagnosed by:",
        "options": [
          "Symplesiomorphies.",
          "Synapomorphies.",
          "Homoplasies.",
          "Autapomorphies."
        ],
        "answer": 1,
        "optionExplanations": [
          "Symplesiomorphies are shared ancestral states and can mislead clade diagnosis.",
          "Correct — synapomorphies are shared derived traits defining clades.",
          "Homoplasies are independent similarities, not evidence of clade ancestry.",
          "Autapomorphies are unique to one lineage and do not diagnose a group."
        ]
      },
      {
        "kind": "exam",
        "question": "In an edge-proportional partition model:",
        "options": [
          "All partitions share identical absolute branch lengths.",
          "Each partition has its own topology and branch lengths.",
          "Partitions share topology and relative branch lengths, but each has a scaling factor.",
          "All partitions must use empirical JC format."
        ],
        "answer": 2,
        "optionExplanations": [
          "That describes an edge-linked equal branch-length model.",
          "That describes an edge-unlinked partition model.",
          "Correct — edge-proportional models keep the same tree shape/relative lengths but scale partitions.",
          "JC is not an empirical model and is unrelated to edge-proportional partitioning."
        ]
      },
      {
        "kind": "exam",
        "question": "Which describes an exponential distribution prior for node calibration?",
        "options": [
          "Equal probability across hard minimum and maximum bounds.",
          "Peak at the specified minimum age, declining rapidly into the past.",
          "Symmetric bell curve around a mean.",
          "Heavy asymmetric tail to infinity without a minimum barrier."
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes a uniform prior.",
          "Correct — exponential calibration priors place high density near the minimum and decrease toward older ages.",
          "That describes a normal/Gaussian prior.",
          "Exponential priors usually start at an offset/minimum; this option omits that key boundary."
        ]
      },
      {
        "kind": "exam",
        "question": "What ESS indicates a weak, poorly mixed MCMC trace requiring longer runs?",
        "options": [
          "ESS less than 100",
          "ESS exactly 200",
          "ESS near 500",
          "ESS exceeding 1000"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — ESS below 100 is weak and suggests poor sampling/mixing.",
          "ESS around 200 is often treated as a minimal acceptable threshold.",
          "ESS near 500 is generally better, not weak.",
          "ESS above 1000 indicates strong sampling, not poor mixing."
        ]
      },
      {
        "kind": "exam",
        "question": "Which method directly provides a rooted, ultrametric tree by assuming a strict molecular clock?",
        "options": [
          "Neighbor-Joining (NJ)",
          "Maximum Likelihood (ML)",
          "UPGMA",
          "Bayesian Inference (BI)"
        ],
        "answer": 2,
        "optionExplanations": [
          "NJ produces an unrooted tree and does not assume a strict clock.",
          "ML can estimate many tree types but does not inherently produce a strict-clock ultrametric tree.",
          "Correct — UPGMA assumes equal rates and returns a rooted ultrametric tree.",
          "BI can use clock models, but it is not defined by UPGMA's strict ultrametric clustering."
        ]
      },
      {
        "kind": "exam",
        "question": "Which bias occurs due to random sampling fluctuations from short alignments even when the model is correct?",
        "options": [
          "Systematic Bias",
          "Stochastic Bias",
          "Compositional Heterogeneity",
          "Long Branch Attraction"
        ],
        "answer": 1,
        "optionExplanations": [
          "Systematic bias persists because the model/process is wrong or violated.",
          "Correct — stochastic bias is random error from limited data.",
          "Compositional heterogeneity is a model violation/source of systematic bias.",
          "LBA is a topology artifact often linked to systematic or model issues, not the definition here."
        ]
      },
      {
        "kind": "exam",
        "question": "What does gCF = 25% on an internal branch mean?",
        "options": [
          "The branch has 25% posterior probability.",
          "Exactly 25% of single-locus gene trees contain that branch split.",
          "Only 25% of sites are parsimony-informative.",
          "The clock rate accelerated by 25%."
        ],
        "answer": 1,
        "optionExplanations": [
          "Posterior probability is Bayesian support, not gCF.",
          "Correct — gene Concordance Factor is the fraction of gene trees supporting the reference split.",
          "That would be a site/alignment statistic, not gCF.",
          "gCF is about gene-tree concordance, not clock-rate acceleration."
        ]
      },
      {
        "kind": "exam",
        "question": "If a fossil is designated as a stem fossil rather than a crown fossil, it means:",
        "options": [
          "It shares every synapomorphy of living group members.",
          "It belongs to an extinct lineage outside the living crown group but closer to it than to any other living lineage.",
          "It represents the ancestral root sequence of all life.",
          "It cannot be used for a hard minimum age constraint."
        ],
        "answer": 1,
        "optionExplanations": [
          "A stem fossil need not fall inside the crown group or share every crown synapomorphy.",
          "Correct — stem fossils sit outside the living crown but on the total group leading to it.",
          "Stem fossils are not universal root ancestors.",
          "Stem fossils can still provide calibration information, depending on placement and interpretation."
        ]
      },
      {
        "kind": "exam",
        "question": "The property where a future state depends only on the current state is:",
        "options": [
          "Time reversibility.",
          "The Markov property.",
          "Rate homogeneity.",
          "Stationary distribution."
        ],
        "answer": 1,
        "optionExplanations": [
          "Time reversibility means the process has the same form forward/backward at equilibrium.",
          "Correct — the Markov property is memorylessness: future depends on current state only.",
          "Rate homogeneity means the same process/rates across lineages or time.",
          "Stationarity means state frequencies remain constant through time."
        ]
      },
      {
        "kind": "exam",
        "question": "Which nucleotide model fixes base frequencies at 25% and uses one rate for all mutations?",
        "options": [
          "Kimura 2-Parameter (K80)",
          "Felsenstein 1981 (F81)",
          "Jukes-Cantor (JC69)",
          "General Time Reversible (GTR)"
        ],
        "answer": 2,
        "optionExplanations": [
          "K80 distinguishes transitions from transversions.",
          "F81 allows unequal base frequencies.",
          "Correct — JC69 assumes equal base frequencies and one substitution rate.",
          "GTR is the most general reversible model with unequal rates and frequencies."
        ]
      },
      {
        "kind": "exam",
        "question": "Which topology test assigns relative-support probabilities summing to 1 across competing trees?",
        "options": [
          "Approximately Unbiased (AU) test",
          "Shimodaira-Hasegawa (SH) test",
          "Expected Likelihood Weights (ELW) test",
          "Kishino-Hasegawa (KH) test"
        ],
        "answer": 2,
        "optionExplanations": [
          "AU reports p-values adjusted by multiscale bootstrap, not relative weights summing to 1.",
          "SH reports adjusted p-values for multiple comparisons.",
          "Correct — ELW assigns expected likelihood weights that sum to 1 over candidate trees.",
          "KH compares predefined trees using likelihood differences, not summed support weights."
        ]
      },
      {
        "kind": "exam",
        "question": "Which pair completes the sentence: the undirected random-walk continuous trait model is ___, while the stabilizing-selection peak model is ___?",
        "options": [
          "Brownian Motion; Ornstein-Uhlenbeck",
          "Ornstein-Uhlenbeck; Brownian Motion",
          "Mk; GTR",
          "ARD; ER"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — BM is passive random drift; OU adds attraction toward an optimum.",
          "This reverses the two continuous trait models.",
          "Mk and GTR are discrete-trait/sequence substitution models, not continuous trait BM/OU.",
          "ARD and ER are discrete-character transition-rate parameterizations."
        ]
      },
      {
        "kind": "exam",
        "question": "What is the advantage of affine gap cost over linear gap cost?",
        "options": [
          "It removes all insertion blocks.",
          "It charges a high gap-opening cost and lower extension cost, matching long indel events.",
          "It forces equal sequence lengths without gaps.",
          "It works independently of transition/transversion bias."
        ],
        "answer": 1,
        "optionExplanations": [
          "Affine gaps do not remove insertions; they score them more biologically.",
          "Correct — a long gap often represents one indel event, so opening is costly but extension is cheaper.",
          "Gaps are still used; equal length is achieved through alignment, not by forbidding gaps.",
          "Transition/transversion bias concerns substitutions, not gap scoring."
        ]
      },
      {
        "kind": "exam",
        "question": "Which pair completes the sentence: non-parametric bootstrapping resamples columns ___ replacement, whereas jackknife deletes a fixed fraction of columns ___ replacement?",
        "options": [
          "with; without",
          "without; with",
          "with; with",
          "without; without"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — bootstrap samples with replacement; jackknife removes data without replacement.",
          "This reverses the two resampling schemes.",
          "Jackknife is deletion/subsampling, not resampling with replacement.",
          "Bootstrap specifically uses replacement, so the first blank cannot be without."
        ]
      },
      {
        "kind": "exam",
        "question": "In codon-based alignments, indels must occur in multiples of ___ nucleotides to avoid disruptive ___ mutations.",
        "options": [
          "three; frameshift",
          "two; transition",
          "one; synonymous",
          "four; nonsense"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — codons have three nucleotides, and non-triplet indels shift the reading frame.",
          "Transitions are substitutions, not frame disruptions from indels.",
          "Single-nucleotide indels cause frameshifts, not synonymous changes.",
          "Codons are triplets, not groups of four."
        ]
      },
      {
        "kind": "exam",
        "question": "Independent Bayesian MCMC runs converging on distinct likelihood plateaus/topologies indicates:",
        "options": [
          "Excellent mixing across the global landscape.",
          "Severe failure of mixing, with chains trapped in local peaks.",
          "Elimination of across-site rate heterogeneity.",
          "Strong positive selection on the dataset."
        ],
        "answer": 1,
        "optionExplanations": [
          "Excellent mixing would have independent runs exploring the same posterior distribution.",
          "Correct — different plateaus indicate poor mixing/convergence.",
          "Rate heterogeneity is a model feature, not diagnosed by divergent chain topologies.",
          "Positive selection is not diagnosed from chain convergence behavior."
        ]
      },
      {
        "kind": "exam",
        "question": "The GY94 codon model parameterizes evolutionary pressure using the ratio:",
        "options": [
          "ω = dN/dS",
          "κ = transitions/transversions",
          "πA/πG",
          "ESS/RF"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — omega, dN/dS, compares nonsynonymous and synonymous substitution rates.",
          "Kappa is a nucleotide transition/transversion bias parameter.",
          "Base-frequency ratios do not summarize codon selection pressure.",
          "ESS and RF are diagnostics/tree-distance metrics, not codon selection ratios."
        ]
      },
      {
        "kind": "exam",
        "question": "If unrelated taxa independently evolve matching GC contents, standard reconstruction can be misled by:",
        "options": [
          "compositional attraction",
          "incomplete lineage sorting",
          "MCC summarization",
          "ultrametricity"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — compositional attraction groups taxa by similar composition rather than ancestry.",
          "ILS is biological gene-tree/species-tree discordance, not GC-content convergence.",
          "MCC is a Bayesian tree summary method.",
          "Ultrametricity describes equal root-to-tip distances."
        ]
      },
      {
        "kind": "exam",
        "question": "aLRT saves computation by evaluating only the alternative ___ configuration around the branch of interest.",
        "options": [
          "nearest-neighbor interchange (NNI)",
          "whole-tree TBR",
          "orthogroup clustering",
          "molecular clock calibration"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — aLRT uses local NNI-like alternatives around a branch.",
          "TBR is a broader tree-search move, not the local aLRT shortcut.",
          "Orthogroup clustering is upstream comparative genomics, not branch support testing.",
          "Clock calibration estimates node ages, not local likelihood support."
        ]
      },
      {
        "kind": "exam",
        "question": "Which amino acid matrix was optimized for transmembrane proteins rather than soluble globular proteins?",
        "options": [
          "Dayhoff's PAM250 matrix",
          "The specialized JTT membrane matrix",
          "WAG matrix",
          "BLOSUM62 matrix"
        ],
        "answer": 1,
        "optionExplanations": [
          "PAM250 is a classic general empirical amino-acid matrix.",
          "Correct — specialized JTT membrane matrices target transmembrane protein substitution patterns.",
          "WAG is a general empirical protein model, not specifically membrane-optimized.",
          "BLOSUM62 is a general alignment scoring matrix, not the specific membrane model here."
        ]
      }
    ],
    "openEnded": {
      "prompt": "Define heterotachy in sequence evolution and explain how failing to incorporate it into an ML model affects tree reconstruction accuracy.",
      "sampleAnswer": "Heterotachy is variation in the evolutionary rate of the same site across different branches or time periods. If an ML model assumes site rates are constant across lineages, it can misinterpret rate shifts as shared ancestry and reconstruct biased or incorrect topologies, including long-branch-attraction-like errors."
    }
  }
];

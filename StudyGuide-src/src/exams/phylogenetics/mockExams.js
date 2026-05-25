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
  },
  {
    "id": "04",
    "title": "Mock Exam 4 — Extra Set 1",
    "subtitle": "Additional 30-question set covering tree thinking, orthology, alignment, distance/character methods and substitution models.",
    "sourceFile": "mock-exams/Phylo_Exam_All_Sets.txt",
    "sourceLabel": "Open question set",
    "questions": [
      {
        "kind": "exam",
        "question": "Which of the following best defines a synapomorphy?",
        "options": [
          "A unique trait in a single taxon",
          "An ancestral trait shared by multiple taxa",
          "A shared derived trait inherited from the most recent common ancestor",
          "A trait that arose independently by convergence"
        ],
        "answer": 2,
        "optionExplanations": [
          "An autapomorphy is derived but unique to one terminal lineage; it can diagnose that lineage, not a clade shared by several taxa.",
          "A symplesiomorphy is shared, but ancestral relative to the focal group; it can mislead if used to define a clade.",
          "Correct — a synapomorphy is a derived state shared because it was present in the most recent common ancestor of the focal clade.",
          "That describes homoplasy/convergence: similarity arising independently rather than by inheritance from the focal MRCA."
        ]
      },
      {
        "kind": "exam",
        "question": "An autapomorphy is:",
        "options": [
          "A shared derived trait among taxa",
          "A unique derived trait in one lineage",
          "An ancestral trait shared by a clade",
          "A hypothetical ancestral character"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is a synapomorphy: it is shared and derived, so it can define a clade.",
          "Correct — an autapomorphy is a derived character state restricted to one lineage or terminal taxon.",
          "That describes a shared ancestral state, closer to a symplesiomorphy than an autapomorphy.",
          "A hypothetical ancestral character may be reconstructed at a node, but it is not necessarily unique to one lineage."
        ]
      },
      {
        "kind": "exam",
        "question": "A symplesiomorphy refers to:",
        "options": [
          "A shared ancestral trait that does *not* define a specific clade",
          "A shared derived trait that defines a clade",
          "A unique derived trait in one taxon",
          "A trait resulting from convergent evolution"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — a symplesiomorphy is shared by multiple taxa because it was present before the focal clade originated, so it does not diagnose that clade.",
          "That is a synapomorphy: shared and derived relative to the focal clade.",
          "That is an autapomorphy: derived but unique to one taxon.",
          "That describes homoplasy, where similarity is not inherited from the common ancestor being considered."
        ]
      },
      {
        "kind": "exam",
        "question": "A monophyletic group must include:",
        "options": [
          "Its most recent common ancestor and *all* of its descendants",
          "Its ancestor but only some descendants",
          "Taxa from separate ancestors with similar traits",
          "Any set of taxa sharing a character state"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — monophyly requires the MRCA plus every descendant of that ancestor.",
          "That is paraphyly: the ancestor is included, but some descendants are left out.",
          "That describes polyphyly: taxa are grouped without including their true MRCA.",
          "Sharing any character is not enough; the group must correspond to ancestry, not just resemblance."
        ]
      },
      {
        "kind": "exam",
        "question": "Polyphyletic groups are characterized by:",
        "options": [
          "Including the common ancestor and all its descendants",
          "Including taxa that lack their most recent common ancestor",
          "Including only one lineage",
          "Always being fully resolved in a cladogram"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is a monophyletic group, not a polyphyletic one.",
          "Correct — polyphyletic groups join taxa while excluding the MRCA that would connect them naturally.",
          "A single lineage may be a terminal taxon or a small clade, but polyphyly is about an artificial grouping of separate lineages.",
          "Resolution of the drawing is unrelated; a fully resolved cladogram can still contain an artificial polyphyletic label."
        ]
      },
      {
        "kind": "exam",
        "question": "Paraphyletic groups exclude:",
        "options": [
          "No descendants-include all lineages",
          "Some descendants of their most recent common ancestor",
          "All taxa outside the focal clade",
          "Only outgroup taxa"
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes monophyly: no descendants of the MRCA are excluded.",
          "Correct — a paraphyletic group includes the MRCA but leaves out at least one descendant lineage.",
          "Excluding outside taxa is normal for any focal clade; it is not what makes a group paraphyletic.",
          "Outgroups are outside the focal ingroup; paraphyly is about excluding descendants inside the MRCA’s lineage."
        ]
      },
      {
        "kind": "exam",
        "question": "In a rooted phylogenetic tree, the root represents:",
        "options": [
          "The most recent common ancestor of all tips",
          "A terminal (leaf) taxon",
          "A hypothetical midpoint of a branch",
          "The fastest-evolving lineage"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — the root is the MRCA of all terminal taxa included in the rooted tree.",
          "A terminal or leaf taxon is an observed tip, not the root.",
          "A midpoint can sometimes be used as a rooting method, but the root itself represents ancestry, not merely the middle of a branch.",
          "The fastest-evolving lineage may have a long branch; it does not define the root."
        ]
      },
      {
        "kind": "exam",
        "question": "What is the primary purpose of an outgroup in phylogenetic analysis?",
        "options": [
          "To estimate branch-lengths in substitutions",
          "To provide a calibration for molecular clock analyses",
          "To root the tree and polarize character changes",
          "To define operational taxonomic units (OTUs)"
        ],
        "answer": 2,
        "optionExplanations": [
          "Branch lengths can be estimated with models and data; an outgroup is mainly used for directionality.",
          "Calibration uses fossils, sampling dates, or rates; an outgroup is not primarily a clock calibration.",
          "Correct — the outgroup roots the tree and helps infer which character states are ancestral versus derived in the ingroup.",
          "OTUs are the operational units being analyzed; the outgroup is a taxon or set of taxa outside the ingroup."
        ]
      },
      {
        "kind": "exam",
        "question": "Ingroup taxa are the:",
        "options": [
          "Lineages assumed outside the focal clade",
          "Taxa used to root the tree",
          "Focus of the phylogenetic analysis",
          "Hypothetical ancestors"
        ],
        "answer": 2,
        "optionExplanations": [
          "Those are outgroup taxa, not the ingroup.",
          "Outgroups are used for rooting; they are not the main focus of the analysis.",
          "Correct — ingroup taxa are the focal taxa whose relationships the analysis is trying to infer.",
          "Hypothetical ancestors are internal nodes or reconstructed states, not observed ingroup taxa."
        ]
      },
      {
        "kind": "exam",
        "question": "Which diagram only shows branching order (topology) without meaningful branch lengths?",
        "options": [
          "Phylogram",
          "Chronogram",
          "Cladogram",
          "Distance matrix"
        ],
        "answer": 2,
        "optionExplanations": [
          "A phylogram has meaningful branch lengths, usually proportional to amount of change.",
          "A chronogram has branch lengths scaled to time.",
          "Correct — a cladogram shows topology only; branch lengths are not interpreted quantitatively.",
          "A distance matrix is tabular pairwise information, not a tree diagram."
        ]
      },
      {
        "kind": "exam",
        "question": "In a phylogram, branch lengths typically represent:",
        "options": [
          "Time since divergence",
          "Amount of character change (e.g., substitutions)",
          "Number of taxa in each clade",
          "Bootstrap support values"
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes a chronogram or timetree more than a phylogram.",
          "Correct — in a phylogram, branch length usually represents amount of evolutionary change, such as substitutions per site.",
          "The number of taxa can affect the shape of a clade but is not encoded as branch length.",
          "Support values are labels on nodes/branches; they are not the branch length itself."
        ]
      },
      {
        "kind": "exam",
        "question": "In a chronogram (timetree), branch lengths indicate:",
        "options": [
          "Number of nucleotide changes",
          "Relative divergence times",
          "Bootstrap support",
          "Topological distance"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is typical of a phylogram, where branch lengths represent change.",
          "Correct — in a chronogram, branch lengths are scaled to relative or absolute time.",
          "Bootstrap support is a confidence/support annotation, not the time scale.",
          "Topological distance counts relationships or splits; it is not the temporal meaning of a chronogram."
        ]
      },
      {
        "kind": "exam",
        "question": "The Neutral Theory of Molecular Evolution (Kimura) posits that:",
        "options": [
          "Natural selection drives most molecular changes",
          "Most changes are neutral or nearly neutral and fixed by drift",
          "Mutation rates vary unpredictably across genes",
          "Molecular clocks never deviate"
        ],
        "answer": 1,
        "optionExplanations": [
          "Neutral theory does not deny selection, but it argues that many molecular substitutions are not adaptive.",
          "Correct — Kimura’s neutral theory emphasizes neutral or nearly neutral mutations fixed largely by genetic drift.",
          "Mutation-rate variation can happen, but it is not the core claim of neutral theory.",
          "Neutral theory is compatible with approximate clocks, but it does not say clocks never deviate."
        ]
      },
      {
        "kind": "exam",
        "question": "The molecular clock hypothesis suggests that:",
        "options": [
          "Substitutions accumulate at a roughly constant rate over time",
          "Evolution proceeds in rapid bursts only",
          "All sites in a gene evolve at the same rate",
          "Clock-like behavior holds only for morphological traits"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — the molecular clock hypothesis states that substitutions accumulate roughly linearly with time under certain conditions.",
          "Rapid bursts are rate shifts, not the clock hypothesis.",
          "Among-site rate variation is a separate issue; a clock concerns rates across lineages/time.",
          "The molecular clock is about molecular sequence change, not only morphological traits."
        ]
      },
      {
        "kind": "exam",
        "question": "Orthologous genes are those that:",
        "options": [
          "Arise by gene duplication within a species",
          "Diverge by speciation and retain the same function",
          "Perform similar functions but have different ancestry",
          "Are defined by reciprocal best BLAST hits"
        ],
        "answer": 1,
        "optionExplanations": [
          "That defines paralogy: duplicates within a genome or lineage.",
          "Correct as the best option — orthologs diverge through speciation; function is often conserved, though formal orthology is based on ancestry rather than function alone.",
          "Similar function with different ancestry is analogy, not orthology.",
          "RBH is an operational heuristic for detecting possible orthologs, not the definition of orthology."
        ]
      },
      {
        "kind": "exam",
        "question": "Paralogous genes originate from:",
        "options": [
          "Speciation events",
          "Gene duplication events",
          "Convergent evolution",
          "Horizontal gene transfer"
        ],
        "answer": 1,
        "optionExplanations": [
          "Genes separated by speciation are orthologs.",
          "Correct — paralogs originate from gene duplication events.",
          "Convergent evolution creates similarity without shared gene ancestry; it is not paralogy.",
          "Horizontal transfer creates xenology/HGT relationships, not paralogy by duplication."
        ]
      },
      {
        "kind": "exam",
        "question": "Reciprocal Best BLAST Hit (RBH) infers orthology by:",
        "options": [
          "Phylogenetic reconciliation of gene trees",
          "Identifying bidirectional top BLAST matches between two genomes",
          "Clustering all-vs-all sequences into orthogroups",
          "Comparing gene synteny exclusively"
        ],
        "answer": 1,
        "optionExplanations": [
          "Phylogenetic reconciliation is a richer method, but it is not the RBH heuristic itself.",
          "Correct — RBH calls candidate orthologs when gene A’s best hit is gene B and gene B’s best hit is gene A.",
          "All-vs-all clustering into orthogroups is broader than pairwise RBH.",
          "Synteny can support orthology, but RBH is based on reciprocal sequence similarity searches."
        ]
      },
      {
        "kind": "exam",
        "question": "The Needleman-Wunsch algorithm is used for:",
        "options": [
          "Global (end-to-end) pairwise alignment",
          "Local alignment",
          "Multiple sequence alignment",
          "Neighbor-Joining tree estimation"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — Needleman–Wunsch is the classic global pairwise alignment algorithm.",
          "Local alignment is Smith–Waterman.",
          "Multiple sequence alignment uses progressive/iterative/profile methods, not plain Needleman–Wunsch alone.",
          "Neighbor Joining is a tree-building method from distances, not an alignment algorithm."
        ]
      },
      {
        "kind": "exam",
        "question": "The Smith-Waterman algorithm performs:",
        "options": [
          "Global alignment",
          "Local alignment of high-scoring regions",
          "Construction of guide trees",
          "Neighbor-Joining tree estimation"
        ],
        "answer": 1,
        "optionExplanations": [
          "Global end-to-end alignment is Needleman–Wunsch.",
          "Correct — Smith–Waterman finds the best local high-scoring matching region.",
          "Guide trees are used in progressive multiple alignment, not the Smith–Waterman algorithm itself.",
          "Neighbor Joining estimates a tree from a distance matrix; it is not a local alignment method."
        ]
      },
      {
        "kind": "exam",
        "question": "An affine gap penalty scoring scheme is:",
        "options": [
          "c = -d * g (linear cost)",
          "No gap cost",
          "c = -d - (g - 1)e (gap open d, extension e)",
          "c = -d * g (constant cost)"
        ],
        "answer": 2,
        "optionExplanations": [
          "That is a linear penalty: cost increases by the same amount for each gap position.",
          "No gap cost would make insertions/deletions unrealistically cheap.",
          "Correct — affine penalties charge a gap-opening cost d and a usually smaller extension cost e for additional gap positions.",
          "This is another linear-style constant-per-position cost, not an affine open-plus-extension scheme."
        ]
      },
      {
        "kind": "exam",
        "question": "UPGMA builds trees under the assumption of:",
        "options": [
          "A strict molecular clock (ultrametric distances)",
          "No molecular clock",
          "Minimum-evolution criterion",
          "Unrooted output"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — UPGMA assumes a strict molecular clock and therefore produces an ultrametric rooted tree.",
          "No-clock distance methods are closer to Neighbor Joining than UPGMA.",
          "Minimum evolution is associated with methods like Neighbor Joining, not the defining assumption of UPGMA.",
          "UPGMA outputs a rooted ultrametric tree, not an unrooted one."
        ]
      },
      {
        "kind": "exam",
        "question": "Neighbor-Joining differs from UPGMA by:",
        "options": [
          "Requiring ultrametric data",
          "Producing rooted trees",
          "Not assuming equal rates (no molecular clock)",
          "Using bootstrapping in tree building"
        ],
        "answer": 2,
        "optionExplanations": [
          "That is UPGMA, not Neighbor Joining.",
          "NJ usually returns an unrooted tree; it does not root the tree by itself.",
          "Correct — Neighbor Joining does not require equal rates or ultrametric distances.",
          "Bootstrap can be used to assess NJ support, but it is not what differentiates NJ from UPGMA."
        ]
      },
      {
        "kind": "exam",
        "question": "Maximum Parsimony seeks the tree that:",
        "options": [
          "Maximizes likelihood under a model",
          "Minimizes total number of character changes",
          "Balances branch lengths equally",
          "Optimizes posterior probability"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is Maximum Likelihood, which scores trees under an explicit probabilistic model.",
          "Correct — Maximum Parsimony favors the topology requiring the fewest inferred character-state changes.",
          "Equal branch lengths are not the objective of parsimony.",
          "Posterior probability belongs to Bayesian inference, not parsimony."
        ]
      },
      {
        "kind": "exam",
        "question": "Jukes-Cantor (JC69) nucleotide model assumes:",
        "options": [
          "Different rates for transitions vs. transversions",
          "Equal base frequencies and equal substitution rates",
          "Variable site-rate heterogeneity",
          "Stationarity only for amino acids"
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes K80/K2P more than JC69.",
          "Correct — JC69 assumes equal base frequencies and a single equal rate for all nucleotide substitutions.",
          "Rate heterogeneity is added with modifiers such as +G; it is not part of basic JC69.",
          "Stationarity is not amino-acid-specific, and JC69 is a nucleotide model."
        ]
      },
      {
        "kind": "exam",
        "question": "Kimura 2-Parameter (K80) distinguishes between:",
        "options": [
          "Codon and amino acid changes",
          "Transitions and transversions",
          "Gamma-distributed rates",
          "Local vs. global alignment"
        ],
        "answer": 1,
        "optionExplanations": [
          "Codon versus amino-acid changes are handled by codon/protein models, not K80.",
          "Correct — K80 separates transitions from transversions while keeping equal base frequencies.",
          "Gamma-distributed rates are a rate-heterogeneity modifier, not the K80 distinction.",
          "Local/global alignment describes alignment algorithms, not nucleotide substitution models."
        ]
      },
      {
        "kind": "exam",
        "question": "Felsenstein 1981 (F81) extends JC69 by:",
        "options": [
          "Adding a transition/transversion bias",
          "Allowing unequal equilibrium base frequencies",
          "Modeling invariable sites",
          "Incorporating codon models"
        ],
        "answer": 1,
        "optionExplanations": [
          "Transition/transversion bias is the main addition in K80/HKY-type models, not F81.",
          "Correct — F81 relaxes JC69 by allowing unequal equilibrium base frequencies while keeping equal exchangeabilities.",
          "Invariable sites are modeled by +I, not by F81 itself.",
          "Codon models operate on codons and dN/dS; F81 is a nucleotide model."
        ]
      },
      {
        "kind": "exam",
        "question": "The General Time Reversible (GTR) model includes:",
        "options": [
          "One rate parameter",
          "Six distinct substitution rates and base frequencies",
          "Only transition rates",
          "Codon position weighting"
        ],
        "answer": 1,
        "optionExplanations": [
          "One rate parameter is closer to JC69, not GTR.",
          "Correct — GTR has six exchangeability/rate parameters plus equilibrium base frequencies.",
          "Transition-only models ignore transversions; GTR includes all nucleotide pair changes.",
          "Codon position weighting is a partitioning or codon-model issue, not the basic GTR definition."
        ]
      },
      {
        "kind": "exam",
        "question": "Among-site rate heterogeneity is commonly modeled with:",
        "options": [
          "Uniform rates across sites",
          "A gamma distribution (+Γ)",
          "Only invariant sites (+I)",
          "Bootstrap resampling"
        ],
        "answer": 1,
        "optionExplanations": [
          "Uniform rates assume no among-site rate heterogeneity.",
          "Correct — +Γ / +G models variation in evolutionary rate across sites with a gamma distribution.",
          "+I models a proportion of sites that are invariant, but it does not describe the variable-site rate distribution by itself.",
          "Bootstrap resampling measures robustness/support; it is not a substitution-rate heterogeneity model."
        ]
      },
      {
        "kind": "exam",
        "question": "In Maximum Likelihood, “likelihood” is defined as:",
        "options": [
          "P(data | model)",
          "P(model | data)",
          "P(tree)",
          "P(prior)"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — likelihood asks how probable the observed data are if a particular model/tree/parameters are assumed.",
          "That is posterior probability, the Bayesian target.",
          "P(tree) alone would be a prior probability on trees, not the likelihood of the data.",
          "A prior is specified before considering the data; likelihood is data conditional on model."
        ]
      },
      {
        "kind": "exam",
        "question": "In Bayesian phylogenetics, the posterior probability P(model | data) is proportional to:",
        "options": [
          "Likelihood × Prior / Marginal likelihood",
          "Likelihood / Prior",
          "Prior / Likelihood",
          "Marginal likelihood × Prior"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — Bayes’ theorem combines likelihood and prior, normalized by the marginal likelihood/evidence.",
          "Dividing likelihood by prior is not Bayes’ theorem.",
          "Prior divided by likelihood reverses the relationship and has no standard Bayesian interpretation here.",
          "The marginal likelihood is the normalizing denominator, not something multiplied by the prior."
        ]
      }
    ]
  },
  {
    "id": "05",
    "title": "Mock Exam 5 — Extra Set 2",
    "subtitle": "Additional 30-question set emphasizing homology, homoplasy, orthogroups, alignment, distance methods and substitution models.",
    "sourceFile": "mock-exams/Phylo_Exam_All_Sets.txt",
    "sourceLabel": "Open question set",
    "questions": [
      {
        "kind": "exam",
        "question": "In phylogenetic context, homology refers to:",
        "options": [
          "Similarity due to shared ancestry",
          "Similarity of function but not ancestry",
          "Similarity by chance",
          "Similarity due to selection pressures"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — homologous characters are similar because they derive from a shared ancestor.",
          "Similar function without shared ancestry is analogy, not homology.",
          "Similarity by chance is not evidence of common ancestry.",
          "Selection can produce similar adaptations independently; that would be convergence unless inherited from a common ancestor."
        ]
      },
      {
        "kind": "exam",
        "question": "Analogy in character analysis means:",
        "options": [
          "Common ancestry of structures",
          "Similar function without common ancestry",
          "Shared derived traits",
          "Same gene order"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is homology: similarity because of common ancestry.",
          "Correct — analogy means similarity in function or appearance that does not come from shared ancestry.",
          "Shared derived traits are synapomorphies, not analogies.",
          "Same gene order may be synteny; it is not the definition of analogy."
        ]
      },
      {
        "kind": "exam",
        "question": "Which of the following is NOT a desirable criterion for a phylogenetic character?",
        "options": [
          "Homologous across taxa",
          "Heritable",
          "Independent",
          "Correlated with other characters"
        ],
        "answer": 3,
        "optionExplanations": [
          "Homology is desirable because characters should compare the same inherited feature across taxa.",
          "Heritability is desirable because phylogenetic characters must be transmitted through lineages.",
          "Independence is desirable because repeated measurements of the same signal can overweight one feature.",
          "Correct — strong correlation with other characters is undesirable because it violates independence and can overcount the same evolutionary event."
        ]
      },
      {
        "kind": "exam",
        "question": "Homoplasy refers to:",
        "options": [
          "Similarity not due to common ancestry",
          "Similarity inherited from a common ancestor",
          "Gap penalties in alignment",
          "A measure of tree length"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — homoplasy is similarity produced by convergence, reversal, or parallelism rather than shared ancestry.",
          "Similarity inherited from a common ancestor is homology.",
          "Gap penalties are part of alignment scoring, not character homoplasy.",
          "Tree length is a parsimony score; homoplasy can increase it but is not the measure itself."
        ]
      },
      {
        "kind": "exam",
        "question": "Which of these is an example of convergent evolution?",
        "options": [
          "Feathers in birds",
          "Camera-type eyes in octopus and vertebrates",
          "Four-limbed tetrapods",
          "Vertebrae in mammals"
        ],
        "answer": 1,
        "optionExplanations": [
          "Feathers in birds are usually treated as a synapomorphy of birds, not convergence among distant groups.",
          "Correct — camera-type eyes in octopus and vertebrates are similar complex structures that evolved independently.",
          "Four limbs in tetrapods are inherited from a common tetrapod ancestor, so this is homology at that level.",
          "Vertebrae in mammals are inherited from vertebrate ancestors, not an independent convergence among mammals."
        ]
      },
      {
        "kind": "exam",
        "question": "The Neutral Theory implies:",
        "options": [
          "Most molecular changes are adaptive",
          "Many changes are neutral and fixed by drift",
          "Selection is the sole driver of evolution",
          "Morphological traits evolve neutrally"
        ],
        "answer": 1,
        "optionExplanations": [
          "Neutral theory does not claim most molecular substitutions are adaptive.",
          "Correct — it emphasizes neutral or nearly neutral changes that can become fixed by drift.",
          "Selection is important, but neutral theory specifically highlights non-selective fixation.",
          "Neutral theory is about molecular evolution broadly, not a claim that all morphological traits evolve neutrally."
        ]
      },
      {
        "kind": "exam",
        "question": "An orthogroup is:",
        "options": [
          "Pairs of orthologs between two species",
          "Genes derived from a single duplication event",
          "A set of orthologs descending from a common ancestor",
          "A cluster of paralogs"
        ],
        "answer": 2,
        "optionExplanations": [
          "An ortholog pair is a simple two-gene relationship; an orthogroup can contain many genes across many taxa.",
          "Genes from a duplication event are paralogs, not the defining feature of an orthogroup.",
          "Correct — an orthogroup contains genes descended from a single ancestral gene in the reference ancestor/speciation context.",
          "A cluster containing only paralogs would not capture the orthologous ancestry targeted by an orthogroup."
        ]
      },
      {
        "kind": "exam",
        "question": "One-to-many orthologs arise when:",
        "options": [
          "Gene duplication occurs before speciation",
          "Duplication follows a speciation event in one lineage",
          "Genes lose function in one species",
          "HGT introduces extra copies"
        ],
        "answer": 1,
        "optionExplanations": [
          "Duplication before speciation creates out-paralogs and can complicate orthology, but it is not one-to-many after speciation.",
          "Correct — if a gene duplicates in one lineage after speciation, one gene in another species can be orthologous to multiple co-orthologs.",
          "Gene loss reduces copy number; it does not create one-to-many orthology.",
          "HGT introduces xenologous copies; it is not the standard one-to-many orthology scenario."
        ]
      },
      {
        "kind": "exam",
        "question": "Out-paralogs are paralogous genes that:",
        "options": [
          "Originate after a speciation event",
          "Originate within a lineage post-speciation",
          "Originate before a speciation event",
          "Are co-orthologs in many-to-many"
        ],
        "answer": 2,
        "optionExplanations": [
          "Paralogs that originate after a chosen speciation event are in-paralogs.",
          "That is the same post-speciation idea; out-paralogs are older than the reference speciation.",
          "Correct — out-paralogs come from duplications before the reference speciation event.",
          "Co-orthologs often arise from in-paralogs, not out-paralogs."
        ]
      },
      {
        "kind": "exam",
        "question": "In-paralogs are paralogs that:",
        "options": [
          "Arise after a given speciation event",
          "Arise before speciation",
          "Derive from horizontal transfer",
          "Are one-to-one orthologs"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — in-paralogs are duplicates that occurred after the reference speciation event within a lineage.",
          "Duplicates before the reference speciation are out-paralogs.",
          "Horizontal transfer creates xenologs rather than in-paralogs.",
          "One-to-one orthologs are separated by speciation without lineage-specific duplication."
        ]
      },
      {
        "kind": "exam",
        "question": "A major limitation of RBH is that it:",
        "options": [
          "Fails to detect one-to-one orthologs",
          "Cannot handle genome synteny",
          "Only works for proteins",
          "Misses one-to-many or many-to-many orthologs"
        ],
        "answer": 3,
        "optionExplanations": [
          "RBH is actually strongest for simple one-to-one orthology.",
          "Synteny can be used by other methods, but inability to handle synteny is not the core RBH limitation.",
          "RBH can be applied to nucleotide or protein sequences depending on the workflow.",
          "Correct — RBH often misses complex one-to-many and many-to-many relationships after duplications/losses."
        ]
      },
      {
        "kind": "exam",
        "question": "After identifying orthogroups, the next step in phylogenomic pipeline is:",
        "options": [
          "Tree reconciliation",
          "Sequence alignment",
          "Distance matrix calculation",
          "Partitioning analysis"
        ],
        "answer": 1,
        "optionExplanations": [
          "Tree reconciliation may come later for complex orthology questions, but the pipeline first prepares each orthogroup sequence set.",
          "Correct — after orthogroups are found, sequences are aligned so homologous sites can be compared.",
          "Distance matrices are derived after alignment, not immediately after orthogroup detection.",
          "Partitioning is relevant after multiple alignments are prepared/concatenated."
        ]
      },
      {
        "kind": "exam",
        "question": "The primary goal of sequence alignment is to:",
        "options": [
          "Identify orthologous positions with shared history",
          "Maximize overall percent identity",
          "Cluster sequences by length",
          "Annotate coding regions"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — alignment aims to place homologous positions in the same columns.",
          "High percent identity can be a consequence, but maximizing it blindly can create biologically wrong site homology.",
          "Length clustering alone does not establish positional homology.",
          "Annotation may help define coding regions, but it is not the primary objective of sequence alignment."
        ]
      },
      {
        "kind": "exam",
        "question": "Which tool is commonly used to trim poorly aligned regions?",
        "options": [
          "Gblocks",
          "ClustalW",
          "MAFFT",
          "BLAST"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — Gblocks removes or masks poorly aligned/ambiguous regions.",
          "ClustalW is mainly an alignment program, not a trimming/filtering tool.",
          "MAFFT is mainly an aligner, not the trimming tool in this context.",
          "BLAST searches for sequence similarity; it does not trim multiple alignments."
        ]
      },
      {
        "kind": "exam",
        "question": "Needleman-Wunsch algorithm is:",
        "options": [
          "A global alignment method",
          "A local alignment method",
          "A progressive multiple alignment",
          "A tree-building algorithm"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — Needleman–Wunsch aligns sequences end-to-end.",
          "Local alignment is Smith–Waterman.",
          "Progressive MSA uses guide trees/profiles and extends beyond pairwise Needleman–Wunsch.",
          "Tree-building algorithms infer phylogenies; Needleman–Wunsch aligns sequences."
        ]
      },
      {
        "kind": "exam",
        "question": "Smith-Waterman algorithm is:",
        "options": [
          "Global alignment",
          "Local alignment",
          "Phylogenetic tree construction",
          "Profile HMM search"
        ],
        "answer": 1,
        "optionExplanations": [
          "Global alignment is Needleman–Wunsch.",
          "Correct — Smith–Waterman finds the best local matching region.",
          "Phylogenetic construction is a downstream inference step, not Smith–Waterman.",
          "Profile HMM search is a different framework, such as HMMER."
        ]
      },
      {
        "kind": "exam",
        "question": "An affine gap penalty is defined by:",
        "options": [
          "c = -d * g (linear)",
          "c = -d",
          "c = -d - (g - 1)e",
          "c = -(d + g*e)"
        ],
        "answer": 2,
        "optionExplanations": [
          "That is a linear penalty: each gap position costs the same.",
          "That charges only one opening cost and ignores extension length.",
          "Correct — affine scoring uses a gap-open cost plus a lower extension cost for continuing the same gap.",
          "This expression overcounts the extension term for the first gap position relative to the usual affine formula."
        ]
      },
      {
        "kind": "exam",
        "question": "Distance-based methods compute:",
        "options": [
          "Pairwise distances from alignments",
          "Character states per site",
          "Likelihood scores",
          "Posterior probabilities"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — distance methods summarize alignments into pairwise distances.",
          "Character-based methods keep site-by-site states for scoring.",
          "Likelihood scores are used in ML character-based inference.",
          "Posterior probabilities are Bayesian outputs, not the input to distance methods."
        ]
      },
      {
        "kind": "exam",
        "question": "A p-distance matrix uses:",
        "options": [
          "Raw proportion of differences",
          "Model-corrected distances",
          "Weighted character changes",
          "Bayesian estimates"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — p-distance is the observed proportion of differing positions.",
          "Model-corrected distances adjust for hidden/multiple substitutions; p-distance does not.",
          "Weighted character changes are closer to parsimony/scoring schemes.",
          "Bayesian estimates are not the raw p-distance calculation."
        ]
      },
      {
        "kind": "exam",
        "question": "UPGMA uses:",
        "options": [
          "Average linkage clustering",
          "Minimum-evolution criterion",
          "Maximum likelihood estimates",
          "Random joining"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — UPGMA repeatedly clusters taxa/clusters by average pairwise distances.",
          "Minimum evolution is associated with NJ and related approaches, not UPGMA’s average-linkage rule.",
          "UPGMA is not a maximum-likelihood estimator.",
          "The joins are determined by distances, not random choices."
        ]
      },
      {
        "kind": "exam",
        "question": "Neighbor-Joining optimizes:",
        "options": [
          "Ultrametricity",
          "Minimum-evolution criterion without clock",
          "Maximum parsimony",
          "Profile alignment"
        ],
        "answer": 1,
        "optionExplanations": [
          "Ultrametricity is UPGMA’s clock-based assumption, not NJ’s objective.",
          "Correct — Neighbor Joining seeks a tree with low total branch length without imposing a strict clock.",
          "Maximum parsimony minimizes character changes; NJ is distance-based.",
          "Profile alignment is unrelated to NJ tree construction."
        ]
      },
      {
        "kind": "exam",
        "question": "Parsimony informative sites must:",
        "options": [
          "Have at least two states each in ≥2 taxa",
          "Be invariant",
          "Include singleton states",
          "Be unique to one taxon"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — a parsimony-informative site has at least two states, each represented in at least two taxa.",
          "Invariant sites contain no variation and cannot favor one topology over another.",
          "Singleton states are variable but usually not parsimony-informative because the derived state appears in only one taxon.",
          "A state unique to one taxon is an autapomorphy/singleton and does not resolve relationships among multiple taxa."
        ]
      },
      {
        "kind": "exam",
        "question": "Parsimony tree length is the:",
        "options": [
          "Number of taxa",
          "Sum of character-state changes",
          "Total branch-length units",
          "Model likelihood"
        ],
        "answer": 1,
        "optionExplanations": [
          "The number of taxa is tree size, not parsimony length.",
          "Correct — parsimony tree length is the total number of inferred character-state changes required by the tree.",
          "Branch-length units in ML/distance trees are not the parsimony score unless explicitly counted as changes.",
          "Model likelihood is a probabilistic score, not parsimony length."
        ]
      },
      {
        "kind": "exam",
        "question": "Rate variation (+Γ) accounts for:",
        "options": [
          "Equal rates across sites",
          "Gamma-distributed site rates",
          "Invariant sites only",
          "Bootstrapping"
        ],
        "answer": 1,
        "optionExplanations": [
          "Equal rates are the assumption that +Γ is meant to relax.",
          "Correct — +Γ models sites as evolving at different rates drawn from a gamma distribution.",
          "Invariant sites are handled by +I; +Γ models the distribution among variable rates.",
          "Bootstrapping is a support/resampling procedure, not a rate model."
        ]
      },
      {
        "kind": "exam",
        "question": "Invariant sites (+I) model:",
        "options": [
          "Gamma-distribution of rates",
          "Codon-based substitution",
          "Explicit site profiles",
          "A proportion of sites unchanging"
        ],
        "answer": 3,
        "optionExplanations": [
          "Gamma variation models a distribution of rates among variable sites.",
          "Codon-based substitution concerns dN/dS and codon states, not invariant-site proportion.",
          "Site profiles are mixture-model components, not +I.",
          "Correct — +I estimates a proportion of sites that are effectively unchanging/invariable."
        ]
      },
      {
        "kind": "exam",
        "question": "Substitution models are:",
        "options": [
          "Deterministic",
          "Markov chains with state transitions",
          "Parsimony criteria",
          "Alignment algorithms"
        ],
        "answer": 1,
        "optionExplanations": [
          "Substitution models are probabilistic, not deterministic.",
          "Correct — they model changes among states as Markov processes along branches.",
          "Parsimony is a tree-scoring criterion, not a substitution model.",
          "Alignment algorithms place sequences into columns; they do not model substitutions along a tree."
        ]
      },
      {
        "kind": "exam",
        "question": "GTR model is:",
        "options": [
          "Non-reversible",
          "Time-reversible",
          "Transition-only",
          "Codon-explicit"
        ],
        "answer": 1,
        "optionExplanations": [
          "GTR is explicitly time-reversible, so this is the opposite.",
          "Correct — GTR stands for General Time Reversible.",
          "GTR includes all six reversible nucleotide exchangeabilities, not only transitions.",
          "GTR is a nucleotide model, not a codon-explicit dN/dS model."
        ]
      },
      {
        "kind": "exam",
        "question": "F81 model allows:",
        "options": [
          "Transition/transversion bias",
          "Unequal base frequencies",
          "Invariable sites",
          "Codon assignments"
        ],
        "answer": 1,
        "optionExplanations": [
          "Transition/transversion bias is handled by K80/HKY-like models.",
          "Correct — F81 allows unequal base frequencies while keeping equal exchangeabilities.",
          "Invariable sites require +I and are not part of F81 itself.",
          "Codon assignment is part of codon models, not F81."
        ]
      },
      {
        "kind": "exam",
        "question": "K80 model distinguishes:",
        "options": [
          "Codon changes",
          "Transitions vs transversions",
          "Rate heterogeneity",
          "Global vs local alignment"
        ],
        "answer": 1,
        "optionExplanations": [
          "Codon changes are modeled by codon substitution models.",
          "Correct — K80 separates transition rates from transversion rates.",
          "Rate heterogeneity is commonly modeled by +Γ, not K80 alone.",
          "Global/local describes alignment scope, not K80."
        ]
      },
      {
        "kind": "exam",
        "question": "TN93 model includes:",
        "options": [
          "One rate for all changes",
          "Two distinct transition rates and one transversion rate",
          "Codon-based parameters",
          "Only gamma distribution"
        ],
        "answer": 1,
        "optionExplanations": [
          "That is JC69-like simplicity, not TN93.",
          "Correct — TN93 has separate rates for the two transition classes and a shared transversion rate, plus unequal frequencies.",
          "Codon parameters belong to codon models such as MG94/GY94.",
          "Gamma is a rate-heterogeneity modifier, not the defining feature of TN93."
        ]
      }
    ]
  },
  {
    "id": "06",
    "title": "Mock Exam 6 — Extra Set 3",
    "subtitle": "Additional 30-question set on ML/BI, MCMC, codon models, protein matrices, supermatrices, partitioning and support.",
    "sourceFile": "mock-exams/Phylo_Exam_All_Sets.txt",
    "sourceLabel": "Open question set",
    "questions": [
      {
        "kind": "exam",
        "question": "Maximum Likelihood phylogenetic inference maximizes:",
        "options": [
          "P(data | model)",
          "P(model | data)",
          "P(tree)",
          "P(prior)"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — ML chooses the tree/model parameters that make the observed data most probable.",
          "P(model | data) is the Bayesian posterior, not ML likelihood.",
          "P(tree) alone would be a prior on trees rather than likelihood of sequences.",
          "A prior is used in Bayesian inference; ML does not maximize a prior by itself."
        ]
      },
      {
        "kind": "exam",
        "question": "Bayesian inference estimates:",
        "options": [
          "P(data | model)",
          "P(model | data)",
          "P(tree)",
          "P(prior)"
        ],
        "answer": 1,
        "optionExplanations": [
          "P(data | model) is likelihood, central to ML and also used inside Bayes’ theorem.",
          "Correct — Bayesian inference targets the posterior probability of the model/tree given the data.",
          "P(tree) alone is a prior or marginal tree probability, not the full posterior.",
          "P(prior) is not the target; the prior is one component multiplied by the likelihood."
        ]
      },
      {
        "kind": "exam",
        "question": "Felsenstein’s tree-pruning algorithm is used to:",
        "options": [
          "Build distance matrices",
          "Compute conditional likelihoods at internal nodes",
          "Perform sequence alignment",
          "Infer orthology"
        ],
        "answer": 1,
        "optionExplanations": [
          "Distance matrices are computed in distance-based methods, not by pruning likelihoods.",
          "Correct — Felsenstein pruning efficiently sums over possible internal states to compute conditional likelihoods.",
          "Sequence alignment is a preprocessing step before likelihood calculation.",
          "Orthology inference decides which genes/positions to compare; pruning is for likelihood on a tree."
        ]
      },
      {
        "kind": "exam",
        "question": "ML assumes that sites:",
        "options": [
          "Evolve independently",
          "Are correlated",
          "Share the same state at root",
          "Are uninformative"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — standard likelihood calculations multiply site likelihoods under an independence assumption.",
          "Correlated sites can exist biologically, but basic ML models usually do not assume that.",
          "Root states are summed/integrated over; they are not assumed to be the same at every site.",
          "Many sites may be informative; ML does not assume sites are uninformative."
        ]
      },
      {
        "kind": "exam",
        "question": "Log-likelihood is preferred because it:",
        "options": [
          "Ensures numerical stability and converts products to sums",
          "Is faster to compute than likelihood",
          "Avoids the need for priors",
          "Is only used in Bayesian methods"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — logs prevent underflow from tiny probability products and convert products across sites into sums.",
          "It can be computationally convenient, but the key reason is numerical stability and additive sums.",
          "Priors are a Bayesian issue; log-likelihood does not eliminate or replace them.",
          "Log-likelihood is widely used in ML as well as Bayesian calculations."
        ]
      },
      {
        "kind": "exam",
        "question": "Among NNI, SPR, and TBR, the simplest tree rearrangement is:",
        "options": [
          "NNI (Nearest Neighbor Interchange)",
          "SPR (Subtree Pruning & Regrafting)",
          "TBR (Tree Bisection & Reconnection)",
          "None of the above"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — NNI swaps neighboring subtrees around an internal branch and is the least disruptive of the three.",
          "SPR cuts a subtree and regrafts it elsewhere, a larger move than NNI.",
          "TBR cuts the tree into two parts and reconnects them, generally the most aggressive rearrangement.",
          "One of the listed moves, NNI, is clearly the simplest."
        ]
      },
      {
        "kind": "exam",
        "question": "In Bayesian MCMC, the posterior ∝:",
        "options": [
          "Prior / Likelihood",
          "Likelihood × Prior",
          "Likelihood / Prior",
          "Marginal Likelihood × Prior"
        ],
        "answer": 1,
        "optionExplanations": [
          "This reverses the Bayesian relationship.",
          "Correct — ignoring the normalizing constant, posterior probability is proportional to likelihood times prior.",
          "Dividing likelihood by prior is not Bayes’ theorem.",
          "The marginal likelihood normalizes the posterior; it is not multiplied by the prior in the numerator."
        ]
      },
      {
        "kind": "exam",
        "question": "The Metropolis criterion in MCMC:",
        "options": [
          "Always rejects worse proposals",
          "Accepts all proposals",
          "Accepts worse proposals with probability ratio of likelihoods",
          "Only accepts proposals with higher prior"
        ],
        "answer": 2,
        "optionExplanations": [
          "MCMC must sometimes accept worse states to avoid getting trapped in local optima.",
          "Accepting all proposals would not sample the posterior correctly.",
          "Correct — worse proposals can be accepted with a probability based on the posterior/likelihood ratio, depending on the algorithm.",
          "The prior contributes, but acceptance is not based only on having a higher prior."
        ]
      },
      {
        "kind": "exam",
        "question": "The “prior” in Bayesian analysis represents:",
        "options": [
          "Initial beliefs before seeing data",
          "Likelihood function",
          "Posterior distribution",
          "Marginal likelihood"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — a prior encodes assumptions or beliefs before conditioning on the observed sequence data.",
          "Likelihood is P(data | model), not prior belief.",
          "Posterior is the updated distribution after combining prior and data.",
          "Marginal likelihood/evidence is the normalizing denominator in Bayes’ theorem."
        ]
      },
      {
        "kind": "exam",
        "question": "Posterior probability of a clade indicates:",
        "options": [
          "Its bootstrap frequency",
          "Its probability of being correct given model and data",
          "The number of changes on that branch",
          "The distance to outgroup"
        ],
        "answer": 1,
        "optionExplanations": [
          "Bootstrap frequency comes from resampled datasets, not Bayesian posterior samples.",
          "Correct — posterior probability is interpreted within the chosen Bayesian model as support for the clade given model and data.",
          "Number of changes is branch length or parsimony information, not posterior probability.",
          "Distance to the outgroup concerns rooting or divergence, not clade posterior support."
        ]
      },
      {
        "kind": "exam",
        "question": "GY94 codon model parameter ω equals:",
        "options": [
          "dN/dS ratio",
          "dS/dN ratio",
          "dN + dS",
          "Number of codons"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — ω is the nonsynonymous/synonymous rate ratio, dN/dS.",
          "dS/dN is the reciprocal and would invert the selection interpretation.",
          "dN + dS is a sum of rates, not the selection ratio.",
          "The number of codons is dataset size, not the GY94 selection parameter."
        ]
      },
      {
        "kind": "exam",
        "question": "MG94 codon model includes:",
        "options": [
          "One overall substitution rate",
          "Separate synonymous (dS) and nonsynonymous (dN) rates",
          "Three rate categories",
          "No selection parameters"
        ],
        "answer": 1,
        "optionExplanations": [
          "A single overall rate would not distinguish synonymous from nonsynonymous substitution.",
          "Correct — MG94 separates synonymous and nonsynonymous rates, enabling selection-related interpretation.",
          "Rate categories are used in site-rate heterogeneity models, not the defining feature of MG94.",
          "MG94 is specifically used because it includes selection-related synonymous/nonsynonymous parameters."
        ]
      },
      {
        "kind": "exam",
        "question": "Site-specific models allow ω to vary:",
        "options": [
          "Across branches only",
          "Across codon positions only",
          "Across sites",
          "Across taxa"
        ],
        "answer": 2,
        "optionExplanations": [
          "That is a branch model, where ω differs among lineages.",
          "Codon positions are not the same as individual sites/codons under site models.",
          "Correct — site models allow different codons/sites to have different ω categories.",
          "Variation across taxa/lineages is branch-specific, not site-specific."
        ]
      },
      {
        "kind": "exam",
        "question": "Branch-site models detect:",
        "options": [
          "Selection across all sites equally",
          "Selection on entire tree",
          "Neutral evolution only",
          "Positive selection at specific sites on certain lineages"
        ],
        "answer": 3,
        "optionExplanations": [
          "That is closer to a global branch or site model, not branch-site specificity.",
          "Selection on the whole tree would be a global or site model, not branch-site.",
          "Neutral evolution is the null expectation; branch-site models look for departures on targeted branches/sites.",
          "Correct — branch-site models test for positive selection affecting particular sites along specified foreground lineages."
        ]
      },
      {
        "kind": "exam",
        "question": "Dayhoff’s PAM matrices were derived from:",
        "options": [
          "Closely related proteins (>85% identity)",
          "Codon usage tables",
          "Genome-wide alignments",
          "Amino acid physicochemical properties"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — PAM was estimated from closely related protein alignments where accepted replacements could be inferred.",
          "Codon usage tables are for codon/frequency information, not PAM amino-acid replacement matrices.",
          "Genome-wide alignments are not the original Dayhoff/PAM source.",
          "Physicochemical recoding groups amino acids, but PAM is an empirical replacement matrix."
        ]
      },
      {
        "kind": "exam",
        "question": "JTT model improved PAM by:",
        "options": [
          "Using only mitochondrial proteins",
          "Expanding to a larger, more diverse protein dataset",
          "Incorporating codon bias",
          "Modeling invariant sites"
        ],
        "answer": 1,
        "optionExplanations": [
          "That describes a specialized mitochondrial model, not the JTT improvement.",
          "Correct — JTT used a broader and larger protein dataset than the original PAM matrices.",
          "JTT is an amino-acid empirical model, not a codon-bias model.",
          "Invariant sites are a modifier/parameter, not what made JTT different from PAM."
        ]
      },
      {
        "kind": "exam",
        "question": "WAG model was derived by:",
        "options": [
          "Manual curation",
          "Observed counts only",
          "Maximum Likelihood optimization",
          "Clustering methods"
        ],
        "answer": 2,
        "optionExplanations": [
          "Manual curation/counting is closer to the historical PAM approach, not WAG’s defining point.",
          "Observed counts alone are not the key improvement described for WAG.",
          "Correct — WAG was estimated with maximum-likelihood methods from a large protein dataset.",
          "Clustering methods are not the basis of WAG matrix estimation."
        ]
      },
      {
        "kind": "exam",
        "question": "BLOSUM matrices are:",
        "options": [
          "Empirical models for phylogenetics",
          "Codon-based substitution matrices",
          "Derived from conserved ungapped blocks",
          "Time-reversible models"
        ],
        "answer": 2,
        "optionExplanations": [
          "BLOSUM matrices are empirical scoring matrices for protein alignment; they are not primarily phylogenetic substitution models.",
          "They operate on amino acids, not codons.",
          "Correct — BLOSUM matrices are derived from conserved, ungapped blocks of protein alignments.",
          "Time reversibility is a property of many substitution models, but it is not the defining feature of BLOSUM."
        ]
      },
      {
        "kind": "exam",
        "question": "The +Γ+I modifier means:",
        "options": [
          "Gamma variation only",
          "Invariant sites only",
          "Both gamma-distributed rates and a proportion of invariable sites",
          "Bootstrap and jackknife"
        ],
        "answer": 2,
        "optionExplanations": [
          "This omits the invariant-site component.",
          "This omits gamma-distributed variation among the remaining sites.",
          "Correct — +Γ+I combines gamma-distributed among-site rate variation with a separate class of invariable sites.",
          "Bootstrap and jackknife are support/resampling procedures, not model modifiers."
        ]
      },
      {
        "kind": "exam",
        "question": "The “supermatrix” approach refers to:",
        "options": [
          "Concatenating multiple gene alignments",
          "Coalescent-based species tree inference",
          "Bootstrap resampling across genes",
          "Partition analysis only"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — the supermatrix approach concatenates multiple gene/protein alignments into one large matrix.",
          "Coalescent methods usually take gene trees or loci separately rather than one concatenated supermatrix.",
          "Bootstrap resampling can be applied to a supermatrix, but it is not what the term means.",
          "Partitioning can accompany a supermatrix, but concatenation is the defining step."
        ]
      },
      {
        "kind": "exam",
        "question": "A key drawback of concatenation is:",
        "options": [
          "Increased stochastic error",
          "Gene tree incongruence due to ILS and other processes",
          "Lack of phylogenetic signal",
          "Inability to model rate variation"
        ],
        "answer": 1,
        "optionExplanations": [
          "Concatenation usually reduces stochastic error by increasing data amount, not increases it.",
          "Correct — a major risk is forcing genes with different histories, such as ILS/HGT, onto one species-tree topology.",
          "Concatenation is often used specifically to increase phylogenetic signal.",
          "Concatenated analyses can include partitions and rate models, so inability to model rate variation is not the key drawback."
        ]
      },
      {
        "kind": "exam",
        "question": "Coalescent-based methods address:",
        "options": [
          "Alignment uncertainty",
          "Model misspecification",
          "Gene tree discordance",
          "Invariable sites"
        ],
        "answer": 2,
        "optionExplanations": [
          "Alignment uncertainty is real, but coalescent species-tree methods mainly address discordance among loci.",
          "Model misspecification is handled with better substitution/mixture/partition models, not primarily by the coalescent.",
          "Correct — coalescent-based methods model or summarize discordance among gene trees, especially from ILS.",
          "Invariable sites are a sequence-evolution model component, not the target of coalescent methods."
        ]
      },
      {
        "kind": "exam",
        "question": "Partitioning alignments helps:",
        "options": [
          "Avoid overparameterization by grouping similar genes",
          "Increase computational complexity",
          "Merge all genes into one model",
          "Fix branch lengths"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — partitioning groups loci/sites with similar evolutionary patterns, balancing model fit and parameter number.",
          "Partitioning can increase complexity if overdone; its goal is not simply to make the analysis harder.",
          "A single model for all genes is the unpartitioned extreme, not the purpose of partitioning.",
          "Branch lengths may be linked/proportional/unlinked across partitions, but partitioning does not simply fix them."
        ]
      },
      {
        "kind": "exam",
        "question": "AIC and BIC are used to:",
        "options": [
          "Compare models balancing fit and complexity",
          "Estimate tree topology",
          "Infer orthology",
          "Perform sequence alignment"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — AIC/BIC reward model fit while penalizing extra parameters.",
          "They help choose models/partitions, not directly estimate topology alone.",
          "Orthology inference is a separate preprocessing step.",
          "Alignment algorithms align sequences; AIC/BIC compare statistical models."
        ]
      },
      {
        "kind": "exam",
        "question": "In MCMC, “burn-in” refers to:",
        "options": [
          "Samples used for final estimates",
          "Entire chain length",
          "Convergence diagnostics",
          "Initial samples discarded before stationarity"
        ],
        "answer": 3,
        "optionExplanations": [
          "Final estimates should be based on post-burn-in samples.",
          "The entire chain includes burn-in plus retained samples.",
          "Convergence diagnostics help decide whether burn-in/sampling are adequate, but are not burn-in itself.",
          "Correct — burn-in is the early, pre-stationary portion discarded before summarizing the posterior."
        ]
      },
      {
        "kind": "exam",
        "question": "ESS (Effective Sample Size) measures:",
        "options": [
          "Total iterations",
          "Expected sum of squares",
          "Independent information in posterior samples",
          "Error sum of squares"
        ],
        "answer": 2,
        "optionExplanations": [
          "Total iterations can be large while effective independent information is low because of autocorrelation.",
          "Expected/error sum of squares is unrelated to MCMC sampling adequacy here.",
          "Correct — ESS estimates how many effectively independent posterior samples the correlated chain represents.",
          "Error sum of squares is a regression/statistics term, not the Bayesian MCMC diagnostic here."
        ]
      },
      {
        "kind": "exam",
        "question": "Bootstrap support differs from posterior probability in that:",
        "options": [
          "Bootstrap reflects resampling frequency; posterior is probability given model",
          "Both measure the same thing",
          "Posterior uses resampling; bootstrap uses priors",
          "Neither is used in phylogenetics"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — bootstrap support is a resampling frequency; posterior probability is Bayesian support conditional on model, priors and data.",
          "They can look numerically similar but are not the same quantity.",
          "This reverses the methods: posterior uses priors/MCMC, bootstrap uses resampled datasets.",
          "Both are widely used support measures in phylogenetics."
        ]
      },
      {
        "kind": "exam",
        "question": "Empirical amino acid substitution models:",
        "options": [
          "Use fixed rate matrices estimated from large datasets",
          "Estimate rates from the current dataset only",
          "Are codon-based",
          "Are alignment algorithms"
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — empirical amino-acid models use pre-estimated matrices from large protein datasets.",
          "Current-dataset rate estimation is more typical of mechanistic nucleotide/codon models, not empirical AA matrices.",
          "Codon-based models operate on codons and dN/dS, not amino-acid empirical matrices.",
          "Alignment algorithms build alignments; empirical models score substitutions along trees."
        ]
      },
      {
        "kind": "exam",
        "question": "Mechanistic codon models incorporate:",
        "options": [
          "Rate matrices only",
          "Biological parameters like selection pressure",
          "Empirical counts",
          "Gap penalties"
        ],
        "answer": 1,
        "optionExplanations": [
          "Rate matrices are part of models, but codon models are not defined only by generic matrices.",
          "Correct — mechanistic codon models include biologically interpretable parameters such as dN/dS selection pressure.",
          "Empirical counts alone describe empirical matrices, not mechanistic codon models.",
          "Gap penalties belong to alignment scoring, not codon evolution models."
        ]
      },
      {
        "kind": "exam",
        "question": "OTU stands for:",
        "options": [
          "Observed Taxonomic Unit",
          "Operational Taxonomic Unit",
          "Ordered Transversion Unit",
          "Orthologous Tree Unit"
        ],
        "answer": 1,
        "optionExplanations": [
          "“Observed Taxonomic Unit” sounds plausible but is not the standard expansion.",
          "Correct — OTU means Operational Taxonomic Unit: the terminal units chosen for an analysis.",
          "Transversions are nucleotide substitution classes, not OTUs.",
          "Orthologous Tree Unit is not the standard term."
        ]
      }
    ]
  },
  {
    "id": "07",
    "title": "Mock Exam 7",
    "subtitle": "Screenshot-based practice exam with 27 closed questions and one short open-ended prompt.",
    "sourceLabel": "Source screenshots",
    "questions": [
      {
        "kind": "exam",
        "question": "Phylogenetic trees are — choose the wrong one:",
        "options": [
          "Direct observations of speciation events.",
          "Hypotheses on the past.",
          "A representation of evolutionary histories.",
          "Tools to study the relationships among organisms."
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — this is the wrong statement. Phylogenetic trees are inferred hypotheses; we usually cannot directly observe historical speciation events.",
          "This is true: trees are hypotheses about evolutionary history and the past.",
          "This is true: trees represent possible evolutionary histories among taxa.",
          "This is true: trees are tools for studying relationships among organisms."
        ]
      },
      {
        "kind": "exam",
        "question": "The scale of a phylogenetic tree can be:",
        "options": [
          "Number of substitutions.",
          "Time, expressed as years.",
          "Generations.",
          "All of the above, depending on the data and tree type."
        ],
        "answer": 3,
        "optionExplanations": [
          "This is possible for a phylogram, where branch lengths represent amount of change.",
          "This is possible for a chronogram or time tree.",
          "This can be meaningful in population-genetic or coalescent contexts.",
          "Correct — branch scale depends on the tree and analysis: substitutions, time, generations, or sometimes no meaningful scale in a cladogram."
        ]
      },
      {
        "kind": "exam",
        "question": "An outgroup is:",
        "options": [
          "A species included in the analysis that shares no single gene with the others.",
          "A randomly chosen species to test model robustness.",
          "A taxon known to fall outside the group of interest, used to root the tree.",
          "A taxon used to calibrate molecular clocks using fossil data."
        ],
        "answer": 2,
        "optionExplanations": [
          "An outgroup should still be homologously comparable; it is outside the ingroup, not gene-incomparable.",
          "Outgroups are chosen based on prior phylogenetic knowledge, not at random.",
          "Correct — an outgroup lies outside the ingroup and helps polarize/root the tree.",
          "Calibration taxa or fossils are used for dating; that is not the definition of an outgroup."
        ]
      },
      {
        "kind": "exam",
        "question": "The root of a phylogenetic tree is:",
        "options": [
          "The specific location where two species happen to share identical DNA sequences across a site.",
          "The most recently evolved lineage in the tree.",
          "The node representing the most recent common ancestor of all taxa in the tree.",
          "A terminal branch that points to a species no longer existing, inferred from fossil evidence."
        ],
        "answer": 2,
        "optionExplanations": [
          "Shared sequence states are character observations, not the tree root.",
          "The root is ancestral, not the newest lineage.",
          "Correct — the root represents the MRCA of all taxa included and gives direction to the tree.",
          "A fossil terminal branch can be a tip; it is not the root by definition."
        ]
      },
      {
        "kind": "exam",
        "question": "Which of the following is a desirable characteristic of a trait used in phylogenetic analysis?",
        "options": [
          "It varies randomly within species, sometimes also depending on the environment.",
          "It is heritable and varies among species.",
          "It is beautiful.",
          "It is only found in one individual."
        ],
        "answer": 1,
        "optionExplanations": [
          "Random within-species or environmental variation is noise unless properly modeled.",
          "Correct — useful phylogenetic traits should be heritable and informative among taxa.",
          "Aesthetic value is irrelevant to phylogenetic informativeness.",
          "A trait found in one individual is not useful for reconstructing relationships among taxa."
        ]
      },
      {
        "kind": "exam",
        "question": "Neighbour Joining is a:",
        "options": [
          "Character-based phylogenetic method.",
          "Peculiar type of phylogenetic tree, used only at a shallower taxonomic scale.",
          "Distance-based phylogenetic method.",
          "Kind of data type used in Bayesian phylogenetics only."
        ],
        "answer": 2,
        "optionExplanations": [
          "Character-based methods score trees using individual sites/characters; NJ starts from a distance matrix.",
          "Neighbour Joining is an algorithm, not a tree type restricted to shallow analyses.",
          "Correct — NJ uses pairwise distances and produces an unrooted tree.",
          "NJ is not a Bayesian data type."
        ]
      },
      {
        "kind": "exam",
        "question": "Maximum Parsimony is a:",
        "options": [
          "Distance-based phylogenetic method.",
          "Specific bias in phylogenomics, associated with extremely low rates of evolutionary change.",
          "Character-based phylogenetic method.",
          "Specific step performed only in Maximum Likelihood algorithms."
        ],
        "answer": 2,
        "optionExplanations": [
          "Parsimony does not collapse an alignment into a distance matrix; it scores character-state changes on trees.",
          "Parsimony can be biased by long branch attraction, but it is not itself a bias.",
          "Correct — maximum parsimony is character-based and seeks the tree requiring the fewest changes.",
          "Parsimony is its own inference criterion, not a required ML-only step."
        ]
      },
      {
        "kind": "exam",
        "question": "Which one is a branch support metric?",
        "options": [
          "General Time Reversible.",
          "Metropolis-Hastings.",
          "Jackknife.",
          "Nearest Neighbor Interchange."
        ],
        "answer": 2,
        "optionExplanations": [
          "GTR is a substitution model, not a support metric.",
          "Metropolis-Hastings is an MCMC acceptance algorithm, not branch support.",
          "Correct — jackknife support is based on resampling/removing parts of the data and checking whether splits persist.",
          "NNI is a tree rearrangement/proposal move, not a support metric."
        ]
      },
      {
        "kind": "exam",
        "question": "Which one is a substitution model?",
        "options": [
          "Bootstrap.",
          "General Time Reversible.",
          "Subtree Pruning and Regrafting.",
          "Dirichlet prior."
        ],
        "answer": 1,
        "optionExplanations": [
          "Bootstrap is a support/resampling procedure.",
          "Correct — GTR is a nucleotide substitution model.",
          "SPR is a tree rearrangement move used during tree search.",
          "A Dirichlet prior is a Bayesian prior distribution, not a substitution model."
        ]
      },
      {
        "kind": "exam",
        "question": "What is Incomplete Lineage Sorting (ILS) in phylogenetic analysis?",
        "options": [
          "Ancestral polymorphisms persist across speciation, and alleles sort into descendants in a way that may not match the species tree.",
          "It occurs when there is no genetic variation between species in a particular gene.",
          "It is the phenomenon where all genes evolve at the same rate across all lineages.",
          "A phenomenon that occurs when the gene tree matches the species tree exactly, without discordance."
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — ILS is caused by ancestral variation persisting through speciation and being sorted differently among descendants.",
          "No genetic variation would not create alternative gene tree histories.",
          "Equal rates describe a clock-like process, not ILS.",
          "ILS is a cause of gene tree/species tree discordance, not perfect agreement."
        ]
      },
      {
        "kind": "exam",
        "question": "Homology is:",
        "options": [
          "Similarity due to convergent evolution, regardless of function.",
          "Similarity due to shared ancestry, regardless of function.",
          "Similarity due to convergent evolution, implying a similar function.",
          "Similarity due to shared ancestry, implying a similar function."
        ],
        "answer": 1,
        "optionExplanations": [
          "Convergent similarity is homoplasy, not homology.",
          "Correct — homology means shared ancestry; function may be conserved or may differ.",
          "Convergence can produce similar functions, but that is not homology.",
          "Shared ancestry is right, but similar function is not required for homology."
        ]
      },
      {
        "kind": "exam",
        "question": "Homoplasy refers to:",
        "options": [
          "Similarity caused by shared ancestry and inherited from a common ancestor.",
          "A trait that is uniquely passed down from the last universal common ancestor without any change.",
          "Similarity that evolved independently in different lineages due to convergent evolution.",
          "The duplication of a gene that leads to identical traits in unrelated species."
        ],
        "answer": 2,
        "optionExplanations": [
          "That describes homology/synapomorphy depending on context, not homoplasy.",
          "That is not the meaning of homoplasy and would not describe independent similarity.",
          "Correct — homoplasy is similarity not due to the focal common ancestry, often from convergence or reversal.",
          "Gene duplication produces paralogy; it is not the definition of homoplasy."
        ]
      },
      {
        "kind": "exam",
        "question": "How many possible unrooted topological resolutions has a quartet?",
        "options": [
          "01",
          "03",
          "12",
          "15"
        ],
        "answer": 1,
        "optionExplanations": [
          "A quartet has more than one possible unrooted resolved topology.",
          "Correct — four taxa have three possible unrooted binary resolutions.",
          "Twelve is not the standard number of unrooted quartet resolutions.",
          "Fifteen is associated with rooted resolutions for four taxa, not unrooted quartet resolutions."
        ]
      },
      {
        "kind": "exam",
        "question": "In Bayesian inference the burn-in is…",
        "options": [
          "A correction factor used when substitution rates vary among sites.",
          "An estimate of the proportion of missing or ambiguous positions in a sequence alignment.",
          "The initial portion of the MCMC chain that is discarded before convergence is reached.",
          "A count of all trees not included in a bootstrap consensus due to instability in topology."
        ],
        "answer": 2,
        "optionExplanations": [
          "Rate variation among sites is often modeled with gamma or mixture models, not burn-in.",
          "Missing/ambiguous positions are alignment properties, not burn-in.",
          "Correct — burn-in removes early MCMC samples before the chain reaches the target/stationary distribution.",
          "Bootstrap consensus is a different support framework."
        ]
      },
      {
        "kind": "exam",
        "question": "Which of the following best describes the primary advantage of using a mixture model in phylogenetics?",
        "options": [
          "They assume all sites evolve under a single model.",
          "They allow for the combination of multiple components to better account for heterogeneity.",
          "They are used exclusively for estimating divergence times.",
          "Sites are a priori assigned exclusively to a single substitution model."
        ],
        "answer": 1,
        "optionExplanations": [
          "A single model for all sites is the simpler approach that mixture models try to improve on.",
          "Correct — mixture models let sites be probabilistically described by multiple components, improving treatment of heterogeneity.",
          "Dating uses clock/calibration models; mixture models are broader sequence-evolution models.",
          "A priori assignment is characteristic of partition models, not mixture models."
        ]
      },
      {
        "kind": "exam",
        "question": "In phylogenetics the gamma distribution is often used to:",
        "options": [
          "Model among-site variation.",
          "Align sequences.",
          "Be a component of the Metropolis-Hastings algorithm.",
          "Estimate branch lengths in nucleotide substitution models."
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — +Γ/+G models rate heterogeneity among sites.",
          "Sequence alignment is done by alignment algorithms such as MAFFT or PRANK, not gamma.",
          "Metropolis-Hastings is an MCMC acceptance rule; gamma is not its defining component here.",
          "Branch lengths are estimated during tree inference; gamma specifically models rate variation across sites."
        ]
      },
      {
        "kind": "exam",
        "question": "What is a likely effect of systematic biases in phylogenomics?",
        "options": [
          "They are eliminated simply by adding more data.",
          "They persist as long as model assumptions are violated, regardless of the amount of data.",
          "They only affect small datasets, not large ones.",
          "They are easily addressed by using a large number of parametric bootstrap replicates."
        ],
        "answer": 1,
        "optionExplanations": [
          "Adding data helps stochastic error, but can reinforce systematic bias if the model is wrong.",
          "Correct — systematic bias comes from model violation and can remain or even become more confidently supported with more data.",
          "Large datasets can still be systematically biased; sometimes the problem becomes more convincing, not less.",
          "Parametric bootstrap does not automatically fix model misspecification and can itself be sensitive to it."
        ]
      },
      {
        "kind": "exam",
        "question": "What is a multiple sequence alignment?",
        "options": [
          "A tree-building algorithm that uses substitution models to infer evolutionary relationships.",
          "A technique for assembling genomes from raw reads.",
          "A method for comparing gene expression levels across species.",
          "A method to identify regions of similarity due to functional, structural, or evolutionary relationships among sequences."
        ],
        "answer": 3,
        "optionExplanations": [
          "Tree-building comes after alignment in many workflows; it is not the definition of MSA.",
          "Genome assembly reconstructs sequences from reads, whereas MSA compares homologous sequences.",
          "Expression comparison is transcriptomics, not sequence alignment.",
          "Correct — MSA arranges sequences so homologous or comparable positions are placed in columns."
        ]
      },
      {
        "kind": "exam",
        "question": "What is a potential limitation of concatenation in phylogenetics?",
        "options": [
          "It cannot handle protein sequences.",
          "It assumes that all genes evolved under the same tree, ignoring gene tree discordance.",
          "It is only used for mitochondrial genomes.",
          "It removes informative sites from alignments."
        ],
        "answer": 1,
        "optionExplanations": [
          "Concatenation can be applied to nucleotide or protein alignments.",
          "Correct — concatenation usually imposes a single underlying topology and may ignore gene tree discordance from ILS, HGT, introgression, or other processes.",
          "Concatenation is widely used for nuclear, mitochondrial, plastid, and genomic datasets.",
          "Removing sites is filtering/trimming, not concatenation itself."
        ]
      },
      {
        "kind": "exam",
        "question": "Which support metric is more sensitive to model misspecification?",
        "options": [
          "Parametric bootstrap.",
          "Non-parametric bootstrap."
        ],
        "answer": 0,
        "optionExplanations": [
          "Correct — parametric bootstrap simulates data under a chosen model, so wrong model assumptions can strongly affect the result.",
          "Non-parametric bootstrap resamples observed alignment columns and is usually less directly dependent on a single simulation model."
        ]
      },
      {
        "kind": "exam",
        "question": "Why is it problematic to perform correlation analyses of traits without considering phylogenetic relationships?",
        "options": [
          "Trait values are always measured incorrectly.",
          "Because species are independent data points by default.",
          "Because correlation tests only work on genetic sequences.",
          "Related species may share traits due to common ancestry, violating the assumption of independence."
        ],
        "answer": 3,
        "optionExplanations": [
          "Measurement error can happen, but it is not the phylogenetic-comparative problem being asked here.",
          "This is the opposite of the issue: species are often not independent because of shared ancestry.",
          "Correlation tests can be used for many data types, including traits.",
          "Correct — phylogenetic relatedness creates non-independence, so comparative methods account for shared ancestry."
        ]
      }
    ],
    "fillBlanks": [
      {
        "prompt": "Distance-based phylogenetic methods do not rely on an ________, while character-based methods incorporate an explicit one.",
        "answer": "evolutionary model / model of sequence evolution",
        "accepted": [
          "evolutionary model",
          "model of sequence evolution",
          "substitution model",
          "explicit evolutionary model"
        ],
        "explanation": "Distance-based methods mainly use a distance matrix, whereas ML and Bayesian character-based methods explicitly score characters using a model of sequence evolution."
      },
      {
        "prompt": "Sequence saturation occurs when multiple ________ happen at the same site, making it difficult to infer the true number of ________ between sequences.",
        "answer": "substitutions; substitutions",
        "accepted": [
          "substitutions substitutions",
          "substitutions changes",
          "changes substitutions",
          "changes changes",
          "multiple substitutions true substitutions"
        ],
        "explanation": "Saturation hides the real number of evolutionary changes because the same site has changed repeatedly."
      },
      {
        "prompt": "The Metropolis-Hastings algorithm is used in ________ methods to decide if a new ________ should be ________ based on how well it fits the data.",
        "answer": "Bayesian; tree/state/proposal; accepted",
        "accepted": [
          "bayesian tree accepted",
          "bayesian state accepted",
          "bayesian proposal accepted",
          "mcmc tree accepted",
          "bayesian inference tree accepted"
        ],
        "explanation": "In Bayesian MCMC, Metropolis-Hastings decides whether a proposed new state, often including a tree and parameters, is accepted into the chain."
      },
      {
        "prompt": "In codon-based models, dS represents the rate of ________ substitutions and dN the rate of ________ substitutions. The dN/dS reflects the action of ________.",
        "answer": "synonymous; nonsynonymous; selection",
        "accepted": [
          "synonymous nonsynonymous selection",
          "synonymous non-synonymous selection",
          "synonymous nonsynonymous substitutions selection",
          "synonymous non synonymous selection",
          "synonymous non-synonymous substitutions selection"
        ],
        "explanation": "dS refers to synonymous substitutions, dN to nonsynonymous substitutions, and their ratio is used as a proxy for selective pressure on protein-coding genes."
      },
      {
        "prompt": "In node dating, fossils are used to constrain the ages of internal ________, setting minimum bounds based on the fossil’s age. In contrast, tip dating incorporates ________ directly, allowing their placement in the tree alongside extant taxa.",
        "answer": "nodes; dated samples/tips",
        "accepted": [
          "nodes dated samples",
          "nodes dated tips",
          "nodes fossil tips",
          "nodes ancient samples",
          "nodes sampled tips"
        ],
        "explanation": "Node dating constrains internal nodes, while tip dating uses samples with known ages, such as ancient DNA or viruses sampled at known dates."
      },
      {
        "prompt": "Paralogous genes arise from gene ________ events, while orthologous genes arise from gene ________ events.",
        "answer": "duplication; speciation",
        "accepted": [
          "duplication speciation",
          "duplications speciation",
          "duplication speciation events"
        ],
        "explanation": "Paralogy is produced by gene duplication; orthology traces gene divergence through speciation."
      }
    ],
    "openEnded": {
      "prompt": "Briefly explain what an orthogroup is and how it relates to the concept of orthology. Also, what is a 1-to-1 orthogroup?",
      "sampleAnswer": "An orthogroup is a set of homologous genes that descend from a single gene in the last common ancestor of the species being considered, so it can include orthologs and sometimes paralogs produced within that reference group. Orthology is the relationship between genes separated by speciation, while paralogy comes from duplication. A 1-to-1 orthogroup contains one gene from each species, making it especially useful because it avoids within-species duplicates and is easier to treat as a single-copy marker."
    }
  }
];

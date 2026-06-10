# DRD M1.8 exam question candidates - expanded transcript audit

Source class: DRD - 26-06-09, Module 1, Relationship between samples and genes II.

Purpose: keep all possible exam prompts extracted from the June 9 transcript separate from the live exam trainer until we decide which ones should become practice cards.

The professor repeatedly emphasizes that answers should fill 10-12 lines and should not be only keywords. A strong answer should include: when to apply the method, why it fits the biological question, the experimental design, assumptions/limitations, and a cautious interpretation.

## High-confidence questions explicitly signaled

### 1. When and why would you apply K-means clustering?

Expected answer direction:
- Use it for unsupervised grouping of genes or samples with similar profiles.
- State that K, the number of clusters, must be chosen before running the method.
- Explain centroids as cluster means.
- Explain Euclidean-distance assignment to the nearest centroid.
- Mention iterative reassignment and centroid recalculation until no changes occur.
- Add limitations: non-deterministic initialization, no hierarchy, computational cost, possible over-clustering.

Suggested integration:
- Add to exam practice as a 10-12 line open question.
- Link to M1.8 Part 1 and Part 2.

### 2. How do you decide the K in K-means clustering?

Expected answer direction:
- K is not automatically discovered by the algorithm.
- K can be informed by prior biological knowledge, previous analyses, or visible structure from other clustering methods.
- Hierarchical clustering can suggest whether two, three or more groups are plausible.
- Running too few clusters may hide patterns; running too many can create one-gene clusters.
- Validation can include rerunning K-means with the same K and checking whether stable groups reappear.

Suggested integration:
- Add as a follow-up card after the K-means algorithm question.

### 3. Compare K-means clustering and hierarchical clustering.

Expected answer direction:
- Hierarchical clustering uses proximity/similarity and produces a dendrogram.
- It usually follows a bottom-up agglomerative strategy.
- K-means requires a predefined K and groups objects around centroids.
- K-means does not create a hierarchy or show relationships among clusters.
- K-means can be performed after hierarchical clustering to confirm or refine groups.

Suggested integration:
- Add as a comparison prompt or checkpoint shared with M1.7.

### 4. When and why would you apply PCA?

Expected answer direction:
- Use PCA for high-dimensional omics data with many samples, genes or variables.
- PCA reduces dimensionality while preserving major structure.
- PC1 captures the largest variance; PC2 captures the next independent/orthogonal variance.
- It is exploratory and helps detect trends, group separation, outliers or dominant sources of variability.
- It is not a clustering method and does not assign samples/genes to clusters.

Suggested integration:
- Add as an exam-practice open question.
- Keep distinct from K-means/hierarchical clustering.

### 5. How do you interpret a PCA plot and scree plot?

Expected answer direction:
- Identify what each point represents: sample, condition or gene profile.
- Read how much variance is explained by PC1, PC2 and additional components.
- Use the scree plot/table to decide how much total variance is captured by the displayed components.
- Interpret group separation, similarity, outliers and hidden structure cautiously.
- Tie the interpretation to the biological design.
- Example from class: time-course PCA can show that late and early time points have similar variance patterns.

Suggested integration:
- Add as a visual interpretation card after the basic PCA question.

### 6. How do you interpret a heatmap in gene-expression analysis?

Expected answer direction:
- Define what rows and columns represent.
- Explain the two dendrograms: one can cluster samples, the other genes/probes.
- Read the color legend before interpreting biology.
- State what blue/red/grey or other colors mean.
- Check whether clusters align with healthy/pathological state, treatment, tissue, time point or batch.
- Discuss outliers or unusual samples cautiously.
- Mention that z-score or fold-change scaling changes the meaning of colors.

Suggested integration:
- Add to exam practice as a visual-interpretation card.
- The professor explicitly says a heatmap question will be present.

### 7. Explain a volcano plot.

Expected answer direction:
- A volcano plot combines effect size and statistical significance.
- The x-axis is log fold change.
- The y-axis is usually negative log10 of the adjusted p-value.
- Significant down- and up-regulated features appear in the upper left/right regions.
- Thresholds such as adjusted p < 0.05 define the significant area.
- Gene labels or GO categories can be added to make interpretation faster.

Suggested integration:
- Add as an exam-practice open question.
- The professor explicitly says a volcano plot question will be present.

### 8. What does multiple-testing correction mean and why is it necessary?

Expected answer direction:
- In omics, hundreds or thousands of tests are performed.
- Many raw p-values inflate false positives.
- Bonferroni controls family-wise error but is very strict.
- Benjamini-Hochberg controls false discovery rate and is often more practical in gene-expression analysis.
- Volcano plots should use adjusted p-values when many genes are tested.

Suggested integration:
- Already partly covered by M1.6 and the exam practice page.
- Update the existing multiple-testing question with volcano-plot context.

### 9. One question on single-cell RNA-seq will always be present.

Expected answer direction:
- Hold for M1.9 after the guest lecture.
- The professor states that single-cell RNA-seq will always appear in exams.

Suggested integration:
- Do not integrate into M1.8 content except as a reminder.

## Mid-class and final-review questions to add

### 10. When and why is Welch correction used?

Expected answer direction:
- Welch correction is used when variances are unequal between groups.
- It modifies the degrees of freedom.
- The answer can connect this to why assumptions matter in parametric tests.

Suggested integration:
- Add to M1.5/M1.6 statistical-test practice, not necessarily M1.8.

### 11. When and why would you apply the Wilcoxon signed-rank test?

Expected answer direction:
- Use it for paired/non-parametric designs.
- Mention before/after or matched measurements.
- It is useful when sample size is small, distribution is unknown/non-parametric, or outliers are present.
- The answer must include an experimental design and biological question.
- Example designs: before/after coffee or aspirin exposure; split cell culture with control and treatment arms.
- Biological question example: does the treatment modify gene-expression profiles in peripheral blood cells or a specific cell line?

Suggested integration:
- Add as a 10-12 line exam-practice question in the statistical-test section.

### 12. When and why would you apply the Mann-Whitney U test?

Expected answer direction:
- Use it for two independent/unpaired groups when a non-parametric test is needed.
- Explain the experimental design and biological question.
- Mention null hypothesis and significance/confidence logic.
- The professor asks for expanded reasoning, not just "non-parametric".

Suggested integration:
- Add to M1.5/M1.6 exam practice.

### 13. When and why would you apply one-way ANOVA?

Expected answer direction:
- Use one-way ANOVA when comparing more than two groups for one factor/variable.
- It is parametric and assumes similar/equal variance.
- Example design: one control group plus two treatment doses.
- The biological question should specify what gene or expression profile is being compared.
- If the global test is significant, a post-hoc test is needed to identify which groups differ.

Suggested integration:
- Add to M1.6 statistical-test practice.

### 14. When and why would you apply Kruskal-Wallis?

Expected answer direction:
- Use Kruskal-Wallis as a non-parametric alternative to one-way ANOVA for more than two groups.
- It transforms values into ranks.
- It is generally less powerful than parametric ANOVA because information is lost when using ranks.
- Include experimental design and biological question.
- If significant, follow with post-hoc testing.

Suggested integration:
- Add to M1.6 statistical-test practice.

### 15. Why are post-hoc tests needed after significant ANOVA or Kruskal-Wallis?

Expected answer direction:
- ANOVA/Kruskal-Wallis provide a global test.
- A significant p-value says at least one group differs.
- It does not directly tell which pair or group contrast differs.
- Post-hoc tests identify the specific differences among groups.

Suggested integration:
- Add as a short checkpoint after ANOVA/Kruskal-Wallis.

### 16. For each unsupervised method, when would you apply it and why?

Expected answer direction:
- Methods named in the review: multidimensional scaling, hierarchical clustering, K-means and PCA.
- The professor frames each as a possible "when and why" question.
- MDS: visualize distance relationships in reduced dimensions.
- Hierarchical clustering: build dendrograms based on similarity/distance.
- K-means: partition objects into a predefined number of centroid-based groups.
- PCA: reduce dimensionality and identify major variance components.

Suggested integration:
- Add as a synthesis prompt after M1.7 and M1.8.

### 17. Explain Pearson, Spearman and Euclidean distance in hierarchical clustering.

Expected answer direction:
- Pearson measures linear correlation in profile shape.
- Spearman uses ranks and is more robust to outliers.
- Euclidean distance uses geometric distance and is sensitive to magnitude/scale.
- The choice changes dendrogram structure and biological interpretation.

Suggested integration:
- Merge with an existing M1.7 question or add as a checkpoint.

### 18. Explain linkage methods in hierarchical clustering, especially average linkage.

Expected answer direction:
- Linkage defines how distance between clusters is calculated.
- Single linkage uses nearest points.
- Complete linkage uses farthest points.
- Average linkage uses average pairwise distance and is often a balanced/common option.
- Linkage affects dendrogram shape.

Suggested integration:
- Add to M1.7/M1.8 checkpoint bank.

### 19. How should an apparent PCA or heatmap outlier be handled?

Expected answer direction:
- Do not automatically delete the sample.
- Ask whether it reflects a technical problem, biological difference, disease phase or metadata issue.
- Check whether the same sample appears unusual in multiple analyses.
- Decide whether to investigate deeper or exclude only with justification.

Suggested integration:
- Add to visual interpretation practice.

### 20. What is the biological question in the canine/human DLBCL comparison?

Expected answer direction:
- The study compares diffuse large B-cell lymphoma profiles in dogs and humans.
- The biological question is whether the pathology shows similar expression structure across species.
- PCA and hierarchical clustering are used to inspect whether healthy and tumor samples separate.
- NF-kB target genes are used as a biologically focused subset.

Suggested integration:
- Add as a worked interpretation example inside M1.8, not necessarily a standalone exam card.

### 21. Why focus PCA or clustering on NF-kB target genes?

Expected answer direction:
- NF-kB is biologically relevant to inflammation and immune response.
- Reducing the dataset to a meaningful gene subset can increase interpretability.
- The variance explained by principal components may increase when focusing on a coherent gene set.
- Group separation can become clearer.

Suggested integration:
- Add as optional PCA interpretation detail.

### 22. What does DAVID/GO/KEGG add after a gene list?

Expected answer direction:
- A raw list of up- and down-regulated genes is not yet a biological conclusion.
- DAVID can identify GO terms, functional categories and enriched biological themes.
- GO includes biological process, molecular function and cellular component.
- BioCarta/KEGG pathway maps show where significant genes sit in known pathways.
- Enrichment p-values help prioritize affected pathways.

Suggested integration:
- Add after heatmap/volcano sections or keep as report/interpretation practice.

### 23. How do pathway/GO results support biological interpretation?

Expected answer direction:
- Compare which GO terms/pathways are enriched in different datasets or species.
- Example from class: canine data emphasized cell cycle, while human data emphasized immune response.
- Interpret these differences cautiously and connect them to disease phase, biology or study design.

Suggested integration:
- Add as a report-style interpretation card.

## Proposed integration order

Add to the exam practice page first:
1. K-means: when/why and algorithm logic.
2. PCA: when/why, variance, not clustering.
3. Heatmap interpretation.
4. Volcano plot with adjusted p-values.
5. Statistical-test review pack: Welch, Wilcoxon signed-rank, Mann-Whitney U, one-way ANOVA, Kruskal-Wallis and post-hoc logic.
6. Unsupervised-method comparison pack: MDS, hierarchical clustering, K-means and PCA.

Keep the DLBCL/NF-kB/DAVID/GO/KEGG prompts as interpretation/report cards unless we want a larger visual-exam practice section.

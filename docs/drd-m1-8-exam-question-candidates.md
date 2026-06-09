# DRD M1.8 exam question candidates

Source class: DRD - 26-06-09, Module 1, Relationship between samples and genes II.

This document keeps possible exam prompts separate from the live exam trainer until we decide which ones should become practice cards.

## Strong candidates

### 1. When and why would you apply K-means clustering?

Expected answer direction:
- Use it for unsupervised grouping of genes or samples with similar profiles.
- State that K, the number of clusters, must be chosen before running the method.
- Explain centroids as cluster means.
- Explain Euclidean-distance assignment to the nearest centroid.
- Mention iterative reassignment and centroid recalculation until no changes occur.
- Add limitations: non-deterministic initialization, no hierarchy, possible over-clustering.

Suggested integration:
- Add to exam practice as a 10-12 line open question.
- Link to M1.8 and M1.7.

### 2. Compare K-means clustering and hierarchical clustering.

Expected answer direction:
- Hierarchical clustering builds a dendrogram using proximity/similarity.
- K-means requires a predefined K and groups objects around centroids.
- Hierarchical clustering can show relationships among clusters; K-means gives groups without hierarchy.
- K-means may be run after hierarchical clustering to confirm or refine groups.
- K-means should be validated by rerunning with the same K and checking stability/biological coherence.

Suggested integration:
- Add as a comparison prompt or checkpoint.

### 3. When and why would you apply PCA?

Expected answer direction:
- Use PCA for high-dimensional gene-expression or omics data.
- It reduces dimensionality while preserving major data structure.
- PC1 captures the largest variance, PC2 the second largest independent variance, and so on.
- It is exploratory and helps detect trends, group separation, outliers or dominant sources of variability.
- It is not a clustering method and does not assign objects to clusters.

Suggested integration:
- Add as an exam-practice open question.
- Keep distinct from K-means/hierarchical clustering.

### 4. How do you interpret a heatmap in gene-expression analysis?

Expected answer direction:
- Define what rows represent and what columns represent.
- Explain the color legend before interpreting biology.
- Explain the two dendrograms: one can cluster samples, the other genes/probes.
- Check whether sample clusters align with phenotype, healthy/tumor, treatment, tissue or batch.
- Discuss outliers cautiously instead of deleting them automatically.
- Mention that z-score or fold-change scaling may change the meaning of colors.

Suggested integration:
- Add to exam practice as a visual-interpretation card.
- Also useful in final-report checklist.

### 5. Explain a volcano plot.

Expected answer direction:
- A volcano plot combines fold change and statistical significance.
- The x-axis is log fold change.
- The y-axis is usually negative log10 of the adjusted p-value.
- Genes in upper left/right regions are significant down- or up-regulated features.
- The p-value should be adjusted because many genes are tested at once.
- Mention FDR, Bonferroni or Benjamini-Hochberg when appropriate.

Suggested integration:
- Add as an exam-practice open question.
- Also link to M1.5/M1.6 multiple testing.

## Cross-topic candidates

### 6. Explain Pearson, Spearman and Euclidean distance in hierarchical clustering.

Expected answer direction:
- Pearson measures linear correlation in profile shape.
- Spearman uses ranks and is more robust to outliers, but can lose magnitude/time-course direction information.
- Euclidean distance uses geometric distance and is sensitive to scale and magnitude.
- The choice changes dendrogram structure and biological interpretation.

Suggested integration:
- Could be merged with an existing M1.7 question instead of adding a duplicate.

### 7. Explain linkage methods in hierarchical clustering, especially average linkage.

Expected answer direction:
- Linkage defines how distance between clusters is calculated.
- Single linkage uses nearest points.
- Complete linkage uses farthest points.
- Average linkage uses average pairwise distance and is often a balanced option.
- Linkage affects dendrogram shape.

Suggested integration:
- Add to M1.7/M1.8 checkpoint bank rather than full exam practice unless the professor emphasizes it again.

### 8. Why and how do we correct p-values in high-dimensional omics?

Expected answer direction:
- Hundreds or thousands of tests increase false positives.
- Bonferroni controls family-wise error but is very strict.
- Benjamini-Hochberg controls false discovery rate and is often more practical in gene-expression analysis.
- Volcano plots usually display adjusted p-values.

Suggested integration:
- Already partly covered by M1.6 and the exam practice page.
- Consider updating the existing multiple-testing question with volcano-plot context.

### 9. What does DAVID/GO/KEGG add after a gene list?

Expected answer direction:
- A raw list of up/down-regulated genes is hard to interpret biologically.
- DAVID can group genes by GO terms, pathways and functional categories.
- GO includes biological process, molecular function and cellular component.
- KEGG or BioCarta pathway maps help visualize where significant genes sit in known pathways.

Suggested integration:
- Add after volcano plot, or keep as report/interpretation practice.

### 10. Single-cell RNA-seq will be present in exams.

Expected answer direction:
- The professor explicitly says one question on single-cell RNA-seq will always be present.
- This belongs to M1.9 after the guest lecture, not M1.8.

Suggested integration:
- Hold until M1.9 content is built.

## Proposed next action

Add the following to the exam practice page first:
1. K-means: when/why and algorithm logic.
2. PCA: when/why, variance, not clustering.
3. Heatmap interpretation.
4. Volcano plot with adjusted p-values.

Keep distance/linkage as M1.7/M1.8 checkpoints unless more exam evidence appears.

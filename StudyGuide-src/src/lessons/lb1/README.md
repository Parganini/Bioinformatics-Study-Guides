# LB1 developer notes

This first pass uses slide-attachment cards: each developed LB1 lesson lists the source deck, slide/page labels, key slide bullets, study interpretation, traps and prompts, and links back to the original Drive PDF. It does not reference local slide image paths, so there are no broken `lb1-slides` assets.

Future asset pass:
- Extract only curated slide images for `0-Module-LSB1-2.pdf` and `1-Structure-Alignment.pdf`.
- Store them under `StudyGuide-src/public/lb1-slides/<deck-id>/`.
- Add image paths to the corresponding `walkthroughSections` only after the files exist.
- The current workspace can download the PDFs, but PDF rasterization is blocked because the local Poppler/pdfinfo executable is unavailable or denied. Use a working PDF rasterizer before adding image references.

export function buildSlideRange({ deckFolder, deck, title, start, end, label, comment, teaching, remember, trap, prompt }) {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const page = start + index;
    return {
      label: `Slide ${page}`,
      page,
      image: `../lb1-slides/${deckFolder}/slide-${String(page).padStart(2, "0")}.jpg`,
      alt: `Slide ${page} from ${deck} for ${title}`,
      deckLabel: deck,
      slideTitle: `${label}: slide ${page}`,
      slideBullets: [
        "Study the original slide image first.",
        "Use the explanation below to extract the method logic.",
        "Connect the slide to the section's biological question.",
      ],
      title: `${label}: slide ${page}`,
      comment,
      teaching,
      remember,
      trap,
      prompt,
    };
  });
}

export function buildSections({ deckFolder, deck, title, sections, remember, trap, prompt }) {
  return sections.map((section) => ({
    range: `Slides ${section.start}-${section.end}`,
    title: section.title,
    intro: section.intro,
    slides: buildSlideRange({
      deckFolder,
      deck,
      title,
      start: section.start,
      end: section.end,
      label: section.slideLabel || section.title,
      comment: section.comment || section.intro,
      teaching: section.teaching,
      remember: section.remember || remember,
      trap: section.trap || trap,
      prompt: section.prompt || prompt,
    }),
  }));
}

export const lessonContent = {
  id: "amla-2026-04-20-neural-networks",
  extractionStatus: "content pending - shared hands-on continuation",
  objectives: [
    "Reconnect this class to the Module 2 Lecture2_tmp Keras/MNIST material before expanding it.",
    "Use the transcript to separate exam-context discussion from the hands-on notebook flow.",
    "Identify which MNIST/Keras cells were continued from the previous session.",
    "Add static slide blocks only after the exact slide ranges used in class are verified.",
  ],
  coreConcepts: [
    {
      title: "Shared deck continuation",
      body: "The best current mapping is that this class continues the 17/04 Keras/MNIST hands-on material rather than introducing a separate Module 1 lecture PDF.",
      keywords: ["Module 2/Lecture2_tmp", "Keras", "MNIST"],
    },
    {
      title: "Transcript check required",
      body: "Before turning this into a full DRD-style lesson, the slide ranges should be checked against the transcript so comments land next to the right screenshots.",
      keywords: ["slide range", "professor comment", "notebook flow"],
    },
  ],
  slidePath: [
    {
      range: "Shared Module 2/Lecture2_tmp",
      concept: "Keras/MNIST continuation",
      intuition: "Treat this as a practical continuation: compile, train, evaluate and interpret the first neural-network workflow.",
      professorDetail: "The transcript includes course/exam context plus hands-on continuation, so the study page should not pretend this is a separate theory deck.",
      examMemory: "For now, study it together with L02 until the exact in-class slide ranges are extracted.",
    },
  ],
  professorEmphasis: [
    "Placeholder status is intentional: this page should be expanded only after matching transcript moments to the reused Module 2 deck.",
    "The developed MLP/backpropagation/tensor lesson belongs to 2026-05-07 because `AML2425Adv_Lecture3.pdf` is dated 07/05/2026.",
  ],
  commonTraps: [
    "Do not assign `AML2425Adv_Lecture3.pdf` to 20/04 just because it is named Lecture3.",
    "Do not treat complementary notebook/project/report PDFs as complete lecture decks.",
  ],
  quickQuiz: [],
  examQuestions: [],
  studyChecklist: [
    "Open the 20/04 transcript next to Module 2/Lecture2_tmp.",
    "Mark the first and last slide/notebook point actually covered in class.",
    "Only then add static slide screenshots and interleaved comments.",
  ],
};

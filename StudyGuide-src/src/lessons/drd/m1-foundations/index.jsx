import React from "react";
import LegacyLesson from "../Lesson01.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1FoundationsLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}

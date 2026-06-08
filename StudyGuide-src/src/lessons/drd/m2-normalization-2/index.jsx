import React from "react";
import LegacyLesson from "../Lesson12.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2Normalization2Lesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}

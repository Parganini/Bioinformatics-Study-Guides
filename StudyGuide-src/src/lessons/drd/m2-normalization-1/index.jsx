import React from "react";
import LegacyLesson from "../Lesson10.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2Normalization1Lesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}

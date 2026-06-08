import React from "react";
import LegacyLesson from "../Lesson04.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M2RLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}

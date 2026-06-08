import React from "react";
import LegacyLesson from "../Lesson05.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1IlluminaLesson(props) {
  return <LegacyLesson {...props} lang="en" />;
}

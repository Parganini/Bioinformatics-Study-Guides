import React from "react";
import LegacyLesson from "../LegacyM1Scrna.jsx";

export { lessonContent } from "./content.js";
export { LessonInteractions } from "./interactions.jsx";

export default function M1ScrnaLesson(props) {
  return <LegacyLesson {...props} />;
}

import React, { useMemo, useState } from "react";
import { AMLA_LESSONS, amlaLessonHref } from "../../lessons/amla/amlaManifest.js";
import { MOCK_EXAM_QUESTIONS, QuestionCard } from "./practiceExam.jsx";

export default function AMLAMockExamPage() {
  const [mode, setMode] = useState("mock");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reviewMistakes, setReviewMistakes] = useState(false);

  const locked = mode === "mock" && submitted;
  const showFeedback = mode === "practice" || submitted;
  const score = useMemo(() => MOCK_EXAM_QUESTIONS.filter((question) => answers[question.id] === question.correct).length, [answers]);
  const answeredCount = Object.keys(answers).length;
  const canReviewMistakes = answeredCount > 0 && score < answeredCount;
  const questions = useMemo(() => MOCK_EXAM_QUESTIONS.filter((question) => (
    !reviewMistakes || answers[question.id] !== undefined && answers[question.id] !== question.correct
  )), [answers, reviewMistakes]);
  const byLesson = useMemo(() => AMLA_LESSONS.map((lesson) => {
    const lessonQuestions = MOCK_EXAM_QUESTIONS.filter((question) => question.lessonId === lesson.id);
    const answered = lessonQuestions.filter((question) => answers[question.id] !== undefined).length;
    const correct = lessonQuestions.filter((question) => answers[question.id] === question.correct).length;
    return { lesson, count: lessonQuestions.length, answered, correct };
  }).filter((row) => row.count > 0), [answers]);

  const reset = (nextMode = mode) => {
    setMode(nextMode);
    setAnswers({});
    setSubmitted(false);
    setReviewMistakes(false);
  };

  const setAnswer = (questionId, value) => {
    if (locked) return;
    setAnswers((current) => ({ ...current, [questionId]: value }));
  };

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-sm font-black text-stone-800 transition hover:bg-stone-50">Back to AMLA dashboard</a>
          <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">AMLA mock exam</div>
          <a href="#/practice-exam" className="rounded-full bg-stone-950 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-red-800">Full practice bank</a>
        </div>
      </nav>

      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">Mock exam sample</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">AMLA Mock Exam</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">
            Ten exam-style questions from the supplied mock set, focused on SVMs, activations, ensembles, CNNs and deep-learning context.
          </p>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-800"><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Questions</div><div className="mt-2 text-3xl font-black">{MOCK_EXAM_QUESTIONS.length}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Answered</div><div className="mt-2 text-3xl font-black text-stone-950">{answeredCount}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Score</div><div className="mt-2 text-3xl font-black text-stone-950">{score}</div></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["mock", "practice"].map((option) => (
              <button key={option} type="button" onClick={() => reset(option)} className={`rounded-full border px-4 py-2 text-sm font-black ${mode === option ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700"}`}>
                {option === "mock" ? "Mock mode" : "Practice mode"}
              </button>
            ))}
          </div>
          {mode === "mock" ? <button type="button" onClick={() => setSubmitted(true)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-800">Submit mock</button> : null}
          {locked ? <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black leading-7 text-emerald-950">Final score: {score} / {MOCK_EXAM_QUESTIONS.length}</p> : null}
          <button
            type="button"
            onClick={() => setReviewMistakes((current) => !current)}
            disabled={!canReviewMistakes}
            className="mt-3 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-black text-stone-700 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {reviewMistakes ? "Show all questions" : "Review mistakes"}
          </button>
        </aside>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Review status</div>
          <div className="mt-3 grid gap-3">
            {[
              ["Answered", `${answeredCount} / ${MOCK_EXAM_QUESTIONS.length}`],
              ["Correct", `${score}`],
              ["Current view", `${questions.length} questions`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div>
                <div className="mt-1 text-2xl font-black text-stone-950">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Coverage by lesson</div>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {byLesson.map(({ lesson, count, answered, correct }) => (
              <a key={lesson.id} href={amlaLessonHref(lesson)} className="rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm font-bold leading-6 text-stone-700 transition hover:bg-white">
                <span className="font-black text-stone-950">{lesson.code}</span> · {correct}/{answered || 0} correct · {count} total
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="question-bank" className="mt-10 scroll-mt-28 grid gap-5">
        {questions.length === 0 ? (
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 text-sm font-bold leading-7 text-stone-600">
            No questions match the current review mode.
          </div>
        ) : null}
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            setAnswer={(value) => setAnswer(question.id, value)}
            showFeedback={showFeedback}
            locked={locked}
          />
        ))}
      </section>
    </main>
  );
}

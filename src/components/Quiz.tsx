import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { QuestionState, fetchQuizQuestions } from "../API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type Props = {
  questionsAmount: number;
  category?: number;
  difficultyQuestions?: string;
};

const Quiz: React.FC<Props> = ({
  questionsAmount,
  category,
  difficultyQuestions,
}) => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);

  const TOTAL_QUESTIONS = questionsAmount;
  const CATEGORY = category;
  const DIFFICULTY = difficultyQuestions;

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      CATEGORY,
      DIFFICULTY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <>
      {gameOver ? (
        <button className="start" onClick={startTrivia}>
          Start the quiz
        </button>
      ) : null}
      {userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Play again?
        </button>
      ) : null}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next question
        </button>
      ) : null}
    </>
  );
};
export default Quiz;

import { shuffleArray } from "./utils";
import { Console } from "console";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export const fetchQuizQuestions = async (
  amount: number,
  category: number | undefined,
  difficulty: string | undefined
) => {
  function chooseEndpoint() {
    if (category && difficulty) {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
      return endpoint;
    } else if (difficulty) {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
      return endpoint;
    } else if (category) {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`;
      return endpoint;
    } else {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
      return endpoint;
    }
  }

  const data = await (await fetch(chooseEndpoint())).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

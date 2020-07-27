import React, { useState } from "react";
import Quiz from "./Quiz";
import End from "./EndScreen";

import { FormWrapper, ButtonWrapper } from "./Form.styles";

interface Props {
  questionsAmount?: number;
  category?: number;
  difficultyQuestions?: string;
  submit?: boolean;
}

const Form: React.FC<Props> = () => {
  const [questionsAmount, setQuestionsAmount] = useState(1);
  const [category, setCategory] = useState<number>();
  const [difficultyQuestions, setDifficultyQuestions] = useState<string>();

  const triviaCategories = [
    { id: 9, name: "General Knowledge", max: 50 },
    { id: 10, name: "Entertainment: Books", max: 21 },
    { id: 11, name: "Entertainment: Film", max: 35 },
    { id: 12, name: "Entertainment: Music", max: 50 },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
      max: 5,
    },
    { id: 14, name: "Entertainment: Television", max: 26 },
    { id: 15, name: "Entertainment: Video Games", max: 50 },
    {
      id: 16,
      name: "Entertainment: Board Games",
      max: 12,
    },
    { id: 17, name: "Science & Nature", max: 46 },
    { id: 18, name: "Science: Computers", max: 28 },
    { id: 19, name: "Science: Mathematics", max: 8 },
    { id: 20, name: "Mythology", max: 10 },
    { id: 21, name: "Sports", max: 14 },
    { id: 22, name: "Geography", max: 50 },
    { id: 23, name: "History", max: 50 },
    { id: 24, name: "Politics", max: 10 },
    { id: 25, name: "Art", max: 6 },
    { id: 26, name: "Celebrities", max: 7 },
    { id: 27, name: "Animals", max: 15 },
    { id: 28, name: "Vehicles", max: 15 },
    { id: 29, name: "Entertainment: Comics", max: 7 },
    { id: 30, name: "Science: Gadgets", max: 4 },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
      max: 34,
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
      max: 15,
    },
  ];
  const difficulties = [
    { id: 1, name: "easy" },
    { id: 2, name: "medium" },
    { id: 3, name: "hard" },
  ];

  const [submit, setSubmit] = useState(false);
  const [quizUnLoaded, setQuizUnLoaded] = useState(true);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    setQuizUnLoaded(false);
  };

  return (
    <>
      {quizUnLoaded ? (
        <FormWrapper>
          <h2>Welcome to Quiz Yourself!</h2>
          <h3>
            Choose your quiz criteria and hit{" "}
            <span className="submitText">submit</span> to begin
          </h3>

          <form onSubmit={handleSubmit}>
            <label>Choose the number of questions:</label>
            <label className="numberInput">{questionsAmount}</label>
            <input
              type="range"
              min={1}
              max={50}
              name="questionsAmount"
              value={questionsAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setQuestionsAmount(parseInt(event.target.value))
              }
            ></input>

            <label>Choose a category</label>
            <select
              name="category"
              value={category}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                setCategory(parseInt(event.target.value))
              }
            >
              <option selected disabled>
                Category
              </option>
              {triviaCategories.map((triviaCategories) => (
                <option key={triviaCategories.id} value={triviaCategories.id}>
                  {triviaCategories.name}
                </option>
              ))}
              ;
            </select>

            <label>Choose a difficulty</label>
            <select
              name="difficulty"
              value={difficultyQuestions}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                setDifficultyQuestions(event.target.value)
              }
            >
              <option selected disabled>
                Difficulty
              </option>
              {difficulties.map((difficulties) => (
                <option key={difficulties.id} value={difficulties.name}>
                  {difficulties.name}
                </option>
              ))}
              ;
            </select>
            <ButtonWrapper userClicked={submit}>
              <button type="submit" name="Submit">
                Submit
              </button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      ) : null}
      {submit && (
        <Quiz
          questionsAmount={questionsAmount}
          category={category}
          difficultyQuestions={difficultyQuestions}
          submit={submit}
        />
      )}
    </>
  );
};

export default Form;

import React, { useState } from "react";
import Quiz from "./Quiz";

interface Props {
  questionsAmount?: number;
  category?: number;
  difficultyQuestions?: string;
}

const Form: React.FC<Props> = () => {
  const [questionsAmount, setQuestionsAmount] = useState(10);
  const [category, setCategory] = useState<number>(9);
  const [difficultyQuestions, setDifficultyQuestions] = useState("easy");

  const triviaCategories = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ];

  const difficulties = [
    { id: 1, name: "easy" },
    { id: 2, name: "medium" },
    { id: 3, name: "hard" },
  ];

  return (
    <>
      <form>
        <label>Choose the number of questions</label>
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
        <select
          name="category"
          value={category}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setCategory(parseInt(event.target.value))
          }
        >
          <option>Choose a category</option>
          {triviaCategories.map((triviaCategories) => (
            <option key={triviaCategories.id} value={triviaCategories.id}>
              {triviaCategories.name}
            </option>
          ))}
          ;
        </select>
        <select
          name="difficulty"
          value={difficultyQuestions}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setDifficultyQuestions(event.target.value)
          }
        >
          <option>Choose a difficulty</option>
          {difficulties.map((difficulties) => (
            <option key={difficulties.id} value={difficulties.name}>
              {difficulties.name}
            </option>
          ))}
          ;
        </select>

        {console.log(category)}
        {console.log(difficultyQuestions)}
        {console.log(questionsAmount)}
      </form>

      <Quiz
        questionsAmount={questionsAmount}
        category={category}
        difficultyQuestions={difficultyQuestions}
      />
    </>
  );
};

export default Form;

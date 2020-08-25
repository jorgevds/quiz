import React from "react";
import { EndWrapper } from "./Components.styles";
import "../app.styles";

type Props = {
  score: number;
  TOTAL_QUESTIONS: number;
};

const End: React.FC<Props> = ({ score, TOTAL_QUESTIONS }) => {
  const SCORE = score;
  const MAX = TOTAL_QUESTIONS;
  return (
    <>
      <EndWrapper>
        <div>
          <h2>The quiz is over!</h2>
          <h3>Here's your score: </h3>
          <p>
            {SCORE} out of {MAX}
          </p>
          <button className="end">
            <a href="/">Return to the start</a>
          </button>
        </div>
      </EndWrapper>
    </>
  );
};
export default End;

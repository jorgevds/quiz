import React from "react";
import { EndWrapper } from "./EndScreen.styles";
import { Wrapper } from "../app.styles";

type Props = {
  score: number;
};

const End: React.FC<Props> = ({ score }) => {
  const SCORE = score;
  return (
    <>
      <EndWrapper>
        <div>
          <h2>The quiz is over!</h2>
          <h3>Here's your score: </h3>
          <p>{SCORE}</p>
          <button className="end">
            <a href="/">Return to the start</a>
          </button>
        </div>
      </EndWrapper>
    </>
  );
};
export default End;

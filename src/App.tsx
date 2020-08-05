import React from "react";
import Form from "./components/Form";

import { GlobalStyle, Wrapper } from "./app.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz Yourself</h1>
        <span className="favicon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/trophy--v2"
          >
            Trophy icon
          </a>{" "}
          icon by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </span>
        <Form />
      </Wrapper>
    </>
  );
};

export default App;

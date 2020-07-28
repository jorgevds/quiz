import React from "react";
import Form from "./components/Form";

import { GlobalStyle, Wrapper } from "./app.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz Yourself</h1>
        <Form />
        <span className="favicon">
          <a target="_blank" href="https://icons8.com/icons/set/trophy--v2">
            Trophy icon
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </span>
      </Wrapper>
    </>
  );
};

export default App;

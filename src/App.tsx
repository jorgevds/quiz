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
      </Wrapper>
    </>
  );
};

export default App;

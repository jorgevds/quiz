import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGImage from "./images/jcob-nasyr.jpg";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 120vh;
}
@media (max-width: 900px) {
  height: 150vh;
  }
@media (min-width: 1200px) {
  height: 150vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next,
  .end,
  .endQuiz {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-align: center;
    padding: 10px 40px;
  }
  .start {
    max-width: 200px;
    animation: fadeinMove 0.8s forwards;
    animation-timing-function: ease;
    position: absolute;
  }
  .end,
  .endQuiz {
    max-width: 200px;
    animation: fadein 0.8s;
    animation-timing-function: ease;
  }
  .end {
    padding: 10px 0;
  }
  .start:hover,
  .end:hover {
    background: linear-gradient(180deg, #fff, #ffdd8f);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
  }
  .next {
    margin-top: 12px;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h2,
  h3 {
    color: #359a1c;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes fadeinMove {
    0% {
      opacity: 0;
      top: 35vh;
    }

    100% {
      opacity: 1;
      top: 50vh;
    }
  }
`;

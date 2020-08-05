import styled from "styled-components";

type WrapperProps = {
  CATEGORY: number;
};

export const QuestionCardWrapper = styled.div`
  width: 60vw;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.25);
  text-align: center;
  animation: fadein 0.8s;
  transition: 0.5s;
  margin-bottom: 10%;

  @media (max-width: 900px) {
    width: 80vw;
  }
  @media (min-width: 1400px) {
    width: 500px;
  }

  p {
    font-size: 1rem;
    color: #359a1c;
  }
  .number {
    color: rgba(53, 154, 28, 0.6);
  }
`;

export const EndWrapper = styled(QuestionCardWrapper)`
  p {
    font-size: 1.5rem;
    color: rgba(53, 154, 28, 0.6);
  }

  a {
    text-decoration: none;
    color: black;
    padding: 25px 30px;
  }
`;

export const FormWrapper = styled(QuestionCardWrapper)`
  color: #359a1c;

  .submitText {
    color: rgba(53, 154, 28, 0.6);
  }

  label,
  option {
    font-size: 1rem;
  }

  input,
  select {
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    color: rgba(53, 154, 28, 0.6);
    text-indent: 8px;
    background: rgba(235, 254, 255, 0.6);
  }

  .numberInput {
    display: block;
    border: 1px solid #359a1c;
    width: 10%;
    margin: auto;
    margin-top: 12px;
    text-indent: 0px;
    font-size: 1.2rem;
  }
  @media (max-width: 425px) {
    .numberInput {
      width: 20%;
    }
  }
`;

type ButtonWrapperProps = {
  correct?: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid white;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FormButtonWrapper = styled(ButtonWrapper)<ButtonWrapperProps>`
  button {
    background: ${({ userClicked }) =>
      userClicked
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
`;

import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 700px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.25);
  text-align: center;
  animation: fadein 0.8s;
  transition: 0.5s;

  label,
  option {
    font-size: 1rem;
  }
  input,
  select {
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
  }
`;

type ButtonWrapperProps = {
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
    background: ${({ userClicked }) =>
      userClicked
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
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

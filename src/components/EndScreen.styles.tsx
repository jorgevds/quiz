import styled from "styled-components";

export const EndWrapper = styled.div`
  width: 60vw;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.25);
  text-align: center;
  animation: fadein 0.8s;
  transition: 0.5s;
  p {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 25px 30px;
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

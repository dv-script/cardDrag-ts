import styled from "styled-components";

export const LoginSection = styled.section`
  font-family: "Poppins";
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LoginContainer = styled.div`
  width: 500px;
  margin: auto;
  padding: 3em;
  border-radius: 25px;
  background-color: #FFF;
`;

export const LoginBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;

export const LoginInputContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1em;
`;

export const LoginLabel = styled.label`
  font-size: 16px;
  font-weight: 300;
`;

export const LoginInput = styled.input`
  height: 40px;
  outline: none;
  border: none;
  display: relative;
  font-family: "Poppins";
  font-size: 16px;

  ::placeholder {
    font-family: "Poppins";
    font-size: 16px;
    color: #adadad;
  }

  :focus::placeholder {
    opacity: 0;
  }
`;

export const LoginSpan = styled.span`
  display: absolute;
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  transition: 300ms;

  ${LoginInput}:focus + & {
    background-color: #969696;
  }
`
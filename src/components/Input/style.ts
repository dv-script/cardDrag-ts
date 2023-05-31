import styled from "styled-components";

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  border: none;
  display: relative;
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

export const Span = styled.span`
  display: absolute;
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  transition: 300ms;

  ${Input}:focus + & {
    background-color: #969696;
  }
`
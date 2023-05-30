import styled from "styled-components";

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

export const LoginForgotYourPassword = styled.a`
  cursor: pointer;
  transition: 300ms;
  text-align: right;

  :hover {
    color: #9d51f2;
  }

  :active{
    color: #3ba7e7;
  }
`;

export const LoginSubmit = styled.button`
  cursor: pointer;
  font-family: "Poppins";
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
  color: #fff;
  background-image: linear-gradient(to right, rgba(157,81,242,1) 0%, rgba(79,151,233,1) 100%);
  background-size: 200%;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 0.5rem;
  margin-top: 1em;
  transition: 0.6s;

  :hover {
    background-position: right;
  }

  :active {
    background-image: linear-gradient(to left, rgba(157,81,242,1) 100%, rgba(79,151,233,1) 0%);
  }
`;

export const LoginSignUp = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 300;
  margin-top: 1em;
  
  :hover {
    color: #9d51f2;
  }

  :active{
    color: #3ba7e7;
  }
`

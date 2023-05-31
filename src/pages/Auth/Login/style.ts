import styled from 'styled-components'

export const LoginInputContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1em;
`

export const LoginLabel = styled.label`
  font-size: 16px;
  font-weight: 300;
`

export const LoginInput = styled.input`
  height: 40px;
  outline: none;
  border: none;
  display: relative;
  font-size: 16px;

  ::placeholder {
    font-family: 'Poppins';
    font-size: 16px;
    color: #adadad;
  }

  :focus::placeholder {
    opacity: 0;
  }
`

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
  width: max-content;
  margin-left: auto;
  transition: 300ms;

  :hover {
    color: #9d51f2;
  }

  :active {
    color: #3ba7e7;
  }
`

import styled from 'styled-components'

export const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const LoginContainer = styled.div`
  width: 500px;
  margin: auto;
  padding: 3em;
  border-radius: 25px;
  background-color: #fff;

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

export const LoginBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LoginTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`

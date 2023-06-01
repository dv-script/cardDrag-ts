import styled from 'styled-components'

export const ContainerInfOut = styled.div`
  background-color: #ffffff;
  margin: 30px 13vw;
  height: 80vh;
  border-radius: 3px;
  color: gray;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;

  @media screen and (max-width: 520px) {
    width: 90%;
    height: 65vh;
    margin: 20px auto;
  }
`

export const ContainerInfInside = styled.section`
  background-color: #ffffff;
  margin: 0px;
  height: 95%;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  color: gray;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 15px;
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: scroll;

  @media screen and (max-width: 520px) {
    margin: 0px;
    height: 95%;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #413eb2;
  }
`

export const titleInf = {
  marginTop: '0px',
}

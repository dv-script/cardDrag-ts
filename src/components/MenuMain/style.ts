import styled from 'styled-components'

export const MenuContainer = styled.menu`
  background-color: #413eb2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 7vh;
  border-radius: 2px;
  padding: 50px 0px;
  align-items: center;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.24);
`

export const ButtonIconMenu = styled.button`
background: rgba(235, 200, 231, .10);
padding: 15px 15px 5px 15px;
cursor: pointer;
border-radius: 10px;
border: none;

:hover {
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.15);
  background: white;
`

import styled from 'styled-components'

export const LoginSubmit = styled.button`
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgba(157, 81, 242, 1) 0%,
    rgba(79, 151, 233, 1) 100%
  );
  background-size: 200%;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 0.5rem;
  margin-top: 1em;
  transition: 0.6s;
  display: flex;
  justify-content: center;

  :hover {
    background-position: right;
  }

  :active {
    background-image: linear-gradient(
      to left,
      rgba(157, 81, 242, 1) 100%,
      rgba(79, 151, 233, 1) 0%
    );
  }
`

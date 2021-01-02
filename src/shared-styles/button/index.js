import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  margin: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #f6f7f9;
    outline: none;
  }

  &:active {
    position: relative;
    top: 1px;
    outline: none;
  }
`

export default Button

import styled from 'styled-components'
import { colors } from '../shared-styles'

export const Wrapper = styled.div`
  position: relative;
`

export const DeckInfo = styled.div`
  position: absolute;
  top: -55px;

  & span {
    font-size: 16px;
    font-style: italic;
  }
`

export const TheDeck = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${colors.grey};
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) =>
    props.cardsInDeck > 2 &&
    `
  &::before,
  &::after {
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.grey};
  }
  &::before {
    left: 4px;
    top: 4px;
    z-index: -1;
  }
  &::after {
    left: 8px;
    top: 8px;
    z-index: -2;
  }
  `}

  & h2 {
    position: absolute;
    top: 4px;
    font-family: 'Mountains of Christmas', cursive;
    color: ${colors.white};
    z-index: 0;
  }

  & button {
    z-index: 10;
  }
`

export const Icons = styled.div`
  position: absolute;
  bottom: 8px;
  font-size: 18px;
  color: ${colors.white};
  z-index: 0;
`

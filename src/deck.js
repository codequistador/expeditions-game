import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100px;
  height: 150px;
  background-color: #fff;
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
    background-color: #fff;
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
`;

const Button = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  margin: 4px;
`;

class Deck extends React.Component {
  render() {
    const { cardsInDeck, isDrawStage } = this.props;
    return (
      <Wrapper cardsInDeck={cardsInDeck}>
        {cardsInDeck} Cards remaining
        {isDrawStage && (
          <Button onClick={this.props.handleDraw}>Draw From Deck</Button>
        )}
      </Wrapper>
    );
  }
}

export default Deck;

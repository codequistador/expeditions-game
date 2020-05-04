import React from "react";
import styled from "styled-components";
import { deck, getInitialHand } from "./constants/deck";
import Card from "./card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class Hand extends React.Component {
  state = { hand: getInitialHand(deck) };

  renderCards = () => {
    return this.state.hand.map((card, i) => {
      return (
        <Card
          key={i}
          color={card.color}
          value={card.type !== "bet" ? card.value : "B"}
        />
      );
    });
  };

  render() {
    return <Wrapper>{this.renderCards()}</Wrapper>;
  }
}

export default Hand;

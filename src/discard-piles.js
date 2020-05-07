import React from "react";
import Card from "./card";
import styled from "styled-components";

const DiscardPile = styled.div`
  background-color: lightblue;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 8px;
`;

class DiscardPiles extends React.Component {
  render() {
    return this.props.piles.map((pile, i) => {
      const renderDiscardedCards = () => {
        if (pile.cards.length > 0) {
          const topCard = pile.cards[0];
          return (
            <Card
              key={i}
              color={topCard.color}
              value={topCard.type !== "bet" ? topCard.value : "B"}
            />
          );
        }
      };
      return (
        <DiscardPile key={i}>
          {pile.color}
          {renderDiscardedCards()}
        </DiscardPile>
      );
    });
  }
}

export default DiscardPiles;

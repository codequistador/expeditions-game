import React from "react";
import Card from "./card";
import styled from "styled-components";

const DiscardWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const DiscardPile = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 132px;
  height: 182px;
  display: inline-flex;
  margin: 8px;
  position: relative;
  padding: 40px 8px 0 8px;
`;

const Value = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  background-color: white;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 0 4px;
`;

class DiscardPiles extends React.Component {
  render() {
    return <DiscardWrapper>{renderDiscardedCards(this.props)}</DiscardWrapper>;
  }
}

const renderDiscardedCards = (props) =>
  props.piles.map((pile, i) => {
    const cards = () => {
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
      <DiscardPile key={i} color={pile.color}>
        <Value>{pile.color}</Value>
        {cards()}
      </DiscardPile>
    );
  });

export default DiscardPiles;

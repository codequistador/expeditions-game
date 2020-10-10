import React from "react";
import Card from "./card";
import { renderIcon } from "./render-icon";
import styled from "styled-components";

const DiscardWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const DiscardPile = styled.div`
  box-style: border-box;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  width: 100px;
  height: 160px;
  display: inline-flex;
  margin: 0 8px;
  position: relative;
  padding: 40px 8px 0 8px;
`;

const Value = styled.div`
  border-radius: 2px;
  background-color: white;
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 0 4px;
`;

const Icon = styled.div`
  color: black;
  position: absolute;
  top: 8px;
  right: 14px;
`;

class DiscardPiles extends React.Component {
  render() {
    return <DiscardWrapper>{renderDiscardedCards(this.props)}</DiscardWrapper>;
  }
}

const renderDiscardedCards = (props) =>
  props.piles.map((pile, i) => {
    const renderTopCard = () => {
      if (pile.cards.length > 0) {
        const topCard = pile.cards[0];
        return (
          <Card
            key={i}
            id={topCard.id}
            color={topCard.color}
            location="discard"
            value={topCard.type !== "bet" ? topCard.value : "B"}
            handleDraw={() => props.handleDraw(i, topCard)}
            discardedCardID={props.discardedCardID}
          />
        );
      }
    };
    return (
      <DiscardPile key={i} color={pile.color}>
        <Value>{pile.color}</Value>
        <Icon>{renderIcon(pile.color)}</Icon>
        {renderTopCard()}
      </DiscardPile>
    );
  });

export default DiscardPiles;

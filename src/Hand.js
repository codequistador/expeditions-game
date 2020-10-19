import React from "react";
import styled from "styled-components";
import Card from "./card";
import Deck from "./deck";

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class Hand extends React.Component {
  render() {
    const {
      cards,
      cardsInDeck,
      isCurrentPlayer,
      isDrawStage,
      moves,
    } = this.props;
    return (
      <Wrapper>
        <CardsWrapper>
          {renderCards(cards, isCurrentPlayer, isDrawStage, moves)}
        </CardsWrapper>
        <Deck
          cardsInDeck={cardsInDeck}
          handleDraw={() => moves.drawFromDeck()}
          isDrawStage={isDrawStage}
        />
      </Wrapper>
    );
  }
}

const renderCards = (cards, isCurrentPlayer, isDrawStage, moves) => {
  const sortedCards = cards.sort((a, b) => {
    return a.id - b.id;
  });
  return sortedCards.map((card, i) => {
    return (
      <Card
        key={i}
        id={card.id}
        color={card.color}
        location="hand"
        value={card.type !== "bet" ? card.value : "Bet"}
        handlePlay={() => moves.playCard(i, card)}
        handleDiscard={() => moves.discard(i, card)}
        isCurrentPlayer={isCurrentPlayer}
        isDrawStage={isDrawStage}
      />
    );
  });
};

export default Hand;

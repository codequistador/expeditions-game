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
  renderCards = () => {
    const cards = this.props.cards.sort((a, b) => {
      return a.id - b.id;
    });
    return cards.map((card, i) => {
      return (
        <Card
          key={i}
          id={card.id}
          color={card.color}
          location="hand"
          value={card.type !== "bet" ? card.value : "Bet"}
          handlePlay={() => this.props.moves.playCard(i, card)}
          handleDiscard={() => this.props.moves.discard(i, card)}
        />
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <CardsWrapper>{this.renderCards()}</CardsWrapper>
        <Deck
          cardsInDeck={this.props.cardsInDeck}
          handleDraw={() => this.props.handleDrawFromDeck()}
        />
      </Wrapper>
    );
  }
}

export default Hand;

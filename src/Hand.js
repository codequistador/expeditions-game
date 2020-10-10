import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
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
          value={card.type !== "bet" ? card.value : "B"}
          handlePlay={() => this.props.moves.playCard(i, card)}
          handleDiscard={() => this.props.moves.discard(i, card)}
        />
      );
    });
  };

  render() {
    return <Wrapper>{this.renderCards()}</Wrapper>;
  }
}

export default Hand;

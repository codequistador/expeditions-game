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
          color={card.color}
          location="hand"
          value={card.type !== "bet" ? card.value : "B"}
          moves={this.props.moves}
        />
      );
    });
  };

  render() {
    return <Wrapper>{this.renderCards()}</Wrapper>;
  }
}

export default Hand;

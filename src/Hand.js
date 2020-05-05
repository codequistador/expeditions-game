import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class Hand extends React.Component {
  renderCards = () => {
    return this.props.cards.map((card, i) => {
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

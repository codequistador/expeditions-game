import React from "react";
import { Wrapper } from "./styles";
import { Button } from "../shared-styles";

class Deck extends React.Component {
  render() {
    const {
      cardsInDeck,
      handleDraw,
      isCurrentPlayer,
      isDrawStage,
    } = this.props;
    return (
      <Wrapper cardsInDeck={cardsInDeck}>
        {cardsInDeck} Cards remaining
        {isDrawStage && isCurrentPlayer && (
          <Button onClick={handleDraw}>Draw From Deck</Button>
        )}
      </Wrapper>
    );
  }
}

export default Deck;

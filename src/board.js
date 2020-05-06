import React from "react";
import Hand from "./hand";
import DiscardPiles from "./discard-piles";
import styled from "styled-components";

const HandWrapper = styled.div`
  background-color: pink;
`;

const Deck = styled.div`
  background-color: purple;
  color: white;
`;

class LostSummitsBoard extends React.Component {
  render() {
    const players = this.props.G.players;
    const cardsInDeck = this.props.G.cardsInDeck;
    const discardPiles = this.props.G.discard;

    return (
      <div>
        <DiscardPiles piles={discardPiles} />
        <HandWrapper>
          {Object.keys(players).map((playerIndex) => (
            <div key={playerIndex}>
              Player {playerIndex}
              <Hand cards={players[playerIndex].hand} />
            </div>
          ))}
        </HandWrapper>
        <Deck>{cardsInDeck} Cards Remaining</Deck>
      </div>
    );
  }
}

export default LostSummitsBoard;

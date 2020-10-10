import React from "react";
import Hand from "./hand";
import DiscardPiles from "./discard-piles";
import Expeditions from "./expeditions";
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
    const playerId = this.props.playerID;
    const opponentId = playerId === "1" ? "0" : "1";
    const cardsInDeck = this.props.G.deck.length;
    const discardPiles = this.props.G.discard;
    const expeditions = this.props.G.expeditions;

    return (
      <div>
        <Expeditions
          player={opponentId}
          expeditions={expeditions[opponentId]}
          isOpponent
        />
        <DiscardPiles
          piles={discardPiles}
          handleDraw={this.props.moves.drawFromDiscard}
        />
        <button onClick={() => this.props.moves.drawFromDeck()}>
          Draw from deck
        </button>
        <Expeditions player={playerId} expeditions={expeditions[playerId]} />
        <HandWrapper>
          {Object.keys(players).map((playerIndex) => (
            <div key={playerIndex}>
              Player {playerIndex}
              <Hand
                cards={players[playerIndex].hand}
                moves={this.props.moves}
              />
            </div>
          ))}
        </HandWrapper>
        <Deck>{cardsInDeck} Cards Remaining</Deck>
      </div>
    );
  }
}

export default LostSummitsBoard;

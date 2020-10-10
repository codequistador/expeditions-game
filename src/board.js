import React from "react";
import Hand from "./hand";
import DiscardPiles from "./discard-piles";
import Expeditions from "./expeditions";
import styled from "styled-components";

const HandWrapper = styled.div`
  margin-bottom: 20px;
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
    const discardedCardID =
      this.props.G.discardedCard.length > 0
        ? this.props.G.discardedCard[0].id
        : null;
    const lastMove = this.props.G.lastMove
      ? this.props.G.lastMove
      : "No moves yet";
    const isMyTurn =
      playerId === this.props.ctx.currentPlayer ? "It's your turn!" : "";

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
          discardedCardID={discardedCardID}
        />
        <Expeditions player={playerId} expeditions={expeditions[playerId]} />
        <HandWrapper>
          {Object.keys(players).map((playerIndex) => (
            <div key={playerIndex}>
              Player {playerIndex}
              <Hand
                cards={players[playerIndex].hand}
                cardsInDeck={cardsInDeck}
                handleDrawFromDeck={this.props.moves.drawFromDeck}
                moves={this.props.moves}
              />
            </div>
          ))}
        </HandWrapper>
        <Deck>
          {cardsInDeck} Cards Remaining. Last Move: {lastMove}. {isMyTurn}
        </Deck>
      </div>
    );
  }
}

export default LostSummitsBoard;

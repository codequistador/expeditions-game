import React from "react";
import Hand from "./hand";
import DiscardPiles from "./discard-piles";
import Hikes from "./hikes";
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
    const cardsInDeck = this.props.G.cardsInDeck;
    const discardPiles = this.props.G.discard;
    const hikes = this.props.G.hikes;

    return (
      <div>
        <Hikes player={opponentId} hikes={hikes[opponentId]} />
        <DiscardPiles piles={discardPiles} />
        <Hikes player={playerId} hikes={hikes[playerId]} />
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

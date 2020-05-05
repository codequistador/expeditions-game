import React from "react";
import Hand from "./hand";

class LostSummitsBoard extends React.Component {
  render() {
    const players = this.props.G.players;
    const cardsInDeck = this.props.G.cardsInDeck;

    return (
      <div>
        {Object.keys(players).map((playerIndex) => (
          <div key={playerIndex}>
            Player {playerIndex}
            <Hand cards={players[playerIndex].hand} />
          </div>
        ))}
        <div>{cardsInDeck} Cards Remaining</div>
      </div>
    );
  }
}

export default LostSummitsBoard;

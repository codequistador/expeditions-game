import React from 'react'
import Hand from '../hand'
import DiscardPiles from '../discard-piles'
import Expeditions from '../expeditions'
import { HandWrapper, Deck } from './styles.js'

class LostSummitsBoard extends React.Component {
  render() {
    const { G, ctx, moves, playerID } = this.props
    const players = G.players
    const opponentId = playerID === '1' ? '0' : '1'
    const cardsInDeck = G.deck.length
    const discardPiles = G.discard
    const expeditions = G.expeditions
    const discardedCardID =
      G.discardedCard.length > 0 ? G.discardedCard[0].id : null
    const lastMove = G.lastMove ? G.lastMove : 'No moves yet'
    const isCurrentPlayer = playerID === ctx.currentPlayer
    const isDrawStage = ctx.activePlayers != null
    const isGameOver = ctx.gameover ? true : false

    return (
      <div>
        <Expeditions
          player={opponentId}
          expeditions={expeditions[opponentId]}
          isOpponent
        />
        <DiscardPiles
          piles={discardPiles}
          handleDraw={moves.drawFromDiscard}
          discardedCardID={discardedCardID}
          isDrawStage={isDrawStage}
          isCurrentPlayer={isCurrentPlayer}
        />
        <Expeditions player={playerID} expeditions={expeditions[playerID]} />
        <HandWrapper>
          {Object.keys(players).map((playerIndex) => (
            <div key={playerIndex}>
              Player {playerIndex}
              <Hand
                cards={players[playerIndex].hand}
                cardsInDeck={cardsInDeck}
                moves={moves}
                isDrawStage={isDrawStage}
                isCurrentPlayer={isCurrentPlayer}
                isGameOver={isGameOver}
              />
            </div>
          ))}
        </HandWrapper>
        <Deck>
          {cardsInDeck} Cards Remaining. Last Move: {lastMove}.
          {isCurrentPlayer && " It's your turn!"}
        </Deck>
      </div>
    )
  }
}

export default LostSummitsBoard

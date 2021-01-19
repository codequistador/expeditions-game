import React from 'react'
import Hand from '../hand'
import Deck from '../deck'
import DiscardPiles from '../discard-piles'
import Expeditions from '../expeditions'
import Sidebar from '../sidebar'
import {
  BoardWrapper,
  ExpeditionsWrapper,
  GameWrapper,
  HandWrapper,
} from './styles.js'

class LostSummitsBoard extends React.Component {
  render() {
    const { G, ctx, moves, playerID } = this.props
    const players = G.players
    const myName = this.props.players[playerID].name
    const opponentId = playerID === '1' ? '0' : '1'
    const opponentName = this.props.players[opponentId].name
    const cardsInDeck = G.deck.length
    const discardPiles = G.discard
    const expeditions = G.expeditions
    const discardedCardID =
      G.info.discardedCard.length > 0 ? G.info.discardedCard[0].id : null
    const lastMove = G.info.lastMove ? G.info.lastMove : 'No moves yet'
    const isCurrentPlayer = playerID === ctx.currentPlayer
    const isDrawStage = ctx.activePlayers != null
    const isGameOver = ctx.gameover ? true : false

    return (
      <GameWrapper>
        <Sidebar
          playerId={playerID}
          myName={myName}
          opponentName={opponentName}
          lastMove={lastMove}
          isCurrentPlayer={isCurrentPlayer}
          error={G.info.error}
          gameover={ctx.gameover}
        />
        <BoardWrapper>
          <ExpeditionsWrapper>
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
            <Expeditions
              player={playerID}
              expeditions={expeditions[playerID]}
            />
          </ExpeditionsWrapper>
          <HandWrapper>
            {Object.keys(players).map((playerIndex) => (
              <div key={playerIndex}>
                <Hand
                  cards={players[playerIndex].hand}
                  myName={myName}
                  cardsInDeck={cardsInDeck}
                  moves={moves}
                  isDrawStage={isDrawStage}
                  isCurrentPlayer={isCurrentPlayer}
                  isGameOver={isGameOver}
                />
              </div>
            ))}
            <Deck
              cardsInDeck={cardsInDeck}
              handleDraw={() => moves.drawFromDeck()}
              isCurrentPlayer={isCurrentPlayer}
              isDrawStage={isDrawStage}
            />
          </HandWrapper>
        </BoardWrapper>
      </GameWrapper>
    )
  }
}

export default LostSummitsBoard

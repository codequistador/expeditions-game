import React from 'react'
import queryString from 'query-string'
import Hand from '../hand'
import Deck from '../deck'
import DiscardPiles from '../discard-piles'
import Expeditions from '../expeditions'
import {
  BoardWrapper,
  ExpeditionsWrapper,
  GameWrapper,
  HandWrapper,
  Sidebar,
} from './styles.js'

class LostSummitsBoard extends React.Component {
  state = {
    inviteLinkShow: false,
    inviteLinkCopied: false,
  }

  componentDidMount() {
    const qs = queryString.parse(window.location.search)
    if (qs.inviteLink === '1') {
      this.setState({ inviteLinkShow: true })
      let url = window.location.toString()
      let clean_url = url.substring(0, url.indexOf('?'))
      window.history.replaceState({}, document.title, clean_url)
    }
  }

  render() {
    const { G, ctx, moves, playerID } = this.props
    const players = G.players
    const opponentId = playerID === '1' ? '0' : '1'
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
        <Sidebar>
          Player {playerID}
          <br />
          Last Move: {lastMove}.{isCurrentPlayer && " It's your turn!"}
          <br />
          {isCurrentPlayer && G.info.error}
        </Sidebar>
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

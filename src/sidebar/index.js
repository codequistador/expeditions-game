import React from 'react'
import Rules from '../rules'
import { Button, Toast } from '../shared-styles'
import { SidebarWrapper, ScoresWrapper, RulesButtonWrapper } from './styles'

class Sidebar extends React.Component {
  getExpeditionScores(scores) {
    const colors = ['blue', 'red', 'yellow', 'white', 'green']
    let scoreArray = []
    colors.map((color) => {
      scoreArray.push(color.charAt(0).toUpperCase() + color.slice(1))
      for (let i = 0; i <= 1; i++) {
        scoreArray.push(scores[i][color])
      }
      return scoreArray
    })

    return scoreArray
  }

  render() {
    const {
      isCurrentPlayer,
      playerId,
      players,
      lastMove,
      error,
      gameover,
    } = this.props
    const opponentId = playerId === '1' ? '0' : '1'

    return (
      <SidebarWrapper>
        <h2>Player Info</h2>
        <h4>Your Name: {players[playerId].name}</h4>
        <h4>Opponent's Name: {players[opponentId].name}</h4>
        <h2>Game {gameover ? 'Over!' : 'Info'}</h2>
        {!gameover && (
          <>
            <h4>
              {isCurrentPlayer
                ? "It's your turn!"
                : `It's ${players[opponentId].name}'s turn.`}
            </h4>
            <h4>Last Move: {lastMove}.</h4>
          </>
        )}
        {gameover && (
          <>
            <h3>
              {gameover.winner.toString() === playerId
                ? 'You Win!'
                : 'You Lost. Sorry bud.'}
            </h3>
            <h3>Scores</h3>
            <ScoresWrapper>
              <div></div>
              <h4>{players[0].name}</h4>
              <h4>{players[1].name}</h4>
              {this.getExpeditionScores(gameover.expeditionScores).map(
                (value, index) => {
                  return <div key={index}>{value}</div>
                }
              )}
              <h4>Totals</h4>
              <h4>{gameover.totalScores[0]}</h4>
              <h4>{gameover.totalScores[1]}</h4>
            </ScoresWrapper>
            <br />
            <Button onClick={() => (window.location = '/')} size="large">
              Play Again
            </Button>
          </>
        )}
        <RulesButtonWrapper>
          <Rules />
        </RulesButtonWrapper>
        {isCurrentPlayer && error && <Toast variant="alert">{error}</Toast>}
      </SidebarWrapper>
    )
  }
}

export default Sidebar

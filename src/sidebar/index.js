import React from 'react'
import Rules from '../rules'
import { Toast } from '../shared-styles'
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
      myName,
      opponentName,
      lastMove,
      error,
      gameover,
    } = this.props

    return (
      <SidebarWrapper>
        <h2>Player Info</h2>
        <h4>Your Name: {myName}</h4>
        <h4>Opponent's Name: {opponentName}</h4>
        <h2>Game {gameover ? 'Over!' : 'Info'}</h2>
        {!gameover && (
          <>
            <h4>
              {isCurrentPlayer
                ? "It's your turn!"
                : `It's ${opponentName}'s turn.`}
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
              <h4>{myName}</h4>
              <h4>{opponentName}</h4>
              {this.getExpeditionScores(gameover.expeditionScores).map(
                (value, index) => {
                  return <div key={index}>{value}</div>
                }
              )}
              <h4>Totals</h4>
              <h4>{gameover.totalScores[0]}</h4>
              <h4>{gameover.totalScores[1]}</h4>
            </ScoresWrapper>
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

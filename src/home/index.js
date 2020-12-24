import React from 'react'
import shortid from 'shortid'

class Homepage extends React.Component {
  state = {
    playAs: '0',
    gameID: shortid.generate(),
  }

  startGame() {
    let gameURL = `/play/${this.state.gameID}/${this.state.playAs}`
    window.location.href = gameURL + '?inviteLink=1'
  }

  render() {
    return (
      <div>
        <button onClick={() => this.startGame()}>Create Game</button>
      </div>
    )
  }
}

export default Homepage

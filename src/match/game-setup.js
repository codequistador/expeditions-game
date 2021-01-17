import React from 'react'
import { APP_PRODUCTION, WEB_SERVER_URL } from '../config.js'
import Player from './player'

const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : WEB_SERVER_URL

const players = [0, 1]

class GameSetupView extends React.Component {
  state = {
    copied: false,
  }

  copyToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand('copy')
    this.setState({ copied: true })
    setTimeout(
      function () {
        this.setState({ copied: false })
      }.bind(this),
      2000
    )
  }

  getPlayerStatusDOM = (player, i) => {
    const { myID, joined, onPlayerReady, onUpdateName, savedName } = this.props
    const opponentID = myID === '0' ? '1' : '0'
    if (player) {
      if (player.id === parseInt(myID)) {
        return (
          <Player
            key={player.id}
            id={player.id}
            onPlayerReady={onPlayerReady}
            onUpdateName={onUpdateName}
            name={player.name}
            ready={joined[myID].data && joined[myID].data.ready}
            savedName={savedName}
            isMe
          />
        )
      } else {
        return (
          <Player
            key={player.id}
            id={player.id}
            onPlayerReady={onPlayerReady}
            onUpdateName={onUpdateName}
            ready={joined[opponentID].data && joined[opponentID].data.ready}
            savedName={savedName}
            name={player.name}
          />
        )
      }
    } else {
      return <div key={i}>Waiting for player</div>
    }
  }

  render() {
    return (
      <>
        <textarea
          value={`${server}/match/${this.props.matchID}`}
          ref={(textarea) => (this.textArea = textarea)}
          readOnly
        />
        <button onClick={() => this.copyToClipboard()}>
          {this.state.copied ? 'Copied!' : 'Copy'}
        </button>
        <div>
          <h3>Players</h3>
          {players.map((player, i) => {
            const joinedPlayer = this.props.joined[player]
            return this.getPlayerStatusDOM(joinedPlayer, i)
          })}
        </div>
      </>
    )
  }
}

export default GameSetupView

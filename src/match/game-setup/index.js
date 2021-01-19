import React from 'react'
import { APP_PRODUCTION, WEB_SERVER_URL } from '../../config.js'
import { Button, FlexWrapper } from '../../shared-styles'
import Player from '../player'
import Rules from '../../rules'
import {
  Dot,
  MatchURLWrapper,
  SetupWrapper,
  PlayersWrapper,
  Waiting,
} from './styles'

const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : WEB_SERVER_URL

const players = [0, 1]

class GameSetupView extends React.Component {
  state = {
    copied: false,
  }

  copyToClipboard = () => {
    const el = this.input
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
    const { myID, joined, onPlayerReady, onUpdateName } = this.props
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
            name={player.name}
          />
        )
      }
    } else {
      return (
        <Waiting key={i}>
          Waiting for Opponent to Join
          <Dot>.</Dot>
          <Dot>.</Dot>
          <Dot>.</Dot>
        </Waiting>
      )
    }
  }

  render() {
    return (
      <SetupWrapper>
        <MatchURLWrapper>
          <FlexWrapper align="center" justify="center">
            <input
              value={`${server}/match/${this.props.matchID}`}
              ref={(input) => (this.input = input)}
              tabIndex={-1}
              readOnly
            />
            <Button onClick={() => this.copyToClipboard()} size="large">
              {this.state.copied ? 'Copied!' : 'Copy'}
            </Button>
          </FlexWrapper>
          <h2>Share this link to invite a friend.</h2>
        </MatchURLWrapper>
        <PlayersWrapper>
          <h1>Players</h1>
          <p>The game will start once both players are ready!</p>
          {players.map((player, i) => {
            const joinedPlayer = this.props.joined[player]
            return this.getPlayerStatusDOM(joinedPlayer, i)
          })}
        </PlayersWrapper>
        <Rules />
      </SetupWrapper>
    )
  }
}

export default GameSetupView

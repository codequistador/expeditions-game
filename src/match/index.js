import React from 'react'
import { Link } from 'react-router-dom'
import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'
import { APP_PRODUCTION, GAME_SERVER_URL, WEB_SERVER_URL } from '../config.js'
import LostSummits from '../game'
import LostSummitsBoard from '../board'
import { LobbyAPI } from '../api'

const api = new LobbyAPI()
const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL
const LostSummitsClient = Client({
  debug: false,
  game: LostSummits,
  board: LostSummitsBoard,
  multiplayer: SocketIO({ server: server }),
})

class Match extends React.Component {
  constructor(props) {
    super(props)
    this.joinMatch(props.id)
    this.state = {
      matchID: props.id,
      joined: [],
      myID: null,
      myName: null,
      myAuthToken: null,
      copied: false,
    }
  }

  async joinMatch(matchID) {
    let myID
    let myAuthToken

    // look in local storage for player info
    console.log('looking in local storage')
    myID = localStorage.getItem(`playerID for matchID=${matchID}`)
    myAuthToken = localStorage.getItem(
      `playerCredentials for matchID=${matchID}`
    )

    if (myID !== null && myAuthToken !== null) {
      console.log('local storage found')
      this.setState({
        myID: myID,
        myAuthToken: myAuthToken,
      })
      return
    }
    console.log('no local storage found. moving on.')

    myID = '0'
  }

  joinRoom = (playerID) => {
    const { matchID } = this.state
    const shownID = playerID + 1
    const username = `Player ${shownID} The Great`
    if (matchID) {
      api.joinRoom(matchID, username, playerID.toString()).then(
        (authToken) => {
          console.log(
            `Joined room as player ${playerID} with username ${username}`
          )
          this.setState({
            myID: playerID,
            myName: username,
            userAuthToken: authToken,
          })
        },
        (err) => console.log(err)
      )
    }
  }

  getRoomStatusAndJoin = () => {
    const { matchID } = this.state
    if (matchID) {
      api.whoIsInRoom(matchID).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name)
          this.setState({ joined: joinedPlayers })
          const myPlayerID = joinedPlayers.length
          this.joinRoom(myPlayerID)
        },
        (err) => {
          console.log(`The room does not exist: ${err}`)
          this.setState({ matchID: null })
        }
      )
    }
  }

  getRoomStatus = () => {
    const { matchID } = this.state
    if (matchID) {
      api.whoIsInRoom(matchID).then(
        (players) => {
          console.log(`Looking for second player...`)
          const joinedPlayers = players.filter((p) => p.name)
          this.setState({ joined: joinedPlayers })
        },
        (err) => {
          console.log(`The room does not exist: ${err}`)
          this.setState({ matchID: null })
        }
      )
    }
  }

  getPlayerStatusDOM = (player, i) => {
    if (player) {
      if (player.id === this.state.myID) {
        return <div key={player.id}>{player.name} - You</div>
      } else {
        return <div key={player.id}>{player.name}</div>
      }
    } else {
      return <div key={i}>Waiting for player</div>
    }
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

  gameFoundView = () => {
    const { copied, matchID, joined } = this.state
    const players = [0, 1]
    const server = APP_PRODUCTION
      ? `https://${window.location.hostname}`
      : WEB_SERVER_URL

    return (
      <>
        <textarea
          value={`${server}/lobby/${matchID}`}
          ref={(textarea) => (this.textArea = textarea)}
          readOnly
        />
        <button onClick={() => this.copyToClipboard()}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <div>
          {players.map((player, i) => {
            const joinedPlayer = joined[player]
            return this.getPlayerStatusDOM(joinedPlayer, i)
          })}
        </div>
      </>
    )
  }

  gameNotFoundView = () => {
    return (
      <>
        <div>
          Sorry! This game does not exist.
          <br />
          <Link to="/">Create a new one</Link>
        </div>
      </>
    )
  }

  gameView = () => {
    const { matchID, joined, myID, userAuthToken } = this.state
    return (
      <LostSummitsClient
        matchID={matchID}
        players={joined}
        playerID={String(myID)}
        credentials={userAuthToken}
      ></LostSummitsClient>
    )
  }

  render() {
    if (this.state.joined.length === 2) {
      return this.gameView()
    }
    return (
      <div>
        {this.state.matchID ? this.gameFoundView() : this.gameNotFoundView()}
      </div>
    )
  }
}

export default Match

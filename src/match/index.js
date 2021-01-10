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
  state = {
    matchID: this.props.id,
    joined: [],
    myID: null,
    myName: null,
    myAuthToken: null,
    copied: false,
  }

  componentDidMount() {
    this.joinMatch(this.props.id)
    this.interval = setInterval(this.getRoomStatus, 1000)
  }

  async joinMatch(matchID) {
    const history = this.props.history
    // Get the game to know how many players have joined already.
    let players
    try {
      players = await api.whoIsInRoom(matchID)
    } catch (e) {
      alert(
        'Something went wrong. Make sure you have the right URL and try again.'
      )
      history.push(`${server}/`)
      return
    }

    let myID
    let myName
    let myAuthToken

    // look in local storage for player info
    console.log('looking in local storage')
    myID = localStorage.getItem(`playerID for matchID=${matchID}`)
    myAuthToken = localStorage.getItem(
      `playerCredentials for matchID=${matchID}`
    )

    if (myID !== null && myAuthToken !== null) {
      console.log('local storage found')
      const joinedPlayers = players.filter((p) => p.name)
      this.setState({
        myID: myID,
        myAuthToken: myAuthToken,
        joined: joinedPlayers,
      })
      return
    }

    console.log('no local storage found. moving on.')
    myID = '0'
    const seatIsOpen = players.some((player, i) => {
      myID = i.toString()
      return !player.hasOwnProperty('name')
    })

    myName = `Player ${parseInt(myID) + 1}`

    if (!seatIsOpen) {
      alert('This game is full!')
      return
    }

    // Let's actually join the match
    api.joinRoom(matchID, myName, myID).then(
      (authToken) => {
        console.log(`Joined room as player ${myID} with username ${myName}`)
        this.setState({
          myID: myID,
          myName: myName,
          myAuthToken: authToken,
        })
        localStorage.setItem(`playerID for matchID=${matchID}`, myID)
        localStorage.setItem(
          `playerCredentials for matchID=${matchID}`,
          authToken
        )
        this.getRoomStatus()
      },
      (err) => console.log(err)
    )
  }

  getRoomStatus = () => {
    const { matchID } = this.state
    if (matchID) {
      api.whoIsInRoom(matchID).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name)
          this.setState({ joined: joinedPlayers })
          console.log(`checking room status: ${joinedPlayers.length} players`)
          if (joinedPlayers.length === 2) {
            clearInterval(this.interval)
          }
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
      if (player.id === parseInt(this.state.myID)) {
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
          value={`${server}/match/${matchID}`}
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
    const { matchID, joined, myID, myAuthToken } = this.state
    return (
      <LostSummitsClient
        matchID={matchID}
        players={joined}
        playerID={String(myID)}
        credentials={myAuthToken}
      ></LostSummitsClient>
    )
  }

  render() {
    // This will be replaced with something like "if both players are ready"
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

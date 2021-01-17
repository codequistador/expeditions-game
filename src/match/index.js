import React from 'react'
import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'
import { APP_PRODUCTION, GAME_SERVER_URL } from '../config.js'
import GameSetupView from './game-setup'
import GameNotFoundView from './not-found'
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
    iAmReady: false,
  }

  componentDidMount() {
    this.joinMatch(this.props.id)
    this.interval = setInterval(this.getRoomStatus, 1000)
  }

  async joinMatch(matchID) {
    const history = this.props.history

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
    myName = localStorage.getItem(`playerName`)
    myID = localStorage.getItem(`playerID for matchID=${matchID}`)
    myAuthToken = localStorage.getItem(
      `playerCredentials for matchID=${matchID}`
    )

    // if we find items already set in local storage, we update state and move on.
    // This is likely only going to happen if the page is reloaded.
    if (myID && myAuthToken && myName) {
      console.log('local storage found')
      const joinedPlayers = players.filter((p) => p.name)
      this.setState({
        myName: myName,
        myID: myID,
        myAuthToken: myAuthToken,
        joined: joinedPlayers,
      })
      return
    }

    console.log('No local storage found. Setting up player.')
    myID = '0'
    const seatIsOpen = players.some((player, i) => {
      myID = i.toString()
      return !player.hasOwnProperty('name')
    })

    if (!myName) {
      myName = `Player ${parseInt(myID) + 1}`
    }

    if (!seatIsOpen) {
      alert('This game is full!')
      return
    }

    // Add the player to the match
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
        this.updatePlayerInfo(myName, false)
      },
      (err) => console.log(err)
    )
  }

  updatePlayerInfo = (newName, ready) => {
    api.updatePlayer(
      this.state.matchID,
      this.state.myID,
      this.state.myAuthToken,
      newName,
      { ready: ready }
    )

    localStorage.setItem('playerName', newName)
    this.getRoomStatus()
  }

  getRoomStatus = () => {
    const { matchID } = this.state
    if (matchID) {
      api.whoIsInRoom(matchID).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name)
          this.setState({ joined: joinedPlayers })
          console.log('Checking room status')
        },
        (err) => {
          console.log(`The room does not exist: ${err}`)
          this.setState({ matchID: null })
        }
      )
    }
  }

  handlePlayerReady = (event) => {
    this.updatePlayerInfo(this.state.myName, event.target.checked)
    this.setState({ iAmReady: event.target.checked })
  }

  handleUpdateName = (event) => {
    const newName = event.target.elements[0].value
    this.updatePlayerInfo(newName, this.state.iAmReady)
    this.setState({ myName: newName })
    this.getRoomStatus()
    event.preventDefault()
  }

  render() {
    const { joined, myID, myName, myAuthToken, matchID } = this.state
    let readyPlayers = 0
    joined.forEach((player) => {
      player.data && player.data.ready && readyPlayers++
    })
    if (readyPlayers === 2) {
      clearInterval(this.interval)
      return (
        <LostSummitsClient
          matchID={matchID}
          players={joined}
          playerID={String(myID)}
          credentials={myAuthToken}
        />
      )
    }

    return (
      <div>
        {this.state.matchID ? (
          <GameSetupView
            myName={myName}
            myID={myID}
            joined={joined}
            matchID={matchID}
            onPlayerReady={this.handlePlayerReady}
            onUpdateName={this.handleUpdateName}
          />
        ) : (
          <GameNotFoundView />
        )}
      </div>
    )
  }
}

export default Match

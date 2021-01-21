import React from 'react'
import { LobbyAPI } from '../api'
import { Button } from '../shared-styles'
import Rules from '../rules'
import { HomeWrapper, GameTitle, GamesWrapper, Game } from './styles'

const api = new LobbyAPI()

class Homepage extends React.Component {
  state = {
    games: [],
  }

  componentDidMount() {
    this.getGames()
    this.interval = setInterval(this.getGames, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getGames = () => {
    api.listGames().then(
      (matches) => {
        this.setState({ games: matches })
      },
      (err) => {
        console.log(err)
      }
    )
  }

  joinGame = (roomID) => {
    const history = this.props.history
    history.push(`/match/${roomID}`)
  }

  createGame = () => {
    console.log('createGame')
    api.createRoom(2).then(
      (roomID) => {
        const history = this.props.history
        console.log(`Created room with roomID = ${roomID}`)
        history.push(`/match/${roomID}`)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  renderAvailableGames = (games) => {
    return (
      <div>
        <div className="grid">
          <h3>Game</h3>
          <h3>Joined</h3>
        </div>
        {games.map((game, i) => (
          <Game key={i}>
            <p>Expeditions</p>
            <p>{game.players[0].name}</p>
            <p>
              <Button onClick={() => this.joinGame(game.matchID)}>
                Join Game
              </Button>
            </p>
          </Game>
        ))}
      </div>
    )
  }

  render() {
    const { games } = this.state
    const availableGames = games.filter(
      (game) =>
        !game.gameover &&
        game.players.filter((player) => player.name).length !== 2
    )

    return (
      <HomeWrapper>
        <GameTitle>Expeditions Game</GameTitle>
        <GamesWrapper>
          <h2>Available Games</h2>
          {availableGames.length > 0 ? (
            this.renderAvailableGames(availableGames)
          ) : (
            <h3>There are no games available. Create one below!</h3>
          )}
        </GamesWrapper>
        <Button size="large" onClick={() => this.createGame()}>
          Create New Game
        </Button>
        <Rules />
      </HomeWrapper>
    )
  }
}

export default Homepage

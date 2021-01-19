import React from 'react'
import { LobbyAPI } from '../api'
import { Button } from '../shared-styles'
import Rules from '../rules'
import { HomeWrapper, GameTitle } from './styles'

const api = new LobbyAPI()

class Homepage extends React.Component {
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

  render() {
    return (
      <HomeWrapper>
        <GameTitle>Expeditions Game</GameTitle>
        <Button size="large" onClick={() => this.createGame()}>
          Create Game
        </Button>
        <Rules />
      </HomeWrapper>
    )
  }
}

export default Homepage

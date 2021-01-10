import React from 'react'
import { LobbyAPI } from '../api'

const api = new LobbyAPI()

class Homepage extends React.Component {
  createGame = () => {
    console.log('createGame')
    api.createRoom(2).then(
      (roomID) => {
        const history = this.props.history
        console.log('Created room with roomID = ', roomID)
        history.push('/lobby/' + roomID)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={() => this.createGame()}>Create Game</button>
      </div>
    )
  }
}

export default Homepage

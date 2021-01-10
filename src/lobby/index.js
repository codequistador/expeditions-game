import React from 'react'
import { LobbyAPI } from '../api'

const api = new LobbyAPI()

class Lobby extends React.Component {
  state = {}
  constructor(props) {
    super(props)
    this.state.matchID = props.match.params.id
  }

  render() {
    api.whoIsInRoom(this.state.matchID).then(
      (players) => console.log(players),
      (err) => console.log(err)
    )

    return <div>hi lobby</div>
  }
}

export default Lobby

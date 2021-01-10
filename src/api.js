import { LobbyClient } from 'boardgame.io/client'
import { APP_PRODUCTION, GAME_SERVER_URL, GAME_NAME } from './config.js'

const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL

export class LobbyAPI {
  constructor() {
    this.api = new LobbyClient({ server: server })
  }

  async createRoom(numPlayers) {
    const { matchID } = await this.api.createMatch(GAME_NAME, {
      numPlayers: numPlayers,
    })
    return matchID
  }

  async joinRoom(roomID, username, userid) {
    const { playerCredentials } = await this.api.joinMatch(GAME_NAME, roomID, {
      playerID: userid,
      playerName: username,
    })
    return playerCredentials
  }

  async leaveRoom(roomID, userid, playerCredentials) {
    await this.api.leaveMatch(GAME_NAME, roomID, {
      playerID: userid,
      credentials: playerCredentials,
    })
  }

  async updateName(roomID, userid, playerCredentials, newName) {
    await this.api.updatePlayer(GAME_NAME, roomID, {
      playerID: userid,
      credentials: playerCredentials,
      newName: newName,
    })
  }

  async playAgain(roomID, userid, playerCredentials) {
    const { nextMatchID } = await this.api.playAgain(GAME_NAME, roomID, {
      playerID: userid,
      credentials: playerCredentials,
    })
    return nextMatchID
  }

  async whoIsInRoom(roomID) {
    const { players } = await this.api.getMatch(GAME_NAME, roomID)
    return players
  }
}
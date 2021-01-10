import { Server } from 'boardgame.io/server'
import LostSummits from './game'
import { GAME_SERVER_PORT } from './config'

const server = Server({ games: [LostSummits] })

server.run(GAME_SERVER_PORT)

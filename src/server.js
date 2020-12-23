import { Server } from 'boardgame.io/server'
import LostSummits from './game'

const server = Server({ games: [LostSummits] })

server.run(8000)

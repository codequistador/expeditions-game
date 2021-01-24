import { Server } from 'boardgame.io/server'
import * as admin from 'firebase-admin'
import { Firestore } from 'bgio-firebase'
import path from 'path'
import serve from 'koa-static'
import LostSummits from './game'

const database = new Firestore({
  config: {
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://expeditions-game-default-rtdb.firebaseio.com/',
  },
})

const server = Server({ games: [LostSummits], db: database })
const PORT = process.env.PORT || 8000

const frontEndAppBuildPath = path.resolve(__dirname, '../build')
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) =>
      await serve(frontEndAppBuildPath)(
        Object.assign(ctx, { path: 'index.html' }),
        next
      )
  )
})

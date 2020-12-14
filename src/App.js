import React from 'react'
import LostSummits from './game'
import LostSummitsBoard from './board'
import { Client } from 'boardgame.io/react'
import { Local } from 'boardgame.io/multiplayer'
import '@atlaskit/css-reset'

const LostSummitsClient = Client({
  debug: true,
  game: LostSummits,
  board: LostSummitsBoard,
  multiplayer: Local(),
})

function App() {
  return (
    <div>
      <LostSummitsClient playerID="0" />
      <br />
      <br />
      <LostSummitsClient playerID="1" />
    </div>
  )
}

export default App

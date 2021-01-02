import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LostSummits from './game'
import LostSummitsBoard from './board'
import Homepage from './home'
import shortid from 'shortid'
import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'
import '@atlaskit/css-reset'
import { GlobalStyles } from './shared-styles'

const LostSummitsClient = Client({
  debug: false,
  game: LostSummits,
  board: LostSummitsBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
})

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <>
          <Route path="/" exact component={Homepage} />
          <Route
            path="/play/:id?/:player?"
            render={({ match }) => {
              if (
                typeof match.params.id === 'undefined' ||
                !shortid.isValid(match.params.id)
              ) {
                return <Homepage />
              }
              let playerID = ''
              if (match.params.player === '0') {
                playerID = '0'
              } else if (match.params.player === '1') {
                playerID = '1'
              } else if (typeof match.params.player !== 'undefined') {
                return null
              }
              return (
                <LostSummitsClient
                  gameID={match.params.id}
                  playerID={playerID}
                />
              )
            }}
          />
        </>
      </Router>
    </>
  )
}

export default App

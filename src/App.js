import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { APP_PRODUCTION, GAME_SERVER_URL } from './config.js'
import LostSummits from './game'
import LostSummitsBoard from './board'
import Homepage from './home'
import Lobby from './lobby'
import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'
import '@atlaskit/css-reset'
import { GlobalStyles } from './shared-styles'

function App() {
  let history = useHistory()
  const server = APP_PRODUCTION
    ? `https://${window.location.hostname}`
    : GAME_SERVER_URL
  const LostSummitsClient = Client({
    debug: false,
    game: LostSummits,
    board: LostSummitsBoard,
    multiplayer: SocketIO({ server: server }),
  })
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route
          path="/home"
          exact
          render={(props) => <Homepage {...props} history={history} />}
        />
        <Route path="/lobby/:id" component={Lobby} />
        <Route path="/play" exact render={() => <LostSummitsClient />} />
        <Route
          path="*"
          render={(props) => <Homepage {...props} history={history} />}
        />
      </Switch>
    </>
  )
}

export default App

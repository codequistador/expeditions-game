import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Homepage from './home'
import Match from './match'
import '@atlaskit/css-reset'
import { GlobalStyles } from './shared-styles'

function App() {
  let history = useHistory()

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route
          path="/home"
          exact
          render={(props) => <Homepage {...props} history={history} />}
        />
        <Route
          path="/lobby/:id"
          render={(props) => {
            const { id } = props.match.params
            return <Match {...{ id }} />
          }}
        />
        <Route
          path="*"
          render={(props) => <Homepage {...props} history={history} />}
        />
      </Switch>
    </>
  )
}

export default App

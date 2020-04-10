import React from 'react'
import { RouteProvider } from '@bbc/web-framework-router'
import { Route, Switch } from 'react-router-dom'

import App from './app'
import Page from './page'

const PWA = ({ paths }) => (
  <App>
    <RouteProvider routes={paths}>
      <Switch>
        {paths.map(({ path }) => (
          <Route
            exact
            key={path}
            path={path}
            render={({ match: { params, path: matchedPath }, location }) => (
              <Page
                location={location}
                path={matchedPath}
                params={params}
              />
            )}
          />
        ))}
      </Switch>
    </RouteProvider>
  </App>
)

export default PWA

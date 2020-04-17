import React, { Children } from 'react'

let App = ({ children }: {children: React.ReactElement}) => (
  <>{children}</>
)

try {
  App = require(`${APP_ROOT_PATH}/app`).default
} catch (error) {
  App = ({ children }: {children: React.ReactElement}) => <>{children}</>
}

const PWAApp = ({ children }: { children: React.ReactElement }) => (
  <App>
    {children}
  </App>
)

export default PWAApp

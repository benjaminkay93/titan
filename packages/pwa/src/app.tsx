import React from 'react'

let App = ({ children }: {children: React.ReactElement}) => (
  <>{children}</>
)

try {
  App = require(`${APP_ROOT_PATH}/app`).default
} catch (error) {
  console.log("Could not import a default export from '/app'")
}

const PWAApp = ({ children }) => (
  <App>
    {children}
  </App>
)

export default PWAApp

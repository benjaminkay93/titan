import React from 'react'

const App = require(`${APP_ROOT_PATH}/app`).default

const PWAApp = ({ children }) => (
  <App>
    {children}
  </App>
)

export default PWAApp

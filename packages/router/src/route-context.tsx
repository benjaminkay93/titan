import React from 'react'

const { Consumer, Provider } = React.createContext({ routes: [] })

const RouteProvider = ({ children, routes }) => (
  <Provider
    value={{
      routes
    }}
  >
    {children}
  </Provider>
)

const RouteConsumer = Consumer

export { RouteProvider, RouteConsumer }

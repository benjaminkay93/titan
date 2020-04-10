import React from 'react'

let Page = ({ children }: {children: React.ReactElement}) => (
  <>{children}</>
)

try {
  Page = require(`${APP_ROOT_PATH}/page`).default
} catch (error) {
  console.log("Could not import a default export from '/page'")
}

const PWAPage = ({ path, params, location }) => (
  <Page path={path} params={params} location={location} />
)

export default PWAPage

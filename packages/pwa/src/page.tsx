import React from 'react'

const Page = require(`${APP_ROOT_PATH}/page`).default

const PWAPage = ({ path, params, location }) => (
  <Page path={path} params={params} location={location} />
)

export default PWAPage

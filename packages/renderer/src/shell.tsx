/* eslint-disable react/no-danger */

import React from 'react'

const generateHead = ({ title = 'Some Title', description = 'Some Description' }) =>
  [
    '<meta charSet="utf-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1" />',
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" id="documentDescription" />`,
  ].join('')

const Shell = ({ body }: {body: string}) => (
  <html lang="en" className="no-js" >
    <head dangerouslySetInnerHTML={{ __html: generateHead({}) }} />
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: body }} />
    </body>
  </html>
)

export default Shell

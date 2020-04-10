import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import Shell from './shell'

const render = async ({ element }: {element: React.ReactElement}) => {
  let body = ''
  let html = ''

  try {
    body = renderToString(element)
  } catch (e) {
    console.error('Error rendering components.')
    console.error(e)
  }

  try {
    html = renderToStaticMarkup(<Shell body={body} />)
  } catch (e) {
    console.error('Error rendering page.')
    console.error(e)
  }

  return {
    html: `<!DOCTYPE html>${html}`,
    statusCode: 200
  }
}

export default render

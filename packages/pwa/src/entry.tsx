import React from 'react'
import { hydrate } from 'react-dom'
import App from './app'

const app = <App/>

hydrate(app, document.getElementById('root'))

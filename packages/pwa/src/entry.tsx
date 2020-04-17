import React from 'react'
import { hydrate } from 'react-dom'
import PWA from './pwa'

const pwa = <PWA paths={['/']} />

hydrate(pwa, document.getElementById('root'))

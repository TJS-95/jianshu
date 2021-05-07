import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IconFontStyle } from './statics/iconfont/iconfont'
import { GlobalStyled } from './style.js'

ReactDOM.render(
  <Fragment>
    <GlobalStyled />
    <IconFontStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)

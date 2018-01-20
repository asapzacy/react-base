import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import { AppContainer } from 'containers'

const renderApp = Component => {
  render(
    <HotLoader>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </HotLoader>,
    document.getElementById('app')
  )
}

renderApp(AppContainer)

if (module.hot) {
  module.hot.accept('containers', () => {
    renderApp(AppContainer)
  })
}

if (__DEV__) {
  // update title + favicon for development env
  document.head.querySelector('link[rel=icon]').href = 'assets/public/favicon-dev.png'
  document.title = `dev -- ${document.title}`

  // global helper functions
  window.toJSON = str => '\n' + JSON.stringify(str, null, 2) + '\n'
  window.toHTML = obj => Object.keys(obj).forEach(key => <h1>{`${key}: ${obj[key]}`}</h1>)
}

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, NotFound, Home } from 'components'
import s from './App.scss'

const App = ({ isMenuOpen, triggerMenu }) => (
  <div className={s.outerContainer}>
    <Header isMenuOpen={isMenuOpen} triggerMenu={triggerMenu} />
    <main className={s.innerContainer}>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, NotFound, Home, About, Contact } from 'components'
import s from './App.scss'

const App = ({ isMenuOpen, triggerMenu }) => (
  <div className={s.outerContainer}>
    <Header isMenuOpen={isMenuOpen} triggerMenu={triggerMenu} />
    <main className={s.innerContainer}>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/contact'} component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App

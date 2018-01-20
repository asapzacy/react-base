import React, { Component } from 'react'
import { App } from 'components'
import { withRouter } from 'react-router-dom'

@withRouter
class AppContainer extends Component {
  state = { isMenuOpen: false }
  triggerMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }
  closeMenu = () => {
    this.setState({ isMenuOpen: false })
  }
  render() {
    return <App {...this.state} triggerMenu={this.triggerMenu} />
  }
}

export default AppContainer

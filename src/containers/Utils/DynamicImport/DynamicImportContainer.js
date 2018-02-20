import React, { Component } from 'react'

class DynamicImportContainer extends Component {
  state = { component: null }
  componentWillMount() {
    this.props.load()
      .then(component => {
        this.setState({ component: component.default })
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

export default DynamicImportContainer

import React, { Component } from 'react'
import { Loading } from 'components'

const getDisplayName = c => c.displayName || c.name || 'Component'

const withLoading = WrappedComponent => {
  return class extends Component {
    displayName = `withLoading(${getDisplayName(WrappedComponent)})`
    state = { isLoading: false }
    render() {
      if (this.props.isLoading) {
        return <Loading />
      }
      return <WrappedComponent {...this.props} />
    }
  }
}
export default withLoading

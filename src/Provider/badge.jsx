import React, { Component } from 'react'
import PropTypes from 'prop-types'

const badge = (ComponentToWrap) => {
  return class BadgeComponent extends Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      badge: PropTypes.object.isRequired,
    }
    render() {
      const { badge } = this.context
      // what we do is basically rendering `ComponentToWrap`
      // with an added `badge` prop, like a hook
      return (
        <ComponentToWrap {...this.props} badge={badge} />
      )
    }
  }
}
export default badge
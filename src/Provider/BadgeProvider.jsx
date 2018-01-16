import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

export const getBadge = code => {
  var badges = {
    'badge1': {
      title: 'Badged App 1',
      url: 'http://badge1.com',
      logo: '/src/to/img/1',
      colored: 'red',
      default: 'I am defaultValue in badge1'
    },
    'badge2': {
      title: 'Badged App 2',
      url: 'http://badge2.com',
      logo: '/src/to/img/2',
      colored: 'yellow',
      default: 'I am defaultValue in badge2'
    },
    'badge3': {
      title: 'Badged App 3',
      url: 'http://badge3.com',
      logo: '/src/to/img/3',
      colored: '#a4c639',
      default: 'I am defaultValue in badge3'
    },
  }
  return badges[code] || badges['badge1']
}

class BadgeProvider extends Component {
  static propTypes = {
    badge: PropTypes.object.isRequired,
  }
  static childContextTypes = {
    badge: PropTypes.object.isRequired,
  }
  getChildContext() {
    const { badge } = this.props
    return { badge }
  }
  render() {
    return Children.only(this.props.children)
  }
}

export default BadgeProvider

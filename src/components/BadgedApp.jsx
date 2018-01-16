import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Page from '../common/Page'
import badge from '../Provider/badge'

const styles = {
  container: {
    padding: '8px 16px'
  }
}

const BadgedApp = ({ badge }) => {
  return (
    <Page>
      <h2>{badge.title}</h2>
      <TextField floatingLabelText="Common input" /><br/>
      <TextField floatingLabelText="Description" defaultValue={badge.default} />
      <FlatButton label={badge.logo} primary />

      <a href={badge.url} target='_black'><RaisedButton label="Submit" primary /></a>
      <RaisedButton label="Colored button" backgroundColor={badge.colored} />
    </Page>
  )
}

BadgedApp.contextTypes = {
  badge: PropTypes.object.isRequired
};

export default badge(BadgedApp)
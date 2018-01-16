import React from 'react'
import { FlatButton } from 'material-ui'
import { Link, Route, Switch } from 'react-router-dom'
import Apps from 'material-ui/svg-icons/navigation/apps';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid'
  },
  column: {
    margin: '0px'
  },
  overlay: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70px' },
  button: { height: '70px', width: '200px' }
}

const Navigation = () => (
  <div style={styles.row}>
    <div style={styles.column}>
      <FlatButton buttonStyle={styles.button} icon={<Apps />} labelPosition='before' overlayStyle={styles.overlay} containerElement={<Link to="/" />} label={'Default'} />
    </div>
    <div style={styles.column}>
      <FlatButton buttonStyle={styles.button} icon={<Apps />} labelPosition='before' overlayStyle={styles.overlay} containerElement={<Link to="/badge2" />} label={'Badge2'} />
    </div>
    <div style={styles.column}>
      <FlatButton buttonStyle={styles.button} icon={<Apps />} labelPosition='before' overlayStyle={styles.overlay} containerElement={<Link to="/badge3" />} label={'Badge3'} />
    </div>
  </div>
)

export default Navigation

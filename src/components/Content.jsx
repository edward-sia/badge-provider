import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BadgeProvider, { getBadge } from '../Provider/BadgeProvider';
import BadgedApp from './BadgedApp'

const DefaultBadge = () => <BadgeProvider badge={getBadge('lalala')}><BadgedApp /></BadgeProvider>
const Badge2 = () => <BadgeProvider badge={getBadge('badge2')}><BadgedApp /></BadgeProvider>
const Badge3 = () => <BadgeProvider badge={getBadge('badge3')}><BadgedApp /></BadgeProvider>

const Content = () => (
  <Switch>
    <Route exact path="/" component={DefaultBadge} />
    <Route path="/badge2" component={Badge2} />
    <Route path="/badge3" component={Badge3} />
  </Switch>
)

export default Content

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './screens/Dashboard'
import Home from './screens/home'
import New from './screens/New'
import Join from './screens/Join'
import Login from './screens/Login'

export default () =>
  <Switch>
    <Route
      path="/"
      exact
      component={Home}
    />
    <Route
      path="/login" 
      component={Login}
    />
    <Route
      path="/join" 
      component={Join}
    />

    <Route
      path="/dashboard"
      component={Dashboard}
    />

    <Route
      path="/new"
      component={New}
    />

  </Switch>

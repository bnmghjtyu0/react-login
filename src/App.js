import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default App

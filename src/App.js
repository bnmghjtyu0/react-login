import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, BrowserRouter } from 'react-router-dom'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './pages/Layout'
import './assets/css/material-dashboard.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/fontawesome.min.js'
import './App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />

            <Route path="/" component={Layout} />
          </Switch>
        </Router>
      </BrowserRouter>
    )
  }
}

export default App

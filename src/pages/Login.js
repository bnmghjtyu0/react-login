import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import '../App.scss'

class Login extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside" />
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--active" className="PageSwitcher__Item">
                Sign In
              </NavLink>
              <NavLink to="/" exact activeClassName="PageSwitcher__Item--active" className="PageSwitcher__Item">
                Sign up
              </NavLink>
            </div>
            <div className="FormTitle">
              <NavLink to="/sign-in" exact activeClassName="FormTitle__Link--active" className="FormTitle__Link">
                Sign In
              </NavLink>
              or
              <NavLink to="/" exact activeClassName="FormTitle__Link--active" className="FormTitle__Link">
                Sign Up
              </NavLink>
            </div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    )
  }
}

export default Login

import React, { Component } from 'react'
import { Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import SignUpForm from '../components/login/SignUpForm'
import SignInForm from '../components/login/SignInForm'

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/login/sign-in" activeClassName="PageSwitcher__Item--active" className="PageSwitcher__Item">
              Sign In
            </NavLink>
            <NavLink to="/login" exact activeClassName="PageSwitcher__Item--active" className="PageSwitcher__Item">
              Sign up
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/login/sign-in" exact activeClassName="FormTitle__Link--active" className="FormTitle__Link">
              Sign In
            </NavLink>
            or
            <NavLink to="/login" exact activeClassName="FormTitle__Link--active" className="FormTitle__Link">
              Sign Up
            </NavLink>
          </div>
          <Route exact path="/login" component={SignUpForm} />
          <Route path="/login/sign-in" component={SignInForm} />
        </div>
      </div>
    )
  }
}

export default Login

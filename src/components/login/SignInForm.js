import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

import './login.scss'
class SignInForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form class="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label htmlFor="email" className="FormField__label">
              email
            </label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email" name="password" />
          </div>
          <div className="FormField">
            <label htmlFor="password" className="FormField__label">
              Password
            </label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" name="password" />
          </div>

          <div className="FormField">
            {/* <Link to="/home" className="FormField__Button mr-20" /> */}
            <Link to="/" className="FormField__Button mr-20">
              {' '}
              Sign In
            </Link>

            <a href="#" className="FormField__Link">
              Creat an account
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default SignInForm

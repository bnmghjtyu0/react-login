import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item">
              Sign In
            </a>
            <a href="#" className="PageSwitcher__Item PageSwitcher__Item--active">
              Sign up
            </a>
          </div>
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">
              Sign In
            </a>
            or
            <a href="#" className="FormTitle__Link FormTitle__Link--active">
              Sign Up
            </a>
          </div>

          <div className="FormCenter">
            <form class="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label htmlFor="name" className="FormField__label">
                  Full Name
                </label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
              </div>
              <div className="FormField">
                <label htmlFor="password" className="FormField__label">
                  Password
                </label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" name="password" />
              </div>
              <div className="FormField">
                <label htmlFor="email" className="FormField__label">
                  email
                </label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email" name="password" />
              </div>
              <label className="FormField__CheckboxLabel">
                <input type="checkbox" className="FormField__Checkbox" name="hasAgreed" />I agree all statements in
                <a href="#" className="FormField__TermsLink">
                  terms of service
                </a>
              </label>
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>
                <a href="#" className="FormField__Link">
                  I'm already member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App

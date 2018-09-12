import React, { Component } from 'react'

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
            <button className="FormField__Button mr-20">Sign In</button>
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

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Home from '../pages/Home'
class Layout extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main-panel ps-container ps-theme-default ps-active-y">
          <Home />
        </div>
      </div>
    )
  }
}

export default Layout

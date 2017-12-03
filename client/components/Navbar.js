import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render () {
    return (

      <div className="navbar">
        <h1>AirHub</h1>
        {/* <img className="navbar-logo" src="favicon.ico" /> */}
        <div className="navbar-links">
          <h3 className="navbar-item">
            <Link to="/">Aircrafts</Link>
          </h3>
          <h3 className="navbar-item">
            <Link to="/countries">Countries</Link>
          </h3>
        </div>
        <div>
          {/* Top 5 List Component goes here */}
        </div>
      </div>

    )
  }
}

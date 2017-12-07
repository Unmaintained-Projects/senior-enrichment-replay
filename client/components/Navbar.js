import React from 'react'
import { Link } from 'react-router-dom'
import TopFive from './TopFive'

export default function Navbar () {

  return (
    <div className="navbar">
      <h1 className="tag">
          <Link to="/">AirHub</Link>
      </h1>
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
        <TopFive />
      </div>
    </div>
  )

}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

  return (
    <div className="navbar">

      <Link to="/" className="tag">
        <h1>AirHub</h1>
      </Link>

      <div className="navbar-links">
        <Link to="/">
          <h3>Aircrafts</h3>
        </Link>
        <Link to="/countries">
          <h3>Countries</h3>
        </Link>

      </div>
    </div>
  )

}

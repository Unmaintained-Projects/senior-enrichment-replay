import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import AllAircrafts from './AllAircrafts'
import AllCountries from './AllCountries'
import SingleAircrafts from './SingleAircraft'
import SingleCountry from './SingleCountry'

export default function Home () {

  return (
    <Router>
      <div id="main">
        <div>
          <Navbar />
        </div>
        <div className="main-content">
          <Route exact path="/" component={AllAircrafts} />
          <Route path="/aircrafts/:aircraftId" component={SingleAircrafts} />
          <Route exact path="/countries" component={AllCountries} />
          <Route path="/countries/:countryId" component={SingleCountry} />
        </div>
      </div>
    </Router>
  )

}

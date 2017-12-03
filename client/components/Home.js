import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import AllAircrafts from './AllAircrafts'
import AllCountries from './AllCountries'
import SingleAircrafts from './SingleAircraft'
import SingleCountry from './SingleCountry'

export default class Home extends Component {


  render () {
    return (
      <Router>

        <div className="container-fluid" id="main">

          <div className="col-xs-2">
            <Navbar />
          </div>

          <div className="main-content col-xs-10">
            <Route exact path="/" component={AllAircrafts} />
            <Route path="/aircrafts/:aircraftId" component={SingleAircrafts} />
            <Route exact path="/countries" component={AllCountries} />
            <Route path="/countries/:countryId" component={SingleCountry} />
          </div>

        </div>

      </Router>
    )
  }
}

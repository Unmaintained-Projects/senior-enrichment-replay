import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import AllAircrafts from './AllAircrafts'
import AllCountries from './AllCountries'
import SingleAircrafts from './SingleAircraft'
import SingleCountry from './SingleCountry'
import AddAircraft from './AddAircraft'
import EditAircraft from './EditAircraft'
import AddCountry from './AddCountry'
import EditCountry from './EditCountry'

export default function Home () {

  return (
    <Router>
      <div id="main">
        <div>
          <Navbar />
        </div>
        <div className="main-content">
        <Switch>
          <Route exact path="/" component={AllAircrafts} />
          <Route exact path="/aircrafts/addAircraft" component={AddAircraft} />
          <Route exact path="/aircrafts/editAircraft" component={EditAircraft} />
          <Route path="/aircrafts/:aircraftId" component={SingleAircrafts} />
          <Route exact path="/countries" component={AllCountries} />
          <Route exact path="/countries/addCountry" component={AddCountry} />
          <Route exact path="/countries/editCountry" component={EditCountry} />
          <Route path="/countries/:countryId" component={SingleCountry} />
        </Switch>
        </div>
      </div>
    </Router>
  )

}

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import AllAircrafts from './AllAircrafts'
import AllCountries from './AllCountries'
import SingleAircrafts from './SingleAircraft'
import SingleCountry from './SingleCountry'
import AddAircraft from './AddAircraft'
import DeleteAircraft from './DeleteAircraft'
import EditAircraft from './EditAircraft'
import AddCountry from './AddCountry'
import EditCountry from './EditCountry'
import DeleteCountry from './DeleteCountry'
import store from '../store'
import { fetchAircrafts } from '../reducers/aircrafts'
import { fetchCountries } from '../reducers/countries'

export default class Home extends Component {

  componentDidMount () {
    const aircraftThunk = fetchAircrafts()
    store.dispatch(aircraftThunk)
    const countryThunk = fetchCountries()
    store.dispatch(countryThunk)
  }

  render () {
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
            <Route exact path="/aircraft/deleteAircraft/:aircraftId" component={DeleteAircraft} />
            <Route path="/aircrafts/:aircraftId" component={SingleAircrafts} />
            <Route exact path="/countries" component={AllCountries} />
            <Route exact path="/countries/addCountry" component={AddCountry} />
            <Route exact path="/countries/editCountry" component={EditCountry} />
            <Route exact path="/countries/deleteCountry/:countryId" component={DeleteCountry} />
            <Route path="/countries/:countryId" component={SingleCountry} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

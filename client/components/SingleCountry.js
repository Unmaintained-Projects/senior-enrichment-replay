import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import store from '../store'

export default class SingleCountry extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {

    const countries = this.state.countryReducer.countries
    console.log('countries: ', countries) // array of {}
    const countryId = Number(this.props.match.params.countryId)
    const countriesArray = countries.filter(eachCountry => eachCountry.id === countryId)
    const country = countriesArray[0]
    console.log('country now: ', country)
    const aircrafts = country.aircraft
    console.log('aircrafts: ', aircrafts)
    return (
      <div className="single-country-container">
        <h2>{ country.name }</h2>
        <h4>Global Firepower Index: { country.GFI }</h4>
        <img src={ country.flagUrl } />
        <Link to={`/countries/editCountry/${country.id}`}>
            <Button bsStyle="info">Edit This Country</Button>
          </Link>
        <Link to={`/countries/deleteCountry/${country.id}`}>
            <Button bsStyle="danger">Destroy This Country</Button>
        </Link>
        <div className="country-aircraft-list">
          {
            aircrafts && aircrafts.map(aircraft => {
              return (
                <Link to={`/aircrafts/${aircraft.id}`} key={ aircraft.id }>
                  <div className="each-aircraft">
                    <h4>{ aircraft.make }: { aircraft.model }, { aircraft.year }</h4>
                    <img src={ aircraft.imageUrl } />
                  </div>
                </Link>
              )
            })
          }
        </div>

      </div>
    )
  }
}

// add all aircrafts belonging to each country

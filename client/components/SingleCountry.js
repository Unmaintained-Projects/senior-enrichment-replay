import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleCountry extends Component {

  constructor () {
    super()
    this.state = {
      country: {}
    }
  }

  componentDidMount () {
    const countryId = this.props.match.params.countryId

    axios.get(`/api/countries/${countryId}`)
    .then((res => res.data))
    .then(country => this.setState({ country }))
  }

  render () {

    const country = this.state.country
    const aircrafts = this.state.country.aircraft
    console.log('country: ', country)
    console.log('aircrafts: ', aircrafts)
    return (
      <div className="single-country-container">
        <h2>{ country.name }</h2>
        <h4>Global Firepower Index: { country.GFI }</h4>
        <img src={ country.flagUrl } />
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

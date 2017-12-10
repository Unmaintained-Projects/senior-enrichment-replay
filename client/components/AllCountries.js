import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'

export default class AllCountries extends Component {

  constructor () {
    super()
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
    console.log(countries)
    return (
      <div className="all-countries-container">
        <h3>Countries</h3>
        <div className="all-countries-list">
        {
          countries.map(country => {
            return (
              <Link to={`/countries/${country.id}`} key={ country.id }>
                <div className="each-country">
                  <h4>{ country.name }</h4>
                  <h5>Global Firepower Index: { country.GFI }</h5>
                  <img src={ country.flagUrl } />
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

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllCountries extends Component {

  constructor () {
    super()
    this.state = {
      countries: []
    }
  }

  componentDidMount () {
    axios.get('/api/countries')
    .then(res => res.data)
    .then(countries => {
      this.setState({ countries })
    })
  }

  render () {

    const countries = this.state.countries

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

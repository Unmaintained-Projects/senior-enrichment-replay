import React, { Component } from 'react'
import axios from 'axios';
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
      <div>
        <h3>Contries</h3>
        <div className="row">
        {
          countries.map(country => {
            return (
              <Link to={`/countries/${country.id}`}>
                <div className="col-xs-4" key={ country.id }>
                  <h4>{ country.name }</h4>
                  <img src={ country.imageUrl } />
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

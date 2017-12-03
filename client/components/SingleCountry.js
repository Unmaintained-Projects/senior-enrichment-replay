import React, { Component } from 'react'
import axios from 'axios'

export default class SingleCountry extends Component {

  constructor () {
    super()
    this.state = {
      country: {}
    }
  }

  componentDidMount () {
    const countryId = this.props.match.params.countryId

    axios.get(`/api/aircrafts/${countryId}`)
    .then((res => res.data))
    .then(country => this.setState({ country }))
  }

  render () {

    const country = this.state.country

    return (
      <div className="col-xs-4">
        <h4>{ country.name }</h4>
        <img src={ country.flagUrl } />
      </div>
    )
  }
}

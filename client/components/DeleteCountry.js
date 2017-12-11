import React, { Component } from 'react'
import store from '../store'
import { destroyCountry } from '../reducers/countries'

export default class DeleteCountry extends Component {

  constructor () {
    super()
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick (event, countryId) {
    store.dispatch(destroyCountry(countryId))
  }

  render () {
    console.log('props: ', this.props)

    const countries = this.state.countryReducer.countries
    const id = Number(this.props.match.params.countryId)
    console.log('id: ', id)
    const foundCountries = countries.filter(countries => countries.id === id)
    const country = foundCountries[0]
    console.log(country)
    return (
      <div className="destroy-form">
      <h1>Are you sure you want to destroy {country.name} ?</h1>
      <button
        type="submit"
        onClick={event => this.handleClick(event, country.id)}
        >Destroy</button>
    </div>
    )
  }
}

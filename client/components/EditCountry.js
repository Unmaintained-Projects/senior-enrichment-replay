import React, { Component } from 'react'
import store from '../store'
import { putCountry } from '../reducers/countries'

export default class EditCountry extends Component {

  constructor () {
    super()
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleSubmit (event) {
    event.preventDefault()
    const countryId = Number(this.props.match.params.countryId)
    const country = event.target.name.value
    const GFI = event.target.GFI.value
    const flagUrl = event.target.flagUrl.value

    store.dispatch(putCountry(countryId, {country, GFI, flagUrl}))
  }

  render () {
    const countries = this.state.countryReducer.countries
    console.log('countries: ', countries)
    const id = Number(this.props.match.params.countryId)
    const foundCountry = countries && countries.filter(country => country.id === id)
    const country = foundCountry[0]
    return (
      <form onSubmit={this.handleSubmit}    name="country"className="edit-country-form">
        <h2>Edit a Country</h2>
        Name: <input name="name" placeholder={country.name} />
        Global Firepower Index: <input name="GFI" placeholder={country.GFI} />
        Flag URL: <input name="flagUrl" placeholder={country.flagUrl} />
        <button type="submit">Update Country</button>
      </form>
    )
  }
}

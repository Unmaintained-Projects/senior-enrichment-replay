import React, { Component } from 'react'
import store from '../store'
import { postCountry } from '../reducers/countries'

export default class AddCountry extends Component {

  constructor () {
    super()
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
    console.log(event.target.name.value)
    const name = event.target.name.value
    const GFI = event.target.GFI.value
    const flagUrl = event.target.flag.value

    store.dispatch(postCountry({name, GFI, flagUrl}))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} name="newCountry" className="new-country-form">
        <h2>Add a New Country</h2>
        Name: <input
          name="name"
          type="text"
          placeholder="Enter Country Name" />
        Global FirePower Index: <input
          name="GFI"
          type="text"
          placeholder="Enter Country Global FirePower Index" />
        Flag URL: <input
          name="flag"
          type="text"
          placeholder="Enter Flag URL Link" />
        <button type="submit">Add New Country</button>
      </form>
    )
  }
}

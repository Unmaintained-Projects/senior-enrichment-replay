import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class AddCountry extends Component {

  constructor () {
    super()
    this.state = {
      country: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    const newCountry = event.target.newCountry.value

    axios.post('/countries', newCountry)
    .then(res => res.data)
    .then(newCountry => {
      this.state.country = newCountry
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}    name="newCountry"className="new-country-form">
        <h2>Add a New Country</h2>
        <input name="name" placeholder="Enter Country Name" />
        <input name="GFI" placeholder="Enter Country Global FirePower Index" />
        <input name="flag" placeholder="Enter Flag URL Link" />
        <Button bsStyle="danger">Add a New Aircraft</Button>
        <Button bsStyle="danger">Submit New Country</Button>
      </form>
    )
  }
}
// SUBMIT BUTTON - link to newly created aircraft, rendering SingleAircraft
// toggle this.state.editing to decide axios.put or axios.create
// if props are passed in for edit, autofill info in placeholder, else use hard-coded placeholder
// css and refactor to react-redux

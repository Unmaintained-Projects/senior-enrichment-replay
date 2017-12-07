import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class EditCountry extends Component {

  constructor () {
    super()
    this.state = {
      country: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    const country = event.target.country.value

    axios.put('/countries/:countryId', country)
    .then(res => res.data)
    .then(updatedCountry => {
      this.state.country = updatedCountry
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}    name="country"className="edit-country-form">
        <h2>Edit a Country</h2>
        <input name="name" placeholder="Enter Country Name" />
        <input name="GFI" placeholder="Enter Country GFI" />
        <input name="flag" placeholder="Enter Flag URL Link" />
        <Button bsStyle="danger">Update Country</Button>
      </form>
    )
  }
}
// SUBMIT BUTTON - link to updated aircraft, rendering Updated Aircraft
// AXIOS request correct?
// css and refactor to react-redux

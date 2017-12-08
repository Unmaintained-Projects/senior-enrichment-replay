import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class EditAircraft extends Component {

  constructor () {
    super()
    this.state = {
      aircrafts: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    const aircraft = event.target.aircraft.value

    axios.put('/aircrafts/:aircraftId', aircraft)
    .then(res => res.data)
    .then(updatedAircraft => {
      this.state.aircrafts = updatedAircraft
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} name="aircraft" className="edit-aircraft-form">
        <h2>Edit an Aircraft</h2>
        Make: <input name="make" placeholder="Enter Aircraft Make" />
        Model: <input name="model" placeholder="Enter Aircraft Model" />
        Year: <input name="year" placeholder="Enter Aircraft Year" />
        Type: <input name="type" placeholder="Enter Aircraft Type" />
        Cost: <input name="cost" placeholder="Enter Aircraft Cost" />
        Image URL: <input name="imageUrl" placeholder="Enter Aircraft Image URL" />
        Description: <input name="desc" placeholder="Enter Aircraft Description" />
        Country: <input name="country" placeholder="Enter Aircraft Country" />
        <Button bsStyle="danger">Update Aircraft</Button>
      </form>
    )
  }
}
// SUBMIT BUTTON - link to updated aircraft, rendering Updated Aircraft
// AXIOS request check
// css and refactor to react-redux

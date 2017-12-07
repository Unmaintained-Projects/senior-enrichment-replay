import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class AddAircraft extends Component {

  // constructor () {
  //   super()
  //   this.state = {
  //     aircrafts: []
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleSubmit (event) {
  //   const newAircraft = event.target.newAircraft.value

  //   axios.post('/aircrafts', newAircraft)
  //   .then(res => res.data)
  //   .then(newAircraft => {
  //     this.state.aircrafts = newAircraft
  //   })
  // }

  render () {
    return (
      <form onSubmit={this.handleSubmit}    name="newAircraft"className="new-aircraft-form">
        <h2>Add a New Aircraft</h2>
        <input name="make" placeholder="Enter Aircraft Make" />
        <input name="model" placeholder="Enter Aircraft Model" />
        <input name="year" placeholder="Enter Aircraft Year" />
        <input name="type" placeholder="Enter Aircraft Type" />
        <input name="cost" placeholder="Enter Aircraft Cost" />
        <input name="imageUrl" placeholder="Enter Aircraft Image URL" />
        <input name="desc" placeholder="Enter Aircraft Description" />
        <input name="country" placeholder="Enter Aircraft Country" />
        <Button bsStyle="danger">Submit New Aircraft</Button>
      </form>
    )
  }
}
// SUBMIT BUTTON - link to newly created aircraft, rendering SingleAircraft
// toggle this.state.editing to decide axios.put or axios.create
// if props are passed in for edit, autofill info in placeholder, else use hard-coded placeholder
// css and refactor to react-redux

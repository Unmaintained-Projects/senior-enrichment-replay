import React, { Component } from 'react'
// import axios from 'axios'
import { Button, Form } from 'react-bootstrap'

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
      <Form onSubmit={this.handleSubmit}name="newAircraft"className="new-aircraft-form">
        <h2>Add a New Aircraft</h2>
        <div className="form-inputs">
          Make: <input name="make" placeholder="Enter Aircraft Make" />
          Model: <input name="model" placeholder="Enter Aircraft Model" />
          Year: <input name="year" placeholder="Enter Aircraft Year" />
          Type: <input name="type" placeholder="Enter Aircraft Type" />
          Cost: <input name="cost" placeholder="Enter Aircraft Cost" />
          Image URL: <input name="imageUrl" placeholder="Enter Aircraft Image URL" />
          Description: <input name="desc" placeholder="Enter Aircraft Description" />
          Country: <input name="country" placeholder="Enter Aircraft Country" />
        </div>
        <Button bsStyle="danger">Submit New Aircraft</Button>
      </Form>
    )
  }
}
// SUBMIT BUTTON - link to newly created aircraft, rendering SingleAircraft
// toggle this.state.editing to decide axios.put or axios.create
// if props are passed in for edit, autofill info in placeholder, else use hard-coded placeholder
// css and refactor to react-redux

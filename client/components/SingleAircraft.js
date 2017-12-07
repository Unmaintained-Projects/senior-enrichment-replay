import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class SingleAircraft extends Component {

  constructor () {
    super()
    this.state = {
      aircraft: []
    }
  }

  componentDidMount () {
    const aircraftId = this.props.match.params.aircraftId

    axios.get(`/api/aircrafts/${aircraftId}`)
    .then((res => res.data))
    .then(aircraft => this.setState({ aircraft }))
  }

  render () {

    const aircraft = this.state.aircraft
    const country = this.state.aircraft.country
    console.log('aircraft', aircraft)
    console.log('country ', country)

    return (
      <div className="single-aircraft-container">

        <div className="title-words">
          <div className="title">
            <h3>{ aircraft.make } { aircraft.model }</h3>
          </div>
          <div className="words">
            <h4>Year: { aircraft.year }</h4>
            <h4>Type: { aircraft.type }</h4>
            <h4>Cost: { aircraft.cost }</h4>
            <h4>Country: {/* { country.name }*/}</h4>
          </div>
        </div>

        <div className="image">
          <img src={ aircraft.imageUrl } />
        </div>

        <div className="description">
          <div>{ aircraft.description }</div>
        </div>

        <div className="buttons">
          <Button bsStyle="info">Edit This Aircraft</Button>
          <Button bsStyle="danger">Destroy This Aircraft</Button>
        </div>

      </div>


    )
  }
}
// EDIT BUTTON - link AddAircraft component and pass in aircraft info auto filled in placeholder
// DELETE BUTTON - Aircraft.destroy()..., and redirect to '/aircrafts'
// css
// refactor to react-redux

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

    return (
      <div className="single-aircraft">
        <div className="title-description">
          <h3>{ aircraft.make } { aircraft.model }</h3>
          <h4>Year: { aircraft.year } | Country: { aircraft.countryId }</h4>
        </div>
        <Button bsStyle="info" block>Edit</Button>
        <Button bsStyle="danger" block>Delete</Button>
        <div>{ aircraft.description }</div>
        <img src={ aircraft.imageUrl } />
      </div>
    )
  }
}

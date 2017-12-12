import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import store from '../store'

export default class EditAircraft extends Component {

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

  }

  render () {
    const aircrafts = this.state.aircraftReducer.aircrafts
    const id = Number(this.props.match.params.aircraftId)
    const foundAircraft = aircrafts.filter(aircraft => aircraft.id === id)
    const aircraft = foundAircraft[0]
    console.log('edit this: ', aircraft)
    return (
      <form onSubmit={this.handleSubmit} name="aircraft" className="edit-aircraft-form">
        <h2>Edit an Aircraft</h2>
        Make: <input name="make" placeholder={aircraft.make} />
        Model: <input name="model" placeholder={aircraft.model} />
        Year: <input name="year" placeholder={aircraft.year}/>
        Type: <input name="type" placeholder={aircraft.type} />
        Cost: <input name="cost" placeholder={aircraft.cost} />
        Image URL: <input name="imageUrl" placeholder={aircraft.imageUrl} />
        Description: <input name="description" placeholder={aircraft.description} />
        Country: <input name="country" placeholder={aircraft.country.name} />
        <Button bsStyle="danger">Update Aircraft</Button>
      </form>
    )
  }
}

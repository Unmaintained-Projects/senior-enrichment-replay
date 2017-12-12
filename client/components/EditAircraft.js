import React, { Component } from 'react'
import store from '../store'
import { putAircraft } from '../reducers/aircrafts'

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
    event.preventDefault()
    const aircraftId = Number(this.props.match.params.aircraftId)
    const make = event.target.make.value
    const model = event.target.model.value
    const year = event.target.year.value
    const type = event.target.type.value
    const cost = event.target.cost.value
    const imageUrl = event.target.imageUrl.value
    const description = event.target.description.value
    const country = event.target.country.value

    store.dispatch(putAircraft(aircraftId, {make, model, year, type, cost, imageUrl, description, country}))
  }

  render () {
    console.log('getState: ', store.getState())
    console.log('state: ', this.state)
    const aircrafts = this.state.aircraftReducer.aircrafts
    const id = Number(this.props.match.params.aircraftId)
    console.log('aircrafts ', aircrafts)
    const foundAircraft = aircrafts && aircrafts.filter(aircraft => aircraft.id === id)
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
        <button type="submit">Update Aircraft</button>
      </form>
    )
  }
}

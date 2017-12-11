import React, { Component } from 'react'
import store from '../store'
import { deleteAircraft } from '../reducers/aircrafts'

export default class DeleteAircraft extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick (event, aircraftId) {
    store.dispatch(deleteAircraft(aircraftId))
  }

  render () {
    const aircrafts = this.state.aircraftReducer.aircrafts
    const id = Number(this.props.match.params.aircraftId)
    const foundAircraft = aircrafts.filter(aircraft => aircraft.id === id)
    const aircraft = foundAircraft[0]
    return (
      <div>
        <h1>Are you sure you want to destroy {aircraft.make} {aircraft.model} ?</h1>
        <button
          type="submit"
          onClick={event => this.handleClick(event, aircraft.id)}
          >Destroy</button>
      </div>
    )
  }
}

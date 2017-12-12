import React from 'react'
import { connect } from 'react-redux'
import { destroyAircraft } from '../reducers/aircrafts'

function DeleteAircraft (props) {

  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  // handleClick (event, aircraftId) {
  //   store.dispatch(destroyAircraft(aircraftId))
  // }

  // render () {
    const aircrafts = props.aircrafts
    const id = Number(props.match.params.aircraftId)
    const foundAircraft = aircrafts.filter(aircraft => aircraft.id === id)
    const aircraft = foundAircraft[0]
    return (
      <div className="destroy-form">
        <h1>Are you sure you want to destroy {aircraft.make} {aircraft.model} ?</h1>
        <button
          type="submit"
          onClick={event => props.handleClick(event, aircraft.id)}
          >Destroy</button>
      </div>
    )
  // }
}

const mapStateToProps = function (state) {
  return {
    aircrafts: state.aircraftReducer.aircrafts
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick: function (event, aircraftId) {
      dispatch(destroyAircraft(aircraftId))
    }
  }
}

const DeleteAircraftContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteAircraft)
export default DeleteAircraftContainer

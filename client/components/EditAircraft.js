import React from 'react'
import { connect } from 'react-redux'
import { putAircraft } from '../reducers/aircrafts'

function EditAircraft (props) {

  // constructor () {
  //   super()
  //   this.state = store.getState()
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  // handleSubmit (event) {
  //   event.preventDefault()
  //   const aircraftId = Number(this.props.match.params.aircraftId)
  //   const make = event.target.make.value
  //   const model = event.target.model.value
  //   const year = event.target.year.value
  //   const type = event.target.type.value
  //   const cost = event.target.cost.value
  //   const imageUrl = event.target.imageUrl.value
  //   const description = event.target.description.value
  //   const country = event.target.country.value

  //   store.dispatch(putAircraft(aircraftId, {make, model, year, type, cost, imageUrl, description, country}))
  // }

  // render () {
    const aircrafts = props.aircrafts
    const id = Number(props.match.params.aircraftId)
    const foundAircraft = aircrafts && aircrafts.filter(aircraft => aircraft.id === id)
    const aircraft = foundAircraft[0]

    return (
      <form onSubmit={props.handleSubmit} name="aircraft" className="edit-aircraft-form">
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
  // }
}

const mapStateToProps = function (state) {
  return {
    aircrafts: state.aircraftReducer.aircrafts
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit: function (event) {
      event.preventDefault()
      const aircraftId = Number(ownProps.match.params.aircraftId)
      const make = event.target.make.value
      const model = event.target.model.value
      const year = event.target.year.value
      const type = event.target.type.value
      const cost = event.target.cost.value
      const imageUrl = event.target.imageUrl.value
      const description = event.target.description.value
      const country = event.target.country.value

      dispatch(putAircraft(aircraftId, {make, model, year, type, cost, imageUrl, description, country}))
    }
  }
}

const EditAircraftContainer = connect(mapStateToProps, mapDispatchToProps)(EditAircraft)
export default EditAircraftContainer

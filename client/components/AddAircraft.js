import React from 'react'
import { connect } from 'react-redux'
import { postAircraft } from '../reducers/aircrafts'

function AddAircraft (props) {

  // constructor () {
  //   super()
    // props.handleSubmit = props.handleSubmit.bind(this)
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  // handleSubmit (event) {
  //   event.preventDefault()
  //   const make = event.target.make.value
  //   const model = event.target.model.value
  //   const year = event.target.year.value
  //   const type = event.target.type.value
  //   const cost = event.target.cost.value
  //   const imageUrl = event.target.imageUrl.value
  //   const description = event.target.description.value
  //   const country = event.target.country.value

  //   store.dispatch(postAircraft({make, model, year, type, cost, imageUrl, description, country}))
  // }

  // render () {
    return (
      <form onSubmit={props.handleSubmit} className="new-aircraft-form">
        <h2>Add a New Aircraft</h2>
        <div className="form-inputs">
          Make: <input
            name="make"
            type="text"
            placeholder="Enter Aircraft Make" />
          Model: <input
            name="model"
            type="text"
            placeholder="Enter Aircraft Model" />
          Year: <input
            name="year"
            type="text"
            placeholder="Enter Aircraft Year" />
          Type: <input
            name="type"
            type="text"
            placeholder="Enter Aircraft Type" />
          Cost: <input
            name="cost"
            type="text"
            placeholder="Enter Aircraft Cost" />
          Image URL: <input
            name="imageUrl"
            type="text"
            placeholder="Enter Aircraft Image URL" />
          Description: <input
            name="description"
            type="text"
            placeholder="Enter Aircraft Description" />
          Country: <input
            name="country"
            type="text"
            placeholder="Enter Aircraft Country" />
        </div>
        <button type="submit">Submit New Aircraft</button>
      </form>
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
    handleSubmit: function (event) {
      event.preventDefault()
      const make = event.target.make.value
      const model = event.target.model.value
      const year = event.target.year.value
      const type = event.target.type.value
      const cost = event.target.cost.value
      const imageUrl = event.target.imageUrl.value
      const description = event.target.description.value
      const country = event.target.country.value

      dispatch(postAircraft({make, model, year, type, cost, imageUrl, description, country}))
    }
  }
}

const AddAircraftContainer = connect(mapStateToProps, mapDispatchToProps)(AddAircraft)
export default AddAircraftContainer

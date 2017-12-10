import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { postAircraft } from '../reducers/aircrafts'

function AddAircraft (props) {

  const { handleSubmit } = props;

    return (
      <form onSubmit={(event => handleSubmit(aircraft))} className="new-aircraft-form">
        <h2>Add a New Aircraft</h2>
        <div className="form-inputs">
          Make: <input name="aircraft" placeholder="Enter Aircraft Make" />
          Model: <input name="model" placeholder="Enter Aircraft Model" />
          Year: <input name="year" placeholder="Enter Aircraft Year" />
          Type: <input name="type" placeholder="Enter Aircraft Type" />
          Cost: <input name="cost" placeholder="Enter Aircraft Cost" />
          Image URL: <input name="imageUrl" placeholder="Enter Aircraft Image URL" />
          Description: <input name="desc" placeholder="Enter Aircraft Description" />
          Country: <input name="country" placeholder="Enter Aircraft Country" />
        </div>
        <Button bsStyle="danger">Submit New Aircraft</Button>
      </form>
    )
}

// const mapStateToProps = function (state) {
//   return {
//     aircrafts: state.aircrafts
//   }
// }

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit (event, aircraft) {
      event.preventDefault()
      dispatch(postAircraft({aircraft}))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddAircraft)
// SUBMIT BUTTON - link to newly created aircraft, rendering SingleAircraft

// css and refactor to react-redux

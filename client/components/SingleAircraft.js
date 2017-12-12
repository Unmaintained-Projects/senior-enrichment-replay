import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

function SingleAircraft (props) {

  // constructor (props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  // render () {

    const aircrafts = props.aircrafts
    const aircraftId = Number(props.match.params.aircraftId)
    const aircraftArray = aircrafts.filter(eachAircraft => eachAircraft.id === aircraftId)
    const aircraft = aircraftArray[0]
    const country = aircraft.country
    const countryName = aircraft.country.name

    return (
      <div className="single-aircraft-container">

        <div className="title">
          <h3>{ aircraft.make } { aircraft.model }</h3>
        </div>

        <div className="header">
          <div className="title-words">
            <div className="words">
              <h4>Year: { aircraft.year }</h4>
              <h4>Type: { aircraft.type }</h4>
              <h4>Cost: $ { aircraft.cost } million</h4>
              <Link to={`/countries/${country.id}`}>
                <h4>Country: { countryName }</h4>
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={ aircraft.imageUrl } />
          </div>
        </div>

        <div className="description">
          <div>{ aircraft.description }</div>
        </div>

        <div className="buttons">
          <Link to={`/aircrafts/editAircraft/${aircraft.id}`}>
            <Button bsStyle="info">Edit This Aircraft</Button>
          </Link>
          <Link to={`/aircraft/deleteAircraft/${aircraft.id}`}>
            <Button bsStyle="danger">Destroy This Aircraft</Button>
          </Link>
        </div>

      </div>
    )
  // }

}

const mapStateToProps = (state) => {
  return {
    aircrafts: state.aircraftReducer.aircrafts
  }
}

const SingleAircraftContainer = connect(mapStateToProps)(SingleAircraft)
export default SingleAircraftContainer

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

function AllAircrafts (props) {

  // constructor () {
  //   super()
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

    return (
      <div className="all-aircrafts-container">
        <h3>Aircrafts</h3>

        <Link to="/aircrafts/addAircraft">
          <Button bsStyle="default">Add a New Aircraft</Button>
       </Link>

        <div className="all-aircrafts-list">
        {
          aircrafts.map(aircraft => {
            return (
              <Link to={`/aircrafts/${aircraft.id}`} key={ aircraft.id }>
                <div className="each-aircraft">
                  <h4>{ aircraft.make }: { aircraft.model }, { aircraft.year }</h4>
                  <img src={ aircraft.imageUrl } />
                </div>
              </Link>
            )
          })
        }
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

const AllAircraftContainer = connect(mapStateToProps)(AllAircrafts)
export default AllAircraftContainer

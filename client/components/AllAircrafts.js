import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import store from '../store'


export default class AllAircrafts extends Component {

  constructor () {
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const aircrafts = this.state.aircraftReducer.aircrafts

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
  }
}

// const mapStateToProps = (state) => {
//   console.log('state in map', state)
//   return {
//     aircrafts: state.aircrafts
//   }
// }

// const mapDispatchToProps = (dispatch, history) => {
//   return {
//         getAircrafts: () => dispatch(action.)
//   }
// }

// const AllAircraftContainer = connect(mapStateToProps)(AllAircrafts);
// export default AllAircraftContainer;

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddAircraft from './AddAircraft'
import { Button } from 'react-bootstrap'

export default class AllAircrafts extends Component {

  constructor () {
    super()
    this.state = {
      aircrafts: []
    }
  }

  componentDidMount () {
    axios.get('/api/aircrafts')
    .then(res => res.data)
    .then(aircrafts => {
      this.setState({ aircrafts })
    })
  }

  render () {

    const aircrafts = this.state.aircrafts
    return (
      <div className="all-aircrafts-container">
        <h3>Aircrafts</h3>

        <Link to="/aircrafts/addAircraft">
          <Button bsStyle="danger">Add a New Aircraft</Button>
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
//   return {
//     aircrafts: []
//   }
// };

// const mapDispatchToProps = (dispatch, history) => {
//   return {

//   }
// }

// const AllAircraftContainer = connect(mapStateToProps)(AllAircrafts);
// export default AllAircraftContainer;

import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

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
      <div>
        <h3>Aircrafts</h3>
        <div className="column">
        {
          aircrafts.map(aircraft => {
            return (
              <Link to={`/aircrafts/${aircraft.id}`}>
                <div className="each-aircraft col-xs-4" key={ aircraft.id }>
                  <h4>{ aircraft.make } { aircraft.model }, { aircraft.year }</h4>

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

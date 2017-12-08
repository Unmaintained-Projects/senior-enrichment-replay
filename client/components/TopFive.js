import React, { Component } from 'react'
import axios from 'axios'

export default class TopFive extends Component {

  // constructor () {
  //   super()
  //   this.state = {
  //     topFive: []
  //   }
  // }

  // componentDidMount () {
  //   axios.get('/countries/topFive')
  //   .then(res => res.data)
  //   .then(topFive => res.json(topFive))
  //   .then(topFive => {
  //     this.setState({ topFive })
  //   })
  // }

  render () {

    // const topFiveArray = this.state.topFive
    return (
      <div className="top-five-container">
        <h4>List of Top Five</h4>
      </div>
      // <ul className="top-five-list">
      // {
      //   topFiveArray.map(top => {
      //     <li className="each-top-five" key={ top.id }>
      //       { top.name }
      //     </li>
      //   })
      // }
      // </ul>
    )
  }
}

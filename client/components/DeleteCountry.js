import React from 'react'
import { connect } from 'react-redux'
import { destroyCountry } from '../reducers/countries'

function DeleteCountry (props) {

  // constructor () {
  //   super()
  //   this.state = store.getState()
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  // }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  // handleClick (event, countryId) {
  //   dispatch(destroyCountry(countryId))
  // }

  // render () {

    const countries = props.countries
    const id = Number(props.match.params.countryId)
    const foundCountries = countries.filter(country => country.id === id)
    const country = foundCountries[0]

    return (
      <div className="destroy-form">
      <h1>Are you sure you want to destroy {country.name} ?</h1>
      <button
        type="submit"
        onClick={event => props.handleClick(event, country.id)}
        >Destroy</button>
    </div>
    )
  // }
}

const mapStateToProps = function (state) {
  return {
    countries: state.countryReducer.countries
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick: function (event, countryId) {
      dispatch(destroyCountry(countryId))
    }
  }
}

const DeleteCountryContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteCountry)
export default DeleteCountryContainer

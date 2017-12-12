import React from 'react'
import { connect } from 'react-redux'
import { putCountry } from '../reducers/countries'

function EditCountry (props) {

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
  //   const countryId = Number(props.match.params.countryId)
  //   const country = event.target.name.value
  //   const GFI = event.target.GFI.value
  //   const flagUrl = event.target.flagUrl.value

  //   dispatch(putCountry(countryId, {country, GFI, flagUrl}))
  // }

  // render () {
    const countries = props.countries
    const id = Number(props.match.params.countryId)
    const foundCountry = countries && countries.filter(country => country.id === id)
    const country = foundCountry[0]
    return (
      <form onSubmit={props.handleSubmit}    name="country"className="edit-country-form">
        <h2>Edit a Country</h2>
        Name: <input name="name" placeholder={country.name} />
        Global Firepower Index: <input name="GFI" placeholder={country.GFI} />
        Flag URL: <input name="flagUrl" placeholder={country.flagUrl} />
        <button type="submit">Update Country</button>
      </form>
    )
  // }
}

const mapStateToProps = function (state) {
  return {
    countries: state.countryReducer.countries
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit: function (event) {
      event.preventDefault()
      const countryId = Number(ownProps.match.params.countryId)
      const country = event.target.name.value
      const GFI = event.target.GFI.value
      const flagUrl = event.target.flagUrl.value

      dispatch(putCountry(countryId, {country, GFI, flagUrl}))
    }
  }
}

const EditCountryContainer = connect(mapStateToProps, mapDispatchToProps)(EditCountry)
export default EditCountryContainer

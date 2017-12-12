import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

function AllCountries (props) {

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

    const countries = props.countries

    return (
      <div className="all-countries-container">
        <h3>Countries</h3>
        <Link to="/countries/addCountry">
          <Button bsStyle="default">Add a New Country</Button>
       </Link>
        <div className="all-countries-list">
        {
          countries.map(country => {
            return (
              <Link to={`/countries/${country.id}`} key={ country.id }>
                <div className="each-country">
                  <h4>{ country.name }</h4>
                  <h5>Global Firepower Index: { country.GFI }</h5>
                  <img src={ country.flagUrl } />
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
    countries: state.countryReducer.countries
  }
}

const AllCountriesContainer = connect(mapStateToProps)(AllCountries)
export default AllCountriesContainer

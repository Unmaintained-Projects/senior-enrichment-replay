import axios from 'axios'

// ACTION TYPES
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const EDIT_COUNTRY = 'EDIT_COUNTRY'
export const DELETE_COUNTRY = 'DELETE_COUNTRY'

// ACTION CREATORS
export function getCountries (countries) {
  const action = { type: GET_COUNTRIES, countries }
  return action
}

export function addCountry (country) {
  const action = { type: ADD_COUNTRY, country }
  return action
}

export function editCountry (newCountry) {
  const action = { type: EDIT_COUNTRY, newCountry }
  return action
}

export function deleteCountry (country) {
  const action = { type: DELETE_COUNTRY, country }
  return action
}

// THUNK CREATORS
export function fetchCountries () {

  return function thunk(dispatch) {
    return axios.get('/api/countries')
      .then(res => res.data)
      .then(countries => {
        const action = getCountries(countries)
        dispatch(action)
      })
    }

}

export function postCountry(country) {
console.log('in post', country)
  return function thunk(dispatch) {
    return axios.post('/api/countries', country)
      .then(res => res.data)
      .then(newCountry => {
        const action = getCountries(newCountry)
        dispatch(action)
      })
      .catch(error => {console.log(error)})
    }

}

export function destroyCountry(countryId) {

  return function thunk(dispatch) {
    return axios.delete(`/api/countries/${countryId}`, countryId)
      .then(res => res.data)
      .then(country => {
        const action = getCountries()
        dispatch(action)
      })
  }

}

export function putCountry(countryId, country) {

  return function thunk(dispatch) {
    return axios.put(`/api/countries/${countryId}`, country)
      .then(res => res.data)
      .then(updatedCountry => {
        const action = editCountry(updatedCountry)
        dispatch(action)
      })
    }

}

const initialState = {
  countries: []
}
// REDUCER FUNCTION
export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: action.countries})
    case ADD_COUNTRY:
      return Object.assign({}, state, { countries: [...state.countries, action.country] })
    case EDIT_COUNTRY:
      return Object.assign({}, state, {countries: [...state.countries, action.newCountry]})
    default:
      return state
  }
}

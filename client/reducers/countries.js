import axios from 'axios'

// ACTION TYPES
export const GET_COUNTRIES = 'GET_COUNTIRES'
// const GET_COUNTRY = 'GET_COUNTRY'

// ACTION CREATORS
export function getCountries (countries) {
  const action = { type: GET_COUNTRIES, countries }
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

// export function fetchCountry (country) {

//   return function thunk(dispatch) {
//     return axios.get(`/api/countries/${countryId}`, country)
//       .then(res => res.data)
//       .then(foundCountry => {
//         const action = getCountry(foundCountry)
//         dispatch(action)
//       })
//       .catch(error => {console.log(error)})
//     }

// }

export function postCountry(country) {

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

// export function putCountry(country) {

//   return function thunk(dispatch) {
//     return axios.put('/api/countries/:countryId', country)
//       .then(res => res.data)
//       .then(updatedCountry => {
//         const action = getCountries(updatedCountry)
//         dispatch(action)
//       })
//     }

// }

const initialState = {
  countries: []
}
// REDUCER FUNCTION
export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: action.countries})
    default:
      return state
  }
}

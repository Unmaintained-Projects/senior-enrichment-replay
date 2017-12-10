import axios from 'axios'

// ACTION TYPES
const GET_COUNTRIES = 'GET_COUNTIRES'
const GET_COUNTRY = 'GET_COUNTRY'

// ACTION CREATORS
export function getCountries (countries) {
  return {
    type: GET_COUNTRIES,
    countries
  }
}

export function getCountry (country) {
  return {
    type: GET_COUNTRY,
    country
  }
}

// THUNK CREATORS
export function fetchCountries (countries) {

  return function thunk(dispatch) {
    return axios.get('/api/countries', countries)
      .then(res => res.data)
      .then(foundCountries => {
        const action = getCountries(foundCountries)
        dispatch(action)
      })
      .catch(error => {console.log(error)})
    }

}

export function fetchCountry (country) {

  return function thunk(dispatch) {
    return axios.get(`/api/countries/${countryId}`, country)
      .then(res => res.data)
      .then(foundCountry => {
        const action = getCountry(foundCountry)
        dispatch(action)
      })
      .catch(error => {console.log(error)})
    }

}

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

// REDUCER FUNCTION
export default function countryReducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return
    case GET_COUNTRY:
      return
    default:
      return state
  }
}

import axios from 'axios'

// ACTION TYPES
export const GET_AIRCRAFTS = 'GET_AIRCRAFTS'
export const ADD_AIRCRAFT = 'ADD_AIRCRAFT'
export const DELETE_AIRCRAFT = 'DELETE_AIRCRAFT'

// ACTION CREATORS
export function getAircrafts (aircrafts) {
  const action = { type: GET_AIRCRAFTS, aircrafts }
  return action
}

export function addAircraft (newAircraft) {
  const action = { type: ADD_AIRCRAFT, newAircraft}
  return action
}

export function deleteAircraft (aircraft) {
  const action = { type: DELETE_AIRCRAFT, aircraft}
  return action
}

// THUNKS CREATORS
export function fetchAircrafts() {

    return function thunk (dispatch) {
      return axios.get('/api/aircrafts')
        .then(res => res.data)
        .then(aircrafts => {
          const action = getAircrafts(aircrafts)
          dispatch(action)
        })
    }

  }

export function postAircraft({make, model, year, type, cost, imageUrl, description, country}) {

  return function thunk(dispatch) {
    return axios.post('/api/aircrafts', {make, model, year, type, cost, imageUrl, description, country})
      .then(res => res.data)
      .then(newAircraft => {
        const action = getAircrafts(newAircraft)
        dispatch(action)
      })
  }

}

  // export function putAircraft(aircraft) {

  //   return function thunk(dispatch) {
  //     return axios.put('/api/aircrafts/:aircraft.id', aircraft)
  //       .then(res => res.data)
  //       .then(updatedAircraft => {
  //         const action = getAircraft(updatedAircraft)
  //         dispatch(action)
  //       })
  //   }

  // }

export function destroyAircraft(aircraftId) {

    return function thunk(dispatch) {
      return axios.delete(`/api/aircrafts/${aircraftId}`)
        .then(res => res.data)
        .then(aircraft => {
          const action = getAircrafts()
          dispatch(action)
        })
    }

}

const initialState =  {
  aircrafts: []
}

// REDUCER FUNCTION
export default function aircraftReducer (state = initialState, action) {
  switch (action.type) {
    case GET_AIRCRAFTS:
      return Object.assign({}, state, {aircrafts: action.aircrafts})
    case ADD_AIRCRAFT:
      return Object.assign({}, state, {aircrafts: action.newAircraft})
    default:
      return state
  }
}

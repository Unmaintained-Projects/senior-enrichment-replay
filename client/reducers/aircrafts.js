import axios from 'axios'

// ACTION TYPES
export const GET_AIRCRAFTS = 'GET_AIRCRAFTS'
export const ADD_AIRCRAFT = 'ADD_AIRCRAFT'
export const GET_AIRCRAFT_NAME = 'GET_AIRCRAFT_NAME'

// ACTION CREATORS
export function getAircrafts (aircrafts) {
  const action = { type: GET_AIRCRAFTS, aircrafts }
  return action
}

export function addAircraft (newAircraft) {
  const action = { type: ADD_AIRCRAFT, newAircraft}
  return action
}

export function getAircraftName (content) {
  const action = { type: GET_AIRCRAFT_NAME, content}
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

export function postAircraft({make, model, year, type, cost, imageUrl, desc, country}) {
  console.log('in thunk', make, model)
  return function thunk(dispatch) {
    return axios.post('/api/aircrafts', {make, model, year, type, cost, imageUrl, desc, country})
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

  // export function destroyAircraft(aircraft) {

  //   return function thunk(dispatch) {
  //     return axios.delete('/api/aircrafts/:aircraft.id', aircraft)
  //       // .then(res => res.data)
  //       .then(aircraft => {
  //         const action = deleteAircraft(aircraft)
  //         dispatch(action)
  //       })
  //   }

  // }

const initialState =  {
  aircrafts: []
  // aircraft: {},
  // newAircraft: ''
}

// REDUCER FUNCTION
export default function aircraftReducer (state = initialState, action) {
  switch (action.type) {
    case GET_AIRCRAFTS:
      return Object.assign({}, state, {aircrafts: action.aircrafts})
    case ADD_AIRCRAFT:
      return Object.assign({}, state, {aircrafts: action.newAircraft})
    case GET_AIRCRAFT_NAME:
      return Object.assign({}, state, {aircrafts: state.aircrafts.concat(action.content)})
    // case GET_AIRCRAFT:
    //   return Object.assign({}, state, {aircraft: action.aircraft})
    default:
      return state
  }
}

import axios from 'axios'

// ACTION TYPES
export const GET_AIRCRAFTS = 'GET_AIRCRAFTS'
// const GET_AIRCRAFT = 'GET_AIRCRAFT'
// const ADD_AIRCRAFT = 'ADD_AIRCRAFT'

// ACTION CREATORS
export function getAircrafts (aircrafts) {
  const action = { type: GET_AIRCRAFTS, aircrafts }
  return action
}

// export function getAircraft (aircraft) {
//   const action = { type: GET_AIRCRAFT, aircraft }
//   return action
// }

// export function addAircraft (newAircraft) {
//   const action = { type: ADD_AIRCRAFT, newAircraft}
//   return action
// }

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

  // export function fetchAircraft() {

  //   return function thunk(dispatch) {
  //     return axios.get(`/api/aircrafts/${aircraftId}`)
  //       .then(res => res.data)
  //       .then(foundAircraft => {
  //         const action = getAircraft(foundAircraft)
  //         dispatch(action)
  //       })
  //       .catch(error => {console.log(error)})
  //   }

  // }

  // export function postAircraft(aircraft) {

  //   return function thunk(dispatch) {
  //     return axios.post('/api/aircrafts', aircraft)
  //       .then(res => res.data)
  //       .then(newAircraft => {
  //         const action = getAircraft(newAircraft)
  //         dispatch(action)
  //       })
  //       .catch(error => {console.log(error)})
  //   }

  // }

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

    // case GET_AIRCRAFT:
    //   return Object.assign({}, state, {aircraft: action.aircraft})
    // case ADD_AIRCRAFT:
    //   return Object.assign({}, state, {newAircraft: action.newAircraft})
    default:
      return state
  }
}

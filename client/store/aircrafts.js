import axios from 'axios'

// INITIAL STATE
const initialState = {
  aircrafts: []
}

// ACTION TYPES
const GET_AIRCRAFTS = 'GET_AIRCRAFTS'
const GET_AIRCRAFT = 'GET_AIRCRAFT'
const ADD_AIRCRAFT = 'ADD_AIRCRAFT'
const EDIT_AIRCRAFT = 'EDIT_AIRCRAFT'
const DELETE_AIRCRAFT = 'DELETE_AIRCRAFT'

// ACTION CREATORS
export function getAircrafts (aircrafts) {
  const action = {
    type: GET_AIRCRAFTS,
    aircrafts
  }
}

export function getAircraft (aircraft) {
  const action = {
    type: GET_AIRCRAFT,
    aircraft
  }
}

export function addAircraft (aircraft) {
  const action = {
    type: ADD_AIRCRAFT,
    aircraft
  }
}

export function editAircraft (aircraft) {
  const action = {
    type: EDIT_AIRCRAFT,
    aircraft
  }
}

export function deleteAircraft (aircraft) {
  const action = {
    type: DELETE_AIRCRAFT,
    aircraft
  }
}

// THUNKS
export function fetchAircrafts(aircrafts) {

  return function thunk(dispatch) {
    return axios.get('/api/aircrafts', aircrafts)
      .then(res => res.data)
      .then(foundAircrafts => {
        const action = getAircrafts(foundAircrafts)
        dispatch(action)
      })
  }

}

export function fetchAircraft(aircraft) {

  return function thunk(dispatch) {
    return axios.get('/api/aircrafts/:aircraftId', aircraft)
      .then(res => res.data)
      .then(foundAircraft => {
        const action = getAircraft(foundAircraft)
        dispatch(action)
      })
  }

}

export function postAircraft(aircraft) {

  return function thunk(dispatch) {
    return axios.post('/api/aircrafts', aircraft)
      .then(res => res.data)
      .then(newAircraft => {
        const action = getAircraft(newAircraft)
        dispatch(action)
      })
  }

}

export function putAircraft(aircraft) {

  return function thunk(dispatch) {
    return axios.put('/api/aircrafts/:aircraft.id', aircraft)
      .then(res => res.data)
      .then(updatedAircraft => {
        const action = getAircraft(updatedAircraft)
        dispatch(action)
      })
  }

}

export function destroyAircraft(aircraft) {

  return function thunk(dispatch) {
    return axios.delete('/api/aircrafts/:aircraft.id', aircraft)
      // .then(res => res.data)
      .then(aircraft => {
        const action = deleteAircraft(aircraft)
        dispatch(action)
      })
  }

}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_AIRCRAFTS:
      return [...aircrafts]
    case GET_AIRCRAFT:
      return
    case ADD_AIRCRAFT:
      return
    case EDIT_AIRCRAFT:
      return
    case DELETE_AIRCRAFT:
      return
    default:
      return state
  }
}

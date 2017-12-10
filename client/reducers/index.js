import { combineReducers } from 'redux'
import aircraftReducer from './aircrafts'
import countryReducer from './countries'

const rootReducer = combineReducers({
  aircraftReducer,
  countryReducer
})

export default rootReducer

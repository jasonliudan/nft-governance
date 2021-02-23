import { combineReducers } from 'redux'

import proposalReducer from './proposalReducer'
import connectionReducer from './connectionReducer'

export default combineReducers({
  proposalReducer, connectionReducer
})

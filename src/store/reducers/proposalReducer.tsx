import * as ActionTypes from '../constants'

const initialState = {
  proposals: [],
}

export default function proposalReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PROPOSALS:
      return {
        ...state,
        proposals: action.proposals,
      }
    default:
      return state
  }
}

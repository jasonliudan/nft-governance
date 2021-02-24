import * as ActionTypes from '../constants'

const initialState = {
  proposals: null,
  creatingInProgress: false
}

export default function proposalReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PROPOSALS:
      return {
        ...state,
        proposals: action.proposals,
      }
    case ActionTypes.SET_PROPOSAL:
      return {
        ...state,
        proposals: state.proposals ? [...state.proposals, action.proposal] : [action.proposal],
        creatingInProgress: false
      }
    case ActionTypes.CREATE_PROPOSAL:
      return {
        ...state,
        creatingInProgress: true
      }
    default:
      return state
  }
}

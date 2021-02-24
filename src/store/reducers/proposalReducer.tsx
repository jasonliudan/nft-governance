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
    case ActionTypes.SET_CREATING_PROPOSAL_STATUS:
      return {
        ...state,
        creatingInProgress: action.status
      }
    default:
      return state
  }
}

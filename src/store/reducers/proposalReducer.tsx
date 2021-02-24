import * as ActionTypes from '../constants'

const initialState = {
  proposals: null,
  creatingInProgress: false,
  votes: null
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
    case ActionTypes.GET_VOTES:
      return {
        ...state,
        votes: null
      }
    case ActionTypes.SET_VOTES:
      return {
        ...state,
        votes: action.votes
      }
    case ActionTypes.SET_VOTE:
      return {
        ...state,
        votes: state.votes ? [...state.votes, action.vote] : [action.vote],
        votingInProgress: false
      }
    case ActionTypes.CREATE_VOTE:
      return {
        ...state,
        votingInProgress: true
      }
    case ActionTypes.SET_CREATING_VOTE_STATUS:
      return {
        ...state,
        votingInProgress: action.status
      }
    default:
      return state
  }
}

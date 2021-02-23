import * as ActionTypes from '../constants'

export const getProposals = () => {
  return {
    type: ActionTypes.GET_PROPOSALS
  }
}
export const setProposals = (proposals) => {
  return {
    type: ActionTypes.SET_PROPOSALS,
    proposals,
  }
}
export const createProposal = (proposal) => {
  return {
    type: ActionTypes.CREATE_PROPOSAL,
    proposal
  }
}
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
export const setProposal = (proposal) => {
  return {
    type: ActionTypes.SET_PROPOSAL,
    proposal,
  }
}
export const createProposal = (proposal) => {
  return {
    type: ActionTypes.CREATE_PROPOSAL,
    proposal
  }
}
export const setCreatingProposalStatus = (status) => {
  return {
    type: ActionTypes.SET_CREATING_PROPOSAL_STATUS,
    status
  }
}

//Votes
export const getVotes = (proposalHash) => {
  return {
    type: ActionTypes.GET_VOTES,
    proposalHash
  }
}
export const setVotes = (votes) => {
  return {
    type: ActionTypes.SET_VOTES,
    votes
  }
}
export const setVote = (vote) => {
  return {
    type: ActionTypes.SET_VOTE,
    vote
  }
}
export const createVote = (vote) => {
  return {
    type: ActionTypes.CREATE_VOTE,
    vote
  }
}
export const setCreatingVoteInProgress = (status) => {
  return {
    type: ActionTypes.SET_CREATING_VOTE_STATUS,
    status
  }
}

import { put, takeLatest } from 'redux-saga/effects'
import * as Effects from 'redux-saga/effects'
import Router from 'next/router'

import * as ActionTypes from '../constants'

import { getProposals, createProposal, getVotes, createVote } from '../../api'
import { setProposals, setProposal, setVotes, setVote, setCreatingProposalStatus, setCreatingVoteInProgress } from '../actions'

import { decodeHash } from '../../utils'

const call: any = Effects.call

function* workerGetProposals() {
  try {
    const proposals = yield call(getProposals)
    const decodedProposals = []
    for (let i = 0; i < proposals.length; i++) {
      const decodedProposal = yield call(decodeHash, proposals[i].hash)
      decodedProposal.hash = proposals[i].hash
      decodedProposals.push(decodedProposal)
    }
    yield put(setProposals(decodedProposals))
  } catch (error) {
    console.error()
  }
}
function* workerCreateProposal(action) {
  try {
    const proposal = yield call(createProposal, action.proposal)
    if (proposal) {
      const decodedProposal = yield call(decodeHash, proposal.hash)
      decodedProposal.hash = proposal.hash
      yield put(setProposal(decodedProposal))
      Router.push(`/detail/bondly.finance/proposal/${proposal.hash}`)
    }
    else
      yield put(setCreatingProposalStatus(false))
  } catch (error) {
    console.error()
  }
}

//Votes
function* workerGetVotes(action) {
  try {
    const votes = yield call(getVotes, action.proposalHash)
    const decodedVotes = []
    for (let i = 0; i < votes.length; i++) {
      const decodedVote = yield call(decodeHash, votes[i].hash)
      decodedVote.hash = votes[i].hash
      decodedVotes.push(decodedVote)
    }
    yield put(setVotes(decodedVotes))
  } catch (error) {
    console.error()
  }
}
function* workerCreateVote(action) {
  try {
    const vote = yield call(createVote, action.vote)
    if (vote) {
      const decodedVote = yield call(decodeHash, vote.hash)
      decodedVote.hash = vote.hash
      yield put(setVote(decodedVote))
    }
    else
      yield put(setCreatingVoteInProgress(false))
  } catch (error) {
    console.error()
  }
}


export default function* proposalSaga() {
  yield takeLatest(ActionTypes.GET_PROPOSALS, workerGetProposals)
  yield takeLatest(ActionTypes.CREATE_PROPOSAL, workerCreateProposal)
  yield takeLatest(ActionTypes.GET_VOTES, workerGetVotes)
  yield takeLatest(ActionTypes.CREATE_VOTE, workerCreateVote)
}

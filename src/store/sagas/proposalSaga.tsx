import { put, takeLatest, select } from 'redux-saga/effects'
import * as Effects from 'redux-saga/effects'
import Router, { withRouter } from 'next/router'

import * as ActionTypes from '../constants'

import { getProposals, createProposal } from '../../api'
import { setProposals, setProposal } from '../actions'

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
    const decodedProposal = yield call(decodeHash, proposal.hash)
    decodedProposal.hash = proposal.hash
    yield put(setProposal(decodedProposal))
    Router.push(`/detail/bondly.finance/proposal/${proposal.hash}`)
  } catch (error) {
    console.error()
  }
}
export default function* proposalSaga() {
  yield takeLatest(ActionTypes.GET_PROPOSALS, workerGetProposals)
  yield takeLatest(ActionTypes.CREATE_PROPOSAL, workerCreateProposal)
}

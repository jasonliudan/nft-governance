import { put, takeLatest, select } from 'redux-saga/effects'
import * as Effects from 'redux-saga/effects'

import * as ActionTypes from '../constants'

import { getProposals, createProposal } from '../../api'
import { setProposals } from '../actions'

const call: any = Effects.call

function* workerGetProposals() {
  try {
    const proposals = yield call(getProposals)
    yield put(setProposals(proposals))
  } catch (error) {
    console.error()
  }
}
function* workerCreateProposal(action) {
  try {
    yield call(createProposal, action.proposal)
  } catch (error) {
    console.error()
  }
}
export default function* proposalSaga() {
  yield takeLatest(ActionTypes.GET_PROPOSALS, workerGetProposals)
  yield takeLatest(ActionTypes.CREATE_PROPOSAL, workerCreateProposal)
}

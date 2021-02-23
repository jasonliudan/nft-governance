import { all, fork } from 'redux-saga/effects'

import watchConnectionSaga from './connectionSaga'
import proposalSaga from './proposalSaga'

export default function* root() {
  yield all([fork(watchConnectionSaga), fork(proposalSaga)])
}

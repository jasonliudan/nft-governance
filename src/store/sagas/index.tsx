import { all, fork } from 'redux-saga/effects'

import watchConnectionSaga from './connectionSaga'

export default function* root() {
  yield all([fork(watchConnectionSaga)])
}

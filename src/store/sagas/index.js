import { all, takeLatest } from 'redux-saga/es/effects';

import booksSagas from './books';

export default function* rootSaga() {
  return yield all([booksSagas()]);
}

import { all } from 'redux-saga/es/effects';

import booksSagas from './books';
import featuredBooksSagas from './featuredBooks';

export default function* rootSaga() {
  return yield all([booksSagas(), featuredBooksSagas()]);
}

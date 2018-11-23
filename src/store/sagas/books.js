import { call, put, all, takeLatest } from 'redux-saga/es/effects';
import { Creators as BooksActions } from '../ducks/books';
import { Types as BooksTypes } from '../ducks/books';
import api from '../../services/api';

function* getBooks() {
  try {
    const response = yield call(api.get, '/volumes');
    yield put(BooksActions.getBooksSuccess(response.data.items));
  } catch (err) {
    yield put(BooksActions.getBooksFailure('err'));
  }
}

export default function* booksSagas() {
  yield all([takeLatest(BooksTypes.GET_REQUEST, getBooks)]);
}

import { call, put, all, takeLatest } from 'redux-saga/es/effects';
import { Creators as FeaturedBooksActions } from '../ducks/featuredBooks';
import { Types as FeaturedBooksTypes } from '../ducks/featuredBooks';
import api from '../../services/api';
import { delay } from '../../utils/fakeFunctions';

function* getFeaturedbooks() {
  const fakeQuery = 'harry';
  const maxResults = 3;
  try {
    yield call(delay, 2000);
    const response = yield call(api.get, '/volumes', {
      q: fakeQuery,
      maxResults,
    });
    yield put(
      FeaturedBooksActions.getFeaturedBooksSuccess(response.data.items),
    );
  } catch (err) {
    yield put(
      FeaturedBooksActions.getFeaturedBooksFailure(
        'Erro ao buscar dados da API',
      ),
    );
  }
}

export default function* featuredBooksSagas() {
  yield all([takeLatest(FeaturedBooksTypes.GET_REQUEST, getFeaturedbooks)]);
}

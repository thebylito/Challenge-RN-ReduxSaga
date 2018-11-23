import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default () => {
  const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
  sagaMiddleware.run(sagas);
  return { store };
};

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

export default () => {
  const store = createAppropriateStore(
    reducers,
    compose(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(sagas);
  return { store };
};

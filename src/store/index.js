import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import tron from 'config/ReactotronConfig';

import sagas from './sagas';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__
  ? tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const createAppropriateStore = __DEV__
  ? tron.createStore
  : createStore;

const store = createAppropriateStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };

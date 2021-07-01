import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from './reducers/auth/auth';
import createSagaMiddleware from '@redux-saga/core';
import {watchLogin, watchRegister} from './reducers/auth/sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({auth: authReducer.reducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configuring reducers and middleware
export const store = configureStore({reducer: persistedReducer, middleware});

export const persistor = persistStore(store);

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);

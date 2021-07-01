import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './src/redux/store';

import AppNavigator from './src/navigation/appNavigator';

/**
 *
 * @returns initiates application
 */
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default App;

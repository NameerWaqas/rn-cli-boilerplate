import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './src/redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';

import AppNavigator from './src/navigation/appNavigator';

const queryClient = new QueryClient();

/**
 *
 * @returns initiates application
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);

export default App;

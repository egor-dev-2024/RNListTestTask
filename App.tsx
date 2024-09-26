import React from 'react';

import {ListScreen} from './src/screens/List/List.screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ListScreen />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

import * as React from 'react';

import { store } from 'react-native-status';
import { Provider } from 'react-redux';
import ListStatus from './components/list-status';

export default function App() {
  return (
    <Provider store={store}>
      <ListStatus />
    </Provider>
  );
}

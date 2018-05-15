import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Game from './App';

// App entry point.
export default () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

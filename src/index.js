import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Game from './App';

// eslint-disable-next-line
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

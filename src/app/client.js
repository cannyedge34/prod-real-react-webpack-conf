import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from '../shared/configureStore';

const store = configureStore(window.initialState);

import App from './App';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootElement
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default);
  });
}

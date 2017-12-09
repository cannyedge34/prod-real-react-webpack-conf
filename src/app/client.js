import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    renderApp(require('./containers/App').default);
  });
}

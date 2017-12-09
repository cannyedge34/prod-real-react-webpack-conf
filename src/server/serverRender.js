import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../shared/configureStore';
import App from '../app/App';
import html from './html';
import routes from '../shared/routes';
import serialize from 'serialize-javascript';

export default function serverRender() {
  return (req, res, next) => {
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        acc.push(
          Promise.resolve(
            store.dispatch(route.component.initialAction('server'))
          )
        );
      }

      return acc;
    }, []);

    Promise.all(promises)
      .then(() => {
        const context = {};
        const initialState = store.getState();

        const markup = renderToString(
          <Provider store={store}>
            <App server location={req.url} context={context} />
          </Provider>
        );
        if (context.url) {
          res.redirect(301, context.url);
        } else {
          res.send(
            html({
              markup,
              initialState,
              serialize
            })
          );
        }
      })
      .catch(e => {
        console.log('Promise error: ', e); // eslint-disable-line
      });
  };
}

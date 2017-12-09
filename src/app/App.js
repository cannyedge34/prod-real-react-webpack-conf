import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

import routes from '../shared/routes';

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

  let router = (
    <BrowserRouter>
      <Switch>{routesMap}</Switch>
    </BrowserRouter>
  );

  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>{routesMap}</Switch>
      </StaticRouter>
    );
  }

  return <div>{router}</div>;
};

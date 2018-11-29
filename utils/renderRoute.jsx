import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import Helmet, { HelmetProvider } from 'react-helmet-async';

import generateStore from './generateStore.js';
import rootReducer from '../theme/reducers/root';

import Head from '../theme/components/Head.jsx';

const renderRoute = function(routes, url, state, res) {
  /*
    we assume our routes are generated dynamically.
    we match our routes with a route path.
    when we do, we generate a store with all the components' data (provided by the server).
    this store state gets injected into the pre-rendered html.
  */

  const store = generateStore(rootReducer, state);
  const branch = matchRoutes(routes, url);
  const promises = branch.map(function({ route }) {
    const fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
  });

  return Promise.all(promises).then(function(data) {
    console.log('data', data);
    const context = {};

    const string = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>          
            {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );


    return string;
  })
};

export default renderRoute;
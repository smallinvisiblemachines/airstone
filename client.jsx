// IMPORTS
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// THEME
import theme from './theme/index';
import rootReducer from './theme/reducers/root';
import Head from './theme/components/Head.jsx';

// UTILS
import generateStore from './utils/generateStore.js';
import generateRoutes from './utils/generateRoutes';


/*
  our preloaded state is manifested in a JSON object already set as a global variable
*/

const state = window.__PRELOADED_STATE__;
console.log('PRELOADED STATE:', state);

const store = generateStore(
  rootReducer,
  state,
  applyMiddleware(
    promise(),
    thunk,
    createLogger()
  )
);

const routes = generateRoutes(theme.pageTypes, state.pages);

const Client = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Head/>
          { renderRoutes(routes) }
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

render(
  <Client />,
  document.getElementById('root')
);
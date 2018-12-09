const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

// IMPORTS
import React from 'react';
import { renderToString } from 'react-dom/server';

// UTILS
import renderRoute from '../utils/renderRoute.jsx';
import renderDocument from '../utils/renderDocument';
import generateRoutes from '../utils/generateRoutes';

// THEME
import theme from '../theme/index';
import manifest from '../manifest.json';

// COMPONENTS
import App from '../theme/components/App.jsx';

// const routes = {
//   views: importRoutes('./views'),
//   api: importRoutes('./api')
// };



async function handleRoutes(req, res) {
  const Page = keystone.list('Page');
  const pages = await Page.model.find({});

  const Theme = keystone.list('Theme');
  const themes = await Theme.model.find({});

  const routes = generateRoutes(theme.pageTypes, pages);
  // console.log(req);

  const path = req.url;
  // console.log({path});

  const state = {
    manifest,
    pages,
    themes,
    current: {
      path
    }
  };

  const body = await renderRoute(routes, path, state, res);
  const doc = renderDocument(manifest, body, state);

  res.send(doc);
}

exports = module.exports = function(app) {
  app.get('/assets/bundle.js', function(req, res) {
    res.sendFile('bundle.js', {
      root: `${__dirname}/../build/`
    });
  });
  app.get('/global.css', function(req, res) {
    res.sendFile('global.css', {
      root: `${__dirname}/../build/`
    });
  });
  app.get('/', handleRoutes);
  app.get('/*', handleRoutes);
  
};
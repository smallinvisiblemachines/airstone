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
import theme from '../theme/index.js';
import manifest from '../manifest.json';

// COMPONENTS
import App from '../theme/components/App.jsx';
import Head from '../theme/components/Head.jsx';

async function handleRoutes(req, res) {
  const Page = keystone.list('Page');
  const pages = await Page.model.find({});

  const Theme = keystone.list('Theme');
  const themes = await Theme.model.find({});

  const currentTheme = await Theme.model.findOne({
    isActive: true
  });
  console.log(theme)
  const routes = generateRoutes(theme.pageTypes, pages);
  const path = req.url;

  const state = {
    manifest,
    pages,
    themes,
    current: {
      path,
      theme: currentTheme
    }
  };

  const body = await renderRoute(routes, path, state, res);
  const doc = renderDocument(<Head { ...manifest } theme={state.current.theme}/>, body, state);

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
const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
import renderRoute from '../utils/renderRoute.jsx';
import generateRoutes from '../utils/generateRoutes';
import theme from '../theme/index';

import renderDocument from '../utils/renderDocument';

import manifest from '../manifest.json';

// const routes = {
//   views: importRoutes('./views'),
//   api: importRoutes('./api')
// };


async function handleRoutes(req, res) {
  const Page = keystone.list('Page');
  const pages = await Page.model.find({});
  const routes = generateRoutes(theme.pageTypes, pages);
  // console.log(req);

  const path = req.url;
  console.log({path});

  const state = {
    manifest,
    pages,
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
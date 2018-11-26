const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
import renderRoute from '../utils/renderRoute.jsx';
import generateRoutes from '../utils/generateRoutes';
import theme from '../theme/index';

// const routes = {
//   views: importRoutes('./views'),
//   api: importRoutes('./api')
// };

console.log(theme)

async function handleRoutes(req, res) {

  const Page = keystone.list('Page');
  const pages = await Page.model.find({});
  const routes = generateRoutes(theme.pageTypes, pages);


  // console.log(req.params, pages);
  console.log(routes);
  // console.log(req.route);

  const string = await renderRoute(routes, req.route.path, {}, res);

  res.send(string);
}

exports = module.exports = function(app) {

  app.get('/', handleRoutes);
  app.get('/*', handleRoutes);
};
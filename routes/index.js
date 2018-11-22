const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const routes = {
  views: importRoutes('./views')
};

exports = module.exports = function(app) {
  app.get('/', routes.views.index);
};
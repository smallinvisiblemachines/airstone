const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

// const routes = {
//   views: importRoutes('./views'),
//   api: importRoutes('./api')
// };

const pageTypes = {
  landing: require('../components/pages/Index.jsx')
};

exports = module.exports = function(app) {
  app.get('/', async function(req, res) {

    const Page = keystone.list('Page');
    const pages = await Page.model.find({});
    // console.log(pages);
    // console.log(pageTypes);
    // console.log(req.route);
  });
};
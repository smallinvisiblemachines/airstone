const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);


module.exports = async function(req, res) {

  console.log(req.route.path);
  

  const Page = keystone.list('Page');

  const pages = await Page.model.find({});


  console.log(pages)

  res.send('this is just some text');
};
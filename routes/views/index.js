const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);


module.exports = async function(req, res) {
  /*
    change the route logic so that we dynamically pre-render a react component
    based on the route path we are given.
    can use blogBust/universalBust for examples of logic.
  */
  console.log(req.route.path);


  const Page = keystone.list('Page');

  const pages = await Page.model.find({});


  console.log(pages)

  res.send('this is just some text');
};
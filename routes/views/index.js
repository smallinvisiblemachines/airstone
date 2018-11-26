const keystone = require('keystone');

module.exports = async function(req, res) {

  const Page = keystone.list('Page');

  const pages = await Page.model.find({});

  console.log(pages)

  res.send('this is just some text');
};
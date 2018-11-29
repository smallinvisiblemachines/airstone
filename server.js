const keystone = require('keystone');

keystone.init({
  'cookie secret': 'bl#rg!',
  'name': 'stone',
  'user model': 'User',
  'auto update': true,
  'auth': true
});

keystone.import('models');
keystone.set('routes', require('./routes'));

keystone.start();
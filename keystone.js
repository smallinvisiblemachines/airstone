const keystone = require('keystone');

keystone.init({
  'cookie secret': 'bl#rg!',
  'name': 'stone',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  views: 'templates/views',
  'view engine': 'pug'
});

keystone.set('theme', {
  test: 'my arbitrary object'
});

keystone.import('models');
keystone.set('routes', require('./routes'));

// console.log('keystone', keystone);

keystone.start();
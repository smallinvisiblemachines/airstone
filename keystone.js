const keystone = require('keystone');
const calcite = require('./theme/index');

keystone.init({
  'cookie secret': 'bl#rg!',
  'name': 'stone',
  'user model': 'User',
  'auto update': true,
  'auth': true
});

keystone.set('theme', calcite);

keystone.import('models');
keystone.set('routes', require('./routes'));

console.log('keystone', keystone);

keystone.start();
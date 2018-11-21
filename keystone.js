import keystone from 'keystone';

keystone.init({
  'cookie secret': 'bl#rg!',
  // 'name': 'stone',
  // 'user model': 'User',
  // 'auto update': true,
  // 'auth': true
});

// keystone.import('models');

console.log('keystone', keystone);

keystone.start();
import App from '../theme/components/App.jsx';

/*
generate a structure like the object below. 
for a static site, this object would be static too.
for us, we generate it dynamically based on
pages saved in Keystone, then a set of
arbitrary page types (React Components)

{
  component: App,
  routes: [
    {
      path: '/',
      exact: true,
      component: Home
    },
    {
      path: '/blog',
      exact: true,
      component: Blog
    },
    {
      path: '/blog/:year',
      component: Year,
      routes: [
        {
          path: '/blog/:year/02',
          component: Month,
        },
      ]
    }
  ]
}
*/

const generateRoutes = function(types, pages) {
  // our app is like a nested object,
  // always starting with a topmost component.
  const routes = {
    component: App,
    routes: []
  };

  console.log('generateRoutes', types, pages);

  for (let p = 0; pages.length > p; ++p) {

  }
};

export default generateRoutes;
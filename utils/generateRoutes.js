import App from '../theme/components/App.jsx';
import Head from '../theme/components/Head.jsx';

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
  const tree = {
    component: App,
    routes: []
  };

  for (let p = 0; pages.length > p; ++p) {
    // compare our page types with our supplied types from the theme
    if ( types.hasOwnProperty( pages[p].type ) ) {

      tree.routes.push({
        path: pages[p].path,
        exact: true,
        component: types[ pages[p].type ]
      });

    }
  }

  return [ tree ];
};

export default generateRoutes;
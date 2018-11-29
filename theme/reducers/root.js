import { combineReducers } from 'redux';

// REDUCERS
import manifest from './manifest.js';
import pages from './pages.js';

// import all other reducers here
// the root reducer will be fed to any generated store
const rootReducer = combineReducers({
  manifest,
  pages
});

export default rootReducer;
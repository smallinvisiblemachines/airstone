import { combineReducers } from 'redux';

// REDUCERS
import current from './current.js';
import manifest from './manifest.js';
import pages from './pages.js';

// import all other reducers here
// the root reducer will be fed to any generated store
const rootReducer = combineReducers({
  current,
  manifest,
  pages
});

export default rootReducer;